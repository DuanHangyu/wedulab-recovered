// Recovered from public deployment: Page-DtRXWW06.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Sa } from "../../components/LanguageSwitcher.js";
import { T as wa, O as Ta } from "../../vendor/OrbitControls-D-zZTbsE.js";
import {
  t as La,
  a as ka,
  b as Pa,
  c as ja,
  d as Ca,
} from "../../vendor/earth_clouds_1024-Dm-FkLh-.js";
import { t as Na } from "../../vendor/earth_bm_07-CEsBUeyA.js";
const i = {
  ...wa,
  OrbitControls: Ta,
};
function Ra() {
  const v = (t) => document.querySelector(t),
    ot = (t, n, a) => Math.max(n, Math.min(a, t)),
    u = Math.PI / 180,
    w = 23.44,
    At = v("#stage"),
    zt = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Hn(t) {
    t = ot(Math.round(t), 1, 365);
    let n = 0;
    for (; t > zt[n];) ((t -= zt[n]), n++);
    return [n + 1, t];
  }
  const G = (t) => {
      const [n, a] = Hn(t);
      return translate("{0}月{1}日", [n, a]);
    },
    T = (t) => w * Math.sin((2 * Math.PI * (t - 80)) / 365.25);
  function K(t, n) {
    const a = -Math.tan(ot(t, -89.99, 89.99) * u) * Math.tan(n * u);
    return a <= -1 ? 24 : a >= 1 ? 0 : (2 * Math.acos(a)) / u / 15;
  }
  const bt = (t, n) => 90 - Math.abs(t - n),
    Wn = (t) => {
      const n = Math.abs(t),
        a = Math.floor(n + 1e-9),
        l = Math.round((n - a) * 60);
      return l === 60 ? `${a + 1}°` : `${a}°${String(l).padStart(2, "0")}′`;
    },
    N = (t) => (Math.abs(t) < 0.05 ? "0°" : `${Wn(t)}${t > 0 ? "N" : "S"}`),
    U = (t) => {
      t = ((t % 24) + 24) % 24;
      const n = Math.floor(t),
        a = Math.floor((t - n) * 60);
      return `${String(n).padStart(2, "0")}:${String(a).padStart(2, "0")}`;
    },
    Vt = (t) =>
      translate("{0} 时 {1} 分", [
        Math.floor(t),
        String(Math.round((t - Math.floor(t)) * 60) % 60).padStart(2, "0"),
      ]),
    qt = [
      [80, translate("春分")],
      [173, translate("夏至")],
      [266, translate("秋分")],
      [356, translate("冬至")],
    ],
    ue = [
      {
        name: translate("北京"),
        lat: 39.9,
        lon: 116.4,
      },
      {
        name: translate("伦敦"),
        lat: 51.5,
        lon: -0.1,
      },
      {
        name: translate("纽约"),
        lat: 40.7,
        lon: -74,
      },
    ],
    Ut = [
      [translate("北京"), 39.9],
      [translate("哈尔滨"), 45.8],
      [translate("广州"), 23.1],
      [translate("新加坡"), 1.3],
      [translate("悉尼"), -33.9],
    ],
    o = {
      ch: null,
      scene: "orbit",
      doy: 173,
      bj: 12,
      lat: 39.9,
      lt: 12,
      play: !1,
      spin: !1,
      polar: 0,
      city: 0,
      labels: !0,
      grid: !0,
      rotate: !1,
      quiz: null,
    },
    _t = v("#c3"),
    $t = v("#c2"),
    St = new i.WebGLRenderer({
      canvas: _t,
      antialias: !0,
      alpha: !0,
    });
  (St.setPixelRatio(Math.min(devicePixelRatio, 2)),
    (St.outputEncoding = i.sRGBEncoding));
  const R = new i.PerspectiveCamera(36, 1, 0.1, 2e3);
  R.position.set(0, 30, 60);
  const it = new i.OrbitControls(R, _t);
  ((it.enableDamping = !0),
    (it.dampingFactor = 0.07),
    (it.enablePan = !1),
    (it.autoRotateSpeed = 0.5));
  const z = new i.Scene(),
    _ = new i.Scene(),
    D = (t, n, a) =>
      new i.Vector3(
        a * Math.cos(t * u) * Math.sin(n * u),
        a * Math.sin(t * u),
        a * Math.cos(t * u) * Math.cos(n * u),
      ),
    He = {
      uT: {
        value: 0,
      },
      uPR: {
        value: Math.min(devicePixelRatio, 2),
      },
    },
    We = (() => {
      const a = [],
        l = [],
        s = [],
        r = [],
        d = () => {
          const S = Math.random();
          return S < 0.14
            ? [0.72, 0.82, 1]
            : S < 0.24
              ? [1, 0.86, 0.68]
              : S < 0.3
                ? [1, 0.72, 0.6]
                : [0.94, 0.95, 1];
        },
        p = (S, k, f) => {
          (a.push(S.x, S.y, S.z),
            l.push(...k),
            s.push(f),
            r.push(Math.random()));
        };
      for (let S = 0; S < 2600; S++) {
        const k = Math.random() * 2 - 1,
          f = Math.random() * Math.PI * 2,
          j = Math.sqrt(1 - k * k),
          P = new i.Vector3(j * Math.cos(f), k, j * Math.sin(f)).multiplyScalar(
            600,
          ),
          $ = Math.pow(Math.random(), 4.2);
        p(
          P,
          d().map((C) => C * (0.35 + 0.65 * $ + 0.25)),
          1.1 + $ * 3.2,
        );
      }
      const m = new i.Vector3(0.35, 0.86, -0.37).normalize(),
        g = new i.Vector3(1, 0, 0).cross(m).normalize(),
        M = m.clone().cross(g);
      for (let S = 0; S < 7e3; S++) {
        const k = Math.random() * Math.PI * 2,
          f = (Math.random() + Math.random() + Math.random() - 1.5) * 0.16,
          j = 0.6 + 0.4 * Math.sin(k * 3 + 1.2) * Math.sin(k * 7),
          P = g
            .clone()
            .multiplyScalar(Math.cos(k))
            .add(M.clone().multiplyScalar(Math.sin(k)))
            .add(m.clone().multiplyScalar(f))
            .normalize()
            .multiplyScalar(600),
          $ = Math.random() < 0.5 ? [0.78, 0.84, 1] : [1, 0.9, 0.78];
        p(
          P,
          $.map((C) => C * (0.1 + 0.22 * j * Math.random())),
          0.8 + Math.random() * 1.1,
        );
      }
      const V = new i.BufferGeometry();
      return (
        V.setAttribute("position", new i.Float32BufferAttribute(a, 3)),
        V.setAttribute("color", new i.Float32BufferAttribute(l, 3)),
        V.setAttribute("size", new i.Float32BufferAttribute(s, 1)),
        V.setAttribute("ph", new i.Float32BufferAttribute(r, 1)),
        V
      );
    })(),
    qe = new i.ShaderMaterial({
      uniforms: He,
      transparent: !0,
      depthWrite: !1,
      blending: i.AdditiveBlending,
      vertexShader: `attribute float size;attribute float ph;attribute vec3 color;uniform float uT,uPR;varying vec3 vC;
      void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;
      float tw=.78+.22*sin(uT*(.6+ph*2.4)+ph*40.);vC=color*tw;gl_PointSize=size*uPR;}`,
      fragmentShader: `varying vec3 vC;void main(){float r=length(gl_PointCoord-.5)*2.;
      float a=exp(-r*r*4.)+.25*exp(-r*r*.9);if(r>1.)discard;gl_FragColor=vec4(vC*a,1.);}`,
    });
  (z.add(new i.Points(We, qe)), _.add(new i.Points(We, qe)));
  const me = new i.LoadingManager(),
    qn = new i.TextureLoader(me),
    Un = St.capabilities.getMaxAnisotropy(),
    wt = (t, n) => {
      const a = qn.load(t);
      return (n && (a.encoding = i.sRGBEncoding), (a.anisotropy = Un), a);
    },
    Yt = {
      mapJul: {
        value: wt(Na, !0),
      },
      nightMap: {
        value: wt(ja, !0),
      },
      sunView: {
        value: new i.Vector4(0, 0, 1, 0),
      },
      season: {
        value: 0.5,
      },
    },
    be = new i.MeshPhongMaterial({
      map: wt(Pa, !0),
      normalMap: wt(ka),
      normalScale: new i.Vector2(0.85, -0.85),
      specularMap: wt(La),
      specular: new i.Color(2371644),
      shininess: 42,
    });
  be.onBeforeCompile = (t) => {
    (Object.assign(t.uniforms, Yt),
      (t.fragmentShader = t.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
uniform sampler2D mapJul;
uniform sampler2D nightMap;
uniform vec4 sunView;
uniform float season;`,
        )
        .replace(
          "#include <map_fragment>",
          "diffuseColor *= mapTexelToLinear(mix(texture2D(map, vUv), texture2D(mapJul, vUv), season));",
        )
        .replace(
          "#include <output_fragment>",
          `vec3 gN = normalize(vNormal);
        vec3 Ls = normalize(sunView.w > .5 ? sunView.xyz + vViewPosition : sunView.xyz);
        float sunK = dot(gN, Ls);
        float nightK = 1.0 - smoothstep(-0.2, 0.08, sunK);
        vec3 city = texture2D(nightMap, vUv).rgb;
        outgoingLight += diffuseColor.rgb * vec3(.05, .08, .14) * nightK;
        outgoingLight += pow(city, vec3(1.35)) * vec3(1.0, 0.76, 0.42) * nightK * 2.4;
        float band = exp(-pow(sunK / .09, 2.));
        outgoingLight += vec3(1.0, 0.42, 0.16) * band * .16;
        float rim = pow(1.0 - max(dot(gN, normalize(vViewPosition)), 0.0), 3.0);
        vec3 haze = mix(vec3(1.0, 0.45, 0.2), vec3(0.3, 0.6, 1.0), smoothstep(-0.1, 0.4, sunK));
        outgoingLight += haze * rim * smoothstep(-0.35, 0.25, sunK) * 0.9;
        #include <output_fragment>`,
        )));
  };
  const Ue = new i.MeshLambertMaterial({
      map: wt(Ca, !0),
      transparent: !0,
      opacity: 0.42,
      depthWrite: !1,
    }),
    Jt = (t, n = 128, a = 96) =>
      new i.SphereGeometry(t, n, a).rotateY(-Math.PI / 2),
    _e = (t) =>
      new i.Mesh(
        new i.SphereGeometry(t * 1.16, 96, 64),
        new i.ShaderMaterial({
          uniforms: {
            sunDir: {
              value: new i.Vector3(1, 0, 0),
            },
          },
          side: i.BackSide,
          transparent: !0,
          blending: i.AdditiveBlending,
          depthWrite: !1,
          vertexShader:
            "varying vec3 vN;void main(){vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
          fragmentShader: `uniform vec3 sunDir;varying vec3 vN;void main(){
          float i=pow(max(0.,.64-dot(vN,vec3(0.,0.,1.))),2.4);
          float s=dot(normalize(vec3(vN.xy,0.)+1e-4),normalize(vec3(sunDir.xy,0.)+1e-4))*length(sunDir.xy)+sunDir.z*.35;
          float lit=smoothstep(-.2,.45,s),dusk=exp(-pow((s+.02)/.16,2.));
          vec3 c=mix(vec3(.34,.64,1.),vec3(1.,.5,.24),dusk*.75);
          gl_FragColor=vec4(c*i*(.03+.97*lit+.12*dusk),1.);}`,
        }),
      ),
    ft = (t, n) => new i.Line(new i.BufferGeometry().setFromPoints(t), n),
    lt = (t, n) => {
      const a = [];
      for (let l = 0; l <= n; l++) a.push(t(l / n));
      return a;
    };
  function ve(t, n, a) {
    const l = ft(
      t,
      new i.LineDashedMaterial({
        color: n,
        transparent: !0,
        opacity: a,
        dashSize: 0.2,
        gapSize: 0.14,
      }),
    );
    return (l.computeLineDistances(), l);
  }
  const Kt = (t, n = 256) => {
      const a = document.createElement("canvas");
      a.width = a.height = n;
      const l = a.getContext("2d"),
        s = n / 2,
        r = l.createRadialGradient(s, s, 0, s, s, s);
      for (const [d, p] of t) r.addColorStop(d, p);
      return (
        (l.fillStyle = r),
        l.fillRect(0, 0, n, n),
        new i.CanvasTexture(a)
      );
    },
    pt = (t, n, a = 1) => {
      const l = new i.Sprite(
        new i.SpriteMaterial({
          map: t,
          blending: i.AdditiveBlending,
          depthWrite: !1,
          transparent: !0,
          opacity: a,
        }),
      );
      return (l.scale.setScalar(n), l);
    },
    Ye = Kt([
      [0, "rgba(255,236,180,1)"],
      [0.16, "rgba(255,206,110,.62)"],
      [0.42, "rgba(255,150,60,.14)"],
      [1, "rgba(255,120,40,0)"],
    ]),
    Je = Kt([
      [0, "rgba(255,190,110,.5)"],
      [0.3, "rgba(255,140,70,.12)"],
      [1, "rgba(120,60,30,0)"],
    ]),
    Ke = (() => {
      const n = document.createElement("canvas");
      n.width = n.height = 512;
      const a = n.getContext("2d");
      (a.translate(512 / 2, 512 / 2), (a.globalCompositeOperation = "lighter"));
      for (let l = 0; l < 44; l++) {
        const s = Math.random() * Math.PI * 2,
          r = 512 * (0.18 + Math.pow(Math.random(), 2) * 0.32),
          d = 0.8 + Math.random() * 2.4,
          p = a.createLinearGradient(0, 0, r, 0);
        (p.addColorStop(0, "rgba(255,214,140,.5)"),
          p.addColorStop(1, "rgba(255,170,80,0)"),
          a.save(),
          a.rotate(s),
          (a.fillStyle = p),
          a.beginPath(),
          a.moveTo(0, -d),
          a.lineTo(r, 0),
          a.lineTo(0, d),
          a.fill(),
          a.restore());
      }
      return new i.CanvasTexture(n);
    })(),
    Xe = {
      uT: {
        value: 0,
      },
    },
    _n = new i.ShaderMaterial({
      uniforms: Xe,
      vertexShader:
        "varying vec3 vP;varying vec3 vN;void main(){vP=normalize(position);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: `uniform float uT;varying vec3 vP;varying vec3 vN;
      float h(vec3 p){p=fract(p*.3183099+.1);p*=17.;return fract(p.x*p.y*p.z*(p.x+p.y+p.z));}
      float n3(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
        return mix(mix(mix(h(i),h(i+vec3(1,0,0)),f.x),mix(h(i+vec3(0,1,0)),h(i+vec3(1,1,0)),f.x),f.y),
                   mix(mix(h(i+vec3(0,0,1)),h(i+vec3(1,0,1)),f.x),mix(h(i+vec3(0,1,1)),h(i+vec3(1,1,1)),f.x),f.y),f.z);}
      float fbm(vec3 p){float s=0.,a=.5;for(int k=0;k<5;k++){s+=a*n3(p);p=p*2.03+vec3(1.7,9.2,3.1);a*=.5;}return s;}
      void main(){float t=uT*.06;
        float n=fbm(vP*4.+vec3(t,-t*.7,t*.4));float m=fbm(vP*11.-vec3(t*1.6));
        float g=clamp(n*.75+m*.45-.25,0.,1.);
        float mu=max(dot(vN,vec3(0.,0.,1.)),0.);float limb=.38+.62*pow(mu,.5);
        vec3 c=mix(vec3(1.,.5,.12),vec3(1.,.95,.74),g)*limb*1.25;
        c+=vec3(1.,.62,.25)*pow(1.-mu,3.)*.55;
        gl_FragColor=vec4(c,1.);}`,
    }),
    X = 17,
    Xt = 2.1,
    E = 1.35;
  (z.add(new i.AmbientLight(4213344, 0.12)),
    z.add(new i.PointLight(16774111, 2.2, 0)));
  const Yn = new i.Mesh(new i.SphereGeometry(Xt, 96, 64), _n);
  (z.add(Yn), z.add(pt(Je, 46, 0.55)));
  const Qe = pt(Ke, 22, 0.75);
  z.add(Qe);
  const Jn = pt(Ye, 15);
  z.add(Jn);
  const Dt = (t) => (90 + ((t - 172.5) * 360) / 365.25) * u,
    Q = (t) => new i.Vector3(X * Math.sin(Dt(t)), 0, X * Math.cos(Dt(t))),
    Ze = {
      uE: {
        value: 0,
      },
    };
  {
    const t = lt(
        (a) =>
          new i.Vector3(
            X * Math.sin(a * 2 * Math.PI),
            0,
            X * Math.cos(a * 2 * Math.PI),
          ),
        720,
      ),
      n = new i.BufferGeometry().setFromPoints(t);
    (n.setAttribute(
      "a",
      new i.Float32BufferAttribute(
        t.map((a, l) => l / 720),
        1,
      ),
    ),
      z.add(
        new i.Line(
          n,
          new i.ShaderMaterial({
            uniforms: Ze,
            transparent: !0,
            depthWrite: !1,
            vertexShader:
              "attribute float a;varying float vA;void main(){vA=a;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
            fragmentShader: `uniform float uE;varying float vA;void main(){
            float d=fract(uE-vA);float tail=exp(-d*7.)*step(.0005,d);
            vec3 c=mix(vec3(.85,.7,.42),vec3(1.,.9,.66),tail);
            gl_FragColor=vec4(c,.32+.68*tail);}`,
          }),
        ),
      ));
  }
  const ge = [
      translate("春分"),
      translate("清明"),
      translate("谷雨"),
      translate("立夏"),
      translate("小满"),
      translate("芒种"),
      translate("夏至"),
      translate("小暑"),
      translate("大暑"),
      translate("立秋"),
      translate("处暑"),
      translate("白露"),
      translate("秋分"),
      translate("寒露"),
      translate("霜降"),
      translate("立冬"),
      translate("小雪"),
      translate("大雪"),
      translate("冬至"),
      translate("小寒"),
      translate("大寒"),
      translate("立春"),
      translate("雨水"),
      translate("惊蛰"),
    ],
    Qt = (t) => ((((80 + (t * 15 * 365.25) / 360 - 1) % 365) + 365) % 365) + 1,
    tn = (t) =>
      ge[
        Math.floor(((((((t - 80) * 360) / 365.25) % 360) + 360) % 360) / 15) %
          24
      ];
  {
    const t = new i.Mesh(
      new i.RingGeometry(Xt * 1.6, X * 1.16, 160, 1),
      new i.ShaderMaterial({
        transparent: !0,
        depthWrite: !1,
        side: i.DoubleSide,
        vertexShader:
          "varying vec2 vP;void main(){vP=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
        fragmentShader: `varying vec2 vP;void main(){float r=length(vP)/${X.toFixed(1)};
          float a=.05*smoothstep(1.16,.9,r)*smoothstep(.15,.5,r)+.05*exp(-pow((r-1.)/.012,2.));
          gl_FragColor=vec4(.45,.62,.85,a);}`,
      }),
    );
    ((t.rotation.x = -Math.PI / 2), z.add(t));
    const n = [];
    for (let r = 0; r < 24; r++) {
      const d = Dt(Qt(r)),
        p = r % 3 === 0,
        m = p ? 0.9 : 0.4;
      n.push(
        new i.Vector3((X - m) * Math.sin(d), 0, (X - m) * Math.cos(d)),
        new i.Vector3((X + m) * Math.sin(d), 0, (X + m) * Math.cos(d)),
      );
    }
    z.add(
      new i.LineSegments(
        new i.BufferGeometry().setFromPoints(n),
        new i.LineBasicMaterial({
          color: 14201450,
          transparent: !0,
          opacity: 0.5,
        }),
      ),
    );
    const a = Kt(
      [
        [0, "rgba(255,240,205,1)"],
        [0.25, "rgba(243,217,162,.8)"],
        [1, "rgba(216,178,106,0)"],
      ],
      64,
    );
    for (const [r] of qt) {
      const d = pt(a, 1.5);
      (d.position.copy(Q(r)), z.add(d));
    }
    const l = Dt(125),
      s = new i.Mesh(
        new i.ConeGeometry(0.3, 0.9, 16),
        new i.MeshBasicMaterial({
          color: 14201450,
        }),
      );
    (s.position.copy(Q(125)),
      s.quaternion.setFromUnitVectors(
        new i.Vector3(0, 1, 0),
        new i.Vector3(Math.cos(l), 0, -Math.sin(l)),
      ),
      z.add(s));
  }
  const ye = new i.Line(
    new i.BufferGeometry().setAttribute(
      "position",
      new i.Float32BufferAttribute(new Float32Array(6), 3),
    ),
    new i.LineDashedMaterial({
      color: 16762977,
      transparent: !0,
      opacity: 0.45,
      dashSize: 0.35,
      gapSize: 0.25,
    }),
  );
  z.add(ye);
  const ht = new i.Group();
  ((ht.rotation.z = w * u), z.add(ht));
  const Zt = new i.Group();
  (ht.add(Zt), Zt.add(new i.Mesh(Jt(E), be)));
  const en = new i.Mesh(Jt(E * 1.008, 64, 48), Ue);
  Zt.add(en);
  const nn = _e(E);
  (ht.add(nn),
    ht.add(
      ft(
        [new i.Vector3(0, -E * 1.8, 0), new i.Vector3(0, E * 1.8, 0)],
        new i.LineBasicMaterial({
          color: 16777215,
          transparent: !0,
          opacity: 0.85,
        }),
      ),
    ),
    ht.add(
      ve(
        [new i.Vector3(0, E * 1.8, 0), new i.Vector3(0, E * 3.4, 0)],
        16777215,
        0.5,
      ),
    ));
  const an = ft(
    lt(
      (t) =>
        new i.Vector3(
          E * 1.7 * Math.cos(t * 2 * Math.PI),
          0,
          E * 1.7 * Math.sin(t * 2 * Math.PI),
        ),
      96,
    ),
    new i.LineBasicMaterial({
      color: 7521535,
      transparent: !0,
      opacity: 0.8,
    }),
  );
  ht.add(an);
  const xe = ft(
    lt(
      (t) =>
        new i.Vector3(
          E * 1.7 * Math.cos(t * 2 * Math.PI),
          0,
          E * 1.7 * Math.sin(t * 2 * Math.PI),
        ),
      96,
    ),
    new i.LineBasicMaterial({
      color: 14201450,
      transparent: !0,
      opacity: 0.8,
    }),
  );
  z.add(xe);
  const y = 5;
  _.add(new i.HemisphereLight(9417952, 659480, 0.06));
  const on = new i.DirectionalLight(16774111, 1.75);
  _.add(on);
  const Tt = new i.Group();
  (_.add(Tt), Tt.add(new i.Mesh(Jt(y, 160, 112), be)));
  const Me = new i.Mesh(Jt(y * 1.006, 112, 80), Ue);
  ((Me.renderOrder = 2), Tt.add(Me));
  const ln = _e(y);
  _.add(ln);
  const te = new i.Group();
  Tt.add(te);
  for (let t = -60; t <= 60; t += 30)
    t &&
      te.add(
        ft(
          lt((n) => D(t, n * 360, y * 1.003), 180),
          new i.LineBasicMaterial({
            color: 12572911,
            transparent: !0,
            opacity: 0.16,
          }),
        ),
      );
  for (let t = 0; t < 360; t += 30)
    te.add(
      ft(
        lt((n) => D(-90 + n * 180, t, y * 1.003), 90),
        new i.LineBasicMaterial({
          color: 12572911,
          transparent: !0,
          opacity: t === 0 ? 0.4 : 0.14,
        }),
      ),
    );
  const Et = new i.Group();
  (_.add(Et),
    Et.add(
      ft(
        lt((t) => D(0, t * 360, y * 1.004), 180),
        new i.LineBasicMaterial({
          color: 14201450,
          transparent: !0,
          opacity: 0.85,
        }),
      ),
    ));
  for (const t of [w, -w])
    Et.add(
      ve(
        lt((n) => D(t, n * 360, y * 1.004), 180),
        16757596,
        0.75,
      ),
    );
  for (const t of [90 - w, w - 90])
    Et.add(
      ve(
        lt((n) => D(t, n * 360, y * 1.004), 120),
        7521535,
        0.7,
      ),
    );
  const Kn = Kt(
      [
        [0, "rgba(255,255,255,1)"],
        [0.2, "rgba(255,244,220,.9)"],
        [0.45, "rgba(255,210,140,.25)"],
        [1, "rgba(255,200,120,0)"],
      ],
      64,
    ),
    Se = new i.Group();
  Tt.add(Se);
  for (const t of ue) {
    const n = pt(Kn, 0.62);
    (n.position.copy(D(t.lat, t.lon, y * 1.012)), Se.add(n), (t.mesh = n));
  }
  const st = new i.Vector3(1, 0, 0),
    vt = new i.Group();
  _.add(vt);
  const sn = (() => {
    const t = [],
      n = [];
    for (let l = 0; l <= 240; l++) {
      const s = (l / 240) * Math.PI * 2,
        r = new i.Vector3(0, Math.cos(s), Math.sin(s)).multiplyScalar(
          y * 1.008,
        );
      (t.push(r), n.push(...(r.z >= 0 ? [1, 0.8, 0.38] : [0.72, 0.6, 1])));
    }
    const a = new i.BufferGeometry().setFromPoints(t);
    return (
      a.setAttribute("color", new i.Float32BufferAttribute(n, 3)),
      new i.Line(
        a,
        new i.LineBasicMaterial({
          vertexColors: !0,
          transparent: !0,
          opacity: 0.95,
          toneMapped: !1,
        }),
      )
    );
  })();
  vt.add(sn);
  const rn = {
      uT: {
        value: 0,
      },
    },
    Xn = new i.ShaderMaterial({
      uniforms: rn,
      transparent: !0,
      depthWrite: !1,
      blending: i.AdditiveBlending,
      vertexShader:
        "varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",
      fragmentShader: `uniform float uT;varying vec2 vUv;void main(){
      float p=pow(fract(vUv.y*2.2-uT*.55),10.);
      float a=(.28+1.1*p)*smoothstep(0.,.25,vUv.y);
      gl_FragColor=vec4(vec3(1.,.78,.38)*a,1.);}`,
    }),
    ee = new i.Group();
  vt.add(ee);
  {
    const t = y * 3.1,
      n = new i.MeshBasicMaterial({
        color: 16766090,
        toneMapped: !1,
      });
    for (let a = -3; a <= 3; a++) {
      const l = a * 1.45,
        s = Math.sqrt(y * y - l * l) + 0.42,
        r = t - s,
        d = new i.Mesh(new i.CylinderGeometry(0.035, 0.035, r, 8, 1, !0), Xn);
      ((d.rotation.z = Math.PI / 2),
        d.position.set((t + s) / 2, l, 0),
        ee.add(d));
      const p = new i.Mesh(new i.ConeGeometry(0.15, 0.4, 16), n);
      ((p.rotation.z = Math.PI / 2), p.position.set(s - 0.2, l, 0), ee.add(p));
    }
  }
  const we = new i.Mesh(
    new i.SphereGeometry(0.13, 16, 12),
    new i.MeshBasicMaterial({
      color: 16773576,
      toneMapped: !1,
    }),
  );
  (we.position.set(y * 1.01, 0, 0), vt.add(we));
  const Qn = [0, 0.5].map((t) => {
      const n = new i.Mesh(
        new i.RingGeometry(0.9, 1, 64),
        new i.MeshBasicMaterial({
          color: 16765562,
          transparent: !0,
          depthWrite: !1,
          side: i.DoubleSide,
          toneMapped: !1,
        }),
      );
      return (
        (n.rotation.y = Math.PI / 2),
        n.position.set(y * 1.012, 0, 0),
        (n.userData.ph = t),
        vt.add(n),
        n
      );
    }),
    Te = new i.Group();
  (Te.position.set(90, 0, 0),
    Te.add(pt(Je, 60, 0.5), pt(Ke, 30, 0.6), pt(Ye, 18)),
    vt.add(Te));
  const Gt = new i.Group();
  _.add(Gt);
  let ne = null,
    cn = null;
  function Zn() {
    const t = T(o.doy);
    (st.set(Math.cos(t * u), Math.sin(t * u), 0),
      on.position.copy(st).multiplyScalar(60),
      (vt.rotation.z = t * u),
      ta(),
      (ne = o.doy));
  }
  function ta() {
    for (; Gt.children.length;) Gt.children.pop().geometry.dispose();
    const t = o.lat;
    T(o.doy);
    const n = y * 1.012,
      a = [],
      l = [];
    for (let r = 0; r <= 360; r++) {
      const d = r,
        p = D(t, d, n);
      (p.dot(st) > 0 ? a : l).push({
        p,
        i: r,
      });
    }
    const s = (r, d) => {
      const p = [];
      let m = [];
      (r.forEach((g, M) => {
        (M && g.i !== r[M - 1].i + 1 && (p.push(m), (m = [])), m.push(g.p));
      }),
        m.length && p.push(m),
        p.length > 1 &&
          r[0].i === 0 &&
          r[r.length - 1].i === 360 &&
          (p[0] = p.pop().concat(p[0])));
      for (const g of p)
        g.length > 1 &&
          Gt.add(
            new i.Mesh(
              new i.TubeGeometry(
                new i.CatmullRomCurve3(g),
                g.length * 2,
                0.07,
                8,
                !1,
              ),
              new i.MeshBasicMaterial({
                color: d,
                toneMapped: !1,
              }),
            ),
          );
    };
    (s(a, 16762977), s(l, 4157400), (cn = t));
  }
  const Ot = new i.Group();
  _.add(Ot);
  {
    const t = lt((s) => {
      const r = (20 + s * 290) * u;
      return new i.Vector3(2.7 * Math.sin(r), y * 1.1, 2.7 * Math.cos(r));
    }, 60);
    Ot.add(
      new i.Mesh(
        new i.TubeGeometry(new i.CatmullRomCurve3(t), 80, 0.06, 8, !1),
        new i.MeshBasicMaterial({
          color: 15980962,
          toneMapped: !1,
        }),
      ),
    );
    const n = t[t.length - 1],
      a = n
        .clone()
        .sub(t[t.length - 3])
        .normalize(),
      l = new i.Mesh(
        new i.ConeGeometry(0.2, 0.55, 16),
        new i.MeshBasicMaterial({
          color: 15980962,
          toneMapped: !1,
        }),
      );
    (l.position.copy(n),
      l.quaternion.setFromUnitVectors(new i.Vector3(0, 1, 0), a),
      Ot.add(l),
      Ot.add(
        ft(
          [new i.Vector3(0, -y * 1.35, 0), new i.Vector3(0, y * 1.35, 0)],
          new i.LineBasicMaterial({
            color: 16777215,
            transparent: !0,
            opacity: 0.6,
          }),
        ),
      ));
  }
  const dn = [0, 30, 60, -30, -60].map((t) => {
      const n = new i.ArrowHelper(
        new i.Vector3(1, 0, 0),
        new i.Vector3(),
        1,
        15980962,
        0.35,
        0.22,
      );
      return (
        _.add(n),
        {
          la: t,
          a: n,
        }
      );
    }),
    fn = v("#labels");
  let Le = [];
  function L(t, n, a, l) {
    const s = document.createElement("div");
    ((s.className = "lb " + t),
      (s.innerHTML = `<span>${n}</span>`),
      fn.appendChild(s));
    const r = {
      el: s,
      getPos: a,
      test: l,
    };
    return (Le.push(r), r);
  }
  let rt = 0;
  const H = (t) =>
    t.clone().normalize().dot(R.position.clone().normalize()) > 0.1;
  function pn() {
    if (((fn.innerHTML = ""), (Le = []), !o.labels || o.scene === "noon"))
      return;
    const t = o.ch;
    if (o.scene === "orbit") {
      L("sun", translate("太阳"), () => new i.Vector3(0, Xt + 1.4, 0));
      for (const [n, a] of qt)
        L("gold", `${a}<small>${G(n)}</small>`, () =>
          Q(n)
            .multiplyScalar(1.13)
            .add(new i.Vector3(0, -1.1, 0)),
        );
      if (
        ((t === 3 || t === 0) &&
          (L("plain", translate("近日点 · 1月初"), () =>
            Q(3).multiplyScalar(0.8),
          ),
          L("plain", translate("远日点 · 7月初"), () =>
            Q(185).multiplyScalar(0.8),
          )),
        t === 7)
      )
        for (const n of [3, 9, 15, 21])
          L("term", `${ge[n]}<small>${G(Qt(n))}</small>`, () =>
            Q(Qt(n)).multiplyScalar(1.12),
          );
      (L("cyan", translate('地球<small id="eDate"></small>'), () =>
        Q(o.doy).add(new i.Vector3(0, E * 2.4, 0)),
      ),
        t === 3 &&
          (L("plain", translate("北极星方向"), () =>
            Q(o.doy).add(
              new i.Vector3(
                -Math.sin(w * u),
                Math.cos(w * u),
                0,
              ).multiplyScalar(E * 3.7),
            ),
          ),
          L(
            "plain",
            translate(
              '<i style="color:#72c4ff;font-style:normal">赤道面</i> 与 <i style="color:#f3d9a2;font-style:normal">黄道面</i> 夹角 23°26′',
            ),
            () => Q(o.doy).add(new i.Vector3(0, -E * 2.6, 0)),
          )));
    } else {
      if (
        (t !== 1 &&
          (L("gold", translate("赤道"), () => D(0, rt - 42, y * 1.02), H),
          L(
            "plain",
            translate("北回归线 23°26′N"),
            () => D(w, rt - 42, y * 1.02),
            H,
          ),
          L(
            "plain",
            translate("南回归线 23°26′S"),
            () => D(-w, rt - 42, y * 1.02),
            H,
          ),
          L(
            "plain",
            translate("北极圈 66°34′N"),
            () => D(90 - w, rt - 30, y * 1.02),
            H,
          ),
          L(
            "plain",
            translate("南极圈 66°34′S"),
            () => D(w - 90, rt - 30, y * 1.02),
            H,
          ),
          L(
            "sun",
            translate("太阳直射点"),
            () => st.clone().multiplyScalar(y * 1.12),
            H,
          ),
          L("sun", translate("太阳光线"), () =>
            st
              .clone()
              .multiplyScalar(y * 2.2)
              .add(new i.Vector3(0, y * 1.05, 0)),
          ),
          L("gold", translate("晨线"), () => hn(1), H),
          L("dusk", translate("昏线"), () => hn(-1), H),
          L("plain", translate("昼半球"), () =>
            st
              .clone()
              .add(R.position.clone().normalize().multiplyScalar(0.9))
              .normalize()
              .multiplyScalar(y * 1.01),
          ),
          L(
            "plain",
            translate("夜半球"),
            () =>
              st
                .clone()
                .negate()
                .add(R.position.clone().normalize().multiplyScalar(0.9))
                .normalize()
                .multiplyScalar(y * 1.01),
            H,
          )),
        t === 1)
      ) {
        L(
          "gold",
          translate("自西向东<small>北极上空看：逆时针</small>"),
          () => new i.Vector3(4.6, y * 1.1, 0),
        );
        for (const n of dn)
          L(
            "plain",
            `${n.la ? Math.abs(n.la) + "°" + (n.la > 0 ? "N" : "S") : translate("赤道")} · ${Math.round(1670 * Math.cos(n.la * u))} km/h`,
            () => D(n.la, rt + 32, y * 1.08),
            H,
          );
      }
      if (t === 2)
        for (const n of ue)
          n.lbl = L(
            "city",
            "",
            () => n.mesh.getWorldPosition(new i.Vector3()).multiplyScalar(1.06),
            H,
          );
      t === 5 &&
        L(
          "gold",
          '<b id="arcLbl" style="font-weight:600"></b>',
          () => D(o.lat, rt + 8, y * 1.1),
          H,
        );
    }
  }
  function hn(t) {
    const n = T(o.doy);
    return new i.Vector3(-Math.sin(n * u), Math.cos(n * u), 0)
      .multiplyScalar(Math.cos(1.1))
      .add(new i.Vector3(0, 0, t * Math.sin(1.1)))
      .multiplyScalar(y * 1.03);
  }
  const ae = new i.Vector3();
  function ea() {
    const t = At.getBoundingClientRect();
    for (const l of Le) {
      const s = l.getPos();
      ae.copy(s).project(R);
      const r = ae.z < 1 && (!l.test || l.test(s));
      ((l.el.style.opacity = r ? 1 : 0),
        (l.el.style.transform = `translate(${((ae.x + 1) / 2) * t.width}px,${((1 - ae.y) / 2) * t.height}px)`));
    }
    const n = v("#eDate");
    if ((n && (n.textContent = G(o.doy)), o.ch === 2)) {
      for (const l of ue)
        if (l.lbl) {
          const s = o.bj - 8 + l.lon / 15,
            r = l.mesh.getWorldPosition(new i.Vector3()).dot(st) > 0;
          ((l.lbl.el.className = "lb city " + (r ? "day" : "night")),
            (l.lbl.el.firstChild.innerHTML = translate(
              "{0}<small>{1} · 地方时 {2}</small>",
              [l.name, r ? translate("昼") : translate("夜"), U(s)],
            )));
        }
    }
    const a = v("#arcLbl");
    a &&
      (a.textContent = translate("{0} 昼弧 {1}°", [
        N(o.lat),
        Math.round(K(o.lat, T(o.doy)) * 15),
      ]));
  }
  const un = $t.getContext("2d");
  let ke = 0,
    Pe = 0;
  function na() {
    const t = At.getBoundingClientRect(),
      n = Math.min(devicePixelRatio, 2);
    ((ke = t.width),
      (Pe = t.height),
      ($t.width = ke * n),
      ($t.height = Pe * n),
      un.setTransform(n, 0, 0, n, 0, 0));
  }
  function aa(t, n, a, l, s = 8) {
    (t.beginPath(),
      t.moveTo(n, a),
      t.lineTo(n - Math.cos(l - 0.45) * s, a - Math.sin(l - 0.45) * s),
      t.lineTo(n - Math.cos(l + 0.45) * s, a - Math.sin(l + 0.45) * s),
      t.closePath(),
      t.fill());
  }
  function je(t, n, a, l, s, r) {
    ((t.fillStyle = "rgba(10,14,20,.55)"),
      (t.strokeStyle = "rgba(255,255,255,.09)"),
      (t.lineWidth = 1),
      t.beginPath(),
      t.rect(n + 0.5, a + 0.5, l, s),
      t.fill(),
      t.stroke(),
      (t.fillStyle = "#8d9199"),
      (t.font = "600 10px JetBrains Mono"),
      (t.textBaseline = "top"),
      t.fillText(r, n + 12, a + 10));
  }
  function oa() {
    const t = un,
      n = ke,
      a = Pe,
      l = T(o.doy),
      s = o.lat,
      r = bt(s, l);
    t.clearRect(0, 0, n, a);
    const d = a * 0.19,
      p = 14,
      m = (n - 3 * p) / 2,
      g = (a - d - 18) * 0.64,
      M = p,
      V = d;
    je(t, M, V, m, g, translate("CROSS-SECTION · 正午时刻的经线剖面"));
    const S = M + m * 0.42,
      k = V + g * 0.54,
      f = Math.min(m, g) * 0.33;
    (t.save(), t.beginPath(), t.rect(M, V, m, g), t.clip());
    for (let h = -4; h <= 4; h++) {
      const x = k + h * f * 0.26,
        B =
          Math.abs(x - k) < f
            ? S + Math.sqrt(f * f - (x - k) ** 2)
            : S - f * 1.3;
      ((t.strokeStyle = "rgba(255,200,97,.55)"),
        (t.lineWidth = 1.2),
        t.beginPath(),
        t.moveTo(M + m - 10, x),
        t.lineTo(B + 2, x),
        t.stroke(),
        (t.fillStyle = "rgba(255,200,97,.8)"),
        aa(t, B + 2, x, Math.PI, 7));
    }
    const j = t.createLinearGradient(S - f, 0, S + f, 0);
    (j.addColorStop(0, "#0b1b2c"),
      j.addColorStop(0.49, "#10263b"),
      j.addColorStop(0.51, "#2c6a8e"),
      j.addColorStop(1, "#4a8fb2"),
      (t.fillStyle = j),
      t.beginPath(),
      t.arc(S, k, f, 0, 7),
      t.fill(),
      (t.strokeStyle = "rgba(255,255,255,.25)"),
      (t.lineWidth = 1),
      t.stroke());
    const P = (h) => [S + f * Math.cos(h * u), k - f * Math.sin(h * u)],
      $ = (h, x, B, A) => {
        const [O, mt] = P(h - l),
          [pe, he] = P(180 - h - l);
        ((t.strokeStyle = x),
          t.setLineDash(B),
          (t.lineWidth = 1.3),
          t.beginPath(),
          t.moveTo(O, mt),
          t.lineTo(pe, he),
          t.stroke(),
          t.setLineDash([]),
          (t.fillStyle = x),
          (t.font = '500 11px "Noto Serif SC", serif'),
          (t.textBaseline = "middle"),
          (t.textAlign = "right"),
          t.fillText(A, pe - 6, he),
          (t.textAlign = "left"));
      };
    ($(0, "#d8b26a", [], translate("赤道")),
      $(w, "#ffb35c", [5, 4], translate("北回归线")),
      $(-w, "#ffb35c", [5, 4], translate("南回归线")),
      $(90 - w, "#72c4ff", [5, 4], translate("北极圈")),
      $(w - 90, "#72c4ff", [5, 4], translate("南极圈")));
    const [C, se] = P(90 - l),
      [$n, Dn] = P(-90 - l);
    ((t.strokeStyle = "rgba(255,255,255,.7)"),
      (t.lineWidth = 1.2),
      t.beginPath(),
      t.moveTo($n + ($n - S) * 0.18, Dn + (Dn - k) * 0.18),
      t.lineTo(C + (C - S) * 0.18, se + (se - k) * 0.18),
      t.stroke(),
      (t.fillStyle = "#fff"),
      (t.font = "700 12px JetBrains Mono"),
      t.fillText("N", C + (C - S) * 0.25 - 4, se + (se - k) * 0.25));
    const [En, Gn] = P(0);
    ((t.fillStyle = "#ffd27a"),
      t.beginPath(),
      t.arc(En, Gn, 4, 0, 7),
      t.fill(),
      (t.font = '600 11px "Noto Serif SC", serif'),
      t.fillText(
        translate("直射点 {0}", [N(l)]),
        En + 10,
        Gn + (s >= l ? 26 : -16),
      ));
    const nt = s - l,
      [Y, J] = P(nt),
      $e = -Math.sin(nt * u),
      De = -Math.cos(nt * u);
    ((t.strokeStyle = "#9be7b4"),
      (t.lineWidth = 1.6),
      t.beginPath(),
      t.moveTo(Y - $e * f * 0.55, J - De * f * 0.55),
      t.lineTo(Y + $e * f * 0.55, J + De * f * 0.55),
      t.stroke(),
      (t.fillStyle = "#9be7b4"),
      (t.font = '500 11px "Noto Serif SC", serif'),
      t.fillText(
        translate("地平面"),
        Y + $e * f * 0.58 + 4,
        J + De * f * 0.58,
      ));
    const va = Math.cos(nt * u),
      ga = -Math.sin(nt * u);
    if (
      ((t.strokeStyle = "rgba(155,231,180,.6)"),
      t.setLineDash([3, 3]),
      t.beginPath(),
      t.moveTo(Y, J),
      t.lineTo(Y + va * f * 0.4, J + ga * f * 0.4),
      t.stroke(),
      t.setLineDash([]),
      Math.abs(nt) < 90)
    ) {
      ((t.strokeStyle = "#ffc861"),
        (t.lineWidth = 2),
        t.beginPath(),
        t.moveTo(Y, J),
        t.lineTo(Y + f * 0.62, J),
        t.stroke());
      const h = 0,
        x = nt > 0 ? nt - 90 : nt + 90;
      ((t.strokeStyle = "#f3d9a2"),
        (t.lineWidth = 1.5),
        t.beginPath(),
        t.arc(Y, J, f * 0.26, -Math.max(h, x) * u, -Math.min(h, x) * u),
        t.stroke(),
        (t.fillStyle = "#f3d9a2"),
        (t.font = "700 13px JetBrains Mono"),
        t.fillText(
          `H=${r.toFixed(1)}°`,
          Y + f * 0.34,
          J + (nt > 0 ? f * 0.14 : -f * 0.14),
        ));
    }
    ((t.fillStyle = "#fff"),
      t.beginPath(),
      t.arc(Y, J, 4.5, 0, 7),
      t.fill(),
      (t.font = '600 12px "Noto Serif SC", serif'),
      (t.fillStyle = "#e8f3ec"),
      (t.textAlign = "right"),
      t.fillText(translate("观测点 {0}", [N(s)]), Y - 10, J - 14),
      (t.textAlign = "left"),
      t.restore());
    const Ee = p * 2 + m,
      Ge = d;
    je(t, Ee, Ge, m, g, translate("SKY PLAN · 太阳视运动（俯视）"));
    const W = Ee + m / 2,
      q = Ge + g * 0.54,
      at = Math.min(m, g) * 0.36;
    ((t.fillStyle = "rgba(40,70,50,.25)"),
      t.beginPath(),
      t.arc(W, q, at, 0, 7),
      t.fill(),
      (t.strokeStyle = "rgba(255,255,255,.3)"),
      (t.lineWidth = 1.2),
      t.stroke());
    for (const h of [1 / 3, 2 / 3])
      ((t.strokeStyle = "rgba(255,255,255,.08)"),
        t.beginPath(),
        t.arc(W, q, at * h, 0, 7),
        t.stroke());
    ((t.fillStyle = "#cfd6de"),
      (t.font = '700 12px "Noto Serif SC", serif'),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      t.fillText(translate("北"), W, q - at - 12),
      t.fillText(translate("南"), W, q + at + 12),
      t.fillText(translate("东"), W + at + 14, q),
      t.fillText(translate("西"), W - at - 14, q),
      (t.textAlign = "left"));
    const re = (h) => {
        const x = Math.sin(s * u),
          B = Math.cos(s * u),
          A = Math.sin(l * u),
          O = Math.cos(l * u),
          mt = Math.cos(h * u),
          pe = -O * Math.sin(h * u),
          he = A * B - O * mt * x,
          ya = A * x + O * mt * B;
        return [pe, he, Math.asin(ot(ya, -1, 1)) / u];
      },
      ce = ([h, x, B]) => {
        const A = Math.hypot(h, x) || 1,
          O = (at * (90 - B)) / 90;
        return [W + (h / A) * O, q - (x / A) * O];
      };
    ((t.strokeStyle = "#ffc861"), (t.lineWidth = 2.2), t.beginPath());
    let Oe = !1;
    for (let h = -180; h <= 180; h += 1) {
      const x = re(h);
      if (x[2] < 0) {
        Oe = !1;
        continue;
      }
      const [B, A] = ce(x);
      (Oe ? t.lineTo(B, A) : t.moveTo(B, A), (Oe = !0));
    }
    t.stroke();
    const Nt = K(s, l);
    if (Nt > 0 && Nt < 24)
      for (const h of [-1, 1]) {
        const x = ((h * Nt) / 2) * 15,
          B = re(x),
          [A, O] = ce([B[0], B[1], 0]);
        ((t.fillStyle = "#ffd27a"),
          t.beginPath(),
          t.arc(A, O, 3.5, 0, 7),
          t.fill(),
          (t.font = '600 11px "Noto Serif SC", serif'),
          t.fillText(
            h < 0
              ? translate("日出 {0}", [U(12 - Nt / 2)])
              : translate("日落 {0}", [U(12 + Nt / 2)]),
            A + (A > W ? 6 : -70),
            O + 14,
          ));
      }
    const Fe = re(0);
    if (Fe[2] > 0) {
      const [h, x] = ce(Fe);
      ((t.fillStyle = "#f3d9a2"),
        (t.font = "700 12px JetBrains Mono"),
        t.fillText(
          translate("正午 {0}°", [Fe[2].toFixed(1)]),
          h + 8,
          x + (x < q ? -10 : 12),
        ));
    }
    const xt = re((o.lt - 12) * 15);
    if (xt[2] > 0) {
      const [h, x] = ce(xt),
        B = Math.tan(xt[2] * u),
        A = Math.min(at * 1.05, (at * 0.22) / B),
        O = Math.hypot(xt[0], xt[1]) || 1;
      ((t.strokeStyle = "rgba(0,0,0,.65)"),
        (t.lineWidth = 4),
        t.beginPath(),
        t.moveTo(W, q),
        t.lineTo(W - (xt[0] / O) * A, q + (xt[1] / O) * A),
        t.stroke(),
        (t.fillStyle = "#fff"),
        t.beginPath(),
        t.arc(W, q, 3.5, 0, 7),
        t.fill());
      const mt = t.createRadialGradient(h, x, 0, h, x, 18);
      (mt.addColorStop(0, "rgba(255,220,140,1)"),
        mt.addColorStop(1, "rgba(255,200,97,0)"),
        (t.fillStyle = mt),
        t.beginPath(),
        t.arc(h, x, 18, 0, 7),
        t.fill(),
        (t.fillStyle = "#fff3c9"),
        t.beginPath(),
        t.arc(h, x, 6, 0, 7),
        t.fill());
    } else
      ((t.fillStyle = "#72c4ff"),
        (t.font = '600 12px "Noto Serif SC", serif'),
        (t.textAlign = "center"),
        t.fillText(
          Nt === 0
            ? translate("极夜：太阳终日在地平线下")
            : translate("此时太阳在地平线以下（夜晚）"),
          W,
          q + at * 0.5,
        ),
        (t.textAlign = "left"));
    ((t.fillStyle = "#8d9199"),
      (t.font = '500 11px "Noto Serif SC", serif'),
      t.fillText(
        translate("地方时 {0} · 黑线为立杆的影子", [U(o.lt)]),
        Ee + 12,
        Ge + g - 22,
      ));
    const Ie = p,
      de = d + g + p,
      On = n - 3 * p - 290,
      Fn = a - de - 14;
    je(
      t,
      Ie,
      de,
      On,
      Fn,
      translate(
        "DISTRIBUTION · 正午太阳高度随纬度的分布（由直射点向南北两侧递减）",
      ),
    );
    const fe = Ie + 44,
      In = Ie + On - 16,
      Rt = de + 30,
      Bt = de + Fn - 24,
      I = (h) => fe + ((h + 90) / 180) * (In - fe),
      Mt = (h) => Bt - (h / 90) * (Bt - Rt);
    ((t.fillStyle = "rgba(255,179,92,.06)"),
      t.fillRect(I(-w), Rt, I(w) - I(-w), Bt - Rt),
      (t.strokeStyle = "rgba(255,255,255,.07)"),
      (t.lineWidth = 1),
      (t.font = "500 10px JetBrains Mono"),
      (t.fillStyle = "#6c7078"));
    for (let h = 0; h <= 90; h += 30)
      (t.beginPath(),
        t.moveTo(fe, Mt(h)),
        t.lineTo(In, Mt(h)),
        t.stroke(),
        (t.textAlign = "right"),
        t.fillText(h + "°", fe - 6, Mt(h)));
    t.textAlign = "center";
    for (let h = -90; h <= 90; h += 30)
      t.fillText(
        h === 0 ? "0°" : `${Math.abs(h)}°${h > 0 ? "N" : "S"}`,
        I(h),
        Bt + 12,
      );
    ((t.textAlign = "left"),
      (t.strokeStyle = "#ffc861"),
      (t.lineWidth = 2.2),
      t.beginPath());
    for (let h = -90; h <= 90; h += 0.5) {
      const x = Math.max(0, bt(h, l));
      h === -90 ? t.moveTo(I(h), Mt(x)) : t.lineTo(I(h), Mt(x));
    }
    (t.stroke(),
      (t.strokeStyle = "rgba(255,210,122,.5)"),
      t.setLineDash([4, 4]),
      t.beginPath(),
      t.moveTo(I(l), Rt),
      t.lineTo(I(l), Bt),
      t.stroke(),
      (t.strokeStyle = "rgba(155,231,180,.7)"),
      t.beginPath(),
      t.moveTo(I(s), Rt),
      t.lineTo(I(s), Bt),
      t.stroke(),
      t.setLineDash([]),
      (t.fillStyle = "#ffd27a"),
      (t.font = '600 11px "Noto Serif SC", serif'),
      t.fillText(translate("直射点 90°", []), I(l) + 6, Rt + 8),
      (t.fillStyle = "#9be7b4"),
      t.beginPath(),
      t.arc(I(s), Mt(Math.max(0, r)), 5, 0, 7),
      t.fill(),
      t.fillText(
        r > 0
          ? translate("观测点 {0}°", [r.toFixed(1)])
          : translate("观测点：极夜"),
        I(s) + 8,
        Mt(Math.max(0, r)) - 10,
      ));
  }
  const Lt = v("#cardC"),
    b = Lt.getContext("2d");
  function Ce(t, n, a, l, s, r, d) {
    const p = (M) => a.l + ((M - 1) / 364) * (t - a.l - a.r),
      m = (M) => n - a.b - ((M - l) / (s - l)) * (n - a.t - a.b);
    ((b.font = "500 9.5px JetBrains Mono"),
      (b.fillStyle = "#6c7078"),
      (b.strokeStyle = "rgba(255,255,255,.07)"),
      (b.lineWidth = 1));
    for (const M of r)
      (b.beginPath(),
        b.moveTo(a.l, m(M)),
        b.lineTo(t - a.r, m(M)),
        b.stroke(),
        (b.textAlign = "right"),
        (b.textBaseline = "middle"),
        b.fillText(d(M), a.l - 5, m(M)));
    ((b.textAlign = "center"), (b.textBaseline = "top"));
    let g = 1;
    for (let M = 0; M < 12; M++)
      (M % 2 === 0 &&
        b.fillText(translate("{0}月", [M + 1]), p(g + 14), n - a.b + 5),
        (g += zt[M]));
    for (const [M, V] of qt)
      ((b.strokeStyle = "rgba(216,178,106,.18)"),
        b.setLineDash([2, 3]),
        b.beginPath(),
        b.moveTo(p(M), a.t),
        b.lineTo(p(M), n - a.b),
        b.stroke(),
        b.setLineDash([]),
        (b.fillStyle = "rgba(216,178,106,.7)"),
        b.fillText(V, p(M), a.t - 12),
        (b.fillStyle = "#6c7078"));
    return (
      (b.textAlign = "left"),
      {
        X: p,
        Y: m,
      }
    );
  }
  function Ft(t, n, a, l, s = 2) {
    ((b.strokeStyle = l), (b.lineWidth = s), b.beginPath());
    for (let r = 1; r <= 365; r++)
      r === 1 ? b.moveTo(t(r), n(a(r))) : b.lineTo(t(r), n(a(r)));
    b.stroke();
  }
  function oe(t, n, a, l, s = 8) {
    ((b.fillStyle = a),
      b.beginPath(),
      b.arc(t, n, 4, 0, 7),
      b.fill(),
      l &&
        ((b.font = "600 11px JetBrains Mono"),
        (b.textBaseline = "middle"),
        b.fillText(l, t + (t > Lt.clientWidth - 90 ? -80 : s), n - 10)));
  }
  let kt = null;
  function ia() {
    if (!kt) return;
    const t = Lt.getBoundingClientRect(),
      n = Math.min(devicePixelRatio, 2);
    if (!t.width) return;
    (Lt.width !== Math.round(t.width * n) &&
      ((Lt.width = Math.round(t.width * n)),
      (Lt.height = Math.round(t.height * n))),
      b.setTransform(n, 0, 0, n, 0, 0),
      b.clearRect(0, 0, t.width, t.height));
    const a = t.width,
      l = t.height,
      s = {
        l: 40,
        r: 12,
        t: 16,
        b: 20,
      },
      r = o.doy;
    if (kt === "decl") {
      v("#cardH").textContent = translate("SUBSOLAR · 太阳直射点纬度的年变化");
      const { X: d, Y: p } = Ce(a, l, s, -30, 30, [-w, 0, w], (m) =>
        m === 0 ? "0°" : m > 0 ? "23.4N" : "23.4S",
      );
      (Ft(d, p, T, "#ffc861"), oe(d(r), p(T(r)), "#fff", N(T(r))));
    } else if (kt === "daylen") {
      v("#cardH").textContent = translate(
        "DAY LENGTH · {0} 昼长的年变化（虚线：赤道）",
        [N(o.lat)],
      );
      const { X: d, Y: p } = Ce(
        a,
        l,
        s,
        0,
        24,
        [0, 6, 12, 18, 24],
        (g) => g + "h",
      );
      (Ft(d, p, () => 12, "rgba(255,255,255,.35)", 1.2),
        Ft(d, p, (g) => K(o.lat, T(g)), "#ffc861"));
      const m = K(o.lat, T(r));
      oe(
        d(r),
        p(m),
        "#fff",
        m >= 24
          ? translate("极昼")
          : m <= 0
            ? translate("极夜")
            : Vt(m).replace(/ /g, ""),
      );
    } else if (kt === "seasons") {
      const d = Ut[o.city];
      v("#cardH").textContent = translate(
        "{0} {1} · 正午太阳高度（金）与昼长（蓝）",
        [d[0], N(d[1])],
      );
      const { X: p, Y: m } = Ce(
        a,
        l,
        s,
        0,
        90,
        [0, 30, 60, 90],
        (g) => g + "°",
      );
      (Ft(p, m, (g) => Math.max(0, bt(d[1], T(g))), "#ffc861"),
        Ft(p, m, (g) => (K(d[1], T(g)) / 24) * 90, "#72c4ff"),
        oe(
          p(r),
          m(Math.max(0, bt(d[1], T(r)))),
          "#ffc861",
          bt(d[1], T(r)).toFixed(1) + "°",
        ),
        oe(
          p(r),
          m((K(d[1], T(r)) / 24) * 90),
          "#72c4ff",
          K(d[1], T(r)).toFixed(1) + "h",
        ));
    }
  }
  const mn = v("#hud");
  function gt(t, n) {
    mn.innerHTML = `<div class="hh">${t}</div><div class="kv">${n.map(([a, l, s]) => `<span>${a}</span><b class="${s || ""}">${l}</b>`).join("")}</div>`;
  }
  function la(t) {
    const n = T(t),
      a = T(t + 1) > n;
    return Math.abs(n) < 3
      ? a
        ? translate("春分前后")
        : translate("秋分前后")
      : n > 0
        ? translate("北半球夏半年")
        : translate("北半球冬半年");
  }
  function sa() {
    const t = o.ch,
      n = T(o.doy);
    if (t === 1)
      gt(translate("ROTATION · 地球自转"), [
        [translate("方向"), translate("自西向东"), "g"],
        [translate("真正周期"), translate("23时56分4秒")],
        [
          translate("角速度"),
          Math.abs(o.lat) > 89.9 ? "0" : translate("约 15°/小时"),
          "g",
        ],
        [translate("所选纬度"), N(o.lat)],
        [
          translate("线速度"),
          `${Math.round(1670 * Math.cos(o.lat * u))} km/h`,
          "s",
        ],
      ]);
    else if (t === 2)
      gt(translate("DAY & NIGHT · 昼夜交替"), [
        [translate("北京时间"), U(o.bj), "s"],
        [translate("日期"), G(o.doy)],
        [translate("直射点"), N(n), "g"],
        [translate("昼夜交替周期"), translate("1 太阳日（24 小时）")],
      ]);
    else if (t === 3 || t === 0) {
      const a = (2 * Math.PI * (o.doy - 3)) / 365.25,
        l = 1 - 0.0167 * Math.cos(a),
        s = 29.78 * Math.sqrt(2 / l - 1);
      gt(translate("REVOLUTION · 地球公转"), [
        [translate("日期"), G(o.doy), "g"],
        [
          translate("日地距离"),
          translate("{0} 亿 km", [(1.496 * l).toFixed(3)]),
        ],
        [translate("公转速度"), `${s.toFixed(2)} km/s`, "s"],
        [translate("直射点"), N(n), "g"],
        [translate("北半球"), la(o.doy)],
      ]);
    } else if (t === 4) {
      const a = T(o.doy + 1) > n;
      gt(translate("SUBSOLAR · 直射点"), [
        [translate("日期"), G(o.doy), "g"],
        [translate("直射点纬度"), N(n), "s"],
        [
          translate("移动方向"),
          a ? translate("向北移动 ↑") : translate("向南移动 ↓"),
          "g",
        ],
        [
          translate("所在半球"),
          Math.abs(n) < 0.05
            ? translate("赤道")
            : n > 0
              ? translate("北半球")
              : translate("南半球"),
        ],
      ]);
    } else if (t === 5) {
      const a = K(o.lat, n);
      gt(translate("DAY LENGTH · 昼夜长短"), [
        [translate("纬度"), N(o.lat)],
        [translate("日期"), G(o.doy), "g"],
        [
          translate("昼长"),
          a >= 24
            ? translate("24 时（极昼）")
            : a <= 0
              ? translate("0（极夜）")
              : Vt(a),
          "s",
        ],
        [
          translate("夜长"),
          a >= 24 ? "0" : a <= 0 ? translate("24 时") : Vt(24 - a),
          "c",
        ],
        [translate("日出（地方时）"), a > 0 && a < 24 ? U(12 - a / 2) : "—"],
        [translate("日落（地方时）"), a > 0 && a < 24 ? U(12 + a / 2) : "—"],
      ]);
    } else if (t === 6) {
      const a = bt(o.lat, n),
        l = o.lat >= 0 ? 90 - Math.abs(o.lat + w) : 90 - Math.abs(o.lat - w);
      gt(translate("NOON SUN · 正午太阳高度"), [
        [translate("观测点"), N(o.lat)],
        [translate("日期"), G(o.doy), "g"],
        [translate("直射点"), N(n)],
        [
          translate("正午太阳高度"),
          a > 0 ? a.toFixed(1) + "°" : translate("极夜"),
          "s",
        ],
        [
          translate("正午杆影长/杆高"),
          a > 0 ? (1 / Math.tan(a * u)).toFixed(2) : "—",
        ],
        [translate("昼长"), Vt(ot(K(o.lat, n), 0, 24))],
        [
          translate("冬至正午高度"),
          l > 0 ? l.toFixed(1) + "°" : translate("极夜"),
          "c",
        ],
        [
          translate("楼间距 ≥ 楼高 ×"),
          l > 0 ? (1 / Math.tan(l * u)).toFixed(2) : "—",
          "c",
        ],
        [translate("太阳能板倾角"), a > 0 ? (90 - a).toFixed(1) + "°" : "—"],
      ]);
    } else if (t === 7) {
      const a = Ut[o.city],
        l = bt(a[1], n),
        s = K(a[1], n),
        r = a[1] >= 0 == n > 0;
      gt(translate("SEASONS · 四季"), [
        [translate("城市"), `${a[0]} ${N(a[1])}`],
        [translate("日期"), G(o.doy), "g"],
        [
          translate("正午太阳高度"),
          l > 0 ? l.toFixed(1) + "°" : translate("极夜"),
          "s",
        ],
        [translate("昼长"), Vt(ot(s, 0, 24)), "c"],
        [
          translate("所处半年"),
          Math.abs(n) < 2
            ? translate("春分/秋分前后")
            : r
              ? translate("夏半年（昼长、太阳高）")
              : translate("冬半年（昼短、太阳低）"),
          "g",
        ],
      ]);
    }
  }
  const Ne = {
      play: '<svg viewBox="0 0 14 14"><path d="M3.5 2.5l8 4.5-8 4.5z"/></svg>',
      pause: '<svg viewBox="0 0 14 14"><path d="M4 2.5v9M10 2.5v9"/></svg>',
      eye: '<svg viewBox="0 0 14 14"><path d="M1 7s2.2-4 6-4 6 4 6 4-2.2 4-6 4-6-4-6-4z"/><circle cx="7" cy="7" r="1.8"/></svg>',
      arrow: '<svg viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4"/></svg>',
      rot: '<svg viewBox="0 0 14 14"><path d="M12 7a5 5 0 1 1-1.5-3.6"/><path d="M11 1v3H8"/></svg>',
    },
    Z = (t, n, a = "", l = !1, s = "") =>
      `<button class="btn ${s}${l ? " on" : ""}" data-act="${t}">${Ne[a] || ""}${n}</button>`,
    yt = () =>
      translate(
        `<div class="rng"><label>日期</label><input type="range" id="doyR" min="1" max="365" step="1" value="{0}"><output id="doyO">{1}</output></div>
  <div class="acts">{2}{3}</div>`,
        [
          Math.round(o.doy),
          G(o.doy),
          qt.map(([t, n]) => Z("doy:" + t, n)).join(""),
          Z(
            "play",
            o.play ? translate("暂停") : translate("播放一年"),
            o.play ? "pause" : "play",
            o.play,
          ),
        ],
      ),
    Re = (t = -90, n = 90) =>
      translate(
        '<div class="rng"><label>纬度</label><input type="range" id="latR" min="{0}" max="{1}" step="0.5" value="{2}"><output id="latO">{3}</output></div>',
        [t, n, o.lat, N(o.lat)],
      ),
    bn = () =>
      translate(
        `<div class="rng"><label>北京时间</label><input type="range" id="bjR" min="0" max="23.99" step="0.05" value="{0}"><output id="bjO">{1}</output></div>
  <div class="acts">{2}{3}{4}{5}</div>`,
        [
          o.bj,
          U(o.bj),
          Z(
            "spin",
            o.spin ? translate("暂停自转") : translate("地球自转"),
            o.spin ? "pause" : "play",
            o.spin,
          ),
          Z("polar:1", translate("北极上空俯视"), "eye", o.polar === 1),
          Z("polar:-1", translate("南极上空俯视"), "eye", o.polar === -1),
          Z("polar:0", translate("侧视"), "eye", o.polar === 0),
        ],
      ),
    ct = [
      {
        t: translate("地球运动总览"),
        en: "Overview",
        scene: "orbit",
        cam: [0, 30, 60],
        body: () =>
          translate(
            `
      <p class="lead">地球同时进行着两种运动：绕地轴的<b>自转</b>（周期约 1 天）和绕太阳的<b>公转</b>（周期约 1 年）。自转带来昼夜交替与时差；公转加上<b>地轴倾斜</b>，带来太阳直射点的移动、昼夜长短与正午太阳高度的变化，最终形成<b>四季</b>。</p>
      <div class="sec">日期</div>{0}
      <div class="sec">操作</div>
      <ul class="pts"><li>拖动旋转视角、滚轮缩放；拖动日期或点击“播放一年”，看地球沿轨道运行。</li><li>注意地轴始终<b>指向同一方向</b>（北极星附近），所以一年中北半球有时朝向太阳、有时背向太阳。</li><li>键盘 <b>← →</b> 切换章节，<b>R</b> 重置视角，<b>F</b> 全屏。</li></ul>`,
            [yt()],
          ),
      },
      {
        t: translate("地球自转"),
        en: "Rotation",
        scene: "globe",
        cam: [0, 7.5, 21],
        enter() {
          ((o.spin = !0), (o.lat = 30));
        },
        body: () =>
          translate(
            `
      <p class="lead">地球绕地轴<b>自西向东</b>旋转：从<b>北极</b>上空看呈<b>逆时针</b>，从<b>南极</b>上空看呈<b>顺时针</b>。</p>
      <div class="sec">方向</div>{0}
      <div class="sec">周期</div>
      <table class="t"><tr><td>恒星日</td><td>自转 360°，真正周期</td><td>23时56分4秒</td></tr><tr><td>太阳日</td><td>昼夜交替周期</td><td>24 小时</td></tr></table>
      <div class="sec">速度</div>
      {1}
      <ul class="pts"><li><b>角速度</b>：除南北两极点外，各地约 <b>15°/小时</b>。</li><li><b>线速度</b>：赤道最大约 1670 km/h，向两极递减，<b>60° 约为赤道的一半</b>，极点为 0。图中金色箭头长短即线速度大小。</li></ul>`,
            [bn(), Re(0, 90)],
          ),
      },
      {
        t: translate("昼夜交替与晨昏线"),
        en: "Day, night & terminator",
        scene: "globe",
        cam: [4.8, 4.2, 21],
        enter() {
          o.spin = !0;
        },
        body: () =>
          translate(
            `
      <p class="lead">地球不透明、不发光，被太阳照亮的一半是<b>昼半球</b>，另一半是<b>夜半球</b>，二者的分界线叫<b>晨昏线</b>。随着自转，由夜进入昼的一侧是<b>晨线</b>，由昼进入夜的一侧是<b>昏线</b>。</p>
      {0}
      <div class="rule" data-k="KEY"><p>晨昏线 ⟂ 太阳光线<small>晨昏线上太阳高度为 0°；晨昏线平分赤道，所以赤道上全年昼夜等长。</small></p></div>
      <ul class="pts"><li>看城市标签：北京、伦敦、纽约随自转依次进入白天，<b>经度每差 15°，地方时相差 1 小时</b>，东早西晚。</li><li>切换“北极上空俯视”，这是考试中最常见的光照图视角：逆时针自转，晨线在逆时针方向的前方。</li></ul>
      <div class="sec">日期</div>{1}`,
            [bn(), yt()],
          ),
      },
      {
        t: translate("地球公转"),
        en: "Revolution",
        scene: "orbit",
        cam: [12, 26, 58],
        enter() {
          o.play = !0;
        },
        body: () =>
          translate(
            `
      <p class="lead">地球绕太阳<b>自西向东</b>公转，周期 1 恒星年（365日6时9分10秒）。公转轨道是近似正圆的椭圆，太阳位于一个焦点上：<b>1 月初</b>过近日点，公转速度较<b>快</b>；<b>7 月初</b>过远日点，速度较<b>慢</b>。</p>
      {0}
      <div class="rule" data-k="OBLIQUITY"><p>黄赤交角 23°26′<small>赤道面（蓝环）与黄道面（金环）的夹角。地轴在公转中始终指向北极星附近，倾斜方向保持不变。</small></p></div>
      <ul class="pts"><li>黄赤交角的存在，使太阳直射点在南北回归线之间往返移动——下一节。</li><li>北半球冬半年地球离太阳较近、公转较快，所以冬半年（约 179 天）比夏半年（约 186 天）短。</li></ul>`,
            [yt()],
          ),
      },
      {
        t: translate("太阳直射点的移动"),
        en: "Subsolar point",
        scene: "globe",
        cam: [14.4, 5.4, 15],
        enter() {
          ((o.play = !0), (o.bj = 12), (o.spin = !1));
        },
        body: () =>
          translate(
            `
      <p class="lead">由于黄赤交角的存在，太阳直射点在<b>南北回归线之间</b>往返移动，周期为一个<b>回归年</b>（365日5时48分46秒）。</p>
      {0}
      <table class="t" style="margin-top:10px">
        <tr><td>春分</td><td>直射赤道，随后北移</td><td>3月21日前后</td></tr>
        <tr><td>夏至</td><td>直射北回归线（最北）</td><td>6月22日前后</td></tr>
        <tr><td>秋分</td><td>直射赤道，随后南移</td><td>9月23日前后</td></tr>
        <tr><td>冬至</td><td>直射南回归线（最南）</td><td>12月22日前后</td></tr>
      </table>
      <div class="note">左下角曲线是直射点纬度随日期的变化；回归线的纬度数等于黄赤交角，极圈的纬度数等于 90° 减去黄赤交角。</div>`,
            [yt()],
          ),
      },
      {
        t: translate("昼夜长短"),
        en: "Length of day",
        scene: "globe",
        cam: [8.4, 13.2, 15.6],
        enter() {
          ((o.doy = 173), (o.lat = 39.9), (o.spin = !1), (o.bj = 12));
        },
        body: () =>
          translate(
            `
      <p class="lead">晨昏线把纬线圈分成<b>昼弧</b>（金色）与<b>夜弧</b>（蓝色）。昼弧越长，白昼越长：昼长 = 昼弧度数 ÷ 15°。</p>
      {0}{1}
      <div class="sec">规律</div>
      <ul class="pts">
        <li>太阳直射哪个半球，哪个半球<b>昼长夜短</b>，且<b>纬度越高昼越长</b>；北极圈内可出现<b>极昼</b>。</li>
        <li><b>赤道</b>全年昼夜等长；<b>春分、秋分</b>全球昼夜等长。</li>
        <li>夏至日北半球各地昼长达一年最大值；冬至日达最小值。</li>
        <li>直射点向北移动，北半球昼渐长；向南移动，北半球昼渐短。</li>
      </ul>`,
            [Re(), yt()],
          ),
      },
      {
        t: translate("正午太阳高度"),
        en: "Noon sun altitude",
        scene: "noon",
        enter() {
          ((o.lat = 39.9), (o.lt = 12));
        },
        body: () =>
          translate(
            `
      <p class="lead">正午太阳高度是一天中最大的太阳高度角。它<b>由太阳直射点向南北两侧递减</b>，与纬度差有关：</p>
      <div class="formula">H = 90° − |φ − δ|<small>φ：当地纬度　δ：直射点纬度（同半球取同号，异半球取异号）</small></div>
      {0}
      <div class="acts" style="margin-bottom:8px">{1}</div>
      {2}
      <div class="rng"><label>地方时</label><input type="range" id="ltR" min="0" max="23.99" step="0.05" value="{3}"><output id="ltO">{4}</output></div>
      <div class="sec">季节变化</div>
      <ul class="pts"><li>北回归线以北：<b>夏至日最大、冬至日最小</b>。</li><li>南回归线以南：冬至日最大、夏至日最小。</li><li>南北回归线之间：一年有两次直射（回归线上一次）。</li></ul>
      <div class="sec">应用</div>
      <ul class="pts"><li><b>楼间距</b>：保证冬至日正午底楼有阳光，楼间距 ≥ 楼高 × cot H冬至（右下角已按所选纬度算出）。</li><li><b>太阳能热水器</b>：集热板与地面夹角 = 90° − H，使阳光直射板面。</li></ul>`,
            [
              Re(),
              Ut.map(([t, n]) => Z("obs:" + n, t)).join(""),
              yt(),
              o.lt,
              U(o.lt),
            ],
          ),
      },
      {
        t: translate("四季更替"),
        en: "Seasons",
        scene: "orbit",
        cam: [0, 30, 60],
        enter() {
          o.play = !0;
        },
        body: () =>
          translate(
            `
      <p class="lead">昼夜长短与正午太阳高度随季节变化，使各地获得的太阳热量不同，形成<b>四季</b>。从天文意义看，<b>夏季</b>是一年中白昼最长、太阳最高的季节，<b>冬季</b>相反，春秋是过渡。</p>
      <div class="acts" style="margin-bottom:10px">{0}</div>
      {1}
      <div class="sec">不同的四季划分</div>
      <table class="t">
        <tr><td>天文四季</td><td>以“四立”为季节开始，夏季对应立夏至立秋</td><td>我国传统</td></tr>
        <tr><td>气候四季</td><td>北温带常以 3–5 月为春、6–8 月为夏</td><td>气候统计</td></tr>
      </table>
      <div class="note">选“悉尼”对比：南、北半球的季节<b>正好相反</b>——北半球夏至时，悉尼正午太阳最低、白昼最短。</div>`,
            [
              Ut.map(([t], n) => Z("city:" + n, t, "", o.city === n)).join(""),
              yt(),
            ],
          ),
      },
      {
        t: translate("随堂检测"),
        en: "Quiz",
        scene: "orbit",
        cam: [0, 30, 60],
        enter() {
          (gn(), (o.play = !0));
        },
        body: () => ca(),
      },
    ],
    ra = [
      [
        translate("地球自转的方向是："),
        [
          translate("自西向东"),
          translate("自东向西"),
          translate("自北向南"),
          translate("从北极上空看顺时针"),
        ],
        translate("从北极上空看呈逆时针，从南极上空看呈顺时针。"),
      ],
      [
        translate("地球自转的真正周期是："),
        [
          translate("1 恒星日（23时56分4秒）"),
          translate("1 太阳日（24 小时）"),
          translate("1 回归年"),
          translate("1 恒星年"),
        ],
        translate("恒星日是地球自转 360° 的时间；太阳日是昼夜交替的周期。"),
      ],
      [
        translate("下列地点中，地球自转线速度最大的是："),
        [
          translate("赤道"),
          translate("北回归线"),
          translate("北极圈"),
          translate("北极点"),
        ],
        translate("线速度由赤道向两极递减，极点为 0。"),
      ],
      [
        translate("晨昏线与太阳光线的关系是："),
        [
          translate("垂直"),
          translate("平行"),
          translate("斜交 23°26′"),
          translate("重合"),
        ],
        translate("晨昏线所在平面与太阳光线垂直，晨昏线上太阳高度为 0°。"),
      ],
      [
        translate("夏至日，太阳直射："),
        [
          translate("北回归线"),
          translate("赤道"),
          translate("南回归线"),
          translate("北极圈"),
        ],
        translate("夏至日（6月22日前后）直射点位于最北的北回归线。"),
      ],
      [
        translate("春分日，全球昼夜长短情况是："),
        [
          translate("各地昼夜等长"),
          translate("北半球昼长夜短"),
          translate("南半球昼长夜短"),
          translate("北极出现极昼"),
        ],
        translate("春分、秋分太阳直射赤道，晨昏线通过两极，全球昼夜等长。"),
      ],
      [
        translate("北京（约 40°N）冬至日正午太阳高度约为："),
        ["26.6°", "50.0°", "73.4°", "40.0°"],
        "H = 90° − |40° − (−23.4°)| ≈ 26.6°。",
      ],
      [
        translate("北半球夏至日，正午太阳高度达到一年最大值的范围是："),
        [
          translate("北回归线及其以北地区"),
          translate("全球各地"),
          translate("赤道至南回归线"),
          translate("南半球各地"),
        ],
        translate("北回归线以北，夏至日直射点离得最近，正午太阳高度最大。"),
      ],
      [
        translate("一年中地球公转速度较快的时间是："),
        [
          translate("1 月初"),
          translate("7 月初"),
          translate("3 月下旬"),
          translate("9 月下旬"),
        ],
        translate("1 月初地球位于近日点附近，公转速度最快。"),
      ],
      [
        translate("北半球冬至日，北极圈及其以北地区出现："),
        [
          translate("极夜"),
          translate("极昼"),
          translate("昼夜等长"),
          translate("昼长夜短"),
        ],
        translate("冬至日直射南回归线，北极圈以北全天处于夜半球。"),
      ],
    ],
    vn = (t) => {
      for (let n = t.length - 1; n > 0; n--) {
        const a = (Math.random() * (n + 1)) | 0;
        [t[n], t[a]] = [t[a], t[n]];
      }
      return t;
    };
  function gn() {
    o.quiz = {
      list: vn(
        ra.map(([t, n, a]) => ({
          q: t,
          ans: n[0],
          opts: vn(n.slice()),
          why: a,
        })),
      ),
      i: 0,
      score: 0,
      picked: null,
    };
  }
  function ca() {
    const t = o.quiz;
    if (!t) return "";
    if (t.i >= t.list.length) {
      const l = t.score / t.list.length;
      return `<div class="score"><b>${t.score}/${t.list.length}</b><span>${l === 1 ? translate("全对！地球运动掌握得很扎实。") : l >= 0.6 ? translate("不错，回看错题对应的章节巩固一下。") : translate("建议从“地球自转”开始再复习一遍。")}</span></div>
      <div class="acts">${Z("quizRestart", translate("再测一次"), "rot", !1, "pri")}</div>`;
    }
    const n = t.list[t.i],
      a = t.picked != null;
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
        n.q,
        n.opts
          .map(
            (l, s) =>
              `<button class="opt ${a && l === n.ans ? "ok" : ""} ${a && s === t.picked && l !== n.ans ? "bad" : ""}" data-act="ans:${s}" ${a ? "disabled" : ""}>${l}</button>`,
          )
          .join(""),
        a
          ? `<div class="fb"><b class="${n.opts[t.picked] === n.ans ? "ok" : "bad"}">${n.opts[t.picked] === n.ans ? translate("回答正确") : translate("答案：") + n.ans}</b> —— ${n.why}</div>`
          : "",
        a
          ? Z(
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
  const da = [
    ["labels", translate("标注")],
    ["grid", translate("经纬网")],
    ["rotate", translate("镜头环绕")],
  ];
  function fa() {
    v("#tgs").innerHTML = da
      .map(
        ([t, n]) =>
          `<button class="tg${o[t] ? " on" : ""}" data-k="${t}">${n}</button>`,
      )
      .join("");
  }
  function It() {
    const t = ct[o.ch];
    v("#lesson").innerHTML =
      `<div class="lh"><span class="no">${String(o.ch).padStart(2, "0")}</span><div><h2>${t.t}</h2><em>${t.en}</em></div></div>` +
      t.body();
  }
  function Be() {
    const t = (n, a, l, s) => {
      const r = v(n);
      r && document.activeElement !== r && (r.value = a);
      const d = v(l);
      d && (d.textContent = s);
    };
    (t("#doyR", Math.round(o.doy), "#doyO", G(o.doy)),
      t("#bjR", o.bj, "#bjO", U(o.bj)),
      t("#latR", o.lat, "#latO", N(o.lat)),
      t("#ltR", o.lt, "#ltO", U(o.lt)));
  }
  let ut = null;
  function Ht(t, n = 1500) {
    ut = {
      p0: R.position.clone(),
      p1: new i.Vector3(...t),
      s: performance.now(),
      d: n,
    };
  }
  it.addEventListener("start", () => {
    ut = null;
  });
  function yn() {
    const t = ct[o.ch];
    return o.scene === "globe" && o.polar ? [0.001, 19 * o.polar, 0.02] : t.cam;
  }
  const xn = [0, 2, 3, 4, 5, 7, 8],
    Mn = new Set();
  function Pt(t) {
    t = ot(t, 0, ct.length - 1);
    const n = ct[t],
      a = o.ch == null ? null : o.scene;
    ((o.ch = t),
      (o.scene = n.scene),
      (o.play = !1),
      (o.spin = !1),
      (o.polar = 0),
      (o.quiz = null),
      n.enter && n.enter(),
      (_t.style.display = o.scene === "noon" ? "none" : "block"),
      ($t.style.display = o.scene === "noon" ? "block" : "none"),
      o.scene !== "noon"
        ? ((it.minDistance = o.scene === "orbit" ? 14 : 8),
          (it.maxDistance = o.scene === "orbit" ? 120 : 40),
          a !== o.scene
            ? (R.position.set(...n.cam).multiplyScalar(le ? 1.5 : 2.1),
              le && Ht(n.cam, 1800),
              a &&
                _t.animate(
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
            : Ht(n.cam))
        : a !== "noon" &&
          $t.animate(
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
      Ae.classList.toggle("on", xn.includes(t)),
      At.classList.toggle("has-tl", xn.includes(t)),
      Mn.add(t),
      (kt =
        {
          4: "decl",
          5: "daylen",
          7: "seasons",
        }[t] || null),
      v("#card").classList.toggle("on", !!kt),
      mn.classList.toggle("on", [0, 1, 2, 3, 4, 5, 6, 7].includes(t)),
      (ne = null),
      fa(),
      It(),
      pn(),
      Nn(),
      document.querySelectorAll(".ni").forEach((s) => {
        (s.classList.toggle("on", +s.dataset.i === t),
          s.classList.toggle("seen", Mn.has(+s.dataset.i)));
      }),
      document.querySelectorAll("#prog i").forEach((s, r) => {
        s.className = r < t ? "on" : r === t ? "cur" : "";
      }));
    const l = v("#chapter");
    ((l.querySelector(".n").innerHTML =
      `CHAPTER ${String(t).padStart(2, "0")} <span>/ ${String(ct.length - 1).padStart(2, "0")}</span>`),
      (l.querySelector("h1").textContent = n.t),
      (l.querySelector("p").textContent = n.en),
      l.classList.remove("anim"),
      l.offsetWidth,
      l.classList.add("anim"),
      (v("#lesson").scrollTop = 0),
      history.replaceState(null, "", "#" + t));
  }
  (v("#lesson").addEventListener("click", (t) => {
    const n = t.target.closest("[data-act]");
    if (!n) return;
    const [a, l] = n.dataset.act.split(":");
    switch (a) {
      case "doy":
        ((o.doy = +l), (o.play = !1));
        break;
      case "play":
        o.play = !o.play;
        break;
      case "spin":
        o.spin = !o.spin;
        break;
      case "polar":
        ((o.polar = +l), Ht(yn()));
        break;
      case "obs":
        o.lat = +l;
        break;
      case "city":
        o.city = +l;
        break;
      case "ans": {
        const s = o.quiz;
        if (s.picked != null) return;
        ((s.picked = +l),
          s.list[s.i].opts[s.picked] === s.list[s.i].ans && s.score++);
        break;
      }
      case "quizNext":
        (o.quiz.i++, (o.quiz.picked = null));
        break;
      case "quizRestart":
        gn();
        break;
    }
    It();
  }),
    v("#lesson").addEventListener("input", (t) => {
      const n = +t.target.value;
      (t.target.id === "doyR"
        ? ((o.doy = n), (o.play = !1))
        : t.target.id === "bjR"
          ? ((o.bj = n), (o.spin = !1))
          : t.target.id === "latR"
            ? (o.lat = n)
            : t.target.id === "ltR" && (o.lt = n),
        Be());
    }),
    v("#tgs").addEventListener("click", (t) => {
      const n = t.target.closest(".tg");
      n &&
        ((o[n.dataset.k] = !o[n.dataset.k]),
        n.classList.toggle("on", o[n.dataset.k]),
        pn());
    }),
    (v("#nav").innerHTML =
      translate('<div class="navh">OVERVIEW · 总览</div>') +
      ct
        .map(
          (t, n) =>
            (n === 1
              ? translate('<div class="navh">ROTATION · 自转</div>')
              : n === 3
                ? translate('<div class="navh">REVOLUTION · 公转</div>')
                : n === 8
                  ? translate('<div class="navh">REVIEW · 复习</div>')
                  : "") +
            `<button class="ni" data-i="${n}"><em>${String(n).padStart(2, "0")}</em><b>${t.t}</b><small>${t.en}</small></button>`,
        )
        .join("") +
      translate(
        '<div class="navf"><kbd>←</kbd> <kbd>→</kbd> 切换章节<br><kbd>R</kbd> 重置视角　<kbd>F</kbd> 全屏</div>',
      )),
    v("#nav").addEventListener("click", (t) => {
      const n = t.target.closest(".ni");
      n && Pt(+n.dataset.i);
    }),
    (v("#prog").innerHTML = ct.map(() => "<i></i>").join("")),
    (v("#bPrev").onclick = () => Pt(o.ch - 1)),
    (v("#bNext").onclick = () => Pt(o.ch + 1)));
  const Sn = () => {
    ((o.polar = 0), o.scene !== "noon" && Ht(ct[o.ch].cam), It());
  };
  v("#bReset").onclick = Sn;
  const wn = () =>
    document.fullscreenElement
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen().catch(() => {});
  ((v("#bFull").onclick = wn),
    addEventListener("keydown", (t) => {
      t.target.tagName !== "INPUT" &&
        (t.key === "ArrowRight"
          ? Pt(o.ch + 1)
          : t.key === "ArrowLeft"
            ? Pt(o.ch - 1)
            : t.key === "r" || t.key === "R"
              ? Sn()
              : t.key === "f" || t.key === "F"
                ? wn()
                : t.key === " " &&
                  Ae.classList.contains("on") &&
                  (t.preventDefault(), Pn()));
    }));
  const Ae = v("#timeline"),
    F = v("#tlC"),
    Tn = F.getContext("2d"),
    ie = v("#tlPlay");
  let jt = 0,
    ze = 0,
    Ct = null,
    Wt = !1;
  const dt = {
      l: 14,
      r: 14,
    },
    tt = (t) => dt.l + ((t - 1) / 364) * (jt - dt.l - dt.r),
    Ln = (t) => ot(1 + ((t - dt.l) / (jt - dt.l - dt.r)) * 364, 1, 365);
  function pa() {
    const t = F.getBoundingClientRect(),
      n = Math.min(devicePixelRatio, 2);
    t.width &&
      ((jt = t.width),
      (ze = t.height),
      (F.width = Math.round(jt * n)),
      (F.height = Math.round(ze * n)),
      Tn.setTransform(n, 0, 0, n, 0, 0));
  }
  new ResizeObserver(pa).observe(F);
  function ha() {
    if (!jt || !Ae.classList.contains("on")) return;
    const t = Tn,
      n = jt,
      a = ze,
      l = a * 0.5,
      s = a * 0.2,
      r = (f) => l - (T(f) / w) * s,
      d = tt(o.doy);
    (t.clearRect(0, 0, n, a),
      (t.font = "500 9.5px JetBrains Mono"),
      (t.textAlign = "center"),
      (t.textBaseline = "alphabetic"));
    let p = 1;
    for (let f = 0; f < 12; f++) {
      const j = tt(p);
      ((t.fillStyle = "rgba(255,255,255,.06)"),
        t.fillRect(Math.round(j), a * 0.3, 1, a * 0.46),
        (t.fillStyle = "rgba(141,145,153,.75)"),
        t.fillText(String(f + 1).padStart(2, "0"), tt(p + zt[f] / 2), a - 5),
        (p += zt[f]));
    }
    ((t.fillStyle = "rgba(216,178,106,.22)"),
      t.fillRect(dt.l, Math.round(l), n - dt.l - dt.r, 1));
    const m = () => {
        (t.beginPath(), t.moveTo(tt(1), l));
        for (let f = 1; f <= 365; f += 1) t.lineTo(tt(f), r(f));
        (t.lineTo(tt(365), l), t.closePath());
      },
      g = (f, j) => {
        (t.save(),
          t.beginPath(),
          t.rect(0, f ? 0 : l, n, f ? l : a - l),
          t.clip());
        const P = t.createLinearGradient(0, l - s, 0, l + s);
        (P.addColorStop(0, j[0]),
          P.addColorStop(0.5, "rgba(0,0,0,0)"),
          P.addColorStop(1, j[1]),
          (t.fillStyle = P),
          m(),
          t.fill(),
          t.restore());
      };
    (g(!0, ["rgba(255,200,97,.28)", "rgba(0,0,0,0)"]),
      g(!1, ["rgba(0,0,0,0)", "rgba(114,196,255,.24)"]));
    const M = (f, j, P, $) => {
      ((t.strokeStyle = P), (t.lineWidth = $), t.beginPath());
      for (let C = f; C <= j; C += 1)
        C === f ? t.moveTo(tt(C), r(C)) : t.lineTo(tt(C), r(C));
      t.stroke();
    };
    (M(1, 365, "rgba(243,217,162,.35)", 1.2),
      M(1, Math.max(1, Math.floor(o.doy)), "#f3d9a2", 1.8),
      (t.textBaseline = "top"));
    for (let f = 0; f < 24; f++) {
      const j = Qt(f),
        P = tt(j),
        $ = f % 3 === 0,
        C = f % 6 === 0;
      ((t.fillStyle = C
        ? "rgba(243,217,162,.9)"
        : $
          ? "rgba(216,178,106,.55)"
          : "rgba(255,255,255,.18)"),
        t.fillRect(Math.round(P), 4, 1, $ ? 7 : 4),
        $ &&
          n > 520 &&
          ((t.font = C
            ? '700 10.5px "Noto Serif SC", serif'
            : '500 10px "Noto Serif SC", serif'),
          t.fillText(ge[f], P, 13)),
        C &&
          ((t.fillStyle = "#f3d9a2"),
          t.beginPath(),
          t.arc(P, r(j), 2.4, 0, 7),
          t.fill()));
    }
    if (Ct != null && !Wt) {
      const f = tt(Ct);
      ((t.fillStyle = "rgba(255,255,255,.25)"),
        t.fillRect(Math.round(f), a * 0.28, 1, a * 0.5),
        (t.font = "600 10px JetBrains Mono"),
        (t.textBaseline = "middle"),
        (t.textAlign = f > n - 150 ? "right" : "left"),
        (t.fillStyle = "rgba(236,231,221,.75)"),
        t.fillText(
          `${G(Ct)} · ${N(T(Ct))}`,
          f + (f > n - 150 ? -8 : 8),
          a * 0.34,
        ));
    }
    const V = r(o.doy),
      S = t.createLinearGradient(0, 0, 0, a);
    (S.addColorStop(0, "rgba(243,217,162,0)"),
      S.addColorStop(0.5, "rgba(243,217,162,.9)"),
      S.addColorStop(1, "rgba(243,217,162,0)"),
      (t.fillStyle = S),
      t.fillRect(d - 0.5, 2, 1, a - 4));
    const k = t.createRadialGradient(d, V, 0, d, V, 14);
    (k.addColorStop(0, "rgba(255,220,150,.55)"),
      k.addColorStop(1, "rgba(255,200,97,0)"),
      (t.fillStyle = k),
      t.beginPath(),
      t.arc(d, V, 14, 0, 7),
      t.fill(),
      (t.fillStyle = "#07090c"),
      (t.strokeStyle = "#fff3d6"),
      (t.lineWidth = 2),
      t.beginPath(),
      t.arc(d, V, 4.5, 0, 7),
      t.fill(),
      t.stroke(),
      (v("#tlDate").textContent = G(o.doy)),
      (v("#tlTerm").textContent = tn(o.doy)),
      (v("#tlDecl").textContent = N(T(o.doy))));
  }
  const kn = (t) => {
    const n = F.getBoundingClientRect();
    ((o.doy = Ln(t.clientX - n.left)), (o.play = !1), Be());
  };
  (F.addEventListener("pointerdown", (t) => {
    ((Wt = !0), F.setPointerCapture(t.pointerId), kn(t), It());
  }),
    F.addEventListener("pointermove", (t) => {
      const n = F.getBoundingClientRect();
      ((Ct = Math.round(Ln(t.clientX - n.left))), Wt && kn(t));
    }),
    F.addEventListener("pointerup", () => (Wt = !1)),
    F.addEventListener("pointercancel", () => (Wt = !1)),
    F.addEventListener("pointerleave", () => (Ct = null)));
  const Pn = () => {
    ((o.play = !o.play), It());
  };
  ie.onclick = Pn;
  let jn = null;
  function ua() {
    jn !== o.play &&
      ((jn = o.play),
      ie.classList.toggle("on", o.play),
      (ie.innerHTML = o.play ? Ne.pause : Ne.play),
      (ie.title = o.play
        ? translate("暂停 (空格)")
        : translate("播放一年 (空格)")));
  }
  const ma = v("#eph"),
    Cn = v("#camRd");
  function ba() {
    const t = T(o.doy);
    if (
      ((ma.innerHTML = translate(
        '<span><em>DATE</em><b>{0}</b></span><span><em>节气</em><b>{1}</b></span><span><em>SUBSOLAR</em><b class="s">{2}</b></span>',
        [G(o.doy), tn(o.doy), N(t)],
      )),
      o.scene === "noon")
    )
      Cn.textContent = "2D · MERIDIAN SECTION";
    else {
      const n = R.position,
        a = ((Math.atan2(n.x, n.z) / u + 360) % 360)
          .toFixed(0)
          .padStart(3, "0"),
        l = (Math.asin(n.y / n.length()) / u).toFixed(0),
        s = n.length().toFixed(1);
      Cn.textContent = `AZ ${a}° · EL ${l}° · R ${s}`;
    }
  }
  function Nn() {
    const t = At.getBoundingClientRect();
    t.width &&
      (St.setSize(t.width, t.height, !1),
      (R.aspect = t.width / t.height),
      R.updateProjectionMatrix(),
      na());
  }
  new ResizeObserver(Nn).observe(At);
  let le = !1;
  const Rn = () => {
    if (le) return;
    ((le = !0), v("#veil").classList.add("off"));
    const t = ct[o.ch];
    o.scene !== "noon" &&
      (R.position.set(...t.cam).multiplyScalar(2.1), Ht(yn(), 2600));
  };
  ((me.onLoad = Rn),
    (me.onProgress = (t, n, a) => {
      v("#veilBar").style.transform = `scaleX(${n / a})`;
    }),
    setTimeout(Rn, 9e3));
  let Bn = performance.now(),
    An = 0,
    Ve = 0;
  const et = new i.Vector3(),
    zn = new i.Vector3();
  function Vn(t) {
    requestAnimationFrame(Vn);
    const n = ot((t - Bn) / 1e3, 0, 0.05),
      a = t / 1e3;
    if (
      ((Bn = t),
      o.play && ((o.doy += n * 24), o.doy > 365 && (o.doy -= 365)),
      o.spin && (o.bj = (o.bj + n * 1.6) % 24),
      (o.play || o.spin) && Be(),
      ut)
    ) {
      const l = ot((t - ut.s) / ut.d, 0, 1),
        s = 1 - Math.pow(1 - l, 4);
      (R.position.lerpVectors(ut.p0, ut.p1, s), l >= 1 && (ut = null));
    }
    if (
      ((He.uT.value = a),
      (Xe.uT.value = a),
      (rn.uT.value = a),
      (Yt.season.value =
        0.5 - 0.5 * Math.cos((2 * Math.PI * (o.doy - 15)) / 365.25)),
      o.scene === "noon")
    )
      oa();
    else {
      ((it.autoRotate = o.rotate), it.update(), R.updateMatrixWorld());
      const l = R.matrixWorldInverse;
      if (
        ((rt = Math.atan2(R.position.x, R.position.z) / u), o.scene === "orbit")
      ) {
        const s = Q(o.doy);
        (ht.position.copy(s),
          xe.position.copy(s),
          (An += n * 0.8),
          (Zt.rotation.y = An),
          (en.rotation.y = a * 0.02),
          (an.visible = xe.visible = o.ch === 3 || o.ch === 0),
          (Ze.uE.value = (((Dt(o.doy) / (2 * Math.PI)) % 1) + 1) % 1),
          (Qe.material.rotation = a * 0.015));
        const r = ye.geometry.attributes.position,
          d = s.clone().multiplyScalar((s.length() - E * 1.25) / s.length()),
          p = s.clone().setLength(Xt * 1.25);
        (r.setXYZ(0, p.x, p.y, p.z),
          r.setXYZ(1, d.x, d.y, d.z),
          (r.needsUpdate = !0),
          ye.computeLineDistances(),
          et.set(0, 0, 0).applyMatrix4(l),
          Yt.sunView.value.set(et.x, et.y, et.z, 1),
          zn.copy(s).applyMatrix4(l),
          nn.material.uniforms.sunDir.value.copy(et).sub(zn).normalize(),
          St.render(z, R));
      } else {
        ((ne === null ||
          Math.abs(ne - o.doy) > 0.05 ||
          (o.ch === 5 && cn !== o.lat)) &&
          Zn(),
          (Tt.rotation.y = (90 + (o.bj - 8 - 12) * 15) * u),
          (Me.rotation.y = a * 0.006),
          (te.visible = o.grid));
        const s = o.ch;
        Ot.visible = s === 1;
        for (const r of dn)
          if (((r.a.visible = s === 1), s === 1)) {
            const d = rt + 18,
              p = D(r.la, d, y * 1.01);
            (r.a.position.copy(p),
              r.a.setDirection(
                new i.Vector3(Math.cos(d * u), 0, -Math.sin(d * u)),
              ),
              r.a.setLength(
                Math.max(0.05, 2.6 * Math.cos(r.la * u)),
                0.35,
                0.22,
              ));
          }
        sn.visible = ee.visible = we.visible = Et.visible = s !== 1;
        for (const r of Qn) {
          const d = (a * 0.55 + r.userData.ph) % 1;
          ((r.visible = s !== 1),
            r.scale.setScalar(0.25 + d * 1.1),
            (r.material.opacity = (1 - d) * 0.8));
        }
        ((Se.visible = s === 2),
          (Gt.visible = s === 5),
          et.copy(st).transformDirection(l),
          Yt.sunView.value.set(et.x, et.y, et.z, 0),
          ln.material.uniforms.sunDir.value.copy(et),
          St.render(_, R));
      }
      ea();
    }
    (ia(), ha(), ua(), (Ve += n), Ve > 0.08 && ((Ve = 0), sa(), ba()));
  }
  {
    const t = parseInt(location.hash.slice(1), 10);
    Pt(isNaN(t) ? 0 : t);
  }
  requestAnimationFrame(Vn);
}
function earthLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("地球运动课堂")), Ra());
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
                        jsxRuntime.jsx("defs", {
                          children: jsxRuntime.jsxs("radialGradient", {
                            id: "brandSun",
                            cx: ".5",
                            cy: ".5",
                            r: ".5",
                            children: [
                              jsxRuntime.jsx("stop", {
                                offset: "0",
                                stopColor: "#fff3c9",
                              }),
                              jsxRuntime.jsx("stop", {
                                offset: ".55",
                                stopColor: "#ffc861",
                              }),
                              jsxRuntime.jsx("stop", {
                                offset: "1",
                                stopColor: "#ff9a3c",
                              }),
                            ],
                          }),
                        }),
                        jsxRuntime.jsx("ellipse", {
                          cx: "16",
                          cy: "16",
                          rx: "13.5",
                          ry: "6.2",
                          stroke: "#d8b26a",
                          strokeOpacity: ".55",
                          strokeWidth: "1",
                          transform: "rotate(-14 16 16)",
                        }),
                        jsxRuntime.jsx("circle", {
                          cx: "16",
                          cy: "16",
                          r: "4.6",
                          fill: "url(#brandSun)",
                        }),
                        jsxRuntime.jsx("circle", {
                          className: "brand-earth",
                          cx: "29",
                          cy: "12.6",
                          r: "2.3",
                          fill: "#72c4ff",
                        }),
                      ],
                    }),
                    jsxRuntime.jsxs("div", {
                      children: [
                        jsxRuntime.jsxs("b", {
                          children: [
                            "EARTH",
                            jsxRuntime.jsx("i", {
                              children: "·MOTION",
                            }),
                          ],
                        }),
                        jsxRuntime.jsx("span", {
                          children: translate("地球运动 · 三维演示"),
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
                jsxRuntime.jsx(Sa, {}),
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
                jsxRuntime.jsxs("div", {
                  id: "card",
                  className: "box",
                  children: [
                    jsxRuntime.jsx("div", {
                      className: "hh",
                      id: "cardH",
                    }),
                    jsxRuntime.jsx("canvas", {
                      id: "cardC",
                    }),
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
                      title: translate("播放一年 (空格)"),
                    }),
                    jsxRuntime.jsxs("div", {
                      className: "tlr",
                      children: [
                        jsxRuntime.jsx("b", {
                          id: "tlDate",
                        }),
                        jsxRuntime.jsxs("span", {
                          children: [
                            jsxRuntime.jsx("em", {
                              id: "tlTerm",
                            }),
                            translate(" · 直射 "),
                            jsxRuntime.jsx("em", {
                              id: "tlDecl",
                            }),
                          ],
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
                "EARTH",
                jsxRuntime.jsx("i", {
                  children: "·MOTION",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "veil-s",
              children: translate(
                "正在载入 NASA Blue Marble 地表影像与夜间灯光",
              ),
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
export { earthLabPage as default };
