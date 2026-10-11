// Recovered from public deployment: Page-DwZTQJtf.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as fn } from "../../components/LanguageSwitcher.js";
import {
  G as W,
  b as P,
  M as D,
  L as O,
  B as fe,
  _ as Gt,
  a0 as Wt,
  l as Q,
  w as be,
  x as we,
  f as _,
  c as Y,
  o as Oe,
  C as ge,
  v as ue,
  a1 as gt,
  N as re,
  Y as He,
  T as ve,
  a2 as wt,
  m as Le,
  a as un,
  P as vt,
  V as Ye,
  $ as pn,
  K as hn,
  u as Et,
  y as Mt,
  a3 as Vt,
  a4 as mn,
  a5 as bn,
  z as gn,
  a6 as wn,
  a7 as vn,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  r as Mn,
  b as yn,
  p as je,
  s as kn,
  d as $n,
  c as Pn,
} from "../../vendor/charts-CzzpgoDB.js";
import {
  m as Z,
  s as K,
  l as In,
  a as Sn,
} from "../../vendor/theme-aLwyR9RG.js";
import { R as ae } from "../../vendor/RoundedBoxGeometry-BuxEdaMS.js";
const ke = [
    {
      id: "reflect",
      title: translate("光的反射定律"),
      sub: "Reflection",
      scene: "disk",
      record: "angles",
      params: {
        mode: "mirror",
        i: 40,
        lambda: 650,
      },
      controls: ["i", "lambda"],
      tabs: ["angles", "anglePlot"],
      cam: [
        [0.05, 0.62, 0.52],
        [0, 0.08, 0],
      ],
      body: translate(
        '<p>激光沿量角盘射向平面镜的中心 O。过入射点作垂直于镜面的<b>法线</b>（盘上的竖直虚线），入射光线与法线的夹角叫<b>入射角 i</b>，反射光线与法线的夹角叫<b>反射角 r</b>。</p><p class="eq">r = i</p><p>反射光线、入射光线和法线在同一平面内，反射光线和入射光线分居法线两侧。</p><p>拖动激光笔绕盘转动，或用滑块改变入射角，按<b>记录数据</b>保存每组 i 和 r。让光逆着反射光射入，会沿原入射光射出——<b>光路可逆</b>。</p>',
      ),
      steps: [
        translate("拖动激光笔改变入射角"),
        translate("读出量角盘上的反射角"),
        translate("记录 4~6 组数据"),
        translate("观察 i = 0 时光沿原路返回"),
      ],
    },
    {
      id: "mirrorimg",
      title: translate("平面镜成像"),
      sub: "Plane mirror image",
      scene: "mirrorimg",
      params: {
        u: 0.18,
        rays: !0,
        bx: 0.12,
        by: 0.04,
      },
      controls: ["u", "rays"],
      tabs: ["mirrorinfo"],
      cam: [
        [-0.32, 0.3, 0.48],
        [0.02, 0.06, 0],
      ],
      body: translate(
        '<p>用透明的<b>玻璃板</b>代替平面镜：既能看到点燃的蜡烛 A 在玻璃后面的像，又能看到玻璃后面的蜡烛 B。</p><p>拖动未点燃的蜡烛 B，直到从各个角度看它都和 A 的像<b>完全重合</b>，好像 B 也被点燃了一样。这时量一量：</p><p class="eq">像距 = 物距　　像高 = 物高</p><p>平面镜成<b>正立、等大的虚像</b>，像与物关于镜面对称。打开光路可以看到：反射光线的<b>反向延长线</b>交于像点，像点处并没有真实的光会聚，所以是虚像——放一块光屏在那里，屏上什么也接收不到。</p>',
      ),
      steps: [
        translate("拖动蜡烛 B 与 A 的像重合"),
        translate("比较像距与物距"),
        translate("移动蜡烛 A，再找一次像的位置"),
        translate("打开光路，看反向延长线"),
      ],
    },
    {
      id: "refract",
      title: translate("光的折射"),
      sub: "Refraction",
      scene: "disk",
      record: "snell",
      params: {
        mode: "block",
        from: "air",
        i: 45,
        material: "glass",
        lambda: 589,
      },
      controls: ["i", "material", "lambda"],
      tabs: ["angles", "snell"],
      cam: [
        [0.05, 0.62, 0.52],
        [0, 0.08, 0],
      ],
      body: translate(
        '<p>激光从空气斜射入<b>半圆形玻璃砖</b>的平面中心。光进入玻璃后偏向法线，折射角 r 小于入射角 i；从弧面射出时沿半径方向，不再偏折，便于读数。</p><p>多测几组 i、r 会发现 i 与 r 并不成正比，而是它们的正弦成正比——<b>折射定律</b>：</p><p class="eq">n = sin i / sin r</p><p>n 叫这种介质的<b>折射率</b>。在数据坞中画出 sin i - sin r 图像，斜率就是 n。换成水（1.33）、钻石（2.42）比较。</p>',
      ),
      steps: [
        translate("改变入射角，记录 i 和 r"),
        translate("在 sin i-sin r 图上读出斜率 n"),
        translate("更换介质，比较折射率"),
        translate("改变波长，观察 n 的微小变化"),
      ],
    },
    {
      id: "tir",
      title: translate("全反射与光纤"),
      sub: "Total internal reflection",
      scene: "disk",
      params: {
        mode: "tir",
        from: "glass",
        i: 30,
        material: "glass",
        lambda: 532,
        view: "block",
      },
      controls: ["view", "i", "material"],
      tabs: ["tirinfo"],
      cam: [
        [0.05, 0.62, 0.52],
        [0, 0.08, 0],
      ],
      body: translate(
        '<p>光从<b>玻璃射向空气</b>时，折射角大于入射角。增大入射角，折射光越来越靠近界面、越来越暗，反射光越来越亮。</p><p>当入射角达到<b>临界角 C</b> 时折射角为 90°，再增大入射角，折射光完全消失，只剩反射光——这就是<b>全反射</b>：</p><p class="eq">sin C = 1 / n</p><p>玻璃的临界角约 41°，钻石只有 24°，所以钻石格外闪亮。切换到<b>光纤</b>：光在纤芯与包层的界面上不断全反射，即使光纤弯曲，光也能从另一端射出。</p>',
      ),
      steps: [
        translate("增大入射角，观察折射光与反射光的亮度"),
        translate("找到折射光恰好消失的临界角"),
        translate("换成钻石，比较临界角"),
        translate("切换到光纤"),
      ],
    },
    {
      id: "prism",
      title: translate("棱镜色散"),
      sub: "Dispersion",
      scene: "prism",
      params: {
        rot: 0,
        second: !1,
        source: "white",
      },
      controls: ["source", "rot", "second"],
      tabs: ["prisminfo"],
      cam: [
        [-0.12, 0.62, 0.62],
        [0.12, 0.08, -0.04],
      ],
      body: translate(
        "<p>一束白光穿过三棱镜后，在光屏上展开成<b>红、橙、黄、绿、蓝、靛、紫</b>的彩色光带——光的<b>色散</b>。牛顿用这个实验证明：白光是由各种色光混合而成的。</p><p>同一种玻璃对不同色光的折射率不同：紫光的折射率最大，偏折最多；红光最小，偏折最少。</p><p>改用单色的红色激光，经过棱镜后只偏折、不再分开。在后面加一块<b>倒置的棱镜</b>，各色光又重新会合成白光。</p>",
      ),
      steps: [
        translate("观察光屏上的光谱顺序"),
        translate("转动棱镜，找偏折最小的位置"),
        translate("换成红色激光比较"),
        translate("加入第二块棱镜合成白光"),
      ],
    },
    {
      id: "lens",
      title: translate("凸透镜成像规律"),
      sub: "Converging lens",
      scene: "lens",
      record: "uv",
      params: {
        f: 0.1,
        u: 0.3,
        s: 0.2,
        rays: !0,
        autoFocus: !1,
      },
      controls: ["f", "u", "s", "rays"],
      tabs: ["uv", "uvfit", "lenscases"],
      cam: [
        [-0.05, 0.36, 0.78],
        [0.02, 0.07, 0],
      ],
      body: translate(
        '<p>把蜡烛、凸透镜、光屏依次放在<b>光具座</b>上，烛焰、透镜、光屏的中心大致在同一高度。移动光屏直到屏上的像<b>最清晰</b>，读出物距 u 和像距 v。</p><p>· u &gt; 2f：倒立、缩小的实像（照相机）<br>· u = 2f：倒立、等大的实像<br>· f &lt; u &lt; 2f：倒立、放大的实像（投影仪）<br>· u = f：不成像<br>· u &lt; f：正立、放大的<b>虚像</b>（放大镜），光屏上接收不到</p><p class="eq">1/u + 1/v = 1/f</p><p>记录多组 u、v，在数据坞中画 1/u - 1/v 图像，截距就是 1/f。</p>',
      ),
      steps: [
        translate("拖动光屏找到最清晰的像"),
        translate("按记录数据保存 u、v"),
        translate("依次让 u > 2f、u = 2f、f < u < 2f"),
        translate("把蜡烛移到焦点以内，透过透镜看虚像"),
      ],
    },
    {
      id: "eye",
      title: translate("眼睛与视力矫正"),
      sub: "The eye",
      scene: "eye",
      params: {
        eye: "normal",
        dEye: 3,
        glasses: 0,
      },
      controls: ["eye", "dEye", "glasses"],
      tabs: ["eyeinfo"],
      cam: [
        [-0.05, 0.42, 0.62],
        [0.05, 0.08, 0],
      ],
      body: translate(
        '<p>眼睛像一架照相机：<b>晶状体</b>相当于凸透镜，<b>视网膜</b>相当于光屏。睫状体改变晶状体的厚薄（焦距），使远近不同的物体都能在视网膜上成清晰的像。</p><p><b>近视眼</b>：眼球前后径过长（或晶状体太厚），远处物体的像落在视网膜<b>前方</b>，看不清远处。用<b>凹透镜</b>使光线发散一些来矫正。</p><p><b>远视眼</b>：像落在视网膜<b>后方</b>，看不清近处。用<b>凸透镜</b>矫正。</p><p class="eq">眼镜度数 = 光焦度 × 100 = 100 / f（f 以 m 计）</p>',
      ),
      steps: [
        translate("改变物距，观察晶状体的调节"),
        translate("切换到近视眼，看远处的 E 字"),
        translate("戴上合适度数的凹透镜"),
        translate("切换到远视眼并用凸透镜矫正"),
      ],
    },
    {
      id: "double",
      title: translate("双缝干涉"),
      sub: "Young's double slit",
      scene: "slits",
      params: {
        slitMode: "double",
        lambda: 632.8,
        d: 0.25,
        a: 0.02,
        L: 0.75,
        wave: !0,
        white: !1,
      },
      controls: ["lambda", "d", "L", "white", "wave"],
      tabs: ["profile", "fringeinfo"],
      cam: [
        [-0.1, 0.55, 0.85],
        [0.05, 0.08, 0],
      ],
      body: translate(
        '<p>激光照到相距很近的两条狭缝上，两缝相当于两个<b>相干光源</b>。两列光波在光屏上叠加：光程差为波长整数倍处加强，出现<b>亮纹</b>；为半波长奇数倍处减弱，出现<b>暗纹</b>。</p><p class="eq">Δx = L λ / d</p><p>相邻亮纹的间距 Δx 与屏距 L、波长 λ 成正比，与缝距 d 成反比。台面上的彩色波纹是两列波叠加的示意（波长已放大）。</p><p>用测量头测出 n 条亮纹的总宽度，就能算出光的波长。换成白光，中央是白色亮纹，两侧是彩色条纹。</p>',
      ),
      steps: [
        translate("改变缝距 d，观察条纹疏密"),
        translate("改变屏距 L 与波长 λ"),
        translate("在光强分布图中测量 Δx"),
        translate("换成白光观察彩色条纹"),
      ],
    },
    {
      id: "diffraction",
      title: translate("单缝衍射与光栅"),
      sub: "Diffraction",
      scene: "slits",
      params: {
        slitMode: "single",
        lambda: 632.8,
        a: 0.12,
        d: 0.25,
        lines: 300,
        L: 0.75,
        wave: !1,
        white: !1,
      },
      controls: ["slitMode", "lambda", "a", "lines", "white"],
      tabs: ["profile", "fringeinfo"],
      cam: [
        [-0.1, 0.55, 0.85],
        [0.05, 0.08, 0],
      ],
      body: translate(
        '<p>光通过很窄的单缝后，屏上出现中央宽而亮、两侧窄而暗的条纹——光的<b>衍射</b>。缝越窄，中央亮纹越宽，衍射越明显。</p><p class="eq">中央亮纹半宽 x₁ = L λ / a</p><p>与双缝干涉条纹（等间距）不同，单缝衍射条纹<b>中央亮纹的宽度是其他亮纹的两倍</b>。</p><p><b>光栅</b>有大量等间距的狭缝，主极大非常细锐明亮：d sinθ = kλ。用白光照射，各级出现彩色光谱，紫光偏折最小、红光最大——与棱镜正好相反。</p>',
      ),
      steps: [
        translate("减小缝宽，观察中央亮纹变宽"),
        translate("比较单缝与双缝条纹的区别"),
        translate("切换到光栅，改变每毫米刻线数"),
        translate("用白光照射光栅"),
      ],
    },
    {
      id: "film",
      title: translate("薄膜干涉"),
      sub: "Thin films",
      scene: "film",
      params: {
        filmMode: "soap",
        mono: !1,
        R: 1,
        lambda: 589,
      },
      controls: ["filmMode", "mono", "R"],
      tabs: ["filminfo"],
      cam: [
        [-0.22, 0.2, 0.42],
        [0.05, 0.11, 0],
      ],
      body: translate(
        '<p>把铁丝圈从肥皂液中提起，竖直放置。膜在重力作用下<b>上薄下厚</b>。光在膜的前后两个表面反射，两列反射光叠加：厚度 t 满足 2nt = kλ 附近相互减弱，(k + ½)λ 附近相互加强。</p><p>同一厚度对应同一种颜色，所以出现水平的<b>彩色条纹</b>；膜不断变薄，条纹向下移动，最上方变成<b>黑色</b>，随后膜破裂。用黄色钠光照射，只看到明暗相间的黄黑条纹。</p><p><b>牛顿环</b>：平凸透镜压在平板玻璃上，空气膜厚度 t = r²/2R，形成内疏外密的同心圆环：</p><p class="eq">r<sub>k</sub> = √(kλR)</p>',
      ),
      steps: [
        translate("观察肥皂膜条纹的颜色与移动"),
        translate("换成钠光，看明暗条纹"),
        translate("切换到牛顿环"),
        translate("改变透镜曲率半径 R"),
      ],
    },
    {
      id: "polar",
      title: translate("光的偏振"),
      sub: "Polarization",
      scene: "polar",
      record: "malus",
      params: {
        p1: 0,
        p2: 0,
        lcd: !1,
        lcdOn: !1,
      },
      controls: ["p1", "p2", "lcd", "lcdOn"],
      tabs: ["malus", "polarinfo"],
      cam: [
        [-0.05, 0.4, 0.72],
        [0.05, 0.1, 0],
      ],
      body: translate(
        '<p>光是<b>横波</b>。自然光在垂直于传播方向的平面内沿各个方向振动；通过<b>偏振片</b>后，只剩沿透振方向振动的光——<b>线偏振光</b>，强度减半。</p><p>再用第二块偏振片（检偏器）观察：转动检偏器，透射光强周期性变化，两透振方向垂直时完全消光。<b>马吕斯定律</b>：</p><p class="eq">I = I₀ cos²θ</p><p><b>液晶显示屏</b>：两块正交的偏振片之间夹着扭曲的液晶，液晶把偏振方向转 90°，光能通过（亮）；加电压后液晶分子竖直排列不再旋转，光被挡住（暗）。</p>',
      ),
      steps: [
        translate("转动检偏器，观察光强变化"),
        translate("按“扫描 θ”自动记录 I-θ"),
        translate("对照 cos²θ 曲线"),
        translate("插入液晶盒，切换通电"),
      ],
    },
    {
      id: "free",
      title: translate("自由光学台"),
      sub: "Sandbox",
      scene: "free",
      params: {},
      controls: [],
      tabs: ["freeinfo"],
      cam: [
        [0, 0.95, 0.75],
        [0, 0.05, 0],
      ],
      body: translate(
        "<p>所有几何光学元件开放：激光器、白光光源、平面镜、凸透镜、凹透镜、半圆砖、长方砖、三棱镜、光屏。</p><p>· 点击面板上的按钮<b>添加元件</b><br>· 拖动元件<b>移动</b>，拖动元件上方的<b>金色圆环</b>旋转<br>· 选中后按 <b>Delete</b> 删除</p><p>试着搭一个潜望镜、一个望远镜，或者让一束光在几面镜子之间来回反射。</p>",
      ),
      steps: [
        translate("添加光源和元件"),
        translate("搭建自己的光路"),
        translate("用光屏观察光斑"),
      ],
    },
  ],
  N = 0.11,
  se = {
    x0: -0.95,
    x1: 0.95,
    y0: -0.5,
    y1: 0.5,
    thick: 0.06,
    floor: -0.78,
  };
function Ln() {
  const s = document.createElement("canvas");
  ((s.width = 2048), (s.height = 1080));
  const o = s.getContext("2d"),
    i = document.createElement("canvas");
  ((i.width = 2048), (i.height = 1080));
  const r = i.getContext("2d");
  ((o.fillStyle = "#1a1c20"),
    o.fillRect(0, 0, 2048, 1080),
    (r.fillStyle = "#9a9a9a"),
    r.fillRect(0, 0, 2048, 1080));
  for (let f = 0; f < 9e3; f++) {
    const b = 26 + Math.random() * 14;
    ((o.fillStyle = `rgba(${b},${b + 1},${b + 4},.5)`),
      o.fillRect(
        Math.random() * 2048,
        Math.random() * 1080,
        1 + Math.random() * 30,
        1,
      ));
  }
  const l = 76,
    a = 40,
    c = 2048 / l,
    d = 1080 / a;
  for (let f = 0; f < l; f++)
    for (let b = 0; b < a; b++) {
      const w = (f + 0.5) * c,
        m = (b + 0.5) * d,
        p = o.createRadialGradient(w, m - 1, 1, w, m, c * 0.24);
      (p.addColorStop(0, "#050506"),
        p.addColorStop(0.75, "#0b0c0e"),
        p.addColorStop(1, "rgba(60,64,70,.9)"),
        (o.fillStyle = p),
        o.beginPath(),
        o.arc(w, m, c * 0.22, 0, 7),
        o.fill(),
        (r.fillStyle = "#ffffff"),
        r.beginPath(),
        r.arc(w, m, c * 0.22, 0, 7),
        r.fill());
    }
  const u = new be(s);
  ((u.colorSpace = we), (u.anisotropy = 8));
  const h = new be(i);
  return (
    (h.anisotropy = 8),
    {
      map: u,
      rough: h,
    }
  );
}
function En() {
  const t = document.createElement("canvas");
  t.width = t.height = 1024;
  const s = t.getContext("2d"),
    o = 1024 / 2;
  ((s.fillStyle = "#e9e5da"),
    s.beginPath(),
    s.arc(o, o, o - 2, 0, 7),
    s.fill(),
    (s.strokeStyle = "#1b1d21"),
    (s.fillStyle = "#1b1d21"),
    s.translate(o, o));
  for (let r = 0; r < 360; r++) {
    const l = (r * Math.PI) / 180,
      a = r % 10 === 0 ? 46 : r % 5 === 0 ? 30 : 18;
    ((s.lineWidth = r % 10 === 0 ? 3 : 1.6),
      s.beginPath(),
      s.moveTo(Math.cos(l) * (o - 8), Math.sin(l) * (o - 8)),
      s.lineTo(Math.cos(l) * (o - 8 - a), Math.sin(l) * (o - 8 - a)),
      s.stroke());
  }
  ((s.font = "600 28px 'JetBrains Mono', Menlo, monospace"),
    (s.textAlign = "center"),
    (s.textBaseline = "middle"));
  for (let r = 0; r < 360; r += 10) {
    const l = (r * Math.PI) / 180,
      a = r % 180,
      c = a <= 90 ? a : 180 - a;
    (s.save(),
      s.translate(Math.cos(l) * (o - 82), Math.sin(l) * (o - 82)),
      s.rotate(l + Math.PI / 2),
      s.fillText(String(c), 0, 0),
      s.restore());
  }
  ((s.lineWidth = 2),
    s.setLineDash([14, 10]),
    (s.strokeStyle = "rgba(27,29,33,.55)"),
    s.beginPath(),
    s.moveTo(-o + 110, 0),
    s.lineTo(o - 110, 0),
    s.stroke(),
    s.setLineDash([]),
    (s.strokeStyle = "rgba(27,29,33,.8)"),
    s.beginPath(),
    s.moveTo(0, -o + 110),
    s.lineTo(0, o - 110),
    s.stroke(),
    (s.fillStyle = "#c0392b"),
    s.beginPath(),
    s.arc(0, 0, 7, 0, 7),
    s.fill());
  const i = new be(t);
  return ((i.colorSpace = we), (i.anisotropy = 8), i);
}
function xn(e) {
  const t = Z(),
    s = new W();
  e.add(s);
  const o = Ln(),
    i = se.x1 - se.x0,
    r = se.y1 - se.y0,
    l = new P(
      new ae(i, se.thick, r, 3, 0.006),
      new D({
        map: o.map,
        roughnessMap: o.rough,
        roughness: 0.55,
        metalness: 0.6,
        envMapIntensity: 0.6,
      }),
    );
  (l.position.set(0, -0.06 / 2, 0), s.add(l));
  const a = new D({
      color: "#2c3036",
      metalness: 0.7,
      roughness: 0.45,
    }),
    c = -0.06 - se.floor;
  for (const f of [se.x0 + 0.14, se.x1 - 0.14])
    for (const b of [se.y0 + 0.14, se.y1 - 0.14]) {
      const w = new P(new O(0.06, 0.07, c, 32), a);
      (w.position.set(f, se.floor + c / 2, b), s.add(w));
      const m = new P(new O(0.075, 0.075, 0.03, 32), t.darkSteel);
      (m.position.set(f, -0.06 - 0.015, b), s.add(m));
    }
  const d = new P(
    new fe(i - 0.02, 0.012, 0.002),
    new D({
      color: "#3a3f47",
      metalness: 0.8,
      roughness: 0.3,
    }),
  );
  (d.position.set(0, -0.06 / 2, se.y1 + 0.001),
    s.add(d),
    K(s),
    (l.castShadow = !1));
  const u = new W();
  {
    const b = new Gt();
    [
      [-0.03, 0],
      [0.03, 0],
      [0.03, 0.006],
      [0.018, 0.012],
      [0.018, 0.022],
      [-0.018, 0.022],
      [-0.018, 0.012],
      [-0.03, 0.006],
    ].forEach(([g, $], I) => (I ? b.lineTo(g, $) : b.moveTo(g, $)));
    const w = new Wt(b, {
      depth: 1.3,
      bevelEnabled: !0,
      bevelSize: 6e-4,
      bevelThickness: 6e-4,
      bevelSegments: 2,
    });
    (w.rotateY(Math.PI / 2), w.translate(-1.3 / 2, 0, 0));
    const m = new P(
        w,
        new D({
          color: "#5d636b",
          metalness: 0.9,
          roughness: 0.42,
          roughnessMap: t.alu.roughnessMap,
        }),
      ),
      p = new P(
        new Q(1.3 - 0.02, 0.009),
        new D({
          map: Mn(1.3 - 0.02, {
            dark: !0,
          }),
          roughness: 0.5,
          metalness: 0.3,
        }),
      );
    (p.position.set(0, 0.009, 0.0302), (p.rotation.x = -0.46), u.add(m, p));
    for (const g of [-1.3 / 2 + 0.05, 1.3 / 2 - 0.05]) {
      const $ = new P(new ae(0.05, 0.012, 0.09, 2, 0.003), t.darkSteel);
      ($.position.set(g, -0.006, 0), u.add($));
    }
    u.length = 1.3;
  }
  ((u.position.y = 0.012), s.add(K(u)), (u.visible = !1));
  const h = new W();
  {
    const f = new P(new O(0.16, 0.16, 0.006, 96), [
      new D({
        color: "#d9d4c6",
        roughness: 0.6,
      }),
      new D({
        map: En(),
        roughness: 0.55,
      }),
      new D({
        color: "#d9d4c6",
        roughness: 0.6,
      }),
    ]);
    ((f.position.y = N - 0.007), (f.rotation.y = Math.PI / 2));
    const b = new P(new O(0.012, 0.012, N - 0.006, 24), t.chrome);
    b.position.y = (N - 0.006) / 2;
    const w = new P(new O(0.05, 0.055, 0.012, 48), t.darkSteel);
    ((w.position.y = 0.006), h.add(f, b, w), (h.plate = f));
  }
  return (
    s.add(K(h)),
    (h.visible = !1),
    {
      root: s,
      bench: u,
      disk: h,
    }
  );
}
const Cn = (e) => (Math.abs(e) < 1e-9 ? 1 : Math.sin(e) / e);
function An({ lambda: e, a: t, d: s = 0, N: o = 1, L: i }, r) {
  const l = e * 1e-9,
    a = r / Math.hypot(r, i),
    c = (Math.PI * t * a) / l;
  let d = Cn(c) ** 2;
  if (o > 1) {
    const u = (Math.PI * s * a) / l,
      h = Math.sin(u);
    d *= Math.abs(h) < 1e-9 ? 1 : (Math.sin(o * u) / (o * h)) ** 2;
  }
  return d;
}
const Rn = (e, t, s) => (t * e * 1e-9) / s,
  jn = (e, t, s, o = 1) => (o * s * e * 1e-9) / t,
  xt = (e, t, s = 1) => {
    const o = (s * e * 1e-9) / t;
    return Math.abs(o) > 1 ? null : Math.asin(o);
  },
  Tn = (e, t) => e * Math.cos(t) ** 2,
  Ct = (e, t, s = 1.33) => Math.sin((2 * Math.PI * s * t) / (e * 1e-9)) ** 2,
  Be = (e, t, s) => Math.sqrt(e * t * 1e-9 * s),
  $e = (e, t, s, o) => {
    const i = (e - t) / (e < t ? s : o);
    return Math.exp(-0.5 * i * i);
  };
