// Recovered from public deployment: index-KVDz72un.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  r as React,
  j as jsxRuntime,
  _ as preloadDependencies,
  a as currentLocale,
  t as translate,
  b as localizedUrl,
  ReactDOM,
  recordVisit,
  FeedbackWidget,
  mapDependencies as __vite__mapDeps,
} from "./core/runtime.js";
const routes = {
    "/admin/analytics": React.lazy(() =>
      preloadDependencies(
        () => import("./admin/Analytics.js"),
        __vite__mapDeps([0, 1, 2]),
      ),
    ),
    "/": React.lazy(() =>
      preloadDependencies(
        () => import("./home/Home.js"),
        __vite__mapDeps([3, 4, 5, 1, 6]),
      ),
    ),
    "/labs/volt": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/volt/Page.js"),
        __vite__mapDeps([7, 4, 5, 8, 9, 10]),
      ),
    ),
    "/labs/motion": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/motion/Page.js"),
        __vite__mapDeps([11, 4, 5, 8, 12, 13, 14, 9]),
      ),
    ),
    "/labs/optics": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/optics/Page.js"),
        __vite__mapDeps([15, 4, 5, 8, 13, 12, 14, 9, 16]),
      ),
    ),
    "/labs/waves": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/waves/Page.js"),
        __vite__mapDeps([17, 4, 5, 8, 13, 12, 14, 9, 18]),
      ),
    ),
    "/labs/fields": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/fields/Page.js"),
        __vite__mapDeps([19, 4, 5, 8, 13, 12, 14, 9, 20, 21]),
      ),
    ),
    "/labs/contour": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/contour/Page.js"),
        __vite__mapDeps([22, 4, 5, 23, 24]),
      ),
    ),
    "/labs/atmos": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/atmos/Page.js"),
        __vite__mapDeps([25, 4, 5, 23, 26, 27, 28]),
      ),
    ),
    "/labs/earth": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/earth/Page.js"),
        __vite__mapDeps([29, 4, 5, 23, 26, 27, 30]),
      ),
    ),
    "/labs/drift": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/drift/Page.js"),
        __vite__mapDeps([31, 4, 5, 23, 27, 32]),
      ),
    ),
    "/labs/water": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/water/Page.js"),
        __vite__mapDeps([33, 4, 5, 8, 9, 34, 35]),
      ),
    ),
    "/labs/vsepr": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/vsepr/Page.js"),
        __vite__mapDeps([36, 4, 5, 8, 37, 38, 39, 40]),
      ),
    ),
    "/labs/orbital": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/orbital/Page.js"),
        __vite__mapDeps([41, 4, 5, 8, 34, 37, 42, 39, 40]),
      ),
    ),
    "/labs/reaction": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/reaction/Page.js"),
        __vite__mapDeps([43, 4, 5, 8, 37, 44, 39, 40]),
      ),
    ),
    "/labs/mechanism": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/mechanism/Page.js"),
        __vite__mapDeps([45, 4, 5, 8, 37, 46, 39, 40]),
      ),
    ),
    "/labs/cell": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/cell/Page.js"),
        __vite__mapDeps([47, 4, 5, 8, 34, 48, 39, 40]),
      ),
    ),
    "/labs/micro": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/micro/Page.js"),
        __vite__mapDeps([49, 4, 5, 8, 13, 9, 50]),
      ),
    ),
    "/labs/geo": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/geo/Page.js"),
        __vite__mapDeps([51, 4, 5, 52, 8, 20, 37, 53, 54, 55, 39]),
      ),
    ),
    "/labs/conic": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/conic/Page.js"),
        __vite__mapDeps([56, 4, 5, 52, 8, 20, 37, 53, 54, 57, 39]),
      ),
    ),
    "/labs/func": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/func/Page.js"),
        __vite__mapDeps([58, 4, 5, 52, 8, 20, 37, 53, 59, 39]),
      ),
    ),
    "/labs/construct": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/construct/Page.js"),
        __vite__mapDeps([60, 4, 5, 52, 8, 20, 37, 53, 61, 62, 39]),
      ),
    ),
    "/labs/pythagoras": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/pythagoras/Page.js"),
        __vite__mapDeps([63, 4, 5, 52, 8, 20, 37, 53, 61, 64, 39]),
      ),
    ),
    "/labs/wonder": React.lazy(() =>
      preloadDependencies(
        () => import("./labs/wonder/Page.js"),
        __vite__mapDeps([65, 4, 5, 52, 8, 20, 37, 53, 61, 66, 39]),
      ),
    ),
  },
  legacyRoutes = {
    "/index.html": "/",
    "/volt-lab.html": "/labs/volt",
    "/contour-lab.html": "/labs/contour",
    "/atmos-lab.html": "/labs/atmos",
    "/earth-lab.html": "/labs/earth",
  },
  currentPath = window.location.pathname.replace(/\/$/, "") || "/";
