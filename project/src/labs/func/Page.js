// Recovered from public deployment: Page-tKxVWO0n.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as J } from "../../components/LanguageSwitcher.js";
import {
  r as z,
  q as D,
  k as S,
  m as j,
  D as K,
} from "../../vendor/math-_7kWGBgE.js"; /* empty css              */
import "../../vendor/OutputPass-B-cSf-Py.js";
import "../../vendor/LineSegments2-CF4-EQBa.js";
import "../../vendor/studio-DdpeYmJn.js";
const G = [
    {
      id: "transform",
      title: translate("图像变换"),
      sub: "Transformations",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>从基本函数 y = f(x) 出发，y = a·f(b(x − h)) + k 的图像可以由四步变换得到：</p><p><b>h</b> 左右平移（“左加右减”），<b>k</b> 上下平移，<b>a</b> 纵向伸缩（a &lt; 0 时还要关于 x 轴翻折），<b>b</b> 横向伸缩为原来的 1/b。</p><p>淡色是原函数，圆点标出一个特征点在变换前后的位置。</p>",
      ),
    },
    {
      id: "explog",
      title: translate("指数与对数"),
      sub: "Exponentials & logarithms",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>y = aˣ 与 y = logₐx（a > 0 且 a ≠ 1）互为<b>反函数</b>，图像关于直线 y = x 对称。</p><p>a > 1 时两者都是增函数；0 &lt; a &lt; 1 时都是减函数。指数函数恒过 (0, 1)，对数函数恒过 (1, 0)。</p><p>拖动曲线上的点，看它关于 y = x 的对称点。</p>",
      ),
    },
    {
      id: "unit",
      title: translate("单位圆与三角函数"),
      sub: "The unit circle",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>角 θ 的终边与单位圆交于点 P(cos θ, sin θ)。P 的纵坐标就是 <b>sin θ</b>，横坐标就是 <b>cos θ</b>。</p><p>让 θ 转动，把 P 的高度随 θ 记录下来，就“展开”成了正弦曲线 y = sin x。转一圈是 2π，所以正弦函数的周期是 2π。</p>",
      ),
    },
    {
      id: "sine",
      title: translate("正弦型函数"),
      sub: "y = A sin(ωx + φ)",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>y = A sin(ωx + φ) + k 中：<b>A</b> 决定振幅，<b>ω</b> 决定周期 T = 2π/ω，<b>φ</b> 决定初相，<b>k</b> 让图像上下平移。</p><p>从 y = sin x 出发：先向左平移 φ，再把横坐标缩短为原来的 1/ω；若先伸缩，则只需平移 <b>φ/ω</b>。</p><p>“五点法”：令 ωx + φ 依次取 0、π/2、π、3π/2、2π，描出一个周期内的五个关键点。</p>",
      ),
    },
    {
      id: "derivative",
      title: translate("导数的几何意义"),
      sub: "Secant to tangent",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>曲线上取点 P(x₀, f(x₀)) 和 Q(x₀ + h, f(x₀ + h))，割线 PQ 的斜率是平均变化率 (f(x₀ + h) − f(x₀)) / h。</p><p>让 h → 0，Q 沿曲线滑向 P，割线趋近于<b>切线</b>。切线的斜率就是导数 <b>f′(x₀)</b>。</p>",
      ),
    },
    {
      id: "monotone",
      title: translate("单调性与极值"),
      sub: "Monotonicity & extrema",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>上图是 f(x)，下图是导函数 f′(x)。</p><p>f′(x) > 0 的区间上 f(x) 单调<b>递增</b>，f′(x) &lt; 0 的区间上单调<b>递减</b>。</p><p>f′(x) 由正变负的点是<b>极大值点</b>，由负变正的点是<b>极小值点</b>。f′(x₀) = 0 但不变号的点（如 x³ 在 0 处）不是极值点。</p>",
      ),
    },
    {
      id: "bisection",
      title: translate("零点与二分法"),
      sub: "Bisection method",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>若 f(x) 在 [a, b] 上连续，且 f(a)·f(b) &lt; 0，则在 (a, b) 内至少有一个零点（<b>零点存在定理</b>）。</p><p>二分法：取中点 m，看 f(m) 的符号，保留仍然异号的那一半区间。每一步区间长度减半，直到达到所需的精度。</p><p>拖动区间端点，或者点“下一步”逐步二分。</p>",
      ),
    },
    {
      id: "integral",
      title: translate("定积分（拓展）"),
      sub: "Riemann sums",
      view: {
        labels: !0,
        guides: !0,
      },
      body: translate(
        "<p>求曲边梯形的面积：把 [a, b] 分成 n 等份，每一份用一个矩形近似，矩形面积之和叫<b>黎曼和</b>。</p><p>n 越大，矩形越窄，黎曼和越接近曲边梯形的面积，这个极限就是<b>定积分</b> ∫ₐᵇ f(x) dx。</p><p>比较以左端点、右端点、中点为高的三种取法。</p>",
      ),
    },
  ],
  T = {
    square: {
      tex: "x²",
      f: (s) => s * s,
      df: (s) => 2 * s,
      key: [1, 1],
    },
    cube: {
      tex: "x³",
      f: (s) => s ** 3,
      df: (s) => 3 * s * s,
      key: [1, 1],
    },
    sqrt: {
      tex: "√x",
      f: (s) => (s >= 0 ? Math.sqrt(s) : NaN),
      df: (s) => (s > 0 ? 0.5 / Math.sqrt(s) : NaN),
      key: [1, 1],
      domain: (s) => s >= 0,
    },
    abs: {
      tex: "|x|",
      f: Math.abs,
      df: (s) => Math.sign(s),
      key: [1, 1],
    },
    inv: {
      tex: "1/x",
      f: (s) => 1 / s,
      df: (s) => -1 / (s * s),
      key: [1, 1],
      domain: (s) => s !== 0,
    },
    exp2: {
      tex: "2ˣ",
      f: (s) => 2 ** s,
      df: (s) => Math.LN2 * 2 ** s,
      key: [0, 1],
    },
    log2: {
      tex: "log₂x",
      f: (s) => (s > 0 ? Math.log2(s) : NaN),
      df: (s) => (s > 0 ? 1 / (s * Math.LN2) : NaN),
      key: [1, 0],
      domain: (s) => s > 0,
    },
    sin: {
      tex: "sin x",
      f: Math.sin,
      df: Math.cos,
      key: [Math.PI / 2, 1],
    },
  },
  Z =
    (s, { a: t = 1, b: h = 1, h: f = 0, k: c = 0 }) =>
    (p) =>
      t * s(h * (p - f)) + c,
  L = ([s, t], { a: h = 1, b: f = 1, h: c = 0, k: p = 0 }) => [
    s / f + c,
    h * t + p,
  ],
  tt = {
    none: (s) => s,
    negY: (s) => (t) => -s(t),
    negX: (s) => (t) => s(-t),
    absY: (s) => (t) => Math.abs(s(t)),
    absX: (s) => (t) => s(Math.abs(t)),
  },
  et = (s, t, h) => (s(t + h) - s(t)) / h,
  st = (s, t, h = 0) => ({
    f: (f) => f ** 3 + s * f * f + t * f + h,
    df: (f) => 3 * f * f + 2 * s * f + t,
    critical() {
      const f = 4 * s * s - 12 * t;
      if (f <= 1e-12) return [];
      const c = Math.sqrt(f);
      return [(-2 * s - c) / 6, (-2 * s + c) / 6];
    },
  });
