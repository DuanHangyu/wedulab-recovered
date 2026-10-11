// Recovered from public deployment: Page-rwd5-Bjn.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Gn } from "../../components/LanguageSwitcher.js";
import {
  G as Y,
  b as E,
  v as K,
  M as Z,
  L as Q,
  B as he,
  w as kt,
  x as Ot,
  C as ue,
  _ as u0,
  aa as Sn,
  c as re,
  N as Ue,
  o as yt,
  ab as kn,
  I as We,
  ac as Yn,
  d as gt,
  f as P,
  Q as H0,
  m as nt,
  ad as Ct,
  ae as Ut,
  V as In,
  l as $e,
  a3 as Bn,
  af as Pn,
  a4 as O0,
  a1 as m0,
  Y as Dt,
  y as En,
  K as b0,
  u as w0,
  X as _0,
  T as Xe,
  z as nn,
  $ as Jn,
  a0 as Kn,
  a9 as Zn,
  a6 as eo,
  a7 as to,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  b as no,
  s as oo,
  p as Ln,
  d as so,
  c as ao,
} from "../../vendor/charts-CzzpgoDB.js";
import {
  m as fe,
  s as pe,
  l as Tt,
  a as ro,
} from "../../vendor/theme-aLwyR9RG.js";
import { R as se } from "../../vendor/RoundedBoxGeometry-BuxEdaMS.js";
import {
  L as qn,
  a as io,
  b as co,
} from "../../vendor/LineSegments2-CF4-EQBa.js";
const xt = [
    {
      id: "efield",
      title: translate("电场线与等势面"),
      sub: "Field lines & equipotentials",
      scene: "efield",
      params: {
        preset: "dipole",
        q1: 5,
        q2: -5,
        lines: !0,
        equi: !0,
        surface: !1,
      },
      controls: ["preset", "q1", "q2", "lines", "equi", "surface"],
      tabs: ["probe", "phix"],
      cam: [
        [0, 0.86, 0.74],
        [0, 0, 0.03],
      ],
      body: translate(
        '<p>点电荷周围的电场 E = kQ/r²，多个电荷的电场按矢量<b>叠加</b>。用<b>电场线</b>形象地描述电场：线上每点的切线方向就是场强方向，线的疏密表示场强大小。电场线从<b>正电荷</b>（或无穷远）出发，终止于<b>负电荷</b>（或无穷远），不相交、不闭合。</p><p>电势 φ = kQ/r 是标量，直接相加。电势相等的点连成<b>等势线</b>：</p><p class="eq">等势线处处与电场线垂直，沿电场线方向电势降低</p><p>拖动电荷改变它们的位置，拖动<b>探针</b>读出任意一点的 E 和 φ。打开<b>三维电势面</b>：正电荷处是“山峰”，负电荷处是“深谷”，电场线就是“最陡的下坡方向”。</p>',
      ),
      steps: [
        translate("比较单个、同种、异种电荷的电场线"),
        translate("拖动探针，看 E 与等势线的关系"),
        translate("把 q₁、q₂ 调成不等量"),
        translate("打开三维电势面"),
      ],
    },
    {
      id: "work",
      title: translate("电场力做功与电势能"),
      sub: "Work & potential energy",
      scene: "work",
      params: {
        Q: 6,
        qt: 1,
        path: "line",
      },
      controls: ["Q", "qt", "path"],
      tabs: ["workpath", "worktable"],
      cam: [
        [0, 0.86, 0.74],
        [0, 0, 0.03],
      ],
      body: translate(
        '<p>把试探电荷 q 从 A 点移到 B 点，电场力做的功</p><p class="eq">W<sub>AB</sub> = q (φ<sub>A</sub> − φ<sub>B</sub>) = q U<sub>AB</sub></p><p>只与起点、终点的位置有关，<b>与路径无关</b>——和重力做功一样。所以可以定义<b>电势能</b> E<sub>p</sub> = qφ：电场力做正功，电势能减少；做负功，电势能增加。</p><p>分别沿<b>直线、折线、弯曲</b>三条路径移动 q，数据坞中的 W - s 曲线各不相同，终点处却汇于同一点。拖动 A、B 两点，或者把试探电荷换成负电荷再试。</p>',
      ),
      steps: [
        translate("沿直线把 q 从 A 移到 B"),
        translate("换折线、弯曲路径再走一次"),
        translate("比较三次的总功"),
        translate("把 q 改为负电荷，看功的正负"),
      ],
    },
    {
      id: "capacitor",
      title: translate("平行板电容器"),
      sub: "Parallel-plate capacitor",
      scene: "capacitor",
      record: "cap",
      params: {
        capMode: "Q",
        d: 4,
        S: 1,
        er: 1,
      },
      controls: ["capMode", "d", "S", "er"],
      tabs: ["captable", "cfit"],
      cam: [
        [0.04, 0.3, 0.92],
        [0.04, 0.14, -0.04],
      ],
      body: translate(
        '<p>两块彼此绝缘、靠得很近的平行金属板构成<b>平行板电容器</b>。它的电容</p><p class="eq">C = ε<sub>r</sub> S / (4πkd) = ε<sub>r</sub>ε<sub>0</sub> S / d</p><p>充电后<b>断开电源</b>，极板上的电荷量 Q 不变，由 U = Q/C 知：增大 d、减小正对面积 S，或抽出电介质，C 变小，<b>静电计</b>指针偏角（U）变大。而板间场强 E = U/d = Q/(ε<sub>r</sub>ε<sub>0</sub>S) 与 d 无关。</p><p>若始终<b>接在电源上</b>，U 不变，改变 d 时 Q 和 E 随之变化。记录多组数据，C - 1/d 图像是一条过原点的直线。</p>',
      ),
      steps: [
        translate("充电后断开电源，增大板间距离 d"),
        translate("错开极板减小正对面积 S"),
        translate("插入塑料或玻璃介质"),
        translate("记录数据，作 C - 1/d 图像"),
      ],
    },
    {
      id: "crt",
      title: translate("示波管"),
      sub: "Cathode-ray tube",
      scene: "crt",
      record: "crt",
      params: {
        crtMode: "dc",
        U1: 1500,
        Uy: 40,
        Ux: 0,
        amp: 60,
        ratio: 2,
        wave: "sine",
      },
      controls: (t) =>
        t.crtMode === "dc"
          ? ["crtMode", "U1", "Uy", "Ux"]
          : ["crtMode", "U1", "amp", "wave", "ratio"],
      remount: ["crtMode"],
      tabs: ["crtfit", "crtinfo"],
      cam: [
        [0.56, 0.32, 0.44],
        [-0.03, 0.16, 0],
      ],
      body: translate(
        '<p>阴极 K 被灯丝加热后发射电子，经加速电压 U₁ 加速：eU₁ = ½mv₀²。电子以 v₀ 垂直进入偏转电极（板长 L、间距 d），在电场中做<b>类平抛运动</b>，离开偏转板时的侧移</p><p class="eq">y = qU₂L² / (2mdv₀²) = U₂L² / (4dU₁)</p><p>之后匀速直线运动打到荧光屏上，好像从偏转板中点沿直线射出。偏移量与 U₂ 成正比，这就是示波器测电压的原理。</p><p>在 X 偏转板上加锯齿形的<b>扫描电压</b>，电子束从左到右匀速扫过屏幕；Y 板上加待测信号，屏上就画出信号的<b>波形</b>。</p>',
      ),
      steps: [
        translate("改变 U₂，记录光点偏移 Y"),
        translate("增大加速电压 U₁，偏移变小"),
        translate("切换到扫描模式观察波形"),
        translate("改变信号与扫描的频率比"),
      ],
    },
    {
      id: "maglines",
      title: translate("磁感线"),
      sub: "Magnetic field lines",
      scene: "maglines",
      record: "b",
      params: {
        src: "bar",
        I: 6,
        filings: !0,
        blines: !0,
        compass: !1,
      },
      controls: (t) =>
        ["wire", "loop", "sol"].includes(t.src)
          ? ["src", "I", "filings", "blines", "compass"]
          : ["src", "filings", "blines", "compass"],
      remount: ["src"],
      tabs: ["bprobe", "br"],
      cam: [
        [0, 0.82, 0.7],
        [0, 0, 0.03],
      ],
      body: translate(
        '<p>在玻璃板上均匀撒一层<b>铁屑</b>，轻敲玻璃板，铁屑被磁化后沿磁场方向排成一条条曲线；放上<b>小磁针</b>，静止时 N 极的指向就是该点的磁场方向。</p><p><b>磁感线</b>在磁体外部从 N 极出发回到 S 极，在内部从 S 极到 N 极，是<b>闭合曲线</b>。</p><p>电流也能产生磁场（奥斯特）。直导线的磁感线是一圈圈同心圆，用<b>安培定则</b>（右手螺旋定则）判断方向：</p><p class="eq">直导线 B = μ₀I / (2πr)</p><p>环形电流和通电<b>螺线管</b>的磁场与条形磁铁相似，螺线管内部是近似匀强的磁场。</p>',
      ),
      steps: [
        translate("比较条形、蹄形磁铁的铁屑图样"),
        translate("拖动小磁针，看它的指向"),
        translate("选择直导线，改变电流方向"),
        translate("拖动探头记录 B 与 r，验证 B ∝ 1/r"),
      ],
    },
    {
      id: "ampere",
      title: translate("安培力"),
      sub: "Force on a current",
      scene: "ampere",
      record: "f",
      params: {
        Ia: 2.5,
        mags: 2,
        idir: -1,
        bdir: 1,
      },
      controls: ["Ia", "mags", "idir", "bdir"],
      tabs: ["fi", "ampinfo"],
      cam: [
        [0.3, 0.36, 0.5],
        [0.04, 0.03, -0.03],
      ],
      body: translate(
        '<p>把一根铜棒横放在两条水平金属导轨上，置于蹄形磁铁的两极之间。接通电源，电流流过铜棒，铜棒受到<b>安培力</b>沿导轨滚动。</p><p class="eq">F = B I L</p><p>L 是导体在磁场中的有效长度（磁铁越多，L 越长）。安培力的方向用<b>左手定则</b>判断：伸开左手，让磁感线垂直穿入手心，四指指向电流方向，拇指所指就是安培力的方向。</p><p>改变电流方向或者对调磁极，铜棒的运动方向都会反过来；同时改变两者，方向不变。</p>',
      ),
      steps: [
        translate("闭合开关，观察铜棒运动方向"),
        translate("对调磁极或改变电流方向"),
        translate("改变电流 I，记录安培力 F"),
        translate("增加磁铁个数，比较 F"),
      ],
    },
    {
      id: "lorentz",
      title: translate("洛伦兹力"),
      sub: "Lorentz force",
      scene: "lorentz",
      record: "r",
      params: {
        lorMode: "tube",
        Ua: 200,
        Ic: 1.5,
        tilt: 0,
        Es: 20,
        Bs: 50,
      },
      controls: (t) =>
        t.lorMode === "tube"
          ? ["lorMode", "Ua", "Ic", "tilt"]
          : ["lorMode", "Es", "Bs"],
      remount: ["lorMode"],
      tabs: (t) => (t.lorMode === "tube" ? ["rv", "lorinfo"] : ["lorinfo"]),
      cam: [
        [0.18, 0.4, 0.98],
        [0, 0.22, 0],
      ],
      body: translate(
        '<p>运动电荷在磁场中受到<b>洛伦兹力</b> F = qvB（v ⊥ B），方向由左手定则判断（负电荷与正电荷相反）。洛伦兹力始终垂直于速度，<b>不做功</b>，只改变速度的方向。</p><p><b>洛伦兹力演示仪</b>：亥姆霍兹线圈产生匀强磁场，玻璃泡内的稀薄气体让电子束的径迹发光。电子垂直磁场射入时做<b>匀速圆周运动</b>：</p><p class="eq">r = mv / (qB)　　T = 2πm / (qB)</p><p>倾斜电子枪，速度有平行于 B 的分量，径迹变成<b>螺旋线</b>。</p><p><b>速度选择器</b>：电场与磁场互相垂直，只有 qE = qvB，即 <b>v = E / B</b> 的粒子能沿直线穿过狭缝。</p>',
      ),
      steps: [
        translate("增大线圈电流，圆周半径变小"),
        translate("增大加速电压，半径变大"),
        translate("记录 r 与 v，验证 r ∝ v"),
        translate("切换到速度选择器，调 E 或 B"),
      ],
    },
    {
      id: "massspec",
      title: translate("质谱仪与回旋加速器"),
      sub: "Mass spectrometer & cyclotron",
      scene: "massspec",
      params: {
        msMode: "ms",
        ions: "Ne",
        Um: 1e3,
        Bm: 0.12,
        part: "p",
        Bc: 1,
        Uc: 60,
      },
      controls: (t) =>
        t.msMode === "ms"
          ? ["msMode", "ions", "Um", "Bm"]
          : ["msMode", "part", "Bc", "Uc"],
      remount: ["msMode"],
      tabs: (t) => (t.msMode === "ms" ? ["msinfo"] : ["ek"]),
      cam: [
        [0.06, 0.92, 0.82],
        [0.06, 0, 0.1],
      ],
      body: translate(
        '<p><b>质谱仪</b>：离子经电压 U 加速后从狭缝 S 垂直进入匀强磁场，做半个圆周运动打在照相底片上：</p><p class="eq">qU = ½mv²　r = mv/(qB) = √(2mU/q) / B</p><p>电荷量相同的同位素，质量越大半径越大，在底片上形成一条条<b>谱线</b>，r₁ : r₂ = √m₁ : √m₂。阿斯顿就是这样发现了氖的同位素。</p><p><b>回旋加速器</b>：两个 D 形盒置于匀强磁场中，缝隙间加交变电压。粒子每次经过缝隙被加速一次，半径越来越大，但周期 T = 2πm/(qB) <b>与速度无关</b>，所以交变电压的频率可以固定。最终动能</p><p class="eq">E<sub>k</sub> = q²B²R² / (2m)</p><p>只取决于 B 和 D 形盒半径 R，与加速电压无关。</p>',
      ),
      steps: [
        translate("观察氖同位素的两条谱线"),
        translate("改变 B、U，看半径的变化"),
        translate("切换到回旋加速器"),
        translate("改变加速电压，比较最终动能"),
      ],
    },
    {
      id: "induction",
      title: translate("电磁感应与楞次定律"),
      sub: "Induction & Lenz's law",
      scene: "induction",
      record: "ev",
      params: {
        indMode: "magnet",
        turns: 400,
        pole: 1,
        vm: 0.4,
        Br: 0.8,
        Rr: 0.5,
        Fr: 20,
      },
      controls: (t) =>
        t.indMode === "magnet"
          ? ["indMode", "turns", "pole", "vm"]
          : ["indMode", "Br", "Rr", "Fr"],
      remount: ["indMode"],
      tabs: (t) =>
        t.indMode === "magnet" ? ["scope", "indinfo"] : ["scope", "ev"],
      cam: [
        [0.12, 0.42, 0.62],
        [0, 0.07, -0.08],
      ],
      body: translate(
        '<p>穿过闭合回路的<b>磁通量</b>发生变化，回路中就产生感应电流——<b>电磁感应</b>（法拉第）。感应电动势</p><p class="eq">E = N ΔΦ / Δt</p><p>拖动磁铁插入、拔出线圈，检流计指针偏转；磁铁不动时指针回零。插拔越快，偏转越大。</p><p><b>楞次定律</b>：感应电流的磁场总要<b>阻碍</b>引起感应电流的磁通量的变化——“来拒去留”。</p><p>导体棒在磁场中<b>切割磁感线</b>：E = BLv。感应电流使棒受到与运动方向相反的安培力 F = B²L²v/R，在恒定拉力下棒最终匀速运动。</p>',
      ),
      steps: [
        translate("拖动磁铁插入、拔出线圈"),
        translate("比较 N 极、S 极插入时的电流方向"),
        translate("加快插拔速度，指针偏转更大"),
        translate("切换到导体棒切割，记录 E 与 v"),
      ],
    },
    {
      id: "generator",
      title: translate("交流发电机"),
      sub: "AC generator",
      scene: "generator",
      params: {
        rps: 0.5,
        Ng: 100,
        Bg: 0.4,
        neutral: !0,
      },
      controls: ["rps", "Ng", "Bg", "neutral"],
      tabs: ["acwave", "acinfo"],
      cam: [
        [0.36, 0.44, 0.8],
        [0, 0.12, 0.03],
      ],
      body: translate(
        '<p>矩形线圈在匀强磁场中绕垂直于磁场的轴匀速转动，ab、cd 两边切割磁感线，线圈中产生大小和方向都周期性变化的<b>交变电流</b>。从<b>中性面</b>开始计时：</p><p class="eq">e = E<sub>m</sub> sin ωt　　E<sub>m</sub> = NBSω</p><p>线圈平面与磁场垂直的位置叫中性面：此时磁通量<b>最大</b>，但各边不切割磁感线，电动势<b>为零</b>；转过 90°，磁通量为零，电动势最大。每经过中性面一次，电流方向改变一次。</p><p>正弦交流电的<b>有效值</b> E = E<sub>m</sub> / √2：让交流电和直流电通过相同的电阻，相同时间内产生的热量相等。</p>',
      ),
      steps: [
        translate("慢速转动，观察 e - t 图"),
        translate("线圈经过中性面时读 e"),
        translate("加快转速，峰值和频率都变大"),
        translate("比较峰值与有效值"),
      ],
    },
    {
      id: "free",
      title: translate("自由实验"),
      sub: "Sandbox",
      scene: "free",
      params: {
        pk: "e",
        vf: 8,
        Bf: 1,
      },
      controls: ["pk", "vf", "Bf"],
      tabs: ["freeinfo"],
      cam: [
        [0, 0.95, 0.74],
        [0, 0, 0.04],
      ],
      body: translate(
        "<p>在实验台上自由放置<b>点电荷</b>，在右半边开启一块<b>匀强磁场区</b>，用粒子枪发射电子、质子或 α 粒子，观察它们在电场和磁场中的轨迹（Boris 算法逐步计算）。</p><p>· 点击面板上的按钮<b>添加电荷</b>，拖动电荷移动，选中后按 <b>Delete</b> 删除<br>· 拖动粒子枪移动，拖动金色圆环改变发射方向<br>· 粒子运动按慢镜头播放</p><p>试试让电子绕着正电荷转圈，或者让质子在磁场里转半圈后回来。</p>",
      ),
      steps: [
        translate("添加几个电荷"),
        translate("调整磁场与发射速度"),
        translate("发射粒子，观察轨迹"),
      ],
    },
  ],
  me = {
    x0: -1,
    x1: 1,
    y0: -0.56,
    y1: 0.56,
    thick: 0.04,
    floor: -0.78,
  };
function lo() {
  const o = document.createElement("canvas");
  ((o.width = 2048), (o.height = 1152));
  const s = o.getContext("2d"),
    r = document.createElement("canvas");
  ((r.width = 2048), (r.height = 1152));
  const i = r.getContext("2d");
  ((s.fillStyle = "#151619"),
    s.fillRect(0, 0, 2048, 1152),
    (i.fillStyle = "#d2d2d2"),
    i.fillRect(0, 0, 2048, 1152));
  let a = 17;
  const c = () => (a = (a * 1664525 + 1013904223) >>> 0) / 4294967296;
  for (let h = 0; h < 60; h++) {
    const f = c() * 2048,
      u = c() * 1152,
      b = 120 + c() * 360,
      M = s.createRadialGradient(f, u, 0, f, u, b),
      v = c() < 0.5 ? "255,255,255" : "0,0,0";
    (M.addColorStop(0, `rgba(${v},${0.012 + c() * 0.02})`),
      M.addColorStop(1, `rgba(${v},0)`),
      (s.fillStyle = M),
      s.fillRect(0, 0, 2048, 1152));
  }
  for (let h = 0; h < 26e3; h++) {
    const f = 30 + c() * 40;
    s.fillStyle = `rgba(${f},${f + 2},${f + 6},${0.18 + c() * 0.3})`;
    const u = 0.6 + c() * 1.6;
    s.fillRect(c() * 2048, c() * 1152, u, u);
  }
  i.lineCap = "round";
  for (let h = 0; h < 260; h++) {
    const f = c() * 2048,
      u = c() * 1152,
      b = 60 + c() * 400,
      M = c() * 6.28,
      v = 130 + c() * 60;
    ((i.strokeStyle = `rgba(${v},${v},${v},${0.15 + c() * 0.25})`),
      (i.lineWidth = 1 + c() * 5),
      i.beginPath(),
      i.arc(f, u, b, M, M + 0.3 + c() * 0.9),
      i.stroke());
  }
  const l = new kt(o);
  ((l.colorSpace = Ot), (l.anisotropy = 8));
  const p = new kt(r);
  return (
    (p.anisotropy = 8),
    {
      map: l,
      rough: p,
    }
  );
}
function po(t) {
  const e = fe(),
    o = new Y();
  t.add(o);
  const s = lo(),
    r = me.x1 - me.x0,
    i = me.y1 - me.y0,
    a = new E(
      new se(r, me.thick, i, 3, 0.008),
      new K({
        map: s.map,
        roughnessMap: s.rough,
        roughness: 0.9,
        metalness: 0,
        clearcoat: 0.25,
        clearcoatRoughness: 0.55,
        envMapIntensity: 0.5,
        specularIntensity: 0.6,
      }),
    );
  (a.position.set(0, -0.04 / 2, 0), (a.receiveShadow = !0), o.add(a));
  const c = new Z({
      color: "#2a2d33",
      metalness: 0.75,
      roughness: 0.4,
    }),
    l = -0.04 - me.floor;
  for (const u of [me.x0 + 0.06, me.x1 - 0.06])
    for (const b of [me.y0 + 0.06, me.y1 - 0.06]) {
      const M = new E(new se(0.05, l, 0.05, 2, 0.006), c);
      (M.position.set(u, me.floor + l / 2, b), o.add(M));
      const v = new E(new Q(0.03, 0.034, 0.016, 24), e.rubber);
      (v.position.set(u, me.floor + 0.008, b), o.add(v));
    }
  const p = (u, b, M, v) => {
    const m = new E(new se(u, 0.07, 0.02, 2, 0.004), c);
    (m.position.set(b, -0.04 - 0.035, M), (m.rotation.y = v), o.add(m));
  };
  (p(r - 0.16, 0, me.y1 - 0.06, 0),
    p(r - 0.16, 0, me.y0 + 0.06, 0),
    p(i - 0.16, me.x0 + 0.06, 0, Math.PI / 2),
    p(i - 0.16, me.x1 - 0.06, 0, Math.PI / 2));
  const h = new E(
    new he(r - 0.14, 0.02, i - 0.14),
    new Z({
      color: "#1d1f23",
      roughness: 0.7,
    }),
  );
  ((h.position.y = me.floor + 0.18), o.add(h));
  const f = new E(
    new he(r - 0.02, 0.006, 0.002),
    new Z({
      color: "#7a8089",
      metalness: 1,
      roughness: 0.3,
    }),
  );
  return (
    f.position.set(0, -0.04 + 0.006, me.y1 + 0.001),
    o.add(f),
    pe(o),
    (a.castShadow = !1),
    {
      root: o,
      top: a,
    }
  );
}
const dt = (t, e = 1) =>
    `${t > 0 ? "+" : t < 0 ? "−" : ""}${Math.abs(t).toFixed(e)}`,
  fo = {
    preset: {
      type: "seg",
      label: translate("电荷分布"),
      options: [
        ["single", translate("单个")],
        ["like", translate("同种")],
        ["dipole", translate("异种")],
        ["unequal", translate("不等量")],
        ["three", translate("三个")],
      ],
    },
    q1: {
      type: "range",
      label: translate("电荷 q₁"),
      min: -10,
      max: 10,
      step: 0.5,
      show: (t) => `${dt(t)} nC`,
    },
    q2: {
      type: "range",
      label: translate("电荷 q₂"),
      min: -10,
      max: 10,
      step: 0.5,
      show: (t) => `${dt(t)} nC`,
    },
    lines: {
      type: "toggle",
      label: translate("显示电场线"),
    },
    equi: {
      type: "toggle",
      label: translate("显示等势线"),
    },
    surface: {
      type: "toggle",
      label: translate("三维电势面"),
    },
    Q: {
      type: "range",
      label: translate("场源电荷 Q"),
      min: -10,
      max: 10,
      step: 0.5,
      show: (t) => `${dt(t)} nC`,
    },
    qt: {
      type: "range",
      label: translate("试探电荷 q"),
      min: -2,
      max: 2,
      step: 0.1,
      show: (t) => `${dt(t)} nC`,
    },
    path: {
      type: "seg",
      label: translate("路径"),
      options: [
        ["line", translate("直线")],
        ["corner", translate("折线")],
        ["arc", translate("弯曲")],
      ],
    },
    capMode: {
      type: "seg",
      label: translate("连接方式"),
      options: [
        ["Q", translate("充电后断开（Q 不变）")],
        ["U", translate("接电源（U 不变）")],
      ],
    },
    d: {
      type: "range",
      label: translate("板间距离 d"),
      min: 1,
      max: 10,
      step: 0.1,
      show: (t) => `${t.toFixed(1)} cm`,
    },
    S: {
      type: "range",
      label: translate("正对面积 S"),
      min: 0.2,
      max: 1,
      step: 0.01,
      show: (t) => `${Math.round(t * 400)} cm²`,
    },
    er: {
      type: "seg",
      label: translate("板间介质"),
      options: [
        [1, translate("空气")],
        [2.3, translate("塑料")],
        [6, translate("玻璃")],
      ],
    },
    crtMode: {
      type: "seg",
      label: translate("显示"),
      options: [
        ["dc", translate("直流偏转")],
        ["sweep", translate("扫描显示波形")],
      ],
    },
    U1: {
      type: "range",
      label: translate("加速电压 U₁"),
      min: 500,
      max: 3e3,
      step: 10,
      show: (t) => `${t.toFixed(0)} V`,
    },
    Uy: {
      type: "range",
      label: translate("Y 偏转电压 U₂"),
      min: -120,
      max: 120,
      step: 1,
      show: (t) => `${dt(t, 0)} V`,
    },
    Ux: {
      type: "range",
      label: translate("X 偏转电压"),
      min: -120,
      max: 120,
      step: 1,
      show: (t) => `${dt(t, 0)} V`,
    },
    amp: {
      type: "range",
      label: translate("信号峰值"),
      min: 0,
      max: 120,
      step: 1,
      show: (t) => `${t.toFixed(0)} V`,
    },
    ratio: {
      type: "seg",
      label: translate("信号频率 / 扫描频率"),
      options: [
        [1, "1"],
        [2, "2"],
        [3, "3"],
        [0.5, "½"],
      ],
    },
    wave: {
      type: "seg",
      label: translate("信号波形"),
      options: [
        ["sine", translate("正弦")],
        ["square", translate("方波")],
        ["tri", translate("三角")],
      ],
    },
    src: {
      type: "seg",
      label: translate("磁场来源"),
      options: [
        ["bar", translate("条形")],
        ["horse", translate("蹄形")],
        ["wire", translate("直导线")],
        ["loop", translate("环形")],
        ["sol", translate("螺线管")],
      ],
    },
    I: {
      type: "range",
      label: translate("电流 I"),
      min: -10,
      max: 10,
      step: 0.5,
      show: (t) => `${dt(t)} A`,
    },
    filings: {
      type: "toggle",
      label: translate("撒铁屑"),
    },
    blines: {
      type: "toggle",
      label: translate("显示磁感线"),
    },
    compass: {
      type: "toggle",
      label: translate("小磁针阵列"),
    },
    Ia: {
      type: "range",
      label: translate("电流 I"),
      min: 0,
      max: 5,
      step: 0.1,
      show: (t) => `${t.toFixed(1)} A`,
    },
    mags: {
      type: "seg",
      label: translate("磁铁个数（有效长度 L）"),
      options: [
        [1, "1"],
        [2, "2"],
        [3, "3"],
      ],
    },
    idir: {
      type: "seg",
      label: translate("电流方向"),
      options: [
        [1, translate("由近到远")],
        [-1, translate("由远到近")],
      ],
    },
    bdir: {
      type: "seg",
      label: translate("磁极"),
      options: [
        [1, translate("N 极在上")],
        [-1, translate("S 极在上")],
      ],
    },
    lorMode: {
      type: "seg",
      label: translate("实验"),
      options: [
        ["tube", translate("电子束圆周运动")],
        ["sel", translate("速度选择器")],
      ],
    },
    Ua: {
      type: "range",
      label: translate("加速电压 U"),
      min: 100,
      max: 400,
      step: 5,
      show: (t) => `${t.toFixed(0)} V`,
    },
    Ic: {
      type: "range",
      label: translate("线圈电流 I（磁感应强度 B）"),
      min: 0,
      max: 3,
      step: 0.05,
      show: (t) => `${t.toFixed(2)} A`,
    },
    tilt: {
      type: "range",
      label: translate("电子枪倾角 α"),
      min: 0,
      max: 40,
      step: 1,
      show: (t) => `${t.toFixed(0)}°`,
    },
    Es: {
      type: "range",
      label: translate("板间电场 E"),
      min: 0,
      max: 40,
      step: 0.5,
      show: (t) => `${t.toFixed(1)} kV/m`,
    },
    Bs: {
      type: "range",
      label: translate("磁感应强度 B"),
      min: 0,
      max: 200,
      step: 1,
      show: (t) => `${t.toFixed(0)} mT`,
    },
    msMode: {
      type: "seg",
      label: translate("仪器"),
      options: [
        ["ms", translate("质谱仪")],
        ["cyc", translate("回旋加速器")],
      ],
    },
    ions: {
      type: "seg",
      label: translate("离子"),
      options: [
        ["H", translate("氢 H / D / T")],
        ["Ne", translate("氖 ²⁰Ne / ²²Ne")],
        ["Cl", translate("氯 ³⁵Cl / ³⁷Cl")],
      ],
    },
    Um: {
      type: "range",
      label: translate("加速电压 U"),
      min: 200,
      max: 2e3,
      step: 10,
      show: (t) => `${t.toFixed(0)} V`,
    },
    Bm: {
      type: "range",
      label: translate("磁感应强度 B"),
      min: 0.05,
      max: 0.4,
      step: 0.005,
      show: (t) => `${(t * 1e3).toFixed(0)} mT`,
    },
    part: {
      type: "seg",
      label: translate("粒子"),
      options: [
        ["p", translate("质子")],
        ["d", translate("氘核")],
        ["a", translate("α 粒子")],
      ],
    },
    Bc: {
      type: "range",
      label: translate("磁感应强度 B"),
      min: 0.5,
      max: 1.6,
      step: 0.01,
      show: (t) => `${t.toFixed(2)} T`,
    },
    Uc: {
      type: "range",
      label: translate("D 形盒间电压 U"),
      min: 20,
      max: 200,
      step: 5,
      show: (t) => `${t.toFixed(0)} kV`,
    },
    indMode: {
      type: "seg",
      label: translate("实验"),
      options: [
        ["magnet", translate("磁铁插拔线圈")],
        ["rod", translate("导体棒切割")],
      ],
    },
    turns: {
      type: "seg",
      label: translate("线圈匝数 N"),
      options: [
        [200, "200"],
        [400, "400"],
        [800, "800"],
      ],
    },
    pole: {
      type: "seg",
      label: translate("磁铁朝向线圈的一端"),
      options: [
        [1, translate("N 极")],
        [-1, translate("S 极")],
      ],
    },
    vm: {
      type: "range",
      label: translate("插拔速度"),
      min: 0.1,
      max: 1,
      step: 0.05,
      show: (t) => `${t.toFixed(2)} m/s`,
    },
    Br: {
      type: "range",
      label: translate("磁感应强度 B"),
      min: 0.2,
      max: 1,
      step: 0.05,
      show: (t) => `${t.toFixed(2)} T`,
    },
    Rr: {
      type: "range",
      label: translate("电阻 R"),
      min: 0.2,
      max: 2,
      step: 0.1,
      show: (t) => `${t.toFixed(1)} Ω`,
    },
    Fr: {
      type: "range",
      label: translate("拉力 F"),
      min: 0,
      max: 50,
      step: 1,
      show: (t) => `${t.toFixed(0)} mN`,
    },
    rps: {
      type: "range",
      label: translate("转速 n"),
      min: 0,
      max: 3,
      step: 0.05,
      show: (t) => translate("{0} 转/秒", [t.toFixed(2)]),
    },
    Ng: {
      type: "seg",
      label: translate("线圈匝数 N"),
      options: [
        [50, "50"],
        [100, "100"],
        [200, "200"],
      ],
    },
    Bg: {
      type: "range",
      label: translate("磁感应强度 B"),
      min: 0.1,
      max: 0.8,
      step: 0.01,
      show: (t) => `${t.toFixed(2)} T`,
    },
    neutral: {
      type: "toggle",
      label: translate("显示中性面"),
    },
    pk: {
      type: "seg",
      label: translate("发射的粒子"),
      options: [
        ["e", translate("电子")],
        ["p", translate("质子")],
        ["a", translate("α 粒子")],
      ],
    },
    vf: {
      type: "range",
      label: translate("发射速度 v"),
      min: 0.05,
      max: 20,
      step: 0.05,
      show: (t) => `${t.toFixed(2)} ×10⁶ m/s`,
    },
    Bf: {
      type: "range",
      label: translate("磁场区 B（向上为正）"),
      min: -20,
      max: 20,
      step: 0.5,
      show: (t) => `${dt(t)} mT`,
    },
  },
  ho = (t, e, o, s) => no(t, e, o, s, fo),
  Cn = 89875517923e-1,
  uo = 88541878128e-22,
  ne = 1602176634e-28,
  Be = 91093837015e-41,
  Q0 = 167262192369e-38,
  Ht = 16605390666e-37;
