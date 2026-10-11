// Recovered from public deployment: Page-ByKJXWQd.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as ye } from "../../components/LanguageSwitcher.js";
import {
  h as Z,
  e as oe,
  s as ee,
  d as le,
  g as Me,
  r as z,
  q as D,
  k as S,
  m as C,
  z as re,
  B as xe,
  A as ce,
  j as G,
  C as ge,
  D as we,
} from "../../vendor/math-_7kWGBgE.js";
import { G as ve, X as Fe, b as Pe } from "../../vendor/OutputPass-B-cSf-Py.js";
import { s as $e } from "../../vendor/outline-B5slIcEP.js"; /* empty css              */
import "../../vendor/LineSegments2-CF4-EQBa.js";
import "../../vendor/studio-DdpeYmJn.js";
const je = [
    {
      id: "section",
      title: translate("圆锥的截线"),
      sub: "Conic sections",
      view: {
        fill: !0,
        hidden: !0,
        labels: !0,
      },
      body: translate(
        "<p>用平面去截一个<b>对顶圆锥</b>，截线随平面的倾斜程度变化：平面垂直于轴时是<b>圆</b>，稍微倾斜是<b>椭圆</b>，与某条母线平行时是<b>抛物线</b>，同时截到上下两个圆锥时是<b>双曲线</b>。</p><p>设截面与轴所成的角为 β，圆锥的半顶角为 α，则离心率 <b>e = cos β / cos α</b>：β > α 为椭圆，β = α 为抛物线，β &lt; α 为双曲线。</p>",
      ),
    },
    {
      id: "dandelin",
      title: translate("Dandelin 双球"),
      sub: "Dandelin spheres",
      view: {
        fill: !0,
        hidden: !0,
        labels: !0,
      },
      body: translate(
        "<p>在圆锥里放两个球，都与圆锥相切、也与截平面相切。两个球与截平面的切点 F₁、F₂ 正是截线的<b>焦点</b>。</p><p>从球外一点引球的切线，切线长相等。截线上的点 P 到 F₁ 的距离，等于 P 沿母线到上方切圆的距离 PQ₁；同理 PF₂ = PQ₂。</p><p>所以 PF₁ + PF₂ = Q₁Q₂，是两个切圆之间的母线长，与 P 的位置无关：这就是椭圆的定义。</p>",
      ),
    },
    {
      id: "ellipse",
      title: translate("椭圆"),
      sub: "Ellipse",
      view: {
        labels: !0,
        guides: !1,
      },
      body: translate(
        "<p>平面内到两个定点 F₁、F₂ 的距离之和等于常数 2a（2a > |F₁F₂|）的点的轨迹叫<b>椭圆</b>。</p><p>把细绳两端钉在焦点上，用笔拉紧绳子转一圈，就画出一个椭圆。</p><p>标准方程 x²/a² + y²/b² = 1（a > b > 0），其中 <b>a² = b² + c²</b>，离心率 e = c/a 越接近 1，椭圆越扁。</p>",
      ),
    },
    {
      id: "hyperbola",
      title: translate("双曲线"),
      sub: "Hyperbola",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>平面内到两个定点 F₁、F₂ 的距离之差的绝对值等于常数 2a（0 &lt; 2a &lt; |F₁F₂|）的点的轨迹叫<b>双曲线</b>。</p><p>标准方程 x²/a² − y²/b² = 1，其中 <b>c² = a² + b²</b>。双曲线有两条<b>渐近线</b> y = ±(b/a)x，离曲线越远，曲线越贴近它们。</p><p>a = b 时叫等轴双曲线，渐近线互相垂直，离心率为 √2。</p>",
      ),
    },
    {
      id: "parabola",
      title: translate("抛物线"),
      sub: "Parabola",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>平面内到一个定点 F 和一条定直线 l（F 不在 l 上）的距离相等的点的轨迹叫<b>抛物线</b>。F 是焦点，l 是准线。</p><p>标准方程 y² = 2px（p > 0），焦点 (p/2, 0)，准线 x = −p/2。p 是焦点到准线的距离。</p><p>过焦点且垂直于对称轴的弦叫<b>通径</b>，长为 2p。</p>",
      ),
    },
    {
      id: "eccentricity",
      title: translate("离心率"),
      sub: "Eccentricity",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>三种曲线可以统一起来：平面内到定点 F 的距离与到定直线 l 的距离之比为常数 e 的点的轨迹。</p><p><b>0 &lt; e &lt; 1</b> 是椭圆，<b>e = 1</b> 是抛物线，<b>e > 1</b> 是双曲线；e 越接近 0，椭圆越圆。</p><p>拖动 e 的滑块，看曲线如何连续地从圆变成椭圆、抛物线、双曲线。</p>",
      ),
    },
    {
      id: "optics",
      title: translate("光学性质"),
      sub: "Reflective property",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>从椭圆一个焦点发出的光，经椭圆反射后汇聚到<b>另一个焦点</b>。</p><p>从抛物线焦点发出的光，反射后<b>平行于对称轴</b>射出，探照灯、卫星天线都用这个原理。</p><p>从双曲线一个焦点发出的光，反射后的反向延长线经过<b>另一个焦点</b>。</p><p>拖动光源离开焦点，反射光就不再汇聚。</p>",
      ),
    },
    {
      id: "line",
      title: translate("直线与圆锥曲线"),
      sub: "Lines and conics",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>把直线方程 y = kx + m 代入曲线方程，消去 y 得到关于 x 的方程。二次项系数不为零时，用<b>判别式 Δ</b> 判断位置关系：Δ > 0 相交，Δ = 0 相切，Δ &lt; 0 相离。</p><p>弦长 |AB| = √(1 + k²)·|x₁ − x₂|。椭圆中，弦 AB 的中点为 M 时，k<sub>AB</sub> · k<sub>OM</sub> = −b²/a²（点差法）。</p>",
      ),
    },
  ],
  te = 1e-9;