function PageVisitRecorder({ path: f, children: E }) {
  return (
    React.useEffect(() => {
      f !== "/admin/analytics" && recordVisit(f, currentLocale);
    }, [f]),
    E
  );
}
function PageLoading() {
  return jsxRuntime.jsxs("div", {
    className: "wl-status wl-status--loading",
    role: "status",
    "aria-live": "polite",
    children: [
      jsxRuntime.jsxs("svg", {
        className: "wl-atom",
        viewBox: "0 0 88 88",
        "aria-hidden": "true",
        children: [
          [0, 60, -60].map((f, E) =>
            jsxRuntime.jsxs(
              "g",
              {
                transform: `rotate(${f} 44 44)`,
                children: [
                  jsxRuntime.jsx("ellipse", {
                    className: "wl-atom__orbit",
                    cx: "44",
                    cy: "44",
                    rx: "40",
                    ry: "15",
                  }),
                  jsxRuntime.jsx("circle", {
                    className: "wl-atom__electron",
                    r: "3.5",
                    children: jsxRuntime.jsx("animateMotion", {
                      dur: `${1.4 + E * 0.5}s`,
                      begin: `${-E * 0.6}s`,
                      repeatCount: "indefinite",
                      path: "M4,44 a40,15 0 1,0 80,0 a40,15 0 1,0 -80,0",
                    }),
                  }),
                ],
              },
              f,
            ),
          ),
          jsxRuntime.jsx("circle", {
            className: "wl-atom__nucleus",
            cx: "44",
            cy: "44",
            r: "8",
          }),
        ],
      }),
      jsxRuntime.jsx("p", {
        className: "wl-status__text",
        children: translate("正在加载实验…"),
      }),
      jsxRuntime.jsx("div", {
        className: "wl-status__bar",
        "aria-hidden": "true",
      }),
    ],
  });
}
function PageStatus({ children: f }) {
  return jsxRuntime.jsxs("div", {
    className: "wl-status",
    children: [
      jsxRuntime.jsx("p", {
        className: "wl-status__message",
        children: f,
      }),
      jsxRuntime.jsx("a", {
        className: "wl-status__link",
        href: localizedUrl("/"),
        children: translate("返回首页"),
      }),
    ],
  });
}
class LabErrorBoundary extends React.Component {
  state = {
    failed: !1,
  };
  static getDerivedStateFromError() {
    return {
      failed: !0,
    };
  }
  componentDidCatch(E) {
    console.error(translate("实验初始化失败"), E);
  }
  render() {
    return this.state.failed
      ? jsxRuntime.jsx(PageStatus, {
          children: translate("实验加载失败，请刷新页面重试。"),
        })
      : this.props.children;
  }
}
if (legacyRoutes[currentPath])
  window.location.replace(
    legacyRoutes[currentPath] + window.location.search + window.location.hash,
  );
else {
  const f = routes[currentPath];
  ReactDOM.createRoot(document.getElementById("root")).render(
    jsxRuntime.jsx(LabErrorBoundary, {
      children: jsxRuntime.jsx(React.Suspense, {
        fallback: jsxRuntime.jsx(PageLoading, {}),
        children: f
          ? jsxRuntime.jsxs(PageVisitRecorder, {
              path: currentPath,
              children: [
                jsxRuntime.jsx(f, {}),
                !currentPath.startsWith("/admin/") &&
                  jsxRuntime.jsx(FeedbackWidget, {}),
              ],
            })
          : jsxRuntime.jsx(PageStatus, {
              children: translate("页面不存在。"),
            }),
      }),
    }),
  );
}