function wt(t, e, o, s = 0) {
  let r = 0,
    i = 0;
  for (const a of t) {
    const c = e - a.x,
      l = o - a.y,
      p = c * c + l * l + s * s;
    if (p === 0) continue;
    const h = (Cn * a.q) / (p * Math.sqrt(p));
    ((r += h * c), (i += h * l));
  }
  return [r, i];
}
function et(t, e, o, s = 0) {
  let r = 0;
  for (const i of t) {
    const a = Math.sqrt((e - i.x) ** 2 + (o - i.y) ** 2 + s * s);
    a > 0 && (r += (Cn * i.q) / a);
  }
  return r;
}
function c0(
  t,
  e,
  o,
  {
    dir: s = 1,
    step: r = 0.004,
    maxLen: i = 3,
    bounds: a = null,
    stop: c = null,
    closeAfter: l = 0,
  } = {},
) {
  const p = [[e, o]],
    h = (v, m) => {
      const [k, B] = t(v, m),
        y = Math.hypot(k, B);
      return y > 0 && isFinite(y) ? [(s * k) / y, (s * B) / y] : null;
    };
  let f = e,
    u = o,
    b = 0;
  const M = Math.ceil(i / r);
  for (let v = 0; v < M; v++) {
    const m = h(f, u);
    if (!m)
      return {
        pts: p,
        end: "null",
      };
    const k = h(f + (m[0] * r) / 2, u + (m[1] * r) / 2);
    if (!k)
      return {
        pts: p,
        end: "null",
      };
    const B = h(f + (k[0] * r) / 2, u + (k[1] * r) / 2);
    if (!B)
      return {
        pts: p,
        end: "null",
      };
    const y = h(f + B[0] * r, u + B[1] * r);
    if (!y)
      return {
        pts: p,
        end: "null",
      };
    if (
      ((f += (r / 6) * (m[0] + 2 * k[0] + 2 * B[0] + y[0])),
      (u += (r / 6) * (m[1] + 2 * k[1] + 2 * B[1] + y[1])),
      (b += r),
      p.push([f, u]),
      a && (f < a[0] || f > a[2] || u < a[1] || u > a[3]))
    )
      return {
        pts: p,
        end: "bounds",
      };
    const N = c?.(f, u);
    if (N != null && N !== !1)
      return {
        pts: p,
        end: "stop",
        hit: N,
      };
    if (l && b > l && Math.hypot(f - e, u - o) < r * 1.5)
      return (
        p.push([e, o]),
        {
          pts: p,
          end: "closed",
        }
      );
  }
  return {
    pts: p,
    end: "length",
  };
}
function X0(
  t,
  {
    perCoulomb: e = 12e8,
    minLines: o = 4,
    rStart: s = 0.012,
    rStop: r = 0.008,
    step: i = 0.004,
    bounds: a = [-0.5, -0.3, 0.5, 0.3],
    maxLen: c = 2.5,
  } = {},
) {
  const l = [],
    p = (u, b) => wt(t, u, b),
    h = (u) => (b, M) => {
      for (let v = 0; v < t.length; v++) {
        const m = t[v];
        if (Math.sign(m.q) === u && (b - m.x) ** 2 + (M - m.y) ** 2 < r * r)
          return v;
      }
      return null;
    },
    f = (u) => Math.max(o, Math.round(Math.abs(u) * e));
  return (
    t.forEach((u, b) => {
      if (u.q === 0) return;
      const M = f(u.q),
        v = u.q > 0;
      for (let m = 0; m < M; m++) {
        const k = ((m + 0.5) / M) * Math.PI * 2,
          B = u.x + Math.cos(k) * s,
          y = u.y + Math.sin(k) * s,
          N = c0(p, B, y, {
            dir: v ? 1 : -1,
            step: i,
            maxLen: c,
            bounds: a,
            stop: h(v ? -1 : 1),
          });
        v
          ? l.push({
              pts: [[u.x, u.y], ...N.pts],
              from: b,
              to: N.end === "stop" ? N.hit : -1,
            })
          : N.end !== "stop" &&
            l.push({
              pts: [...N.pts.reverse(), [u.x, u.y]],
              from: -1,
              to: b,
            });
      }
    }),
    l
  );
}
const R0 = (t, e, o) => (t * uo * e) / o;
function mo({ er: t = 1, S: e, d: o, mode: s = "Q", Q0: r = 0, U0: i = 0 }) {
  const a = R0(t, e, o),
    c = s === "Q" ? r : a * i,
    l = c / a;
  return {
    C: a,
    Q: c,
    U: l,
    E: l / o,
    sigma: c / e,
    energy: 0.5 * c * l,
  };
}
const x0 = new In();
function bo(t, e = !0) {
  return new co({
    linewidth: t,
    worldUnits: !0,
    vertexColors: !0,
    transparent: !0,
    depthWrite: !1,
    blending: e ? yt : kn,
    toneMapped: !1,
    opacity: e ? 1 : 0.9,
  });
}
function on(t, e = !0) {
  const o = new qn(),
    s = new io(o, bo(t, e));
  return (
    (s.frustumCulled = !1),
    (s.onBeforeRender = (r) => {
      (r.getSize(x0), s.material.resolution.set(x0.x, x0.y));
    }),
    s
  );
}
const Kt = new ue();
function Te({
  width: t = 0.0016,
  halo: e = 4.5,
  haloOpacity: o = 0.16,
  gain: s = 2.4,
  additive: r = !0,
} = {}) {
  const i = new Y(),
    a = on(t, r),
    c = on(t * e, r);
  (i.add(c, a), (c.visible = r));
  let l = !0;
  return (
    (i.set = (p) => {
      const h = [],
        f = [],
        u = [];
      for (const b of p) {
        const M = b.pts;
        if (!M || M.length < 2) continue;
        Kt.set(b.color || "#ffffff");
        const v = Kt.r,
          m = Kt.g,
          k = Kt.b,
          B = (b.intensity ?? 1) * s,
          y = M.length;
        for (let N = 1; N < y; N++) {
          const $ = M[N - 1],
            j = M[N];
          h.push($[0], $[1], $[2], j[0], j[1], j[2]);
          let w = B,
            I = B;
          (b.fade != null &&
            ((w = B * (b.fade + (1 - b.fade) * ((N - 1) / (y - 1)) ** 1.5)),
            (I = B * (b.fade + (1 - b.fade) * (N / (y - 1)) ** 1.5))),
            f.push(v * w, m * w, k * w, v * I, m * I, k * I));
          const g = o / s;
          u.push(
            v * w * g,
            m * w * g,
            k * w * g,
            v * I * g,
            m * I * g,
            k * I * g,
          );
        }
      }
      if (((l = !h.length), (i.visible = !l && i.userData.show !== !1), !l))
        for (const [b, M] of [
          [a, f],
          [c, u],
        ])
          (b.geometry.dispose(),
            (b.geometry = new qn()),
            b.geometry.setPositions(h),
            b.geometry.setColors(M));
    }),
    (i.show = (p) => {
      ((i.userData.show = p), (i.visible = p && !l));
    }),
    (i.setWidth = (p) => {
      ((a.material.linewidth = p), (c.material.linewidth = p * e));
    }),
    i
  );
}
function _t({ size: t = 0.009, max: e = 600, additive: o = !0 } = {}) {
  const s = new u0();
  (s.moveTo(t, 0),
    s.lineTo(-t * 0.6, t * 0.55),
    s.lineTo(-t * 0.25, 0),
    s.lineTo(-t * 0.6, -t * 0.55),
    s.closePath());
  const r = new Sn(s);
  r.rotateX(-Math.PI / 2);
  const i = new re({
      color: "#ffffff",
      transparent: !0,
      depthWrite: !1,
      blending: o ? yt : kn,
      toneMapped: !1,
      side: Ue,
    }),
    a = new We(r, i, e);
  (a.instanceMatrix.setUsage(Yn), (a.frustumCulled = !1), (a.count = 0));
  const c = new gt(),
    l = new H0(),
    p = new P(1, 1, 1),
    h = new P(),
    f = new P(),
    u = new P(),
    b = new P(),
    M = new P(),
    v = new gt(),
    m = new ue();
  return (
    (a.set = (k) => {
      const B = Math.min(e, k.length);
      for (let y = 0; y < B; y++) {
        const N = k[y];
        (h.set(...N.p),
          f.set(...N.d).normalize(),
          u.set(0, 1, 0),
          Math.abs(f.y) > 0.98 && u.set(0, 0, 1),
          M.crossVectors(f, u).normalize(),
          b.crossVectors(M, f).normalize(),
          v.makeBasis(f, b, M),
          l.setFromRotationMatrix(v),
          p.setScalar(N.scale ?? 1),
          c.compose(h, l, p),
          a.setMatrixAt(y, c),
          m.set(N.color || "#ffffff").multiplyScalar(N.gain ?? 2),
          a.setColorAt(y, m));
      }
      ((a.count = B),
        (a.instanceMatrix.needsUpdate = !0),
        a.instanceColor && (a.instanceColor.needsUpdate = !0));
    }),
    a
  );
}
function Qt(t, e, { offset: o = 0.5, color: s, scale: r, gain: i } = {}) {
  const a = [];
  let c = -e * o;
  for (let l = 1; l < t.length; l++) {
    const p = t[l - 1],
      h = t[l],
      f = h[0] - p[0],
      u = h[1] - p[1],
      b = h[2] - p[2],
      M = Math.hypot(f, u, b);
    if (M < 1e-9) continue;
    let v = e - c;
    for (; v <= M;) {
      const m = v / M;
      (a.push({
        p: [p[0] + f * m, p[1] + u * m, p[2] + b * m],
        d: [f, u, b],
        color: s,
        scale: r,
        gain: i,
      }),
        (v += e));
    }
    c = (c + M) % e;
  }
  return a;
}
let Zt = null;
function Nt() {
  if (Zt) return Zt;
  const t = document.createElement("canvas");
  t.width = t.height = 128;
  const e = t.getContext("2d"),
    o = e.createRadialGradient(64, 64, 0, 64, 64, 64);
  return (
    o.addColorStop(0, "rgba(255,255,255,1)"),
    o.addColorStop(0.18, "rgba(255,255,255,.55)"),
    o.addColorStop(0.45, "rgba(255,255,255,.12)"),
    o.addColorStop(1, "rgba(255,255,255,0)"),
    (e.fillStyle = o),
    e.fillRect(0, 0, 128, 128),
    (Zt = new kt(t)),
    Zt
  );
}
function G0(t = "#9fd8ff", e = 0.003, o = 0.03) {
  const s = new Y(),
    r = new E(
      new nt(e, 16, 12),
      new re({
        color: new ue(t).multiplyScalar(3),
        toneMapped: !1,
      }),
    ),
    i = new Ct(
      new Ut({
        map: Nt(),
        color: t,
        transparent: !0,
        depthWrite: !1,
        blending: yt,
        toneMapped: !1,
        opacity: 0.85,
      }),
    );
  return (
    i.scale.setScalar(o),
    s.add(r, i),
    (s.setColor = (a) => {
      (r.material.color.set(a).multiplyScalar(3), i.material.color.set(a));
    }),
    (s.sprite = i),
    s
  );
}
const e0 = 12,
  zt = 0.008,
  A0 = "#ff5a4a",
  j0 = "#4a8bff";
function Un(t, e, o, s = !0) {
  const r = document.createElement("canvas");
  ((r.width = t), (r.height = e), o(r.getContext("2d"), t, e));
  const i = new kt(r);
  return (s && (i.colorSpace = Ot), (i.anisotropy = 8), i);
}
function g0(t = 0.86, e = 0.56, { light: o = !1 } = {}) {
  const s = new Y(),
    r = Un(2048, Math.round((2048 * e) / t), (h, f, u) => {
      ((h.fillStyle = o ? "#e9e7e1" : "#0c0d10"), h.fillRect(0, 0, f, u));
      const b = f / t;
      for (let M = 0; M * 0.01 <= t; M++) {
        const v = Math.round(M * 0.01 * b) + 0.5;
        ((h.strokeStyle = o
          ? `rgba(40,40,50,${M % 10 ? 0.06 : 0.16})`
          : `rgba(180,190,220,${M % 10 ? 0.05 : 0.12})`),
          h.beginPath(),
          h.moveTo(v, 0),
          h.lineTo(v, u),
          h.stroke());
      }
      for (let M = 0; M * 0.01 <= e; M++) {
        const v = Math.round(M * 0.01 * b) + 0.5;
        ((h.strokeStyle = o
          ? `rgba(40,40,50,${M % 10 ? 0.06 : 0.16})`
          : `rgba(180,190,220,${M % 10 ? 0.05 : 0.12})`),
          h.beginPath(),
          h.moveTo(0, v),
          h.lineTo(f, v),
          h.stroke());
      }
    }),
    i = {
      uQ: {
        value: Array.from(
          {
            length: e0,
          },
          () => new P(),
        ),
      },
      uN: {
        value: 0,
      },
      uStep: {
        value: 200,
      },
      uEqui: {
        value: 1,
      },
      uTint: {
        value: 1,
      },
    },
    a = new K({
      map: r,
      color: "#ffffff",
      roughness: o ? 0.6 : 0.5,
      metalness: 0,
      clearcoat: o ? 0.1 : 0.22,
      clearcoatRoughness: 0.5,
      envMapIntensity: o ? 0.4 : 0.45,
    });
  a.onBeforeCompile = (h) => {
    (Object.assign(h.uniforms, i),
      (h.vertexShader = h.vertexShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vWp;`,
        )
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
vWp = (modelMatrix * vec4(position, 1.0)).xyz;`,
        )),
      (h.fragmentShader = h.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying vec3 vWp;
uniform vec3 uQ[${e0}];
uniform int uN;
uniform float uStep;
uniform float uEqui;
uniform float uTint;`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
        if (uN > 0) {
          float phi = 0.0;
          for (int i = 0; i < ${e0}; i++) {
            if (i >= uN) break;
            float r = max(length(vWp.xz - uQ[i].xy), 0.004);
            phi += 8.98755 * uQ[i].z / r; // k·q / r，q 以 nC 计 → V
          }
          // 电势着色：正电势偏红、负电势偏蓝
          float s = clamp(phi / 2500.0, -1.0, 1.0);
          vec3 tint = s > 0.0 ? vec3(1.0, 0.24, 0.16) : vec3(0.2, 0.42, 1.0);
          totalEmissiveRadiance += tint * pow(abs(s), 0.7) * 0.16 * uTint;
          // 等势线：在 φ = k·step 处画细线，过密处淡出
          float f = phi / uStep;
          float w = fwidth(f);
          float d = abs(fract(f - 0.5) - 0.5) / max(w, 1e-4);
          float line = (1.0 - min(d / 1.2, 1.0)) * (1.0 - smoothstep(0.18, 0.5, w)) * uEqui;
          vec3 lc = phi > 0.5 * uStep ? vec3(1.0, 0.72, 0.62) : phi < -0.5 * uStep ? vec3(0.62, 0.78, 1.0) : vec3(0.85, 0.8, 1.0);
          totalEmissiveRadiance += lc * line * 0.9;
        }`,
        )));
  };
  const c = new E(new se(t, zt, e, 2, 0.002), [a]);
  ((c.material = a), (c.position.y = zt / 2), (c.receiveShadow = !0), s.add(c));
  const l = fe(),
    p = 0.012;
  for (const [h, f, u, b] of [
    [t + 2 * p, p, 0, e / 2 + p / 2],
    [t + 2 * p, p, 0, -e / 2 - p / 2],
    [p, e, t / 2 + p / 2, 0],
    [p, e, -t / 2 - p / 2, 0],
  ]) {
    const M = new E(new se(h, zt + 0.004, f, 2, 0.002), l.aluDark);
    (M.position.set(u, (zt + 0.004) / 2, b),
      (M.castShadow = M.receiveShadow = !0),
      s.add(M));
  }
  return (
    (s.w = t),
    (s.h = e),
    (s.top = zt),
    (s.setCharges = (h) => {
      const f = Math.min(e0, h.length);
      for (let u = 0; u < f; u++) i.uQ.value[u].set(h[u].x, h[u].y, h[u].q);
      i.uN.value = f;
    }),
    (s.setEqui = (h) => (i.uEqui.value = h ? 1 : 0)),
    (s.setTint = (h) => (i.uTint.value = h)),
    (s.setStep = (h) => (i.uStep.value = h)),
    s
  );
}
function Y0(t = 1, e = 0.013) {
  const o = new Y(),
    s = t >= 0 ? A0 : j0,
    r = new E(
      new nt(e, 48, 32),
      new K({
        color: s,
        metalness: 0.35,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        emissive: s,
        emissiveIntensity: 0.35,
      }),
    );
  ((r.position.y = e), (r.castShadow = !0));
  const i = new Ct(
    new Ut({
      map: Nt(),
      color: s,
      transparent: !0,
      depthWrite: !1,
      blending: yt,
      toneMapped: !1,
      opacity: 0.7,
    }),
  );
  (i.scale.setScalar(e * 7), (i.position.y = e));
  const a = new re({
      color: new ue("#ffffff").multiplyScalar(1.6),
      toneMapped: !1,
    }),
    c = new E(new he(e * 0.9, e * 0.12, e * 0.22), a);
  c.position.y = e * 2 + 6e-4;
  const l = new E(new he(e * 0.22, e * 0.12, e * 0.9), a);
  return (
    (l.position.y = e * 2 + 6e-4),
    o.add(r, i, c, l),
    (o.ball = r),
    (o.r = e),
    (o.setSign = (p) => {
      const h = p >= 0 ? A0 : j0;
      (r.material.color.set(h),
        r.material.emissive.set(h),
        i.material.color.set(h),
        (l.visible = p >= 0));
    }),
    (o.setSize = (p) => {
      (r.scale.setScalar(p),
        (r.position.y = e * p),
        (i.position.y = e * p),
        i.scale.setScalar(e * 7 * p),
        (c.position.y = l.position.y = e * 2 * p + 6e-4));
    }),
    o.setSign(t),
    o
  );
}
function Tn(t = "#ffd25a") {
  const e = new Y(),
    o = fe(),
    s = new E(
      new Q(0.014, 0.014, 0.003, 40),
      new K({
        color: "#ffffff",
        transmission: 0.9,
        roughness: 0.05,
        thickness: 0.003,
        transparent: !0,
        opacity: 0.6,
      }),
    );
  s.position.y = 0.0015;
  const r = new E(
    new Xe(0.014, 0.0012, 8, 48),
    new re({
      color: new ue(t).multiplyScalar(1.6),
      toneMapped: !1,
    }),
  );
  ((r.rotation.x = Math.PI / 2), (r.position.y = 0.003));
  const i = new E(
    new Q(0.0022, 0.0022, 0.004, 16),
    new re({
      color: new ue(t).multiplyScalar(2),
      toneMapped: !1,
    }),
  );
  i.position.y = 0.003;
  const a = new E(new Q(0.0025, 0.0025, 0.06, 16), o.plastic);
  a.position.set(0, 0.033, 0);
  const c = new E(
    new nt(0.006, 20, 14),
    new K({
      color: t,
      roughness: 0.3,
      clearcoat: 1,
    }),
  );
  ((c.position.y = 0.064), e.add(s, r, i, a, c));
  const l = new Y(),
    p = new re({
      color: new ue(t).multiplyScalar(1.8),
      toneMapped: !1,
    }),
    h = new E(new Q(0.0016, 0.0016, 1, 10), p);
  h.rotation.z = -Math.PI / 2;
  const f = new E(new _0(0.0052, 0.014, 16), p);
  return (
    (f.rotation.z = -Math.PI / 2),
    l.add(h, f),
    (l.position.y = 0.004),
    e.add(l),
    (e.setArrow = (u, b) => {
      ((l.visible = b > 0.004), (l.rotation.y = -u));
      const M = Math.max(0.001, b - 0.014);
      ((h.scale.y = M),
        (h.position.x = 0.014 + M / 2 - 0.007),
        (f.position.x = 0.014 + M));
    }),
    pe(e)
  );
}
function Xt(t, { w: e = 0.08, h: o = 0.02, accent: s = "#a78bff" } = {}) {
  const r = Ln(t, {
    w: 512,
    h: Math.round((512 * o) / e),
    accent: s,
  });
  return new E(
    new $e(e, o),
    new Z({
      map: r,
      roughness: 0.6,
    }),
  );
}
function Nn({
  kind: t = "zero",
  label: e = "G",
  ticks: o = 30,
  numbers: s = null,
} = {}) {
  return Un(512, 320, (r, i, a) => {
    ((r.fillStyle = "#f2efe6"), r.fillRect(0, 0, i, a));
    const c = i / 2,
      l = a * 0.92,
      p = a * 0.74,
      h = (-50 * Math.PI) / 180,
      f = (50 * Math.PI) / 180;
    ((r.strokeStyle = "#1b1d21"),
      (r.lineWidth = 3),
      r.beginPath(),
      r.arc(c, l, p, -Math.PI / 2 + h, -Math.PI / 2 + f),
      r.stroke());
    for (let b = 0; b <= o; b++) {
      const M = h + ((f - h) * b) / o - Math.PI / 2,
        v = b % 5 === 0;
      ((r.lineWidth = v ? 3 : 1.5),
        r.beginPath(),
        r.moveTo(c + Math.cos(M) * p, l + Math.sin(M) * p),
        r.lineTo(
          c + Math.cos(M) * (p - (v ? 26 : 14)),
          l + Math.sin(M) * (p - (v ? 26 : 14)),
        ),
        r.stroke());
    }
    ((r.fillStyle = "#1b1d21"),
      (r.font = "600 26px 'JetBrains Mono', Menlo, monospace"),
      (r.textAlign = "center"),
      (r.textBaseline = "middle"));
    const u =
      s ||
      (t === "zero"
        ? ["3", "2", "1", "0", "1", "2", "3"]
        : ["0", "1", "2", "3", "4", "5", "6"]);
    (u.forEach((b, M) => {
      const v = h + ((f - h) * M) / (u.length - 1) - Math.PI / 2;
      r.fillText(b, c + Math.cos(v) * (p - 50), l + Math.sin(v) * (p - 50));
    }),
      (r.font = "italic 700 46px Georgia, serif"),
      (r.fillStyle = "#b8322a"),
      r.fillText(e, c, l - p * 0.42),
      (r.strokeStyle = "rgba(0,0,0,.25)"),
      (r.lineWidth = 2),
      r.strokeRect(6, 6, i - 12, a - 12));
  });
}
function zn({
  kind: t = "zero",
  label: e = "G",
  size: o = 0.12,
  numbers: s = null,
  case: r = "#1b1d21",
} = {}) {
  const i = fe(),
    a = new Y(),
    c = o,
    l = o * 0.78,
    p = o * 0.55,
    h = new E(
      new se(c, l, p, 3, 0.008),
      new K({
        color: r,
        roughness: 0.38,
        clearcoat: 0.6,
      }),
    );
  ((h.position.y = l / 2), a.add(h));
  const f = new Y();
  (f.position.set(0, l * 0.58, p / 2 + 5e-4), a.add(f));
  const u = new E(
    new $e(c * 0.86, l * 0.62),
    new Z({
      map: Nn({
        kind: t,
        label: e,
        numbers: s,
      }),
      roughness: 0.5,
    }),
  );
  f.add(u);
  const b = new E(
    new $e(c * 0.88, l * 0.64),
    new K({
      color: "#ffffff",
      roughness: 0.02,
      transmission: 1,
      transparent: !0,
      opacity: 0.25,
      envMapIntensity: 1.6,
      depthWrite: !1,
    }),
  );
  ((b.position.z = 0.004), f.add(b));
  const M = -l * 0.62 * 0.5 + l * 0.62 * 0.08,
    v = new Y();
  v.position.set(0, M, 0.002);
  const m = l * 0.62 * 0.82,
    k = new E(
      new he(0.0012, m, 8e-4),
      new Z({
        color: "#c0261c",
        roughness: 0.4,
      }),
    );
  k.position.y = m / 2;
  const B = new E(new Q(0.004, 0.004, 0.003, 16), i.darkSteel);
  ((B.rotation.x = Math.PI / 2), v.add(k, B), f.add(v));
  for (const [j, w] of [
    [-c * 0.3, "#d63a2a"],
    [c * 0.3, "#1b1d21"],
  ]) {
    const I = new E(
      new Q(0.006, 0.007, 0.012, 20),
      new K({
        color: w,
        roughness: 0.3,
        clearcoat: 0.8,
      }),
    );
    I.position.set(j, l + 0.006, p * 0.15);
    const g = new E(new Q(0.0035, 0.0035, 0.006, 12), i.brass);
    (g.position.set(j, l + 0.014, p * 0.15), a.add(I, g));
  }
  let y = 0,
    N = 0;
  const $ = (50 * Math.PI) / 180;
  return (
    (a.setValue = (j) => (N = Math.max(-1.08, Math.min(1.08, j)))),
    (a.tick = (j) => {
      y += (N - y) * Math.min(1, j * 14);
      const w = t === "zero" ? y * $ : (y * 2 - 1) * $;
      v.rotation.z = -w;
    }),
    (a.terminals = [
      new P(-c * 0.3, l + 0.012, p * 0.15),
      new P(c * 0.3, l + 0.012, p * 0.15),
    ]),
    a.tick(1),
    pe(a)
  );
}
function Fn({ label: t = "DC POWER", color: e = "#ff4436" } = {}) {
  const o = fe(),
    s = new Y(),
    r = 0.17,
    i = 0.09,
    a = 0.13,
    c = new E(
      new se(r, i, a, 3, 0.008),
      new K({
        color: "#d9d6cf",
        roughness: 0.45,
        clearcoat: 0.3,
      }),
    );
  c.position.y = i / 2;
  const l = new E(
    new $e(r * 0.94, i * 0.86),
    new Z({
      color: "#23262b",
      roughness: 0.5,
    }),
  );
  l.position.set(0, i / 2, a / 2 + 5e-4);
  const p = oo(5, {
      color: e,
    }),
    h = new E(
      new $e(0.075, 0.024),
      new re({
        map: p.texture,
        toneMapped: !1,
      }),
    );
  h.position.set(-0.03, i * 0.66, a / 2 + 0.001);
  const f = new E(new Q(0.011, 0.012, 0.012, 32), o.plastic);
  ((f.rotation.x = Math.PI / 2), f.position.set(0.05, i * 0.62, a / 2 + 0.006));
  const u = new E(
    new $e(0.09, 0.016),
    new re({
      map: Ln([t], {
        w: 420,
        h: 72,
        accent: "#a78bff",
      }),
      toneMapped: !1,
    }),
  );
  (u.position.set(-0.03, i * 0.28, a / 2 + 0.001), s.add(c, l, h, f, u));
  const b = [];
  for (const [v, m] of [
    [0.035, "#d63a2a"],
    [0.065, "#1b1d21"],
  ]) {
    const k = new E(
      new Q(0.0055, 0.0055, 0.012, 16),
      new K({
        color: m,
        roughness: 0.3,
        clearcoat: 1,
      }),
    );
    ((k.rotation.x = Math.PI / 2),
      k.position.set(v, i * 0.26, a / 2 + 0.006),
      s.add(k),
      b.push(new P(v, i * 0.26, a / 2 + 0.012)));
  }
  ((s.posts = b), (s.show = (v) => p.draw(v)));
  const M = new E(
    new nt(0.0025, 12, 8),
    new re({
      color: new ue("#3fd28a").multiplyScalar(2),
      toneMapped: !1,
    }),
  );
  return (
    M.position.set(0.08, i * 0.8, a / 2 + 0.001),
    s.add(M),
    (s.setOn = (v) =>
      M.material.color
        .set(v ? "#3fd28a" : "#2a2d31")
        .multiplyScalar(v ? 2 : 1)),
    pe(s)
  );
}
function Qe(t, { r: e = 0.0022, color: o = "#c43a2e" } = {}) {
  const s = new K({
      color: o,
      roughness: 0.42,
      clearcoat: 0.4,
    }),
    r = new E(new En(), s);
  return (
    (r.castShadow = !0),
    (r.set = (i) => {
      r.geometry.dispose();
      const a = new b0(
        i.map((c) => (c.isVector3 ? c : new P(...c))),
        !1,
        "centripetal",
      );
      r.geometry = new w0(a, Math.max(24, i.length * 12), e, 8, !1);
    }),
    t && r.set(t),
    r
  );
}
let t0 = null;
function Gt() {
  return (
    t0 ||
    ((t0 = new K({
      color: "#c46f3d",
      metalness: 1,
      roughness: 0.26,
      clearcoat: 0.6,
      clearcoatRoughness: 0.2,
      envMapIntensity: 1.1,
    })),
    t0)
  );
}
let n0 = null;
function Yt() {
  return (
    n0 ||
    ((n0 = new K({
      color: "#a2512a",
      metalness: 0.85,
      roughness: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    })),
    n0)
  );
}
function M0(t, e, { color: o = "#a78bff", spacing: s = 0.04 } = {}) {
  const r = new Y(),
    i = new E(
      new $e(t, e),
      new re({
        color: o,
        transparent: !0,
        opacity: 0.05,
        depthWrite: !1,
        toneMapped: !1,
      }),
    );
  ((i.rotation.x = -Math.PI / 2), r.add(i));
  const a = new Bn(
    new Pn(new $e(t, e)),
    new O0({
      color: new ue(o).multiplyScalar(1.4),
      dashSize: 0.01,
      gapSize: 0.007,
      transparent: !0,
      opacity: 0.8,
      toneMapped: !1,
    }),
  );
  ((a.rotation.x = -Math.PI / 2), a.computeLineDistances(), r.add(a));
  const c = Math.max(1, Math.floor(t / s)),
    l = Math.max(1, Math.floor(e / s)),
    p = new We(
      new m0(0.0042, 0.0054, 24).rotateX(-Math.PI / 2),
      new re({
        color: new ue(o).multiplyScalar(1.5),
        transparent: !0,
        opacity: 0.7,
        depthWrite: !1,
        toneMapped: !1,
      }),
      c * l,
    ),
    h = new We(new Dt(0.0015, 12).rotateX(-Math.PI / 2), p.material, c * l),
    f = new $e(0.012, 0.0014).rotateX(-Math.PI / 2),
    u = new We(f, p.material, c * l),
    b = new We(f, p.material, c * l),
    M = new gt();
  let v = 0;
  for (let m = 0; m < c; m++)
    for (let k = 0; k < l; k++) {
      const B = -t / 2 + ((m + 0.5) * t) / c,
        y = -e / 2 + ((k + 0.5) * e) / l;
      (M.makeTranslation(B, 4e-4, y),
        p.setMatrixAt(v, M),
        h.setMatrixAt(v, M),
        u.setMatrixAt(
          v,
          new gt().makeRotationY(Math.PI / 4).setPosition(B, 4e-4, y),
        ),
        b.setMatrixAt(
          v,
          new gt().makeRotationY(-Math.PI / 4).setPosition(B, 4e-4, y),
        ),
        v++);
    }
  return (
    r.add(p, h, u, b),
    (r.setDir = (m) => {
      ((p.visible = h.visible = m > 0),
        (u.visible = b.visible = m < 0),
        (i.material.opacity = m ? 0.05 : 0.015),
        (a.material.opacity = m ? 0.8 : 0.25));
    }),
    (r.setStrength = (m) => {
      p.material.opacity = 0.25 + 0.6 * Math.min(1, m);
    }),
    r.setDir(1),
    r
  );
}
function wo(t = 0.1) {
  const e = new Y(),
    o = new E(new se(0.06, 0.012, 0.05, 2, 0.003), fe().plastic);
  o.position.y = 0.006;
  const s = new E(
    new Q(0.0055, 0.0055, t, 20),
    new K({
      color: "#e8f0ff",
      transmission: 0.8,
      roughness: 0.08,
      thickness: 0.01,
      transparent: !0,
    }),
  );
  return ((s.position.y = 0.012 + t / 2), e.add(o, s), pe(e));
}
function Re(t = "#ffd25a", { r: e = 0.0018, head: o = 0.012 } = {}) {
  const s = new Y(),
    r = new re({
      color: new ue(t).multiplyScalar(1.8),
      toneMapped: !1,
    }),
    i = new E(new Q(e, e, 1, 12), r),
    a = new E(new _0(e * 3, o, 20), r);
  s.add(i, a);
  const c = new P(0, 1, 0),
    l = new P();
  return (
    (s.set = (p, h, f) => {
      if (((s.visible = f > 1e-4), !s.visible)) return;
      (l.copy(h).normalize(),
        s.position.copy(p),
        s.quaternion.setFromUnitVectors(c, l));
      const u = Math.max(1e-4, f - o);
      ((i.scale.y = u), (i.position.y = u / 2), (a.position.y = u + o / 2));
    }),
    (s.setColor = (p) => r.color.set(p).multiplyScalar(1.8)),
    s
  );
}
const x = (t, e = 2) =>
    t == null || !isFinite(t)
      ? "—"
      : (Math.abs(t) < 0.5 * 10 ** -e ? 0 : t).toFixed(e),
  St = (t) => (t * 180) / Math.PI,
  $0 = (t) => (t * Math.PI) / 180,
  ee = (t, e, o) => Math.max(e, Math.min(o, t)),
  go = {
    "-": "⁻",
    0: "⁰",
    1: "¹",
    2: "²",
    3: "³",
    4: "⁴",
    5: "⁵",
    6: "⁶",
    7: "⁷",
    8: "⁸",
    9: "⁹",
  };
function ce(t, e = 2, o = 3) {
  if (t == null || !isFinite(t)) return "—";
  if (t === 0) return "0";
  const s = Math.floor(Math.log10(Math.abs(t)));
  return s >= -o && s < 4
    ? t.toFixed(Math.max(0, e - s))
    : `${(t / 10 ** s).toFixed(e)}×10${String(s)
        .split("")
        .map((i) => go[i])
        .join("")}`;
}
function y0(t, e, { del: o = !0 } = {}) {
  return e.length
    ? `<table class="tbl"><thead><tr><th>#</th>${t.map((s) => `<th>${s}</th>`).join("")}${o ? "<th></th>" : ""}</tr></thead><tbody>${e.map((s, r) => `<tr><td>${r + 1}</td>${s.map((i) => `<td>${i}</td>`).join("")}${o ? `<td><button class="del" data-i="${r}">×</button></td>` : ""}</tr>`).join("")}</tbody></table>`
    : "";
}
function Rn(t, e) {
  return (o) =>
    o.querySelectorAll(".del").forEach((s) =>
      s.addEventListener("click", () => {
        (t.splice(+s.dataset.i, 1), e());
      }),
    );
}
const lt = (t) => `<div class="empty">${t}</div>`,
  qt = (t, e = "") =>
    `<div class="gview"><div class="kv2">${t.map((o) => (o === "-" ? '<i class="sep"></i>' : `<span>${o[0]}</span><b class="${o[2] ? "hi" : ""}">${o[1]}</b>`)).join("")}</div>${e ? `<p class="tnote">${e}</p>` : ""}</div>`;
function An(t = 6) {
  const e = [];
  return {
    data: e,
    push(o, ...s) {
      for (e.push([o, ...s]); e.length && e[0][0] < o - t;) e.shift();
    },
    clear: () => (e.length = 0),
    series: (o) => e.map((s) => [s[0], s[o + 1]]),
  };
}
const Ie = 0.86,
  st = 0.56,
  Mo = 1e-9,
  sn = {
    single: {
      q: [5],
      pos: [[0, 0]],
    },
    like: {
      q: [5, 5],
      pos: [
        [-0.13, 0],
        [0.13, 0],
      ],
    },
    dipole: {
      q: [5, -5],
      pos: [
        [-0.13, 0],
        [0.13, 0],
      ],
    },
    unequal: {
      q: [8, -4],
      pos: [
        [-0.1, 0],
        [0.12, 0],
      ],
    },
    three: {
      q: [5, -5, 5],
      pos: [
        [-0.15, 0.06],
        [0.15, 0.06],
        [0, -0.14],
      ],
    },
  },
  yo = (t) => 0.1 * Math.tanh(t / 2600);