function pe(s, e, t) {
  const r = Math.tan(s) ** 2,
    d = Math.sin(e),
    u = Math.cos(e),
    y = u * u - r * d * d,
    M = {
      O: [0, 0, t],
      u: [u, 0, -d],
      v: [0, 1, 0],
      n: [d, 0, u],
    },
    f = d / Math.cos(s),
    n = {
      alpha: s,
      phi: e,
      z0: t,
      e: f,
      A: y,
      plane: M,
      beta: Math.PI / 2 - e,
    },
    a = Math.abs(y) < 1e-7 ? 0 : Math.sign(y);
  if (Math.abs(t) < te)
    return {
      ...n,
      type: a > 0 ? "point" : a === 0 ? "line" : "lines",
    };
  if (a === 0) {
    const b = r * t * d,
      v = t / (2 * d);
    return {
      ...n,
      type: "parabola",
      p: b,
      vertex: v,
      foci: [v - b / 2],
    };
  }
  const l = (-r * t * d) / y,
    o = (r * t * t * u * u) / y;
  if (a > 0) {
    const b = Math.sqrt(o / y),
      v = Math.sqrt(o),
      F = Math.sqrt(Math.max(0, b * b - v * v));
    return {
      ...n,
      type: f < 1e-6 ? "circle" : "ellipse",
      center: l,
      a: b,
      b: v,
      c: F,
      foci: [l - F, l + F],
    };
  }
  const c = Math.sqrt(o / y),
    h = Math.sqrt(-o),
    i = Math.sqrt(c * c + h * h);
  return {
    ...n,
    type: "hyperbola",
    center: l,
    a: c,
    b: h,
    c: i,
    foci: [l - i, l + i],
  };
}
const L = (s, e, t) => oe(oe(s.plane.O, Z(s.plane.u, e)), Z(s.plane.v, t));
function de(s, e, t = 360) {
  const r = [],
    d = (u, y) => {
      const M = L(s, u, y);
      r.push(Math.abs(M[2]) <= e + 1e-9 ? M : null);
    };
  if (s.type === "circle" || s.type === "ellipse")
    for (let u = 0; u <= t; u++) {
      const y = (2 * Math.PI * u) / t;
      d(s.center + s.a * Math.cos(y), s.b * Math.sin(y));
    }
  else if (s.type === "hyperbola") {
    const u = Math.acosh(Math.max(1, (e * 4) / Math.max(s.a, 1e-6)) + 1);
    for (const y of [-1, 1]) {
      for (let M = 0; M <= t; M++) {
        const f = -u + (2 * u * M) / t;
        d(s.center + y * s.a * Math.cosh(f), s.b * Math.sinh(f));
      }
      r.push(null);
    }
  } else if (s.type === "parabola") {
    const u = Math.tan(s.alpha) ** 2,
      y = Math.sin(s.phi),
      M = e * Math.tan(s.alpha) * 1.05;
    for (let f = 0; f <= t; f++) {
      const n = -M + (2 * M * f) / t;
      d((u * s.z0 * s.z0 - n * n) / (2 * u * s.z0 * y), n);
    }
  } else if (s.type === "lines" || s.type === "line") {
    const u = s.type === "line" ? 0 : Math.sqrt(-s.A);
    for (const y of s.type === "line" ? [1] : [-1, 1]) {
      const M = (e / Math.max(Math.abs(Math.sin(s.phi)), 0.05)) * 1.2,
        f = [];
      for (let n = 0; n <= t; n++) {
        const a = -M + (2 * M * n) / t;
        f.push([a, y * u * a]);
      }
      (s.type === "line"
        ? f.forEach(([n]) => d(n, 0))
        : f.forEach(([n, a]) => d(n, a)),
        r.push(null));
    }
  }
  return r;
}
function ke(s) {
  const { alpha: e, phi: t, z0: r, plane: d } = s,
    u = Math.cos(t),
    y = Math.sin(e),
    M = [];
  for (const f of [-1, 1]) {
    const n = u + f * y;
    if (Math.abs(n) < 1e-9) continue;
    const a = (r * u) / n,
      l = [0, 0, a],
      o = Math.abs(a) * y,
      c = ee(l, Z(d.n, le(d.n, ee(l, d.O))));
    M.push({
      center: l,
      r: o,
      focus: c,
      circleZ: a * Math.cos(e) ** 2,
      circleR: Math.abs(a) * y * Math.cos(e),
    });
  }
  return M.sort((f, n) => f.center[2] - n.center[2]);
}
const Q = (s, e) => Z(s, e.circleZ / s[2]);
function X(s, e) {
  const t = s >= e,
    r = Math.max(s, e),
    d = Math.min(s, e),
    u = Math.sqrt(r * r - d * d),
    y = t
      ? [
          [-u, 0],
          [u, 0],
        ]
      : [
          [0, -u],
          [0, u],
        ];
  return {
    type: "ellipse",
    a: s,
    b: e,
    c: u,
    e: u / r,
    onX: t,
    foci: y,
    point: (M) => [s * Math.cos(M), e * Math.sin(M)],
    F: ([M, f]) => (M * M) / (s * s) + (f * f) / (e * e) - 1,
    grad: ([M, f]) => [(2 * M) / (s * s), (2 * f) / (e * e)],
    directrix: u > te ? (r * r) / u : 1 / 0,
  };
}
function ae(s, e) {
  const t = Math.sqrt(s * s + e * e);
  return {
    type: "hyperbola",
    a: s,
    b: e,
    c: t,
    e: t / s,
    foci: [
      [-t, 0],
      [t, 0],
    ],
    point: (r, d = 1) => [d * s * Math.cosh(r), e * Math.sinh(r)],
    F: ([r, d]) => (r * r) / (s * s) - (d * d) / (e * e) - 1,
    grad: ([r, d]) => [(2 * r) / (s * s), (-2 * d) / (e * e)],
    asymptote: e / s,
    directrix: (s * s) / t,
  };
}
function ne(s, e = "right") {
  const t = {
    right: {
      focus: [s / 2, 0],
      dir: {
        x: -s / 2,
      },
      point: (r) => [(r * r) / (2 * s), r],
      F: ([r, d]) => d * d - 2 * s * r,
      grad: ([r, d]) => [-2 * s, 2 * d],
      axis: [1, 0],
    },
    left: {
      focus: [-s / 2, 0],
      dir: {
        x: s / 2,
      },
      point: (r) => [-(r * r) / (2 * s), r],
      F: ([r, d]) => d * d + 2 * s * r,
      grad: ([r, d]) => [2 * s, 2 * d],
      axis: [-1, 0],
    },
    up: {
      focus: [0, s / 2],
      dir: {
        y: -s / 2,
      },
      point: (r) => [r, (r * r) / (2 * s)],
      F: ([r, d]) => r * r - 2 * s * d,
      grad: ([r, d]) => [2 * r, -2 * s],
      axis: [0, 1],
    },
    down: {
      focus: [0, -s / 2],
      dir: {
        y: s / 2,
      },
      point: (r) => [r, -(r * r) / (2 * s)],
      F: ([r, d]) => r * r + 2 * s * d,
      grad: ([r, d]) => [2 * r, 2 * s],
      axis: [0, -1],
    },
  }[e];
  return {
    type: "parabola",
    p: s,
    orient: e,
    e: 1,
    foci: [t.focus],
    ...t,
  };
}
const Ae = (s, e) =>
  e.x !== void 0 ? Math.abs(s[0] - e.x) : Math.abs(s[1] - e.y);
function Ee(s, e = 2) {
  return {
    e: s,
    l: e,
    directrix: s > te ? -e / s : -1 / 0,
    r: (t) => e / (1 - s * Math.cos(t)),
    point(t) {
      const r = e / (1 - s * Math.cos(t));
      return [r * Math.cos(t), r * Math.sin(t)];
    },
    type:
      s < 1e-9
        ? "circle"
        : s < 1 - 1e-9
          ? "ellipse"
          : s < 1 + 1e-9
            ? "parabola"
            : "hyperbola",
  };
}
function se(s, e, t, { tmax: r = 40, step: d = 0.02, start: u = 1e-4 } = {}) {
  const y = (n) => [e[0] + t[0] * n, e[1] + t[1] * n];
  let M = u,
    f = s(y(M));
  for (let n = u + d; n <= r; n += d) {
    const a = s(y(n));
    if (f === 0 || Math.sign(a) !== Math.sign(f)) {
      let l = M,
        o = n;
      for (let h = 0; h < 60; h++) {
        const i = (l + o) / 2;
        Math.sign(s(y(i))) === Math.sign(f) ? (l = i) : (o = i);
      }
      const c = (l + o) / 2;
      return {
        t: c,
        p: y(c),
      };
    }
    ((M = n), (f = a));
  }
  return null;
}
function Be(s, e) {
  const t = Math.hypot(e[0], e[1]),
    r = (s[0] * e[0] + s[1] * e[1]) / (t * t);
  return [s[0] - 2 * r * e[0], s[1] - 2 * r * e[1]];
}
function Ce(s, e, t) {
  let r, d, u;
  if (s.type === "ellipse") {
    const { a: o, b: c } = s;
    ((r = c * c + o * o * e * e),
      (d = 2 * o * o * e * t),
      (u = o * o * (t * t - c * c)));
  } else if (s.type === "hyperbola") {
    const { a: o, b: c } = s;
    ((r = c * c - o * o * e * e),
      (d = -2 * o * o * e * t),
      (u = -o * o * (t * t + c * c)));
  } else ((r = e * e), (d = 2 * e * t - 2 * s.p), (u = t * t));
  const y = Math.max(Math.abs(r), Math.abs(d), Math.abs(u), 1);
  let M = [],
    f = null;
  if (Math.abs(r) < 1e-12 * y) Math.abs(d) > 1e-12 && (M = [-u / d]);
  else {
    f = d * d - 4 * r * u;
    const o = 1e-9 * y * y;
    f > o
      ? (M = [
          (-d - Math.sqrt(f)) / (2 * r),
          (-d + Math.sqrt(f)) / (2 * r),
        ].sort((c, h) => c - h))
      : f >= -o && ((M = [-d / (2 * r)]), (f = 0));
  }
  const n = M.map((o) => [o, e * o + t]),
    a = n.length === 2 ? Math.hypot(n[1][0] - n[0][0], n[1][1] - n[0][1]) : 0,
    l =
      n.length === 2
        ? [(n[0][0] + n[1][0]) / 2, (n[0][1] + n[1][1]) / 2]
        : null;
  return {
    A: r,
    B: d,
    C: u,
    delta: f,
    xs: M,
    pts: n,
    chord: a,
    mid: l,
  };
}
function he(s, e, t, { nappes: r = [-1, 1], opacity: d } = {}) {
  const u = new ve(),
    y = e * Math.tan(s);
  for (const M of r) {
    const f = new Fe(y, e, 96, 1, !0);
    (f.translate(0, -e / 2, 0), M > 0 && f.rotateX(Math.PI));
    const n = new Pe(f, Me(t, t.face, d ?? t.faceOpacity * 0.8));
    ((n.renderOrder = 1), u.add(n));
  }
  return u;
}
const Ie = (s, e) => [e[0], e[1], -(Math.tan(s) ** 2) * e[2]],
  qe = (s, e, t) => le(Ie(s, e), ee(t, e)) > 0;
function _(s, e, t, r, { color: d, width: u = 2.4, hiddenEdges: y = !0 } = {}) {
  let M = [],
    f = null;
  const n = () => {
    M.length > 1 &&
      (!f || y) &&
      s.path(M, {
        color: d,
        width: u,
        hidden: f,
      });
  };
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    if (!l) {
      (n(), (M = []), (f = null));
      continue;
    }
    const o = !qe(e, l, r);
    if (f !== null && o !== f) {
      const c = M[M.length - 1];
      (n(), (M = [c]));
    }
    ((f = o), M.push(l));
  }
  n();
}
function ue(s, e, t, r, { nappes: d = [-1, 1], hiddenEdges: u = !0 } = {}) {
  const y = Math.tan(e),
    M = Math.hypot(r[0], r[1]),
    f = d.map((n) => n * t);
  if (M > 1e-9) {
    const n = (y * r[2]) / M;
    if (Math.abs(n) <= 1) {
      const a = Math.atan2(r[1], r[0]),
        l = Math.acos(n);
      for (const o of [a - l, a + l]) {
        const c = (h) => [y * h * Math.cos(o), y * h * Math.sin(o), h];
        s.line(c(Math.min(...f, 0)), c(Math.max(...f, 0)), {
          width: 1.4,
        });
      }
    }
  }
  for (const n of f) {
    const a = y * Math.abs(n),
      l = Array.from(
        {
          length: 145,
        },
        (o, c) => [
          a * Math.cos((2 * Math.PI * c) / 144),
          a * Math.sin((2 * Math.PI * c) / 144),
          n,
        ],
      );
    _(s, e, l, r, {
      color: s.theme.edge,
      width: 1.4,
      hiddenEdges: u,
    });
  }
}
const q = 3.2,
  W = (s) => (s * Math.PI) / 180,
  fe = {
    circle: translate("圆"),
    ellipse: translate("椭圆"),
    parabola: translate("抛物线"),
    hyperbola: translate("双曲线"),
    point: translate("一个点"),
    line: translate("一条直线"),
    lines: translate("两条相交直线"),
  };