function O(s, t) {
  return t
    .map((h) => ({
      x: h,
      kind:
        s(h - 1e-4) > 0 && s(h + 1e-4) < 0
          ? "max"
          : s(h - 1e-4) < 0 && s(h + 1e-4) > 0
            ? "min"
            : null,
    }))
    .filter((h) => h.kind);
}
function B(s, t, h, f) {
  const c = [h, ...t.filter((r) => r > h && r < f), f],
    p = [];
  for (let r = 0; r + 1 < c.length; r++) {
    const e = c[r],
      n = c[r + 1],
      a =
        Number.isFinite(e) && Number.isFinite(n)
          ? (e + n) / 2
          : Number.isFinite(e)
            ? e + 1
            : Number.isFinite(n)
              ? n - 1
              : 0,
      i =
        [a, a + 0.37, a - 0.37, a + 1.1]
          .map((u) => Math.sign(s(u)))
          .find((u) => u !== 0) ?? 0,
      l = p[p.length - 1];
    l && l.sign === i
      ? (l.to = c[r + 1])
      : p.push({
          from: c[r],
          to: c[r + 1],
          sign: i,
        });
  }
  return p;
}
function nt(s, t, h, f = 0.001, c = 40) {
  if (!(s(t) * s(h) < 0)) return null;
  const p = [];
  for (let r = 0; r < c && h - t > f; r++) {
    const e = (t + h) / 2,
      n = s(e);
    if (
      (p.push({
        a: t,
        b: h,
        m: e,
        fm: n,
      }),
      n === 0)
    ) {
      t = h = e;
      break;
    }
    s(t) * n < 0 ? (h = e) : (t = e);
  }
  return (
    p.push({
      a: t,
      b: h,
      m: (t + h) / 2,
      fm: s((t + h) / 2),
      done: !0,
    }),
    p
  );
}
const at = (s, t) => Math.max(0, Math.ceil(Math.log2(s / t)));
function W(s, t, h, f, c = "left") {
  const p = (h - t) / f,
    r = [];
  let e = 0;
  for (let n = 0; n < f; n++) {
    const a = t + n * p,
      i = a + p,
      l = c === "left" ? a : c === "right" ? i : (a + i) / 2,
      u = s(l);
    (r.push({
      x0: a,
      x1: i,
      h: u,
    }),
      (e += u * p));
  }
  return {
    sum: e,
    rects: r,
  };
}
function ot(s, t, h, f = 2e3) {
  const c = (h - t) / f;
  let p = s(t) + s(h);
  for (let r = 1; r < f; r++) p += s(t + r * c) * (r % 2 ? 4 : 2);
  return (p * c) / 3;
}
function it(s, t, h, f = 0) {
  const c = (2 * Math.PI) / Math.abs(t),
    p = [0, 0.5, 1, 1.5, 2].map((r) => [
      (r * Math.PI - h) / t,
      s * Math.sin(r * Math.PI) + f,
    ]);
  return {
    f: (r) => s * Math.sin(t * r + h) + f,
    T: c,
    amplitude: Math.abs(s),
    shift: -h / t,
    five: p,
  };
}
const d = (s, t = 2) => {
  if (!Number.isFinite(s)) return "—";
  const h = Math.round(s * 10 ** t) / 10 ** t;
  return (Object.is(h, -0) ? 0 : h).toString().replace("-", "−");
};
function I(s) {
  const t = Math.round((s / Math.PI) * 12);
  if (Math.abs((s / Math.PI) * 12 - t) > 1e-6) return d(s);
  if (t === 0) return "0";
  const h = (e, n) => (n ? h(n, e % n) : e),
    f = h(Math.abs(t), 12),
    c = t / f,
    p = 12 / f,
    r = Math.abs(c) === 1 ? "π" : `${Math.abs(c)}π`;
  return (c < 0 ? "−" : "") + (p === 1 ? r : `${r}/${p}`);
}
function F(s, t, h) {
  const f = document.querySelector(`input[data-param="${s}"]`);
  f && (f.value = t);
  const c = document.querySelector(`[data-out="${s}"]`);
  c && (c.textContent = h ?? d(t));
}
const C = (s, t = "") =>
    Math.abs(s) < 1e-9 ? "" : `${s < 0 ? " − " : " + "}${d(Math.abs(s))}${t}`,
  rt = {
    square: "({})²",
    cube: "({})³",
    sqrt: "√({})",
    abs: "|{}|",
    inv: "1/({})",
    exp2: "2^({})",
    log2: "log₂({})",
    sin: "sin({})",
  },
  Q = [
    ["none", translate("无")],
    ["negY", "y = −f(x)"],
    ["negX", "y = f(−x)"],
    ["absY", "y = |f(x)|"],
    ["absX", "y = f(|x|)"],
  ];