function vo(t) {
  const e = t.params,
    o = t.add(g0(Ie, st)),
    s = o.top,
    r = t.add(
      Te({
        width: 0.0011,
        halo: 4,
        haloOpacity: 0.1,
        gain: 1.35,
      }),
    ),
    i = t.add(
      _t({
        size: 0.0065,
      }),
    ),
    a = [];
  function c(I) {
    for (const S of a) t.remove(S.obj);
    ((a.length = 0),
      sn[I].pos.forEach((S, L) => {
        const U = t.add(Y0(1)),
          d = {
            x: S[0],
            y: S[1],
            obj: U,
            k: L,
          };
        (a.push(d),
          t.draggable(U, {
            pos: () => [d.x, d.y],
            move(T) {
              ((d.x = ee(T[0], -Ie / 2 + 0.03, Ie / 2 - 0.03)),
                (d.y = ee(T[1], -st / 2 + 0.03, st / 2 - 0.03)));
            },
          }));
      }));
  }
  const l = (I) => (I === 1 ? e.q2 : e.q1);
  function p() {
    const I = sn[e.preset];
    (t.setParam("q1", I.q[0]), t.setParam("q2", I.q[1] ?? e.q2), c(e.preset));
  }
  c(e.preset);
  const h = t.add(Tn()),
    f = [0, 0.14];
  t.draggable(h, {
    pos: () => f,
    move(I) {
      ((f[0] = ee(I[0], -Ie / 2 + 0.015, Ie / 2 - 0.015)),
        (f[1] = ee(I[1], -st / 2 + 0.015, st / 2 - 0.015)));
    },
  });
  const u = 172,
    b = 112,
    M = new $e(Ie, st, u, b);
  M.rotateX(-Math.PI / 2);
  const v = new nn(new Float32Array((u + 1) * (b + 1)), 1);
  (M.setAttribute("aPhi", v),
    M.setAttribute(
      "color",
      new nn(new Float32Array((u + 1) * (b + 1) * 3), 3),
    ));
  const m = new Z({
    vertexColors: !0,
    roughness: 0.55,
    metalness: 0.05,
    transparent: !0,
    opacity: 0.78,
    side: Ue,
    depthWrite: !1,
    envMapIntensity: 0.4,
  });
  m.onBeforeCompile = (I) => {
    ((I.vertexShader = I.vertexShader
      .replace(
        "#include <common>",
        `#include <common>
attribute float aPhi;
varying float vPhi;`,
      )
      .replace(
        "#include <begin_vertex>",
        `#include <begin_vertex>
vPhi = aPhi;`,
      )),
      (I.fragmentShader = I.fragmentShader
        .replace(
          "#include <common>",
          `#include <common>
varying float vPhi;`,
        )
        .replace(
          "#include <emissivemap_fragment>",
          `#include <emissivemap_fragment>
      float f = vPhi / 200.0;
      float w = fwidth(f);
      float d = abs(fract(f - 0.5) - 0.5) / max(w, 1e-4);
      totalEmissiveRadiance += vec3(1.0, 0.95, 1.0) * (1.0 - min(d / 1.2, 1.0)) * (1.0 - smoothstep(0.2, 0.5, w)) * 0.7;`,
        )));
  };
  const k = t.add(new E(M, m));
  ((k.position.y = 0.17), (k.renderOrder = 2));
  const B = 0.17,
    y = new ue();
  function N(I) {
    const g = M.attributes.position,
      S = M.attributes.color;
    for (let L = 0; L < g.count; L++) {
      const U = g.getX(L),
        d = g.getZ(L),
        T = et(I, U, d, 0.004);
      ((v.array[L] = T), g.setY(L, yo(T)));
      const z = Math.tanh(T / 2600),
        R = Math.pow(Math.abs(z), 0.75);
      (z >= 0
        ? y.setRGB(0.05 + 0.8 * R, 0.045 + 0.2 * R, 0.1 + 0.02 * R)
        : y.setRGB(0.05 + 0.05 * R, 0.045 + 0.3 * R, 0.1 + 0.75 * R),
        S.setXYZ(L, y.r, y.g, y.b));
    }
    ((g.needsUpdate = !0),
      (S.needsUpdate = !0),
      (v.needsUpdate = !0),
      M.computeVertexNormals());
  }
  let $ = [];
  function j() {
    (($ = a.map((d, T) => ({
      x: d.x,
      y: d.y,
      q: l(T) * Mo,
    }))),
      a.forEach((d, T) => {
        d.obj.position.set(d.x, s, d.y);
        const z = l(T);
        ((d.obj.visible = !0),
          d.obj.setSign(z),
          d.obj.setSize(0.75 + 0.05 * Math.abs(z)));
      }),
      o.setCharges(
        a.map((d, T) => ({
          x: d.x,
          y: d.y,
          q: l(T),
        })),
      ),
      o.setEqui(e.equi),
      o.setTint(e.equi ? 1 : 0.5));
    const I = $.filter((d) => d.q !== 0),
      g = s + 0.0012;
    if (e.lines && I.length) {
      const T = X0(I, {
        perCoulomb: 32e8,
        minLines: 6,
        rStart: 0.011,
        rStop: 0.009,
        bounds: [-Ie / 2, -st / 2, Ie / 2, st / 2],
        maxLen: 2,
      }).map((R) => ({
        pts: R.pts.map(([F, A]) => [F, g, A]),
        color: "#e4d9ff",
        intensity: 0.85,
      }));
      r.set(T);
      const z = [];
      for (const R of T)
        z.push(
          ...Qt(R.pts, 0.085, {
            offset: 0.45,
            color: "#efe8ff",
            gain: 1.6,
          }),
        );
      (i.set(z), r.show(!0), (i.visible = !0));
    } else (r.show(!1), (i.visible = !1));
    ((k.visible = e.surface), e.surface && N($), h.position.set(f[0], s, f[1]));
    const [S, L] = wt($, f[0], f[1]),
      U = Math.hypot(S, L);
    h.setArrow(
      Math.atan2(L, S),
      ee(0.018 * Math.log10(Math.max(1, U / 30)), 0, 0.075),
    );
  }
  const w = () => {
    const [I, g] = wt($, f[0], f[1]);
    return {
      E: Math.hypot(I, g),
      ang: Math.atan2(-g, I),
      phi: et($, f[0], f[1]),
    };
  };
  return (
    j(),
    {
      update(I, g, S) {
        (S && j(),
          a.forEach((U, d) => {
            const T = l(d);
            t.tag(
              `q${d}`,
              new P(U.x + 0.018, s + 0.04, U.y),
              `${d === 1 ? "q₂" : d === 2 ? "q₃" : "q₁"} ${T > 0 ? "+" : T < 0 ? "−" : ""}${x(Math.abs(T), 1)} nC`,
              T > 0 ? "pos" : T < 0 ? "neg" : "dim",
            );
          }));
        const L = w();
        (t.tag(
          "probe",
          new P(f[0] + 0.02, s + 0.075, f[1]),
          `E ${ce(L.E, 2)} N/C · φ ${x(L.phi, 0)} V`,
          "gold",
        ),
          e.surface &&
            t.tag(
              "surf",
              new P(-Ie / 2 + 0.06, B + 0.06, -st / 2 + 0.02),
              translate("电势面（高度 ∝ φ）"),
              "acc",
            ));
      },
      onParam(I, g) {
        (I === "preset" && p(),
          I === "surface" &&
            t.stage.fly(
              ...(g
                ? [
                    [0, 0.52, 0.98],
                    [0, 0.1, 0],
                  ]
                : t.lesson.cam),
              1,
            ));
      },
      readouts() {
        const I = w();
        return [
          [translate("探针处场强 E"), `${ce(I.E, 2)} N/C`],
          [translate("场强方向"), `${x(St(I.ang), 0)}°`],
          [translate("探针处电势 φ"), `${x(I.phi, 0)} V`],
          [translate("电荷个数"), String(a.length)],
          [translate("等势线间隔"), "200 V"],
        ];
      },
      hud() {
        const I = w();
        return [
          ["E", ce(I.E, 2), "N/C"],
          ["φ", x(I.phi, 0), "V"],
        ];
      },
      dock(I) {
        const g = w();
        if (I === "probe") {
          const U = [
            [
              translate("探针位置"),
              `(${x(f[0] * 100, 1)}, ${x(-f[1] * 100, 1)}) cm`,
            ],
            [translate("场强 E"), `${ce(g.E, 3)} N/C`, !0],
            [translate("方向（与 +x 轴夹角）"), `${x(St(g.ang), 1)}°`],
            [translate("电势 φ"), `${x(g.phi, 1)} V`, !0],
            "-",
          ];
          return (
            a.forEach((d, T) => {
              const z = Math.hypot(f[0] - d.x, f[1] - d.y);
              U.push([
                translate("到 {0} 的距离", [
                  T === 1 ? "q₂" : T === 2 ? "q₃" : "q₁",
                ]),
                `${x(z * 100, 1)} cm`,
              ]);
            }),
            {
              html: qt(
                U,
                translate(
                  "拖动黄色探针，箭头指向该点的场强方向，长度随 E 的大小（对数）变化。电势以无穷远处为零。",
                ),
              ),
            }
          );
        }
        const S = [],
          L = [];
        for (let U = 0; U <= 240; U++) {
          const d = -Ie / 2 + (Ie * U) / 240;
          $.some((z) => Math.hypot(z.x - d, z.y - f[1]) < 0.01) ||
            (S.push([d * 100, ee(et($, d, f[1]), -6e3, 6e3)]),
            L.push([d * 100, ee(wt($, d, f[1])[0] / 100, -6e3, 6e3)]));
        }
        return {
          chart: {
            series: [
              {
                pts: S,
                color: "#cdbcff",
                name: "φ / V",
              },
              {
                pts: L,
                color: "#ffd25a",
                name: "Eₓ / (100 N/C)",
                dashed: !0,
              },
            ],
            x: [-Ie * 50, Ie * 50],
            xLabel: "x / cm",
            yLabel: translate("沿探针所在水平线"),
            xName: "x",
            cursor: f[0] * 100,
          },
        };
      },
      csv() {
        const I = [["x/cm", "phi/V", "Ex/(N/C)", "Ey/(N/C)"]];
        for (let g = 0; g <= 172; g++) {
          const S = -Ie / 2 + (Ie * g) / 172,
            [L, U] = wt($, S, f[1]);
          I.push([
            +(S * 100).toFixed(2),
            +et($, S, f[1]).toFixed(2),
            +L.toFixed(2),
            +(-U).toFixed(2),
          ]);
        }
        return I;
      },
    }
  );
}
const it = 0.86,
  ct = 0.56,
  o0 = 1e-9,
  S0 = {
    line: "#ffd25a",
    corner: "#3fd28a",
    arc: "#ff7ab6",
  },
  an = () => ({
    line: translate("直线"),
    corner: translate("折线"),
    arc: translate("弯曲"),
  });
function k0(t, e, o, s) {
  const r = [];
  if (t === "line")
    for (let a = 0; a <= 240; a++)
      r.push([
        e[0] + ((o[0] - e[0]) * a) / 240,
        e[1] + ((o[1] - e[1]) * a) / 240,
      ]);
  else if (t === "corner") {
    const a = [o[0], e[1]];
    for (let c = 0; c <= 240 / 2; c++)
      r.push([e[0] + ((a[0] - e[0]) * c) / (240 / 2), e[1]]);
    for (let c = 1; c <= 240 / 2; c++)
      r.push([a[0], a[1] + ((o[1] - a[1]) * c) / (240 / 2)]);
  } else {
    const a = (e[0] + o[0]) / 2,
      c = (e[1] + o[1]) / 2;
    let l = -(o[1] - e[1]),
      p = o[0] - e[0];
    const h = Math.hypot(l, p) || 1;
    ((l /= h),
      (p /= h),
      (a - s[0]) * l + (c - s[1]) * p < 0 && ((l = -l), (p = -p)));
    const f = 0.2,
      u = [
        e[0] + l * f - (o[0] - e[0]) * 0.25,
        e[1] + p * f - (o[1] - e[1]) * 0.25,
      ],
      b = [
        o[0] + l * f + (o[0] - e[0]) * 0.25,
        o[1] + p * f + (o[1] - e[1]) * 0.25,
      ];
    for (let M = 0; M <= 240; M++) {
      const v = M / 240,
        m = 1 - v;
      r.push([
        m * m * m * e[0] +
          3 * m * m * v * u[0] +
          3 * m * v * v * b[0] +
          v * v * v * o[0],
        m * m * m * e[1] +
          3 * m * m * v * u[1] +
          3 * m * v * v * b[1] +
          v * v * v * o[1],
      ]);
    }
  }
  return r.map(([a, c]) => [
    ee(a, -it / 2 + 0.01, it / 2 - 0.01),
    ee(c, -ct / 2 + 0.01, ct / 2 - 0.01),
  ]);
}
function xo(t) {
  const e = t.params,
    o = t.add(g0(it, ct)),
    s = o.top,
    r = s + 0.0012,
    i = t.add(
      Te({
        width: 9e-4,
        halo: 3.5,
        haloOpacity: 0.07,
        gain: 0.8,
      }),
    ),
    a = t.add(
      _t({
        size: 0.005,
      }),
    ),
    c = t.add(
      Te({
        width: 0.0012,
        halo: 3,
        haloOpacity: 0.08,
        gain: 0.7,
      }),
    ),
    l = t.add(
      Te({
        width: 0.0024,
        halo: 4,
        haloOpacity: 0.2,
        gain: 2.2,
      }),
    ),
    p = {
      p: [-0.12, 0.02],
    },
    h = [0.04, 0.1],
    f = [0.12, -0.16],
    u = t.add(Y0(1));
  t.draggable(u, {
    pos: () => p.p,
    move(S) {
      y ||
        (p.p = [
          ee(S[0], -it / 2 + 0.04, it / 2 - 0.04),
          ee(S[1], -ct / 2 + 0.04, ct / 2 - 0.04),
        ]);
    },
  });
  const b = (S) => {
      const L = new Y(),
        U = new E(
          new m0(0.008, 0.0105, 40).rotateX(-Math.PI / 2),
          new re({
            color: new ue(S).multiplyScalar(1.6),
            toneMapped: !1,
            transparent: !0,
          }),
        );
      U.position.y = 0.0015;
      const d = new E(
        new Dt(0.0105, 40).rotateX(-Math.PI / 2),
        new re({
          color: S,
          transparent: !0,
          opacity: 0.12,
          depthWrite: !1,
        }),
      );
      return ((d.position.y = 0.001), L.add(U, d), L);
    },
    M = t.add(b("#cdbcff")),
    v = t.add(b("#cdbcff"));
  for (const [S, L] of [
    [M, h],
    [v, f],
  ])
    t.draggable(S, {
      pos: () => L,
      move(U) {
        y ||
          ((L[0] = ee(U[0], -it / 2 + 0.02, it / 2 - 0.02)),
          (L[1] = ee(U[1], -ct / 2 + 0.02, ct / 2 - 0.02)));
      },
    });
  const m = t.add(G0("#ffd25a", 0.005, 0.05)),
    k = t.add(
      Re("#ffd25a", {
        r: 0.0013,
        head: 0.01,
      }),
    );
  let B = [],
    y = null,
    N = [];
  const $ = {};
  function j() {
    if (
      ((B = [
        {
          x: p.p[0],
          y: p.p[1],
          q: e.Q * o0,
        },
      ]),
      u.position.set(p.p[0], s, p.p[1]),
      u.setSign(e.Q),
      u.setSize(0.75 + 0.05 * Math.abs(e.Q)),
      o.setCharges([
        {
          x: p.p[0],
          y: p.p[1],
          q: e.Q,
        },
      ]),
      e.Q)
    ) {
      const L = X0(B, {
        perCoulomb: 24e8,
        minLines: 12,
        bounds: [-it / 2, -ct / 2, it / 2, ct / 2],
        maxLen: 1.2,
      }).map((d) => ({
        pts: d.pts.map(([T, z]) => [T, r, z]),
        color: "#bfb3e6",
      }));
      i.set(L);
      const U = [];
      for (const d of L)
        U.push(
          ...Qt(d.pts, 0.1, {
            offset: 0.5,
            color: "#bfb3e6",
            gain: 1,
          }),
        );
      a.set(U);
    } else (i.set([]), a.set([]));
    (M.position.set(h[0], s, h[1]),
      v.position.set(f[0], s, f[1]),
      k0(e.path, h, f, p.p),
      c.set(
        ["line", "corner", "arc"].map((S) => ({
          pts: k0(S, h, f, p.p).map(([L, U]) => [L, r + 4e-4, U]),
          color: S0[S],
          intensity: S === e.path ? 1 : 0.35,
        })),
      ),
      y || I(h));
  }
  const w = () => e.qt * o0 * (et(B, ...h) - et(B, ...f));
  function I(S) {
    m.position.set(S[0], s + 0.006, S[1]);
    const [L, U] = wt(B, S[0], S[1]),
      d = e.qt * o0 * Math.hypot(L, U),
      T = ee(0.012 * Math.log10(Math.max(1, d / 1e-8)), 0, 0.07),
      z = Math.sign(e.qt) || 1;
    k.set(new P(S[0], s + 0.006, S[1]), new P(z * L, 0, z * U), e.qt ? T : 0);
  }
  function g(S) {
    (S !== e.path && t.setParam("path", S),
      j(),
      (y = {
        kind: S,
        i: 0,
        W: 0,
        s: 0,
        curve: [[0, 0]],
        path: k0(S, h, f, p.p),
      }));
  }
  return (
    j(),
    {
      update(S, L, U) {
        if ((U && j(), y)) {
          let z = 0.16 * S;
          const R = y.path;
          for (; z > 0 && y.i < R.length - 1;) {
            const A = R[y.i],
              C = R[y.i + 1],
              H = Math.hypot(C[0] - A[0], C[1] - A[1]),
              [_, te] = wt(B, (A[0] + C[0]) / 2, (A[1] + C[1]) / 2);
            ((y.W += e.qt * o0 * (_ * (C[0] - A[0]) + te * (C[1] - A[1]))),
              (y.s += H),
              y.i++,
              (z -= H),
              y.i % 3 === 0 && y.curve.push([y.s * 100, y.W * 1e6]));
          }
          const F = R[y.i];
          (I(F),
            l.set([
              {
                pts: R.slice(0, y.i + 1).map(([A, C]) => [A, r + 0.001, C]),
                color: S0[y.kind],
                fade: 0.5,
              },
            ]),
            y.i >= R.length - 1
              ? (y.curve.push([y.s * 100, y.W * 1e6]),
                ($[y.kind] = y.curve),
                t.records.push({
                  path: y.kind,
                  W: y.W,
                  s: y.s,
                  Wt: w(),
                  q: e.qt,
                  Q: e.Q,
                }),
                t.flash(
                  translate("{0}路径：W = {1} μJ", [
                    an()[y.kind],
                    x(y.W * 1e6, 3),
                  ]),
                ),
                (y = null),
                N.length && g(N.shift()),
                t.refreshDock())
              : Math.floor(L * 8) !== Math.floor((L - S) * 8) &&
                t.refreshDock());
        }
        const d = et(B, ...h),
          T = et(B, ...f);
        (t.tag(
          "A",
          new P(h[0] + 0.014, s + 0.03, h[1]),
          `A  φ = ${x(d, 0)} V`,
          "acc",
        ),
          t.tag(
            "B",
            new P(f[0] + 0.014, s + 0.03, f[1]),
            `B  φ = ${x(T, 0)} V`,
            "acc",
          ),
          t.tag(
            "Q",
            new P(p.p[0] + 0.02, s + 0.045, p.p[1]),
            `Q ${e.Q > 0 ? "+" : e.Q < 0 ? "−" : ""}${x(Math.abs(e.Q), 1)} nC`,
            e.Q >= 0 ? "pos" : "neg",
          ),
          t.tag(
            "q",
            new P(m.position.x - 0.075, s + 0.012, m.position.z + 0.01),
            `q ${e.qt > 0 ? "+" : e.qt < 0 ? "−" : ""}${x(Math.abs(e.qt), 1)} nC`,
            "gold",
          ));
      },
      onParam() {
        (y && (y = null), l.set([]));
      },
      actions: () => [
        {
          label: translate("移动试探电荷 A → B"),
          run: () => g(e.path),
        },
        {
          label: translate("依次走三条路径"),
          run() {
            ((N = ["corner", "arc"]), g("line"));
          },
        },
        {
          label: translate("清除记录"),
          run() {
            t.records.length = 0;
            for (const S in $) delete $[S];
            l.set([]);
          },
        },
      ],
      readouts() {
        const S = et(B, ...h),
          L = et(B, ...f);
        return [
          [translate("A 点电势 φA"), `${x(S, 1)} V`],
          [translate("B 点电势 φB"), `${x(L, 1)} V`],
          [translate("电势差 UAB"), `${x(S - L, 1)} V`],
          ["q(φA − φB)", `${x(w() * 1e6, 3)} μJ`],
          [translate("当前路径已做功 W"), y ? `${x(y.W * 1e6, 3)} μJ` : "—"],
          [translate("电势能变化 ΔEp"), `${x(-w() * 1e6, 3)} μJ`],
        ];
      },
      hud: () => [
        [
          "W",
          y
            ? x(y.W * 1e6, 3)
            : t.records.length
              ? x(t.records[t.records.length - 1].W * 1e6, 3)
              : "—",
          "μJ",
        ],
        ["qU_AB", x(w() * 1e6, 3), "μJ"],
      ],
      dock(S) {
        const L = an();
        if (S === "workpath") {
          const d = ["line", "corner", "arc"]
            .filter((R) => $[R] || y?.kind === R)
            .map((R) => ({
              pts: y?.kind === R ? y.curve : $[R],
              color: S0[R],
              name: L[R],
            }));
          if (!d.length)
            return {
              html: lt(
                translate(
                  "按“移动试探电荷”或“依次走三条路径”，记录 W 随路程 s 的变化。",
                ),
              ),
            };
          const T = w() * 1e6,
            z = Math.max(...d.flatMap((R) => R.pts.map((F) => F[0])), 1);
          return (
            d.push({
              pts: [
                [0, T],
                [z, T],
              ],
              color: "#8e8a82",
              dashed: !0,
              name: "q·U_AB",
              noHover: !0,
            }),
            {
              chart: {
                series: d,
                xLabel: "s / cm",
                yLabel: "W / μJ",
                xName: "s",
              },
            }
          );
        }
        const U = t.records;
        return U.length
          ? {
              html: `<div class="gview">${y0(
                [
                  translate("路径"),
                  "q / nC",
                  "s / cm",
                  "W / μJ",
                  "q·U_AB / μJ",
                ],
                U.map((d) => [
                  L[d.path],
                  x(d.q, 1),
                  x(d.s * 100, 1),
                  `<b>${x(d.W * 1e6, 3)}</b>`,
                  x(d.Wt * 1e6, 3),
                ]),
              )}</div>`,
              bind: Rn(U, () => t.refreshDock()),
            }
          : {
              html: lt(translate("完成一次移动后自动记录。")),
            };
      },
      csv: () =>
        t.records.length
          ? [
              ["path", "q/nC", "Q/nC", "s/m", "W/J", "qUab/J"],
              ...t.records.map((S) => [
                S.path,
                S.q,
                S.Q,
                +S.s.toFixed(4),
                S.W,
                S.Wt,
              ]),
            ]
          : null,
    }
  );
}
const J = 0.2,
  xe = 0.19,
  Se = -0.05,
  I0 = 2e3,
  rn = 12e3;
function $o() {
  const t = fe(),
    e = new Y(),
    o = 0.06,
    s = 0.045,
    r = new E(new Q(o, o, s, 64, 1, !0), t.alu);
  ((r.rotation.x = Math.PI / 2), (r.position.y = 0.11));
  const i = new E(
    new Dt(o, 64),
    new Z({
      color: "#e8e4da",
      roughness: 0.6,
      side: Ue,
    }),
  );
  i.position.set(0, 0.11, -s / 2 + 0.002);
  const a = new E(
    new $e(o * 1.7, o * 1.06),
    new Z({
      map: Nn({
        kind: "left",
        label: "kV",
        numbers: ["0", "2", "4", "6", "8", "10", "12"],
      }),
      roughness: 0.6,
      transparent: !0,
    }),
  );
  a.position.set(0, 0.11 + o * 0.12, -s / 2 + 0.003);
  const c = new E(new Xe(o, 0.004, 12, 64), t.aluDark);
  c.position.set(0, 0.11, s / 2);
  const l = c.clone();
  l.position.z = -s / 2;
  const p = new E(
    new Dt(o - 0.002, 64),
    new K({
      color: "#ffffff",
      roughness: 0.02,
      transmission: 1,
      transparent: !0,
      opacity: 0.18,
      envMapIntensity: 1.5,
      depthWrite: !1,
    }),
  );
  p.position.set(0, 0.11, s / 2);
  const h = t.brass,
    f = new E(new Q(0.0025, 0.0025, 0.13, 16), h);
  f.position.set(0, 0.11 + 0.035, 0);
  const u = new E(new Q(0.01, 0.012, 0.016, 24), t.plastic);
  u.position.set(0, 0.11 + o + 0.004, 0);
  const b = new E(new nt(0.012, 32, 20), t.chrome);
  b.position.set(0, 0.11 + o + 0.04, 0);
  const M = new Y();
  M.position.set(0, 0.11 - o * 0.28, 0.006);
  const v = new E(
    new he(0.0022, o * 1.1, 0.0012),
    new Z({
      color: "#2b2e33",
      metalness: 0.8,
      roughness: 0.3,
    }),
  );
  v.position.y = o * 0.32;
  const m = new E(new Q(0.004, 0.004, 0.004, 16), t.brass);
  ((m.rotation.x = Math.PI / 2), M.add(v, m));
  const k = new E(new Q(0.05, 0.056, 0.012, 48), t.darkSteel);
  k.position.y = 0.006;
  const B = new E(new Q(0.008, 0.01, 0.04 - 0.006, 20), t.darkSteel);
  ((B.position.y = 0.012 + 0.017), e.add(r, i, a, c, l, p, f, u, b, M, k, B));
  let y = 0,
    N = 0;
  return (
    (e.setValue = ($) => (N = ee($, 0, 1.05))),
    (e.tick = ($) => {
      ((y += (N - y) * Math.min(1, $ * 6)),
        (M.rotation.z = -(y * 2 - 1) * ((50 * Math.PI) / 180)));
    }),
    (e.knob = new P(0, 0.11 + o + 0.04, 0)),
    (e.caseP = new P(o * 0.7, 0.11 - o * 0.7, s / 2)),
    pe(e)
  );
}
function cn(t) {
  const e = fe(),
    o = new Y(),
    s = new E(
      new se(0.004, J, J, 2, 0.0015),
      new K({
        color: "#c9ced6",
        metalness: 1,
        roughness: 0.25,
        clearcoat: 0.3,
      }),
    );
  s.position.y = xe;
  const r = new E(new Q(0.004, 0.004, 0.012, 16), e.brass);
  r.position.set(0, xe + J / 2 + 0.006, 0);
  const i = wo(xe - J / 2 - 0.012);
  (o.add(s, r, i),
    (o.marks = new We(
      new $e(0.008, 0.0016),
      new re({
        color: new ue(t).multiplyScalar(2),
        toneMapped: !1,
        side: Ue,
      }),
      200,
    )),
    (o.marks2 = new We(new $e(0.0016, 0.008), o.marks.material, 200)),
    o.add(o.marks, o.marks2),
    (o.tabP = new P(0, xe + J / 2 + 0.012, 0)));
  const a = i.children[1],
    c = xe - J / 2 - 0.012;
  return (
    (o.setLift = (l) => {
      ((s.position.y = xe + l),
        (r.position.y = xe + J / 2 + 0.006 + l),
        (o.marks.position.y = o.marks2.position.y = l),
        (a.scale.y = (c + l) / c),
        (a.position.y = 0.012 + (c + l) / 2),
        (o.tabP.y = xe + J / 2 + 0.012 + l));
    }),
    pe(o)
  );
}
function So(t) {
  const e = t.params,
    o = t.add(cn(A0)),
    s = t.add(cn(j0)),
    r = t.add($o());
  (r.position.set(0.25, 0, -0.06), (r.rotation.y = -0.15));
  const i = t.add(
    Fn({
      label: "HV  0 - 5 kV",
    }),
  );
  (i.position.set(-0.3, 0, -0.02), (i.rotation.y = 0.3));
  const a = t.add(
      Te({
        width: 0.0011,
        halo: 4,
        haloOpacity: 0.12,
        gain: 1.5,
      }),
    ),
    c = t.add(
      _t({
        size: 0.0055,
      }),
    ),
    l = t.add(
      new E(
        new se(1, 1, 1, 2, 0.002),
        new K({
          color: "#dfefff",
          roughness: 0.06,
          metalness: 0,
          transparent: !0,
          opacity: 0.3,
          envMapIntensity: 1.6,
          clearcoat: 1,
          depthWrite: !1,
        }),
      ),
    ),
    p = t.add(
      Qe(null, {
        color: "#c43a2e",
      }),
    ),
    h = t.add(
      Qe(null, {
        color: "#1d1f23",
      }),
    ),
    f = t.add(
      Qe(null, {
        color: "#c43a2e",
      }),
    ),
    u = t.add(
      Qe(null, {
        color: "#1d1f23",
      }),
    ),
    b = R0(1, J * J, 0.04) * I0;
  let M = null;
  t.draggable(s, {
    pos: () => [s.position.x, s.position.z],
    move(k) {
      t.setParam("d", ee(Math.round((k[0] - Se) * 1e3) / 10, 1, 10));
    },
  });
  function v() {
    const k = e.d / 100,
      B = (1 - e.S) * J,
      y = J * J * e.S;
    ((M = mo({
      er: e.er,
      S: y,
      d: k,
      mode: e.capMode,
      Q0: b,
      U0: I0,
    })),
      o.position.set(Se - 0.002, 0, 0),
      s.position.set(Se + k + 0.002, 0, 0),
      s.setLift(B),
      (l.visible = e.er > 1),
      l.material.color.set(e.er > 3 ? "#cfe8ff" : "#fff3d6"),
      (l.material.opacity = e.er > 3 ? 0.28 : 0.55),
      (l.material.roughness = e.er > 3 ? 0.05 : 0.4),
      l.scale.set(Math.max(0.002, k - 0.0016), J * e.S * 0.98, J * 1.02),
      l.position.set(Se + k / 2, xe + B / 2, 0));
    const N = M.E,
      $ = Math.sqrt(N / 5e4),
      j = 3,
      w = ee(Math.round(9 * $ * e.S), 1, 24),
      I = xe - J / 2 + B,
      g = xe + J / 2,
      S = [];
    for (let A = 0; A < j; A++)
      for (let C = 0; C < w; C++) {
        const H = (A - 1) * 0.07,
          _ = I + ((C + 0.5) * (g - I)) / w;
        S.push({
          pts: [
            [Se + 0.001, _, H],
            [Se + k - 0.001, _, H],
          ],
          color: "#d9ccff",
          intensity: (e.er > 1 ? 0.35 : 0.55) * (A === 1 ? 1 : 0.6),
        });
      }
    a.set(S);
    const L = [];
    for (const A of S)
      L.push(
        ...Qt(A.pts, k, {
          offset: 0.5,
          color: "#efe8ff",
          gain: 1.4,
          scale: ee(k / 0.04, 0.5, 1),
        }),
      );
    c.set(L);
    const U = ee(Math.round((M.Q / b) * 36), 1, 200);
    (m(o, U, 1, 0.0025, B, 0),
      m(s, U, -1, -0.0025, 0, -B),
      r.setValue(M.U / rn));
    const d = o.tabP.clone().add(o.position),
      T = s.tabP.clone().add(s.position);
    r.updateMatrixWorld(!0);
    const z = r.localToWorld(r.knob.clone());
    p.set([
      d,
      d.clone().add(new P(0, 0.05, 0)),
      new P((d.x + z.x) / 2, 0.36, -0.06),
      z.clone().add(new P(-0.012, 0.004, 0)),
      z,
    ]);
    const R = r.localToWorld(r.caseP.clone());
    h.set([
      T,
      T.clone().add(new P(0.025, 0.015, 0.02)),
      new P(T.x + 0.07, 0.08, 0.1),
      new P(R.x - 0.04, 0.02, R.z + 0.06),
      R,
    ]);
    const F = e.capMode === "U";
    if (
      ((f.visible = u.visible = F),
      i.setOn(F),
      i.show(F ? String(I0) : "----"),
      F)
    ) {
      const A = i.posts[0].clone().applyMatrix4(i.matrixWorld),
        C = i.posts[1].clone().applyMatrix4(i.matrixWorld);
      (f.set([
        A,
        A.clone().add(new P(0.03, 0, 0.03)),
        new P(Se - 0.08, 0.02, 0.12),
        new P(Se - 0.03, 0.03, 0.04),
        new P(Se - 0.012, 0.03, 0.02),
      ]),
        u.set([
          C,
          C.clone().add(new P(0.03, 0, 0.04)),
          new P(Se + k * 0.5, 0.012, 0.16),
          new P(Se + k + 0.02, 0.02, 0.06),
          new P(Se + k + 0.012, 0.03, 0.02),
        ]));
    }
  }
  function m(k, B, y, N, $, j) {
    const w = xe - J / 2 + $,
      g = xe + J / 2 + j - w,
      S = Math.max(1, Math.round(Math.sqrt((B * g) / J))),
      L = Math.max(1, Math.round(B / S)),
      U = new gt();
    let d = 0;
    for (let T = 0; T < L; T++)
      for (let z = 0; z < S && d < 200; z++) {
        const R = -J / 2 + ((T + 0.5) * J) / L,
          F = w + ((z + 0.5) * g) / S;
        (U.makeRotationY(Math.PI / 2).setPosition(N, F, R),
          k.marks.setMatrixAt(d, U),
          k.marks2.setMatrixAt(d, U),
          d++);
      }
    ((k.marks.count = d),
      (k.marks2.count = y > 0 ? d : 0),
      (k.marks.instanceMatrix.needsUpdate = !0),
      (k.marks2.instanceMatrix.needsUpdate = !0));
  }
  return (
    i.updateMatrixWorld(!0),
    v(),
    {
      update(k, B, y) {
        (y && v(), r.tick(k));
        const N = M.U > rn;
        (t.tag(
          "em",
          new P(r.position.x - 0.02, 0.25, r.position.z),
          N ? translate("超出量程") : `U ≈ ${x(M.U / 1e3, 2)} kV`,
          N ? "warn" : "gold",
        ),
          t.tag(
            "d",
            new P(Se + e.d / 200 - 0.02, xe - J / 2 - 0.02, J / 2),
            `d = ${x(e.d, 1)} cm`,
            "acc",
          ),
          t.tag(
            "plus",
            new P(Se - 0.03, xe + J / 2 - 0.02, -J / 2),
            "+Q",
            "pos",
          ),
          t.tag(
            "minus",
            new P(
              Se + e.d / 100 + 0.012,
              xe + J / 2 - 0.02 + (1 - e.S) * J,
              -J / 2,
            ),
            "−Q",
            "neg",
          ),
          e.er > 1 &&
            t.tag(
              "er",
              new P(Se + e.d / 200, xe - J / 2 - 0.015, J / 2),
              `εr = ${e.er}`,
              "blue",
            ));
      },
      record() {
        (t.records.push({
          mode: e.capMode,
          d: e.d / 100,
          S: J * J * e.S,
          er: e.er,
          C: M.C,
          U: M.U,
          Q: M.Q,
          E: M.E,
        }),
          t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
      },
      readouts: () => [
        [translate("电容 C"), `${x(M.C * 1e12, 2)} pF`],
        [translate("电荷量 Q"), `${x(M.Q * 1e9, 2)} nC`],
        [translate("两板电压 U"), `${x(M.U, 0)} V`],
        [translate("板间场强 E"), `${x(M.E / 1e3, 1)} kV/m`],
        [translate("正对面积 S"), `${x(J * J * e.S * 1e4, 0)} cm²`],
        [translate("储存的电场能"), `${x(M.energy * 1e6, 2)} μJ`],
      ],
      hud: () => [
        ["C", x(M.C * 1e12, 2), "pF"],
        ["U", x(M.U / 1e3, 2), "kV"],
        ["E", x(M.E / 1e3, 1), "kV/m"],
      ],
      dock(k) {
        const B = t.records;
        if (k === "captable")
          return B.length
            ? {
                html: `<div class="gview">${y0(
                  [
                    translate("方式"),
                    "d / cm",
                    "S / cm²",
                    "εr",
                    "C / pF",
                    "Q / nC",
                    "U / V",
                    "E / (kV/m)",
                  ],
                  B.map((w) => [
                    w.mode === "Q" ? translate("Q 不变") : translate("U 不变"),
                    x(w.d * 100, 1),
                    x(w.S * 1e4, 0),
                    w.er,
                    `<b>${x(w.C * 1e12, 2)}</b>`,
                    x(w.Q * 1e9, 2),
                    x(w.U, 0),
                    x(w.E / 1e3, 1),
                  ]),
                )}</div>`,
                bind: Rn(B, () => t.refreshDock()),
              }
            : {
                html: lt(translate("调节 d、S、εr 后按“记录数据”。")),
              };
        const y = B.filter(
            (w) => Math.abs(w.S - J * J * e.S) < 1e-9 && w.er === e.er,
          ),
          N = y.map((w) => [1 / w.d, w.C * 1e12]),
          $ =
            N.length >= 2
              ? Tt(
                  N.map((w) => w[0]),
                  N.map((w) => w[1]),
                )
              : null;
        return {
          chart: {
            series: [
              {
                pts: [
                  [0, 0],
                  [110, R0(e.er, J * J * e.S, 1 / 110) * 1e12],
                ],
                color: "#5d5b57",
                dashed: !0,
                name: translate("理论 C = εrε₀S/d"),
                noHover: !0,
              },
              {
                pts: N,
                color: "#cdbcff",
                kind: "scatter",
                name: translate("实验数据"),
              },
            ],
            x: [0, 110],
            y: [0, null],
            fit: $
              ? {
                  ...$,
                  color: "#e8e6e0",
                  label: `k = ${$.k.toFixed(3)} pF·m`,
                }
              : null,
            fitRange: [0, 110],
            xLabel: "1/d / m⁻¹",
            yLabel: "C / pF",
            xName: "1/d",
          },
          side: `<div class="fitside"><b class="big">${y.length}</b><span>${translate("组数据（当前 S、εr）")}</span>${$ ? `<div class="res">εrε₀S ≈ ${x($.k, 3)} pF·m</div>` : ""}<p>${translate("理论斜率 εrε₀S = {0} pF·m。C 与 1/d 成正比。", [x(e.er * 8854e-15 * J * J * e.S * 1e12, 3)])}</p></div>`,
        };
      },
      csv: () =>
        t.records.length
          ? [
              ["mode", "d/m", "S/m2", "er", "C/F", "Q/C", "U/V", "E/(V/m)"],
              ...t.records.map((k) => [
                k.mode,
                k.d,
                k.S,
                k.er,
                k.C,
                k.Q,
                k.U,
                k.E,
              ]),
            ]
          : null,
    }
  );
}
const ln = (t, e) => [
    t[1] * e[2] - t[2] * e[1],
    t[2] * e[0] - t[0] * e[2],
    t[0] * e[1] - t[1] * e[0],
  ],
  ko = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2];