function Se(s) {
  const e = {
    alpha: 30,
    phi: 35,
    z0: 1.6,
  };
  let t = null,
    r = [];
  function d() {
    ((t = pe(W(e.alpha), W(e.phi), e.z0)), (r = de(t, q)));
  }
  function u() {
    const { stage: n, theme: a, st: l } = s;
    (n.clear(), n.setCenter([0, 0, 0]));
    const o = [
        he(W(e.alpha), q, a, {
          opacity: l.view.fill ? void 0 : 0.02,
        }),
      ],
      c = t.plane.n;
    (o.push(
      re(
        {
          n: c,
          d: c[2] * e.z0,
        },
        [0, 0, e.z0],
        q * 2.3,
        a,
      ),
    ),
      (t.type === "ellipse" || t.type === "circle") &&
        r.every(Boolean) &&
        o.push(xe(r.slice(0, -1), a.section, a.sectionOpacity * 0.8, a)),
      n.add(ce(...o)));
  }
  const y = () => s.frame(q * 1.25, [3, 1.2, 0.9]);
  function M() {
    (d(), u(), s.update());
  }
  function f() {
    const { ov: n } = s,
      a = n.ctx,
      l = n.theme,
      o = a.canvas.clientWidth,
      c = a.canvas.clientHeight;
    if (o < 700) return;
    const h = 210,
      i = 160,
      b = o - h - 20,
      v = c - i - 84;
    ((a.fillStyle =
      l.name === "studio" ? "rgba(14,17,22,.66)" : "rgba(255,254,251,.9)"),
      (a.strokeStyle =
        l.name === "studio" ? "rgba(207,214,222,.14)" : "rgba(29,35,33,.14)"),
      (a.lineWidth = 1),
      a.beginPath(),
      a.roundRect?.(b, v, h, i, 10),
      a.fill(),
      a.stroke(),
      (a.font = "600 9.5px 'JetBrains Mono',monospace"),
      (a.fillStyle = l.aux),
      (a.textAlign = "left"),
      a.fillText(translate("截线的真实形状"), b + 12, v + 18));
    const F = r.map((k) =>
        k
          ? [
              (k[0] - t.plane.O[0]) * t.plane.u[0] +
                (k[2] - t.plane.O[2]) * t.plane.u[2],
              k[1],
            ]
          : null,
      ),
      m = F.filter(Boolean);
    if (!m.length) return;
    const x = m.map((k) => k[0]),
      w = m.map((k) => k[1]),
      $ = (Math.min(...x) + Math.max(...x)) / 2,
      j = (Math.min(...w) + Math.max(...w)) / 2,
      E = Math.min(
        (h - 30) / (Math.max(...x) - Math.min(...x) || 1),
        (i - 44) / (Math.max(...w) - Math.min(...w) || 1),
      ),
      B = ([k, N]) => [
        b + h / 2 + (k - $) * E,
        v + 26 + (i - 26) / 2 - (N - j) * E,
      ];
    ((a.strokeStyle = l.accent),
      (a.lineWidth = 2),
      (a.shadowColor = l.accent),
      (a.shadowBlur = l.glow),
      a.beginPath());
    let I = !1;
    for (const k of F) {
      if (!k) {
        I = !1;
        continue;
      }
      const [N, R] = B(k);
      I ? a.lineTo(N, R) : (a.moveTo(N, R), (I = !0));
    }
    (a.stroke(), (a.shadowBlur = 0));
    for (const k of t.foci ?? []) {
      const [N, R] = B([k, 0]);
      ((a.fillStyle = l.accent2),
        a.beginPath(),
        a.arc(N, R, 3, 0, Math.PI * 2),
        a.fill());
    }
  }
  return {
    enter() {
      (s.use2D(!1), d(), u(), y());
    },
    build: u,
    reset: y,
    panel() {
      const n = [
        ["circle", translate("圆")],
        ["ellipse", translate("椭圆")],
        ["parabola", translate("抛物线")],
        ["hyperbola", translate("双曲线")],
        ["apex", translate("过顶点")],
      ];
      return (
        S("preset", n, "") +
        C("phi", translate("截面倾角"), 0, 90, 1, e.phi, `${e.phi}°`) +
        C("z0", translate("截面位置"), 0, 2.6, 0.05, e.z0, e.z0.toFixed(2)) +
        C("alpha", translate("半顶角 α"), 15, 45, 1, e.alpha, `${e.alpha}°`)
      );
    },
    info() {
      const n = 90 - e.phi,
        a =
          Math.abs(n - e.alpha) < 0.5
            ? "β = α"
            : n > e.alpha
              ? "β > α"
              : "β < α",
        l = [
          [translate("截面与轴的夹角"), `β = ${n.toFixed(0)}°`],
          [translate("半顶角"), `α = ${e.alpha}°`],
          [translate("离心率"), `e = cos β / cos α = ${t.e.toFixed(3)}`],
        ];
      ((t.type === "ellipse" || t.type === "circle") &&
        l.push(["a, b", `${t.a.toFixed(2)}, ${t.b.toFixed(2)}`]),
        t.type === "hyperbola" &&
          l.push(["a, b", `${t.a.toFixed(2)}, ${t.b.toFixed(2)}`]),
        t.type === "parabola" && l.push(["p", t.p.toFixed(2)]));
      const o =
        e.z0 < 0.025
          ? translate("截面经过圆锥的顶点，截线退化为点或直线。")
          : translate(
              "比较 β 与 α：β > α 为椭圆（β = 90° 时为圆），β = α 为抛物线，β < α 为双曲线。",
            );
      return z(fe[t.type], a, D(l) + `<p class="note">${o}</p>`);
    },
    action(n, a) {
      n === "preset" &&
        (a === "apex"
          ? (e.z0 = 0)
          : (e.z0 < 0.3 && (e.z0 = 1.6),
            (e.phi = {
              circle: 0,
              ellipse: 35,
              parabola: 90 - e.alpha,
              hyperbola: Math.min(88, 90 - e.alpha + 25),
            }[a])),
        M(),
        s.refresh());
    },
    input(n, a) {
      return ((e[n] = a), M(), n === "z0" ? a.toFixed(2) : `${a}°`);
    },
    draw() {
      const { stage: n, ov: a, st: l } = s,
        o = n.camModel(),
        c = a.theme,
        h = W(e.alpha);
      if (
        (a.line([0, 0, -q * 1.1], [0, 0, q * 1.1], {
          color: c.aux,
          dash: [10, 4, 2, 4],
          width: 1,
        }),
        ue(a, h, q, o, {
          hiddenEdges: l.view.hidden,
        }),
        _(a, h, r, o, {
          color: c.accent,
          width: 2.6,
          hiddenEdges: l.view.hidden,
        }),
        l.view.labels)
      ) {
        const i = [Math.tan(h), 0, 1],
          b = a.arc([0, 0, 0], [0, 0, 1], i, 0.9, {
            color: c.accent2,
          });
        if (
          (a.label("α", b, {
            color: c.accent2,
            away: [0, 0, 0],
            offset: 4,
          }),
          a.label("V", [0, 0, 0], {
            away: [1, 0, 0],
            offset: 12,
          }),
          e.z0 > 0.05 && e.phi < 89.5)
        ) {
          const v = [0, 0, e.z0],
            F = a.arc(v, [0, 0, -1], t.plane.u, 0.6, {
              color: c.accent,
            });
          a.label("β", F, {
            color: c.accent,
            away: v,
            offset: 4,
          });
        }
        for (const v of t.foci ?? []) {
          const F = L(t, v, 0);
          Math.abs(F[2]) < q &&
            a.dot(F, {
              color: c.accent2,
              r: 3.5,
            });
        }
      }
      f();
    },
    toggles: ["fill", "hidden", "labels", "spin"],
  };
}
const O = (30 * Math.PI) / 180,
  U = 1.2,
  H = {
    ellipse: {
      phi: (28 * Math.PI) / 180,
      H: 4.6,
      nappes: [1],
    },
    hyperbola: {
      phi: (72 * Math.PI) / 180,
      H: 3.6,
      nappes: [-1, 1],
    },
  };
