// Reconstructed compatibility backend. Original server code/data was not public.
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
export function createStore(directory) {
  fs.mkdirSync(directory, { recursive: true });
  const db = new DatabaseSync(path.join(directory, "wedulab.sqlite"));
  db.exec(`PRAGMA journal_mode=WAL;
    CREATE TABLE IF NOT EXISTS events (
      event_id TEXT PRIMARY KEY, visitor_id TEXT NOT NULL, path TEXT NOT NULL,
      referrer TEXT NOT NULL, device TEXT NOT NULL, language TEXT NOT NULL,
      locale TEXT NOT NULL, ip TEXT NOT NULL, created_at TEXT NOT NULL);
    CREATE INDEX IF NOT EXISTS events_date ON events(created_at);
    CREATE TABLE IF NOT EXISTS feedback (
      id INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT NOT NULL,
      message TEXT NOT NULL, contact TEXT NOT NULL, path TEXT NOT NULL,
      locale TEXT NOT NULL, created_at TEXT NOT NULL);`);
  return {
    close: () => db.close(),
    addEvent: (e) =>
      db
        .prepare("INSERT OR IGNORE INTO events VALUES (?,?,?,?,?,?,?,?,?)")
        .run(
          e.event_id,
          e.visitor_id,
          e.path,
          e.referrer,
          e.device,
          e.language,
          e.locale,
          e.ip,
          new Date().toISOString(),
        ),
    addFeedback: (f) =>
      Number(
        db
          .prepare(
            "INSERT INTO feedback(category,message,contact,path,locale,created_at) VALUES(?,?,?,?,?,?)",
          )
          .run(
            f.category,
            f.message,
            f.contact,
            f.path,
            f.locale,
            new Date().toISOString(),
          ).lastInsertRowid,
      ),
    feedback: (before) => {
      const items = db
        .prepare(
          "SELECT * FROM feedback WHERE id < ? ORDER BY id DESC LIMIT 51",
        )
        .all(before || Number.MAX_SAFE_INTEGER);
      return { items: items.slice(0, 50), has_more: items.length > 50 };
    },
    events: () => db.prepare("SELECT * FROM events ORDER BY created_at").all(),
  };
}
const timezone = "Asia/Shanghai";
const day = (d) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(d));
export const today = () => day(Date.now());
const shift = (value, n) =>
  new Date(Date.parse(value + "T12:00:00Z") + n * 86400000)
    .toISOString()
    .slice(0, 10);
const count = (rows) => ({
  pv: rows.length,
  uv: new Set(rows.map((e) => e.visitor_id)).size,
  unique_ips: new Set(rows.map((e) => e.ip)).size,
});
function group(rows, key) {
  const groups = new Map();
  for (const e of rows) {
    const k = String(key(e));
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k).push(e);
  }
  return [...groups]
    .map(([key, items]) => ({ key, ...count(items) }))
    .sort((a, b) => b.pv - a.pv);
}
export function dateRange(params) {
  const from = params.get("from") || shift(today(), -29),
    to = params.get("to") || today();
  const isDate = (s) =>
    /^\d{4}-\d{2}-\d{2}$/.test(s) &&
    Number.isFinite(Date.parse(s)) &&
    new Date(s).toISOString().slice(0, 10) === s;
  const days = (Date.parse(to) - Date.parse(from)) / 86400000 + 1;
  if (
    !isDate(from) ||
    !isDate(to) ||
    !Number.isInteger(days) ||
    days < 1 ||
    days > 366
  )
    throw Object.assign(new Error("请选择有效日期，最多查询 366 天。"), {
      status: 400,
    });
  return { from, to, days };
}
export function summarize(all, { from, to, days }) {
  const rows = all.filter(
    (e) => day(e.created_at) >= from && day(e.created_at) <= to,
  );
  const previousFrom = shift(from, -days),
    previousTo = shift(from, -1);
  const previous = all.filter(
    (e) => day(e.created_at) >= previousFrom && day(e.created_at) <= previousTo,
  );
  const earliest = new Map();
  for (const e of all)
    if (!earliest.has(e.visitor_id))
      earliest.set(e.visitor_id, day(e.created_at));
  const daily = Array.from({ length: days }, (_, i) => {
    const key = shift(from, i);
    return { key, ...count(rows.filter((e) => day(e.created_at) === key)) };
  });
  const hours = group(rows, (e) =>
    new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      hourCycle: "h23",
    }).format(new Date(e.created_at)),
  );
  const weekday = group(rows, (e) =>
    new Date(day(e.created_at) + "T12:00:00Z").getUTCDay(),
  );
  const visitorCounts = new Map();
  rows.forEach((e) =>
    visitorCounts.set(e.visitor_id, (visitorCounts.get(e.visitor_id) || 0) + 1),
  );
  const depths = new Map();
  for (const n of visitorCounts.values()) {
    const key = n < 3 ? String(n) : n < 6 ? "3-5" : n < 11 ? "6-10" : "11+";
    depths.set(key, (depths.get(key) || 0) + 1);
  }
  return {
    from,
    to,
    timezone,
    ...count(rows),
    new_visitors: [...new Set(rows.map((e) => e.visitor_id))].filter(
      (v) => earliest.get(v) >= from,
    ).length,
    previous: { from: previousFrom, to: previousTo, ...count(previous) },
    daily,
    hourly: Array.from(
      { length: 24 },
      (_, i) =>
        hours.find((x) => Number(x.key) === i) || {
          key: String(i),
          pv: 0,
          uv: 0,
        },
    ),
    weekdays: Array.from(
      { length: 7 },
      (_, i) =>
        weekday.find((x) => x.key === String(i)) || {
          key: String(i),
          pv: 0,
          uv: 0,
        },
    ),
    pages: group(rows, (e) => e.path),
    referrers: group(rows, (e) => e.referrer || "direct"),
    devices: group(rows, (e) => e.device),
    languages: group(rows, (e) => e.language),
    locales: group(rows, (e) => e.locale),
    depth: [...depths].map(([key, uv]) => ({ key, pv: 0, uv })),
    countries: [],
    regions: [],
    networks: [],
    country_languages: [],
  };
}
export function listIPs(all, params, range) {
  const rows = all.filter(
    (e) => day(e.created_at) >= range.from && day(e.created_at) <= range.to,
  );
  const q = (params.get("q") || "").slice(0, 100),
    page = Math.max(1, Number(params.get("page")) || 1),
    size = Math.min(100, Math.max(1, Number(params.get("size")) || 20));
  const items = group(rows, (e) => e.ip)
    .map((x) => ({
      ip: x.key,
      pv: x.pv,
      uv: x.uv,
      status: /^(127\.|::1$|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.)/.test(
        x.key,
      )
        ? "private"
        : "pending",
      last_seen: Math.max(
        ...rows
          .filter((e) => e.ip === x.key)
          .map((e) => Date.parse(e.created_at) / 1000),
      ),
    }))
    .filter((e) => e.ip.includes(q));
  const sort = ["pv", "uv", "last_seen"].includes(params.get("sort"))
    ? params.get("sort")
    : "pv";
  items.sort((a, b) => b[sort] - a[sort]);
  return {
    items: items.slice((page - 1) * size, page * size),
    total: items.length,
    page,
    size,
  };
}
