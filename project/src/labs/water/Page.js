// Recovered from public deployment: Page-C7ATjR3d.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as yo } from "../../components/LanguageSwitcher.js";
import {
  W as Mo,
  x as Pt,
  A as So,
  h as ko,
  S as Qn,
  F as zo,
  j as Lo,
  r as $o,
  f as pe,
  D as Ln,
  H as Co,
  ag as Ao,
  ah as Jn,
  E as To,
  q as Po,
  U as Ro,
  V as at,
  O as Eo,
  w as St,
  m as Fo,
  a2 as $t,
  C as de,
  a as qo,
  b as V,
  i as jo,
  y as ft,
  z as rt,
  ai as eo,
  M as Fe,
  G as Re,
  aj as En,
  ak as Fn,
  al as Wo,
  am as Ho,
  N as Mt,
  L as Ue,
  T as cn,
  a8 as ht,
  v as bt,
  _ as tn,
  a0 as qn,
  B as Ee,
  X as ct,
  c as It,
  an as fn,
  ao as to,
  k as no,
  ap as Bo,
  aq as _o,
  ar as jt,
  as as Io,
  at as pn,
  aa as No,
  I as Ht,
  d as ln,
  Q as dn,
  K as Nt,
  l as jn,
  au as Oo,
  a9 as Do,
  a4 as Uo,
  a6 as Go,
  u as nn,
  av as Rt,
  aw as Vo,
  o as oo,
  ac as vt,
  ab as Xo,
  J as Ko,
  a3 as Yo,
  R as Zo,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import { R as gt } from "../../vendor/RoundedBoxGeometry-BuxEdaMS.js";
import { m as Qo } from "../../vendor/BufferGeometryUtils--VnzLiDd.js";
const Ge = {
  top: "#8f9fe0",
  mid: "#c9bde6",
  horizon: "#f2d6cf",
  ground: "#e9d4cf",
};
function Jo() {
  const e = document.createElement("canvas");
  ((e.width = 8), (e.height = 512));
  const a = e.getContext("2d"),
    o = a.createLinearGradient(0, 0, 0, 512);
  (o.addColorStop(0, Ge.top),
    o.addColorStop(0.42, Ge.mid),
    o.addColorStop(0.72, Ge.horizon),
    o.addColorStop(1, Ge.ground),
    (a.fillStyle = o),
    a.fillRect(0, 0, 8, 512));
  const r = new St(e);
  return ((r.colorSpace = Pt), r);
}
function ea(e, a) {
  const o = new Qn(),
    r = new Fo(50, 32, 16),
    i = new $t({
      side: qo,
      uniforms: {
        uTop: {
          value: new de(Ge.top),
        },
        uMid: {
          value: new de(Ge.mid),
        },
        uHor: {
          value: new de(Ge.horizon),
        },
        uSun: {
          value: a.clone(),
        },
      },
      vertexShader:
        "varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform vec3 uTop, uMid, uHor, uSun; varying vec3 vD;
      void main(){ float y = vD.y;
        vec3 c = y > 0.0 ? mix(uHor, mix(uMid, uTop, smoothstep(0.25, 0.9, y)), smoothstep(0.0, 0.25, y)) : mix(uHor, vec3(0.55, 0.5, 0.48), smoothstep(0.0, -0.4, y));
        c += vec3(1.0, 0.85, 0.65) * pow(max(dot(vD, uSun), 0.0), 60.0) * 3.0;
        gl_FragColor = vec4(c, 1.0); }`,
    });
  o.add(new V(r, i));
  const n = new jo(e),
    l = n.fromScene(o, 0.02);
  return (n.dispose(), r.dispose(), i.dispose(), l.texture);
}
function ta(e) {
  const a = new Mo({
    canvas: e,
    antialias: !1,
    powerPreference: "high-performance",
  });
  let o = Math.min(window.devicePixelRatio, 1.75);
  (a.setPixelRatio(o),
    (a.outputColorSpace = Pt),
    (a.toneMapping = So),
    (a.toneMappingExposure = 1),
    (a.shadowMap.enabled = !0),
    (a.shadowMap.type = ko));
  const r = new Qn();
  ((r.background = Jo()), (r.fog = new zo(Ge.horizon, 48, 130)));
  const i = new Lo(32, 1, 0.1, 400);
  i.position.set(-0.6, 12.6, 25);
  const n = new $o(i, e);
  (n.target.set(0, 0, -0.8),
    (n.enableDamping = !0),
    (n.dampingFactor = 0.08),
    (n.minDistance = 2.2),
    (n.maxDistance = 44),
    (n.maxPolarAngle = Math.PI * 0.47),
    (n.screenSpacePanning = !0));
  const l = new pe(-0.55, 0.62, 0.56).normalize(),
    c = new Ln("#ffe9d2", 3);
  (c.position.copy(l).multiplyScalar(30),
    (c.castShadow = !0),
    c.shadow.mapSize.set(4096, 4096));
  const t = c.shadow.camera;
  ((t.left = -17),
    (t.right = 17),
    (t.top = 13),
    (t.bottom = -13),
    (t.near = 5),
    (t.far = 80),
    (c.shadow.bias = -4e-4),
    (c.shadow.normalBias = 0.025),
    (c.shadow.radius = 3),
    r.add(c, c.target));
  const m = new Co("#cfc9ff", "#8a7058", 1.25);
  r.add(m);
  const f = new Ln("#b9c4ff", 0.55);
  (f.position.set(8, 6, -6), r.add(f), (r.environment = ea(a, l)));
  const h = new Ao(2, 2, {
      type: Jn,
      samples: 4,
    }),
    w = new To(a, h);
  w.addPass(new Po(r, i));
  const b = new Ro(new at(2, 2), 0.28, 0.6, 0.92);
  (w.addPass(b), w.addPass(new Eo()));
  let M = 0;
  function F(U = M) {
    M = U;
    const W = e.clientWidth,
      B = e.clientHeight;
    (a.setSize(W, B, !1),
      w.setPixelRatio(o),
      w.setSize(W, B),
      (i.aspect = W / B),
      M ? i.setViewOffset(W, B, M, 0, W, B) : i.clearViewOffset(),
      i.updateProjectionMatrix());
  }
  let S = 0,
    A = 0,
    $ = 0,
    E = 0;
  function D() {
    (S++,
      S === 1
        ? (b.enabled = !1)
        : S === 2
          ? ((o = Math.min(o, 1.15)), F())
          : S === 3 &&
            (c.shadow.mapSize.set(2048, 2048),
            c.shadow.map?.dispose(),
            (c.shadow.map = null)));
  }
  function T(U) {
    ($++,
      (E += U),
      E > 2 &&
        ((A = $ / E < 38 ? A + 1 : 0),
        A >= 2 && S < 3 && (D(), (A = 0)),
        ($ = 0),
        (E = 0)),
      w.render());
  }
  return {
    renderer: a,
    scene: r,
    camera: i,
    controls: n,
    sun: c,
    sunDir: l,
    hemi: m,
    bloom: b,
    resize: F,
    render: T,
  };
}
function Ct(e = 1) {
  let a = e >>> 0 || 1;
  return () => (
    (a ^= a << 13),
    (a >>>= 0),
    (a ^= a >>> 17),
    (a ^= a << 5),
    (a >>>= 0),
    a / 4294967296
  );
}
function Gt(e, a, o) {
  let r = (e * 374761393 + a * 668265263 + o * 2147483647) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    ((r ^ (r >>> 16)) >>> 0) / 4294967296
  );
}
const _n = (e) => e * e * (3 - 2 * e);
function ao(e, a, o = 0) {
  const r = Math.floor(e),
    i = Math.floor(a),
    n = _n(e - r),
    l = _n(a - i),
    c = Gt(r, i, o),
    t = Gt(r + 1, i, o),
    m = Gt(r, i + 1, o),
    f = Gt(r + 1, i + 1, o);
  return (c + (t - c) * n + (m - c) * l + (c - t - m + f) * n * l) * 2 - 1;
}
function ut(e, a, o = 5, r = 0) {
  let i = 0,
    n = 0.5,
    l = 1,
    c = 0;
  for (let t = 0; t < o; t++)
    ((i += n * ao(e * l, a * l, r + t * 17)),
      (c += n),
      (n *= 0.5),
      (l *= 2.03));
  return i / c;
}
function In(e, a, o = 5, r = 0) {
  let i = 0,
    n = 0.5,
    l = 1,
    c = 0,
    t = 1;
  for (let m = 0; m < o; m++) {
    let f = 1 - Math.abs(ao(e * l, a * l, r + m * 31));
    ((f *= f * t),
      (t = Math.min(1, f * 1.6)),
      (i += n * f),
      (c += n),
      (n *= 0.5),
      (l *= 2.1));
  }
  return i / c;
}
const ot = (e, a, o) => {
    const r = Math.min(1, Math.max(0, (o - e) / (a - e)));
    return r * r * (3 - 2 * r);
  },
  Z = (e, a, o) => e + (a - e) * o,
  ae = (e, a = 0, o = 1) => (e < a ? a : e > o ? o : e),
  g = {
    x0: -10,
    x1: 9,
    z0: -5.5,
    z1: 3,
    base: -1.9,
  },
  Ve = 475,
  wt = 212,
  _e = {
    x0: -2.5,
    x1: -0.75,
    z0: 1.15,
    z1: 2.75,
  },
  ne = {
    x: 6.45,
    z: 0.15,
    level: 0.5,
  },
  tt = 3.3,
  $n = 1.08,
  Pe = (e) =>
    -3 +
    0.28 * Math.sin(e * 1.3 + 0.5) +
    0.16 * ut(e * 0.8, 3.1, 3, 5) +
    0.3 * Math.exp(-(((e - 0.55) / 0.75) ** 2));
function mn(e, a = 18) {
  const o = [],
    r = (l) => e[Math.max(0, Math.min(e.length - 1, l))];
  for (let l = 0; l < e.length - 1; l++)
    for (let c = 0; c < a; c++) {
      const t = c / a,
        m = r(l - 1),
        f = r(l),
        h = r(l + 1),
        w = r(l + 2),
        b = (M, F, S, A) =>
          0.5 *
          (2 * F +
            (-M + S) * t +
            (2 * M - 5 * F + 4 * S - A) * t * t +
            (-M + 3 * F - 3 * S + A) * t * t * t);
      o.push([
        b(m[0], f[0], h[0], w[0]),
        b(m[1], f[1], h[1], w[1]),
        Z(f[2], h[2], t),
        Z(f[3] ?? 0.05, h[3] ?? 0.05, t),
      ]);
    }
  const i = e.at(-1);
  o.push([i[0], i[1], i[2], i[3] ?? 0.05]);
  let n = 0;
  return o.map(
    (l, c) => (
      c && (n += Math.hypot(l[0] - o[c - 1][0], l[1] - o[c - 1][1])),
      {
        x: l[0],
        z: l[1],
        bed: l[2],
        w: l[3],
        s: n,
      }
    ),
  );
}
const Xe = {
    main: mn([
      [2.85, -1.35, 2.05, 0.03],
      [2.45, -1, 1.55, 0.04],
      [2, -0.62, 1.08, 0.05],
      [1.5, -0.36, 0.66, 0.06],
      [1.05, -0.16, 0.42, 0.065],
      [0.62, 0.12, 0.3, 0.07],
      [0.12, 0.36, 0.23, 0.08],
      [-0.42, 0.06, 0.17, 0.085],
      [-0.98, 0.42, 0.12, 0.09],
      [-1.55, 0.72, 0.075, 0.1],
      [-2.12, 0.46, 0.04, 0.11],
      [-2.62, 0.58, 0.005, 0.12],
      [-3.45, 0.58, -0.06, 0.16],
    ]),
    trib: mn([
      [2.6, 1.75, 1.75, 0.025],
      [2.1, 1.5, 1.12, 0.03],
      [1.55, 1.3, 0.66, 0.035],
      [0.95, 1.08, 0.4, 0.04],
      [0.45, 0.62, 0.27, 0.045],
      [0.12, 0.36, 0.23, 0.05],
    ]),
    inland: mn([
      [4.05, 1.05, 1.55, 0.025],
      [4.5, 0.82, 1.08, 0.03],
      [5.05, 0.58, 0.74, 0.035],
      [5.55, 0.42, 0.6, 0.04],
      [6, 0.3, 0.52, 0.045],
    ]),
  },
  xe = (() => {
    const e = Xe.main;
    let a = 0;
    e.forEach((n, l) => {
      Math.abs(n.x - $n) < Math.abs(e[a].x - $n) && (a = l);
    });
    const o = e[a],
      r = e[a + 1],
      i = Math.atan2(r.z - o.z, r.x - o.x);
    return {
      x: o.x,
      z: o.z,
      bed: o.bed,
      level: o.bed + 0.3,
      crest: o.bed + 0.34,
      angle: i,
      index: a,
    };
  })();
function Wn(e, a, o) {
  let r = 1e9,
    i = 0;
  for (let c = 0; c < e.length - 1; c++) {
    const t = e[c],
      m = e[c + 1],
      f = m.x - t.x,
      h = m.z - t.z,
      w = f * f + h * h;
    let b = ((a - t.x) * f + (o - t.z) * h) / w;
    b = b < 0 ? 0 : b > 1 ? 1 : b;
    const M = t.x + f * b,
      F = t.z + h * b,
      S = (a - M) ** 2 + (o - F) ** 2;
    S < r && ((r = S), (i = c + b));
  }
  const n = Math.min(e.length - 2, Math.floor(i)),
    l = i - n;
  return {
    d: Math.sqrt(r),
    bed: Z(e[n].bed, e[n + 1].bed, l),
    w: Z(e[n].w, e[n + 1].w, l),
    s: Z(e[n].s, e[n + 1].s, l),
    i,
  };
}
const lt = (e, a, o) => Wn(Xe[e], a, o);
function na(e, a) {
  const o = Pe(a);
  if (e < o) {
    const b = o - e;
    return (
      -0.04 - 0.17 * Math.pow(b, 0.85) + 0.025 * ut(e * 1.2, a * 1.2, 4, 2)
    );
  }
  const r = e - o;
  let i = 0.05 + 0.055 * Math.min(r, 3.4) + 0.012 * ut(e * 3, a * 3, 3, 4);
  ((i = Math.min(i, 0.012 + r * 0.35)),
    (i += ot(-0.2, 1.7, e) * 0.32 * (0.55 + 0.45 * ut(e * 0.9, a * 0.9, 4, 7))),
    (i +=
      0.42 *
      Math.exp(-(((e - 1.1) / 0.32) ** 2)) *
      ot(-2.9, -1.4, a) *
      (1 - ot(1.6, 3, a))));
  const n = ot(3.6, 5.2, e);
  ((i = Z(i, 0.58 + 0.03 * ut(e * 2.2, a * 2.2, 3, 9), n)),
    (i -=
      n * 0.14 * Math.exp(-((e - ne.x) ** 2 / 1.3 + (a - ne.z) ** 2 / 0.95))),
    (i +=
      0.35 * ot(7.2, 9, e) +
      0.012 * n * Math.sin(e * 9 + Math.sin(a * 3) * 2)));
  const l = tt + 0.25 * Math.sin(a * 0.9),
    c = e - l,
    t = c < 0 ? 1.45 : 0.95,
    m = Math.exp(-((c / t) ** 2)),
    f =
      2.25 +
      0.45 * Math.exp(-(((a + 0.9) / 1.1) ** 2)) +
      0.25 * ut(a * 0.7, 1.7, 3, 11),
    h = 0.62 + 0.55 * In(e * 0.85 + 3, a * 0.85, 5, 13);
  i += f * m * h * (1 - 0.15 * n);
  const w = ot(-2.7, -4.8, a) * ot(-2.4, -0.4, e);
  if (w > 0) {
    const b =
      1.5 +
      1.9 * In(e * 0.55 + 7, a * 0.7, 5, 17) +
      0.6 * Math.exp(-(((e - 1.4) / 1.6) ** 2));
    i += w * b * (0.9 + 0.2 * ut(e * 2, a * 2, 3, 19)) * (1 - 0.45 * m);
  }
  return i;
}
function oa(e, a) {
  let o = na(e, a);
  for (const r of ["main", "trib", "inland"]) {
    const i = Wn(Xe[r], e, a);
    if (i.d > 1.6) continue;
    let n = Z(0.22, 1.25, ae((i.bed - 0.25) / 1.2));
    r === "main" &&
      (n +=
        3.6 * Math.exp(-(((e - $n) / 0.14) ** 2)) -
        0.3 * Math.exp(-(((e - 1.6) / 0.55) ** 2)));
    const l = Math.max(0, i.d - i.w),
      c =
        r === "main"
          ? 0.75 -
            0.66 *
              Math.exp(-(((e - 1.5) / 0.38) ** 2 + ((a + 0.25) / 0.6) ** 2))
          : 0.75,
      t = i.bed + n * l + c * l * l + 0.05 * ot(0, i.w, i.d);
    o = Math.min(o, t);
  }
  return o;
}
const Lt = new Float32Array((Ve + 1) * (wt + 1)),
  Ot = (g.x1 - g.x0) / Ve,
  Dt = (g.z1 - g.z0) / wt;
for (let e = 0; e <= wt; e++)
  for (let a = 0; a <= Ve; a++)
    Lt[e * (Ve + 1) + a] = oa(g.x0 + a * Ot, g.z0 + e * Dt);
const Ut = new Uint8Array((Ve + 1) * (wt + 1));
function so(e, a, o, r, i) {
  const n = Math.round((e - g.x0) / Ot),
    l = Math.round((a - g.z0) / Dt),
    c = [[n, l]];
  for (; c.length;) {
    const [t, m] = c.pop();
    if (t < 0 || m < 0 || t > Ve || m > wt) continue;
    const f = m * (Ve + 1) + t;
    Ut[f] ||
      Lt[f] >= o ||
      !i(g.x0 + t * Ot, g.z0 + m * Dt) ||
      ((Ut[f] = r), c.push([t + 1, m], [t - 1, m], [t, m + 1], [t, m - 1]));
  }
}
so(
  xe.x + 0.1,
  xe.z - 0.03,
  xe.level,
  1,
  (e, a) =>
    (e - xe.x) * Math.cos(xe.angle) + (a - xe.z) * Math.sin(xe.angle) < -0.025,
);
so(ne.x, ne.z, ne.level, 2, (e) => e > 4.8);
const ro = (e, a) =>
  Ut[
    Math.round(ae((a - g.z0) / Dt, 0, wt)) * (Ve + 1) +
      Math.round(ae((e - g.x0) / Ot, 0, Ve))
  ];
function ie(e, a) {
  const o = ae((e - g.x0) / Ot, 0, Ve - 1e-6),
    r = ae((a - g.z0) / Dt, 0, wt - 1e-6),
    i = Math.floor(o),
    n = Math.floor(r),
    l = o - i,
    c = r - n,
    t = n * (Ve + 1) + i,
    m = Lt[t],
    f = Lt[t + 1],
    h = Lt[t + Ve + 1],
    w = Lt[t + Ve + 2];
  return m + (f - m) * l + (h - m) * c + (m - f - h + w) * l * c;
}
function Cn(e, a) {
  return [
    (ie(e + 0.03, a) - ie(e - 0.03, a)) / (2 * 0.03),
    (ie(e, a + 0.03) - ie(e, a - 0.03)) / (2 * 0.03),
  ];
}
function Tt(e, a) {
  const o = ie(e, a);
  if (e < Pe(a) + 0.05 && o < 0) return 0;
  if (kt(e, a) && o < xe.level) return xe.level;
  if (io(e, a) && o < ne.level) return ne.level;
  for (const r of ["main", "trib", "inland"]) {
    const i = Wn(Xe[r], e, a);
    if (i.d < i.w * 1.05) return i.bed + 0.035;
  }
  return null;
}
const kt = (e, a) => ro(e, a) === 1,
  io = (e, a) => ro(e, a) === 2;
function aa(e, a, o) {
  const r = ie(e, a);
  if (e < Pe(a) && r < 0) return "sea";
  if (kt(e, a) && r < xe.level) return "reservoir";
  if (io(e, a) && r < ne.level) return "lake";
  for (const i of ["main", "trib", "inland"]) {
    const n = lt(i, e, a);
    if (n.d < n.w * 1.3) return i === "inland" ? "inlandRiver" : "river";
  }
  return r > 2.15
    ? "glacier"
    : e > tt + 0.9
      ? "inland"
      : e < Pe(a) + 0.35
        ? a > 0 && a < 1.2
          ? "delta"
          : "beach"
        : e > _e.x0 && e < _e.x1 && a > _e.z0 && a < _e.z1
          ? "city"
          : r > 0.55
            ? "forest"
            : "farm";
}
const on = 800,
  oe = (() => {
    const e = [],
      a = [];
    for (let h = 0; h <= on; h++) {
      const w = g.x0 + (h / on) * (g.x1 - g.x0);
      (e.push(w), a.push(ie(w, g.z1)));
    }
    const o = (h, w) =>
        h.map((b, M) => {
          let F = 0,
            S = 0;
          for (let A = -w; A <= w; A++) {
            const $ = h[Math.max(0, Math.min(h.length - 1, M + A))],
              E = 1 - Math.abs(A) / (w + 1);
            ((F += $ * E), (S += E));
          }
          return F / S;
        }),
      r = o(a, 40),
      i = Pe(g.z1),
      n = a.map((h) => h - 0.06),
      l = r.map((h, w) => Math.min(n[w] - 0.12, h - 0.6 - 0.18 * ae(h / 2))),
      c = l.map((h) => h - 0.2),
      t = e.map((h, w) => {
        const b = a[w];
        if (h < i) return 0;
        const M = 0.04 + 0.12 * ae((b - 0.15) / 0.5) + 0.3 * ae((b - 0.6) / 2);
        let F = b - M;
        return (
          h > 5.2 &&
            (F = Z(F, ne.level - 0.01, Math.exp(-(((h - ne.x) / 1.4) ** 2)))),
          Math.max(F, l[w] + 0.06)
        );
      }),
      m = o(t, 18).map((h, w) => Math.min(h, a[w] - 0.025));
    let f = 0;
    return (
      m.forEach((h, w) => {
        e[w] < 5 && h > m[f] && (f = w);
      }),
      {
        xs: e,
        top: a,
        soil: n,
        aquiferBottom: l,
        clayBottom: c,
        wt: m,
        coast: i,
        divideX: e[f],
      }
    );
  })();
function be(e, a) {
  const o = ae(((a - g.x0) / (g.x1 - g.x0)) * on, 0, on - 1e-6),
    r = Math.floor(o),
    i = o - r;
  return e[r] + (e[r + 1] - e[r]) * i;
}
const Nn = {
    x: -1.65,
    z: 1.95,
  },
  Hn = (e, a) =>
    ae(
      Math.hypot((e - Nn.x) / 0.95, (a - Nn.z) / 0.85) * 0.82 +
        0.18 * (0.5 + 0.5 * ut(e * 6, a * 6, 2, 21)),
    ),
  An = (e, a) =>
    ae(0.5 + 0.55 * ut(e * 1.4, a * 1.4, 3, 33) + 0.12 * (ie(e, a) - 0.8)),
  Tn = (e, a, o = 0) =>
    e > _e.x0 - o && e < _e.x1 + o && a > _e.z0 - o && a < _e.z1 + o,
  je = (e) => new de(e),
  Ce = {
    sand: je("#efd9a6"),
    sandWet: je("#d7bd86"),
    delta: je("#cdb27c"),
    seabed: je("#c9b48a"),
    seaDeep: je("#6f8c93"),
    grass: je("#a7c95b"),
    grass2: je("#93bd4e"),
    meadow: je("#b5c46a"),
    forest: je("#5f9640"),
    forest2: je("#4d8237"),
    alpine: je("#a9a774"),
    rock: je("#a38b8e"),
    rock2: je("#8f7a80"),
    cliff: je("#b4979a"),
    scree: je("#bfaea5"),
    desert: je("#e2bf8a"),
    gobi: je("#c9a982"),
    salt: je("#f1e9d8"),
    oasis: je("#8db552"),
    bank: je("#9aa96a"),
  };
function sa() {
  const a = Math.round((g.x1 - g.x0) / 0.06),
    o = Math.round((g.z1 - g.z0) / 0.06),
    r = (g.x1 - g.x0) / a,
    i = (g.z1 - g.z0) / o,
    n = Ct(9),
    l = new Float32Array((a + 1) * (o + 1)),
    c = new Float32Array(l.length),
    t = new Float32Array(l.length);
  for (let z = 0; z <= o; z++)
    for (let Q = 0; Q <= a; Q++) {
      const J = z * (a + 1) + Q,
        ue = Q === 0 || z === 0 || Q === a || z === o,
        me = g.x0 + Q * r + (ue ? 0 : (n() - 0.5) * r * 0.62),
        he = g.z0 + z * i + (ue ? 0 : (n() - 0.5) * i * 0.62);
      ((l[J] = me), (c[J] = he), (t[J] = ie(me, he)));
    }
  const m = a * o * 2,
    f = new Float32Array(m * 9),
    h = new Float32Array(m * 9),
    w = new Float32Array(m * 12),
    b = new Float32Array(m * 12),
    M = new Float32Array(m * 6),
    F = new pe(),
    S = new pe(),
    A = new pe(),
    $ = new pe(),
    E = new pe(),
    D = new pe(),
    T = new de();
  let U = 0;
  const W = (z, Q, J) => {
    (F.set(l[z], t[z], c[z]),
      S.set(l[Q], t[Q], c[Q]),
      A.set(l[J], t[J], c[J]),
      $.crossVectors(E.subVectors(S, F), D.subVectors(A, F)).normalize(),
      $.y < 0 && $.negate());
    const ue = (F.x + S.x + A.x) / 3,
      me = (F.y + S.y + A.y) / 3,
      he = (F.z + S.z + A.z) / 3,
      K = ra(ue, me, he, $.y, T, n);
    T.multiplyScalar(0.94 + n() * 0.12);
    for (let ce = 0; ce < 3; ce++) {
      const se = ce === 0 ? F : ce === 1 ? S : A;
      (f.set([se.x, se.y, se.z], U * 9 + ce * 3),
        h.set([T.r, T.g, T.b], U * 9 + ce * 3),
        w.set([ue, me, he, $.y], U * 12 + ce * 4),
        b.set(K.kind, U * 12 + ce * 4),
        M.set([K.rank, K.rand], U * 6 + ce * 2));
    }
    U++;
  };
  for (let z = 0; z < o; z++)
    for (let Q = 0; Q < a; Q++) {
      const J = z * (a + 1) + Q,
        ue = J + 1,
        me = J + a + 1,
        he = me + 1;
      (Q + z) % 2
        ? (W(J, me, ue), W(ue, me, he))
        : (W(J, me, he), W(J, he, ue));
    }
  const B = new ft();
  (B.setAttribute("position", new rt(f, 3)),
    B.setAttribute("color", new rt(h, 3)),
    B.setAttribute("aCen", new rt(w, 4)),
    B.setAttribute("aKind", new rt(b, 4)),
    B.setAttribute("aRnd", new rt(M, 2)),
    B.computeVertexNormals(),
    B.computeBoundingSphere());
  const Y = {
      uSnow: {
        value: 2.6,
      },
      uVeg: {
        value: 0.7,
      },
      uUrban: {
        value: 0.3,
      },
      uSponge: {
        value: 0,
      },
      uWet: {
        value: 0,
      },
      uWinter: {
        value: 0,
      },
      uOasis: {
        value: 0,
      },
      uIce: {
        value: 3,
      },
      uHi: {
        value: new eo(0, 0, 1, 1),
      },
      uHiOn: {
        value: 0,
      },
      uTime: {
        value: 0,
      },
    },
    I = new Fe({
      vertexColors: !0,
      flatShading: !0,
      roughness: 0.93,
      metalness: 0,
      envMapIntensity: 0.55,
    });
  I.onBeforeCompile = (z) => {
    (Object.assign(z.uniforms, Y),
      (z.vertexShader = z.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
attribute vec4 aCen;
attribute vec4 aKind;
attribute vec2 aRnd;
varying vec4 vCen;
varying vec4 vKind;
varying vec2 vRnd;
varying vec3 vWP;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vCen = aCen; vKind = aKind; vRnd = aRnd; vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
        )),
      (z.fragmentShader = z.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform float uSnow, uVeg, uUrban, uSponge, uWet, uWinter, uOasis, uIce, uHiOn, uTime;
uniform vec4 uHi;
varying vec4 vCen; varying vec4 vKind; varying vec2 vRnd; varying vec3 vWP;
#define L(c) pow(c, vec3(2.2))
float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }`,
        )
        .replace(
          "#include <color_fragment>",
          `#include <color_fragment>
{
  vec3 c = diffuseColor.rgb;
  float tri = hh(vCen.xz * 17.0);
  // 植被：覆盖率降低时整片露出裸土；冬季落叶林下转为枯黄
  if (vKind.x > 0.0) {
    float keep = step(vRnd.x, uVeg);
    vec3 bare = mix(L(vec3(0.66, 0.52, 0.38)), L(vec3(0.74, 0.6, 0.44)), tri);
    c = mix(c, mix(bare, c, keep), vKind.x);
    c = mix(c, c * vec3(1.18, 1.0, 0.7), uWinter * 0.75 * vKind.x);
  }
  // 农田：斜向错位的条块，作物以嫩绿、黄绿、麦黄为主，田埂略暗
  if (vKind.w > 0.0) {
    vec2 q = mat2(0.94, -0.34, 0.34, 0.94) * vWP.xz;
    float row = floor(q.y / 0.17);
    float wid = 0.18 + 0.16 * hh(vec2(row, 7.0));
    float off = hh(vec2(row, 3.0));
    vec2 cell = vec2(floor(q.x / wid + off), row);
    vec2 f = vec2(fract(q.x / wid + off), fract(q.y / 0.17));
    float id = hh(cell);
    vec3 crop = id < 0.28 ? L(vec3(0.62, 0.78, 0.36)) : id < 0.48 ? L(vec3(0.52, 0.72, 0.32)) : id < 0.62 ? L(vec3(0.91, 0.80, 0.47)) : id < 0.78 ? L(vec3(0.70, 0.80, 0.40)) : id < 0.9 ? L(vec3(0.84, 0.74, 0.44)) : L(vec3(0.46, 0.66, 0.34));
    crop *= 0.95 + 0.07 * step(0.5, fract((id > 0.5 ? f.y : f.x) * 6.0));
    float edge = 1.0 - smoothstep(0.0, 0.05, min(min(f.x, 1.0 - f.x), min(f.y, 1.0 - f.y)));
    crop = mix(crop, L(vec3(0.50, 0.62, 0.30)), edge * 0.7);
    crop = mix(crop, crop * vec3(1.15, 0.95, 0.72), uWinter * 0.8);
    c = mix(c, crop, vKind.w);
  }
  // 城市：从市中心向外硬化成水泥地与道路；海绵城市把一部分改为透水铺装、绿地与雨水花园
  if (vKind.y > 0.5) {
    float urb = step(vRnd.x, uUrban);
    float road = max(step(abs(fract(vWP.x * 3.6 + 0.5) - 0.5), 0.05), step(abs(fract(vWP.z * 3.6 + 0.5) - 0.5), 0.05));
    vec3 pave = mix(L(vec3(0.80, 0.78, 0.76)), L(vec3(0.46, 0.47, 0.52)), road);
    float cellr = hh(floor(vWP.xz * 11.0));
    float green = uSponge * step(cellr, 0.34) * (1.0 - road);
    pave = mix(pave, mix(L(vec3(0.50, 0.74, 0.40)), L(vec3(0.82, 0.76, 0.62)), step(0.5, hh(floor(vWP.xz * 11.0) + 3.1))), green);
    pave = mix(pave, L(vec3(0.60, 0.56, 0.52)), uSponge * road * 0.4);
    c = mix(c, pave, urb);
  }
  // 跨流域调水的受水区（内陆绿洲农田）
  if (uOasis > 0.0) {
    float d = length((vWP.xz - vec2(5.35, -1.25)) / vec2(0.75, 0.5));
    float field = step(0.5, fract(vWP.x * 6.0 + vWP.z * 2.0));
    c = mix(c, mix(L(vec3(0.55, 0.75, 0.33)), L(vec3(0.68, 0.80, 0.38)), field), uOasis * step(d, 1.0));
  }
  // 积雪与冰川：按三角面判断，雪线以上、坡面不陡的面整块变白
  float up = vCen.w;
  float snow = step(uSnow + (tri - 0.5) * 0.35, vCen.y) * step(0.42, up);
  float ice = step(uIce + (tri - 0.5) * 0.3, vCen.y) * step(0.3, up);
  c = mix(c, L(vec3(0.96, 0.95, 0.99)), snow);
  c = mix(c, L(vec3(0.86, 0.92, 0.99)), ice * (1.0 - snow * 0.5));
  // 雨后地面变湿变暗
  c *= 1.0 - uWet * 0.22 * vKind.z * (1.0 - snow);
  // 悬停高亮：发光的圆环
  if (uHiOn > 0.0) {
    float d = length((vWP.xz - uHi.xy) / uHi.zw);
    c = mix(c, c * 1.25, uHiOn * (1.0 - smoothstep(0.85, 1.0, d)) * 0.5);
    c = mix(c, L(vec3(1.0, 0.85, 0.4)), uHiOn * smoothstep(0.92, 0.97, d) * (1.0 - smoothstep(0.97, 1.02, d)));
  }
  diffuseColor.rgb = c;
}`,
        )
        .replace(
          "#include <roughnessmap_fragment>",
          `#include <roughnessmap_fragment>
roughnessFactor = mix(roughnessFactor, 0.5, uWet * vKind.z);`,
        )));
  };
  const X = new V(B, I);
  return (
    (X.receiveShadow = !0),
    (X.castShadow = !0),
    {
      mesh: X,
      U: Y,
    }
  );
}
function ra(e, a, o, r, i, n) {
  const l = Pe(o),
    c = Math.sqrt(Math.max(0, 1 / (r * r) - 1)),
    t = {
      kind: [0, 0, 1, 0],
      rank: 0,
      rand: n(),
    },
    m = ut(e * 3.2, o * 3.2, 3, 2);
  if (e < l && a < 0.01)
    return (
      i.copy(Ce.seabed).lerp(Ce.seaDeep, ae(-a / 0.7)),
      (t.kind[2] = 0),
      t
    );
  if (e < l + 0.34 && a < 0.1)
    return (
      i.copy(o > 0.05 && o < 1.15 ? Ce.delta : Ce.sand),
      a < 0.03 && i.lerp(Ce.sandWet, 0.5),
      t
    );
  if (e > tt + 0.75 + 0.2 * Math.sin(o) && (o > -3.2 || a < 1.4)) {
    i.copy(Ce.desert).lerp(Ce.gobi, 0.5 + 0.5 * m);
    const w = Math.hypot((e - ne.x) / 1.75, (o - ne.z) / 1.45);
    w < 1.25 && a < ne.level + 0.05
      ? i.lerp(Ce.salt, 0.7)
      : w < 1.5 && i.lerp(Ce.oasis, 0.75 * (1 - ot(1.15, 1.5, w)));
    const b = lt("inland", e, o);
    return (
      b.d < 0.2 && i.lerp(Ce.oasis, 0.7 * (1 - b.d / 0.2)),
      a > 1 && i.lerp(Ce.rock, ot(1, 1.7, a)),
      c > 1.1 && i.lerp(Ce.cliff, 0.7),
      t
    );
  }
  if (a > 2.1 || c > 1.25)
    return (
      i.copy(m > 0 ? Ce.rock : Ce.rock2),
      c > 1.25 && i.lerp(Ce.cliff, 0.5),
      a > 1.8 && c < 0.7 && i.lerp(Ce.scree, 0.35),
      (t.kind[0] = c > 1.6 ? 0 : 0.4),
      (t.rank = An(e, o)),
      t
    );
  (i.copy(m > 0.1 ? Ce.forest : Ce.forest2).lerp(Ce.grass2, ae(0.5 - a)),
    a > 1.45 && i.lerp(Ce.alpine, ot(1.45, 2.05, a)),
    (t.kind[0] = 1),
    (t.rank = An(e, o)),
    a < 0.5 &&
      (i.copy(m > 0 ? Ce.grass : Ce.grass2),
      (t.kind[3] = e < 2.3 && !Tn(e, o) ? 1 - ot(0.4, 0.5, a) : 0),
      (t.kind[0] = 0.5)),
    Tn(e, o) && ((t.kind[1] = 1), (t.rank = Hn(e, o)), (t.kind[0] = 0)));
  const h = lt("main", e, o);
  return (
    h.d < h.w * 2.2 &&
      e < tt &&
      (i.lerp(Ce.bank, 0.55 * (1 - h.d / (h.w * 2.2))),
      (t.kind[3] *= h.d > h.w * 1.6 ? 1 : 0)),
    e > xe.x &&
      e < 2.2 &&
      a > xe.level - 0.06 &&
      a < xe.level + 0.05 &&
      h.d < 0.7 &&
      (i.lerp(Ce.scree, 0.55), (t.kind[3] = 0)),
    kt(e, o) && (t.kind[3] = 0),
    t
  );
}
const Ie = -1.55;
function an(e, { drawdown: a = 0 } = {}) {
  const o = be(oe.wt, e);
  if (!a) return o;
  const r = Math.min(0.9, a * 0.012) * Math.exp(-Math.abs(e - Ie) / 0.55);
  return Math.max(be(oe.aquiferBottom, e) + 0.03, o - r);
}
const co = (e = 0.6) => oe.coast + e * 0.16,
  ia = (e) => new de(e),
  Jt = {
    soil: {
      cols: ["#7b5638", "#6c4b31", "#87613f"],
      bw: 0.12,
      bh: 0.035,
      rel: [0.004, 0.012],
      id: 0,
    },
    aquifer: {
      cols: ["#e6c48b", "#d9b47a", "#efd29f", "#cfa66d"],
      bw: 0.09,
      bh: 0.04,
      rel: [0.006, 0.018],
      id: 1,
    },
    clay: {
      cols: ["#b39a92", "#a68b84", "#bfa79e"],
      bw: 0.32,
      bh: 0.05,
      rel: [0.008, 0.02],
      id: 2,
    },
    rockA: {
      cols: ["#d3a273", "#c9965f", "#dcae80"],
      bw: 0.26,
      bh: 0.1,
      rel: [0.012, 0.04],
      id: 3,
    },
    rockB: {
      cols: ["#b87d58", "#ab7050", "#c38962"],
      bw: 0.3,
      bh: 0.09,
      rel: [0.012, 0.038],
      id: 3,
    },
    rockC: {
      cols: ["#e4c79f", "#d8b98f", "#ecd3ad"],
      bw: 0.22,
      bh: 0.08,
      rel: [0.01, 0.034],
      id: 3,
    },
    rockD: {
      cols: ["#a8918c", "#9b847f", "#b39d97"],
      bw: 0.34,
      bh: 0.11,
      rel: [0.014, 0.045],
      id: 3,
    },
    seabed: {
      cols: ["#c4b89c", "#b4a98d", "#d0c5aa"],
      bw: 0.1,
      bh: 0.03,
      rel: [0.004, 0.012],
      id: 4,
    },
  };
