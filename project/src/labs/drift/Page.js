// Recovered from public deployment: Page-DhtjytuL.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  _ as preloadDependencies,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as T4 } from "../../components/LanguageSwitcher.js";
import { T as C4, O as N4 } from "../../vendor/OrbitControls-D-zZTbsE.js";
import { t as L4 } from "../../vendor/earth_bm_07-CEsBUeyA.js";
class X1 {
  constructor() {
    ((this._partials = new Float64Array(32)), (this._n = 0));
  }
  add(e) {
    const o = this._partials;
    let n = 0;
    for (let a = 0; a < this._n && a < 32; a++) {
      const l = o[a],
        f = e + l,
        i = Math.abs(e) < Math.abs(l) ? e - (f - l) : l - (f - e);
      (i && (o[n++] = i), (e = f));
    }
    return ((o[n] = e), (this._n = n + 1), this);
  }
  valueOf() {
    const e = this._partials;
    let o = this._n,
      n,
      a,
      l,
      f = 0;
    if (o > 0) {
      for (
        f = e[--o];
        o > 0 && ((n = f), (a = e[--o]), (f = n + a), (l = a - (f - n)), !l);
      );
      o > 0 &&
        ((l < 0 && e[o - 1] < 0) || (l > 0 && e[o - 1] > 0)) &&
        ((a = l * 2), (n = f + a), a == n - f && (f = n));
    }
    return f;
  }
}
function* $4(t) {
  for (const e of t) yield* e;
}
function P0(t) {
  return Array.from($4(t));
}
function R2(t, e, o) {
  ((t = +t),
    (e = +e),
    (o = (a = arguments.length) < 2 ? ((e = t), (t = 0), 1) : a < 3 ? 1 : +o));
  for (
    var n = -1, a = Math.max(0, Math.ceil((e - t) / o)) | 0, l = new Array(a);
    ++n < a;
  )
    l[n] = t + n * o;
  return l;
}
var Q = 1e-6,
  M0 = 1e-12,
  o1 = Math.PI,
  z1 = o1 / 2,
  S3 = o1 / 4,
  I1 = o1 * 2,
  T1 = 180 / o1,
  s1 = o1 / 180,
  r1 = Math.abs,
  x0 = Math.atan,
  U2 = Math.atan2,
  c1 = Math.cos,
  d3 = Math.ceil,
  I4 = Math.exp,
  j4 = Math.log,
  f1 = Math.sin,
  B4 =
    Math.sign ||
    function (t) {
      return t > 0 ? 1 : t < 0 ? -1 : 0;
    },
  g2 = Math.sqrt,
  z4 = Math.tan;
function F4(t) {
  return t > 1 ? 0 : t < -1 ? o1 : Math.acos(t);
}
function A2(t) {
  return t > 1 ? z1 : t < -1 ? -z1 : Math.asin(t);
}
function L1() {}
function P3(t, e) {
  t && O5.hasOwnProperty(t.type) && O5[t.type](t, e);
}
var X5 = {
    Feature: function (t, e) {
      P3(t.geometry, e);
    },
    FeatureCollection: function (t, e) {
      for (var o = t.features, n = -1, a = o.length; ++n < a;)
        P3(o[n].geometry, e);
    },
  },
  O5 = {
    Sphere: function (t, e) {
      e.sphere();
    },
    Point: function (t, e) {
      ((t = t.coordinates), e.point(t[0], t[1], t[2]));
    },
    MultiPoint: function (t, e) {
      for (var o = t.coordinates, n = -1, a = o.length; ++n < a;)
        ((t = o[n]), e.point(t[0], t[1], t[2]));
    },
    LineString: function (t, e) {
      O3(t.coordinates, e, 0);
    },
    MultiLineString: function (t, e) {
      for (var o = t.coordinates, n = -1, a = o.length; ++n < a;)
        O3(o[n], e, 0);
    },
    Polygon: function (t, e) {
      V5(t.coordinates, e);
    },
    MultiPolygon: function (t, e) {
      for (var o = t.coordinates, n = -1, a = o.length; ++n < a;) V5(o[n], e);
    },
    GeometryCollection: function (t, e) {
      for (var o = t.geometries, n = -1, a = o.length; ++n < a;) P3(o[n], e);
    },
  };
function O3(t, e, o) {
  var n = -1,
    a = t.length - o,
    l;
  for (e.lineStart(); ++n < a;) ((l = t[n]), e.point(l[0], l[1], l[2]));
  e.lineEnd();
}
function V5(t, e) {
  var o = -1,
    n = t.length;
  for (e.polygonStart(); ++o < n;) O3(t[o], e, 1);
  e.polygonEnd();
}
function x2(t, e) {
  t && X5.hasOwnProperty(t.type) ? X5[t.type](t, e) : P3(t, e);
}
var M3 = new X1(),
  H5 = new X1(),
  w0,
  A0,
  V3,
  H3,
  J3,
  n2 = {
    point: L1,
    lineStart: L1,
    lineEnd: L1,
    polygonStart: function () {
      ((M3 = new X1()), (n2.lineStart = R4), (n2.lineEnd = Y4));
    },
    polygonEnd: function () {
      var t = +M3;
      (H5.add(t < 0 ? I1 + t : t),
        (this.lineStart = this.lineEnd = this.point = L1));
    },
    sphere: function () {
      H5.add(I1);
    },
  };
function R4() {
  n2.point = G4;
}
function Y4() {
  k0(w0, A0);
}
function G4(t, e) {
  ((n2.point = k0),
    (w0 = t),
    (A0 = e),
    (t *= s1),
    (e *= s1),
    (V3 = t),
    (H3 = c1((e = e / 2 + S3))),
    (J3 = f1(e)));
}
function k0(t, e) {
  ((t *= s1), (e *= s1), (e = e / 2 + S3));
  var o = t - V3,
    n = o >= 0 ? 1 : -1,
    a = n * o,
    l = c1(e),
    f = f1(e),
    i = J3 * f,
    d = H3 * l + i * c1(a),
    h = i * n * f1(a);
  (M3.add(U2(h, d)), (V3 = t), (H3 = l), (J3 = f));
}
function x3(t) {
  return [U2(t[1], t[0]), A2(t[2])];
}
function k2(t) {
  var e = t[0],
    o = t[1],
    n = c1(o);
  return [n * c1(e), n * f1(e), f1(o)];
}
function h3(t, e) {
  return t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
}
function D2(t, e) {
  return [
    t[1] * e[2] - t[2] * e[1],
    t[2] * e[0] - t[0] * e[2],
    t[0] * e[1] - t[1] * e[0],
  ];
}
function U3(t, e) {
  ((t[0] += e[0]), (t[1] += e[1]), (t[2] += e[2]));
}
function y3(t, e) {
  return [t[0] * e, t[1] * e, t[2] * e];
}
function w3(t) {
  var e = g2(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
  ((t[0] /= e), (t[1] /= e), (t[2] /= e));
}
var v1,
  B1,
  S1,
  U1,
  M2,
  E0,
  T0,
  G2,
  t3,
  y2,
  o2,
  Z1 = {
    point: K3,
    lineStart: J5,
    lineEnd: K5,
    polygonStart: function () {
      ((Z1.point = N0),
        (Z1.lineStart = U4),
        (Z1.lineEnd = D4),
        (t3 = new X1()),
        n2.polygonStart());
    },
    polygonEnd: function () {
      (n2.polygonEnd(),
        (Z1.point = K3),
        (Z1.lineStart = J5),
        (Z1.lineEnd = K5),
        M3 < 0
          ? ((v1 = -(S1 = 180)), (B1 = -(U1 = 90)))
          : t3 > Q
            ? (U1 = 90)
            : t3 < -Q && (B1 = -90),
        (o2[0] = v1),
        (o2[1] = S1));
    },
    sphere: function () {
      ((v1 = -(S1 = 180)), (B1 = -(U1 = 90)));
    },
  };
function K3(t, e) {
  (y2.push((o2 = [(v1 = t), (S1 = t)])),
    e < B1 && (B1 = e),
    e > U1 && (U1 = e));
}
function C0(t, e) {
  var o = k2([t * s1, e * s1]);
  if (G2) {
    var n = D2(G2, o),
      a = [n[1], -n[0], 0],
      l = D2(a, n);
    (w3(l), (l = x3(l)));
    var f = t - M2,
      i = f > 0 ? 1 : -1,
      d = l[0] * T1 * i,
      h,
      p = r1(f) > 180;
    (p ^ (i * M2 < d && d < i * t)
      ? ((h = l[1] * T1), h > U1 && (U1 = h))
      : ((d = ((d + 360) % 360) - 180),
        p ^ (i * M2 < d && d < i * t)
          ? ((h = -l[1] * T1), h < B1 && (B1 = h))
          : (e < B1 && (B1 = e), e > U1 && (U1 = e))),
      p
        ? t < M2
          ? G1(v1, t) > G1(v1, S1) && (S1 = t)
          : G1(t, S1) > G1(v1, S1) && (v1 = t)
        : S1 >= v1
          ? (t < v1 && (v1 = t), t > S1 && (S1 = t))
          : t > M2
            ? G1(v1, t) > G1(v1, S1) && (S1 = t)
            : G1(t, S1) > G1(v1, S1) && (v1 = t));
  } else y2.push((o2 = [(v1 = t), (S1 = t)]));
  (e < B1 && (B1 = e), e > U1 && (U1 = e), (G2 = o), (M2 = t));
}
function J5() {
  Z1.point = C0;
}
function K5() {
  ((o2[0] = v1), (o2[1] = S1), (Z1.point = K3), (G2 = null));
}
function N0(t, e) {
  if (G2) {
    var o = t - M2;
    t3.add(r1(o) > 180 ? o + (o > 0 ? 360 : -360) : o);
  } else ((E0 = t), (T0 = e));
  (n2.point(t, e), C0(t, e));
}
function U4() {
  n2.lineStart();
}
function D4() {
  (N0(E0, T0),
    n2.lineEnd(),
    r1(t3) > Q && (v1 = -(S1 = 180)),
    (o2[0] = v1),
    (o2[1] = S1),
    (G2 = null));
}
function G1(t, e) {
  return (e -= t) < 0 ? e + 360 : e;
}
function q4(t, e) {
  return t[0] - e[0];
}
function W5(t, e) {
  return t[0] <= t[1] ? t[0] <= e && e <= t[1] : e < t[0] || t[1] < e;
}
function _4(t) {
  var e, o, n, a, l, f, i;
  if (((U1 = S1 = -(v1 = B1 = 1 / 0)), (y2 = []), x2(t, Z1), (o = y2.length))) {
    for (y2.sort(q4), e = 1, n = y2[0], l = [n]; e < o; ++e)
      ((a = y2[e]),
        W5(n, a[0]) || W5(n, a[1])
          ? (G1(n[0], a[1]) > G1(n[0], n[1]) && (n[1] = a[1]),
            G1(a[0], n[1]) > G1(n[0], n[1]) && (n[0] = a[0]))
          : l.push((n = a)));
    for (f = -1 / 0, o = l.length - 1, e = 0, n = l[o]; e <= o; n = a, ++e)
      ((a = l[e]),
        (i = G1(n[1], a[0])) > f && ((f = i), (v1 = a[0]), (S1 = n[1])));
  }
  return (
    (y2 = o2 = null),
    v1 === 1 / 0 || B1 === 1 / 0
      ? [
          [NaN, NaN],
          [NaN, NaN],
        ]
      : [
          [v1, B1],
          [S1, U1],
        ]
  );
}
function W3(t, e) {
  function o(n, a) {
    return ((n = t(n, a)), e(n[0], n[1]));
  }
  return (
    t.invert &&
      e.invert &&
      (o.invert = function (n, a) {
        return ((n = e.invert(n, a)), n && t.invert(n[0], n[1]));
      }),
    o
  );
}
function Z3(t, e) {
  return (r1(t) > o1 && (t -= Math.round(t / I1) * I1), [t, e]);
}
Z3.invert = Z3;
function L0(t, e, o) {
  return (t %= I1)
    ? e || o
      ? W3(Q5(t), t0(e, o))
      : Q5(t)
    : e || o
      ? t0(e, o)
      : Z3;
}
function Z5(t) {
  return function (e, o) {
    return ((e += t), r1(e) > o1 && (e -= Math.round(e / I1) * I1), [e, o]);
  };
}
function Q5(t) {
  var e = Z5(t);
  return ((e.invert = Z5(-t)), e);
}
function t0(t, e) {
  var o = c1(t),
    n = f1(t),
    a = c1(e),
    l = f1(e);
  function f(i, d) {
    var h = c1(d),
      p = c1(i) * h,
      u = f1(i) * h,
      y = f1(d),
      S = y * o + p * n;
    return [U2(u * a - S * l, p * o - y * n), A2(S * a + u * l)];
  }
  return (
    (f.invert = function (i, d) {
      var h = c1(d),
        p = c1(i) * h,
        u = f1(i) * h,
        y = f1(d),
        S = y * a - u * l;
      return [U2(u * a + y * l, p * o + S * n), A2(S * o - p * n)];
    }),
    f
  );
}
function X4(t) {
  t = L0(t[0] * s1, t[1] * s1, t.length > 2 ? t[2] * s1 : 0);
  function e(o) {
    return ((o = t(o[0] * s1, o[1] * s1)), (o[0] *= T1), (o[1] *= T1), o);
  }
  return (
    (e.invert = function (o) {
      return (
        (o = t.invert(o[0] * s1, o[1] * s1)),
        (o[0] *= T1),
        (o[1] *= T1),
        o
      );
    }),
    e
  );
}
function O4(t, e, o, n, a, l) {
  if (o) {
    var f = c1(e),
      i = f1(e),
      d = n * o;
    a == null
      ? ((a = e + n * I1), (l = e - d / 2))
      : ((a = e0(f, a)),
        (l = e0(f, l)),
        (n > 0 ? a < l : a > l) && (a += n * I1));
    for (var h, p = a; n > 0 ? p > l : p < l; p -= d)
      ((h = x3([f, -i * c1(p), -i * f1(p)])), t.point(h[0], h[1]));
  }
}
function e0(t, e) {
  ((e = k2(e)), (e[0] -= t), w3(e));
  var o = F4(-e[1]);
  return ((-e[2] < 0 ? -o : o) + I1 - Q) % I1;
}
function $0() {
  var t = [],
    e;
  return {
    point: function (o, n, a) {
      e.push([o, n, a]);
    },
    lineStart: function () {
      t.push((e = []));
    },
    lineEnd: L1,
    rejoin: function () {
      t.length > 1 && t.push(t.pop().concat(t.shift()));
    },
    result: function () {
      var o = t;
      return ((t = []), (e = null), o);
    },
  };
}
function v3(t, e) {
  return r1(t[0] - e[0]) < Q && r1(t[1] - e[1]) < Q;
}
function m3(t, e, o, n) {
  ((this.x = t),
    (this.z = e),
    (this.o = o),
    (this.e = n),
    (this.v = !1),
    (this.n = this.p = null));
}
function I0(t, e, o, n, a) {
  var l = [],
    f = [],
    i,
    d;
  if (
    (t.forEach(function (v) {
      if (!((k = v.length - 1) <= 0)) {
        var k,
          g = v[0],
          w = v[k],
          T;
        if (v3(g, w)) {
          if (!g[2] && !w[2]) {
            for (a.lineStart(), i = 0; i < k; ++i) a.point((g = v[i])[0], g[1]);
            a.lineEnd();
            return;
          }
          w[0] += 2 * Q;
        }
        (l.push((T = new m3(g, v, null, !0))),
          f.push((T.o = new m3(g, null, T, !1))),
          l.push((T = new m3(w, v, null, !1))),
          f.push((T.o = new m3(w, null, T, !0))));
      }
    }),
    !!l.length)
  ) {
    for (f.sort(e), n0(l), n0(f), i = 0, d = f.length; i < d; ++i)
      f[i].e = o = !o;
    for (var h = l[0], p, u; ;) {
      for (var y = h, S = !0; y.v;) if ((y = y.n) === h) return;
      ((p = y.z), a.lineStart());
      do {
        if (((y.v = y.o.v = !0), y.e)) {
          if (S)
            for (i = 0, d = p.length; i < d; ++i) a.point((u = p[i])[0], u[1]);
          else n(y.x, y.n.x, 1, a);
          y = y.n;
        } else {
          if (S)
            for (p = y.p.z, i = p.length - 1; i >= 0; --i)
              a.point((u = p[i])[0], u[1]);
          else n(y.x, y.p.x, -1, a);
          y = y.p;
        }
        ((y = y.o), (p = y.z), (S = !S));
      } while (!y.v);
      a.lineEnd();
    }
  }
}
function n0(t) {
  if ((e = t.length)) {
    for (var e, o = 0, n = t[0], a; ++o < e;)
      ((n.n = a = t[o]), (a.p = n), (n = a));
    ((n.n = a = t[0]), (a.p = n));
  }
}
function D3(t) {
  return r1(t[0]) <= o1 ? t[0] : B4(t[0]) * (((r1(t[0]) + o1) % I1) - o1);
}
function V4(t, e) {
  var o = D3(e),
    n = e[1],
    a = f1(n),
    l = [f1(o), -c1(o), 0],
    f = 0,
    i = 0,
    d = new X1();
  a === 1 ? (n = z1 + Q) : a === -1 && (n = -z1 - Q);
  for (var h = 0, p = t.length; h < p; ++h)
    if ((y = (u = t[h]).length))
      for (
        var u,
          y,
          S = u[y - 1],
          v = D3(S),
          k = S[1] / 2 + S3,
          g = f1(k),
          w = c1(k),
          T = 0;
        T < y;
        ++T, v = x, g = $, w = z, S = M
      ) {
        var M = u[T],
          x = D3(M),
          E = M[1] / 2 + S3,
          $ = f1(E),
          z = c1(E),
          F = x - v,
          D = F >= 0 ? 1 : -1,
          q = D * F,
          Y = q > o1,
          _ = g * $;
        if (
          (d.add(U2(_ * D * f1(q), w * z + _ * c1(q))),
          (f += Y ? F + D * I1 : F),
          Y ^ (v >= o) ^ (x >= o))
        ) {
          var e1 = D2(k2(S), k2(M));
          w3(e1);
          var t1 = D2(l, e1);
          w3(t1);
          var A = (Y ^ (F >= 0) ? -1 : 1) * A2(t1[2]);
          (n > A || (n === A && (e1[0] || e1[1]))) &&
            (i += Y ^ (F >= 0) ? 1 : -1);
        }
      }
  return (f < -Q || (f < Q && d < -M0)) ^ (i & 1);
}
function j0(t, e, o, n) {
  return function (a) {
    var l = e(a),
      f = $0(),
      i = e(f),
      d = !1,
      h,
      p,
      u,
      y = {
        point: S,
        lineStart: k,
        lineEnd: g,
        polygonStart: function () {
          ((y.point = w),
            (y.lineStart = T),
            (y.lineEnd = M),
            (p = []),
            (h = []));
        },
        polygonEnd: function () {
          ((y.point = S), (y.lineStart = k), (y.lineEnd = g), (p = P0(p)));
          var x = V4(h, n);
          (p.length
            ? (d || (a.polygonStart(), (d = !0)), I0(p, J4, x, o, a))
            : x &&
              (d || (a.polygonStart(), (d = !0)),
              a.lineStart(),
              o(null, null, 1, a),
              a.lineEnd()),
            d && (a.polygonEnd(), (d = !1)),
            (p = h = null));
        },
        sphere: function () {
          (a.polygonStart(),
            a.lineStart(),
            o(null, null, 1, a),
            a.lineEnd(),
            a.polygonEnd());
        },
      };
    function S(x, E) {
      t(x, E) && a.point(x, E);
    }
    function v(x, E) {
      l.point(x, E);
    }
    function k() {
      ((y.point = v), l.lineStart());
    }
    function g() {
      ((y.point = S), l.lineEnd());
    }
    function w(x, E) {
      (u.push([x, E]), i.point(x, E));
    }
    function T() {
      (i.lineStart(), (u = []));
    }
    function M() {
      (w(u[0][0], u[0][1]), i.lineEnd());
      var x = i.clean(),
        E = f.result(),
        $,
        z = E.length,
        F,
        D,
        q;
      if ((u.pop(), h.push(u), (u = null), !!z)) {
        if (x & 1) {
          if (((D = E[0]), (F = D.length - 1) > 0)) {
            for (
              d || (a.polygonStart(), (d = !0)), a.lineStart(), $ = 0;
              $ < F;
              ++$
            )
              a.point((q = D[$])[0], q[1]);
            a.lineEnd();
          }
          return;
        }
        (z > 1 && x & 2 && E.push(E.pop().concat(E.shift())),
          p.push(E.filter(H4)));
      }
    }
    return y;
  };
}
function H4(t) {
  return t.length > 1;
}
function J4(t, e) {
  return (
    ((t = t.x)[0] < 0 ? t[1] - z1 - Q : z1 - t[1]) -
    ((e = e.x)[0] < 0 ? e[1] - z1 - Q : z1 - e[1])
  );
}
const o0 = j0(
  function () {
    return !0;
  },
  K4,
  Z4,
  [-o1, -z1],
);
function K4(t) {
  var e = NaN,
    o = NaN,
    n = NaN,
    a;
  return {
    lineStart: function () {
      (t.lineStart(), (a = 1));
    },
    point: function (l, f) {
      var i = l > 0 ? o1 : -o1,
        d = r1(l - e);
      (r1(d - o1) < Q
        ? (t.point(e, (o = (o + f) / 2 > 0 ? z1 : -z1)),
          t.point(n, o),
          t.lineEnd(),
          t.lineStart(),
          t.point(i, o),
          t.point(l, o),
          (a = 0))
        : n !== i &&
          d >= o1 &&
          (r1(e - n) < Q && (e -= n * Q),
          r1(l - i) < Q && (l -= i * Q),
          (o = W4(e, o, l, f)),
          t.point(n, o),
          t.lineEnd(),
          t.lineStart(),
          t.point(i, o),
          (a = 0)),
        t.point((e = l), (o = f)),
        (n = i));
    },
    lineEnd: function () {
      (t.lineEnd(), (e = o = NaN));
    },
    clean: function () {
      return 2 - a;
    },
  };
}
function W4(t, e, o, n) {
  var a,
    l,
    f = f1(t - o);
  return r1(f) > Q
    ? x0(
        (f1(e) * (l = c1(n)) * f1(o) - f1(n) * (a = c1(e)) * f1(t)) /
          (a * l * f),
      )
    : (e + n) / 2;
}
function Z4(t, e, o, n) {
  var a;
  if (t == null)
    ((a = o * z1),
      n.point(-o1, a),
      n.point(0, a),
      n.point(o1, a),
      n.point(o1, 0),
      n.point(o1, -a),
      n.point(0, -a),
      n.point(-o1, -a),
      n.point(-o1, 0),
      n.point(-o1, a));
  else if (r1(t[0] - e[0]) > Q) {
    var l = t[0] < e[0] ? o1 : -o1;
    ((a = (o * l) / 2), n.point(-l, a), n.point(0, a), n.point(l, a));
  } else n.point(e[0], e[1]);
}
function Q4(t) {
  var e = c1(t),
    o = 2 * s1,
    n = e > 0,
    a = r1(e) > Q;
  function l(p, u, y, S) {
    O4(S, t, o, y, p, u);
  }
  function f(p, u) {
    return c1(p) * c1(u) > e;
  }
  function i(p) {
    var u, y, S, v, k;
    return {
      lineStart: function () {
        ((v = S = !1), (k = 1));
      },
      point: function (g, w) {
        var T = [g, w],
          M,
          x = f(g, w),
          E = n ? (x ? 0 : h(g, w)) : x ? h(g + (g < 0 ? o1 : -o1), w) : 0;
        if (
          (!u && (v = S = x) && p.lineStart(),
          x !== S &&
            ((M = d(u, T)), (!M || v3(u, M) || v3(T, M)) && (T[2] = 1)),
          x !== S)
        )
          ((k = 0),
            x
              ? (p.lineStart(), (M = d(T, u)), p.point(M[0], M[1]))
              : ((M = d(u, T)), p.point(M[0], M[1], 2), p.lineEnd()),
            (u = M));
        else if (a && u && n ^ x) {
          var $;
          !(E & y) &&
            ($ = d(T, u, !0)) &&
            ((k = 0),
            n
              ? (p.lineStart(),
                p.point($[0][0], $[0][1]),
                p.point($[1][0], $[1][1]),
                p.lineEnd())
              : (p.point($[1][0], $[1][1]),
                p.lineEnd(),
                p.lineStart(),
                p.point($[0][0], $[0][1], 3)));
        }
        (x && (!u || !v3(u, T)) && p.point(T[0], T[1]),
          (u = T),
          (S = x),
          (y = E));
      },
      lineEnd: function () {
        (S && p.lineEnd(), (u = null));
      },
      clean: function () {
        return k | ((v && S) << 1);
      },
    };
  }
  function d(p, u, y) {
    var S = k2(p),
      v = k2(u),
      k = [1, 0, 0],
      g = D2(S, v),
      w = h3(g, g),
      T = g[0],
      M = w - T * T;
    if (!M) return !y && p;
    var x = (e * w) / M,
      E = (-e * T) / M,
      $ = D2(k, g),
      z = y3(k, x),
      F = y3(g, E);
    U3(z, F);
    var D = $,
      q = h3(z, D),
      Y = h3(D, D),
      _ = q * q - Y * (h3(z, z) - 1);
    if (!(_ < 0)) {
      var e1 = g2(_),
        t1 = y3(D, (-q - e1) / Y);
      if ((U3(t1, z), (t1 = x3(t1)), !y)) return t1;
      var A = p[0],
        J = u[0],
        m = p[1],
        C = u[1],
        L;
      J < A && ((L = A), (A = J), (J = L));
      var R = J - A,
        U = r1(R - o1) < Q,
        a1 = U || R < Q;
      if (
        (!U && C < m && ((L = m), (m = C), (C = L)),
        a1
          ? U
            ? (m + C > 0) ^ (t1[1] < (r1(t1[0] - A) < Q ? m : C))
            : m <= t1[1] && t1[1] <= C
          : (R > o1) ^ (A <= t1[0] && t1[0] <= J))
      ) {
        var V = y3(D, (-q + e1) / Y);
        return (U3(V, z), [t1, x3(V)]);
      }
    }
  }
  function h(p, u) {
    var y = n ? t : o1 - t,
      S = 0;
    return (
      p < -y ? (S |= 1) : p > y && (S |= 2),
      u < -y ? (S |= 4) : u > y && (S |= 8),
      S
    );
  }
  return j0(f, i, l, n ? [0, -t] : [-o1, t - o1]);
}
function tt(t, e, o, n, a, l) {
  var f = t[0],
    i = t[1],
    d = e[0],
    h = e[1],
    p = 0,
    u = 1,
    y = d - f,
    S = h - i,
    v;
  if (((v = o - f), !(!y && v > 0))) {
    if (((v /= y), y < 0)) {
      if (v < p) return;
      v < u && (u = v);
    } else if (y > 0) {
      if (v > u) return;
      v > p && (p = v);
    }
    if (((v = a - f), !(!y && v < 0))) {
      if (((v /= y), y < 0)) {
        if (v > u) return;
        v > p && (p = v);
      } else if (y > 0) {
        if (v < p) return;
        v < u && (u = v);
      }
      if (((v = n - i), !(!S && v > 0))) {
        if (((v /= S), S < 0)) {
          if (v < p) return;
          v < u && (u = v);
        } else if (S > 0) {
          if (v > u) return;
          v > p && (p = v);
        }
        if (((v = l - i), !(!S && v < 0))) {
          if (((v /= S), S < 0)) {
            if (v > u) return;
            v > p && (p = v);
          } else if (S > 0) {
            if (v < p) return;
            v < u && (u = v);
          }
          return (
            p > 0 && ((t[0] = f + p * y), (t[1] = i + p * S)),
            u < 1 && ((e[0] = f + u * y), (e[1] = i + u * S)),
            !0
          );
        }
      }
    }
  }
}
var J2 = 1e9,
  g3 = -J2;
function et(t, e, o, n) {
  function a(h, p) {
    return t <= h && h <= o && e <= p && p <= n;
  }
  function l(h, p, u, y) {
    var S = 0,
      v = 0;
    if (h == null || (S = f(h, u)) !== (v = f(p, u)) || (d(h, p) < 0) ^ (u > 0))
      do y.point(S === 0 || S === 3 ? t : o, S > 1 ? n : e);
      while ((S = (S + u + 4) % 4) !== v);
    else y.point(p[0], p[1]);
  }
  function f(h, p) {
    return r1(h[0] - t) < Q
      ? p > 0
        ? 0
        : 3
      : r1(h[0] - o) < Q
        ? p > 0
          ? 2
          : 1
        : r1(h[1] - e) < Q
          ? p > 0
            ? 1
            : 0
          : p > 0
            ? 3
            : 2;
  }
  function i(h, p) {
    return d(h.x, p.x);
  }
  function d(h, p) {
    var u = f(h, 1),
      y = f(p, 1);
    return u !== y
      ? u - y
      : u === 0
        ? p[1] - h[1]
        : u === 1
          ? h[0] - p[0]
          : u === 2
            ? h[1] - p[1]
            : p[0] - h[0];
  }
  return function (h) {
    var p = h,
      u = $0(),
      y,
      S,
      v,
      k,
      g,
      w,
      T,
      M,
      x,
      E,
      $,
      z = {
        point: F,
        lineStart: _,
        lineEnd: e1,
        polygonStart: q,
        polygonEnd: Y,
      };
    function F(A, J) {
      a(A, J) && p.point(A, J);
    }
    function D() {
      for (var A = 0, J = 0, m = S.length; J < m; ++J)
        for (
          var C = S[J],
            L = 1,
            R = C.length,
            U = C[0],
            a1,
            V,
            p1 = U[0],
            m1 = U[1];
          L < R;
          ++L
        )
          ((a1 = p1),
            (V = m1),
            (U = C[L]),
            (p1 = U[0]),
            (m1 = U[1]),
            V <= n
              ? m1 > n && (p1 - a1) * (n - V) > (m1 - V) * (t - a1) && ++A
              : m1 <= n && (p1 - a1) * (n - V) < (m1 - V) * (t - a1) && --A);
      return A;
    }
    function q() {
      ((p = u), (y = []), (S = []), ($ = !0));
    }
    function Y() {
      var A = D(),
        J = $ && A,
        m = (y = P0(y)).length;
      ((J || m) &&
        (h.polygonStart(),
        J && (h.lineStart(), l(null, null, 1, h), h.lineEnd()),
        m && I0(y, i, A, l, h),
        h.polygonEnd()),
        (p = h),
        (y = S = v = null));
    }
    function _() {
      ((z.point = t1),
        S && S.push((v = [])),
        (E = !0),
        (x = !1),
        (T = M = NaN));
    }
    function e1() {
      (y && (t1(k, g), w && x && u.rejoin(), y.push(u.result())),
        (z.point = F),
        x && p.lineEnd());
    }
    function t1(A, J) {
      var m = a(A, J);
      if ((S && v.push([A, J]), E))
        ((k = A),
          (g = J),
          (w = m),
          (E = !1),
          m && (p.lineStart(), p.point(A, J)));
      else if (m && x) p.point(A, J);
      else {
        var C = [
            (T = Math.max(g3, Math.min(J2, T))),
            (M = Math.max(g3, Math.min(J2, M))),
          ],
          L = [
            (A = Math.max(g3, Math.min(J2, A))),
            (J = Math.max(g3, Math.min(J2, J))),
          ];
        tt(C, L, t, e, o, n)
          ? (x || (p.lineStart(), p.point(C[0], C[1])),
            p.point(L[0], L[1]),
            m || p.lineEnd(),
            ($ = !1))
          : m && (p.lineStart(), p.point(A, J), ($ = !1));
      }
      ((T = A), (M = J), (x = m));
    }
    return z;
  };
}
function i0(t, e, o) {
  var n = R2(t, e - Q, o).concat(e);
  return function (a) {
    return n.map(function (l) {
      return [a, l];
    });
  };
}
function a0(t, e, o) {
  var n = R2(t, e - Q, o).concat(e);
  return function (a) {
    return n.map(function (l) {
      return [l, a];
    });
  };
}
function B0() {
  var t,
    e,
    o,
    n,
    a,
    l,
    f,
    i,
    d = 10,
    h = d,
    p = 90,
    u = 360,
    y,
    S,
    v,
    k,
    g = 2.5;
  function w() {
    return {
      type: "MultiLineString",
      coordinates: T(),
    };
  }
  function T() {
    return R2(d3(n / p) * p, o, p)
      .map(v)
      .concat(R2(d3(i / u) * u, f, u).map(k))
      .concat(
        R2(d3(e / d) * d, t, d)
          .filter(function (M) {
            return r1(M % p) > Q;
          })
          .map(y),
      )
      .concat(
        R2(d3(l / h) * h, a, h)
          .filter(function (M) {
            return r1(M % u) > Q;
          })
          .map(S),
      );
  }
  return (
    (w.lines = function () {
      return T().map(function (M) {
        return {
          type: "LineString",
          coordinates: M,
        };
      });
    }),
    (w.outline = function () {
      return {
        type: "Polygon",
        coordinates: [
          v(n).concat(
            k(f).slice(1),
            v(o).reverse().slice(1),
            k(i).reverse().slice(1),
          ),
        ],
      };
    }),
    (w.extent = function (M) {
      return arguments.length
        ? w.extentMajor(M).extentMinor(M)
        : w.extentMinor();
    }),
    (w.extentMajor = function (M) {
      return arguments.length
        ? ((n = +M[0][0]),
          (o = +M[1][0]),
          (i = +M[0][1]),
          (f = +M[1][1]),
          n > o && ((M = n), (n = o), (o = M)),
          i > f && ((M = i), (i = f), (f = M)),
          w.precision(g))
        : [
            [n, i],
            [o, f],
          ];
    }),
    (w.extentMinor = function (M) {
      return arguments.length
        ? ((e = +M[0][0]),
          (t = +M[1][0]),
          (l = +M[0][1]),
          (a = +M[1][1]),
          e > t && ((M = e), (e = t), (t = M)),
          l > a && ((M = l), (l = a), (a = M)),
          w.precision(g))
        : [
            [e, l],
            [t, a],
          ];
    }),
    (w.step = function (M) {
      return arguments.length ? w.stepMajor(M).stepMinor(M) : w.stepMinor();
    }),
    (w.stepMajor = function (M) {
      return arguments.length ? ((p = +M[0]), (u = +M[1]), w) : [p, u];
    }),
    (w.stepMinor = function (M) {
      return arguments.length ? ((d = +M[0]), (h = +M[1]), w) : [d, h];
    }),
    (w.precision = function (M) {
      return arguments.length
        ? ((g = +M),
          (y = i0(l, a, 90)),
          (S = a0(e, t, g)),
          (v = i0(i, f, 90)),
          (k = a0(n, o, g)),
          w)
        : g;
    }),
    w
      .extentMajor([
        [-180, -90 + Q],
        [180, 90 - Q],
      ])
      .extentMinor([
        [-180, -80 - Q],
        [180, 80 + Q],
      ])
  );
}
function nt() {
  return B0()();
}
const Q3 = (t) => t;
var q3 = new X1(),
  t5 = new X1(),
  z0,
  F0,
  e5,
  n5,
  Q1 = {
    point: L1,
    lineStart: L1,
    lineEnd: L1,
    polygonStart: function () {
      ((Q1.lineStart = ot), (Q1.lineEnd = at));
    },
    polygonEnd: function () {
      ((Q1.lineStart = Q1.lineEnd = Q1.point = L1),
        q3.add(r1(t5)),
        (t5 = new X1()));
    },
    result: function () {
      var t = q3 / 2;
      return ((q3 = new X1()), t);
    },
  };
function ot() {
  Q1.point = it;
}
function it(t, e) {
  ((Q1.point = R0), (z0 = e5 = t), (F0 = n5 = e));
}
function R0(t, e) {
  (t5.add(n5 * t - e5 * e), (e5 = t), (n5 = e));
}
function at() {
  R0(z0, F0);
}
var q2 = 1 / 0,
  A3 = q2,
  a3 = -q2,
  k3 = a3,
  E3 = {
    point: rt,
    lineStart: L1,
    lineEnd: L1,
    polygonStart: L1,
    polygonEnd: L1,
    result: function () {
      var t = [
        [q2, A3],
        [a3, k3],
      ];
      return ((a3 = k3 = -(A3 = q2 = 1 / 0)), t);
    },
  };
function rt(t, e) {
  (t < q2 && (q2 = t),
    t > a3 && (a3 = t),
    e < A3 && (A3 = e),
    e > k3 && (k3 = e));
}
var o5 = 0,
  i5 = 0,
  K2 = 0,
  T3 = 0,
  C3 = 0,
  Y2 = 0,
  a5 = 0,
  r5 = 0,
  W2 = 0,
  Y0,
  G0,
  H1,
  J1,
  q1 = {
    point: E2,
    lineStart: r0,
    lineEnd: l0,
    polygonStart: function () {
      ((q1.lineStart = ct), (q1.lineEnd = ft));
    },
    polygonEnd: function () {
      ((q1.point = E2), (q1.lineStart = r0), (q1.lineEnd = l0));
    },
    result: function () {
      var t = W2
        ? [a5 / W2, r5 / W2]
        : Y2
          ? [T3 / Y2, C3 / Y2]
          : K2
            ? [o5 / K2, i5 / K2]
            : [NaN, NaN];
      return ((o5 = i5 = K2 = T3 = C3 = Y2 = a5 = r5 = W2 = 0), t);
    },
  };
function E2(t, e) {
  ((o5 += t), (i5 += e), ++K2);
}
function r0() {
  q1.point = lt;
}
function lt(t, e) {
  ((q1.point = st), E2((H1 = t), (J1 = e)));
}
function st(t, e) {
  var o = t - H1,
    n = e - J1,
    a = g2(o * o + n * n);
  ((T3 += (a * (H1 + t)) / 2),
    (C3 += (a * (J1 + e)) / 2),
    (Y2 += a),
    E2((H1 = t), (J1 = e)));
}
function l0() {
  q1.point = E2;
}
function ct() {
  q1.point = pt;
}
function ft() {
  U0(Y0, G0);
}
function pt(t, e) {
  ((q1.point = U0), E2((Y0 = H1 = t), (G0 = J1 = e)));
}
function U0(t, e) {
  var o = t - H1,
    n = e - J1,
    a = g2(o * o + n * n);
  ((T3 += (a * (H1 + t)) / 2),
    (C3 += (a * (J1 + e)) / 2),
    (Y2 += a),
    (a = J1 * t - H1 * e),
    (a5 += a * (H1 + t)),
    (r5 += a * (J1 + e)),
    (W2 += a * 3),
    E2((H1 = t), (J1 = e)));
}
function D0(t) {
  this._context = t;
}
D0.prototype = {
  _radius: 4.5,
  pointRadius: function (t) {
    return ((this._radius = t), this);
  },
  polygonStart: function () {
    this._line = 0;
  },
  polygonEnd: function () {
    this._line = NaN;
  },
  lineStart: function () {
    this._point = 0;
  },
  lineEnd: function () {
    (this._line === 0 && this._context.closePath(), (this._point = NaN));
  },
  point: function (t, e) {
    switch (this._point) {
      case 0: {
        (this._context.moveTo(t, e), (this._point = 1));
        break;
      }
      case 1: {
        this._context.lineTo(t, e);
        break;
      }
      default: {
        (this._context.moveTo(t + this._radius, e),
          this._context.arc(t, e, this._radius, 0, I1));
        break;
      }
    }
  },
  result: L1,
};
var l5 = new X1(),
  _3,
  q0,
  _0,
  Z2,
  Q2,
  r3 = {
    point: L1,
    lineStart: function () {
      r3.point = ut;
    },
    lineEnd: function () {
      (_3 && X0(q0, _0), (r3.point = L1));
    },
    polygonStart: function () {
      _3 = !0;
    },
    polygonEnd: function () {
      _3 = null;
    },
    result: function () {
      var t = +l5;
      return ((l5 = new X1()), t);
    },
  };
function ut(t, e) {
  ((r3.point = X0), (q0 = Z2 = t), (_0 = Q2 = e));
}
function X0(t, e) {
  ((Z2 -= t), (Q2 -= e), l5.add(g2(Z2 * Z2 + Q2 * Q2)), (Z2 = t), (Q2 = e));
}
let s0, N3, c0, f0;
class p0 {
  constructor(e) {
    ((this._append = e == null ? O0 : dt(e)),
      (this._radius = 4.5),
      (this._ = ""));
  }
  pointRadius(e) {
    return ((this._radius = +e), this);
  }
  polygonStart() {
    this._line = 0;
  }
  polygonEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line === 0 && (this._ += "Z"), (this._point = NaN));
  }
  point(e, o) {
    switch (this._point) {
      case 0: {
        (this._append`M${e},${o}`, (this._point = 1));
        break;
      }
      case 1: {
        this._append`L${e},${o}`;
        break;
      }
      default: {
        if (
          (this._append`M${e},${o}`, this._radius !== c0 || this._append !== N3)
        ) {
          const n = this._radius,
            a = this._;
          ((this._ = ""),
            this
              ._append`m0,${n}a${n},${n} 0 1,1 0,${-2 * n}a${n},${n} 0 1,1 0,${2 * n}z`,
            (c0 = n),
            (N3 = this._append),
            (f0 = this._),
            (this._ = a));
        }
        this._ += f0;
        break;
      }
    }
  }
  result() {
    const e = this._;
    return ((this._ = ""), e.length ? e : null);
  }
}
function O0(t) {
  let e = 1;
  this._ += t[0];
  for (const o = t.length; e < o; ++e) this._ += arguments[e] + t[e];
}
function dt(t) {
  const e = Math.floor(t);
  if (!(e >= 0)) throw new RangeError(`invalid digits: ${t}`);
  if (e > 15) return O0;
  if (e !== s0) {
    const o = 10 ** e;
    ((s0 = e),
      (N3 = function (a) {
        let l = 1;
        this._ += a[0];
        for (const f = a.length; l < f; ++l)
          this._ += Math.round(arguments[l] * o) / o + a[l];
      }));
  }
  return N3;
}
function L3(t, e) {
  let o = 3,
    n = 4.5,
    a,
    l;
  function f(i) {
    return (
      i &&
        (typeof n == "function" && l.pointRadius(+n.apply(this, arguments)),
        x2(i, a(l))),
      l.result()
    );
  }
  return (
    (f.area = function (i) {
      return (x2(i, a(Q1)), Q1.result());
    }),
    (f.measure = function (i) {
      return (x2(i, a(r3)), r3.result());
    }),
    (f.bounds = function (i) {
      return (x2(i, a(E3)), E3.result());
    }),
    (f.centroid = function (i) {
      return (x2(i, a(q1)), q1.result());
    }),
    (f.projection = function (i) {
      return arguments.length
        ? ((a = i == null ? ((t = null), Q3) : (t = i).stream), f)
        : t;
    }),
    (f.context = function (i) {
      return arguments.length
        ? ((l = i == null ? ((e = null), new p0(o)) : new D0((e = i))),
          typeof n != "function" && l.pointRadius(n),
          f)
        : e;
    }),
    (f.pointRadius = function (i) {
      return arguments.length
        ? ((n = typeof i == "function" ? i : (l.pointRadius(+i), +i)), f)
        : n;
    }),
    (f.digits = function (i) {
      if (!arguments.length) return o;
      if (i == null) o = null;
      else {
        const d = Math.floor(i);
        if (!(d >= 0)) throw new RangeError(`invalid digits: ${i}`);
        o = d;
      }
      return (e === null && (l = new p0(o)), f);
    }),
    f.projection(t).digits(o).context(e)
  );
}
function p5(t) {
  return function (e) {
    var o = new s5();
    for (var n in t) o[n] = t[n];
    return ((o.stream = e), o);
  };
}
function s5() {}
s5.prototype = {
  constructor: s5,
  point: function (t, e) {
    this.stream.point(t, e);
  },
  sphere: function () {
    this.stream.sphere();
  },
  lineStart: function () {
    this.stream.lineStart();
  },
  lineEnd: function () {
    this.stream.lineEnd();
  },
  polygonStart: function () {
    this.stream.polygonStart();
  },
  polygonEnd: function () {
    this.stream.polygonEnd();
  },
};
function u5(t, e, o) {
  var n = t.clipExtent && t.clipExtent();
  return (
    t.scale(150).translate([0, 0]),
    n != null && t.clipExtent(null),
    x2(o, t.stream(E3)),
    e(E3.result()),
    n != null && t.clipExtent(n),
    t
  );
}
function V0(t, e, o) {
  return u5(
    t,
    function (n) {
      var a = e[1][0] - e[0][0],
        l = e[1][1] - e[0][1],
        f = Math.min(a / (n[1][0] - n[0][0]), l / (n[1][1] - n[0][1])),
        i = +e[0][0] + (a - f * (n[1][0] + n[0][0])) / 2,
        d = +e[0][1] + (l - f * (n[1][1] + n[0][1])) / 2;
      t.scale(150 * f).translate([i, d]);
    },
    o,
  );
}
function ht(t, e, o) {
  return V0(t, [[0, 0], e], o);
}
function yt(t, e, o) {
  return u5(
    t,
    function (n) {
      var a = +e,
        l = a / (n[1][0] - n[0][0]),
        f = (a - l * (n[1][0] + n[0][0])) / 2,
        i = -l * n[0][1];
      t.scale(150 * l).translate([f, i]);
    },
    o,
  );
}
function mt(t, e, o) {
  return u5(
    t,
    function (n) {
      var a = +e,
        l = a / (n[1][1] - n[0][1]),
        f = -l * n[0][0],
        i = (a - l * (n[1][1] + n[0][1])) / 2;
      t.scale(150 * l).translate([f, i]);
    },
    o,
  );
}
var u0 = 16,
  gt = c1(30 * s1);
function d0(t, e) {
  return +e ? bt(t, e) : vt(t);
}
function vt(t) {
  return p5({
    point: function (e, o) {
      ((e = t(e, o)), this.stream.point(e[0], e[1]));
    },
  });
}
function bt(t, e) {
  function o(n, a, l, f, i, d, h, p, u, y, S, v, k, g) {
    var w = h - n,
      T = p - a,
      M = w * w + T * T;
    if (M > 4 * e && k--) {
      var x = f + y,
        E = i + S,
        $ = d + v,
        z = g2(x * x + E * E + $ * $),
        F = A2(($ /= z)),
        D = r1(r1($) - 1) < Q || r1(l - u) < Q ? (l + u) / 2 : U2(E, x),
        q = t(D, F),
        Y = q[0],
        _ = q[1],
        e1 = Y - n,
        t1 = _ - a,
        A = T * e1 - w * t1;
      ((A * A) / M > e ||
        r1((w * e1 + T * t1) / M - 0.5) > 0.3 ||
        f * y + i * S + d * v < gt) &&
        (o(n, a, l, f, i, d, Y, _, D, (x /= z), (E /= z), $, k, g),
        g.point(Y, _),
        o(Y, _, D, x, E, $, h, p, u, y, S, v, k, g));
    }
  }
  return function (n) {
    var a,
      l,
      f,
      i,
      d,
      h,
      p,
      u,
      y,
      S,
      v,
      k,
      g = {
        point: w,
        lineStart: T,
        lineEnd: x,
        polygonStart: function () {
          (n.polygonStart(), (g.lineStart = E));
        },
        polygonEnd: function () {
          (n.polygonEnd(), (g.lineStart = T));
        },
      };
    function w(F, D) {
      ((F = t(F, D)), n.point(F[0], F[1]));
    }
    function T() {
      ((u = NaN), (g.point = M), n.lineStart());
    }
    function M(F, D) {
      var q = k2([F, D]),
        Y = t(F, D);
      (o(
        u,
        y,
        p,
        S,
        v,
        k,
        (u = Y[0]),
        (y = Y[1]),
        (p = F),
        (S = q[0]),
        (v = q[1]),
        (k = q[2]),
        u0,
        n,
      ),
        n.point(u, y));
    }
    function x() {
      ((g.point = w), n.lineEnd());
    }
    function E() {
      (T(), (g.point = $), (g.lineEnd = z));
    }
    function $(F, D) {
      (M((a = F), D),
        (l = u),
        (f = y),
        (i = S),
        (d = v),
        (h = k),
        (g.point = M));
    }
    function z() {
      (o(u, y, p, S, v, k, l, f, a, i, d, h, u0, n), (g.lineEnd = x), x());
    }
    return g;
  };
}
var St = p5({
  point: function (t, e) {
    this.stream.point(t * s1, e * s1);
  },
});
function Pt(t) {
  return p5({
    point: function (e, o) {
      var n = t(e, o);
      return this.stream.point(n[0], n[1]);
    },
  });
}
function Mt(t, e, o, n, a) {
  function l(f, i) {
    return ((f *= n), (i *= a), [e + t * f, o - t * i]);
  }
  return (
    (l.invert = function (f, i) {
      return [((f - e) / t) * n, ((o - i) / t) * a];
    }),
    l
  );
}
function h0(t, e, o, n, a, l) {
  if (!l) return Mt(t, e, o, n, a);
  var f = c1(l),
    i = f1(l),
    d = f * t,
    h = i * t,
    p = f / t,
    u = i / t,
    y = (i * o - f * e) / t,
    S = (i * e + f * o) / t;
  function v(k, g) {
    return ((k *= n), (g *= a), [d * k - h * g + e, o - h * k - d * g]);
  }
  return (
    (v.invert = function (k, g) {
      return [n * (p * k - u * g + y), a * (S - u * k - p * g)];
    }),
    v
  );
}
function d5(t) {
  return xt(function () {
    return t;
  })();
}
function xt(t) {
  var e,
    o = 150,
    n = 480,
    a = 250,
    l = 0,
    f = 0,
    i = 0,
    d = 0,
    h = 0,
    p,
    u = 0,
    y = 1,
    S = 1,
    v = null,
    k = o0,
    g = null,
    w,
    T,
    M,
    x = Q3,
    E = 0.5,
    $,
    z,
    F,
    D,
    q;
  function Y(A) {
    return F(A[0] * s1, A[1] * s1);
  }
  function _(A) {
    return ((A = F.invert(A[0], A[1])), A && [A[0] * T1, A[1] * T1]);
  }
  ((Y.stream = function (A) {
    return D && q === A ? D : (D = St(Pt(p)(k($(x((q = A)))))));
  }),
    (Y.preclip = function (A) {
      return arguments.length ? ((k = A), (v = void 0), t1()) : k;
    }),
    (Y.postclip = function (A) {
      return arguments.length ? ((x = A), (g = w = T = M = null), t1()) : x;
    }),
    (Y.clipAngle = function (A) {
      return arguments.length
        ? ((k = +A ? Q4((v = A * s1)) : ((v = null), o0)), t1())
        : v * T1;
    }),
    (Y.clipExtent = function (A) {
      return arguments.length
        ? ((x =
            A == null
              ? ((g = w = T = M = null), Q3)
              : et(
                  (g = +A[0][0]),
                  (w = +A[0][1]),
                  (T = +A[1][0]),
                  (M = +A[1][1]),
                )),
          t1())
        : g == null
          ? null
          : [
              [g, w],
              [T, M],
            ];
    }),
    (Y.scale = function (A) {
      return arguments.length ? ((o = +A), e1()) : o;
    }),
    (Y.translate = function (A) {
      return arguments.length ? ((n = +A[0]), (a = +A[1]), e1()) : [n, a];
    }),
    (Y.center = function (A) {
      return arguments.length
        ? ((l = (A[0] % 360) * s1), (f = (A[1] % 360) * s1), e1())
        : [l * T1, f * T1];
    }),
    (Y.rotate = function (A) {
      return arguments.length
        ? ((i = (A[0] % 360) * s1),
          (d = (A[1] % 360) * s1),
          (h = A.length > 2 ? (A[2] % 360) * s1 : 0),
          e1())
        : [i * T1, d * T1, h * T1];
    }),
    (Y.angle = function (A) {
      return arguments.length ? ((u = (A % 360) * s1), e1()) : u * T1;
    }),
    (Y.reflectX = function (A) {
      return arguments.length ? ((y = A ? -1 : 1), e1()) : y < 0;
    }),
    (Y.reflectY = function (A) {
      return arguments.length ? ((S = A ? -1 : 1), e1()) : S < 0;
    }),
    (Y.precision = function (A) {
      return arguments.length ? (($ = d0(z, (E = A * A))), t1()) : g2(E);
    }),
    (Y.fitExtent = function (A, J) {
      return V0(Y, A, J);
    }),
    (Y.fitSize = function (A, J) {
      return ht(Y, A, J);
    }),
    (Y.fitWidth = function (A, J) {
      return yt(Y, A, J);
    }),
    (Y.fitHeight = function (A, J) {
      return mt(Y, A, J);
    }));
  function e1() {
    var A = h0(o, 0, 0, y, S, u).apply(null, e(l, f)),
      J = h0(o, n - A[0], a - A[1], y, S, u);
    return (
      (p = L0(i, d, h)),
      (z = W3(e, J)),
      (F = W3(p, z)),
      ($ = d0(z, E)),
      t1()
    );
  }
  function t1() {
    return ((D = q = null), Y);
  }
  return function () {
    return ((e = t.apply(this, arguments)), (Y.invert = e.invert && _), e1());
  };
}
function h5(t, e) {
  return [t, j4(z4((z1 + e) / 2))];
}
h5.invert = function (t, e) {
  return [t, 2 * x0(I4(e)) - z1];
};
function wt() {
  return At(h5).scale(961 / I1);
}
function At(t) {
  var e = d5(t),
    o = e.center,
    n = e.scale,
    a = e.translate,
    l = e.clipExtent,
    f = null,
    i,
    d,
    h;
  ((e.scale = function (u) {
    return arguments.length ? (n(u), p()) : n();
  }),
    (e.translate = function (u) {
      return arguments.length ? (a(u), p()) : a();
    }),
    (e.center = function (u) {
      return arguments.length ? (o(u), p()) : o();
    }),
    (e.clipExtent = function (u) {
      return arguments.length
        ? (u == null
            ? (f = i = d = h = null)
            : ((f = +u[0][0]), (i = +u[0][1]), (d = +u[1][0]), (h = +u[1][1])),
          p())
        : f == null
          ? null
          : [
              [f, i],
              [d, h],
            ];
    }));
  function p() {
    var u = o1 * n(),
      y = e(X4(e.rotate()).invert([0, 0]));
    return l(
      f == null
        ? [
            [y[0] - u, y[1] - u],
            [y[0] + u, y[1] + u],
          ]
        : t === h5
          ? [
              [Math.max(y[0] - u, f), i],
              [Math.min(y[0] + u, d), h],
            ]
          : [
              [f, Math.max(y[1] - u, i)],
              [d, Math.min(y[1] + u, h)],
            ],
    );
  }
  return p();
}
function c5(t, e) {
  return [t, e];
}
c5.invert = c5;
function H0() {
  return d5(c5).scale(152.63);
}
var e3 = 1.340264,
  n3 = -0.081106,
  o3 = 893e-6,
  i3 = 0.003796,
  $3 = g2(3) / 2,
  kt = 12;
function J0(t, e) {
  var o = A2($3 * f1(e)),
    n = o * o,
    a = n * n * n;
  return [
    (t * c1(o)) / ($3 * (e3 + 3 * n3 * n + a * (7 * o3 + 9 * i3 * n))),
    o * (e3 + n3 * n + a * (o3 + i3 * n)),
  ];
}
J0.invert = function (t, e) {
  for (
    var o = e, n = o * o, a = n * n * n, l = 0, f, i, d;
    l < kt &&
    ((i = o * (e3 + n3 * n + a * (o3 + i3 * n)) - e),
    (d = e3 + 3 * n3 * n + a * (7 * o3 + 9 * i3 * n)),
    (o -= f = i / d),
    (n = o * o),
    (a = n * n * n),
    !(r1(f) < M0));
    ++l
  );
  return [
    ($3 * t * (e3 + 3 * n3 * n + a * (7 * o3 + 9 * i3 * n))) / c1(o),
    A2(f1(o) / $3),
  ];
};
function Et() {
  return d5(J0).scale(177.158);
}
function Tt(t) {
  return t;
}
function Ct(t) {
  if (t == null) return Tt;
  var e,
    o,
    n = t.scale[0],
    a = t.scale[1],
    l = t.translate[0],
    f = t.translate[1];
  return function (i, d) {
    d || (e = o = 0);
    var h = 2,
      p = i.length,
      u = new Array(p);
    for (u[0] = (e += i[0]) * n + l, u[1] = (o += i[1]) * a + f; h < p;)
      ((u[h] = i[h]), ++h);
    return u;
  };
}
function Nt(t, e) {
  for (var o, n = t.length, a = n - e; a < --n;)
    ((o = t[a]), (t[a++] = t[n]), (t[n] = o));
}
function K0(t, e) {
  return (
    typeof e == "string" && (e = t.objects[e]),
    e.type === "GeometryCollection"
      ? {
          type: "FeatureCollection",
          features: e.geometries.map(function (o) {
            return y0(t, o);
          }),
        }
      : y0(t, e)
  );
}
function y0(t, e) {
  var o = e.id,
    n = e.bbox,
    a = e.properties == null ? {} : e.properties,
    l = Lt(t, e);
  return o == null && n == null
    ? {
        type: "Feature",
        properties: a,
        geometry: l,
      }
    : n == null
      ? {
          type: "Feature",
          id: o,
          properties: a,
          geometry: l,
        }
      : {
          type: "Feature",
          id: o,
          bbox: n,
          properties: a,
          geometry: l,
        };
}
function Lt(t, e) {
  var o = Ct(t.transform),
    n = t.arcs;
  function a(p, u) {
    u.length && u.pop();
    for (var y = n[p < 0 ? ~p : p], S = 0, v = y.length; S < v; ++S)
      u.push(o(y[S], S));
    p < 0 && Nt(u, v);
  }
  function l(p) {
    return o(p);
  }
  function f(p) {
    for (var u = [], y = 0, S = p.length; y < S; ++y) a(p[y], u);
    return (u.length < 2 && u.push(u[0]), u);
  }
  function i(p) {
    for (var u = f(p); u.length < 4;) u.push(u[0]);
    return u;
  }
  function d(p) {
    return p.map(i);
  }
  function h(p) {
    var u = p.type,
      y;
    switch (u) {
      case "GeometryCollection":
        return {
          type: u,
          geometries: p.geometries.map(h),
        };
      case "Point":
        y = l(p.coordinates);
        break;
      case "MultiPoint":
        y = p.coordinates.map(l);
        break;
      case "LineString":
        y = f(p.arcs);
        break;
      case "MultiLineString":
        y = p.arcs.map(f);
        break;
      case "Polygon":
        y = d(p.arcs);
        break;
      case "MultiPolygon":
        y = p.arcs.map(d);
        break;
      default:
        return null;
    }
    return {
      type: u,
      coordinates: y,
    };
  }
  return h(e);
}
const $t = JSON.parse(
    `{"countries":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1]]],"id":"242","properties":{"name":"Fiji"}},{"type":"Polygon","arcs":[[2,3,4,5,6,7,8,9,10]],"id":"834","properties":{"name":"Tanzania"}},{"type":"Polygon","arcs":[[11,12,13,14]],"id":"732","properties":{"name":"W. Sahara"}},{"type":"MultiPolygon","arcs":[[[15,16,17,18]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]]],"id":"124","properties":{"name":"Canada"}},{"type":"MultiPolygon","arcs":[[[-19,48,49,50]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[-17,58]],[[59]]],"id":"840","properties":{"name":"United States of America"}},{"type":"Polygon","arcs":[[60,61,62,63,64,65]],"id":"398","properties":{"name":"Kazakhstan"}},{"type":"Polygon","arcs":[[-63,66,67,68,69]],"id":"860","properties":{"name":"Uzbekistan"}},{"type":"MultiPolygon","arcs":[[[70,71]],[[72]],[[73]],[[74]]],"id":"598","properties":{"name":"Papua New Guinea"}},{"type":"MultiPolygon","arcs":[[[-72,75]],[[76,77]],[[78]],[[79,80]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]]],"id":"360","properties":{"name":"Indonesia"}},{"type":"MultiPolygon","arcs":[[[90,91]],[[92,93,94,95,96,97]]],"id":"032","properties":{"name":"Argentina"}},{"type":"MultiPolygon","arcs":[[[-92,98]],[[99,-95,100,101]]],"id":"152","properties":{"name":"Chile"}},{"type":"Polygon","arcs":[[-8,102,103,104,105,106,107,108,109,110,111]],"id":"180","properties":{"name":"Dem. Rep. Congo"}},{"type":"Polygon","arcs":[[112,113,114,115]],"id":"706","properties":{"name":"Somalia"}},{"type":"Polygon","arcs":[[-3,116,117,118,-113,119]],"id":"404","properties":{"name":"Kenya"}},{"type":"Polygon","arcs":[[120,121,122,123,124,125,126,127]],"id":"729","properties":{"name":"Sudan"}},{"type":"Polygon","arcs":[[-122,128,129,130,131]],"id":"148","properties":{"name":"Chad"}},{"type":"Polygon","arcs":[[132,133]],"id":"332","properties":{"name":"Haiti"}},{"type":"Polygon","arcs":[[-133,134]],"id":"214","properties":{"name":"Dominican Rep."}},{"type":"MultiPolygon","arcs":[[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[141,142,143]],[[144]],[[145]],[[146,147,148,149,-66,150,151,152,153,154,155,156,157,158,159,160,161]],[[162]],[[163,164]]],"id":"643","properties":{"name":"Russia"}},{"type":"MultiPolygon","arcs":[[[165]],[[166]],[[167]]],"id":"044","properties":{"name":"Bahamas"}},{"type":"Polygon","arcs":[[168]],"id":"238","properties":{"name":"Falkland Is."}},{"type":"MultiPolygon","arcs":[[[169]],[[-161,170,171,172]],[[173]],[[174]]],"id":"578","properties":{"name":"Norway"}},{"type":"Polygon","arcs":[[175]],"id":"304","properties":{"name":"Greenland"}},{"type":"Polygon","arcs":[[176]],"id":"260","properties":{"name":"Fr. S. Antarctic Lands"}},{"type":"Polygon","arcs":[[177,-77]],"id":"626","properties":{"name":"Timor-Leste"}},{"type":"Polygon","arcs":[[178,179,180,181,182,183,184],[185]],"id":"710","properties":{"name":"South Africa"}},{"type":"Polygon","arcs":[[-186]],"id":"426","properties":{"name":"Lesotho"}},{"type":"Polygon","arcs":[[-50,186,187,188,189]],"id":"484","properties":{"name":"Mexico"}},{"type":"Polygon","arcs":[[190,191,-93]],"id":"858","properties":{"name":"Uruguay"}},{"type":"Polygon","arcs":[[-191,-98,192,193,194,195,196,197,198,199,200]],"id":"076","properties":{"name":"Brazil"}},{"type":"Polygon","arcs":[[-194,201,-96,-100,202]],"id":"068","properties":{"name":"Bolivia"}},{"type":"Polygon","arcs":[[-195,-203,-102,203,204,205]],"id":"604","properties":{"name":"Peru"}},{"type":"Polygon","arcs":[[-196,-206,206,207,208,209,210]],"id":"170","properties":{"name":"Colombia"}},{"type":"Polygon","arcs":[[-209,211,212,213]],"id":"591","properties":{"name":"Panama"}},{"type":"Polygon","arcs":[[-213,214,215,216]],"id":"188","properties":{"name":"Costa Rica"}},{"type":"Polygon","arcs":[[-216,217,218,219]],"id":"558","properties":{"name":"Nicaragua"}},{"type":"Polygon","arcs":[[-219,220,221,222,223]],"id":"340","properties":{"name":"Honduras"}},{"type":"Polygon","arcs":[[-222,224,225]],"id":"222","properties":{"name":"El Salvador"}},{"type":"Polygon","arcs":[[-189,226,227,-223,-226,228]],"id":"320","properties":{"name":"Guatemala"}},{"type":"Polygon","arcs":[[-188,229,-227]],"id":"084","properties":{"name":"Belize"}},{"type":"Polygon","arcs":[[-197,-211,230,231]],"id":"862","properties":{"name":"Venezuela"}},{"type":"Polygon","arcs":[[-198,-232,232,233]],"id":"328","properties":{"name":"Guyana"}},{"type":"Polygon","arcs":[[-199,-234,234,235]],"id":"740","properties":{"name":"Suriname"}},{"type":"MultiPolygon","arcs":[[[-200,-236,236]],[[237,238,239,240,241,242,243,244]],[[245]]],"id":"250","properties":{"name":"France"}},{"type":"Polygon","arcs":[[-205,246,-207]],"id":"218","properties":{"name":"Ecuador"}},{"type":"Polygon","arcs":[[247]],"id":"630","properties":{"name":"Puerto Rico"}},{"type":"Polygon","arcs":[[248]],"id":"388","properties":{"name":"Jamaica"}},{"type":"Polygon","arcs":[[249]],"id":"192","properties":{"name":"Cuba"}},{"type":"Polygon","arcs":[[-181,250,251,252]],"id":"716","properties":{"name":"Zimbabwe"}},{"type":"Polygon","arcs":[[-180,253,254,-251]],"id":"072","properties":{"name":"Botswana"}},{"type":"Polygon","arcs":[[-179,255,256,257,-254]],"id":"516","properties":{"name":"Namibia"}},{"type":"Polygon","arcs":[[258,259,260,261,262,263,264]],"id":"686","properties":{"name":"Senegal"}},{"type":"Polygon","arcs":[[-261,265,266,267,268,269,270]],"id":"466","properties":{"name":"Mali"}},{"type":"Polygon","arcs":[[-13,271,-266,-260,272]],"id":"478","properties":{"name":"Mauritania"}},{"type":"Polygon","arcs":[[273,274,275,276,277]],"id":"204","properties":{"name":"Benin"}},{"type":"Polygon","arcs":[[-131,278,279,-277,280,-268,281,282]],"id":"562","properties":{"name":"Niger"}},{"type":"Polygon","arcs":[[-278,-280,283,284]],"id":"566","properties":{"name":"Nigeria"}},{"type":"Polygon","arcs":[[-130,285,286,287,288,289,-284,-279]],"id":"120","properties":{"name":"Cameroon"}},{"type":"Polygon","arcs":[[-275,290,291,292]],"id":"768","properties":{"name":"Togo"}},{"type":"Polygon","arcs":[[-292,293,294,295]],"id":"288","properties":{"name":"Ghana"}},{"type":"Polygon","arcs":[[-270,296,-295,297,298,299]],"id":"384","properties":{"name":"Côte d'Ivoire"}},{"type":"Polygon","arcs":[[-262,-271,-300,300,301,302,303]],"id":"324","properties":{"name":"Guinea"}},{"type":"Polygon","arcs":[[-263,-304,304]],"id":"624","properties":{"name":"Guinea-Bissau"}},{"type":"Polygon","arcs":[[-299,305,306,-301]],"id":"430","properties":{"name":"Liberia"}},{"type":"Polygon","arcs":[[-302,-307,307]],"id":"694","properties":{"name":"Sierra Leone"}},{"type":"Polygon","arcs":[[-269,-281,-276,-293,-296,-297]],"id":"854","properties":{"name":"Burkina Faso"}},{"type":"Polygon","arcs":[[-108,308,-286,-129,-121,309]],"id":"140","properties":{"name":"Central African Rep."}},{"type":"Polygon","arcs":[[-107,310,311,312,-287,-309]],"id":"178","properties":{"name":"Congo"}},{"type":"Polygon","arcs":[[-288,-313,313,314]],"id":"266","properties":{"name":"Gabon"}},{"type":"Polygon","arcs":[[-289,-315,315]],"id":"226","properties":{"name":"Eq. Guinea"}},{"type":"Polygon","arcs":[[-7,316,317,-252,-255,-258,318,-103]],"id":"894","properties":{"name":"Zambia"}},{"type":"Polygon","arcs":[[-6,319,-317]],"id":"454","properties":{"name":"Malawi"}},{"type":"Polygon","arcs":[[-5,320,-184,321,-182,-253,-318,-320]],"id":"508","properties":{"name":"Mozambique"}},{"type":"Polygon","arcs":[[-183,-322]],"id":"748","properties":{"name":"eSwatini"}},{"type":"MultiPolygon","arcs":[[[-106,322,-311]],[[-104,-319,-257,323]]],"id":"024","properties":{"name":"Angola"}},{"type":"Polygon","arcs":[[-9,-112,324]],"id":"108","properties":{"name":"Burundi"}},{"type":"Polygon","arcs":[[325,326,327,328,329,330,331]],"id":"376","properties":{"name":"Israel"}},{"type":"Polygon","arcs":[[-331,332,333]],"id":"422","properties":{"name":"Lebanon"}},{"type":"Polygon","arcs":[[334]],"id":"450","properties":{"name":"Madagascar"}},{"type":"Polygon","arcs":[[-327,335]],"id":"275","properties":{"name":"Palestine"}},{"type":"Polygon","arcs":[[-265,336]],"id":"270","properties":{"name":"Gambia"}},{"type":"Polygon","arcs":[[337,338,339]],"id":"788","properties":{"name":"Tunisia"}},{"type":"Polygon","arcs":[[-12,340,341,-338,342,-282,-267,-272]],"id":"012","properties":{"name":"Algeria"}},{"type":"Polygon","arcs":[[-326,343,344,345,346,-328,-336]],"id":"400","properties":{"name":"Jordan"}},{"type":"Polygon","arcs":[[347,348,349,350,351]],"id":"784","properties":{"name":"United Arab Emirates"}},{"type":"Polygon","arcs":[[352,353]],"id":"634","properties":{"name":"Qatar"}},{"type":"Polygon","arcs":[[354,355,356]],"id":"414","properties":{"name":"Kuwait"}},{"type":"Polygon","arcs":[[-345,357,358,359,360,-357,361]],"id":"368","properties":{"name":"Iraq"}},{"type":"MultiPolygon","arcs":[[[-351,362,363,364]],[[-349,365]]],"id":"512","properties":{"name":"Oman"}},{"type":"MultiPolygon","arcs":[[[366]],[[367]]],"id":"548","properties":{"name":"Vanuatu"}},{"type":"Polygon","arcs":[[368,369,370,371]],"id":"116","properties":{"name":"Cambodia"}},{"type":"Polygon","arcs":[[-369,372,373,374,375,376]],"id":"764","properties":{"name":"Thailand"}},{"type":"Polygon","arcs":[[-370,-377,377,378,379]],"id":"418","properties":{"name":"Laos"}},{"type":"Polygon","arcs":[[-376,380,381,382,383,-378]],"id":"104","properties":{"name":"Myanmar"}},{"type":"Polygon","arcs":[[-371,-380,384,385]],"id":"704","properties":{"name":"Vietnam"}},{"type":"MultiPolygon","arcs":[[[386,386,386]],[[-147,387,388,389,390]]],"id":"408","properties":{"name":"North Korea"}},{"type":"Polygon","arcs":[[-389,391]],"id":"410","properties":{"name":"South Korea"}},{"type":"Polygon","arcs":[[-149,392]],"id":"496","properties":{"name":"Mongolia"}},{"type":"Polygon","arcs":[[-383,393,394,395,396,397,398,399,400]],"id":"356","properties":{"name":"India"}},{"type":"Polygon","arcs":[[-382,401,-394]],"id":"050","properties":{"name":"Bangladesh"}},{"type":"Polygon","arcs":[[-400,402]],"id":"064","properties":{"name":"Bhutan"}},{"type":"Polygon","arcs":[[-398,403]],"id":"524","properties":{"name":"Nepal"}},{"type":"Polygon","arcs":[[-396,404,405,406,407]],"id":"586","properties":{"name":"Pakistan"}},{"type":"Polygon","arcs":[[-69,408,409,-407,410,411]],"id":"004","properties":{"name":"Afghanistan"}},{"type":"Polygon","arcs":[[-68,412,413,-409]],"id":"762","properties":{"name":"Tajikistan"}},{"type":"Polygon","arcs":[[-62,414,-413,-67]],"id":"417","properties":{"name":"Kyrgyzstan"}},{"type":"Polygon","arcs":[[-64,-70,-412,415,416]],"id":"795","properties":{"name":"Turkmenistan"}},{"type":"Polygon","arcs":[[-360,417,418,419,420,421,-416,-411,-406,422]],"id":"364","properties":{"name":"Iran"}},{"type":"Polygon","arcs":[[-332,-334,423,424,-358,-344]],"id":"760","properties":{"name":"Syria"}},{"type":"Polygon","arcs":[[-420,425,426,427,428]],"id":"051","properties":{"name":"Armenia"}},{"type":"Polygon","arcs":[[-172,429,430]],"id":"752","properties":{"name":"Sweden"}},{"type":"Polygon","arcs":[[-156,431,432,433,434]],"id":"112","properties":{"name":"Belarus"}},{"type":"Polygon","arcs":[[-155,435,-164,436,437,438,439,440,441,442,-432]],"id":"804","properties":{"name":"Ukraine"}},{"type":"Polygon","arcs":[[-433,-443,443,444,445,446,-142,447]],"id":"616","properties":{"name":"Poland"}},{"type":"Polygon","arcs":[[448,449,450,451,452,453,454]],"id":"040","properties":{"name":"Austria"}},{"type":"Polygon","arcs":[[-441,455,456,457,458,-449,459]],"id":"348","properties":{"name":"Hungary"}},{"type":"Polygon","arcs":[[-439,460]],"id":"498","properties":{"name":"Moldova"}},{"type":"Polygon","arcs":[[-438,461,462,463,-456,-440,-461]],"id":"642","properties":{"name":"Romania"}},{"type":"Polygon","arcs":[[-434,-448,-144,464,465]],"id":"440","properties":{"name":"Lithuania"}},{"type":"Polygon","arcs":[[-157,-435,-466,466,467]],"id":"428","properties":{"name":"Latvia"}},{"type":"Polygon","arcs":[[-158,-468,468]],"id":"233","properties":{"name":"Estonia"}},{"type":"Polygon","arcs":[[-446,469,-453,470,-238,471,472,473,474,475,476]],"id":"276","properties":{"name":"Germany"}},{"type":"Polygon","arcs":[[-463,477,478,479,480,481]],"id":"100","properties":{"name":"Bulgaria"}},{"type":"MultiPolygon","arcs":[[[482]],[[-480,483,484,485,486]]],"id":"300","properties":{"name":"Greece"}},{"type":"MultiPolygon","arcs":[[[-359,-425,487,488,-427,-418]],[[-479,489,-484]]],"id":"792","properties":{"name":"Turkey"}},{"type":"Polygon","arcs":[[-486,490,491,492,493]],"id":"008","properties":{"name":"Albania"}},{"type":"Polygon","arcs":[[-458,494,495,496,497,498]],"id":"191","properties":{"name":"Croatia"}},{"type":"Polygon","arcs":[[-452,499,-239,-471]],"id":"756","properties":{"name":"Switzerland"}},{"type":"Polygon","arcs":[[-472,-245,500]],"id":"442","properties":{"name":"Luxembourg"}},{"type":"Polygon","arcs":[[-473,-501,-244,501,502]],"id":"056","properties":{"name":"Belgium"}},{"type":"Polygon","arcs":[[-474,-503,503]],"id":"528","properties":{"name":"Netherlands"}},{"type":"Polygon","arcs":[[504,505]],"id":"620","properties":{"name":"Portugal"}},{"type":"Polygon","arcs":[[-505,506,-242,507]],"id":"724","properties":{"name":"Spain"}},{"type":"Polygon","arcs":[[508,509]],"id":"372","properties":{"name":"Ireland"}},{"type":"Polygon","arcs":[[510]],"id":"540","properties":{"name":"New Caledonia"}},{"type":"MultiPolygon","arcs":[[[511]],[[512]],[[513]],[[514]],[[515]]],"id":"090","properties":{"name":"Solomon Is."}},{"type":"MultiPolygon","arcs":[[[516]],[[517]]],"id":"554","properties":{"name":"New Zealand"}},{"type":"MultiPolygon","arcs":[[[518]],[[519]]],"id":"036","properties":{"name":"Australia"}},{"type":"Polygon","arcs":[[520]],"id":"144","properties":{"name":"Sri Lanka"}},{"type":"MultiPolygon","arcs":[[[521]],[[-61,-150,-393,-148,-391,522,-385,-379,-384,-401,-403,-399,-404,-397,-408,-410,-414,-415]]],"id":"156","properties":{"name":"China"}},{"type":"Polygon","arcs":[[523]],"id":"158","properties":{"name":"Taiwan"}},{"type":"MultiPolygon","arcs":[[[-451,524,525,-240,-500]],[[526]],[[527]]],"id":"380","properties":{"name":"Italy"}},{"type":"MultiPolygon","arcs":[[[-476,528]],[[529]]],"id":"208","properties":{"name":"Denmark"}},{"type":"MultiPolygon","arcs":[[[-510,530]],[[531]]],"id":"826","properties":{"name":"United Kingdom"}},{"type":"Polygon","arcs":[[532]],"id":"352","properties":{"name":"Iceland"}},{"type":"MultiPolygon","arcs":[[[-152,533,-421,-429,534]],[[-419,-426]]],"id":"031","properties":{"name":"Azerbaijan"}},{"type":"Polygon","arcs":[[-153,-535,-428,-489,535]],"id":"268","properties":{"name":"Georgia"}},{"type":"MultiPolygon","arcs":[[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]]],"id":"608","properties":{"name":"Philippines"}},{"type":"MultiPolygon","arcs":[[[-374,543]],[[-81,544,545,546]]],"id":"458","properties":{"name":"Malaysia"}},{"type":"Polygon","arcs":[[-546,547]],"id":"096","properties":{"name":"Brunei"}},{"type":"Polygon","arcs":[[-450,-459,-499,548,-525]],"id":"705","properties":{"name":"Slovenia"}},{"type":"Polygon","arcs":[[-160,549,-430,-171]],"id":"246","properties":{"name":"Finland"}},{"type":"Polygon","arcs":[[-442,-460,-455,550,-444]],"id":"703","properties":{"name":"Slovakia"}},{"type":"Polygon","arcs":[[-445,-551,-454,-470]],"id":"203","properties":{"name":"Czechia"}},{"type":"Polygon","arcs":[[-126,551,552,553]],"id":"232","properties":{"name":"Eritrea"}},{"type":"MultiPolygon","arcs":[[[554]],[[555]],[[556]]],"id":"392","properties":{"name":"Japan"}},{"type":"Polygon","arcs":[[-193,-97,-202]],"id":"600","properties":{"name":"Paraguay"}},{"type":"Polygon","arcs":[[-364,557,558]],"id":"887","properties":{"name":"Yemen"}},{"type":"Polygon","arcs":[[-346,-362,-356,559,-354,560,-352,-365,-559,561]],"id":"682","properties":{"name":"Saudi Arabia"}},{"type":"MultiPolygon","arcs":[[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]]],"id":"010","properties":{"name":"Antarctica"}},{"type":"Polygon","arcs":[[570,571]],"properties":{"name":"N. Cyprus"}},{"type":"Polygon","arcs":[[-572,572]],"id":"196","properties":{"name":"Cyprus"}},{"type":"Polygon","arcs":[[-341,-15,573]],"id":"504","properties":{"name":"Morocco"}},{"type":"Polygon","arcs":[[-124,574,575,-329,576]],"id":"818","properties":{"name":"Egypt"}},{"type":"Polygon","arcs":[[-123,-132,-283,-343,-340,577,-575]],"id":"434","properties":{"name":"Libya"}},{"type":"Polygon","arcs":[[-114,-119,578,-127,-554,579,580]],"id":"231","properties":{"name":"Ethiopia"}},{"type":"Polygon","arcs":[[-553,581,582,-580]],"id":"262","properties":{"name":"Djibouti"}},{"type":"Polygon","arcs":[[-115,-581,-583,583]],"properties":{"name":"Somaliland"}},{"type":"Polygon","arcs":[[-11,584,-110,585,-117]],"id":"800","properties":{"name":"Uganda"}},{"type":"Polygon","arcs":[[-10,-325,-111,-585]],"id":"646","properties":{"name":"Rwanda"}},{"type":"Polygon","arcs":[[-496,586,587]],"id":"070","properties":{"name":"Bosnia and Herz."}},{"type":"Polygon","arcs":[[-481,-487,-494,588,589]],"id":"807","properties":{"name":"Macedonia"}},{"type":"Polygon","arcs":[[-457,-464,-482,-590,590,591,-587,-495]],"id":"688","properties":{"name":"Serbia"}},{"type":"Polygon","arcs":[[-492,592,-497,-588,-592,593]],"id":"499","properties":{"name":"Montenegro"}},{"type":"Polygon","arcs":[[-493,-594,-591,-589]],"properties":{"name":"Kosovo"}},{"type":"Polygon","arcs":[[594]],"id":"780","properties":{"name":"Trinidad and Tobago"}},{"type":"Polygon","arcs":[[-109,-310,-128,-579,-118,-586]],"id":"728","properties":{"name":"S. Sudan"}}]},"land":{"type":"GeometryCollection","geometries":[{"type":"MultiPolygon","arcs":[[[0]],[[1]],[[3,320,184,255,323,104,322,311,313,315,289,284,273,290,293,297,305,307,302,304,263,336,258,272,13,573,341,338,577,575,329,332,423,487,535,153,435,164,436,461,477,489,484,490,592,497,548,525,240,507,505,506,242,501,503,474,528,476,446,142,464,466,468,158,549,430,172,161,387,391,389,522,385,371,372,543,374,380,401,394,404,422,360,354,559,352,560,347,365,349,362,557,561,346,576,124,551,581,583,115,119],[421,416,64,150,533]],[[17,48,186,229,227,223,219,216,213,209,230,232,234,236,200,191,93,100,203,246,207,211,214,217,220,224,228,189,50,15,58]],[[19]],[[20]],[[21]],[[22]],[[23]],[[24]],[[25]],[[26]],[[27]],[[28]],[[29]],[[30]],[[31]],[[32]],[[33]],[[34]],[[35]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[47]],[[51]],[[52]],[[53]],[[54]],[[55]],[[56]],[[57]],[[59]],[[70,75]],[[72]],[[73]],[[74]],[[77,177]],[[78]],[[546,79,544,547]],[[81]],[[82]],[[83]],[[84]],[[85]],[[86]],[[87]],[[88]],[[89]],[[90,98]],[[133,134]],[[135]],[[136]],[[137]],[[138]],[[139]],[[140]],[[144]],[[145]],[[162]],[[165]],[[166]],[[167]],[[168]],[[169]],[[173]],[[174]],[[175]],[[176]],[[245]],[[247]],[[248]],[[249]],[[334]],[[366]],[[367]],[[482]],[[508,530]],[[510]],[[511]],[[512]],[[513]],[[514]],[[515]],[[516]],[[517]],[[518]],[[519]],[[520]],[[521]],[[523]],[[526]],[[527]],[[529]],[[531]],[[532]],[[536]],[[537]],[[538]],[[539]],[[540]],[[541]],[[542]],[[554]],[[555]],[[556]],[[562]],[[563]],[[564]],[[565]],[[566]],[[567]],[[568]],[[569]],[[570,572]],[[594]]]}]}}`,
  ),
  It = JSON.parse(
    "[[[99478,40237],[69,98],[96,-171],[-46,-308],[-172,-81],[-153,73],[-27,260],[107,203],[126,-74]],[[0,41087],[57,27],[-34,-284],[-23,-32],[99822,-145],[-177,-124],[-36,220],[139,121],[88,33],[163,184],[-99999,0]],[[59417,50018],[47,-65],[1007,-1203],[19,-343],[399,-590]],[[60889,47817],[-128,-728],[16,-335],[178,-216],[8,-153],[-76,-357],[16,-180],[-18,-282],[97,-370],[115,-583],[101,-129]],[[61198,44484],[-221,-342],[-303,-230],[-167,10],[-99,-177],[-193,-16],[-73,-74],[-334,166],[-209,-48]],[[59599,43773],[-77,804],[-95,275],[-55,164],[-273,110]],[[59099,45126],[-157,177],[-177,100],[-111,99],[-116,150]],[[58538,45652],[-150,745],[-161,330],[-55,343],[27,307],[-50,544]],[[58149,47921],[115,28],[101,214],[108,308],[69,124],[-3,192],[-60,134],[-16,233]],[[58463,49154],[80,74],[16,348],[-110,333]],[[58449,49909],[98,71],[304,-7],[566,45]],[[47592,66920],[1,-40],[-6,-114]],[[47587,66766],[-1,-895],[-911,31],[9,-1512],[-261,-53],[-68,-304],[53,-853],[-1088,4],[-60,-197]],[[45260,62987],[12,249]],[[45272,63236],[5,-1],[625,48],[33,213],[114,265],[92,816],[386,637],[131,745],[86,44],[91,460],[234,63],[100,-76],[126,0],[90,134],[172,19],[-7,317],[42,0]],[[15878,79530],[-38,1],[-537,581],[-199,255],[-503,244],[-155,523],[40,363],[-356,252],[-48,476],[-336,429],[-6,304]],[[13740,82958],[154,285],[-7,373],[-473,376],[-284,674],[-173,424],[-255,266],[-187,242],[-147,306],[-279,-192],[-270,-330],[-247,388],[-194,259],[-271,164],[-273,17],[1,3364],[2,2193]],[[10837,91767],[518,-142],[438,-285],[289,-54],[244,247],[336,184],[413,-72],[416,259],[455,148],[191,-245],[207,138],[62,278],[192,-63],[470,-530],[369,401],[38,-449],[341,97],[105,173],[337,-34],[424,-248],[650,-217],[383,-100],[272,38],[374,-300],[-390,-293],[502,-127],[750,70],[236,103],[296,-354],[302,299],[-283,251],[179,202],[338,27],[223,59],[224,-141],[279,-321],[310,47],[491,-266],[431,94],[405,-14],[-32,367],[247,103],[431,-200],[-2,-559],[177,471],[223,-16],[126,594],[-298,364],[-324,239],[22,653],[329,429],[366,-95],[281,-261],[378,-666],[-247,-290],[517,-120],[-1,-604],[371,463],[332,-380],[-83,-438],[269,-399],[290,427],[202,510],[16,649],[394,-46],[411,-87],[373,-293],[17,-293],[-207,-315],[196,-316],[-36,-288],[-544,-413],[-386,-91],[-287,178],[-83,-297],[-268,-498],[-81,-259],[-322,-399],[-397,-39],[-220,-250],[-18,-384],[-323,-74],[-340,-479],[-301,-665],[-108,-466],[-16,-686],[409,-99],[125,-553],[130,-448],[388,117],[517,-256],[277,-225],[199,-279],[348,-163],[294,-248],[459,-34],[302,-58],[-45,-511],[86,-594],[201,-661],[414,-561],[214,192],[150,607],[-145,934],[-196,311],[445,276],[314,415],[154,411],[-23,395],[-188,502],[-338,445],[328,619],[-121,535],[-93,922],[194,137],[476,-161],[286,-57],[230,155],[258,-200],[342,-343],[85,-229],[495,-45],[-8,-496],[92,-747],[254,-92],[201,-348],[402,328],[266,652],[184,274],[216,-527],[362,-754],[307,-709],[-112,-371],[370,-333],[250,-338],[442,-152],[179,-189],[110,-500],[216,-78],[112,-223],[20,-664],[-202,-222],[-199,-207],[-458,-210],[-349,-486],[-470,-96],[-594,125],[-417,4],[-287,-41],[-233,-424],[-354,-262],[-401,-782],[-320,-545],[236,97],[446,776],[583,493],[415,58],[246,-289],[-262,-397],[88,-637],[91,-446],[361,-295],[459,86],[278,664],[19,-429],[180,-214],[-344,-387],[-615,-351],[-276,-239],[-310,-426],[-211,44],[-11,500],[483,488],[-445,-19],[-309,-72]],[[31350,77248],[-181,334],[0,805],[-123,171],[-187,-100],[-92,155],[-212,-446],[-84,-460],[-99,-269],[-118,-91],[-89,-30],[-28,-146],[-512,0],[-422,-4],[-125,-109],[-294,-425],[-34,-46],[-89,-231],[-255,1],[-273,-3],[-125,-93],[44,-116],[25,-181],[-5,-60],[-363,-293],[-286,-93],[-323,-316],[-70,0],[-94,93],[-31,85],[6,61],[61,207],[131,325],[81,349],[-56,514],[-59,536],[-290,277],[35,105],[-41,73],[-76,0],[-56,93],[-14,140],[-54,-61],[-75,18],[17,59],[-65,58],[-27,155],[-216,189],[-224,197],[-272,229],[-261,214],[-248,-167],[-91,-6],[-342,154],[-225,-77],[-269,183],[-284,94],[-194,36],[-86,100],[-49,325],[-94,-3],[-1,-227],[-575,0],[-951,0],[-944,0],[-833,0],[-834,0],[-819,0],[-847,0],[-273,0],[-824,0],[-789,0]],[[26668,87478],[207,273],[381,-6],[-6,-114],[-325,-326],[-196,13],[-61,160]],[[27840,93593],[-306,313],[12,213],[133,39],[636,-63],[479,-325],[25,-163],[-296,17],[-299,13],[-304,-80],[-80,36]],[[27690,87261],[107,177],[114,-13],[70,-121],[-108,-310],[-123,50],[-73,176],[13,41]],[[23996,94879],[-151,-229],[-403,44],[-337,155],[148,266],[399,159],[243,-208],[101,-187]],[[23933,96380],[-126,-17],[-521,38],[-74,165],[559,-9],[195,-109],[-33,-68]],[[23124,97116],[332,-205],[-76,-214],[-411,-122],[-226,138],[-119,221],[-22,245],[360,-24],[162,-39]],[[25514,94532],[-449,73],[-738,190],[-96,325],[-34,293],[-279,258],[-574,72],[-322,183],[104,242],[573,-37],[308,-190],[547,1],[240,-194],[-64,-222],[319,-134],[177,-140],[374,-26],[406,-50],[441,128],[566,51],[451,-42],[298,-223],[62,-244],[-174,-157],[-414,-127],[-355,72],[-797,-91],[-570,-11]],[[19093,96754],[392,-92],[-93,-177],[-518,-170],[-411,191],[224,188],[406,60]],[[19177,97139],[361,-120],[-339,-115],[-461,1],[5,84],[285,177],[149,-27]],[[34555,80899],[-148,-372],[-184,-517],[181,199],[187,-126],[-98,-206],[247,-162],[128,144],[277,-182],[-86,-433],[194,101],[36,-313],[86,-367],[-117,-520],[-125,-22],[-183,111],[60,484],[-77,75],[-322,-513],[-166,21],[196,277],[-267,144],[-298,-35],[-539,18],[-43,175],[173,208],[-121,160],[234,356],[287,941],[172,336],[241,204],[129,-26],[-54,-160]],[[26699,89048],[304,-203],[318,-184],[25,-281],[204,46],[199,-196],[-247,-186],[-432,142],[-156,266],[-275,-314],[-396,-306],[-95,346],[-377,-57],[242,292],[35,465],[95,542],[201,-49],[51,-259],[143,91],[161,-155]],[[28119,93327],[263,235],[616,-299],[383,-282],[36,-258],[515,134],[290,-376],[670,-234],[242,-238],[263,-553],[-510,-275],[654,-386],[441,-130],[400,-543],[437,-39],[-87,-414],[-487,-687],[-342,253],[-437,568],[-359,-74],[-35,-338],[292,-344],[377,-272],[114,-157],[181,-584],[-96,-425],[-350,160],[-697,473],[393,-509],[289,-357],[45,-206],[-753,236],[-596,343],[-337,287],[97,167],[-414,304],[-405,286],[5,-171],[-803,-94],[-235,203],[183,435],[522,10],[571,76],[-92,211],[96,294],[360,576],[-77,261],[-107,203],[-425,286],[-563,201],[178,150],[-294,367],[-245,34],[-219,201],[-149,-175],[-503,-76],[-1011,132],[-588,174],[-450,89],[-231,207],[290,270],[-394,2],[-88,599],[213,528],[286,241],[717,158],[-204,-382],[219,-369],[256,477],[704,242],[477,-611],[-42,-387],[550,172]],[[23749,94380],[579,-20],[530,-144],[-415,-526],[-331,-115],[-298,-442],[-317,22],[-173,519],[4,294],[145,251],[276,161]],[[15873,95551],[472,442],[570,383],[426,-9],[381,87],[-38,-454],[-214,-205],[-259,-29],[-517,-252],[-444,-91],[-377,128]],[[13136,82508],[267,47],[-84,-671],[242,-475],[-111,1],[-167,270],[-103,272],[-140,184],[-51,260],[16,188],[131,-76]],[[20696,97433],[546,-81],[751,-215],[212,-281],[108,-247],[-453,66],[-457,192],[-619,21],[268,176],[-335,142],[-21,227]],[[15692,79240],[-140,-82],[-456,269],[-84,209],[-248,207],[-50,168],[-286,107],[-107,321],[24,137],[291,-129],[171,-89],[261,-63],[94,-204],[138,-280],[277,-244],[115,-327]],[[16239,94566],[397,-123],[709,-33],[270,-171],[298,-249],[-349,-149],[-681,-415],[-344,-414],[0,-257],[-731,-285],[-147,259],[-641,312],[119,250],[192,432],[241,388],[-272,362],[939,93]],[[20050,95391],[247,99],[291,-26],[49,-289],[-169,-281],[-940,-91],[-701,-256],[-423,-14],[-35,193],[577,261],[-1255,-70],[-389,106],[379,577],[262,165],[782,-199],[493,-350],[485,-45],[-397,565],[255,215],[286,-68],[94,-282],[109,-210]],[[20410,93755],[311,-239],[175,-575],[86,-417],[466,-293],[502,-279],[-31,-260],[-456,-48],[178,-227],[-94,-217],[-503,93],[-478,160],[-322,-36],[-522,-201],[-704,-88],[-494,-56],[-151,279],[-379,161],[-246,-66],[-343,468],[185,62],[429,101],[392,-26],[362,103],[-537,138],[-594,-47],[-394,12],[-146,217],[644,237],[-428,-9],[-485,156],[233,443],[193,235],[744,359],[284,-114],[-139,-277],[618,179],[386,-298],[314,302],[254,-194],[227,-580],[140,244],[-197,606],[244,86],[276,-94]],[[22100,93536],[-306,386],[329,286],[331,-124],[496,75],[72,-172],[-259,-283],[420,-254],[-50,-532],[-455,-229],[-268,50],[-192,225],[-690,456],[5,189],[567,-73]],[[20389,94064],[372,24],[211,-130],[-244,-390],[-434,413],[95,83]],[[22639,95907],[212,-273],[9,-303],[-127,-440],[-458,-60],[-298,94],[5,345],[-455,-46],[-18,457],[299,-18],[419,201],[390,-34],[22,77]],[[23329,98201],[192,180],[285,42],[-122,135],[646,30],[355,-315],[468,-127],[455,-112],[220,-390],[334,-190],[-381,-176],[-513,-445],[-492,-42],[-575,76],[-299,240],[4,215],[220,157],[-508,-4],[-306,196],[-176,268],[193,262]],[[24559,98965],[413,112],[324,19],[545,96],[409,220],[344,-30],[300,-166],[211,319],[367,95],[498,65],[849,24],[148,-63],[802,100],[601,-38],[602,-37],[742,-47],[597,-75],[508,-161],[-12,-157],[-678,-257],[-672,-119],[-251,-133],[605,3],[-656,-358],[-452,-167],[-476,-483],[-573,-98],[-177,-120],[-841,-64],[383,-74],[-192,-105],[230,-292],[-264,-202],[-429,-167],[-132,-232],[-388,-176],[39,-134],[475,23],[6,-144],[-742,-355],[-726,163],[-816,-91],[-414,71],[-525,31],[-35,284],[514,133],[-137,427],[170,41],[742,-255],[-379,379],[-450,113],[225,229],[492,141],[79,206],[-392,231],[-118,304],[759,-26],[220,-64],[433,216],[-625,68],[-972,-38],[-491,201],[-232,239],[-324,173],[-61,202]],[[29106,90427],[-180,-174],[-312,-30],[-69,289],[118,331],[255,82],[217,-163],[3,-253],[-32,-82]],[[23262,91636],[169,-226],[-173,-207],[-374,179],[-226,-65],[-380,266],[245,183],[194,256],[295,-168],[166,-106],[84,-112]],[[32078,80046],[96,49],[365,-148],[284,-247],[8,-108],[-135,-11],[-360,186],[-258,279]],[[32218,78370],[97,-288],[202,-79],[257,16],[-137,-242],[-102,-38],[-353,250],[-69,198],[105,183]],[[31350,77248],[48,-194],[-296,-286],[-286,-204],[-293,-175],[-147,-351],[-47,-133],[-3,-313],[92,-313],[115,-15],[-29,216],[83,-131],[-22,-169],[-188,-96],[-133,11],[-205,-103],[-121,-29],[-162,-29],[-231,-171],[408,111],[82,-112],[-389,-177],[-177,-1],[8,72],[-84,-164],[82,-27],[-60,-424],[-203,-455],[-20,152],[-61,30],[-91,148],[57,-318],[69,-105],[5,-223],[-89,-230],[-157,-472],[-25,24],[86,402],[-142,225],[-33,491],[-53,-255],[59,-375],[-183,93],[191,-191],[12,-562],[79,-41],[29,-204],[39,-591],[-176,-439],[-288,-175],[-182,-346],[-139,-38],[-141,-217],[-39,-199],[-305,-383],[-157,-281],[-131,-351],[-43,-419],[50,-411],[92,-505],[124,-418],[1,-256],[132,-685],[-9,-398],[-12,-230],[-69,-361],[-83,-75],[-137,72],[-44,259],[-105,136],[-148,508],[-129,452],[-42,231],[57,393],[-77,325],[-217,494],[-108,90],[-281,-268],[-49,30],[-135,275],[-174,147],[-314,-75],[-247,66],[-212,-41],[-114,-92],[50,-157],[-5,-240],[59,-117],[-53,-77],[-103,87],[-104,-112],[-202,18],[-207,312],[-242,-73],[-202,137],[-173,-42],[-234,-138],[-253,-438],[-276,-255],[-152,-282],[-63,-266],[-3,-407],[14,-284],[52,-201]],[[23016,65864],[-108,-18],[-197,130],[-217,184],[-78,277],[-61,414],[-164,337],[-96,346],[-139,404],[-196,236],[-227,-11],[-175,-467],[-230,177],[-144,178],[-69,325],[-92,309],[-165,260],[-142,186],[-102,210],[-481,0],[0,-244],[-221,0],[-552,-4],[-634,416],[-419,287],[26,116],[-353,-64],[-316,-46]],[[17464,69802],[-46,302],[-180,340],[-130,71],[-30,169],[-156,30],[-100,159],[-258,59],[-71,95],[-33,324],[-270,594],[-231,821],[10,137],[-123,195],[-215,495],[-38,482],[-148,323],[61,489],[-10,507],[-89,453],[109,557],[34,536],[33,536],[-50,792],[-88,506],[-80,274],[33,115],[402,-200],[148,-558],[69,156],[-45,484],[-94,485]],[[6833,62443],[49,-51],[45,-79],[71,-207],[-7,-33],[-108,-126],[-89,-92],[-41,-99],[-69,84],[8,165],[-46,216],[14,65],[48,97],[-19,116],[16,55],[21,-11],[107,-100]],[[6668,62848],[-23,-71],[-94,-43],[-47,125],[-32,48],[-3,37],[27,50],[99,-56],[73,-90]],[[6456,63091],[-9,-63],[-149,17],[21,72],[137,-26]],[[6104,63411],[23,-38],[80,-196],[-15,-34],[-19,8],[-97,21],[-35,133],[-11,24],[74,82]],[[5732,63705],[5,-138],[-33,-58],[-93,107],[14,43],[43,58],[64,-12]],[[3759,86256],[220,-54],[27,-226],[-171,-92],[-182,110],[-168,161],[274,101]],[[7436,84829],[185,-40],[117,-183],[-240,-281],[-277,-225],[-142,152],[-43,277],[252,210],[148,90]],[[13740,82958],[-153,223],[-245,188],[-78,515],[-358,478],[-150,558],[-267,38],[-441,15],[-326,170],[-574,613],[-266,112],[-486,211],[-385,-51],[-546,272],[-330,252],[-309,-125],[58,-411],[-154,-38],[-321,-123],[-245,-199],[-308,-126],[-39,348],[125,580],[295,182],[-76,148],[-354,-329],[-190,-394],[-400,-420],[203,-287],[-262,-424],[-299,-248],[-278,-180],[-69,-261],[-434,-305],[-87,-278],[-325,-252],[-191,45],[-259,-165],[-282,-201],[-231,-197],[-477,-169],[-43,99],[304,276],[271,182],[296,324],[345,66],[137,243],[385,353],[62,119],[205,208],[48,448],[141,349],[-320,-179],[-90,102],[-150,-215],[-181,300],[-75,-212],[-104,294],[-278,-236],[-170,0],[-24,352],[50,216],[-179,211],[-361,-113],[-235,277],[-190,142],[-1,334],[-214,252],[108,340],[226,330],[99,303],[225,43],[191,-94],[224,285],[201,-51],[212,183],[-52,270],[-155,106],[205,228],[-170,-7],[-295,-128],[-85,-131],[-219,131],[-392,-67],[-407,142],[-117,238],[-351,343],[390,247],[620,289],[228,0],[-38,-296],[586,23],[-225,366],[-342,225],[-197,296],[-267,252],[-381,187],[155,309],[493,19],[350,270],[66,287],[284,281],[271,68],[526,262],[256,-40],[427,315],[421,-124],[201,-266],[123,114],[469,-35],[-16,-136],[425,-101],[283,59],[585,-186],[534,-56],[214,-77],[370,96],[421,-177],[302,-83]],[[2297,88264],[171,-113],[173,61],[225,-156],[276,-79],[-23,-64],[-211,-125],[-211,128],[-106,107],[-245,-34],[-66,52],[17,223]],[[74266,79657],[-212,-393],[-230,-56],[-13,-592],[-155,-267],[-551,194],[-200,-1058],[-143,-131],[-550,-236],[250,-1026],[-190,-154],[22,-337]],[[72294,75601],[-171,87],[-140,212],[-412,62],[-461,16],[-100,-65],[-396,248],[-158,-122],[-43,-349],[-457,204],[-183,-84],[-62,-259]],[[69711,75551],[-159,-109],[-367,-412],[-121,-422],[-104,-4],[-76,280],[-353,19],[-57,484],[-135,4],[21,593],[-333,431],[-476,-46],[-326,-86],[-265,533],[-227,223],[-431,423],[-52,51],[-715,-349],[11,-2178]],[[65546,74986],[-142,-29],[-195,463],[-188,166],[-315,-123],[-123,-197]],[[64583,75266],[-15,144],[68,246],[-53,206],[-322,202],[-125,530],[-154,150],[-9,192],[270,-56],[11,432],[236,96],[243,-88],[50,576],[-50,365],[-278,-28],[-236,144],[-321,-260],[-259,-124]],[[63639,77993],[-142,96],[29,304],[-177,395],[-207,-17],[-235,401],[160,448],[-81,120],[222,649],[285,-342],[35,431],[573,643],[434,15],[612,-409],[329,-239],[295,249],[440,12],[356,-306],[80,175],[391,-25],[69,280],[-450,406],[267,288],[-52,161],[266,153],[-200,405],[127,202],[1039,205],[136,146],[695,218],[250,245],[499,-127],[88,-612],[290,144],[356,-202],[-23,-322],[267,33],[696,558],[-102,-185],[355,-457],[620,-1500],[148,309],[383,-340],[399,151],[154,-106],[133,-341],[194,-115],[119,-251],[358,79],[147,-361]],[[69711,75551],[83,-58],[-234,-382],[205,-223],[198,147],[329,-311],[-355,-425],[-212,58]],[[69725,74357],[-114,-15],[-40,164],[58,274],[-371,-137],[-89,-380],[-132,-326],[-232,28],[-72,-261],[204,-140],[60,-440],[-156,-598]],[[68841,72526],[-210,124],[-154,4]],[[68477,72654],[7,362],[-369,253],[-291,289],[-181,278],[-317,408],[-137,609],[-93,108],[-301,-27],[-106,121],[-30,471],[-374,312],[-234,-343],[-237,-204],[45,-297],[-313,-8]],[[89166,49043],[482,-407],[513,-338],[192,-302],[154,-297],[43,-349],[462,-365],[68,-313],[-256,-64],[62,-393],[248,-388],[180,-627],[159,20],[-11,-262],[215,-100],[-84,-111],[295,-249],[-30,-171],[-184,-41],[-69,153],[-238,66],[-281,89],[-216,377],[-158,325],[-144,517],[-362,259],[-235,-169],[-170,-195],[35,-436],[-218,-203],[-155,99],[-288,25]],[[89175,45193],[-4,1925],[-5,1925]],[[92399,48417],[106,-189],[33,-307],[-87,-157],[-52,348],[-65,229],[-126,193],[-158,252],[-200,174],[77,143],[150,-166],[94,-130],[117,-142],[111,-248]],[[92027,47129],[-152,-144],[-142,-138],[-148,1],[-228,171],[-158,165],[23,183],[249,-86],[152,46],[42,283],[40,15],[27,-314],[158,45],[78,202],[155,211],[-30,348],[166,11],[56,-97],[-5,-327],[-93,-361],[-146,-48],[-44,-166]],[[92988,47425],[84,-134],[135,-375],[131,-200],[-39,-166],[-78,-59],[-120,227],[-122,375],[-59,450],[38,57],[30,-175]],[[89175,45193],[-247,485],[-282,118],[-69,-168],[-352,-18],[118,481],[175,164],[-72,642],[-134,496],[-538,500],[-229,50],[-417,546],[-82,-287],[-107,-52],[-63,216],[-1,257],[-212,290],[299,213],[198,-11],[-23,156],[-407,1],[-110,352],[-248,109],[-117,293],[374,143],[142,192],[446,-242],[44,-220],[78,-955],[287,-354],[232,627],[319,356],[247,1],[238,-206],[206,-212],[298,-113]],[[84713,45326],[28,-117],[5,-179]],[[84746,45030],[-181,-441],[-238,-130],[-33,71],[25,201],[119,360],[275,235]],[[87280,46506],[-27,445],[49,212],[58,200],[63,-173],[0,-282],[-143,-402]],[[82744,53024],[-158,-533],[204,-560],[-48,-272],[312,-546],[-329,-70],[-93,-403],[12,-535],[-267,-404],[-7,-589],[-107,-903],[-41,210],[-316,-266],[-110,361],[-198,34],[-139,189],[-330,-212],[-101,285],[-182,-32],[-229,68],[-43,793],[-138,164],[-134,505],[-38,517],[32,548],[165,392]],[[80461,51765],[47,-395],[190,-334],[179,121],[177,-43],[162,299],[133,52],[263,-166],[226,126],[143,822],[107,205],[96,672],[319,0],[241,-100]],[[85936,48924],[305,-172],[101,-452],[-234,244],[-232,49],[-157,-39],[-192,21],[65,325],[344,24]],[[85242,48340],[-192,108],[-54,254],[281,29],[69,-195],[-104,-196]],[[85536,51864],[20,-322],[164,-52],[26,-241],[-15,-517],[-143,58],[-42,-359],[114,-312],[-78,-71],[-112,374],[-82,755],[56,472],[92,215]],[[84146,51097],[319,25],[275,429],[48,-132],[-223,-587],[-209,-113],[-267,115],[-463,-29],[-243,-85],[-39,-447],[248,-526],[150,268],[518,201],[-22,-272],[-121,86],[-121,-347],[-245,-229],[263,-757],[-50,-203],[249,-682],[-2,-388],[-148,-173],[-109,207],[134,484],[-273,-229],[-69,164],[36,228],[-200,346],[21,576],[-186,-179],[24,-689],[11,-846],[-176,-85],[-119,173],[79,544],[-43,570],[-117,4],[-86,405],[115,387],[40,469],[139,891],[58,243],[237,439],[217,-174],[350,-82]],[[83414,44519],[-368,414],[259,116],[146,-180],[97,-180],[-17,-159],[-117,-11]],[[83705,45536],[185,45],[249,216],[-41,-328],[-417,-168],[-370,73],[0,216],[220,123],[174,-177]],[[82849,45639],[172,48],[69,-251],[-321,-119],[-193,-79],[-149,5],[95,340],[153,5],[74,209],[100,-158]],[[80134,46785],[38,-210],[533,-59],[61,244],[515,-284],[101,-383],[417,-108],[341,-351],[-317,-225],[-306,238],[-251,-16],[-288,44],[-260,106],[-322,225],[-204,59],[-116,-74],[-506,243],[-48,254],[-255,44],[191,564],[337,-35],[224,-231],[115,-45]],[[78991,49939],[47,-412],[97,-330],[204,-52],[135,-374],[-70,-735],[-11,-914],[-308,-12],[-234,494],[-356,482],[-119,358],[-210,481],[-138,443],[-212,827],[-244,493],[-81,508],[-103,461],[-250,372],[-145,506],[-209,330],[-290,652],[-24,300],[178,-24],[430,-114],[246,-577],[215,-401],[153,-246],[263,-635],[283,-9],[233,-405],[161,-495],[211,-270],[-111,-482],[159,-205],[100,-15]],[[30935,19481],[106,-274],[139,-443],[361,-355],[389,-147],[-125,-296],[-264,-29],[-141,208]],[[31400,18145],[-168,16],[-297,1],[0,1319]],[[33993,32727],[-70,-473],[-74,-607],[3,-588],[-61,-132],[-21,-382]],[[33770,30545],[-19,-308],[353,-506],[-38,-408],[173,-257],[-14,-289],[-267,-757],[-412,-317],[-557,-123],[-305,59],[59,-352],[-57,-442],[51,-298],[-167,-208],[-284,-82],[-267,216],[-108,-155],[39,-587],[188,-178],[152,186],[82,-307],[-255,-183],[-223,-367],[-41,-595],[-66,-316],[-262,-2],[-218,-302],[-80,-443],[273,-433],[266,-119],[-96,-531],[-328,-333],[-180,-692],[-254,-234],[-113,-276],[89,-614],[185,-342],[-117,30]],[[30952,19680],[-257,93],[-672,79],[-115,344],[6,443],[-185,-38],[-98,214],[-24,626],[213,260],[88,375],[-33,299],[148,504],[101,782],[-30,347],[122,112],[-30,223],[-129,118],[92,248],[-126,224],[-65,682],[112,120],[-47,720],[65,605],[75,527],[166,215],[-84,576],[-1,543],[210,386],[-7,494],[159,576],[1,544],[-72,108],[-128,1020],[171,607],[-27,572],[100,537],[182,555],[196,367],[-83,232],[58,190],[-9,985],[302,291],[96,614],[-34,148]],[[31359,37147],[231,534],[364,-144],[163,-427],[109,475],[316,-24],[45,-127]],[[32587,37434],[511,-964],[227,-89],[339,-437],[286,-231],[40,-261],[-273,-898],[280,-160],[312,-91],[220,95],[252,453],[45,521]],[[34826,35372],[138,114],[139,-341],[-6,-472],[-234,-326],[-186,-241],[-314,-573],[-370,-806]],[[31400,18145],[-92,-239],[-238,-183],[-137,19],[-164,48],[-202,177],[-291,86],[-350,330],[-283,317],[-383,662],[229,-124],[390,-395],[369,-212],[143,271],[90,405],[256,244],[198,-70]],[[30669,40193],[136,-402],[37,-426],[146,-250],[-88,-572],[150,-663],[109,-814],[200,81]],[[30952,19680],[-247,4],[-134,-145],[-250,-213],[-45,-552],[-118,-14],[-313,192],[-318,412],[-346,338],[-87,374],[79,346],[-140,393],[-36,1007],[119,568],[293,457],[-422,172],[265,522],[94,982],[309,-208],[145,1224],[-186,157],[-87,-738],[-175,83],[87,845],[95,1095],[127,404],[-80,576],[-22,666],[117,19],[170,954],[192,945],[118,881],[-64,885],[83,487],[-34,730],[163,721],[50,1143],[89,1227],[87,1321],[-20,967],[-58,832]],[[30452,39739],[143,151],[74,303]],[[58538,45652],[-109,60],[-373,-99],[-75,-71],[-79,-377],[62,-261],[-49,-699],[-34,-593],[75,-105],[194,-230],[76,107],[23,-637],[-212,5],[-114,325],[-103,252],[-213,82],[-62,310],[-170,-187],[-222,83],[-93,268],[-176,55],[-131,-15],[-15,184],[-96,15]],[[56642,44124],[-127,35],[-172,-89],[-121,15],[-68,-54],[15,703],[-93,219],[-21,363],[41,356],[-56,228],[-5,372],[-337,-5],[24,213],[-142,-2],[-15,-103],[-172,-23],[-69,-344],[-42,-148],[-154,83],[-91,-83],[-184,-47],[-106,309],[-64,191],[-80,354],[-68,440],[-820,8],[-98,-71],[-80,11],[-115,-79]],[[53422,46976],[-39,183]],[[53383,47159],[71,62],[9,258],[45,152],[101,124]],[[53609,47755],[73,-60],[95,226],[152,-6],[17,-167],[104,-105],[164,370],[161,289],[71,189],[-10,486],[121,574],[127,304],[183,285],[32,189],[7,216],[45,205],[-14,335],[34,524],[55,368],[83,316],[16,357]],[[55125,52650],[25,412],[108,300],[149,190],[229,-200],[177,-218],[203,-59],[207,-115],[83,357],[38,46],[127,-60],[309,295],[110,-125],[90,18],[41,143],[104,51],[209,-62],[178,-14],[91,63]],[[57603,53672],[169,-488],[124,-71],[75,99],[128,-39],[155,125],[66,-252],[244,-393]],[[58564,52653],[-16,-691],[111,-80],[-89,-210],[-107,-157],[-106,-308],[-59,-274],[-15,-475],[-65,-225],[-2,-446]],[[58216,49787],[-80,-165],[-10,-351],[-38,-46],[-26,-323]],[[58062,48902],[70,-268],[17,-713]],[[61551,49585],[-165,488],[-3,2152],[243,670]],[[61626,52895],[76,186],[178,11],[247,417],[362,26],[785,1773]],[[63274,55308],[194,493],[125,363],[0,308],[0,596],[1,244],[2,9]],[[63596,57321],[89,12],[128,88],[147,59],[132,202],[105,2],[6,-163],[-25,-344],[1,-310],[-59,-214],[-78,-639],[-134,-659],[-172,-755],[-238,-866],[-237,-661],[-327,-806],[-278,-479],[-415,-586],[-259,-450],[-304,-715],[-64,-312],[-63,-140]],[[59417,50018],[-3,627],[80,239],[137,391],[101,431],[-123,678],[-32,296],[-132,411]],[[59445,53091],[171,352],[188,390]],[[59804,53833],[145,-99],[0,-332],[95,-194],[193,0],[352,-502],[87,-6],[65,16],[62,-68],[185,-47],[82,247],[254,247],[112,-200],[190,0]],[[61551,49585],[-195,-236],[-68,-246],[-104,-44],[-40,-416],[-89,-238],[-54,-393],[-112,-195]],[[56824,55442],[-212,258],[-96,170],[-18,184],[45,246],[-1,241],[-160,369],[-31,253]],[[56351,57163],[3,143],[-102,174],[-3,343],[-58,228],[-98,-34],[28,217],[72,246],[-32,245],[92,181],[-58,138],[73,365],[127,435],[240,-41],[-14,2345]],[[56621,62148],[3,248],[320,2],[0,1180]],[[56944,63578],[1117,0],[1077,0],[1102,0]],[[60240,63578],[90,-580],[-61,-107],[40,-608],[102,-706],[106,-145],[152,-219]],[[60669,61213],[-141,-337],[-204,-97],[-88,-181],[-27,-393],[-120,-868],[30,-236]],[[60119,59101],[-45,-508],[-112,-582],[-168,-293],[-119,-451],[-28,-241],[-132,-166],[-82,-618],[4,-531]],[[59437,55711],[-3,460],[-39,12],[5,294],[-33,203],[-143,233],[-34,426],[34,436],[-129,41],[-19,-132],[-167,-30],[67,-173],[23,-355],[-152,-324],[-138,-426],[-144,-61],[-233,345],[-105,-122],[-29,-172],[-143,-112],[-9,-122],[-277,0],[-38,122],[-200,20],[-100,-101],[-77,51],[-143,344],[-48,163],[-200,-81],[-76,-274],[-72,-528],[-95,-111],[-85,-65],[189,-230]],[[56351,57163],[-176,-101],[-141,-239],[-201,-645],[-261,-273],[-269,36],[-78,-54],[28,-208],[-145,-207],[-118,-230],[-350,-226],[-69,134],[-46,11],[-52,-152],[-229,-44]],[[54244,54965],[43,160],[-87,407],[-39,245],[-121,100],[-164,345],[60,279],[127,-60],[78,42],[155,-6],[-151,537],[10,393],[-18,392],[-111,378]],[[54026,58177],[28,279],[-178,13],[0,380],[-115,219],[120,778],[354,557],[15,769],[107,1199],[60,254],[-116,203],[-4,188],[-104,153],[-68,919]],[[54125,64088],[280,323],[1108,-1132],[1108,-1131]],[[30080,62227],[24,-321],[-21,-228],[-68,-99],[71,-177],[-5,-161]],[[30081,61241],[-185,100],[-131,-41],[-169,43],[-130,-110],[-149,184],[24,190],[256,-82],[210,-47],[100,131],[-127,256],[2,226],[-175,92],[62,163],[170,-26],[241,-93]],[[30080,62227],[34,101],[217,-3],[165,-152],[73,15],[50,-209],[152,11],[-9,-176],[124,-21],[136,-217],[-103,-240],[-132,128],[-127,-25],[-92,28],[-50,-107],[-106,-37],[-43,144],[-92,-85],[-111,-405],[-71,94],[-14,170]],[[76049,98451],[600,133],[540,-297],[640,-572],[-69,-531],[-606,-73],[-773,170],[-462,226],[-213,423],[-379,117],[722,404]],[[78565,97421],[704,-336],[-82,-240],[-1566,-228],[507,776],[229,66],[208,-38]],[[88563,95563],[734,-26],[1004,-313],[-219,-439],[-1023,16],[-461,-139],[-550,384],[149,406],[366,111]],[[91172,95096],[697,-155],[-321,-234],[-444,53],[-516,233],[66,192],[518,-89]],[[88850,93928],[263,234],[348,54],[394,-226],[34,-155],[-421,-4],[-569,66],[-49,31]],[[62457,98194],[542,107],[422,8],[57,-160],[159,142],[262,97],[412,-129],[-107,-90],[-373,-78],[-250,-45],[-39,-97],[-324,-98],[-301,140],[158,185],[-618,18]],[[56314,82678],[-511,-9],[-342,67]],[[55461,82736],[63,260],[383,191]],[[55907,83187],[291,-103],[123,-94],[-30,-162],[23,-150]],[[64863,94153],[665,518],[-75,268],[621,312],[917,380],[925,110],[475,220],[541,76],[193,-233],[-187,-184],[-984,-293],[-848,-282],[-863,-562],[-414,-577],[-435,-568],[56,-491],[531,-484],[-164,-52],[-907,77],[-74,262],[-503,158],[-40,320],[284,126],[-10,323],[551,503],[-255,73]],[[89698,82309],[96,-569],[-7,-581],[114,-597],[280,-1046],[-411,195],[-171,-854],[271,-605],[-8,-413],[-211,356],[-182,-457],[-51,496],[31,575],[-32,638],[64,446],[13,790],[-163,581],[24,808],[257,271],[-110,274],[123,83],[73,-391]],[[86327,75524],[-39,104]],[[86288,75628],[-2,300],[142,16],[40,698],[-73,506],[238,208],[338,-104],[186,575],[96,647],[107,216],[146,532],[-459,-175],[-240,-233],[-423,1],[-112,555],[-329,420],[-483,189],[-103,579],[-97,363],[-104,254],[-172,596],[-244,217],[-415,176],[-369,-16],[-345,-106],[-229,-294],[152,-141],[4,-326],[-155,-189],[-251,-627],[3,-260],[-392,-373],[-333,223]],[[82410,80055],[-331,-49],[-146,198],[-166,63],[-407,-416],[-366,-98],[-255,-146],[-350,96],[-258,-6],[-168,302],[-272,284],[-279,78],[-351,-78],[-263,-109],[-394,248],[-53,443],[-327,152],[-252,69],[-311,244],[-288,-612],[113,-348],[-270,-411],[-402,148],[-277,22],[-186,276],[-289,8],[-242,182],[-423,-278],[-530,-509],[-292,-102]],[[74375,79706],[-109,-49]],[[63639,77993],[-127,-350],[-269,-97],[-276,-610],[252,-561],[-27,-398],[303,-696]],[[63495,75281],[-166,-238],[-48,-150],[-122,40],[-191,359],[-78,20]],[[62890,75312],[-175,137],[-85,242],[-259,124],[-169,-93],[-48,110],[-378,283],[-409,96],[-235,101],[-34,-70]],[[61098,76242],[-354,499],[-317,223],[-240,347],[202,95],[231,494],[-156,234],[410,241],[-8,129],[-249,-95]],[[60617,78409],[9,262],[143,165],[269,43],[44,197],[-62,326],[113,310],[-3,173],[-410,192],[-162,-6],[-172,277],[-213,-94],[-352,208],[6,116],[-99,256],[-222,29],[-23,183],[70,120],[-178,334],[-288,-57],[-84,30],[-70,-134],[-104,23]],[[58829,81362],[-68,379],[-66,196],[54,55],[224,-20],[108,129],[-80,157],[-187,104],[16,107],[-113,108],[-174,387],[60,159],[-27,277],[-272,141],[-146,-70],[-39,146],[-293,149]],[[57826,83766],[-89,348],[-24,287],[-134,136]],[[57579,84537],[120,187],[-83,551],[198,341],[-42,103]],[[57772,85719],[316,327],[-291,280]],[[57797,86326],[594,755],[258,341],[105,301],[-411,405],[113,385],[-250,440],[187,506],[-323,673],[256,445],[-425,394],[41,414]],[[57942,91385],[224,54],[473,237]],[[58639,91676],[286,206],[456,-358],[761,-140],[1050,-668],[213,-281],[18,-393],[-308,-311],[-454,-157],[-1240,449],[-204,-75],[453,-433],[18,-274],[18,-604],[358,-180],[217,-153],[36,286],[-168,254],[177,224],[672,-368],[233,144],[-186,433],[647,578],[256,-34],[260,-206],[161,406],[-231,352],[136,353],[-204,367],[777,-190],[158,-331],[-351,-73],[1,-328],[219,-203],[429,128],[68,377],[580,282],[970,507],[209,-29],[-273,-359],[344,-61],[199,202],[521,16],[412,245],[317,-356],[315,391],[-291,343],[145,195],[820,-179],[385,-185],[1006,-675],[186,309],[-282,313],[-8,125],[-335,58],[92,280],[-149,461],[-8,189],[512,535],[183,537],[206,116],[736,-156],[57,-328],[-263,-479],[173,-189],[89,-413],[-63,-809],[307,-362],[-120,-395],[-544,-839],[318,-87],[110,213],[306,151],[74,293],[240,281],[-162,336],[130,390],[-304,49],[-67,328],[222,593],[-361,482],[497,398],[-64,421],[139,13],[145,-328],[-109,-570],[297,-108],[-127,426],[465,233],[577,31],[513,-337],[-247,492],[-28,630],[483,119],[669,-26],[602,77],[-226,309],[321,388],[319,16],[540,293],[734,79],[93,162],[729,55],[227,-133],[624,314],[510,-10],[77,255],[265,252],[656,242],[476,-191],[-378,-146],[629,-90],[75,-292],[254,143],[812,-7],[626,-289],[223,-221],[-69,-307],[-307,-175],[-730,-328],[-209,-175],[345,-83],[410,-149],[251,112],[141,-379],[122,153],[444,93],[892,-97],[67,-276],[1162,-88],[15,451],[590,-104],[443,4],[449,-312],[128,-378],[-165,-247],[349,-465],[437,-240],[268,620],[446,-266],[473,159],[538,-182],[204,166],[455,-83],[-201,549],[367,256],[2509,-384],[236,-351],[727,-451],[1122,112],[553,-98],[231,-244],[-33,-432],[342,-168],[372,121],[492,15],[525,-116],[526,66],[484,-526],[344,189],[-224,378],[123,262],[886,-165],[578,36],[799,-282],[-99610,-258],[681,-451],[728,-588],[-24,-367],[187,-147],[-64,429],[754,-88],[544,-553],[-276,-257],[-455,-61],[-7,-578],[-111,-122],[-260,17],[-212,206],[-369,172],[-62,257],[-283,96],[-315,-76],[-151,207],[60,219],[-333,-140],[126,-278],[-158,-251],[99997,-3],[-357,-260],[-360,44],[250,-315],[166,-487],[128,-159],[32,-244],[-71,-157],[-518,129],[-777,-445],[-247,-69],[-425,-415],[-403,-362],[-102,-269],[-397,409],[-724,-464],[-126,219],[-268,-253],[-371,81],[-90,-388],[-333,-572],[10,-239],[316,-132],[-37,-860],[-258,-22],[-119,-494],[116,-255],[-486,-302],[-96,-674],[-415,-144],[-83,-600],[-400,-551],[-103,407],[-119,862],[-155,1313],[134,819],[234,353],[14,276],[432,132],[496,744],[479,608],[499,471],[223,833],[-337,-50],[-167,-487],[-705,-649],[-227,727],[-717,-201],[-696,-990],[230,-362],[-620,-154],[-430,-61],[20,427],[-431,90],[-344,-291],[-850,102],[-914,-175],[-899,-1153],[-1065,-1394],[438,-74],[136,-370],[270,-132],[178,295],[305,-38],[401,-650],[9,-503],[-217,-590],[-23,-705],[-126,-945],[-418,-855],[-94,-409],[-377,-688],[-374,-682],[-179,-349],[-370,-346],[-175,-8],[-175,287],[-373,-432],[-43,-197]],[[0,92833],[36,24],[235,-1],[402,-169],[-24,-81],[-286,-141],[-363,-36],[99694,-30],[-49,187],[-99645,247]],[[59287,77741],[73,146],[198,-127],[89,-23],[36,-117],[42,-18]],[[59725,77602],[2,-51],[136,-142],[284,35],[-55,-210],[-304,-103],[-377,-342],[-154,121],[61,277],[-304,173],[50,113],[265,197],[-42,71]],[[28061,66408],[130,47],[184,-18],[8,-153],[-303,-95],[-19,219]],[[28391,66555],[220,-265],[-48,-420],[-51,75],[4,309],[-124,234],[-1,67]],[[28280,65474],[84,-23],[97,-491],[1,-343],[-68,-29],[-70,340],[-104,171],[60,375]],[[33000,19946],[333,354],[236,-148],[167,237],[222,-266],[-83,-207],[-375,-177],[-125,207],[-236,-266],[-139,266]],[[54206,97653],[105,202],[408,20],[350,-206],[915,-440],[-699,-233],[-155,-435],[-243,-111],[-132,-490],[-335,-23],[-598,361],[252,210],[-416,170],[-541,499],[-216,463],[757,212],[152,-207],[396,8]],[[57942,91385],[117,414],[-356,235],[-431,-200],[-137,-433],[-265,-262],[-298,143],[-362,-29],[-309,312],[-167,-156]],[[55734,91409],[-172,-24],[-41,-389],[-523,95],[-74,-329],[-267,2],[-183,-421],[-278,-655],[-431,-831],[101,-202],[-97,-234],[-275,10],[-180,-554],[17,-784],[177,-300],[-92,-694],[-231,-405],[-122,-341]],[[53063,85353],[-187,363],[-548,-684],[-371,-138],[-384,301],[-99,635],[-88,1363],[256,381],[733,496],[549,609],[508,824],[668,1141],[465,444],[763,741],[610,259],[457,-31],[423,489],[506,-26],[499,118],[869,-433],[-358,-158],[305,-371]],[[57613,97879],[-412,-318],[-806,-70],[-819,98],[-50,163],[-398,11],[-304,271],[858,165],[403,-142],[281,177],[702,-148],[545,-207]],[[56867,96577],[-620,-241],[-490,137],[191,152],[-167,189],[575,119],[110,-222],[401,-134]],[[37010,99398],[932,353],[975,-27],[354,218],[982,57],[2219,-74],[1737,-469],[-513,-227],[-1062,-26],[-1496,-58],[140,-105],[984,65],[836,-204],[540,181],[231,-212],[-305,-344],[707,220],[1348,229],[833,-114],[156,-253],[-1132,-420],[-157,-136],[-888,-102],[643,-28],[-324,-431],[-224,-383],[9,-658],[333,-386],[-434,-24],[-457,-187],[513,-313],[65,-502],[-297,-55],[360,-508],[-617,-42],[322,-241],[-91,-208],[-391,-91],[-388,-2],[348,-400],[4,-263],[-549,244],[-143,-158],[375,-148],[364,-361],[105,-476],[-495,-114],[-214,228],[-344,340],[95,-401],[-322,-311],[732,-25],[383,-32],[-745,-515],[-755,-466],[-813,-204],[-306,-2],[-288,-228],[-386,-624],[-597,-414],[-192,-24],[-370,-145],[-399,-138],[-238,-365],[-4,-415],[-141,-388],[-453,-472],[112,-462],[-125,-488],[-142,-577],[-391,-36],[-410,482],[-556,3],[-269,324],[-186,577],[-481,735],[-141,385],[-38,530],[-384,546],[100,435],[-186,208],[275,691],[418,220],[110,247],[58,461],[-318,-209],[-151,-88],[-249,-84],[-341,193],[-19,401],[109,314],[258,9],[567,-157],[-478,375],[-249,202],[-276,-83],[-232,147],[310,550],[-169,220],[-220,409],[-335,626],[-353,230],[3,247],[-745,346],[-590,43],[-743,-24],[-677,-44],[-323,188],[-482,372],[729,186],[559,31],[-1188,154],[-627,241],[39,229],[1051,285],[1018,284],[107,214],[-750,213],[243,235],[961,413],[404,63],[-115,265],[658,156],[854,93],[853,5],[303,-184],[737,325],[663,-221],[390,-46],[577,-192],[-660,318],[38,253]],[[69148,21851],[179,-186],[263,-74],[9,-112],[-77,-269],[-427,-38],[-7,314],[41,244],[19,121]],[[84713,45326],[32,139],[239,133],[194,20],[87,74],[105,-74],[-102,-160],[-289,-258],[-233,-170]],[[54540,33696],[133,292],[109,-162],[47,-252],[125,-43],[175,-112],[149,43],[248,302],[0,2182]],[[55526,35946],[75,-88],[165,-562],[-26,-360],[62,-207],[199,60],[139,264],[132,177],[68,283],[135,137],[117,-71],[133,-166],[226,-29],[178,138],[28,184],[48,283],[152,47],[83,222],[93,393],[249,442],[393,435]],[[58175,37528],[113,-7],[134,-100],[94,71],[148,-59]],[[58664,37433],[133,-832],[72,-419],[-49,-659],[23,-212]],[[58843,35311],[-140,108],[-80,-42],[-26,-172],[-76,-222],[2,-204],[166,-320],[163,63],[56,263]],[[58908,34785],[211,-5]],[[59119,34780],[-70,-430],[-32,-491],[-72,-267],[-190,-298],[-54,-86],[-118,-300],[-77,-303],[-158,-424],[-314,-609],[-196,-355],[-210,-269],[-290,-229],[-141,-31],[-36,-164],[-169,88],[-138,-113],[-301,114],[-168,-72],[-115,31],[-286,-233],[-238,-94],[-171,-223],[-127,-14],[-117,210],[-94,11],[-120,264],[-13,-82],[-37,159],[2,346],[-90,396],[89,108],[-7,453],[-182,553],[-139,501],[-1,1],[-199,768]],[[58049,33472],[-121,182],[-130,-120],[-151,-232],[-148,-374],[209,-454],[99,59],[51,188],[155,93],[47,192],[85,288],[-96,178]],[[23016,65864],[-107,-518],[-49,-426],[-20,-791],[-27,-289],[48,-322],[86,-288],[56,-458],[184,-440],[65,-337],[109,-291],[295,-157],[114,-247],[244,165],[212,60],[208,106],[175,101],[176,241],[67,345],[22,496],[48,173],[188,155],[294,137],[246,-21],[169,50],[66,-125],[-9,-285],[-149,-351],[-66,-360],[51,-103],[-42,-255],[-69,-461],[-71,152],[-58,-10]],[[25472,61510],[-53,-8],[-99,-357],[-51,70],[-33,-27],[2,-87]],[[25238,61101],[-257,7],[-259,-1],[-1,-333],[-125,-1],[103,-198],[103,-136],[31,-128],[45,-36],[-7,-201],[-357,-2],[-133,-481],[39,-111],[-32,-138],[-7,-172]],[[24381,59170],[-314,636],[-144,191],[-226,155],[-156,-43],[-223,-223],[-140,-58],[-196,156],[-208,112],[-260,271],[-208,83],[-314,275],[-233,282],[-70,158],[-155,35],[-284,187],[-116,270],[-299,335],[-139,373],[-66,288],[93,57],[-29,169],[64,153],[1,204],[-93,266],[-25,235],[-94,298],[-244,587],[-280,462],[-135,368],[-238,241],[-51,145],[42,365],[-142,138],[-164,287],[-69,412],[-149,48],[-162,311],[-130,288],[-12,184],[-149,446],[-99,452],[5,227],[-201,234],[-93,-25],[-159,163],[-44,-240],[46,-284],[27,-444],[95,-243],[206,-407],[46,-139],[42,-42],[37,-203],[49,8],[56,-381],[85,-150],[59,-210],[174,-300],[92,-550],[83,-259],[77,-277],[15,-311],[134,-20],[112,-268],[100,-264],[-6,-106],[-117,-217],[-49,3],[-74,359],[-181,337],[-201,286],[-142,150],[9,432],[-42,320],[-132,183],[-191,264],[-37,-76],[-70,154],[-171,143],[-164,343],[20,44],[115,-33],[103,221],[10,266],[-214,422],[-163,163],[-102,369],[-103,388],[-129,472],[-113,531]],[[33993,32727],[180,63],[279,-457],[103,18],[286,-379],[218,-327],[160,-402],[-122,-280],[77,-334]],[[35174,30629],[-121,-372],[-313,-328],[-205,118],[-151,-63],[-256,253],[-189,-19],[-169,327]],[[34826,35372],[54,341],[38,350],[0,325],[-100,107],[-104,-96],[-103,26],[-33,228],[-26,541],[-52,177],[-187,160],[-114,-116],[-293,113],[18,802],[-82,329]],[[33842,38659],[87,122],[-27,337],[77,259],[49,465],[-66,367],[-151,166],[-30,233],[41,342],[-533,24],[-107,688],[81,10],[-3,255],[-55,172],[-12,342],[-161,175],[-175,-6],[-115,172],[-188,117],[-109,220],[-311,98],[-302,529],[23,396],[-34,227],[29,443],[-363,-100],[-147,-222],[-243,-239],[-62,-179],[-143,-13],[-206,50]],[[30686,44109],[-157,-102],[-126,68],[18,898],[-228,-348],[-245,15],[-105,315],[-184,34],[59,254],[-155,359],[-115,532],[73,108],[0,250],[168,171],[-28,319],[71,206],[20,275],[318,402],[227,114],[37,89],[251,-28]],[[30585,48040],[125,1620],[6,256],[-43,339],[-123,215],[1,430],[156,97],[56,-61],[9,226],[-162,61],[-4,370],[541,-13],[92,203],[77,-187],[55,-349],[52,73]],[[31423,51320],[153,-312],[216,38],[54,181],[206,138],[115,97],[32,250],[198,168],[-15,124],[-235,51],[-39,372],[12,396],[-125,153],[52,55],[206,-76],[221,-148],[80,140],[200,92],[310,221],[102,225],[-37,167]],[[33129,53652],[145,26],[64,-136],[-36,-259],[96,-90],[63,-274],[-77,-209],[-44,-502],[71,-299],[20,-274],[171,-277],[137,-29],[30,116],[88,25],[126,104],[90,157],[154,-50],[67,21]],[[34294,51702],[151,-48],[25,120],[-46,118],[28,171],[112,-53],[131,61],[159,-125]],[[34854,51946],[121,-122],[86,160],[62,-25],[38,-166],[133,42],[107,224],[85,436],[164,540]],[[35650,53035],[95,28],[69,-327],[155,-1033],[149,-97],[7,-408],[-208,-487],[86,-178],[491,-92],[10,-593],[211,388],[349,-212],[462,-361],[135,-346],[-45,-327],[323,182],[540,-313],[415,23],[411,-489],[355,-662],[214,-170],[237,-24],[101,-186],[94,-752],[46,-358],[-110,-977],[-142,-385],[-391,-822],[-177,-668],[-206,-513],[-69,-11],[-78,-435],[20,-1107],[-77,-910],[-30,-390],[-88,-233],[-49,-790],[-282,-771],[-47,-610],[-225,-256],[-65,-355],[-302,2],[-437,-227],[-195,-263],[-311,-173],[-327,-470],[-235,-586],[-41,-441],[46,-326],[-51,-597],[-63,-289],[-195,-325],[-308,-1040],[-244,-468],[-189,-277],[-127,-562],[-183,-337]],[[33842,38659],[-4,182],[-259,302],[-258,9],[-484,-172],[-133,-520],[-7,-318],[-110,-708]],[[30669,40193],[175,638],[-119,496],[63,199],[-49,219],[108,295],[6,503],[13,415],[60,200],[-240,951]],[[30452,39739],[-279,340],[-24,242],[-551,593],[-498,646],[-214,365],[-115,488],[46,170],[-236,775],[-274,1090],[-262,1177],[-114,269],[-87,435],[-216,386],[-198,239],[90,264],[-134,563],[86,414],[221,373]],[[27693,48568],[33,-246],[-79,-141],[8,-216],[114,47],[113,-64],[116,-298],[157,243],[53,398],[170,514],[334,233],[303,619],[86,384],[-38,449]],[[29063,50490],[74,56],[184,-280],[89,-279],[129,-152],[163,-620],[207,-74],[153,157],[101,-103],[166,51],[213,-276],[-179,-602],[83,-14],[139,-314]],[[29063,50490],[-119,140],[-137,195],[-79,-94],[-235,82],[-68,255],[-52,-10],[-278,338]],[[28095,51396],[-37,183],[103,44],[-12,296],[65,214],[138,40],[117,371],[106,310],[-102,141],[52,343],[-62,540],[59,155],[-44,500],[-112,315]],[[28366,54848],[36,287],[89,-43],[52,176],[-64,348],[34,86]],[[28513,55702],[143,-18],[209,412],[114,63],[3,195],[51,500],[159,274],[175,11],[22,123],[218,-49],[218,298],[109,132],[134,285],[98,-36],[73,-156],[-54,-199]],[[30185,57537],[-178,-99],[-71,-295],[-107,-169],[-81,-220],[-34,-422],[-77,-345],[144,-40],[35,-271],[62,-130],[21,-238],[-33,-219],[10,-123],[69,-49],[66,-207],[357,57],[161,-75],[196,-508],[112,63],[200,-32],[158,68],[99,-102],[-50,-318],[-62,-199],[-22,-423],[56,-393],[79,-175],[9,-133],[-140,-294],[100,-130],[74,-207],[85,-589]],[[28366,54848],[-93,170],[-59,319],[68,158],[-70,40],[-52,196],[-138,164],[-122,-38],[-56,-205],[-112,-149],[-61,-20],[-27,-123],[132,-321],[-75,-76],[-40,-87],[-130,-30],[-48,353],[-36,-101],[-92,35],[-56,238],[-114,39],[-72,69],[-119,-1],[-8,-128],[-32,89]],[[26954,55439],[14,117],[23,120],[-10,107],[41,70],[-58,88],[-1,238],[107,53]],[[27070,56232],[100,-212],[-6,-126],[111,-26],[26,48],[77,-145],[136,42],[119,150],[168,119],[95,176],[153,-34],[-10,-58],[155,-21],[124,-102],[90,-177],[105,-164]],[[26954,55439],[-151,131],[-56,124],[32,103],[-11,130],[-77,142],[-109,116],[-95,76],[-19,173],[-73,105],[18,-172],[-55,-141],[-64,164],[-89,58],[-38,120],[2,179],[36,187],[-78,83],[64,114]],[[26191,57131],[42,76],[183,-156],[63,77],[89,-50],[46,-121],[82,-40],[66,126]],[[26762,57043],[70,-321],[108,-238],[130,-252]],[[26191,57131],[-96,186],[-130,238],[-61,200],[-117,185],[-140,267],[31,91],[46,-88],[21,41]],[[25745,58251],[86,25],[35,135],[41,5],[-6,290],[65,14],[58,-4],[60,158],[82,-120],[29,74],[51,70],[97,163],[4,121],[27,-5],[36,141],[29,17],[47,-90],[56,-27],[61,76],[70,0],[97,77],[38,81],[95,-12]],[[26903,59440],[-24,-57],[-14,-132],[29,-216],[-64,-202],[-30,-237],[-9,-261],[15,-152],[7,-266],[-43,-58],[-26,-253],[19,-156],[-56,-151],[12,-159],[43,-97]],[[25745,58251],[-48,185],[-84,51]],[[25613,58487],[19,237],[-38,64],[-57,42],[-122,-70],[-10,79],[-84,95],[-60,118],[-82,50]],[[25179,59102],[58,150],[-22,116],[20,113],[131,166],[127,225]],[[25493,59872],[29,-23],[61,104],[79,8],[26,-48],[43,29],[129,-53],[128,15],[90,66],[32,66],[89,-31],[66,-40],[73,14],[55,51],[127,-82],[44,-13],[85,-110],[80,-132],[101,-91],[73,-162]],[[25613,58487],[-31,-139],[-161,9],[-100,57],[-115,117],[-154,37],[-79,127]],[[24973,58695],[9,86],[95,149],[52,66],[-15,69],[65,37]],[[25238,61101],[-2,-468],[-22,-667],[83,0]],[[25297,59966],[90,-107],[24,88],[82,-75]],[[24973,58695],[-142,103],[-174,11],[-127,117],[-149,244]],[[25472,61510],[1,-87],[53,-3],[-5,-160],[-45,-256],[24,-91],[-29,-212],[18,-56],[-32,-299],[-55,-156],[-50,-19],[-55,-205]],[[30185,57537],[-8,-139],[-163,-69],[91,-268],[-3,-309],[-123,-344],[105,-468],[120,38],[62,427],[-86,208],[-14,447],[346,241],[-38,278],[97,186],[100,-415],[195,-9],[180,-330],[11,-195],[249,-6],[297,61],[159,-264],[213,-74],[155,185],[4,149],[344,35],[333,9],[-236,-175],[95,-279],[222,-44],[210,-291],[45,-473],[144,13],[109,-139]],[[33400,55523],[-220,-347],[-24,-215],[95,-220],[-69,-110],[-171,-95],[5,-273],[-75,-163],[188,-448]],[[33400,55523],[183,-217],[171,-385],[8,-304],[105,-14],[149,-289],[109,-205]],[[34125,54109],[-44,-532],[-169,-154],[15,-139],[-51,-305],[123,-429],[89,-1],[37,-333],[169,-514]],[[34125,54109],[333,-119],[30,107],[225,43],[298,-159]],[[35011,53981],[-144,-508],[22,-404],[109,-351],[-49,-254],[-24,-270],[-71,-248]],[[35011,53981],[95,-65],[204,-140],[294,-499],[46,-242]],[[51718,79804],[131,-155],[400,-109],[-140,-404],[-35,-421]],[[52074,78715],[-77,-101],[-126,54],[9,-150],[-203,-332],[-5,-267],[133,92],[95,-259]],[[51900,77752],[-11,-167],[82,-222],[-97,-180],[72,-457],[151,-75],[-32,-256]],[[52065,76395],[-252,-334],[-548,160],[-404,-192],[-32,-355]],[[50829,75674],[-322,-77],[-313,267],[-101,-127],[-511,268],[-111,230]],[[49471,76235],[144,354],[53,1177],[-287,620],[-205,299],[-424,227],[-28,431],[360,129],[466,-152],[-88,669],[263,-254],[646,461],[84,484],[243,119]],[[50698,80799],[40,-207],[129,-10],[129,-237],[194,-279],[143,46],[243,-269]],[[51576,79843],[62,-52],[80,13]],[[52429,75765],[179,226],[47,-507],[-92,-456],[-126,120],[-64,398],[56,219]],[[27693,48568],[148,442],[-60,258],[-106,-275],[-166,259],[56,167],[-47,536],[97,89],[52,368],[105,381],[-20,241],[153,126],[190,236]],[[31588,61519],[142,-52],[50,-118],[-71,-149],[-209,4],[-163,-21],[-16,253],[40,86],[227,-3]],[[28453,61504],[187,-53],[147,-142],[46,-161],[-195,-11],[-84,-99],[-156,95],[-159,215],[34,135],[116,41],[64,-20]],[[27147,64280],[240,-42],[219,-7],[261,-201],[110,-216],[260,66],[98,-138],[235,-366],[173,-267],[92,8],[165,-120],[-20,-167],[205,-24],[210,-242],[-33,-138],[-185,-75],[-187,-29],[-191,46],[-398,-57],[186,329],[-113,154],[-179,39],[-96,171],[-66,336],[-157,-23],[-259,159],[-83,124],[-362,91],[-97,115],[104,148],[-273,30],[-199,-307],[-115,-8],[-40,-144],[-138,-65],[-118,56],[146,183],[60,213],[126,131],[142,116],[210,56],[67,65]],[[58175,37528],[-177,267],[-215,90],[-82,375],[0,208],[-119,64],[-315,649],[-87,342],[-56,105],[-107,473]],[[57017,40101],[311,-65],[90,-68],[94,13],[154,383],[241,486],[100,46],[33,205],[159,235],[210,81]],[[58409,41417],[18,-220],[232,12],[128,-125],[60,-146],[132,-43],[145,-190],[0,-748],[-54,-409],[-12,-442],[45,-175],[-31,-348],[-42,-53],[-74,-426],[-292,-671]],[[55526,35946],[0,1725],[274,20],[8,2105],[207,19],[428,207],[106,-243],[177,231],[85,2],[156,133]],[[56967,40145],[50,-44]],[[54540,33696],[-207,446],[-108,432],[-62,575],[-68,428],[-93,910],[-7,707],[-35,322],[-108,243],[-144,489],[-146,708],[-60,371],[-226,577],[-17,453]],[[53259,40357],[134,113],[166,100],[180,-17],[166,-267],[42,41],[1126,26],[192,-284],[673,-83],[510,241]],[[56448,40227],[228,134],[180,-34],[109,-133],[2,-49]],[[45357,58612],[-115,460],[-138,210],[122,112],[134,415],[66,304]],[[45426,60113],[96,189],[138,-51],[135,129],[155,6],[133,-173],[184,-157],[168,-435],[184,-405]],[[46619,59216],[13,-368],[54,-338],[104,-166],[24,-229],[-13,-184]],[[46801,57931],[-40,-33],[-151,47],[-21,-66],[-61,-13],[-200,144],[-134,6]],[[46194,58016],[-513,25],[-75,-67],[-92,19],[-147,-96]],[[45367,57897],[-46,453]],[[45321,58350],[253,-13],[67,83],[50,5],[103,136],[119,-124],[121,-11],[120,133],[-56,170],[-92,-99],[-86,3],[-110,145],[-88,-9],[-63,-140],[-302,-17]],[[46619,59216],[93,107],[47,348],[88,14],[194,-165],[157,117],[107,-39],[42,131],[1114,9],[62,414],[-48,73],[-134,2550],[-134,2550],[425,10]],[[48632,65335],[937,-1289],[937,-1289],[66,-277],[173,-169],[129,-96],[3,-376],[308,58]],[[51185,61897],[1,-1361],[-152,-394],[-24,-364],[-247,-94],[-379,-51],[-102,-210],[-178,-23]],[[50104,59400],[-178,-3],[-70,114],[-153,-84],[-259,-246],[-53,-184],[-216,-265],[-38,-152],[-116,-120],[-134,79],[-76,-144],[-41,-405],[-221,-490],[7,-200],[-76,-250],[18,-343]],[[48498,56707],[-114,-88],[-65,-74],[-43,253],[-80,-67],[-48,11],[-51,-172],[-215,5],[-77,89],[-36,-54]],[[47769,56610],[-85,170],[15,176],[-35,69],[-59,-58],[11,192],[57,152],[-114,248],[-33,163],[-62,130],[-55,15],[-67,-83],[-90,-79],[-76,-128],[-119,48],[-77,150],[-46,19],[-73,-78],[-44,-1],[-16,216]],[[47587,66766],[1045,-1431]],[[45426,60113],[-24,318],[78,291],[34,557],[-30,583],[-34,294],[28,295],[-72,281],[-146,255]],[[50747,54278],[-229,-69]],[[50518,54209],[-69,407],[13,1357],[-56,122],[-11,290],[-96,207],[-85,174],[35,311]],[[50249,57077],[96,67],[56,258],[136,56],[61,176]],[[50598,57634],[93,173],[100,2],[212,-340]],[[51003,57469],[-11,-197],[62,-350],[-54,-238],[29,-159],[-135,-366],[-86,-181],[-52,-372],[7,-376],[-16,-952]],[[54026,58177],[-78,-34],[-9,-188]],[[53939,57955],[-52,-13],[-188,647],[-65,24],[-217,-331],[-215,173],[-150,34],[-80,-83],[-163,18],[-164,-252],[-141,-14],[-337,305],[-131,-145],[-142,10],[-104,223],[-279,221],[-298,-70],[-72,-128],[-39,-340],[-80,-238],[-19,-527]],[[50598,57634],[6,405],[-320,134],[-9,286],[-156,386],[-37,269],[22,286]],[[51185,61897],[392,263],[804,1161],[952,1126]],[[53333,64447],[439,-255],[156,-324],[197,220]],[[53939,57955],[110,-235],[-31,-107],[-14,-196],[-234,-457],[-74,-377],[-39,-307],[-59,-132],[-56,-414],[-148,-243],[-43,-299],[-63,-238],[-26,-246],[-191,-199],[-156,243],[-105,-10],[-165,-345],[-81,-6],[-132,-570],[-71,-418]],[[52361,53399],[-289,-213],[-105,31],[-107,-132],[-222,13],[-149,370],[-91,427],[-197,389],[-209,-7],[-245,1]],[[54244,54965],[-140,-599],[-67,-107],[-21,-458],[28,-249],[-23,-176],[132,-309],[23,-212],[103,-305],[127,-190],[12,-269],[29,-172]],[[54447,51919],[-20,-319],[-220,140],[-225,156],[-350,23]],[[53632,51919],[-35,32],[-164,-76],[-169,79],[-132,-38]],[[53132,51916],[-452,13]],[[52680,51929],[40,466],[-108,391],[-127,100],[-56,265],[-72,85],[4,163]],[[50518,54209],[-224,-126]],[[50294,54083],[-62,207],[-74,375],[-22,294],[61,532],[-69,215],[-27,466],[1,429],[-116,305],[20,184]],[[50006,57090],[243,-13]],[[50294,54083],[-436,-346],[-154,-203],[-250,-171],[-248,168]],[[49206,53531],[13,233],[-121,509],[73,667],[117,496],[-74,841]],[[49214,56277],[-38,444],[7,336],[482,27],[123,-43],[90,96],[128,-47]],[[48498,56707],[125,-129],[49,-195],[125,-125],[97,149],[130,22],[190,-152]],[[49206,53531],[-126,-7],[-194,116],[-178,-7],[-329,-103],[-193,-170],[-275,-217],[-54,15]],[[47857,53158],[22,487],[26,74],[-8,233],[-118,247],[-88,40],[-81,162],[60,262],[-28,286],[13,172]],[[47655,55121],[44,0],[17,258],[-22,114],[27,82],[103,71],[-69,473],[-64,245],[23,200],[55,46]],[[47655,55121],[-78,15],[-57,-238],[-78,3],[-55,126],[19,237],[-116,362],[-73,-67],[-59,-13]],[[47158,55546],[-77,-34],[3,217],[-44,155],[9,171],[-60,249],[-78,211],[-222,1],[-65,-112],[-76,-13],[-48,-128],[-32,-163],[-148,-260]],[[46320,55840],[-122,349],[-108,232],[-71,76],[-69,118],[-32,261],[-41,130],[-80,97]],[[45797,57103],[123,288],[84,-11],[73,99],[61,1],[44,78],[-24,196],[31,62],[5,200]],[[45797,57103],[-149,247],[-117,39],[-63,166],[1,90],[-84,125],[-18,127]],[[47857,53158],[-73,-5],[-286,282],[-252,449],[-237,324],[-187,381]],[[46822,54589],[66,189],[15,172],[126,320],[129,276]],[[46822,54589],[-75,44],[-200,238],[-144,316],[-49,216],[-34,437]],[[55125,52650],[-178,33],[-188,99],[-166,-313],[-146,-550]],[[56824,55442],[152,-239],[2,-192],[187,-308],[116,-255],[70,-355],[208,-234],[44,-187]],[[53609,47755],[-104,203],[-84,-100],[-112,-255]],[[53309,47603],[-228,626]],[[53081,48229],[212,326],[-105,391],[95,148],[187,73],[23,261],[148,-283],[245,-25],[85,279],[36,393],[-31,461],[-131,350],[120,684],[-69,117],[-207,-48],[-78,305],[21,258]],[[53081,48229],[-285,596],[-184,488],[-169,610],[9,196],[61,189],[67,430],[56,438]],[[52636,51176],[94,35],[404,-6],[-2,711]],[[52636,51176],[-52,90],[96,663]],[[59099,45126],[131,-264],[71,-501],[-47,-160],[-56,-479],[53,-490],[-87,-205],[-85,-549],[147,-153]],[[59226,42325],[-843,-487],[26,-421]],[[56448,40227],[-181,369],[-188,483],[13,1880],[579,-7],[-24,203],[41,222],[-49,277],[32,286],[-29,184]],[[59599,43773],[-77,-449],[77,-768],[97,9],[100,-191],[116,-427],[24,-760],[-120,-124],[-85,-410],[-181,365],[-21,417],[59,274],[-16,237],[-110,149],[-77,-54],[-159,284]],[[61198,44484],[45,-265],[-11,-588],[34,-519],[11,-923],[49,-290],[-83,-422],[-108,-410],[-177,-366],[-254,-225],[-313,-287],[-313,-634],[-107,-108],[-194,-420],[-115,-136],[-23,-421],[132,-448],[54,-346],[4,-177],[49,29],[-8,-579],[-45,-275],[65,-101],[-41,-245],[-116,-211],[-229,-199],[-334,-320],[-122,-219],[24,-248],[71,-40],[-24,-311]],[[58908,34785],[-24,261],[-41,265]],[[53383,47159],[-74,444]],[[53259,40357],[-26,372],[38,519],[96,541],[15,254],[90,532],[66,243],[159,386],[90,263],[29,438],[-15,335],[-83,211],[-74,358],[-68,355],[15,122],[85,235],[-84,570],[-57,396],[-139,374],[26,115]],[[58062,48902],[169,-46],[85,336],[147,-38]],[[59922,69905],[-49,-186]],[[59873,69719],[-100,82],[-58,-394],[69,-66],[-71,-81],[-12,-156],[131,80]],[[59832,69184],[7,-230],[-139,-944]],[[59700,68010],[-27,153],[-155,862]],[[59518,69025],[80,194],[-19,34],[74,276],[56,446],[40,149],[8,6]],[[59757,70130],[93,-1],[25,104],[75,8]],[[59950,70241],[4,-242],[-38,-90],[6,-4]],[[59757,70130],[99,482],[138,416],[5,21]],[[59999,71049],[125,-31],[45,-231],[-151,-223],[-68,-323]],[[63761,43212],[74,-251],[69,-390],[45,-711],[72,-276],[-28,-284],[-49,-174],[-94,347],[-53,-175],[53,-438],[-24,-250],[-77,-137],[-18,-500],[-109,-689],[-137,-814],[-172,-1120],[-106,-821],[-125,-685],[-226,-140],[-243,-250],[-160,151],[-220,211],[-77,312],[-18,524],[-98,471],[-26,425],[50,426],[128,102],[1,197],[133,447],[25,377],[-65,280],[-52,372],[-23,544],[97,331],[38,375],[138,22],[155,121],[103,107],[122,7],[158,337],[229,364],[83,297],[-38,253],[118,-71],[153,410],[6,356],[92,264],[96,-254]],[[59873,69719],[0,-362],[-41,-173]],[[45321,58350],[36,262]],[[52633,68486],[-118,1061],[-171,238],[-3,143],[-227,352],[-24,445],[171,330],[65,487],[-44,563],[57,303]],[[52339,72408],[302,239],[195,-71],[-9,-299],[236,217],[20,-113],[-139,-290],[-2,-273],[96,-147],[-36,-511],[-183,-297],[53,-322],[143,-10],[70,-281],[106,-92]],[[53191,70158],[-16,-454],[-135,-170],[-86,-189],[-191,-228],[30,-244],[-24,-250],[-136,-137]],[[47592,66920],[-2,700],[449,436],[277,90],[227,159],[107,295],[324,234],[12,438],[161,51],[126,219],[363,99],[51,230],[-73,125],[-96,624],[-17,359],[-104,379]],[[49397,71358],[267,323],[300,102],[175,244],[268,180],[471,105],[459,48],[140,-87],[262,232],[297,5],[113,-137],[190,35]],[[52633,68486],[90,-522],[15,-274],[-49,-482],[21,-270],[-36,-323],[24,-371],[-110,-247],[164,-431],[11,-253],[99,-330],[130,109],[219,-275],[122,-370]],[[59922,69905],[309,-234],[544,630]],[[60775,70301],[112,-720]],[[60887,69581],[-53,-89],[-556,-296],[277,-591],[-92,-101],[-46,-197],[-212,-82],[-66,-213],[-120,-182],[-310,94]],[[59709,67924],[-9,86]],[[64327,64904],[49,29],[11,-162],[217,93],[230,-15],[168,-18],[190,400],[207,379],[176,364]],[[65575,65974],[52,-202]],[[65627,65772],[38,-466]],[[65665,65306],[-142,-3],[-23,-384],[50,-82],[-126,-117],[-1,-241],[-81,-245],[-7,-238]],[[65335,63996],[-56,-125],[-835,298],[-106,599],[-11,136]],[[64113,65205],[-18,430],[75,310],[76,64],[84,-185],[5,-346],[-61,-348]],[[64274,65130],[-77,-42],[-84,117]],[[63326,68290],[58,-261],[-25,-135],[89,-445]],[[63448,67449],[-196,-16],[-69,282],[-248,57]],[[62935,67772],[204,567],[187,-49]],[[60775,70301],[615,614],[105,715],[-26,431],[152,146],[142,369]],[[61763,72576],[119,92],[324,-77],[97,-150],[133,100]],[[62436,72541],[180,-705],[182,-177],[21,-345],[-139,-204],[-65,-461],[193,-562],[340,-324],[143,-449],[-46,-428],[89,0],[3,-314],[153,-311]],[[63490,68261],[-164,29]],[[62935,67772],[-516,47],[-784,1188],[-413,414],[-335,160]],[[65665,65306],[125,-404],[155,-214],[203,-78],[165,-107],[125,-339],[75,-196],[100,-75],[-1,-132],[-101,-352],[-44,-166],[-117,-189],[-104,-404],[-126,31],[-58,-141],[-44,-300],[34,-395],[-26,-72],[-128,2],[-174,-221],[-27,-288],[-63,-125],[-173,5],[-109,-149],[1,-238],[-134,-165],[-153,56],[-186,-199],[-128,-34]],[[64752,60417],[-91,413],[-217,975]],[[64444,61805],[833,591],[185,1182],[-127,418]],[[65575,65974],[80,201],[35,-51],[-26,-244],[-37,-108]],[[96448,41190],[175,-339],[-92,-78],[-93,259],[10,158]],[[96330,41322],[-39,163],[-6,453],[133,-182],[45,-476],[-75,74],[-58,-32]],[[78495,57780],[-66,713],[178,492],[359,112],[261,-84]],[[79227,59013],[229,-232],[126,407],[246,-217]],[[79828,58971],[64,-394],[-34,-708],[-467,-455],[122,-358],[-292,-43],[-240,-238]],[[78981,56775],[-233,87],[-112,307],[-141,611]],[[78495,57780],[-249,271],[-238,-11],[41,464],[-245,-3],[-22,-650],[-150,-863],[-90,-522],[19,-428],[181,-18],[113,-539],[50,-512],[155,-338],[168,-69],[144,-306]],[[78372,54256],[-91,-243],[-183,-71],[-22,304],[-227,258],[-48,-105]],[[77801,54399],[-110,227],[-47,292],[-148,334],[-135,280],[-45,-347],[-53,328],[30,369],[82,566]],[[77375,56448],[135,607],[152,551],[-108,539],[4,274],[-32,330],[-185,470],[-66,296],[96,109],[101,514],[-113,390],[-177,431],[-134,519],[117,107],[127,639],[196,26],[162,256],[159,137]],[[77809,62643],[120,-182],[16,-355],[188,-27],[-68,-623],[6,-530],[293,353],[83,-104],[163,17],[56,205],[210,-40],[211,-480],[18,-583],[224,-515],[-12,-500],[-90,-266]],[[77809,62643],[59,218],[237,384]],[[78105,63245],[25,-139],[148,-16],[-42,676],[144,86]],[[78380,63852],[162,-466],[125,-537],[342,-5],[108,-515],[-178,-155],[-80,-212],[333,-353],[231,-699],[175,-520],[210,-411],[70,-418],[-50,-590]],[[77375,56448],[-27,439],[86,452],[-94,350],[23,644],[-113,306],[-90,707],[-50,746],[-121,490],[-183,-297],[-315,-421],[-156,53],[-172,138],[96,732],[-58,554],[-218,681],[34,213],[-163,76],[-197,481]],[[75657,62792],[-18,476],[97,-90],[6,424]],[[75742,63602],[137,140],[-30,251],[63,201],[11,612],[217,-135],[124,487],[14,288],[153,496],[-8,338],[359,408],[199,-107],[-23,364],[97,108],[-20,224]],[[77035,67277],[162,44],[93,-348],[121,-141],[8,-452],[-11,-487],[-263,-493],[-33,-701],[293,98],[66,-544],[176,-115],[-81,-490],[206,-222],[121,-109],[203,172],[9,-244]],[[78380,63852],[149,145],[221,-3],[271,68],[236,315],[134,-222],[254,-108],[-44,-340],[132,-240],[280,-154]],[[80013,63313],[-371,-505],[-231,-558],[-61,-410],[212,-623],[260,-772],[252,-365],[169,-475],[127,-1093],[-37,-1039],[-232,-389],[-318,-381],[-227,-492],[-346,-550],[-101,378],[78,401],[-206,335]],[[86327,75524],[0,0]],[[86327,75524],[-106,36],[-120,-200],[-83,-202],[10,-424],[-143,-130],[-50,-105],[-104,-174],[-185,-97],[-121,-159],[-9,-256],[-32,-65],[111,-96],[157,-259]],[[85652,73393],[-40,-143],[-118,-39],[-197,-29],[-108,-266],[-124,21],[-17,-54]],[[85048,72883],[-135,112],[-34,-111],[-81,-49],[-10,112],[-72,54],[-75,94],[76,260],[66,69],[-25,108],[71,319],[-18,96],[-163,65],[-131,158]],[[84517,74170],[227,379],[306,318],[191,419],[131,-185],[241,-22],[-44,312],[429,254],[111,331],[179,-348]],[[85652,73393],[240,-697],[68,-383],[3,-681],[-105,-325],[-252,-113],[-222,-245],[-250,-51],[-31,322],[51,443],[-122,615],[206,99],[-190,506]],[[82410,80055],[-135,-446],[-197,-590],[72,-241],[157,74],[274,-92],[214,219],[223,-189],[251,-413],[-30,-210],[-219,66],[-404,-78],[-195,-168],[-204,-391],[-423,-229],[-277,-313],[-286,120],[-156,53],[-146,-381],[89,-227],[45,-195],[-194,-199],[-200,-316],[-324,-208],[-417,-22],[-448,-205],[-324,-318],[-123,184],[-336,-1],[-411,359],[-274,88],[-369,-82],[-574,133],[-306,-14],[-163,351],[-127,544],[-171,66],[-336,368],[-374,83],[-330,101],[-100,256],[107,690],[-192,476],[-396,222],[-233,313],[-73,413]],[[75742,63602],[-147,937],[-76,-2],[-46,-377],[-152,306],[86,336],[124,34],[128,500],[-160,101],[-257,-8],[-265,81],[-24,410],[-133,30],[-220,255],[-98,-401],[200,-313],[-173,-220],[-62,-215],[171,-159],[-47,-356],[96,-444],[43,-486]],[[74730,63611],[-39,-216],[-189,7],[-343,-122],[16,-445],[-148,-349],[-400,-398],[-311,-695],[-209,-373],[-276,-387],[-1,-271],[-138,-146],[-251,-212],[-129,-31],[-84,-450],[58,-769],[15,-490],[-118,-561],[-1,-1004],[-144,-29],[-126,-450],[84,-195],[-253,-168],[-93,-401],[-112,-170],[-263,552],[-128,827],[-107,596],[-97,279],[-148,568],[-69,739],[-48,369],[-253,811],[-115,1145],[-83,756],[1,716],[-54,553],[-404,-353],[-196,70],[-362,716],[133,214],[-82,232],[-326,501]],[[68937,64577],[185,395],[612,-2],[-56,507],[-156,300],[-31,455],[-182,265],[306,619],[323,-45],[290,620],[174,599],[270,593],[-4,421],[236,342],[-224,292],[-96,400],[-99,517],[137,255],[421,-144],[310,88],[268,496]],[[71621,71550],[298,-692],[-28,-482],[111,-303],[-9,-301],[-200,79],[78,-651],[273,-374],[386,-413]],[[72530,68413],[-176,-268],[-108,-553],[269,-224],[262,-289],[362,-332],[381,-76],[160,-301],[215,-56],[334,-138],[231,10],[32,234],[-36,375],[21,255]],[[74477,67050],[170,124],[23,-465]],[[74670,66709],[6,-119],[252,-224],[175,92],[234,-39],[227,17],[20,363],[-113,189]],[[75471,66988],[224,74],[252,439],[321,376],[233,-145],[198,249],[130,-367],[-94,-248],[300,-89]],[[75657,62792],[-79,308],[-16,301],[-53,285],[-116,344],[-256,23],[25,-243],[-87,-329],[-118,120],[-41,-108],[-78,65],[-108,53]],[[74670,66709],[184,439],[150,150],[198,-137],[147,-14],[122,-159]],[[72530,68413],[115,141],[223,-182],[280,-385],[157,-84],[93,-284],[216,-117],[225,-259],[314,-136],[324,-57]],[[68937,64577],[-203,150],[-83,424],[-215,450],[-512,-111],[-451,-11],[-391,-83]],[[67082,65396],[105,687],[400,305],[-23,272],[-133,96],[-7,520],[-266,260],[-112,357],[-137,310]],[[66909,68203],[465,-301],[278,88],[166,-75],[56,129],[194,-52],[361,246],[10,503],[154,334],[207,-1],[31,166],[212,77],[103,-55],[108,166],[-15,355],[118,356],[177,150],[-110,390],[265,-18],[76,213],[-12,227],[139,248],[-32,294],[-66,250],[163,258],[298,124],[319,68],[141,109],[162,67]],[[70877,72519],[205,-276],[82,-454],[457,-239]],[[68841,72526],[85,-72],[201,189],[93,-114],[90,271],[166,-12],[43,86],[29,239],[120,205],[150,-134],[-30,-181],[84,-28],[-26,-496],[110,-194],[97,125],[123,58],[173,265],[192,-44],[286,-1]],[[70827,72688],[50,-169]],[[66909,68203],[252,536],[-23,380],[-210,100],[-22,375],[-91,472],[119,323],[-121,87],[76,430],[113,736]],[[67002,71642],[284,-224],[209,79],[58,268],[219,89],[157,180],[55,472],[234,114],[44,211],[131,-158],[84,-19]],[[69725,74357],[-101,-182],[-303,98],[-26,-340],[301,46],[343,-192],[526,89]],[[70465,73876],[70,-546],[91,59],[169,-134],[-10,-230],[42,-337]],[[72294,75601],[-39,-134],[-438,-320],[-99,-234],[-356,-70],[-105,-378],[-294,80],[-192,-116],[-266,-279],[39,-138],[-79,-136]],[[67002,71642],[-24,498],[-207,21],[-318,523],[-221,65],[-308,299],[-197,55],[-122,-110],[-186,17],[-197,-338],[-244,-114]],[[64978,72558],[-52,417],[40,618],[-216,200],[71,405],[-184,34],[61,498],[262,-145],[244,189],[-202,355],[-80,338],[-224,-151],[-28,-433],[-87,383]],[[62436,72541],[-152,473],[55,183],[-87,678],[190,168]],[[62442,74043],[44,-223],[141,-273],[190,-78]],[[62817,73469],[101,17]],[[62918,73486],[327,436],[104,44],[82,-174],[-95,-292],[173,-309],[69,29]],[[63578,73220],[88,-436],[263,-123],[193,-296],[395,-102],[434,156],[27,139]],[[67082,65396],[-523,179],[-303,136],[-313,76],[-118,725],[-133,105],[-214,-106],[-280,-286],[-339,196],[-281,454],[-267,168],[-186,561],[-205,788],[-149,-96],[-177,196],[-104,-231]],[[59999,71049],[-26,452],[68,243]],[[60041,71744],[74,129],[75,130],[15,329],[91,-115],[306,165],[147,-112],[229,2],[320,222],[149,-10],[316,92]],[[62817,73469],[-113,342],[1,91],[-123,-2],[-82,159],[-58,-16]],[[62442,74043],[-109,172],[-207,147],[27,288],[-47,208]],[[62106,74858],[386,92]],[[62492,74950],[57,-155],[106,-103],[-56,-148],[148,-202],[-78,-189],[118,-160],[124,-97],[7,-410]],[[55734,91409],[371,-289],[433,-402],[8,-910],[93,-230]],[[56639,89578],[-478,-167],[-269,-413],[43,-361],[-441,-475],[-537,-509],[-202,-832],[198,-416],[265,-328],[-255,-666],[-289,-138],[-106,-992],[-157,-554],[-337,57],[-158,-468],[-321,-27],[-89,558],[-232,671],[-211,835]],[[58829,81362],[-239,-35],[-85,-129],[-18,-298],[-111,57],[-250,-28],[-73,138],[-104,-103],[-105,86],[-218,12],[-310,141],[-281,47],[-215,-14],[-152,-160],[-133,-23]],[[56535,81053],[-6,263],[-85,274],[166,121],[2,235],[-77,225],[-12,261]],[[56523,82432],[268,-4],[302,223],[64,333],[228,190],[-26,264]],[[57359,83438],[169,100],[298,228]],[[60617,78409],[-222,-48],[-185,-191],[-260,-31],[-239,-220],[14,-317]],[[59287,77741],[-38,64],[-432,149],[-19,221],[-257,-73],[-103,-325],[-215,-437]],[[58223,77340],[-126,101],[-131,-95],[-124,109]],[[57842,77455],[70,64],[49,203],[76,188],[-20,106],[58,47],[27,-81],[164,-18],[74,44],[-52,60],[19,88],[-97,150],[-40,247],[-101,97],[20,200],[-125,159],[-115,22],[-204,184],[-185,-58],[-66,-87]],[[57394,79070],[-118,0],[-69,-139],[-205,-56],[-95,-91],[-129,144],[-178,3],[-172,65],[-120,-127]],[[56308,78869],[-19,159],[-155,161]],[[56134,79189],[55,238],[77,154]],[[56266,79581],[60,-35],[-71,266],[252,491],[138,69],[29,166],[-139,515]],[[56266,79581],[-264,227],[-200,-84],[-131,61],[-165,-127],[-140,210],[-114,-81],[-16,36]],[[55236,79823],[-127,291],[-207,36],[-26,185],[-191,66],[-41,-153],[-151,122],[17,163],[-207,51],[-132,191]],[[54171,80775],[-114,377],[22,204],[-69,316],[-101,210],[77,158],[-64,300]],[[53922,82340],[189,174],[434,273],[350,200],[277,-100],[21,-144],[268,-7]],[[56314,82678],[142,-64],[67,-182]],[[54716,79012],[-21,-241],[-156,-2],[53,-128],[-92,-380]],[[54500,78261],[-53,-100],[-243,-14],[-140,-134],[-229,45]],[[53835,78058],[-398,153],[-62,205],[-274,-102],[-32,-113],[-169,84]],[[52900,78285],[-142,16],[-125,108],[42,145],[-10,104]],[[52665,78658],[83,33],[141,-164],[39,156],[245,-25],[199,106],[133,-18],[87,-121],[26,100],[-40,385],[100,75],[98,272]],[[53776,79457],[206,-190],[157,242],[98,44],[215,-180],[131,30],[128,-111]],[[54711,79292],[-23,-75],[28,-205]],[[56308,78869],[-170,-123],[-131,-401],[-168,-401],[-223,-111]],[[55616,77833],[-173,26],[-213,-155]],[[55230,77704],[-104,-89],[-229,114],[-208,253],[-88,73]],[[54601,78055],[-54,200],[-47,6]],[[54716,79012],[141,-151],[103,-65],[233,73],[22,118],[111,18],[135,92],[30,-38],[130,74],[66,139],[91,36],[297,-180],[59,61]],[[57842,77455],[-50,270],[30,252],[-9,259],[-160,352],[-89,249],[-86,175],[-84,58]],[[58223,77340],[6,-152],[-135,-128],[-84,56],[-78,-713]],[[57932,76403],[-163,62],[-202,215],[-327,-138],[-138,-150],[-408,31],[-213,92],[-108,-43],[-80,243]],[[56293,76715],[-51,103],[65,99],[-69,74],[-87,-133],[-162,172],[-22,244],[-169,139],[-31,188],[-151,232]],[[55907,83187],[-59,497]],[[55848,83684],[318,181],[466,-38],[273,59],[39,-123],[148,-38],[267,-287]],[[55848,83684],[10,445],[136,371],[262,202],[221,-442],[223,12],[53,453]],[[56753,84725],[237,105],[121,-73],[239,-219],[229,-1]],[[56753,84725],[32,349],[-102,-75],[-176,210],[-24,340],[351,164],[350,86],[301,-97],[287,17]],[[54171,80775],[-124,-62],[-73,68],[-70,-113],[-200,-114],[-103,-147],[-202,-129],[49,-176],[30,-249],[141,-142],[157,-254]],[[52665,78658],[-298,181],[-57,-128],[-236,4]],[[51718,79804],[16,259],[-56,133]],[[51678,80196],[32,400]],[[51710,80596],[-47,619],[167,0],[70,222],[69,541],[-51,200]],[[51918,82178],[54,125],[232,32],[52,-130],[188,291],[-63,222],[-13,335]],[[52368,83053],[210,-78],[178,90]],[[52756,83065],[4,-228],[281,-138],[-3,-210],[283,111],[156,162],[313,-233],[132,-189]],[[57932,76403],[-144,-245],[-101,-422],[89,-337]],[[57776,75399],[-239,79],[-283,-186]],[[57254,75292],[-3,-294],[-252,-56],[-196,206],[-222,-162],[-206,17]],[[56375,75003],[-20,391],[-139,189]],[[56216,75583],[46,84],[-30,70],[47,188],[105,185],[-135,255],[-24,216],[68,134]],[[57302,71436],[-35,-175],[-400,-50],[3,98],[-339,115],[52,251],[152,-199],[216,34],[207,-42],[-7,-103],[151,71]],[[57254,75292],[135,-157],[-86,-369],[-66,-67]],[[57237,74699],[-169,17],[-145,56],[-336,-154],[192,-332],[-141,-96],[-154,-1],[-147,305],[-52,-130],[62,-353],[139,-277],[-105,-129],[155,-273],[137,-171],[4,-334],[-257,157],[82,-302],[-176,-62],[105,-521],[-184,-8],[-228,257],[-104,473],[-49,393],[-108,272],[-143,337],[-18,168]],[[55597,73991],[129,287],[16,192],[91,85],[5,155]],[[55838,74710],[182,53],[106,129],[150,-12],[46,103],[53,20]],[[60041,71744],[-102,268],[105,222],[-169,-51],[-233,136],[-191,-340],[-421,-66],[-225,317],[-300,20],[-64,-245],[-192,-70],[-268,314],[-303,-11],[-165,588],[-203,328],[135,459],[-176,283],[308,565],[428,23],[117,449],[529,-78],[334,383],[324,167],[459,13],[485,-417],[399,-228],[323,91],[239,-53],[328,309]],[[61542,75120],[296,28],[268,-290]],[[57776,75399],[33,-228],[243,-190],[-51,-145],[-330,-33],[-118,-182],[-232,-319],[-87,276],[3,121]],[[55597,73991],[-48,41],[-5,130],[-154,199],[-24,281],[23,403],[38,184],[-47,93]],[[55380,75322],[-18,188],[120,291],[18,-111],[75,52]],[[55575,75742],[59,-159],[66,-60],[19,-214]],[[55719,75309],[-35,-201],[39,-254],[115,-144]],[[55230,77704],[67,-229],[89,-169],[-107,-222]],[[55279,77084],[-126,131],[-192,-8],[-239,98],[-130,-13],[-60,-123],[-99,136],[-59,-245],[136,-277],[61,-183],[127,-221],[106,-130],[105,-247],[246,-224]],[[55155,75778],[-31,-100]],[[55124,75678],[-261,218],[-161,213],[-254,176],[-233,434],[56,45],[-127,248],[-5,200],[-179,93],[-85,-255],[-82,198],[6,205],[10,9]],[[53809,77462],[194,-20],[51,100],[94,-97],[109,-11],[-1,165],[97,60],[27,239],[221,157]],[[52900,78285],[-22,-242],[-122,-100],[-206,75],[-60,-239],[-132,-19],[-48,94],[-156,-200],[-134,-28],[-120,126]],[[51576,79843],[30,331],[72,22]],[[50698,80799],[222,117]],[[50920,80916],[204,-47],[257,123],[176,-258],[153,-138]],[[50920,80916],[143,162],[244,869],[380,248],[231,-17]],[[47490,75324],[101,150],[113,86],[70,-289],[164,0],[47,75],[162,-21],[78,-296],[-129,-160],[-3,-461],[-45,-86],[-11,-280],[-120,-48],[111,-355],[-77,-388],[96,-175],[-38,-161],[-103,-222],[23,-195]],[[47929,72498],[-112,-153],[-146,83],[-143,-65],[42,462],[-26,363],[-124,55],[-67,224],[22,386],[111,215],[20,239],[58,355],[-6,250],[-56,212],[-12,200]],[[47490,75324],[14,420],[-114,257],[393,426],[340,-106],[373,3],[296,-101],[230,31],[449,-19]],[[50829,75674],[15,-344],[-263,-393],[-356,-125],[-25,-199],[-171,-327],[-107,-481],[108,-338],[-160,-263],[-60,-384],[-210,-118],[-197,-454],[-352,-9],[-265,11],[-174,-209],[-106,-223],[-136,49],[-103,199],[-79,340],[-259,92]],[[48278,82406],[46,-422],[-210,-528],[-493,-349],[-393,89],[225,617],[-145,601],[378,463],[210,276]],[[47896,83153],[57,-317],[-57,-317],[172,9],[210,-122]],[[96049,38125],[228,-366],[144,-272],[-105,-142],[-153,160],[-199,266],[-179,313],[-184,416],[-38,201],[119,-9],[156,-201],[122,-200],[89,-166]],[[95032,44386],[78,-203],[-194,4],[-106,363],[166,-142],[56,-22]],[[94910,44908],[-42,-109],[-206,512],[-57,353],[94,0],[100,-473],[111,-283]],[[94680,44747],[-108,-14],[-170,60],[-58,91],[17,235],[183,-93],[91,-124],[45,-155]],[[94344,45841],[65,-187],[12,-119],[-218,251],[-152,212],[-104,197],[41,60],[128,-142],[228,-272]],[[93649,46431],[111,-193],[-56,-33],[-121,134],[-114,243],[14,99],[166,-250]],[[99134,26908],[-105,-319],[-138,-404],[-214,-236],[-48,155],[-116,85],[160,486],[-91,326],[-299,236],[8,214],[201,206],[47,455],[-13,382],[-113,396],[8,104],[-133,244],[-218,523],[-117,418],[104,46],[151,-328],[216,-153],[78,-526],[202,-622],[5,403],[126,-161],[41,-447],[224,-192],[188,-48],[158,226],[141,-69],[-67,-524],[-85,-345],[-212,12],[-74,-179],[26,-254],[-41,-110]],[[97129,24846],[238,310],[167,306],[123,441],[106,149],[41,330],[195,273],[61,-251],[63,-244],[198,239],[80,-249],[0,-249],[-103,-274],[-182,-435],[-142,-238],[103,-284],[-214,-7],[-238,-223],[-75,-387],[-157,-597],[-219,-264],[-138,-169],[-256,13],[-180,194],[-302,42],[-46,217],[149,438],[349,583],[179,111],[200,225]],[[91024,26469],[166,-39],[20,-702],[-95,-203],[-29,-476],[-97,162],[-193,-412],[-57,32],[-171,19],[-171,505],[-38,390],[-160,515],[7,271],[181,-52],[269,-204],[151,81],[217,113]],[[85040,31546],[-294,-303],[-241,-137],[-53,-309],[-103,-240],[-236,-15],[-174,-52],[-246,107],[-199,-64],[-191,-27],[-165,-315],[-81,26],[-140,-167],[-133,-187],[-203,23],[-186,0],[-295,377],[-149,113],[6,338],[138,81],[47,134],[-10,212],[34,411],[-31,350],[-147,598],[-45,337],[12,336],[-111,385],[-7,174],[-123,235],[-35,463],[-158,467],[-39,252],[122,-255],[-93,548],[137,-171],[83,-229],[-5,303],[-138,465],[-26,186],[-65,177],[31,341],[56,146],[38,295],[-29,346],[114,425],[21,-450],[118,406],[225,198],[136,252],[212,217],[126,46],[77,-73],[219,220],[168,66],[42,129],[74,54],[153,-14],[292,173],[151,262],[71,316],[163,300],[13,236],[7,321],[194,502],[117,-510],[119,118],[-99,279],[87,287],[122,-128],[34,449],[152,291],[67,233],[140,101],[4,165],[122,-69],[5,148],[122,85],[134,80],[205,-271],[155,-350],[173,-4],[177,-56],[-59,325],[133,473],[126,155],[-44,147],[121,338],[168,208],[142,-70],[234,111],[-5,302],[-204,195],[148,86],[184,-147],[148,-242],[234,-151],[79,60],[172,-182],[162,169],[105,-51],[65,113],[127,-292],[-74,-316],[-105,-239],[-96,-20],[32,-236],[-81,-295],[-99,-291],[20,-166],[221,-327],[214,-189],[143,-204],[201,-350],[78,1],[145,-151],[43,-183],[265,-200],[183,202],[55,317],[56,262],[34,324],[85,470],[-39,286],[20,171],[-32,339],[37,445],[53,120],[-43,197],[67,313],[52,325],[7,168],[104,222],[78,-289],[19,-371],[70,-71],[11,-249],[101,-300],[21,-335],[-10,-214],[100,-464],[179,223],[92,-250],[133,-231],[-29,-262],[60,-506],[42,-295],[70,-72],[75,-505],[-27,-307],[90,-400],[301,-309],[197,-281],[186,-257],[-37,-143],[159,-371],[108,-639],[111,130],[113,-256],[68,91],[48,-626],[197,-363],[129,-226],[217,-478],[78,-475],[7,-337],[-19,-365],[132,-502],[-16,-523],[-48,-274],[-75,-527],[6,-339],[-55,-423],[-123,-538],[-205,-290],[-102,-458],[-93,-292],[-82,-510],[-107,-294],[-70,-442],[-36,-407],[14,-187],[-159,-205],[-311,-22],[-257,-242],[-127,-229],[-168,-254],[-230,262],[-170,104],[43,308],[-152,-112],[-243,-428],[-240,160],[-158,94],[-159,42],[-269,171],[-179,364],[-52,449],[-64,298],[-137,240],[-267,71],[91,287],[-67,438],[-136,-408],[-247,-109],[146,327],[42,341],[107,289],[-22,438],[-226,-504],[-174,-202],[-106,-470],[-217,243],[9,313],[-174,429],[-147,221],[52,137],[-356,358],[-195,17],[-267,287],[-498,-56],[-359,-211],[-317,-197],[-265,39]],[[72718,55024],[-42,-615],[-116,-168],[-242,-135],[-132,470],[-49,849],[126,959],[192,-328],[129,-416],[134,-616]],[[80409,61331],[-228,183],[-8,509],[137,267],[304,166],[159,-14],[62,-226],[-122,-260],[-64,-341],[-240,-284]],[[84517,74170],[-388,-171],[-204,-277],[-300,-161],[148,274],[-58,230],[220,397],[-147,310],[-242,-209],[-314,-411],[-171,-381],[-272,-29],[-142,-275],[147,-400],[227,-97],[9,-265],[220,-173],[311,422],[247,-230],[179,-15],[45,-310],[-393,-165],[-130,-319],[-270,-296],[-142,-414],[299,-325],[109,-581],[169,-541],[189,-454],[-5,-439],[-174,-161],[66,-315],[164,-184],[-43,-481],[-71,-468],[-155,-53],[-203,-640],[-225,-775],[-258,-705],[-382,-545],[-386,-498],[-313,-68],[-170,-262],[-96,192],[-157,-294],[-388,-296],[-294,-90],[-95,-624],[-154,-35],[-73,429],[66,228],[-373,189],[-131,-96]],[[83826,64992],[-167,-947],[-119,-485],[-146,499],[-32,438],[163,581],[223,447],[127,-176],[-49,-357]],[[53835,78058],[-31,-291],[67,-251]],[[53871,77516],[-221,86],[-226,-210],[15,-293],[-34,-168],[91,-301],[261,-298],[140,-488],[309,-476],[217,3],[68,-130],[-78,-118],[249,-214],[204,-178],[238,-308],[29,-111],[-52,-211],[-154,276],[-242,97],[-116,-382],[200,-219],[-33,-309],[-116,-35],[-148,-506],[-116,-46],[1,181],[57,317],[60,126],[-108,342],[-85,298],[-115,74],[-82,255],[-179,107],[-120,238],[-206,38],[-217,267],[-254,384],[-189,340],[-86,585],[-138,68],[-226,195],[-128,-80],[-161,-274],[-115,-43]],[[54100,73116],[211,51],[-100,-465],[41,-183],[-58,-303],[-213,222],[-141,64],[-387,300],[38,304],[325,-54],[284,64]],[[52419,74744],[139,183],[166,-419],[-39,-782],[-126,38],[-113,-197],[-105,156],[-11,713],[-64,338],[153,-30]],[[52368,83053],[-113,328],[-8,604],[46,159],[80,177],[244,37],[98,163],[223,167],[-9,-304],[-82,-192],[33,-166],[151,-89],[-68,-223],[-83,64],[-200,-425],[76,-288]],[[53436,83731],[88,-296],[-166,-478],[-291,333],[-39,246],[408,195]],[[47896,83153],[233,24],[298,-365],[-149,-406]],[[49140,82132],[1,0],[40,343],[-186,364],[-4,8],[-337,104],[-66,160],[101,264],[-92,163],[-149,-279],[-17,569],[-140,301],[101,611],[216,480],[222,-47],[335,49],[-297,-639],[283,81],[304,-3],[-72,-481],[-250,-530],[287,-38],[22,-62],[248,-697],[190,-95],[171,-673],[79,-233],[337,-113],[-34,-378],[-142,-173],[111,-305],[-250,-310],[-371,6],[-473,-163],[-130,116],[-183,-276],[-257,67],[-195,-226],[-148,118],[407,621],[249,127],[-2,1],[-434,98],[-79,235],[291,183],[-152,319],[52,387],[413,-54]],[[45969,89843],[-64,-382],[314,-403],[-361,-451],[-801,-405],[-240,-107],[-365,87],[-775,187],[273,261],[-605,289],[492,114],[-12,174],[-583,137],[188,385],[421,87],[433,-400],[422,321],[349,-167],[453,315],[461,-42]],[[63495,75281],[146,-311],[141,-419],[130,-28],[85,-159],[-228,-47],[-49,-459],[-48,-207],[-101,-138],[7,-293]],[[62492,74950],[68,96],[207,-169],[149,-36],[38,70],[-136,319],[72,82]],[[61542,75120],[42,252],[-70,403],[-160,218],[-154,68],[-102,181]],[[83564,58086],[-142,450],[238,-22],[97,-213],[-74,-510],[-119,295]],[[84051,56477],[70,165],[30,367],[153,35],[-44,-398],[205,570],[-26,-563],[-100,-195],[-87,-373],[-87,-175],[-171,409],[57,158]],[[85104,55551],[28,-392],[16,-332],[-94,-540],[-102,602],[-130,-300],[89,-435],[-79,-277],[-327,343],[-78,428],[84,280],[-176,280],[-87,-245],[-131,23],[-205,-330],[-46,173],[109,498],[175,166],[151,223],[98,-268],[212,162],[45,264],[196,15],[-16,457],[225,-280],[23,-297],[20,-218]],[[82917,56084],[-369,-561],[136,414],[200,364],[167,409],[146,587],[49,-482],[-183,-325],[-146,-406]],[[83982,61347],[-46,-245],[95,-423],[-73,-491],[-164,-196],[-43,-476],[62,-471],[147,-65],[123,70],[347,-328],[-27,-321],[91,-142],[-29,-272],[-216,290],[-103,310],[-71,-217],[-177,354],[-253,-87],[-138,130],[14,244],[87,151],[-83,136],[-36,-213],[-137,340],[-41,257],[-11,566],[112,-195],[29,925],[90,535],[169,-1],[171,-168],[85,153],[26,-150]],[[83899,57324],[-43,282],[166,-183],[177,1],[-5,-247],[-129,-251],[-176,-178],[-10,275],[20,301]],[[84861,57766],[78,-660],[-214,157],[5,-199],[68,-364],[-132,-133],[-11,416],[-84,31],[-43,357],[163,-47],[-4,224],[-169,451],[266,-13],[77,-220]],[[78372,54256],[64,-56],[164,-356],[116,-396],[16,-398],[-29,-269],[27,-203],[20,-349],[98,-163],[109,-523],[-5,-199],[-197,-40],[-263,438],[-329,469],[-32,301],[-161,395],[-38,489],[-100,322],[30,431],[-61,250]],[[80461,51765],[204,-202],[214,110],[56,500],[119,112],[333,128],[199,467],[137,374]],[[81723,53254],[126,-307],[58,202],[133,-19],[16,377],[13,291]],[[82069,53798],[214,411],[140,462],[112,2],[143,-299],[13,-257],[183,-165],[231,-177],[-20,-232],[-186,-29],[50,-289],[-205,-201]],[[81723,53254],[110,221],[236,323]],[[53809,77462],[62,54]],[[57797,86326],[-504,-47],[-489,-216],[-452,-125],[-161,323],[-269,193],[62,582],[-135,533],[133,345],[252,371],[635,640],[185,124],[-28,250],[-387,279]],[[54711,79292],[39,130],[123,-10],[95,61],[7,55],[54,28],[18,134],[64,26],[43,106],[82,1]],[[60669,61213],[161,-684],[77,-542],[152,-288],[379,-558],[154,-336],[151,-341],[87,-203],[136,-178]],[[61966,58083],[-83,-144],[-119,51]],[[61764,57990],[-95,191],[-114,346],[-124,190],[-71,204],[-242,237],[-191,7],[-67,124],[-163,-139],[-168,268],[-87,-441],[-323,124]],[[89411,73729],[-256,-595],[4,-610],[-104,-472],[48,-296],[-145,-416],[-355,-278],[-488,-36],[-396,-675],[-186,227],[-12,442],[-483,-130],[-329,-279],[-325,-11],[282,-435],[-186,-1004],[-179,-248],[-135,229],[69,533],[-176,172],[-113,405],[263,182],[145,371],[280,306],[203,403],[553,177],[297,-121],[291,1050],[185,-282],[408,591],[158,229],[174,723],[-47,664],[117,374],[295,108],[152,-819],[-9,-479]],[[90169,76553],[197,250],[62,-663],[-412,-162],[-244,-587],[-436,404],[-152,-646],[-308,-9],[-39,587],[138,455],[296,33],[81,817],[83,460],[326,-615],[213,-198],[195,-126]],[[86769,70351],[154,352],[158,-68],[114,248],[204,-127],[35,-203],[-156,-357],[-114,189],[-143,-137],[-73,-346],[-181,168],[2,281]],[[64752,60417],[-201,-158],[-54,-263],[-6,-201],[-277,-249],[-444,-276],[-249,-417],[-122,-33],[-83,35],[-163,-245],[-177,-114],[-233,-30],[-70,-34],[-61,-156],[-73,-43],[-43,-150],[-137,13],[-89,-80],[-192,30],[-72,345],[8,323],[-46,174],[-54,437],[-80,243],[56,29],[-29,270],[34,114],[-12,257]],[[61883,60238],[121,189],[-28,249],[74,290],[114,-153],[75,53],[321,14],[50,-59],[269,-60],[106,30],[70,-197],[130,99],[199,620],[259,266],[801,226]],[[63448,67449],[109,-510],[137,-135],[47,-207],[190,-249],[16,-243],[-27,-197],[35,-199],[80,-165],[37,-194],[41,-145]],[[64274,65130],[53,-226]],[[61883,60238],[-37,252],[-83,178],[-22,236],[-143,212],[-148,495],[-79,482],[-192,406],[-124,97],[-184,563],[-32,411],[12,350],[-159,655],[-130,231],[-150,122],[-92,339],[15,133],[-77,306],[-81,132],[-108,440],[-170,476],[-141,406],[-139,-3],[44,325],[12,206],[34,236]],[[36483,4468],[141,0],[414,127],[419,-127],[342,-255],[120,-359],[33,-254],[11,-301],[-430,-186],[-452,-150],[-522,-139],[-582,-116],[-658,35],[-365,197],[49,243],[593,162],[239,197],[174,254],[126,220],[168,209],[180,243]],[[31586,3163],[625,-23],[599,-58],[207,243],[147,208],[288,-243],[-82,-301],[-81,-266],[-582,81],[-621,-35],[-348,197],[0,23],[-152,174]],[[29468,8472],[190,70],[321,-23],[82,301],[16,219],[-6,475],[158,278],[256,93],[147,-220],[65,-220],[120,-267],[92,-254],[76,-267],[33,-266],[-49,-231],[-76,-220],[-326,-81],[-311,-116],[-364,11],[136,232],[-327,-81],[-310,-81],[-212,174],[-16,243],[305,231]],[[21575,8103],[174,104],[353,-81],[403,-46],[305,-81],[304,69],[163,-335],[-217,46],[-337,-23],[-343,23],[-376,-35],[-283,116],[-146,243]],[[15938,7061],[60,197],[332,-104],[359,-93],[332,104],[-158,-208],[-261,-151],[-386,47],[-278,208]],[[14643,7177],[202,127],[277,-139],[425,-231],[-164,23],[-359,58],[-381,162]],[[4524,4144],[169,220],[517,-93],[277,-185],[212,-209],[76,-266],[-533,-81],[-364,208],[-163,209],[-11,35],[-180,162]],[[0,529],[16,-5],[245,344],[501,-185],[32,21],[294,188],[38,-7],[32,-4],[402,-246],[352,246],[63,34],[816,104],[265,-138],[130,-71],[419,-196],[789,-151],[625,-185],[1072,-139],[800,162],[1181,-116],[669,-185],[734,174],[773,162],[60,278],[-1094,23],[-898,139],[-234,231],[-745,128],[49,266],[103,243],[104,220],[-55,243],[-462,162],[-212,209],[-430,185],[675,-35],[642,93],[402,-197],[495,173],[457,220],[223,197],[-98,243],[-359,162],[-408,174],[-571,35],[-500,81],[-539,58],[-180,220],[-359,185],[-217,208],[-87,672],[136,-58],[250,-185],[457,58],[441,81],[228,-255],[441,58],[370,127],[348,162],[315,197],[419,58],[-11,220],[-97,220],[81,208],[359,104],[163,-196],[425,115],[321,151],[397,12],[375,57],[376,139],[299,128],[337,127],[218,-35],[190,-46],[414,81],[370,-104],[381,11],[364,81],[375,-57],[414,-58],[386,23],[403,-12],[413,-11],[381,23],[283,174],[337,92],[349,-127],[331,104],[300,208],[179,-185],[98,-208],[180,-197],[288,174],[332,-220],[375,-70],[321,-162],[392,35],[354,104],[418,-23],[376,-81],[381,-104],[147,254],[-180,197],[-136,209],[-359,46],[-158,220],[-60,220],[-98,440],[213,-81],[364,-35],[359,35],[327,-93],[283,-174],[119,-208],[376,-35],[359,81],[381,116],[342,70],[283,-139],[370,46],[239,451],[224,-266],[321,-104],[348,58],[228,-232],[365,-23],[337,-69],[332,-128],[218,220],[108,209],[278,-232],[381,58],[283,-127],[190,-197],[370,58],[288,127],[283,151],[337,81],[392,69],[354,81],[272,127],[163,186],[65,254],[-32,244],[-87,231],[-98,232],[-87,231],[-71,209],[-16,231],[27,232],[130,220],[109,243],[44,231],[-55,255],[-32,232],[136,266],[152,173],[180,220],[190,186],[223,173],[109,255],[152,162],[174,151],[267,34],[174,186],[196,115],[228,70],[202,150],[157,186],[218,69],[163,-151],[-103,-196],[-283,-174],[-120,-127],[-206,92],[-229,-58],[-190,-139],[-202,-150],[-136,-174],[-38,-231],[17,-220],[130,-197],[-190,-139],[-261,-46],[-153,-197],[-163,-185],[-174,-255],[-44,-220],[98,-243],[147,-185],[229,-139],[212,-185],[114,-232],[60,-220],[82,-232],[130,-196],[82,-220],[38,-544],[81,-220],[22,-232],[87,-231],[-38,-313],[-152,-243],[-163,-197],[-370,-81],[-125,-208],[-169,-197],[-419,-220],[-370,-93],[-348,-127],[-376,-128],[-223,-243],[-446,-23],[-489,23],[-441,-46],[-468,0],[87,-232],[424,-104],[311,-162],[174,-208],[-310,-185],[-479,58],[-397,-151],[-17,-243],[-11,-232],[327,-196],[60,-220],[353,-220],[588,-93],[500,-162],[398,-185],[506,-186],[690,-92],[681,-162],[473,-174],[517,-197],[272,-278],[136,-220],[337,209],[457,173],[484,186],[577,150],[495,162],[691,12],[680,-81],[560,-139],[180,255],[386,173],[702,12],[550,127],[522,128],[577,81],[614,104],[430,150],[-196,209],[-119,208],[0,220],[-539,-23],[-571,-93],[-544,0],[-77,220],[39,440],[125,128],[397,138],[468,139],[337,174],[337,174],[251,231],[380,104],[376,81],[190,47],[430,23],[408,81],[343,116],[337,139],[305,139],[386,185],[245,197],[261,173],[82,232],[-294,139],[98,243],[185,185],[288,116],[305,139],[283,185],[217,232],[136,277],[202,163],[331,-35],[136,-197],[332,-23],[11,220],[142,231],[299,-58],[71,-220],[331,-34],[360,104],[348,69],[315,-34],[120,-243],[305,196],[283,105],[315,81],[310,81],[283,139],[310,92],[240,128],[168,208],[207,-151],[288,81],[202,-277],[157,-209],[316,116],[125,232],[283,162],[365,-35],[108,-220],[229,220],[299,69],[326,23],[294,-11],[310,-70],[300,-34],[130,-197],[180,-174],[304,104],[327,24],[315,0],[310,11],[278,81],[294,70],[245,162],[261,104],[283,58],[212,162],[152,324],[158,197],[288,-93],[109,-208],[239,-139],[289,46],[196,-208],[206,-151],[283,139],[98,255],[250,104],[289,197],[272,81],[326,116],[218,127],[228,139],[218,127],[261,-69],[250,208],[180,162],[261,-11],[229,139],[54,208],[234,162],[228,116],[278,93],[256,46],[244,-35],[262,-58],[223,-162],[27,-254],[245,-197],[168,-162],[332,-70],[185,-162],[229,-162],[266,-35],[223,116],[240,243],[261,-127],[272,-70],[261,-69],[272,-46],[277,0],[229,-614],[-11,-150],[-33,-267],[-266,-150],[-218,-220],[38,-232],[310,12],[-38,-232],[-141,-220],[-131,-243],[212,-185],[321,-58],[321,104],[153,232],[92,220],[153,185],[174,174],[70,208],[147,289],[174,58],[316,24],[277,69],[283,93],[136,231],[82,220],[190,220],[272,151],[234,115],[153,197],[157,104],[202,93],[277,-58],[250,58],[272,69],[305,-34],[201,162],[142,393],[103,-162],[131,-278],[234,-115],[266,-47],[267,70],[283,-46],[261,-12],[174,58],[234,-35],[212,-127],[250,81],[300,0],[255,81],[289,-81],[185,197],[141,196],[191,163],[348,439],[179,-81],[212,-162],[185,-208],[354,-359],[272,-12],[256,0],[299,70],[299,81],[229,162],[190,174],[310,23],[207,127],[218,-116],[141,-185],[196,-185],[305,23],[190,-150],[332,-151],[348,-58],[288,47],[218,185],[185,185],[250,46],[251,-81],[288,-58],[261,93],[250,0],[245,-58],[256,-58],[250,104],[299,93],[283,23],[316,0],[255,58],[251,46],[76,290],[11,243],[174,-162],[49,-266],[92,-244],[115,-196],[234,-105],[315,35],[365,12],[250,35],[364,0],[262,11],[364,-23],[310,-46],[196,-186],[-54,-220],[179,-173],[299,-139],[310,-151],[360,-104],[375,-92],[283,-93],[315,-12],[180,197],[245,-162],[212,-185],[245,-139],[337,-58],[321,-69],[136,-232],[316,-139],[212,-208],[310,-93],[321,12],[299,-35],[332,12],[332,-47],[310,-81],[288,-139],[289,-116],[195,-173],[-32,-232],[-147,-208],[-125,-266],[-98,-209],[-131,-243],[-364,-93],[-163,-208],[-360,-127],[-125,-232],[-190,-220],[-201,-185],[-115,-243],[-70,-220],[-28,-266],[6,-220],[158,-232],[60,-220],[130,-208],[517,-81],[109,-255],[-501,-93],[-424,-127],[-528,-23],[-234,-336],[-49,-278],[-119,-220],[-147,-220],[370,-196],[141,-244],[239,-219],[338,-197],[386,-186],[419,-185],[636,-185],[142,-289],[800,-128],[53,-45],[208,-175],[767,151],[636,-186],[479,-142],[-99999,0]],[[59092,71341],[19,3],[40,143],[200,-8],[253,176],[-188,-251],[21,-111]],[[59437,71293],[-30,21],[-53,-45],[-42,12],[-14,-22],[-5,59],[-20,37],[-54,6],[-75,-51],[-52,31]],[[59437,71293],[8,-48],[-285,-240],[-136,77],[-64,237],[132,22]],[[45272,63236],[13,274],[106,161],[91,308],[-18,200],[96,417],[155,376],[93,95],[74,344],[6,315],[100,365],[185,216],[177,603],[5,8],[139,227],[259,65],[218,404],[140,158],[232,493],[-70,735],[106,508],[37,312],[179,399],[278,270],[206,244],[186,612],[87,362],[205,-2],[167,-251],[264,41],[288,-131],[121,-6]],[[56944,63578],[0,2175],[0,2101],[-83,476],[71,365],[-43,253],[101,283]],[[56990,69231],[369,10],[268,-156],[275,-175],[129,-92],[214,188],[114,169],[245,49],[198,-75],[75,-293],[65,193],[222,-140],[217,-33],[137,149]],[[59700,68010],[-78,-238],[-60,-446],[-75,-308],[-65,-103],[-93,191],[-125,263],[-198,847],[-29,-53],[115,-624],[171,-594],[210,-920],[102,-321],[90,-334],[249,-654],[-55,-103],[9,-384],[323,-530],[49,-121]],[[53191,70158],[326,-204],[117,51],[232,-98],[368,-264],[130,-526],[250,-114],[391,-248],[296,-293],[136,153],[133,272],[-65,452],[87,288],[200,277],[192,80],[375,-121],[95,-264],[104,-2],[88,-101],[276,-70],[68,-195]],[[59804,53833],[-164,643],[-127,137],[-48,236],[-141,288],[-171,42],[95,337],[147,14],[42,181]],[[61764,57990],[-98,-261],[-94,-277],[22,-163],[4,-180],[155,-10],[67,42],[62,-106]],[[61882,57035],[-61,-209],[103,-325],[102,-285],[106,-210],[909,-702],[233,4]],[[61966,58083],[66,-183],[-9,-245],[-158,-142],[119,-161]],[[61984,57352],[-102,-317]],[[61984,57352],[91,-109],[54,-245],[125,-247],[138,-2],[262,151],[302,70],[245,184],[138,39],[99,108],[158,20]],[[58449,49909],[-166,-182],[-67,60]],[[58564,52653],[115,161],[176,-132],[224,138],[195,-1],[171,272]],[[55279,77084],[100,2],[-69,-260],[134,-227],[-41,-278],[-65,-27]],[[55338,76294],[-52,-53],[-90,-138],[-41,-325]],[[55719,75309],[35,-5],[13,121],[164,91],[62,23]],[[55993,75539],[95,35],[128,9]],[[55993,75539],[-9,44],[33,71],[31,144],[-39,-4],[-54,110],[-46,28],[-36,94],[-52,36],[-40,84],[-50,-33],[-38,-196],[-66,-43]],[[55627,75874],[22,51],[-106,123],[-91,63],[-40,82],[-74,101]],[[55380,75322],[-58,46],[-78,192],[-120,118]],[[55627,75874],[-52,-132]],[[32866,56937],[160,77],[58,-21],[-11,-440],[-232,-65],[-50,53],[81,163],[-6,233]]]",
  ),
  jt = {
    scale: [0.0036000360003600037, 0.0016925586033320105],
    translate: [-180, -85.60903777459771],
  },
  m0 = {
    objects: $t,
    arcs: It,
    transform: jt,
  },
  F1 = Math.PI / 180,
  I3 = (t, e, o) => Math.max(e, Math.min(o, t)),
  N1 = (t, e) => {
    const o = Math.cos(e * F1);
    return [o * Math.sin(t * F1), Math.sin(e * F1), o * Math.cos(t * F1)];
  },
  i2 = (t) => [Math.atan2(t[0], t[2]) / F1, Math.asin(I3(t[1], -1, 1)) / F1],
  w2 = (t) => {
    const e = Math.hypot(t[0], t[1], t[2]) || 1;
    return [t[0] / e, t[1] / e, t[2] / e];
  },
  g0 = [1, 0, 0, 0],
  Bt = (t, e) => {
    const o = Math.sin(e / 2);
    return [Math.cos(e / 2), t[0] * o, t[1] * o, t[2] * o];
  },
  zt = (t, e) => [
    t[0] * e[0] - t[1] * e[1] - t[2] * e[2] - t[3] * e[3],
    t[0] * e[1] + t[1] * e[0] + t[2] * e[3] - t[3] * e[2],
    t[0] * e[2] - t[1] * e[3] + t[2] * e[0] + t[3] * e[1],
    t[0] * e[3] + t[1] * e[2] - t[2] * e[1] + t[3] * e[0],
  ],
  W0 = (t) => [t[0], -t[1], -t[2], -t[3]];
function m2(t, e) {
  const [o, n, a, l] = t,
    f = o * e[0] + a * e[2] - l * e[1],
    i = o * e[1] + l * e[0] - n * e[2],
    d = o * e[2] + n * e[1] - a * e[0],
    h = -n * e[0] - a * e[1] - l * e[2];
  return [
    f * o + h * -n + i * -l - d * -a,
    i * o + h * -a + d * -n - f * -l,
    d * o + h * -l + f * -a - i * -n,
  ];
}
function Z0(t, e, o) {
  let n = t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3];
  if ((n < 0 && ((e = e.map((f) => -f)), (n = -n)), n > 0.9995)) {
    const f = t.map((d, h) => d + (e[h] - d) * o),
      i = Math.hypot(...f);
    return f.map((d) => d / i);
  }
  const a = Math.acos(n),
    l = Math.sin(a);
  return t.map(
    (f, i) => (f * Math.sin((1 - o) * a) + e[i] * Math.sin(o * a)) / l,
  );
}
function Ft(t) {
  const [e, o, n, a] = t;
  return [
    1 - 2 * (n * n + a * a),
    2 * (o * n - e * a),
    2 * (o * a + e * n),
    2 * (o * n + e * a),
    1 - 2 * (o * o + a * a),
    2 * (n * a - e * o),
    2 * (o * a - e * n),
    2 * (n * a + e * o),
    1 - 2 * (o * o + n * n),
  ];
}
function Rt(t) {
  let e = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (const [v, k, g, w] of t) {
    const T = N1(v, k),
      M = N1(g, w);
    for (let x = 0; x < 3; x++)
      for (let E = 0; E < 3; E++) e[x * 3 + E] += T[x] * M[E];
  }
  const [o, n, a, l, f, i, d, h, p] = e,
    u = [
      [o + f + p, i - h, d - a, n - l],
      [i - h, o - f - p, n + l, d + a],
      [d - a, n + l, -o + f - p, i + h],
      [n - l, d + a, i + h, -o - f + p],
    ],
    y = t.length * 3;
  let S = [1, 0.1, 0.1, 0.1];
  for (let v = 0; v < 400; v++) {
    const k = u.map(
        (w, T) => w.reduce((M, x, E) => M + x * S[E], 0) + y * S[T],
      ),
      g = Math.hypot(...k);
    S = k.map((w) => w / g);
  }
  return S;
}
const V1 = [
    {
      id: "AF",
      name: translate("非洲"),
      color: "#e0a458",
      ref: [20, 2],
    },
    {
      id: "SA",
      name: translate("南美洲"),
      color: "#7cc79a",
      ref: [-60, -14],
    },
    {
      id: "NA",
      name: translate("北美洲"),
      color: "#72b7e8",
      ref: [-100, 48],
    },
    {
      id: "EU",
      name: translate("欧亚大陆"),
      color: "#d98d7a",
      ref: [85, 50],
    },
    {
      id: "IN",
      name: translate("印度"),
      color: "#e9d36b",
      ref: [79, 21],
    },
    {
      id: "AU",
      name: translate("澳大利亚"),
      color: "#c79be0",
      ref: [134, -25],
    },
    {
      id: "AN",
      name: translate("南极洲"),
      color: "#b9d4e6",
      ref: [45, -80],
    },
    {
      id: "AR",
      name: translate("阿拉伯"),
      color: "#e8b77a",
      ref: [46, 23],
    },
    {
      id: "MG",
      name: translate("马达加斯加"),
      color: "#d9c28a",
      ref: [46.8, -19],
    },
    {
      id: "PA",
      name: translate("太平洋"),
      color: "#7fa7d9",
      ref: [-155, 20],
    },
  ],
  j1 = Object.fromEntries(V1.map((t, e) => [t.id, e])),
  y5 = {
    AF: {
      parent: null,
      keys: [
        [0, null],
        [
          100,
          {
            a: [
              [-17.4, 14.7, -16, 9],
              [18.4, -33.9, 17, -43],
              [43.3, 11.5, 42, 5],
            ],
          },
        ],
        [
          200,
          {
            a: [
              [-17.4, 14.7, -12, 0],
              [18.4, -33.9, 12, -52],
              [43.3, 11.5, 42, -6],
            ],
          },
        ],
        [
          250,
          {
            a: [
              [-17.4, 14.7, -10, -4],
              [18.4, -33.9, 9, -57],
              [43.3, 11.5, 42, -11],
            ],
          },
        ],
      ],
    },
    SA: {
      parent: "AF",
      keys: [
        [0, null],
        [
          30,
          {
            f: 0.22,
            of: 130,
          },
        ],
        [
          66,
          {
            f: 0.5,
            of: 130,
          },
        ],
        [
          100,
          {
            f: 0.8,
            of: 130,
          },
        ],
        [
          130,
          {
            a: [
              [-34.9, -8.05, 9.3, 1],
              [-54.9, -34.9, 16, -30],
              [-50, 0, -8, 5],
              [-67, -54, 22, -42],
            ],
          },
        ],
      ],
    },
    NA: {
      parent: "AF",
      keys: [
        [0, null],
        [
          66,
          {
            f: 0.36,
            of: 185,
          },
        ],
        [
          130,
          {
            f: 0.72,
            of: 185,
          },
        ],
        [
          185,
          {
            a: [
              [-65.6, 43.4, -10.5, 32],
              [-75.5, 35.2, -17.8, 22],
              [-80.1, 25.5, -16.5, 11.5],
              [-53, 46.6, -12, 38],
            ],
          },
        ],
      ],
    },
    EU: {
      parent: "AF",
      keys: [
        [0, null],
        [
          30,
          {
            f: 0.16,
            of: 200,
          },
        ],
        [
          66,
          {
            f: 0.36,
            of: 200,
          },
        ],
        [
          120,
          {
            f: 0.72,
            of: 200,
          },
        ],
        [
          200,
          {
            a: [
              [-9.3, 42.9, -1.5, 44],
              [5.1, 62.2, -15.5, 63.5],
              [116.4, 39.9, 96, 50],
            ],
          },
        ],
      ],
    },
    MG: {
      parent: "AF",
      keys: [
        [0, null],
        [120, null],
        [
          165,
          {
            a: [
              [49.3, -12, 44, 0],
              [45.1, -25.6, 38, -12],
            ],
          },
        ],
      ],
    },
    IN: {
      parent: "MG",
      keys: [
        [0, null],
        [
          20,
          {
            a: [
              [72.8, 19, 71, 13],
              [77.2, 28.6, 76, 22.8],
              [80.3, 13.1, 78.8, 7],
            ],
          },
        ],
        [
          45,
          {
            a: [
              [72.8, 19, 67.5, 1],
              [77.2, 28.6, 73, 11],
              [80.3, 13.1, 76.2, -4.5],
            ],
          },
        ],
        [
          66,
          {
            a: [
              [72.8, 19, 57, -20],
              [77.2, 28.6, 63.5, -11],
              [80.3, 13.1, 64.5, -24.5],
            ],
          },
        ],
        [
          90,
          {
            a: [
              [72.8, 19, 52.5, -23],
              [77.5, 8.1, 52.5, -34.5],
              [88.4, 22.6, 64.5, -27.5],
            ],
          },
        ],
      ],
    },
    AR: {
      parent: "AF",
      keys: [
        [0, null],
        [
          25,
          {
            a: [
              [39.1, 21.5, 37.6, 20.3],
              [45, 12.8, 44.8, 10.9],
              [56, 26, 53.5, 24.8],
            ],
          },
        ],
      ],
    },
    AN: {
      parent: "AF",
      keys: [
        [0, null],
        [
          40,
          {
            f: 0.12,
            of: 165,
          },
        ],
        [
          100,
          {
            f: 0.55,
            of: 165,
          },
        ],
        [
          130,
          {
            f: 0.8,
            of: 165,
          },
        ],
        [
          165,
          {
            a: [
              [0, -90, 41, -46.5],
              [0, -70, 33, -32.5],
              [50, -67, 57.5, -23.5],
            ],
          },
        ],
      ],
    },
    AU: {
      parent: "AN",
      keys: [
        [0, null],
        [
          10,
          {
            f: 0.2,
            of: 90,
          },
        ],
        [
          20,
          {
            f: 0.4,
            of: 90,
          },
        ],
        [
          30,
          {
            f: 0.62,
            of: 90,
          },
        ],
        [
          45,
          {
            f: 0.85,
            of: 90,
          },
        ],
        [
          90,
          {
            a: [
              [115.1, -34.4, 98, -65.5],
              [146.8, -43.6, 157, -70.5],
              [131, -32, 127, -67.5],
            ],
          },
        ],
      ],
    },
    PA: {
      parent: null,
      keys: [[0, null]],
    },
  };
for (const t of Object.values(y5)) {
  const e = new Map();
  for (const [o, n] of t.keys) n ? n.a && e.set(o, Rt(n.a)) : e.set(o, g0);
  for (const [o, n] of t.keys)
    n && n.f != null && e.set(o, Z0(g0, e.get(n.of), n.f));
  t.q = t.keys.map(([o]) => [o, e.get(o)]);
}
function Yt(t, e) {
  const o = y5[t].q;
  if (e <= o[0][0]) return o[0][1];
  for (let n = 1; n < o.length; n++)
    if (e <= o[n][0]) {
      const [a, l] = o[n - 1],
        [f, i] = o[n],
        d = (e - a) / (f - a);
      return Z0(l, i, d * d * (3 - 2 * d) * 0.35 + d * 0.65);
    }
  return o[o.length - 1][1];
}
function z2(t) {
  const e = {},
    o = (n) => {
      if (e[n]) return e[n];
      const a = y5[n],
        l = Yt(n, t);
      return (e[n] = a.parent ? zt(o(a.parent), l) : l);
    };
  for (const n of V1) o(n.id);
  return V1.map((n) => e[n.id]);
}
const Gt = {
    SA: "Argentina|Chile|Uruguay|Brazil|Bolivia|Peru|Colombia|Venezuela|Guyana|Suriname|Ecuador|Paraguay|Falkland Is.|Trinidad and Tobago",
    NA: "Canada|United States of America|Mexico|Greenland|Bahamas|Cuba|Haiti|Dominican Rep.|Jamaica|Puerto Rico|Belize|Guatemala|Honduras|El Salvador|Nicaragua|Costa Rica|Panama|Iceland",
    AF: "Tanzania|W. Sahara|Dem. Rep. Congo|Somalia|Kenya|Sudan|Chad|South Africa|Lesotho|Zimbabwe|Botswana|Namibia|Senegal|Mali|Mauritania|Benin|Niger|Nigeria|Cameroon|Togo|Ghana|Côte d'Ivoire|Guinea|Guinea-Bissau|Liberia|Sierra Leone|Burkina Faso|Central African Rep.|Congo|Gabon|Eq. Guinea|Zambia|Malawi|Mozambique|eSwatini|Angola|Burundi|Gambia|Tunisia|Algeria|Morocco|Egypt|Libya|Ethiopia|Djibouti|Somaliland|Uganda|Rwanda|Eritrea|S. Sudan|Israel|Palestine|Lebanon",
    MG: "Madagascar",
    AR: "Saudi Arabia|Yemen|Oman|United Arab Emirates|Qatar|Kuwait|Jordan|Iraq|Syria",
    IN: "India|Pakistan|Nepal|Bhutan|Bangladesh|Sri Lanka",
    AU: "Australia|Papua New Guinea|New Zealand|New Caledonia|Solomon Is.|Vanuatu|Fiji|Timor-Leste",
    AN: "Antarctica|Fr. S. Antarctic Lands",
  },
  Q0 = {};
for (const [t, e] of Object.entries(Gt))
  for (const o of e.split("|")) Q0[o] = t;
const Ut = {
    Guatemala: 45,
    Belize: 60,
    Honduras: 45,
    "El Salvador": 30,
    Nicaragua: 30,
    "Costa Rica": 12,
    Panama: 8,
    Cuba: 50,
    Haiti: 50,
    "Dominican Rep.": 50,
    Jamaica: 50,
    "Puerto Rico": 50,
    Bahamas: 60,
    "Trinidad and Tobago": 40,
    Iceland: 18,
    "Solomon Is.": 30,
    Vanuatu: 20,
    Fiji: 30,
    Philippines: 40,
    Japan: 30,
    "Fr. S. Antarctic Lands": 40,
    "New Zealand": 80,
    "New Caledonia": 80,
  },
  Dt = (t) => {
    let e = 0,
      o = 0,
      n = 0;
    for (const [a, l] of t) {
      const f = N1(a, l);
      ((e += f[0]), (o += f[1]), (n += f[2]));
    }
    return i2(w2([e, o, n]));
  },
  qt = (() => {
    const t = K0(m0, m0.objects.countries),
      e = [];
    for (const o of t.features) {
      const n = o.properties.name,
        a = o.geometry;
      if (!a) continue;
      const l = a.type === "Polygon" ? [a.coordinates] : a.coordinates;
      for (const f of l) {
        const [i, d] = Dt(f[0]);
        let h = Q0[n] || "EU",
          p = Ut[n] ?? 1 / 0;
        (n === "United States of America" &&
          i < -150 &&
          d < 30 &&
          ((h = "PA"), (p = 5)),
          n === "France" && i < -40 && (h = "SA"),
          n === "Indonesia" && i > 134 && (h = "AU"),
          n === "Russia" && i < -160 && (h = "NA"),
          e.push({
            name: n,
            plate: j1[h],
            birth: p,
            rings: f.map((u) => u.map(([y, S]) => N1(y, S))),
          }));
      }
    }
    return e;
  })();
function X3(t, e) {
  const o = [];
  for (const n of qt) {
    const a =
      n.birth === 1 / 0
        ? 1
        : I3((n.birth - e) / Math.max(3, n.birth * 0.25), 0, 1);
    if (a <= 0) continue;
    const l = t[n.plate];
    o.push({
      plate: n.plate,
      alpha: a,
      name: n.name,
      geo: {
        type: "Polygon",
        coordinates: n.rings.map((f) => f.map((i) => i2(m2(l, i)))),
      },
    });
  }
  return o;
}
const $2 = (t, e, o, n) => i2(m2(t[e], N1(o, n))),
  v0 = [
    {
      id: "meso",
      name: translate("中龙"),
      en: "Mesosaurus",
      note: translate("生活在淡水中的小型爬行动物，无法横渡大洋"),
      color: "#5fd3c6",
      sites: [
        ["SA", -52, -28, 6],
        ["AF", 17.5, -25, 5],
      ],
    },
    {
      id: "glosso",
      name: translate("舌羊齿"),
      en: "Glossopteris",
      note: translate("种子较大、难以随风飘过大洋的古植物"),
      color: "#9bd36b",
      sites: [
        ["SA", -54, -24, 7],
        ["AF", 26, -22, 9],
        ["IN", 81, 22, 6],
        ["AU", 142, -28, 9],
        ["AN", 150, -82, 7],
        ["MG", 46.5, -21, 3],
      ],
    },
    {
      id: "lystro",
      name: translate("水龙兽"),
      en: "Lystrosaurus",
      note: translate("陆生爬行动物，化石分布于南非、印度与南极洲"),
      color: "#f0a14a",
      sites: [
        ["AF", 26, -30, 5],
        ["IN", 82, 23, 4],
        ["AN", 170, -85, 4],
      ],
    },
    {
      id: "cyno",
      name: translate("犬颌兽"),
      en: "Cynognathus",
      note: translate("陆生爬行动物，体长约 1 米"),
      color: "#e0776a",
      sites: [
        ["SA", -66, -30, 5],
        ["AF", 25, -31, 4.5],
      ],
    },
  ].map((t) => ({
    ...t,
    sites: t.sites.map(([e, o, n, a]) => ({
      plate: j1[e],
      lon: o,
      lat: n,
      r: a,
    })),
  })),
  _t = (() => {
    const t = [
        ["SA", -49, -22],
        ["SA", -58, -32],
        ["AF", 25, -27],
        ["AF", 18, -22],
        ["IN", 82, 21],
        ["AU", 128, -26],
        ["AU", 145, -34],
        ["AN", 60, -72],
        ["MG", 46, -22],
      ],
      e = z2(250);
    let o = [0, 0, 0];
    const n = t.map(([a, l, f]) => {
      const i = m2(e[j1[a]], N1(l, f));
      return ((o = [o[0] + i[0], o[1] + i[1], o[2] + i[2]]), i);
    });
    return (
      (o = w2(o)),
      t.map(([a, l, f], i) => {
        const d = n[i],
          h = w2([d[0] - o[0], d[1] - o[1], d[2] - o[2]]),
          p = w2([
            d[1] * h[2] - d[2] * h[1],
            d[2] * h[0] - d[0] * h[2],
            d[0] * h[1] - d[1] * h[0],
          ]),
          u = m2(Bt(p, 6 * F1), d),
          y = m2(W0(e[j1[a]]), u);
        return {
          plate: j1[a],
          tail: [l, f],
          head: i2(y),
        };
      })
    );
  })(),
  F2 = [
    {
      id: "EU",
      name: translate("亚欧板块"),
      color: "#d98d7a",
      seed: [90, 50],
      label: [95, 48],
    },
    {
      id: "AF",
      name: translate("非洲板块"),
      color: "#e0a458",
      seed: [20, 0],
      label: [18, 5],
    },
    {
      id: "AM",
      name: translate("美洲板块"),
      color: "#72b7e8",
      seed: [-60, 10],
      label: [-72, 28],
    },
    {
      id: "PA",
      name: translate("太平洋板块"),
      color: "#6f9fe0",
      seed: [-150, 0],
      label: [-160, 10],
    },
    {
      id: "IO",
      name: translate("印度洋板块"),
      color: "#e9c85f",
      seed: [80, -20],
      label: [90, -15],
    },
    {
      id: "AN",
      name: translate("南极洲板块"),
      color: "#a8c7dc",
      seed: [0, -80],
      label: [60, -75],
    },
  ],
  m5 = [
    {
      type: "r",
      pts: [
        [126, 74.5],
        [110, 79],
        [80, 84.5],
        [40, 86.5],
        [0, 84.5],
        [-3, 81],
        [5, 77],
        [4, 73],
        [-6, 71],
        [-17, 67.5],
        [-18, 65],
        [-22, 63.5],
        [-30, 58.5],
        [-35, 53],
        [-30, 48],
        [-28.5, 43],
        [-28, 38.5],
      ],
    },
    {
      type: "r",
      pts: [
        [-28, 38.5],
        [-37, 33],
        [-43, 27],
        [-45.5, 20],
        [-46, 13],
        [-43, 8],
        [-35, 3],
        [-26, 0.5],
        [-17, -1],
        [-13.5, -5],
        [-13, -12],
        [-14, -20],
        [-13.5, -27],
        [-14, -35],
        [-16.5, -42],
        [-15, -48],
        [-7, -52.5],
        [3, -54.5],
      ],
    },
    {
      type: "c",
      belt: "med",
      side: 1,
      pts: [
        [-28, 38.5],
        [-20, 37],
        [-12, 36.5],
        [-6, 36],
        [0, 36.3],
        [8, 37.5],
        [15, 38],
        [20, 37],
        [23, 35.5],
        [28, 35],
        [32, 34.8],
        [35.5, 35.8],
        [37, 36.5],
      ],
    },
    {
      type: "c",
      belt: "med",
      side: 1,
      pts: [
        [37, 36.5],
        [42, 37.5],
        [45, 36],
        [48, 34],
        [51, 31],
        [55, 28],
        [58, 26],
        [62, 25.3],
        [66, 25.2],
        [67.5, 28],
        [69, 32],
        [71, 34.5],
        [74, 35.5],
        [77, 34.5],
        [80, 31],
        [84, 28.5],
        [88, 27.5],
        [92, 27.8],
        [95, 28.5],
        [97, 27],
        [95.5, 23],
        [94, 18],
        [93, 13],
        [92.5, 9],
        [94, 5],
        [97, 2],
        [99.5, -1],
        [101.5, -4],
        [104, -6.5],
        [107, -8.5],
        [112, -10],
        [117, -11],
        [122, -11],
        [126, -10],
        [129, -8.5],
        [132, -6.5],
        [134.5, -4.5],
        [138, -3.5],
        [141, -3],
      ],
    },
    {
      type: "r",
      pts: [
        [37, 36.5],
        [36, 33],
        [35, 29],
        [36.5, 24],
        [38.5, 21],
        [40, 18],
        [41.5, 15.5],
        [43, 13],
        [45, 12.2],
        [48, 12.8],
        [51, 14],
        [56, 14.5],
        [58, 13],
        [60, 10],
        [62.5, 7],
        [66, 3],
        [67.5, -1],
        [68, -6],
        [67, -11],
        [66.5, -16],
        [66, -20],
        [68, -23],
        [70, -25.5],
      ],
    },
    {
      type: "r",
      pts: [
        [70, -25.5],
        [65, -28],
        [60, -31],
        [55, -34.5],
        [50, -37.5],
        [44, -40.5],
        [37, -44],
        [32, -47.5],
        [25, -51],
        [18, -53],
        [10, -53.5],
        [3, -54.5],
      ],
    },
    {
      type: "r",
      pts: [
        [70, -25.5],
        [75, -30],
        [78, -35],
        [82, -40],
        [88, -42.5],
        [96, -46],
        [104, -49.5],
        [112, -50],
        [120, -50.5],
        [128, -51.5],
        [136, -52],
        [142, -53],
        [148, -55],
        [155, -56],
        [160, -55],
      ],
    },
    {
      type: "r",
      pts: [
        [160, -55],
        [168, -60],
        [178, -63],
        [-170, -65],
        [-155, -64],
        [-140, -58],
        [-125, -55],
        [-117, -51],
        [-113, -44],
        [-111, -37],
        [-105, -37.5],
        [-97, -38],
        [-90, -40],
        [-83, -43.5],
        [-78, -45.5],
        [-75.5, -46],
      ],
    },
    {
      type: "c",
      belt: "pac",
      side: -1,
      pts: [
        [-75.5, -46],
        [-75.5, -40],
        [-74, -33],
        [-72, -26],
        [-71.5, -20],
        [-74, -16],
        [-77.5, -12],
        [-80.5, -7],
        [-81.5, -2],
        [-80, 2],
        [-79, 6],
        [-83, 7.5],
        [-86, 10.5],
        [-89, 12.5],
        [-93, 14.5],
        [-98, 15.8],
        [-103, 18],
        [-106, 21],
        [-109, 24],
        [-112, 27.5],
        [-114.5, 31],
        [-116.5, 33],
        [-120, 35],
        [-123, 38.5],
        [-125, 41],
        [-126, 45],
        [-128, 49],
        [-131, 52],
        [-135, 56],
        [-140, 59],
        [-146, 59.5],
        [-152, 57.5],
        [-158, 55],
        [-165, 53],
        [-172, 51.5],
        [-180, 51],
        [172, 52.5],
        [165, 54.5],
        [161, 53.5],
        [157, 50.5],
        [153, 47],
        [148, 44],
        [144.5, 41.5],
        [143.5, 40],
      ],
    },
    {
      type: "c",
      belt: "pac",
      side: -1,
      pts: [
        [143.5, 40],
        [142.5, 36],
        [139, 33.5],
        [135, 32.5],
        [131.5, 30.5],
        [129, 28],
        [126, 25.5],
        [122.5, 24],
        [121.5, 21],
        [120.5, 18],
        [119.8, 15],
        [121.5, 12],
        [126, 9],
        [127, 6],
        [128, 3.5],
        [131, 1],
        [135, -0.5],
        [138, -1.8],
        [141, -3],
      ],
    },
    {
      type: "c",
      belt: "pac",
      side: -1,
      pts: [
        [141, -3],
        [145, -4],
        [149, -5.5],
        [153, -6.5],
        [156, -7.5],
        [160, -10],
        [165, -12],
        [167, -15],
        [168.5, -18],
        [170, -21],
        [175, -19.5],
        [-176, -16],
        [-173.5, -20],
        [-174.5, -25],
        [-176, -30],
        [-177.5, -35],
        [179, -38.5],
        [178, -41],
        [174, -43],
        [170, -44.5],
        [167, -47],
        [164, -50],
        [161, -53],
        [160, -55],
      ],
    },
    {
      type: "c",
      pts: [
        [126, 74.5],
        [133, 70],
        [140, 66],
        [146, 62],
        [152, 58.5],
        [151, 54],
        [146, 50],
        [143.5, 46],
        [143.5, 40],
      ],
    },
    {
      type: "c",
      pts: [
        [-75.5, -46],
        [-73, -52],
        [-68, -56],
        [-60, -58.5],
        [-50, -60],
        [-38, -60],
        [-28, -59],
        [-24, -57],
        [-15, -55.5],
        [-5, -55],
        [3, -54.5],
      ],
    },
  ];
function g5(t, e = 1) {
  const o = [];
  for (let n = 0; n < t.length - 1; n++) {
    const a = N1(...t[n]),
      l = N1(...t[n + 1]),
      f = Math.acos(I3(a[0] * l[0] + a[1] * l[1] + a[2] * l[2], -1, 1)) / F1,
      i = Math.max(1, Math.ceil(f / e));
    for (let d = 0; d < i; d++) {
      const h = d / i,
        p = Math.sin(f * F1) || 1,
        u = Math.sin((1 - h) * f * F1) / p,
        y = Math.sin(h * f * F1) / p;
      o.push(
        w2([a[0] * u + l[0] * y, a[1] * u + l[1] * y, a[2] * u + l[2] * y]),
      );
    }
  }
  return (o.push(N1(...t[t.length - 1])), o);
}
function Xt(t = 720, e = 360) {
  const o = new Int8Array(t * e).fill(-1),
    n = new Uint8Array(t * e),
    a = (f, i) => [
      ((Math.floor(((f + 180) / 360) * t) % t) + t) % t,
      I3(Math.floor(((90 - i) / 180) * e), 0, e - 1),
    ];
  for (const f of m5)
    for (const i of g5(f.pts, 0.04)) {
      const [d, h] = a(...i2(i));
      for (let p = -1; p <= 1; p++)
        for (let u = -1; u <= 1; u++) {
          const y = h + p;
          y < 0 || y >= e || (n[y * t + ((d + u + t) % t)] = 1);
        }
    }
  F2.forEach((f, i) => {
    const [d, h] = a(...f.seed),
      p = [h * t + d];
    for (o[p[0]] = i; p.length;) {
      const u = p.pop(),
        y = u % t,
        S = (u / t) | 0,
        v = [S * t + ((y + 1) % t), S * t + ((y - 1 + t) % t)];
      (S > 0 && v.push(u - t), S < e - 1 && v.push(u + t));
      for (const k of v) o[k] < 0 && !n[k] && ((o[k] = i), p.push(k));
    }
  });
  let l = !0;
  for (; l;) {
    l = !1;
    const f = o.slice();
    for (let i = 0; i < t * e; i++)
      if (f[i] < 0) {
        const d = i % t,
          h = (i / t) | 0;
        for (const p of [
          h * t + ((d + 1) % t),
          h * t + ((d - 1 + t) % t),
          h > 0 ? i - t : i,
          h < e - 1 ? i + t : i,
        ])
          if (f[p] >= 0) {
            o[i] = f[p];
            break;
          }
        o[i] < 0 && (l = !0);
      }
  }
  return {
    W: t,
    H: e,
    lab: o,
  };
}
function Ot(t = 7) {
  let e = t;
  const o = () => (e = (e * 16807) % 2147483647) / 2147483647,
    n = () => (o() + o() + o() - 1.5) * 1.15,
    a = (i, d) => [
      i[1] * d[2] - i[2] * d[1],
      i[2] * d[0] - i[0] * d[2],
      i[0] * d[1] - i[1] * d[0],
    ],
    l = [],
    f = [];
  for (const i of m5) {
    const d = g5(i.pts, 0.35);
    for (let h = 0; h < d.length - 1; h++) {
      const p = d[h],
        u = d[h + 1],
        y = w2(a(p, [u[0] - p[0], u[1] - p[1], u[2] - p[2]])),
        S = (k) =>
          i2(
            w2([
              p[0] + y[0] * k * F1,
              p[1] + y[1] * k * F1,
              p[2] + y[2] * k * F1,
            ]),
          ),
        v = i2(p)[0];
      if (i.type === "c") {
        const k = o() < 0.85 ? 1 + (o() < 0.35) : 0;
        for (let w = 0; w < k; w++) {
          const [T, M] = S(n() * 1.4 + (i.side || 0) * o() * 2.2);
          l.push({
            lon: T,
            lat: M,
            m: 4 + o() * o() * 4.5,
          });
        }
        const g =
          i.belt === "pac" ||
          (i.belt === "med" && (v > 93 || (v > 10 && v < 30)));
        if (i.side && g && o() < 0.17) {
          const [w, T] = S(i.side * (1.8 + o() * 1.6));
          f.push({
            lon: w,
            lat: T,
          });
        }
      } else if (o() < 0.3) {
        const [k, g] = S(n() * 0.5);
        l.push({
          lon: k,
          lat: g,
          m: 4 + o() * 2.2,
        });
      }
    }
  }
  for (const [i, d] of [
    [-155.3, 19.4],
    [-110.7, 44.4],
    [37.4, -3.1],
    [36.3, 1.5],
    [38.9, 7.5],
    [-17.6, 64.6],
    [-19.6, 63.6],
    [29.2, -1.5],
  ])
    f.push({
      lon: i,
      lat: d,
    });
  return {
    quakes: l,
    volcs: f,
  };
}
const f5 = [
    {
      n: translate("二叠纪"),
      en: "Permian",
      a: 299,
      b: 252,
      c: "#f04028",
    },
    {
      n: translate("三叠纪"),
      en: "Triassic",
      a: 252,
      b: 201,
      c: "#812b92",
    },
    {
      n: translate("侏罗纪"),
      en: "Jurassic",
      a: 201,
      b: 145,
      c: "#34b2c9",
    },
    {
      n: translate("白垩纪"),
      en: "Cretaceous",
      a: 145,
      b: 66,
      c: "#7fc64e",
    },
    {
      n: translate("古近纪"),
      en: "Paleogene",
      a: 66,
      b: 23,
      c: "#fd9a52",
    },
    {
      n: translate("新近纪"),
      en: "Neogene",
      a: 23,
      b: 2.6,
      c: "#ffe619",
    },
    {
      n: translate("第四纪"),
      en: "Quaternary",
      a: 2.6,
      b: 0,
      c: "#f9f97f",
    },
  ],
  H2 = (t) => f5.find((e) => t <= e.a && t >= e.b) || f5[0],
  t4 = (t, e, o) => Math.max(e, Math.min(o, t)),
  $1 = (t) => ((t = t4(t, 0, 1)), t * t * (3 - 2 * t)),
  C1 = (t, e) => Math.exp(-(t * t) / (e * e)),
  _2 = (t, e, o) => t + (e - t) * o;
function v5(t, e, o = 10, n = 14) {
  const a = e.y + (e.h * o) / (o + n),
    l = e.h / (o + n);
  return {
    X: (f) => e.x + f * e.w,
    Y: (f) => a - f * l,
    seaY: a,
    k: l,
  };
}
function b5(t, e, o) {
  const n = t.createLinearGradient(0, e.y, 0, o.seaY);
  (n.addColorStop(0, "rgba(20,32,52,0)"),
    n.addColorStop(1, "rgba(60,92,130,.28)"),
    (t.fillStyle = n),
    t.fillRect(e.x, e.y, e.w, o.seaY - e.y));
}
function S5(t, e, o, n) {
  const a = t.createLinearGradient(0, o.Y(n), 0, e.y + e.h);
  (a.addColorStop(0, "#5a2a1a"),
    a.addColorStop(0.5, "#7a3418"),
    a.addColorStop(1, "#a8481c"),
    (t.fillStyle = a),
    t.fillRect(e.x, o.Y(n), e.w, e.y + e.h - o.Y(n)));
}
function b1(t, e, o = 0, n = 1, a = 400) {
  const l = [];
  for (let f = 0; f <= a; f++) {
    const i = o + ((n - o) * f) / a;
    l.push([t.X(i), t.Y(e(i))]);
  }
  return l;
}
function t2(t, e, o, n) {
  (t.beginPath(),
    e.forEach(([a, l], f) => (f ? t.lineTo(a, l) : t.moveTo(a, l))));
  for (let a = o.length - 1; a >= 0; a--) t.lineTo(o[a][0], o[a][1]);
  (t.closePath(), (t.fillStyle = n), t.fill());
}
function e2(t, e, o, n = 1, a) {
  (t.beginPath(),
    e.forEach(([l, f], i) => (i ? t.lineTo(l, f) : t.moveTo(l, f))),
    (t.strokeStyle = o),
    (t.lineWidth = n),
    t.setLineDash(a || []),
    t.stroke(),
    t.setLineDash([]));
}
function P5(t, e, o, n) {
  (t.save(), t.beginPath(), t.rect(e.x, o.seaY, e.w, e.h), t.clip());
  const a = b1(o, n);
  (t.beginPath(),
    t.moveTo(e.x, o.seaY),
    a.forEach(([i, d]) => t.lineTo(i, Math.max(d, o.seaY))),
    t.lineTo(e.x + e.w, o.seaY),
    t.closePath());
  const l = t.createLinearGradient(0, o.seaY, 0, o.Y(-7));
  (l.addColorStop(0, "rgba(64,150,196,.75)"),
    l.addColorStop(1, "rgba(10,40,84,.9)"),
    (t.fillStyle = l),
    t.fill(),
    t.restore(),
    (t.strokeStyle = "rgba(160,215,240,.55)"),
    (t.lineWidth = 1),
    t.beginPath());
  let f = !1;
  for (const [i, d] of a)
    d > o.seaY + 0.5
      ? (f ? t.lineTo(i, o.seaY) : t.moveTo(i, o.seaY), (f = !0))
      : (f = !1);
  t.stroke();
}
function y1(t, e, o, n, a = {}) {
  if (
    (t.save(),
    (t.font = a.font || '600 12px "Noto Serif SC", serif'),
    (t.textAlign = a.align || "center"),
    (t.textBaseline = "middle"),
    a.box)
  ) {
    const l = t.measureText(n).width + 16,
      f =
        a.align === "left"
          ? e - 8
          : a.align === "right"
            ? e - l + 8
            : e - l / 2;
    ((t.fillStyle = "rgba(6,9,14,.72)"),
      t.fillRect(f, o - 11, l, 22),
      (t.fillStyle = a.color || "#f3d9a2"),
      t.fillRect(f, o - 11, 2, 22));
  } else ((t.shadowColor = "rgba(0,0,0,.9)"), (t.shadowBlur = 6));
  ((t.fillStyle = a.color || "#ece7dd"), t.fillText(n, e, o), t.restore());
}
function l3(t, e, o, n, a, l, f = 2.5) {
  const i = Math.atan2(a - o, n - e);
  ((t.strokeStyle = l),
    (t.fillStyle = l),
    (t.lineWidth = f),
    (t.lineCap = "round"),
    t.beginPath(),
    t.moveTo(e, o),
    t.lineTo(n - Math.cos(i) * 8, a - Math.sin(i) * 8),
    t.stroke(),
    t.beginPath(),
    t.moveTo(n, a),
    t.lineTo(n - Math.cos(i - 0.5) * 12, a - Math.sin(i - 0.5) * 12),
    t.lineTo(n - Math.cos(i + 0.5) * 12, a - Math.sin(i + 0.5) * 12),
    t.closePath(),
    t.fill());
}
function M5(t, e, o, n, a) {
  (t.save(),
    (t.font = "500 9.5px JetBrains Mono"),
    (t.fillStyle = "rgba(141,145,153,.8)"),
    (t.strokeStyle = "rgba(255,255,255,.1)"),
    (t.textAlign = "right"),
    (t.textBaseline = "middle"));
  for (let l = n; l <= a; l += 2) {
    const f = o.Y(l);
    (t.beginPath(),
      t.moveTo(e.x + 30, f),
      t.lineTo(e.x + 36, f),
      t.stroke(),
      t.fillText(l === 0 ? "0" : `${l > 0 ? "+" : ""}${l}km`, e.x + 27, f));
  }
  ((t.fillStyle = "rgba(141,145,153,.55)"),
    (t.textAlign = "right"),
    t.fillText(translate("海平面"), e.x + e.w - 6, o.seaY - 7),
    t.restore());
}
function Vt(t, e, o, n, a = 1) {
  if (
    (t.save(),
    t.translate(e, o),
    t.scale(a, a),
    (t.strokeStyle = "#fff6e0"),
    (t.fillStyle = "rgba(255,246,224,.18)"),
    (t.lineWidth = 1.3),
    n === 0)
  ) {
    t.beginPath();
    for (let l = 0; l < Math.PI * 5; l += 0.2) {
      const f = 1 + l * 1.05;
      t.lineTo(Math.cos(l) * f, Math.sin(l) * f);
    }
    (t.stroke(), t.beginPath(), t.arc(0, 0, 17, 0, 7), t.fill());
  } else if (n === 1) {
    (t.beginPath(), t.ellipse(0, 0, 8, 12, 0, 0, 7), t.fill(), t.stroke());
    for (let l = -2; l <= 3; l++)
      (t.beginPath(), t.moveTo(-7, l * 3.2), t.lineTo(7, l * 3.2), t.stroke());
    (t.beginPath(), t.moveTo(0, -12), t.lineTo(0, 12), t.stroke());
  } else
    (t.beginPath(),
      t.moveTo(-15, 0),
      t.quadraticCurveTo(-4, -7, 9, -1),
      t.lineTo(16, -6),
      t.lineTo(14, 1),
      t.lineTo(17, 6),
      t.lineTo(9, 2),
      t.quadraticCurveTo(-4, 6, -15, 0),
      t.fill(),
      t.stroke(),
      t.beginPath(),
      t.arc(-9, -1.5, 1, 0, 7),
      t.stroke());
  t.restore();
}
function e4(t) {
  const e = $1((70 - t) / 20),
    o = 1 - Math.pow(1 - t4((50 - t) / 50, 0, 1), 1.5),
    n = 0.6,
    a = 0.36 * (1 - e),
    l = n - a,
    f = (g) =>
      (-4.6 *
        $1((g - (l - 0.035)) / 0.05) *
        (1 - $1((g - (n - 0.025)) / 0.045)) -
        2.4 * C1(g - (n - 0.03), 0.012)) *
      Math.pow(1 - e, 0.7),
    i = (g) => {
      let w = 0.3 + f(g);
      return (
        (w += 1.4 * C1(g - (n + 0.08), 0.035) * (1 - o)),
        (w +=
          o *
          (8.25 * C1(g - (n - 0.03), 0.026) +
            5.4 * C1(g - (n - 0.07), 0.02) +
            3.2 * C1(g - (n - 0.115), 0.022) +
            1.2 * C1(g - (n - 0.16), 0.02) +
            0.55 * Math.sin(g * 210) * C1(g - (n - 0.05), 0.06))),
        (w +=
          o *
          4.4 *
          $1((g - (n - 0.01)) / 0.05) *
          (1 - 0.06 * Math.sin(g * 60))),
        w
      );
    };
  let d = -99,
    h = 0;
  for (let g = 0.3; g < 0.8; g += 0.001) {
    const w = i(g);
    w > d && ((d = w), (h = g));
  }
  const p = _2(l + 0.01, n - 0.15, e),
    u = n - 0.01 + 0.012 * e,
    y = (g) => Math.sqrt(Math.max(0, Math.sin((Math.PI * (g - p)) / (u - p)))),
    S = (g, w) =>
      i(w) -
      (0.25 + 0.7 * g) * (1 - 0.25 * o) * y(w) +
      o * 0.7 * Math.sin(w * 95 + g * 1.3) * C1(w - (n - 0.07), 0.07),
    v = [
      [0.18, 0, 0],
      [0.36, 1, 1],
      [0.52, 0, 2],
      [0.7, 2, 0],
      [0.85, 1, 1],
    ].map(([g, w, T]) => {
      const M = _2(p, u, g);
      return {
        s: M,
        km: S(w, M),
        kind: T,
      };
    }),
    k = v.reduce((g, w) => (w.km > g.km ? w : g));
  return {
    c: e,
    u: o,
    s0: n,
    sI: l,
    e: i,
    peak: d,
    ps: h,
    segL: p,
    segR: u,
    layer: S,
    lens: y,
    FOS: v,
    top: k,
    width: Math.round(a * 16e3),
  };
}
function b0(t, e, o, n) {
  (t.save(), t.beginPath(), t.rect(e.x, e.y - 60, e.w, e.h + 60), t.clip());
  const a = Ht(t, e, o, n);
  return (t.restore(), a);
}
function Ht(t, e, o, n) {
  const a = e4(o),
    l = v5(t, e, 10.5, 12),
    { e: f, c: i, u: d, s0: h, sI: p } = a;
  (b5(t, e, l), S5(t, e, l, -9));
  const u = b1(l, f),
    y = d > 0 ? h + 0.02 : p + 0.01,
    S = _2(26, 7, d),
    v = (_) => -6.5 - Math.pow(Math.max(0, _ - (h - 0.02)), 1.15) * S,
    k = Math.min(1.02, h + 0.12 + 0.3 * Math.max(d, i * 0.5));
  (t2(
    t,
    b1(l, v, 0, k, 220),
    b1(l, (_) => v(_) - 3.2, 0, k, 220),
    d > 0.02 ? "#6e5230" : "#343d4a",
  ),
    e2(t, b1(l, v, h - 0.02, k, 160), "rgba(255,200,140,.35)", 1, [4, 4]));
  const g = (_) => Math.max(Math.min(f(_), 0.3) - 6.5, -6.5);
  (t2(
    t,
    b1(l, f, 0, y),
    b1(l, (_) => Math.max(g(_), v(_)), 0, y),
    "#8a6a3e",
  ),
    t2(
      t,
      b1(l, f, h - 0.03, 1),
      b1(
        l,
        (_) => Math.max(-6.5 - d * 2 * $1((_ - h) / 0.2), v(_) + 0.05),
        h - 0.03,
        1,
      ),
      "#6d4a36",
    ),
    i < 1 &&
      t2(
        t,
        b1(l, f, p - 0.01, h - 0.02),
        b1(l, (_) => f(_) - 1.8, p - 0.01, h - 0.02),
        "#303a48",
      ));
  const w = ["#b9ad8c", "#8f9aa3", "#c9b27a"];
  for (let _ = 2; _ >= 0; _--) {
    const e1 = b1(
        l,
        (A) => a.layer(_, A) + 0.35 * a.lens(A),
        a.segL,
        a.segR,
        160,
      ),
      t1 = b1(l, (A) => a.layer(_, A) - 0.35 * a.lens(A), a.segL, a.segR, 160);
    (t2(t, e1, t1, w[_]), e2(t, e1, "rgba(0,0,0,.25)", 0.8));
  }
  (t.save(),
    t.beginPath(),
    u.forEach(([_, e1], t1) => (t1 ? t.lineTo(_, e1) : t.moveTo(_, e1))),
    t.lineTo(e.x + e.w, l.Y(-3)),
    t.lineTo(e.x, l.Y(-3)),
    t.closePath(),
    t.clip());
  const T = l.Y(5.2),
    M = t.createLinearGradient(0, T - 30, 0, T + 14);
  (M.addColorStop(0, "rgba(245,250,255,.95)"),
    M.addColorStop(1, "rgba(245,250,255,0)"),
    (t.fillStyle = M),
    t.fillRect(e.x, e.y, e.w, T + 14 - e.y),
    t.restore(),
    P5(t, e, l, f),
    e2(t, u, "rgba(255,240,210,.8)", 1.4));
  for (const _ of a.FOS)
    Vt(t, l.X(_.s), l.Y(_.km), _.kind, 0.62 + 0.25 * (_ === a.top));
  M5(t, e, l, -8, 10);
  const x = l.seaY;
  (y1(t, l.X(0.14), l.Y(-2.8), translate("印度洋板块 · 印度陆块"), {
    color: "#f0c98a",
    font: '700 13px "Noto Serif SC", serif',
  }),
    y1(t, l.X(0.86), l.Y(-3.4 - d * 2), translate("亚欧板块"), {
      color: "#e7a58f",
      font: '700 13px "Noto Serif SC", serif',
    }));
  const E = l.X(0.16 + 0.04 * Math.sin(n * 1.4)),
    $ = l.Y(-1.2);
  (l3(t, E - 36, $, E + 30, $, "rgba(243,217,162,.9)"),
    y1(
      t,
      E,
      $ + 18,
      d > 0
        ? translate("持续北推 约 5 cm/年")
        : translate("向北漂移 约 15 cm/年"),
      {
        font: "500 11px JetBrains Mono",
        color: "rgba(243,217,162,.85)",
      },
    ),
    i < 0.92 &&
      y1(t, l.X((p + h) / 2), x + 26, translate("特提斯海（古地中海）"), {
        color: "rgba(180,225,245,.95)",
        font: 'italic 600 13px "Noto Serif SC", serif',
      }),
    d > 0.25 &&
      (y1(
        t,
        l.X(a.ps),
        l.Y(a.peak) - 40,
        d > 0.95
          ? translate("珠穆朗玛峰 8848.86 m")
          : translate("最高峰 {0} m", [Math.round(a.peak * 1e3)]),
        {
          box: !0,
          font: '700 12px "Noto Serif SC", serif',
        },
      ),
      (t.strokeStyle = "rgba(243,217,162,.6)"),
      t.setLineDash([3, 3]),
      t.beginPath(),
      t.moveTo(l.X(a.ps), l.Y(a.peak) - 28),
      t.lineTo(l.X(a.ps), l.Y(a.peak) - 4),
      t.stroke(),
      t.setLineDash([]),
      y1(t, l.X(h + 0.2), l.Y(4.4 * d) - 18, translate("青藏高原"), {
        color: "#f3d9a2",
        font: '700 13px "Noto Serif SC", serif',
      }),
      y1(t, l.X(h - 0.07), l.Y(-1.2), translate("喜马拉雅山脉"), {
        color: "#fff",
        font: '900 14px "Noto Serif SC", serif',
      })));
  const z = a.top,
    F = l.X(z.s),
    D = l.Y(z.km),
    q = F < e.x + e.w / 2 ? 1 : -1;
  ((t.strokeStyle = "rgba(255,246,224,.6)"),
    t.beginPath(),
    t.moveTo(F + q * 12, D - 10),
    t.lineTo(F + q * 70, D - 46),
    t.lineTo(F + q * 150, D - 46),
    t.stroke());
  const Y = q < 0 ? "right" : "left";
  return (
    y1(t, F + q * 152, D - 60, translate("海洋生物化石"), {
      align: Y,
      color: "#fff6e0",
      font: '700 12px "Noto Serif SC", serif',
    }),
    y1(
      t,
      F + q * 152,
      D - 42,
      `${z.km > 0 ? translate("海拔 ") + Math.round(z.km * 1e3) + " m" : translate("海面以下 ") + Math.round(-z.km * 1e3) + " m"}`,
      {
        align: Y,
        color: "#f3d9a2",
        font: "600 11px JetBrains Mono",
      },
    ),
    y1(
      t,
      e.x + e.w - 6,
      e.y + e.h - 8,
      translate("剖面示意 · 垂直比例已夸大"),
      {
        align: "right",
        color: "rgba(141,145,153,.7)",
        font: "500 10px JetBrains Mono",
      },
    ),
    a
  );
}
function n4(t) {
  const e = $1(t / 0.35),
    o = $1((t - 0.35) / 0.3),
    n = $1((t - 0.65) / 0.35),
    a = 0.02 + 0.12 * o + 0.4 * n,
    l = (i) => {
      const d = i - 0.5,
        h = Math.abs(d);
      let p = 0.9;
      return (
        (p += 0.8 * e * (1 - n) * C1(h - (0.07 + a / 2), 0.03)),
        (p -= (2.2 * e + 1.4 * o) * (1 - $1((h - a / 2 - 0.05) / 0.03))),
        (p -= 1.6 * n * (1 - $1((h - a / 2 + 0.02) / 0.05))),
        (p += n * (2 * C1(d, 0.07) - 0.8 * C1(d, 0.008))),
        p
      );
    },
    f = t < 0.35 ? 0 : t < 0.65 ? 1 : 2;
  return {
    A: e,
    B: o,
    C: n,
    gap: a,
    e: l,
    stage: f,
  };
}
function Jt(t, e, o, n) {
  (t.save(), t.beginPath(), t.rect(e.x, e.y - 60, e.w, e.h + 60), t.clip());
  const a = Kt(t, e, o, n);
  return (t.restore(), a);
}
function Kt(t, e, o, n) {
  const a = n4(o),
    l = v5(t, e, 6, 12),
    { e: f, gap: i } = a;
  (b5(t, e, l), S5(t, e, l, -8));
  const d = l.X(0.5),
    h = l.Y(-8),
    p = t.createRadialGradient(d, h, 0, d, h, e.w * (0.1 + 0.12 * o));
  (p.addColorStop(0, "rgba(255,190,90,.9)"),
    p.addColorStop(0.4, "rgba(255,110,50,.5)"),
    p.addColorStop(1, "rgba(255,90,40,0)"),
    (t.fillStyle = p),
    t.fillRect(e.x, l.Y(-3), e.w, e.y + e.h - l.Y(-3)));
  for (let k = 0; k < 9; k++) {
    const g = (n * 0.25 + k / 9) % 1,
      w = d + Math.sin(k * 2.3) * e.w * 0.04 * (1 - g),
      T = e.y + e.h - g * (e.y + e.h - l.Y(-4.5));
    ((t.fillStyle = `rgba(255,${(160 + 60 * g) | 0},90,${0.55 * (1 - g)})`),
      t.beginPath(),
      t.arc(w, T, 3 + 5 * (1 - g), 0, 7),
      t.fill());
  }
  const u = i / 2,
    y = (k, g, w) => {
      const T = b1(l, f, k, g),
        M = b1(
          l,
          (x) => -6.5 + 3.2 * $1((0.16 - Math.abs(x - 0.5) + u) / 0.16) * 1,
          k,
          g,
        );
      t2(t, T, M, "#7d5a3a");
      for (let x = 1; x <= 3; x++)
        e2(
          t,
          b1(
            l,
            (E) =>
              Math.min(f(E), 1) -
              x * 1.3 * (1 - 0.4 * $1((0.12 - Math.abs(E - 0.5) + u) / 0.12)),
            k,
            g,
            120,
          ),
          "rgba(0,0,0,.22)",
          1,
        );
    };
  if ((y(0, 0.5 - u + 0.01, 0), y(0.5 + u - 0.01, 1, 1), i > 0.03)) {
    const k = 0.5 - u + 0.005,
      g = 0.5 + u - 0.005,
      w = b1(l, f, k, g, 200),
      T = b1(l, (x) => f(x) - 1.6, k, g, 200);
    (t2(t, w, T, "#2f3947"),
      t.save(),
      t.beginPath(),
      w.forEach(([x, E], $) => ($ ? t.lineTo(x, E) : t.moveTo(x, E))));
    for (let x = T.length - 1; x >= 0; x--) t.lineTo(T[x][0], T[x][1]);
    (t.closePath(), t.clip());
    const M = Math.floor(u / 0.018);
    for (let x = 0; x <= M; x++)
      if (x % 2 === 0)
        for (const E of [-1, 1]) {
          const $ = 0.5 + E * x * 0.018,
            z = l.X($),
            F = l.X($ + E * 0.018);
          ((t.fillStyle = "rgba(95,211,198,.28)"),
            t.fillRect(
              Math.min(z, F),
              l.Y(1),
              Math.abs(F - z),
              l.Y(-8) - l.Y(1),
            ));
        }
    t.restore();
  }
  if (
    (P5(t, e, l, f),
    e2(t, b1(l, f), "rgba(255,240,210,.8)", 1.4),
    a.A > 0.1 && a.C < 0.9)
  )
    for (const k of [-1, 1]) {
      const g = 0.5 + k * (u + 0.05);
      e2(
        t,
        [
          [l.X(g), l.Y(f(g))],
          [l.X(g - k * 0.035), l.Y(-5)],
        ],
        "rgba(255,210,160,.55)",
        1.2,
        [5, 4],
      );
    }
  const S = l.Y(3.2);
  (l3(t, l.X(0.36 - u * 0.5), S, l.X(0.2 - u * 0.5), S, "#5fd3c6"),
    l3(t, l.X(0.64 + u * 0.5), S, l.X(0.8 + u * 0.5), S, "#5fd3c6"),
    y1(t, l.X(0.5), S, translate("张 裂"), {
      color: "#bff3ec",
      font: '900 14px "Noto Serif SC", serif',
    }));
  const v = [
    [translate("裂谷"), translate("如 东非大裂谷")],
    [translate("狭长海洋"), translate("如 红海")],
    [translate("大洋 · 洋中脊"), translate("如 大西洋")],
  ][a.stage];
  return (
    y1(t, l.X(0.5), l.Y(f(0.5)) + (a.stage ? 36 : -30), v[0], {
      box: !0,
      color: "#5fd3c6",
      font: '700 13px "Noto Serif SC", serif',
    }),
    y1(t, l.X(0.5), l.Y(f(0.5)) + (a.stage ? 60 : -8), v[1], {
      color: "rgba(191,243,236,.85)",
      font: '500 11.5px "Noto Serif SC", serif',
    }),
    y1(t, l.X(0.14), l.Y(-3.4), translate("大陆地壳"), {
      color: "#e5c29a",
    }),
    y1(t, l.X(0.86), l.Y(-3.4), translate("大陆地壳"), {
      color: "#e5c29a",
    }),
    y1(t, l.X(0.5), e.y + e.h - 22, translate("地幔物质上涌"), {
      color: "#ffd0a0",
      font: '600 12px "Noto Serif SC", serif',
    }),
    M5(t, e, l, -8, 6),
    y1(
      t,
      e.x + e.w - 6,
      e.y + e.h - 8,
      translate("剖面示意 · 垂直比例已夸大"),
      {
        align: "right",
        color: "rgba(141,145,153,.7)",
        font: "500 10px JetBrains Mono",
      },
    ),
    a
  );
}
const S0 = Array.from(
  {
    length: 60,
  },
  (t, e) => {
    const o = (n) => {
      const a = Math.sin(e * 12.9898 + n * 78.233) * 43758.5453;
      return a - Math.floor(a);
    };
    return {
      f: o(1),
      off: (o(2) - 0.5) * 1.6,
      ph: o(3),
    };
  },
);
function Wt(t) {
  return {
    sT: 0.46,
    L: 0.12 + 0.36 * t,
    e: (l) => {
      let f = -4.5;
      f -= 3.4 * C1(l - 0.46, 0.014) * (0.5 + 0.5 * t);
      const i = $1((l - (0.46 + 0.035)) / 0.06);
      return (
        (f = _2(
          f,
          0.4 +
            (0.6 + 5.2 * t) * C1(l - 0.68, 0.075) +
            1.2 * t * C1(l - 0.82, 0.05),
          i,
        )),
        (f += i * t * 1.6 * C1(l - 0.66, 0.012)),
        f
      );
    },
    slab: (l) =>
      l < 0.46 ? -4.8 : -4.8 - Math.pow((l - 0.46) / 0.4, 1.4) * 22,
  };
}
function Zt(t, e, o, n) {
  (t.save(), t.beginPath(), t.rect(e.x, e.y - 60, e.w, e.h + 60), t.clip());
  const a = Qt(t, e, o, n);
  return (t.restore(), a);
}
function Qt(t, e, o, n) {
  const a = Wt(o),
    l = v5(t, e, 7.5, 16),
    { e: f, sT: i, slab: d, L: h } = a;
  (b5(t, e, l), S5(t, e, l, -10));
  const p = i + 0.01;
  t2(
    t,
    b1(l, f, p, 1),
    b1(
      l,
      (x) => -4.8 - 5.5 * $1((x - i) / 0.15) - 2 * o * C1(x - 0.68, 0.1),
      p,
      1,
    ),
    "#7d5a3a",
  );
  for (let x = 1; x <= 3; x++)
    e2(
      t,
      b1(l, (E) => Math.min(f(E), 1.2) - x * 1.5, i + 0.05, 1, 120),
      "rgba(0,0,0,.22)",
      1,
    );
  const u = [],
    y = [];
  for (let x = 0; x <= i + h; x += 0.003) {
    const E = x < i ? f(x) : d(x);
    (u.push([l.X(x), l.Y(E)]), y.push([l.X(x), l.Y(E - 2.6)]));
  }
  (t2(t, u, y, "#2f3947"), e2(t, u, "rgba(160,190,220,.4)", 1));
  const S = i + 0.2,
    v = l.X(S),
    k = l.Y(d(S)),
    g = l.X(0.66),
    w = l.Y(f(0.66));
  if (o > 0.15) {
    for (let E = 0; E < 7; E++) {
      const $ = (n * 0.22 + E / 7) % 1,
        z = _2(v, g, $) + Math.sin($ * 9 + E) * 5,
        F = _2(k, w + 20, $);
      ((t.fillStyle = `rgba(255,${(120 + 90 * $) | 0},60,${0.75 * (1 - $ * 0.6)})`),
        t.beginPath(),
        t.ellipse(z, F, 4 + 3 * (1 - $), 6 + 3 * (1 - $), 0, 0, 7),
        t.fill());
    }
    const x = t.createRadialGradient(v, k, 0, v, k, 60);
    (x.addColorStop(0, "rgba(255,140,60,.55)"),
      x.addColorStop(1, "rgba(255,90,40,0)"),
      (t.fillStyle = x),
      t.fillRect(v - 60, k - 60, 120, 120));
  }
  if (
    (P5(t, e, l, f), e2(t, b1(l, f), "rgba(255,240,210,.8)", 1.4), o > 0.55)
  ) {
    const x = $1((o - 0.55) / 0.3);
    for (let $ = 0; $ < 16; $++) {
      const z = (n * 0.35 + $ / 16) % 1,
        F = g + Math.sin($ * 4.1) * 30 * z + z * 26,
        D = w - 8 - z * 90 * x;
      ((t.fillStyle = `rgba(${(150 + 60 * (1 - z)) | 0},${(140 - 40 * z) | 0},${(130 - 30 * z) | 0},${0.45 * (1 - z) * x})`),
        t.beginPath(),
        t.arc(F, D, 5 + z * 16, 0, 7),
        t.fill());
    }
    const E = t.createRadialGradient(g, w, 0, g, w, 24);
    (E.addColorStop(0, `rgba(255,200,90,${0.9 * x})`),
      E.addColorStop(1, "rgba(255,90,40,0)"),
      (t.fillStyle = E),
      t.fillRect(g - 24, w - 24, 48, 48));
  }
  const T = Math.round(S0.length * (0.25 + 0.75 * o));
  for (let x = 0; x < T; x++) {
    const E = S0[x],
      $ = i - 0.02 + E.f * (h + 0.02),
      z = l.Y(($ < i ? f($) - 1 : d($)) + E.off),
      F = l.X($),
      D = 0.5 + 0.5 * Math.sin(n * 3 + E.ph * 40);
    ((t.fillStyle = `rgba(255,122,89,${0.55 + 0.4 * D})`),
      t.beginPath(),
      t.arc(F, z, 2.4, 0, 7),
      t.fill(),
      D > 0.96 &&
        ((t.strokeStyle = "rgba(255,122,89,.6)"),
        t.beginPath(),
        t.arc(F, z, 8, 0, 7),
        t.stroke()));
  }
  const M = l.Y(-6.2);
  return (
    l3(t, l.X(0.08), M, l.X(0.24), M, "#ff7a59"),
    l3(t, l.X(0.94), l.Y(-2.4), l.X(0.8), l.Y(-2.4), "#ff7a59"),
    y1(t, l.X(0.16), M + 20, translate("大洋板块 · 密度大、位置低"), {
      color: "#c9d8e8",
    }),
    y1(t, l.X(0.86), l.Y(-6.2), translate("大陆板块"), {
      color: "#e5c29a",
    }),
    y1(t, l.X(i), l.Y(f(i)) + 22, translate("海沟"), {
      box: !0,
      color: "#72c4ff",
      font: '700 12px "Noto Serif SC", serif',
    }),
    y1(
      t,
      l.X(0.7),
      l.Y(f(0.7)) - 28,
      o > 0.4
        ? translate("山脉 · 火山（如安第斯山脉）")
        : translate("海岸山地"),
      {
        box: !0,
        color: "#ff7a59",
        font: '700 12px "Noto Serif SC", serif',
      },
    ),
    y1(t, l.X(i + 0.16), l.Y(d(i + 0.16)) - 16, translate("俯冲"), {
      color: "#ffd0c2",
      font: '900 13px "Noto Serif SC", serif',
    }),
    (t.fillStyle = "rgba(255,122,89,.9)"),
    t.beginPath(),
    t.arc(e.x + e.w - 150, e.y + 18, 3, 0, 7),
    t.fill(),
    y1(t, e.x + e.w - 142, e.y + 18, translate("震源（多沿俯冲带分布）"), {
      align: "left",
      color: "rgba(236,231,221,.75)",
      font: '500 11px "Noto Serif SC", serif',
    }),
    M5(t, e, l, -14, 6),
    y1(
      t,
      e.x + e.w - 6,
      e.y + e.h - 8,
      translate("剖面示意 · 垂直比例已夸大"),
      {
        align: "right",
        color: "rgba(141,145,153,.7)",
        font: "500 10px JetBrains Mono",
      },
    ),
    a
  );
}
const b3 = (t, e, o) => Math.max(e, Math.min(o, t)),
  I2 = (t) => ((t = b3(t, 0, 1)), t * t * (3 - 2 * t)),
  O = {
    lo0: 115.6,
    lo1: 123.4,
    la0: 21.3,
    la1: 27.4,
  },
  W = 460,
  g1 = 380,
  j2 = [
    [0, 0],
    [4, -1],
    [6, -3],
    [7, -6],
    [8, -14],
    [9, -26],
    [10, -40],
    [11, -52],
    [12, -58],
    [13, -68],
    [14, -76],
    [14.7, -96],
    [16, -106],
    [18, -118],
    [20, -125],
    [22, -127],
    [25, -122],
  ];
function B2(t) {
  for (let e = 1; e < j2.length; e++)
    if (t <= j2[e][0]) {
      const [o, n] = j2[e - 1],
        [a, l] = j2[e];
      return n + ((l - n) * (t - o)) / (a - o);
    }
  return j2[j2.length - 1][1];
}
const t6 = [
    {
      n: translate("闽江"),
      pts: [
        [118.2, 26.65],
        [118.9, 26.2],
        [119.35, 26.08],
        [119.65, 26],
        [120.1, 26.15],
        [120.8, 26.45],
        [121.5, 26.85],
        [122.2, 27.25],
      ],
    },
    {
      n: translate("九龙江"),
      pts: [
        [117.2, 24.65],
        [117.7, 24.5],
        [118.05, 24.45],
        [118.5, 24.2],
        [119.05, 23.75],
        [119.45, 23.15],
        [119.8, 22.55],
        [120.05, 21.95],
      ],
    },
    {
      n: "",
      pts: [
        [120.95, 23.85],
        [120.55, 23.85],
        [120.25, 23.78],
        [119.95, 23.6],
        [119.72, 23.3],
        [119.6, 22.9],
      ],
    },
    {
      n: "",
      pts: [
        [121.45, 24.95],
        [121.35, 25.15],
        [121.25, 25.5],
        [121.5, 26],
        [121.9, 26.5],
      ],
    },
    {
      n: "",
      pts: [
        [116.7, 23.6],
        [117, 23.3],
        [117.5, 22.9],
        [118.2, 22.5],
      ],
    },
  ],
  e6 = [
    {
      n: translate("福 建"),
      at: [118.1, 25.85],
      k: "land",
    },
    {
      n: translate("广 东"),
      at: [116.2, 23.75],
      k: "land",
    },
    {
      n: translate("台湾岛"),
      at: [120.95, 23.6],
      k: "land",
    },
    {
      n: translate("澎湖列岛"),
      at: [119.35, 23.55],
      k: "isl",
    },
    {
      n: translate("台湾海峡"),
      at: [119.6, 24.55],
      k: "sea",
    },
    {
      n: translate("东海"),
      at: [122.2, 26.3],
      k: "sea",
    },
    {
      n: translate("南海"),
      at: [117.2, 21.8],
      k: "sea",
    },
    {
      n: translate("太平洋"),
      at: [122.9, 23],
      k: "sea",
    },
    {
      n: translate("台湾浅滩"),
      at: [118.1, 23],
      k: "shoal",
    },
  ],
  n6 = [
    {
      n: translate("澎湖原人"),
      d: translate("海底打捞出的古人类下颌骨化石"),
      at: [119.95, 23.15],
    },
    {
      n: translate("古菱齿象"),
      d: translate("海峡中常被渔网捞起的陆生哺乳动物化石"),
      at: [119.2, 24],
    },
    {
      n: translate("古河道"),
      d: translate("海底残留的古代河流谷地"),
      at: [119.55, 23.35],
      river: !0,
    },
  ];
async function o6() {
  const t = (
      await preloadDependencies(async () => {
        const { default: m } =
          await import("../../vendor/land-50m-fTrrQOwI.js");
        return {
          default: m,
        };
      }, [])
    ).default,
    e = K0(t, t.objects.land),
    o = [];
  for (const m of e.features) {
    const C =
      m.geometry.type === "Polygon"
        ? [m.geometry.coordinates]
        : m.geometry.coordinates;
    for (const L of C) {
      const [[R, U], [a1, V]] = _4({
        type: "Polygon",
        coordinates: L,
      });
      (R > a1 || (a1 > O.lo0 - 2 && R < O.lo1 + 2)) &&
        V > O.la0 - 2 &&
        U < O.la1 + 2 &&
        o.push(L);
    }
  }
  const n = {
      type: "MultiPolygon",
      coordinates: o,
    },
    a = document.createElement("canvas");
  ((a.width = W), (a.height = g1));
  const l = a.getContext("2d"),
    f = H0().fitExtent(
      [
        [0, 0],
        [W, g1],
      ],
      {
        type: "Polygon",
        coordinates: [
          [
            [O.lo0, O.la0],
            [O.lo0, O.la1],
            [O.lo1, O.la1],
            [O.lo1, O.la0],
            [O.lo0, O.la0],
          ],
        ],
      },
    );
  ((l.fillStyle = "#fff"), l.beginPath(), L3(f, l)(n), l.fill());
  const i = l.getImageData(0, 0, W, g1).data,
    d = new Uint8Array(W * g1);
  for (let m = 0; m < W * g1; m++) d[m] = i[m * 4] > 127 ? 1 : 0;
  const h = (m) => {
      const [C] = f.invert([m + 0.5, 0]);
      return C;
    },
    p = (m) => f.invert([0, m + 0.5])[1],
    u = Float32Array.from(
      {
        length: W,
      },
      (m, C) => h(C),
    ),
    y = Float32Array.from(
      {
        length: g1,
      },
      (m, C) => p(C),
    ),
    S = (u[W - 1] - u[0]) / (W - 1),
    v = (y[0] - y[g1 - 1]) / (g1 - 1),
    k = 1e9,
    g = new Float32Array(W * g1);
  for (let m = 0; m < W * g1; m++) g[m] = d[m] ? 0 : k;
  const w = S * Math.cos((24 * Math.PI) / 180),
    T = v,
    M = Math.hypot(w, T);
  for (let m = 0; m < g1; m++)
    for (let C = 0; C < W; C++) {
      const L = m * W + C;
      let R = g[L];
      (C > 0 && (R = Math.min(R, g[L - 1] + w)),
        m > 0 &&
          ((R = Math.min(R, g[L - W] + T)),
          C > 0 && (R = Math.min(R, g[L - W - 1] + M)),
          C < W - 1 && (R = Math.min(R, g[L - W + 1] + M))),
        (g[L] = R));
    }
  for (let m = g1 - 1; m >= 0; m--)
    for (let C = W - 1; C >= 0; C--) {
      const L = m * W + C;
      let R = g[L];
      (C < W - 1 && (R = Math.min(R, g[L + 1] + w)),
        m < g1 - 1 &&
          ((R = Math.min(R, g[L + W] + T)),
          C < W - 1 && (R = Math.min(R, g[L + W + 1] + M)),
          C > 0 && (R = Math.min(R, g[L + W - 1] + M))),
        (g[L] = R));
    }
  const x = (m, C, [L, R], [U, a1]) => {
      const V = U - L,
        p1 = a1 - R,
        m1 = b3(((m - L) * V + (C - R) * p1) / (V * V + p1 * p1), 0, 1);
      return Math.hypot(m - L - m1 * V, C - R - m1 * p1);
    },
    E = new Float32Array(W * g1);
  for (let m = 0; m < g1; m++)
    for (let C = 0; C < W; C++) {
      const L = m * W + C;
      if (d[L]) {
        E[L] = -1;
        continue;
      }
      const R = u[C],
        U = y[m],
        a1 = g[L];
      let V =
        12 + 52 * Math.pow(Math.min(a1, 1.1), 0.7) + 32 * Math.max(0, a1 - 1.1);
      ((V -= 30 * Math.exp(-((R - 118) ** 2) / 0.45 - (U - 22.95) ** 2 / 0.09)),
        (V +=
          115 *
          Math.exp(-(x(R, U, [119.8, 23.45], [120.05, 22.4]) ** 2) / 0.006)));
      const p1 = 121.55 - (25.2 - U) * 0.2,
        m1 = I2((R - p1 - 0.02) / 0.7) * (1 - I2((U - 24.9) / 0.7)),
        D1 = 122.3 + (U - 25.4) * 0.9 + 0.1 * Math.sin(U * 5),
        K1 = I2((R - D1) / 0.55) * I2((U - 24.2) / 0.7),
        a2 = 21.95 + (R - 116) * 0.035 + 0.12 * Math.sin(R * 3.1),
        v2 = I2((a2 - U) / 0.8);
      ((V = Math.max(
        V,
        3200 * m1,
        1800 * K1,
        140 * I2((a2 - U + 0.3) / 0.3) + 2500 * v2,
      )),
        (E[L] = Math.max(6, V)));
    }
  const $ = document.createElement("canvas");
  (($.width = W), ($.height = g1));
  const z = $.getContext("2d"),
    F = z.createImageData(W, g1);
  let D = null,
    q = "",
    Y = -1;
  const _ = (m, C) => {
      const L = Math.round((m - u[0]) / S),
        R = Math.round((y[0] - C) / v);
      return L < 0 || R < 0 || L >= W || R >= g1 ? -1 : R * W + L;
    },
    e1 = (m, C) => {
      const L = _(m, C);
      return L < 0 ? 999 : E[L];
    };
  function t1(m) {
    const C = F.data;
    for (let L = 0; L < W * g1; L++) {
      const R = E[L],
        U = L * 4;
      if (R < 0) {
        ((C[U] = 118), (C[U + 1] = 128), (C[U + 2] = 84), (C[U + 3] = 255));
        continue;
      }
      if (R <= m) {
        const a1 = b3(R / 130, 0, 1);
        ((C[U] = 176 - 60 * a1),
          (C[U + 1] = 160 - 30 * a1),
          (C[U + 2] = 104 - 20 * a1),
          (C[U + 3] = 255));
      } else {
        const a1 = R - m,
          V = b3(Math.log10(1 + a1) / 3.4, 0, 1);
        ((C[U] = 70 - 62 * V),
          (C[U + 1] = 170 - 138 * V),
          (C[U + 2] = 200 - 128 * V),
          (C[U + 3] = 255));
        const p1 = L % W,
          m1 = (L / W) | 0,
          D1 = [
            p1 > 0 ? L - 1 : L,
            p1 < W - 1 ? L + 1 : L,
            m1 > 0 ? L - W : L,
            m1 < g1 - 1 ? L + W : L,
          ];
        m > 1 &&
          D1.some((K1) => E[K1] >= 0 && E[K1] <= m) &&
          ((C[U] = 170), (C[U + 1] = 222), (C[U + 2] = 232));
      }
    }
    z.putImageData(F, 0, 0);
  }
  function A(m) {
    let C = 0,
      L = 0;
    for (let R = 0; R < g1; R++)
      for (let U = 0; U < W; U++) {
        const a1 = u[U],
          V = y[R];
        if (V < 23 || V > 25.4 || a1 < 118.6 || a1 > 120.9) continue;
        const p1 = E[R * W + U];
        p1 < 0 || (C++, p1 <= m && L++);
      }
    return C ? L / C : 0;
  }
  function J(m, C, L, R, U = {}) {
    const a1 = `${C.x},${C.y},${C.w},${C.h}`;
    (a1 !== q &&
      ((D = wt().fitExtent(
        [
          [C.x, C.y],
          [C.x + C.w, C.y + C.h],
        ],
        {
          type: "Polygon",
          coordinates: [
            [
              [O.lo0, O.la0],
              [O.lo0, O.la1],
              [O.lo1, O.la1],
              [O.lo1, O.la0],
              [O.lo0, O.la0],
            ],
          ],
        },
      )),
      (q = a1)),
      Math.abs(L - Y) > 0.2 && (t1(L), (Y = L)));
    const V = (K, d1) => D([K, d1]),
      [p1, m1] = V(O.lo0, O.la1),
      [D1, K1] = V(O.lo1, O.la0);
    (m.save(),
      m.beginPath(),
      m.rect(p1, m1, D1 - p1, K1 - m1),
      m.clip(),
      (m.imageSmoothingEnabled = !0));
    const a2 = 44;
    for (let K = 0; K < a2; K++) {
      const d1 = O.la1 - ((O.la1 - O.la0) * K) / a2,
        P1 = O.la1 - ((O.la1 - O.la0) * (K + 1)) / a2,
        n1 = ((O.la1 - d1) / (O.la1 - O.la0)) * g1,
        i1 = ((O.la1 - P1) / (O.la1 - O.la0)) * g1,
        M1 = V(O.lo0, d1)[1],
        O1 = V(O.lo0, P1)[1];
      m.drawImage($, 0, n1, W, i1 - n1, p1, M1, D1 - p1, O1 - M1 + 0.6);
    }
    const v2 = L3(D, m);
    (m.beginPath(), v2(n));
    const r2 = m.createLinearGradient(0, m1, 0, K1);
    (r2.addColorStop(0, "#6f7f52"),
      r2.addColorStop(1, "#8a8a58"),
      (m.fillStyle = r2),
      m.fill(),
      (m.strokeStyle =
        L > 1 ? "rgba(255,255,255,.55)" : "rgba(220,240,240,.7)"),
      (m.lineWidth = 1),
      m.setLineDash(L > 1 ? [3, 3] : []),
      m.stroke(),
      m.setLineDash([]),
      (m.strokeStyle = "rgba(255,255,255,.07)"),
      m.beginPath(),
      v2(
        B0()
          .step([1, 1])
          .extent([
            [O.lo0 - 1, O.la0 - 1],
            [O.lo1 + 1, O.la1 + 1],
          ])(),
      ),
      m.stroke());
    for (const K of t6) {
      const d1 = [];
      for (let n1 = 0; n1 < K.pts.length - 1; n1++)
        for (let i1 = 0; i1 < 12; i1++) {
          const M1 = i1 / 12,
            O1 = K.pts[n1][0] + (K.pts[n1 + 1][0] - K.pts[n1][0]) * M1,
            c2 = K.pts[n1][1] + (K.pts[n1 + 1][1] - K.pts[n1][1]) * M1;
          d1.push([O1, c2]);
        }
      m.lineCap = "round";
      let P1 = null;
      for (const [n1, i1] of d1) {
        const M1 = e1(n1, i1),
          O1 = M1 < 0 || M1 <= L,
          c2 = V(n1, i1);
        (O1 &&
          P1 &&
          ((m.strokeStyle =
            M1 < 0 ? "rgba(120,190,230,.8)" : "rgba(120,200,240,.95)"),
          (m.lineWidth = M1 < 0 ? 1.6 : 2.2),
          m.beginPath(),
          m.moveTo(P1[0], P1[1]),
          m.lineTo(c2[0], c2[1]),
          m.stroke()),
          (P1 = O1 ? c2 : null));
      }
      if (K.n) {
        const [n1, i1] = K.pts[1],
          M1 = V(n1, i1);
        ((m.font = '600 11px "Noto Serif SC", serif'),
          (m.fillStyle = "rgba(170,220,245,.9)"),
          (m.textAlign = "left"),
          m.fillText(K.n, M1[0] + 6, M1[1] - 6));
      }
    }
    for (const K of e6) {
      const [d1, P1] = V(...K.at);
      if (
        ((m.textAlign = "center"),
        (m.textBaseline = "middle"),
        (m.shadowColor = "rgba(0,0,0,.85)"),
        (m.shadowBlur = 6),
        K.k === "sea")
      ) {
        const n1 = e1(...K.at) <= L && K.n === translate("台湾海峡");
        ((m.font = 'italic 600 16px "Noto Serif SC", serif'),
          (m.fillStyle = n1
            ? "rgba(255,230,170,.95)"
            : "rgba(180,225,245,.85)"),
          m.fillText(n1 ? translate("台湾海峡 → 陆桥") : K.n, d1, P1));
      } else
        K.k === "shoal"
          ? ((m.font = '500 11.5px "Noto Serif SC", serif'),
            (m.fillStyle = "rgba(200,235,245,.7)"),
            m.fillText(K.n, d1, P1))
          : ((m.font =
              K.k === "isl"
                ? '600 11.5px "Noto Serif SC", serif'
                : '900 15px "Noto Serif SC", serif'),
            (m.fillStyle = "#f3ecd8"),
            m.fillText(K.n, d1, P1));
      m.shadowBlur = 0;
    }
    for (const K of n6) {
      if (K.river) continue;
      const [d1, P1] = V(...K.at),
        n1 = e1(...K.at) <= L,
        i1 = 0.5 + 0.5 * Math.sin(R * 2.4);
      ((m.strokeStyle = `rgba(255,122,89,${0.35 + 0.4 * i1})`),
        (m.lineWidth = 1.2),
        m.beginPath(),
        m.arc(d1, P1, 7 + 4 * i1, 0, 7),
        m.stroke(),
        (m.fillStyle = n1 ? "#ff7a59" : "rgba(255,122,89,.75)"),
        m.beginPath(),
        m.arc(d1, P1, 3.5, 0, 7),
        m.fill(),
        (m.font = '700 11.5px "Noto Serif SC", serif'),
        (m.textAlign = "left"),
        (m.fillStyle = "#ffd0c2"),
        (m.shadowColor = "rgba(0,0,0,.85)"),
        (m.shadowBlur = 6),
        m.fillText(K.n, d1 + 12, P1 - 2),
        (m.font = '500 10.5px "Noto Serif SC", serif'),
        (m.fillStyle = "rgba(236,231,221,.7)"),
        m.fillText(
          n1 ? translate("当时是陆地") : translate("今天在海底"),
          d1 + 12,
          P1 + 13,
        ),
        (m.shadowBlur = 0));
    }
    m.restore();
    const [l2, s2] = V(122.1, 21.55),
      T2 = V(122.1 + 100 / (111 * Math.cos((21.6 * Math.PI) / 180)), 21.55)[0];
    if (
      ((m.strokeStyle = "rgba(236,231,221,.7)"),
      (m.lineWidth = 1.5),
      m.beginPath(),
      m.moveTo(l2, s2 - 4),
      m.lineTo(l2, s2),
      m.lineTo(T2, s2),
      m.lineTo(T2, s2 - 4),
      m.stroke(),
      (m.font = "500 10px JetBrains Mono"),
      (m.fillStyle = "rgba(236,231,221,.75)"),
      (m.textAlign = "center"),
      m.fillText("100 km", (l2 + T2) / 2, s2 - 10),
      U.legend !== !1)
    ) {
      const K = D1 - 176,
        d1 = m1 + 22;
      ((m.fillStyle = "rgba(6,9,14,.7)"),
        m.fillRect(K - 8, d1 - 14, 170, 60),
        [
          ["rgb(150,142,94)", translate("海平面下降后出露的陆架")],
          ["rgb(40,110,150)", translate("海域（颜色越深水越深）")],
          ["rgba(120,200,240,1)", translate("古河道")],
        ].forEach(([n1, i1], M1) => {
          ((m.fillStyle = n1),
            m.fillRect(K, d1 - 5 + M1 * 17, 14, 8),
            (m.font = '500 11px "Noto Serif SC", serif'),
            (m.fillStyle = "rgba(236,231,221,.8)"),
            (m.textAlign = "left"),
            (m.textBaseline = "middle"),
            m.fillText(i1, K + 22, d1 - 1 + M1 * 17));
        }));
    }
  }
  return {
    draw: J,
    exposedFrac: A,
  };
}
const B = {
  ...C4,
  OrbitControls: N4,
};
function i6() {
  const t = (s) => document.querySelector(s),
    e = (s, c, b) => Math.max(c, Math.min(b, s)),
    o = Math.PI / 180,
    n = t("#stage"),
    a = (s, c, b) => new B.Vector3(...N1(s, c)).multiplyScalar(b),
    l = (s) =>
      s < 0.05
        ? translate("今天")
        : s >= 100
          ? translate("{0} 亿年前", [+(s / 100).toFixed(2)])
          : translate("{0} 万年前", [Math.round(s * 100)]),
    f = (s) =>
      s < 0.02
        ? translate("今天")
        : s >= 10
          ? translate("{0} 万年前", [+(s / 10).toFixed(2)])
          : translate("{0} 年前", [Math.round(s * 100) * 10]),
    i = {
      ch: null,
      scene: "globe",
      age: 0,
      him: 70,
      ka: 20,
      prog: 0,
      mode7: "rift",
      play: !1,
      labels: !0,
      grid: !0,
      rotate: !1,
      tint: !1,
      fossils: !0,
      glacial: !0,
      ghost: !0,
      quakes: !0,
      volcs: !0,
      belts: !1,
      sel: null,
      quiz: null,
    },
    d = t("#c3"),
    h = t("#c2"),
    p = new B.WebGLRenderer({
      canvas: d,
      antialias: !0,
      alpha: !0,
    });
  p.setPixelRatio(Math.min(devicePixelRatio, 2));
  const u = new B.PerspectiveCamera(36, 1, 0.1, 2e3);
  u.position.set(0, 6, 20);
  const y = new B.OrbitControls(u, d);
  ((y.enableDamping = !0),
    (y.dampingFactor = 0.07),
    (y.enablePan = !1),
    (y.minDistance = 8.5),
    (y.maxDistance = 40),
    (y.autoRotateSpeed = 0.6));
  const S = new B.Scene(),
    v = 5,
    k = {
      uT: {
        value: 0,
      },
      uPR: {
        value: Math.min(devicePixelRatio, 2),
      },
    };
  {
    const s = [],
      c = [],
      b = [],
      P = [];
    for (let X = 0; X < 3200; X++) {
      const Z = Math.random() * 2 - 1,
        u1 = Math.random() * Math.PI * 2,
        x1 = Math.sqrt(1 - Z * Z),
        h1 = Math.pow(Math.random(), 4.2),
        G = Math.random(),
        H =
          G < 0.15
            ? [0.72, 0.82, 1]
            : G < 0.25
              ? [1, 0.86, 0.68]
              : [0.94, 0.95, 1];
      (s.push(x1 * Math.cos(u1) * 600, Z * 600, x1 * Math.sin(u1) * 600),
        c.push(...H.map((j) => j * (0.35 + 0.65 * h1 + 0.2))),
        b.push(1.1 + h1 * 3),
        P.push(Math.random()));
    }
    const N = new B.BufferGeometry();
    (N.setAttribute("position", new B.Float32BufferAttribute(s, 3)),
      N.setAttribute("color", new B.Float32BufferAttribute(c, 3)),
      N.setAttribute("size", new B.Float32BufferAttribute(b, 1)),
      N.setAttribute("ph", new B.Float32BufferAttribute(P, 1)),
      S.add(
        new B.Points(
          N,
          new B.ShaderMaterial({
            uniforms: k,
            transparent: !0,
            depthWrite: !1,
            blending: B.AdditiveBlending,
            vertexShader: `attribute float size;attribute float ph;attribute vec3 color;uniform float uT,uPR;varying vec3 vC;
            void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);vC=color*(.78+.22*sin(uT*(.6+ph*2.4)+ph*40.));gl_PointSize=size*uPR;}`,
            fragmentShader:
              "varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;if(r>1.)discard;gl_FragColor=vec4(vC*(exp(-r*r*4.)+.25*exp(-r*r*.9)),1.);}",
          }),
        ),
      ));
  }
  const g = 2048,
    w = 1024,
    T = document.createElement("canvas");
  ((T.width = g), (T.height = w));
  const M = T.getContext("2d"),
    x = L3(
      H0()
        .scale(g / (2 * Math.PI))
        .translate([g / 2, w / 2])
        .precision(0.2),
      M,
    ),
    E = new B.CanvasTexture(T);
  ((E.minFilter = E.magFilter = B.NearestFilter), (E.generateMipmaps = !1));
  const $ = new B.CanvasTexture(T);
  (($.generateMipmaps = !1), ($.minFilter = B.LinearFilter));
  let z = null,
    F = z2(0);
  function D(s) {
    F = z2(s);
    const c = X3(F, s);
    ((M.globalAlpha = 1), (M.fillStyle = "#000"), M.fillRect(0, 0, g, w));
    for (const P of c)
      ((M.globalAlpha = P.alpha),
        (M.fillStyle = `rgb(${(P.plate + 1) * 20},255,0)`),
        M.beginPath(),
        x(P.geo),
        M.fill());
    ((E.needsUpdate = !0), ($.needsUpdate = !0));
    const b = L.uR.value;
    (F.forEach((P, N) => b[N].set(...Ft(W0(P)))), (z = s));
  }
  const q = Xt(720, 360),
    Y = document.createElement("canvas");
  ((Y.width = q.W), (Y.height = q.H));
  const _ = Y.getContext("2d"),
    e1 = new B.CanvasTexture(Y),
    t1 = (s) => [1, 3, 5].map((c) => parseInt(s.slice(c, c + 2), 16));
  function A() {
    const s = _.createImageData(q.W, q.H),
      c = s.data,
      b = F2.map((P) => t1(P.color));
    for (let P = 0; P < q.W * q.H; P++) {
      const N = q.lab[P],
        X = b[N] || [0, 0, 0],
        Z = i.sel != null && i.sel !== N ? 0.35 : 1;
      ((c[P * 4] = X[0] * Z),
        (c[P * 4 + 1] = X[1] * Z),
        (c[P * 4 + 2] = X[2] * Z),
        (c[P * 4 + 3] = 255));
    }
    (_.putImageData(s, 0, 0), (e1.needsUpdate = !0));
  }
  A();
  const J = new B.LoadingManager(),
    m = new B.TextureLoader(J).load(L4);
  ((m.wrapS = B.RepeatWrapping),
    (m.minFilter = B.LinearFilter),
    (m.generateMipmaps = !1),
    (m.anisotropy = p.capabilities.getMaxAnisotropy()));
  const C = V1.length,
    L = {
      tBM: {
        value: m,
      },
      tMask: {
        value: E,
      },
      tMaskL: {
        value: $,
      },
      tPlates: {
        value: e1,
      },
      uR: {
        value: Array.from(
          {
            length: C,
          },
          () => new B.Matrix3(),
        ),
      },
      uC: {
        value: V1.map((s) => new B.Color(s.color)),
      },
      uPast: {
        value: 0,
      },
      uTint: {
        value: 0,
      },
      uPlates: {
        value: 0,
      },
      uGrid: {
        value: 1,
      },
    },
    R = new B.ShaderMaterial({
      uniforms: L,
      extensions: {
        derivatives: !0,
      },
      vertexShader: `varying vec2 vUv;varying vec3 vObj;varying vec3 vN;varying vec3 vV;
      void main(){vUv=uv;vObj=position;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}`,
      fragmentShader: `uniform sampler2D tBM,tMask,tMaskL,tPlates;uniform mat3 uR[${C}];uniform vec3 uC[${C}];
      uniform float uPast,uTint,uPlates,uGrid;varying vec2 vUv;varying vec3 vObj;varying vec3 vN;varying vec3 vV;
      vec2 toUv(vec3 p){return vec2(atan(p.x,p.z)/6.2831853+.5,asin(clamp(p.y,-1.,1.))/3.1415927+.5);}
      void main(){
        vec3 p=normalize(vObj);
        vec4 m=texture2D(tMask,vUv);
        float cov=texture2D(tMaskL,vUv).g;float id=floor(m.r/max(m.g,.004)*255./20.+.5)-1.;
        mat3 R=mat3(1.);vec3 tint=vec3(1.);
        for(int i=0;i<${C};i++){if(abs(float(i)-id)<.5){R=uR[i];tint=uC[i];}}
        vec3 q=normalize(R*p);
        vec3 land=texture2D(tBM,toUv(q)).rgb;
        land=mix(land,land*.3+tint*.72,uTint);
        // 陆架光晕：在覆盖度图上环形多点采样（经向间距按纬度修正）
        float shelf=0.;vec2 st=vec2(1./360./max(sqrt(1.-p.y*p.y),.15),1./180.);
        for(int k=0;k<8;k++){float a=float(k)*.785398;vec2 d=vec2(cos(a),sin(a))*st;
          shelf+=texture2D(tMaskL,vUv+d*1.6).g+texture2D(tMaskL,vUv+d*3.6).g*.7;}
        shelf=clamp(shelf/8.5,0.,1.);
        vec3 ocean=mix(vec3(.02,.075,.17),vec3(.07,.26,.38),smoothstep(.02,.9,shelf));
        vec3 past=mix(ocean,land,smoothstep(.2,.8,cov));
        vec3 now=texture2D(tBM,vUv).rgb;
        vec3 col=mix(now,past,uPast);
        vec3 pc=texture2D(tPlates,vUv).rgb;
        col=mix(col,col*.58+pc*.5,uPlates);
        // 经纬网
        vec2 g=vUv*vec2(36.,18.);vec2 fw=fwidth(g);vec2 gl=abs(fract(g-.5)-.5)/fw;
        float line=1.-min(min(gl.x,gl.y),1.);col+=vec3(.55,.75,.95)*line*.13*uGrid;
        // 光照：来自镜头左上方的柔光 + 大气边缘
        vec3 n=normalize(vN),v=normalize(vV);
        float d=max(dot(n,normalize(vec3(-.45,.4,.8))),0.);
        col*=.32+.85*d;
        float rim=pow(1.-max(dot(n,v),0.),2.6);
        col+=vec3(.3,.58,1.)*rim*.55;
        gl_FragColor=vec4(col,1.);}`,
    }),
    U = new B.Mesh(new B.SphereGeometry(v, 160, 112).rotateY(-Math.PI / 2), R);
  (S.add(U),
    S.add(
      new B.Mesh(
        new B.SphereGeometry(v * 1.15, 96, 64),
        new B.ShaderMaterial({
          side: B.BackSide,
          transparent: !0,
          blending: B.AdditiveBlending,
          depthWrite: !1,
          vertexShader:
            "varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
          fragmentShader:
            "varying vec3 vN;void main(){float i=pow(max(0.,.64-dot(vN,vec3(0.,0.,1.))),2.4);gl_FragColor=vec4(vec3(.32,.6,1.)*i*.85,1.);}",
        }),
      ),
    ));
  const a1 = {
      uT: {
        value: 0,
      },
    },
    V = (s, c = 1) =>
      new B.ShaderMaterial({
        uniforms: {
          ...a1,
          uC: {
            value: new B.Color(s),
          },
          uO: {
            value: c,
          },
        },
        transparent: !0,
        depthWrite: !1,
        vertexShader:
          "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader: `uniform float uT,uO;uniform vec3 uC;varying vec2 vUv;void main(){
        float p=pow(fract(vUv.x*14.-uT*.35),6.);gl_FragColor=vec4(uC*(1.+p*.9),uO*(.8+.2*p));}`,
      }),
    p1 = (s, c, b) =>
      new B.Mesh(
        new B.TubeGeometry(
          new B.CatmullRomCurve3(s),
          Math.max(8, s.length * 2),
          c,
          6,
          !1,
        ),
        b,
      ),
    m1 = new B.Group(),
    D1 = new B.Group();
  S.add(m1, D1);
  const K1 = V("#5fd3c6"),
    a2 = V("#ff7a59");
  for (const s of m5) {
    const c = g5(s.pts, 1).map((b) =>
      new B.Vector3(...b).multiplyScalar(v * 1.006),
    );
    if ((m1.add(p1(c, 0.03, s.type === "r" ? K1 : a2)), s.belt)) {
      const b = new B.Mesh(
        new B.TubeGeometry(
          new B.CatmullRomCurve3(c),
          c.length * 2,
          0.34,
          8,
          !1,
        ),
        new B.MeshBasicMaterial({
          color: s.belt === "pac" ? 16747082 : 16736138,
          transparent: !0,
          opacity: 0.2,
          depthWrite: !1,
          blending: B.AdditiveBlending,
        }),
      );
      ((b.userData.belt = s.belt), D1.add(b));
    }
  }
  const v2 = [
      ["EU", 95, 48, 95, 7, translate("约 2 cm/年")],
      ["AF", 20, 2, 30, 8, translate("约 2 cm/年")],
      ["AM", -98, 42, 255, 9, translate("约 2 cm/年")],
      ["AM", -58, -12, 275, 8, translate("约 3 cm/年")],
      ["PA", -150, 5, 300, 20, translate("约 7–10 cm/年")],
      ["IO", 78, -8, 12, 14, translate("约 5 cm/年")],
      ["IO", 132, -26, 18, 13, translate("约 7 cm/年")],
      ["AN", 60, -72, 110, 5, translate("较慢")],
    ],
    r2 = new B.Group();
  S.add(r2);
  {
    const s = V("#fff1c8", 0.95),
      c = new B.MeshBasicMaterial({
        color: 16773576,
      });
    for (const [, b, P, N, X] of v2) {
      const Z = new B.Vector3(...N1(b, P)),
        u1 = new B.Vector3(0, 1, 0).cross(Z).normalize(),
        x1 = Z.clone().cross(u1).normalize(),
        h1 = x1
          .multiplyScalar(Math.cos(N * o))
          .add(u1.multiplyScalar(Math.sin(N * o))),
        G = Z.clone().cross(h1).normalize(),
        H = [];
      for (let Y1 = 0; Y1 <= 24; Y1++)
        H.push(
          Z.clone()
            .applyAxisAngle(G, (X * o * Y1) / 24)
            .multiplyScalar(v * 1.03),
        );
      r2.add(p1(H, 0.07, s));
      const j = H[H.length - 1],
        l1 = j
          .clone()
          .sub(H[H.length - 2])
          .normalize(),
        w1 = new B.Mesh(new B.ConeGeometry(0.2, 0.5, 16), c);
      (w1.position.copy(j).add(l1.clone().multiplyScalar(0.2)),
        w1.quaternion.setFromUnitVectors(new B.Vector3(0, 1, 0), l1),
        r2.add(w1));
    }
  }
  const l2 = Ot(),
    s2 = (s, c, b, P) => {
      const N = [],
        X = [];
      for (const u1 of s) {
        const x1 = N1(u1.lon, u1.lat);
        (N.push(...x1.map((h1) => h1 * v * 1.012)), X.push(P(u1)));
      }
      const Z = new B.BufferGeometry();
      return (
        Z.setAttribute("position", new B.Float32BufferAttribute(N, 3)),
        Z.setAttribute("size", new B.Float32BufferAttribute(X, 1)),
        new B.Points(
          Z,
          new B.ShaderMaterial({
            uniforms: {
              ...k,
              uC: {
                value: new B.Color(b),
              },
            },
            transparent: !0,
            depthWrite: !1,
            vertexShader: `attribute float size;uniform float uPR,uT;varying float vF;
          void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;
          vec3 n=normalize(normalMatrix*normalize(position));vF=smoothstep(-.05,.25,dot(n,normalize(-mv.xyz)));
          gl_PointSize=size*uPR*(1.+.12*sin(uT*3.+position.x*7.));}`,
            fragmentShader: `uniform vec3 uC;varying float vF;void main(){vec2 c=gl_PointCoord-.5;float a;
          ${c === "tri" ? "c.y=-c.y;float t=max(abs(c.x)*1.732+c.y,-c.y*2.)-.3;a=1.-smoothstep(-.03,.03,t);" : "float r=length(c)*2.;a=smoothstep(1.,.55,r)+.35*smoothstep(1.,.0,r);"}
          if(a<.01||vF<.01)discard;gl_FragColor=vec4(uC,a*vF);}`,
          }),
        )
      );
    },
    T2 = s2(l2.quakes, "dot", "#ff7a59", (s) => 3 + (s.m - 4) * 2.2),
    K = s2(l2.volcs, "tri", "#ffc15c", () => 12);
  S.add(T2, K);
  const d1 = t("#labels");
  let P1 = [];
  function n1(s, c, b, P) {
    const N = document.createElement("div");
    ((N.className = "lb " + s),
      (N.innerHTML = `<span>${c}</span>`),
      d1.appendChild(N));
    const X = {
      el: N,
      getPos: b,
      test: P,
    };
    return (P1.push(X), X);
  }
  const i1 = (s) =>
      s.clone().normalize().dot(u.position.clone().normalize()) > 0.12,
    M1 =
      (s, c, b, P = v * 1.02) =>
      () =>
        a(...$2(F, j1[s], c, b), P),
    O1 = [
      {
        n: translate("喜马拉雅山"),
        s: translate("高山岩层里有海洋生物化石"),
        at: [86.9, 28],
        ch: 1,
      },
      {
        n: translate("台湾海峡"),
        s: translate("海底发现古河道与人类遗迹"),
        at: [119.6, 24.2],
        ch: 2,
      },
      {
        n: translate("荷兰"),
        s: translate("约 1/5 国土由围海造陆而来"),
        at: [5.2, 52.4],
        ch: null,
      },
    ];
  function c2() {
    if (((d1.innerHTML = ""), (P1 = []), !i.labels || i.scene !== "globe"))
      return;
    const s = i.ch;
    (s === 0 &&
      O1.forEach((c, b) => {
        const P = n1(
          "pin",
          `${c.n}<small>${c.s}</small>`,
          () => a(...c.at, v * 1.02),
          i1,
        );
        P.el.dataset.pin = b;
      }),
      (s === 5 || s === 6) &&
        F2.forEach((c) =>
          n1("plate", c.name, () => a(...c.label, v * 1.03), i1),
        ),
      s === 5 &&
        v2.forEach(([, c, b, P, N, X]) => {
          const Z = new B.Vector3(...N1(c, b)),
            u1 = new B.Vector3(0, 1, 0).cross(Z).normalize(),
            x1 = Z.clone().cross(u1).normalize(),
            h1 = x1
              .multiplyScalar(Math.cos(P * o))
              .add(u1.multiplyScalar(Math.sin(P * o))),
            G = Z.clone()
              .applyAxisAngle(Z.clone().cross(h1).normalize(), (N * o) / 2)
              .multiplyScalar(v * 1.06);
          n1(
            "plain",
            `<small style="margin:0;color:#fff1c8">${X}</small>`,
            () => G.clone().add(new B.Vector3(0, -0.35, 0)),
            i1,
          );
        }),
      s === 6 &&
        (n1(
          "magma",
          translate("环太平洋火山地震带"),
          () => a(-150, 52, v * 1.08),
          i1,
        ),
        n1(
          "magma",
          translate("环太平洋火山地震带"),
          () => a(-78, -18, v * 1.08),
          i1,
        ),
        n1(
          "magma",
          translate("环太平洋火山地震带"),
          () => a(140, 22, v * 1.08),
          i1,
        ),
        n1(
          "dusk",
          translate("地中海—喜马拉雅火山地震带"),
          () => a(62, 33, v * 1.1),
          i1,
        ),
        n1(
          "dusk",
          translate("地中海—喜马拉雅火山地震带"),
          () => a(12, 42, v * 1.08),
          i1,
        )),
      (s === 4 || s === 8) && o4(n1));
  }
  function C2(s) {
    const c = new B.Vector3();
    for (const b of s) {
      const P = V1[j1[b]];
      c.add(new B.Vector3(...m2(F[j1[b]], N1(...P.ref))));
    }
    return c.normalize();
  }
  function o4(s) {
    const c = () => i.age;
    (s(
      "paleo",
      translate("泛大陆<small>Pangaea</small>"),
      () => C2(["AF", "SA", "NA", "EU"]).multiplyScalar(v * 1.04),
      (b) => c() >= 185 && i1(b),
    ),
      s(
        "sea",
        translate("泛大洋<small>Panthalassa</small>"),
        () =>
          C2(["AF", "SA", "NA", "EU"])
            .negate()
            .multiplyScalar(v * 1.04),
        (b) => c() >= 150 && i1(b),
      ),
      s(
        "sea",
        translate("特提斯海<small>古地中海</small>"),
        () => C2(["AR", "IN", "EU", "EU"]).multiplyScalar(v * 1.04),
        (b) => c() >= 60 && i1(b),
      ),
      s(
        "paleo",
        translate("劳亚古陆<small>Laurasia</small>"),
        () => C2(["NA", "EU", "EU"]).multiplyScalar(v * 1.04),
        (b) => c() < 185 && c() >= 90 && i1(b),
      ),
      s(
        "paleo",
        translate("冈瓦纳古陆<small>Gondwana</small>"),
        () => C2(["AF", "SA", "AN", "IN", "AU"]).multiplyScalar(v * 1.04),
        (b) => c() < 185 && c() >= 110 && i1(b),
      ),
      s(
        "sea",
        translate("大西洋<small>正在张开</small>"),
        () => C2(["SA", "AF", "NA"]).multiplyScalar(v * 1.04),
        (b) => c() < 110 && c() > 20 && i1(b),
      ));
    for (const b of ["NA", "SA", "AF", "EU", "IN", "AU", "AN"]) {
      const P = V1[j1[b]];
      s("plate", P.name, M1(b, ...P.ref, v * 1.03), (N) => c() < 110 && i1(N));
    }
  }
  d1.addEventListener("click", (s) => {
    const c = s.target.closest("[data-pin]");
    if (!c) return;
    const b = O1[+c.dataset.pin];
    b.ch != null ? h2(b.ch) : d2(a(...b.at, 13).toArray());
  });
  const s3 = new B.Vector3();
  function i4() {
    const s = n.getBoundingClientRect();
    for (const c of P1) {
      const b = c.getPos();
      s3.copy(b).project(u);
      const P = s3.z < 1 && (!c.test || c.test(b));
      ((c.el.style.opacity = P ? 1 : 0),
        (c.el.style.pointerEvents = P ? "" : "none"),
        (c.el.style.transform = `translate(${((s3.x + 1) / 2) * s.width}px,${((1 - s3.y) / 2) * s.height}px)`));
    }
  }
  const j3 = h.getContext("2d");
  let f2 = 0,
    N2 = 0;
  function a4() {
    const s = n.getBoundingClientRect(),
      c = Math.min(devicePixelRatio, 2);
    ((f2 = s.width),
      (N2 = s.height),
      (h.width = f2 * c),
      (h.height = N2 * c),
      j3.setTransform(c, 0, 0, c, 0, 0));
  }
  const x5 = (s = 104) => {
      const c = f2 < 700 ? 90 : 138;
      return {
        x: 22,
        y: c,
        w: f2 - 44,
        h: N2 - c - s,
      };
    },
    c3 = () => (f2 < 900 ? 0 : 290);
  let p2 = null,
    w5 = "";
  function r4() {
    const s = j3,
      c = x5();
    ((c.w -= c3()), s.clearRect(0, 0, f2, N2));
    const b = `${c.x},${c.y},${c.w},${c.h}`;
    b !== w5 &&
      ((p2 = Et()
        .rotate([-12, 0])
        .fitExtent(
          [
            [c.x, c.y],
            [c.x + c.w, c.y + c.h],
          ],
          {
            type: "Sphere",
          },
        )),
      (w5 = b));
    const P = L3(p2, s),
      N = z2(i.age),
      X = i.age;
    (s.beginPath(),
      P({
        type: "Sphere",
      }));
    const [Z, u1] = p2([12, 0]),
      x1 = s.createRadialGradient(Z, u1, 0, Z, u1, c.w * 0.55);
    (x1.addColorStop(0, "#123452"),
      x1.addColorStop(1, "#071526"),
      (s.fillStyle = x1),
      s.fill(),
      s.save(),
      s.clip(),
      (s.strokeStyle = "rgba(160,200,235,.08)"),
      (s.lineWidth = 1),
      s.beginPath(),
      P(nt()),
      s.stroke(),
      (s.strokeStyle = "rgba(216,178,106,.25)"),
      s.beginPath(),
      P({
        type: "LineString",
        coordinates: [
          [-180, 0],
          [-90, 0],
          [0, 0],
          [90, 0],
          [180, 0],
        ],
      }),
      s.stroke());
    const h1 = X3(N, X);
    (s.save(),
      (s.shadowColor = "rgba(90,190,220,.35)"),
      (s.shadowBlur = 14),
      (s.fillStyle = "rgba(90,170,200,.25)"));
    for (const G of h1)
      ((s.globalAlpha = G.alpha), s.beginPath(), P(G.geo), s.fill());
    s.restore();
    for (const G of h1)
      ((s.globalAlpha = G.alpha),
        s.beginPath(),
        P(G.geo),
        (s.fillStyle = i.tint ? V1[G.plate].color : "#a8946a"),
        s.fill(),
        (s.strokeStyle = "rgba(20,14,6,.28)"),
        (s.lineWidth = 0.5),
        s.stroke());
    if (((s.globalAlpha = 1), i.ghost && X > 0.5)) {
      ((s.strokeStyle = "rgba(236,231,221,.28)"),
        s.setLineDash([3, 3]),
        (s.lineWidth = 0.8),
        s.beginPath());
      for (const G of X3(z2(0), 0)) P(G.geo);
      (s.stroke(), s.setLineDash([]));
    }
    if (i.fossils)
      for (const G of v0)
        for (const H of G.sites) {
          const j = p2($2(N, H.plate, H.lon, H.lat));
          if (!j) continue;
          const l1 = p2($2(N, H.plate, H.lon, H.lat + H.r)),
            w1 = l1 ? Math.max(6, Math.hypot(l1[0] - j[0], l1[1] - j[1])) : 10,
            Y1 = s.createRadialGradient(j[0], j[1], 0, j[0], j[1], w1);
          (Y1.addColorStop(0, G.color + "ee"),
            Y1.addColorStop(0.6, G.color + "88"),
            Y1.addColorStop(1, G.color + "00"),
            (s.fillStyle = Y1),
            s.beginPath(),
            s.arc(j[0], j[1], w1, 0, 7),
            s.fill());
        }
    if (i.glacial)
      for (const G of _t) {
        const H = p2($2(N, G.plate, ...G.tail)),
          j = p2($2(N, G.plate, ...G.head));
        if (!H || !j) continue;
        const l1 = Math.atan2(j[1] - H[1], j[0] - H[0]);
        ((s.strokeStyle = "#e9f6ff"),
          (s.fillStyle = "#e9f6ff"),
          (s.lineWidth = 2),
          s.beginPath(),
          s.moveTo(H[0], H[1]),
          s.lineTo(j[0], j[1]),
          s.stroke(),
          s.beginPath(),
          s.moveTo(j[0] + Math.cos(l1) * 4, j[1] + Math.sin(l1) * 4),
          s.lineTo(
            j[0] - Math.cos(l1 - 0.5) * 7,
            j[1] - Math.sin(l1 - 0.5) * 7,
          ),
          s.lineTo(
            j[0] - Math.cos(l1 + 0.5) * 7,
            j[1] - Math.sin(l1 + 0.5) * 7,
          ),
          s.fill());
      }
    if (
      (s.restore(),
      (s.strokeStyle = "rgba(216,178,106,.35)"),
      (s.lineWidth = 1),
      s.beginPath(),
      P({
        type: "Sphere",
      }),
      s.stroke(),
      i.labels)
    ) {
      const G = (j, l1, w1, Y1) => {
          const P2 = p2(j);
          P2 &&
            ((s.font = w1),
            (s.fillStyle = Y1),
            (s.textAlign = "center"),
            (s.textBaseline = "middle"),
            (s.shadowColor = "rgba(0,0,0,.9)"),
            (s.shadowBlur = 8),
            s.fillText(l1, P2[0], P2[1]),
            (s.shadowBlur = 0));
        },
        H = (j, l1) => {
          const w1 = [0, 0, 0];
          for (const Y1 of j) {
            const P2 = m2(N[j1[Y1]], N1(...V1[j1[Y1]].ref));
            ((w1[0] += P2[0]), (w1[1] += P2[1]), (w1[2] += P2[2]));
          }
          return i2(w1);
        };
      if (X >= 185)
        (G(
          H(["AF", "SA", "NA", "EU"]),
          translate("泛 大 陆"),
          '900 20px "Noto Serif SC", serif',
          "#fff4d8",
        ),
          G(
            H(["AR", "IN", "EU", "EU"]),
            translate("特提斯海"),
            'italic 600 14px "Noto Serif SC", serif',
            "rgba(170,215,240,.9)",
          ),
          G(
            [-120, 5],
            translate("泛 大 洋"),
            'italic 600 16px "Noto Serif SC", serif',
            "rgba(170,215,240,.8)",
          ));
      else if (X >= 100)
        (G(
          H(["NA", "EU", "EU"]),
          translate("劳亚古陆"),
          '900 17px "Noto Serif SC", serif',
          "#fff4d8",
        ),
          G(
            H(["AF", "SA", "AN", "IN", "AU"]),
            translate("冈瓦纳古陆"),
            '900 17px "Noto Serif SC", serif',
            "#fff4d8",
          ),
          G(
            H(["AR", "IN", "EU", "EU"]),
            translate("特提斯海"),
            'italic 600 14px "Noto Serif SC", serif',
            "rgba(170,215,240,.9)",
          ));
      else
        for (const j of ["NA", "SA", "AF", "EU", "IN", "AU", "AN"]) {
          const l1 = V1[j1[j]];
          G(
            $2(N, j1[j], ...l1.ref),
            l1.name,
            '700 13px "Noto Serif SC", serif',
            "#fff4d8",
          );
        }
    }
  }
  let X2 = null;
  o6().then((s) => (X2 = s));
  function l4(s) {
    const c = j3;
    if ((c.clearRect(0, 0, f2, N2), i.scene === "map")) return r4();
    const b = x5();
    if (i.scene === "section")
      return b0(
        c,
        {
          x: b.x,
          y: b.y,
          w: b.w - c3(),
          h: b.h,
        },
        i.him,
        s,
      );
    if (i.scene === "strait") {
      if (!X2) {
        ((c.font = '500 13px "Noto Serif SC", serif'),
          (c.fillStyle = "#8d9199"),
          (c.textAlign = "center"),
          c.fillText(translate("正在载入海岸线数据…"), f2 / 2, N2 / 2));
        return;
      }
      return X2.draw(
        c,
        {
          x: b.x,
          y: b.y,
          w: b.w - c3(),
          h: b.h,
        },
        -B2(i.ka),
        s,
      );
    }
    if (i.scene === "boundary") {
      const P = {
        x: b.x,
        y: b.y,
        w: b.w - c3(),
        h: b.h,
      };
      return i.mode7 === "rift"
        ? Jt(c, P, i.prog, s)
        : i.mode7 === "sub"
          ? Zt(c, P, i.prog, s)
          : b0(c, P, 70 - i.prog * 70, s);
    }
  }
  const A5 = t("#hud");
  function b2(s, c) {
    A5.innerHTML = `<div class="hh">${s}</div><div class="kv">${c.map(([b, P, N]) => `<span>${b}</span><b class="${N || ""}">${P}</b>`).join("")}</div>`;
  }
  const s4 = (s, c) =>
    Math.round(
      Math.acos(e(s[0] * c[0] + s[1] * c[1] + s[2] * c[2], -1, 1)) * 6371,
    );
  function c4(s) {
    const c = z2(s),
      b = (Z, u1, x1) => m2(c[j1[Z]], N1(u1, x1)),
      P = s4(b("SA", -34.9, -8.05), b("AF", 9.3, 4)),
      N = i2(b("IN", 77.2, 28.6))[1],
      X =
        s >= 185
          ? translate("泛大陆（联合古陆）")
          : s >= 100
            ? translate("劳亚古陆 + 冈瓦纳古陆")
            : s >= 30
              ? translate("大洋逐渐成形")
              : translate("接近今天的格局");
    return {
      atl: P,
      ind: N,
      layout: X,
    };
  }
  const f4 = (s) => `${Math.abs(s).toFixed(1)}°${s >= 0 ? "N" : "S"}`;
  function p4() {
    const s = i.ch;
    if (s === 1) {
      const c = e4(i.him);
      b2(translate("HIMALAYA · 喜马拉雅的形成"), [
        [translate("年代"), l(i.him), "g"],
        [
          translate("特提斯海宽度"),
          c.width > 30
            ? translate("约 {0} km", [c.width])
            : translate("已闭合"),
          "c",
        ],
        [
          translate("最高处海拔"),
          `${Math.max(0, Math.round(c.peak * 1e3))} m`,
          "s",
        ],
        [translate("化石所在高度"), `${Math.round(c.top.km * 1e3)} m`],
        [
          translate("阶段"),
          i.him > 50
            ? translate("印度北移，大洋收缩")
            : translate("碰撞挤压，地壳隆起"),
          "g",
        ],
      ]);
    } else if (s === 2) {
      const c = B2(i.ka),
        b = X2 ? X2.exposedFrac(-c) : 0;
      b2(translate("STRAIT · 台湾海峡"), [
        [translate("年代"), f(i.ka), "g"],
        [translate("海平面"), `${c.toFixed(0)} m`, "c"],
        [translate("海峡出露"), `${Math.round(b * 100)}%`, "s"],
        [
          translate("海峡状态"),
          b > 0.8
            ? translate("陆桥：可步行往来")
            : b > 0.25
              ? translate("部分出露")
              : translate("海峡"),
          "g",
        ],
        [translate("现今平均水深"), translate("约 60 m")],
      ]);
    } else if (s === 3 || s === 4 || s === 8) {
      const c = c4(i.age),
        b = H2(i.age);
      b2(translate("DRIFT · 大陆漂移"), [
        [translate("年代"), l(i.age), "g"],
        [translate("地质年代"), b.n],
        [translate("海陆格局"), c.layout, "s"],
        [
          translate("南美—非洲间距"),
          c.atl < 400 ? translate("紧密相连") : translate("约 {0} km", [c.atl]),
          "c",
        ],
        [translate("印度北端纬度"), f4(c.ind)],
      ]);
    } else if (s === 5) {
      const c = i.sel != null ? u4[i.sel] : null;
      c
        ? b2(`PLATE · ${F2[i.sel].name}`, [
            [translate("主要包括"), c.inc],
            [
              translate("几乎全为海洋"),
              c.ocean ? translate("是") : translate("否"),
              c.ocean ? "c" : "",
            ],
            [translate("运动方向"), c.dir, "g"],
            [translate("运动速度"), c.v, "s"],
          ])
        : b2(translate("PLATES · 六大板块"), [
            [translate("板块数量"), translate("6 大板块"), "g"],
            [translate("生长边界"), translate("张裂，形成裂谷、海洋"), "c"],
            [translate("消亡边界"), translate("碰撞挤压，形成山脉、海沟"), "s"],
            [translate("提示"), translate("点击地球上的板块")],
          ]);
    } else if (s === 6)
      b2(translate("HAZARDS · 火山与地震"), [
        [
          translate("地震（示意）"),
          translate("{0} 个", [l2.quakes.length]),
          "s",
        ],
        [
          translate("火山（示意）"),
          translate("{0} 座", [l2.volcs.length]),
          "g",
        ],
        [translate("分布规律"), translate("多在板块交界地带")],
        [translate("板块内部"), translate("地壳比较稳定"), "c"],
      ]);
    else if (s === 7) {
      const c = i.mode7,
        b = i.prog,
        P =
          c === "rift"
            ? [translate("裂谷"), translate("狭长海洋"), translate("大洋")][
                n4(b).stage
              ]
            : c === "sub"
              ? b < 0.4
                ? translate("俯冲开始")
                : b < 0.7
                  ? translate("海沟加深、山地隆起")
                  : translate("火山喷发、地震频繁")
              : b < 0.28
                ? translate("大洋收缩")
                : translate("碰撞隆起");
      b2(translate("BOUNDARY · 板块运动"), [
        [
          translate("边界类型"),
          c === "rift"
            ? translate("生长边界（张裂）")
            : translate("消亡边界（碰撞挤压）"),
          c === "rift" ? "c" : "s",
        ],
        [translate("演化进度"), `${Math.round(b * 100)}%`, "g"],
        [translate("当前阶段"), P],
        [
          translate("实例"),
          c === "rift"
            ? translate("东非大裂谷、红海、大西洋")
            : c === "sub"
              ? translate("马里亚纳海沟、安第斯山脉")
              : translate("喜马拉雅山脉"),
        ],
      ]);
    }
  }
  const u4 = [
      {
        inc: translate("亚欧大陆大部分（不含印度、阿拉伯半岛）"),
        ocean: !1,
        dir: translate("大致向东"),
        v: translate("约 2 cm/年"),
      },
      {
        inc: translate("非洲大陆及周围海域"),
        ocean: !1,
        dir: translate("向东北"),
        v: translate("约 2 cm/年"),
      },
      {
        inc: translate("南、北美洲大陆及大西洋西部"),
        ocean: !1,
        dir: translate("向西"),
        v: translate("约 2–3 cm/年"),
      },
      {
        inc: translate("太平洋大部分"),
        ocean: !0,
        dir: translate("向西北"),
        v: translate("约 7–10 cm/年"),
      },
      {
        inc: translate("印度半岛、阿拉伯半岛、澳大利亚和印度洋大部"),
        ocean: !1,
        dir: translate("向北、东北"),
        v: translate("约 5–7 cm/年"),
      },
      {
        inc: translate("南极大陆及周围海洋"),
        ocean: !1,
        dir: translate("移动较慢"),
        v: translate("约 1 cm/年"),
      },
    ],
    k5 = t("#eph"),
    E5 = t("#camRd");
  function d4() {
    const s = _1[i.ch];
    if (!s)
      k5.innerHTML = translate(
        "<span><em>TODAY</em><b>今天</b></span><span><em>时代</em><b>第四纪</b></span>",
        [],
      );
    else {
      const c = s.get();
      k5.innerHTML = translate(
        "<span><em>TIME</em><b>{0}</b></span><span><em>时代</em><b>{1}</b></span>",
        [s.fmt(c), s.era(c)],
      );
    }
    if (i.scene !== "globe")
      E5.textContent = {
        map: "2D · EQUAL EARTH",
        section: "2D · CROSS SECTION",
        strait: "2D · MERCATOR",
        boundary: "2D · CROSS SECTION",
      }[i.scene];
    else {
      const c = u.position,
        b = ((Math.atan2(c.x, c.z) / o + 360) % 360)
          .toFixed(0)
          .padStart(3, "0"),
        P = (Math.asin(c.y / c.length()) / o).toFixed(0);
      E5.textContent = `AZ ${b}° · EL ${P}° · R ${c.length().toFixed(1)}`;
    }
  }
  const h4 = [
      [70, translate("特提斯海")],
      [50, translate("印度与亚洲碰撞")],
      [20, translate("高原快速隆升")],
      [0, translate("今天")],
    ],
    T5 = [
      [250, translate("泛大陆")],
      [180, translate("开始分裂")],
      [130, translate("南大西洋张开")],
      [66, translate("恐龙灭绝")],
      [50, translate("印度撞上亚洲")],
    ],
    _1 = {
      1: {
        past: 70,
        now: 0,
        get: () => i.him,
        set: (s) => (i.him = s),
        fmt: l,
        era: (s) => H2(s).n,
        sub: (s) =>
          s > 50 ? translate("特提斯海收缩") : translate("碰撞隆起"),
        dur: 12,
        ev: h4,
        kind: "him",
      },
      2: {
        past: 25,
        now: 0,
        get: () => i.ka,
        set: (s) => (i.ka = s),
        fmt: f,
        era: () => translate("第四纪"),
        sub: (s) => translate("海平面 {0} m", [B2(s).toFixed(0)]),
        dur: 14,
        kind: "ice",
      },
      3: {
        past: 250,
        now: 0,
        get: () => i.age,
        set: (s) => (i.age = s),
        fmt: l,
        era: (s) => H2(s).n,
        sub: (s) => H2(s).n + " · " + H2(s).en,
        dur: 18,
        ev: T5,
        kind: "geo",
      },
      7: {
        past: 0,
        now: 1,
        get: () => i.prog,
        set: (s) => (i.prog = s),
        fmt: (s) => `${Math.round(s * 100)}%`,
        era: () => "—",
        sub: () =>
          i.mode7 === "rift" ? translate("张裂") : translate("碰撞挤压"),
        dur: 12,
        kind: "stage",
      },
    };
  ((_1[4] = _1[3]), (_1[8] = _1[3]));
  const y4 = t("#timeline"),
    R1 = t("#tlC"),
    C5 = R1.getContext("2d"),
    B3 = t("#tlPlay");
  let L2 = 0,
    z3 = 0,
    f3 = null,
    O2 = !1;
  const k1 = {
      l: 14,
      r: 14,
    },
    E1 = (s, c) =>
      k1.l + ((c - s.past) / (s.now - s.past)) * (L2 - k1.l - k1.r),
    N5 = (s, c) => {
      const b = e((c - k1.l) / (L2 - k1.l - k1.r), 0, 1);
      return s.past + (s.now - s.past) * b;
    };
  function m4() {
    const s = R1.getBoundingClientRect(),
      c = Math.min(devicePixelRatio, 2);
    s.width &&
      ((L2 = s.width),
      (z3 = s.height),
      (R1.width = Math.round(L2 * c)),
      (R1.height = Math.round(z3 * c)),
      C5.setTransform(c, 0, 0, c, 0, 0));
  }
  new ResizeObserver(m4).observe(R1);
  function g4() {
    const s = _1[i.ch];
    if (!s || !L2) return;
    const c = C5,
      b = L2,
      P = z3,
      N = s.get(),
      X = E1(s, N);
    if (
      (c.clearRect(0, 0, b, P),
      (c.textBaseline = "middle"),
      s.kind === "geo" || s.kind === "him")
    ) {
      for (const G of f5) {
        const H = Math.min(G.a, Math.max(s.past, s.now)),
          j = Math.max(G.b, Math.min(s.past, s.now));
        if (H <= j) continue;
        const l1 = E1(s, H),
          w1 = E1(s, j);
        ((c.fillStyle = G.c + "55"),
          c.fillRect(l1, P * 0.34, w1 - l1, 9),
          (c.fillStyle = G.c),
          c.fillRect(l1, P * 0.34, w1 - l1, 2),
          w1 - l1 > 52 &&
            ((c.font = '600 10px "Noto Serif SC", serif'),
            (c.fillStyle = "rgba(236,231,221,.75)"),
            (c.textAlign = "center"),
            c.fillText(G.n, (l1 + w1) / 2, P * 0.34 + 18)));
      }
      ((c.font = "500 9.5px JetBrains Mono"),
        (c.fillStyle = "rgba(141,145,153,.75)"),
        (c.textAlign = "center"));
      const h1 = s.kind === "geo" ? 50 : 10;
      for (let G = s.past; G >= 0; G -= h1) {
        const H = E1(s, G);
        (c.fillRect(H, P - 16, 1, 4),
          c.fillText(G ? `${G}` : "0 Ma", H, P - 6));
      }
      for (const [G, H] of s.ev || []) {
        const j = E1(s, G);
        ((c.fillStyle = "rgba(243,217,162,.85)"),
          c.beginPath(),
          c.moveTo(j, 6),
          c.lineTo(j + 4, 10),
          c.lineTo(j, 14),
          c.lineTo(j - 4, 10),
          c.fill(),
          (c.font = '600 10.5px "Noto Serif SC", serif'),
          (c.textAlign = j < 40 ? "left" : j > b - 60 ? "right" : "center"),
          c.fillText(H, j + (j < 40 ? 6 : j > b - 60 ? -6 : 0), 10));
      }
    } else if (s.kind === "ice") {
      const h1 = P * 0.28,
        G = P * 0.78,
        H = (j) => h1 + (-j / 130) * (G - h1);
      ((c.fillStyle = "rgba(114,196,255,.08)"),
        c.beginPath(),
        c.moveTo(E1(s, 25), h1));
      for (let j = 25; j >= 0; j -= 0.1) c.lineTo(E1(s, j), H(B2(j)));
      (c.lineTo(E1(s, 0), h1),
        c.fill(),
        (c.strokeStyle = "rgba(114,196,255,.8)"),
        (c.lineWidth = 1.6),
        c.beginPath());
      for (let j = 25; j >= 0; j -= 0.1)
        j === 25 ? c.moveTo(E1(s, j), H(B2(j))) : c.lineTo(E1(s, j), H(B2(j)));
      (c.stroke(),
        (c.fillStyle = "rgba(216,178,106,.3)"),
        c.fillRect(k1.l, h1, b - k1.l - k1.r, 1),
        (c.font = "500 9.5px JetBrains Mono"),
        (c.fillStyle = "rgba(141,145,153,.75)"),
        (c.textAlign = "center"));
      for (let j = 25; j >= 0; j -= 5) {
        const l1 = E1(s, j);
        c.fillText(j ? `${j} ka` : translate("今天"), l1, P - 6);
      }
      ((c.textAlign = "left"),
        c.fillText("0 m", k1.l + 2, h1 - 7),
        c.fillText("−130 m", k1.l + 2, G + 8),
        (c.font = '600 10.5px "Noto Serif SC", serif'),
        (c.fillStyle = "rgba(243,217,162,.85)"),
        (c.textAlign = "center"),
        c.fillText(translate("末次冰盛期"), E1(s, 21), 10),
        c.fillText(translate("冰川消融 · 海面上升"), E1(s, 11), 10));
    } else {
      const h1 =
          i.mode7 === "rift"
            ? [
                [0.17, translate("裂谷")],
                [0.5, translate("狭长海洋")],
                [0.83, translate("大洋")],
              ]
            : i.mode7 === "sub"
              ? [
                  [0.2, translate("俯冲开始")],
                  [0.55, translate("海沟 · 山地")],
                  [0.85, translate("火山 · 地震")],
                ]
              : [
                  [0.15, translate("大洋收缩")],
                  [0.6, translate("碰撞隆起")],
                ],
        G =
          i.mode7 === "rift"
            ? [0.35, 0.65]
            : i.mode7 === "sub"
              ? [0.4, 0.7]
              : [0.28];
      ((c.fillStyle = "rgba(255,255,255,.06)"),
        c.fillRect(k1.l, P * 0.4, b - k1.l - k1.r, 8),
        (c.fillStyle =
          i.mode7 === "rift" ? "rgba(95,211,198,.55)" : "rgba(255,122,89,.55)"),
        c.fillRect(k1.l, P * 0.4, X - k1.l, 8));
      for (const H of G)
        ((c.fillStyle = "rgba(255,255,255,.35)"),
          c.fillRect(E1(s, H), P * 0.4 - 4, 1, 16));
      ((c.font = '600 11px "Noto Serif SC", serif'), (c.textAlign = "center"));
      for (const [H, j] of h1)
        ((c.fillStyle = "rgba(236,231,221,.8)"),
          c.fillText(j, E1(s, H), P * 0.78));
    }
    if (f3 != null && !O2) {
      const h1 = E1(s, f3);
      ((c.fillStyle = "rgba(255,255,255,.25)"),
        c.fillRect(Math.round(h1), P * 0.3, 1, P * 0.5));
    }
    const Z = c.createLinearGradient(0, 0, 0, P);
    (Z.addColorStop(0, "rgba(243,217,162,0)"),
      Z.addColorStop(0.5, "rgba(243,217,162,.95)"),
      Z.addColorStop(1, "rgba(243,217,162,0)"),
      (c.fillStyle = Z),
      c.fillRect(X - 0.5, 2, 1, P - 4));
    const u1 = P * 0.47,
      x1 = c.createRadialGradient(X, u1, 0, X, u1, 14);
    (x1.addColorStop(0, "rgba(255,220,150,.55)"),
      x1.addColorStop(1, "rgba(255,200,97,0)"),
      (c.fillStyle = x1),
      c.beginPath(),
      c.arc(X, u1, 14, 0, 7),
      c.fill(),
      (c.fillStyle = "#07090c"),
      (c.strokeStyle = "#fff3d6"),
      (c.lineWidth = 2),
      c.beginPath(),
      c.arc(X, u1, 4.5, 0, 7),
      c.fill(),
      c.stroke(),
      (t("#tlDate").textContent = s.fmt(N)),
      (t("#tlSub").textContent = s.sub(N)));
  }
  const L5 = (s) => {
    const c = _1[i.ch];
    if (!c) return;
    const b = R1.getBoundingClientRect();
    (c.set(N5(c, s.clientX - b.left)), (i.play = !1));
  };
  (R1.addEventListener("pointerdown", (s) => {
    ((O2 = !0), R1.setPointerCapture(s.pointerId), L5(s), S2());
  }),
    R1.addEventListener("pointermove", (s) => {
      const c = _1[i.ch];
      if (!c) return;
      const b = R1.getBoundingClientRect();
      ((f3 = N5(c, s.clientX - b.left)), O2 && L5(s));
    }),
    R1.addEventListener("pointerup", () => (O2 = !1)),
    R1.addEventListener("pointercancel", () => (O2 = !1)),
    R1.addEventListener("pointerleave", () => (f3 = null)));
  const F3 = () => {
    const s = _1[i.ch];
    s &&
      (!i.play && Math.abs(s.get() - s.now) < 0.001 && s.set(s.past),
      (i.play = !i.play),
      S2());
  };
  B3.onclick = F3;
  let R3 = null;
  function v4() {
    R3 !== i.play &&
      ((R3 = i.play),
      B3.classList.toggle("on", i.play),
      (B3.innerHTML = i.play ? Y3.pause : Y3.play));
  }
  const Y3 = {
      play: '<svg viewBox="0 0 14 14"><path d="M3.5 2.5l8 4.5-8 4.5z"/></svg>',
      pause: '<svg viewBox="0 0 14 14"><path d="M4 2.5v9M10 2.5v9"/></svg>',
      arrow: '<svg viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4"/></svg>',
      rot: '<svg viewBox="0 0 14 14"><path d="M12 7a5 5 0 1 1-1.5-3.6"/><path d="M11 1v3H8"/></svg>',
    },
    A1 = (s, c, b = "", P = !1, N = "") =>
      `<button class="btn ${N}${P ? " on" : ""}" data-act="${s}">${Y3[b] || ""}${c}</button>`,
    V2 = (s) =>
      A1(
        "play",
        i.play ? translate("暂停") : s,
        i.play ? "pause" : "play",
        i.play,
      ),
    W1 = [
      {
        t: translate("沧海桑田"),
        en: "Seas become fields",
        scene: "globe",
        cam: [6, 9, 17],
        body: () =>
          translate(
            `
      <p class="lead">地球表面的海洋和陆地并不是一成不变的：有的地方<b>海洋变成了陆地</b>，有的地方<b>陆地变成了海洋</b>。古人称之为“<b>沧海桑田</b>”。</p>
      <div class="sec">三个证据 · 三种原因</div>
      <div class="causes">
        <button class="cause" data-act="go:1"><i>i</i><div><b>喜马拉雅山的海洋化石</b><span>高山岩层中有海洋生物化石 —— <em>地壳变动</em></span></div><em>→ 01</em></button>
        <button class="cause" data-act="go:2"><i>ii</i><div><b>台湾海峡的古河道</b><span>海底发现古河道与人类遗迹 —— <em>海平面升降</em></span></div><em>→ 02</em></button>
        <button class="cause" data-act="fly:2"><i>iii</i><div><b>荷兰的围海造陆</b><span>约 1/5 的国土由围海造陆而来 —— <em>人类活动</em></span></div><em>VIEW</em></button>
      </div>
      <div class="note">点击地球上的红色标记，或上面的卡片，进入对应的案例。拖动旋转地球、滚轮缩放。</div>
      <div class="rule" data-k="KEY"><p>海陆变迁的原因<small>地壳变动、海平面升降是自然原因；填海造陆等人类活动也会改变海陆分布，但规模较小。</small></p></div>`,
            [],
          ),
      },
      {
        t: translate("高山上的海洋化石"),
        en: "Marine fossils on the roof of the world",
        scene: "section",
        enter() {
          ((i.him = 70), (i.play = !0));
        },
        body: () =>
          translate(
            `
      <p class="lead">在海拔数千米的<b>喜马拉雅山</b>岩层中，发现了<b>菊石、三叶虫、鱼龙</b>等海洋生物的化石。这说明这里在很久以前曾是一片<b>海洋</b>。</p>
      <div class="acts" style="margin-bottom:6px">{0}{1}{2}{3}</div>
      <div class="sec">过程</div>
      <ul class="pts">
        <li>约 7000 万年前，印度与亚洲之间隔着<b>特提斯海</b>，海底沉积了含有海洋生物遗体的泥沙。</li>
        <li>印度板块向北漂移，海洋逐渐收缩；约 5000 万年前两块大陆<b>碰撞挤压</b>。</li>
        <li>海底的沉积岩层被挤压、褶皱、抬升，形成<b>喜马拉雅山脉</b>，化石也随之“登上”高山。</li>
      </ul>
      <div class="rule" data-k="CAUSE"><p>地壳变动<small>板块运动引起地壳的隆起和下沉，是海陆变迁最主要的原因。喜马拉雅山至今仍在缓慢升高。</small></p></div>`,
            [
              V2(translate("播放 7000 万年")),
              A1("him:70", translate("特提斯海")),
              A1("him:50", translate("碰撞开始")),
              A1("him:0", translate("今天")),
            ],
          ),
      },
      {
        t: translate("海峡下的古河道"),
        en: "A land bridge beneath the strait",
        scene: "strait",
        enter() {
          i.ka = 20;
        },
        body: () =>
          translate(
            `
      <p class="lead">在<b>台湾海峡</b>海底，人们发现了<b>古河道</b>，渔民还常捞起古象化石、古人类的遗骸和遗物。说明这里曾经是<b>陆地</b>。</p>
      <div class="acts" style="margin-bottom:6px">{0}{1}{2}{3}</div>
      <div class="sec">为什么会露出海面</div>
      <ul class="pts">
        <li>末次冰期时，大量海水以冰川形式储存在陆地上，全球<b>海平面比现在低 120 多米</b>。</li>
        <li>台湾海峡平均水深只有约 60 米，海平面下降后海底大面积露出，大陆与台湾岛<b>连成一片</b>。</li>
        <li>冰期结束后冰川融化，海平面回升，陆地又被海水淹没，成为今天的海峡。</li>
      </ul>
      <div class="rule" data-k="CAUSE"><p>海平面升降<small>气候变化引起的海平面升降，也会使海陆分布发生变化。沿海地区的古人类遗址、海底森林都是证据。</small></p></div>`,
            [
              V2(translate("播放冰消过程")),
              A1("ka:20", translate("2 万年前")),
              A1("ka:12", translate("1.2 万年前")),
              A1("ka:0", translate("今天")),
            ],
          ),
      },
      {
        t: translate("大陆漂移假说"),
        en: "Wegener's continental drift",
        scene: "map",
        enter() {
          i.age = 0;
        },
        body: () =>
          translate(
            `
      <p class="lead">1912 年，德国科学家<b>魏格纳</b>注意到：大西洋两岸，特别是<b>南美洲东岸与非洲西岸</b>的轮廓非常吻合。他提出：大陆原本是一个整体，后来<b>分裂漂移</b>，才形成今天的格局。</p>
      <div class="acts" style="margin-bottom:6px">{0}{1}{2}</div>
      <div class="sec">他找到的证据</div>
      <div class="fos">{3}
        <div class="fo"><i style="background:#e9f6ff"></i><b>冰川遗迹<small>Glacial striations</small></b><span>南美、非洲、印度、澳大利亚都有约 3 亿年前的冰川擦痕，拼合后指向同一冰盖中心</span></div></div>
      <div class="note">把年代拖回 2.5 亿年前：分散在各大洲的<b>同种化石区</b>连成了连续的条带，冰川擦痕也都从同一中心向外辐射。</div>`,
            [
              V2(translate("拼合大陆")),
              A1("age:250", translate("2.5 亿年前")),
              A1("age:0", translate("今天")),
              v0
                .map(
                  (s) =>
                    `<div class="fo"><i style="background:${s.color}"></i><b>${s.name}<small>${s.en}</small></b><span>${s.note}</span></div>`,
                )
                .join(""),
            ],
          ),
      },
      {
        t: translate("泛大陆的分裂"),
        en: "Breakup of Pangaea",
        scene: "globe",
        cam: [-4, -3, 18.6],
        enter() {
          ((i.age = 250), (i.play = !0));
        },
        body: () =>
          translate(
            `
      <p class="lead">约 2.5 亿年前，地球上的大陆连成一块<b>泛大陆（联合古陆）</b>，周围是广阔的<b>泛大洋</b>。此后它先分裂为北方的<b>劳亚古陆</b>和南方的<b>冈瓦纳古陆</b>，再逐渐漂移成今天的七大洲。</p>
      <div class="acts" style="margin-bottom:6px">{0}{1}{2}</div>
      <table class="t" style="margin-top:12px">
        <tr><td>2.5 亿年前</td><td>泛大陆、泛大洋</td><td>三叠纪</td></tr>
        <tr><td>1.8 亿年前</td><td>北大西洋开始张开</td><td>侏罗纪</td></tr>
        <tr><td>1.3 亿年前</td><td>南美与非洲分离</td><td>白垩纪</td></tr>
        <tr><td>5000 万年前</td><td>印度与亚洲碰撞</td><td>古近纪</td></tr>
      </table>
      <div class="note">打开“板块着色”，看每一块大陆从哪里来；它们的形状是今天的样子，只是位置被旋转回了过去（示意重建）。</div>`,
            [
              V2(translate("播放 2.5 亿年")),
              T5.map(([s, c]) => A1("age:" + s, c)).join(""),
              A1("age:0", translate("今天")),
            ],
          ),
      },
      {
        t: translate("六大板块"),
        en: "Plate tectonics",
        scene: "globe",
        cam: [-12, 8, 14],
        enter() {
          ((i.age = 0), (i.sel = null));
        },
        body: () =>
          translate(
            `
      <p class="lead">20 世纪 60 年代，在大陆漂移、海底扩张等学说的基础上，科学家提出了<b>板块构造学说</b>：由岩石组成的地球表层并不是整体一块，而是由<b>六大板块</b>拼合而成，板块处于不断的<b>运动</b>之中。</p>
      <div class="plist">{0}</div>
      <div class="legend" style="margin-top:12px"><span><i style="background:#5fd3c6"></i>生长边界（张裂）</span><span><i style="background:#ff7a59"></i>消亡边界（碰撞挤压）</span><span><i style="background:#fff1c8"></i>运动方向</span></div>
      <div class="sec">规律</div>
      <ul class="pts">
        <li><b>太平洋板块</b>几乎全部是海洋；其余板块既包括大陆，也包括海洋。</li>
        <li>一般来说，<b>板块内部比较稳定</b>，板块与板块<b>交界地带</b>地壳比较活跃。</li>
      </ul>`,
            [
              F2.map(
                (s, c) =>
                  `<button class="pl${i.sel === c ? " on" : ""}" data-act="sel:${c}" style="color:${s.color}"><i style="background:${s.color}"></i><span style="color:inherit">${s.name}</span></button>`,
              ).join(""),
            ],
          ),
      },
      {
        t: translate("火山与地震"),
        en: "Volcanoes & earthquakes",
        scene: "globe",
        cam: [-16, 6, 13],
        enter() {
          ((i.age = 0), (i.belts = !0));
        },
        body: () =>
          translate(
            `
      <p class="lead">世界上的火山、地震主要分布在<b>板块交界地带</b>，集中在两条带上：<b>环太平洋火山地震带</b>和<b>地中海—喜马拉雅火山地震带</b>。</p>
      <div class="legend"><span><i class="dot" style="background:#ff7a59"></i>地震</span><span><i class="tri"></i>火山</span><span><i style="background:rgba(255,138,74,.6);height:8px"></i>环太平洋带</span><span><i style="background:rgba(255,95,138,.6);height:8px"></i>地中海—喜马拉雅带</span></div>
      <div class="acts" style="margin:10px 0 4px">{0}{1}{2}</div>
      <div class="sec">联系实际</div>
      <ul class="pts">
        <li><b>日本</b>位于亚欧板块与太平洋板块交界处，多火山、地震。</li>
        <li>我国<b>台湾</b>、<b>西南地区</b>（如四川）地震较多，与板块碰撞挤压有关。</li>
        <li>冰岛位于大西洋中脊（生长边界）上，火山活动频繁。</li>
      </ul>
      <div class="note">点位为依据板块边界生成的<b>分布示意</b>，并非真实地震目录。</div>`,
            [
              A1("fly:pac", translate("看环太平洋带")),
              A1("fly:med", translate("看地中海—喜马拉雅带")),
              A1("fly:jp", translate("日本")),
            ],
          ),
      },
      {
        t: translate("张裂与碰撞"),
        en: "Plates pull apart & collide",
        scene: "boundary",
        enter() {
          ((i.prog = 0), (i.play = !0));
        },
        body: () =>
          translate(
            `
      <p class="lead">板块的运动塑造了地表的高低起伏：板块<b>张裂</b>的地区常形成<b>裂谷或海洋</b>；板块<b>碰撞挤压</b>的地区常形成<b>山脉</b>，大洋板块与大陆板块碰撞时还会形成<b>海沟</b>。</p>
      <div class="seg">{0}</div>
      <div class="acts" style="margin-bottom:6px">{1}{2}</div>
      <table class="t" style="margin-top:10px">
        <tr><td>张裂</td><td>东非大裂谷、红海、大西洋</td><td>生长边界</td></tr>
        <tr><td>碰撞</td><td>喜马拉雅山、安第斯山、海沟</td><td>消亡边界</td></tr>
      </table>
      <div class="sec">未来的海陆</div>
      <ul class="pts">
        <li><b>红海</b>位于非洲板块与印度洋板块的张裂地带，正在不断<b>扩大</b>，将来可能成为新的大洋。</li>
        <li><b>地中海</b>位于非洲板块与亚欧板块的碰撞地带，正在不断<b>缩小</b>。</li>
      </ul>`,
            [
              [
                ["rift", translate("张裂")],
                ["sub", translate("碰撞 · 洋—陆")],
                ["cc", translate("碰撞 · 陆—陆")],
              ]
                .map(
                  ([s, c]) =>
                    `<button data-act="m7:${s}" class="${i.mode7 === s ? "on" : ""}">${c}</button>`,
                )
                .join(""),
              V2(translate("播放演化")),
              A1("prog:0", translate("重来")),
            ],
          ),
      },
      {
        t: translate("随堂检测"),
        en: "Quiz",
        scene: "globe",
        cam: [-4, -3, 18.6],
        enter() {
          (I5(), (i.age = 250), (i.play = !0));
        },
        body: () => S4(),
      },
    ],
    b4 = [
      [
        translate("喜马拉雅山的岩层中发现了海洋生物化石，说明："),
        [
          translate("这里很久以前曾是海洋"),
          translate("海洋生物能在高山生存"),
          translate("化石是被鸟类带上山的"),
          translate("这里将来会变成海洋"),
        ],
        translate("地壳变动使海底隆起成为高山，海洋生物化石随岩层一起被抬升。"),
      ],
      [
        translate("台湾海峡海底发现古河道，主要与下列哪种原因有关："),
        [
          translate("海平面升降"),
          translate("人类活动"),
          translate("火山喷发"),
          translate("板块张裂"),
        ],
        translate(
          "冰期时海平面下降，海峡露出成为陆地；冰川融化后海面回升，陆地被淹没。",
        ),
      ],
      [
        translate("荷兰围海造陆，体现的海陆变迁原因是："),
        [
          translate("人类活动"),
          translate("地壳变动"),
          translate("海平面上升"),
          translate("板块碰撞"),
        ],
        translate("填海造陆是人类活动改变海陆分布的例子。"),
      ],
      [
        translate("大陆漂移假说的提出者是："),
        [
          translate("魏格纳"),
          translate("哥白尼"),
          translate("牛顿"),
          translate("达尔文"),
        ],
        translate("1912 年德国科学家魏格纳提出大陆漂移假说。"),
      ],
      [
        translate("魏格纳提出大陆漂移假说，最初是受到什么启发："),
        [
          translate("大西洋两岸的轮廓可以拼合"),
          translate("喜马拉雅山有海洋化石"),
          translate("太平洋周围多火山"),
          translate("南极洲有煤层"),
        ],
        translate("他在地图上注意到南美洲东岸与非洲西岸的轮廓非常吻合。"),
      ],
      [
        translate("下列能作为大陆漂移证据的是："),
        [
          translate("南美洲与非洲都发现了中龙化石"),
          translate("黄河携带大量泥沙"),
          translate("北极地区出现极昼"),
          translate("赤道地区终年高温"),
        ],
        translate(
          "中龙生活在淡水中，无法横渡大洋，它的化石分布说明两块大陆曾经相连。",
        ),
      ],
      [
        translate("六大板块中，几乎全部是海洋的是："),
        [
          translate("太平洋板块"),
          translate("印度洋板块"),
          translate("非洲板块"),
          translate("南极洲板块"),
        ],
        translate("太平洋板块几乎全部是海洋，其余板块既有大陆也有海洋。"),
      ],
      [
        translate("喜马拉雅山脉是由哪两个板块碰撞挤压形成的："),
        [
          translate("印度洋板块与亚欧板块"),
          translate("太平洋板块与亚欧板块"),
          translate("非洲板块与亚欧板块"),
          translate("美洲板块与太平洋板块"),
        ],
        translate(
          "印度洋板块向北与亚欧板块碰撞挤压，形成喜马拉雅山脉和青藏高原。",
        ),
      ],
      [
        translate("红海面积不断扩大，原因是："),
        [
          translate("位于板块张裂地带"),
          translate("位于板块碰撞地带"),
          translate("海平面不断上升"),
          translate("位于板块内部"),
        ],
        translate("红海位于非洲板块与印度洋板块的张裂地带（生长边界）。"),
      ],
      [
        translate("日本多火山、地震，主要因为它位于："),
        [
          translate("亚欧板块与太平洋板块的交界处"),
          translate("亚欧板块内部"),
          translate("太平洋板块内部"),
          translate("印度洋板块与亚欧板块交界处"),
        ],
        translate("板块交界地带地壳活跃，日本处在环太平洋火山地震带上。"),
      ],
    ],
    $5 = (s) => {
      for (let c = s.length - 1; c > 0; c--) {
        const b = (Math.random() * (c + 1)) | 0;
        [s[c], s[b]] = [s[b], s[c]];
      }
      return s;
    };
  function I5() {
    i.quiz = {
      list: $5(
        b4.map(([s, c, b]) => ({
          q: s,
          ans: c[0],
          opts: $5(c.slice()),
          why: b,
        })),
      ),
      i: 0,
      score: 0,
      picked: null,
    };
  }
  function S4() {
    const s = i.quiz;
    if (!s) return "";
    if (s.i >= s.list.length) {
      const P = s.score / s.list.length;
      return `<div class="score"><b>${s.score}/${s.list.length}</b><span>${P === 1 ? translate("全对！海陆变迁掌握得很扎实。") : P >= 0.6 ? translate("不错，回看错题对应的章节巩固一下。") : translate("建议从“沧海桑田”开始再复习一遍。")}</span></div>
      <div class="acts">${A1("quizRestart", translate("再测一次"), "rot", !1, "pri")}</div>`;
    }
    const c = s.list[s.i],
      b = s.picked != null;
    return translate(
      `<div class="qcard"><div class="qn">QUESTION {0} / {1} · 得分 {2}</div>
    <h3>{3}</h3>
    <div class="opts">{4}</div>
    {5}
    </div>
    <div class="acts" style="margin-top:14px">{6}</div>`,
      [
        String(s.i + 1).padStart(2, "0"),
        String(s.list.length).padStart(2, "0"),
        s.score,
        c.q,
        c.opts
          .map(
            (P, N) =>
              `<button class="opt ${b && P === c.ans ? "ok" : ""} ${b && N === s.picked && P !== c.ans ? "bad" : ""}" data-act="ans:${N}" ${b ? "disabled" : ""}>${P}</button>`,
          )
          .join(""),
        b
          ? `<div class="fb"><b class="${c.opts[s.picked] === c.ans ? "ok" : "bad"}">${c.opts[s.picked] === c.ans ? translate("回答正确") : translate("答案：") + c.ans}</b> —— ${c.why}</div>`
          : "",
        b
          ? A1(
              "quizNext",
              s.i + 1 < s.list.length
                ? translate("下一题")
                : translate("查看成绩"),
              "arrow",
              !1,
              "pri",
            )
          : "",
      ],
    );
  }
  const P4 = {
      globe: [
        ["labels", translate("标注")],
        ["grid", translate("经纬网")],
        ["rotate", translate("镜头环绕")],
      ],
      drift: [
        ["labels", translate("标注")],
        ["tint", translate("板块着色")],
        ["grid", translate("经纬网")],
        ["rotate", translate("镜头环绕")],
      ],
      map: [
        ["labels", translate("标注")],
        ["fossils", translate("化石分布")],
        ["glacial", translate("冰川擦痕")],
        ["tint", translate("板块着色")],
        ["ghost", translate("今天的位置")],
      ],
      haz: [
        ["labels", translate("标注")],
        ["quakes", translate("地震")],
        ["volcs", translate("火山")],
        ["belts", translate("两大带")],
        ["rotate", translate("镜头环绕")],
      ],
      plates: [
        ["labels", translate("标注")],
        ["grid", translate("经纬网")],
        ["rotate", translate("镜头环绕")],
      ],
      none: [],
    },
    M4 = () =>
      ({
        0: "globe",
        3: "map",
        4: "drift",
        5: "plates",
        6: "haz",
        8: "drift",
      })[i.ch] || "none";
  function x4() {
    const s = P4[M4()];
    ((t("#view").style.display = s.length ? "" : "none"),
      (t("#tgs").innerHTML = s
        .map(
          ([c, b]) =>
            `<button class="tg${i[c] ? " on" : ""}" data-k="${c}">${b}</button>`,
        )
        .join("")));
  }
  function S2() {
    const s = W1[i.ch];
    t("#lesson").innerHTML =
      `<div class="lh"><span class="no">${String(i.ch).padStart(2, "0")}</span><div><h2>${s.t}</h2><em>${s.en}</em></div></div>` +
      s.body();
  }
  let u2 = null;
  function d2(s, c = 1500) {
    u2 = {
      p0: u.position.clone(),
      p1: new B.Vector3(...s),
      s: performance.now(),
      d: c,
    };
  }
  y.addEventListener("start", () => (u2 = null));
  const j5 = [1, 2, 3, 4, 7, 8],
    B5 = new Set();
  let p3 = !1;
  function h2(s) {
    s = e(s, 0, W1.length - 1);
    const c = W1[s],
      b = i.ch == null ? null : i.scene;
    ((i.ch = s),
      (i.scene = c.scene),
      (i.play = !1),
      (i.quiz = null),
      (i.belts = !1),
      c.enter && c.enter());
    const P = i.scene === "globe";
    ((n.dataset.scene = i.scene),
      (d.style.display = P ? "block" : "none"),
      (h.style.display = P ? "none" : "block"),
      P
        ? b !== "globe"
          ? (u.position.set(...c.cam).multiplyScalar(p3 ? 1.4 : 2.1),
            p3 && d2(c.cam, 1800),
            b &&
              d.animate(
                [
                  {
                    opacity: 0,
                  },
                  {
                    opacity: 1,
                  },
                ],
                {
                  duration: 700,
                  easing: "ease-out",
                },
              ))
          : d2(c.cam)
        : b !== i.scene &&
          h.animate(
            [
              {
                opacity: 0,
              },
              {
                opacity: 1,
              },
            ],
            {
              duration: 600,
              easing: "ease-out",
            },
          ),
      s !== 5 && (i.sel = null),
      A(),
      y4.classList.toggle("on", j5.includes(s)),
      n.classList.toggle("has-tl", j5.includes(s)),
      A5.classList.toggle("on", s !== 0),
      B5.add(s),
      (R3 = null),
      x4(),
      S2(),
      c2(),
      U5(),
      document.querySelectorAll(".ni").forEach((X) => {
        (X.classList.toggle("on", +X.dataset.i === s),
          X.classList.toggle("seen", B5.has(+X.dataset.i)));
      }),
      document
        .querySelectorAll("#prog i")
        .forEach(
          (X, Z) => (X.className = Z < s ? "on" : Z === s ? "cur" : ""),
        ));
    const N = t("#chapter");
    ((N.querySelector(".n").innerHTML =
      `CHAPTER ${String(s).padStart(2, "0")} <span>/ ${String(W1.length - 1).padStart(2, "0")}</span>`),
      (N.querySelector("h1").textContent = c.t),
      (N.querySelector("p").textContent = c.en),
      N.classList.remove("anim"),
      N.offsetWidth,
      N.classList.add("anim"),
      (t("#lesson").scrollTop = 0),
      history.replaceState(null, "", "#" + s));
  }
  const z5 = {
    pac: [-15, 9, 12],
    med: [14, 11, 12],
    jp: [12, 10, -11],
  };
  t("#lesson").addEventListener("click", (s) => {
    const c = s.target.closest("[data-act]");
    if (!c) return;
    const [b, P] = c.dataset.act.split(":");
    switch (b) {
      case "play":
        return F3();
      case "go":
        return h2(+P);
      case "fly":
        z5[P] ? d2(z5[P]) : d2(a(...O1[+P].at, 12).toArray());
        return;
      case "age":
        ((i.age = +P), (i.play = !1));
        break;
      case "him":
        ((i.him = +P), (i.play = !1));
        break;
      case "ka":
        ((i.ka = +P), (i.play = !1));
        break;
      case "prog":
        ((i.prog = +P), (i.play = !0));
        break;
      case "m7":
        ((i.mode7 = P), (i.prog = 0), (i.play = !0));
        break;
      case "sel":
        w4(+P === i.sel ? null : +P);
        break;
      case "ans": {
        const N = i.quiz;
        if (N.picked != null) return;
        ((N.picked = +P),
          N.list[N.i].opts[N.picked] === N.list[N.i].ans && N.score++);
        break;
      }
      case "quizNext":
        (i.quiz.i++, (i.quiz.picked = null));
        break;
      case "quizRestart":
        I5();
        break;
    }
    S2();
  });
  function w4(s) {
    if (((i.sel = s), A(), s != null)) {
      const [c, b] = F2[s].label;
      d2(a(c, b, 19).toArray());
    }
    S2();
  }
  const F5 = new B.Raycaster(),
    R5 = new B.Vector2();
  let u3 = null;
  (d.addEventListener("pointerdown", (s) => (u3 = [s.clientX, s.clientY])),
    d.addEventListener("pointerup", (s) => {
      if (
        i.ch !== 5 ||
        !u3 ||
        Math.hypot(s.clientX - u3[0], s.clientY - u3[1]) > 5
      )
        return;
      const c = d.getBoundingClientRect();
      (R5.set(
        ((s.clientX - c.left) / c.width) * 2 - 1,
        -((s.clientY - c.top) / c.height) * 2 + 1,
      ),
        F5.setFromCamera(R5, u));
      const b = F5.intersectObject(U)[0];
      if (!b) return;
      const P = Math.floor(b.uv.x * q.W) % q.W,
        N = e(Math.floor((1 - b.uv.y) * q.H), 0, q.H - 1);
      ((i.sel = q.lab[N * q.W + P]), A(), S2());
    }),
    t("#tgs").addEventListener("click", (s) => {
      const c = s.target.closest(".tg");
      c &&
        ((i[c.dataset.k] = !i[c.dataset.k]),
        c.classList.toggle("on", i[c.dataset.k]),
        c2());
    }),
    (t("#nav").innerHTML =
      translate('<div class="navh">EVIDENCE · 沧海桑田</div>') +
      W1.map(
        (s, c) =>
          (c === 3
            ? translate('<div class="navh">DRIFT · 大陆漂移</div>')
            : c === 5
              ? translate('<div class="navh">PLATES · 板块构造</div>')
              : c === 8
                ? translate('<div class="navh">REVIEW · 复习</div>')
                : "") +
          `<button class="ni" data-i="${c}"><em>${String(c).padStart(2, "0")}</em><b>${s.t}</b><small>${s.en}</small></button>`,
      ).join("") +
      translate(
        '<div class="navf"><kbd>←</kbd> <kbd>→</kbd> 切换章节　<kbd>空格</kbd> 播放<br><kbd>R</kbd> 重置视角　<kbd>F</kbd> 全屏</div>',
      )),
    t("#nav").addEventListener("click", (s) => {
      const c = s.target.closest(".ni");
      c && h2(+c.dataset.i);
    }),
    (t("#prog").innerHTML = W1.map(() => "<i></i>").join("")),
    (t("#bPrev").onclick = () => h2(i.ch - 1)),
    (t("#bNext").onclick = () => h2(i.ch + 1)));
  const Y5 = () => {
    i.scene === "globe" && d2(W1[i.ch].cam);
  };
  t("#bReset").onclick = Y5;
  const G5 = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen().catch(() => {});
  ((t("#bFull").onclick = G5),
    addEventListener("keydown", (s) => {
      s.target.tagName !== "INPUT" &&
        (s.key === "ArrowRight"
          ? h2(i.ch + 1)
          : s.key === "ArrowLeft"
            ? h2(i.ch - 1)
            : s.key === "r" || s.key === "R"
              ? Y5()
              : s.key === "f" || s.key === "F"
                ? G5()
                : s.key === " " && _1[i.ch] && (s.preventDefault(), F3()));
    }));
  function U5() {
    const s = n.getBoundingClientRect();
    s.width &&
      (p.setSize(s.width, s.height, !1),
      (u.aspect = s.width / s.height),
      u.updateProjectionMatrix(),
      a4());
  }
  new ResizeObserver(U5).observe(n);
  const D5 = () => {
    p3 ||
      ((p3 = !0),
      t("#veil").classList.add("off"),
      i.scene === "globe" &&
        (u.position.set(...W1[i.ch].cam).multiplyScalar(2.1),
        d2(W1[i.ch].cam, 2600)));
  };
  ((J.onLoad = D5),
    (J.onProgress = (s, c, b) =>
      (t("#veilBar").style.transform = `scaleX(${c / b})`)),
    setTimeout(D5, 9e3));
  let q5 = performance.now(),
    G3 = 0;
  function _5(s) {
    requestAnimationFrame(_5);
    const c = e((s - q5) / 1e3, 0, 0.05),
      b = s / 1e3;
    q5 = s;
    const P = _1[i.ch];
    if (i.play && P) {
      const N = P.now - P.past,
        X = P.get() + (N * c) / P.dur;
      (N > 0 && X >= P.now) || (N < 0 && X <= P.now)
        ? (P.set(P.now), (i.play = !1), S2())
        : P.set(X);
    }
    if (((k.uT.value = b), (a1.uT.value = b), u2)) {
      const N = e((s - u2.s) / u2.d, 0, 1),
        X = 1 - Math.pow(1 - N, 4);
      (u.position.lerpVectors(u2.p0, u2.p1, X), N >= 1 && (u2 = null));
    }
    if (i.scene === "globe") {
      const N = i.ch,
        X = N === 4 || N === 8,
        Z = X ? i.age : 0;
      ((z === null || Math.abs(z - Z) > (i.play ? 0.2 : 0.02)) && D(Z),
        (L.uPast.value = e(Z / 4, 0, 1)),
        (L.uTint.value += ((X && i.tint ? 1 : 0) - L.uTint.value) * 0.12),
        (L.uPlates.value +=
          ((N === 5 || N === 6 ? (N === 5 ? 1 : 0.55) : 0) - L.uPlates.value) *
          0.1),
        (L.uGrid.value = i.grid ? 1 : 0),
        (m1.visible = N === 5 || N === 6),
        (r2.visible = N === 5),
        (D1.visible = N === 6 && i.belts),
        (T2.visible = N === 6 && i.quakes),
        (K.visible = N === 6 && i.volcs));
      for (const u1 of D1.children)
        u1.material.opacity =
          0.14 +
          0.08 * Math.sin(b * 2 + (u1.userData.belt === "pac" ? 0 : 1.5));
      ((y.autoRotate = i.rotate), y.update(), p.render(S, u), i4());
    } else l4(b);
    (g4(), v4(), (G3 += c), G3 > 0.1 && ((G3 = 0), p4(), d4()));
  }
  {
    const s = parseInt(location.hash.slice(1), 10);
    h2(isNaN(s) ? 0 : s);
  }
  requestAnimationFrame(_5);
}
function driftLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("海陆的变迁")), i6());
    }, []),
    jsxRuntime.jsxs(jsxRuntime.Fragment, {
      children: [
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
                      children: [
                        jsxRuntime.jsx("circle", {
                          cx: "16",
                          cy: "16",
                          r: "13",
                          stroke: "#d8b26a",
                          strokeOpacity: ".4",
                          strokeWidth: "1",
                        }),
                        jsxRuntime.jsx("path", {
                          className: "brand-l",
                          d: "M6 11c3-3 7-4 9-2l-1 5c-1 3-1 7-4 9-3-2-5-8-4-12z",
                          fill: "#d8b26a",
                          fillOpacity: ".85",
                        }),
                        jsxRuntime.jsx("path", {
                          className: "brand-r",
                          d: "M18 7c4 0 8 3 8 7-1 4-4 6-6 10-2-1-3-5-3-8l1-9z",
                          fill: "#e0a458",
                          fillOpacity: ".7",
                        }),
                        jsxRuntime.jsx("path", {
                          d: "M16.5 4v24",
                          stroke: "#5fd3c6",
                          strokeWidth: "1.2",
                          strokeDasharray: "2 2",
                        }),
                      ],
                    }),
                    jsxRuntime.jsxs("div", {
                      children: [
                        jsxRuntime.jsxs("b", {
                          children: [
                            "TERRA",
                            jsxRuntime.jsx("i", {
                              children: "·DRIFT",
                            }),
                          ],
                        }),
                        jsxRuntime.jsx("span", {
                          children: translate("海陆的变迁 · 板块构造"),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "eph",
                }),
                jsxRuntime.jsx("div", {
                  className: "prog",
                  id: "prog",
                }),
                jsxRuntime.jsx(T4, {}),
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
                  className: "full",
                }),
                jsxRuntime.jsx("canvas", {
                  id: "c2",
                  className: "full",
                }),
                jsxRuntime.jsx("div", {
                  id: "fx",
                }),
                jsxRuntime.jsxs("div", {
                  id: "frame",
                  children: [
                    jsxRuntime.jsx("i", {}),
                    jsxRuntime.jsx("i", {}),
                    jsxRuntime.jsx("i", {}),
                    jsxRuntime.jsx("i", {}),
                    jsxRuntime.jsx("span", {
                      id: "camRd",
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "labels",
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
                  className: "box",
                }),
                jsxRuntime.jsxs("div", {
                  id: "timeline",
                  children: [
                    jsxRuntime.jsx("button", {
                      id: "tlPlay",
                      title: translate("播放 (空格)"),
                    }),
                    jsxRuntime.jsxs("div", {
                      className: "tlr",
                      children: [
                        jsxRuntime.jsx("b", {
                          id: "tlDate",
                        }),
                        jsxRuntime.jsx("span", {
                          id: "tlSub",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("canvas", {
                      id: "tlC",
                    }),
                  ],
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
        }),
        jsxRuntime.jsxs("div", {
          id: "veil",
          children: [
            jsxRuntime.jsxs("div", {
              className: "veil-orbit",
              children: [
                jsxRuntime.jsx("i", {
                  className: "veil-sun",
                }),
                jsxRuntime.jsx("i", {
                  className: "veil-ring",
                }),
                jsxRuntime.jsx("i", {
                  className: "veil-earth",
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "veil-t",
              children: [
                "TERRA",
                jsxRuntime.jsx("i", {
                  children: "·DRIFT",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "veil-s",
              children: translate("正在载入地表影像与板块重建数据"),
            }),
            jsxRuntime.jsx("div", {
              className: "veil-bar",
              children: jsxRuntime.jsx("i", {
                id: "veilBar",
              }),
            }),
          ],
        }),
      ],
    })
  );
}
export { driftLabPage as default };
