// Recovered from public deployment: index-KVDz72un.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import yv from "../i18n/messages/en.js";
import fv from "../i18n/messages/zh-Hant.js";
import gv from "../i18n/messages/ja.js";
import zv from "../i18n/messages/ko.js";
import Av from "../i18n/messages/tr.js";
const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "src/admin/Analytics.js",
      "src/home/catalog.js",
      "assets/Analytics-CEgp3ZXb.css",
      "src/home/Home.js",
      "src/components/LanguageSwitcher.js",
      "assets/LanguageSwitcher-G8ZoNuu-.css",
      "assets/Home-CfI5xIBn.css",
      "src/labs/volt/Page.js",
      "src/vendor/OutputPass-B-cSf-Py.js",
      "src/vendor/RoundedBoxGeometry-BuxEdaMS.js",
      "assets/Page-Dxi9rB2i.css",
      "src/labs/motion/Page.js",
      "src/vendor/theme-aLwyR9RG.js",
      "src/vendor/charts-CzzpgoDB.js",
      "assets/theme-BwshCFgs.css",
      "src/labs/optics/Page.js",
      "assets/Page-CrUrCqRl.css",
      "src/labs/waves/Page.js",
      "assets/Page-CnNnv5QM.css",
      "src/labs/fields/Page.js",
      "src/vendor/LineSegments2-CF4-EQBa.js",
      "assets/Page-CNIimdwS.css",
      "src/labs/contour/Page.js",
      "src/vendor/OrbitControls-D-zZTbsE.js",
      "assets/Page-DRo91e6G.css",
      "src/labs/atmos/Page.js",
      "src/vendor/earth_clouds_1024-Dm-FkLh-.js",
      "src/vendor/earth_bm_07-CEsBUeyA.js",
      "assets/Page-CM2MSrBx.css",
      "src/labs/earth/Page.js",
      "assets/Page-kcZ9bXrN.css",
      "src/labs/drift/Page.js",
      "assets/Page-DUKGQ0YZ.css",
      "src/labs/water/Page.js",
      "src/vendor/BufferGeometryUtils--VnzLiDd.js",
      "assets/Page-CgFkwjK4.css",
      "src/labs/vsepr/Page.js",
      "src/vendor/studio-DdpeYmJn.js",
      "assets/Page-Ck6gdys0.css",
      "assets/theme-CtpKaZpm.css",
      "assets/studio-spZVrGLA.css",
      "src/labs/orbital/Page.js",
      "assets/Page-BeNhPUo6.css",
      "src/labs/reaction/Page.js",
      "assets/Page-DarYlYHC.css",
      "src/labs/mechanism/Page.js",
      "assets/Page-DOSkEJv0.css",
      "src/labs/cell/Page.js",
      "assets/Page-BAtiytRK.css",
      "src/labs/micro/Page.js",
      "assets/Page-l40zoFTw.css",
      "src/labs/geo/Page.js",
      "src/vendor/math-_7kWGBgE.js",
      "assets/math-CnOtOUG7.css",
      "src/vendor/outline-B5slIcEP.js",
      "assets/Page-DSUG_-HG.css",
      "src/labs/conic/Page.js",
      "assets/Page-BM6zSfKl.css",
      "src/labs/func/Page.js",
      "assets/Page-Cr2PYwGd.css",
      "src/labs/construct/Page.js",
      "src/vendor/confetti-D_DoZ5bY.js",
      "assets/Page-DTutw72u.css",
      "src/labs/pythagoras/Page.js",
      "assets/Page-ObqXJVw4.css",
      "src/labs/wonder/Page.js",
      "assets/Page-BUeo7GFe.css",
    ]),
) => i.map((i) => d[i]);
(function () {
  const E = document.createElement("link").relList;
  if (E && E.supports && E.supports("modulepreload")) return;
  for (const L of document.querySelectorAll('link[rel="modulepreload"]')) h(L);
  new MutationObserver((L) => {
    for (const G of L)
      if (G.type === "childList")
        for (const be of G.addedNodes)
          be.tagName === "LINK" && be.rel === "modulepreload" && h(be);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function R(L) {
    const G = {};
    return (
      L.integrity && (G.integrity = L.integrity),
      L.referrerPolicy && (G.referrerPolicy = L.referrerPolicy),
      L.crossOrigin === "use-credentials"
        ? (G.credentials = "include")
        : L.crossOrigin === "anonymous"
          ? (G.credentials = "omit")
          : (G.credentials = "same-origin"),
      G
    );
  }
  function h(L) {
    if (L.ep) return;
    L.ep = !0;
    const G = R(L);
    fetch(L.href, G);
  }
})();
const mv = "modulepreload",
  kv = function (f) {
    return "/" + f;
  },
  em = {},
  preloadDependencies = function (E, R, h) {
    let L = Promise.resolve();
    if (R && R.length > 0) {
      let ze = function (_) {
        return Promise.all(
          _.map((T) =>
            Promise.resolve(T).then(
              (y) => ({
                status: "fulfilled",
                value: y,
              }),
              (y) => ({
                status: "rejected",
                reason: y,
              }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const be = document.querySelector("meta[property=csp-nonce]"),
        ge = be?.nonce || be?.getAttribute("nonce");
      L = ze(
        R.map((_) => {
          if (((_ = kv(_)), _ in em)) return;
          em[_] = !0;
          const T = _.endsWith(".css"),
            y = T ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${_}"]${y}`)) return;
          const O = document.createElement("link");
          if (
            ((O.rel = T ? "stylesheet" : mv),
            T || (O.as = "script"),
            (O.crossOrigin = ""),
            (O.href = _),
            ge && O.setAttribute("nonce", ge),
            document.head.appendChild(O),
            T)
          )
            return new Promise((Be, je) => {
              (O.addEventListener("load", Be),
                O.addEventListener("error", () =>
                  je(new Error(`Unable to preload CSS for ${_}`)),
                ));
            });
        }),
      );
    }
    function G(be) {
      const ge = new Event("vite:preloadError", {
        cancelable: !0,
      });
      if (((ge.payload = be), window.dispatchEvent(ge), !ge.defaultPrevented))
        throw be;
    }
    return L.then((be) => {
      for (const ge of be || []) ge.status === "rejected" && G(ge.reason);
      return E().catch(G);
    });
  };
var zd = {
    exports: {},
  },
  st = {};
var am;
function hv() {
  if (am) return st;
  am = 1;
  var f = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.fragment");
  function R(h, L, G) {
    var be = null;
    if (
      (G !== void 0 && (be = "" + G),
      L.key !== void 0 && (be = "" + L.key),
      "key" in L)
    ) {
      G = {};
      for (var ge in L) ge !== "key" && (G[ge] = L[ge]);
    } else G = L;
    return (
      (L = G.ref),
      {
        $$typeof: f,
        type: h,
        key: be,
        ref: L !== void 0 ? L : null,
        props: G,
      }
    );
  }
  return ((st.Fragment = E), (st.jsx = R), (st.jsxs = R), st);
}
var im;
function vv() {
  return (im || ((im = 1), (zd.exports = hv())), zd.exports);
}
var jsxRuntime = vv();
const supportedLocales = [
    {
      id: "zh-CN",
      label: "简体中文",
    },
    {
      id: "zh-Hant",
      label: "繁體中文",
    },
    {
      id: "ja",
      label: "日本語",
    },
    {
      id: "ko",
      label: "한국어",
    },
    {
      id: "tr",
      label: "Türkçe",
    },
    {
      id: "en",
      label: "English",
    },
  ],
  Bv = supportedLocales.map((f) => f.id),
  mm = "wedulab.locale",
  Sv = {
    en: yv,
    "zh-Hant": fv,
    ja: gv,
    ko: zv,
    tr: Av,
  };
function Ad(f) {
  if (typeof f != "string") return null;
  const E = f.trim().replace(/_/g, "-");
  return /^zh-(?:Hant|TW|HK|MO)(?:-|$)/i.test(E)
    ? "zh-Hant"
    : /^zh(?:-|$)/i.test(E)
      ? "zh-CN"
      : /^ja(?:-|$)/i.test(E)
        ? "ja"
        : /^ko(?:-|$)/i.test(E)
          ? "ko"
          : /^tr(?:-|$)/i.test(E)
            ? "tr"
            : /^en(?:-|$)/i.test(E)
              ? "en"
              : null;
}
const Ov =
  /googlebot|google-inspectiontool|bingbot|bingpreview|baiduspider|yandexbot|duckduckbot|slurp|sogou|bytespider|petalbot|applebot|gptbot|oai-searchbot|chatgpt-user|claudebot|claude-searchbot|perplexitybot|amazonbot|ccbot|meta-externalagent|facebookexternalhit|twitterbot|linkedinbot|crawler|spider/i;
function wv({
  admin: f = !1,
  search: E = "",
  saved: R,
  languages: h = [],
  crawler: L = !1,
} = {}) {
  if (f) return "zh-CN";
  const G = Ad(new URLSearchParams(E).get("lang"));
  return L ? G || "zh-CN" : G || Ad(R) || h.map(Ad).find(Boolean) || "zh-CN";
}
function Ev() {
  if (typeof window > "u") return "zh-CN";
  let f;
  try {
    f = window.localStorage.getItem(mm);
  } catch {}
  const E = wv({
    admin: /^\/admin(?:\/|$)/.test(window.location.pathname),
    search: window.location.search,
    saved: f,
    languages: window.navigator.languages || [window.navigator.language],
    crawler: Ov.test(window.navigator.userAgent || ""),
  });
  return ((document.documentElement.lang = E), E);
}
const currentLocale = Ev();
function Hv(f, E = [], R = currentLocale) {
  return (Sv[R]?.[f] ?? f).replace(/\{(\d+)\}/g, (L, G) =>
    G < E.length ? String(E[G]) : L,
  );
}
const translate = Hv;
function localizedUrl(f, E = currentLocale) {
  const R = new URL(f, "https://wedulab.local");
  return (R.searchParams.set("lang", E), R.pathname + R.search + R.hash);
}
function Qv(f) {
  if (Bv.includes(f)) {
    try {
      window.localStorage.setItem(mm, f);
    } catch {}
    window.location.assign(localizedUrl(window.location.href, f));
  }
}
var Cd = {
    exports: {},
  },
  F = {};
var nm;
function Tv() {
  if (nm) return F;
  nm = 1;
  var f = Symbol.for("react.transitional.element"),
    E = Symbol.for("react.portal"),
    R = Symbol.for("react.fragment"),
    h = Symbol.for("react.strict_mode"),
    L = Symbol.for("react.profiler"),
    G = Symbol.for("react.consumer"),
    be = Symbol.for("react.context"),
    ge = Symbol.for("react.forward_ref"),
    ze = Symbol.for("react.suspense"),
    _ = Symbol.for("react.memo"),
    T = Symbol.for("react.lazy"),
    y = Symbol.for("react.activity"),
    O = Symbol.for("react.view_transition"),
    Be = Symbol.iterator;
  function je(o) {
    return o === null || typeof o != "object"
      ? null
      : ((o = (Be && o[Be]) || o["@@iterator"]),
        typeof o == "function" ? o : null);
  }
  var We = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    he = Object.assign,
    ga = {};
  function ra(o, A, N) {
    ((this.props = o),
      (this.context = A),
      (this.refs = ga),
      (this.updater = N || We));
  }
  ((ra.prototype.isReactComponent = {}),
    (ra.prototype.setState = function (o, A) {
      if (typeof o != "object" && typeof o != "function" && o != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, o, A, "setState");
    }),
    (ra.prototype.forceUpdate = function (o) {
      this.updater.enqueueForceUpdate(this, o, "forceUpdate");
    }));
  function ji() {}
  ji.prototype = ra.prototype;
  function Ua(o, A, N) {
    ((this.props = o),
      (this.context = A),
      (this.refs = ga),
      (this.updater = N || We));
  }
  var Fa = (Ua.prototype = new ji());
  ((Fa.constructor = Ua), he(Fa, ra.prototype), (Fa.isPureReactComponent = !0));
  var sa = Array.isArray;
  function $() {}
  var ne = {
      H: null,
      A: null,
      T: null,
      S: null,
    },
    Ia = Object.prototype.hasOwnProperty;
  function za(o, A, N) {
    var x = N.ref;
    return {
      $$typeof: f,
      type: o,
      key: A,
      ref: x !== void 0 ? x : null,
      props: N,
    };
  }
  function Aa(o, A) {
    return za(o.type, A, o.props);
  }
  function ba(o) {
    return typeof o == "object" && o !== null && o.$$typeof === f;
  }
  function yi(o) {
    var A = {
      "=": "=0",
      ":": "=2",
    };
    return (
      "$" +
      o.replace(/[=:]/g, function (N) {
        return A[N];
      })
    );
  }
  var Qi = /\/+/g;
  function Re(o, A) {
    return typeof o == "object" && o !== null && o.key != null
      ? yi("" + o.key)
      : A.toString(36);
  }
  function B(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (
          (typeof o.status == "string"
            ? o.then($, $)
            : ((o.status = "pending"),
              o.then(
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "fulfilled"), (o.value = A));
                },
                function (A) {
                  o.status === "pending" &&
                    ((o.status = "rejected"), (o.reason = A));
                },
              )),
          o.status)
        ) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function q(o, A, N, x, W) {
    var ee = typeof o;
    (ee === "undefined" || ee === "boolean") && (o = null);
    var le = !1;
    if (o === null) le = !0;
    else
      switch (ee) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case f:
            case E:
              le = !0;
              break;
            case T:
              return ((le = o._init), q(le(o._payload), A, N, x, W));
          }
      }
    if (le)
      return (
        (W = W(o)),
        (le = x === "" ? "." + Re(o, 0) : x),
        sa(W)
          ? ((N = ""),
            le != null && (N = le.replace(Qi, "$&/") + "/"),
            q(W, A, N, "", function (ii) {
              return ii;
            }))
          : W != null &&
            (ba(W) &&
              (W = Aa(
                W,
                N +
                  (W.key == null || (o && o.key === W.key)
                    ? ""
                    : ("" + W.key).replace(Qi, "$&/") + "/") +
                  le,
              )),
            A.push(W)),
        1
      );
    le = 0;
    var H = x === "" ? "." : x + ":";
    if (sa(o))
      for (var U = 0; U < o.length; U++)
        ((x = o[U]), (ee = H + Re(x, U)), (le += q(x, A, N, ee, W)));
    else if (((U = je(o)), typeof U == "function"))
      for (o = U.call(o), U = 0; !(x = o.next()).done;)
        ((x = x.value), (ee = H + Re(x, U++)), (le += q(x, A, N, ee, W)));
    else if (ee === "object") {
      if (typeof o.then == "function") return q(B(o), A, N, x, W);
      throw (
        (A = String(o)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(o).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return le;
  }
  function M(o, A, N) {
    if (o == null) return o;
    var x = [],
      W = 0;
    return (
      q(o, x, "", "", function (ee) {
        return A.call(N, ee, W++);
      }),
      x
    );
  }
  function ue(o) {
    if (o._status === -1) {
      var A = o._result,
        N = A();
      (N.then(
        function (x) {
          (o._status === 0 || o._status === -1) &&
            ((o._status = 1),
            (o._result = x),
            N.status === void 0 && ((N.status = "fulfilled"), (N.value = x)));
        },
        function (x) {
          (o._status === 0 || o._status === -1) &&
            ((o._status = 2),
            (o._result = x),
            N.status === void 0 && ((N.status = "rejected"), (N.reason = x)));
        },
      ),
        o._status === -1 && ((o._status = 0), (o._result = N)));
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var re =
    typeof reportError == "function"
      ? reportError
      : function (o) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var A = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof o == "object" &&
                o !== null &&
                typeof o.message == "string"
                  ? String(o.message)
                  : String(o),
              error: o,
            });
            if (!window.dispatchEvent(A)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", o);
            return;
          }
          console.error(o);
        };
  function Na(o) {
    var A = ne.T,
      N = {};
    ((N.types = A !== null ? A.types : null), (ne.T = N));
    try {
      var x = o(),
        W = ne.S;
      (W !== null && W(N, x),
        typeof x == "object" &&
          x !== null &&
          typeof x.then == "function" &&
          x.then($, re));
    } catch (ee) {
      re(ee);
    } finally {
      (A !== null && N.types !== null && (A.types = N.types), (ne.T = A));
    }
  }
  function ai(o) {
    var A = ne.T;
    if (A !== null) {
      var N = A.types;
      N === null ? (A.types = [o]) : N.indexOf(o) === -1 && N.push(o);
    } else Na(ai.bind(null, o));
  }
  var Xi = {
    map: M,
    forEach: function (o, A, N) {
      M(
        o,
        function () {
          A.apply(this, arguments);
        },
        N,
      );
    },
    count: function (o) {
      var A = 0;
      return (
        M(o, function () {
          A++;
        }),
        A
      );
    },
    toArray: function (o) {
      return (
        M(o, function (A) {
          return A;
        }) || []
      );
    },
    only: function (o) {
      if (!ba(o))
        throw Error(
          "React.Children.only expected to receive a single React element child.",
        );
      return o;
    },
  };
  return (
    (F.Activity = y),
    (F.Children = Xi),
    (F.Component = ra),
    (F.Fragment = R),
    (F.Profiler = L),
    (F.PureComponent = Ua),
    (F.StrictMode = h),
    (F.Suspense = ze),
    (F.ViewTransition = O),
    (F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ne),
    (F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (o) {
        return ne.H.useMemoCache(o);
      },
    }),
    (F.addTransitionType = ai),
    (F.cache = function (o) {
      return function () {
        return o.apply(null, arguments);
      };
    }),
    (F.cacheSignal = function () {
      return null;
    }),
    (F.cloneElement = function (o, A, N) {
      if (o == null)
        throw Error(
          "The argument must be a React element, but you passed " + o + ".",
        );
      var x = he({}, o.props),
        W = o.key;
      if (A != null)
        for (ee in (A.key !== void 0 && (W = "" + A.key), A))
          !Ia.call(A, ee) ||
            ee === "key" ||
            ee === "__self" ||
            ee === "__source" ||
            (ee === "ref" && A.ref === void 0) ||
            (x[ee] = A[ee]);
      var ee = arguments.length - 2;
      if (ee === 1) x.children = N;
      else if (1 < ee) {
        for (var le = Array(ee), H = 0; H < ee; H++) le[H] = arguments[H + 2];
        x.children = le;
      }
      return za(o.type, W, x);
    }),
    (F.createContext = function (o) {
      return (
        (o = {
          $$typeof: be,
          _currentValue: o,
          _currentValue2: o,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (o.Provider = o),
        (o.Consumer = {
          $$typeof: G,
          _context: o,
        }),
        o
      );
    }),
    (F.createElement = function (o, A, N) {
      var x,
        W = {},
        ee = null;
      if (A != null)
        for (x in (A.key !== void 0 && (ee = "" + A.key), A))
          Ia.call(A, x) &&
            x !== "key" &&
            x !== "__self" &&
            x !== "__source" &&
            (W[x] = A[x]);
      var le = arguments.length - 2;
      if (le === 1) W.children = N;
      else if (1 < le) {
        for (var H = Array(le), U = 0; U < le; U++) H[U] = arguments[U + 2];
        W.children = H;
      }
      if (o && o.defaultProps)
        for (x in ((le = o.defaultProps), le))
          W[x] === void 0 && (W[x] = le[x]);
      return za(o, ee, W);
    }),
    (F.createRef = function () {
      return {
        current: null,
      };
    }),
    (F.forwardRef = function (o) {
      return {
        $$typeof: ge,
        render: o,
      };
    }),
    (F.isValidElement = ba),
    (F.lazy = function (o) {
      return {
        $$typeof: T,
        _payload: {
          _status: -1,
          _result: o,
        },
        _init: ue,
      };
    }),
    (F.memo = function (o, A) {
      return {
        $$typeof: _,
        type: o,
        compare: A === void 0 ? null : A,
      };
    }),
    (F.startTransition = Na),
    (F.unstable_useCacheRefresh = function () {
      return ne.H.useCacheRefresh();
    }),
    (F.use = function (o) {
      return ne.H.use(o);
    }),
    (F.useActionState = function (o, A, N) {
      return ne.H.useActionState(o, A, N);
    }),
    (F.useCallback = function (o, A) {
      return ne.H.useCallback(o, A);
    }),
    (F.useContext = function (o) {
      return ne.H.useContext(o);
    }),
    (F.useDebugValue = function () {}),
    (F.useDeferredValue = function (o, A) {
      return ne.H.useDeferredValue(o, A);
    }),
    (F.useEffect = function (o, A) {
      return ne.H.useEffect(o, A);
    }),
    (F.useEffectEvent = function (o) {
      return ne.H.useEffectEvent(o);
    }),
    (F.useId = function () {
      return ne.H.useId();
    }),
    (F.useImperativeHandle = function (o, A, N) {
      return ne.H.useImperativeHandle(o, A, N);
    }),
    (F.useInsertionEffect = function (o, A) {
      return ne.H.useInsertionEffect(o, A);
    }),
    (F.useLayoutEffect = function (o, A) {
      return ne.H.useLayoutEffect(o, A);
    }),
    (F.useMemo = function (o, A) {
      return ne.H.useMemo(o, A);
    }),
    (F.useOptimistic = function (o, A) {
      return ne.H.useOptimistic(o, A);
    }),
    (F.useReducer = function (o, A, N) {
      return ne.H.useReducer(o, A, N);
    }),
    (F.useRef = function (o) {
      return ne.H.useRef(o);
    }),
    (F.useState = function (o) {
      return ne.H.useState(o);
    }),
    (F.useSyncExternalStore = function (o, A, N) {
      return ne.H.useSyncExternalStore(o, A, N);
    }),
    (F.useTransition = function () {
      return ne.H.useTransition();
    }),
    (F.version = "19.3.0"),
    F
  );
}
var lm;
function Ed() {
  return (lm || ((lm = 1), (Cd.exports = Tv())), Cd.exports);
}
var React = Ed();
const tm = "wedulab.visitor.v1",
  Dv = /^[A-Za-z]{2,3}(-[A-Za-z0-9]{1,8}){0,3}$/,
  Nv = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;
function hm() {
  const f = crypto.getRandomValues(new Uint8Array(16));
  ((f[6] = (f[6] & 15) | 64), (f[8] = (f[8] & 63) | 128));
  const E = [...f].map((R) => R.toString(16).padStart(2, "0")).join("");
  return `${E.slice(0, 8)}-${E.slice(8, 12)}-${E.slice(12, 16)}-${E.slice(16, 20)}-${E.slice(20)}`;
}
function xv() {
  let f;
  try {
    f = localStorage.getItem(tm);
  } catch {}
  if (f && Nv.test(f)) return f;
  f = hm();
  try {
    localStorage.setItem(tm, f);
  } catch {}
  return f;
}
function Rv() {
  const f = navigator.userAgent;
  return /iPad|Tablet/i.test(f) ||
    (/Macintosh/i.test(f) && navigator.maxTouchPoints > 1)
    ? "tablet"
    : /Mobi|iPhone|Android/i.test(f)
      ? /Android/i.test(f) && !/Mobile/i.test(f)
        ? "tablet"
        : "mobile"
      : "desktop";
}
function Pv() {
  const f = navigator.language || "";
  return f.length <= 35 && Dv.test(f) ? f : "";
}
let rm = !1;
function recordVisit(f, E = "") {
  if (!rm) {
    rm = !0;
    try {
      let R = "";
      try {
        document.referrer && (R = new URL(document.referrer).origin);
      } catch {}
      const h = JSON.stringify({
        event_id: hm(),
        visitor_id: xv(),
        path: f,
        referrer: R,
        device: Rv(),
        language: Pv(),
        locale: E,
      });
      fetch("/api/v1/analytics/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: h,
        keepalive: !0,
        credentials: "same-origin",
      }).catch(() => {});
    } catch {}
  }
}
function FeedbackWidget() {
  const f = React.useRef(null),
    E = React.useRef(!1),
    [R, h] = React.useState(!1),
    [L, G] = React.useState(""),
    [be, ge] = React.useState(null);
  async function ze(_) {
    if ((_.preventDefault(), E.current)) return;
    const T = _.currentTarget,
      y = Object.fromEntries(new FormData(T));
    if (Array.from(y.message.trim()).length < 5) {
      G(translate("请至少填写 5 个字的问题描述。"));
      return;
    }
    ((E.current = !0), h(!0), G(""));
    try {
      const O = await fetch("/api/v1/feedback", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...y,
          path: window.location.pathname.replace(/\/$/, "") || "/",
          locale: currentLocale,
        }),
        signal: AbortSignal.timeout(15e3),
      });
      if (!O.ok) throw new Error(O.status === 429 ? "rate" : "submit");
      const Be = await O.json();
      if (!Number.isInteger(Be.id)) throw new Error("response");
      (ge(Be.id), T.reset());
    } catch (O) {
      G(
        O.message === "rate"
          ? translate("提交过于频繁，请稍后重试。")
          : translate("提交失败，请稍后重试，填写的内容已保留。"),
      );
    } finally {
      ((E.current = !1), h(!1));
    }
  }
  return jsxRuntime.jsxs(jsxRuntime.Fragment, {
    children: [
      jsxRuntime.jsx("button", {
        className: "feedback-trigger",
        type: "button",
        onClick: () => {
          (ge(null), G(""), f.current.showModal());
        },
        children: translate("问题反馈"),
      }),
      jsxRuntime.jsxs("dialog", {
        className: "feedback-dialog",
        ref: f,
        "aria-labelledby": "feedback-title",
        onKeyDown: (_) => _.stopPropagation(),
        onKeyUp: (_) => _.stopPropagation(),
        onCancel: (_) => {
          R && _.preventDefault();
        },
        children: [
          jsxRuntime.jsxs("div", {
            className: "feedback-heading",
            children: [
              jsxRuntime.jsx("h2", {
                id: "feedback-title",
                children: translate("问题反馈"),
              }),
              jsxRuntime.jsx("button", {
                type: "button",
                disabled: R,
                onClick: () => f.current.close(),
                "aria-label": translate("关闭反馈"),
                children: "×",
              }),
            ],
          }),
          be
            ? jsxRuntime.jsxs("div", {
                role: "status",
                children: [
                  jsxRuntime.jsx("p", {
                    children: translate("反馈已收到，感谢你的帮助！"),
                  }),
                  jsxRuntime.jsx("p", {
                    children: translate("反馈编号：{0}", [be]),
                  }),
                  jsxRuntime.jsx("button", {
                    className: "feedback-submit",
                    type: "button",
                    onClick: () => f.current.close(),
                    children: translate("完成"),
                  }),
                ],
              })
            : jsxRuntime.jsxs("form", {
                onSubmit: ze,
                children: [
                  jsxRuntime.jsx("p", {
                    className: "feedback-hint",
                    children: translate(
                      "当前页面会随反馈提交，方便我们定位问题。",
                    ),
                  }),
                  jsxRuntime.jsxs("label", {
                    children: [
                      translate("反馈类型"),
                      jsxRuntime.jsxs("select", {
                        name: "category",
                        disabled: R,
                        defaultValue: "bug",
                        children: [
                          jsxRuntime.jsx("option", {
                            value: "bug",
                            children: translate("功能异常"),
                          }),
                          jsxRuntime.jsx("option", {
                            value: "content",
                            children: translate("内容纠错"),
                          }),
                          jsxRuntime.jsx("option", {
                            value: "suggestion",
                            children: translate("功能建议"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("label", {
                    children: [
                      translate("问题描述"),
                      jsxRuntime.jsx("textarea", {
                        name: "message",
                        required: !0,
                        minLength: 5,
                        maxLength: 2e3,
                        rows: 5,
                        disabled: R,
                        placeholder: translate(
                          "请描述操作步骤、遇到的问题或你的建议（5–2000 字）。",
                        ),
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("label", {
                    children: [
                      translate("联系方式（选填）"),
                      jsxRuntime.jsx("input", {
                        name: "contact",
                        maxLength: 200,
                        disabled: R,
                        placeholder: translate("邮箱或微信，便于我们联系你"),
                      }),
                    ],
                  }),
                  jsxRuntime.jsx("p", {
                    className: "feedback-hint",
                    children: translate(
                      "反馈仅供管理员查看，请勿填写密码等敏感信息。",
                    ),
                  }),
                  L &&
                    jsxRuntime.jsx("p", {
                      className: "feedback-error",
                      role: "alert",
                      children: L,
                    }),
                  jsxRuntime.jsx("button", {
                    className: "feedback-submit",
                    disabled: R,
                    children: translate(R ? "正在提交…" : "提交反馈"),
                  }),
                ],
              }),
        ],
      }),
    ],
  });
}
var Bd = {
    exports: {},
  },
  bt = {},
  Sd = {
    exports: {},
  },
  Od = {};
var sm;
function Mv() {
  return (
    sm ||
      ((sm = 1),
      (function (f) {
        function E(B, q) {
          var M = B.length;
          B.push(q);
          e: for (; 0 < M;) {
            var ue = (M - 1) >>> 1,
              re = B[ue];
            if (0 < L(re, q)) ((B[ue] = q), (B[M] = re), (M = ue));
            else break e;
          }
        }
        function R(B) {
          return B.length === 0 ? null : B[0];
        }
        function h(B) {
          if (B.length === 0) return null;
          var q = B[0],
            M = B.pop();
          if (M !== q) {
            B[0] = M;
            e: for (var ue = 0, re = B.length, Na = re >>> 1; ue < Na;) {
              var ai = 2 * (ue + 1) - 1,
                Xi = B[ai],
                o = ai + 1,
                A = B[o];
              if (0 > L(Xi, M))
                o < re && 0 > L(A, Xi)
                  ? ((B[ue] = A), (B[o] = M), (ue = o))
                  : ((B[ue] = Xi), (B[ai] = M), (ue = ai));
              else if (o < re && 0 > L(A, M))
                ((B[ue] = A), (B[o] = M), (ue = o));
              else break e;
            }
          }
          return q;
        }
        function L(B, q) {
          var M = B.sortIndex - q.sortIndex;
          return M !== 0 ? M : B.id - q.id;
        }
        if (
          ((f.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var G = performance;
          f.unstable_now = function () {
            return G.now();
          };
        } else {
          var be = Date,
            ge = be.now();
          f.unstable_now = function () {
            return be.now() - ge;
          };
        }
        var ze = [],
          _ = [],
          T = 1,
          y = null,
          O = 3,
          Be = !1,
          je = !1,
          We = !1,
          he = !1,
          ga = typeof setTimeout == "function" ? setTimeout : null,
          ra = typeof clearTimeout == "function" ? clearTimeout : null,
          ji = typeof setImmediate < "u" ? setImmediate : null;
        function Ua(B) {
          for (var q = R(_); q !== null;) {
            if (q.callback === null) h(_);
            else if (q.startTime <= B)
              (h(_), (q.sortIndex = q.expirationTime), E(ze, q));
            else break;
            q = R(_);
          }
        }
        function Fa(B) {
          if (((We = !1), Ua(B), !je))
            if (R(ze) !== null) ((je = !0), sa || ((sa = !0), ba()));
            else {
              var q = R(_);
              q !== null && Re(Fa, q.startTime - B);
            }
        }
        var sa = !1,
          $ = -1,
          ne = 5,
          Ia = -1;
        function za() {
          return he ? !0 : !(f.unstable_now() - Ia < ne);
        }
        function Aa() {
          if (((he = !1), sa)) {
            var B = f.unstable_now();
            Ia = B;
            var q = !0;
            try {
              e: {
                ((je = !1), We && ((We = !1), ra($), ($ = -1)), (Be = !0));
                var M = O;
                try {
                  a: {
                    for (
                      Ua(B), y = R(ze);
                      y !== null && !(y.expirationTime > B && za());
                    ) {
                      var ue = y.callback;
                      if (typeof ue == "function") {
                        ((y.callback = null), (O = y.priorityLevel));
                        var re = ue(y.expirationTime <= B);
                        if (((B = f.unstable_now()), typeof re == "function")) {
                          ((y.callback = re), Ua(B), (q = !0));
                          break a;
                        }
                        (y === R(ze) && h(ze), Ua(B));
                      } else h(ze);
                      y = R(ze);
                    }
                    if (y !== null) q = !0;
                    else {
                      var Na = R(_);
                      (Na !== null && Re(Fa, Na.startTime - B), (q = !1));
                    }
                  }
                  break e;
                } finally {
                  ((y = null), (O = M), (Be = !1));
                }
                q = void 0;
              }
            } finally {
              q ? ba() : (sa = !1);
            }
          }
        }
        var ba;
        if (typeof ji == "function")
          ba = function () {
            ji(Aa);
          };
        else if (typeof MessageChannel < "u") {
          var yi = new MessageChannel(),
            Qi = yi.port2;
          ((yi.port1.onmessage = Aa),
            (ba = function () {
              Qi.postMessage(null);
            }));
        } else
          ba = function () {
            ga(Aa, 0);
          };
        function Re(B, q) {
          $ = ga(function () {
            B(f.unstable_now());
          }, q);
        }
        ((f.unstable_IdlePriority = 5),
          (f.unstable_ImmediatePriority = 1),
          (f.unstable_LowPriority = 4),
          (f.unstable_NormalPriority = 3),
          (f.unstable_Profiling = null),
          (f.unstable_UserBlockingPriority = 2),
          (f.unstable_cancelCallback = function (B) {
            B.callback = null;
          }),
          (f.unstable_forceFrameRate = function (B) {
            0 > B || 125 < B
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (ne = 0 < B ? Math.floor(1e3 / B) : 5);
          }),
          (f.unstable_getCurrentPriorityLevel = function () {
            return O;
          }),
          (f.unstable_next = function (B) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var q = 3;
                break;
              default:
                q = O;
            }
            var M = O;
            O = q;
            try {
              return B();
            } finally {
              O = M;
            }
          }),
          (f.unstable_requestPaint = function () {
            he = !0;
          }),
          (f.unstable_runWithPriority = function (B, q) {
            switch (B) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                B = 3;
            }
            var M = O;
            O = B;
            try {
              return q();
            } finally {
              O = M;
            }
          }),
          (f.unstable_scheduleCallback = function (B, q, M) {
            var ue = f.unstable_now();
            switch (
              (typeof M == "object" && M !== null
                ? ((M = M.delay),
                  (M = typeof M == "number" && 0 < M ? ue + M : ue))
                : (M = ue),
              B)
            ) {
              case 1:
                var re = -1;
                break;
              case 2:
                re = 250;
                break;
              case 5:
                re = 1073741823;
                break;
              case 4:
                re = 1e4;
                break;
              default:
                re = 5e3;
            }
            return (
              (re = M + re),
              (B = {
                id: T++,
                callback: q,
                priorityLevel: B,
                startTime: M,
                expirationTime: re,
                sortIndex: -1,
              }),
              M > ue
                ? ((B.sortIndex = M),
                  E(_, B),
                  R(ze) === null &&
                    B === R(_) &&
                    (We ? (ra($), ($ = -1)) : (We = !0), Re(Fa, M - ue)))
                : ((B.sortIndex = re),
                  E(ze, B),
                  je || Be || ((je = !0), sa || ((sa = !0), ba()))),
              B
            );
          }),
          (f.unstable_shouldYield = za),
          (f.unstable_wrapCallback = function (B) {
            var q = O;
            return function () {
              var M = O;
              O = q;
              try {
                return B.apply(this, arguments);
              } finally {
                O = M;
              }
            };
          }));
      })(Od)),
    Od
  );
}
var bm;
function Uv() {
  return (bm || ((bm = 1), (Sd.exports = Mv())), Sd.exports);
}
var wd = {
    exports: {},
  },
  _e = {};
var dm;
function Fv() {
  if (dm) return _e;
  dm = 1;
  var f = Ed();
  function E(T) {
    var y = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var O = 2; O < arguments.length; O++)
        y += "&args[]=" + encodeURIComponent(arguments[O]);
    }
    return (
      "Minified React error #" +
      T +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R() {}
  var h = {
      d: {
        f: R,
        r: function () {
          throw Error(E(522));
        },
        D: R,
        C: R,
        L: R,
        m: R,
        X: R,
        S: R,
        M: R,
      },
      p: 0,
      findDOMNode: null,
    },
    L = Symbol.for("react.portal"),
    G = Symbol.for("react.recoverable"),
    be = Symbol.for("react.optimistic_key");
  function ge(T, y, O) {
    var Be =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: L,
      key: Be == null ? null : Be === be ? be : "" + Be,
      children: T,
      containerInfo: y,
      implementation: O,
    };
  }
  var ze = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function _(T, y) {
    if (T === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (_e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h),
    (_e.browser = function (T) {
      return {
        $$typeof: G,
        _reason: T,
      };
    }),
    (_e.createPortal = function (T, y) {
      var O =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(E(299));
      return ge(T, y, null, O);
    }),
    (_e.flushSync = function (T) {
      var y = ze.T,
        O = h.p;
      try {
        if (((ze.T = null), (h.p = 2), T)) return T();
      } finally {
        ((ze.T = y), (h.p = O), h.d.f());
      }
    }),
    (_e.preconnect = function (T, y) {
      typeof T == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        h.d.C(T, y));
    }),
    (_e.prefetchDNS = function (T) {
      typeof T == "string" && h.d.D(T);
    }),
    (_e.preinit = function (T, y) {
      if (typeof T == "string" && y && typeof y.as == "string") {
        var O = y.as,
          Be = _(O, y.crossOrigin),
          je = typeof y.integrity == "string" ? y.integrity : void 0,
          We = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        O === "style"
          ? h.d.S(T, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: Be,
              integrity: je,
              fetchPriority: We,
            })
          : O === "script" &&
            h.d.X(T, {
              crossOrigin: Be,
              integrity: je,
              fetchPriority: We,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (_e.preinitModule = function (T, y) {
      if (typeof T == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var O = _(y.as, y.crossOrigin);
            h.d.M(T, {
              crossOrigin: O,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
              fetchPriority:
                typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
            });
          }
        } else y == null && h.d.M(T);
    }),
    (_e.preload = function (T, y) {
      if (
        typeof T == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var O = y.as,
          Be = _(O, y.crossOrigin);
        h.d.L(T, O, {
          crossOrigin: Be,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (_e.preloadModule = function (T, y) {
      if (typeof T == "string")
        if (y) {
          var O = _(y.as, y.crossOrigin);
          h.d.m(T, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: O,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority:
              typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          });
        } else h.d.m(T);
    }),
    (_e.requestFormReset = function (T) {
      h.d.r(T);
    }),
    (_e.unstable_batchedUpdates = function (T, y) {
      return T(y);
    }),
    (_e.useFormState = function (T, y, O) {
      return ze.H.useFormState(T, y, O);
    }),
    (_e.useFormStatus = function () {
      return ze.H.useHostTransitionStatus();
    }),
    (_e.version = "19.3.0"),
    _e
  );
}
var om;
function Iv() {
  if (om) return wd.exports;
  om = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (E) {
        console.error(E);
      }
  }
  return (f(), (wd.exports = Fv()), wd.exports);
}
var pm;
function Gv() {
  if (pm) return bt;
  pm = 1;
  var f = Uv(),
    E = Ed(),
    R = Iv();
  function h(e) {
    var a = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      a += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var i = 2; i < arguments.length; i++)
        a += "&args[]=" + encodeURIComponent(arguments[i]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      a +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function L(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function G(e) {
    for (var a = e, i = a; i && !i.alternate;)
      ((a = i), (a.flags & 4098) !== 0 && (e = a.return), (i = a.return));
    for (; a.return;) a = a.return;
    return a.tag === 3 ? e : null;
  }
  function be(e) {
    if (e.tag === 13) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function ge(e) {
    if (e.tag === 31) {
      var a = e.memoizedState;
      if (
        (a === null && ((e = e.alternate), e !== null && (a = e.memoizedState)),
        a !== null)
      )
        return a.dehydrated;
    }
    return null;
  }
  function ze(e) {
    if (G(e) !== e) throw Error(h(188));
  }
  function _(e) {
    var a = e.alternate;
    if (!a) {
      if (((a = G(e)), a === null)) throw Error(h(188));
      return a !== e ? null : e;
    }
    for (var i = e, n = a; ;) {
      var l = i.return;
      if (l === null) break;
      var t = l.alternate;
      if (t === null) {
        if (((n = l.return), n !== null)) {
          i = n;
          continue;
        }
        break;
      }
      if (l.child === t.child) {
        for (t = l.child; t;) {
          if (t === i) return (ze(l), e);
          if (t === n) return (ze(l), a);
          t = t.sibling;
        }
        throw Error(h(188));
      }
      if (i.return !== n.return) ((i = l), (n = t));
      else {
        for (var r = !1, s = l.child; s;) {
          if (s === i) {
            ((r = !0), (i = l), (n = t));
            break;
          }
          if (s === n) {
            ((r = !0), (n = l), (i = t));
            break;
          }
          s = s.sibling;
        }
        if (!r) {
          for (s = t.child; s;) {
            if (s === i) {
              ((r = !0), (i = t), (n = l));
              break;
            }
            if (s === n) {
              ((r = !0), (n = t), (i = l));
              break;
            }
            s = s.sibling;
          }
          if (!r) throw Error(h(189));
        }
      }
      if (i.alternate !== n) throw Error(h(190));
    }
    if (i.tag !== 3) throw Error(h(188));
    return i.stateNode.current === i ? e : a;
  }
  function T(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e;
    for (e = e.child; e !== null;) {
      if (((a = T(e)), a !== null)) return a;
      e = e.sibling;
    }
    return null;
  }
  function y(e, a, i, n, l, t) {
    for (; e !== null;) {
      if (
        ((e.tag === 5 || e.tag === 27 || e.tag === 6) && i(e, n, l, t)) ||
        ((e.tag !== 22 || e.memoizedState === null) &&
          (a || (e.tag !== 5 && e.tag !== 27)) &&
          y(e.child, a, i, n, l, t))
      )
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function O(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function Be(e) {
    var a = !1;
    for (
      e = e.return;
      e !== null &&
      (e.tag === 4 && (a = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27));
    )
      e = e.return;
    return a;
  }
  function je(e) {
    var a = [null, null],
      i = O(e);
    return (
      i === null ||
        We(a, e, i.child, {
          foundSelf: !1,
        }),
      a
    );
  }
  function We(e, a, i, n) {
    for (; i !== null;) {
      if (i === a) n.foundSelf = !0;
      else if (i.tag === 5 || i.tag === 27 || i.tag === 6) {
        if (n.foundSelf) return ((e[1] = i), !0);
        e[0] = i;
      } else if (
        (i.tag !== 22 || i.memoizedState === null) &&
        We(e, a, i.child, n)
      )
        return !0;
      i = i.sibling;
    }
    return !1;
  }
  function he(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(h(559));
    }
  }
  var ga = null,
    ra = null;
  function ji(e, a, i) {
    return e === i ? !0 : e === a ? ((ga = e), !0) : !1;
  }
  function Ua(e, a, i) {
    return e === i
      ? ((ra = e), !1)
      : e === a
        ? (ra !== null && (ga = e), !0)
        : !1;
  }
  function Fa(e) {
    if (e === null) return null;
    do e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function sa(e, a, i) {
    for (var n = 0, l = e; l; l = i(l)) n++;
    l = 0;
    for (var t = a; t; t = i(t)) l++;
    for (; 0 < n - l;) ((e = i(e)), n--);
    for (; 0 < l - n;) ((a = i(a)), l--);
    for (; n--;) {
      if (e === a || (a !== null && e === a.alternate)) return e;
      ((e = i(e)), (a = i(a)));
    }
    return null;
  }
  var $ = Object.assign,
    ne = Symbol.for("react.element"),
    Ia = Symbol.for("react.transitional.element"),
    za = Symbol.for("react.portal"),
    Aa = Symbol.for("react.fragment"),
    ba = Symbol.for("react.strict_mode"),
    yi = Symbol.for("react.profiler"),
    Qi = Symbol.for("react.consumer"),
    Re = Symbol.for("react.context"),
    B = Symbol.for("react.forward_ref"),
    q = Symbol.for("react.suspense"),
    M = Symbol.for("react.suspense_list"),
    ue = Symbol.for("react.memo"),
    re = Symbol.for("react.lazy"),
    Na = Symbol.for("react.activity"),
    ai = Symbol.for("react.legacy_hidden"),
    Xi = Symbol.for("react.memo_cache_sentinel"),
    o = Symbol.for("react.view_transition"),
    A = Symbol.for("react.recoverable"),
    N = Symbol.iterator;
  function x(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (N && e[N]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var W = Symbol.for("react.client.reference");
  function ee(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === W ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Aa:
        return "Fragment";
      case yi:
        return "Profiler";
      case ba:
        return "StrictMode";
      case q:
        return "Suspense";
      case M:
        return "SuspenseList";
      case Na:
        return "Activity";
      case o:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case za:
          return "Portal";
        case Re:
          return e.displayName || "Context";
        case Qi:
          return (e._context.displayName || "Context") + ".Consumer";
        case B:
          var a = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = a.displayName || a.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ue:
          return (
            (a = e.displayName || null),
            a !== null ? a : ee(e.type) || "Memo"
          );
        case re:
          ((a = e._payload), (e = e._init));
          try {
            return ee(e(a));
          } catch {}
      }
    return null;
  }
  var le = Array.isArray,
    H = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    U = R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ii = {
      pending: !1,
      data: null,
      method: null,
      action: null,
    },
    Fr = [],
    zn = -1;
  function Ga(e) {
    return {
      current: e,
    };
  }
  function Ue(e) {
    0 > zn || ((e.current = Fr[zn]), (Fr[zn] = null), zn--);
  }
  function ve(e, a) {
    (zn++, (Fr[zn] = e.current), (e.current = a));
  }
  var Ya = Ga(null),
    ul = Ga(null),
    fi = Ga(null),
    dt = Ga(null);
  function ot(e, a) {
    switch ((ve(fi, a), ve(ul, e), ve(Ya, null), a.nodeType)) {
      case 9:
      case 11:
        e = (e = a.documentElement) && (e = e.namespaceURI) ? du(e) : 0;
        break;
      default:
        if (((e = a.tagName), (a = a.namespaceURI)))
          ((a = du(a)), (e = ou(a, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (Ue(Ya), ve(Ya, e));
  }
  function An() {
    (Ue(Ya), Ue(ul), Ue(fi));
  }
  function Ir(e) {
    var a = e.memoizedState;
    (a !== null && ((dl._currentValue = a.memoizedState), ve(dt, e)),
      (a = Ya.current));
    var i = ou(a, e.type);
    a !== i && (ve(ul, e), ve(Ya, i));
  }
  function pt(e) {
    (ul.current === e && (Ue(Ya), Ue(ul)),
      dt.current === e && (Ue(dt), (dl._currentValue = ii)));
  }
  var Gr, Hd;
  function gi(e) {
    if (Gr === void 0)
      try {
        throw Error();
      } catch (i) {
        var a = i.stack.trim().match(/\n( *(at )?)/);
        ((Gr = (a && a[1]) || ""),
          (Hd =
            -1 <
            i.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < i.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Gr +
      e +
      Hd
    );
  }
  var Yr = !1;
  function Vr(e, a) {
    if (!e || Yr) return "";
    Yr = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var n = {
        DetermineComponentFrameRoot: function () {
          try {
            if (a) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (C) {
                  var p = C;
                }
                Reflect.construct(e, [], z);
              } else {
                try {
                  z.call();
                } catch (C) {
                  p = C;
                }
                z = !1;
                try {
                  var k = Object.getOwnPropertyDescriptor(e.prototype, "props");
                  (Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function () {
                      throw Error();
                    },
                  }),
                    (z = !0),
                    new e());
                } finally {
                  z &&
                    (k !== void 0
                      ? Object.defineProperty(e.prototype, "props", k)
                      : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (C) {
                p = C;
              }
              (z = e()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (C) {
            if (C && p && typeof C.stack == "string") return [C.stack, p.stack];
          }
          return [null, null];
        },
      };
      n.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        n.DetermineComponentFrameRoot,
        "name",
      );
      l &&
        l.configurable &&
        Object.defineProperty(n.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var t = n.DetermineComponentFrameRoot(),
        r = t[0],
        s = t[1];
      if (r && s) {
        var b = r.split(`
`),
          u = s.split(`
`);
        for (
          l = n = 0;
          n < b.length && !b[n].includes("DetermineComponentFrameRoot");
        )
          n++;
        for (; l < u.length && !u[l].includes("DetermineComponentFrameRoot");)
          l++;
        if (n === b.length || l === u.length)
          for (
            n = b.length - 1, l = u.length - 1;
            1 <= n && 0 <= l && b[n] !== u[l];
          )
            l--;
        for (; 1 <= n && 0 <= l; n--, l--)
          if (b[n] !== u[l]) {
            if (n !== 1 || l !== 1)
              do
                if ((n--, l--, 0 > l || b[n] !== u[l])) {
                  var v =
                    `
` + b[n].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= n && 0 <= l);
            break;
          }
      }
    } finally {
      ((Yr = !1), (Error.prepareStackTrace = i));
    }
    return (i = e ? e.displayName || e.name : "") ? gi(i) : "";
  }
  function ym(e, a) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return gi(e.type);
      case 16:
        return gi("Lazy");
      case 13:
        return e.child !== a && a !== null
          ? gi("Suspense Fallback")
          : gi("Suspense");
      case 19:
        return gi("SuspenseList");
      case 0:
      case 15:
        return Vr(e.type, !1);
      case 11:
        return Vr(e.type.render, !1);
      case 1:
        return Vr(e.type, !0);
      case 31:
        return gi("Activity");
      case 30:
        return gi("ViewTransition");
      default:
        return "";
    }
  }
  function Td(e) {
    try {
      var a = "",
        i = null;
      do ((a += ym(e, i)), (i = e), (e = e.return));
      while (e);
      return a;
    } catch (n) {
      return (
        `
Error generating stack: ` +
        n.message +
        `
` +
        n.stack
      );
    }
  }
  var Kr = Object.prototype.hasOwnProperty,
    _r = f.unstable_scheduleCallback,
    $r = f.unstable_cancelCallback,
    fm = f.unstable_shouldYield,
    gm = f.unstable_requestPaint,
    da = f.unstable_now,
    zm = f.unstable_getCurrentPriorityLevel,
    Dd = f.unstable_ImmediatePriority,
    Nd = f.unstable_UserBlockingPriority,
    ct = f.unstable_NormalPriority,
    Am = f.unstable_LowPriority,
    xd = f.unstable_IdlePriority,
    Cm = f.log,
    Bm = f.unstable_setDisableYieldValue,
    ml = null,
    oa = null;
  function zi(e) {
    if (
      (typeof Cm == "function" && Bm(e),
      oa && typeof oa.setStrictMode == "function")
    )
      try {
        oa.setStrictMode(ml, e);
      } catch {}
  }
  var pa = Math.clz32 ? Math.clz32 : wm,
    Sm = Math.log,
    Om = Math.LN2;
  function wm(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Sm(e) / Om) | 0)) | 0);
  }
  var ut = 256,
    mt = 262144,
    kt = 4194304;
  function Zi(e) {
    var a = e & 42;
    if (a !== 0) return a;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ht(e, a, i) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var l = 0,
      t = e.suspendedLanes,
      r = e.pingedLanes;
    e = e.warmLanes;
    var s = n & 134217727;
    return (
      s !== 0
        ? ((n = s & ~t),
          n !== 0
            ? (l = Zi(n))
            : ((r &= s),
              r !== 0
                ? (l = Zi(r))
                : i || ((i = s & ~e), i !== 0 && (l = Zi(i)))))
        : ((s = n & ~t),
          s !== 0
            ? (l = Zi(s))
            : r !== 0
              ? (l = Zi(r))
              : i || ((i = n & ~e), i !== 0 && (l = Zi(i)))),
      l === 0
        ? 0
        : a !== 0 &&
            a !== l &&
            (a & t) === 0 &&
            ((t = l & -l),
            (i = a & -a),
            t >= i || (t === 32 && (i & 4194048) !== 0))
          ? a
          : l
    );
  }
  function kl(e, a) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & a) === 0;
  }
  function Rd(e, a) {
    (a & 8) !== 0 && (a |= a & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= a; 0 < i;) {
        var n = 31 - pa(i),
          l = 1 << n;
        ((a |= e[n]), (i &= ~l));
      }
    return a;
  }
  function Em(e, a) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return a + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return a + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pd() {
    var e = kt;
    return ((kt <<= 1), (kt & 62914560) === 0 && (kt = 4194304), e);
  }
  function jr(e) {
    for (var a = [], i = 0; 31 > i; i++) a.push(e);
    return a;
  }
  function hl(e, a) {
    ((e.pendingLanes |= a),
      a !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Hm(e, a, i, n, l, t) {
    var r = e.pendingLanes;
    ((e.pendingLanes = i),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= i),
      (e.entangledLanes &= i),
      (e.errorRecoveryDisabledLanes &= i),
      (e.shellSuspendCounter = 0));
    var s = e.entanglements,
      b = e.expirationTimes,
      u = e.hiddenUpdates;
    for (i = r & ~i; 0 < i;) {
      var v = 31 - pa(i),
        z = 1 << v;
      ((s[v] = 0), (b[v] = -1));
      var p = u[v];
      if (p !== null)
        for (u[v] = null, v = 0; v < p.length; v++) {
          var k = p[v];
          k !== null && (k.lane &= -536870913);
        }
      i &= ~z;
    }
    (n !== 0 && qd(e, n, 0),
      t !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= t & ~(r & ~a)));
  }
  function qd(e, a, i) {
    ((e.pendingLanes |= a), (e.suspendedLanes &= ~a));
    var n = 31 - pa(a);
    ((e.entangledLanes |= a),
      (e.entanglements[n] = e.entanglements[n] | 1073741824 | (i & 261930)));
  }
  function Ld(e, a) {
    var i = (e.entangledLanes |= a);
    for (e = e.entanglements; i;) {
      var n = 31 - pa(i),
        l = 1 << n;
      ((l & a) | (e[n] & a) && (e[n] |= a), (i &= ~l));
    }
  }
  function Md(e, a) {
    var i = a & -a;
    return (
      (i = (i & 42) !== 0 ? 1 : Qr(i)),
      (i & (e.suspendedLanes | a)) !== 0 ? 0 : i
    );
  }
  function Qr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Xr(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ud() {
    var e = U.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : $u(e.type));
  }
  function Fd(e, a) {
    var i = U.p;
    try {
      return ((U.p = e), a());
    } finally {
      U.p = i;
    }
  }
  var ni = Math.random().toString(36).slice(2),
    Fe = "__reactFiber$" + ni,
    ea = "__reactProps$" + ni,
    Cn = "__reactContainer$" + ni,
    Id = "__reactEvents$" + ni,
    Tm = "__reactListeners$" + ni,
    Dm = "__reactHandles$" + ni,
    Gd = "__reactResources$" + ni,
    vl = "__reactMarker$" + ni,
    vt = "__reactLoad$" + ni;
  function yt(e) {
    (delete e[Fe], delete e[ea], delete e[Tm], delete e[Dm]);
  }
  function Ji(e) {
    var a;
    if ((a = e[Fe])) return a;
    for (var i = e.parentNode; i;) {
      if ((a = i[Cn] || i[Fe])) {
        if (
          ((i = a.alternate),
          a.child !== null || (i !== null && i.child !== null))
        )
          for (e = wu(e); e !== null;) {
            if ((i = e[Fe])) return i;
            e = wu(e);
          }
        return a;
      }
      ((e = i), (i = e.parentNode));
    }
    return null;
  }
  function Bn(e) {
    if ((e = e[Fe] || e[Cn])) {
      var a = e.tag;
      if (
        a === 5 ||
        a === 6 ||
        a === 13 ||
        a === 31 ||
        a === 26 ||
        a === 27 ||
        a === 3
      )
        return e;
    }
    return null;
  }
  function yl(e) {
    var a = e.tag;
    if (a === 5 || a === 26 || a === 27 || a === 6) return e.stateNode;
    throw Error(h(33));
  }
  function Sn(e) {
    var a = e[Gd];
    return (
      a ||
        (a = e[Gd] =
          {
            hoistableStyles: new Map(),
            hoistableScripts: new Map(),
          }),
      a
    );
  }
  function Pe(e) {
    e[vl] = !0;
  }
  function Yd(e) {
    e[vt] = void 0;
  }
  var Vd = new Set(),
    Kd = {};
  function Wi(e, a) {
    (On(e, a), On(e + "Capture", a));
  }
  function On(e, a) {
    for (Kd[e] = a, e = 0; e < a.length; e++) Vd.add(a[e]);
  }
  var Nm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    _d = {},
    $d = {};
  function xm(e) {
    return Kr.call($d, e)
      ? !0
      : Kr.call(_d, e)
        ? !1
        : Nm.test(e)
          ? ($d[e] = !0)
          : ((_d[e] = !0), !1);
  }
  var ae = !1;
  function jd() {
    var e = ae;
    return ((ae = !1), e);
  }
  function ft(e, a, i) {
    if (xm(a))
      if (i === null) e.removeAttribute(a);
      else {
        switch (typeof i) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(a);
            return;
          case "boolean":
            var n = a.toLowerCase().slice(0, 5);
            if (n !== "data-" && n !== "aria-") {
              e.removeAttribute(a);
              return;
            }
        }
        e.setAttribute(a, i);
      }
  }
  function gt(e, a, i) {
    if (i === null) e.removeAttribute(a);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttribute(a, i);
    }
  }
  function li(e, a, i, n) {
    if (n === null) e.removeAttribute(i);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(i);
          return;
      }
      e.setAttributeNS(a, i, n);
    }
  }
  function ca(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Qd(e) {
    var a = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (a === "checkbox" || a === "radio")
    );
  }
  function Rm(e, a, i) {
    var n = Object.getOwnPropertyDescriptor(e.constructor.prototype, a);
    if (
      !e.hasOwnProperty(a) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var l = n.get,
        t = n.set;
      return (
        Object.defineProperty(e, a, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (r) {
            ((i = "" + r), t.call(this, r));
          },
        }),
        Object.defineProperty(e, a, {
          enumerable: n.enumerable,
        }),
        {
          getValue: function () {
            return i;
          },
          setValue: function (r) {
            i = "" + r;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[a]);
          },
        }
      );
    }
  }
  function Zr(e) {
    if (!e._valueTracker) {
      var a = Qd(e) ? "checked" : "value";
      e._valueTracker = Rm(e, a, "" + e[a]);
    }
  }
  function Xd(e) {
    if (!e) return !1;
    var a = e._valueTracker;
    if (!a) return !0;
    var i = a.getValue(),
      n = "";
    return (
      e && (n = Qd(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== i ? (a.setValue(e), !0) : !1
    );
  }
  var Pm = /[\n"\\]/g;
  function Ca(e) {
    return e.replace(Pm, function (a) {
      return "\\" + a.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jr(e, a, i, n, l, t, r, s) {
    ((e.name = ""),
      r != null &&
      typeof r != "function" &&
      typeof r != "symbol" &&
      typeof r != "boolean"
        ? (e.type = r)
        : e.removeAttribute("type"),
      a != null
        ? r === "number"
          ? ((a === 0 && e.value === "") || e.value != a) &&
            (e.value = "" + ca(a))
          : e.value !== "" + ca(a) && (e.value = "" + ca(a))
        : (r !== "submit" && r !== "reset") || e.removeAttribute("value"),
      a != null
        ? r === "number" && e.value == a
          ? Wr(e, ca(e.value))
          : Wr(e, ca(a))
        : i != null
          ? Wr(e, ca(i))
          : n != null && e.removeAttribute("value"),
      l == null && t != null && (e.defaultChecked = !!t),
      l != null &&
        (e.checked = l && typeof l != "function" && typeof l != "symbol"),
      s != null &&
      typeof s != "function" &&
      typeof s != "symbol" &&
      typeof s != "boolean"
        ? (e.name = "" + ca(s))
        : e.removeAttribute("name"));
  }
  function Zd(e, a, i, n, l, t, r, s) {
    if (
      (t != null &&
        typeof t != "function" &&
        typeof t != "symbol" &&
        typeof t != "boolean" &&
        (e.type = t),
      a != null || i != null)
    ) {
      if (!((t !== "submit" && t !== "reset") || a != null)) {
        Zr(e);
        return;
      }
      ((i = i != null ? "" + ca(i) : ""),
        (a = a != null ? "" + ca(a) : i),
        s || a === e.value || (e.value = a),
        (e.defaultValue = a));
    }
    ((n = n ?? l),
      (n = typeof n != "function" && typeof n != "symbol" && !!n),
      (e.checked = s ? e.checked : !!n),
      (e.defaultChecked = !!n),
      r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (e.name = r),
      Zr(e));
  }
  function Wr(e, a) {
    e.defaultValue !== "" + a && (e.defaultValue = "" + a);
  }
  function wn(e, a, i, n) {
    if (((e = e.options), a)) {
      a = {};
      for (var l = 0; l < i.length; l++) a["$" + i[l]] = !0;
      for (i = 0; i < e.length; i++)
        ((l = a.hasOwnProperty("$" + e[i].value)),
          e[i].selected !== l && (e[i].selected = l),
          l && n && (e[i].defaultSelected = !0));
    } else {
      for (i = "" + ca(i), a = null, l = 0; l < e.length; l++) {
        if (e[l].value === i) {
          ((e[l].selected = !0), n && (e[l].defaultSelected = !0));
          return;
        }
        a !== null || e[l].disabled || (a = e[l]);
      }
      a !== null && (a.selected = !0);
    }
  }
  function Jd(e, a, i) {
    if (
      a != null &&
      ((a = "" + ca(a)), a !== e.value && (e.value = a), i == null)
    ) {
      e.defaultValue !== a && (e.defaultValue = a);
      return;
    }
    e.defaultValue = i != null ? "" + ca(i) : "";
  }
  function Wd(e, a, i, n) {
    if (a == null) {
      if (n != null) {
        if (i != null) throw Error(h(92));
        if (le(n)) {
          if (1 < n.length) throw Error(h(93));
          n = n[0];
        }
        i = n;
      }
      (i == null && (i = ""), (a = i));
    }
    ((i = ca(a)),
      (e.defaultValue = i),
      (n = e.textContent),
      n === i && n !== "" && n !== null && (e.value = n),
      Zr(e));
  }
  function En(e, a) {
    if (a) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = a;
        return;
      }
    }
    e.textContent = a;
  }
  var qm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function eo(e, a, i) {
    var n = a.indexOf("--") === 0;
    i == null || typeof i == "boolean" || i === ""
      ? n
        ? e.setProperty(a, "")
        : a === "float"
          ? (e.cssFloat = "")
          : (e[a] = "")
      : n
        ? e.setProperty(a, i)
        : typeof i != "number" || i === 0 || qm.has(a)
          ? a === "float"
            ? (e.cssFloat = i)
            : (e[a] = ("" + i).trim())
          : (e[a] = i + "px");
  }
  function ao(e, a, i) {
    if (a != null && typeof a != "object") throw Error(h(62));
    if (((e = e.style), i != null)) {
      for (var n in i)
        !i.hasOwnProperty(n) ||
          (a != null && a.hasOwnProperty(n)) ||
          (n.indexOf("--") === 0
            ? e.setProperty(n, "")
            : n === "float"
              ? (e.cssFloat = "")
              : (e[n] = ""),
          (ae = !0));
      for (var l in a)
        ((n = a[l]),
          a.hasOwnProperty(l) && i[l] !== n && (eo(e, l, n), (ae = !0)));
    } else for (var t in a) a.hasOwnProperty(t) && eo(e, t, a[t]);
  }
  function es(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Lm = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["maskType", "mask-type"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Mm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function zt(e) {
    return Mm.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Va() {}
  var as = null;
  function is(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Hn = null,
    Tn = null;
  function io(e) {
    var a = Bn(e);
    if (a && (e = a.stateNode)) {
      var i = e[ea] || null;
      e: switch (((e = a.stateNode), a.type)) {
        case "input":
          if (
            (Jr(
              e,
              i.value,
              i.defaultValue,
              i.defaultValue,
              i.checked,
              i.defaultChecked,
              i.type,
              i.name,
            ),
            (a = i.name),
            i.type === "radio" && a != null)
          ) {
            for (i = e; i.parentNode;) i = i.parentNode;
            for (
              i = i.querySelectorAll(
                'input[name="' + Ca("" + a) + '"][type="radio"]',
              ),
                a = 0;
              a < i.length;
              a++
            ) {
              var n = i[a];
              if (n !== e && n.form === e.form) {
                var l = n[ea] || null;
                if (!l) throw Error(h(90));
                Jr(
                  n,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (a = 0; a < i.length; a++)
              ((n = i[a]), n.form === e.form && Xd(n));
          }
          break e;
        case "textarea":
          Jd(e, i.value, i.defaultValue);
          break e;
        case "select":
          ((a = i.value), a != null && wn(e, !!i.multiple, a, !1));
      }
    }
  }
  var ns = !1;
  function no(e, a, i) {
    if (ns) return e(a, i);
    ns = !0;
    try {
      var n = e(a);
      return n;
    } finally {
      if (
        ((ns = !1),
        (Hn !== null || Tn !== null) &&
          (zr(), Hn && ((a = Hn), (e = Tn), (Tn = Hn = null), io(a), e)))
      )
        for (a = 0; a < e.length; a++) io(e[a]);
    }
  }
  function fl(e, a) {
    var i = e.stateNode;
    if (i === null) return null;
    var n = i[ea] || null;
    if (n === null) return null;
    i = n[a];
    e: switch (a) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((n = !n.disabled) ||
          ((e = e.type),
          (n = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !n));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(h(231, a, typeof i));
    return i;
  }
  var ti = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ls = !1;
  if (ti)
    try {
      var gl = {};
      (Object.defineProperty(gl, "passive", {
        get: function () {
          ls = !0;
        },
      }),
        window.addEventListener("test", gl, gl),
        window.removeEventListener("test", gl, gl));
    } catch {
      ls = !1;
    }
  var Ai = null,
    ts = null,
    At = null;
  function lo() {
    if (At) return At;
    var e,
      a = ts,
      i = a.length,
      n,
      l = "value" in Ai ? Ai.value : Ai.textContent,
      t = l.length;
    for (e = 0; e < i && a[e] === l[e]; e++);
    var r = i - e;
    for (n = 1; n <= r && a[i - n] === l[t - n]; n++);
    return (At = l.slice(e, 1 < n ? 1 - n : void 0));
  }
  function Ct(e) {
    var a = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && a === 13 && (e = 13))
        : (e = a),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Bt() {
    return !0;
  }
  function to() {
    return !1;
  }
  function Qe(e) {
    function a(i, n, l, t, r) {
      ((this._reactName = i),
        (this._targetInst = l),
        (this.type = n),
        (this.nativeEvent = t),
        (this.target = r),
        (this.currentTarget = null));
      for (var s in e)
        e.hasOwnProperty(s) && ((i = e[s]), (this[s] = i ? i(t) : t[s]));
      return (
        (this.isDefaultPrevented = (
          t.defaultPrevented != null ? t.defaultPrevented : t.returnValue === !1
        )
          ? Bt
          : to),
        (this.isPropagationStopped = to),
        this
      );
    }
    return (
      $(a.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var i = this.nativeEvent;
          i &&
            (i.preventDefault
              ? i.preventDefault()
              : typeof i.returnValue != "unknown" && (i.returnValue = !1),
            (this.isDefaultPrevented = Bt));
        },
        stopPropagation: function () {
          var i = this.nativeEvent;
          i &&
            (i.stopPropagation
              ? i.stopPropagation()
              : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0),
            (this.isPropagationStopped = Bt));
        },
        persist: function () {},
        isPersistent: Bt,
      }),
      a
    );
  }
  var Ci = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    St = Qe(Ci),
    zl = $({}, Ci, {
      view: 0,
      detail: 0,
    }),
    Um = Qe(zl),
    rs,
    ss,
    Al,
    Ot = $({}, zl, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ds,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Al &&
              (Al && e.type === "mousemove"
                ? ((rs = e.screenX - Al.screenX), (ss = e.screenY - Al.screenY))
                : (ss = rs = 0),
              (Al = e)),
            rs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ss;
      },
    }),
    ro = Qe(Ot),
    Fm = $({}, Ot, {
      dataTransfer: 0,
    }),
    Im = Qe(Fm),
    Gm = $({}, zl, {
      relatedTarget: 0,
    }),
    bs = Qe(Gm),
    Ym = $({}, Ci, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    Vm = Qe(Ym),
    Km = $({}, Ci, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _m = Qe(Km),
    $m = $({}, Ci, {
      data: 0,
    }),
    so = Qe($m),
    jm = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Qm = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Xm = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Zm(e) {
    var a = this.nativeEvent;
    return a.getModifierState
      ? a.getModifierState(e)
      : (e = Xm[e])
        ? !!a[e]
        : !1;
  }
  function ds() {
    return Zm;
  }
  var Jm = $({}, zl, {
      key: function (e) {
        if (e.key) {
          var a = jm[e.key] || e.key;
          if (a !== "Unidentified") return a;
        }
        return e.type === "keypress"
          ? ((e = Ct(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Qm[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ds,
      charCode: function (e) {
        return e.type === "keypress" ? Ct(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Ct(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    Wm = Qe(Jm),
    ek = $({}, Ot, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    bo = Qe(ek),
    ak = $({}, Ci, {
      submitter: 0,
    }),
    ik = Qe(ak),
    nk = $({}, zl, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ds,
    }),
    lk = Qe(nk),
    tk = $({}, Ci, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0,
    }),
    rk = Qe(tk),
    sk = $({}, Ot, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    bk = Qe(sk),
    dk = $({}, Ci, {
      newState: 0,
      oldState: 0,
      source: 0,
    }),
    ok = Qe(dk),
    pk = [9, 13, 27, 32],
    os = ti && "CompositionEvent" in window,
    Cl = null;
  ti && "documentMode" in document && (Cl = document.documentMode);
  var ck = ti && "TextEvent" in window && !Cl,
    oo = ti && (!os || (Cl && 8 < Cl && 11 >= Cl)),
    po = " ",
    co = !1;
  function uo(e, a) {
    switch (e) {
      case "keyup":
        return pk.indexOf(a.keyCode) !== -1;
      case "keydown":
        return a.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mo(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Dn = !1;
  function uk(e, a) {
    switch (e) {
      case "compositionend":
        return mo(a);
      case "keypress":
        return a.which !== 32 ? null : ((co = !0), po);
      case "textInput":
        return ((e = a.data), e === po && co ? null : e);
      default:
        return null;
    }
  }
  function mk(e, a) {
    if (Dn)
      return e === "compositionend" || (!os && uo(e, a))
        ? ((e = lo()), (At = ts = Ai = null), (Dn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || (a.ctrlKey && a.altKey)) {
          if (a.char && 1 < a.char.length) return a.char;
          if (a.which) return String.fromCharCode(a.which);
        }
        return null;
      case "compositionend":
        return oo && a.locale !== "ko" ? null : a.data;
      default:
        return null;
    }
  }
  var kk = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function ko(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return a === "input" ? !!kk[e.type] : a === "textarea";
  }
  function ho(e, a, i, n) {
    (Hn ? (Tn ? Tn.push(n) : (Tn = [n])) : (Hn = n),
      (a = wr(a, "onChange")),
      0 < a.length &&
        ((i = new St("onChange", "change", null, i, n)),
        e.push({
          event: i,
          listeners: a,
        })));
  }
  var Bl = null,
    Sl = null;
  function hk(e) {
    nu(e, 0);
  }
  function wt(e) {
    var a = yl(e);
    if (Xd(a)) return e;
  }
  function vo(e, a) {
    if (e === "change") return a;
  }
  var yo = !1;
  if (ti) {
    var ps;
    if (ti) {
      var cs = "oninput" in document;
      if (!cs) {
        var fo = document.createElement("div");
        (fo.setAttribute("oninput", "return;"),
          (cs = typeof fo.oninput == "function"));
      }
      ps = cs;
    } else ps = !1;
    yo = ps && (!document.documentMode || 9 < document.documentMode);
  }
  function go() {
    Bl && (Bl.detachEvent("onpropertychange", zo), (Sl = Bl = null));
  }
  function zo(e) {
    if (e.propertyName === "value" && wt(Sl)) {
      var a = [];
      (ho(a, Sl, e, is(e)), no(hk, a));
    }
  }
  function vk(e, a, i) {
    e === "focusin"
      ? (go(), (Bl = a), (Sl = i), Bl.attachEvent("onpropertychange", zo))
      : e === "focusout" && go();
  }
  function yk(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return wt(Sl);
  }
  function fk(e, a) {
    if (e === "click") return wt(a);
  }
  function gk(e, a) {
    if (e === "input" || e === "change") return wt(a);
  }
  function zk(e, a) {
    return (e === a && (e !== 0 || 1 / e === 1 / a)) || (e !== e && a !== a);
  }
  var ua = typeof Object.is == "function" ? Object.is : zk;
  function Ol(e, a) {
    if (ua(e, a)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof a != "object" ||
      a === null
    )
      return !1;
    var i = Object.keys(e),
      n = Object.keys(a);
    if (i.length !== n.length) return !1;
    for (n = 0; n < i.length; n++) {
      var l = i[n];
      if (!Kr.call(a, l) || !ua(e[l], a[l])) return !1;
    }
    return !0;
  }
  function us(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ao(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e;
  }
  function Co(e, a) {
    var i = Ao(e);
    e = 0;
    for (var n; i;) {
      if (i.nodeType === 3) {
        if (((n = e + i.textContent.length), e <= a && n >= a))
          return {
            node: i,
            offset: a - e,
          };
        e = n;
      }
      e: {
        for (; i;) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Ao(i);
    }
  }
  function Bo(e, a) {
    return e && a
      ? e === a
        ? !0
        : e && e.nodeType === 3
          ? !1
          : a && a.nodeType === 3
            ? Bo(e, a.parentNode)
            : "contains" in e
              ? e.contains(a)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(a) & 16)
                : !1
      : !1;
  }
  function So(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var a = us(e.document); a instanceof e.HTMLIFrameElement;) {
      try {
        var i = typeof a.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = a.contentWindow;
      else break;
      a = us(e.document);
    }
    return a;
  }
  function ms(e) {
    var a = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      a &&
      ((a === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        a === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var Ak = ti && "documentMode" in document && 11 >= document.documentMode,
    Nn = null,
    ks = null,
    wl = null,
    hs = !1;
  function Oo(e, a, i) {
    var n =
      i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    hs ||
      Nn == null ||
      Nn !== us(n) ||
      ((n = Nn),
      "selectionStart" in n && ms(n)
        ? (n = {
            start: n.selectionStart,
            end: n.selectionEnd,
          })
        : ((n = (
            (n.ownerDocument && n.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (n = {
            anchorNode: n.anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset,
          })),
      (wl && Ol(wl, n)) ||
        ((wl = n),
        (n = wr(ks, "onSelect")),
        0 < n.length &&
          ((a = new St("onSelect", "select", null, a, i)),
          e.push({
            event: a,
            listeners: n,
          }),
          (a.target = Nn))));
  }
  function en(e, a) {
    var i = {};
    return (
      (i[e.toLowerCase()] = a.toLowerCase()),
      (i["Webkit" + e] = "webkit" + a),
      (i["Moz" + e] = "moz" + a),
      i
    );
  }
  var xn = {
      animationend: en("Animation", "AnimationEnd"),
      animationiteration: en("Animation", "AnimationIteration"),
      animationstart: en("Animation", "AnimationStart"),
      transitionrun: en("Transition", "TransitionRun"),
      transitionstart: en("Transition", "TransitionStart"),
      transitioncancel: en("Transition", "TransitionCancel"),
      transitionend: en("Transition", "TransitionEnd"),
    },
    vs = {},
    wo = {};
  ti &&
    ((wo = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete xn.animationend.animation,
      delete xn.animationiteration.animation,
      delete xn.animationstart.animation),
    "TransitionEvent" in window || delete xn.transitionend.transition);
  function an(e) {
    if (vs[e]) return vs[e];
    if (!xn[e]) return e;
    var a = xn[e],
      i;
    for (i in a) if (a.hasOwnProperty(i) && i in wo) return (vs[e] = a[i]);
    return e;
  }
  var Eo = an("animationend"),
    Ho = an("animationiteration"),
    To = an("animationstart"),
    Ck = an("transitionrun"),
    Bk = an("transitionstart"),
    Sk = an("transitioncancel"),
    Do = an("transitionend"),
    No = new Map(),
    ys =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ys.push("scrollEnd");
  function xa(e, a) {
    (No.set(e, a), Wi(a, [e]));
  }
  var Ok = 0;
  function ri(e, a) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (a.autoName !== null) return a.autoName;
    e = La.identifierPrefix;
    var i = Ok++;
    return ((e = "_" + e + "t_" + i.toString(32) + "_"), (a.autoName = e));
  }
  function xo(e) {
    if (e == null || typeof e == "string") return e;
    var a = null,
      i = Wn;
    if (i !== null)
      for (var n = 0; n < i.length; n++) {
        var l = e[i[n]];
        if (l != null) {
          if (l === "none") return "none";
          a = a == null ? l : a + (" " + l);
        }
      }
    return a ?? e.default;
  }
  function si(e, a) {
    return (
      (e = xo(e)),
      (a = xo(a)),
      a == null ? (e === "auto" ? null : e) : a === "auto" ? null : a
    );
  }
  var Et =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var a = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(a)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Ba = [],
    Rn = 0,
    fs = 0;
  function Ht() {
    for (var e = Rn, a = (fs = Rn = 0); a < e;) {
      var i = Ba[a];
      Ba[a++] = null;
      var n = Ba[a];
      Ba[a++] = null;
      var l = Ba[a];
      Ba[a++] = null;
      var t = Ba[a];
      if (((Ba[a++] = null), n !== null && l !== null)) {
        var r = n.pending;
        (r === null ? (l.next = l) : ((l.next = r.next), (r.next = l)),
          (n.pending = l));
      }
      t !== 0 && Ro(i, l, t);
    }
  }
  function Tt(e, a, i, n) {
    ((Ba[Rn++] = e),
      (Ba[Rn++] = a),
      (Ba[Rn++] = i),
      (Ba[Rn++] = n),
      (fs |= n),
      (e.lanes |= n),
      (e = e.alternate),
      e !== null && (e.lanes |= n));
  }
  function gs(e, a, i, n) {
    return (Tt(e, a, i, n), Dt(e));
  }
  function nn(e, a) {
    return (Tt(e, null, null, a), Dt(e));
  }
  function Ro(e, a, i) {
    e.lanes |= i;
    var n = e.alternate;
    n !== null && (n.lanes |= i);
    for (var l = !1, t = e.return; t !== null;)
      ((t.childLanes |= i),
        (n = t.alternate),
        n !== null && (n.childLanes |= i),
        t.tag === 22 &&
          ((e = t.stateNode), e === null || e._visibility & 1 || (l = !0)),
        (e = t),
        (t = t.return));
    return e.tag === 3
      ? ((t = e.stateNode),
        l &&
          a !== null &&
          ((l = 31 - pa(i)),
          (e = t.hiddenUpdates),
          (n = e[l]),
          n === null ? (e[l] = [a]) : n.push(a),
          (a.lane = i | 536870912)),
        t)
      : null;
  }
  function Dt(e) {
    if (50 < Ql) throw ((Ql = 0), (gr = null), Error(h(185)));
    for (var a = e.return; a !== null;) ((e = a), (a = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Pn = {};
  function wk(e, a, i, n) {
    ((this.tag = e),
      (this.key = i),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = a),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function aa(e, a, i, n) {
    return new wk(e, a, i, n);
  }
  function zs(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function bi(e, a) {
    var i = e.alternate;
    return (
      i === null
        ? ((i = aa(e.tag, a, e.key, e.mode)),
          (i.elementType = e.elementType),
          (i.type = e.type),
          (i.stateNode = e.stateNode),
          (i.alternate = e),
          (e.alternate = i))
        : ((i.pendingProps = a),
          (i.type = e.type),
          (i.flags = 0),
          (i.subtreeFlags = 0),
          (i.deletions = null)),
      (i.flags = e.flags & 1206910976),
      (i.childLanes = e.childLanes),
      (i.lanes = e.lanes),
      (i.child = e.child),
      (i.memoizedProps = e.memoizedProps),
      (i.memoizedState = e.memoizedState),
      (i.updateQueue = e.updateQueue),
      (a = e.dependencies),
      (i.dependencies =
        a === null
          ? null
          : {
              lanes: a.lanes,
              firstContext: a.firstContext,
            }),
      (i.sibling = e.sibling),
      (i.index = e.index),
      (i.ref = e.ref),
      (i.refCleanup = e.refCleanup),
      i
    );
  }
  function Po(e, a) {
    e.flags &= 1206910978;
    var i = e.alternate;
    return (
      i === null
        ? ((e.childLanes = 0),
          (e.lanes = a),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = i.childLanes),
          (e.lanes = i.lanes),
          (e.child = i.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = i.memoizedProps),
          (e.memoizedState = i.memoizedState),
          (e.updateQueue = i.updateQueue),
          (e.type = i.type),
          (a = i.dependencies),
          (e.dependencies =
            a === null
              ? null
              : {
                  lanes: a.lanes,
                  firstContext: a.firstContext,
                })),
      e
    );
  }
  function Nt(e, a, i, n, l, t) {
    var r = 0;
    if (((n = e), typeof n == "function")) zs(n) && (r = 1);
    else if (typeof n == "string")
      r = av(e, i, Ya.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (n) {
        case Na:
          return (
            (e = aa(31, i, a, l)),
            (e.elementType = Na),
            (e.lanes = t),
            e
          );
        case Aa:
          return ln(i.children, l, t, a);
        case ba:
          ((r = 8), (l |= 24));
          break;
        case yi:
          return (
            (e = aa(12, i, a, l | 2)),
            (e.elementType = yi),
            (e.lanes = t),
            e
          );
        case q:
          return ((e = aa(13, i, a, l)), (e.elementType = q), (e.lanes = t), e);
        case M:
          return ((e = aa(19, i, a, l)), (e.elementType = M), (e.lanes = t), e);
        case ai:
        case o:
          return (
            (e = l | 32),
            (e = aa(30, i, a, e)),
            (e.elementType = o),
            (e.lanes = t),
            (e.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
            e
          );
        default:
          if (typeof n == "object" && n !== null)
            switch (n.$$typeof) {
              case Re:
                r = 10;
                break e;
              case Qi:
                r = 9;
                break e;
              case B:
                r = 11;
                break e;
              case ue:
                r = 14;
                break e;
              case re:
                ((r = 16), (n = null));
                break e;
            }
          ((r = 29),
            (i = Error(h(130, e === null ? "null" : typeof e, ""))),
            (n = null));
      }
    return (
      (a = aa(r, i, a, l)),
      (a.elementType = e),
      (a.type = n),
      (a.lanes = t),
      a
    );
  }
  function ln(e, a, i, n) {
    return ((e = aa(7, e, n, a)), (e.lanes = i), e);
  }
  function As(e, a, i) {
    return ((e = aa(6, e, null, a)), (e.lanes = i), e);
  }
  function qo(e) {
    var a = aa(18, null, null, 0);
    return ((a.stateNode = e), a);
  }
  function Cs(e, a, i) {
    return (
      (a = aa(4, e.children !== null ? e.children : [], e.key, a)),
      (a.lanes = i),
      (a.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      a
    );
  }
  var Lo = new WeakMap();
  function Sa(e, a) {
    if (typeof e == "object" && e !== null) {
      var i = Lo.get(e);
      return i !== void 0
        ? i
        : ((a = {
            value: e,
            source: a,
            stack: Td(a),
          }),
          Lo.set(e, a),
          a);
    }
    return {
      value: e,
      source: a,
      stack: Td(a),
    };
  }
  var qn = [],
    Ln = 0,
    xt = null,
    El = 0,
    Oa = [],
    wa = 0,
    Bi = null,
    Ka = 1,
    _a = "";
  function di(e, a) {
    ((qn[Ln++] = El), (qn[Ln++] = xt), (xt = e), (El = a));
  }
  function Mo(e, a, i) {
    ((Oa[wa++] = Ka), (Oa[wa++] = _a), (Oa[wa++] = Bi), (Bi = e));
    var n = Ka;
    e = _a;
    var l = 32 - pa(n) - 1;
    ((n &= ~(1 << l)), (i += 1));
    var t = 32 - pa(a) + l;
    if (30 < t) {
      var r = l - (l % 5);
      ((t = (n & ((1 << r) - 1)).toString(32)),
        (n >>= r),
        (l -= r),
        (Ka = (1 << (32 - pa(a) + l)) | (i << l) | n),
        (_a = t + e));
    } else ((Ka = (1 << t) | (i << l) | n), (_a = e));
  }
  function Rt(e) {
    e.return !== null && (di(e, 1), Mo(e, 1, 0));
  }
  function Bs(e) {
    for (; e === xt;)
      ((xt = qn[--Ln]), (qn[Ln] = null), (El = qn[--Ln]), (qn[Ln] = null));
    for (; e === Bi;)
      ((Bi = Oa[--wa]),
        (Oa[wa] = null),
        (_a = Oa[--wa]),
        (Oa[wa] = null),
        (Ka = Oa[--wa]),
        (Oa[wa] = null));
  }
  function Uo(e, a) {
    ((Oa[wa++] = Ka),
      (Oa[wa++] = _a),
      (Oa[wa++] = Bi),
      (Ka = a.id),
      (_a = a.overflow),
      (Bi = e));
  }
  var qe = null,
    ye = null,
    K = !1,
    Si = null,
    Ea = !1,
    Ss = Error(h(519));
  function Oi(e) {
    var a = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Hl(Sa(a, e)), Ss);
  }
  function Fo(e) {
    var a = e.stateNode,
      i = e.type,
      n = e.memoizedProps;
    switch (((a[Fe] = e), (a[ea] = n), i)) {
      case "dialog":
        (Q("cancel", a), Q("close", a));
        break;
      case "iframe":
      case "object":
      case "embed":
        Q("load", a);
        break;
      case "video":
      case "audio":
        for (i = 0; i < Zl.length; i++) Q(Zl[i], a);
        break;
      case "source":
        Q("error", a);
        break;
      case "img":
      case "image":
      case "link":
        (Q("error", a), Q("load", a));
        break;
      case "details":
        Q("toggle", a);
        break;
      case "input":
        (Q("invalid", a),
          Zd(
            a,
            n.value,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name,
            !0,
          ));
        break;
      case "select":
        Q("invalid", a);
        break;
      case "textarea":
        (Q("invalid", a), Wd(a, n.value, n.defaultValue, n.children));
    }
    ((i = n.children),
      (typeof i != "string" && typeof i != "number" && typeof i != "bigint") ||
      a.textContent === "" + i ||
      n.suppressHydrationWarning === !0 ||
      su(a.textContent, i)
        ? (n.popover != null && (Q("beforetoggle", a), Q("toggle", a)),
          n.onScroll != null && Q("scroll", a),
          n.onScrollEnd != null && Q("scrollend", a),
          n.onClick != null && (a.onclick = Va),
          (a = !0))
        : (a = !1),
      a || Oi(e, !0));
  }
  function Pt(e) {
    for (qe = e.return; qe;)
      switch (qe.tag) {
        case 5:
        case 31:
        case 13:
          Ea = !1;
          return;
        case 27:
        case 3:
          Ea = !0;
          return;
        default:
          qe = qe.return;
      }
  }
  function Mn(e) {
    if (e !== qe) return !1;
    if (!K) return (Pt(e), (K = !0), !1);
    var a = e.tag,
      i;
    if (
      ((i = a !== 3 && a !== 27) &&
        ((i = a === 5) &&
          ((i = e.type),
          (i =
            !(i !== "form" && i !== "button") || ad(e.type, e.memoizedProps))),
        (i = !i)),
      i && ye && Oi(e),
      Pt(e),
      a === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      ye = Ou(e);
    } else if (a === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(h(317));
      ye = Ou(e);
    } else
      a === 27
        ? ((a = ye), Gi(e.type) ? ((e = od), (od = null), (ye = e)) : (ye = a))
        : (ye = qe ? Ta(e.stateNode.nextSibling) : null);
    return !0;
  }
  function tn() {
    ((ye = qe = null), (K = !1));
  }
  function Os() {
    var e = Si;
    return (
      e !== null &&
        (la === null ? (la = e) : la.push.apply(la, e), (Si = null)),
      e
    );
  }
  function Hl(e) {
    Si === null ? (Si = [e]) : Si.push(e);
  }
  var ws = Ga(null),
    rn = null,
    oi = null;
  function wi(e, a, i) {
    (ve(ws, a._currentValue), (a._currentValue = i));
  }
  function pi(e) {
    ((e._currentValue = ws.current), Ue(ws));
  }
  function qt(e, a, i) {
    for (; e !== null;) {
      var n = e.alternate;
      if (
        ((e.childLanes & a) !== a
          ? ((e.childLanes |= a), n !== null && (n.childLanes |= a))
          : n !== null && (n.childLanes & a) !== a && (n.childLanes |= a),
        e === i)
      )
        break;
      e = e.return;
    }
  }
  function Es(e, a, i, n) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null;) {
      var t = l.dependencies;
      if (t !== null) {
        var r = l.child;
        t = t.firstContext;
        e: for (; t !== null;) {
          var s = t;
          t = l;
          for (var b = 0; b < a.length; b++)
            if (s.context === a[b]) {
              ((t.lanes |= i),
                (s = t.alternate),
                s !== null && (s.lanes |= i),
                qt(t.return, i, e),
                n || (r = null));
              break e;
            }
          t = s.next;
        }
      } else if (l.tag === 18) {
        if (((r = l.return), r === null)) throw Error(h(341));
        ((r.lanes |= i),
          (t = r.alternate),
          t !== null && (t.lanes |= i),
          qt(r, i, e),
          (r = null));
      } else
        l.tag === 13 &&
        l.memoizedState !== null &&
        l.memoizedState.dehydrated === null
          ? ((l.lanes |= i),
            (r = l.alternate),
            r !== null && (r.lanes |= i),
            qt(l.return, i, e),
            (r = l.child),
            (r = r !== null ? r.sibling : null))
          : (r = l.child);
      if (r !== null) r.return = l;
      else
        for (r = l; r !== null;) {
          if (r === e) {
            r = null;
            break;
          }
          if (((l = r.sibling), l !== null)) {
            ((l.return = r.return), (r = l));
            break;
          }
          r = r.return;
        }
      l = r;
    }
  }
  function sn(e, a, i, n) {
    e = null;
    for (var l = a, t = !1; l !== null;) {
      if (!t) {
        if ((l.flags & 524288) !== 0) t = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var r = l.alternate;
        if (r === null) throw Error(h(387));
        if (((r = r.memoizedProps), r !== null)) {
          var s = l.type;
          ua(l.pendingProps.value, r.value) ||
            (e !== null ? e.push(s) : (e = [s]));
        }
      } else if (l === dt.current) {
        if (((r = l.alternate), r === null)) throw Error(h(387));
        r.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (e !== null ? e.push(dl) : (e = [dl]));
      }
      l = l.return;
    }
    return (e !== null && Es(a, e, i, n), (a.flags |= 262144), e !== null);
  }
  function Lt(e) {
    for (e = e.firstContext; e !== null;) {
      if (!ua(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function bn(e) {
    ((rn = e),
      (oi = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function Ie(e) {
    return Io(rn, e);
  }
  function Mt(e, a) {
    return (rn === null && bn(e), Io(e, a));
  }
  function Io(e, a) {
    var i = a._currentValue;
    if (
      ((a = {
        context: a,
        memoizedValue: i,
        next: null,
      }),
      oi === null)
    ) {
      if (e === null) throw Error(h(308));
      ((oi = a),
        (e.dependencies = {
          lanes: 0,
          firstContext: a,
        }),
        (e.flags |= 524288));
    } else oi = oi.next = a;
    return i;
  }
  var Ek =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              a = (this.signal = {
                aborted: !1,
                addEventListener: function (i, n) {
                  e.push(n);
                },
              });
            this.abort = function () {
              ((a.aborted = !0),
                e.forEach(function (i) {
                  return i();
                }));
            };
          },
    Hk = f.unstable_scheduleCallback,
    Tk = f.unstable_NormalPriority,
    He = {
      $$typeof: Re,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Hs() {
    return {
      controller: new Ek(),
      data: new Map(),
      refCount: 0,
    };
  }
  function Tl(e) {
    (e.refCount--,
      e.refCount === 0 &&
        Hk(Tk, function () {
          e.controller.abort();
        }));
  }
  function Go(e, a) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var i = e.transitionTypes;
      for (
        i === null && (i = e.transitionTypes = []), e = 0;
        e < a.length;
        e++
      ) {
        var n = a[e];
        i.indexOf(n) === -1 && i.push(n);
      }
    }
  }
  var Dl = null;
  function Dk(e) {
    var a = e.transitionTypes;
    return ((e.transitionTypes = null), a);
  }
  var Nl = null,
    Ts = 0,
    dn = 0,
    Un = null;
  function Nk(e, a) {
    if (Nl === null) {
      var i = (Nl = []);
      ((Ts = 0),
        (dn = _b()),
        (Un = {
          status: "pending",
          value: void 0,
          then: function (n) {
            i.push(n);
          },
        }));
    }
    return (Ts++, a.then(Yo, Yo), a);
  }
  function Yo() {
    if (--Ts === 0 && ((Dl = null), Nl !== null)) {
      Un !== null && (Un.status = "fulfilled");
      var e = Nl;
      ((Nl = null), (dn = 0), (Un = null));
      for (var a = 0; a < e.length; a++) (0, e[a])();
    }
  }
  function xk(e, a) {
    var i = [],
      n = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          i.push(l);
        },
      };
    return (
      e.then(
        function () {
          ((n.status = "fulfilled"), (n.value = a));
          for (var l = 0; l < i.length; l++) (0, i[l])(a);
        },
        function (l) {
          for (n.status = "rejected", n.reason = l, l = 0; l < i.length; l++)
            (0, i[l])(void 0);
        },
      ),
      n
    );
  }
  var Vo = H.S;
  H.S = function (e, a) {
    if (
      ((qc = da()),
      typeof a == "object" &&
        a !== null &&
        typeof a.then == "function" &&
        Nk(e, a),
      Dl !== null)
    )
      for (var i = nl; i !== null;) (Go(i, Dl), (i = i.next));
    if (((i = e.types), i !== null)) {
      for (var n = nl; n !== null;) (Go(n, i), (n = n.next));
      if (dn !== 0) {
        ((n = Dl), n === null && (n = Dl = []));
        for (var l = 0; l < i.length; l++) {
          var t = i[l];
          n.indexOf(t) === -1 && n.push(t);
        }
      }
    }
    Vo !== null && Vo(e, a);
  };
  var on = Ga(null);
  function Ds() {
    var e = on.current;
    return e !== null ? e : me.pooledCache;
  }
  function Ut(e, a) {
    a === null ? ve(on, on.current) : ve(on, a.pool);
  }
  function Ko() {
    var e = Ds();
    return e === null
      ? null
      : {
          parent: He._currentValue,
          pool: e,
        };
  }
  var Fn = Error(h(460)),
    Ns = Error(h(474)),
    Ft = Error(h(542)),
    It = {
      then: function () {},
    };
  function _o(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function $o(e, a, i) {
    switch (
      ((i = e[i]),
      i === void 0 ? e.push(a) : i !== a && (a.then(Va, Va), (a = i)),
      a.status)
    ) {
      case "fulfilled":
        return a.value;
      case "rejected":
        throw (
          (e = a.reason),
          Qo(e),
          e === void 0 && !("reason" in a) ? Error(h(600)) : e
        );
      default:
        if (typeof a.status == "string") a.then(Va, Va);
        else {
          if (((e = me), e !== null && 100 < e.shellSuspendCounter))
            throw Error(h(482));
          ((e = a),
            (e.status = "pending"),
            e.then(
              function (n) {
                if (a.status === "pending") {
                  var l = a;
                  ((l.status = "fulfilled"), (l.value = n));
                }
              },
              function (n) {
                if (a.status === "pending") {
                  var l = a;
                  ((l.status = "rejected"), (l.reason = n));
                }
              },
            ));
        }
        switch (a.status) {
          case "fulfilled":
            return a.value;
          case "rejected":
            throw ((e = a.reason), Qo(e), e);
        }
        throw ((cn = a), Fn);
    }
  }
  function pn(e) {
    try {
      var a = e._init;
      return a(e._payload);
    } catch (i) {
      throw i !== null && typeof i == "object" && typeof i.then == "function"
        ? ((cn = i), Fn)
        : i;
    }
  }
  var cn = null;
  function jo() {
    if (cn === null) throw Error(h(459));
    var e = cn;
    return ((cn = null), e);
  }
  function Qo(e) {
    if (e === Fn || e === Ft) throw Error(h(483));
  }
  var In = null,
    xl = 0;
  function Gt(e) {
    var a = xl;
    return ((xl += 1), In === null && (In = []), $o(In, e, a));
  }
  function Ei(e, a) {
    ((a = a.props.ref), (e.ref = a !== void 0 ? a : null));
  }
  function Yt(e, a) {
    throw a.$$typeof === ne
      ? Error(h(525))
      : ((e = Object.prototype.toString.call(a)),
        Error(
          h(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(a).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Xo(e) {
    function a(c, d) {
      if (e) {
        var m = c.deletions;
        m === null ? ((c.deletions = [d]), (c.flags |= 16)) : m.push(d);
      }
    }
    function i(c, d) {
      if (!e) return null;
      for (; d !== null;) (a(c, d), (d = d.sibling));
      return null;
    }
    function n(c) {
      for (var d = new Map(); c !== null;)
        (c.key === null ? d.set(c.index, c) : d.set(c.key, c), (c = c.sibling));
      return d;
    }
    function l(c, d) {
      return ((c = bi(c, d)), (c.index = 0), (c.sibling = null), c);
    }
    function t(c, d, m) {
      return (
        (c.index = m),
        e
          ? ((m = c.alternate),
            m !== null
              ? ((m = m.index), m < d ? ((c.flags |= 2), d) : m)
              : ((c.flags |= 134217730), d))
          : ((c.flags |= 1048576), d)
      );
    }
    function r(c) {
      return (e && c.alternate === null && (c.flags |= 134217730), c);
    }
    function s(c, d, m, g) {
      return d === null || d.tag !== 6
        ? ((d = As(m, c.mode, g)), (d.return = c), d)
        : ((d = l(d, m)), (d.return = c), d);
    }
    function b(c, d, m, g) {
      var S = m.type;
      return S === Aa
        ? ((c = v(c, d, m.props.children, g, m.key)), Ei(c, m), c)
        : d !== null &&
            (d.elementType === S ||
              (typeof S == "object" &&
                S !== null &&
                S.$$typeof === re &&
                pn(S) === d.type))
          ? ((d = l(d, m.props)), Ei(d, m), (d.return = c), d)
          : ((d = Nt(m.type, m.key, m.props, null, c.mode, g)),
            Ei(d, m),
            (d.return = c),
            d);
    }
    function u(c, d, m, g) {
      return d === null ||
        d.tag !== 4 ||
        d.stateNode.containerInfo !== m.containerInfo ||
        d.stateNode.implementation !== m.implementation
        ? ((d = Cs(m, c.mode, g)), (d.return = c), d)
        : ((d = l(d, m.children || [])), (d.return = c), d);
    }
    function v(c, d, m, g, S) {
      return d === null || d.tag !== 7
        ? ((d = ln(m, c.mode, g, S)), (d.return = c), d)
        : ((d = l(d, m)), (d.return = c), d);
    }
    function z(c, d, m) {
      if (
        (typeof d == "string" && d !== "") ||
        typeof d == "number" ||
        typeof d == "bigint"
      )
        return ((d = As("" + d, c.mode, m)), (d.return = c), d);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Ia:
            return (
              (m = Nt(d.type, d.key, d.props, null, c.mode, m)),
              Ei(m, d),
              (m.return = c),
              m
            );
          case za:
            return ((d = Cs(d, c.mode, m)), (d.return = c), d);
          case re:
            return ((d = pn(d)), z(c, d, m));
        }
        if (le(d) || x(d))
          return ((d = ln(d, c.mode, m, null)), (d.return = c), d);
        if (typeof d.then == "function") return z(c, Gt(d), m);
        if (d.$$typeof === Re) return z(c, Mt(c, d), m);
        Yt(c, d);
      }
      return null;
    }
    function p(c, d, m, g) {
      var S = d !== null ? d.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return S !== null ? null : s(c, d, "" + m, g);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Ia:
            return m.key === S ? b(c, d, m, g) : null;
          case za:
            return m.key === S ? u(c, d, m, g) : null;
          case re:
            return ((m = pn(m)), p(c, d, m, g));
        }
        if (le(m) || x(m)) return S !== null ? null : v(c, d, m, g, null);
        if (typeof m.then == "function") return p(c, d, Gt(m), g);
        if (m.$$typeof === Re) return p(c, d, Mt(c, m), g);
        Yt(c, m);
      }
      return null;
    }
    function k(c, d, m, g, S) {
      if (
        (typeof g == "string" && g !== "") ||
        typeof g == "number" ||
        typeof g == "bigint"
      )
        return ((c = c.get(m) || null), s(d, c, "" + g, S));
      if (typeof g == "object" && g !== null) {
        switch (g.$$typeof) {
          case Ia:
            return (
              (c = c.get(g.key === null ? m : g.key) || null),
              b(d, c, g, S)
            );
          case za:
            return (
              (c = c.get(g.key === null ? m : g.key) || null),
              u(d, c, g, S)
            );
          case re:
            return ((g = pn(g)), k(c, d, m, g, S));
        }
        if (le(g) || x(g)) return ((c = c.get(m) || null), v(d, c, g, S, null));
        if (typeof g.then == "function") return k(c, d, m, Gt(g), S);
        if (g.$$typeof === Re) return k(c, d, m, Mt(d, g), S);
        Yt(d, g);
      }
      return null;
    }
    function C(c, d, m, g) {
      for (
        var S = null, Z = null, D = d, P = (d = 0), Ne = null;
        D !== null && P < m.length;
        P++
      ) {
        D.index > P ? ((Ne = D), (D = null)) : (Ne = D.sibling);
        var J = p(c, D, m[P], g);
        if (J === null) {
          D === null && (D = Ne);
          break;
        }
        (e && D && J.alternate === null && a(c, D),
          (d = t(J, d, P)),
          Z === null ? (S = J) : (Z.sibling = J),
          (Z = J),
          (D = Ne));
      }
      if (P === m.length) return (i(c, D), K && di(c, P), S);
      if (D === null) {
        for (; P < m.length; P++)
          ((D = z(c, m[P], g)),
            D !== null &&
              ((d = t(D, d, P)),
              Z === null ? (S = D) : (Z.sibling = D),
              (Z = D)));
        return (K && di(c, P), S);
      }
      for (D = n(D); P < m.length; P++)
        ((Ne = k(D, c, P, m[P], g)),
          Ne !== null &&
            (e &&
              ((J = Ne.alternate),
              J !== null && D.delete(J.key === null ? P : J.key)),
            (d = t(Ne, d, P)),
            Z === null ? (S = Ne) : (Z.sibling = Ne),
            (Z = Ne)));
      return (
        e &&
          D.forEach(function ($i) {
            return a(c, $i);
          }),
        K && di(c, P),
        S
      );
    }
    function w(c, d, m, g) {
      if (m == null) throw Error(h(151));
      for (
        var S = null, Z = null, D = d, P = (d = 0), Ne = null, J = m.next();
        D !== null && !J.done;
        P++, J = m.next()
      ) {
        D.index > P ? ((Ne = D), (D = null)) : (Ne = D.sibling);
        var $i = p(c, D, J.value, g);
        if ($i === null) {
          D === null && (D = Ne);
          break;
        }
        (e && D && $i.alternate === null && a(c, D),
          (d = t($i, d, P)),
          Z === null ? (S = $i) : (Z.sibling = $i),
          (Z = $i),
          (D = Ne));
      }
      if (J.done) return (i(c, D), K && di(c, P), S);
      if (D === null) {
        for (; !J.done; P++, J = m.next())
          ((J = z(c, J.value, g)),
            J !== null &&
              ((d = t(J, d, P)),
              Z === null ? (S = J) : (Z.sibling = J),
              (Z = J)));
        return (K && di(c, P), S);
      }
      for (D = n(D); !J.done; P++, J = m.next())
        ((J = k(D, c, P, J.value, g)),
          J !== null &&
            (e &&
              ((Ne = J.alternate),
              Ne !== null && D.delete(Ne.key === null ? P : Ne.key)),
            (d = t(J, d, P)),
            Z === null ? (S = J) : (Z.sibling = J),
            (Z = J)));
      return (
        e &&
          D.forEach(function (uv) {
            return a(c, uv);
          }),
        K && di(c, P),
        S
      );
    }
    function V(c, d, m, g) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Aa &&
          m.key === null &&
          m.props.ref === void 0 &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Ia:
            e: {
              for (var S = m.key; d !== null;) {
                if (d.key === S) {
                  if (((S = m.type), S === Aa)) {
                    if (d.tag === 7) {
                      (i(c, d.sibling),
                        (g = l(d, m.props.children)),
                        Ei(g, m),
                        (g.return = c),
                        (c = g));
                      break e;
                    }
                  } else if (
                    d.elementType === S ||
                    (typeof S == "object" &&
                      S !== null &&
                      S.$$typeof === re &&
                      pn(S) === d.type)
                  ) {
                    (i(c, d.sibling),
                      (g = l(d, m.props)),
                      Ei(g, m),
                      (g.return = c),
                      (c = g));
                    break e;
                  }
                  i(c, d);
                  break;
                } else a(c, d);
                d = d.sibling;
              }
              m.type === Aa
                ? ((g = ln(m.props.children, c.mode, g, m.key)),
                  Ei(g, m),
                  (g.return = c),
                  (c = g))
                : ((g = Nt(m.type, m.key, m.props, null, c.mode, g)),
                  Ei(g, m),
                  (g.return = c),
                  (c = g));
            }
            return r(c);
          case za:
            e: {
              for (S = m.key; d !== null;) {
                if (d.key === S) {
                  if (
                    d.tag === 4 &&
                    d.stateNode.containerInfo === m.containerInfo &&
                    d.stateNode.implementation === m.implementation
                  ) {
                    (i(c, d.sibling),
                      (g = l(d, m.children || [])),
                      (g.return = c),
                      (c = g));
                    break e;
                  } else {
                    i(c, d);
                    break;
                  }
                } else a(c, d);
                d = d.sibling;
              }
              ((g = Cs(m, c.mode, g)), (g.return = c), (c = g));
            }
            return r(c);
          case re:
            return ((m = pn(m)), V(c, d, m, g));
        }
        if (le(m)) return C(c, d, m, g);
        if (x(m)) {
          if (((S = x(m)), typeof S != "function")) throw Error(h(150));
          return ((m = S.call(m)), w(c, d, m, g));
        }
        if (typeof m.then == "function") return V(c, d, Gt(m), g);
        if (m.$$typeof === Re) return V(c, d, Mt(c, m), g);
        Yt(c, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          d !== null && d.tag === 6
            ? (i(c, d.sibling), (g = l(d, m)), (g.return = c), (c = g))
            : (i(c, d), (g = As(m, c.mode, g)), (g.return = c), (c = g)),
          r(c))
        : i(c, d);
    }
    return function (c, d, m, g) {
      try {
        xl = 0;
        var S = V(c, d, m, g);
        return ((In = null), S);
      } catch (D) {
        if (D === Fn || D === Ft) throw D;
        var Z = aa(29, D, null, c.mode);
        return ((Z.lanes = g), (Z.return = c), Z);
      }
    };
  }
  var un = Xo(!0),
    Zo = Xo(!1),
    Hi = !1;
  function xs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null,
      },
      callbacks: null,
    };
  }
  function Rs(e, a) {
    ((e = e.updateQueue),
      a.updateQueue === e &&
        (a.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function Ti(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Di(e, a, i) {
    var n = e.updateQueue;
    if (n === null) return null;
    if (((n = n.shared), (te & 2) !== 0)) {
      var l = n.pending;
      return (
        l === null ? (a.next = a) : ((a.next = l.next), (l.next = a)),
        (n.pending = a),
        (a = Dt(e)),
        Ro(e, null, i),
        a
      );
    }
    return (Tt(e, n, a, i), Dt(e));
  }
  function Rl(e, a, i) {
    if (
      ((a = a.updateQueue), a !== null && ((a = a.shared), (i & 4194048) !== 0))
    ) {
      var n = a.lanes;
      ((n &= e.pendingLanes), (i |= n), (a.lanes = i), Ld(e, i));
    }
  }
  function Ps(e, a) {
    var i = e.updateQueue,
      n = e.alternate;
    if (n !== null && ((n = n.updateQueue), i === n)) {
      var l = null,
        t = null;
      if (((i = i.firstBaseUpdate), i !== null)) {
        do {
          var r = {
            lane: i.lane,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null,
          };
          (t === null ? (l = t = r) : (t = t.next = r), (i = i.next));
        } while (i !== null);
        t === null ? (l = t = a) : (t = t.next = a);
      } else l = t = a;
      ((i = {
        baseState: n.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: t,
        shared: n.shared,
        callbacks: n.callbacks,
      }),
        (e.updateQueue = i));
      return;
    }
    ((e = i.lastBaseUpdate),
      e === null ? (i.firstBaseUpdate = a) : (e.next = a),
      (i.lastBaseUpdate = a));
  }
  var qs = !1;
  function Pl() {
    if (qs) {
      var e = Un;
      if (e !== null) throw e;
    }
  }
  function ql(e, a, i, n) {
    qs = !1;
    var l = e.updateQueue;
    Hi = !1;
    var t = l.firstBaseUpdate,
      r = l.lastBaseUpdate,
      s = l.shared.pending;
    if (s !== null) {
      l.shared.pending = null;
      var b = s,
        u = b.next;
      ((b.next = null), r === null ? (t = u) : (r.next = u), (r = b));
      var v = e.alternate;
      v !== null &&
        ((v = v.updateQueue),
        (s = v.lastBaseUpdate),
        s !== r &&
          (s === null ? (v.firstBaseUpdate = u) : (s.next = u),
          (v.lastBaseUpdate = b)));
    }
    if (t !== null) {
      var z = l.baseState;
      ((r = 0), (v = u = b = null), (s = t));
      do {
        var p = s.lane & -536870913,
          k = p !== s.lane;
        if (k ? (X & p) === p : (n & p) === p) {
          (p !== 0 && p === dn && (qs = !0),
            v !== null &&
              (v = v.next =
                {
                  lane: 0,
                  tag: s.tag,
                  payload: s.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var C = e,
              w = s;
            p = a;
            var V = i;
            switch (w.tag) {
              case 1:
                if (((C = w.payload), typeof C == "function")) {
                  z = C.call(V, z, p);
                  break e;
                }
                z = C;
                break e;
              case 3:
                C.flags = (C.flags & -65537) | 128;
              case 0:
                if (
                  ((C = w.payload),
                  (p = typeof C == "function" ? C.call(V, z, p) : C),
                  p == null)
                )
                  break e;
                z = $({}, z, p);
                break e;
              case 2:
                Hi = !0;
            }
          }
          ((p = s.callback),
            p !== null &&
              ((e.flags |= 64),
              k && (e.flags |= 8192),
              (k = l.callbacks),
              k === null ? (l.callbacks = [p]) : k.push(p)));
        } else
          ((k = {
            lane: p,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            v === null ? ((u = v = k), (b = z)) : (v = v.next = k),
            (r |= p));
        if (((s = s.next), s === null)) {
          if (((s = l.shared.pending), s === null)) break;
          ((k = s),
            (s = k.next),
            (k.next = null),
            (l.lastBaseUpdate = k),
            (l.shared.pending = null));
        }
      } while (!0);
      (v === null && (b = z),
        (l.baseState = b),
        (l.firstBaseUpdate = u),
        (l.lastBaseUpdate = v),
        t === null && (l.shared.lanes = 0),
        (Mi |= r),
        (e.lanes = r),
        (e.memoizedState = z));
    }
  }
  function Jo(e, a) {
    if (typeof e != "function") throw Error(h(191, e));
    e.call(a);
  }
  function Wo(e, a) {
    var i = e.callbacks;
    if (i !== null)
      for (e.callbacks = null, e = 0; e < i.length; e++) Jo(i[e], a);
  }
  var Ni = Ga(null),
    Vt = Ga(0);
  function ep(e, a) {
    ((e = hi), ve(Vt, e), ve(Ni, a), (hi = e | a.baseLanes));
  }
  function Ls() {
    (ve(Vt, hi), ve(Ni, Ni.current));
  }
  function Ms() {
    ((hi = Vt.current), Ue(Ni), Ue(Vt));
  }
  var Ge = Ga(null),
    $e = null;
  function xi(e) {
    var a = e.alternate;
    (ve(Ye, Ye.current & 1),
      ve(Ge, e),
      $e === null &&
        (a === null || Ni.current !== null || a.memoizedState !== null) &&
        ($e = e));
  }
  function Us(e) {
    (ve(Ye, Ye.current), ve(Ge, e), $e === null && ($e = e));
  }
  function ap(e) {
    e.tag === 22
      ? (ve(Ye, Ye.current), ve(Ge, e), $e === null && ($e = e))
      : Ri();
  }
  function Ri() {
    (ve(Ye, Ye.current), ve(Ge, Ge.current));
  }
  function ma(e) {
    (Ue(Ge), $e === e && ($e = null), Ue(Ye));
  }
  var Ye = Ga(0);
  function Ll(e, a) {
    (ve(Ge, Ge.current), ve(Ye, a));
  }
  function Fs(e) {
    (Ue(Ye), Ue(Ge), $e === e && ($e = null));
  }
  function Kt(e) {
    for (var a = e; a !== null;) {
      if (a.tag === 13) {
        var i = a.memoizedState;
        if (i !== null && ((i = i.dehydrated), i === null || bd(i) || dd(i)))
          return a;
      } else if (
        a.tag === 19 &&
        a.memoizedProps.revealOrder !== "independent"
      ) {
        if ((a.flags & 128) !== 0) return a;
      } else if (a.child !== null) {
        ((a.child.return = a), (a = a.child));
        continue;
      }
      if (a === e) break;
      for (; a.sibling === null;) {
        if (a.return === null || a.return === e) return null;
        a = a.return;
      }
      ((a.sibling.return = a.return), (a = a.sibling));
    }
    return null;
  }
  var ci = 0,
    Y = null,
    ce = null,
    Te = null,
    _t = !1,
    Gn = !1,
    mn = !1,
    $t = 0,
    Ml = 0,
    Yn = null,
    Rk = 0;
  function Oe() {
    throw Error(h(321));
  }
  function Is(e, a) {
    if (a === null) return !1;
    for (var i = 0; i < a.length && i < e.length; i++)
      if (!ua(e[i], a[i])) return !1;
    return !0;
  }
  function Gs(e, a, i, n, l, t) {
    return (
      (ci = t),
      (Y = a),
      (a.memoizedState = null),
      (a.updateQueue = null),
      (a.lanes = 0),
      (H.H = e === null || e.memoizedState === null ? Mp : Up),
      (mn = !1),
      (t = i(n, l)),
      (mn = !1),
      Gn && (t = np(a, i, n, l)),
      ip(e),
      t
    );
  }
  function ip(e) {
    H.H = er;
    var a = ce !== null && ce.next !== null;
    if (((ci = 0), (Te = ce = Y = null), (_t = !1), (Ml = 0), (Yn = null), a))
      throw Error(h(300));
    e === null ||
      De ||
      ((e = e.dependencies), e !== null && Lt(e) && (De = !0));
  }
  function np(e, a, i, n) {
    Y = e;
    var l = 0;
    do {
      if ((Gn && (Yn = null), (Ml = 0), (Gn = !1), 25 <= l))
        throw Error(h(301));
      if (((l += 1), (Te = ce = null), e.updateQueue != null)) {
        var t = e.updateQueue;
        ((t.lastEffect = null),
          (t.events = null),
          (t.stores = null),
          t.memoCache != null && (t.memoCache.index = 0));
      }
      ((H.H = Gk), (t = a(i, n)));
    } while (Gn);
    return t;
  }
  function Pk() {
    var e = H.H,
      a = e.useState()[0];
    return (
      (a = typeof a.then == "function" ? Ul(a) : a),
      (e = e.useState()[0]),
      (ce !== null ? ce.memoizedState : null) !== e && (Y.flags |= 1024),
      a
    );
  }
  function Ys() {
    var e = $t !== 0;
    return (($t = 0), e);
  }
  function Vs(e, a, i) {
    ((a.updateQueue = e.updateQueue), (a.flags &= -2053), (e.lanes &= ~i));
  }
  function Ks(e) {
    if (_t) {
      for (e = e.memoizedState; e !== null;) {
        var a = e.queue;
        (a !== null && (a.pending = null), (e = e.next));
      }
      _t = !1;
    }
    ((ci = 0), (Te = ce = Y = null), (Gn = !1), (Ml = $t = 0), (Yn = null));
  }
  function Xe() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Te === null ? (Y.memoizedState = Te = e) : (Te = Te.next = e), Te);
  }
  function Ee() {
    if (ce === null) {
      var e = Y.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ce.next;
    var a = Te === null ? Y.memoizedState : Te.next;
    if (a !== null) ((Te = a), (ce = e));
    else {
      if (e === null)
        throw Y.alternate === null ? Error(h(467)) : Error(h(310));
      ((ce = e),
        (e = {
          memoizedState: ce.memoizedState,
          baseState: ce.baseState,
          baseQueue: ce.baseQueue,
          queue: ce.queue,
          next: null,
        }),
        Te === null ? (Y.memoizedState = Te = e) : (Te = Te.next = e));
    }
    return Te;
  }
  function jt() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null,
    };
  }
  function Ul(e) {
    var a = Ml;
    return (
      (Ml += 1),
      Yn === null && (Yn = []),
      (e = $o(Yn, e, a)),
      (a = Y),
      (Te === null ? a.memoizedState : Te.next) === null &&
        ((a = a.alternate),
        (H.H = a === null || a.memoizedState === null ? Mp : Up)),
      e
    );
  }
  function Qt(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ul(e);
      if (e.$$typeof === A) return;
      if (e.$$typeof === Re) return Ie(e);
    }
    throw Error(h(438, String(e)));
  }
  function _s(e) {
    var a = null,
      i = Y.updateQueue;
    if ((i !== null && (a = i.memoCache), a == null)) {
      var n = Y.alternate;
      n !== null &&
        ((n = n.updateQueue),
        n !== null &&
          ((n = n.memoCache),
          n != null &&
            (a = {
              data: n.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (a == null &&
        (a = {
          data: [],
          index: 0,
        }),
      i === null && ((i = jt()), (Y.updateQueue = i)),
      (i.memoCache = a),
      (i = a.data[a.index]),
      i === void 0)
    )
      for (i = a.data[a.index] = Array(e), n = 0; n < e; n++) i[n] = Xi;
    return (a.index++, i);
  }
  function ui(e, a) {
    return typeof a == "function" ? a(e) : a;
  }
  function Xt(e) {
    var a = Ee();
    return $s(a, ce, e);
  }
  function $s(e, a, i) {
    var n = e.queue;
    if (n === null) throw Error(h(311));
    n.lastRenderedReducer = i;
    var l = e.baseQueue,
      t = n.pending;
    if (t !== null) {
      if (l !== null) {
        var r = l.next;
        ((l.next = t.next), (t.next = r));
      }
      ((a.baseQueue = l = t), (n.pending = null));
    }
    if (((t = e.baseState), l === null)) e.memoizedState = t;
    else {
      a = l.next;
      var s = (r = null),
        b = null,
        u = a,
        v = !1;
      do {
        var z = u.lane & -536870913;
        if (z !== u.lane ? (X & z) === z : (ci & z) === z) {
          var p = u.revertLane;
          if (p === 0)
            (b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
              z === dn && (v = !0));
          else if ((ci & p) === p) {
            ((u = u.next), p === dn && (v = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: u.revertLane,
              gesture: null,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
              b === null ? ((s = b = z), (r = t)) : (b = b.next = z),
              (Y.lanes |= p),
              (Mi |= p));
          ((z = u.action),
            mn && i(t, z),
            (t = u.hasEagerState ? u.eagerState : i(t, z)));
        } else
          ((p = {
            lane: z,
            revertLane: u.revertLane,
            gesture: u.gesture,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          }),
            b === null ? ((s = b = p), (r = t)) : (b = b.next = p),
            (Y.lanes |= z),
            (Mi |= z));
        u = u.next;
      } while (u !== null && u !== a);
      if (
        (b === null ? (r = t) : (b.next = s),
        !ua(t, e.memoizedState) && ((De = !0), v && ((i = Un), i !== null)))
      )
        throw i;
      ((e.memoizedState = t),
        (e.baseState = r),
        (e.baseQueue = b),
        (n.lastRenderedState = t));
    }
    return (l === null && (n.lanes = 0), [e.memoizedState, n.dispatch]);
  }
  function js(e) {
    var a = Ee(),
      i = a.queue;
    if (i === null) throw Error(h(311));
    i.lastRenderedReducer = e;
    var n = i.dispatch,
      l = i.pending,
      t = a.memoizedState;
    if (l !== null) {
      i.pending = null;
      var r = (l = l.next);
      do ((t = e(t, r.action)), (r = r.next));
      while (r !== l);
      (ua(t, a.memoizedState) || (De = !0),
        (a.memoizedState = t),
        a.baseQueue === null && (a.baseState = t),
        (i.lastRenderedState = t));
    }
    return [t, n];
  }
  function lp(e, a, i) {
    var n = Y,
      l = Ee(),
      t = K;
    if (t) {
      if (i === void 0) throw Error(h(407));
      i = i();
    } else i = a();
    var r = !ua((ce || l).memoizedState, i);
    if (
      (r && ((l.memoizedState = i), (De = !0)),
      (l = l.queue),
      Zs(sp.bind(null, n, l, e), [e]),
      (e =
        l.getSnapshot !== a ||
        r ||
        (Te !== null && (Te.memoizedState.tag & 1) !== 0)),
      Vn(
        e ? 9 : 8,
        {
          destroy: void 0,
        },
        rp.bind(null, n, l, i, a),
        null,
      ),
      e)
    ) {
      if (((n.flags |= 2048), me === null)) throw Error(h(349));
      t || (ci & 127) !== 0 || tp(n, a, i);
    }
    return i;
  }
  function tp(e, a, i) {
    ((e.flags |= 16384),
      (e = {
        getSnapshot: a,
        value: i,
      }),
      (a = Y.updateQueue),
      a === null
        ? ((a = jt()), (Y.updateQueue = a), (a.stores = [e]))
        : ((i = a.stores), i === null ? (a.stores = [e]) : i.push(e)));
  }
  function rp(e, a, i, n) {
    ((a.value = i), (a.getSnapshot = n), bp(a) && dp(e));
  }
  function sp(e, a, i) {
    return i(function () {
      bp(a) && dp(e);
    });
  }
  function bp(e) {
    var a = e.getSnapshot;
    e = e.value;
    try {
      var i = a();
      return !ua(e, i);
    } catch {
      return !0;
    }
  }
  function dp(e) {
    var a = nn(e, 2);
    a !== null && ta(a, e, 2);
  }
  function Qs(e) {
    var a = Xe();
    if (typeof e == "function") {
      var i = e;
      if (((e = i()), mn)) {
        zi(!0);
        try {
          i();
        } finally {
          zi(!1);
        }
      }
    }
    return (
      (a.memoizedState = a.baseState = e),
      (a.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ui,
        lastRenderedState: e,
      }),
      a
    );
  }
  function op(e, a, i, n) {
    return ((e.baseState = i), $s(e, ce, typeof n == "function" ? n : ui));
  }
  function qk(e, a, i, n, l) {
    if (Wt(e)) throw Error(h(485));
    if (((e = a.action), e !== null)) {
      var t = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (r) {
          t.listeners.push(r);
        },
      };
      (H.T !== null ? i(!0) : (t.isTransition = !1),
        n(t),
        (i = a.pending),
        i === null
          ? ((t.next = a.pending = t), pp(a, t))
          : ((t.next = i.next), (a.pending = i.next = t)));
    }
  }
  function pp(e, a) {
    var i = a.action,
      n = a.payload,
      l = e.state;
    if (a.isTransition) {
      var t = H.T,
        r = {};
      ((r.types = t !== null ? t.types : null), (H.T = r));
      try {
        var s = i(l, n),
          b = H.S;
        (b !== null && b(r, s), cp(e, a, s));
      } catch (u) {
        Xs(e, a, u);
      } finally {
        (t !== null && r.types !== null && (t.types = r.types), (H.T = t));
      }
    } else
      try {
        ((t = i(l, n)), cp(e, a, t));
      } catch (u) {
        Xs(e, a, u);
      }
  }
  function cp(e, a, i) {
    i !== null && typeof i == "object" && typeof i.then == "function"
      ? i.then(
          function (n) {
            up(e, a, n);
          },
          function (n) {
            return Xs(e, a, n);
          },
        )
      : up(e, a, i);
  }
  function up(e, a, i) {
    ((a.status = "fulfilled"),
      (a.value = i),
      mp(a),
      (e.state = i),
      (a = e.pending),
      a !== null &&
        ((i = a.next),
        i === a ? (e.pending = null) : ((i = i.next), (a.next = i), pp(e, i))));
  }
  function Xs(e, a, i) {
    var n = e.pending;
    if (((e.pending = null), n !== null)) {
      n = n.next;
      do ((a.status = "rejected"), (a.reason = i), mp(a), (a = a.next));
      while (a !== n);
    }
    e.action = null;
  }
  function mp(e) {
    e = e.listeners;
    for (var a = 0; a < e.length; a++) (0, e[a])();
  }
  function kp(e, a) {
    return a;
  }
  function hp(e, a) {
    if (K) {
      var i = me.formState;
      if (i !== null) {
        e: {
          var n = Y;
          if (K) {
            if (ye) {
              a: {
                for (var l = ye, t = Ea; l.nodeType !== 8;) {
                  if (!t) {
                    l = null;
                    break a;
                  }
                  if (((l = Ta(l.nextSibling)), l === null)) {
                    l = null;
                    break a;
                  }
                }
                ((t = l.data), (l = t === "F!" || t === "F" ? l : null));
              }
              if (l) {
                ((ye = Ta(l.nextSibling)), (n = l.data === "F!"));
                break e;
              }
            }
            Oi(n);
          }
          n = !1;
        }
        n && (a = i[0]);
      }
    }
    return (
      (i = Xe()),
      (i.memoizedState = i.baseState = a),
      (n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kp,
        lastRenderedState: a,
      }),
      (i.queue = n),
      (i = Pp.bind(null, Y, n)),
      (n.dispatch = i),
      (n = Qs(!1)),
      (t = ib.bind(null, Y, !1, n.queue)),
      (n = Xe()),
      (l = {
        state: a,
        dispatch: null,
        action: e,
        pending: null,
      }),
      (n.queue = l),
      (i = qk.bind(null, Y, l, t, i)),
      (l.dispatch = i),
      (n.memoizedState = e),
      [a, i, !1]
    );
  }
  function vp(e) {
    var a = Ee();
    return yp(a, ce, e);
  }
  function yp(e, a, i) {
    if (
      ((a = $s(e, a, kp)[0]),
      (e = Xt(ui)[0]),
      typeof a == "object" && a !== null && typeof a.then == "function")
    )
      try {
        var n = Ul(a);
      } catch (r) {
        throw r === Fn ? Ft : r;
      }
    else n = a;
    a = Ee();
    var l = a.queue,
      t = l.dispatch;
    return (
      i !== a.memoizedState &&
        ((Y.flags |= 2048),
        Vn(
          9,
          {
            destroy: void 0,
          },
          Lk.bind(null, l, i),
          null,
        )),
      [n, t, e]
    );
  }
  function Lk(e, a) {
    e.action = a;
  }
  function fp(e) {
    var a = Ee(),
      i = ce;
    if (i !== null) return yp(a, i, e);
    (Ee(), (a = a.memoizedState), (i = Ee()));
    var n = i.queue.dispatch;
    return ((i.memoizedState = e), [a, n, !1]);
  }
  function Vn(e, a, i, n) {
    return (
      (e = {
        tag: e,
        create: i,
        deps: n,
        inst: a,
        next: null,
      }),
      (a = Y.updateQueue),
      a === null && ((a = jt()), (Y.updateQueue = a)),
      (i = a.lastEffect),
      i === null
        ? (a.lastEffect = e.next = e)
        : ((n = i.next), (i.next = e), (e.next = n), (a.lastEffect = e)),
      e
    );
  }
  function gp() {
    return Ee().memoizedState;
  }
  function Zt(e, a, i, n) {
    var l = Xe();
    ((Y.flags |= e),
      (l.memoizedState = Vn(
        1 | a,
        {
          destroy: void 0,
        },
        i,
        n === void 0 ? null : n,
      )));
  }
  function Jt(e, a, i, n) {
    var l = Ee();
    n = n === void 0 ? null : n;
    var t = l.memoizedState.inst;
    ce !== null && n !== null && Is(n, ce.memoizedState.deps)
      ? (l.memoizedState = Vn(a, t, i, n))
      : ((Y.flags |= e), (l.memoizedState = Vn(1 | a, t, i, n)));
  }
  function zp(e, a) {
    Zt(8390656, 8, e, a);
  }
  function Zs(e, a) {
    Jt(2048, 8, e, a);
  }
  function Mk(e) {
    Y.flags |= 4;
    var a = Y.updateQueue;
    if (a === null) ((a = jt()), (Y.updateQueue = a), (a.events = [e]));
    else {
      var i = a.events;
      i === null ? (a.events = [e]) : i.push(e);
    }
  }
  function Ap(e) {
    var a = Ee().memoizedState;
    return (
      Mk({
        ref: a,
        nextImpl: e,
      }),
      function () {
        if ((te & 2) !== 0) throw Error(h(440));
        return a.impl.apply(void 0, arguments);
      }
    );
  }
  function Cp(e, a) {
    return Jt(4, 2, e, a);
  }
  function Bp(e, a) {
    return Jt(4, 4, e, a);
  }
  function Sp(e, a) {
    if (typeof a == "function") {
      e = e();
      var i = a(e);
      return function () {
        typeof i == "function" ? i() : a(null);
      };
    }
    if (a != null)
      return (
        (e = e()),
        (a.current = e),
        function () {
          a.current = null;
        }
      );
  }
  function Op(e, a, i) {
    ((i = i != null ? i.concat([e]) : null), Jt(4, 4, Sp.bind(null, a, e), i));
  }
  function Js() {}
  function wp(e, a) {
    var i = Ee();
    a = a === void 0 ? null : a;
    var n = i.memoizedState;
    return a !== null && Is(a, n[1]) ? n[0] : ((i.memoizedState = [e, a]), e);
  }
  function Ep(e, a) {
    var i = Ee();
    a = a === void 0 ? null : a;
    var n = i.memoizedState;
    if (a !== null && Is(a, n[1])) return n[0];
    if (((n = e()), mn)) {
      zi(!0);
      try {
        e();
      } finally {
        zi(!1);
      }
    }
    return ((i.memoizedState = [n, a]), n);
  }
  function Ws(e, a, i) {
    return i === void 0 || ((ci & 1073741824) !== 0 && (X & 261930) === 0)
      ? (e.memoizedState = a)
      : ((e.memoizedState = i), (e = Mc()), (Y.lanes |= e), (Mi |= e), i);
  }
  function Hp(e, a, i, n) {
    return ua(i, a)
      ? i
      : Ni.current !== null
        ? ((e = Ws(e, i, n)), ua(e, a) || (De = !0), e)
        : (ci & 106) === 0 || ((ci & 1073741824) !== 0 && (X & 261930) === 0)
          ? ((De = !0), (e.memoizedState = i))
          : ((e = Mc()), (Y.lanes |= e), (Mi |= e), a);
  }
  function Tp(e, a, i, n, l) {
    var t = U.p;
    U.p = t !== 0 && 8 > t ? t : 8;
    var r = H.T,
      s = {};
    ((s.types = r !== null ? r.types : null), (H.T = s), ib(e, !1, a, i));
    try {
      var b = l(),
        u = H.S;
      if (
        (u !== null && u(s, b),
        b !== null && typeof b == "object" && typeof b.then == "function")
      ) {
        var v = xk(b, n);
        Fl(e, a, v, ya(e));
      } else Fl(e, a, n, ya(e));
    } catch (z) {
      Fl(
        e,
        a,
        {
          then: function () {},
          status: "rejected",
          reason: z,
        },
        ya(),
      );
    } finally {
      ((U.p = t),
        r !== null && s.types !== null && (r.types = s.types),
        (H.T = r));
    }
  }
  function Uk() {}
  function eb(e, a, i, n) {
    if (e.tag !== 5) throw Error(h(476));
    var l = Dp(e).queue;
    Tp(
      e,
      l,
      a,
      ii,
      i === null
        ? Uk
        : function () {
            return (Np(e), i(n));
          },
    );
  }
  function Dp(e) {
    var a = e.memoizedState;
    if (a !== null) return a;
    a = {
      memoizedState: ii,
      baseState: ii,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ui,
        lastRenderedState: ii,
      },
      next: null,
    };
    var i = {};
    return (
      (a.next = {
        memoizedState: i,
        baseState: i,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: ui,
          lastRenderedState: i,
        },
        next: null,
      }),
      (e.memoizedState = a),
      (e = e.alternate),
      e !== null && (e.memoizedState = a),
      a
    );
  }
  function Np(e) {
    var a = Dp(e);
    (a.next === null && (a = e.alternate.memoizedState),
      Fl(e, a.next.queue, {}, ya()));
  }
  function ab() {
    return Ie(dl);
  }
  function xp() {
    return Ee().memoizedState;
  }
  function Rp() {
    return Ee().memoizedState;
  }
  function Fk(e) {
    for (var a = e.return; a !== null;) {
      switch (a.tag) {
        case 24:
        case 3:
          var i = ya();
          e = Ti(i);
          var n = Di(a, e, i);
          (n !== null && (ta(n, a, i), Rl(n, a, i)),
            (a = {
              cache: Hs(),
            }),
            (e.payload = a));
          return;
      }
      a = a.return;
    }
  }
  function Ik(e, a, i) {
    var n = ya();
    ((i = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Wt(e)
        ? qp(a, i)
        : ((i = gs(e, a, i, n)), i !== null && (ta(i, e, n), Lp(i, a, n))));
  }
  function Pp(e, a, i) {
    var n = ya();
    Fl(e, a, i, n);
  }
  function Fl(e, a, i, n) {
    var l = {
      lane: n,
      revertLane: 0,
      gesture: null,
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Wt(e)) qp(a, l);
    else {
      var t = e.alternate;
      if (
        e.lanes === 0 &&
        (t === null || t.lanes === 0) &&
        ((t = a.lastRenderedReducer), t !== null)
      )
        try {
          var r = a.lastRenderedState,
            s = t(r, i);
          if (((l.hasEagerState = !0), (l.eagerState = s), ua(s, r)))
            return (Tt(e, a, l, 0), me === null && Ht(), !1);
        } catch {}
      if (((i = gs(e, a, l, n)), i !== null))
        return (ta(i, e, n), Lp(i, a, n), !0);
    }
    return !1;
  }
  function ib(e, a, i, n) {
    if (
      ((n = {
        lane: 2,
        revertLane: _b(),
        gesture: null,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Wt(e))
    ) {
      if (a) throw Error(h(479));
    } else ((a = gs(e, i, n, 2)), a !== null && ta(a, e, 2));
  }
  function Wt(e) {
    var a = e.alternate;
    return e === Y || (a !== null && a === Y);
  }
  function qp(e, a) {
    Gn = _t = !0;
    var i = e.pending;
    (i === null ? (a.next = a) : ((a.next = i.next), (i.next = a)),
      (e.pending = a));
  }
  function Lp(e, a, i) {
    if ((i & 4194048) !== 0) {
      var n = a.lanes;
      ((n &= e.pendingLanes), (i |= n), (a.lanes = i), Ld(e, i));
    }
  }
  var er = {
      readContext: Ie,
      use: Qt,
      useCallback: Oe,
      useContext: Oe,
      useEffect: Oe,
      useImperativeHandle: Oe,
      useLayoutEffect: Oe,
      useInsertionEffect: Oe,
      useMemo: Oe,
      useReducer: Oe,
      useRef: Oe,
      useState: Oe,
      useDebugValue: Oe,
      useDeferredValue: Oe,
      useTransition: Oe,
      useSyncExternalStore: Oe,
      useId: Oe,
      useHostTransitionStatus: Oe,
      useFormState: Oe,
      useActionState: Oe,
      useOptimistic: Oe,
      useMemoCache: Oe,
      useCacheRefresh: Oe,
      useEffectEvent: Oe,
    },
    Mp = {
      readContext: Ie,
      use: Qt,
      useCallback: function (e, a) {
        return ((Xe().memoizedState = [e, a === void 0 ? null : a]), e);
      },
      useContext: Ie,
      useEffect: zp,
      useImperativeHandle: function (e, a, i) {
        ((i = i != null ? i.concat([e]) : null),
          Zt(4194308, 4, Sp.bind(null, a, e), i));
      },
      useLayoutEffect: function (e, a) {
        return Zt(4194308, 4, e, a);
      },
      useInsertionEffect: function (e, a) {
        Zt(4, 2, e, a);
      },
      useMemo: function (e, a) {
        var i = Xe();
        a = a === void 0 ? null : a;
        var n = e();
        if (mn) {
          zi(!0);
          try {
            e();
          } finally {
            zi(!1);
          }
        }
        return ((i.memoizedState = [n, a]), n);
      },
      useReducer: function (e, a, i) {
        var n = Xe();
        if (i !== void 0) {
          var l = i(a);
          if (mn) {
            zi(!0);
            try {
              i(a);
            } finally {
              zi(!1);
            }
          }
        } else l = a;
        return (
          (n.memoizedState = n.baseState = l),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: l,
          }),
          (n.queue = e),
          (e = e.dispatch = Ik.bind(null, Y, e)),
          [n.memoizedState, e]
        );
      },
      useRef: function (e) {
        var a = Xe();
        return (
          (e = {
            current: e,
          }),
          (a.memoizedState = e)
        );
      },
      useState: function (e) {
        e = Qs(e);
        var a = e.queue,
          i = Pp.bind(null, Y, a);
        return ((a.dispatch = i), [e.memoizedState, i]);
      },
      useDebugValue: Js,
      useDeferredValue: function (e, a) {
        var i = Xe();
        return Ws(i, e, a);
      },
      useTransition: function () {
        var e = Qs(!1);
        return (
          (e = Tp.bind(null, Y, e.queue, !0, !1)),
          (Xe().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, a, i) {
        var n = Y,
          l = Xe();
        if (K) {
          if (i === void 0) throw Error(h(407));
          i = i();
        } else {
          if (((i = a()), me === null)) throw Error(h(349));
          (X & 127) !== 0 || tp(n, a, i);
        }
        l.memoizedState = i;
        var t = {
          value: i,
          getSnapshot: a,
        };
        return (
          (l.queue = t),
          zp(sp.bind(null, n, t, e), [e]),
          (n.flags |= 2048),
          Vn(
            9,
            {
              destroy: void 0,
            },
            rp.bind(null, n, t, i, a),
            null,
          ),
          i
        );
      },
      useId: function () {
        var e = Xe(),
          a = me.identifierPrefix;
        if (K) {
          var i = _a,
            n = Ka;
          ((i = (n & ~(1 << (32 - pa(n) - 1))).toString(32) + i),
            (a = "_" + a + "R_" + i),
            (i = $t++),
            0 < i && (a += "H" + i.toString(32)),
            (a += "_"));
        } else ((i = Rk++), (a = "_" + a + "r_" + i.toString(32) + "_"));
        return (e.memoizedState = a);
      },
      useHostTransitionStatus: ab,
      useFormState: hp,
      useActionState: hp,
      useOptimistic: function (e) {
        var a = Xe();
        a.memoizedState = a.baseState = e;
        var i = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (a.queue = i),
          (a = ib.bind(null, Y, !0, i)),
          (i.dispatch = a),
          [e, a]
        );
      },
      useMemoCache: _s,
      useCacheRefresh: function () {
        return (Xe().memoizedState = Fk.bind(null, Y));
      },
      useEffectEvent: function (e) {
        var a = Xe(),
          i = {
            impl: e,
          };
        return (
          (a.memoizedState = i),
          function () {
            if ((te & 2) !== 0) throw Error(h(440));
            return i.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Up = {
      readContext: Ie,
      use: Qt,
      useCallback: wp,
      useContext: Ie,
      useEffect: Zs,
      useImperativeHandle: Op,
      useInsertionEffect: Cp,
      useLayoutEffect: Bp,
      useMemo: Ep,
      useReducer: Xt,
      useRef: gp,
      useState: function () {
        return Xt(ui);
      },
      useDebugValue: Js,
      useDeferredValue: function (e, a) {
        var i = Ee();
        return Hp(i, ce.memoizedState, e, a);
      },
      useTransition: function () {
        var e = Xt(ui)[0],
          a = Ee().memoizedState;
        return [typeof e == "boolean" ? e : Ul(e), a];
      },
      useSyncExternalStore: lp,
      useId: xp,
      useHostTransitionStatus: ab,
      useFormState: vp,
      useActionState: vp,
      useOptimistic: function (e, a) {
        var i = Ee();
        return op(i, ce, e, a);
      },
      useMemoCache: _s,
      useCacheRefresh: Rp,
      useEffectEvent: Ap,
    },
    Gk = {
      readContext: Ie,
      use: Qt,
      useCallback: wp,
      useContext: Ie,
      useEffect: Zs,
      useImperativeHandle: Op,
      useInsertionEffect: Cp,
      useLayoutEffect: Bp,
      useMemo: Ep,
      useReducer: js,
      useRef: gp,
      useState: function () {
        return js(ui);
      },
      useDebugValue: Js,
      useDeferredValue: function (e, a) {
        var i = Ee();
        return ce === null ? Ws(i, e, a) : Hp(i, ce.memoizedState, e, a);
      },
      useTransition: function () {
        var e = js(ui)[0],
          a = Ee().memoizedState;
        return [typeof e == "boolean" ? e : Ul(e), a];
      },
      useSyncExternalStore: lp,
      useId: xp,
      useHostTransitionStatus: ab,
      useFormState: fp,
      useActionState: fp,
      useOptimistic: function (e, a) {
        var i = Ee();
        return ce !== null
          ? op(i, ce, e, a)
          : ((i.baseState = e), [e, i.queue.dispatch]);
      },
      useMemoCache: _s,
      useCacheRefresh: Rp,
      useEffectEvent: Ap,
    };
  function nb(e, a, i, n) {
    ((a = e.memoizedState),
      (i = i(n, a)),
      (i = i == null ? a : $({}, a, i)),
      (e.memoizedState = i),
      e.lanes === 0 && (e.updateQueue.baseState = i));
  }
  var lb = {
    enqueueSetState: function (e, a, i) {
      e = e._reactInternals;
      var n = ya(),
        l = Ti(n);
      ((l.payload = a),
        i != null && (l.callback = i),
        (a = Di(e, l, n)),
        a !== null && (ta(a, e, n), Rl(a, e, n)));
    },
    enqueueReplaceState: function (e, a, i) {
      e = e._reactInternals;
      var n = ya(),
        l = Ti(n);
      ((l.tag = 1),
        (l.payload = a),
        i != null && (l.callback = i),
        (a = Di(e, l, n)),
        a !== null && (ta(a, e, n), Rl(a, e, n)));
    },
    enqueueForceUpdate: function (e, a) {
      e = e._reactInternals;
      var i = ya(),
        n = Ti(i);
      ((n.tag = 2),
        a != null && (n.callback = a),
        (a = Di(e, n, i)),
        a !== null && (ta(a, e, i), Rl(a, e, i)));
    },
  };
  function Fp(e, a, i, n, l, t, r) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(n, t, r)
        : a.prototype && a.prototype.isPureReactComponent
          ? !Ol(i, n) || !Ol(l, t)
          : !0
    );
  }
  function Ip(e, a, i, n) {
    ((e = a.state),
      typeof a.componentWillReceiveProps == "function" &&
        a.componentWillReceiveProps(i, n),
      typeof a.UNSAFE_componentWillReceiveProps == "function" &&
        a.UNSAFE_componentWillReceiveProps(i, n),
      a.state !== e && lb.enqueueReplaceState(a, a.state, null));
  }
  function kn(e, a) {
    var i = a;
    if ("ref" in a) {
      i = {};
      for (var n in a) n !== "ref" && (i[n] = a[n]);
    }
    if ((e = e.defaultProps)) {
      i === a && (i = $({}, i));
      for (var l in e) i[l] === void 0 && (i[l] = e[l]);
    }
    return i;
  }
  function Gp(e) {
    Et(e);
  }
  function Yp(e) {
    console.error(e);
  }
  function Vp(e) {
    Et(e);
  }
  function ar(e, a) {
    try {
      var i = e.onUncaughtError;
      i(a.value, {
        componentStack: a.stack,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function Kp(e, a, i) {
    try {
      var n = e.onCaughtError;
      n(i.value, {
        componentStack: i.stack,
        errorBoundary: a.tag === 1 ? a.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function tb(e, a, i) {
    return (
      (i = Ti(i)),
      (i.tag = 3),
      (i.payload = {
        element: null,
      }),
      (i.callback = function () {
        ar(e, a);
      }),
      i
    );
  }
  function _p(e) {
    return ((e = Ti(e)), (e.tag = 3), e);
  }
  function $p(e, a, i, n) {
    var l = i.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var t = n.value;
      ((e.payload = function () {
        return l(t);
      }),
        (e.callback = function () {
          Kp(a, i, n);
        }));
    }
    var r = i.stateNode;
    r !== null &&
      typeof r.componentDidCatch == "function" &&
      (e.callback = function () {
        (Kp(a, i, n),
          typeof l != "function" &&
            (Ui === null ? (Ui = new Set([this])) : Ui.add(this)));
        var s = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: s !== null ? s : "",
        });
      });
  }
  function Yk(e, a, i, n, l) {
    if (
      ((i.flags |= 32768),
      n !== null && typeof n == "object" && typeof n.then == "function")
    ) {
      if (
        ((a = i.alternate),
        a !== null && sn(a, i, l, !0),
        (i = Ge.current),
        i !== null)
      ) {
        switch (i.tag) {
          case 31:
          case 13:
          case 19:
            return (
              $e === null ? Ar() : i.alternate === null && we === 0 && (we = 3),
              (i.flags &= -257),
              (i.flags |= 65536),
              (i.lanes = l),
              n === It
                ? (i.flags |= 16384)
                : ((a = i.updateQueue),
                  a === null ? (i.updateQueue = new Set([n])) : a.add(n),
                  Yb(e, n, l)),
              !1
            );
          case 22:
            return (
              (i.flags |= 65536),
              n === It
                ? (i.flags |= 16384)
                : ((a = i.updateQueue),
                  a === null
                    ? ((a = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([n]),
                      }),
                      (i.updateQueue = a))
                    : ((i = a.retryQueue),
                      i === null ? (a.retryQueue = new Set([n])) : i.add(n)),
                  Yb(e, n, l)),
              !1
            );
        }
        throw Error(h(435, i.tag));
      }
      return (Yb(e, n, l), Ar(), !1);
    }
    if (K)
      return (
        (a = Ge.current),
        a !== null
          ? ((a.flags & 65536) === 0 && (a.flags |= 256),
            (a.flags |= 65536),
            (a.lanes = l),
            n !== Ss &&
              ((e = Error(h(422), {
                cause: n,
              })),
              Hl(Sa(e, i))))
          : (n !== Ss &&
              ((a = Error(h(423), {
                cause: n,
              })),
              Hl(Sa(a, i))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (l &= -l),
            (e.lanes |= l),
            (n = Sa(n, i)),
            (l = tb(e.stateNode, n, l)),
            Ps(e, l),
            we !== 4 && (we = 2)),
        !1
      );
    var t = Error(h(520), {
      cause: n,
    });
    if (
      ((t = Sa(t, i)),
      jl === null ? (jl = [t]) : jl.push(t),
      we !== 4 && (we = 2),
      a === null)
    )
      return !0;
    ((n = Sa(n, i)), (i = a));
    do {
      switch (i.tag) {
        case 3:
          return (
            (i.flags |= 65536),
            (e = l & -l),
            (i.lanes |= e),
            (e = tb(i.stateNode, n, e)),
            Ps(i, e),
            !1
          );
        case 1:
          if (
            ((a = i.type),
            (t = i.stateNode),
            (i.flags & 128) === 0 &&
              (typeof a.getDerivedStateFromError == "function" ||
                (t !== null &&
                  typeof t.componentDidCatch == "function" &&
                  (Ui === null || !Ui.has(t)))))
          )
            return (
              (i.flags |= 65536),
              (l &= -l),
              (i.lanes |= l),
              (l = _p(l)),
              $p(l, e, i, n),
              Ps(i, l),
              !1
            );
          break;
        case 22:
          if (i.memoizedState !== null) return ((i.flags |= 65536), !1);
      }
      i = i.return;
    } while (i !== null);
    return !1;
  }
  var rb = Error(h(461)),
    De = !1;
  function xe(e, a, i, n) {
    a.child = e === null ? Zo(a, null, i, n) : un(a, e.child, i, n);
  }
  function jp(e, a, i, n, l) {
    i = i.render;
    var t = a.ref;
    if ("ref" in n) {
      var r = {};
      for (var s in n) s !== "ref" && (r[s] = n[s]);
    } else r = n;
    return (
      bn(a),
      (n = Gs(e, a, i, r, t, l)),
      (s = Ys()),
      e !== null && !De
        ? (Vs(e, a, l), mi(e, a, l))
        : (K && s && Rt(a), (a.flags |= 1), xe(e, a, n, l), a.child)
    );
  }
  function Qp(e, a, i, n, l) {
    if (e === null) {
      var t = i.type;
      return typeof t == "function" &&
        !zs(t) &&
        t.defaultProps === void 0 &&
        i.compare === null
        ? ((a.tag = 15), (a.type = t), Xp(e, a, t, n, l))
        : ((e = Nt(i.type, null, n, a, a.mode, l)),
          (e.ref = a.ref),
          (e.return = a),
          (a.child = e));
    }
    if (((t = e.child), !mb(e, l))) {
      var r = t.memoizedProps;
      if (
        ((i = i.compare), (i = i !== null ? i : Ol), i(r, n) && e.ref === a.ref)
      )
        return mi(e, a, l);
    }
    return (
      (a.flags |= 1),
      (e = bi(t, n)),
      (e.ref = a.ref),
      (e.return = a),
      (a.child = e)
    );
  }
  function Xp(e, a, i, n, l) {
    if (e !== null) {
      var t = e.memoizedProps;
      if (Ol(t, n) && e.ref === a.ref)
        if (((De = !1), (a.pendingProps = n = t), mb(e, l)))
          (e.flags & 131072) !== 0 && (De = !0);
        else return ((a.lanes = e.lanes), mi(e, a, l));
    }
    return sb(e, a, i, n, l);
  }
  function Zp(e, a, i, n) {
    var l = n.children,
      t = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        a.stateNode === null &&
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      n.mode === "hidden")
    ) {
      if ((a.flags & 128) !== 0) {
        if (((t = t !== null ? t.baseLanes | i : i), e !== null)) {
          for (n = a.child = e.child, l = 0; n !== null;)
            ((l = l | n.lanes | n.childLanes), (n = n.sibling));
          n = l & ~t;
        } else ((n = 0), (a.child = null));
        return Jp(e, a, t, i, n);
      }
      if ((i & 536870912) !== 0)
        ((a.memoizedState = {
          baseLanes: 0,
          cachePool: null,
        }),
          e !== null && Ut(a, t !== null ? t.cachePool : null),
          t !== null ? ep(a, t) : Ls(),
          ap(a));
      else
        return (
          (n = a.lanes = 536870912),
          Jp(e, a, t !== null ? t.baseLanes | i : i, i, n)
        );
    } else
      t !== null
        ? (Ut(a, t.cachePool), ep(a, t), Ri(), (a.memoizedState = null))
        : (e !== null && Ut(a, null), Ls(), Ri());
    return (xe(e, a, l, i), a.child);
  }
  function Il(e, a) {
    return (
      (e !== null && e.tag === 22) ||
        a.stateNode !== null ||
        (a.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      a.sibling
    );
  }
  function Jp(e, a, i, n, l) {
    var t = Ds();
    return (
      (t =
        t === null
          ? null
          : {
              parent: He._currentValue,
              pool: t,
            }),
      (a.memoizedState = {
        baseLanes: i,
        cachePool: t,
      }),
      e !== null && Ut(a, null),
      Ls(),
      ap(a),
      e !== null && sn(e, a, n, !0),
      (a.childLanes = l),
      null
    );
  }
  function ir(e, a) {
    return (
      (a = nr(
        {
          mode: a.mode,
          children: a.children,
        },
        e.mode,
      )),
      (a.ref = e.ref),
      (e.child = a),
      (a.return = e),
      a
    );
  }
  function Wp(e, a, i) {
    return (
      un(a, e.child, null, i),
      (e = ir(a, a.pendingProps)),
      (e.flags |= 2),
      ma(a),
      (a.memoizedState = null),
      e
    );
  }
  function Vk(e, a, i) {
    var n = a.pendingProps,
      l = (a.flags & 128) !== 0;
    if (((a.flags &= -129), e === null)) {
      if (K) {
        if (n.mode === "hidden")
          return (
            (e = ir(a, n)),
            (a.lanes = 536870912),
            (e.memoizedState = {
              baseLanes: 0,
              cachePool: null,
            }),
            Il(null, e)
          );
        if (
          (Us(a),
          (e = ye)
            ? ((e = Su(e, Ea)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext:
                    Bi !== null
                      ? {
                          id: Ka,
                          overflow: _a,
                        }
                      : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = qo(e)),
                (i.return = a),
                (a.child = i),
                (qe = a),
                (ye = null)))
            : (e = null),
          e === null)
        )
          throw Oi(a);
        return ((a.lanes = 536870912), null);
      }
      return ir(a, n);
    }
    var t = e.memoizedState;
    if (t !== null) {
      var r = t.dehydrated;
      if ((Us(a), l)) {
        if (a.flags & 256) ((a.flags &= -257), (a = Wp(e, a, i)));
        else if (a.memoizedState !== null)
          ((a.child = e.child), (a.flags |= 128), (a = null));
        else throw Error(h(558));
      } else if (
        (De || sn(e, a, i, !1), (l = (i & e.childLanes) !== 0), De || l)
      ) {
        if (Ni.current === null) {
          if (
            ((n = me),
            n !== null && ((r = Md(n, i)), r !== 0 && r !== t.retryLane))
          )
            throw ((t.retryLane = r), nn(e, r), ta(n, e, r), rb);
          Ar();
        }
        a = Wp(e, a, i);
      } else
        ((e = t.treeContext),
          (ye = Ta(r.nextSibling)),
          (qe = a),
          (K = !0),
          (Si = null),
          (Ea = !1),
          e !== null && Uo(a, e),
          (a = ir(a, n)),
          (a.flags |= 134221824));
      return a;
    }
    return (
      (e = bi(e.child, {
        mode: n.mode,
        children: n.children,
      })),
      (e.ref = a.ref),
      (a.child = e),
      (e.return = a),
      e
    );
  }
  function Kn(e, a) {
    var i = a.ref;
    if (i === null) e !== null && e.ref !== null && (a.flags |= 4194816);
    else {
      if (typeof i != "function" && typeof i != "object") throw Error(h(284));
      (e === null || e.ref !== i) && (a.flags |= 4194816);
    }
  }
  function sb(e, a, i, n, l) {
    return (
      bn(a),
      (i = Gs(e, a, i, n, void 0, l)),
      (n = Ys()),
      e !== null && !De
        ? (Vs(e, a, l), mi(e, a, l))
        : (K && n && Rt(a), (a.flags |= 1), xe(e, a, i, l), a.child)
    );
  }
  function ec(e, a, i, n, l, t) {
    return (
      bn(a),
      (a.updateQueue = null),
      (i = np(a, n, i, l)),
      ip(e),
      (n = Ys()),
      e !== null && !De
        ? (Vs(e, a, t), mi(e, a, t))
        : (K && n && Rt(a), (a.flags |= 1), xe(e, a, i, t), a.child)
    );
  }
  function ac(e, a, i, n, l) {
    if ((bn(a), a.stateNode === null)) {
      var t = Pn,
        r = i.contextType;
      (typeof r == "object" && r !== null && (t = Ie(r)),
        (t = new i(n, t)),
        (a.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = lb),
        (a.stateNode = t),
        (t._reactInternals = a),
        (t = a.stateNode),
        (t.props = n),
        (t.state = a.memoizedState),
        (t.refs = {}),
        xs(a),
        (r = i.contextType),
        (t.context = typeof r == "object" && r !== null ? Ie(r) : Pn),
        (t.state = a.memoizedState),
        (r = i.getDerivedStateFromProps),
        typeof r == "function" && (nb(a, i, r, n), (t.state = a.memoizedState)),
        typeof i.getDerivedStateFromProps == "function" ||
          typeof t.getSnapshotBeforeUpdate == "function" ||
          (typeof t.UNSAFE_componentWillMount != "function" &&
            typeof t.componentWillMount != "function") ||
          ((r = t.state),
          typeof t.componentWillMount == "function" && t.componentWillMount(),
          typeof t.UNSAFE_componentWillMount == "function" &&
            t.UNSAFE_componentWillMount(),
          r !== t.state && lb.enqueueReplaceState(t, t.state, null),
          ql(a, n, t, l),
          Pl(),
          (t.state = a.memoizedState)),
        typeof t.componentDidMount == "function" && (a.flags |= 4194308),
        (n = !0));
    } else if (e === null) {
      t = a.stateNode;
      var s = a.memoizedProps,
        b = kn(i, s);
      t.props = b;
      var u = t.context,
        v = i.contextType;
      ((r = Pn), typeof v == "object" && v !== null && (r = Ie(v)));
      var z = i.getDerivedStateFromProps;
      ((v =
        typeof z == "function" ||
        typeof t.getSnapshotBeforeUpdate == "function"),
        (s = a.pendingProps !== s),
        v ||
          (typeof t.UNSAFE_componentWillReceiveProps != "function" &&
            typeof t.componentWillReceiveProps != "function") ||
          ((s || u !== r) && Ip(a, t, n, r)),
        (Hi = !1));
      var p = a.memoizedState;
      ((t.state = p),
        ql(a, n, t, l),
        Pl(),
        (u = a.memoizedState),
        s || p !== u || Hi
          ? (typeof z == "function" && (nb(a, i, z, n), (u = a.memoizedState)),
            (b = Hi || Fp(a, i, b, n, p, u, r))
              ? (v ||
                  (typeof t.UNSAFE_componentWillMount != "function" &&
                    typeof t.componentWillMount != "function") ||
                  (typeof t.componentWillMount == "function" &&
                    t.componentWillMount(),
                  typeof t.UNSAFE_componentWillMount == "function" &&
                    t.UNSAFE_componentWillMount()),
                typeof t.componentDidMount == "function" &&
                  (a.flags |= 4194308))
              : (typeof t.componentDidMount == "function" &&
                  (a.flags |= 4194308),
                (a.memoizedProps = n),
                (a.memoizedState = u)),
            (t.props = n),
            (t.state = u),
            (t.context = r),
            (n = b))
          : (typeof t.componentDidMount == "function" && (a.flags |= 4194308),
            (n = !1)));
    } else {
      ((t = a.stateNode),
        Rs(e, a),
        (r = a.memoizedProps),
        (v = kn(i, r)),
        (t.props = v),
        (z = a.pendingProps),
        (p = t.context),
        (u = i.contextType),
        (b = Pn),
        typeof u == "object" && u !== null && (b = Ie(u)),
        (s = i.getDerivedStateFromProps),
        (u =
          typeof s == "function" ||
          typeof t.getSnapshotBeforeUpdate == "function") ||
          (typeof t.UNSAFE_componentWillReceiveProps != "function" &&
            typeof t.componentWillReceiveProps != "function") ||
          ((r !== z || p !== b) && Ip(a, t, n, b)),
        (Hi = !1),
        (p = a.memoizedState),
        (t.state = p),
        ql(a, n, t, l),
        Pl());
      var k = a.memoizedState;
      r !== z ||
      p !== k ||
      Hi ||
      (e !== null && e.dependencies !== null && Lt(e.dependencies))
        ? (typeof s == "function" && (nb(a, i, s, n), (k = a.memoizedState)),
          (v =
            Hi ||
            Fp(a, i, v, n, p, k, b) ||
            (e !== null && e.dependencies !== null && Lt(e.dependencies)))
            ? (u ||
                (typeof t.UNSAFE_componentWillUpdate != "function" &&
                  typeof t.componentWillUpdate != "function") ||
                (typeof t.componentWillUpdate == "function" &&
                  t.componentWillUpdate(n, k, b),
                typeof t.UNSAFE_componentWillUpdate == "function" &&
                  t.UNSAFE_componentWillUpdate(n, k, b)),
              typeof t.componentDidUpdate == "function" && (a.flags |= 4),
              typeof t.getSnapshotBeforeUpdate == "function" &&
                (a.flags |= 1024))
            : (typeof t.componentDidUpdate != "function" ||
                (r === e.memoizedProps && p === e.memoizedState) ||
                (a.flags |= 4),
              typeof t.getSnapshotBeforeUpdate != "function" ||
                (r === e.memoizedProps && p === e.memoizedState) ||
                (a.flags |= 1024),
              (a.memoizedProps = n),
              (a.memoizedState = k)),
          (t.props = n),
          (t.state = k),
          (t.context = b),
          (n = v))
        : (typeof t.componentDidUpdate != "function" ||
            (r === e.memoizedProps && p === e.memoizedState) ||
            (a.flags |= 4),
          typeof t.getSnapshotBeforeUpdate != "function" ||
            (r === e.memoizedProps && p === e.memoizedState) ||
            (a.flags |= 1024),
          (n = !1));
    }
    return (
      (t = n),
      Kn(e, a),
      (n = (a.flags & 128) !== 0),
      t || n
        ? ((t = a.stateNode),
          (i =
            n && typeof i.getDerivedStateFromError != "function"
              ? null
              : t.render()),
          (a.flags |= 1),
          e !== null && n
            ? ((a.child = un(a, e.child, null, l)),
              (a.child = un(a, null, i, l)))
            : xe(e, a, i, l),
          (a.memoizedState = t.state),
          (e = a.child))
        : (e = mi(e, a, l)),
      e
    );
  }
  function ic(e, a, i, n) {
    return (tn(), (a.flags |= 256), xe(e, a, i, n), a.child);
  }
  var bb = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function db(e) {
    return {
      baseLanes: e,
      cachePool: Ko(),
    };
  }
  function ob(e, a, i) {
    return ((e = e !== null ? e.childLanes & ~i : 0), a && (e |= va), e);
  }
  function nc(e, a, i) {
    var n = a.pendingProps,
      l = !1,
      t = (a.flags & 128) !== 0,
      r;
    if (
      ((r = t) ||
        (r =
          e !== null && e.memoizedState === null ? !1 : (Ye.current & 2) !== 0),
      r && ((l = !0), (a.flags &= -129)),
      (r = (a.flags & 32) !== 0),
      (a.flags &= -33),
      e === null)
    ) {
      if (K) {
        if (
          (l ? xi(a) : Ri(),
          (e = ye)
            ? ((e = Su(e, Ea)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((a.memoizedState = {
                  dehydrated: e,
                  treeContext:
                    Bi !== null
                      ? {
                          id: Ka,
                          overflow: _a,
                        }
                      : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (i = qo(e)),
                (i.return = a),
                (a.child = i),
                (qe = a),
                (ye = null)))
            : (e = null),
          e === null)
        )
          throw Oi(a);
        return (dd(e) ? (a.lanes = 32) : (a.lanes = 536870912), null);
      }
      return (
        (t = n.children),
        (n = n.fallback),
        l
          ? (Ri(),
            (l = a.mode),
            (t = nr(
              {
                mode: "hidden",
                children: t,
              },
              l,
            )),
            (n = ln(n, l, i, null)),
            (t.return = a),
            (n.return = a),
            (t.sibling = n),
            (a.child = t),
            (n = a.child),
            (n.memoizedState = db(i)),
            (n.childLanes = ob(e, r, i)),
            (a.memoizedState = bb),
            Il(null, n))
          : (xi(a), pb(a, t))
      );
    }
    var s = e.memoizedState;
    if (s !== null) {
      var b = s.dehydrated;
      if (b !== null) return Kk(e, a, t, r, n, b, s, i);
    }
    return l
      ? (Ri(),
        (l = n.fallback),
        (t = a.mode),
        (s = e.child),
        (b = s.sibling),
        (n = bi(s, {
          mode: "hidden",
          children: n.children,
        })),
        (n.subtreeFlags = s.subtreeFlags & 1206910976),
        b !== null ? (l = bi(b, l)) : ((l = ln(l, t, i, null)), (l.flags |= 2)),
        (l.return = a),
        (n.return = a),
        (n.sibling = l),
        (a.child = n),
        Il(null, n),
        (n = a.child),
        (l = e.child.memoizedState),
        l === null
          ? (l = db(i))
          : ((t = l.cachePool),
            t !== null
              ? ((s = He._currentValue),
                (t =
                  t.parent !== s
                    ? {
                        parent: s,
                        pool: s,
                      }
                    : t))
              : (t = Ko()),
            (l = {
              baseLanes: l.baseLanes | i,
              cachePool: t,
            })),
        (n.memoizedState = l),
        (n.childLanes = ob(e, r, i)),
        (a.memoizedState = bb),
        Il(e.child, n))
      : (xi(a),
        (i = e.child),
        (e = i.sibling),
        (i = bi(i, {
          mode: "visible",
          children: n.children,
        })),
        (i.return = a),
        (i.sibling = null),
        e !== null &&
          ((r = a.deletions),
          r === null ? ((a.deletions = [e]), (a.flags |= 16)) : r.push(e)),
        (a.child = i),
        (a.memoizedState = null),
        i);
  }
  function pb(e, a) {
    return (
      (a = nr(
        {
          mode: "visible",
          children: a,
        },
        e.mode,
      )),
      (a.return = e),
      (e.child = a)
    );
  }
  function nr(e, a) {
    return ((e = aa(22, e, null, a)), (e.lanes = 0), e);
  }
  function lr(e, a, i) {
    return (
      un(a, e.child, null, i),
      (e = pb(a, a.pendingProps.children)),
      (e.flags |= 2),
      (a.memoizedState = null),
      e
    );
  }
  function Kk(e, a, i, n, l, t, r, s) {
    if (i)
      return a.flags & 256
        ? (xi(a), (a.flags &= -257), lr(e, a, s))
        : a.memoizedState !== null
          ? (Ri(), (a.child = e.child), (a.flags |= 128), null)
          : (Ri(),
            (t = l.fallback),
            (r = a.mode),
            (l = nr(
              {
                mode: "visible",
                children: l.children,
              },
              r,
            )),
            (t = ln(t, r, s, null)),
            (t.flags |= 2),
            (l.return = a),
            (t.return = a),
            (l.sibling = t),
            (a.child = l),
            un(a, e.child, null, s),
            (l = a.child),
            (l.memoizedState = db(s)),
            (l.childLanes = ob(e, n, s)),
            (a.memoizedState = bb),
            Il(null, l));
    if ((xi(a), dd(t))) {
      if (((n = t.nextSibling && t.nextSibling.dataset), n)) var b = n.dgst;
      return (
        (n = b),
        n !== "" &&
          ((l = Error(h(419))),
          (l.stack = ""),
          (l.digest = n),
          Hl({
            value: l,
            source: null,
            stack: null,
          })),
        lr(e, a, s)
      );
    }
    if ((De || sn(e, a, s, !1), (n = (s & e.childLanes) !== 0), De || n)) {
      if (Ni.current !== null) return lr(e, a, s);
      if (
        ((n = me), n !== null && ((l = Md(n, s)), l !== 0 && l !== r.retryLane))
      )
        throw ((r.retryLane = l), nn(e, l), ta(n, e, l), rb);
      return (bd(t) || Ar(), lr(e, a, s));
    }
    return bd(t)
      ? ((a.flags |= 192), (a.child = e.child), null)
      : ((e = r.treeContext),
        (ye = Ta(t.nextSibling)),
        (qe = a),
        (K = !0),
        (Si = null),
        (Ea = !1),
        e !== null && Uo(a, e),
        (a = pb(a, l.children)),
        (a.flags |= 134221824),
        a);
  }
  function lc(e, a, i) {
    e.lanes |= a;
    var n = e.alternate;
    (n !== null && (n.lanes |= a), qt(e.return, a, i));
  }
  function tc(e) {
    for (var a = null; e !== null;) {
      var i = e.alternate;
      (i !== null && Kt(i) === null && (a = e), (e = e.sibling));
    }
    return a;
  }
  function tr(e, a, i, n, l, t) {
    var r = e.memoizedState;
    r === null
      ? (e.memoizedState = {
          isBackwards: a,
          rendering: null,
          renderingStartTime: 0,
          last: n,
          tail: i,
          tailMode: l,
          treeForkCount: t,
        })
      : ((r.isBackwards = a),
        (r.rendering = null),
        (r.renderingStartTime = 0),
        (r.last = n),
        (r.tail = i),
        (r.tailMode = l),
        (r.treeForkCount = t));
  }
  function cb(e) {
    var a = e.child;
    for (e.child = null; a !== null;) {
      var i = a.sibling;
      ((a.sibling = e.child), (e.child = a), (a = i));
    }
  }
  function ub(e, a, i) {
    var n = a.pendingProps,
      l = n.revealOrder,
      t = n.tail;
    n = n.children;
    var r = Ye.current;
    if (a.flags & 128) return (Ll(a, r), null);
    var s = (r & 2) !== 0;
    if (
      (s ? ((r = (r & 1) | 2), (a.flags |= 128)) : (r &= 1),
      Ll(a, r),
      l === "backwards" && e !== null
        ? (cb(e), xe(e, a, n, i), cb(e))
        : xe(e, a, n, i),
      (n = K ? El : 0),
      !s && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = a.child; e !== null;) {
        if (e.tag === 13) e.memoizedState !== null && lc(e, i, a);
        else if (e.tag === 19) lc(e, i, a);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === a) break e;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === a) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (l) {
      case "backwards":
        ((i = tc(a.child)),
          i === null
            ? ((l = a.child), (a.child = null))
            : ((l = i.sibling), (i.sibling = null), cb(a)),
          tr(a, !0, l, null, t, n));
        break;
      case "unstable_legacy-backwards":
        for (i = null, l = a.child, a.child = null; l !== null;) {
          if (((e = l.alternate), e !== null && Kt(e) === null)) {
            a.child = l;
            break;
          }
          ((e = l.sibling), (l.sibling = i), (i = l), (l = e));
        }
        tr(a, !0, i, null, t, n);
        break;
      case "together":
        tr(a, !1, null, null, void 0, n);
        break;
      case "independent":
        a.memoizedState = null;
        break;
      default:
        ((i = tc(a.child)),
          i === null
            ? ((l = a.child), (a.child = null))
            : ((l = i.sibling), (i.sibling = null)),
          tr(a, !1, l, i, t, n));
    }
    return a.child;
  }
  function rc(e, a, i) {
    var n = a.pendingProps;
    return (wi(a, a.type, n.value), xe(e, a, n.children, i), a.child);
  }
  function mi(e, a, i) {
    if (
      (e !== null && (a.dependencies = e.dependencies),
      (Mi |= a.lanes),
      (i & a.childLanes) === 0)
    )
      if (e !== null) {
        if ((sn(e, a, i, !1), (i & a.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && a.child !== e.child) throw Error(h(153));
    if (a.child !== null) {
      for (
        e = a.child, i = bi(e, e.pendingProps), a.child = i, i.return = a;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (i = i.sibling = bi(e, e.pendingProps)),
          (i.return = a));
      i.sibling = null;
    }
    return a.child;
  }
  function mb(e, a) {
    return (e.lanes & a) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && Lt(e)));
  }
  function _k(e, a, i) {
    switch (a.tag) {
      case 3:
        (ot(a, a.stateNode.containerInfo),
          wi(a, He, e.memoizedState.cache),
          tn());
        break;
      case 27:
      case 5:
        Ir(a);
        break;
      case 4:
        ot(a, a.stateNode.containerInfo);
        break;
      case 10:
        wi(a, a.type, a.memoizedProps.value);
        break;
      case 31:
        if (a.memoizedState !== null) return ((a.flags |= 128), Us(a), null);
        break;
      case 13:
        var n = a.memoizedState;
        if (n !== null) {
          if (n.dehydrated !== null) return (xi(a), (a.flags |= 128), null);
          n = sn(e, a, i, !1);
          var l = a.child.childLanes;
          return n || (i & l) !== 0
            ? nc(e, a, i)
            : (xi(a), (e = mi(e, a, i)), e !== null ? e.sibling : null);
        }
        xi(a);
        break;
      case 19:
        if (a.flags & 128) return ub(e, a, i);
        if (
          ((l = (e.flags & 128) !== 0),
          (n = (i & a.childLanes) !== 0),
          n || (sn(e, a, i, !1), (n = (i & a.childLanes) !== 0)),
          l)
        ) {
          if (n) return ub(e, a, i);
          a.flags |= 128;
        }
        if (
          ((l = a.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          Ll(a, Ye.current),
          n)
        )
          break;
        return null;
      case 22:
        return ((a.lanes = 0), Zp(e, a, i, a.pendingProps));
      case 24:
        wi(a, He, e.memoizedState.cache);
    }
    return mi(e, a, i);
  }
  function sc(e, a, i) {
    if (e !== null) {
      if (e.memoizedProps !== a.pendingProps) De = !0;
      else {
        if (!mb(e, i) && (a.flags & 128) === 0) return ((De = !1), _k(e, a, i));
        De = (e.flags & 131072) !== 0;
      }
    } else ((De = !1), K && (a.flags & 1048576) !== 0 && Mo(a, El, a.index));
    switch (((a.lanes = 0), a.tag)) {
      case 16:
        e: {
          var n = a.pendingProps;
          if (((e = pn(a.elementType)), (a.type = e), typeof e == "function"))
            zs(e)
              ? ((n = kn(e, n)), (a.tag = 1), (a = ac(null, a, e, n, i)))
              : ((a.tag = 0), (a = sb(null, a, e, n, i)));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === B) {
                ((a.tag = 11), (a = jp(null, a, e, n, i)));
                break e;
              } else if (l === ue) {
                ((a.tag = 14), (a = Qp(null, a, e, n, i)));
                break e;
              } else if (l === Re) {
                ((a.tag = 10), (a.type = e), (a = rc(null, a, i)));
                break e;
              }
            }
            throw ((a = ee(e) || e), Error(h(306, a, "")));
          }
        }
        return a;
      case 0:
        return sb(e, a, a.type, a.pendingProps, i);
      case 1:
        return ((n = a.type), (l = kn(n, a.pendingProps)), ac(e, a, n, l, i));
      case 3:
        e: {
          if ((ot(a, a.stateNode.containerInfo), e === null))
            throw Error(h(387));
          n = a.pendingProps;
          var t = a.memoizedState;
          ((l = t.element), Rs(e, a), ql(a, n, null, i));
          var r = a.memoizedState;
          if (
            ((n = r.cache),
            wi(a, He, n),
            n !== t.cache && Es(a, [He], i, !0),
            Pl(),
            (n = r.element),
            t.isDehydrated)
          ) {
            if (
              ((t = {
                element: n,
                isDehydrated: !1,
                cache: r.cache,
              }),
              (a.updateQueue.baseState = t),
              (a.memoizedState = t),
              a.flags & 256)
            ) {
              a = ic(e, a, n, i);
              break e;
            } else if (n !== l) {
              ((l = Sa(Error(h(424)), a)), Hl(l), (a = ic(e, a, n, i)));
              break e;
            } else
              for (
                e = a.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  ye = Ta(e.firstChild),
                  qe = a,
                  K = !0,
                  Si = null,
                  Ea = !0,
                  i = Zo(a, null, n, i),
                  a.child = i;
                i;
              )
                ((i.flags = (i.flags & -3) | 134221824), (i = i.sibling));
          } else {
            if ((tn(), n === l)) {
              a = mi(e, a, i);
              break e;
            }
            xe(e, a, n, i);
          }
          a = a.child;
        }
        return a;
      case 26:
        return (
          Kn(e, a),
          e === null
            ? (i = Nu(a.type, null, a.pendingProps, null))
              ? (a.memoizedState = i)
              : K || (a.stateNode = pu(a.type, a.pendingProps, fi.current, a))
            : (a.memoizedState = Nu(
                a.type,
                e.memoizedProps,
                a.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          Ir(a),
          e === null &&
            K &&
            ((n = a.stateNode = Eu(a.type, a.pendingProps, fi.current)),
            (qe = a),
            (Ea = !0),
            (l = ye),
            Gi(a.type) ? ((od = l), (ye = Ta(n.firstChild))) : (ye = l)),
          xe(e, a, a.pendingProps.children, i),
          Kn(e, a),
          e === null && (a.flags |= 4194304),
          a.child
        );
      case 5:
        return (
          e === null &&
            K &&
            ((l = n = ye) &&
              ((n = Fh(n, a.type, a.pendingProps, Ea)),
              n !== null
                ? ((a.stateNode = n),
                  (qe = a),
                  (ye = Ta(n.firstChild)),
                  (Ea = !1),
                  (l = !0))
                : (l = !1)),
            l || Oi(a)),
          Ir(a),
          (l = a.type),
          (t = a.pendingProps),
          (r = e !== null ? e.memoizedProps : null),
          (n = t.children),
          ad(l, t) ? (n = null) : r !== null && ad(l, r) && (a.flags |= 32),
          a.memoizedState !== null &&
            ((l = Gs(e, a, Pk, null, null, i)), (dl._currentValue = l)),
          Kn(e, a),
          xe(e, a, n, i),
          a.child
        );
      case 6:
        return (
          e === null &&
            K &&
            ((e = i = ye) &&
              ((i = Ih(i, a.pendingProps, Ea)),
              i !== null
                ? ((a.stateNode = i), (qe = a), (ye = null), (e = !0))
                : (e = !1)),
            e || Oi(a)),
          null
        );
      case 13:
        return nc(e, a, i);
      case 4:
        return (
          ot(a, a.stateNode.containerInfo),
          (n = a.pendingProps),
          e === null ? (a.child = un(a, null, n, i)) : xe(e, a, n, i),
          a.child
        );
      case 11:
        return jp(e, a, a.type, a.pendingProps, i);
      case 7:
        return ((n = a.pendingProps), Kn(e, a), xe(e, a, n, i), a.child);
      case 8:
        return (xe(e, a, a.pendingProps.children, i), a.child);
      case 12:
        return (xe(e, a, a.pendingProps.children, i), a.child);
      case 10:
        return rc(e, a, i);
      case 9:
        return (
          (l = a.type._context),
          (n = a.pendingProps.children),
          bn(a),
          (l = Ie(l)),
          (n = n(l)),
          (a.flags |= 1),
          xe(e, a, n, i),
          a.child
        );
      case 14:
        return Qp(e, a, a.type, a.pendingProps, i);
      case 15:
        return Xp(e, a, a.type, a.pendingProps, i);
      case 19:
        return ub(e, a, i);
      case 31:
        return Vk(e, a, i);
      case 22:
        return Zp(e, a, i, a.pendingProps);
      case 24:
        return (
          bn(a),
          (n = Ie(He)),
          e === null
            ? ((l = Ds()),
              l === null &&
                ((l = me),
                (t = Hs()),
                (l.pooledCache = t),
                t.refCount++,
                t !== null && (l.pooledCacheLanes |= i),
                (l = t)),
              (a.memoizedState = {
                parent: n,
                cache: l,
              }),
              xs(a),
              wi(a, He, l))
            : ((e.lanes & i) !== 0 && (Rs(e, a), ql(a, null, null, i), Pl()),
              (l = e.memoizedState),
              (t = a.memoizedState),
              l.parent !== n
                ? ((l = {
                    parent: n,
                    cache: n,
                  }),
                  (a.memoizedState = l),
                  a.lanes === 0 &&
                    (a.memoizedState = a.updateQueue.baseState = l),
                  wi(a, He, n))
                : ((n = t.cache),
                  wi(a, He, n),
                  n !== l.cache && Es(a, [He], i, !0))),
          xe(e, a, a.pendingProps.children, i),
          a.child
        );
      case 30:
        return (
          a.stateNode === null &&
            (a.stateNode = {
              autoName: null,
              paired: null,
              clones: null,
              ref: null,
            }),
          (n = a.pendingProps),
          n.name != null && n.name !== "auto"
            ? (a.flags |= e === null ? 18882560 : 18874368)
            : K && Rt(a),
          e !== null && e.memoizedProps.name !== n.name
            ? (a.flags |= 4194816)
            : Kn(e, a),
          xe(e, a, n.children, i),
          a.child
        );
      case 29:
        throw a.pendingProps;
    }
    throw Error(h(156, a.tag));
  }
  function ki(e) {
    e.flags |= 4;
  }
  function kb(e, a, i, n, l) {
    var t;
    if (
      ((t = (e.mode & 32) !== 0) &&
        (t =
          i === null
            ? qu(a, n)
            : qu(a, n) && (n.src !== i.src || n.srcSet !== i.srcSet)),
      t)
    ) {
      if (((e.flags |= 16777216), (l & 335544128) === l))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Gc()) e.flags |= 8192;
        else throw ((cn = It), Ns);
    } else e.flags &= -16777217;
  }
  function bc(e, a) {
    if (a.type !== "stylesheet" || (a.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !Lu(a)))
      if (Gc()) e.flags |= 8192;
      else throw ((cn = It), Ns);
  }
  function rr(e, a) {
    (a !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((a = e.tag !== 22 ? Pd() : 536870912), (e.lanes |= a), (Xn |= a)));
  }
  function Gl(e, a) {
    if (!K)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var i = e.tail, n = null; i !== null;)
            (i.alternate !== null && (n = i), (i = i.sibling));
          n === null
            ? a || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (n.sibling = null);
          break;
        default:
          for (a = e.tail, i = null; a !== null;)
            (a.alternate !== null && (i = a), (a = a.sibling));
          i === null ? (e.tail = null) : (i.sibling = null);
      }
  }
  function fe(e) {
    var a = e.alternate !== null && e.alternate.child === e.child,
      i = 0,
      n = 0;
    if (a)
      for (var l = e.child; l !== null;)
        ((i |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags & 1206910976),
          (n |= l.flags & 1206910976),
          (l.return = e),
          (l = l.sibling));
    else
      for (l = e.child; l !== null;)
        ((i |= l.lanes | l.childLanes),
          (n |= l.subtreeFlags),
          (n |= l.flags),
          (l.return = e),
          (l = l.sibling));
    return ((e.subtreeFlags |= n), (e.childLanes = i), a);
  }
  function $k(e, a, i) {
    var n = a.pendingProps;
    switch ((Bs(a), a.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (fe(a), null);
      case 1:
        return (fe(a), null);
      case 3:
        return (
          (i = a.stateNode),
          (n = null),
          e !== null && (n = e.memoizedState.cache),
          a.memoizedState.cache !== n && (a.flags |= 2048),
          pi(He),
          An(),
          i.pendingContext &&
            ((i.context = i.pendingContext), (i.pendingContext = null)),
          (e === null || e.child === null) &&
            (Mn(a)
              ? ki(a)
              : e === null ||
                (e.memoizedState.isDehydrated && (a.flags & 256) === 0) ||
                ((a.flags |= 1024), Os())),
          fe(a),
          null
        );
      case 26:
        var l = a.type,
          t = a.memoizedState;
        return (
          e === null
            ? (ki(a),
              t !== null ? (fe(a), bc(a, t)) : (fe(a), kb(a, l, null, n, i)))
            : t
              ? t !== e.memoizedState
                ? (ki(a), fe(a), bc(a, t))
                : (fe(a), (a.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== n && ki(a),
                fe(a),
                kb(a, l, e, n, i)),
          null
        );
      case 27:
        if (
          (pt(a),
          (i = fi.current),
          (l = a.type),
          e !== null && a.stateNode != null)
        )
          e.memoizedProps !== n && ki(a);
        else {
          if (!n) {
            if (a.stateNode === null) throw Error(h(166));
            return (fe(a), (a.subtreeFlags &= -33554433), null);
          }
          ((e = Ya.current),
            Mn(a) ? Fo(a) : ((e = Eu(l, n, i)), (a.stateNode = e), ki(a)));
        }
        return (fe(a), (a.subtreeFlags &= -33554433), null);
      case 5:
        if ((pt(a), (l = a.type), e !== null && a.stateNode != null))
          e.memoizedProps !== n && ki(a);
        else {
          if (!n) {
            if (a.stateNode === null) throw Error(h(166));
            return (fe(a), (a.subtreeFlags &= -33554433), null);
          }
          if (((t = Ya.current), Mn(a))) Fo(a);
          else {
            var r = Wl(fi.current);
            switch (t) {
              case 1:
                t = r.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                t = r.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    t = r.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    t = r.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((t = r.createElement("div")),
                      (t.innerHTML = "<script><\/script>"),
                      (t = t.removeChild(t.firstChild)));
                    break;
                  case "select":
                    ((t =
                      typeof n.is == "string"
                        ? r.createElement("select", {
                            is: n.is,
                          })
                        : r.createElement("select")),
                      n.multiple
                        ? (t.multiple = !0)
                        : n.size && (t.size = n.size));
                    break;
                  default:
                    t =
                      typeof n.is == "string"
                        ? r.createElement(l, {
                            is: n.is,
                          })
                        : r.createElement(l);
                }
            }
            ((t[Fe] = a), (t[ea] = n));
            e: for (r = a.child; r !== null;) {
              if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
              else if (r.tag !== 4 && r.tag !== 27 && r.child !== null) {
                ((r.child.return = r), (r = r.child));
                continue;
              }
              if (r === a) break e;
              for (; r.sibling === null;) {
                if (r.return === null || r.return === a) break e;
                r = r.return;
              }
              ((r.sibling.return = r.return), (r = r.sibling));
            }
            a.stateNode = t;
            e: switch ((Ke(t, l, n), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
            n && ki(a);
          }
        }
        return (
          fe(a),
          (a.subtreeFlags &= -33554433),
          kb(a, a.type, e === null ? null : e.memoizedProps, a.pendingProps, i),
          null
        );
      case 6:
        if (e && a.stateNode != null) e.memoizedProps !== n && ki(a);
        else {
          if (typeof n != "string" && a.stateNode === null) throw Error(h(166));
          if (((e = fi.current), Mn(a))) {
            if (
              ((e = a.stateNode),
              (i = a.memoizedProps),
              (n = null),
              (l = qe),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  n = l.memoizedProps;
              }
            ((e[Fe] = a),
              (e = !!(
                e.nodeValue === i ||
                (n !== null && n.suppressHydrationWarning === !0) ||
                su(e.nodeValue, i)
              )),
              e || Oi(a, !0));
          } else
            ((e = Wl(e).createTextNode(n)), (e[Fe] = a), (a.stateNode = e));
        }
        return (fe(a), null);
      case 31:
        if (((i = a.memoizedState), e === null || e.memoizedState !== null)) {
          if (((n = Mn(a)), i !== null)) {
            if (e === null) {
              if (!n) throw Error(h(318));
              if (
                ((e = a.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(h(557));
              e[Fe] = a;
            } else
              (tn(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4));
            (fe(a), (e = !1));
          } else
            ((i = Os()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = i),
              (e = !0));
          if (!e) return a.flags & 256 ? (ma(a), a) : (ma(a), null);
          if ((a.flags & 128) !== 0) throw Error(h(558));
        }
        return (fe(a), null);
      case 13:
        if (
          ((n = a.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((l = Mn(a)), n !== null && n.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(h(318));
              if (
                ((l = a.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(h(317));
              l[Fe] = a;
            } else
              (tn(),
                (a.flags & 128) === 0 && (a.memoizedState = null),
                (a.flags |= 4));
            (fe(a), (l = !1));
          } else
            ((l = Os()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return a.flags & 256 ? (ma(a), a) : (ma(a), null);
        }
        return (
          ma(a),
          (a.flags & 128) !== 0
            ? ((a.lanes = i), a)
            : ((i = n !== null),
              (e = e !== null && e.memoizedState !== null),
              i &&
                ((n = a.child),
                (l = null),
                n.alternate !== null &&
                  n.alternate.memoizedState !== null &&
                  n.alternate.memoizedState.cachePool !== null &&
                  (l = n.alternate.memoizedState.cachePool.pool),
                (t = null),
                n.memoizedState !== null &&
                  n.memoizedState.cachePool !== null &&
                  (t = n.memoizedState.cachePool.pool),
                t !== l && (n.flags |= 2048)),
              i !== e && i && (a.child.flags |= 8192),
              rr(a, a.updateQueue),
              fe(a),
              null)
        );
      case 4:
        return (
          An(),
          e === null && Xb(a.stateNode.containerInfo),
          (a.flags |= 67108864),
          fe(a),
          null
        );
      case 10:
        return (pi(a.type), fe(a), null);
      case 19:
        if ((Fs(a), (n = a.memoizedState), n === null)) return (fe(a), null);
        if (((l = (a.flags & 128) !== 0), (t = n.rendering), t === null)) {
          if (l) Gl(n, !1);
          else {
            if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = a.child; e !== null;) {
                if (((t = Kt(e)), t !== null)) {
                  for (
                    a.flags |= 128,
                      Gl(n, !1),
                      e = t.updateQueue,
                      a.updateQueue = e,
                      rr(a, e),
                      a.subtreeFlags = 0,
                      e = i,
                      i = a.child;
                    i !== null;
                  )
                    (Po(i, e), (i = i.sibling));
                  return (
                    Ll(a, (Ye.current & 1) | 2),
                    K && di(a, n.treeForkCount),
                    a.child
                  );
                }
                e = e.sibling;
              }
            n.tail !== null &&
              da() > yr &&
              ((a.flags |= 128), (l = !0), Gl(n, !1), (a.lanes = 4194304));
          }
        } else {
          if (!l)
            if (((e = Kt(t)), e !== null)) {
              if (
                ((a.flags |= 128),
                (l = !0),
                (e = e.updateQueue),
                (a.updateQueue = e),
                rr(a, e),
                Gl(n, !0),
                n.tail === null &&
                  n.tailMode !== "collapsed" &&
                  n.tailMode !== "visible" &&
                  !t.alternate &&
                  !K)
              )
                return (fe(a), null);
            } else
              2 * da() - n.renderingStartTime > yr &&
                i !== 536870912 &&
                ((a.flags |= 128), (l = !0), Gl(n, !1), (a.lanes = 4194304));
          n.isBackwards
            ? ((t.sibling = a.child), (a.child = t))
            : ((e = n.last),
              e !== null ? (e.sibling = t) : (a.child = t),
              (n.last = t));
        }
        if (n.tail !== null) {
          e = n.tail;
          e: {
            for (i = e; i !== null;) {
              if (i.alternate !== null) {
                i = !1;
                break e;
              }
              i = i.sibling;
            }
            i = !0;
          }
          return (
            (n.rendering = e),
            (n.tail = e.sibling),
            (n.renderingStartTime = da()),
            (e.sibling = null),
            (t = Ye.current),
            (t = l ? (t & 1) | 2 : t & 1),
            n.tailMode === "visible" || n.tailMode === "collapsed" || !i || K
              ? Ll(a, t)
              : ((i = t), ve(Ge, a), ve(Ye, i), $e === null && ($e = a)),
            K && di(a, n.treeForkCount),
            e
          );
        }
        return (fe(a), null);
      case 22:
      case 23:
        return (
          ma(a),
          Ms(),
          (n = a.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== n && (a.flags |= 8192)
            : n && (a.flags |= 8192),
          n
            ? (i & 536870912) !== 0 &&
              (a.flags & 128) === 0 &&
              (fe(a), a.subtreeFlags & 6 && (a.flags |= 8192))
            : fe(a),
          (i = a.updateQueue),
          i !== null && rr(a, i.retryQueue),
          (i = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (i = e.memoizedState.cachePool.pool),
          (n = null),
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (n = a.memoizedState.cachePool.pool),
          n !== i && (a.flags |= 2048),
          e !== null && Ue(on),
          null
        );
      case 24:
        return (
          (i = null),
          e !== null && (i = e.memoizedState.cache),
          a.memoizedState.cache !== i && (a.flags |= 2048),
          pi(He),
          fe(a),
          null
        );
      case 25:
        return null;
      case 30:
        return ((a.flags |= 33554432), fe(a), null);
    }
    throw Error(h(156, a.tag));
  }
  function jk(e, a) {
    switch ((Bs(a), a.tag)) {
      case 1:
        return (
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 3:
        return (
          pi(He),
          An(),
          (e = a.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((a.flags = (e & -65537) | 128), a)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (pt(a), null);
      case 31:
        if (a.memoizedState !== null) {
          if ((ma(a), a.alternate === null)) throw Error(h(340));
          tn();
        }
        return (
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 13:
        if (
          (ma(a), (e = a.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (a.alternate === null) throw Error(h(340));
          tn();
        }
        return (
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 19:
        return (
          Fs(a),
          (e = a.flags),
          e & 65536
            ? ((a.flags = (e & -65537) | 128),
              (e = a.memoizedState),
              e !== null && ((e.rendering = null), (e.tail = null)),
              (a.flags |= 4),
              a)
            : null
        );
      case 4:
        return (An(), null);
      case 10:
        return (pi(a.type), null);
      case 22:
      case 23:
        return (
          ma(a),
          Ms(),
          e !== null && Ue(on),
          (e = a.flags),
          e & 65536 ? ((a.flags = (e & -65537) | 128), a) : null
        );
      case 24:
        return (pi(He), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dc(e, a) {
    switch ((Bs(a), a.tag)) {
      case 3:
        (pi(He), An());
        break;
      case 26:
      case 27:
      case 5:
        pt(a);
        break;
      case 4:
        An();
        break;
      case 31:
        a.memoizedState !== null && ma(a);
        break;
      case 13:
        ma(a);
        break;
      case 19:
        Fs(a);
        break;
      case 10:
        pi(a.type);
        break;
      case 22:
      case 23:
        (ma(a), Ms(), e !== null && Ue(on));
        break;
      case 24:
        pi(He);
    }
  }
  function Yl(e, a) {
    try {
      var i = a.updateQueue,
        n = i !== null ? i.lastEffect : null;
      if (n !== null) {
        var l = n.next;
        i = l;
        do {
          if ((i.tag & e) === e) {
            n = void 0;
            var t = i.create,
              r = i.inst;
            ((n = t()), (r.destroy = n));
          }
          i = i.next;
        } while (i !== l);
      }
    } catch (s) {
      oe(a, a.return, s);
    }
  }
  function Pi(e, a, i) {
    try {
      var n = a.updateQueue,
        l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var t = l.next;
        n = t;
        do {
          if ((n.tag & e) === e) {
            var r = n.inst,
              s = r.destroy;
            if (s !== void 0) {
              ((r.destroy = void 0), (l = a));
              var b = i,
                u = s;
              try {
                u();
              } catch (v) {
                oe(l, b, v);
              }
            }
          }
          n = n.next;
        } while (n !== t);
      }
    } catch (v) {
      oe(a, a.return, v);
    }
  }
  function oc(e) {
    var a = e.updateQueue;
    if (a !== null) {
      var i = e.stateNode;
      try {
        Wo(a, i);
      } catch (n) {
        oe(e, e.return, n);
      }
    }
  }
  function pc(e, a, i) {
    ((i.props = kn(e.type, e.memoizedProps)), (i.state = e.memoizedState));
    try {
      i.componentWillUnmount();
    } catch (n) {
      oe(e, a, n);
    }
  }
  function $a(e, a) {
    try {
      var i = e.ref;
      if (i !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var n = e.stateNode;
            break;
          case 30:
            var l = e.stateNode,
              t = ri(e.memoizedProps, l);
            ((l.ref === null || l.ref.name !== t) && (l.ref = yu(t)),
              (n = l.ref));
            break;
          case 7:
            if (e.stateNode === null) {
              var r = new fa(e);
              (y(e.child, !1, Mh, r, void 0, void 0), (e.stateNode = r));
            }
            n = e.stateNode;
            break;
          default:
            n = e.stateNode;
        }
        typeof i == "function" ? (e.refCleanup = i(n)) : (i.current = n);
      }
    } catch (s) {
      oe(e, a, s);
    }
  }
  function Ve(e, a) {
    var i = e.ref,
      n = e.refCleanup;
    if (i !== null)
      if (typeof n == "function")
        try {
          n();
        } catch (l) {
          oe(e, a, l);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof i == "function")
        try {
          i(null);
        } catch (l) {
          oe(e, a, l);
        }
      else i.current = null;
  }
  function sr(e, a) {
    if (
      (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
      e.alternate === null &&
      a !== null
    )
      for (var i = 0; i < a.length; i++) Bu(e.stateNode, a[i]);
  }
  function cc(e) {
    for (
      var a = e.return;
      a !== null && (vb(a) && Bu(e.stateNode, a.stateNode), !hb(a));
    )
      a = a.return;
  }
  function Vl(e) {
    for (
      var a = e.return;
      a !== null && (vb(a) && Uh(e.stateNode, a.stateNode), !hb(a));
    )
      a = a.return;
  }
  function hb(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function vb(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function yb(e) {
    var a = e.type,
      i = e.memoizedProps,
      n = e.stateNode;
    try {
      e: switch (a) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          i.autoFocus && n.focus();
          break e;
        case "img":
          i.src ? (n.src = i.src) : i.srcSet && (n.srcset = i.srcSet);
      }
    } catch (l) {
      oe(e, e.return, l);
    }
  }
  function fb(e, a, i) {
    try {
      var n = e.stateNode;
      (gh(n, e.type, i, a), (n[ea] = a));
    } catch (l) {
      oe(e, e.return, l);
    }
  }
  function uc(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && Gi(e.type)) ||
      e.tag === 4
    );
  }
  function gb(e) {
    e: for (;;) {
      for (; e.sibling === null;) {
        if (e.return === null || uc(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && Gi(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function zb(e, a, i, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((l = e.stateNode),
        a
          ? (i.nodeType === 9
              ? i.body
              : i.nodeName === "HTML"
                ? i.ownerDocument.body
                : i
            ).insertBefore(l, a)
          : ((a =
              i.nodeType === 9
                ? i.body
                : i.nodeName === "HTML"
                  ? i.ownerDocument.body
                  : i),
            a.appendChild(l),
            (i = i._reactRootContainer),
            i != null || a.onclick !== null || (a.onclick = Va)),
        sr(e, n),
        (ae = !0));
    else if (
      l !== 4 &&
      (l === 27 &&
        (sr(e, n), (n = null), Gi(e.type) && ((i = e.stateNode), (a = null))),
      (e = e.child),
      e !== null)
    )
      for (zb(e, a, i, n), e = e.sibling; e !== null;)
        (zb(e, a, i, n), (e = e.sibling));
  }
  function br(e, a, i, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      ((l = e.stateNode),
        a ? i.insertBefore(l, a) : i.appendChild(l),
        sr(e, n),
        (ae = !0));
    else if (
      l !== 4 &&
      (l === 27 && (sr(e, n), (n = null), Gi(e.type) && (i = e.stateNode)),
      (e = e.child),
      e !== null)
    )
      for (br(e, a, i, n), e = e.sibling; e !== null;)
        (br(e, a, i, n), (e = e.sibling));
  }
  function mc(e) {
    var a = e.stateNode,
      i = e.memoizedProps;
    try {
      for (var n = e.type, l = a.attributes; l.length;)
        a.removeAttributeNode(l[0]);
      (Ke(a, n, i), (a[Fe] = e), (a[ea] = i));
    } catch (t) {
      oe(e, e.return, t);
    }
  }
  var dr = !1,
    ka = null;
  function kc(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (dr = !0);
  }
  var ja = null;
  function hc() {
    var e = ja;
    return ((ja = null), e);
  }
  var ia = 0;
  function _n(e, a, i, n, l) {
    return ((ia = 0), vc(e.child, a, i, n, l));
  }
  function vc(e, a, i, n, l) {
    for (var t = !1; e !== null;) {
      if (e.tag === 5) {
        var r = e.stateNode;
        if (n !== null) {
          var s = ld(r);
          (n.push(s), s.view && (t = !0));
        } else t || (ld(r).view && (t = !0));
        ((dr = !0), hu(r, ia === 0 ? a : a + "_" + ia, i), ia++);
      } else
        (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && l) || (vc(e.child, a, i, n, l) && (t = !0)));
      e = e.sibling;
    }
    return t;
  }
  function Qa(e, a) {
    for (; e !== null;)
      (e.tag === 5
        ? vu(e.stateNode, e.memoizedProps)
        : (e.tag !== 22 || e.memoizedState === null) &&
          ((e.tag === 30 && a) || Qa(e.child, a)),
        (e = e.sibling));
  }
  function or(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (
          (e.tag !== 22 || e.memoizedState === null) &&
          (or(e),
          e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)
        ) {
          var a = e.memoizedProps;
          if (a.name == null || a.name === "auto") throw Error(h(544));
          var i = a.name;
          ((a = si(a.default, a.share)),
            a !== "none" && (_n(e, i, a, null, !1) || Qa(e.child, !1)));
        }
        e = e.sibling;
      }
  }
  function Ab(e, a) {
    if (e.tag === 30) {
      var i = e.stateNode,
        n = e.memoizedProps,
        l = ri(n, i),
        t = si(n.default, i.paired ? n.share : n.enter);
      t !== "none"
        ? _n(e, l, t, null, !1)
          ? (or(e), i.paired || a || el(e, n.onEnter))
          : Qa(e.child, !1)
        : or(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Ab(e, a), (e = e.sibling));
    else or(e);
  }
  function Cb(e) {
    if (ka !== null && ka.size !== 0) {
      var a = ka;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var i = e.memoizedProps,
                n = i.name;
              if (n != null && n !== "auto") {
                var l = a.get(n);
                if (l !== void 0) {
                  var t = si(i.default, i.share);
                  if (
                    (t !== "none" &&
                      (_n(e, n, t, null, !1)
                        ? ((t = e.stateNode),
                          (l.paired = t),
                          (t.paired = l),
                          el(e, i.onShare))
                        : Qa(e.child, !1)),
                    a.delete(n),
                    a.size === 0)
                  )
                    break;
                }
              }
            }
            Cb(e);
          }
          e = e.sibling;
        }
    }
  }
  function Bb(e) {
    if (e.tag === 30) {
      var a = e.memoizedProps,
        i = ri(a, e.stateNode),
        n = ka !== null ? ka.get(i) : void 0,
        l = si(a.default, n !== void 0 ? a.share : a.exit);
      (l !== "none" &&
        (_n(e, i, l, null, !1)
          ? n !== void 0
            ? ((l = e.stateNode),
              (n.paired = l),
              (l.paired = n),
              ka.delete(i),
              el(e, a.onShare))
            : el(e, a.onExit)
          : Qa(e.child, !1)),
        ka !== null && Cb(e));
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (Bb(e), (e = e.sibling));
    else ka !== null && Cb(e);
  }
  function yc(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var a = e.memoizedProps,
          i = ri(a, e.stateNode);
        ((a = si(a.default, a.update)),
          (e.flags &= -5),
          a !== "none" && _n(e, i, a, (e.memoizedState = []), !1));
      } else (e.subtreeFlags & 33554432) !== 0 && yc(e);
      e = e.sibling;
    }
  }
  function Sb(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var a = e.stateNode;
            a.paired !== null && ((a.paired = null), Qa(e.child, !1));
          }
          Sb(e);
        }
        e = e.sibling;
      }
  }
  function pr(e) {
    if (e.tag === 30) ((e.stateNode.paired = null), Qa(e.child, !1), Sb(e));
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null;) (pr(e), (e = e.sibling));
    else Sb(e);
  }
  function fc(e) {
    for (e = e.child; e !== null;)
      (e.tag === 30
        ? Qa(e.child, !1)
        : (e.subtreeFlags & 33554432) !== 0 && fc(e),
        (e = e.sibling));
  }
  function Ob(e, a, i, n, l, t, r) {
    for (var s = !1; a !== null;) {
      if (a.tag === 5) {
        var b = a.stateNode;
        if (t !== null && ia < t.length) {
          var u = t[ia],
            v = ld(b);
          (u.view || v.view) && (s = !0);
          var z;
          if ((z = (e.flags & 4) === 0))
            if (v.clip) z = !0;
            else {
              z = u.rect;
              var p = v.rect;
              z =
                z.y !== p.y ||
                z.x !== p.x ||
                z.height !== p.height ||
                z.width !== p.width;
            }
          (z && (e.flags |= 4),
            v.abs
              ? (v = !u.abs)
              : ((u = u.rect),
                (v = v.rect),
                (v = u.height !== v.height || u.width !== v.width)),
            v && (e.flags |= 32));
        } else e.flags |= 32;
        ((e.flags & 4) !== 0 && hu(b, ia === 0 ? i : i + "_" + ia, l),
          (s && (e.flags & 4) !== 0) ||
            (ja === null && (ja = []),
            ja.push(b, ia === 0 ? n : n + "_" + ia, a.memoizedProps)),
          ia++);
      } else
        (a.tag !== 22 || a.memoizedState === null) &&
          (a.tag === 30 && r
            ? (e.flags |= a.flags & 32)
            : Ob(e, a.child, i, n, l, t, r) && (s = !0));
      a = a.sibling;
    }
    return s;
  }
  function gc(e, a) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var i = e.memoizedProps,
          n = e.stateNode,
          l = ri(i, n),
          t = si(i.default, i.update),
          r;
        ((r = e.memoizedState), (e.memoizedState = null), (n = e));
        var s = e.child;
        ((ia = 0),
          (l = Ob(n, s, l, l, t, r, !1)),
          (e.flags & 4) !== 0 && l && el(e, i.onUpdate));
      } else (e.subtreeFlags & 33554432) !== 0 && gc(e);
      e = e.sibling;
    }
  }
  var Le = !1,
    se = !1,
    Xa = !1,
    wb = !1,
    zc = typeof WeakSet == "function" ? WeakSet : Set,
    Me = null,
    Za = !1,
    Kl = !1,
    cr = !1,
    Eb = !1;
  function Qk(e, a, i) {
    if (((e = e.containerInfo), (Wb = ol), (e = So(e)), ms(e))) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd,
        };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var t = l.anchorOffset,
              r = l.focusNode;
            l = l.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break e;
            }
            var s = 0,
              b = -1,
              u = -1,
              v = 0,
              z = 0,
              p = e,
              k = null;
            a: for (;;) {
              for (
                var C;
                p !== n || (t !== 0 && p.nodeType !== 3) || (b = s + t),
                  p !== r || (l !== 0 && p.nodeType !== 3) || (u = s + l),
                  p.nodeType === 3 && (s += p.nodeValue.length),
                  (C = p.firstChild) !== null;
              )
                ((k = p), (p = C));
              for (;;) {
                if (p === e) break a;
                if (
                  (k === n && ++v === t && (b = s),
                  k === r && ++z === l && (u = s),
                  (C = p.nextSibling) !== null)
                )
                  break;
                ((p = k), (k = p.parentNode));
              }
              p = C;
            }
            n =
              b === -1 || u === -1
                ? null
                : {
                    start: b,
                    end: u,
                  };
          } else n = null;
        }
      n = n || {
        start: 0,
        end: 0,
      };
    } else n = null;
    for (
      ed = {
        focusedElem: e,
        selectionRange: n,
      },
        ol = !1,
        i = (i & 335544064) === i,
        Me = a,
        a = i ? 9270 : 1024;
      Me !== null;
    ) {
      if (((e = Me), i && ((n = e.deletions), n !== null)))
        for (t = 0; t < n.length; t++) i && Bb(n[t]);
      if (e.alternate === null && (e.flags & 2) !== 0) (i && kc(e), ur(i));
      else {
        if (e.tag === 22) {
          if (((n = e.alternate), e.memoizedState !== null)) {
            (n !== null && n.memoizedState === null && i && Bb(n), ur(i));
            continue;
          } else if (n !== null && n.memoizedState !== null) {
            (i && kc(e), ur(i));
            continue;
          }
        }
        ((n = e.child),
          (e.subtreeFlags & a) !== 0 && n !== null
            ? ((n.return = e), (Me = n))
            : (i && yc(e), ur(i)));
      }
    }
    ka = null;
  }
  function ur(e) {
    for (; Me !== null;) {
      var a = Me,
        i = e,
        n = a.alternate,
        l = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && n !== null) {
            ((i = void 0), (l = n.memoizedProps), (n = n.memoizedState));
            var t = a.stateNode;
            try {
              var r = kn(a.type, l);
              ((i = t.getSnapshotBeforeUpdate(r, n)),
                (t.__reactInternalSnapshotBeforeUpdate = i));
            } catch (s) {
              oe(a, a.return, s);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (((n = a.stateNode.containerInfo), (i = n.nodeType), i === 9))
              sd(n);
            else if (i === 1)
              switch (n.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  sd(n);
                  break;
                default:
                  n.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          i &&
            n !== null &&
            ((i = ri(n.memoizedProps, n.stateNode)),
            (l = a.memoizedProps),
            (l = si(l.default, l.update)),
            l !== "none" && _n(n, i, l, (n.memoizedState = []), !0));
          break;
        default:
          if ((l & 1024) !== 0) throw Error(h(163));
      }
      if (((n = a.sibling), n !== null)) {
        ((n.return = a.return), (Me = n));
        break;
      }
      Me = a.return;
    }
  }
  function Ac(e, a, i) {
    var n = i.flags;
    switch (i.tag) {
      case 0:
      case 11:
      case 15:
        (Ja(e, i), n & 4 && Yl(5, i));
        break;
      case 1:
        if ((Ja(e, i), n & 4))
          if (((e = i.stateNode), a === null))
            try {
              e.componentDidMount();
            } catch (r) {
              oe(i, i.return, r);
            }
          else {
            var l = kn(i.type, a.memoizedProps);
            a = a.memoizedState;
            try {
              e.componentDidUpdate(l, a, e.__reactInternalSnapshotBeforeUpdate);
            } catch (r) {
              oe(i, i.return, r);
            }
          }
        (n & 64 && oc(i), n & 512 && $a(i, i.return));
        break;
      case 3:
        if ((Ja(e, i), n & 64 && ((e = i.updateQueue), e !== null))) {
          if (((a = null), i.child !== null))
            switch (i.child.tag) {
              case 27:
              case 5:
                a = i.child.stateNode;
                break;
              case 1:
                a = i.child.stateNode;
            }
          try {
            Wo(e, a);
          } catch (r) {
            oe(i, i.return, r);
          }
        }
        break;
      case 27:
        a === null && n & 4 && mc(i);
      case 26:
      case 5:
        (Ja(e, i), a === null && n & 4 && yb(i), n & 512 && $a(i, i.return));
        break;
      case 12:
        Ja(e, i);
        break;
      case 31:
        (Ja(e, i), n & 4 && Oc(e, i));
        break;
      case 13:
        (Ja(e, i),
          n & 4 && wc(e, i),
          n & 64 &&
            ((e = i.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((i = sh.bind(null, i)), Gh(e, i)))));
        break;
      case 22:
        if (((n = i.memoizedState !== null || Le), !n)) {
          var t = (a !== null && a.memoizedState !== null) || se;
          ((a = Le),
            (l = se),
            (Le = n),
            (se = t) && !l
              ? ((n = 2),
                (i.subtreeFlags & 8772) !== 0 && (n |= 1),
                qa(e, i, n))
              : Ja(e, i),
            (Le = a),
            (se = l));
        }
        break;
      case 30:
        (Ja(e, i), n & 512 && $a(i, i.return));
        break;
      case 7:
        n & 512 && $a(i, i.return);
      default:
        Ja(e, i);
    }
  }
  function Hb(e, a) {
    for (e = e.child; e !== null;) (Cc(e, a), (e = e.sibling));
  }
  function Cc(e, a) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var i = e.stateNode;
          if (a) {
            var n = i.style;
            typeof n.setProperty == "function"
              ? n.setProperty("display", "none", "important")
              : (n.display = "none");
          } else {
            var l = e.stateNode,
              t = e.memoizedProps.style,
              r = t != null && t.hasOwnProperty("display") ? t.display : null;
            l.style.display =
              r == null || typeof r == "boolean" ? "" : ("" + r).trim();
          }
        } catch (b) {
          oe(e, e.return, b);
        }
        Tb(e, a);
        break;
      case 6:
        try {
          ((e.stateNode.nodeValue = a ? "" : e.memoizedProps), (ae = !0));
        } catch (b) {
          oe(e, e.return, b);
        }
        break;
      case 18:
        try {
          var s = e.stateNode;
          a ? ku(s, !0) : ku(e.stateNode, !1);
        } catch (b) {
          oe(e, e.return, b);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Hb(e, a);
        break;
      default:
        Hb(e, a);
    }
  }
  function Tb(e, a) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null;) {
        e: {
          var i = e,
            n = a;
          switch (i.tag) {
            case 4:
              Cc(i, n);
              break e;
            case 22:
              i.memoizedState === null && Tb(i, n);
              break e;
            default:
              Tb(i, n);
          }
        }
        e = e.sibling;
      }
  }
  function Bc(e) {
    var a = e.alternate;
    (a !== null && ((e.alternate = null), Bc(a)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((a = e.stateNode), a !== null && yt(a)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Ae = null,
    na = !1;
  function Ra(e, a, i) {
    for (i = i.child; i !== null;) (Sc(e, a, i), (i = i.sibling));
  }
  function Sc(e, a, i) {
    if (oa && typeof oa.onCommitFiberUnmount == "function")
      try {
        oa.onCommitFiberUnmount(ml, i);
      } catch {}
    switch (i.tag) {
      case 26:
        (se || Ve(i, a),
          Ra(e, a, i),
          i.memoizedState
            ? i.memoizedState.count--
            : i.stateNode &&
              !se &&
              ((i = i.stateNode), i.parentNode.removeChild(i)));
        break;
      case 27:
        (se || Ve(i, a), Vl(i));
        var n = Ae,
          l = na;
        (Gi(i.type) && ((Ae = i.stateNode), (na = !1)),
          Ra(e, a, i),
          Hu(i.stateNode, i.type, i.memoizedProps),
          (Ae = n),
          (na = l));
        break;
      case 5:
        (se || Ve(i, a), Vl(i));
      case 6:
        if (
          (i.tag === 6 && Vl(i),
          (n = Ae),
          (l = na),
          (Ae = null),
          Ra(e, a, i),
          (Ae = n),
          (na = l),
          Ae !== null)
        )
          if (na)
            try {
              ((Ae.nodeType === 9
                ? Ae.body
                : Ae.nodeName === "HTML"
                  ? Ae.ownerDocument.body
                  : Ae
              ).removeChild(i.stateNode),
                (ae = !0));
            } catch (t) {
              oe(i, a, t);
            }
          else
            try {
              (Ae.removeChild(i.stateNode), (ae = !0));
            } catch (t) {
              oe(i, a, t);
            }
        break;
      case 18:
        Ae !== null &&
          (na
            ? ((e = Ae),
              mu(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                i.stateNode,
              ),
              pl(e))
            : mu(Ae, i.stateNode));
        break;
      case 4:
        ((n = Ae),
          (l = na),
          (Ae = i.stateNode.containerInfo),
          (na = !0),
          Ra(e, a, i),
          (Ae = n),
          (na = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Pi(2, i, a), se || Pi(4, i, a), Ra(e, a, i));
        break;
      case 1:
        (se ||
          (Ve(i, a),
          (n = i.stateNode),
          typeof n.componentWillUnmount == "function" && pc(i, a, n)),
          Ra(e, a, i));
        break;
      case 21:
        Ra(e, a, i);
        break;
      case 22:
        ((se = (n = se) || i.memoizedState !== null), Ra(e, a, i), (se = n));
        break;
      case 30:
        (Ve(i, a), Ra(e, a, i));
        break;
      case 7:
        (se || Ve(i, a), Ra(e, a, i));
        break;
      default:
        Ra(e, a, i);
    }
  }
  function Oc(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        pl(e);
      } catch (i) {
        oe(a, a.return, i);
      }
    }
  }
  function wc(e, a) {
    if (
      a.memoizedState === null &&
      ((e = a.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        pl(e);
      } catch (i) {
        oe(a, a.return, i);
      }
  }
  function Xk(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var a = e.stateNode;
        return (a === null && (a = e.stateNode = new zc()), a);
      case 22:
        return (
          (e = e.stateNode),
          (a = e._retryCache),
          a === null && (a = e._retryCache = new zc()),
          a
        );
      default:
        throw Error(h(435, e.tag));
    }
  }
  function mr(e, a) {
    var i = Xk(e);
    a.forEach(function (n) {
      if (!i.has(n)) {
        i.add(n);
        var l = bh.bind(null, e, n);
        n.then(l, l);
      }
    });
  }
  function Ze(e, a, i) {
    var n = a.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var t = n[l],
          r = e,
          s = a,
          b = s;
        e: for (; b !== null;) {
          switch (b.tag) {
            case 27:
              if (Gi(b.type)) {
                ((Ae = b.stateNode), (na = !1));
                break e;
              }
              break;
            case 5:
              ((Ae = b.stateNode), (na = !1));
              break e;
            case 3:
            case 4:
              ((Ae = b.stateNode.containerInfo), (na = !0));
              break e;
          }
          b = b.return;
        }
        if (Ae === null) throw Error(h(160));
        (Sc(r, s, t),
          (Ae = null),
          (na = !1),
          (r = t.alternate),
          r !== null && (r.return = null),
          (t.return = null));
      }
    if (a.subtreeFlags & 13886)
      for (a = a.child; a !== null;) (Ec(a, e, i), (a = a.sibling));
  }
  var Pa = null;
  function Ec(e, a, i) {
    var n = e.alternate,
      l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          l & 4 &&
          ((n = e.updateQueue), (n = n !== null ? n.events : null), n !== null)
        )
          for (var t = 0; t < n.length; t++) {
            var r = n[t];
            r.ref.impl = r.nextImpl;
          }
        (Ze(a, e, i),
          Je(e),
          l & 4 && (Pi(3, e, e.return), Yl(3, e), Pi(5, e, e.return)));
        break;
      case 1:
        (Ze(a, e, i),
          Je(e),
          l & 512 && (se || n === null || Ve(n, n.return)),
          l & 64 &&
            Le &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((i = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = i === null ? a : i.concat(a))))));
        break;
      case 26:
        if (
          ((t = Pa),
          Ze(a, e, i),
          Je(e),
          l & 512 && (se || n === null || Ve(n, n.return)),
          l & 4)
        )
          if (
            ((l = n !== null ? n.memoizedState : null),
            (i = e.memoizedState),
            n === null)
          ) {
            if (i === null) {
              if (e.stateNode === null) {
                if (Le)
                  e.stateNode = pu(e.type, e.memoizedProps, a.containerInfo, e);
                else {
                  e: {
                    ((a = e.type),
                      (i = e.memoizedProps),
                      (l = t.ownerDocument || t));
                    a: switch (a) {
                      case "title":
                        ((n = l.getElementsByTagName("title")[0]),
                          (!n ||
                            n[vl] ||
                            n[Fe] ||
                            n.namespaceURI === "http://www.w3.org/2000/svg" ||
                            n.hasAttribute("itemprop")) &&
                            ((n = l.createElement(a)),
                            l.head.insertBefore(
                              n,
                              l.querySelector("head > title"),
                            )),
                          Ke(n, a, i),
                          (n[Fe] = e),
                          Pe(n),
                          (a = n));
                        break e;
                      case "link":
                        if (
                          (t = Pu("link", "href", l).get(a + (i.href || "")))
                        ) {
                          for (r = 0; r < t.length; r++)
                            if (
                              ((n = t[r]),
                              n.getAttribute("href") ===
                                (i.href == null || i.href === ""
                                  ? null
                                  : i.href) &&
                                n.getAttribute("rel") ===
                                  (i.rel == null ? null : i.rel) &&
                                n.getAttribute("title") ===
                                  (i.title == null ? null : i.title) &&
                                n.getAttribute("crossorigin") ===
                                  (i.crossOrigin == null
                                    ? null
                                    : i.crossOrigin))
                            ) {
                              t.splice(r, 1);
                              break a;
                            }
                        }
                        ((n = l.createElement(a)),
                          Ke(n, a, i),
                          l.head.appendChild(n));
                        break;
                      case "meta":
                        if (
                          (t = Pu("meta", "content", l).get(
                            a + (i.content || ""),
                          ))
                        ) {
                          for (r = 0; r < t.length; r++)
                            if (
                              ((n = t[r]),
                              n.getAttribute("content") ===
                                (i.content == null ? null : "" + i.content) &&
                                n.getAttribute("name") ===
                                  (i.name == null ? null : i.name) &&
                                n.getAttribute("property") ===
                                  (i.property == null ? null : i.property) &&
                                n.getAttribute("http-equiv") ===
                                  (i.httpEquiv == null ? null : i.httpEquiv) &&
                                n.getAttribute("charset") ===
                                  (i.charSet == null ? null : i.charSet))
                            ) {
                              t.splice(r, 1);
                              break a;
                            }
                        }
                        ((n = l.createElement(a)),
                          Ke(n, a, i),
                          l.head.appendChild(n));
                        break;
                      default:
                        throw Error(h(468, a));
                    }
                    ((n[Fe] = e), Pe(n), (a = n));
                  }
                  e.stateNode = a;
                }
              } else Le || md(t, e.type, e.stateNode);
            } else e.stateNode = Ru(t, i, e.memoizedProps);
          } else
            l !== i
              ? (l === null
                  ? ((a = n.stateNode),
                    a === null || se || a.parentNode.removeChild(a))
                  : l.count--,
                i === null
                  ? Le || md(t, e.type, e.stateNode)
                  : Ru(t, i, e.memoizedProps))
              : i === null &&
                e.stateNode !== null &&
                fb(e, e.memoizedProps, n.memoizedProps);
        break;
      case 27:
        (Ze(a, e, i),
          Je(e),
          l & 512 && (se || n === null || Ve(n, n.return)),
          n !== null && l & 4 && fb(e, e.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          ((t = Xa),
          (Xa = !1),
          Ze(a, e, i),
          (Xa = t),
          Je(e),
          l & 512 && (se || n === null || Ve(n, n.return)),
          e.flags & 32)
        ) {
          a = e.stateNode;
          try {
            (En(a, ""), (ae = !0));
          } catch (v) {
            oe(e, e.return, v);
          }
        }
        (l & 4 &&
          e.stateNode != null &&
          ((a = e.memoizedProps), fb(e, a, n !== null ? n.memoizedProps : a)),
          l & 1024 && (wb = !0));
        break;
      case 6:
        if ((Ze(a, e, i), Je(e), l & 4)) {
          if (e.stateNode === null) throw Error(h(162));
          ((a = e.memoizedProps), (i = e.stateNode));
          try {
            ((i.nodeValue = a), (ae = !0));
          } catch (v) {
            oe(e, e.return, v);
          }
        }
        break;
      case 3:
        if (
          ((ae = !1),
          (Hr = null),
          (t = Pa),
          (Pa = et(a.containerInfo)),
          Ze(a, e, i),
          (Pa = t),
          Je(e),
          l & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            pl(a.containerInfo);
          } catch (v) {
            oe(e, e.return, v);
          }
        (wb && ((wb = !1), Hc(e)), (ae = !1));
        break;
      case 4:
        ((l = Xa),
          (Xa = Le),
          (n = jd()),
          (t = Pa),
          (Pa = et(e.stateNode.containerInfo)),
          Ze(a, e, i),
          Je(e),
          (Pa = t),
          ae && Kl && (cr = !0),
          (ae = n),
          (Xa = l));
        break;
      case 12:
        (Ze(a, e, i), Je(e));
        break;
      case 31:
        (Ze(a, e, i),
          Je(e),
          l & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), mr(e, a))));
        break;
      case 13:
        (Ze(a, e, i),
          Je(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (vr = da()),
          l & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), mr(e, a))));
        break;
      case 22:
        ((t = e.memoizedState !== null),
          (r = n !== null && n.memoizedState !== null));
        var s = Le,
          b = se,
          u = Xa;
        ((Le = s || t),
          (Xa = u || t),
          (se = b || r),
          Ze(a, e, i),
          (se = b),
          (Xa = u),
          (Le = s),
          Je(e),
          l & 8192 &&
            ((a = e.stateNode),
            (a._visibility = t ? a._visibility & -2 : a._visibility | 1),
            !t ||
              n === null ||
              r ||
              Le ||
              se ||
              ((a = r || se),
              (i = Le),
              (n = se),
              (Le = t || Le),
              (se = a),
              qi(e, 2),
              (Le = i),
              (se = n)),
            (!t && Xa) || Hb(e, t)),
          l & 4 &&
            ((a = e.updateQueue),
            a !== null &&
              ((i = a.retryQueue),
              i !== null && ((a.retryQueue = null), mr(e, i)))));
        break;
      case 19:
        (Ze(a, e, i),
          Je(e),
          l & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), mr(e, a))));
        break;
      case 30:
        (l & 512 && (se || n === null || Ve(n, n.return)),
          (l = jd()),
          (t = Kl),
          (r = (i & 335544064) === i),
          (s = e.memoizedProps),
          (Kl = r && si(s.default, s.update) !== "none"),
          Ze(a, e, i),
          Je(e),
          r && n !== null && ae && (e.flags |= 4),
          (Kl = t),
          (ae = l));
        break;
      case 21:
        break;
      case 7:
        (l & 512 && (se || n === null || Ve(n, n.return)),
          n && n.stateNode !== null && (n.stateNode._fragmentFiber = e));
      default:
        (Ze(a, e, i), Je(e));
    }
  }
  function Je(e) {
    var a = e.flags;
    if (a & 2) {
      try {
        for (var i, n = e.return; n !== null;) {
          if (uc(n)) {
            i = n;
            break;
          }
          n = n.return;
        }
        n = null;
        for (var l = e.return; l !== null;) {
          if (vb(l)) {
            var t = l.stateNode;
            n === null ? (n = [t]) : n.push(t);
          }
          if (hb(l)) break;
          l = l.return;
        }
        var r = n;
        if (i == null) throw Error(h(160));
        switch (i.tag) {
          case 27:
            var s = i.stateNode,
              b = gb(e);
            br(e, b, s, r);
            break;
          case 5:
            var u = i.stateNode;
            i.flags & 32 && (En(u, ""), (i.flags &= -33));
            var v = gb(e);
            br(e, v, u, r);
            break;
          case 3:
          case 4:
            var z = i.stateNode.containerInfo,
              p = gb(e);
            zb(e, p, z, r);
            break;
          default:
            throw Error(h(161));
        }
      } catch (k) {
        oe(e, e.return, k);
      }
      e.flags &= -3;
    }
    a & 4096 && (e.flags &= -4097);
  }
  function Hc(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null;) {
        var a = e;
        (Hc(a),
          a.tag === 5 &&
            a.flags & 1024 &&
            ((a = a.stateNode), (ol = !0), a.reset(), (ol = !1)),
          (e = e.sibling));
      }
  }
  function $n(e, a) {
    if (a.subtreeFlags & 9270)
      for (a = a.child; a !== null;) (Tc(a, e), (a = a.sibling));
    else gc(a);
  }
  function Tc(e, a) {
    var i = e.alternate;
    if (i === null) Ab(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (((Eb = Za = !1), hc(), $n(a, e), !Za && !cr)) {
            if (((e = ja), e !== null))
              for (var n = 0; n < e.length; n += 3) {
                i = e[n];
                var l = e[n + 1];
                (vu(i, e[n + 2]),
                  (i = i.ownerDocument.documentElement),
                  i !== null &&
                    i.animate(
                      {
                        opacity: [0, 0],
                        pointerEvents: ["none", "none"],
                      },
                      {
                        duration: 0,
                        fill: "forwards",
                        pseudoElement: "::view-transition-group(" + l + ")",
                      },
                    ));
              }
            ((e = a.containerInfo),
              (e =
                e.nodeType === 9
                  ? e.documentElement
                  : e.ownerDocument.documentElement),
              e !== null &&
                e.style.viewTransitionName === "" &&
                ((e.style.viewTransitionName = "none"),
                e.animate(
                  {
                    opacity: [0, 0],
                    pointerEvents: ["none", "none"],
                  },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(root)",
                  },
                ),
                e.animate(
                  {
                    width: [0, 0],
                    height: [0, 0],
                  },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition",
                  },
                )),
              (Eb = !0));
          }
          ja = null;
          break;
        case 5:
          $n(a, e);
          break;
        case 4:
          ((n = Za), (Za = !1), $n(a, e), Za && (cr = !0), (Za = n));
          break;
        case 22:
          e.memoizedState === null &&
            (i.memoizedState !== null ? Ab(e, !1) : $n(a, e));
          break;
        case 30:
          ((n = Za), (l = hc()), (Za = !1), $n(a, e), Za && (e.flags |= 4));
          var t = e.memoizedProps,
            r = e.stateNode;
          ((a = ri(t, r)), (r = ri(i.memoizedProps, r)));
          var s = si(t.default, t.update);
          (s === "none"
            ? (a = !1)
            : ((t = i.memoizedState),
              (i.memoizedState = null),
              (i = e.child),
              (ia = 0),
              (a = Ob(e, i, a, r, s, t, !0)),
              ia !== (t === null ? 0 : t.length) && (e.flags |= 32)),
            (e.flags & 4) !== 0 && a
              ? (el(e, e.memoizedProps.onUpdate), (ja = l))
              : l !== null && (l.push.apply(l, ja), (ja = l)),
            (Za = (e.flags & 32) !== 0 ? !0 : n));
          break;
        default:
          $n(a, e);
      }
  }
  function Ja(e, a) {
    if (a.subtreeFlags & 8772)
      for (a = a.child; a !== null;) (Ac(e, a.alternate, a), (a = a.sibling));
  }
  function qi(e, a) {
    for (e = e.child; e !== null;) {
      var i = e,
        n = a;
      switch (i.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Pi(4, i, i.return), qi(i, n));
          break;
        case 1:
          Ve(i, i.return);
          var l = i.stateNode;
          (typeof l.componentWillUnmount == "function" && pc(i, i.return, l),
            qi(i, n));
          break;
        case 27:
          (n & 2) !== 0 && Hu(i.stateNode, i.type, i.memoizedProps);
        case 5:
          (Ve(i, i.return), (i.tag !== 5 && i.tag !== 27) || Vl(i), qi(i, n));
          break;
        case 6:
          Vl(i);
          break;
        case 26:
          (Ve(i, i.return),
            (l = i.stateNode),
            i.memoizedState !== null ||
              l === null ||
              se ||
              l.parentNode.removeChild(l),
            qi(i, n));
          break;
        case 22:
          i.memoizedState === null && qi(i, n);
          break;
        case 30:
          (Ve(i, i.return), qi(i, n));
          break;
        case 7:
          Ve(i, i.return);
        default:
          qi(i, n);
      }
      e = e.sibling;
    }
  }
  function qa(e, a, i) {
    for (
      i = (a.subtreeFlags & 8772) !== 0 ? i : i & -2, a = a.child;
      a !== null;
    ) {
      var n = a.alternate,
        l = e,
        t = a,
        r = t.flags,
        s = (i & 1) !== 0;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          (qa(l, t, i), Yl(4, t));
          break;
        case 1:
          if (
            (qa(l, t, i),
            (n = t),
            (l = n.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (v) {
              oe(n, n.return, v);
            }
          if (((n = t), (l = n.updateQueue), l !== null)) {
            var b = n.stateNode;
            try {
              var u = l.shared.hiddenCallbacks;
              if (u !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < u.length; l++)
                  Jo(u[l], b);
            } catch (v) {
              oe(n, n.return, v);
            }
          }
          (s && r & 64 && oc(t), $a(t, t.return));
          break;
        case 27:
          (i & 2) !== 0 && mc(t);
        case 5:
          ((t.tag !== 5 && t.tag !== 27) || cc(t),
            qa(l, t, i),
            s && n === null && r & 4 && yb(t),
            $a(t, t.return));
          break;
        case 6:
          cc(t);
          break;
        case 26:
          ((b = t.stateNode),
            t.memoizedState !== null ||
              b === null ||
              Le ||
              md(et(b.ownerDocument), t.type, b),
            qa(l, t, i),
            s && n === null && r & 4 && yb(t),
            $a(t, t.return));
          break;
        case 12:
          qa(l, t, i);
          break;
        case 31:
          (qa(l, t, i), s && r & 4 && Oc(l, t));
          break;
        case 13:
          (qa(l, t, i), s && r & 4 && wc(l, t));
          break;
        case 22:
          (t.memoizedState === null && qa(l, t, i), $a(t, t.return));
          break;
        case 30:
          (qa(l, t, i), $a(t, t.return));
          break;
        case 7:
          $a(t, t.return);
        default:
          qa(l, t, i);
      }
      a = a.sibling;
    }
  }
  function Db(e, a) {
    var i = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (i = e.memoizedState.cachePool.pool),
      (e = null),
      a.memoizedState !== null &&
        a.memoizedState.cachePool !== null &&
        (e = a.memoizedState.cachePool.pool),
      e !== i && (e != null && e.refCount++, i != null && Tl(i)));
  }
  function Nb(e, a) {
    ((e = null),
      a.alternate !== null && (e = a.alternate.memoizedState.cache),
      (a = a.memoizedState.cache),
      a !== e && (a.refCount++, e != null && Tl(e)));
  }
  function Ha(e, a, i, n) {
    var l = (i & 335544064) === i;
    if (a.subtreeFlags & (l ? 10262 : 10256))
      for (a = a.child; a !== null;) (Dc(e, a, i, n), (a = a.sibling));
    else l && fc(a);
  }
  function Dc(e, a, i, n) {
    var l = (i & 335544064) === i;
    l &&
      a.alternate === null &&
      a.return !== null &&
      a.return.alternate !== null &&
      pr(a);
    var t = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Ha(e, a, i, n), t & 2048 && Yl(9, a));
        break;
      case 1:
        Ha(e, a, i, n);
        break;
      case 3:
        (Ha(e, a, i, n),
          l &&
            Eb &&
            ((e = e.containerInfo),
            (e =
              e.nodeType === 9
                ? e.body
                : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e),
            e.style.viewTransitionName === "root" &&
              (e.style.viewTransitionName = ""),
            (e = e.ownerDocument.documentElement),
            e !== null &&
              e.style.viewTransitionName === "none" &&
              (e.style.viewTransitionName = "")),
          t & 2048 &&
            ((t = null),
            a.alternate !== null && (t = a.alternate.memoizedState.cache),
            (a = a.memoizedState.cache),
            a !== t && (a.refCount++, t != null && Tl(t))));
        break;
      case 12:
        if (t & 2048) {
          (Ha(e, a, i, n), (t = a.stateNode));
          try {
            var r = a.memoizedProps,
              s = r.id,
              b = r.onPostCommit;
            typeof b == "function" &&
              b(
                s,
                a.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (u) {
            oe(a, a.return, u);
          }
        } else Ha(e, a, i, n);
        break;
      case 31:
        Ha(e, a, i, n);
        break;
      case 13:
        Ha(e, a, i, n);
        break;
      case 23:
        break;
      case 22:
        ((r = a.stateNode),
          (s = a.alternate),
          a.memoizedState !== null
            ? (l && s !== null && s.memoizedState === null && pr(s),
              r._visibility & 2 ? Ha(e, a, i, n) : _l(e, a))
            : (l && s !== null && s.memoizedState !== null && pr(a),
              r._visibility & 2
                ? Ha(e, a, i, n)
                : ((r._visibility |= 2),
                  jn(e, a, i, n, (a.subtreeFlags & 10256) !== 0 || !1))),
          t & 2048 && Db(s, a));
        break;
      case 24:
        (Ha(e, a, i, n), t & 2048 && Nb(a.alternate, a));
        break;
      case 30:
        (l &&
          ((t = a.alternate), t !== null && (Qa(t.child, !0), Qa(a.child, !0))),
          Ha(e, a, i, n));
        break;
      default:
        Ha(e, a, i, n);
    }
  }
  function jn(e, a, i, n, l) {
    for (
      l = l && ((a.subtreeFlags & 10256) !== 0 || !1), a = a.child;
      a !== null;
    ) {
      var t = e,
        r = a,
        s = i,
        b = n,
        u = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (jn(t, r, s, b, l), Yl(8, r));
          break;
        case 23:
          break;
        case 22:
          var v = r.stateNode;
          (r.memoizedState !== null
            ? v._visibility & 2
              ? jn(t, r, s, b, l)
              : _l(t, r)
            : ((v._visibility |= 2), jn(t, r, s, b, l)),
            l && u & 2048 && Db(r.alternate, r));
          break;
        case 24:
          (jn(t, r, s, b, l), l && u & 2048 && Nb(r.alternate, r));
          break;
        default:
          jn(t, r, s, b, l);
      }
      a = a.sibling;
    }
  }
  function _l(e, a) {
    if (a.subtreeFlags & 10256)
      for (a = a.child; a !== null;) {
        var i = e,
          n = a,
          l = n.flags;
        switch (n.tag) {
          case 22:
            (_l(i, n), l & 2048 && Db(n.alternate, n));
            break;
          case 24:
            (_l(i, n), l & 2048 && Nb(n.alternate, n));
            break;
          default:
            _l(i, n);
        }
        a = a.sibling;
      }
  }
  var hn = 8192;
  function vn(e, a, i) {
    if (e.subtreeFlags & hn)
      for (e = e.child; e !== null;) (Nc(e, a, i), (e = e.sibling));
  }
  function Nc(e, a, i) {
    switch (e.tag) {
      case 26:
        (vn(e, a, i),
          e.flags & hn &&
            (e.memoizedState !== null
              ? iv(i, Pa, e.memoizedState, e.memoizedProps)
              : ((e = e.stateNode), (a & 335544128) === a && Uu(i, e))));
        break;
      case 5:
        (vn(e, a, i),
          e.flags & hn &&
            ((e = e.stateNode), (a & 335544128) === a && Uu(i, e)));
        break;
      case 3:
      case 4:
        var n = Pa;
        ((Pa = et(e.stateNode.containerInfo)), vn(e, a, i), (Pa = n));
        break;
      case 22:
        e.memoizedState === null &&
          ((n = e.alternate),
          n !== null && n.memoizedState !== null
            ? ((n = hn), (hn = 16777216), vn(e, a, i), (hn = n))
            : vn(e, a, i));
        break;
      case 30:
        if (
          (e.flags & hn) !== 0 &&
          ((n = e.memoizedProps.name), n != null && n !== "auto")
        ) {
          var l = e.stateNode;
          ((l.paired = null), ka === null && (ka = new Map()), ka.set(n, l));
        }
        vn(e, a, i);
        break;
      default:
        vn(e, a, i);
    }
  }
  function xc(e) {
    var a = e.alternate;
    if (a !== null && ((e = a.child), e !== null)) {
      a.child = null;
      do ((a = e.sibling), (e.sibling = null), (e = a));
      while (e !== null);
    }
  }
  function $l(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var n = a[i];
          ((Me = n), Pc(n, e));
        }
      xc(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (Rc(e), (e = e.sibling));
  }
  function Rc(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ($l(e), e.flags & 2048 && Pi(9, e, e.return));
        break;
      case 3:
        $l(e);
        break;
      case 12:
        $l(e);
        break;
      case 22:
        var a = e.stateNode;
        e.memoizedState !== null &&
        a._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((a._visibility &= -3), kr(e))
          : $l(e);
        break;
      default:
        $l(e);
    }
  }
  function kr(e) {
    var a = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (a !== null)
        for (var i = 0; i < a.length; i++) {
          var n = a[i];
          ((Me = n), Pc(n, e));
        }
      xc(e);
    }
    for (e = e.child; e !== null;) {
      switch (((a = e), a.tag)) {
        case 0:
        case 11:
        case 15:
          (Pi(8, a, a.return), kr(a));
          break;
        case 22:
          ((i = a.stateNode),
            i._visibility & 2 && ((i._visibility &= -3), kr(a)));
          break;
        default:
          kr(a);
      }
      e = e.sibling;
    }
  }
  function Pc(e, a) {
    for (; Me !== null;) {
      var i = Me;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          Pi(8, i, a);
          break;
        case 23:
        case 22:
          if (i.memoizedState !== null && i.memoizedState.cachePool !== null) {
            var n = i.memoizedState.cachePool.pool;
            n != null && n.refCount++;
          }
          break;
        case 24:
          Tl(i.memoizedState.cache);
      }
      if (((n = i.child), n !== null)) ((n.return = i), (Me = n));
      else
        e: for (i = e; Me !== null;) {
          n = Me;
          var l = n.sibling,
            t = n.return;
          if ((Bc(n), n === i)) {
            Me = null;
            break e;
          }
          if (l !== null) {
            ((l.return = t), (Me = l));
            break e;
          }
          Me = t;
        }
    }
  }
  var Zk = {
      getCacheForType: function (e) {
        var a = Ie(He),
          i = a.data.get(e);
        return (i === void 0 && ((i = e()), a.data.set(e, i)), i);
      },
      cacheSignal: function () {
        return Ie(He).controller.signal;
      },
    },
    Jk = typeof WeakMap == "function" ? WeakMap : Map,
    te = 0,
    me = null,
    j = null,
    X = 0,
    de = 0,
    ha = null,
    Li = !1,
    Qn = !1,
    xb = !1,
    hi = 0,
    we = 0,
    Mi = 0,
    yn = 0,
    hr = 0,
    va = 0,
    Xn = 0,
    jl = null,
    la = null,
    Rb = !1,
    vr = 0,
    qc = 0,
    yr = 1 / 0,
    fr = null,
    Ui = null,
    Se = 0,
    La = null,
    fn = null,
    Wa = 0,
    Pb = 0,
    qb = null,
    Lc = null,
    Zn = null,
    Jn = null,
    Wn = null,
    Ql = 0,
    gr = null;
  function ya() {
    return (te & 2) !== 0 && X !== 0 ? X & -X : H.T !== null ? _b() : Ud();
  }
  function Mc() {
    if (va === 0)
      if ((X & 536870912) === 0 || K) {
        var e = mt;
        ((mt <<= 1), (mt & 3932160) === 0 && (mt = 262144), (va = e));
      } else va = 536870912;
    return ((e = Ge.current), e !== null && (e.flags |= 32), va);
  }
  function el(e, a) {
    if (a != null) {
      var i = e.stateNode,
        n = i.ref;
      (n === null && (n = i.ref = yu(ri(e.memoizedProps, i))),
        Jn === null && (Jn = []),
        Jn.push(a.bind(null, n)));
    }
  }
  function ta(e, a, i) {
    (((e === me && (de === 2 || de === 9)) || e.cancelPendingCommit !== null) &&
      (al(e, 0), Fi(e, X, va, !1)),
      hl(e, i),
      ((te & 2) === 0 || e !== me) &&
        (e === me &&
          ((te & 2) === 0 && (yn |= i), we === 4 && Fi(e, X, va, !1)),
        ei(e)));
  }
  function Uc(e, a, i) {
    if ((te & 6) !== 0) throw Error(h(327));
    var n = (!i && (a & 127) === 0 && (a & e.expiredLanes) === 0) || kl(e, a),
      l = n ? ah(e, a) : Mb(e, a, !0),
      t = n;
    do {
      if (l === 0) {
        Qn && !n && Fi(e, a, 0, !1);
        break;
      } else {
        if (((i = e.current.alternate), t && !Wk(i))) {
          ((l = Mb(e, a, !1)), (t = !1));
          continue;
        }
        if (l === 2) {
          if (((t = a), e.errorRecoveryDisabledLanes & t)) var r = 0;
          else
            ((r = e.pendingLanes & -536870913),
              (r = r !== 0 ? r : r & 536870912 ? 536870912 : 0));
          if (r !== 0) {
            a = r;
            e: {
              var s = e;
              l = jl;
              var b = s.current.memoizedState.isDehydrated;
              if (
                (b && (al(s, r).flags |= 256),
                (r = Mb(s, r, !1)),
                r !== 2 && r !== 6)
              ) {
                if (xb && !b) {
                  ((s.errorRecoveryDisabledLanes |= t), (yn |= t), (l = 4));
                  break e;
                }
                ((t = la),
                  (la = l),
                  t !== null &&
                    (la === null ? (la = t) : la.push.apply(la, t)));
              }
              l = r;
            }
            if (((t = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (al(e, 0), Fi(e, a, 0, !0));
          break;
        }
        e: {
          switch (((n = e), (t = l), t)) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((a & 4194048) !== a && (a & 62914560) !== a) break;
            case 6:
              Fi(n, a, va, !Li);
              break e;
            case 2:
              la = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((a & 62914560) === a && ((l = vr + 300 - da()), 10 < l)) {
            if ((Fi(n, a, va, !Li), ht(n, 0, !0) !== 0)) break e;
            ((Wa = a),
              (n.timeoutHandle = nd(
                Fc.bind(
                  null,
                  n,
                  i,
                  la,
                  fr,
                  Rb,
                  a,
                  va,
                  yn,
                  Xn,
                  Li,
                  t,
                  "Throttled",
                  -0,
                  0,
                ),
                l,
              )));
            break e;
          }
          Fc(n, i, la, fr, Rb, a, va, yn, Xn, Li, t, null, -0, 0);
        }
      }
      break;
    } while (!0);
    ei(e);
  }
  function Fc(e, a, i, n, l, t, r, s, b, u, v, z, p, k) {
    e.timeoutHandle = -1;
    var C = a.subtreeFlags,
      w = (t & 335544064) === t;
    if (
      ((z = null),
      (w || C & 8192 || (C & 16785408) === 16785408) &&
        ((z = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: !0,
          waitingForViewTransition: !1,
          unsuspend: Va,
        }),
        (ka = null),
        Nc(a, t, z),
        w &&
          ((C = z),
          (w = e.containerInfo),
          (w = (w.nodeType === 9 ? w : w.ownerDocument).__reactViewTransition),
          w != null &&
            (C.count++,
            (C.waitingForViewTransition = !0),
            (C = nt.bind(C)),
            w.finished.then(C, C))),
        (C =
          (t & 62914560) === t
            ? vr - da()
            : (t & 4194048) === t
              ? qc - da()
              : 0),
        (C = nv(z, C)),
        C !== null))
    ) {
      ((Wa = t),
        (e.cancelPendingCommit = C(
          jc.bind(null, e, a, t, i, n, l, r, s, b, u, v, z, null, p, k),
        )),
        Fi(e, t, r, !u));
      return;
    }
    jc(e, a, t, i, n, l, r, s, b, u, v, z);
  }
  function Wk(e) {
    for (var a = e; ;) {
      var i = a.tag;
      if (
        (i === 0 || i === 11 || i === 15) &&
        a.flags & 16384 &&
        ((i = a.updateQueue), i !== null && ((i = i.stores), i !== null))
      )
        for (var n = 0; n < i.length; n++) {
          var l = i[n],
            t = l.getSnapshot;
          l = l.value;
          try {
            if (!ua(t(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((i = a.child), a.subtreeFlags & 16384 && i !== null))
        ((i.return = a), (a = i));
      else {
        if (a === e) break;
        for (; a.sibling === null;) {
          if (a.return === null || a.return === e) return !0;
          a = a.return;
        }
        ((a.sibling.return = a.return), (a = a.sibling));
      }
    }
    return !0;
  }
  function Fi(e, a, i, n) {
    ((a = Rd(e, a)),
      (a &= ~hr),
      (a &= ~yn),
      (e.suspendedLanes |= a),
      (e.pingedLanes &= ~a),
      n && (e.warmLanes |= a),
      (n = e.expirationTimes));
    for (var l = a; 0 < l;) {
      var t = 31 - pa(l),
        r = 1 << t;
      ((n[t] = -1), (l &= ~r));
    }
    i !== 0 && qd(e, i, a);
  }
  function zr() {
    return (te & 6) === 0 ? (Xl(0), !1) : !0;
  }
  function Lb() {
    if (j !== null) {
      if (de === 0) var e = j.return;
      else ((e = j), (oi = rn = null), Ks(e), (In = null), (xl = 0), (e = j));
      for (; e !== null;) (dc(e.alternate, e), (e = e.return));
      j = null;
    }
  }
  function al(e, a) {
    var i = e.timeoutHandle;
    return (
      i !== -1 && ((e.timeoutHandle = -1), Ch(i)),
      (i = e.cancelPendingCommit),
      i !== null && ((e.cancelPendingCommit = null), i()),
      (Wa = 0),
      Lb(),
      (me = e),
      (j = i = bi(e.current, null)),
      (X = a),
      (de = 0),
      (ha = null),
      (Li = !1),
      (Qn = kl(e, a)),
      (xb = !1),
      (Xn = va = hr = yn = Mi = we = 0),
      (la = jl = null),
      (Rb = !1),
      (hi = Rd(e, a)),
      Ht(),
      i
    );
  }
  function Ic(e, a) {
    ((Y = null),
      (H.H = er),
      a === Fn || a === Ft
        ? ((a = jo()), (de = 3))
        : a === Ns
          ? ((a = jo()), (de = 4))
          : (de =
              a === rb
                ? 8
                : a !== null &&
                    typeof a == "object" &&
                    typeof a.then == "function"
                  ? 6
                  : 1),
      (ha = a),
      j === null && ((we = 1), ar(e, Sa(a, e.current))));
  }
  function Gc() {
    var e = Ge.current;
    return e === null
      ? !0
      : (X & 4194048) === X
        ? $e === null
        : (X & 62914560) === X || (X & 536870912) !== 0
          ? e === $e
          : !1;
  }
  function Yc() {
    var e = H.H;
    return ((H.H = er), e === null ? er : e);
  }
  function Vc() {
    var e = H.A;
    return ((H.A = Zk), e);
  }
  function Ar() {
    ((we = 4),
      Li || ((X & 4194048) !== X && Ge.current !== null) || (Qn = !0),
      ((Mi & 134217727) === 0 && (yn & 134217727) === 0) ||
        me === null ||
        Fi(me, X, va, !1));
  }
  function Mb(e, a, i) {
    var n = te;
    te |= 2;
    var l = Yc(),
      t = Vc();
    ((me !== e || X !== a) && ((fr = null), al(e, a)), (a = !1));
    var r = we;
    e: do
      try {
        if (de !== 0 && j !== null) {
          var s = j,
            b = ha;
          switch (de) {
            case 8:
              (Lb(), (r = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Ge.current === null && (a = !0);
              var u = de;
              if (((de = 0), (ha = null), il(e, s, b, u), i && Qn)) {
                r = 0;
                break e;
              }
              break;
            default:
              ((u = de), (de = 0), (ha = null), il(e, s, b, u));
          }
        }
        (eh(), (r = we));
        break;
      } catch (v) {
        Ic(e, v);
      }
    while (!0);
    return (
      a && e.shellSuspendCounter++,
      (oi = rn = null),
      (te = n),
      (H.H = l),
      (H.A = t),
      j === null && ((me = null), (X = 0), Ht()),
      r
    );
  }
  function eh() {
    for (; j !== null;) Kc(j);
  }
  function ah(e, a) {
    var i = te;
    te |= 2;
    var n = Yc(),
      l = Vc();
    me !== e || X !== a
      ? ((fr = null), (yr = da() + 500), al(e, a))
      : (Qn = kl(e, a));
    e: do
      try {
        if (de !== 0 && j !== null) {
          a = j;
          var t = ha;
          a: switch (de) {
            case 1:
              ((de = 0), (ha = null), il(e, a, t, 1));
              break;
            case 2:
            case 9:
              if (_o(t)) {
                ((de = 0), (ha = null), _c(a));
                break;
              }
              ((a = function () {
                ((de !== 2 && de !== 9) || me !== e || (de = 7), ei(e));
              }),
                t.then(a, a));
              break e;
            case 3:
              de = 7;
              break e;
            case 4:
              de = 5;
              break e;
            case 7:
              _o(t)
                ? ((de = 0), (ha = null), _c(a))
                : ((de = 0), (ha = null), il(e, a, t, 7));
              break;
            case 5:
              var r = null;
              switch (j.tag) {
                case 26:
                  r = j.memoizedState;
                case 5:
                case 27:
                  var s = j;
                  if (r ? Lu(r) : s.stateNode.complete) {
                    ((de = 0), (ha = null));
                    var b = s.sibling;
                    if (b !== null) j = b;
                    else {
                      var u = s.return;
                      u !== null ? ((j = u), Cr(u)) : (j = null);
                    }
                    break a;
                  }
              }
              ((de = 0), (ha = null), il(e, a, t, 5));
              break;
            case 6:
              ((de = 0), (ha = null), il(e, a, t, 6));
              break;
            case 8:
              (Lb(), (we = 6));
              break e;
            default:
              throw Error(h(462));
          }
        }
        ih();
        break;
      } catch (v) {
        Ic(e, v);
      }
    while (!0);
    return (
      (oi = rn = null),
      (H.H = n),
      (H.A = l),
      (te = i),
      j !== null ? 0 : ((me = null), (X = 0), Ht(), we)
    );
  }
  function ih() {
    for (; j !== null && !fm();) Kc(j);
  }
  function Kc(e) {
    var a = sc(e.alternate, e, hi);
    ((e.memoizedProps = e.pendingProps), a === null ? Cr(e) : (j = a));
  }
  function _c(e) {
    var a = e,
      i = a.alternate;
    switch (a.tag) {
      case 15:
      case 0:
        a = ec(i, a, a.pendingProps, a.type, void 0, X);
        break;
      case 11:
        a = ec(i, a, a.pendingProps, a.type.render, a.ref, X);
        break;
      case 5:
        Ks(a);
        var n = a;
        n === qe &&
          (K
            ? (Pt(n), n.tag === 5 && n.stateNode != null && (ye = n.stateNode))
            : (Pt(n), (K = !0)));
      default:
        (dc(i, a), (a = j = Po(a, hi)), (a = sc(i, a, hi)));
    }
    ((e.memoizedProps = e.pendingProps), a === null ? Cr(e) : (j = a));
  }
  function il(e, a, i, n) {
    ((oi = rn = null), Ks(a), (In = null), (xl = 0));
    var l = a.return;
    try {
      if (Yk(e, l, a, i, X)) {
        ((we = 1), ar(e, Sa(i, e.current)), (j = null));
        return;
      }
    } catch (t) {
      if (l !== null) throw ((j = l), t);
      ((we = 1), ar(e, Sa(i, e.current)), (j = null));
      return;
    }
    a.flags & 32768
      ? (K || n === 1
          ? (e = !0)
          : Qn || (X & 536870912) !== 0
            ? (e = !1)
            : ((Li = e = !0),
              (n === 2 || n === 9 || n === 3 || n === 6) &&
                ((n = Ge.current),
                n !== null && n.tag === 13 && (n.flags |= 16384))),
        $c(a, e))
      : Cr(a);
  }
  function Cr(e) {
    var a = e;
    do {
      if ((a.flags & 32768) !== 0) {
        $c(a, Li);
        return;
      }
      e = a.return;
      var i = $k(a.alternate, a, hi);
      if (i !== null) {
        j = i;
        return;
      }
      if (((a = a.sibling), a !== null)) {
        j = a;
        return;
      }
      j = a = e;
    } while (a !== null);
    we === 0 && (we = 5);
  }
  function $c(e, a) {
    do {
      var i = jk(e.alternate, e);
      if (i !== null) {
        ((i.flags &= 32767), (j = i));
        return;
      }
      if (
        ((i = e.return),
        i !== null &&
          ((i.flags |= 32768), (i.subtreeFlags = 0), (i.deletions = null)),
        !a && ((e = e.sibling), e !== null))
      ) {
        j = e;
        return;
      }
      j = e = i;
    } while (e !== null);
    ((we = 6), (j = null));
  }
  function jc(e, a, i, n, l, t, r, s, b, u, v, z) {
    e.cancelPendingCommit = null;
    do Br();
    while (Se !== 0);
    if ((te & 6) !== 0) throw Error(h(327));
    if (a !== null) {
      if (a === e.current) throw Error(h(177));
      (e === me && ((j = me = null), (X = 0)),
        (fn = a),
        (La = e),
        (Wa = i),
        (qb = l),
        (Lc = n),
        nh(e, a, i, r, s, b, z));
    }
  }
  function nh(e, a, i, n, l, t, r) {
    var s = a.lanes | a.childLanes;
    if (
      ((Pb = s),
      (s |= fs),
      Hm(e, i, s, n, l, t),
      (Jn = null),
      (i & 335544064) === i
        ? ((Wn = Dk(e)), (n = 10262))
        : ((Wn = null), (n = 10256)),
      (a.subtreeFlags & n) !== 0 || (a.flags & n) !== 0
        ? ((e.callbackNode = null),
          (e.callbackPriority = 0),
          dh(ct, function () {
            return (Gb(), null);
          }))
        : ((e.callbackNode = null), (e.callbackPriority = 0)),
      (dr = !1),
      (n = (a.flags & 13878) !== 0),
      (a.subtreeFlags & 13878) !== 0 || n)
    ) {
      ((n = H.T), (H.T = null), (l = U.p), (U.p = 2), (t = te), (te |= 4));
      try {
        Qk(e, a, i);
      } finally {
        ((te = t), (U.p = l), (H.T = n));
      }
    }
    ((Se = 1),
      dr
        ? (Zn = Hh(r, e.containerInfo, Wn, Ub, Fb, th, Ib, Gb, lh))
        : (Ub(), Fb(), Ib()));
  }
  function lh(e) {
    if (Se !== 0) {
      var a = La.onRecoverableError;
      a(e, {
        componentStack: null,
      });
    }
  }
  function th() {
    Se === 3 && ((Se = 0), Tc(fn, La), (Se = 4));
  }
  function Ub() {
    if (Se === 1) {
      Se = 0;
      var e = La,
        a = fn,
        i = Wa,
        n = (a.flags & 13878) !== 0;
      if ((a.subtreeFlags & 13878) !== 0 || n) {
        ((n = H.T), (H.T = null));
        var l = U.p;
        U.p = 2;
        var t = te;
        te |= 4;
        try {
          ((Kl = cr = !1), Ec(a, e, i), (i = ed));
          var r = So(e.containerInfo),
            s = i.focusedElem,
            b = i.selectionRange;
          if (
            r !== s &&
            s &&
            s.ownerDocument &&
            Bo(s.ownerDocument.documentElement, s)
          ) {
            if (b !== null && ms(s)) {
              var u = b.start,
                v = b.end;
              if ((v === void 0 && (v = u), "selectionStart" in s))
                ((s.selectionStart = u),
                  (s.selectionEnd = Math.min(v, s.value.length)));
              else {
                var z = s.ownerDocument || document,
                  p = (z && z.defaultView) || window;
                if (p.getSelection) {
                  var k = p.getSelection(),
                    C = s.textContent.length,
                    w = Math.min(b.start, C),
                    V = b.end === void 0 ? w : Math.min(b.end, C);
                  !k.extend && w > V && ((r = V), (V = w), (w = r));
                  var c = Co(s, w),
                    d = Co(s, V);
                  if (
                    c &&
                    d &&
                    (k.rangeCount !== 1 ||
                      k.anchorNode !== c.node ||
                      k.anchorOffset !== c.offset ||
                      k.focusNode !== d.node ||
                      k.focusOffset !== d.offset)
                  ) {
                    var m = z.createRange();
                    (m.setStart(c.node, c.offset),
                      k.removeAllRanges(),
                      w > V
                        ? (k.addRange(m), k.extend(d.node, d.offset))
                        : (m.setEnd(d.node, d.offset), k.addRange(m)));
                  }
                }
              }
            }
            for (z = [], k = s; (k = k.parentNode);)
              k.nodeType === 1 &&
                z.push({
                  element: k,
                  left: k.scrollLeft,
                  top: k.scrollTop,
                });
            for (
              typeof s.focus == "function" && s.focus(), s = 0;
              s < z.length;
              s++
            ) {
              var g = z[s];
              ((g.element.scrollLeft = g.left), (g.element.scrollTop = g.top));
            }
          }
          ((ol = !!Wb), (ed = Wb = null));
        } finally {
          ((te = t), (U.p = l), (H.T = n));
        }
      }
      ((e.current = a), (Se = 2));
    }
  }
  function Fb() {
    if (Se === 2) {
      Se = 0;
      var e = La,
        a = fn,
        i = (a.flags & 8772) !== 0;
      if ((a.subtreeFlags & 8772) !== 0 || i) {
        ((i = H.T), (H.T = null));
        var n = U.p;
        U.p = 2;
        var l = te;
        te |= 4;
        try {
          Ac(e, a.alternate, a);
        } finally {
          ((te = l), (U.p = n), (H.T = i));
        }
      }
      Se = 3;
    }
  }
  function Ib() {
    if (Se === 4 || Se === 3) {
      Se = 0;
      var e = Zn;
      ((Zn = null), gm());
      var a = La,
        i = fn,
        n = Wa,
        l = Lc,
        t = (n & 335544064) === n ? 10262 : 10256;
      if (
        ((i.subtreeFlags & t) !== 0 || (i.flags & t) !== 0
          ? (Se = 5)
          : ((Se = 0), (fn = La = null), Qc(a, a.pendingLanes)),
        (t = a.pendingLanes),
        t === 0 && (Ui = null),
        Xr(n),
        (i = i.stateNode),
        oa && typeof oa.onCommitFiberRoot == "function")
      )
        try {
          oa.onCommitFiberRoot(ml, i, void 0, (i.current.flags & 128) === 128);
        } catch {}
      if (l !== null) {
        ((i = H.T), (t = U.p), (U.p = 2), (H.T = null));
        try {
          for (var r = a.onRecoverableError, s = 0; s < l.length; s++) {
            var b = l[s];
            r(b.value, {
              componentStack: b.stack,
            });
          }
        } finally {
          ((H.T = i), (U.p = t));
        }
      }
      if (
        ((l = Jn),
        (r = Wn),
        (Wn = null),
        l !== null && ((Jn = null), r === null && (r = []), e !== null))
      )
        for (b = 0; b < l.length; b++)
          ((i = (0, l[b])(r)), i !== void 0 && e.finished.finally(i));
      ((Wa & 3) !== 0 && Br(),
        ei(a),
        (t = a.pendingLanes),
        (n & 261930) !== 0 && (t & 42) !== 0
          ? a === gr
            ? Ql++
            : ((Ql = 0), (gr = a))
          : ((Ql = 0), (gr = null)),
        Xl(0));
    }
  }
  function Qc(e, a) {
    (e.pooledCacheLanes &= a) === 0 &&
      ((a = e.pooledCache), a != null && ((e.pooledCache = null), Tl(a)));
  }
  function Br() {
    return (
      Zn !== null && (Zn.skipTransition(), (Zn = null)),
      Ub(),
      Fb(),
      Ib(),
      Gb()
    );
  }
  function Gb() {
    if (Se !== 5) return !1;
    var e = La,
      a = Pb;
    Pb = 0;
    var i = Xr(Wa),
      n = H.T,
      l = U.p;
    try {
      ((U.p = 32 > i ? 32 : i), (H.T = null), (i = qb), (qb = null));
      var t = La,
        r = Wa;
      if (((Se = 0), (fn = La = null), (Wa = 0), (te & 6) !== 0))
        throw Error(h(331));
      var s = te;
      if (
        ((te |= 4),
        Rc(t.current),
        Dc(t, t.current, r, i),
        (te = s),
        Xl(0, !1),
        oa && typeof oa.onPostCommitFiberRoot == "function")
      )
        try {
          oa.onPostCommitFiberRoot(ml, t);
        } catch {}
      return !0;
    } finally {
      ((U.p = l), (H.T = n), Qc(e, a));
    }
  }
  function Xc(e, a, i) {
    ((a = Sa(i, a)),
      (a = tb(e.stateNode, a, 2)),
      (e = Di(e, a, 2)),
      e !== null && (hl(e, 2), ei(e)));
  }
  function oe(e, a, i) {
    if (e.tag === 3) Xc(e, e, i);
    else
      for (; a !== null;) {
        if (a.tag === 3) {
          Xc(a, e, i);
          break;
        } else if (a.tag === 1) {
          var n = a.stateNode;
          if (
            typeof a.type.getDerivedStateFromError == "function" ||
            (typeof n.componentDidCatch == "function" &&
              (Ui === null || !Ui.has(n)))
          ) {
            ((e = Sa(i, e)),
              (i = _p(2)),
              (n = Di(a, i, 2)),
              n !== null && ($p(i, n, a, e), hl(n, 2), ei(n)));
            break;
          }
        }
        a = a.return;
      }
  }
  function Yb(e, a, i) {
    var n = e.pingCache;
    if (n === null) {
      n = e.pingCache = new Jk();
      var l = new Set();
      n.set(a, l);
    } else ((l = n.get(a)), l === void 0 && ((l = new Set()), n.set(a, l)));
    l.has(i) ||
      ((xb = !0), l.add(i), (e = rh.bind(null, e, a, i)), a.then(e, e));
  }
  function rh(e, a, i) {
    var n = e.pingCache;
    (n !== null && n.delete(a),
      (e.pingedLanes |= e.suspendedLanes & i),
      (e.warmLanes &= ~i),
      me === e &&
        (X & i) === i &&
        ((we === 4 || (we === 3 && (X & 62914560) === X && 300 > da() - vr)) &&
        (te & 2) === 0
          ? al(e, 0)
          : (hr |= i),
        Xn === X && (Xn = 0)),
      ei(e));
  }
  function Zc(e, a) {
    (a === 0 && (a = Pd()), (e = nn(e, a)), e !== null && (hl(e, a), ei(e)));
  }
  function sh(e) {
    var a = e.memoizedState,
      i = 0;
    (a !== null && (i = a.retryLane), Zc(e, i));
  }
  function bh(e, a) {
    var i = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var n = e.stateNode,
          l = e.memoizedState;
        l !== null && (i = l.retryLane);
        break;
      case 19:
        n = e.stateNode;
        break;
      case 22:
        n = e.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    (n !== null && n.delete(a), Zc(e, i));
  }
  function dh(e, a) {
    return _r(e, a);
  }
  var nl = null,
    ll = null,
    Vb = !1,
    Sr = !1,
    Kb = !1,
    Ii = 0;
  function ei(e) {
    (e !== ll &&
      e.next === null &&
      (ll === null ? (nl = ll = e) : (ll = ll.next = e)),
      (Sr = !0),
      Vb || ((Vb = !0), ph()));
  }
  function Xl(e, a) {
    if (!Kb && Sr) {
      Kb = !0;
      do
        for (var i = !1, n = nl; n !== null;) {
          if (e !== 0) {
            var l = n.pendingLanes;
            if (l === 0) var t = 0;
            else {
              var r = n.suspendedLanes,
                s = n.pingedLanes;
              ((t = (1 << (31 - pa(42 | e) + 1)) - 1),
                (t &= l & ~(r & ~s)),
                (t = t & 201326741 ? (t & 201326741) | 1 : t ? t | 2 : 0));
            }
            t !== 0 && ((i = !0), au(n, t));
          } else
            ((t = X),
              (t = ht(
                n,
                n === me ? t : 0,
                n.cancelPendingCommit !== null || n.timeoutHandle !== -1,
              )),
              (t & 3) === 0 || kl(n, t) || ((i = !0), au(n, t)));
          n = n.next;
        }
      while (i);
      Kb = !1;
    }
  }
  function oh() {
    Jc();
  }
  function Jc() {
    Sr = Vb = !1;
    var e = 0;
    Ii !== 0 && Ah() && (e = Ii);
    for (var a = da(), i = null, n = nl; n !== null;) {
      var l = n.next,
        t = Wc(n, a);
      (t === 0
        ? ((n.next = null),
          i === null ? (nl = l) : (i.next = l),
          l === null && (ll = i))
        : ((i = n), (e !== 0 || (t & 3) !== 0) && (Sr = !0)),
        (n = l));
    }
    ((Se !== 0 && Se !== 5) || Xl(e), Ii !== 0 && (Ii = 0));
  }
  function Wc(e, a) {
    for (
      var i = e.suspendedLanes,
        n = e.pingedLanes,
        l = e.expirationTimes,
        t = e.pendingLanes & -62914561;
      0 < t;
    ) {
      var r = 31 - pa(t),
        s = 1 << r,
        b = l[r];
      (b === -1
        ? ((s & i) === 0 || (s & n) !== 0) && (l[r] = Em(s, a))
        : b <= a && (e.expiredLanes |= s),
        (t &= ~s));
    }
    if (
      ((a = me),
      (i = X),
      (i = ht(
        e,
        e === a ? i : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (n = e.callbackNode),
      i === 0 ||
        (e === a && (de === 2 || de === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        n !== null && n !== null && $r(n),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((i & 3) === 0 || kl(e, i)) {
      if (((a = i & -i), a === e.callbackPriority)) return a;
      switch ((n !== null && $r(n), Xr(i))) {
        case 2:
        case 8:
          i = Nd;
          break;
        case 32:
          i = ct;
          break;
        case 268435456:
          i = xd;
          break;
        default:
          i = ct;
      }
      return (
        (n = eu.bind(null, e)),
        (i = _r(i, n)),
        (e.callbackPriority = a),
        (e.callbackNode = i),
        a
      );
    }
    return (
      n !== null && n !== null && $r(n),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function eu(e, a) {
    if (Se !== 0 && Se !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var i = e.callbackNode;
    if (Br() && e.callbackNode !== i) return null;
    var n = X;
    return (
      (n = ht(
        e,
        e === me ? n : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      n === 0
        ? null
        : (Uc(e, n, a),
          Wc(e, da()),
          e.callbackNode != null && e.callbackNode === i
            ? eu.bind(null, e)
            : null)
    );
  }
  function au(e, a) {
    if (Br()) return null;
    Uc(e, a, !0);
  }
  function ph() {
    Bh(function () {
      (te & 6) !== 0 ? _r(Dd, oh) : Jc();
    });
  }
  function _b() {
    if (Ii === 0) {
      var e = dn;
      (e === 0 && ((e = ut), (ut <<= 1), (ut & 261888) === 0 && (ut = 256)),
        (Ii = e));
    }
    return Ii;
  }
  function iu(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : zt(e);
  }
  function ch(e, a, i, n, l) {
    if (a === "submit" && i && i.stateNode === l) {
      var t = iu((l[ea] || null).action),
        r = n.submitter;
      r &&
        ((a = (a = r[ea] || null)
          ? iu(a.formAction)
          : r.getAttribute("formAction")),
        a !== null && ((t = a), (r = null)));
      var s = new St("action", "action", null, n, l);
      e.push({
        event: s,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (n.defaultPrevented) {
                if (Ii !== 0) {
                  var b = new FormData(l, r);
                  eb(
                    i,
                    {
                      pending: !0,
                      data: b,
                      method: l.method,
                      action: t,
                    },
                    null,
                    b,
                  );
                }
              } else
                typeof t == "function" &&
                  (s.preventDefault(),
                  (b = new FormData(l, r)),
                  eb(
                    i,
                    {
                      pending: !0,
                      data: b,
                      method: l.method,
                      action: t,
                    },
                    t,
                    b,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var $b = 0; $b < ys.length; $b++) {
    var jb = ys[$b],
      uh = jb.toLowerCase(),
      mh = jb[0].toUpperCase() + jb.slice(1);
    xa(uh, "on" + mh);
  }
  (xa(Eo, "onAnimationEnd"),
    xa(Ho, "onAnimationIteration"),
    xa(To, "onAnimationStart"),
    xa("dblclick", "onDoubleClick"),
    xa("focusin", "onFocus"),
    xa("focusout", "onBlur"),
    xa(Ck, "onTransitionRun"),
    xa(Bk, "onTransitionStart"),
    xa(Sk, "onTransitionCancel"),
    xa(Do, "onTransitionEnd"),
    On("onMouseEnter", ["mouseout", "mouseover"]),
    On("onMouseLeave", ["mouseout", "mouseover"]),
    On("onPointerEnter", ["pointerout", "pointerover"]),
    On("onPointerLeave", ["pointerout", "pointerover"]),
    Wi(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Wi(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Wi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Wi(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wi(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Wi(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var Zl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    kh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(Zl),
    );
  function nu(e, a) {
    a = (a & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var n = e[i],
        l = n.event;
      n = n.listeners;
      e: {
        var t = void 0;
        if (a)
          for (var r = n.length - 1; 0 <= r; r--) {
            var s = n[r],
              b = s.instance,
              u = s.currentTarget;
            if (((s = s.listener), b !== t && l.isPropagationStopped()))
              break e;
            ((t = s), (l.currentTarget = u));
            try {
              t(l);
            } catch (v) {
              Et(v);
            }
            ((l.currentTarget = null), (t = b));
          }
        else
          for (r = 0; r < n.length; r++) {
            if (
              ((s = n[r]),
              (b = s.instance),
              (u = s.currentTarget),
              (s = s.listener),
              b !== t && l.isPropagationStopped())
            )
              break e;
            ((t = s), (l.currentTarget = u));
            try {
              t(l);
            } catch (v) {
              Et(v);
            }
            ((l.currentTarget = null), (t = b));
          }
      }
    }
  }
  function Q(e, a) {
    var i = a[Id];
    i === void 0 && (i = a[Id] = new Set());
    var n = e + "__bubble";
    i.has(n) || (lu(a, e, 2, !1), i.add(n));
  }
  function Qb(e, a, i) {
    var n = 0;
    (a && (n |= 4), lu(i, e, n, a));
  }
  var Or = "_reactListening" + Math.random().toString(36).slice(2);
  function Xb(e) {
    if (!e[Or]) {
      ((e[Or] = !0),
        Vd.forEach(function (i) {
          i !== "selectionchange" && (kh.has(i) || Qb(i, !1, e), Qb(i, !0, e));
        }));
      var a = e.nodeType === 9 ? e : e.ownerDocument;
      a === null || a[Or] || ((a[Or] = !0), Qb("selectionchange", !1, a));
    }
  }
  function lu(e, a, i, n) {
    switch ($u(a)) {
      case 2:
        var l = sv;
        break;
      case 8:
        l = bv;
        break;
      default:
        l = hd;
    }
    ((i = l.bind(null, a, i, e)),
      (l = void 0),
      !ls ||
        (a !== "touchstart" && a !== "touchmove" && a !== "wheel") ||
        (l = !0),
      n
        ? l !== void 0
          ? e.addEventListener(a, i, {
              capture: !0,
              passive: l,
            })
          : e.addEventListener(a, i, !0)
        : l !== void 0
          ? e.addEventListener(a, i, {
              passive: l,
            })
          : e.addEventListener(a, i, !1));
  }
  function Zb(e, a, i, n, l) {
    var t = n;
    if ((a & 1) === 0 && (a & 2) === 0 && n !== null)
      e: for (;;) {
        if (n === null) return;
        var r = n.tag;
        if (r === 3 || r === 4) {
          var s = n.stateNode.containerInfo;
          if (s === l) break;
          if (r === 4)
            for (r = n.return; r !== null;) {
              var b = r.tag;
              if ((b === 3 || b === 4) && r.stateNode.containerInfo === l)
                return;
              r = r.return;
            }
          for (; s !== null;) {
            if (((r = Ji(s)), r === null)) return;
            if (((b = r.tag), b === 5 || b === 6 || b === 26 || b === 27)) {
              n = t = r;
              continue e;
            }
            s = s.parentNode;
          }
        }
        n = n.return;
      }
    no(function () {
      var u = t,
        v = is(i),
        z = [];
      e: {
        var p = No.get(e);
        if (p !== void 0) {
          var k = St,
            C = e;
          switch (e) {
            case "keypress":
              if (Ct(i) === 0) break e;
            case "keydown":
            case "keyup":
              k = Wm;
              break;
            case "focusin":
              ((C = "focus"), (k = bs));
              break;
            case "focusout":
              ((C = "blur"), (k = bs));
              break;
            case "beforeblur":
            case "afterblur":
              k = bs;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = ro;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = Im;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = lk;
              break;
            case Eo:
            case Ho:
            case To:
              k = Vm;
              break;
            case Do:
              k = rk;
              break;
            case "scroll":
            case "scrollend":
              k = Um;
              break;
            case "wheel":
              k = bk;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = _m;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = bo;
              break;
            case "submit":
              k = ik;
              break;
            case "toggle":
            case "beforetoggle":
              k = ok;
          }
          var w = (a & 4) !== 0,
            V = !w && (e === "scroll" || e === "scrollend"),
            c = w ? (p !== null ? p + "Capture" : null) : p;
          w = [];
          for (var d = u, m; d !== null;) {
            var g = d;
            if (
              ((m = g.stateNode),
              (g = g.tag),
              (g !== 5 && g !== 26 && g !== 27) ||
                m === null ||
                c === null ||
                ((g = fl(d, c)), g != null && w.push(Jl(d, g, m))),
              V)
            )
              break;
            d = d.return;
          }
          0 < w.length &&
            ((p = new k(p, C, null, i, v)),
            z.push({
              event: p,
              listeners: w,
            }));
        }
      }
      if ((a & 7) === 0) {
        e: {
          if (
            ((k = e === "mouseover" || e === "pointerover"),
            (p = e === "mouseout" || e === "pointerout"),
            k &&
              i !== as &&
              (C = i.relatedTarget || i.fromElement) &&
              (Ji(C) || C[Cn]))
          )
            break e;
          (p || k) &&
            ((C =
              v.window === v
                ? v
                : (k = v.ownerDocument)
                  ? k.defaultView || k.parentWindow
                  : window),
            p
              ? ((k = i.relatedTarget || i.toElement),
                (p = u),
                (k = k ? Ji(k) : null),
                k !== null &&
                  ((V = G(k)),
                  (w = k.tag),
                  k !== V || (w !== 5 && w !== 27 && w !== 6)) &&
                  (k = null))
              : ((p = null), (k = u)),
            p !== k &&
              ((w = ro),
              (g = "onMouseLeave"),
              (c = "onMouseEnter"),
              (d = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((w = bo),
                (g = "onPointerLeave"),
                (c = "onPointerEnter"),
                (d = "pointer")),
              (V = p == null ? C : yl(p)),
              (m = k == null ? C : yl(k)),
              (C = new w(g, d + "leave", p, i, v)),
              (C.target = V),
              (C.relatedTarget = m),
              (g = null),
              Ji(v) === u &&
                ((w = new w(c, d + "enter", k, i, v)),
                (w.target = m),
                (w.relatedTarget = V),
                (g = w)),
              (V = g),
              (w = p && k ? sa(p, k, hh) : null),
              p !== null && tu(z, C, p, w, !1),
              k !== null && V !== null && tu(z, V, k, w, !0)));
        }
        e: {
          if (
            ((p = u ? yl(u) : window),
            (k = p.nodeName && p.nodeName.toLowerCase()),
            k === "select" || (k === "input" && p.type === "file"))
          )
            var S = vo;
          else if (ko(p)) {
            if (yo) S = gk;
            else {
              S = yk;
              var Z = vk;
            }
          } else
            ((k = p.nodeName),
              !k ||
              k.toLowerCase() !== "input" ||
              (p.type !== "checkbox" && p.type !== "radio")
                ? u && es(u.elementType) && (S = vo)
                : (S = fk));
          if (S && (S = S(e, u))) {
            ho(z, S, i, v);
            break e;
          }
          Z && Z(e, p, u);
        }
        switch (((Z = u ? yl(u) : window), e)) {
          case "focusin":
            (ko(Z) || Z.contentEditable === "true") &&
              ((Nn = Z), (ks = u), (wl = null));
            break;
          case "focusout":
            wl = ks = Nn = null;
            break;
          case "mousedown":
            hs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((hs = !1), Oo(z, i, v));
            break;
          case "selectionchange":
            if (Ak) break;
          case "keydown":
          case "keyup":
            Oo(z, i, v);
        }
        var D;
        if (os)
          e: {
            switch (e) {
              case "compositionstart":
                var P = "onCompositionStart";
                break e;
              case "compositionend":
                P = "onCompositionEnd";
                break e;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break e;
            }
            P = void 0;
          }
        else
          Dn
            ? uo(e, i) && (P = "onCompositionEnd")
            : e === "keydown" &&
              i.keyCode === 229 &&
              (P = "onCompositionStart");
        (P &&
          (oo &&
            i.locale !== "ko" &&
            (Dn || P !== "onCompositionStart"
              ? P === "onCompositionEnd" && Dn && (D = lo())
              : ((Ai = v),
                (ts = "value" in Ai ? Ai.value : Ai.textContent),
                (Dn = !0))),
          (Z = wr(u, P)),
          0 < Z.length &&
            ((P = new so(P, e, null, i, v)),
            z.push({
              event: P,
              listeners: Z,
            }),
            D ? (P.data = D) : ((D = mo(i)), D !== null && (P.data = D)))),
          (D = ck ? uk(e, i) : mk(e, i)) &&
            ((P = wr(u, "onBeforeInput")),
            0 < P.length &&
              ((Z = new so("onBeforeInput", "beforeinput", null, i, v)),
              z.push({
                event: Z,
                listeners: P,
              }),
              (Z.data = D))),
          ch(z, e, u, i, v));
      }
      nu(z, a);
    });
  }
  function Jl(e, a, i) {
    return {
      instance: e,
      listener: a,
      currentTarget: i,
    };
  }
  function wr(e, a) {
    for (var i = a + "Capture", n = []; e !== null;) {
      var l = e,
        t = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          t === null ||
          ((l = fl(e, i)),
          l != null && n.unshift(Jl(e, l, t)),
          (l = fl(e, a)),
          l != null && n.push(Jl(e, l, t))),
        e.tag === 3)
      )
        return n;
      e = e.return;
    }
    return [];
  }
  function hh(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function tu(e, a, i, n, l) {
    for (var t = a._reactName, r = []; i !== null && i !== n;) {
      var s = i,
        b = s.alternate,
        u = s.stateNode;
      if (((s = s.tag), b !== null && b === n)) break;
      ((s !== 5 && s !== 26 && s !== 27) ||
        u === null ||
        ((b = u),
        l
          ? ((u = fl(i, t)), u != null && r.unshift(Jl(i, u, b)))
          : l || ((u = fl(i, t)), u != null && r.push(Jl(i, u, b)))),
        (i = i.return));
    }
    r.length !== 0 &&
      e.push({
        event: a,
        listeners: r,
      });
  }
  var vh = /\r\n?/g,
    yh = /\u0000|\uFFFD/g;
  function ru(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        vh,
        `
`,
      )
      .replace(yh, "");
  }
  function su(e, a) {
    return ((a = ru(a)), ru(e) === a);
  }
  function pe(e, a, i, n, l, t) {
    switch (i) {
      case "children":
        if (typeof n == "string")
          a === "body" || (a === "textarea" && n === "") || En(e, n);
        else if (typeof n == "number" || typeof n == "bigint")
          a !== "body" && En(e, "" + n);
        else return;
        break;
      case "className":
        gt(e, "class", n);
        break;
      case "tabIndex":
        gt(e, "tabindex", n);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gt(e, i, n);
        break;
      case "style":
        ao(e, n, t);
        return;
      case "data":
        if (a !== "object") {
          gt(e, "data", n);
          break;
        }
      case "src":
      case "href":
        if (n === "" && (a !== "a" || i !== "href")) {
          e.removeAttribute(i);
          break;
        }
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "symbol" ||
          typeof n == "boolean"
        ) {
          e.removeAttribute(i);
          break;
        }
        ((n = zt(n)), e.setAttribute(i, n));
        break;
      case "action":
      case "formAction":
        if (typeof n == "function") {
          e.setAttribute(
            i,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof t == "function" &&
            (i === "formAction"
              ? (a !== "input" && pe(e, a, "name", l.name, l, null),
                pe(e, a, "formEncType", l.formEncType, l, null),
                pe(e, a, "formMethod", l.formMethod, l, null),
                pe(e, a, "formTarget", l.formTarget, l, null))
              : (pe(e, a, "encType", l.encType, l, null),
                pe(e, a, "method", l.method, l, null),
                pe(e, a, "target", l.target, l, null)));
        if (n == null || typeof n == "symbol" || typeof n == "boolean") {
          e.removeAttribute(i);
          break;
        }
        ((n = zt(n)), e.setAttribute(i, n));
        break;
      case "onClick":
        n != null && (e.onclick = Va);
        return;
      case "onScroll":
        n != null && Q("scroll", e);
        return;
      case "onScrollEnd":
        n != null && Q("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(h(61));
          if (((i = n.__html), i != null)) {
            if (l.children != null) throw Error(h(60));
            t?.__html !== i && (e.innerHTML = i);
          }
        }
        break;
      case "multiple":
        e.multiple = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "muted":
        e.muted = n && typeof n != "function" && typeof n != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          n == null ||
          typeof n == "function" ||
          typeof n == "boolean" ||
          typeof n == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((i = zt(n)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", i));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        n != null && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(i, n)
          : e.removeAttribute(i);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        n && typeof n != "function" && typeof n != "symbol"
          ? e.setAttribute(i, "")
          : e.removeAttribute(i);
        break;
      case "capture":
      case "download":
        n === !0
          ? e.setAttribute(i, "")
          : n !== !1 &&
              n != null &&
              typeof n != "function" &&
              typeof n != "symbol"
            ? e.setAttribute(i, n)
            : e.removeAttribute(i);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        !isNaN(n) &&
        1 <= n
          ? e.setAttribute(i, n)
          : e.removeAttribute(i);
        break;
      case "rowSpan":
      case "start":
        n == null || typeof n == "function" || typeof n == "symbol" || isNaN(n)
          ? e.removeAttribute(i)
          : e.setAttribute(i, n);
        break;
      case "popover":
        (Q("beforetoggle", e), Q("toggle", e), ft(e, "popover", n));
        break;
      case "xlinkActuate":
        li(e, "http://www.w3.org/1999/xlink", "xlink:actuate", n);
        break;
      case "xlinkArcrole":
        li(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", n);
        break;
      case "xlinkRole":
        li(e, "http://www.w3.org/1999/xlink", "xlink:role", n);
        break;
      case "xlinkShow":
        li(e, "http://www.w3.org/1999/xlink", "xlink:show", n);
        break;
      case "xlinkTitle":
        li(e, "http://www.w3.org/1999/xlink", "xlink:title", n);
        break;
      case "xlinkType":
        li(e, "http://www.w3.org/1999/xlink", "xlink:type", n);
        break;
      case "xmlBase":
        li(e, "http://www.w3.org/XML/1998/namespace", "xml:base", n);
        break;
      case "xmlLang":
        li(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", n);
        break;
      case "xmlSpace":
        li(e, "http://www.w3.org/XML/1998/namespace", "xml:space", n);
        break;
      case "is":
        ft(e, "is", n);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (
          !(2 < i.length) ||
          (i[0] !== "o" && i[0] !== "O") ||
          (i[1] !== "n" && i[1] !== "N")
        )
          ((i = Lm.get(i) || i), ft(e, i, n));
        else return;
    }
    ae = !0;
  }
  function Jb(e, a, i, n, l, t) {
    switch (i) {
      case "style":
        ao(e, n, t);
        return;
      case "dangerouslySetInnerHTML":
        if (n != null) {
          if (typeof n != "object" || !("__html" in n)) throw Error(h(61));
          if (((i = n.__html), i != null)) {
            if (l.children != null) throw Error(h(60));
            t?.__html !== i && (e.innerHTML = i);
          }
        }
        break;
      case "children":
        if (typeof n == "string") En(e, n);
        else if (typeof n == "number" || typeof n == "bigint") En(e, "" + n);
        else return;
        break;
      case "onScroll":
        n != null && Q("scroll", e);
        return;
      case "onScrollEnd":
        n != null && Q("scrollend", e);
        return;
      case "onClick":
        n != null && (e.onclick = Va);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Kd.hasOwnProperty(i))
          e: {
            if (
              i[0] === "o" &&
              i[1] === "n" &&
              ((l = i.endsWith("Capture")),
              (t = i.slice(2, l ? i.length - 7 : void 0)),
              (a = e[ea] || null),
              (a = a != null ? a[i] : null),
              typeof a == "function" && e.removeEventListener(t, a, l),
              typeof n == "function")
            ) {
              (typeof a != "function" &&
                a !== null &&
                (i in e
                  ? (e[i] = null)
                  : e.hasAttribute(i) && e.removeAttribute(i)),
                e.addEventListener(t, n, l));
              break e;
            }
            ((ae = !0),
              i in e
                ? (e[i] = n)
                : n === !0
                  ? e.setAttribute(i, "")
                  : ft(e, i, n));
          }
        return;
    }
    ae = !0;
  }
  function Ke(e, a, i) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Q("error", e), Q("load", e));
        var n = !1,
          l = !1,
          t;
        for (t in i)
          if (i.hasOwnProperty(t)) {
            var r = i[t];
            if (r != null)
              switch (t) {
                case "src":
                  n = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, a));
                default:
                  pe(e, a, t, r, i, null);
              }
          }
        (l && pe(e, a, "srcSet", i.srcSet, i, null),
          n && pe(e, a, "src", i.src, i, null));
        return;
      case "input":
        Q("invalid", e);
        var s = (t = r = l = null),
          b = null,
          u = null;
        for (n in i)
          if (i.hasOwnProperty(n)) {
            var v = i[n];
            if (v != null)
              switch (n) {
                case "name":
                  l = v;
                  break;
                case "type":
                  r = v;
                  break;
                case "checked":
                  b = v;
                  break;
                case "defaultChecked":
                  u = v;
                  break;
                case "value":
                  t = v;
                  break;
                case "defaultValue":
                  s = v;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (v != null) throw Error(h(137, a));
                  break;
                default:
                  pe(e, a, n, v, i, null);
              }
          }
        Zd(e, t, s, b, u, r, l, !1);
        return;
      case "select":
        (Q("invalid", e), (n = r = t = null));
        for (l in i)
          if (i.hasOwnProperty(l) && ((s = i[l]), s != null))
            switch (l) {
              case "value":
                t = s;
                break;
              case "defaultValue":
                r = s;
                break;
              case "multiple":
                n = s;
              default:
                pe(e, a, l, s, i, null);
            }
        ((a = t),
          (i = r),
          (e.multiple = !!n),
          a != null ? wn(e, !!n, a, !1) : i != null && wn(e, !!n, i, !0));
        return;
      case "textarea":
        (Q("invalid", e), (t = l = n = null));
        for (r in i)
          if (i.hasOwnProperty(r) && ((s = i[r]), s != null))
            switch (r) {
              case "value":
                n = s;
                break;
              case "defaultValue":
                l = s;
                break;
              case "children":
                t = s;
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(h(91));
                break;
              default:
                pe(e, a, r, s, i, null);
            }
        Wd(e, n, l, t);
        return;
      case "option":
        for (b in i)
          i.hasOwnProperty(b) &&
            ((n = i[b]), n != null) &&
            (b === "selected"
              ? (e.selected =
                  n && typeof n != "function" && typeof n != "symbol")
              : pe(e, a, b, n, i, null));
        return;
      case "dialog":
        (Q("beforetoggle", e), Q("toggle", e), Q("cancel", e), Q("close", e));
        break;
      case "iframe":
      case "object":
        Q("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Zl.length; n++) Q(Zl[n], e);
        break;
      case "image":
        (Q("error", e), Q("load", e));
        break;
      case "details":
        Q("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Q("error", e), Q("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (u in i)
          if (i.hasOwnProperty(u) && ((n = i[u]), n != null))
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, a));
              default:
                pe(e, a, u, n, i, null);
            }
        return;
      default:
        if (es(a)) {
          for (v in i)
            i.hasOwnProperty(v) &&
              ((n = i[v]), n !== void 0 && Jb(e, a, v, n, i, void 0));
          return;
        }
    }
    for (s in i)
      i.hasOwnProperty(s) && ((n = i[s]), n != null && pe(e, a, s, n, i, null));
  }
  var fh = {};
  function gh(e, a, i, n) {
    switch (a) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var l = null,
          t = null,
          r = null,
          s = null,
          b = null,
          u = null,
          v = null;
        for (k in i) {
          var z = i[k];
          if (i.hasOwnProperty(k) && z != null)
            switch (k) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                b = z;
              default:
                n.hasOwnProperty(k) || pe(e, a, k, null, n, z);
            }
        }
        for (var p in n) {
          var k = n[p];
          if (((z = i[p]), n.hasOwnProperty(p) && (k != null || z != null)))
            switch (p) {
              case "type":
                (k !== z && (ae = !0), (t = k));
                break;
              case "name":
                (k !== z && (ae = !0), (l = k));
                break;
              case "checked":
                (k !== z && (ae = !0), (u = k));
                break;
              case "defaultChecked":
                (k !== z && (ae = !0), (v = k));
                break;
              case "value":
                (k !== z && (ae = !0), (r = k));
                break;
              case "defaultValue":
                (k !== z && (ae = !0), (s = k));
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(h(137, a));
                break;
              default:
                k !== z && pe(e, a, p, k, n, z);
            }
        }
        Jr(e, r, s, b, u, v, t, l);
        return;
      case "select":
        k = r = s = p = null;
        for (t in i)
          if (((b = i[t]), i.hasOwnProperty(t) && b != null))
            switch (t) {
              case "value":
                break;
              case "multiple":
                k = b;
              default:
                n.hasOwnProperty(t) || pe(e, a, t, null, n, b);
            }
        for (l in n)
          if (
            ((t = n[l]),
            (b = i[l]),
            n.hasOwnProperty(l) && (t != null || b != null))
          )
            switch (l) {
              case "value":
                (t !== b && (ae = !0), (p = t));
                break;
              case "defaultValue":
                (t !== b && (ae = !0), (s = t));
                break;
              case "multiple":
                (t !== b && (ae = !0), (r = t));
              default:
                t !== b && pe(e, a, l, t, n, b);
            }
        ((a = s),
          (i = r),
          (n = k),
          p != null
            ? wn(e, !!i, p, !1)
            : !!n != !!i &&
              (a != null ? wn(e, !!i, a, !0) : wn(e, !!i, i ? [] : "", !1)));
        return;
      case "textarea":
        k = p = null;
        for (s in i)
          if (
            ((l = i[s]),
            i.hasOwnProperty(s) && l != null && !n.hasOwnProperty(s))
          )
            switch (s) {
              case "value":
                break;
              case "children":
                break;
              default:
                pe(e, a, s, null, n, l);
            }
        for (r in n)
          if (
            ((l = n[r]),
            (t = i[r]),
            n.hasOwnProperty(r) && (l != null || t != null))
          )
            switch (r) {
              case "value":
                (l !== t && (ae = !0), (p = l));
                break;
              case "defaultValue":
                (l !== t && (ae = !0), (k = l));
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(h(91));
                break;
              default:
                l !== t && pe(e, a, r, l, n, t);
            }
        Jd(e, p, k);
        return;
      case "option":
        for (var C in i)
          ((p = i[C]),
            i.hasOwnProperty(C) &&
              p != null &&
              !n.hasOwnProperty(C) &&
              (C === "selected" ? (e.selected = !1) : pe(e, a, C, null, n, p)));
        for (b in n)
          ((p = n[b]),
            (k = i[b]),
            n.hasOwnProperty(b) &&
              p !== k &&
              (p != null || k != null) &&
              (b === "selected"
                ? (p !== k && (ae = !0),
                  (e.selected =
                    p && typeof p != "function" && typeof p != "symbol"))
                : pe(e, a, b, p, n, k)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var w in i)
          ((p = i[w]),
            i.hasOwnProperty(w) &&
              p != null &&
              !n.hasOwnProperty(w) &&
              pe(e, a, w, null, n, p));
        for (u in n)
          if (
            ((p = n[u]),
            (k = i[u]),
            n.hasOwnProperty(u) && p !== k && (p != null || k != null))
          )
            switch (u) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(h(137, a));
                break;
              default:
                pe(e, a, u, p, n, k);
            }
        return;
      default:
        if (es(a)) {
          for (var V in i)
            ((p = i[V]),
              i.hasOwnProperty(V) &&
                p !== void 0 &&
                !n.hasOwnProperty(V) &&
                Jb(e, a, V, void 0, n, p));
          for (v in n)
            ((p = n[v]),
              (k = i[v]),
              !n.hasOwnProperty(v) ||
                p === k ||
                (p === void 0 && k === void 0) ||
                Jb(e, a, v, p, n, k));
          return;
        }
    }
    for (var c in i)
      ((p = i[c]),
        i.hasOwnProperty(c) &&
          p != null &&
          !n.hasOwnProperty(c) &&
          pe(e, a, c, null, n, p));
    for (z in n)
      ((p = n[z]),
        (k = i[z]),
        !n.hasOwnProperty(z) ||
          p === k ||
          (p == null && k == null) ||
          pe(e, a, z, p, n, k));
  }
  function bu(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function zh() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, a = 0, i = performance.getEntriesByType("resource"), n = 0;
        n < i.length;
        n++
      ) {
        var l = i[n],
          t = l.transferSize,
          r = l.initiatorType,
          s = l.duration;
        if (t && s && bu(r)) {
          for (r = 0, s = l.responseEnd, n += 1; n < i.length; n++) {
            var b = i[n],
              u = b.startTime;
            if (u > s) break;
            var v = b.transferSize,
              z = b.initiatorType;
            v &&
              bu(z) &&
              ((b = b.responseEnd), (r += v * (b < s ? 1 : (s - u) / (b - u))));
          }
          if ((--n, (a += (8 * (t + r)) / (l.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return a / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Wb = null,
    ed = null;
  function Wl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function du(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ou(e, a) {
    if (e === 0)
      switch (a) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && a === "foreignObject" ? 0 : e;
  }
  function pu(e, a, i, n) {
    return (
      (i = Wl(i).createElement(e)),
      (i[Fe] = n),
      (i[ea] = a),
      Ke(i, e, a),
      Pe(i),
      i
    );
  }
  function ad(e, a) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof a.children == "string" ||
      typeof a.children == "number" ||
      typeof a.children == "bigint" ||
      (typeof a.dangerouslySetInnerHTML == "object" &&
        a.dangerouslySetInnerHTML !== null &&
        a.dangerouslySetInnerHTML.__html != null)
    );
  }
  var id = null;
  function Ah() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === id
        ? !1
        : ((id = e), !0)
      : ((id = null), !1);
  }
  var nd = typeof setTimeout == "function" ? setTimeout : void 0,
    Ch = typeof clearTimeout == "function" ? clearTimeout : void 0,
    cu = typeof Promise == "function" ? Promise : void 0,
    uu =
      typeof requestAnimationFrame == "function" ? requestAnimationFrame : nd,
    Bh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof cu < "u"
          ? function (e) {
              return cu.resolve(null).then(e).catch(Sh);
            }
          : nd;
  function Sh(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Gi(e) {
    return e === "head";
  }
  function mu(e, a) {
    var i = a,
      n = 0;
    do {
      var l = i.nextSibling;
      if ((e.removeChild(i), l && l.nodeType === 8))
        if (((i = l.data), i === "/$" || i === "/&")) {
          if (n === 0) {
            (e.removeChild(l), pl(a));
            return;
          }
          n--;
        } else if (
          i === "$" ||
          i === "$?" ||
          i === "$~" ||
          i === "$!" ||
          i === "&"
        )
          n++;
        else if (i === "html") pd(e.ownerDocument.documentElement);
        else if (i === "head") {
          ((i = e.ownerDocument.head), pd(i));
          for (var t = i.firstChild; t;) {
            var r = t.nextSibling,
              s = t.nodeName;
            (t[vl] ||
              s === "SCRIPT" ||
              s === "STYLE" ||
              (s === "LINK" && t.rel.toLowerCase() === "stylesheet") ||
              i.removeChild(t),
              (t = r));
          }
        } else i === "body" && pd(e.ownerDocument.body);
      i = l;
    } while (i);
    pl(a);
  }
  function ku(e, a) {
    var i = e;
    e = 0;
    do {
      var n = i.nextSibling;
      if (
        (i.nodeType === 1
          ? a
            ? ((i._stashedDisplay = i.style.display),
              (i.style.display = "none"))
            : ((i.style.display = i._stashedDisplay || ""),
              i.getAttribute("style") === "" && i.removeAttribute("style"))
          : i.nodeType === 3 &&
            (a
              ? ((i._stashedText = i.nodeValue), (i.nodeValue = ""))
              : (i.nodeValue = i._stashedText || "")),
        n && n.nodeType === 8)
      )
        if (((i = n.data), i === "/$")) {
          if (e === 0) break;
          e--;
        } else (i !== "$" && i !== "$?" && i !== "$~" && i !== "$!") || e++;
      i = n;
    } while (i);
  }
  function hu(e, a, i) {
    if (
      ((a = CSS.escape(a) !== a ? "r-" + btoa(a).replace(/=/g, "") : a),
      (e.style.viewTransitionName = a),
      i != null && (e.style.viewTransitionClass = i),
      (i = getComputedStyle(e)),
      i.display === "inline")
    ) {
      if (((a = e.getClientRects()), a.length === 1)) var n = 1;
      else
        for (var l = (n = 0); l < a.length; l++) {
          var t = a[l];
          0 < t.width && 0 < t.height && n++;
        }
      n === 1 &&
        ((e = e.style),
        (e.display = a.length === 1 ? "inline-block" : "block"),
        (e.marginTop = "-" + i.paddingTop),
        (e.marginBottom = "-" + i.paddingBottom));
    }
  }
  function vu(e, a) {
    ((e = e.style), (a = a.style));
    var i =
      a != null
        ? a.hasOwnProperty("viewTransitionName")
          ? a.viewTransitionName
          : a.hasOwnProperty("view-transition-name")
            ? a["view-transition-name"]
            : null
        : null;
    ((e.viewTransitionName =
      i == null || typeof i == "boolean" ? "" : ("" + i).trim()),
      (i =
        a != null
          ? a.hasOwnProperty("viewTransitionClass")
            ? a.viewTransitionClass
            : a.hasOwnProperty("view-transition-class")
              ? a["view-transition-class"]
              : null
          : null),
      (e.viewTransitionClass =
        i == null || typeof i == "boolean" ? "" : ("" + i).trim()),
      e.display === "inline-block" &&
        (a == null
          ? (e.display = e.margin = "")
          : ((i = a.display),
            (e.display = i == null || typeof i == "boolean" ? "" : i),
            (i = a.margin),
            i != null
              ? (e.margin = i)
              : ((i = a.hasOwnProperty("marginTop")
                  ? a.marginTop
                  : a["margin-top"]),
                (e.marginTop = i == null || typeof i == "boolean" ? "" : i),
                (a = a.hasOwnProperty("marginBottom")
                  ? a.marginBottom
                  : a["margin-bottom"]),
                (e.marginBottom =
                  a == null || typeof a == "boolean" ? "" : a)))));
  }
  function Oh(e, a, i) {
    return (
      (i = i.ownerDocument.defaultView),
      {
        rect: e,
        abs: a.position === "absolute" || a.position === "fixed",
        clip:
          a.clipPath !== "none" ||
          a.overflow !== "visible" ||
          a.filter !== "none" ||
          a.mask !== "none" ||
          a.mask !== "none" ||
          a.borderRadius !== "0px",
        view:
          0 <= e.bottom &&
          0 <= e.right &&
          e.top <= i.innerHeight &&
          e.left <= i.innerWidth,
      }
    );
  }
  function ld(e) {
    var a = e.getBoundingClientRect(),
      i = getComputedStyle(e);
    return Oh(a, i, e);
  }
  function wh(e) {
    return e.documentElement.clientHeight;
  }
  function Eh(e) {
    (this.addEventListener("load", e), this.addEventListener("error", e));
  }
  function Hh(e, a, i, n, l, t, r, s, b) {
    var u = a.nodeType === 9 ? a : a.ownerDocument;
    try {
      var v = u.startViewTransition({
        update: function () {
          var p = u.defaultView,
            k = p.navigation && p.navigation.transition,
            C = u.fonts.status;
          n();
          var w = [];
          if (
            (C === "loaded" &&
              (wh(u), u.fonts.status === "loading" && w.push(u.fonts.ready)),
            (C = w.length),
            e !== null)
          )
            for (var V = e.suspenseyImages, c = 0, d = 0; d < V.length; d++) {
              var m = V[d];
              if (!m.complete) {
                var g = m.getBoundingClientRect();
                if (
                  0 < g.bottom &&
                  0 < g.right &&
                  g.top < p.innerHeight &&
                  g.left < p.innerWidth
                ) {
                  if (((c += Mu(m)), c > Tr)) {
                    w.length = C;
                    break;
                  }
                  ((m = new Promise(Eh.bind(m))), w.push(m));
                }
              }
            }
          if (0 < w.length)
            return (
              (p = Promise.race([
                Promise.all(w),
                new Promise(function (S) {
                  return setTimeout(S, 500);
                }),
              ]).then(l, l)),
              (k ? Promise.allSettled([k.finished, p]) : p).then(t, t)
            );
          if ((l(), k)) return k.finished.then(t, t);
          t();
        },
        types: i,
      });
      u.__reactViewTransition = v;
      var z = [];
      return (
        v.ready.then(
          function () {
            for (
              var p = u.documentElement.getAnimations({
                  subtree: !0,
                }),
                k = 0;
              k < p.length;
              k++
            ) {
              var C = p[k],
                w = C.effect,
                V = w.pseudoElement;
              if (V != null && V.startsWith("::view-transition")) {
                (z.push(C), (C = w.getKeyframes()));
                for (var c = (V = void 0), d = !0, m = 0; m < C.length; m++) {
                  var g = C[m],
                    S = g.width;
                  if (V === void 0) V = S;
                  else if (V !== S) {
                    d = !1;
                    break;
                  }
                  if (((S = g.height), c === void 0)) c = S;
                  else if (c !== S) {
                    d = !1;
                    break;
                  }
                  (delete g.width,
                    delete g.height,
                    g.transform === "none" && delete g.transform);
                }
                d &&
                  V !== void 0 &&
                  c !== void 0 &&
                  (w.setKeyframes(C),
                  (d = getComputedStyle(w.target, w.pseudoElement)),
                  d.width !== V || d.height !== c) &&
                  ((d = C[0]),
                  (d.width = V),
                  (d.height = c),
                  (d = C[C.length - 1]),
                  (d.width = V),
                  (d.height = c),
                  w.setKeyframes(C));
              }
            }
            r();
          },
          function (p) {
            u.__reactViewTransition === v && (u.__reactViewTransition = null);
            try {
              (typeof p == "object" &&
                p !== null &&
                p.name === "InvalidStateError" &&
                (p.message ===
                  "View transition was skipped because document visibility state is hidden." ||
                  p.message ===
                    "Skipping view transition because document visibility state has become hidden." ||
                  p.message ===
                    "Skipping view transition because viewport size changed." ||
                  p.message ===
                    "Transition was aborted because of invalid state") &&
                (p = null),
                p !== null && b(p));
            } finally {
              (n(), l(), r());
            }
          },
        ),
        v.finished.finally(function () {
          for (var p = 0; p < z.length; p++) z[p].cancel();
          (u.__reactViewTransition === v && (u.__reactViewTransition = null),
            s());
        }),
        v
      );
    } catch {
      return (n(), l(), r(), null);
    }
  }
  function gn(e, a) {
    ((this._scope = document.documentElement),
      (this._selector = "::view-transition-" + e + "(" + a + ")"));
  }
  ((gn.prototype.animate = function (e, a) {
    return (
      (a =
        typeof a == "number"
          ? {
              duration: a,
            }
          : $({}, a)),
      (a.pseudoElement = this._selector),
      this._scope.animate(e, a)
    );
  }),
    (gn.prototype.getAnimations = function () {
      for (
        var e = this._scope,
          a = this._selector,
          i = e.getAnimations({
            subtree: !0,
          }),
          n = [],
          l = 0;
        l < i.length;
        l++
      ) {
        var t = i[l].effect;
        t !== null && t.target === e && t.pseudoElement === a && n.push(i[l]);
      }
      return n;
    }),
    (gn.prototype.getComputedStyle = function () {
      return getComputedStyle(this._scope, this._selector);
    }));
  function yu(e) {
    return {
      name: e,
      group: new gn("group", e),
      imagePair: new gn("image-pair", e),
      old: new gn("old", e),
      new: new gn("new", e),
    };
  }
  function fa(e) {
    ((this._fragmentFiber = e),
      (this._observers = this._eventListeners = null));
  }
  fa.prototype.addEventListener = function (e, a, i) {
    var n = null,
      l = null;
    if (!(
      i != null &&
      typeof i != "boolean" &&
      ((n = i.signal || null), n !== null && n.aborted)
    )) {
      this._eventListeners === null && (this._eventListeners = []);
      var t = this._eventListeners;
      if (gu(t, e, a, i) === -1) {
        var r = this,
          s = a;
        (i != null &&
          typeof i != "boolean" &&
          i.once === !0 &&
          (s = function (b) {
            (r.removeEventListener(e, a, i),
              typeof a == "function" ? a.call(this, b) : a.handleEvent(b));
          }),
          n !== null &&
            ((l = r.removeEventListener.bind(r, e, a, i)),
            n.addEventListener("abort", l, {
              once: !0,
            }),
            (l = n.removeEventListener.bind(n, "abort", l))),
          (n = tl(i)),
          t.push({
            type: e,
            listener: a,
            optionsOrUseCapture: i,
            attachedListener: s,
            cleanup: l,
          }),
          y(this._fragmentFiber.child, !1, Th, e, s, n));
      }
      this._eventListeners = t;
    }
  };
  function Th(e, a, i, n) {
    return (he(e).addEventListener(a, i, n), !1);
  }
  fa.prototype.removeEventListener = function (e, a, i) {
    var n = this._eventListeners;
    if (n !== null && ((a = gu(n, e, a, i)), a !== -1)) {
      var l = n[a];
      i = l.attachedListener;
      var t = l.cleanup;
      ((l = tl(l.optionsOrUseCapture)),
        y(this._fragmentFiber.child, !1, Dh, e, i, l),
        n.splice(a, 1),
        t !== null && t());
    }
  };
  function Dh(e, a, i, n) {
    return (he(e).removeEventListener(a, i, n), !1);
  }
  function tl(e) {
    return e != null &&
      typeof e != "boolean" &&
      (e.once === !0 || e.signal instanceof AbortSignal)
      ? {
          capture: e.capture,
          passive: e.passive,
        }
      : e;
  }
  function fu(e) {
    return e == null
      ? "c=0"
      : typeof e == "boolean"
        ? "c=" + (e ? "1" : "0")
        : "c=" + (e.capture ? "1" : "0");
  }
  function gu(e, a, i, n) {
    if (e.length === 0) return -1;
    n = fu(n);
    for (var l = 0; l < e.length; l++) {
      var t = e[l];
      if (t.type === a && t.listener === i && fu(t.optionsOrUseCapture) === n)
        return l;
    }
    return -1;
  }
  ((fa.prototype.dispatchEvent = function (e) {
    var a = O(this._fragmentFiber);
    if (a === null) return !0;
    a = he(a);
    var i = this._eventListeners;
    if ((i !== null && 0 < i.length) || !e.bubbles) {
      var n =
        a.nodeType === 9 ? a.createComment("") : document.createTextNode("");
      if (i)
        for (var l = 0; l < i.length; l++) {
          var t = i[l];
          n.addEventListener(
            t.type,
            t.attachedListener,
            tl(t.optionsOrUseCapture),
          );
        }
      if ((a.appendChild(n), (e = n.dispatchEvent(e)), i))
        for (l = 0; l < i.length; l++)
          ((t = i[l]),
            n.removeEventListener(
              t.type,
              t.attachedListener,
              tl(t.optionsOrUseCapture),
            ));
      return (a.removeChild(n), e);
    }
    return a.dispatchEvent(e);
  }),
    (fa.prototype.focus = function (e) {
      y(this._fragmentFiber.child, !0, zu, e, void 0, void 0);
    }));
  function zu(e, a) {
    return e.tag === 6 ? !1 : ((e = he(e)), Yh(e, a));
  }
  fa.prototype.focusLast = function (e) {
    var a = [];
    y(this._fragmentFiber.child, !0, td, a, void 0, void 0);
    for (var i = a.length - 1; 0 <= i && !zu(a[i], e); i--);
  };
  function td(e, a) {
    return (a.push(e), !1);
  }
  fa.prototype.blur = function () {
    var e = O(this._fragmentFiber);
    e !== null &&
      ((e = he(e)),
      (e = Wl(e).activeElement),
      e !== null && y(this._fragmentFiber.child, !1, Nh, e, void 0, void 0));
  };
  function Nh(e, a) {
    return e.tag === 6
      ? !1
      : ((e = he(e)), e === a || e.contains(a) ? (a.blur(), !0) : !1);
  }
  fa.prototype.observeUsing = function (e) {
    (this._observers === null && (this._observers = new Set()),
      this._observers.add(e),
      y(this._fragmentFiber.child, !1, xh, e, void 0, void 0));
  };
  function xh(e, a) {
    return (e.tag === 6 || ((e = he(e)), a.observe(e)), !1);
  }
  fa.prototype.unobserveUsing = function (e) {
    var a = this._observers;
    if (a !== null && a.has(e)) {
      (a.delete(e), y(this._fragmentFiber.child, !1, Rh, e, void 0, void 0));
      for (var i = (a = 0); i < Ma.length; i++) {
        var n = Ma[i];
        n.fragmentInstance === this && n.observer === e
          ? e.unobserve(n.instance)
          : (Ma[a++] = n);
      }
      Ma.length = a;
    }
  };
  function Rh(e, a) {
    return (e.tag === 6 || ((e = he(e)), a.unobserve(e)), !1);
  }
  var Ma = [],
    rd = !1;
  function Ph(e, a, i) {
    (Ma.push({
      fragmentInstance: e,
      observer: a,
      instance: i,
    }),
      rd ||
        ((rd = !0),
        Vh(function () {
          rd = !1;
          var n = Ma;
          Ma = [];
          for (var l = 0; l < n.length; l++) {
            var t = n[l];
            t.observer.unobserve(t.instance);
          }
        })));
  }
  fa.prototype.getClientRects = function () {
    var e = [];
    return (y(this._fragmentFiber.child, !1, qh, e, void 0, void 0), e);
  };
  function qh(e, a) {
    if (e.tag === 6) {
      e = e.stateNode;
      var i = e.ownerDocument.createRange();
      (i.selectNodeContents(e), a.push.apply(a, i.getClientRects()));
    } else ((e = he(e)), a.push.apply(a, e.getClientRects()));
    return !1;
  }
  ((fa.prototype.getRootNode = function (e) {
    var a = O(this._fragmentFiber);
    return a === null ? this : he(a).getRootNode(e);
  }),
    (fa.prototype.compareDocumentPosition = function (e) {
      var a = O(this._fragmentFiber);
      if (a === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      var i = [];
      y(this._fragmentFiber.child, !1, td, i, void 0, void 0);
      var n = he(a);
      if (i.length === 0) {
        if (((i = n), Be(this._fragmentFiber))) {
          e: {
            for (a = this._fragmentFiber.return; a !== null;) {
              if (a.tag === 4) {
                a = a.stateNode.containerInfo;
                break e;
              }
              if (a.tag === 3 || a.tag === 5 || a.tag === 27) break;
              a = a.return;
            }
            a = null;
          }
          a != null && (i = a);
        }
        a = this._fragmentFiber;
        var l = (n = i.compareDocumentPosition(e));
        return (
          i === e
            ? (l = Node.DOCUMENT_POSITION_CONTAINS)
            : n & Node.DOCUMENT_POSITION_CONTAINED_BY &&
              ((i = je(a)[1]),
              i === null
                ? (l = Node.DOCUMENT_POSITION_PRECEDING)
                : ((e = he(i).compareDocumentPosition(e)),
                  (l =
                    e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                      ? Node.DOCUMENT_POSITION_FOLLOWING
                      : Node.DOCUMENT_POSITION_PRECEDING))),
          (l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
        );
      }
      ((a = he(i[0])), (l = he(i[i.length - 1])));
      var t = Be(this._fragmentFiber) ? a.parentElement : n;
      if (t == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
      ((n = t.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY),
        (t =
          t.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY));
      var r = a.compareDocumentPosition(e),
        s = l.compareDocumentPosition(e),
        b =
          r & Node.DOCUMENT_POSITION_CONTAINED_BY ||
          s & Node.DOCUMENT_POSITION_CONTAINED_BY;
      return (
        (s =
          n &&
          t &&
          r & Node.DOCUMENT_POSITION_FOLLOWING &&
          s & Node.DOCUMENT_POSITION_PRECEDING),
        (a =
          (n && a === e) || (t && l === e) || b || s
            ? Node.DOCUMENT_POSITION_CONTAINED_BY
            : (!n && a === e) || (!t && l === e)
              ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
              : r),
        a & Node.DOCUMENT_POSITION_DISCONNECTED ||
        a & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
        Lh(a, this._fragmentFiber, i[0], i[i.length - 1], e)
          ? a
          : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
      );
    }));
  function Lh(e, a, i, n, l) {
    var t = Ji(l);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if ((i = !!t))
        e: {
          for (; t !== null;) {
            if (t.tag === 7 && (t === a || t.alternate === a)) {
              i = !0;
              break e;
            }
            t = t.return;
          }
          i = !1;
        }
      return i;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (t === null)
        return (
          (t = l.ownerDocument),
          l === t || l === t.documentElement || l === t.body
        );
      e: {
        for (t = a, a = O(a); t !== null;) {
          if (!(
            (t.tag !== 5 && t.tag !== 3 && t.tag !== 27) ||
            (t !== a && t.alternate !== a)
          )) {
            t = !0;
            break e;
          }
          t = t.return;
        }
        t = !1;
      }
      return t;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING
      ? ((a = !!t) &&
          !(a = t === i) &&
          ((a = sa(i, t, Fa)),
          a === null
            ? (a = !1)
            : (y(a, !0, ji, t, i), (t = ga), (ga = null), (a = t !== null))),
        a)
      : e & Node.DOCUMENT_POSITION_FOLLOWING
        ? ((a = !!t) &&
            !(a = t === n) &&
            ((a = sa(n, t, Fa)),
            a === null
              ? (a = !1)
              : (y(a, !0, Ua, t, n),
                (t = ga),
                (ra = ga = null),
                (a = t !== null))),
          a)
        : !1;
  }
  function Au(e, a) {
    var i = e.ownerDocument.createRange();
    (i.selectNodeContents(e),
      (e = i.getBoundingClientRect()),
      window.scrollTo(
        window.scrollX + e.left,
        a
          ? window.scrollY + e.top
          : window.scrollY + e.bottom - window.innerHeight,
      ));
  }
  fa.prototype.scrollIntoView = function (e) {
    if (typeof e == "object") throw Error(h(566));
    var a = [];
    y(this._fragmentFiber.child, !1, td, a, void 0, void 0);
    var i = e !== !1;
    if (a.length === 0) {
      var n = je(this._fragmentFiber);
      if (
        ((n = i ? n[1] || n[0] || O(this._fragmentFiber) : n[0] || n[1]),
        n === null)
      )
        return;
      if (n.tag === 6) {
        ((e = he(n)), Au(e, i));
        return;
      }
      if (((n = he(n)), n.nodeType !== 9)) {
        if (n.nodeType === 11) {
          ((i = "host" in n ? n.host : null),
            i !== null && i.scrollIntoView(e));
          return;
        }
        n.scrollIntoView(e);
      }
    }
    for (n = i ? a.length - 1 : 0; n !== (i ? -1 : a.length);) {
      var l = a[n];
      (l.tag === 6 ? ((l = he(l)), Au(l, i)) : he(l).scrollIntoView(e),
        (n += i ? -1 : 1));
    }
  };
  function Mh(e, a) {
    return ((e = he(e)), Cu(e, a), !1);
  }
  function Cu(e, a) {
    (e.reactFragments == null && (e.reactFragments = new Set()),
      e.reactFragments.add(a));
  }
  function Bu(e, a) {
    var i = a._eventListeners;
    if (i !== null)
      for (var n = 0; n < i.length; n++) {
        var l = i[n];
        e.addEventListener(
          l.type,
          l.attachedListener,
          tl(l.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((i = a._observers),
      i !== null &&
        i.forEach(function (t) {
          for (var r = 0, s = 0; s < Ma.length; s++) {
            var b = Ma[s];
            (b.fragmentInstance !== a ||
              b.observer !== t ||
              b.instance !== e) &&
              (Ma[r++] = b);
          }
          ((Ma.length = r), t.observe(e));
        }),
      Cu(e, a));
  }
  function Uh(e, a) {
    var i = a._eventListeners;
    if (i !== null)
      for (var n = 0; n < i.length; n++) {
        var l = i[n];
        e.removeEventListener(
          l.type,
          l.attachedListener,
          tl(l.optionsOrUseCapture),
        );
      }
    e.nodeType !== 3 &&
      ((i = a._observers),
      i !== null &&
        i.forEach(function (t) {
          typeof t.rootMargin == "string" ? Ph(a, t, e) : t.unobserve(e);
        }),
      e.reactFragments != null && e.reactFragments.delete(a));
  }
  function sd(e) {
    var a = e.firstChild;
    for (a && a.nodeType === 10 && (a = a.nextSibling); a;) {
      var i = a;
      switch (((a = a.nextSibling), i.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (sd(i), yt(i));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (i.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(i);
    }
  }
  function Fh(e, a, i, n) {
    for (; e.nodeType === 1;) {
      var l = i;
      if (e.nodeName.toLowerCase() !== a.toLowerCase()) {
        if (!n && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (n) {
        if (!e[vl])
          switch (a) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((t = e.getAttribute("rel")),
                t === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                t !== l.rel ||
                e.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                e.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                e.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((t = e.getAttribute("src")),
                (t !== (l.src == null ? null : l.src) ||
                  e.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  e.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  t &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (a === "input" && e.type === "hidden") {
        var t = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === t) return e;
      } else return e;
      if (((e = Ta(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function Ih(e, a, i) {
    if (a === "") return null;
    for (; e.nodeType !== 3;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !i) ||
        ((e = Ta(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Su(e, a) {
    for (; e.nodeType !== 8;)
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = Ta(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function bd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function dd(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function Gh(e, a) {
    var i = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = a;
    else if (e.data !== "$?" || i.readyState !== "loading") a();
    else {
      var n = function () {
        (a(), i.removeEventListener("DOMContentLoaded", n));
      };
      (i.addEventListener("DOMContentLoaded", n), (e._reactRetry = n));
    }
  }
  function Ta(e) {
    for (; e != null; e = e.nextSibling) {
      var a = e.nodeType;
      if (a === 1 || a === 3) break;
      if (a === 8) {
        if (
          ((a = e.data),
          a === "$" ||
            a === "$!" ||
            a === "$?" ||
            a === "$~" ||
            a === "&" ||
            a === "F!" ||
            a === "F")
        )
          break;
        if (a === "/$" || a === "/&") return null;
      }
    }
    return e;
  }
  var od = null;
  function Ou(e) {
    e = e.nextSibling;
    for (var a = 0; e;) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "/$" || i === "/&") {
          if (a === 0) return Ta(e.nextSibling);
          a--;
        } else
          (i !== "$" && i !== "$!" && i !== "$?" && i !== "$~" && i !== "&") ||
            a++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function wu(e) {
    e = e.previousSibling;
    for (var a = 0; e;) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?" || i === "$~" || i === "&") {
          if (a === 0) return e;
          a--;
        } else (i !== "/$" && i !== "/&") || a++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Yh(e, a) {
    function i() {
      n = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var n = !1;
    try {
      (e.ownerDocument.addEventListener("focus", i, !0),
        (e.focus || HTMLElement.prototype.focus).call(e, a));
    } finally {
      e.ownerDocument.removeEventListener("focus", i, !0);
    }
    return n;
  }
  function Vh(e) {
    uu(function () {
      uu(function (a) {
        return e(a);
      });
    });
  }
  function Eu(e, a, i) {
    switch (((a = Wl(i)), e)) {
      case "html":
        if (((e = a.documentElement), !e)) throw Error(h(452));
        return e;
      case "head":
        if (((e = a.head), !e)) throw Error(h(453));
        return e;
      case "body":
        if (((e = a.body), !e)) throw Error(h(454));
        return e;
      default:
        throw Error(h(451));
    }
  }
  function Hu(e, a, i) {
    for (var n in i) {
      var l = i[n];
      i.hasOwnProperty(n) && l != null && pe(e, a, n, null, fh, l);
    }
    (i.dangerouslySetInnerHTML != null && (e.textContent = ""),
      e.onclick === Va && (e.onclick = null),
      yt(e));
  }
  function pd(e) {
    for (var a = e.attributes; a.length;) e.removeAttributeNode(a[0]);
    yt(e);
  }
  var Da = new Map(),
    Tu = new Set();
  function et(e) {
    if (typeof e.getRootNode == "function") {
      var a = e.getRootNode();
      if (a.nodeType === 9 || a.nodeType === 11) return a;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var vi = U.d;
  U.d = {
    f: Kh,
    r: _h,
    D: $h,
    C: jh,
    L: Qh,
    m: Xh,
    X: Jh,
    S: Zh,
    M: Wh,
  };
  function Kh() {
    var e = vi.f(),
      a = zr();
    return e || a;
  }
  function _h(e) {
    var a = Bn(e);
    a !== null && a.tag === 5 && a.type === "form" ? Np(a) : vi.r(e);
  }
  var rl = typeof document > "u" ? null : document;
  function Du(e, a, i) {
    var n = rl;
    if (n && typeof a == "string" && a) {
      var l = Ca(a);
      ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
        typeof i == "string" && (l += '[crossorigin="' + i + '"]'),
        Tu.has(l) ||
          (Tu.add(l),
          (e = {
            rel: e,
            crossOrigin: i,
            href: a,
          }),
          n.querySelector(l) === null &&
            ((a = n.createElement("link")),
            Ke(a, "link", e),
            Pe(a),
            n.head.appendChild(a))));
    }
  }
  function $h(e) {
    (vi.D(e), Du("dns-prefetch", e, null));
  }
  function jh(e, a) {
    (vi.C(e, a), Du("preconnect", e, a));
  }
  function Qh(e, a, i) {
    vi.L(e, a, i);
    var n = rl;
    if (n && e && a) {
      var l = 'link[rel="preload"][as="' + Ca(a) + '"]';
      a === "image" && i && i.imageSrcSet
        ? ((l += '[imagesrcset="' + Ca(i.imageSrcSet) + '"]'),
          typeof i.imageSizes == "string" &&
            (l += '[imagesizes="' + Ca(i.imageSizes) + '"]'))
        : (l += '[href="' + Ca(e) + '"]');
      var t = l;
      switch (a) {
        case "style":
          t = sl(e);
          break;
        case "script":
          t = bl(e);
      }
      if (!(
        Da.has(t) ||
        ((e = $(
          {
            rel: "preload",
            href: a === "image" && i && i.imageSrcSet ? void 0 : e,
            as: a,
          },
          i,
        )),
        Da.set(t, e),
        n.querySelector(l) !== null ||
          (a === "style" && n.querySelector(at(t))) ||
          (a === "script" && n.querySelector(it(t))))
      )) {
        var r = n.createElement("link");
        (Ke(r, "link", e),
          a === "style" &&
            ((r[vt] = !0),
            (r.onload = r.onerror =
              function () {
                Yd(r);
              })),
          Pe(r),
          n.head.appendChild(r));
      }
    }
  }
  function Xh(e, a) {
    vi.m(e, a);
    var i = rl;
    if (i && e) {
      var n = a && typeof a.as == "string" ? a.as : "script",
        l =
          'link[rel="modulepreload"][as="' + Ca(n) + '"][href="' + Ca(e) + '"]',
        t = l;
      switch (n) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          t = bl(e);
      }
      if (
        !Da.has(t) &&
        ((e = $(
          {
            rel: "modulepreload",
            href: e,
          },
          a,
        )),
        Da.set(t, e),
        i.querySelector(l) === null)
      ) {
        switch (n) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (i.querySelector(it(t))) return;
        }
        ((n = i.createElement("link")),
          Ke(n, "link", e),
          Pe(n),
          i.head.appendChild(n));
      }
    }
  }
  function Zh(e, a, i) {
    vi.S(e, a, i);
    var n = rl;
    if (n && e) {
      var l = Sn(n).hoistableStyles,
        t = sl(e);
      a = a || "default";
      var r = l.get(t);
      if (!r) {
        var s = {
          loading: 0,
          preload: null,
        };
        if ((r = n.querySelector(at(t)))) s.loading = 5;
        else {
          ((e = $(
            {
              rel: "stylesheet",
              href: e,
              "data-precedence": a,
            },
            i,
          )),
            (i = Da.get(t)) && cd(e, i));
          var b = (r = n.createElement("link"));
          (Pe(b),
            Ke(b, "link", e),
            (b._p = new Promise(function (u, v) {
              ((b.onload = u), (b.onerror = v));
            })),
            b.addEventListener("load", function () {
              s.loading |= 1;
            }),
            b.addEventListener("error", function () {
              s.loading |= 2;
            }),
            (s.loading |= 4),
            Er(r, a, n));
        }
        ((r = {
          type: "stylesheet",
          instance: r,
          count: 1,
          state: s,
        }),
          l.set(t, r));
      }
    }
  }
  function Jh(e, a) {
    vi.X(e, a);
    var i = rl;
    if (i && e) {
      var n = Sn(i).hoistableScripts,
        l = bl(e),
        t = n.get(l);
      t ||
        ((t = i.querySelector(it(l))),
        t ||
          ((e = $(
            {
              src: e,
              async: !0,
            },
            a,
          )),
          (a = Da.get(l)) && ud(e, a),
          (t = i.createElement("script")),
          Pe(t),
          Ke(t, "link", e),
          i.head.appendChild(t)),
        (t = {
          type: "script",
          instance: t,
          count: 1,
          state: null,
        }),
        n.set(l, t));
    }
  }
  function Wh(e, a) {
    vi.M(e, a);
    var i = rl;
    if (i && e) {
      var n = Sn(i).hoistableScripts,
        l = bl(e),
        t = n.get(l);
      t ||
        ((t = i.querySelector(it(l))),
        t ||
          ((e = $(
            {
              src: e,
              async: !0,
              type: "module",
            },
            a,
          )),
          (a = Da.get(l)) && ud(e, a),
          (t = i.createElement("script")),
          Pe(t),
          Ke(t, "link", e),
          i.head.appendChild(t)),
        (t = {
          type: "script",
          instance: t,
          count: 1,
          state: null,
        }),
        n.set(l, t));
    }
  }
  function Nu(e, a, i, n) {
    var l = (l = fi.current) ? et(l) : null;
    if (!l) throw Error(h(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof i.precedence == "string" && typeof i.href == "string"
          ? ((i = sl(i.href)),
            (a = Sn(l).hoistableStyles),
            (n = a.get(i)),
            n ||
              ((n = {
                type: "style",
                instance: null,
                count: 0,
                state: null,
              }),
              a.set(i, n)),
            n)
          : {
              type: "void",
              instance: null,
              count: 0,
              state: null,
            };
      case "link":
        if (
          i.rel === "stylesheet" &&
          typeof i.href == "string" &&
          typeof i.precedence == "string"
        ) {
          e = sl(i.href);
          var t = Sn(l).hoistableStyles,
            r = t.get(e);
          if (
            (r ||
              ((l = l.ownerDocument || l),
              (r = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: {
                  loading: 0,
                  preload: null,
                },
              }),
              t.set(e, r),
              (t = l.querySelector(at(e)))
                ? t._p || ((r.instance = t), (r.state.loading = 5))
                : ((t = Da.get(e)),
                  t ||
                    ((t = {
                      rel: "preload",
                      as: "style",
                      href: i.href,
                      crossOrigin: i.crossOrigin,
                      integrity: i.integrity,
                      media: i.media,
                      hrefLang: i.hrefLang,
                      referrerPolicy: i.referrerPolicy,
                    }),
                    Da.set(e, t)),
                  ev(l, e, t, r.state))),
            a && n === null)
          )
            throw Error(h(528, ""));
          return r;
        }
        if (a && n !== null) throw Error(h(529, ""));
        return null;
      case "script":
        return (
          (a = i.async),
          (i = i.src),
          typeof i == "string" &&
          a &&
          typeof a != "function" &&
          typeof a != "symbol"
            ? ((i = bl(i)),
              (a = Sn(l).hoistableScripts),
              (n = a.get(i)),
              n ||
                ((n = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(i, n)),
              n)
            : {
                type: "void",
                instance: null,
                count: 0,
                state: null,
              }
        );
      default:
        throw Error(h(444, e));
    }
  }
  function sl(e) {
    return 'href="' + Ca(e) + '"';
  }
  function at(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xu(e) {
    return $({}, e, {
      "data-precedence": e.precedence,
      precedence: null,
    });
  }
  function ev(e, a, i, n) {
    if ((a = e.querySelector('link[rel="preload"][as="style"][' + a + "]"))) {
      if (a[vt] !== !0) {
        n.loading = 1;
        return;
      }
    } else
      ((a = e.createElement("link")),
        (a[vt] = !0),
        (a.onload = a.onerror = Yd.bind(null, a)),
        Ke(a, "link", i),
        Pe(a),
        e.head.appendChild(a));
    ((n.preload = a),
      a.addEventListener("load", function () {
        return (n.loading |= 1);
      }),
      a.addEventListener("error", function () {
        return (n.loading |= 2);
      }));
  }
  function bl(e) {
    return '[src="' + Ca(e) + '"]';
  }
  function it(e) {
    return "script[async]" + e;
  }
  function Ru(e, a, i) {
    if ((a.count++, a.instance === null))
      switch (a.type) {
        case "style":
          var n = e.querySelector('style[data-href~="' + Ca(i.href) + '"]');
          if (n) return ((a.instance = n), Pe(n), n);
          var l = $({}, i, {
            "data-href": i.href,
            "data-precedence": i.precedence,
            href: null,
            precedence: null,
          });
          return (
            (n = (e.ownerDocument || e).createElement("style")),
            Pe(n),
            Ke(n, "style", l),
            Er(n, i.precedence, e),
            (a.instance = n)
          );
        case "stylesheet":
          l = sl(i.href);
          var t = e.querySelector(at(l));
          if (t) return ((a.state.loading |= 4), (a.instance = t), Pe(t), t);
          ((n = xu(i)),
            (l = Da.get(l)) && cd(n, l),
            (t = (e.ownerDocument || e).createElement("link")),
            Pe(t));
          var r = t;
          return (
            (r._p = new Promise(function (s, b) {
              ((r.onload = s), (r.onerror = b));
            })),
            Ke(t, "link", n),
            (a.state.loading |= 4),
            Er(t, i.precedence, e),
            (a.instance = t)
          );
        case "script":
          return (
            (t = bl(i.src)),
            (l = e.querySelector(it(t)))
              ? ((a.instance = l), Pe(l), l)
              : ((n = i),
                (l = Da.get(t)) && ((n = $({}, i)), ud(n, l)),
                (e = e.ownerDocument || e),
                (l = e.createElement("script")),
                Pe(l),
                Ke(l, "link", n),
                e.head.appendChild(l),
                (a.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(h(443, a.type));
      }
    else
      a.type === "stylesheet" &&
        (a.state.loading & 4) === 0 &&
        ((n = a.instance), (a.state.loading |= 4), Er(n, i.precedence, e));
    return a.instance;
  }
  function Er(e, a, i) {
    for (
      var n = i.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = n.length ? n[n.length - 1] : null,
        t = l,
        r = 0;
      r < n.length;
      r++
    ) {
      var s = n[r];
      if (s.dataset.precedence === a) t = s;
      else if (t !== l) break;
    }
    t
      ? t.parentNode.insertBefore(e, t.nextSibling)
      : ((a = i.nodeType === 9 ? i.head : i), a.insertBefore(e, a.firstChild));
  }
  function cd(e, a) {
    (e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.title == null && (e.title = a.title));
  }
  function ud(e, a) {
    (e.crossOrigin == null && (e.crossOrigin = a.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = a.referrerPolicy),
      e.integrity == null && (e.integrity = a.integrity));
  }
  var Hr = null;
  function Pu(e, a, i) {
    if (Hr === null) {
      var n = new Map(),
        l = (Hr = new Map());
      l.set(i, n);
    } else ((l = Hr), (n = l.get(i)), n || ((n = new Map()), l.set(i, n)));
    if (n.has(e)) return n;
    for (
      n.set(e, null), i = i.getElementsByTagName(e), l = 0;
      l < i.length;
      l++
    ) {
      var t = i[l];
      if (
        !(
          t[vl] ||
          t[Fe] ||
          (e === "link" && t.getAttribute("rel") === "stylesheet")
        ) &&
        t.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var r = t.getAttribute(a) || "";
        r = e + r;
        var s = n.get(r);
        s ? s.push(t) : n.set(r, [t]);
      }
    }
    return n;
  }
  function md(e, a, i) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        i,
        a === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function av(e, a, i) {
    if (i === 1 || a.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof a.precedence != "string" ||
          typeof a.href != "string" ||
          a.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof a.rel != "string" ||
          typeof a.href != "string" ||
          a.href === "" ||
          a.onLoad ||
          a.onError
        )
          break;
        return a.rel === "stylesheet"
          ? ((e = a.disabled), typeof a.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          a.async &&
          typeof a.async != "function" &&
          typeof a.async != "symbol" &&
          !a.onLoad &&
          !a.onError &&
          a.src &&
          typeof a.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function qu(e, a) {
    return (
      e === "img" &&
      a.src != null &&
      a.src !== "" &&
      a.onLoad == null &&
      a.loading !== "lazy"
    );
  }
  function Lu(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Mu(e) {
    return (
      (e.width || 100) *
      (e.height || 100) *
      (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) *
      0.25
    );
  }
  function Uu(e, a) {
    typeof a.decode == "function" &&
      (e.imgCount++,
      a.complete || ((e.imgBytes += Mu(a)), e.suspenseyImages.push(a)),
      (e = lv.bind(e)),
      a.decode().then(e, e));
  }
  function iv(e, a, i, n) {
    if (
      i.type === "stylesheet" &&
      (typeof n.media != "string" || matchMedia(n.media).matches !== !1) &&
      (i.state.loading & 4) === 0
    ) {
      if (i.instance === null) {
        var l = sl(n.href),
          t = a.querySelector(at(l));
        if (t) {
          ((a = t._p),
            a !== null &&
              typeof a == "object" &&
              typeof a.then == "function" &&
              (e.count++, (e = nt.bind(e)), a.then(e, e)),
            (i.state.loading |= 4),
            (i.instance = t),
            Pe(t));
          return;
        }
        ((t = a.ownerDocument || a),
          (n = xu(n)),
          (l = Da.get(l)) && cd(n, l),
          (t = t.createElement("link")),
          Pe(t));
        var r = t;
        ((r._p = new Promise(function (s, b) {
          ((r.onload = s), (r.onerror = b));
        })),
          Ke(t, "link", n),
          (i.instance = t));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(i, a),
        (a = i.state.preload) &&
          (i.state.loading & 3) === 0 &&
          (e.count++,
          (i = nt.bind(e)),
          a.addEventListener("load", i),
          a.addEventListener("error", i)));
    }
  }
  var Tr = 0;
  function nv(e, a) {
    return (
      e.stylesheets && e.count === 0 && Nr(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (i) {
            var n = setTimeout(function () {
              if ((e.stylesheets && Nr(e, e.stylesheets), e.unsuspend)) {
                var t = e.unsuspend;
                ((e.unsuspend = null), t());
              }
            }, 6e4 + a);
            0 < e.imgBytes && Tr === 0 && (Tr = 62500 * zh());
            var l = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && Nr(e, e.stylesheets), e.unsuspend))
                ) {
                  var t = e.unsuspend;
                  ((e.unsuspend = null), t());
                }
              },
              (e.imgBytes > Tr ? 50 : 800) + a,
            );
            return (
              (e.unsuspend = i),
              function () {
                ((e.unsuspend = null), clearTimeout(n), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Fu(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Nr(e, e.stylesheets);
      else if (e.unsuspend) {
        var a = e.unsuspend;
        ((e.unsuspend = null), a());
      }
    }
  }
  function nt() {
    (this.count--, Fu(this));
  }
  function lv() {
    (this.imgCount--, Fu(this));
  }
  var Dr = null;
  function Nr(e, a) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (Dr = new Map()),
        a.forEach(tv, e),
        (Dr = null),
        nt.call(e)));
  }
  function tv(e, a) {
    if (!(a.state.loading & 4)) {
      var i = Dr.get(e);
      if (i) var n = i.get(null);
      else {
        ((i = new Map()), Dr.set(e, i));
        for (
          var l = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            t = 0;
          t < l.length;
          t++
        ) {
          var r = l[t];
          (r.nodeName === "LINK" || r.getAttribute("media") !== "not all") &&
            (i.set(r.dataset.precedence, r), (n = r));
        }
        n && i.set(null, n);
      }
      ((l = a.instance),
        (r = l.getAttribute("data-precedence")),
        (t = i.get(r) || n),
        t === n && i.set(null, l),
        i.set(r, l),
        this.count++,
        (n = nt.bind(this)),
        l.addEventListener("load", n),
        l.addEventListener("error", n),
        t
          ? t.parentNode.insertBefore(l, t.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(l, e.firstChild)),
        (a.state.loading |= 4));
    }
  }
  var dl = {
    $$typeof: Re,
    Provider: null,
    Consumer: null,
    _currentValue: ii,
    _currentValue2: ii,
    _threadCount: 0,
  };
  function rv(e, a, i, n, l, t, r, s, b) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = jr(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = jr(0)),
      (this.hiddenUpdates = jr(null)),
      (this.identifierPrefix = n),
      (this.onUncaughtError = l),
      (this.onCaughtError = t),
      (this.onRecoverableError = r),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = b),
      (this.transitionTypes = null),
      (this.incompleteTransitions = new Map()));
  }
  function Iu(e, a, i, n, l, t, r, s, b, u, v, z) {
    return (
      (e = new rv(e, a, i, r, b, u, v, z, s)),
      (a = 1),
      t === !0 && (a |= 24),
      (t = aa(3, null, null, a)),
      (e.current = t),
      (t.stateNode = e),
      (a = Hs()),
      a.refCount++,
      (e.pooledCache = a),
      a.refCount++,
      (t.memoizedState = {
        element: n,
        isDehydrated: i,
        cache: a,
      }),
      xs(t),
      e
    );
  }
  function Gu(e) {
    return e ? ((e = Pn), e) : Pn;
  }
  function Yu(e, a, i, n, l, t) {
    ((l = Gu(l)),
      n.context === null ? (n.context = l) : (n.pendingContext = l),
      (n = Ti(a)),
      (n.payload = {
        element: i,
      }),
      (t = t === void 0 ? null : t),
      t !== null && (n.callback = t),
      (i = Di(e, n, a)),
      i !== null && (ta(i, e, a), Rl(i, e, a)));
  }
  function Vu(e, a) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < a ? i : a;
    }
  }
  function kd(e, a) {
    (Vu(e, a), (e = e.alternate) && Vu(e, a));
  }
  function Ku(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = nn(e, 67108864);
      (a !== null && ta(a, e, 67108864), kd(e, 67108864));
    }
  }
  function _u(e) {
    if (e.tag === 13 || e.tag === 31) {
      var a = ya();
      a = Qr(a);
      var i = nn(e, a);
      (i !== null && ta(i, e, a), kd(e, a));
    }
  }
  var ol = !0;
  function sv(e, a, i, n) {
    var l = H.T;
    H.T = null;
    var t = U.p;
    try {
      ((U.p = 2), hd(e, a, i, n));
    } finally {
      ((U.p = t), (H.T = l));
    }
  }
  function bv(e, a, i, n) {
    var l = H.T;
    H.T = null;
    var t = U.p;
    try {
      ((U.p = 8), hd(e, a, i, n));
    } finally {
      ((U.p = t), (H.T = l));
    }
  }
  function hd(e, a, i, n) {
    if (ol) {
      var l = vd(n);
      if (l === null) (Zb(e, a, n, xr, i), ju(e, n));
      else if (ov(l, e, a, i, n)) n.stopPropagation();
      else if ((ju(e, n), a & 4 && -1 < dv.indexOf(e))) {
        for (; l !== null;) {
          var t = Bn(l);
          if (t !== null)
            switch (t.tag) {
              case 3:
                if (((t = t.stateNode), t.current.memoizedState.isDehydrated)) {
                  var r = Zi(t.pendingLanes);
                  if (r !== 0) {
                    var s = t;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; r;) {
                      var b = 1 << (31 - pa(r));
                      ((s.entanglements[1] |= b), (r &= ~b));
                    }
                    (ei(t), (te & 6) === 0 && ((yr = da() + 500), Xl(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((s = nn(t, 2)), s !== null && ta(s, t, 2), zr(), kd(t, 2));
            }
          if (((t = vd(n)), t === null && Zb(e, a, n, xr, i), t === l)) break;
          l = t;
        }
        l !== null && n.stopPropagation();
      } else Zb(e, a, n, null, i);
    }
  }
  function vd(e) {
    return ((e = is(e)), yd(e));
  }
  var xr = null;
  function yd(e) {
    if (((xr = null), (e = Ji(e)), e !== null)) {
      var a = G(e);
      if (a === null) e = null;
      else {
        var i = a.tag;
        if (i === 13) {
          if (((e = be(a)), e !== null)) return e;
          e = null;
        } else if (i === 31) {
          if (((e = ge(a)), e !== null)) return e;
          e = null;
        } else if (i === 3) {
          if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
          e = null;
        } else a !== e && (e = null);
      }
    }
    return ((xr = e), null);
  }
  function $u(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (zm()) {
          case Dd:
            return 2;
          case Nd:
            return 8;
          case ct:
          case Am:
            return 32;
          case xd:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var fd = !1,
    Yi = null,
    Vi = null,
    Ki = null,
    lt = new Map(),
    tt = new Map(),
    _i = [],
    dv =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function ju(e, a) {
    switch (e) {
      case "focusin":
      case "focusout":
        Yi = null;
        break;
      case "dragenter":
      case "dragleave":
        Vi = null;
        break;
      case "mouseover":
      case "mouseout":
        Ki = null;
        break;
      case "pointerover":
      case "pointerout":
        lt.delete(a.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tt.delete(a.pointerId);
    }
  }
  function rt(e, a, i, n, l, t) {
    return e === null || e.nativeEvent !== t
      ? ((e = {
          blockedOn: a,
          domEventName: i,
          eventSystemFlags: n,
          nativeEvent: t,
          targetContainers: [l],
        }),
        a !== null && ((a = Bn(a)), a !== null && Ku(a)),
        e)
      : ((e.eventSystemFlags |= n),
        (a = e.targetContainers),
        l !== null && a.indexOf(l) === -1 && a.push(l),
        e);
  }
  function ov(e, a, i, n, l) {
    switch (a) {
      case "focusin":
        return ((Yi = rt(Yi, e, a, i, n, l)), !0);
      case "dragenter":
        return ((Vi = rt(Vi, e, a, i, n, l)), !0);
      case "mouseover":
        return ((Ki = rt(Ki, e, a, i, n, l)), !0);
      case "pointerover":
        var t = l.pointerId;
        return (lt.set(t, rt(lt.get(t) || null, e, a, i, n, l)), !0);
      case "gotpointercapture":
        return (
          (t = l.pointerId),
          tt.set(t, rt(tt.get(t) || null, e, a, i, n, l)),
          !0
        );
    }
    return !1;
  }
  function Qu(e) {
    var a = Ji(e.target);
    if (a !== null) {
      var i = G(a);
      if (i !== null) {
        if (((a = i.tag), a === 13)) {
          if (((a = be(i)), a !== null)) {
            ((e.blockedOn = a),
              Fd(e.priority, function () {
                _u(i);
              }));
            return;
          }
        } else if (a === 31) {
          if (((a = ge(i)), a !== null)) {
            ((e.blockedOn = a),
              Fd(e.priority, function () {
                _u(i);
              }));
            return;
          }
        } else if (a === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var a = e.targetContainers; 0 < a.length;) {
      var i = vd(e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var n = new i.constructor(i.type, i);
        ((as = n), i.target.dispatchEvent(n), (as = null));
      } else return ((a = Bn(i)), a !== null && Ku(a), (e.blockedOn = i), !1);
      a.shift();
    }
    return !0;
  }
  function Xu(e, a, i) {
    Rr(e) && i.delete(a);
  }
  function pv() {
    ((fd = !1),
      Yi !== null && Rr(Yi) && (Yi = null),
      Vi !== null && Rr(Vi) && (Vi = null),
      Ki !== null && Rr(Ki) && (Ki = null),
      lt.forEach(Xu),
      tt.forEach(Xu));
  }
  function Pr(e, a) {
    e.blockedOn === a &&
      ((e.blockedOn = null),
      fd ||
        ((fd = !0),
        f.unstable_scheduleCallback(f.unstable_NormalPriority, pv)));
  }
  var qr = null;
  function Zu(e) {
    qr !== e &&
      ((qr = e),
      f.unstable_scheduleCallback(f.unstable_NormalPriority, function () {
        qr === e && (qr = null);
        for (var a = 0; a < e.length; a += 3) {
          var i = e[a],
            n = e[a + 1],
            l = e[a + 2];
          if (typeof n != "function") {
            if (yd(n || i) === null) continue;
            break;
          }
          var t = Bn(i);
          t !== null &&
            (e.splice(a, 3),
            (a -= 3),
            eb(
              t,
              {
                pending: !0,
                data: l,
                method: i.method,
                action: n,
              },
              n,
              l,
            ));
        }
      }));
  }
  function pl(e) {
    function a(b) {
      return Pr(b, e);
    }
    (Yi !== null && Pr(Yi, e),
      Vi !== null && Pr(Vi, e),
      Ki !== null && Pr(Ki, e),
      lt.forEach(a),
      tt.forEach(a));
    for (var i = 0; i < _i.length; i++) {
      var n = _i[i];
      n.blockedOn === e && (n.blockedOn = null);
    }
    for (; 0 < _i.length && ((i = _i[0]), i.blockedOn === null);)
      (Qu(i), i.blockedOn === null && _i.shift());
    if (((i = (e.ownerDocument || e).$$reactFormReplay), i != null))
      for (n = 0; n < i.length; n += 3) {
        var l = i[n],
          t = i[n + 1],
          r = l[ea] || null;
        if (typeof t == "function") r || Zu(i);
        else if (r) {
          var s = null;
          if (t && t.hasAttribute("formAction")) {
            if (((l = t), (r = t[ea] || null))) s = r.formAction;
            else if (yd(l) !== null) continue;
          } else s = r.action;
          (typeof s == "function" ? (i[n + 1] = s) : (i.splice(n, 3), (n -= 3)),
            Zu(i));
        }
      }
  }
  function Ju() {
    function e(t) {
      t.canIntercept &&
        t.info === "react-transition" &&
        t.intercept({
          handler: function () {
            return new Promise(function (r) {
              return (l = r);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function a() {
      (l !== null && (l(), (l = null)), n || setTimeout(i, 20));
    }
    function i() {
      if (!n && !navigation.transition) {
        var t = navigation.currentEntry;
        t &&
          t.url != null &&
          navigation.navigate(t.url, {
            state: t.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var n = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", a),
        navigation.addEventListener("navigateerror", a),
        setTimeout(i, 100),
        function () {
          ((n = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", a),
            navigation.removeEventListener("navigateerror", a),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function gd(e) {
    this._internalRoot = e;
  }
  ((Lr.prototype.render = gd.prototype.render =
    function (e) {
      var a = this._internalRoot;
      if (a === null) throw Error(h(409));
      var i = a.current,
        n = ya();
      Yu(i, n, e, a, null, null);
    }),
    (Lr.prototype.unmount = gd.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var a = e.containerInfo;
          (Yu(e.current, 2, null, e, null, null), zr(), (a[Cn] = null));
        }
      }));
  function Lr(e) {
    this._internalRoot = e;
  }
  Lr.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var a = Ud();
      e = {
        blockedOn: null,
        target: e,
        priority: a,
      };
      for (var i = 0; i < _i.length && a !== 0 && a < _i[i].priority; i++);
      (_i.splice(i, 0, e), i === 0 && Qu(e));
    }
  };
  var Wu = E.version;
  if (Wu !== "19.3.0") throw Error(h(527, Wu, "19.3.0"));
  U.findDOMNode = function (e) {
    var a = e._reactInternals;
    if (a === void 0)
      throw typeof e.render == "function"
        ? Error(h(188))
        : ((e = Object.keys(e).join(",")), Error(h(268, e)));
    return (
      (e = _(a)),
      (e = e !== null ? T(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var cv = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.3.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        ((ml = Mr.inject(cv)), (oa = Mr));
      } catch {}
  }
  return (
    (bt.createRoot = function (e, a) {
      if (!L(e)) throw Error(h(299));
      var i = !1,
        n = "",
        l = Gp,
        t = Yp,
        r = Vp;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (i = !0),
          a.identifierPrefix !== void 0 && (n = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (l = a.onUncaughtError),
          a.onCaughtError !== void 0 && (t = a.onCaughtError),
          a.onRecoverableError !== void 0 && (r = a.onRecoverableError)),
        (a = Iu(e, 1, !1, null, null, i, n, null, l, t, r, Ju)),
        (e[Cn] = a.current),
        Xb(e),
        new gd(a)
      );
    }),
    (bt.hydrateRoot = function (e, a, i) {
      if (!L(e)) throw Error(h(299));
      var n = !1,
        l = "",
        t = Gp,
        r = Yp,
        s = Vp,
        b = null;
      return (
        i != null &&
          (i.unstable_strictMode === !0 && (n = !0),
          i.identifierPrefix !== void 0 && (l = i.identifierPrefix),
          i.onUncaughtError !== void 0 && (t = i.onUncaughtError),
          i.onCaughtError !== void 0 && (r = i.onCaughtError),
          i.onRecoverableError !== void 0 && (s = i.onRecoverableError),
          i.formState !== void 0 && (b = i.formState)),
        (a = Iu(e, 1, !0, a, i ?? null, n, l, b, t, r, s, Ju)),
        (a.context = Gu(null)),
        (i = a.current),
        (n = ya()),
        (n = Qr(n)),
        (l = Ti(n)),
        (l.callback = null),
        Di(i, l, n),
        (i = n),
        (a.current.lanes = i),
        hl(a, i),
        ei(a),
        (e[Cn] = a.current),
        Xb(e),
        new Lr(a)
      );
    }),
    (bt.version = "19.3.0"),
    bt
  );
}
var cm;
function Yv() {
  if (cm) return Bd.exports;
  cm = 1;
  function f() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (E) {
        console.error(E);
      }
  }
  return (f(), (Bd.exports = Gv()), Bd.exports);
}
var Vv = Yv();
export {
  preloadDependencies as _,
  currentLocale as a,
  localizedUrl as b,
  Iv as c,
  Qv as d,
  jsxRuntime as j,
  supportedLocales as l,
  React as r,
  translate as t,
  Vv as ReactDOM,
  recordVisit,
  FeedbackWidget,
  __vite__mapDeps as mapDependencies,
};