function Ut(e) {
  return [
    1.056 * $e(e, 599.8, 37.9, 31) +
      0.362 * $e(e, 442, 16, 26.7) -
      0.065 * $e(e, 501.1, 20.4, 26.2),
    0.821 * $e(e, 568.8, 46.9, 40.5) + 0.286 * $e(e, 530.9, 16.3, 31.1),
    1.217 * $e(e, 437, 11.8, 36) + 0.681 * $e(e, 459, 26, 13.8),
  ];
}
const Xt = (e) =>
  e <= 0.0031308 ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055;
function Kt([e, t, s]) {
  const o = 3.2406 * e - 1.5372 * t - 0.4986 * s,
    i = -0.9689 * e + 1.8758 * t + 0.0415 * s,
    r = 0.0557 * e - 0.204 * t + 1.057 * s;
  return [o, i, r];
}
function Yt(e, t = 1) {
  let s = 0,
    o = 0,
    i = 0,
    r = 0;
  for (let c = 380; c <= 780; c += 5) {
    const [d, u, h] = Ut(c),
      f = e(c);
    ((s += d * f), (o += u * f), (i += h * f), (r += u));
  }
  const l = t / r;
  return Kt([s * l * 0.9505, o * l, i * l * 1.089]).map((c) =>
    Math.min(1, Math.max(0, Xt(Math.max(0, c)))),
  );
}
function oe(e) {
  const [t, s, o] = Kt(Ut(e)),
    i = Math.max(t, s, o, 1e-6),
    r =
      e < 420
        ? 0.35 + (0.65 * (e - 380)) / 40
        : e > 680
          ? 0.35 + (0.65 * (780 - e)) / 100
          : 1;
  return [t, s, o].map((l) =>
    Xt(Math.max(0, l / i) * Math.max(0.3, Math.min(1, r))),
  );
}
const Ge = (e) =>
    "#" +
    e
      .map((t) =>
        Math.round(Math.min(1, Math.max(0, t)) * 255)
          .toString(16)
          .padStart(2, "0"),
      )
      .join(""),
  at = new Map();
function Jt(e, t) {
  const s = t ? `w${e}` : e;
  if (at.has(s)) return at.get(s);
  const o = new ge().setRGB(...oe(e), we);
  return (at.set(s, o), o);
}
const it = new Map(),
  Hn = (e) => (it.has(e) || it.set(e, new ge(e)), it.get(e));
function Bn(e) {
  const t = new W();
  e.add(t);
  const s = new O(1, 1, 1, 8, 1, !0);
  (s.translate(0, 0.5, 0), s.rotateX(Math.PI / 2));
  const o = [],
    i = new _(0, 0, 1),
    r = new _(),
    l = new _(),
    a = new _();
  let c = 1,
    d = 1;
  function u(f) {
    if (o[f]) return o[f];
    const b = new P(
        s,
        new Y({
          color: "#fff",
          transparent: !0,
          blending: Oe,
          depthWrite: !1,
          toneMapped: !1,
        }),
      ),
      w = new P(
        s,
        new Y({
          color: "#fff",
          transparent: !0,
          blending: Oe,
          depthWrite: !1,
          toneMapped: !1,
        }),
      );
    return (
      (b.frustumCulled = w.frustumCulled = !1),
      t.add(b, w),
      (o[f] = {
        core: b,
        halo: w,
      }),
      o[f]
    );
  }
  function h(f, { whiteCount: b = 10, h: w = N, vertical: m = !1 } = {}) {
    let p = 0;
    for (const g of f) {
      m
        ? (r.set(g.a[0], w + g.a[1], 0), l.set(g.b[0], w + g.b[1], 0))
        : (r.set(g.a[0], w, g.a[1]), l.set(g.b[0], w, g.b[1]));
      const $ = r.distanceTo(l);
      if ($ < 1e-5) continue;
      const I = u(p++),
        L = g.tint ? Hn(g.tint) : Jt(g.lambda, g.white),
        v = (g.white ? 2.6 / b : 1) * Math.min(1, g.I) * d;
      a.subVectors(l, r).normalize();
      for (const [k, C, S] of [
        [I.core, 9e-4, 1 * v],
        [I.halo, 0.0042, 0.16 * v * c],
      ])
        ((k.visible = S > 0.004),
          k.position.copy(r),
          k.quaternion.setFromUnitVectors(i, a),
          k.scale.set(C, C, $),
          k.material.color.copy(L).multiplyScalar(k === I.core ? 2.2 : 1),
          (k.material.opacity = Math.min(1, S)));
    }
    for (let g = p; g < o.length; g++)
      ((o[g].core.visible = !1), (o[g].halo.visible = !1));
  }
  return {
    group: t,
    set: h,
    setHaze: (f) => (c = f),
    setBrightness: (f) => (d = f),
  };
}
const Fn = {
    i: {
      type: "range",
      label: translate("入射角 i"),
      min: 0,
      max: 85,
      step: 0.5,
      show: (e) => `${e.toFixed(1)}°`,
    },
    lambda: {
      type: "range",
      label: translate("波长 λ"),
      min: 400,
      max: 700,
      step: 1,
      show: (e) => `${e.toFixed(e % 1 ? 1 : 0)} nm`,
    },
    material: {
      type: "seg",
      label: translate("介质"),
      options: [
        ["water", translate("水")],
        ["glass", translate("玻璃")],
        ["flint", translate("火石玻璃")],
        ["diamond", translate("钻石")],
      ],
    },
    view: {
      type: "seg",
      label: translate("演示"),
      options: [
        ["block", translate("半圆砖")],
        ["fiber", translate("光纤")],
      ],
    },
    u: {
      type: "range",
      label: translate("物距 u"),
      min: 0.04,
      max: 0.45,
      step: 0.005,
      show: (e) => `${(e * 100).toFixed(1)} cm`,
    },
    s: {
      type: "range",
      label: translate("光屏到透镜的距离"),
      min: 0.05,
      max: 0.55,
      step: 0.002,
      show: (e) => `${(e * 100).toFixed(1)} cm`,
    },
    f: {
      type: "seg",
      label: translate("焦距 f"),
      options: [
        [0.05, "5 cm"],
        [0.1, "10 cm"],
        [0.15, "15 cm"],
      ],
    },
    rays: {
      type: "toggle",
      label: translate("显示光路"),
    },
    rot: {
      type: "range",
      label: translate("棱镜转角"),
      min: -30,
      max: 30,
      step: 0.5,
      show: (e) => `${e.toFixed(1)}°`,
    },
    second: {
      type: "toggle",
      label: translate("第二块倒置棱镜"),
    },
    source: {
      type: "seg",
      label: translate("光源"),
      options: [
        ["white", translate("白光")],
        ["red", translate("红光")],
        ["green", translate("绿光")],
      ],
    },
    eye: {
      type: "seg",
      label: translate("眼睛"),
      options: [
        ["normal", translate("正常眼")],
        ["myopia", translate("近视眼")],
        ["hyperopia", translate("远视眼")],
      ],
    },
    d: {
      type: "range",
      label: translate("缝距 d"),
      min: 0.1,
      max: 0.6,
      step: 0.01,
      show: (e) => `${e.toFixed(2)} mm`,
    },
    dEye: {
      type: "range",
      label: translate("物距"),
      min: 0.15,
      max: 8,
      step: 0.05,
      show: (e) => `${e.toFixed(2)} m`,
    },
    glasses: {
      type: "range",
      label: translate("眼镜光焦度"),
      min: -5,
      max: 5,
      step: 0.25,
      show: (e) =>
        e
          ? `${e > 0 ? "+" : "−"}${Math.abs(e).toFixed(2)} D（${Math.round(Math.abs(e) * 100)}°）`
          : translate("不戴眼镜"),
    },
    a: {
      type: "range",
      label: translate("缝宽 a"),
      min: 0.03,
      max: 0.4,
      step: 0.005,
      show: (e) => `${e.toFixed(3)} mm`,
    },
    L: {
      type: "range",
      label: translate("屏距 L"),
      min: 0.4,
      max: 0.85,
      step: 0.01,
      show: (e) => `${(e * 100).toFixed(0)} cm`,
    },
    wave: {
      type: "toggle",
      label: translate("显示波阵面示意"),
    },
    white: {
      type: "toggle",
      label: translate("改用白光"),
    },
    slitMode: {
      type: "seg",
      label: translate("衍射元件"),
      options: [
        ["single", translate("单缝")],
        ["double", translate("双缝")],
        ["grating", translate("光栅")],
      ],
    },
    lines: {
      type: "range",
      label: translate("光栅刻线"),
      min: 50,
      max: 600,
      step: 10,
      show: (e) => translate("{0} 条/mm", [e]),
    },
    filmMode: {
      type: "seg",
      label: translate("实验"),
      options: [
        ["soap", translate("肥皂膜")],
        ["newton", translate("牛顿环")],
      ],
    },
    mono: {
      type: "toggle",
      label: translate("钠光（单色）照明"),
    },
    R: {
      type: "range",
      label: translate("透镜曲率半径 R"),
      min: 0.3,
      max: 3,
      step: 0.05,
      show: (e) => `${e.toFixed(2)} m`,
    },
    p1: {
      type: "range",
      label: translate("起偏器方向"),
      min: 0,
      max: 180,
      step: 1,
      show: (e) => `${e.toFixed(0)}°`,
    },
    p2: {
      type: "range",
      label: translate("检偏器方向"),
      min: 0,
      max: 180,
      step: 1,
      show: (e) => `${e.toFixed(0)}°`,
    },
    lcd: {
      type: "toggle",
      label: translate("插入液晶盒"),
    },
    lcdOn: {
      type: "toggle",
      label: translate("液晶通电"),
    },
  },
  zn = (e, t, s, o) => yn(e, t, s, o, Fn),
  Dn = {
    air: {
      A: 1,
      B: 0,
    },
    water: {
      A: 1.3199,
      B: 0.00309,
    },
    glass: {
      A: 1.5046,
      B: 0.0042,
    },
    flint: {
      A: 1.6,
      B: 0.0125,
    },
    diamond: {
      A: 2.38,
      B: 0.0134,
    },
    fiber: {
      A: 1.48,
      B: 0.0042,
    },
  };
function Se(e, t = 589) {
  const s = typeof e == "string" ? Dn[e] : e,
    o = t / 1e3;
  return s.A + s.B / (o * o);
}
const _n = 1e-9,
  et = (e, t) => [e[0] - t[0], e[1] - t[1]],
  de = (e, t) => e[0] * t[0] + e[1] * t[1],
  _e = (e) => {
    const t = Math.hypot(e[0], e[1]) || 1;
    return [e[0] / t, e[1] / t];
  },
  We = (e) => [Math.cos(e), Math.sin(e)];
function Nn(e, t, s, o) {
  const i = et(o, s),
    r = t[0] * i[1] - t[1] * i[0];
  if (Math.abs(r) < 1e-14) return null;
  const l = et(s, e),
    a = (l[0] * i[1] - l[1] * i[0]) / r,
    c = (l[0] * t[1] - l[1] * t[0]) / r;
  return a <= _n || c < -1e-9 || c > 1 + 1e-9
    ? null
    : {
        t: a,
        u: c,
      };
}
const Je = (e, t) => {
  const s = 2 * de(e, t);
  return [e[0] - s * t[0], e[1] - s * t[1]];
};
function qn(e, t, s, o) {
  const i = -de(e, t),
    r = s / o,
    l = r * r * (1 - i * i);
  if (l > 1)
    return {
      dir: Je(e, t),
      R: 1,
      tir: !0,
    };
  const a = Math.sqrt(1 - l),
    c = _e([r * e[0] + (r * i - a) * t[0], r * e[1] + (r * i - a) * t[1]]),
    d = (s * i - o * a) / (s * i + o * a),
    u = (o * i - s * a) / (o * i + s * a);
  return {
    dir: c,
    R: (d * d + u * u) / 2,
    tir: !1,
  };
}
function ft(e, t, s = 0, o = 96) {
  const i = [];
  for (let r = 0; r <= o; r++) {
    const l = s - Math.PI / 2 + (r / o) * Math.PI;
    i.push([e[0] + t * Math.cos(l), e[1] + t * Math.sin(l)]);
  }
  return (
    (i.arcs = Array.from(
      {
        length: o,
      },
      () => ({
        c: e,
        sign: 1,
      }),
    )),
    i
  );
}
function On(e, t, s, o = 0) {
  const i = Math.cos(o),
    r = Math.sin(o);
  return [
    [-t / 2, -s / 2],
    [t / 2, -s / 2],
    [t / 2, s / 2],
    [-t / 2, s / 2],
  ].map(([l, a]) => [e[0] + l * i - a * r, e[1] + l * r + a * i]);
}
function Pe(e, t, s = Math.PI / 3, o = 0) {
  const i = t / 2 / Math.tan(s / 2),
    r = [
      [-t / 2, -i / 3],
      [t / 2, -i / 3],
      [0, (2 * i) / 3],
    ],
    l = Math.cos(o),
    a = Math.sin(o);
  return r.map(([c, d]) => [e[0] + c * l - d * a, e[1] + c * a + d * l]);
}
function Gn(e, t, s, o, i, r = 0.12, l = 80) {
  const a = [],
    c = [],
    d = (I, L) => [e[0] + I * Math.cos(L), e[1] + I * Math.sin(L)],
    u = [-Math.sin(o), Math.cos(o)],
    h = [-Math.sin(i), Math.cos(i)],
    f = d(t + s / 2, o),
    b = d(t - s / 2, o);
  (a.push([f[0] - u[0] * r, f[1] - u[1] * r]),
    c.push([b[0] - u[0] * r, b[1] - u[1] * r]));
  for (let I = 0; I <= l; I++) {
    const L = o + ((i - o) * I) / l;
    (a.push(d(t + s / 2, L)), c.push(d(t - s / 2, L)));
  }
  const w = d(t + s / 2, i),
    m = d(t - s / 2, i);
  (a.push([w[0] + h[0] * r, w[1] + h[1] * r]),
    c.push([m[0] + h[0] * r, m[1] + h[1] * r]));
  const p = c.length - 1,
    g = [];
  for (let I = 0; I < p; I++)
    g.push(
      I === 0 || I === p - 1
        ? null
        : {
            c: e,
            sign: -1,
          },
    );
  g.push(null);
  for (let I = 0; I < p; I++)
    g.push(
      I === 0 || I === p - 1
        ? null
        : {
            c: e,
            sign: 1,
          },
    );
  g.push(null);
  let $ = [...c, ...a.reverse()];
  if (Wn($) < 0) {
    $ = $.reverse();
    const I = g.length,
      L = g.map((v, k) => g[(I - 2 - k + I) % I]);
    $.arcs = L;
  } else $.arcs = g;
  return $;
}
function Wn(e) {
  let t = 0;
  for (let s = 0; s < e.length; s++) {
    const o = e[s],
      i = e[(s + 1) % e.length];
    t += o[0] * i[1] - o[1] * i[0];
  }
  return t / 2;
}
const Qt = [410, 440, 470, 500, 530, 560, 590, 620, 650, 690];
function Vn(e) {
  const t = We(e.angle ?? 0);
  if (e.kind === "laser")
    return [
      {
        o: e.p,
        d: t,
        lambda: e.lambda ?? 650,
        I: 1,
      },
    ];
  if (e.kind === "white")
    return (e.lambdas || Qt).map((i) => ({
      o: e.p,
      d: t,
      lambda: i,
      I: 1,
      white: !0,
    }));
  if (e.kind === "parallel") {
    const i = e.count ?? 7,
      r = e.width ?? 0.04,
      l = [-t[1], t[0]];
    return Array.from(
      {
        length: i,
      },
      (a, c) => {
        const d = i === 1 ? 0 : (c / (i - 1) - 0.5) * r;
        return {
          o: [e.p[0] + l[0] * d, e.p[1] + l[1] * d],
          d: t,
          lambda: e.lambda ?? 560,
          I: 1,
        };
      },
    );
  }
  const s = e.count ?? 9,
    o = e.spread ?? 0.4;
  return Array.from(
    {
      length: s,
    },
    (i, r) => ({
      o: e.p,
      d: We((e.angle ?? 0) + (s === 1 ? 0 : (r / (s - 1) - 0.5) * o)),
      lambda: e.lambda ?? 580,
      I: 1,
    }),
  );
}
function Un(e) {
  if (e.kind === "block") {
    const o = [],
      i = e.poly;
    for (let r = 0; r < i.length; r++) {
      const l = i[r],
        a = i[(r + 1) % i.length],
        c = _e([a[1] - l[1], -(a[0] - l[0])]);
      o.push({
        el: e,
        a: l,
        b: a,
        N: c,
        arc: i.arcs?.[r] || null,
      });
    }
    return o;
  }
  if (e.kind === "lens") {
    const o = We(e.angle ?? 0),
      i = [-o[1], o[0]],
      r = (e.aperture ?? 0.05) / 2;
    return [
      {
        el: e,
        a: [e.p[0] - i[0] * r, e.p[1] - i[1] * r],
        b: [e.p[0] + i[0] * r, e.p[1] + i[1] * r],
      },
    ];
  }
  const t = We(e.angle ?? 0),
    s = (e.len ?? 0.1) / 2;
  return [
    {
      el: e,
      a: [e.p[0] - t[0] * s, e.p[1] - t[1] * s],
      b: [e.p[0] + t[0] * s, e.p[1] + t[1] * s],
      N: [-t[1], t[0]],
    },
  ];
}
function xe(e, t, { maxDepth: s = 40, minI: o = 0.015, bound: i = 4 } = {}) {
  const r = e.flatMap(Un),
    l = [],
    a = [],
    c = [];
  for (const u of t)
    for (const h of Vn(u))
      c.push({
        ...h,
        inside: null,
        depth: 0,
      });
  let d = 0;
  for (; c.length && d++ < 4e3;) {
    const u = c.pop();
    let h = u.o,
      f = _e(u.d),
      b = u.I,
      w = u.inside,
      m = u.depth;
    for (; m++ < s && b >= o;) {
      let p = null;
      for (const v of r) {
        const k = Nn(h, f, v.a, v.b);
        k &&
          (!p || k.t < p.t) &&
          (p = {
            ...k,
            e: v,
          });
      }
      if (!p) {
        l.push({
          a: h,
          b: [h[0] + f[0] * i, h[1] + f[1] * i],
          lambda: u.lambda,
          I: b,
          inside: w,
          white: u.white,
        });
        break;
      }
      const g = [h[0] + f[0] * p.t, h[1] + f[1] * p.t];
      l.push({
        a: h,
        b: g,
        lambda: u.lambda,
        I: b,
        inside: w,
        white: u.white,
      });
      const { el: $, arc: I } = p.e;
      let L = p.e.N;
      if (I) {
        const v = _e(et(g, I.c));
        L = [v[0] * I.sign, v[1] * I.sign];
      }
      if ($.kind === "screen") {
        a.push({
          el: $,
          s: (p.u - 0.5) * ($.len ?? 0.1),
          lambda: u.lambda,
          I: b,
          p: g,
          d: f,
          white: u.white,
        });
        break;
      }
      if ($.kind === "stop") break;
      if ($.kind === "mirror") {
        if (de(f, L) >= 0 && !$.twoSided) break;
        ((f = Je(f, de(f, L) < 0 ? L : [-L[0], -L[1]])), (h = g));
        continue;
      }
      if ($.kind === "splitter") {
        const v = $.R ?? 0.3,
          k = de(f, L) < 0 ? L : [-L[0], -L[1]];
        (b * v >= o &&
          c.push({
            o: g,
            d: Je(f, k),
            lambda: u.lambda,
            I: b * v,
            inside: w,
            depth: m,
            white: u.white,
          }),
          (b *= 1 - v),
          (h = g));
        continue;
      }
      if ($.kind === "lens") {
        const v = We($.angle ?? 0),
          k = [-v[1], v[0]],
          C = de(et(g, $.p), k),
          S = de(f, v),
          j = de(f, k),
          H = Math.sign(S) || 1,
          q = j / Math.abs(S) - C / $.f;
        ((f = _e([H * v[0] + q * k[0], H * v[1] + q * k[1]])), (h = g));
        continue;
      }
      if ($.kind === "block") {
        const v = Se($.material ?? "glass", u.lambda),
          k = de(f, L) < 0,
          C = k ? L : [-L[0], -L[1]],
          [S, j] = k ? [1, v] : [v, 1],
          H = qn(f, C, S, j);
        if (H.tir) {
          ((f = H.dir), (h = g));
          continue;
        }
        const q = b * H.R;
        (q >= o &&
          !$.noReflect &&
          c.push({
            o: g,
            d: Je(f, C),
            lambda: u.lambda,
            I: q,
            inside: w,
            depth: m,
            white: u.white,
          }),
          (b *= 1 - H.R),
          (f = H.dir),
          (w = k ? $ : null),
          (h = g));
        continue;
      }
      break;
    }
  }
  return {
    segments: l,
    hits: a,
  };
}
const rt = (e) => Math.asin(1 / e),
  Te = () =>
    new ue({
      color: "#dff3ff",
      roughness: 0.02,
      metalness: 0,
      transmission: 0.96,
      thickness: 0.02,
      ior: 1.5,
      transparent: !0,
      envMapIntensity: 1.3,
      attenuationColor: "#bfe6ff",
      attenuationDistance: 0.5,
    });
