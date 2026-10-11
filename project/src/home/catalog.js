// Recovered from public deployment: catalog-XdwsjaGd.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import { t as translate } from "../core/runtime.js";
const s = [
    {
      name: translate("物理"),
      color: "#0092c7",
    },
    {
      name: translate("化学"),
      color: "#0f9e63",
    },
    {
      name: translate("生物"),
      color: "#5aa62b",
    },
    {
      name: translate("数学"),
      color: "#c9800f",
    },
    {
      name: translate("地理"),
      color: "#1478c9",
    },
    {
      name: translate("天文"),
      color: "#7d54d6",
    },
    {
      name: translate("信息技术"),
      color: "#c43aa0",
    },
    {
      name: translate("语文"),
      color: "#d9552f",
    },
    {
      name: translate("英语"),
      color: "#a87a12",
    },
    {
      name: translate("历史"),
      color: "#a06a2e",
    },
  ],
  l = "#64768a",
  n = (t) => (s.find((i) => i.name === t) || {}).color || l,
  d = [
    {
      id: "volt-lab",
      href: "/labs/volt",
      name: "VoltLab",
      en: "ELECTRIC CIRCUIT LAB",
      subject: translate("物理"),
      desc: translate(
        "电学虚拟实验台：自由搭建电路，实时观察电流、电压与元件状态，支持仪表测量与数据记录。",
      ),
      points: [
        translate("串并联电路"),
        translate("欧姆定律"),
        translate("电表使用"),
        translate("电功率"),
      ],
      preview: "circuit",
      status: "live",
    },
    {
      id: "contour-lab",
      href: "/labs/contour",
      name: "Contour 3D",
      en: "TOPOGRAPHIC CONTOUR LAB",
      subject: translate("地理"),
      desc: translate(
        "等高线三维教学演示：水平面切割与投影动画、阶梯模型、同步地形图、剖面图绘制与随堂检测。",
      ),
      points: [
        translate("等高线形成"),
        translate("山顶·山脊·山谷"),
        translate("鞍部·陡崖·盆地"),
        translate("地形剖面图"),
      ],
      preview: "contour",
      status: "live",
    },
    {
      id: "atmos-lab",
      href: "/labs/atmos",
      name: "AtmosFlow",
      en: "ATMOSPHERIC CIRCULATION LAB",
      subject: translate("地理"),
      desc: translate(
        "大气环流粒子演示：热力环流四步拆解、城市热岛与污染扩散实验、海陆风、山谷风，三维地球上的三圈环流、气压带风带及其季节移动。",
      ),
      points: [
        translate("热力环流"),
        translate("海陆风·山谷风"),
        translate("三圈环流"),
        translate("气压带风带"),
      ],
      preview: "atmos",
      status: "live",
    },
    {
      id: "earth-lab",
      href: "/labs/earth",
      name: "EarthMotion",
      en: "EARTH MOTION LAB",
      subject: translate("地理"),
      desc: translate(
        "地球运动三维演示：自转与晨昏线、公转与黄赤交角、太阳直射点移动、昼夜长短、正午太阳高度与四季更替。",
      ),
      points: [
        translate("昼夜交替"),
        translate("直射点移动"),
        translate("昼夜长短"),
        translate("正午太阳高度"),
      ],
      preview: "earth",
      status: "live",
    },
    {
      id: "drift-lab",
      href: "/labs/drift",
      name: "TerraDrift",
      en: "LAND & SEA CHANGE LAB",
      subject: translate("地理"),
      desc: translate(
        "海陆的变迁：喜马拉雅海洋化石的剖面动画、台湾海峡冰期陆桥、魏格纳大陆漂移证据、泛大陆分裂的三维重建、六大板块与两大火山地震带。",
      ),
      points: [
        translate("沧海桑田"),
        translate("大陆漂移"),
        translate("板块构造"),
        translate("火山地震带"),
      ],
      preview: "drift",
      status: "live",
    },
    {
      id: "water-lab",
      href: "/labs/water",
      name: "WaterCycle",
      en: "WATER CYCLE LAB",
      subject: translate("地理"),
      desc: translate(
        "水循环三维沙盘：从海洋、城市、水库、高山到内陆湖的剖面地形，粒子演示蒸发、水汽输送、降水、径流、下渗与地下径流，三类水循环、城市化与海绵城市、人类活动影响、水量平衡与随堂检测。",
      ),
      points: [
        translate("水循环环节"),
        translate("三类水循环"),
        translate("海绵城市"),
        translate("水量平衡"),
      ],
      preview: "water",
      status: "live",
    },
    {
      id: "cell-lab",
      href: "/labs/cell",
      name: "CellLab",
      en: "3D CELL LAB",
      subject: translate("生物"),
      desc: translate(
        "细胞三维结构：剖开的动物细胞与植物细胞、线粒体嵴与叶绿体基粒等细胞器详解、原核与真核细胞对比、流动镶嵌模型与物质跨膜运输、分泌蛋白合成与运输、马达蛋白与胞质环流，可切换荧光显微成像。",
      ),
      points: [
        translate("细胞器"),
        translate("生物膜系统"),
        translate("物质跨膜运输"),
        translate("分泌蛋白"),
      ],
      preview: "cell",
      status: "live",
    },
    {
      id: "micro-lab",
      href: "/labs/micro",
      name: "MicroLab",
      en: "MICROSCOPE LAB",
      subject: translate("生物"),
      desc: translate(
        "可以亲手操作的写实光学显微镜：转动粗细准焦螺旋、转换器、遮光器与反光镜，目镜视野按真实光学成像——倒像、景深、分辨率、离焦光晕、明场 / 暗场 / 相差；26 种玻片，覆盖规范操作、观察动植物细胞、质壁分离、有丝分裂、油镜、测微尺与血球计数板。",
      ),
      points: [
        translate("显微镜使用"),
        translate("观察细胞"),
        translate("质壁分离"),
        translate("有丝分裂"),
      ],
      preview: "micro",
      status: "live",
    },
    {
      id: "mechanism-lab",
      href: "/labs/mechanism",
      name: "Mechanism",
      en: "REACTION MECHANISM LAB",
      subject: translate("化学"),
      desc: translate(
        "反应机理三维动画：19 个反应逐步拆解——弯箭头表示电子转移，虚线表示过渡态，¹⁸O 同位素示踪酯化反应，覆盖高中有机、离子反应、氧化还原与大学有机机理。",
      ),
      points: [
        translate("酯化反应"),
        translate("同位素示踪"),
        translate("电子转移"),
        translate("反应机理"),
      ],
      preview: "mechanism",
      status: "live",
    },
    {
      id: "vsepr-lab",
      href: "/labs/vsepr",
      name: "MoleCraft",
      en: "MOLECULAR GEOMETRY LAB",
      subject: translate("化学"),
      desc: translate(
        "分子构型三维演示：价层电子对斥力沙盒、孤对电子与键角、杂化轨道、分子极性、扩展八隅体与手性分子，内置近 30 个分子。",
      ),
      points: [
        translate("价层电子对互斥"),
        translate("杂化轨道"),
        translate("分子极性"),
        translate("手性分子"),
      ],
      preview: "vsepr",
      status: "live",
    },
    {
      id: "orbital-lab",
      href: "/labs/orbital",
      name: "OrbitalLab",
      en: "ATOMIC ORBITAL LAB",
      subject: translate("化学"),
      desc: translate(
        "原子轨道三维演示：电子云逐点“曝光”、s/p/d/f 轨道形状与相位、径向分布与节面、构造原理逐个填电子、1–36 号元素电子排布与量子数。",
      ),
      points: [
        translate("电子云"),
        translate("轨道形状"),
        translate("构造原理"),
        translate("量子数"),
      ],
      preview: "orbital",
      status: "live",
    },
    {
      id: "reaction-lab",
      href: "/labs/reaction",
      name: "ReactionLab",
      en: "MICRO REACTION LAB",
      subject: translate("化学"),
      desc: translate(
        "化学反应微观演示：有效碰撞与取向、麦克斯韦–玻尔兹曼分布与活化分子、催化剂表面、浓度与压强、平衡的建立与移动、光照引发的链式爆炸。",
      ),
      points: [
        translate("有效碰撞"),
        translate("反应速率"),
        translate("化学平衡"),
        translate("链式反应"),
      ],
      preview: "reaction",
      status: "live",
    },
    {
      id: "geo-lab",
      href: "/labs/geo",
      name: "GeoSpace",
      en: "SOLID GEOMETRY LAB",
      subject: translate("数学"),
      desc: translate(
        "立体几何三维演示：几何体与欧拉公式、展开与折叠（正方体 11 种展开图）、三视图与斜二测画法、拖动三点截正方体、空间角的几何法与向量法对照、外接球与内切球（11 + 7 种模型）、正四面体专题，附随堂检测。",
      ),
      points: [
        translate("展开图"),
        translate("截面"),
        translate("空间角"),
        translate("空间向量"),
      ],
      preview: "geo",
      status: "live",
    },
    {
      id: "conic-lab",
      href: "/labs/conic",
      name: "ConicLab",
      en: "CONIC SECTIONS LAB",
      subject: translate("数学"),
      desc: translate(
        "圆锥曲线演示：平面截对顶圆锥得到圆、椭圆、抛物线、双曲线，Dandelin 双球揭示焦点的来历；三种曲线的定义与方程、离心率连续变化、光学性质、直线与圆锥曲线的判别式。",
      ),
      points: [
        translate("圆锥截线"),
        translate("焦点与离心率"),
        translate("光学性质"),
        translate("判别式"),
      ],
      preview: "conic",
      status: "live",
    },
    {
      id: "func-lab",
      href: "/labs/func",
      name: "FuncLab",
      en: "FUNCTION GRAPH LAB",
      subject: translate("数学"),
      desc: translate(
        "函数图像演示：参数一拖，图像怎么平移、伸缩、翻折；指数与对数互为反函数；单位圆展开成正弦曲线与五点法；割线逼近切线、导函数与单调性极值；二分法求零点与定积分的黎曼和。",
      ),
      points: [
        translate("图像变换"),
        translate("三角函数"),
        translate("导数"),
        translate("二分法"),
      ],
      preview: "func",
      status: "live",
    },
    {
      id: "construct-lab",
      href: "/labs/construct",
      name: "ConstructLab",
      en: "COMPASS & STRAIGHTEDGE LAB",
      subject: translate("数学"),
      desc: translate(
        "尺规作图闯关：只用圆规和直尺完成 12 个经典作图，交点自动生成，按步数评星，可回放最少步数解法；全等判定的翻折叠合演示与 SSA 反例；位似与相似比。",
      ),
      points: [
        translate("尺规作图"),
        translate("全等判定"),
        translate("相似"),
        translate("闯关"),
      ],
      preview: "construct",
      status: "live",
    },
    {
      id: "pythagoras-lab",
      href: "/labs/pythagoras",
      name: "PythagoLab",
      en: "PYTHAGOREAN THEOREM LAB",
      subject: translate("数学"),
      desc: translate(
        "勾股定理：亲手把碎片拼进斜边上的正方形，赵爽弦图与刘徽出入相补，欧几里得证明的剪切变换，转动水槽让 a² 和 b² 的水倒满 c²，勾股数散点图。",
      ),
      points: [
        translate("拼图证明"),
        translate("出入相补"),
        translate("欧几里得"),
        translate("勾股数"),
      ],
      preview: "pythagoras",
      status: "live",
    },
    {
      id: "wonder-lab",
      href: "/labs/wonder",
      name: "WonderLab",
      en: "MATH WONDERS LAB",
      subject: translate("数学"),
      desc: translate(
        "趣味数学：随机跳跃长出谢尔宾斯基三角形，科赫雪花的无限周长，随风摇摆的分形树，三维莫比乌斯带上的蚂蚁、涂色与剪开，黄金分割小游戏与无限放大的螺旋，向日葵的黄金角。",
      ),
      points: [
        translate("分形"),
        translate("莫比乌斯带"),
        translate("黄金分割"),
        translate("叶序"),
      ],
      preview: "wonder",
      status: "live",
    },
    {
      id: "motion-lab",
      href: "/labs/motion",
      name: "MotionLab",
      en: "MOTION & FORCE LAB",
      subject: translate("物理"),
      desc: translate(
        "写实三维力学实验台：打点计时器与纸带、光电门、气垫导轨、弹簧测力计，10 个课题覆盖匀变速直线运动、自由落体、牛顿第二定律、摩擦力、斜面、超重失重、机械能与动量守恒。",
      ),
      points: [
        translate("匀变速直线运动"),
        translate("牛顿第二定律"),
        translate("摩擦力"),
        translate("动量守恒"),
      ],
      preview: "motion",
      status: "live",
    },
    {
      id: "optics-lab",
      href: "/labs/optics",
      name: "OpticsLab",
      en: "OPTICS LAB",
      subject: translate("物理"),
      desc: translate(
        "暗室光学实验台：激光、量角盘、半圆砖、三棱镜、光具座与光屏，12 个课题覆盖反射与折射、全反射与光纤、色散、凸透镜成像、眼睛与视力矫正、双缝干涉、衍射与光栅、薄膜干涉和偏振。",
      ),
      points: [
        translate("折射定律"),
        translate("凸透镜成像"),
        translate("双缝干涉"),
        translate("光的偏振"),
      ],
      preview: "optics",
      status: "live",
    },
    {
      id: "wave-lab",
      href: "/labs/waves",
      name: "WaveLab",
      en: "OSCILLATIONS & WAVES LAB",
      subject: translate("物理"),
      desc: translate(
        "振动与波三维实验：弹簧振子与纸带记录、单摆测 g、受迫振动与共振曲线、绳波的形成与反射、驻波、水波槽干涉与衍射、多普勒效应（可听）、示波器与共鸣管，共 11 个课题。",
      ),
      points: [
        translate("简谐运动"),
        translate("共振"),
        translate("驻波"),
        translate("多普勒效应"),
      ],
      preview: "waves",
      status: "live",
    },
    {
      id: "field-lab",
      href: "/labs/fields",
      name: "FieldLab",
      en: "ELECTRIC & MAGNETIC FIELDS LAB",
      subject: translate("物理"),
      desc: translate(
        "电场与磁场三维实验：可拖动电荷的电场线与等势面、电容器、示波管、铁屑显示的磁感线、安培力、洛伦兹力、质谱仪与回旋加速器、电磁感应与楞次定律、交流发电机，共 11 个课题。",
      ),
      points: [
        translate("电场线"),
        translate("洛伦兹力"),
        translate("电磁感应"),
        translate("交流电"),
      ],
      preview: "fields",
      status: "live",
    },
    {
      id: "soon",
      name: translate("更多实验筹备中"),
      en: "COMING SOON",
      subject: null,
      desc: translate("新的教学工具正在开发，完成后会出现在这里。"),
      status: "soon",
    },
  ],
  f = {
    fields: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round">
      ${[-60, -35, -12, 12, 35, 60].map((i) => `<path d="M110 85C150 ${85 + i * 1.1} 170 ${85 + i * 1.1} 210 85" stroke="${t}" stroke-width="1.4" stroke-opacity=".7"/>`).join("")}
      ${[0, 1, 2, 3, 4, 5, 6, 7]
        .map((i) => {
          const r = (i / 8) * Math.PI * 2;
          return `<path d="M${110 - Math.cos(r) * 14} ${85 + Math.sin(r) * 14}L${110 - Math.cos(r) * 40} ${85 + Math.sin(r) * 40}" stroke="${t}" stroke-width="1.2" stroke-opacity="${Math.cos(r) > 0.3 ? 0.6 : 0}"/>`;
        })
        .join("")}
      <circle cx="110" cy="85" r="11" fill="#d64a3a"/><path d="M105 85h10M110 80v10" stroke="#fff" stroke-width="2"/>
      <circle cx="210" cy="85" r="11" fill="#3a6fd6"/><path d="M205 85h10" stroke="#fff" stroke-width="2"/>
      <circle r="3.5" fill="#ffd25a"><animateMotion dur="2.8s" repeatCount="indefinite" path="M110 85C150 47 170 47 210 85"/></circle>
      <circle r="3.5" fill="#ffd25a"><animateMotion dur="2.8s" begin="-1.4s" repeatCount="indefinite" path="M110 85C150 123 170 123 210 85"/></circle>
    </svg>`,
    waves: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round">
      <path d="M40 26H120" stroke="#2a302e" stroke-width="2"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 18;0 0" dur="1.6s" repeatCount="indefinite"/>
        <path d="M80 26${Array.from(
          {
            length: 10,
          },
          (i, r) => `l${r % 2 ? -8 : 8} 4`,
        ).join(
          "",
        )}" stroke="#2a302e" stroke-width="1.3" stroke-linejoin="round"/>
        <rect x="70" y="66" width="20" height="22" rx="3" fill="#c9800f"/></g>
      ${[0, 1, 2].map((i) => `<circle cx="230" cy="70" r="${12 + i * 22}" stroke="${t}" stroke-width="1.6" stroke-opacity="${0.8 - i * 0.22}"><animate attributeName="r" values="${12 + i * 22};${34 + i * 22}" dur="1.8s" repeatCount="indefinite"/><animate attributeName="stroke-opacity" values="${0.8 - i * 0.22};${0.58 - i * 0.22}" dur="1.8s" repeatCount="indefinite"/></circle>`).join("")}
      <circle cx="230" cy="70" r="5" fill="${t}"/>
      <path d="M20 140c15-22 30-22 45 0s30 22 45 0 30-22 45 0 30 22 45 0 30-22 45 0 30 22 45 0" stroke="${t}" stroke-width="2.4" stroke-dasharray="320" stroke-dashoffset="320"><animate attributeName="stroke-dashoffset" values="320;0" dur="3s" repeatCount="indefinite"/></path>
    </svg>`,
    optics: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 98H118" stroke="#e8e4da" stroke-width="3" stroke-opacity=".9"/>
      <path d="M22 98H118" stroke="#e8e4da" stroke-width="9" stroke-opacity=".18"/>
      <path d="M118 128L150 52L182 128Z" fill="${t}" fill-opacity=".14" stroke="#2a302e" stroke-width="1.6"/>
      ${[
        ["#d64032", -8],
        ["#e8892a", -2],
        ["#d9b31f", 4],
        ["#3aa35a", 10],
        ["#2f7fd0", 16],
        ["#6a4bc4", 22],
      ]
        .map(
          ([i, r], a) =>
            `<path d="M163 ${96 + a * 1.2}L298 ${70 + r * 3.2}" stroke="${i}" stroke-width="2.6" stroke-opacity=".9" stroke-dasharray="160" stroke-dashoffset="160"><animate attributeName="stroke-dashoffset" values="160;0;0;160" keyTimes="0;.35;.85;1" dur="4.5s" begin="${a * 0.08}s" repeatCount="indefinite"/></path>`,
        )
        .join("")}
      <path d="M300 34V150" stroke="#2a302e" stroke-width="2"/>
      <g opacity=".55">${Array.from(
        {
          length: 9,
        },
        (i, r) =>
          `<path d="M40 ${30 + r * 3}c8 -4 16 4 24 0s16 4 24 0" stroke="${t}" stroke-width="1" stroke-opacity="${0.25 + (r % 3) * 0.15}"/>`,
      ).join("")}</g>
    </svg>`,
    motion: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M30 104H262" stroke="#2a302e" stroke-width="3"/>
      <path d="M30 110H262" stroke="#2a302e" stroke-opacity=".25" stroke-width="1"/>
      ${Array.from(
        {
          length: 24,
        },
        (i, r) =>
          `<path d="M${34 + r * 9.6} 110v${r % 5 ? 3 : 6}" stroke="#2a302e" stroke-opacity=".35"/>`,
      ).join("")}
      <circle cx="272" cy="94" r="10" stroke="#2a302e" stroke-width="1.8"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;150 0;150 0" keyTimes="0;.7;1" keySplines=".55 0 1 1;0 0 1 1" calcMode="spline" dur="3.6s" repeatCount="indefinite"/>
        <path d="M60 84H242" stroke="#2a302e" stroke-width="1" stroke-dasharray="2 3"/>
        <rect x="40" y="80" width="46" height="18" rx="3" fill="${t}" fill-opacity=".9"/>
        <rect x="46" y="74" width="34" height="6" rx="1.5" fill="#2a302e" fill-opacity=".55"/>
        <circle cx="50" cy="101" r="3.6" fill="#2a302e"/><circle cx="76" cy="101" r="3.6" fill="#2a302e"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;0 52;0 52" keyTimes="0;.7;1" keySplines=".55 0 1 1;0 0 1 1" calcMode="spline" dur="3.6s" repeatCount="indefinite"/>
        <path d="M282 94v12" stroke="#2a302e" stroke-width="1"/>
        <rect x="276" y="106" width="12" height="16" rx="2" fill="#c9800f"/></g>
      <g fill="${t}">${[0, 6, 24, 54, 96, 150].map((i, r) => `<circle cx="${63 + i}" cy="136" r="2.2" fill-opacity="${0.35 + r * 0.12}"/>`).join("")}</g>
      <path d="M48 136H262" stroke="#2a302e" stroke-opacity=".15" stroke-width="10"/>
      <path d="M40 54l46-34" stroke="#d0452f" stroke-width="1.8" stroke-dasharray="60" stroke-dashoffset="60"><animate attributeName="stroke-dashoffset" values="60;0;0" keyTimes="0;.7;1" dur="3.6s" repeatCount="indefinite"/></path>
      <path d="M40 54h50M40 54V16" stroke="#2a302e" stroke-opacity=".4" stroke-width="1"/>
      <text x="92" y="58" font-family="Times New Roman,serif" font-style="italic" font-size="12" fill="#2a302e">t</text>
      <text x="30" y="20" font-family="Times New Roman,serif" font-style="italic" font-size="12" fill="#2a302e">v</text>
    </svg>`,
    construct: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <circle cx="130" cy="110" r="60" stroke="#2f6fd0" stroke-width="1.4" stroke-opacity=".7" stroke-dasharray="380" stroke-dashoffset="380"><animate attributeName="stroke-dashoffset" values="380;0;0" keyTimes="0;.4;1" dur="5s" repeatCount="indefinite"/></circle>
      <circle cx="190" cy="110" r="60" stroke="#2f6fd0" stroke-width="1.4" stroke-opacity=".7" stroke-dasharray="380" stroke-dashoffset="380"><animate attributeName="stroke-dashoffset" values="380;380;0;0" keyTimes="0;.3;.7;1" dur="5s" repeatCount="indefinite"/></circle>
      <path d="M130 110L160 58L190 110z" stroke="${t}" stroke-width="2.2" stroke-linejoin="round" fill="${t}" fill-opacity=".12"/>
      <path d="M130 110H190" stroke="#2a302e" stroke-width="2"/>
      <g fill="#2a302e"><circle cx="130" cy="110" r="3.5"/><circle cx="190" cy="110" r="3.5"/></g><circle cx="160" cy="58" r="4.5" fill="${t}"/>
      <g fill="${t}" font-size="14"><text x="236" y="40">★★★</text></g>
    </svg>`,
    pythagoras: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M130 110h60V65z" stroke="#2a302e" stroke-width="1.8" stroke-linejoin="round" fill="#2a302e" fill-opacity=".08"/>
      <rect x="130" y="110" width="60" height="60" fill="#2f6fd0" fill-opacity=".2" stroke="#2f6fd0" stroke-width="1.3"/>
      <rect x="190" y="65" width="45" height="45" fill="#2f8f4e" fill-opacity=".2" stroke="#2f8f4e" stroke-width="1.3"/>
      <path d="M130 110L190 65L145 5L85 50z" stroke="${t}" stroke-width="1.6" stroke-linejoin="round"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;-40 -60;-40 -60;0 0" keyTimes="0;.4;.8;1" dur="5s" repeatCount="indefinite"/>
        <path d="M160 140h30v30z" fill="${t}" fill-opacity=".55" stroke="${t}" stroke-width="1.2"/></g>
      <g font-family="Times New Roman,serif" font-style="italic" font-size="15" fill="#2a302e"><text x="150" y="146">b²</text><text x="203" y="94">a²</text><text x="104" y="60">c²</text></g>
    </svg>`,
    wonder: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M90 150L150 46L210 150z" fill="${t}" fill-opacity=".55"/>
      <path d="M120 98L180 98L150 150z" fill="#fffefb"/>
      <path d="M105 124L135 124L120 150zM165 124L195 124L180 150zM135 72L165 72L150 98z" fill="#fffefb"/>
      <g transform="translate(250 92)"><g><animateTransform attributeName="transform" type="rotate" values="0;360" dur="14s" repeatCount="indefinite"/>
        ${Array.from(
          {
            length: 70,
          },
          (i, r) => {
            const a = 3.6 * Math.sqrt(r + 0.5),
              o = r * 2.39996;
            return `<circle cx="${(a * Math.cos(o)).toFixed(1)}" cy="${(a * Math.sin(o)).toFixed(1)}" r="${(1.2 + r / 45).toFixed(2)}" fill="#a87a12" fill-opacity="${(0.45 + r / 140).toFixed(2)}"/>`;
          },
        ).join("")}</g></g>
    </svg>`,
    func: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M40 92h250M86 20v140" stroke="#2a302e" stroke-opacity=".3" stroke-width="1"/>
      <circle cx="86" cy="92" r="34" stroke="#2a302e" stroke-width="1.4"/>
      <g><animateTransform attributeName="transform" type="rotate" values="0 86 92;-360 86 92" dur="8s" repeatCount="indefinite"/>
        <path d="M86 92h34" stroke="#2a302e" stroke-width="1.2"/><circle cx="120" cy="92" r="4" fill="${t}"/></g>
      <path d="M120 92c14 0 20-34 34-34s20 34 34 34 20 34 34 34 20-34 34-34" stroke="${t}" stroke-width="2.4" stroke-linecap="round"/>
      <path d="M120 58h34" stroke="#d0452f" stroke-width="1" stroke-dasharray="3 4"/>
      <path d="M190 140L290 40" stroke="#2f6fd0" stroke-width="1.4" stroke-opacity=".7"/>
      <g font-family="Times New Roman,serif" font-style="italic" font-size="13" fill="#2a302e"><text x="292" y="104">x</text><text x="92" y="28">y</text></g>
    </svg>`,
    conic: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M60 85h200M160 20v130" stroke="#2a302e" stroke-opacity=".25" stroke-width="1"/>
      <ellipse cx="160" cy="85" rx="92" ry="54" stroke="#2a302e" stroke-width="1.8"/>
      <g stroke="${t}" stroke-width="1.4" stroke-opacity=".75">
        <path d="M88 85L120 37L232 85"><animate attributeName="d" values="M88 85L120 37L232 85;M88 85L200 131L232 85;M88 85L120 37L232 85" dur="6s" repeatCount="indefinite"/></path>
      </g>
      <g fill="${t}"><circle cx="88" cy="85" r="4.5"/><circle cx="232" cy="85" r="4.5"/></g>
      <g stroke="#2f6fd0" stroke-width="1.2" stroke-opacity=".55">
        <path d="M88 85L140 34M88 85L196 34M88 85L250 70M88 85L250 100M88 85L196 136M88 85L140 136"/>
        <path d="M140 34L232 85M196 34L232 85M250 70L232 85M250 100L232 85M196 136L232 85M140 136L232 85"/>
      </g>
      <g font-family="Times New Roman,serif" font-style="italic" font-size="13" fill="#2a302e"><text x="80" y="104">F₁</text><text x="226" y="104">F₂</text></g>
    </svg>`,
    geo: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <g stroke="#2a302e" stroke-width="1.6" stroke-linejoin="round">
        <path d="M112 52h100v100h-100z"/>
        <path d="M112 52l38-26h100l-38 26M212 152l38-26V26"/>
      </g>
      <path d="M112 152l38-26h100M150 126V26" stroke="#2a302e" stroke-width="1.3" stroke-dasharray="5 4" stroke-opacity=".6"/>
      <path d="M162 152L231 139L250 76L200 26L131 39L112 102z" fill="${t}" fill-opacity=".22" stroke="${t}" stroke-width="2" stroke-linejoin="round">
        <animate attributeName="fill-opacity" values=".12;.3;.12" dur="4s" repeatCount="indefinite"/>
      </path>
      <g fill="#2f6fd0"><circle cx="162" cy="152" r="4"/><circle cx="250" cy="76" r="4"/><circle cx="131" cy="39" r="4"/></g>
      <g font-family="Times New Roman,serif" font-style="italic" font-size="13" fill="#2a302e"><text x="98" y="160">A</text><text x="216" y="162">B</text><text x="98" y="48">A₁</text><text x="146" y="20">D₁</text></g>
    </svg>`,
    micro: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <defs><clipPath id="mcv"><circle cx="196" cy="85" r="66"/></clipPath></defs>
      <circle cx="196" cy="85" r="70" fill="#0b0c0e" stroke="${t}" stroke-opacity=".5" stroke-width="2"/>
      <circle cx="196" cy="85" r="66" fill="#efe9d8"/>
      <g clip-path="url(#mcv)" stroke="#b07a2c" stroke-opacity=".75" stroke-width="1.6" fill="#e8c98a" fill-opacity=".45">
        <path d="M120 40l40-14 44 6 40-10 40 8v34l-40 6-44-4-40 8-40-6z"/>
        <path d="M120 74l40 6 44-8 40 6 40-6v34l-40 8-44-6-40 6-40-8z"/>
        <path d="M120 110l40 8 44-6 40 8 40-6v40H120z"/>
        <g><animateTransform attributeName="transform" type="translate" values="0 0;-8 3;0 0" dur="7s" repeatCount="indefinite"/>
        <ellipse cx="150" cy="56" rx="7" ry="5" fill="#7a4a14" fill-opacity=".85" stroke="none"/>
        <ellipse cx="226" cy="92" rx="7" ry="5" fill="#7a4a14" fill-opacity=".85" stroke="none"/>
        <ellipse cx="190" cy="128" rx="7" ry="5" fill="#7a4a14" fill-opacity=".85" stroke="none"/></g>
      </g>
      <path d="M126 85h62" stroke="#111" stroke-width="2" stroke-linecap="round"/>
      <path d="M44 140h52M70 140v-18M58 122h24l-4-14H62zM70 108V58M62 58h16l-2-22H64z" stroke="${t}" stroke-width="2" stroke-linejoin="round"/>
      <path d="M80 70c14 4 18 22 12 36" stroke="${t}" stroke-width="2" stroke-linecap="round"/>
      <circle cx="70" cy="116" r="3" fill="${t}"><animate attributeName="opacity" values=".4;1;.4" dur="2.4s" repeatCount="indefinite"/></circle>
    </svg>`,
    cell: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M160 18c58 0 92 30 92 68 0 40-38 66-94 66-54 0-88-28-88-66 0-40 34-68 90-68z" fill="${t}" fill-opacity=".1" stroke="${t}" stroke-width="2"/>
      <circle cx="140" cy="82" r="26" fill="#9d84e6" fill-opacity=".28" stroke="#9d84e6" stroke-width="1.6"/>
      <circle cx="134" cy="76" r="8" fill="#5b2fa6" fill-opacity=".7"/>
      <path d="M170 60c14 8 20 22 18 40M176 54c18 10 26 28 22 50" stroke="#3fb8cc" stroke-width="2.2" stroke-linecap="round" stroke-opacity=".8"/>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;6 -3;0 0" dur="4s" repeatCount="indefinite"/>
        <rect x="200" y="96" width="30" height="13" rx="6.5" fill="#ff8a66" fill-opacity=".85" transform="rotate(-24 215 102)"/>
        <path d="M206 103l4-5 4 6 4-6 4 6" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" fill="none" transform="rotate(-24 215 102)"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="0 0;-5 4;0 0" dur="5s" repeatCount="indefinite"/>
        <rect x="96" y="118" width="26" height="11" rx="5.5" fill="#ff8a66" fill-opacity=".75" transform="rotate(18 109 123)"/></g>
      <path d="M200 64c8-3 16-3 22 2M198 70c10-3 20-2 27 4M199 76c9-2 17 0 23 5" stroke="#f2a83c" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="232" cy="62" r="3.2" fill="#ffd98a"><animate attributeName="cx" values="226;246;226" dur="3s" repeatCount="indefinite"/><animate attributeName="cy" values="66;46;66" dur="3s" repeatCount="indefinite"/></circle>
      <circle cx="104" cy="56" r="5" fill="#e85f9e" fill-opacity=".8"/>
      <circle cx="186" cy="128" r="4" fill="#e85f9e" fill-opacity=".7"/>
      <g fill="#f6e3a6" fill-opacity=".7"><circle cx="118" cy="104" r="1.4"/><circle cx="168" cy="40" r="1.4"/><circle cx="214" cy="126" r="1.4"/><circle cx="96" cy="92" r="1.4"/><circle cx="160" cy="118" r="1.4"/></g>
    </svg>`,
    mechanism: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round">
      <path d="M70 105 L112 85" stroke="#3a3f46" stroke-width="6"/>
      <path d="M112 85 L150 105" stroke="#e0483c" stroke-width="6"/>
      <path d="M150 105 L176 105" stroke="#c2362b" stroke-width="4" stroke-dasharray="4 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-18" dur="1s" repeatCount="indefinite"/></path>
      <circle cx="70" cy="105" r="12" fill="#3a3f46"/>
      <circle cx="112" cy="85" r="14" fill="#3a3f46"/>
      <circle cx="112" cy="55" r="11" fill="#e0483c"/>
      <circle cx="150" cy="105" r="11" fill="#e0483c"/>
      <circle cx="200" cy="105" r="22" fill="#ffd27a" opacity=".55"><animate attributeName="opacity" values=".25;.7;.25" dur="2s" repeatCount="indefinite"/></circle>
      <circle cx="200" cy="105" r="11" fill="#e0483c"/>
      <circle cx="238" cy="88" r="13" fill="#3a3f46"/>
      <path d="M200 105 L238 88" stroke="#e0483c" stroke-width="6"/>
      <path d="M196 84 C186 50 140 40 120 70" stroke="#c2362b" stroke-width="2.6"/>
      <path d="M120 70 l-1 -10 M120 70 l9 -4" stroke="#c2362b" stroke-width="2.6"/>
      <text x="200" y="140" fill="${t}" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" text-anchor="middle">¹⁸O</text>
    </svg>`,
    reaction: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <rect x="40" y="20" width="240" height="130" rx="10" fill="#06100e"/>
      <rect x="40" y="20" width="240" height="130" rx="10" stroke="${t}" stroke-opacity=".6" stroke-width="1.4"/>
      <g>
        <circle r="9" fill="#8a4fd0"><animateMotion dur="2.4s" repeatCount="indefinite" path="M70 60 L150 85 L90 130 Z"/></circle>
        <circle r="6" fill="#a9b3b8"><animateMotion dur="2.4s" repeatCount="indefinite" path="M240 120 L170 85 L230 40 Z"/></circle>
        <circle r="7" fill="#8a4fd0" opacity=".8"><animateMotion dur="3.6s" repeatCount="indefinite" path="M200 40 L120 120 L250 100 Z"/></circle>
        <circle r="5" fill="#a9b3b8" opacity=".8"><animateMotion dur="3.1s" repeatCount="indefinite" path="M100 110 L210 60 L70 45 Z"/></circle>
      </g>
      <circle cx="160" cy="85" r="4" fill="#ffd27a"><animate attributeName="r" values="2;26;2" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="1;0;1" dur="2.4s" repeatCount="indefinite"/></circle>
      <circle cx="160" cy="85" r="14" stroke="#ffd27a" stroke-width="1.5"><animate attributeName="r" values="4;34" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".9;0" dur="2.4s" repeatCount="indefinite"/></circle>
    </svg>`,
    orbital: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <path d="M40 85 H280 M160 20 V150" stroke="${t}" stroke-opacity=".25" stroke-width="1.2"/>
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 160 85;360 160 85" dur="20s" repeatCount="indefinite"/>
        <path d="M160 85 C130 60 120 26 160 24 C200 26 190 60 160 85 Z" fill="#3d64d8" fill-opacity=".35" stroke="#3d64d8" stroke-width="1.6"/>
        <path d="M160 85 C130 110 120 144 160 146 C200 144 190 110 160 85 Z" fill="#e0483c" fill-opacity=".3" stroke="#e0483c" stroke-width="1.6"/>
        <path d="M160 85 C185 55 219 45 221 85 C219 125 185 115 160 85 Z" fill="#e0483c" fill-opacity=".22" stroke="#e0483c" stroke-opacity=".8" stroke-width="1.4"/>
        <path d="M160 85 C135 55 101 45 99 85 C101 125 135 115 160 85 Z" fill="#3d64d8" fill-opacity=".22" stroke="#3d64d8" stroke-opacity=".8" stroke-width="1.4"/>
      </g>
      <circle cx="160" cy="85" r="4" fill="${t}"/>
      <g fill="${t}" fill-opacity=".5">
        <circle cx="118" cy="52" r="1.6"><animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite"/></circle>
        <circle cx="206" cy="122" r="1.6"><animate attributeName="opacity" values="0;1;0" dur="1.7s" begin=".6s" repeatCount="indefinite"/></circle>
        <circle cx="214" cy="46" r="1.6"><animate attributeName="opacity" values="0;1;0" dur="2.6s" begin="1s" repeatCount="indefinite"/></circle>
        <circle cx="104" cy="124" r="1.6"><animate attributeName="opacity" values="0;1;0" dur="1.9s" begin=".3s" repeatCount="indefinite"/></circle>
      </g>
    </svg>`,
    vsepr: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round">
      <g>
        <animateTransform attributeName="transform" type="rotate" values="0 160 88;360 160 88" dur="18s" repeatCount="indefinite"/>
        <path d="M160 88 L160 34 M160 88 L112 116 M160 88 L208 116" stroke="${t}" stroke-width="5" stroke-opacity=".55"/>
        <ellipse cx="160" cy="88" rx="64" ry="20" stroke="${t}" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="3 5"/>
        <circle cx="160" cy="34" r="12" fill="#f4f2ee" stroke="#c9c3b8" stroke-width="1.4"/>
        <circle cx="112" cy="116" r="12" fill="#f4f2ee" stroke="#c9c3b8" stroke-width="1.4"/>
        <circle cx="208" cy="116" r="12" fill="#f4f2ee" stroke="#c9c3b8" stroke-width="1.4"/>
      </g>
      <path d="M160 88 C140 118 150 150 160 154 C170 150 180 118 160 88 Z" fill="#8b7fd6" fill-opacity=".28" stroke="#8b7fd6" stroke-opacity=".6" stroke-width="1.2">
        <animate attributeName="fill-opacity" values=".18;.38;.18" dur="2.4s" repeatCount="indefinite"/></path>
      <circle cx="160" cy="88" r="17" fill="${t}"/>
      <circle cx="154" cy="82" r="5" fill="#fff" opacity=".35"/>
    </svg>`,
    water: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20 128 H118 C140 128 150 122 170 108 L214 58 L236 74 L262 50 L300 104 V146 H20 Z" fill="${t}" fill-opacity=".08"/>
      <path d="M20 128 H118" stroke="${t}" stroke-width="2"/>
      <path d="M24 136c10-4 20 4 30 0s20 4 30 0 20 4 30 0" stroke="${t}" stroke-opacity=".5" stroke-width="1.4"/>
      <path d="M118 128 C140 128 150 122 170 108 L214 58 L236 74 L262 50 L300 104" stroke="#2a302e" stroke-width="1.8"/>
      <path d="M206 66l8-8 6 6M254 58l8-8 7 9" stroke="#2a302e" stroke-opacity=".35" stroke-width="1.4"/>
      <path d="M20 146 H300" stroke="#2a302e" stroke-opacity=".2" stroke-width="6"/>
      <path d="M140 144 C180 140 220 132 250 122" stroke="${t}" stroke-opacity=".45" stroke-width="1.4" stroke-dasharray="3 4">
        <animate attributeName="stroke-dashoffset" from="0" to="14" dur="1.6s" repeatCount="indefinite"/></path>
      <g fill="#dfe8ef" stroke="#9fb4c4" stroke-width="1.2"><path d="M168 46a10 10 0 0 1 18-6 12 12 0 0 1 22 4 8 8 0 0 1 2 16h-40a8 8 0 0 1-2-14z">
        <animateTransform attributeName="transform" type="translate" values="-6 0;6 0;-6 0" dur="6s" repeatCount="indefinite"/></path></g>
      ${[0, 1, 2, 3].map((i) => `<path d="M${178 + i * 9} 64 l-3 9" stroke="${t}" stroke-width="1.6"><animate attributeName="opacity" values="0;1;0" dur="1.1s" begin="${i * 0.25}s" repeatCount="indefinite"/></path>`).join("")}
      <path d="M54 120 C52 92 60 64 74 48" stroke="#e8892a" stroke-width="2.2" stroke-dasharray="120" stroke-dashoffset="120">
        <animate attributeName="stroke-dashoffset" values="120;0;0;120" keyTimes="0;.4;.8;1" dur="5s" repeatCount="indefinite"/></path>
      <path d="M86 36 C112 28 136 30 160 38" stroke="#e8892a" stroke-width="2.2" stroke-dasharray="80" stroke-dashoffset="80">
        <animate attributeName="stroke-dashoffset" values="80;80;0;0;80" keyTimes="0;.25;.6;.85;1" dur="5s" repeatCount="indefinite"/></path>
      <path d="M200 100 C180 112 160 120 128 126" stroke="#e8892a" stroke-width="2.2" stroke-dasharray="90" stroke-dashoffset="90">
        <animate attributeName="stroke-dashoffset" values="90;90;0;0;90" keyTimes="0;.5;.85;.95;1" dur="5s" repeatCount="indefinite"/></path>
      ${[0, 1, 2].map((i) => `<circle cx="${44 + i * 12}" cy="118" r="2" fill="${t}"><animate attributeName="cy" values="122;80" dur="2.4s" begin="${i * 0.6}s" repeatCount="indefinite"/><animate attributeName="opacity" values="0;.9;0" dur="2.4s" begin="${i * 0.6}s" repeatCount="indefinite"/></circle>`).join("")}
    </svg>`,
    drift: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linejoin="round">
      <path d="M20 118 H300" stroke="${t}" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="4 5"/>
      <g><animateTransform attributeName="transform" type="translate" values="18 0;0 0;18 0" dur="6s" repeatCount="indefinite"/>
        <path d="M60 60 C80 44 116 42 138 54 L146 78 C140 100 134 118 118 130 C98 126 72 108 62 90 Z" fill="${t}" fill-opacity=".16" stroke="${t}" stroke-width="2"/></g>
      <g><animateTransform attributeName="transform" type="translate" values="-18 0;0 0;-18 0" dur="6s" repeatCount="indefinite"/>
        <path d="M176 50 C204 40 240 46 258 64 C264 86 252 108 232 124 C214 126 196 118 186 104 L178 78 Z" fill="#c9800f" fill-opacity=".14" stroke="#c9800f" stroke-width="2"/></g>
      <path d="M160 34 V146" stroke="#0f9e63" stroke-width="2" stroke-dasharray="3 5">
        <animate attributeName="stroke-dashoffset" from="0" to="-16" dur="1s" repeatCount="indefinite"/></path>
      <path d="M126 92 l-12 0 M194 92 l12 0" stroke="#0f9e63" stroke-width="2" stroke-linecap="round"/>
    </svg>`,
    earth: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none">
      <ellipse cx="160" cy="88" rx="120" ry="44" stroke="${t}" stroke-opacity=".35" stroke-width="1.5"/>
      <circle cx="160" cy="88" r="17" fill="#e9a93a"/>
      <circle cx="160" cy="88" r="28" fill="#e9a93a" opacity=".15"/>
      <g>
        <animateMotion dur="12s" repeatCount="indefinite" path="M280 88 A120 44 0 1 1 40 88 A120 44 0 1 1 280 88"/>
        <circle r="11" fill="#dbe9f3" stroke="${t}" stroke-width="1.5"/>
        <path d="M-5 -16 L5 16" stroke="#12202f" stroke-width="1.4"/>
      </g>
    </svg>`,
    atmos: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round">
      <path d="M40 140 H280" stroke="${t}" stroke-opacity=".35" stroke-width="1.6"/>
      <ellipse cx="160" cy="85" rx="95" ry="45" stroke="${t}" stroke-opacity=".25" stroke-width="1.4"/>
      <ellipse cx="160" cy="85" rx="95" ry="45" stroke="${t}" stroke-width="2.2" stroke-dasharray="10 16">
        <animate attributeName="stroke-dashoffset" from="0" to="-52" dur="1.6s" repeatCount="indefinite"/></ellipse>
      <path d="M78 110 v-50" stroke="#c9800f" stroke-width="2.4" stroke-dasharray="4 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/></path>
      <path d="M242 60 v50" stroke="#0092c7" stroke-width="2.4" stroke-dasharray="4 6">
        <animate attributeName="stroke-dashoffset" from="0" to="-20" dur="1s" repeatCount="indefinite"/></path>
      <circle cx="78" cy="148" r="6" fill="#c9800f" opacity=".8"/>
      <circle cx="242" cy="148" r="6" fill="#0092c7" opacity=".8"/>
      <text x="78" y="36" fill="#d1372c" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" text-anchor="middle">H</text>
      <text x="242" y="36" fill="#0092c7" font-family="JetBrains Mono,monospace" font-size="12" font-weight="700" text-anchor="middle">L</text>
    </svg>`,
    contour: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <g stroke="${t}">
        <path d="M40 132 C70 70 110 38 150 44 C190 50 205 80 238 70 C262 62 282 96 280 132 Z" stroke-opacity=".25" stroke-width="1.6"/>
        <path d="M66 124 C88 80 118 56 148 60 C176 64 190 90 222 84 C246 80 262 104 258 124 Z" stroke-opacity=".4" stroke-width="1.6"/>
        <path d="M92 116 C108 88 128 72 148 76 C168 80 176 98 204 96 C226 94 238 108 234 116 Z" stroke-opacity=".6" stroke-width="1.8"/>
        <path d="M118 108 C128 94 140 88 150 90 C162 92 164 104 150 108 Z" stroke-width="2.2"/>
        <path d="M188 106 C194 100 206 98 214 104 C210 110 196 112 188 106 Z" stroke-width="2"/>
      </g>
      <path d="M20 150 H300" stroke="${t}" stroke-opacity=".3" stroke-width="1.4" stroke-dasharray="4 5"/>
      <path d="M20 90 H300" stroke="#0092c7" stroke-width="1.6" stroke-opacity=".7">
        <animate attributeName="d" values="M20 130 H300;M20 60 H300;M20 130 H300" dur="5s" repeatCount="indefinite"/></path>
      <path d="M142 90 l6 -7 6 7" fill="#c9800f" stroke="none"/>
    </svg>`,
    circuit: (t) => `
    <svg viewBox="0 0 320 170" preserveAspectRatio="xMidYMid meet" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M70 50 H250 V125 H70 Z" stroke="${t}" stroke-opacity=".35" stroke-width="2"/>
      <path d="M70 50 H250 V125 H70 Z" stroke="${t}" stroke-width="2.4" stroke-dasharray="6 14">
        <animate attributeName="stroke-dashoffset" from="40" to="0" dur="1.2s" repeatCount="indefinite"/></path>
      <rect x="54" y="72" width="32" height="30" fill="#ffffff" stroke="#c9800f" stroke-width="2"/>
      <path d="M64 80 v14 M76 84 v6" stroke="#c9800f" stroke-width="2.4"/>
      <circle cx="160" cy="50" r="14" fill="#ffffff" stroke="#d9a020" stroke-width="2"/>
      <path d="M151 41 l18 18 M169 41 l-18 18" stroke="#d9a020" stroke-width="1.8"/>
      <circle cx="160" cy="50" r="24" fill="#ffd27a" opacity=".16"><animate attributeName="opacity" values=".08;.28;.08" dur="2s" repeatCount="indefinite"/></circle>
      <rect x="226" y="76" width="48" height="22" fill="#ffffff" stroke="${t}" stroke-width="2"/>
      <circle cx="160" cy="125" r="13" fill="#ffffff" stroke="#0f9e63" stroke-width="2"/>
      <text x="160" y="130" fill="#0f9e63" font-family="JetBrains Mono,monospace" font-size="13" font-weight="700" text-anchor="middle" stroke="none">A</text>
    </svg>`,
  };
export { f as P, s as S, d as T, n as s };
