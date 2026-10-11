// Recovered from public deployment: outline-B5slIcEP.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  s as l,
  u as p,
  i as M,
  e as i,
  h as d,
  a as g,
  d as m,
} from "./math-_7kWGBgE.js";
function I(a, t) {
  const n = [];
  for (let s = 0; s + 1 < a.length; s++) {
    const h = !t(s),
      o = n[n.length - 1];
    o && o.hidden === h
      ? o.pts.push(a[s + 1])
      : n.push({
          pts: [a[s], a[s + 1]],
          hidden: h,
        });
  }
  return n;
}
const f = (a, t, n, s, h) =>
  Array.from(
    {
      length: h + 1,
    },
    (o, u) => {
      const e = (2 * Math.PI * u) / h;
      return i(a, i(d(t, s * Math.cos(e)), d(n, s * Math.sin(e))));
    },
  );
function b(a, t, n, s = 144) {
  const h = l(n, a),
    o = p(h),
    u = [];
  if (o > t) {
    const [r, c] = M(h);
    u.push({
      pts: f(
        i(a, d(g(h), (t * t) / o)),
        r,
        c,
        t * Math.sqrt(1 - (t * t) / (o * o)),
        s,
      ),
      hidden: !1,
      silhouette: !0,
    });
  }
  const e = f(a, [1, 0, 0], [0, 1, 0], t, s);
  return (
    u.push(
      ...I(e, (r) => {
        const c = i(a, [
          t * Math.cos((2 * Math.PI * (r + 0.5)) / s),
          t * Math.sin((2 * Math.PI * (r + 0.5)) / s),
          0,
        ]);
        return m(l(c, a), l(n, c)) > 0;
      }),
    ),
    u
  );
}
export { f as c, I as r, b as s };