function Me(e = N - 0.02, { base: t = !0 } = {}) {
  const s = Z(),
    o = new W(),
    i = new P(
      new O(0.009, 0.009, e * 0.55, 24),
      new D({
        color: "#202328",
        metalness: 0.7,
        roughness: 0.4,
      }),
    );
  i.position.y = -N + e * 0.275 + 0.004;
  const r = new P(new O(0.0062, 0.0062, e, 24), s.chrome);
  if (((r.position.y = -N + e / 2 + 0.004), o.add(i, r), t)) {
    const l = new ae(0.05, 0.008, 0.05, 2, 0.002),
      a = new P(l, s.darkSteel);
    ((a.position.y = -N + 0.004), o.add(a));
    const c = new P(new O(0.004, 0.004, 0.004, 6), s.steel);
    (c.position.set(0.016, -N + 0.01, 0.016), o.add(c));
  }
  return o;
}
function Ve(e = N - 0.034) {
  const t = Z(),
    s = new W(),
    o = new P(
      new ae(0.04, 0.026, 0.07, 2, 0.003),
      new D({
        color: "#2b2f36",
        metalness: 0.6,
        roughness: 0.45,
      }),
    );
  o.position.y = -N + 0.034 + 0.002;
  const i = new P(new O(0.008, 0.008, 0.012, 20), t.red);
  ((i.rotation.x = Math.PI / 2), i.position.set(0, -N + 0.036, 0.04));
  const r = new P(
    new fe(0.0012, 0.004, 0.012),
    new Y({
      color: "#ffd25a",
    }),
  );
  r.position.set(0, -N + 0.022, 0.036);
  const l = new P(new O(0.0062, 0.0062, e, 24), t.chrome);
  return ((l.position.y = -N + 0.048 + e / 2 - 0.012), s.add(o, i, r, l), s);
}
function nt(e = "#ff3b2f") {
  const t = Z(),
    s = new W(),
    o = new P(
      new O(0.011, 0.011, 0.12, 40),
      new ue({
        color: "#16181c",
        metalness: 0.6,
        roughness: 0.35,
        clearcoat: 0.6,
      }),
    );
  ((o.rotation.z = Math.PI / 2), (o.position.x = -0.068));
  const i = new P(
    new O(0.0115, 0.0115, 0.025, 40, 1, !0),
    new D({
      color: "#3a3d42",
      metalness: 0.85,
      roughness: 0.5,
      wireframe: !1,
    }),
  );
  ((i.rotation.z = Math.PI / 2), (i.position.x = -0.1));
  const r = new P(new O(0.008, 0.011, 0.016, 40), t.chrome);
  ((r.rotation.z = -Math.PI / 2), (r.position.x = -0));
  const l = new P(
    new He(0.003, 20),
    new Y({
      color: new ge(e).multiplyScalar(2.5),
      toneMapped: !1,
    }),
  );
  ((l.rotation.y = Math.PI / 2), (l.position.x = 0.0082));
  const a = new P(new O(0.0035, 0.0035, 0.004, 16), t.red);
  a.position.set(-0.06, 0.011, 0);
  const c = new P(
    new Q(0.05, 0.008),
    new Y({
      map: je(["LASER  CLASS 2"], {
        w: 360,
        h: 56,
        accent: "#f2c94c",
      }),
      toneMapped: !1,
    }),
  );
  c.position.set(-0.07, 0, 0.0112);
  const d = new P(new ve(0.013, 0.003, 10, 32), t.darkSteel);
  ((d.rotation.y = Math.PI / 2),
    (d.position.x = -0.07),
    s.add(o, i, r, l, a, c, d));
  const u = Me();
  return (
    (u.position.x = -0.07),
    s.add(u),
    (s.setColor = (h) => l.material.color.set(new ge(h).multiplyScalar(2.5))),
    K(s)
  );
}
function Ue() {
  const e = Z(),
    t = new W(),
    s = new P(
      new ae(0.11, 0.075, 0.08, 3, 0.008),
      new ue({
        color: "#2b3a52",
        metalness: 0.4,
        roughness: 0.4,
        clearcoat: 0.5,
      }),
    );
  s.position.x = -0.062;
  const o = new P(new fe(0.004, 0.06, 0.06), e.darkSteel);
  o.position.x = -0.006;
  const i = new P(
    new Q(0.03, 0.004),
    new Y({
      color: new ge("#fff6e8").multiplyScalar(2.2),
      toneMapped: !1,
    }),
  );
  ((i.rotation.y = Math.PI / 2),
    (i.rotation.x = Math.PI / 2),
    (i.position.x = -0.0038),
    t.add(s, o, i));
  for (let a = 0; a < 6; a++) {
    const c = new P(new fe(0.08, 0.003, 0.07), e.aluDark);
    (c.position.set(-0.062, 0.04 + a * 0.006, 0), t.add(c));
  }
  const r = new P(
    new Q(0.06, 0.013),
    new Y({
      map: je([translate("白光光源")], {
        w: 300,
        h: 64,
      }),
      toneMapped: !1,
    }),
  );
  (r.position.set(-0.062, -0.012, 0.0405), t.add(r));
  const l = Me(N - 0.04);
  return ((l.position.x = -0.06), t.add(l), (t.slit = i), K(t));
}
function Zt(e = 0.1, t = 0.06, { stand: s = !0 } = {}) {
  const o = Z(),
    i = new W(),
    r = new P(new ae(e + 0.006, t + 0.006, 0.006, 2, 0.002), o.darkSteel);
  r.position.z = -0.0035;
  const l = new P(
    new Q(e, t),
    new D({
      color: "#e8eef5",
      metalness: 1,
      roughness: 0.03,
      envMapIntensity: 1.6,
    }),
  );
  if (((l.position.z = 2e-4), i.add(r, l), s)) {
    const a = Me(N - t / 2 - 0.004);
    ((a.position.z = -0.01), i.add(a));
  } else {
    const a = new P(new ae(e * 0.6, 0.008, 0.02, 2, 0.002), o.darkSteel);
    (a.position.set(0, -t / 2 + 0.004, -0.01), i.add(a));
  }
  return K(i);
}
function Xn(e = 0.16, t = 0.12) {
  const s = new W(),
    o = new P(
      new fe(e, t, 0.004),
      new ue({
        color: "#d6ecff",
        roughness: 0.02,
        transmission: 0.9,
        thickness: 0.004,
        transparent: !0,
        opacity: 0.35,
        reflectivity: 0.6,
        envMapIntensity: 1.5,
        depthWrite: !1,
      }),
    );
  o.position.y = t / 2 - 0.03;
  const i = Z(),
    r = new P(new ae(e + 0.01, 0.014, 0.02, 2, 0.003), i.darkSteel);
  ((r.position.y = -0.037), s.add(o, r));
  for (const l of [-e / 2 + 0.02, e / 2 - 0.02]) {
    const a = new P(new ae(0.02, 0.06, 0.05, 2, 0.003), i.darkSteel);
    (a.position.set(l, -N + 0.03, 0), s.add(a));
  }
  return K(s);
}
const en =
    "varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
  Kn = `
uniform float uTime; uniform float uSeed; varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
float noise(vec2 p){ vec2 i = floor(p), f = fract(p); vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(hash(i), hash(i+vec2(1,0)), u.x), mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y); }
void main(){
  vec2 p = vUv - vec2(0.5, 0.18);
  float t = uTime * 2.2 + uSeed;
  p.x += (noise(vec2(p.y*3.0 - t, t*0.7)) - 0.5) * 0.12 * smoothstep(0.0, 0.7, p.y);
  float w = 0.21 * (1.0 - smoothstep(0.0, 0.78, p.y)) * smoothstep(-0.18, 0.06, p.y);
  float d = abs(p.x) / max(w, 1e-3);
  float body = smoothstep(1.0, 0.25, d) * smoothstep(0.78, 0.2, p.y) * smoothstep(-0.2, -0.02, p.y);
  float core = smoothstep(0.55, 0.0, d) * smoothstep(0.32, 0.0, p.y) * smoothstep(-0.16, 0.0, p.y);
  float blue = smoothstep(0.9, 0.3, d) * smoothstep(0.02, -0.12, p.y) * smoothstep(-0.2, -0.1, p.y);
  vec3 col = mix(vec3(1.0, 0.42, 0.06), vec3(1.0, 0.82, 0.45), body) * body * 2.4;
  col += vec3(1.0, 0.97, 0.85) * core * 2.2;
  col += vec3(0.25, 0.4, 1.0) * blue * 0.9;
  float a = clamp(body + core * 0.5 + blue * 0.6, 0.0, 1.0);
  gl_FragColor = vec4(col * a, a);
}`;
function Yn(e = 0) {
  return new wt({
    vertexShader: en,
    fragmentShader: Kn,
    uniforms: {
      uTime: {
        value: 0,
      },
      uSeed: {
        value: e,
      },
    },
    transparent: !0,
    depthWrite: !1,
    blending: Oe,
    side: re,
    toneMapped: !1,
  });
}
function Ne({
  lit: e = !0,
  seed: t = 0,
  ghost: s = !1,
  mount: o = "post",
} = {}) {
  const i = new W(),
    r = new P(
      new O(0.011, 0.012, 0.075, 40),
      new ue({
        color: "#f3e6cf",
        roughness: 0.45,
        transmission: 0.25,
        thickness: 0.03,
        sheen: 0.3,
        transparent: s,
        opacity: s ? 0.25 : 1,
      }),
    );
  r.position.y = -0.0505;
  const l = new P(new ve(0.0105, 0.0022, 8, 32), r.material);
  ((l.rotation.x = Math.PI / 2), (l.position.y = -0.0135));
  const a = new P(
    new O(7e-4, 7e-4, 0.008, 6),
    new D({
      color: "#1a1410",
    }),
  );
  a.position.y = -0.009;
  const c = new P(new O(0.02, 0.024, 0.008, 40), Z().brass);
  ((c.position.y = -0.0915),
    i.add(r, l, a, c),
    !s && o === "post" && i.add(Me(N - 0.095)),
    !s && o === "carrier" && i.add(Ve(N - 0.034 - 0.095 + 0.012)));
  const d = new P(new Q(0.03, 0.05), Yn(t));
  ((d.position.y = 0.006), (d.visible = e), i.add(d));
  const u = new vt("#ffb86b", e && !s ? 0.25 : 0, 0.9, 2);
  return (
    (u.position.y = 0.01),
    i.add(u),
    (i.flame = d),
    (i.light = u),
    (i.setLit = (h) => {
      ((d.visible = h), (u.intensity = h && !s ? 0.25 : 0));
    }),
    (i.tick = (h, f) => {
      d.material.uniforms.uTime.value = h;
      const b = new _();
      (d.getWorldPosition(b),
        (d.rotation.y =
          Math.atan2(f.position.x - b.x, f.position.z - b.z) - i.rotation.y),
        u.intensity > 0 &&
          (u.intensity =
            0.22 + 0.06 * Math.sin(h * 13 + t) * Math.sin(h * 7.3)));
    }),
    s ? K(i, !1, !1) : K(i),
    (d.castShadow = !1),
    i
  );
}
function tn(e, t = 0.05) {
  const s = t / 2,
    o = Math.min(0.006, (s * s) / (2 * Math.abs(e) * 1.04)),
    i = 0.0018,
    r = [],
    l = 24;
  if (e > 0) {
    for (let c = 0; c <= l; c++) {
      const d = (c / l) * s;
      r.push(new Ye(d, i / 2 + o * (1 - (d * d) / (s * s))));
    }
    for (let c = l; c >= 0; c--) {
      const d = (c / l) * s;
      r.push(new Ye(d, -i / 2 - o * (1 - (d * d) / (s * s))));
    }
  } else {
    for (let d = 0; d <= l; d++) {
      const u = (d / l) * s;
      r.push(new Ye(u, 0.0012 + o * ((u * u) / (s * s))));
    }
    for (let d = l; d >= 0; d--) {
      const u = (d / l) * s;
      r.push(new Ye(u, -0.0012 - o * ((u * u) / (s * s))));
    }
  }
  const a = new pn(r, 64);
  return (a.rotateZ(Math.PI / 2), new P(a, Te()));
}
function ut(e, t = 0.05) {
  const s = Z(),
    o = new W(),
    i = tn(e, t),
    r = new P(
      new ve(t / 2 + 0.003, 0.0035, 12, 64),
      new D({
        color: "#1d2025",
        metalness: 0.7,
        roughness: 0.4,
      }),
    );
  r.rotation.y = Math.PI / 2;
  const l = new P(new O(0.0025, 0.0025, 0.01, 12), s.chrome);
  ((l.position.y = t / 2 + 0.008), o.add(i, r, l));
  const a = new P(
    new Q(0.03, 0.008),
    new Y({
      map: je([`f = ${e > 0 ? "" : "−"}${Math.round(Math.abs(e) * 100)} cm`], {
        w: 260,
        h: 64,
        accent: e > 0 ? "#6cc8ff" : "#e86ad6",
      }),
      toneMapped: !1,
    }),
  );
  return (
    a.position.set(0, -t / 2 - 0.012, 0.004),
    (a.rotation.y = Math.PI / 2),
    o.add(a),
    (o.lens = i),
    K(o)
  );
}
function Xe(e = 0.2, t = 0.13, { carrierMount: s = !1 } = {}) {
  Z();
  const o = new W(),
    i = document.createElement("canvas");
  ((i.width = 1024), (i.height = Math.round((1024 * t) / e)));
  const r = new be(i);
  ((r.colorSpace = we), (r.anisotropy = 8));
  const l = new P(
    new Q(e, t),
    new D({
      color: "#d9d8d2",
      roughness: 0.9,
      emissive: "#ffffff",
      emissiveMap: r,
      emissiveIntensity: 1,
    }),
  );
  l.position.z = 0.0021;
  const a = new P(
    new ae(e + 0.012, t + 0.012, 0.004, 2, 0.002),
    new D({
      color: "#1d2025",
      metalness: 0.6,
      roughness: 0.45,
    }),
  );
  o.add(a, l);
  const c = s ? Ve(N - 0.034 - t / 2) : Me(N - t / 2 - 0.004);
  return (
    s && (c.rotation.y = Math.PI / 2),
    o.add(c),
    (o.canvas = i),
    (o.ctx = i.getContext("2d")),
    (o.texture = r),
    (o.w = e),
    (o.h = t),
    K(o)
  );
}
function tt(e, t = 0.022, s = "glass") {
  const o = new Gt();
  e.forEach(([c, d], u) => (u ? o.lineTo(c, -d) : o.moveTo(c, -d)));
  const i = new Wt(o, {
    depth: t,
    bevelEnabled: !0,
    bevelSize: 6e-4,
    bevelThickness: 6e-4,
    bevelSegments: 2,
    curveSegments: 1,
  });
  (i.rotateX(-Math.PI / 2), i.translate(0, -0.006, 0));
  const r =
      {
        water: "#cfe9ff",
        glass: "#e4f6ff",
        flint: "#f2f8ff",
        diamond: "#ffffff",
        fiber: "#d8f0ff",
      }[s] || "#e4f6ff",
    l = Te();
  (l.color.set(r),
    (l.ior =
      {
        water: 1.33,
        diamond: 2.4,
        flint: 1.62,
      }[s] || 1.5),
    s === "water" && ((l.transmission = 0.9), (l.roughness = 0.05)));
  const a = new P(i, l);
  return ((a.castShadow = !1), (a.receiveShadow = !1), a);
}
function Jn(e, t = 0.004) {
  const s = e.map(([c, d]) => new _(c, 0, d)),
    o = new hn(s),
    i = Te();
  i.color.set("#d8f4ff");
  const r = new P(new Et(o, 160, t, 16), i),
    l = new P(
      new Et(o, 160, t * 0.55, 10),
      new Y({
        color: "#ff3b2f",
        transparent: !0,
        opacity: 0,
        blending: Oe,
        depthWrite: !1,
        toneMapped: !1,
      }),
    ),
    a = new W();
  return (a.add(r, l), (a.glow = l), a);
}
function Qn(e = "") {
  Z();
  const t = new W(),
    s = new P(
      new ae(0.004, 0.06, 0.06, 2, 0.001),
      new D({
        color: "#121316",
        metalness: 0.8,
        roughness: 0.35,
      }),
    ),
    o = new P(
      new ve(0.036, 0.004, 10, 48),
      new D({
        color: "#2b2f36",
        metalness: 0.7,
        roughness: 0.4,
      }),
    );
  o.rotation.y = Math.PI / 2;
  const i = new W();
  t.add(s, o, i);
  const r = Ve(N - 0.034 - 0.03);
  ((r.rotation.y = Math.PI / 2), t.add(r));
  const l = new P(
    new Q(0.04, 0.009),
    new Y({
      map: je([e || " "], {
        w: 300,
        h: 64,
      }),
      toneMapped: !1,
    }),
  );
  return (
    l.position.set(-0.0025, -0.04, 0),
    (l.rotation.y = -Math.PI / 2),
    t.add(l),
    (t.setSlits = (a, c, d) => {
      i.clear();
      for (let u = 0; u < a; u++) {
        const h = (u - (a - 1) / 2) * d,
          f = new P(
            new Q(Math.max(4e-4, c), 0.03),
            new Y({
              color: "#c9d6e6",
              transparent: !0,
              opacity: 0.85,
            }),
          );
        ((f.rotation.y = -Math.PI / 2),
          f.position.set(-0.0021, 0, h),
          i.add(f));
      }
    }),
    (t.setLabel = (a) => {
      (l.material.map?.dispose(),
        (l.material.map = je([a], {
          w: 300,
          h: 64,
        })),
        (l.material.needsUpdate = !0));
    }),
    K(t)
  );
}
function At(e = "P") {
  const t = new W(),
    s = (() => {
      const h = document.createElement("canvas");
      h.width = h.height = 512;
      const f = h.getContext("2d");
      ((f.fillStyle = "#24272d"),
        f.fillRect(0, 0, 512, 512),
        f.translate(256, 256),
        (f.strokeStyle = "#e9e4d8"),
        (f.fillStyle = "#e9e4d8"));
      for (let w = 0; w < 360; w += 5) {
        const m = (w * Math.PI) / 180;
        ((f.lineWidth = w % 30 === 0 ? 4 : 2),
          f.beginPath(),
          f.moveTo(Math.cos(m) * 250, Math.sin(m) * 250),
          f.lineTo(
            Math.cos(m) * (w % 30 === 0 ? 214 : 232),
            Math.sin(m) * (w % 30 === 0 ? 214 : 232),
          ),
          f.stroke());
      }
      const b = new be(h);
      return ((b.colorSpace = we), b);
    })(),
    o = new W(),
    i = new P(
      new gt(0.03, 0.045, 64),
      new D({
        map: s,
        metalness: 0.4,
        roughness: 0.5,
        side: re,
      }),
    ),
    r = new P(
      new He(0.03, 64),
      new ue({
        color: "#3b4250",
        transparent: !0,
        opacity: 0.55,
        roughness: 0.15,
        side: re,
        depthWrite: !1,
      }),
    ),
    l = new P(
      new Q(0.003, 0.058),
      new Y({
        color: "#ffd25a",
        side: re,
        toneMapped: !1,
      }),
    );
  l.position.z = 5e-4;
  const a = new P(new O(0.004, 0.004, 0.012, 16), Z().red);
  ((a.position.y = 0.05), o.add(i, r, l, a), (o.rotation.y = Math.PI / 2));
  const c = new P(
    new ve(0.047, 0.004, 12, 64),
    new D({
      color: "#1d2025",
      metalness: 0.7,
      roughness: 0.4,
    }),
  );
  ((c.rotation.y = Math.PI / 2), t.add(o, c));
  const d = new P(
    new Q(0.02, 0.012),
    new Y({
      map: je([e], {
        w: 128,
        h: 72,
      }),
      toneMapped: !1,
    }),
  );
  (d.position.set(0, -0.058, 0), (d.rotation.y = Math.PI / 2), t.add(d));
  const u = Ve(N - 0.034 - 0.05);
  return (
    (u.rotation.y = Math.PI / 2),
    t.add(u),
    (t.setAngle = (h) => (o.rotation.x = -h)),
    (t.knob = a),
    K(t)
  );
}
function Zn() {
  const e = new W(),
    t = new P(
      new O(0.02, 0.02, 0.012, 40),
      new D({
        color: "#1d2025",
        metalness: 0.6,
        roughness: 0.4,
      }),
    );
  t.rotation.z = Math.PI / 2;
  const s = new P(
    new He(0.015, 40),
    new D({
      color: "#1a2b4a",
      metalness: 0.4,
      roughness: 0.25,
    }),
  );
  ((s.rotation.y = -Math.PI / 2), (s.position.x = -0.0061));
  const o = new P(
    new ae(0.05, 0.03, 0.06, 2, 0.004),
    new ue({
      color: "#e4e1da",
      roughness: 0.4,
      clearcoat: 0.5,
    }),
  );
  o.position.set(0.035, -0.035, 0);
  const i = kn(4, {
      w: 256,
      h: 96,
      color: "#5dff9b",
    }),
    r = new P(
      new Q(0.036, 0.012),
      new Y({
        map: i.texture,
        toneMapped: !1,
      }),
    );
  (r.position.set(0.035, -0.03, 0.0302), e.add(t, s, o, r));
  const l = Ve(N - 0.034 - 0.02);
  return ((l.rotation.y = Math.PI / 2), e.add(l), (e.show = i.draw), K(e));
}
const es = `
uniform float uTime; uniform float uAge; uniform float uMono; varying vec2 vUv;
float hash(vec2 p){ return fract(sin(dot(p, vec2(41.3,289.1))) * 13758.5453); }
float noise(vec2 p){ vec2 i=floor(p), f=fract(p); vec2 u=f*f*(3.0-2.0*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),u.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),u.x),u.y); }
vec3 cie(float l){
  float x = 1.056*exp(-0.5*pow((l-599.8)/(l<599.8?37.9:31.0),2.0)) + 0.362*exp(-0.5*pow((l-442.0)/(l<442.0?16.0:26.7),2.0)) - 0.065*exp(-0.5*pow((l-501.1)/(l<501.1?20.4:26.2),2.0));
  float y = 0.821*exp(-0.5*pow((l-568.8)/(l<568.8?46.9:40.5),2.0)) + 0.286*exp(-0.5*pow((l-530.9)/(l<530.9?16.3:31.1),2.0));
  float z = 1.217*exp(-0.5*pow((l-437.0)/(l<437.0?11.8:36.0),2.0)) + 0.681*exp(-0.5*pow((l-459.0)/(l<459.0?26.0:13.8),2.0));
  return vec3(x,y,z);
}
void main(){
  vec2 p = vUv - 0.5;
  float r = length(p);
  if (r > 0.5) discard;
  float h = 1.0 - vUv.y;
  // 重力使膜上薄下厚：厚度随高度近似线性增大，并随时间整体变薄；加一点流动扰动
  float flow = (noise(vec2(p.x*6.0, h*4.0 - uTime*0.15)) - 0.5) * 0.18;
  float t = max(0.0, (40.0 + 1400.0 * pow(h + flow*0.4, 1.2)) * (1.0 - 0.55*uAge)); // nm
  vec3 xyz = vec3(0.0); vec3 w = vec3(0.0);
  for (int i = 0; i < 24; i++){
    float l = 400.0 + float(i) * 13.0;
    if (uMono > 0.5) l = 589.0;
    float s = sin(6.2831853 * 1.33 * t / l); s *= s;
    vec3 c = cie(l);
    xyz += c * s; w += c;
  }
  xyz /= w.y;
  vec3 rgb = vec3(3.2406*xyz.x - 1.5372*xyz.y - 0.4986*xyz.z, -0.9689*xyz.x + 1.8758*xyz.y + 0.0415*xyz.z, 0.0557*xyz.x - 0.204*xyz.y + 1.057*xyz.z);
  if (uMono > 0.5) rgb = vec3(1.0, 0.78, 0.2) * xyz.y;
  rgb = clamp(rgb, 0.0, 1.0) * 1.3;
  gl_FragColor = vec4(rgb, 0.92);
}`;
function ts() {
  const e = Z(),
    t = new W(),
    s = new wt({
      vertexShader: en,
      fragmentShader: es,
      uniforms: {
        uTime: {
          value: 0,
        },
        uAge: {
          value: 0,
        },
        uMono: {
          value: 0,
        },
      },
      transparent: !0,
      side: re,
      toneMapped: !1,
    }),
    o = new P(new He(0.06, 96), s);
  o.rotation.y = Math.PI / 2;
  const i = new P(new ve(0.0605, 0.0016, 10, 96), e.steel);
  i.rotation.y = Math.PI / 2;
  const r = new P(new O(0.0016, 0.0016, N - 0.06, 8), e.steel);
  r.position.y = -0.06 - (N - 0.06) / 2;
  const l = new P(new O(0.03, 0.034, 0.01, 40), e.darkSteel);
  return ((l.position.y = -N + 0.005), t.add(o, i, r, l), (t.film = o), K(t));
}
function ns() {
  const e = Z(),
    t = new W(),
    s = new P(
      new O(0.04, 0.04, 0.012, 64, 1, !0),
      new D({
        color: "#2b2f36",
        metalness: 0.7,
        roughness: 0.4,
        side: re,
      }),
    ),
    o = document.createElement("canvas");
  o.width = o.height = 512;
  const i = new be(o);
  i.colorSpace = we;
  const r = new P(
    new He(0.038, 96),
    new D({
      color: "#222",
      emissive: "#ffffff",
      emissiveMap: i,
      emissiveIntensity: 0.75,
      roughness: 0.2,
      metalness: 0.2,
    }),
  );
  ((r.rotation.x = -Math.PI / 2), (r.position.y = 0.0061));
  const l = new P(new Le(0.06, 64, 16, 0, Math.PI * 2, 0, 0.62), Te());
  ((l.position.y = 0.0062 - 0.06 * Math.cos(0.62) + 5e-4), (l.scale.y = 0.35));
  for (let c = 0; c < 3; c++) {
    const d = new P(new O(0.003, 0.003, 0.016, 12), e.chrome),
      u = (c / 3) * Math.PI * 2;
    (d.position.set(Math.cos(u) * 0.04, 0.004, Math.sin(u) * 0.04), t.add(d));
  }
  const a = Me(N - 0.006);
  return (t.add(s, r, l, a), (t.canvas = o), (t.texture = i), K(t));
}
const Ie = 12;
function ss() {
  const e = new W(),
    t = 0.017 * Ie,
    s = t * 0.62,
    o = new P(
      new Le(s, 64, 48),
      new ue({
        color: "#f4f2ee",
        roughness: 0.15,
        transmission: 0.55,
        thickness: 0.02,
        transparent: !0,
        opacity: 0.35,
        side: re,
        depthWrite: !1,
      }),
    );
  o.position.x = t - s;
  const i = new P(new Le(s * 0.5, 48, 24, 0, Math.PI * 2, 0, 0.9), Te());
  ((i.rotation.z = Math.PI / 2),
    (i.position.x = t - s - s * 0.7 + 0.004),
    (i.position.x = -0.012));
  const r = new P(
    new gt(0.009, 0.03, 48),
    new D({
      color: "#3d5f7a",
      roughness: 0.6,
      side: re,
    }),
  );
  ((r.rotation.y = Math.PI / 2), (r.position.x = -0.004));
  const l = new P(new Le(0.026, 48, 32), Te());
  l.scale.set(0.38, 1, 1);
  const a = document.createElement("canvas");
  a.width = a.height = 512;
  const c = new be(a);
  c.colorSpace = we;
  const d = new P(
    new He(s * 0.62, 64),
    new D({
      color: "#5a1c18",
      emissive: "#ffffff",
      emissiveMap: c,
      roughness: 0.8,
      side: re,
    }),
  );
  ((d.rotation.y = -Math.PI / 2), (d.position.x = t));
  const u = new P(
    new Le(s * 1.002, 64, 32, 0, Math.PI * 2, 0, 1),
    new D({
      color: "#7a2a22",
      roughness: 0.7,
      side: un,
      transparent: !0,
      opacity: 0.6,
    }),
  );
  ((u.rotation.z = -Math.PI / 2), (u.position.x = t - s));
  const h = new P(
    new O(0.012, 0.016, 0.05, 24),
    new D({
      color: "#d8c2a0",
      roughness: 0.7,
    }),
  );
  ((h.rotation.z = Math.PI / 2), h.position.set(t + 0.03, 0, 0));
  const f = Me(N - s - 0.01);
  return (
    (f.position.x = t - s),
    e.add(o, i, r, l, d, u, h, f),
    (e.lens = l),
    (e.retinaCanvas = a),
    (e.retinaTexture = c),
    (e.Lm = t),
    (e.setAxial = (b) => {
      const w = (b / 0.017) * t;
      ((d.position.x = w),
        (u.position.x = w - s),
        (o.position.x = w - s),
        (h.position.x = w + 0.03));
    }),
    (e.setPower = (b) => {
      l.scale.x = 0.32 + (b - 58.8) * 0.04;
    }),
    K(e, !1, !1),
    e
  );
}
function os(e) {
  const t = new W(),
    s = tn(e, 0.06),
    o = new P(
      new ve(0.031, 0.0025, 10, 64),
      new D({
        color: "#1b1d21",
        metalness: 0.4,
        roughness: 0.4,
      }),
    );
  return ((o.rotation.y = Math.PI / 2), t.add(s, o), t);
}
const Re = (e, t = 1) =>
  `rgba(${e.map((s) => Math.round(s * 255)).join(",")},${t})`;