function J0(t, e, o, s, r) {
  const i = (e * r) / 2,
    a = [t.v[0] + i * o[0], t.v[1] + i * o[1], t.v[2] + i * o[2]],
    c = [i * s[0], i * s[1], i * s[2]],
    l = 2 / (1 + ko(c, c)),
    p = ln(a, c),
    h = [a[0] + p[0], a[1] + p[1], a[2] + p[2]],
    f = ln(h, c),
    u = [a[0] + l * f[0], a[1] + l * f[1], a[2] + l * f[2]];
  return (
    (t.v = [u[0] + i * o[0], u[1] + i * o[1], u[2] + i * o[2]]),
    (t.x = [t.x[0] + t.v[0] * r, t.x[1] + t.v[1] * r, t.x[2] + t.v[2] * r]),
    t
  );
}
function Io(t, e, o, s, r, { stop: i = null, every: a = 1 } = {}) {
  const c = {
      x: [...t.x],
      v: [...t.v],
    },
    l = [[...c.x]];
  let p = 0;
  for (let h = 0; h < r; h++) {
    const { E: f, B: u } = o(c.x, p);
    if (
      (J0(c, e, f, u, s),
      (p += s),
      (h + 1) % a === 0 && l.push([...c.x]),
      i?.(c, p))
    ) {
      (h + 1) % a && l.push([...c.x]);
      break;
    }
  }
  return {
    pts: l,
    s: c,
    t: p,
  };
}
const K0 = (t, e, o) => Math.sqrt((2 * Math.abs(t * o)) / e),
  Bo = (t, e, o, s, r, i) => (t * o * s * s) / (2 * e * r * i * i);
function B0({ U1: t, U2: e, L: o, d: s, D: r, q: i = ne, m: a = Be }) {
  const c = K0(i, a, t),
    l = Bo(i, a, e, o, s, c),
    p = (i * e * o) / (a * s * c * c),
    h = Math.abs(l) > s / 2;
  return {
    v0: c,
    y: l,
    tan: p,
    Y: l + r * p,
    hit: h,
    t: o / c,
  };
}
const It = (t, e, o, s) => (t * e) / (Math.abs(o) * s),
  P0 = (t, e, o) => (2 * Math.PI * t) / (Math.abs(e) * o),
  s0 = (t, e) => t / e,
  Po = (t, e, o, s) => Math.sqrt((2 * t * o) / Math.abs(e)) / s;
function Eo({ m: t, q: e, B: o, R: s, U: r }) {
  const i = Math.abs(e),
    a = (i * o) / (2 * Math.PI * t),
    c = (i * o * s) / t,
    l = 0.5 * t * c * c,
    p = Math.ceil(l / (i * r));
  return {
    f: a,
    T: 1 / a,
    vmax: c,
    Ek: l,
    crossings: p,
    turns: p / 2,
    time: p / 2 / a,
  };
}
function Lo({ m: t, q: e, B: o, R: s, U: r, segs: i = 40 }) {
  const a = Math.abs(e),
    c = [],
    l = [];
  let p = a * r,
    h = 0,
    f = 0,
    u = 1;
  c.push([0, 0]);
  for (let b = 0; b < 4e3; b++) {
    const M = Math.sqrt((2 * p) / t),
      v = (t * M) / (a * o),
      m = u > 0 ? f - v : f + v;
    if (Math.abs(m) + v > s) break;
    ((h = m), l.push(p));
    for (let k = 1; k <= i; k++) {
      const B = (Math.PI * k) / i,
        y = u > 0 ? Math.PI / 2 - B : -Math.PI / 2 - B;
      c.push([v * Math.cos(y), h + v * Math.sin(y)]);
    }
    ((f = 2 * h - f), (u = -u), (p += a * r));
  }
  return {
    pts: c,
    energies: l,
  };
}
const Pe = 0.17,
  Me = -0.25,
  Ze = -0.13,
  ae = 0.04,
  Ee = 0.01,
  mt = -0.075,
  _e = 0.17,
  Ve = 0.072,
  Bt = _e - (Ze + ae),
  dn = _e - (mt + ae);
