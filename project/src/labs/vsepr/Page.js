// Recovered from public deployment: Page-BmHCOAca.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Lt } from "../../components/LanguageSwitcher.js";
import {
  f as C,
  ax as Pt,
  e as Nt,
  ay as Bt,
  y as ue,
  a8 as We,
  G as Pe,
  b as V,
  m as It,
  M as At,
  c as at,
  a3 as rt,
  af as lt,
  a5 as ct,
  az as qt,
  a9 as Rt,
  u as Dt,
  K as zt,
  Q as Gt,
  L as Xt,
  X as Wt,
  V as _t,
  $ as Ut,
  o as Yt,
  N as dt,
  C as Qt,
  v as pt,
  l as Kt,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  c as Jt,
  p as Zt,
  n as es,
  l as ts,
  g as ut,
} from "../../vendor/studio-DdpeYmJn.js"; /* empty css              */ /* empty css               */
const he = 0,
  ss = 1,
  ns = new C(),
  _e = new Pt(),
  Fe = new Nt(),
  Ue = new C(),
  oe = new Bt();
class os {
  constructor() {
    ((this.tolerance = -1),
      (this.faces = []),
      (this.newFaces = []),
      (this.assigned = new Ye()),
      (this.unassigned = new Ye()),
      (this.vertices = []));
  }
  setFromPoints(e) {
    if (e.length >= 4) {
      this.makeEmpty();
      for (let t = 0, n = e.length; t < n; t++)
        this.vertices.push(new is(e[t]));
      this.compute();
    }
    return this;
  }
  setFromObject(e) {
    const t = [];
    return (
      e.updateMatrixWorld(!0),
      e.traverse(function (n) {
        const r = n.geometry;
        if (r !== void 0) {
          const a = r.attributes.position;
          if (a !== void 0)
            for (let i = 0, o = a.count; i < o; i++) {
              const d = new C();
              (d.fromBufferAttribute(a, i).applyMatrix4(n.matrixWorld),
                t.push(d));
            }
        }
      }),
      this.setFromPoints(t)
    );
  }
  containsPoint(e) {
    const t = this.faces;
    for (let n = 0, r = t.length; n < r; n++)
      if (t[n].distanceToPoint(e) > this.tolerance) return !1;
    return !0;
  }
  intersectRay(e, t) {
    const n = this.faces;
    let r = -1 / 0,
      a = 1 / 0;
    for (let i = 0, o = n.length; i < o; i++) {
      const d = n[i],
        p = d.distanceToPoint(e.origin),
        f = d.normal.dot(e.direction);
      if (p > 0 && f >= 0) return null;
      const w = f !== 0 ? -p / f : 0;
      if (
        !(w <= 0) &&
        (f > 0 ? (a = Math.min(w, a)) : (r = Math.max(w, r)), r > a)
      )
        return null;
    }
    return (r !== -1 / 0 ? e.at(r, t) : e.at(a, t), t);
  }
  intersectsRay(e) {
    return this.intersectRay(e, ns) !== null;
  }
  makeEmpty() {
    return ((this.faces = []), (this.vertices = []), this);
  }
  addVertexToFace(e, t) {
    return (
      (e.face = t),
      t.outside === null
        ? this.assigned.append(e)
        : this.assigned.insertBefore(t.outside, e),
      (t.outside = e),
      this
    );
  }
  removeVertexFromFace(e, t) {
    return (
      e === t.outside &&
        (e.next !== null && e.next.face === t
          ? (t.outside = e.next)
          : (t.outside = null)),
      this.assigned.remove(e),
      this
    );
  }
  removeAllVerticesFromFace(e) {
    if (e.outside !== null) {
      const t = e.outside;
      let n = e.outside;
      for (; n.next !== null && n.next.face === e;) n = n.next;
      return (
        this.assigned.removeSubList(t, n),
        (t.prev = n.next = null),
        (e.outside = null),
        t
      );
    }
  }
  deleteFaceVertices(e, t) {
    const n = this.removeAllVerticesFromFace(e);
    if (n !== void 0)
      if (t === void 0) this.unassigned.appendChain(n);
      else {
        let r = n;
        do {
          const a = r.next;
          (t.distanceToPoint(r.point) > this.tolerance
            ? this.addVertexToFace(r, t)
            : this.unassigned.append(r),
            (r = a));
        } while (r !== null);
      }
    return this;
  }
  resolveUnassignedPoints(e) {
    if (this.unassigned.isEmpty() === !1) {
      let t = this.unassigned.first();
      do {
        const n = t.next;
        let r = this.tolerance,
          a = null;
        for (let i = 0; i < e.length; i++) {
          const o = e[i];
          if (o.mark === he) {
            const d = o.distanceToPoint(t.point);
            if ((d > r && ((r = d), (a = o)), r > 1e3 * this.tolerance)) break;
          }
        }
        (a !== null && this.addVertexToFace(t, a), (t = n));
      } while (t !== null);
    }
    return this;
  }
  computeExtremes() {
    const e = new C(),
      t = new C(),
      n = [],
      r = [];
    for (let a = 0; a < 3; a++) n[a] = r[a] = this.vertices[0];
    (e.copy(this.vertices[0].point), t.copy(this.vertices[0].point));
    for (let a = 0, i = this.vertices.length; a < i; a++) {
      const o = this.vertices[a],
        d = o.point;
      for (let p = 0; p < 3; p++)
        d.getComponent(p) < e.getComponent(p) &&
          (e.setComponent(p, d.getComponent(p)), (n[p] = o));
      for (let p = 0; p < 3; p++)
        d.getComponent(p) > t.getComponent(p) &&
          (t.setComponent(p, d.getComponent(p)), (r[p] = o));
    }
    return (
      (this.tolerance =
        3 *
        Number.EPSILON *
        (Math.max(Math.abs(e.x), Math.abs(t.x)) +
          Math.max(Math.abs(e.y), Math.abs(t.y)) +
          Math.max(Math.abs(e.z), Math.abs(t.z)))),
      {
        min: n,
        max: r,
      }
    );
  }
  computeInitialHull() {
    const e = this.vertices,
      t = this.computeExtremes(),
      n = t.min,
      r = t.max;
    let a = 0,
      i = 0;
    for (let m = 0; m < 3; m++) {
      const x = r[m].point.getComponent(m) - n[m].point.getComponent(m);
      x > a && ((a = x), (i = m));
    }
    const o = n[i],
      d = r[i];
    let p, f;
    ((a = 0), _e.set(o.point, d.point));
    for (let m = 0, x = this.vertices.length; m < x; m++) {
      const v = e[m];
      if (v !== o && v !== d) {
        _e.closestPointToPoint(v.point, !0, Ue);
        const F = Ue.distanceToSquared(v.point);
        F > a && ((a = F), (p = v));
      }
    }
    ((a = -1), Fe.setFromCoplanarPoints(o.point, d.point, p.point));
    for (let m = 0, x = this.vertices.length; m < x; m++) {
      const v = e[m];
      if (v !== o && v !== d && v !== p) {
        const F = Math.abs(Fe.distanceToPoint(v.point));
        F > a && ((a = F), (f = v));
      }
    }
    const w = [];
    if (Fe.distanceToPoint(f.point) < 0) {
      w.push(
        L.create(o, d, p),
        L.create(f, d, o),
        L.create(f, p, d),
        L.create(f, o, p),
      );
      for (let m = 0; m < 3; m++) {
        const x = (m + 1) % 3;
        (w[m + 1].getEdge(2).setTwin(w[0].getEdge(x)),
          w[m + 1].getEdge(1).setTwin(w[x + 1].getEdge(0)));
      }
    } else {
      w.push(
        L.create(o, p, d),
        L.create(f, o, d),
        L.create(f, d, p),
        L.create(f, p, o),
      );
      for (let m = 0; m < 3; m++) {
        const x = (m + 1) % 3;
        (w[m + 1].getEdge(2).setTwin(w[0].getEdge((3 - m) % 3)),
          w[m + 1].getEdge(0).setTwin(w[x + 1].getEdge(1)));
      }
    }
    for (let m = 0; m < 4; m++) this.faces.push(w[m]);
    for (let m = 0, x = e.length; m < x; m++) {
      const v = e[m];
      if (v !== o && v !== d && v !== p && v !== f) {
        a = this.tolerance;
        let F = null;
        for (let S = 0; S < 4; S++) {
          const E = this.faces[S].distanceToPoint(v.point);
          E > a && ((a = E), (F = this.faces[S]));
        }
        F !== null && this.addVertexToFace(v, F);
      }
    }
    return this;
  }
  reindexFaces() {
    const e = [];
    for (let t = 0; t < this.faces.length; t++) {
      const n = this.faces[t];
      n.mark === he && e.push(n);
    }
    return ((this.faces = e), this);
  }
  nextVertexToAdd() {
    if (this.assigned.isEmpty() === !1) {
      let e,
        t = 0;
      const n = this.assigned.first().face;
      let r = n.outside;
      do {
        const a = n.distanceToPoint(r.point);
        (a > t && ((t = a), (e = r)), (r = r.next));
      } while (r !== null && r.face === n);
      return e;
    }
  }
  computeHorizon(e, t, n, r) {
    (this.deleteFaceVertices(n), (n.mark = ss));
    let a;
    t === null ? (a = t = n.getEdge(0)) : (a = t.next);
    do {
      const i = a.twin,
        o = i.face;
      (o.mark === he &&
        (o.distanceToPoint(e) > this.tolerance
          ? this.computeHorizon(e, i, o, r)
          : r.push(a)),
        (a = a.next));
    } while (a !== t);
    return this;
  }
  addAdjoiningFace(e, t) {
    const n = L.create(e, t.tail(), t.head());
    return (this.faces.push(n), n.getEdge(-1).setTwin(t.twin), n.getEdge(0));
  }
  addNewFaces(e, t) {
    this.newFaces = [];
    let n = null,
      r = null;
    for (let a = 0; a < t.length; a++) {
      const i = t[a],
        o = this.addAdjoiningFace(e, i);
      (n === null ? (n = o) : o.next.setTwin(r),
        this.newFaces.push(o.face),
        (r = o));
    }
    return (n.next.setTwin(r), this);
  }
  addVertexToHull(e) {
    const t = [];
    return (
      this.unassigned.clear(),
      this.removeVertexFromFace(e, e.face),
      this.computeHorizon(e.point, null, e.face, t),
      this.addNewFaces(e, t),
      this.resolveUnassignedPoints(this.newFaces),
      this
    );
  }
  cleanup() {
    return (
      this.assigned.clear(),
      this.unassigned.clear(),
      (this.newFaces = []),
      this
    );
  }
  compute() {
    let e;
    for (this.computeInitialHull(); (e = this.nextVertexToAdd()) !== void 0;)
      this.addVertexToHull(e);
    return (this.reindexFaces(), this.cleanup(), this);
  }
}
class L {
  constructor() {
    ((this.normal = new C()),
      (this.midpoint = new C()),
      (this.area = 0),
      (this.constant = 0),
      (this.outside = null),
      (this.mark = he),
      (this.edge = null));
  }
  static create(e, t, n) {
    const r = new L(),
      a = new $e(e, r),
      i = new $e(t, r),
      o = new $e(n, r);
    return (
      (a.next = o.prev = i),
      (i.next = a.prev = o),
      (o.next = i.prev = a),
      (r.edge = a),
      r.compute()
    );
  }
  getEdge(e) {
    let t = this.edge;
    for (; e > 0;) ((t = t.next), e--);
    for (; e < 0;) ((t = t.prev), e++);
    return t;
  }
  compute() {
    const e = this.edge.tail(),
      t = this.edge.head(),
      n = this.edge.next.head();
    return (
      oe.set(e.point, t.point, n.point),
      oe.getNormal(this.normal),
      oe.getMidpoint(this.midpoint),
      (this.area = oe.getArea()),
      (this.constant = this.normal.dot(this.midpoint)),
      this
    );
  }
  distanceToPoint(e) {
    return this.normal.dot(e) - this.constant;
  }
}
class $e {
  constructor(e, t) {
    ((this.vertex = e),
      (this.prev = null),
      (this.next = null),
      (this.twin = null),
      (this.face = t));
  }
  head() {
    return this.vertex;
  }
  tail() {
    return this.prev ? this.prev.vertex : null;
  }
  length() {
    const e = this.head(),
      t = this.tail();
    return t !== null ? t.point.distanceTo(e.point) : -1;
  }
  lengthSquared() {
    const e = this.head(),
      t = this.tail();
    return t !== null ? t.point.distanceToSquared(e.point) : -1;
  }
  setTwin(e) {
    return ((this.twin = e), (e.twin = this), this);
  }
}
class is {
  constructor(e) {
    ((this.point = e),
      (this.prev = null),
      (this.next = null),
      (this.face = null));
  }
}
class Ye {
  constructor() {
    ((this.head = null), (this.tail = null));
  }
  first() {
    return this.head;
  }
  last() {
    return this.tail;
  }
  clear() {
    return ((this.head = this.tail = null), this);
  }
  insertBefore(e, t) {
    return (
      (t.prev = e.prev),
      (t.next = e),
      t.prev === null ? (this.head = t) : (t.prev.next = t),
      (e.prev = t),
      this
    );
  }
  insertAfter(e, t) {
    return (
      (t.prev = e),
      (t.next = e.next),
      t.next === null ? (this.tail = t) : (t.next.prev = t),
      (e.next = t),
      this
    );
  }
  append(e) {
    return (
      this.head === null ? (this.head = e) : (this.tail.next = e),
      (e.prev = this.tail),
      (e.next = null),
      (this.tail = e),
      this
    );
  }
  appendChain(e) {
    for (
      this.head === null ? (this.head = e) : (this.tail.next = e),
        e.prev = this.tail;
      e.next !== null;
    )
      e = e.next;
    return ((this.tail = e), this);
  }
  remove(e) {
    return (
      e.prev === null ? (this.head = e.next) : (e.prev.next = e.next),
      e.next === null ? (this.tail = e.prev) : (e.next.prev = e.prev),
      this
    );
  }
  removeSubList(e, t) {
    return (
      e.prev === null ? (this.head = t.next) : (e.prev.next = t.next),
      t.next === null ? (this.tail = e.prev) : (t.next.prev = e.prev),
      this
    );
  }
  isEmpty() {
    return this.head === null;
  }
}
class as extends ue {
  constructor(e = []) {
    super();
    const t = [],
      n = [],
      a = new os().setFromPoints(e).faces;
    for (let i = 0; i < a.length; i++) {
      const o = a[i];
      let d = o.edge;
      do {
        const p = d.head().point;
        (t.push(p.x, p.y, p.z),
          n.push(o.normal.x, o.normal.y, o.normal.z),
          (d = d.next));
      } while (d !== o.edge);
    }
    (this.setAttribute("position", new We(t, 3)),
      this.setAttribute("normal", new We(n, 3)));
  }
}
const Z = 180 / Math.PI,
  ee = (s, e) => [s[0] + e[0], s[1] + e[1], s[2] + e[2]],
  Q = (s, e) => [s[0] - e[0], s[1] - e[1], s[2] - e[2]],
  A = (s, e) => [s[0] * e, s[1] * e, s[2] * e],
  Ne = (s, e) => s[0] * e[0] + s[1] * e[1] + s[2] * e[2],
  rs = (s, e) => [
    s[1] * e[2] - s[2] * e[1],
    s[2] * e[0] - s[0] * e[2],
    s[0] * e[1] - s[1] * e[0],
  ],
  q = (s) => Math.hypot(s[0], s[1], s[2]),
  X = (s) => A(s, 1 / (q(s) || 1)),
  G = {
    add: ee,
    sub: Q,
    scale: A,
    dot: Ne,
    cross: rs,
    len: q,
    norm: X,
  },
  ht = {
    20: ["linear", "linear", "sp", [180]],
    30: ["trigonal-planar", "trigonal-planar", "sp2", [120]],
    21: ["trigonal-planar", "bent", "sp2", [120]],
    40: ["tetrahedral", "tetrahedral", "sp3", [109.5]],
    31: ["tetrahedral", "trigonal-pyramidal", "sp3", [109.5]],
    22: ["tetrahedral", "bent", "sp3", [109.5]],
    50: [
      "trigonal-bipyramidal",
      "trigonal-bipyramidal",
      "sp3d",
      [90, 120, 180],
    ],
    41: ["trigonal-bipyramidal", "seesaw", "sp3d", [90, 120, 180]],
    32: ["trigonal-bipyramidal", "t-shaped", "sp3d", [90, 180]],
    23: ["trigonal-bipyramidal", "linear", "sp3d", [180]],
    60: ["octahedral", "octahedral", "sp3d2", [90, 180]],
    51: ["octahedral", "square-pyramidal", "sp3d2", [90]],
    42: ["octahedral", "square-planar", "sp3d2", [90, 180]],
    33: ["octahedral", "t-shaped", "sp3d2", [90, 180]],
    24: ["octahedral", "linear", "sp3d2", [180]],
    70: [
      "pentagonal-bipyramidal",
      "pentagonal-bipyramidal",
      "sp3d3",
      [72, 90, 180],
    ],
  };