function st(e, t, s, o = "#0b0b0c") {
  ((e.globalCompositeOperation = "source-over"),
    (e.filter = "none"),
    (e.fillStyle = o),
    e.fillRect(0, 0, t, s));
}
function yt(e, t, s, o, i, { whiteCount: r = 10, size: l = 1 } = {}) {
  e.globalCompositeOperation = "lighter";
  for (const a of i) {
    const c = t / 2 + (a.s / o) * t,
      d = s / 2,
      u = oe(a.lambda),
      h = (a.white ? 2.4 / r : 1) * Math.min(1, a.I),
      f = (t / o) * 0.004 * l,
      b = e.createRadialGradient(c, d, 0, c, d, f * 3);
    (b.addColorStop(
      0,
      Re(
        [1, 1, 1].map((w, m) => Math.min(1, u[m] * 0.6 + 0.4)),
        0.95 * h,
      ),
    ),
      b.addColorStop(0.25, Re(u, 0.8 * h)),
      b.addColorStop(1, Re(u, 0)),
      (e.fillStyle = b),
      e.beginPath(),
      e.ellipse(c, d, f * 3, f * 3 * (a.stretch || 1), 0, 0, 7),
      e.fill());
  }
  e.globalCompositeOperation = "source-over";
}
function as(e, t, s, o, i, r = 0.025) {
  if (!i.length) return;
  e.globalCompositeOperation = "lighter";
  const l = (r / o) * t,
    a = [...i].sort((c, d) => c.s - d.s);
  for (const c of a) {
    const d = t / 2 + (c.s / o) * t,
      u = oe(c.lambda),
      h = Math.max(6, t * 0.012),
      f = e.createLinearGradient(d - h, 0, d + h, 0);
    (f.addColorStop(0, Re(u, 0)),
      f.addColorStop(0.5, Re(u, 0.75 * Math.min(1, c.I * 1.4))),
      f.addColorStop(1, Re(u, 0)),
      (e.fillStyle = f),
      e.fillRect(d - h, s / 2 - l / 2, h * 2, l));
  }
  e.globalCompositeOperation = "source-over";
}
function is(e, t, s, o, i) {
  const r = o * 0.42,
    l = Math.sin(i * 5.3) * 0.06 * r,
    a = e.createRadialGradient(
      t,
      s - o * 0.32,
      o * 0.03,
      t,
      s - o * 0.35,
      o * 0.7,
    );
  (a.addColorStop(0, "rgba(255,250,225,1)"),
    a.addColorStop(0.25, "rgba(255,214,120,.98)"),
    a.addColorStop(0.6, "rgba(255,130,30,.75)"),
    a.addColorStop(1, "rgba(255,80,10,0)"),
    (e.fillStyle = a),
    e.beginPath(),
    e.moveTo(t, s + o * 0.06),
    e.bezierCurveTo(
      t - r,
      s - o * 0.05,
      t - r * 0.55 + l,
      s - o * 0.65,
      t + l * 2,
      s - o,
    ),
    e.bezierCurveTo(
      t + r * 0.55 + l,
      s - o * 0.65,
      t + r,
      s - o * 0.05,
      t,
      s + o * 0.06,
    ),
    e.fill(),
    (e.fillStyle = "rgba(90,120,255,.45)"),
    e.beginPath(),
    e.ellipse(t, s, r * 0.32, o * 0.09, 0, 0, 7),
    e.fill());
}
function rs(
  e,
  t,
  s,
  o,
  { m: i, blurPx: r, objH: l = 0.02, t: a = 0, brightness: c = 1 },
) {
  const d = t / o,
    u = Math.abs(i) * l * d;
  if (!(u > 1) || !isFinite(u)) return;
  (e.save(), (e.globalCompositeOperation = "lighter"));
  const h = Math.max(1, r / Math.max(4, u * 0.4));
  ((e.globalAlpha = Math.min(1, c / h)),
    (e.filter = `blur(${Math.min(80, r).toFixed(1)}px)`),
    e.translate(t / 2, s / 2),
    i < 0 && e.scale(-1, -1),
    is(e, 0, u * 0.3, u * 1.3, a),
    (e.fillStyle = "rgba(255,220,170,.18)"),
    e.fillRect(-u * 0.22, u * 0.42, u * 0.44, u * 2.2),
    e.restore());
}
function Rt(e, t, s, o, i, r, { beamH: l = 0.02, gain: a = 1 } = {}) {
  const c = e.createImageData(t, s),
    d = c.data,
    u = new Float32Array(t * 3);
  for (let f = 0; f < t; f++) {
    const b = ((f + 0.5) / t - 0.5) * o,
      w = i(b),
      m = r(b);
    ((u[f * 3] = m[0] * w * a),
      (u[f * 3 + 1] = m[1] * w * a),
      (u[f * 3 + 2] = m[2] * w * a));
  }
  const h = (l / o) * t;
  for (let f = 0; f < s; f++) {
    const b = (f - s / 2) / h,
      w = Math.exp(-b * b);
    for (let m = 0; m < t; m++) {
      const p = (f * t + m) * 4;
      ((d[p] = 11 + Math.min(244, u[m * 3] * w * 255)),
        (d[p + 1] = 11 + Math.min(244, u[m * 3 + 1] * w * 255)),
        (d[p + 2] = 12 + Math.min(243, u[m * 3 + 2] * w * 255)),
        (d[p + 3] = 255));
    }
  }
  e.putImageData(c, 0, 0);
}
function ls(e, t, { R: s, lambda: o, white: i, viewR: r = 0.004 }) {
  const l = e.createImageData(t, t),
    a = l.data,
    c = [],
    d = 400,
    u = (r * r) / (2 * s);
  for (let h = 0; h <= d; h++) {
    const f = (h / d) * u,
      b = i
        ? (w) => Math.sin((2 * Math.PI * f) / (w * 1e-9)) ** 2
        : (w) =>
            Math.abs(w - o) < 3
              ? Math.sin((2 * Math.PI * f) / (o * 1e-9)) ** 2
              : 0;
    c.push(
      i
        ? Yt(b, 1.05)
        : oe(o).map((w) => w * Math.sin((2 * Math.PI * f) / (o * 1e-9)) ** 2),
    );
  }
  for (let h = 0; h < t; h++)
    for (let f = 0; f < t; f++) {
      const b = ((f + 0.5) / t - 0.5) * 2 * r,
        w = ((h + 0.5) / t - 0.5) * 2 * r,
        m = b * b + w * w,
        p = (h * t + f) * 4;
      if (m > r * r) {
        ((a[p] = a[p + 1] = a[p + 2] = 12), (a[p + 3] = 255));
        continue;
      }
      const g = Math.min(d, Math.round((m / (r * r)) * d)),
        $ = c[g];
      ((a[p] = $[0] * 235 + 10),
        (a[p + 1] = $[1] * 235 + 10),
        (a[p + 2] = $[2] * 235 + 12),
        (a[p + 3] = 255));
    }
  e.putImageData(l, 0, 0);
}
function cs(e, t, { blurPx: s, scale: o = 1, dim: i = 1 }) {
  (e.save(), (e.fillStyle = "#3a0f0c"), e.fillRect(0, 0, t, t));
  const r = e.createRadialGradient(t / 2, t / 2, 0, t / 2, t / 2, t / 2);
  (r.addColorStop(0, "rgba(210,90,60,.35)"),
    r.addColorStop(1, "rgba(60,10,8,0)"),
    (e.fillStyle = r),
    e.fillRect(0, 0, t, t),
    (e.filter = `blur(${Math.min(60, s).toFixed(1)}px)`),
    e.translate(t / 2, t / 2),
    e.scale(-o, -o),
    (e.globalAlpha = i),
    (e.fillStyle = "#fff6e8"));
  const l = t * 0.07,
    a = [
      [0, -2.6, 1.4],
      [0, 0, 0.9],
      [0, 1.9, 0.6],
    ];
  for (const [, c, d] of a)
    for (let u = -1; u <= 1; u++) {
      (e.save(),
        e.translate(u * l * 2.2 * d, c * l),
        e.rotate((((u + 1) % 4) * Math.PI) / 2));
      const h = l * d;
      e.fillRect(-h / 2, -h / 2, h * 0.22, h);
      for (const f of [-h / 2, -h * 0.11, h / 2 - h * 0.22])
        e.fillRect(-h / 2, f, h, h * 0.22);
      e.restore();
    }
  e.restore();
}
const y = (e, t = 2) =>
    e == null || !isFinite(e)
      ? "—"
      : (Math.abs(e) < 0.5 * 10 ** -t ? 0 : e).toFixed(t),
  ee = (e) => (e * 180) / Math.PI,
  z = (e) => (e * Math.PI) / 180,
  le = (e, t, s) => Math.max(t, Math.min(s, e));
function F(e, t, s = 0, o = N) {
  (e.position.set(t[0], o, t[1]), (e.rotation.y = -s));
}
function jt(e = "#ffd25a") {
  const t = new P(
    new Mt(),
    new Y({
      color: e,
      transparent: !0,
      opacity: 0.85,
      side: re,
      toneMapped: !1,
      depthWrite: !1,
    }),
  );
  return (
    (t.update = (s, o, i, r, l = N - 0.0025) => {
      const a = Math.min(i, r),
        c = Math.abs(r - i);
      (t.geometry.dispose(),
        (t.geometry = new gt(
          o - 0.0012,
          o + 0.0012,
          Math.max(8, Math.ceil(c / 0.03)),
          1,
          -a - c,
          c,
        )),
        (t.rotation.x = -Math.PI / 2),
        t.position.set(s[0], l, s[1]));
    }),
    t
  );
}
function pt(e = "#ffffff", t = 0.6) {
  const s = new Mt(),
    o = new Vt(
      s,
      new mn({
        color: e,
        dashSize: 0.006,
        gapSize: 0.005,
        transparent: !0,
        opacity: t,
        toneMapped: !1,
      }),
    );
  return (
    (o.set = (i, r = N, l = !1) => {
      const a = [],
        c = (d) => (l ? new _(d[0], r + d[1], 0) : new _(d[0], r, d[1]));
      for (const [d, u] of i) a.push(c(d), c(u));
      (o.geometry.setFromPoints(a), o.computeLineDistances());
    }),
    o
  );
}
function qe(e, t, { del: s = !0 } = {}) {
  return t.length
    ? `<table class="tbl"><thead><tr><th>#</th>${e.map((o) => `<th>${o}</th>`).join("")}${s ? "<th></th>" : ""}</tr></thead><tbody>${t.map((o, i) => `<tr><td>${i + 1}</td>${o.map((r) => `<td>${r}</td>`).join("")}${s ? `<td><button class="del" data-i="${i}">×</button></td>` : ""}</tr>`).join("")}</tbody></table>`
    : "";
}
function ht(e, t) {
  return (s) =>
    s.querySelectorAll(".del").forEach((o) =>
      o.addEventListener("click", () => {
        (e.splice(+o.dataset.i, 1), t());
      }),
    );
}
const nn = (e) => `<div class="empty">${e}</div>`,
  Tt = 0.145,
  Ht = 0.08,
  Fe = () => ({
    water: translate("水"),
    glass: translate("玻璃"),
    flint: translate("火石玻璃"),
    diamond: translate("钻石"),
  });
