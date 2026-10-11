// Recovered from public deployment: studio-DdpeYmJn.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  W as T,
  x as F,
  A as j,
  S as N,
  D as P,
  H as B,
  j as k,
  r as $,
  E as q,
  q as H,
  U as W,
  V as z,
  O as _,
  G,
  aF as U,
  w as X,
  C as S,
  i as K,
  v as Z,
  b as V,
  T as R,
  P as J,
  f as y,
  $ as A,
  l as L,
  c as Q,
  N as E,
  a2 as Y,
  o as ee,
} from "./OutputPass-B-cSf-Py.js";
const te = {
    H: "#eef1f4",
    C: "#16181c",
    N: "#2f5df0",
    O: "#e8382c",
    F: "#86e05a",
    Cl: "#2fd27c",
    Br: "#b2412a",
    I: "#8a46d6",
    S: "#f2c01e",
    P: "#ff8a1f",
    B: "#ffab8a",
    Be: "#b9e07a",
    Xe: "#2fc4e8",
    Na: "#a07cf0",
    Ag: "#c9d2d8",
    Zn: "#9aa8b6",
    Cu: "#d8783a",
    Al: "#c9d2d8",
    Fe: "#9a5e3a",
    Mg: "#a9e07a",
    A: "#0fbf78",
    X: "#e8e4dc",
  },
  ne = new Set(["Na", "Ag", "Zn", "Cu", "Al", "Fe", "Mg"]),
  x = new Map();
function de(t, { opacity: n = 1 } = {}) {
  const e = `${t}|${n}`;
  if (x.has(e)) return x.get(e);
  const a = ne.has(t),
    s = new Z({
      color: te[t] || "#9aa0a6",
      roughness: t === "C" ? 0.16 : a ? 0.22 : 0.2,
      metalness: a ? 0.85 : 0,
      clearcoat: a ? 0.3 : 1,
      clearcoatRoughness: 0.06,
      specularIntensity: 1,
      envMapIntensity: t === "C" ? 1.35 : 1,
      transparent: n < 1,
      opacity: n,
      depthWrite: n >= 1,
    });
  return (x.set(e, s), s);
}
function oe(t) {
  const n = new N();
  n.background = new S("#020304");
  const e = (s, i, o, r, f, c = [0, 0, 0]) => {
    const l = new V(
      new L(s, i),
      new Q({
        color: new S(o).multiplyScalar(r),
        side: E,
      }),
    );
    (l.position.set(...f), l.lookAt(...c), n.add(l));
  };
  (e(6, 4, "#ffffff", 3.2, [-2, 6, 6]),
    e(1.2, 7, "#ffffff", 2.2, [7, 1, 2]),
    e(1.2, 7, "#cfe1ff", 1.2, [-7, 0, -2]),
    e(8, 1, "#ffffff", 0.9, [0, -6, 4]),
    e(3, 3, "#9fc4ff", 0.8, [0, 2, -8]));
  const a = new K(t).fromScene(n, 0.015).texture;
  return (n.traverse((s) => s.geometry?.dispose()), a);
}
function ae() {
  const t = document.createElement("canvas");
  t.width = t.height = 512;
  const n = t.getContext("2d"),
    e = n.createRadialGradient(256, 240, 10, 256, 256, 380);
  (e.addColorStop(0, "#1a1f27"),
    e.addColorStop(0.45, "#0d1015"),
    e.addColorStop(1, "#030405"),
    (n.fillStyle = e),
    n.fillRect(0, 0, 512, 512));
  const a = n.getImageData(0, 0, 512, 512);
  for (let i = 0; i < a.data.length; i += 4) {
    const o = (Math.random() - 0.5) * 5;
    ((a.data[i] += o), (a.data[i + 1] += o), (a.data[i + 2] += o));
  }
  n.putImageData(a, 0, 0);
  const s = new X(t);
  return ((s.colorSpace = F), s);
}
function ue(t, { fov: n = 30 } = {}) {
  const e = new T({
    canvas: t,
    antialias: !0,
    preserveDrawingBuffer: !0,
  });
  (e.setPixelRatio(Math.min(window.devicePixelRatio, 2)),
    (e.outputColorSpace = F),
    (e.toneMapping = j),
    (e.toneMappingExposure = 1.1));
  const a = new N();
  ((a.background = ae()), (a.environment = oe(e)));
  const s = new P(16777215, 1.1);
  s.position.set(-4, 8, 7);
  const i = new P(10273535, 1.4);
  (i.position.set(6, 3, -8), a.add(s, i, new B(10466512, 329223, 0.25)));
  const o = new k(n, 1, 0.1, 200),
    r = new $(o, t);
  ((r.enableDamping = !0),
    (r.dampingFactor = 0.07),
    (r.enablePan = !1),
    (r.minDistance = 3),
    (r.maxDistance = 90),
    (r.autoRotateSpeed = 0.7));
  const f = new q(e);
  f.addPass(new H(a, o));
  const c = new W(new z(512, 512), 0.75, 0.55, 0.82);
  (f.addPass(c), f.addPass(new _()));
  const l = new G();
  a.add(l);
  const v = new U();
  a.add(v);
  function w() {
    const { clientWidth: p, clientHeight: m } = t;
    !p ||
      !m ||
      (e.setSize(p, m, !1),
      f.setSize(p, m),
      c.resolution.set(p, m),
      (o.aspect = p / m),
      o.updateProjectionMatrix());
  }
  function d(p) {
    const m = p.clone().project(o);
    return {
      x: (m.x * 0.5 + 0.5) * t.clientWidth,
      y: (-m.y * 0.5 + 0.5) * t.clientHeight,
      visible: m.z < 1,
    };
  }
  function u() {
    (r.update(), f.render());
  }
  return (
    w(),
    {
      renderer: e,
      scene: a,
      camera: o,
      controls: r,
      root: l,
      floor: v,
      bloom: c,
      resize: w,
      render: u,
      project: d,
    }
  );
}
const D = (t, n, e) => {
  const a = Math.max(e - Math.abs(t - n), 0) / e;
  return Math.min(t, n) - a * a * e * 0.25;
};
function O(t, n, e, a, s, i) {
  const o = (c) =>
    D(D(Math.hypot(t, c) - e, Math.hypot(t - n, c) - a, i), c - s, i);
  let r = 0,
    f = Math.max(e, a, s) * 1.6;
  if (o(r) > 0) return 0;
  for (let c = 0; c < 26; c++) {
    const l = (r + f) / 2;
    o(l) > 0 ? (f = l) : (r = l);
  }
  return r;
}
const g = new Map(),
  se = 1600;