function I(s, e) {
  return Object.hasOwn(ht, `${s}${e}`);
}
function Be(s, e) {
  const t = (n) =>
    n > 1 ? String(n).replace(/\d/g, (r) => "₀₁₂₃₄₅₆₇₈₉"[r]) : "";
  return `AX${t(s)}${e ? `E${t(e)}` : ""}`;
}
function ft(s, e) {
  const t = ht[`${s}${e}`];
  if (!t) return null;
  const [n, r, a, i] = t;
  return {
    notation: Be(s, e),
    domains: s + e,
    electronGeometry: n,
    molecularGeometry: r,
    hybrid: a,
    idealAngles: i,
  };
}
const ie = Math.sqrt(3) / 2,
  ls = (() => {
    const s = -0.3333333333333333,
      e = Math.sqrt(8) / 3;
    return [
      [0, 1, 0],
      ...[90, 210, 330].map((t) => [
        e * Math.cos(t / Z),
        s,
        e * Math.sin(t / Z),
      ]),
    ];
  })(),
  mt = {
    2: [
      [1, 0, 0],
      [-1, 0, 0],
    ],
    3: [
      [0, 1, 0],
      [ie, -0.5, 0],
      [-ie, -0.5, 0],
    ],
    4: ls,
    5: [
      [1, 0, 0],
      [-0.5, 0, ie],
      [-0.5, 0, -ie],
      [0, 1, 0],
      [0, -1, 0],
    ],
    6: [
      [0, 1, 0],
      [0, -1, 0],
      [1, 0, 0],
      [-1, 0, 0],
      [0, 0, 1],
      [0, 0, -1],
    ],
    7: [
      [0, 1, 0],
      [0, -1, 0],
      ...[0, 72, 144, 216, 288].map((s) => [
        Math.cos(s / Z),
        0,
        Math.sin(s / Z),
      ]),
    ],
  };
function te(s, e) {
  if (!I(s, e)) throw new Error(`Unsupported VSEPR class ${Be(s, e)}`);
  const t = mt[s + e],
    n = t.slice(0, e).map((a) => ({
      dir: [...a],
      lone: !0,
    }));
  return [
    ...t.slice(e).map((a) => ({
      dir: [...a],
      lone: !1,
    })),
    ...n,
  ];
}
const cs = 0.8,
  bt = (s) => (s.lone ? cs : 1),
  ge = (s) => A(s.dir, bt(s));