function ds(e) {
  const t = e.params,
    s = e.lesson,
    o = t.mode;
  ((e.lab.disk.visible = !0),
    (e.lab.bench.visible = !1),
    e.lab.disk.position.set(0, 0, 0));
  const i = e.add(nt()),
    r =
      o === "mirror"
        ? e.add(
            Zt(0.11, 0.05, {
              stand: !1,
            }),
          )
        : null;
  r && F(r, [0, 0], Math.PI / 2, e.BEAM_H + 0.021);
  let l = null;
  const a = e.add(jt("#ffd25a")),
    c = e.add(jt("#6cc8ff"));
  let d = null,
    u = null,
    h = null;
  function f() {
    const v = [-0.05, 0.12];
    u = Gn(v, 0.2, 0.012, -Math.PI / 2 - 0.2, 0.25, 0.14);
    const k = [];
    for (let G = 0; G <= 60; G++) {
      const U = -Math.PI / 2 - 0.2 + ((0.45 + Math.PI / 2) * G) / 60;
      k.push([v[0] + 0.2 * Math.cos(U), v[1] + 0.2 * Math.sin(U)]);
    }
    const C = -Math.PI / 2 - 0.2,
      S = 0.25,
      j = [-Math.sin(C), Math.cos(C)],
      H = [-Math.sin(S), Math.cos(S)],
      q = k[0],
      X = k[k.length - 1];
    (k.unshift([q[0] - j[0] * 0.14, q[1] - j[1] * 0.14]),
      k.push([X[0] + H[0] * 0.14, X[1] + H[1] * 0.14]),
      (d = e.add(Jn(k, 0.006))),
      (d.position.y = e.BEAM_H),
      (h = e.add(Xe(0.16, 0.1))));
    const T = k[k.length - 1];
    ((h.userData.p = [T[0] + H[0] * 0.08, T[1] + H[1] * 0.08]),
      (h.userData.angle = Math.atan2(H[1], H[0]) + Math.PI / 2),
      F(h, h.userData.p, h.userData.angle),
      (d.userData.start = k[0]),
      (d.userData.dir = Math.atan2(j[1], j[0])));
  }
  function b() {
    if ((l && e.remove(l), o === "mirror")) return;
    const v = o === "block" ? 0 : Math.PI;
    ((l = e.add(tt(ft([0, 0], Ht, v, 96), 0.022, t.material))),
      (l.position.y = e.BEAM_H),
      t.material);
  }
  b();
  function w() {
    const v = z(t.i),
      k = [-Tt * Math.cos(v), Tt * Math.sin(v)];
    return {
      p: k,
      angle: Math.atan2(-k[1], -k[0]),
    };
  }
  e.draggable(i, {
    pos: () => w().p,
    move(v) {
      if (t.view === "fiber") {
        const C = d.userData.start,
          S = Math.atan2(v[1] - C[1], v[0] - C[0]) + Math.PI - d.userData.dir;
        e.setParam("i", le(Math.round(ee(-S) * 2) / 2, 0, 40));
        return;
      }
      const k = Math.atan2(v[1], -v[0]);
      e.setParam("i", le(Math.round(ee(k) * 2) / 2, 0, 85));
    },
  });
  let m = {
      segments: [],
      hits: [],
    },
    p = {
      r: null,
      tir: !1,
      R: 0,
      T: 0,
    };
  function g() {
    const v = t.lambda;
    if (t.view === "fiber") {
      const T = d.userData.start,
        G = d.userData.dir - z(t.i),
        U = {
          kind: "laser",
          p: [T[0] - Math.cos(G) * 0.05, T[1] - Math.sin(G) * 0.05],
          angle: G,
          lambda: v,
        };
      F(i, U.p, G);
      const pe = {
        kind: "screen",
        p: h.userData.p,
        angle: h.userData.angle,
        len: 0.16,
      };
      m = xe(
        [
          {
            kind: "block",
            poly: u,
            material: "fiber",
            noReflect: !0,
          },
          pe,
        ],
        [U],
        {
          maxDepth: 400,
        },
      );
      return;
    }
    const { p: k, angle: C } = w();
    F(i, k, C);
    const S = {
        kind: "laser",
        p: k,
        angle: C,
        lambda: v,
      },
      j = [];
    (o === "mirror"
      ? j.push({
          kind: "mirror",
          p: [0, 0],
          angle: Math.PI / 2,
          len: 0.11,
        })
      : j.push({
          kind: "block",
          poly: ft([0, 0], Ht, o === "block" ? 0 : Math.PI, 96),
          material: t.material,
        }),
      (m = xe(j, [S], {
        minI: 0.01,
      })),
      z(t.i),
      (p = {
        i: t.i,
        r: null,
        refl: null,
        tir: !1,
        R: 0,
        T: 0,
      }));
    const H = m.segments,
      q = (T) => Math.hypot(T.a[0], T.a[1]) < 1e-6,
      X = H.filter(q);
    if (o === "mirror") {
      const T = X[0];
      T &&
        (p.r = ee(Math.abs(Math.atan2(T.b[1] - T.a[1], -(T.b[0] - T.a[0])))));
    } else if (o === "block") {
      const T = X.find((U) => U.inside),
        G = X.find((U) => !U.inside);
      (T &&
        ((p.r = ee(Math.abs(Math.atan2(T.b[1] - T.a[1], T.b[0] - T.a[0])))),
        (p.T = T.I)),
        G && (p.R = G.I));
    } else {
      const T = X.find((U) => !U.inside),
        G = X.find((U) => U.inside);
      ((p.tir = !T),
        T &&
          ((p.r = ee(Math.abs(Math.atan2(T.b[1] - T.a[1], T.b[0] - T.a[0])))),
          (p.T = T.I)),
        G && (p.R = G.I));
    }
  }
  function $() {
    if (t.view === "fiber" || (p.r == null && o !== "tir")) {
      a.visible = c.visible = !1;
      return;
    }
    a.visible = !0;
    const v = z(t.i);
    if ((a.update([0, 0], 0.05, Math.PI - v, Math.PI), p.r != null)) {
      c.visible = !0;
      const k = z(p.r);
      o === "mirror"
        ? c.update([0, 0], 0.058, Math.PI, Math.PI + k)
        : c.update([0, 0], 0.058, -k, 0);
    } else c.visible = !1;
  }
  function I(v) {
    const k = m.segments.filter((H) => H.inside).length;
    (d && (d.glow.material.opacity = k ? 0.55 + 0.05 * Math.sin(v * 9) : 0),
      d && d.glow.material.color.setRGB(...oe(t.lambda)));
    const C = h.ctx,
      S = h.canvas.width,
      j = h.canvas.height;
    (st(C, S, j),
      yt(C, S, j, h.w, m.hits, {
        size: 2.2,
      }),
      (h.texture.needsUpdate = !0));
  }
  function L() {
    const v = t.view === "fiber";
    ((e.lab.disk.visible = !v),
      l && (l.visible = !v),
      v && !d && f(),
      d && ((d.visible = v), (h.visible = v)),
      v
        ? (e.setParam("i", 8),
          e.stage.fly([0.12, 0.95, 0.95], [-0.02, 0.05, 0.12], 1))
        : e.stage.fly(...s.cam, 1));
  }
  return (
    t.view === "fiber" && L(),
    {
      update(v, k, C) {
        if ((C && (g(), e.beams.set(m.segments), $()), t.view === "fiber"))
          I(k);
        else {
          const S = e.BEAM_H + 0.004,
            j = z(t.i);
          if (
            (e.tag(
              "i",
              new e.THREE.Vector3(
                -0.075 * Math.cos(j / 2),
                S,
                0.075 * Math.sin(j / 2),
              ),
              `i = ${y(t.i, 1)}°`,
              "gold",
            ),
            p.r != null)
          ) {
            const H = z(p.r),
              q =
                o === "mirror"
                  ? [-0.085 * Math.cos(H / 2), -0.085 * Math.sin(H / 2)]
                  : [0.085 * Math.cos(H / 2), -0.085 * Math.sin(H / 2)];
            e.tag(
              "r",
              new e.THREE.Vector3(q[0], S, q[1]),
              `${o === "mirror" || o === "block" ? "r" : "θ"} = ${y(p.r, 1)}°`,
              "blue",
            );
          }
          (o === "tir" &&
            p.tir &&
            e.tag(
              "tir",
              new e.THREE.Vector3(0.06, S + 0.01, -0.05),
              translate("全反射"),
              "warn",
            ),
            o !== "mirror" &&
              e.tag(
                "O",
                new e.THREE.Vector3(0.004, S, 0.012),
                translate("入射点 O"),
                "dim",
              ));
        }
      },
      onParam(v) {
        (v === "material" && b(), v === "view" && L());
      },
      inset: () =>
        t.view === "fiber" && h
          ? {
              canvas: h.canvas,
              label: translate("光屏特写"),
            }
          : null,
      readouts() {
        const v = Se(t.material || "glass", t.lambda);
        if (o === "mirror")
          return [
            [translate("入射角 i"), `${y(t.i, 1)}°`],
            [translate("反射角 r"), `${y(p.r, 1)}°`],
          ];
        if (t.view === "fiber")
          return [
            [translate("入射角"), `${y(t.i, 1)}°`],
            [
              translate("出射光斑"),
              m.hits.length ? translate("有") : translate("无"),
            ],
          ];
        if (o === "block")
          return [
            [translate("入射角 i"), `${y(t.i, 1)}°`],
            [translate("折射角 r"), `${y(p.r, 1)}°`],
            [
              "sin i / sin r",
              p.r ? y(Math.sin(z(t.i)) / Math.sin(z(p.r)), 3) : "—",
            ],
            [translate("折射率 n"), y(v, 3)],
            [translate("反射光强度"), `${y(p.R * 100, 1)}%`],
          ];
        const k = ee(rt(v));
        return [
          [translate("入射角 i（玻璃中）"), `${y(t.i, 1)}°`],
          [translate("折射角（空气中）"), p.tir ? "—" : `${y(p.r, 1)}°`],
          [translate("临界角 C"), `${y(k, 1)}°`],
          [translate("反射光强度"), `${y(p.R * 100, 1)}%`],
          [
            translate("状态"),
            p.tir ? translate("全反射") : translate("折射 + 反射"),
          ],
        ];
      },
      hud() {
        if (t.view === "fiber") return [];
        const v = Se(t.material || "glass", t.lambda);
        return o === "mirror"
          ? [
              ["i", y(t.i, 1), "°"],
              ["r", y(p.r, 1), "°"],
            ]
          : o === "block"
            ? [
                ["i", y(t.i, 1), "°"],
                ["r", y(p.r, 1), "°"],
                ["n", y(v, 3), ""],
              ]
            : [
                ["i", y(t.i, 1), "°"],
                ["C", y(ee(rt(v)), 1), "°"],
                [translate("反射"), y(p.R * 100, 0), "%"],
              ];
      },
      record() {
        if (p.r == null)
          return (e.flash(translate("当前没有可测量的光线")), !1);
        (e.records.push(
          o === "mirror"
            ? {
                i: t.i,
                r: p.r,
              }
            : {
                i: t.i,
                r: p.r,
                mat: t.material,
                n: Se(t.material, t.lambda),
              },
        ),
          e.flash(translate("已记录第 {0} 组数据", [e.records.length])));
      },
      dock(v) {
        const k = e.records,
          C = () => e.refreshDock();
        if (v === "angles")
          return k.length
            ? o === "mirror"
              ? {
                  html: `<div class="gview">${qe(
                    [translate("入射角 i"), translate("反射角 r"), "r − i"],
                    k.map((S) => [
                      `${y(S.i, 1)}°`,
                      `${y(S.r, 1)}°`,
                      `${y(S.r - S.i, 2)}°`,
                    ]),
                  )}</div>`,
                  bind: ht(k, C),
                }
              : {
                  html: `<div class="gview">${qe(
                    [
                      translate("介质"),
                      "i",
                      "r",
                      "sin i",
                      "sin r",
                      "sin i / sin r",
                    ],
                    k.map((S) => [
                      Fe()[S.mat],
                      `${y(S.i, 1)}°`,
                      `${y(S.r, 1)}°`,
                      y(Math.sin(z(S.i)), 3),
                      y(Math.sin(z(S.r)), 3),
                      `<b>${y(Math.sin(z(S.i)) / Math.sin(z(S.r)), 3)}</b>`,
                    ]),
                  )}</div>`,
                  bind: ht(k, C),
                }
            : {
                html: nn(translate("调整入射角后按“记录数据”。")),
              };
        if (v === "anglePlot") {
          const S = k.map((j) => [j.i, j.r]);
          return {
            chart: {
              series: [
                {
                  pts: [
                    [0, 0],
                    [90, 90],
                  ],
                  color: "#5d5b57",
                  dashed: !0,
                  name: "r = i",
                  noHover: !0,
                },
                {
                  pts: S,
                  color: "#ffd25a",
                  kind: "scatter",
                  name: translate("实验数据"),
                },
              ],
              x: [0, 90],
              y: [0, 90],
              xLabel: translate("入射角 i / °"),
              yLabel: translate("反射角 r / °"),
              xName: "i",
            },
          };
        }
        if (v === "snell") {
          const S = {};
          for (const T of k)
            (S[T.mat] ||= []).push([Math.sin(z(T.r)), Math.sin(z(T.i))]);
          const j = {
              water: "#6cc8ff",
              glass: "#ffd25a",
              flint: "#e86ad6",
              diamond: "#3fd28a",
            },
            H = Object.entries(S).map(([T, G]) => ({
              pts: G,
              color: j[T],
              kind: "scatter",
              name: Fe()[T],
            }));
          let q = "";
          return (
            (q = Object.entries(S)
              .filter(([, T]) => T.length >= 2)
              .map(([T, G]) => {
                const U =
                  G.reduce((pe, ne) => pe + ne[0] * ne[1], 0) /
                  G.reduce((pe, ne) => pe + ne[0] * ne[0], 0);
                return (
                  H.push({
                    pts: [
                      [0, 0],
                      [1 / U, 1],
                    ],
                    color: j[T],
                    dashed: !0,
                    width: 1.2,
                    noHover: !0,
                  }),
                  `${Fe()[T]}: n ≈ ${U.toFixed(3)}`
                );
              })
              .join("<br>")),
            {
              chart: {
                series: H,
                x: [0, 1],
                y: [0, 1],
                xLabel: "sin r",
                yLabel: "sin i",
                xName: "sin r",
              },
              side: `<div class="fitside"><b class="big">${k.length}</b><span>${translate("组数据")}</span>${q ? `<div class="res">${q}</div>` : ""}<p>${translate("过原点的直线斜率就是折射率 n = sin i / sin r。")}</p></div>`,
            }
          );
        }
        if (v === "tirinfo") {
          const S = Object.keys(Fe()).map((j) => {
            const H = Se(j, t.lambda);
            return [Fe()[j], y(H, 3), `${y(ee(rt(H)), 1)}°`];
          });
          return {
            html: `<div class="gview">${qe(
              [translate("介质"), translate("折射率 n"), translate("临界角 C")],
              S,
              {
                del: !1,
              },
            )}<div class="kv2"><span>${translate("当前入射角")}</span><b>${y(t.i, 1)}°</b><span>sin C = 1/n</span><b>${y(1 / Se(t.material, t.lambda), 3)}</b><span>${translate("状态")}</span><b class="hi">${p.tir ? translate("全反射") : translate("折射 + 反射")}</b></div></div>`,
          };
        }
        return null;
      },
      csv() {
        return e.records.length
          ? [
              o === "mirror"
                ? ["i/deg", "r/deg"]
                : ["material", "i/deg", "r/deg", "sin i", "sin r"],
              ...e.records.map((v) =>
                o === "mirror"
                  ? [v.i, +v.r.toFixed(3)]
                  : [
                      v.mat,
                      v.i,
                      +v.r.toFixed(3),
                      +Math.sin(z(v.i)).toFixed(4),
                      +Math.sin(z(v.r)).toFixed(4),
                    ],
              ),
            ]
          : null;
      },
      dispose() {
        e.lab.disk.visible = !1;
      },
    }
  );
}
function mt(e, t) {
  if (Math.abs(e - t) < 1e-9)
    return {
      v: 1 / 0,
      m: 1 / 0,
      kind: "none",
    };
  const s = 1 / (1 / t - 1 / e),
    o = -s / e;
  return {
    v: s,
    m: o,
    real: s > 0,
    inverted: o < 0,
    enlarged: Math.abs(o) > 1,
    kind: s > 0 ? "real" : "virtual",
  };
}
function Bt(e, t) {
  if (t < 0) return "concave";
  const s = 1e-6;
  return e > 2 * t + s
    ? "u>2f"
    : Math.abs(e - 2 * t) <= s
      ? "u=2f"
      : e > t + s
        ? "f<u<2f"
        : Math.abs(e - t) <= s
          ? "u=f"
          : "u<f";
}
function Ft(e, t, s, o) {
  const { v: i } = mt(e, t);
  return !(i > 0) || !isFinite(i) ? 1 / 0 : (o * Math.abs(s - i)) / i;
}
function fs(e, t, s) {
  const o = [Math.cos(s), Math.sin(s)],
    i = [e[0] - t[0], e[1] - t[1]],
    r = i[0] * o[0] + i[1] * o[1],
    l = [t[0] + o[0] * r, t[1] + o[1] * r];
  return [2 * l[0] - e[0], 2 * l[1] - e[1]];
}
const Ee = {
    normal: {
      L: 0.017,
    },
    myopia: {
      L: 0.0178,
    },
    hyperopia: {
      L: 0.0164,
    },
  },
  Qe = 1 / 0.017,
  bt = 1 / 0.017 + 4;
function zt(e, t, s = 0) {
  const { L: o } = Ee[e],
    i = 1 / o + 1 / t - s,
    r = Math.min(bt, Math.max(Qe, i)),
    a = 1 / (r + s - 1 / t),
    d = a > 0 ? (0.004 * Math.abs(o - a)) / a : 1 / 0;
  return {
    P: r,
    need: i,
    v: a,
    L: o,
    blur: d,
    sharp: d < 2e-5,
    accommodating: r > Qe + 1e-6,
    strained: i > bt + 1e-6,
    relaxedTooStrong: i < Qe - 1e-6,
  };
}
function lt(e, t = 0) {
  const { L: s } = Ee[e],
    o = Qe + t - 1 / s;
  return o <= 0 ? 1 / 0 : 1 / o;
}
function ct(e, t = 0) {
  const { L: s } = Ee[e],
    o = bt + t - 1 / s;
  return o <= 0 ? 1 / 0 : 1 / o;
}
function us(e) {
  const t = e.params,
    s = e.add(Xn(0.2, 0.12));
  F(s, [0, 0], Math.PI / 2);
  const o = e.add(
      Ne({
        lit: !0,
        seed: 1,
      }),
    ),
    i = e.add(
      Ne({
        lit: !1,
        seed: 2,
      }),
    ),
    r = e.add(
      Ne({
        lit: !0,
        seed: 1,
        ghost: !0,
      }),
    ),
    l = e.add(pt("#ffd9a0", 0.75)),
    a = e.add(pt("#6cc8ff", 0.5));
  let c = !1;
  (e.draggable(o, {
    pos: () => [-t.u, 0],
    move(f) {
      e.setParam("u", le(Math.round(-f[0] * 200) / 200, 0.06, 0.32));
    },
  }),
    e.draggable(i, {
      pos: () => [t.bx, t.by],
      move(f) {
        ((t.bx = le(f[0], 0.03, 0.4)), (t.by = le(f[1], -0.3, 0.3)));
      },
    }));
  const d = () => fs([-t.u, 0], [0, 0], Math.PI / 2),
    u = [
      [-0.32, 0.24],
      [-0.3, 0.13],
    ];
  function h() {
    (F(o, [-t.u, 0]), F(i, [t.bx, t.by]));
    const f = d();
    F(r, f);
    const b = Math.hypot(t.bx - f[0], t.by - f[1]),
      w = c;
    ((c = b < 0.006),
      c && !w && e.flash(translate("重合了！B 看起来就像被点燃一样")),
      i.setLit(!1));
    const m = [],
      p = [];
    if (t.rays)
      for (const g of u) {
        const $ = (0 - f[0]) / (g[0] - f[0]),
          I = [0, f[1] + $ * (g[1] - f[1])];
        (m.push(
          {
            a: [-t.u, 0],
            b: I,
            lambda: 590,
            I: 0.9,
          },
          {
            a: I,
            b: g,
            lambda: 590,
            I: 0.65,
          },
        ),
          p.push([I, f]));
      }
    (e.beams.set(m),
      (l.visible = t.rays),
      l.set(p),
      a.set(
        [
          [
            [-t.u, -0.07],
            [0, -0.07],
          ],
          [
            [0, -0.07],
            [f[0], -0.07],
          ],
        ],
        0.004,
      ));
  }
  return {
    update(f, b, w) {
      (w && h(), o.tick(b, e.camera), r.tick(b, e.camera));
      const m = 0.012;
      (e.tag(
        "A",
        new e.THREE.Vector3(-t.u, e.BEAM_H + 0.035, 0),
        translate("蜡烛 A"),
        "gold",
      ),
        e.tag(
          "B",
          new e.THREE.Vector3(t.bx, e.BEAM_H + 0.035, t.by),
          c ? translate("B 与像重合") : translate("蜡烛 B"),
          c ? "ok" : "",
        ),
        e.tag(
          "u",
          new e.THREE.Vector3(-t.u / 2, m, -0.07),
          `u = ${y(t.u * 100, 1)} cm`,
          "blue",
        ),
        e.tag(
          "v",
          new e.THREE.Vector3(t.u / 2, m, -0.07),
          `v = ${y(t.u * 100, 1)} cm`,
          "blue",
        ),
        t.rays &&
          e.tag(
            "I",
            new e.THREE.Vector3(d()[0], e.BEAM_H + 0.05, d()[1]),
            translate("虚像"),
            "dim",
          ));
    },
    onParam() {},
    readouts() {
      const f = d();
      return [
        [translate("物距 u"), `${y(t.u * 100, 1)} cm`],
        [translate("像距 v"), `${y(f[0] * 100, 1)} cm`],
        [translate("B 到玻璃板"), `${y(t.bx * 100, 1)} cm`],
        [
          translate("B 与像相距"),
          `${y(Math.hypot(t.bx - f[0], t.by - f[1]) * 100, 1)} cm`,
        ],
        [translate("像的性质"), translate("正立 · 等大 · 虚像")],
      ];
    },
    hud: () => [
      ["u", y(t.u * 100, 1), "cm"],
      ["v", y(t.u * 100, 1), "cm"],
      [
        translate("偏差"),
        y(Math.hypot(t.bx - d()[0], t.by - d()[1]) * 100, 1),
        "cm",
      ],
    ],
    dock() {
      const f = d();
      return {
        html: `<div class="gview"><div class="kv2"><span>${translate("物距 u")}</span><b>${y(t.u * 100, 1)} cm</b><span>${translate("像距 v")}</span><b>${y(f[0] * 100, 1)} cm</b><span>${translate("B 的位置")}</span><b>(${y(t.bx * 100, 1)}, ${y(t.by * 100, 1)}) cm</b><span>${translate("是否重合")}</span><b class="hi">${c ? translate("是") : translate("否")}</b></div><p class="tnote">${translate("玻璃板既能反射成像，又能透光，所以能同时看到 A 的像和后面的 B。用光屏放在像的位置，屏上接收不到像，说明平面镜成的是虚像。")}</p></div>`,
      };
    },
  };
}
const Ce = 0.07,
  Ze = [];
for (let e = 405; e <= 695; e += 10) Ze.push(e);
function Dt() {
  const e = Z(),
    t = new W(),
    s = new P(
      new O(0.06, 0.06, 0.006, 64),
      new D({
        color: "#1d2025",
        metalness: 0.6,
        roughness: 0.45,
      }),
    );
  s.position.y = -0.009;
  const o = new P(new O(0.012, 0.012, 0.1, 24), e.chrome);
  o.position.y = -0.062;
  const i = new P(new O(0.045, 0.05, 0.01, 48), e.darkSteel);
  return ((i.position.y = -0.105), t.add(s, o, i), K(t));
}
function ps(e) {
  const t = e.params,
    s = e.add(Ue()),
    o = e.add(nt()),
    i = {
      p: [-0.36, -0.153],
      angle: z(25),
    };
  (F(s, i.p, i.angle), F(o, i.p, i.angle));
  const r = e.add(Dt());
  F(r, [0, 0]);
  const l = tt(Pe([0, 0], Ce), 0.034, "flint");
  (r.add(l),
    (l.position.y = 0),
    e.rotator(r, {
      radius: 0.068,
      height: 0.04,
      get: () => z(t.rot),
      set: (I) =>
        e.setParam(
          "rot",
          Math.max(-30, Math.min(30, Math.round(ee(I) * 2) / 2)),
        ),
    }));
  const a = xe(
      [
        {
          kind: "block",
          poly: Pe([0, 0], Ce),
          material: "flint",
          noReflect: !0,
        },
      ],
      [
        {
          kind: "laser",
          p: i.p,
          angle: i.angle,
          lambda: 590,
        },
      ],
    ),
    c = a.segments[a.segments.length - 1],
    d = Math.atan2(c.b[1] - c.a[1], c.b[0] - c.a[0]),
    u = [c.a[0] + Math.cos(d) * 0.42, c.a[1] + Math.sin(d) * 0.42],
    h = d + Math.PI / 2,
    f = e.add(Xe(0.2, 0.12));
  F(f, u, h);
  const b = [c.a[0] + Math.cos(d) * 0.12, c.a[1] + Math.sin(d) * 0.12],
    w = e.add(Dt());
  F(w, b);
  const m = tt(Pe([0, 0], Ce), 0.034, "flint");
  w.add(m);
  let p = {
    segments: [],
    hits: [],
  };
  function g() {
    ((s.visible = t.source === "white"),
      (o.visible = t.source !== "white"),
      o.setColor?.(Ge(oe(t.source === "red" ? 650 : 532))),
      (r.rotation.y = -z(t.rot)),
      (w.visible = t.second));
    const I = Math.PI + z(t.rot);
    w.rotation.y = -I;
    const L = [
      {
        kind: "block",
        poly: Pe([0, 0], Ce, Math.PI / 3, z(t.rot)),
        material: "flint",
        noReflect: !0,
      },
    ];
    (t.second &&
      L.push({
        kind: "block",
        poly: Pe(b, Ce, Math.PI / 3, I),
        material: "flint",
        noReflect: !0,
      }),
      L.push({
        kind: "screen",
        p: u,
        angle: h,
        len: 0.2,
      }));
    const v =
      t.source === "white"
        ? {
            kind: "white",
            p: i.p,
            angle: i.angle,
            lambdas: Ze,
          }
        : {
            kind: "laser",
            p: i.p,
            angle: i.angle,
            lambda: t.source === "red" ? 650 : 532,
          };
    ((p = xe(L, [v], {
      minI: 0.02,
    })),
      e.beams.set(p.segments, {
        whiteCount: Ze.length,
      }));
    const k = f.ctx,
      C = f.canvas.width,
      S = f.canvas.height;
    (st(k, C, S),
      t.source === "white" && !t.second
        ? as(k, C, S, f.w, p.hits, 0.03)
        : yt(
            k,
            C,
            S,
            f.w,
            p.hits.map((j) => ({
              ...j,
              stretch: 2.2,
            })),
            {
              whiteCount: Ze.length,
              size: 1.8,
            },
          ),
      (f.texture.needsUpdate = !0));
  }
  function $() {
    return Qt.map((I) => {
      const L = xe(
          [
            {
              kind: "block",
              poly: Pe([0, 0], Ce, Math.PI / 3, z(t.rot)),
              material: "flint",
              noReflect: !0,
            },
          ],
          [
            {
              kind: "laser",
              p: i.p,
              angle: i.angle,
              lambda: I,
            },
          ],
        ),
        v = L.segments[L.segments.length - 1],
        k = Math.atan2(v.b[1] - v.a[1], v.b[0] - v.a[0]);
      return {
        l: I,
        n: Se("flint", I),
        dev: L.segments.length >= 3 ? Math.abs(ee(i.angle - k)) : null,
      };
    });
  }
  return {
    update(I, L, v) {
      v && g();
      const k = e.BEAM_H;
      if (
        (e.tag("scr", new _(u[0], k + 0.075, u[1]), translate("光屏"), "dim"),
        t.source === "white" && !t.second && p.hits.length > 2)
      ) {
        const C = [...p.hits].sort((j, H) => j.lambda - H.lambda),
          S = (j) => new _(j.p[0], k + 0.04, j.p[1]);
        (e.tag("v", S(C[0]), translate("紫"), "violet"),
          e.tag("r", S(C[C.length - 1]), translate("红"), "red"));
      }
    },
    onParam() {},
    readouts() {
      const I = $(),
        L = I.find((C) => C.l === 690),
        v = I.find((C) => C.l === 410),
        k = I.find((C) => C.l === 590);
      return [
        [translate("棱镜顶角"), "60°"],
        [translate("红光折射率"), y(L.n, 4)],
        [translate("紫光折射率"), y(v.n, 4)],
        [translate("黄光偏向角"), `${y(k.dev, 2)}°`],
        [
          translate("红紫光夹角"),
          L.dev && v.dev ? `${y(v.dev - L.dev, 2)}°` : "—",
        ],
      ];
    },
    hud() {
      const I = $(),
        L = I.find((k) => k.l === 690),
        v = I.find((k) => k.l === 410);
      return [
        [translate("转角"), y(t.rot, 1), "°"],
        [translate("红光偏向"), y(L.dev, 1), "°"],
        [translate("紫光偏向"), y(v.dev, 1), "°"],
      ];
    },
    dock() {
      const L = $().map((v) => [
        `<i class="sw" style="background:${Ge(oe(v.l))}"></i>${v.l} nm`,
        y(v.n, 4),
        v.dev == null ? translate("全反射") : `${y(v.dev, 2)}°`,
      ]);
      return {
        html: `<div class="gview">${qe(
          [translate("波长"), translate("折射率 n"), translate("偏向角 δ")],
          L,
          {
            del: !1,
          },
        )}<p class="tnote">${translate("波长越短，折射率越大，偏折越多。转动棱镜可以找到偏向角最小的位置（最小偏向角）。")}</p></div>`,
      };
    },
    inset: () => ({
      canvas: f.canvas,
      label: translate("光屏特写"),
    }),
    csv: () => [
      ["lambda/nm", "n", "deviation/deg"],
      ...$().map((I) => [
        I.l,
        +I.n.toFixed(5),
        I.dev == null ? "" : +I.dev.toFixed(3),
      ]),
    ],
  };
}
const ze = 0.05,
  De = 0.022,
  _t = () => [
    [
      "u>2f",
      translate("u > 2f"),
      translate("f < v < 2f"),
      translate("倒立 缩小 实像"),
      translate("照相机"),
    ],
    [
      "u=2f",
      translate("u = 2f"),
      translate("v = 2f"),
      translate("倒立 等大 实像"),
      translate("测焦距"),
    ],
    [
      "f<u<2f",
      translate("f < u < 2f"),
      translate("v > 2f"),
      translate("倒立 放大 实像"),
      translate("投影仪"),
    ],
    [
      "u=f",
      translate("u = f"),
      "—",
      translate("不成像"),
      translate("平行光源"),
    ],
    [
      "u<f",
      translate("u < f"),
      translate("同侧"),
      translate("正立 放大 虚像"),
      translate("放大镜"),
    ],
  ];
