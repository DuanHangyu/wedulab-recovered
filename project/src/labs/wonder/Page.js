// Recovered from public deployment: Page-BHNjPbNx.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as vt } from "../../components/LanguageSwitcher.js";
import {
  r as S,
  q as D,
  k as U,
  m as B,
  t as _,
  D as wt,
} from "../../vendor/math-_7kWGBgE.js";
import {
  G as bt,
  b as W,
  N as et,
  aw as Mt,
  a as yt,
  a9 as ot,
  y as R,
  a4 as xt,
  m as $t,
  c as kt,
  a5 as jt,
  z as at,
  a2 as ht,
  C as H,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import { c as St } from "../../vendor/confetti-D_DoZ5bY.js"; /* empty css              */
import "../../vendor/LineSegments2-CF4-EQBa.js";
import "../../vendor/studio-DdpeYmJn.js";
const zt = [
    {
      id: "sierpinski",
      title: translate("谢尔宾斯基三角形"),
      sub: "Sierpiński triangle",
      view: {
        labels: !0,
      },
      body: translate(
        "<p>玩一个游戏：在三角形里随便取一点，然后不断重复——随机选一个顶点，向它跳一半的距离，打一个点。</p><p>每一步都是随机的，可几万个点打下来，出现的却是一个精致而规整的图形：<b>谢尔宾斯基三角形</b>。它的每一小块都和整体一模一样，这叫<b>自相似</b>，是分形的标志。</p>",
      ),
    },
    {
      id: "koch",
      title: translate("科赫雪花"),
      sub: "Koch snowflake",
      view: {},
      body: translate(
        "<p>从一个正三角形开始，把每条边三等分，在中间一段上向外长出一个小正三角形。对新的每条边重复这一步。</p><p>雪花的边越来越曲折：周长没有上限，面积却永远不会超过一个固定的值。</p>",
      ),
    },
    {
      id: "tree",
      title: translate("分形树"),
      sub: "Fractal tree",
      view: {},
      body: translate(
        "<p>树干顶端长出两根短一些的枝条，每根枝条的顶端又长出两根……只用一条规则，就能长出一整棵树。</p><p>大自然里的树、河流、血管、闪电，都有这种“一分为二、层层缩小”的分形结构。</p>",
      ),
    },
    {
      id: "mobius",
      title: translate("莫比乌斯带"),
      sub: "Möbius strip",
      view: {
        labels: !0,
        spin: !1,
      },
      body: translate(
        "<p>把一张长纸条的一端扭转半圈，再和另一端粘起来，就得到<b>莫比乌斯带</b>（德国数学家莫比乌斯，1858）。</p><p>它只有一个面、一条边。拖动可以旋转观察，再让蚂蚁走一走、给它涂涂色、沿中线剪开看看会发生什么。</p>",
      ),
    },
    {
      id: "golden",
      title: translate("黄金分割"),
      sub: "The golden ratio",
      view: {
        labels: !0,
      },
      body: translate(
        "<p>把线段 AB 分成两段，使 AG : AB = GB : AG，这个比值约为 0.618，叫<b>黄金比</b>；它的倒数 φ = (1 + √5)/2 ≈ 1.618。</p><p>先凭眼力找找黄金分割点，再看看它和黄金螺旋、斐波那契数列的关系。</p>",
      ),
    },
    {
      id: "sunflower",
      title: translate("向日葵的种子"),
      sub: "Phyllotaxis",
      view: {},
      body: translate(
        "<p>向日葵花盘上，每长出一粒新种子，就比上一粒转过一个固定的角度。</p><p>这个角度取多少，种子才能排得最密？拖动滑块试试——只差零点几度，图案就完全不同。</p>",
      ),
    },
  ],
  $ = (1 + Math.sqrt(5)) / 2,
  Z = 360 * (2 - $),
  O = (e, t = 1, d = Math.PI / 2) =>
    Array.from(
      {
        length: e,
      },
      (h, p) => [
        t * Math.cos(d + (2 * Math.PI * p) / e),
        t * Math.sin(d + (2 * Math.PI * p) / e),
      ],
    );
function q(e, t) {
  if (t === 0) return [e];
  const [d, h, p] = e,
    s = (i, a) => [(i[0] + a[0]) / 2, (i[1] + a[1]) / 2];
  return [
    ...q([d, s(d, h), s(d, p)], t - 1),
    ...q([s(d, h), h, s(h, p)], t - 1),
    ...q([s(d, p), s(h, p), p], t - 1),
  ];
}
const Pt = (e) => (3 / 4) ** e;
function st(e, t = 1) {
  let d = O(3, t, Math.PI / 2);
  for (let h = 0; h < e; h++) {
    const p = [];
    for (let s = 0; s < d.length; s++) {
      const i = d[s],
        a = d[(s + 1) % d.length],
        l = [(a[0] - i[0]) / 3, (a[1] - i[1]) / 3],
        m = [i[0] + l[0], i[1] + l[1]],
        o = [i[0] + 2 * l[0], i[1] + 2 * l[1]],
        r = Math.cos(-Math.PI / 3),
        c = Math.sin(-Math.PI / 3),
        f = [m[0] + l[0] * r - l[1] * c, m[1] + l[0] * c + l[1] * r];
      p.push(i, m, f, o);
    }
    d = p;
  }
  return d;
}
const It = (e) => ({
  sides: 3 * 4 ** e,
  perimeter: (4 / 3) ** e,
  area: 1 + (3 / 5) * (1 - (4 / 9) ** e),
});
function Nt(e, t, d, { len: h = 1, sway: p = 0, asym: s = 0 } = {}) {
  const i = [],
    a = (l, m, o, r) => {
      const c = [l[0] + Math.cos(m) * o, l[1] + Math.sin(m) * o];
      if (
        (i.push({
          a: l,
          b: c,
          depth: r,
        }),
        r >= e)
      )
        return;
      const f = p * (r + 1) * 0.12;
      (a(c, m + t * (1 + s) + f, o * d, r + 1),
        a(c, m - t * (1 - s) + f, o * d, r + 1));
    };
  return (a([0, 0], Math.PI / 2, h, 0), i);
}
function j(e, t, d, h = 2) {
  const p = Math.cos((d * e) / 2),
    s = Math.sin((d * e) / 2);
  return [(h + t * p) * Math.cos(e), (h + t * p) * Math.sin(e), t * s];
}
function Ft(e, t, d, h = 2) {
  const s = j(e + 1e-5, t, d, h).map(
      (m, o) => (m - j(e - 1e-5, t, d, h)[o]) / 2e-5,
    ),
    i = j(e, t + 1e-5, d, h).map(
      (m, o) => (m - j(e, t - 1e-5, d, h)[o]) / (2 * 1e-5),
    ),
    a = [
      s[1] * i[2] - s[2] * i[1],
      s[2] * i[0] - s[0] * i[2],
      s[0] * i[1] - s[1] * i[0],
    ],
    l = Math.hypot(...a);
  return a.map((m) => m / l);
}
function At(e) {
  return e % 2 === 1
    ? {
        loops: 1,
        halfTwists: 2 * e + 2,
        sides: 2,
      }
    : {
        loops: 2,
        halfTwists: e,
        sides: 2,
      };
}
const Bt = (e) => (e % 2 === 1 ? 1 : 2);
function pt(e) {
  const t = [1, 1];
  for (; t.length < e;) t.push(t[t.length - 1] + t[t.length - 2]);
  return t.slice(0, e);
}
const rt = (e) => {
  const t = pt(e + 1);
  return t.slice(1).map((d, h) => d / t[h]);
};
function Lt(e, t = $, d = 1) {
  let h = 0,
    p = 0,
    s = t,
    i = d;
  const a = [];
  for (let l = 0; l < e; l++) {
    const m = l % 4;
    m === 0
      ? (a.push({
          x: h,
          y: p,
          s: i,
          corner: [h + i, p],
          a0: Math.PI / 2,
        }),
        (h += i),
        (s -= i))
      : m === 1
        ? (a.push({
            x: h,
            y: p + i - s,
            s,
            corner: [h, p + i - s],
            a0: 0,
          }),
          (i -= s))
        : m === 2
          ? (a.push({
              x: h + s - i,
              y: p,
              s: i,
              corner: [h + s - i, p + i],
              a0: -Math.PI / 2,
            }),
            (s -= i))
          : (a.push({
              x: h,
              y: p,
              s,
              corner: [h + s, p + s],
              a0: Math.PI,
            }),
            (p += s),
            (i -= s));
  }
  return {
    squares: a,
    rest: {
      x: h,
      y: p,
      w: s,
      h: i,
    },
  };
}
function it(e, t, d = 1) {
  const h = (t * Math.PI) / 180;
  return Array.from(
    {
      length: e,
    },
    (p, s) => {
      const i = d * Math.sqrt(s + 0.5),
        a = s * h;
      return [i * Math.cos(a), i * Math.sin(a)];
    },
  );
}
function lt(e, t = 1) {
  const d = e.length;
  if (d < 2) return 1;
  const h = t * 1.2,
    p = new Map(),
    s = (a, l) => `${Math.floor(a / h)},${Math.floor(l / h)}`;
  e.forEach((a, l) => {
    const m = s(...a);
    (p.has(m) || p.set(m, []), p.get(m).push(l));
  });
  let i = 0;
  return (
    e.forEach((a, l) => {
      const m = Math.floor(a[0] / h),
        o = Math.floor(a[1] / h);
      let r = 1 / 0;
      for (let c = -2; c <= 2; c++)
        for (let f = -2; f <= 2; f++)
          for (const g of p.get(`${m + c},${o + f}`) ?? [])
            g !== l &&
              (r = Math.min(r, Math.hypot(a[0] - e[g][0], a[1] - e[g][1])));
      i += Number.isFinite(r) ? r : h * 2;
    }),
    i / d / (t * Math.sqrt((2 * Math.PI) / Math.sqrt(3)))
  );
}
const J = 24e4,
  Ct = 12;
function Dt(e) {
  const t = {
    mode: "chaos",
    k: 3,
    ratio: 0.5,
    level: 4,
    drag: -1,
    playing: !0,
  };
  let d = O(3, 3.2, Math.PI / 2).map(([u, y]) => [u, y - 0.6]),
    h = new Float32Array(J * 2),
    p = 0,
    s = [0, 0],
    i = null,
    a = 0,
    l = 0;
  const m = document.createElement("canvas");
  let o = "",
    r = 0;
  const c = () => {
      const u = e.plot.theme;
      return [u.accent, u.accent2, u.green, u.purple, u.danger];
    },
    f = new Uint8Array(J);
  function g(u = !0) {
    ((p = 0),
      (r = 0),
      (o = ""),
      (s = [...d[0]]),
      (a = u ? Ct : 0),
      (l = 0),
      (i = null));
  }
  function M(u) {
    ((t.k = u),
      (t.ratio = u === 3 || u === 4 ? 0.5 : 0.618),
      (d = O(u, 3.2, Math.PI / 2).map(([y, x]) => [
        y,
        x - (u === 3 ? 0.6 : 0),
      ])),
      g());
  }
  function b() {
    const u = Math.floor(Math.random() * d.length),
      y = d[u],
      x = s;
    return (
      (s = [s[0] + (y[0] - s[0]) * t.ratio, s[1] + (y[1] - s[1]) * t.ratio]),
      (h[2 * p] = s[0]),
      (h[2 * p + 1] = s[1]),
      (f[p] = u),
      p++,
      {
        from: x,
        to: s,
        v: u,
      }
    );
  }
  function w() {
    (e.plot.setInsets({
      top: 100,
      bottom: 80,
    }),
      e.plot.fit(-4.2, 4.2, -4.2, 4.2, 0.02));
  }
  return {
    enter() {
      (e.use2D(!0),
        w(),
        g(),
        e.plot.interact({
          down(u, y) {
            return t.mode !== "chaos"
              ? !1
              : ((t.drag = d.findIndex((x) => e.plot.dist(x, u, y) < 16)),
                t.drag >= 0);
          },
          move(u, y) {
            ((d[t.drag] = e.plot.W(u, y)), g(!1));
          },
          up() {
            t.drag = -1;
          },
          hover: (u, y) =>
            t.mode === "chaos" && d.some((x) => e.plot.dist(x, u, y) < 16)
              ? "grab"
              : null,
        }));
    },
    reset: w,
    resize: w,
    panel() {
      let u = U(
        "mode",
        [
          ["chaos", translate("混沌游戏")],
          ["recursive", translate("递归删除")],
        ],
        t.mode,
      );
      return (
        t.mode === "chaos"
          ? (u +=
              U(
                "k",
                [
                  ["3", translate("三角形")],
                  ["4", translate("正方形")],
                  ["5", translate("五边形")],
                ],
                String(t.k),
              ) +
              B(
                "ratio",
                translate("跳跃比例"),
                0.3,
                0.75,
                0.001,
                t.ratio,
                t.ratio.toFixed(3),
              ))
          : (u += B(
              "level",
              translate("层数 n"),
              0,
              8,
              1,
              t.level,
              String(t.level),
            )),
        u
      );
    },
    info() {
      if (t.mode === "recursive") {
        const y = Pt(t.level);
        return S(
          translate("递归删除"),
          "",
          D([
            [translate("小三角形"), `3ⁿ = ${3 ** t.level}`],
            [translate("剩下的面积"), `(3/4)ⁿ = ${(y * 100).toFixed(2)}%`],
          ]) +
            `<p class="note">${translate("每个三角形挖掉中间的四分之一，剩下 3 个小三角形，再对它们重复。无限进行下去，三角形的个数趋于无穷，面积却趋于 0。")}</p>`,
        );
      }
      const u =
        t.k === 3 && Math.abs(t.ratio - 0.5) < 0.002
          ? translate(
              "规则只有一条：随机选一个顶点，向它跳一半的距离，点一下。重复几万次，谢尔宾斯基三角形就自己出现了——尽管每一步都是随机的。",
            )
          : translate(
              "换成别的多边形或跳跃比例，会得到另外的分形。五边形配合 0.618（黄金比）时，五个小五边形恰好相切。",
            );
      return S(
        translate("混沌游戏"),
        translate("已打 {0} 个点", [p.toLocaleString()]),
        `<p class="note">${u}</p><p class="note">${translate("拖动顶点可以改变形状。")}</p>`,
      );
    },
    bar() {
      return t.mode === "chaos"
        ? `<button class="act" data-act="play">${t.playing ? translate("暂停") : translate("继续")}</button><button data-act="restart">${translate("慢动作重来")}</button>`
        : "";
    },
    action(u, y) {
      (u === "mode"
        ? (t.mode = y)
        : u === "k"
          ? M(+y)
          : u === "play"
            ? (t.playing = !t.playing)
            : u === "restart" && ((t.playing = !0), g()),
        e.refresh());
    },
    space() {
      t.mode === "chaos" && this.action("play");
    },
    input(u, y) {
      return (
        u === "ratio" ? ((t.ratio = y), g(!1)) : (t.level = y),
        e.update(),
        u === "ratio" ? y.toFixed(3) : String(y)
      );
    },
    frame(u) {
      if (t.mode !== "chaos" || !t.playing) return;
      if (a > 0) {
        ((l += u), l > 0.22 && ((l = 0), (i = b()), a--, e.update()));
        return;
      }
      i = null;
      const y = Math.min(J - p, p < 2e3 ? 40 : p < 2e4 ? 400 : 3e3);
      for (let x = 0; x < y; x++) b();
      ((t.acc = (t.acc ?? 0) + u), t.acc > 0.25 && ((t.acc = 0), e.update()));
    },
    draw2D() {
      const { plot: u, st: y } = e,
        x = u.theme;
      (u.clear(),
        u.grid({
          axes: !1,
        }));
      const A = u.ctx;
      if (t.mode === "recursive") {
        const k = O(3, 3.2, Math.PI / 2).map(([z, X]) => [z, X - 0.6]);
        u.path(k, {
          close: !0,
          color: x.aux,
          width: 1,
          dash: [4, 4],
        });
        for (const z of q(k, t.level))
          u.path(z, {
            close: !0,
            color: x.accent,
            width: t.level > 5 ? 0 : 1,
            fill: x.accent,
            fillAlpha: 0.55,
          });
        return;
      }
      const P = u.canvas,
        nt = [
          P.width,
          P.height,
          u.view.cx,
          u.view.cy,
          u.view.unit,
          x.name,
          p < 300,
          p < 3e3,
          p < 3e4,
        ].join();
      nt !== o &&
        ((m.width = P.width), (m.height = P.height), (r = 0), (o = nt));
      const K = m.getContext("2d"),
        Q = P.width / P.clientWidth,
        I = c(),
        T = (p < 300 ? 5 : p < 3e3 ? 3 : p < 3e4 ? 1.8 : 1.2) * Q;
      for (let k = r; k < p; k++) {
        const [z, X] = u.S([h[2 * k], h[2 * k + 1]]);
        ((K.fillStyle = I[f[k] % I.length]),
          (K.globalAlpha = x.name === "studio" ? 0.75 : 0.6),
          K.fillRect(z * Q - T / 2, X * Q - T / 2, T, T));
      }
      ((r = p),
        A.save(),
        A.setTransform(1, 0, 0, 1, 0, 0),
        A.drawImage(m, 0, 0),
        A.restore(),
        i &&
          (u.seg(i.from, d[i.v], {
            color: x.aux,
            width: 1,
            dash: [4, 4],
          }),
          u.seg(i.from, i.to, {
            color: I[i.v % I.length],
            width: 2.4,
          }),
          u.point(i.to, {
            color: I[i.v % I.length],
            r: 5,
          })),
        d.forEach((k, z) => {
          (u.handle(k, {
            color: I[z % I.length],
            active: t.drag === z,
          }),
            y.view.labels &&
              u.label("ABCDE"[z], k, {
                dx: 10,
                dy: -10,
              }));
        }));
    },
    toggles: ["labels"],
  };
}
const ct = 3,
  Ut = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e));