for (const e of Object.values(Jt)) e.cols = e.cols.map(ia);
const sn = ["rockA", "rockB", "rockC", "rockD"],
  lo = 22;
function Vt(e, a, o) {
  let r = (e * 374761393 + a * 668265263 + o * 2147483647) | 0;
  return (
    (r = Math.imul(r ^ (r >>> 13), 1274126177)),
    ((r ^ (r >>> 16)) >>> 0) / 4294967296
  );
}
function ca(e, a, o, r, i) {
  const n = [];
  o ? n.push(["seabed", e - 0.08]) : n.push(["soil", e - 0.06]);
  const l = Math.min(e - 0.18, a - 0.6 - 0.18 * ae(a / 2));
  n.push(["aquifer", l], ["clay", l - 0.2]);
  let c = l - 0.2;
  for (let t = 0; t < lo; t++)
    ((c = Math.min(
      c - 0.12,
      l -
        0.2 -
        (t + 1) * 0.3 +
        0.07 * Math.sin(r * i * 0.55 + t * 1.7) +
        0.04 * Math.sin(r * i * 1.7 + t),
    )),
      n.push([sn[t % sn.length], Math.max(c, g.base)]));
  return ((n[n.length - 1][1] = g.base), n);
}
function Xt({ len: e, along: a, outward: o, prof: r, front: i }) {
  const n = Math.round(e / 0.05),
    l = Array.from(
      {
        length: n + 1,
      },
      (A, $) => $ / n,
    ),
    c = l.map(r),
    t = c[0].bands.length,
    m = [],
    f = [],
    h = [],
    w = new de(),
    b = 0.0035;
  for (let A = 0; A < t; A++) {
    const $ = c[0].bands[A][0],
      E = Jt[c[Math.floor(n / 2)].bands[A][0]] || Jt[$],
      D = (B) => (A === 0 ? c[B].top : c[B].bands[A - 1][1]),
      T = (B) => Math.min(c[B].bands[A][1], D(B));
    let U = 0;
    for (let B = 0; B <= n; B++) U += D(B) - T(B);
    U /= n + 1;
    const W = Math.max(1, Math.round(U / E.bh));
    for (let B = 0; B < W; B++) {
      let Y = 0,
        I = 0;
      for (; Y < n;) {
        const X = Math.max(
            1,
            Math.round((E.bw * (0.6 + 0.8 * Vt(A * 31 + B, I, 5))) / (e / n)),
          ),
          z = Y === 0 ? 0 : Y,
          Q = Math.min(n, Y === 0 ? Math.round(X * Vt(A, B, 9)) + 1 : Y + X),
          J = Vt(A * 131 + B * 17, I, 7),
          ue = Z(E.rel[0], E.rel[1], J),
          me = c[Math.floor((z + Q) / 2)].bands[A][0],
          he = Jt[me] || E;
        w.copy(
          he.cols[Math.floor(J * he.cols.length) % he.cols.length],
        ).multiplyScalar(0.92 + Vt(I, B, A + 3) * 0.14);
        for (let K = z; K < Q; K++) {
          const ce = Z(D(K), T(K), (B + 1) / W),
            se = Z(D(K), T(K), B / W),
            Le = Z(D(K + 1), T(K + 1), (B + 1) / W),
            re = Z(D(K + 1), T(K + 1), B / W);
          if (se - ce < 0.003 && re - Le < 0.003) continue;
          const Se = A === 0 && B === 0,
            Me = Se,
            ze = K === z ? b / e : 0,
            Ae = K === Q - 1 ? b / e : 0,
            Ke = l[K] + ze,
            Ye = l[K + 1] - Ae,
            [We, ke] = a(Ke),
            [Te, $e] = a(Ye),
            Ze = Se ? ue * 0.3 : ue,
            Oe = Me ? ue * 0.3 : ue,
            Qe = [
              [We + o[0] * Ze, ce + b, ke + o[1] * Ze],
              [Te + o[0] * Oe, Le + b, $e + o[1] * Oe],
              [Te + o[0] * Oe, Me ? re : re - b, $e + o[1] * Oe],
              [We + o[0] * Ze, Se ? se : se - b, ke + o[1] * Ze],
            ];
          for (const Je of [0, 1, 2, 0, 2, 3])
            (m.push(...Qe[Je]), f.push(w.r, w.g, w.b), h.push(he.id));
        }
        ((Y = Q), I++);
      }
    }
  }
  const M = new ft();
  (M.setAttribute("position", new ht(m, 3)),
    M.setAttribute("color", new ht(f, 3)),
    M.setAttribute("aLay", new ht(h, 1)),
    M.computeVertexNormals());
  const F = [];
  for (let A = 0; A < n; A++) {
    const [$, E] = a(l[A]),
      [D, T] = a(l[A + 1]),
      U = c[A].top,
      W = c[A + 1].top;
    F.push($, g.base, E, D, g.base, T, D, W, T, $, g.base, E, D, W, T, $, U, E);
  }
  const S = new ft();
  return (
    S.setAttribute("position", new ht(F, 3)),
    S.computeVertexNormals(),
    {
      g: M,
      bg: S,
      front: i,
    }
  );
}
function hn(e, a, o) {
  const i = Array.from(
      {
        length: 601,
      },
      (l, c) => e(c / 600),
    ),
    n = i.map((l, c) => {
      let t = 0,
        m = 0;
      for (let f = -30; f <= 30; f++) {
        const h = i[Math.max(0, Math.min(600, c + f))],
          w = 1 - Math.abs(f) / 31;
        ((t += h * w), (m += w));
      }
      return t / m;
    });
  return (l) => {
    const c = Math.min(599, Math.floor(l * 600)),
      t = l * 600 - c,
      m = Z(i[c], i[c + 1], t),
      f = Z(n[c], n[c + 1], t);
    return {
      top: m,
      bands: ca(m, f, a(l) && m < 0.02, l, o),
    };
  };
}
function la() {
  const e = new Re(),
    a = g.x1 - g.x0,
    o = g.z1 - g.z0,
    r = 1024,
    i = new Float32Array(r * 4),
    n = new En(i, r, 1, Fn, Wo);
  n.magFilter = n.minFilter = Ho;
  const l = {
      uHydro: {
        value: n,
      },
      uX0: {
        value: g.x0,
      },
      uX1: {
        value: g.x1,
      },
      uTip: {
        value: oe.coast,
      },
      uCoast: {
        value: oe.coast,
      },
      uTime: {
        value: 0,
      },
    },
    c = (T) => {
      const U = new Fe({
        vertexColors: !0,
        flatShading: !0,
        roughness: 0.9,
        side: Mt,
      });
      return (
        (U.onBeforeCompile = (W) => {
          (Object.assign(W.uniforms, l),
            (W.vertexShader = W.vertexShader
              .replace(
                "#include <common>",
                `#include <common>
attribute float aLay;
varying float vLay;
varying vec3 vWP;`,
              )
              .replace(
                "#include <begin_vertex>",
                `#include <begin_vertex>
vLay = aLay; vWP = (modelMatrix * vec4(transformed, 1.0)).xyz;`,
              )),
            (W.fragmentShader = W.fragmentShader
              .replace(
                "#include <common>",
                `#include <common>
uniform sampler2D uHydro; uniform float uX0, uX1, uTip, uCoast, uTime;
varying float vLay; varying vec3 vWP;
#define L(c) pow(c, vec3(2.2))`,
              )
              .replace(
                "#include <color_fragment>",
                T
                  ? `#include <color_fragment>
{
  vec4 h = texture2D(uHydro, vec2((vWP.x - uX0) / (uX1 - uX0), 0.5));
  vec3 c = diffuseColor.rgb;
  if (vLay > 0.5 && vLay < 1.5 && vWP.y < h.r) {
    // 饱和带：孔隙充满水
    float ripple = 0.06 * sin(vWP.x * 30.0 - uTime * 1.2 + vWP.y * 40.0);
    c = mix(c, L(vec3(0.22, 0.58, 0.96)), 0.8 + ripple);
    if (vWP.x < uTip) {
      float k = clamp((uTip - vWP.x) / (uTip - uCoast + 0.6), 0.0, 1.0);
      if (vWP.y < h.g + (h.b - h.g) * pow(k, 0.7)) c = mix(c, L(vec3(0.12, 0.58, 0.58)), 0.72);
    }
  }
  diffuseColor.rgb = c;
}`
                  : "#include <color_fragment>",
              )
              .replace(
                "#include <emissivemap_fragment>",
                T
                  ? `#include <emissivemap_fragment>
{
  vec4 h2 = texture2D(uHydro, vec2((vWP.x - uX0) / (uX1 - uX0), 0.5));
  // 潜水面：发光的虚线
  float line = (1.0 - smoothstep(0.008, 0.014, abs(vWP.y - h2.r))) * step(uCoast, vWP.x) * step(0.4, fract(vWP.x * 6.0 - uTime * 0.3)) * step(vLay, 1.5);
  totalEmissiveRadiance += vec3(0.7, 1.1, 1.4) * line * 2.4;
}`
                  : "#include <emissivemap_fragment>",
              )));
        }),
        U
      );
    },
    t = new Fe({
      color: "#3c2a22",
      roughness: 1,
      side: Mt,
    }),
    f = [
      {
        f: Xt({
          len: a,
          along: (T) => [g.x0 + T * a, g.z1],
          outward: [0, 1],
          prof: (T) => {
            const U = g.x0 + T * a,
              W = be(oe.top, U),
              B = be(oe.soil, U),
              Y = be(oe.aquiferBottom, U),
              I = be(oe.clayBottom, U),
              X = U < oe.coast,
              z = [
                [X ? "seabed" : "soil", X ? W - 0.08 : B],
                ["aquifer", Y],
                ["clay", I],
              ];
            let Q = I;
            for (let J = 0; J < lo; J++)
              ((Q = Math.min(
                Q - 0.12,
                I -
                  (J + 1) * 0.3 +
                  0.07 * Math.sin(U * 0.55 + J * 1.7) +
                  0.04 * Math.sin(U * 1.7 + J),
              )),
                z.push([sn[J % sn.length], Math.max(Q, g.base)]));
            return (
              (z[z.length - 1][1] = g.base),
              {
                top: W,
                bands: z,
              }
            );
          },
          front: !0,
        }),
        front: !0,
      },
      {
        f: Xt({
          len: a,
          along: (T) => [g.x1 - T * a, g.z0],
          outward: [0, -1],
          prof: hn(
            (T) => ie(g.x1 - T * a, g.z0),
            (T) => g.x1 - T * a < Pe(g.z0),
            a,
          ),
        }),
      },
      {
        f: Xt({
          len: o,
          along: (T) => [g.x1, g.z0 + T * o],
          outward: [1, 0],
          prof: hn(
            (T) => ie(g.x1, g.z0 + T * o),
            () => !1,
            o,
          ),
        }),
      },
      {
        f: Xt({
          len: o,
          along: (T) => [g.x0, g.z1 - T * o],
          outward: [-1, 0],
          prof: hn(
            (T) => ie(g.x0, g.z1 - T * o),
            () => !0,
            o,
          ),
        }),
      },
    ],
    h = c(!0),
    w = c(!1),
    b = f.map(({ f: T, front: U }) => {
      const W = new V(T.g, U ? h : w);
      return (
        (W.receiveShadow = !0),
        (W.castShadow = !0),
        e.add(W, new V(T.bg, t)),
        W
      );
    });
  function M({ drawdown: T = 0, intrusion: U = 0.6 } = {}) {
    for (let W = 0; W < r; W++) {
      const B = g.x0 + ((W + 0.5) / r) * a;
      ((i[W * 4] =
        B < oe.coast
          ? -9
          : an(B, {
              drawdown: T,
            })),
        (i[W * 4 + 1] = be(oe.aquiferBottom, B)),
        (i[W * 4 + 2] = Math.min(be(oe.top, B), 0)));
    }
    ((n.needsUpdate = !0), (l.uTip.value = co(U)));
  }
  M();
  const F = be(oe.top, Ie),
    S = be(oe.aquiferBottom, Ie) + 0.02,
    A = new V(
      new Ue(0.016, 0.016, F - S, 10),
      new Fe({
        color: "#e4e8ee",
        roughness: 0.3,
        metalness: 0.6,
      }),
    );
  (A.position.set(Ie, (F + S) / 2, g.z1 + 0.05), e.add(A));
  for (let T = S + 0.02; T < S + 0.2; T += 0.03) {
    const U = new V(
      new cn(0.018, 0.004, 6, 12),
      new Fe({
        color: "#59606a",
      }),
    );
    ((U.rotation.x = Math.PI / 2),
      U.position.set(Ie, T, g.z1 + 0.05),
      e.add(U));
  }
  const $ = new $t({
      transparent: !0,
      depthWrite: !1,
      side: Mt,
      uniforms: {
        uTime: {
          value: 0,
        },
      },
      vertexShader:
        "varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform float uTime; varying vec3 vP;
      void main(){ float d = clamp(-vP.y / 1.0, 0.0, 1.0);
        vec3 c = mix(vec3(0.45, 0.88, 0.88), vec3(0.09, 0.36, 0.72), pow(d, 0.75));
        float ray = 0.07 * (1.0 - d) * smoothstep(0.6, 1.0, sin(vP.x * 9.0 + vP.z * 9.0 + sin(vP.y * 6.0 + uTime * 0.7) * 1.5));
        float top = smoothstep(0.035, 0.0, -vP.y);
        gl_FragColor = vec4(c + ray + top * 0.3, 0.6 + 0.28 * d);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
    }),
    E = (T) => {
      const U = [],
        W = [];
      T.forEach(([I, X], z) => {
        (U.push(I, 0, X, I, Math.min(0, ie(I, X)) - 0.002, X),
          z &&
            W.push(
              (z - 1) * 2,
              z * 2,
              (z - 1) * 2 + 1,
              z * 2,
              z * 2 + 1,
              (z - 1) * 2 + 1,
            ));
      });
      const B = new ft();
      (B.setAttribute("position", new ht(U, 3)), B.setIndex(W));
      const Y = new V(B, $);
      return ((Y.renderOrder = 4), Y);
    },
    D = (T, U, W, B, Y) =>
      Array.from(
        {
          length: Y + 1,
        },
        (I, X) => [Z(T, W, X / Y), Z(U, B, X / Y)],
      );
  return (
    e.add(
      E(D(g.x0, g.z1 + 0.06, Pe(g.z1) + 0.12, g.z1 + 0.06, 160)),
      E(D(g.x0 - 0.06, g.z0, g.x0 - 0.06, g.z1, 120)),
      E(D(g.x0, g.z0 - 0.06, Pe(g.z0) + 0.12, g.z0 - 0.06, 120)),
    ),
    {
      group: e,
      front: b[0],
      recolor: M,
      seaMat: $,
      HU: l,
    }
  );
}
const uo = 0.025,
  fo = g.base - 0.44,
  pt = fo - uo;
function da() {
  const o = document.createElement("canvas");
  ((o.width = 2048), (o.height = 1024));
  const r = o.getContext("2d"),
    i = document.createElement("canvas");
  ((i.width = 2048), (i.height = 1024));
  const n = i.getContext("2d");
  ((n.fillStyle = "#8a8a8a"), n.fillRect(0, 0, 2048, 1024));
  const l = Ct(13),
    c = 7,
    t = [
      "#6f4126",
      "#7a4a2b",
      "#663b22",
      "#84522f",
      "#714428",
      "#5f371f",
      "#7c4c2d",
    ];
  for (let w = 0; w < c; w++) {
    const b = (w / c) * 1024,
      M = 1024 / c;
    ((r.fillStyle = t[w % t.length]), r.fillRect(0, b, 2048, M));
    for (let S = 0; S < 70; S++) {
      const A = b + l() * M,
        $ = 1 + l() * 4,
        E = 0.002 + l() * 0.004,
        D = l() * 6;
      ((r.strokeStyle =
        l() < 0.5
          ? `rgba(40,20,8,${0.08 + l() * 0.16})`
          : `rgba(180,120,70,${0.05 + l() * 0.1})`),
        (r.lineWidth = 0.6 + l() * 1.6),
        r.beginPath());
      for (let T = 0; T <= 2048; T += 16) {
        const U =
          A + Math.sin(T * E + D) * $ + Math.sin(T * E * 3.1 + D) * $ * 0.3;
        T ? r.lineTo(T, U) : r.moveTo(T, U);
      }
      r.stroke();
    }
    for (let S = 0; S < 2; S++) {
      const A = l() * 2048,
        $ = b + M * (0.3 + l() * 0.4);
      for (let E = 0; E < 9; E++)
        ((r.strokeStyle = `rgba(35,16,6,${0.1 + l() * 0.08})`),
          (r.lineWidth = 1 + l()),
          r.beginPath(),
          r.ellipse(
            A,
            $,
            120 + E * 38,
            8 + E * 3.2,
            0,
            Math.PI * 0.05,
            Math.PI * 0.95,
          ),
          r.stroke());
    }
    if (l() < 0.5) {
      const S = l() * 2048,
        A = b + M * (0.2 + l() * 0.6);
      for (let $ = 6; $ > 0; $--)
        ((r.fillStyle = `rgba(${30 + $ * 6},${14 + $ * 3},6,${0.12 + 0.04 * $})`),
          r.beginPath(),
          r.ellipse(S, A, $ * 5, $ * 2.4, 0, 0, Math.PI * 2),
          r.fill());
    }
    ((r.fillStyle = "rgba(20,10,4,.7)"),
      r.fillRect(0, b + M - 2, 2048, 2),
      (n.fillStyle = "#d0d0d0"),
      n.fillRect(0, b + M - 2, 2048, 2));
    const F = 300 + ((w * 577) % 1448);
    r.fillRect(F, b, 2, M);
  }
  const m = r.getImageData(0, 0, 2048, 1024);
  for (let w = 0; w < m.data.length; w += 4) {
    const b = (l() - 0.5) * 10;
    ((m.data[w] += b), (m.data[w + 1] += b * 0.8), (m.data[w + 2] += b * 0.6));
  }
  r.putImageData(m, 0, 0);
  const f = new St(o);
  ((f.colorSpace = Pt), (f.anisotropy = 8));
  const h = new St(i);
  return {
    map: f,
    rough: h,
  };
}
function ua() {
  const o = document.createElement("canvas");
  ((o.width = 2048), (o.height = 1024));
  const r = o.getContext("2d");
  ((r.fillStyle = "#24443a"), r.fillRect(0, 0, 2048, 1024));
  const i = Ct(29);
  for (let l = 0; l < 6e4; l++) {
    const c = i();
    ((r.fillStyle =
      c < 0.5
        ? `rgba(0,0,0,${0.05 + i() * 0.06})`
        : `rgba(120,170,150,${0.03 + i() * 0.04})`),
      r.fillRect(i() * 2048, i() * 1024, 1 + i() * 2, 1 + i() * 2));
  }
  ((r.strokeStyle = "rgba(10,25,20,.55)"),
    (r.lineWidth = 5),
    r.strokeRect(14, 14, 2020, 996),
    r.setLineDash([5, 4]),
    (r.strokeStyle = "rgba(201,178,132,.75)"),
    (r.lineWidth = 1.6),
    r.strokeRect(24, 24, 2e3, 976));
  const n = new St(o);
  return ((n.colorSpace = Pt), (n.anisotropy = 8), n);
}
function fa() {
  const e = new Re(),
    a = g.x1 - g.x0,
    o = g.z1 - g.z0,
    r = (g.x0 + g.x1) / 2,
    i = (g.z0 + g.z1) / 2,
    n = new bt({
      color: "#c9a25e",
      roughness: 0.28,
      metalness: 0.9,
      clearcoat: 0.3,
    }),
    { map: l, rough: c } = da(),
    t = new bt({
      map: l,
      roughnessMap: c,
      roughness: 0.6,
      clearcoat: 0.4,
      clearcoatRoughness: 0.32,
      sheen: 0.2,
      sheenColor: new de("#8a5a36"),
    }),
    m = new bt({
      color: "#4a2c1a",
      roughness: 0.5,
      clearcoat: 0.5,
      clearcoatRoughness: 0.25,
    }),
    f = g.x0 - 1.5,
    h = g.x1 + 1.7,
    w = g.z0 - 1.3,
    b = g.z1 + 2.3,
    M = h - f,
    F = b - w,
    S = 0.3,
    A = new V(new gt(M, S, F, 4, 0.12), t);
  (A.position.set((f + h) / 2, pt - S / 2, (w + b) / 2),
    (A.receiveShadow = !0),
    (A.castShadow = !0),
    e.add(A));
  const $ = 0.45,
    E = (ve, qe, De, nt) => {
      const it = new V(new Ee(ve, 0.006, qe), n);
      (it.position.set(De, pt + 0.001, nt), e.add(it));
    };
  (E(M - $ * 2, 0.025, (f + h) / 2, w + $),
    E(M - $ * 2, 0.025, (f + h) / 2, b - $),
    E(0.025, F - $ * 2, f + $, (w + b) / 2),
    E(0.025, F - $ * 2, h - $, (w + b) / 2));
  const D = new V(new gt(M - 1.3, 0.42, F - 1.3, 3, 0.04), m);
  (D.position.set((f + h) / 2, pt - S - 0.21, (w + b) / 2), e.add(D));
  const T = new V(new gt(M - 1.24, 0.04, F - 1.24, 2, 0.015), n);
  (T.position.set((f + h) / 2, pt - S - 0.38, (w + b) / 2), e.add(T));
  const U = 8,
    W = new Ue(0.3, 0.19, U, 4, 1).rotateY(Math.PI / 4),
    B = new Ue(0.2, 0.19, 0.5, 4, 1).rotateY(Math.PI / 4);
  for (const [ve, qe] of [
    [f + 0.85, w + 0.85],
    [f + 0.85, b - 0.85],
    [h - 0.85, w + 0.85],
    [h - 0.85, b - 0.85],
  ]) {
    const De = new V(W, m);
    De.position.set(ve, pt - S - U / 2, qe);
    const nt = new V(B, n);
    (nt.position.set(ve, pt - S - U + 0.25, qe), e.add(De, nt));
  }
  const Y = a + 1.5,
    I = o + 1.5,
    X = 0.18,
    z = new tn();
  (z.moveTo(-Y / 2 + X, -I / 2),
    z.lineTo(Y / 2 - X, -I / 2),
    z.quadraticCurveTo(Y / 2, -I / 2, Y / 2, -I / 2 + X),
    z.lineTo(Y / 2, I / 2 - X),
    z.quadraticCurveTo(Y / 2, I / 2, Y / 2 - X, I / 2),
    z.lineTo(-Y / 2 + X, I / 2),
    z.quadraticCurveTo(-Y / 2, I / 2, -Y / 2, I / 2 - X),
    z.lineTo(-Y / 2, -I / 2 + X),
    z.quadraticCurveTo(-Y / 2, -I / 2, -Y / 2 + X, -I / 2));
  const Q = new qn(z, {
    depth: uo,
    bevelEnabled: !0,
    bevelThickness: 0.006,
    bevelSize: 0.01,
    bevelSegments: 2,
  });
  Q.rotateX(-Math.PI / 2);
  const J = Q.attributes.uv,
    ue = Q.attributes.position;
  for (let ve = 0; ve < J.count; ve++)
    J.setXY(ve, (ue.getX(ve) + Y / 2) / Y, (-ue.getZ(ve) + I / 2) / I);
  const me = new bt({
      map: ua(),
      roughness: 0.62,
      sheen: 0.6,
      sheenRoughness: 0.5,
      sheenColor: new de("#6f9a88"),
    }),
    he = new V(Q, me);
  (he.position.set(r, pt, i), (he.receiveShadow = !0), e.add(he));
  const K = new bt({
      color: "#3a2418",
      roughness: 0.42,
      clearcoat: 0.8,
      clearcoatRoughness: 0.14,
    }),
    ce = new V(new gt(a + 0.3, 0.36, o + 0.3, 3, 0.03), K);
  ce.position.set(r, g.base - 0.18, i);
  const se = new V(new gt(a + 0.36, 0.03, o + 0.36, 2, 0.012), n);
  se.position.set(r, g.base - 0.012, i);
  const Le = new V(new gt(a + 0.52, 0.08, o + 0.52, 3, 0.03), K);
  Le.position.set(r, fo + 0.04, i);
  for (const ve of [ce, se, Le])
    ((ve.castShadow = ve.receiveShadow = !0), e.add(ve));
  for (const ve of [-1, 1])
    for (const qe of [-1, 1]) {
      const De = new V(new gt(0.16, 0.38, 0.16, 2, 0.02), n);
      (De.position.set(
        r + ve * (a / 2 + 0.16),
        g.base - 0.19,
        i + qe * (o / 2 + 0.16),
      ),
        (De.castShadow = !0),
        e.add(De));
    }
  const re = new Re(),
    Se = new V(
      new gt(1.15, 0.07, 1.5, 2, 0.02),
      new bt({
        color: "#7a2f2a",
        roughness: 0.55,
        sheen: 0.4,
        sheenColor: new de("#c46a5a"),
      }),
    ),
    Me = new V(
      new Ee(1.1, 0.05, 1.46),
      new Fe({
        color: "#f3ead7",
        roughness: 0.9,
      }),
    );
  Me.position.set(0.02, 0, 0);
  const ze = new V(
    new Ee(0.035, 0.075, 1.52),
    new Fe({
      color: "#1d1a19",
      roughness: 0.6,
    }),
  );
  (ze.position.set(0.42, 0, 0),
    (Se.position.y = 0.035),
    (Me.position.y = 0.035),
    (ze.position.y = 0.036));
  const Ae = new Re(),
    Ke = new V(
      new Ue(0.03, 0.03, 1.1, 6),
      new Fe({
        color: "#e6b83a",
        roughness: 0.5,
        flatShading: !0,
      }),
    ),
    Ye = new V(
      new ct(0.03, 0.12, 6),
      new Fe({
        color: "#e8d2b0",
        roughness: 0.7,
        flatShading: !0,
      }),
    );
  Ye.position.y = 0.61;
  const We = new V(
    new ct(0.01, 0.04, 6),
    new Fe({
      color: "#333",
    }),
  );
  We.position.y = 0.66;
  const ke = new V(new Ue(0.032, 0.032, 0.08, 10), n);
  ke.position.y = -0.59;
  const Te = new V(
    new Ue(0.03, 0.03, 0.07, 10),
    new Fe({
      color: "#e48a8a",
      roughness: 0.8,
    }),
  );
  ((Te.position.y = -0.66),
    Ae.add(Ke, Ye, We, ke, Te),
    (Ae.rotation.z = Math.PI / 2),
    (Ae.rotation.y = 0.5),
    Ae.position.set(-0.1, 0.1, 0.1),
    re.add(Se, Me, ze, Ae),
    (re.rotation.y = -0.25),
    re.position.set(g.x1 + 0.95, pt, g.z1 + 1.15),
    re.traverse((ve) => {
      ve.isMesh && ((ve.castShadow = !0), (ve.receiveShadow = !0));
    }),
    e.add(re));
  const $e = new Re(),
    Ze = new bt({
      color: "#ffffff",
      roughness: 0.05,
      metalness: 0,
      transmission: 0.95,
      thickness: 0.05,
      ior: 1.45,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
    }),
    Oe = new V(new Ue(0.36, 0.36, 0.9, 32, 1, !0), Ze);
  Oe.position.y = 0.45;
  const Qe = new V(new cn(0.36, 0.012, 8, 32), Ze);
  ((Qe.rotation.x = Math.PI / 2), (Qe.position.y = 0.9));
  const Je = new V(
    new Ue(0.345, 0.345, 0.55, 32),
    new bt({
      color: "#7fc6e6",
      roughness: 0.05,
      transmission: 0.6,
      thickness: 0.4,
      transparent: !0,
      opacity: 0.75,
    }),
  );
  Je.position.y = 0.285;
  for (let ve = 1; ve < 6; ve++) {
    const qe = new V(
      new Ee(0.08, 0.008, 0.004),
      new It({
        color: "#ffffff",
        transparent: !0,
        opacity: 0.7,
      }),
    );
    (qe.position.set(0, ve * 0.13, 0.362), $e.add(qe));
  }
  return (
    $e.add(Je, Oe, Qe),
    $e.position.set(g.x1 + 1, pt, g.z0 + 0.4),
    (Je.castShadow = !0),
    e.add($e),
    e
  );
}
function pa(e = 256) {
  const a = Ct(7),
    o = Array.from(
      {
        length: 28,
      },
      (n, l) => {
        const c = 1 + Math.floor(a() * (l < 8 ? 4 : l < 18 ? 9 : 18)),
          t = a() * Math.PI * 2;
        return {
          kx: Math.round(Math.cos(t) * c),
          ky: Math.round(Math.sin(t) * c),
          amp: 1 / (c + 1.5),
          ph: a() * Math.PI * 2,
        };
      },
    ),
    r = new Uint8Array(e * e * 4);
  for (let n = 0; n < e; n++)
    for (let l = 0; l < e; l++) {
      let c = 0,
        t = 0;
      for (const b of o) {
        const M = ((b.kx * l + b.ky * n) / e) * Math.PI * 2 + b.ph,
          F = Math.cos(M) * b.amp;
        ((c += F * b.kx), (t += F * b.ky));
      }
      const m = -c * 0.09,
        f = -t * 0.09,
        h = Math.hypot(m, f, 1),
        w = (n * e + l) * 4;
      ((r[w] = ((m / h) * 0.5 + 0.5) * 255),
        (r[w + 1] = ((f / h) * 0.5 + 0.5) * 255),
        (r[w + 2] = ((1 / h) * 0.5 + 0.5) * 255),
        (r[w + 3] = 255));
    }
  const i = new En(r, e, e, Fn);
  return (
    (i.wrapS = i.wrapT = no),
    (i.magFilter = to),
    (i.minFilter = Bo),
    (i.generateMipmaps = !0),
    (i.needsUpdate = !0),
    i
  );
}
function ma() {
  const e = document.createElement("canvas");
  ((e.width = 64), (e.height = 128));
  const a = e.getContext("2d");
  ((a.fillStyle = "#b5b1a9"), a.fillRect(0, 0, 64, 128));
  const o = Ct(11);
  for (let i = 4; i < 128; i += 10)
    for (let n = 4; n < 64; n += 10) {
      const l = 70 + o() * 60;
      ((a.fillStyle = `rgb(${l * 0.75},${l * 0.9},${l * 1.1})`),
        a.fillRect(n, i, 6, 6));
    }
  const r = new St(e);
  return ((r.colorSpace = Pt), (r.wrapS = r.wrapT = no), r);
}
function ha() {
  const e = (Ve + 1) * (wt + 1),
    a = new Uint16Array(e * 4),
    o = fn.toHalfFloat(1),
    r = fn.toHalfFloat(0);
  for (let n = 0; n < e; n++)
    ((a[n * 4] = fn.toHalfFloat(Lt[n])),
      (a[n * 4 + 1] = Ut[n] === 1 ? o : r),
      (a[n * 4 + 2] = Ut[n] === 2 ? o : r),
      (a[n * 4 + 3] = r));
  const i = new En(a, Ve + 1, wt + 1, Fn, Jn);
  return ((i.magFilter = i.minFilter = to), (i.needsUpdate = !0), i);
}
function va() {
  const e = document.createElement("canvas");
  e.width = e.height = 64;
  const a = e.getContext("2d"),
    o = a.createRadialGradient(32, 32, 0, 32, 32, 32);
  (o.addColorStop(0, "rgba(255,255,255,1)"),
    o.addColorStop(0.35, "rgba(255,255,255,.7)"),
    o.addColorStop(1, "rgba(255,255,255,0)"),
    (a.fillStyle = o),
    a.fillRect(0, 0, 64, 64));
  const r = new St(e);
  return ((r.colorSpace = _o), r);
}
const wa = (e) => (e.index ? e.toNonIndexed() : e),
  At = (e) => Qo(e.map(wa)),
  ge = (e = {}) =>
    new Fe({
      flatShading: !0,
      roughness: 0.85,
      ...e,
    }),
  xa = new pe(0, 1, 0),
  po = {
    value: 1,
  };
function On(e, a, o = 0.22, r = po) {
  return (
    (e.onBeforeCompile = (i) => {
      ((i.uniforms.uTime = a),
        (i.uniforms.uWind = r),
        (i.vertexShader = i.vertexShader
          .replace(
            "#include <common>",
            `#include <common>
uniform float uTime;
uniform float uWind;`,
          )
          .replace(
            "#include <begin_vertex>",
            `#include <begin_vertex>
#ifdef USE_INSTANCING
  vec3 ip = instanceMatrix[3].xyz;
  float sw = sin(uTime * (1.2 + uWind * 0.8) + ip.x * 3.1 + ip.z * 2.3) + 0.4 * sin(uTime * 3.3 * (0.6 + uWind * 0.5) + ip.z * 5.0) + uWind * 0.6;
  float k = max(0.0, position.y) * ${o.toFixed(3)} * uWind;
  transformed.x += sw * k * 0.12; transformed.z += sw * k * 0.07;
#endif`,
          )));
    }),
    e
  );
}
function dt(e, a, o, r, { shadow: i = !0 } = {}) {
  const n = new Ht(e, a, Math.max(1, o.length)),
    l = new ln(),
    c = new dn(),
    t = new de();
  return (
    o.forEach((m, f) => {
      (c.setFromAxisAngle(xa, m.rot),
        l.compose(
          new pe(m.x, m.y, m.z),
          c,
          new pe(m.sx ?? m.s, m.sy ?? m.s, m.sz ?? m.s),
        ),
        n.setMatrixAt(f, l),
        n.setColorAt(f, r(m, t)));
    }),
    (n.count = o.length),
    (n.castShadow = i),
    (n.receiveShadow = !0),
    n.instanceColor || n.setColorAt(0, t.set("#fff")),
    n
  );
}
function ba(e) {
  const a = new Re(),
    o = Ct(23),
    r = [],
    i = [],
    n = [],
    l = [],
    c = [],
    t = [],
    m = (v, u) => v > Pe(u) + 0.32;
  for (let v = 0; v < 15e4; v++) {
    const u = Z(g.x0 + 0.05, g.x1 - 0.05, o()),
      R = Z(g.z0 + 0.05, g.z1 - 0.05, o());
    if (!m(u, R)) continue;
    const N = ie(u, R);
    if (Tt(u, R) !== null || kt(u, R)) continue;
    const [G, le] = Cn(u, R),
      ye = Math.hypot(G, le),
      fe = Tn(u, R, 0.05),
      ee = Math.min(lt("main", u, R).d, lt("trib", u, R).d),
      te = u > tt + 0.5 && R > -2.9,
      He = Math.hypot((u - ne.x) / 1.75, (R - ne.z) / 1.45);
    let Ne = 0;
    (N > 2.35 || ye > 1.9
      ? (Ne = 0)
      : u > tt + 0.6 && N < 1.7
        ? (Ne = He > 1.2 && He < 1.45 ? 0.12 : 0.006)
        : R < -2.8 && N > 0.4
          ? (Ne = 0.5)
          : !te && N > 0.45
            ? (Ne = 0.6)
            : ee < 0.32 && ee > 0.1
              ? (Ne = 0.3)
              : (Ne = 0.025),
      fe && (Ne = Hn(u, R) > 0.75 ? 0.05 : 0),
      u > xe.x - 0.15 &&
        u < 2.2 &&
        N < xe.level + 0.12 &&
        lt("main", u, R).d < 0.95 &&
        (Ne = 0));
    const Bn = o(),
      un = An(u, R);
    if (Bn < Ne * 0.22) {
      const xt = N > 1.05 || (N > 0.5 && o() < 0.5) || R < -2.8,
        wo = 0.8 + o() * 0.6 + (xt && N < 1.4 ? 0.15 : 0),
        xo = {
          x: u,
          y: N - 0.005,
          z: R,
          s: wo,
          rot: o() * 6.28,
          rank: un,
          h: N,
          autumn: o() < (xt ? 0.035 : 0.09),
        };
      (xt ? r : i).push(xo);
    } else
      Bn < Ne * 0.34 &&
        n.push({
          x: u,
          y: N - 0.004,
          z: R,
          s: 0.7 + o() * 0.8,
          rot: o() * 6.28,
          rank: un,
          h: N,
        });
    if (o() < (N > 1.5 || ye > 1 ? 0.012 : ee < 0.25 ? 0.01 : 0.002) && !fe) {
      const xt = 0.4 + o() * 1.1;
      l.push({
        x: u,
        y: N - 0.01,
        z: R,
        s: xt,
        sx: xt * (0.8 + o() * 0.6),
        sy: xt * (0.5 + o() * 0.5),
        sz: xt * (0.8 + o() * 0.6),
        rot: o() * 6.28,
        h: N,
      });
    }
    (!fe &&
      !te &&
      N > 0.42 &&
      N < 1.7 &&
      ye < 0.9 &&
      o() < 0.02 &&
      c.push({
        x: u,
        y: N,
        z: R,
        s: 0.7 + o() * 0.6,
        rot: o() * 6.28,
        kind: o(),
      }),
      !fe &&
        N > 0.05 &&
        N < 2 &&
        o() < (te ? 0.004 : 0.018) &&
        t.push({
          x: u,
          y: N - 0.003,
          z: R,
          s: 0.7 + o() * 0.7,
          rot: o() * 6.28,
          rank: un,
          inland: te,
        }));
  }
  const f = (v, u) =>
      v.length > u ? v.filter((R, N) => N % Math.ceil(v.length / u) === 0) : v,
    h = f(r, 5200).sort((v, u) => v.rank - u.rank),
    w = f(i, 3200).sort((v, u) => v.rank - u.rank),
    b = f(n, 3200).sort((v, u) => v.rank - u.rank),
    M = At([
      new ct(0.046, 0.075, 7).translate(0, 0.07, 0),
      new ct(0.037, 0.065, 7).translate(0, 0.108, 0),
      new ct(0.026, 0.055, 7).translate(0, 0.142, 0),
    ]),
    F = At([
      new jt(0.048, 0).scale(1, 0.92, 1).translate(0, 0.088, 0),
      new jt(0.034, 0).translate(0.026, 0.07, 0.012),
    ]),
    S = new Ue(0.0055, 0.0075, 0.05, 5).translate(0, 0.025, 0),
    A = At([
      new jt(0.026, 0).scale(1, 0.75, 1).translate(0, 0.016, 0),
      new jt(0.018, 0).translate(0.018, 0.012, 0.006),
    ]),
    $ = new Io(0.035, 0).translate(0, 0.012, 0),
    E = At([
      new pn(0.007, 0).translate(0, 0.012, 0),
      new pn(0.006, 0).translate(0.012, 0.009, 0.006),
      new pn(0.006, 0).translate(-0.008, 0.01, -0.01),
    ]),
    D = At(
      [0, 2.1, 4.2].map((v) =>
        new ct(0.006, 0.04, 3)
          .rotateZ(0.25)
          .rotateY(v)
          .translate(Math.cos(v) * 0.006, 0.018, Math.sin(v) * 0.006),
      ),
    ),
    T = On(
      ge({
        roughness: 0.8,
      }),
      e,
    ),
    U = (v, u) =>
      (v.autumn
        ? u.set("#d9783a")
        : u.set(v.h > 1.6 ? "#2f6a46" : "#3d7d44")
      ).offsetHSL((o() - 0.5) * 0.04, (o() - 0.5) * 0.1, (o() - 0.5) * 0.08),
    W = (v, u) =>
      (v.autumn
        ? u.set(o() < 0.5 ? "#e88c3a" : "#d9622f")
        : u.set(o() < 0.5 ? "#6aa84a" : "#7fb850")
      ).offsetHSL((o() - 0.5) * 0.04, 0, (o() - 0.5) * 0.08),
    B = dt(M, T, h, U),
    Y = dt(F, T, w, W),
    I = dt(
      S,
      ge({
        color: "#7a5236",
      }),
      [...h, ...w],
      (v, u) => u.set("#ffffff"),
    ),
    X = dt(A, T, b, (v, u) =>
      u.set(v.h > 1 ? "#4f8a44" : "#78ad4c").offsetHSL(0, 0, (o() - 0.5) * 0.1),
    ),
    z = dt(
      $,
      ge({
        roughness: 0.95,
      }),
      f(l, 1600),
      (v, u) =>
        u
          .set(v.h > 1.8 ? "#a8959a" : "#b8a99f")
          .offsetHSL(0, 0, (o() - 0.5) * 0.12),
    ),
    Q = dt(
      E,
      ge({
        roughness: 0.6,
        emissive: "#3a2a00",
        emissiveIntensity: 0.15,
      }),
      f(c, 2600),
      (v, u) =>
        u.set(v.kind < 0.6 ? "#ffd64a" : v.kind < 0.82 ? "#ffffff" : "#ff9ec2"),
      {
        shadow: !1,
      },
    ),
    J = dt(
      D,
      On(
        ge({
          roughness: 0.8,
        }),
        e,
        0.6,
      ),
      f(t, 3e3),
      (v, u) =>
        u
          .set(v.inland ? "#b9a86a" : "#8dbb4a")
          .offsetHSL(0, 0, (o() - 0.5) * 0.1),
      {
        shadow: !1,
      },
    );
  a.add(B, Y, I, X, z, Q, J);
  const ue = (v) =>
      Array.from(
        {
          length: v.count,
        },
        (u, R) => {
          const N = new de();
          return (v.getColorAt(R, N), N);
        },
      ),
    me = ue(B),
    he = ue(Y),
    K = ue(X);
  function ce(v, u) {
    const R = h.filter((ee) => ee.rank < v).length,
      N = w.filter((ee) => ee.rank < v).length;
    ((B.count = R),
      (Y.count = N),
      (X.count = b.filter((ee) => ee.rank < v).length),
      (I.count = h.length + N));
    const G = new ln();
    for (let ee = R; ee < h.length; ee++)
      I.setMatrixAt(ee, G.makeScale(0, 0, 0));
    for (let ee = 0; ee < R; ee++) {
      const te = h[ee];
      I.setMatrixAt(
        ee,
        G.compose(new pe(te.x, te.y, te.z), new dn(), new pe(te.s, te.s, te.s)),
      );
    }
    I.instanceMatrix.needsUpdate = !0;
    const le = new de(),
      ye = new de("#eef2f6"),
      fe = new de("#a77c4f");
    (me.forEach((ee, te) =>
      B.setColorAt(
        te,
        le.copy(ee).lerp(ye, u ? (h[te].h > 1 ? 0.45 : 0.18) : 0),
      ),
    ),
      he.forEach((ee, te) =>
        Y.setColorAt(te, le.copy(ee).lerp(fe, u ? 0.75 : 0)),
      ),
      K.forEach((ee, te) =>
        X.setColorAt(te, le.copy(ee).lerp(fe, u ? 0.5 : 0)),
      ),
      (B.instanceColor.needsUpdate =
        Y.instanceColor.needsUpdate =
        X.instanceColor.needsUpdate =
          !0));
  }
  const se = () => [...h.slice(0, B.count), ...w.slice(0, Y.count)],
    Le = ga(o);
  a.add(Le.group);
  const re = [],
    Se = [
      [0.45, 1.95, 9],
      [-1, -1.3, 10],
      [0.55, -1.9, 7],
      [-1.9, -3.4, 8],
      [1.6, 2.3, 6],
      [5.6, -0.9, 5],
    ];
  for (const [v, u, R] of Se) {
    let N = 0;
    for (let G = 0; G < 200 && N < R; G++) {
      const le = o() * 6.28,
        ye = Math.sqrt(o()) * 0.32,
        fe = v + Math.cos(le) * ye,
        ee = u + Math.sin(le) * ye * 0.8;
      if (
        Tt(fe, ee) !== null ||
        lt("main", fe, ee).d < 0.18 ||
        lt("trib", fe, ee).d < 0.14 ||
        !m(fe, ee)
      )
        continue;
      const [te, He] = Cn(fe, ee);
      Math.hypot(te, He) > 0.5 ||
        re.some((Ne) => Math.hypot(Ne.x - fe, Ne.z - ee) < 0.09) ||
        (re.push({
          x: fe,
          z: ee,
          y: ie(fe, ee) - 0.005,
          rot: Math.round(o() * 4) * 1.57 + (o() - 0.5) * 0.3,
          s: 0.8 + o() * 0.5,
          roof: o(),
          inland: v > 4,
        }),
        N++);
    }
  }
  const Me = new Ee(0.07, 0.045, 0.05).translate(0, 0.0225, 0),
    ze = new tn([new at(-0.031, 0), new at(0.031, 0), new at(0, 0.032)]),
    Ae = new qn(ze, {
      depth: 0.078,
      bevelEnabled: !1,
    })
      .rotateY(Math.PI / 2)
      .translate(-0.039, 0.045, 0),
    Ke = new Ee(0.01, 0.022, 0.01).translate(0.018, 0.07, 0.01);
  a.add(
    dt(
      Me,
      ge({
        roughness: 0.7,
      }),
      re,
      (v, u) => u.set(v.inland ? "#e8d3b0" : o() < 0.7 ? "#f4ede2" : "#efe0c8"),
    ),
    dt(
      Ae,
      ge({
        roughness: 0.6,
      }),
      re,
      (v, u) =>
        u.set(
          v.roof < 0.45
            ? "#c85a3f"
            : v.roof < 0.7
              ? "#d98b3c"
              : v.roof < 0.88
                ? "#5f7fb8"
                : "#6f8a4a",
        ),
    ),
    dt(Ke, ge(), re, (v, u) => u.set("#8a7a70")),
  );
  const Ye = [
    {
      pts: [
        [-0.85, 1.55],
        [-0.3, 1.75],
        [0.45, 1.95],
        [1.2, 2.2],
        [1.6, 2.3],
      ],
      w: 0.03,
      col: "#d9c79c",
    },
    {
      pts: [
        [-1.55, 1.2],
        [-1.45, 0.75],
        [-1.3, 0.2],
        [-1.1, -0.6],
        [-1, -1.3],
        [-1.4, -2.4],
        [-1.9, -3.4],
      ],
      w: 0.03,
      col: "#d9c79c",
    },
    {
      pts: [
        [-1, -1.3],
        [-0.2, -1.6],
        [0.55, -1.9],
      ],
      w: 0.026,
      col: "#d9c79c",
    },
    {
      pts: [
        [-2.45, 1.95],
        [-2.6, 1.2],
        [-2.55, 0.2],
        [-2.5, -0.8],
        [Pe(-2.3) + 0.35, -2.3],
      ],
      w: 0.026,
      col: "#d9c79c",
    },
  ];
  for (const v of Ye) a.add(ya(v));
  for (const v of Ye)
    for (let u = 0; u < 60; u++) {
      const R = u / 60,
        N = Dn(v.pts, R),
        G = lt("main", N[0], N[1]);
      if (G.d < G.w * 0.8) {
        a.add(Ma(N, Dn(v.pts, Math.min(1, R + 0.02)), G));
        break;
      }
    }
  const We = Pe(-2.3) + 0.2,
    ke = -2.3,
    Te = ie(We, ke),
    $e = new Re(),
    Ze = ge({
      color: "#f6f2ea",
      roughness: 0.6,
    }),
    Oe = ge({
      color: "#c84a3a",
      roughness: 0.6,
    });
  for (let v = 0; v < 4; v++) {
    const u = new V(
      new Ue(0.046 - v * 0.004 - 0.004, 0.046 - v * 0.004, 0.07, 10),
      v % 2 ? Oe : Ze,
    );
    ((u.position.y = 0.035 + v * 0.07), (u.castShadow = !0), $e.add(u));
  }
  const Qe = new V(
    new Ue(0.042, 0.042, 0.008, 12),
    ge({
      color: "#3a3a40",
    }),
  );
  Qe.position.y = 0.285;
  const Je = new V(
    new Ue(0.022, 0.022, 0.04, 10),
    new Fe({
      color: "#fff3c4",
      emissive: "#ffd36a",
      emissiveIntensity: 3,
    }),
  );
  Je.position.y = 0.31;
  const ve = new V(new ct(0.03, 0.035, 10), Oe);
  ve.position.y = 0.348;
  const qe = new V(
    new ct(0.12, 1.2, 16, 1, !0).rotateZ(Math.PI / 2).translate(0.6, 0, 0),
    new It({
      color: "#fff2c0",
      transparent: !0,
      opacity: 0.12,
      depthWrite: !1,
      side: Mt,
    }),
  );
  ((qe.position.y = 0.31),
    $e.add(Qe, Je, ve, qe),
    $e.position.set(We, Te - 0.01, ke),
    a.add($e));
  const De = new Re(),
    nt = Pe(2.25);
  for (let v = 0; v < 9; v++) {
    const u = new V(
      new Ee(0.05, 0.008, 0.07),
      ge({
        color: v % 2 ? "#a77b52" : "#94693f",
      }),
    );
    (u.position.set(nt + 0.1 - v * 0.052, 0.035, 2.25), (u.castShadow = !0));
    const R = new V(
      new Ue(0.005, 0.005, 0.12, 5),
      ge({
        color: "#6e4b30",
      }),
    );
    (R.position.set(nt + 0.1 - v * 0.052, -0.02, 2.29), De.add(u, R));
  }
  a.add(De);
  const it = [];
  for (let v = 0; v < 5; v++) {
    const u = new Re(),
      R = new V(
        At([
          new Ee(0.13, 0.025, 0.045),
          new ct(0.0225, 0.04, 4)
            .rotateZ(-Math.PI / 2)
            .rotateX(Math.PI / 4)
            .scale(1, 0.55, 1)
            .translate(0.085, 0, 0),
        ]),
        ge({
          color: v % 2 ? "#e8e2d6" : "#c8553d",
        }),
      ),
      N = new V(
        new No(new tn([new at(0, 0), new at(0.07, 0), new at(0, 0.11)])),
        new Fe({
          color: v % 3 ? "#fbf7ee" : "#f2c14e",
          side: Mt,
          roughness: 0.7,
        }),
      );
    N.position.set(-0.03, 0.015, 0);
    const G = new V(
      new Ue(0.002, 0.002, 0.12, 4),
      ge({
        color: "#6e4b30",
      }),
    );
    (G.position.set(-0.03, 0.07, 0),
      (R.castShadow = N.castShadow = !0),
      u.add(R, N, G),
      (u.userData = {
        cx: -6.6 + (v % 3) * 1.2,
        cz: -2.5 + v * 1.1,
        rad: 0.5 + o() * 0.8,
        sp: 0.04 + o() * 0.04,
        ph: o() * 6.28,
      }),
      it.push(u),
      a.add(u));
  }
  const y = [];
  for (const [v, u] of [
    [-0.4, -2.55],
    [0.15, -2.95],
    [-0.95, -2.75],
    [0.75, -3.25],
  ]) {
    const R = ie(v, u),
      N = new Re(),
      G = new V(
        new Ue(0.006, 0.011, 0.36, 6).translate(0, 0.18, 0),
        ge({
          color: "#f3f1ee",
        }),
      ),
      le = new V(
        new Ee(0.03, 0.014, 0.014),
        ge({
          color: "#f3f1ee",
        }),
      );
    le.position.set(0, 0.365, 0);
    const ye = new Re();
    for (let fe = 0; fe < 3; fe++) {
      const ee = new V(
        new Ee(0.008, 0.16, 0.002).translate(0, 0.08, 0),
        ge({
          color: "#ffffff",
        }),
      );
      ((ee.rotation.z = (fe * Math.PI * 2) / 3), ye.add(ee));
    }
    (ye.position.set(0.018, 0.365, 0),
      (ye.rotation.y = Math.PI / 2),
      (G.castShadow = !0),
      N.add(G, le, ye),
      N.position.set(v, R - 0.01, u),
      (N.rotation.y = -0.6),
      y.push(ye),
      a.add(N));
  }
  const C = [],
    L = new ft().setFromPoints([
      new pe(0, 0, 0),
      new pe(-0.02, 0, 0.05),
      new pe(0.02, 0, 0.012),
    ]);
  L.computeVertexNormals();
  const q = new It({
    color: "#3b3346",
    side: Mt,
  });
  for (let v = 0; v < 14; v++) {
    const u = new Re(),
      R = new V(L, q),
      N = new V(L, q);
    ((N.scale.z = -1),
      u.add(R, N),
      (u.userData = {
        l: R,
        r: N,
        flock: v < 8 ? 0 : 1,
        off: new pe((o() - 0.5) * 0.5, (o() - 0.5) * 0.15, (o() - 0.5) * 0.5),
        ph: o() * 6,
      }),
      C.push(u),
      a.add(u));
  }
  const p = Sa();
  a.add(p.group);
  const H = ka(o);
  a.add(H.mesh);
  const P = ie(Ie, g.z1 - 0.06),
    d = new V(
      new Ee(0.07, 0.05, 0.06),
      ge({
        color: "#e9e1d2",
      }),
    );
  d.position.set(Ie, P + 0.025, g.z1 - 0.07);
  const x = new V(
    new ct(0.058, 0.035, 4),
    ge({
      color: "#c85a3f",
    }),
  );
  ((x.rotation.y = Math.PI / 4),
    x.position.set(Ie, P + 0.068, g.z1 - 0.07),
    (d.castShadow = x.castShadow = !0),
    a.add(d, x));
  const k = za();
  a.add(k.group);
  const j = La();
  a.add(j);
  function O(v, u, R = 0.6) {
    for (const N of y) N.rotation.x += u * (0.3 + R * 4);
    qe.rotation.y = v * 0.8;
    for (const N of it) {
      const G = N.userData,
        le = G.ph + v * G.sp;
      (N.position.set(
        G.cx + Math.cos(le) * G.rad,
        0.012 + Math.sin(v * 1.4 + G.ph) * 0.006,
        G.cz + Math.sin(le) * G.rad * 0.6,
      ),
        (N.rotation.y = -le - Math.PI / 2),
        (N.rotation.z = Math.sin(v * 1.1 + G.ph) * 0.06));
    }
    for (const N of C) {
      const G = N.userData,
        le = v * 0.18 + G.flock * 3,
        ye = G.flock ? 2.5 : -2.5,
        fe = G.flock ? -1.6 : -0.5,
        ee = G.flock ? 1.6 : 2.2;
      (N.position.set(
        ye + Math.cos(le) * ee + G.off.x,
        (G.flock ? 3.6 : 3) + G.off.y + Math.sin(v * 0.7 + G.ph) * 0.05,
        fe + Math.sin(le) * ee * 0.7 + G.off.z,
      ),
        (N.rotation.y = -le));
      const te = Math.sin(v * 9 + G.ph) * 0.6;
      ((G.l.rotation.x = te), (G.r.rotation.x = -te));
    }
    p.fall.material.uniforms.uTime.value = v;
  }
  return {
    group: a,
    setVeg: ce,
    visibleTrees: se,
    city: Le,
    dam: p,
    delta: H,
    canal: k,
    plane: j,
    tick: O,
  };
}
function ga(e) {
  const a = new Re(),
    o = [],
    r = 1 / 3.6;
  for (let M = _e.x0 + 0.06; M < _e.x1 - 0.06; M += r)
    for (let F = _e.z0 + 0.06; F < _e.z1 - 0.06; F += r)
      for (const [S, A] of [
        [0.07, 0.07],
        [0.18, 0.07],
        [0.07, 0.18],
        [0.18, 0.18],
      ]) {
        const $ = Math.round(M / r) * r - r / 2 + S + 0.015,
          E = Math.round(F / r) * r - r / 2 + A + 0.015;
        if (
          $ < _e.x0 + 0.05 ||
          $ > _e.x1 - 0.05 ||
          E < _e.z0 + 0.05 ||
          E > _e.z1 - 0.05 ||
          lt("main", $, E).d < 0.22
        )
          continue;
        const D = Hn($, E),
          T = Math.max(0, 1 - D * 1.25),
          U = T > 0.45 && e() < 0.6;
        o.push({
          x: $,
          z: E,
          rank: D,
          w: 0.05 + e() * 0.035,
          d: 0.05 + e() * 0.035,
          h: 0.04 + T * T * (0.24 + e() * 0.34) + e() * 0.04,
          tower: U,
          tone: e(),
        });
      }
  o.sort((M, F) => M.rank - F.rank);
  const i = new Ee(1, 1, 1).translate(0, 0.5, 0),
    n = ma(),
    l = new Fe({
      map: n,
      roughness: 0.45,
      metalness: 0.15,
    });
  l.onBeforeCompile = (M) => {
    M.vertexShader = M.vertexShader.replace(
      "#include <uv_vertex>",
      `#include <uv_vertex>
#ifdef USE_MAP
vec3 sc = vec3(length(instanceMatrix[0].xyz), length(instanceMatrix[1].xyz), length(instanceMatrix[2].xyz));
vMapUv = vec2((position.x + position.z) * (sc.x + sc.z) * 9.0, position.y * sc.y * 9.0);
#endif`,
    );
  };
  const c = new Ht(i, l, o.length),
    t = new Ht(
      new Ee(1, 0.012, 1),
      new Fe({
        roughness: 0.8,
      }),
      o.length,
    ),
    m = new Ht(
      new Ee(1, 1, 1).translate(0, 0.5, 0),
      new Fe({
        color: "#d9dde3",
        roughness: 0.6,
      }),
      o.length,
    ),
    f = new ln(),
    h = new dn(),
    w = new de();
  (o.forEach((M, F) => {
    const S = ie(M.x, M.z) - 0.01;
    (f.compose(new pe(M.x, S, M.z), h, new pe(M.w, M.h, M.d)),
      c.setMatrixAt(F, f),
      w.set(
        M.tower
          ? M.tone < 0.5
            ? "#9fc3e6"
            : "#b9d4ea"
          : M.tone < 0.35
            ? "#f2ede4"
            : M.tone < 0.6
              ? "#e9dcc6"
              : M.tone < 0.8
                ? "#d8dee6"
                : "#f0d9c8",
      ),
      c.setColorAt(F, w),
      f.compose(
        new pe(M.x, S + M.h + 0.006, M.z),
        h,
        new pe(M.w * 0.98, 1, M.d * 0.98),
      ),
      t.setMatrixAt(F, f),
      t.setColorAt(F, w.set("#8b8a88")),
      f.compose(
        new pe(M.x + (M.tone - 0.5) * M.w * 0.4, S + M.h, M.z),
        h,
        new pe(
          M.w * (M.tower ? 0.6 : 0.3),
          M.tower ? M.h * 0.12 : 0.012,
          M.d * (M.tower ? 0.6 : 0.3),
        ),
      ),
      m.setMatrixAt(F, f));
  }),
    (c.castShadow = c.receiveShadow = m.castShadow = !0),
    (t.receiveShadow = !0),
    a.add(c, t, m));
  function b(M, F) {
    const S = o.filter((A) => A.rank < M).length;
    ((c.count = t.count = m.count = S),
      o.forEach((A, $) =>
        t.setColorAt($, w.set(F && $ % 3 !== 1 ? "#6aa84f" : "#8b8a88")),
      ),
      (t.instanceColor.needsUpdate = !0));
  }
  return {
    group: a,
    set: b,
    lots: o,
  };
}
function Dn(e, a) {
  const o = e.length - 1,
    r = Math.min(o - 1e-6, a * o),
    i = Math.floor(r),
    n = r - i;
  return [Z(e[i][0], e[i + 1][0], n), Z(e[i][1], e[i + 1][1], n)];
}
function ya({ pts: e, w: a, col: o }) {
  const r = new Nt(e.map(([m, f]) => new pe(m, 0, f))),
    i = Math.round(r.getLength() / 0.03),
    n = [],
    l = [];
  for (let m = 0; m <= i; m++) {
    const f = r.getPoint(m / i),
      h = r.getTangent(m / i),
      w = -h.z,
      b = h.x;
    for (const M of [-1, 1]) {
      const F = f.x + w * a * M,
        S = f.z + b * a * M,
        A = Math.max(ie(F, S), Tt(F, S) ?? -9) + 0.008;
      n.push(F, A, S);
    }
    m &&
      l.push(
        (m - 1) * 2,
        m * 2,
        (m - 1) * 2 + 1,
        m * 2,
        m * 2 + 1,
        (m - 1) * 2 + 1,
      );
  }
  const c = new ft();
  (c.setAttribute("position", new ht(n, 3)),
    c.setIndex(l),
    c.computeVertexNormals());
  const t = new V(
    c,
    new Fe({
      color: o,
      roughness: 0.95,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  );
  return ((t.receiveShadow = !0), t);
}
function Ma(e, a, o) {
  const r = new Re(),
    i = Math.atan2(a[1] - e[1], a[0] - e[0]),
    n = Math.max(ie(e[0], e[1]), o.bed + 0.05) + 0.06,
    l = o.w * 2 + 0.22,
    c = new V(
      new Ee(l, 0.012, 0.07),
      ge({
        color: "#c9b393",
      }),
    );
  c.position.y = n;
  const t = new V(
    new cn(o.w * 0.9, 0.012, 6, 16, Math.PI),
    ge({
      color: "#b8a284",
    }),
  );
  t.position.y = n - o.w * 0.9 + 0.005;
  for (const m of [-1, 1]) {
    const f = new V(
      new Ee(l, 0.016, 0.006),
      ge({
        color: "#a68f70",
      }),
    );
    (f.position.set(0, n + 0.014, m * 0.033), r.add(f));
  }
  return (
    (c.castShadow = t.castShadow = !0),
    r.add(c, t),
    r.position.set(e[0], 0, e[1]),
    (r.rotation.y = -i),
    r
  );
}
function Sa() {
  const e = new Re(),
    a = xe.crest - (xe.bed - 0.08),
    o = new tn([
      new at(-0.02, 0),
      new at(0.12, 0),
      new at(0.015, a),
      new at(-0.02, a),
    ]),
    r = new qn(o, {
      depth: 0.56,
      bevelEnabled: !1,
    }).translate(0, 0, -0.28),
    i = new V(
      r,
      ge({
        color: "#d6d0c4",
        roughness: 0.8,
      }),
    );
  (i.position.set(xe.x, xe.bed - 0.08, xe.z),
    (i.rotation.y = -xe.angle),
    (i.castShadow = i.receiveShadow = !0));
  const n = new V(
    new Ee(0.05, 0.012, 0.58),
    ge({
      color: "#6d6c6a",
    }),
  );
  (n.position.set(0, a + 0.006, 0), i.add(n));
  for (const w of [-0.07, 0, 0.07]) {
    const b = new V(
      new Ee(0.03, 0.05, 0.04),
      ge({
        color: "#4d6a80",
        metalness: 0.5,
        roughness: 0.4,
      }),
    );
    (b.position.set(0, a + 0.03, w), i.add(b));
  }
  const l = new $t({
      transparent: !0,
      depthWrite: !1,
      side: Mt,
      uniforms: {
        uTime: {
          value: 0,
        },
        uOn: {
          value: 1,
        },
      },
      vertexShader:
        "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `uniform float uTime; uniform float uOn; varying vec2 vUv;
      float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      void main(){ float col = floor(vUv.x * 14.0);
        float s = fract(vUv.y * 3.0 + uTime * (1.6 + hh(vec2(col, 1.0))) + hh(vec2(col, 2.0)));
        vec3 c = mix(vec3(0.55, 0.82, 0.98), vec3(1.0), smoothstep(0.5, 0.9, s));
        float a = (0.55 + 0.35 * s) * smoothstep(0.0, 0.15, vUv.x) * smoothstep(1.0, 0.85, vUv.x) * uOn;
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
      }`,
    }),
    c = new jn(1, 1, 1, 1),
    t = c.attributes.position,
    m = [0.02, a],
    f = [0.13, 0];
  for (let w = 0; w < t.count; w++) {
    const b = t.getX(w) + 0.5,
      M = t.getY(w) + 0.5;
    t.setXYZ(w, Z(f[0], m[0], M) + 0.004, Z(f[1], m[1], M), (b - 0.5) * 0.16);
  }
  c.computeVertexNormals();
  const h = new V(c, l);
  return (
    (h.renderOrder = 7),
    i.add(h),
    e.add(i),
    {
      group: e,
      fall: h,
      setOn: (w) => (l.uniforms.uOn.value = w ? 1 : 0.25),
    }
  );
}
function ka(e) {
  const a = Xe.main.findIndex((c) => c.x < Pe(c.z) + 0.02),
    o = Xe.main[Math.max(0, a - 1)],
    r = document.createElement("canvas");
  r.width = r.height = 256;
  const i = r.getContext("2d");
  for (let c = 0; c < 70; c++) {
    const t = -Math.PI / 2 + (e() - 0.5) * 2.2,
      m = e() * 90,
      f = 128 + Math.cos(t) * m,
      h = 200 + Math.sin(t) * m,
      w = 30 + e() * 40,
      b = i.createRadialGradient(f, h, 0, f, h, w);
    (b.addColorStop(0, "rgba(255,255,255,.5)"),
      b.addColorStop(1, "rgba(255,255,255,0)"),
      (i.fillStyle = b),
      i.beginPath(),
      i.arc(f, h, w, 0, Math.PI * 2),
      i.fill());
  }
  ((i.globalCompositeOperation = "destination-out"),
    (i.strokeStyle = "rgba(0,0,0,.85)"));
  for (let c = 0; c < 5; c++) {
    ((i.lineWidth = 3 - c * 0.3), i.beginPath(), i.moveTo(128, 228));
    const t = -Math.PI / 2 + (c - 2) * 0.32;
    (i.quadraticCurveTo(
      128 + Math.cos(t) * 50 + (e() - 0.5) * 20,
      228 + Math.sin(t) * 50,
      128 + Math.cos(t) * 120,
      228 + Math.sin(t) * 120,
    ),
      i.stroke());
  }
  const n = new jn(1, 1)
      .rotateX(-Math.PI / 2)
      .rotateY(Math.PI / 2)
      .translate(-0.38, 0, 0),
    l = new V(
      n,
      new Fe({
        color: "#d6be8a",
        roughness: 1,
        transparent: !0,
        alphaMap: new St(r),
        depthWrite: !1,
      }),
    );
  return (
    l.position.set(o.x + 0.05, 0.006, o.z),
    (l.renderOrder = 3),
    l.scale.setScalar(0.001),
    {
      mesh: l,
      mouth: o,
    }
  );
}
function za() {
  const e = new Re(),
    a = [
      [1.6, -0.86],
      [1.85, -1.3],
      [2.15, -1.75],
      [2.45, -2.1],
    ],
    o = [
      [4.25, -2.15],
      [4.6, -1.85],
      [4.95, -1.55],
      [5.25, -1.3],
    ],
    r = (w, b) =>
      new Nt(w.map(([M, F]) => new pe(M, Math.max(ie(M, F), xe.level) + b, F))),
    i = r(a, 0.03),
    n = r(o, 0.03),
    l = new Oo(i.getPoint(1), n.getPoint(0)),
    c = new Fe({
      color: "#5fc3e8",
      roughness: 0.25,
      metalness: 0.1,
      emissive: "#0c4a66",
      emissiveIntensity: 0.6,
    }),
    t = (w) => new V(new nn(w, 40, 0.018, 8, !1), c);
  e.add(t(i), t(n));
  const m = new ft().setFromPoints(l.getPoints(30)),
    f = new Do(
      m,
      new Uo({
        color: "#8fe3ff",
        dashSize: 0.08,
        gapSize: 0.06,
        depthTest: !1,
        transparent: !0,
        opacity: 0.9,
      }),
    );
  (f.computeLineDistances(), (f.renderOrder = 9), e.add(f));
  for (const w of [i.getPoint(1), n.getPoint(0)]) {
    const b = new V(
      new cn(0.032, 0.011, 6, 12),
      ge({
        color: "#9a9084",
      }),
    );
    (b.position.copy(w), b.lookAt(l.getPoint(0.5)), e.add(b));
  }
  e.visible = !1;
  const h = [
    ...i.getPoints(30),
    ...l.getPoints(20).slice(1),
    ...n.getPoints(30).slice(1),
  ];
  return {
    group: e,
    path: h,
  };
}
function La() {
  const e = new Re(),
    a = ge({
      color: "#f1f1ec",
      roughness: 0.4,
      metalness: 0.3,
    }),
    o = new V(new Go(0.025, 0.16, 4, 8), a);
  o.rotation.z = Math.PI / 2;
  const r = new V(new Ee(0.06, 0.006, 0.3), a),
    i = new V(
      new Ee(0.04, 0.05, 0.006),
      ge({
        color: "#d9553d",
      }),
    );
  i.position.set(-0.09, 0.025, 0);
  const n = new V(new Ee(0.035, 0.005, 0.1), a);
  return (
    n.position.set(-0.09, 0.005, 0),
    e.add(o, r, i, n),
    e.scale.setScalar(2.4),
    (e.visible = !1),
    e
  );
}
const Kt = {
    top: "#353b4d",
    mid: "#4f5668",
    horizon: "#6d7383",
    ground: "#5c606b",
  },
  $a = new de(Ge.horizon),
  Ca = new de("#5e6473");
function Aa(e) {
  const { scene: a, sun: o, hemi: r, renderer: i } = e,
    n = document.createElement("canvas");
  ((n.width = 8), (n.height = 512));
  const l = n.getContext("2d"),
    c = new St(n);
  ((c.colorSpace = Pt), (a.background = c));
  const t = new de(),
    m = new de(),
    f = (I, X, z, Q) =>
      t.set(I).lerp(m.set(X), z).lerp(m.set("#e8e6ff"), Q).getStyle();
  let h = "";
  function w(I, X) {
    const z = `${I.toFixed(3)}|${X.toFixed(2)}`;
    if (z === h) return;
    h = z;
    const Q = l.createLinearGradient(0, 0, 0, 512);
    (Q.addColorStop(0, f(Ge.top, Kt.top, I, X)),
      Q.addColorStop(0.42, f(Ge.mid, Kt.mid, I, X)),
      Q.addColorStop(0.72, f(Ge.horizon, Kt.horizon, I, X)),
      Q.addColorStop(1, f(Ge.ground, Kt.ground, I, X)),
      (l.fillStyle = Q),
      l.fillRect(0, 0, 8, 512),
      (c.needsUpdate = !0));
  }
  w(0, 0);
  const b = new Ln("#dfe4ff", 0);
  (b.position.set(2, 20, 4), a.add(b));
  const M = new It({
      color: new de(5, 5.4, 8),
      toneMapped: !1,
      transparent: !0,
    }),
    F = new It({
      color: new de(1.2, 1.3, 2.4),
      toneMapped: !1,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
    });
  let S = null,
    A = 0,
    $ = 2,
    E = 0,
    D = 0,
    T = 0;
  function U(I, X, z, Q) {
    if (z === 0) return [I, X];
    const J = I.clone().lerp(X, 0.5),
      ue = I.distanceTo(X);
    return (
      (J.x += (Math.random() - 0.5) * ue * Q),
      (J.z += (Math.random() - 0.5) * ue * Q * 0.6),
      [...U(I, J, z - 1, Q).slice(0, -1), ...U(J, X, z - 1, Q)]
    );
  }
  function W(I) {
    const X = I.filter((re) => re.kind !== "deco" && re.w > 0.6),
      z = X.length ? X[Math.floor(Math.random() * X.length)] : null,
      Q = z ? z.x + (Math.random() - 0.5) * 0.5 : -2 + Math.random() * 7,
      J = z ? z.z : -2 + Math.random() * 4,
      ue = new pe(Q, z ? z.y - 0.1 : 3, J),
      me = Math.max(
        g.x0 + 0.2,
        Math.min(g.x1 - 0.2, Q + (Math.random() - 0.5) * 0.6),
      ),
      he = Math.max(
        g.z0 + 0.2,
        Math.min(g.z1 - 0.2, J + (Math.random() - 0.5) * 0.4),
      ),
      K = new pe(me, Math.max(0, ie(me, he)), he),
      ce = U(ue, K, 5, 0.35),
      se = new Re(),
      Le = (re, Se, Me) =>
        se.add(
          new V(
            new nn(new Nt(re, !1, "catmullrom", 0), re.length * 3, Se, 5, !1),
            Me,
          ),
        );
    (Le(ce, 0.016, M), Le(ce, 0.075, F));
    for (let re = 0; re < 3; re++) {
      const Se = ce[2 + Math.floor(Math.random() * (ce.length - 6))],
        Me = Se.clone().add(
          new pe(
            (Math.random() - 0.5) * 0.9,
            -0.3 - Math.random() * 0.6,
            (Math.random() - 0.5) * 0.4,
          ),
        );
      Le(U(Se, Me, 3, 0.4), 0.006, M);
    }
    return (a.add(se), se);
  }
  function B() {
    S && (a.remove(S), S.traverse((I) => I.geometry?.dispose()), (S = null));
  }
  function Y(I, X, z) {
    if (
      ((D += (X - D) * Math.min(1, I * 1.5)),
      D > 0.35 &&
        (($ -= I),
        $ <= 0 &&
          (B(),
          (S = W(z)),
          T++,
          (A = 0),
          (E = 1),
          ($ = 1.2 + (Math.random() * 3.2) / (0.5 + D)))),
      S)
    ) {
      A += I;
      const J = A < 0.07 || (A > 0.12 && A < 0.2);
      ((S.visible = J), A > 0.3 && B());
    }
    E = Math.max(0, E - I * 3.2);
    const Q = E * (S && S.visible ? 1 : 0.5);
    return (
      w(D, Q * 0.45),
      (o.intensity = Rt.lerp(3, 0.3, D)),
      (r.intensity = Rt.lerp(1.25, 0.5, D) + Q * 1.4),
      r.color.set("#cfc9ff").lerp(m.set("#8a90a8"), D),
      (b.intensity = Q * 4.5),
      a.fog.color.copy($a).lerp(Ca, D),
      (a.fog.near = Rt.lerp(48, 18, D)),
      (a.fog.far = Rt.lerp(130, 62, D)),
      (i.toneMappingExposure = Rt.lerp(1, 0.74, D) + Q * 0.3),
      D
    );
  }
  return {
    update: Y,
    get level() {
      return D;
    },
    get strikes() {
      return T;
    },
    get bolt() {
      return S;
    },
  };
}
const Ta = `
uniform float uTime;
uniform float uWaves;
uniform float uRise;
varying vec3 vW;
varying vec2 vFlow;
attribute vec2 flow;
void main(){
  vec3 p = position;
  vec4 w = modelMatrix * vec4(p, 1.0);
  // 外海的涌浪：几组方向不同的正弦波
  float k = uWaves;
  w.y += k * (0.012 * sin(w.x * 2.1 + uTime * 1.3 * (0.7 + 0.3 * k)) + 0.008 * sin(w.z * 3.3 - uTime * 1.7 + w.x) + 0.005 * sin((w.x + w.z) * 5.0 + uTime * 2.4));
  w.y += uRise; // 河流涨水
  vW = w.xyz;
  vFlow = flow;
  gl_Position = projectionMatrix * viewMatrix * w;
}`,
  Pa = `
uniform float uTime;
uniform sampler2D uNormal;
uniform sampler2D uHeight;
uniform vec4 uBounds;
uniform vec3 uSun;
uniform vec3 uSunColor;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uDeep;
uniform vec3 uShallow;
uniform vec3 uMudColor;
uniform float uMud;
uniform float uLevel;
uniform float uDepthK;
uniform float uIsRiver;
uniform float uSpeed;
uniform float uAlpha;
uniform float uFoam;
uniform float uFront;
uniform vec3 uMaskCh;
uniform float uStorm;
uniform float uWaves;
varying vec3 vW;
varying vec2 vFlow;

vec3 nrm(vec2 uv){ return texture2D(uNormal, uv).xzy * 2.0 - 1.0; }
float hh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(hh(i), hh(i+vec2(1,0)), f.x), mix(hh(i+vec2(0,1)), hh(i+vec2(1,1)), f.x), f.y); }

void main(){
  vec2 huv = (vW.xz - uBounds.xy) / (uBounds.zw - uBounds.xy);
  vec4 ht = texture2D(uHeight, huv);
  float ground = ht.r;
  float level = uIsRiver > 0.5 ? vW.y : uLevel;
  float depth = level - ground;
  if (uIsRiver < 0.5 && depth < -0.002) discard;
  if (vW.z > uFront) discard;
  // 遮罩：水库、湖泊只在各自连通的库盆 / 湖盆里有水
  if (dot(uMaskCh, vec3(1.0)) > 0.0 && dot(ht.gba, uMaskCh) < 0.5) discard;
  vec3 n;
  float foam = 0.0;
  vec3 col;
  vec3 V = normalize(cameraPosition - vW);
  if (uIsRiver > 0.5) {
    // 河流：明亮的蓝色，顺流移动的白色流线与浅浅的箭头纹，岸边泛白
    vec2 uv = vFlow * vec2(1.0, 0.35);
    n = normalize(nrm(uv * 1.6 - vec2(uTime * uSpeed, 0.0)) + nrm(uv * 3.1 - vec2(uTime * uSpeed * 1.6, 0.3)) * 0.6 + vec3(0.0, 2.6, 0.0));
    float across = abs(vFlow.y);
    col = mix(uDeep, uShallow, smoothstep(0.2, 1.0, across));
    float streak = vn(vec2(vFlow.x * 1.4 - uTime * uSpeed * 2.2, vFlow.y * 7.0));
    streak = smoothstep(0.72, 0.9, streak) * (1.0 - smoothstep(0.6, 0.95, across));
    float chev = 1.0 - smoothstep(0.0, 0.05, abs(fract(vFlow.x * 0.45 - uTime * uSpeed * 0.5) - 0.5 + across * 0.22));
    chev *= step(across, 0.55) * 0.35;
    foam = streak * 0.7 + chev + smoothstep(0.78, 1.0, across) * 0.6;
    col = mix(col, uMudColor, uMud * 0.75);
  } else {
    vec2 uv = vW.xz * 0.55;
    n = normalize(nrm(uv + vec2(uTime * 0.02, uTime * 0.013)) + nrm(uv * 2.3 - vec2(uTime * 0.03, -uTime * 0.021)) * 0.7 + nrm(uv * 7.0 + uTime * 0.05) * 0.25 + vec3(0.0, 1.8, 0.0));
    // 水色：浅处青绿、中段湖蓝、深处钴蓝
    float d1 = 1.0 - exp(-max(depth, 0.0) * uDepthK);
    float d2 = 1.0 - exp(-max(depth, 0.0) * uDepthK * 0.6);
    col = mix(uShallow, mix(vec3(0.17, 0.62, 0.84), uDeep, d2), d1);
    // 岸边：一道实心白边 + 一圈圈向岸推进的浪花带（被噪声打碎）
    float nz = vn(vW.xz * 6.0 + uTime * 0.15);
    float edge = smoothstep(0.016, 0.004, depth);
    float bands = smoothstep(0.55, 0.85, sin(depth * 70.0 - uTime * 1.6 + nz * 3.0)) * smoothstep(0.09, 0.02, depth);
    foam = uFoam * max(edge, bands * 0.75 * step(0.35, nz));
    // 大风与暴雨：开阔海面上翻起白浪
    float cap = step(0.8 - 0.12 * uStorm, vn(vW.xz * 3.2 + vec2(uTime * 0.5, uTime * 0.2))) * step(0.04, depth);
    foam = max(foam, cap * (uWaves - 1.0) * 0.45);
    col = mix(col, uMudColor, uMud * smoothstep(0.3, 0.0, d2) * 0.6);
  }
  col *= 1.0 - 0.3 * uStorm;
  float fres = 0.02 + 0.98 * pow(1.0 - max(dot(n, V), 0.0), 5.0);
  vec3 R = reflect(-V, n);
  vec3 sky = mix(uHorizon, uZenith, pow(clamp(R.y, 0.0, 1.0), 0.6));
  float lit = 0.7 + 0.3 * max(dot(n, uSun), 0.0);
  col = mix(col * lit, sky, fres * 0.35);
  // 阳光下的碎光
  float spec = pow(max(dot(R, uSun), 0.0), 300.0) * 3.0;
  float glint = step(0.985, vn(vW.xz * 38.0 + n.xz * 5.0 + uTime * 0.4)) * 0.8 * (1.0 - uIsRiver * 0.5);
  col += uSunColor * (spec + glint);
  col = mix(col, vec3(0.97, 0.99, 1.0), clamp(foam, 0.0, 1.0));
  float a = uIsRiver > 0.5 ? uAlpha * smoothstep(1.0, 0.82, abs(vFlow.y)) : uAlpha * mix(0.55, 1.0, smoothstep(0.0, 0.06, depth)) + foam * 0.4;
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`;
function Yt({
  normal: e,
  height: a,
  sky: o,
  level: r = 0,
  deep: i = "#0c3b5c",
  shallow: n = "#2aa39a",
  depthK: l = 3.2,
  river: c = !1,
  waves: t = 0,
  alpha: m = 0.92,
  foam: f = 1,
  speed: h = 0.12,
}) {
  return new $t({
    vertexShader: Ta,
    fragmentShader: Pa,
    transparent: !0,
    depthWrite: !c,
    side: c ? Mt : Vo,
    uniforms: {
      uTime: {
        value: 0,
      },
      uNormal: {
        value: e,
      },
      uHeight: {
        value: a,
      },
      uBounds: {
        value: new eo(g.x0, g.z0, g.x1, g.z1),
      },
      uSun: o.sun,
      uSunColor: o.sunColor,
      uZenith: o.zenith,
      uHorizon: o.horizon,
      uDeep: {
        value: new de(i),
      },
      uShallow: {
        value: new de(n),
      },
      uMudColor: {
        value: new de("#8a6a3e"),
      },
      uMud: {
        value: 0,
      },
      uLevel: {
        value: r,
      },
      uDepthK: {
        value: l,
      },
      uIsRiver: {
        value: c ? 1 : 0,
      },
      uSpeed: {
        value: h,
      },
      uAlpha: {
        value: m,
      },
      uFoam: {
        value: f,
      },
      uWaves: {
        value: t,
      },
      uFront: {
        value: g.z1,
      },
      uMaskCh: {
        value: new pe(0, 0, 0),
      },
      uStorm: {
        value: 0,
      },
      uRise: {
        value: 0,
      },
    },
  });
}
function vn(e, a, o, r, i, n, l = 1) {
  const c = new jn(
    a - e,
    r - o,
    l,
    Math.max(1, Math.round((l * (r - o)) / (a - e))),
  );
  (c.rotateX(-Math.PI / 2),
    c.translate((e + a) / 2, i, (o + r) / 2),
    c.setAttribute(
      "flow",
      new ht(new Float32Array(c.attributes.position.count * 2), 2),
    ));
  const t = new V(c, n);
  return ((t.renderOrder = 2), t);
}
function Zt(e, a, { skip: o = () => !1, lift: r = 0.035, widen: i = 1 } = {}) {
  const n = [],
    l = [],
    c = [];
  let t = 0;
  for (let h = 0; h < e.length; h++) {
    const w = e[h],
      b = e[Math.min(e.length - 1, h + 1)],
      M = e[Math.max(0, h - 1)];
    let F = b.x - M.x,
      S = b.z - M.z;
    const A = Math.hypot(F, S) || 1;
    ((F /= A), (S /= A));
    const $ = w.w * i,
      E = w.bed + r;
    (n.push(w.x - S * $, E, w.z + F * $, w.x + S * $, E, w.z - F * $),
      l.push(w.s * 3, -1, w.s * 3, 1),
      h > 0 && !o(w) && !o(M) && c.push(t - 2, t - 1, t, t - 1, t + 1, t),
      (t += 2));
  }
  const m = new ft();
  (m.setAttribute("position", new ht(n, 3)),
    m.setAttribute("flow", new ht(l, 2)),
    m.setIndex(c));
  const f = new V(m, a);
  return ((f.renderOrder = 3), f);
}
function Ra(e) {
  const a = ta(e),
    { scene: o, camera: r, controls: i, renderer: n } = a,
    l = {
      value: 0,
    },
    c = {
      sun: {
        value: a.sunDir.clone(),
      },
      sunColor: {
        value: new de("#fff1dc"),
      },
      zenith: {
        value: new de(Ge.top),
      },
      horizon: {
        value: new de(Ge.horizon),
      },
    },
    t = sa();
  o.add(t.mesh);
  const m = la();
  (o.add(m.group), o.add(fa()));
  const f = ha(),
    h = pa(),
    w = Yt({
      normal: h,
      height: f,
      sky: c,
      level: 0,
      deep: "#1f5aa8",
      shallow: "#6fe0d2",
      depthK: 3,
      waves: 1,
      alpha: 0.94,
    }),
    b = vn(g.x0, -1.9, g.z0, g.z1, 0, w, 220);
  o.add(b);
  const M = Yt({
    normal: h,
    height: f,
    sky: c,
    level: ne.level,
    deep: "#1d7fa8",
    shallow: "#7fe3d6",
    depthK: 14,
    alpha: 0.94,
    foam: 0.8,
  });
  M.uniforms.uMaskCh.value.set(0, 1, 0);
  const F = vn(4.6, 8.5, -2.2, 2.4, ne.level, M, 1);
  o.add(F);
  const S = Yt({
    normal: h,
    height: f,
    sky: c,
    level: xe.level,
    deep: "#1e6f9a",
    shallow: "#6fd6cf",
    depthK: 10,
    alpha: 0.95,
    foam: 0.7,
  });
  S.uniforms.uMaskCh.value.set(1, 0, 0);
  const A = vn(xe.x - 0.02, 2.4, -1.5, 0.4, xe.level, S, 1);
  o.add(A);
  const $ = Yt({
      normal: h,
      height: f,
      sky: c,
      river: !0,
      deep: "#2f8fe8",
      shallow: "#7cd0f7",
      depthK: 30,
      alpha: 0.97,
      foam: 0,
      speed: 0.4,
    }),
    E = new Re();
  (E.add(
    Zt(Xe.main, $, {
      skip: (K) => kt(K.x, K.z) || K.x < Pe(K.z) + 0.04,
    }),
    Zt(Xe.trib, $),
    Zt(Xe.inland, $),
  ),
    o.add(E));
  const D = Zt(Xe.main, $, {
    skip: (K) => !kt(K.x, K.z),
  });
  ((D.visible = !1), o.add(D));
  const T = ba(l);
  o.add(T.group);
  const U = {
      visible: T.visibleTrees,
    },
    W = Aa(a);
  let B = "",
    Y = "";
  function I({
    veg: K,
    impervious: ce,
    sponge: se,
    winter: Le,
    snowLine: re,
    wet: Se,
    oasis: Me,
    mud: ze,
    pumpDraw: Ae,
    intrusion: Ke,
    divert: Ye,
    reservoir: We = !0,
  }) {
    const ke = t.U;
    ((ke.uVeg.value = K),
      (ke.uUrban.value = ce),
      (ke.uSponge.value = se ? 1 : 0),
      (ke.uWinter.value = Le ? 1 : 0),
      (ke.uSnow.value = re),
      (ke.uWet.value = Se),
      (ke.uOasis.value = Me));
    const Te = `${K.toFixed(3)}|${ce.toFixed(3)}|${se}|${Le}`;
    (Te !== Y && ((Y = Te), T.city.set(ce, se), T.setVeg(K, Le)),
      ($.uniforms.uMud.value = ze),
      (w.uniforms.uMud.value = ze * 0.5),
      (T.canal.group.visible = Ye > 0),
      (T.dam.group.visible = We),
      (A.visible = We),
      (D.visible = !We));
    const $e = `${Math.round(Ae)}|${Ke.toFixed(2)}`;
    $e !== B &&
      ((B = $e),
      m.recolor({
        drawdown: Ae,
        intrusion: Ke,
      }));
  }
  function X(K, ce = 0, se = 0, Le = 1, re = 1) {
    ((t.U.uHiOn.value = K ? 1 : 0), t.U.uHi.value.set(ce, se, Le, re));
  }
  let z = 0.6;
  function Q({
    wind: K,
    storm: ce,
    warm: se,
    rise: Le,
    lakeLevel: re,
    resLevel: Se,
    clouds: Me,
    dt: ze,
  }) {
    z = K;
    const Ae = W.update(ze, ce, Me);
    ((po.value = 0.45 + K * 1.4 + Ae * 2.6),
      (w.uniforms.uWaves.value = 0.6 + K * 1.3 + Ae * 1.8));
    for (const Ke of [w, M, S, $]) Ke.uniforms.uStorm.value = Ae;
    return (
      ($.uniforms.uRise.value = Le),
      (t.U.uIce.value = 3 + se * 0.28),
      (M.uniforms.uLevel.value = re),
      (F.position.y = re - ne.level),
      (S.uniforms.uLevel.value = Se),
      (A.position.y = Se - xe.level),
      Ae
    );
  }
  let J = 0;
  function ue(K) {
    const ce = Math.min(0.05, Math.max(0, K - J));
    ((J = K), (l.value = K));
    for (const se of [w, M, S, $, m.seaMat]) se.uniforms.uTime.value = K;
    ((t.U.uTime.value = K), (m.HU.uTime.value = K), T.tick(K, ce, z));
  }
  let me = performance.now();
  function he() {
    const K = performance.now();
    (a.render((K - me) / 1e3), (me = K));
  }
  return {
    renderer: n,
    scene: o,
    camera: r,
    controls: i,
    resize: a.resize,
    render: he,
    setLand: I,
    highlight: X,
    tick: ue,
    terrain: {
      mesh: t.mesh,
    },
    faces: {
      front: m.front,
    },
    oceanMesh: b,
    forest: U,
    delta: T.delta,
    canal: T.canal,
    plane: T.plane,
    dynamics: Q,
    weather: W,
  };
}
const Bt = {
    sea: new de("#5ab8ff"),
    seaLand: new de("#ffb347"),
    land: new de("#7ee07a"),
  },
  wn = g.z1 + 0.012;
function Et(e, a, { additive: o = !1 } = {}) {
  const r = new ft(),
    i = new Float32Array(e * 3),
    n = new Float32Array(e * 3),
    l = new Float32Array(e),
    c = new Float32Array(e);
  (r.setAttribute("position", new rt(i, 3).setUsage(vt)),
    r.setAttribute("aColor", new rt(n, 3).setUsage(vt)),
    r.setAttribute("aAlpha", new rt(l, 1).setUsage(vt)),
    r.setAttribute("aSize", new rt(c, 1).setUsage(vt)));
  const t = new $t({
      transparent: !0,
      depthWrite: !1,
      blending: o ? oo : Xo,
      uniforms: {
        uMap: {
          value: va(),
        },
        uScale: {
          value: 400,
        },
      },
      vertexShader: `attribute vec3 aColor; attribute float aAlpha; attribute float aSize; uniform float uScale;
      varying vec3 vC; varying float vA;
      void main(){ vC = aColor; vA = aAlpha; vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uScale / -mv.z; gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D uMap; varying vec3 vC; varying float vA;
      void main(){ float a = texture2D(uMap, gl_PointCoord).a * vA; if (a < 0.01) discard; gl_FragColor = vec4(vC, a);
        #include <colorspace_fragment>
      }`,
    }),
    m = new Ko(r, t);
  return (
    (m.frustumCulled = !1),
    (m.renderOrder = 6),
    {
      n: e,
      size: a,
      pts: m,
      g: r,
      pos: i,
      col: n,
      alpha: l,
      sz: c,
      count: 0,
      x: new Float32Array(e),
      y: new Float32Array(e),
      z: new Float32Array(e),
      vx: new Float32Array(e),
      vy: new Float32Array(e),
      vz: new Float32Array(e),
      life: new Float32Array(e),
      max: new Float32Array(e),
      kind: new Uint8Array(e),
      a: new Float32Array(e),
      b: new Float32Array(e),
      cyc: new Uint8Array(e),
    }
  );
}
function Be(e, a, o, r, i, n, l = 0) {
  if (e.count >= e.n) return -1;
  const c = e.count++;
  return (
    (e.x[c] = a),
    (e.y[c] = o),
    (e.z[c] = r),
    (e.vx[c] = e.vy[c] = e.vz[c] = 0),
    (e.life[c] = 0),
    (e.max[c] = n),
    (e.kind[c] = i),
    (e.a[c] = 0),
    (e.b[c] = 0),
    (e.cyc[c] = l),
    c
  );
}
function zt(e, a) {
  const o = --e.count;
  if (a !== o)
    for (const r of [
      "x",
      "y",
      "z",
      "vx",
      "vy",
      "vz",
      "life",
      "max",
      "kind",
      "a",
      "b",
      "cyc",
    ])
      e[r][a] = e[r][o];
}
function Un(e) {
  const a = new ft(),
    o = new Float32Array(e * 6),
    r = new Float32Array(e * 2),
    i = new Float32Array(e * 6);
  (a.setAttribute("position", new rt(o, 3).setUsage(vt)),
    a.setAttribute("aAlpha", new rt(r, 1).setUsage(vt)),
    a.setAttribute("aColor", new rt(i, 3).setUsage(vt)));
  const n = new $t({
      transparent: !0,
      depthWrite: !1,
      vertexShader:
        "attribute float aAlpha; attribute vec3 aColor; varying float vA; varying vec3 vC; void main(){ vA = aAlpha; vC = aColor; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
      fragmentShader: `varying float vA; varying vec3 vC; void main(){ gl_FragColor = vec4(vC, vA);
#include <colorspace_fragment>
}`,
    }),
    l = new Yo(a, n);
  return (
    (l.frustumCulled = !1),
    (l.renderOrder = 6),
    {
      n: e,
      g: a,
      pos: o,
      al: r,
      col: i,
      seg: l,
      count: 0,
      x: new Float32Array(e),
      y: new Float32Array(e),
      z: new Float32Array(e),
      vx: new Float32Array(e),
      vy: new Float32Array(e),
      cyc: new Uint8Array(e),
      sea: new Uint8Array(e),
    }
  );
}
const mo = 16,
  ho = 36;
function Ea() {
  const e = new jt(1, 1).scale(1, 0.82, 1),
    a = new Fe({
      flatShading: !0,
      roughness: 1,
      color: "#ffffff",
      emissive: "#d9d0f0",
      emissiveIntensity: 0.18,
    }),
    o = new Ht(e, a, mo * ho);
  return (
    o.instanceMatrix.setUsage(vt),
    o.setColorAt(0, new de("#fff")),
    o.instanceColor.setUsage(vt),
    (o.castShadow = !0),
    (o.frustumCulled = !1),
    (o.count = 0),
    {
      mesh: o,
    }
  );
}
function Fa(e, a) {
  const o = Ct(77),
    r = Et(2600, 0.05),
    i = Et(2200, 0.04),
    n = Et(1100, 0.045),
    l = Et(900, 0.035),
    c = Et(500, 0.04, {
      additive: !0,
    }),
    t = Un(2600),
    m = Ea(),
    f = Un(260);
  ((f.seg.material.blending = oo),
    e.add(r.pts, i.pts, n.pts, l.pts, c.pts, t.seg, m.mesh, f.seg));
  const h = [],
    w = {},
    b = (y, C, L, q) => {
      for (w[y] = (w[y] || 0) + C * L; w[y] >= 1;) ((w[y] -= 1), q());
    },
    M = 1,
    F = 2,
    S = 3,
    A = 4,
    $ = 5,
    E = 1,
    D = 2,
    T = 3,
    U = 5,
    W = 1,
    B = 2,
    Y = 3,
    I = 1,
    X = 2,
    z = {
      cam: null,
      wind: 0.6,
      temp: {
        land: 29,
        sea: 27,
      },
      show: {},
      cycleTint: !1,
      density: 1,
      runoffFrac: 0.15,
      infilFrac: 0.7,
      drawdown: 0,
      pump: 0,
      mud: 0.12,
      storm: 0,
      discharge: 1,
      dam: !0,
      divert: 0,
      melt: 0,
      plane: null,
    },
    Q = (y, C) => {
      const L = Math.max(0, ie(y, C));
      return (
        (y > tt + 0.8 ? (z.temp.inland ?? z.temp.land) : z.temp.land) - 6.5 * L
      );
    };
  function J(y, C, L, q, p) {
    if (h.length >= ho) return null;
    const H = {
      x: y,
      y: L,
      z: C,
      w: q,
      kind: p,
      age: 0,
      size: 0.55 + o() * 0.4,
      fade: 0,
      rainAcc: 0,
      seed: o() * 100,
      vx: 0,
      offs: [],
    };
    for (let P = 0; P < mo; P++) {
      const d = o() * Math.PI * 2,
        x = Math.sqrt(o()),
        k = o();
      H.offs.push([
        Math.cos(d) * x * 0.95,
        -0.12 + k * k * 0.5 * (1 - x * 0.6),
        Math.sin(d) * x * 0.65,
        0.5 + o() * 0.45 + (1 - x) * 0.25,
      ]);
    }
    return (h.push(H), H);
  }
  function ue(y, C) {
    const L = z.show;
    ((L.evap || L.transport || L.seaRain) &&
      b("cloud", 0.32 * (0.4 + C.seaEvap) * (1 + z.storm), y, () => {
        const v = L.seaRain && (!L.transport || o() < C.seaShare);
        J(
          Z(-9.4, -4.2, o()),
          Z(-4.8, 2.4, o()),
          2.05 + o() * 0.35,
          0.25,
          v ? "sea" : L.transport ? "adv" : "sea",
        );
      }),
      L.inlandRain &&
        b("cloudIn", 0.06 * (0.3 + C.inland), y, () =>
          J(
            Z(4.9, 7.4, o()),
            Z(-2.2, 2.2, o()),
            1.75 + o() * 0.25,
            0.3,
            "inland",
          ),
        ));
    for (let v = h.length - 1; v >= 0; v--) {
      const u = h[v];
      u.age += y;
      const R = ie(ae(u.x, g.x0, g.x1), ae(u.z, g.z0, g.z1));
      if (u.kind === "adv") {
        u.vx = Z(u.vx, 0.12 + 0.42 * z.wind * (1 + z.storm * 0.5), y);
        const G = Math.max(2.05, R + 0.75);
        u.y = Z(u.y, G, y * 0.6);
        let le = 0.06 * (0.5 + C.transport);
        (u.x > -0.5 &&
          u.x < tt + 0.2 &&
          (le += 0.22 * ae((R - 0.2) / 1.6) * (0.6 + C.landRain)),
          u.x > tt + 0.35 && (le = -0.35),
          (u.w += le * y));
      } else
        u.kind === "sea"
          ? ((u.vx = Z(u.vx, 0.05 * Math.sin(u.seed + u.age * 0.1), y)),
            (u.w += 0.14 * (0.4 + C.seaEvap) * y),
            u.x > Pe(u.z) - 0.3 && (u.vx -= y * 0.2))
          : u.kind === "deco"
            ? ((u.vx = 0.03),
              u.x > g.x1 + 0.6 && (u.x = g.x0 + 1),
              (u.age = Math.max(u.age, 3)))
            : u.kind === "inland" &&
              ((u.vx = Z(u.vx, 0.04 * z.wind, y)),
              (u.w += 0.1 * (0.3 + C.inland) * y));
      if (((u.x += u.vx * y), u.w > 0.62 && u.kind !== "deco" && L.precip)) {
        const G = u.x < Pe(u.z) ? "sea" : u.x > tt + 0.6 ? "inland" : "land",
          le =
            (G === "sea"
              ? 38 * (0.3 + C.seaRain)
              : G === "inland"
                ? 22 * (0.3 + C.inland)
                : 55 * (0.3 + C.landRain)) *
            (u.w - 0.5) *
            (1 + z.storm * 1.5) *
            z.density;
        for (u.rainAcc += le * y; u.rainAcc >= 1;) {
          u.rainAcc -= 1;
          const ye = o() * Math.PI * 2,
            fe = Math.sqrt(o()) * u.size * 0.85,
            ee = u.x + Math.cos(ye) * fe,
            te = ae(u.z + Math.sin(ye) * fe * 0.7, g.z0 + 0.02, g.z1 - 0.02);
          if (ee < g.x0 || ee > g.x1) continue;
          const He = u.kind === "sea" ? 1 : u.kind === "inland" ? 3 : 2;
          Q(ee, te) < 0.5 && G !== "sea"
            ? he(ee, u.y - 0.2, te, He)
            : me(ee, u.y - 0.2, te, He, G === "sea");
        }
        u.w -= (0.05 + 0.08 * (u.w - 0.5)) * y * (1 + z.storm);
      } else !L.precip && u.w > 0.9 && (u.w = 0.9);
      (u.kind !== "deco" &&
        (u.x > g.x1 + 0.3 || u.x < g.x0 - 0.5 || (u.w < 0.12 && u.age > 4)) &&
        (u.fade += y),
        u.fade > 2 && h.splice(v, 1));
    }
    let q = 0;
    const p = new ln(),
      H = new dn(),
      P = new pe(),
      d = new pe(),
      x = new de(),
      k = new de("#ffffff"),
      j = new de("#7d7f92"),
      O = new de("#5d5f74");
    for (const v of h) {
      const u = ae(v.age / 2.5) * (1 - ae(v.fade / 2)) * ae(v.w / 0.25 + 0.15),
        R = v.size * (0.75 + 0.55 * ae(v.w)) * (1 + z.storm * 0.3),
        N =
          v.kind === "deco"
            ? 0
            : ae((v.w - 0.45) / 0.9) * (0.85 + z.storm * 0.15);
      for (const [G, le, ye, fe] of v.offs) {
        const ee = z.cam
            ? ae(
                (Math.hypot(
                  v.x + G * R - z.cam.x,
                  v.y - z.cam.y,
                  v.z + ye * R - z.cam.z,
                ) -
                  0.8) /
                  1.6,
              )
            : 1,
          te = fe * R * 0.5 * u * ee;
        (d.set(
          v.x + G * R,
          v.y + le * R + (le > 0 ? 0.25 * R * ae(v.w - 0.5) : 0),
          ae(v.z + ye * R, g.z0 - 0.2, g.z1 + 0.2),
        ),
          p.compose(d, H, P.set(te, te, te)),
          m.mesh.setMatrixAt(q, p),
          x.copy(k).lerp(le < 0.05 ? O : j, ae(N * (le < 0.05 ? 1.05 : 0.6))),
          m.mesh.setColorAt(q, x),
          q++);
      }
    }
    ((m.mesh.count = q),
      (m.mesh.instanceMatrix.needsUpdate = !0),
      (m.mesh.instanceColor.needsUpdate = !0));
  }
  function me(y, C, L, q, p) {
    if (t.count >= t.n) return;
    const H = t.count++;
    ((t.x[H] = y),
      (t.y[H] = C),
      (t.z[H] = L),
      (t.vx[H] = 0.25 * z.wind + z.storm * 0.9),
      (t.vy[H] = -(2.6 + o() * 0.8 + z.storm * 1.2)),
      (t.cyc[H] = q),
      (t.sea[H] = p ? 1 : 0));
  }
  function he(y, C, L, q) {
    const p = Be(l, y, C, L, 1, 12, q);
    p >= 0 && ((l.vy[p] = -(0.35 + o() * 0.15)), (l.a[p] = o() * 6));
  }
  function K(y, C, L) {
    if (Tt(y, C) === null) {
      if (z.show.runoff && o() < z.runoffFrac * 1.4) {
        const p = Be(i, y, ie(y, C) + 0.012, C, E, 14, L);
        p >= 0 && (i.a[p] = 0);
      }
      if (z.show.infil && C > g.z1 - 0.9 && o() < z.infilFrac) {
        const p = Be(n, y, be(oe.top, y) - 0.01, wn, W, 30, L);
        p >= 0 && (n.vy[p] = -(0.1 + o() * 0.06));
      }
    }
  }
  function ce(y) {
    for (let L = t.count - 1; L >= 0; L--) {
      ((t.x[L] += t.vx[L] * y), (t.y[L] += t.vy[L] * y));
      const q = t.sea[L]
        ? 0
        : Math.max(ie(t.x[L], t.z[L]), Tt(t.x[L], t.z[L]) ?? -9);
      if (t.y[L] <= q) {
        if (
          (!t.sea[L] && t.cyc[L] !== 1 && K(t.x[L], t.z[L], t.cyc[L]),
          o() < 0.25)
        ) {
          const H = Be(c, t.x[L], q + 0.01, t.z[L], X, 0.25);
          H >= 0 && (c.vy[H] = 0.15);
        }
        const p = --t.count;
        ((t.x[L] = t.x[p]),
          (t.y[L] = t.y[p]),
          (t.z[L] = t.z[p]),
          (t.vx[L] = t.vx[p]),
          (t.vy[L] = t.vy[p]),
          (t.cyc[L] = t.cyc[p]),
          (t.sea[L] = t.sea[p]));
      }
    }
    const C = new de();
    for (let L = 0; L < t.count; L++) {
      const q = 0.09 + z.storm * 0.06;
      (t.pos.set(
        [
          t.x[L],
          t.y[L],
          t.z[L],
          t.x[L] - t.vx[L] * q * 0.4,
          t.y[L] - t.vy[L] * q * 0.4,
          t.z[L],
        ],
        L * 6,
      ),
        (t.al[L * 2] = 0.75),
        (t.al[L * 2 + 1] = 0),
        We(C.setRGB(0.72, 0.84, 1), t.cyc[L]),
        t.col.set([C.r, C.g, C.b, C.r, C.g, C.b], L * 6));
    }
    t.g.setDrawRange(0, t.count * 2);
    for (const L of ["position", "aAlpha", "aColor"])
      t.g.attributes[L].needsUpdate = !0;
  }
  function se(y) {
    for (let C = l.count - 1; C >= 0; C--)
      ((l.life[C] += y),
        (l.x[C] +=
          (0.12 * z.wind + 0.05 * Math.sin(l.life[C] * 2 + l.a[C])) * y),
        (l.z[C] += 0.04 * Math.cos(l.life[C] * 1.7 + l.a[C]) * y),
        (l.y[C] += l.vy[C] * y),
        (l.y[C] <= ie(l.x[C], ae(l.z[C], g.z0, g.z1)) ||
          l.life[C] > l.max[C]) &&
          zt(l, C));
  }
  function Le(y, C) {
    const L = z.show,
      q = z.density;
    if (
      (L.evap &&
        b("vSea", 90 * (0.2 + C.seaEvap) * q, y, () => {
          const p = Z(g.z0 + 0.1, g.z1 - 0.1, o()),
            H = Z(g.x0 + 0.1, Pe(p) - 0.15, o()),
            P = L.transport && o() > C.seaShare,
            d = Be(r, H, 0.03, p, M, 9, P ? 2 : 1);
          d >= 0 &&
            ((r.vy[d] = 0.32 + o() * 0.18),
            (r.a[d] = 1.8 + o() * 0.5),
            (r.b[d] = P ? 1 : 0));
        }),
      L.transport &&
        b("vAdv", 34 * (0.2 + C.transport) * q, y, () => {
          const p = Be(
            r,
            Z(-9.4, -3.5, o()),
            1.9 + o() * 0.7,
            Z(g.z0 + 0.2, g.z1 - 0.2, o()),
            F,
            22,
            2,
          );
          p >= 0 && (r.a[p] = Z(-0.5, tt + 0.2, Math.pow(o(), 0.7)));
        }),
      L.transpire)
    ) {
      const p = a.forest.visible();
      p.length &&
        b("vTree", 70 * (0.15 + C.transpire) * q, y, () => {
          const H = p[Math.floor(o() * p.length)],
            P = Be(r, H.x, H.y + 0.1, H.z, S, 7, 3);
          P >= 0 &&
            ((r.vy[P] = 0.22 + o() * 0.12), (r.a[P] = H.y + 0.9 + o() * 0.4));
        });
    }
    (L.landEvap &&
      b("vLand", 28 * (0.2 + C.landEvap) * q, y, () => {
        const p = Z(g.z0 + 0.2, g.z1 - 0.2, o()),
          H = Z(Pe(p) + 0.4, tt, o()),
          P = Math.max(ie(H, p), Tt(H, p) ?? -1),
          d = Be(r, H, P + 0.03, p, $, 7, 3);
        d >= 0 && ((r.vy[d] = 0.2 + o() * 0.1), (r.a[d] = P + 0.9 + o() * 0.5));
      }),
      L.lakeEvap &&
        b("vLake", 40 * (0.2 + C.lakeEvap) * q, y, () => {
          const p = o() * Math.PI * 2,
            H = Math.sqrt(o()),
            P = ne.x + Math.cos(p) * H * 1.1,
            d = ne.z + Math.sin(p) * H * 0.9;
          if (ie(P, d) > ne.level) return;
          const x = Be(r, P, ne.level + 0.03, d, A, 8, 3);
          x >= 0 && ((r.vy[x] = 0.24 + o() * 0.1), (r.a[x] = 1.6 + o() * 0.3));
        }));
    for (let p = r.count - 1; p >= 0; p--) {
      r.life[p] += y;
      const H = r.kind[p];
      if (H === F) {
        r.x[p] += (0.25 + 0.55 * z.wind) * y;
        const P = ie(ae(r.x[p], g.x0, g.x1), r.z[p]);
        ((r.y[p] = Math.max(Z(r.y[p], 2.15, y * 0.3), P + 0.55)),
          r.x[p] > r.a[p] &&
            r.life[p] > 1.5 &&
            (r.max[p] = Math.min(r.max[p], r.life[p] + 0.8)));
      } else
        ((r.y[p] += r.vy[p] * y),
          (r.x[p] += (0.04 + 0.1 * z.wind) * y * (H === M && r.b[p] ? 2 : 1)),
          r.y[p] > r.a[p] && (r.max[p] = Math.min(r.max[p], r.life[p] + 0.6)));
      r.life[p] > r.max[p] && zt(r, p);
    }
  }
  const re = {
      main: Xe.main,
      trib: Xe.trib,
      inland: Xe.inland,
    },
    Se = ["main", "trib", "inland"];
  function Me(y, C) {
    const L = re[y],
      q = ae(Math.floor(C), 0, L.length - 2),
      p = C - q,
      H = L[q],
      P = L[q + 1];
    return {
      x: Z(H.x, P.x, p),
      z: Z(H.z, P.z, p),
      bed: Z(H.bed, P.bed, p),
      w: Z(H.w, P.w, p),
      tx: P.x - H.x,
      tz: P.z - H.z,
    };
  }
  function ze(y, C, L) {
    ((i.kind[y] = D),
      (i.a[y] = L),
      (i.b[y] = (o() * 2 - 1) * 0.7),
      (i.vx[y] = Se.indexOf(C)),
      (i.max[y] = 60),
      (i.life[y] = 0));
  }
  function Ae(y, C) {
    const L = z.show,
      q = z.density;
    (L.river &&
      (b("rMain", 26 * (0.25 + C.discharge) * q, y, () => {
        const P = Be(i, 0, 0, 0, D, 60, 2);
        P >= 0 && ze(P, o() < 0.7 ? "main" : "trib", o() * 4);
      }),
      b("rIn", 8 * (0.25 + C.inland) * q, y, () => {
        const P = Be(i, 0, 0, 0, D, 60, 3);
        P >= 0 && ze(P, "inland", o() * 3);
      })),
      L.melt &&
        z.melt > 0 &&
        b("melt", 30 * z.melt * q, y, () => {
          const P = Z(-2.2, 1.8, o()),
            d = Z(2.4, 3.6, o()),
            x = ie(d, P);
          x < 1.9 || Be(i, d, x + 0.012, P, E, 14, 2);
        }),
      z.divert > 0 &&
        a.canal.group.visible &&
        b("canal", 14 * z.divert, y, () => {
          const P = Be(i, 0, 0, 0, U, 20, 2);
          P >= 0 && (i.a[P] = 0);
        }));
    const p = 0.35 + 0.5 * ae(C.discharge) + z.storm * 0.4,
      H = a.canal.path;
    for (let P = i.count - 1; P >= 0; P--) {
      i.life[P] += y;
      const d = i.kind[P];
      if (d === E) {
        const x = i.x[P],
          k = i.z[P],
          [j, O] = Cn(x, k);
        let v = -j,
          u = -O;
        const R = Math.hypot(v, u) || 1,
          N = ae(0.18 + R * 0.25, 0.18, 0.7);
        ((v = (v / R) * N), (u = (u / R) * N));
        let G = null;
        for (const le of Se) {
          const ye = lt(le, x, k);
          (!G || ye.d < G.d) &&
            (G = {
              ...ye,
              name: le,
            });
        }
        if (G.d < 0.35) {
          const le = Me(G.name, G.i);
          ((v = Z(v, (le.x - x) * 2, 0.5)), (u = Z(u, (le.z - k) * 2, 0.5)));
        }
        ((i.x[P] += v * y),
          (i.z[P] += u * y),
          (i.z[P] = ae(i.z[P], g.z0 + 0.01, g.z1 - 0.01)),
          (i.y[P] = ie(i.x[P], i.z[P]) + 0.014),
          G.d < G.w * 1.2
            ? ze(P, G.name, G.i)
            : (kt(i.x[P], i.z[P]) ||
                i.x[P] < Pe(i.z[P]) ||
                (i.x[P] > 5 && ie(i.x[P], i.z[P]) < ne.level)) &&
              (i.life[P] = i.max[P]));
      } else if (d === D) {
        const x = Se[i.vx[P]],
          k = re[x];
        let j = i.a[P];
        const O = Me(x, j),
          v = x === "main" && z.dam && kt(O.x, O.z),
          u = Math.hypot(O.tx, O.tz) || 0.02;
        if (
          ((j +=
            ((p * (v ? 0.25 : 1) * (0.8 + 0.4 * (1 - Math.abs(i.b[P])))) / u) *
            y *
            0.6),
          (i.a[P] = j),
          j >= k.length - 1.05)
        ) {
          x === "inland"
            ? (i.life[P] = i.max[P])
            : ((i.kind[P] = T),
              (i.life[P] = 0),
              (i.max[P] = 3 + o() * 2),
              (i.vx[P] = -0.12 - o() * 0.1),
              (i.vz[P] = (o() - 0.5) * 0.18));
          continue;
        }
        const R = Me(x, j),
          N = Math.hypot(R.tx, R.tz) || 1;
        if (
          ((i.x[P] = R.x - (R.tz / N) * R.w * i.b[P]),
          (i.z[P] = R.z + (R.tx / N) * R.w * i.b[P]),
          (i.y[P] = (v ? xe.level : R.bed + 0.04) + 0.006),
          x === "main" && z.dam && Math.abs(R.x - xe.x) < 0.03 && o() < 0.08)
        ) {
          const G = Be(c, R.x - 0.05, R.bed + 0.08, R.z, X, 0.6);
          G >= 0 && ((c.vy[G] = 0.2), (c.vx[G] = -0.15));
        }
      } else if (d === T)
        ((i.x[P] += i.vx[P] * y), (i.z[P] += i.vz[P] * y), (i.y[P] = 0.012));
      else if (d === U) {
        i.a[P] += y * 0.12;
        const x = i.a[P] * (H.length - 1),
          k = Math.min(H.length - 2, Math.floor(x)),
          j = x - k;
        ((i.x[P] = Z(H[k].x, H[k + 1].x, j)),
          (i.y[P] = Z(H[k].y, H[k + 1].y, j) + 0.02),
          (i.z[P] = Z(H[k].z, H[k + 1].z, j)),
          i.a[P] >= 1 && (i.life[P] = i.max[P]));
      }
      i.life[P] >= i.max[P] && zt(i, P);
    }
  }
  function Ke(y, C) {
    const L = z.show,
      q = z.density;
    (L.ground &&
      b("gw", 26 * (0.2 + C.baseflow) * q, y, () => {
        const p = Z(-3.6, 5.5, o()),
          H = an(p, {
            drawdown: z.drawdown,
          }),
          P = be(oe.aquiferBottom, p);
        if (H - P < 0.05) return;
        const d = Be(
          n,
          p,
          Z(P + 0.02, H - 0.01, o()),
          wn,
          B,
          40,
          p > oe.divideX ? 3 : 2,
        );
        d >= 0 && (n.a[d] = 0.1 + o() * 0.8);
      }),
      L.infil &&
        b("inf", 10 * (0.2 + C.infil) * q, y, () => {
          const p = Z(-2.9, 5.4, o()),
            H = Be(
              n,
              p,
              be(oe.top, p) - 0.01,
              wn,
              W,
              30,
              p > oe.divideX ? 3 : 2,
            );
          H >= 0 && (n.vy[H] = -(0.1 + o() * 0.06));
        }));
    for (let p = n.count - 1; p >= 0; p--) {
      n.life[p] += y;
      const H = n.x[p],
        P = an(H, {
          drawdown: z.drawdown,
        }),
        d = be(oe.aquiferBottom, H);
      if (n.kind[p] === W) {
        if (((n.y[p] += n.vy[p] * y), n.y[p] <= P)) {
          if (!L.ground) {
            zt(n, p);
            continue;
          }
          ((n.kind[p] = B), (n.a[p] = 0.12), (n.life[p] = 0), (n.max[p] = 40));
        }
      } else if (n.kind[p] === B) {
        const x = z.pump > 0.05 && Math.abs(H - Ie) < 0.25 + 1.6 * z.pump;
        let k = H < oe.divideX ? -1 : H < ne.x ? 1 : -1;
        x && (k = Math.sign(Ie - H) || 1);
        const j = (0.06 + 0.06 * ae(C.baseflow)) * (x ? 1.8 + 3 * z.pump : 1);
        n.x[p] += k * j * y;
        const O = Z(d + 0.015, P - 0.012, n.a[p]);
        ((n.y[p] = Z(n.y[p], O, ae(y * 3))),
          x &&
            Math.abs(n.x[p] - Ie) < 0.02 &&
            ((n.kind[p] = Y), (n.vy[p] = 0.35)),
          n.x[p] < oe.coast - 0.35 &&
            ((n.vy[p] = 0.05),
            (n.y[p] += 0.05 * y),
            (n.max[p] = Math.min(n.max[p], n.life[p] + 1.5))),
          H > ne.x - 0.2 &&
            H < ne.x + 0.2 &&
            (n.max[p] = Math.min(n.max[p], n.life[p] + 0.5)));
      } else if (n.kind[p] === Y) {
        ((n.x[p] = Ie),
          (n.y[p] += n.vy[p] * y),
          n.y[p] > be(oe.top, Ie) && zt(n, p));
        continue;
      }
      n.life[p] > n.max[p] && zt(n, p);
    }
  }
  function Ye(y) {
    z.plane &&
      b("seed", 40, y, () => {
        const C = z.plane,
          L = Be(c, C.x - 0.1, C.y - 0.02, C.z + (o() - 0.5) * 0.06, I, 3);
        L >= 0 &&
          ((c.vy[L] = -0.05 - o() * 0.05), (c.vx[L] = (o() - 0.5) * 0.05));
      });
    for (let C = c.count - 1; C >= 0; C--)
      ((c.life[C] += y),
        (c.x[C] += c.vx[C] * y),
        (c.y[C] += c.vy[C] * y),
        c.kind[C] === X && (c.vy[C] -= y * 0.8),
        c.life[C] > c.max[C] && zt(c, C));
  }
  function We(y, C) {
    return !z.cycleTint || !C
      ? y
      : y.lerp(C === 1 ? Bt.sea : C === 2 ? Bt.seaLand : Bt.land, 0.85);
  }
  const ke = new de();
  function Te(y, C, L, q) {
    for (let p = 0; p < y.count; p++)
      ((y.pos[p * 3] = y.x[p]),
        (y.pos[p * 3 + 1] = y.y[p]),
        (y.pos[p * 3 + 2] = y.z[p]),
        We(C(p, ke), y.cyc[p]),
        (y.col[p * 3] = ke.r),
        (y.col[p * 3 + 1] = ke.g),
        (y.col[p * 3 + 2] = ke.b),
        (y.sz[p] = L(p)),
        (y.alpha[p] = q(p)));
    y.g.setDrawRange(0, y.count);
    for (const p of ["position", "aColor", "aAlpha", "aSize"])
      y.g.attributes[p].needsUpdate = !0;
  }
  const $e = (y, C, L = 0.6, q = 0.8) =>
    ae(y.life[C] / L) * ae((y.max[C] - y.life[C]) / q);
  function Ze(y) {
    const C = ae(z.wind + z.storm * 0.8, 0, 1.6);
    b("gust", 60 * Math.max(0, C - 0.2), y, () => {
      if (f.count >= f.n) return;
      const q = f.count++;
      ((f.x[q] = g.x0 + o() * 3),
        (f.y[q] = 0.6 + o() * 2.6),
        (f.z[q] = Z(g.z0, g.z1, o())),
        (f.vx[q] = 1.2 + C * 2.4 + o()));
    });
    const L = new de(0.9, 0.95, 1);
    for (let q = f.count - 1; q >= 0; q--)
      if (
        ((f.x[q] += f.vx[q] * y),
        (f.y[q] = Math.max(f.y[q], ie(ae(f.x[q], g.x0, g.x1), f.z[q]) + 0.35)),
        f.x[q] > g.x1 + 0.5)
      ) {
        const p = --f.count;
        for (const H of ["x", "y", "z", "vx"]) f[H][q] = f[H][p];
      }
    for (let q = 0; q < f.count; q++) {
      const p = 0.25 + f.vx[q] * 0.12,
        H = ae((f.x[q] - g.x0) / 2) * ae((g.x1 + 0.5 - f.x[q]) / 2);
      (f.pos.set(
        [
          f.x[q],
          f.y[q],
          f.z[q],
          f.x[q] - p,
          f.y[q] + Math.sin(f.x[q] * 2) * 0.02,
          f.z[q],
        ],
        q * 6,
      ),
        (f.al[q * 2] = 0.35 * H),
        (f.al[q * 2 + 1] = 0),
        f.col.set([L.r, L.g, L.b, L.r, L.g, L.b], q * 6));
    }
    f.g.setDrawRange(0, f.count * 2);
    for (const q of ["position", "aAlpha", "aColor"])
      f.g.attributes[q].needsUpdate = !0;
  }
  function Oe(y, C, L) {
    (Ze(y),
      ue(y, L),
      ce(y),
      se(y),
      Le(y, L),
      Ae(y, L),
      Ke(y, L),
      Ye(y),
      Te(
        r,
        (p, H) =>
          r.kind[p] === S
            ? H.setRGB(0.78, 1, 0.82)
            : r.kind[p] === F
              ? H.setRGB(0.9, 0.95, 1)
              : H.setRGB(0.82, 0.93, 1),
        (p) =>
          (r.kind[p] === F ? 0.085 : 0.055) * (0.7 + 0.6 * ae(r.life[p] / 2)),
        (p) => $e(r, p, 0.8, 0.8) * (r.kind[p] === F ? 0.38 : 0.5),
      ),
      Te(
        l,
        (p, H) => H.setRGB(1, 1, 1),
        () => 0.035,
        (p) => $e(l, p, 0.3, 0.3) * 0.95,
      ));
    const q = z.mud;
    (Te(
      i,
      (p, H) => {
        const P = i.kind[p];
        return P === T
          ? H.setRGB(Z(0.55, 0.72, q), Z(0.78, 0.6, q), Z(0.95, 0.4, q))
          : P === U
            ? H.setRGB(0.6, 0.9, 1)
            : H.setRGB(
                Z(0.62, 0.78, q * 0.6),
                Z(0.88, 0.75, q * 0.6),
                Z(1, 0.6, q * 0.6),
              );
      },
      (p) => (i.kind[p] === D ? 0.04 : 0.034),
      (p) => $e(i, p, 0.3, 0.6) * (i.kind[p] === T ? 0.5 : 0.9),
    ),
      Te(
        n,
        (p, H) =>
          n.kind[p] === W
            ? H.setRGB(0.7, 0.9, 1)
            : n.kind[p] === Y
              ? H.setRGB(1, 1, 1)
              : H.setRGB(0.55, 0.85, 1),
        () => 0.04,
        (p) => $e(n, p, 0.4, 0.8) * 0.95,
      ),
      Te(
        c,
        (p, H) =>
          c.kind[p] === I ? H.setRGB(1, 0.85, 0.5) : H.setRGB(0.85, 0.92, 1),
        (p) => (c.kind[p] === I ? 0.035 : 0.025),
        (p) => $e(c, p, 0.05, 0.3) * 0.7,
      ));
  }
  function Qe(y) {
    for (const C of [r, i, n, l, c])
      C.pts.material.uniforms.uScale.value = y * 0.62;
  }
  function Je() {
    for (const [y, C, L, q] of [
      [-1.2, 1.55, -3.6, 0.7],
      [1.9, 2.3, -4.3, 0.9],
      [4.6, 2, -3.9, 0.8],
      [-3.6, 1.1, -4.6, 0.7],
      [6.8, 1.6, -2.9, 0.6],
      [0.6, 1.25, -2.6, 0.55],
    ]) {
      const p = J(y, L, C, 0.42, "deco");
      p && ((p.size = q), (p.age = 3));
    }
  }
  function ve() {
    for (const y of [r, i, n, l, c]) y.count = 0;
    ((t.count = 0), (h.length = 0), Je());
  }
  function qe(y, C) {
    let L = null;
    for (const q of h)
      q.kind !== "deco" &&
        (!L || Math.hypot(q.x - y, q.z - C) < Math.hypot(L.x - y, L.z - C)) &&
        (L = q);
    return (
      L && Math.hypot(L.x - y, L.z - C) < 1.2 && (L.w = Math.max(L.w, 1.25)),
      L
    );
  }
  function De(y, C) {
    for (let L = 0; L < y; L += 0.1) Oe(0.1, L, C);
  }
  function nt(y) {
    const C = m.mesh.material;
    ((C.opacity = y),
      (C.transparent = y < 0.99),
      (C.depthWrite = y >= 0.99),
      (C.needsUpdate = !0),
      (m.mesh.visible = y > 0.01),
      (m.mesh.castShadow = y > 0.35));
  }
  function it(y) {
    (m.mesh.material.color.setRGB(1 - 0.58 * y, 1 - 0.56 * y, 1 - 0.5 * y),
      (m.mesh.material.emissiveIntensity = 0.18 * (1 - y)));
  }
  return {
    update: Oe,
    warm: De,
    stormLook: it,
    setCloudOpacity: nt,
    st: z,
    clouds: h,
    newCloud: J,
    setScale: Qe,
    clear: ve,
    seedNear: qe,
    counts: () => ({
      vapor: r.count,
      rain: t.count,
      surf: i.count,
      under: n.count,
      clouds: h.length,
    }),
  };
}
const xn = g.z1 + 0.03,
  we = (e, a, o) => new pe(e, a, o);
function qa() {
  const e = Xe.main
    .filter((i, n) => n % 6 === 0 && n > 30)
    .map((i) => we(i.x, Math.max(i.bed, 0) + 0.12, i.z));
  e.push(we(Pe(0.58) - 0.35, 0.08, 0.58));
  const o = [0.9, -0.2, -1.4, -2.4, -3.3, -4].map((i) => {
      const n = i < oe.coast ? be(oe.top, i) - 0.06 : be(oe.wt, i) - 0.12,
        l = Math.max(be(oe.aquiferBottom, i) + 0.08, n);
      return we(i, i < -3.6 ? l + 0.05 : l, xn);
    }),
    r = 1.4;
  return [
    {
      id: "evap",
      n: "①",
      cyc: "seaLand",
      pts: [we(-4.6, 0.12, 0.6), we(-4.5, 0.9, 0.6), we(-4.3, 1.75, 0.6)],
      at: 0.45,
    },
    {
      id: "transport",
      n: "②",
      cyc: "seaLand",
      pts: [
        we(-4, 2.25, 0.4),
        we(-2, 2.6, 0.3),
        we(0, 2.65, 0.2),
        we(1.4, 2.55, 0.2),
      ],
      at: 0.5,
    },
    {
      id: "precip",
      n: "③",
      cyc: "seaLand",
      pts: [
        we(1.9, 2.45, 0.4),
        we(1.95, 1.8, 0.45),
        we(2, ie(2, 0.5) + 0.15, 0.5),
      ],
      at: 0.45,
    },
    {
      id: "runoff",
      n: "④",
      cyc: "seaLand",
      pts: e,
      at: 0.55,
    },
    {
      id: "infil",
      n: "⑤",
      cyc: "seaLand",
      pts: [
        we(r, be(oe.top, r) + 0.12, xn),
        we(r + 0.02, be(oe.wt, r) - 0.02, xn),
      ],
      at: 0.5,
      face: !0,
    },
    {
      id: "ground",
      n: "⑥",
      cyc: "seaLand",
      pts: o,
      at: 0.5,
      face: !0,
    },
    {
      id: "transpire",
      n: "⑦",
      cyc: "seaLand",
      pts: [
        we(1, ie(1, 2.2) + 0.15, 2.2),
        we(0.95, 1.2, 2.2),
        we(0.85, 1.9, 2.1),
      ],
      at: 0.6,
    },
    {
      id: "seaEvap",
      n: "",
      cyc: "sea",
      pts: [we(-7.2, 0.12, -1), we(-7.1, 0.9, -1), we(-6.9, 1.8, -1)],
      at: 0.3,
    },
    {
      id: "seaRain",
      n: "",
      cyc: "sea",
      pts: [we(-5.6, 1.85, -1), we(-5.65, 1, -1), we(-5.7, 0.12, -1)],
      at: 0.75,
    },
    {
      id: "lakeEvap",
      n: "",
      cyc: "land",
      pts: [
        we(ne.x - 0.35, ne.level + 0.1, ne.z),
        we(ne.x - 0.4, 1.1, ne.z),
        we(ne.x - 0.3, 1.7, ne.z),
      ],
      at: 0.5,
    },
    {
      id: "inlandRain",
      n: "",
      cyc: "land",
      pts: [
        we(ne.x + 0.55, 1.65, ne.z),
        we(ne.x + 0.55, 1.1, ne.z),
        we(ne.x + 0.5, ne.level + 0.12, ne.z),
      ],
      at: 0.5,
    },
    {
      id: "inlandRiver",
      n: "",
      cyc: "land",
      pts: Xe.inland
        .filter((i, n) => n % 6 === 0)
        .map((i) => we(i.x, i.bed + 0.1, i.z)),
      at: 0.5,
    },
  ];
}
function ja(e, a, o) {
  const r = new Re();
  e.add(r);
  const i = qa().map((h) => {
      const w = new Nt(h.pts),
        b = w.getLength(),
        M = Bt[h.cyc].clone(),
        F = new $t({
          transparent: !0,
          depthWrite: !1,
          depthTest: !h.face,
          uniforms: {
            uColor: {
              value: M,
            },
            uTime: {
              value: 0,
            },
            uLen: {
              value: b,
            },
            uA: {
              value: 0,
            },
            uHot: {
              value: 0,
            },
          },
          vertexShader:
            "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",
          fragmentShader: `uniform vec3 uColor; uniform float uTime; uniform float uLen; uniform float uA; uniform float uHot; varying vec2 vUv;
        void main(){ float s = vUv.x * uLen;
          float band = smoothstep(0.0, 0.15, fract(s * 1.6 - uTime * 1.1)) * (1.0 - smoothstep(0.25, 0.5, fract(s * 1.6 - uTime * 1.1)));
          vec3 c = uColor * (0.75 + 0.6 * band) + uHot * 0.15;
          gl_FragColor = vec4(c, uA * (0.72 + 0.28 * band));
          #include <colorspace_fragment>
        }`,
        }),
        S = new V(
          new nn(
            w,
            Math.max(24, Math.round(b * 24)),
            h.face ? 0.022 : 0.03,
            8,
            !1,
          ),
          F,
        ),
        A = w.getPoint(1),
        $ = w.getTangent(1),
        E = new V(new ct(h.face ? 0.06 : 0.075, h.face ? 0.14 : 0.18, 14), F);
      (E.position.copy(A).addScaledVector($, 0.02),
        E.quaternion.setFromUnitVectors(we(0, 1, 0), $),
        S.geometry.dispose());
      const D = w.getSpacedPoints(80),
        T = Math.max(2, Math.round(80 * (1 - 0.09 / b))),
        U = new Nt(D.slice(0, T));
      S.geometry = new nn(
        U,
        Math.max(24, Math.round(b * 24)),
        h.face ? 0.022 : 0.03,
        8,
        !1,
      );
      const W = new Re();
      (W.add(S, E),
        (W.renderOrder = h.face ? 12 : 9),
        (S.renderOrder = E.renderOrder = W.renderOrder),
        (W.visible = !1),
        r.add(W));
      const B = document.createElement("div");
      return (
        (B.className = `alabel c-${h.cyc}`),
        (B.innerHTML = `${h.n ? `<em>${h.n}</em>` : ""}<span></span>`),
        (B.querySelector("span").textContent = o[h.id] || h.id),
        a.appendChild(B),
        {
          ...h,
          curve: w,
          g: W,
          mat: F,
          el: B,
          a: 0,
          target: 0,
          anchor: w.getPoint(h.at),
        }
      );
    }),
    n = Object.fromEntries(i.map((h) => [h.id, h]));
  let l = null;
  function c(h, w = null) {
    const b = new Set(h);
    for (const M of i)
      ((M.target = b.has(M.id) ? 1 : 0),
        (M.mat.uniforms.uHot.value = M.id === w ? 1 : 0),
        M.el.classList.toggle("hot", M.id === w));
  }
  function t(h) {
    l = h;
    for (const w of i) {
      const b = w.el.querySelector("span"),
        M = w.el.querySelector("em");
      h
        ? ((b.textContent = h[w.id] || ""), M && (M.hidden = !0))
        : ((b.textContent = o[w.id] || w.id), M && (M.hidden = !1));
    }
  }
  const m = new pe();
  function f(h, w, b, M, F) {
    for (const S of i)
      if (
        ((S.a += (S.target - S.a) * Math.min(1, h * 4)),
        (S.mat.uniforms.uA.value = S.a),
        (S.mat.uniforms.uTime.value = w),
        (S.g.visible = S.a > 0.01),
        S.a > 0.01)
      ) {
        m.copy(S.anchor).project(b);
        const A = m.z < 1 && Math.abs(m.x) < 1.1 && Math.abs(m.y) < 1.1;
        ((S.el.style.opacity = A ? String(S.a) : "0"),
          (S.el.style.transform = `translate(${((m.x + 1) / 2) * M}px, ${((1 - m.y) / 2) * F}px)`));
      } else S.el.style.opacity = "0";
  }
  return {
    set: c,
    update: f,
    setQuiz: t,
    items: i,
    byId: n,
    get quiz() {
      return l;
    },
  };
}
const mt = [
    "evap",
    "transport",
    "precip",
    "seaRain",
    "runoff",
    "infil",
    "ground",
    "transpire",
    "landEvap",
    "lakeEvap",
    "inlandRain",
    "river",
    "melt",
  ],
  bn = ["evap", "transport", "precip", "runoff", "infil", "ground", "river"],
  Wt = [
    "evap",
    "transport",
    "precip",
    "runoff",
    "infil",
    "ground",
    "transpire",
  ],
  gn = [...Wt, "seaEvap", "seaRain", "lakeEvap", "inlandRain", "inlandRiver"],
  Gn = {
    overview: [
      [-1.2, 13.4, 25.5],
      [-0.4, -0.6, -1],
    ],
    ocean: [
      [-9, 4.4, 9.2],
      [-5.2, 0.8, -0.6],
    ],
    sky: [
      [-4.2, 5.6, 12.4],
      [-0.8, 1.6, -0.6],
    ],
    mountain: [
      [-2.8, 5.6, 10.8],
      [2.3, 1.2, -0.8],
    ],
    slope: [
      [-1.2, 3.8, 8],
      [1.5, 0.6, 0.6],
    ],
    face: [
      [-0.6, 1.3, 8.6],
      [-0.4, -0.3, 2.6],
    ],
    faceWide: [
      [0.2, 2.2, 11.8],
      [0.4, -0.2, 2.2],
    ],
    city: [
      [-3.6, 2.5, 5.8],
      [-1.6, 0.2, 1.6],
    ],
    dam: [
      [0, 2.2, 3],
      [1.3, 0.55, -0.25],
    ],
    inland: [
      [4, 3.8, 7.6],
      [6, 0.8, -0.2],
    ],
    delta: [
      [-6.2, 3.2, 5.8],
      [-2.9, 0, 0.5],
    ],
    well: [
      [-2.6, 0.9, 6],
      [-1.6, -0.4, 2.8],
    ],
  },
  Ft = [
    {
      id: "stores",
      title: translate("地球上的水体"),
      sub: "Water on Earth",
      cam: "overview",
      show: mt,
      arrows: [],
      panel: "stores",
      controls: [],
      body: translate(
        "<p>地球上的水以<b>海洋水</b>为主，约占全球总水量的 96.5%。陆地上的冰川、地下水、湖泊、河流，大气中的水汽，还有生物体内的水，合起来只占 3.5% 左右。</p><p><b>淡水</b>只占约 2.5%，其中近七成是两极和高山的冰川。人类容易利用的河流水、淡水湖泊水和浅层地下水，不到淡水总量的 0.3%。</p><p>点击右侧的水体，沙盘上会标出它的位置。注意比较各水体的<b>更新周期</b>：大气水约 8 天就更新一次，地下水要上千年。</p>",
      ),
      steps: [
        translate("对比海洋水与淡水的比例"),
        translate("找到冰川、地下水、湖泊和河流"),
        translate("比较各水体的更新周期"),
      ],
    },
    {
      id: "phase",
      title: translate("水的三态变化"),
      sub: "Three states of water",
      cam: "mountain",
      show: mt,
      arrows: [],
      panel: "phase",
      controls: ["season", "warm"],
      tags: ["heat"],
      body: translate(
        "<p>水在<b>固态（冰、雪）</b>、<b>液态（水）</b>、<b>气态（水汽）</b>之间不断转化，水循环就是靠这些状态变化推动的。</p><p>海面和湖面的水吸收太阳辐射的热量，<b>汽化</b>成水汽；水汽上升遇冷，<b>液化</b>成云中的小水滴，在高空更冷的地方直接<b>凝华</b>成冰晶。冬季山地降雪、积雪，春夏积雪和冰川<b>熔化</b>，融水汇入河流。</p><p>切换<b>夏季 / 冬季</b>，看雪线怎样升降；拖动“全球变暖”，看冰川和积雪的变化。</p>",
      ),
      steps: [
        translate("找到汽化（蒸发）发生的地方"),
        translate("观察云的形成：液化与凝华"),
        translate("切换到冬季，看降雪与积雪"),
        translate("切回夏季，看冰雪融水"),
      ],
    },
    {
      id: "seaLand",
      title: translate("海陆间循环"),
      sub: "Sea–land cycle",
      cam: "overview",
      show: bn,
      arrows: ["evap", "transport", "precip", "runoff", "infil", "ground"],
      panel: "loop",
      controls: ["wind"],
      tour: !0,
      body: translate(
        '<p>海陆间循环发生在海洋与陆地之间，是<b>最重要</b>的水循环类型：它使陆地上的水不断得到补充，水资源得以再生。</p><p class="eq">① 蒸发 → ② 水汽输送 → ③ 降水 → ④ 地表径流 / ⑤ 下渗 → ⑥ 地下径流 → 海洋</p><p>点击下面的步骤逐个观察，或按<b>分步演示</b>自动播放。下渗和地下径流发生在地下，看沙盘<b>前侧的剖面</b>：雨水穿过土壤到达<b>潜水面</b>，再沿透水层缓慢流向海洋。</p>',
      ),
      tourSteps: [
        {
          text: translate("① 蒸发：海水吸收太阳辐射，变成水汽上升"),
          show: ["evap"],
          arrows: ["evap"],
          hot: "evap",
          cam: "ocean",
        },
        {
          text: translate("② 水汽输送：海洋上空的水汽被风吹向陆地"),
          show: ["evap", "transport"],
          arrows: ["evap", "transport"],
          hot: "transport",
          cam: "sky",
        },
        {
          text: translate(
            "③ 降水：水汽在迎风坡被抬升冷却，凝结成云并降雨（雪）",
          ),
          show: ["evap", "transport", "precip"],
          arrows: ["evap", "transport", "precip"],
          hot: "precip",
          cam: "mountain",
        },
        {
          text: translate("④ 地表径流：雨水沿地表汇入河流，最终流入海洋"),
          show: ["evap", "transport", "precip", "runoff", "river"],
          arrows: ["evap", "transport", "precip", "runoff"],
          hot: "runoff",
          cam: "overview",
        },
        {
          text: translate("⑤ 下渗：一部分雨水渗入地下，到达潜水面"),
          show: ["evap", "transport", "precip", "runoff", "river", "infil"],
          arrows: ["evap", "transport", "precip", "runoff", "infil"],
          hot: "infil",
          cam: "face",
        },
        {
          text: translate("⑥ 地下径流：地下水沿透水层流动，补给河流或流入海洋"),
          show: bn,
          arrows: ["evap", "transport", "precip", "runoff", "infil", "ground"],
          hot: "ground",
          cam: "faceWide",
        },
      ],
    },
    {
      id: "cycles",
      title: translate("三类水循环"),
      sub: "Three types of cycle",
      cam: "overview",
      show: mt,
      arrows: gn,
      panel: "cycles",
      controls: ["wind"],
      cycleTint: !0,
      tour: !0,
      body: translate(
        '<p>按发生的空间范围，水循环分为三类，沙盘上用颜色区分：</p><p><b class="k-sea">海上内循环</b>：海洋水蒸发，在海洋上空凝结后又降回海洋。参与的水量<b>最大</b>。</p><p><b class="k-sealand">海陆间循环</b>：海洋与陆地之间的循环，使陆地水不断得到补充、更新。</p><p><b class="k-land">陆地内循环</b>：陆地上的水通过蒸发和<b>植物蒸腾</b>进入大气，又降落到陆地。山后的内陆盆地是<b>内流区</b>：内流河注入内陆湖，湖水只能靠蒸发离开，参与的水量最小。</p>',
      ),
      tourSteps: [
        {
          text: translate("海上内循环：海洋 → 蒸发 → 海上降水 → 海洋"),
          show: ["evap", "seaRain", "precip"],
          arrows: ["seaEvap", "seaRain"],
          cam: "ocean",
          tint: !0,
        },
        {
          text: translate("海陆间循环：海洋 ⇄ 陆地，陆地水得到补充"),
          show: bn,
          arrows: ["evap", "transport", "precip", "runoff", "infil", "ground"],
          cam: "overview",
          tint: !0,
        },
        {
          text: translate("陆地内循环：湖面蒸发、植物蒸腾 → 陆地降水"),
          show: [
            "lakeEvap",
            "inlandRain",
            "precip",
            "transpire",
            "landEvap",
            "river",
          ],
          arrows: ["lakeEvap", "inlandRain", "inlandRiver", "transpire"],
          cam: "inland",
          tint: !0,
        },
        {
          text: translate("三类循环同时进行，共同组成全球水循环"),
          show: mt,
          arrows: gn,
          cam: "overview",
          tint: !0,
        },
      ],
    },
    {
      id: "split",
      title: translate("下渗与地表径流"),
      sub: "Infiltration vs runoff",
      cam: "slope",
      show: [
        "precip",
        "runoff",
        "infil",
        "ground",
        "river",
        "evap",
        "transport",
        "transpire",
      ],
      arrows: ["runoff", "infil"],
      panel: "split",
      controls: ["rain", "veg", "slope", "soil", "impervious"],
      acts: ["storm"],
      params: {
        impervious: 0.15,
      },
      body: translate(
        "<p>雨水落到地面后有三条去路：被植被<b>截留</b>后蒸发，<b>下渗</b>进入土壤，或者形成<b>地表径流</b>。下渗得多，地表径流就少，地下水得到的补给就多。</p><p>影响下渗的主要因素：</p><p>· <b>降水强度</b>：雨越急，来不及下渗的越多<br>· <b>坡度</b>：坡越陡，水流越快，下渗越少<br>· <b>植被</b>：根系和枯枝落叶层使土壤疏松，下渗增多<br>· <b>土壤质地</b>：砂土孔隙大、下渗快，黏土下渗慢<br>· <b>地面硬化</b>：水泥、沥青路面几乎不透水</p><p>调节参数后按<b>来一场暴雨</b>，比较右侧的分配比例和流量过程线。</p>",
      ),
      steps: [
        translate("减小植被覆盖率，观察径流比例"),
        translate("增大坡度，再来一场暴雨"),
        translate("把土壤换成砂土和黏土比较"),
        translate("提高雨强，看下渗是否跟得上"),
      ],
    },
    {
      id: "meaning",
      title: translate("水循环的地理意义"),
      sub: "Why the cycle matters",
      cam: "overview",
      show: mt,
      arrows: Wt,
      panel: "meaning",
      controls: ["wind", "veg"],
      acts: ["delta", "heat", "shape"],
      tags: [],
      body: translate(
        "<p>水循环把大气圈、水圈、岩石圈和生物圈联系在一起：</p><p>① <b>维持全球水量的动态平衡</b>：海洋蒸发的水，通过降水和径流又回到海洋。</p><p>② <b>物质迁移与能量交换</b>：河流把泥沙和溶解物质从陆地搬运到海洋；水汽蒸发时吸热、凝结时放热，把低纬的热量带到高纬，缓解了不同纬度热量收支的不平衡。</p><p>③ <b>塑造地表形态</b>：流水在上游侵蚀出 V 形谷，在下游和河口堆积成冲积平原和三角洲。</p><p>④ <b>使水资源不断更新</b>：淡水被使用后，通过水循环得到补充。</p>",
      ),
      steps: [
        translate("按“泥沙入海”，看三角洲生长"),
        translate("按“热量交换”，看吸热与放热"),
        translate("按“侵蚀与堆积”，找到 V 形谷和三角洲"),
        translate("减少植被，河水变得更浑浊"),
      ],
    },
    {
      id: "urban",
      title: translate("城市化与海绵城市"),
      sub: "Urbanisation & sponge city",
      cam: "city",
      show: [
        "precip",
        "runoff",
        "infil",
        "ground",
        "river",
        "evap",
        "transport",
        "landEvap",
      ],
      arrows: ["runoff", "infil", "ground"],
      panel: "hydro",
      controls: ["impervious", "sponge", "rain"],
      acts: ["storm"],
      params: {
        impervious: 0.55,
      },
      body: translate(
        "<p>城市扩张后，农田和绿地变成了建筑、水泥地和沥青路，雨水<b>下渗减少</b>、<b>地表径流增加</b>，又通过排水管网迅速汇入河道：</p><p>· 洪峰流量增大，峰现时间提前，城市更容易内涝<br>· 地下水得不到补给，河流枯水期流量减少<br>· 蒸发、蒸腾减少，城市更干热</p><p><b>海绵城市</b>用透水铺装、绿色屋顶、下沉式绿地和雨水花园，让城市像海绵一样“吸水、蓄水、渗水、净水”，需要时再把蓄存的水“释放”出来。</p><p>拖动硬化率、打开海绵城市，再<b>来一场暴雨</b>，比较流量过程线。</p>",
      ),
      steps: [
        translate("把硬化率从 10% 提高到 80%"),
        translate("来一场暴雨，读出洪峰和峰现时间"),
        translate("打开海绵城市，再比较一次"),
        translate("看剖面：地下水的补给怎样变化"),
      ],
    },
    {
      id: "human",
      title: translate("人类活动的影响"),
      sub: "Human impacts",
      cam: "overview",
      show: mt,
      arrows: Wt,
      panel: "human",
      controls: ["reservoir", "divert", "veg", "pump"],
      acts: ["storm", "plane"],
      body: translate(
        "<p>人类活动对水循环影响最大的是<b>地表径流</b>环节，也能影响下渗、蒸发和降水：</p><p>· <b>修建水库</b>：拦蓄洪水、枯水期放水，<b>削峰补枯</b>；库区水面扩大，蒸发增加<br>· <b>跨流域调水</b>（如南水北调）：改变地表径流的<b>空间分布</b><br>· <b>植树造林</b>：增加下渗和蒸腾，减少地表径流和水土流失<br>· <b>过量抽取地下水</b>：形成地下水<b>降落漏斗</b>，引起地面沉降，沿海地区<b>海水入侵</b><br>· <b>人工增雨</b>：向云中播撒催化剂，促使水汽凝结降水</p>",
      ),
      steps: [
        translate("关闭水库，来一场暴雨，比较洪峰"),
        translate("打开跨流域调水，看受水区的变化"),
        translate("加大地下水开采，看剖面上的漏斗和咸水楔"),
        translate("派出飞机进行人工增雨"),
      ],
    },
    {
      id: "balance",
      title: translate("水量平衡"),
      sub: "Water balance",
      cam: "overview",
      show: mt,
      arrows: gn,
      panel: "balance",
      controls: ["wind", "season"],
      body: translate(
        '<p>从多年平均看，全球的水量收支是平衡的：</p><p class="eq">海洋：降水 + 径流入海 = 蒸发<br>陆地：降水 = 蒸发 + 径流</p><p>海洋蒸发的水比降回海洋的多，多出的部分随水汽输送到陆地，等于陆地流入海洋的<b>径流量</b>。</p><p>对一个流域，在一段时间里：</p><p class="eq">P = E + R + ΔS</p><p>P 为降水，E 为蒸发（含蒸腾），R 为径流，ΔS 为流域蓄水量的变化。多年平均 ΔS ≈ 0。<b>内流区</b>没有径流流出，降水最终全部蒸发：P ≈ E。</p>',
      ),
      steps: [
        translate("读全球水量平衡图，验证两个等式"),
        translate("在流域计算器里改变 P、E、R"),
        translate("对比夏季与冬季沙盘流域的收支"),
      ],
    },
    {
      id: "quiz",
      title: translate("随堂检测"),
      sub: "Check yourself",
      cam: "overview",
      show: mt,
      arrows: Wt,
      panel: "quiz",
      controls: [],
      quiz: !0,
      body: translate(
        "<p>沙盘上的箭头已换成字母。读图并回答问题，答完会显示解析。</p>",
      ),
      steps: [],
    },
    {
      id: "free",
      title: translate("自由探索"),
      sub: "Sandbox",
      cam: "overview",
      show: mt,
      arrows: Wt,
      panel: "flux",
      controls: [
        "season",
        "wind",
        "warm",
        "veg",
        "impervious",
        "sponge",
        "slope",
        "soil",
        "reservoir",
        "pump",
        "divert",
        "rain",
      ],
      acts: ["storm", "plane"],
      body: translate(
        "<p>所有参数都已开放。试着组合不同的条件，观察水循环各环节怎样变化：</p><p>· 强向陆风 + 夏季：迎风坡暴雨，河流水量大<br>· 冬季：山地积雪，河流靠地下水补给<br>· 毁林 + 高硬化率 + 暴雨：洪峰陡涨<br>· 全球变暖：雪线上升，冰川退缩</p>",
      ),
      steps: [],
    },
  ],
  Wa = [
    [0, translate("基础")],
    [2, translate("水循环过程")],
    [4, translate("影响与意义")],
    [8, translate("综合")],
  ];
function Ha(e) {
  return [
    {
      q: translate("人类活动对水循环影响最大的环节是"),
      opts: [e.runoff, e.transport, e.precip, e.evap],
      a: 0,
      why: translate(
        "修建水库、跨流域调水、城市硬化等，主要改变的都是地表径流。水汽输送、降水等发生在大气中，人类难以直接干预（人工增雨只是局部）。",
      ),
    },
    {
      q: translate("使陆地水资源不断得到补充、更新的水循环类型是"),
      opts: [
        translate("海陆间循环"),
        translate("海上内循环"),
        translate("陆地内循环"),
        translate("三者作用相同"),
      ],
      a: 0,
      why: translate(
        "海陆间循环把海洋蒸发的水汽输送到陆地上空形成降水，使陆地水不断得到补充。",
      ),
    },
    {
      q: translate("城市路面大面积硬化后，城市河流的变化是"),
      opts: [
        translate("洪峰流量增大，峰现时间提前"),
        translate("洪峰流量减小，峰现时间推迟"),
        translate("地下径流增加，枯水期流量增大"),
        translate("下渗增加，地表径流减少"),
      ],
      a: 0,
      why: translate(
        "硬化地面不透水，下渗减少、地表径流增加，雨水经排水管网迅速汇入河道，所以洪峰更高、来得更早；地下水补给减少，枯水期流量反而变小。",
      ),
    },
    {
      q: translate("我国西北内陆盆地的水循环主要属于"),
      opts: [
        translate("陆地内循环"),
        translate("海陆间循环"),
        translate("海上内循环"),
        translate("不参与水循环"),
      ],
      a: 0,
      why: translate(
        "内陆盆地深居内陆，河流注入内陆湖或消失在沙漠中，不流入海洋，是陆地内循环。",
      ),
    },
    {
      q: translate("南水北调工程主要影响水循环的"),
      opts: [e.runoff, e.evap, e.transport, e.ground],
      a: 0,
      why: translate(
        "跨流域调水把一个流域的地表水引到另一个流域，改变了地表径流的空间分布。",
      ),
    },
    {
      q: translate("植树造林对水循环的影响是"),
      opts: [
        translate("下渗增加，地表径流减少，蒸腾增加"),
        translate("下渗减少，地表径流增加"),
        translate("降水减少，蒸发减少"),
        translate("对水循环没有影响"),
      ],
      a: 0,
      why: translate(
        "林冠截留和疏松的枯枝落叶层使雨水更多地下渗，地表径流减少；植物蒸腾增加了大气中的水汽。",
      ),
    },
    {
      q: translate("参与水量最大的水循环类型是"),
      opts: [
        translate("海上内循环"),
        translate("海陆间循环"),
        translate("陆地内循环"),
        translate("三者相同"),
      ],
      a: 0,
      why: translate(
        "海洋面积广、蒸发量大，大部分水汽在海洋上空就凝结降回海洋。",
      ),
    },
    {
      q: translate("下列不属于水循环地理意义的是"),
      opts: [
        translate("使全球各地的降水量趋于相同"),
        translate("维持全球水量的动态平衡"),
        translate("塑造地表形态"),
        translate("使淡水资源不断更新"),
      ],
      a: 0,
      why: translate(
        "水循环不会让各地降水趋于相同，降水的地区差异依然很大。其余三项都是水循环的意义。",
      ),
    },
    {
      q: translate("沿海城市过量开采地下水，可能导致"),
      opts: [
        translate("地面沉降和海水入侵"),
        translate("潜水面上升"),
        translate("河流洪峰提前"),
        translate("海平面下降"),
      ],
      a: 0,
      why: translate(
        "开采量超过补给量时，潜水面持续下降形成降落漏斗，含水层被压密导致地面沉降；沿海淡水水位下降，海水沿含水层侵入内陆。",
      ),
    },
  ];
}
const Ba = [
    {
      id: "ocean",
      vol: 133800,
      share: 96.538,
      fresh: 0,
      days: 2500 * 365,
    },
    {
      id: "glacier",
      vol: 2406.4,
      share: 1.736,
      fresh: 68.7,
      days: 9700 * 365,
    },
    {
      id: "ground",
      vol: 2340,
      share: 1.688,
      fresh: 30.06,
      days: 1400 * 365,
    },
    {
      id: "permafrost",
      vol: 30,
      share: 0.022,
      fresh: 0.86,
      days: 1e4 * 365,
    },
    {
      id: "lake",
      vol: 17.64,
      share: 0.013,
      fresh: 0.26,
      days: 17 * 365,
    },
    {
      id: "soil",
      vol: 1.65,
      share: 0.0012,
      fresh: 0.05,
      days: 365,
    },
    {
      id: "atmos",
      vol: 1.29,
      share: 9e-4,
      fresh: 0.04,
      days: 8,
    },
    {
      id: "swamp",
      vol: 1.147,
      share: 8e-4,
      fresh: 0.03,
      days: 5 * 365,
    },
    {
      id: "river",
      vol: 0.212,
      share: 2e-4,
      fresh: 0.006,
      days: 16,
    },
    {
      id: "bio",
      vol: 0.112,
      share: 1e-4,
      fresh: 0.003,
      days: 0.5,
    },
  ],
  _a = {
    oceanEvap: 50.5,
    oceanPrecip: 45.8,
    landPrecip: 11.9,
    landEvap: 7.2,
    runoff: 4.7,
  },
  Vn = (e, a, o) => e - a - o,
  yn = (e) => Math.exp(0.0687 * (e - 20)),
  Mn = 6.5,
  Pn = {
    sand: {
      f0: 40,
      store: 0.6,
    },
    loam: {
      f0: 16,
      store: 1,
    },
    clay: {
      f0: 4,
      store: 1.3,
    },
  };
function vo({
  soil: e = "loam",
  veg: a = 0.5,
  slope: o = 0.3,
  wet: r = 0.3,
} = {}) {
  return (
    (Pn[e] || Pn.loam).f0 * (0.35 + 1.3 * a) * (1 - 0.55 * o) * (1 - 0.5 * r)
  );
}
function rn({
  rain: e = 20,
  soil: a = "loam",
  veg: o = 0.5,
  slope: r = 0.3,
  wet: i = 0.3,
  impervious: n = 0,
} = {}) {
  const l = Math.min(e, 1.2 * o),
    c = e - l,
    t = vo({
      soil: a,
      veg: o,
      slope: r,
      wet: i,
    }),
    m = 1 - n,
    f = Math.min(c, t) * m,
    h = c - f;
  return {
    rain: e,
    intercept: l,
    infil: f,
    runoff: h,
    f: t,
    infilRatio: f / e,
    runoffRatio: h / e,
  };
}
function Xn({
  rain: e = 30,
  hours: a = 2,
  impervious: o = 0.1,
  veg: r = 0.6,
  slope: i = 0.3,
  soil: n = "loam",
  sponge: l = !1,
  reservoir: c = !1,
  span: t = 30,
} = {}) {
  const f = Math.round(t / 0.25),
    h = l ? o * 0.35 : o;
  let w = l ? 25 : 0;
  const b = vo({
      soil: n,
      veg: r,
      slope: i,
      wet: 0.35,
    }),
    M = Math.max(0.35, 2.6 * (1 - 0.75 * h) * (1 - 0.35 * i) * (0.7 + 0.6 * r)),
    F = 26,
    S = [0, 0, 0];
  let A = 0,
    $ = 0;
  const E = 7,
    D = new Array(f).fill(0),
    T = new Array(f).fill(0),
    U = new Array(f).fill(0);
  let W = {
    rain: 0,
    quick: 0,
    infil: 0,
    retained: 0,
  };
  for (let I = 0; I < f; I++) {
    const z = I * 0.25 < a ? e : 0;
    U[I] = z;
    const Q = rn({
      rain: z,
      soil: n,
      veg: r,
      slope: i,
      wet: 0.35,
      impervious: h,
    });
    let J = z > 0 ? Q.runoff : 0;
    const ue = z > 0 ? Q.infil : 0;
    if (w > 0 && J > 0) {
      const se = Math.min(w, J * 0.25);
      ((w -= se), (J -= se / 0.25), (W.retained += se), (A += se * 0.6));
    }
    ((W.rain += z * 0.25),
      (W.quick += J * 0.25),
      (W.infil += ue * 0.25),
      (A += ue * 0.25 * 0.45));
    let me = J;
    for (let se = 0; se < S.length; se++)
      ((S[se] += me * 0.25),
        (me = S[se] / (M / S.length)),
        (S[se] -= me * 0.25));
    const he = me,
      K = A / F;
    A -= K * 0.25;
    let ce = he;
    (c && (($ += he * 0.25), (ce = $ / E), ($ -= ce * 0.25)),
      (D[I] = ce + K + 0.08),
      (T[I] = K + 0.08));
  }
  let B = 0,
    Y = 0;
  return (
    D.forEach((I, X) => {
      I > B && ((B = I), (Y = X * 0.25));
    }),
    {
      dt: 0.25,
      q: D,
      base: T,
      input: U,
      peak: B,
      peakTime: Y,
      runoffDepth: W.quick,
      infilDepth: W.infil,
      retained: W.retained,
      coefficient: W.quick / W.rain,
      fCap: b,
      fCapEff: b * (1 - h),
    }
  );
}
function Qt({ pump: e = 0, recharge: a = 0.5 } = {}) {
  const o = Math.max(0, e - 0.6 * a);
  return {
    drawdown: 2 + 55 * o + 6 * e,
    subsidence: o > 0 ? 180 * o * o : 0,
    intrusion: 0.6 + 9 * o,
    overdraft: o > 0.02,
  };
}
const Ia = {
    sea: 3,
  },
  Kn = {
    mountain: 2.6,
    inland: 1.2,
  };
function en({ season: e = "summer", warm: a = 0 } = {}) {
  const o = (e === "winter" ? 16 : 27) + a,
    r = (e === "winter" ? 4 : 29) + a;
  return {
    sea: o,
    land: r,
    mountain: r - Mn * Kn.mountain,
    summit: r - Mn * 4.2,
    inland: r + (e === "winter" ? -10 : 2) - Mn * Kn.inland,
  };
}
const _t = {
  season: "summer",
  warm: 0,
  wind: 0.6,
  veg: 0.7,
  impervious: 0.15,
  slope: 0.35,
  soil: "loam",
  sponge: !1,
  reservoir: !0,
  pump: 0.2,
  divert: 0,
  seed: 0,
};
function Na() {
  return {
    ocean: 1e6,
    vSea: 30,
    vLand: 20,
    vInland: 6,
    snow: 40,
    glacier: 400,
    soil: 120,
    ground: 600,
    river: 12,
    dam: 60,
    lake: 300,
    inSoil: 30,
  };
}
function Rn(e, a = _t, o = 1) {
  const r = {
      ...e,
    },
    i = en(a),
    n = {},
    l = a.wind,
    c = 40 * yn(i.sea) * Ia.sea;
  ((n.seaEvap = Math.max(0, 0.16 * (c - r.vSea) * (0.5 + 0.8 * l))),
    (n.seaRain = Math.max(0, 0.5 * (r.vSea - 0.5 * c))),
    (n.transport = 0.22 * l * r.vSea));
  const t = 32 * yn(0.5 * (i.land + i.mountain)),
    m = Math.max(0, 0.65 * (r.vLand - 0.7 * t)),
    f = 0.45 * qt((1.5 - i.mountain) / 6) + 0.55 * qt((1.5 - i.land) / 6);
  ((n.landRain = m * (1 - f)),
    (n.snowfall = m * f),
    (n.overRidge = 0.07 * l * r.vLand),
    (n.landBack = 0.05 * r.vLand));
  const h = Math.max(0, i.mountain) * 0.012;
  ((n.melt = h * r.snow),
    (n.glacierMelt = Math.max(0, i.summit) * 6e-4 * r.glacier),
    (n.glacierFeed = i.summit < 0 ? 0.004 * r.snow : 0));
  const w = (n.landRain + n.melt + n.glacierMelt) / 6,
    b = rn({
      rain: Math.max(w, 1e-9),
      soil: a.soil,
      veg: a.veg,
      slope: a.slope,
      wet: qt(r.soil / 260),
      impervious: a.impervious * (a.sponge ? 0.35 : 1),
    }),
    M = n.landRain + n.melt + n.glacierMelt;
  ((n.infil = (M * (b.infil + b.intercept * 0.3)) / b.rain),
    (n.intercept = (M * b.intercept * 0.7) / b.rain),
    (n.surface = M - n.infil - n.intercept));
  const F = Math.max(0, i.land),
    S = qt(r.soil / 220);
  ((n.transpire = 0.2 * a.veg * F * S * (Pn[a.soil]?.store ?? 1) ** 0.3),
    (n.soilEvap = 0.02 * (1 - 0.6 * a.veg) * (1 - 0.7 * a.impervious) * F * S),
    (n.recharge = 0.03 * Math.max(0, r.soil - 60)),
    (n.baseflow = r.ground / 140),
    (n.subSea = r.ground / 900),
    (n.pump = 0.012 * a.pump * r.ground),
    (n.damIn = n.damRelease = n.damEvap = 0),
    a.reservoir &&
      ((n.damIn = 0.3 * r.river),
      (n.damRelease = r.dam / 20),
      (n.damEvap = 0.004 * F * Math.sqrt(r.dam))),
    (n.divert = a.divert * 0.18 * r.river),
    (n.discharge = r.river / 2.5));
  const A = 20 * yn(i.inland);
  ((n.inlandRain = Math.max(0, 0.4 * (r.vInland - 0.6 * A))),
    (n.inlandRunoff = 0.08 * r.inSoil),
    (n.inlandET = 0.03 * Math.max(0, i.inland) * qt(r.inSoil / 80)),
    (n.lakeEvap = 0.0012 * Math.max(0, i.inland + 4) * Math.sqrt(r.lake) * 6),
    (n.inlandOut = 0.08 * r.vInland));
  const $ = (U, W, B) => {
    const Y = Math.min(B * o, r[U]);
    return ((r[U] -= Y), (r[W] += Y), Y / o);
  };
  ((n.seaEvap = $("ocean", "vSea", n.seaEvap)),
    (n.seaRain = $("vSea", "ocean", n.seaRain)),
    (n.transport = $("vSea", "vLand", n.transport)),
    (n.landBack = $("vLand", "vSea", n.landBack)),
    (n.overRidge = $("vLand", "vInland", n.overRidge)));
  const E = $("vLand", "soil", n.landRain);
  ((n.snowfall = $("vLand", "snow", n.snowfall)),
    (n.melt = $("snow", "soil", n.melt)),
    (n.glacierFeed = $("snow", "glacier", n.glacierFeed)),
    (n.glacierMelt = $("glacier", "soil", n.glacierMelt)));
  const D = E + n.melt + n.glacierMelt,
    T = M > 0 ? D / M : 0;
  return (
    (n.surface *= T),
    (n.infil *= T),
    (n.intercept *= T),
    $("soil", "vLand", n.intercept),
    $("soil", "river", n.surface),
    (n.transpire = $("soil", "vLand", n.transpire)),
    (n.soilEvap = $("soil", "vLand", n.soilEvap)),
    (n.recharge = $("soil", "ground", n.recharge)),
    (n.baseflow = $("ground", "river", n.baseflow)),
    (n.subSea = $("ground", "ocean", n.subSea)),
    (n.pump = $("ground", "soil", n.pump)),
    a.reservoir &&
      ((n.damIn = $("river", "dam", n.damIn)),
      (n.damRelease = $("dam", "river", n.damRelease)),
      (n.damEvap = $("dam", "vLand", n.damEvap))),
    (n.divert = $("river", "inSoil", n.divert)),
    (n.discharge = $("river", "ocean", n.discharge)),
    (n.inlandRain = $("vInland", "inSoil", n.inlandRain)),
    (n.inlandET = $("inSoil", "vInland", n.inlandET)),
    (n.inlandRunoff = $("inSoil", "lake", n.inlandRunoff)),
    (n.lakeEvap = $("lake", "vInland", n.lakeEvap)),
    (n.inlandOut = $("vInland", "vSea", n.inlandOut)),
    (n.landPrecip = E + n.snowfall),
    (n.landEvapAll = n.intercept + n.transpire + n.soilEvap + n.damEvap),
    (n.runoffAll = n.discharge + n.subSea),
    (n.snowFrac = f),
    (n.temps = i),
    {
      s: r,
      f: n,
    }
  );
}
function Sn(e = _t, a = 3) {
  let o = Na(),
    r;
  for (let i = 0; i < a; i++)
    for (const n of ["winter", "summer"])
      for (let l = 0; l < 182; l++)
        ({ s: o, f: r } = Rn(
          o,
          {
            ...e,
            season: n,
          },
          1,
        ));
  for (let i = 0; i < 60; i++) ({ s: o, f: r } = Rn(o, e, 1));
  return {
    s: o,
    f: r,
  };
}
function qt(e) {
  return e < 0 ? 0 : e > 1 ? 1 : e;
}
function Yn(e, a, o, r, i) {
  e.innerHTML = "";
  for (const n of a) {
    const l = r[n];
    if (!l) continue;
    const c = document.createElement("div");
    if (((c.className = `ctl ctl-${l.type}`), l.type === "range")) {
      ((c.innerHTML = `<label><span></span><b></b></label><input type="range" min="${l.min}" max="${l.max}" step="${l.step}">`),
        (c.querySelector("span").textContent = l.label));
      const t = c.querySelector("input"),
        m = c.querySelector("b");
      t.value = o[n];
      const f = () => {
        ((m.textContent = l.fmt(+t.value)),
          t.style.setProperty(
            "--p",
            `${((t.value - l.min) / (l.max - l.min)) * 100}%`,
          ));
      };
      (f(),
        t.addEventListener("input", () => {
          (f(), i(n, +t.value));
        }));
    } else if (l.type === "seg") {
      ((c.innerHTML = '<label><span></span></label><div class="seg"></div>'),
        (c.querySelector("span").textContent = l.label));
      const t = c.querySelector(".seg");
      for (const [m, f] of l.opts) {
        const h = document.createElement("button");
        ((h.textContent = f),
          h.classList.toggle("on", o[n] === m),
          h.addEventListener("click", () => {
            (t
              .querySelectorAll("button")
              .forEach((w) => w.classList.toggle("on", w === h)),
              i(n, m));
          }),
          t.appendChild(h));
      }
    } else if (l.type === "toggle") {
      c.innerHTML = '<button class="tg"><i></i><span></span></button>';
      const t = c.querySelector("button");
      ((t.querySelector("span").textContent = l.label),
        t.classList.toggle("on", !!o[n]),
        t.addEventListener("click", () => {
          (t.classList.toggle("on"), i(n, t.classList.contains("on")));
        }));
    }
    e.appendChild(c);
  }
}
const st = (e) =>
    String(e).replace(
      /[&<>"]/g,
      (a) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
        })[a],
    ),
  Oa = (e, a = 1) => (Math.abs(e) >= 100 ? Math.round(e) : e.toFixed(a));
function Da(e, a) {
  (!e.__built || e.__n !== a.length) &&
    ((e.innerHTML = a
      .map(
        (r) =>
          `<div class="fb" data-id="${r.id}"><em>${r.n}</em><span>${st(r.label)}</span><i><b></b></i><s></s></div>`,
      )
      .join("")),
    (e.__built = !0),
    (e.__n = a.length));
  const o = e.querySelectorAll(".fb");
  a.forEach((r, i) => {
    const n = o[i];
    (n.classList.toggle("hot", !!r.hot),
      (n.querySelector("b").style.width =
        `${Math.min(100, (r.value / r.max) * 100)}%`),
      (n.querySelector("b").style.background = r.color),
      (n.querySelector("s").textContent = Oa(r.value)));
  });
}
function Ua(e, a, o, r, i) {
  const n = (c) =>
      c < 1
        ? translate("{0} 小时", [Math.round(c * 24)])
        : c < 60
          ? translate("{0} 天", [Math.round(c)])
          : c < 730
            ? translate("{0} 年", [Math.round(c / 365)])
            : translate("{0} 年", [Math.round(c / 365).toLocaleString()]),
    l = (c) => Math.max(0, (Math.log10(c) + 4.2) / 6.2);
  ((e.innerHTML = `<div class="stk"><div class="stk-bar"><i style="width:96.5%" class="o"></i><i style="width:1%" class="s"></i><i style="width:2.5%" class="f"></i></div>
    <div class="stk-l"><span><b class="o"></b>${translate("海水 96.5%")}</span><span><b class="f"></b>${translate("淡水 2.5%")}</span><span><b class="s"></b>${translate("咸水湖与咸地下水 1%")}</span></div></div>
    <div class="st-h"><span>${translate("水体")}</span><span>${translate("占全球水量 %（对数刻度）")}</span><span>${translate("更新周期")}</span></div>
    ${a.map((c) => `<button class="st${c.id === r ? " on" : ""}" data-id="${c.id}"><span>${st(o[c.id])}</span><i><b style="width:${(l(c.share) * 100).toFixed(1)}%"></b><s>${c.share >= 0.01 ? c.share.toFixed(c.share > 1 ? 1 : 3) : c.share.toFixed(4)}</s></i><em>${n(c.days)}</em></button>`).join("")}`),
    e
      .querySelectorAll(".st")
      .forEach((c) => c.addEventListener("click", () => i(c.dataset.id))));
}
function Ga(e, a) {
  const o = {
      s: [60, 150],
      l: [240, 150],
      g: [150, 36],
    },
    r = {
      s: translate("固态 冰·雪"),
      l: translate("液态 水"),
      g: translate("气态 水汽"),
    },
    i = [
      ["melt", "s", "l", translate("熔化"), translate("吸热"), 1],
      ["freeze", "l", "s", translate("凝固"), translate("放热"), -1],
      ["evap", "l", "g", translate("汽化"), translate("吸热"), 1],
      ["cond", "g", "l", translate("液化"), translate("放热"), -1],
      ["subl", "s", "g", translate("升华"), translate("吸热"), 1],
      ["depo", "g", "s", translate("凝华"), translate("放热"), -1],
    ],
    n = ([l, c], t) => {
      const [m, f] = o[l],
        [h, w] = o[c],
        b = h - m,
        M = w - f,
        F = Math.hypot(b, M),
        [S] = [l, c].sort(),
        A = S === l ? 1 : -1,
        $ = (-M / F) * A,
        E = (b / F) * A,
        D = 9 * t,
        T = m + (b / F) * 34 + $ * D,
        U = f + (M / F) * 34 + E * D,
        W = h - (b / F) * 36 + $ * D,
        B = w - (M / F) * 36 + E * D;
      return {
        d: `M${T} ${U}L${W} ${B}`,
        mx: (T + W) / 2 + $ * 18 * t,
        my: (U + B) / 2 + E * 18 * t,
      };
    };
  e.innerHTML = `<svg viewBox="0 0 300 190" class="phase"><defs><marker id="ph-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
    ${i
      .map(([l, c, t, m, f, h]) => {
        const w = n([c, t], h);
        return `<g class="pa ${`${a.includes(l) ? "on" : ""} ${f === translate("吸热") ? "abs" : "rel"}`}"><path d="${w.d}" marker-end="url(#ph-a)"/><text x="${w.mx}" y="${w.my}">${st(m)}</text><text class="ht" x="${w.mx}" y="${w.my + 11}">${st(f)}</text></g>`;
      })
      .join("")}
    ${Object.entries(o)
      .map(
        ([l, [c, t]]) =>
          `<g class="pn n-${l}"><circle cx="${c}" cy="${t}" r="30"/><text x="${c}" y="${t + 4}">${st(r[l])}</text></g>`,
      )
      .join("")}
  </svg>`;
}
function kn(e, a, { cursor: o = null, rain: r = null } = {}) {
  const f = a.flatMap((E) => E.q),
    h = Math.max(4, ...f) * 1.1,
    w = a[0].q.length,
    b = a[0].dt,
    M = (E) => 34 + (E / (w - 1)) * 288,
    F = (E) => 148 - (E / h) * 114,
    S = (E) =>
      E.map(
        (D, T) => `${T ? "L" : "M"}${M(T).toFixed(1)} ${F(D).toFixed(1)}`,
      ).join(""),
    A = r
      ? r
          .map((E, D) =>
            E > 0
              ? `<rect x="${M(D) - 1}" y="8" width="${288 / (w - 1) + 0.6}" height="${Math.min(26, E * 0.45)}"/>`
              : "",
          )
          .join("")
      : "",
    $ = [0, 6, 12, 18, 24, 30].filter((E) => E <= (w - 1) * b);
  e.innerHTML = `<svg viewBox="0 0 330 170" class="hg">
    <g class="rainb">${A}</g>
    <text class="ax" x="34" y="6">${translate("雨强")}</text>
    <path class="grid" d="M34 148H322M34 34V148"/>
    ${$.map((E) => `<text class="ax" x="${M(E / b)}" y="162" text-anchor="middle">${E}h</text>`).join("")}
    <text class="ax" x="4" y="42">${translate("流量")}</text>
    ${a.map((E, D) => `<path class="q q${D}" d="${S(E.q)}" style="stroke:${E.color}"/><path class="qb" d="${S(E.base || [])}" style="stroke:${E.color}"/>`).join("")}
    ${a.map((E) => `<circle cx="${M(E.peakTime / b)}" cy="${F(E.peak)}" r="3.2" style="fill:${E.color}"/>`).join("")}
    ${o !== null ? `<path class="cur" d="M${M(o / b)} 34V148"/>` : ""}
  </svg>
  <div class="hg-l">${a.map((E) => `<span><i style="background:${E.color}"></i>${st(E.label)} · ${translate("洪峰 {0}", [E.peak.toFixed(1)])} · ${translate("峰现 {0} h", [E.peakTime.toFixed(1)])}</span>`).join("")}</div>`;
}
function Va(e, a) {
  const o = (r) => ((r / a.rain) * 100).toFixed(0);
  e.innerHTML = `<div class="sp"><i class="ic" style="flex:${a.intercept}"></i><i class="in" style="flex:${a.infil}"></i><i class="ru" style="flex:${a.runoff}"></i></div>
    <div class="sp-l"><span><b class="ic"></b>${translate("截留 {0}%", [o(a.intercept)])}</span><span><b class="in"></b>${translate("下渗 {0}%", [o(a.infil)])}</span><span><b class="ru"></b>${translate("地表径流 {0}%", [o(a.runoff)])}</span></div>
    <div class="sp-f">${translate("下渗能力 {0} mm/h · 雨强 {1} mm/h", [a.f.toFixed(1), a.rain.toFixed(0)])}</div>`;
}
function Xa(e, a) {
  e.innerHTML = `<svg viewBox="0 0 330 190" class="gb">
    <defs><marker id="gb-a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>
    <rect class="sea" x="10" y="140" width="170" height="40" rx="4"/><text class="lb" x="95" y="165">${translate("海洋")}</text>
    <path class="land" d="M180 180V128L230 112L270 92L320 110V180Z"/><text class="lb" x="262" y="160">${translate("陆地")}</text>
    <path class="ar ev" d="M50 136V40" marker-end="url(#gb-a)"/><text class="v" x="56" y="70">${translate("蒸发")} ${a.oceanEvap}</text>
    <path class="ar pr" d="M130 40V136" marker-end="url(#gb-a)"/><text class="v" x="136" y="100">${translate("降水")} ${a.oceanPrecip}</text>
    <path class="ar tr" d="M70 26H220" marker-end="url(#gb-a)"/><text class="v" x="110" y="20">${translate("水汽输送")} ${(a.oceanEvap - a.oceanPrecip).toFixed(1)}</text>
    <path class="ar pr" d="M244 30V100" marker-end="url(#gb-a)"/><text class="v" x="250" y="60">${translate("降水")} ${a.landPrecip}</text>
    <path class="ar ev" d="M300 100V30" marker-end="url(#gb-a)"/><text class="v" x="270" y="24">${translate("蒸发")} ${a.landEvap}</text>
    <path class="ar ru" d="M226 132Q200 146 176 150" marker-end="url(#gb-a)"/><text class="v" x="190" y="128">${translate("径流")} ${a.runoff}</text>
  </svg><div class="gb-n">${translate("单位：万 km³/年。海洋 {0} + {1} = {2}；陆地 {3} = {4} + {1}", [a.oceanPrecip, a.runoff, a.oceanEvap, a.landPrecip, a.landEvap])}</div>`;
}
function zn(e, { mode: a, hot: o = null, names: r, L: i }) {
  const n = "#e8892a",
    l = "#3f9be0",
    c = "#4fae4a",
    t = (S, A, $, E, D, T, { dash: U = !1, show: W = !0 } = {}) =>
      W
        ? `<g class="cy${o === S ? " hot" : ""}" style="color:${$}"><path d="${A}" class="flow${U ? " rain" : ""}" marker-end="url(#cy-a-${$.slice(1)})"/>${E ? `<text x="${D}" y="${T}">${st(E)}</text>` : ""}</g>`
        : "",
    m = (S) =>
      `<marker id="cy-a-${S.slice(1)}" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="${S}"/></marker>`,
    f = a === "seaLand" || a === "cycles" || a === "meaning",
    h = (S, A) => (a === "seaLand" ? `${A} ${r[S]}` : r[S]),
    w = (S, A, $ = 1) =>
      `<g transform="translate(${S} ${A}) scale(${$})"><path d="M0 0v-5" stroke="#7a5236" stroke-width="1.6"/><path d="M-6-4L0-17L6-4Z" fill="#4f8a3c"/><path d="M-5-9L0-20L5-9Z" fill="#5f9a46"/></g>`,
    b = (S, A, $) =>
      `<g transform="translate(${S} ${A})" fill="${$ ? "#c9cdd8" : "#ffffff"}" stroke="#b8bfd0" stroke-width=".8"><ellipse cx="0" cy="0" rx="16" ry="8"/><ellipse cx="-9" cy="2" rx="9" ry="6"/><ellipse cx="10" cy="2" rx="10" ry="6"/><ellipse cx="2" cy="-5" rx="9" ry="7"/></g>`,
    M = (S, A, $) =>
      `<g class="bd"><circle cx="${S}" cy="${A}" r="8"/><text x="${S}" y="${A + 3.6}">${$}</text></g>`,
    F = `<svg viewBox="0 0 340 215" class="cyd">
    <defs>${[n, l, c, "#a07a4a"].map(m).join("")}
      <linearGradient id="cy-sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e9ecfb"/><stop offset="1" stop-color="#fbf3ee"/></linearGradient>
      <linearGradient id="cy-sea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fc9e6"/><stop offset="1" stop-color="#2f78bf"/></linearGradient></defs>
    <rect x="0" y="0" width="340" height="215" rx="10" fill="url(#cy-sky)"/>
    <circle cx="26" cy="24" r="10" fill="#ffd36a"/><g stroke="#ffd36a" stroke-width="1.4">${[
      0, 1, 2, 3, 4, 5, 6, 7,
    ]
      .map((S) => {
        const A = (S * Math.PI) / 4;
        return `<path d="M${26 + Math.cos(A) * 13} ${24 + Math.sin(A) * 13}L${26 + Math.cos(A) * 17} ${24 + Math.sin(A) * 17}"/>`;
      })
      .join("")}</g>
    <path d="M0 152H132L150 140L178 112L205 78L222 64L240 82L258 110L278 132L300 138L340 132V215H0Z" fill="#a9cf6a"/>
    <path d="M205 78L222 64L240 82L231 80L222 72L213 82Z" fill="#fff"/>
    <path d="M132 152L150 140L178 112L205 78L222 64L240 82L258 110L278 132L300 138L340 132V170H132Z" fill="#c8a06a" opacity=".35"/>
    <path d="M132 168Q240 150 340 152" stroke="#5a92d6" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
    <path d="M132 186Q240 178 340 176V215H132Z" fill="#9a8478" opacity=".45"/>
    <rect x="0" y="152" width="132" height="63" fill="url(#cy-sea)"/>
    <path d="M0 154q8-3 16 0t16 0 16 0 16 0 16 0 16 0 16 0 16 0 4 0" stroke="#d8f3ff" stroke-width="1.2" fill="none"/>
    <ellipse cx="303" cy="139" rx="20" ry="4.5" fill="#6fc9e6"/>
    ${w(160, 138)}${w(170, 130, 0.9)}${w(186, 112, 0.85)}${w(150, 146, 0.8)}
    ${a === "meaning" ? '<path d="M120 154L136 150L150 156L132 160Z" fill="#d6b67a"/><path d="M226 92L222 104L218 92" stroke="#7a5a3a" stroke-width="1.4" fill="none"/>' : ""}
    <text class="lb" x="56" y="200">${st(i.ocean)}</text><text class="lb" x="300" y="204">${st(i.land)}</text>
    ${a === "cycles" ? `<text class="lb" x="303" y="160">${st(i.lake)}</text>` : ""}
    ${b(64, 52)}${b(200, 40, a !== "cycles")}${a === "cycles" ? b(300, 74) + b(26, 72) : ""}
    ${
      a === "cycles"
        ? t("seaEvap", "M14 146V86", l, r.seaEvap, 20, 136) +
          t("seaRain", "M36 84V146", l, "", 0, 0, {
            dash: !0,
          })
        : ""
    }
    ${t("evap", "M70 146C68 120 66 96 66 66", n, h("evap", "①"), 74, 112, {
      show: f,
    })}
    ${t(
      "transport",
      "M84 46C118 34 150 32 180 36",
      n,
      h("transport", "②"),
      98,
      28,
      {
        show: f,
      },
    )}
    ${t("precip", "M202 52L210 96", n, h("precip", "③"), 214, 70, {
      dash: !0,
      show: f,
    })}
    ${t(
      "runoff",
      "M196 108C186 128 170 140 140 150",
      n,
      h("runoff", "④"),
      104,
      134,
      {
        show: f,
      },
    )}
    ${t("infil", "M176 140V166", n, h("infil", "⑤"), 182, 162, {
      show: f,
    })}
    ${t(
      "ground",
      "M232 178C190 182 150 182 112 176",
      n,
      h("ground", "⑥"),
      150,
      196,
      {
        show: f,
      },
    )}
    ${t(
      "transpire",
      "M168 116C166 100 168 86 174 70",
      a === "cycles" ? c : n,
      r.transpire,
      128,
      92,
      {
        show: a !== "seaLand",
      },
    )}
    ${
      a === "cycles"
        ? t("lakeEvap", "M310 134V94", c, r.lakeEvap, 262, 104) +
          t("inlandRain", "M290 86L286 128", c, "", 0, 0, {
            dash: !0,
          })
        : ""
    }
    ${
      a === "meaning"
        ? `<path d="M200 118C180 136 160 148 128 156" stroke="#a07a4a" stroke-width="2.4" fill="none" class="flow" marker-end="url(#cy-a-a07a4a)"/>
      <text class="ht abs" x="22" y="140">${st(i.abs)}</text><text class="ht rel" x="232" y="34">${st(i.rel)}</text>
      ${M(110, 64, "①")}${M(52, 132, "②")}${M(238, 98, "③")}${M(300, 112, "④")}`
        : ""
    }
  </svg>`;
  e.innerHTML = F;
}
const et = (e, a = 0, o = 1) => (e < a ? a : e > o ? o : e),
  Zn = (e) => (e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2),
  yt = (e) => `${Math.round(e * 100)}%`;
function Ka() {
  const e = (d) => document.getElementById(d),
    a = {
      evap: translate("蒸发"),
      transport: translate("水汽输送"),
      precip: translate("降水"),
      runoff: translate("地表径流"),
      infil: translate("下渗"),
      ground: translate("地下径流"),
      transpire: translate("植物蒸腾"),
      seaEvap: translate("海面蒸发"),
      seaRain: translate("海上降水"),
      lakeEvap: translate("湖面蒸发"),
      inlandRain: translate("内陆降水"),
      inlandRiver: translate("内流河"),
    },
    o = {
      ocean: translate("海洋水"),
      glacier: translate("冰川与永久积雪"),
      ground: translate("地下水"),
      permafrost: translate("永冻土底冰"),
      lake: translate("湖泊水"),
      soil: translate("土壤水"),
      atmos: translate("大气水"),
      swamp: translate("沼泽水"),
      river: translate("河流水"),
      bio: translate("生物水"),
    },
    r = {
      sea: [
        translate("海洋"),
        translate(
          "全球最大的水体。海面蒸发是水汽的主要来源，海陆间循环和海上内循环都从这里开始。",
        ),
      ],
      beach: [
        translate("海岸"),
        translate("海陆交界处，地下水在这里向海洋排泄。"),
      ],
      delta: [
        translate("河口三角洲"),
        translate("河流携带的泥沙在河口流速减慢后堆积而成。"),
      ],
      city: [
        translate("城市"),
        translate("硬化地面不透水：下渗减少，地表径流增加，洪峰提前。"),
      ],
      farm: [
        translate("农田"),
        translate(
          "灌溉用水来自河流、水库和地下水，农作物蒸腾也向大气输送水汽。",
        ),
      ],
      forest: [
        translate("森林"),
        translate(
          "林冠截留降水，枯枝落叶层增加下渗、涵养水源；植物蒸腾向大气输送水汽。",
        ),
      ],
      glacier: [
        translate("冰川与积雪"),
        translate("固态水，淡水的主要储存形式。夏季消融，融水补给河流。"),
      ],
      reservoir: [
        translate("水库"),
        translate("汛期拦蓄洪水，枯水期放水补给下游，调节地表径流的季节分配。"),
      ],
      river: [
        translate("河流"),
        translate("地表径流的通道，把陆地上的水和泥沙送入海洋。"),
      ],
      inlandRiver: [
        translate("内流河"),
        translate("不流入海洋，最终注入内陆湖或消失在沙漠中。"),
      ],
      lake: [
        translate("内陆湖"),
        translate("内流区河流的归宿，湖水只能通过蒸发离开，参与陆地内循环。"),
      ],
      inland: [
        translate("内陆盆地"),
        translate(
          "位于山地背风坡的雨影区，气流下沉增温，降水稀少，属于内流区。",
        ),
      ],
      soil: [
        translate("土壤层"),
        translate("雨水下渗先进入土壤，土壤水供植物吸收，多余的继续向下渗透。"),
      ],
      aquifer: [
        translate("透水层（含水层）"),
        translate(
          "砂砾层孔隙大，能储存和传导地下水。潜水面以下的孔隙充满了水。",
        ),
      ],
      clay: [
        translate("隔水层"),
        translate("黏土、页岩等致密岩层，水很难通过，托住上面的地下水。"),
      ],
      bedrock: [
        translate("基岩"),
        translate("坚硬的岩石，只在裂隙中含少量地下水。"),
      ],
      seawater: [
        translate("海水"),
        translate("海水含盐度约 3.5%，不能直接饮用和灌溉。"),
      ],
    },
    i = {
      season: {
        label: translate("季节"),
        type: "seg",
        opts: [
          ["summer", translate("夏季")],
          ["winter", translate("冬季")],
        ],
      },
      wind: {
        label: translate("向陆风强度"),
        type: "range",
        min: 0.05,
        max: 1,
        step: 0.01,
        fmt: (d) =>
          (d < 0.3
            ? translate("弱")
            : d < 0.7
              ? translate("中")
              : translate("强")) + ` · ${yt(d)}`,
      },
      warm: {
        label: translate("全球变暖"),
        type: "range",
        min: 0,
        max: 4,
        step: 0.1,
        fmt: (d) => `+${d.toFixed(1)} °C`,
      },
      veg: {
        label: translate("植被覆盖率"),
        type: "range",
        min: 0.05,
        max: 1,
        step: 0.01,
        fmt: yt,
      },
      impervious: {
        label: translate("城市硬化率"),
        type: "range",
        min: 0.02,
        max: 0.9,
        step: 0.01,
        fmt: yt,
      },
      slope: {
        label: translate("坡度"),
        type: "range",
        min: 0.02,
        max: 1,
        step: 0.01,
        fmt: (d) => `${Math.round(2 + d * 33)}°`,
      },
      soil: {
        label: translate("土壤质地"),
        type: "seg",
        opts: [
          ["sand", translate("砂土")],
          ["loam", translate("壤土")],
          ["clay", translate("黏土")],
        ],
      },
      sponge: {
        label: translate("海绵城市"),
        type: "toggle",
      },
      reservoir: {
        label: translate("水库调蓄"),
        type: "toggle",
      },
      pump: {
        label: translate("地下水开采"),
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
        fmt: (d) =>
          (d < 0.3
            ? translate("适度")
            : d < 0.6
              ? translate("较多")
              : translate("过量")) + ` · ${yt(d)}`,
      },
      divert: {
        label: translate("跨流域调水"),
        type: "range",
        min: 0,
        max: 1,
        step: 0.01,
        fmt: (d) => (d ? yt(d) : translate("未启用")),
      },
      rain: {
        label: translate("暴雨雨强"),
        type: "range",
        min: 10,
        max: 80,
        step: 1,
        fmt: (d) => `${d} mm/h`,
      },
    },
    n = Ra(e("c3")),
    l = Fa(n.scene, n),
    c = ja(n.scene, e("labels"), a),
    t = {
      li: 0,
      P: {
        ..._t,
        rain: 40,
      },
      model: null,
      F: null,
      Fs: null,
      day: 0,
      speed: 1,
      playing: !0,
      labels: !0,
      tour: -1,
      tourAuto: !1,
      tourT: 0,
      storm: 0,
      stormT: -1,
      plane: null,
      delta: 0.3,
      deltaAnim: -1,
      heat: 0,
      shape: 0,
      pick: null,
      quiz: null,
      wet: 0,
      cam: null,
      lastHyd: null,
      basin: {
        P: 900,
        E: 520,
        R: 330,
      },
    },
    m = () => Ft[t.li],
    f = Sn(_t).s;
  function h() {
    const d = Sn(w());
    ((t.model = d.s),
      (t.F = d.f),
      (t.Fs = {
        ...d.f,
      }));
  }
  const w = () => ({
    ...t.P,
    reservoir: t.P.reservoir,
  });
  function b(d, x = 1.6) {
    const k = Gn[d] || Gn.overview;
    t.cam = {
      from: [n.camera.position.clone(), n.controls.target.clone()],
      to: [new pe(...k[0]), new pe(...k[1])],
      t: 0,
      dur: x,
    };
  }
  function M(d) {
    if (!t.cam) return;
    t.cam.t += d / t.cam.dur;
    const x = Zn(et(t.cam.t));
    (n.camera.position.lerpVectors(t.cam.from[0], t.cam.to[0], x),
      n.controls.target.lerpVectors(t.cam.from[1], t.cam.to[1], x),
      t.cam.t >= 1 && (t.cam = null));
  }
  n.controls.addEventListener("start", () => (t.cam = null));
  const F = e("tags");
  let S = [];
  function A(d) {
    ((F.innerHTML = ""),
      (S = d.map((x) => {
        const k = document.createElement("div");
        return (
          (k.className = `tag ${x.cls || ""}`),
          (k.textContent = x.textFn ? x.textFn() : x.text),
          F.appendChild(k),
          {
            ...x,
            el: k,
          }
        );
      })));
  }
  function $() {
    return [
      {
        p: [-0.9, be(oe.top, -0.9) - 0.03, g.z1],
        text: translate("土壤层"),
        cls: "face",
      },
      {
        p: [0.7, (be(oe.wt, 0.7) + be(oe.aquiferBottom, 0.7)) / 2, g.z1],
        text: translate("透水层（含水层）"),
        cls: "face",
      },
      {
        p: [0.7 + 1.3, be(oe.aquiferBottom, 0.7 + 1.3) - 0.1, g.z1],
        text: translate("隔水层"),
        cls: "face",
      },
      {
        p: [-0.1, be(oe.wt, -0.1) + 0.02, g.z1],
        text: translate("潜水面"),
        cls: "face wt",
      },
      {
        p: [2.2, -1.1, g.z1],
        text: translate("基岩"),
        cls: "face",
      },
    ];
  }
  function E() {
    return [
      {
        p: [1.6, ie(1.6, 1) + 0.5, 1],
        text: translate("迎风坡 · 多雨"),
        cls: "place",
      },
      {
        p: [4.3, ie(4.3, 1) + 0.45, 1],
        text: translate("背风坡 · 雨影区"),
        cls: "place",
      },
      {
        p: [6.4, 1.2, -1.3],
        text: translate("内流区"),
        cls: "place land",
      },
      {
        p: [-1.2, 0.9, -1.6],
        text: translate("外流区"),
        cls: "place sea",
      },
    ];
  }
  function D(d, x) {
    const k = new pe();
    for (const j of S) {
      const O = typeof j.p == "function" ? j.p() : j.p;
      if (!O) {
        j.el.style.opacity = "0";
        continue;
      }
      if (j.textFn) {
        const u = j.textFn();
        u !== j.last && ((j.last = u), (j.el.textContent = u));
      }
      k.set(O[0], O[1], O[2]).project(n.camera);
      const v = k.z < 1 && Math.abs(k.x) < 1.05 && Math.abs(k.y) < 1.05;
      ((j.el.style.opacity = v ? "1" : "0"),
        (j.el.style.transform = `translate(${((k.x + 1) / 2) * d}px, ${((1 - k.y) / 2) * x}px)`));
    }
  }
  function T() {
    const d = m(),
      x = [];
    (["seaLand", "split", "urban", "stores"].includes(d.id) && x.push(...$()),
      ["cycles", "phase", "balance"].includes(d.id) && x.push(...E()),
      d.id === "human" &&
        x.push(
          {
            p: [xe.x, xe.crest + 0.2, xe.z],
            text: translate("水库大坝"),
            cls: "place",
          },
          {
            p: [Ie, be(oe.top, Ie) + 0.25, g.z1],
            text: translate("抽水井"),
            cls: "place",
          },
          {
            p: () =>
              t.P.divert > 0 ? [5.3, ie(5.3, -1.25) + 0.35, -1.25] : null,
            text: translate("调水受水区"),
            cls: "place land",
          },
          {
            p: () =>
              t.P.pump > 0.35
                ? [
                    co(
                      Qt({
                        pump: t.P.pump,
                        recharge: 0.5,
                      }).intrusion,
                    ) - 0.4,
                    be(oe.aquiferBottom, oe.coast + 0.2) + 0.08,
                    g.z1,
                  ]
                : null,
            text: translate("海水入侵"),
            cls: "face warn",
          },
          {
            p: () =>
              t.P.pump > 0.2
                ? [
                    Ie + 0.35,
                    an(Ie, {
                      drawdown: Qt({
                        pump: t.P.pump,
                        recharge: 0.5,
                      }).drawdown,
                    }) - 0.05,
                    g.z1,
                  ]
                : null,
            text: translate("降落漏斗"),
            cls: "face warn",
          },
        ),
      d.id === "meaning" &&
        t.shape > 0 &&
        x.push(
          {
            p: [2.25, ie(2.25, -0.8) + 0.3, -0.8],
            text: translate("上游：流水侵蚀 · V 形谷"),
            cls: "place",
          },
          {
            p: [-1.2, 0.45, 0.4],
            text: translate("中下游：冲积平原"),
            cls: "place",
          },
          {
            p: [-3.4, 0.3, 0.6],
            text: translate("河口：泥沙堆积 · 三角洲"),
            cls: "place",
          },
        ),
      t.heat > 0 &&
        x.push(
          {
            p: [-5.4, 0.35, 1.2],
            text: translate("蒸发吸热"),
            cls: "heat abs",
          },
          {
            p: [-2, 0.35, -1.2],
            text: translate("蒸发吸热"),
            cls: "heat abs",
          },
          ...[0, 1, 2].map((k) => ({
            p: () => {
              const j = l.clouds.filter((O) => O.w > 0.5)[k];
              return j ? [j.x, j.y + 0.3, j.z] : null;
            },
            text: translate("凝结放热"),
            cls: "heat rel",
          })),
        ),
      A(x));
  }
  function U() {
    const d = e("lMenu");
    ((d.innerHTML = ""),
      Ft.forEach((x, k) => {
        const j = Wa.find(([v]) => v === k);
        j &&
          d.insertAdjacentHTML("beforeend", `<div class="grp">${j[1]}</div>`);
        const O = document.createElement("button");
        ((O.innerHTML = `<em>${String(k + 1).padStart(2, "0")}</em><b></b><small></small>`),
          (O.querySelector("b").textContent = x.title),
          (O.querySelector("small").textContent = x.sub),
          O.addEventListener("click", () => {
            ((d.hidden = !0), W(k));
          }),
          d.appendChild(O));
      }));
  }
  (e("lPick").addEventListener("click", (d) => {
    d.stopPropagation();
    const x = e("lMenu");
    ((x.hidden = !x.hidden),
      x.hidden ||
        x.querySelector("button.on")?.scrollIntoView({
          block: "nearest",
        }));
  }),
    document.addEventListener("pointerdown", (d) => {
      d.target.closest("#lMenu, #lPick") || (e("lMenu").hidden = !0);
    }),
    e("bFold").addEventListener("click", () =>
      document.body.classList.toggle("lc-min"),
    ),
    e("bPrev").addEventListener("click", () => W(t.li - 1)),
    e("bNext").addEventListener("click", () => W(t.li + 1)));
  function W(d) {
    ((d = et(d, 0, Ft.length - 1)), (t.li = d));
    const x = m();
    ((t.P = {
      ..._t,
      rain: 40,
      ...(x.params || {}),
    }),
      (t.tour = -1),
      (t.tourAuto = !1),
      I(""),
      (t.pick = null),
      (t.heat = t.shape = 0),
      (t.storm = 0),
      (t.stormT = -1),
      (t.deltaAnim = -1),
      (t.delta = 0.3),
      (t.quiz = null),
      l.clear(),
      h(),
      nt(),
      l.warm(20, it()),
      b(x.cam),
      c.setQuiz(null),
      (e("quizBox").hidden = !0),
      x.quiz && $e(),
      (e("lNum").textContent = String(d + 1).padStart(2, "0")),
      (e("lTitle").textContent = x.title),
      (e("lSub").textContent = x.sub),
      e("lMenu")
        .querySelectorAll("button")
        .forEach((k, j) => k.classList.toggle("on", j === d)),
      (e("lesson").innerHTML = '<div class="body"></div>'),
      (e("lesson").querySelector(".body").innerHTML = x.body),
      B(),
      z(),
      Q(),
      ze(!0),
      T(),
      (e("bPrev").disabled = d === 0),
      (e("bNext").disabled = d === Ft.length - 1));
    try {
      history.replaceState(null, "", `#${x.id}`);
    } catch {}
  }
  function B() {
    const d = m(),
      x = e("steps");
    if (((x.innerHTML = ""), d.tourSteps)) {
      const k = document.createElement("div");
      ((k.className = "tour-h"),
        (k.innerHTML = `<span>${translate("分步观察")}</span><div class="chips"></div><button class="mini" id="bTour"></button>`));
      const j = k.querySelector(".chips");
      (d.tourSteps.forEach((v, u) => {
        const R = document.createElement("button");
        ((R.className = `chip${u === t.tour ? " on" : ""}${t.tour > u ? " done" : ""}`),
          (R.textContent = String(u + 1)),
          (R.title = v.text),
          R.addEventListener("click", () => {
            ((t.tourAuto = !1), Y(u));
          }),
          j.appendChild(R));
      }),
        x.appendChild(k));
      const O = k.querySelector("#bTour");
      ((O.textContent = t.tourAuto
        ? translate("停止")
        : translate("▶ 分步演示")),
        O.addEventListener("click", () => {
          if (t.tourAuto) {
            ((t.tourAuto = !1), B());
            return;
          }
          ((t.tourAuto = !0), Y(0));
        }));
    } else if (d.steps?.length) {
      const k = document.createElement("ol");
      ((k.className = "steps"),
        (k.innerHTML = d.steps.map((j) => `<li>${j}</li>`).join("")),
        x.appendChild(k));
    }
  }
  function Y(d) {
    const x = m();
    if (!x.tourSteps) return;
    ((t.tour = d), (t.tourT = 0));
    const k = x.tourSteps[d];
    (k?.cam && b(k.cam),
      l.clear(),
      l.warm(4, it()),
      B(),
      ze(!0),
      I(k ? k.text : ""));
  }
  function I(d) {
    const x = e("caption");
    ((x.hidden = !d),
      (x.querySelector("p").textContent = d),
      x.querySelector("p").classList.remove("in"),
      x.offsetWidth,
      x.querySelector("p").classList.add("in"));
  }
  e("caption")
    .querySelector("button")
    .addEventListener("click", () => {
      ((t.tourAuto = !1), (t.tour = -1), I(""), B());
    });
  const X = {
    storm: () => ({
      label: translate("来一场暴雨"),
      run: Ye,
    }),
    plane: () => ({
      label: translate("人工增雨作业"),
      run: We,
    }),
    delta: () => ({
      label: translate("泥沙入海"),
      run: () => {
        ((t.deltaAnim = 0), b("delta"));
      },
    }),
    heat: () => ({
      label: translate("热量交换"),
      run: () => {
        ((t.heat = 14), T(), b("sky"));
      },
    }),
    shape: () => ({
      label: translate("侵蚀与堆积"),
      run: () => {
        ((t.shape = 1), T(), b("overview"));
      },
    }),
  };
  function z() {
    const d = e("acts");
    d.innerHTML = "";
    for (const x of m().acts || []) {
      const k = X[x](),
        j = document.createElement("button");
      ((j.className = "act"),
        (j.textContent = k.label),
        j.addEventListener("click", k.run),
        d.appendChild(j));
    }
    d.hidden = !d.childElementCount;
  }
  function Q() {
    const d = m().controls;
    ((e("ctlSec").hidden = !d.length),
      Yn(e("ctl"), d, t.P, i, (x, k) => {
        if (
          ((t.P[x] = k),
          (x === "season" || x === "warm") && l.clear(),
          x === "season")
        ) {
          const j = Sn(w(), 2);
          t.model = j.s;
        }
        (ze(!0), T());
      }));
  }
  e("bPlay").addEventListener("click", () => J(!t.playing));
  function J(d) {
    ((t.playing = d),
      e("bPlay").classList.toggle("paused", !d),
      (e("bPlay").title = d
        ? translate("暂停 (空格)")
        : translate("继续 (空格)")));
  }
  (document.querySelectorAll("#speed button").forEach((d) =>
    d.addEventListener("click", () => {
      ((t.speed = +d.dataset.v),
        document
          .querySelectorAll("#speed button")
          .forEach((x) => x.classList.toggle("on", x === d)));
    }),
  ),
    e("bLabels").addEventListener("click", () => ue(!t.labels)));
  function ue(d) {
    ((t.labels = d),
      e("bLabels").classList.toggle("on", d),
      document.body.classList.toggle("no-labels", !d));
  }
  e("bReset").addEventListener("click", () => b(m().cam));
  const me = e("cloudOp");
  function he(d) {
    ((me.value = d),
      me.style.setProperty("--p", `${d * 100}%`),
      (e("cloudOpV").textContent = yt(d)),
      l.setCloudOpacity(1 - d));
    try {
      localStorage.setItem("water.cloudTransparency", String(d));
    } catch {}
  }
  me.addEventListener("input", () => he(+me.value));
  let K = 0;
  try {
    const d = parseFloat(localStorage.getItem("water.cloudTransparency"));
    d >= 0 && d <= 1 && (K = d);
  } catch {}
  he(K);
  const ce = {
    evap: "#ffb347",
    transport: "#ffc56b",
    precip: "#7cc4ff",
    runoff: "#4fb3d9",
    infil: "#86d0c0",
    ground: "#5aa0e0",
    transpire: "#7ee07a",
  };
  function se() {
    const d = t.Fs,
      x = t.tour >= 0 ? m().tourSteps?.[t.tour]?.hot : null;
    return [
      ["evap", "①", d.seaEvap],
      ["transport", "②", d.transport],
      ["precip", "③", d.landPrecip],
      ["runoff", "④", d.surface],
      ["infil", "⑤", d.infil],
      ["ground", "⑥", d.baseflow + d.subSea],
      ["transpire", "⑦", d.transpire],
    ].map(([k, j, O]) => ({
      id: k,
      n: j,
      label: a[k],
      value: Math.max(0, O),
      max: 24,
      color: ce[k],
      hot: x === k,
    }));
  }
  function Le() {
    const d = en(t.P),
      x = d.land / 6.5,
      k = t.Fs,
      j = [
        [translate("海面气温"), `${d.sea.toFixed(0)} °C`],
        [translate("平原气温"), `${d.land.toFixed(0)} °C`],
        [translate("山顶气温"), `${d.summit.toFixed(0)} °C`],
        [
          translate("雪线高度"),
          x > 4.2 ? translate("高于山顶") : `${(x * 1e3).toFixed(0)} m`,
        ],
        [translate("河口流量"), `${k.discharge.toFixed(1)} mm/d`],
        [translate("地下水储量"), `${t.model.ground.toFixed(0)} mm`],
      ];
    e("ro").innerHTML = j
      .map(([O, v]) => `<div><label>${O}</label><b>${v}</b></div>`)
      .join("");
  }
  const re = ["#8a9bb0", "#4fb3d9", "#7ee07a"],
    Se = {
      ocean: translate("海洋"),
      land: translate("陆地"),
      lake: translate("内陆湖"),
      abs: translate("蒸发吸热"),
      rel: translate("凝结放热"),
    };
  function Me(d = {}) {
    const x = {
      ...t.P,
      ...d,
    };
    return Xn({
      rain: x.rain,
      hours: 2,
      impervious: x.impervious,
      veg: x.veg,
      slope: x.slope,
      soil: x.soil,
      sponge: x.sponge,
      reservoir: x.reservoir && d.useRes,
      span: 30,
    });
  }
  function ze(d) {
    const x = m(),
      k = e("lp"),
      j = t.stormT >= 0 ? t.stormT : null;
    if (
      ((e("lpTitle").textContent = {
        loop: translate("海陆间循环"),
        stores: translate("全球水体储量"),
        phase: translate("水的三态变化"),
        flux: translate("沙盘流域"),
        cycles: translate("三类水循环比较"),
        split: translate("降雨的分配"),
        meaning: translate("地理意义"),
        hydro: translate("流量过程线"),
        human: translate("人类活动的影响"),
        balance: translate("全球水量平衡"),
        quiz: translate("答题进度"),
      }[x.panel]),
      x.panel === "stores")
    )
      d && Ua(k, Ba, o, t.pick, Ke);
    else if (x.panel === "phase") {
      const O = t.Fs,
        v = en(t.P),
        u = ["evap", "cond"];
      ((O.snowfall > 0.05 || v.summit < 0) && u.push("depo"),
        O.melt + O.glacierMelt > 0.05 && u.push("melt"),
        v.inland < 0 && u.push("freeze"),
        t.P.season === "winter" && u.push("subl"));
      const R = u.join();
      (d || k.__k !== R) &&
        ((k.__k = R),
        Ga(k, u),
        k.insertAdjacentHTML(
          "beforeend",
          `<p class="note">${translate("高亮的箭头是沙盘上此刻正在发生的状态变化。")}</p>`,
        ));
    } else if (x.panel === "loop")
      d &&
        zn(k, {
          mode: "seaLand",
          hot: t.tour >= 0 ? x.tourSteps?.[t.tour]?.hot : null,
          names: a,
          L: Se,
        });
    else if (x.panel === "cycles")
      (d &&
        (k.innerHTML = `<div id="cyd"></div><table class="cyc"><tr><th></th><th>${translate("发生领域")}</th><th>${translate("主要环节")}</th><th>${translate("特点")}</th></tr>
        <tr><td><b class="k-sea">${translate("海上内循环")}</b></td><td>${translate("海洋与海洋上空")}</td><td>${translate("蒸发、降水")}</td><td>${translate("水量最大")}</td></tr>
        <tr><td><b class="k-sealand">${translate("海陆间循环")}</b></td><td>${translate("海洋与陆地之间")}</td><td>${translate("蒸发、水汽输送、降水、地表径流、下渗、地下径流")}</td><td>${translate("补充陆地水，最重要")}</td></tr>
        <tr><td><b class="k-land">${translate("陆地内循环")}</b></td><td>${translate("陆地与陆地上空")}</td><td>${translate("蒸发、植物蒸腾、降水")}</td><td>${translate("水量小，补给内流区")}</td></tr></table>`),
        d &&
          zn(e("cyd"), {
            mode: "cycles",
            names: a,
            L: Se,
          }));
    else if (x.panel === "split") {
      const O = rn({
          rain: t.P.rain,
          soil: t.P.soil,
          veg: t.P.veg,
          slope: t.P.slope,
          wet: 0.35,
          impervious: t.P.impervious,
        }),
        v = Me(),
        u = Xn({
          rain: t.P.rain,
          hours: 2,
          impervious: 0.15,
          veg: 0.6,
          slope: 0.35,
          soil: "loam",
        });
      ((k.innerHTML = `<div id="spb"></div><div class="sub-h">${translate("流量过程线")}</div><div id="hg"></div>`),
        Va(k.querySelector("#spb"), O),
        kn(
          k.querySelector("#hg"),
          [
            {
              ...u,
              label: translate("参照（默认条件）"),
              color: re[0],
            },
            {
              ...v,
              label: translate("当前条件"),
              color: re[1],
            },
          ],
          {
            cursor: j,
            rain: v.input,
          },
        ));
    } else if (x.panel === "meaning")
      (d &&
        (k.innerHTML =
          '<div id="cyd"></div>' +
          [
            [
              "①",
              translate("维持全球水量动态平衡"),
              translate("海洋多蒸发的水，经径流回到海洋"),
            ],
            [
              "②",
              translate("物质迁移与能量交换"),
              translate("搬运泥沙和溶解物质；蒸发吸热、凝结放热，输送热量"),
            ],
            [
              "③",
              translate("塑造地表形态"),
              translate("上游侵蚀成谷，下游堆积成平原和三角洲"),
            ],
            [
              "④",
              translate("更新淡水资源"),
              translate("淡水被使用后，经水循环不断得到补充"),
            ],
          ]
            .map(
              ([O, v, u]) =>
                `<div class="mc"><i>${O}</i><div><b>${v}</b><span>${u}</span></div></div>`,
            )
            .join("") +
          '<div class="mc-r" id="mcr"></div>'),
        d &&
          zn(e("cyd"), {
            mode: "meaning",
            names: a,
            L: Se,
          }),
        (e("mcr").textContent = translate("河水含沙量：{0}", [
          t.P.veg < 0.35
            ? translate("高（植被破坏，水土流失）")
            : t.P.veg < 0.6
              ? translate("中")
              : translate("低"),
        ])));
    else if (x.panel === "hydro") {
      const O = Me({
          impervious: 0.05,
          sponge: !1,
        }),
        v = Me({
          sponge: !1,
        }),
        u = [
          {
            ...O,
            label: translate("城市化以前"),
            color: re[0],
          },
          {
            ...v,
            label: translate("硬化率 {0}", [yt(t.P.impervious)]),
            color: "#e8794a",
          },
        ];
      (t.P.sponge &&
        u.push({
          ...Me(),
          label: translate("海绵城市"),
          color: re[2],
        }),
        kn(k, u, {
          cursor: j,
          rain: v.input,
        }),
        k.insertAdjacentHTML(
          "beforeend",
          `<p class="note">${translate("硬化后：洪峰 ×{0}，峰现提前 {1} h，径流系数 {2} → {3}", [(v.peak / O.peak).toFixed(2), (O.peakTime - v.peakTime).toFixed(1), O.coefficient.toFixed(2), v.coefficient.toFixed(2)])}</p>`,
        ));
    } else if (x.panel === "human") {
      const O = Me({
          useRes: !1,
        }),
        v = Me({
          useRes: !0,
        }),
        u = Qt({
          pump: t.P.pump,
          recharge: 0.5,
        });
      ((k.innerHTML = `<div id="hg"></div><div class="hr">
        <div><label>${translate("水库削减洪峰")}</label><b>${t.P.reservoir ? `${Math.round((1 - v.peak / O.peak) * 100)}%` : translate("未启用")}</b></div>
        <div><label>${translate("调水量")}</label><b>${t.P.divert ? `${(t.Fs.divert || 0).toFixed(2)} mm/d` : translate("未启用")}</b></div>
        <div><label>${translate("漏斗中心降深")}</label><b class="${u.overdraft ? "bad" : ""}">${u.drawdown.toFixed(0)} m</b></div>
        <div><label>${translate("累计地面沉降")}</label><b class="${u.subsidence > 10 ? "bad" : ""}">${u.subsidence.toFixed(0)} cm</b></div>
        <div><label>${translate("海水入侵距离")}</label><b class="${u.intrusion > 2 ? "bad" : ""}">${u.intrusion.toFixed(1)} km</b></div>
        <div><label>${translate("植被覆盖率")}</label><b>${yt(t.P.veg)}</b></div></div>`),
        kn(
          k.querySelector("#hg"),
          [
            {
              ...O,
              label: translate("无水库"),
              color: re[0],
            },
            ...(t.P.reservoir
              ? [
                  {
                    ...v,
                    label: translate("水库调蓄"),
                    color: re[1],
                  },
                ]
              : []),
          ],
          {
            cursor: j,
            rain: O.input,
          },
        ));
    } else if (x.panel === "balance") {
      d &&
        ((k.innerHTML = `<div id="gbc"></div><div class="sub-h">${translate("流域水量平衡计算器（mm/年）")}</div><div id="bc"></div><div class="bc-r" id="bcr"></div><div class="sub-h">${translate("沙盘流域（mm/天）")}</div><div class="hr" id="bm"></div>`),
        Xa(k.querySelector("#gbc"), _a),
        Yn(
          k.querySelector("#bc"),
          ["P", "E", "R"],
          t.basin,
          {
            P: {
              label: translate("降水 P"),
              type: "range",
              min: 100,
              max: 2e3,
              step: 10,
              fmt: (u) => `${u}`,
            },
            E: {
              label: translate("蒸发 E"),
              type: "range",
              min: 50,
              max: 1500,
              step: 10,
              fmt: (u) => `${u}`,
            },
            R: {
              label: translate("径流 R"),
              type: "range",
              min: 0,
              max: 1200,
              step: 10,
              fmt: (u) => `${u}`,
            },
          },
          (u, R) => {
            ((t.basin[u] = R), Ae());
          },
        ),
        Ae());
      const O = t.Fs,
        v = Vn(O.landPrecip, O.landEvapAll, O.runoffAll);
      e("bm").innerHTML = [
        [translate("降水 P"), O.landPrecip],
        [translate("蒸发 E"), O.landEvapAll],
        [translate("径流 R"), O.runoffAll],
        ["ΔS", v],
      ]
        .map(([u, R]) => `<div><label>${u}</label><b>${R.toFixed(2)}</b></div>`)
        .join("");
    } else
      x.panel === "quiz"
        ? Oe()
        : d &&
          (k.innerHTML = `<p class="note">${translate("拖动参数观察各环节的变化。数值按沙盘陆地流域折算，单位 mm/天。")}</p>`);
    e("lpSec").hidden = !1;
  }
  function Ae() {
    const { P: d, E: x, R: k } = t.basin,
      j = Vn(d, x, k);
    e("bcr").innerHTML =
      `<span class="eq">ΔS = P − E − R = ${d} − ${x} − ${k} = <b class="${j < 0 ? "bad" : j > 0 ? "ok" : ""}">${j}</b></span><span>${j > 0 ? translate("流域蓄水增加（湖泊、地下水上升）") : j < 0 ? translate("流域蓄水减少（入不敷出）") : translate("收支平衡")}</span>`;
  }
  function Ke(d) {
    ((t.pick = d), ze(!0));
    const x = {
      ocean: ["ocean", [-5.5, 0, 2.6, 2.8]],
      glacier: ["mountain", [3.1, -0.9, 0.9, 1.1]],
      ground: ["faceWide", null],
      permafrost: ["mountain", [3.3, -0.9, 0.6, 0.8]],
      lake: ["inland", [ne.x, ne.z, 1.4, 1.2]],
      soil: ["face", null],
      atmos: ["sky", null],
      swamp: ["delta", [-3.1, 0.6, 0.6, 0.6]],
      river: ["overview", [-0.8, 0.4, 2.6, 0.9]],
      bio: ["mountain", [1.8, 0.4, 1.4, 1.6]],
    }[d];
    (b(x[0]), x[1] ? n.highlight(!0, ...x[1]) : n.highlight(!1));
  }
  function Ye() {
    ((t.storm = 1),
      (t.stormT = 0),
      ["split", "urban"].includes(m().id) ||
        b(m().id === "human" ? "dam" : "mountain"),
      ke(translate("强降雨来临：注意观察地表径流和河流流量")));
  }
  function We() {
    ((t.plane = {
      t: 0,
    }),
      (n.plane.visible = !0));
    for (let d = 0; d < 3; d++)
      l.newCloud(-1.6 + d * 1.3, -0.5 + (d - 1) * 0.3, 2.3, 0.45, "adv");
    (b("sky"), ke(translate("飞机在云中播撒碘化银等催化剂，促使水汽凝结成雨")));
  }
  function ke(d) {
    const x = e("toast");
    ((x.textContent = d),
      x.classList.add("show"),
      clearTimeout(ke.h),
      (ke.h = setTimeout(() => x.classList.remove("show"), 3200)));
  }
  function Te(d, x = Math.random) {
    for (let k = d.length - 1; k > 0; k--) {
      const j = Math.floor(x() * (k + 1));
      [d[k], d[j]] = [d[j], d[k]];
    }
    return d;
  }
  function $e() {
    const d = [
        "evap",
        "transport",
        "precip",
        "runoff",
        "infil",
        "ground",
        "transpire",
      ],
      x = Te(["A", "B", "C", "D", "E", "F", "G"]),
      k = Object.fromEntries(d.map((v, u) => [v, x[u]]));
    c.setQuiz(k);
    const O = [
      ...Te([...d])
        .slice(0, 3)
        .map((v) => {
          const u = Te(d.filter((R) => R !== v)).slice(0, 3);
          return {
            q: translate("图中字母 {0} 代表的水循环环节是", [k[v]]),
            opts: [a[v], ...u.map((R) => a[R])],
            a: 0,
            why: translate("箭头 {0}：{1}", [k[v], a[v]]),
            focus: v,
          };
        }),
      ...Te(Ha(a)).slice(0, 7),
    ].map((v) => {
      const u = Te(v.opts.map((R, N) => N));
      return {
        ...v,
        opts: u.map((R) => v.opts[R]),
        a: u.indexOf(v.a),
      };
    });
    ((t.quiz = {
      items: O,
      i: 0,
      score: 0,
      answered: null,
    }),
      Ze());
  }
  function Ze() {
    const d = t.quiz,
      x = e("quizBox");
    if (((x.hidden = !1), d.i >= d.items.length)) {
      ((x.innerHTML = `<div class="qz-end"><b>${translate("得分 {0} / {1}", [d.score, d.items.length])}</b><span>${d.score === d.items.length ? translate("全部正确！") : translate("回顾解析，再试一次。")}</span><button class="act" id="qzAgain">${translate("重新测验")}</button></div>`),
        x.querySelector("#qzAgain").addEventListener("click", $e),
        ze());
      return;
    }
    const k = d.items[d.i];
    ((x.innerHTML = `<div class="qz-h"><span>${translate("第 {0} / {1} 题", [d.i + 1, d.items.length])}</span></div><p class="qz-q"></p><div class="qz-o"></div><div class="qz-w" hidden></div>`),
      (x.querySelector(".qz-q").textContent = k.q));
    const j = x.querySelector(".qz-o");
    (k.opts.forEach((O, v) => {
      const u = document.createElement("button");
      ((u.innerHTML = `<em>${"ABCD"[v]}</em><span></span>`),
        (u.querySelector("span").textContent = O),
        u.addEventListener("click", () => {
          if (d.answered !== null) return;
          ((d.answered = v),
            v === k.a && d.score++,
            j
              .querySelectorAll("button")
              .forEach((N, G) =>
                N.classList.add(G === k.a ? "ok" : G === v ? "bad" : "dim"),
              ));
          const R = x.querySelector(".qz-w");
          ((R.hidden = !1),
            (R.innerHTML = `<b class="${v === k.a ? "ok" : "bad"}">${v === k.a ? translate("回答正确") : translate("回答错误")}</b><span></span><button class="act">${translate("下一题")}</button>`),
            (R.querySelector("span").textContent = k.why),
            R.querySelector("button").addEventListener("click", () => {
              (d.i++, (d.answered = null), Ze());
            }),
            ze());
        }),
        j.appendChild(u));
    }),
      k.focus && c.set(m().arrows, k.focus),
      ze());
  }
  function Oe() {
    const d = t.quiz;
    d &&
      (e("lp").innerHTML =
        `<div class="qp">${d.items.map((x, k) => `<i class="${k < d.i || (k === d.i && d.answered !== null) ? "done" : k === d.i ? "cur" : ""}"></i>`).join("")}</div><p class="note">${translate("已答对 {0} 题", [d.score])}</p>`);
  }
  const Qe = new Zo(),
    Je = new at();
  let ve = 0,
    qe = null;
  (e("c3").addEventListener("pointermove", (d) => {
    qe = d;
  }),
    e("c3").addEventListener("pointerleave", () => {
      ((qe = null), (e("tip").hidden = !0));
    }));
  function De(d) {
    if (!qe || d - ve < 80) return;
    ve = d;
    const x = qe;
    if (x.buttons) {
      e("tip").hidden = !0;
      return;
    }
    const k = e("c3").getBoundingClientRect();
    (Je.set(
      ((x.clientX - k.left) / k.width) * 2 - 1,
      -((x.clientY - k.top) / k.height) * 2 + 1,
    ),
      Qe.setFromCamera(Je, n.camera));
    const j = Qe.intersectObjects(
      [n.terrain.mesh, n.faces.front, n.oceanMesh],
      !1,
    )[0];
    let O = null;
    if (j) {
      const u = j.point;
      if (j.object === n.faces.front) {
        const R = u.x;
        R < oe.coast && u.y > be(oe.top, R)
          ? (O = "seawater")
          : u.y > be(oe.soil, R)
            ? (O = "soil")
            : u.y > be(oe.aquiferBottom, R)
              ? (O = "aquifer")
              : u.y > be(oe.clayBottom, R)
                ? (O = "clay")
                : (O = "bedrock");
      } else j.object === n.oceanMesh ? (O = "sea") : (O = aa(u.x, u.z, u.y));
    }
    const v = e("tip");
    if (!O || !r[O]) {
      v.hidden = !0;
      return;
    }
    ((v.hidden = !1),
      (v.innerHTML = "<b></b><span></span>"),
      (v.querySelector("b").textContent = r[O][0]),
      (v.querySelector("span").textContent = r[O][1]),
      (v.style.transform = `translate(${x.clientX + 16}px, ${x.clientY + 14}px)`));
  }
  window.addEventListener("keydown", (d) => {
    d.target.closest("input, textarea") ||
      (d.key === ","
        ? W(t.li - 1)
        : d.key === "."
          ? W(t.li + 1)
          : d.key === " "
            ? (d.preventDefault(), J(!t.playing))
            : d.key === "l" || d.key === "L"
              ? ue(!t.labels)
              : (d.key === "r" || d.key === "R") && b(m().cam));
  });
  function nt() {
    const d = m(),
      x = t.tour >= 0 ? d.tourSteps?.[t.tour] : null,
      k = new Set(x ? x.show : d.show);
    (t.storm > 0 &&
      ["precip", "runoff", "infil", "river"].forEach((N) => k.add(N)),
      t.plane && k.add("precip"));
    const j = l.st;
    ((j.show = Object.fromEntries([...k].map((N) => [N, !0]))),
      (j.wind = t.storm > 0 ? Math.max(t.P.wind, 0.95) : t.P.wind));
    const O = en(t.P);
    ((j.temp = {
      land: O.land,
      sea: O.sea,
      inland: O.inland + 6.5 * 1.2,
    }),
      (j.cycleTint = !!(x?.tint || d.cycleTint)),
      (j.storm = t.storm));
    const v = t.storm > 0 ? t.P.rain : Math.max(4, (t.Fs.landRain || 0) * 1.4),
      u = rn({
        rain: v,
        soil: t.P.soil,
        veg: t.P.veg,
        slope: t.P.slope,
        wet: et((t.model.soil || 0) / 260),
        impervious: t.P.impervious * (t.P.sponge ? 0.35 : 1),
      });
    ((j.runoffFrac = u.runoffRatio), (j.infilFrac = u.infilRatio));
    const R = Qt({
      pump: t.P.pump,
      recharge: 0.5,
    });
    return (
      (j.drawdown = t.P.pump > 0.02 ? R.drawdown : 0),
      (j.pump = t.P.pump),
      (j.mud = et(
        0.1 +
          (1 - t.P.veg) * 0.45 +
          t.storm * 0.35 +
          (t.deltaAnim >= 0 ? 0.4 : 0),
      )),
      (j.dam = t.P.reservoir),
      (j.divert = t.P.divert),
      (j.melt = et(((t.Fs.melt || 0) + (t.Fs.glacierMelt || 0)) / 1.5)),
      {
        c: O,
        aq: R,
      }
    );
  }
  function it() {
    const d = t.Fs;
    return {
      seaEvap: d.seaEvap / 13.8,
      seaRain: d.seaRain / 4.5,
      transport: d.transport / 14,
      landRain: d.landPrecip / 17.4,
      transpire: d.transpire / 3.5,
      landEvap: (d.soilEvap + d.damEvap + d.intercept) / 4.5,
      lakeEvap: d.lakeEvap / 4.2,
      inland: d.inlandRain / 4.7,
      discharge: d.discharge / 8.2 + t.storm,
      baseflow: (d.baseflow + d.subSea) / 8.5,
      infil: d.infil / 13,
      seaShare: et(d.seaRain / Math.max(0.1, d.seaRain + d.transport)),
    };
  }
  let y = performance.now(),
    C = 0,
    L = 0,
    q = 0;
  function p(d) {
    const x = Math.min(0.05, (d - y) / 1e3);
    y = d;
    const k = m();
    if (t.playing) {
      const fe = x * t.speed;
      for (C += fe, L += fe * 1.5; L >= 1;) {
        L -= 1;
        const te = w();
        if (t.storm > 0) {
          const Ne = Math.min(t.model.vSea * 0.08, 6 * t.storm);
          ((t.model.vSea -= Ne),
            (t.model.vLand += Ne),
            (te.wind = Math.max(te.wind, 0.95)));
        }
        const He = Rn(t.model, te, 1);
        ((t.model = He.s), (t.F = He.f), t.day++);
      }
      const ee = Math.min(1, fe * 1.2);
      for (const te in t.F)
        typeof t.F[te] == "number" && (t.Fs[te] += (t.F[te] - t.Fs[te]) * ee);
      if (
        ((t.Fs.temps = t.F.temps),
        t.storm > 0 &&
          ((t.storm = Math.max(0, t.storm - fe / 22)),
          (t.stormT = Math.min(30, (1 - t.storm) * 30)),
          t.storm === 0 && (t.stormT = -1)),
        t.plane)
      ) {
        t.plane.t += fe / 11;
        const te = t.plane.t,
          He = {
            x: -3.2 + te * 6.4,
            y: 2.85 + Math.sin(te * 6) * 0.04,
            z: -0.4,
          };
        (n.plane.position.set(He.x, He.y, He.z),
          (l.st.plane = te > 0.1 && te < 0.9 ? He : null),
          Math.floor(te * 12) !== t.plane.lastSeed &&
            ((t.plane.lastSeed = Math.floor(te * 12)), l.seedNear(He.x, He.z)),
          te >= 1 &&
            ((t.plane = null), (l.st.plane = null), (n.plane.visible = !1)));
      }
      (t.deltaAnim >= 0 &&
        ((t.deltaAnim += fe / 12),
        (t.delta = 0.3 + 1.05 * Zn(et(t.deltaAnim))),
        t.deltaAnim >= 1 && (t.deltaAnim = -1)),
        t.heat > 0 && ((t.heat -= fe), t.heat <= 0 && T()),
        t.tourAuto &&
          t.tour >= 0 &&
          ((t.tourT += x),
          t.tourT > 7.5 &&
            (t.tour < k.tourSteps.length - 1
              ? Y(t.tour + 1)
              : ((t.tourAuto = !1), B()))));
    }
    const j = t.tour >= 0 ? k.tourSteps?.[t.tour] : null,
      { c: O, aq: v } = nt(),
      u = t.Fs,
      R = it();
    (t.playing && l.update(x * t.speed > 0.08 ? 0.08 : x * t.speed, C, R),
      (t.wet +=
        ((t.storm > 0 ? 1 : et((u.landRain || 0) / 30)) - t.wet) *
        Math.min(1, x * 0.5)),
      n.setLand({
        veg: t.P.veg,
        impervious: t.P.impervious,
        sponge: t.P.sponge,
        winter: t.P.season === "winter",
        snowLine: Math.min(4.2, O.land / 6.5 + 0.15),
        wet: t.wet,
        oasis: t.P.divert > 0 ? Math.min(1, t.P.divert * 2) : 0,
        mud: l.st.mud,
        pumpDraw: l.st.drawdown,
        intrusion: v.intrusion,
        divert: t.P.divert,
        reservoir: t.P.reservoir,
      }),
      n.delta.mesh.scale.set(t.delta * 1.1, 1, t.delta * 0.9));
    const N =
      t.storm > 0 ? et(t.storm * 3) * (0.55 + 0.45 * et(t.P.rain / 80)) : 0;
    (n.dynamics({
      wind: l.st.wind,
      storm: N,
      warm: t.P.warm,
      dt: x,
      rise: et((u.discharge - 8) / 30) * 0.03 + N * 0.03,
      lakeLevel:
        ne.level + et((t.model.lake - f.lake) / f.lake, -0.7, 0.7) * 0.07,
      resLevel: xe.level - et(1 - t.model.dam / f.dam, -0.3, 1) * 0.12,
      clouds: l.clouds,
    }),
      l.stormLook(n.weather.level),
      (l.st.cam = n.camera.position));
    const G = j ? j.arrows : k.arrows;
    !t.quiz || t.quiz.i >= t.quiz.items.length || !t.quiz.items[t.quiz.i]?.focus
      ? c.set(t.labels ? G : [], j?.hot || null)
      : t.labels || c.set([]);
    const le = e("c3").clientWidth,
      ye = e("c3").clientHeight;
    (c.update(x, d / 1e3, n.camera, le, ye),
      D(le, ye),
      M(x),
      n.controls.update(),
      n.tick(d / 1e3),
      n.render(),
      De(d),
      (q += x),
      q > 0.25 &&
        ((q = 0),
        Da(e("flux"), se()),
        Le(),
        (e("day").textContent = translate("第 {0} 天", [t.day])),
        (e("season").textContent =
          t.P.season === "winter" ? translate("冬季") : translate("夏季")),
        ["phase", "balance", "hydro", "split", "human"].includes(k.panel) &&
          (t.stormT >= 0 || k.panel === "phase" || k.panel === "balance") &&
          ze()),
      requestAnimationFrame(p));
  }
  function H() {
    const d = window.innerWidth > 1100;
    (n.resize(d ? Math.round((e("rp").offsetWidth + 18) / 2) : 0),
      l.setScale(e("c3").clientHeight));
  }
  (window.addEventListener("resize", H), H(), U());
  const P = Ft.findIndex((d) => `#${d.id}` === location.hash);
  (W(P >= 0 ? P : 0),
    ue(!0),
    requestAnimationFrame(p),
    document.body.classList.add("ready"),
    (window.__water = {
      world: n,
      flows: l,
      arrows: c,
      S: t,
      go: W,
      setTour: Y,
      startStorm: Ye,
      startPlane: We,
      fly: b,
      ACTS: X,
      CYCLE: Bt,
      coastX: Pe,
      RIDGE_X: tt,
      CITY: _e,
    }));
}
function waterLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("水循环三维沙盘 · WaterCycle")), Ka());
    }, []),
    jsxRuntime.jsxs("div", {
      id: "app",
      children: [
        jsxRuntime.jsx("canvas", {
          id: "c3",
        }),
        jsxRuntime.jsx("div", {
          className: "vignette",
        }),
        jsxRuntime.jsx("div", {
          id: "labels",
        }),
        jsxRuntime.jsx("div", {
          id: "tags",
        }),
        jsxRuntime.jsx("div", {
          id: "tip",
          hidden: !0,
        }),
        jsxRuntime.jsxs("header", {
          className: "brand rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "toprow",
              children: [
                jsxRuntime.jsx("a", {
                  className: "back",
                  href: localizedUrl("/"),
                  children: "← WEDULAB",
                }),
                jsxRuntime.jsx(yo, {}),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "logo",
              children: [
                "WATER",
                jsxRuntime.jsx("i", {
                  children: "·CYCLE",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "rule",
            }),
            jsxRuntime.jsx("div", {
              className: "sub",
              children: translate("水循环三维沙盘 — 从海洋到高山，再回到海洋"),
            }),
            jsxRuntime.jsxs("div", {
              className: "legend",
              children: [
                jsxRuntime.jsx("span", {
                  className: "sea",
                  children: translate("海上内循环"),
                }),
                jsxRuntime.jsx("span", {
                  className: "sealand",
                  children: translate("海陆间循环"),
                }),
                jsxRuntime.jsx("span", {
                  className: "land",
                  children: translate("陆地内循环"),
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsx("div", {
          id: "lMenu",
          hidden: !0,
        }),
        jsxRuntime.jsxs("section", {
          id: "lcard",
          className: "rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "lc-h",
              children: [
                jsxRuntime.jsxs("button", {
                  id: "lPick",
                  className: "lpick",
                  title: translate("选择课题"),
                  children: [
                    jsxRuntime.jsx("em", {
                      id: "lNum",
                    }),
                    jsxRuntime.jsxs("span", {
                      children: [
                        jsxRuntime.jsx("b", {
                          id: "lTitle",
                        }),
                        jsxRuntime.jsx("small", {
                          id: "lSub",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("svg", {
                      viewBox: "0 0 16 16",
                      children: jsxRuntime.jsx("path", {
                        d: "M4 6l4 4 4-4",
                      }),
                    }),
                  ],
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bPrev",
                  title: translate("上一个课题 (,)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M10 3L5 8l5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bNext",
                  title: translate("下一个课题 (.)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M6 3l5 5-5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bFold",
                  title: translate("收起 / 展开"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M4 10l4-4 4 4",
                    }),
                  }),
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "lc-b",
              children: [
                jsxRuntime.jsx("div", {
                  id: "lesson",
                }),
                jsxRuntime.jsx("div", {
                  id: "steps",
                }),
                jsxRuntime.jsx("div", {
                  id: "quizBox",
                  hidden: !0,
                }),
                jsxRuntime.jsx("div", {
                  id: "acts",
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsxs("aside", {
          id: "rp",
          className: "rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "timebar",
              children: [
                jsxRuntime.jsxs("button", {
                  id: "bPlay",
                  className: "ib play",
                  title: translate("暂停 (空格)"),
                  children: [
                    jsxRuntime.jsx("svg", {
                      viewBox: "0 0 16 16",
                      className: "i-pause",
                      children: jsxRuntime.jsx("path", {
                        d: "M5 3v10M11 3v10",
                      }),
                    }),
                    jsxRuntime.jsx("svg", {
                      viewBox: "0 0 16 16",
                      className: "i-play",
                      children: jsxRuntime.jsx("path", {
                        d: "M5 3l8 5-8 5z",
                      }),
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  className: "clock",
                  children: [
                    jsxRuntime.jsx("b", {
                      id: "day",
                    }),
                    jsxRuntime.jsx("span", {
                      id: "season",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  className: "seg",
                  id: "speed",
                  children: [
                    jsxRuntime.jsx("button", {
                      "data-v": "1",
                      className: "on",
                      children: "1×",
                    }),
                    jsxRuntime.jsx("button", {
                      "data-v": "3",
                      children: "3×",
                    }),
                    jsxRuntime.jsx("button", {
                      "data-v": "8",
                      children: "8×",
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "rp-scroll",
              children: [
                jsxRuntime.jsxs("div", {
                  id: "ctlSec",
                  children: [
                    jsxRuntime.jsx("div", {
                      className: "sec-h",
                      children: jsxRuntime.jsx("span", {
                        children: translate("参数"),
                      }),
                    }),
                    jsxRuntime.jsx("div", {
                      id: "ctl",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  id: "lpSec",
                  children: [
                    jsxRuntime.jsx("div", {
                      className: "sec-h",
                      children: jsxRuntime.jsx("span", {
                        id: "lpTitle",
                      }),
                    }),
                    jsxRuntime.jsx("div", {
                      id: "lp",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("div", {
                      className: "sec-h",
                      children: [
                        jsxRuntime.jsx("span", {
                          children: translate("各环节水量"),
                        }),
                        jsxRuntime.jsx("span", {
                          className: "k",
                          children: translate("mm/天"),
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("div", {
                      id: "flux",
                    }),
                    jsxRuntime.jsx("div", {
                      className: "readouts",
                      id: "ro",
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "cloudctl",
              children: [
                jsxRuntime.jsx("label", {
                  htmlFor: "cloudOp",
                  children: translate("云层透明度"),
                }),
                jsxRuntime.jsx("input", {
                  id: "cloudOp",
                  type: "range",
                  min: "0",
                  max: "1",
                  step: "0.05",
                  defaultValue: "0",
                }),
                jsxRuntime.jsx("b", {
                  id: "cloudOpV",
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "actions",
              children: [
                jsxRuntime.jsxs("button", {
                  id: "bLabels",
                  className: "on",
                  children: [
                    translate("环节标注"),
                    jsxRuntime.jsx("kbd", {
                      children: "L",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("button", {
                  id: "bReset",
                  children: [
                    translate("复位视角"),
                    jsxRuntime.jsx("kbd", {
                      children: "R",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsxs("div", {
          id: "caption",
          hidden: !0,
          children: [
            jsxRuntime.jsx("p", {}),
            jsxRuntime.jsx("button", {
              children: translate("结束"),
            }),
          ],
        }),
        jsxRuntime.jsx("div", {
          id: "toast",
        }),
      ],
    })
  );
}
export { waterLabPage as default };