function hs(e) {
  const t = e.params;
  e.lab.bench.visible = !0;
  const s = e.add(
      Ne({
        lit: !0,
        seed: 3,
        mount: "carrier",
      }),
    ),
    o = e.add(
      Ne({
        lit: !0,
        seed: 3,
        ghost: !0,
      }),
    );
  let i = null;
  const r = e.add(
      Xe(0.16, 0.12, {
        carrierMount: !0,
      }),
    ),
    l = e.add(pt("#ffd9a0", 0.7)),
    a = e.add(new W());
  function c() {
    (i && e.remove(i), (i = e.add(ut(t.f, ze))));
    const w = d();
    (i.add(w), F(i, [0, 0]), a.clear());
    for (const m of [-2, -1, 1, 2]) {
      const p = new P(
        new Le(0.0028, 12, 8),
        new Y({
          color: Math.abs(m) === 1 ? "#ffd25a" : "#6cc8ff",
          toneMapped: !1,
        }),
      );
      (p.position.set(m * t.f, 0.044, 0.034), a.add(p));
    }
  }
  function d() {
    const w = new W(),
      m = new P(
        new fe(0.04, 0.026, 0.07),
        new D({
          color: "#2b2f36",
          metalness: 0.6,
          roughness: 0.45,
        }),
      );
    m.position.y = -e.BEAM_H + 0.036;
    const p = new P(
      new O(0.0062, 0.0062, e.BEAM_H - 0.05 - ze / 2, 20),
      new D({
        color: "#e8ebef",
        metalness: 1,
        roughness: 0.1,
      }),
    );
    return (
      (p.position.y = -e.BEAM_H + 0.049 + (e.BEAM_H - 0.05 - ze / 2) / 2),
      w.add(m, p),
      w
    );
  }
  (c(),
    e.draggable(s, {
      pos: () => [-t.u, 0],
      move(w) {
        e.setParam("u", le(Math.round(-w[0] * 200) / 200, 0.04, 0.45));
      },
    }),
    e.draggable(r, {
      pos: () => [t.s, 0],
      move(w) {
        e.setParam("s", le(Math.round(w[0] * 500) / 500, 0.05, 0.55));
      },
    }));
  let u = mt(t.u, t.f);
  function h() {
    (F(s, [-t.u, 0]),
      F(r, [t.s, 0], Math.PI / 2),
      (u = mt(t.u, t.f)),
      (o.visible = !u.real && isFinite(u.v)),
      o.visible &&
        (F(o, [u.v, 0]), o.scale.setScalar(Math.min(6, Math.abs(u.m)))));
    const w = [],
      m = [];
    if (t.rays) {
      const p = [-t.u, De],
        g = {
          kind: "lens",
          p: [0, 0],
          angle: 0,
          f: t.f,
          aperture: 0.12,
        },
        $ = 0.6,
        I = [0, Math.atan2(-De, t.u)];
      t.u > t.f + 1e-6
        ? I.push(Math.atan2(-De, t.u - t.f))
        : t.u < t.f - 1e-6 && I.push(Math.atan2(De, t.f - t.u));
      for (const L of I) {
        const v = xe(
          [
            g,
            {
              kind: "stop",
              p: [$, 0],
              angle: Math.PI / 2,
              len: 1,
            },
            {
              kind: "stop",
              p: [t.s, 0],
              angle: Math.PI / 2,
              len: u.real && t.s > 0 ? 0.12 : 0,
            },
          ],
          [
            {
              kind: "laser",
              p,
              angle: L,
              lambda: 600,
            },
          ],
        );
        for (const k of v.segments)
          w.push({
            ...k,
            I: 0.75,
          });
        if (!u.real) {
          const k = v.segments[v.segments.length - 1];
          if (k && isFinite(u.v)) {
            const C = (u.v - k.a[0]) / (k.b[0] - k.a[0]);
            m.push([k.a, [u.v, k.a[1] + C * (k.b[1] - k.a[1])]]);
          }
        }
      }
    }
    (e.beams.set(w, {
      vertical: !0,
    }),
      (l.visible = !!m.length),
      l.set(m, e.BEAM_H, !0),
      f(0));
  }
  function f(w) {
    const m = r.ctx,
      p = r.canvas.width,
      g = r.canvas.height;
    if ((st(m, p, g, "#0d0d0e"), u.real && isFinite(u.v))) {
      const $ = Ft(t.u, t.f, t.s, ze),
        I = p / r.w;
      rs(m, p, g, r.w, {
        m: u.m * (t.s / u.v),
        blurPx: ($ * I) / 2,
        objH: De,
        t: w,
        brightness: 1,
      });
    } else {
      const $ = m.createRadialGradient(p / 2, g / 2, 0, p / 2, g / 2, p * 0.45);
      ($.addColorStop(0, "rgba(255,170,80,.16)"),
        $.addColorStop(1, "rgba(255,170,80,0)"),
        (m.fillStyle = $),
        m.fillRect(0, 0, p, g));
    }
    r.texture.needsUpdate = !0;
  }
  const b = () => u.real && Ft(t.u, t.f, t.s, ze) < 8e-4;
  return {
    update(w, m, p) {
      (p && h(),
        s.tick(m, e.camera),
        o.visible && o.tick(m, e.camera),
        Math.floor(m * 12) !== Math.floor((m - w) * 12) && f(m));
      const g = 0.03;
      (e.tag("F1", new _(-t.f, g, 0.04), "F", "gold"),
        e.tag("F2", new _(t.f, g, 0.04), "F'", "gold"),
        e.tag("2F1", new _(-2 * t.f, g, 0.04), "2F", "blue"),
        e.tag("2F2", new _(2 * t.f, g, 0.04), "2F'", "blue"),
        o.visible &&
          e.tag(
            "vi",
            new _(u.v, e.BEAM_H + 0.04 * Math.min(6, Math.abs(u.m)), 0),
            translate("虚像"),
            "dim",
          ),
        b() &&
          e.tag(
            "ok",
            new _(t.s, e.BEAM_H + 0.075, 0),
            translate("像最清晰"),
            "ok",
          ));
    },
    onParam(w) {
      w === "f" && c();
    },
    actions: () => [
      {
        label: translate("自动对焦"),
        run() {
          if (!u.real || u.v > 0.55) {
            e.flash(
              u.real
                ? translate("像距超出光具座范围")
                : translate("此时不成实像，光屏上接收不到像"),
            );
            return;
          }
          e.setParam("s", Math.round(u.v * 1e3) / 1e3);
        },
      },
    ],
    record() {
      if (!b())
        return (
          e.flash(translate("像还不够清晰，先移动光屏找到最清晰的像")),
          !1
        );
      (e.records.push({
        f: t.f,
        u: t.u,
        v: t.s,
      }),
        e.flash(translate("已记录第 {0} 组数据", [e.records.length])));
    },
    readouts() {
      const w = _t().find((m) => m[0] === Bt(t.u, t.f));
      return [
        [translate("焦距 f"), `${y(t.f * 100, 1)} cm`],
        [translate("物距 u"), `${y(t.u * 100, 1)} cm`],
        [
          translate("像距 v（公式）"),
          isFinite(u.v) ? `${y(u.v * 100, 1)} cm` : "∞",
        ],
        [translate("光屏位置"), `${y(t.s * 100, 1)} cm`],
        [translate("放大率"), isFinite(u.m) ? `${y(Math.abs(u.m), 2)} ×` : "—"],
        [translate("成像情况"), w ? w[3] : "—"],
      ];
    },
    hud: () => [
      ["u", y(t.u * 100, 1), "cm"],
      ["v", isFinite(u.v) ? y(u.v * 100, 1) : "∞", "cm"],
      ["|m|", isFinite(u.m) ? y(Math.abs(u.m), 2) : "—", "×"],
    ],
    dock(w) {
      const m = e.records;
      if (w === "uv")
        return m.length
          ? {
              html: `<div class="gview">${qe(
                [
                  "f / cm",
                  "u / cm",
                  "v / cm",
                  "1/u",
                  "1/v",
                  "1/u + 1/v",
                  "1/f",
                ],
                m.map((g) => [
                  y(g.f * 100, 0),
                  y(g.u * 100, 1),
                  y(g.v * 100, 1),
                  y(1 / g.u, 2),
                  y(1 / g.v, 2),
                  `<b>${y(1 / g.u + 1 / g.v, 2)}</b>`,
                  y(1 / g.f, 2),
                ]),
              )}</div>`,
              bind: ht(m, () => e.refreshDock()),
            }
          : {
              html: nn(translate("在光屏上得到清晰的像后按“记录数据”。")),
            };
      if (w === "uvfit") {
        const g = m.map((L) => [1 / L.u, 1 / L.v]),
          $ =
            g.length >= 2
              ? In(
                  g.map((L) => L[0]),
                  g.map((L) => L[1]),
                )
              : null,
          I = Math.max(12, ...g.map((L) => L[0] * 1.15));
        return {
          chart: {
            series: [
              {
                pts: g,
                color: "#ffd25a",
                kind: "scatter",
                name: translate("实验数据"),
              },
            ],
            x: [0, I],
            y: [0, null],
            fit: $
              ? {
                  ...$,
                  color: "#e8e6e0",
                  label: `k = ${$.k.toFixed(3)}  b = ${$.b.toFixed(2)} m⁻¹`,
                }
              : null,
            fitRange: [0, I],
            xLabel: "1/u / m⁻¹",
            yLabel: "1/v / m⁻¹",
            xName: "1/u",
          },
          side: `<div class="fitside"><b class="big">${m.length}</b><span>${translate("组数据")}</span>${$ ? `<div class="res">f ≈ ${y(100 / $.b, 1)} cm</div>` : ""}<p>${translate("1/u 与 1/v 成一次函数关系，斜率约为 −1，截距等于 1/f。")}</p></div>`,
        };
      }
      const p = Bt(t.u, t.f);
      return {
        html: `<div class="gview"><table class="tbl cases"><thead><tr><th>${translate("物距")}</th><th>${translate("像距")}</th><th>${translate("像的性质")}</th><th>${translate("应用")}</th></tr></thead><tbody>${_t()
          .map(
            (g) =>
              `<tr class="${g[0] === p ? "cur" : ""}"><td>${g[1]}</td><td>${g[2]}</td><td>${g[3]}</td><td>${g[4]}</td></tr>`,
          )
          .join("")}</tbody></table></div>`,
      };
    },
    inset: () => ({
      canvas: r.canvas,
      label: translate("光屏特写"),
    }),
    csv: () =>
      e.records.length
        ? [["f/m", "u/m", "v/m"], ...e.records.map((w) => [w.f, w.u, w.v])]
        : null,
    dispose() {
      e.lab.bench.visible = !1;
    },
  };
}
function ms() {
  const e = new W(),
    t = document.createElement("canvas");
  ((t.width = 256), (t.height = 384));
  const s = t.getContext("2d");
  ((s.fillStyle = "#f4f1e8"),
    s.fillRect(0, 0, 256, 384),
    (s.fillStyle = "#111"));
  const o = (a, c, d, u) => {
    (s.save(),
      s.translate(a, c),
      s.rotate(u),
      s.fillRect(-d / 2, -d / 2, d * 0.2, d));
    for (const h of [-d / 2, -d * 0.1, d / 2 - d * 0.2])
      s.fillRect(-d / 2, h, d, d * 0.2);
    s.restore();
  };
  (o(128, 70, 80, 0),
    [
      [80, 170, 46, Math.PI / 2],
      [176, 170, 46, Math.PI],
    ].forEach((a) => o(...a)),
    [
      [64, 250, 28, 0],
      [128, 250, 28, -Math.PI / 2],
      [192, 250, 28, Math.PI / 2],
    ].forEach((a) => o(...a)),
    [
      [48, 315, 16, Math.PI],
      [96, 315, 16, 0],
      [144, 315, 16, Math.PI / 2],
      [192, 315, 16, -Math.PI / 2],
    ].forEach((a) => o(...a)));
  const i = new be(t);
  i.colorSpace = we;
  const r = new P(
    new Q(0.08, 0.12),
    new D({
      map: i,
      roughness: 0.8,
      emissive: "#ffffff",
      emissiveMap: i,
      emissiveIntensity: 0.35,
    }),
  );
  r.rotation.y = Math.PI / 2;
  const l = new P(
    new fe(0.004, 0.126, 0.086),
    new D({
      color: "#1d2025",
    }),
  );
  return ((l.position.x = -0.0025), e.add(r, l, Me(sn.BEAM_H - 0.06)), e);
}
let sn = null;
const Nt = -0.02;
function bs(e) {
  sn = e;
  const t = e.params,
    s = e.add(ss());
  F(s, [0.08, 0]);
  const o = e.add(ms());
  F(o, [-0.5, 0]);
  let i = null,
    r = null;
  const l = new vt("#fff1dc", 0.4, 0.6, 2);
  (l.position.set(-0.42, e.BEAM_H + 0.08, 0.1),
    e.add(l),
    e.draggable(o, {
      pos: () => [-0.5, 0],
      move(f) {
        const b = le((-f[0] - 0.2) / 0.45, 0, 1);
        e.setParam("dEye", Math.round(0.15 * Math.pow(8 / 0.15, b) * 20) / 20);
      },
    }));
  let a = zt(t.eye, t.dEye, t.glasses);
  function c() {
    ((a = zt(t.eye, t.dEye, t.glasses)),
      s.setAxial(Ee[t.eye].L),
      s.setPower(a.P));
    const f = Math.log(t.dEye / 0.15) / Math.log(8 / 0.15);
    (F(o, [-(0.2 + 0.45 * f), 0]),
      t.glasses !== r &&
        (i && e.remove(i),
        (i = null),
        t.glasses && ((i = e.add(os(1 / t.glasses))), F(i, [Nt, 0])),
        (r = t.glasses)));
    const b = [],
      w = 0.08,
      m = Nt,
      p = Ee[t.eye].L * Ie,
      g = w - t.dEye * Ie,
      $ = i ? m : w,
      I = Math.max(-0.48, g),
      L = w + p * 1.25;
    for (const v of [-0.02, -0.01, 0.01, 0.02]) {
      let k = v / ($ - g);
      const C = [
        [I, v + k * (I - $)],
        [$, v],
      ];
      let S = v;
      (i &&
        ((k -= (v * t.glasses) / Ie), (S = v + k * (w - m)), C.push([w, S])),
        (k -= (S * a.P) / Ie),
        C.push([L, S + k * (L - w)]));
      for (let j = 0; j < C.length - 1; j++)
        b.push({
          a: C[j],
          b: C[j + 1],
          lambda: 580,
          I: 0.7,
        });
    }
    (e.beams.set(b, {
      vertical: !0,
    }),
      d());
  }
  function d() {
    const f = s.retinaCanvas,
      b = f.width;
    (cs(f.getContext("2d"), b, {
      blurPx: (a.blur / 0.005) * b,
      scale: le(1.4 / Math.sqrt(t.dEye), 0.3, 1.6),
    }),
      (s.retinaTexture.needsUpdate = !0));
  }
  const u = () =>
      a.sharp
        ? translate("正好落在视网膜上")
        : a.v < a.L
          ? translate("落在视网膜前方")
          : translate("落在视网膜后方"),
    h = () => {
      const f = lt(t.eye),
        b = ct(t.eye);
      return t.eye === "myopia"
        ? -1 / f
        : t.eye === "hyperopia"
          ? Math.round((1 / 0.25 - 1 / b) * 4) / 4
          : 0;
    };
  return {
    update(f, b, w) {
      w && c();
      const m = e.BEAM_H;
      (e.tag(
        "chart",
        new _(o.position.x, m + 0.08, 0),
        `${translate("视力表")} · ${y(t.dEye, 2)} m`,
        "gold",
      ),
        e.tag(
          "retina",
          new _(0.08 + Ee[t.eye].L * Ie, m + 0.1, 0),
          translate("视网膜"),
          "dim",
        ),
        e.tag("lens", new _(0.08, m + 0.06, 0), translate("晶状体"), "dim"),
        e.tag(
          "img",
          new _(0.08 + Math.min(0.4, a.v * Ie), m - 0.035, 0),
          `${translate("像")}：${u()}`,
          a.sharp ? "ok" : "warn",
        ));
    },
    onParam() {},
    actions: () => [
      {
        label: translate("配一副合适的眼镜"),
        run() {
          const f = Math.round(h() * 4) / 4;
          (e.setParam("glasses", Math.max(-5, Math.min(5, f))),
            e.flash(
              f
                ? translate("配镜：{0} D", [f.toFixed(2)])
                : translate("正常眼不需要配镜"),
            ));
        },
      },
    ],
    inset: () => ({
      canvas: s.retinaCanvas,
      label: translate("视网膜上的像"),
      round: !0,
    }),
    readouts() {
      const f = lt(t.eye, t.glasses),
        b = ct(t.eye, t.glasses);
      return [
        [translate("物距"), `${y(t.dEye, 2)} m`],
        [translate("晶状体光焦度"), `${y(a.P, 1)} D`],
        [
          translate("调节"),
          a.strained
            ? translate("已到极限")
            : a.accommodating
              ? translate("正在调节")
              : translate("放松"),
        ],
        [translate("远点"), isFinite(f) ? `${y(f, 2)} m` : "∞"],
        [translate("近点"), isFinite(b) ? `${y(b * 100, 0)} cm` : "∞"],
        [translate("像"), u()],
      ];
    },
    hud: () => [
      [translate("物距"), y(t.dEye, 2), "m"],
      [translate("晶状体"), y(a.P, 1), "D"],
      [translate("眼镜"), y(t.glasses, 2), "D"],
    ],
    dock() {
      const f = ["normal", "myopia", "hyperopia"].map((b) => {
        const w = lt(b),
          m = ct(b);
        return `<tr class="${b === t.eye ? "cur" : ""}"><td>${
          {
            normal: translate("正常眼"),
            myopia: translate("近视眼"),
            hyperopia: translate("远视眼"),
          }[b]
        }</td><td>${y(Ee[b].L * 1e3, 1)} mm</td><td>${isFinite(w) ? y(w, 2) + " m" : "∞"}</td><td>${y(m * 100, 0)} cm</td></tr>`;
      });
      return {
        html: `<div class="gview"><table class="tbl cases"><thead><tr><th></th><th>${translate("眼轴")}</th><th>${translate("远点")}</th><th>${translate("近点")}</th></tr></thead><tbody>${f.join("")}</tbody></table><div class="kv2"><span>${translate("推荐眼镜")}</span><b class="hi">${y(h(), 2)} D</b><span>${translate("度数")}</span><b>${Math.round(Math.abs(h()) * 100)}°</b><span>${translate("镜片")}</span><b>${h() < 0 ? translate("凹透镜") : h() > 0 ? translate("凸透镜") : "—"}</b></div></div>`,
      };
    },
  };
}
const gs =
    "varying vec2 vP; void main(){ vP = position.xy; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",
  ws = `
#define MAXS 9
uniform float uTime; uniform float uK; uniform int uN; uniform float uD; uniform vec3 uColor; uniform float uAvg; uniform float uLen; uniform float uSlitW;
varying vec2 vP;
void main(){
  // 局部坐标：x 从缝屏（0）指向光屏（uLen），y 为横向
  vec2 p = vec2(vP.x, vP.y);
  if (p.x < 0.0) discard;
  float re = 0.0, im = 0.0;
  for (int i = 0; i < MAXS; i++){
    if (i >= uN) break;
    float y0 = (float(i) - float(uN - 1) * 0.5) * uD;
    float r = length(p - vec2(0.0, y0)) + 1e-4;
    float a = 1.0 / sqrt(r * 30.0 + 1.0);
    re += a * cos(uK * r - uTime);
    im += a * sin(uK * r - uTime);
  }
  float inst = re;                           // 瞬时振幅（显示波峰波谷）
  float avg = (re * re + im * im) / float(uN * uN); // 时间平均光强
  float fadeIn = smoothstep(0.0, 0.02, p.x) * (1.0 - smoothstep(uLen * 0.92, uLen, p.x));
  float v = mix(max(0.0, inst) * 0.9 / sqrt(float(uN)), avg * 1.6, uAvg);
  gl_FragColor = vec4(uColor * v * fadeIn, v * fadeIn * 0.9);
}`;
function vs(e) {
  const t = new wt({
      vertexShader: gs,
      fragmentShader: ws,
      uniforms: {
        uTime: {
          value: 0,
        },
        uK: {
          value: 300,
        },
        uN: {
          value: 2,
        },
        uD: {
          value: 0.02,
        },
        uColor: {
          value: new ge("#ff3b2f"),
        },
        uAvg: {
          value: 0,
        },
        uLen: {
          value: 0.5,
        },
        uSlitW: {
          value: 0.002,
        },
      },
      transparent: !0,
      depthWrite: !1,
      blending: Oe,
      toneMapped: !1,
    }),
    s = new P(new Q(1, 1, 1, 1), t);
  return (
    (s.rotation.x = -Math.PI / 2),
    (s.visible = !1),
    e.add(s),
    {
      mesh: s,
      place(o, i, r, l) {
        s.geometry.dispose();
        const a = new Q(r, l);
        (a.translate(r / 2, 0, 0),
          (s.geometry = a),
          s.position.set(o, i, 0),
          (t.uniforms.uLen.value = r));
      },
      set({ n: o, dVis: i, lambdaVis: r, color: l, avg: a }) {
        ((t.uniforms.uN.value = o),
          (t.uniforms.uD.value = i),
          (t.uniforms.uK.value = (2 * Math.PI) / r),
          t.uniforms.uColor.value.copy(l),
          (t.uniforms.uAvg.value = a ? 1 : 0));
      },
      tick(o) {
        t.uniforms.uTime.value = o * 7;
      },
    }
  );
}
const dt = -0.52,
  ie = -0.26,
  me = [];