function gt(s) {
  let e = 0;
  for (let t = 0; t < s.length; t++)
    for (let n = t + 1; n < s.length; n++)
      e += 1 / Math.max(q(Q(ge(s[t]), ge(s[n]))), 1e-6);
  return e;
}
function wt(s, { steps: e = 1, dt: t = 0.04, maxStep: n = 0.08 } = {}) {
  let r = s.map((a) => ({
    ...a,
    dir: X(a.dir),
  }));
  for (let a = 0; a < e; a++) {
    const i = r.map(() => [0, 0, 0]);
    for (let o = 0; o < r.length; o++)
      for (let d = o + 1; d < r.length; d++) {
        const p = Q(ge(r[o]), ge(r[d])),
          f = Math.max(q(p), 0.001),
          w = A(p, 1 / (f * f * f));
        ((i[o] = ee(i[o], w)), (i[d] = Q(i[d], w)));
      }
    r = r.map((o, d) => {
      const p = o.dir,
        f = A(i[d], bt(o)),
        w = Q(f, A(p, Ne(f, p))),
        m = q(w) * t;
      return {
        ...o,
        dir: X(ee(p, A(w, m > n ? n / q(w) : t))),
      };
    });
  }
  return r;
}
function xt(s, { tol: e = 1e-7, limit: t = 6e3 } = {}) {
  let n = s;
  for (let r = 0; r < t; r++) {
    const a = wt(n),
      i = Math.max(...a.map((o, d) => q(Q(o.dir, n[d].dir))));
    if (((n = a), i < e)) break;
  }
  return n;
}
const Se = new Map();
function ds(s, e) {
  const t = `${s}${e}`;
  if (Se.has(t)) return Se.get(t);
  const n = mt[s + e];
  let r = 1 / 0;
  const a = (i, o) => {
    if (o.length === e) {
      const d = n.map((p, f) => ({
        dir: [...p],
        lone: o.includes(f),
      }));
      r = Math.min(r, gt(xt(d)));
      return;
    }
    for (let d = i; d < n.length; d++) a(d + 1, [...o, d]);
  };
  return (a(0, []), Se.set(t, r), r);
}
function ps(s, e = 1e-4) {
  const t = s.filter((n) => n.lone).length;
  return gt(s) <= ds(s.length - t, t) + e;
}
const us = (s) => Math.min(0.5 + 0.15 * s, 1.5);
function He(s, e = Math.random, t = 0.9) {
  return s.map((n) => ({
    ...n,
    dir: X(
      ee(n.dir, [
        (e() - 0.5) * 2 * t,
        (e() - 0.5) * 2 * t,
        (e() - 0.5) * 2 * t,
      ]),
    ),
  }));
}
const yt = (s, e) => Math.acos(Math.max(-1, Math.min(1, Ne(X(s), X(e))))) * Z;
function hs(s) {
  const e = s.filter((n) => !n.lone),
    t = [];
  for (let n = 0; n < e.length; n++)
    for (let r = n + 1; r < e.length; r++)
      t.push([n, r, yt(e[n].dir, e[r].dir)]);
  return t;
}
const we = {
  H: 2.2,
  Be: 1.57,
  B: 2.04,
  C: 2.55,
  N: 3.04,
  O: 3.44,
  F: 3.98,
  P: 2.19,
  S: 2.58,
  Cl: 3.16,
  Br: 2.96,
  I: 2.66,
  Xe: 2.6,
  X: 3,
  A: 2.5,
};
function fs(s, e, t, n = 0.05) {
  const r = we[s],
    a = e.map((o, d) => A(X(t[d]), we[o] - r)),
    i = a.reduce(ee, [0, 0, 0]);
  return {
    bonds: a,
    net: i,
    magnitude: q(i),
    polar: q(i) > n,
  };
}
const ms = (s) => s.map((e) => [-e[0], e[1], e[2]]),
  Oe = {
    H: 0.31,
    Be: 0.96,
    B: 0.84,
    C: 0.76,
    N: 0.71,
    O: 0.66,
    F: 0.57,
    P: 1.07,
    S: 1.05,
    Cl: 1.02,
    Br: 1.2,
    I: 1.39,
    Xe: 1.4,
    A: 0.9,
    X: 0.7,
  };
function vt(
  { center: s, ligands: e, lone: t = 0, orders: n = [] },
  r = te(e.length, t),
) {
  const a = r.filter((p) => !p.lone),
    i = [
      {
        el: s,
        pos: [0, 0, 0],
      },
    ],
    o = [];
  e.forEach((p, f) => {
    const w = n[f] || 1,
      m = (Oe[s] + Oe[p]) * (w === 3 ? 0.87 : w === 2 ? 0.9 : 1);
    (i.push({
      el: p,
      pos: A(a[f].dir, m),
    }),
      o.push([0, f + 1, w]));
  });
  const d = r
    .filter((p) => p.lone)
    .map((p) => ({
      atom: 0,
      dir: [...p.dir],
    }));
  return {
    atoms: i,
    bonds: o,
    lonePairs: d,
  };
}
const ke = {
    H: 1.2,
    C: 1.7,
    N: 1.55,
    O: 1.52,
    F: 1.47,
    Cl: 1.75,
    Br: 1.85,
    I: 1.98,
    S: 1.8,
    P: 1.8,
    B: 1.92,
    Be: 1.53,
    Xe: 2.16,
    A: 1.6,
    X: 1.35,
  },
  bs = "#a58cff",
  Ie = "#2fe39a",
  Qe = "#ff7a3d",
  je = 0.12,
  U = (s) => Math.max(0.23, Oe[s] * 0.46),
  Y = (s) => new C(s[0], s[1], s[2]),
  P = {
    sphere: new It(1, 48, 32),
    cylinder: new Xt(1, 1, 1, 24, 1, !0),
    cone: new Wt(1, 1, 24),
    lobe: (() => {
      const s = [];
      for (let e = 0; e <= 24; e++) {
        const t = e / 24;
        s.push(
          new _t(Math.sin(Math.PI * t) * Math.pow(t, 0.35) * 0.42, t * 1.15),
        );
      }
      return new Ut(s, 40);
    })(),
  },
  Ee = (s) => ts(s),
  gs = ut(bs, {
    intensity: 1.3,
    power: 1.4,
    core: 0.18,
    opacity: 0.9,
  }),
  ws = new At({
    color: "#d9ccff",
    emissive: "#b9a4ff",
    emissiveIntensity: 2.2,
  }),
  Ke = ut(Ie, {
    intensity: 1.1,
    power: 1.5,
    core: 0.1,
    opacity: 0.8,
  }),
  Je = new at({
    color: Ie,
    transparent: !0,
    opacity: 0.022,
    depthWrite: !1,
    side: dt,
    blending: Yt,
  }),
  Te = new ct({
    color: new Qt(Ie).multiplyScalar(1.6),
    transparent: !0,
    opacity: 0.85,
  }),
  xs = new at({
    color: "#e8eef5",
    transparent: !0,
    opacity: 0.55,
  }),
  Ze = new pt({
    color: Qe,
    emissive: Qe,
    emissiveIntensity: 0.35,
    roughness: 0.25,
    clearcoat: 1,
  });