function me(t, n, e, a, s = a * 1.3) {
  e = ((d, u) => Math.round(d / u) * u)(e, 0.015);
  const o = `${t.toFixed(3)}|${n.toFixed(3)}|${e.toFixed(3)}|${a.toFixed(3)}`,
    r = g.get(o);
  if (r) return (g.delete(o), g.set(o, r), r);
  const f = (d, u, p, m) => {
      const b = [];
      let C = d;
      for (let h = 0; h <= 60; h++) {
        const M = d + ((u - d) * h) / 60,
          I = Math.sqrt(Math.max(0, p * p - (M - m) ** 2));
        if (O(M, e, t, n, a, s) - I > 0.003) {
          C = d + ((u - d) * Math.max(0, h - 1)) / 60;
          break;
        }
      }
      for (let h = 0; h <= 28; h++) {
        const M = C + ((u - C) * h) / 28;
        b.push(new z(Math.max(0.002, O(M, e, t, n, a, s)), M));
      }
      return b;
    },
    c = (e + (t - n) * 0.5) / 2,
    l = f(t * 0.5, c, t, 0),
    v = f(e - n * 0.5, c, n, e).reverse(),
    w = {
      a: new A(l, 36),
      b: new A(v, 36),
    };
  if ((g.set(o, w), g.size > se)) {
    const [d, u] = g.entries().next().value;
    (g.delete(d), u.a.dispose(), u.b.dispose());
  }
  return w;
}
function re(
  t,
  { intensity: n = 1.6, power: e = 1.6, core: a = 0.25, opacity: s = 1 } = {},
) {
  return new Y({
    uniforms: {
      uColor: {
        value: new S(t),
      },
      uIntensity: {
        value: n,
      },
      uPower: {
        value: e,
      },
      uCore: {
        value: a,
      },
      uOpacity: {
        value: s,
      },
    },
    vertexShader: `varying vec3 vN; varying vec3 vV;
      void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform vec3 uColor; uniform float uIntensity; uniform float uPower; uniform float uCore; uniform float uOpacity; varying vec3 vN; varying vec3 vV;
      void main(){ float f = 1.0 - abs(dot(normalize(vN), normalize(vV))); float a = (pow(f, uPower) + uCore) * uOpacity; gl_FragColor = vec4(uColor * uIntensity * a, a); }`,
    transparent: !0,
    depthWrite: !1,
    blending: ee,
    side: E,
  });
}
const ie = new R(1, 0.34, 40, 128);
function pe(t, { color: n = "#5fa8ff" } = {}) {
  const e = new G();
  for (const [s, i, o] of [
    [1, 0.8, 2.4],
    [1.18, 0.35, 3],
  ]) {
    const r = new V(
      ie,
      re(n, {
        intensity: 1.5,
        power: o,
        core: 0.06,
        opacity: i,
      }),
    );
    (r.scale.set(s, s, 1.25),
      (r.renderOrder = 3),
      (r.userData.sharedGeometry = !0),
      (r.userData.baseOpacity = i),
      e.add(r));
  }
  const a = new J(n, 6, 7, 1.6);
  return (e.add(a), t && ce(e, t), e);
}
function ce(t, n) {
  const e = n.reduce((i, o) => i.add(o), new y()).multiplyScalar(1 / n.length),
    a = n.reduce((i, o) => i + o.distanceTo(e), 0) / n.length,
    s = new y()
      .subVectors(n[0], e)
      .cross(new y().subVectors(n[1], e))
      .normalize();
  (t.position.copy(e),
    t.quaternion.setFromUnitVectors(new y(0, 0, 1), s),
    t.scale.setScalar(a),
    (t.children[2].distance = a * 5));
}
function he(t, n) {
  const e = Array.from(
    {
      length: t,
    },
    () => [],
  );
  for (const o of n)
    Math.abs(o.order - 1.5) < 0.01 &&
      !o.partial &&
      (e[o.a].push(o.b), e[o.b].push(o.a));
  const a = [],
    s = new Set(),
    i = (o, r, f) => {
      if (!(f.length > 7))
        for (const c of e[r])
          if (c === o && f.length >= 5) {
            const l = [...f].sort((v, w) => v - w).join(",");
            s.has(l) || (s.add(l), a.push([...f]));
          } else !f.includes(c) && c > o && i(o, c, [...f, c]);
    };
  for (let o = 0; o < t; o++) i(o, o, [o]);
  return a;
}
export {
  te as S,
  he as a,
  ue as c,
  re as g,
  de as l,
  me as n,
  pe as p,
  ce as u,
};