for (let e = 400; e <= 700; e += 10) me.push(e);
function Ms(e) {
  const t = e.params;
  e.lab.bench.visible = !0;
  const s = e.add(nt()),
    o = e.add(Ue());
  (F(s, [dt, 0]), F(o, [dt, 0]));
  const i = e.add(Qn());
  F(i, [ie, 0]);
  let r = null,
    l = 0;
  const a = vs(e.scene);
  e.add(a.mesh);
  function c() {
    const m = t.slitMode === "grating" ? 0.42 : 0.16;
    (r && l === m) ||
      (r && e.remove(r),
      (r = e.add(
        Xe(m, m === 0.42 ? 0.16 : 0.12, {
          carrierMount: !0,
        }),
      )),
      (l = m),
      e.draggable(r, {
        pos: () => [ie + t.L, 0],
        move(p) {
          e.setParam("L", le(Math.round((p[0] - ie) * 100) / 100, 0.4, 0.85));
        },
      }));
  }
  c();
  const d = () => t.slitMode,
    u = (m) => {
      const p = d();
      if (p === "double")
        return {
          lambda: m,
          a: t.a * 0.001,
          d: t.d * 0.001,
          N: 2,
          L: t.L,
        };
      if (p === "single")
        return {
          lambda: m,
          a: t.a * 0.001,
          N: 1,
          L: t.L,
        };
      const g = 0.001 / t.lines;
      return {
        lambda: m,
        a: g * 0.35,
        d: g,
        N: 40,
        L: t.L,
      };
    },
    h = (m, p) => An(u(p), m);
  function f() {
    (c(),
      F(r, [ie + t.L, 0], Math.PI / 2),
      (s.visible = !t.white),
      (o.visible = t.white),
      s.setColor?.(Ge(oe(t.lambda))));
    const m = d();
    i.setSlits(
      m === "single" ? 1 : m === "double" ? 2 : 15,
      m === "grating" ? 6e-4 : Math.max(8e-4, t.a * 0.01),
      m === "double" ? 0.004 + t.d * 0.012 : 0.0016,
    );
    const p = [],
      g = t.white ? me : [t.lambda];
    p.push({
      a: [dt, 0],
      b: [ie, 0],
      lambda: t.lambda,
      I: 1,
      white: t.white,
    });
    const $ = ie + t.L;
    for (const k of g) {
      const C = u(k),
        S = [];
      if (m === "grating")
        for (let j = -2; j <= 2; j++) {
          const H = xt(k, C.d, j);
          H != null && S.push([Math.tan(H) * t.L, 1 / (1 + Math.abs(j))]);
        }
      else S.push([0, 1]);
      for (const [j, H] of S)
        p.push({
          a: [ie, 0],
          b: [$, j],
          lambda: k,
          I: H * (t.white ? (m === "grating" ? 0.22 : 1) : 0.9),
          white: t.white && m !== "grating",
        });
    }
    e.beams.set(p, {
      whiteCount: t.white ? me.length : 1,
    });
    const I = r.ctx,
      L = r.canvas.width,
      v = r.canvas.height;
    if (t.white) {
      const k = me.map((H) => oe(H)),
        C = 1.6 / me.length,
        S = new Map(),
        j = (H) => {
          if (S.has(H)) return S.get(H);
          const q = [0, 0, 0];
          me.forEach((T, G) => {
            const U = h(H, T);
            ((q[0] += k[G][0] * U),
              (q[1] += k[G][1] * U),
              (q[2] += k[G][2] * U));
          });
          const X = q.map((T) => T * C * (m === "grating" ? 3 : 1));
          return (S.set(H, X), X);
        };
      Rt(I, L, v, r.w, () => 1, j, {
        beamH: 0.01,
        gain: 1,
      });
    } else {
      const k = oe(t.lambda);
      Rt(
        I,
        L,
        v,
        r.w,
        (C) => h(C, t.lambda),
        () => k,
        {
          beamH: 0.006,
          gain: 1.15,
        },
      );
    }
    ((r.texture.needsUpdate = !0),
      (a.mesh.visible = !!t.wave && !t.white && m !== "grating"),
      a.mesh.visible &&
        (a.place(ie + 0.004, e.BEAM_H - 5e-4, t.L - 0.01, 0.2),
        a.set({
          n: m === "double" ? 2 : 5,
          dVis:
            m === "double" ? 0.012 + (t.d - 0.1) * 0.03 : 0.0018 * (t.a / 0.1),
          lambdaVis: 0.0045 * (t.lambda / 600),
          color: Jt(t.lambda).clone().multiplyScalar(1.4),
          avg: !1,
        })));
  }
  function b() {
    const m = d();
    if (m === "double")
      return {
        label: "Δx",
        val: Rn(t.lambda, t.L, t.d * 0.001),
      };
    if (m === "single")
      return {
        label: "x₁",
        val: jn(t.lambda, t.a * 0.001, t.L),
      };
    const p = xt(t.lambda, 0.001 / t.lines, 1);
    return {
      label: "x(k=1)",
      val: p == null ? null : Math.tan(p) * t.L,
      theta: p,
    };
  }
  function w() {
    const m = r.w / 2,
      p = 4e3,
      g = [];
    let $ = -1,
      I = -1;
    for (let L = 0; L <= p; L++) {
      const v = -m + (2 * m * L) / p,
        k = h(v, t.lambda);
      ($ > I && $ > k && $ > 0.02 && g.push(-m + (2 * m * (L - 1)) / p),
        (I = $),
        ($ = k));
    }
    return g;
  }
  return {
    update(m, p, g) {
      (g && f(), a.mesh.visible && a.tick(p));
      const $ = e.BEAM_H;
      (e.tag(
        "slit",
        new _(ie, $ + 0.055, 0),
        {
          single: translate("单缝"),
          double: translate("双缝"),
          grating: translate("光栅"),
        }[d()],
        "gold",
      ),
        e.tag(
          "L",
          new _(ie + t.L / 2, 0.035, 0.05),
          `L = ${y(t.L * 100, 0)} cm`,
          "blue",
        ),
        a.mesh.visible &&
          e.tag(
            "wave",
            new _(ie + 0.12, $ + 0.01, -0.09),
            translate("波阵面示意（波长已放大）"),
            "dim",
          ));
    },
    onParam() {},
    readouts() {
      const m = b(),
        p = d(),
        g = [
          [
            translate("波长 λ"),
            t.white ? translate("白光") : `${y(t.lambda, 1)} nm`,
          ],
        ];
      return (
        p === "double" && g.push([translate("缝距 d"), `${y(t.d, 2)} mm`]),
        p !== "grating"
          ? g.push([translate("缝宽 a"), `${y(t.a, 3)} mm`])
          : g.push([translate("光栅常数 d"), `${y(1e3 / t.lines, 2)} µm`]),
        g.push([translate("屏距 L"), `${y(t.L * 100, 0)} cm`]),
        g.push([m.label, m.val == null ? "—" : `${y(m.val * 1e3, 2)} mm`]),
        p === "grating" &&
          m.theta != null &&
          g.push(["θ(k=1)", `${y((m.theta * 180) / Math.PI, 2)}°`]),
        g
      );
    },
    hud() {
      const m = b();
      return [
        [
          "λ",
          t.white ? translate("白光") : y(t.lambda, 0),
          t.white ? "" : "nm",
        ],
        [m.label, m.val == null ? "—" : y(m.val * 1e3, 2), "mm"],
        ["L", y(t.L * 100, 0), "cm"],
      ];
    },
    dock(m) {
      const p = d(),
        g =
          p === "grating"
            ? r.w / 2
            : Math.min(
                r.w / 2,
                (2.4 * t.L * (t.white ? 700 : t.lambda) * 1e-9) / (t.a * 0.001),
              ),
        $ = p === "grating" ? r.w / 2 : g;
      if (m === "profile") {
        const S = [];
        for (let q = 0; q <= 900; q++) {
          const X = -$ + (2 * $ * q) / 900;
          let T;
          (t.white
            ? (T = me.reduce((G, U) => G + h(X, U), 0) / me.length)
            : (T = h(X, t.lambda)),
            S.push([X * 1e3, T]));
        }
        const H = t.white ? "#e8e6e0" : Ge(oe(t.lambda));
        return {
          chart: {
            series: [
              {
                pts: S,
                color: H,
                name: translate("相对光强"),
              },
            ],
            x: [-$ * 1e3, $ * 1e3],
            y: [0, 1.05],
            xLabel: translate("屏上位置 x / mm"),
            yLabel: "I / I₀",
            xName: "x",
          },
        };
      }
      const I = w().filter((S) => Math.abs(S) < $ * 0.9);
      let L = "—",
        v = "—";
      const k = d();
      if (k === "double" && I.length >= 6) {
        const S = I.sort((X, T) => X - T),
          j = Math.floor(S.length / 2),
          H = S.slice(j - 3, j + 3),
          q = (H[H.length - 1] - H[0]) / (H.length - 1);
        ((L = `${y(q * 1e3, 3)} mm`),
          (v = `${y(((q * t.d * 0.001) / t.L) * 1e9, 1)} nm`));
      }
      const C = b();
      return {
        html: `<div class="gview"><div class="kv2"><span>${translate("理论值")} ${C.label}</span><b>${C.val == null ? "—" : y(C.val * 1e3, 3) + " mm"}</b>${k === "double" ? `<span>${translate("测量头：6 条亮纹求平均")}</span><b>${L}</b><span>λ = Δx·d / L</span><b class="hi">${v}</b>` : ""}${k === "single" ? `<span>${translate("中央亮纹宽度")}</span><b class="hi">${C.val == null ? "—" : y(C.val * 2e3, 2) + " mm"}</b>` : ""}</div><p class="tnote">${
          {
            double: translate(
              "双缝干涉条纹等间距、亮度几乎相同；外侧略暗是因为每条缝本身的衍射。",
            ),
            single: translate(
              "单缝衍射的中央亮纹最宽最亮，宽度是两侧亮纹的两倍；缝越窄，条纹越宽。",
            ),
            grating: translate(
              "光栅缝多，主极大又细又亮；刻线越密，光谱展得越开。",
            ),
          }[k]
        }</p></div>`,
      };
    },
    csv() {
      const m = r.w / 2,
        p = [["x/mm", "I/I0"]];
      for (let g = 0; g <= 400; g++) {
        const $ = -m + (2 * m * g) / 400;
        p.push([+($ * 1e3).toFixed(3), +h($, t.lambda).toFixed(5)]);
      }
      return p;
    },
    inset: () => {
      const p =
        d() === "grating"
          ? r.w / 2
          : Math.min(
              r.w / 2,
              (2.4 * t.L * (t.white ? 700 : t.lambda) * 1e-9) / (t.a * 0.001),
            );
      return {
        canvas: r.canvas,
        label: translate("光屏特写"),
        crop: Math.min(1, (1.1 * p) / r.w),
      };
    },
    dispose() {
      ((e.lab.bench.visible = !1), e.scene.remove(a.mesh));
    },
  };
}
const Ae = 50;
function ys(e) {
  const t = e.params,
    s = e.add(ts());
  F(s, [0.06, 0]);
  const o = e.add(ns());
  F(o, [0.06, 0], 0, e.BEAM_H - 0.04);
  const i = e.add(Ue());
  F(i, [-0.32, 0.16], -0.42);
  const r = new vt("#ffc04a", 0, 0.8, 2);
  (r.position.set(-0.2, e.BEAM_H + 0.05, 0.12), e.add(r));
  let l = 0,
    a = 0;
  function c() {
    const h = t.filmMode === "soap";
    ((s.visible = h),
      (o.visible = !h),
      h
        ? e.stage.fly(...e.lesson.cam, 1)
        : e.stage.fly([0.02, 0.36, 0.14], [0.06, e.BEAM_H - 0.04, 0], 1));
  }
  c();
  function d() {
    const h = t.mono ? 589 : 560;
    (ls(o.canvas.getContext("2d"), o.canvas.width, {
      R: t.R,
      lambda: h,
      white: !t.mono,
      viewR: Math.sqrt(12 * 589e-9 * t.R),
    }),
      (o.texture.needsUpdate = !0));
  }
  function u() {
    const h = t.filmMode === "soap";
    ((s.film.material.uniforms.uMono.value = t.mono ? 1 : 0),
      (r.intensity = t.mono ? 0.6 : 0),
      i.slit.material.color.set(
        t.mono
          ? new ge("#ffb52a").multiplyScalar(2.2)
          : new ge("#fff6e8").multiplyScalar(2.2),
      ));
    const f = t.mono ? 589 : 560,
      b = [];
    if (h) {
      const w = [0.06, 0.02],
        m = t.mono ? null : "#fff1d8";
      b.push(
        {
          a: [-0.32, 0.16],
          b: w,
          lambda: f,
          I: 0.6,
          tint: m,
        },
        {
          a: w,
          b: [-0.34, -0.14],
          lambda: f,
          I: 0.4,
          tint: m,
        },
      );
    }
    (e.beams.set(b, {
      whiteCount: 1,
    }),
      h || d());
  }
  return {
    update(h, f, b) {
      ((a = f),
        b && u(),
        t.filmMode === "soap"
          ? ((f - l) / Ae >= 1 &&
              ((l = f), e.flash(translate("肥皂膜破了，重新蘸取一层"))),
            (s.film.material.uniforms.uTime.value = f),
            (s.film.material.uniforms.uAge.value = Math.min(1, (f - l) / Ae)),
            e.tag(
              "top",
              new _(0.06, e.BEAM_H + 0.072, 0),
              translate("上薄"),
              "dim",
            ),
            e.tag(
              "bot",
              new _(0.06, e.BEAM_H - 0.075, 0),
              translate("下厚"),
              "dim",
            ))
          : e.tag(
              "nr",
              new _(0.06, e.BEAM_H - 0.02, 0.05),
              translate("放大观察的牛顿环"),
              "gold",
            ));
    },
    onParam(h) {
      h === "filmMode" && c();
    },
    actions: () =>
      t.filmMode === "soap"
        ? [
            {
              label: translate("重新蘸取肥皂膜"),
              run: () => (l = a),
            },
          ]
        : [],
    inset: () =>
      t.filmMode === "newton"
        ? {
            canvas: o.canvas,
            label: translate("显微镜视野"),
            round: !0,
          }
        : null,
    readouts() {
      if (t.filmMode === "soap") {
        const f = Math.min(1, (a - l) / Ae);
        return [
          [
            translate("照明"),
            t.mono ? translate("钠光 589 nm") : translate("白光"),
          ],
          [translate("膜的折射率"), "1.33"],
          [translate("顶部厚度"), `${y(40 * (1 - 0.55 * f), 0)} nm`],
          [translate("膜的寿命"), `${y(Ae * (1 - f), 0)} s`],
        ];
      }
      const h = t.mono ? 589 : 560;
      return [
        [translate("曲率半径 R"), `${y(t.R, 2)} m`],
        [translate("波长"), t.mono ? "589 nm" : translate("白光")],
        ["r₁", `${y(Be(1, h, t.R) * 1e3, 3)} mm`],
        ["r₅", `${y(Be(5, h, t.R) * 1e3, 3)} mm`],
      ];
    },
    hud() {
      return t.filmMode === "soap"
        ? [[translate("寿命"), y(Ae * (1 - Math.min(1, (a - l) / Ae)), 0), "s"]]
        : [
            ["R", y(t.R, 2), "m"],
            ["r₁", y(Be(1, t.mono ? 589 : 560, t.R) * 1e3, 3), "mm"],
          ];
    },
    dock() {
      if (t.filmMode === "soap") {
        const b = [];
        for (let w = 0; w <= 1200; w += 40) {
          const m = t.mono
            ? oe(589).map((p) => p * Ct(589, w * 1e-9))
            : Yt((p) => Ct(p, w * 1e-9), 1.3);
          b.push(`<i title="${w} nm" style="background:${Ge(m)}"></i>`);
        }
        return {
          html: `<div class="gview col"><div class="fscale">${b.join("")}</div><div class="fscale-ax"><span>0 nm</span><span>400</span><span>800</span><span>1200 nm</span></div><p class="tnote">${translate("膜厚为 0 时两束反射光相位相反（有半波损失），相互抵消，所以最薄处是黑色；随着厚度增加，依次出现各级彩色。")}</p></div>`,
        };
      }
      const h = t.mono ? 589 : 560;
      return {
        html: `<div class="gview"><table class="tbl"><thead><tr><th>k</th><th>r<sub>k</sub> / mm</th><th>r<sub>k</sub>² / mm²</th></tr></thead><tbody>${[1, 2, 3, 4, 5, 6, 7, 8].map((b) => `<tr><td>${b}</td><td>${y(Be(b, h, t.R) * 1e3, 3)}</td><td>${y(Be(b, h, t.R) ** 2 * 1e6, 4)}</td></tr>`).join("")}</tbody></table><p class="tnote">${translate("r² 与 k 成正比，所以圆环内疏外密；由相邻两环 r² 的差可求出 λR。")}</p></div>`,
      };
    },
  };
}
const V = {
  lamp: -0.5,
  p1: -0.24,
  lcd: -0.06,
  p2: 0.12,
  meter: 0.34,
};
function ks() {
  const e = Z(),
    t = new W(),
    s = new P(
      new fe(0.008, 0.07, 0.07),
      new ue({
        color: "#cfe8e0",
        transparent: !0,
        opacity: 0.35,
        roughness: 0.1,
        depthWrite: !1,
      }),
    ),
    o = new P(new fe(0.012, 0.076, 0.004), e.darkSteel);
  o.position.z = 0.037;
  const i = o.clone();
  i.position.z = -0.037;
  const r = new W();
  for (let c = 0; c < 7; c++) {
    const d = new P(
      new wn(0.0012, 0.012, 4, 8),
      new D({
        color: "#7fe0c4",
        emissive: "#2a6b5a",
        roughness: 0.4,
      }),
    );
    ((d.position.x = -0.003 + c * 0.001), r.add(d));
  }
  const l = new P(new O(0.0012, 0.0012, 0.05, 8), e.wireRed);
  l.position.set(0, 0.06, 0.02);
  const a = new P(new O(0.006, 0.006, 0.075, 16), e.chrome);
  return ((a.position.y = -0.075), t.add(s, o, i, r, l, a), (t.mols = r), K(t));
}
function $s(e) {
  const t = e.params;
  e.lab.bench.visible = !0;
  const s = e.add(Ue());
  F(s, [V.lamp, 0]);
  const o = e.add(At("P₁"));
  F(o, [V.p1, 0]);
  const i = e.add(At("P₂"));
  F(i, [V.p2, 0]);
  const r = e.add(ks());
  F(r, [V.lcd, 0]);
  const l = e.add(Zn());
  F(l, [V.meter, 0]);
  for (const [p, g] of [
    [o, "p1"],
    [i, "p2"],
  ])
    e.draggable(p, {
      click() {
        e.setParam(g, (t[g] + 15) % 180);
      },
    });
  const a = new Vt(
    new Mt(),
    new bn({
      color: "#fff3c4",
      transparent: !0,
      opacity: 0.9,
      toneMapped: !1,
    }),
  );
  e.add(a);
  const c = 70,
    d = new Float32Array(c * 6 * 3);
  a.geometry.setAttribute("position", new gn(d, 3));
  const u = () => (t.lcd && !t.lcdOn ? Math.PI / 2 : 0),
    h = () => z(t.p1) + u(),
    f = () => Tn(0.5, h() - z(t.p2));
  let b = null;
  function w() {
    (o.setAngle(z(t.p1)),
      i.setAngle(z(t.p2)),
      (r.visible = t.lcd),
      r.mols.children.forEach((g, $) => {
        (g.rotation.set(0, 0, 0),
          t.lcdOn
            ? (g.rotation.z = Math.PI / 2)
            : (g.rotation.x = z(t.p1) + ($ / 6) * (Math.PI / 2)));
      }));
    const p = [
      {
        a: [V.lamp, 0],
        b: [V.p1, 0],
        lambda: 560,
        I: 0.8,
        tint: "#fff1d8",
      },
      {
        a: [V.p1, 0],
        b: [V.p2, 0],
        lambda: 560,
        I: 0.4,
        tint: "#fff1d8",
      },
      {
        a: [V.p2, 0],
        b: [V.meter, 0],
        lambda: 560,
        I: 0.8 * f(),
        tint: "#fff1d8",
      },
    ];
    (e.beams.set(p, {
      whiteCount: 2,
    }),
      l.show((f() * 200).toFixed(1)));
  }
  function m(p) {
    let g = 0;
    const $ = e.BEAM_H,
      I = (L, v, k) => {
        const C = Math.cos(v) * k,
          S = -Math.sin(v) * k;
        (d.set([L, $ - C, -S, L, $ + C, S], g), (g += 6));
      };
    for (let L = 0; L < c; L++) {
      const v = V.lamp + 0.03 + (L / (c - 1)) * (V.meter - V.lamp - 0.05),
        k = Math.sin(v * 120 - p * 9);
      let C, S;
      if (v < V.p1)
        ((C =
          (Math.sin(L * 12.9898 + Math.floor(p * 6 + L)) * 43758.5453) %
          Math.PI),
          (S = 0.016));
      else if (v < V.p2) {
        const j =
          t.lcd && v > V.lcd
            ? 1
            : t.lcd && v > V.lcd - 0.01
              ? (v - V.lcd + 0.01) / 0.01
              : 0;
        ((C = z(t.p1) + u() * j), (S = 0.016 * Math.SQRT1_2));
      } else ((C = z(t.p2)), (S = 0.016 * Math.sqrt(f() * 2) * Math.SQRT1_2));
      I(v, C, S * k);
    }
    ((a.geometry.attributes.position.needsUpdate = !0),
      a.geometry.setDrawRange(0, g / 3));
  }
  return {
    update(p, g, $) {
      if (b) {
        b.t += p;
        const L = Math.min(180, Math.floor(b.t / 0.12) * 5);
        for (; b.next <= L;)
          (e.setParam("p2", (t.p1 + b.next) % 180),
            e.records.push({
              theta: b.next,
              I: f() / 0.5,
            }),
            (b.next += 5),
            ($ = !0));
        b.next > 180 && ((b = null), e.refreshDock());
      }
      ($ && w(), m(g));
      const I = e.BEAM_H;
      (e.tag("p1", new _(V.p1, I + 0.075, 0), `P₁ ${y(t.p1, 0)}°`, "gold"),
        e.tag("p2", new _(V.p2, I + 0.075, 0), `P₂ ${y(t.p2, 0)}°`, "gold"),
        e.tag(
          "n",
          new _((V.lamp + V.p1) / 2, I + 0.04, 0),
          translate("自然光"),
          "dim",
        ),
        e.tag(
          "l",
          new _((V.p1 + V.p2) / 2 - 0.04, I + 0.04, 0),
          translate("线偏振光"),
          "dim",
        ),
        t.lcd &&
          e.tag(
            "lcd",
            new _(V.lcd, I + 0.075, 0),
            t.lcdOn
              ? translate("液晶通电：不旋转")
              : translate("液晶：偏振方向转 90°"),
            "blue",
          ));
    },
    onParam() {},
    actions: () => [
      {
        label: translate("扫描 θ（0°→180°）"),
        run() {
          ((e.records.length = 0),
            (b = {
              t: 0,
              next: 0,
            }));
        },
      },
    ],
    record() {
      const p = ((ee(z(t.p2) - h()) % 180) + 180) % 180;
      (e.records.push({
        theta: p,
        I: f() / 0.5,
      }),
        e.flash(translate("已记录第 {0} 组数据", [e.records.length])));
    },
    readouts() {
      const p = ((ee(z(t.p2) - h()) % 180) + 180) % 180;
      return [
        [translate("起偏器 P₁"), `${y(t.p1, 0)}°`],
        [translate("检偏器 P₂"), `${y(t.p2, 0)}°`],
        [translate("两透振方向夹角 θ"), `${y(p, 0)}°`],
        [translate("透射光强 I / I₀"), y(f() / 0.5, 3)],
        ["cos²θ", y(Math.cos(z(p)) ** 2, 3)],
      ];
    },
    hud: () => [
      ["θ", y(((ee(z(t.p2) - h()) % 180) + 180) % 180, 0), "°"],
      ["I/I₀", y(f() / 0.5, 3), ""],
    ],
    dock(p) {
      if (p === "malus") {
        const g = [];
        for (let $ = 0; $ <= 180; $ += 2) g.push([$, Math.cos(z($)) ** 2]);
        return {
          chart: {
            series: [
              {
                pts: g,
                color: "#5d5b57",
                dashed: !0,
                name: "cos²θ",
                noHover: !0,
              },
              {
                pts: e.records.map(($) => [$.theta, $.I]),
                color: "#ffd25a",
                kind: "scatter",
                name: translate("实验数据"),
              },
            ],
            x: [0, 180],
            y: [0, 1.05],
            xLabel: "θ / °",
            yLabel: "I / I₀",
            xName: "θ",
          },
        };
      }
      return {
        html: `<div class="gview"><div class="kv2"><span>${translate("光源发出")}</span><b>${translate("自然光")} I</b><span>${translate("经过 P₁")}</span><b>${translate("线偏振光")} I/2</b>${t.lcd ? `<span>${translate("经过液晶盒")}</span><b>${t.lcdOn ? translate("方向不变") : translate("方向转 90°")}</b>` : ""}<span>${translate("经过 P₂")}</span><b class="hi">${y(f(), 3)} I</b></div><p class="tnote">${translate("点击偏振片可让它转过 15°。液晶屏的每个像素就是一个可以通断电的液晶盒，夹在两块正交偏振片之间。")}</p></div>`,
      };
    },
    csv: () =>
      e.records.length
        ? [
            ["theta/deg", "I/I0"],
            ...e.records.map((p) => [p.theta, +p.I.toFixed(4)]),
          ]
        : null,
    dispose() {
      e.lab.bench.visible = !1;
    },
  };
}
const qt = () => ({
    laser: translate("激光器"),
    white: translate("白光光源"),
    mirror: translate("平面镜"),
    convex: translate("凸透镜"),
    concave: translate("凹透镜"),
    half: translate("半圆砖"),
    rect: translate("长方砖"),
    prism: translate("三棱镜"),
    screen: translate("光屏"),
  }),
  Ot = {
    half: () => ft([0, 0], 0.06, 0, 64),
    rect: () => On([0, 0], 0.1, 0.05),
    prism: () => Pe([0, 0], 0.07),
  },
  Ps = (e, t, s) => {
    const o = Math.cos(s),
      i = Math.sin(s),
      r = e.map(([l, a]) => [t[0] + l * o - a * i, t[1] + l * i + a * o]);
    return (
      e.arcs &&
        (r.arcs = e.arcs.map((l) =>
          l
            ? {
                c: t,
                sign: l.sign,
              }
            : null,
        )),
      r
    );
  };
