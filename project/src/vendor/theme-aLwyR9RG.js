// Recovered from public deployment: theme-aLwyR9RG.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  M as p,
  v as w,
  L as S,
  b as D,
  R as E,
  V as F,
  e as L,
  f as C,
} from "./OutputPass-B-cSf-Py.js";
import { e as X } from "./charts-CzzpgoDB.js";
function Y(n, o = 5) {
  const e = [];
  for (let r = 0; r < n.length; r += o) e.push(n[r]);
  const l = [];
  for (let r = 1; r < e.length; r++) l.push(e[r].x - e[r - 1].x);
  const i = e.length > 1 ? e[1].t - e[0].t : 0,
    c = [];
  for (let r = 1; r < e.length - 1; r++)
    c.push({
      t: e[r].t,
      v: (e[r + 1].x - e[r - 1].x) / (2 * i),
    });
  let h = null;
  const f = Math.floor(l.length / 2);
  if (f >= 1) {
    let r = 0,
      t = 0;
    for (let g = 0; g < f; g++) ((r += l[g]), (t += l[g + f]));
    h = (t - r) / (f * f * i * i);
  }
  return {
    pts: e,
    gaps: l,
    vel: c,
    T: i,
    a: h,
  };
}
function z(n, o) {
  const e = n.length;
  if (e < 2) return null;
  const l = n.reduce((t, g) => t + g, 0) / e,
    i = o.reduce((t, g) => t + g, 0) / e;
  let c = 0,
    h = 0,
    f = 0;
  for (let t = 0; t < e; t++)
    ((c += (n[t] - l) * (o[t] - i)),
      (h += (n[t] - l) ** 2),
      (f += (o[t] - i) ** 2));
  if (!h) return null;
  const r = c / h;
  return {
    k: r,
    b: i - r * l,
    r2: f ? (c * c) / (h * f) : 1,
  };
}
const A = (n, o, e) => (o * o - n * n) / (2 * e);
let y = null;
function B() {
  if (y) return y;
  const n = X();
  n.repeat.set(6, 1);
  const o = new p({
      color: "#b9bec5",
      metalness: 1,
      roughness: 0.62,
      roughnessMap: n,
      envMapIntensity: 0.85,
    }),
    e = new p({
      color: "#5b6069",
      metalness: 0.9,
      roughness: 0.38,
      roughnessMap: n,
    });
  return (
    (y = {
      alu: o,
      aluDark: e,
      anodize: (i) =>
        new w({
          color: i,
          metalness: 0.75,
          roughness: 0.3,
          clearcoat: 0.6,
          clearcoatRoughness: 0.25,
          roughnessMap: n,
        }),
      steel: new p({
        color: "#a9aeb5",
        metalness: 1,
        roughness: 0.3,
      }),
      chrome: new p({
        color: "#f2f4f7",
        metalness: 1,
        roughness: 0.06,
      }),
      darkSteel: new p({
        color: "#2b2e33",
        metalness: 0.85,
        roughness: 0.35,
      }),
      brass: new w({
        color: "#d6a648",
        metalness: 1,
        roughness: 0.22,
        clearcoat: 0.3,
      }),
      plastic: new w({
        color: "#1b1d21",
        metalness: 0,
        roughness: 0.42,
        clearcoat: 0.35,
        clearcoatRoughness: 0.4,
      }),
      plasticGrey: new p({
        color: "#6d727a",
        metalness: 0,
        roughness: 0.5,
      }),
      plasticWhite: new w({
        color: "#e9e6df",
        metalness: 0,
        roughness: 0.38,
        clearcoat: 0.4,
      }),
      rubber: new p({
        color: "#141517",
        metalness: 0,
        roughness: 0.85,
      }),
      glass: new w({
        color: "#ffffff",
        metalness: 0,
        roughness: 0.04,
        transmission: 1,
        thickness: 0.004,
        ior: 1.5,
        transparent: !0,
        opacity: 1,
        envMapIntensity: 1.4,
      }),
      string: new p({
        color: "#eee6d4",
        roughness: 0.9,
      }),
      red: new w({
        color: "#d63a2a",
        roughness: 0.35,
        clearcoat: 0.8,
      }),
      wire: new p({
        color: "#16171a",
        roughness: 0.55,
      }),
      wireRed: new p({
        color: "#a52a22",
        roughness: 0.5,
      }),
    }),
    y
  );
}
function j(n, o = !0, e = !0) {
  return (
    n.traverse((l) => {
      l.isMesh && ((l.castShadow = o), (l.receiveShadow = e));
    }),
    n
  );
}
function q(n, o, e = 8) {
  const l = new S(n, n, 1, e, 1, !0);
  (l.translate(0, 0.5, 0), l.rotateX(Math.PI / 2));
  const i = new D(l, o);
  return (
    (i.castShadow = !0),
    (i.update = (c, h) => {
      i.position.copy(c);
      const f = c.distanceTo(h);
      (i.scale.set(1, 1, Math.max(1e-4, f)), f > 1e-6 && i.lookAt(h));
    }),
    i
  );
}
function G(n, o) {
  const { camera: e, controls: l, renderer: i } = n,
    c = i.domElement,
    h = new E(),
    f = new F();
  let r = [],
    t = null,
    g = null;
  function R(a) {
    r = a.filter(Boolean);
  }
  function v(a) {
    const s = c.getBoundingClientRect();
    (f.set(
      ((a.clientX - s.left) / s.width) * 2 - 1,
      -((a.clientY - s.top) / s.height) * 2 + 1,
    ),
      h.setFromCamera(f, e));
    const u = h.intersectObjects(
      r.filter((d) => d.visible !== !1),
      !0,
    );
    for (const d of u) {
      let m = d.object,
        P = !0;
      for (let b = m; b; b = b.parent) b.visible === !1 && (P = !1);
      if (P) {
        for (; m && !m.userData.drag;) m = m.parent;
        if (m)
          return {
            obj: m,
            kind: m.userData.drag,
            id: m.userData.id,
            point: d.point,
          };
      }
    }
    return null;
  }
  const M = new L(),
    k = new C();
  function I(a, s, u) {
    const d = c.getBoundingClientRect();
    return (
      f.set(
        ((a.clientX - d.left) / d.width) * 2 - 1,
        -((a.clientY - d.top) / d.height) * 2 + 1,
      ),
      h.setFromCamera(f, e),
      M.setFromNormalAndCoplanarPoint(s, u),
      h.ray.intersectPlane(M, k) ? k.clone() : null
    );
  }
  (c.addEventListener(
    "pointerdown",
    (a) => {
      if (a.button !== 0) return;
      o.unlock?.();
      const s = v(a);
      if (!s || o.canDrag?.(s) === !1) return;
      (a.stopPropagation(), (l.enabled = !1), c.setPointerCapture(a.pointerId));
      let u = o.planeFor?.(s);
      (u ||
        ((u = new C().subVectors(e.position, s.point)),
        s.kind === "body" || s.kind === "gate" ? (u.x = 0) : (u.y = 0),
        u.lengthSq() < 1e-6 && u.set(0, 0, 1),
        u.normalize()),
        (t = {
          ...s,
          normal: u,
          origin: s.point.clone(),
          moved: !1,
          x0: a.clientX,
          y0: a.clientY,
          hist: [],
        }),
        o.start?.(t));
    },
    {
      capture: !0,
    },
  ),
    c.addEventListener("pointermove", (a) => {
      if (t) {
        Math.hypot(a.clientX - t.x0, a.clientY - t.y0) > 3 && (t.moved = !0);
        const d = I(a, t.normal, t.origin);
        d && t.moved && o.move?.(t, d, performance.now());
        return;
      }
      if (a.buttons) return;
      const s = v(a),
        u = s ? s.kind : null;
      u !== g &&
        ((g = u),
        (c.style.cursor = u
          ? u === "tray" || u === "hanger"
            ? "pointer"
            : "grab"
          : ""),
        o.hover?.(s));
    }));
  const x = (a) => {
    if (!t) return;
    l.enabled = !0;
    try {
      c.releasePointerCapture(a.pointerId);
    } catch {}
    const s = t;
    ((t = null), s.moved ? o.end?.(s, performance.now()) : o.click?.(s));
  };
  return (
    c.addEventListener("pointerup", x),
    c.addEventListener("pointercancel", x),
    {
      setTargets: R,
      dragging: () => !!t,
    }
  );
}
export { G as a, Y as c, A as g, z as l, B as m, q as r, j as s };