function lt(s) {
  const t = {
      base: "square",
      a: 1,
      b: 1,
      h: 0,
      k: 0,
      sym: "none",
    },
    h = () => ({
      a: t.a,
      b: t.b,
      h: t.h,
      k: t.k,
    }),
    f = () => tt[t.sym](Z(T[t.base].f, h()));
  function c() {
    if (t.sym !== "none")
      return `${Q.find(([l]) => l === t.sym)[1]}, f(x) = ${T[t.base].tex}`;
    const r = t.h === 0 ? "x" : `x ${t.h > 0 ? "−" : "+"} ${d(Math.abs(t.h))}`,
      e = t.b === 1 ? r : `${d(t.b)}${t.h === 0 ? "x" : `(${r})`}`;
    let n = rt[t.base].replace("{}", e);
    e === "x" && (n = n.replace("(x)", t.base === "sin" ? " x" : "x"));
    const a = t.a === 1 ? "" : t.a === -1 ? "−" : `${d(t.a)}·`,
      i = t.k === 0 ? "" : ` ${t.k > 0 ? "+" : "−"} ${d(Math.abs(t.k))}`;
    return `y = ${a}${n}${i}`;
  }
  function p() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-6, 6, -4, 4));
  }
  return {
    enter() {
      (s.use2D(!0), p());
    },
    reset: p,
    resize: p,
    panel() {
      return (
        S(
          "base",
          Object.entries(T).map(([r, e]) => [r, `y = ${e.tex}`]),
          t.base,
        ) +
        j("h", translate("左右平移 h"), -4, 4, 0.1, t.h, d(t.h)) +
        j("k", translate("上下平移 k"), -4, 4, 0.1, t.k, d(t.k)) +
        j("a", translate("纵向伸缩 a"), -3, 3, 0.1, t.a, d(t.a)) +
        j("b", translate("横向伸缩 b"), 0.25, 4, 0.05, t.b, d(t.b)) +
        `<div class="sub-h">${translate("对称变换")}</div>` +
        S("sym", Q, t.sym) +
        `<div class="row"><button class="act ghost" data-act="zero">${translate("恢复原函数")}</button></div>`
      );
    },
    info() {
      const r = h(),
        [e, n] = L(T[t.base].key, r),
        a = [
          [
            translate("左右平移"),
            t.h === 0
              ? "—"
              : t.h > 0
                ? translate("向右 {0}", [d(t.h)])
                : translate("向左 {0}", [d(-t.h)]),
          ],
          [
            translate("上下平移"),
            t.k === 0
              ? "—"
              : t.k > 0
                ? translate("向上 {0}", [d(t.k)])
                : translate("向下 {0}", [d(-t.k)]),
          ],
          [
            translate("纵坐标"),
            t.a === 1 ? "—" : translate("变为原来的 {0} 倍", [d(t.a)]),
          ],
          [
            translate("横坐标"),
            t.b === 1 ? "—" : translate("变为原来的 1/{0}", [d(t.b)]),
          ],
          [
            translate("特征点"),
            `(${d(T[t.base].key[0])}, ${d(T[t.base].key[1])}) → (${d(e)}, ${d(n)})`,
          ],
        ];
      return z(
        c(),
        t.sym === "none" ? "" : translate("对称变换"),
        D(t.sym === "none" ? a : []) +
          `<p class="note">${translate("“左加右减”：y = f(x − h) 的图像是把 y = f(x) 向右平移 h（h > 0）。横向伸缩时，x 的系数 b 越大，图像越“窄”。")}</p>`,
      );
    },
    action(r, e) {
      (r === "base"
        ? (t.base = e)
        : r === "sym"
          ? (t.sym = e)
          : r === "zero" &&
            (Object.assign(t, {
              a: 1,
              b: 1,
              h: 0,
              k: 0,
              sym: "none",
            }),
            ["a", "b", "h", "k"].forEach((n) => F(n, t[n]))),
        s.refresh());
    },
    input(r, e) {
      return ((t[r] = e), s.update(), d(e));
    },
    draw2D() {
      const { plot: r, st: e } = s,
        n = r.theme,
        a = T[t.base];
      if (
        (r.clear(),
        r.grid(),
        r.fn(a.f, {
          color: n.aux,
          width: 1.8,
          dash: [6, 5],
          alpha: 0.8,
        }),
        r.fn(f(), {
          color: n.accent,
          width: 2.8,
        }),
        e.view.guides && t.sym === "none")
      ) {
        const [i, l] = a.key,
          [u, b] = L(a.key, h());
        (r.point([i, l], {
          color: n.aux,
          r: 4,
        }),
          r.seg([i, l], [u, b], {
            color: n.accent2,
            width: 1.4,
            dash: [3, 4],
          }),
          r.point([u, b], {
            color: n.accent2,
            r: 5,
          }),
          e.view.labels &&
            r.label(`(${d(u)}, ${d(b)})`, [u, b], {
              color: n.accent2,
              size: 13,
              italic: !1,
              bg: !0,
            }),
          t.h !== 0 &&
            r.vline(t.h, {
              color: n.green,
              width: 1,
              dash: [4, 5],
            }),
          t.k !== 0 &&
            r.hline(t.k, {
              color: n.green,
              width: 1,
              dash: [4, 5],
            }));
      }
      if (e.view.labels) {
        const i = r.bounds(),
          [l, u] = r.S([i.xmax, i.ymax]);
        r.text(c(), l - 24, u + 140, {
          color: n.accent,
          size: 20,
          italic: !0,
          align: "right",
        });
      }
    },
    toggles: ["labels", "guides"],
  };
}
function ct(s) {
  const t = {
    a: 2,
    t: 1.2,
  };
  let h = !1;
  const f = (e) => t.a ** e,
    c = (e) => (e > 0 ? Math.log(e) / Math.log(t.a) : NaN),
    p = () => [t.t, f(t.t)];
  function r() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-4.5, 6.5, -3.5, 5.5));
  }
  return {
    enter() {
      (s.use2D(!0),
        r(),
        s.plot.interact({
          down(e, n) {
            return ((h = s.plot.dist(p(), e, n) < 16), h);
          },
          move(e) {
            ((t.t = Math.max(-4, Math.min(4, s.plot.W(e, 0)[0]))), s.update());
          },
          up() {
            h = !1;
          },
          hover: (e, n) => (s.plot.dist(p(), e, n) < 16 ? "pointer" : null),
        }));
    },
    reset: r,
    resize: r,
    panel() {
      return (
        j("a", translate("底数 a"), 0.2, 4, 0.05, t.a, d(t.a)) +
        S(
          "preset",
          [
            ["0.5", "a = 1/2"],
            ["2", "a = 2"],
            ["3", "a = 3"],
            ["2.718281828", "a = e"],
          ],
          "",
        )
      );
    },
    info() {
      const n =
          Math.abs(t.a - 1) < 0.03
            ? translate("a = 1 时 y = 1ˣ 是常数函数，不是指数函数")
            : t.a > 1
              ? translate("a > 1：两个函数都是增函数")
              : translate("0 < a < 1：两个函数都是减函数"),
        [a, i] = p();
      return z(
        `y = ${d(t.a)}ˣ  ·  y = log<sub>${d(t.a)}</sub>x`,
        "",
        D([
          [translate("单调性"), n],
          ["P", `(${d(a)}, ${d(i)})`],
          ["P′", `(${d(i)}, ${d(a)})`],
        ]) +
          `<p class="note">${translate("P 在指数函数图像上，把它的横、纵坐标交换得到 P′，P′ 一定在对数函数图像上：这就是“互为反函数”。")}</p>`,
      );
    },
    action(e, n) {
      if (e === "preset") {
        t.a = +n;
        const a = document.querySelector('input[data-param="a"]');
        a &&
          ((a.value = t.a),
          (document.querySelector('[data-out="a"]').textContent = d(t.a)));
      }
      s.update();
    },
    input(e, n) {
      return (
        (t.a = Math.abs(n - 1) < 0.025 ? (n < 1 ? 0.975 : 1.025) : n),
        s.update(),
        d(t.a)
      );
    },
    draw2D() {
      const { plot: e, st: n } = s,
        a = e.theme;
      (e.clear(),
        e.grid(),
        e.line([0, 0], [1, 1], {
          color: a.aux,
          width: 1.2,
          dash: [6, 5],
        }),
        e.fn(f, {
          color: a.accent,
          width: 2.8,
        }),
        e.fn(c, {
          color: a.accent2,
          width: 2.8,
          from: 1e-6,
        }));
      const [i, l] = p(),
        u = [l, i];
      if (
        (n.view.guides &&
          (e.seg([i, l], u, {
            color: a.green,
            width: 1.4,
            dash: [4, 4],
          }),
          e.point([(i + l) / 2, (i + l) / 2], {
            color: a.green,
            r: 3,
          })),
        e.point([0, 1], {
          color: a.accent,
          r: 4,
        }),
        e.point([1, 0], {
          color: a.accent2,
          r: 4,
        }),
        e.handle([i, l], {
          color: a.accent,
          active: h,
        }),
        e.point(u, {
          color: a.accent2,
          r: 5,
          ring: !0,
        }),
        n.view.labels)
      ) {
        (e.label("P", [i, l], {
          dx: 10,
          dy: -10,
        }),
          e.label("P′", u, {
            dx: 10,
            dy: 18,
            color: a.accent2,
          }),
          e.label("(0, 1)", [0, 1], {
            dx: -48,
            dy: -6,
            size: 12,
            italic: !1,
            color: a.accent,
          }),
          e.label("(1, 0)", [1, 0], {
            dx: 6,
            dy: 18,
            size: 12,
            italic: !1,
            color: a.accent2,
          }));
        const b = e.bounds();
        e.label("y = x", [b.xmax - 1.2, b.xmax - 1.2], {
          color: a.aux,
          dx: -40,
          dy: -6,
          size: 13,
        });
      }
    },
    toggles: ["labels", "guides"],
  };
}
const w = [-2.2, 0],
  ht = [0.5, 1, 1.5, 2].map((s) => s * Math.PI);
