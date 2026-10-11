// Recovered from public deployment: Home-DIbY4xn7.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  r as React,
  t as translate,
  a as currentLocale,
  j as jsxRuntime,
  b as localizedUrl,
} from "../core/runtime.js";
import { L as N } from "../components/LanguageSwitcher.js";
import { T as o, s as m, P as v, S as b } from "./catalog.js";
const w = "/assets/xhs-BYYp__GP.jpg",
  y = "/assets/gzh-Cftvd3Gm.jpg",
  d = o.filter((e) => e.status === "live"),
  S = [...new Set(d.map((e) => e.subject))],
  x = (e) => {
    const i = b.findIndex((n) => n.name === e);
    return i < 0 ? 1 / 0 : i;
  },
  p = [translate("全部"), ...S.sort((e, i) => x(e) - x(i))],
  f = `wedulab.home.${currentLocale}`;
function k() {
  const e = {
    current: translate("全部"),
    expanded: !1,
  };
  try {
    const i = JSON.parse(window.sessionStorage.getItem(f));
    if (i && p.includes(i.current))
      return {
        current: i.current,
        expanded: i.expanded === !0,
      };
  } catch {}
  return e;
}
function E({ tool: e }) {
  const i = e.status === "live",
    n = i ? "a" : "div",
    c = e.color || m(e.subject),
    l = v[e.preview];
  return jsxRuntime.jsxs(n, {
    className: `card${i ? "" : " soon"}`,
    href: i ? localizedUrl(e.href) : void 0,
    style: i
      ? {
          "--cc": c,
        }
      : void 0,
    children: [
      jsxRuntime.jsx("div", {
        className: "pv",
        children: i
          ? jsxRuntime.jsxs(jsxRuntime.Fragment, {
              children: [
                l
                  ? jsxRuntime.jsx("span", {
                      dangerouslySetInnerHTML: {
                        __html: l(c),
                      },
                    })
                  : e.preview
                    ? jsxRuntime.jsx("img", {
                        src: e.preview,
                        alt: "",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        },
                      })
                    : jsxRuntime.jsx("div", {
                        className: "glyph",
                        children: e.subject,
                      }),
                jsxRuntime.jsx("span", {
                  className: "tag",
                  children: e.subject,
                }),
              ],
            })
          : "+",
      }),
      jsxRuntime.jsxs("div", {
        className: "body",
        children: [
          jsxRuntime.jsxs("h3", {
            children: [
              e.name,
              jsxRuntime.jsx("span", {
                children: e.en,
              }),
            ],
          }),
          jsxRuntime.jsx("p", {
            children: e.desc,
          }),
          e.points?.length > 0 &&
            jsxRuntime.jsx("ul", {
              children: e.points.map((t) =>
                jsxRuntime.jsx(
                  "li",
                  {
                    children: t,
                  },
                  t,
                ),
              ),
            }),
          jsxRuntime.jsxs("div", {
            className: "go",
            children: [
              jsxRuntime.jsx("span", {
                children: i ? "READY" : "IN DEVELOPMENT",
              }),
              i &&
                jsxRuntime.jsx("b", {
                  children: translate("进入实验 →"),
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Home() {
  React.useEffect(() => {
    document.title = translate("WeduLab 教学工具集");
  }, []);
  const [e, i] = React.useState(k),
    { current: n, expanded: c } = e;
  React.useEffect(() => {
    try {
      window.sessionStorage.setItem(f, JSON.stringify(e));
    } catch {}
  }, [e]);
  const l = n === translate("全部") ? o : o.filter((r) => r.subject === n),
    t = c ? l : l.slice(0, 12);
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx("header", {
        children: jsxRuntime.jsxs("div", {
          className: "wrap",
          children: [
            jsxRuntime.jsxs("a", {
              className: "brand",
              href: localizedUrl("/"),
              children: [
                jsxRuntime.jsxs("svg", {
                  viewBox: "0 0 40 40",
                  children: [
                    jsxRuntime.jsx("defs", {
                      children: jsxRuntime.jsxs("lineargradient", {
                        id: "lg",
                        x1: "0",
                        y1: "0",
                        x2: "1",
                        y2: "1",
                        children: [
                          jsxRuntime.jsx("stop", {
                            offset: "0",
                            stopColor: "#28b8e0",
                          }),
                          jsxRuntime.jsx("stop", {
                            offset: "1",
                            stopColor: "#0072b5",
                          }),
                        ],
                      }),
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M20 2l15.6 9v18L20 38 4.4 29V11z",
                      fill: "rgba(0,146,199,.06)",
                      stroke: "url(#lg)",
                      strokeWidth: "1.6",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M20 7l11.3 6.5v13L20 33 8.7 26.5v-13z",
                      fill: "none",
                      stroke: "rgba(0,146,199,.35)",
                      strokeWidth: "1",
                      strokeDasharray: "2 2",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "20",
                      cy: "20",
                      r: "5",
                      fill: "none",
                      stroke: "#0092c7",
                      strokeWidth: "1.6",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "20",
                      cy: "20",
                      r: "1.6",
                      fill: "#0092c7",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "WEDU",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("TEACHING TOOLKIT · 教学工具集"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "header-tools",
              children: [
                jsxRuntime.jsxs("div", {
                  className: "stat",
                  children: [d.length, " TOOLS ONLINE"],
                }),
                jsxRuntime.jsx(N, {}),
              ],
            }),
          ],
        }),
      }),
      jsxRuntime.jsxs("main", {
        className: "wrap",
        children: [
          jsxRuntime.jsxs("section", {
            className: "hero",
            children: [
              jsxRuntime.jsx("p", {
                children: translate(
                  "面向课堂的交互式教学工具合集。打开即用，无需安装，适合投屏演示与学生自主探究。",
                ),
              }),
              jsxRuntime.jsxs("a", {
                className: "social-shortcut",
                href: "#follow",
                children: [
                  translate("关注我"),
                  " ",
                  jsxRuntime.jsx("span", {
                    "aria-hidden": "true",
                    children: "↗",
                  }),
                ],
              }),
            ],
          }),
          jsxRuntime.jsx("nav", {
            className: "filters",
            "aria-label": translate("按学科筛选"),
            children: p.map((r) =>
              jsxRuntime.jsxs(
                "button",
                {
                  className: "chip",
                  "aria-pressed": n === r,
                  onClick: () => {
                    r !== n &&
                      i({
                        current: r,
                        expanded: !1,
                      });
                  },
                  style: {
                    "--sc": r === translate("全部") ? "var(--cyan)" : m(r),
                  },
                  children: [
                    jsxRuntime.jsx("i", {}),
                    r,
                    jsxRuntime.jsx("small", {
                      children:
                        r === translate("全部")
                          ? d.length
                          : d.filter((g) => g.subject === r).length,
                    }),
                  ],
                },
                r,
              ),
            ),
          }),
          jsxRuntime.jsxs("section", {
            className: "grid",
            children: [
              l.length
                ? t.map((r) =>
                    jsxRuntime.jsx(
                      E,
                      {
                        tool: r,
                      },
                      r.id,
                    ),
                  )
                : jsxRuntime.jsx("div", {
                    className: "empty",
                    children: translate("该学科暂无工具"),
                  }),
              !c &&
                l.length > 12 &&
                jsxRuntime.jsx("div", {
                  className: "tools-more",
                  children: jsxRuntime.jsxs("button", {
                    type: "button",
                    onClick: () =>
                      i((r) => ({
                        ...r,
                        expanded: !0,
                      })),
                    children: [
                      translate("展开更多"),
                      jsxRuntime.jsx("span", {
                        "aria-hidden": "true",
                        children: " ↓",
                      }),
                    ],
                  }),
                }),
            ],
          }),
          jsxRuntime.jsxs("section", {
            className: "social-section",
            id: "follow",
            "aria-labelledby": "social-title",
            children: [
              jsxRuntime.jsxs("div", {
                className: "social-intro",
                children: [
                  jsxRuntime.jsx("span", {
                    className: "eyebrow",
                    children: "STAY CONNECTED",
                  }),
                  jsxRuntime.jsx("h2", {
                    id: "social-title",
                    children: translate("关注我"),
                  }),
                  jsxRuntime.jsx("p", {
                    children: translate("欢迎交流教学工具与创作想法。"),
                  }),
                  jsxRuntime.jsxs("a", {
                    className: "social-x",
                    href: "https://x.com/akokoi1",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                      jsxRuntime.jsx("span", {
                        className: "social-x-mark",
                        "aria-hidden": "true",
                        children: "𝕏",
                      }),
                      jsxRuntime.jsxs("span", {
                        children: [
                          jsxRuntime.jsx("strong", {
                            children: "X · WY",
                          }),
                          jsxRuntime.jsx("small", {
                            children: "@akokoi1",
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("span", {
                        className: "social-arrow",
                        "aria-hidden": "true",
                        children: "↗",
                      }),
                      jsxRuntime.jsx("span", {
                        className: "social-sr-only",
                        children: translate("在新标签页打开"),
                      }),
                    ],
                  }),
                ],
              }),
              [
                {
                  name: translate("小红书"),
                  image: w,
                  alt: translate("小红书账号二维码"),
                },
                {
                  name: translate("微信公众号"),
                  image: y,
                  alt: translate("微信公众号二维码"),
                },
              ].map((r) =>
                jsxRuntime.jsxs(
                  "figure",
                  {
                    className: "social-qr",
                    children: [
                      jsxRuntime.jsx("a", {
                        href: r.image,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        "aria-label": `${r.alt} · ${translate("查看原图")} · ${translate("在新标签页打开")}`,
                        children: jsxRuntime.jsx("img", {
                          src: r.image,
                          alt: r.alt,
                          width: "180",
                          height: "180",
                          loading: "lazy",
                        }),
                      }),
                      jsxRuntime.jsxs("figcaption", {
                        children: [
                          jsxRuntime.jsx("h3", {
                            children: r.name,
                          }),
                          jsxRuntime.jsx("p", {
                            children: translate("扫码关注 · 点击查看原图"),
                          }),
                        ],
                      }),
                    ],
                  },
                  r.name,
                ),
              ),
            ],
          }),
        ],
      }),
      jsxRuntime.jsx("footer", {
        children: jsxRuntime.jsxs("div", {
          className: "wrap",
          children: [
            jsxRuntime.jsxs("span", {
              children: ["WEDULAB © ", new Date().getFullYear()],
            }),
            jsxRuntime.jsx("span", {
              children: translate("交互式教学实验平台"),
            }),
          ],
        }),
      }),
    ],
  });
}
export { Home as default };