function fe(s, e, t, n) {
  const r = new C().subVectors(t, e),
    a = r.length();
  (s.position.copy(e).addScaledVector(r, 0.5),
    s.scale.set(n, a, n),
    s.quaternion.setFromUnitVectors(new C(0, 1, 0), r.normalize()));
}
function et(s, e, t, n) {
  const r = new Pe(),
    a = new C().subVectors(e, s),
    i = Math.min(t * 5, a.length() * 0.4),
    o = s.clone().addScaledVector(a.clone().normalize(), a.length() - i),
    d = new V(P.cylinder, n);
  fe(d, s, o, t);
  const p = new V(P.cone, n);
  fe(p, o, e, t * 2.4);
  const f = new V(P.cylinder, n),
    w = new C()
      .crossVectors(
        a,
        Math.abs(a.y) < 0.9 * a.length() ? new C(0, 1, 0) : new C(1, 0, 0),
      )
      .normalize(),
    m = s.clone().addScaledVector(a.clone().normalize(), t * 4);
  return (
    fe(
      f,
      m.clone().addScaledVector(w, -t * 3.5),
      m.clone().addScaledVector(w, t * 3.5),
      t * 0.8,
    ),
    r.add(d, p, f),
    r
  );
}
function ys(s) {
  const e = Jt(s),
    { camera: t, controls: n } = e;
  ((n.minDistance = 4), (n.maxDistance = 30), (n.autoRotateSpeed = 1.2));
  const r = {
    distance: 10,
    frontal: !1,
  };
  function a(o = r.distance, d = r.frontal) {
    Object.assign(r, {
      distance: o,
      frontal: d,
    });
    const p = d ? new C(0.16, 0.22, 1) : new C(0.42, 0.3, 0.86);
    (t.position.copy(p.normalize().multiplyScalar(o)),
      n.target.set(0, 0, 0),
      n.update());
  }
  function i(o, d) {
    const p = Math.tan(((t.fov / 2) * Math.PI) / 180);
    return Math.max(d / p, o / (p * t.aspect)) * 1.12;
  }
  return (
    a(),
    {
      ...e,
      resetView: a,
      fitDistance: i,
      setFloor() {},
    }
  );
}
class ae {
  constructor(e, t = {}) {
    ((this.group = new Pe()),
      (this.options = {
        style: "ball",
        lone: !0,
        orbitals: !1,
        polyhedron: !1,
        dipole: !1,
        angles: [],
        ...t,
      }),
      (this.labels = []),
      this.build(e));
  }
  build(e) {
    this.structure = e;
    const t = this.options,
      n = this.group;
    (this.disposeGeometries(), n.clear(), (this.labels = []));
    const r = t.style === "fill",
      a = e.atoms.map((o) => Y(o.pos));
    if (
      (e.atoms.forEach((o, d) => {
        const p = new V(P.sphere, Ee(o.el));
        (p.position.copy(a[d]),
          p.scale.setScalar(r ? ke[o.el] * 0.78 : U(o.el)),
          n.add(p),
          this.labels.push({
            kind: "atom",
            text: o.el,
            pos: a[d],
            radius: r ? ke[o.el] * 0.78 : U(o.el),
          }));
      }),
      !r)
    ) {
      e.bonds.forEach(([o, d, p]) => this.addBond(a, o, d, p, e));
      for (const o of e.rings || []) n.add(Zt(o.map((d) => a[d])));
    }
    const i = r ? 0 : U(e.atoms[0].el);
    if (t.lone && !r)
      for (const o of e.lonePairs) {
        const d = a[o.atom],
          p = Y(o.dir).normalize(),
          f = new V(P.lobe, gs);
        (f.position.copy(d).addScaledVector(p, i * 0.55),
          f.quaternion.setFromUnitVectors(new C(0, 1, 0), p),
          (f.renderOrder = 2),
          n.add(f));
        const w = new C()
          .crossVectors(
            p,
            Math.abs(p.y) < 0.9 ? new C(0, 1, 0) : new C(1, 0, 0),
          )
          .normalize();
        for (const m of [-1, 1]) {
          const x = new V(P.sphere, ws);
          (x.scale.setScalar(0.05),
            x.position
              .copy(f.position)
              .addScaledVector(p, 0.78)
              .addScaledVector(w, 0.09 * m),
            n.add(x));
        }
      }
    if (t.orbitals && !r) {
      const o = this.domainDirs(e);
      for (const d of o) {
        const p = new V(P.lobe, Ke);
        (p.quaternion.setFromUnitVectors(new C(0, 1, 0), d),
          p.scale.set(1.15, 1.25, 1.15),
          p.position.copy(a[0]),
          (p.renderOrder = 1));
        const f = new V(P.lobe, Ke);
        (f.quaternion.setFromUnitVectors(new C(0, 1, 0), d.clone().negate()),
          f.scale.setScalar(0.32),
          f.position.copy(a[0]),
          n.add(p, f));
      }
    }
    if (t.polyhedron && !r) {
      const o = this.domainDirs(e).map((d) => d.multiplyScalar(1.15).add(a[0]));
      if (o.length >= 4) {
        const d = new as(o);
        n.add(new V(d, Je), new rt(new lt(d, 1), Te));
      } else if (o.length === 3) {
        const d = new ue().setFromPoints(o);
        (d.setIndex([0, 1, 2]),
          n.add(new V(d, Je), new qt(new ue().setFromPoints(o), Te)));
      } else o.length === 2 && n.add(new Rt(new ue().setFromPoints(o), Te));
    }
    for (const [o, d, p] of t.angles) {
      const f = new C().subVectors(a[o], a[0]).normalize(),
        w = new C().subVectors(a[d], a[0]).normalize(),
        m = f.angleTo(w),
        x = r ? 0 : Math.max(0.5, i + 0.2);
      if (!x) continue;
      const v = new C().crossVectors(f, w);
      (v.lengthSq() < 1e-8 &&
        v.copy(
          new C().crossVectors(
            f,
            Math.abs(f.y) < 0.9 ? new C(0, 1, 0) : new C(1, 0, 0),
          ),
        ),
        v.normalize());
      const F = [];
      for (let j = 0; j <= 40; j++)
        F.push(
          f
            .clone()
            .applyAxisAngle(v, (m * j) / 40)
            .multiplyScalar(x)
            .add(a[0]),
        );
      const S = new V(new Dt(new zt(F), 40, 0.009, 6), xs);
      n.add(S);
      const E = f
        .clone()
        .applyAxisAngle(v, m / 2)
        .multiplyScalar(x + 0.32)
        .add(a[0]);
      this.labels.push({
        kind: "angle",
        text: p ?? `${((m * 180) / Math.PI).toFixed(1)}°`,
        pos: E,
      });
    }
    if (t.dipole && !r) {
      const o = new C();
      for (const [d, p] of e.bonds) {
        const f = e.atoms[d].el,
          w = e.atoms[p].el,
          m = we[w] - we[f];
        if (Math.abs(m) < 0.05) continue;
        const x = new C().subVectors(a[p], a[d]).normalize(),
          v = m > 0 ? a[d] : a[p],
          F = m > 0 ? a[p] : a[d],
          S = new C()
            .crossVectors(
              x,
              Math.abs(x.y) < 0.9 ? new C(0, 1, 0) : new C(1, 0, 0),
            )
            .normalize(),
          E = v.clone().lerp(F, 0.2).addScaledVector(S, 0.36),
          j = v.clone().lerp(F, 0.8).addScaledVector(S, 0.36);
        (n.add(et(E, j, 0.026, Ze)), o.addScaledVector(x, m));
      }
      if (this.options.netDipole && o.length() > 0.05) {
        const d = this.options.netDipole,
          p = 0.8 + Math.min(d.magnitude, 1.6) * 0.6,
          f = Y(d.net).normalize();
        (n.add(
          et(
            a[0].clone().addScaledVector(f, -0.2),
            a[0].clone().addScaledVector(f, p + i),
            0.05,
            Ze,
          ),
        ),
          this.labels.push({
            kind: "dipole",
            text: "μ",
            pos: a[0].clone().addScaledVector(f, p + i + 0.35),
          }));
      }
    }
  }
  addBond(e, t, n, r, a) {
    const i = e[t],
      o = e[n],
      d = new C().subVectors(o, i).normalize();
    let p = null;
    for (const [F, S] of a.bonds) {
      const E =
        F === t && S !== n
          ? S
          : S === t && F !== n
            ? F
            : F === n && S !== t
              ? S
              : S === n && F !== t
                ? F
                : -1;
      if (E < 0) continue;
      const j = new C().subVectors(e[E], i).cross(d);
      if (j.lengthSq() > 1e-4) {
        p = new C().crossVectors(j.normalize(), d).normalize();
        break;
      }
    }
    p ||
      (p = new C()
        .crossVectors(d, Math.abs(d.y) < 0.9 ? new C(0, 1, 0) : new C(0, 0, 1))
        .normalize());
    const f = a.atoms[t].el,
      w = a.atoms[n].el;
    if (r === 1) {
      const F = es(U(f), U(w), i.distanceTo(o), je),
        S = new Gt().setFromUnitVectors(new C(0, 1, 0), d);
      for (const [E, j] of [
        [F.a, f],
        [F.b, w],
      ]) {
        const B = new V(E, Ee(j));
        (B.position.copy(i),
          B.quaternion.copy(S),
          (B.userData.sharedGeometry = !0),
          this.group.add(B));
      }
      return;
    }
    const m = r === 2 ? [-0.13, 0.13] : [-0.17, 0, 0.17],
      x = r === 2 ? je * 0.62 : je * 0.52,
      v = i.clone().lerp(o, 0.5);
    for (const F of m) {
      const S = p.clone().multiplyScalar(F);
      for (const [E, j, B] of [
        [i, v, f],
        [v, o, w],
      ]) {
        const W = new V(P.cylinder, Ee(B));
        (fe(W, E.clone().add(S), j.clone().add(S), x), this.group.add(W));
      }
    }
  }
  domainDirs(e) {
    const t = e.bonds
        .filter(([r, a]) => r === 0 || a === 0)
        .map(([r, a]) =>
          new C()
            .subVectors(Y(e.atoms[r === 0 ? a : r].pos), Y(e.atoms[0].pos))
            .normalize(),
        ),
      n = e.lonePairs
        .filter((r) => r.atom === 0)
        .map((r) => Y(r.dir).normalize());
    return [...t, ...n];
  }
  setOptions(e) {
    (Object.assign(this.options, e), this.build(this.structure));
  }
  extent() {
    return Math.max(
      ...this.structure.atoms.map(
        (e) =>
          G.len(e.pos) +
          (this.options.style === "fill" ? ke[e.el] * 0.78 : U(e.el)),
      ),
      1.4,
    );
  }
  disposeGeometries() {
    this.group.traverse((e) => {
      e.geometry &&
        !e.userData.sharedGeometry &&
        !Object.values(P).includes(e.geometry) &&
        e.geometry.dispose();
    });
  }
  dispose() {
    (this.disposeGeometries(), this.group.removeFromParent());
  }
}
const R = [
    {
      id: "sandbox",
      title: translate("价层电子对互斥"),
      sub: "VSEPR",
      mode: "sandbox",
      view: {
        lone: !0,
        angles: !0,
        labels: !1,
        dipole: !1,
        polyhedron: !1,
        orbitals: !1,
      },
      body: translate(
        "<p>中心原子周围的<b>价层电子对</b>（成键电子对与孤对电子）带负电，彼此排斥，会尽可能<b>远离</b>。</p><p>左边每个电子域都在球面上受到其他电子域的推力。增减电子对，或点击<b>打乱</b>，看它们自己弹开，找到最稳定的排布。</p><p>孤对电子只受一个原子核吸引，离核更近、更“胖”，所以排斥也更强。</p>",
      ),
    },
    {
      id: "domains",
      title: translate("电子对构型与分子构型"),
      sub: "Electron vs. molecular geometry",
      mode: "single",
      picks: ["ch4", "nh3", "h2o"],
      view: {
        lone: !0,
        angles: !0,
        labels: !0,
        dipole: !1,
        polyhedron: !0,
        orbitals: !1,
      },
      body: translate(
        "<p>CH₄、NH₃、H₂O 的中心原子都有 <b>4 对</b>价层电子，电子对构型都是<b>正四面体</b>（绿色多面体）。</p><p>但分子构型只看<b>原子</b>的位置：孤对电子占据了顶点却“看不见”，于是 NH₃ 是三角锥形，H₂O 是 V 形。</p>",
      ),
    },
    {
      id: "angles",
      title: translate("键角比较"),
      sub: "Bond angles",
      mode: "row",
      picks: ["ch4", "nh3", "h2o"],
      view: {
        lone: !0,
        angles: !0,
        labels: !1,
        dipole: !1,
        polyhedron: !1,
        orbitals: !1,
      },
      body: translate(
        '<p>排斥强弱：<b>孤对–孤对 &gt; 孤对–成键 &gt; 成键–成键</b>。</p><p>孤对电子越多，成键电子对被挤得越近，键角越小：</p><p class="eq">CH₄ 109.5° &gt; NH₃ 107° &gt; H₂O 104.5°</p><p>图中弧线标注的是<b>实测键角</b>；分子形状由斥力模型计算，趋势与实验一致。</p>',
      ),
    },
    {
      id: "hybrid",
      title: translate("杂化轨道"),
      sub: "Hybridization",
      mode: "single",
      picks: ["becl2", "bf3", "ch4", "c2h2", "c2h4", "c6h6", "pcl5", "sf6"],
      view: {
        lone: !0,
        angles: !0,
        labels: !1,
        dipole: !1,
        polyhedron: !1,
        orbitals: !0,
      },
      body: translate(
        "<p>中心原子用能量相近的原子轨道“混合”出数目相同、能量相等的<b>杂化轨道</b>，每个杂化轨道容纳一个电子域。</p><p>杂化轨道数 = 价层电子对数：2 → sp，3 → sp²，4 → sp³，5 → sp³d，6 → sp³d²。</p><p>乙烯、乙炔、苯中未参与杂化的 p 轨道形成 π 键。</p>",
      ),
    },
    {
      id: "polarity",
      title: translate("分子极性"),
      sub: "Polarity",
      mode: "single",
      picks: ["co2", "so2", "bf3", "nh3", "ccl4", "chcl3", "h2o", "hcn"],
      view: {
        lone: !1,
        angles: !1,
        labels: !0,
        dipole: !0,
        polyhedron: !1,
        orbitals: !1,
      },
      body: translate(
        "<p>每个极性键都有一个<b>键偶极</b>（细箭头，指向电负性大的一端）。</p><p>把它们按矢量相加：合偶极为零的是<b>非极性分子</b>，不为零的是<b>极性分子</b>（粗箭头 μ）。</p><p>同样是三个原子：CO₂ 直线形，偶极抵消；SO₂ V 形，偶极不抵消。</p>",
      ),
    },
    {
      id: "expanded",
      title: translate("扩展八隅体"),
      sub: "Expanded octets",
      mode: "single",
      picks: ["pcl5", "sf4", "clf3", "xef2", "sf6", "brf5", "xef4", "if7"],
      view: {
        lone: !0,
        angles: !0,
        labels: !0,
        dipole: !1,
        polyhedron: !0,
        orbitals: !1,
      },
      body: translate(
        "<p>第三周期及以后的元素可以有 5、6 甚至 7 个电子域。</p><p>三角双锥中<b>赤道位</b>只有两个 90° 邻居，<b>轴向位</b>有三个，所以孤对电子总是先占赤道位：SF₄ 跷跷板形、ClF₃ T 形、XeF₂ 直线形。</p><p>正八面体中两对孤对电子取<b>反式</b>，XeF₄ 是平面正方形。</p>",
      ),
    },
    {
      id: "chiral",
      title: translate("手性分子"),
      sub: "Chirality",
      mode: "mirror",
      picks: ["chfclbr", "lactic"],
      view: {
        lone: !1,
        angles: !1,
        labels: !0,
        dipole: !1,
        polyhedron: !1,
        orbitals: !1,
      },
      body: translate(
        "<p>碳原子连着四个<b>互不相同</b>的原子或基团时，分子与它的镜像就像左右手，<b>无论怎样旋转都不能重合</b>。</p><p>点击<b>尝试重合</b>，把镜像分子转过去叠在原分子上，看看哪些原子对不上。</p>",
      ),
    },
    {
      id: "library",
      title: translate("分子库"),
      sub: "Library",
      mode: "single",
      picks: null,
      view: {
        lone: !0,
        angles: !0,
        labels: !0,
        dipole: !1,
        polyhedron: !1,
        orbitals: !1,
      },
      body: translate("<p>按 VSEPR 类型浏览全部分子。拖动旋转，滚轮缩放。</p>"),
    },
  ],
  vs = {
    linear: translate("直线形"),
    "trigonal-planar": translate("平面三角形"),
    bent: translate("V 形"),
    tetrahedral: translate("正四面体形"),
    "trigonal-pyramidal": translate("三角锥形"),
    "trigonal-bipyramidal": translate("三角双锥形"),
    seesaw: translate("跷跷板形"),
    "t-shaped": translate("T 形"),
    octahedral: translate("正八面体形"),
    "square-pyramidal": translate("四方锥形"),
    "square-planar": translate("平面正方形"),
    "pentagonal-bipyramidal": translate("五角双锥形"),
  },
  K = (s) => vs[s] || s,
  Cs = {
    sp: "sp",
    sp2: "sp²",
    sp3: "sp³",
    sp3d: "sp³d",
    sp3d2: "sp³d²",
    sp3d3: "sp³d³",
  },
  Ms = (s) => Cs[s] || s,
  k = (s, e, t, n, r, a, i = {}) => ({
    id: s,
    formula: e,
    name: t,
    center: n,
    ligands: r,
    lone: a,
    kind: "central",
    ...i,
  }),
  Fs = [
    k("co2", "CO₂", translate("二氧化碳"), "C", ["O", "O"], 0, {
      orders: [2, 2],
      measured: [[180, "O–C–O"]],
      note: translate(
        "两个 C=O 键偶极大小相等、方向相反，相互抵消，所以 CO₂ 是非极性分子。",
      ),
    }),
    k("becl2", "BeCl₂", translate("氯化铍（气态）"), "Be", ["Cl", "Cl"], 0, {
      measured: [[180, "Cl–Be–Cl"]],
      note: translate("Be 只有 2 对价层电子，相距最远的排布是直线。"),
    }),
    k("hcn", "HCN", translate("氢氰酸"), "C", ["H", "N"], 0, {
      orders: [1, 3],
      measured: [[180, "H–C–N"]],
      note: translate(
        "三键在 VSEPR 中只算一个电子域，因此 C 周围只有 2 个电子域。",
      ),
    }),
    k("bf3", "BF₃", translate("三氟化硼"), "B", ["F", "F", "F"], 0, {
      measured: [[120, "F–B–F"]],
      note: translate("B 只有 3 对价层电子，三个 F 在同一平面上互成 120°。"),
    }),
    k("ch2o", "CH₂O", translate("甲醛"), "C", ["O", "H", "H"], 0, {
      orders: [2, 1, 1],
      measured: [
        [116.5, "H–C–H"],
        [121.8, "H–C=O"],
      ],
      note: translate(
        "双键电子密度更大，把两个 C–H 键挤得更近，H–C–H 只有 116.5°。",
      ),
    }),
    k("so2", "SO₂", translate("二氧化硫"), "S", ["O", "O"], 1, {
      orders: [2, 2],
      measured: [[119.5, "O–S–O"]],
      note: translate("S 上有一对孤对电子，分子呈 V 形，键偶极不能抵消。"),
    }),
    k("o3", "O₃", translate("臭氧"), "O", ["O", "O"], 1, {
      orders: [1, 2],
      measured: [[116.8, "O–O–O"]],
      polar: !0,
      note: translate(
        "三个原子都是氧，但中心 O 与端位 O 的电子环境不同，臭氧有微弱极性。",
      ),
    }),
    k("ch4", "CH₄", translate("甲烷"), "C", ["H", "H", "H", "H"], 0, {
      measured: [[109.5, "H–C–H"]],
      note: translate("4 对成键电子指向正四面体的四个顶点，键角 109°28′。"),
    }),
    k("nh4", "NH₄⁺", translate("铵根离子"), "N", ["H", "H", "H", "H"], 0, {
      charge: "+",
      measured: [[109.5, "H–N–H"]],
      note: translate("NH₃ 的孤对电子与 H⁺ 形成配位键，四个 N–H 完全等同。"),
    }),
    k("ccl4", "CCl₄", translate("四氯化碳"), "C", ["Cl", "Cl", "Cl", "Cl"], 0, {
      measured: [[109.5, "Cl–C–Cl"]],
      note: translate("C–Cl 键有极性，但正四面体对称使合偶极为零。"),
    }),
    k(
      "chcl3",
      "CHCl₃",
      translate("三氯甲烷"),
      "C",
      ["H", "Cl", "Cl", "Cl"],
      0,
      {
        measured: [[111.3, "Cl–C–Cl"]],
        note: translate(
          "把 CCl₄ 的一个 Cl 换成 H，对称性被破坏，分子变为极性。",
        ),
      },
    ),
    k("nh3", "NH₃", translate("氨"), "N", ["H", "H", "H"], 1, {
      measured: [[107, "H–N–H"]],
      note: translate(
        "一对孤对电子占据四面体的一个顶点，排斥更强，把键角压到 107°。",
      ),
    }),
    k("h2o", "H₂O", translate("水"), "O", ["H", "H"], 2, {
      measured: [[104.5, "H–O–H"]],
      note: translate("两对孤对电子进一步挤压成键电子对，键角只有 104.5°。"),
    }),
    k(
      "pcl5",
      "PCl₅",
      translate("五氯化磷（气态）"),
      "P",
      ["Cl", "Cl", "Cl", "Cl", "Cl"],
      0,
      {
        measured: [
          [90, "Clax–P–Cleq"],
          [120, "Cleq–P–Cleq"],
        ],
        note: translate(
          "轴向与赤道位不等价：轴向 P–Cl 键（214 pm）比赤道位（202 pm）更长。",
        ),
      },
    ),
    k("sf4", "SF₄", translate("四氟化硫"), "S", ["F", "F", "F", "F"], 1, {
      measured: [
        [101.6, "Feq–S–Feq"],
        [173.1, "Fax–S–Fax"],
      ],
      note: translate("孤对电子占赤道位，那里只有两个 90° 邻居，排斥最小。"),
    }),
    k("clf3", "ClF₃", translate("三氟化氯"), "Cl", ["F", "F", "F"], 2, {
      measured: [[87.5, "Fax–Cl–Feq"]],
      note: translate("两对孤对电子都在赤道位，剩下三个 F 呈 T 形。"),
    }),
    k("xef2", "XeF₂", translate("二氟化氙"), "Xe", ["F", "F"], 3, {
      measured: [[180, "F–Xe–F"]],
      note: translate(
        "三对孤对电子占满赤道平面，两个 F 只能在轴向，分子是直线形。",
      ),
    }),
    k("i3", "I₃⁻", translate("三碘离子"), "I", ["I", "I"], 3, {
      charge: "−",
      measured: [[180, "I–I–I"]],
      note: translate("与 XeF₂ 同为 AX₂E₃，直线形。"),
    }),
    k(
      "sf6",
      "SF₆",
      translate("六氟化硫"),
      "S",
      ["F", "F", "F", "F", "F", "F"],
      0,
      {
        measured: [[90, "F–S–F"]],
        note: translate("6 对成键电子指向正八面体的六个顶点。"),
      },
    ),
    k(
      "brf5",
      "BrF₅",
      translate("五氟化溴"),
      "Br",
      ["F", "F", "F", "F", "F"],
      1,
      {
        measured: [[84.8, "Fax–Br–Fbas"]],
        note: translate("孤对电子把四个底面 F 推向另一侧，四方锥略呈“伞”形。"),
      },
    ),
    k("xef4", "XeF₄", translate("四氟化氙"), "Xe", ["F", "F", "F", "F"], 2, {
      measured: [[90, "F–Xe–F"]],
      note: translate("两对孤对电子取反式位置彼此最远，四个 F 共平面。"),
    }),
    k(
      "if7",
      "IF₇",
      translate("七氟化碘"),
      "I",
      ["F", "F", "F", "F", "F", "F", "F"],
      0,
      {
        measured: [
          [72, "Feq–I–Feq"],
          [90, "Fax–I–Feq"],
        ],
        note: translate(
          "7 个电子域：赤道面上 5 个 F 互成 72°，两个轴向 F 在上下。",
        ),
      },
    ),
    k(
      "chfclbr",
      "CHFClBr",
      translate("一氟一氯一溴甲烷"),
      "C",
      ["H", "F", "Cl", "Br"],
      0,
      {
        measured: [[109.5, "X–C–X"]],
        chiral: !0,
        note: translate(
          "碳连着四个不同的原子，它与镜像无法重合，是最简单的手性分子之一。",
        ),
      },
    ),
  ],
  { add: z, scale: O, norm: me, cross: tt } = G;