function dt(s) {
  const t = {
    th: 0.9,
    playing: !0,
    fn: "sin",
  };
  let h = !1,
    f = 0;
  const c = () => [w[0] + Math.cos(t.th), w[1] + Math.sin(t.th)],
    p = () => (t.fn === "sin" ? Math.sin(t.th) : Math.cos(t.th));
  function r() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-3.6, 7, -2.2, 2.2));
  }
  return {
    enter() {
      (s.use2D(!0),
        r(),
        s.plot.interact({
          down(e, n) {
            return (
              (h = s.plot.dist(c(), e, n) < 18),
              h && (t.playing = !1),
              h
            );
          },
          move(e, n) {
            const [a, i] = s.plot.W(e, n);
            let l = Math.atan2(i - w[1], a - w[0]);
            (l < 0 && (l += 2 * Math.PI), (t.th = l), s.update());
          },
          up() {
            h = !1;
          },
          hover: (e, n) => (s.plot.dist(c(), e, n) < 18 ? "pointer" : null),
        }));
    },
    reset: r,
    resize: r,
    panel() {
      return S(
        "fn",
        [
          ["sin", "y = sin x"],
          ["cos", "y = cos x"],
        ],
        t.fn,
      );
    },
    info() {
      const e = t.th,
        n = Math.abs(Math.cos(e)) < 1e-6 ? "—" : d(Math.tan(e));
      return z(
        `θ = ${I(Math.round(e / (Math.PI / 12)) * (Math.PI / 12))} ≈ ${d((e * 180) / Math.PI, 0)}°`,
        "",
        D([
          ["sin θ", d(Math.sin(e), 3)],
          ["cos θ", d(Math.cos(e), 3)],
          ["tan θ", n],
        ]) +
          `<p class="note">${t.fn === "sin" ? translate("红色竖线是正弦线：P 的纵坐标。把它平移到右边 x = θ 处，描出的就是 y = sin x。") : translate("蓝色横线是余弦线：P 的横坐标。把它转成竖直方向、平移到 x = θ 处，描出的就是 y = cos x。")}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="play">${t.playing ? translate("暂停") : translate("继续转动")}</button>`;
    },
    action(e, n) {
      (e === "play" ? (t.playing = !t.playing) : e === "fn" && (t.fn = n),
        s.refresh());
    },
    space() {
      this.action("play");
    },
    frame(e) {
      t.playing &&
        ((t.th = (t.th + e * 0.7) % (2 * Math.PI)),
        (f += e),
        f > 0.15 && ((f = 0), s.update()));
    },
    draw2D() {
      const { plot: e, st: n } = s,
        a = e.theme,
        i = a.danger,
        l = a.accent2;
      (e.clear(),
        e.grid({
          labels: !1,
        }));
      const u = e.ctx;
      ((u.font = "500 11px 'JetBrains Mono',monospace"),
        (u.fillStyle = a.axis),
        (u.textAlign = "center"));
      for (const y of ht) {
        const [v, A] = e.S([y, 0]);
        (u.fillText(I(y), v, A + 16),
          e.seg([y, -0.06], [y, 0.06], {
            color: a.axis,
            width: 1,
            glow: 0,
          }));
      }
      for (const y of [-1, 1]) {
        const [v, A] = e.S([0, y]);
        ((u.textAlign = "right"),
          u.fillText(String(y).replace("-", "−"), v - 6, A + 4),
          e.hline(y, {
            color: a.grid,
            width: 1,
            dash: [2, 5],
            glow: 0,
          }));
      }
      (e.param(
        (y) => [w[0] + Math.cos(y), w[1] + Math.sin(y)],
        0,
        2 * Math.PI,
        200,
        {
          color: a.edge,
          width: 1.8,
        },
      ),
        e.seg([w[0] - 1.3, 0], [w[0] + 1.3, 0], {
          color: a.axis,
          width: 1,
          glow: 0,
        }),
        e.seg([w[0], -1.3], [w[0], 1.3], {
          color: a.axis,
          width: 1,
          glow: 0,
        }));
      const b = c();
      if (
        (e.seg(w, b, {
          color: a.edge,
          width: 1.6,
        }),
        e.arc(w, 0, t.th, 22, {
          color: a.accent,
        }),
        e.seg([b[0], 0], b, {
          color: i,
          width: 3,
        }),
        e.seg(w, [b[0], 0], {
          color: l,
          width: 3,
        }),
        n.view.guides && Math.abs(Math.cos(t.th)) > 0.08)
      ) {
        const y = [w[0] + 1, Math.tan(t.th)];
        Math.abs(y[1]) < 4 &&
          (e.seg([w[0] + 1, 0], y, {
            color: a.green,
            width: 2.4,
          }),
          e.seg(w, y, {
            color: a.green,
            width: 1,
            dash: [4, 4],
          }),
          n.view.labels &&
            e.label("T", y, {
              color: a.green,
              dx: 6,
              dy: -4,
              size: 13,
            }));
      }
      const M = t.fn === "sin" ? Math.sin : Math.cos;
      (e.fn(M, {
        from: 0,
        to: 2 * Math.PI,
        color: a.aux,
        width: 1.4,
        dash: [5, 5],
        alpha: 0.6,
      }),
        e.fn(M, {
          from: 0,
          to: t.th,
          color: a.accent,
          width: 2.8,
        }));
      const g = [t.th, p()];
      (t.fn === "sin"
        ? e.seg(b, g, {
            color: i,
            width: 1,
            dash: [3, 4],
          })
        : (e.seg([w[0], Math.cos(t.th)], g, {
            color: l,
            width: 1,
            dash: [3, 4],
          }),
          e.seg([w[0], 0], [w[0], Math.cos(t.th)], {
            color: l,
            width: 2,
            alpha: 0.5,
          })),
        e.seg([t.th, 0], g, {
          color: t.fn === "sin" ? i : l,
          width: 3,
        }),
        e.point(g, {
          color: a.accent,
          r: 5,
        }),
        e.handle(b, {
          color: a.edge,
          active: h,
        }),
        n.view.labels &&
          (e.label("P", b, {
            dx: 10,
            dy: -10,
          }),
          e.label(
            "θ",
            [w[0] + 0.45 * Math.cos(t.th / 2), 0.45 * Math.sin(t.th / 2)],
            {
              color: a.accent,
              dx: -4,
              dy: 6,
              size: 14,
            },
          ),
          e.label("O", w, {
            dx: -16,
            dy: 16,
            size: 13,
          })));
    },
    toggles: ["labels", "guides"],
  };
}
const ft = Math.PI / 12,
  ut = (s) => (s <= 0 ? 0 : s >= 1 ? 1 : s * s * (3 - 2 * s));
