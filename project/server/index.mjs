import http from "node:http";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";
import { createStore, dateRange, summarize, listIPs, today } from "./store.mjs";
const project = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);
const production = process.argv.includes("--production");
const store = createStore(
  path.resolve(project, process.env.DATA_DIR || "data"),
);
const sessions = new Map(),
  limits = new Map();
const locales = new Set(["zh-CN", "zh-Hant", "ja", "ko", "tr", "en"]);
const uuid = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
const validPath = (s) =>
  typeof s === "string" && /^\/(?:[a-zA-Z0-9_/-]*)$/.test(s) && s.length < 200;
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".bin": "application/octet-stream",
};
const fail = (status, message) => Object.assign(new Error(message), { status });
function json(res, status, value, headers = {}) {
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    ...headers,
  });
  res.end(value === null ? "" : JSON.stringify(value));
}
async function body(req) {
  let bytes = 0,
    chunks = [];
  for await (const chunk of req) {
    bytes += chunk.length;
    if (bytes > 32768) throw fail(413, "请求内容过大。");
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString());
  } catch {
    throw fail(400, "无效 JSON。");
  }
}
function throttle(key, max, period) {
  const now = Date.now(),
    times = (limits.get(key) || []).filter((t) => now - t < period);
  if (times.length >= max) throw fail(429, "提交过于频繁，请稍后重试。");
  times.push(now);
  limits.set(key, times);
}
function authenticate(req) {
  const token = req.headers.cookie?.match(
      /(?:^|;\s*)wedulab_admin=([a-f0-9]+)/,
    )?.[1],
    expiry = sessions.get(token);
  if (!expiry || expiry < Date.now()) {
    sessions.delete(token);
    throw fail(401, "请先登录。");
  }
  return token;
}
function equalSecret(a, b) {
  const left = crypto.createHash("sha256").update(a).digest(),
    right = crypto.createHash("sha256").update(b).digest();
  return crypto.timingSafeEqual(left, right);
}
const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost"),
      pathname = decodeURIComponent(url.pathname),
      ip = req.socket.remoteAddress || "";
    res.setHeader("x-content-type-options", "nosniff");
    if (pathname.split("/").some((segment) => segment.startsWith(".")))
      throw fail(404, "文件不存在。");
    if (req.method !== "GET" && req.method !== "HEAD" && req.headers.origin) {
      const origin = new URL(req.headers.origin);
      if (origin.host !== req.headers.host) throw fail(403, "不允许跨站提交。");
    }
    if (pathname === "/api/v1/analytics/events" && req.method === "POST") {
      const e = await body(req);
      if (
        !e ||
        !uuid.test(e.event_id) ||
        !uuid.test(e.visitor_id) ||
        !validPath(e.path) ||
        !["desktop", "mobile", "tablet"].includes(e.device) ||
        !locales.has(e.locale)
      )
        throw fail(400, "无效访问事件。");
      const referrer = typeof e.referrer === "string" ? e.referrer : "";
      if (
        referrer.length > 300 ||
        (referrer && !/^https?:\/\/[^\s]+$/.test(referrer))
      )
        throw fail(400, "无效来源。");
      const language = typeof e.language === "string" ? e.language : "";
      if (language.length > 35 || !/^[A-Za-z0-9-]*$/.test(language))
        throw fail(400, "无效语言。");
      throttle("events:" + ip, 600, 60000);
      store.addEvent({ ...e, referrer, language, ip });
      return json(res, 204, null);
    }
    if (pathname === "/api/v1/feedback" && req.method === "POST") {
      const f = await body(req),
        message = typeof f?.message === "string" ? f.message.trim() : "",
        contact = typeof f?.contact === "string" ? f.contact.trim() : "";
      if (
        !["bug", "content", "suggestion"].includes(f?.category) ||
        [...message].length < 5 ||
        [...message].length > 2000 ||
        contact.length > 200 ||
        !validPath(f?.path) ||
        !locales.has(f?.locale)
      )
        throw fail(400, "请检查反馈内容。");
      throttle("feedback:" + ip, 5, 60000);
      return json(res, 201, {
        id: store.addFeedback({ ...f, message, contact }),
      });
    }
    if (pathname === "/api/v1/analytics/session") {
      if (req.method === "POST") {
        throttle("login:" + ip, 10, 60000);
        const data = await body(req),
          password = process.env.ADMIN_PASSWORD;
        if (!password) throw fail(503, "请在服务端配置 ADMIN_PASSWORD。");
        if (
          typeof data?.password !== "string" ||
          !equalSecret(data.password, password)
        )
          throw fail(401, "密码不正确。");
        const token = crypto.randomBytes(32).toString("hex");
        sessions.set(token, Date.now() + 8 * 3600000);
        return json(
          res,
          200,
          { today: today(), timezone: "Asia/Shanghai" },
          {
            "set-cookie": `wedulab_admin=${token}; HttpOnly; SameSite=Strict; Path=/api/v1/analytics; Max-Age=28800${req.socket.encrypted || process.env.COOKIE_SECURE === "1" ? "; Secure" : ""}`,
          },
        );
      }
      const token = authenticate(req);
      if (req.method === "DELETE") {
        sessions.delete(token);
        return json(res, 204, null, {
          "set-cookie":
            "wedulab_admin=; HttpOnly; SameSite=Strict; Path=/api/v1/analytics; Max-Age=0",
        });
      }
      if (req.method === "GET")
        return json(res, 200, { today: today(), timezone: "Asia/Shanghai" });
      throw fail(405, "不支持此方法。");
    }
    if (pathname.startsWith("/api/v1/analytics/")) {
      authenticate(req);
      if (req.method !== "GET") throw fail(405, "不支持此方法。");
      if (pathname.endsWith("/feedback"))
        return json(
          res,
          200,
          store.feedback(Number(url.searchParams.get("before"))),
        );
      if (pathname.endsWith("/summary"))
        return json(
          res,
          200,
          summarize(store.events(), dateRange(url.searchParams)),
        );
      if (pathname.endsWith("/ips"))
        return json(
          res,
          200,
          listIPs(
            store.events(),
            url.searchParams,
            dateRange(url.searchParams),
          ),
        );
      throw fail(404, "接口不存在。");
    }
    if (pathname.startsWith("/api/")) throw fail(404, "接口不存在。");
    if (!["GET", "HEAD"].includes(req.method))
      throw fail(405, "不支持此方法。");
    const root = production ? path.join(project, "dist") : project;
    let file;
    if (pathname.startsWith("/src/")) file = path.resolve(root, "." + pathname);
    else if (pathname.startsWith("/assets/") || pathname.startsWith("/fonts/"))
      file = path.resolve(
        production ? root : path.join(project, "public"),
        "." + pathname,
      );
    else if (
      pathname === "/" ||
      pathname.endsWith(".html") ||
      !path.extname(pathname)
    ) {
      const locale = locales.has(url.searchParams.get("lang"))
        ? url.searchParams.get("lang")
        : "zh-CN";
      const template = path.resolve(
        production ? root : path.join(project, "public"),
        "pages",
        locale,
        pathname === "/"
          ? "index.html"
          : pathname.replace(/^\//, "").replace(/\/$/, "") + ".html",
      );
      const templatesRoot = path.join(
        production ? root : path.join(project, "public"),
        "pages",
      );
      file =
        template.startsWith(templatesRoot + path.sep) &&
        (await fs
          .stat(template)
          .then((s) => s.isFile())
          .catch(() => false))
          ? template
          : path.join(root, "index.html");
    } else throw fail(404, "文件不存在。");
    const safeRoot = production
      ? root
      : pathname.startsWith("/src/")
        ? path.join(project, "src")
        : pathname.startsWith("/assets/") || pathname.startsWith("/fonts/")
          ? path.join(project, "public")
          : root;
    if (
      file !== path.join(root, "index.html") &&
      !file.startsWith(safeRoot + path.sep)
    )
      throw fail(403, "拒绝访问。");
    const bytes = await fs.readFile(file).catch(() => {
      throw fail(404, "文件不存在。");
    });
    res.writeHead(200, {
      "content-type": types[path.extname(file)] || "application/octet-stream",
      "cache-control": "no-cache",
    });
    res.end(req.method === "HEAD" ? undefined : bytes);
  } catch (e) {
    json(res, e.status || 500, {
      error: e.status ? e.message : "服务暂时不可用。",
    });
    if (!e.status) console.error(e);
  }
});
server.on("error", (error) => {
  console.error(
    error.code === "EADDRINUSE"
      ? "端口已被占用，请更换 PORT 或关闭已有服务。"
      : error.message,
  );
  store.close();
  process.exitCode = 1;
});
server.listen(
  Number(process.env.PORT ?? 4174),
  process.env.HOST || "127.0.0.1",
  () =>
    console.log(
      `WeduLab: http://${process.env.HOST || "127.0.0.1"}:${server.address().port}`,
    ),
);
const maintenance = setInterval(() => {
  const now = Date.now();
  for (const [key, expiry] of sessions) if (expiry < now) sessions.delete(key);
  for (const [key, times] of limits)
    if (times.every((t) => now - t > 60000)) limits.delete(key);
}, 60000);
maintenance.unref();
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () =>
    server.close(() => {
      store.close();
      process.exit(0);
    }),
  );