function Is(e) {
  const t = [];
  let s = 0;
  function o(l, a = [0, 0], c = 0) {
    let d;
    if (l === "laser") d = nt();
    else if (l === "white") d = Ue();
    else if (l === "mirror") d = Zt(0.09, 0.05);
    else if (l === "convex") d = ut(0.12, 0.06);
    else if (l === "concave") d = ut(-0.12, 0.06);
    else if (l === "screen") d = Xe(0.14, 0.1);
    else {
      d = new e.THREE.Group();
      const f = tt(Ot[l](), 0.024, "glass");
      d.add(f);
      const b = new e.THREE.Mesh(
        new e.THREE.CylinderGeometry(0.03, 0.034, e.BEAM_H - 0.006, 32),
        new e.THREE.MeshStandardMaterial({
          color: "#1d2025",
          metalness: 0.6,
          roughness: 0.45,
        }),
      );
      ((b.position.y = -(e.BEAM_H - 0.006) / 2 - 0.006), d.add(b));
    }
    e.add(d);
    const u = {
      id: ++s,
      type: l,
      p: a,
      angle: c,
      obj: d,
    };
    t.push(u);
    const h = {
      pos: () => u.p,
      move(f) {
        u.p = [
          Math.max(-0.88, Math.min(0.88, f[0])),
          Math.max(-0.45, Math.min(0.45, f[1])),
        ];
      },
      remove() {
        (e.remove(d), t.splice(t.indexOf(u), 1), e.changed());
      },
      item: u,
    };
    return (
      e.draggable(d, h),
      e.rotator(d, {
        radius: l === "screen" ? 0.07 : 0.05,
        height: 0.055,
        get: () => u.angle,
        set: (f) => (u.angle = (Math.round(ee(f) * 2) / 2) * (Math.PI / 180)),
      }),
      e.changed(),
      u
    );
  }
  (o("laser", [-0.6, -0.2], 0),
    o("mirror", [-0.15, -0.2], (3 * Math.PI) / 4),
    o("convex", [-0.15, 0.08], Math.PI / 2),
    o("screen", [-0.15, 0.36], -Math.PI / 2),
    o("half", [0.35, -0.1], Math.PI));
  let i = {
    segments: [],
    hits: [],
  };
  function r() {
    const l = [],
      a = [];
    for (const c of t) {
      const d = c.angle - Math.PI / 2;
      (c.type === "laser" ||
      c.type === "white" ||
      c.type === "convex" ||
      c.type === "concave"
        ? F(c.obj, c.p, c.angle)
        : c.type === "mirror" || c.type === "screen"
          ? F(c.obj, c.p, d)
          : F(c.obj, c.p, c.angle),
        c.type === "laser"
          ? a.push({
              kind: "laser",
              p: c.p,
              angle: c.angle,
              lambda: 650,
            })
          : c.type === "white"
            ? a.push({
                kind: "white",
                p: c.p,
                angle: c.angle,
              })
            : c.type === "mirror"
              ? l.push({
                  kind: "mirror",
                  p: c.p,
                  angle: d,
                  len: 0.09,
                })
              : c.type === "convex"
                ? l.push({
                    kind: "lens",
                    p: c.p,
                    angle: c.angle,
                    f: 0.12,
                    aperture: 0.06,
                  })
                : c.type === "concave"
                  ? l.push({
                      kind: "lens",
                      p: c.p,
                      angle: c.angle,
                      f: -0.12,
                      aperture: 0.06,
                    })
                  : c.type === "screen"
                    ? l.push({
                        kind: "screen",
                        p: c.p,
                        angle: d,
                        len: 0.14,
                        ref: c,
                      })
                    : l.push({
                        kind: "block",
                        poly: Ps(Ot[c.type](), c.p, c.angle),
                        material: "glass",
                      }));
    }
    ((i = xe(l, a, {
      minI: 0.03,
      bound: 2.2,
    })),
      e.beams.set(i.segments));
    for (const c of t)
      if (c.type === "screen") {
        const d = c.obj.ctx,
          u = c.obj.canvas.width,
          h = c.obj.canvas.height;
        (st(d, u, h),
          yt(
            d,
            u,
            h,
            c.obj.w,
            i.hits.filter((f) => f.el.ref === c),
            {
              size: 1.6,
            },
          ),
          (c.obj.texture.needsUpdate = !0));
      }
  }
  return {
    update(l, a, c) {
      c && r();
    },
    actions: () => [
      ...Object.entries(qt()).map(([l, a]) => ({
        label: `＋ ${a}`,
        run: () =>
          o(l, [Math.random() * 0.4 - 0.2, Math.random() * 0.3 - 0.15], 0),
      })),
      {
        label: translate("清空"),
        run() {
          for (const l of [...t]) (e.remove(l.obj), t.splice(t.indexOf(l), 1));
          e.changed();
        },
      },
    ],
    readouts: () => [
      [translate("元件数"), String(t.length)],
      [translate("光线段数"), String(i.segments.length)],
      [translate("光屏上的光斑"), String(i.hits.length)],
    ],
    hud: () => [],
    dock() {
      const l = qt(),
        a = t
          .map(
            (c) =>
              `<tr><td>${l[c.type]}</td><td>${y(c.p[0] * 100, 1)}, ${y(c.p[1] * 100, 1)}</td><td>${y(((ee(c.angle) % 360) + 360) % 360, 1)}°</td></tr>`,
          )
          .join("");
      return {
        html: `<div class="gview"><table class="tbl"><thead><tr><th>${translate("元件")}</th><th>${translate("位置 / cm")}</th><th>${translate("朝向")}</th></tr></thead><tbody>${a}</tbody></table><p class="tnote">${translate("拖动元件移动，拖动元件上方的金色圆环旋转；点选元件后按 Delete 删除。")}</p></div>`,
      };
    },
  };
}
const Ss = {
    disk: ds,
    mirrorimg: us,
    prism: ps,
    lens: hs,
    eye: bs,
    slits: Ms,
    film: ys,
    polar: $s,
    free: Is,
  },
  Ls = {
    angles: translate("数据表"),
    anglePlot: "r-i",
    snell: "sin i - sin r",
    tirinfo: translate("临界角"),
    mirrorinfo: translate("测量"),
    prisminfo: translate("光谱"),
    uv: translate("u、v 数据"),
    uvfit: "1/u - 1/v",
    lenscases: translate("成像规律"),
    eyeinfo: translate("远点与近点"),
    profile: translate("光强分布"),
    fringeinfo: translate("测量"),
    filminfo: translate("厚度与颜色"),
    malus: "I - θ",
    polarinfo: translate("偏振状态"),
    freeinfo: translate("元件"),
  };
function Es() {
  const e = (M) => document.getElementById(M),
    t = $n(e("c3")),
    { scene: s, camera: o, controls: i } = t;
  ((t.key.intensity = 9),
    (t.renderer.toneMappingExposure = 1),
    (s.fog.near = 3),
    (s.fog.far = 12));
  const r = xn(s),
    l = Bn(s),
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
    c = e("labels"),
    d = new Map(),
    u = (M) => {
      const E = new P(
        new ve(M, 0.0016, 8, 64),
        new Y({
          color: "#ffc857",
          transparent: !0,
          opacity: 0.3,
          toneMapped: !1,
          depthWrite: !1,
        }),
      );
      E.rotation.x = Math.PI / 2;
      const x = new P(
        new Le(0.0055, 16, 12),
        new Y({
          color: "#ffc857",
          toneMapped: !1,
        }),
      );
      return (x.position.set(M, 0, 0), E.add(x), (E.knob = x), E);
    },
    h = {
      THREE: vn,
      stage: t,
      scene: s,
      camera: o,
      lab: r,
      beams: l,
      BEAM_H: N,
      get params() {
        return a.params;
      },
      get lesson() {
        return a.lesson;
      },
      add(M) {
        return (s.add(M), a.objects.push(M), M);
      },
      remove(M) {
        (s.remove(M), (a.objects = a.objects.filter((E) => E !== M)), Ke());
      },
      draggable(M, E) {
        return (
          (M.userData.drag = "el"),
          (M.userData.hid = M.uuid),
          a.handlers.set(M.uuid, E),
          Ke(),
          M
        );
      },
      rotator(
        M,
        { radius: E = 0.06, height: x = 0.055, get: R, set: B, end: te },
      ) {
        const J = u(E);
        return (
          (J.position.y = x),
          M.add(J),
          (J.userData.drag = "rot"),
          (J.userData.hid = J.uuid),
          a.handlers.set(J.uuid, {
            rotate: !0,
            obj: M,
            get: R,
            set: B,
            end: te,
          }),
          Ke(),
          J
        );
      },
      tag(M, E, x, R = "") {
        let B = d.get(M);
        (B ||
          ((B = document.createElement("div")),
          (B.className = "otag"),
          c.appendChild(B),
          d.set(M, B)),
          (B.dataset.seen = "1"));
        const te = t.project(E);
        if (te.behind) {
          B.style.display = "none";
          return;
        }
        ((B.style.display = ""),
          B.textContent !== x && (B.textContent = x),
          B.className !== `otag ${R}` && (B.className = `otag ${R}`),
          (B.style.transform = `translate(${te.x.toFixed(1)}px, ${te.y.toFixed(1)}px)`));
      },
      setParam(M, E, x = !1) {
        ((a.params[M] = E),
          w(M, E),
          x && a.scene.onParam?.(M, E),
          (a.dirty = !0));
      },
      changed() {
        a.dirty = !0;
      },
      flash: $t,
      get records() {
        return (a.records[a.lesson.id] ||= []);
      },
      refreshDock: () => he(!0),
      get dark() {
        return a.dark;
      },
    };
  function f() {
    a.scene?.dispose?.();
    for (const M of a.objects) s.remove(M);
    ((a.objects = []), a.handlers.clear());
    for (const M of d.values()) M.remove();
    (d.clear(), l.set([]));
  }
  function b(M) {
    ((M = (M + ke.length) % ke.length),
      f(),
      (a.li = M),
      (a.lesson = ke[M]),
      (a.params = {
        ...a.lesson.params,
      }),
      (a.selected = null),
      p(),
      on(),
      (a.scene = Ss[a.lesson.scene](h)),
      g(),
      (a.dirty = !0),
      Ke(),
      t.fly(...a.lesson.cam, 1.2));
    try {
      history.replaceState(null, "", `#${a.lesson.id}`);
    } catch {}
    he(!0);
  }
  let w = () => {};
  function m() {
    const M = e("nav");
    ((M.innerHTML = `<div class="navh">${translate("实验课题")}</div>`),
      ke.forEach((x, R) => {
        R === 7 &&
          M.insertAdjacentHTML(
            "beforeend",
            `<div class="navh sub">${translate("波动光学")}</div>`,
          );
        const B = document.createElement("button");
        ((B.className = "ni"),
          (B.innerHTML = `<em>${String(R + 1).padStart(2, "0")}</em><b></b><small></small>`),
          (B.querySelector("b").textContent = x.title),
          (B.querySelector("small").textContent = x.sub),
          B.addEventListener("click", () => b(R)),
          M.appendChild(B));
      }));
    const E = document.createElement("div");
    ((E.className = "navf"),
      (E.innerHTML = `${translate("拖动元件移动，拖动金色圆环旋转")}<br><kbd>D</kbd> ${translate("暗室开关")}<br><kbd>←</kbd><kbd>→</kbd> ${translate("切换课题")}`),
      M.appendChild(E),
      (e("prog").innerHTML = ke.map(() => "<i></i>").join("")));
  }
  function p() {
    const M = a.lesson;
    (document.querySelectorAll("#nav .ni").forEach((R, B) => {
      (R.classList.toggle("on", B === a.li),
        B === a.li && R.classList.add("seen"));
    }),
      document.querySelectorAll("#prog i").forEach((R, B) => {
        (R.classList.toggle("cur", B === a.li),
          R.classList.toggle("on", B < a.li));
      }));
    const E = e("chapter");
    (E.classList.remove("in"),
      E.offsetWidth,
      E.classList.add("in"),
      (E.querySelector(".n").textContent =
        `LESSON ${String(a.li + 1).padStart(2, "0")}`),
      (E.querySelector("h1").textContent = M.title),
      (E.querySelector("p").textContent = M.sub),
      (e("lesson").innerHTML =
        `<div class="lh"><em>${String(a.li + 1).padStart(2, "0")}</em><div><h2></h2><small></small></div></div><div class="body"></div><ol class="steps"></ol>`),
      (e("lesson").querySelector("h2").textContent = M.title),
      (e("lesson").querySelector("small").textContent = M.sub),
      (e("lesson").querySelector(".body").innerHTML = M.body),
      (e("lesson").querySelector(".steps").innerHTML = M.steps
        .map((R) => `<li>${R}</li>`)
        .join("")),
      (w = zn(e("controls"), M.controls, a.params, (R, B) => {
        ((a.params[R] = B), a.scene?.onParam?.(R, B), (a.dirty = !0), he(!0));
      })),
      (e("ctrlH").hidden = !M.controls.length),
      g());
    const x = e("tgs");
    ((x.innerHTML = `<button class="tg" data-k="dark"><i></i>${translate("暗室")}</button><button class="tg" data-k="haze"><i></i>${translate("烟雾显示光路")}</button>`),
      x
        .querySelectorAll(".tg")
        .forEach((R) => R.addEventListener("click", () => I(R.dataset.k))),
      v());
  }
  function g() {
    const M = e("acts"),
      E = a.scene?.actions?.() || [],
      x = a.lesson.record;
    ((M.innerHTML = `${E.map((R, B) => `<button class="${B === 0 && !x ? "go" : "ghost wide"}" data-a="${B}">${R.label}</button>`).join("")}${x ? `<button class="go" id="aRec">● ${translate("记录数据")}</button>` : ""}`),
      (M.hidden = !E.length && !x),
      M.querySelectorAll("[data-a]").forEach((R) =>
        R.addEventListener("click", () => {
          (E[+R.dataset.a].run(), (a.dirty = !0), he(!0));
        }),
      ),
      e("aRec")?.addEventListener("click", () => {
        a.scene?.record?.() !== !1 && he(!0);
      }));
  }
  h.renderActs = () => g();
  let $ = !0;
  function I(M) {
    (M === "dark" ? (a.dark = !a.dark) : ($ = !$), L(), v());
  }
  function L() {
    ((t.key.intensity = a.dark ? 9 : 34),
      s.background.set(a.dark ? "#08090b" : "#121316"),
      s.fog.color.set(a.dark ? "#08090b" : "#121316"),
      l.setHaze($ ? (a.dark ? 1 : 0.35) : 0),
      (a.dirty = !0));
  }
  function v() {
    document
      .querySelectorAll("#tgs .tg")
      .forEach((M) =>
        M.classList.toggle("on", M.dataset.k === "dark" ? a.dark : $),
      );
  }
  let k = 0;
  function C(M) {
    if (M - k < 80) return;
    k = M;
    const E = a.scene?.readouts?.() || [],
      x = e("readouts");
    ((e("roH").hidden = !E.length),
      (x.hidden = !E.length),
      x.childElementCount !== E.length * 2 &&
        (x.innerHTML = E.map(() => "<span></span><b></b>").join("")));
    const R = (J, ce) => {
      J.textContent !== ce && (J.textContent = ce);
    };
    E.forEach(([J, ce], ye) => {
      (R(x.children[ye * 2], J), R(x.children[ye * 2 + 1], ce));
    });
    const B = a.scene?.hud?.() || [],
      te = e("hud");
    ((te.hidden = !B.length),
      te.childElementCount !== B.length &&
        (te.innerHTML = B.map(
          () => '<div class="g"><span></span><b></b><small></small></div>',
        ).join("")),
      B.forEach(([J, ce, ye], ln) => {
        const ot = te.children[ln];
        (R(ot.children[0], J),
          R(ot.children[1], ce),
          R(ot.children[2], ye || ""));
      }));
  }
  const S = e("inset"),
    j = S.querySelector("canvas"),
    H = j.getContext("2d");
  let q = 0;
  function X(M) {
    const E = a.scene?.inset?.();
    if (((S.hidden = !E), !E || M - q < 60)) return;
    q = M;
    const x = E.canvas,
      R = 300,
      B = Math.round((300 * x.height) / x.width);
    (j.width !== R || j.height !== B) && ((j.width = R), (j.height = B));
    const te = E.crop || 1,
      J = x.width * te,
      ce = x.height * Math.max(te, 0.5);
    (H.drawImage(x, (x.width - J) / 2, (x.height - ce) / 2, J, ce, 0, 0, R, B),
      S.classList.toggle("round", !!E.round));
    const ye = S.querySelector("span");
    ye.textContent !== E.label && (ye.textContent = E.label);
  }
  let T = null,
    G = null,
    U = null,
    pe = 0,
    ne = null;
  function on() {
    const M = a.lesson;
    T = M.tabs[0];
    const E = e("tabs");
    ((E.innerHTML = M.tabs
      .map(
        (x) =>
          `<button data-t="${x}" class="${x === T ? "on" : ""}">${Ls[x]}</button>`,
      )
      .join("")),
      E.querySelectorAll("button").forEach((x) =>
        x.addEventListener("click", () => {
          ((T = x.dataset.t),
            E.querySelectorAll("button").forEach((R) =>
              R.classList.toggle("on", R === x),
            ),
            (ne = null),
            he(!0));
        }),
      ),
      (ne = null));
  }
  function he(M) {
    const E = performance.now();
    if (!M && E - pe < 120) return;
    pe = E;
    const x = e("dockBody"),
      R = a.scene?.dock?.(T);
    if (!R) {
      ((x.innerHTML = ""), (ne = null));
      return;
    }
    if (R.chart) {
      if (
        ((ne !== "chart" || !!R.side != !!x.querySelector(".side")) &&
          ((x.innerHTML = `<div class="dv${R.side ? " split" : ""}"><div class="chost"></div>${R.side ? '<div class="side"></div>' : ""}</div>`),
          (U = x.querySelector(".chost")),
          (G = Pn(U)),
          (ne = "chart")),
        G.draw(R.chart),
        R.side)
      ) {
        const B = x.querySelector(".side");
        B.innerHTML !== R.side && (B.innerHTML = R.side);
      }
    } else
      ((ne = "html"),
        x.dataset.html !== R.html &&
          ((x.innerHTML = R.html), (x.dataset.html = R.html), R.bind?.(x)));
  }
  function an() {
    const M = a.scene?.csv?.(T);
    if (!M?.length) {
      $t(translate("当前没有可导出的数据"));
      return;
    }
    const E =
        "\uFEFF" +
        M.map((R) => R.join(",")).join(`
`),
      x = document.createElement("a");
    ((x.href = URL.createObjectURL(
      new Blob([E], {
        type: "text/csv",
      }),
    )),
      (x.download = `opticslab-${a.lesson.id}.csv`),
      x.click(),
      setTimeout(() => URL.revokeObjectURL(x.href), 1e3));
  }
  let kt = 0;
  function $t(M) {
    const E = e("toast");
    ((E.textContent = M),
      E.classList.add("show"),
      clearTimeout(kt),
      (kt = setTimeout(() => E.classList.remove("show"), 1800)));
  }
  const rn = Sn(t, {
    planeFor: () => new _(0, 1, 0),
    start(M) {
      const E = a.handlers.get(M.obj.userData.hid);
      if (((M.h = E), E?.rotate)) {
        const x = new _();
        (E.obj.getWorldPosition(x),
          (M.center = x),
          (M.a0 = E.get()),
          (M.start = Math.atan2(M.point.z - x.z, M.point.x - x.x)));
        return;
      }
      if (E?.pos) {
        const x = E.pos();
        M.off = [x[0] - M.point.x, x[1] - M.point.z];
      }
      a.selected = E || null;
    },
    move(M, E) {
      const x = M.h;
      if (x) {
        if (x.rotate) {
          const R = Math.atan2(E.z - M.center.z, E.x - M.center.x);
          x.set(M.a0 + (R - M.start));
        } else if (x.move) {
          const R = M.off || [0, 0];
          x.move([E.x + R[0], E.z + R[1]], E);
        }
        a.dirty = !0;
      }
    },
    end(M) {
      (M.h?.end?.(), (a.dirty = !0), he(!0));
    },
    click(M) {
      ((a.selected = M.h || null), M.h?.click?.(), (a.dirty = !0));
    },
    hover(M) {
      for (const E of a.objects)
        E.traverse?.((x) => {
          x.userData.drag === "rot" &&
            (x.material.opacity = M && M.obj === x ? 0.95 : 0.3);
        });
    },
  });
  function Ke() {
    const M = [];
    for (const E of a.objects)
      E.traverse((x) => {
        x.userData.drag && M.push(x);
      });
    rn.setTargets(M);
  }
  (e("bPrev").addEventListener("click", () => b(a.li - 1)),
    e("bNext").addEventListener("click", () => b(a.li + 1)),
    e("bReset").addEventListener("click", () => t.fly(...a.lesson.cam, 0.9)),
    e("bFull").addEventListener("click", () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen?.(),
    ),
    e("bCsv").addEventListener("click", an),
    e("bDock").addEventListener("click", () => {
      (document.body.classList.toggle("dock-min"),
        setTimeout(() => G?.redraw(), 320));
    }),
    window.addEventListener("keydown", (M) => {
      M.target.closest?.("input, textarea") ||
        (M.key === "ArrowRight"
          ? b(a.li + 1)
          : M.key === "ArrowLeft"
            ? b(a.li - 1)
            : M.key === "d" || M.key === "D"
              ? I("dark")
              : M.key === "r" || M.key === "R"
                ? t.fly(...a.lesson.cam, 0.9)
                : M.key === "f" || M.key === "F"
                  ? e("bFull").click()
                  : (M.key === "Delete" || M.key === "Backspace") &&
                    a.selected?.remove &&
                    (M.preventDefault(),
                    a.selected.remove(),
                    (a.selected = null),
                    (a.dirty = !0)));
    }),
    window.addEventListener("hashchange", () => {
      const M = ke.findIndex((E) => `#${E.id}` === location.hash);
      M >= 0 && M !== a.li && b(M);
    }),
    new ResizeObserver(() => G?.redraw()).observe(e("dockBody")),
    m(),
    L());
  const Pt = ke.findIndex((M) => `#${M.id}` === location.hash);
  b(Pt >= 0 ? Pt : 0);
  let It = performance.now(),
    St = 0;
  function Lt(M) {
    const E = Math.min(0.05, (M - It) / 1e3);
    ((It = M), (St += E));
    for (const R of d.values()) R.dataset.seen = "";
    const x = a.dirty;
    ((a.dirty = !1), a.scene?.update?.(E, St, x));
    for (const R of d.values()) R.dataset.seen || (R.style.display = "none");
    (C(M), X(M), x && he(!1), t.render(E), requestAnimationFrame(Lt));
  }
  (requestAnimationFrame(Lt),
    document.body.classList.add("ready"),
    (window.__optics = {
      S: a,
      goLesson: b,
      stage: t,
      ctx: h,
    }));
}
function opticsLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("光学实验台 · OpticsLab")), Es());
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
                      d: "M2 16h11",
                      stroke: "#ff5040",
                      strokeWidth: "1.6",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M13 16c2.5-6 4.5-6 4.5 0s-2 6-4.5 0z",
                      stroke: "currentColor",
                      strokeWidth: "1.2",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M17.5 16L30 9",
                      stroke: "#ff5a4a",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M17.5 16L30 13",
                      stroke: "#ffd25a",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M17.5 16L30 17",
                      stroke: "#3fd28a",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M17.5 16L30 21",
                      stroke: "#6cc8ff",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M17.5 16L30 25",
                      stroke: "#a57cff",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "OPTICS",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("光学实验台"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(fn, {}),
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
export { opticsLabPage as default };