function Ne(s) {
  const e = {
    mode: "ellipse",
    u: 0.3,
    playing: !0,
  };
  let t, r, d;
  function u() {
    const n = H[e.mode];
    ((t = pe(O, n.phi, U)), (r = ke(t)), (d = de(t, n.H)));
  }
  function y() {
    if (e.mode === "ellipse")
      return L(
        t,
        t.center + t.a * Math.cos(e.u * 2 * Math.PI),
        t.b * Math.sin(e.u * 2 * Math.PI),
      );
    const n = Math.sin(e.u * 2 * Math.PI) * 1.1,
      a = L(t, t.center + t.a * Math.cosh(n), 0)[2] > 0 ? 1 : -1;
    return L(t, t.center + a * t.a * Math.cosh(n), t.b * Math.sinh(n));
  }
  function M() {
    const { stage: n, theme: a, st: l } = s,
      o = H[e.mode];
    n.clear();
    const c = r.map((i) => i.center[2]);
    n.setCenter([0, 0, (Math.min(...c) + Math.max(...c)) / 2]);
    const h = t.plane.n;
    n.add(
      ce(
        he(O, o.H, a, {
          nappes: o.nappes,
          opacity: l.view.fill ? void 0 : 0.02,
        }),
        re(
          {
            n: h,
            d: h[2] * U,
          },
          [0, 0, U],
          o.H * 2,
          a,
        ),
        ...r.map((i) => ge(i.center, i.r, a)),
      ),
    );
  }
  const f = () => s.frame(H[e.mode].H * 1.15, [3, 1.4, 0.6]);
  return {
    enter() {
      (s.use2D(!1), u(), M(), f());
    },
    build: M,
    reset: f,
    panel() {
      return S(
        "mode",
        [
          ["ellipse", translate("椭圆")],
          ["hyperbola", translate("双曲线")],
        ],
        e.mode,
      );
    },
    info() {
      const n = y(),
        a = r.map((i) => G(n, i.focus)),
        l = r.map((i) => G(n, Q(n, i)));
      G(Q(n, r[0]), Q(n, r[1]));
      const o = (i) => i.toFixed(3),
        c = [
          ["PF₁ = PQ₁", `${o(a[0])} = ${o(l[0])}`],
          ["PF₂ = PQ₂", `${o(a[1])} = ${o(l[1])}`],
        ];
      e.mode === "ellipse"
        ? c.push(["PF₁ + PF₂", `${o(a[0] + a[1])} = Q₁Q₂ = 2a`])
        : c.push(["|PF₁ − PF₂|", `${o(Math.abs(a[0] - a[1]))} = Q₁Q₂ = 2a`]);
      const h =
        e.mode === "ellipse"
          ? translate(
              "P 在截线上运动时，Q₁Q₂ 始终是两个切圆之间的一段母线，长度不变，所以 PF₁ + PF₂ 是定值。",
            )
          : translate(
              "双曲线的两个球分别在上下两个圆锥里。P 在一支上运动时，Q₁Q₂ 同样是两个切圆之间的母线长，所以 |PF₁ − PF₂| 是定值。",
            );
      return z(translate("切线长相等"), "", D(c) + `<p class="note">${h}</p>`);
    },
    bar() {
      return `<button class="act" data-act="play">${e.playing ? translate("暂停") : translate("继续")}</button>`;
    },
    action(n, a) {
      if (n === "play") return ((e.playing = !e.playing), s.update());
      n === "mode" && ((e.mode = a), u(), M(), f(), s.refresh());
    },
    space() {
      this.action("play");
    },
    frame(n) {
      e.playing &&
        ((e.u = (e.u + n * 0.06) % 1),
        (e.acc = (e.acc ?? 0) + n),
        e.acc > 0.15 && ((e.acc = 0), s.update()));
    },
    draw() {
      const { stage: n, ov: a, st: l } = s,
        o = a.theme,
        c = n.camModel(),
        h = H[e.mode];
      (ue(a, O, h.H, c, {
        nappes: h.nappes,
        hiddenEdges: l.view.hidden,
      }),
        _(a, O, d, c, {
          color: o.accent,
          width: 2.4,
          hiddenEdges: l.view.hidden,
        }));
      for (const m of r) {
        for (const w of $e(m.center, m.r, c))
          (!w.hidden || l.view.hidden) &&
            a.path(w.pts, {
              color: o.accent2,
              width: 1.1,
              hidden: w.hidden,
              alpha: 0.8,
            });
        const x = Array.from(
          {
            length: 145,
          },
          (w, $) => [
            m.circleR * Math.cos((2 * Math.PI * $) / 144),
            m.circleR * Math.sin((2 * Math.PI * $) / 144),
            m.circleZ,
          ],
        );
        _(a, O, x, c, {
          color: o.accent2,
          width: 1.5,
          hiddenEdges: l.view.hidden,
        });
      }
      const i = y(),
        b = [o.accent, o.green];
      r.forEach((m, x) => {
        const w = Q(i, m);
        (a.line(i, m.focus, {
          color: b[x],
          width: 2.2,
        }),
          a.line(i, w, {
            color: b[x],
            width: 2.2,
            dash: [6, 4],
          }),
          a.dot(m.focus, {
            color: b[x],
            r: 4,
          }),
          a.dot(w, {
            color: b[x],
            r: 3.5,
            ring: !0,
          }),
          l.view.labels &&
            (a.label(`F${"₁₂"[x]}`, m.focus, {
              away: i,
              color: b[x],
            }),
            a.label(`Q${"₁₂"[x]}`, w, {
              away: [0, 0, w[2]],
              color: b[x],
            })));
      });
      const v = Math.max(...r.map((m) => m.circleZ), i[2]),
        F = Math.min(...r.map((m) => m.circleZ), i[2]);
      (a.line(
        i.map((m) => (m * v) / i[2]),
        i.map((m) => (m * F) / i[2]),
        {
          color: o.aux,
          width: 1,
          dash: [2, 4],
        },
      ),
        a.dot(i, {
          color: o.label,
          r: 4.5,
          ring: !0,
        }),
        l.view.labels &&
          a.label("P", i, {
            away: [0, 0, i[2]],
            offset: 14,
          }));
    },
    toggles: ["fill", "hidden", "labels", "spin"],
  };
}
const P = (s) => (Math.round(s * 100) / 100).toString().replace("-", "−"),
  ie = (s, e) => Math.hypot(s[0] - e[0], s[1] - e[1]),
  T = (s) => P(s * s);