function pt(s) {
  const t = {
    A: 2,
    w: 2,
    phi: Math.PI / 3,
    k: 0,
    order: "shift",
    anim: null,
  };
  let h = 0;
  function f() {
    const e = t.anim;
    if (e === null)
      return {
        A: t.A,
        w: t.w,
        phi: t.phi,
        k: t.k,
        step: -1,
      };
    const n = (b) => ut(e * 4 - b),
      a = 1 + (t.A - 1) * n(2),
      i = t.k * n(3);
    if (t.order === "shift") {
      const b = t.phi * n(0),
        M = 1 + (t.w - 1) * n(1);
      return {
        A: a,
        w: M,
        phi: b,
        k: i,
        step: Math.min(3, Math.floor(e * 4)),
      };
    }
    const l = 1 + (t.w - 1) * n(0),
      u = t.phi * n(1);
    return {
      A: a,
      w: l,
      phi: u,
      k: i,
      step: Math.min(3, Math.floor(e * 4)),
    };
  }
  const c = () => {
    const e = f();
    return {
      ...e,
      ...it(e.A, e.w, e.phi, e.k),
    };
  };
  function p(e) {
    const n =
        Math.abs(e.A - 1) < 1e-9 ? "" : Math.abs(e.A + 1) < 1e-9 ? "−" : d(e.A),
      a = Math.abs(e.w - 1) < 1e-9 ? "" : d(e.w),
      i =
        Math.abs(e.phi) < 1e-9
          ? ""
          : ` ${e.phi > 0 ? "+" : "−"} ${I(Math.abs(e.phi))}`,
      l = i ? `(${a}x${i})` : ` ${a}x`,
      u =
        Math.abs(e.k) < 1e-9
          ? ""
          : ` ${e.k > 0 ? "+" : "−"} ${d(Math.abs(e.k))}`;
    return `y = ${n}sin${l}${u}`;
  }
  function r() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-Math.PI * 1.2, Math.PI * 2.4, -4, 4));
  }
  return {
    enter() {
      (s.use2D(!0), r());
    },
    reset: r,
    resize: r,
    panel() {
      return (
        j("A", translate("振幅 A"), -3, 3, 0.1, t.A, d(t.A)) +
        j("w", translate("ω"), 0.25, 4, 0.25, t.w, d(t.w)) +
        j("phi", translate("初相 φ"), -Math.PI, Math.PI, ft, t.phi, I(t.phi)) +
        j("k", translate("上下平移 k"), -2, 2, 0.1, t.k, d(t.k)) +
        `<div class="sub-h">${translate("由 y = sin x 变换的顺序")}</div>` +
        S(
          "order",
          [
            ["shift", translate("先平移，后伸缩")],
            ["scale", translate("先伸缩，后平移")],
          ],
          t.order,
        )
      );
    },
    info() {
      const e = c(),
        a = `<ol class="steps">${(t.order === "shift" ? [translate("向左平移 {0} 个单位：y = sin(x + φ)", [I(t.phi)]), translate("横坐标变为原来的 1/{0}：y = sin(ωx + φ)", [d(t.w)]), translate("纵坐标变为原来的 {0} 倍", [d(t.A)]), translate("向上平移 {0} 个单位", [d(t.k)])] : [translate("横坐标变为原来的 1/{0}：y = sin ωx", [d(t.w)]), translate("向左平移 φ/ω = {0} 个单位", [d(t.phi / t.w)]), translate("纵坐标变为原来的 {0} 倍", [d(t.A)]), translate("向上平移 {0} 个单位", [d(t.k)])]).map((i, l) => `<li class="${l === e.step ? "on" : l < e.step ? "done" : ""}">${i}</li>`).join("")}</ol>`;
      return z(
        p(t),
        "",
        D([
          [translate("振幅"), d(Math.abs(t.A))],
          [translate("周期"), `T = 2π/ω = ${I((2 * Math.PI) / t.w)}`],
          [translate("初相"), I(t.phi)],
        ]) + a,
      );
    },
    bar() {
      return `<button class="act" data-act="play">${t.anim !== null ? translate("演示中…") : translate("从 y = sin x 开始变换")}</button>`;
    },
    action(e, n) {
      (e === "play" ? (t.anim = 0) : e === "order" && (t.order = n),
        s.refresh());
    },
    space() {
      this.action("play");
    },
    input(e, n) {
      return (
        (t[e] = n),
        (t.anim = null),
        s.update(),
        e === "phi" ? I(n) : d(n)
      );
    },
    frame(e) {
      if (t.anim === null) return;
      const n = f().step;
      ((t.anim = Math.min(1, t.anim + e * 0.16)),
        (h += e),
        (f().step !== n || h > 0.2) && ((h = 0), s.update()),
        t.anim >= 1 && ((t.anim = null), s.update()));
    },
    draw2D() {
      const { plot: e, st: n } = s,
        a = e.theme;
      (e.clear(),
        e.grid({
          piX: !0,
        }));
      const i = c();
      if (
        (e.fn(Math.sin, {
          color: a.aux,
          width: 1.6,
          dash: [6, 5],
          alpha: 0.7,
        }),
        e.fn(i.f, {
          color: a.accent,
          width: 2.8,
        }),
        n.view.guides)
      ) {
        i.five.forEach(([M, g], y) => {
          (e.point([M, g], {
            color: a.accent2,
            r: 4.5,
          }),
            n.view.labels &&
              e.label(["0", "π/2", "π", "3π/2", "2π"][y], [M, g], {
                color: a.accent2,
                dx: -10,
                dy: g > i.k ? -10 : 20,
                size: 11,
                italic: !1,
              }));
        });
        const l = i.five[0][0],
          u = i.five[4][0],
          b = i.k - i.amplitude - 0.5;
        (e.seg([l, b], [u, b], {
          color: a.green,
          width: 1.6,
        }),
          e.seg([l, b - 0.12], [l, b + 0.12], {
            color: a.green,
            width: 1.6,
          }),
          e.seg([u, b - 0.12], [u, b + 0.12], {
            color: a.green,
            width: 1.6,
          }),
          n.view.labels &&
            e.label(`T = ${I(i.T)}`, [(l + u) / 2, b], {
              color: a.green,
              dx: -20,
              dy: 18,
              size: 13,
              italic: !1,
            }),
          Math.abs(i.k) > 1e-9 &&
            e.hline(i.k, {
              color: a.aux,
              width: 1,
              dash: [3, 4],
            }));
      }
      if (n.view.labels) {
        const l = e.bounds(),
          [u, b] = e.S([l.xmax, l.ymax]);
        e.text(p(i), u - 24, b + 140, {
          color: a.accent,
          size: 20,
          italic: !0,
          align: "right",
        });
      }
    },
    toggles: ["labels", "guides"],
  };
}
const R = {
  half: {
    tex: "y = x²/2",
    f: (s) => (s * s) / 2,
    df: (s) => s,
  },
  sin: {
    tex: "y = sin x",
    f: Math.sin,
    df: Math.cos,
  },
  cubic: {
    tex: "y = x³/3 − x",
    f: (s) => s ** 3 / 3 - s,
    df: (s) => s * s - 1,
  },
  exp: {
    tex: "y = eˣ/2",
    f: (s) => Math.exp(s) / 2,
    df: (s) => Math.exp(s) / 2,
  },
};
function bt(s) {
  const t = {
    fn: "half",
    x0: 1,
    h: 1.5,
    anim: !1,
  };
  let h = !1;
  const f = () => R[t.fn],
    c = () => [t.x0, f().f(t.x0)],
    p = () => [t.x0 + t.h, f().f(t.x0 + t.h)];
  function r() {
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(-4, 4.5, -2.5, 4.5));
  }
  return {
    enter() {
      (s.use2D(!0),
        r(),
        s.plot.interact({
          down(e, n) {
            return ((h = s.plot.dist(c(), e, n) < 16), h);
          },
          move(e) {
            ((t.x0 = Math.max(-3.5, Math.min(3.5, s.plot.W(e, 0)[0]))),
              s.update());
          },
          up() {
            h = !1;
          },
          hover: (e, n) => (s.plot.dist(c(), e, n) < 16 ? "pointer" : null),
        }));
    },
    reset: r,
    resize: r,
    panel() {
      return (
        S(
          "fn",
          Object.entries(R).map(([e, n]) => [e, n.tex]),
          t.fn,
        ) + j("h", "h", -2, 2, 0.01, t.h, d(t.h))
      );
    },
    info() {
      const e = et(f().f, t.x0, t.h),
        n = f().df(t.x0);
      return z(
        translate("割线斜率 → 切线斜率"),
        "",
        D([
          ["x₀", d(t.x0)],
          ["h", d(t.h, 3)],
          [translate("割线 PQ 的斜率"), `Δy/Δx = ${d(e, 4)}`],
          ["f′(x₀)", d(n, 4)],
          [translate("差"), d(e - n, 4)],
        ]) +
          `<p class="note">${translate("拖动 P 改变 x₀；点“h → 0”让 Q 沿曲线滑向 P，割线斜率越来越接近 f′(x₀)。h 取负值时 Q 在 P 的左边，结果一样。")}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="shrink">${t.anim ? translate("逼近中…") : "h → 0"}</button><button data-act="resetH">${translate("h 复原")}</button>`;
    },
    action(e, n) {
      (e === "fn"
        ? (t.fn = n)
        : e === "shrink"
          ? (t.anim = !0)
          : e === "resetH" && ((t.anim = !1), (t.h = 1.5), F("h", t.h)),
        s.refresh());
    },
    space() {
      this.action("shrink");
    },
    input(e, n) {
      return (
        (t.h = Math.abs(n) < 0.005 ? (n < 0 ? -0.005 : 0.005) : n),
        (t.anim = !1),
        s.update(),
        d(t.h)
      );
    },
    frame(e) {
      t.anim &&
        ((t.h *= Math.exp(-e * 1.4)),
        Math.abs(t.h) < 0.005 &&
          ((t.h = Math.sign(t.h) * 0.005), (t.anim = !1)),
        F("h", t.h, d(t.h, 3)),
        s.update());
    },
    draw2D() {
      const { plot: e, st: n } = s,
        a = e.theme,
        i = f();
      (e.clear(),
        e.grid(),
        e.fn(i.f, {
          color: a.edge,
          width: 2.6,
        }));
      const l = c(),
        u = p(),
        b = (u[1] - l[1]) / (u[0] - l[0]);
      (n.view.guides &&
        e.line(l, [1, i.df(t.x0)], {
          color: a.green,
          width: 1.8,
          dash: [7, 5],
        }),
        e.line(l, [1, b], {
          color: a.accent2,
          width: 2.2,
        }),
        n.view.guides &&
          (e.seg(l, [u[0], l[1]], {
            color: a.aux,
            width: 1.2,
            dash: [3, 4],
          }),
          e.seg([u[0], l[1]], u, {
            color: a.aux,
            width: 1.2,
            dash: [3, 4],
          }),
          n.view.labels &&
            Math.abs(t.h) > 0.3 &&
            (e.label("Δx", [(l[0] + u[0]) / 2, l[1]], {
              color: a.aux,
              dx: -10,
              dy: 18,
              size: 13,
            }),
            e.label("Δy", [u[0], (l[1] + u[1]) / 2], {
              color: a.aux,
              dx: 6,
              dy: 4,
              size: 13,
            }))),
        e.point(u, {
          color: a.accent2,
          r: 5,
        }),
        e.handle(l, {
          color: a.accent,
          active: h,
        }),
        n.view.labels &&
          (e.label("P", l, {
            dx: -18,
            dy: -10,
          }),
          Math.abs(t.h) > 0.15 &&
            e.label("Q", u, {
              color: a.accent2,
              dx: 8,
              dy: -8,
            })));
    },
    toggles: ["labels", "guides"],
  };
}
const q = 2.6,
  N = -2.8,
  $ = 3.2;
