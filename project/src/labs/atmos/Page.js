// Recovered from public deployment: Page-C83Ns7th.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Ja } from "../../components/LanguageSwitcher.js";
import {
  a as Xa,
  P as Ya,
  B as Za,
  b as Ye,
  L as ts,
  c as es,
  A as as,
  S as Ze,
  C as ss,
  W as ns,
  d as ta,
  R as os,
  e as is,
  f as ea,
  g as ls,
  M as rs,
  V as cs,
  T as ds,
  O as hs,
} from "../../vendor/OrbitControls-D-zZTbsE.js";
import {
  t as us,
  a as fs,
  b as ps,
  c as bs,
  d as ms,
} from "../../vendor/earth_clouds_1024-Dm-FkLh-.js";
import { t as vs } from "../../vendor/earth_bm_07-CEsBUeyA.js";
const gs =
    "varying vec2 vUv;void main(){vUv=uv;gl_Position=vec4(position.xy,0.,1.);}",
  xs = `uniform sampler2D t;uniform float fade;varying vec2 vUv;
void main(){vec4 c=texture2D(t,vUv);gl_FragColor=max(c*fade-vec4(1.2/255.),0.);}`,
  ys = `uniform sampler2D t;uniform vec2 dir;varying vec2 vUv;
void main(){
  vec4 c=texture2D(t,vUv)*.227027;
  c+=(texture2D(t,vUv+dir*1.3846)+texture2D(t,vUv-dir*1.3846))*.316216;
  c+=(texture2D(t,vUv+dir*3.2308)+texture2D(t,vUv-dir*3.2308))*.070270;
  gl_FragColor=c;
}`;
class aa {
  constructor(
    S,
    { width: L, height: m, count: w, wrapU: F = !0, glowDiv: P = 2 },
  ) {
    this.r = S;
    const k = {
        minFilter: ea,
        magFilter: ea,
        format: is,
        depthBuffer: !1,
        stencilBuffer: !1,
        wrapS: F ? os : ta,
        wrapT: ta,
      },
      D = (s, u) => new ns(s, u, k);
    ((this.rt = [D(L, m), D(L, m)]),
      (this.gw = Math.max(1, L / P)),
      (this.gh = Math.max(1, m / P)),
      (this.gl = [D(this.gw, this.gh), D(this.gw, this.gh)]),
      (this.i = 0),
      (this.cam = new Xa(0, 1, 1, 0, -1, 1)));
    const O = new Ya(2, 2),
      B = (s, u) => {
        const ht = new ls({
            uniforms: u,
            vertexShader: gs,
            fragmentShader: s,
            depthTest: !1,
            depthWrite: !1,
          }),
          i = new Ze(),
          ut = new rs(O, ht);
        return (
          (ut.frustumCulled = !1),
          i.add(ut),
          {
            m: ht,
            s: i,
          }
        );
      };
    ((this.fade = B(xs, {
      t: {
        value: null,
      },
      fade: {
        value: 0.95,
      },
    })),
      (this.blur = B(ys, {
        t: {
          value: null,
        },
        dir: {
          value: new cs(),
        },
      })),
      (this.pos = new Float32Array(w * 6)),
      (this.col = new Float32Array(w * 6)));
    const z = new Za();
    (z.setAttribute("position", new Ye(this.pos, 3)),
      z.setAttribute("color", new Ye(this.col, 3)),
      (this.seg = new ts(
        z,
        new es({
          vertexColors: !0,
          transparent: !0,
          blending: as,
          depthTest: !1,
          depthWrite: !1,
          toneMapped: !1,
        }),
      )),
      (this.seg.frustumCulled = !1),
      (this.segScene = new Ze()),
      this.segScene.add(this.seg),
      this.clear());
  }
  get texture() {
    return this.rt[this.i].texture;
  }
  get glow() {
    return this.gl[1].texture;
  }
  _with(S) {
    const L = this.r,
      m = L.getRenderTarget(),
      w = L.autoClear;
    ((L.autoClear = !1), S(L), L.setRenderTarget(m), (L.autoClear = w));
  }
  clear() {
    this._with((S) => {
      const L = S.getClearColor(new ss()),
        m = S.getClearAlpha();
      S.setClearColor(0, 0);
      for (const w of [...this.rt, ...this.gl])
        (S.setRenderTarget(w), S.clear(!0, !1, !1));
      S.setClearColor(L, m);
    });
  }
  step(S, L) {
    this._with((m) => {
      const w = this.rt[this.i],
        F = this.rt[1 - this.i];
      ((this.fade.m.uniforms.t.value = w.texture),
        (this.fade.m.uniforms.fade.value = L),
        m.setRenderTarget(F),
        m.render(this.fade.s, this.cam));
      const P = this.seg.geometry;
      (P.setDrawRange(0, S * 2),
        (P.attributes.position.needsUpdate = !0),
        (P.attributes.color.needsUpdate = !0),
        m.render(this.segScene, this.cam),
        (this.i = 1 - this.i));
      const k = this.blur.m.uniforms;
      ((k.t.value = F.texture),
        k.dir.value.set(1 / this.gw, 0),
        m.setRenderTarget(this.gl[0]),
        m.render(this.blur.s, this.cam),
        (k.t.value = this.gl[0].texture),
        k.dir.value.set(0, 1 / this.gh),
        m.setRenderTarget(this.gl[1]),
        m.render(this.blur.s, this.cam));
    });
  }
}
const Ms = "/assets/climate-Dn10DvAr.bin",
  E = 144,
  Q = 73,
  ot = E * Q;
let St = null;
const $ = {
    u: new Float32Array(ot),
    v: new Float32Array(ot),
    p: new Float32Array(ot),
    month: NaN,
    version: 0,
    ready: () => St !== null,
    load() {
      return fetch(Ms)
        .then((x) => (x.ok ? x.arrayBuffer() : Promise.reject(x.status)))
        .then((x) => ((St = new Uint8Array(x)), !0))
        .catch(() => !1);
    },
    setMonth(x) {
      if (!St || Math.abs(x - this.month) < 0.004) return !1;
      this.month = x;
      const S = [this.u, this.v, this.p];
      if (x === 0)
        for (let L = 0; L < 3; L++) {
          const m = S[L];
          m.fill(0);
          for (let w = 0; w < 12; w++) {
            const F = (w * 3 + L) * ot;
            for (let P = 0; P < ot; P++) m[P] += St[F + P];
          }
          for (let w = 0; w < ot; w++)
            m[w] = L < 2 ? (m[w] / 12 - 128) * 0.1 : 950 + (m[w] / 12) * 0.5;
        }
      else {
        const L = x - 1.5,
          m = Math.floor(L),
          w = L - m,
          F = ((m % 12) + 12) % 12,
          P = (F + 1) % 12;
        for (let k = 0; k < 3; k++) {
          const D = S[k],
            O = (F * 3 + k) * ot,
            B = (P * 3 + k) * ot;
          for (let z = 0; z < ot; z++) {
            const s = St[O + z] * (1 - w) + St[B + z] * w;
            D[z] = k < 2 ? (s - 128) * 0.1 : 950 + s * 0.5;
          }
        }
      }
      return (this.version++, !0);
    },
    sample(x, S, L) {
      const m = (90 - S) / 2.5,
        w = ((((L % 360) + 360) % 360) / 2.5) % E;
      let F = m | 0;
      F > Q - 2 ? (F = Q - 2) : F < 0 && (F = 0);
      const P = m - F,
        k = w | 0,
        D = w - k,
        O = k + 1 === E ? 0 : k + 1,
        B = F * E,
        z = B + E;
      return (
        (x[B + k] * (1 - D) + x[B + O] * D) * (1 - P) +
        (x[z + k] * (1 - D) + x[z + O] * D) * P
      );
    },
    extremum(x, S, L, m, w) {
      let F = w ? -1e9 : 1e9,
        P = 0,
        k = 0;
      for (let D = 0; D < Q; D++) {
        const O = 90 - D * 2.5;
        if (!(O < x || O > S))
          for (let B = 0; B < E; B++) {
            const z = ((B * 2.5 + 180) % 360) - 180;
            if (L < m ? z < L || z > m : z < L && z > m) continue;
            const s = this.p[D * E + B];
            (w ? s > F : s < F) && ((F = s), (P = O), (k = z));
          }
      }
      return {
        p: F,
        lat: P,
        lon: k,
      };
    },
  },
  f = {
    ...ds,
    OrbitControls: hs,
  };