function K(s, { kind: e }) {
  const t = {
    a: 3,
    b: 2,
    axis: "x",
    p: 2,
    orient: "right",
    u: 0.9,
    anim: null,
    trace: [],
  };
  let r = !1,
    d = 0;
  function u() {
    return e === "ellipse"
      ? t.axis === "x"
        ? X(t.a, t.b)
        : X(t.b, t.a)
      : e === "hyperbola"
        ? ae(t.a, t.b)
        : ne(t.p, t.orient);
  }
  function y(o = u()) {
    return e === "ellipse"
      ? o.point(t.anim ?? t.u)
      : e === "hyperbola"
        ? o.point(t.u, t.branch ?? 1)
        : o.point(t.u);
  }
  function M() {
    const { plot: o } = s;
    (o.setInsets({
      top: 110,
      bottom: 70,
    }),
      e === "parabola" ? o.fit(-7, 7, -5, 5) : o.fit(-7, 7, -4.6, 4.6));
  }
  function f() {
    const o = u(),
      c = y(o);
    let h;
    if (e === "parabola")
      h = [
        ["|PF|", P(ie(c, o.focus))],
        ["|PD|", P(Ae(c, o.dir))],
      ];
    else {
      const [i, b] = o.foci.map((v) => ie(c, v));
      ((h = [
        ["|PF₁|", P(i)],
        ["|PF₂|", P(b)],
      ]),
        e === "ellipse"
          ? h.push(["|PF₁| + |PF₂|", P(i + b)])
          : h.push(["||PF₁| − |PF₂||", P(Math.abs(i - b))]));
    }
    s.setHud(
      `<div class="kv">${h.map(([i, b]) => `<span>${i}</span><b>${b}</b>`).join("")}</div>`,
    );
  }
  function n() {
    const { plot: o } = s;
    o.interact({
      down(c, h) {
        return t.anim !== null ? !1 : ((r = o.dist(y(), c, h) < 16), r);
      },
      move(c, h) {
        const [i, b] = o.W(c, h),
          v = u();
        if (e === "ellipse") {
          const [F, m] = t.axis === "x" ? [t.a, t.b] : [t.b, t.a];
          t.u = Math.atan2(b / m, i / F);
        } else
          e === "hyperbola"
            ? ((t.branch = i >= 0 ? 1 : -1), (t.u = Math.asinh(b / t.b)))
            : (t.u = v.orient === "right" || v.orient === "left" ? b : i);
        f();
      },
      up() {
        ((r = !1), s.update());
      },
      hover: (c, h) => (o.dist(y(), c, h) < 16 ? "pointer" : null),
    });
  }
  function a() {
    if (e === "ellipse") {
      const [c, h] = t.axis === "x" ? [t.a, t.b] : [t.b, t.a];
      return `x²/${T(c)} + y²/${T(h)} = 1`;
    }
    if (e === "hyperbola") return `x²/${T(t.a)} − y²/${T(t.b)} = 1`;
    const o = P(2 * t.p);
    return {
      right: `y² = ${o}x`,
      left: `y² = −${o}x`,
      up: `x² = ${o}y`,
      down: `x² = −${o}y`,
    }[t.orient];
  }
  function l() {
    const { plot: o, st: c } = s,
      h = o.theme,
      i = u();
    (o.clear(), o.grid());
    const b = y(i);
    if (e === "ellipse") {
      if (
        (t.anim !== null
          ? (o.path(t.trace, {
              color: h.accent,
              width: 2.6,
            }),
            o.path([i.foci[0], b, i.foci[1]], {
              color: h.accent2,
              width: 2,
            }),
            i.foci.forEach((m) =>
              o.point(m, {
                color: h.edge,
                r: 5,
              }),
            ))
          : o.param((m) => i.point(m), 0, 2 * Math.PI, 360, {
              color: h.accent,
              width: 2.6,
            }),
        c.view.labels)
      ) {
        const [m, x] = t.axis === "x" ? [t.a, t.b] : [t.b, t.a],
          w = t.axis === "x" ? [0, x] : [m, 0],
          $ = i.foci[1];
        (o.path([[0, 0], w, $, [0, 0]], {
          color: h.aux,
          width: 1.2,
          dash: [5, 4],
        }),
          (t.axis === "x"
            ? [
                [-m, 0, "A₁"],
                [m, 0, "A₂"],
                [0, -x, "B₁"],
                [0, x, "B₂"],
              ]
            : [
                [0, -x, "A₁"],
                [0, x, "A₂"],
                [-m, 0, "B₁"],
                [m, 0, "B₂"],
              ]
          ).forEach(([E, B, I]) => {
            (o.point([E, B], {
              color: h.edge,
              r: 2.5,
            }),
              o.label(I, [E, B], {
                dx: E > 0 ? 6 : E < 0 ? -22 : 6,
                dy: B > 0 ? -6 : B < 0 ? 18 : -6,
                size: 13,
              }));
          }));
      }
      if (c.view.guides && i.directrix < 50) {
        const m = i.directrix;
        i.onX
          ? [-m, m].forEach((w) =>
              o.vline(w, {
                color: h.green,
                width: 1.4,
                dash: [7, 5],
              }),
            )
          : [-m, m].forEach((w) =>
              o.hline(w, {
                color: h.green,
                width: 1.4,
                dash: [7, 5],
              }),
            );
        const x = i.onX
          ? [b[0] >= 0 ? m : -m, b[1]]
          : [b[0], b[1] >= 0 ? m : -m];
        o.seg(b, x, {
          color: h.green,
          width: 1.6,
          dash: [4, 3],
        });
      }
    } else if (e === "hyperbola") {
      if (c.view.guides) {
        const m = t.b / t.a;
        (o.line([0, 0], [1, m], {
          color: h.green,
          width: 1.3,
          dash: [7, 5],
        }),
          o.line([0, 0], [1, -m], {
            color: h.green,
            width: 1.3,
            dash: [7, 5],
          }),
          o.rect(-t.a, -t.b, t.a, t.b, {
            color: h.aux,
            alpha: 0,
            width: 1,
          }),
          [-i.directrix, i.directrix].forEach((x) =>
            o.vline(x, {
              color: h.purple,
              width: 1,
              dash: [3, 4],
            }),
          ));
      }
      for (const m of [-1, 1])
        o.param((x) => i.point(x, m), -3, 3, 300, {
          color: h.accent,
          width: 2.6,
        });
    } else {
      const m = o.bounds(),
        x = Math.max(m.xmax - m.xmin, m.ymax - m.ymin);
      (o.param(($) => i.point($), -x, x, 600, {
        color: h.accent,
        width: 2.6,
      }),
        i.dir.x !== void 0
          ? o.vline(i.dir.x, {
              color: h.green,
              width: 1.6,
            })
          : o.hline(i.dir.y, {
              color: h.green,
              width: 1.6,
            }));
      const w = i.dir.x !== void 0 ? [i.dir.x, b[1]] : [b[0], i.dir.y];
      if (
        (o.seg(b, w, {
          color: h.green,
          width: 2.2,
        }),
        o.point(w, {
          color: h.green,
          r: 4,
        }),
        c.view.labels &&
          (o.label("D", w, {
            color: h.green,
            dx: i.dir.x !== void 0 && i.dir.x < 0 ? -18 : 6,
            dy: i.dir.y !== void 0 && i.dir.y > 0 ? -8 : 18,
          }),
          o.label(
            "l",
            i.dir.x !== void 0
              ? [i.dir.x, m.ymax - 0.4]
              : [m.xmax - 0.6, i.dir.y],
            {
              color: h.green,
              dx: 6,
              dy: 14,
            },
          )),
        c.view.guides)
      ) {
        const $ = i.focus,
          j = i.axis,
          E = [-j[1], j[0]],
          B = [$[0] + E[0] * t.p, $[1] + E[1] * t.p],
          I = [$[0] - E[0] * t.p, $[1] - E[1] * t.p];
        (o.seg(B, I, {
          color: h.purple,
          width: 2,
        }),
          o.label("2p", B, {
            color: h.purple,
            dx: 6,
            dy: -4,
            size: 13,
          }));
      }
    }
    const v = e === "parabola" ? [i.focus] : i.foci,
      F = [h.accent2, h.green];
    if (
      ((e !== "ellipse" || t.anim === null) &&
        v.forEach((m, x) =>
          o.seg(b, m, {
            color: e === "parabola" ? h.accent2 : F[x],
            width: 2.2,
          }),
        ),
      v.forEach((m, x) => {
        (o.point(m, {
          color: h.accent2,
          r: 4.5,
        }),
          c.view.labels &&
            o.label(v.length > 1 ? `F${"₁₂"[x]}` : "F", m, {
              color: h.accent2,
              ...(e !== "ellipse"
                ? {
                    dx: -8,
                    dy: 20,
                  }
                : t.axis === "y"
                  ? {
                      dx: 10,
                      dy: 5,
                      bg: !0,
                    }
                  : {
                      dx: x ? 8 : -22,
                      dy: -10,
                    }),
            }));
      }),
      e === "ellipse" && c.view.labels)
    ) {
      const [m, x] = t.axis === "x" ? [t.a, t.b] : [t.b, t.a],
        w = t.axis === "x" ? [0, x] : [m, 0],
        $ = i.foci[1];
      (o.label("b", [w[0] / 2, w[1] / 2], {
        color: h.aux,
        bg: !0,
        dx: t.axis === "x" ? -16 : -4,
        dy: t.axis === "x" ? 4 : 18,
      }),
        o.label("c", [$[0] / 2, $[1] / 2], {
          color: h.aux,
          bg: !0,
          dx: t.axis === "x" ? -4 : 6,
          dy: t.axis === "x" ? 18 : 4,
        }),
        o.label("a", [(w[0] + $[0]) / 2, (w[1] + $[1]) / 2], {
          color: h.aux,
          bg: !0,
          dx: 6,
          dy: -6,
        }));
    }
    (o.handle(b, {
      color: h.edge,
      active: r,
    }),
      c.view.labels &&
        o.label("P", b, {
          dx: 10,
          dy: -10,
        }),
      c.view.labels &&
        o.point([0, 0], {
          color: h.edge,
          r: 2,
        }));
  }
  return {
    enter() {
      (s.use2D(!0), M(), n(), f());
    },
    reset: M,
    resize: M,
    panel() {
      let o = "";
      return (
        e === "ellipse"
          ? ((o += S(
              "axis",
              [
                ["x", translate("焦点在 x 轴")],
                ["y", translate("焦点在 y 轴")],
              ],
              t.axis,
            )),
            (o +=
              C("a", translate("长半轴 a"), 1, 5.5, 0.05, t.a, P(t.a)) +
              C("b", translate("短半轴 b"), 0.4, 5.5, 0.05, t.b, P(t.b))))
          : e === "hyperbola"
            ? ((o +=
                C("a", translate("实半轴 a"), 0.5, 4, 0.05, t.a, P(t.a)) +
                C("b", translate("虚半轴 b"), 0.5, 4, 0.05, t.b, P(t.b))),
              (o += S("equal", [["1", translate("等轴双曲线 a = b")]], "")))
            : ((o += S(
                "orient",
                [
                  ["right", "y² = 2px"],
                  ["left", "y² = −2px"],
                  ["up", "x² = 2py"],
                  ["down", "x² = −2py"],
                ],
                t.orient,
              )),
              (o += C("p", "p", 0.4, 4, 0.05, t.p, P(t.p)))),
        o
      );
    },
    info() {
      const o = u();
      let c;
      e === "ellipse"
        ? ((c = [
            ["a, b, c", `${P(t.a)}, ${P(t.b)}, ${P(o.c)}`],
            [translate("离心率"), `e = c/a = ${P(o.e)}`],
            [
              translate("焦点"),
              o.foci.map((i) => `(${P(i[0])}, ${P(i[1])})`).join("  "),
            ],
          ]),
          o.directrix < 50 &&
            c.push([
              translate("准线"),
              `${t.axis === "x" ? "x" : "y"} = ±a²/c = ±${P(o.directrix)}`,
            ]))
        : e === "hyperbola"
          ? (c = [
              ["a, b, c", `${P(t.a)}, ${P(t.b)}, ${P(o.c)}`],
              [translate("离心率"), `e = c/a = ${P(o.e)}`],
              [translate("渐近线"), `y = ±${P(t.b / t.a)}x`],
              [translate("准线"), `x = ±a²/c = ±${P(o.directrix)}`],
            ])
          : (c = [
              [translate("焦点"), `F(${P(o.focus[0])}, ${P(o.focus[1])})`],
              [
                translate("准线"),
                o.dir.x !== void 0 ? `x = ${P(o.dir.x)}` : `y = ${P(o.dir.y)}`,
              ],
              [translate("通径"), `2p = ${P(2 * t.p)}`],
            ]);
      const h = {
        ellipse: translate(
          "拖动曲线上的 P：|PF₁| + |PF₂| 始终等于 2a。打开“辅助线”可以看到准线，P 到焦点的距离与到准线的距离之比恒为 e。",
        ),
        hyperbola: translate(
          "拖动 P 到两支上：||PF₁| − |PF₂|| 始终等于 2a。虚线框的对角线就是渐近线。",
        ),
        parabola: translate(
          "拖动 P：|PF| 始终等于 P 到准线的距离 |PD|。p 越大，开口越大。",
        ),
      };
      return z(a(), "", D(c) + `<p class="note">${h[e]}</p>`);
    },
    bar() {
      return e !== "ellipse"
        ? ""
        : `<button class="act" data-act="draw">${t.anim !== null ? translate("画椭圆中…") : translate("用细绳画椭圆")}</button>`;
    },
    action(o, c) {
      if (o === "axis") t.axis = c;
      else if (o === "orient") t.orient = c;
      else if (o === "equal") t.b = t.a;
      else if (o === "draw") return ((t.anim = 0), (t.trace = []), s.update());
      (f(), s.refresh());
    },
    space() {
      e === "ellipse" && this.action("draw");
    },
    input(o, c) {
      if (
        ((t[o] = c),
        e === "ellipse" &&
          t.b > t.a - 0.05 &&
          (o === "a" ? (t.b = Math.max(0.4, t.a - 0.05)) : (t.a = t.b + 0.05)),
        f(),
        s.update(),
        e === "ellipse")
      ) {
        const h = o === "a" ? "b" : "a",
          i = document.querySelector(`input[data-param="${h}"]`);
        i &&
          ((i.value = t[h]),
          (document.querySelector(`[data-out="${h}"]`).textContent = P(t[h])));
      }
      return P(c);
    },
    toggled() {
      f();
    },
    frame(o) {
      t.anim !== null &&
        ((t.anim = Math.min(2 * Math.PI, t.anim + o * 1.2)),
        t.trace.push(u().point(t.anim)),
        (d += o),
        d > 0.1 && ((d = 0), f()),
        t.anim >= 2 * Math.PI && ((t.u = 0), (t.anim = null), s.update()));
    },
    draw2D: l,
    toggles: ["labels", "guides"],
  };
}
const Y = 2,
  V = (s) => (Math.round(s * 100) / 100).toString().replace("-", "−");