function xt(s) {
  const t = {
    a: 0,
    b: -3,
    x: 1.8,
  };
  let h = !1;
  const f = () => st(t.a, t.b);
  function c() {
    const n = f();
    let a = 0.5,
      i = 0.5;
    for (let l = 0; l <= 200; l++) {
      const u = -$ + (2 * $ * l) / 200;
      ((a = Math.max(a, Math.abs(n.f(u)))),
        (i = Math.max(i, Math.abs(n.df(u)))));
    }
    return {
      sf: 2 / a,
      sd: 2 / i,
    };
  }
  function p() {
    (s.plot.setInsets({
      top: 100,
      bottom: 70,
    }),
      s.plot.fit(-$ - 0.3, $ + 0.3, N - 2.4, q + 2.4));
  }
  const r = () => `f(x) = x³${C(t.a, "x²")}${C(t.b, "x")}`,
    e = () => `f′(x) = 3x²${C(2 * t.a, "x")}${C(t.b)}`;
  return {
    enter() {
      (s.use2D(!0),
        p(),
        s.plot.interact({
          down(n) {
            const [a] = s.plot.W(n, 0);
            return ((h = Math.abs(a - t.x) * s.plot.view.unit < 14), h);
          },
          move(n) {
            ((t.x = Math.max(-$, Math.min($, s.plot.W(n, 0)[0]))), s.update());
          },
          up() {
            h = !1;
          },
          hover: (n) =>
            Math.abs(s.plot.W(n, 0)[0] - t.x) * s.plot.view.unit < 14
              ? "ew-resize"
              : null,
        }));
    },
    reset: p,
    resize: p,
    panel() {
      return (
        S(
          "preset",
          [
            ["0,-3", "x³ − 3x"],
            ["0,0", "x³"],
            ["0,1", "x³ + x"],
            ["-1.5,0", "x³ − 1.5x²"],
          ],
          "",
        ) +
        j("a", "a", -3, 3, 0.1, t.a, d(t.a)) +
        j("b", "b", -5, 3, 0.1, t.b, d(t.b))
      );
    },
    info() {
      const n = f(),
        a = n.critical(),
        i = O(n.df, a),
        l = B(n.df, a, -1 / 0, 1 / 0),
        u = (g) => (Number.isFinite(g) ? d(g) : g > 0 ? "+∞" : "−∞"),
        b = l.map((g) => [
          `(${u(g.from)}, ${u(g.to)})`,
          g.sign > 0 ? translate("f′ > 0，递增") : translate("f′ < 0，递减"),
        ]);
      (i.forEach((g) =>
        b.push([
          g.kind === "max" ? translate("极大值") : translate("极小值"),
          `f(${d(g.x)}) = ${d(n.f(g.x))}`,
        ]),
      ),
        i.length || b.push([translate("极值"), translate("没有极值点")]));
      const M =
        !i.length && a.length === 0 && 4 * t.a * t.a - 12 * t.b > -1e-9
          ? translate(
              "f′(x) = 0 有一个根，但 f′ 在它两侧不变号，所以不是极值点。",
            )
          : translate("拖动竖线：上图切线的斜率就是下图对应点的纵坐标 f′(x)。");
      return z(r(), e(), D(b) + `<p class="note">${M}</p>`);
    },
    action(n, a) {
      n === "preset" &&
        (([t.a, t.b] = a.split(",").map(Number)),
        F("a", t.a),
        F("b", t.b),
        s.update());
    },
    input(n, a) {
      return ((t[n] = a), s.update(), d(a));
    },
    draw2D() {
      const { plot: n, st: a } = s,
        i = n.theme,
        l = f(),
        { sf: u, sd: b } = c();
      n.clear();
      const M = n.bounds();
      for (let m = Math.ceil(M.xmin); m <= M.xmax; m++)
        n.vline(m, {
          color: i.gridMajor,
          width: 1,
          glow: 0,
        });
      for (const [m, k] of [
        [q, "f(x)"],
        [N, "f′(x)"],
      ]) {
        (n.seg([M.xmin, m], [M.xmax, m], {
          color: i.axis,
          width: 1.3,
          glow: 0,
        }),
          n.label(k, [M.xmin, m + 2.1], {
            dx: 10,
            dy: 0,
            size: 15,
            color: i.axis,
          }));
        for (let P = Math.ceil(-$); P <= $; P++)
          P &&
            n.label(String(P).replace("-", "−"), [P, m], {
              dx: -4,
              dy: 16,
              size: 11,
              italic: !1,
              color: i.axis,
            });
      }
      const g = l.critical(),
        y = B(l.df, g, -$, $);
      for (const m of y) {
        const k = m.sign > 0 ? i.green : i.danger,
          P = Array.from(
            {
              length: 81,
            },
            (E, V) => m.from + ((m.to - m.from) * V) / 80,
          );
        (n.path(
          [[m.from, N], ...P.map((E) => [E, N + l.df(E) * b]), [m.to, N]],
          {
            color: k,
            width: 0,
            fill: k,
            fillAlpha: 0.16,
            close: !0,
          },
        ),
          n.path(
            P.map((E) => [E, q + l.f(E) * u]),
            {
              color: k,
              width: 3,
            },
          ),
          a.view.labels &&
            n.label(m.sign > 0 ? "↗" : "↘", [(m.from + m.to) / 2, q + 1.9], {
              color: k,
              size: 18,
              italic: !1,
              dx: -6,
            }));
      }
      n.path(
        Array.from(
          {
            length: 241,
          },
          (m, k) => {
            const P = -$ + (2 * $ * k) / 240;
            return [P, N + l.df(P) * b];
          },
        ),
        {
          color: i.accent2,
          width: 2.4,
        },
      );
      for (const m of O(l.df, g)) {
        if (Math.abs(m.x) > $) continue;
        const k = [m.x, q + l.f(m.x) * u];
        (n.seg(k, [m.x, N], {
          color: i.aux,
          width: 1,
          dash: [3, 4],
        }),
          n.point(k, {
            color: m.kind === "max" ? i.danger : i.green,
            r: 5,
          }),
          n.point([m.x, N], {
            color: i.accent2,
            r: 4,
          }),
          a.view.labels &&
            n.label(
              m.kind === "max" ? translate("极大值") : translate("极小值"),
              k,
              {
                dx: -18,
                dy: m.kind === "max" ? -12 : 22,
                size: 12,
                italic: !1,
                color: m.kind === "max" ? i.danger : i.green,
              },
            ));
      }
      const v = t.x;
      n.seg([v, N - 2.2], [v, q + 2.2], {
        color: i.accent,
        width: h ? 2 : 1.4,
      });
      const A = [v, q + l.f(v) * u];
      if (a.view.guides) {
        const m = l.df(v) * u,
          k = Math.min(1.2, 2 / Math.max(Math.abs(m), 1e-6));
        n.seg([v - k, A[1] - m * k], [v + k, A[1] + m * k], {
          color: i.accent,
          width: 1.4,
          dash: [6, 4],
        });
      }
      (n.point(A, {
        color: i.accent,
        r: 5,
      }),
        n.point([v, N + l.df(v) * b], {
          color: i.accent,
          r: 5,
        }),
        a.view.labels &&
          n.label(`f′(${d(v)}) = ${d(l.df(v))}`, [v, N + l.df(v) * b], {
            color: i.accent,
            dx: 10,
            dy: -8,
            size: 13,
            italic: !1,
            bg: !0,
          }));
    },
    toggles: ["labels", "guides"],
  };
}
const X = {
  sq: {
    tex: "f(x) = x² − 2",
    f: (s) => s * s - 2,
    a: 1,
    b: 2,
    view: [-1, 3.5, -3, 4],
  },
  cubic: {
    tex: "f(x) = x³ − x − 1",
    f: (s) => s ** 3 - s - 1,
    a: 1,
    b: 2,
    view: [-1, 3, -3, 5],
  },
  ln: {
    tex: "f(x) = ln x + 2x − 6",
    f: (s) => (s > 0 ? Math.log(s) + 2 * s - 6 : NaN),
    a: 2,
    b: 3,
    view: [0, 4.5, -5, 4],
  },
};
function mt(s) {
  const t = {
    fn: "sq",
    a: 1,
    b: 2,
    eps: 0.01,
    k: 0,
  };
  let h = null;
  const f = () => X[t.fn],
    c = () => nt(f().f, t.a, t.b, t.eps);
  function p() {
    const [e, n, a, i] = f().view;
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(e, n, a, i));
  }
  function r(e) {
    ((t.fn = e), (t.a = f().a), (t.b = f().b), (t.k = 0), p());
  }
  return {
    enter() {
      (s.use2D(!0),
        r(t.fn),
        s.plot.interact({
          down(e, n) {
            const a = [
              [t.a, 0],
              [t.b, 0],
            ].findIndex((i) => s.plot.dist(i, e, n) < 16);
            return ((h = a >= 0 ? a : null), h !== null);
          },
          move(e) {
            const n = s.plot.W(e, 0)[0];
            (h === 0
              ? (t.a = Math.min(n, t.b - 0.05))
              : (t.b = Math.max(n, t.a + 0.05)),
              (t.k = 0),
              s.update());
          },
          up() {
            h = null;
          },
          hover: (e, n) =>
            [
              [t.a, 0],
              [t.b, 0],
            ].some((a) => s.plot.dist(a, e, n) < 16)
              ? "ew-resize"
              : null,
        }));
    },
    reset: p,
    resize: p,
    panel() {
      return (
        S(
          "fn",
          Object.entries(X).map(([e, n]) => [e, n.tex]),
          t.fn,
        ) +
        `<div class="sub-h">${translate("精确度 ε")}</div>` +
        S(
          "eps",
          [
            ["0.1", "0.1"],
            ["0.01", "0.01"],
            ["0.001", "0.001"],
          ],
          String(t.eps),
        )
      );
    },
    info() {
      const e = c();
      if (!e)
        return z(
          translate("f(a)·f(b) ≥ 0"),
          "",
          `<p class="note">${translate("区间端点的函数值同号，不能保证区间内有零点，二分法无法开始。拖动端点，使 f(a) 与 f(b) 异号。")}</p>`,
        );
      const n = at(t.b - t.a, t.eps),
        i = e
          .slice(0, Math.max(1, t.k))
          .filter((b) => !b.done)
          .map(
            (b, M) =>
              `<tr class="${M === t.k - 1 ? "on" : ""}"><td>${M + 1}</td><td>${d(b.a, 4)}</td><td>${d(b.b, 4)}</td><td>${d(b.m, 4)}</td><td>${b.fm > 0 ? "+" : b.fm < 0 ? "−" : "0"}</td></tr>`,
          )
          .join(""),
        l = e[Math.min(t.k, e.length - 1)],
        u = t.k >= e.length - 1;
      return z(
        f().tex,
        translate("需要 {0} 步", [n]),
        `<table class="iter"><thead><tr><th>#</th><th>a</th><th>b</th><th>m</th><th>f(m)</th></tr></thead><tbody>${t.k ? i : ""}</tbody></table><p class="note">${u ? translate("区间长度已小于 ε，零点近似值 x ≈ {0}。", [d(l.m, 4)]) : translate("当前区间 [{0}, {1}]，长度 {2}。每一步长度减半：要使长度小于 ε，需要 ⌈log₂((b − a)/ε)⌉ 步。", [d(l.a, 4), d(l.b, 4), d(l.b - l.a, 4)])}</p>`,
      );
    },
    bar() {
      const e = c();
      return e
        ? `<button class="act" data-act="step" ${t.k >= e.length - 1 ? "disabled" : ""}>${translate("下一步")}</button><button data-act="all">${translate("直接完成")}</button><button data-act="restart">${translate("重来")}</button>`
        : "";
    },
    action(e, n) {
      const a = c();
      if (e === "fn") return (r(n), s.refresh());
      (e === "eps"
        ? ((t.eps = +n), (t.k = 0))
        : e === "step" && a
          ? (t.k = Math.min(a.length - 1, t.k + 1))
          : e === "all" && a
            ? (t.k = a.length - 1)
            : e === "restart" && (t.k = 0),
        s.refresh());
    },
    space() {
      this.action("step");
    },
    draw2D() {
      const { plot: e, st: n } = s,
        a = e.theme,
        i = f().f;
      (e.clear(), e.grid());
      const l = c();
      if (l) {
        const [, u] = e.S([0, 0]);
        l.slice(0, t.k + 1).forEach((g, y) => {
          const v = e.W(0, u + 26 + y * 9)[1];
          e.seg([g.a, v], [g.b, v], {
            color: y === t.k ? a.accent : a.aux,
            width: y === t.k ? 3 : 1.6,
            alpha: y === t.k ? 1 : 0.6,
          });
        });
        const b = l[Math.min(t.k, l.length - 1)],
          M = e.bounds();
        (e.rect(b.a, M.ymin, b.b, M.ymax, {
          fill: a.accent,
          alpha: 0.08,
          width: 0,
        }),
          (t.k < l.length - 1 || b.done) &&
            (e.vline(b.m, {
              color: a.accent2,
              width: 1.2,
              dash: [4, 4],
            }),
            e.point([b.m, i(b.m)], {
              color: a.accent2,
              r: 4.5,
            }),
            n.labels &&
              e.label("m", [b.m, 0], {
                color: a.accent2,
                dx: 4,
                dy: -8,
                size: 13,
              })));
      }
      (e.fn(i, {
        color: a.edge,
        width: 2.6,
      }),
        [
          [t.a, "a"],
          [t.b, "b"],
        ].forEach(([u, b], M) => {
          (e.seg([u, 0], [u, i(u)], {
            color: a.aux,
            width: 1,
            dash: [3, 4],
          }),
            e.point([u, i(u)], {
              color: i(u) > 0 ? a.green : a.danger,
              r: 4.5,
            }),
            e.handle([u, 0], {
              color: a.accent,
              active: h === M,
            }),
            n.labels &&
              e.label(b, [u, 0], {
                dx: -4,
                dy: -12,
                size: 14,
              }));
        }));
    },
    toggles: ["labels"],
  };
}
const Y = {
    sq: {
      tex: "f(x) = x²",
      f: (s) => s * s,
      a: 0,
      b: 2,
      exact: "8/3",
      view: [-0.6, 2.8, -0.8, 4.6],
    },
    sin: {
      tex: "f(x) = sin x",
      f: Math.sin,
      a: 0,
      b: Math.PI,
      exact: "2",
      view: [-0.5, 3.7, -0.6, 1.6],
    },
    cubic: {
      tex: "f(x) = 1 + x³/4",
      f: (s) => 1 + s ** 3 / 4,
      a: -1,
      b: 2,
      exact: "57/16",
      view: [-1.6, 2.6, -0.8, 3.6],
    },
  },
  _ = [
    ["left", translate("左端点")],
    ["right", translate("右端点")],
    ["mid", translate("中点")],
  ];