function ws() {
  const x = (t) => document.querySelector(t),
    S = (t, e, o) => Math.max(e, Math.min(o, t)),
    L = (t, e, o) => {
      const n = S((o - t) / (e - t), 0, 1);
      return n * n * (3 - 2 * n);
    },
    m = (t, e, o) => Math.exp(-((t - e) * (t - e)) / (2 * o * o)),
    w = (t, e, o, n) => {
      const l = e - t,
        r = o / n;
      return Math.abs(l) <= r ? e : t + Math.sign(l) * r;
    },
    F = (t, e, o) => t + (e - t) * o,
    P = (t, e, o) => [F(t[0], e[0], o), F(t[1], e[1], o), F(t[2], e[2], o)],
    k = (t, e) => `rgba(${t.map(Math.round).join(",")},${e})`,
    D = [255, 172, 96],
    O = [110, 192, 255],
    B = [235, 240, 248],
    z = x("#stage"),
    s = {
      ch: 0,
      mode: "globe",
      scn: "basic",
      step: 4,
      hotA: !0,
      day: !0,
      auto: !1,
      strength: 1,
      fx: 0.3,
      smoke: !0,
      particles: !0,
      iso: !0,
      arrows: !0,
      plabels: !0,
      temp: !0,
      cells: 3,
      field: "ideal",
      month: 3.7,
      play: !1,
      winds: !0,
      curtain: !0,
      belts: !0,
      grid: !0,
      clouds: !0,
      labels: !0,
      rotate: !1,
      speed: 1,
      quiz: null,
    },
    u = {
      sg: 1,
      amp: 1,
      h: 1,
      D: 1,
      lab: 1,
      dn: 1,
      shift: 0,
      beltA: 0,
      real: 0,
      sunLon: -24,
    },
    ht = x("#c2"),
    i = ht.getContext("2d"),
    ut = document.createElement("canvas"),
    W = ut.getContext("2d");
  let I = 0,
    A = 0,
    kt = 1;
  const fe = {
      basic: {
        k: 1,
        x0: 0.2,
        x1: 0.8,
        S0: -1,
        Tb: (t) => m(t, 0.2, 0.09) - m(t, 0.8, 0.09),
        W: (t) => m(t, 0.2, 0.07) - m(t, 0.8, 0.07),
        ups: [0.2, 0.8],
        sgn: () => (s.hotA ? 1 : -1),
        hn: () => 0,
        cols: [
          {
            x: 0.2,
            name: "A",
          },
          {
            x: 0.8,
            name: "B",
          },
        ],
      },
      city: {
        k: 2,
        x0: 0.2,
        x1: 0.8,
        S0: 1,
        Tb: (t) =>
          1.1 * m(t, 0.5, 0.1) - 0.55 * (m(t, 0.2, 0.09) + m(t, 0.8, 0.09)),
        W: (t) =>
          m(t, 0.5, 0.075) - 0.5 * (m(t, 0.25, 0.075) + m(t, 0.75, 0.075)),
        ups: [0.5],
        sgn: () => 1,
        hn: () => 0,
        cols: [
          {
            x: 0.2,
            name: translate("郊区"),
          },
          {
            x: 0.5,
            name: translate("市区"),
          },
          {
            x: 0.8,
            name: translate("郊区"),
          },
        ],
      },
      sea: {
        k: 1,
        x0: 0.22,
        x1: 0.78,
        S0: 1,
        Tb: (t) => m(t, 0.76, 0.12) - m(t, 0.24, 0.12),
        W: (t) => m(t, 0.72, 0.09) - m(t, 0.28, 0.09),
        ups: [0.28, 0.72],
        sgn: () => (s.day ? 1 : -1),
        hn: (t) => 0.05 * L(0.5, 0.58, t),
        cols: [
          {
            x: 0.24,
            name: translate("海洋"),
          },
          {
            x: 0.76,
            name: translate("陆地"),
          },
        ],
      },
      valley: {
        k: 2,
        x0: 0.1,
        x1: 0.9,
        S0: -1,
        Tb: (t) => m(t, 0.16, 0.1) + m(t, 0.84, 0.1) - m(t, 0.5, 0.1),
        W: (t) => m(t, 0.2, 0.08) + m(t, 0.8, 0.08) - 2 * m(t, 0.5, 0.08),
        ups: [0.2, 0.5, 0.8],
        sgn: () => (s.day ? 1 : -1),
        hn: (t) => 0.95 * Math.pow(Math.abs(t - 0.5) / 0.5, 1.6),
        cols: [
          {
            x: 0.18,
            name: translate("山坡"),
          },
          {
            x: 0.5,
            name: translate("谷地"),
          },
          {
            x: 0.82,
            name: translate("山坡"),
          },
        ],
      },
    },
    J = () => fe[s.scn],
    N = (t) => I * (0.04 + 0.92 * t),
    pe = () => A * 0.27,
    _ = () => A * 0.8,
    Y = (t) => _() - J().hn(S(t, 0, 1)) * A * 0.34,
    tt = (t, e) => {
      const o = Y(t);
      return o + e * (pe() - o);
    },
    Tt = (t) => J().Tb(t) * u.sg * u.D,
    Qt = {};
  function sa(t) {
    if (Qt[t]) return Qt[t];
    const e = 720,
      o = -0.1,
      n = 1.2 / e,
      l = fe[t].W,
      r = new Float32Array(e + 1);
    for (let d = 0; d < e; d++) r[d + 1] = r[d] + l(o + (d + 0.5) * n) * n;
    let c = 0;
    for (let d = 0; d <= e; d++)
      ((r[d] -= (r[e] * d) / e), (c = Math.max(c, Math.abs(r[d]))));
    for (let d = 0; d <= e; d++) r[d] /= c;
    return (Qt[t] = {
      g: r,
      n: e,
      x0: o,
      dx: n,
      k: 1 / c,
    });
  }
  function na(t, e) {
    const o = (e - t.x0) / t.dx;
    if (o <= 0 || o >= t.n) return 0;
    const n = o | 0;
    return t.g[n] + (t.g[n + 1] - t.g[n]) * (o - n);
  }
  function Et(t, e) {
    const o = sa(s.scn),
      n = -0.9 * u.sg * u.amp * s.strength;
    return [
      n * Math.PI * Math.cos(Math.PI * e) * na(o, t) * u.h,
      -n * Math.sin(Math.PI * e) * J().W(t) * o.k,
    ];
  }
  const it = 1300,
    R = {
      x: new Float32Array(it),
      z: new Float32Array(it),
      life: new Float32Array(it),
      px: new Float32Array(it),
      py: new Float32Array(it),
    };
  function be(t) {
    ((R.x[t] = -0.02 + Math.random() * 1.04),
      (R.z[t] = 0.02 + Math.random() * 0.96),
      (R.life[t] = 2 + Math.random() * 6),
      (R.px[t] = NaN));
  }
  function Jt() {
    for (let t = 0; t < it; t++) (be(t), (R.life[t] *= Math.random()));
    (W.clearRect(0, 0, I, A), (y.n = 0), (y.E = y.R = 0));
  }
  const Lt = 600,
    y = {
      x: new Float32Array(Lt),
      z: new Float32Array(Lt),
      done: new Uint8Array(Lt),
      n: 0,
      head: 0,
      acc: 0,
      E: 0,
      R: 0,
    },
    oa = Array.from(
      {
        length: 140,
      },
      () => [
        Math.random(),
        Math.random() * 0.7,
        Math.random() * 1.3 + 0.3,
        Math.random(),
      ],
    ),
    ia = Array.from(
      {
        length: 16,
      },
      (t, e) => ({
        x: 0.395 + e * 0.0135,
        w: 0.011,
        h:
          0.06 +
          0.13 *
            Math.abs(Math.sin(e * 12.9898) * 0.5 + Math.sin(e * 3.1) * 0.5),
        seed: e,
      }),
    ),
    gt = 0.14;
  function Xt() {
    const t = z.getBoundingClientRect();
    ((kt = Math.min(devicePixelRatio, 2)),
      (I = t.width),
      (A = t.height),
      (ht.width = Math.round(I * kt)),
      (ht.height = Math.round(A * kt)),
      (ut.width = Math.round(I)),
      (ut.height = Math.round(A)),
      i.setTransform(kt, 0, 0, kt, 0, 0));
  }
  function la(t) {
    const e = u.dn,
      o = P([4, 7, 14], [16, 36, 58], e),
      n = P([10, 20, 36], [34, 66, 92], e),
      l = i.createLinearGradient(0, 0, 0, _());
    if (
      (l.addColorStop(0, k(o, 1)),
      l.addColorStop(1, k(n, 1)),
      (i.fillStyle = l),
      i.fillRect(0, 0, I, A),
      e < 0.99)
    )
      for (const [h, v, g, T] of oa)
        ((i.fillStyle = `rgba(220,230,255,${(1 - e) * (0.35 + 0.35 * Math.sin(t / 900 + T * 9))})`),
          i.fillRect(h * I, v * A, g, g));
    const r = _() - A * 0.2,
      c = i.createLinearGradient(0, r, 0, _()),
      d = P([40, 52, 78], [150, 185, 205], e);
    if (
      (c.addColorStop(0, k(d, 0)),
      c.addColorStop(1, k(d, 0.28)),
      (i.fillStyle = c),
      i.fillRect(0, r, I, _() - r),
      s.scn !== "valley")
    ) {
      ((i.fillStyle = k(P([14, 22, 34], [58, 86, 108], e), 0.55)),
        i.beginPath(),
        i.moveTo(s.scn === "sea" ? N(0.52) : 0, _()));
      for (let h = 0; h <= 120; h++) {
        const v =
            (s.scn === "sea" ? 0.52 : -0.05) +
            (h / 120) * (s.scn === "sea" ? 0.53 : 1.1),
          g =
            0.035 +
            0.025 * Math.sin(v * 13.1 + 1.3) +
            0.018 * Math.sin(v * 31.7);
        i.lineTo(N(v), _() - g * A);
      }
      (i.lineTo(I, _()), i.closePath(), i.fill());
    }
    const p = I * 0.86,
      b = A * 0.15;
    if (e > 0.01) {
      const h = i.createRadialGradient(p, b, 0, p, b, A * 0.22);
      (h.addColorStop(0, `rgba(255,220,150,${0.55 * e})`),
        h.addColorStop(1, "rgba(255,200,120,0)"),
        (i.fillStyle = h),
        i.fillRect(p - A * 0.22, b - A * 0.22, A * 0.44, A * 0.44),
        (i.fillStyle = `rgba(255,236,190,${e})`),
        i.beginPath(),
        i.arc(p, b, A * 0.032, 0, 7),
        i.fill());
    }
    e < 0.99 &&
      ((i.fillStyle = `rgba(230,236,250,${1 - e})`),
      i.beginPath(),
      i.arc(p, b, A * 0.026, 0, 7),
      i.fill(),
      (i.fillStyle = k(o, 1 - e)),
      i.beginPath(),
      i.arc(p + A * 0.012, b - A * 0.008, A * 0.023, 0, 7),
      i.fill());
  }
  function ra() {
    if (s.temp)
      for (const t of J().cols) {
        const e = Tt(t.x);
        if (Math.abs(e) < 0.05) continue;
        const o = N(t.x),
          n = Y(t.x),
          l = I * 0.16,
          r = e > 0 ? D : O,
          c = i.createRadialGradient(o, n, 0, o, n, l);
        (c.addColorStop(0, k(r, 0.3 * Math.min(1, Math.abs(e)))),
          c.addColorStop(1, k(r, 0)),
          i.save(),
          i.translate(o, n),
          i.scale(1, 1.35),
          i.translate(-o, -n),
          (i.fillStyle = c),
          i.fillRect(o - l, n - l, 2 * l, 2 * l),
          i.restore());
      }
  }
  function me(t) {
    const e = document.createElement("canvas"),
      o = 320,
      n = 180;
    ((e.width = o), (e.height = n));
    const l = e.getContext("2d");
    let r = 11;
    const c = () => (r = (r * 16807) % 2147483647) / 2147483647;
    for (let b = 0; b < 40; b++) {
      const h = c() * 2 - 1,
        v = o / 2 + h * o * 0.36,
        g = (14 + c() * 26) * (1 - Math.abs(h) * 0.45),
        T = n * 0.74 - (1 - h * h) * n * 0.46 * (0.5 + 0.5 * c()) + g * 0.3,
        j = l.createRadialGradient(v, T - g * 0.35, g * 0.1, v, T, g);
      (j.addColorStop(0, "rgba(255,255,255,1)"),
        j.addColorStop(0.65, "rgba(255,255,255,.8)"),
        j.addColorStop(1, "rgba(255,255,255,0)"),
        (l.fillStyle = j),
        l.beginPath(),
        l.arc(v, T, g, 0, 7),
        l.fill());
    }
    l.globalCompositeOperation = "source-atop";
    const d = l.createLinearGradient(0, n * 0.15, 0, n * 0.85);
    (d.addColorStop(0, t ? "#9aa8c2" : "#fffdf6"),
      d.addColorStop(0.55, t ? "#6f7d98" : "#e4e9f0"),
      d.addColorStop(1, t ? "#3a4560" : "#8e9db3"),
      (l.fillStyle = d),
      l.fillRect(0, 0, o, n),
      (l.globalCompositeOperation = "destination-out"));
    const p = l.createLinearGradient(0, n * 0.72, 0, n * 0.84);
    return (
      p.addColorStop(0, "rgba(0,0,0,0)"),
      p.addColorStop(1, "rgba(0,0,0,1)"),
      (l.fillStyle = p),
      l.fillRect(0, n * 0.72, o, n * 0.28),
      e
    );
  }
  const ve = [me(!1), me(!0)],
    Yt = {};
  function ca(t, e) {
    const o = J();
    for (const n of o.ups) {
      const l = s.scn + n,
        r = S(Et(n, 0.5)[1] / 3.2, 0, 1);
      Yt[l] = w(Yt[l] || 0, r, t, 2.2);
      const c = Yt[l];
      if (c < 0.02) continue;
      const d = 1 - u.dn,
        p = s.scn === "valley" && n === 0.5,
        b = p ? 0.5 : s.scn === "sea" ? 0.58 : 0.64,
        h = I * (0.12 + 0.09 * c) * (p ? 1.2 : 1),
        v = h * 0.5625,
        g = N(n) + Math.sin(e / 2600 + n * 9) * I * 0.004,
        T = tt(n, b);
      if (
        (i.save(),
        (i.globalAlpha = 0.9 * c * (1 - d)),
        i.drawImage(ve[0], g - h / 2, T - v * 0.8, h, v),
        (i.globalAlpha = 0.9 * c * d),
        i.drawImage(ve[1], g - h / 2, T - v * 0.8, h, v),
        i.restore(),
        p && c > 0.25)
      ) {
        ((i.strokeStyle = `rgba(170,200,240,${0.4 * c})`),
          (i.lineWidth = 1),
          i.beginPath());
        for (let j = 0; j < 46; j++) {
          const C =
              g +
              (((j * 37.7) % 1) - 0.5) * h * 0.7 +
              (((j * 0.618) % 1) - 0.5) * h * 0.2,
            U = Y(n) - T - 6,
            nt = ((e / 650 + j * 0.137) % 1) * U;
          (i.moveTo(C, T + nt), i.lineTo(C - 2, T + nt + 9));
        }
        (i.stroke(),
          s.plabels &&
            At(
              translate("夜雨"),
              g + h * 0.42,
              T + v * 0.25,
              [150, 196, 255],
              c,
              11,
            ));
      }
    }
  }
  function da() {
    if (!s.iso) return;
    const t = [0.16, 0.38, 0.62, 0.84];
    (i.save(),
      i.setLineDash([7, 6]),
      (i.lineWidth = 1.3),
      t.forEach((e, o) => {
        ((i.strokeStyle = "rgba(200,222,255,.42)"), i.beginPath());
        for (let n = 0; n <= 140; n++) {
          const l = -0.02 + (1.04 * n) / 140,
            r = S(e + Tt(l) * (e - 0.5) * 0.3 * s.strength, 0.02, 0.98);
          n ? i.lineTo(N(l), tt(l, r)) : i.moveTo(N(l), tt(l, r));
        }
        (i.stroke(),
          i.setLineDash([]),
          (i.fillStyle = "rgba(200,222,255,.7)"),
          (i.font = "600 11px JetBrains Mono"),
          (i.textBaseline = "middle"),
          i.fillText("P" + "₁₂₃₄"[o], N(0) - 26, tt(0, e)),
          i.setLineDash([7, 6]));
      }),
      i.restore());
  }
  const zt = [];
  for (let t = -2; t <= 2; t++)
    for (let e = 1; e <= 4; e++)
      zt.push({
        style: k(t > 0 ? P(B, D, t / 2) : P(B, O, -t / 2), e / 4),
        xy: new Float32Array(it * 4),
        n: 0,
      });
  function ge(t) {
    ((W.globalCompositeOperation = "destination-out"),
      (W.fillStyle = "rgba(0,0,0,.13)"),
      W.fillRect(0, 0, I, A),
      (W.globalCompositeOperation = "lighter"),
      (W.lineWidth = 1.4));
    for (const n of zt) n.n = 0;
    const e = u.amp < 0.05,
      o = e ? 0.012 : 0.002;
    for (let n = 0; n < it; n++) {
      const l = R.x[n],
        r = R.z[n],
        [c, d] = Et(l, r),
        [p, b] = Et(l + c * gt * t * 0.5, r + d * gt * t * 0.5);
      if (
        ((R.x[n] = l + p * gt * t + (Math.random() - 0.5) * o * t * 10),
        (R.z[n] = r + b * gt * t + (Math.random() - 0.5) * o * t * 10),
        (R.life[n] -= t),
        R.life[n] <= 0 ||
          R.z[n] < 0.01 ||
          R.z[n] > 0.99 ||
          R.x[n] < -0.04 ||
          R.x[n] > 1.04)
      ) {
        be(n);
        continue;
      }
      if (!s.particles) {
        R.px[n] = NaN;
        continue;
      }
      const h = N(R.x[n]),
        v = tt(R.x[n], R.z[n]),
        g = Math.hypot(p, b) + 1e-6,
        T = S(b / g, -1, 1),
        j =
          Math.min(1, R.life[n] * 2) *
          (e ? 0.5 : 0.1 + 0.85 * Math.pow(Math.min(1, g / 2.4), 0.7)) *
          (1 - L(0.8, 0.99, R.z[n])),
        C = Math.ceil(j * 4);
      if (C > 0 && R.px[n] === R.px[n]) {
        const U = zt[(Math.round(T * 2) + 2) * 4 + C - 1],
          nt = U.n * 4;
        ((U.xy[nt] = R.px[n]),
          (U.xy[nt + 1] = R.py[n]),
          (U.xy[nt + 2] = h),
          (U.xy[nt + 3] = v + (v === R.py[n] && h === R.px[n] ? 0.8 : 0)),
          U.n++);
      }
      ((R.px[n] = h), (R.py[n] = v));
    }
    for (const n of zt)
      if (n.n) {
        ((W.strokeStyle = n.style), W.beginPath());
        for (let l = 0; l < n.n * 4; l += 4)
          (W.moveTo(n.xy[l], n.xy[l + 1]), W.lineTo(n.xy[l + 2], n.xy[l + 3]));
        W.stroke();
      }
    if (s.scn === "city" && s.smoke) {
      for (y.acc += t * 45; y.acc >= 1;) {
        y.acc--;
        const r = y.head;
        ((y.head = (y.head + 1) % Lt),
          (y.n = Math.min(Lt, y.n + 1)),
          (y.x[r] = s.fx + (Math.random() - 0.5) * 0.006),
          (y.z[r] = 0.07),
          (y.done[r] = 0),
          y.E++);
      }
      const n = Math.exp(-t / 12);
      ((y.E *= n),
        (y.R *= n),
        (W.globalCompositeOperation = "source-over"),
        (W.fillStyle = "rgba(196,188,176,.5)"),
        W.beginPath());
      const l = J();
      for (let r = 0; r < y.n; r++) {
        let [c, d] = Et(y.x[r], y.z[r]);
        ((y.x[r] < l.x0 || y.x[r] > l.x1) &&
          ((c = (y.x[r] < 0.5 ? -1 : 1) * 0.06), (d = 0.05)),
          (y.x[r] += c * gt * t + (Math.random() - 0.5) * 0.004),
          (y.z[r] = S(
            y.z[r] + d * gt * t + (Math.random() - 0.5) * 0.004,
            0.02,
            0.97,
          )),
          !y.done[r] &&
            y.x[r] > 0.43 &&
            y.x[r] < 0.57 &&
            y.z[r] < 0.35 &&
            ((y.done[r] = 1), y.R++));
        const p = N(y.x[r]),
          b = tt(y.x[r], y.z[r]);
        (W.moveTo(p + 3, b), W.arc(p, b, 3, 0, 7));
      }
      W.fill();
    }
    W.globalCompositeOperation = "source-over";
  }
  function ha() {
    (i.beginPath(), i.moveTo(0, A));
    for (let t = 0; t <= 200; t++) {
      const e = -0.05 + (1.1 * t) / 200;
      i.lineTo(N(e), Y(e));
    }
    (i.lineTo(I, A), i.closePath());
  }
  function ua(t) {
    const e = s.scn;
    ha();
    const o = i.createLinearGradient(0, _() - A * 0.34, 0, A);
    if (
      (o.addColorStop(0, e === "valley" ? "#26352a" : "#1c2a20"),
      o.addColorStop(1, "#070a08"),
      (i.fillStyle = o),
      i.fill(),
      e === "sea")
    ) {
      const n = N(0.5),
        l = i.createLinearGradient(0, _(), 0, A);
      (l.addColorStop(0, "#16506f"),
        l.addColorStop(1, "#061522"),
        (i.fillStyle = l),
        i.fillRect(0, _(), n, A - _()),
        (i.strokeStyle = "rgba(160,220,255,.25)"),
        (i.lineWidth = 1));
      for (let r = 0; r < 5; r++) {
        i.beginPath();
        for (let c = 0; c <= n; c += 8) {
          const d = _() + 10 + r * 16 + Math.sin(c / 30 + t / 700 + r) * 2.5;
          c ? i.lineTo(c, d) : i.moveTo(c, d);
        }
        i.stroke();
      }
    }
    i.lineWidth = 3;
    for (let n = 0; n < 200; n++) {
      const l = -0.05 + (1.1 * n) / 200,
        r = -0.05 + (1.1 * (n + 1)) / 200,
        c = s.temp ? Tt((l + r) / 2) : 0;
      ((i.strokeStyle = k(
        c > 0
          ? P([120, 140, 120], D, Math.min(1, c))
          : P([120, 140, 120], O, Math.min(1, -c)),
        0.5 + 0.5 * Math.min(1, Math.abs(c)),
      )),
        i.beginPath(),
        i.moveTo(N(l), Y(l)),
        i.lineTo(N(r), Y(r)),
        i.stroke());
    }
    if (e === "city") {
      for (const d of ia) {
        const p = N(d.x),
          b = I * 0.92 * d.w,
          h = A * d.h,
          v = _();
        ((i.fillStyle = "#131b26"),
          i.fillRect(p, v - h, b, h),
          (i.strokeStyle = "rgba(255,255,255,.06)"),
          (i.lineWidth = 1),
          i.strokeRect(p + 0.5, v - h + 0.5, b - 1, h - 1));
        for (let g = v - h + 6; g < v - 6; g += 7)
          for (let T = p + 3; T < p + b - 3; T += 5)
            Math.sin(T * 7.1 + g * 3.3 + d.seed) > 0.15 &&
              ((i.fillStyle = "rgba(255,208,120,.55)"), i.fillRect(T, g, 2, 3));
      }
      Zt([
        0.04, 0.08, 0.12, 0.16, 0.25, 0.29, 0.33, 0.67, 0.71, 0.75, 0.84, 0.88,
        0.92, 0.96,
      ]);
      const n = N(s.fx),
        l = _();
      ((i.fillStyle = "#2a2622"),
        i.fillRect(n - 14, l - 16, 28, 16),
        i.fillRect(n + 6, l - 34, 5, 20),
        (i.strokeStyle = "rgba(216,178,106,.7)"),
        (i.lineWidth = 1),
        i.strokeRect(n - 14 + 0.5, l - 16 + 0.5, 27, 15),
        At(translate("工业区"), n, l + 16, [216, 178, 106], 1, 11));
      const r = J(),
        c = pe() - 16;
      ((i.strokeStyle = "rgba(243,217,162,.55)"),
        i.setLineDash([4, 4]),
        (i.lineWidth = 1),
        i.beginPath(),
        i.moveTo(N(r.x0), c),
        i.lineTo(N(r.x1), c),
        i.moveTo(N(r.x0), c - 5),
        i.lineTo(N(r.x0), c + 5),
        i.moveTo(N(r.x1), c - 5),
        i.lineTo(N(r.x1), c + 5),
        i.stroke(),
        i.setLineDash([]),
        (i.fillStyle = "rgba(243,217,162,.85)"),
        (i.font = '600 12px "Noto Serif SC", serif'),
        (i.textAlign = "center"),
        i.fillText(translate("城市热岛环流范围"), N(0.5), c - 8),
        (i.textAlign = "left"));
    }
    if (
      (e === "sea" &&
        (Zt([0.6, 0.64, 0.7, 0.8, 0.86, 0.93]), xe([0.56, 0.74, 0.9])),
      e === "valley" &&
        (Zt([0.08, 0.13, 0.24, 0.29, 0.71, 0.76, 0.87, 0.92]),
        xe([0.47, 0.5, 0.53])),
      e === "basic")
    )
      for (const n of J().cols) {
        const l = Tt(n.x),
          r = N(n.x),
          c = Y(n.x);
        if (s.temp && l > 0.1)
          for (let d = -1; d <= 1; d++) {
            ((i.strokeStyle = `rgba(255,172,96,${0.5 * l})`),
              (i.lineWidth = 1.5),
              i.beginPath());
            for (let p = 0; p <= 16; p++) {
              const b = c - 6 - p * 2,
                h = r + d * 14 + Math.sin(p * 0.8 - t / 200) * 3;
              p ? i.lineTo(h, b) : i.moveTo(h, b);
            }
            i.stroke();
          }
      }
  }
  function Zt(t) {
    for (const e of t) {
      const o = N(e),
        n = Y(e),
        l = 16 + ((e * 97) % 1) * 8;
      ((i.fillStyle = "#1f3a28"),
        i.beginPath(),
        i.moveTo(o, n - l),
        i.lineTo(o + 6, n - 2),
        i.lineTo(o - 6, n - 2),
        i.closePath(),
        i.fill());
    }
  }
  function xe(t) {
    for (const e of t) {
      const o = N(e),
        n = Y(e);
      ((i.fillStyle = "#2b2a2c"),
        i.fillRect(o - 7, n - 10, 14, 10),
        (i.fillStyle = "#3d2f28"),
        i.beginPath(),
        i.moveTo(o - 9, n - 10),
        i.lineTo(o, n - 17),
        i.lineTo(o + 9, n - 10),
        i.closePath(),
        i.fill(),
        (i.fillStyle = `rgba(255,208,120,${0.3 + 0.5 * (1 - u.dn)})`),
        i.fillRect(o - 2, n - 7, 4, 4));
    }
  }
  function At(t, e, o, n, l, r = 12) {
    if (l < 0.02) return;
    i.font = `700 ${r}px "Noto Serif SC", serif`;
    const c = i.measureText(t).width + 16,
      d = r + 10;
    ((i.globalAlpha = l),
      (i.fillStyle = "rgba(8,12,18,.82)"),
      (i.strokeStyle = k(n, 0.8)),
      (i.lineWidth = 1),
      i.beginPath(),
      i.roundRect
        ? i.roundRect(e - c / 2, o - d / 2, c, d, 3)
        : i.rect(e - c / 2, o - d / 2, c, d),
      i.fill(),
      i.stroke(),
      (i.fillStyle = k(n, 1)),
      (i.textAlign = "center"),
      (i.textBaseline = "middle"),
      i.fillText(t, e, o + 0.5),
      (i.textAlign = "left"),
      (i.globalAlpha = 1));
  }
  function fa() {
    for (const t of J().cols) {
      const e = Tt(t.x),
        o = e > 0.05,
        n = e < -0.05,
        l = N(t.x),
        r =
          s.scn === "basic"
            ? translate("{0} 地{1}", [
                t.name,
                o ? translate(" · 受热") : n ? translate(" · 冷却") : "",
              ])
            : t.name;
      if (
        (At(r, l, Y(t.x) + 22, o ? D : n ? O : [200, 206, 214], 1, 12),
        !s.plabels || (!o && !n))
      )
        continue;
      const c = u.lab * Math.min(1, Math.abs(e) * 1.5);
      (At(
        o ? translate("低压") : translate("高压"),
        l,
        tt(t.x, 0.1),
        o ? [111, 182, 255] : [255, 138, 115],
        c,
      ),
        At(
          o ? translate("高压") : translate("低压"),
          l,
          tt(t.x, 0.9),
          o ? [255, 138, 115] : [111, 182, 255],
          c,
        ));
    }
  }
  function pa(t) {
    if (!s.arrows || u.h < 0.05 || u.amp < 0.05) return;
    const e = J(),
      o = e.x1 - e.x0,
      n = Math.sign(e.S0 * u.sg);
    (i.save(),
      (i.globalAlpha =
        Math.min(u.h, u.amp) * 0.9 * Math.min(1, Math.abs(u.sg) * 2)));
    for (let l = 0; l < e.k; l++) {
      const r = e.x0 + ((l + 0.5) * o) / e.k,
        c = (0.34 * o) / e.k,
        d = 0.3,
        p = n * (l % 2 ? -1 : 1),
        b = (h) => {
          const v = r + c * Math.cos(h) * p,
            g = 0.5 + d * Math.sin(h);
          return [N(v), tt(v, g)];
        };
      ((i.strokeStyle = "rgba(255,226,170,.75)"),
        (i.lineWidth = 2),
        i.setLineDash([10, 8]),
        (i.lineDashOffset = -t / 40),
        i.beginPath());
      for (let h = 0; h <= 90; h++) {
        const [v, g] = b((h / 90) * Math.PI * 2);
        h ? i.lineTo(v, g) : i.moveTo(v, g);
      }
      (i.stroke(), i.setLineDash([]));
      for (const h of [-Math.PI / 2, 0, Math.PI / 2, Math.PI]) {
        const [v, g] = b(h),
          [T, j] = b(h + 0.05),
          C = Math.atan2(j - g, T - v);
        ((i.fillStyle = "#ffe2aa"),
          i.beginPath(),
          i.moveTo(v + Math.cos(C) * 8, g + Math.sin(C) * 8),
          i.lineTo(v + Math.cos(C + 2.5) * 8, g + Math.sin(C + 2.5) * 8),
          i.lineTo(v + Math.cos(C - 2.5) * 8, g + Math.sin(C - 2.5) * 8),
          i.closePath(),
          i.fill());
      }
    }
    i.restore();
  }
  let ft = 0;
  function ba(t, e) {
    const o = J(),
      n = s.scn === "basic";
    (s.auto &&
      ((ft += t),
      n && ft > 4.2 && ((ft = 0), (s.step = (s.step % 4) + 1), Kt()),
      !n && ft > 9 && ((ft = 0), (s.day = !s.day), Kt())),
      (u.sg = w(u.sg, o.sgn(), t, 1.6)),
      (u.amp = w(u.amp, n && s.step < 2 ? 0 : 1, t, 1)),
      (u.D = w(u.D, n && s.step < 2 ? 0 : 1, t, 1)),
      (u.h = w(u.h, n && s.step < 4 ? 0 : 1, t, 1)),
      (u.lab = w(u.lab, n && s.step < 3 ? 0 : 1, t, 0.6)),
      (u.dn = w(
        u.dn,
        (s.scn === "sea" || s.scn === "valley") && !s.day ? 0 : 1,
        t,
        1.6,
      )),
      la(e),
      ra(),
      da(),
      ge(t),
      i.drawImage(ut, 0, 0, I, A),
      ca(t, e),
      ua(e),
      pa(e),
      fa(),
      s.scn === "city" && Ea());
  }
  const te = x("#c3"),
    pt = new f.WebGLRenderer({
      canvas: te,
      antialias: !0,
      alpha: !0,
    });
  (pt.setPixelRatio(Math.min(devicePixelRatio, 2)),
    (pt.outputEncoding = f.sRGBEncoding));
  const et = new f.Scene(),
    X = new f.PerspectiveCamera(34, 1, 0.1, 400);
  X.position.set(0, 3, 27);
  const at = new f.OrbitControls(X, te);
  ((at.enableDamping = !0),
    (at.dampingFactor = 0.07),
    (at.enablePan = !1),
    (at.minDistance = 13),
    (at.maxDistance = 50),
    (at.autoRotateSpeed = 0.5),
    et.add(new f.HemisphereLight(11062527, 660512, 0.36)));
  const ee = new f.DirectionalLight(16773596, 1.5);
  et.add(ee);
  const V = 5,
    ye = 2.3,
    G = Math.PI / 180,
    Z = (t, e, o) =>
      new f.Vector3(
        o * Math.cos(t * G) * Math.sin(e * G),
        o * Math.sin(t * G),
        o * Math.cos(t * G) * Math.cos(e * G),
      ),
    $t = (t, e, o, n) => {
      const l = new f.Mesh(new f.SphereGeometry(t, e, o), n);
      return ((l.rotation.y = -Math.PI / 2), et.add(l), l);
    },
    Me =
      "varying vec2 vUv;varying vec3 vN;void main(){vUv=uv;vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
    Bt = new f.Vector3(0, 0, 1),
    ma = new f.TextureLoader(),
    va = pt.capabilities.getMaxAnisotropy(),
    xt = (t, e) => {
      const o = ma.load(t);
      return (e && (o.encoding = f.sRGBEncoding), (o.anisotropy = va), o);
    },
    we = {
      value: 0.5,
    },
    Se = new f.MeshPhongMaterial({
      map: xt(ps, !0),
      normalMap: xt(fs),
      normalScale: new f.Vector2(0.85, -0.85),
      specularMap: xt(us),
      specular: new f.Color(2503230),
      shininess: 34,
    }),
    ga = xt(vs, !0),
    xa = xt(bs, !0);
  ((Se.onBeforeCompile = (t) => {
    (Object.assign(t.uniforms, {
      mapJul: {
        value: ga,
      },
      nightMap: {
        value: xa,
      },
      sunDirView: {
        value: Bt,
      },
      season: we,
    }),
      (t.fragmentShader = t.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D mapJul;
uniform sampler2D nightMap;
uniform vec3 sunDirView;
uniform float season;`,
        )
        .replace(
          "#include <map_fragment>",
          "diffuseColor *= mapTexelToLinear(mix(texture2D(map, vUv), texture2D(mapJul, vUv), season));",
        )
        .replace(
          "#include <output_fragment>",
          `vec3 gN = normalize(vNormal);
        float sunK = dot(gN, sunDirView);
        float nightK = smoothstep(0.12, -0.22, sunK);
        vec3 city = texture2D(nightMap, vUv).rgb;
        outgoingLight = outgoingLight * mix(1.0, 0.5, nightK) + city * city * vec3(1.0, 0.8, 0.5) * nightK * 1.6;
        float rim = pow(1.0 - max(dot(gN, normalize(vViewPosition)), 0.0), 2.6);
        vec3 haze = mix(vec3(1.0, 0.42, 0.18), vec3(0.28, 0.56, 1.0), smoothstep(-0.12, 0.45, sunK));
        outgoingLight += haze * rim * smoothstep(-0.4, 0.2, sunK) * 0.85;
        #include <output_fragment>`,
        )));
  }),
    $t(V, 160, 112, Se));
  const ae = $t(
    V * 1.006,
    112,
    80,
    new f.MeshLambertMaterial({
      map: xt(ms, !0),
      transparent: !0,
      opacity: 0.4,
      depthWrite: !1,
    }),
  );
  ((ae.renderOrder = 2),
    et.add(
      new f.Mesh(
        new f.SphereGeometry(V * 1.17, 96, 64),
        new f.ShaderMaterial({
          uniforms: {
            sunDir: {
              value: Bt,
            },
          },
          side: f.BackSide,
          transparent: !0,
          blending: f.AdditiveBlending,
          depthWrite: !1,
          vertexShader:
            "varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
          fragmentShader: `uniform vec3 sunDir;varying vec3 vN;void main(){
          float i=pow(max(0.,.63-dot(vN,vec3(0.,0.,1.))),2.5);
          float s=dot(normalize(vec3(vN.xy,0.)+1e-4),sunDir);
          vec3 c=mix(vec3(1.,.5,.25),vec3(.34,.64,1.),smoothstep(-.05,.4,s));
          gl_FragColor=vec4(c*i*(.1+.9*smoothstep(-.3,.35,s)),1.);}`,
        }),
      ),
    ));
  {
    const e = new Float32Array(7200),
      o = new Float32Array(2400 * 3);
    for (let l = 0; l < 2400; l++) {
      const r = Math.random() * 2 - 1,
        c = Math.random() * Math.PI * 2,
        d = 150 + Math.random() * 80,
        p = Math.sqrt(1 - r * r),
        b = Math.pow(Math.random(), 3) * 0.9 + 0.1,
        h = Math.random();
      (e.set([d * p * Math.cos(c), d * r, d * p * Math.sin(c)], l * 3),
        o.set([b * (0.8 + 0.2 * h), b * 0.88, b * (1.05 - 0.2 * h)], l * 3));
    }
    const n = new f.BufferGeometry();
    (n.setAttribute("position", new f.BufferAttribute(e, 3)),
      n.setAttribute("color", new f.BufferAttribute(o, 3)),
      et.add(
        new f.Points(
          n,
          new f.PointsMaterial({
            vertexColors: !0,
            size: 0.6,
            sizeAttenuation: !0,
            transparent: !0,
            depthWrite: !1,
          }),
        ),
      ));
  }
  const se = new f.Group();
  et.add(se);
  function ke(t, e, o) {
    const n = [];
    for (let r = 0; r <= e; r++) n.push(t(r / e));
    const l = new f.Line(new f.BufferGeometry().setFromPoints(n), o);
    return (se.add(l), l);
  }
  for (let t = -75; t <= 75; t += 15) {
    const e = t === 0,
      o = Math.abs(t) === 30 || Math.abs(t) === 60;
    ke(
      (n) => Z(t, n * 360, V * 1.002),
      180,
      new f.LineBasicMaterial({
        color: e ? 14201450 : 10471658,
        transparent: !0,
        opacity: e ? 0.7 : o ? 0.3 : 0.12,
      }),
    );
  }
  for (let t = 0; t < 360; t += 30)
    ke(
      (e) => Z(-90 + e * 180, t, V * 1.002),
      90,
      new f.LineBasicMaterial({
        color: 10471658,
        transparent: !0,
        opacity: 0.11,
      }),
    );
  const Te = new Float32Array(E * Q * 4),
    Ut = new f.DataTexture(Te, E, Q, f.RGBAFormat, f.FloatType);
  Ut.magFilter = Ut.minFilter = f.NearestFilter;
  let Le = -1;
  const Ot = new Float32Array(E * Q);
  function ya() {
    const t = $.p;
    for (let e = 0; e < Q; e++)
      for (let o = 0; o < E; o++) {
        const n = e * E;
        Ot[n + o] =
          (t[n + ((o + E - 1) % E)] + 2 * t[n + o] + t[n + ((o + 1) % E)]) / 4;
      }
    for (let e = 0; e < Q; e++)
      for (let o = 0; o < E; o++) {
        const n = Math.max(0, e - 1),
          l = Math.min(Q - 1, e + 1);
        Te[(e * E + o) * 4] =
          (Ot[n * E + o] + 2 * Ot[e * E + o] + Ot[l * E + o]) / 4;
      }
  }
  const Pt = new f.ShaderMaterial({
      uniforms: {
        tP: {
          value: Ut,
        },
        uShift: {
          value: 0,
        },
        uCells: {
          value: 3,
        },
        uAlpha: {
          value: 0.3,
        },
        uReal: {
          value: 0,
        },
      },
      transparent: !0,
      depthWrite: !1,
      extensions: {
        derivatives: !0,
      },
      vertexShader: Me,
      fragmentShader: `uniform sampler2D tP;uniform float uShift,uCells,uAlpha,uReal;varying vec2 vUv;varying vec3 vN;
      float T(float x,float y){return texture2D(tP,vec2((x+.5)/${E}.,(y+.5)/${Q}.)).r;}
      vec4 bw(float t){float t2=t*t,t3=t2*t;float u=1.-t;return vec4(u*u*u,3.*t3-6.*t2+4.,-3.*t3+3.*t2+3.*t+1.,t3)/6.;}
      // 三次 B 样条采样：等压线连续光滑，没有双线性插值的折角
      float slp(vec2 uv){
        float x=fract(uv.x+.5)*${E}.,y=clamp((1.-uv.y)*${Q - 1}.,0.,${Q - 1}.);
        float xi=floor(x),yi=floor(y);vec4 wx=bw(x-xi),wy=bw(y-yi);float s=0.;
        for(int j=0;j<4;j++){
          float yy=clamp(yi+float(j)-1.,0.,${Q - 1}.),r=0.;
          for(int i=0;i<4;i++)r+=wx[i]*T(mod(xi+float(i)-1.+${E}.,${E}.),yy);
          s+=wy[j]*r;
        }
        return s;
      }
      void main(){
        float lat=vUv.y*180.-90.;
        float pi=-cos(uCells*2.*radians(lat-uShift));
        float core=1.-smoothstep(0.,fwidth(pi)*1.6+1e-5,1.-abs(pi));
        vec3 ci=pi>0.?vec3(1.,.42,.34):vec3(.31,.64,1.);
        float ai=(smoothstep(.5,.97,abs(pi))*.9+core*1.4)*uAlpha;
        vec3 cr=vec3(0.);float ar=0.;
        if(uReal>.001){
          float p=slp(vUv),a=clamp((p-1013.)/18.,-1.,1.);
          cr=a>0.?mix(vec3(1.,.8,.55),vec3(1.,.3,.22),a):mix(vec3(.55,.78,1.),vec3(.2,.42,1.),-a);
          float q=p/4.,d=abs(fract(q-.5)-.5)/max(fwidth(q),1e-4);
          float iso=1.-smoothstep(.4,1.4,d);
          cr=mix(cr,vec3(1.),iso*.55);
          ar=(pow(abs(a),.8)*.72+iso*.34)*uAlpha/.3;
        }
        float limb=smoothstep(0.,.25,vN.z);
        gl_FragColor=vec4(mix(ci,cr,uReal),mix(ai,ar,uReal)*limb);
      }`,
    }),
    Ae = $t(V * 1.004, 180, 120, Pt);
  Ae.renderOrder = 1;
  const Ma = () =>
      s.cells === 1
        ? [
            {
              lat: 0,
              t: "L",
              name: translate("低压（赤道受热）"),
            },
            {
              lat: 90,
              t: "H",
              name: translate("高压（极地冷却）"),
            },
            {
              lat: -90,
              t: "H",
              name: translate("高压（极地冷却）"),
            },
          ]
        : [
            {
              lat: 0,
              t: "L",
              name: translate("赤道低气压带"),
            },
            {
              lat: 30,
              t: "H",
              name: translate("副热带高气压带"),
            },
            {
              lat: -30,
              t: "H",
              name: translate("副热带高气压带"),
            },
            {
              lat: 60,
              t: "L",
              name: translate("副极地低气压带"),
            },
            {
              lat: -60,
              t: "L",
              name: translate("副极地低气压带"),
            },
            {
              lat: 90,
              t: "H",
              name: translate("极地高气压带"),
            },
            {
              lat: -90,
              t: "H",
              name: translate("极地高气压带"),
            },
          ],
    Pe = [
      [translate("亚洲高压"), "H", 35, 65, 70, 130, 1028],
      [translate("北美高压"), "H", 35, 60, -125, -95, 1022.5],
      [translate("阿留申低压"), "L", 40, 65, 160, -140, 1003],
      [translate("冰岛低压"), "L", 50, 75, -60, 0, 1003],
      [translate("亚洲低压"), "L", 15, 40, 40, 90, 1002],
      [translate("北美低压"), "L", 25, 40, -120, -100, 1011],
      [translate("夏威夷高压"), "H", 20, 45, -170, -120, 1025],
      [translate("亚速尔高压"), "H", 20, 45, -60, 0, 1025],
    ].map(([t, e, o, n, l, r, c]) => ({
      name: t,
      t: e,
      a0: o,
      a1: n,
      o0: l,
      o1: r,
      th: c,
      lat: (o + n) / 2,
      lon: (l + r) / 2,
      p: 1013,
      k: 0,
    }));
  function wa() {
    for (const t of Pe) {
      const e = $.extremum(t.a0, t.a1, t.o0, t.o1, t.t === "H");
      ((t.lat = e.lat),
        (t.lon = e.lon),
        (t.p = e.p),
        (t.k = S(((t.t === "H" ? e.p - t.th : t.th - e.p) + 1) / 2, 0, 1)));
    }
  }
  const bt = {
    u: 0,
    v: 0,
    s: 0,
  };
  let ne = 0;
  function Sa(t, e) {
    let o = 0,
      n = 0;
    const l = u.real;
    if (l < 0.999) {
      const r = S((t - u.shift) * G, -Math.PI / 2, Math.PI / 2),
        c = e * G,
        d = s.cells === 3 ? 0.07 : 0.03;
      (s.cells === 1
        ? (n = -Math.sin(2 * r))
        : ((o = -Math.sin(6 * Math.abs(r))), (n = -0.55 * Math.sin(6 * r))),
        (o += d * Math.cos(3 * c - ne * 0.23 + r * 5)),
        (n += d * Math.sin(4 * c + ne * 0.3) * Math.cos(3 * r)),
        (o *= 1 - l),
        (n *= 1 - l));
    }
    (l > 0.001 &&
      ((o += $.sample($.u, t, e) * 0.11 * l),
      (n += $.sample($.v, t, e) * 0.11 * l)),
      (bt.u = o),
      (bt.v = n),
      (bt.s = Math.hypot(o, n)));
  }
  const Wt = {
      trade: [1, 0.7, 0.34],
      west: [0.33, 0.84, 1],
      polar: [0.78, 0.72, 1],
      single: [0.6, 0.82, 1],
    },
    It = [
      [0, [0.2, 0.36, 0.75]],
      [0.3, [0.3, 0.68, 1]],
      [0.6, [0.82, 0.94, 1]],
      [0.85, [1, 0.84, 0.46]],
      [1.15, [1, 0.46, 0.3]],
    ],
    Ce = [0, 0, 0];
  function ka(t, e) {
    const o = u.real;
    let n;
    if (s.cells === 1) n = Wt.single;
    else {
      const h = Math.abs(t - u.shift);
      n = h < 30 ? Wt.trade : h < 60 ? Wt.west : Wt.polar;
    }
    let l = 0;
    for (; l < It.length - 2 && e > It[l + 1][0];) l++;
    const [r, c] = It[l],
      [d, p] = It[l + 1],
      b = S((e - r) / (d - r), 0, 1);
    for (let h = 0; h < 3; h++)
      Ce[h] = n[h] * (1 - o) + (c[h] + (p[h] - c[h]) * b) * o;
    return Ce;
  }
  const mt = 16e3,
    yt = new aa(pt, {
      width: 2048,
      height: 1024,
      count: mt,
      wrapU: !0,
    }),
    K = {
      lat: new Float32Array(mt),
      lon: new Float32Array(mt),
      life: new Float32Array(mt),
      max: new Float32Array(mt),
    },
    Re = (t, e = "") =>
      new f.ShaderMaterial({
        uniforms: {
          tT: {
            value: t.texture,
          },
          tG: {
            value: t.glow,
          },
          sunDir: {
            value: Bt,
          },
          uA: {
            value: 1,
          },
        },
        transparent: !0,
        blending: f.AdditiveBlending,
        depthWrite: !1,
        vertexShader: Me,
        fragmentShader: `uniform sampler2D tT,tG;uniform vec3 sunDir;uniform float uA;varying vec2 vUv;varying vec3 vN;
        void main(){vec3 c=texture2D(tT,vUv).rgb+texture2D(tG,vUv).rgb*.8;float k=1.;${e}
        gl_FragColor=vec4(c*k*uA,1.);}`,
      }),
    oe = $t(
      V * 1.012,
      160,
      112,
      Re(
        yt,
        "k=smoothstep(.0,.35,vN.z)*(.62+.38*smoothstep(-.3,.3,dot(vN,sunDir)));",
      ),
    );
  oe.renderOrder = 3;
  function Ne(t) {
    ((K.lat[t] = (Math.asin(Math.random() * 2 - 1) / G) * 0.97),
      (K.lon[t] = Math.random() * 360 - 180),
      (K.max[t] = K.life[t] = 1.6 + Math.random() * 3.4));
  }
  for (let t = 0; t < mt; t++) (Ne(t), (K.life[t] *= Math.random()));
  function Fe(t) {
    const e = 16 * s.speed,
      o = yt.pos,
      n = yt.col;
    let l = 0;
    for (let r = 0; r < mt; r++) {
      const c = K.lat[r],
        d = K.lon[r];
      Sa(c, d);
      const p = Math.max(0.12, Math.cos(c * G)),
        b = c + bt.v * e * t;
      let h = d + (bt.u * e * t) / p;
      if (
        (h > 180 ? (h -= 360) : h < -180 && (h += 360),
        (K.life[r] -= t),
        K.life[r] <= 0 || Math.abs(b) > 86)
      ) {
        Ne(r);
        continue;
      }
      ((K.lat[r] = b), (K.lon[r] = h));
      const v = (d + 180) / 360,
        g = (h + 180) / 360;
      if (Math.abs(g - v) > 0.5) continue;
      const T = ka(c, bt.s),
        j =
          Math.min(1, K.life[r] * 2, (K.max[r] - K.life[r]) * 2) *
          (0.2 + 0.8 * Math.min(1, bt.s * 1.1)) *
          0.3,
        C = l * 6;
      ((o[C] = v),
        (o[C + 1] = (c + 90) / 180),
        (o[C + 3] = g),
        (o[C + 4] = (b + 90) / 180),
        (n[C] = n[C + 3] = T[0] * j),
        (n[C + 1] = n[C + 4] = T[1] * j),
        (n[C + 2] = n[C + 5] = T[2] * j),
        l++);
    }
    yt.step(l, Math.pow(0.94, t * 60));
  }
  const st = new f.Group();
  et.add(st);
  const Ta = (t) => ye * (0.58 + 0.42 * Math.cos(t) ** 2),
    Ct = (t, e) => V * 1.025 + e * (Ta(t) - V * 0.025),
    La = (t) => (t <= Math.PI / 2 ? t : Math.PI - t),
    je = (() => {
      const o = [],
        n = [],
        l = [];
      for (let c = 0; c <= 480; c++) {
        const d = -Math.PI / 2 + (c / 480) * Math.PI * 2,
          p = La(d);
        for (let b = 0; b <= 12; b++) {
          const h = Ct(p, b / 12);
          (o.push(h * Math.cos(d), h * Math.sin(d), 0),
            n.push(c / 480, b / 12));
        }
      }
      for (let c = 0; c < 480; c++)
        for (let d = 0; d < 12; d++) {
          const p = c * 13 + d,
            b = p + 12 + 1;
          l.push(p, b, p + 1, b, b + 1, p + 1);
        }
      const r = new f.BufferGeometry();
      return (
        r.setAttribute("position", new f.Float32BufferAttribute(o, 3)),
        r.setAttribute("uv", new f.Float32BufferAttribute(n, 2)),
        r.setIndex(l),
        r
      );
    })(),
    Aa =
      "float a=vUv.x*6.2831853-1.5707963;float p=a<=1.5707963?a:3.1415927-a;";
  st.add(
    new f.Mesh(
      je,
      new f.ShaderMaterial({
        transparent: !0,
        depthWrite: !1,
        side: f.DoubleSide,
        vertexShader:
          "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader: `varying vec2 vUv;void main(){${Aa}
          float t=clamp(cos(p)*cos(p)*1.1-vUv.y*.55,0.,1.);
          vec3 c=mix(vec3(.3,.5,.95),vec3(1.,.62,.38),t);
          float al=.06+.08*(1.-vUv.y)+smoothstep(.93,1.,vUv.y)*.32;
          gl_FragColor=vec4(mix(c,vec3(.75,.88,1.),smoothstep(.93,1.,vUv.y)),al);}`,
      }),
    ),
  );
  const Gt = new f.LineSegments(
    new f.BufferGeometry(),
    new f.LineDashedMaterial({
      color: 14201450,
      transparent: !0,
      opacity: 0.45,
      dashSize: 0.12,
      gapSize: 0.1,
    }),
  );
  st.add(Gt);
  const Rt = new f.Group();
  st.add(Rt);
  const Pa = new f.LineDashedMaterial({
      color: 16769706,
      transparent: !0,
      opacity: 0.55,
      dashSize: 0.16,
      gapSize: 0.12,
    }),
    Ca = new f.MeshBasicMaterial({
      color: 16769706,
      transparent: !0,
      opacity: 0.85,
    });
  function Ra() {
    for (; Rt.children.length;) Rt.children.pop().geometry.dispose();
    const t = s.cells === 1 ? 2 : 6,
      e = 180 / t,
      o = [];
    for (let n = -90 + e / 2; n < 90; n += e) o.push(n);
    for (const n of [1, -1])
      for (const l of o) {
        const r = (l + u.shift) * G,
          c = e * 0.36 * G,
          d = -Math.sign(Math.sin(t * l * G)) || 1,
          p = (v) => {
            const g = r + c * Math.cos(v) * d,
              T = Ct(g, 0.5 + 0.3 * Math.sin(v));
            return new f.Vector3(n * T * Math.cos(g), T * Math.sin(g), 0);
          },
          b = [];
        for (let v = 0; v <= 80; v++) b.push(p((v / 80) * Math.PI * 2));
        const h = new f.Line(new f.BufferGeometry().setFromPoints(b), Pa);
        (h.computeLineDistances(), Rt.add(h));
        for (const v of [-Math.PI / 2, Math.PI / 2]) {
          const g = p(v),
            T = p(v + 0.06),
            j = T.clone().sub(g).normalize(),
            C = new f.Mesh(new f.ConeGeometry(0.08, 0.24, 10), Ca);
          (C.position.copy(g),
            C.quaternion.setFromUnitVectors(new f.Vector3(0, 1, 0), j),
            Rt.add(C));
        }
      }
  }
  let ie = null,
    De = null;
  function Ee() {
    Ra();
    const t = [],
      e = s.cells === 1 ? [0] : [0, 30, -30, 60, -60];
    for (const o of [1, -1])
      for (const n of e) {
        const l = (n + u.shift) * G;
        if (!(Math.abs(l) > Math.PI / 2))
          for (const r of [0, 1]) {
            const c = Ct(l, r);
            t.push(new f.Vector3(o * c * Math.cos(l), c * Math.sin(l), 0));
          }
      }
    (Gt.geometry.dispose(),
      (Gt.geometry = new f.BufferGeometry().setFromPoints(t)),
      Gt.computeLineDistances(),
      (ie = u.shift),
      (De = s.cells));
  }
  const lt = 3600,
    Mt = new aa(pt, {
      width: 2048,
      height: 256,
      count: lt,
      wrapU: !1,
    }),
    q = {
      s: new Int8Array(lt),
      p: new Float32Array(lt),
      z: new Float32Array(lt),
      life: new Float32Array(lt),
      max: new Float32Array(lt),
    },
    le = new f.Mesh(
      je,
      Re(Mt, "k=smoothstep(0.,.06,vUv.y)*smoothstep(1.,.9,vUv.y);"),
    );
  ((le.material.side = f.DoubleSide), st.add(le));
  function ze(t) {
    ((q.s[t] = Math.random() < 0.5 ? 1 : -1),
      (q.p[t] = (((Math.random() * 2 - 1) * Math.PI) / 2) * 0.97),
      (q.z[t] = 0.04 + Math.random() * 0.92),
      (q.max[t] = q.life[t] = 2.5 + Math.random() * 4));
  }
  for (let t = 0; t < lt; t++) (ze(t), (q.life[t] *= Math.random()));
  function $e(t, e) {
    const o = s.cells === 1 ? 2 : 6,
      n = t - u.shift * G;
    return [
      -Math.PI * Math.cos(Math.PI * e) * Math.sin(o * n),
      o * Math.sin(Math.PI * e) * Math.cos(o * n),
      o,
    ];
  }
  const Be = (t, e) =>
    ((t > 0 ? e : Math.PI - e) + Math.PI / 2) / (Math.PI * 2);
  function Ue(t) {
    const e = 0.085 * s.speed,
      o = Mt.pos,
      n = Mt.col;
    let l = 0;
    for (let r = 0; r < lt; r++) {
      const c = q.p[r],
        d = q.z[r],
        [p, b] = $e(c, d),
        [h, v, g] = $e(c + p * e * t * 0.5, d + b * e * t * 0.5),
        T = c + h * e * t,
        j = d + v * e * t;
      if (
        ((q.life[r] -= t),
        q.life[r] <= 0 ||
          j < 0.01 ||
          j > 0.99 ||
          Math.abs(T) > (Math.PI / 2) * 0.99)
      ) {
        ze(r);
        continue;
      }
      ((q.p[r] = T), (q.z[r] = j));
      const C = q.s[r],
        U = l * 6;
      ((o[U] = Be(C, c)),
        (o[U + 1] = d),
        (o[U + 3] = Be(C, T)),
        (o[U + 4] = j));
      const nt = Math.hypot(h, (v / g) * 2) + 1e-6,
        de = S((((v / g) * 2) / nt) * 1.3, -1, 1),
        he = de > 0 ? P(B, D, de) : P(B, O, -de),
        ue =
          (Math.min(1, q.life[r] * 2, (q.max[r] - q.life[r]) * 3) *
            (s.cells === 1 ? 0.5 : 0.3)) /
          255;
      ((n[U] = n[U + 3] = he[0] * ue),
        (n[U + 1] = n[U + 4] = he[1] * ue),
        (n[U + 2] = n[U + 5] = he[2] * ue),
        l++);
    }
    Mt.step(l, Math.pow(0.93, t * 60));
  }
  const re = new f.Mesh(
    new f.SphereGeometry(0.11, 16, 12),
    new f.MeshBasicMaterial({
      color: 16767370,
    }),
  );
  et.add(re);
  const Oe = -24,
    Nt = (t) =>
      23.44 * Math.sin((2 * Math.PI * ((t - 1) * 30.44 + 15 - 80)) / 365),
    Ht = [
      translate("1 月"),
      translate("2 月"),
      translate("3 月"),
      translate("4 月"),
      translate("5 月"),
      translate("6 月"),
      translate("7 月"),
      translate("8 月"),
      translate("9 月"),
      translate("10 月"),
      translate("11 月"),
      translate("12 月"),
    ],
    Ft = () => s.ch === 8 || s.ch === 9,
    We = (t) => Ht[Math.floor(t - 1) % 12],
    Na = [
      [translate("东亚冬季风 · 西北风"), 38, 122, -1],
      [translate("南亚冬季风 · 东北风"), 16, 84, -1],
      [translate("东亚夏季风 · 东南风"), 27, 124, 1],
      [translate("南亚夏季风 · 西南风"), 13, 70, 1],
    ],
    Fa = () => -Math.cos((2 * Math.PI * (s.month - 1.5)) / 12),
    Ie = x("#labels");
  let ce = [];
  function rt(t, e, o, n = !0, l = null) {
    const r = document.createElement("div");
    ((r.className = "lb " + t),
      (r.innerHTML = `<span>${e}</span>`),
      Ie.appendChild(r));
    const c = {
      el: r,
      getPos: o,
      surf: n,
      alpha: l,
    };
    return (ce.push(c), c);
  }
  let jt = 0;
  const ct = () => s.field === "real";
  function Vt() {
    if (((Ie.innerHTML = ""), (ce = []), !(s.mode !== "globe" || !s.labels))) {
      if (s.belts && !ct())
        for (const t of Ma())
          rt(t.t === "H" ? "hi" : "lo", t.name, () =>
            Z(S(t.lat + u.shift, -80, 80), jt - 40, V * 1.01),
          );
      if (s.belts && ct())
        for (const t of Pe) {
          const e = rt(
            t.t === "H" ? "hi" : "lo",
            "",
            () => Z(t.lat, t.lon, V * 1.01),
            !0,
            () => t.k,
          );
          e.center = t;
        }
      if (s.winds && s.cells === 3 && !ct()) {
        const t = [
          [15, translate("东北信风带")],
          [45, translate("盛行西风带")],
          [71, translate("极地东风带")],
          [-15, translate("东南信风带")],
          [-45, translate("盛行西风带")],
          [-71, translate("极地东风带")],
        ];
        for (const [e, o] of t)
          rt("wind", o, () => Z(e + u.shift, jt + 30, V * 1.02));
      }
      if (s.winds && ct() && s.ch === 9)
        for (const [t, e, o, n] of Na)
          rt(
            "wind",
            t,
            () => Z(e, o, V * 1.02),
            !0,
            () => S(Fa() * n * 2 - 0.4, 0, 1),
          );
      if (s.curtain && s.ch !== 9) {
        const t =
            s.cells === 1
              ? [
                  [45, translate("单圈环流")],
                  [-45, translate("单圈环流")],
                ]
              : [
                  [15, translate("低纬环流")],
                  [45, translate("中纬环流")],
                  [75, translate("高纬环流")],
                  [-15, translate("低纬环流")],
                  [-45, translate("中纬环流")],
                  [-75, translate("高纬环流")],
                ],
          e = (o, n, l) => {
            const r = Ct(o, n);
            return st.localToWorld(
              new f.Vector3(r * Math.cos(o) + l, r * Math.sin(o), 0),
            );
          };
        for (const [o, n] of t)
          rt("cell", n, () => e((o + u.shift) * G, 0.5, ye * 0.9), !1);
        rt(
          "cell faint",
          translate("对流层顶"),
          () => {
            const o = Ct(0.12, 1) + 0.28;
            return st.localToWorld(
              new f.Vector3(-o * Math.cos(0.12), o * Math.sin(0.12), 0),
            );
          },
          !1,
        );
      }
      s.ch === 8 &&
        (rt("sun", translate("太阳直射点"), () => Z(Nt(s.month), Oe, V * 1.06)),
        rt("mark", translate("地中海沿岸 38°N"), () =>
          Z(38, jt + 2, V * 1.02),
        ));
    }
  }
  const qt = new f.Vector3();
  function ja() {
    const t = z.getBoundingClientRect(),
      e = X.position.clone().normalize();
    for (const o of ce) {
      if (o.center) {
        const r = o.center,
          c = `${r.name} <b>${r.t === "H" ? "H" : "L"} ${Math.round(r.p)}</b>`;
        o.txt !== c && (o.el.firstChild.innerHTML = o.txt = c);
      }
      const n = o.getPos();
      qt.copy(n).project(X);
      const l = qt.z < 1 && (!o.surf || n.clone().normalize().dot(e) > 0.12);
      ((o.el.style.opacity = l ? (o.alpha ? o.alpha() : 1) : 0),
        (o.el.style.transform = `translate(${((qt.x + 1) / 2) * t.width}px,${((1 - qt.y) / 2) * t.height}px)`));
    }
  }
  let Ge = 0;
  function Da(t) {
    ((ne += t),
      s.play && ((s.month += t * 1.1), s.month >= 13 && (s.month -= 12), _e()),
      (at.autoRotate = s.rotate),
      at.update(),
      (jt = Math.atan2(X.position.x, X.position.z) / G));
    const e = Ft() ? Nt(s.month) : 0;
    ((u.shift +=
      ((s.ch === 8 && s.cells === 3 ? e * 0.3 : 0) - u.shift) *
      (1 - Math.exp(-t * 3))),
      (u.real = w(u.real, ct() && $.ready() ? 1 : 0, t, 0.9)),
      $.ready() && $.setMonth(Ft() ? s.month : 0) && ya(),
      $.version !== Le && ((Le = $.version), (Ut.needsUpdate = !0), wa()),
      (ie === null || Math.abs(u.shift - ie) > 0.15 || De !== s.cells) && Ee(),
      (we.value = Ft()
        ? 0.5 - 0.5 * Math.cos((2 * Math.PI * (s.month - 1.5)) / 12)
        : 0.5),
      (u.sunLon = w(u.sunLon, s.ch === 9 ? 100 : Oe, t, 1.2 / 124)),
      ee.position.copy(Z(e, u.sunLon, 40)),
      X.updateMatrixWorld(),
      Bt.copy(ee.position).normalize().transformDirection(X.matrixWorldInverse),
      (ae.visible = s.clouds),
      (ae.rotation.y += t * 0.004),
      re.position.copy(Z(e, u.sunLon, V * 1.01)),
      (re.visible = s.ch === 8),
      (u.beltA = w(u.beltA, s.belts ? (s.ch === 6 ? 0.16 : 0.3) : 0, t, 0.5)),
      (Pt.uniforms.uAlpha.value = u.beltA),
      (Pt.uniforms.uShift.value = u.shift),
      (Pt.uniforms.uCells.value = s.cells),
      (Pt.uniforms.uReal.value = u.real),
      (Ae.visible = u.beltA > 0.005),
      (se.visible = s.grid),
      (oe.visible = s.winds));
    const o = s.curtain && s.ch !== 9;
    ((st.visible = o),
      (st.rotation.y = jt * G),
      s.winds && Fe(t),
      o && Ue(t),
      (oe.material.uniforms.tT.value = yt.texture),
      (le.material.uniforms.tT.value = Mt.texture),
      pt.render(et, X),
      ja(),
      s.ch === 8 && $a(),
      s.ch === 9 && (Ge += t) > 0.2 && ((Ge = 0), Ua()));
  }
  const Dt = x("#hud");
  function Ea() {
    const t = y.E > 1 ? S(y.R / y.E, 0, 1) : 0,
      e = Math.abs(s.fx - 0.5) * 40,
      o = s.fx > J().x0;
    Dt.innerHTML = translate(
      `<div class="hh">POLLUTION · 污染扩散</div><div class="kv"><span>工业区距市中心</span><b>{0} km</b>
    <span>位于热岛环流</span><b class="{1}">{2}</b>
    <span>流入市区的污染物</span><b class="{3}">{4}</b></div>
    <div class="bar"><i style="width:{5}%"></i></div>`,
      [
        e.toFixed(1),
        o ? "r" : "ok",
        o ? translate("范围以内") : translate("范围以外"),
        t > 0.25 ? "r" : t > 0.08 ? "g" : "ok",
        s.smoke ? (t * 100).toFixed(0) + " %" : "—",
        s.smoke ? t * 100 : 0,
      ],
    );
  }
  function za(t) {
    const e = t - u.shift;
    return Math.abs(e - 30) < 6
      ? [translate("副热带高气压带"), translate("炎热干燥"), "r"]
      : e > 30 && e < 60
        ? [translate("盛行西风带"), translate("温和多雨"), "ok"]
        : e < 30
          ? [translate("东北信风带"), translate("干燥"), "g"]
          : [translate("副极地低气压带"), translate("多雨"), "ok"];
  }
  function $a() {
    const t = Nt(s.month),
      e = Math.floor(s.month - 1) % 12,
      [o, n, l] = za(38);
    Dt.innerHTML = translate(
      `<div class="hh">SEASON · 季节移动</div><div class="kv"><span>月份</span><b class="g">{0}</b>
    <span>太阳直射点</span><b>{1}° {2}</b>
    <span>气压带风带</span><b>{3}</b>
    <span>地中海沿岸受</span><b class="{4}">{5}</b><span>天气特点</span><b class="{6}">{7}</b></div>`,
      [
        Ht[e],
        Math.abs(t).toFixed(1),
        t >= 0 ? "N" : "S",
        Math.abs(u.shift) < 0.3
          ? translate("接近春秋分位置")
          : (u.shift > 0 ? translate("北移 ") : translate("南移 ")) +
            Math.abs(u.shift).toFixed(1) +
            "°",
        l,
        o,
        l,
        n,
      ],
    );
  }
  const Ba = (t, e) =>
    [
      translate("北"),
      translate("东北"),
      translate("东"),
      translate("东南"),
      translate("南"),
      translate("西南"),
      translate("西"),
      translate("西北"),
    ][Math.round(((Math.atan2(-t, -e) / G + 360) % 360) / 45) % 8] +
    translate("风");
  function Ua() {
    if (!$.ready()) {
      Dt.innerHTML = translate(
        '<div class="hh">MONSOON · 季风</div><div class="kv"><span>气候资料</span><b>加载中…</b></div>',
        [],
      );
      return;
    }
    const t = (n, l) => {
        const r = $.sample($.u, n, l),
          c = $.sample($.v, n, l);
        return `${Ba(r, c)} ${Math.hypot(r, c).toFixed(1)} m/s`;
      },
      e = Nt(s.month),
      o = $.sample($.p, 48, 95);
    Dt.innerHTML = translate(
      `<div class="hh">MONSOON · 月平均实况</div><div class="kv"><span>月份</span><b class="g">{0}</b>
    <span>太阳直射点</span><b>{1}° {2}</b>
    <span>蒙古高原气压</span><b class="{3}">{4} hPa</b>
    <span>上海 近地面风</span><b>{5}</b>
    <span>孟买 近地面风</span><b>{6}</b></div>`,
      [
        We(s.month),
        Math.abs(e).toFixed(1),
        e >= 0 ? "N" : "S",
        o > 1016 ? "r" : "ok",
        o.toFixed(0),
        t(31, 121.5),
        t(19, 72.8),
      ],
    );
  }
  function _t() {
    const t = x("#legend");
    s.mode === "2d"
      ? (t.innerHTML = translate(
          '<div><i style="background:rgb({0})"></i>上升气流（受热）</div><div><i style="background:rgb({1})"></i>下沉气流（冷却）</div><div><i style="background:rgb({2})"></i>水平气流</div>{3}',
          [
            D,
            O,
            B,
            s.iso
              ? translate(
                  '<div><i style="background:repeating-linear-gradient(90deg,rgba(200,222,255,.7) 0 5px,transparent 5px 9px)"></i>等压面 P₁&gt;P₂&gt;P₃&gt;P₄</div>',
                )
              : "",
          ],
        ))
      : (t.innerHTML =
          (ct()
            ? translate(
                '<div><i style="background:linear-gradient(90deg,#3366bf,#4dadff,#d1f0ff,#ffd675,#ff7550)"></i>近地面风速 0 → 10 m/s</div><div><i class="band" style="background:#ff6b57"></i>高压（海平面气压）</div><div><i class="band" style="background:#4fa3ff"></i>低压</div><div><i style="background:rgba(255,255,255,.75);height:1px"></i>等压线 · 间隔 4 hPa</div>',
                [],
              )
            : (s.cells === 3
                ? translate(
                    '<div><i style="background:#ffb85a"></i>信风带</div><div><i style="background:#5ad8ff"></i>盛行西风带</div><div><i style="background:#c6bdff"></i>极地东风带</div>',
                    [],
                  )
                : translate(
                    '<div><i style="background:#9cd1ff"></i>近地面气流</div>',
                    [],
                  )) +
              translate(
                '<div><i class="band" style="background:#ff6b57"></i>高气压带</div><div><i class="band" style="background:#4fa3ff"></i>低气压带</div>',
                [],
              )) +
          (s.curtain && s.ch !== 9
            ? translate(
                '<div><i style="background:rgb({0})"></i>剖面：上升</div><div><i style="background:rgb({1})"></i>剖面：下沉</div>',
                [D, O],
              )
            : "") +
          (ct()
            ? translate(
                '<div class="src">NCEP/NCAR 再分析 1991–2020 · {0}</div>',
                [Ft() ? translate("月平均") : translate("年平均")],
              )
            : ""));
  }
  const Oa = {
      play: '<svg viewBox="0 0 14 14"><path d="M3.5 2.5l8 4.5-8 4.5z"/></svg>',
      pause: '<svg viewBox="0 0 14 14"><path d="M4 2.5v9M10 2.5v9"/></svg>',
      swap: '<svg viewBox="0 0 14 14"><path d="M2 5h10l-3-3M12 9H2l3 3"/></svg>',
      arrow: '<svg viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4"/></svg>',
      rot: '<svg viewBox="0 0 14 14"><path d="M12 7a5 5 0 1 1-1.5-3.6"/><path d="M11 1v3H8"/></svg>',
    },
    H = (t, e, o = "", n = !1, l = "") =>
      `<button class="btn ${l}${n ? " on" : ""}" data-act="${t}">${Oa[o] || ""}${e}</button>`,
    Wa = () => {
      const t = s.hotA ? "A" : "B",
        e = s.hotA ? "B" : "A";
      return [
        [
          translate("受热均匀"),
          translate(
            "地面各处受热均匀时，同一高度上的气压处处相等，<b>等压面与地面平行</b>，空气没有明显的流动（粒子只做微小的随机运动）。",
          ),
        ],
        [
          translate("垂直运动"),
          translate(
            "{0} 地受热，近地面空气<b>膨胀上升</b>；{1} 地冷却，空气<b>收缩下沉</b>。热力环流首先表现为空气的垂直运动，等压面开始弯曲。",
            [t, e],
          ),
        ],
        [
          translate("形成气压差"),
          translate(
            "{0} 地近地面空气上升流失，形成<b>低压</b>；高空空气堆积，形成<b>高压</b>。{1} 地正好相反。于是<b>同一水平面</b>上出现了气压差。",
            [t, e],
          ),
        ],
        [
          translate("水平运动"),
          translate(
            "空气从高压流向低压：近地面由 {0} 吹向 {1}，高空由 {2} 流向 {3}，与垂直运动连成一个闭合的<b>热力环流</b>。",
            [e, t, t, e],
          ),
        ],
      ];
    },
    wt = [
      {
        t: translate("大气运动总览"),
        en: "Overview",
        mode: "globe",
        cells: 3,
        cam: [0, 3, 27],
        body: () =>
          translate(
            `
      <p class="lead">大气运动的根本能量来自太阳辐射。地表<b>冷热不均</b>引起空气的垂直运动和同一水平面上的气压差，形成<b>热力环流</b>；在全球尺度上，再叠加<b>地球自转</b>的影响，就形成了三圈环流和七个气压带、六个风带。</p>
      <div class="sec">两个模块</div>
      <div class="cards">
        <button class="card" data-act="go:1"><em>01–04</em><b>热力环流</b><span>原理四步拆解、城市热岛、海陆风、山谷风——二维剖面上的粒子流动。</span></button>
        <button class="card" data-act="go:5"><em>05–09</em><b>全球大气环流</b><span>单圈与三圈环流、气压带和风带、季节移动，以及基于 NCEP 真实资料的海陆分布与季风。</span></button>
      </div>
      <div class="sec">操作</div>
      <ul class="pts"><li>三维地球可<b>拖动旋转</b>、滚轮缩放；地球边缘的光环是经向环流剖面，始终朝向你。</li><li>键盘 <b>← →</b> 切换章节，<b>F</b> 全屏，适合投屏讲解。</li></ul>`,
            [],
          ),
      },
      {
        t: translate("热力环流原理"),
        en: "Thermal circulation",
        mode: "2d",
        scn: "basic",
        enter() {
          s.step = 1;
        },
        body: () => {
          const t = Wa();
          return translate(
            `
      <p class="lead">热力环流是由地面<b>冷热不均</b>而形成的空气环流，是大气运动最简单的形式。按步骤看它是怎样形成的：</p>
      <div class="steps">{0}</div>
      <div class="stext">{1}</div>
      <div class="acts" style="margin-top:12px">{2}{3}</div>
      <div class="sec">规律</div>
      <div class="rule" data-k="RULE"><p>热 → 上升 → 近地面低压、高空高压<br>冷 → 下沉 → 近地面高压、高空低压</p></div>
      <ul class="pts">
        <li>等压面<b>高压处上凸、低压处下凹</b>。</li>
        <li>同一地点，<b>近地面与高空</b>的气压性质相反。</li>
        <li>水平方向上，空气总是由<b>高压流向低压</b>。</li>
        <li>垂直方向上，<b>近地面气压总是高于高空</b>——"高压""低压"是与同一水平面比较而言。</li>
      </ul>`,
            [
              t
                .map(
                  (e, o) =>
                    `<button data-act="step:${o + 1}" class="${s.step === o + 1 ? "on" : s.step > o + 1 ? "done" : ""}"><i>0${o + 1}</i>${e[0]}</button>`,
                )
                .join(""),
              t[s.step - 1][1],
              H(
                "auto",
                s.auto ? translate("暂停演示") : translate("自动演示"),
                s.auto ? "pause" : "play",
                s.auto,
              ),
              H("swapHot", translate("交换冷热"), "swap"),
            ],
          );
        },
      },
      {
        t: translate("城市热岛环流"),
        en: "Urban heat island",
        mode: "2d",
        scn: "city",
        body: () =>
          translate(
            `
      <p class="lead">城市人口、工业集中，生产生活释放大量<b>废热</b>，水泥、沥青路面吸热多、绿地少，市区气温高于郊区，形成<b>城市热岛</b>。市区空气上升、郊区空气下沉，近地面风从<b>郊区吹向市区</b>。</p>
      <div class="rule" data-k="PATTERN"><p>近地面：郊区 → 市区<small>高空：市区 → 郊区；市区上升，郊区下沉。</small></p></div>
      <div class="sec">工业区布局实验</div>
      <div class="rng"><label>工业区位置</label><input type="range" id="fxR" min="0.02" max="0.46" step="0.005" value="{0}"><output id="fxO">{1} km</output></div>
      <div class="acts">{2}{3}{4}</div>
      <div class="note">把工业区放在热岛环流的<b>下沉区以内</b>，污染物会随近地面风流入市区；布局在<b>下沉距离之外</b>，污染物就不会回流市区。左下角实时统计流入市区的污染物比例。</div>
      <div class="sec">应用</div>
      <ul class="pts"><li>大气污染较重的工业应布局在<b>热岛环流之外</b>。</li><li>城市绿地宜布置在<b>环流内部、下沉区附近</b>，净化流向市区的空气。</li><li>增加绿地、水面，使用浅色屋顶，可以减弱热岛效应。</li></ul>`,
            [
              s.fx,
              (Math.abs(s.fx - 0.5) * 40).toFixed(1),
              H(
                "smoke",
                s.smoke ? translate("停止排放") : translate("排放污染物"),
                "play",
                s.smoke,
              ),
              H("fx:.3", translate("放在环流内"), "arrow"),
              H("fx:.08", translate("放在环流外"), "arrow"),
            ],
          ),
      },
      {
        t: translate("海陆风"),
        en: "Sea & land breeze",
        mode: "2d",
        scn: "sea",
        body: () =>
          translate(
            `
      <p class="lead">陆地比热容小，<b>升温、降温都比海洋快</b>。白天陆地气温高、近地面形成低压，风从海洋吹向陆地——<b>海风</b>；夜晚陆地降温快，气压比海洋高，风从陆地吹向海洋——<b>陆风</b>。</p>
      <div class="seg" style="margin-bottom:10px"><button data-act="day:1" class="{0}">白天 · 海风</button><button data-act="day:0" class="{1}">夜晚 · 陆风</button></div>
      <div class="acts">{2}</div>
      <div class="rule" data-k="MNEMONIC" style="margin-top:16px"><p>白天海风 · 夜晚陆风<small>近地面风总是从较冷（高压）的一侧吹向较热（低压）的一侧。</small></p></div>
      <ul class="pts"><li>海风使滨海地区夏季白天<b>较为凉爽</b>、空气湿润。</li><li>传统渔民“借陆风清晨出海、借海风傍晚归航”。</li></ul>`,
            [
              s.day ? "on" : "",
              s.day ? "" : "on",
              H(
                "auto",
                s.auto ? translate("停止循环") : translate("昼夜自动循环"),
                s.auto ? "pause" : "play",
                s.auto,
              ),
            ],
          ),
      },
      {
        t: translate("山谷风"),
        en: "Mountain & valley breeze",
        mode: "2d",
        scn: "valley",
        body: () =>
          translate(
            `
      <p class="lead">白天山坡增温快，坡面上方空气比同高度谷地上空暖，空气沿山坡上升，谷底空气补充——<b>谷风</b>；夜晚山坡降温快，冷空气沿坡下滑流入谷底——<b>山风</b>。</p>
      <div class="seg" style="margin-bottom:10px"><button data-act="day:1" class="{0}">白天 · 谷风</button><button data-act="day:0" class="{1}">夜晚 · 山风</button></div>
      <div class="acts">{2}</div>
      <div class="rule" data-k="MNEMONIC" style="margin-top:16px"><p>白天谷风 · 夜晚山风</p></div>
      <ul class="pts">
        <li>夜晚谷底暖湿空气被冷空气抬升，易成云致雨，山区多<b>夜雨</b>。</li>
        <li>冷空气在谷底堆积易形成<b>逆温</b>，污染物不易扩散——谷地不宜布局大气污染严重的工业。</li>
      </ul>`,
            [
              s.day ? "on" : "",
              s.day ? "" : "on",
              H(
                "auto",
                s.auto ? translate("停止循环") : translate("昼夜自动循环"),
                s.auto ? "pause" : "play",
                s.auto,
              ),
            ],
          ),
      },
      {
        t: translate("单圈环流"),
        en: "Single-cell model",
        mode: "globe",
        cells: 1,
        cam: [0, 1.5, 26],
        body: () =>
          translate(
            `
      <p class="lead">先做两个假设：<b>地表均匀</b>、<b>地球不自转</b>。赤道受热最多，空气膨胀上升，高空流向两极；两极冷却，空气收缩下沉，近地面由两极流回赤道。南北半球<b>各形成一个</b>闭合的热力环流。</p>
      <div class="rule" data-k="MODEL"><p>赤道：受热 → 上升 → 近地面低压<br>极地：冷却 → 下沉 → 近地面高压</p></div>
      <ul class="pts"><li>观察地球边缘的剖面：粒子在赤道上升、在两极下沉。</li><li>近地面气流沿经线<b>由极地直接吹向赤道</b>，没有东西向的偏转。</li><li>实际上地球在自转，这种单圈环流并不存在——见下一节。</li></ul>
      <div class="acts" style="margin-top:14px">{0}</div>`,
            [H("go:6", translate("加入地球自转"), "arrow", !1, "pri")],
          ),
      },
      {
        t: translate("三圈环流"),
        en: "Three-cell model",
        mode: "globe",
        cells: 3,
        cam: [0, 1.5, 26],
        body: () =>
          translate(
            `
      <p class="lead">地球自转产生<b>地转偏向力</b>（北半球向右、南半球向左）。赤道上空流向极地的气流，在约 <b>30°</b> 附近已偏转成西风，空气堆积下沉，单圈环流被分割成<b>三个环流圈</b>。</p>
      <ul class="pts">
        <li><b>低纬环流</b>：赤道上升 → 高空流向 30° → 下沉 → 近地面流回赤道。</li>
        <li><b>中纬环流</b>：30° 下沉的气流一部分流向高纬，在 60° 附近与极地冷空气相遇、被抬升。</li>
        <li><b>高纬环流</b>：极地冷却下沉 → 近地面流向 60° → 上升 → 高空流回极地。</li>
      </ul>
      <div class="note">近地面的气流在地转偏向力作用下偏转：低纬吹<b>信风</b>，中纬吹<b>西风</b>，高纬吹<b>极地东风</b>——看地球表面粒子的方向。</div>
      <div class="acts" style="margin-top:14px">{0}</div>`,
            [
              H(
                "cells",
                s.cells === 3
                  ? translate("关闭地球自转（对比单圈）")
                  : translate("恢复地球自转"),
                "swap",
                s.cells === 1,
              ),
            ],
          ),
      },
      {
        t: translate("气压带与风带"),
        en: "Pressure & wind belts",
        mode: "globe",
        cells: 3,
        cam: [0, 4, 25],
        body: () =>
          translate(
            `
      <p class="lead">三圈环流在近地面形成<b>七个气压带</b>、<b>六个风带</b>，高低压相间分布，风带夹在气压带之间。</p>
      <div class="sec">气压带</div>
      <table class="belt">
        <tr><td><i class="dot" style="background:#4fa3ff"></i>赤道低气压带</td><td>受热上升</td><td>0°｜热力</td></tr>
        <tr><td><i class="dot" style="background:#ff6b57"></i>副热带高气压带</td><td>气流堆积下沉</td><td>30°｜动力</td></tr>
        <tr><td><i class="dot" style="background:#4fa3ff"></i>副极地低气压带</td><td>冷暖气流相遇抬升</td><td>60°｜动力</td></tr>
        <tr><td><i class="dot" style="background:#ff6b57"></i>极地高气压带</td><td>冷却下沉</td><td>90°｜热力</td></tr>
      </table>
      <div class="sec">风带</div>
      <table class="belt">
        <tr><td><i class="dot" style="background:#ffb85a"></i>信风带</td><td>北半球东北风，南半球东南风</td><td>0–30°</td></tr>
        <tr><td><i class="dot" style="background:#5ad8ff"></i>盛行西风带</td><td>北半球西南风，南半球西北风</td><td>30–60°</td></tr>
        <tr><td><i class="dot" style="background:#c6bdff"></i>极地东风带</td><td>北半球东北风，南半球东南风</td><td>60–90°</td></tr>
      </table>
      <div class="rule" data-k="MNEMONIC" style="margin-top:16px"><p>赤低 · 副高 · 副低 · 极高<small>风从高压吹向低压，再按“北右南左”偏转。</small></p></div>`,
            [],
          ),
      },
      {
        t: translate("季节移动"),
        en: "Seasonal shift",
        mode: "globe",
        cells: 3,
        cam: [0, 5, 25],
        body: () =>
          translate(
            `
      <p class="lead">气压带和风带随<b>太阳直射点</b>的移动而移动：就北半球而言，大致<b>夏季北移、冬季南移</b>，移动幅度约 5～10 个纬度。</p>
      <div class="rng"><label>月份</label><input type="range" id="monR" min="1" max="12.99" step="0.01" value="{0}"><output id="monO">{1}</output></div>
      <div class="acts">{2}{3}{4}</div>
      <div class="sec">对气候的影响</div>
      <ul class="pts">
        <li><b>地中海气候</b>（约 30°–40° 大陆西岸）：夏季受<b>副热带高气压带</b>控制，炎热干燥；冬季受<b>西风带</b>控制，温和多雨。看左下角 38°N 的实时判断。</li>
        <li><b>热带草原气候</b>：赤道低气压带与信风带交替控制，干湿季分明。</li>
      </ul>`,
            [
              s.month,
              Ht[Math.floor(s.month - 1) % 12],
              H(
                "play",
                s.play ? translate("暂停") : translate("播放一年"),
                s.play ? "pause" : "play",
                s.play,
              ),
              H("mon:1.5", translate("1 月"), ""),
              H("mon:7.5", translate("7 月"), ""),
            ],
          ),
      },
      {
        t: translate("海陆分布与季风"),
        en: "Land–sea contrast & monsoon",
        mode: "globe",
        cells: 3,
        field: "real",
        cam: [22.9, 12.2, -2],
        enter() {
          s.month = 1.5;
        },
        body: () =>
          translate(
            `
      <p class="lead">真实的地球表面海陆相间。陆地<b>冬冷夏热</b>、海洋冬暖夏凉，气压带被切断成一个个<b>高、低压中心</b>，季风也由此产生。地球上显示的是 NCEP 再分析资料 <b>1991–2020 年</b>的月平均近地面风和海平面气压。</p>
      <div class="rng"><label>月份</label><input type="range" id="monR" min="1" max="12.99" step="0.01" value="{0}"><output id="monO">{1}</output></div>
      <div class="acts">{2}{3}{4}</div>
      <div class="sec">1 月 · 北半球冬季</div>
      <ul class="pts"><li>亚欧大陆冷却，形成强大的<b>亚洲高压</b>（蒙古—西伯利亚高压），把<b>副极地低气压带</b>切断，只在海洋上保留<b>阿留申低压</b>和<b>冰岛低压</b>。</li><li>我国东部吹<b>西北季风</b>，寒冷干燥；南亚吹<b>东北季风</b>。</li></ul>
      <div class="sec">7 月 · 北半球夏季</div>
      <ul class="pts"><li>亚欧大陆受热，形成<b>亚洲低压</b>（印度低压），把<b>副热带高气压带</b>切断，只在海洋上保留<b>夏威夷高压</b>和<b>亚速尔高压</b>。</li><li>我国东部吹<b>东南季风</b>，高温多雨；南亚吹<b>西南季风</b>——南半球的东南信风越过赤道后向右偏转而成。</li></ul>
      <div class="rule" data-k="COMPARE"><p>东亚季风：海陆热力性质差异<small>南亚季风：海陆热力性质差异 + 气压带、风带的季节移动</small></p></div>
      <div class="note">在右下“显示设置”里切回<b>理想模型</b>对比：真实大气中，只有海洋广阔的南半球，气压带才大致呈带状分布。</div>`,
            [
              s.month,
              We(s.month),
              H("mon:1.5", translate("1 月"), ""),
              H("mon:7.5", translate("7 月"), ""),
              H(
                "play",
                s.play ? translate("暂停") : translate("播放一年"),
                s.play ? "pause" : "play",
                s.play,
              ),
            ],
          ),
      },
      {
        t: translate("随堂检测"),
        en: "Quiz",
        mode: "globe",
        cells: 3,
        cam: [0, 4, 26],
        enter() {
          Ve();
        },
        body: () => Ga(),
      },
    ],
    Ia = [
      [
        translate("热力环流中，近地面受热地区形成："),
        [
          translate("低压"),
          translate("高压"),
          translate("与周围相等"),
          translate("无法判断"),
        ],
        translate("受热空气膨胀上升，近地面空气减少，形成低压。"),
      ],
      [
        translate("某地近地面为高压，其上空为："),
        [
          translate("低压"),
          translate("高压"),
          translate("与近地面相同"),
          translate("无气压"),
        ],
        translate("同一地点近地面与高空的气压性质相反。"),
      ],
      [
        translate("下列关于气压的说法，正确的是："),
        [
          translate("同一地点近地面气压总是高于高空"),
          translate("近地面低压处的气压一定低于其上空的高压"),
          translate("等压面上凸处为低压"),
          translate("空气总是由低压流向高压"),
        ],
        translate("气压随高度升高而降低，所谓高压、低压是与同一水平面比较。"),
      ],
      [
        translate("白天滨海地区近地面的风向是："),
        [
          translate("由海洋吹向陆地"),
          translate("由陆地吹向海洋"),
          translate("沿海岸线吹"),
          translate("静风"),
        ],
        translate("白天陆地升温快、形成低压，吹海风。"),
      ],
      [
        translate("夜晚山谷中盛行："),
        [
          translate("山风，冷空气沿山坡下滑"),
          translate("谷风，空气沿山坡上升"),
          translate("海风"),
          translate("信风"),
        ],
        translate("夜晚山坡降温快，冷空气沿坡下滑。"),
      ],
      [
        translate("城市热岛环流中，近地面风向是："),
        [
          translate("由郊区吹向市区"),
          translate("由市区吹向郊区"),
          translate("始终由北向南"),
          translate("没有固定方向"),
        ],
        translate("市区气温高、近地面低压，郊区空气流入市区。"),
      ],
      [
        translate("北半球 0°～30° 近地面的风带是："),
        [
          translate("东北信风带"),
          translate("东南信风带"),
          translate("盛行西风带"),
          translate("极地东风带"),
        ],
        translate("由副热带高压吹向赤道低压，北半球向右偏成东北风。"),
      ],
      [
        translate("副热带高气压带的成因是："),
        [
          translate("动力因素：高空气流堆积下沉"),
          translate("热力因素：地面冷却"),
          translate("地形抬升"),
          translate("海陆热力差异"),
        ],
        translate("赤道上空流向极地的气流在 30° 附近偏转、堆积下沉。"),
      ],
      [
        translate("7 月份，全球气压带、风带总体："),
        [
          translate("向北移动"),
          translate("向南移动"),
          translate("位置不变"),
          translate("向东移动"),
        ],
        translate("北半球夏季太阳直射点北移，气压带风带随之北移。"),
      ],
      [
        translate("南半球盛行西风的风向是："),
        [
          translate("西北风"),
          translate("西南风"),
          translate("东南风"),
          translate("东北风"),
        ],
        translate("由副热带高压吹向副极地低压（向南），南半球向左偏成西北风。"),
      ],
      [
        translate("1 月份，切断北半球副极地低气压带的是："),
        [
          translate("亚洲高压（蒙古—西伯利亚高压）"),
          translate("亚洲低压（印度低压）"),
          translate("夏威夷高压"),
          translate("阿留申低压"),
        ],
        translate(
          "冬季亚欧大陆冷却形成高压，副极地低气压带只在海洋上保留阿留申低压和冰岛低压。",
        ),
      ],
      [
        translate("我国东部地区夏季盛行："),
        [
          translate("东南季风"),
          translate("西北季风"),
          translate("东北信风"),
          translate("盛行西风"),
        ],
        translate("夏季亚洲大陆形成低压，风从太平洋上的高压吹向大陆。"),
      ],
      [
        translate("南亚夏季西南季风的直接来源是："),
        [
          translate("南半球东南信风越过赤道后右偏"),
          translate("北半球东北信风增强"),
          translate("盛行西风带南移"),
          translate("亚洲高压向南扩展"),
        ],
        translate(
          "气压带风带北移，东南信风越过赤道，受北半球地转偏向力影响右偏成西南风。",
        ),
      ],
    ],
    He = (t) => {
      for (let e = t.length - 1; e > 0; e--) {
        const o = (Math.random() * (e + 1)) | 0;
        [t[e], t[o]] = [t[o], t[e]];
      }
      return t;
    };
  function Ve() {
    s.quiz = {
      list: He(
        Ia.map(([t, e, o]) => ({
          q: t,
          ans: e[0],
          opts: He(e.slice()),
          why: o,
        })),
      ),
      i: 0,
      score: 0,
      picked: null,
    };
  }
  function Ga() {
    const t = s.quiz;
    if (!t) return "";
    if (t.i >= t.list.length) {
      const n = t.score / t.list.length;
      return `<div class="score"><b>${t.score}/${t.list.length}</b><span>${n === 1 ? translate("全对！大气环流已经掌握得很扎实。") : n >= 0.6 ? translate("不错，回看错题对应的章节巩固一下。") : translate("建议从“热力环流原理”开始再复习一遍。")}</span></div>
      <div class="acts">${H("quizRestart", translate("再测一次"), "rot", !1, "pri")}</div>`;
    }
    const e = t.list[t.i],
      o = t.picked != null;
    return translate(
      `<div class="qcard"><div class="qn">QUESTION {0} / {1} · 得分 {2}</div>
    <h3>{3}</h3>
    <div class="opts">{4}</div>
    {5}
  </div>
  <div class="acts" style="margin-top:14px">{6}</div>`,
      [
        String(t.i + 1).padStart(2, "0"),
        String(t.list.length).padStart(2, "0"),
        t.score,
        e.q,
        e.opts
          .map(
            (n, l) =>
              `<button class="opt ${o && n === e.ans ? "ok" : ""} ${o && l === t.picked && n !== e.ans ? "bad" : ""}" data-act="ans:${l}" ${o ? "disabled" : ""}>${n}</button>`,
          )
          .join(""),
        o
          ? `<div class="fb"><b class="${e.opts[t.picked] === e.ans ? "ok" : "bad"}">${e.opts[t.picked] === e.ans ? translate("回答正确") : translate("答案：") + e.ans}</b> —— ${e.why}</div>`
          : "",
        o
          ? H(
              "quizNext",
              t.i + 1 < t.list.length
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
  const Ha = [
      ["particles", translate("粒子")],
      ["iso", translate("等压面")],
      ["arrows", translate("环流箭头")],
      ["plabels", translate("气压标注")],
      ["temp", translate("温度着色")],
    ],
    Va = [
      ["winds", translate("地面风")],
      ["curtain", translate("环流剖面")],
      ["belts", translate("气压带")],
      ["grid", translate("经纬网")],
      ["clouds", translate("云层")],
      ["labels", translate("标注")],
      ["rotate", translate("自动旋转")],
    ];
  function qe() {
    const t = s.mode === "2d";
    x("#viewBody").innerHTML =
      (t
        ? ""
        : translate(
            '<div class="seg" style="margin-bottom:10px"><button data-f="ideal" class="{0}">理想模型</button><button data-f="real" class="{1}">真实气候 · NCEP</button></div>',
            [s.field === "ideal" ? "on" : "", s.field === "real" ? "on" : ""],
          )) +
      `<div class="rng"><label>${t ? translate("冷热差异") : translate("流速")}</label><input type="range" id="kR" min="0.3" max="1.8" step="0.05" value="${t ? s.strength : s.speed}"><output id="kO">${(t ? s.strength : s.speed).toFixed(2)}×</output></div>
    <div class="tgs">${(t ? Ha : Va).map(([e, o]) => `<button class="tg${s[e] ? " on" : ""}" data-k="${e}">${o}</button>`).join("")}</div>`;
  }
  function Kt() {
    const t = wt[s.ch];
    x("#lesson").innerHTML =
      `<div class="lh"><span class="no">${String(s.ch).padStart(2, "0")}</span><div><h2>${t.t}</h2><em>${t.en}</em></div></div>` +
      t.body();
    const e = x("#fxR");
    e &&
      (e.oninput = () => {
        ((s.fx = +e.value),
          (x("#fxO").textContent =
            (Math.abs(s.fx - 0.5) * 40).toFixed(1) + " km"),
          (y.E = y.R = 0));
      });
    const o = x("#monR");
    o &&
      (o.oninput = () => {
        ((s.month = +o.value), (s.play = !1), _e());
      });
  }
  function _e() {
    const t = x("#monR");
    t && document.activeElement !== t && (t.value = s.month);
    const e = x("#monO");
    e && (e.textContent = Ht[Math.floor(s.month - 1) % 12]);
  }
  function vt(t) {
    t = S(t, 0, wt.length - 1);
    const e = wt[t],
      o = s.mode,
      n = s.scn;
    ((s.ch = t),
      (s.mode = e.mode),
      (s.auto = !1),
      (s.play = !1),
      (s.quiz = null),
      (ft = 0),
      e.mode === "2d"
        ? ((s.scn = e.scn), (s.day = !0), s.scn !== "basic" && (s.step = 4))
        : ((s.cells = e.cells),
          (s.field = e.field || "ideal"),
          e.cam && _a(e.cam)),
      t === 8 && (s.month = 7.5),
      (s.labels = t !== 10),
      e.enter && e.enter(),
      (ht.style.display = s.mode === "2d" ? "block" : "none"),
      (te.style.display = s.mode === "globe" ? "block" : "none"),
      s.mode === "2d" && (n !== s.scn || o !== "2d") && (Xt(), Jt()),
      qa(),
      Dt.classList.toggle("on", (s.mode === "2d" && s.scn === "city") || Ft()),
      qe(),
      Kt(),
      _t(),
      Vt(),
      Qe(),
      document
        .querySelectorAll(".ni")
        .forEach((r) => r.classList.toggle("on", +r.dataset.i === t)),
      document.querySelectorAll("#prog i").forEach((r, c) => {
        r.className = c < t ? "on" : c === t ? "cur" : "";
      }));
    const l = x("#chapter");
    ((l.querySelector(".n").innerHTML =
      `CHAPTER ${String(t).padStart(2, "0")} <span>/ ${String(wt.length - 1).padStart(2, "0")}</span>`),
      (l.querySelector("h1").textContent = e.t),
      (l.querySelector("p").textContent = e.en),
      l.classList.remove("anim"),
      l.offsetWidth,
      l.classList.add("anim"),
      (x("#lesson").scrollTop = 0),
      history.replaceState(null, "", "#" + t));
  }
  function qa() {
    if (s.mode === "2d") {
      const t = J(),
        e = s.scn === "basic";
      ((u.sg = t.sgn()),
        (u.amp = u.D = e && s.step < 2 ? 0 : 1),
        (u.h = e && s.step < 4 ? 0 : 1),
        (u.lab = e && s.step < 3 ? 0 : 1),
        (u.dn = (s.scn === "sea" || s.scn === "valley") && !s.day ? 0 : 1));
      for (let o = 0; o < 90; o++) ge(1 / 30);
    } else {
      ((u.beltA = s.belts ? (s.ch === 6 ? 0.16 : 0.3) : 0),
        (u.shift = s.ch === 8 && s.cells === 3 ? Nt(s.month) * 0.3 : 0),
        (u.real = ct() && $.ready() ? 1 : 0),
        Ee(),
        yt.clear(),
        Mt.clear());
      for (let t = 0; t < 45; t++) (Fe(1 / 30), Ue(1 / 30));
    }
  }
  let dt = null;
  function _a(t) {
    dt = {
      p0: X.position.clone(),
      p1: new f.Vector3(...t),
      s: performance.now(),
      d: 1400,
    };
  }
  (at.addEventListener("start", () => {
    dt = null;
  }),
    x("#lesson").addEventListener("click", (t) => {
      const e = t.target.closest("[data-act]");
      if (!e) return;
      const [o, n] = e.dataset.act.split(":");
      switch (o) {
        case "go":
          vt(+n);
          return;
        case "step":
          ((s.step = +n), (s.auto = !1));
          break;
        case "auto":
          ((s.auto = !s.auto), (ft = 0));
          break;
        case "swapHot":
          s.hotA = !s.hotA;
          break;
        case "smoke":
          ((s.smoke = !s.smoke), (y.E = y.R = 0));
          break;
        case "fx":
          ((s.fx = +n), (y.E = y.R = 0));
          break;
        case "day":
          ((s.day = n === "1"), (s.auto = !1));
          break;
        case "cells":
          ((s.cells = s.cells === 3 ? 1 : 3), _t(), Vt());
          break;
        case "play":
          s.play = !s.play;
          break;
        case "mon":
          ((s.month = +n), (s.play = !1));
          break;
        case "ans": {
          const l = s.quiz;
          if (l.picked != null) return;
          ((l.picked = +n),
            l.list[l.i].opts[l.picked] === l.list[l.i].ans && l.score++);
          break;
        }
        case "quizNext":
          (s.quiz.i++, (s.quiz.picked = null));
          break;
        case "quizRestart":
          Ve();
          break;
      }
      Kt();
    }),
    x("#viewBody").addEventListener("click", (t) => {
      const e = t.target.closest("[data-f]");
      if (e) {
        ((s.field = e.dataset.f), qe(), Vt(), _t());
        return;
      }
      const o = t.target.closest(".tg");
      o &&
        ((s[o.dataset.k] = !s[o.dataset.k]),
        o.classList.toggle("on", s[o.dataset.k]),
        s.mode === "globe" && Vt(),
        _t());
    }),
    x("#viewBody").addEventListener("input", (t) => {
      if (t.target.id !== "kR") return;
      const e = +t.target.value;
      (s.mode === "2d" ? (s.strength = e) : (s.speed = e),
        (x("#kO").textContent = e.toFixed(2) + "×"));
    }),
    (x("#nav").innerHTML =
      translate('<div class="navh">THERMAL · 热力环流</div>') +
      wt
        .map(
          (t, e) =>
            (e === 5
              ? translate('<div class="navh">GLOBAL · 全球大气环流</div>')
              : e === 10
                ? translate('<div class="navh">REVIEW · 复习</div>')
                : "") +
            `<button class="ni" data-i="${e}"><em>${String(e).padStart(2, "0")}</em><b>${t.t}</b><small>${t.en}</small></button>`,
        )
        .join("") +
      translate(
        '<div class="navf"><kbd>←</kbd> <kbd>→</kbd> 切换章节<br><kbd>F</kbd> 全屏</div>',
      )),
    x("#nav").addEventListener("click", (t) => {
      const e = t.target.closest(".ni");
      e && vt(+e.dataset.i);
    }),
    (x("#prog").innerHTML = wt.map(() => "<i></i>").join("")),
    (x("#bPrev").onclick = () => vt(s.ch - 1)),
    (x("#bNext").onclick = () => vt(s.ch + 1)));
  const Ke = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen().catch(() => {});
  ((x("#bFull").onclick = Ke),
    addEventListener("keydown", (t) => {
      t.target.tagName !== "INPUT" &&
        (t.key === "ArrowRight"
          ? vt(s.ch + 1)
          : t.key === "ArrowLeft"
            ? vt(s.ch - 1)
            : (t.key === "f" || t.key === "F") && Ke());
    }));
  function Qe() {
    const t = z.getBoundingClientRect();
    t.width &&
      (pt.setSize(t.width, t.height, !1),
      (X.aspect = t.width / t.height),
      X.updateProjectionMatrix(),
      s.mode === "2d" &&
        (Math.round(t.width) !== Math.round(I) ||
          Math.round(t.height) !== Math.round(A)) &&
        (Xt(), Jt()));
  }
  new ResizeObserver(Qe).observe(z);
  let Je = performance.now();
  function Xe(t) {
    requestAnimationFrame(Xe);
    const e = S((t - Je) / 1e3, 0, 0.05);
    if (((Je = t), dt)) {
      const o = S((t - dt.s) / dt.d, 0, 1),
        n = o < 0.5 ? 4 * o * o * o : 1 - Math.pow(-2 * o + 2, 3) / 2;
      (X.position.lerpVectors(dt.p0, dt.p1, n), o >= 1 && (dt = null));
    }
    s.mode === "2d" ? ba(e, t) : Da(e);
  }
  ($.load(), Xt(), Jt());
  {
    const t = parseInt(location.hash.slice(1), 10);
    vt(isNaN(t) ? 0 : t);
  }
  requestAnimationFrame(Xe);
}
function atmosLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("大气环流粒子课堂")), ws());
    }, []),
    jsxRuntime.jsx(jsxRuntime.Fragment, {
      children: jsxRuntime.jsxs("div", {
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
                        r: "11",
                        stroke: "#d8b26a",
                        strokeOpacity: ".35",
                      }),
                      jsxRuntime.jsx("path", {
                        d: "M6 16c3-6 7-6 10 0s7 6 10 0",
                        stroke: "#d8b26a",
                        strokeWidth: "1.5",
                      }),
                      jsxRuntime.jsx("path", {
                        d: "M8 10c2.5-2.5 5.5-2.5 8 0M16 22c2.5 2.5 5.5 2.5 8 0",
                        stroke: "#72c4ff",
                        strokeWidth: "1.2",
                      }),
                    ],
                  }),
                  jsxRuntime.jsxs("div", {
                    children: [
                      jsxRuntime.jsxs("b", {
                        children: [
                          "ATMOS",
                          jsxRuntime.jsx("i", {
                            children: "·FLOW",
                          }),
                        ],
                      }),
                      jsxRuntime.jsx("span", {
                        children: translate("大气环流 · 粒子动画演示"),
                      }),
                    ],
                  }),
                ],
              }),
              jsxRuntime.jsx("div", {
                className: "prog",
                id: "prog",
              }),
              jsxRuntime.jsx(Ja, {}),
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
              jsxRuntime.jsx("canvas", {
                id: "c3",
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
              }),
              jsxRuntime.jsx("div", {
                id: "legend",
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
                    id: "viewBody",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  );
}
export { atmosLabPage as default };