function ze(s) {
  const e = {
    e: 0.6,
    th: 1.1,
    playing: !1,
    dir: 1,
  };
  let t = !1,
    r = 0;
  const d = () => Ee(e.e, Y),
    u = () => d().point(e.th);
  function y() {
    const n = d(),
      a = u(),
      l = Math.hypot(a[0], a[1]),
      o = e.e > 0.001 ? Math.abs(a[0] - n.directrix) : 1 / 0;
    s.setHud(
      `<div class="kv"><span>|PF|</span><b>${V(l)}</b><span>d</span><b>${Number.isFinite(o) ? V(o) : "∞"}</b><span>|PF| / d</span><b>${Number.isFinite(o) ? V(l / o) : "0"}</b></div>`,
    );
  }
  function M() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-7.5, 7.5, -5, 5));
  }
  function f(n) {
    e.e = n;
    const a = document.querySelector('input[data-param="e"]');
    a &&
      ((a.value = n),
      (document.querySelector('[data-out="e"]').textContent = n.toFixed(2)));
  }
  return {
    enter() {
      (s.use2D(!0),
        M(),
        s.plot.interact({
          down(n, a) {
            return ((t = s.plot.dist(u(), n, a) < 16), t);
          },
          move(n, a) {
            const [l, o] = s.plot.W(n, a);
            ((e.th = Math.atan2(o, l)), y());
          },
          up() {
            t = !1;
          },
          hover: (n, a) => (s.plot.dist(u(), n, a) < 16 ? "pointer" : null),
        }),
        y());
    },
    reset: M,
    resize: M,
    panel() {
      return C("e", translate("离心率 e"), 0, 2.5, 0.01, e.e, e.e.toFixed(2));
    },
    info() {
      const n = d(),
        a = {
          circle: "e = 0",
          ellipse: "0 < e < 1",
          parabola: "e = 1",
          hyperbola: "e > 1",
        }[n.type];
      return z(
        fe[n.type],
        a,
        D([
          [translate("焦点"), "F(0, 0)"],
          [
            translate("准线"),
            e.e > 0.001 ? `x = ${V(n.directrix)}` : translate("无穷远"),
          ],
          [translate("半通径"), `ℓ = ${Y}`],
        ]) +
          `<p class="note">${translate("焦点到曲线上任一点的距离 |PF|，与该点到准线的距离 d 之比恒为 e。e 越小，准线越远、曲线越圆。")}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="play">${e.playing ? translate("暂停") : translate("让 e 连续变化")}</button><i class="sep"></i><button data-act="e" data-v="0.5">e = 0.5</button><button data-act="e" data-v="1">e = 1</button><button data-act="e" data-v="1.6">e = 1.6</button>`;
    },
    action(n, a) {
      (n === "play"
        ? (e.playing = !e.playing)
        : n === "e" && ((e.playing = !1), f(+a)),
        y(),
        s.update());
    },
    space() {
      this.action("play");
    },
    input(n, a) {
      return ((e.e = a), (e.playing = !1), y(), s.update(), a.toFixed(2));
    },
    frame(n) {
      if (!e.playing) return;
      let a = e.e + e.dir * n * 0.25;
      (a > 2.5 && ((a = 2.5), (e.dir = -1)), a < 0 && ((a = 0), (e.dir = 1)));
      const l = d().type;
      (f(a),
        y(),
        (r += n),
        (r > 0.12 || d().type !== l) && ((r = 0), s.update()));
    },
    draw2D() {
      const { plot: n, st: a } = s,
        l = n.theme,
        o = d();
      (n.clear(), n.grid());
      const c = [],
        h = 1440;
      let i = null;
      for (let F = 0; F <= h; F++) {
        const m = -Math.PI + (2 * Math.PI * F) / h,
          x = 1 - e.e * Math.cos(m);
        if (
          (i !== null && Math.sign(x) !== Math.sign(i) && c.push(null),
          (i = x),
          Math.abs(x) < 0.001)
        ) {
          c.push(null);
          continue;
        }
        const w = Y / x;
        c.push([w * Math.cos(m), w * Math.sin(m)]);
      }
      n.path(c, {
        color: l.accent,
        width: 2.6,
      });
      const b = u();
      (e.e > 0.001 &&
        (n.vline(o.directrix, {
          color: l.green,
          width: 1.6,
        }),
        a.view.labels &&
          n.label("l", [o.directrix, n.bounds().ymax - 0.3], {
            color: l.green,
            dx: 6,
            dy: 14,
          }),
        Number.isFinite(b[0]) &&
          (n.seg(b, [o.directrix, b[1]], {
            color: l.green,
            width: 2,
            dash: [5, 4],
          }),
          n.point([o.directrix, b[1]], {
            color: l.green,
            r: 3.5,
          }))),
        n.seg([0, 0], b, {
          color: l.accent2,
          width: 2.2,
        }),
        n.point([0, 0], {
          color: l.accent2,
          r: 4.5,
        }),
        a.view.labels &&
          n.label("F", [0, 0], {
            color: l.accent2,
            dx: -6,
            dy: 20,
          }),
        Number.isFinite(b[0]) &&
          Number.isFinite(b[1]) &&
          (n.handle(b, {
            color: l.edge,
            active: t,
          }),
          a.view.labels &&
            n.label("P", b, {
              dx: 10,
              dy: -10,
            })));
      const v = n.bounds();
      n.text(
        `e = ${e.e.toFixed(2)}`,
        n.S([v.xmax, v.ymin])[0] - 20,
        n.S([v.xmax, v.ymin])[1] - 86,
        {
          color: l.accent,
          size: 28,
          italic: !0,
          align: "right",
        },
      );
    },
    toggles: ["labels"],
  };
}
const De = 18,
  Oe = (s) => (s === "hyperbola" ? 36 : De),
  Le = {
    ellipse: () => X(4, 2.6),
    parabola: () => ne(2.4, "right"),
    hyperbola: () => ae(1.8, 1.6),
  };
