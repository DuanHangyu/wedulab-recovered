// Recovered from public deployment: Analytics-DJiIjrsr.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  r as React,
  j as jsxRuntime,
  l as supportedLocales,
} from "../core/runtime.js";
import { T as H } from "../home/catalog.js";
const U = {
    "/": "教学工具首页",
    "/labs/volt": "电学实验台",
    "/labs/earth": "地球运动",
    "/labs/drift": "海陆的变迁",
    "/labs/atmos": "大气环流",
    "/labs/contour": "等高线课堂",
  },
  Y = {
    desktop: "电脑",
    mobile: "手机",
    tablet: "平板",
  },
  _ = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  A = (a) => {
    if (U[a]) return U[a];
    const c = H.find((r) => r.href === a);
    return c ? `${c.name} · ${c.subject}` : a;
  },
  p = (a) =>
    new Intl.NumberFormat("zh-CN", {
      maximumFractionDigits: 1,
    }).format(a);
function w(a, c) {
  const r = new Date(`${a}T12:00:00Z`);
  return (
    r.setUTCDate(r.getUTCDate() - c + 1),
    {
      from: r.toISOString().slice(0, 10),
      to: a,
    }
  );
}
async function D(a, c = {}) {
  let r;
  try {
    r = await fetch(`/api/v1/analytics/${a}`, {
      credentials: "same-origin",
      ...c,
    });
  } catch (n) {
    throw n.name === "AbortError"
      ? n
      : new Error("暂时无法连接统计服务，请确认后端已启动后重试。");
  }
  const v = r.status === 204 ? null : await r.json().catch(() => null);
  if (!r.ok) {
    const n = new Error(v?.error || "请求失败，请稍后重试。");
    throw ((n.status = r.status), n);
  }
  if (r.status !== 204 && !v) throw new Error("统计服务返回异常，请稍后重试。");
  return v;
}
function K({ daily: a }) {
  const [c, r] = React.useState(
    () => window.matchMedia("(max-width: 760px)").matches,
  );
  React.useEffect(() => {
    const l = window.matchMedia("(max-width: 760px)"),
      j = () => r(l.matches);
    return (
      l.addEventListener("change", j),
      () => l.removeEventListener("change", j)
    );
  }, []);
  const v = c ? 450 : 900,
    n = 235,
    u = 48,
    i = c ? 30 : 18,
    o = 18,
    x = 32,
    f = Math.max(4, Math.ceil(Math.max(...a.map((l) => l.pv), 0) / 4) * 4),
    m = (l) => u + (a.length === 1 ? 0.5 : l / (a.length - 1)) * (v - u - i),
    N = (l) => o + (1 - l / f) * (n - o - x),
    g = (l) => a.map((j, y) => `${y ? "L" : "M"}${m(y)},${N(j[l])}`).join(" "),
    k = [...new Set([0, Math.floor((a.length - 1) / 2), a.length - 1])],
    s = a.every((l) => l.pv === 0);
  return jsxRuntime.jsxs("div", {
    className: "aa-chart-wrap",
    children: [
      jsxRuntime.jsxs("svg", {
        className: "aa-chart",
        viewBox: `0 0 ${v} ${n}`,
        role: "img",
        "aria-label":
          "每日浏览量与访客数趋势，详细数值可展开下方每日数据表查看",
        children: [
          [0, 1, 2, 3, 4].map((l) =>
            jsxRuntime.jsxs(
              "g",
              {
                children: [
                  jsxRuntime.jsx("line", {
                    x1: u,
                    x2: v - i,
                    y1: N((f * l) / 4),
                    y2: N((f * l) / 4),
                    stroke: "#e6edf2",
                    strokeDasharray: "4 5",
                  }),
                  jsxRuntime.jsx("text", {
                    x: u - 12,
                    y: N((f * l) / 4) + 4,
                    textAnchor: "end",
                    children: p((f * l) / 4),
                  }),
                ],
              },
              l,
            ),
          ),
          !s &&
            jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [
                jsxRuntime.jsx("path", {
                  d: `${g("pv")} L${m(a.length - 1)},${N(0)} L${m(0)},${N(0)} Z`,
                  fill: "#e3f3f9",
                }),
                jsxRuntime.jsx("path", {
                  d: g("pv"),
                  stroke: "#008eb9",
                  strokeWidth: "2.5",
                  fill: "none",
                }),
                jsxRuntime.jsx("path", {
                  d: g("uv"),
                  stroke: "#e4a143",
                  strokeWidth: "2.5",
                  strokeDasharray: "6 4",
                  fill: "none",
                }),
                a.map((l, j) =>
                  jsxRuntime.jsxs(
                    "g",
                    {
                      children: [
                        jsxRuntime.jsx("circle", {
                          cx: m(j),
                          cy: N(l.pv),
                          r: a.length > 60 ? 2 : 3.5,
                          fill: "#008eb9",
                          children: jsxRuntime.jsxs("title", {
                            children: [l.key, "：PV ", l.pv, "，UV ", l.uv],
                          }),
                        }),
                        jsxRuntime.jsx("circle", {
                          cx: m(j),
                          cy: N(l.uv),
                          r: a.length > 60 ? 2 : 3,
                          fill: "#e4a143",
                        }),
                      ],
                    },
                    l.key,
                  ),
                ),
              ],
            }),
          k.map((l) =>
            jsxRuntime.jsx(
              "text",
              {
                x: m(l),
                y: n - 7,
                textAnchor: "middle",
                children: a[l]?.key.slice(5),
              },
              l,
            ),
          ),
        ],
      }),
      s &&
        jsxRuntime.jsxs("div", {
          className: "aa-chart-empty",
          children: [
            "这段时间还没有访问记录",
            jsxRuntime.jsx("span", {
              children: "有人访问首页或实验后，数据会显示在这里。",
            }),
          ],
        }),
    ],
  });
}
function S({ title: a, subtitle: c, rows: r, names: v, metric: n = "pv" }) {
  const u = r.reduce((i, o) => i + o[n], 0);
  return jsxRuntime.jsxs("section", {
    className: "aa-panel",
    children: [
      jsxRuntime.jsx("div", {
        className: "aa-panel-heading",
        children: jsxRuntime.jsxs("div", {
          children: [
            jsxRuntime.jsx("h2", {
              children: a,
            }),
            jsxRuntime.jsx("span", {
              children: c,
            }),
          ],
        }),
      }),
      r.length
        ? jsxRuntime.jsx("ul", {
            className: "aa-distribution",
            children: r.map((i) =>
              jsxRuntime.jsxs(
                "li",
                {
                  children: [
                    jsxRuntime.jsxs("div", {
                      children: [
                        jsxRuntime.jsx("span", {
                          children: v[i.key] || i.key,
                        }),
                        jsxRuntime.jsxs("b", {
                          children: [
                            n === "pv"
                              ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
                                  children: [
                                    p(i.pv),
                                    " ",
                                    jsxRuntime.jsxs("small", {
                                      children: ["PV · ", p(i.uv), " UV"],
                                    }),
                                  ],
                                })
                              : jsxRuntime.jsxs(jsxRuntime.Fragment, {
                                  children: [
                                    p(i.uv),
                                    " ",
                                    jsxRuntime.jsxs("small", {
                                      children: [
                                        "位访客",
                                        i.pv ? ` · ${p(i.pv)} PV` : "",
                                      ],
                                    }),
                                  ],
                                }),
                            jsxRuntime.jsxs("em", {
                              children: [p(u ? (i[n] / u) * 100 : 0), "%"],
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("div", {
                      className: "aa-track",
                      children: jsxRuntime.jsx("i", {
                        style: {
                          width: `${u ? (i[n] / u) * 100 : 0}%`,
                        },
                      }),
                    }),
                  ],
                },
                i.key,
              ),
            ),
          })
        : jsxRuntime.jsx("p", {
            className: "aa-empty",
            children: "暂无访问数据",
          }),
    ],
  });
}
function J({ now: a, before: c }) {
  if (!c)
    return jsxRuntime.jsx("span", {
      className: "aa-delta flat",
      children: a ? "上期无数据" : "与上期持平",
    });
  const r = ((a - c) / c) * 100,
    v = Math.abs(r) < 0.05 ? "flat" : r > 0 ? "up" : "down";
  return jsxRuntime.jsxs("span", {
    className: `aa-delta ${v}`,
    title: `上期 ${p(c)}`,
    children: [
      v === "up" ? "↑" : v === "down" ? "↓" : "→",
      " ",
      p(Math.abs(r)),
      "%",
      jsxRuntime.jsx("i", {
        children: " 较上期",
      }),
    ],
  });
}
function Q({ data: a }) {
  const c = a.daily.reduce((x, f) => (f.pv > x.pv ? f : x), a.daily[0]),
    r = (a.hourly || []).reduce((x, f) => (f.pv > (x?.pv ?? 0) ? f : x), null),
    v = a.daily.filter((x) => x.pv > 0).length,
    n = a.pages[0],
    u = a.referrers.find((x) => x.key !== "direct"),
    i = a.referrers.find((x) => x.key === "direct"),
    o = [
      [
        "访问高峰日",
        c?.pv ? c.key : "—",
        c?.pv ? `${p(c.pv)} PV · ${p(c.uv)} UV` : "暂无访问",
      ],
      [
        "高峰时段",
        r
          ? `${r.key.padStart(2, "0")}:00 – ${String(Number(r.key) + 1).padStart(2, "0")}:00`
          : "—",
        r ? `${p(r.pv)} PV，占 ${p((r.pv / a.pv) * 100)}%` : "暂无访问",
      ],
      [
        "活跃天数",
        `${v} / ${a.daily.length}`,
        `${p((v / a.daily.length) * 100)}% 的日子有访问`,
      ],
      [
        "最热门页面",
        n ? A(n.key) : "—",
        n ? `${p(n.pv)} PV，占 ${p((n.pv / a.pv) * 100)}%` : "暂无访问",
      ],
      [
        "外部来源 TOP",
        u?.key || "—",
        `直接访问占 ${p(a.pv ? ((i?.pv ?? 0) / a.pv) * 100 : 0)}%`,
      ],
    ];
  return jsxRuntime.jsx("section", {
    className: "aa-highlights",
    "aria-label": "关键洞察",
    children: o.map(([x, f, m]) =>
      jsxRuntime.jsxs(
        "div",
        {
          children: [
            jsxRuntime.jsx("span", {
              children: x,
            }),
            jsxRuntime.jsx("b", {
              title: f,
              children: f,
            }),
            jsxRuntime.jsx("small", {
              children: m,
            }),
          ],
        },
        x,
      ),
    ),
  });
}
function F({ title: a, subtitle: c, rows: r, label: v, tick: n }) {
  const u = Math.max(1, ...r.map((o) => o.pv)),
    i = r.some((o) => o.pv) ? r.reduce((o, x) => (x.pv > o.pv ? x : o)) : null;
  return jsxRuntime.jsxs("section", {
    className: "aa-panel",
    children: [
      jsxRuntime.jsxs("div", {
        className: "aa-panel-heading",
        children: [
          jsxRuntime.jsxs("div", {
            children: [
              jsxRuntime.jsx("h2", {
                children: a,
              }),
              jsxRuntime.jsx("span", {
                children: c,
              }),
            ],
          }),
          i &&
            jsxRuntime.jsxs("span", {
              className: "aa-peak",
              children: ["峰值 ", v(i), " · ", p(i.pv), " PV"],
            }),
        ],
      }),
      jsxRuntime.jsx("div", {
        className: "aa-bars",
        role: "img",
        "aria-label": `${a}：${r.map((o) => `${v(o)} ${o.pv} PV`).join("，")}`,
        children: r.map((o) =>
          jsxRuntime.jsxs(
            "div",
            {
              className: o === i ? "peak" : "",
              children: [
                jsxRuntime.jsxs("span", {
                  className: "aa-bar-tip",
                  children: [
                    v(o),
                    jsxRuntime.jsxs("b", {
                      children: [p(o.pv), " PV · ", p(o.uv), " UV"],
                    }),
                  ],
                }),
                jsxRuntime.jsx("i", {
                  style: {
                    height: `${(o.pv / u) * 100}%`,
                  },
                }),
                jsxRuntime.jsx("small", {
                  children: n(o) ? v(o) : "",
                }),
              ],
            },
            o.key,
          ),
        ),
      }),
    ],
  });
}
function z({ label: a, value: c, options: r, onChange: v }) {
  const [n, u] = React.useState(!1),
    [i, o] = React.useState(0),
    x = React.useRef(null),
    f = React.useRef(null),
    m = React.useId(),
    N = Math.max(
      0,
      r.findIndex(([l]) => l === c),
    );
  (React.useEffect(() => {
    if (!n) return;
    const l = (j) => {
      x.current?.contains(j.target) || u(!1);
    };
    return (
      document.addEventListener("pointerdown", l),
      () => document.removeEventListener("pointerdown", l)
    );
  }, [n]),
    React.useEffect(() => {
      n &&
        f.current?.children[i]?.scrollIntoView({
          block: "nearest",
        });
    }, [n, i]));
  function g() {
    (o(N), u(!0));
  }
  function k(l) {
    (u(!1),
      x.current?.querySelector("button")?.focus(),
      r[l][0] !== c && v(r[l][0]));
  }
  function s(l) {
    const j = r.length - 1,
      y = {
        ArrowDown: () => (n ? o(Math.min(j, i + 1)) : g()),
        ArrowUp: () => (n ? o(Math.max(0, i - 1)) : g()),
        Home: () => n && o(0),
        End: () => n && o(j),
        Enter: () => (n ? k(i) : g()),
        " ": () => (n ? k(i) : g()),
        Escape: () => u(!1),
        Tab: () => u(!1),
      };
    y[l.key] && (l.key !== "Tab" && l.preventDefault(), y[l.key]());
  }
  return jsxRuntime.jsxs("div", {
    className: `aa-dropdown ${n ? "open" : ""}`,
    ref: x,
    children: [
      jsxRuntime.jsx("span", {
        id: `${m}-label`,
        children: a,
      }),
      jsxRuntime.jsxs("button", {
        type: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": n,
        "aria-labelledby": `${m}-label ${m}-value`,
        "aria-controls": `${m}-list`,
        "aria-activedescendant": n ? `${m}-${i}` : void 0,
        onClick: () => (n ? u(!1) : g()),
        onKeyDown: s,
        children: [
          jsxRuntime.jsx("span", {
            id: `${m}-value`,
            children: r[N][1],
          }),
          jsxRuntime.jsx("svg", {
            viewBox: "0 0 12 12",
            "aria-hidden": "true",
            children: jsxRuntime.jsx("path", {
              d: "M3 4.5 6 7.5 9 4.5",
            }),
          }),
        ],
      }),
      n &&
        jsxRuntime.jsx("ul", {
          role: "listbox",
          id: `${m}-list`,
          "aria-labelledby": `${m}-label`,
          ref: f,
          children: r.map(([l, j], y) =>
            jsxRuntime.jsxs(
              "li",
              {
                id: `${m}-${y}`,
                role: "option",
                "aria-selected": y === N,
                className: y === i ? "active" : "",
                onPointerEnter: () => o(y),
                onPointerDown: ($) => $.preventDefault(),
                onClick: () => k(y),
                children: [
                  j,
                  y === N &&
                    jsxRuntime.jsx("svg", {
                      viewBox: "0 0 12 12",
                      "aria-hidden": "true",
                      children: jsxRuntime.jsx("path", {
                        d: "M2.5 6.2 5 8.5 9.5 3.5",
                      }),
                    }),
                ],
              },
              l,
            ),
          ),
        }),
    ],
  });
}
function G({ range: a, total: c, timezone: r, refresh: v }) {
  const [n, u] = React.useState(1),
    [i, o] = React.useState(20),
    [x, f] = React.useState("pv"),
    [m, N] = React.useState(""),
    [g, k] = React.useState(""),
    [s, l] = React.useState(null),
    [j, y] = React.useState(!1),
    [$, I] = React.useState("");
  (React.useEffect(() => u(1), [a]),
    React.useEffect(() => {
      const d = setTimeout(() => {
        (k(m.trim()), u(1));
      }, 350);
      return () => clearTimeout(d);
    }, [m]),
    React.useEffect(() => {
      const d = new AbortController();
      (y(!0), I(""));
      const C = new URLSearchParams({
        ...a,
        page: n,
        size: i,
        sort: x,
      });
      return (
        g && C.set("q", g),
        D(`ips?${C}`, {
          signal: d.signal,
        })
          .then(l)
          .catch((V) => {
            V.name !== "AbortError" && I(V.message);
          })
          .finally(() => {
            d.signal.aborted || y(!1);
          }),
        () => d.abort()
      );
    }, [a, n, i, x, g, v]));
  const P = Math.max(1, Math.ceil((s?.total ?? 0) / i)),
    E = [];
  for (let d = Math.max(1, n - 2); d <= Math.min(P, n + 2); d++) E.push(d);
  return jsxRuntime.jsxs("section", {
    className: "aa-panel aa-ip-panel",
    id: "ip-detail",
    children: [
      jsxRuntime.jsx("div", {
        className: "aa-panel-heading",
        children: jsxRuntime.jsxs("div", {
          children: [
            jsxRuntime.jsx("h2", {
              children: "访问 IP 明细",
            }),
            jsxRuntime.jsxs("span", {
              children: [
                "当前范围共 ",
                c == null ? "…" : p(c),
                " 个 IP",
                g && s ? `，匹配 “${g}” 的 ${p(s.total)} 个` : "",
              ],
            }),
          ],
        }),
      }),
      jsxRuntime.jsxs("div", {
        className: "aa-ip-tools",
        children: [
          jsxRuntime.jsx("input", {
            type: "search",
            value: m,
            onChange: (d) => N(d.target.value),
            placeholder: "搜索 IP、归属地或运营商",
            "aria-label": "搜索 IP 或归属地",
            maxLength: 100,
          }),
          jsxRuntime.jsx(z, {
            label: "排序",
            value: x,
            options: [
              ["pv", "浏览量最多"],
              ["uv", "访客最多"],
              ["recent", "最近访问"],
            ],
            onChange: (d) => {
              (f(d), u(1));
            },
          }),
          jsxRuntime.jsx(z, {
            label: "每页",
            value: i,
            options: [20, 50, 100].map((d) => [d, `${d} 条`]),
            onChange: (d) => {
              (o(d), u(1));
            },
          }),
        ],
      }),
      jsxRuntime.jsxs("p", {
        className: "aa-ip-note",
        children: [
          "归属地与经纬度是 IP 的近似位置；共享网络或代理不代表不同的人。定位异步更新，可点击“刷新数据”查看。",
          jsxRuntime.jsx("a", {
            href: "https://ip.sb/api/",
            target: "_blank",
            rel: "noreferrer",
            children: "数据来源：ip.sb ↗",
          }),
        ],
      }),
      $ &&
        jsxRuntime.jsx("div", {
          role: "alert",
          className: "aa-error aa-inset",
          children: $,
        }),
      s?.items.length
        ? jsxRuntime.jsx("div", {
            className: `aa-table-scroll ${j ? "aa-stale" : ""}`,
            "aria-busy": j,
            children: jsxRuntime.jsxs("table", {
              children: [
                jsxRuntime.jsx("thead", {
                  children: jsxRuntime.jsxs("tr", {
                    children: [
                      jsxRuntime.jsx("th", {
                        children: "#",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "IP 地址",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "国家 / 省市",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "运营商",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "经度 / 纬度",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "PV",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "UV",
                      }),
                      jsxRuntime.jsx("th", {
                        children: "最近访问",
                      }),
                    ],
                  }),
                }),
                jsxRuntime.jsx("tbody", {
                  children: s.items.map((d, C) =>
                    jsxRuntime.jsxs(
                      "tr",
                      {
                        children: [
                          jsxRuntime.jsx("td", {
                            className: "aa-rank",
                            children: (s.page - 1) * s.size + C + 1,
                          }),
                          jsxRuntime.jsx("td", {
                            className: "aa-ip-address",
                            children: d.ip,
                          }),
                          jsxRuntime.jsx("td", {
                            children:
                              [d.country, d.region, d.city]
                                .filter(Boolean)
                                .join(" / ") ||
                              {
                                private: "内网 / 保留地址",
                                failed: "定位失败",
                                pending: "等待定位",
                                resolved: "未知地区",
                              }[d.status] ||
                              "未知地区",
                          }),
                          jsxRuntime.jsxs("td", {
                            children: [
                              d.isp || d.asn_organization || "—",
                              d.asn
                                ? jsxRuntime.jsxs("small", {
                                    className: "aa-asn",
                                    children: [" AS", d.asn],
                                  })
                                : null,
                            ],
                          }),
                          jsxRuntime.jsxs("td", {
                            children: [
                              Number.isFinite(d.longitude)
                                ? d.longitude.toFixed(3)
                                : "—",
                              " /",
                              " ",
                              Number.isFinite(d.latitude)
                                ? d.latitude.toFixed(3)
                                : "—",
                            ],
                          }),
                          jsxRuntime.jsx("td", {
                            children: p(d.pv),
                          }),
                          jsxRuntime.jsx("td", {
                            children: p(d.uv),
                          }),
                          jsxRuntime.jsx("td", {
                            children: new Date(
                              d.last_seen * 1e3,
                            ).toLocaleString("zh-CN", {
                              timeZone: r,
                              hour12: !1,
                            }),
                          }),
                        ],
                      },
                      d.ip,
                    ),
                  ),
                }),
              ],
            }),
          })
        : j
          ? jsxRuntime.jsx("p", {
              className: "aa-empty",
              role: "status",
              children: "正在读取 IP 记录…",
            })
          : !$ &&
            jsxRuntime.jsx("p", {
              className: "aa-empty",
              children: g
                ? "没有匹配的 IP。"
                : "暂无 IP 记录，历史访问不会补造 IP 数据。",
            }),
      s &&
        s.total > 0 &&
        jsxRuntime.jsxs("nav", {
          className: "aa-pager",
          "aria-label": "IP 分页",
          children: [
            jsxRuntime.jsxs("span", {
              children: [
                "第 ",
                p((n - 1) * i + 1),
                "–",
                p(Math.min(n * i, s.total)),
                " 条，共 ",
                p(s.total),
                " 条",
              ],
            }),
            jsxRuntime.jsxs("div", {
              children: [
                jsxRuntime.jsx("button", {
                  className: "aa-button",
                  disabled: n <= 1 || j,
                  onClick: () => u(1),
                  "aria-label": "第一页",
                  "data-edge": !0,
                  children: "«",
                }),
                jsxRuntime.jsx("button", {
                  className: "aa-button",
                  disabled: n <= 1 || j,
                  onClick: () => u(n - 1),
                  children: "上一页",
                }),
                E[0] > 1 &&
                  jsxRuntime.jsx("span", {
                    className: "aa-pager-gap",
                    children: "…",
                  }),
                E.map((d) =>
                  jsxRuntime.jsx(
                    "button",
                    {
                      className: `aa-button ${d === n ? "active" : ""}`,
                      "aria-current": d === n ? "page" : void 0,
                      disabled: j,
                      onClick: () => u(d),
                      children: d,
                    },
                    d,
                  ),
                ),
                E.at(-1) < P &&
                  jsxRuntime.jsx("span", {
                    className: "aa-pager-gap",
                    children: "…",
                  }),
                jsxRuntime.jsx("button", {
                  className: "aa-button",
                  disabled: n >= P || j,
                  onClick: () => u(n + 1),
                  children: "下一页",
                }),
                jsxRuntime.jsx("button", {
                  className: "aa-button",
                  disabled: n >= P || j,
                  onClick: () => u(P),
                  "aria-label": "最后一页",
                  "data-edge": !0,
                  children: "»",
                }),
              ],
            }),
          ],
        }),
    ],
  });
}
function Analytics() {
  const [a, c] = React.useState(null),
    [r, v] = React.useState(!0),
    [n, u] = React.useState(""),
    [i, o] = React.useState(!1),
    [x, f] = React.useState(""),
    [m, N] = React.useState(null),
    [g, k] = React.useState({
      from: "",
      to: "",
    }),
    [s, l] = React.useState(null),
    [j, y] = React.useState(!1),
    [$, I] = React.useState(0),
    [P, E] = React.useState(null);
  function d(t) {
    c(t);
    const b = w(t.today, 30);
    (N(b), k(b));
  }
  (React.useEffect(() => {
    document.title = "访问统计 · WeduLab";
    const t = new AbortController();
    return (
      D("session", {
        signal: t.signal,
      })
        .then(d)
        .catch((b) => {
          b.name !== "AbortError" && b.status !== 401 && f(b.message);
        })
        .finally(() => {
          t.signal.aborted || v(!1);
        }),
      () => t.abort()
    );
  }, []),
    React.useEffect(() => {
      if (!a || !m) return;
      const t = new AbortController();
      return (
        y(!0),
        f(""),
        l(null),
        D(`summary?${new URLSearchParams(m)}`, {
          signal: t.signal,
        })
          .then((b) => {
            (l(b), E(new Date()));
          })
          .catch((b) => {
            b.name !== "AbortError" &&
              (b.status === 401
                ? (c(null), u(""), f("登录已过期，请重新输入密码。"))
                : f(b.message));
          })
          .finally(() => {
            t.signal.aborted || y(!1);
          }),
        () => t.abort()
      );
    }, [a, m, $]));
  async function C(t) {
    (t.preventDefault(), o(!0), f(""));
    try {
      (d(
        await D("session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: n,
          }),
        }),
      ),
        u(""));
    } catch (b) {
      f(b.message);
    } finally {
      o(!1);
    }
  }
  async function V() {
    (o(!0), f(""));
    try {
      (await D("session", {
        method: "DELETE",
      }),
        c(null),
        l(null),
        u(""));
    } catch (t) {
      f(t.message);
    } finally {
      o(!1);
    }
  }
  function q(t) {
    t.preventDefault();
    const b = (Date.parse(g.to) - Date.parse(g.from)) / 864e5 + 1;
    if (!g.from || !g.to || !Number.isFinite(b) || b < 1 || b > 366) {
      f("请选择有效日期，结束日期不能早于开始日期，最多查询 366 天。");
      return;
    }
    N({
      ...g,
    });
  }
  function B(t) {
    const b = w(a.today, t);
    (k(b), N(b));
  }
  const M = jsxRuntime.jsxs("a", {
    className: "aa-brand",
    href: "/",
    children: [
      jsxRuntime.jsx("span", {
        className: "aa-mark",
        children: "W",
      }),
      jsxRuntime.jsxs("span", {
        children: [
          "WEDU",
          jsxRuntime.jsx("b", {
            children: "LAB",
          }),
          jsxRuntime.jsx("small", {
            children: "教学实验 · 数据中心",
          }),
        ],
      }),
    ],
  });
  return a
    ? jsxRuntime.jsxs("div", {
        className: "aa-page aa-shell",
        children: [
          jsxRuntime.jsxs("aside", {
            className: "aa-sidebar",
            children: [
              M,
              jsxRuntime.jsx("div", {
                className: "aa-nav-label",
                children: "WORKSPACE",
              }),
              jsxRuntime.jsxs("a", {
                href: "/admin/analytics",
                className: "aa-nav-current",
                "aria-current": "page",
                children: [
                  jsxRuntime.jsx("span", {
                    children: "◫",
                  }),
                  " 访问概览",
                ],
              }),
              jsxRuntime.jsx("a", {
                className: "aa-site-link aa-anchor-link",
                href: "#ip-detail",
                children: "⌖ 访问 IP 明细",
              }),
              jsxRuntime.jsx("a", {
                className: "aa-site-link aa-anchor-link",
                href: "#feedback-inbox",
                children: "✉ 问题反馈",
              }),
              jsxRuntime.jsx("a", {
                className: "aa-site-link",
                href: "/",
                children: "↗ 打开教学网站",
              }),
              jsxRuntime.jsxs("div", {
                className: "aa-sidebar-bottom",
                children: [
                  jsxRuntime.jsx("span", {
                    className: "aa-dot",
                  }),
                  " 管理员已登录",
                  jsxRuntime.jsx("small", {
                    children: "只统计首页与实验访问",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsxs("main", {
            className: "aa-main",
            children: [
              jsxRuntime.jsxs("header", {
                className: "aa-heading",
                children: [
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsx("div", {
                        className: "aa-eyebrow",
                        children: "WEDULAB / ANALYTICS",
                      }),
                      jsxRuntime.jsx("h1", {
                        children: "访问概览",
                      }),
                      jsxRuntime.jsx("p", {
                        children: "了解每个实验被探索的频率、时间与来源。",
                      }),
                    ],
                  }),
                  jsxRuntime.jsx("button", {
                    className: "aa-button",
                    onClick: V,
                    disabled: i,
                    children: i ? "正在退出…" : "退出登录",
                  }),
                ],
              }),
              jsxRuntime.jsxs("section", {
                className: "aa-toolbar",
                "aria-label": "统计日期筛选",
                children: [
                  jsxRuntime.jsx("div", {
                    className: "aa-presets",
                    children: [
                      [1, "今天"],
                      [7, "近 7 天"],
                      [30, "近 30 天"],
                    ].map(([t, b]) =>
                      jsxRuntime.jsx(
                        "button",
                        {
                          className: `aa-button ${m?.from === w(a.today, t).from && m?.to === a.today ? "active" : ""}`,
                          onClick: () => B(t),
                          children: b,
                        },
                        t,
                      ),
                    ),
                  }),
                  jsxRuntime.jsxs("form", {
                    className: "aa-dates",
                    onSubmit: q,
                    children: [
                      jsxRuntime.jsxs("label", {
                        children: [
                          "开始日期",
                          jsxRuntime.jsx("input", {
                            type: "date",
                            required: !0,
                            value: g.from,
                            onChange: (t) =>
                              k({
                                ...g,
                                from: t.target.value,
                              }),
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("span", {
                        children: "—",
                      }),
                      jsxRuntime.jsxs("label", {
                        children: [
                          "结束日期",
                          jsxRuntime.jsx("input", {
                            type: "date",
                            required: !0,
                            value: g.to,
                            onChange: (t) =>
                              k({
                                ...g,
                                to: t.target.value,
                              }),
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("button", {
                        className: "aa-primary",
                        type: "submit",
                        children: "查询",
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsxs("div", {
                className: "aa-meta",
                children: [
                  jsxRuntime.jsxs("span", {
                    children: ["统计时区：", a.timezone, " · 日期包含首尾两天"],
                  }),
                  jsxRuntime.jsx("button", {
                    className: "aa-text-button",
                    disabled: j,
                    onClick: () => I((t) => t + 1),
                    children: j ? "更新中…" : "↻ 刷新数据",
                  }),
                ],
              }),
              x &&
                jsxRuntime.jsx("div", {
                  role: "alert",
                  className: "aa-error",
                  children: x,
                }),
              j &&
                jsxRuntime.jsx("div", {
                  className: "aa-loading",
                  role: "status",
                  children: "正在读取访问数据…",
                }),
              s &&
                jsxRuntime.jsxs(jsxRuntime.Fragment, {
                  children: [
                    jsxRuntime.jsx("section", {
                      className: "aa-metrics",
                      "aria-label": "核心指标",
                      children: [
                        [
                          "浏览量",
                          "PV",
                          s.pv,
                          s.previous?.pv,
                          "每次打开或刷新页面计一次",
                        ],
                        [
                          "独立访客",
                          "UV",
                          s.uv,
                          s.previous?.uv,
                          "匿名浏览器去重",
                        ],
                        [
                          "独立 IP",
                          "IP",
                          s.unique_ips ?? 0,
                          s.previous?.unique_ips,
                          "访问 IP 去重（含内网）",
                        ],
                        [
                          "新访客",
                          "NEW",
                          s.new_visitors ?? 0,
                          null,
                          `回访 ${p(Math.max(0, s.uv - (s.new_visitors ?? 0)))} 人 · 首次访问在此范围内`,
                        ],
                        [
                          "日均浏览",
                          "PV / DAY",
                          s.pv / s.daily.length,
                          s.previous && s.previous.pv / s.daily.length,
                          `共 ${s.daily.length} 个自然日`,
                        ],
                        [
                          "人均浏览",
                          "PV / UV",
                          s.uv ? s.pv / s.uv : 0,
                          null,
                          "每个匿名访客的平均浏览量",
                        ],
                      ].map(([t, b, T, L, W]) =>
                        jsxRuntime.jsxs(
                          "article",
                          {
                            className: "aa-metric",
                            children: [
                              jsxRuntime.jsxs("div", {
                                children: [
                                  t,
                                  jsxRuntime.jsx("span", {
                                    children: b,
                                  }),
                                ],
                              }),
                              jsxRuntime.jsx("strong", {
                                children: p(T),
                              }),
                              L != null &&
                                jsxRuntime.jsx(J, {
                                  now: T,
                                  before: L,
                                }),
                              jsxRuntime.jsx("small", {
                                children: W,
                              }),
                            ],
                          },
                          b,
                        ),
                      ),
                    }),
                    s.previous &&
                      jsxRuntime.jsxs("p", {
                        className: "aa-compare-note",
                        children: [
                          "环比对象：上一个等长周期 ",
                          s.previous.from,
                          " — ",
                          s.previous.to,
                        ],
                      }),
                    jsxRuntime.jsx(Q, {
                      data: s,
                    }),
                    jsxRuntime.jsxs("section", {
                      className: "aa-panel aa-trend",
                      children: [
                        jsxRuntime.jsxs("div", {
                          className: "aa-panel-heading",
                          children: [
                            jsxRuntime.jsxs("div", {
                              children: [
                                jsxRuntime.jsx("h2", {
                                  children: "访问趋势",
                                }),
                                jsxRuntime.jsxs("span", {
                                  children: [s.from, " — ", s.to],
                                }),
                              ],
                            }),
                            jsxRuntime.jsxs("div", {
                              className: "aa-legend",
                              children: [
                                jsxRuntime.jsxs("span", {
                                  children: [
                                    jsxRuntime.jsx("i", {}),
                                    "浏览量 PV",
                                  ],
                                }),
                                jsxRuntime.jsxs("span", {
                                  children: [
                                    jsxRuntime.jsx("i", {}),
                                    "访客 UV",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        jsxRuntime.jsx(K, {
                          daily: s.daily,
                        }),
                        jsxRuntime.jsxs("details", {
                          className: "aa-daily",
                          children: [
                            jsxRuntime.jsx("summary", {
                              children: "查看每日数据",
                            }),
                            jsxRuntime.jsx("div", {
                              className: "aa-table-scroll",
                              children: jsxRuntime.jsxs("table", {
                                children: [
                                  jsxRuntime.jsx("thead", {
                                    children: jsxRuntime.jsxs("tr", {
                                      children: [
                                        jsxRuntime.jsx("th", {
                                          children: "日期",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "星期",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "浏览量 PV",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "访客 UV",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "人均浏览",
                                        }),
                                      ],
                                    }),
                                  }),
                                  jsxRuntime.jsx("tbody", {
                                    children: [...s.daily].reverse().map((t) =>
                                      jsxRuntime.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            jsxRuntime.jsx("td", {
                                              children: t.key,
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children:
                                                _[
                                                  new Date(
                                                    `${t.key}T12:00:00Z`,
                                                  ).getUTCDay()
                                                ],
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: p(t.pv),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: p(t.uv),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: t.uv
                                                ? p(t.pv / t.uv)
                                                : "—",
                                            }),
                                          ],
                                        },
                                        t.key,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    jsxRuntime.jsxs("div", {
                      className: "aa-bottom-grid",
                      children: [
                        jsxRuntime.jsx(F, {
                          title: "24 小时分布",
                          subtitle: `按 ${s.timezone} 时间统计浏览量`,
                          rows: s.hourly || [],
                          label: (t) => `${t.key.padStart(2, "0")}:00`,
                          tick: (t) => Number(t.key) % 3 === 0,
                        }),
                        jsxRuntime.jsx(F, {
                          title: "星期分布",
                          subtitle: "周一至周日的浏览量",
                          rows: [1, 2, 3, 4, 5, 6, 0].map(
                            (t) =>
                              (s.weekdays || [])[t] || {
                                key: String(t),
                                pv: 0,
                                uv: 0,
                              },
                          ),
                          label: (t) => _[t.key],
                          tick: () => !0,
                        }),
                      ],
                    }),
                    jsxRuntime.jsxs("section", {
                      className: "aa-panel",
                      children: [
                        jsxRuntime.jsxs("div", {
                          className: "aa-panel-heading",
                          children: [
                            jsxRuntime.jsx("h2", {
                              children: "页面访问排行",
                            }),
                            jsxRuntime.jsxs("span", {
                              children: [
                                "按浏览量排序 · 共 ",
                                s.pages.length,
                                " 个页面有访问",
                              ],
                            }),
                          ],
                        }),
                        s.pages.length
                          ? jsxRuntime.jsx("div", {
                              className: "aa-table-scroll",
                              children: jsxRuntime.jsxs("table", {
                                children: [
                                  jsxRuntime.jsx("thead", {
                                    children: jsxRuntime.jsxs("tr", {
                                      children: [
                                        jsxRuntime.jsx("th", {
                                          children: "实验 / 页面",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "浏览量 PV",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "访客 UV",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "人均浏览",
                                        }),
                                        jsxRuntime.jsx("th", {
                                          children: "浏览占比",
                                        }),
                                      ],
                                    }),
                                  }),
                                  jsxRuntime.jsx("tbody", {
                                    children: s.pages.map((t, b) =>
                                      jsxRuntime.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            jsxRuntime.jsx("td", {
                                              children: jsxRuntime.jsxs("div", {
                                                className: "aa-page-cell",
                                                children: [
                                                  jsxRuntime.jsx("em", {
                                                    children: b + 1,
                                                  }),
                                                  jsxRuntime.jsxs("div", {
                                                    children: [
                                                      jsxRuntime.jsx("b", {
                                                        children: A(t.key),
                                                      }),
                                                      jsxRuntime.jsx("small", {
                                                        children: t.key,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: p(t.pv),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: p(t.uv),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: p(
                                                t.uv ? t.pv / t.uv : 0,
                                              ),
                                            }),
                                            jsxRuntime.jsx("td", {
                                              children: jsxRuntime.jsxs("div", {
                                                className: "aa-share",
                                                children: [
                                                  jsxRuntime.jsx("span", {
                                                    className: "aa-track",
                                                    children: jsxRuntime.jsx(
                                                      "i",
                                                      {
                                                        style: {
                                                          width: `${(t.pv / s.pv) * 100}%`,
                                                        },
                                                      },
                                                    ),
                                                  }),
                                                  p((t.pv / s.pv) * 100),
                                                  "%",
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        t.key,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            })
                          : jsxRuntime.jsx("p", {
                              className: "aa-empty",
                              children: "暂无页面访问记录",
                            }),
                      ],
                    }),
                    jsxRuntime.jsxs("div", {
                      className: "aa-bottom-grid",
                      children: [
                        jsxRuntime.jsx(S, {
                          title: "访问来源",
                          subtitle: "上一页的来源域名",
                          rows: s.referrers,
                          names: {
                            direct: "直接访问",
                          },
                        }),
                        jsxRuntime.jsx(S, {
                          title: "设备分布",
                          subtitle: "按浏览器设备类型估算",
                          rows: s.devices,
                          names: Y,
                        }),
                        jsxRuntime.jsx(S, {
                          title: "新老访客",
                          subtitle: "按访客在本范围之前是否访问过",
                          metric: "uv",
                          rows: [
                            {
                              key: "新访客",
                              pv: 0,
                              uv: s.new_visitors ?? 0,
                            },
                            {
                              key: "回访访客",
                              pv: 0,
                              uv: Math.max(0, s.uv - (s.new_visitors ?? 0)),
                            },
                          ].filter((t) => t.uv),
                          names: {},
                        }),
                        jsxRuntime.jsx(S, {
                          title: "访问深度",
                          subtitle: "每位访客在本范围内的浏览次数",
                          metric: "uv",
                          rows: s.depth || [],
                          names: {
                            1: "仅 1 次",
                            2: "2 次",
                            "3-5": "3–5 次",
                            "6-10": "6–10 次",
                            "11+": "11 次以上",
                          },
                        }),
                        jsxRuntime.jsx(S, {
                          title: "国家 / 地区分布",
                          subtitle: "按 IP 归属地统计，含历史未记录 IP 的访问",
                          rows: s.countries || [],
                          names: {},
                        }),
                        jsxRuntime.jsx(S, {
                          title: "省份 / 地区分布",
                          subtitle: "国家 / 省级行政区，前 30 名",
                          rows: s.regions || [],
                          names: {},
                        }),
                        jsxRuntime.jsx(S, {
                          title: "网络运营商",
                          subtitle:
                            "IP 所属 ISP / ASN，前 30 名；机房、VPN 与中继会在这里现形",
                          rows: s.networks || [],
                          names: {},
                        }),
                        jsxRuntime.jsx(S, {
                          title: "国家 × 浏览器语言",
                          subtitle: "某国 IP 背后的人说什么语言，前 30 名",
                          rows: s.country_languages || [],
                          names: {},
                        }),
                        jsxRuntime.jsx(S, {
                          title: "浏览器语言",
                          subtitle: "navigator.language，旧版页面不上报",
                          rows: s.languages || [],
                          names: {
                            "": "未上报",
                          },
                        }),
                        jsxRuntime.jsx(S, {
                          title: "界面语言",
                          subtitle: "站点实际显示的语言",
                          rows: s.locales || [],
                          names: {
                            "": "未上报",
                            ...Object.fromEntries(
                              supportedLocales.map((t) => [t.id, t.label]),
                            ),
                          },
                        }),
                      ],
                    }),
                  ],
                }),
              m &&
                jsxRuntime.jsx(G, {
                  range: m,
                  total: s?.unique_ips,
                  timezone: a.timezone,
                  refresh: $,
                }),
              s &&
                jsxRuntime.jsxs("footer", {
                  className: "aa-footer",
                  children: [
                    jsxRuntime.jsxs("span", {
                      children: [
                        "最后更新 ",
                        P?.toLocaleTimeString("zh-CN"),
                        " · 管理页面不计入访问统计",
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: "UV 为匿名浏览器数量，各分组 UV 不可直接相加。",
                    }),
                  ],
                }),
              jsxRuntime.jsx(ee, {}),
            ],
          }),
        ],
      })
    : jsxRuntime.jsxs("main", {
        className: "aa-login aa-page",
        children: [
          jsxRuntime.jsxs("div", {
            className: "aa-login-card",
            children: [
              M,
              jsxRuntime.jsx("div", {
                className: "aa-eyebrow",
                children: "ANALYTICS / 管理员入口",
              }),
              jsxRuntime.jsx("h1", {
                children: "看看学习如何发生",
              }),
              jsxRuntime.jsx("p", {
                children: "登录后查看实验访问情况与每日趋势。",
              }),
              r
                ? jsxRuntime.jsx("p", {
                    role: "status",
                    children: "正在检查登录状态…",
                  })
                : jsxRuntime.jsxs("form", {
                    onSubmit: C,
                    children: [
                      jsxRuntime.jsx("label", {
                        htmlFor: "admin-password",
                        children: "管理密码",
                      }),
                      jsxRuntime.jsx("input", {
                        id: "admin-password",
                        type: "password",
                        autoComplete: "current-password",
                        required: !0,
                        autoFocus: !0,
                        value: n,
                        onChange: (t) => u(t.target.value),
                        placeholder: "输入管理密码",
                      }),
                      x &&
                        jsxRuntime.jsx("div", {
                          className: "aa-error",
                          role: "alert",
                          children: x,
                        }),
                      jsxRuntime.jsx("button", {
                        className: "aa-primary",
                        disabled: i,
                        children: i ? "正在登录…" : "进入统计面板 →",
                      }),
                    ],
                  }),
              jsxRuntime.jsx("a", {
                className: "aa-back",
                href: "/",
                children: "← 返回教学工具首页",
              }),
            ],
          }),
          jsxRuntime.jsx("span", {
            className: "aa-login-note",
            children: "WEDULAB · 为每一次探索留下记录",
          }),
        ],
      });
}
const O = {
    bug: "功能异常",
    content: "内容纠错",
    suggestion: "功能建议",
  },
  X = {
    "zh-CN": "简体中文",
    "zh-Hant": "繁體中文",
    ja: "日本語",
    ko: "한국어",
    tr: "Türkçe",
    en: "English",
  };
function R(a) {
  const c = Math.round((Date.now() - new Date(a).getTime()) / 6e4);
  return c < 1
    ? "刚刚"
    : c < 60
      ? `${c} 分钟前`
      : c < 1440
        ? `${Math.floor(c / 60)} 小时前`
        : c < 43200
          ? `${Math.floor(c / 1440)} 天前`
          : "";
}
function ee() {
  const [a, c] = React.useState([]),
    [r, v] = React.useState(!1),
    [n, u] = React.useState(!1),
    [i, o] = React.useState(""),
    [x, f] = React.useState("all"),
    m = React.useRef(!1);
  async function N(s, l) {
    if (!m.current) {
      ((m.current = !0), u(!0), o(""));
      try {
        const j = await fetch(
          `/api/v1/analytics/feedback${s ? `?before=${s}` : ""}`,
          {
            credentials: "same-origin",
            signal: l,
          },
        );
        if (!j.ok)
          throw new Error(
            j.status === 401
              ? "登录已过期，请重新登录后查看反馈。"
              : "反馈加载失败，请重试。",
          );
        const y = await j.json();
        (c(($) => (s ? [...$, ...y.items] : y.items)), v(y.has_more));
      } catch (j) {
        j.name !== "AbortError" && o(j.message);
      } finally {
        ((m.current = !1), u(!1));
      }
    }
  }
  React.useEffect(() => {
    const s = new AbortController();
    return (N(null, s.signal), () => s.abort());
  }, []);
  const g = a.reduce(
      (s, l) => ({
        ...s,
        [l.category]: (s[l.category] || 0) + 1,
      }),
      {},
    ),
    k = x === "all" ? a : a.filter((s) => s.category === x);
  return jsxRuntime.jsxs("section", {
    className: "aa-panel aa-feedback",
    id: "feedback-inbox",
    children: [
      jsxRuntime.jsxs("div", {
        className: "aa-panel-heading",
        children: [
          jsxRuntime.jsxs("div", {
            children: [
              jsxRuntime.jsx("h2", {
                children: "问题反馈",
              }),
              jsxRuntime.jsxs("span", {
                children: [
                  "已加载 ",
                  a.length,
                  " 条",
                  r ? "，还有更早的反馈" : "",
                  " · 时间为北京时间",
                ],
              }),
            ],
          }),
          jsxRuntime.jsx("button", {
            className: "aa-button",
            disabled: n,
            onClick: () => N(),
            children: n ? "读取中…" : "↻ 刷新反馈",
          }),
        ],
      }),
      a.length > 0 &&
        jsxRuntime.jsx("div", {
          className: "aa-feedback-filters",
          role: "group",
          "aria-label": "按类别筛选",
          children: [
            ["all", "全部", a.length],
            ...Object.entries(O).map(([s, l]) => [s, l, g[s] || 0]),
          ].map(([s, l, j]) =>
            jsxRuntime.jsxs(
              "button",
              {
                className: `aa-chip ${s} ${x === s ? "active" : ""}`,
                "aria-pressed": x === s,
                onClick: () => f(s),
                children: [
                  l,
                  jsxRuntime.jsx("span", {
                    children: j,
                  }),
                ],
              },
              s,
            ),
          ),
        }),
      i &&
        jsxRuntime.jsx("p", {
          role: "alert",
          className: "aa-error aa-inset",
          children: i,
        }),
      n &&
        a.length === 0 &&
        jsxRuntime.jsx("p", {
          className: "aa-empty",
          role: "status",
          children: "正在读取反馈…",
        }),
      !n &&
        !i &&
        k.length === 0 &&
        jsxRuntime.jsx("p", {
          className: "aa-empty",
          children: a.length ? "这个类别下暂无反馈。" : "暂无反馈。",
        }),
      k.length > 0 &&
        jsxRuntime.jsx("ol", {
          className: "aa-feedback-list",
          children: k.map((s) =>
            jsxRuntime.jsxs(
              "li",
              {
                className: "aa-feedback-item",
                children: [
                  jsxRuntime.jsxs("header", {
                    children: [
                      jsxRuntime.jsx("span", {
                        className: `aa-badge ${s.category}`,
                        children: O[s.category] || s.category,
                      }),
                      jsxRuntime.jsxs("span", {
                        className: "aa-feedback-id",
                        children: ["#", s.id],
                      }),
                      jsxRuntime.jsxs("time", {
                        dateTime: s.created_at,
                        title: s.created_at,
                        children: [
                          new Date(s.created_at).toLocaleString("zh-CN", {
                            timeZone: "Asia/Shanghai",
                            hour12: !1,
                          }),
                          R(s.created_at) &&
                            jsxRuntime.jsxs("i", {
                              children: [" · ", R(s.created_at)],
                            }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntime.jsx("p", {
                    className: "aa-feedback-message",
                    children: s.message,
                  }),
                  jsxRuntime.jsxs("footer", {
                    children: [
                      jsxRuntime.jsxs("a", {
                        href: s.path,
                        target: "_blank",
                        rel: "noreferrer",
                        title: s.path,
                        children: ["↗ ", A(s.path)],
                      }),
                      jsxRuntime.jsxs("span", {
                        children: [
                          "联系方式：",
                          s.contact
                            ? jsxRuntime.jsx("b", {
                                children: s.contact,
                              })
                            : jsxRuntime.jsx("em", {
                                children: "未填写",
                              }),
                        ],
                      }),
                      jsxRuntime.jsxs("span", {
                        children: ["界面语言：", X[s.locale] || s.locale],
                      }),
                    ],
                  }),
                ],
              },
              s.id,
            ),
          ),
        }),
      r &&
        jsxRuntime.jsx("div", {
          className: "aa-feedback-more",
          children: jsxRuntime.jsx("button", {
            className: "aa-button",
            disabled: n,
            onClick: () => N(a.at(-1).id),
            children: n ? "读取中…" : "加载更早反馈",
          }),
        }),
    ],
  });
}
export { Analytics as default };