function qo() {
  const e = document.createElement("canvas");
  e.width = e.height = 512;
  const o = e.getContext("2d"),
    s = new kt(e);
  s.colorSpace = Ot;
  const r = document.createElement("canvas");
  r.width = r.height = 512;
  const i = r.getContext("2d"),
    a = 512 / (2 * Ve);
  ((i.strokeStyle = "rgba(160,255,190,.16)"), (i.lineWidth = 1.2));
  for (let c = -7; c <= 7; c++) {
    const l = 256 + c * 0.01 * a;
    (i.beginPath(),
      i.moveTo(l, 0),
      i.lineTo(l, 512),
      i.moveTo(0, l),
      i.lineTo(512, l),
      i.stroke());
  }
  ((i.strokeStyle = "rgba(160,255,190,.32)"),
    i.beginPath(),
    i.moveTo(512 / 2, 0),
    i.lineTo(512 / 2, 512),
    i.moveTo(0, 512 / 2),
    i.lineTo(512, 512 / 2),
    i.stroke());
  for (let c = -35; c <= 35; c++) {
    const l = 256 + c * 0.002 * a;
    (i.beginPath(),
      i.moveTo(l, 512 / 2 - 4),
      i.lineTo(l, 512 / 2 + 4),
      i.moveTo(512 / 2 - 4, l),
      i.lineTo(512 / 2 + 4, l),
      i.stroke());
  }
  return (
    (o.fillStyle = "#020503"),
    o.fillRect(0, 0, 512, 512),
    {
      canvas: e,
      tex: s,
      fade(c) {
        ((o.globalCompositeOperation = "source-over"),
          (o.fillStyle = `rgba(2,5,3,${c})`),
          o.fillRect(0, 0, 512, 512));
      },
      spot(c, l, p = 1, h = 7) {
        const f = 256 + l * a,
          u = 512 / 2 - c * a;
        o.globalCompositeOperation = "lighter";
        const b = o.createRadialGradient(f, u, 0, f, u, h * 2.2);
        (b.addColorStop(0, `rgba(210,255,220,${0.9 * p})`),
          b.addColorStop(0.25, `rgba(70,255,130,${0.55 * p})`),
          b.addColorStop(1, "rgba(20,255,90,0)"),
          (o.fillStyle = b),
          o.fillRect(f - h * 2.2, u - h * 2.2, h * 4.4, h * 4.4));
      },
      trace(c, l = 1) {
        ((o.globalCompositeOperation = "lighter"),
          (o.lineCap = "round"),
          (o.lineJoin = "round"));
        for (const [p, h, f] of [
          [10, 0.28, "40,255,120"],
          [3.6, 0.75, "120,255,170"],
          [1.6, 1, "220,255,230"],
        ])
          ((o.strokeStyle = `rgba(${f},${h * l})`),
            (o.lineWidth = p),
            o.beginPath(),
            c.forEach(([u, b], M) =>
              M
                ? o.lineTo(512 / 2 + b * a, 512 / 2 - u * a)
                : o.moveTo(512 / 2 + b * a, 512 / 2 - u * a),
            ),
            o.stroke());
      },
      finish() {
        ((o.globalCompositeOperation = "source-over"),
          o.drawImage(r, 0, 0),
          (o.globalCompositeOperation = "destination-in"),
          o.beginPath(),
          o.arc(512 / 2, 512 / 2, 512 / 2 - 2, 0, 7),
          o.fill(),
          (o.globalCompositeOperation = "destination-over"),
          (o.fillStyle = "#020503"),
          o.fillRect(0, 0, 512, 512),
          (o.globalCompositeOperation = "source-over"),
          (s.needsUpdate = !0));
      },
    }
  );
}
function Co() {
  const t = fe(),
    e = new Y(),
    o = [],
    s = (m, k) => o.push(new In(k, m));
  (s(Me - 0.035, 0),
    s(Me - 0.034, 0.016),
    s(Me - 0.028, 0.022),
    s(-0.03, 0.022));
  for (let m = 1; m <= 20; m++) {
    const k = m / 20;
    s(
      -0.03 + (_e - 0.005 + 0.03) * k,
      0.022 + (Ve + 0.008 - 0.022) * Math.pow(k, 1.4),
    );
  }
  (s(_e, Ve + 0.008), s(_e + 0.004, Ve + 0.004));
  const r = new Jn(o, 96);
  r.rotateZ(-Math.PI / 2);
  const i = new E(
    r,
    new K({
      color: "#cfe6ff",
      roughness: 0.03,
      metalness: 0,
      transparent: !0,
      opacity: 0.09,
      envMapIntensity: 0.9,
      side: Ue,
      depthWrite: !1,
      clearcoat: 1,
    }),
  );
  ((i.position.y = Pe), (i.renderOrder = 3), e.add(i));
  const a = new E(new Q(0.026, 0.026, 0.03, 40), t.plastic);
  ((a.rotation.z = Math.PI / 2), a.position.set(Me - 0.05, Pe, 0), e.add(a));
  for (let m = 0; m < 8; m++) {
    const k = (m / 8) * Math.PI * 2,
      B = new E(new Q(0.0012, 0.0012, 0.012, 8), t.steel);
    ((B.rotation.z = Math.PI / 2),
      B.position.set(Me - 0.071, Pe + Math.sin(k) * 0.014, Math.cos(k) * 0.014),
      e.add(B));
  }
  const c = new E(
    new Q(0.0028, 0.0028, 0.006, 16),
    new re({
      color: new ue("#ff8a3a").multiplyScalar(2.4),
      toneMapped: !1,
    }),
  );
  ((c.rotation.z = Math.PI / 2), c.position.set(Me - 0.004, Pe, 0));
  const l = (m, k, B, y) => {
      const N = new E(new Q(B, B, k, 32, 1, !0), y);
      return (
        (N.material.side = Ue),
        (N.rotation.z = Math.PI / 2),
        N.position.set(m + k / 2, Pe, 0),
        N
      );
    },
    p = new Z({
      color: "#b8bcc2",
      metalness: 1,
      roughness: 0.32,
      side: Ue,
    });
  e.add(
    c,
    l(Me - 0.008, 0.012, 0.0055, p),
    l(Me + 0.008, 0.012, 0.009, p),
    l(Me + 0.026, 0.03, 0.011, p),
    l(Me + 0.06, 0.03, 0.012, p),
  );
  for (const m of [Me + 0.02, Me + 0.056, Ze + ae + 0.003]) {
    const k = new E(
      new m0(0.012, 0.0205, 40),
      new Z({
        color: "#e9dcc0",
        roughness: 0.4,
        transparent: !0,
        opacity: 0.55,
        side: Ue,
      }),
    );
    ((k.rotation.y = Math.PI / 2), k.position.set(m, Pe, 0), e.add(k));
  }
  const h = new Z({
    color: "#c7ccd3",
    metalness: 1,
    roughness: 0.25,
  });
  for (const m of [1, -1]) {
    const k = new E(new he(ae, 8e-4, 0.014), h);
    (k.position.set(Ze + ae / 2, Pe + (m * Ee) / 2, 0), e.add(k));
    const B = new E(new he(ae, 0.014, 8e-4), h);
    (B.position.set(mt + ae / 2, Pe, (m * Ee) / 2), e.add(B));
  }
  const f = qo(),
    u = new E(
      new Dt(Ve, 96),
      new re({
        map: f.tex,
        color: new ue(2.2, 2.2, 2.2),
        toneMapped: !1,
      }),
    );
  ((u.rotation.y = Math.PI / 2), u.position.set(_e - 5e-4, Pe, 0), e.add(u));
  const b = new E(new Xe(Ve + 0.008, 0.005, 16, 96), t.rubber);
  ((b.rotation.y = Math.PI / 2), b.position.set(_e + 0.002, Pe, 0), e.add(b));
  for (const [m, k] of [
    [Me + 0.04, 0.024],
    [_e - 0.03, Ve + 0.002],
  ]) {
    const B = new Y(),
      y = new E(new se(0.04, 0.01, 0.12, 2, 0.003), t.darkSteel);
    y.position.y = 0.005;
    const N = new E(new he(0.012, Pe - k - 0.01, 0.012), t.darkSteel);
    N.position.y = 0.01 + (Pe - k - 0.01) / 2;
    const $ = new E(new Xe(k + 0.003, 0.003, 10, 48, Math.PI), t.darkSteel);
    (($.rotation.y = Math.PI / 2),
      ($.rotation.z = Math.PI),
      ($.position.y = Pe),
      B.add(y, N, $),
      (B.position.x = m),
      e.add(B));
  }
  const M = Xt(["CRT", "J2459"], {
    w: 0.09,
    h: 0.024,
  });
  (M.position.set(-0.05, 0.035, 0.0605), (M.rotation.x = -0.25), e.add(M));
  const v = new E(
    new se(0.56, 0.02, 0.14, 2, 0.004),
    new Z({
      color: "#3a2a1e",
      roughness: 0.55,
    }),
  );
  return (
    v.position.set(-0.04, -0, 0),
    e.add(v),
    (e.ph = f),
    (e.screen = u),
    pe(e)
  );
}
function Uo(t) {
  const e = t.params,
    o = t.add(Co());
  o.position.y = 0.01;
  const s = o.ph,
    r = t.add(
      Te({
        width: 0.0012,
        halo: 5,
        haloOpacity: 0.22,
        gain: 2.4,
      }),
    ),
    i = [],
    a = new Ut({
      map: Nt(),
      color: "#8fd8ff",
      transparent: !0,
      depthWrite: !1,
      blending: yt,
      toneMapped: !1,
    });
  for (let m = 0; m < 10; m++) {
    const k = new Ct(a);
    (k.scale.setScalar(0.007), t.add(k), i.push(k));
  }
  let c = null,
    l = {
      uy: 0,
      ux: 0,
    };
  function p(m, k) {
    const B = B0({
        U1: e.U1,
        U2: m,
        L: ae,
        d: Ee,
        D: Bt,
      }),
      y = B0({
        U1: e.U1,
        U2: k,
        L: ae,
        d: Ee,
        D: dn,
      });
    return {
      y: B.Y,
      z: y.Y,
      hit: B.hit || y.hit,
      ay: B,
      ax: y,
    };
  }
  function h(m, k) {
    const B = p(m, k),
      y = [],
      N = m / Ee / (4 * e.U1),
      $ = k / Ee / (4 * e.U1),
      j = (L) =>
        L < Ze
          ? 0
          : L < Ze + ae
            ? N * (L - Ze) ** 2
            : B.ay.y + B.ay.tan * (L - Ze - ae),
      w = (L) =>
        L < mt
          ? 0
          : L < mt + ae
            ? $ * (L - mt) ** 2
            : B.ax.y + B.ax.tan * (L - mt - ae);
    let I = _e - 0.001;
    B.ay.hit
      ? (I = Ze + Math.sqrt(Ee / 2 / Math.abs(N)))
      : B.ax.hit && (I = mt + Math.sqrt(Ee / 2 / Math.abs($)));
    const g = (L, U) => Math.hypot(L, U) > Ve - 0.002;
    !B.hit && g(B.y, B.z) && (I = _e - 0.002);
    const S = 60;
    for (let L = 0; L <= S; L++) {
      const U = Me + 0.002 + ((I - Me - 0.002) * L) / S;
      y.push([U, Pe + 0.01 + j(U), -w(U)]);
    }
    return {
      pts: y,
      s: B,
    };
  }
  const f = (m) =>
      e.wave === "square"
        ? m < 0.5
          ? 1
          : -1
        : e.wave === "tri"
          ? m < 0.5
            ? 4 * m - 1
            : 3 - 4 * m
          : Math.sin(2 * Math.PI * m),
    u = () => (0.06 * 2 * Ee * e.U1) / (ae * (ae / 2 + dn)),
    b = 50;
  function M() {
    c = p(e.Uy, e.Ux);
  }
  M();
  let v = 0;
  return {
    update(m, k, B) {
      if ((B && M(), e.crtMode === "dc")) {
        ((l = {
          uy: e.Uy,
          ux: e.Ux,
        }),
          s.fade(0.35));
        const w = p(l.uy, l.ux);
        !w.hit && Math.hypot(w.y, w.z) < Ve - 0.002 && s.spot(w.y, w.z, 1, 9);
      } else {
        s.fade(0.22);
        const w = v,
          I = k,
          g = [],
          S = Math.max(2, Math.ceil((I - w) / 4e-4));
        let L = null;
        for (let U = 0; U <= S; U++) {
          const d = w + ((I - w) * U) / S,
            T = (d * b) % 1;
          (L != null &&
            T < L &&
            (g.length > 1 && s.trace(g.map((A) => [A.y, A.z])), (g.length = 0)),
            (L = T));
          const z = (T * 2 - 1) * u(),
            R = e.amp * f((((d * b * e.ratio) % 1) + 1) % 1),
            F = p(R, z);
          (!F.hit && Math.hypot(F.y, F.z) < Ve - 0.002 && g.push(F),
            (l = {
              uy: R,
              ux: z,
            }));
        }
        g.length > 1 &&
          s.trace(
            g.map((U) => [U.y, U.z]),
            0.8,
          );
      }
      ((v = k), s.finish());
      const { pts: y, s: N } = h(l.uy, l.ux);
      r.set([
        {
          pts: y,
          color: "#7fcfff",
          intensity: 0.6,
        },
      ]);
      const $ = y.length - 1;
      i.forEach((w, I) => {
        const g = ((k * 1.2 + I / i.length) % 1) * $,
          S = y[Math.floor(g)],
          L = y[Math.min($, Math.floor(g) + 1)],
          U = g % 1;
        w.position.set(
          S[0] + (L[0] - S[0]) * U,
          S[1] + (L[1] - S[1]) * U,
          S[2] + (L[2] - S[2]) * U,
        );
      });
      const j = Pe + 0.01;
      (t.tag("K", new P(Me - 0.01, j + 0.045, 0), translate("阴极 K"), "dim"),
        t.tag("A", new P(Me + 0.07, j - 0.035, 0), translate("阳极 A"), "dim"),
        t.tag(
          "Y",
          new P(Ze + 0.005, j + 0.055, 0),
          `Y ${x(l.uy, 0)} V`,
          "gold",
        ),
        t.tag("X", new P(mt + 0.01, j + 0.075, 0), `X ${x(l.ux, 0)} V`, "blue"),
        t.tag("S", new P(_e, j + Ve + 0.03, 0), translate("荧光屏"), "ok"),
        (N.ay.hit || N.ax.hit) &&
          t.tag(
            "hit",
            new P(Ze + ae / 2, j - 0.04, 0),
            translate("电子打在偏转板上"),
            "warn",
          ));
    },
    onParam() {},
    record() {
      if (e.crtMode !== "dc")
        return (t.flash(translate("请在“直流偏转”模式下记录")), !1);
      if (c.hit || Math.abs(c.y) > Ve)
        return (t.flash(translate("光点不在屏上，减小 U₂ 或增大 U₁")), !1);
      (t.records.push({
        U1: e.U1,
        U2: e.Uy,
        Y: c.y,
      }),
        t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
    },
    readouts() {
      const m = B0({
        U1: e.U1,
        U2: e.Uy,
        L: ae,
        d: Ee,
        D: Bt,
      });
      return [
        [translate("电子出射速度 v₀"), `${x(m.v0 / 1e7, 2)} ×10⁷ m/s`],
        [translate("板间运动时间"), `${x(m.t * 1e9, 2)} ns`],
        [translate("出板侧移 y"), `${x(m.y * 1e3, 2)} mm`],
        [translate("偏转角 tanθ"), x(m.tan, 4)],
        [
          translate("屏上偏移 Y"),
          m.hit ? translate("打在板上") : `${x(m.Y * 100, 2)} cm`,
        ],
        [
          translate("偏转灵敏度 Y/U₂"),
          `${x(((ae * (ae / 2 + Bt)) / (2 * Ee * e.U1)) * 1e3, 3)} mm/V`,
        ],
      ];
    },
    hud: () =>
      e.crtMode === "dc"
        ? [
            ["Y", c.hit ? "—" : x(c.y * 100, 2), "cm"],
            ["X", c.hit ? "—" : x(c.z * 100, 2), "cm"],
            ["U₁", x(e.U1, 0), "V"],
          ]
        : [
            ["U_m", x(e.amp, 0), "V"],
            ["f_y / f_x", String(e.ratio), ""],
            ["U₁", x(e.U1, 0), "V"],
          ],
    dock(m) {
      if (m === "crtinfo")
        return {
          html: qt(
            [
              [translate("偏转板长 L"), `${ae * 100} cm`],
              [translate("偏转板间距 d"), `${Ee * 100} cm`],
              [translate("Y 板右端到屏 D"), `${x(Bt * 100, 1)} cm`],
              "-",
              [
                "y = U₂L² / (4dU₁)",
                `${x(((e.Uy * ae * ae) / (4 * Ee * e.U1)) * 1e3, 3)} mm`,
                !0,
              ],
              [
                "Y = y + D·tanθ",
                `${x(((e.Uy * ae) / (2 * Ee * e.U1)) * (ae / 2 + Bt) * 100, 3)} cm`,
                !0,
              ],
            ],
            translate(
              "电子离开偏转板后做匀速直线运动，速度的反向延长线交于板的中点，所以 Y = (L/2 + D)·tanθ。",
            ),
          ),
        };
      const k = t.records.filter(($) => $.U1 === e.U1),
        B = k.map(($) => [$.U2, $.Y * 1e3]),
        y =
          B.length >= 2
            ? Tt(
                B.map(($) => $[0]),
                B.map(($) => $[1]),
              )
            : null,
        N = ((ae * (ae / 2 + Bt)) / (2 * Ee * e.U1)) * 1e3;
      return t.records.length
        ? {
            chart: {
              series: [
                {
                  pts: [
                    [-120, -120 * N],
                    [120, 120 * N],
                  ],
                  color: "#5d5b57",
                  dashed: !0,
                  name: translate("理论"),
                  noHover: !0,
                },
                {
                  pts: B,
                  color: "#7dffb0",
                  kind: "scatter",
                  name: `U₁ = ${e.U1} V`,
                },
              ],
              x: [-120, 120],
              fit: y
                ? {
                    ...y,
                    color: "#e8e6e0",
                    label: `k = ${y.k.toFixed(3)} mm/V`,
                  }
                : null,
              fitRange: [-120, 120],
              xLabel: "U₂ / V",
              yLabel: "Y / mm",
              xName: "U₂",
            },
            side: `<div class="fitside"><b class="big">${k.length}</b><span>${translate("组数据（当前 U₁）")}</span>${y ? `<div class="res">${translate("灵敏度")} ${x(y.k, 3)} mm/V</div>` : ""}<p>${translate("理论灵敏度 L(L/2 + D)/(2dU₁) = {0} mm/V，与 U₁ 成反比。", [x(N, 3)])}</p></div>`,
          }
        : {
            html: lt(translate("在“直流偏转”模式下改变 U₂，按“记录数据”。")),
          };
    },
    inset: () => ({
      canvas: s.canvas,
      label: translate("荧光屏特写"),
      round: !0,
    }),
    csv: () =>
      t.records.length
        ? [["U1/V", "U2/V", "Y/m"], ...t.records.map((m) => [m.U1, m.U2, m.Y])]
        : null,
  };
}
const Mt = 4 * Math.PI * 1e-7,
  Wt = (t, e) => [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
  Lt = (t, e) => t[0] * e[0] + t[1] * e[1] + t[2] * e[2],
  l0 = (t, e) => [
    t[1] * e[2] - t[2] * e[1],
    t[2] * e[0] - t[0] * e[2],
    t[0] * e[1] - t[1] * e[0],
  ],
  V0 = (t) => Math.hypot(t[0], t[1], t[2]),
  To = (t, e) => (Mt * Math.abs(t)) / (2 * Math.PI * e);
function No(t, e, o, s) {
  const r = Wt(s, e),
    i = Lt(r, o),
    a = [r[0] - i * o[0], r[1] - i * o[1], r[2] - i * o[2]],
    c = Lt(a, a);
  if (c < 1e-14) return [0, 0, 0];
  const l = l0(o, a),
    p = (Mt * t) / (2 * Math.PI * c);
  return [l[0] * p, l[1] * p, l[2] * p];
}
function zo(t, e, o, s, r = [0, 0, 0]) {
  const i = Wt(o, e),
    a = Wt(s, e),
    c = Wt(s, o),
    l = l0(i, a),
    p = Lt(l, l),
    h = V0(a),
    f = V0(c);
  if (p < 1e-18 || h < 1e-9 || f < 1e-9) return r;
  const u = ((Mt * t) / (4 * Math.PI)) * ((Lt(i, a) / h - Lt(i, c) / f) / p);
  return ((r[0] += l[0] * u), (r[1] += l[1] * u), (r[2] += l[2] * u), r);
}
function jn(t, e, o, s = 72) {
  const r = Math.abs(e[1]) < 0.9 ? [0, 1, 0] : [1, 0, 0];
  let i = l0(r, e);
  const a = V0(i);
  i = [i[0] / a, i[1] / a, i[2] / a];
  const c = l0(e, i),
    l = [];
  for (let p = 0; p <= s; p++) {
    const h = (p / s) * Math.PI * 2,
      f = Math.cos(h) * o,
      u = Math.sin(h) * o;
    l.push([
      t[0] + i[0] * f + c[0] * u,
      t[1] + i[1] * f + c[1] * u,
      t[2] + i[2] * f + c[2] * u,
    ]);
  }
  return l;
}
function Vn(t, e, o, s = [0, 0, 0]) {
  for (let r = 1; r < e.length; r++) zo(t, e[r - 1], e[r], o, s);
  return s;
}
function Fo(t, e, o, s, r, i = 40) {
  const a = [];
  for (let c = 0; c < r; c++) {
    const l = -s / 2 + (s * c) / (r - 1);
    a.push(jn([t[0] + e[0] * l, t[1] + e[1] * l, t[2] + e[2] * l], e, o, i));
  }
  return a;
}
function Ro(t, e, o, s = [0, 0, 0]) {
  for (const r of e) Vn(t, r, o, s);
  return s;
}
function Ao(t, e, o, s = [0, 0, 0], r = 0) {
  const i = Wt(o, e),
    a = Lt(i, i) + r * r;
  if (a < 1e-14) return s;
  const c = (Mt * t) / (4 * Math.PI * a * Math.sqrt(a));
  return ((s[0] += c * i[0]), (s[1] += c * i[1]), (s[2] += c * i[2]), s);
}
function jo(t, e, o, s) {
  const r = 0.42 * s,
    i = t / (2 * r);
  return [
    {
      qm: i,
      p: [e[0] + o[0] * r, e[1] + o[1] * r, e[2] + o[2] * r],
    },
    {
      qm: -i,
      p: [e[0] - o[0] * r, e[1] - o[1] * r, e[2] - o[2] * r],
    },
  ];
}
function pn(t, e, o = [0, 0, 0], s = 0) {
  for (const r of t) Ao(r.qm, r.p, e, o, s);
  return o;
}
const Z0 = "#c8302a",
  en = "#2b5bc4",
  Wn = (t) =>
    new K({
      color: t,
      roughness: 0.32,
      metalness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.18,
    }),
  E0 = {};
function Vo(t) {
  if (E0[t]) return E0[t];
  const e = document.createElement("canvas");
  e.width = e.height = 128;
  const o = e.getContext("2d");
  ((o.fillStyle = "#f4f1ea"),
    (o.font = "800 104px 'Helvetica Neue', Arial, sans-serif"),
    (o.textAlign = "center"),
    (o.textBaseline = "middle"),
    o.fillText(t, 64, 70));
  const s = new kt(e);
  return ((s.colorSpace = Ot), (E0[t] = s));
}
function tn(t, e) {
  const o = new E(
    new $e(e, e),
    new Z({
      map: Vo(t),
      transparent: !0,
      roughness: 0.4,
      depthWrite: !1,
    }),
  );
  return ((o.rotation.x = -Math.PI / 2), o);
}
function Dn(t = 0.12, e = 0.024, o = 0.016) {
  const s = new Y();
  for (const [r, i, a] of [
    [1, Z0, "N"],
    [-1, en, "S"],
  ]) {
    const c = new E(new se(t / 2, o, e, 2, 0.0015), Wn(i));
    (c.position.set((r * t) / 4, o / 2, 0), s.add(c));
    const l = tn(a, e * 0.8);
    (l.position.set(r * (t / 2 - e * 0.55), o + 4e-4, 0),
      (l.rotation.z = -Math.PI / 2),
      s.add(l));
  }
  return ((s.len = t), (s.h = o), pe(s));
}
function Hn({
  Ro: t = 0.045,
  Ri: e = 0.021,
  arm: o = 0.075,
  h: s = 0.02,
} = {}) {
  const r = new Y(),
    i = (c) => {
      const l = new u0();
      (l.moveTo(o, c * e),
        l.lineTo(0, c * e),
        l.absarc(0, 0, e, c > 0 ? Math.PI / 2 : -Math.PI / 2, Math.PI, c < 0),
        l.lineTo(-t, 0),
        l.absarc(0, 0, t, Math.PI, c > 0 ? Math.PI / 2 : -Math.PI / 2, c > 0),
        l.lineTo(o, c * t),
        l.closePath());
      const p = new Kn(l, {
        depth: s,
        bevelEnabled: !0,
        bevelSize: 0.0012,
        bevelThickness: 0.0012,
        bevelSegments: 2,
        curveSegments: 32,
      });
      return (
        p.rotateX(Math.PI / 2),
        p.translate(0, s, 0),
        new E(p, Wn(c > 0 ? Z0 : en))
      );
    };
  r.add(i(1), i(-1));
  const a = (t + e) / 2;
  for (const [c, l] of [
    [1, "N"],
    [-1, "S"],
  ]) {
    const p = tn(l, (t - e) * 0.85);
    (p.position.set(o - (t - e) * 0.55, s + 0.0014, c * a),
      (p.rotation.z = -Math.PI / 2),
      r.add(p));
  }
  return (
    (r.poleN = new P(o - 0.004, s / 2, a)),
    (r.poleS = new P(o - 0.004, s / 2, -a)),
    (r.dims = {
      Ro: t,
      Ri: e,
      arm: o,
      h: s,
      mid: a,
    }),
    pe(r)
  );
}
function Wo({
  R: t = 0.04,
  len: e = 0.2,
  turns: o = 20,
  r: s = 0.0022,
  material: r = null,
  segs: i = 24,
  leads: a = !0,
} = {}) {
  const c = [],
    l = o * i;
  for (let f = 0; f <= l; f++) {
    const u = (f / i) * Math.PI * 2;
    c.push(new P(-e / 2 + (e * f) / l, Math.sin(u) * t, Math.cos(u) * t));
  }
  a &&
    (c.unshift(new P(-e / 2 - 0.01, t, 0.02).lerp(c[0], 0.5)),
    c.push(c[c.length - 1].clone().add(new P(0.012, 0, 0))));
  const p = new b0(c),
    h = new E(new w0(p, l * 2, s, 8, !1), r || Yt());
  return ((h.castShadow = !0), h);
}
function Do(t = 0.08, e = 0.004, o = null) {
  const s = new E(new Xe(t, e, 16, 128), o || Yt());
  return ((s.castShadow = !0), s);
}
function Ho(t = 120, e = 0.014) {
  const o = new Y(),
    s = fe(),
    r = new We(
      new Q(e, e, 0.004, 28),
      new K({
        color: "#d9d4c7",
        roughness: 0.4,
        metalness: 0.1,
        clearcoat: 0.6,
      }),
      t,
    ),
    i = new We(new Xe(e, 0.0012, 8, 32).rotateX(Math.PI / 2), s.brass, t),
    a = new _0(e * 0.2, e * 0.85, 4);
  (a.rotateZ(-Math.PI / 2), a.scale(1, 0.25, 1), a.translate(e * 0.42, 0, 0));
  const c = a.clone();
  c.rotateY(Math.PI);
  const l = new We(
      a,
      new Z({
        color: "#d4302a",
        roughness: 0.4,
        emissive: "#5a0805",
      }),
      t,
    ),
    p = new We(
      c,
      new Z({
        color: "#eeeae0",
        roughness: 0.4,
      }),
      t,
    );
  for (const v of [r, i, l, p]) ((v.count = 0), (v.castShadow = !0), o.add(v));
  const h = new gt(),
    f = new H0(),
    u = new P(),
    b = new P(1, 1, 1),
    M = new P(0, 1, 0);
  return (
    (o.set = (v) => {
      const m = Math.min(t, v.length);
      for (let k = 0; k < m; k++) {
        const B = v[k];
        (u.set(B.x, B.y + 0.002, B.z),
          f.identity(),
          h.compose(u, f, b),
          r.setMatrixAt(k, h),
          (u.y = B.y + 0.004),
          h.compose(u, f, b),
          i.setMatrixAt(k, h),
          (u.y = B.y + 0.0062),
          f.setFromAxisAngle(M, -B.ang),
          h.compose(u, f, b),
          l.setMatrixAt(k, h),
          p.setMatrixAt(k, h));
      }
      for (const k of [r, i, l, p])
        ((k.count = m), (k.instanceMatrix.needsUpdate = !0));
    }),
    o
  );
}
function Oo(t = 7e3) {
  const e = new he(1, 5e-4, 55e-5),
    o = new We(
      e,
      new Z({
        color: "#2e2f33",
        metalness: 0.85,
        roughness: 0.45,
      }),
      t,
    );
  ((o.count = 0), (o.receiveShadow = !1));
  const s = new gt(),
    r = new H0(),
    i = new P(),
    a = new P(),
    c = new P(0, 1, 0);
  return (
    (o.set = (l) => {
      const p = Math.min(t, l.length);
      for (let h = 0; h < p; h++) {
        const f = l[h];
        (i.set(f.x, f.y, f.z),
          r.setFromAxisAngle(c, -f.ang),
          a.set(f.len, 1, 1),
          s.compose(i, r, a),
          o.setMatrixAt(h, s));
      }
      ((o.count = p), (o.instanceMatrix.needsUpdate = !0));
    }),
    o
  );
}
const pt = 0.86,
  ft = 0.56,
  _o = 1.6,
  fn = 26,
  Ft = 0.075,
  Rt = 0.042,
  a0 = 0.22,
  L0 = 22,
  hn = 200,
  un = "#5a3fd8";
function Qo(t) {
  let e = t >>> 0;
  return () => (e = (e * 1664525 + 1013904223) >>> 0) / 4294967296;
}
function Xo(t) {
  const e = t.params,
    s = t.add(
      g0(pt, ft, {
        light: !0,
      }),
    ).top,
    r = t.add(
      Te({
        width: 0.0012,
        gain: 1,
        additive: !1,
      }),
    ),
    i = t.add(
      _t({
        size: 0.0062,
        additive: !1,
      }),
    ),
    a = t.add(Oo(7e3)),
    c = t.add(Ho(120)),
    l = fe(),
    p = t.add(Dn(0.12, 0.024, 0.016)),
    h = t.add(Hn()),
    f = {
      p: [0, 0],
      a: 0,
    };
  for (const d of [p, h])
    (t.draggable(d, {
      pos: () => f.p,
      move(T) {
        f.p = [
          ee(T[0], -pt / 2 + 0.08, pt / 2 - 0.08),
          ee(T[1], -ft / 2 + 0.06, ft / 2 - 0.06),
        ];
      },
    }),
      t.rotator(d, {
        radius: 0.085,
        height: 0.03,
        get: () => f.a,
        set: (T) => (f.a = Math.round(St(T) / 5) * 5 * (Math.PI / 180)),
      }));
  const u = t.add(new Y());
  {
    const d = new E(new Q(0.0035, 0.0035, 0.36, 20), Gt());
    d.position.y = 0.1;
    const T = new E(new Q(0.008, 0.008, 0.012, 20), l.brass);
    T.position.y = 0.27;
    const z = new E(new he(0.012, 0.012, 0.24), l.darkSteel);
    z.position.set(0, 0.27, -0.12);
    const R = new E(new Q(0.007, 0.007, 0.28, 16), l.chrome);
    R.position.set(0, 0.14, -0.24);
    const F = new E(new he(0.08, 0.012, 0.06), l.darkSteel);
    (F.position.set(0, 0.006, -0.24),
      u.add(d, T, z, R, F),
      (u.arrow = Re("#ffd25a", {
        r: 0.0016,
        head: 0.012,
      })),
      u.add(u.arrow));
  }
  const b = t.add(new Y());
  {
    const d = Do(Ft, 0.0045);
    ((d.position.y = s),
      b.add(d),
      (b.arrow = Re("#ffd25a", {
        r: 0.0016,
        head: 0.012,
      })),
      b.add(b.arrow));
  }
  const M = t.add(new Y());
  {
    const d = Wo({
      R: Rt,
      len: a0,
      turns: L0,
      r: 0.0024,
    });
    ((d.position.y = s),
      M.add(d),
      (M.arrow = Re("#ffd25a", {
        r: 0.0016,
        head: 0.012,
      })),
      M.add(M.arrow));
  }
  const v = t.add(Tn("#6cf0c0")),
    m = [0.12, 0.12];
  t.draggable(v, {
    pos: () => m,
    move(d) {
      ((m[0] = ee(d[0], -pt / 2 + 0.015, pt / 2 - 0.015)),
        (m[1] = ee(d[1], -ft / 2 + 0.015, ft / 2 - 0.015)));
    },
  });
  let k = () => [0, 0, 0],
    B = () => !1,
    y = [];
  function N() {
    const d = e.src;
    ((p.visible = d === "bar"),
      (h.visible = d === "horse"),
      (u.visible = d === "wire"),
      (b.visible = d === "loop"),
      (M.visible = d === "sol"));
    const T = Math.cos(f.a),
      z = Math.sin(f.a);
    if (d === "bar")
      (p.position.set(f.p[0], s, f.p[1]),
        (p.rotation.y = -f.a),
        (y = jo(_o, [f.p[0], s + 0.008, f.p[1]], [T, 0, z], 0.12)),
        (k = (R, F) => pn(y, [R, s + 0.008, F], [0, 0, 0], 0.006)),
        (B = (R, F) => {
          const A = R - f.p[0],
            C = F - f.p[1];
          return (
            Math.abs(A * T + C * z) < 0.064 && Math.abs(-A * z + C * T) < 0.016
          );
        }));
    else if (d === "horse") {
      (h.position.set(f.p[0] - T * 0.02, s, f.p[1] - z * 0.02),
        (h.rotation.y = -f.a),
        h.updateMatrixWorld(!0));
      const R = h.localToWorld(h.poleN.clone()),
        F = h.localToWorld(h.poleS.clone());
      ((y = [
        {
          qm: fn,
          p: [R.x, R.y, R.z],
        },
        {
          qm: -fn,
          p: [F.x, F.y, F.z],
        },
      ]),
        (k = (_, te) => pn(y, [_, s + 0.01, te], [0, 0, 0], 0.006)));
      const { Ro: A, Ri: C, arm: H } = h.dims;
      B = (_, te) => {
        const G = h.worldToLocal(new P(_, s, te)),
          le = Math.hypot(G.x, G.z);
        return G.x <= 0
          ? le > C - 0.003 && le < A + 0.003
          : G.x < H + 0.003 &&
              Math.abs(G.z) > C - 0.003 &&
              Math.abs(G.z) < A + 0.003;
      };
    } else if (d === "wire")
      ((k = (R, F) => No(e.I, [0, 0, 0], [0, 1, 0], [R, s, F])),
        (B = (R, F) => Math.hypot(R, F) < 0.007),
        u.arrow.set(
          new P(0.012, e.I >= 0 ? 0.06 : 0.16, 0),
          new P(0, Math.sign(e.I) || 1, 0),
          e.I ? 0.1 : 0,
        ));
    else if (d === "loop") {
      const R = jn([0, s, 0], [0, 0, 1], Ft, 72);
      ((k = (F, A) => Vn(e.I, R, [F, s, A])),
        (B = (F, A) =>
          Math.abs(Math.abs(F) - Ft) < 0.008 && Math.abs(A) < 0.008),
        b.arrow.set(
          new P(e.I >= 0 ? 0.05 : -0.05, s + Ft + 0.012, 0),
          new P(e.I >= 0 ? -1 : 1, 0, 0),
          e.I ? 0.1 : 0,
        ));
    } else {
      const R = Fo([0, s, 0], [1, 0, 0], Rt, a0, L0, 36),
        F = hn / L0;
      ((k = (A, C) => Ro(e.I * F, R, [A, s, C])),
        (B = (A, C) =>
          Math.abs(A) < a0 / 2 + 0.006 && Math.abs(Math.abs(C) - Rt) < 0.008),
        M.arrow.set(
          new P(0, s + Rt + 0.012, e.I >= 0 ? 0.05 : -0.05),
          new P(0, 0, e.I >= 0 ? -1 : 1),
          e.I ? 0.1 : 0,
        ));
    }
  }
  const $ = (d, T) => {
      const z = k(d, T);
      return [z[0], z[2]];
    },
    j = [-pt / 2 + 0.005, -ft / 2 + 0.005, pt / 2 - 0.005, ft / 2 - 0.005];
  function w(d, T, z = 0.05) {
    const R = c0($, d, T, {
      dir: 1,
      step: 0.003,
      maxLen: 2.4,
      bounds: j,
      closeAfter: z,
      stop: (A, C) => (B(A, C) && Math.hypot(A - d, C - T) > 0.02 ? 1 : null),
    });
    return R.end === "closed"
      ? R.pts
      : [
          ...c0($, d, T, {
            dir: -1,
            step: 0.003,
            maxLen: 2.4,
            bounds: j,
            stop: (A, C) =>
              B(A, C) && Math.hypot(A - d, C - T) > 0.02 ? 1 : null,
          }).pts.reverse(),
          ...R.pts.slice(1),
        ];
  }
  function I() {
    const d = [];
    if (e.src === "bar" || e.src === "horse") {
      const T = y[0],
        z = y[1],
        R = e.src === "bar" ? 18 : 16;
      for (let F = 0; F < R; F++) {
        const A = ((F + 0.5) / R) * Math.PI * 2,
          C = T.p[0] + Math.cos(A) * 0.012,
          H = T.p[2] + Math.sin(A) * 0.012,
          te = c0($, C, H, {
            dir: 1,
            step: 0.003,
            maxLen: 2.4,
            bounds: j,
            stop: (G, le) =>
              (G - z.p[0]) ** 2 + (le - z.p[2]) ** 2 < 0.012 ** 2 ? 1 : null,
          }).pts.filter(([G, le]) => !B(G, le));
        te.length > 4 && d.push(te);
      }
    } else if (e.src === "wire") {
      if (!e.I) return d;
      for (const T of [0.03, 0.055, 0.085, 0.12, 0.16, 0.21]) d.push(w(T, 0));
    } else if (e.src === "loop") {
      if (!e.I) return d;
      for (const T of [
        -0.055, -0.035, -0.015, 0, 0.015, 0.035, 0.055, -0.1, 0.1, -0.13, 0.13,
      ])
        d.push(w(T, 1e-4));
    } else {
      if (!e.I) return d;
      for (const T of [-0.032, -0.022, -0.011, 0, 0.011, 0.022, 0.032])
        d.push(w(0, T, 0.3));
    }
    return d;
  }
  const g = Qo(11),
    S = Array.from(
      {
        length: 7e3,
      },
      () => [
        (g() - 0.5) * (pt - 0.02),
        (g() - 0.5) * (ft - 0.02),
        g(),
        g(),
        g(),
      ],
    );
  function L() {
    N();
    const d = s + 0.0012;
    if (e.blines) {
      const F = I().map((C) => ({
        pts: C.map(([H, _]) => [H, d, _]),
        color: un,
      }));
      r.set(F);
      const A = [];
      for (const C of F)
        A.push(
          ...Qt(C.pts, 0.09, {
            offset: 0.5,
            color: un,
            gain: 1,
          }),
        );
      (i.set(A), r.show(!0), (i.visible = !0));
    } else (r.show(!1), (i.visible = !1));
    if (((a.visible = e.filings), e.filings)) {
      const F = [],
        A =
          e.src === "bar" || e.src === "horse"
            ? 12e-7
            : 15e-8 * Math.max(1, Math.abs(e.I));
      for (const [C, H, _, te, G] of S) {
        if (B(C, H)) continue;
        const [le, oe] = $(C, H),
          ke = Math.hypot(le, oe),
          Le = ke / (ke + A),
          De =
            Math.atan2(oe, le) + (_ - 0.5) * (0.35 + Math.PI * (1 - Le) * 1.4);
        F.push({
          x: C,
          z: H,
          y: s + 4e-4 + G * 3e-4,
          ang: De,
          len: 0.0022 + te * 0.0042 * (0.4 + 0.6 * Le),
        });
      }
      a.set(F);
    }
    if (((c.visible = e.compass), e.compass)) {
      const F = [];
      for (let A = 0; A < 11; A++)
        for (let C = 0; C < 7; C++) {
          const H = -0.36 + A * 0.072,
            _ = -0.21 + C * 0.07;
          if (
            B(H, _) ||
            B(H + 0.012, _) ||
            B(H - 0.012, _) ||
            B(H, _ + 0.012) ||
            B(H, _ - 0.012) ||
            (e.src === "wire" && Math.hypot(H, _) < 0.02)
          )
            continue;
          const [te, G] = $(H, _);
          F.push({
            x: H,
            z: _,
            y: s,
            ang: Math.atan2(G, te),
          });
        }
      c.set(F);
    }
    v.position.set(m[0], s, m[1]);
    const [T, z] = $(m[0], m[1]),
      R = Math.hypot(T, z);
    v.setArrow(
      Math.atan2(z, T),
      ee(0.016 * Math.log10(Math.max(1, R / 2e-6)), 0, 0.07),
    );
  }
  const U = () => {
    const [d, T] = $(m[0], m[1]);
    return {
      B: Math.hypot(d, T),
      ang: Math.atan2(-T, d),
      r: Math.hypot(m[0], m[1]),
    };
  };
  return (
    L(),
    {
      update(d, T, z) {
        z && L();
        const R = U();
        (t.tag(
          "probe",
          new P(m[0] + 0.02, s + 0.075, m[1]),
          `B ${ce(R.B * 1e3, 3)} mT`,
          "ok",
        ),
          (e.src === "wire" || e.src === "loop" || e.src === "sol") &&
            t.tag(
              "I",
              new P(
                e.src === "wire" ? 0.02 : 0,
                e.src === "wire"
                  ? 0.22
                  : s + (e.src === "loop" ? Ft : Rt) + 0.04,
                e.src === "sol" ? -0.06 : 0,
              ),
              `I = ${x(e.I, 1)} A`,
              "gold",
            ));
      },
      onParam(d) {
        d === "src" && ((f.p = [0, 0]), (f.a = 0));
      },
      record() {
        if (e.src !== "wire")
          return (t.flash(translate("请选择“直导线”后再记录 B 与 r")), !1);
        const d = U();
        if (d.r < 0.01) return !1;
        (t.records.push({
          I: e.I,
          r: d.r,
          B: d.B,
        }),
          t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
      },
      readouts() {
        const d = U(),
          T = [
            [translate("探头处 B"), `${ce(d.B * 1e3, 3)} mT`],
            [translate("B 的方向"), `${x(St(d.ang), 0)}°`],
          ];
        return (
          e.src === "wire" &&
            T.push(
              [translate("到导线的距离 r"), `${x(d.r * 100, 1)} cm`],
              ["μ₀I / 2πr", `${ce(To(e.I, d.r) * 1e3, 3)} mT`],
            ),
          e.src === "sol" &&
            T.push([
              translate("内部理论值 μ₀nI"),
              `${ce(((Mt * hn * Math.abs(e.I)) / a0) * 1e3, 3)} mT`,
            ]),
          T
        );
      },
      hud: () => [["B", ce(U().B * 1e3, 3), "mT"]],
      dock(d) {
        const T = U();
        if (d === "bprobe") {
          const _ = {
              bar: translate("条形磁铁"),
              horse: translate("蹄形磁铁"),
              wire: translate("通电直导线"),
              loop: translate("环形电流"),
              sol: translate("通电螺线管"),
            },
            te = [
              [translate("场源"), _[e.src]],
              [
                translate("探头位置"),
                `(${x(m[0] * 100, 1)}, ${x(-m[1] * 100, 1)}) cm`,
              ],
              [translate("磁感应强度 B"), `${ce(T.B * 1e3, 4)} mT`, !0],
              [translate("方向（与 +x 轴夹角）"), `${x(St(T.ang), 1)}°`],
            ],
            G =
              e.src === "wire" || e.src === "loop" || e.src === "sol"
                ? translate(
                    "安培定则：右手握住导线，大拇指指向电流方向，弯曲的四指就是磁感线的环绕方向。螺线管：四指沿电流方向，大拇指指向内部磁场（N 极）。",
                  )
                : translate(
                    "拖动磁铁移动，拖动金色圆环旋转。小磁针静止时 N 极（红色）指向该点的磁场方向。",
                  );
          return {
            html: qt(te, G),
          };
        }
        const z = t.records;
        if (!z.length)
          return {
            html: lt(
              translate("选择直导线，把探头放在不同距离处按“记录数据”。"),
            ),
          };
        const R = z[z.length - 1].I,
          F = z.filter((_) => _.I === R).map((_) => [1 / _.r, _.B * 1e3]),
          A =
            F.length >= 2
              ? Tt(
                  F.map((_) => _[0]),
                  F.map((_) => _[1]),
                )
              : null,
          C = ((Mt * Math.abs(R)) / (2 * Math.PI)) * 1e3,
          H = Math.max(40, ...F.map((_) => _[0] * 1.1));
        return {
          chart: {
            series: [
              {
                pts: [
                  [0, 0],
                  [H, C * H],
                ],
                color: "#5d5b57",
                dashed: !0,
                name: "μ₀I / 2πr",
                noHover: !0,
              },
              {
                pts: F,
                color: "#6cf0c0",
                kind: "scatter",
                name: `I = ${x(R, 1)} A`,
              },
            ],
            x: [0, H],
            y: [0, null],
            fit: A
              ? {
                  ...A,
                  color: "#e8e6e0",
                  label: `k = ${ce(A.k, 3)} mT·m`,
                }
              : null,
            fitRange: [0, H],
            xLabel: "1/r / m⁻¹",
            yLabel: "B / mT",
            xName: "1/r",
          },
          side: `<div class="fitside"><b class="big">${F.length}</b><span>${translate("组数据")}</span>${A ? `<div class="res">μ₀ ≈ ${ce(((A.k / 1e3) * 2 * Math.PI) / Math.abs(R), 3)} T·m/A</div>` : ""}<p>${translate("B 与 1/r 成正比，斜率 k = μ₀I/2π。")}</p></div>`,
        };
      },
      csv: () =>
        t.records.length
          ? [
              ["I/A", "r/m", "B/T"],
              ...t.records.map((d) => [d.I, +d.r.toFixed(4), d.B]),
            ]
          : null,
    }
  );
}
const At = 0.3,
  $t = 0.035,
  Je = 0.075,
  ut = 0.031,
  Et = 0.005,
  He = ut + 0.003 + Et,
  r0 = 0.05,
  Go = -0.06,
  q0 = -0.055,
  C0 = 0.24,
  i0 = 0.02,
  U0 = 0.1,
  T0 = 9.8;
function Yo(t) {
  const e = t.params,
    o = fe(),
    s = t.add(new Y()),
    r = new Z({
      color: "#a8874a",
      metalness: 1,
      roughness: 0.42,
      envMapIntensity: 0.7,
    });
  for (const y of [-Je, Je]) {
    const N = new E(new Q(0.003, 0.003, 0.5, 20), r);
    ((N.rotation.z = Math.PI / 2), N.position.set(0.04, ut, y), s.add(N));
    for (const $ of [-0.19, 0.27]) {
      const j = new E(
        new se(0.03, ut, 0.03, 2, 0.003),
        new K({
          color: "#e9e2d0",
          roughness: 0.4,
          clearcoat: 0.6,
        }),
      );
      j.position.set($, ut / 2, y);
      const w = new E(new Q(0.0045, 0.0045, 0.006, 6), r);
      (w.position.set($, ut + 0.004, y), s.add(j, w));
    }
  }
  for (const y of [q0 - Et - 0.004, C0 + Et + 0.004])
    for (const N of [-Je, Je]) {
      const $ = new E(new Q(0.0045, 0.0045, 0.012, 16), o.rubber);
      ($.position.set(y, ut + 0.006, N), s.add($));
    }
  pe(s);
  const i = t.add(new E(new Q(Et, Et, 2 * Je + 0.04, 32), Gt()));
  ((i.rotation.x = Math.PI / 2), (i.castShadow = !0));
  const a = [];
  for (let y = 0; y < 3; y++) {
    const N = Hn({
      Ro: 0.034,
      Ri: 0.013,
      arm: 0.1,
      h: $t - 0.002,
    });
    (t.add(N), a.push(N));
  }
  const c = t.add(
    Fn({
      label: "DC  0 - 5 A",
    }),
  );
  c.position.set(0.12, 0, -0.27);
  const l = t.add(
      Qe(null, {
        color: "#c43a2e",
      }),
    ),
    p = t.add(
      Qe(null, {
        color: "#1d1f23",
      }),
    ),
    h = t.add(
      Re("#ffd25a", {
        r: 0.0016,
        head: 0.012,
      }),
    ),
    f = t.add(
      Re("#3fd28a", {
        r: 0.0022,
        head: 0.016,
      }),
    ),
    u = [0, 1, 2].map(() =>
      t.add(
        Re("#b9a2ff", {
          r: 0.0011,
          head: 0.008,
        }),
      ),
    ),
    b = {
      x: 0,
      v: 0,
      on: !1,
    },
    M = () => e.mags * $t,
    v = (y) => y > Go && y < r0 + 0.004,
    m = (y) => (b.on && v(y) ? -e.idir * e.bdir * At * e.Ia * M() : 0);
  function k() {
    (a.forEach((g, S) => {
      g.visible = S < e.mags;
      const L = (S - (e.mags - 1) / 2) * ($t + 0.001);
      (g.rotation.set(e.bdir > 0 ? -Math.PI / 2 : Math.PI / 2, 0, 0),
        g.position.set(
          r0 - 0.1,
          He,
          L + (e.bdir > 0 ? ($t - 0.002) / 2 : -0.033 / 2),
        ));
    }),
      c.show(b.on ? e.Ia.toFixed(2) : "0.00"),
      c.setOn(b.on),
      c.updateMatrixWorld(!0));
    const y = c.posts[0].clone().applyMatrix4(c.matrixWorld),
      N = c.posts[1].clone().applyMatrix4(c.matrixWorld),
      [$, j] = e.idir > 0 ? [y, N] : [N, y],
      w = new P(-0.19, ut + 0.006, Je),
      I = new P(-0.19, ut + 0.006, -Je);
    (l.set([
      $,
      $.clone().add(new P(0, -0.02, 0.05)),
      new P(-0.1, 0.004, 0.2),
      new P(-0.24, 0.004, Je + 0.04),
      w,
    ]),
      p.set([
        j,
        j.clone().add(new P(0, -0.02, 0.04)),
        new P(-0.08, 0.004, -0.2),
        new P(-0.24, 0.004, -Je - 0.04),
        I,
      ]));
  }
  function B() {
    (i.position.set(b.x, He, 0),
      i.rotation.set(Math.PI / 2, 0, 0),
      i.rotateY(b.x / Et));
    const y = He + 0.012;
    ((h.visible = b.on),
      b.on && h.set(new P(b.x, y, 0.05 * e.idir), new P(0, 0, -e.idir), 0.1));
    const N = m(b.x);
    (f.set(
      new P(b.x, He, 0),
      new P(Math.sign(N) || 1, 0, 0),
      Math.abs(N) > 0 ? 0.03 + Math.abs(N) * 1.2 : 0,
    ),
      u.forEach(($, j) => {
        $.visible = j < e.mags;
        const w = (j - (e.mags - 1) / 2) * ($t + 0.001),
          I = He + 0.011,
          g = He - 0.011;
        $.set(
          new P(r0 - 0.012, e.bdir > 0 ? I : g, w),
          new P(0, -e.bdir, 0),
          0.022,
        );
      }));
  }
  return (
    k(),
    B(),
    {
      update(y, N, $) {
        $ && k();
        const j = 8,
          w = y / j;
        for (let g = 0; g < j; g++) {
          const S = m(b.x),
            L = U0 * i0 * T0;
          if (Math.abs(b.v) < 1e-4 && Math.abs(S) <= L) {
            b.v = 0;
            continue;
          }
          const U = (S - Math.sign(b.v || S) * L) / i0,
            d = b.v + U * w;
          ((b.v =
            b.v !== 0 && Math.sign(d) !== Math.sign(b.v) && Math.abs(S) <= L
              ? 0
              : d),
            (b.x += b.v * w),
            (b.x < q0 || b.x > C0) && ((b.x = ee(b.x, q0, C0)), (b.v = 0)));
        }
        B();
        const I = m(b.x);
        (b.on &&
          t.tag("I", new P(b.x + 0.01, He + 0.03, -0.05 * e.idir), "I", "gold"),
          I &&
            t.tag(
              "F",
              new P(
                b.x + Math.sign(I) * (0.04 + Math.abs(I) * 1.2),
                He + 0.012,
                0,
              ),
              `F = ${x(Math.abs(I) * 1e3, 1)} mN`,
              "ok",
            ),
          t.tag(
            "N",
            new P(
              r0 - 0.05,
              e.bdir > 0 ? He + 0.05 : He - 0.05,
              Je * 0 - (e.mags * $t) / 2 - 0.02,
            ),
            e.bdir > 0 ? translate("N 极在上") : translate("S 极在上"),
            "violet",
          ),
          b.on ||
            t.tag(
              "off",
              new P(0.12, 0.13, -0.27),
              translate("开关断开"),
              "dim",
            ),
          b.on &&
            v(b.x) &&
            Math.abs(I) <= U0 * i0 * T0 &&
            b.v === 0 &&
            t.tag(
              "fr",
              new P(b.x, He + 0.06, 0),
              translate("安培力小于最大静摩擦力"),
              "warn",
            ));
      },
      onParam(y) {
        (y === "mags" || y === "bdir" || y === "idir") && k();
      },
      actions: () => [
        {
          label: b.on ? translate("断开开关") : translate("闭合开关"),
          run() {
            ((b.on = !b.on), k(), t.renderActs());
          },
        },
        {
          label: translate("铜棒复位"),
          run() {
            ((b.x = 0), (b.v = 0));
          },
        },
      ],
      record() {
        (t.records.push({
          I: e.Ia,
          n: e.mags,
          L: M(),
          B: At,
          F: At * e.Ia * M(),
        }),
          t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
      },
      readouts: () => [
        [translate("磁感应强度 B"), `${At} T`],
        [translate("有效长度 L"), `${x(M() * 100, 1)} cm`],
        [translate("电流 I"), `${x(b.on ? e.Ia : 0, 2)} A`],
        [translate("安培力 F = BIL"), `${x(At * e.Ia * M() * 1e3, 1)} mN`],
        [translate("最大静摩擦力"), `${x(U0 * i0 * T0 * 1e3, 1)} mN`],
        [translate("铜棒速度"), `${x(b.v * 100, 1)} cm/s`],
      ],
      hud: () => [
        ["F", x(Math.abs(m(b.x)) * 1e3, 1), "mN"],
        ["I", x(b.on ? e.Ia : 0, 2), "A"],
        ["L", x(M() * 100, 1), "cm"],
      ],
      dock(y) {
        if (y === "ampinfo") {
          const g =
            -e.idir * e.bdir > 0
              ? translate("向右（远离磁铁弯头）")
              : translate("向左（朝向磁铁弯头）");
          return {
            html: `<div class="gview"><div class="rule"><svg viewBox="0 0 150 120"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs><g fill="none" stroke-width="2.4"><path d="M70 64V18" stroke="#b9a2ff" color="#b9a2ff" marker-end="url(#ah)" transform="${e.bdir > 0 ? "rotate(180 70 64) translate(0 -46)" : ""}"/><path d="M70 64L28 92" stroke="#ffd25a" color="#ffd25a" marker-end="url(#ah)" transform="${e.idir > 0 ? "" : "rotate(180 70 64)"}"/><path d="M70 64H128" stroke="#3fd28a" color="#3fd28a" marker-end="url(#ah)" transform="${-e.idir * e.bdir > 0 ? "" : "rotate(180 70 64)"}"/></g><text x="76" y="16" fill="#b9a2ff" font-size="12">B</text><text x="16" y="104" fill="#ffd25a" font-size="12">I</text><text x="132" y="60" fill="#3fd28a" font-size="12">F</text></svg><div class="kv2"><span>${translate("磁场方向")}</span><b>${e.bdir > 0 ? translate("竖直向下") : translate("竖直向上")}</b><span>${translate("电流方向")}</span><b>${e.idir > 0 ? translate("由近到远") : translate("由远到近")}</b><span>${translate("安培力方向")}</span><b class="hi">${g}</b></div></div><p class="tnote">${translate("左手定则：磁感线垂直穿入手心，四指指向电流方向，拇指所指为安培力方向。F、B、I 两两垂直。")}</p></div>`,
          };
        }
        const N = t.records;
        if (!N.length)
          return {
            html: lt(translate("改变电流 I 或磁铁个数后按“记录数据”。")),
          };
        const $ = {
            1: "#ffd25a",
            2: "#3fd28a",
            3: "#ff7ab6",
          },
          j = [1, 2, 3]
            .filter((g) => N.some((S) => S.n === g))
            .map((g) => ({
              pts: N.filter((S) => S.n === g)
                .map((S) => [S.I, S.F * 1e3])
                .sort((S, L) => S[0] - L[0]),
              color: $[g],
              kind: "scatter",
              name: `L = ${x(g * $t * 100, 1)} cm`,
            })),
          w = N.filter((g) => g.n === e.mags),
          I =
            w.length >= 2
              ? Tt(
                  w.map((g) => g.I),
                  w.map((g) => g.F * 1e3),
                )
              : null;
        return {
          chart: {
            series: j,
            x: [0, 5],
            y: [0, null],
            fit: I
              ? {
                  ...I,
                  color: $[e.mags],
                  label: `k = BL = ${x(I.k / 1e3, 4)} T·m`,
                }
              : null,
            fitRange: [0, 5],
            xLabel: "I / A",
            yLabel: "F / mN",
            xName: "I",
          },
          side: `<div class="fitside"><b class="big">${N.length}</b><span>${translate("组数据")}</span>${I ? `<div class="res">B ≈ ${x(I.k / 1e3 / M(), 3)} T</div>` : ""}<p>${translate("L 一定时 F 与 I 成正比，斜率 k = BL；磁铁越多（L 越长），直线越陡。")}</p>${y0(
            ["I / A", "L / cm", "F / mN"],
            N.slice(-4).map((g) => [
              x(g.I, 1),
              x(g.L * 100, 1),
              x(g.F * 1e3, 1),
            ]),
            {
              del: !1,
            },
          )}</div>`,
        };
      },
      csv: () =>
        t.records.length
          ? [
              ["I/A", "magnets", "L/m", "B/T", "F/N"],
              ...t.records.map((y) => [y.I, y.n, y.L, y.B, y.F]),
            ]
          : null,
    }
  );
}
const tt = 0.15,
  On = 130,
  ie = {
    c: new P(0, 0.25, 0),
    r: 0.085,
  },
  Fe = new P(-0, ie.c.y - 0.066, 0),
  Jo = (Math.pow(4 / 5, 1.5) * Mt * On) / tt,
  W0 = 0.03,
  be = -0.2,
  je = 0.24,
  d0 = 0.06,
  p0 = be + je + 0.02,
  D0 = p0 + 0.14,
  N0 = [2e5, 3e5, 4e5, 5e5, 6e5],
  mn = ["#ff5a4a", "#ffb04a", "#ffe45a", "#4aff9a", "#4ab8ff"];
function Ko() {
  const t = fe(),
    e = new Y();
  for (const f of [-tt / 2, tt / 2]) {
    const u = new E(new Xe(tt, 0.011, 20, 128), Yt());
    u.position.set(0, ie.c.y, f);
    const b = new E(
      new Xe(tt, 0.014, 4, 128, Math.PI * 2),
      new Z({
        color: "#1d1f23",
        roughness: 0.5,
      }),
    );
    (b.scale.set(1, 1, 0.9),
      b.position.copy(u.position),
      (b.position.z += f > 0 ? 0.009 : -0.009),
      e.add(u, b));
    const M = new E(new he(0.024, ie.c.y - tt + 0.01, 0.02), t.plastic);
    (M.position.set(0, (ie.c.y - tt + 0.01) / 2 + 0.03, f), e.add(M));
  }
  const o = new E(
    new se(0.42, 0.03, 0.26, 3, 0.006),
    new Z({
      color: "#2a2f38",
      roughness: 0.45,
      metalness: 0.3,
    }),
  );
  ((o.position.y = 0.015), e.add(o));
  for (const [f, u] of [
    [-0.16, "#d63a2a"],
    [-0.12, "#1b1d21"],
    [0.12, "#d63a2a"],
    [0.16, "#1b1d21"],
  ]) {
    const b = new E(
      new Q(0.008, 0.009, 0.012, 20),
      new K({
        color: u,
        roughness: 0.3,
        clearcoat: 1,
      }),
    );
    (b.position.set(f, 0.036, 0.1), e.add(b));
  }
  const s = Xt(["LORENTZ", "e / m  TUBE"], {
    w: 0.1,
    h: 0.024,
  });
  ((s.rotation.x = -Math.PI / 2), s.position.set(0, 0.0305, 0.1), e.add(s));
  const r = new E(
    new nt(ie.r, 64, 48),
    new K({
      color: "#d9e6ff",
      roughness: 0.03,
      transparent: !0,
      opacity: 0.12,
      envMapIntensity: 1.2,
      depthWrite: !1,
      clearcoat: 1,
      side: Ue,
    }),
  );
  (r.position.copy(ie.c), (r.renderOrder = 3));
  const i = new E(
    new Q(0.018, 0.022, ie.c.y - ie.r - 0.03 + 0.01, 32),
    new K({
      color: "#d9e6ff",
      roughness: 0.05,
      transparent: !0,
      opacity: 0.18,
      depthWrite: !1,
    }),
  );
  i.position.y = 0.03 + (ie.c.y - ie.r - 0.03) / 2;
  const a = new E(new Q(0.028, 0.03, 0.03, 32), t.plastic);
  ((a.position.y = 0.045), e.add(r, i, a));
  const c = new Y(),
    l = new E(
      new Q(0.004, 0.004, 0.022, 20),
      new Z({
        color: "#b8bcc2",
        metalness: 1,
        roughness: 0.3,
      }),
    );
  ((l.rotation.z = Math.PI / 2), (l.position.x = -0.011));
  const p = new E(
    new nt(0.0024, 12, 8),
    new re({
      color: new ue("#ff9a4a").multiplyScalar(2.5),
      toneMapped: !1,
    }),
  );
  p.position.x = -0.02;
  const h = new E(
    new Q(0.0016, 0.0016, 0.05, 8),
    new Z({
      color: "#8c9097",
      metalness: 1,
      roughness: 0.4,
    }),
  );
  return (
    h.position.set(-0.012, -0.025, 0),
    c.add(l, p, h),
    c.position.copy(Fe),
    e.add(c),
    (e.gun = c),
    pe(e)
  );
}
function Zo() {
  const t = fe(),
    e = new Y(),
    o = new E(
      new se(0.07, 0.05, 0.06, 2, 0.006),
      new K({
        color: "#2b3a52",
        metalness: 0.4,
        roughness: 0.4,
        clearcoat: 0.5,
      }),
    );
  o.position.set(be - 0.07, 0.025, 0);
  const s = new E(new Q(0.006, 0.008, 0.02, 20), t.chrome);
  ((s.rotation.z = Math.PI / 2), s.position.set(be - 0.03, W0, 0), e.add(o, s));
  const r = Xt([translate("离子源"), "H⁺"], {
    w: 0.06,
    h: 0.016,
  });
  (r.position.set(be - 0.07, 0.03, 0.0305), e.add(r));
  const i = new Z({
    color: "#c7ccd3",
    metalness: 1,
    roughness: 0.25,
  });
  for (const c of [1, -1]) {
    const l = new E(new se(je, 0.05, 0.003, 2, 0.001), i);
    (l.position.set(be + je / 2, 0.025, (c * d0) / 2 + c * 0.0015), e.add(l));
    const p = new E(
      new he(je, 0.004, 0.004),
      new re({
        color: new ue(c > 0 ? "#ff5a4a" : "#4a8bff").multiplyScalar(1.4),
        toneMapped: !1,
      }),
    );
    (p.position.set(be + je / 2, 0.052, (c * d0) / 2 + c * 0.0015), e.add(p));
  }
  for (const c of [1, -1]) {
    const l = new E(new he(0.004, 0.05, 0.08), t.darkSteel);
    (l.position.set(p0, 0.025, c * (0.0025 + 0.04)), e.add(l));
  }
  const a = new E(
    new se(0.01, 0.06, 0.1, 2, 0.002),
    new Z({
      color: "#16301f",
      roughness: 0.4,
      emissive: "#0a2a14",
    }),
  );
  return (a.position.set(D0, 0.03, 0), e.add(a), (e.det = a), pe(e));
}
function es(t) {
  const e = t.params,
    o = t.add(Ko()),
    s = t.add(Zo()),
    r = t.add(
      M0(je + 0.02, 0.16, {
        spacing: 0.035,
      }),
    );
  r.position.set(be + je / 2, 0.001, 0);
  const i = t.add(
      Te({
        width: 0.0016,
        halo: 6,
        haloOpacity: 0.28,
        gain: 2.2,
      }),
    ),
    a = t.add(
      Te({
        width: 0.0018,
        halo: 4,
        haloOpacity: 0.16,
        gain: 1.8,
      }),
    ),
    c = t.add(
      Re("#b9a2ff", {
        r: 0.0018,
        head: 0.014,
      }),
    ),
    l = t.add(
      new Zn(
        new En(),
        new O0({
          color: "#ffd25a",
          dashSize: 0.005,
          gapSize: 0.004,
          transparent: !0,
          opacity: 0.8,
          toneMapped: !1,
        }),
      ),
    ),
    p = new Ut({
      map: Nt(),
      color: "#9fd8ff",
      transparent: !0,
      depthWrite: !1,
      blending: yt,
      toneMapped: !1,
    }),
    h = Array.from(
      {
        length: 8,
      },
      () => {
        const g = new Ct(p);
        return (g.scale.setScalar(0.012), t.add(g));
      },
    ),
    f = () => Jo * e.Ic,
    u = () => K0(ne, Be, e.Ua);
  let b = [];
  function M() {
    const g = $0(e.tilt),
      S = u(),
      L = {
        x: [Fe.x, Fe.y, Fe.z],
        v: [S * Math.cos(g), 0, S * Math.sin(g)],
      },
      U = f();
    if (U < 1e-6) {
      const F = [];
      for (let A = 0; A <= 40; A++) {
        const C = [
          Fe.x + 0.2 * (A / 40) * Math.cos(g),
          Fe.y,
          Fe.z + 0.2 * (A / 40) * Math.sin(g),
        ];
        if (
          Math.hypot(C[0] - ie.c.x, C[1] - ie.c.y, C[2] - ie.c.z) >
          ie.r - 0.003
        )
          break;
        F.push(C);
      }
      return F;
    }
    const d = P0(Be, ne, U),
      T = e.tilt > 0 ? 6 : 1.02,
      z = Math.ceil(T * 160);
    return Io(
      L,
      -ne / Be,
      () => ({
        E: [0, 0, 0],
        B: [0, 0, U],
      }),
      (T * d) / z,
      z,
      {
        stop: (F) =>
          Math.hypot(F.x[0] - ie.c.x, F.x[1] - ie.c.y, F.x[2] - ie.c.z) >
          ie.r - 0.003,
      },
    ).pts;
  }
  let v = [],
    m = 0;
  const k = () => e.Es * 1e3,
    B = () => e.Bs / 1e3,
    y = 6e-7;
  function N(g) {
    const S = g[0] > be && g[0] < be + je,
      L = g[0] > be - 0.01 && g[0] < be + je + 0.01;
    return {
      E: S ? [0, 0, -k()] : [0, 0, 0],
      B: L ? [0, B(), 0] : [0, 0, 0],
    };
  }
  function $() {
    const g = Math.floor(Math.random() * N0.length);
    v.push({
      s: {
        x: [be - 0.02, W0, (Math.random() - 0.5) * 0.002],
        v: [N0[g], 0, 0],
      },
      k: g,
      trail: [[be - 0.02, W0, 0]],
      dead: !1,
      age: 0,
      hit: !1,
    });
  }
  function j(g) {
    const S = ne / Q0,
      L = g * y,
      U = 30;
    for (const d of v) {
      if (d.dead) {
        d.age += g;
        continue;
      }
      for (let T = 0; T < U; T++) {
        const z = N(d.s.x);
        J0(d.s, S, z.E, z.B, L / U);
        const [R, , F] = d.s.x;
        if (R > be && R < be + je && Math.abs(F) > d0 / 2) {
          d.dead = !0;
          break;
        }
        if (R >= p0 && R - d.s.v[0] * (L / U) < p0 && Math.abs(F) > 0.0025) {
          d.dead = !0;
          break;
        }
        if (R >= D0 - 0.005) {
          ((d.dead = !0), (d.hit = !0));
          break;
        }
        if (Math.abs(F) > 0.2) {
          d.dead = !0;
          break;
        }
      }
      (d.trail.push([...d.s.x]), d.trail.length > 90 && d.trail.shift());
    }
    v = v.filter((d) => !d.dead || d.age < 0.6);
  }
  function w() {
    const g = e.lorMode === "tube";
    ((o.visible = g),
      (s.visible = r.visible = !g),
      i.show(g),
      a.show(!g),
      (c.visible = !1),
      (l.visible = g),
      h.forEach((S) => (S.visible = g)),
      p.color.set(g ? "#9fd8ff" : "#ffffff"));
  }
  function I() {
    if ((w(), e.lorMode === "tube")) {
      ((o.gun.rotation.y = -$0(e.tilt)),
        (b = M()),
        i.set([
          {
            pts: b,
            color: "#4fb4ff",
            intensity: 0.75,
          },
        ]));
      const g = It(Be, u(), ne, f() || 1e-9);
      e.tilt === 0 && f() > 0 && 2 * g < 2 * ie.r
        ? (l.geometry.setFromPoints([
            new P(Fe.x, Fe.y, 0.001),
            new P(Fe.x, Fe.y + 2 * g, 0.001),
          ]),
          l.computeLineDistances(),
          (l.visible = !0))
        : (l.visible = !1);
    } else r.setDir(e.Bs > 0 ? 1 : 0);
  }
  return (
    I(),
    {
      update(g, S, L) {
        if ((L && I(), e.lorMode === "tube")) {
          const U = b.length - 1;
          h.forEach((T, z) => {
            if (U < 1) return (T.visible = !1);
            const R = ((S * 0.45 + z / h.length) % 1) * U,
              F = b[Math.floor(R)],
              A = b[Math.min(U, Math.floor(R) + 1)],
              C = R % 1;
            T.position.set(
              F[0] + (A[0] - F[0]) * C,
              F[1] + (A[1] - F[1]) * C,
              F[2] + (A[2] - F[2]) * C,
            );
          });
          const d = It(Be, u(), ne, f() || 1e-12);
          (t.tag(
            "r",
            new P(Fe.x + 0.012, Fe.y + Math.min(d, ie.r), 0.02),
            f() > 0 ? `r = ${x(d * 100, 2)} cm` : "B = 0",
            "gold",
          ),
            t.tag(
              "B",
              new P(ie.c.x + 0.1, ie.c.y + 0.07, 0),
              `B ${e.Ic >= 0 ? "⊙" : "⊗"} ${x(Math.abs(f()) * 1e3, 2)} mT`,
              "violet",
            ),
            t.tag(
              "coil",
              new P(-tt - 0.01, ie.c.y + 0.1, tt / 2),
              translate("亥姆霍兹线圈"),
              "dim",
            ));
        } else {
          for (m += g; m > 0.09;) ((m -= 0.09), $());
          (j(g),
            a.set(
              v.map((d) => ({
                pts: d.trail,
                color: mn[d.k],
                fade: 0.05,
                intensity: d.dead ? Math.max(0, 1 - d.age / 0.6) : 1,
              })),
            ));
          const U = B() > 0 ? s0(k(), B()) : 1 / 0;
          (t.tag(
            "v0",
            new P(be + je / 2, 0.08, -0.03),
            `v = E/B = ${isFinite(U) ? ce(U, 2) : "∞"} m/s`,
            "gold",
          ),
            t.tag(
              "E",
              new P(be + 0.02, 0.07, d0 / 2),
              `E ${x(e.Es, 1)} kV/m`,
              "pos",
            ),
            t.tag(
              "Bt",
              new P(be + je - 0.02, 0.012, 0.075),
              `B ${x(e.Bs, 0)} mT ⊙`,
              "violet",
            ),
            t.tag("det", new P(D0, 0.075, 0), translate("探测器"), "ok"));
        }
      },
      onParam(g, S) {
        g === "lorMode" &&
          ((v = []),
          t.stage.fly(
            ...(S === "tube"
              ? t.lesson.cam
              : [
                  [0.02, 0.62, 0.42],
                  [0.02, 0, 0],
                ]),
            1,
          ));
      },
      record() {
        if (e.lorMode !== "tube")
          return (t.flash(translate("请在“电子束圆周运动”中记录")), !1);
        const g = It(Be, u(), ne, f());
        if (!(f() > 0) || 2 * g > 2 * ie.r || e.tilt)
          return (
            t.flash(translate("径迹不是完整的圆，调整 U 或 I（倾角为 0）")),
            !1
          );
        (t.records.push({
          U: e.Ua,
          I: e.Ic,
          B: f(),
          v: u(),
          r: g,
        }),
          t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
      },
      readouts() {
        if (e.lorMode === "tube") {
          const S = f(),
            L = u();
          return [
            [translate("电子速度 v"), `${ce(L, 3)} m/s`],
            [translate("磁感应强度 B"), `${x(S * 1e3, 3)} mT`],
            [translate("洛伦兹力 F = evB"), S ? `${ce(ne * L * S, 2)} N` : "0"],
            [
              translate("半径 r = mv/eB"),
              S ? `${x(It(Be, L, ne, S) * 100, 2)} cm` : "∞",
            ],
            [
              translate("周期 T = 2πm/eB"),
              S ? `${x(P0(Be, ne, S) * 1e9, 2)} ns` : "—",
            ],
            [
              translate("螺距"),
              e.tilt && S
                ? `${x(L * Math.sin($0(e.tilt)) * P0(Be, ne, S) * 100, 2)} cm`
                : "—",
            ],
          ];
        }
        const g = s0(k(), B());
        return [
          [translate("电场 E"), `${x(e.Es, 1)} kV/m`],
          [translate("磁场 B"), `${x(e.Bs, 0)} mT`],
          [translate("被选速度 v = E/B"), B() ? `${ce(g, 3)} m/s` : "∞"],
          [translate("慢放倍率"), translate("1 s ↔ {0} μs", [x(y * 1e6, 1)])],
        ];
      },
      hud() {
        if (e.lorMode === "tube") {
          const g = f();
          return [
            ["r", g ? x(It(Be, u(), ne, g) * 100, 2) : "∞", "cm"],
            ["B", x(g * 1e3, 2), "mT"],
            ["v", x(u() / 1e6, 2), "Mm/s"],
          ];
        }
        return [["v = E/B", B() ? x(s0(k(), B()) / 1e5, 2) : "∞", "×10⁵ m/s"]];
      },
      dock(g) {
        if (g === "lorinfo") {
          if (e.lorMode === "tube") {
            const F = f();
            return {
              html: qt(
                [
                  [translate("线圈匝数 N"), String(On)],
                  [translate("线圈半径 R"), `${tt * 100} cm`],
                  ["B = (4/5)^{3/2} μ₀NI / R", `${x(F * 1e3, 3)} mT`, !0],
                  [translate("电子比荷 e/m"), `${ce(ne / Be, 3)} C/kg`],
                  [
                    translate("由 r 求比荷 e/m = 2U/(B²r²)"),
                    F
                      ? `${ce((2 * e.Ua) / (F * F * It(Be, u(), ne, F) ** 2), 3)} C/kg`
                      : "—",
                    !0,
                  ],
                ],
                translate(
                  "电子枪倾斜时，平行于 B 的速度分量不受力，电子一边做圆周运动一边沿磁场方向匀速前进，径迹为螺旋线。",
                ),
              ),
            };
          }
          const z = s0(k(), B()),
            R = N0.map((F, A) => [
              `<i class="sw" style="background:${mn[A]}"></i>${ce(F, 0)} m/s`,
              Math.abs(F - z) / z < 0.03
                ? translate("通过狭缝")
                : F > z
                  ? translate("向洛伦兹力一侧偏")
                  : translate("向电场力一侧偏"),
              Math.abs(F - z) / z < 0.03,
            ]);
          return {
            html: qt(
              R,
              translate(
                "质子带正电：电场力指向负极板，洛伦兹力 qvB 指向正极板。v > E/B 时洛伦兹力大，v < E/B 时电场力大。",
              ),
            ),
          };
        }
        const S = t.records;
        if (!S.length)
          return {
            html: lt(translate("调节 U、I 得到完整的圆形径迹后按“记录数据”。")),
          };
        const L = S[S.length - 1].B,
          U = S.filter((z) => Math.abs(z.B - L) < 1e-9).map((z) => [
            z.v / 1e6,
            z.r * 100,
          ]),
          d =
            U.length >= 2
              ? Tt(
                  U.map((z) => z[0]),
                  U.map((z) => z[1]),
                )
              : null,
          T = (Be / (ne * L)) * 1e6 * 100;
        return {
          chart: {
            series: [
              {
                pts: [
                  [0, 0],
                  [14, 14 * T],
                ],
                color: "#5d5b57",
                dashed: !0,
                name: "r = mv/eB",
                noHover: !0,
              },
              {
                pts: U,
                color: "#4fb4ff",
                kind: "scatter",
                name: `B = ${x(L * 1e3, 2)} mT`,
              },
            ],
            x: [0, 14],
            y: [0, null],
            fit: d
              ? {
                  ...d,
                  color: "#e8e6e0",
                  label: `k = ${x(d.k, 3)} cm/(10⁶ m/s)`,
                }
              : null,
            fitRange: [0, 14],
            xLabel: "v / (10⁶ m/s)",
            yLabel: "r / cm",
            xName: "v",
          },
          side: `<div class="fitside"><b class="big">${U.length}</b><span>${translate("组数据（同一 B）")}</span>${d ? `<div class="res">e/m ≈ ${ce(1e4 / (d.k * L), 3)} C/kg</div>` : ""}<p>${translate("B 一定时 r 与 v 成正比，斜率 m/(eB)。")}</p></div>`,
        };
      },
      csv: () =>
        t.records.length
          ? [
              ["U/V", "I/A", "B/T", "v/(m/s)", "r/m"],
              ...t.records.map((g) => [g.U, g.I, g.B, g.v, g.r]),
            ]
          : null,
    }
  );
}
const ts = 0.03,
  ve = [-0.3, 0.2],
  we = {
    x0: -0.31,
    x1: 0.46,
    y: 0.2,
  },
  ns = {
    H: [
      {
        name: "¹H",
        m: 1.00783,
        ab: 0.6,
        col: "#ff6a5a",
      },
      {
        name: "²H",
        m: 2.0141,
        ab: 0.25,
        col: "#ffd25a",
      },
      {
        name: "³H",
        m: 3.01605,
        ab: 0.15,
        col: "#4ab8ff",
      },
    ],
    Ne: [
      {
        name: "²⁰Ne",
        m: 19.9924,
        ab: 0.905,
        col: "#ff6a5a",
      },
      {
        name: "²¹Ne",
        m: 20.9938,
        ab: 0.0027,
        col: "#3fd28a",
      },
      {
        name: "²²Ne",
        m: 21.9914,
        ab: 0.0925,
        col: "#4ab8ff",
      },
    ],
    Cl: [
      {
        name: "³⁵Cl",
        m: 34.9689,
        ab: 0.758,
        col: "#3fd28a",
      },
      {
        name: "³⁷Cl",
        m: 36.9659,
        ab: 0.242,
        col: "#ffd25a",
      },
    ],
  },
  Ce = 0.25,
  os = 0.012,
  bn = {
    p: {
      m: Q0,
      q: ne,
      name: translate("质子"),
    },
    d: {
      m: 2.01355 * Ht,
      q: ne,
      name: translate("氘核"),
    },
    a: {
      m: 4.001506 * Ht,
      q: 2 * ne,
      name: translate("α 粒子"),
    },
  };
function ss() {
  const t = document.createElement("canvas");
  ((t.width = 2048), (t.height = 96));
  const e = t.getContext("2d"),
    o = new kt(t);
  o.colorSpace = Ot;
  const s = we.x1 - we.x0,
    r = () => {
      ((e.fillStyle = "#1a1712"),
        e.fillRect(0, 0, t.width, t.height),
        (e.fillStyle = "rgba(240,230,200,.55)"),
        (e.font = "600 20px 'JetBrains Mono', Menlo, monospace"));
      for (let a = 0; a <= Math.round(s * 100); a++) {
        const c = (a / 100 / s) * t.width,
          l = (a + Math.round((we.x0 - ve[0]) * 100)) % 10 === 0;
        e.fillRect(c, t.height - (l ? 24 : 12), l ? 2 : 1, l ? 24 : 12);
      }
      o.needsUpdate = !0;
    },
    i = (a, c) => {
      const l = ((a - we.x0) / s) * t.width;
      e.globalCompositeOperation = "lighter";
      const p = e.createLinearGradient(l - 6, 0, l + 6, 0);
      (p.addColorStop(0, "rgba(0,0,0,0)"),
        p.addColorStop(0.5, c.replace("rgb", "rgba").replace(")", ",.22)")),
        p.addColorStop(1, "rgba(0,0,0,0)"),
        (e.fillStyle = p),
        e.fillRect(l - 6, 6, 12, t.height - 36),
        (e.globalCompositeOperation = "source-over"),
        (o.needsUpdate = !0));
    };
  return (
    r(),
    {
      canvas: t,
      tex: o,
      clear: r,
      hit: i,
    }
  );
}
function as() {
  const t = fe(),
    e = new Y(),
    o = new E(
      new se(0.07, 0.05, 0.06, 2, 0.006),
      new K({
        color: "#2b3a52",
        metalness: 0.4,
        roughness: 0.4,
        clearcoat: 0.5,
      }),
    );
  (o.position.set(ve[0], 0.025, ve[1] + 0.19), e.add(o));
  for (const l of [0.13, 0.06])
    for (const p of [-1, 1]) {
      const h = new E(
        new he(0.03, 0.05, 0.003),
        new Z({
          color: "#c7ccd3",
          metalness: 1,
          roughness: 0.25,
        }),
      );
      (h.position.set(ve[0] + p * 0.018, 0.025, ve[1] + l), e.add(h));
    }
  const s = new E(new he(0.05, 0.05, 0.004), t.darkSteel);
  (s.position.set(ve[0] - 0.034, 0.025, ve[1] + 0.004), e.add(s));
  const r = ss(),
    i = new E(
      new $e(we.x1 - we.x0, 0.035),
      new re({
        map: r.tex,
        toneMapped: !1,
        color: new ue(1.6, 1.6, 1.6),
      }),
    );
  ((i.rotation.x = -Math.PI / 2),
    i.position.set((we.x0 + we.x1) / 2, 0.0032, we.y + 0.0175));
  const a = new E(
    new se(we.x1 - we.x0 + 0.02, 0.004, 0.045, 2, 0.001),
    t.darkSteel,
  );
  (a.position.set((we.x0 + we.x1) / 2 + 0, 0, we.y + 0.0175), e.add(a, i));
  const c = Xt([translate("照相底片")], {
    w: 0.07,
    h: 0.014,
  });
  return (
    (c.rotation.x = -Math.PI / 2),
    c.position.set(we.x1 - 0.05, 0.004, we.y + 0.05),
    e.add(c),
    (e.pc = r),
    pe(e)
  );
}
function rs() {
  fe();
  const t = new Y(),
    e = new E(
      new Q(Ce + 0.03, Ce + 0.03, 0.012, 96),
      new Z({
        color: "#3a3f47",
        metalness: 0.9,
        roughness: 0.35,
      }),
    );
  e.position.y = 0.006;
  const o = new E(new Xe(Ce + 0.045, 0.012, 16, 128), Gt());
  ((o.rotation.x = Math.PI / 2), (o.position.y = 0.012), t.add(e, o));
  const s = [];
  for (const a of [1, -1]) {
    const c = new Y(),
      l = new u0();
    (l.absarc(0, 0, Ce, -Math.PI / 2, Math.PI / 2, !1), l.lineTo(0, -Ce));
    const p = new Sn(l, 64);
    p.rotateX(-Math.PI / 2);
    const h = new E(
      p,
      new Z({
        color: "#7a4a2a",
        metalness: 0.9,
        roughness: 0.35,
      }),
    );
    h.position.y = 0.014;
    const f = new E(
      p,
      new K({
        color: "#d08050",
        metalness: 0.6,
        roughness: 0.25,
        transparent: !0,
        opacity: 0.12,
        depthWrite: !1,
      }),
    );
    ((f.position.y = 0.05), (f.renderOrder = 3));
    const u = new E(
      new Q(Ce, Ce, 0.036, 64, 1, !0, 0, Math.PI),
      new Z({
        color: "#b8754a",
        metalness: 1,
        roughness: 0.3,
        side: Ue,
      }),
    );
    u.position.y = 0.032;
    const b = new re({
        color: "#ffffff",
        toneMapped: !1,
        transparent: !0,
        opacity: 0.9,
      }),
      M = new E(new he(0.003, 0.036, 2 * Ce), b);
    (M.position.set(0.0015, 0.032, 0),
      c.add(h, f, u, M),
      (c.edge = b),
      (c.position.x = (a * os) / 2),
      (c.rotation.y = a > 0 ? 0 : Math.PI),
      t.add(c),
      s.push(c));
  }
  const r = new E(
    new se(0.12, 0.07, 0.09, 2, 0.006),
    new K({
      color: "#d9d6cf",
      roughness: 0.45,
      clearcoat: 0.3,
    }),
  );
  r.position.set(0, 0.035, Ce + 0.13);
  const i = Xt([translate("高频电源"), "RF"], {
    w: 0.08,
    h: 0.02,
  });
  return (
    i.position.set(0, 0.04, Ce + 0.13 + 0.0455),
    t.add(r, i),
    (t.dees = s),
    pe(t)
  );
}
function is(t) {
  const e = t.params,
    o = t.add(as()),
    s = t.add(
      M0(0.8, 0.44, {
        spacing: 0.05,
      }),
    );
  s.position.set(0.07, 5e-4, -0.02);
  const r = t.add(rs()),
    i = t.add(
      Te({
        width: 0.0018,
        halo: 4,
        haloOpacity: 0.16,
        gain: 2.2,
      }),
    ),
    a = t.add(
      Te({
        width: 0.0014,
        halo: 4,
        haloOpacity: 0.16,
        gain: 2.2,
      }),
    ),
    c = t.add(G0("#ffffff", 0.004, 0.04));
  let l = [],
    p = 0;
  const h = {},
    f = () => ns[e.ions],
    u = (w) => Po(w.m * Ht, ne, e.Um, e.Bm);
  function b() {
    const w = f();
    let I = Math.random(),
      g = 0;
    const S = w.reduce((L, U) => L + U.ab, 0);
    for (I *= S; g < w.length - 1 && I > w[g].ab;) I -= w[g++].ab;
    (Math.random() < 0.08 && (g = Math.floor(Math.random() * w.length)),
      l.push({
        k: g,
        s: 0,
        done: !1,
        age: 0,
      }));
  }
  function M(w, I) {
    if (I < 0.19) return [ve[0], ve[1] + 0.19 - I];
    const S = u(w),
      L = (I - 0.19) / S;
    return L >= Math.PI
      ? null
      : [ve[0] + S - S * Math.cos(L), ve[1] - S * Math.sin(L)];
  }
  let v = null,
    m = 0;
  function k() {
    const w = bn[e.part];
    ((v = {
      info: Eo({
        m: w.m,
        q: w.q,
        B: e.Bc,
        R: Ce,
        U: e.Uc * 1e3,
      }),
      path: Lo({
        m: w.m,
        q: w.q,
        B: e.Bc,
        R: Ce,
        U: e.Uc * 1e3,
        segs: 48,
      }),
    }),
      (m = 0));
  }
  const B = (w) => {
    const I = ve[0] + 2 * u(w),
      g = new ue(w.col);
    (o.pc.hit(
      I,
      `rgb(${Math.round(g.r * 255)},${Math.round(g.g * 255)},${Math.round(g.b * 255)})`,
    ),
      (h[w.name] = (h[w.name] || 0) + 1),
      (y = !0));
  };
  let y = !1,
    N = 0;
  function $() {
    const w = e.msMode === "ms";
    ((o.visible = s.visible = w),
      (r.visible = !w),
      i.show(w),
      a.show(!w),
      (c.visible = !w));
  }
  function j() {
    ($(), e.msMode === "cyc" && !v && k());
  }
  return (
    j(),
    {
      update(w, I, g) {
        if ((g && j(), e.msMode === "ms")) {
          for (p += w; p > 0.07;) ((p -= 0.07), b());
          const S = f(),
            L = [];
          for (const U of l) {
            const d = S[U.k];
            if (!d) {
              U.done = !0;
              continue;
            }
            U.done
              ? (U.age += w)
              : ((U.s += w * 0.55), M(d, U.s) || ((U.done = !0), B(d)));
            const T = [],
              z = U.done ? 0.19 + Math.PI * u(d) : U.s,
              R = Math.max(0, z - 0.16);
            for (let F = 0; F <= 16; F++) {
              const A = M(d, Math.min(z - 1e-6, R + ((z - R) * F) / 16));
              A && T.push([A[0], ts, A[1]]);
            }
            T.length > 1 &&
              L.push({
                pts: T,
                color: d.col,
                fade: 0,
                intensity: U.done ? Math.max(0, 1 - U.age / 0.25) : 1,
              });
          }
          ((l = l.filter((U) => !U.done || U.age < 0.25)),
            (N += w),
            y && N > 0.5 && ((N = 0), (y = !1), t.refreshDock()),
            i.set(L),
            S.forEach((U, d) => {
              const T = ve[0] + 2 * u(U);
              T < we.x1 &&
                t.tag(
                  `iso${d}`,
                  new P(T, 0.01, we.y + 0.05 + d * 0.03),
                  `${U.name}  r = ${x(u(U) * 100, 1)} cm`,
                  d % 2 ? "blue" : "gold",
                );
            }),
            t.tag(
              "S",
              new P(ve[0] - 0.02, 0.06, ve[1]),
              translate("狭缝 S"),
              "dim",
            ),
            t.tag(
              "U",
              new P(ve[0] + 0.04, 0.06, ve[1] + 0.095),
              `U = ${x(e.Um, 0)} V`,
              "pos",
            ),
            t.tag(
              "B",
              new P(0.4, 0.02, -0.2),
              `B ⊙ ${x(e.Bm * 1e3, 0)} mT`,
              "violet",
            ));
        } else {
          const L = v.path.pts.length - 1;
          m = Math.min(L, m + (w / 0.14) * 48);
          const U = Math.floor(m),
            d = v.path.pts.slice(0, U + 1).map(([F, A]) => [F, 0.032, A]),
            T = U >= L;
          if (T && d.length > 2) {
            const F = d[d.length - 2],
              A = d[d.length - 1],
              C = A[0] - F[0],
              H = A[2] - F[2],
              _ = Math.hypot(C, H);
            d.push([A[0] + (C / _) * 0.25, 0.032, A[2] + (H / _) * 0.25]);
          }
          a.set([
            {
              pts: d,
              color: "#7fd0ff",
              fade: 0.25,
            },
          ]);
          const z = d[d.length - 1];
          z && c.position.set(...z);
          const R = Math.floor(m / 48);
          (r.dees.forEach((F, A) =>
            F.edge.color
              .set((R + A) % 2 ? "#ff5a4a" : "#4a8bff")
              .multiplyScalar(T ? 0.4 : 1.6),
          ),
            t.tag(
              "ek",
              new P(0, 0.08, -Ce - 0.04),
              T
                ? translate("引出：Ek = {0} MeV", [x(v.info.Ek / ne / 1e6, 2)])
                : translate("第 {0} 次加速", [
                    Math.min(v.path.energies.length, R + 1),
                  ]),
              T ? "ok" : "gold",
            ),
            t.tag(
              "rf",
              new P(0, 0.1, Ce + 0.13),
              `f = ${x(v.info.f / 1e6, 2)} MHz`,
              "dim",
            ));
        }
      },
      onParam(w, I) {
        if (
          (w === "msMode" &&
            (t.stage.fly(
              ...(I === "ms"
                ? t.lesson.cam
                : [
                    [0.02, 0.78, 0.62],
                    [0, 0, 0.05],
                  ]),
              1,
            ),
            I === "cyc" && k()),
          w === "ions" || w === "Um" || w === "Bm")
        ) {
          (o.pc.clear(), (l = []));
          for (const g in h) delete h[g];
        }
        (w === "part" || w === "Bc" || w === "Uc") && k();
      },
      actions: () =>
        e.msMode === "ms"
          ? [
              {
                label: translate("冲洗底片"),
                run: () => {
                  o.pc.clear();
                  for (const w in h) delete h[w];
                },
              },
            ]
          : [
              {
                label: translate("重新加速"),
                run: () => k(),
              },
            ],
      readouts() {
        if (e.msMode === "ms") {
          const I = f(),
            g = K0(ne, I[0].m * Ht, e.Um);
          return [
            [translate("加速电压 U"), `${x(e.Um, 0)} V`],
            [translate("磁感应强度 B"), `${x(e.Bm * 1e3, 0)} mT`],
            [translate("{0} 进入磁场的速度", [I[0].name]), `${ce(g, 3)} m/s`],
            ...I.map((S) => [`${S.name} r`, `${x(u(S) * 100, 2)} cm`]),
          ];
        }
        const w = v.info;
        return [
          [translate("回旋频率 f = qB/2πm"), `${x(w.f / 1e6, 3)} MHz`],
          [translate("周期 T"), `${x(w.T * 1e9, 1)} ns`],
          [translate("最大速度"), `${ce(w.vmax, 3)} m/s`],
          [translate("最终动能 Ek"), `${x(w.Ek / ne / 1e6, 3)} MeV`],
          [translate("加速次数"), String(v.path.energies.length)],
          [
            translate("在 D 形盒中运动时间"),
            `${x(((v.path.energies.length * w.T) / 2) * 1e6, 3)} μs`,
          ],
        ];
      },
      hud() {
        if (e.msMode === "ms") {
          const w = f();
          return [
            [`r(${w[0].name})`, x(u(w[0]) * 100, 1), "cm"],
            [
              `r(${w[w.length - 1].name})`,
              x(u(w[w.length - 1]) * 100, 1),
              "cm",
            ],
          ];
        }
        return [
          ["Ek", x(v.info.Ek / ne / 1e6, 2), "MeV"],
          ["f", x(v.info.f / 1e6, 2), "MHz"],
        ];
      },
      dock(w) {
        if (w === "msinfo") {
          const S = f(),
            L = u(S[0]),
            U = S.map((d) => [
              `<i class="sw" style="background:${d.col}"></i>${d.name}`,
              x(d.m, 3),
              `${x(d.ab * 100, 2)}%`,
              `<b>${x(u(d) * 100, 2)}</b>`,
              x(2 * u(d) * 100, 2),
              x(u(d) / L, 4),
              x(Math.sqrt(d.m / S[0].m), 4),
              String(h[d.name] || 0),
            ]);
          return {
            html: `<div class="gview">${y0(
              [
                translate("同位素"),
                "m / u",
                translate("丰度"),
                "r / cm",
                translate("到 S 的距离 / cm"),
                "r / r₁",
                "√(m / m₁)",
                translate("计数"),
              ],
              U,
              {
                del: !1,
              },
            )}<p class="tnote">${translate("谱线到狭缝 S 的距离为 2r。半径之比等于质量之比的平方根；谱线的亮度反映同位素的丰度。")}</p></div>`,
          };
        }
        const I = v.path.energies.map((S, L) => [L + 1, S / ne / 1e6]),
          g = Math.min(I.length, Math.floor(m / 48) + 1);
        return {
          chart: {
            series: [
              {
                pts: I,
                color: "#5d5b57",
                dashed: !0,
                name: translate("全过程"),
                noHover: !0,
              },
              {
                pts: I.slice(0, g),
                color: "#7fd0ff",
                kind: "dots",
                name: "Ek",
              },
            ],
            x: [0, Math.max(4, I.length + 1)],
            y: [0, null],
            xLabel: translate("加速次数 n"),
            yLabel: "Ek / MeV",
            xName: "n",
          },
          side: `<div class="fitside"><b class="big">${x(v.info.Ek / ne / 1e6, 2)}</b><span>${translate("最终动能 / MeV")}</span><div class="res">${translate("每次获得")} qU = ${x(((bn[e.part].q / ne) * e.Uc) / 1e3, 3)} MeV</div><p>${translate("加速次数 n = Ek / (qU)。U 越大，加速次数越少，但最终动能 q²B²R²/(2m) 不变。")}</p></div>`,
        };
      },
      csv() {
        return e.msMode === "ms"
          ? [
              ["isotope", "m/u", "abundance", "r/m"],
              ...f().map((w) => [w.name, w.m, w.ab, u(w)]),
            ]
          : [
              ["n", "Ek/MeV"],
              ...v.path.energies.map((w, I) => [I + 1, w / ne / 1e6]),
            ];
      },
      dispose() {},
    }
  );
}
const wn = (t, e, o = 0) => t * e * Math.cos(o),
  cs = (t, e, o) => (Mt * t * e * e) / (2 * (e * e + o * o) ** 1.5);
function ls({
  m: t,
  l: e,
  zm: o,
  a: s,
  N: r,
  z0: i = 0,
  len: a = 0,
  k: c = 9,
  turnsSample: l = 12,
}) {
  let p = 0;
  const h = Math.max(1, Math.min(r, l));
  for (let f = 0; f < h; f++) {
    const u = h === 1 ? i : i - a / 2 + (a * f) / (h - 1);
    for (let b = 0; b < c; b++) {
      const M = o - e / 2 + (e * (b + 0.5)) / c;
      p += cs(t / c, s, M - u);
    }
  }
  return (p * r) / h;
}
const z0 = (t, e, o, s) => (t * s) / (e * e * o * o);
function ds(t, { B: e, L: o, R: s, m: r, F: i = 0, friction: a = 0 }, c) {
  const l = (e * e * o * o) / (s * r),
    p =
      Math.abs(t.v) > 1e-6
        ? Math.sign(t.v) * a
        : Math.sign(i) * Math.min(Math.abs(i), a),
    h = (i - p) / r;
  let f;
  if (l > 1e-12) {
    const M = h / l;
    f = M + (t.v - M) * Math.exp(-l * c);
  } else f = t.v + h * c;
  (a > 0 &&
    Math.abs(i) <= a &&
    Math.sign(f) !== Math.sign(t.v) &&
    t.v !== 0 &&
    (f = 0),
    (t.x += ((t.v + f) / 2) * c),
    (t.v = f));
  const u = e * o * f,
    b = u / s;
  return {
    emf: u,
    I: b,
    Fa: -e * b * o,
    P: u * b,
  };
}
const ps = (t, e, o, s) => t * e * o * s,
  jt = (t) => t / Math.SQRT2,
  at = 0.07,
  ze = 0.06,
  Ae = 0.036,
  ht = 0.12,
  fs = 1.6,
  gn = 0.12,
  Mn = 10,
  yn = 0.003,
  de = 0.2,
  qe = -0.3,
  rt = 0.32,
  Pt = 0.02,
  hs = 0.05;
function vn(t, e, o) {
  const s = new Ut({
    map: Nt(),
    color: o,
    transparent: !0,
    depthWrite: !1,
    blending: yt,
    toneMapped: !1,
  });
  return Array.from(
    {
      length: e,
    },
    () => {
      const r = new Ct(s);
      return (r.scale.setScalar(0.016), t.add(r));
    },
  );
}
function xn(t) {
  const e = [0];
  for (let s = 1; s < t.length; s++)
    e.push(e[s - 1] + t[s].distanceTo(t[s - 1]));
  const o = e[e.length - 1];
  return (s) => {
    const r = (((s % 1) + 1) % 1) * o;
    let i = 0,
      a = e.length - 1;
    for (; a - i > 1;) {
      const l = (i + a) >> 1;
      e[l] <= r ? (i = l) : (a = l);
    }
    const c = (r - e[i]) / Math.max(1e-9, e[a] - e[i]);
    return t[i].clone().lerp(t[a], c);
  };
}
function us(t) {
  const e = t.params,
    o = fe(),
    s = t.add(new Y()),
    r = 16,
    i = [];
  for (let C = 0; C <= r * 32; C++) {
    const H = (C / 32) * Math.PI * 2;
    i.push(
      new P(
        ze - ht / 2 + (ht * C) / (r * 32),
        at + Math.sin(H) * Ae,
        Math.cos(H) * Ae,
      ),
    );
  }
  const a = new E(new w0(new b0(i), r * 48, 0.0026, 8, !1), Yt());
  a.castShadow = !0;
  const c = new E(
    new Q(Ae - 0.003, Ae - 0.003, ht + 0.012, 48, 1, !0),
    new K({
      color: "#8aa0c0",
      transparent: !0,
      opacity: 0.12,
      roughness: 0.2,
      side: Ue,
      depthWrite: !1,
    }),
  );
  ((c.rotation.z = Math.PI / 2), c.position.set(ze, at, 0));
  const l = new K({
    color: "#1d1f23",
    roughness: 0.4,
    clearcoat: 0.5,
  });
  for (const C of [-1, 1]) {
    const H = new E(new m0(Ae - 0.003, Ae + 0.012, 48), l);
    ((H.material.side = Ue),
      (H.rotation.y = Math.PI / 2),
      H.position.set(ze + (C * (ht + 0.012)) / 2, at, 0),
      s.add(H));
  }
  const p = new E(
    new se(ht + 0.02, at - Ae - 0.012, 0.05, 2, 0.004),
    o.plastic,
  );
  (p.position.set(ze, (at - Ae - 0.012) / 2, 0), s.add(a, c, p));
  const h = Dn(gn, 0.024, 0.016);
  s.add(h);
  const f = zn({
    kind: "zero",
    label: "G",
    size: 0.13,
  });
  (f.position.set(ze + 0.02, 0, -0.2), s.add(f), pe(s));
  const u = Qe(null, {
      color: "#c43a2e",
    }),
    b = Qe(null, {
      color: "#1d1f23",
    });
  s.add(u, b);
  const M = vn(t, 14, "#ffd25a"),
    v = xn(i),
    m = {
      xm: -0.22,
      vm: 0,
      auto: 0,
      link: 0,
      emf: 0,
      t: 0,
    };
  t.draggable(h, {
    pos: () => [m.xm, 0],
    move(C) {
      ((m.auto = 0), (m.dragX = ee(C[0], -0.38, 0.36)));
    },
    end() {
      m.dragX = null;
    },
  });
  const k = (C) =>
      ls({
        m: fs * e.pole,
        l: gn,
        zm: C - ze,
        a: Ae,
        N: e.turns,
        z0: 0,
        len: ht,
      }),
    B = t.add(new Y()),
    y = M0(rt - qe, de + 0.08, {
      spacing: 0.045,
    });
  (y.position.set((qe + rt) / 2, 6e-4, 0), B.add(y));
  const N = new Z({
    color: "#b9bec5",
    metalness: 1,
    roughness: 0.3,
  });
  for (const C of [-de / 2, de / 2]) {
    const H = new E(new Q(0.003, 0.003, rt - qe + 0.06, 16), N);
    ((H.rotation.z = Math.PI / 2),
      H.position.set((qe + rt) / 2 - 0.03, Pt, C),
      B.add(H));
    for (const _ of [qe - 0.05, rt + 0.02]) {
      const te = new E(
        new se(0.024, Pt, 0.024, 2, 0.003),
        new K({
          color: "#e9e2d0",
          roughness: 0.4,
          clearcoat: 0.6,
        }),
      );
      (te.position.set(_, Pt / 2, C), B.add(te));
    }
  }
  const $ = new Y(),
    j = new E(
      new eo(0.008, 0.04, 8, 20),
      new K({
        color: "#d9c79a",
        roughness: 0.5,
        clearcoat: 0.4,
      }),
    );
  ((j.rotation.x = Math.PI / 2),
    $.add(j),
    ["#6b3a1a", "#1b1d21", "#c0261c", "#d6a648"].forEach((C, H) => {
      const _ = new E(
        new Q(0.0084, 0.0084, 0.004, 20),
        new Z({
          color: C,
          roughness: 0.5,
        }),
      );
      ((_.rotation.x = Math.PI / 2),
        (_.position.z = -0.014 + H * 0.009),
        $.add(_));
    }));
  const w = new Z({
    color: "#c9ced6",
    metalness: 1,
    roughness: 0.3,
  });
  for (const C of [-1, 1]) {
    const H = new E(new Q(0.0012, 0.0012, de / 2 - 0.03, 8), w);
    ((H.rotation.x = Math.PI / 2),
      (H.position.z = C * (0.028 + (de / 2 - 0.03) / 2 - 0.004)),
      $.add(H));
  }
  ($.position.set(qe - 0.05, Pt, 0), B.add($));
  const I = new E(new Q(0.005, 0.005, de + 0.04, 24), Gt());
  ((I.rotation.x = Math.PI / 2), (I.castShadow = !0), B.add(I));
  const g = Re("#3fd28a", {
      r: 0.002,
      head: 0.014,
    }),
    S = Re("#ff7a6a", {
      r: 0.002,
      head: 0.014,
    }),
    L = Re("#cdbcff", {
      r: 0.0016,
      head: 0.012,
    });
  (B.add(g, S, L), pe(B));
  const U = vn(t, 16, "#ffd25a"),
    d = {
      x: qe + 0.04,
      v: 0,
      run: !1,
      dragX: null,
      lastDrag: null,
    };
  t.draggable(I, {
    pos: () => [d.x, 0],
    move(C) {
      ((d.run = !1), (d.dragX = ee(C[0], qe + 0.01, rt)));
    },
    end() {
      ((d.dragX = null), (d.lastDrag = null));
    },
  });
  const T = An(6);
  let z = {
    emf: 0,
    I: 0,
  };
  function R() {
    const C = e.indMode === "magnet";
    ((s.visible = C),
      (B.visible = !C),
      M.forEach((H) => (H.visible = C)),
      U.forEach((H) => (H.visible = !C)));
  }
  function F() {
    f.updateMatrixWorld(!0);
    const C = f.localToWorld(f.terminals[0].clone()),
      H = f.localToWorld(f.terminals[1].clone()),
      _ = i[0],
      te = i[i.length - 1];
    (u.set([
      _,
      _.clone().add(new P(-0.01, -0.03, 0.03)),
      new P(ze - 0.1, 0.005, -0.06),
      new P(C.x - 0.02, 0.01, C.z + 0.06),
      C,
    ]),
      b.set([
        te,
        te.clone().add(new P(0.01, -0.03, 0.03)),
        new P(ze + 0.12, 0.005, -0.06),
        new P(H.x + 0.02, 0.01, H.z + 0.06),
        H,
      ]));
  }
  function A() {
    (R(), y.setDir(1), F());
  }
  return (
    A(),
    T.clear(),
    {
      update(C, H, _) {
        if ((_ && R(), (m.t += C), e.indMode === "magnet")) {
          const te = m.xm;
          (m.dragX != null
            ? (m.xm += (m.dragX - m.xm) * Math.min(1, C * 20))
            : m.auto &&
              ((m.xm += m.auto * e.vm * C),
              ((m.auto > 0 && m.xm >= ze - 0.02) ||
                (m.auto < 0 && m.xm <= -0.3)) &&
                (m.auto = 0)),
            (m.vm = C > 0 ? (m.xm - te) / C : 0),
            h.position.set(m.xm, at - 0.008, 0),
            (h.rotation.y = e.pole > 0 ? 0 : Math.PI));
          const G = k(m.xm),
            le = C > 0 ? -(G - m.link) / C : 0;
          ((m.link = G), (m.emf += (le - m.emf) * Math.min(1, C * 18)));
          const oe = m.emf / Mn;
          ((z = {
            emf: m.emf,
            I: oe,
          }),
            f.setValue(oe / yn),
            f.tick(C),
            T.push(m.t, G * 1e3, oe * 1e3));
          const ke = ee(Math.abs(oe) / yn, 0, 1);
          if (
            ((m.phase = (m.phase || 0) - Math.sign(oe) * C * ke * 0.05),
            M.forEach((Le, De) => {
              Le.visible = ke > 0.02;
              const Ge = De / M.length + m.phase;
              (Le.position.copy(v(Ge)), (Le.material.opacity = 0.4 + 0.6 * ke));
            }),
            ke > 0.04)
          ) {
            const Le = oe > 0 ? "N" : "S",
              De = oe > 0 ? "S" : "N";
            (t.tag(
              "cl",
              new P(ze - ht / 2 - 0.012, at + Ae + 0.03, 0),
              De,
              De === "N" ? "red" : "blue",
            ),
              t.tag(
                "cr",
                new P(ze + ht / 2 + 0.004, at + Ae + 0.03, 0),
                Le,
                Le === "N" ? "red" : "blue",
              ));
            const Ge = Math.sign(m.vm) * Math.sign(ze - m.xm) > 0;
            t.tag(
              "lenz",
              new P(ze - 0.04, at + Ae + 0.07, 0),
              Ge
                ? translate("来拒：阻碍磁通量增加")
                : translate("去留：阻碍磁通量减少"),
              "acc",
            );
          }
          t.tag(
            "G",
            new P(f.position.x + 0.08, 0.12, f.position.z),
            `I = ${x(oe * 1e3, 2)} mA`,
            "gold",
          );
        } else {
          const te = {
            B: e.Br,
            L: de,
            R: e.Rr,
            m: hs,
            F: d.run ? e.Fr / 1e3 : 0,
          };
          if (d.dragX != null) {
            const Ye = d.x + (d.dragX - d.x) * Math.min(1, C * 20);
            ((d.v = C > 0 ? (Ye - d.x) / C : 0), (d.x = Ye));
          } else (d.run || Math.abs(d.v) > 1e-5) && ds(d, te, C);
          (d.x >= rt && ((d.x = rt), (d.v = 0), (d.run = !1)),
            d.x <= qe && ((d.x = qe), (d.v = 0)));
          const G = e.Br * de * d.v,
            le = G / e.Rr;
          ((z = {
            emf: G,
            I: le,
          }),
            T.push(m.t, d.v * 100, G * 1e3),
            I.position.set(d.x, Pt + 0.008, 0));
          const oe = Pt + 0.008;
          g.set(
            new P(d.x, oe, 0.03),
            new P(1, 0, 0),
            d.run && e.Fr ? 0.02 + e.Fr * 0.0015 : 0,
          );
          const ke = e.Br * le * de;
          (S.set(
            new P(d.x, oe, -0.03),
            new P(-Math.sign(d.v) || -1, 0, 0),
            Math.abs(ke) > 1e-4 ? 0.02 + Math.abs(ke) * 1.5 : 0,
          ),
            L.set(
              new P(d.x, oe + 0.02, 0),
              new P(Math.sign(d.v) || 1, 0, 0),
              Math.abs(d.v) > 0.005 ? 0.02 + Math.abs(d.v) * 0.12 : 0,
            ));
          const Le = [
              new P(d.x, oe, -de / 2),
              new P(d.x, oe, de / 2),
              new P(qe - 0.05, oe, de / 2),
              new P(qe - 0.05, oe, -de / 2),
              new P(d.x, oe, -de / 2),
            ],
            De = xn(Le),
            Ge = ee(Math.abs(le) / 0.3, 0, 1);
          ((d.phase = (d.phase || 0) + Math.sign(le) * C * (0.05 + 0.3 * Ge)),
            U.forEach((Ye, Jt) => {
              ((Ye.visible = Ge > 0.01),
                Ye.position.copy(De(Jt / U.length + d.phase)),
                (Ye.material.opacity = 0.4 + 0.6 * Ge));
            }),
            t.tag(
              "E",
              new P(d.x - 0.08, oe + 0.05, -de / 2),
              `E = BLv = ${x(G * 1e3, 1)} mV`,
              "gold",
            ),
            t.tag(
              "R",
              new P(qe - 0.05, oe + 0.03, 0.04),
              `R = ${x(e.Rr, 1)} Ω`,
              "dim",
            ),
            t.tag(
              "B",
              new P(rt - 0.03, 0.01, de / 2 + 0.05),
              `B ⊙ ${x(e.Br, 2)} T`,
              "violet",
            ),
            d.run &&
              Math.abs(d.v - z0(e.Fr / 1e3, e.Br, de, e.Rr)) <
                0.01 * z0(e.Fr / 1e3, e.Br, de, e.Rr) &&
              t.tag(
                "vt",
                new P(d.x, oe + 0.09, 0),
                translate("匀速：F = B²L²v/R"),
                "ok",
              ));
        }
        Math.floor(m.t * 6) !== Math.floor((m.t - C) * 6) && t.refreshDock();
      },
      onParam(C) {
        (C === "indMode" &&
          (T.clear(),
          t.stage.fly(
            ...(e.indMode === "magnet"
              ? t.lesson.cam
              : [
                  [0, 0.62, 0.74],
                  [0, 0, 0.03],
                ]),
            1,
          )),
          (C === "turns" || C === "pole") && (m.link = k(m.xm)));
      },
      actions: () =>
        e.indMode === "magnet"
          ? [
              {
                label: translate("插入线圈"),
                run: () => (m.auto = 1),
              },
              {
                label: translate("拔出线圈"),
                run: () => (m.auto = -1),
              },
            ]
          : [
              {
                label: translate("恒力拉动"),
                run() {
                  d.run = !0;
                },
              },
              {
                label: translate("推一下（v₀ = 0.5 m/s）"),
                run() {
                  ((d.run = !1), (d.v = 0.5));
                },
              },
              {
                label: translate("复位"),
                run() {
                  ((d.run = !1), (d.v = 0), (d.x = qe + 0.04));
                },
              },
            ],
      record() {
        if (e.indMode !== "rod")
          return (t.flash(translate("切换到“导体棒切割”后记录 E 与 v")), !1);
        if (Math.abs(d.v) < 0.005)
          return (t.flash(translate("让导体棒运动起来再记录")), !1);
        (t.records.push({
          v: d.v,
          E: z.emf,
          B: e.Br,
          R: e.Rr,
        }),
          t.flash(translate("已记录第 {0} 组数据", [t.records.length])));
      },
      readouts() {
        if (e.indMode === "magnet")
          return [
            [translate("磁铁速度"), `${x(m.vm * 100, 1)} cm/s`],
            [translate("线圈磁链 NΦ"), `${x(m.link * 1e3, 3)} mWb`],
            [translate("感应电动势 e"), `${x(z.emf * 1e3, 2)} mV`],
            [translate("感应电流 I"), `${x(z.I * 1e3, 3)} mA`],
            [translate("回路电阻"), `${Mn} Ω`],
          ];
        const C = z0(e.Fr / 1e3, e.Br, de, e.Rr);
        return [
          [translate("速度 v"), `${x(d.v * 100, 1)} cm/s`],
          [translate("电动势 E = BLv"), `${x(z.emf * 1e3, 2)} mV`],
          [translate("电流 I = E/R"), `${x(z.I * 1e3, 1)} mA`],
          [translate("安培力 F = BIL"), `${x(e.Br * z.I * de * 1e3, 2)} mN`],
          [translate("收尾速度 FR/(B²L²)"), `${x(C * 100, 1)} cm/s`],
          [translate("导轨间距 L"), `${de * 100} cm`],
        ];
      },
      hud: () =>
        e.indMode === "magnet"
          ? [
              ["e", x(z.emf * 1e3, 1), "mV"],
              ["I", x(z.I * 1e3, 2), "mA"],
            ]
          : [
              ["v", x(d.v * 100, 1), "cm/s"],
              ["E", x(z.emf * 1e3, 1), "mV"],
            ],
      dock(C) {
        if (C === "scope") {
          const G = e.indMode === "magnet",
            le = Math.max(6, m.t),
            oe = le - 6;
          return {
            chart: {
              series: G
                ? [
                    {
                      pts: T.series(0),
                      color: "#cdbcff",
                      name: "NΦ / mWb",
                    },
                    {
                      pts: T.series(1),
                      color: "#ffd25a",
                      name: "I / mA",
                    },
                  ]
                : [
                    {
                      pts: T.series(0),
                      color: "#cdbcff",
                      name: "v / (cm/s)",
                    },
                    {
                      pts: T.series(1),
                      color: "#ffd25a",
                      name: "E / mV",
                    },
                  ],
              x: [oe, le],
              xLabel: "t / s",
              yLabel: G
                ? translate("磁链与感应电流")
                : translate("速度与电动势"),
            },
          };
        }
        if (C === "indinfo")
          return {
            html: qt(
              [
                [
                  translate("磁铁 N 极插入"),
                  translate("Φ 增大 → 感应电流的磁场与原磁场反向（排斥）"),
                ],
                [
                  translate("磁铁 N 极拔出"),
                  translate("Φ 减小 → 感应电流的磁场与原磁场同向（吸引）"),
                ],
                [translate("磁铁静止"), translate("Φ 不变 → 没有感应电流")],
                "-",
                [translate("线圈匝数 N"), String(e.turns)],
                [
                  translate("电动势 e = −N dΦ/dt"),
                  `${x(z.emf * 1e3, 2)} mV`,
                  !0,
                ],
              ],
              translate(
                "楞次定律是能量守恒的体现：插入或拔出磁铁时都要克服感应电流的磁场力做功，机械能转化为电能。",
              ),
            ),
          };
        const H = t.records;
        if (!H.length)
          return {
            html: lt(
              translate("让导体棒运动起来（或用手拖动），按“记录数据”。"),
            ),
          };
        const _ = H.map((G) => [G.v * 100, G.E * 1e3]),
          te =
            _.length >= 2
              ? Tt(
                  _.map((G) => G[0]),
                  _.map((G) => G[1]),
                )
              : null;
        return {
          chart: {
            series: [
              {
                pts: _,
                color: "#ffd25a",
                kind: "scatter",
                name: translate("实验数据"),
              },
            ],
            x: [
              Math.min(0, ..._.map((G) => G[0])),
              Math.max(10, ..._.map((G) => G[0] * 1.1)),
            ],
            fit: te
              ? {
                  ...te,
                  color: "#e8e6e0",
                  label: `k = ${x((te.k * 100) / 1e3, 4)} V·s/m`,
                }
              : null,
            xLabel: "v / (cm/s)",
            yLabel: "E / mV",
            xName: "v",
          },
          side: `<div class="fitside"><b class="big">${H.length}</b><span>${translate("组数据")}</span>${te ? `<div class="res">BL ≈ ${x((te.k * 100) / 1e3, 4)} T·m</div>` : ""}<p>${translate("E 与 v 成正比，斜率为 BL = {0} T·m。", [x(e.Br * de, 3)])}</p></div>`,
        };
      },
      csv() {
        return e.indMode === "rod" && t.records.length
          ? [
              ["v/(m/s)", "E/V", "B/T", "R/ohm"],
              ...t.records.map((C) => [C.v, C.E, C.B, C.R]),
            ]
          : [
              [
                "t/s",
                e.indMode === "magnet" ? "NPhi/mWb" : "v/(cm/s)",
                e.indMode === "magnet" ? "I/mA" : "E/mV",
              ],
              ...T.data.map((C) => C.map((H) => +H.toFixed(5))),
            ];
      },
    }
  );
}
const ye = 0.17,
  bt = 0.11,
  f0 = 0.16,
  h0 = 0.1,
  Vt = f0 * h0,
  ms = 6;
function bs() {
  const t = fe(),
    e = new Y(),
    o = (r) =>
      new K({
        color: r,
        roughness: 0.32,
        metalness: 0.15,
        clearcoat: 1,
        clearcoatRoughness: 0.18,
      });
  for (const [r, i, a] of [
    [-1, Z0, "N"],
    [1, en, "S"],
  ]) {
    const c = new E(new se(0.06, ye + 0.07, 0.2, 3, 0.006), o(i));
    c.position.set(r * (bt + 0.03), (ye + 0.07) / 2, 0);
    const l = new E(
      new Q(
        bt + 0.012,
        bt + 0.012,
        0.2,
        64,
        1,
        !0,
        r < 0 ? Math.PI * 1.3 : Math.PI * 0.3,
        Math.PI * 0.4,
      ),
      new Z({
        color: "#8c9097",
        metalness: 1,
        roughness: 0.35,
        side: Ue,
      }),
    );
    ((l.rotation.x = Math.PI / 2), l.position.set(0, ye, 0));
    const p = tn(a, 0.05);
    (p.position.set(r * (bt + 0.03), ye + 0.0705, 0),
      (p.rotation.z = 0),
      e.add(c, l, p));
  }
  const s = new E(new se(2 * bt + 0.12, 0.03, 0.2, 3, 0.006), t.darkSteel);
  return ((s.position.y = 0.015), e.add(s), pe(e));
}
function ws() {
  const t = fe(),
    e = new Y(),
    o = (l) => {
      const p = new u0(),
        h = h0 / 2 + l,
        f = f0 / 2 + l,
        u = 0.01;
      (p.moveTo(-h + u, -f),
        p.lineTo(h - u, -f),
        p.quadraticCurveTo(h, -f, h, -f + u),
        p.lineTo(h, f - u),
        p.quadraticCurveTo(h, f, h - u, f),
        p.lineTo(-h + u, f),
        p.quadraticCurveTo(-h, f, -h, f - u),
        p.lineTo(-h, -f + u),
        p.quadraticCurveTo(-h, -f, -h + u, -f));
      const b = p.getSpacedPoints(160).map((M) => new P(M.x, 0, M.y));
      return new b0(b, !0);
    };
  for (const [l, p] of [
    [0, 0],
    [0.004, 0.003],
    [-0.004, 0.003],
    [0.004, -0.003],
    [-0.004, -0.003],
    [0, 0.006],
    [0, -0.006],
  ]) {
    const h = new E(new w0(o(l), 200, 0.0021, 6, !0), Yt());
    ((h.position.y = p), e.add(h));
  }
  const s = new E(new Q(0.004, 0.004, 0.46, 20), t.steel);
  ((s.rotation.x = Math.PI / 2), (s.position.z = 0.05), e.add(s));
  const r = new E(new he(h0, 0.006, 0.008), t.plastic);
  e.add(r);
  for (const l of [0.15, 0.175]) {
    const p = new E(new Q(0.014, 0.014, 0.012, 40), Gt());
    ((p.rotation.x = Math.PI / 2), (p.position.z = l), e.add(p));
  }
  const i = new Y(),
    a = new E(new he(0.05, 0.008, 0.006), t.alu);
  a.position.x = 0.025;
  const c = new E(new Q(0.006, 0.006, 0.03, 16), t.red);
  return (
    (c.rotation.x = Math.PI / 2),
    c.position.set(0.05, 0, -0.015),
    i.add(a, c),
    (i.position.z = -0.17),
    e.add(i),
    pe(e)
  );
}
function gs() {
  const t = fe(),
    e = new Y(),
    o = new E(new Q(0.025, 0.028, 0.02, 32), t.plastic);
  o.position.y = 0.01;
  const s = new E(new Q(0.01, 0.01, 0.016, 24), t.brass);
  s.position.y = 0.028;
  const r = new E(
    new nt(0.018, 32, 24),
    new K({
      color: "#fff8ea",
      roughness: 0.05,
      transparent: !0,
      opacity: 0.35,
      depthWrite: !1,
    }),
  );
  r.position.y = 0.052;
  const i = new E(
    new Xe(0.004, 7e-4, 6, 16, Math.PI),
    new re({
      color: "#ffb35a",
      toneMapped: !1,
    }),
  );
  i.position.y = 0.05;
  const a = new Ct(
    new Ut({
      map: Nt(),
      color: "#ffcf7a",
      transparent: !0,
      depthWrite: !1,
      blending: yt,
      toneMapped: !1,
      opacity: 0,
    }),
  );
  return (
    (a.position.y = 0.052),
    a.scale.setScalar(0.12),
    e.add(o, s, r, i, a),
    (e.setLevel = (c) => {
      (i.material.color.set("#ffb35a").multiplyScalar(0.3 + 3 * c),
        (a.material.opacity = Math.min(1, c * 1.2)),
        r.material.emissive?.set?.("#ffd9a0"));
    }),
    pe(e)
  );
}
function Ms(t) {
  const e = t.params,
    o = fe();
  t.add(bs());
  const s = t.add(ws());
  s.position.set(0, ye, 0);
  for (const N of [-0.14, 0.12]) {
    const $ = new Y(),
      j = new E(new se(0.03, ye + 0.012, 0.016, 2, 0.003), o.darkSteel);
    j.position.y = (ye + 0.012) / 2;
    const w = new E(new Q(0.01, 0.01, 0.02, 24), o.brass);
    ((w.rotation.x = Math.PI / 2),
      (w.position.y = ye),
      $.add(j, w),
      ($.position.z = N),
      t.add(pe($)));
  }
  const r = [];
  for (const N of [0.15, 0.175]) {
    const $ = new E(
      new he(0.008, 0.03, 0.008),
      new Z({
        color: "#2a2a2c",
        roughness: 0.8,
      }),
    );
    ($.position.set(0, ye - 0.029, N),
      t.add($),
      r.push(new P(0, ye - 0.044, N)));
  }
  const i = t.add(
    zn({
      kind: "zero",
      label: "V",
      size: 0.13,
      numbers: ["6", "4", "2", "0", "2", "4", "6"],
    }),
  );
  (i.position.set(0.26, 0, 0.12), (i.rotation.y = -0.5));
  const a = t.add(gs());
  (a.position.set(-0.24, 0, 0.17), i.updateMatrixWorld(!0));
  const c = i.localToWorld(i.terminals[0].clone()),
    l = i.localToWorld(i.terminals[1].clone());
  (t.add(
    Qe(
      [
        r[0],
        r[0].clone().setY(0.03),
        new P(0.1, 0.005, 0.2),
        new P(c.x - 0.02, 0.01, c.z + 0.05),
        c,
      ],
      {
        color: "#c43a2e",
      },
    ),
  ),
    t.add(
      Qe(
        [
          r[1],
          r[1].clone().setY(0.03),
          new P(0.12, 0.005, 0.24),
          new P(l.x + 0.01, 0.01, l.z + 0.06),
          l,
        ],
        {
          color: "#1d1f23",
        },
      ),
    ),
    t.add(
      Qe(
        [
          r[0],
          r[0].clone().setY(0.025).setX(-0.02),
          new P(-0.12, 0.005, 0.22),
          new P(-0.24, 0.02, 0.2),
          new P(-0.235, 0.028, 0.17),
        ],
        {
          color: "#c43a2e",
        },
      ),
    ));
  const p = t.add(
      Te({
        width: 0.0012,
        halo: 4,
        haloOpacity: 0.12,
        gain: 1.4,
      }),
    ),
    h = [];
  for (const N of [-0.06, -0.03, 0, 0.03, 0.06])
    for (const $ of [-0.07, 0, 0.07])
      h.push({
        pts: [
          [-bt + 0.004, ye + N, $],
          [bt - 0.004, ye + N, $],
        ],
        color: "#b9a2ff",
        intensity: 0.5,
      });
  p.set(h);
  const f = t.add(
    new E(
      new $e(0.2, 0.26),
      new re({
        color: "#a78bff",
        transparent: !0,
        opacity: 0.08,
        side: Ue,
        depthWrite: !1,
        toneMapped: !1,
      }),
    ),
  );
  ((f.rotation.y = Math.PI / 2), f.position.set(0, ye, 0));
  const u = new Bn(
    new Pn(new $e(0.2, 0.26)),
    new O0({
      color: "#cdbcff",
      dashSize: 0.008,
      gapSize: 0.006,
      transparent: !0,
      opacity: 0.7,
    }),
  );
  (u.computeLineDistances(), f.add(u));
  const b = t.add(
      Re("#3fd28a", {
        r: 0.0015,
        head: 0.012,
      }),
    ),
    M = t.add(
      Re("#3fd28a", {
        r: 0.0015,
        head: 0.012,
      }),
    ),
    v = {
      th: 0,
      run: !0,
      t: 0,
    },
    m = An(4),
    k = () => 2 * Math.PI * e.rps,
    B = () => ps(e.Ng, e.Bg, Vt, k()),
    y = () => B() * Math.sin(v.th);
  return {
    update(N, $, j) {
      (v.run && (v.th += k() * N),
        (v.t += N),
        (s.rotation.z = v.th + Math.PI / 2));
      const w = y();
      (m.push(v.t, w, wn(e.Bg, Vt, v.th) * e.Ng),
        i.setValue(w / ms),
        i.tick(N),
        a.setLevel(Math.min(1, (w / 4) ** 2)),
        (f.visible = e.neutral));
      const I = h0 / 2,
        g = Math.cos(v.th + Math.PI / 2),
        S = Math.sin(v.th + Math.PI / 2),
        L = new P(I * g, ye + I * S, f0 / 2 + 0.02),
        U = new P(-I * g, ye - I * S, f0 / 2 + 0.02),
        d = Math.min(0.05, 0.012 + e.rps * 0.012);
      (b.set(L, new P(-S, g, 0), e.rps ? d : 0),
        M.set(U, new P(S, -g, 0), e.rps ? d : 0));
      const T = ((St(v.th) % 360) + 360) % 360,
        z = Math.abs(Math.sin(v.th)) < 0.06;
      (t.tag("a", L.clone().add(new P(0, 0.012, 0.01)), "ab", "gold"),
        t.tag("c", U.clone().add(new P(0, 0.012, 0.01)), "cd", "gold"),
        e.neutral &&
          t.tag(
            "n",
            new P(0, ye + 0.15, -0.1),
            z ? translate("中性面：Φ 最大，e = 0") : translate("中性面"),
            z ? "ok" : "violet",
          ),
        t.tag(
          "V",
          new P(i.position.x + 0.02, 0.13, i.position.z),
          `e = ${x(w, 2)} V`,
          "gold",
        ),
        t.tag("th", new P(-bt - 0.05, ye + 0.11, 0), `θ = ${x(T, 0)}°`, "dim"),
        Math.floor(v.t * 8) !== Math.floor((v.t - N) * 8) && t.refreshDock());
    },
    onParam() {},
    actions: () => [
      {
        label: v.run ? translate("暂停") : translate("继续转动"),
        run() {
          ((v.run = !v.run), t.renderActs());
        },
      },
      {
        label: translate("转到中性面"),
        run() {
          ((v.th = Math.round(v.th / Math.PI) * Math.PI),
            (v.run = !1),
            t.renderActs());
        },
      },
      {
        label: translate("转过 45°"),
        run() {
          ((v.th += Math.PI / 4), (v.run = !1), t.renderActs());
        },
      },
    ],
    readouts: () => [
      [translate("角速度 ω"), `${x(k(), 2)} rad/s`],
      [translate("频率 f"), `${x(e.rps, 2)} Hz`],
      [translate("线圈面积 S"), `${x(Vt * 1e4, 0)} cm²`],
      [translate("峰值 Em = NBSω"), `${x(B(), 2)} V`],
      [translate("有效值 E = Em/√2"), `${x(jt(B()), 2)} V`],
      [translate("瞬时值 e"), `${x(y(), 2)} V`],
      [
        translate("磁链 NΦ = NBS cosθ"),
        `${x(e.Ng * wn(e.Bg, Vt, v.th), 3)} Wb`,
      ],
    ],
    hud: () => [
      ["e", x(y(), 2), "V"],
      ["Em", x(B(), 2), "V"],
      ["E", x(jt(B()), 2), "V"],
    ],
    dock(N) {
      const $ = B();
      if (N === "acwave") {
        const w = Math.max(4, v.t),
          I = w - 4,
          g = e.Ng * e.Bg * Vt;
        return {
          chart: {
            series: [
              {
                pts: m.series(0),
                color: "#ffd25a",
                name: "e / V",
              },
              {
                pts: m.series(1).map(([S, L]) => [S, g ? (L / g) * $ : 0]),
                color: "#cdbcff",
                name: translate("NΦ（按比例）"),
                dashed: !0,
                opacity: 0.7,
              },
              {
                pts: [
                  [I, $],
                  [w, $],
                ],
                color: "#ff7a6a",
                name: "Em",
                noHover: !0,
                dashed: !0,
                opacity: 0.6,
              },
              {
                pts: [
                  [I, jt($)],
                  [w, jt($)],
                ],
                color: "#3fd28a",
                name: "E = Em/√2",
                noHover: !0,
                dashed: !0,
                opacity: 0.8,
              },
              {
                pts: [
                  [I, -$],
                  [w, -$],
                ],
                color: "#ff7a6a",
                noHover: !0,
                dashed: !0,
                opacity: 0.6,
              },
            ],
            x: [I, w],
            y: [-Math.max(0.5, $ * 1.15), Math.max(0.5, $ * 1.15)],
            xLabel: "t / s",
            yLabel: "e / V",
          },
        };
      }
      const j = e.rps ? 1 / e.rps : 1 / 0;
      return {
        html: `<div class="gview"><div class="kv2"><span>${translate("线圈匝数 N")}</span><b>${e.Ng}</b><span>${translate("磁感应强度 B")}</span><b>${x(e.Bg, 2)} T</b><span>${translate("周期 T")}</span><b>${isFinite(j) ? x(j, 3) + " s" : "∞"}</b><i class="sep"></i><span>${translate("峰值 Em = NBSω")}</span><b class="hi">${x($, 3)} V</b><span>${translate("有效值 E")}</span><b class="hi">${x(jt($), 3)} V</b><span>${translate("平均值（半周期）2Em/π")}</span><b>${x((2 * $) / Math.PI, 3)} V</b></div><p class="tnote">${translate("线圈每转一周，经过中性面两次，电流方向改变两次。正弦交流电的有效值是峰值的 1/√2 ≈ 0.707 倍；交流电表的读数、用电器铭牌上的电压都是有效值。")}</p></div>`,
      };
    },
    csv: () => [
      ["t/s", "e/V", "NPhi/Wb"],
      ...m.data.map((N) => N.map(($) => +$.toFixed(5))),
    ],
  };
}
const Oe = 0.86,
  Ke = 0.56,
  ys = 1e-9,
  F0 = 0.02,
  $n = {
    e: {
      q: -ne,
      m: Be,
      col: "#5fc8ff",
    },
    p: {
      q: ne,
      m: Q0,
      col: "#ff8a5a",
    },
    a: {
      q: 2 * ne,
      m: 4.001506 * Ht,
      col: "#ffd25a",
    },
  };
function vs() {
  const t = fe(),
    e = new Y(),
    o = new E(
      new se(0.06, 0.026, 0.03, 2, 0.005),
      new K({
        color: "#2b3a52",
        metalness: 0.5,
        roughness: 0.35,
        clearcoat: 0.6,
      }),
    );
  o.position.set(-0.03, 0.013, 0);
  const s = new E(new Q(0.005, 0.006, 0.02, 20), t.chrome);
  ((s.rotation.z = Math.PI / 2), s.position.set(0.008, 0.013, 0));
  const r = new E(
    new nt(0.0025, 12, 8),
    new re({
      color: new ue("#3fd28a").multiplyScalar(2),
      toneMapped: !1,
    }),
  );
  return (r.position.set(-0.045, 0.027, 0), e.add(o, s, r), pe(e));
}
function xs(t) {
  const e = t.params,
    o = t.add(g0(Oe, Ke)),
    s = o.top,
    r = s + 0.0012,
    i = t.add(
      M0(Oe / 2 - F0, Ke, {
        spacing: 0.045,
      }),
    );
  i.position.set((F0 + Oe / 2) / 2, s + 5e-4, 0);
  const a = t.add(
      Te({
        width: 9e-4,
        halo: 3.5,
        haloOpacity: 0.08,
        gain: 0.9,
      }),
    ),
    c = t.add(
      _t({
        size: 0.005,
      }),
    ),
    l = t.add(
      Te({
        width: 0.0016,
        halo: 4,
        haloOpacity: 0.2,
        gain: 2.2,
      }),
    ),
    p = [];
  let h = 0;
  function f($, j) {
    const w = t.add(Y0($)),
      I = {
        id: ++h,
        x: j[0],
        y: j[1],
        q: $,
        obj: w,
      };
    return (
      p.push(I),
      t.draggable(w, {
        pos: () => [I.x, I.y],
        move(g) {
          ((I.x = ee(g[0], -Oe / 2 + 0.02, Oe / 2 - 0.02)),
            (I.y = ee(g[1], -Ke / 2 + 0.02, Ke / 2 - 0.02)));
        },
        remove() {
          (t.remove(w), p.splice(p.indexOf(I), 1), t.changed());
        },
      }),
      t.changed(),
      I
    );
  }
  (f(5, [-0.12, -0.06]), f(-3, [-0.02, 0.12]));
  const u = t.add(vs()),
    b = {
      p: [-0.36, 0],
      a: 0,
    };
  (t.draggable(u, {
    pos: () => b.p,
    move($) {
      b.p = [
        ee($[0], -Oe / 2 + 0.04, Oe / 2 - 0.04),
        ee($[1], -Ke / 2 + 0.03, Ke / 2 - 0.03),
      ];
    },
  }),
    t.rotator(u, {
      radius: 0.05,
      height: 0.04,
      get: () => b.a,
      set: ($) => (b.a = Math.round(St($)) * (Math.PI / 180)),
    }));
  let M = [];
  const v = () =>
    p.map(($) => ({
      x: $.x,
      y: $.y,
      q: $.q * ys,
    }));
  let m = [];
  function k() {
    const $ = $n[e.pk],
      j = e.vf * 1e6,
      w = [Math.cos(b.a), Math.sin(b.a)],
      I = [b.p[0] + w[0] * 0.02, b.p[1] + w[1] * 0.02];
    (M.push({
      kind: e.pk,
      k: $,
      s: {
        x: [I[0], 0, I[1]],
        v: [j * w[0], 0, j * w[1]],
      },
      trail: [[I[0], r + 0.002, I[1]]],
      dead: !1,
      age: 0,
      ts: 0.45 / j,
    }),
      M.length > 24 && M.shift());
  }
  const B = t.add(G0("#ffffff", 0.003, 0.03));
  B.visible = !1;
  function y() {
    if (
      ((m = v()),
      p.forEach(($) => {
        ($.obj.position.set($.x, s, $.y),
          $.obj.setSign($.q),
          $.obj.setSize(0.75 + 0.05 * Math.abs($.q)));
      }),
      o.setCharges(
        p.map(($) => ({
          x: $.x,
          y: $.y,
          q: $.q,
        })),
      ),
      m.length)
    ) {
      const j = X0(m, {
        perCoulomb: 24e8,
        minLines: 8,
        bounds: [-Oe / 2, -Ke / 2, Oe / 2, Ke / 2],
        maxLen: 1.6,
      }).map((I) => ({
        pts: I.pts.map(([g, S]) => [g, r, S]),
        color: "#bfb3e6",
      }));
      a.set(j);
      const w = [];
      for (const I of j)
        w.push(
          ...Qt(I.pts, 0.1, {
            offset: 0.5,
            color: "#bfb3e6",
            gain: 1,
          }),
        );
      c.set(w);
    } else (a.set([]), c.set([]));
    (i.setDir(Math.sign(e.Bf)),
      i.setStrength(Math.abs(e.Bf) / 20),
      u.position.set(b.p[0], s, b.p[1]),
      (u.rotation.y = -b.a));
  }
  function N($) {
    const j = e.Bf / 1e3;
    for (const w of M) {
      if (w.dead) {
        w.age += $;
        continue;
      }
      const I = $ * w.ts,
        g = Math.hypot(w.s.v[0], w.s.v[2]),
        S = ee(Math.ceil((g * I) / 8e-4), 1, 400),
        L = w.k.q / w.k.m;
      for (let U = 0; U < S; U++) {
        const [d, , T] = w.s.x,
          [z, R] = wt(m, d, T, 0.004),
          F = d > F0 ? [0, j, 0] : [0, 0, 0];
        J0(w.s, L, [z, 0, R], F, I / S);
        const [A, , C] = w.s.x;
        if (
          Math.abs(A) > Oe / 2 ||
          Math.abs(C) > Ke / 2 ||
          m.some((H) => (H.x - A) ** 2 + (H.y - C) ** 2 < 0.009 ** 2)
        ) {
          w.dead = !0;
          break;
        }
      }
      (w.trail.push([w.s.x[0], r + 0.002, w.s.x[2]]),
        w.trail.length > 600 && w.trail.shift());
    }
    M = M.filter((w) => !w.dead || w.age < 3);
  }
  return (
    y(),
    {
      update($, j, w) {
        (w && y(),
          N($),
          l.set(
            M.map((g) => ({
              pts: g.trail,
              color: g.k.col,
              fade: 0.15,
              intensity: g.dead ? Math.max(0.15, 1 - g.age / 3) : 1,
            })),
          ));
        const I = M.filter((g) => !g.dead).pop();
        ((B.visible = !!I),
          I &&
            (B.position.set(I.s.x[0], r + 0.003, I.s.x[2]),
            B.setColor(I.k.col)),
          p.forEach((g) =>
            t.tag(
              `c${g.id}`,
              new P(g.x + 0.018, s + 0.04, g.y),
              `${g.q > 0 ? "+" : "−"}${x(Math.abs(g.q), 0)} nC`,
              g.q > 0 ? "pos" : "neg",
            ),
          ),
          t.tag(
            "B",
            new P(Oe / 2 - 0.08, s + 0.02, -Ke / 2 + 0.03),
            e.Bf
              ? `B ${e.Bf > 0 ? "⊙" : "⊗"} ${x(Math.abs(e.Bf), 1)} mT`
              : "B = 0",
            "violet",
          ),
          t.tag(
            "gun",
            new P(b.p[0] - 0.03, s + 0.05, b.p[1]),
            {
              e: translate("电子枪"),
              p: translate("质子枪"),
              a: translate("α 粒子枪"),
            }[e.pk],
            "dim",
          ));
      },
      onParam() {},
      actions: () => [
        {
          label: translate("发射粒子"),
          run: () => k(),
        },
        {
          label: translate("＋ 正电荷"),
          run: () =>
            f(5, [Math.random() * 0.3 - 0.25, Math.random() * 0.3 - 0.15]),
        },
        {
          label: translate("＋ 负电荷"),
          run: () =>
            f(-5, [Math.random() * 0.3 - 0.25, Math.random() * 0.3 - 0.15]),
        },
        {
          label: translate("清除轨迹"),
          run: () => (M = []),
        },
        {
          label: translate("清空电荷"),
          run() {
            for (const $ of [...p])
              (t.remove($.obj), p.splice(p.indexOf($), 1));
            t.changed();
          },
        },
      ],
      readouts() {
        const $ = $n[e.pk],
          j = e.vf * 1e6;
        return [
          [translate("比荷 q/m"), `${ce($.q / $.m, 3)} C/kg`],
          [translate("动能"), `${x((0.5 * $.m * j * j) / ne, 1)} eV`],
          [
            translate("磁场区中的半径"),
            e.Bf
              ? `${x((($.m * j) / ((Math.abs($.q) * Math.abs(e.Bf)) / 1e3)) * 100, 1)} cm`
              : "∞",
          ],
          [translate("慢放：1 s 对应"), `${ce(0.45 / j, 2)} s`],
          [translate("电荷个数"), String(p.length)],
        ];
      },
      hud: () => [],
      dock() {
        if (!p.length && !M.length)
          return {
            html: lt(translate("添加电荷并发射粒子。")),
          };
        const $ = p
          .map(
            (j, w) =>
              `<tr><td>${w + 1}</td><td>${j.q > 0 ? "+" : "−"}${x(Math.abs(j.q), 0)} nC</td><td>${x(j.x * 100, 1)}, ${x(-j.y * 100, 1)}</td></tr>`,
          )
          .join("");
        return {
          html: `<div class="gview"><table class="tbl"><thead><tr><th>#</th><th>${translate("电荷")}</th><th>${translate("位置 / cm")}</th></tr></thead><tbody>${$}</tbody></table><p class="tnote">${translate("拖动电荷移动，点选电荷后按 Delete 删除；拖动粒子枪移动，拖动金色圆环改变发射方向。右半边的磁场竖直向上（⊙）为正。")}</p></div>`,
        };
      },
      csv: () => [
        ["q/nC", "x/m", "y/m"],
        ...p.map(($) => [$.q, +$.x.toFixed(4), +(-$.y).toFixed(4)]),
      ],
    }
  );
}
const $s = {
    efield: vo,
    work: xo,
    capacitor: So,
    crt: Uo,
    maglines: Xo,
    ampere: Yo,
    lorentz: es,
    massspec: is,
    induction: us,
    generator: Ms,
    free: xs,
  },
  Ss = {
    probe: translate("探针读数"),
    phix: "φ - x",
    workpath: "W - s",
    worktable: translate("数据表"),
    captable: translate("数据表"),
    cfit: "C - 1/d",
    crtfit: "Y - U₂",
    crtinfo: translate("偏转公式"),
    bprobe: translate("磁场读数"),
    br: "B - 1/r",
    fi: "F - I",
    ampinfo: translate("左手定则"),
    rv: "r - v",
    lorinfo: translate("运动参数"),
    msinfo: translate("谱线"),
    ek: "Ek - n",
    scope: translate("示波器"),
    ev: "E - v",
    indinfo: translate("楞次定律"),
    acwave: "e - t",
    acinfo: translate("峰值与有效值"),
    freeinfo: translate("场源与粒子"),
  };
function ks() {
  const t = (q) => document.getElementById(q),
    e = so(t("c3")),
    { scene: o, camera: s, controls: r } = e;
  ((e.key.intensity = 22),
    (e.renderer.toneMappingExposure = 1),
    (o.fog.near = 3),
    (o.fog.far = 12));
  const i = po(o),
    a = {
      li: 0,
      lesson: null,
      params: {},
      scene: null,
      objects: [],
      handlers: new Map(),
      records: {},
      dark: !0,
      selected: null,
    },
    c = t("labels"),
    l = new Map(),
    p = (q) => {
      const V = new E(
        new Xe(q, 0.0016, 8, 64),
        new re({
          color: "#ffc857",
          transparent: !0,
          opacity: 0.3,
          toneMapped: !1,
          depthWrite: !1,
        }),
      );
      V.rotation.x = Math.PI / 2;
      const W = new E(
        new nt(0.0055, 16, 12),
        new re({
          color: "#ffc857",
          toneMapped: !1,
        }),
      );
      return (W.position.set(q, 0, 0), V.add(W), (V.knob = W), V);
    },
    h = {
      THREE: to,
      stage: e,
      scene: o,
      camera: s,
      lab: i,
      get params() {
        return a.params;
      },
      get lesson() {
        return a.lesson;
      },
      add(q) {
        return (o.add(q), a.objects.push(q), q);
      },
      remove(q) {
        (o.remove(q), (a.objects = a.objects.filter((V) => V !== q)), ke());
      },
      draggable(q, V) {
        return (
          (q.userData.drag = "el"),
          (q.userData.hid = q.uuid),
          a.handlers.set(q.uuid, V),
          ke(),
          q
        );
      },
      rotator(
        q,
        { radius: V = 0.06, height: W = 0.055, get: D, set: X, end: Ne },
      ) {
        const ge = p(V);
        return (
          (ge.position.y = W),
          q.add(ge),
          (ge.userData.drag = "rot"),
          (ge.userData.hid = ge.uuid),
          a.handlers.set(ge.uuid, {
            rotate: !0,
            obj: q,
            get: D,
            set: X,
            end: Ne,
          }),
          ke(),
          ge
        );
      },
      tag(q, V, W, D = "") {
        let X = l.get(q);
        (X ||
          ((X = document.createElement("div")),
          (X.className = "otag"),
          c.appendChild(X),
          l.set(q, X)),
          (X.dataset.seen = "1"));
        const Ne = e.project(V);
        if (Ne.behind) {
          X.style.display = "none";
          return;
        }
        ((X.style.display = ""),
          X.textContent !== W && (X.textContent = W),
          X.className !== `otag ${D}` && (X.className = `otag ${D}`),
          (X.style.transform = `translate(${Ne.x.toFixed(1)}px, ${Ne.y.toFixed(1)}px)`));
      },
      setParam(q, V, W = !1) {
        ((a.params[q] = V),
          b(q, V),
          W && a.scene.onParam?.(q, V),
          (a.dirty = !0),
          W && a.lesson.remount?.includes(q) && B());
      },
      changed() {
        a.dirty = !0;
      },
      flash: le,
      get records() {
        return (a.records[a.lesson.id] ||= []);
      },
      refreshDock: () => _(!0),
      get dark() {
        return a.dark;
      },
    };
  function f() {
    a.scene?.dispose?.();
    for (const q of a.objects) o.remove(q);
    ((a.objects = []), a.handlers.clear());
    for (const q of l.values()) q.remove();
    l.clear();
  }
  function u(q) {
    ((q = (q + xt.length) % xt.length),
      f(),
      (a.li = q),
      (a.lesson = xt[q]),
      (a.params = {
        ...a.lesson.params,
      }),
      (a.selected = null),
      v(),
      H(),
      (a.scene = $s[a.lesson.scene](h)),
      y(),
      (a.dirty = !0),
      ke(),
      e.fly(...a.lesson.cam, 1.2));
    try {
      history.replaceState(null, "", `#${a.lesson.id}`);
    } catch {}
    _(!0);
  }
  let b = () => {};
  function M() {
    const q = t("nav");
    ((q.innerHTML = `<div class="navh">${translate("静电场")}</div>`),
      xt.forEach((W, D) => {
        (D === 4 &&
          q.insertAdjacentHTML(
            "beforeend",
            `<div class="navh sub">${translate("磁场")}</div>`,
          ),
          D === 8 &&
            q.insertAdjacentHTML(
              "beforeend",
              `<div class="navh sub">${translate("电磁感应")}</div>`,
            ));
        const X = document.createElement("button");
        ((X.className = "ni"),
          (X.innerHTML = `<em>${String(D + 1).padStart(2, "0")}</em><b></b><small></small>`),
          (X.querySelector("b").textContent = W.title),
          (X.querySelector("small").textContent = W.sub),
          X.addEventListener("click", () => u(D)),
          q.appendChild(X));
      }));
    const V = document.createElement("div");
    ((V.className = "navf"),
      (V.innerHTML = `${translate("拖动电荷、磁铁、探针移动")}<br><kbd>D</kbd> ${translate("暗室开关")}<br><kbd>←</kbd><kbd>→</kbd> ${translate("切换课题")}`),
      q.appendChild(V),
      (t("prog").innerHTML = xt.map(() => "<i></i>").join("")));
  }
  function v() {
    const q = a.lesson;
    (document.querySelectorAll("#nav .ni").forEach((D, X) => {
      (D.classList.toggle("on", X === a.li),
        X === a.li && D.classList.add("seen"));
    }),
      document.querySelectorAll("#prog i").forEach((D, X) => {
        (D.classList.toggle("cur", X === a.li),
          D.classList.toggle("on", X < a.li));
      }));
    const V = t("chapter");
    (V.classList.remove("in"),
      V.offsetWidth,
      V.classList.add("in"),
      (V.querySelector(".n").textContent =
        `LESSON ${String(a.li + 1).padStart(2, "0")}`),
      (V.querySelector("h1").textContent = q.title),
      (V.querySelector("p").textContent = q.sub),
      (t("lesson").innerHTML =
        `<div class="lh"><em>${String(a.li + 1).padStart(2, "0")}</em><div><h2></h2><small></small></div></div><div class="body"></div><ol class="steps"></ol>`),
      (t("lesson").querySelector("h2").textContent = q.title),
      (t("lesson").querySelector("small").textContent = q.sub),
      (t("lesson").querySelector(".body").innerHTML = q.body),
      (t("lesson").querySelector(".steps").innerHTML = q.steps
        .map((D) => `<li>${D}</li>`)
        .join("")),
      k(),
      y());
    const W = t("tgs");
    ((W.innerHTML = `<button class="tg" data-k="dark"><i></i>${translate("暗室")}</button><button class="tg" data-k="haze"><i></i>${translate("标注")}</button>`),
      W.querySelectorAll(".tg").forEach((D) =>
        D.addEventListener("click", () => $(D.dataset.k)),
      ),
      w());
  }
  const m = (q) => (typeof q == "function" ? q(a.params) : q);
  function k() {
    const q = a.lesson,
      V = m(q.controls);
    ((b = ho(t("controls"), V, a.params, (W, D) => {
      ((a.params[W] = D),
        a.scene?.onParam?.(W, D),
        (a.dirty = !0),
        q.remount?.includes(W) && B(),
        _(!0));
    })),
      (t("ctrlH").hidden = !V.length));
  }
  function B() {
    (k(), H(), y(), _(!0));
  }
  function y() {
    const q = t("acts"),
      V = a.scene?.actions?.() || [],
      W = a.lesson.record;
    ((q.innerHTML = `${V.map((D, X) => `<button class="${X === 0 && !W ? "go" : "ghost wide"}" data-a="${X}">${D.label}</button>`).join("")}${W ? `<button class="go" id="aRec">● ${translate("记录数据")}</button>` : ""}`),
      (q.hidden = !V.length && !W),
      q.querySelectorAll("[data-a]").forEach((D) =>
        D.addEventListener("click", () => {
          (V[+D.dataset.a].run(), (a.dirty = !0), _(!0));
        }),
      ),
      t("aRec")?.addEventListener("click", () => {
        a.scene?.record?.() !== !1 && _(!0);
      }));
  }
  h.renderActs = () => y();
  let N = !0;
  function $(q) {
    (q === "dark" ? (a.dark = !a.dark) : (N = !N), j(), w());
  }
  function j() {
    ((e.key.intensity = a.dark ? 22 : 38),
      o.background.set(a.dark ? "#08090b" : "#121316"),
      o.fog.color.set(a.dark ? "#08090b" : "#121316"),
      (c.style.visibility = N ? "" : "hidden"),
      (a.dirty = !0));
  }
  function w() {
    document
      .querySelectorAll("#tgs .tg")
      .forEach((q) =>
        q.classList.toggle("on", q.dataset.k === "dark" ? a.dark : N),
      );
  }
  let I = 0;
  function g(q) {
    if (q - I < 80) return;
    I = q;
    const V = a.scene?.readouts?.() || [],
      W = t("readouts");
    ((t("roH").hidden = !V.length),
      (W.hidden = !V.length),
      W.childElementCount !== V.length * 2 &&
        (W.innerHTML = V.map(() => "<span></span><b></b>").join("")));
    const D = (ge, ot) => {
      ge.textContent !== ot && (ge.textContent = ot);
    };
    V.forEach(([ge, ot], vt) => {
      (D(W.children[vt * 2], ge), D(W.children[vt * 2 + 1], ot));
    });
    const X = a.scene?.hud?.() || [],
      Ne = t("hud");
    ((Ne.hidden = !X.length),
      Ne.childElementCount !== X.length &&
        (Ne.innerHTML = X.map(
          () => '<div class="g"><span></span><b></b><small></small></div>',
        ).join("")),
      X.forEach(([ge, ot, vt], _n) => {
        const v0 = Ne.children[_n];
        (D(v0.children[0], ge),
          D(v0.children[1], ot),
          D(v0.children[2], vt || ""));
      }));
  }
  const S = t("inset"),
    L = S.querySelector("canvas"),
    U = L.getContext("2d");
  let d = 0;
  function T(q) {
    const V = a.scene?.inset?.();
    if (((S.hidden = !V), !V || q - d < 60)) return;
    d = q;
    const W = V.canvas,
      D = 300,
      X = Math.round((300 * W.height) / W.width);
    (L.width !== D || L.height !== X) && ((L.width = D), (L.height = X));
    const Ne = V.crop || 1,
      ge = W.width * Ne,
      ot = W.height * Math.max(Ne, 0.5);
    (U.drawImage(
      W,
      (W.width - ge) / 2,
      (W.height - ot) / 2,
      ge,
      ot,
      0,
      0,
      D,
      X,
    ),
      S.classList.toggle("round", !!V.round));
    const vt = S.querySelector("span");
    vt.textContent !== V.label && (vt.textContent = V.label);
  }
  let z = null,
    R = null,
    F = null,
    A = 0,
    C = null;
  function H() {
    const q = a.lesson,
      V = m(q.tabs);
    z = V[0];
    const W = t("tabs");
    ((W.innerHTML = V.map(
      (D) =>
        `<button data-t="${D}" class="${D === z ? "on" : ""}">${Ss[D]}</button>`,
    ).join("")),
      W.querySelectorAll("button").forEach((D) =>
        D.addEventListener("click", () => {
          ((z = D.dataset.t),
            W.querySelectorAll("button").forEach((X) =>
              X.classList.toggle("on", X === D),
            ),
            (C = null),
            _(!0));
        }),
      ),
      (C = null));
  }
  function _(q) {
    const V = performance.now();
    if (!q && V - A < 120) return;
    A = V;
    const W = t("dockBody"),
      D = a.scene?.dock?.(z);
    if (!D) {
      ((W.innerHTML = ""), (C = null));
      return;
    }
    if (D.chart) {
      if (
        ((C !== "chart" || !!D.side != !!W.querySelector(".side")) &&
          ((W.innerHTML = `<div class="dv${D.side ? " split" : ""}"><div class="chost"></div>${D.side ? '<div class="side"></div>' : ""}</div>`),
          (F = W.querySelector(".chost")),
          (R = ao(F)),
          (C = "chart")),
        R.draw(D.chart),
        D.side)
      ) {
        const X = W.querySelector(".side");
        X.innerHTML !== D.side && (X.innerHTML = D.side);
      }
    } else
      ((C = "html"),
        W.dataset.html !== D.html &&
          ((W.innerHTML = D.html), (W.dataset.html = D.html), D.bind?.(W)));
  }
  function te() {
    const q = a.scene?.csv?.(z);
    if (!q?.length) {
      le(translate("当前没有可导出的数据"));
      return;
    }
    const V =
        "\uFEFF" +
        q.map((D) => D.join(",")).join(`
`),
      W = document.createElement("a");
    ((W.href = URL.createObjectURL(
      new Blob([V], {
        type: "text/csv",
      }),
    )),
      (W.download = `fieldlab-${a.lesson.id}.csv`),
      W.click(),
      setTimeout(() => URL.revokeObjectURL(W.href), 1e3));
  }
  let G = 0;
  function le(q) {
    const V = t("toast");
    ((V.textContent = q),
      V.classList.add("show"),
      clearTimeout(G),
      (G = setTimeout(() => V.classList.remove("show"), 1800)));
  }
  const oe = ro(e, {
    planeFor: () => new P(0, 1, 0),
    start(q) {
      const V = a.handlers.get(q.obj.userData.hid);
      if (((q.h = V), V?.rotate)) {
        const W = new P();
        (V.obj.getWorldPosition(W),
          (q.center = W),
          (q.a0 = V.get()),
          (q.start = Math.atan2(q.point.z - W.z, q.point.x - W.x)));
        return;
      }
      if (V?.pos) {
        const W = V.pos();
        q.off = [W[0] - q.point.x, W[1] - q.point.z];
      }
      a.selected = V || null;
    },
    move(q, V) {
      const W = q.h;
      if (W) {
        if (W.rotate) {
          const D = Math.atan2(V.z - q.center.z, V.x - q.center.x);
          W.set(q.a0 + (D - q.start));
        } else if (W.move) {
          const D = q.off || [0, 0];
          W.move([V.x + D[0], V.z + D[1]], V);
        }
        a.dirty = !0;
      }
    },
    end(q) {
      (q.h?.end?.(), (a.dirty = !0), _(!0));
    },
    click(q) {
      ((a.selected = q.h || null), q.h?.click?.(), (a.dirty = !0));
    },
    hover(q) {
      for (const V of a.objects)
        V.traverse?.((W) => {
          W.userData.drag === "rot" &&
            (W.material.opacity = q && q.obj === W ? 0.95 : 0.3);
        });
    },
  });
  function ke() {
    const q = [];
    for (const V of a.objects)
      V.traverse((W) => {
        W.userData.drag && q.push(W);
      });
    oe.setTargets(q);
  }
  (t("bPrev").addEventListener("click", () => u(a.li - 1)),
    t("bNext").addEventListener("click", () => u(a.li + 1)),
    t("bReset").addEventListener("click", () => e.fly(...a.lesson.cam, 0.9)),
    t("bFull").addEventListener("click", () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen?.(),
    ),
    t("bCsv").addEventListener("click", te),
    t("bDock").addEventListener("click", () => {
      (document.body.classList.toggle("dock-min"),
        setTimeout(() => R?.redraw(), 320));
    }),
    window.addEventListener("keydown", (q) => {
      q.target.closest?.("input, textarea") ||
        (q.key === "ArrowRight"
          ? u(a.li + 1)
          : q.key === "ArrowLeft"
            ? u(a.li - 1)
            : q.key === "d" || q.key === "D"
              ? $("dark")
              : q.key === "r" || q.key === "R"
                ? e.fly(...a.lesson.cam, 0.9)
                : q.key === "f" || q.key === "F"
                  ? t("bFull").click()
                  : (q.key === "Delete" || q.key === "Backspace") &&
                    a.selected?.remove &&
                    (q.preventDefault(),
                    a.selected.remove(),
                    (a.selected = null),
                    (a.dirty = !0)));
    }),
    window.addEventListener("hashchange", () => {
      const q = xt.findIndex((V) => `#${V.id}` === location.hash);
      q >= 0 && q !== a.li && u(q);
    }),
    new ResizeObserver(() => R?.redraw()).observe(t("dockBody")),
    M(),
    j());
  const Le = xt.findIndex((q) => `#${q.id}` === location.hash);
  u(Le >= 0 ? Le : 0);
  let De = performance.now(),
    Ge = 0,
    Ye = !1;
  function Jt(q) {
    const V = Math.max(0, Math.min(0.05, (q - De) / 1e3));
    ((De = q), (Ge += V));
    for (const D of l.values()) D.dataset.seen = "";
    const W = a.dirty;
    ((a.dirty = !1), a.scene?.update?.(V, Ge, W));
    for (const D of l.values()) D.dataset.seen || (D.style.display = "none");
    (g(q),
      T(q),
      W && (Ye = !0),
      Ye && q - A >= 120 && ((Ye = !1), _(!1)),
      e.render(V),
      requestAnimationFrame(Jt));
  }
  (requestAnimationFrame(Jt),
    document.body.classList.add("ready"),
    (window.__fields = {
      S: a,
      goLesson: u,
      stage: e,
      ctx: h,
    }));
}
function fieldsLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("电场与磁场 · FieldLab")), ks());
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
                      d: "M4 16c4-9 20-9 24 0",
                      stroke: "#a78bff",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M4 16c4 9 20 9 24 0",
                      stroke: "#a78bff",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                      opacity: ".55",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M6.5 16c3-4.5 16-4.5 19 0",
                      stroke: "#d2c4ff",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                      opacity: ".7",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "5",
                      cy: "16",
                      r: "3.2",
                      fill: "#ff5a4a",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "27",
                      cy: "16",
                      r: "3.2",
                      fill: "#4a8bff",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M3.6 16h2.8M5 14.6v2.8M25.6 16h2.8",
                      stroke: "#fff",
                      strokeWidth: "1",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "FIELD",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("电场与磁场"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(Gn, {}),
            jsxRuntime.jsxs("div", {
              className: "tbtns",
              children: [
                jsxRuntime.jsx("button", {
                  className: "tb",
                  id: "bPrev",
                  title: translate("上一个课题 (←)"),
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
                  title: translate("下一个课题 (→)"),
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
          id: "main",
          children: [
            jsxRuntime.jsxs("section", {
              id: "stage",
              children: [
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
                  id: "hudWrap",
                  children: jsxRuntime.jsx("div", {
                    id: "hud",
                  }),
                }),
                jsxRuntime.jsxs("div", {
                  id: "inset",
                  hidden: !0,
                  children: [
                    jsxRuntime.jsx("span", {}),
                    jsxRuntime.jsx("canvas", {}),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "toast",
                }),
              ],
            }),
            jsxRuntime.jsxs("section", {
              id: "dock",
              children: [
                jsxRuntime.jsxs("div", {
                  className: "dh",
                  children: [
                    jsxRuntime.jsx("div", {
                      className: "tabs",
                      id: "tabs",
                    }),
                    jsxRuntime.jsxs("div", {
                      className: "dacts",
                      children: [
                        jsxRuntime.jsxs("button", {
                          id: "bCsv",
                          title: translate("导出 CSV 数据"),
                          children: [
                            jsxRuntime.jsx("svg", {
                              viewBox: "0 0 16 16",
                              children: jsxRuntime.jsx("path", {
                                d: "M8 2.5v8M4.5 7L8 10.5 11.5 7M3 13.5h10",
                              }),
                            }),
                            "CSV",
                          ],
                        }),
                        jsxRuntime.jsx("button", {
                          id: "bDock",
                          className: "mini",
                          title: translate("收起 / 展开数据坞"),
                          children: jsxRuntime.jsx("svg", {
                            viewBox: "0 0 16 16",
                            children: jsxRuntime.jsx("path", {
                              d: "M4 6l4 4 4-4",
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "dockBody",
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
              id: "ctrl",
              children: [
                jsxRuntime.jsx("div", {
                  className: "vh",
                  id: "ctrlH",
                  children: translate("SETUP · 实验参数"),
                }),
                jsxRuntime.jsx("div", {
                  id: "controls",
                }),
                jsxRuntime.jsx("div", {
                  id: "acts",
                }),
                jsxRuntime.jsx("div", {
                  className: "vh",
                  id: "roH",
                  children: translate("READOUT · 实时读数"),
                }),
                jsxRuntime.jsx("div", {
                  id: "readouts",
                  className: "kv",
                }),
                jsxRuntime.jsx("div", {
                  className: "vh",
                  children: translate("VIEW · 显示"),
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
export { fieldsLabPage as default };