function Re(s) {
  const e = {
    kind: "ellipse",
    src: null,
    mode: "focus",
    time: 0,
  };
  let t = !1,
    r = [];
  const d = () => Le[e.kind](),
    u = () => (e.kind === "hyperbola" ? d().foci[1] : d().foci[0]);
  function y() {
    const a = d(),
      l = s.plot.bounds(),
      o = Math.hypot(l.xmax - l.xmin, l.ymax - l.ymin) * 1.5;
    r = [];
    const c = e.kind === "parabola" && e.mode === "parallel",
      h = Oe(e.kind);
    for (let i = 0; i < h; i++) {
      let b, v;
      if (c) {
        const j = -5 + (10 * (i + 0.5)) / h;
        ((b = [l.xmax + 1, j]), (v = [-1, 0]));
      } else {
        const j =
          (2 * Math.PI * (i + 0.5)) / h + (e.kind === "hyperbola" ? 0 : 0.05);
        ((b = e.src), (v = [Math.cos(j), Math.sin(j)]));
      }
      const F = se(a.F, b, v, {
        tmax: o,
        step: 0.03,
      });
      if (
        e.kind === "hyperbola" &&
        (!F || Math.sign(F.p[0]) !== Math.sign(b[0] || 1))
      )
        continue;
      if (!F) {
        r.push({
          pts: [b, [b[0] + v[0] * o, b[1] + v[1] * o]],
          hit: null,
        });
        continue;
      }
      const m = Be(v, a.grad(F.p)),
        x = Math.hypot(m[0], m[1]),
        w = [m[0] / x, m[1] / x];
      let $;
      if (e.kind === "ellipse") {
        const j = se(a.F, F.p, w, {
          tmax: o,
          start: 0.001,
        });
        $ = j ? j.p : [F.p[0] + w[0] * o, F.p[1] + w[1] * o];
      } else $ = [F.p[0] + w[0] * o, F.p[1] + w[1] * o];
      r.push({
        pts: [b, F.p, $],
        hit: F.p,
        back:
          e.kind === "hyperbola"
            ? [F.p, [F.p[0] - w[0] * o, F.p[1] - w[1] * o]]
            : null,
      });
    }
  }
  function M() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      e.kind === "parabola"
        ? s.plot.fit(-3, 9, -5.5, 5.5)
        : s.plot.fit(-6.5, 6.5, -4.2, 4.2));
  }
  function f(a) {
    ((e.kind = a), (e.mode = "focus"), M(), (e.src = u()), y());
  }
  const n = () =>
    d().foci.some((a) => Math.hypot(a[0] - e.src[0], a[1] - e.src[1]) < 1e-6);
  return {
    enter() {
      (s.use2D(!0),
        f(e.kind),
        s.plot.interact({
          down(a, l) {
            return (
              (t = e.mode === "focus" && s.plot.dist(e.src, a, l) < 16),
              t
            );
          },
          move(a, l) {
            e.src = s.plot.W(a, l);
            for (const o of d().foci)
              s.plot.dist(o, a, l) < 10 && (e.src = [...o]);
            y();
          },
          up() {
            ((t = !1), s.update());
          },
          hover: (a, l) =>
            e.mode === "focus" && s.plot.dist(e.src, a, l) < 16
              ? "pointer"
              : null,
        }));
    },
    reset() {
      (M(), y());
    },
    resize() {
      (M(), y());
    },
    panel() {
      let a = S(
        "kind",
        [
          ["ellipse", translate("椭圆")],
          ["parabola", translate("抛物线")],
          ["hyperbola", translate("双曲线")],
        ],
        e.kind,
      );
      return (
        e.kind === "parabola" &&
          (a += S(
            "mode",
            [
              ["focus", translate("焦点发光")],
              ["parallel", translate("平行光射入")],
            ],
            e.mode,
          )),
        a
      );
    },
    info() {
      const a = {
          ellipse: translate(
            "光线从 F₁ 出发，经椭圆反射后都经过 F₂。原因：椭圆在 P 点的法线平分 ∠F₁PF₂。",
          ),
          parabola:
            e.mode === "parallel"
              ? translate(
                  "平行于轴射入的光线，反射后都汇聚到焦点：太阳灶、卫星天线就是这样聚光的。",
                )
              : translate(
                  "从焦点发出的光线，反射后都平行于对称轴射出：手电筒、探照灯就是这样发出平行光的。",
                ),
          hyperbola: translate(
            "光线从 F₂ 射向右支，反射光线的反向延长线（虚线）都经过另一个焦点 F₁，好像光是从 F₁ 发出的。",
          ),
        }[e.kind],
        l =
          e.mode === "parallel"
            ? ""
            : n()
              ? translate("光源在焦点上")
              : translate("光源不在焦点上：反射光不再汇聚");
      return z(
        translate("反射"),
        l,
        `<p class="note">${a}</p>` +
          (e.mode === "parallel"
            ? ""
            : D([
                [
                  translate("提示"),
                  translate("拖动光源，靠近焦点时会自动吸附"),
                ],
              ])),
      );
    },
    bar() {
      return e.mode === "focus" && !n()
        ? `<button class="act" data-act="home">${translate("光源回到焦点")}</button>`
        : "";
    },
    action(a, l) {
      (a === "kind"
        ? f(l)
        : a === "mode"
          ? ((e.mode = l), y())
          : a === "home" && ((e.src = u()), y()),
        s.refresh());
    },
    frame(a) {
      e.time += a;
    },
    draw2D() {
      const { plot: a, st: l } = s,
        o = a.theme,
        c = d();
      if ((a.clear(), a.grid(), e.kind === "ellipse"))
        a.param((i) => c.point(i), 0, 2 * Math.PI, 360, {
          color: o.edge,
          width: 2.6,
        });
      else if (e.kind === "parabola")
        a.param((i) => c.point(i), -8, 8, 400, {
          color: o.edge,
          width: 2.6,
        });
      else
        for (const i of [-1, 1])
          a.param((b) => c.point(b, i), -2.6, 2.6, 300, {
            color: o.edge,
            width: 2.6,
          });
      for (const i of r)
        (a.path(i.pts, {
          color: o.accent,
          width: 1.2,
          alpha: 0.45,
        }),
          i.back &&
            l.view.guides &&
            a.path(i.back, {
              color: o.accent,
              width: 1,
              alpha: 0.35,
              dash: [4, 5],
            }));
      const h = 3.2;
      for (const i of r) {
        const b = [];
        let v = 0;
        for (let x = 0; x + 1 < i.pts.length; x++) {
          const w = Math.hypot(
            i.pts[x + 1][0] - i.pts[x][0],
            i.pts[x + 1][1] - i.pts[x][1],
          );
          (b.push([i.pts[x], i.pts[x + 1], v, w]), (v += w));
        }
        const F = Math.min(v, 14),
          m = (e.time * h) % (F + 2);
        for (const [x, w, $, j] of b) {
          const E = Math.max(0, m - 1.2 - $),
            B = Math.min(j, m - $);
          if (B <= 0 || E >= j) continue;
          const I = (k) => [
            x[0] + ((w[0] - x[0]) * k) / j,
            x[1] + ((w[1] - x[1]) * k) / j,
          ];
          a.seg(I(E), I(B), {
            color: o.accent,
            width: 2.6,
          });
        }
      }
      (c.foci.forEach((i, b) => {
        (a.point(i, {
          color: o.accent2,
          r: 4.5,
        }),
          l.view.labels &&
            a.label(c.foci.length > 1 ? `F${"₁₂"[b]}` : "F", i, {
              color: o.accent2,
              dx: -8,
              dy: 20,
            }));
      }),
        e.mode === "focus" &&
          a.handle(e.src, {
            color: o.accent,
            active: t,
          }));
    },
    toggles: ["labels", "guides"],
  };
}
const A = (s) => {
    const e = Math.round(s * 100) / 100;
    return (Object.is(e, -0) ? 0 : e).toString().replace("-", "−");
  },
  J = {
    ellipse: {
      make: () => X(2, Math.sqrt(3)),
      eq: "x²/4 + y²/3 = 1",
    },
    hyperbola: {
      make: () => ae(2, 1),
      eq: "x²/4 − y² = 1",
    },
    parabola: {
      make: () => ne(2, "right"),
      eq: "y² = 4x",
    },
  };