function Et(e) {
  const t = {
    level: 0,
    grow: 0,
    playing: !1,
  };
  function d(s, i) {
    if (i <= 0) return st(s, ct);
    const a = st(s + 1, ct);
    return a.map((l, m) => {
      if (m % 4 !== 2) return l;
      const o = a[m - 1],
        r = a[m + 1],
        c = [(o[0] + r[0]) / 2, (o[1] + r[1]) / 2];
      return [c[0] + (l[0] - c[0]) * i, c[1] + (l[1] - c[1]) * i];
    });
  }
  function h() {
    (e.plot.setInsets({
      top: 100,
      bottom: 80,
    }),
      e.plot.fit(-4, 4, -4, 4, 0.02));
  }
  function p() {
    const s = document.querySelector('input[data-param="level"]');
    s && (s.value = t.level);
    const i = document.querySelector('[data-out="level"]');
    i && (i.textContent = String(t.level));
  }
  return {
    enter() {
      (e.use2D(!0), h());
    },
    reset: h,
    resize: h,
    panel() {
      return B("level", translate("层数 n"), 0, 7, 1, t.level, String(t.level));
    },
    info() {
      const s = [0, 1, 2, 3, 4, 5, 6, 7]
        .map((i) => {
          const a = It(i);
          return `<tr class="${i === t.level ? "on" : ""}"><td>${i}</td><td>${a.sides.toLocaleString()}</td><td>${a.perimeter.toFixed(2)}</td><td>${a.area.toFixed(4)}</td></tr>`;
        })
        .join("");
      return S(
        translate("科赫雪花"),
        translate("海里格·冯·科赫，1904"),
        `<table class="iter"><thead><tr><th>n</th><th>${translate("边数")}</th><th>${translate("周长")}</th><th>${translate("面积")}</th></tr></thead><tbody>${s}</tbody></table><p class="note">${translate("每一级周长变为原来的 4/3 倍，无限增大；面积只增加越来越小的一点，最终是原三角形的 8/5 倍。一条无限长的曲线围出了有限的面积。用滚轮放大，细节永远看不完。")}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="grow" ${t.level >= 7 ? "disabled" : ""}>${translate("长一级")}</button><button data-act="play">${t.playing ? translate("暂停") : translate("自动生长")}</button><button data-act="zero">${translate("重来")}</button>`;
    },
    action(s) {
      (s === "grow" && t.level < 7 && t.grow === 0
        ? (t.grow = 1e-4)
        : s === "play"
          ? (t.playing = !t.playing)
          : s === "zero" &&
            ((t.level = 0), (t.grow = 0), (t.playing = !1), p(), h()),
        e.refresh());
    },
    space() {
      this.action("grow");
    },
    input(s, i) {
      return ((t.level = i), (t.grow = 0), e.update(), String(i));
    },
    frame(s) {
      (t.playing && t.grow === 0 && t.level < 7 && (t.grow = 1e-4),
        t.grow > 0 &&
          ((t.grow += s * 0.9),
          t.grow >= 1 &&
            ((t.grow = 0),
            (t.level += 1),
            t.level >= 7 && (t.playing = !1),
            p(),
            e.refresh())));
    },
    draw2D() {
      const { plot: s } = e,
        i = s.theme;
      (s.clear(),
        s.grid({
          axes: !1,
        }));
      const a = d(t.level, Ut(t.grow));
      if (
        (s.path([...a, a[0]], {
          close: !0,
          color: i.accent2,
          width: 1.6,
          fill: i.accent2,
          fillAlpha: 0.18,
        }),
        t.grow > 0)
      )
        for (let l = 1; l < a.length; l += 4)
          s.path([a[l], a[l + 1], a[l + 2]], {
            color: i.accent,
            width: 2.4,
          });
    },
    toggles: [],
  };
}
const L = 2.2,
  G = (e) => (e * 180) / Math.PI;
function Vt(e) {
  const t = {
    angle: 0.45,
    ratio: 0.72,
    depth: 10,
    wind: !0,
    drag: !1,
  };
  let d = 0;
  const h = [0, -3.4],
    p = () => {
      const a = [h[0], h[1] + L],
        l = Math.PI / 2 - t.angle;
      return [
        a[0] + Math.cos(l) * L * t.ratio,
        a[1] + Math.sin(l) * L * t.ratio,
      ];
    };
  function s() {
    (e.plot.setInsets({
      top: 100,
      bottom: 80,
    }),
      e.plot.fit(-4.5, 4.5, -3.8, 4.4, 0.02));
  }
  function i() {
    for (const [a, l, m] of [
      ["angle", Math.round(G(t.angle)), `${Math.round(G(t.angle))}°`],
      ["ratio", t.ratio, t.ratio.toFixed(2)],
    ]) {
      const o = document.querySelector(`input[data-param="${a}"]`);
      o && (o.value = l);
      const r = document.querySelector(`[data-out="${a}"]`);
      r && (r.textContent = m);
    }
  }
  return {
    enter() {
      (e.use2D(!0),
        s(),
        e.plot.interact({
          down(a, l) {
            return ((t.drag = e.plot.dist(p(), a, l) < 18), t.drag);
          },
          move(a, l) {
            const [m, o] = e.plot.W(a, l),
              r = [h[0], h[1] + L],
              c = [m - r[0], o - r[1]];
            ((t.angle = Math.max(
              0.05,
              Math.min(1.5, Math.PI / 2 - Math.atan2(c[1], c[0])),
            )),
              (t.ratio = Math.max(0.4, Math.min(0.82, Math.hypot(...c) / L))),
              i(),
              e.update());
          },
          up() {
            t.drag = !1;
          },
          hover: (a, l) => (e.plot.dist(p(), a, l) < 18 ? "grab" : null),
        }));
    },
    reset: s,
    resize: s,
    panel() {
      return (
        B(
          "angle",
          translate("分叉角"),
          3,
          86,
          1,
          Math.round(G(t.angle)),
          `${Math.round(G(t.angle))}°`,
        ) +
        B(
          "ratio",
          translate("缩短比例"),
          0.4,
          0.82,
          0.01,
          t.ratio,
          t.ratio.toFixed(2),
        ) +
        B("depth", translate("层数"), 1, 12, 1, t.depth, String(t.depth)) +
        U(
          "preset",
          [
            ["0.45,0.72", translate("大树")],
            ["1.57,0.7", "H"],
            ["0.26,0.78", translate("杨树")],
            ["1.0,0.62", translate("灌木")],
          ],
          "",
        )
      );
    },
    info() {
      const a = 2 ** (t.depth + 1) - 1,
        l =
          t.ratio === 1
            ? t.depth + 1
            : (1 - (2 * t.ratio) ** (t.depth + 1)) / (1 - 2 * t.ratio);
      return S(
        translate("分形树"),
        "",
        D([
          [translate("枝条数"), a.toLocaleString()],
          [translate("总长度（树干为 1）"), l.toFixed(2)],
        ]) +
          `<p class="note">${translate("规则很简单：每根枝条的末端长出两根更短的枝条，向左右各偏一个角度。拖动橙色手柄，或者调滑块。缩短比例超过 1/√2 ≈ 0.71 时，枝条开始互相交叠。")}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="wind">${t.wind ? translate("风停") : translate("起风")}</button>`;
    },
    action(a, l) {
      (a === "wind"
        ? (t.wind = !t.wind)
        : a === "preset" &&
          (([t.angle, t.ratio] = l.split(",").map(Number)), i()),
        e.refresh());
    },
    input(a, l) {
      return (
        a === "angle" ? (t.angle = (l * Math.PI) / 180) : (t[a] = l),
        e.update(),
        a === "angle" ? `${l}°` : a === "ratio" ? l.toFixed(2) : String(l)
      );
    },
    frame(a) {
      t.wind && (d += a);
    },
    draw2D() {
      const { plot: a } = e,
        l = a.theme;
      (a.clear(),
        a.grid({
          axes: !1,
        }));
      const m =
          t.wind && !t.drag
            ? Math.sin(d * 1.3) * 0.5 + Math.sin(d * 2.9) * 0.15
            : 0,
        o = Nt(t.depth, t.angle, t.ratio, {
          len: L,
          sway: m * 0.6,
        }),
        r = a.ctx,
        c = l.name === "studio" ? [214, 170, 120] : [110, 74, 40],
        f = l.name === "studio" ? [120, 230, 150] : [47, 143, 78];
      r.lineCap = "round";
      for (const g of o) {
        const M = g.depth / Math.max(1, t.depth),
          b = c.map((A, P) => Math.round(A + (f[P] - A) * M)),
          [w, u] = a.S([g.a[0] + h[0], g.a[1] + h[1]]),
          [y, x] = a.S([g.b[0] + h[0], g.b[1] + h[1]]);
        ((r.strokeStyle = `rgb(${b.join(",")})`),
          (r.lineWidth = Math.max(0.6, 9 * t.ratio ** g.depth)),
          (r.shadowColor = r.strokeStyle),
          (r.shadowBlur = l.glow * M),
          r.beginPath(),
          r.moveTo(w, u),
          r.lineTo(y, x),
          r.stroke());
      }
      ((r.shadowBlur = 0),
        a.handle(p(), {
          color: l.accent,
          active: t.drag,
        }));
    },
    toggles: [],
  };
}
const E = 0.7,
  ft = 240,
  Tt = 14,
  Wt = (e) => (e <= 0 ? 0 : e >= 1 ? 1 : e * e * (3 - 2 * e));
function Y(e, [t, d], [h, p], s = ft, i = Tt) {
  const a = new Float32Array((s + 1) * (i + 1) * 3),
    l = new Float32Array((s + 1) * (i + 1) * 2),
    m = [];
  for (let r = 0; r <= s; r++)
    for (let c = 0; c <= i; c++) {
      const f = t + ((d - t) * r) / s,
        g = h + ((p - h) * c) / i,
        M = _(e(f, g)),
        b = r * (i + 1) + c;
      if (
        (a.set([M.x, M.y, M.z], 3 * b),
        l.set([r / s, c / i], 2 * b),
        r < s && c < i)
      ) {
        const w = b,
          u = b + i + 1;
        m.push(w, u, w + 1, u, u + 1, w + 1);
      }
    }
  const o = new R();
  return (
    o.setAttribute("position", new at(a, 3)),
    o.setAttribute("uv", new at(l, 2)),
    o.setIndex(m),
    o.computeVertexNormals(),
    o
  );
}
function tt(e, t, d) {
  return new ht({
    side: e,
    transparent: !0,
    uniforms: {
      uBase: {
        value: new H(t),
      },
      uPaint: {
        value: new H(d),
      },
      uUpTo: {
        value: 0,
      },
      uFrom: {
        value: 0,
      },
    },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uBase; uniform vec3 uPaint; uniform float uUpTo; uniform float uFrom; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){
        float lit = 0.55 + 0.45 * abs(dot(normalize(vN), normalize(vV)));
        float painted = step(uFrom, vUv.x) * step(vUv.x, uUpTo);
        vec3 c = mix(uBase, uPaint, painted) * lit;
        float stripe = 0.06 * step(0.5, fract(vUv.y * 7.0));
        gl_FragColor = vec4(c - stripe, 0.96);
      }`,
  });
}
function ut(e, t) {
  return new ht({
    side: et,
    uniforms: {
      uA: {
        value: new H(e),
      },
      uB: {
        value: new H(t),
      },
    },
    vertexShader: `varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uA; uniform vec3 uB; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){
        float lit = 0.55 + 0.45 * abs(dot(normalize(vN), normalize(vV)));
        float t = 0.5 - 0.5 * cos(vUv.x * 6.2831853);
        gl_FragColor = vec4(mix(uA, uB, t) * lit, 1.0);
      }`,
  });
}
function Gt(e) {
  const t = {
    k: 1,
    ant: null,
    paint: null,
    cut: 0,
    cutting: !1,
  };
  let d = null,
    h = [],
    p = null,
    s = null;
  function i() {
    const { stage: o, theme: r } = e;
    (o.clear(), o.setCenter([0, 0, 0]), (d = new bt()), (h = []));
    const c = r.name === "studio" ? "#d8dee8" : "#f3ead6",
      f = r.name === "studio" ? "#5b6f8c" : "#9cb7d8";
    if (t.cut > 0) {
      const g = Wt(t.cut);
      if (t.k % 2 === 1) {
        const M = Y(
          (b, w) => {
            const u = j(b, w, t.k),
              y = 1 + 0.35 * g;
            return [u[0] * y, u[1] * y, u[2] * (1 + 0.6 * g)];
          },
          [0, 4 * Math.PI],
          [0.08 * g + 0.001, E],
          ft * 2,
        );
        d.add(
          new W(M, g > 0.5 ? ut(r.accent, r.accent2) : tt(et, c, r.accent)),
        );
      } else
        for (const M of [1, -1]) {
          const b = Y(
              (u, y) => {
                const x = j(u, M * y, t.k);
                return [x[0], x[1], x[2] + M * 0.9 * g];
              },
              [0, 2 * Math.PI],
              [0.08 * g + 0.001, E],
            ),
            w = M > 0 ? r.accent : r.accent2;
          d.add(new W(b, g > 0.5 ? ut(w, w) : tt(et, c, r.accent)));
        }
    } else {
      const g = Y((b, w) => j(b, w, t.k), [0, 2 * Math.PI], [-E, E]);
      for (const [b, w] of [
        [Mt, c],
        [yt, f],
      ]) {
        const u = tt(b, w, r.accent);
        (h.push(u), d.add(new W(g, u)));
      }
      const M = Array.from(
        {
          length: 241,
        },
        (b, w) => _(j((2 * Math.PI * w) / 240, 0, t.k)),
      );
      (d.add(
        new ot(
          new R().setFromPoints(M),
          new xt({
            color: r.danger,
            dashSize: 0.12,
            gapSize: 0.08,
          }),
        ),
      ),
        d.children[d.children.length - 1].computeLineDistances());
    }
    ((p = new W(
      new $t(0.11, 20, 14),
      new kt({
        color: r.accent,
      }),
    )),
      (p.visible = !1),
      d.add(p),
      (s = new ot(
        new R(),
        new jt({
          color: r.accent,
        }),
      )),
      d.add(s),
      o.add(d),
      a());
  }
  function a() {
    if (!h.length) return;
    const o = t.paint ?? 0,
      r = t.k % 2 === 1;
    ((h[0].uniforms.uUpTo.value = Math.min(1, o)),
      (h[1].uniforms.uUpTo.value = r ? Math.max(0, o - 1) : 0),
      (h[0].uniforms.uFrom.value = h[1].uniforms.uFrom.value =
        t.paint === null ? 2 : 0));
  }
  function l(o) {
    const r = 2 * Math.PI * o,
      c = t.k % 2 === 1,
      f = Math.floor(o + 1e-9),
      g = c && f % 2 === 1 ? -1 : 1,
      M = j(r, 0, t.k),
      b = Ft(r, 0, t.k);
    return [
      M[0] + b[0] * 0.13 * g,
      M[1] + b[1] * 0.13 * g,
      M[2] + b[2] * 0.13 * g,
    ];
  }
  const m = () => e.frame(3.4, [2.2, 1.6, 1.9]);
  return {
    enter() {
      ((t.ant = null), (t.paint = null), (t.cut = 0), i(), m());
    },
    build: i,
    reset: m,
    panel() {
      return U(
        "k",
        [
          ["0", translate("圆环（0 个半扭）")],
          ["1", translate("莫比乌斯带（1 个）")],
          ["2", translate("2 个半扭")],
          ["3", translate("3 个半扭")],
        ],
        String(t.k),
      );
    },
    info() {
      const o = Bt(t.k),
        r = At(t.k),
        c = [
          [
            translate("面"),
            o === 1 ? translate("1 个（单侧曲面）") : translate("2 个"),
          ],
          [translate("边"), t.k % 2 ? translate("1 条") : translate("2 条")],
          [
            translate("沿中线剪开"),
            r.loops === 1
              ? translate("1 个环，更长，{0} 个半扭", [r.halfTwists])
              : translate("2 个环，互相套住"),
          ],
        ];
      let f = translate(
        "拿一张纸条，一端扭转 180° 再粘起来，就是莫比乌斯带。它只有一个面：蚂蚁不翻过边缘，就能爬遍“两面”。",
      );
      return (
        t.ant !== null &&
          t.ant >= 1 &&
          (f =
            t.k % 2
              ? translate(
                  "蚂蚁走完一圈，竟然到了起点的“背面”；再走一圈才回到原处。",
                )
              : translate("走完一圈，蚂蚁回到原处，始终在同一面。")),
        t.cut >= 1 &&
          (f =
            t.k % 2
              ? translate(
                  "剪开后没有变成两半，而是一个更长的环：顺着颜色看，它绕了两圈才回到起点。",
                )
              : translate(
                  "剪开后真的分成了两个环（两种颜色），但它们互相套在一起，拆不开。",
                )),
        t.paint !== null &&
          t.paint >= 1 &&
          (f =
            t.k % 2
              ? translate(
                  "从一处开始涂，不跨过边缘，整条带子的“两面”全被涂满了。",
                )
              : translate("从一处开始涂，只能涂满一面，另一面还是空的。")),
        S(
          translate("莫比乌斯带"),
          translate("{0} 个半扭", [t.k]),
          D(c) + `<p class="note">${f}</p>`,
        )
      );
    },
    bar() {
      return `<button class="act" data-act="ant">${translate("蚂蚁走一走")}</button><button data-act="paint">${translate("涂色")}</button><button data-act="cut">${t.cut > 0 ? translate("粘回去") : translate("沿中线剪开")}</button>`;
    },
    action(o, r) {
      (o === "k"
        ? ((t.k = +r),
          (t.ant = t.paint = null),
          (t.cut = 0),
          (t.cutting = !1),
          i())
        : o === "ant"
          ? (t.cut && ((t.cut = 0), i()), (t.ant = 0), (t.paint = null))
          : o === "paint"
            ? (t.cut && ((t.cut = 0), i()), (t.paint = 0), (t.ant = null))
            : o === "cut" &&
              ((t.ant = t.paint = null),
              (t.cutting = t.cut > 0 ? -1 : 1),
              t.cutting > 0 && (t.cut = 0.001)),
        a(),
        e.refresh());
    },
    frame(o) {
      if (t.ant !== null && t.ant < (t.k % 2 ? 2 : 1)) {
        const r = t.k % 2 ? 2 : 1;
        t.ant = Math.min(r, t.ant + o * 0.22);
        const c = l(t.ant);
        ((p.visible = !0), p.position.copy(_(c)));
        const f = Math.max(2, Math.floor(t.ant * 160));
        (s.geometry.dispose(),
          (s.geometry = new R().setFromPoints(
            Array.from(
              {
                length: f + 1,
              },
              (g, M) => _(l((t.ant * M) / f)),
            ),
          )),
          (Math.floor(t.ant * 4) !== Math.floor((t.ant - o * 0.22) * 4) ||
            t.ant === r) &&
            e.update());
      } else p && t.ant === null && (p.visible = !1);
      if (t.paint !== null && t.paint < (t.k % 2 ? 2 : 1)) {
        const r = t.k % 2 ? 2 : 1,
          c = t.paint;
        ((t.paint = Math.min(r, t.paint + o * 0.3)),
          a(),
          ((c < 1 && t.paint >= 1) || t.paint === r) && e.update());
      }
      t.cutting &&
        ((t.cut = Math.max(0, Math.min(1, t.cut + t.cutting * o * 0.5))),
        i(),
        (t.cut === 0 || t.cut === 1) && ((t.cutting = !1), e.refresh()));
    },
    draw() {
      const { ov: o, st: r } = e;
      if (!r.view.labels || t.cut) return;
      const c = j(0, E + 0.25, t.k);
      o.label(translate("起点"), c, {
        away: [0, 0, 0],
        color: o.theme.accent,
        size: 13,
        italic: !1,
      });
    },
    toggles: ["labels", "spin"],
  };
}
const N = 5,
  V = Lt(48, $ * 4, 4),
  dt = [V.rest.x + V.rest.w / 2, V.rest.y + V.rest.h / 2];
function _t(e) {
  const t = {
    mode: "game",
    round: 0,
    scores: [],
    guess: null,
    answer: null,
    seg: null,
    drag: !1,
    zoom: 0,
    zooming: !0,
  };
  let d = 0.016;
  const h = St();
  function p() {
    const o = 5 + Math.random() * 4,
      r = (Math.random() - 0.5) * 0.9,
      c = [(Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.2],
      f = [Math.cos(r) * (o / 2), Math.sin(r) * (o / 2)];
    ((t.seg = [
      [c[0] - f[0], c[1] - f[1]],
      [c[0] + f[0], c[1] + f[1]],
    ]),
      (t.guess = 0.5),
      (t.answer = null));
  }
  const s = (o) => [
      t.seg[0][0] + (t.seg[1][0] - t.seg[0][0]) * o,
      t.seg[0][1] + (t.seg[1][1] - t.seg[0][1]) * o,
    ],
    i = (o) => (Math.abs(o - ($ - 1)) < Math.abs(o - (2 - $)) ? $ - 1 : 2 - $),
    a = (o) => Math.max(0, Math.round(100 - o * 600));
  function l() {
    (e.plot.setInsets({
      top: 100,
      bottom: 80,
    }),
      t.mode === "game"
        ? e.plot.fit(-5.5, 5.5, -4, 4, 0.02)
        : t.mode === "fib" && e.plot.fit(-0.8, 21, -0.3, 2.6, 0.04));
  }
  function m() {
    const o = e.plot,
      r = o.canvas.getBoundingClientRect(),
      c = Math.min((r.width - 40) / ($ * 4), (r.height - 200) / 4) * 0.95,
      f = $ ** (t.zoom % 4);
    o.view.unit = c * f;
    const g = [($ * 4) / 2, 2],
      M = Math.min(1, t.zoom / 1.2);
    ((o.view.cx = g[0] + (dt[0] - g[0]) * M),
      (o.view.cy = g[1] + (dt[1] - g[1]) * M));
  }
  return {
    enter() {
      (e.use2D(!0),
        (t.round = 0),
        (t.scores = []),
        p(),
        l(),
        e.plot.interact({
          down(o, r) {
            return t.mode !== "game" || t.answer !== null || t.round >= N
              ? !1
              : ((t.drag = !0), this.move(o, r), !0);
          },
          move(o, r) {
            if (!t.drag) return;
            const c = e.plot.W(o, r),
              [f, g] = t.seg,
              M = [g[0] - f[0], g[1] - f[1]];
            t.guess = Math.max(
              0.02,
              Math.min(
                0.98,
                ((c[0] - f[0]) * M[0] + (c[1] - f[1]) * M[1]) /
                  (M[0] * M[0] + M[1] * M[1]),
              ),
            );
          },
          up() {
            t.drag = !1;
          },
          hover: () =>
            t.mode === "game" && t.answer === null ? "ew-resize" : null,
        }));
    },
    reset: l,
    resize() {
      t.mode !== "spiral" && l();
    },
    panel() {
      return U(
        "mode",
        [
          ["game", translate("找黄金分割点")],
          ["spiral", translate("黄金螺旋")],
          ["fib", translate("斐波那契数列")],
        ],
        t.mode,
      );
    },
    info() {
      if (t.mode === "spiral")
        return S(
          translate("黄金矩形"),
          "",
          `<p class="note">${translate("长宽之比为 φ ≈ 1.618 的矩形叫黄金矩形。从中切去一个正方形，剩下的仍是黄金矩形；一直切下去，用四分之一圆弧连起来，就是黄金螺旋。")}</p><p class="note">${translate("每放大 φ⁴ 倍，画面就和原来一模一样，所以可以无限放大下去。")}</p>`,
        );
      if (t.mode === "fib") {
        const c = pt(12),
          f = rt(12);
        return S(
          translate("斐波那契数列"),
          "1, 1, 2, 3, 5, 8, …",
          D(
            f
              .slice(0, 10)
              .map((g, M) => [`${c[M + 1]} / ${c[M]}`, g.toFixed(6)]),
          ) +
            `<p class="note">${translate("每一项是前两项之和。相邻两项之比越来越接近 φ = (1 + √5)/2 ≈ 1.618034，交替地一会儿偏大、一会儿偏小。")}</p>`,
        );
      }
      const o = t.scores.reduce((c, f) => c + f, 0);
      if (t.round >= N)
        return S(
          translate("总分 {0} / {1}", [o, N * 100]),
          "",
          `<p class="note">${o >= 400 ? translate("眼力惊人！你对黄金比例的感觉非常准。") : translate("黄金分割点大约在线段的 0.618 处（或 0.382 处）。再来一次试试？")}</p><div class="row" style="margin-top:12px"><button class="act" data-act="again">${translate("再来一次")}</button></div>`,
        );
      let r = `<p class="task">${translate("第 {0} / {1} 题：凭眼力在线段上找出黄金分割点，拖动或点击放置。", [t.round + 1, N])}</p>`;
      if (t.answer !== null) {
        const c = Math.abs(t.guess - t.answer);
        ((r += D([
          [translate("你的位置"), t.guess.toFixed(3)],
          [translate("黄金分割点"), t.answer.toFixed(3)],
          [translate("得分"), `${a(c)}`],
        ])),
          (r += `<div class="row" style="margin-top:10px"><button class="act" data-act="next">${t.round + 1 < N ? translate("下一题") : translate("看总分")}</button></div>`));
      }
      return S(
        translate("黄金分割"),
        translate("累计 {0} 分", [o]),
        r +
          `<p class="note">${translate("把线段分成两段，使较长一段与全长之比等于较短一段与较长一段之比，这个比值约为 0.618。")}</p>`,
      );
    },
    bar() {
      return t.mode === "game" && t.answer === null && t.round < N
        ? `<button class="act" data-act="check">${translate("确定")}</button>`
        : t.mode === "spiral"
          ? `<button class="act" data-act="zoom">${t.zooming ? translate("暂停放大") : translate("继续放大")}</button>`
          : "";
    },
    action(o, r) {
      if (o === "mode") ((t.mode = r), (t.zoom = 0), l());
      else if (o === "check") {
        t.answer = i(t.guess);
        const c = a(Math.abs(t.guess - t.answer));
        if ((t.scores.push(c), c >= 90)) {
          const [f, g] = e.plot.S(s(t.answer));
          h.burst(f, g, 90);
        }
      } else
        o === "next"
          ? ((t.round += 1), t.round < N && p())
          : o === "again"
            ? ((t.round = 0), (t.scores = []), p())
            : o === "zoom" && (t.zooming = !t.zooming);
      e.refresh();
    },
    frame(o) {
      ((d = o),
        t.mode === "spiral" &&
          t.zooming &&
          ((t.zoom += o * 0.35), t.zoom > 1.2 + 200 && (t.zoom = 1.2)));
    },
    draw2D() {
      const { plot: o, st: r } = e,
        c = o.theme;
      if ((o.clear(), t.mode === "spiral")) {
        (m(),
          o.grid({
            axes: !1,
          }));
        const b = [c.accent, c.accent2, c.green, c.purple];
        V.squares.forEach((w, u) => {
          w.s * o.view.unit < 1.5 ||
            (o.rect(w.x, w.y, w.x + w.s, w.y + w.s, {
              fill: b[u % 4],
              alpha: 0.14,
              color: c.edge,
              width: 1.2,
            }),
            o.param(
              (y) => [
                w.corner[0] + w.s * Math.cos(y),
                w.corner[1] + w.s * Math.sin(y),
              ],
              w.a0,
              w.a0 + Math.PI / 2,
              40,
              {
                color: c.accent,
                width: 3,
              },
            ));
        });
        return;
      }
      if (
        (o.grid({
          axes: t.mode === "fib",
        }),
        t.mode === "fib")
      ) {
        const b = rt(20);
        (o.hline($, {
          color: c.accent,
          width: 1.6,
          dash: [6, 4],
        }),
          o.label("φ ≈ 1.618", [19, $], {
            dx: -70,
            dy: -8,
            color: c.accent,
            size: 14,
            italic: !1,
          }),
          b.forEach((w, u) => {
            (o.seg([u + 1, 0], [u + 1, w], {
              color: c.accent2,
              width: 6,
              alpha: 0.35,
              glow: 0,
            }),
              o.point([u + 1, w], {
                color: c.accent2,
                r: 4.5,
              }));
          }),
          o.path(
            b.map((w, u) => [u + 1, w]),
            {
              color: c.accent2,
              width: 1.4,
            },
          ));
        return;
      }
      if (t.round >= N) return h.draw(o.ctx, d);
      const [f, g] = t.seg;
      (o.seg(f, g, {
        color: c.edge,
        width: 4,
      }),
        o.point(f, {
          color: c.edge,
          r: 5,
        }),
        o.point(g, {
          color: c.edge,
          r: 5,
        }),
        r.view.labels &&
          (o.label("A", f, {
            dx: -18,
            dy: -10,
          }),
          o.label("B", g, {
            dx: 8,
            dy: -10,
          })));
      const M = s(t.guess);
      if (t.answer !== null) {
        const b = s(t.answer);
        (o.point(b, {
          color: c.green,
          r: 8,
          ring: !0,
        }),
          o.label(t.answer > 0.5 ? "0.618" : "0.382", b, {
            dx: -18,
            dy: 28,
            color: c.green,
            size: 13,
            italic: !1,
          }),
          o.seg(f, b, {
            color: c.accent,
            width: 8,
            alpha: 0.35,
            glow: 0,
          }),
          o.seg(b, g, {
            color: c.accent2,
            width: 8,
            alpha: 0.35,
            glow: 0,
          }));
      }
      (o.handle(M, {
        color: c.accent,
        active: t.drag,
      }),
        h.draw(o.ctx, d));
    },
    toggles: ["labels"],
  };
}
const F = 900,
  C = 0.16;
function Rt(e) {
  const t = {
    angle: Z,
    shown: 0,
    playing: !0,
  };
  let d = it(F, t.angle, C),
    h = lt(d, C);
  function p() {
    ((d = it(F, t.angle, C)), (h = lt(d, C)));
  }
  function s() {
    e.plot.setInsets({
      top: 100,
      bottom: 80,
    });
    const a = C * Math.sqrt(F) + 0.3;
    e.plot.fit(-a, a, -a, a, 0.02);
  }
  function i() {
    const a = document.querySelector('input[data-param="angle"]');
    a && (a.value = t.angle);
    const l = document.querySelector('[data-out="angle"]');
    l && (l.textContent = `${t.angle.toFixed(2)}°`);
  }
  return {
    enter() {
      (e.use2D(!0), s(), (t.shown = 0), (t.playing = !0));
    },
    reset: s,
    resize: s,
    panel() {
      return (
        B(
          "angle",
          translate("发散角"),
          90,
          180,
          0.01,
          t.angle,
          `${t.angle.toFixed(2)}°`,
        ) +
        U(
          "angle",
          [
            [String(Z), translate("黄金角 137.51°")],
            ["137", "137°"],
            ["138", "138°"],
            ["120", "120°"],
            ["90", "90°"],
            ["180", "180°"],
          ],
          "",
        )
      );
    },
    info() {
      const a = Math.abs(t.angle - Z) < 0.02,
        l = a
          ? translate(
              "黄金角 = 360° × (1 − 1/φ) ≈ 137.51°。φ 是“最无理”的数，种子永远不会排成几条直线，于是一圈圈均匀地填满整个花盘。数一数顺时针和逆时针的螺旋，往往是相邻的两个斐波那契数，如 34 与 55。",
            )
          : translate("只差一点点，种子就排成了一条条射线，中间留下大片空隙。");
      return S(
        `${t.angle.toFixed(2)}°`,
        a ? translate("黄金角") : "",
        D([
          [translate("种子数"), `${Math.floor(t.shown)} / ${F}`],
          [translate("排列均匀度"), `${(h * 100).toFixed(0)}%`],
        ]) + `<p class="note">${l}</p>`,
      );
    },
    bar() {
      return `<button class="act" data-act="grow">${translate("重新生长")}</button>`;
    },
    action(a, l) {
      (a === "angle"
        ? ((t.angle = +l), p(), i(), (t.shown = 0), (t.playing = !0))
        : a === "grow" && ((t.shown = 0), (t.playing = !0)),
        e.update());
    },
    input(a, l) {
      return (
        (t.angle = l),
        p(),
        (t.shown = F),
        e.update(),
        `${l.toFixed(2)}°`
      );
    },
    frame(a) {
      t.playing &&
        ((t.shown = Math.min(F, t.shown + a * (60 + t.shown * 0.9))),
        t.shown >= F && ((t.playing = !1), e.update()),
        (t.acc = (t.acc ?? 0) + a),
        t.acc > 0.3 && ((t.acc = 0), e.update()));
    },
    draw2D() {
      const { plot: a } = e,
        l = a.theme;
      (a.clear(),
        a.grid({
          axes: !1,
        }));
      const m = a.ctx,
        o = Math.floor(t.shown),
        r = C * 0.42 * a.view.unit,
        c = l.name === "studio";
      for (let f = o - 1; f >= 0; f--) {
        const [g, M] = a.S(d[f]),
          b = f / F,
          w = c
            ? `hsl(${38 + 8 * b}, ${70 + 20 * b}%, ${35 + 30 * b}%)`
            : `hsl(${30 + 12 * b}, ${55 + 30 * b}%, ${28 + 30 * b}%)`,
          u = Math.min(1, (t.shown - f) / 30);
        ((m.fillStyle = w),
          m.beginPath(),
          m.arc(
            g,
            M,
            r * (0.5 + 0.5 * u) * (0.75 + 0.35 * Math.sqrt(b)),
            0,
            Math.PI * 2,
          ),
          m.fill());
      }
      if (o > 2) {
        const f = d[o - 1],
          g = d[o - 2];
        (a.seg([0, 0], f, {
          color: l.accent2,
          width: 1,
          alpha: 0.6,
        }),
          a.seg([0, 0], g, {
            color: l.accent2,
            width: 1,
            alpha: 0.6,
          }));
      }
    },
    toggles: [],
  };
}
function Ot() {
  wt({
    lessons: zt,
    factories: {
      sierpinski: Dt,
      koch: Et,
      tree: Vt,
      mobius: Gt,
      golden: _t,
      sunflower: Rt,
    },
    toggles: [
      ["labels", translate("图上标注")],
      ["spin", translate("自动旋转")],
    ],
    defaults: {
      labels: !0,
      spin: !1,
    },
  });
}
function wonderLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("趣味数学 · WonderLab")), Ot());
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
                      d: "M16 4L29 27H3z",
                      stroke: "#23272c",
                      strokeWidth: "1.3",
                      strokeLinejoin: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M9.5 15.5h13L16 27z",
                      fill: "#c9800f",
                      fillOpacity: ".25",
                      stroke: "#c9800f",
                      strokeWidth: "1.1",
                      strokeLinejoin: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M12.75 9.75h6.5L16 15.5zM6.25 21.25h6.5L9.5 27zM19.25 21.25h6.5L22.5 27z",
                      fill: "#2f6fd0",
                      fillOpacity: ".25",
                      stroke: "#2f6fd0",
                      strokeWidth: ".9",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "WONDER",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("趣味数学"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(vt, {}),
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
export { wonderLabPage as default };