function $s(s) {
  const e = Math.abs(s[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0],
    t = me(tt(s, e));
  return [t, tt(s, t)];
}
function J(s, e, t) {
  const [n, r] = $s(me(s)),
    a = (e * Math.PI) / 180,
    i = (t * Math.PI) / 180;
  return me(
    z(
      O(me(s), Math.cos(a)),
      z(O(n, Math.sin(a) * Math.cos(i)), O(r, Math.sin(a) * Math.sin(i))),
    ),
  );
}
function Ss() {
  return {
    atoms: [
      {
        el: "C",
        pos: [0.665, 0, 0],
      },
      {
        el: "C",
        pos: [-0.665, 0, 0],
      },
      {
        el: "H",
        pos: [1.23, 0.929, 0],
      },
      {
        el: "H",
        pos: [1.23, -0.929, 0],
      },
      {
        el: "H",
        pos: [-1.23, 0.929, 0],
      },
      {
        el: "H",
        pos: [-1.23, -0.929, 0],
      },
    ],
    bonds: [
      [0, 1, 2],
      [0, 2, 1],
      [0, 3, 1],
      [1, 4, 1],
      [1, 5, 1],
    ],
    lonePairs: [],
  };
}
function Hs() {
  return {
    atoms: [
      {
        el: "C",
        pos: [0.601, 0, 0],
      },
      {
        el: "C",
        pos: [-0.601, 0, 0],
      },
      {
        el: "H",
        pos: [1.664, 0, 0],
      },
      {
        el: "H",
        pos: [-1.664, 0, 0],
      },
    ],
    bonds: [
      [0, 1, 3],
      [0, 2, 1],
      [1, 3, 1],
    ],
    lonePairs: [],
  };
}
function ks() {
  const s = [],
    e = [];
  for (let t = 0; t < 6; t++) {
    const n = (t * Math.PI) / 3;
    s.push({
      el: "C",
      pos: [1.397 * Math.cos(n), 0, 1.397 * Math.sin(n)],
    });
  }
  for (let t = 0; t < 6; t++) {
    const n = (t * Math.PI) / 3;
    (s.push({
      el: "H",
      pos: [2.481 * Math.cos(n), 0, 2.481 * Math.sin(n)],
    }),
      e.push([t, (t + 1) % 6, 1], [t, t + 6, 1]));
  }
  return {
    atoms: s,
    bonds: e,
    lonePairs: [],
    rings: [[0, 1, 2, 3, 4, 5]],
  };
}
function js() {
  const s = te(4, 0).map((p) => p.dir),
    e = [
      {
        el: "C",
        pos: [0, 0, 0],
      },
    ],
    t = [],
    n = (p, f, w, m = 1) => (
      e.push({
        el: p,
        pos: f,
      }),
      t.push([w, e.length - 1, m]),
      e.length - 1
    );
  n("H", O(s[0], 1.09), 0);
  const r = n("O", O(s[1], 1.43), 0);
  n("H", z(e[r].pos, O(J(s[1], 70.5, 0), 0.96)), r);
  const a = n("C", O(s[2], 1.53), 0);
  for (const p of [0, 120, 240])
    n("H", z(e[a].pos, O(J(s[2], 70.5, p), 1.09)), a);
  const i = n("C", O(s[3], 1.52), 0);
  n("O", z(e[i].pos, O(J(s[3], 60, 90), 1.21)), i, 2);
  const o = J(s[3], 60, 270),
    d = n("O", z(e[i].pos, O(o, 1.34)), i);
  return (
    n("H", z(e[d].pos, O(J(o, 70, 90), 0.97)), d),
    {
      atoms: e,
      bonds: t,
      lonePairs: [],
    }
  );
}
const re = (s, e, t, n, r) => ({
    id: s,
    formula: e,
    name: t,
    kind: "multi",
    build: n,
    ...r,
  }),
  Es = [
    re("c2h4", "C₂H₄", translate("乙烯"), Ss, {
      site: [3, 0],
      hybrid: "sp2",
      polar: !1,
      measured: [
        [121.3, "H–C=C"],
        [117.4, "H–C–H"],
      ],
      note: translate(
        "每个 C 为 sp² 杂化，未参与杂化的 p 轨道肩并肩重叠形成 π 键，六个原子共平面。",
      ),
    }),
    re("c2h2", "C₂H₂", translate("乙炔"), Hs, {
      site: [2, 0],
      hybrid: "sp",
      polar: !1,
      measured: [[180, "H–C≡C"]],
      note: translate(
        "每个 C 为 sp 杂化，两套 p 轨道形成两个互相垂直的 π 键，分子是直线形。",
      ),
    }),
    re("c6h6", "C₆H₆", translate("苯"), ks, {
      site: [3, 0],
      hybrid: "sp2",
      polar: !1,
      measured: [[120, "C–C–C"]],
      note: translate(
        "六个 C 均为 sp² 杂化，六个 p 轨道形成环状离域大 π 键，六条 C–C 键完全相同。",
      ),
    }),
    re("lactic", "C₃H₆O₃", translate("乳酸"), js, {
      site: [4, 0],
      hybrid: "sp3",
      polar: !0,
      chiral: !0,
      measured: [[109.5, "X–C*–X"]],
      note: translate(
        "中间的碳连着 H、OH、CH₃、COOH 四个不同基团，是手性碳；L-乳酸与 D-乳酸互为镜像。",
      ),
    }),
  ],
  Le = [...Fs, ...Es],
  D = (s) => Le.find((e) => e.id === s),
  Ve = new Map();
function Ts(s, e) {
  const t = `${s}${e}`;
  return (Ve.has(t) || Ve.set(t, xt(te(s, e))), Ve.get(t));
}
function st(s) {
  return s.kind === "multi" ? s.build() : vt(s, Ts(s.ligands.length, s.lone));
}
const Vs = [
    "Cl",
    "Br",
    "Xe",
    "Be",
    "H",
    "B",
    "C",
    "N",
    "O",
    "F",
    "P",
    "S",
    "I",
  ],
  nt = (s) =>
    s.startsWith("X") && !s.startsWith("Xe")
      ? "*"
      : Vs.find((e) => s.startsWith(e));
function Os(s, e) {
  const t = e.atoms.map((o) => o.pos),
    n = e.bonds
      .filter(([o, d]) => o === 0 || d === 0)
      .map(([o, d]) => (o === 0 ? d : o)),
    r = [];
  for (let o = 0; o < n.length; o++)
    for (let d = o + 1; d < n.length; d++) {
      const p = n[o],
        f = n[d];
      r.push({
        i: p,
        j: f,
        angle: yt(G.sub(t[p], t[0]), G.sub(t[f], t[0])),
      });
    }
  const a = new Set(),
    i = [];
  for (const [o, d] of s.measured || []) {
    const p = d.split(/[–=≡]/),
      f = [nt(p[0]), nt(p[p.length - 1])],
      w = (x) => {
        const v = [e.atoms[x.i].el, e.atoms[x.j].el];
        return (
          f.every((F) => F === "*") ||
          (f.includes("*")
            ? v.includes(f.find((F) => F !== "*"))
            : (v[0] === f[0] && v[1] === f[1]) ||
              (v[0] === f[1] && v[1] === f[0]))
        );
      },
      m = r
        .filter((x) => !a.has(x) && w(x))
        .sort((x, v) => Math.abs(x.angle - o) - Math.abs(v.angle - o))[0];
    m && (a.add(m), i.push([m.i, m.j, `${o}°`]));
  }
  return i;
}
function le(s) {
  const [e, t] = s.kind === "multi" ? s.site : [s.ligands.length, s.lone],
    n = ft(e, t);
  let r = s.polar,
    a = null;
  if (s.kind === "central") {
    const i = te(e, t)
      .filter((o) => !o.lone)
      .map((o) => o.dir);
    ((a = fs(s.center, s.ligands, i)), r === void 0 && (r = a.polar));
  }
  return {
    ...n,
    hybrid: s.hybrid || n.hybrid,
    polar: r,
    dipole: a,
  };
}
const Ls = 220,
  Ps = 150,
  ce = 110,
  de = 75,
  Ns = 54,
  pe = 12;
function Bs(s, e) {
  const t = s === 2 ? 180 : -90,
    n = Array.from(
      {
        length: s,
      },
      (i, o) => t + (o * 360) / s,
    ),
    r = [],
    a = (i, o) => Math.min(Math.abs(i - o), s - Math.abs(i - o));
  for (; r.length < e;) {
    let i = 0,
      o = -1;
    for (let d = 0; d < s; d++) {
      if (r.includes(d)) continue;
      const p = r.length ? Math.min(...r.map((f) => a(f, d))) : d === 0 ? s : 0;
      p > o && ((o = p), (i = d));
    }
    r.push(i);
  }
  return {
    lone: r.map((i) => n[i]),
    bonds: n.filter((i, o) => !r.includes(o)),
  };
}
const ot = (s) => (s * Math.PI) / 180,
  be = (s, e, t, n) => [s + n * Math.cos(ot(t)), e + n * Math.sin(ot(t))],
  N = (s) => s.toFixed(1);
function it(s, e, t, n = 15) {
  const [r, a] = be(s, e, t, n),
    [i, o] = be(r, a, t + 90, 3.2),
    [d, p] = be(r, a, t - 90, 3.2);
  return `<circle cx="${N(i)}" cy="${N(o)}" r="1.9"/><circle cx="${N(d)}" cy="${N(p)}" r="1.9"/>`;
}
function Is(s, e, t, n, r) {
  const a = Math.hypot(t - s, n - e),
    i = (t - s) / a,
    o = (n - e) / a,
    d = s + i * pe,
    p = e + o * pe,
    f = t - i * pe,
    w = n - o * pe;
  return (r === 1 ? [0] : r === 2 ? [-2.6, 2.6] : [-4, 0, 4])
    .map(
      (x) =>
        `<line x1="${N(d - o * x)}" y1="${N(p + i * x)}" x2="${N(f - o * x)}" y2="${N(w + i * x)}"/>`,
    )
    .join("");
}
function As(s) {
  if (s.kind !== "central") return "";
  const e = s.ligands.length,
    t = Bs(e + s.lone, s.lone);
  let n = "",
    r = "",
    a = "";
  (s.ligands.forEach((o, d) => {
    const p = t.bonds[d],
      f = s.orders?.[d] || 1,
      [w, m] = be(ce, de, p, Ns);
    ((n += Is(ce, de, w, m, f)),
      (r += `<text x="${N(w)}" y="${N(m)}">${o}</text>`));
    const x = o === "H" ? 0 : 4 - f,
      v = p + 180;
    (x === 3 ? [-90, 0, 90] : x === 2 ? [-60, 60] : x === 1 ? [0] : []).forEach(
      (S) => (a += it(w, m, v + 180 + S)),
    );
  }),
    t.lone.forEach((o) => (a += it(ce, de, o))),
    (r += `<text x="${ce}" y="${de}">${s.center}</text>`));
  const i = s.charge
    ? `<path d="M22 14 h-8 v122 h8 M198 14 h8 v122 h-8" fill="none" stroke="currentColor" stroke-width="1.4"/><text x="214" y="16" class="ch">${s.charge}</text>`
    : "";
  return `<svg viewBox="0 0 ${Ls} ${Ps}" class="lewis" role="img" aria-label="${s.formula}">
<g stroke="currentColor" stroke-width="1.6" stroke-linecap="round">${n}</g>
<g fill="var(--lone, currentColor)">${a}</g>
<g fill="currentColor" text-anchor="middle" dominant-baseline="central" font-size="17" font-family="var(--serif)">${r}</g>${i}</svg>`;
}
function qs() {
  const s = (c) => document.querySelector(c),
    e = (c) =>
      c
        .replace(
          /[₀-₉]+/g,
          (l) =>
            `<sub>${[...l].map((h) => h.charCodeAt(0) - 8320).join("")}</sub>`,
        )
        .replace(/⁺/g, "<sup>+</sup>")
        .replace(/⁻/g, "<sup>−</sup>"),
    t = (c) => (c < 0.5 ? 4 * c * c * c : 1 - Math.pow(-2 * c + 2, 3) / 2),
    n = ys(s("#c3")),
    r = [
      ["lone", translate("孤对电子")],
      ["angles", translate("键角")],
      ["labels", translate("原子标签")],
      ["dipole", translate("键偶极")],
      ["polyhedron", translate("电子对构型")],
      ["orbitals", translate("杂化轨道")],
      ["spin", translate("自动旋转")],
    ],
    a = [
      [2, 0],
      [3, 0],
      [2, 1],
      [4, 0],
      [3, 1],
      [2, 2],
      [5, 0],
      [4, 1],
      [3, 2],
      [2, 3],
      [6, 0],
      [5, 1],
      [4, 2],
      [3, 3],
      [2, 4],
      [7, 0],
    ],
    i = {
      lesson: 0,
      pick: {},
      view: {
        ...R[0].view,
        spin: !1,
      },
      style: "ball",
      sb: null,
      mirrorT: 0,
      mirrorTarget: 0,
    };
  let o = [];
  const d = new Pe();
  {
    const c = new V(
      new Kt(6.5, 5.2),
      new pt({
        color: "#d6ebe2",
        roughness: 0.1,
        transparent: !0,
        opacity: 0.22,
        side: dt,
        depthWrite: !1,
      }),
    );
    c.rotation.y = Math.PI / 2;
    const l = new rt(
      new lt(c.geometry),
      new ct({
        color: "#0f9e63",
        transparent: !0,
        opacity: 0.5,
      }),
    );
    ((l.rotation.y = Math.PI / 2),
      d.add(c, l),
      (d.visible = !1),
      n.scene.add(d));
  }
  const p = () => R[i.lesson],
    f = (c) => (c.sub === c.title ? "" : c.sub),
    w = () => p().picks || Le.map((c) => c.id),
    m = () => i.pick[p().id] || w()[0];
  function x(c, l) {
    const h = le(c);
    return {
      style: i.style,
      lone: i.view.lone,
      orbitals: i.view.orbitals,
      polyhedron: i.view.polyhedron,
      dipole: i.view.dipole,
      netDipole: h.dipole,
      angles: i.view.angles ? Os(c, l) : [],
    };
  }
  function v() {
    (o.forEach((c) => c.view.dispose()), (o = []));
  }
  function F(c, l, h, b = !1) {
    (n.setFloor(h), n.resetView(n.fitDistance(c, l), b));
  }
  function S() {
    v();
    const c = p();
    if (
      ((d.visible = c.mode === "mirror"),
      (i.mirrorT = i.mirrorTarget = 0),
      c.mode === "sandbox")
    ) {
      (i.sb || E(4, 0), W(), F(2.6, 2.6, -2.3));
      return;
    }
    if (c.mode === "row") {
      c.picks.forEach((H, $) => {
        const T = D(H),
          Xe = st(T),
          Me = new ae(Xe, x(T, Xe));
        ((Me.group.position.x = ($ - (c.picks.length - 1) / 2) * 3.4),
          n.root.add(Me.group),
          o.push({
            view: Me,
            mol: T,
            caption: !0,
          }));
      });
      const M = Math.max(...o.map((H) => H.view.extent()));
      F((3.4 * (c.picks.length - 1)) / 2 + M, M + 0.5, -M - 0.5, !0);
      return;
    }
    const l = D(m()),
      h = st(l),
      b = new ae(h, x(l, h));
    (n.root.add(b.group),
      o.push({
        view: b,
        mol: l,
      }));
    let g = b.extent();
    if (c.mode === "mirror") {
      const M = {
          ...h,
          atoms: h.atoms.map((T) => ({
            ...T,
            pos: [-T.pos[0], T.pos[1], T.pos[2]],
          })),
          lonePairs: h.lonePairs.map((T) => ({
            ...T,
            dir: ms([T.dir])[0],
          })),
        },
        H = new ae(M, x(l, M)),
        $ = g + 0.9;
      ((b.group.position.x = -$),
        (H.group.position.x = $),
        n.root.add(H.group),
        o.push({
          view: H,
          mol: l,
          twin: !0,
          off: $,
        }),
        d.scale.setScalar(Math.max(1, g / 2)),
        F($ + g + 0.2, g + 0.5, -g - 0.5, !0));
      return;
    }
    F(g + 0.5, g + 0.5, -g - 0.5);
  }
  function E(c, l) {
    i.sb = {
      domains: He(te(c, l), Math.random, 1.2),
      phase: "relax",
      kicks: 0,
      wait: 0,
    };
  }
  const j = () => {
    const c = i.sb.domains.filter((l) => l.lone).length;
    return [i.sb.domains.length - c, c];
  };
  function B(c) {
    const l = c.map((M, H) => (M.lone ? -1 : H)).filter((M) => M >= 0),
      h = hs(c).sort((M, H) => M[2] - H[2]),
      b = h.some((M) => M[2] < 175),
      g = [];
    for (const [M, H, $] of h)
      (b && $ > 175) ||
        g.some((T) => Math.abs(T.ang - $) < 2.5) ||
        g.push({
          i: l[M],
          j: l[H],
          ang: $,
        });
    return g;
  }
  function W() {
    const [c, l] = j(),
      h = i.sb.domains,
      b = [...h.filter(($) => !$.lone), ...h.filter(($) => $.lone)],
      g = vt(
        {
          center: "A",
          ligands: Array(c).fill("X"),
          lone: l,
        },
        b,
      ),
      M = i.view.angles
        ? B(b).map(($) => [$.i + 1, $.j + 1, `${$.ang.toFixed(1)}°`])
        : [],
      H = {
        style: i.style,
        lone: i.view.lone,
        orbitals: i.view.orbitals,
        polyhedron: i.view.polyhedron,
        dipole: !1,
        angles: M,
      };
    if (o[0]) (Object.assign(o[0].view.options, H), o[0].view.build(g));
    else {
      const $ = new ae(g, H);
      (n.root.add($.group),
        o.push({
          view: $,
          sandbox: !0,
        }));
    }
    i.sb.ordered = b;
  }
  function Ct(c) {
    const l = i.sb;
    if (l.phase === "stable") return !1;
    if (l.phase === "kick")
      return (
        (l.wait -= c),
        l.wait > 0
          ? !1
          : ((l.domains = He(l.domains, Math.random, us(l.kicks++))),
            (l.phase = "relax"),
            !0)
      );
    const h = wt(l.domains, {
        steps: Math.max(1, Math.round(c * 360)),
        dt: 0.15,
        maxStep: 0.12,
      }),
      b = Math.max(...h.map((g, M) => G.len(G.sub(g.dir, l.domains[M].dir))));
    return (
      (l.domains = h),
      ps(l.domains, 5e-4)
        ? (l.phase = "stable")
        : b < 2e-5 && ((l.phase = "kick"), (l.wait = 0.7)),
      !0
    );
  }
  function Ae(c) {
    const [l, h] = j(),
      b = i.sb,
      g = () =>
        G.norm([Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]),
      M = (H) => {
        const $ = b.domains.map((T) => T.lone).lastIndexOf(H);
        $ >= 0 && b.domains.splice($, 1);
      };
    if (c === "bond+" && I(l + 1, h))
      b.domains.push({
        dir: g(),
        lone: !1,
      });
    else if (c === "bond-" && I(l - 1, h)) M(!1);
    else if (c === "lone+" && I(l, h + 1))
      b.domains.push({
        dir: g(),
        lone: !0,
      });
    else if (c === "lone-" && I(l, h - 1)) M(!0);
    else if (c === "shake") b.domains = He(b.domains, Math.random, 1.2);
    else return;
    ((b.phase = "relax"), (b.kicks = 0), se());
  }
  function se() {
    (v(), W(), ye());
  }
  const Mt = (c) =>
    c.measured.map(([l, h]) => `<em>${h}</em> ${l}°`).join("<br>");
  function xe(c) {
    const l = le(c),
      h = e(
        c.kind === "multi"
          ? translate("{0} · 以中心碳计", [l.notation])
          : l.notation,
      ),
      b = As(c);
    return `<div class="mcard">
      <div class="mh"><b>${e(c.formula)}</b><span>${c.name}</span><i class="pol ${l.polar ? "on" : ""}">${l.polar ? translate("极性") : translate("非极性")}</i></div>
      <div class="kv">
        <span>${translate("VSEPR 类型")}</span><b>${h}</b>
        <span>${translate("电子对构型")}</span><b>${K(l.electronGeometry)}</b>
        <span>${translate("分子构型")}</span><b>${K(l.molecularGeometry)}</b>
        <span>${translate("杂化方式")}</span><b>${Ms(l.hybrid)}</b>
        <span>${translate("实测键角")}</span><b class="ang">${Mt(c)}</b>
      </div>
      ${b ? `<figure class="lewis-box">${b}<figcaption>${translate("路易斯结构")}</figcaption></figure>` : ""}
      <p class="note">${c.note}</p>
    </div>`;
  }
  function Ft() {
    const [c, l] = j(),
      h = (b, g, M) =>
        `<button data-sb="${b}" ${g ? "" : "disabled"}>${M}</button>`;
    return `<div class="sb">
      <div class="ctr"><span><i class="dot bond"></i>${translate("成键电子对")}</span>${h("bond-", I(c - 1, l), "−")}<b>${c}</b>${h("bond+", I(c + 1, l), "+")}</div>
      <div class="ctr"><span><i class="dot lone"></i>${translate("孤对电子")}</span>${h("lone-", I(c, l - 1), "−")}<b>${l}</b>${h("lone+", I(c, l + 1), "+")}</div>
      <button class="act" data-sb="shake">${translate("打乱")}<kbd>Space</kbd></button>
      <div class="sub-h">${translate("快速选择")}</div>
      <div class="presets">${a.map(([b, g]) => `<button data-preset="${b},${g}" class="${b === c && g === l ? "on" : ""}">${e(Be(b, g))}</button>`).join("")}</div>
    </div>`;
  }
  function $t(c) {
    const l = new Map();
    for (const h of Le) {
      const b = le(h),
        g = h.kind === "multi" ? translate("多中心分子") : e(b.notation);
      (l.has(g) || l.set(g, []), l.get(g).push(h));
    }
    return `<div class="lib">${[...l].map(([h, b]) => `<div class="lg"><span>${h}</span><div>${b.map((g) => `<button data-pick="${g.id}" class="${g.id === c ? "on" : ""}">${e(g.formula)}</button>`).join("")}</div></div>`).join("")}</div>`;
  }
  function ye() {
    const c = p();
    let l = "";
    (c.mode === "sandbox"
      ? (l = Ft())
      : c.mode === "row"
        ? (l = `<div class="rowcards">${c.picks.map((h) => xe(D(h))).join("")}</div>`)
        : c.id === "library"
          ? (l = $t(m()) + xe(D(m())))
          : (l = xe(D(m()))),
      (s("#lesson").innerHTML =
        `<div class="lh"><em>${String(i.lesson + 1).padStart(2, "0")}</em><div><h2>${c.title}</h2><small>${f(c)}</small></div></div><div class="body">${c.body}</div>${l}`),
      qe());
  }
  function St() {
    const c = p(),
      l = s("#spec");
    if (c.mode === "sandbox" || c.mode === "row")
      return void (l.innerHTML = "");
    const h = D(m()),
      b = le(h),
      [g, M] = h.measured[0];
    l.innerHTML = [
      [translate("分子"), `${h.name}　${e(h.formula)}`],
      [translate("分子构型"), K(b.molecularGeometry)],
      [`${M} ${translate("键角")}`, `${g}°`],
    ]
      .map(([H, $]) => `<div><span>${H}</span><b>${$}</b></div>`)
      .join("");
  }
  function qe() {
    St();
    const c = p(),
      l = s("#stageBar");
    (c.mode === "single" && c.picks
      ? (l.innerHTML = c.picks
          .map(
            (h) =>
              `<button data-pick="${h}" class="${h === m() ? "on" : ""}">${e(D(h).formula)}</button>`,
          )
          .join(""))
      : c.mode === "mirror"
        ? (l.innerHTML =
            c.picks
              .map(
                (h) =>
                  `<button data-pick="${h}" class="${h === m() ? "on" : ""}">${D(h).name}</button>`,
              )
              .join("") +
            `<i class="sep"></i><button class="act" data-mirror="1">${i.mirrorTarget ? translate("分开") : translate("尝试重合")}</button>`)
        : (l.innerHTML = ""),
      (l.hidden = !l.innerHTML));
  }
  function ve() {
    ((s("#tgs").innerHTML = r
      .map(
        ([c, l]) =>
          `<button class="tg ${i.view[c] ? "on" : ""}" data-tg="${c}"><i></i>${l}</button>`,
      )
      .join("")),
      (s("#style").innerHTML = [
        ["ball", translate("球棍模型")],
        ["fill", translate("空间填充")],
      ]
        .map(
          ([c, l]) =>
            `<button data-style="${c}" class="${i.style === c ? "on" : ""}">${l}</button>`,
        )
        .join("")));
  }
  let Re = "";
  function De() {
    const c = p();
    let l = "";
    if (c.mode === "sandbox") {
      const [h, b] = j(),
        g = ft(h, b),
        M = B(i.sb.domains)
          .map(($) => `${$.ang.toFixed(1)}°`)
          .join(" · "),
        H = {
          relax: translate("电子对相互排斥，正在寻找平衡…"),
          kick: translate("困在局部极小，施加热扰动"),
          stable: translate("已达到能量最低的排布"),
        }[i.sb.phase];
      l = `<div class="hh">${e(g.notation)}</div><div class="kv"><span>${translate("电子对构型")}</span><b>${K(g.electronGeometry)}</b><span>${translate("分子构型")}</span><b>${K(g.molecularGeometry)}</b><span>${translate("模型键角")}</span><b>${M}</b></div><div class="status ${i.sb.phase}"><i></i>${H}</div>`;
    } else
      c.mode === "mirror" &&
        i.mirrorTarget &&
        i.mirrorT > 0.98 &&
        (l = `<div class="status kick"><i></i>${translate("旋转后总有两个基团位置互换——无法重合")}</div>`);
    l !== Re &&
      ((Re = l),
      (s("#hud").innerHTML = l),
      (s("#hud").hidden = !l),
      (s("#spec").hidden = !!l));
  }
  s("#hud").hidden = !0;
  const Ht = s("#labels"),
    Ce = [],
    kt = new C();
  function jt() {
    const c = [];
    for (const l of o) {
      l.view.group.updateMatrixWorld();
      for (const h of l.view.labels)
        (h.kind === "atom" && !i.view.labels) ||
          (h.kind === "angle" && !i.view.angles) ||
          c.push([
            h.kind,
            h.text,
            kt.copy(h.pos).applyMatrix4(l.view.group.matrixWorld).clone(),
          ]);
      if (l.caption) {
        const h = new C(0, -l.view.extent() - 0.15, 0).applyMatrix4(
          l.view.group.matrixWorld,
        );
        c.push([
          "caption",
          `${e(l.mol.formula)}<small>${l.mol.measured[0][1]} ${l.mol.measured[0][0]}°</small>`,
          h,
        ]);
      }
    }
    for (; Ce.length < c.length;) {
      const l = document.createElement("div");
      (Ht.appendChild(l), Ce.push(l));
    }
    Ce.forEach((l, h) => {
      const b = c[h];
      if (!b) return void (l.style.display = "none");
      const [g, M, H] = b,
        $ = n.project(H);
      ((l.style.display = $.visible ? "" : "none"),
        l.dataset.k !== g && ((l.className = `lb ${g}`), (l.dataset.k = g)),
        l.dataset.t !== M && ((l.innerHTML = M), (l.dataset.t = M)),
        (l.style.transform = `translate(${$.x.toFixed(1)}px,${$.y.toFixed(1)}px) translate(-50%,-50%)`));
    });
  }
  function _(c) {
    i.lesson = (c + R.length) % R.length;
    const l = p();
    ((i.view = {
      ...l.view,
      spin: i.view.spin,
    }),
      history.replaceState(null, "", `#${i.lesson + 1}`),
      document.querySelectorAll("#nav .ni").forEach((b, g) => {
        (b.classList.toggle("on", g === i.lesson),
          g === i.lesson && b.classList.add("seen"));
      }),
      document.querySelectorAll("#prog i").forEach((b, g) => {
        (b.classList.toggle("on", g < i.lesson),
          b.classList.toggle("cur", g === i.lesson));
      }));
    const h = s("#chapter");
    ((h.querySelector(".n").textContent =
      `${String(i.lesson + 1).padStart(2, "0")} / ${String(R.length).padStart(2, "0")}`),
      (h.querySelector("h1").textContent = l.title),
      (h.querySelector("p").textContent = f(l)),
      h.classList.remove("in"),
      h.offsetWidth,
      h.classList.add("in"),
      S(),
      ye(),
      ve(),
      De(),
      (s("#lesson").scrollTop = 0));
  }
  ((s("#nav").innerHTML =
    `<div class="navh">${translate("章节")}</div>` +
    R.map(
      (c, l) =>
        `<button class="ni" data-go="${l}"><em>${String(l + 1).padStart(2, "0")}</em><b>${c.title}</b><small>${f(c)}</small></button>`,
    ).join("") +
    `<div class="navf">${translate("<kbd>←</kbd> <kbd>→</kbd> 切换章节<br><kbd>R</kbd> 重置视角 <kbd>Space</kbd> 打乱")}</div>`),
    (s("#prog").innerHTML = R.map(() => "<i></i>").join("")),
    s("#nav").addEventListener("click", (c) => {
      const l = c.target.closest("[data-go]");
      l && _(+l.dataset.go);
    }));
  function Et(c) {
    ((i.pick[p().id] = c), S(), ye());
  }
  document.addEventListener("click", (c) => {
    const l = c.target.closest(
      "[data-pick],[data-sb],[data-preset],[data-mirror],[data-tg],[data-style]",
    );
    if (!l) return;
    const h = l.dataset;
    if (h.pick) Et(h.pick);
    else if (h.sb) Ae(h.sb);
    else if (h.preset) {
      const [b, g] = h.preset.split(",").map(Number);
      (E(b, g), se());
    } else
      h.mirror
        ? ((i.mirrorTarget = i.mirrorTarget ? 0 : 1), qe())
        : h.tg
          ? ((i.view[h.tg] = !i.view[h.tg]),
            h.tg !== "spin" && h.tg !== "labels" && Tt(),
            ve())
          : h.style &&
            ((i.style = h.style), p().mode === "sandbox" ? se() : S(), ve());
  });
  function Tt() {
    if (p().mode === "sandbox") return se();
    const c = o.map((h) => h.view.group.position.clone()),
      l = n.camera.position.clone();
    (S(),
      o.forEach((h, b) => c[b] && h.view.group.position.copy(c[b])),
      n.camera.position.copy(l));
  }
  ((s("#bPrev").onclick = () => _(i.lesson - 1)),
    (s("#bNext").onclick = () => _(i.lesson + 1)),
    (s("#bReset").onclick = () => n.resetView()),
    (s("#bFull").onclick = () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen?.()),
    window.addEventListener("keydown", (c) => {
      c.target.closest?.("input,textarea") ||
        (c.key === "ArrowLeft"
          ? _(i.lesson - 1)
          : c.key === "ArrowRight"
            ? _(i.lesson + 1)
            : c.key === "r" || c.key === "R"
              ? n.resetView()
              : c.key === "f" || c.key === "F"
                ? s("#bFull").click()
                : c.key === " " &&
                  p().mode === "sandbox" &&
                  (c.preventDefault(), Ae("shake")));
    }),
    new ResizeObserver(() => n.resize()).observe(s("#stage")));
  let ze = performance.now();
  function Ge(c) {
    const l = Math.min(0.1, (c - ze) / 1e3);
    ze = c;
    const h = p();
    if ((h.mode === "sandbox" && Ct(l) && W(), h.mode === "mirror")) {
      const b = i.mirrorTarget;
      i.mirrorT +=
        Math.sign(b - i.mirrorT) * Math.min(Math.abs(b - i.mirrorT), l / 1.6);
      const g = o.find((M) => M.twin);
      if (g) {
        const M = t(i.mirrorT);
        ((g.view.group.position.x = g.off * (1 - 2 * M)),
          (g.view.group.rotation.y = Math.PI * M),
          (d.visible = M < 0.5));
      }
    }
    ((n.controls.autoRotate = !!i.view.spin),
      n.render(),
      jt(),
      De(),
      requestAnimationFrame(Ge));
  }
  const ne = parseInt(location.hash.slice(1), 10);
  (_(Number.isFinite(ne) && ne >= 1 && ne <= R.length ? ne - 1 : 0),
    requestAnimationFrame(Ge),
    document.body.classList.add("ready"));
}
function vseprLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("分子构型 · VSEPR")), qs());
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
                    jsxRuntime.jsx("g", {
                      stroke: "currentColor",
                      strokeWidth: "1.4",
                      strokeLinecap: "round",
                      children: jsxRuntime.jsx("path", {
                        d: "M16 16L16 4.5M16 16L5.5 22M16 16L26.5 22",
                      }),
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "16",
                      cy: "16",
                      r: "4.4",
                      fill: "#0f9e63",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "16",
                      cy: "4.5",
                      r: "2.6",
                      fill: "#e0483c",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "5.5",
                      cy: "22",
                      r: "2.6",
                      fill: "#3d64d8",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "26.5",
                      cy: "22",
                      r: "2.6",
                      fill: "#3a3f46",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "MOLE",
                        jsxRuntime.jsx("i", {
                          children: "CRAFT",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("分子构型 · 价层电子对互斥"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(Lt, {}),
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
              id: "labels",
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
                  className: "seg",
                  id: "style",
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
export { vseprLabPage as default };