function Qe(s, e, t) {
  const r = (u, y, M) => {
    if (Math.abs(u) < 1e-9) return "";
    const f = u < 0 ? " − " : M ? "" : " + ",
      n = Math.abs(u),
      a = y && Math.abs(n - 1) < 1e-9 ? "" : A(n);
    return (M && u < 0 ? "−" : f) + a + y;
  };
  let d = r(s, "x²", !0);
  return ((d += r(e, "x", !d)), (d += r(t, "", !d)), (d || "0") + " = 0");
}
function We(s) {
  const e = {
    kind: "ellipse",
    k: 0.5,
    m: 0.6,
  };
  let t = null;
  const r = () => J[e.kind].make(),
    d = () => Ce(r(), e.k, e.m),
    u = () => [
      [0, e.m],
      [2, 2 * e.k + e.m],
    ];
  function y() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-6, 6, -4.2, 4.2));
  }
  function M() {
    for (const n of ["k", "m"]) {
      const a = document.querySelector(`input[data-param="${n}"]`);
      a &&
        ((a.value = e[n]),
        (document.querySelector(`[data-out="${n}"]`).textContent = A(e[n])));
    }
  }
  function f() {
    const n = r(),
      a = e.k;
    let l = [];
    if (e.kind === "ellipse")
      l = [1, -1].map((o) => o * Math.sqrt(n.a * n.a * a * a + n.b * n.b));
    else if (e.kind === "hyperbola") {
      const o = n.a * n.a * a * a - n.b * n.b;
      o > 0 && (l = [1, -1].map((c) => c * Math.sqrt(o)));
    } else Math.abs(a) > 1e-6 && (l = [n.p / (2 * a)]);
    return l.length
      ? l.sort((o, c) => Math.abs(o - e.m) - Math.abs(c - e.m))[0]
      : null;
  }
  return {
    enter() {
      (s.use2D(!0),
        y(),
        s.plot.interact({
          down(n, a) {
            const l = u().findIndex((o) => s.plot.dist(o, n, a) < 16);
            return ((t = l >= 0 ? l : null), t !== null);
          },
          move(n, a) {
            const [, l] = s.plot.W(n, a);
            (t === 0
              ? (e.m = Math.max(-6, Math.min(6, l)))
              : (e.k = Math.max(-6, Math.min(6, (l - e.m) / 2))),
              M(),
              s.update());
          },
          up() {
            t = null;
          },
          hover: (n, a) =>
            u().some((l) => s.plot.dist(l, n, a) < 16) ? "pointer" : null,
        }));
    },
    reset: y,
    resize: y,
    panel() {
      return (
        S(
          "kind",
          Object.entries(J).map(([n, a]) => [n, a.eq]),
          e.kind,
        ) +
        C("k", translate("斜率 k"), -3, 3, 0.01, e.k, A(e.k)) +
        C("m", translate("截距 m"), -5, 5, 0.01, e.m, A(e.m))
      );
    },
    info() {
      const n = d(),
        a = Math.abs(n.A) < 1e-9;
      let l,
        o = "";
      a
        ? ((l = n.pts.length
            ? translate("只有一个交点")
            : translate("没有交点")),
          (o =
            e.kind === "hyperbola"
              ? translate(
                  "直线与渐近线平行，二次项系数为 0，方程退化为一次方程：只有一个交点，但不是相切。",
                )
              : translate(
                  "二次项系数为 0（直线与对称轴平行），方程退化为一次方程：只有一个交点，但不是相切。",
                )))
        : (l =
            n.delta > 0
              ? translate("相交（两个交点）")
              : n.delta === 0
                ? translate("相切（一个公共点）")
                : translate("相离（没有交点）"));
      const c = [
        [
          translate("直线"),
          `y = ${A(e.k)}x ${e.m < 0 ? "−" : "+"} ${A(Math.abs(e.m))}`,
        ],
        [translate("联立后"), Qe(n.A, n.B, n.C)],
      ];
      return (
        a || c.push(["Δ = B² − 4AC", A(n.delta)]),
        n.pts.forEach((h, i) =>
          c.push([
            n.pts.length > 1 ? "AB"[i] : "A",
            `(${A(h[0])}, ${A(h[1])})`,
          ]),
        ),
        n.pts.length === 2 &&
          (c.push(["|AB|", `√(1 + k²)·|x₁ − x₂| = ${A(n.chord)}`]),
          c.push([translate("中点 M"), `(${A(n.mid[0])}, ${A(n.mid[1])})`]),
          e.kind === "ellipse" &&
            Math.abs(n.mid[0]) > 1e-6 &&
            c.push([
              "k<sub>AB</sub> · k<sub>OM</sub>",
              `${A(e.k)} × ${A(n.mid[1] / n.mid[0])} = ${A((e.k * n.mid[1]) / n.mid[0])} = −b²/a²`,
            ])),
        z(l, J[e.kind].eq, D(c) + (o ? `<p class="note">${o}</p>` : ""))
      );
    },
    bar() {
      return f() !== null
        ? `<button class="act" data-act="tangent">${translate("平移到相切")}</button>`
        : "";
    },
    action(n, a) {
      if (n === "kind") e.kind = a;
      else if (n === "tangent") {
        const l = f();
        return (l !== null && (e.m = l), M(), s.update());
      }
      s.refresh();
    },
    input(n, a) {
      return ((e[n] = a), s.update(), A(a));
    },
    draw2D() {
      const { plot: n, st: a } = s,
        l = n.theme,
        o = r();
      if ((n.clear(), n.grid(), e.kind === "ellipse"))
        n.param((i) => o.point(i), 0, 2 * Math.PI, 360, {
          color: l.edge,
          width: 2.4,
        });
      else if (e.kind === "parabola")
        n.param((i) => o.point(i), -8, 8, 400, {
          color: l.edge,
          width: 2.4,
        });
      else {
        for (const i of [-1, 1])
          n.param((b) => o.point(b, i), -3, 3, 300, {
            color: l.edge,
            width: 2.4,
          });
        a.view.guides &&
          [0.5, -0.5].forEach((i) =>
            n.line([0, 0], [1, i], {
              color: l.green,
              width: 1.2,
              dash: [6, 5],
            }),
          );
      }
      const c = d(),
        h = c.delta === 0 && Math.abs(c.A) > 1e-9;
      (n.line([0, e.m], [1, e.k], {
        color: h ? l.green : l.accent2,
        width: 2.2,
      }),
        c.pts.length === 2 &&
          (n.seg(c.pts[0], c.pts[1], {
            color: l.accent,
            width: 3.4,
          }),
          a.view.guides &&
            e.kind === "ellipse" &&
            (n.seg([0, 0], c.mid, {
              color: l.purple,
              width: 1.6,
              dash: [5, 4],
            }),
            n.point(c.mid, {
              color: l.purple,
              r: 4,
            }),
            a.view.labels &&
              n.label("M", c.mid, {
                color: l.purple,
                dx: 8,
                dy: 16,
              }))),
        c.pts.forEach((i, b) => {
          (n.point(i, {
            color: l.accent,
            r: 5,
          }),
            a.view.labels &&
              n.label(c.pts.length > 1 ? "AB"[b] : "A", i, {
                color: l.accent,
                dx: 8,
                dy: -8,
              }));
        }),
        u().forEach((i, b) =>
          n.handle(i, {
            color: l.accent2,
            active: t === b,
          }),
        ));
    },
    toggles: ["labels", "guides"],
  };
}
const He = {
  section: Se,
  dandelin: Ne,
  ellipse: (s) =>
    K(s, {
      kind: "ellipse",
    }),
  hyperbola: (s) =>
    K(s, {
      kind: "hyperbola",
    }),
  parabola: (s) =>
    K(s, {
      kind: "parabola",
    }),
  eccentricity: ze,
  optics: Re,
  line: We,
};
function Te() {
  we({
    lessons: je,
    factories: He,
    toggles: [
      ["fill", translate("面填充")],
      ["hidden", translate("被遮挡的线")],
      ["labels", translate("图上标注")],
      ["guides", translate("辅助线")],
      ["spin", translate("自动旋转")],
    ],
    defaults: {
      fill: !0,
      hidden: !0,
      labels: !0,
      guides: !0,
      spin: !1,
    },
  });
}
function conicLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("圆锥曲线 · ConicLab")), Te());
    }, []),
    jsxRuntime.jsxs("div", {
      id: "app",
      children: [
        jsxRuntime.jsxs("header", {
          id: "top",
          children: [
            jsxRuntime.jsx("a", {
              className: "back",
              href: localizedUrl("/"),
              children: "← WEDULAB",
            }),
            jsxRuntime.jsxs("div", {
              className: "brand",
              children: [
                jsxRuntime.jsxs("svg", {
                  viewBox: "0 0 32 32",
                  fill: "none",
                  "aria-hidden": "true",
                  children: [
                    jsxRuntime.jsx("ellipse", {
                      cx: "16",
                      cy: "16",
                      rx: "12",
                      ry: "7.5",
                      stroke: "#23272c",
                      strokeWidth: "1.3",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "9.4",
                      cy: "16",
                      r: "1.8",
                      fill: "#c9800f",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "22.6",
                      cy: "16",
                      r: "1.8",
                      fill: "#c9800f",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M9.4 16L14 9M22.6 16L14 9",
                      stroke: "#2f6fd0",
                      strokeWidth: "1.2",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "CONIC",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("圆锥曲线"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(ye, {}),
            jsxRuntime.jsxs("div", {
              className: "tbtns",
              children: [
                jsxRuntime.jsx("button", {
                  className: "tb",
                  id: "bPrev",
                  title: translate("上一节 (←)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M10 3L5 8l5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsx("button", {
                  className: "tb",
                  id: "bNext",
                  title: translate("下一节 (→)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M6 3l5 5-5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsxs("button", {
                  className: "tb",
                  id: "bTheme",
                  title: translate("切换纸面 / Studio 风格 (T)"),
                  children: [
                    jsxRuntime.jsxs("svg", {
                      viewBox: "0 0 16 16",
                      children: [
                        jsxRuntime.jsx("circle", {
                          cx: "8",
                          cy: "8",
                          r: "5.5",
                        }),
                        jsxRuntime.jsx("path", {
                          d: "M8 2.5v11a5.5 5.5 0 0 0 0-11z",
                          fill: "currentColor",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      id: "themeName",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("button", {
                  className: "tb",
                  id: "bReset",
                  title: translate("重置视角 (R)"),
                  children: [
                    jsxRuntime.jsxs("svg", {
                      viewBox: "0 0 16 16",
                      children: [
                        jsxRuntime.jsx("path", {
                          d: "M2.5 8a5.5 5.5 0 1 0 1.8-4.1",
                        }),
                        jsxRuntime.jsx("path", {
                          d: "M2.5 2.5v3h3",
                        }),
                      ],
                    }),
                    translate("视角"),
                  ],
                }),
                jsxRuntime.jsx("button", {
                  className: "tb",
                  id: "bFull",
                  title: translate("全屏 (F)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M2 6V2h4M14 6V2h-4M2 10v4h4M14 10v4h-4",
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsx("nav", {
          id: "nav",
        }),
        jsxRuntime.jsxs("main", {
          id: "stage",
          children: [
            jsxRuntime.jsx("canvas", {
              id: "c3",
            }),
            jsxRuntime.jsx("canvas", {
              id: "ov",
            }),
            jsxRuntime.jsx("canvas", {
              id: "c2",
              hidden: !0,
            }),
            jsxRuntime.jsxs("div", {
              id: "chapter",
              children: [
                jsxRuntime.jsx("div", {
                  className: "n",
                }),
                jsxRuntime.jsx("h1", {}),
                jsxRuntime.jsx("p", {}),
              ],
            }),
            jsxRuntime.jsx("div", {
              id: "hud",
              hidden: !0,
            }),
            jsxRuntime.jsx("div", {
              id: "stageBar",
            }),
          ],
        }),
        jsxRuntime.jsxs("aside", {
          id: "panel",
          children: [
            jsxRuntime.jsx("div", {
              id: "lesson",
            }),
            jsxRuntime.jsxs("div", {
              id: "view",
              children: [
                jsxRuntime.jsx("div", {
                  className: "vh",
                  children: translate("VIEW · 显示设置"),
                }),
                jsxRuntime.jsx("div", {
                  className: "tgs",
                  id: "tgs",
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
}
export { conicLabPage as default };