function gt(s) {
  const t = {
      fn: "sq",
      n: 6,
      mode: "left",
      playing: !1,
      acc: 0,
    },
    h = () => Y[t.fn];
  function f() {
    const [c, p, r, e] = h().view;
    (s.plot.setInsets({
      top: 110,
      bottom: 70,
    }),
      s.plot.fit(c, p, r, e));
  }
  return {
    enter() {
      (s.use2D(!0), f());
    },
    reset: f,
    resize: f,
    panel() {
      return (
        S(
          "fn",
          Object.entries(Y).map(([c, p]) => [c, p.tex]),
          t.fn,
        ) +
        S("mode", _, t.mode) +
        j("n", translate("分割数 n"), 1, 120, 1, t.n, String(t.n))
      );
    },
    info() {
      const c = h(),
        p = ot(c.f, c.a, c.b),
        r = _.map(([e, n]) => {
          const a = W(c.f, c.a, c.b, t.n, e).sum;
          return [
            n,
            `${d(a, 4)}  <small>(${translate("误差")} ${d(a - p, 4)})</small>`,
          ];
        });
      return (
        r.push([translate("积分值"), `${c.exact} ≈ ${d(p, 4)}`]),
        z(
          "∫ f(x) dx",
          translate("[{0}, {1}] 分成 {2} 份", [d(c.a), d(c.b), t.n]),
          D(r) +
            `<p class="note">${translate("n 越大，三种取法的误差都越小；中点取法通常收敛得最快。")}</p>`,
        )
      );
    },
    bar() {
      return `<button class="act" data-act="play">${t.playing ? translate("暂停") : translate("n 逐渐增大")}</button>`;
    },
    action(c, p) {
      (c === "fn"
        ? ((t.fn = p), f())
        : c === "mode"
          ? (t.mode = p)
          : c === "play" &&
            (!t.playing && t.n >= 120 && (t.n = 1), (t.playing = !t.playing)),
        s.refresh());
    },
    space() {
      this.action("play");
    },
    input(c, p) {
      return ((t.n = p), (t.playing = !1), s.update(), String(p));
    },
    frame(c) {
      if (!t.playing) return;
      t.acc += c;
      const p = t.n < 10 ? 0.5 : t.n < 30 ? 0.12 : 0.04;
      t.acc < p ||
        ((t.acc = 0),
        (t.n += 1),
        t.n >= 120 && ((t.n = 120), (t.playing = !1)),
        F("n", t.n, String(t.n)),
        s.update());
    },
    draw2D() {
      const { plot: c, st: p } = s,
        r = c.theme,
        e = h();
      (c.clear(), c.grid());
      const n = Array.from(
        {
          length: 201,
        },
        (i, l) => e.a + ((e.b - e.a) * l) / 200,
      );
      c.path([[e.a, 0], ...n.map((i) => [i, e.f(i)]), [e.b, 0]], {
        close: !0,
        fill: r.accent2,
        fillAlpha: 0.1,
        width: 0,
      });
      const { rects: a } = W(e.f, e.a, e.b, t.n, t.mode);
      for (const i of a)
        c.rect(i.x0, 0, i.x1, i.h, {
          fill: r.accent,
          alpha: 0.28,
          color: r.accent,
          width: t.n > 60 ? 0.5 : 1.2,
        });
      if (p.view.guides && t.n <= 30)
        for (const i of a) {
          const l =
            t.mode === "left"
              ? i.x0
              : t.mode === "right"
                ? i.x1
                : (i.x0 + i.x1) / 2;
          c.point([l, i.h], {
            color: r.accent,
            r: 3,
          });
        }
      (c.fn(e.f, {
        color: r.edge,
        width: 2.6,
      }),
        c.vline(e.a, {
          color: r.aux,
          width: 1,
          dash: [3, 4],
        }),
        c.vline(e.b, {
          color: r.aux,
          width: 1,
          dash: [3, 4],
        }),
        p.view.labels &&
          (c.label("a", [e.a, 0], {
            dx: 4,
            dy: 18,
            size: 14,
          }),
          c.label("b", [e.b, 0], {
            dx: 4,
            dy: 18,
            size: 14,
          })));
    },
    toggles: ["labels", "guides"],
  };
}
const yt = {
  transform: lt,
  explog: ct,
  unit: dt,
  sine: pt,
  derivative: bt,
  monotone: xt,
  bisection: mt,
  integral: gt,
};
function Mt() {
  K({
    lessons: G,
    factories: yt,
    threeD: !1,
    toggles: [
      ["labels", translate("图上标注")],
      ["guides", translate("辅助线")],
    ],
    defaults: {
      labels: !0,
      guides: !0,
    },
  });
}
function funcLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("函数图像 · FuncLab")), Mt());
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
                    jsxRuntime.jsx("path", {
                      d: "M3 16h26M16 29V3",
                      stroke: "#23272c",
                      strokeOpacity: ".35",
                      strokeWidth: "1",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M3 22c4 0 5-12 9.5-12S19 22 23.5 22 27 14 29 12",
                      stroke: "#c9800f",
                      strokeWidth: "1.8",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M8 27L26 7",
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
                        "FUNC",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("函数图像"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(J, {}),
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
              id: "c2",
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
export { funcLabPage as default };
