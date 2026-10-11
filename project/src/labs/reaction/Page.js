// Recovered from public deployment: Page-C9Fi6SfR.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as ue } from "../../components/LanguageSwitcher.js";
import {
  F as pe,
  G as Ht,
  B as jt,
  b as lt,
  v as gt,
  a as _t,
  aw as he,
  a5 as Gt,
  a3 as Ut,
  af as me,
  c as Vt,
  l as Xt,
  o as Rt,
  N as Qt,
  L as Yt,
  C as rt,
  a2 as Jt,
  I as Kt,
  m as be,
  ac as It,
  d as ge,
  f as pt,
  y as te,
  z as kt,
  J as ve,
  w as ee,
  k as ye,
  x as we,
  a8 as xe,
  Q as Et,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  c as Me,
  S as Ct,
  n as Ce,
} from "../../vendor/studio-DdpeYmJn.js"; /* empty css              */ /* empty css               */
const Se = {
    H: 1,
    N: 3.5,
    O: 4,
    Cl: 6,
    I: 9,
    Pt: 20,
  },
  Te = 300,
  St = (e, t) => e[0] * t[0] + e[1] * t[1] + e[2] * t[2],
  At = (e) => Math.hypot(e[0], e[1], e[2]);
function se(e, t) {
  const [d, g, p, S] = e,
    b = S * t[0] + g * t[2] - p * t[1],
    a = S * t[1] + p * t[0] - d * t[2],
    f = S * t[2] + d * t[1] - g * t[0],
    C = -d * t[0] - g * t[1] - p * t[2];
  return [
    b * S + C * -d + a * -p - f * -g,
    a * S + C * -g + f * -d - b * -p,
    f * S + C * -p + b * -g - a * -d,
  ];
}
function He(e, t, d) {
  const [g, p, S, b] = e,
    a = 0.5 * d * t[0],
    f = 0.5 * d * t[1],
    C = 0.5 * d * t[2],
    I = [
      g + a * b + f * S - C * p,
      p + f * b + C * g - a * S,
      S + C * b + a * p - f * g,
      b - a * g - f * p - C * S,
    ],
    _ = Math.hypot(...I);
  return I.map((l) => l / _);
}
function ke(e) {
  return () => {
    ((e |= 0), (e = (e + 1831565813) | 0));
    let t = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function vt(e) {
  const t = Math.max(e(), 1e-12),
    d = e();
  return Math.sqrt(-2 * Math.log(t)) * Math.cos(2 * Math.PI * d);
}
function Oe(e) {
  const t = 2 * e() - 1,
    d = 2 * Math.PI * e(),
    g = Math.sqrt(1 - t * t);
  return [g * Math.cos(d), g * Math.sin(d), t];
}
function Ne(e) {
  const t = e(),
    d = e(),
    g = e();
  return [
    Math.sqrt(1 - t) * Math.sin(2 * Math.PI * d),
    Math.sqrt(1 - t) * Math.cos(2 * Math.PI * d),
    Math.sqrt(t) * Math.sin(2 * Math.PI * g),
    Math.sqrt(t) * Math.cos(2 * Math.PI * g),
  ];
}
function $e(e) {
  const t = {};
  for (const d of e)
    t[d.id] = {
      ...d,
      mass: d.atoms.reduce((g, p) => g + Se[p.el], 0),
    };
  return t;
}
function je({
  species: e,
  reactions: t,
  box: d = {
    w: 14,
    h: 9,
    d: 9,
  },
  T: g = 1,
  accommodation: p = 0.5,
  seed: S = 1,
  maxParticles: b = 900,
}) {
  const a = ke(S),
    f = {
      species: e,
      reactions: t,
      box: {
        ...d,
      },
      T: g,
      accommodation: p,
      catalyst: !1,
      catalystDepth: 1.4,
      orientation: !0,
      particles: [],
      time: 0,
      nextId: 1,
      stats: {
        collisions: 0,
        effective: 0,
        reactions: {},
      },
    };
  for (const c of t) f.stats.reactions[c.id] = 0;
  const C = new Map();
  for (const c of t)
    if (c.reactants.length === 2) {
      const h = [...c.reactants].sort().join("+");
      (C.has(h) || C.set(h, []), C.get(h).push(c));
    }
  const I = t.filter((c) => c.reactants.length === 1);
  function _(c, h = f.T) {
    const M = Math.sqrt(h / c);
    return [vt(a) * M, vt(a) * M, vt(a) * M];
  }
  function l(c = f.T) {
    const h = Math.sqrt(c) * 2.2;
    return [vt(a) * h, vt(a) * h, vt(a) * h];
  }
  function m(c, h, M) {
    return {
      uid: f.nextId++,
      sp: c,
      pos: [...h],
      vel: M || _(e[c].mass),
      q: Ne(a),
      w: l(),
      born: f.time,
    };
  }
  function N(c, h, M) {
    const { w: U, h: P, d: O } = f.box,
      A = e[c].radius,
      $ = M || {
        x: [-U / 2, U / 2],
        y: [-P / 2, P / 2],
        z: [-O / 2, O / 2],
      };
    for (let s = 0; s < h && f.particles.length < b; s++) {
      let n;
      for (
        let o = 0;
        o < 30 &&
        ((n = [
          $.x[0] + A + a() * ($.x[1] - $.x[0] - 2 * A),
          $.y[0] + A + a() * ($.y[1] - $.y[0] - 2 * A),
          $.z[0] + A + a() * ($.z[1] - $.z[0] - 2 * A),
        ]),
        !!f.particles.some(
          (u) =>
            At([u.pos[0] - n[0], u.pos[1] - n[1], u.pos[2] - n[2]]) <
            e[u.sp].radius + A,
        ));
        o++
      );
      f.particles.push(m(c, n));
    }
  }
  function W(c) {
    f.particles = f.particles.filter((h) => !c(h));
  }
  const E = (c) => se(c.q, [1, 0, 0]);
  function B(c, h, M) {
    const U = h.map((s) => e[s.sp].mass),
      P = U.reduce((s, n) => s + n, 0),
      O = [0, 1, 2].map(
        (s) => h.reduce((n, o, u) => n + U[u] * o.vel[s], 0) / P,
      ),
      A = [0, 1, 2].map(
        (s) => h.reduce((n, o, u) => n + U[u] * o.pos[s], 0) / P,
      ),
      $ = [];
    if (c.products.length === 1) $.push(m(c.products[0], A, O));
    else {
      const [s, n] = c.products,
        o = e[s].mass,
        u = e[n].mass,
        i = (o * u) / (o + u),
        v = Math.max(0.02, M - c.dH),
        r = Oe(a),
        H = Math.sqrt((2 * v) / i),
        D = e[s].radius + e[n].radius + 0.02,
        x =
          h.length === 2
            ? h[0].pos
            : A.map((ot, at) => ot + (r[at] * D * u) / (o + u)),
        nt =
          h.length === 2
            ? h[1].pos
            : A.map((ot, at) => ot - (r[at] * D * o) / (o + u));
      ($.push(
        m(
          s,
          x,
          O.map((ot, at) => ot + (r[at] * H * u) / (o + u)),
        ),
      ),
        $.push(
          m(
            n,
            nt,
            O.map((ot, at) => ot - (r[at] * H * o) / (o + u)),
          ),
        ));
    }
    for (const s of $) s.w = l(f.T + Math.max(0, -c.dH) * 0.5);
    return $;
  }
  function F(c) {
    const h = [],
      M = f.particles,
      { w: U, h: P, d: O } = f.box,
      A = [U / 2, P / 2, O / 2];
    for (const i of M) {
      for (let v = 0; v < 3; v++) i.pos[v] += i.vel[v] * c;
      i.q = He(i.q, i.w, c);
    }
    for (const i of M) {
      const v = e[i.sp].radius;
      for (let r = 0; r < 3; r++)
        i.pos[r] > A[r] - v && i.vel[r] > 0
          ? ((i.pos[r] = A[r] - v), et(i, r, -1))
          : i.pos[r] < -A[r] + v &&
            i.vel[r] < 0 &&
            ((i.pos[r] = -A[r] + v), et(i, r, 1));
    }
    const $ = 2 * Math.max(...Object.values(e).map((i) => i.radius)),
      s = new Map(),
      n = (i, v, r) => `${i},${v},${r}`;
    M.forEach((i, v) => {
      const r = [
        Math.floor(i.pos[0] / $),
        Math.floor(i.pos[1] / $),
        Math.floor(i.pos[2] / $),
      ];
      i._c = r;
      const H = n(...r);
      (s.has(H) || s.set(H, []), s.get(H).push(v));
    });
    const o = new Set(),
      u = [];
    for (let i = 0; i < M.length; i++) {
      const v = M[i];
      if (o.has(v.uid)) continue;
      const [r, H, D] = v._c;
      for (let x = -1; x <= 1; x++)
        for (let nt = -1; nt <= 1; nt++)
          for (let ot = -1; ot <= 1; ot++) {
            const at = s.get(n(r + x, H + nt, D + ot));
            if (at)
              for (const mt of at) {
                if (mt <= i || o.has(v.uid)) continue;
                const ft = M[mt];
                if (o.has(ft.uid)) continue;
                const ut = Y(v, ft);
                ut &&
                  (ut.type === "react" &&
                    (o.add(v.uid), o.add(ft.uid), u.push(...ut.products)),
                  h.push(ut));
              }
          }
    }
    for (const i of I) {
      const v = i.A * Math.exp(-i.Ea / f.T) * c;
      for (const r of M) {
        if (r.sp !== i.reactants[0] || o.has(r.uid) || a() > v) continue;
        o.add(r.uid);
        const H = -Math.log(Math.max(a(), 1e-9)) * f.T,
          D = B(i, [r], H + i.dH);
        (u.push(...D),
          f.stats.reactions[i.id]++,
          h.push({
            type: "react",
            reaction: i.id,
            pos: [...r.pos],
            dH: i.dH,
            products: D,
          }));
      }
    }
    return (
      o.size && (f.particles = M.filter((i) => !o.has(i.uid)).concat(u)),
      (f.time += c),
      h
    );
  }
  function et(c, h, M) {
    if (a() < f.accommodation) {
      const U = e[c.sp].mass,
        P = _(U);
      ((P[h] = M * Math.sqrt(-2 * Math.log(Math.max(a(), 1e-12)) * (f.T / U))),
        (c.vel = P),
        (c.w = l()));
    } else c.vel[h] = -c.vel[h];
  }
  function Y(c, h) {
    const M = e[c.sp],
      U = e[h.sp],
      P = [h.pos[0] - c.pos[0], h.pos[1] - c.pos[1], h.pos[2] - c.pos[2]],
      O = At(P),
      A = M.radius + U.radius;
    if (O >= A || O < 1e-9) return null;
    for (let x = 0; x < 3; x++) P[x] /= O;
    const $ = [c.vel[0] - h.vel[0], c.vel[1] - h.vel[1], c.vel[2] - h.vel[2]],
      s = St($, P);
    if (s <= 0) return null;
    f.stats.collisions++;
    const n = M.mass,
      o = U.mass,
      u = (n * o) / (n + o),
      i = 0.5 * u * s * s,
      v = [0, 1, 2].map((x) => (c.pos[x] + h.pos[x]) / 2),
      r = C.get([c.sp, h.sp].sort().join("+")) || [];
    for (const x of r) {
      const nt =
          f.catalyst &&
          x.catalystEa !== void 0 &&
          v[1] < -f.box.h / 2 + f.catalystDepth,
        ot = nt ? x.catalystEa : x.Ea;
      if (
        i < ot ||
        (f.orientation &&
          x.orient &&
          !nt &&
          !(Math.abs(St(E(c), P)) < 0.6 && Math.abs(St(E(h), P)) < 0.6)) ||
        a() > (x.p ?? 1)
      )
        continue;
      const at = x.reactants[0] === c.sp ? [c, h] : [h, c],
        mt = 0.5 * u * At($) ** 2,
        ft = B(x, at, mt);
      return (
        f.stats.effective++,
        f.stats.reactions[x.id]++,
        {
          type: "react",
          reaction: x.id,
          pos: v,
          dH: x.dH,
          energy: i,
          catalyst: nt,
          products: ft,
        }
      );
    }
    const H = 2 * u * s;
    for (let x = 0; x < 3; x++)
      ((c.vel[x] -= (H / n) * P[x]), (h.vel[x] += (H / o) * P[x]));
    const D = (A - O) / 2 + 1e-4;
    for (let x = 0; x < 3; x++)
      ((c.pos[x] -= P[x] * D), (h.pos[x] += P[x] * D));
    return {
      type: "bounce",
      pos: v,
      energy: i,
    };
  }
  function k(c, h = () => !0) {
    const M = [],
      U = [],
      P = new Set();
    for (const O of f.particles) {
      if (O.sp !== c.reactant || !h(O.pos) || a() > c.p) continue;
      P.add(O.uid);
      const A = B(
        {
          products: c.products,
          dH: c.dH,
        },
        [O],
        0,
      );
      (U.push(...A),
        M.push({
          type: "photo",
          pos: [...O.pos],
          products: A,
        }));
    }
    return (
      (f.particles = f.particles.filter((O) => !P.has(O.uid)).concat(U)),
      M
    );
  }
  function G() {
    const c = Object.fromEntries(Object.keys(e).map((h) => [h, 0]));
    for (const h of f.particles) c[h.sp]++;
    return c;
  }
  function J() {
    if (!f.particles.length) return f.T;
    let c = 0;
    for (const h of f.particles) c += 0.5 * e[h.sp].mass * St(h.vel, h.vel);
    return ((2 / 3) * c) / f.particles.length;
  }
  function T(c) {
    return 0.5 * e[c.sp].mass * St(c.vel, c.vel);
  }
  function L() {
    const c = [0, 0, 0];
    for (const h of f.particles)
      for (let M = 0; M < 3; M++) c[M] += e[h.sp].mass * h.vel[M];
    return c;
  }
  function K() {
    const c = {};
    for (const h of f.particles)
      for (const M of e[h.sp].atoms) c[M.el] = (c[M.el] || 0) + 1;
    return c;
  }
  function dt(c) {
    f.box.w = c;
    for (const h of f.particles) {
      const M = e[h.sp].radius;
      h.pos[0] = Math.max(-c / 2 + M, Math.min(c / 2 - M, h.pos[0]));
    }
  }
  return {
    state: f,
    add: N,
    remove: W,
    step: F,
    illuminate: k,
    counts: G,
    temperature: J,
    kinetic: T,
    momentum: L,
    atomCount: K,
    setWidth: dt,
    axisOf: E,
    rand: a,
  };
}
const Lt = (e, t) =>
    2 * Math.sqrt(e / Math.PI) * Math.pow(t, -1.5) * Math.exp(-e / t),
  Tt = 1.18,
  Ot = {
    H: {
      color: Ct.H,
      r: 0.25,
    },
    I: {
      color: Ct.I,
      r: 0.5,
    },
    Cl: {
      color: Ct.Cl,
      r: 0.42,
    },
    N: {
      color: Ct.N,
      r: 0.32,
    },
    O: {
      color: Ct.O,
      r: 0.31,
    },
  },
  Ie = 0.1;
function Ee() {
  const e = document.createElement("canvas");
  e.width = e.height = 512;
  const t = e.getContext("2d");
  ((t.fillStyle = "#8d969c"),
    t.fillRect(0, 0, 512, 512),
    (t.strokeStyle = "rgba(255,255,255,.35)"),
    (t.lineWidth = 1.2));
  const d = 14;
  for (let p = -1; p < 24; p++)
    for (let S = -1; S < 22; S++) {
      const b = S * d * 1.5 * 1.15,
        a = p * d * Math.sqrt(3) + (S % 2 ? (d * Math.sqrt(3)) / 2 : 0);
      t.beginPath();
      for (let f = 0; f <= 6; f++) {
        const C = (Math.PI / 3) * f;
        f
          ? t.lineTo(b + d * Math.cos(C), a + d * Math.sin(C))
          : t.moveTo(b + d * Math.cos(C), a + d * Math.sin(C));
      }
      t.stroke();
    }
  const g = new ee(e);
  return ((g.wrapS = g.wrapT = ye), (g.colorSpace = we), g);
}
function Ae() {
  const e = document.createElement("canvas");
  e.width = e.height = 256;
  const t = e.getContext("2d"),
    d = t.createRadialGradient(128, 128, 0, 128, 128, 128);
  return (
    d.addColorStop(0, "rgba(255,255,255,.9)"),
    d.addColorStop(0.4, "rgba(255,255,255,.3)"),
    d.addColorStop(1, "rgba(255,255,255,0)"),
    (t.fillStyle = d),
    t.fillRect(0, 0, 256, 256),
    new ee(e)
  );
}
const Le = `
  attribute float aStart;
  attribute float aSize;
  attribute vec3 aColor;
  uniform float uTime;
  uniform float uScale;
  varying float vAge;
  varying vec3 vColor;
  void main() {
    vAge = (uTime - aStart) / 0.9;
    vColor = aColor;
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = (vAge < 0.0 || vAge > 1.0) ? 0.0 : aSize * uScale * (0.35 + vAge) / -mv.z;
    gl_Position = projectionMatrix * mv;
  }`,
  Pe = `
  varying float vAge;
  varying vec3 vColor;
  void main() {
    vec2 c = gl_PointCoord - 0.5;
    float d = length(c) * 2.0;
    float ring = (1.0 - smoothstep(0.0, 0.08, abs(d - 0.82))) * (1.0 - vAge);
    float core = exp(-d * d * 9.0) * pow(1.0 - vAge, 3.0) * 1.6;
    float a = ring + core;
    if (a < 0.01) discard;
    gl_FragColor = vec4(vColor * a, a);
  }`;
class Re {
  constructor(t = 400) {
    ((this.max = t), (this.i = 0));
    const d = new te();
    (d.setAttribute("position", new kt(new Float32Array(t * 3), 3)),
      d.setAttribute("aStart", new kt(new Float32Array(t).fill(-99), 1)),
      d.setAttribute("aSize", new kt(new Float32Array(t), 1)),
      d.setAttribute("aColor", new kt(new Float32Array(t * 3), 3)),
      (this.material = new Jt({
        vertexShader: Le,
        fragmentShader: Pe,
        uniforms: {
          uTime: {
            value: 0,
          },
          uScale: {
            value: 800,
          },
        },
        transparent: !0,
        depthWrite: !1,
        blending: Rt,
      })),
      (this.points = new ve(d, this.material)),
      (this.points.frustumCulled = !1));
  }
  emit(t, d, g, p) {
    const S = this.points.geometry,
      b = this.i++ % this.max;
    (S.attributes.position.setXYZ(b, ...t),
      S.attributes.aStart.setX(b, p),
      S.attributes.aSize.setX(b, g));
    const a = new rt(d);
    S.attributes.aColor.setXYZ(b, a.r, a.g, a.b);
    for (const f of ["position", "aStart", "aSize", "aColor"])
      S.attributes[f].needsUpdate = !0;
  }
}
function Be(e) {
  const t = Me(e, {
      fov: 34,
    }),
    { scene: d, camera: g, controls: p, bloom: S } = t;
  ((d.fog = new pe("#05070a", 26, 52)),
    (p.minDistance = 10),
    (p.maxDistance = 46),
    (p.autoRotateSpeed = 0.5),
    (S.strength = 0.8));
  const b = new Ht();
  t.root.add(b);
  const a = new Re();
  b.add(a.points);
  const f = new Ht();
  b.add(f);
  const C = new jt(1, 1, 1),
    I = new lt(
      C,
      new gt({
        color: "#9fb4c8",
        transparent: !0,
        opacity: 0.025,
        roughness: 0.1,
        side: _t,
        depthWrite: !1,
      }),
    ),
    _ = new lt(
      C,
      new gt({
        color: "#0b0f14",
        transparent: !0,
        opacity: 0.12,
        roughness: 0.04,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        envMapIntensity: 1.6,
        side: he,
        depthWrite: !1,
      }),
    );
  _.renderOrder = 5;
  const l = new Gt({
      color: "#c9d4df",
      transparent: !0,
      opacity: 0.16,
    }),
    m = new Ut(new me(C), l),
    N = new Gt({
      color: "#e8f0f8",
      transparent: !0,
      opacity: 0.95,
    });
  let W = null;
  const E = new Vt({
      color: "#8a4a1e",
      transparent: !0,
      opacity: 0,
      depthWrite: !1,
      side: _t,
    }),
    B = new lt(C, E),
    F = new lt(
      new Xt(1, 1),
      new Vt({
        map: Ae(),
        color: "#7f93a8",
        transparent: !0,
        opacity: 0.35,
        depthWrite: !1,
        blending: Rt,
      }),
    );
  ((F.rotation.x = -Math.PI / 2), f.add(I, B, m, F, _));
  const et = new gt({
      color: "#b9c2c9",
      metalness: 1,
      roughness: 0.28,
      clearcoat: 0.4,
    }),
    Y = new Ht(),
    k = new lt(
      new Xt(1, 1),
      new gt({
        color: "#c8d6e2",
        transparent: !0,
        opacity: 0.1,
        roughness: 0.05,
        clearcoat: 1,
        side: Qt,
        depthWrite: !1,
      }),
    );
  k.rotation.y = Math.PI / 2;
  const G = new Ht(),
    J = new lt(new Yt(0.12, 0.12, 6, 32), et);
  J.rotation.z = Math.PI / 2;
  const T = new lt(new Yt(0.42, 0.42, 0.16, 40), et);
  ((T.rotation.z = Math.PI / 2), Y.add(k, G, J, T), f.add(Y));
  const L = new gt({
      color: "#e4e8eb",
      metalness: 0.9,
      roughness: 0.38,
      map: Ee(),
      envMapIntensity: 1.5,
      emissive: new rt("#8fe8c8"),
      emissiveIntensity: 0,
    }),
    K = new lt(new jt(1, 0.16, 1), L);
  ((K.visible = !1), f.add(K));
  const dt = new Jt({
      uniforms: {
        uAlpha: {
          value: 0,
        },
      },
      vertexShader:
        "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
      fragmentShader:
        "uniform float uAlpha; varying vec2 vUv; void main(){ float e = smoothstep(0.0,0.5,vUv.x)*smoothstep(1.0,0.5,vUv.x); gl_FragColor = vec4(vec3(0.62,0.5,1.0)*1.8, uAlpha*e*0.55); }",
      transparent: !0,
      depthWrite: !1,
      blending: Rt,
      side: Qt,
    }),
    c = new lt(C, dt);
  ((c.visible = !1), f.add(c));
  let h = 0;
  function M(j, st = j.w) {
    h = -(st - j.w) / 2;
    const { w: Z, h: V, d: z } = j;
    for (const it of [I, _, m]) it.scale.set(Z, V, z);
    (B.scale.set(Z * 0.995, V * 0.995, z * 0.995),
      F.scale.set(Z * 1.6, z * 1.9, 1),
      (F.position.y = -V / 2 - 0.02),
      W && (f.remove(W), W.geometry.dispose()));
    const R = 0.7,
      tt = [];
    for (const it of [-1, 1])
      for (const ct of [-1, 1])
        for (const X of [-1, 1]) {
          const q = [(it * Z) / 2, (ct * V) / 2, (X * z) / 2];
          tt.push(
            ...q,
            q[0] - it * R,
            q[1],
            q[2],
            ...q,
            q[0],
            q[1] - ct * R,
            q[2],
            ...q,
            q[0],
            q[1],
            q[2] - X * R,
          );
        }
    ((W = new Ut(new te().setAttribute("position", new xe(tt, 3)), N)),
      f.add(W),
      k.scale.set(z, V, 1),
      G.clear());
    for (const [it, ct, X, q] of [
      [V / 2, 0, 0.08, z],
      [-V / 2, 0, 0.08, z],
      [0, z / 2, V, 0.08],
      [0, -z / 2, V, 0.08],
    ]) {
      const Mt = new lt(new jt(0.1, X, q), et);
      (Mt.position.set(0, it, ct), G.add(Mt));
    }
    ((Y.position.x = Z / 2),
      (J.position.x = 3.1),
      (T.position.x = 0.08),
      K.scale.set(Z * 0.96, 1, z * 0.96),
      (K.position.y = -V / 2 + 0.08),
      c.scale.set(Z * 0.34, V * 1.02, z * 1.02),
      (c.position.x = -Z / 2 + Z * 0.17));
  }
  M({
    w: 14,
    h: 9,
    d: 9,
  });
  const U = 5e3,
    P = new gt({
      color: "#ffffff",
      roughness: 0.2,
      metalness: 0,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
      envMapIntensity: 1.1,
    }),
    O = new Kt(new be(1, 28, 20), P, U);
  (O.instanceMatrix.setUsage(It),
    O.setColorAt(0, new rt()),
    O.instanceColor.setUsage(It),
    (O.frustumCulled = !1),
    b.add(O));
  const A = new ge(),
    $ = new rt(),
    s = new Et(),
    n = new pt(),
    o = new pt(),
    u = new pt(1, 1, 1),
    i = new Et(),
    v = Object.fromEntries(
      Object.entries(Ot).map(([j, st]) => [j, new rt(st.color)]),
    ),
    r = new Map();
  function H(j, st) {
    if (r.has(j)) return r.get(j);
    const Z = [],
      V = st.atoms;
    for (let z = 0; z < V.length; z++)
      for (let R = z + 1; R < V.length; R++) {
        const tt = new pt(...V[z].pos).multiplyScalar(Tt),
          it = new pt(...V[R].pos).multiplyScalar(Tt),
          ct = Ot[V[z].el].r,
          X = Ot[V[R].el].r,
          q = tt.distanceTo(it);
        if (q > (ct + X) * 1.25 + 0.25) continue;
        const Mt = Ce(ct, X, q, Ie),
          ce = new Et().setFromUnitVectors(
            new pt(0, 1, 0),
            it.clone().sub(tt).normalize(),
          );
        for (const [le, re] of [
          [Mt.a, z],
          [Mt.b, R],
        ]) {
          const bt = new Kt(le, P, 900);
          (bt.instanceMatrix.setUsage(It),
            bt.setColorAt(0, new rt()),
            (bt.frustumCulled = !1),
            (bt.count = 0),
            b.add(bt),
            Z.push({
              mesh: bt,
              atom: re,
              localPos: tt,
              localQuat: ce,
              n: 0,
            }));
        }
      }
    return (r.set(j, Z), Z);
  }
  function D(j, st, { colorBy: Z, glow: V } = {}) {
    let z = 0;
    for (const R of r.values()) for (const tt of R) tt.n = 0;
    for (const R of j) {
      const tt = st[R.sp],
        it = V ? V(R) : 1,
        ct = Z ? Z(R) : null;
      (s.set(R.q[0], R.q[1], R.q[2], R.q[3]),
        tt.atoms.forEach((X) => {
          if (z >= U) return;
          const q = se(R.q, X.pos);
          (o.set(
            R.pos[0] + q[0] * Tt,
            R.pos[1] + q[1] * Tt,
            R.pos[2] + q[2] * Tt,
          ),
            n.setScalar(Ot[X.el].r),
            A.compose(o, s, n),
            O.setMatrixAt(z, A),
            $.copy(ct || v[X.el]).multiplyScalar(it),
            O.setColorAt(z, $),
            z++);
        }));
      for (const X of H(R.sp, tt)) {
        if (X.n >= 900) continue;
        const q = X.localPos.clone().applyQuaternion(s);
        (o.set(R.pos[0] + q.x, R.pos[1] + q.y, R.pos[2] + q.z),
          i.copy(s).multiply(X.localQuat),
          A.compose(o, i, u),
          X.mesh.setMatrixAt(X.n, A),
          $.copy(ct || v[tt.atoms[X.atom].el]).multiplyScalar(it),
          X.mesh.setColorAt(X.n, $),
          X.n++);
      }
    }
    ((O.count = z),
      (O.instanceMatrix.needsUpdate = !0),
      (O.instanceColor.needsUpdate = !0));
    for (const R of r.values())
      for (const tt of R)
        ((tt.mesh.count = tt.n),
          (tt.mesh.instanceMatrix.needsUpdate = !0),
          tt.mesh.instanceColor && (tt.mesh.instanceColor.needsUpdate = !0));
  }
  const x = new rt("#5fb6ff"),
    nt = new rt("#dfe8f2"),
    ot = new rt("#ff8a3d");
  function at(j) {
    const st =
        j < 1
          ? x.clone().lerp(nt, Math.max(0, (j - 0.5) / 0.5))
          : nt.clone().lerp(ot, Math.min(1, (j - 1) / 1.2)),
      Z = Math.abs(j - 1);
    (N.color.copy(st).multiplyScalar(1 + Z * 1.6),
      l.color.copy(st),
      (l.opacity = 0.14 + Math.min(0.3, Z * 0.3)),
      F.material.color.copy(st).multiplyScalar(0.55 + Z * 0.9));
  }
  function mt(j) {
    E.opacity = Math.min(0.6, j);
  }
  function ft(j, st) {
    ((K.visible = j), (L.emissiveIntensity = st ? 0.06 : 0));
  }
  function ut(j) {
    Y.visible = j;
  }
  let qt = -1;
  function oe(j) {
    ((qt = j), (c.visible = !0));
  }
  const zt = {
    pos: new pt(9.5, 7.5, 19),
  };
  function Wt() {
    (g.position.copy(zt.pos), p.target.set(0, -0.4, 0), p.update());
  }
  const ae = t.resize;
  function Dt() {
    ae();
    const j = Math.max(1, 1.45 / g.aspect);
    (zt.pos.set(9.5, 7.5, 19).multiplyScalar(j),
      (a.material.uniforms.uScale.value = e.clientHeight * 1.2));
  }
  let xt = 0;
  function ne(j) {
    xt = Math.min(0.6, xt + j);
  }
  function ie(j) {
    if (((a.material.uniforms.uTime.value = j), c.visible)) {
      const st = j - qt;
      ((dt.uniforms.uAlpha.value = Math.max(0, 1 - st / 0.9)),
        st > 0.9 && (c.visible = !1));
    }
    (b.position.set(
      h + (Math.random() - 0.5) * xt,
      (Math.random() - 0.5) * xt,
      0,
    ),
      (xt *= 0.9),
      t.render());
  }
  return (
    Dt(),
    Wt(),
    {
      renderer: t.renderer,
      camera: g,
      controls: p,
      setBox: M,
      drawParticles: D,
      flashes: a,
      setWallTemperature: at,
      setTint: mt,
      setCatalyst: ft,
      setPiston: ut,
      flashBeam: oe,
      resize: Dt,
      render: ie,
      resetView: Wt,
      kick: ne,
      bloom: S,
    }
  );
}
const Q = (e, t, d = 0, g = 0) => ({
    el: e,
    pos: [t, d, g],
  }),
  yt = $e([
    {
      id: "H2",
      formula: "H₂",
      atoms: [Q("H", 0.3), Q("H", -0.3)],
      radius: 0.45,
    },
    {
      id: "I2",
      formula: "I₂",
      atoms: [Q("I", 0.62), Q("I", -0.62)],
      radius: 0.85,
    },
    {
      id: "HI",
      formula: "HI",
      atoms: [Q("I", -0.22), Q("H", 0.66)],
      radius: 0.7,
    },
    {
      id: "Cl2",
      formula: "Cl₂",
      atoms: [Q("Cl", 0.5), Q("Cl", -0.5)],
      radius: 0.72,
    },
    {
      id: "HCl",
      formula: "HCl",
      atoms: [Q("Cl", -0.18), Q("H", 0.58)],
      radius: 0.6,
    },
    {
      id: "H",
      formula: "H·",
      atoms: [Q("H", 0)],
      radius: 0.3,
      radical: !0,
    },
    {
      id: "Cl",
      formula: "Cl·",
      atoms: [Q("Cl", 0)],
      radius: 0.45,
      radical: !0,
    },
    {
      id: "NO2",
      formula: "NO₂",
      atoms: [Q("N", 0, -0.12), Q("O", 0.56, 0.2), Q("O", -0.56, 0.2)],
      radius: 0.7,
    },
    {
      id: "N2O4",
      formula: "N₂O₄",
      atoms: [
        Q("N", 0.44, 0),
        Q("N", -0.44, 0),
        Q("O", 0.86, 0.52),
        Q("O", 0.86, -0.52),
        Q("O", -0.86, 0.52),
        Q("O", -0.86, -0.52),
      ],
      radius: 0.95,
    },
  ]),
  Nt = [
    {
      id: "hi",
      reactants: ["H2", "I2"],
      products: ["HI", "HI"],
      Ea: 5,
      catalystEa: 1,
      dH: -0.3,
      p: 1,
      orient: !0,
    },
  ],
  Fe = [
    {
      id: "assoc",
      reactants: ["NO2", "NO2"],
      products: ["N2O4"],
      Ea: 0.15,
      dH: -3,
      p: 0.3,
    },
    {
      id: "dissoc",
      reactants: ["N2O4"],
      products: ["NO2", "NO2"],
      Ea: 4.2,
      dH: 3,
      A: 26,
    },
  ],
  qe = [
    {
      id: "c1",
      reactants: ["Cl", "H2"],
      products: ["HCl", "H"],
      Ea: 0.9,
      dH: 0.2,
      p: 1,
    },
    {
      id: "c2",
      reactants: ["H", "Cl2"],
      products: ["HCl", "Cl"],
      Ea: 0.3,
      dH: -3.5,
      p: 1,
    },
    {
      id: "t1",
      reactants: ["Cl", "Cl"],
      products: ["Cl2"],
      Ea: 0,
      dH: -3,
      p: 0.06,
    },
    {
      id: "t2",
      reactants: ["H", "H"],
      products: ["H2"],
      Ea: 0,
      dH: -3,
      p: 0.06,
    },
    {
      id: "t3",
      reactants: ["H", "Cl"],
      products: ["HCl"],
      Ea: 0,
      dH: -3,
      p: 0.06,
    },
    {
      id: "init",
      reactants: ["Cl2"],
      products: ["Cl", "Cl"],
      Ea: 9,
      dH: 2.5,
      A: 400,
    },
  ],
  Zt = {
    reactant: "Cl2",
    products: ["Cl", "Cl"],
    dH: -1.2,
    p: 0.45,
  },
  ze = "rgba(228,234,241,.85)",
  $t = "rgba(228,234,241,.4)",
  We = "rgba(207,214,222,.09)",
  wt = "'JetBrains Mono', ui-monospace, monospace";
function Bt(e) {
  const t = Math.min(window.devicePixelRatio || 1, 2),
    d = e.clientWidth,
    g = e.clientHeight;
  (e.width !== Math.round(d * t) || e.height !== Math.round(g * t)) &&
    ((e.width = Math.round(d * t)), (e.height = Math.round(g * t)));
  const p = e.getContext("2d");
  return (
    p.setTransform(t, 0, 0, t, 0, 0),
    p.clearRect(0, 0, d, g),
    {
      ctx: p,
      w: d,
      h: g,
    }
  );
}
function Ft(e, t, d, g, p) {
  ((e.strokeStyle = We), (e.lineWidth = 1));
  for (let S = 1; S <= 3; S++)
    (e.beginPath(),
      e.moveTo(t, d + p - (p * S) / 4),
      e.lineTo(t + g, d + p - (p * S) / 4),
      e.stroke());
  ((e.strokeStyle = $t),
    e.beginPath(),
    e.moveTo(t, d),
    e.lineTo(t, d + p),
    e.lineTo(t + g, d + p),
    e.stroke());
}
function De(e, { energies: t, T: d, Ea: g, EaCat: p, labels: S }) {
  const { ctx: b, w: a, h: f } = Bt(e),
    C = 12,
    I = 10,
    _ = a - 24,
    l = f - 34,
    m = Math.max(g * 1.35, 7 * d),
    N = 36,
    W = new Array(N).fill(0);
  for (const T of t) {
    const L = Math.floor((T / m) * N);
    L >= 0 && L < N && W[L]++;
  }
  const E = Math.max(1, t.length),
    B = m / N,
    F = W.map((T) => T / E / B);
  let et = 0;
  for (let T = 1; T < 200; T++) et = Math.max(et, Lt((T / 200) * m, d));
  et = Math.max(et, ...F) * 1.12;
  const Y = (T) => C + (T / m) * _,
    k = (T) => I + l - (T / et) * l;
  (Ft(b, C, I, _, l),
    F.forEach((T, L) => {
      const K = (L + 0.5) * B;
      ((b.fillStyle =
        K >= g ? "rgba(255,150,70,.85)" : "rgba(150,180,215,.38)"),
        b.fillRect(Y(L * B) + 1, k(T), _ / N - 2, I + l - k(T)));
    }),
    b.beginPath());
  for (let T = 0; T <= 240; T++) {
    const L = (T / 240) * m;
    T ? b.lineTo(Y(L), k(Lt(L, d))) : b.moveTo(Y(L), k(Lt(L, d)));
  }
  ((b.strokeStyle = "rgba(240,255,250,.9)"), (b.lineWidth = 1.6), b.stroke());
  const G = (T, L, K, dt) => {
    ((b.strokeStyle = L),
      b.setLineDash(dt || []),
      (b.lineWidth = 1.4),
      b.beginPath(),
      b.moveTo(Y(T), I),
      b.lineTo(Y(T), I + l),
      b.stroke(),
      b.setLineDash([]),
      (b.fillStyle = L),
      (b.font = `600 10.5px ${wt}`),
      (b.textAlign = "left"),
      b.fillText(K, Y(T) + 5, I + 11));
  };
  return (
    G(g, "#ff9a4a", "Ea"),
    p !== void 0 && G(p, "#5cf2b8", S?.cat || "Ea′", [4, 3]),
    (b.fillStyle = $t),
    (b.font = `500 10px ${wt}`),
    (b.textAlign = "right"),
    b.fillText(S?.x || "E", C + _, I + l + 16),
    t.filter((T) => T >= g).length / E
  );
}
function Pt(e, t, { ymax: d, window: g = 240 } = {}) {
  const { ctx: p, w: S, h: b } = Bt(e),
    a = 34,
    f = 12,
    C = S - 46,
    I = b - 32,
    _ = d ?? Math.max(1, ...t.flatMap((m) => m.data)) * 1.1;
  (Ft(p, a, f, C, I),
    (p.fillStyle = $t),
    (p.font = `500 9.5px ${wt}`),
    (p.textAlign = "right"),
    p.fillText(String(Math.round(_)), a - 5, f + 8),
    p.fillText("0", a - 5, f + I));
  for (const m of t) {
    const N = m.data.slice(-g);
    if (N.length < 2) continue;
    const W = (B) => a + C - ((N.length - 1 - B) / (g - 1)) * C,
      E = (B) => f + I - (B / _) * I;
    (p.beginPath(),
      N.forEach((B, F) => (F ? p.lineTo(W(F), E(B)) : p.moveTo(W(F), E(B)))),
      (p.strokeStyle = m.color),
      (p.lineWidth = 2),
      (p.shadowColor = m.color),
      (p.shadowBlur = 8),
      p.stroke(),
      (p.shadowBlur = 0),
      (p.fillStyle = m.color),
      p.beginPath(),
      p.arc(W(N.length - 1), E(N[N.length - 1]), 3, 0, Math.PI * 2),
      p.fill());
  }
  let l = a + 6;
  ((p.font = `600 10.5px ${wt}`), (p.textAlign = "left"));
  for (const m of t) {
    ((p.fillStyle = m.color),
      p.fillRect(l, f + I + 10, 10, 3),
      (p.fillStyle = ze));
    const N = m.data.length ? m.data[m.data.length - 1] : 0,
      W = `${m.label} ${Number.isInteger(N) ? N : N.toFixed(1)}`;
    (p.fillText(W, l + 14, f + I + 15), (l += p.measureText(W).width + 30));
  }
}
function _e(
  e,
  { Ea: t, dH: d, EaCat: g, showCat: p, balls: S = [], labels: b = {} },
) {
  const { ctx: a, w: f, h: C } = Bt(e),
    I = 26,
    _ = 14,
    l = f - 40,
    m = C - 36,
    N = Math.min(0, d) - 0.6,
    W = t + 1,
    E = (k) => _ + m - ((k - N) / (W - N)) * m,
    B = (k) => I + k * l,
    F = (k, G) => {
      const J = (k < 0.5, 0),
        T = 1 / (1 + Math.exp(-(k - 0.5) * 12));
      return J + d * T + (G - d / 2) * Math.exp(-((k - 0.5) ** 2) / 0.018);
    };
  Ft(a, I, _, l, m);
  const et = (k, G, J, T) => {
    a.beginPath();
    for (let L = 0; L <= 200; L++) {
      const K = L / 200;
      L ? a.lineTo(B(K), E(F(K, k))) : a.moveTo(B(K), E(F(K, k)));
    }
    ((a.strokeStyle = G),
      a.setLineDash(J || []),
      (a.lineWidth = T),
      (a.shadowColor = G),
      (a.shadowBlur = 10),
      a.stroke(),
      (a.shadowBlur = 0),
      a.setLineDash([]));
  };
  (et(t, "#ff9a4a", null, 2.2), p && et(g, "#5cf2b8", [5, 4], 2));
  const Y = (k, G, J, T, L) => {
    ((a.strokeStyle = T),
      (a.fillStyle = T),
      (a.lineWidth = 1.2),
      a.beginPath(),
      a.moveTo(k, E(G)),
      a.lineTo(k, E(J) + 5),
      a.stroke(),
      a.beginPath(),
      a.moveTo(k, E(J)),
      a.lineTo(k - 4, E(J) + 7),
      a.lineTo(k + 4, E(J) + 7),
      a.fill(),
      (a.font = `600 10.5px ${wt}`),
      (a.textAlign = "left"),
      a.fillText(L, k + 6, (E(G) + E(J)) / 2 + 4));
  };
  (Y(B(0.5) - 2, 0, F(0.5, t), "#ff9a4a", "Ea"),
    p && Y(B(0.5) + 34, 0, F(0.5, g), "#5cf2b8", b.cat || "Ea′"),
    (a.fillStyle = $t),
    (a.font = `500 10px ${wt}`),
    (a.textAlign = "left"),
    a.fillText(b.reactants || "", B(0.02), E(0) - 6),
    (a.textAlign = "right"),
    a.fillText(b.products || "", B(0.98), E(d) - 6),
    a.fillText(b.x || "", I + l, _ + m + 16));
  for (const k of S) {
    const G = F(k.t, k.cat ? g : t);
    ((a.fillStyle = k.cat ? "#5cf2b8" : "#ffd27a"),
      (a.shadowColor = a.fillStyle),
      (a.shadowBlur = 12),
      a.beginPath(),
      a.arc(B(k.t), E(G) - 5, 4, 0, Math.PI * 2),
      a.fill(),
      (a.shadowBlur = 0));
  }
}
const ht = [
  {
    id: "collision",
    title: translate("有效碰撞"),
    sub: "Effective collisions",
    system: "hi",
    T: 1.6,
    start: {
      H2: 60,
      I2: 60,
    },
    controls: ["orient"],
    show: {
      bounces: !0,
    },
    chart: "rate",
    body: translate(
      "<p>分子不停地运动、碰撞，但<b>绝大多数碰撞并不发生反应</b>（灰色微光）。</p><p>只有同时满足两个条件的碰撞才是<b>有效碰撞</b>（金色闪光）：</p><p>① 沿碰撞方向的能量 ≥ <b>活化能 Ea</b>；② <b>取向合适</b>——H₂ 与 I₂ 需要“并排”相撞，才能同时断开旧键、形成两个 H–I 键。</p>",
    ),
  },
  {
    id: "temperature",
    title: translate("温度与活化分子"),
    sub: "Temperature",
    system: "hi",
    T: 1,
    start: {
      H2: 60,
      I2: 60,
    },
    controls: ["temp"],
    show: {
      energyColor: !0,
    },
    chart: "dist",
    body: translate(
      "<p>同一温度下，分子的能量并不相同，而是服从<b>麦克斯韦–玻尔兹曼分布</b>（白色曲线）。</p><p>能量 ≥ Ea 的分子叫<b>活化分子</b>，在舞台上发出橙色光。</p><p>升高温度，曲线变矮变宽，<b>活化分子百分数急剧增大</b>，有效碰撞随之增多——这就是温度升高反应加快的原因。</p>",
    ),
  },
  {
    id: "catalyst",
    title: translate("催化剂"),
    sub: "Catalysis",
    system: "hi",
    T: 1,
    start: {
      H2: 60,
      I2: 60,
    },
    controls: ["catalyst"],
    show: {
      catalystPlate: !0,
    },
    chart: "profile",
    body: translate(
      "<p>底部的铂表面是<b>催化剂</b>。分子吸附在表面上，旧键被削弱、取向被摆正，反应换了一条<b>活化能更低</b>的路径（绿色虚线）。</p><p>同样的温度下，更多碰撞能翻过更低的能垒：绿色闪光集中出现在催化剂表面。</p><p>催化剂<b>不改变反应热 ΔH</b>，自身在反应前后也不变。</p>",
    ),
  },
  {
    id: "concentration",
    title: translate("浓度与压强"),
    sub: "Concentration & pressure",
    system: "hi",
    T: 1.5,
    start: {
      H2: 50,
      I2: 50,
    },
    controls: ["volume", "add"],
    show: {
      piston: !0,
    },
    chart: "rate",
    body: translate(
      "<p>单位体积内的分子越多，单位时间内的碰撞次数越多，有效碰撞也就越多。</p><p><b>推动活塞</b>压缩气体，或<b>加入反应物</b>，观察碰撞频率和反应速率的变化。</p><p>注意：活化分子的<b>百分数</b>没有变，变的是单位体积内活化分子的<b>数目</b>。</p>",
    ),
  },
  {
    id: "equilibrium",
    title: translate("化学平衡的建立"),
    sub: "Reaching equilibrium",
    system: "no2",
    T: 1,
    start: {
      NO2: 170,
    },
    controls: ["startNO2", "startN2O4"],
    show: {
      tint: !0,
      rates: !0,
    },
    chart: "conc",
    body: translate(
      "<p>2NO₂（红棕色）⇌ N₂O₄（无色）。</p><p>开始时只有 NO₂，正反应快、逆反应慢；随着 N₂O₄ 增多，逆反应逐渐加快。</p><p>当<b>正反应速率 = 逆反应速率</b>时，各物质的浓度不再变化，达到<b>化学平衡</b>。微观上两个方向的反应从未停止——这是<b>动态平衡</b>。</p><p>无论从 NO₂ 还是从 N₂O₄ 开始，最终到达同一个平衡。</p>",
    ),
  },
  {
    id: "lechatelier",
    title: translate("平衡移动"),
    sub: "Le Chatelier",
    system: "no2",
    T: 1,
    start: {
      NO2: 100,
      N2O4: 40,
    },
    controls: ["temp", "volume", "addNO2"],
    show: {
      tint: !0,
      piston: !0,
      tube: !0,
    },
    chart: "conc",
    body: translate(
      "<p>改变条件，平衡会向<b>减弱这种改变</b>的方向移动（勒夏特列原理）。</p><p><b>升温</b>：向吸热方向（生成 NO₂）移动，颜色变深。</p><p><b>压缩</b>：向气体分子数减少的方向（生成 N₂O₄）移动。仔细看：压缩瞬间颜色先变深（浓度增大），随后又变浅一些。</p>",
    ),
  },
  {
    id: "chain",
    title: translate("链式反应"),
    sub: "Chain reaction",
    system: "chain",
    T: 1,
    accommodation: 0.02,
    start: {
      H2: 110,
      Cl2: 110,
    },
    controls: ["light", "ignite"],
    show: {},
    chart: "chain",
    body: translate(
      "<p>H₂ 与 Cl₂ 混合，在暗处几乎不反应；一旦<b>强光照射</b>就会爆炸。</p><p>光把 Cl₂ 拆成两个氯原子 Cl·（<b>自由基</b>，发光的小球）。每个 Cl· 夺走 H₂ 的一个 H，生成 HCl 和 H·；H· 又夺走 Cl₂ 的一个 Cl，重新生成 Cl·……</p><p>一个自由基能引发成千上万次反应，同时放出大量热，反应越来越快——这就是<b>链式反应</b>。</p>",
    ),
  },
];
function Ge() {
  const e = (s) => document.querySelector(s),
    t = Be(e("#c3")),
    d = 14,
    g = 9,
    p = 9,
    S = 0.01,
    b = {
      hi: Nt,
      no2: Fe,
      chain: qe,
    },
    a = {
      hi: ["H2", "I2", "HI"],
      no2: ["NO2", "N2O4"],
      chain: ["H2", "Cl2", "HCl", "H", "Cl"],
    },
    f = {
      H2: "#d6dde0",
      I2: "#b07cf0",
      HI: "#ffd27a",
      NO2: "#ff8a4d",
      N2O4: "#7ad7ff",
      HCl: "#ffd27a",
      Cl2: "#7fe08a",
      H: "#ffffff",
      Cl: "#c3ff9e",
    },
    C = (s) =>
      s.replace(
        /[₀-₉]+/g,
        (n) =>
          `<sub>${[...n].map((o) => o.charCodeAt(0) - 8320).join("")}</sub>`,
      ),
    I = (s) => (s.sub === s.title ? "" : s.sub),
    _ = new rt("#ffb05c").multiplyScalar(2.4),
    l = {
      lesson: 0,
      paused: !1,
      slow: !1,
      T: 1,
      width: d,
      samples: [],
      last: null,
      balls: [],
      burst: 0,
    };
  let m = null;
  const N = () => ht[l.lesson];
  function W(s) {
    const n = N();
    ((m = je({
      species: yt,
      reactions: b[n.system],
      T: n.T,
      accommodation: n.accommodation ?? 0.5,
      seed: (Math.random() * 1e9) | 0,
      box: {
        w: d,
        h: g,
        d: p,
      },
    })),
      (l.T = n.T),
      (l.width = d));
    for (const [o, u] of Object.entries(s || n.start)) m.add(o, u);
    ((l.samples = []),
      (l.last = null),
      (l.balls = []),
      t.setBox(
        {
          w: d,
          h: g,
          d: p,
        },
        d,
      ),
      t.setCatalyst(!!n.show.catalystPlate, !1),
      t.setPiston(!!n.show.piston),
      t.setWallTemperature(l.T));
  }
  const E = () => l.width / d;
  function B() {
    const s = m.state.stats,
      n = m.counts(),
      o = {
        t: m.state.time,
        collisions: s.collisions,
        effective: s.effective,
        reactions: {
          ...s.reactions,
        },
        counts: n,
        T: m.temperature(),
      };
    if (l.last) {
      const u = Math.max(1e-6, o.t - l.last.t),
        i = (v) => (o.reactions[v] - l.last.reactions[v]) / u;
      (l.samples.push({
        ...o,
        collisionRate: (o.collisions - l.last.collisions) / u,
        effectiveRate: (o.effective - l.last.effective) / u,
        forward: i("assoc") || 0,
        backward: i("dissoc") || 0,
      }),
        l.samples.length > 400 && l.samples.shift());
    }
    l.last = o;
  }
  const F = (s, n = 8) => {
      const o = l.samples.slice(-n);
      return o.length ? o.reduce((u, i) => u + i[s], 0) / o.length : 0;
    },
    et = {
      hi: ["#ffd27a", 2.6],
      assoc: ["#ffb38a", 1.6],
      dissoc: ["#7ad7ff", 1.6],
      c1: ["#b49cff", 1.4],
      c2: ["#ffcf7a", 2.1],
      t1: ["#e8fff6", 1.2],
      t2: ["#e8fff6", 1.2],
      t3: ["#e8fff6", 1.2],
      init: ["#ff6a4a", 2.2],
    };
  function Y(s, n) {
    const o = N();
    let u = 24,
      i = 0,
      v = 0;
    for (const r of s) {
      if (r.type === "bounce") {
        if (!o.show.bounces || i++ % 2) continue;
        u-- > 0 && t.flashes.emit(r.pos, "#7f90a4", 0.9, n);
        continue;
      }
      if (r.type === "photo") {
        u-- > 0 && t.flashes.emit(r.pos, "#b49cff", 1.8, n);
        continue;
      }
      const [H, D] = r.catalyst
        ? ["#5cf2b8", 2.4]
        : et[r.reaction] || ["#ffffff", 1.5];
      (u-- > 0 && t.flashes.emit(r.pos, H, D, n),
        r.reaction === "c2" && v++,
        o.chart === "profile" &&
          l.balls.length < 14 &&
          l.balls.push({
            t0: n,
            cat: !!r.catalyst,
          }));
    }
    v &&
      (t.kick(Math.min(0.25, v * 0.012)),
      (l.burst = Math.min(1, l.burst + v * 0.02)));
  }
  function k(s, n, o, u, i, v, r) {
    return `<label class="sl"><span>${n}</span><input type="range" data-sl="${s}" min="${o}" max="${u}" step="${i}" value="${v}"><b id="v-${s}">${r}</b></label>`;
  }
  const G = (s) => `${Math.round(s * Te)} K`;
  function J() {
    const s = N(),
      n = [];
    for (const u of s.controls)
      (u === "temp" &&
        n.push(k("temp", translate("温度"), 0.5, 2.5, 0.05, l.T, G(l.T))),
        u === "volume" &&
          n.push(
            k(
              "volume",
              translate("体积"),
              7,
              14,
              0.1,
              l.width,
              `${Math.round(E() * 100)}%`,
            ),
          ),
        u === "orient" &&
          n.push(
            `<button class="tgl ${m.state.orientation ? "on" : ""}" data-act="orient"><i></i>${translate("要求取向合适")}</button>`,
          ),
        u === "catalyst" &&
          n.push(
            `<button class="act ${m.state.catalyst ? "on" : ""}" data-act="catalyst">${m.state.catalyst ? translate("移除催化剂") : translate("激活催化剂")}</button>`,
          ),
        u === "add" &&
          n.push(
            `<div class="row2"><button class="pill" data-act="add:H2">+ ${C("H₂")}</button><button class="pill" data-act="add:I2">+ ${C("I₂")}</button></div>`,
          ),
        u === "startNO2" &&
          n.push(
            `<div class="row2"><button class="pill" data-act="start:NO2">${translate("从纯 {0} 开始", [C("NO₂")])}</button><button class="pill" data-act="start:N2O4">${translate("从纯 {0} 开始", [C("N₂O₄")])}</button></div>`,
          ),
        u === "addNO2" &&
          n.push(
            `<div class="row2"><button class="pill" data-act="add:NO2">+ ${C("NO₂")}</button><button class="pill" data-act="add:N2O4">+ ${C("N₂O₄")}</button></div>`,
          ),
        u === "light" &&
          n.push(
            `<button class="act big uv" data-act="light">${translate("强光照射")}<kbd>Space</kbd></button>`,
          ),
        u === "ignite" &&
          n.push(
            `<button class="pill" data-act="spark">${translate("电火花点燃")}</button>`,
          ));
    const o = s.show.tube
      ? `<figure class="tube"><svg viewBox="0 0 60 200"><defs><linearGradient id="glassG" x1="0" x2="1"><stop offset="0" stop-color="#fff" stop-opacity=".6"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".35"/></linearGradient></defs><path d="M12 8 V160 a18 18 0 0 0 36 0 V8" fill="#f4efe6" stroke="#9aa39f" stroke-width="2"/><path id="tubeGas" d="M14 30 V160 a16 16 0 0 0 32 0 V30 Z" fill="#a8471f" fill-opacity=".3"/><path d="M12 8 V160 a18 18 0 0 0 36 0 V8" fill="url(#glassG)"/><rect x="8" y="2" width="44" height="10" rx="3" fill="#c9cfcc"/></svg><figcaption>${translate("宏观：试管中气体的颜色")}</figcaption></figure>`
      : "";
    return `<div class="ctl">${n.join("")}</div>${o}`;
  }
  function T() {
    const s = N();
    ((e("#lesson").innerHTML =
      `<div class="lh"><em>${String(l.lesson + 1).padStart(2, "0")}</em><div><h2>${s.title}</h2><small>${I(s)}</small></div></div><div class="body">${s.body}</div>${J()}`),
      L());
  }
  function L() {
    e("#stageBar").innerHTML =
      `<button data-act="pause">${l.paused ? translate("继续") : translate("暂停")}</button><button data-act="slow" class="${l.slow ? "on" : ""}">${translate("慢放")}</button><i class="sep"></i><button data-act="reset">${translate("重置")}</button>`;
  }
  let K = "";
  function dt() {
    const s = N(),
      n = m.counts(),
      o = a[s.system]
        .map(
          (r) =>
            `<span class="chip"><i style="background:${f[r]};${yt[r].radical ? `box-shadow:0 0 8px ${f[r]}` : ""}"></i><span>${C(yt[r].formula)}</span><b>${n[r]}</b></span>`,
        )
        .join(""),
      u = [[translate("温度"), G(F("T", 4) || m.state.T)]];
    if (s.system !== "no2") {
      const r = F("collisionRate"),
        H = F("effectiveRate");
      (u.push(
        [translate("碰撞频率"), `${Math.round(r)} /s`],
        [translate("有效碰撞"), `${H.toFixed(1)} /s`],
      ),
        s.system === "hi" &&
          u.push([
            translate("有效比例"),
            `${r ? ((H / r) * 100).toFixed(2) : "0.00"}%`,
          ]));
    }
    let i = "";
    if (s.show.rates) {
      const r = F("forward", 16),
        H = F("backward", 16),
        D = Math.max(r, H, 1);
      i = `<div class="rates"><div><span>${translate("v 正")}</span><i style="width:${(r / D) * 100}%"></i><b>${r.toFixed(1)}</b></div><div><span>${translate("v 逆")}</span><i class="b" style="width:${(H / D) * 100}%"></i><b>${H.toFixed(1)}</b></div></div>`;
    }
    const v = `<div class="chips">${o}</div><div class="kv">${u.map(([r, H]) => `<span>${r}</span><b>${H}</b>`).join("")}</div>${i}`;
    v !== K && ((K = v), (e("#hud").innerHTML = v));
  }
  function c(s) {
    const n = N(),
      o = e("#chartC"),
      u = e("#chartH");
    if (n.chart === "dist") {
      const i = m.state.particles.map((r) => m.kinetic(r)),
        v = De(o, {
          energies: i,
          T: m.state.T,
          Ea: Nt[0].Ea,
          labels: {
            x: translate("分子动能 E"),
          },
        });
      u.innerHTML = translate("能量分布 · 活化分子 {0}%", [
        (v * 100).toFixed(1),
      ]);
    } else if (n.chart === "profile") {
      l.balls = l.balls.filter((v) => s - v.t0 < 1.4);
      const i = Nt[0];
      (_e(o, {
        Ea: i.Ea,
        dH: i.dH,
        EaCat: i.catalystEa,
        showCat: m.state.catalyst,
        balls: l.balls.map((v) => ({
          t: (s - v.t0) / 1.4,
          cat: v.cat,
        })),
        labels: {
          reactants: "H₂ + I₂",
          products: "2HI",
          x: translate("反应进程"),
          cat: translate("催化"),
        },
      }),
        (u.innerHTML = translate("能量–反应进程")));
    } else
      n.chart === "rate"
        ? (Pt(
            o,
            [
              {
                label: translate("碰撞/10"),
                color: "#7fa9a0",
                data: l.samples.map((i) => Math.round(i.collisionRate / 10)),
              },
              {
                label: translate("有效"),
                color: "#ffd27a",
                data: l.samples.map((i) => +i.effectiveRate.toFixed(1)),
              },
            ],
            {
              window: 160,
            },
          ),
          (u.innerHTML = translate("每秒碰撞次数与有效碰撞次数")))
        : n.chart === "conc"
          ? (Pt(
              o,
              ["NO2", "N2O4"].map((i) => ({
                label: yt[i].formula,
                color: f[i],
                data: l.samples.map((v) => v.counts[i]),
              })),
              {
                window: 240,
              },
            ),
            (u.innerHTML = translate("分子数随时间变化")))
          : n.chart === "chain" &&
            (Pt(
              o,
              [
                {
                  label: "HCl",
                  color: f.HCl,
                  data: l.samples.map((i) => i.counts.HCl),
                },
                {
                  label: translate("自由基"),
                  color: "#c3ff9e",
                  data: l.samples.map((i) => i.counts.H + i.counts.Cl),
                },
                {
                  label: "T×100",
                  color: "#ff7a4a",
                  data: l.samples.map((i) => Math.round(i.T * 100)),
                },
              ],
              {
                window: 200,
              },
            ),
            (u.innerHTML = translate("产物、自由基与温度")));
  }
  function h(s) {
    l.lesson = (s + ht.length) % ht.length;
    const n = N();
    (history.replaceState(null, "", `#${l.lesson + 1}`),
      document.querySelectorAll("#nav .ni").forEach((u, i) => {
        (u.classList.toggle("on", i === l.lesson),
          i === l.lesson && u.classList.add("seen"));
      }),
      document.querySelectorAll("#prog i").forEach((u, i) => {
        (u.classList.toggle("on", i < l.lesson),
          u.classList.toggle("cur", i === l.lesson));
      }));
    const o = e("#chapter");
    ((o.querySelector(".n").textContent =
      `${String(l.lesson + 1).padStart(2, "0")} / ${String(ht.length).padStart(2, "0")}`),
      (o.querySelector("h1").textContent = n.title),
      (o.querySelector("p").textContent = I(n)),
      o.classList.remove("in"),
      o.offsetWidth,
      o.classList.add("in"),
      (l.paused = !1),
      W(),
      T(),
      (K = ""),
      (e("#lesson").scrollTop = 0));
  }
  ((e("#nav").innerHTML =
    `<div class="navh">${translate("章节")}</div>` +
    ht
      .map(
        (s, n) =>
          `<button class="ni" data-go="${n}"><em>${String(n + 1).padStart(2, "0")}</em><b>${s.title}</b><small>${I(s)}</small></button>`,
      )
      .join("") +
    `<div class="navf">${translate("<kbd>←</kbd> <kbd>→</kbd> 切换章节<br><kbd>R</kbd> 重置视角 <kbd>Space</kbd> 光照 / 暂停")}</div>`),
    (e("#prog").innerHTML = ht.map(() => "<i></i>").join("")),
    e("#nav").addEventListener("click", (s) => {
      const n = s.target.closest("[data-go]");
      n && h(+n.dataset.go);
    }));
  function M() {
    const s = performance.now() / 1e3;
    (t.flashBeam(s),
      e("#flash").classList.remove("on"),
      e("#flash").offsetWidth,
      e("#flash").classList.add("on"));
    const n = -d / 2 + d * 0.34;
    Y(
      m.illuminate(Zt, (o) => o[0] < n),
      s,
    );
  }
  function U() {
    const s = performance.now() / 1e3;
    (t.flashes.emit([0, 0, 0], "#ffffff", 6, s),
      t.kick(0.2),
      Y(
        m.illuminate(
          {
            ...Zt,
            p: 0.9,
          },
          (n) => Math.hypot(n[0], n[1], n[2]) < 1.8,
        ),
        s,
      ));
  }
  (document.addEventListener("click", (s) => {
    const n = s.target.closest("[data-act]");
    if (!n) return;
    const [o, u] = n.dataset.act.split(":");
    (o === "pause"
      ? (l.paused = !l.paused)
      : o === "slow"
        ? (l.slow = !l.slow)
        : o === "reset"
          ? W()
          : o === "orient"
            ? (m.state.orientation = !m.state.orientation)
            : o === "catalyst"
              ? ((m.state.catalyst = !m.state.catalyst),
                t.setCatalyst(!0, m.state.catalyst))
              : o === "add"
                ? m.add(u, 20)
                : o === "start"
                  ? W({
                      [u]: u === "NO2" ? 170 : 85,
                    })
                  : o === "light"
                    ? M()
                    : o === "spark" && U(),
      o !== "light" && o !== "spark" && o !== "add" && T());
  }),
    document.addEventListener("input", (s) => {
      const n = s.target.closest("[data-sl]");
      if (!n) return;
      const o = +n.value;
      n.dataset.sl === "temp"
        ? ((l.T = o),
          (m.state.T = o),
          t.setWallTemperature(o),
          (e("#v-temp").textContent = G(o)))
        : n.dataset.sl === "volume" &&
          ((l.width = o),
          m.setWidth(o),
          t.setBox(
            {
              w: o,
              h: g,
              d: p,
            },
            d,
          ),
          (e("#v-volume").textContent = `${Math.round(E() * 100)}%`));
    }),
    (e("#bPrev").onclick = () => h(l.lesson - 1)),
    (e("#bNext").onclick = () => h(l.lesson + 1)),
    (e("#bReset").onclick = () => t.resetView()),
    (e("#bFull").onclick = () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen?.()),
    window.addEventListener("keydown", (s) => {
      s.target.closest?.("input") ||
        (s.key === "ArrowLeft"
          ? h(l.lesson - 1)
          : s.key === "ArrowRight"
            ? h(l.lesson + 1)
            : s.key === "r" || s.key === "R"
              ? t.resetView()
              : s.key === "f" || s.key === "F"
                ? e("#bFull").click()
                : s.key === " " &&
                  (s.preventDefault(),
                  N().system === "chain"
                    ? M()
                    : ((l.paused = !l.paused), L())));
    }),
    new ResizeObserver(() => t.resize()).observe(e("#stage")));
  let P = performance.now(),
    O = 0;
  function A(s) {
    const n = s / 1e3,
      o = Math.max(0, Math.min(0.05, (s - P) / 1e3));
    P = s;
    const u = N();
    if (!l.paused) {
      const r = o * (l.slow ? 0.6 : 3),
        H = Math.min(30, Math.ceil(r / S)),
        D = [];
      for (let x = 0; x < H; x++) D.push(...m.step(r / H));
      (Y(D, n), s - O > 250 && ((O = s), B()));
    }
    if (
      (u.system === "chain" &&
        t.setWallTemperature(Math.max(m.state.T, F("T", 3))),
      u.show.tint)
    ) {
      const r = m.counts().NO2 / E() / 170;
      t.setTint(0.08 + r * 0.32);
      const H = document.getElementById("tubeGas");
      H && H.setAttribute("fill-opacity", (0.06 + r * 0.8).toFixed(3));
    } else t.setTint(0);
    const i = m.state.time,
      v = Nt[0].Ea;
    (t.drawParticles(m.state.particles, yt, {
      colorBy: u.show.energyColor
        ? (r) => (m.kinetic(r) >= v ? _ : null)
        : null,
      glow: (r) => {
        let H = 1;
        yt[r.sp].radical && (H = 1.9 + 0.5 * Math.sin(i * 9 + r.uid));
        const D = i - r.born,
          x = u.system === "no2" ? 0.5 : u.system === "chain" ? 1.1 : 2.2;
        return (
          r.born > 0 && D < 0.7 && (H = Math.max(H, 1 + x * (1 - D / 0.7))),
          H
        );
      },
    }),
      (l.burst *= 0.94),
      (e("#burst").style.opacity = l.burst.toFixed(3)),
      (t.controls.autoRotate = !1),
      t.render(n),
      dt(),
      c(n),
      requestAnimationFrame(A));
  }
  const $ = parseInt(location.hash.slice(1), 10);
  (h(Number.isFinite($) && $ >= 1 && $ <= ht.length ? $ - 1 : 0),
    requestAnimationFrame(A),
    document.body.classList.add("ready"));
}
function reactionLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("化学反应 · 微观世界")), Ge());
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
                    jsxRuntime.jsx("circle", {
                      cx: "16",
                      cy: "16",
                      r: "9",
                      stroke: "#0f9e63",
                      strokeOpacity: ".35",
                      strokeWidth: "1.2",
                      strokeDasharray: "2 3",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "10",
                      cy: "13",
                      r: "3.4",
                      fill: "#a066e0",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "21.5",
                      cy: "19",
                      r: "3.4",
                      fill: "#3a3f46",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "16",
                      cy: "16",
                      r: "1.6",
                      fill: "#ffb05c",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M16 9.5v-3M16 25.5v-3M9.5 16h-3M25.5 16h-3",
                      stroke: "#ffb05c",
                      strokeWidth: "1.4",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "REACTION",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("化学反应 · 微观世界"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(ue, {}),
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
            jsxRuntime.jsx("div", {
              id: "burst",
            }),
            jsxRuntime.jsx("div", {
              id: "flash",
            }),
            jsxRuntime.jsx("div", {
              id: "scope",
            }),
            jsxRuntime.jsx("div", {
              id: "spec",
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
            }),
            jsxRuntime.jsxs("div", {
              id: "chart",
              children: [
                jsxRuntime.jsx("div", {
                  className: "ch-h",
                  id: "chartH",
                }),
                jsxRuntime.jsx("canvas", {
                  id: "chartC",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              id: "stageBar",
            }),
          ],
        }),
        jsxRuntime.jsx("aside", {
          id: "panel",
          children: jsxRuntime.jsx("div", {
            id: "lesson",
          }),
        }),
      ],
    })
  );
}
export { reactionLabPage as default };
