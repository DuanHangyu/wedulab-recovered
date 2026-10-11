import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { once } from "node:events";
import { createStore, dateRange, summarize } from "../server/store.mjs";
const project = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

test("feedback, analytics, admin authentication and public file boundaries", async () => {
  const directory = await fs.mkdtemp(path.join(os.tmpdir(), "wedulab-api-"));
  const password = crypto.randomBytes(32).toString("hex");
  const child = spawn(process.execPath, ["server/index.mjs"], {
    cwd: project,
    env: {
      ...process.env,
      ADMIN_PASSWORD: password,
      PORT: "0",
      DATA_DIR: directory,
    },
    stdio: ["ignore", "pipe", "pipe"],
  });
  let output = "";
  const origin = await new Promise((resolve, reject) => {
    const timeout = setTimeout(
      () => reject(new Error("Server did not start")),
      10000,
    );
    child.stdout.on("data", (chunk) => {
      output += chunk;
      const match = output.match(/http:\/\/127\.0\.0\.1:\d+/);
      if (match) {
        clearTimeout(timeout);
        resolve(match[0]);
      }
    });
    child.once("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error("Server exited " + code));
    });
  });
  const request = (route, method = "GET", data, headers = {}) =>
    fetch(origin + route, {
      method,
      headers: {
        ...(data ? { "content-type": "application/json" } : {}),
        ...headers,
      },
      body: data ? JSON.stringify(data) : undefined,
    });
  try {
    assert.equal((await request("/api/v1/analytics/summary")).status, 401);
    assert.equal((await request("/api/v1/analytics/feedback")).status, 401);
    assert.equal(
      (
        await request("/api/v1/analytics/session", "POST", {
          password: "incorrect",
        })
      ).status,
      401,
    );
    const login = await request("/api/v1/analytics/session", "POST", {
      password,
    });
    assert.equal(login.status, 200);
    assert.match(login.headers.get("set-cookie"), /HttpOnly/);
    assert.match(login.headers.get("set-cookie"), /SameSite=Strict/);
    const cookie = login.headers.get("set-cookie").split(";")[0];
    const event = {
      event_id: crypto.randomUUID(),
      visitor_id: crypto.randomUUID(),
      path: "/labs/contour",
      referrer: "",
      device: "desktop",
      language: "zh-CN",
      locale: "zh-CN",
    };
    assert.equal(
      (await request("/api/v1/analytics/events", "POST", event)).status,
      204,
    );
    assert.equal(
      (await request("/api/v1/analytics/events", "POST", event)).status,
      204,
    );
    assert.equal(
      (
        await request("/api/v1/analytics/events", "POST", {
          ...event,
          event_id: "invalid",
        })
      ).status,
      400,
    );
    const summary = await (
      await request("/api/v1/analytics/summary", "GET", undefined, { cookie })
    ).json();
    assert.equal(summary.pv, 1);
    assert.equal(summary.uv, 1);
    assert.equal(summary.pages[0].key, event.path);
    assert.equal(summary.daily.length, 30);
    assert.equal(
      (
        await request(
          "/api/v1/analytics/summary?from=2026-02-30&to=2026-03-02",
          "GET",
          undefined,
          { cookie },
        )
      ).status,
      400,
    );
    const feedback = {
      category: "bug",
      message: "测试问题反馈文本",
      contact: "",
      path: "/labs/contour",
      locale: "zh-CN",
    };
    assert.equal(
      (
        await request("/api/v1/feedback", "POST", {
          ...feedback,
          message: "短",
        })
      ).status,
      400,
    );
    const result = await (
      await request("/api/v1/feedback", "POST", feedback)
    ).json();
    assert.ok(Number.isInteger(result.id));
    const inbox = await (
      await request("/api/v1/analytics/feedback", "GET", undefined, { cookie })
    ).json();
    assert.equal(inbox.items[0].message, feedback.message);
    const ips = await (
      await request("/api/v1/analytics/ips", "GET", undefined, { cookie })
    ).json();
    assert.equal(ips.total, 1);
    assert.equal(ips.items[0].status, "private");
    assert.equal(
      (
        await request("/api/v1/feedback", "POST", feedback, {
          origin: "https://example.org",
        })
      ).status,
      403,
    );
    for (let i = 0; i < 4; i++)
      assert.equal(
        (await request("/api/v1/feedback", "POST", feedback)).status,
        201,
      );
    assert.equal(
      (await request("/api/v1/feedback", "POST", feedback)).status,
      429,
    );
    assert.equal((await request("/.env")).status, 404);
    assert.notEqual(
      (await request("/src/%2e%2e%2fserver/store.mjs")).status,
      200,
    );
    const englishLab = await request("/labs/water?lang=en");
    assert.equal(englishLab.status, 200);
    const html = await englishLab.text();
    assert.match(html, /<html lang="en">/);
    assert.match(html, /Water Cycle 3D Sandbox/);
    assert.match(html, /class="seo"/);
    assert.match(html, /src="\/src\/main.js"/);
    assert.equal((await request("/assets/does-not-exist.js")).status, 404);
    assert.equal(
      (
        await request("/api/v1/analytics/session", "DELETE", undefined, {
          cookie,
        })
      ).status,
      204,
    );
    assert.equal(
      (
        await request("/api/v1/analytics/feedback", "GET", undefined, {
          cookie,
        })
      ).status,
      401,
    );
  } finally {
    child.kill("SIGTERM");
    await once(child, "exit");
    const reopened = createStore(directory);
    assert.equal(reopened.events().length, 1);
    assert.equal(reopened.feedback().items.length, 5);
    reopened.close();
    await fs.rm(directory, { recursive: true, force: true });
  }
});

test("statistics respect Shanghai calendar, distinct visitors and previous periods", () => {
  const event = (id, when, path = "/") => ({
    visitor_id: id,
    created_at: when,
    path,
    device: "desktop",
    referrer: "",
    ip: "127.0.0.1",
    language: "zh-CN",
    locale: "zh-CN",
  });
  const all = [
    event("returning", "2026-10-09T17:00:00Z"),
    event("returning", "2026-10-10T17:00:00Z"),
    event("new", "2026-10-11T01:00:00Z", "/labs/earth"),
  ];
  const range = dateRange(
    new URLSearchParams({ from: "2026-10-11", to: "2026-10-11" }),
  );
  const s = summarize(all, range);
  assert.equal(s.pv, 2);
  assert.equal(s.uv, 2);
  assert.equal(s.new_visitors, 1);
  assert.equal(s.previous.pv, 1);
  assert.equal(s.daily[0].key, "2026-10-11");
  assert.throws(() =>
    dateRange(new URLSearchParams({ from: "2025-01-01", to: "2026-10-11" })),
  );
});
