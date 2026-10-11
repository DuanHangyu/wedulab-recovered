// Recovered from public deployment: Page-qS6a4Hdm.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Cc } from "../../components/LanguageSwitcher.js";
import {
  R as Dc,
  V as Z0,
  e as Bc,
  f as ht,
  c as Jo,
  M as mt,
  v as Dt,
  C as Oc,
  G as Q,
  b as _,
  w as A0,
  x as wo,
  l as Te,
  B as Pe,
  L as Ct,
  Y as tn,
  T as mi,
  $ as Mi,
  k as xa,
  _ as co,
  aD as Ys,
  m as en,
  N as Nc,
  a0 as lo,
  aF as xi,
  K as Ca,
  u as Da,
  o as Ba,
  W as zc,
  aG as Wc,
  a2 as Fc,
  S as qc,
  aH as Uc,
  ap as gi,
  ao as Yc,
  aI as _c,
  D as Hc,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  e as Gc,
  w as Xc,
  d as Vc,
  c as Kc,
  b as Oa,
} from "../../vendor/charts-CzzpgoDB.js";
import { R as we } from "../../vendor/RoundedBoxGeometry-BuxEdaMS.js";
const Je = {
    eyepiece: [
      translate("目镜"),
      translate("靠近眼睛的镜头，放大物镜所成的像。镜头越长放大倍数越小"),
    ],
    barrel: [
      translate("镜筒"),
      translate("上端安装目镜，下端连接转换器，转动准焦螺旋时随之升降"),
    ],
    nosepiece: [
      translate("转换器"),
      translate("转动它可以更换物镜，转到位时有“咔”的一声定位"),
    ],
    objective: [
      translate("物镜"),
      translate("靠近标本的镜头，有螺纹；镜头越长放大倍数越大，工作距离越短"),
    ],
    stage: [translate("载物台"), translate("放置玻片标本的平台")],
    hole: [
      translate("通光孔"),
      translate("载物台中央的圆孔，光线由此穿过标本"),
    ],
    clip: [translate("压片夹"), translate("固定玻片，防止玻片滑动")],
    diaphragm: [
      translate("遮光器"),
      translate("上面有大小不同的光圈，用来调节进光量"),
    ],
    mirror: [
      translate("反光镜"),
      translate(
        "把光线反射到通光孔。平面镜用于光线强时，凹面镜会聚光线，用于光线弱时",
      ),
    ],
    coarse: [
      translate("粗准焦螺旋"),
      translate("转动时镜筒升降幅度大，用于在低倍镜下寻找物像"),
    ],
    fine: [
      translate("细准焦螺旋"),
      translate("转动时镜筒升降幅度很小，用于使物像更加清晰；高倍镜下只能用它"),
    ],
    arm: [translate("镜臂"), translate("取镜时握住的部位")],
    pillar: [translate("镜柱"), translate("连接镜座与镜臂，支持镜身")],
    base: [translate("镜座"), translate("稳定镜身")],
    joint: [translate("倾斜关节"), translate("可以使镜臂适当倾斜，便于观察")],
    lamp: [translate("光源"), translate("内置 LED，代替反光镜提供稳定的照明")],
    brightness: [translate("亮度调节旋钮"), translate("调节光源亮度")],
    condenser: [
      translate("聚光器"),
      translate("把光线会聚到标本上；转盘可以切换明场、暗场、相差三种照明"),
    ],
    iris: [
      translate("孔径光阑"),
      translate("调节照明光锥的大小：开大分辨率高，缩小对比度高、景深大"),
    ],
    stageKnob: [
      translate("载物台移动旋钮"),
      translate("机械载物台的同轴旋钮，精确地前后、左右移动玻片"),
    ],
    head: [translate("双目观察头"), translate("两个目镜筒，可以双眼同时观察")],
    slideBox: [translate("玻片标本"), translate("点击取出玻片，放到载物台上")],
    eyepieceBox: [translate("备用目镜"), translate("点击换上这个目镜")],
    iodine: [
      translate("碘液"),
      translate("染色剂，使细胞核着色较深；也能使淀粉变蓝"),
    ],
    methylene: [
      translate("亚甲蓝溶液"),
      translate("碱性染料，使细胞核染成蓝色"),
    ],
    sucrose: [
      translate("0.3 g/mL 蔗糖溶液"),
      translate("浓度高于细胞液，可使成熟植物细胞失水，发生质壁分离"),
    ],
    water: [translate("清水"), translate("使发生质壁分离的细胞吸水复原")],
    stainR: [translate("甲紫溶液"), translate("碱性染料，使染色体着色")],
    oil: [
      translate("香柏油"),
      translate("用油镜时滴在盖玻片上，折射率与玻璃接近，提高数值孔径"),
    ],
    paper: [
      translate("吸水纸"),
      translate("在盖玻片另一侧吸引，使滴加的液体流过标本（引流法）"),
    ],
  },
  Me = [
    {
      id: "parts",
      title: translate("认识显微镜"),
      sub: "Anatomy of a microscope",
      scope: "student",
      slide: "letterE",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
      },
      feature: "parts",
      controls: ["scope", "explode"],
      tabs: ["parts"],
      cam: [
        [0.36, 0.36, 0.58],
        [0, 0.17, -0.02],
      ],
      body: translate(
        '<p>光学显微镜由<b>光学部分</b>和<b>机械部分</b>组成。光学部分有目镜、物镜、反光镜（或光源）；机械部分有镜座、镜柱、镜臂、镜筒、转换器、载物台、准焦螺旋等。</p><p>把鼠标移到显微镜的任何部位上，会显示它的名称和作用。打开<b>分解视图</b>可以看到镜筒与物镜是怎样连接的。</p><p class="eq">放大倍数 = 目镜倍数 × 物镜倍数</p><p>物镜有螺纹，越长倍数越大；目镜没有螺纹，越长倍数越小。物镜上的色环表示倍数：红 4×、黄 10×、蓝 40×、白 100×（油镜）。</p>',
      ),
      steps: [
        translate("悬停各个部件，认识名称"),
        translate("在目镜盒里比较 5×、10×、16× 三个目镜的长短"),
        translate("转动转换器，比较四个物镜的长短"),
        translate("切换为研究显微镜，找出光源与聚光器"),
      ],
    },
    {
      id: "operate",
      title: translate("规范操作"),
      sub: "Using a microscope",
      scope: "student",
      slide: null,
      setup: {
        placed: !1,
        ready: !1,
        focused: !1,
      },
      feature: "operate",
      controls: ["obj", "aperture", "mirrorFace", "mirrorPitch", "mirrorYaw"],
      tabs: ["log"],
      cam: [
        [0.62, 0.5, 0.78],
        [0.2, 0.12, -0.18],
      ],
      body: translate(
        "<p>按课本的步骤使用显微镜，下方的检查表会逐项打勾，违规操作会记录在数据坞里。</p><p><b>一、取镜和安放</b>：右手握镜臂，左手托镜座，放在实验台上略偏左的地方。</p><p><b>二、对光</b>：转动转换器使低倍物镜对准通光孔；把较大的光圈对准通光孔；左眼注视目镜，转动反光镜，直到看到明亮的圆形视野。</p><p><b>三、观察</b>：把玻片放在载物台上，标本正对通光孔中心，用压片夹压住。转动粗准焦螺旋使镜筒缓缓下降，<b>眼睛从侧面看着物镜</b>，直到物镜接近玻片；然后左眼看目镜，反向转动粗准焦螺旋使镜筒缓缓上升，直到看清物像，再略微转动细准焦螺旋使物像更清晰。</p>",
      ),
      steps: [],
    },
    {
      id: "image",
      title: translate("成像特点"),
      sub: "An inverted image",
      scope: "student",
      slide: "letterE",
      slides: ["letterE", "letterShang"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
      },
      dragMode: "slide",
      feature: "image",
      controls: ["obj", "eye", "dragMode"],
      tabs: ["image"],
      cam: [
        [0.22, 0.34, 0.42],
        [0, 0.14, 0],
      ],
      body: translate(
        '<p>在载玻片上写一个小小的“e”，放在显微镜下，看到的却是“ə”——上下、左右都颠倒了。显微镜成的是<b>倒像</b>，相当于把玻片在纸面上旋转 180°。</p><p>这一课视野里的拖动方式设为“推玻片”：你的手向哪边推玻片，物像就向<b>相反</b>的方向移动。</p><p class="eq">物像偏左上方 → 把玻片向左上方移动，物像才会回到中央</p><p>换成“上”字装片再试一次，并把视野中的像和三维场景中的玻片对照。</p>',
      ),
      steps: [
        translate("对比玻片上的“e”和视野中的像"),
        translate("在视野中向右拖动（推玻片向右），观察物像的移动方向"),
        translate("把物像移到视野左上方，再移回中央"),
        translate("换“上”字装片重复"),
      ],
    },
    {
      id: "highpower",
      title: translate("低倍换高倍"),
      sub: "From low to high power",
      scope: "student",
      slide: "onion",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
        offset: [380, -260],
      },
      feature: "highpower",
      controls: ["obj", "eye", "aperture", "mirrorFace"],
      tabs: ["log", "optics"],
      cam: [
        [0.3, 0.32, 0.5],
        [0, 0.17, 0],
      ],
      body: translate(
        '<p>高倍镜下视野范围小，所以必须<b>先在低倍镜下找到目标</b>，把它移到视野中央，再转动转换器换上高倍物镜。</p><p>换上高倍镜后：</p><p>· 视野变<b>小</b>、变<b>暗</b>：开大光圈或换用凹面镜；<br>· 景深变浅：只能转动<b>细准焦螺旋</b>，粗准焦螺旋一格就可能压碎玻片；<br>· 看到的细胞数目变少，细胞变大。</p><p class="eq">视野直径 = 视场数 ÷ 物镜倍数　亮度 ∝ (NA ÷ 物镜倍数)²</p><p>目标细胞已用虚线圈出。数据坞的“成像参数”表比较了四个物镜。</p>',
      ),
      steps: [],
    },
    {
      id: "dust",
      title: translate("判断污点位置"),
      sub: "Where is the speck?",
      scope: "student",
      slide: "onion",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
        dust: !0,
      },
      feature: "dust",
      controls: ["obj", "eye"],
      tabs: ["dust"],
      cam: [
        [0.24, 0.36, 0.44],
        [0, 0.2, 0],
      ],
      body: translate(
        "<p>视野中有一个污点。它可能在<b>目镜</b>、<b>物镜</b>或<b>玻片</b>上。</p><p>· 转动目镜：污点跟着转 → 在目镜上；<br>· 移动玻片：污点跟着动 → 在玻片上；<br>· 两者都不动，换物镜后污点消失 → 在物镜上。</p><p>先观察，再在数据坞中回答。可以按“换一个污点”多练几次。</p>",
      ),
      steps: [
        translate("转动目镜（拖动三维场景中的目镜，或按按钮）"),
        translate("拖动视野移动玻片"),
        translate("换一个物镜"),
        translate("判断污点的位置"),
      ],
    },
    {
      id: "plant",
      title: translate("植物细胞"),
      sub: "Onion epidermis",
      scope: "student",
      slide: "onion",
      slides: ["onion", "purpleOnion"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "stain",
      reagents: ["iodine", "paper"],
      controls: ["obj", "eye", "aperture", "labels"],
      tabs: ["cells"],
      cam: [
        [0.42, 0.36, 0.56],
        [0.08, 0.13, -0.04],
      ],
      body: translate(
        "<p>撕下洋葱鳞片叶<b>内表皮</b>，展平在清水中，盖上盖玻片。未染色时细胞几乎透明，只看得清细胞壁——试着把光圈调小，透明的结构会显出轮廓。</p><p>点桌上的<b>碘液</b>，在盖玻片一侧滴加，再点<b>吸水纸</b>在另一侧吸引（引流法），碘液会逐渐流过标本：细胞核被染成深棕色，核仁也清楚可见。</p><p>植物细胞的基本结构：<b>细胞壁</b>、细胞膜、<b>细胞质</b>、<b>细胞核</b>、<b>液泡</b>。洋葱表皮细胞有一个很大的中央液泡，细胞核常被挤到细胞边缘。</p><p>在 40× 下转动细准焦螺旋：细胞约 25 µm 厚，焦平面在上表面、中间、下表面时看到的结构不同。</p>",
      ),
      steps: [
        translate("在 10× 下观察未染色的细胞，缩小光圈对比"),
        translate("滴加碘液并用吸水纸引流"),
        translate("换 40× 观察细胞核与核仁"),
        translate("打开结构标注，悬停识别各结构"),
      ],
    },
    {
      id: "animal",
      title: translate("动物细胞"),
      sub: "Human cheek cells",
      scope: "student",
      slide: "cheek",
      slides: ["cheek", "onion"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "stain",
      reagents: ["methylene", "iodine", "paper"],
      controls: ["obj", "eye", "aperture", "labels"],
      tabs: ["cells"],
      cam: [
        [0.42, 0.36, 0.56],
        [0.08, 0.13, -0.04],
      ],
      body: translate(
        "<p>用消毒牙签在口腔内侧壁轻刮，涂在滴有<b>生理盐水</b>的载玻片上（用清水细胞会吸水涨破），盖上盖玻片。</p><p>口腔上皮细胞扁平、形状不规则，常成团重叠，边缘有褶皱；细胞核小而居中。它们很薄，不染色几乎看不见，用<b>亚甲蓝</b>染色后细胞核呈深蓝色。细胞表面常附着口腔细菌。</p><p>和洋葱表皮细胞比较：动物细胞<b>没有细胞壁和大液泡</b>，形状不固定。</p>",
      ),
      steps: [
        translate("在 10× 下找到细胞团，缩小光圈"),
        translate("滴加亚甲蓝并引流"),
        translate("换 40× 观察细胞核与细菌"),
        translate("在数据坞对比动植物细胞"),
      ],
    },
    {
      id: "paramecium",
      title: translate("草履虫"),
      sub: "Paramecium, alive",
      scope: "student",
      slide: "paramecium",
      slides: ["paramecium", "spirogyra"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 0,
      },
      feature: "live",
      controls: ["obj", "eye", "aperture", "cotton", "labels"],
      tabs: ["live"],
      cam: [
        [0.34, 0.34, 0.54],
        [0, 0.15, -0.02],
      ],
      body: translate(
        "<p>从草履虫培养液的<b>表层</b>吸一滴（表层氧气多，草履虫多），放几丝<b>棉花纤维</b>限制它们的运动，盖上盖玻片。</p><p>草履虫是单细胞生物，身体像倒置的草鞋，长约 200 µm。表面密布<b>纤毛</b>，靠纤毛摆动旋转着前进；碰到障碍会后退、转向再前进。</p><p>在 10× 下可以看到：口沟、<b>食物泡</b>（随胞质流动）、两个<b>伸缩泡</b>（收集管呈放射状，规律地收缩排出多余的水）、大核与小核。</p><p>它们游得很快——放棉纤维、用低倍镜跟踪。</p>",
      ),
      steps: [
        translate("在 4× 下找到草履虫"),
        translate("打开或关闭棉花纤维，比较运动"),
        translate("换 10×，跟踪一只草履虫"),
        translate("数一数伸缩泡收缩的频率"),
      ],
    },
    {
      id: "leaf",
      title: translate("叶片与叶绿体"),
      sub: "Stomata & cyclosis",
      scope: "student",
      slide: "elodea",
      slides: ["elodea", "stomata", "leafSection"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "live",
      controls: ["obj", "eye", "aperture", "labels"],
      tabs: ["cells"],
      cam: [
        [0.34, 0.34, 0.54],
        [0, 0.15, -0.02],
      ],
      body: translate(
        "<p><b>黑藻</b>的小叶只有一两层细胞，可以直接制片观察。细胞里的<b>叶绿体</b>呈扁平的椭球形，围绕中央液泡沿细胞边缘流动——这是<b>细胞质的流动</b>（胞质环流）。用叶绿体作为参照，可以判断流动的方向。</p><p>换上<b>蚕豆叶下表皮</b>玻片：表皮细胞像拼图一样彼此嵌合；成对的半月形<b>保卫细胞</b>围成<b>气孔</b>，保卫细胞里有叶绿体，普通表皮细胞没有。</p><p><b>叶片横切</b>玻片中可以看到上下表皮、栅栏组织、海绵组织和叶脉。</p>",
      ),
      steps: [
        translate("在 40× 下观察黑藻叶绿体的流动方向"),
        translate("换蚕豆叶下表皮，找到气孔和保卫细胞"),
        translate("换叶片横切，辨认各层组织"),
      ],
    },
    {
      id: "plasmolysis",
      title: translate("质壁分离与复原"),
      sub: "Plasmolysis",
      scope: "student",
      slide: "purpleOnion",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "stain",
      reagents: ["sucrose", "water", "paper"],
      controls: ["obj", "eye", "aperture", "timeScale", "labels"],
      tabs: ["plas"],
      cam: [
        [0.42, 0.36, 0.56],
        [0.08, 0.13, -0.04],
      ],
      body: translate(
        '<p>紫色洋葱鳞片叶<b>外表皮</b>细胞的液泡含花青素，便于观察原生质层的位置。</p><p>在盖玻片一侧滴加 <b>0.3 g/mL 蔗糖溶液</b>，另一侧用吸水纸吸引。外界溶液浓度高于细胞液，细胞失水，<b>原生质层</b>（细胞膜、液泡膜和两层膜之间的细胞质）与细胞壁逐渐分离——先从角隅处开始；液泡变小，紫色变深。</p><p>再用同样的方法滴加<b>清水</b>，细胞吸水，发生<b>质壁分离复原</b>。</p><p class="eq">原生质层的伸缩性 > 细胞壁的伸缩性</p><p>数据坞记录了视野中细胞的平均原生质体面积随时间的变化。</p>',
      ),
      steps: [
        translate("在 10× 下观察正常细胞"),
        translate("滴加蔗糖溶液并引流"),
        translate("观察原生质层与细胞壁分离"),
        translate("滴加清水并引流，观察复原"),
      ],
    },
    {
      id: "mitosis",
      title: translate("有丝分裂"),
      sub: "Onion root tip",
      scope: "student",
      slide: "rootTip",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "mitosis",
      controls: ["obj", "eye", "aperture", "labels"],
      tabs: ["mitosis"],
      cam: [
        [0.34, 0.34, 0.54],
        [0, 0.15, -0.02],
      ],
      body: translate(
        '<p>洋葱根尖经过<b>解离</b>（盐酸 + 酒精，使细胞分离）→ <b>漂洗</b> → <b>染色</b>（甲紫溶液，使染色体着色）→ <b>制片</b>（压片使细胞分散）。</p><p>先在低倍镜下找到<b>分生区</b>：细胞呈正方形、排列紧密、许多细胞正在分裂；根冠和伸长区的细胞形态不同。</p><p>换高倍镜后，<b>点击一个细胞</b>，判断它处于哪个时期：间期、前期、中期、后期、末期。数据坞会统计各期细胞数并计算<b>分裂指数</b>。</p><p class="eq">各时期细胞数之比 ≈ 各时期所占时间之比</p><p>注意：解离后细胞已经死亡，看到的是静止的细胞，不能观察到一个细胞连续分裂的过程。</p>',
      ),
      steps: [
        translate("在 4× 下找到根尖分生区"),
        translate("换 40×，观察各时期细胞"),
        translate("点击细胞判断时期，累计 30 个以上"),
        translate("计算分裂指数"),
      ],
    },
    {
      id: "blood",
      title: translate("血涂片与油镜"),
      sub: "Blood smear, oil immersion",
      scope: "research",
      slide: "blood",
      slides: ["blood", "frogBlood"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 2,
      },
      feature: "oil",
      controls: ["obj", "eye", "lamp", "iris", "labels"],
      tabs: ["cells"],
      cam: [
        [0.38, 0.38, 0.6],
        [0.03, 0.18, -0.03],
      ],
      body: translate(
        "<p>人血涂片（瑞氏染色）中最多的是<b>红细胞</b>：两面凹的圆盘，中央较薄而颜色淡，没有细胞核。<b>白细胞</b>数量少、有细胞核：中性粒细胞的核分 2~5 叶，淋巴细胞的核大而圆，单核细胞最大、核呈肾形，嗜酸性粒细胞含橘红色颗粒。<b>血小板</b>很小，没有细胞核。</p><p>100× 物镜是<b>油镜</b>：数值孔径 1.25，必须在盖玻片上滴一滴<b>香柏油</b>，否则光线在玻璃与空气界面发生折射和全反射，图像模糊。油镜的工作距离只有 0.15 mm。</p><p>换成<b>蛙血涂片</b>对比：蛙的红细胞呈椭圆形，<b>有细胞核</b>。</p>",
      ),
      steps: [
        translate("在 40× 下找到细胞分布均匀的区域"),
        translate("不加油直接换 100×，观察图像"),
        translate("点香柏油滴在盖玻片上，再观察"),
        translate("找出各种白细胞；换蛙血涂片对比"),
      ],
    },
    {
      id: "measure",
      title: translate("测微尺"),
      sub: "Measuring with micrometers",
      scope: "student",
      slide: "micrometer",
      slides: ["micrometer", "onion", "hemocytometer"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "measure",
      controls: ["obj", "eye", "reticle", "dragMode"],
      tabs: ["measure"],
      cam: [
        [0.24, 0.36, 0.44],
        [0, 0.2, 0],
      ],
      body: translate(
        '<p><b>目镜测微尺</b>装在目镜里，刻度随目镜放大，实际代表的长度随物镜倍数而变，必须先标定。<b>台微尺</b>是一张刻有精确刻度的玻片：1 mm 分 100 格，每格 10 µm。</p><p>转动目镜使两尺平行，移动台微尺使两尺的 0 刻度对齐，再向右找到两尺刻度<b>再次重合</b>的地方：</p><p class="eq">目镜每格长度 = 台微尺格数 × 10 µm ÷ 目镜格数</p><p>把读数填在数据坞中并标定。之后换上细胞玻片（不要换物镜），在视野中<b>拖出线段</b>测量细胞长度。</p>',
      ),
      steps: [
        translate("转动目镜使两尺平行，对齐 0 刻度"),
        translate("找到重合刻度，填写格数并标定"),
        translate("换洋葱表皮或酵母，测量细胞"),
        translate("换物镜后重新标定，比较每格长度"),
      ],
    },
    {
      id: "count",
      title: translate("血球计数板"),
      sub: "Counting yeast",
      scope: "research",
      slide: "hemocytometer",
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 1,
      },
      feature: "count",
      controls: ["obj", "eye", "lamp", "iris", "dilution"],
      tabs: ["count"],
      cam: [
        [0.38, 0.38, 0.6],
        [0.03, 0.18, -0.03],
      ],
      body: translate(
        '<p>血球计数板的计数室是 1 mm × 1 mm 的方格，深 0.1 mm，分为 25 个中方格、每个中方格 16 个小方格。</p><p>先盖盖玻片，再在盖玻片边缘滴加酵母菌培养液，让它自行渗入。稍等片刻，待酵母菌沉降到计数室底部再计数。</p><p>数<b>四角和中央 5 个中方格</b>（共 80 个小方格）中的酵母菌。<b>点击酵母菌</b>即可计数。压在方格线上的细胞，<b>计上不计下、计左不计右</b>；出芽的酵母，芽体达到母细胞一半大小时才算两个。</p><p class="eq">每 mL 酵母数 = 80 小格中的数目 ÷ 80 × 400 × 10⁴ × 稀释倍数</p>',
      ),
      steps: [
        translate("在 10× 下找到计数室"),
        translate("移到第一个中方格，点击计数"),
        translate("依次数完 5 个中方格"),
        translate("计算培养液中的酵母菌密度"),
      ],
    },
    {
      id: "contrast",
      title: translate("明场、暗场与相差"),
      sub: "Contrast methods",
      scope: "research",
      slide: "cheek",
      slides: ["cheek", "diatoms", "paramecium", "pollen"],
      setup: {
        placed: !0,
        ready: !0,
        focused: !0,
        clip: !0,
        obj: 2,
      },
      feature: "contrast",
      controls: ["obj", "eye", "cond", "lamp", "iris", "labels"],
      tabs: ["optics"],
      cam: [
        [0.3, 0.26, 0.46],
        [0.02, 0.14, -0.02],
      ],
      body: translate(
        '<p>活细胞大多是透明的，只改变光的<b>相位</b>，不改变亮度，在明场下很难看清。</p><p>· <b>明场</b>：缩小孔径光阑，对比度提高，但分辨率下降；稍微离焦，透明结构会出现亮边或暗边。<br>· <b>暗场</b>：遮住直射光，只让被标本散射的光进入物镜——黑色背景上，细胞轮廓和微小颗粒发亮。<br>· <b>相差</b>：利用相位板把光程差转换为明暗差，透明细胞清楚地显现，边缘带有亮晕。</p><p class="eq">分辨率 d = λ ÷ (NA物 + NA聚)</p><p>换上硅藻、草履虫等玻片，比较三种方法。</p>',
      ),
      steps: [
        translate("明场下开大、缩小孔径光阑"),
        translate("切换到暗场"),
        translate("切换到相差"),
        translate("换硅藻玻片再比较"),
      ],
    },
    {
      id: "free",
      title: translate("自由观察"),
      sub: "Free exploration",
      scope: "research",
      slide: "diatoms",
      setup: {
        placed: !0,
        ready: !0,
        focused: !1,
        defocus: 0.08,
        clip: !0,
        obj: 1,
      },
      feature: "free",
      reagents: ["iodine", "methylene", "sucrose", "water", "stainR", "paper"],
      controls: [
        "scope",
        "obj",
        "eye",
        "aperture",
        "mirrorFace",
        "lamp",
        "iris",
        "cond",
        "dragMode",
        "labels",
      ],
      tabs: ["slides", "optics"],
      cam: [
        [0.5, 0.46, 0.78],
        [-0.06, 0.13, -0.04],
      ],
      body: translate(
        "<p>全部玻片和功能都已开放：从玻片盘里取任意玻片，使用任意物镜、目镜、照明方式和试剂。</p><p>小技巧：</p><p>· 视野中滚轮 = 细准焦，Shift + 滚轮 = 粗准焦；<br>· 方向键移动玻片，数字键 1~4 换物镜；<br>· <kbd>V</kbd> 放大目镜视野，<kbd>S</kbd> 侧面观察物镜；<br>· 打开结构标注后悬停视野中的结构可显示名称。</p>",
      ),
      steps: [],
    },
  ];
function Zc(t, e) {
  const { camera: o, controls: n, renderer: s } = t,
    a = s.domElement,
    r = new Dc(),
    i = new Z0();
  let c = [],
    d = null,
    h = null;
  const u = (x) => {
    const k = a.getBoundingClientRect();
    (i.set(
      ((x.clientX - k.left) / k.width) * 2 - 1,
      -((x.clientY - k.top) / k.height) * 2 + 1,
    ),
      r.setFromCamera(i, o));
  };
  function l(x) {
    u(x);
    const k = r.intersectObjects(c, !0);
    for (const M of k) {
      let g = M.object,
        w = !0;
      for (let L = g; L; L = L.parent) L.visible === !1 && (w = !1);
      if (!w) continue;
      for (; g && !g.userData.part && !g.userData.drag;) g = g.parent;
      if (!g) continue;
      let $ = g;
      for (; $ && !$.userData.drag;) $ = $.parent;
      return {
        obj: $ || g,
        part: g.userData.part || $?.userData.part,
        kind: ($ || g).userData.drag || null,
        point: M.point.clone(),
      };
    }
    return null;
  }
  const f = new Bc(),
    y = new ht();
  function b(x, k) {
    return (
      u(x),
      f.set(new ht(0, 1, 0), -k),
      r.ray.intersectPlane(f, y) ? y.clone() : null
    );
  }
  (a.addEventListener(
    "pointerdown",
    (x) => {
      if (x.button !== 0) return;
      const k = l(x);
      if (k) {
        if (!k.kind || e.canDrag?.(k) === !1) {
          d = {
            ...k,
            passive: !0,
            x0: x.clientX,
            y0: x.clientY,
            moved: !1,
          };
          return;
        }
        (x.stopPropagation(),
          (n.enabled = !1),
          a.setPointerCapture(x.pointerId),
          (d = {
            ...k,
            x0: x.clientX,
            y0: x.clientY,
            lx: x.clientX,
            ly: x.clientY,
            moved: !1,
          }),
          e.start?.(d, x));
      }
    },
    {
      capture: !0,
    },
  ),
    a.addEventListener("pointermove", (x) => {
      if (d && !d.passive) {
        const g = x.clientX - d.lx,
          w = x.clientY - d.ly;
        ((d.lx = x.clientX),
          (d.ly = x.clientY),
          Math.hypot(x.clientX - d.x0, x.clientY - d.y0) > 3 && (d.moved = !0),
          d.moved && e.move?.(d, g, w, ($) => b(x, $), x));
        return;
      }
      if (
        (d?.passive &&
          Math.hypot(x.clientX - d.x0, x.clientY - d.y0) > 3 &&
          (d.moved = !0),
        x.buttons)
      )
        return;
      const k = l(x),
        M = k ? `${k.part}|${k.obj.uuid}` : null;
      (M !== h &&
        ((h = M),
        (a.style.cursor = k
          ? k.kind
            ? [
                "slideBox",
                "reagent",
                "eyeBox",
                "objective",
                "clip",
                "eyepiece",
              ].includes(k.kind)
              ? "pointer"
              : "grab"
            : "help"
          : "")),
        e.hover?.(k, x));
    }));
  const m = (x) => {
    if (!d) return;
    const k = d;
    if (((d = null), k.passive)) {
      k.moved || e.click?.(k, x);
      return;
    }
    n.enabled = !0;
    try {
      a.releasePointerCapture(x.pointerId);
    } catch {}
    k.moved ? e.end?.(k, x) : e.click?.(k, x);
  };
  return (
    a.addEventListener("pointerup", m),
    a.addEventListener("pointercancel", m),
    a.addEventListener("pointerleave", () => {
      d || ((h = null), e.hover?.(null));
    }),
    a.addEventListener("dblclick", (x) => {
      const k = l(x);
      k && e.dblclick?.(k, x);
    }),
    a.addEventListener(
      "wheel",
      (x) => {
        const k = l(x);
        k &&
          e.wheel?.(k, x) === !0 &&
          (x.preventDefault(), x.stopImmediatePropagation());
      },
      {
        capture: !0,
        passive: !1,
      },
    ),
    {
      setTargets: (x) => (c = x.filter(Boolean)),
      dragging: () => !!d && !d.passive,
    }
  );
}
const wi = 0.55,
  d0 = [
    {
      mag: 4,
      na: 0.1,
      wd: 17.5,
      oil: !1,
      ring: "#d8302a",
    },
    {
      mag: 10,
      na: 0.25,
      wd: 7,
      oil: !1,
      ring: "#e8c22a",
    },
    {
      mag: 40,
      na: 0.65,
      wd: 0.6,
      oil: !1,
      ring: "#2a6fd8",
    },
    {
      mag: 100,
      na: 1.25,
      wd: 0.15,
      oil: !0,
      ring: "#f2f2f2",
    },
  ],
  He = [
    {
      mag: 5,
      fn: 20,
    },
    {
      mag: 10,
      fn: 18,
    },
    {
      mag: 16,
      fn: 11,
    },
  ],
  Yt = 20,
  Qc = Yt - 3,
  Jc = Yt + 34,
  vi = 12,
  ki = 0.2,
  tl = (t, e) => t.mag * e.mag,
  el = (t, e) => (e.fn / t.mag) * 1e3;
function Pi(t, e) {
  return t.oil && !e ? Math.min(t.na, 0.95) : t.na;
}
const ol = (t, e) => (t.oil && e ? 1.515 : 1);
function nl(t, e, o = wi) {
  return o / (t + Math.max(0.02, Math.min(e, t)));
}
function sl(t, e, o = 1, n = wi, s = 10) {
  return (n * o) / (t * t) + (o * s) / (e * t);
}
const al = (t) => (t - Yt) * 1e3,
  $i = (t, e) => e.wd + (t - Yt),
  rl = (t) => (t / (2 * Math.PI)) * vi,
  il = (t) => (t / (2 * Math.PI)) * ki,
  te = [2, 4, 6, 9, 13];
function cl(t, e) {
  const o = te[Math.max(0, Math.min(te.length - 1, t))];
  return Math.min(e, 0.9 * (o / 13) * 0.65);
}
const ll = (t) => (te[Math.max(0, Math.min(te.length - 1, t))] / 13) ** 2;
function hl(t, e) {
  return Math.exp(-((t / (e ? 0.16 : 0.1)) ** 2));
}
function fl({
  obj: t,
  eye: e,
  source: o = 1,
  align: n = 1,
  aperture: s = 1,
  concave: a = !1,
  oiled: r = !1,
  naIll: i = 0.2,
}) {
  const d = (Math.min(Pi(t, r), i) / (t.mag * e.mag)) ** 2,
    h = (Math.min(0.1, i) / 40) ** 2;
  return o * n * s * (a ? 1.8 : 1) * Math.sqrt(d / h);
}
const dl = (t, e, o = 10) => (t * o) / e;
function Na(t, e = 1) {
  return (t / 80) * 400 * 1e4 * e;
}
function ul(t, e, o, n, s, a) {
  const r = t >= n - o && t <= n + a + o,
    i = e >= s - o && e <= s + a + o;
  return !(
    !r ||
    !i ||
    Math.abs(t - (n + a)) <= o ||
    Math.abs(e - (s + a)) <= o
  );
}
const pl = (t, e) => (e ? t / e : 0);
let un = null;
function vo(t, e) {
  const o = document.createElement("canvas");
  return ((o.width = t), (o.height = e), [o, o.getContext("2d")]);
}
function yl(t = 64) {
  const [e, o] = vo(512, 32),
    n = 512;
  for (let a = 0; a < n; a++) {
    const i = Math.sin((a / n) * t * Math.PI * 2) * 0.75,
      c = Math.round((i * 0.5 + 0.5) * 255);
    ((o.fillStyle = `rgb(${c},128,${Math.round(Math.sqrt(1 - i * i) * 127 + 128)})`),
      o.fillRect(a, 0, 1, 32));
  }
  const s = new A0(e);
  return ((s.wrapS = s.wrapT = xa), s);
}
function bl() {
  const [t, e] = vo(256, 256),
    o = e.createImageData(256, 256);
  for (let s = 0; s < o.data.length; s += 4) {
    const a = 150 + Math.random() * 90;
    ((o.data[s] = o.data[s + 1] = o.data[s + 2] = a), (o.data[s + 3] = 255));
  }
  e.putImageData(o, 0, 0);
  const n = new A0(t);
  return ((n.wrapS = n.wrapT = xa), n.repeat.set(6, 6), n);
}
function Ve() {
  if (un) return un;
  const t = Gc(5);
  t.repeat.set(4, 1);
  const e = bl();
  return (
    (un = {
      enamel: new Dt({
        color: "#121316",
        roughness: 0.32,
        roughnessMap: e,
        metalness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.18,
      }),
      enamelMatte: new Dt({
        color: "#16171a",
        roughness: 0.62,
        roughnessMap: e,
        metalness: 0.05,
        clearcoat: 0.3,
        clearcoatRoughness: 0.5,
      }),
      cream: new Dt({
        color: "#e7e4dc",
        roughness: 0.34,
        metalness: 0,
        clearcoat: 0.8,
        clearcoatRoughness: 0.22,
      }),
      creamDark: new Dt({
        color: "#c9c5bb",
        roughness: 0.4,
        metalness: 0,
        clearcoat: 0.5,
      }),
      chrome: new mt({
        color: "#e6e9ee",
        metalness: 1,
        roughness: 0.16,
      }),
      satin: new mt({
        color: "#c9ccd1",
        metalness: 1,
        roughness: 0.32,
        roughnessMap: t,
      }),
      steelDark: new mt({
        color: "#3a3d42",
        metalness: 0.9,
        roughness: 0.35,
      }),
      black: new mt({
        color: "#0c0d0f",
        metalness: 0.2,
        roughness: 0.5,
      }),
      rubber: new mt({
        color: "#151618",
        roughness: 0.9,
      }),
      knurl: (o = "#1a1b1e", n = 0.4) =>
        new mt({
          color: o,
          metalness: n,
          roughness: 0.38,
          normalMap: yl(),
          normalScale: new Z0(1.4, 1.4),
        }),
      glass: new Dt({
        color: "#f4fbff",
        metalness: 0,
        roughness: 0.03,
        transmission: 0.96,
        thickness: 0.001,
        ior: 1.52,
        transparent: !0,
        envMapIntensity: 1.2,
      }),
      lens: new Dt({
        color: "#20262e",
        metalness: 0.2,
        roughness: 0.05,
        iridescence: 1,
        iridescenceIOR: 1.6,
        iridescenceThicknessRange: [180, 420],
        clearcoat: 1,
        envMapIntensity: 1.6,
      }),
      mirror: new mt({
        color: "#f6f8fb",
        metalness: 1,
        roughness: 0.03,
        envMapIntensity: 1.3,
      }),
      mirrorConcave: new mt({
        color: "#eef1f5",
        metalness: 1,
        roughness: 0.1,
        envMapIntensity: 1.2,
      }),
      stage: new Dt({
        color: "#0f1012",
        roughness: 0.48,
        metalness: 0.2,
        clearcoat: 0.4,
        clearcoatRoughness: 0.4,
      }),
      spring: new mt({
        color: "#cfd3d8",
        metalness: 1,
        roughness: 0.22,
      }),
      led: new Jo({
        color: new Oc("#fff6e8").multiplyScalar(2.5),
        toneMapped: !1,
      }),
    }),
    un
  );
}
function ee(t, e, o = 48) {
  const n = new Mi(
    t.map(([s, a]) => new Z0(s, a)),
    o,
  );
  return new _(n, e);
}
function pn(t, e, o, n, s) {
  return new _(new we(t, e, o, 3, n), s);
}
function za(
  t,
  e,
  {
    color: o = "#1a1b1e",
    metal: n = 0.4,
    cap: s = "#2a2c30",
    side: a = 1,
    ridges: r = 48,
  } = {},
) {
  const i = Ve(),
    c = new Q(),
    d = new Q();
  c.add(d);
  const h = i.knurl(o, n);
  h.normalMap.repeat.set(r / 64, 1);
  const u = new _(new Ct(t, t, e, 64, 1, !0), h);
  ((u.rotation.z = Math.PI / 2), d.add(u));
  const l = new Dt({
      color: s,
      metalness: 0.5,
      roughness: 0.3,
      clearcoat: 0.6,
    }),
    f = new _(new tn(t * 0.97, 48), l);
  ((f.rotation.y = (Math.PI / 2) * a),
    (f.position.x = (e / 2 + 4e-4) * a),
    d.add(f));
  const y = new _(new mi(t * 0.985, 0.0011, 8, 64), l);
  ((y.rotation.y = Math.PI / 2), (y.position.x = (e / 2) * a), d.add(y));
  const b = new _(
    new Pe(3e-4, t * 0.5, 0.0012),
    new mt({
      color: "#e8e4d8",
      roughness: 0.5,
    }),
  );
  return (
    b.position.set((e / 2 + 6e-4) * a, t * 0.55, 0),
    d.add(b),
    {
      group: c,
      rot: d,
    }
  );
}
function ml(t) {
  const [e, o] = vo(512, 64);
  ((o.fillStyle = "#d9dde2"),
    o.fillRect(0, 0, 512, 64),
    (o.fillStyle = "#1a1b1e"),
    (o.font = "600 30px 'Helvetica Neue', Arial, sans-serif"),
    (o.textBaseline = "middle"));
  const n = `${t.mag}× / ${t.na.toFixed(2)}${t.oil ? " OIL" : ""}   160 / 0.17`;
  (o.fillText(n, 14, 34), o.fillText(n, 270, 34));
  const s = new A0(e);
  return ((s.colorSpace = wo), (s.anisotropy = 8), s);
}
function Ml(t) {
  const e = Ve(),
    o = new Q(),
    n = 0.045 - t.wd / 1e3 - 0.004,
    s = t.mag >= 40 ? 0.0095 : 0.0105,
    a = new mt({
      color: "#d9dde2",
      metalness: 1,
      roughness: 0.18,
      map: ml(t),
    }),
    r = ee(
      [
        [1e-4, 0],
        [0.0098, 0],
        [0.0102, -0.002],
        [0.0102, -0.006],
        [s, -0.0068],
        [s, -n * 0.62],
        [s * 0.82, -n * 0.72],
        [s * 0.62, -n * 0.94],
        [s * 0.5, -n],
        [1e-4, -n],
      ],
      e.chrome,
      48,
    );
  o.add(r);
  const i = new _(new Ct(s * 1.002, s * 1.002, n * 0.22, 48, 1, !0), a);
  ((i.position.y = -0.0068 - n * 0.16), o.add(i));
  const c = new _(
    new Ct(s * 1.006, s * 1.006, 0.0016, 48, 1, !0),
    new Dt({
      color: t.ring,
      roughness: 0.3,
      clearcoat: 1,
    }),
  );
  if (((c.position.y = -n * 0.58), o.add(c), t.oil)) {
    const u = c.clone();
    ((u.material = new Dt({
      color: "#151515",
      roughness: 0.4,
    })),
      (u.position.y = -n * 0.52),
      o.add(u));
  }
  const d = new _(
    new Ct(0.0104, 0.0104, 0.0032, 48, 1, !0),
    e.knurl("#c8ccd2", 1),
  );
  ((d.position.y = -0.0035), o.add(d));
  const h = new _(new tn(s * 0.5 * (t.mag >= 40 ? 0.45 : 0.7), 32), e.lens);
  return (
    (h.rotation.x = Math.PI / 2),
    (h.position.y = -n - 5e-5),
    o.add(h),
    (o.userData.length = n),
    o
  );
}
function xl(t) {
  const [e, o] = vo(256, 64);
  ((o.fillStyle = "#0e0f11"),
    o.fillRect(0, 0, 256, 64),
    (o.fillStyle = "#e9e5da"),
    (o.font = "700 30px 'Helvetica Neue', Arial, sans-serif"),
    (o.textBaseline = "middle"),
    o.fillText(`${t}×`, 20, 34),
    o.fillText(`${t}×`, 148, 34));
  const n = new A0(e);
  return ((n.colorSpace = wo), n);
}
function Ti(t) {
  const e = Ve(),
    o = new Q(),
    n = ee(
      [
        [1e-4, -0.03],
        [0.0115, -0.03],
        [0.0115, 0],
        [1e-4, 0],
      ],
      e.satin,
      40,
    );
  o.add(n);
  const s = t.mag >= 16 ? 0.026 : t.mag >= 10 ? 0.022 : 0.02,
    a = ee(
      [
        [0.0115, 0],
        [0.0138, 8e-4],
        [0.0138, s - 0.003],
        [0.0128, s],
        [0.0105, s],
        [0.0098, s - 0.001],
        [1e-4, s - 0.001],
      ],
      new Dt({
        color: "#121316",
        roughness: 0.4,
        metalness: 0.3,
        clearcoat: 0.5,
      }),
      48,
    );
  o.add(a);
  const r = new _(
    new Ct(0.01385, 0.01385, 0.007, 48, 1, !0),
    new mt({
      map: xl(t.mag),
      roughness: 0.5,
      metalness: 0.2,
    }),
  );
  ((r.position.y = s * 0.45), o.add(r));
  const i = new _(new tn(0.0085, 32), e.lens);
  return (
    (i.rotation.x = -Math.PI / 2),
    (i.position.y = s - 9e-4),
    o.add(i),
    o
  );
}
function Ii(t) {
  Ve();
  const e = new Q(),
    o = new Dt({
      color: "#eaf6f2",
      roughness: 0.04,
      transmission: 0.92,
      thickness: 0.001,
      ior: 1.52,
      transparent: !0,
      opacity: 1,
      envMapIntensity: 1.3,
    }),
    n = new _(new we(0.075, 0.001, 0.025, 2, 3e-4), o);
  ((n.position.y = -5e-4), e.add(n));
  const [s, a] = vo(256, 256);
  (a.clearRect(0, 0, 256, 256), t.thumb?.(a, 256));
  const r = new A0(s);
  r.colorSpace = wo;
  const i = new _(
    new Te(0.022, 0.022),
    new mt({
      map: r,
      transparent: !0,
      roughness: 0.6,
      depthWrite: !1,
    }),
  );
  ((i.rotation.x = -Math.PI / 2), (i.position.y = 5e-5), e.add(i));
  const c = new _(new Pe(0.022, 17e-5, 0.022), o);
  ((c.position.y = 12e-5), e.add(c));
  const [d, h] = vo(256, 256);
  ((h.fillStyle = "#f3efe4"),
    h.fillRect(0, 0, 256, 256),
    (h.strokeStyle = "#c9b98f"),
    (h.lineWidth = 6),
    h.strokeRect(8, 8, 240, 240),
    (h.fillStyle = "#222"),
    (h.textAlign = "center"),
    (h.font = "700 34px 'PingFang SC', 'Noto Sans SC', sans-serif"),
    (t.slideLabel || [t.name]).forEach((y, b) =>
      h.fillText(y, 128, 92 + b * 46, 230),
    ),
    (h.font = "italic 24px Georgia, serif"),
    t.latin && h.fillText(t.latin, 128, 210, 230));
  const l = new A0(d);
  ((l.colorSpace = wo), (l.anisotropy = 8));
  const f = new _(
    new Te(0.022, 0.022),
    new mt({
      map: l,
      roughness: 0.85,
    }),
  );
  return (
    (f.rotation.x = -Math.PI / 2),
    (f.rotation.z = Math.PI / 2),
    f.position.set(-0.026, 3e-5, 0),
    e.add(f),
    (e.userData.spec = t),
    e
  );
}
const Qt = (t, e, o = null, n = {}) => (
  (t.userData.part = e),
  o && (t.userData.drag = o),
  Object.assign(t.userData, n),
  t.traverse((s) => {
    s.isMesh && ((s.castShadow = !0), (s.receiveShadow = !0));
  }),
  t
);
function is(t, e, o, n = 0.003) {
  const s = new lo(t, {
    depth: e,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n,
    bevelSegments: 4,
    curveSegments: 32,
  });
  return (s.rotateX(-Math.PI / 2), new _(s, o));
}
function gl(t, e, o, n = 0.003) {
  const s = new lo(t, {
    depth: e,
    bevelEnabled: !0,
    bevelThickness: n,
    bevelSize: n,
    bevelSegments: 4,
    curveSegments: 40,
  });
  return (s.rotateY(Math.PI / 2), s.translate(-e / 2, 0, 0), new _(s, o));
}
const yn = 0.26,
  _s = 0.012;
function wl(t) {
  const e = new Q(),
    o = new Q();
  ((o.rotation.x = -yn), e.add(o));
  const n = new Q();
  o.add(n);
  const s = ee(
    [
      [1e-4, 0.004],
      [0.021, 0.004],
      [0.021, 0.006],
      [0.017, 0.011],
      [1e-4, 0.012],
    ],
    t.chrome,
    64,
  );
  o.add(Qt(s, "nosepiece"));
  const a = ee(
    [
      [1e-4, -0.004],
      [0.026, -0.0035],
      [0.0275, -0.0015],
      [0.0275, 0.0015],
      [0.0262, 0.0036],
      [1e-4, 0.004],
    ],
    t.knurl("#d6d9de", 1),
    64,
  );
  (a.material.normalMap.repeat.set(3, 1), n.add(Qt(a, "nosepiece", "nose")));
  const r = d0.map((i, c) => {
    const d = new Q(),
      h = -Math.PI / 2 + (c * Math.PI) / 2,
      u = new ht(
        Math.sin(yn) * Math.cos(h),
        -Math.cos(yn),
        Math.sin(yn) * Math.sin(h),
      );
    (d.position.copy(u.clone().multiplyScalar(_s)),
      d.quaternion.setFromUnitVectors(new ht(0, -1, 0), u));
    const l = Ml(i);
    return (
      d.add(l),
      Qt(d, "objective", "objective", {
        obj: c,
      }),
      n.add(d),
      d
    );
  });
  return {
    group: e,
    spin: n,
    objs: r,
  };
}
function vl() {
  const t = Ve(),
    e = new Q();
  e.name = "student";
  const o = 0.129,
    n = {},
    s = (Z, rt, $t) => {
      const Tt = new xi();
      (Tt.position.copy($t), rt.add(Tt), (n[Z] = Tt));
    },
    a = new co();
  (a.moveTo(-0.034, -0.05),
    a.lineTo(-0.064, -0.05),
    a.bezierCurveTo(-0.074, -0.05, -0.078, -0.03, -0.074, 0.02),
    a.bezierCurveTo(-0.07, 0.09, -0.05, 0.118, 0, 0.12),
    a.bezierCurveTo(0.05, 0.118, 0.07, 0.09, 0.074, 0.02),
    a.bezierCurveTo(0.078, -0.03, 0.074, -0.05, 0.064, -0.05),
    a.lineTo(0.034, -0.05),
    a.bezierCurveTo(0.03, -0.05, 0.03, -0.01, 0.03, 0.01),
    a.bezierCurveTo(0.028, 0.04, 0.018, 0.05, 0, 0.05),
    a.bezierCurveTo(-0.018, 0.05, -0.028, 0.04, -0.03, 0.01),
    a.bezierCurveTo(-0.03, -0.01, -0.03, -0.05, -0.034, -0.05));
  const r = is(a, 0.019, t.cream, 0.004);
  ((r.position.y = 0.004), e.add(Qt(r, "base")));
  for (const [Z, rt] of [
    [-0.06, 0.04],
    [0.06, 0.04],
    [-0.05, -0.1],
    [0.05, -0.1],
  ]) {
    const $t = new _(new Ct(0.007, 0.007, 0.004, 20), t.rubber);
    ($t.position.set(Z, 0.002, rt), e.add($t));
  }
  s("base", e, new ht(0.055, 0.02, -0.06));
  const i = pn(0.036, 0.115, 0.034, 0.006, t.cream);
  (i.position.set(0, 0.075, -0.078),
    e.add(Qt(i, "pillar")),
    s("pillar", e, new ht(0.018, 0.08, -0.07)));
  const c = new _(new Ct(0.011, 0.011, 0.05, 32), t.chrome);
  ((c.rotation.z = Math.PI / 2),
    c.position.set(0, 0.137, -0.08),
    e.add(Qt(c, "joint")),
    s("joint", e, new ht(0.025, 0.137, -0.08)));
  const d = new co();
  (d.moveTo(-0.06, -0.058),
    d.lineTo(0.06, -0.058),
    d.lineTo(0.06, 0.062),
    d.lineTo(-0.06, 0.062),
    d.lineTo(-0.06, -0.058));
  const h = new Ys();
  (h.absarc(0, 0, 0.0075, 0, Math.PI * 2, !0), d.holes.push(h));
  const u = is(d, 0.005, t.stage, 0.0015);
  ((u.position.y = o - 0.0065),
    e.add(Qt(u, "stage")),
    s("stage", e, new ht(-0.05, o, 0.03)),
    s("hole", e, new ht(0, o, 0.004)));
  const l = pn(0.03, 0.02, 0.03, 0.004, t.cream);
  (l.position.set(0, o - 0.014, -0.065), e.add(l));
  const f = [-1, 1].map((Z) => {
    const rt = new Q();
    rt.position.set(Z * 0.03, o + 0.001, -0.04);
    const $t = new _(new Ct(0.0035, 0.0035, 0.005, 16), t.chrome);
    (($t.position.y = 0.0015), rt.add($t));
    const Tt = new Q();
    Tt.position.y = 0.003;
    const Ft = new _(new Pe(0.006, 7e-4, 0.042), t.spring);
    (Ft.position.set(0, 0, 0.021), (Ft.rotation.x = 0.06), Tt.add(Ft));
    const Ot = new _(new Ct(0.0012, 0.0012, 0.006, 10), t.spring);
    return (
      (Ot.rotation.z = Math.PI / 2),
      Ot.position.set(0, -0.0018, 0.041),
      Tt.add(Ot),
      rt.add(Tt),
      e.add(
        Qt(rt, "clip", "clip", {
          side: Z,
        }),
      ),
      (rt.userData.arm = Tt),
      rt
    );
  });
  s("clip", e, new ht(0.03, o + 0.004, 0));
  const y = new Q();
  y.position.set(0.032, o - 0.0105, -0.004);
  const b = new co();
  (b.absarc(0, 0, 0.043, 0, Math.PI * 2, !1),
    te.forEach((Z, rt) => {
      const $t = new Ys(),
        Tt = Math.PI + (rt * 2 * Math.PI) / te.length;
      ($t.absarc(
        Math.cos(Tt) * 0.032,
        Math.sin(Tt) * 0.032,
        Z / 2e3,
        0,
        Math.PI * 2,
        !0,
      ),
        b.holes.push($t));
    }));
  const m = is(b, 0.0018, t.knurl("#1b1c1f", 0.5), 4e-4);
  (m.material.normalMap.repeat.set(8, 1), (m.position.y = -9e-4));
  const x = new Q();
  (x.add(m), y.add(x));
  const k = new _(new Ct(0.004, 0.004, 0.009, 16), t.chrome);
  ((k.position.y = 0.004),
    y.add(k),
    e.add(Qt(y, "diaphragm", "diaphragm")),
    s("diaphragm", e, new ht(0.074, o - 0.011, 0)));
  const M = new Q();
  M.position.set(0, 0.06, 0);
  const g = pn(0.008, 0.008, 0.06, 0.002, t.chrome);
  (g.position.set(0, 0, -0.035), e.add(g), g.position.set(0, 0.058, -0.035));
  const w = new Q();
  M.add(w);
  const $ = new _(new mi(0.03, 0.0022, 10, 48, Math.PI), t.chrome);
  (($.rotation.z = Math.PI), w.add($));
  const L = new Q();
  w.add(L);
  const j = new Q();
  L.add(j);
  const T = new _(new Ct(0.0275, 0.0275, 0.006, 48, 1, !0), t.chrome);
  j.add(T);
  const S = new _(new tn(0.026, 48), t.mirror);
  ((S.rotation.x = -Math.PI / 2), (S.position.y = 0.0028), j.add(S));
  const R = new en(
      0.09,
      48,
      8,
      0,
      Math.PI * 2,
      Math.PI - Math.asin(0.026 / 0.09),
      Math.asin(0.026 / 0.09),
    ),
    C = new _(R, t.mirrorConcave);
  ((C.position.y = -0.0028 + 0.09 * Math.cos(Math.asin(0.026 / 0.09)) - 0.0012),
    (C.material.side = Nc),
    j.add(C));
  for (const Z of [-1, 1]) {
    const rt = new _(new Ct(0.0022, 0.0022, 0.006, 12), t.chrome);
    ((rt.rotation.z = Math.PI / 2), (rt.position.x = Z * 0.029), L.add(rt));
  }
  (e.add(Qt(M, "mirror", "mirror")), s("mirror", e, new ht(0.03, 0.06, 0.02)));
  const A = new co(),
    D = (Z, rt) => new Z0(-Z, rt);
  (A.moveTo(...D(-0.064, 0.128).toArray()),
    A.splineThru([
      D(-0.098, 0.13),
      D(-0.114, 0.17),
      D(-0.118, 0.215),
      D(-0.104, 0.262),
      D(-0.074, 0.294),
      D(-0.042, 0.306),
      D(-0.022, 0.306),
    ]),
    A.lineTo(...D(-0.022, 0.262).toArray()),
    A.splineThru([
      D(-0.046, 0.258),
      D(-0.068, 0.244),
      D(-0.08, 0.214),
      D(-0.082, 0.18),
      D(-0.072, 0.145),
      D(-0.064, 0.128),
    ]));
  const W = gl(A, 0.024, t.cream, 0.004);
  (e.add(Qt(W, "arm")), s("arm", e, new ht(0.016, 0.21, -0.11)));
  const O = pn(0.032, 0.07, 0.016, 0.004, t.cream);
  (O.position.set(0, 0.27, -0.024), e.add(Qt(O, "arm")));
  const N = [],
    V = [];
  for (const Z of [-1, 1]) {
    const rt = za(0.021, 0.012, {
      color: "#18191c",
      side: Z,
    });
    (rt.group.position.set(Z * 0.024, 0.25, -0.086),
      e.add(Qt(rt.group, "coarse", "coarse")),
      N.push(rt));
    const $t = za(0.0125, 0.01, {
      color: "#18191c",
      side: Z,
      ridges: 36,
    });
    ($t.group.position.set(Z * 0.021, 0.18, -0.098),
      e.add(Qt($t.group, "fine", "fine")),
      V.push($t));
  }
  const st = new _(new Ct(0.004, 0.004, 0.04, 16), t.chrome);
  ((st.rotation.z = Math.PI / 2), st.position.set(0, 0.25, -0.086), e.add(st));
  const ft = st.clone();
  (ft.position.set(0, 0.18, -0.098),
    e.add(ft),
    s("coarse", e, new ht(0.032, 0.25, -0.086)),
    s("fine", e, new ht(0.028, 0.18, -0.098)));
  const F = new Q();
  e.add(F);
  const H = 0.15,
    K = ee(
      [
        [1e-4, 0],
        [0.0165, 0],
        [0.0165, 0.006],
        [0.0158, 0.008],
        [0.0158, H - 0.01],
        [0.0172, H - 0.008],
        [0.0172, H],
        [0.0118, H],
        [0.0118, H - 0.002],
      ],
      t.cream,
      64,
    );
  ((K.position.y = 0.014), F.add(Qt(K, "barrel")));
  const J = new _(new Pe(0.008, 0.11, 0.006), t.satin);
  (J.position.set(0, 0.014 + 0.07, -0.017), F.add(J));
  const ot = wl(t);
  F.add(ot.group);
  const dt = ee(
    [
      [1e-4, 0],
      [0.0182, 0],
      [0.0182, 0.0018],
      [0.0172, 0.0035],
      [0.0163, 0.0035],
      [0.0163, 0.0095],
      [1e-4, 0.0095],
    ],
    t.satin,
    64,
  );
  F.add(Qt(dt, "nosepiece"));
  const xt = new Q();
  ((xt.position.y = 0.014 + H), F.add(xt));
  const vt = He.map((Z) => {
    const rt = Ti(Z);
    return ((rt.visible = !1), xt.add(Qt(rt, "eyepiece", "eyepiece")), rt);
  });
  (s("barrel", F, new ht(0.017, 0.1, 0)),
    s("eyepiece", xt, new ht(0.014, 0.012, 0)),
    s("nosepiece", F, new ht(0.028, 0, 0)),
    s("objective", F, new ht(0.012, -0.03, 0.006)));
  const ut = new _(
    new tn(0.0074, 32),
    new Jo({
      color: "#ffffff",
      transparent: !0,
      opacity: 0,
      toneMapped: !1,
      depthWrite: !1,
    }),
  );
  ((ut.rotation.x = -Math.PI / 2),
    ut.position.set(0, o - 0.0058, 0),
    e.add(ut));
  const ct = new Q();
  ((ct.position.y = o),
    e.add(ct),
    ot.group.position.set(0, 0, 0),
    (K.position.y = 0.008),
    (J.position.y = 0.008 + 0.07),
    (xt.position.y = 0.008 + H));
  function bt(Z, rt) {
    ((F.position.y = o + 0.0412 + _s + (Z.b - Yt) / 1e3),
      (ot.spin.rotation.y = -(Z.nose * Math.PI) / 2));
    for (const Ft of N) Ft.rot.rotation.x = Z.coarseA;
    for (const Ft of V) Ft.rot.rotation.x = Z.fineA;
    (vt.forEach((Ft, Ot) => (Ft.visible = Ot === Z.eye)),
      (xt.rotation.y = Z.eyeRot),
      (x.rotation.y = -((Z.diaA ?? Z.aperture) * 2 * Math.PI) / te.length),
      (w.rotation.y = Z.mirror.yaw),
      (L.rotation.x = -Z.mirror.pitch));
    const $t = Z.mirror.concave ? Math.PI : 0;
    ((j.rotation.x += ($t - j.rotation.x) * 0.25),
      f.forEach(
        (Ft) => (Ft.userData.arm.rotation.x = -(Z.clipLift ?? 0) * 0.32),
      ));
    const Tt = rt
      ? Math.min(1, rt.align * (0.4 + rt.bright * 0.25)) * (Z.room ?? 1)
      : 0;
    ut.material.opacity = 0.85 * Tt;
  }
  return {
    root: e,
    kind: "student",
    anchors: n,
    slideAnchor: ct,
    stageY: o,
    update: bt,
    nose: ot,
    eyes: vt,
    clips: f,
    objectiveTip: () => {
      const Z = new ht(
        0,
        F.position.y - _s - ot.objs[0].children[0].userData.length,
        0,
      );
      return e.localToWorld(Z);
    },
  };
}
const Li = Math.PI / 180,
  o0 = 2,
  jo = 4.95,
  Ho = 13,
  Hs = 26.1,
  kl = 8.5,
  Wa = 15 * Li,
  Fa = 0.35,
  Gs = 0.1,
  On = '"Cormorant Garamond", Georgia, serif',
  ze = '"IBM Plex Mono", ui-monospace, monospace',
  Si = (t, e) =>
    Object.assign(document.createElement("canvas"), {
      width: t,
      height: e,
    });
function Go(t, e, o) {
  let n =
    (Math.imul(t | 0, 374761393) +
      Math.imul(e | 0, 668265263) +
      Math.imul(o | 0, 1442695041)) |
    0;
  return (
    (n = Math.imul(n ^ (n >>> 13), 1274126177)),
    (n ^= n >>> 16),
    (n >>> 0) / 4294967296
  );
}
function Pl(t, e, o) {
  const n = Math.floor(t),
    s = Math.floor(e),
    a = t - n,
    r = e - s,
    i = a * a * (3 - 2 * a),
    c = r * r * (3 - 2 * r),
    d = Go(n, s, o),
    h = Go(n + 1, s, o),
    u = Go(n, s + 1, o),
    l = Go(n + 1, s + 1, o);
  return d + (h - d) * i + (u - d) * c + (d - h - u + l) * i * c;
}
function cs(t, e, o, n, s) {
  const a = Si(t, t),
    r = a.getContext("2d"),
    i = r.createImageData(t, t);
  for (let d = 0; d < t * t; d++) {
    const h = Math.max(
      0,
      Math.min(
        255,
        e +
          (Go(d, 7, s) - 0.5) * o +
          (Pl((d % t) / 9, Math.floor(d / t) / 9, s) - 0.5) * o * 0.8,
      ),
    );
    ((i.data[d * 4] = i.data[d * 4 + 1] = i.data[d * 4 + 2] = h),
      (i.data[d * 4 + 3] = 255));
  }
  r.putImageData(i, 0, 0);
  const c = new A0(a);
  return ((c.wrapS = c.wrapT = xa), c.repeat.set(n, n), c);
}
function ae(t, e, o) {
  const n = Si(t, e),
    s = n.getContext("2d");
  o(s, t, e);
  const a = new A0(n);
  return ((a.colorSpace = wo), (a.anisotropy = 8), a);
}
let bn = null;
function ga() {
  return (
    bn ||
    ((bn = {
      paint: new Dt({
        color: 15328731,
        roughness: 0.55,
        roughnessMap: cs(256, 205, 40, 0.6, 1),
        clearcoat: 0.55,
        clearcoatRoughness: 0.24,
        sheen: 0.2,
        sheenRoughness: 0.8,
        sheenColor: 16777215,
      }),
      blackPaint: new Dt({
        color: 1447706,
        roughness: 0.5,
        metalness: 0.1,
        clearcoat: 0.35,
        clearcoatRoughness: 0.3,
      }),
      anod: new Dt({
        color: 1118741,
        roughness: 0.42,
        metalness: 0.65,
        roughnessMap: cs(128, 210, 50, 2, 2),
      }),
      rubber: new mt({
        color: 986896,
        roughness: 0.9,
        metalness: 0,
      }),
      chrome: new mt({
        color: 15921906,
        roughness: 0.09,
        metalness: 1,
      }),
      satin: new mt({
        color: 14080219,
        roughness: 0.27,
        metalness: 1,
        roughnessMap: cs(128, 220, 30, 3, 3),
      }),
      lens: new Dt({
        color: 724499,
        roughness: 0.03,
        metalness: 0,
        clearcoat: 1,
        clearcoatRoughness: 0.02,
        iridescence: 1,
        iridescenceIOR: 1.7,
        iridescenceThicknessRange: [180, 460],
      }),
      blueGlass: new Dt({
        color: 6131682,
        roughness: 0.05,
        transmission: 0.85,
        thickness: 0.2,
        ior: 1.5,
      }),
      led: new mt({
        color: 662026,
        emissive: 3735402,
        emissiveIntensity: 3,
      }),
    }),
    bn)
  );
}
function g0(t, e, o = 72) {
  const n = t.map((s) => new Z0(s[0], s[1]));
  return (n[0].y > n[n.length - 1].y && n.reverse(), new _(new Mi(n, o), e));
}
function Xo(t, e, o, n) {
  const s = new Ct(t, t, e, o * 6, 1, !1),
    a = s.attributes.position;
  for (let r = 0; r < a.count; r++) {
    const i = a.getX(r),
      c = a.getZ(r);
    if (Math.hypot(i, c) < 1e-5) continue;
    const d = 1 - n * Math.pow(0.5 + 0.5 * Math.cos(o * Math.atan2(c, i)), 4);
    (a.setX(r, i * d), a.setZ(r, c * d));
  }
  return (s.computeVertexNormals(), s);
}
function Ro(t, e, o, n, s) {
  const a = new Q();
  if (
    (a.add(
      g0(
        [
          [0, -e / 2 - 0.02],
          [t * 0.8, -e / 2],
          [t * 0.93, -e / 2 + e * 0.08],
          [t * 0.95, -e * 0.3],
          [t * 0.95, e * 0.3],
          [t * 0.93, e / 2 - e * 0.08],
          [t * 0.8, e / 2],
          [t * 0.3, e / 2 + 0.03],
          [0, e / 2 + 0.04],
        ],
        n,
        64,
      ),
    ),
    a.add(new _(Xo(t, e * 0.62, o, 0.07), n)),
    s)
  ) {
    const i = new _(new Ct(t * 0.36, t * 0.38, 0.05, 48), s);
    ((i.position.y = e / 2 + 0.04), a.add(i));
  }
  const r = new _(
    new Pe(t * 0.08, 0.02, t * 0.5),
    new mt({
      color: 15262938,
      roughness: 0.5,
    }),
  );
  return (r.position.set(0, e / 2 + 0.035, t * 0.55), a.add(r), a);
}
function ls(t, e, o, n, s, a = []) {
  const r = new co();
  (r.moveTo(t + s, e),
    r.lineTo(o - s, e),
    r.absarc(o - s, e + s, s, -Math.PI / 2, 0, !1),
    r.lineTo(o, n - s),
    r.absarc(o - s, n - s, s, 0, Math.PI / 2, !1),
    r.lineTo(t + s, n),
    r.absarc(t + s, n - s, s, Math.PI / 2, Math.PI, !1),
    r.lineTo(t, e + s),
    r.absarc(t + s, e + s, s, Math.PI, Math.PI * 1.5, !1));
  for (const [i, c, d] of a) {
    const h = new Ys();
    (h.absarc(i, c, d, 0, Math.PI * 2, !0), r.holes.push(h));
  }
  return r;
}
const m0 = (t, e, o, n, s, a = 4) => new _(new we(t, e, o, a, n), s),
  i0 = (t, e, o, n, s = 48) => new _(new Ct(t, e, o, s), n);
function to(t, e, o) {
  return new _(
    new Te(e, o),
    new mt({
      map: t,
      transparent: !0,
      roughness: 0.5,
      metalness: 0,
      depthWrite: !1,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
    }),
  );
}
const Zt = (t, e, o = null, n = {}) => (
    (t.userData.part = e),
    o && (t.userData.drag = o),
    Object.assign(t.userData, n),
    t
  ),
  $l = [
    {
      tip: 0.8,
      lens: 0.55,
      sleeve: "PLAN 4× / 0.10    ∞ / –    F.N.22",
    },
    {
      tip: 0.62,
      lens: 0.36,
      sleeve: "PLAN 10× / 0.25    ∞ / –    F.N.22",
    },
    {
      tip: 0.44,
      lens: 0.2,
      sleeve: "PLAN 40× / 0.65    ∞ / 0.17    F.N.22",
    },
    {
      tip: 0.4,
      lens: 0.15,
      sleeve: "PLAN 100× / 1.25  OIL    ∞ / 0.17",
    },
  ];
function Tl(t, e) {
  const o = ga(),
    n = $l[e],
    s = Hs - (kl - 0.4) - (Ho + Gs + 0.017 + t.wd / 10),
    a = new Q(),
    r = [[0.7, -0.4]];
  for (let y = 0; y <= 12; y++)
    r.push([y % 2 ? 0.955 : 1, -0.4 + y * (0.4 / 12)]);
  (r.push([0.7, 0]), a.add(g0(r, o.satin, 48)));
  const i = 0.66 + (s - 0.66) * 0.52,
    c = t.mag >= 40,
    d = [
      [n.lens * 0.98, -s + 0.07],
      [n.lens + 0.05, -s + 0.01],
      [n.tip - 0.05, -s],
      [n.tip, -s + 0.06],
      [n.tip, -s + (c ? 1.25 : 0.45)],
    ];
  if (
    (c &&
      d.push(
        [n.tip + 0.14, -s + 1.32],
        [n.tip + 0.2, -s + 1.5],
        [0.95, -i - 0.55],
      ),
    d.push(
      [1.18, -i - 0.1],
      [1.24, -i],
      [1.24, -0.66],
      [1.32, -0.62],
      [1.32, -0.46],
      [1.28, -0.4],
      [0.96, -0.4],
    ),
    a.add(g0(d, o.chrome, 72)),
    c)
  ) {
    const y = i0(n.tip + 0.015, n.tip + 0.015, 0.04, o.blackPaint, 48);
    ((y.position.y = -s + 1.27), a.add(y));
  }
  const h = new _(
    new Ct(1.25, 1.25, 0.17, 72),
    new Dt({
      color: t.ring,
      roughness: 0.35,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
    }),
  );
  if (((h.position.y = -i + 0.22), a.add(h), t.oil)) {
    const y = i0(n.tip + 0.012, n.tip + 0.012, 0.12, o.blackPaint, 48);
    ((y.position.y = -s + 0.75), a.add(y));
  }
  const u = ae(1024, 128, (y, b) => {
      ((y.fillStyle = "rgba(28,28,30,.95)"), (y.textBaseline = "middle"));
      for (const m of [0, b / 2])
        ((y.font = `600 44px ${On}`),
          y.fillText("MICROLAB", m + 30, 38),
          (y.font = `500 30px ${ze}`),
          y.fillText(n.sleeve, m + 30, 92));
    }),
    l = new _(
      new Ct(1.243, 1.243, 0.8, 96, 1, !0),
      new mt({
        map: u,
        transparent: !0,
        roughness: 0.4,
        metalness: 0,
        depthWrite: !1,
      }),
    );
  ((l.position.y = -0.66 - 0.48), (l.rotation.y = Math.PI * 0.5), a.add(l));
  const f = i0(n.lens * 0.98, n.lens * 0.98, 0.02, o.lens, 48);
  return ((f.position.y = -s + 0.06), a.add(f), a);
}
function Il(t) {
  const e = ga(),
    o = new Q(),
    n = t.mag >= 16 ? -0.35 : t.mag <= 5 ? 0.35 : 0;
  o.add(
    g0(
      [
        [1.06, 3.9],
        [1.12, 4.6 + n],
        [1.18, 5.55 + n],
        [1.46, 5.85 + n],
        [1.49, 6.4 + n],
        [1.42, 6.5 + n],
        [0, 6.5 + n],
      ],
      e.anod,
    ),
  );
  const s = `WF${t.mag}× / ${t.fn}`,
    a = ae(1024, 96, (c, d, h) => {
      ((c.fillStyle = "rgba(236,232,222,.92)"),
        (c.font = `500 46px ${ze}`),
        (c.textBaseline = "middle"),
        c.fillText(s, 120, h / 2),
        c.fillText(s, 120 + d / 2, h / 2));
    }),
    r = new _(
      new Ct(1.495, 1.495, 0.34, 96, 1, !0),
      new mt({
        map: a,
        transparent: !0,
        roughness: 0.5,
        depthWrite: !1,
      }),
    );
  ((r.position.y = 6.1 + n),
    (r.rotation.y = -Math.PI / 2),
    o.add(r),
    o.add(
      g0(
        [
          [0, 6.45 + n],
          [1.43, 6.45 + n],
          [1.52, 6.7 + n],
          [1.63, 7.3 + n],
          [1.6, 7.47 + n],
          [1.42, 7.47 + n],
          [1.3, 7 + n],
          [1, 6.9 + n],
          [0, 6.9 + n],
        ],
        e.rubber,
      ),
    ));
  const i = i0(0.96, 0.96, 0.02, e.lens, 48);
  return ((i.position.y = 6.92 + n), o.add(i), o);
}
function Ll() {
  const t = ga(),
    e = new Q();
  e.name = "research";
  const o = new Q();
  (o.scale.setScalar(0.01), o.position.set(0, Fa * 0.01, -o0 * 0.01), e.add(o));
  const n = {},
    s = (Y, X, at, Pt, pt) => {
      const zt = new xi();
      (zt.position.set(at, Pt, pt), X.add(zt), (n[Y] = zt));
    },
    a = new _(
      new lo(ls(-9.9, -9.4, 9.9, 12.4, 2.9), {
        depth: 0.4,
        bevelEnabled: !0,
        bevelThickness: 0.06,
        bevelSize: 0.06,
        bevelSegments: 2,
        curveSegments: 32,
      }),
      t.blackPaint,
    );
  (a.geometry.rotateX(-Math.PI / 2),
    a.geometry.translate(0, 0.02, 0),
    o.add(a));
  const r = new _(
    new lo(ls(-9.5, -9, 9.5, 12, 2.6), {
      depth: 3,
      bevelEnabled: !0,
      bevelThickness: 0.8,
      bevelSize: 0.8,
      bevelSegments: 10,
      curveSegments: 40,
    }),
    t.paint,
  );
  (r.geometry.rotateX(-Math.PI / 2),
    r.geometry.translate(0, 1.15, 0),
    o.add(Zt(r, "base")),
    s("base", o, 6, 2.6, 9));
  for (const [Y, X] of [
    [-7.6, -9.6],
    [7.6, -9.6],
    [-7.6, 7.2],
    [7.6, 7.2],
  ]) {
    const at = i0(0.95, 1.05, 0.35, t.rubber, 32);
    (at.position.set(Y, -0.175, X), o.add(at));
  }
  const i = g0(
    [
      [1.15, 0],
      [2.1, 0],
      [2.15, 0.1],
      [2, 0.26],
      [1.4, 0.28],
      [1.3, 0.16],
      [1.15, 0.14],
    ],
    t.satin,
  );
  (i.position.set(0, jo - 0.02, o0), o.add(i));
  const c = new mt({
      color: 2236962,
      emissive: 16773598,
      emissiveIntensity: 2,
      roughness: 0.2,
    }),
    d = i0(1.3, 1.3, 0.08, c, 48);
  (d.position.set(0, jo + 0.14, o0), o.add(Zt(d, "lamp", "lamp")));
  const h = g0(
    [
      [1.38, 0],
      [1.62, 0],
      [1.62, 0.42],
      [1.38, 0.42],
    ],
    t.anod,
  );
  (h.position.set(0, jo + 0.02, o0),
    o.add(h),
    s("lamp", o, 0, jo + 0.3, o0 + 1));
  const u = to(
    ae(1024, 96, (Y, X, at) => {
      ((Y.fillStyle = "rgba(60,58,54,.9)"),
        (Y.font = `600 54px ${On}`),
        (Y.textBaseline = "middle"),
        Y.fillText("M I C R O L A B", 20, at / 2),
        (Y.font = `400 30px ${ze}`),
        (Y.textAlign = "right"),
        (Y.fillStyle = "rgba(90,86,80,.9)"),
        Y.fillText("LED  ·  KÖHLER  ·  CX-26", X - 20, at / 2));
    }),
    12,
    1.125,
  );
  (u.position.set(-0.6, 2.75, 12.82 - 3 + 0.01), o.add(u));
  const l = new _(new en(0.13, 16, 12), t.led.clone());
  (l.position.set(7.6, 2.75, 9.83), o.add(l));
  const f = new Q();
  (f.position.set(10.55, 2.75, 4), (f.rotation.z = -Math.PI / 2));
  const y = new Q();
  (y.add(Ro(1.45, 0.62, 42, t.anod, t.satin)),
    f.add(y),
    o.add(Zt(f, "brightness", "lamp")));
  const b = to(
    ae(256, 256, (Y, X, at) => {
      (Y.translate(X / 2, at / 2),
        (Y.strokeStyle = "rgba(70,66,60,.95)"),
        (Y.lineWidth = 3));
      for (let Pt = 0; Pt <= 10; Pt++) {
        const pt = -2.3 + (Pt / 10) * 4.6;
        (Y.beginPath(),
          Y.moveTo(Math.sin(pt) * 96, -Math.cos(pt) * 96),
          Y.lineTo(
            Math.sin(pt) * (Pt % 5 ? 108 : 118),
            -Math.cos(pt) * (Pt % 5 ? 108 : 118),
          ),
          Y.stroke());
      }
    }),
    4.4,
    4.4,
  );
  (b.position.set(10.31, 2.75, 4),
    (b.rotation.y = Math.PI / 2),
    o.add(b),
    s("brightness", o, 11.1, 2.75, 4));
  const m = new Q();
  (m.position.set(10.32, 2.75, -8.4),
    m.add(m0(0.3, 1.4, 1, 0.1, t.blackPaint)));
  const x = new Q(),
    k = m0(0.36, 1.1, 0.7, 0.12, t.blackPaint);
  ((k.position.x = 0.1), x.add(k), m.add(x), o.add(Zt(m, "lamp", "lamp")));
  const M = new Ca([
    new ht(3, 1.6, -12.4),
    new ht(3.2, 1.3, -14.5),
    new ht(5, 0, -19),
    new ht(9, -0.1, -26),
    new ht(16, -0.1, -34),
  ]);
  o.add(new _(new Da(M, 120, 0.3, 14), t.rubber));
  const g = new co();
  (g.moveTo(-10.5, 4.3),
    g.lineTo(-3, 4.3),
    g.lineTo(-3, 17.3),
    g.quadraticCurveTo(-3, 20.6, 0.2, 20.6),
    g.lineTo(5, 20.6),
    g.quadraticCurveTo(5.8, 20.6, 5.8, 21.4),
    g.lineTo(5.8, 24.7),
    g.quadraticCurveTo(5.8, 25.5, 5, 25.5),
    g.lineTo(-6, 25.5),
    g.bezierCurveTo(-9.6, 25.5, -10.9, 22.2, -10.9, 18.2),
    g.lineTo(-10.7, 8),
    g.quadraticCurveTo(-10.6, 5.6, -10.5, 4.3));
  const w = new lo(g, {
    depth: 5.6,
    bevelEnabled: !0,
    bevelThickness: 0.45,
    bevelSize: 0.45,
    bevelSegments: 8,
    curveSegments: 48,
  });
  (w.rotateY(-Math.PI / 2),
    w.translate(2.8, 0, 0),
    o.add(Zt(new _(w, t.paint), "arm")),
    s("arm", o, 3.4, 15, -8));
  const $ = ae(1024, 192, (Y) => {
    ((Y.fillStyle = "rgba(52,50,47,.92)"),
      (Y.font = `600 104px ${On}`),
      (Y.textBaseline = "middle"),
      Y.fillText("MICROLAB", 10, 80),
      (Y.font = `400 34px ${ze}`),
      (Y.fillStyle = "rgba(120,96,50,.95)"),
      Y.fillText("CX-26  ·  INFINITY CORRECTED", 14, 160));
  });
  for (const Y of [1, -1]) {
    const X = to($, 6, 1.125);
    (X.position.set(3.262 * Y, 15, -6.8),
      (X.rotation.y = (Y * Math.PI) / 2),
      o.add(X));
  }
  const L = [],
    j = [];
  for (const Y of [1, -1]) {
    const X = i0(1, 1, 0.45, t.satin);
    ((X.rotation.z = Math.PI / 2), X.position.set(Y * 3.45, 8, -6.8), o.add(X));
    const at = new Q();
    (at.position.set(Y * 4.25, 8, -6.8), (at.rotation.z = (-Y * Math.PI) / 2));
    const Pt = new Q();
    (Pt.add(Ro(2.15, 1.3, 36, t.anod, null)),
      at.add(Pt),
      o.add(Zt(at, "coarse", "coarse")),
      L.push({
        spin: Pt,
        sx: Y,
      }));
    const pt = new Q();
    (pt.position.set(Y * 5.5, 8, -6.8), (pt.rotation.z = (-Y * Math.PI) / 2));
    const zt = new Q();
    zt.add(Ro(1.2, 1.1, 30, t.anod, t.satin));
    const se = ae(1024, 64, (Kt, Qe) => {
        Kt.fillStyle = "rgba(235,232,225,.9)";
        for (let G0 = 0; G0 < 100; G0++) {
          const fn = (G0 / 100) * Qe;
          (Kt.fillRect(fn, 0, 2, G0 % 10 ? 18 : 34),
            G0 % 10 === 0 &&
              ((Kt.font = `22px ${ze}`),
              Kt.fillText(String(G0 / 10), fn + 4, 56)));
        }
      }),
      Ae = new _(
        new Ct(1.205, 1.205, 0.2, 96, 1, !0),
        new mt({
          map: se,
          transparent: !0,
          roughness: 0.5,
          depthWrite: !1,
        }),
      );
    ((Ae.position.y = -0.45),
      zt.add(Ae),
      pt.add(zt),
      o.add(Zt(pt, "fine", "fine")),
      j.push({
        spin: zt,
        sx: Y,
      }));
  }
  (s("coarse", o, 5.3, 8 + 2.2, -6.8), s("fine", o, 6.2, 8, -6.8));
  const T = new Q();
  (T.position.set(0, Ho, 0), o.add(T));
  const S = new lo(ls(-8, -9.3, 8, 2.35, 0.7, [[0, -o0, 1.2]]), {
    depth: 0.62,
    bevelEnabled: !0,
    bevelThickness: 0.08,
    bevelSize: 0.08,
    bevelSegments: 3,
    curveSegments: 40,
  });
  (S.rotateX(-Math.PI / 2),
    S.translate(0, -0.7, 0),
    T.add(Zt(new _(S, t.anod), "stage")),
    s("stage", T, -6.5, 0.2, 6));
  const R = m0(5, 3, 1.3, 0.15, t.blackPaint);
  (R.position.set(0, -1.9, -2), T.add(R));
  const C = ae(1024, 64, (Y, X) => {
      Y.fillStyle = "rgba(232,228,218,.85)";
      for (let at = 0; at <= 120; at++) {
        const Pt = 8 + (at / 120) * (X - 16);
        (Y.fillRect(Pt, 0, 2, at % 10 ? 14 : 28),
          at % 10 === 0 &&
            ((Y.font = `20px ${ze}`),
            Y.fillText(String(at / 2 + 20), Pt + 3, 52)));
      }
    }),
    A = to(C, 11, 0.7);
  ((A.rotation.x = -Math.PI / 2), A.position.set(-0.5, 0.004, 8.7), T.add(A));
  const D = i0(0.14, 0.14, 10.6, t.chrome, 24);
  ((D.rotation.x = Math.PI / 2), D.position.set(-7.35, 0.26, 3.5), T.add(D));
  for (const Y of [-1.7, 8.7]) {
    const X = m0(0.6, 0.5, 0.5, 0.1, t.blackPaint);
    (X.position.set(-7.35, 0.2, Y), T.add(X));
  }
  const W = new Q();
  T.add(W);
  const O = m0(14.2, 0.28, 0.9, 0.1, t.anod);
  (O.position.set(0.1, 0.14, o0 + 1.75), W.add(O));
  const N = m0(1, 0.62, 1.3, 0.14, t.blackPaint);
  (N.position.set(-7.35, 0.3, o0 + 1.75), W.add(N));
  const V = new Q();
  T.add(V);
  const st = m0(9.2, 0.32, 0.56, 0.1, t.anod);
  (st.position.set(0.4, 0.16, -1.56), V.add(st));
  const ft = m0(0.42, 0.3, 1.5, 0.08, t.anod);
  (ft.position.set(3.97, 0.15, -0.8), V.add(ft));
  const F = i0(0.32, 0.32, 0.38, t.blackPaint, 32);
  (F.position.set(-5, 0.32, -1.56), V.add(F));
  const H = new Ca([
    new ht(-5, 0.44, -1.56),
    new ht(-5.75, 0.44, -0.9),
    new ht(-5.4, 0.36, 0.15),
    new ht(-4, 0.16, 0.05),
  ]);
  V.add(new _(new Da(H, 48, 0.075, 12), t.chrome));
  const K = new Q();
  (K.scale.setScalar(100), K.position.set(0, Gs, o0), T.add(K));
  const J = new Q();
  (J.position.set(0, 0, o0),
    T.add(J),
    J.add(
      Zt(
        g0(
          [
            [1, -3.3],
            [1.75, -3.3],
            [1.8, -3.2],
            [1.8, -1.95],
            [1.95, -1.9],
            [1.95, -1.3],
            [1.6, -1.26],
            [1.45, -0.95],
            [0.86, -0.8],
            [0.72, -0.78],
          ],
          t.anod,
        ),
        "condenser",
      ),
    ));
  const ot = new mt({
      color: 1118481,
      emissive: 16774374,
      emissiveIntensity: 1,
      roughness: 0.1,
    }),
    dt = i0(0.74, 0.74, 0.03, ot, 48);
  ((dt.position.y = -0.79), J.add(dt));
  const xt = new _(Xo(2, 0.34, 48, 0.04), t.satin);
  ((xt.position.y = -1.62), J.add(xt));
  const vt = new Q();
  vt.position.y = -1.62;
  const ut = i0(0.07, 0.07, 1.5, t.chrome, 16);
  ((ut.rotation.x = Math.PI / 2), (ut.position.z = 2.7), vt.add(ut));
  const ct = new _(new en(0.24, 24, 16), t.blackPaint);
  ((ct.position.z = 3.5),
    vt.add(ct),
    J.add(Zt(vt, "iris", "iris")),
    s("iris", vt, 0, 0, 3.5));
  const bt = new Q();
  ((bt.position.y = -2.55),
    bt.add(new _(Xo(2.35, 0.5, 60, 0.03), t.anod)),
    ["BF", "DF", "PH"].forEach((Y, X) => {
      const at = to(
          ae(128, 64, (pt, zt, se) => {
            ((pt.fillStyle = "rgba(236,232,222,.95)"),
              (pt.font = `600 40px ${ze}`),
              (pt.textAlign = "center"),
              (pt.textBaseline = "middle"),
              pt.fillText(Y, zt / 2, se / 2));
          }),
          1,
          0.5,
        ),
        Pt = (X * 2 * Math.PI) / 3;
      (at.position.set(Math.sin(Pt) * 2.37, 0, Math.cos(Pt) * 2.37),
        (at.rotation.y = Pt),
        bt.add(at));
    }),
    J.add(Zt(bt, "condenser", "turret")),
    s("condenser", J, 2.4, -2.3, 0));
  const Z = g0(
    [
      [1.55, -3.75],
      [1.9, -3.75],
      [1.9, -3.45],
      [1.55, -3.45],
    ],
    t.satin,
  );
  J.add(Z);
  const rt = i0(1.55, 1.55, 0.06, t.blueGlass, 48);
  ((rt.position.y = -3.6), J.add(rt));
  const $t = m0(2.4, 0.7, 3.4, 0.14, t.blackPaint);
  ($t.position.set(0, -2.6, -2.4), J.add($t));
  const Tt = new Q();
  (Tt.position.set(6.2, 0, 7), T.add(Tt));
  const Ft = m0(1.6, 0.9, 2.8, 0.14, t.blackPaint);
  (Ft.position.set(0, -0.7, -0.4), Tt.add(Ft));
  const Ot = i0(0.17, 0.17, 4.6, t.satin, 20);
  ((Ot.position.y = -3.3), Tt.add(Ot));
  const U0 = new Q();
  ((U0.position.y = -3),
    U0.add(Ro(1.15, 1, 30, t.rubber, null)),
    Tt.add(Zt(U0, "stageKnob", "stageY")));
  const oe = new Q();
  ((oe.position.y = -4.5),
    oe.add(Ro(0.88, 1.1, 26, t.rubber, t.satin)),
    (oe.rotation.x = Math.PI),
    Tt.add(Zt(oe, "stageKnob", "stageX")),
    s("stageKnob", Tt, 1.3, -3.6, 0));
  const b0 = new Q();
  (b0.position.set(0, Hs, o0), (b0.rotation.x = Wa), o.add(b0));
  const be = i0(2.05, 2.05, 1.4, t.blackPaint, 64);
  ((be.position.y = -5.9), b0.add(be));
  const Y0 = new Q();
  b0.add(Y0);
  const _0 = new Q();
  (Y0.add(_0),
    _0.add(
      g0(
        [
          [0, -8.15],
          [2.95, -8.15],
          [3.38, -8.05],
          [3.56, -7.85],
          [3.56, -7.2],
          [3.4, -7.1],
          [2.9, -6.85],
          [2.15, -6.62],
          [2.05, -6.58],
          [0, -6.58],
        ],
        t.satin,
        96,
      ),
    ));
  const Se = new _(Xo(3.63, 0.46, 72, 0.03), t.satin);
  ((Se.position.y = -7.5), _0.add(Se), Zt(_0, "nosepiece", "nose"));
  const Gt = d0.map((Y, X) => {
    const at = new Q();
    at.rotation.y = (X * Math.PI) / 2;
    const Pt = new Q();
    Pt.rotation.x = -Wa;
    const pt = new Q();
    pt.position.y = -8.1;
    const zt = Tl(Y, X);
    return (
      pt.add(zt),
      Pt.add(pt),
      at.add(Pt),
      Y0.add(at),
      Zt(pt, "objective", "objective", {
        obj: X,
      }),
      pt
    );
  });
  (s("nosepiece", o, 3.7, Hs - 7.4, o0 + 0.6),
    s("objective", o, 1.3, Ho + 2.6, o0 + 0.4));
  const Xt = new Q();
  o.add(Zt(Xt, "head"));
  const H0 = g0(
    [
      [3.05, 25.8],
      [3.2, 25.95],
      [3.2, 26.5],
      [2.9, 26.6],
      [0, 26.6],
    ],
    t.blackPaint,
  );
  (H0.position.set(0, 0, o0), Xt.add(H0));
  const Ke = m0(7.4, 3.4, 8.6, 0.9, t.paint, 6);
  (Ke.position.set(0, 28.25, 1.3), Xt.add(Ke));
  const je = g0(
    [
      [1.7, 29.7],
      [1.7, 30.55],
      [1.55, 30.7],
      [0, 30.72],
    ],
    t.blackPaint,
  );
  (je.position.set(0, 0, -0.6), Xt.add(je));
  const Vt = new Q();
  (Vt.position.set(0, 29.3, 4.2), (Vt.rotation.x = 30 * Li), Xt.add(Vt));
  const Ze = m0(10.8, 2.6, 3.9, 0.7, t.paint, 6);
  ((Ze.position.y = 0.6), Vt.add(Ze));
  const ne = to(
    ae(1024, 128, (Y, X, at) => {
      ((Y.fillStyle = "rgba(56,54,50,.9)"),
        (Y.font = `600 70px ${On}`),
        (Y.textAlign = "center"),
        (Y.textBaseline = "middle"),
        Y.fillText("M I C R O L A B", X / 2, at / 2));
    }),
    5.2,
    0.65,
  );
  (ne.position.set(0, 0.55, 1.96), Vt.add(ne));
  const Io = m0(5.6, 0.8, 2.4, 0.3, t.blackPaint);
  ((Io.position.y = 2), Vt.add(Io));
  const Lo = [],
    Nt = [];
  for (const Y of [-1, 1]) {
    const X = new Q();
    if (
      (X.position.set(Y * 3.2, 1.9, 0),
      X.add(
        g0(
          [
            [1, 0],
            [1.26, 0],
            [1.26, 3.55],
            [1.34, 3.65],
            [1.34, 3.95],
            [1.1, 4],
            [0, 4],
          ],
          t.blackPaint,
        ),
      ),
      Y < 0)
    ) {
      const Pt = new _(Xo(1.42, 0.42, 40, 0.05), t.anod);
      ((Pt.position.y = 3.6), X.add(Pt));
    }
    const at = new Q();
    (X.add(at),
      Lo.push(at),
      Nt.push(
        He.map((Pt) => {
          const pt = Il(Pt);
          return (
            (pt.visible = !1),
            at.add(Zt(pt, "eyepiece", "eyepiece")),
            pt
          );
        }),
      ),
      Vt.add(X));
  }
  (s("head", o, 4.2, 28.3, 2), s("eyepiece", Lo[1], 1.6, 6.4, 0));
  const Re = new _(
    new Ct(1.2, 1.3, 1, 32, 1, !0),
    new Jo({
      color: "#fff6e6",
      transparent: !0,
      opacity: 0.08,
      depthWrite: !1,
      blending: Ba,
      toneMapped: !1,
    }),
  );
  ((Re.position.z = o0),
    o.add(Re),
    e.traverse((Y) => {
      if (!Y.isMesh) return;
      const X = Y.material,
        at = X.transparent || X.transmission > 0 || X.blending === Ba;
      ((Y.castShadow = !at), (Y.receiveShadow = !X.transparent));
    }));
  const ss = (Fa + Ho + Gs) * 0.01;
  let me = 0;
  function as(Y) {
    const X = Ho - (Y.b - Yt) / 10;
    ((T.position.y = X), (Y0.rotation.y = -(Y.nose * Math.PI) / 2));
    for (const Kt of L) Kt.spin.rotation.y = Kt.sx * Y.coarseA;
    for (const Kt of j) Kt.spin.rotation.y = Kt.sx * Y.fineA;
    (Nt.forEach((Kt) => Kt.forEach((Qe, G0) => (Qe.visible = G0 === Y.eye))),
      Lo.forEach((Kt) => (Kt.rotation.y = Y.eyeRot)),
      (y.rotation.y = -Y.lamp * 4),
      (x.rotation.z = Y.lamp > 0.02 ? -0.18 : 0.18));
    const at = Y.lamp;
    ((c.emissiveIntensity = 0.05 + 3.2 * at),
      (ot.emissiveIntensity = 0.05 + 1.6 * at),
      (l.material.emissiveIntensity = at > 0.02 ? 3 : 0.05),
      (vt.rotation.y = (Y.iris - 0.5) * 1.6));
    const Pt =
      {
        bf: 0,
        df: 1,
        ph: 2,
      }[Y.cond] *
      ((2 * Math.PI) / 3);
    ((me += (-Pt - me) * 0.2), (bt.rotation.y = me));
    const pt = Y.slide?.x ?? 0,
      zt = Y.slide?.y ?? 0;
    (V.position.set(-pt / 1e4, 0, o0 - zt / 1e4),
      (W.position.z = -zt / 1e4),
      (U0.rotation.y = zt / 3e3),
      (oe.rotation.y = pt / 3e3));
    const se = X - 3.8,
      Ae = jo + 0.2;
    ((Re.scale.y = Math.max(0.001, se - Ae)),
      (Re.position.y = (se + Ae) / 2),
      (Re.material.opacity = 0.02 + 0.12 * at));
  }
  function So(Y) {
    for (const X of Gt) X.children[0].position.y = -Y * 3;
    for (const X of Nt) for (const at of X) at.position.y = Y * 4;
  }
  return {
    root: e,
    kind: "research",
    anchors: n,
    slideAnchor: K,
    stageY: ss,
    update: as,
    explode: So,
    nose: {
      objs: Gt,
    },
    eyes: Nt[0],
    clips: [],
  };
}
const hs = (t, e, o = null, n = {}) => (
  (t.userData.part = e),
  o && (t.userData.drag = o),
  Object.assign(t.userData, n),
  t.traverse((s) => {
    s.isMesh && ((s.castShadow = !0), (s.receiveShadow = !0));
  }),
  t
);
function Xs(
  t,
  {
    bg: e = "#f3efe4",
    fg: o = "#222",
    w: n = 256,
    h: s = 96,
    font: a = "700 34px 'PingFang SC','Noto Sans SC',sans-serif",
  } = {},
) {
  const r = document.createElement("canvas");
  ((r.width = n), (r.height = s));
  const i = r.getContext("2d");
  ((i.fillStyle = e),
    i.fillRect(0, 0, n, s),
    (i.fillStyle = o),
    (i.font = a),
    (i.textAlign = "center"),
    (i.textBaseline = "middle"),
    i.fillText(t, n / 2, s / 2, n - 16));
  const c = new A0(r);
  return ((c.colorSpace = wo), (c.anisotropy = 8), c);
}
function Ao(t, e, o = "#5a3416") {
  const n = Ve(),
    s = new Q(),
    a = new Dt({
      color: o,
      roughness: 0.06,
      transmission: 0.75,
      thickness: 0.004,
      ior: 1.5,
      transparent: !0,
      envMapIntensity: 1.3,
    }),
    r = ee(
      [
        [1e-4, 0],
        [0.016, 0],
        [0.0175, 0.002],
        [0.0175, 0.04],
        [0.016, 0.046],
        [0.008, 0.052],
        [0.008, 0.06],
        [1e-4, 0.06],
      ],
      a,
      40,
    );
  s.add(r);
  const i = ee(
    [
      [1e-4, 0.001],
      [0.0165, 0.001],
      [0.0165, 0.03],
      [1e-4, 0.03],
    ],
    new mt({
      color: t,
      roughness: 0.1,
      transparent: !0,
      opacity: 0.85,
    }),
    32,
  );
  s.add(i);
  const c = new _(
    new Ct(0.01755, 0.01755, 0.02, 40, 1, !0, -0.9, 1.8),
    new mt({
      map: Xs(e),
      roughness: 0.8,
    }),
  );
  ((c.position.y = 0.022), s.add(c));
  const d = ee(
    [
      [1e-4, 0.058],
      [0.0095, 0.058],
      [0.0095, 0.068],
      [0.0075, 0.07],
      [1e-4, 0.07],
    ],
    n.black,
    32,
  );
  s.add(d);
  const h = new _(new en(0.0075, 24, 16), n.rubber);
  return (h.scale.set(1, 1.6, 1), (h.position.y = 0.081), s.add(h), s);
}
function Sl(t, e) {
  const o = Ve(),
    n = new Q();
  t.add(n);
  const s = Xc();
  s.map.repeat.set(1.4, 1);
  const a = new _(
    new we(1.6, 0.04, 0.9, 3, 0.006),
    new mt({
      map: s.map,
      roughnessMap: s.rough,
      roughness: 0.55,
      color: "#c9a27c",
    }),
  );
  (a.position.set(0, -0.02, -0.08), (a.receiveShadow = !0), n.add(a));
  const r = new _(
    new Pe(1.56, 0.08, 0.86),
    new mt({
      color: "#26282c",
      roughness: 0.8,
    }),
  );
  (r.position.set(0, -0.08, -0.08), n.add(r));
  const i = new _(
    new we(0.42, 0.003, 0.34, 2, 0.0012),
    new mt({
      color: "#1d2a2b",
      roughness: 0.92,
    }),
  );
  (i.position.set(0, 0.0015, -0.02), (i.receiveShadow = !0), n.add(i));
  const c = new Q();
  (c.position.set(-0.34, 0, 0.06), (c.rotation.y = 0.12), n.add(c));
  const d = e.length,
    h = d > 18 ? 3 : 2,
    u = Math.ceil(d / h),
    l = u * 0.03 + 0.02,
    f = h * 0.09 + 0.02,
    y = new _(
      new we(l, 0.008, f, 2, 0.002),
      new Dt({
        color: "#e9e6de",
        roughness: 0.5,
        clearcoat: 0.3,
      }),
    );
  ((y.position.y = 0.004), c.add(y));
  for (let A = 0; A <= u; A++) {
    const D = new _(
      new Pe(0.003, 0.004, f - 0.01),
      new mt({
        color: "#d6d2c8",
        roughness: 0.6,
      }),
    );
    (D.position.set(-l / 2 + 0.01 + A * 0.03 - 0.0015, 0.01, 0), c.add(D));
  }
  const b = new Map();
  e.forEach((A, D) => {
    const W = D % u,
      N = (Math.floor(D / u) - (h - 1) / 2) * 0.09,
      V = Ii(A);
    ((V.rotation.y = Math.PI / 2),
      V.position.set(-l / 2 + 0.025 + W * 0.03 - 0.0015, 0.0095, N),
      c.add(
        hs(V, "slideBox", "slideBox", {
          spec: A.id,
        }),
      ),
      b.set(A.id, V));
  });
  const m = new _(
    new Te(0.1, 0.02),
    new mt({
      map: Xs(translate("SLIDES · 玻片标本"), {
        bg: "#1b1d21",
        fg: "#e9e5da",
        font: "600 26px 'JetBrains Mono', monospace",
        w: 512,
        h: 96,
      }),
      roughness: 0.6,
    }),
  );
  ((m.rotation.x = -Math.PI / 2),
    m.position.set(0, 0.0082, f / 2 + 1e-4),
    (m.rotation.x = 0),
    m.position.set(0, 0.004, f / 2 + 6e-4),
    c.add(m));
  const x = new Q();
  (x.position.set(0.3, 0, -0.1), n.add(x));
  const k = {},
    M = (A, D, W, O, N) => {
      (D.position.set(W, 0, O),
        x.add(
          hs(D, N, "reagent", {
            reagent: A,
          }),
        ),
        (k[A] = D));
    };
  (M("iodine", Ao("#6b3a10", translate("碘液")), 0, 0, "iodine"),
    M(
      "methylene",
      Ao("#1f4fa8", translate("亚甲蓝"), "#3b4a5c"),
      0.045,
      0.01,
      "methylene",
    ),
    M(
      "sucrose",
      Ao("#e8eef0", translate("0.3 g/mL 蔗糖"), "#c9d6dc"),
      0.09,
      0,
      "sucrose",
    ),
    M(
      "water",
      Ao("#dfeaf0", translate("清水"), "#c9d6dc"),
      0.02,
      0.06,
      "water",
    ),
    M("stainR", Ao("#7a1a5a", translate("甲紫溶液")), 0.068, 0.07, "stainR"));
  const g = new Q(),
    w = new _(
      new we(0.024, 0.04, 0.024, 2, 0.003),
      new Dt({
        color: "#c58a1c",
        roughness: 0.05,
        transmission: 0.7,
        thickness: 0.01,
        transparent: !0,
      }),
    );
  ((w.position.y = 0.02), g.add(w));
  const $ = new _(new Ct(0.007, 0.007, 0.014, 20), o.black);
  (($.position.y = 0.047), g.add($));
  const L = new _(
    new Te(0.02, 0.012),
    new mt({
      map: Xs(translate("香柏油"), {
        w: 192,
        h: 96,
      }),
    }),
  );
  (L.position.set(0, 0.022, 0.0121), g.add(L), M("oil", g, 0.12, 0.07, "oil"));
  const j = new _(
    new Pe(0.06, 0.0015, 0.045),
    new mt({
      color: "#f4f2ee",
      roughness: 0.95,
    }),
  );
  j.position.y = 75e-5;
  const T = new Q();
  T.add(j);
  for (let A = 1; A < 4; A++) {
    const D = j.clone();
    ((D.position.y = 75e-5 + A * 0.0015),
      (D.rotation.y = (A - 2) * 0.05),
      T.add(D));
  }
  M("paper", T, 0.06, 0.13, "paper");
  const S = new Q();
  (S.position.set(-0.2, 0, -0.2), n.add(S));
  const R = new _(
    new we(0.12, 0.018, 0.05, 2, 0.004),
    new mt({
      color: "#2b2d31",
      roughness: 0.7,
    }),
  );
  ((R.position.y = 0.009), S.add(R));
  const C = He.map((A, D) => {
    const W = Ti(A);
    return (
      W.position.set(-0.035 + D * 0.035, 0.018, 0),
      S.add(
        hs(W, "eyepieceBox", "eyeBox", {
          eye: D,
        }),
      ),
      W
    );
  });
  return {
    root: n,
    slides: b,
    reagents: k,
    tray: c,
    boxEyes: C,
  };
}
function k0(t, e, o = 0) {
  let n =
    (Math.imul(t | 0, 374761393) +
      Math.imul(e | 0, 668265263) +
      Math.imul(o | 0, 1442695041)) |
    0;
  return (
    (n = Math.imul(n ^ (n >>> 13), 1274126177)),
    (n ^= n >>> 16),
    n >>> 0
  );
}
function tt(t) {
  let e = t >>> 0 || 1;
  return () => {
    e = (e + 1831565813) | 0;
    let o = Math.imul(e ^ (e >>> 15), 1 | e);
    return (
      (o = (o + Math.imul(o ^ (o >>> 7), 61 | o)) ^ o),
      ((o ^ (o >>> 14)) >>> 0) / 4294967296
    );
  };
}
const jt = (t, e, o) => tt(k0(t, e, o)),
  v = (t, e, o) => e + (o - e) * t();
function Q0(t) {
  let e = 0;
  for (; e === 0;) e = t();
  return Math.sqrt(-2 * Math.log(e)) * Math.cos(2 * Math.PI * t());
}
function kt(t, e, o = 0) {
  const n = Math.floor(t),
    s = Math.floor(e),
    a = t - n,
    r = e - s,
    i = a * a * (3 - 2 * a),
    c = r * r * (3 - 2 * r),
    d = (y, b) => (k0(n + y, s + b, o) / 4294967296) * 2 - 1,
    h = d(0, 0),
    u = d(1, 0),
    l = d(0, 1),
    f = d(1, 1);
  return h + (u - h) * i + (l - h) * c + (h - u - l + f) * i * c;
}
function ue(t, e, o = 0, n = 3) {
  let s = 0,
    a = 0.5,
    r = 1;
  for (let i = 0; i < n; i++)
    ((s += a * kt(t * r, e * r, o + i * 17)), (a *= 0.5), (r *= 2.03));
  return s;
}
function Ie(t) {
  let e = 0,
    o = 0,
    n = 0;
  for (let s = 0; s < t.length; s++) {
    const [a, r] = t[s],
      [i, c] = t[(s + 1) % t.length],
      d = a * c - i * r;
    ((e += d), (o += (a + i) * d), (n += (r + c) * d));
  }
  return Math.abs(e) < 1e-9 ? t[0] : [o / (3 * e), n / (3 * e)];
}
function on(t) {
  let e = 0;
  for (let o = 0; o < t.length; o++) {
    const [n, s] = t[o],
      [a, r] = t[(o + 1) % t.length];
    e += n * r - a * s;
  }
  return Math.abs(e) / 2;
}
function Lt(t, e, o) {
  let n = !1;
  for (let s = 0, a = o.length - 1; s < o.length; a = s++) {
    const [r, i] = o[s],
      [c, d] = o[a];
    i > e != d > e && t < ((c - r) * (e - i)) / (d - i) + r && (n = !n);
  }
  return n;
}
function ji(t, e, o, n, s) {
  const a = [];
  for (let r = 0; r < t.length; r++) {
    const i = t[r],
      c = t[(r + 1) % t.length],
      d = (i[0] - e) * n + (i[1] - o) * s,
      h = (c[0] - e) * n + (c[1] - o) * s;
    if ((d <= 0 && a.push(i), d * h < 0)) {
      const u = d / (d - h);
      a.push([i[0] + (c[0] - i[0]) * u, i[1] + (c[1] - i[1]) * u]);
    }
  }
  return a;
}
function _t(t, e) {
  const o = t.length;
  if (o < 3 || e <= 0) return t;
  const n = Ie(t);
  let s = t.map((a) => a);
  for (let a = 0; a < o; a++) {
    const r = t[a],
      i = t[(a + 1) % o];
    let c = i[1] - r[1],
      d = -(i[0] - r[0]);
    const h = Math.hypot(c, d) || 1;
    if (
      ((c /= h),
      (d /= h),
      (n[0] - r[0]) * c + (n[1] - r[1]) * d > 0 && ((c = -c), (d = -d)),
      (s = ji(s, r[0] - c * e, r[1] - d * e, c, d)),
      s.length < 3)
    )
      return [n, n, n];
  }
  return s;
}
function qa(t, e, o) {
  const n = jt(t, e, o.seed),
    s = e & 1 ? o.stagger : 0;
  return [
    t + 0.5 + s + (n() - 0.5) * o.jitter,
    e + 0.5 + (n() - 0.5) * o.jitter * (o.jitterY ?? 1),
  ];
}
function p0(t, e) {
  const { sx: o, sy: n } = e,
    s = e.angle || 0,
    a = Math.cos(s),
    r = Math.sin(s),
    i = e.ox || 0,
    c = e.oy || 0,
    d = e.warp || 0,
    h = e.warpScale || 2e3,
    u = (w, $) => {
      const L = (w - i) * a + ($ - c) * r,
        j = -(w - i) * r + ($ - c) * a;
      return [L / o, (j - d * kt(L / h, 0.5, e.seed + 7)) / n];
    },
    l = (w, $) => {
      const L = w * o,
        j = $ * n + d * kt(L / h, 0.5, e.seed + 7);
      return [i + L * a - j * r, c + L * r + j * a];
    },
    f = [
      [t.x0, t.y0],
      [t.x1, t.y0],
      [t.x0, t.y1],
      [t.x1, t.y1],
    ].map(([w, $]) => u(w, $)),
    y = 2 + Math.ceil((d / n) * 1.2),
    b = Math.floor(Math.min(...f.map((w) => w[0]))) - 2,
    m = Math.ceil(Math.max(...f.map((w) => w[0]))) + 2,
    x = Math.floor(Math.min(...f.map((w) => w[1]))) - y,
    k = Math.ceil(Math.max(...f.map((w) => w[1]))) + y,
    M = [],
    g = {
      seed: e.seed,
      jitter: e.jitter ?? 0.6,
      jitterY: e.jitterY,
      stagger: e.stagger ?? 0,
    };
  for (let w = x; w <= k; w++)
    for (let $ = b; $ <= m; $++) {
      const L = qa($, w, g);
      let j = [
        [L[0] - 3, L[1] - 3],
        [L[0] + 3, L[1] - 3],
        [L[0] + 3, L[1] + 3],
        [L[0] - 3, L[1] + 3],
      ];
      for (let D = -2; D <= 2; D++)
        for (let W = -2; W <= 2; W++) {
          if (!W && !D) continue;
          const O = qa($ + W, w + D, g),
            N = O[0] - L[0],
            V = O[1] - L[1];
          j = ji(j, (L[0] + O[0]) / 2, (L[1] + O[1]) / 2, N, V);
        }
      const T = j.map(([D, W]) => l(D, W));
      let S = 1 / 0,
        R = 1 / 0,
        C = -1 / 0,
        A = -1 / 0;
      for (const [D, W] of T)
        ((S = Math.min(S, D)),
          (R = Math.min(R, W)),
          (C = Math.max(C, D)),
          (A = Math.max(A, W)));
      C < t.x0 ||
        S > t.x1 ||
        A < t.y0 ||
        R > t.y1 ||
        M.push({
          i: $,
          j: w,
          poly: T,
          c: l(L[0], L[1]),
          seed: k0($, w, e.seed + 101),
          bbox: [S, R, C, A],
        });
    }
  return M;
}
function ts(t, e, o) {
  const n = Math.max(o.sx, o.sy) * 0.01;
  return (
    p0(
      {
        x0: t - n,
        y0: e - n,
        x1: t + n,
        y1: e + n,
      },
      o,
    ).find((s) => Lt(t, e, s.poly)) || null
  );
}
function Rt(t, e, o, n, s) {
  const a = Math.floor((t.x0 - o) / e),
    r = Math.floor((t.x1 + o) / e),
    i = Math.floor((t.y0 - o) / e),
    c = Math.floor((t.y1 + o) / e);
  for (let d = i; d <= c; d++)
    for (let h = a; h <= r; h++) s(h * e, d * e, jt(h, d, n), h, d);
}
function yt(t, e = new Path2D()) {
  const o = t.length,
    n = (a, r) => [(a[0] + r[0]) / 2, (a[1] + r[1]) / 2],
    s = n(t[o - 1], t[0]);
  e.moveTo(s[0], s[1]);
  for (let a = 0; a < o; a++) {
    const r = t[a],
      i = n(r, t[(a + 1) % o]);
    e.quadraticCurveTo(r[0], r[1], i[0], i[1]);
  }
  return (e.closePath(), e);
}
function it(t, e = new Path2D()) {
  return (
    t.forEach(([o, n], s) => (s ? e.lineTo(o, n) : e.moveTo(o, n))),
    e.closePath(),
    e
  );
}
function U(t, e, o, n, s = 0, a = new Path2D()) {
  const r = s ? new Path2D() : a;
  return (
    s || r.moveTo(t + Math.max(0.001, o), e),
    r.ellipse(t, e, Math.max(0.001, o), Math.max(0.001, n), s, 0, Math.PI * 2),
    r !== a && a.addPath(r),
    a
  );
}
function Mt(
  t,
  e,
  o,
  {
    n = 24,
    amp: s = 0.15,
    seed: a = 1,
    sx: r = 1,
    sy: i = 1,
    rot: c = 0,
    freq: d = 2,
  } = {},
) {
  const h = [],
    u = Math.cos(c),
    l = Math.sin(c);
  for (let f = 0; f < n; f++) {
    const y = (f / n) * Math.PI * 2,
      b = o * (1 + s * kt(Math.cos(y) * d + 10, Math.sin(y) * d + 10, a)),
      m = Math.cos(y) * b * r,
      x = Math.sin(y) * b * i;
    h.push([t + m * u - x * l, e + m * l + x * u]);
  }
  return h;
}
function F0(t, e = new Path2D()) {
  if (t.length < 2) return e;
  e.moveTo(t[0][0], t[0][1]);
  for (let n = 1; n < t.length - 1; n++) {
    const s = [(t[n][0] + t[n + 1][0]) / 2, (t[n][1] + t[n + 1][1]) / 2];
    e.quadraticCurveTo(t[n][0], t[n][1], s[0], s[1]);
  }
  const o = t[t.length - 1];
  return (e.lineTo(o[0], o[1]), e);
}
const et = (t, e, o, n) =>
  e + n >= t.x0 && e - n <= t.x1 && o + n >= t.y0 && o - n <= t.y1;
function Ht(t, e, o, n) {
  const s = new Path2D();
  return (
    s.arc(e, o, n, 0, Math.PI * 2),
    t.radial(e, o, n, [
      [0, [1, 1, 1]],
      [0.55, [0.93, 0.94, 0.95]],
      [0.78, [0.55, 0.56, 0.58]],
      [0.9, [0.12, 0.12, 0.13]],
      [0.985, [0.2, 0.2, 0.22]],
      [1, [1, 1, 1]],
    ]),
    t.phaseRadial(e, o, n * 1.02, [
      [0, 2.2],
      [0.85, 1.4],
      [1, 0],
    ]),
    t.glare?.(e - n * 0.12, o - n * 0.12, n * 0.25),
    s
  );
}
function Wt(
  t,
  e,
  {
    seed: o = 9,
    density: n = 1,
    size: s = 3,
    color: a = [0.55, 0.5, 0.42],
    z: r = [0, 1, 2],
  } = {},
) {
  Rt(e, 400, s * 4, o, (c, d, h) => {
    const u = Math.floor(h() * 4 * n);
    for (let l = 0; l < u; l++) {
      const f = c + h() * 400,
        y = d + h() * 400,
        b = s * (0.3 + h() * h() * 2.5);
      if (!et(e, f, y, b * 2)) {
        (h(), h());
        continue;
      }
      t.layer(r[Math.floor(h() * r.length)]);
      const m = Mt(f, y, b, {
          n: 9,
          amp: 0.45,
          seed: Math.floor(h() * 1e6),
        }),
        x = 0.25 + h() * 0.5;
      t.both(
        yt(m),
        [
          a[0] * x + (1 - x) * 0.1,
          a[1] * x + (1 - x) * 0.1,
          a[2] * x + (1 - x) * 0.1,
        ],
        0.9,
      );
    }
  });
}
function Ri(t, e, o, n, { bend: s = 0.25, steps: a = 14 } = {}) {
  let r = t() * Math.PI * 2;
  const i = [[e, o]];
  for (let c = 0; c < a; c++) {
    r += (t() - 0.5) * s;
    const [d, h] = i[i.length - 1];
    i.push([d + (Math.cos(r) * n) / a, h + (Math.sin(r) * n) / a]);
  }
  return i;
}
const jl = 11e3;
function Rl(t, e) {
  const o = jl;
  if (e.x0 > -o + 200 && e.x1 < o - 200 && e.y0 > -o + 200 && e.y1 < o - 200)
    return;
  const n = new Path2D();
  (n.rect(-o, -o, 2 * o, 2 * o),
    t.layer(2),
    t.strokeBoth(n, 40, [0.6, 0.62, 0.64], 2),
    t.strokeAbs(n, 8, [0.2, 0.2, 0.22], 1));
}
function Ua(t, e, o, n = 200) {
  if (Lt(t, e, o)) return 1;
  let s = 1 / 0;
  for (let a = 0; a < o.length; a++) {
    const [r, i] = o[a],
      [c, d] = o[(a + 1) % o.length],
      h = c - r,
      u = d - i,
      l = Math.max(
        0,
        Math.min(1, ((t - r) * h + (e - i) * u) / (h * h + u * u || 1)),
      );
    s = Math.min(s, Math.hypot(t - r - h * l, e - i - u * l));
  }
  return Math.max(0, 1 - s / n);
}
const G = (t, e, o) => [
    t[0] + (e[0] - t[0]) * o,
    t[1] + (e[1] - t[1]) * o,
    t[2] + (e[2] - t[2]) * o,
  ],
  $e = (t, e) => [Math.pow(t[0], e), Math.pow(t[1], e), Math.pow(t[2], e)],
  Ya = new Map();
function pe(t, e, o) {
  let n = Ya.get(t);
  return (
    n ||
      ((n =
        typeof OffscreenCanvas < "u"
          ? new OffscreenCanvas(e, e)
          : Object.assign(document.createElement("canvas"), {
              width: e,
              height: e,
            })),
      o(n.getContext("2d"), e),
      Ya.set(t, n)),
    n
  );
}
function cn(t, e) {
  for (const o of [-t, 0, t]) for (const n of [-t, 0, t]) e(o, n);
}
function wt(
  t = 1,
  { size: e = 256, n: o = 900, r0: n = 0.6, r1: s = 2.2, dark: a = 0.55 } = {},
) {
  return pe(`grain${t}-${o}-${n}-${s}-${a}`, e, (r, i) => {
    ((r.fillStyle = "#fff"), r.fillRect(0, 0, i, i));
    const c = tt(t);
    for (let d = 0; d < o; d++) {
      const h = c() * i,
        u = c() * i,
        l = n + c() * c() * (s - n),
        f = Math.round(255 * (1 - a * (0.3 + 0.7 * c())));
      ((r.fillStyle = `rgb(${f},${f},${f})`),
        cn(i, (y, b) => {
          (r.beginPath(), r.arc(h + y, u + b, l, 0, 7), r.fill());
        }));
    }
  });
}
function Vs(
  t = 1,
  { size: e = 512, n: o = 140, w0: n = 3, w1: s = 9, dark: a = 0.18 } = {},
) {
  return pe(`fiber${t}-${o}-${a}`, e, (r, i) => {
    ((r.fillStyle = "#fff"), r.fillRect(0, 0, i, i));
    const c = tt(t);
    r.lineCap = "round";
    for (let d = 0; d < o; d++) {
      const h = Ri(c, c() * i, c() * i, i * (0.3 + c() * 0.7), {
          bend: 0.18,
        }),
        u = n + c() * (s - n),
        l = Math.round(255 * (1 - a * (0.4 + 0.6 * c())));
      cn(i, (f, y) => {
        (r.beginPath(),
          h.forEach(([b, m], x) =>
            x ? r.lineTo(b + f, m + y) : r.moveTo(b + f, m + y),
          ),
          (r.strokeStyle = `rgb(${l},${l},${l})`),
          (r.lineWidth = u),
          r.stroke(),
          (r.strokeStyle = `rgba(${l - 30},${l - 30},${l - 30},.5)`),
          (r.lineWidth = 0.8),
          r.stroke());
      });
    }
  });
}
function At() {
  const t = new Map();
  return {
    path(e, o) {
      let n = t.get(e);
      return (
        n ||
          t.set(
            e,
            (n = {
              p: new Path2D(),
              draw: o,
            }),
          ),
        n.p
      );
    },
    add(e, o, n) {
      this.path(e, o).addPath(n);
    },
    flush() {
      for (const e of t.values()) e.draw(e.p);
      t.clear();
    },
  };
}
const z0 = (t, e = 8) => Math.round(Math.max(0, Math.min(1, t)) * e) / e;
function Ai({ id: t, glyph: e, name: o, family: n, size: s }) {
  const a = Mt(0, 0, 3600, {
      n: 40,
      amp: 0.12,
      seed: e.charCodeAt(0),
      sx: 1.15,
      sy: 0.9,
      freq: 3,
    }),
    r = [
      [2900, -2300, 260],
      [-3300, 1900, 140],
      [600, 3300, 90],
    ];
  return {
    id: t,
    name: o,
    slideLabel: [translate("字母装片"), `“${e}”`],
    layers: [0, 40, 80],
    dynZ: 40,
    extent: 3600,
    start: [0, 0],
    thumb(i, c) {
      const d = c / 22e3;
      (i.save(),
        i.translate(c / 2, c / 2),
        i.scale(d, d),
        (i.fillStyle = "rgba(246,243,232,.92)"),
        i.beginPath(),
        a.forEach(([h, u], l) => (l ? i.lineTo(h, u) : i.moveTo(h, u))),
        i.fill(),
        (i.fillStyle = "#111"),
        (i.font = `700 ${s}px ${n}`),
        (i.textAlign = "center"),
        (i.textBaseline = "middle"),
        i.fillText(e, 0, 0),
        i.restore());
    },
    render(i, c) {
      const d = yt(a),
        h = Vs(3, {
          dark: 0.22,
        }),
        u = wt(5, {
          n: 500,
          dark: 0.35,
          r1: 3,
        });
      for (let y = 0; y < 3; y++)
        (i.layer(y),
          i.abs(d, [0.93, 0.92, 0.89]),
          i.pattern(d, h, 2.2, 0.9, y * 397, y * 211),
          i.phasePattern(d, h, 2.2, 0.9, y * 397, y * 211),
          i.phase(d, 0.25));
      (i.layer(1),
        i.pattern(d, u, 3, 0.7),
        i.upp < 1.6 &&
          Rt(c, 300, 400, 31, (y, b, m) => {
            for (let x = 0; x < 10; x++) {
              const k = Ri(m, y + m() * 300, b + m() * 300, 250 + m() * 500, {
                  bend: 0.2,
                  steps: 10,
                }),
                M = Math.floor(m() * 3),
                g = 8 + m() * 18;
              if (!Lt(k[0][0], k[0][1], a)) continue;
              i.layer(M);
              const w = F0(k);
              (i.strokeBoth(w, g, [0.9, 0.9, 0.88], 0.5),
                i.strokeAbs(w, 1.2, [0.7, 0.7, 0.68], 0.6));
            }
          }),
        i.layer(2));
      const l = [0.07, 0.07, 0.08],
        f = tt(e.charCodeAt(0) * 7);
      for (let y = 0; y < 7; y++) {
        const b = 18 * (f() - 0.5),
          m = 18 * (f() - 0.5);
        i.text(e, b, m, s, y === 0 ? l : [0.35, 0.35, 0.36], {
          family: n,
          ph: 0.2,
        });
      }
      (i.soft(10, () =>
        i.text(e, 0, 0, s * 1.005, [0.62, 0.62, 0.64], {
          family: n,
          ph: 0,
        }),
      ),
        i.text(e, 0, 0, s, l, {
          family: n,
          ph: 0.6,
        }),
        i.layer(1),
        Rt(c, 200, 30, 77, (y, b, m) => {
          for (let x = 0; x < 6; x++) {
            const k = y + m() * 200,
              M = b + m() * 200;
            if (!et(c, k, M, 20) || !Lt(k, M, a)) continue;
            const g = new Path2D();
            (g.arc(k, M, 2 + m() * 6, 0, 7), i.abs(g, [0.55, 0.55, 0.57], 0.5));
          }
        }),
        i.layer(1));
      for (const [y, b, m] of r) et(c, y, b, m) && Ht(i, y, b, m);
    },
    pick(i, c) {
      for (const [d, h, u] of r)
        if (Math.hypot(i - d, c - h) < u) return translate("气泡");
      return Lt(i, c, a) ? translate("纸纤维与油墨") : null;
    },
  };
}
const Al = Ai({
    id: "letterE",
    glyph: "e",
    name: translate("字母“e”装片"),
    family: "Georgia, 'Times New Roman', serif",
    size: 3e3,
  }),
  El = Ai({
    id: "letterShang",
    glyph: "上",
    name: translate("文字“上”装片"),
    family: "'Songti SC', 'STSong', 'Noto Serif SC', serif",
    size: 2800,
  }),
  Cl = {
    sx: 56,
    sy: 240,
    angle: 0.18,
    jitter: 0.72,
    jitterY: 0.95,
    stagger: 0.5,
    warp: 220,
    warpScale: 1500,
  };
function _a(t) {
  const e = tt(t.seed),
    o = Ie(t.poly);
  let n = 0,
    s = 0;
  for (let d = 0; d < t.poly.length; d++) {
    const [h, u] = t.poly[d],
      l = Math.hypot(h - o[0], u - o[1]);
    l > n && ((n = l), (s = Math.atan2(u - o[1], h - o[0])));
  }
  const a = v(e, -0.45, 0.45) * n,
    r = (e() < 0.5 ? -1 : 1) * v(e, 8, 16),
    i = o[0] + Math.cos(s) * a - Math.sin(s) * r,
    c = o[1] + Math.sin(s) * a + Math.cos(s) * r;
  return {
    r: e,
    c: o,
    ang: s,
    len: n,
    nucleus: {
      x: i,
      y: c,
      rx: v(e, 8.5, 11),
      ry: v(e, 6, 7.5),
      rot: s + v(e, -0.3, 0.3),
      layer: e() < 0.7 ? 1 : e() < 0.5 ? 0 : 2,
    },
    nucleoli: Array.from(
      {
        length: 1 + Math.floor(e() * 3),
      },
      () => [v(e, -4, 4), v(e, -2.5, 2.5), v(e, 1.2, 2.2)],
    ),
    pigment: v(e, 0.55, 1.15),
    lag: v(e, 0.7, 1.25),
    dead: e() < 0.035,
  };
}
function Ha(t, e, o) {
  const n = Math.sqrt(on(t.poly) / Math.max(1, e.len * 2)),
    s = _t(t.poly, 1.6 + o * n * 0.42);
  if (o <= 0.02 || s.length < 3) return s;
  const a = Ie(s),
    r = tt(t.seed + 7);
  return s.map(([i, c]) => {
    const d = 1 - o * (0.05 + 0.4 * r() * r());
    return [a[0] + (i - a[0]) * d, a[1] + (c - a[1]) * d];
  });
}
function Ei({ id: t, name: e, outer: o }) {
  const n = Mt(0, 0, 4200, {
      n: 46,
      amp: 0.16,
      seed: o ? 41 : 17,
      sx: 1.25,
      sy: 0.85,
      freq: 2.6,
    }),
    s = Mt(o ? -1500 : 1800, o ? 2200 : -1900, 900, {
      n: 20,
      amp: 0.25,
      seed: 5,
      sx: 2.4,
      sy: 0.35,
      rot: 0.5,
    }),
    a = o
      ? [
          [3300, -1200, 320],
          [-2600, -2600, 170],
          [-200, 3800, 110],
        ]
      : [
          [-3100, 1500, 380],
          [2600, 2600, 150],
          [700, -3400, 220],
          [-900, -600, 60],
        ],
    r = {
      ...Cl,
      seed: o ? 902 : 311,
    };
  function i(c, d, h, u, l) {
    const f = _a(h),
      { r: y } = f,
      b = o ? 0 : z0(u.reagent("iodine", f.c[0], f.c[1])),
      m = o ? 0 : z0(u.reagent("methylene", f.c[0], f.c[1])),
      x = d.upp > 3.5,
      k = it(h.poly),
      M = G(
        G([0.84, 0.86, 0.83], [0.86, 0.72, 0.42], b),
        [0.7, 0.8, 0.9],
        m * 0.6,
      );
    if (
      (c.add(
        `w${b}${m}`,
        (C) => {
          for (let A = 0; A < 3; A++)
            (d.layer(A),
              d.strokeBoth(C, 2.6, M, 0.75),
              x ||
                d.strokeAbs(
                  C,
                  0.7,
                  G([0.72, 0.74, 0.72], [0.62, 0.45, 0.2], b),
                  0.8,
                ));
        },
        k,
      ),
      l > 0 &&
        c.add(
          "fold",
          (C) => {
            (d.layer(1), d.abs(C, [0.9, 0.9, 0.88], 0.6));
          },
          k,
        ),
      f.dead)
    )
      return f;
    const g = o ? z0((u.plas?.(f.c[0], f.c[1]) ?? 0) * f.lag, 24) : 0,
      w = Ha(h, f, g);
    if (w.length < 3) return f;
    const $ = g > 0.02 ? yt(w) : it(w),
      L = wt(11, {
        n: 700,
        dark: 0.45,
        r1: 2.4,
      }),
      j = G(
        G([0.975, 0.975, 0.965], [0.93, 0.8, 0.5], b),
        [0.8, 0.88, 0.96],
        m,
      );
    if (
      (c.add(
        `c${b}${m}`,
        (C) => {
          for (const A of [0, 2])
            (d.layer(A),
              d.both(C, j, 0.12),
              x || d.pattern(C, L, 0.35, 0.55 + b * 0.3));
        },
        $,
      ),
      c.add(
        `cr${b}${m}${g > 0.02}`,
        (C) => {
          (d.layer(1),
            d.strokeBoth(
              C,
              g > 0.02 ? 2.2 : 3.2,
              G(j, [0.9, 0.9, 0.88], 0.3),
              0.35,
            ));
        },
        $,
      ),
      o)
    ) {
      const C = on(h.poly),
        A = on(w),
        D = Math.pow(C / Math.max(A, 1), 0.85),
        W = z0((f.pigment * D * 0.85) / 2.5, 20) * 2.5,
        O = $e([0.83, 0.5, 0.8], W);
      (c.add(
        `v${W}`,
        (N) => {
          (d.layer(1), d.abs(N, O), d.phase(N, 0.3));
        },
        $,
      ),
        g > 0.02 &&
          c.add(
            "pl",
            (N) => {
              for (const V of [0, 2])
                (d.layer(V), d.strokeBoth(N, 1.4, [0.82, 0.74, 0.84], 0.6));
            },
            $,
          ));
    }
    const T = f.nucleus;
    if (!x && !o && y() < 0.5) {
      const C = new Path2D();
      C.moveTo(T.x, T.y);
      const A = f.ang + Math.PI / 2 + v(y, -0.8, 0.8);
      (C.quadraticCurveTo(
        T.x + Math.cos(A) * 20 + v(y, -10, 10),
        T.y + Math.sin(A) * 20,
        T.x + Math.cos(A) * 40,
        T.y + Math.sin(A) * 40,
      ),
        c.add(
          `s${b}${m}`,
          (D) => {
            (d.layer(1), d.strokeBoth(D, 0.9, j, 0.25));
          },
          C,
        ));
    }
    if (g > 0.02) {
      const C = Math.min(0.5, g * 0.5);
      ((T.x += (f.c[0] - T.x) * C), (T.y += (f.c[1] - T.y) * C));
    }
    const S = G(
        G([0.955, 0.955, 0.945], [0.6, 0.38, 0.16], b),
        [0.45, 0.6, 0.86],
        m,
      ),
      R = U(T.x, T.y, T.rx, T.ry, T.rot);
    if (
      (c.add(
        `n${T.layer}${b}${m}`,
        (C) => {
          (d.layer(T.layer),
            d.abs(C, S),
            d.phase(C, 0.45),
            x ||
              (d.strokeAbs(
                C,
                0.6,
                G([0.9, 0.9, 0.89], [0.45, 0.26, 0.1], b),
                0.8,
              ),
              d.pattern(C, L, 0.22, 0.35 + 0.4 * b)));
        },
        R,
      ),
      !x)
    ) {
      c.add(
        `ni${T.layer}`,
        (D) => {
          (d.layer(T.layer), d.phase(D, 0.35));
        },
        U(T.x, T.y, T.rx * 0.75, T.ry * 0.7, T.rot),
      );
      const C = Math.cos(T.rot),
        A = Math.sin(T.rot);
      for (const [D, W, O] of f.nucleoli)
        c.add(
          `nl${T.layer}${b}${m}`,
          (N) => {
            (d.layer(T.layer),
              d.abs(
                N,
                G(
                  G([0.92, 0.92, 0.9], [0.42, 0.22, 0.08], b),
                  [0.35, 0.45, 0.75],
                  m,
                ),
              ),
              d.phase(N, 0.5));
          },
          U(T.x + D * C - W * A, T.y + D * A + W * C, O, O * 0.9),
        );
    }
    return f;
  }
  return {
    id: t,
    name: e,
    slideLabel: o
      ? [translate("紫色洋葱"), translate("外表皮")]
      : [translate("洋葱鳞片叶"), translate("内表皮")],
    latin: "Allium cepa",
    layers: [0, 12, 24],
    dynZ: 12,
    extent: 4200,
    start: [300, 200],
    animated: o,
    thumb(c, d) {
      const h = d / 22e3;
      (c.save(),
        c.translate(d / 2, d / 2),
        c.scale(h, h),
        (c.fillStyle = o ? "rgba(150,60,140,.75)" : "rgba(235,232,215,.55)"),
        c.beginPath(),
        n.forEach(([u, l], f) => (f ? c.lineTo(u, l) : c.moveTo(u, l))),
        c.fill(),
        c.restore());
    },
    render(c, d, h) {
      const u = At();
      for (const l of p0(d, r)) {
        const [f, y] = l.c;
        Lt(f, y, n) && i(u, c, l, h, Lt(f, y, s) ? 1 : 0);
      }
      for (const l of p0(d, {
        ...r,
        seed: r.seed + 1,
        ox: 23,
        oy: 71,
        angle: r.angle + 0.5,
      }))
        Lt(l.c[0], l.c[1], s) &&
          (u.add(
            "f2",
            (f) => {
              (c.layer(2), c.strokeBoth(f, 2.4, [0.8, 0.8, 0.78], 0.7));
            },
            it(l.poly),
          ),
          o &&
            u.add(
              "f2v",
              (f) => {
                (c.layer(2), c.abs(f, $e([0.83, 0.5, 0.8], 0.7)));
              },
              it(_t(l.poly, 2)),
            ));
      (u.flush(),
        c.layer(1),
        c.strokeBoth(yt(n), 5, [0.8, 0.8, 0.78], 0.6),
        Wt(c, d, {
          seed: 12,
          density: 0.5,
          size: 4,
        }));
      for (const [l, f, y] of a) et(d, l, f, y) && Ht(c, l, f, y);
    },
    pick(c, d, h) {
      for (const [M, g, w] of a)
        if (Math.hypot(c - M, d - g) < w) return translate("气泡");
      if (!Lt(c, d, n)) return null;
      const u = ts(c, d, r);
      if (!u) return null;
      const l = _a(u),
        f = l.nucleus,
        y = Math.cos(-f.rot),
        b = Math.sin(-f.rot),
        m = (c - f.x) * y - (d - f.y) * b,
        x = (c - f.x) * b + (d - f.y) * y;
      if (!l.dead && (m / f.rx) ** 2 + (x / f.ry) ** 2 < 1) {
        for (const [M, g, w] of l.nucleoli)
          if (Math.hypot(m - M, x - g) < w) return translate("核仁");
        return translate("细胞核");
      }
      const k = Math.min(
        ...u.poly.map((M, g) => {
          const w = u.poly[(g + 1) % u.poly.length],
            $ = w[0] - M[0],
            L = w[1] - M[1],
            j = Math.max(
              0,
              Math.min(1, ((c - M[0]) * $ + (d - M[1]) * L) / ($ * $ + L * L)),
            );
          return Math.hypot(c - M[0] - $ * j, d - M[1] - L * j);
        }),
      );
      if (k < 2.2) return translate("细胞壁");
      if (l.dead) return translate("破损的细胞（只剩细胞壁）");
      if (o) {
        const M = z0((h.plas?.(l.c[0], l.c[1]) ?? 0) * l.lag, 24),
          g = Ha(u, l, M);
        return Lt(c, d, g)
          ? M > 0.05 && !Lt(c, d, _t(g, 2))
            ? translate("原生质层")
            : translate("液泡（紫色细胞液）")
          : M > 0.05
            ? translate("细胞壁与原生质层之间的外界溶液")
            : translate("细胞质");
      }
      return k < 5 ? translate("细胞质") : translate("液泡");
    },
  };
}
const Dl = Ei({
    id: "onion",
    name: translate("洋葱鳞片叶内表皮"),
    outer: !1,
  }),
  Bl = Ei({
    id: "purpleOnion",
    name: translate("紫色洋葱鳞片叶外表皮"),
    outer: !0,
  }),
  re = 260,
  Ks = 4300;
function Ga(t, e) {
  const o = jt(t, e, 515),
    n = t * re,
    s = e * re,
    a = Math.hypot(n / 1.3, s) / Ks;
  if (a > 1.05) return [];
  const r = Math.max(0, 0.9 + 1.4 * ue(n / 1500, s / 1500, 3) - a * 0.8),
    i = Math.floor(r * 6 + o()),
    c = [];
  for (let d = 0; d < i; d++) {
    const h = n + o() * re,
      u = s + o() * re,
      l = v(o, 24, 38),
      f = Math.floor(o() * 1e9),
      y = o() * Math.PI;
    c.push({
      x: h,
      y: u,
      rad: l,
      seed: f,
      poly: Mt(h, u, l, {
        n: 8 + Math.floor(o() * 4),
        amp: 0.28,
        seed: f,
        sx: v(o, 0.85, 1.2),
        rot: y,
        freq: 1.6,
      }),
      nuc: {
        x: h + v(o, -5, 5),
        y: u + v(o, -5, 5),
        rx: v(o, 3.6, 4.8),
        ry: v(o, 3, 4),
        rot: o() * Math.PI,
      },
      folds: Array.from(
        {
          length: Math.floor(o() * 3),
        },
        () => {
          const b = o() * Math.PI,
            m = l * v(o, 0.6, 1.4),
            x = v(o, -0.4, 0.4) * l,
            k = v(o, -0.4, 0.4) * l;
          return [
            [h + x - (Math.cos(b) * m) / 2, u + k - (Math.sin(b) * m) / 2],
            [h + x + v(o, -6, 6), u + k + v(o, -6, 6)],
            [h + x + (Math.cos(b) * m) / 2, u + k + (Math.sin(b) * m) / 2],
          ];
        },
      ),
      layer: Math.floor(o() * 3),
      bacteria: Math.floor(o() * o() * 26),
      bseed: Math.floor(o() * 1e9),
      keratin: o() < 0.15,
    });
  }
  return c;
}
const Ol = {
    id: "cheek",
    name: translate("人口腔上皮细胞"),
    slideLabel: [translate("人口腔"), translate("上皮细胞")],
    layers: [0, 4, 8],
    dynZ: 4,
    extent: 4300,
    start: [-400, 300],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o * 1.3, o));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, Ks);
      (n.addColorStop(0, "rgba(200,215,235,.45)"),
        n.addColorStop(1, "rgba(200,215,235,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, Ks, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e, o) {
      const n = At(),
        s = t.upp > 3,
        a = wt(21, {
          n: 1100,
          dark: 0.5,
          r1: 1.8,
        });
      (Rt(e, re, 60, 0, (r, i, c, d, h) => {
        for (const u of Ga(d, h)) {
          if (!et(e, u.x, u.y, u.rad * 1.6)) continue;
          const l = z0(o.reagent("methylene", u.x, u.y)),
            f = z0(o.reagent("iodine", u.x, u.y)),
            y = G(
              G(
                u.keratin ? [0.95, 0.93, 0.86] : [0.975, 0.975, 0.97],
                [0.66, 0.8, 0.95],
                l,
              ),
              [0.93, 0.83, 0.58],
              f,
            ),
            b = yt(u.poly),
            m = u.layer;
          (n.add(
            `c${m}${l}${f}${u.keratin}`,
            (M) => {
              (t.layer(m),
                t.both(M, y, 0.45),
                s || t.pattern(M, a, 0.3, 0.35 + l * 0.4 + f * 0.3));
            },
            b,
          ),
            n.add(
              `e${m}${l}${f}`,
              (M) => {
                (t.layer(m),
                  t.strokeBoth(
                    M,
                    1.1,
                    G(y, [0.5, 0.65, 0.85], 0.25 * l),
                    0.35,
                  ));
              },
              b,
            ));
          for (const M of u.folds)
            n.add(
              `f${m}${l}${f}`,
              (g) => {
                (t.layer(m),
                  t.strokeBoth(
                    g,
                    1.6,
                    G(
                      G([0.9, 0.9, 0.9], [0.55, 0.7, 0.9], l),
                      [0.85, 0.72, 0.45],
                      f,
                    ),
                    0.45,
                  ));
              },
              F0(M),
            );
          const x = u.nuc,
            k = G(
              G([0.95, 0.95, 0.94], [0.18, 0.3, 0.68], l),
              [0.62, 0.42, 0.18],
              f,
            );
          if (
            (n.add(
              `n${m}${l}${f}`,
              (M) => {
                (t.layer(m),
                  t.abs(M, k),
                  t.phase(M, 0.5),
                  s || t.pattern(M, a, 0.15, 0.5));
              },
              U(x.x, x.y, x.rx, x.ry, x.rot),
            ),
            !s && u.bacteria)
          ) {
            const M = jt(u.bseed, 1, 2),
              g = u.x + v(M, -u.rad, u.rad) * 0.6,
              w = u.y + v(M, -u.rad, u.rad) * 0.6;
            for (let $ = 0; $ < u.bacteria; $++) {
              const L = g + v(M, -8, 8),
                j = w + v(M, -8, 8),
                S =
                  M() < 0.25 ? U(L, j, 1.3, 0.45, M() * 3) : U(L, j, 0.5, 0.5);
              n.add(
                `b${m}${l}`,
                (R) => {
                  (t.layer(m),
                    t.both(R, G([0.7, 0.7, 0.68], [0.12, 0.2, 0.55], l), 0.5));
                },
                S,
              );
            }
          }
        }
      }),
        n.flush(),
        Wt(t, e, {
          seed: 44,
          density: 0.8,
          size: 3,
          color: [0.7, 0.66, 0.6],
        }));
      for (const [r, i, c] of [
        [1800, -900, 140],
        [-2400, 1700, 90],
        [600, 2400, 260],
        [-600, -2600, 55],
        [2900, 1300, 75],
      ])
        et(e, r, i, c) && Ht(t, r, i, c);
    },
    pick(t, e) {
      for (const [r, i, c] of [
        [1800, -900, 140],
        [-2400, 1700, 90],
        [600, 2400, 260],
        [-600, -2600, 55],
        [2900, 1300, 75],
      ])
        if (Math.hypot(t - r, e - i) < c) return translate("气泡");
      const o = Math.floor((t - 60) / re),
        n = Math.floor((t + 60) / re),
        s = Math.floor((e - 60) / re),
        a = Math.floor((e + 60) / re);
      for (let r = o; r <= n; r++)
        for (let i = s; i <= a; i++)
          for (const c of Ga(r, i)) {
            if (!Lt(t, e, c.poly)) continue;
            const d = c.nuc;
            return Math.hypot((t - d.x) / d.rx, (e - d.y) / d.ry) < 1.1
              ? translate("细胞核")
              : translate("细胞质（外有细胞膜）");
          }
      return null;
    },
  },
  ye = [-420, 260],
  Ci = 6200,
  Gn = Mt(0, 0, Ci, {
    n: 48,
    amp: 0.07,
    seed: 23,
    freq: 2.2,
  }),
  fs = Gn.map(([t, e]) => Math.hypot(t, e)),
  ds = typeof Path2D < "u" ? yt(Gn) : null;
function Di(t, e) {
  const o = fs.length;
  let n = Math.atan2(e, t) / (Math.PI * 2);
  n < 0 && (n += 1);
  const s = n * o,
    a = Math.floor(s) % o,
    r = s - Math.floor(s);
  return fs[a] * (1 - r) + fs[(a + 1) % o] * r;
}
const Ge = (t, e, o = 0) => Math.hypot(t, e) < Di(t, e) - o,
  Zs = [
    [ye[0] + 760, ye[1] - 540, 110],
    [2600, -1900, 260],
    [-3300, 2300, 150],
    [1200, 3200, 85],
    [-1800, -2900, 55],
    [3900, 1500, 190],
    [-4600, -800, 70],
  ],
  Xn = (() => {
    const t = tt(4242),
      e = [];
    for (let o = 0; o < 16; o++) {
      const n = t() * Math.PI * 2,
        s = Math.sqrt(t()) * 2100,
        a = ye[0] + Math.cos(n) * s,
        r = ye[1] + Math.sin(n) * s,
        i = v(t, 2200, 6200),
        c = 25,
        d = Math.ceil(i / c);
      let h = t() * Math.PI,
        u = 0,
        l = a - (Math.cos(h) * i) / 2,
        f = r - (Math.sin(h) * i) / 2;
      const y = [];
      for (let T = 0; T <= d; T++)
        (y.push([l, f]),
          (u = u * 0.95 + Q0(t) * 0.006),
          (h += u),
          (l += Math.cos(h) * c),
          (f += Math.sin(h) * c));
      const b = v(t, 12, 20),
        m = v(t, 120, 230),
        x = t() * 10,
        k = [],
        M = [],
        g = [];
      for (let T = 0; T <= d; T++) {
        const S = y[Math.max(0, T - 1)],
          R = y[Math.min(d, T + 1)],
          C = R[0] - S[0],
          A = R[1] - S[1],
          D = Math.hypot(C, A) || 1,
          W =
            (b / 2) *
            (0.42 + 0.58 * Math.abs(Math.cos((Math.PI * T * c) / m + x)));
        (g.push(W),
          k.push([y[T][0] - (A / D) * W, y[T][1] + (C / D) * W]),
          M.push([y[T][0] + (A / D) * W, y[T][1] - (C / D) * W]));
      }
      let w = 1 / 0,
        $ = 1 / 0,
        L = -1 / 0,
        j = -1 / 0;
      for (const [T, S] of y)
        ((w = Math.min(w, T)),
          ($ = Math.min($, S)),
          (L = Math.max(L, T)),
          (j = Math.max(j, S)));
      e.push({
        pts: y,
        L: k,
        R: M,
        hw: g,
        w: b,
        step: c,
        period: m,
        ph: x,
        layer: t() < 0.75 ? 1 : t() < 0.5 ? 0 : 2,
        bbox: [w - b, $ - b, L + b, j + b],
      });
    }
    return e;
  })(),
  ho = 160,
  Qs = new Map(),
  Bi = (t, e) => t * 100003 + e;
Xn.forEach((t, e) => {
  for (let o = 0; o < t.pts.length - 1; o++) {
    const [n, s] = t.pts[o],
      a = Bi(Math.floor(n / ho), Math.floor(s / ho));
    let r = Qs.get(a);
    (r || Qs.set(a, (r = [])), r.push(e, o));
  }
});
function wa(t, e, o) {
  let n = 1 / 0;
  const s = Math.floor((t - o - 30) / ho),
    a = Math.floor((t + o + 30) / ho),
    r = Math.floor((e - o - 30) / ho),
    i = Math.floor((e + o + 30) / ho);
  for (let c = r; c <= i; c++)
    for (let d = s; d <= a; d++) {
      const h = Qs.get(Bi(d, c));
      if (h)
        for (let u = 0; u < h.length; u += 2) {
          const l = Xn[h[u]],
            f = h[u + 1],
            [y, b] = l.pts[f],
            [m, x] = l.pts[f + 1],
            k = m - y,
            M = x - b,
            g = Math.max(
              0,
              Math.min(1, ((t - y) * k + (e - b) * M) / (k * k + M * M || 1)),
            ),
            w = Math.hypot(t - y - k * g, e - b - M * g) - l.hw[f];
          w < n && (n = w);
        }
    }
  return n;
}
function Nl(t, e, o) {
  t.layer(e.layer);
  const n = new Path2D();
  e.L.forEach(([c, d], h) => (h ? n.lineTo(c, d) : n.moveTo(c, d)));
  for (let c = e.R.length - 1; c >= 0; c--) n.lineTo(e.R[c][0], e.R[c][1]);
  (n.closePath(), t.both(n, [0.93, 0.93, 0.9], 0.9));
  const s = new Path2D();
  if (
    (e.L.forEach(([c, d], h) => (h ? s.lineTo(c, d) : s.moveTo(c, d))),
    e.R.forEach(([c, d], h) => (h ? s.lineTo(c, d) : s.moveTo(c, d))),
    t.strokeBoth(s, Math.max(1.4, o * 0.6), [0.62, 0.62, 0.6], 0.6, 0.85),
    o > 4)
  )
    return;
  const a = new Path2D(),
    r = new Path2D();
  let i = !1;
  for (let c = 0; c < e.pts.length; c++) {
    const d = e.hw[c] > e.w * 0.36,
      [h, u] = e.pts[c];
    (d && (i ? a.lineTo(h, u) : a.moveTo(h, u)), (i = d));
    const l = Math.cos((Math.PI * c * e.step) / e.period + e.ph),
      f = Math.cos((Math.PI * (c + 1) * e.step) / e.period + e.ph);
    c < e.pts.length - 1 &&
      l * f < 0 &&
      (r.moveTo(e.L[c][0], e.L[c][1]), r.lineTo(e.R[c + 1][0], e.R[c + 1][1]));
  }
  (t.strokeBoth(a, 1.2, [0.8, 0.8, 0.78], 0.25, 0.6),
    t.strokeBoth(r, 1.3, [0.7, 0.7, 0.68], 0.45, 0.8));
}
const va = (t, e) => 0.7 + 0.9 * ue(t / 900, e / 900, 5);
function Xa(t, e) {
  const o = tt((t * 73856093) ^ (e * 19349663) ^ 777),
    n = t * 250,
    s = e * 250,
    a = [],
    r = Math.floor(Math.max(0, va(n, s)) * 2.2 + o());
  for (let i = 0; i < r; i++) {
    const c = n + o() * 250,
      d = s + o() * 250,
      h = o() < 0.2 ? 2 + Math.floor(o() * 5) : 1;
    for (let u = 0; u < h; u++)
      a.push({
        x: c + (u ? v(o, -9, 9) : 0),
        y: d + (u ? v(o, -9, 9) : 0),
        rad: v(o, 1.8, 4.2),
        a: o() * 6.28,
        L: o() < 0.6 ? 0 : o() < 0.5 ? 1 : 2,
      });
  }
  return a.filter((i) => Ge(i.x, i.y));
}
function Va(t, e) {
  const o = tt((t * 83492791) ^ (e * 2971215073) ^ 31),
    n = t * 80,
    s = e * 80,
    a = [],
    r = Math.floor(Math.max(0.2, va(n, s) + 0.4) * 9 * o() + 3);
  for (let i = 0; i < r; i++) {
    const c = n + o() * 80,
      d = s + o() * 80,
      h = o() < 0.55;
    a.push({
      x: c,
      y: d,
      rod: h,
      l: h ? v(o, 0.9, 1.8) : v(o, 0.35, 0.6),
      a: o() * 3.14,
      L: Math.floor(o() * 3),
    });
  }
  return a;
}
function Ka(t, e) {
  const o = tt((t * 2654435761) ^ (e * 40503) ^ 99),
    n = t * 600,
    s = e * 600,
    a = [],
    r = Math.floor(o() * 2.4 * Math.max(0.3, va(n, s)));
  for (let i = 0; i < r; i++) {
    const c = n + o() * 600,
      d = s + o() * 600,
      h = 10 + o() * o() * 70;
    a.push({
      x: c,
      y: d,
      rad: h,
      poly: Mt(c, d, h, {
        n: 16,
        amp: 0.55,
        seed: Math.floor(o() * 1e6),
        sx: v(o, 0.6, 1.4),
        rot: o() * 3,
        freq: 2.8,
      }),
      L: o() < 0.65 ? 0 : 2,
      d: v(o, 0.5, 1),
    });
  }
  return a.filter((i) => Ge(i.x, i.y));
}
const Oi = (t) =>
    Math.pow(
      Math.max(0, 1 - Math.pow(Math.abs(t), 2.4)),
      t > 0 ? 0.45 : 0.45 + 0.22 * -t,
    ) *
    (1 - 0.08 * t),
  zl = Math.max(
    ...Array.from(
      {
        length: 201,
      },
      (t, e) => Oi(e / 100 - 1),
    ),
  ),
  Wl = (t) => Oi(t) / zl,
  de = 0.9,
  l0 = 0.02,
  Fl = (t) =>
    t > l0 && t < de
      ? 0.24 * Math.pow(Math.sin((Math.PI * (t - l0)) / (de - l0)), 0.7)
      : 0,
  us = [
    [0, 0.45, 0.2],
    [-0.35, 0.5, 0.35],
    [-0.62, 0.1, 0.2],
    [-0.5, -0.45, -0.2],
    [-0.05, -0.6, -0.3],
    [0.4, -0.4, -0.25],
    [0.6, 0, 0.1],
    [0.42, 0.35, 0.4],
    [0.1, 0.1, 0.45],
    [-0.3, -0.05, 0.3],
    [-0.6, 0.25, 0.1],
    [-0.75, 0.4, 0],
  ];
function Ni(t) {
  const e = us.length - 1,
    o = Math.max(0, Math.min(0.9999, t)) * e,
    n = Math.floor(o),
    s = o - n,
    a = us[n],
    r = us[n + 1],
    i = s * s * (3 - 2 * s);
  return [
    a[0] + (r[0] - a[0]) * i,
    a[1] + (r[1] - a[1]) * i,
    a[2] + (r[2] - a[2]) * i,
  ];
}
const ql = 3.5,
  Ul = 0.88;
function zi(t) {
  const e = Math.cos(t.dir),
    o = Math.sin(t.dir),
    n = t.L / 2,
    s = t.spin,
    a = Math.sqrt(Math.cos(s) ** 2 + (Ul * Math.sin(s)) ** 2),
    r = (f, y) => [t.x + f * n * e - y * o, t.y + f * n * o + y * e],
    i = (f) => s + 0.55 * (f - 0.45),
    c = (f) => t.W * 0.07 * (1 - f * f) * Math.sin(s),
    d = (f) => (t.W / 2) * Wl(f) * a,
    h = (f, y, b) => {
      const m = f * (1 - b / n),
        x = Math.sin(i(m)) * y,
        k = d(m) * (1 - Fl(m) * (x > 0 ? x * x : 0)) - b;
      return r(m, c(m) + y * Math.max(0.3, k));
    },
    u = (f, y = 0) => {
      const b = [];
      for (let m = 0; m <= f; m++) b.push(h(Math.cos((Math.PI * m) / f), 1, y));
      for (let m = f - 1; m > 0; m--)
        b.push(h(Math.cos((Math.PI * m) / f), -1, y));
      return b;
    },
    l = [0, 1].map((f) => {
      const y = f ? -0.56 : 0.6,
        b = s + Math.PI + (f ? 0.5 : -0.4),
        m = (t.cvPh + f * 0.5) % 1,
        x = c(y) + d(y) * 0.62 * Math.sin(b),
        [k, M] = r(y, x);
      let g, w;
      return (
        m < 0.93
          ? ((g = t.cvR * Math.pow(m / 0.93, 0.6)),
            (w = 1 + 2.6 * Math.pow(1 - m / 0.93, 1.3) * Math.min(1, m / 0.06)))
          : ((g = t.cvR * Math.pow(1 - (m - 0.93) / 0.07, 2)), (w = 1)),
        {
          x: k,
          y: M,
          rv: g,
          canal: w,
          p: m,
          face: Math.cos(b),
        }
      );
    });
  return {
    c: e,
    s: o,
    hl: n,
    th: s,
    toW: r,
    thG: i,
    cb: c,
    hw: d,
    outline: u,
    cvs: l,
  };
}
function Yl(t, e, o) {
  const n = new Path2D();
  for (const s of e.cvs) {
    if (
      (s.rv > 0.5 &&
        (n.moveTo(s.x + s.rv, s.y), n.arc(s.x, s.y, s.rv, 0, Math.PI * 2, !0)),
      !o)
    )
      continue;
    const a = Math.max(s.rv + 0.7, 4.2),
      r = t.canalLen;
    for (let i = 0; i < t.nCanal; i++) {
      const c = t.dir + (i / t.nCanal) * Math.PI * 2 + t.canalRot,
        d = s.x + Math.cos(c) * (a + r / 2),
        h = s.y + Math.sin(c) * (a + r / 2),
        u = r / 2,
        l = s.canal / 2;
      (n.moveTo(d + Math.cos(c) * u, h + Math.sin(c) * u),
        n.ellipse(d, h, u, l, c, 0, Math.PI * 2, !0));
    }
  }
  return n;
}
function _l(t, e) {
  const o = [],
    n = [];
  for (let r = 0; r <= 12; r++) {
    const i = de - ((de - l0) * r) / 12,
      c = e.thG(i),
      d = Math.cos(c);
    if (d < 0.15) return null;
    const h = e.cb(i) + e.hw(i) * 0.86 * Math.sin(c),
      u =
        (1.5 + 6 * Math.sin(((Math.PI * (i - l0)) / (de - l0)) * 0.5 + 0.2)) *
        d;
    (o.push(e.toW(i, h - u)), n.push(e.toW(i, h + u)));
  }
  const s = [...o, ...n.reverse()];
  let a = 0;
  for (let r = 0; r < s.length; r++) {
    const [i, c] = s[r],
      [d, h] = s[(r + 1) % s.length];
    a += i * h - d * c;
  }
  return ao(a > 0 ? s.reverse() : s);
}
const ao = (t, e = new Path2D()) => (
    t.forEach(([o, n], s) => (s ? e.lineTo(o, n) : e.moveTo(o, n))),
    e.closePath(),
    e
  ),
  Za = new WeakMap();
function Qa(t, e, o, n, s, a) {
  const r = t.ctxAbs;
  let i = Za.get(r);
  i || Za.set(r, (i = new Map()));
  let c = i.get(o);
  c || i.set(o, (c = r.createPattern(o, "repeat")));
  const d = Math.cos(s.dir) * n,
    h = Math.sin(s.dir) * n;
  (c.setTransform(new DOMMatrix([d, h, -h, d, s.x, s.y])),
    (r.globalAlpha = a),
    (r.fillStyle = c),
    r.fill(e),
    (r.globalAlpha = 1));
}
function Hl(t, e, o, n, s) {
  const a = zi(e),
    { toW: r, hw: i, cb: c, thG: d, th: h } = a;
  if (o === 0) {
    const F = ao(a.outline(14));
    (t.strokeBoth(F, 9, [0.97, 0.97, 0.96], 0.12, 0.8),
      t.both(F, [0.84, 0.84, 0.82], 0.7));
    const [H, K] = r(0.02, c(0.02));
    t.both(U(H, K, e.L * 0.2, e.W * 0.18, e.dir), [0.8, 0.8, 0.75], 0.3);
    return;
  }
  const u = o === 2 ? 70 : 34,
    l = a.outline(u),
    f = Yl(e, a, o === 2),
    y = ao(l);
  if (o === 2) {
    const F = new Path2D(),
      H = new Path2D(),
      K = l.length;
    let J = 0;
    const ot = 3;
    for (let dt = 0; dt < K; dt++) {
      const xt = l[dt],
        vt = l[(dt + 1) % K],
        ut = l[(dt - 1 + K) % K],
        ct = Math.hypot(vt[0] - xt[0], vt[1] - xt[1]);
      let bt = vt[0] - ut[0],
        Z = vt[1] - ut[1];
      const rt = Math.hypot(bt, Z) || 1;
      ((bt /= rt), (Z /= rt));
      const $t = -Z,
        Tt = bt,
        Ft = ((xt[0] - e.x) * a.c + (xt[1] - e.y) * a.s) / a.hl,
        Ot = dt <= u,
        U0 = Ot ? bt : -bt,
        oe = Ot ? Z : -Z;
      for (let b0 = 0; b0 < ot; b0++) {
        const be = b0 / ot,
          Y0 = xt[0] + (vt[0] - xt[0]) * be,
          _0 = xt[1] + (vt[1] - xt[1]) * be,
          Se = J + ct * be,
          Gt = 0.62 * Math.sin(Se * 0.55 - n * 38 * (Ot ? 1 : -1)) + 0.35,
          Xt = Ft < -0.9,
          H0 = Xt ? 15 : 8.5,
          Ke = $t * Math.cos(Gt) + U0 * Math.sin(Gt),
          je = Tt * Math.cos(Gt) + oe * Math.sin(Gt),
          Vt = Xt ? H : F;
        (Vt.moveTo(Y0, _0),
          Vt.quadraticCurveTo(
            Y0 + $t * H0 * 0.55,
            _0 + Tt * H0 * 0.55,
            Y0 + Ke * H0,
            _0 + je * H0,
          ));
      }
      J += ct;
    }
    (t.strokeBoth(F, 0.5, [0.6, 0.6, 0.58], 0.35, 0.8),
      t.strokeBoth(H, 0.55, [0.58, 0.58, 0.56], 0.4, 0.85));
  } else t.strokeBoth(y, 11, [0.965, 0.965, 0.96], 0.14, 0.8);
  const b = ao(l);
  (b.addPath(f), t.both(b, [0.95, 0.95, 0.93], 0.3));
  const m = _l(e, a),
    x = ao(a.outline(u, ql));
  if (
    (x.addPath(f),
    m && x.addPath(m),
    t.both(x, [0.86, 0.86, 0.84], 0.25),
    o === 2)
  ) {
    const F = ao(a.outline(30, e.W * 0.2));
    (F.addPath(f), m && F.addPath(m), t.phase(F, 0.25));
  }
  Qa(
    t,
    x,
    wt(61, {
      n: 1300,
      dark: 0.55,
      r0: 0.7,
      r1: 2.4,
    }),
    o === 2 ? 0.32 : 0.5,
    e,
    o === 2 ? 1 : 0.6,
  );
  const k = 0.02,
    M = c(k) + i(k) * 0.12 * Math.cos(h),
    [g, w] = r(k, M),
    $ = new Path2D(),
    L = e.L * 0.095,
    j = e.W * 0.19;
  for (let F = 0; F <= 24; F++) {
    const H = (F / 24) * Math.PI * 2,
      K = 1 - 0.32 * Math.pow(Math.max(0, Math.sin(H)), 3),
      J = Math.cos(H) * L,
      ot = Math.sin(H) * j * K,
      dt = g + J * a.c - ot * a.s,
      xt = w + J * a.s + ot * a.c;
    F ? $.lineTo(dt, xt) : $.moveTo(dt, xt);
  }
  ($.closePath(),
    t.both($, [0.86, 0.86, 0.82], 0.3),
    o === 2 &&
      (Qa(
        t,
        $,
        wt(62, {
          n: 2600,
          dark: 0.5,
          r0: 0.5,
          r1: 1.4,
        }),
        0.22,
        e,
        0.7,
      ),
      t.strokeAbs($, 0.5, [0.8, 0.8, 0.77], 0.6)));
  const [T, S] = [
    g - a.s * j * 0.95 + a.c * L * 0.15,
    w + a.c * j * 0.95 + a.s * L * 0.15,
  ];
  t.both(U(T, S, 2.6, 2.2, e.dir), [0.82, 0.82, 0.78], 0.35);
  for (const F of e.fv) {
    const [H, K, J] = Ni(F.s),
      ot = c(H) + i(H) * 0.78 * (K * Math.cos(h) + J * Math.sin(h)),
      [dt, xt] = r(H, ot),
      vt = Math.round(F.s * 4) / 4,
      ut = F.r * (1 - 0.35 * vt),
      ct = F.green
        ? G([0.72, 0.84, 0.6], [0.72, 0.68, 0.5], vt)
        : G([0.88, 0.84, 0.72], [0.66, 0.6, 0.48], vt),
      bt = U(dt, xt, ut, ut * 0.92, e.dir),
      Z = `${F.green ? "g" : "b"}${vt}`;
    s.add(
      Z,
      (rt) => {
        (t.both(rt, ct, 0.35),
          o === 2 && t.strokeBoth(rt, 0.5, G(ct, [0.5, 0.5, 0.45], 0.4), 0.2));
      },
      bt,
    );
  }
  const R = [],
    C = [],
    A = [];
  for (let F = 0; F <= 14; F++) {
    const H = de - ((de - l0) * F) / 14,
      K = d(H),
      J = Math.cos(K),
      ot = c(H) + i(H) * 0.86 * Math.sin(K),
      dt =
        (2 + 7 * Math.sin(((Math.PI * (H - l0)) / (de - l0)) * 0.5 + 0.2)) *
        Math.max(0.25, Math.abs(J));
    (R.push(r(H, ot - dt)), C.push(r(H, ot + dt)));
  }
  const W = Math.cos(d(0.45)) > -0.1,
    O = new Path2D();
  R.forEach(([F, H], K) => (K ? O.lineTo(F, H) : O.moveTo(F, H)));
  for (let F = C.length - 1; F >= 0; F--) O.lineTo(C[F][0], C[F][1]);
  (O.closePath(), t.abs(O, [0.97, 0.97, 0.96], W ? 0.9 : 0.4));
  const N = new Path2D();
  (R.forEach(([F, H], K) => (K ? N.lineTo(F, H) : N.moveTo(F, H))),
    C.forEach(([F, H], K) => (K ? N.lineTo(F, H) : N.moveTo(F, H))),
    t.strokeBoth(
      N,
      o === 2 ? 0.9 : 1.6,
      [0.62, 0.62, 0.58],
      0.3,
      W ? 0.9 : 0.3,
    ));
  const V = d(l0),
    st = c(l0) + i(l0) * 0.86 * Math.sin(V);
  for (const [F, H] of [
    [l0, st],
    [-0.12, st * 0.55],
    [-0.24, st * 0.25],
  ])
    A.push(r(F, H));
  const ft = new Path2D();
  (ft.moveTo(A[0][0], A[0][1]),
    ft.quadraticCurveTo(A[1][0], A[1][1], A[2][0], A[2][1]),
    t.strokeBoth(ft, o === 2 ? 3 : 4, [0.84, 0.84, 0.8], 0.2, W ? 0.9 : 0.5));
  for (const F of a.cvs)
    if (
      (F.rv > 0.5 &&
        t.strokeBoth(
          U(F.x, F.y, F.rv, F.rv),
          o === 2 ? 0.6 : 1.2,
          [0.72, 0.73, 0.72],
          0.35,
          0.85,
        ),
      o === 2)
    ) {
      const H = Math.max(F.rv + 0.7, 4.2),
        K = e.canalLen,
        J = new Path2D();
      for (let ot = 0; ot < e.nCanal; ot++) {
        const dt = e.dir + (ot / e.nCanal) * Math.PI * 2 + e.canalRot;
        (J.moveTo(F.x + Math.cos(dt) * H, F.y + Math.sin(dt) * H),
          J.lineTo(F.x + Math.cos(dt) * (H + K), F.y + Math.sin(dt) * (H + K)));
      }
      (t.strokeAbs(J, F.canal + 1.2, [0.8, 0.81, 0.8], 0.5),
        t.strokeAbs(J, F.canal, [1, 1, 1], 1));
    }
  if (
    (t.strokeBoth(y, o === 2 ? 0.7 : 1.2, [0.7, 0.7, 0.68], 0.3, 0.85),
    o === 2 && t.upp < 0.6)
  ) {
    const F = new Path2D(),
      H = l.length;
    for (let K = 0; K < H; K++) {
      const J = l[K],
        ot = l[(K + 1) % H],
        dt = l[(K - 1 + H) % H];
      let xt = ot[0] - dt[0],
        vt = ot[1] - dt[1];
      const ut = Math.hypot(xt, vt) || 1;
      ((xt /= ut), (vt /= ut));
      const ct = Math.hypot(ot[0] - J[0], ot[1] - J[1]),
        bt = Math.max(1, Math.round(ct / 1.3));
      for (let Z = 0; Z < bt; Z++) {
        const rt = J[0] + ((ot[0] - J[0]) * Z) / bt,
          $t = J[1] + ((ot[1] - J[1]) * Z) / bt;
        (F.moveTo(rt + vt * 0.8, $t - xt * 0.8),
          F.lineTo(rt + vt * 3.2, $t - xt * 3.2));
      }
    }
    t.strokeAbs(F, 0.3, [0.8, 0.8, 0.78], 0.6);
  }
}
function Gl(t, e, o, n) {
  const s = v(t, 200, 250);
  return {
    id: e,
    x: o,
    y: n,
    L: s,
    W: s * v(t, 0.26, 0.3),
    a: t() * Math.PI * 2,
    dir: 0,
    v: 0,
    v0: v(t, 550, 950),
    spin: t() * 6.28,
    spinRate: Math.PI * 2 * v(t, 0.6, 1),
    wander: 0,
    mode: "fwd",
    t: 0,
    turnDir: 1,
    turnRate: 3,
    slow: 1,
    cvP: v(t, 8, 14),
    cvPh: t(),
    cvR: v(t, 5, 6.5),
    cvCount: 0,
    nCanal: 7 + Math.floor(t() * 3),
    canalLen: v(t, 14, 20),
    canalRot: t() * 6,
    fv: Array.from(
      {
        length: 6 + Math.floor(t() * 5),
      },
      (a, r) => ({
        s: (r + t() * 0.6) / 11,
        r: v(t, 2.6, 5),
        green: t() < 0.25,
        T: v(t, 80, 120),
      }),
    ),
  };
}
function Xl(t, e, o) {
  if (!Ge(t, e, 12)) return !0;
  for (const [n, s, a] of Zs) if (Math.hypot(t - n, e - s) < a + 5) return !0;
  return o && wa(t, e, 12) < 2;
}
function Vl(t, e, o, n) {
  const s = t.cvPh;
  ((t.cvPh = (t.cvPh + e / t.cvP) % 1),
    ((s < 0.93 && t.cvPh >= 0.93) ||
      ((s + 0.5) % 1 < 0.93 && (t.cvPh + 0.5) % 1 >= 0.93)) &&
      t.cvCount++);
  for (const l of t.fv)
    ((l.s += e / l.T),
      l.s >= 1 && ((l.s -= 1), (l.r = v(n, 2.6, 5)), (l.green = n() < 0.25)));
  let a = 1 / 0;
  o && (a = wa(t.x, t.y, 160));
  const r = o
    ? a < 160
      ? 0.08 + (0.22 * Math.max(0, a)) / 160
      : Math.hypot(t.x - ye[0], t.y - ye[1]) < 3e3
        ? 0.4
        : 1
    : 1;
  if (((t.slow = r), t.mode === "fwd"))
    ((t.v += (t.v0 * r - t.v) * Math.min(1, e * 3)),
      (t.wander = t.wander * Math.exp(-e * 0.8) + (n() - 0.5) * e * 3),
      (t.a += t.wander * e),
      o &&
        a < 140 &&
        n() < 0.15 * e &&
        ((t.mode = "rest"), (t.t = v(n, 3, 9))));
  else if (t.mode === "back")
    ((t.v = -0.35 * t.v0 * Math.max(r, 0.3)),
      (t.t -= e) <= 0 && ((t.mode = "turn"), (t.t = v(n, 0.4, 0.9))));
  else if (t.mode === "turn") {
    t.v = 0.04 * t.v0;
    const l = t.x - (Math.cos(t.a) * t.L) / 2,
      f = t.y - (Math.sin(t.a) * t.L) / 2;
    ((t.a += t.turnDir * t.turnRate * e),
      (t.x = l + (Math.cos(t.a) * t.L) / 2),
      (t.y = f + (Math.sin(t.a) * t.L) / 2),
      (t.t -= e) <= 0 && (t.mode = "fwd"));
  } else
    t.mode === "rest" &&
      ((t.v += (6 - t.v) * Math.min(1, e * 2)),
      (t.a += Math.sin(t.spin * 0.3) * 0.08 * e),
      (t.t -= e) <= 0 && (t.mode = "fwd"));
  ((t.spin +=
    t.spinRate *
    (0.12 + Math.min(1.2, Math.abs(t.v) / t.v0)) *
    e *
    (t.v < 0 ? -1 : 1)),
    (t.dir =
      t.a +
      0.16 *
        Math.sin(t.spin) *
        Math.min(1, Math.abs(t.v) / (t.v0 * 0.3) + 0.1)));
  const i = t.x + Math.cos(t.dir) * t.v * e,
    c = t.y + Math.sin(t.dir) * t.v * e,
    d = t.v >= 0 ? 0.5 : -0.5,
    h = i + Math.cos(t.dir) * t.L * d,
    u = c + Math.sin(t.dir) * t.L * d;
  if (
    (t.mode !== "turn" && Math.abs(t.v) > 1 && Xl(h, u, o)
      ? t.mode === "back"
        ? (t.t = 0)
        : ((t.mode = "back"),
          (t.t = v(n, 0.3, 0.7)),
          (t.turnDir = n() < 0.5 ? -1 : 1),
          (t.turnRate = v(n, 2, 4)))
      : t.mode !== "turn" && ((t.x = i), (t.y = c)),
    !Ge(t.x, t.y, 30))
  ) {
    const l = Math.hypot(t.x, t.y) || 1,
      f = Di(t.x, t.y) - 40;
    ((t.x *= f / l),
      (t.y *= f / l),
      (t.a = Math.atan2(-t.y, -t.x) + (n() - 0.5)));
  }
}
let fo = null;
const Kl = {
  init(t) {
    const e = tt(t * 7919 + 13),
      o = [];
    for (let n = 0; n < 26; n++) {
      let s, a;
      if (n < 17) {
        const r = e() * Math.PI * 2,
          i = Math.sqrt(e()) * (n < 7 ? 550 : 2200);
        ((s = ye[0] + Math.cos(r) * i), (a = ye[1] + Math.sin(r) * i));
      } else
        do ((s = v(e, -5400, 5400)), (a = v(e, -5400, 5400)));
        while (!Ge(s, a, 400));
      o.push(Gl(e, n, s, a));
    }
    for (const n of o) n.dir = n.a;
    return (
      (fo = {
        orgs: o,
        t: 0,
        r: e,
        view: null,
      }),
      fo
    );
  },
  step(t, e, o) {
    const n = Math.max(0, Math.min(e || 0, 0.25)),
      s = Math.max(1, Math.ceil(n / 0.04));
    for (let a = 0; a < s; a++)
      for (const r of t.orgs) Vl(r, n / s, !!o?.cotton, t.r);
    ((t.t += n), (fo = t));
  },
  render(t, e, o) {
    ((fo = o),
      (o.view = {
        cx: (e.x0 + e.x1) / 2,
        cy: (e.y0 + e.y1) / 2,
        r: (e.x1 - e.x0) / 2.1,
      }));
    const n = t.upp > 3 ? 0 : t.upp > 0.9 ? 1 : 2,
      s = At();
    for (const a of o.orgs)
      et(e, a.x, a.y, a.L * 0.55 + 20) && Hl(t, a, n, o.t, s);
    s.flush();
  },
  info(t) {
    const e = t.view;
    if (!e) return [];
    let o = 0,
      n = null,
      s = 1 / 0;
    for (const r of t.orgs) {
      const i = Math.hypot(r.x - e.cx, r.y - e.cy);
      (i < e.r + r.L * 0.3 && o++, i < s && ((s = i), (n = r)));
    }
    const a = [[translate("视野中的草履虫"), `${o}`]];
    if (n && s < e.r * 1.5) {
      const r = {
        fwd: translate("前进"),
        back: translate("后退（避让反应）"),
        turn: translate("转向"),
        rest: translate("停歇取食"),
      }[n.mode];
      (a.push([
        translate("中央个体的速度"),
        `${Math.round(Math.abs(n.v))} µm/s`,
      ]),
        a.push([translate("运动状态"), r]),
        a.push([translate("体长"), `${Math.round(n.L)} µm`]),
        a.push([translate("伸缩泡收缩周期"), `${n.cvP.toFixed(1)} s`]),
        a.push([translate("已收缩次数"), `${n.cvCount}`]));
    }
    return a;
  },
};
function Zl(t, e) {
  if (!fo) return null;
  for (const o of fo.orgs) {
    if (Math.hypot(t - o.x, e - o.y) > o.L * 0.6 + 20) continue;
    const n = zi(o),
      s = ((t - o.x) * n.c + (e - o.y) * n.s) / n.hl,
      a = -(t - o.x) * n.s + (e - o.y) * n.c;
    if (Math.abs(s) > 1.12) continue;
    const r = n.hw(Math.max(-1, Math.min(1, s))),
      i = Math.abs(a - n.cb(s));
    if (Math.abs(s) <= 1 && i > r + 10) continue;
    for (const f of n.cvs) {
      const y = Math.hypot(t - f.x, e - f.y);
      if (y < Math.max(f.rv, 2) + 1) return translate("伸缩泡");
      const b = Math.max(f.rv + 0.7, 4.2);
      if (y > b - 1 && y < b + o.canalLen) {
        const m = (Math.PI * 2) / o.nCanal;
        let x = (Math.atan2(e - f.y, t - f.x) - o.dir - o.canalRot) % m;
        if ((x < 0 && (x += m), Math.min(x, m - x) * y < f.canal / 2 + 1))
          return translate("收集管");
      }
    }
    if (Math.abs(s) > 1 || i > r) return translate("纤毛");
    for (const f of o.fv) {
      const [y, b, m] = Ni(f.s),
        x =
          n.cb(y) + n.hw(y) * 0.78 * (b * Math.cos(n.th) + m * Math.sin(n.th)),
        [k, M] = n.toW(y, x);
      if (Math.hypot(t - k, e - M) < f.r * (1 - 0.35 * f.s) + 0.8)
        return translate("食物泡");
    }
    const c = 0.02,
      [d, h] = n.toW(c, n.cb(c) + n.hw(c) * 0.12 * Math.cos(n.th)),
      u = ((t - d) * n.c + (e - h) * n.s) / (o.L * 0.095),
      l = (-(t - d) * n.s + (e - h) * n.c) / (o.W * 0.19);
    if (Math.hypot(u + 0.15, l - 0.95) < 0.25) return translate("小核");
    if (u * u + l * l < 1) return translate("大核");
    if (s > l0 && s < de) {
      const f = n.thG(s);
      if (
        Math.cos(f) > -0.1 &&
        Math.abs(a - n.cb(s) - r * 0.86 * Math.sin(f)) < 7
      )
        return translate("口沟");
    }
    return i > r - 2 ? translate("表膜") : translate("草履虫（细胞质）");
  }
  return null;
}
const Ql = {
    id: "paramecium",
    name: translate("草履虫培养液"),
    slideLabel: [translate("草履虫"), translate("培养液")],
    latin: "Paramecium caudatum",
    layers: [5, 30, 55],
    dynZ: 30,
    extent: Ci,
    start: ye,
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(205,215,200,.45)"),
        t.beginPath(),
        Gn.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
        t.fill(),
        (t.strokeStyle = "rgba(255,255,255,.55)"),
        (t.lineWidth = 60));
      for (const n of Xn.slice(0, 10))
        (t.beginPath(),
          n.pts.forEach(([s, a], r) => (r ? t.lineTo(s, a) : t.moveTo(s, a))),
          t.stroke());
      t.restore();
    },
    render(t, e, o) {
      const n = t.upp,
        s = At(),
        a = wt(63, {
          n: 1500,
          dark: 0.6,
          r0: 0.6,
          r1: 2.6,
        });
      if (
        (Rt(e, 600, 90, 0, (r, i, c, d, h) => {
          for (const u of Ka(d, h))
            et(e, u.x, u.y, u.rad * 1.5) &&
              s.add(
                `f${u.L}`,
                (l) => {
                  (t.layer(u.L),
                    t.both(l, [0.86, 0.82, 0.72], 0.45),
                    n < 4 && t.pattern(l, a, 0.45, 0.85));
                },
                yt(u.poly),
              );
        }),
        n < 8 &&
          Rt(e, 250, 20, 0, (r, i, c, d, h) => {
            for (const u of Xa(d, h))
              et(e, u.x, u.y, u.rad + 2) &&
                (s.add(
                  `a${u.L}`,
                  (l) => {
                    (t.layer(u.L),
                      t.both(l, [0.62, 0.8, 0.46], 0.45),
                      t.strokeAbs(
                        l,
                        Math.max(0.4, n * 0.3),
                        [0.55, 0.68, 0.45],
                        0.7,
                      ));
                  },
                  U(u.x, u.y, u.rad, u.rad * 0.95, u.a),
                ),
                n < 1.2 &&
                  s.add(
                    `ai${u.L}`,
                    (l) => {
                      (t.layer(u.L),
                        t.abs(l, [0.8, 0.9, 0.72]),
                        t.phase(l, 0.2));
                    },
                    U(
                      u.x + Math.cos(u.a) * u.rad * 0.4,
                      u.y + Math.sin(u.a) * u.rad * 0.4,
                      u.rad * 0.38,
                      u.rad * 0.34,
                      u.a,
                    ),
                  ));
          }),
        n < 1.3
          ? Rt(e, 80, 3, 0, (r, i, c, d, h) => {
              for (const u of Va(d, h))
                et(e, u.x, u.y, 2) &&
                  s.add(
                    `b${u.L}`,
                    (l) => {
                      (t.layer(u.L), t.both(l, [0.7, 0.7, 0.68], 0.55));
                    },
                    U(u.x, u.y, u.l, u.rod ? 0.4 : u.l, u.a),
                  );
            })
          : n < 4 &&
            s.add(
              "bg",
              (r) => {
                (t.layer(1),
                  t.pattern(
                    r,
                    wt(64, {
                      n: 260,
                      dark: 0.3,
                      r0: 0.4,
                      r1: 0.8,
                    }),
                    1,
                    0.3,
                  ));
              },
              yt(Gn),
            ),
        s.flush(),
        Wt(t, e, {
          seed: 66,
          density: 0.7,
          size: 3.5,
          color: [0.6, 0.52, 0.4],
        }),
        o.cotton)
      )
        for (const r of Xn) {
          const [i, c, d, h] = r.bbox;
          d < e.x0 || i > e.x1 || h < e.y0 || c > e.y1 || Nl(t, r, n);
        }
      t.layer(1);
      for (const [r, i, c] of Zs) et(e, r, i, c) && Ht(t, r, i, c);
      ds &&
        (t.strokeBoth(ds, 80, [0.62, 0.63, 0.64], 2, 0.9),
        t.strokeAbs(ds, 18, [0.22, 0.22, 0.24], 0.95));
    },
    pick(t, e, o) {
      const n = Zl(t, e);
      if (n) return n;
      for (const [h, u, l] of Zs)
        if (Math.hypot(t - h, e - u) < l) return translate("气泡");
      if (!Ge(t, e, -40)) return null;
      if (!Ge(t, e, 40)) return translate("液滴边缘");
      if (o?.cotton && wa(t, e, 20) < 0) return translate("棉纤维");
      const s = Math.floor(t / 250),
        a = Math.floor(e / 250);
      for (let h = a - 1; h <= a; h++)
        for (let u = s - 1; u <= s; u++)
          for (const l of Xa(u, h))
            if (Math.hypot(t - l.x, e - l.y) < l.rad + 0.5)
              return translate("小球藻");
      const r = Math.floor(t / 80),
        i = Math.floor(e / 80);
      for (let h = i - 1; h <= i; h++)
        for (let u = r - 1; u <= r; u++)
          for (const l of Va(u, h))
            if (Math.hypot(t - l.x, e - l.y) < l.l + 0.6)
              return translate("细菌");
      const c = Math.floor(t / 600),
        d = Math.floor(e / 600);
      for (let h = d - 1; h <= d; h++)
        for (let u = c - 1; u <= c; u++)
          for (const l of Ka(u, h))
            if (Lt(t, e, l.poly)) return translate("碎屑（细菌团）");
      return translate("培养液");
    },
    info: () =>
      translate(
        "<p>草履虫靠纤毛摆动前进，同时绕身体长轴旋转，所以走的是螺旋形路线。碰到障碍时纤毛反向摆动：先后退，再转一个角度前进（避让反应）。</p><p>伸缩泡周围的收集管先把水收集起来，注入伸缩泡；伸缩泡胀大后突然收缩，把多余的水排出体外，两个伸缩泡交替进行。</p>",
      ),
    dynamic: Kl,
  },
  W0 = 10,
  Ue = [300, -200],
  Js = [0.46, 0.72, 0.32],
  ta = 2,
  L0 = 1,
  Vn = 0;
function Ja(t, e, o, n, s, a = 0.0025) {
  const r = [],
    i = [];
  let c = 0;
  const d = Math.ceil(s / W0);
  for (
    let h = 0;
    h <= d &&
    (r.push(e),
    i.push(o),
    (c = c * 0.97 + Q0(t) * a),
    (n += c),
    (e += Math.cos(n) * W0),
    (o += Math.sin(n) * W0),
    !(Math.hypot(e, o) > 7600));
    h++
  );
  return {
    X: r,
    Y: i,
  };
}
function ps(t, e, o) {
  const { X: n, Y: s } = e,
    a = n.length,
    r = [],
    i = [];
  for (let b = 0; b < a; b++) {
    const m = Math.max(0, b - 1),
      x = Math.min(a - 1, b + 1),
      k = n[x] - n[m],
      M = s[x] - s[m],
      g = Math.hypot(k, M) || 1;
    (r.push(-M / g), i.push(k / g));
  }
  const c = o.W,
    d = (a - 1) * W0,
    h =
      o.bnd ||
      (() => {
        const b = [0],
          m = c * o.lf;
        let x = o.broken0 ? m * v(t, 0.2, 0.9) : 0;
        for (x > 0 && b.push(x); x < d;)
          ((x += m * v(t, 0.85, 1.15)), b.push(Math.min(x, d)));
        return b;
      })();
  let u = 1 / 0,
    l = 1 / 0,
    f = -1 / 0,
    y = -1 / 0;
  for (let b = 0; b < a; b++)
    ((u = Math.min(u, n[b])),
      (l = Math.min(l, s[b])),
      (f = Math.max(f, n[b])),
      (y = Math.max(y, s[b])));
  return {
    ...o,
    X: n,
    Y: s,
    NX: r,
    NY: i,
    len: d,
    bnd: h,
    bbox: [u - c, l - c, f + c, y + c],
  };
}
function Jl(t) {
  const e = t() < 0.4 ? 1 : t() < 0.65 ? 2 : 3,
    o = v(t, 34, 50);
  return {
    W: o,
    nC: e,
    lf: e === 1 ? v(t, 1.6, 3.8) : v(t, 1.5, 2.8),
    pitch: o * (e === 1 ? v(t, 1.3, 2) : v(t, 1.8, 2.8)),
    band:
      o *
      (e === 1
        ? v(t, 0.25, 0.33)
        : e === 2
          ? v(t, 0.17, 0.22)
          : v(t, 0.13, 0.17)),
    hand: -1,
    seed: Math.floor(t() * 1e9),
  };
}
const nn = (() => {
  const t = tt(9137),
    e = [];
  for (let u = 0; u < 34; u++) {
    const l = Jl(t);
    let f, y;
    if (u < 22) ((f = Ue[0] + Q0(t) * 1700), (y = Ue[1] + Q0(t) * 1500));
    else {
      const k = t() * Math.PI * 2,
        M = Math.sqrt(t()) * 5600;
      ((f = Math.cos(k) * M), (y = Math.sin(k) * M));
    }
    const b = t() * Math.PI * 2,
      m = v(t, 2500, 9e3),
      x = Ja(t, f - (Math.cos(b) * m) / 2, y - (Math.sin(b) * m) / 2, b, m);
    x.X.length < 20 ||
      e.push(
        ps(t, x, {
          ...l,
          id: e.length,
          broken0: t() < 0.5,
          broken1: t() < 0.6,
          layerShift: 0,
        }),
      );
  }
  const o = Ja(t, 1400, 1050, 0.42, 1700, 0.0012),
    n = 38,
    s = 22,
    a = n / 2 + s / 2,
    r = [0];
  for (let u = 0; u < 1690;)
    ((u += n * v(t, 2.3, 2.7)), r.push(Math.min(u, (o.X.length - 1) * W0)));
  const i = (u) => ({
      X: o.X.map((l, f) => l + u * tr(o, f)[0]),
      Y: o.Y.map((l, f) => l + u * tr(o, f)[1]),
    }),
    c = {
      W: n,
      nC: 1,
      lf: 2.5,
      pitch: n * 1.6,
      band: n * 0.26,
      hand: -1,
      bnd: r,
      broken0: !1,
      broken1: !1,
    },
    d = ps(t, i(-a), {
      ...c,
      id: e.length,
      seed: 5511,
      role: "donor",
    }),
    h = ps(t, i(a), {
      ...c,
      id: e.length + 1,
      seed: 5512,
      role: "recv",
    });
  return (e.push(d, h), e);
})();
function tr(t, e) {
  const o = t.X.length,
    n = Math.max(0, e - 1),
    s = Math.min(o - 1, e + 1),
    a = t.X[s] - t.X[n],
    r = t.Y[s] - t.Y[n],
    i = Math.hypot(a, r) || 1;
  return [-r / i, a / i];
}
const mn = nn.slice(-2),
  t1 = (() => {
    let t = null,
      e = 1 / 0;
    for (const o of nn.slice(0, -2))
      for (let n = 0; n < o.X.length; n += 5) {
        const s = Math.hypot(o.X[n] - Ue[0], o.Y[n] - Ue[1]);
        s < e &&
          ((e = s), (t = [o.X[n] + o.NX[n] * 10, o.Y[n] + o.NY[n] * 10]));
      }
    return t || Ue;
  })(),
  Wi = (t) => (t % 7 === 3 ? 1 : t % 9 === 5 ? 0 : 2);
function t0(t, e, o) {
  const n = t.X.length,
    s = Math.max(0, Math.min(n - 1.001, e / W0)),
    a = Math.floor(s),
    r = s - a,
    i = t.X[a] + (t.X[a + 1] - t.X[a]) * r,
    c = t.Y[a] + (t.Y[a + 1] - t.Y[a]) * r,
    d = t.NX[a] + (t.NX[a + 1] - t.NX[a]) * r,
    h = t.NY[a] + (t.NY[a + 1] - t.NY[a]) * r;
  return [i + d * o, c + h * o];
}
function Fi(t, e) {
  const o = tt(k0(t.seed, e, 77));
  return {
    r: o,
    ph: Array.from(
      {
        length: t.nC,
      },
      (n, s) => (s / t.nC) * Math.PI * 2 + o() * 0.8,
    ),
    nuc: [v(o, 0.42, 0.58), v(o, -0.08, 0.08)],
    empty: o() < 0.025,
    strands: 5 + Math.floor(o() * 4),
  };
}
function qi(t, e, o, n, s, a) {
  const r = t.W / 2 - 2.5,
    i = (o - e) / t.pitch,
    c = t.band,
    d = o - e,
    h = t.hand * Math.PI * 2 * Math.max(0.3, i),
    u = Math.hypot(d, r * h),
    l = (-r * h) / u,
    f = d / u,
    y = Math.abs(l * c * 0.5) + 2,
    b = e + y,
    m = o - y;
  if (m <= b)
    return {
      runs: [],
      pyr: [],
    };
  const x = m - b,
    k = Math.hypot(x, r * h * (x / d)),
    M = s < 1.1,
    g = Math.max(M ? 0.9 : 2.2, s * 1.4),
    w = Math.max(8, Math.ceil(k / g)),
    $ = [];
  let L = null;
  const j = [],
    T = t.W * 0.32;
  let S = T * 0.5;
  for (let R = 0; R <= w; R++) {
    const C = R / w,
      A = b + x * C,
      D = n + h * (x / d) * C,
      W = k * C,
      O =
        (c / 2) *
        (M
          ? 1 +
            0.07 * Math.sin(W * 1.5) +
            0.06 * Math.sin(W * 0.7 + n) +
            0.08 * Math.sin(W * 0.23 + 2 * n)
          : 1),
      N = Math.cos(D) >= 0,
      V = Math.sin(D) >= 0 ? 1 : -1,
      st = [A + l * O, r * Math.sin(D + (f * O) / r)],
      ft = [A - l * O, r * Math.sin(D - (f * O) / r)],
      F = 3 * (1 - Math.abs(Math.cos(D)));
    (Math.abs(st[1]) > Math.abs(ft[1]) ? (ft[1] -= V * F) : (st[1] -= V * F),
      (!L || L.front !== N) &&
        (L && (L.a.push(st), L.b.push(ft)),
        (L = {
          front: N,
          a: [],
          b: [],
          c: [],
        }),
        $.push(L)),
      L.a.push(st),
      L.b.push(ft),
      L.c.push([A, r * Math.sin(D), Math.abs(Math.cos(D))]),
      a && W >= S && ((S += T), j.push([A, r * Math.sin(D), N])));
  }
  return {
    runs: $,
    pyr: j,
  };
}
function e1(t, e, o, n, s) {
  const a = e.upp,
    r = a > 3 ? 0 : a > 1.1 ? 1 : 2,
    i = o.W,
    c = i / 2,
    d = (w, $ = new Path2D()) => (
      w.forEach(([L, j], T) => {
        const [S, R] = t0(o, L, j);
        T ? $.lineTo(S, R) : $.moveTo(S, R);
      }),
      $
    ),
    h = o.X.length;
  let u = -1,
    l = -1;
  for (let w = 0; w < h; w++)
    et(n, o.X[w], o.Y[w], i) && (u < 0 && (u = w), (l = w));
  if (u < 0) return;
  const f = Math.max(0, (u - 1) * W0),
    y = Math.min(o.len, (l + 1) * W0);
  o.role;
  const b = [];
  for (let w = f; w <= y + 0.01; w += W0) b.push([w, 0]);
  const m = d(b);
  t.add(
    "body",
    (w) => {
      (e.layer(L0),
        e.strokeBoth(
          w,
          i,
          a > 3 ? [0.9, 0.96, 0.86] : [0.965, 0.98, 0.95],
          0.15,
        ),
        e.strokePhase(w, i * 0.62, 0.1),
        a < 3 && e.strokeBoth(w, i + 9, [0.995, 0.995, 0.99], 0.05));
    },
    m,
  );
  const x = [],
    k = [];
  for (let w = f; w <= y + 0.01; w += Math.min(W0, Math.max(2, a * 2)))
    (x.push([w, -c]), k.push([w, c]));
  const M = d(k, d(x));
  t.add(
    "wall",
    (w) => {
      (e.layer(L0),
        e.strokeBoth(w, Math.max(1.4, a * 0.5), [0.72, 0.76, 0.7], 0.7));
      for (const $ of [Vn, ta])
        (e.layer($), e.strokeBoth(w, 1.6, [0.9, 0.92, 0.88], 0.25));
    },
    M,
  );
  for (const [w, $, L] of [
    [0, -1, o.broken0],
    [o.len, 1, o.broken1],
  ]) {
    if (w < f - 1 || w > y + 1) continue;
    const j = new Path2D();
    if (L) {
      const T = [];
      for (let S = 0; S <= 6; S++)
        T.push([w + $ * (S % 2 ? 4 : 0) * (1 + (S % 3)), -c + (i * S) / 6]);
      d(T, j);
    } else {
      const T = [];
      for (let S = 0; S <= 12; S++) {
        const R = -Math.PI / 2 + (Math.PI * S) / 12;
        T.push([w + $ * Math.cos(R) * c * 0.6, Math.sin(R) * c]);
      }
      d(T, j);
    }
    t.add("wall", null, j);
  }
  const g = (w, $) => z0(s.reagent("iodine", w, $), 6);
  for (let w = 0; w < o.bnd.length - 1; w++) {
    const $ = o.bnd[w],
      L = o.bnd[w + 1];
    if (L < f || $ > y) continue;
    const [j, T] = t0(o, ($ + L) / 2, 0);
    if (!et(n, j, T, (L - $) / 2 + i)) continue;
    const S = g(j, T);
    $ > 0 &&
      t.add(
        `xw${S}`,
        (A) => {
          for (let D = 0; D < 3; D++)
            (e.layer(D),
              e.strokeBoth(
                A,
                D === L0 ? 1.5 : 1.2,
                G([0.74, 0.78, 0.72], [0.7, 0.6, 0.4], S),
                D === L0 ? 0.6 : 0.4,
              ));
        },
        d([
          [$, -c],
          [$, c],
        ]),
      );
    const R = Fi(o, w);
    if (
      (w === 0 && o.broken0) ||
      (w === o.bnd.length - 2 && o.broken1) ||
      R.empty
    ) {
      if (r > 0) {
        const A = R.r;
        for (let D = 0; D < 3; D++) {
          const [W, O] = t0(o, v(A, $ + 4, L - 4), v(A, -c * 0.7, c * 0.7));
          t.add(
            "rem",
            (N) => {
              (e.layer(Vn), e.both(N, [0.66, 0.68, 0.48], 0.3));
            },
            yt(
              Mt(W, O, v(A, 2, 5), {
                n: 8,
                amp: 0.4,
                seed: w * 7 + D,
              }),
            ),
          );
        }
      }
      continue;
    }
    if (o.role) {
      n1(t, e, o, w, $, L, S, r);
      continue;
    }
    o1(t, e, o, w, R, $, L, S, r, d);
  }
}
function o1(t, e, o, n, s, a, r, i, c, d) {
  const h = o.W,
    u = G(Js, [0.42, 0.5, 0.22], i * 0.7);
  for (let L = 0; L < o.nC; L++) {
    const { runs: j, pyr: T } = qi(o, a, r, s.ph[L], e.upp, c > 0);
    for (const S of j) {
      const R = S.front ? ta : Vn;
      if (c === 0) {
        t.add(
          `lc${R}${i}`,
          (O) => {
            (e.layer(R), e.strokeBoth(O, o.band * 0.95, $e(u, 1.15), 0.5));
          },
          d(S.c),
        );
        continue;
      }
      const C = [...S.a, ...S.b.slice().reverse()],
        A = d(C);
      (A.closePath(),
        t.add(
          `c${R}${i}`,
          (O) => {
            (e.layer(R),
              e.both(O, u, 0.55),
              c === 2 &&
                e.pattern(
                  O,
                  wt(73, {
                    n: 1100,
                    dark: 0.35,
                    r0: 0.8,
                    r1: 2.6,
                  }),
                  0.3,
                  0.7,
                ));
          },
          A,
        ));
      const D = d(S.a);
      (d(S.b, D),
        t.add(
          `ce${R}${i}`,
          (O) => {
            (e.layer(R),
              e.strokeBoth(O, c === 2 ? 0.8 : 1.4, $e(u, 1.3), 0.3, 0.6));
          },
          D,
        ));
      const W = [];
      for (const O of S.c) O[2] < 0.45 && W.push(O);
      if (W.length > 1) {
        const O = new Path2D();
        let N = null;
        for (const V of S.c) {
          const st = V[2] < 0.45,
            [ft, F] = t0(o, V[0], V[1]);
          (st && (N ? O.lineTo(ft, F) : O.moveTo(ft, F)), (N = st ? V : null));
        }
        t.add(
          `cs${R}${i}`,
          (V) => {
            (e.layer(R), e.strokeAbs(V, 3, $e(u, 1.6), 0.9));
          },
          O,
        );
      }
    }
    for (const [S, R, C] of T) {
      const [A, D] = t0(o, S, R),
        W = C ? ta : Vn,
        O = c === 2 ? 2.6 : 2.4;
      (t.add(
        `py${W}${i}`,
        (N) => {
          (e.layer(W),
            e.both(N, G([0.6, 0.72, 0.5], [0.16, 0.15, 0.32], i), 0.7));
        },
        U(A, D, O, O),
      ),
        c === 2 &&
          t.add(
            `pc${W}`,
            (N) => {
              (e.layer(W), e.both(N, [0.95, 0.97, 0.9], 0.5));
            },
            U(A - 0.4, D - 0.4, O * 0.45, O * 0.45),
          ));
    }
  }
  if (c === 0) return;
  const l = r - a,
    f = a + l * s.nuc[0],
    y = h * s.nuc[1],
    [b, m] = t0(o, f, y),
    [x, k] = t0(o, f + 1, y),
    M = Math.atan2(k - m, x - b),
    g = G([0.94, 0.95, 0.92], [0.62, 0.42, 0.2], i);
  if (
    (t.add(
      `n${i}`,
      (L) => {
        (e.layer(L0),
          e.both(L, g, 0.45),
          c === 2 &&
            e.strokeAbs(
              L,
              0.6,
              G([0.82, 0.84, 0.8], [0.45, 0.3, 0.12], i),
              0.8,
            ));
      },
      U(b, m, h * 0.2, h * 0.15, M + 0.15),
    ),
    c < 2)
  )
    return;
  t.add(
    `nl${i}`,
    (L) => {
      (e.layer(L0),
        e.both(L, G([0.84, 0.86, 0.82], [0.42, 0.24, 0.08], i), 0.5));
    },
    U(b + 1, m - 0.5, 2.8, 2.5),
  );
  const w = tt(k0(o.seed, n, 91)),
    $ = new Path2D();
  for (let L = 0; L < s.strands; L++) {
    const j = (L / s.strands) * Math.PI * 2 + w() * 0.6,
      T = f + Math.cos(j) * l * v(w, 0.25, 0.45),
      S = Math.sin(j) * (h / 2 - 3) * v(w, 0.75, 1),
      R = Math.max(a + 3, Math.min(r - 3, T)),
      [C, A] = t0(o, f + Math.cos(j) * h * 0.18, y + Math.sin(j) * h * 0.13),
      [D, W] = t0(o, (f + R) / 2 + v(w, -5, 5), (y + S) / 2 + v(w, -3, 3)),
      [O, N] = t0(o, R, S);
    ($.moveTo(C, A), $.quadraticCurveTo(D, W, O, N));
  }
  t.add(
    "st",
    (L) => {
      (e.layer(L0), e.strokeBoth(L, 0.9, [0.93, 0.94, 0.92], 0.3, 0.9));
    },
    $,
  );
}
function n1(t, e, o, n, s, a, r, i) {
  const c = o.W,
    d = Wi(n),
    h = (s + a) / 2;
  if (o.role === "donor") {
    if (d > 0 || n % 2 === 0) {
      const x = new Path2D(),
        k = c * 0.2,
        M = Math.hypot(mn[1].X[0] - mn[0].X[0], mn[1].Y[0] - mn[0].Y[0]) - c;
      for (const $ of [-k, k]) {
        const [L, j] = t0(o, h + $, c / 2),
          [T, S] = t0(o, h + $ * 0.9, c / 2 + M + 0.5);
        (x.moveTo(L, j), x.lineTo(T, S));
      }
      t.add(
        "tube",
        ($) => {
          (e.layer(L0), e.strokeBoth($, 1.4, [0.74, 0.78, 0.72], 0.6));
        },
        x,
      );
      const [g, w] = t0(o, h, c / 2 + M / 2);
      t.add(
        "tubeB",
        ($) => {
          (e.layer(L0), e.both($, [0.97, 0.98, 0.96], 0.2));
        },
        U(g, w, k, M / 2 + 1, Math.atan2(o.NY[0], o.NX[0])),
      );
    }
    if (d === 0 || d === 1) {
      const x = d === 1 ? 0.55 : 0,
        [k, M] = t0(o, h, c * 0.3 * x + (d === 0 ? 0 : 2));
      t.add(
        `pr${r}`,
        (g) => {
          (e.layer(L0),
            e.both(
              g,
              $e(G(Js, [0.42, 0.5, 0.22], r * 0.7), d === 0 ? 1.4 : 1.8),
              0.7,
            ),
            i > 0 &&
              e.pattern(
                g,
                wt(71, {
                  n: 900,
                  dark: 0.5,
                }),
                0.3,
                0.6,
              ));
        },
        yt(
          Mt(k, M, d === 0 ? c * 0.42 : c * 0.33, {
            n: 14,
            amp: 0.12,
            seed: n,
            sx: d === 0 ? 1.6 : 1.1,
          }),
        ),
      );
    }
    return;
  }
  if (d === 0) {
    const [x, k] = t0(o, h, 0);
    t.add(
      `pr${r}`,
      (M) => {
        (e.layer(L0), e.both(M, $e(Js, 1.4), 0.7));
      },
      yt(
        Mt(x, k, c * 0.42, {
          n: 14,
          amp: 0.1,
          seed: n + 50,
          sx: 1.6,
        }),
      ),
    );
    return;
  }
  const [u, l] = t0(o, h, d === 1 ? -2 : 0),
    [f, y] = t0(o, h + 1, 0),
    b = Math.atan2(y - l, f - u),
    m = U(u, l, Math.min((a - s) * 0.36, c * 0.62), c * 0.36, b);
  t.add(
    `z${r}`,
    (x) => {
      (e.layer(L0),
        e.both(x, G([0.48, 0.55, 0.3], [0.25, 0.22, 0.25], r), 0.9),
        i > 0 &&
          e.pattern(
            x,
            wt(72, {
              n: 1400,
              dark: 0.55,
            }),
            0.3,
            0.8,
          ),
        e.strokeBoth(x, i === 2 ? 2.2 : 2.6, [0.5, 0.46, 0.3], 0.7));
    },
    m,
  );
}
function s1(t, e) {
  let o = null;
  for (const n of nn) {
    const [s, a, r, i] = n.bbox;
    if (!(t < s - 10 || t > r + 10 || e < a - 10 || e > i + 10))
      for (let c = 0; c < n.X.length - 1; c++) {
        const d = n.X[c],
          h = n.Y[c];
        if (Math.abs(t - d) > n.W + 12 || Math.abs(e - h) > n.W + 12) continue;
        const u = n.X[c + 1] - d,
          l = n.Y[c + 1] - h,
          f = Math.max(
            0,
            Math.min(1, ((t - d) * u + (e - h) * l) / (u * u + l * l)),
          ),
          y = (t - d) * n.NX[c] + (e - h) * n.NY[c],
          b = Math.hypot(t - d - u * f, e - h - l * f);
        b < n.W / 2 + 6 &&
          (!o || b < o.d) &&
          (o = {
            f: n,
            s: (c + f) * W0,
            w: y,
            d: b,
          });
      }
  }
  return o;
}
const a1 = {
    id: "spirogyra",
    name: translate("水绵"),
    slideLabel: [translate("水绵"), translate("临时装片")],
    latin: "Spirogyra sp.",
    layers: [0, 20, 40],
    dynZ: 20,
    extent: 7e3,
    start: t1,
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.strokeStyle = "rgba(70,140,60,.55)"),
        (t.lineWidth = Math.max(60, 1.2 / o)),
        (t.lineCap = "round"));
      for (const n of nn) {
        t.beginPath();
        for (let s = 0; s < n.X.length; s += 6)
          s ? t.lineTo(n.X[s], n.Y[s]) : t.moveTo(n.X[s], n.Y[s]);
        t.stroke();
      }
      t.restore();
    },
    render(t, e, o) {
      const n = At();
      for (const s of nn) {
        const [a, r, i, c] = s.bbox;
        i < e.x0 || a > e.x1 || c < e.y0 || r > e.y1 || e1(n, t, s, e, o);
      }
      (n.flush(),
        Wt(t, e, {
          seed: 81,
          density: 0.6,
          size: 3,
          color: [0.62, 0.58, 0.45],
        }),
        t.layer(1));
      for (const [s, a, r] of er) et(e, s, a, r) && Ht(t, s, a, r);
    },
    pick(t, e, o) {
      for (const [m, x, k] of er)
        if (Math.hypot(t - m, e - x) < k) return translate("气泡");
      const n = s1(t, e);
      if (!n) return null;
      const { f: s, s: a, w: r } = n;
      if (Math.abs(r) > s.W / 2 + 1.5) return translate("胶质鞘");
      if (Math.abs(r) > s.W / 2 - 1.5) return translate("细胞壁");
      let i = 0;
      for (; i < s.bnd.length - 2 && s.bnd[i + 1] < a;) i++;
      const c = s.bnd[i],
        d = s.bnd[i + 1];
      if (Math.abs(a - c) < 2 || Math.abs(a - d) < 2)
        return translate("横壁（细胞壁）");
      if (s.role) {
        const m = Wi(i);
        if (s.role === "recv" && m > 0) {
          const x = (c + d) / 2;
          if (
            ((a - x) / Math.min((d - c) * 0.36, s.W * 0.62)) ** 2 +
              (r / (s.W * 0.36)) ** 2 <
            1
          )
            return translate("接合孢子");
        }
        return s.role === "donor" &&
          r > s.W * 0.3 &&
          Math.abs(a - (c + d) / 2) < s.W * 0.2
          ? translate("接合管")
          : s.role === "donor"
            ? translate("空的细胞（原生质体已移出）")
            : translate("液泡");
      }
      const h = Fi(s, i),
        u = d - c,
        l = c + u * h.nuc[0],
        f = s.W * h.nuc[1];
      if (((a - l) / (s.W * 0.2)) ** 2 + ((r - f) / (s.W * 0.15)) ** 2 < 1)
        return translate("细胞核");
      const y = o?.zFocus,
        b = y == null ? !0 : y > 20;
      for (let m = 0; m < s.nC; m++) {
        const { runs: x, pyr: k } = qi(s, c, d, h.ph[m], 1, !0);
        for (const [M, g, w] of k)
          if (w === b && Math.hypot(a - M, r - g) < 3)
            return translate("蛋白核");
        for (const M of x)
          if (M.front === b)
            for (let g = 0; g < M.a.length - 1; g++) {
              const w = Math.min(M.a[g][0], M.b[g][0]),
                $ = Math.max(M.a[g][0], M.b[g][0]),
                L = Math.min(M.a[g][1], M.b[g][1], M.a[g + 1][1]) - 1.5,
                j = Math.max(M.a[g][1], M.b[g][1], M.a[g + 1][1]) + 1.5;
              if (a >= w - 0.5 && a <= $ + 0.5 && r >= L && r <= j)
                return translate("带状叶绿体");
            }
      }
      return translate("液泡");
    },
    info: () =>
      translate(
        "<p>水绵的叶绿体呈带状、螺旋排列。上下调节细准焦螺旋：靠近你的一半螺旋带与远离的一半斜向相反，交替变清楚。带上的小圆点是蛋白核，滴加碘液后变蓝黑色（含淀粉）。</p>",
      ),
  },
  er = [
    [Ue[0] + 900, Ue[1] + 650, 140],
    [-2600, -1800, 230],
    [3100, -2600, 95],
    [-1200, 3e3, 60],
  ],
  ln = -0.35,
  ko = Math.cos(ln),
  Po = Math.sin(ln),
  q0 = -1250,
  j0 = 1450,
  ea = (t, e) => [t * ko + e * Po, -t * Po + e * ko],
  Bt = (t, e) => [t * ko - e * Po, t * Po + e * ko],
  Ui = (t) => Math.max(0, Math.min(1, (t - q0) / (j0 - q0)));
function R0(t) {
  const e = Ui(t),
    o = 0.8 + 0.2 * Math.min(1, e / 0.22);
  return (
    410 * Math.pow(Math.max(0, 1 - Math.pow(e, 2.3)), 0.72) * o +
    3 * kt(t / 90, 3.5, 41)
  );
}
const sn = (t) => 30 * (1 - 0.65 * Ui(t)) + 4,
  oa = {
    sx: 60,
    sy: 25,
    angle: ln,
    jitter: 0.32,
    jitterY: 0.22,
    stagger: 0.37,
    seed: 7101,
  },
  r1 = {
    sx: 46,
    sy: 19,
    angle: ln,
    jitter: 0.35,
    jitterY: 0.25,
    stagger: 0.61,
    seed: 7102,
    ox: 13,
    oy: 9,
  },
  i1 = {
    sx: 135,
    sy: 10.5,
    angle: ln,
    jitter: 0.35,
    jitterY: 0.15,
    stagger: 0.5,
    seed: 7103,
    ox: 31,
    oy: 2,
  },
  or = [
    [...Bt(420, 520), 70],
    [...Bt(-700, -500), 42],
    [...Bt(980, 240), 26],
    [...Bt(-200, 120), 18],
    [...Bt(150, -700), 120],
  ].map(([t, e, o]) => [t, e, o]);
function Yi(t, e) {
  const o = t.poly.map(([u, l]) => ea(u, l)),
    [n, s] = ea(t.c[0], t.c[1]);
  if (n < q0 - 80 || n > j0 + 40) return null;
  const a = s >= 0 ? 1 : -1,
    r = e === "L" ? 14 : 0,
    i = o.map(([u, l]) => {
      const f = Math.max(q0, Math.min(j0, u)),
        y = Math.max(0, R0(f) - r),
        b = Math.min(sn(f), y);
      let m = l;
      return (
        e === "M"
          ? (m = Math.max(-b, Math.min(b, l)))
          : (a * m < b && (m = a * b), a * m > y && (m = a * y)),
        [f, m]
      );
    }),
    c = on(o),
    d = on(i);
  if (d < 0.14 * c || d < 40) return null;
  const h = i.map(([u, l]) => Bt(u, l));
  return {
    ...t,
    poly: h,
    onEdge: d < c * 0.97,
    lc: [n, s],
  };
}
function Nn(t, e, o) {
  const n = [],
    s = new Set(),
    a = 260;
  for (let r = q0; r < j0; r += a) {
    const i = Math.min(j0, r + a),
      c =
        (o === "M"
          ? Math.max(sn(r), sn(i))
          : Math.max(R0(r), R0(i), R0((r + i) / 2))) + 30,
      d = [Bt(r - 30, -c), Bt(r - 30, c), Bt(i + 30, -c), Bt(i + 30, c)],
      h = {
        x0: Math.max(t.x0, Math.min(...d.map((u) => u[0]))),
        x1: Math.min(t.x1, Math.max(...d.map((u) => u[0]))),
        y0: Math.max(t.y0, Math.min(...d.map((u) => u[1]))),
        y1: Math.min(t.y1, Math.max(...d.map((u) => u[1]))),
      };
    if (!(h.x0 >= h.x1 || h.y0 >= h.y1))
      for (const u of p0(h, e)) {
        const l = u.i * 100003 + u.j;
        if (s.has(l)) continue;
        s.add(l);
        const f = Yi(u, o);
        f && n.push(f);
      }
  }
  return n;
}
const Mn = new Map();
function zn(t, e) {
  const o = `${e ? "U" : "L"}${t.i},${t.j}`;
  let n = Mn.get(o);
  if (n) return n;
  Mn.size > 6e3 && Mn.clear();
  const s = tt(t.seed),
    a = _t(t.poly, 2.9),
    r = a.length,
    i = [0];
  for (let M = 0; M < r; M++) {
    const [g, w] = a[M],
      [$, L] = a[(M + 1) % r];
    i.push(i[M] + Math.hypot($ - g, L - w));
  }
  const c = i[r];
  let d = 0;
  for (let M = 0; M < r; M++)
    d += a[M][0] * a[(M + 1) % r][1] - a[(M + 1) % r][0] * a[M][1];
  const h = d >= 0 ? 1 : -1,
    u = ((t.i + t.j) & 1 ? 1 : -1) * (s() < 0.18 ? -1 : 1),
    l = v(s, 3, 9.5) * (e ? 1 : 0.8),
    f = Math.max(6, Math.round((c / 4.6) * v(s, 0.95, 1.35) * (e ? 1 : 0.8))),
    y = [];
  for (let M = 0; M < f; M++) {
    const g = s() < 0.36;
    y.push({
      s0: ((M + s() * 0.6) / f) * c,
      off: g ? v(s, 2.6, 4.6) : v(s, -0.2, 0.9),
      k: g ? v(s, 0.8, 0.95) : v(s, 0.97, 1.03),
      a: v(s, 2.5, 3.4),
      b: v(s, 1.6, 2.3),
      ph: s() * 6.28,
      tone: Math.floor(s() * 3),
      stuck: s() < 0.06,
    });
  }
  let b = null;
  if (s() < 0.62) {
    const M = s() * c,
      [g, w, $] = _i(
        {
          ring: a,
          cum: i,
        },
        M,
      ),
      L = 4.6;
    b = {
      x: g - Math.sin($) * L * h,
      y: w + Math.cos($) * L * h,
      rx: v(s, 4.2, 5.4),
      ry: v(s, 3.2, 4),
      rot: $,
    };
  }
  const m = [],
    x = Ie(t.poly),
    k = e ? Math.floor(v(s, 4, 12)) : 0;
  for (let M = 0; M < k; M++) {
    const g = x[0] + v(s, -0.42, 0.42) * 55,
      w = x[1] + v(s, -0.42, 0.42) * 22;
    Lt(g, w, a) && m.push([g, w, v(s, 2.2, 2.8), s() * 3]);
  }
  return (
    (n = {
      ring: a,
      cum: i,
      P: c,
      orient: h,
      dir: u,
      speed: l,
      chl: y,
      nuc: b,
      top: m,
      c: x,
    }),
    Mn.set(o, n),
    n
  );
}
function _i(t, e) {
  const { ring: o, cum: n } = t,
    s = n[n.length - 1];
  e = ((e % s) + s) % s;
  let a = 0;
  for (; a < o.length - 1 && n[a + 1] < e;) a++;
  const [r, i] = o[a],
    [c, d] = o[(a + 1) % o.length],
    h = n[a + 1] - n[a] || 1,
    u = (e - n[a]) / h;
  return [r + (c - r) * u, i + (d - i) * u, Math.atan2(d - i, c - r)];
}
const Wn = [
  [0.47, 0.71, 0.33],
  [0.53, 0.75, 0.38],
  [0.42, 0.66, 0.3],
];
function ys(t, e, o) {
  for (const n of e.chl) {
    const s =
        n.s0 +
        (n.stuck ? 0 : e.dir * e.speed * n.k * o) +
        0.5 * Math.sin(o * 1.3 + n.ph),
      [a, r, i] = _i(e, s),
      c = n.off + 0.35 * Math.sin(o * 1.9 + n.ph * 2),
      d = a - Math.sin(i) * c * e.orient,
      h = r + Math.cos(i) * c * e.orient,
      u = Math.abs(Math.cos(i)),
      l = Math.abs(Math.sin(i)),
      f = n.a * u + n.b * l,
      y = n.a * l + n.b * u,
      b = t[n.tone];
    (b.moveTo(d + f, h), b.ellipse(d, h, f, y, 0, 0, Math.PI * 2));
  }
}
function c1() {
  return pe("elodeaDots", 128, (t, e) => {
    ((t.fillStyle = "#fff"), t.fillRect(0, 0, e, e));
    const o = tt(77);
    for (let n = 0; n < 260; n++) {
      const s = o() * e,
        a = o() * e,
        r = 2.6 + o() * 1.2,
        i = o() * 3,
        c = 0.85 + o() * 0.3;
      t.fillStyle = `rgb(${Math.round(118 * c)},${Math.round(178 * c)},${Math.round(92 * c)})`;
      for (const d of [-e, 0, e])
        for (const h of [-e, 0, e])
          (t.beginPath(),
            t.ellipse(s + d, a + h, r, r * 0.7, i, 0, 7),
            t.fill());
    }
  });
}
function nr(t) {
  const e = [];
  for (const o of [-1, 1]) {
    let n = q0 + 40 + (o > 0 ? 17 : 41);
    const s = tt(o > 0 ? 501 : 502);
    for (; n < j0 - 25;) {
      const a = R0(n),
        r = v(s, 18, 34) * (0.6 + 0.4 * Math.min(1, a / 200)),
        i = v(s, 5, 8),
        c = Bt(n - i, o * R0(n - i)),
        d = Bt(n + i, o * R0(n + i)),
        h = Bt(n + r * 0.6, o * (a + r * 0.82)),
        u = Bt(n - i * 0.6 + r * 0.18, o * (a + r * 0.4)),
        l = Bt(n + i * 0.7 + r * 0.3, o * (a + r * 0.32)),
        f = Bt(n + r * 0.5, o * (a + r * 0.7));
      (e.push({
        poly: [c, u, h, l, d],
        tip: f,
        x: (c[0] + h[0]) / 2,
        y: (c[1] + h[1]) / 2,
        brown: s() < 0.35,
      }),
        (n += v(s, 55, 110)));
    }
  }
  return e.filter((o) => et(t, o.x, o.y, 40));
}
function l1(t = 20) {
  const e = [];
  for (let o = q0; o <= j0; o += t) e.push(Bt(o, R0(o)));
  e.push(Bt(j0, 0));
  for (let o = j0; o >= q0; o -= t) e.push(Bt(o, -R0(o)));
  return e;
}
const Kn = l1(25),
  h1 = [1, -1].map((t) => {
    const e = [];
    for (let o = q0; o <= j0; o += 25)
      e.push(Bt(o, t * Math.min(sn(o), R0(o))));
    for (let o = j0; o >= q0; o -= 25) e.push(Bt(o, t * R0(o)));
    return e;
  }),
  Hi = (() => {
    const t = Kn.map((o) => o[0]),
      e = Kn.map((o) => o[1]);
    return {
      x0: Math.min(...t) - 60,
      y0: Math.min(...e) - 60,
      x1: Math.max(...t) + 60,
      y1: Math.max(...e) + 60,
    };
  })(),
  Gi = (t, e) => t.x0 < e.x1 && t.x1 > e.x0 && t.y0 < e.y1 && t.y1 > e.y0;
let sr = "",
  ar = [];
function f1(t) {
  const o = {
      x0: Math.floor(t.x0 / 200) * 200,
      y0: Math.floor(t.y0 / 200) * 200,
      x1: Math.ceil(t.x1 / 200) * 200,
      y1: Math.ceil(t.y1 / 200) * 200,
    },
    n = `${o.x0},${o.y0},${o.x1},${o.y1}`;
  return (
    n !== sr &&
      ((sr = n),
      (ar = Gi(o, Hi)
        ? Nn(o, oa, "U").map((s) => ({
            cell: s,
            L: zn(s, !0),
          }))
        : [])),
    ar
  );
}
const d1 = {
    id: "elodea",
    name: translate("黑藻叶片"),
    slideLabel: [translate("黑藻叶"), translate("临时装片")],
    latin: "Hydrilla verticillata",
    layers: [0, 16, 30],
    dynZ: 16,
    extent: 1600,
    start: Bt(160, 175),
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(70,140,50,.85)"),
        t.beginPath(),
        Kn.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
        t.fill(),
        t.restore());
    },
    render(t, e, o) {
      const n = (o.objMag ?? 10) >= 40,
        s = t.upp,
        a = At();
      if (Gi(e, Hi)) {
        const r = wt(31, {
            n: 900,
            dark: 0.35,
            r1: 1.6,
          }),
          i = c1(),
          c = s <= 1.3,
          d = s <= 3.6;
        if (d)
          for (const h of Nn(e, r1, "L")) {
            const u = it(h.poly);
            (a.add(
              "lw",
              (l) => {
                (t.layer(0), t.strokeBoth(l, 1.1, [0.84, 0.88, 0.82], 0.5));
              },
              u,
            ),
              c ? ys(rr(a, t, 0), zn(h, !1), 0) : ir(a, t, h, 0, s <= 2.2, i));
          }
        else
          for (const h of h1)
            (t.layer(0),
              t.abs(it(h), [0.6, 0.79, 0.48]),
              t.layer(1),
              t.both(it(h), [0.78, 0.89, 0.7], 0.2));
        for (const h of Nn(e, i1, "M")) {
          const u = it(h.poly);
          a.add(
            "mw",
            (y) => {
              for (const b of [0, 1, 2])
                (t.layer(b), t.strokeBoth(y, 1.3, [0.8, 0.84, 0.78], 0.65));
            },
            u,
          );
          const l = tt(h.seed),
            f = _t(h.poly, 1.6);
          if (
            !(f.length < 3) &&
            (a.add(
              "mf",
              (y) => {
                (t.layer(1), t.both(y, [0.93, 0.96, 0.9], 0.15));
              },
              it(f),
            ),
            c)
          ) {
            const y = Ie(h.poly),
              b = Math.floor(v(l, 4, 14));
            for (let m = 0; m < b; m++) {
              const x = v(l, -0.45, 0.45) * 130,
                k = (l() < 0.5 ? -1 : 1) * v(l, 1.5, 3.5),
                M = y[0] + ko * x - Po * k,
                g = y[1] + Po * x + ko * k;
              a.add(
                "mc",
                (w) => {
                  (t.layer(1), t.both(w, G(Wn[1], [1, 1, 1], 0.25), 0.4));
                },
                U(M, g, 2.5, 1.7),
              );
            }
          }
        }
        for (const h of Nn(e, oa, "U")) {
          const u = it(h.poly);
          if (
            (a.add(
              "uw",
              (m) => {
                for (const x of [1, 2])
                  (t.layer(x), t.strokeBoth(m, 1.15, [0.83, 0.87, 0.81], 0.6));
                s < 2 &&
                  (t.layer(1), t.strokeAbs(m, 0.45, [0.7, 0.75, 0.68], 0.7));
              },
              u,
            ),
            h.onEdge &&
              a.add(
                "edge",
                (m) => {
                  (t.layer(1), t.strokeBoth(m, 2.2, [0.86, 0.88, 0.84], 0.5));
                },
                u,
              ),
            !c)
          ) {
            d && ir(a, t, h, 1, s <= 2.2, i);
            continue;
          }
          const l = zn(h, !0),
            f = it(_t(h.poly, 0.8)),
            y = _t(h.poly, 5.5);
          if (
            (y.length >= 3 && it(y.slice().reverse(), f),
            a.add(
              "cy",
              (m) => {
                (t.layer(1),
                  t.both(m, [0.965, 0.97, 0.955], 0.14),
                  t.pattern(m, r, 0.3, 0.35));
              },
              f,
            ),
            n || ys(rr(a, t, 1), l, 0),
            l.top.length)
          ) {
            const m = a.path("tc", (x) => {
              (t.layer(2), t.both(x, Wn[1], 0.45));
            });
            for (const [x, k, M] of l.top)
              (m.moveTo(x + M, k),
                m.ellipse(x, k, M, M * 0.88, 0, 0, Math.PI * 2));
          }
          const b = l.nuc;
          b &&
            (a.add(
              "nu",
              (m) => {
                (t.layer(1),
                  t.both(m, [0.95, 0.955, 0.94], 0.55),
                  t.strokeBoth(m, 0.5, [0.86, 0.88, 0.85], 0.3));
              },
              U(b.x, b.y, b.rx, b.ry, b.rot),
            ),
            a.add(
              "nl",
              (m) => {
                (t.layer(1), t.both(m, [0.9, 0.91, 0.89], 0.35));
              },
              U(b.x + 0.6, b.y - 0.4, 1.3, 1.2),
            ));
        }
        for (const h of nr(e)) {
          const u = it(h.poly);
          (a.add(
            "th",
            (l) => {
              for (const f of [1, 2])
                (t.layer(f),
                  t.both(l, [0.95, 0.96, 0.94], 0.35),
                  t.strokeBoth(l, 1.3, [0.8, 0.83, 0.78], 0.7));
            },
            u,
          ),
            h.brown &&
              a.add(
                "tb",
                (l) => {
                  (t.layer(1), t.abs(l, [0.8, 0.62, 0.42], 0.9));
                },
                U(h.tip[0], h.tip[1], 2.2, 2.2),
              ));
        }
        (a.flush(),
          t.layer(1),
          t.strokeBoth(it(Kn), 1.4, [0.82, 0.85, 0.8], 0.5));
      }
      Wt(t, e, {
        seed: 72,
        density: 0.45,
        size: 3.5,
        color: [0.6, 0.56, 0.46],
      });
      for (const [r, i, c] of or)
        et(e, r, i, c) && (t.layer(c > 60 ? 2 : 1), Ht(t, r, i, c));
    },
    pick(t, e, o) {
      for (const [h, u, l] of or)
        if (Math.hypot(t - h, e - u) < l) return translate("气泡");
      const [n, s] = ea(t, e);
      if (n < q0 || n > j0) return null;
      const a = R0(n);
      if (Math.abs(s) > a) {
        for (const h of nr({
          x0: t - 2,
          y0: e - 2,
          x1: t + 2,
          y1: e + 2,
        }))
          if (Lt(t, e, h.poly)) return translate("叶缘的单细胞刺");
        return null;
      }
      if (Math.abs(s) < sn(n)) return translate("中脉（狭长细胞）");
      const r = ts(t, e, oa),
        i = r && Yi(r, "U");
      if (!i) return translate("叶片细胞");
      const c = Math.min(
        ...i.poly.map((h, u) => {
          const l = i.poly[(u + 1) % i.poly.length],
            f = l[0] - h[0],
            y = l[1] - h[1],
            b = Math.max(
              0,
              Math.min(
                1,
                ((t - h[0]) * f + (e - h[1]) * y) / (f * f + y * y || 1),
              ),
            );
          return Math.hypot(t - h[0] - f * b, e - h[1] - y * b);
        }),
      );
      if (c < 1.2) return translate("细胞壁");
      const d = zn(i, !0);
      return d.nuc &&
        Math.hypot((t - d.nuc.x) / d.nuc.rx, (e - d.nuc.y) / d.nuc.ry) < 1.1
        ? translate("细胞核")
        : c < 6
          ? (o?.objMag ?? 10) >= 40
            ? translate("叶绿体（随细胞质流动）")
            : translate("叶绿体")
          : translate("液泡");
    },
    dynamic: {
      init: () => ({
        t: 0,
        mag: 10,
        center: null,
      }),
      step(t, e, o) {
        ((t.t += Math.min(e, 0.1)), (t.mag = o.objMag));
      },
      render(t, e, o, n) {
        if ((n.objMag ?? 10) < 40) return;
        const s = (e.x0 + e.x1) / 2,
          a = (e.y0 + e.y1) / 2,
          r = ((e.x1 - e.x0) / 2.1) * 1.06 + 40,
          i = [new Path2D(), new Path2D(), new Path2D()];
        let c = null;
        for (const { cell: d, L: h } of f1(e))
          Math.hypot(h.c[0] - s, h.c[1] - a) > r ||
            (ys(i, h, o.t), !c && Lt(s, a, d.poly) && (c = h));
        ((o.center = c), i.forEach((d, h) => t.both(d, Wn[h], 0.55)));
      },
      info(t) {
        if (t.mag < 40)
          return [[translate("提示"), translate("换 40× 观察胞质环流")]];
        const e = t.center;
        if (!e) return [[translate("视野中央"), translate("没有叶片细胞")]];
        const o = e.dir * e.orient > 0;
        return [
          [
            translate("中央细胞环流方向"),
            o ? translate("顺时针") : translate("逆时针"),
          ],
          [translate("叶绿体移动速度"), `${e.speed.toFixed(1)} µm/s`],
          [translate("环绕一周约"), `${Math.round(e.P / e.speed)} s`],
          [translate("该细胞叶绿体数"), `${e.chl.length}`],
        ];
      },
    },
    info() {
      return translate(
        "胞质环流：活细胞的细胞质沿着中央大液泡的周围循环流动，叶绿体随之移动，可作为流动的标志。显微镜成倒像（旋转 180°），不改变环流方向——视野中看到顺时针，实际也是顺时针。相邻细胞的流向常常相反；温度适当升高、光照增强时流动加快。",
      );
    },
  },
  rr = (t, e, o) =>
    Wn.map((n, s) =>
      t.path(`chl${o}${s}`, (a) => {
        (e.layer(o), e.both(a, n, 0.55));
      }),
    );
function ir(t, e, o, n, s, a) {
  const r = _t(o.poly, 0.7),
    i = _t(o.poly, 6),
    c = it(r);
  (i.length >= 3 && it(i.slice().reverse(), c),
    s
      ? t.add(
          `rp${n}`,
          (d) => {
            (e.layer(n), e.pattern(d, a, 0.55, 0.95));
          },
          c,
        )
      : t.add(
          `rf${n}`,
          (d) => {
            (e.layer(n), e.both(d, [0.54, 0.75, 0.44], 0.3));
          },
          c,
        ),
    i.length >= 3 &&
      t.add(
        `ri${n}`,
        (d) => {
          (e.layer(n), e.abs(d, [0.86, 0.93, 0.82]));
        },
        it(i),
      ));
}
const es = {
    sx: 50,
    sy: 50,
    jitter: 0.85,
    stagger: 0.5,
    seed: 9301,
  },
  u0 = Mt(0, 0, 2900, {
    n: 56,
    amp: 0.2,
    seed: 23,
    sx: 1.3,
    sy: 0.82,
    rot: 0.15,
    freq: 3.1,
  }),
  cr = [
    [2300, -900, 160],
    [-1900, 1100, 75],
    [600, 1700, 48],
    [-600, -1500, 260],
  ],
  xn = (() => {
    const t = u0.map((o) => o[0]),
      e = u0.map((o) => o[1]);
    return {
      x0: Math.min(...t),
      y0: Math.min(...e),
      x1: Math.max(...t),
      y1: Math.max(...e),
    };
  })(),
  lr = (t, e) => k0(t, e, es.seed + 55) / 4294967296;
function Vo(t, e) {
  const o = lr(t, e);
  if (o >= 0.62) return !1;
  for (const [n, s] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ])
    if (lr(t + n, e + s) < o) return !1;
  return !0;
}
const M0 = 1e3,
  gn = new Map();
function u1(t, e) {
  const o = `${t},${e}`;
  let n = gn.get(o);
  if (n) return n;
  gn.size > 160 && gn.clear();
  const s = t * M0,
    a = e * M0,
    r = s + M0 / 2,
    i = a + M0 / 2;
  return (
    !Lt(r, i, u0) && os(r, i) > M0 * 0.75
      ? (n = [])
      : (n = p0(
          {
            x0: s,
            y0: a,
            x1: s + M0,
            y1: a + M0,
          },
          es,
        ).filter(
          (c) =>
            c.c[0] >= s &&
            c.c[0] < s + M0 &&
            c.c[1] >= a &&
            c.c[1] < a + M0 &&
            Lt(c.c[0], c.c[1], u0),
        )),
    gn.set(o, n),
    n
  );
}
function p1(t) {
  const e = [];
  for (
    let n = Math.floor((t.y0 - 60) / M0);
    n <= Math.floor((t.y1 + 60) / M0);
    n++
  )
    for (
      let s = Math.floor((t.x0 - 60) / M0);
      s <= Math.floor((t.x1 + 60) / M0);
      s++
    )
      for (const a of u1(s, n)) {
        const [r, i, c, d] = a.bbox;
        c >= t.x0 && r <= t.x1 && d >= t.y0 && i <= t.y1 && e.push(a);
      }
  return e;
}
function y1(t) {
  const e = t.length;
  let o = 0;
  for (let s = 0; s < e; s++) {
    const a = t[s],
      r = t[(s + e - 1) % e];
    if (Math.hypot(a[0] - r[0], a[1] - r[1]) >= 16) {
      o = s;
      break;
    }
  }
  const n = [];
  for (let s = 0; s < e; s++) {
    const a = t[(o + s) % e],
      r = n[n.length - 1];
    r && Math.hypot(a[0] - r[r.length - 1][0], a[1] - r[r.length - 1][1]) < 16
      ? r.push(a)
      : n.push([a]);
  }
  return n;
}
const Xi = (t, e) => k0(t, e, 4242) / 4294967296 < 0.08;
function wn(t, e, o) {
  const n = Math.cos(o),
    s = Math.sin(o);
  let a = 1 / 0;
  for (let r = 0; r < t.length; r++) {
    const [i, c] = t[r],
      [d, h] = t[(r + 1) % t.length],
      u = d - i,
      l = h - c,
      f = n * l - s * u;
    if (Math.abs(f) < 1e-9) continue;
    const y = ((i - e[0]) * l - (c - e[1]) * u) / f,
      b = ((i - e[0]) * s - (c - e[1]) * n) / f;
    y > 0 && b >= 0 && b <= 1 && (a = Math.min(a, y));
  }
  return a;
}
const vn = new Map();
function hr(t) {
  const e = `${t.i},${t.j}`;
  let o = vn.get(e);
  if (o) return o;
  vn.size > 8e3 && vn.clear();
  const n = tt(t.seed),
    s = Ie(t.poly),
    a = n() * Math.PI;
  let r = v(n, 21, 25),
    i = r * v(n, 0.62, 0.72);
  const c = Math.min(
      1,
      (wn(t.poly, s, a) - 3) / r,
      (wn(t.poly, s, a + Math.PI) - 3) / r,
      (wn(t.poly, s, a + Math.PI / 2) - 3) / i,
      (wn(t.poly, s, a - Math.PI / 2) - 3) / i,
    ),
    d = Math.max(0.74, c);
  ((r *= d), (i *= d));
  const h = n() < 0.82;
  return (
    (o = {
      c: s,
      ang: a,
      rx: r,
      ry: i,
      pl: r * v(n, 0.52, 0.62),
      w: h ? v(n, 1.2, 3.4) * d : 0,
      air: Xi(t.i, t.j),
      seed: Math.floor(n() * 1e9),
    }),
    vn.set(e, o),
    o
  );
}
const bo = (t, e) =>
    Math.abs(e) < t.pl ? t.w * Math.sqrt(1 - (e / t.pl) ** 2) : 0,
  fr = (t, e) => t.ry * Math.sqrt(Math.max(0, 1 - (e / t.rx) ** 2));
function $o(t, e, o) {
  const n = Math.cos(t.ang),
    s = Math.sin(t.ang);
  return [t.c[0] + e * n - o * s, t.c[1] + e * s + o * n];
}
function b1(t, e, o = 16) {
  const n = [];
  for (let s = 0; s <= o; s++) {
    const a = (s / o) * Math.PI;
    n.push($o(t, t.rx * Math.cos(a), e * t.ry * Math.sin(a)));
  }
  for (let s = 1; s < o; s++) {
    const a = -t.rx + (2 * t.rx * s) / o;
    n.push($o(t, a, e * bo(t, a)));
  }
  return n;
}
function m1(t, e = 10) {
  const o = [];
  for (let n = 0; n <= e; n++) {
    const s = -t.pl + (2 * t.pl * n) / e;
    o.push($o(t, s, bo(t, s)));
  }
  for (let n = e - 1; n > 0; n--) {
    const s = -t.pl + (2 * t.pl * n) / e;
    o.push($o(t, s, -bo(t, s)));
  }
  return o;
}
function dr(t, e) {
  const o = Math.cos(-t.ang),
    n = Math.sin(-t.ang),
    s = e[0] - t.c[0],
    a = e[1] - t.c[1],
    r = s * o - a * n,
    i = s * n + a * o,
    c = 1 / Math.sqrt((r / t.rx) ** 2 + (i / t.ry) ** 2);
  return [t.c[0] + s * c, t.c[1] + a * c];
}
function Fn(t, e, o, n = 1) {
  let s = t,
    a = e,
    r = !1;
  (e[0] < t[0] || (e[0] === t[0] && e[1] < t[1])) &&
    ((s = e), (a = t), (r = !0));
  const i = a[0] - s[0],
    c = a[1] - s[1],
    d = Math.hypot(i, c);
  if (d < 1e-6) return [t, e];
  const h = (s[0] + a[0]) / 2,
    u = (s[1] + a[1]) / 2,
    l = Math.max(1, Math.round(d / (15.5 + 3.5 * kt(h / 37, u / 37, 3)))),
    f = Math.min(d * 0.2, 6.5) * (0.7 + 0.3 * kt(h / 53, u / 53, 5)) * n,
    y = kt(h / 29, u / 29, 8) > 0 ? 1 : -1,
    b = 0.35 * kt(h / 41, u / 41, 11),
    m = -c / d,
    x = i / d,
    k = Math.max(2, Math.ceil(d / o)),
    M = [];
  for (let g = 0; g <= k; g++) {
    const w = g / k,
      $ =
        d < 7
          ? 0
          : y *
            f *
            (Math.sin(Math.PI * l * w) + b * Math.sin(Math.PI * (l + 1) * w));
    M.push([s[0] + i * w + m * $, s[1] + c * w + x * $]);
  }
  return r ? M.reverse() : M;
}
const ur = (t, e) =>
    `${Math.round((t[0] + e[0]) * 2)},${Math.round((t[1] + e[1]) * 2)}`,
  Vi = (t, e) => !(e[0] < t[0] || (e[0] === t[0] && e[1] < t[1]));
function pr(t) {
  const e = jt(t.i, t.j, 9333),
    o = t.c;
  return {
    x: o[0] + v(e, -9, 9),
    y: o[1] + v(e, -9, 9),
    rx: v(e, 5, 6.5),
    ry: v(e, 4, 5.2),
    layer: e() < 0.75 ? 1 : 0,
  };
}
function os(t, e) {
  let o = 1 / 0;
  for (let n = 0; n < u0.length; n++) {
    const [s, a] = u0[n],
      [r, i] = u0[(n + 1) % u0.length],
      c = r - s,
      d = i - a,
      h = Math.max(
        0,
        Math.min(1, ((t - s) * c + (e - a) * d) / (c * c + d * d || 1)),
      );
    o = Math.min(o, Math.hypot(t - s - c * h, e - a - d * h));
  }
  return o;
}
const M1 = (t, e) =>
  Lt(t, e, u0) &&
  kt(Math.atan2(e, t / 1.3) * 3 + 5, 2.5, 61) > 0.15 &&
  os(t, e) < 170;
function yr(t) {
  const e = [];
  return (
    Rt(t, 70, 40, 9377, (o, n, s) => {
      const a = 1 + Math.floor(s() * 2);
      for (let r = 0; r < a; r++) {
        const i = o + s() * 70,
          c = n + s() * 70,
          d = v(s, 13, 22),
          h = Math.floor(s() * 1e9);
        !et(t, i, c, d) ||
          !M1(i, c) ||
          e.push({
            x: i,
            y: c,
            rad: d,
            seed: h,
            poly: Mt(i, c, d, {
              n: 12,
              amp: 0.22,
              seed: h,
              sx: v(s, 0.8, 1.25),
            }),
          });
      }
    }),
    e
  );
}
const x1 = {
  id: "stomata",
  name: translate("蚕豆叶下表皮"),
  slideLabel: [translate("蚕豆叶"), translate("下表皮")],
  latin: "Vicia faba",
  layers: [0, 5, 10],
  dynZ: 5,
  extent: 3800,
  start: [420, -260],
  thumb(t, e) {
    const o = e / 22e3;
    (t.save(),
      t.translate(e / 2, e / 2),
      t.scale(o, o),
      (t.fillStyle = "rgba(225,232,215,.6)"),
      t.beginPath(),
      u0.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
      t.fill(),
      (t.strokeStyle = "rgba(90,150,70,.6)"),
      (t.lineWidth = 220),
      t.setLineDash([900, 1400]),
      t.stroke(),
      t.restore());
  },
  render(t, e, o) {
    const n = t.upp,
      s = At(),
      a = {
        x0: Math.max(e.x0, xn.x0),
        y0: Math.max(e.y0, xn.y0),
        x1: Math.min(e.x1, xn.x1),
        y1: Math.min(e.y1, xn.y1),
      };
    if (a.x0 < a.x1 && a.y0 < a.y1) {
      const r = n <= 1.3,
        i = n > 3.5,
        c = Math.max(1.4, n * 1.1);
      if (i) v1(t, s, a);
      else {
        const h = p1(a),
          u = new Set(),
          l = [];
        for (const b of h)
          if (Vo(b.i, b.j)) {
            l.push([b, hr(b)]);
            for (let m = 0; m < b.poly.length; m++)
              u.add(ur(b.poly[m], b.poly[(m + 1) % b.poly.length]));
          }
        const f = (b, m) => z0(o.reagent("iodine", b, m), 6),
          y = (b) => G([0.8, 0.82, 0.79], [0.78, 0.66, 0.42], b * 0.6);
        for (const b of h) {
          if (Vo(b.i, b.j)) continue;
          const m = f(b.c[0], b.c[1]),
            x = new Path2D();
          for (let k = 0; k < b.poly.length; k++) {
            const M = b.poly[k],
              g = b.poly[(k + 1) % b.poly.length];
            if (!Vi(M, g) || u.has(ur(M, g))) continue;
            (i ? [M, g] : Fn(M, g, c)).forEach(([$, L], j) =>
              j ? x.lineTo($, L) : x.moveTo($, L),
            );
          }
          if (
            (s.add(
              `w${m}`,
              (k) => {
                for (let M = 0; M < 3; M++)
                  (t.layer(M),
                    t.strokeBoth(
                      k,
                      i ? 1.4 : 1.6,
                      y(m),
                      0.7,
                      M === 1 ? 1 : 0.55,
                    ),
                    i ||
                      t.strokeAbs(
                        k,
                        0.5,
                        G([0.62, 0.64, 0.6], [0.55, 0.42, 0.2], m),
                        M === 1 ? 0.8 : 0.3,
                      ));
              },
              x,
            ),
            !i)
          ) {
            const k = pr(b),
              M = G([0.95, 0.95, 0.935], [0.72, 0.55, 0.28], m),
              g = s.path(`n${k.layer}${m}`, (w) => {
                (t.layer(k.layer),
                  t.both(w, M, 0.45),
                  r &&
                    t.strokeAbs(
                      w,
                      0.5,
                      G([0.82, 0.83, 0.8], [0.5, 0.35, 0.15], m),
                      0.8,
                    ));
              });
            if (
              (g.moveTo(k.x + k.rx, k.y),
              g.ellipse(k.x, k.y, k.rx, k.ry, 0, 0, Math.PI * 2),
              r)
            ) {
              const w = s.path(`nl${k.layer}${m}`, ($) => {
                (t.layer(k.layer),
                  t.both($, G([0.9, 0.9, 0.88], [0.55, 0.38, 0.15], m), 0.4));
              });
              (w.moveTo(k.x + 1.6, k.y - 0.5),
                w.arc(k.x, k.y - 0.5, 1.6, 0, Math.PI * 2));
            }
          }
        }
        for (const [b, m] of l) {
          const x = f(m.c[0], m.c[1]),
            k = new Path2D(),
            M = (S, R, C) =>
              (i ? [S, R] : Fn(S, R, c, C)).forEach(([A, D], W) =>
                W ? k.lineTo(A, D) : k.moveTo(A, D),
              );
          for (const S of y1(b.poly)) {
            if (S.length === 1) {
              M(S[0], dr(m, S[0]), 0.5);
              continue;
            }
            const R = [
                S.reduce((A, D) => A + D[0], 0) / S.length,
                S.reduce((A, D) => A + D[1], 0) / S.length,
              ],
              C = [
                m.c[0] + (R[0] - m.c[0]) * 1.08,
                m.c[1] + (R[1] - m.c[1]) * 1.08,
              ];
            for (const A of S) M(A, C, 0.4);
            M(C, dr(m, C), 0.4);
          }
          if (
            (s.add(
              `w${x}`,
              (S) => {
                for (let R = 0; R < 3; R++)
                  (t.layer(R), t.strokeBoth(S, i ? 1.4 : 1.6, y(x), 0.7));
              },
              k,
            ),
            m.air)
          ) {
            const S = tt(m.seed),
              R = Mt(m.c[0], m.c[1], m.rx * v(S, 0.9, 1.5), {
                n: 14,
                amp: 0.25,
                seed: m.seed,
                sy: 0.75,
                rot: m.ang + v(S, -0.5, 0.5),
              });
            s.add(
              "air",
              (C) => {
                (t.layer(0), t.both(C, [0.42, 0.43, 0.44], 1.2));
              },
              yt(R),
            );
          }
          const g = i ? 8 : 16,
            w = G(
              G([0.84, 0.92, 0.77], [0.72, 0.84, 0.62], i ? 0.6 : r ? 0 : 0.35),
              [0.78, 0.7, 0.5],
              x * 0.5,
            );
          for (const S of [1, -1]) {
            const R = it(b1(m, S, g));
            (s.add(
              `g${x}`,
              (C) => {
                (t.layer(1),
                  t.both(C, w, 0.55),
                  t.layer(0),
                  t.phase(C, 0.25),
                  t.layer(2),
                  t.phase(C, 0.25));
              },
              R,
            ),
              s.add(
                `go${x}`,
                (C) => {
                  for (let A = 0; A < 3; A++)
                    (t.layer(A),
                      t.strokeBoth(
                        C,
                        1.5,
                        G(y(x), [0.6, 0.64, 0.56], A === 1 ? 0.5 : 0),
                        0.75,
                      ));
                },
                R,
              ));
          }
          const $ = it(m1(m, i ? 4 : 12));
          if (
            (s.add(
              "pv",
              (S) => {
                (t.layer(1),
                  t.strokeBoth(S, i ? 2.6 : 3.2, [0.8, 0.82, 0.77], 0.9),
                  t.layer(2),
                  t.strokeBoth(S, 1.4, [0.55, 0.56, 0.52], 1.1));
              },
              $,
            ),
            m.w > 0 &&
              s.add(
                "po",
                (S) => {
                  (t.layer(1), t.abs(S, [0.86, 0.87, 0.86]));
                },
                $,
              ),
            i)
          )
            continue;
          const L = tt(m.seed + 1),
            j = G([0.5, 0.72, 0.4], [0.28, 0.27, 0.36], x),
            T = s.path(`gc${x}`, (S) => {
              (t.layer(1), t.both(S, j, 0.4));
            });
          for (const S of [1, -1]) {
            const R = r ? Math.floor(v(L, 9, 15)) : 5;
            for (let N = 0; N < R; N++) {
              const V = v(L, -0.78, 0.78) * m.rx,
                st = bo(m, V) + 2.6,
                ft = fr(m, V) - 1.8;
              if (ft <= st) continue;
              const [F, H] = $o(m, V, S * v(L, st, ft)),
                K = r ? v(L, 1.1, 1.6) : 1.6;
              (T.moveTo(F + K, H), T.arc(F, H, K, 0, Math.PI * 2));
            }
            if (!r) continue;
            const C = (m.w + 2 + fr(m, 0)) / 2,
              [A, D] = $o(m, v(L, -2, 2), S * C),
              W = G([0.93, 0.94, 0.92], [0.7, 0.52, 0.25], x),
              O = s.path(`gn${x}`, (N) => {
                (t.layer(1), t.both(N, W, 0.5));
              });
            (O.moveTo(A + 2.8, D),
              O.ellipse(A, D, 2.8, 2.4, 0, 0, Math.PI * 2));
          }
        }
      }
      if (k1(a))
        for (const h of yr(a)) {
          const u = yt(h.poly);
          if (
            (s.add(
              "ms",
              (b) => {
                (t.layer(0),
                  t.both(b, [0.66, 0.82, 0.56], 0.45),
                  t.strokeBoth(b, 1, [0.78, 0.84, 0.74], 0.4));
              },
              u,
            ),
            !r)
          )
            continue;
          const l = tt(h.seed),
            f = s.path("mc", (b) => {
              (t.layer(0), t.both(b, [0.42, 0.66, 0.32], 0.45));
            }),
            y = 10 + Math.floor(l() * 14);
          for (let b = 0; b < y; b++) {
            const m = l() * Math.PI * 2,
              x = Math.sqrt(l()) * h.rad * 0.78,
              k = h.x + Math.cos(m) * x,
              M = h.y + Math.sin(m) * x,
              g = v(l, 1.8, 2.5);
            (f.moveTo(k + g, M), f.arc(k, M, g, 0, Math.PI * 2));
          }
        }
      s.flush();
      const d = yt(u0);
      for (let h = 0; h < 3; h++)
        (t.layer(h), t.strokeBoth(d, 3, [0.78, 0.79, 0.76], 0.7));
    }
    Wt(t, e, {
      seed: 93,
      density: 0.5,
      size: 3.5,
    });
    for (const [r, i, c] of cr) et(e, r, i, c) && (t.layer(2), Ht(t, r, i, c));
  },
  pick(t, e) {
    for (const [n, s, a] of cr)
      if (Math.hypot(t - n, e - s) < a) return translate("气泡");
    if (!Lt(t, e, u0)) return null;
    if (os(t, e) < 3) return translate("撕破的细胞");
    const o = ts(t, e, es);
    if (!o) return null;
    if (Vo(o.i, o.j)) {
      const n = hr(o),
        s = Math.cos(-n.ang),
        a = Math.sin(-n.ang),
        r = (t - n.c[0]) * s - (e - n.c[1]) * a,
        i = (t - n.c[0]) * a + (e - n.c[1]) * s;
      if ((r / n.rx) ** 2 + (i / n.ry) ** 2 < 1)
        return Math.abs(i) <= bo(n, r) + 0.6 && Math.abs(r) < n.pl
          ? n.w > 0
            ? translate("气孔（张开）")
            : translate("气孔（关闭）")
          : Math.abs(i) < bo(n, r) + 2.2 && Math.abs(r) < n.pl * 1.1
            ? translate("保卫细胞加厚的内壁")
            : translate("保卫细胞");
    }
    for (const n of yr({
      x0: t - 1,
      y0: e - 1,
      x1: t + 1,
      y1: e + 1,
    }))
      if (Lt(t, e, n.poly)) return translate("叶肉细胞（撕取时带下）");
    if (!Vo(o.i, o.j)) {
      const n = pr(o);
      if (((t - n.x) / n.rx) ** 2 + ((e - n.y) / n.ry) ** 2 < 1.1)
        return translate("细胞核");
      for (let s = 0; s < o.poly.length; s++) {
        const a = Fn(o.poly[s], o.poly[(s + 1) % o.poly.length], 1.5);
        for (const [r, i] of a)
          if (Math.hypot(r - t, i - e) < 2) return translate("细胞壁（波状）");
      }
    }
    return translate("表皮细胞");
  },
  info() {
    return translate(
      "蚕豆叶下表皮：表皮细胞无色透明、彼此嵌合；成对的保卫细胞围成气孔，保卫细胞含叶绿体。下表皮的气孔比上表皮多。",
    );
  },
};
function g1() {
  return pe("viciaMesh", 240, (t, e) => {
    const a = e / 600;
    ((t.fillStyle = "#fff"), t.fillRect(0, 0, e, e));
    const r = (i, c) => {
      const d = ((i % 12) + 12) % 12,
        h = ((c % 12) + 12) % 12,
        u = jt(d, h, 77);
      return [
        (i + 0.5 + (h & 1 ? 0.5 : 0) + (u() - 0.5) * 0.85) * 50,
        (c + 0.5 + (u() - 0.5) * 0.85) * 50,
      ];
    };
    ((t.strokeStyle = "rgb(120,124,118)"), (t.lineWidth = 0.9));
    for (let i = 0; i < 12; i++)
      for (let c = 0; c < 12; c++) {
        const d = r(c, i);
        let h = [
          [d[0] - 200, d[1] - 200],
          [d[0] + 200, d[1] - 200],
          [d[0] + 200, d[1] + 200],
          [d[0] - 200, d[1] + 200],
        ];
        for (let u = -2; u <= 2; u++)
          for (let l = -2; l <= 2; l++) {
            if (!l && !u) continue;
            const f = r(c + l, i + u);
            h = w1(
              h,
              (d[0] + f[0]) / 2,
              (d[1] + f[1]) / 2,
              f[0] - d[0],
              f[1] - d[1],
            );
          }
        for (let u = 0; u < h.length; u++) {
          const l = h[u],
            f = h[(u + 1) % h.length];
          if (!Vi(l, f)) continue;
          const y = Fn(l, f, 3);
          cn(600, (b, m) => {
            (t.beginPath(),
              y.forEach(([x, k], M) =>
                M
                  ? t.lineTo((x + b) * a, (k + m) * a)
                  : t.moveTo((x + b) * a, (k + m) * a),
              ),
              t.stroke());
          });
        }
      }
  });
}
function w1(t, e, o, n, s) {
  const a = [];
  for (let r = 0; r < t.length; r++) {
    const i = t[r],
      c = t[(r + 1) % t.length],
      d = (i[0] - e) * n + (i[1] - o) * s,
      h = (c[0] - e) * n + (c[1] - o) * s;
    if ((d <= 0 && a.push(i), d * h < 0)) {
      const u = d / (d - h);
      a.push([i[0] + (c[0] - i[0]) * u, i[1] + (c[1] - i[1]) * u]);
    }
  }
  return a;
}
function v1(t, e, o) {
  const n = it(u0);
  (t.layer(1), t.pattern(n, g1(), 600 / 240, 0.8));
  const { sx: s, sy: a, jitter: r, stagger: i, seed: c } = es,
    d = e.path("cs", (u) => {
      (t.layer(1), t.both(u, [0.62, 0.74, 0.55], 0.6));
    }),
    h = e.path("ca", (u) => {
      (t.layer(0), t.both(u, [0.4, 0.41, 0.42], 1.2));
    });
  for (let u = Math.floor(o.y0 / a) - 1; u <= Math.ceil(o.y1 / a); u++)
    for (let l = Math.floor(o.x0 / s) - 1; l <= Math.ceil(o.x1 / s); l++) {
      if (!Vo(l, u)) continue;
      const f = jt(l, u, c),
        y = (l + 0.5 + (u & 1 ? i : 0) + (f() - 0.5) * r) * s,
        b = (u + 0.5 + (f() - 0.5) * r) * a;
      if (!Lt(y, b, u0)) continue;
      const x = tt(k0(l, u, c + 101))() * Math.PI,
        k = Math.abs(Math.cos(x)),
        M = Math.abs(Math.sin(x)),
        g = 20 * k + 14 * M,
        w = 20 * M + 14 * k;
      (d.moveTo(y + g, b),
        d.ellipse(y, b, g, w, 0, 0, Math.PI * 2),
        Xi(l, u) &&
          (h.moveTo(y + g * 1.2, b),
          h.ellipse(y, b, g * 1.2, w * 1.1, 0, 0, Math.PI * 2)));
    }
}
const k1 = (t) => {
    const e = (t.x0 + t.x1) / 2,
      o = (t.y0 + t.y1) / 2;
    return os(e, o) < Math.hypot(t.x1 - t.x0, t.y1 - t.y0) / 2 + 200;
  },
  ve = -4300,
  Fe = 4300,
  na = (t) => 350 * Math.sin(t / 2600) + 110 * Math.sin(t / 900 + 1) - 300,
  sa = (t) =>
    (350 / 2600) * Math.cos(t / 2600) + (110 / 900) * Math.cos(t / 900 + 1);
function y0(t, e) {
  const o = sa(t),
    n = Math.hypot(1, o);
  return [t + (e * o) / n, na(t) - e / n];
}
function P1(t, e) {
  let o = t;
  for (let a = 0; a < 4; a++) {
    const r = sa(o);
    o += (t - o + (e - na(o)) * r) / (1 + r * r);
  }
  const n = sa(o),
    s = Math.hypot(1, n);
  return [o, ((t - o) * n - (e - na(o))) / s];
}
const $1 = (t) => t.map(([e, o]) => y0(e, o)),
  mo = 560,
  ka = (t) => Math.pow(Math.max(0, 1 - (t / mo) ** 2), 1.6),
  h0 = (t) => -48 * ka(t) + 1.5 * kt(t / 70, 0.5, 3),
  Ut = (t) => 214 + 6 * kt(t / 400, 1.5, 4) + 255 * ka(t),
  v0 = 17,
  f0 = 13,
  qe = 310,
  T1 = (t) => 62 * (1 - 0.35 * ka(t)) + 4 * kt(t / 160, 2.5, 6),
  To = (t) => h0(t) + v0 + 1 + T1(t),
  Zo = (t) => Math.min(Ut(t) - f0 - 1, 212),
  c0 = [0, 42],
  x0 = [70, 148],
  Ki = [148, 155],
  Mo = [155, 190],
  xo = [190, 210],
  qn = [210, 226],
  qt = 1.08;
function Pa(t, e) {
  const o = t - c0[0],
    n = e - c0[1];
  return [Math.hypot(o, n), Math.atan2(o, n)];
}
const Zi = (t, e) => {
  const [o, n] = Pa(t, e);
  return o >= x0[0] - 4 && o <= qn[1] && Math.abs(n) < qt + 0.08;
};
function bs(t, e, o, n, s, a = 0, r = null) {
  const i = [];
  for (let d = Math.floor(t / 200); d <= Math.floor(e / 200); d++) {
    const h = jt(d, 0, o);
    let u = d * 200;
    for (; u < (d + 1) * 200;) {
      const l = Math.min(v(h, n, s) / (r ? r(u) : 1), (d + 1) * 200 - u);
      (l > 3 &&
        u + l >= t &&
        u <= e &&
        i.push({
          a: u + a / 2,
          b: u + l - a / 2,
          r: h(),
          seed: Math.floor(h() * 1e9),
        }),
        (u += l));
    }
  }
  return i;
}
function $a(t, e) {
  const o = [];
  return (
    Rt(
      {
        x0: t,
        x1: e,
        y0: 0,
        y1: 1,
      },
      420,
      60,
      8811,
      (n, s, a) => {
        const r = n + v(a, 60, 360);
        if (Math.abs(r) < mo + 60 || r < ve + 80 || r > Fe - 80) return;
        const i = v(a, 18, 30) * (a() < 0.3 ? 1.35 : 1);
        o.push({
          s: r,
          R: i,
          d: To(r) + i + 3,
          seed: Math.floor(a() * 1e9),
        });
      },
    ),
    o
  );
}
function aa(t, e) {
  const o = [];
  return (
    Rt(
      {
        x0: t,
        x1: e,
        y0: 0,
        y1: 1,
      },
      190,
      30,
      8812,
      (n, s, a) => {
        if (a() < 0.3) return;
        const r = n + v(a, 20, 170);
        Math.abs(r) < mo ||
          r < ve + 40 ||
          r > Fe - 40 ||
          o.push({
            s: r,
            open: v(a, 1.2, 3),
            seed: Math.floor(a() * 1e9),
          });
      },
    ),
    o
  );
}
const Qi = [0.78, 0.2, 0.34],
  I1 = [0.92, 0.68, 0.75],
  Eo = [0.52, 0.78, 0.72],
  L1 = [0.34, 0.6, 0.44],
  br = [
    [2600, 600, 150],
    [-3100, -1400, 70],
    [900, -1500, 40],
  ];
function Jt(t, e, o, n, s = !0) {
  const a = $1(n);
  t.add(e, o, s ? yt(a) : it(a));
}
function ms(t, e, o, n, s = 1.6) {
  return [
    [t, o(t) + s],
    [t + s, o(t + s)],
    [e - s, o(e - s)],
    [e, o(e) + s],
    [e, n(e) - s],
    [e - s, n(e - s)],
    [t + s, n(t + s)],
    [t, n(t) - s],
  ];
}
function S1(t, e) {
  const o = [];
  for (let n = 0; n < t.length; n++) {
    const [s, a] = t[n],
      [r, i] = t[(n + 1) % t.length],
      c = Math.max(1, Math.ceil(Math.hypot(r - s, i - a) / e));
    for (let d = 0; d < c; d++)
      o.push([s + ((r - s) * d) / c, a + ((i - a) * d) / c]);
  }
  return o;
}
const j1 = {
  id: "leafSection",
  name: translate("叶片横切"),
  slideLabel: [translate("叶片横切"), translate("番红-固绿染色")],
  latin: "Folium, t.s.",
  layers: [0, 4, 8],
  dynZ: 4,
  extent: 4300,
  start: y0(430, 120),
  thumb(t, e) {
    const o = e / 22e3;
    (t.save(), t.translate(e / 2, e / 2), t.scale(o, o), t.beginPath());
    for (let n = ve; n <= Fe; n += 100) {
      const [s, a] = y0(n, 0);
      n === ve ? t.moveTo(s, a) : t.lineTo(s, a);
    }
    for (let n = Fe; n >= ve; n -= 100) {
      const [s, a] = y0(n, Ut(n));
      t.lineTo(s, a);
    }
    ((t.fillStyle = "rgba(120,150,110,.8)"), t.fill(), t.restore());
  },
  render(t, e, o) {
    const n = t.upp,
      s = Math.max(ve, e.x0 - 200),
      a = Math.min(Fe, e.x1 + 200);
    (s < a && R1(e, s, a) && (n > 3.2 ? A1(t, s, a) : E1(t, s, a, n)),
      Wt(t, e, {
        seed: 66,
        density: 0.35,
        size: 3,
        color: [0.55, 0.42, 0.45],
      }));
    for (const [r, i, c] of br) et(e, r, i, c) && (t.layer(2), Ht(t, r, i, c));
  },
  pick(t, e) {
    for (const [r, i, c] of br)
      if (Math.hypot(t - r, e - i) < c) return translate("气泡");
    const [o, n] = P1(t, e);
    if (o < ve || o > Fe) return null;
    const s = h0(o),
      a = Ut(o);
    if (n < s - 2.5 || n > a + 2) return null;
    if (n < s + 1.2) return translate("角质层");
    if (n < s + v0) return translate("上表皮");
    if (n > a - f0) {
      for (const r of aa(o - 30, o + 30))
        if (Math.abs(o - r.s) < 13)
          return Math.abs(o - r.s) < r.open + 0.5
            ? translate("气孔")
            : translate("保卫细胞");
      return translate("下表皮");
    }
    if (Zi(o, n)) {
      const [r] = Pa(o, n);
      return r < x0[1]
        ? translate("木质部（导管）")
        : r < Ki[1]
          ? translate("形成层")
          : r < Mo[1]
            ? translate("韧皮部（筛管）")
            : r < xo[1]
              ? translate("机械组织（纤维）")
              : translate("维管束鞘");
    }
    for (const r of $a(o - 80, o + 80)) {
      const i = Math.hypot(o - r.s, n - r.d);
      if (i < r.R)
        return i > r.R - 7
          ? translate("维管束鞘（小叶脉）")
          : n < r.d
            ? translate("叶脉中的导管")
            : translate("叶脉中的筛管");
    }
    if (Math.abs(o) < qe)
      return n < s + v0 + 44 && Math.abs(o) < 270
        ? translate("厚角组织")
        : n > a - f0 - 46 && Math.abs(o) < 420
          ? translate("厚角组织")
          : translate("薄壁组织（主脉）");
    if (n < To(o)) return translate("栅栏组织");
    if (n < Zo(o)) {
      for (const r of aa(o - 40, o + 40))
        if (Math.hypot(o - r.s, n - (a - f0 - 18)) < 22)
          return translate("气孔下室");
      return translate("海绵组织");
    }
    return Math.abs(o) < 420 && n > a - f0 - 46
      ? translate("厚角组织")
      : translate("薄壁组织（主脉）");
  },
  info() {
    return translate(
      "叶片横切：表皮（保护组织）、叶肉（营养组织：栅栏组织含叶绿体多，海绵组织排列疏松）、叶脉（输导组织：导管运输水和无机盐，筛管运输有机物）。番红把木质化的导管壁染成红色，固绿把纤维素壁和细胞质染成绿色。",
    );
  },
};
function R1(t, e, o) {
  for (let n = e; n <= o; n += 150) {
    const [, s] = y0(n, -60),
      [, a] = y0(n, Ut(n) + 10);
    if (Math.max(s, a) >= t.y0 && Math.min(s, a) <= t.y1) return !0;
  }
  return !1;
}
function Co(t, e, o, n, s) {
  const a = [];
  for (let r = t; r <= e + 1e-6; r += s) a.push(y0(r, o(r)));
  for (let r = e; r >= t - 1e-6; r -= s) a.push(y0(r, n(r)));
  return a;
}
function A1(t, e, o) {
  const s = it(Co(e, o, h0, Ut, 30)),
    a = wt(57, {
      n: 1400,
      dark: 0.3,
      r0: 1,
      r1: 3,
    });
  (t.layer(1), t.both(s, [0.86, 0.93, 0.9], 0.35), t.pattern(s, a, 1.2, 0.8));
  for (let h = 0; h < 3; h++)
    (t.layer(h),
      t.strokeBoth(s, 4, [0.62, 0.78, 0.74], 0.6, h === 1 ? 1 : 0.5),
      t.strokeAbs(ra(e, o, h0, 30), 2, [0.82, 0.48, 0.56], 0.8));
  t.layer(1);
  for (const [h, u] of [
    [e, Math.min(o, -qe)],
    [Math.max(e, qe), o],
  ]) {
    if (h >= u) continue;
    t.both(it(Co(h, u, (f) => h0(f) + v0, To, 30)), [0.5, 0.74, 0.58], 0.5);
    const l = it(Co(h, u, To, Zo, 30));
    (t.both(l, [0.74, 0.88, 0.78], 0.4), t.pattern(l, a, 2.2, 0.9));
  }
  const r = Math.max(e, -260),
    i = Math.min(o, 260);
  r < i &&
    t.both(
      it(
        Co(
          r,
          i,
          (h) => h0(h) + v0,
          (h) => h0(h) + v0 + 44,
          12,
        ),
      ),
      [0.66, 0.84, 0.78],
      0.4,
    );
  const c = Math.max(e, -420),
    d = Math.min(o, 420);
  if (
    (c < d &&
      t.both(
        it(
          Co(
            c,
            d,
            (h) => Ut(h) - f0 - 46,
            (h) => Ut(h) - f0,
            12,
          ),
        ),
        [0.66, 0.84, 0.78],
        0.4,
      ),
    e < 300 && o > -300)
  ) {
    const h = (u, l, f) => {
      const y = [];
      for (let b = 0; b <= 16; b++) {
        const m = -qt + (2 * qt * b) / 16;
        y.push(y0(c0[0] + l * Math.sin(m), c0[1] + l * Math.cos(m)));
      }
      for (let b = 16; b >= 0; b--) {
        const m = -qt + (2 * qt * b) / 16;
        y.push(y0(c0[0] + u * Math.sin(m), c0[1] + u * Math.cos(m)));
      }
      t.both(it(y), f, 0.6);
    };
    (h(x0[0], x0[1], [0.8, 0.36, 0.48]),
      h(Mo[0], Mo[1], [0.5, 0.74, 0.72]),
      h(xo[0], xo[1], [0.88, 0.58, 0.66]));
  }
  for (const h of $a(e, o)) {
    const [u, l] = y0(h.s, h.d),
      f = new Path2D();
    (f.arc(u, l, h.R, 0, Math.PI * 2), t.both(f, [0.82, 0.62, 0.68], 0.5));
  }
}
function E1(t, e, o, n) {
  const s = n <= 1.3,
    a = At(),
    r =
      (M, g, w = 0.6) =>
      ($) => {
        for (let L = 0; L < 3; L++)
          (t.layer(L), t.strokeBoth($, g, M, w, L === 1 ? 1 : 0.6));
      },
    i = (M, g) => (w) => {
      (t.layer(1), t.both(w, M, g));
    },
    c = $a(e - 60, o + 60),
    d = aa(e - 60, o + 60),
    h = (M, g, w) => c.some(($) => Math.hypot(M - $.s, g - $.d) < $.R + w),
    u = (M, g) =>
      d.some((w) => Math.hypot((M - w.s) * 0.8, g - (Ut(w.s) - f0 - 18)) < 24),
    l = a.path("chl", (M) => {
      (t.layer(1), t.both(M, L1, 0.45));
    }),
    f = (M, g, w) => {
      const [$, L] = y0(M, g);
      (l.moveTo($ + w, L), l.arc($, L, w, 0, Math.PI * 2));
    },
    y = a.path("nuc", (M) => {
      (t.layer(1), t.both(M, [0.78, 0.42, 0.5], 0.5));
    }),
    b = (M, g, w) => {
      const [$, L] = y0(M, g);
      (y.moveTo($ + w, L), y.arc($, L, w, 0, Math.PI * 2));
    },
    m = ra(e, o, (M) => h0(M) + 0.6, 6);
  (a.add("cut", r([0.86, 0.5, 0.58], 2.2, 0.9), m),
    a.add(
      "cutb",
      r([0.88, 0.6, 0.66], 1.2, 0.6),
      ra(e, o, (M) => Ut(M) - 0.4, 6),
    ));
  for (const M of bs(e, o, 8801, 13, 27, 0.8)) {
    const g = (M.a + M.b) / 2,
      w = h0(g) + v0;
    (Jt(
      a,
      "ue",
      r(Eo, 1.3),
      ms(
        M.a,
        M.b,
        ($) => h0($) + 1.2,
        ($) => h0($) + v0,
      ),
      !1,
    ),
      s && M.r < 0.35 && b(g + (M.r - 0.17) * 20, w - 5, 2.4));
  }
  const x = (M) => d.find((g) => Math.abs(M - g.s) < 16);
  for (const M of bs(e, o, 8802, 10, 21, 0.8, (g) =>
    Math.hypot(1, (Ut(g + 1) - Ut(g - 1)) / 2),
  )) {
    const g = (M.a + M.b) / 2;
    x(M.a) ||
      x(M.b) ||
      x(g) ||
      Jt(
        a,
        "le",
        r(Eo, 1.2),
        ms(
          M.a,
          M.b,
          (w) => Ut(w) - 1 - f0,
          (w) => Ut(w) - 1,
        ),
        !1,
      );
  }
  for (const M of d) {
    const g = Ut(M.s) - 1.5;
    for (const w of [-1, 1]) {
      const $ = M.s + w * (M.open + 5.5),
        L = g - 6,
        j = Mt($, L, 6, {
          n: 10,
          amp: 0.1,
          seed: M.seed + w,
          sx: 1,
          sy: 1.15,
        });
      (Jt(
        a,
        "gc",
        (R) => {
          (r([0.72, 0.85, 0.78], 2.4, 0.8)(R), i([0.75, 0.88, 0.76], 0.5)(R));
        },
        j,
      ),
        s && (f($ - w * 1.5, L - 1.5, 1.2), f($ + w * 1.2, L + 2, 1.1)));
      const T = w < 0 ? M.s - 16 : M.s + 11.5,
        S = w < 0 ? M.s - 11.5 : M.s + 16;
      Jt(
        a,
        "le",
        r(Eo, 1.2),
        ms(
          T,
          S,
          (R) => Ut(R) - f0 - 0.5,
          (R) => Ut(R) - 1.5,
        ),
        !1,
      );
    }
  }
  for (const M of bs(e, o, 8803, 9, 15, 2)) {
    const g = (M.a + M.b) / 2;
    if (Math.abs(g) < qe) continue;
    const w = h0(g) + v0 + 1.5,
      $ = To(g) - M.r * 6;
    if (h(g, $, 2)) continue;
    const L = [
      [M.a, w + 2],
      [M.a + 2, w],
      [M.b - 2, w],
      [M.b, w + 2],
      [M.b, $ - 3],
      [M.b - 2, $],
      [M.a + 2, $],
      [M.a, $ - 3],
    ];
    if (
      (Jt(
        a,
        "pal",
        (T) => {
          (r(Eo, 1.1, 0.5)(T),
            i(s ? [0.8, 0.91, 0.82] : [0.58, 0.79, 0.64], 0.35)(T));
        },
        L,
      ),
      !s)
    )
      continue;
    const j = tt(M.seed);
    for (let T = w + 3; T < $ - 3; T += v(j, 3.2, 4.6))
      (f(M.a + 2.3 + j() * 0.8, T, v(j, 1.4, 1.9)),
        f(M.b - 2.3 - j() * 0.8, T + 1.6, v(j, 1.4, 1.9)));
    j() < 0.25 && b((M.a + M.b) / 2, w + ($ - w) * v(j, 0.3, 0.7), 2.4);
  }
  const k = 240;
  for (const M of p0(
    {
      x0: e,
      x1: o,
      y0: 60,
      y1: k,
    },
    {
      sx: 27,
      sy: 24,
      jitter: 0.95,
      stagger: 0.5,
      seed: 8804,
    },
  )) {
    const [g, w] = M.c;
    if (
      Math.abs(g) < qe ||
      g < ve ||
      g > Fe ||
      w < To(g) + 4 ||
      w > Zo(g) - 6 ||
      h(g, w, 9) ||
      u(g, w)
    )
      continue;
    const $ = tt(M.seed),
      L = _t(M.poly, v($, 1.6, 4.2));
    if (L.length < 3) continue;
    const j = S1(L, 5).map(([S, R]) => [
      S + 2.6 * kt(S / 7, R / 7, 9),
      R + 2.6 * kt(S / 7, R / 7, 10),
    ]);
    if (
      (Jt(
        a,
        "sp",
        (S) => {
          (r(Eo, 1.1, 0.5)(S),
            i(s ? [0.86, 0.94, 0.87] : [0.76, 0.89, 0.79], 0.3)(S));
        },
        j,
      ),
      !s)
    )
      continue;
    const T = 4 + Math.floor($() * 8);
    for (let S = 0; S < T; S++) {
      const R = j[Math.floor($() * j.length)],
        C = M.c[0] - R[0],
        A = M.c[1] - R[1],
        D = Math.hypot(C, A) || 1;
      f(R[0] + (C / D) * 2.4, R[1] + (A / D) * 2.4, v($, 1.3, 1.8));
    }
  }
  for (const M of p0(
    {
      x0: Math.max(e, -mo - 60),
      x1: Math.min(o, mo + 60),
      y0: -60,
      y1: 560,
    },
    {
      sx: 36,
      sy: 34,
      jitter: 0.8,
      stagger: 0.5,
      seed: 8805,
    },
  )) {
    const [g, w] = M.c;
    if (Math.abs(g) > mo + 20) continue;
    const $ = h0(g),
      L = Ut(g),
      j = w > L - f0 - 46 && Math.abs(g) < 420,
      T = w < $ + v0 + 44 && Math.abs(g) < 270;
    if (
      w < $ + v0 + 4 ||
      w > L - f0 - 4 ||
      j ||
      T ||
      (Math.abs(g) >= qe && w < Zo(g) + 6) ||
      Zi(g, w)
    )
      continue;
    const S = _t(M.poly, 1.2);
    S.length < 3 ||
      (Jt(
        a,
        "gp",
        (R) => {
          (r([0.66, 0.86, 0.8], 1.4, 0.55)(R), i([0.97, 0.98, 0.97], 0.15)(R));
        },
        S,
      ),
      s && tt(M.seed)() < 0.1 && b(M.c[0] + 6, M.c[1] - 4, 2.6));
  }
  for (const M of p0(
    {
      x0: Math.max(e, -440),
      x1: Math.min(o, 440),
      y0: -50,
      y1: 560,
    },
    {
      sx: 13,
      sy: 12,
      jitter: 0.75,
      stagger: 0.5,
      seed: 8806,
    },
  )) {
    const [g, w] = M.c,
      $ = h0(g),
      L = Ut(g),
      j =
        w > L - f0 - 46 &&
        w < L - f0 - 1 &&
        Math.abs(g) < 420 &&
        !(Math.abs(g) >= qe && w < Zo(g) + 6),
      T = w < $ + v0 + 44 && w > $ + v0 + 1 && Math.abs(g) < 270;
    (!j && !T) ||
      Jt(
        a,
        "col",
        (S) => {
          (r([0.62, 0.83, 0.77], 2.2, 0.7)(S), i([0.95, 0.97, 0.95], 0.2)(S));
        },
        _t(M.poly, 0.6),
      );
  }
  e < 260 && o > -260 && C1(a, r, i, s, b);
  for (const M of c) D1(a, r, i, M, s);
  a.flush();
}
function ra(t, e, o, n) {
  const s = new Path2D();
  let a = !0;
  for (let r = t; r <= e + 1e-6; r += n) {
    const [i, c] = y0(r, o(r));
    (a ? s.moveTo(i, c) : s.lineTo(i, c), (a = !1));
  }
  return s;
}
function C1(t, e, o, n, s) {
  const a = (u, l) => [c0[0] + u * Math.sin(l), c0[1] + u * Math.cos(l)],
    r = (u, l, f, y = qt) => {
      const [b, m] = Pa(u, l);
      return b >= f[0] && b < f[1] && Math.abs(m) < y;
    },
    i = [],
    c = Math.floor((2 * qt) / 0.125);
  for (let u = 0; u <= c; u++) {
    const l = -qt + 0.04 + (u * (2 * qt - 0.08)) / c,
      f = jt(u, 1, 8821);
    let y = x0[0] + v(f, 1, 6);
    for (; y < x0[1] - 4;) {
      const b = (y - x0[0]) / (x0[1] - x0[0]),
        m = 0.125 * (y + 8),
        x = Math.min(m - 1.5, (5 + 17 * Math.pow(b, 1.05)) * v(f, 0.8, 1.12));
      if (y + x > x0[1] + 2) break;
      (f() < 0.88 &&
        i.push({
          c: a(y + x / 2, l + v(f, -0.015, 0.015)),
          rad: x / 2,
          seed: Math.floor(f() * 1e9),
        }),
        (y += x + v(f, 1, 3.5)));
    }
  }
  const d = (u, l) =>
    i.some((f) => Math.hypot(u - f.c[0], l - f.c[1]) < f.rad + 1.5);
  for (const u of p0(
    {
      x0: -158,
      x1: x0[1] + 10,
      y0: c0[1],
      y1: c0[1] + x0[1] + 10,
    },
    {
      sx: 7,
      sy: 7,
      jitter: 0.8,
      seed: 8822,
    },
  ))
    !r(u.c[0], u.c[1], x0) ||
      d(u.c[0], u.c[1]) ||
      Jt(
        t,
        "xp",
        (l) => {
          (e(I1, 0.9, 0.4)(l), o([0.96, 0.9, 0.92], 0.2)(l));
        },
        _t(u.poly, 0.3),
        !1,
      );
  for (const u of i) {
    const l = Mt(u.c[0], u.c[1], u.rad, {
        n: 7,
        amp: 0.13,
        seed: u.seed,
      }),
      f = Math.round(Math.min(2.6, 1.4 + u.rad * 0.15) * 2) / 2;
    Jt(
      t,
      `xv${f}`,
      (y) => {
        (e(Qi, f, 0.9)(y), o([0.97, 0.9, 0.92], 0.1)(y));
      },
      l,
    );
  }
  for (let u = 0; u < 2; u++) {
    const l = Ki[0] + u * 3.5,
      f = l + 3.5,
      y = Math.floor((2 * qt * l) / 7);
    for (let b = 0; b < y; b++) {
      const m = -qt + (2 * qt * b) / y,
        x = -qt + (2 * qt * (b + 1)) / y;
      Jt(
        t,
        "cb",
        e([0.72, 0.86, 0.82], 0.8, 0.4),
        [a(l, m), a(l, x), a(f, x), a(f, m)],
        !1,
      );
    }
  }
  for (const u of p0(
    {
      x0: -200,
      x1: Mo[1] + 10,
      y0: c0[1],
      y1: c0[1] + Mo[1] + 10,
    },
    {
      sx: 6.5,
      sy: 6.5,
      jitter: 0.85,
      seed: 8823,
    },
  )) {
    if (!r(u.c[0], u.c[1], Mo)) continue;
    const f = tt(u.seed)() < 0.3;
    Jt(
      t,
      f ? "phd" : "ph",
      (y) => {
        (e([0.45, 0.74, 0.7], 0.9, 0.5)(y),
          o(f ? [0.5, 0.74, 0.74] : [0.8, 0.91, 0.9], 0.3)(y));
      },
      _t(u.poly, 0.25),
      !1,
    );
  }
  for (const u of p0(
    {
      x0: -220,
      x1: xo[1] + 10,
      y0: c0[1],
      y1: c0[1] + xo[1] + 10,
    },
    {
      sx: 8,
      sy: 8,
      jitter: 0.7,
      seed: 8824,
    },
  ))
    !r(u.c[0], u.c[1], xo, qt - 0.12) ||
      kt(u.c[0] / 45, 3.3, 71) < -0.35 ||
      Jt(
        t,
        "fb",
        (l) => {
          (e([0.86, 0.42, 0.53], 2.3, 0.8)(l), o([0.97, 0.9, 0.92], 0.15)(l));
        },
        _t(u.poly, 0.4),
      );
  const h = Math.floor((2 * qt * qn[0]) / 15);
  for (let u = 0; u < h; u++) {
    const l = -qt + (2 * qt * (u + 0.5)) / h,
      f = a((qn[0] + qn[1]) / 2, l),
      y = Mt(f[0], f[1], 7.2, {
        n: 10,
        amp: 0.12,
        seed: u + 31,
        sx: 1.05,
      });
    (Jt(
      t,
      "bs",
      (b) => {
        (e([0.64, 0.84, 0.78], 1.2, 0.5)(b), o([0.93, 0.96, 0.92], 0.2)(b));
      },
      y,
    ),
      n && u % 5 === 2 && s(f[0], f[1], 2.2));
  }
}
function D1(t, e, o, n, s) {
  const a = tt(n.seed),
    r = Math.max(8, Math.round((2 * Math.PI * (n.R - 4)) / 9));
  for (let h = 0; h < r; h++) {
    const u = (h / r) * Math.PI * 2,
      l = n.s + Math.sin(u) * (n.R - 4.5),
      f = n.d + Math.cos(u) * (n.R - 4.5),
      y = Mt(l, f, 4.8, {
        n: 9,
        amp: 0.12,
        seed: n.seed + h,
      });
    Jt(
      t,
      "vbs",
      (b) => {
        (e([0.64, 0.84, 0.78], 1.1, 0.5)(b), o([0.9, 0.95, 0.9], 0.25)(b));
      },
      y,
    );
  }
  const i = n.R - 9,
    c = 2 + Math.floor(i / 6);
  for (let h = 0; h < c; h++) {
    const u = v(a, -0.9, 0.9),
      l = v(a, 0, i * 0.65),
      f = n.s + Math.sin(u) * l * 0.9,
      y = n.d - Math.cos(u) * l * 0.6 - i * 0.25,
      b = v(a, 2.2, 4.2);
    Jt(
      t,
      "vx",
      (m) => {
        (e(Qi, 1.8, 0.8)(m), o([0.97, 0.9, 0.92], 0.1)(m));
      },
      Mt(f, y, b, {
        n: 8,
        amp: 0.1,
        seed: n.seed + 50 + h,
      }),
    );
  }
  if (!s && i < 10) return;
  const d = Math.floor(i * 0.6);
  for (let h = 0; h < d; h++) {
    const u = v(a, -1.1, 1.1),
      l = v(a, i * 0.2, i * 0.85),
      f = n.s + Math.sin(u) * l,
      y = n.d + Math.abs(Math.cos(u)) * l * 0.8 + 2;
    Jt(
      t,
      "vp",
      (b) => {
        (e([0.45, 0.74, 0.7], 0.8, 0.4)(b), o([0.7, 0.86, 0.84], 0.25)(b));
      },
      Mt(f, y, v(a, 1.8, 2.8), {
        n: 7,
        amp: 0.15,
        seed: n.seed + 90 + h,
      }),
    );
  }
}
const mr = [-1e3, 320],
  an = -0.28,
  Mr = Math.cos(an),
  xr = Math.sin(an),
  J0 = 17,
  Ye = 640,
  Zn = 600,
  Ms = 2150,
  Un = 380,
  kn = 0.16,
  ke = 70,
  B1 = (t) => Ye / J0 + (Zn / J0) * (1 - Math.exp(-1570 / Zn)),
  Do = (t) =>
    t < Ye / J0
      ? t * J0
      : Ye - Zn * Math.log(Math.max(1e-6, 1 - ((t - Ye / J0) * J0) / Zn)),
  Bo = (t) => Un * Math.sqrt(Math.max(0, Math.min(1, (t + 15) / 330))),
  Pn = (t) => 105 + (t * t) / 760,
  gr = (t, e) =>
    e * J0 +
    6 * (k0(e, 3, 71) / 4294967296 - 0.5) +
    2.2 * kt(t / 22, e * 3.1, 5),
  uo = (t, e) => [mr[0] + t * Mr - e * xr, mr[1] + t * xr + e * Mr],
  $n = (t, e, o) => {
    const n = Math.max(0, Math.min(1, (o - t) / (e - t)));
    return n * n * (3 - 2 * n);
  },
  O1 = [
    ["prophase", 5.5],
    ["metaphase", 2.6],
    ["anaphase", 1.9],
    ["telophase", 3.4],
  ];
function N1(t, e) {
  const o = [],
    n = t.length;
  for (let s = 0; s < n; s++) {
    const a = t[s],
      r = t[(s + n - 1) % n],
      i = t[(s + 1) % n],
      c = Math.hypot(r[0] - a[0], r[1] - a[1]) || 1,
      d = Math.hypot(i[0] - a[0], i[1] - a[1]) || 1,
      h = Math.min(0.3, e / c),
      u = Math.min(0.3, e / d);
    o.push(
      [a[0] + (r[0] - a[0]) * h, a[1] + (r[1] - a[1]) * h],
      [a[0] + (i[0] - a[0]) * u, a[1] + (i[1] - a[1]) * u],
    );
  }
  return o;
}
let Tn = null;
function Ji() {
  if (Tn) return Tn;
  const t = [],
    e = new Map(),
    o = (c) => {
      const [d, h, u, l] = c.bbox;
      for (let f = Math.floor(h / ke); f <= Math.floor(l / ke); f++)
        for (let y = Math.floor(d / ke); y <= Math.floor(u / ke); y++) {
          const b = y + "," + f;
          let m = e.get(b);
          (m || e.set(b, (m = [])), m.push(c));
        }
    },
    n = (c, d, h) => {
      c.poly = d.map(([b, m]) => h(b, m));
      let u = 1 / 0,
        l = 1 / 0,
        f = -1 / 0,
        y = -1 / 0;
      for (const [b, m] of c.poly)
        ((u = Math.min(u, b)),
          (l = Math.min(l, m)),
          (f = Math.max(f, b)),
          (y = Math.max(y, m)));
      ((c.bbox = [u - 2, l - 2, f + 2, y + 2]),
        (c.c = Ie(c.poly)),
        t.push(c),
        o(c));
    },
    s = (c, d, h) => {
      const u = Math.floor((c + 1.6 * kt(d / 60, 0.3, 77)) / 4.5),
        l = (k0(u, 0, 79) / 4294967296) * 64,
        f = Math.floor((d + l + 34 * kt(h / 90, 3.3, 78)) / 64),
        y = jt(u, f, 901),
        b = Do(Math.min(70, (u + 0.5) * 4.5)),
        m = (f + 0.5) * 64 - l;
      return {
        cu: b,
        cv: m,
        rot: (y() - 0.5) * 0.14,
        du: (y() - 0.5) * 20 + b * 0.03,
        dv: m * kn + (y() - 0.5) * 26,
      };
    },
    a = Math.ceil(Un / J0) + 1;
  for (let c = -a; c < a; c++) {
    const d = k0(c, 1, 72) / 4294967296,
      h = B1();
    for (let u = 0; u < h; u++) {
      const l = (ut) => ut + d + 0.42 * (k0(c, ut, 73) / 4294967296 - 0.5),
        f = l(u);
      let y = l(u + 1);
      const b = (c + 0.5) * J0,
        m = jt(c, u, 504);
      let x = "interphase";
      {
        const ut = (Do(f) + Do(y)) / 2,
          ct = $n(Pn(b) + 10, Pn(b) + 70, ut) * (1 - $n(Ye - 120, Ye + 40, ut));
        let bt = m() * 100;
        if (ct > 0 && bt < 13.4 * ct)
          for (const [Z, rt] of O1) {
            if (bt < rt * ct) {
              x = Z;
              break;
            }
            bt -= rt * ct;
          }
      }
      (x === "anaphase" ||
        x === "telophase" ||
        (x === "metaphase" && m() < 0.5)) &&
        (y = l(++u + 1));
      const k = Do(f),
        M = Do(y),
        g = (k + M) / 2;
      if (
        g < Pn(b) ||
        g > Ms + 50 * kt(b / 120, 1, 74) ||
        Math.abs(b) > Bo(g) * (0.94 + 0.06 * kt(g / 80, c, 75))
      )
        continue;
      const w = jt(c, u, 502),
        $ = M - k,
        L = Math.max(1, Math.round($ / 28)),
        j = [];
      for (let ut = 0; ut <= L; ut++)
        j.push([k + ($ * ut) / L, gr(k + ($ * ut) / L, c)]);
      for (let ut = L; ut >= 0; ut--)
        j.push([k + ($ * ut) / L, gr(k + ($ * ut) / L, c + 1)]);
      const T = s(f + 0.5, b, g);
      let S = T.rot,
        R = T.du,
        C = T.dv;
      const A = Math.abs(b) / Bo(g),
        D = w() < 0.025 + 0.2 * $n(0.82, 1, A);
      let W = 0,
        O = 0,
        N = 0;
      D &&
        ((N = (w() - 0.5) * 1.2),
        (W = (w() - 0.5) * 30),
        (O = Math.sign(b || 1) * v(w, 6, 30)));
      const V = Math.cos(S),
        st = Math.sin(S),
        ft = Math.cos(N),
        F = Math.sin(N),
        H = (ut, ct) => {
          let bt = ut - g,
            Z = ct - b;
          return (
            ([bt, Z] = [bt * ft - Z * F + W, bt * F + Z * ft + O]),
            (bt += g - T.cu),
            (Z += b - T.cv),
            uo(T.cu + bt * V - Z * st + R, T.cv + bt * st + Z * V + C)
          );
        },
        K = g < Ye ? 1 : g < 1350 ? 2 : 3,
        J = J0,
        ot = {
          id: `rt-${c}-${u}`,
          zone: K,
          len: $,
          wid: J,
          ang: an + S + N,
          seed: k0(c, u, 503),
          broken: w() < 0.02,
          vessel: Math.abs(b) < 26 && g > 1050,
          edgeK: A,
        };
      ((ot.phase = K === 1 ? x : "interphase"),
        ot.phase !== "interphase" && (ot.broken = !1),
        (ot.p = m()));
      const dt = [
        g + (K === 1 ? v(w, -1.5, 1.5) : v(w, -0.3, 0.3) * $),
        b + v(w, -1.5, 1.5),
      ];
      K === 3 && (dt[1] += v(w, -4, 4));
      const [xt, vt] = H(dt[0], dt[1]);
      ((ot.nx = xt),
        (ot.ny = vt),
        (ot.rn =
          K === 1
            ? Math.min(6.8, Math.max(4.6, Math.min($, J) * v(w, 0.3, 0.37)))
            : K === 2
              ? v(w, 4.2, 5.2)
              : v(w, 3.6, 4.4)),
        ot.phase === "prophase" && (ot.rn *= 1.12),
        (ot.re = K === 1 ? v(w, 0.88, 1.08) : v(w, 1.1, 1.35)),
        (ot.nAng =
          ot.ang + v(w, -0.3, 0.3) * (ot.phase === "interphase" ? 1 : 0.4)),
        (ot.dark = K === 1 ? v(w, 0.85, 1.15) : v(w, 0.6, 0.85)),
        n(ot, j, H));
    }
  }
  const r = {
    x0: -70,
    y0: -Un - 20,
    x1: 380,
    y1: Un + 20,
  };
  for (const c of p0(r, {
    sx: 23,
    sy: 20,
    jitter: 0.85,
    seed: 611,
  })) {
    const [d, h] = c.c;
    if (
      d > Pn(h) ||
      d < -45 + 25 * kt(h / 60, 2, 76) ||
      Math.abs(h) > Bo(Math.max(0, d)) + 40
    )
      continue;
    const u = tt(c.seed),
      l = Math.hypot(d - 160, h),
      f = (d - 160) / (l || 1),
      y = h / (l || 1),
      b = $n(60, 260, l) * v(u, 4, 40) + v(u, 0, 6),
      m = (u() - 0.5) * 0.8,
      x = Math.cos(m),
      k = Math.sin(m),
      M = (j, T) => {
        const S = j - d,
          R = T - h;
        return uo(
          d + S * x - R * k + f * b,
          h * (1 + kn) + S * k + R * x + y * b,
        );
      },
      g = _t(c.poly, v(u, 0.8, 2.2)),
      w = {
        id: `rc-${c.i}-${c.j}`,
        zone: 0,
        len: 20,
        wid: 20,
        ang: an + m,
        seed: c.seed,
        broken: u() < 0.3,
        phase: "interphase",
        p: 0,
      },
      [$, L] = M(d + v(u, -3, 3), h + v(u, -3, 3));
    ((w.nx = $),
      (w.ny = L),
      (w.rn = v(u, 3.2, 4.2)),
      (w.re = 1),
      (w.nAng = u() * 3),
      (w.dark = v(u, 0.45, 0.7)),
      n(w, g, M));
  }
  const i = [];
  for (let c = 0; c <= 40; c++) {
    const d = Ms * (c / 40);
    i.push(uo(d, Bo(d) * (1 + kn) + 20));
  }
  for (let c = 40; c >= 0; c--) {
    const d = Ms * (c / 40);
    i.push(uo(d, -Bo(d) * (1 + kn) - 20));
  }
  return (
    (Tn = {
      cells: t,
      grid: e,
      outline: i,
    }),
    Tn
  );
}
function xs(t, e, o, n) {
  const { grid: s } = Ji(),
    a = new Set(),
    r = [];
  for (let i = Math.floor(e / ke); i <= Math.floor(n / ke); i++)
    for (let c = Math.floor(t / ke); c <= Math.floor(o / ke); c++) {
      const d = s.get(c + "," + i);
      if (d) for (const h of d) a.has(h) || (a.add(h), r.push(h));
    }
  return r;
}
const Oo = [0.4, 0.1, 0.46],
  gs = [0.68, 0.46, 0.72],
  z1 = [0.955, 0.9, 0.95],
  W1 = [0.86, 0.79, 0.87];
function wr(t, e) {
  return t.map((o, n) => {
    const s = t[Math.max(0, n - 1)],
      a = t[Math.min(t.length - 1, n + 1)],
      r = a[0] - s[0],
      i = a[1] - s[1],
      c = Math.hypot(r, i) || 1;
    return [o[0] - (i / c) * e, o[1] + (r / c) * e];
  });
}
function ws(t, e = new Path2D()) {
  e.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length; o++) e.lineTo(t[o][0], t[o][1]);
  return e;
}
function Ce(t, e, o, n, s, a = 0.5) {
  const r = [[e, o]];
  let i = e,
    c = o,
    d = n;
  const h = 4;
  for (let u = 0; u < h; u++)
    ((d += (t() - 0.5) * a),
      (i += (Math.cos(d) * s) / h),
      (c += (Math.sin(d) * s) / h),
      r.push([i, c]));
  return r;
}
function tc(t) {
  const e = tt(t.seed ^ 1597463007),
    o = t.p,
    n = Math.min(t.len, 38) / 2,
    s = t.wid / 2 - 1.2,
    a = [];
  if (t.phase === "metaphase") {
    if (e() < 0.12) {
      t.polar = !0;
      for (let c = 0; c < 16; c++) {
        const d = (c / 16) * Math.PI * 2 + e() * 0.3,
          h = v(e, 1.5, 3.5),
          u = Math.cos(d) * h,
          l = Math.sin(d) * h * 0.9,
          f = d + (e() - 0.5) * 1.2,
          y = v(e, 3, 5.5);
        a.push({
          pts: Ce(e, u, l, f, y)
            .reverse()
            .concat(
              Ce(
                e,
                u,
                l,
                f + v(e, 0.6, 1.4) * (e() < 0.5 ? 1 : -1),
                v(e, 1.5, 4),
              ).slice(1),
            ),
          twin: !0,
        });
      }
    } else {
      const c = Array.from(
        {
          length: 16,
        },
        (d, h) => h,
      ).sort(() => e() - 0.5);
      for (let d = 0; d < 16; d++) {
        const h = -s + 0.6 + ((c[d] + e()) / 16) * (2 * s - 1.2),
          u = (e() - 0.5) * 1.2,
          l = (e() < 0.5 ? 0 : Math.PI) + (e() - 0.5) * 2.2,
          f = l + Math.PI + (e() - 0.5) * 2.4,
          y = Ce(e, u, h, l, v(e, 2.2, 5)),
          b = Ce(e, u, h, f, v(e, 1.2, 4)),
          m = y
            .reverse()
            .concat(b.slice(1))
            .map(([x, k]) => [x * 0.8, Math.max(-s - 1, Math.min(s + 1, k))]);
        a.push({
          pts: m,
          twin: !0,
        });
      }
    }
  } else if (t.phase === "anaphase") {
    const c = 4.5 + o * Math.max(0, n - 9);
    for (const d of [-1, 1])
      for (let h = 0; h < 16; h++) {
        const u = (e() - 0.5) * 2 * (s - 1 - o * 1.5),
          l = d * (c + (e() - 0.5) * 1.6),
          f = d > 0 ? Math.PI : 0,
          y = v(e, 0.15, 0.7),
          b = (e() - 0.5) * 0.5 - u * 0.04 * d,
          m = Ce(e, l, u, f + y + b, v(e, 2.5, 5), 0.4),
          x = Ce(e, l, u, f - y + b, v(e, 1.5, 4), 0.4);
        a.push({
          pts: m
            .reverse()
            .concat(x.slice(1))
            .map(([k, M]) => [d * Math.max(0.7 + o * 2, d * k), M]),
          twin: !1,
        });
      }
  } else if (t.phase === "prophase") {
    const c = t.rn * 0.85,
      d = o < 0.5 ? 22 : 16;
    for (let h = 0; h < d; h++) {
      let u = v(e, -c, c) * 0.7,
        l = v(e, -c, c) * 0.7,
        f = e() * 6.3;
      const y = [[u, l]],
        b = o < 0.5 ? 9 : 6;
      for (let m = 0; m < b; m++) {
        ((f += (e() - 0.5) * (o < 0.5 ? 2.2 : 1.3)),
          (u += Math.cos(f) * 1.3),
          (l += Math.sin(f) * 1.3));
        const x = Math.hypot(u, l);
        (x > c && ((u *= c / x), (l *= c / x), (f += Math.PI * 0.7)),
          y.push([u, l]));
      }
      a.push({
        pts: y,
        twin: o > 0.6,
      });
    }
  }
  const r = [];
  let i = 0;
  if (t.phase === "telophase") {
    const c = Math.max(4.5, n - 4 - o * (n / 2 - 4));
    for (const d of [-1, 1])
      r.push({
        x: d * c,
        y: (e() - 0.5) * 1.5,
        rx: 2.2 + o * 2,
        ry: s * (0.8 - o * 0.15),
      });
    if (((i = o), o < 0.45))
      for (const d of [-1, 1])
        for (let h = 0; h < 9; h++) {
          const u = (e() - 0.5) * 2 * (s - 2),
            l = d * (c + v(e, -1.2, 1.2));
          a.push({
            pts: Ce(
              e,
              l,
              u,
              (d > 0 ? Math.PI : 0) + (e() - 0.5) * 1.6,
              v(e, 1.5, 3),
              1,
            ),
            twin: !1,
          });
        }
  }
  return {
    chroms: a,
    nuclei: r,
    plate: i,
    w: s,
    half: n,
  };
}
const F1 = (t) => {
  const e = Math.cos(t.nAng),
    o = Math.sin(t.nAng);
  return ([n, s]) => [t.nx + n * e - s * o, t.ny + n * o + s * e];
};
function q1(t) {
  return t.phase === "interphase" || t.phase === "prophase"
    ? t.rn * Math.max(1, t.re)
    : t.phase === "metaphase"
      ? 7.5
      : Math.min(t.len, 38) / 2 - 2;
}
function U1(t, e, o, n) {
  const s = N1(o.poly, o.zone === 0 ? 6 : o.zone === 1 ? 2.6 : 3.2),
    a = yt(s),
    r = o.zone;
  let i =
    r === 0
      ? [0.975, 0.95, 0.97]
      : r === 1
        ? z1
        : r === 2
          ? [0.97, 0.935, 0.965]
          : [0.982, 0.958, 0.977];
  if (
    (n === 0 && (i = G(i, [0.8, 0.6, 0.84], r === 1 ? 0.5 : 0.3)),
    t.add(
      `c${r}`,
      (l) => {
        (e.layer(1),
          e.both(l, i, 0.18),
          n >= 2 &&
            e.pattern(
              l,
              wt(31, {
                n: 900,
                dark: 0.22,
                r1: 2,
              }),
              0.3,
              r === 1 ? 0.7 : 0.4,
            ));
      },
      a,
    ),
    n >= 1 &&
      t.add(
        "w",
        (l) => {
          (e.layer(1),
            e.strokeBoth(l, 1, W1, 0.5),
            e.layer(0),
            e.strokePhase(l, 1.4, 0.25),
            e.layer(2),
            e.strokePhase(l, 1.4, 0.25));
        },
        a,
      ),
    o.vessel && n >= 2)
  ) {
    const l = Math.cos(o.ang),
      f = Math.sin(o.ang),
      y = new Path2D();
    for (let b = -o.len / 2 + 2; b < o.len / 2 - 2; b += 4.2) {
      const m = o.c[0] + l * b,
        x = o.c[1] + f * b;
      (y.moveTo(m + f * 7 - l * 1.2, x - l * 7 - f * 1.2),
        y.lineTo(m - f * 7 + l * 1.2, x + l * 7 + f * 1.2));
    }
    t.add(
      "vs",
      (b) => {
        (e.layer(1), e.strokeBoth(b, 0.9, [0.82, 0.74, 0.84], 0.5));
      },
      y,
    );
  }
  if (o.broken) return;
  const c = F1(o),
    d = o.phase;
  if (d === "interphase" || d === "prophase") {
    const l = o.rn * o.re,
      f = o.rn,
      y = new Path2D();
    y.ellipse(o.nx, o.ny, l, f, o.nAng, 0, Math.PI * 2);
    const b =
        d === "prophase"
          ? G(gs, [1, 1, 1], 0.3)
          : G([1, 1, 1], gs, Math.min(1.25, o.dark)),
      m = tt(o.seed ^ 77),
      x = [],
      k =
        d === "prophase" ? (o.p < 0.5 ? 1 : 0) : 1 + Math.floor(m() * m() * 3);
    for (let M = 0; M < k; M++) {
      const [g, w] = c([v(m, -0.4, 0.4) * l, v(m, -0.4, 0.4) * f]);
      x.push([g, w, v(m, 1, 1.7) * (d === "prophase" ? 0.8 : 1)]);
    }
    if (n >= 2)
      for (const [M, g, w] of x)
        y.ellipse(M, g, w, w * 0.92, 0, 0, Math.PI * 2, !0);
    if (
      (t.add(
        `n${Y1(o.dark)}${d[0]}`,
        (M) => {
          (e.layer(1),
            e.abs(M, b),
            e.phase(M, 0.35),
            n >= 2 &&
              (e.pattern(
                M,
                wt(32, {
                  n: 1600,
                  dark: 0.55,
                  r0: 0.8,
                  r1: 2.6,
                }),
                0.22,
                d === "prophase" ? 0.3 : 0.8,
              ),
              e.pattern(
                M,
                wt(33, {
                  n: 260,
                  dark: 0.3,
                  r0: 3,
                  r1: 7,
                }),
                0.22,
                0.6,
              )));
        },
        y,
      ),
      n >= 2)
    ) {
      t.add(
        "nr",
        (M) => {
          (e.layer(1), e.strokeAbs(M, 0.45, G(gs, [1, 1, 1], 0.2), 0.7));
        },
        eo(o.nx, o.ny, l, f, o.nAng),
      );
      for (const [M, g, w] of x) {
        const $ = eo(M, g, w, w * 0.92, 0);
        t.add(
          "nl",
          (L) => {
            (e.layer(1),
              e.abs(L, [0.9, 0.78, 0.9]),
              e.phase(L, 0.55),
              e.strokeAbs(L, 0.35, [0.62, 0.4, 0.66], 0.8));
          },
          $,
        );
      }
    }
    if (d === "interphase" || n < 2) return;
  }
  const h = tc(o);
  if (n < 2) {
    const l = new Path2D();
    if (d === "metaphase")
      o.polar
        ? l.addPath(eo(o.nx, o.ny, 5.5, 5.2, 0))
        : l.addPath(
            it(
              [
                [-1.8, -h.w],
                [1.8, -h.w],
                [1.8, h.w],
                [-1.8, h.w],
              ].map(c),
            ),
          );
    else if (d === "anaphase") {
      const f = 4.5 + o.p * Math.max(0, h.half - 9);
      for (const y of [-1, 1])
        l.addPath(
          it(
            [
              [y * f, -h.w + 1],
              [y * (f + 3.5), -h.w + 2],
              [y * (f + 3.5), h.w - 2],
              [y * f, h.w - 1],
            ].map(c),
          ),
        );
    } else if (d === "telophase")
      for (const f of h.nuclei) {
        const [y, b] = c([f.x, f.y]);
        l.addPath(eo(y, b, f.rx, f.ry, o.nAng));
      }
    else
      d === "prophase" && l.addPath(eo(o.nx, o.ny, o.rn * 0.8, o.rn * 0.8, 0));
    t.add(
      "fl",
      (f) => {
        (e.layer(1), e.both(f, G(Oo, [1, 1, 1], 0.12), 0.5));
      },
      l,
    );
    return;
  }
  if (d === "metaphase" || d === "anaphase") {
    const l = new Path2D(),
      f = h.half - 1;
    for (let y = -3; y <= 3; y++) {
      const b = (y / 3) * (h.w - 1.5);
      for (const m of [-1, 1]) {
        const x = c([m * f, b * 0.25]),
          k = c([0, b]);
        (l.moveTo(x[0], x[1]), l.lineTo(k[0], k[1]));
      }
    }
    t.add(
      "sp",
      (y) => {
        (e.layer(1), e.strokeBoth(y, 0.5, [0.93, 0.87, 0.93], 0.12, 0.7));
      },
      l,
    );
  }
  const u = e.upp < 0.3;
  for (const l of h.chroms) {
    const f = l.pts.map(c);
    if (d === "prophase")
      t.add(
        `pt${o.p > 0.5 ? 1 : 0}`,
        (y) => {
          (e.layer(1),
            e.strokeBoth(
              y,
              o.p > 0.5 ? 0.85 : 0.6,
              G(Oo, [1, 1, 1], o.p > 0.5 ? 0.05 : 0.22),
              0.3,
            ));
        },
        _1(f),
      );
    else if (l.twin && u) {
      const y = ws(wr(f, 0.36));
      (ws(wr(f, -0.36), y),
        t.add(
          "ct",
          (b) => {
            (e.layer(1), e.strokeBoth(b, 0.62, G(Oo, [1, 1, 1], 0.08), 0.35));
          },
          y,
        ));
    } else
      t.add(
        "cs",
        (y) => {
          (e.layer(1), e.strokeBoth(y, l.twin ? 1.25 : 0.85, Oo, 0.4));
        },
        ws(f),
      );
  }
  if (d === "telophase") {
    for (const m of h.nuclei) {
      const [x, k] = c([m.x, m.y]),
        M = eo(x, k, m.rx, m.ry, o.nAng);
      t.add(
        "tn",
        (g) => {
          (e.layer(1),
            e.both(g, G(Oo, [1, 1, 1], 0.2), 0.45),
            e.pattern(
              g,
              wt(32, {
                n: 1600,
                dark: 0.55,
                r0: 0.8,
                r1: 2.6,
              }),
              0.16,
              0.8,
            ));
        },
        M,
      );
    }
    const l = h.w * (0.35 + 0.65 * h.plate) + 0.8,
      f = c([0, -l]),
      y = c([0, l]),
      b = new Path2D();
    (b.moveTo(f[0], f[1]),
      b.lineTo(y[0], y[1]),
      t.add(
        "pl",
        (m) => {
          (e.layer(1), e.strokeBoth(m, 0.8, [0.78, 0.66, 0.8], 0.5));
        },
        b,
      ));
  }
}
const Y1 = (t) => Math.round(t * 6);
function eo(t, e, o, n, s) {
  const a = new Path2D();
  return (
    a.ellipse(t, e, Math.max(0.01, o), Math.max(0.01, n), s, 0, Math.PI * 2),
    a
  );
}
function _1(t) {
  const e = new Path2D();
  e.moveTo(t[0][0], t[0][1]);
  for (let o = 1; o < t.length - 1; o++)
    e.quadraticCurveTo(
      t[o][0],
      t[o][1],
      (t[o][0] + t[o + 1][0]) / 2,
      (t[o][1] + t[o + 1][1]) / 2,
    );
  return (e.lineTo(t[t.length - 1][0], t[t.length - 1][1]), e);
}
const vr = [
    [520, 760, 130],
    [-1750, -420, 70],
    [1500, 300, 45],
  ],
  kr = uo(400, 30),
  H1 = {
    id: "rootTip",
    name: translate("洋葱根尖有丝分裂装片"),
    slideLabel: [translate("洋葱根尖"), translate("有丝分裂")],
    latin: "Allium cepa",
    layers: [0, 6, 12],
    dynZ: 6,
    extent: 2e3,
    start: [Math.round(kr[0]), Math.round(kr[1])],
    thumb(t, e) {
      const o = e / 22e3,
        { outline: n } = Ji();
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(150,70,160,.55)"),
        t.beginPath(),
        n.forEach(([r, i], c) => (c ? t.lineTo(r, i) : t.moveTo(r, i))),
        t.fill());
      const [s, a] = uo(380, 0);
      ((t.fillStyle = "rgba(110,30,120,.6)"),
        t.beginPath(),
        t.ellipse(s, a, 330, 480, an, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e, o) {
      const n = t.upp > 3 ? 0 : t.upp > 1 ? 1 : 2,
        s = [0, 1, 2].map((r) => t.layer(r).ctxAbs);
      for (const r of [...s, t.ctxPh]) r.lineCap = r.lineJoin = "round";
      const a = At();
      for (const r of xs(e.x0, e.y0, e.x1, e.y1)) {
        const [i, c, d, h] = r.bbox;
        d < e.x0 || i > e.x1 || h < e.y0 || c > e.y1 || U1(a, t, r, n);
      }
      a.flush();
      for (const r of [...s, t.ctxPh])
        ((r.lineCap = "butt"), (r.lineJoin = "miter"));
      (Wt(t, e, {
        seed: 61,
        density: 0.7,
        size: 2.2,
        color: [0.42, 0.16, 0.48],
        z: [1],
      }),
        Wt(t, e, {
          seed: 62,
          density: 0.35,
          size: 4,
          color: [0.7, 0.62, 0.7],
          z: [0, 2],
        }));
      for (const [r, i, c] of vr) et(e, r, i, c) && Ht(t, r, i, c);
    },
    classify(t, e) {
      let o = null,
        n = 1;
      for (const s of xs(t - 20, e - 20, t + 20, e + 20)) {
        if (s.broken) continue;
        const a = Math.hypot(t - s.nx, e - s.ny) / (q1(s) + 3);
        a < n && ((n = a), (o = s));
      }
      return o
        ? {
            id: o.id,
            x: o.nx,
            y: o.ny,
            truth: o.phase,
          }
        : null;
    },
    pick(t, e) {
      for (const [a, r, i] of vr)
        if (Math.hypot(t - a, e - r) < i) return translate("气泡");
      const o = xs(t - 1, e - 1, t + 1, e + 1).filter((a) => Lt(t, e, a.poly));
      if (!o.length) return null;
      for (const a of o) {
        if (a.broken) continue;
        const r = Math.cos(-a.nAng),
          i = Math.sin(-a.nAng),
          c = (t - a.nx) * r - (e - a.ny) * i,
          d = (t - a.nx) * i + (e - a.ny) * r;
        if (a.phase === "interphase") {
          if ((c / (a.rn * a.re)) ** 2 + (d / a.rn) ** 2 < 1)
            return translate("细胞核");
        } else if (a.phase === "prophase") {
          if (Math.hypot(c, d) < a.rn) return translate("染色质丝（前期）");
        } else {
          const h = tc(a);
          if (a.phase === "telophase") {
            if (Math.abs(c) < 0.8 && Math.abs(d) < h.w)
              return translate("细胞板");
            for (const u of h.nuclei)
              if (((c - u.x) / u.rx) ** 2 + ((d - u.y) / u.ry) ** 2 < 1)
                return translate("子细胞核");
          } else {
            for (const u of h.chroms)
              for (const [l, f] of u.pts)
                if (Math.hypot(c - l, d - f) < 1.3) return translate("染色体");
            if (a.phase === "metaphase" && !a.polar && Math.abs(c) < 0.8)
              return translate("赤道板位置（并无实际结构）");
            if (Math.abs(d) < h.w) return translate("纺锤体");
          }
        }
      }
      const n = o[0];
      let s = 1 / 0;
      for (let a = 0; a < n.poly.length; a++) {
        const r = n.poly[a],
          i = n.poly[(a + 1) % n.poly.length],
          c = i[0] - r[0],
          d = i[1] - r[1],
          h = Math.max(
            0,
            Math.min(
              1,
              ((t - r[0]) * c + (e - r[1]) * d) / (c * c + d * d || 1),
            ),
          );
        s = Math.min(s, Math.hypot(t - r[0] - c * h, e - r[1] - d * h));
      }
      return s < 1
        ? translate("细胞壁")
        : n.vessel
          ? translate("导管")
          : [
              translate("根冠细胞"),
              translate("分生区细胞"),
              translate("伸长区细胞"),
              translate("成熟区细胞"),
            ][n.zone];
    },
    info() {
      return translate(
        "<p><b>洋葱根尖</b>（2n = 16）压片，甲紫染色。分生区细胞呈正方形、排列紧密，细胞核大；伸长区细胞变长，不再分裂。</p><p>视野中大多数细胞处于<b>间期</b>——间期在细胞周期中占的时间最长。</p>",
      );
    },
  },
  w0 = 360,
  Ko = 5600,
  Pr = [
    [2300, -1400, 260],
    [-3100, 900, 140],
    [600, 3300, 90],
    [-900, -2600, 60],
  ];
function In(t, e, o, n) {
  return pe(`pnet${t}-${e}-${o}-${n}`, 128, (s, a) => {
    const r = tt(t),
      i = Math.round(Math.sqrt(e)),
      c = [];
    for (let h = 0; h < i; h++)
      for (let u = 0; u < i; u++)
        c.push([
          ((u + 0.5 + (r() - 0.5) * 0.8) / i) * a,
          ((h + 0.5 + (r() - 0.5) * 0.8) / i) * a,
        ]);
    const d = s.createImageData(a, a);
    for (let h = 0; h < a; h++)
      for (let u = 0; u < a; u++) {
        let l = 1 / 0,
          f = 1 / 0;
        for (const [x, k] of c) {
          let M = Math.abs(u - x),
            g = Math.abs(h - k);
          (M > a / 2 && (M = a - M), g > a / 2 && (g = a - g));
          const w = Math.hypot(M, g);
          w < l ? ((f = l), (l = w)) : w < f && (f = w);
        }
        const y = Math.max(0, Math.min(1, (f - l - o) / 2.5)),
          b = n ? 255 - (1 - y) * 150 : (1 - y) * 255,
          m = (h * a + u) * 4;
        ((d.data[m] = d.data[m + 1] = d.data[m + 2] = b),
          (d.data[m + 3] = 255));
      }
    s.putImageData(d, 0, 0);
  });
}
const Qn = {
    pine: {
      w: 0.24,
      name: () => translate("松花粉"),
    },
    sunflower: {
      w: 0.27,
      name: () => translate("向日葵花粉"),
    },
    lily: {
      w: 0.15,
      name: () => translate("百合花粉"),
    },
    hibiscus: {
      w: 0.09,
      name: () => translate("木槿花粉"),
    },
    maize: {
      w: 0.17,
      name: () => translate("玉米花粉"),
    },
    pumpkin: {
      w: 0.08,
      name: () => translate("南瓜花粉"),
    },
  },
  G1 = Object.keys(Qn);
function X1(t) {
  let e = t();
  for (const o of G1) {
    if (e < Qn[o].w) return o;
    e -= Qn[o].w;
  }
  return "sunflower";
}
function $r(t, e, o, n) {
  const s = {
    type: t,
    x: e,
    y: o,
    rot: n() * Math.PI,
    seed: Math.floor(n() * 1e9),
    empty: n() < 0.14,
    up: n() < 0.5,
  };
  return (
    t === "pine"
      ? (s.R = v(n, 24, 29))
      : t === "sunflower"
        ? (s.R = v(n, 13, 16))
        : t === "lily"
          ? (s.R = v(n, 42, 50))
          : t === "hibiscus"
            ? (s.R = v(n, 56, 64))
            : t === "maize"
              ? (s.R = v(n, 40, 47))
              : (s.R = v(n, 62, 72)),
    (s.ext =
      t === "pine"
        ? s.R * 1.95
        : t === "lily"
          ? s.R
          : s.R + (t === "hibiscus" ? 12 : t === "pumpkin" ? 8 : 4)),
    (s.folded = t === "maize" && n() < 0.5),
    s
  );
}
function Tr(t, e) {
  const o = jt(t, e, 733),
    n = t * w0,
    s = e * w0,
    a = Math.hypot(n + w0 / 2, (s + w0 / 2) * 1.15) / Ko;
  if (a > 1.05) return [];
  const r = [],
    i = Math.floor((1.4 - a) * 3.2 + o());
  for (let c = 0; c < i; c++) r.push($r(X1(o), n + o() * w0, s + o() * w0, o));
  if (o() < 0.1 * (1.2 - a)) {
    const c = o() < 0.6 ? "sunflower" : "pine",
      d = 4 + Math.floor(o() * 8);
    let h = n + o() * w0,
      u = s + o() * w0;
    for (let l = 0; l < d; l++) {
      const f = $r(c, h, u, o);
      r.push(f);
      const y = o() * Math.PI * 2;
      ((h += Math.cos(y) * f.ext * 1.7), (u += Math.sin(y) * f.ext * 1.7));
    }
  }
  return r;
}
const Ir = [0.8, 0.66, 0.4],
  V1 = [0.9, 0.76, 0.82],
  K1 = [0.975, 0.96, 0.94];
function Z1(t, e, o, n) {
  const s = tt(o.seed),
    { x: a, y: r, R: i, rot: c } = o,
    d = Math.cos(c),
    h = Math.sin(c),
    u = (g, w) => [a + g * d - w * h, r + g * h + w * d],
    l = o.empty ? K1 : V1,
    f = (g, w) => t.add(g, ($) => Q1(e, g, $), w),
    y = o.empty ? "e" : "f",
    b = (g, w, $ = 0.9) => {
      (t.add(
        `b${y}`,
        (L) => {
          (e.layer(1),
            e.both(L, l, $),
            n >= 1 &&
              e.pattern(
                L,
                wt(54, {
                  n: 1800,
                  dark: o.empty ? 0.15 : 0.45,
                  r0: 0.8,
                  r1: 2.6,
                }),
                0.25,
                0.8,
              ));
        },
        g,
      ),
        t.add(
          `w${Math.round(w * 2)}`,
          (L) => {
            (e.layer(1),
              e.strokeBoth(L, w, Ir, 1.1),
              n &&
                e.strokeAbs(
                  L,
                  Math.max(0.5, w * 0.25),
                  [0.62, 0.5, 0.32],
                  0.8,
                ));
          },
          g,
        ));
    },
    m = (g, w, $ = w) => {
      if (n < 1) return;
      const L = U(a, r, w, $, c),
        j = U(a + 0.5, r - 0.4, w * 0.92, $ * 0.92, c);
      (f(`t${g}`, L), f(`d${g}`, j));
    };
  if (o.type === "pine") {
    const g = i * v(s, 0.78, 0.92),
      w = i * 0.95,
      $ = U(a, r, i, i * 0.86, c);
    for (const L of [-1, 1]) {
      const [j, T] = u(L * w, i * 0.12),
        S = U(j, T, g * 0.86, g * 1.08, c);
      if (
        (t.add(
          "sac",
          (R) => {
            (e.layer(1),
              e.both(R, [0.95, 0.9, 0.82], 0.55),
              e.strokeBoth(R, 1.6, Ir, 1.2));
          },
          S,
        ),
        n >= 1 &&
          (f("tsac", U(j, T, g * 0.8, g * 1, c)),
          f("dsac", U(j, T + 0.5, g * 0.75, g * 0.95, c))),
        n >= 1)
      ) {
        const R = new Path2D(),
          [C, A] = u(L * i * 0.62, i * 0.1);
        (R.ellipse(C, A, i * 0.18, i * 0.72, c, 0, Math.PI * 2),
          t.add(
            "sacb",
            (D) => {
              (e.layer(1), e.strokeBoth(D, 1.2, [0.75, 0.62, 0.4], 0.8, 0.8));
            },
            R,
          ));
      }
    }
    (b($, 2.6), m("cap", i * 0.75, i * 0.62));
    return;
  }
  if (o.type === "lily") {
    const g = i,
      w = i * v(s, 0.56, 0.66),
      $ = Mt(a, r, 1, {
        n: 30,
        amp: 0.04,
        seed: o.seed & 65535,
        sx: g,
        sy: w,
        rot: c,
      }),
      L = yt($);
    if ((b(L, 2.4, 0.8), n < 1)) return;
    f(o.up ? "dnetL" : "tnetL", U(a, r, g * 0.78, w * 0.7, c));
    const j = U(...u(0, w * 0.1), g * 0.82, w * 0.17, c),
      T = U(a, r, g * 0.78, w * 0.7, c),
      S = new Path2D();
    if (
      (S.addPath(T),
      S.ellipse(...u(0, w * 0.1), g * 0.82, w * 0.17, c, 0, Math.PI * 2, !0),
      f(o.up ? "tnetL" : "dnetL", S),
      f(o.up ? "tsul" : "dsul", j),
      n >= 2)
    ) {
      const R = new Path2D();
      for (let C = 0; C < 64; C++) {
        const A = (C / 64) * Math.PI * 2,
          [D, W] = u(Math.cos(A) * (g + 1.4), Math.sin(A) * (w + 1.4));
        (R.moveTo(D + 0.7, W), R.arc(D, W, 0.7, 0, Math.PI * 2));
      }
      t.add(
        "bead",
        (C) => {
          (e.layer(1), e.both(C, [0.72, 0.6, 0.4], 1));
        },
        R,
      );
    }
    return;
  }
  const x = U(
      a,
      r,
      i,
      i * (o.type === "maize" && o.folded ? v(s, 0.8, 0.92) : 1),
      c,
    ),
    k = o.type === "sunflower" ? 2.6 : o.type === "maize" ? 1.4 : 3.2;
  if ((b(x, k, o.type === "maize" ? 0.7 : 0.9), o.type === "maize")) {
    const g = s() * Math.PI * 2,
      w = i * v(s, 0, 0.75),
      [$, L] = u(Math.cos(g) * w, Math.sin(g) * w),
      j = U($, L, 2.2, 2.2),
      T = U($, L, 4.6, 4.6 * (1 - (w / i) * 0.5), g);
    if (
      (f(o.up ? "tpore" : "dpore", T),
      f(o.up ? "tporeh" : "dporeh", j),
      o.folded && n >= 1)
    )
      for (let S = 0; S < 2; S++) {
        const R = s() * Math.PI,
          C = i * v(s, 0.8, 1.6),
          A = v(s, -0.4, 0.4) * i,
          D = v(s, -0.4, 0.4) * i;
        t.add(
          "fold",
          (W) => {
            (e.layer(1), e.strokeBoth(W, 1.6, [0.82, 0.72, 0.6], 0.9));
          },
          F0([
            [a + A - (Math.cos(R) * C) / 2, r + D - (Math.sin(R) * C) / 2],
            [a + A + v(s, -8, 8), r + D + v(s, -8, 8)],
            [a + A + (Math.cos(R) * C) / 2, r + D + (Math.sin(R) * C) / 2],
          ]),
        );
      }
    n >= 2 && f("tgr", U(a, r, i * 0.7, i * 0.7));
    return;
  }
  const M =
    o.type === "sunflower"
      ? {
          n: 18,
          len: 4.2,
          base: 2.4,
          step: 5.6,
          rd: 0.9,
        }
      : o.type === "hibiscus"
        ? {
            n: 34,
            len: 10,
            base: 3.4,
            step: 13,
            rd: 1.8,
          }
        : {
            n: 30,
            len: 7,
            base: 3,
            step: 14,
            rd: 1.5,
          };
  if (n >= 1) {
    const g = new Path2D(),
      w = s() * 6.3;
    for (let $ = 0; $ < M.n; $++) {
      const L = w + ($ / M.n) * Math.PI * 2 + (s() - 0.5) * 0.12,
        j = Math.cos(L),
        T = Math.sin(L),
        S = M.base / 2 / i,
        R = [a + Math.cos(L - S) * (i - 0.5), r + Math.sin(L - S) * (i - 0.5)],
        C = [a + j * (i + M.len), r + T * (i + M.len)],
        A = [a + Math.cos(L + S) * (i - 0.5), r + Math.sin(L + S) * (i - 0.5)];
      (g.moveTo(R[0], R[1]),
        g.quadraticCurveTo(
          a + j * (i + M.len * 0.35),
          r + T * (i + M.len * 0.35),
          C[0],
          C[1],
        ),
        g.quadraticCurveTo(
          a + j * (i + M.len * 0.35),
          r + T * (i + M.len * 0.35),
          A[0],
          A[1],
        ),
        g.closePath());
    }
    t.add(
      "spk",
      ($) => {
        (e.layer(1), e.both($, [0.8, 0.68, 0.46], 1.1));
      },
      g,
    );
    for (const [$, L] of [
      [1, "t"],
      [-1, "d"],
    ]) {
      const j = new Path2D(),
        T = new Path2D(),
        S = i * 0.72,
        R = tt(o.seed + $);
      for (let C = -S; C <= S; C += M.step * 0.87)
        for (let A = -S; A <= S; A += M.step) {
          const D =
              A +
              (Math.round(C / (M.step * 0.87)) & 1 ? M.step / 2 : 0) +
              (R() - 0.5) * M.step * 0.3,
            W = C + (R() - 0.5) * M.step * 0.3;
          if (D * D + W * W > S * S) continue;
          const [O, N] = u(D, W);
          (j.moveTo(O + M.rd * 0.5, N),
            j.arc(O, N, M.rd * 0.5, 0, Math.PI * 2),
            T.moveTo(O + M.rd * 1.4, N),
            T.arc(O, N, M.rd * 1.4, 0, Math.PI * 2));
        }
      (f(`${L}spb`, T), f(`${L}spd`, j));
    }
  }
  if (n >= 1) {
    const g = new Path2D();
    if (o.type === "sunflower") {
      const w = s() * 6.3;
      for (let $ = 0; $ < 3; $++) {
        const L = w + ($ * Math.PI * 2) / 3,
          [j, T] = [a + Math.cos(L) * (i - 1.6), r + Math.sin(L) * (i - 1.6)];
        (g.moveTo(j + 2.2, T), g.ellipse(j, T, 2.2, 1.5, L, 0, Math.PI * 2));
      }
      t.add(
        "mpore",
        ($) => {
          (e.layer(1),
            e.both($, [0.97, 0.94, 0.92], 0.2),
            e.strokeBoth($, 0.7, [0.7, 0.58, 0.4], 0.8));
        },
        g,
      );
    } else {
      const w = i * 0.6;
      for (let $ = 0; $ < 5; $++) {
        const L = s() * 6.3,
          j = Math.sqrt(s()) * w,
          [T, S] = u(Math.cos(L) * j, Math.sin(L) * j);
        (g.moveTo(T + 3, S), g.arc(T, S, 3, 0, Math.PI * 2));
      }
      f("tporeh", g);
    }
  }
  n >= 2 && f("tgr", U(a, r, i * 0.72, i * 0.72));
}
function Q1(t, e, o) {
  const n = e[0] === "t" ? 2 : 0,
    s = e.slice(1);
  t.layer(n);
  const a = n === 0 ? 0.75 : 1;
  s === "cap"
    ? (t.pattern(
        o,
        wt(51, {
          n: 1400,
          dark: 0.5,
          r0: 0.8,
          r1: 2.4,
        }),
        0.12,
        0.8 * a,
      ),
      t.phasePattern(
        o,
        wt(52, {
          n: 1400,
          dark: 0.9,
          r0: 0.8,
          r1: 2.4,
        }),
        0.12,
        0.3,
      ))
    : s === "sac"
      ? (t.pattern(o, In(3, 81, 2.4, !0), 0.11, 0.55 * a),
        t.phasePattern(o, In(3, 81, 2.4, !1), 0.11, 0.7))
      : s === "netL"
        ? (t.pattern(o, In(7, 49, 3.2, !0), 0.3, 0.95 * a),
          t.phasePattern(o, In(7, 49, 3.2, !1), 0.3, 1.1))
        : s === "sul"
          ? (t.abs(o, [0.95, 0.92, 0.88], a), t.phase(o, 0.15))
          : s === "pore"
            ? t.strokeBoth(o, 2.6, [0.72, 0.6, 0.42], 1.1, a)
            : s === "poreh"
              ? (t.both(o, [0.94, 0.9, 0.86], 0.25, a),
                t.strokeAbs(o, 0.6, [0.68, 0.56, 0.38], a))
              : s === "spb"
                ? t.both(o, [0.9, 0.82, 0.68], 0.5, a)
                : s === "spd"
                  ? t.both(o, [0.6, 0.48, 0.3], 1.2, a)
                  : s === "gr" &&
                    t.pattern(
                      o,
                      wt(53, {
                        n: 2600,
                        dark: 0.35,
                        r0: 0.6,
                        r1: 1.4,
                      }),
                      0.1,
                      0.55 * a,
                    );
}
const a0 = {
    x: -400,
    y: 300,
    r: 6400,
  },
  J1 = {
    id: "pollen",
    name: translate("花粉粒装片"),
    slideLabel: [translate("花粉粒"), translate("混合")],
    layers: [0, 22, 44],
    dynZ: 22,
    extent: Ko,
    start: [380, -260],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(240,225,200,.45)"),
        t.beginPath(),
        t.arc(a0.x, a0.y, a0.r, 0, 7),
        t.fill());
      const n = t.createRadialGradient(0, 0, 0, 0, 0, Ko);
      (n.addColorStop(0, "rgba(215,170,80,.55)"),
        n.addColorStop(1, "rgba(215,170,80,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.ellipse(0, 0, Ko, Ko / 1.15, 0, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      const o = t.upp > 3 ? 0 : t.upp > 0.9 ? 1 : 2,
        n = At();
      (Rt(e, w0, 140, 0, (a, r, i, c, d) => {
        for (const h of Tr(c, d)) et(e, h.x, h.y, h.ext + 12) && Z1(n, t, h, o);
      }),
        n.flush());
      const s = new Path2D();
      (s.arc(a0.x, a0.y, a0.r, 0, Math.PI * 2),
        (e.x0 > a0.x - a0.r * 0.7 &&
          e.x1 < a0.x + a0.r * 0.7 &&
          e.y0 > a0.y - a0.r * 0.7 &&
          e.y1 < a0.y + a0.r * 0.7) ||
          (t.layer(1),
          t.strokeBoth(s, 14, [0.82, 0.8, 0.74], 1.6),
          t.strokeAbs(s, 3, [0.45, 0.42, 0.38], 0.8)),
        Wt(t, e, {
          seed: 81,
          density: 0.5,
          size: 3,
          color: [0.62, 0.52, 0.36],
        }));
      for (const [a, r, i] of Pr) et(e, a, r, i) && Ht(t, a, r, i);
    },
    pick(t, e) {
      for (const [c, d, h] of Pr)
        if (Math.hypot(t - c, e - d) < h) return translate("气泡");
      const o = Math.floor((t - 140) / w0),
        n = Math.floor((t + 140) / w0),
        s = Math.floor((e - 140) / w0),
        a = Math.floor((e + 140) / w0);
      let r = null,
        i = 1 / 0;
      for (let c = o; c <= n; c++)
        for (let d = s; d <= a; d++)
          for (const h of Tr(c, d)) {
            const u = Math.cos(-h.rot),
              l = Math.sin(-h.rot),
              f = (t - h.x) * u - (e - h.y) * l,
              y = (t - h.x) * l + (e - h.y) * u;
            let b;
            if (h.type === "pine") {
              ((b = Math.min(
                Math.hypot(f / h.R, y / (h.R * 0.86)),
                Math.hypot(
                  (Math.abs(f) - h.R * 0.95) / (h.R * 0.75),
                  (y - h.R * 0.12) / (h.R * 0.95),
                ),
              )),
                b < 1 &&
                  b < i &&
                  ((i = b),
                  (r =
                    Math.hypot(f / h.R, y / (h.R * 0.86)) < 1
                      ? translate("松花粉（本体）")
                      : translate("松花粉的气囊"))));
              continue;
            }
            if (
              ((b =
                h.type === "lily"
                  ? Math.hypot(f / h.R, y / (h.R * 0.6))
                  : Math.hypot(f, y) / h.ext),
              b < 1 && b < i)
            ) {
              i = b;
              const m = Qn[h.type].name();
              r =
                h.type === "sunflower" ||
                h.type === "hibiscus" ||
                h.type === "pumpkin"
                  ? Math.hypot(f, y) > h.R
                    ? translate("外壁上的刺")
                    : m
                  : h.type === "lily" &&
                      Math.abs(y - h.R * 0.06) < h.R * 0.1 &&
                      Math.abs(f) < h.R * 0.8
                    ? translate("萌发沟")
                    : m;
            }
          }
      return r;
    },
    info() {
      return translate(
        "<p>花粉粒的<b>外壁</b>有各种纹饰（刺、网纹）和<b>萌发孔 / 萌发沟</b>，形态是鉴定植物的依据。松花粉有两个<b>气囊</b>，适于风媒传粉；向日葵、木槿花粉具刺，为虫媒花粉。</p><p>花粉粒较厚：<b>调节细准焦螺旋</b>，可依次看到表面纹饰、光学切面的轮廓和另一面的纹饰。</p>",
      );
    },
  },
  D0 = 260,
  Yn = 6e3,
  Lr = [
    [1400, -900, 120],
    [-2200, 1600, 70],
    [300, 2600, 200],
  ],
  th = [
    ["navicula", 0.24],
    ["pinnularia", 0.09],
    ["pleurosigma", 0.05],
    ["synedra", 0.1],
    ["fragilaria", 0.05],
    ["cymbella", 0.1],
    ["coscinodiscus", 0.06],
    ["cyclotella", 0.14],
    ["arachnoidiscus", 0.02],
    ["girdle", 0.08],
    ["fragment", 0.07],
  ],
  Ln = {
    navicula: () => translate("舟形藻"),
    pinnularia: () => translate("羽纹藻"),
    pleurosigma: () => translate("布纹藻（分辨率测试）"),
    synedra: () => translate("针杆藻"),
    fragilaria: () => translate("脆杆藻（链状群体）"),
    cymbella: () => translate("桥弯藻"),
    coscinodiscus: () => translate("圆筛藻"),
    cyclotella: () => translate("小环藻"),
    arachnoidiscus: () => translate("蛛网藻"),
    girdle: () => translate("硅藻壳的环带面（侧面观）"),
    fragment: () => translate("破碎的硅藻壳"),
  };
function Ta(t, e, o, n) {
  const s = {
    kind: t,
    x: e,
    y: o,
    rot: n() * Math.PI * 2,
    seed: Math.floor(n() * 1e9),
  };
  return t === "fragment"
    ? ((s.base = [
        "navicula",
        "pinnularia",
        "coscinodiscus",
        "synedra",
        "pleurosigma",
      ][Math.floor(n() * 5)]),
      Object.assign(s, Ta(s.base, e, o, n), {
        kind: t,
        base: s.base,
      }),
      (s.cut = [n() * Math.PI * 2, v(n, -0.3, 0.3)]),
      s)
    : (t === "navicula"
        ? Object.assign(s, {
            L: v(n, 22, 60),
            p: v(n, 0.62, 0.8),
          })
        : t === "pinnularia"
          ? Object.assign(s, {
              L: v(n, 55, 150),
              p: v(n, 1.05, 1.35),
            })
          : t === "pleurosigma"
            ? Object.assign(s, {
                L: v(n, 150, 200),
                p: v(n, 0.52, 0.6),
              })
            : t === "synedra"
              ? Object.assign(s, {
                  L: v(n, 100, 300),
                  p: v(n, 0.8, 1),
                })
              : t === "fragilaria"
                ? Object.assign(s, {
                    L: v(n, 25, 42),
                    n: 4 + Math.floor(n() * 14),
                    t: v(n, 3, 4.2),
                    p: 0.7,
                  })
                : t === "cymbella"
                  ? Object.assign(s, {
                      L: v(n, 30, 80),
                      p: v(n, 0.8, 1),
                    })
                  : t === "coscinodiscus"
                    ? Object.assign(s, {
                        L: v(n, 50, 180),
                        p: v(n, 1.4, 2.4),
                      })
                    : t === "cyclotella"
                      ? Object.assign(s, {
                          L: v(n, 9, 26),
                          p: v(n, 0.8, 1.1),
                        })
                      : t === "arachnoidiscus"
                        ? Object.assign(s, {
                            L: v(n, 100, 220),
                            p: 0,
                          })
                        : t === "girdle" &&
                          Object.assign(s, {
                            L: v(n, 25, 120),
                            D: v(n, 6, 16),
                            p: 1.5,
                          }),
      (s.W =
        {
          navicula: s.L * v(n, 0.22, 0.3),
          pinnularia: s.L * v(n, 0.13, 0.18),
          pleurosigma: v(n, 19, 26),
          synedra: v(n, 4.5, 7.5),
          cymbella: s.L * v(n, 0.24, 0.32),
        }[t] ?? s.L),
      (s.ext =
        t === "fragilaria" ? Math.hypot(s.L, s.n * s.t) / 2 + 2 : s.L / 2 + 2),
      s);
}
function eh(t) {
  let e = t();
  for (const [o, n] of th) {
    if (e < n) return o;
    e -= n;
  }
  return "navicula";
}
const Sr = (() => {
  const t = tt(4242),
    e = (n, s, a, r, i = {}) =>
      Object.assign(
        Ta(n, s, a, t),
        {
          rot: r,
        },
        i,
      ),
    o = [
      e("pleurosigma", -30, 20, 0.35, {
        L: 186,
        W: 23,
        p: 0.56,
      }),
      e("arachnoidiscus", 170, -120, 0, {
        L: 170,
      }),
      e("coscinodiscus", -190, -120, 0, {
        L: 120,
        p: 1.9,
      }),
      e("navicula", 80, 95, 1.9, {
        L: 48,
        W: 12,
        p: 0.68,
      }),
      e("pinnularia", -150, 150, -0.4, {
        L: 120,
        W: 19,
        p: 1.2,
      }),
      e("synedra", 30, -200, 2.9, {
        L: 240,
        W: 6,
      }),
      e("cyclotella", 140, 40, 0, {
        L: 18,
        p: 0.95,
      }),
      e("cyclotella", 175, 70, 0, {
        L: 12,
        p: 0.9,
      }),
      e("cymbella", -70, -60, 0.6, {
        L: 60,
        W: 17,
        p: 0.9,
      }),
      e("fragilaria", 240, 170, 1.2, {
        L: 34,
        n: 10,
        t: 3.6,
      }),
    ];
  for (const n of o)
    n.ext =
      n.kind === "fragilaria"
        ? Math.hypot(n.L, n.n * n.t) / 2 + 2
        : n.L / 2 + 2;
  return o;
})();
function jr(t, e) {
  const o = jt(t, e, 919),
    n = t * D0,
    s = e * D0,
    a = Math.hypot(n + D0 / 2, s + D0 / 2) / Yn;
  if (a > 1.05) return [];
  const r = [],
    i = Math.floor((1.25 - a) * 1.6 + o());
  for (let c = 0; c < i; c++) {
    const d = n + o() * D0,
      h = s + o() * D0;
    Math.hypot(d, h) < 330 || r.push(Ta(eh(o), d, h, o));
  }
  return r;
}
function Ia(t) {
  const { L: e, W: o } = t,
    n = o / 2,
    s = t.kind === "fragment" ? t.base : t.kind;
  return (a) => {
    const r = Math.min(1, Math.abs((2 * a) / e));
    if (s === "navicula") {
      const i = n * Math.pow(1 - Math.pow(r, 2.3), 0.6);
      return [i, -i, 0];
    }
    if (s === "pinnularia") {
      const i =
        n *
        Math.pow(1 - Math.pow(r, 7), 0.5) *
        (1 - 0.06 * Math.cos(r * Math.PI * 3));
      return [i, -i, 0];
    }
    if (s === "pleurosigma") {
      const i = n * Math.pow(1 - r * r, 0.95),
        c = 0.09 * e * Math.sign(a) * r * r * r;
      return [c + i, c - i, c];
    }
    if (s === "synedra") {
      const i =
        n *
        Math.pow(1 - Math.pow(r, 14), 0.5) *
        (1 - 0.18 * Math.exp(-(((r - 0.88) / 0.05) ** 2)));
      return [i, -i, 0];
    }
    if (s === "cymbella") {
      const i = o * 0.66 * Math.pow(1 - r * r, 0.6),
        c =
          -o *
          0.34 *
          Math.pow(1 - Math.pow(r, 2.4), 0.7) *
          (1 - 0.35 * (1 - r * r));
      return [i, c, 0];
    }
    return [n, -n, 0];
  };
}
function oh(t) {
  const e = Ia(t),
    o = 40,
    n = [],
    s = [];
  for (let a = 0; a <= o; a++) {
    const r = (-Math.cos((a / o) * Math.PI) * t.L) / 2,
      [i, c] = e(r);
    (n.push([r, i]), s.push([r, c]));
  }
  return n.concat(s.reverse());
}
const vs = [0.99, 0.985, 0.965],
  ks = [0.9, 0.88, 0.83],
  Ps = [0.8, 0.79, 0.75],
  nh = {
    4: 0.1,
    10: 0.25,
    40: 0.65,
    100: 1.25,
  };
function sh(t, e, o) {
  if (!t) return 0;
  const n = o?.objMag ?? 40,
    s = n === 100 && !o?.oiled ? 0.95 : (nh[n] ?? 0.65);
  if (t < 0.55 / s) return 0;
  const a = Math.max(t, e.upp * 2.2);
  return a > t * 1.35 ? 0 : a;
}
function No(t, e, o) {
  const n = t.layerIndex,
    s = [0, 1, 2].map((r) => t.layer(r).ctxAbs);
  t.layer(n);
  const a = [...s, t.ctxPh];
  for (const r of a) (r.save(), r.clip(e));
  o();
  for (const r of a) r.restore();
}
function $s(t, e, o, n, s, a = 0) {
  const [r, i, c, d] = o,
    h = (r + c) / 2,
    u = (i + d) / 2,
    l = Math.hypot(c - r, d - i) / 2,
    f = Math.cos(n),
    y = Math.sin(n);
  for (let b = -l + (a % s); b <= l; b += s) {
    const m = h - y * b,
      x = u + f * b,
      k = e(m - f * l, x - y * l),
      M = e(m + f * l, x + y * l);
    (t.moveTo(k[0], k[1]), t.lineTo(M[0], M[1]));
  }
  return t;
}
function ah(t, e, o, n, s) {
  const { x: a, y: r, rot: i } = o,
    c = Math.cos(i),
    d = Math.sin(i),
    h = (j, T) => [a + j * c - T * d, r + j * d + T * c],
    u = o.kind === "fragment" ? o.base : o.kind,
    l = tt(o.seed),
    f = sh(o.p, e, s),
    y = f > 0;
  let b = null;
  if (o.kind === "fragment") {
    const [j, T] = o.cut,
      S = Math.cos(j),
      R = Math.sin(j),
      C = T * o.L,
      A = o.L,
      D = [
        [C, -A],
        [C + l() * 6 - 3, -A * 0.3],
        [C + l() * 6 - 3, A * 0.3],
        [C, A],
        [-A, A],
        [-A, -A],
      ].map(([W, O]) => h(W * S - O * R, W * R + O * S));
    b = it(D);
  }
  const m = (j) => {
      b
        ? No(e, b, () => {
            (e.layer(1),
              e.both(j, vs, 0.35),
              e.strokeBoth(j, 1.3, ks, 0.7),
              e.layer(0),
              e.strokeBoth(j, 0.9, [0.97, 0.96, 0.94], 0.3),
              e.layer(2),
              e.strokeBoth(j, 0.8, [0.95, 0.94, 0.91], 0.5));
          })
        : t.add(
            "body",
            (S) => {
              (e.layer(1),
                e.both(S, vs, 0.35),
                e.strokeBoth(S, 1.3, ks, 0.7),
                e.layer(0),
                e.strokeBoth(S, 0.9, [0.97, 0.96, 0.94], 0.3),
                e.layer(2),
                e.strokeBoth(S, 0.8, [0.95, 0.94, 0.91], 0.5));
            },
            j,
          );
    },
    x = (j, T, S, R = 0.75, C) => {
      if (!(n < 1)) {
        if (!y || !T) {
          (t.add(
            "avg",
            (A) => {
              (e.layer(2), e.both(A, [0.985, 0.98, 0.965], 0.2));
            },
            j,
          ),
            C && C());
          return;
        }
        (No(
          e,
          b
            ? (() => {
                const A = new Path2D();
                return (A.addPath(b), A);
              })()
            : j,
          () => {
            if (b) {
              const A = [0, 1, 2].map((D) => e.layer(D).ctxAbs);
              for (const D of [...A, e.ctxPh]) (D.save(), D.clip(j));
              (e.layer(2), e.strokeBoth(T, S, Ps, R));
              for (const D of [...A, e.ctxPh]) D.restore();
            } else (e.layer(2), e.strokeBoth(T, S, Ps, R));
          },
        ),
          C && C());
      }
    };
  if (u === "fragilaria") {
    const j = o.n,
      T = o.t;
    for (let S = 0; S < j; S++) {
      const R = (S - j / 2 + 0.5) * T,
        C = [
          h(-o.L / 2, R - T / 2 + 0.2),
          h(o.L / 2, R - T / 2 + 0.2),
          h(o.L / 2, R + T / 2 - 0.2),
          h(-o.L / 2, R + T / 2 - 0.2),
        ];
      if (
        (t.add(
          "body",
          (A) => {
            (e.layer(1),
              e.both(A, vs, 0.35),
              e.strokeBoth(A, 1.3, ks, 0.7),
              e.layer(0),
              e.strokeBoth(A, 0.9, [0.97, 0.96, 0.94], 0.3));
          },
          it(C),
        ),
        n >= 1)
      ) {
        const A = new Path2D(),
          D = h(-o.L / 2 + 1, R),
          W = h(o.L / 2 - 1, R);
        if (
          (A.moveTo(D[0], D[1]),
          A.lineTo(W[0], W[1]),
          t.add(
            "gl",
            (O) => {
              (e.layer(1), e.strokeBoth(O, 0.5, [0.95, 0.94, 0.91], 0.4));
            },
            A,
          ),
          y)
        ) {
          const O = new Path2D();
          for (const N of [-1, 1])
            for (let V = -o.L / 2 + 0.6; V < o.L / 2; V += f) {
              const [st, ft] = h(V, R + N * (T / 2 - 0.7));
              (O.moveTo(st + 0.18, ft), O.arc(st, ft, 0.18, 0, Math.PI * 2));
            }
          t.add(
            "dots",
            (N) => {
              (e.layer(2), e.both(N, Ps, 0.6));
            },
            O,
          );
        }
      }
    }
    return;
  }
  if (o.kind === "girdle") {
    const j = o.D / 2,
      T = [h(-o.L / 2, -j), h(o.L / 2, -j), h(o.L / 2, j), h(-o.L / 2, j)];
    if ((m(it(T)), n >= 1)) {
      const S = new Path2D();
      for (let R = 1; R < Math.floor(o.D / 1.6); R++) {
        const C = -j + R * 1.6,
          A = h(-o.L / 2 + 1.5, C),
          D = h(o.L / 2 - 1.5, C);
        (S.moveTo(A[0], A[1]), S.lineTo(D[0], D[1]));
      }
      t.add(
        "gl",
        (R) => {
          (e.layer(1), e.strokeBoth(R, 0.5, [0.95, 0.94, 0.91], 0.4));
        },
        S,
      );
    }
    return;
  }
  if (u === "coscinodiscus" || u === "cyclotella" || u === "arachnoidiscus") {
    const j = o.L / 2,
      T = U(a, r, j, j);
    if ((m(T), n < 1)) return;
    if (u === "coscinodiscus") {
      const O = new Path2D();
      if (y) {
        const N = f;
        (O.moveTo(a + N * 0.9, r), O.arc(a, r, N * 0.9, 0, Math.PI * 2));
        for (let st = N * 1.6; st < j - 1.2; st += N * 0.87) {
          const ft = Math.max(6, Math.round((2 * Math.PI * st) / N)),
            F = l() * 6.3,
            H = N * (0.36 - 0.08 * (st / j));
          for (let K = 0; K < ft; K++) {
            const J = F + (K / ft) * Math.PI * 2,
              ot = a + Math.cos(J) * st,
              dt = r + Math.sin(J) * st;
            (O.moveTo(ot + H, dt), O.arc(ot, dt, H, 0, Math.PI * 2));
          }
        }
        const V = () => {
          (e.layer(2),
            e.both(T, [0.97, 0.96, 0.94], 0.5),
            e.abs(O, [0.86, 0.85, 0.82]),
            e.phase(O, 0.45));
        };
        b ? No(e, b, V) : V();
      } else x(T, null, 0);
      return;
    }
    if (u === "cyclotella") {
      if (y) {
        const O = new Path2D(),
          N = Math.round((2 * Math.PI * j) / f);
        for (let V = 0; V < N; V++) {
          const st = (V / N) * Math.PI * 2;
          (O.moveTo(a + Math.cos(st) * j * 0.6, r + Math.sin(st) * j * 0.6),
            O.lineTo(a + Math.cos(st) * j, r + Math.sin(st) * j));
        }
        x(T, O, f * 0.45);
      } else x(T, null, 0);
      t.add(
        "cc",
        (O) => {
          (e.layer(2), e.both(O, [0.975, 0.97, 0.95], 0.25));
        },
        U(a + j * 0.08, r - j * 0.05, j * 0.3, j * 0.26),
      );
      return;
    }
    const S = 36 + Math.floor(l() * 20),
      R = new Path2D(),
      C = new Path2D(),
      A = j * 0.2;
    for (let O = 0; O < S; O++) {
      const N = (O / S) * Math.PI * 2 + i,
        V = O % 2 ? A * 1.6 : A;
      (R.moveTo(a + Math.cos(N) * V, r + Math.sin(N) * V),
        R.lineTo(a + Math.cos(N) * (j - 1), r + Math.sin(N) * (j - 1)));
    }
    const D = 9;
    for (let O = 1; O <= D; O++) {
      const N = A * 1.6 + ((j - A * 1.6) * O) / (D + 0.6);
      for (let V = 0; V < S; V++) {
        const st = (V / S) * Math.PI * 2 + i,
          ft = ((V + 1) / S) * Math.PI * 2 + i,
          F = [a + Math.cos(st) * N, r + Math.sin(st) * N],
          H = [a + Math.cos(ft) * N, r + Math.sin(ft) * N],
          K = (st + ft) / 2,
          J = N * 0.985;
        (C.moveTo(F[0], F[1]),
          C.quadraticCurveTo(
            a + Math.cos(K) * J,
            r + Math.sin(K) * J,
            H[0],
            H[1],
          ));
      }
    }
    const W = () => {
      (e.layer(2),
        e.strokeBoth(R, 1.4, [0.9, 0.89, 0.85], 0.9),
        (n >= 2 || e.upp < 1.2) &&
          e.strokeBoth(C, 0.6, [0.94, 0.93, 0.9], 0.55),
        e.strokeBoth(U(a, r, A, A), 1, [0.9, 0.89, 0.85], 0.7),
        e.layer(1),
        e.strokeBoth(R, 1, [0.96, 0.95, 0.93], 0.35));
    };
    b ? No(e, b, W) : W();
    return;
  }
  const k = oh(o).map(([j, T]) => h(j, T)),
    M = it(k);
  if ((m(M), n < 1)) return;
  const g = Ia(o),
    w = o.L / 2;
  let $ = null;
  if (y)
    if ((($ = new Path2D()), u === "pleurosigma")) {
      const j = [-w, -o.W, w, o.W];
      ($s($, h, j, Math.PI / 2, f),
        $s($, h, j, Math.PI / 6, f * 1.02, 0.2),
        $s($, h, j, -Math.PI / 6, f * 1.02, 0.4));
    } else {
      const j = u === "pinnularia" ? o.W * 0.12 : u === "synedra" ? 0.6 : 0.55;
      for (let T = -w + f * 0.6; T < w; T += f) {
        const [S, R, C] = g(T),
          A = T / w,
          D =
            u === "navicula" || u === "pinnularia" || u === "cymbella"
              ? Math.exp(-((T / (o.W * 0.35)) ** 2))
              : 0,
          W = j + D * o.W * 0.18,
          O =
            u === "navicula" || u === "cymbella"
              ? 0.25 * A
              : u === "pinnularia"
                ? -0.2 * A
                : 0;
        for (const [N, V] of [
          [S, 1],
          [R, -1],
        ]) {
          const st = C + V * W,
            ft = N + V * 0.5;
          if ((ft - st) * V <= 0) continue;
          const F = h(T, st),
            H = h(T + O * Math.abs(ft - st), ft);
          ($.moveTo(F[0], F[1]), $.lineTo(H[0], H[1]));
        }
      }
    }
  const L = u === "pinnularia" ? f * 0.5 : f * 0.42;
  x(M, $, L, u === "pinnularia" ? 0.95 : 0.75, () => {
    if (u === "synedra" || n < 1) return;
    const j = new Path2D();
    for (const C of [-1, 1])
      for (let A = 0; A <= 12; A++) {
        const D = C * (w * 0.04 + (w * 0.88 * A) / 12),
          [, , W] = g(D),
          [O, N] = h(D, W);
        A ? j.lineTo(O, N) : j.moveTo(O, N);
      }
    const [T, S] = h(0, g(0)[2]),
      R = () => {
        (e.layer(2),
          e.strokeBoth(j, 0.45, [0.82, 0.81, 0.78], 0.9),
          e.both(
            U(
              T,
              S,
              Math.min(2.2, o.W * 0.12),
              Math.min(1.6, o.W * 0.08),
              i + Math.PI / 2,
            ),
            [0.92, 0.91, 0.88],
            0.6,
          ));
      };
    b ? No(e, b, R) : t.add("raphe" + o.seed, () => R(), new Path2D());
  });
}
const rh = {
    id: "diatoms",
    name: translate("硅藻装片"),
    slideLabel: [translate("硅藻"), translate("混合（散布）")],
    layers: [0, 4, 8],
    dynZ: 4,
    extent: Yn,
    start: [0, 0],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o, o));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, Yn);
      (n.addColorStop(0, "rgba(200,200,190,.35)"),
        n.addColorStop(1, "rgba(200,200,190,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, Yn, 0, 7),
        t.fill(),
        (t.strokeStyle = "rgba(20,20,20,.8)"),
        (t.lineWidth = 160),
        t.beginPath(),
        t.arc(0, 0, 900, 0, 7),
        t.stroke(),
        t.restore());
    },
    render(t, e, o) {
      const n = t.upp > 3 ? 0 : t.upp > 1 ? 1 : 2,
        s = At(),
        a = [0, 1, 2].map((i) => t.layer(i).ctxAbs);
      for (const i of [...a, t.ctxPh]) i.lineCap = "round";
      const r = (i) => {
        et(e, i.x, i.y, i.ext) && ah(s, t, i, n, o);
      };
      (Sr.forEach(r),
        Rt(e, D0, 160, 0, (i, c, d, h, u) => jr(h, u).forEach(r)),
        s.flush());
      for (const i of [...a, t.ctxPh]) i.lineCap = "butt";
      Wt(t, e, {
        seed: 93,
        density: 0.9,
        size: 1.6,
        color: [0.8, 0.78, 0.72],
        z: [1],
      });
      for (const [i, c, d] of Lr) et(e, i, c, d) && Ht(t, i, c, d);
    },
    pick(t, e) {
      for (const [i, c, d] of Lr)
        if (Math.hypot(t - i, e - c) < d) return translate("气泡");
      const o = [...Sr],
        n = Math.floor((t - 160) / D0),
        s = Math.floor((t + 160) / D0),
        a = Math.floor((e - 160) / D0),
        r = Math.floor((e + 160) / D0);
      for (let i = n; i <= s; i++)
        for (let c = a; c <= r; c++) o.push(...jr(i, c));
      for (const i of o) {
        if (Math.hypot(t - i.x, e - i.y) > i.ext) continue;
        const c = Math.cos(-i.rot),
          d = Math.sin(-i.rot),
          h = (t - i.x) * c - (e - i.y) * d,
          u = (t - i.x) * d + (e - i.y) * c,
          l = i.kind === "fragment" ? i.base : i.kind;
        if (i.kind === "fragment") {
          const [m, x] = i.cut;
          if ((t - i.x) * Math.cos(m) + (e - i.y) * Math.sin(m) > x * i.L)
            continue;
        }
        if (
          l === "coscinodiscus" ||
          l === "cyclotella" ||
          l === "arachnoidiscus"
        ) {
          if (Math.hypot(h, u) < i.L / 2) return Ln[i.kind]();
          continue;
        }
        if (l === "fragilaria") {
          if (Math.abs(h) < i.L / 2 && Math.abs(u) < (i.n * i.t) / 2)
            return Ln.fragilaria();
          continue;
        }
        if (i.kind === "girdle") {
          if (Math.abs(h) < i.L / 2 && Math.abs(u) < i.D / 2)
            return Ln.girdle();
          continue;
        }
        const [f, y, b] = Ia(i)(h);
        if (Math.abs(h) < i.L / 2 && u < f && u > y)
          return l !== "synedra" &&
            Math.abs(u - b) < 0.6 &&
            i.kind !== "fragment"
            ? translate("壳缝")
            : Ln[i.kind]();
      }
      return null;
    },
    info() {
      return translate(
        "<p>硅藻的细胞壁由<b>二氧化硅</b>构成，像带盖的盒子，壳面上有排列整齐的<b>线纹和孔纹</b>。清洗后的壳几乎无色透明，是检验物镜<b>分辨率</b>的经典标本。</p><p>布纹藻的线纹间距约 0.55 µm：40× 物镜下看不清，100× 油镜（缩小视场、开大孔径光阑）才能分辨。比较明场、暗场和相差下的效果。</p>",
      );
    },
  },
  Sn = (t, e, o) => {
    const n = Math.max(0, Math.min(1, (o - t) / (e - t)));
    return n * n * (3 - 2 * n);
  };
function Xe(t, e, o) {
  const n = 6600 + 350 * kt(t / 2200, 3.1, o),
    s = Math.abs(e);
  if (s > n + 200)
    return {
      rho: 0,
      f: 1,
      u: -1,
    };
  const r = 5200 - 2600 * (e / 6600) ** 2 + 260 * kt(e / 1100, 7.7, o + 1) - t;
  if (r < -300)
    return {
      rho: 0,
      f: 1,
      u: r,
    };
  let i;
  r < 0
    ? (i = 0.04 * (1 + r / 300))
    : r < 1800
      ? (i = 0.05 + 0.81 * Sn(0, 1800, r) + 0.06 * Sn(1200, 1800, r))
      : r < 5200
        ? (i = 0.92 + (0.1 * (r - 1800)) / 3400)
        : (i = Math.min(2.6, 1.02 + (r - 5200) / 3500));
  const c = 1 - Sn(200, 2e3, r);
  return (
    c > 0 && (i *= Math.max(0, 1 + 0.7 * ue(t / 700, e / 140, o + 2, 2) * c)),
    (i *= 1 + 0.1 * ue(t / 400, e / 400, o + 3, 2)),
    (i *= 0.35 + 0.65 * Sn(-150, 700, n - s)),
    {
      rho: Math.max(0, i),
      f: c,
      u: r,
    }
  );
}
const jn = 16,
  Rn = new Map();
function ih(t, e, o) {
  const n = Math.round(e / jn),
    s = Math.round(o / jn),
    a = (n + 2e3) * 4096 + (s + 2e3) + t.seed * 16777216;
  let r = Rn.get(a);
  return (
    r ||
      (Rn.size > 3e5 && Rn.clear(),
      Rn.set(a, (r = Xe(n * jn, s * jn, t.seed)))),
    r
  );
}
const ch = {
    id: "blood",
    seed: 811,
    P: 7.7,
    Q: 7.7 * 0.866,
    wbcRatio: 170,
    pltRatio: 14,
    wbcTypes: [
      ["neut", 0.6],
      ["lymph", 0.3],
      ["mono", 0.06],
      ["eos", 0.03],
      ["baso", 0.01],
    ],
  },
  lh = {
    id: "frogBlood",
    seed: 523,
    P: 24,
    Q: 16.5,
    wbcRatio: 110,
    pltRatio: 30,
    wbcTypes: [
      ["lymph", 0.5],
      ["neut", 0.25],
      ["eos", 0.1],
      ["baso", 0.08],
      ["mono", 0.07],
    ],
    frog: !0,
  },
  Rr = {
    neut: () => translate("中性粒细胞"),
    lymph: () => translate("淋巴细胞"),
    mono: () => translate("单核细胞"),
    eos: () => translate("嗜酸性粒细胞"),
    baso: () => translate("嗜碱性粒细胞"),
  },
  hh = [
    [0, 0],
    [0.5, 0.37],
    [0.25, 0.71],
  ];
function ec(t, e, o, n) {
  const { P: s, Q: a } = t,
    [r, i] = hh[n],
    c = (e + (o & 1 ? 0.5 : 0) + r) * s,
    d = (o + i) * a,
    h = ih(t, c, d),
    u = h.rho,
    l =
      n === 0
        ? Math.min(1, u)
        : n === 1
          ? Math.min(1, u - 1)
          : Math.min(0.6, u - 2);
  if (l <= 0) return null;
  const f = jt(e, o, t.seed + 31 * n);
  if (f() > l) return null;
  const y = 0.32 + 0.9 * h.f + (n ? 0.3 : 0),
    b = c + (f() - 0.5) * s * y,
    m = d + (f() - 0.5) * a * y,
    x = {
      x: b,
      y: m,
      k: n,
      f: h.f,
      rho: u,
      seed: Math.floor(f() * 1e9),
      v: Math.floor(f() * 4),
    };
  if (t.frog)
    ((x.rx = 11 + Q0(f) * 0.7),
      (x.ry = 7.4 + Q0(f) * 0.5),
      (x.rot = Q0(f) * 0.22 * (1 + h.f * 2)),
      (x.nx = v(f, -0.6, 0.6)),
      (x.ny = v(f, -0.4, 0.4)),
      (x.nr = v(f, 0.92, 1.12)),
      (x.crumple = h.f > 0.4 && f() < 0.2 * h.f));
  else {
    const k = (3.75 + Q0(f) * 0.2) * (1 + 0.08 * h.f),
      M = k * v(f, 0.97, 1.03),
      g = k * v(f, 0.93, 1) * (1 - 0.06 * h.f);
    (([x.rx, x.ry] = f() < 0.5 ? [M, g] : [g, M]),
      (x.rot = 0),
      (x.pallor = v(f, 0.3, 0.42) * (1 - 0.75 * h.f)),
      (x.echino = f() < 0.03 + 0.18 * h.f),
      (x.rouleau =
        n === 0 && u > 1.3 && f() < 0.05 * (u - 1.3)
          ? 4 + Math.floor(f() * 8)
          : 0));
  }
  return x;
}
const T0 = 250,
  An = new Map();
function fh(t, e, o) {
  const n = `${t.id},${e},${o}`;
  let s = An.get(n);
  if (s) return s;
  (An.size > 2e4 && An.clear(), (s = []), An.set(n, s));
  const a = jt(e, o, t.seed + 77),
    r = e * T0,
    i = o * T0,
    c = Xe(r + T0 / 2, i + T0 / 2, t.seed);
  if (c.rho <= 0.01) return s;
  const d =
    ((Math.min(c.rho, 1.6) * T0 * T0) / (t.P * t.Q) / t.wbcRatio) *
    (1 + 1.3 * c.f);
  let h = 0;
  for (let u = Math.exp(-d), l = a(); l > u; l *= a()) h++;
  for (let u = 0; u < h; u++) {
    let l = a(),
      f = t.wbcTypes[0][0];
    for (const [k, M] of t.wbcTypes) {
      if (l < M) {
        f = k;
        break;
      }
      l -= M;
    }
    const y = r + a() * T0,
      b = i + a() * T0,
      x =
        (t.frog ? 1.15 : 1) *
        {
          neut: v(a, 5, 6),
          lymph: a() < 0.85 ? v(a, 3.6, 4.6) : v(a, 5, 6),
          mono: v(a, 7, 8.8),
          eos: v(a, 5.8, 6.6),
          baso: v(a, 4.8, 5.4),
        }[f];
    s.push({
      type: f,
      x: y,
      y: b,
      R: x,
      seed: Math.floor(a() * 1e9),
      id: `${e},${o},${u}`,
    });
  }
  return s;
}
function Ts(t, e, o = 12) {
  const n = [],
    s = Math.floor((e.x0 - o) / T0),
    a = Math.floor((e.x1 + o) / T0),
    r = Math.floor((e.y0 - o) / T0),
    i = Math.floor((e.y1 + o) / T0);
  for (let c = r; c <= i; c++)
    for (let d = s; d <= a; d++)
      for (const h of fh(t, d, c)) et(e, h.x, h.y, h.R + o) && n.push(h);
  return n;
}
function oc(t, e) {
  const o = tt(t.seed),
    { x: n, y: s, R: a } = t,
    r = {
      body: Mt(n, s, a, {
        n: 28,
        amp: 0.05,
        seed: t.seed % 9973,
        freq: 2,
      }),
      nuc: [],
      strands: [],
      gran: [],
      vac: [],
      folds: [],
    },
    i = o() * Math.PI * 2;
  if (t.type === "neut") {
    const c = o(),
      d = c < 0.12 ? 2 : c < 0.55 ? 3 : c < 0.88 ? 4 : 5,
      h = a * v(o, 0.42, 0.52),
      u = v(o, 1, 1.35),
      l = i - ((d - 1) * u) / 2;
    let f = null;
    for (let y = 0; y < d; y++) {
      const b = l + y * u + v(o, -0.15, 0.15),
        m = n + Math.cos(b) * h,
        x = s + Math.sin(b) * h,
        k = a * v(o, 0.3, 0.37);
      (r.nuc.push(
        Mt(m, x, k, {
          n: 14,
          amp: 0.12,
          seed: Math.floor(o() * 1e6),
          sx: 1.15,
          sy: 0.85,
          rot: b + Math.PI / 2,
        }),
      ),
        f &&
          r.strands.push([
            f,
            [
              (f[0] + m) / 2 + v(o, -0.6, 0.6),
              (f[1] + x) / 2 + v(o, -0.6, 0.6),
            ],
            [m, x],
          ]),
        (f = [m, x]));
    }
  } else if (t.type === "lymph") {
    const c = a * v(o, 0.05, 0.14);
    r.nuc.push(
      Mt(n + Math.cos(i) * c, s + Math.sin(i) * c, a * v(o, 0.78, 0.86), {
        n: 22,
        amp: 0.06,
        seed: Math.floor(o() * 1e6),
      }),
    );
  } else if (t.type === "mono") {
    const c = [],
      d = n + Math.cos(i) * a * 0.12,
      h = s + Math.sin(i) * a * 0.12,
      u = a * 0.68,
      l = a * 0.52,
      f = v(o, 0.35, 0.6);
    for (let y = 0; y < 30; y++) {
      const b = (y / 30) * Math.PI * 2;
      let m = Math.abs(((b + Math.PI) % (Math.PI * 2)) - Math.PI);
      const x = 1 - f * Math.exp(-((m / 0.55) ** 2)),
        k = Math.cos(b) * u * x,
        M = Math.sin(b) * l * (1 + 0.08 * kt(y * 0.7, 1, t.seed % 997)),
        g = Math.cos(i + Math.PI),
        w = Math.sin(i + Math.PI);
      c.push([d + k * g - M * w, h + k * w + M * g]);
    }
    r.nuc.push(c);
    for (let y = 0; y < 2; y++) {
      const b = o() * Math.PI * 2;
      r.folds.push([
        [d + Math.cos(b) * a * 0.3, h + Math.sin(b) * a * 0.3],
        [d + v(o, -1, 1), h + v(o, -1, 1)],
        [d - Math.cos(b + 0.6) * a * 0.32, h - Math.sin(b + 0.6) * a * 0.32],
      ]);
    }
    for (let y = 3 + Math.floor(o() * 6); y > 0; y--) {
      const b = o() * Math.PI * 2,
        m = a * v(o, 0.55, 0.85);
      r.vac.push([n + Math.cos(b) * m, s + Math.sin(b) * m, v(o, 0.35, 0.8)]);
    }
  } else if (t.type === "eos") {
    const c = a * v(o, 0.3, 0.38);
    for (const h of [-1, 1])
      r.nuc.push(
        Mt(
          n + Math.cos(i) * c * h,
          s + Math.sin(i) * c * h,
          a * v(o, 0.3, 0.36),
          {
            n: 14,
            amp: 0.1,
            seed: Math.floor(o() * 1e6),
            sx: 0.85,
            sy: 1.15,
            rot: i,
          },
        ),
      );
    r.strands.push([
      [n - Math.cos(i) * c, s - Math.sin(i) * c],
      [n + v(o, -0.5, 0.5), s + v(o, -0.5, 0.5)],
      [n + Math.cos(i) * c, s + Math.sin(i) * c],
    ]);
    const d = Math.floor(a * a * 4.2);
    for (let h = 0; h < d; h++) {
      const u = o() * Math.PI * 2,
        l = Math.sqrt(o()) * (a - 0.6);
      r.gran.push([n + Math.cos(u) * l, s + Math.sin(u) * l, v(o, 0.36, 0.5)]);
    }
  } else if (t.type === "baso") {
    r.nuc.push(
      Mt(n, s, a * 0.6, {
        n: 16,
        amp: 0.2,
        seed: Math.floor(o() * 1e6),
      }),
    );
    const c = Math.floor(a * a * 1.9);
    for (let d = 0; d < c; d++) {
      const h = o() * Math.PI * 2,
        u = Math.sqrt(o()) * (a - 0.5);
      r.gran.push([n + Math.cos(h) * u, s + Math.sin(h) * u, v(o, 0.4, 0.7)]);
    }
  }
  return (
    e &&
      t.type === "lymph" &&
      (r.nuc[0] = Mt(n, s, a * 0.8, {
        n: 22,
        amp: 0.08,
        seed: t.seed % 991,
      })),
    r
  );
}
const nc = {
    neut: [0.42, 0.22, 0.55],
    lymph: [0.3, 0.16, 0.46],
    mono: [0.56, 0.42, 0.68],
    eos: [0.45, 0.27, 0.56],
    baso: [0.62, 0.5, 0.72],
  },
  sc = {
    neut: [0.93, 0.83, 0.88],
    lymph: [0.7, 0.83, 0.96],
    mono: [0.8, 0.81, 0.9],
    eos: [0.98, 0.84, 0.76],
    baso: [0.9, 0.84, 0.92],
  },
  Ar = {
    eos: [0.93, 0.48, 0.34],
    baso: [0.24, 0.14, 0.42],
  },
  C0 = 100;
function Er(t, e, o) {
  const n = jt(e, o, t.seed + 91),
    s = e * C0,
    a = o * C0,
    r = Xe(s + C0 / 2, a + C0 / 2, t.seed),
    i = [];
  if (r.rho <= 0.01) return i;
  const c = (Math.min(r.rho, 1.5) * C0 * C0) / (t.P * t.Q) / t.pltRatio,
    d = Math.max(0, Math.round(c / 2.6 + (n() - 0.5) * 2));
  for (let h = 0; h < d; h++) {
    const u = s + n() * C0,
      l = a + n() * C0,
      f = n() < 0.45 ? 1 : 2 + Math.floor(n() * n() * 7);
    for (let y = 0; y < f; y++) {
      const b = u + (y ? v(n, -3.5, 3.5) : 0),
        m = l + (y ? v(n, -3.5, 3.5) : 0);
      i.push({
        x: b,
        y: m,
        s: t.frog ? v(n, 0.9, 1.15) : v(n, 0.9, 1.5),
        rot: n() * Math.PI,
        seed: Math.floor(n() * 1e6),
      });
    }
  }
  return i;
}
function dh(t, e) {
  return pe(`blood-${t.id}-${e}`, 256, (n) => {
    ((n.fillStyle = "#fff"), n.fillRect(0, 0, 256, 256));
    const s = 256 * e,
      a = Math.round(s / t.P),
      r = Math.round(s / t.Q / 2) * 2,
      i = s / a,
      c = s / r,
      d = tt(t.seed + e),
      h = (u, l) => {
        ((n.fillStyle = u), n.beginPath(), l(), n.fill());
      };
    for (let u = 0; u < r; u++)
      for (let l = 0; l < a; l++) {
        if (d() > 0.975) continue;
        const f = t.frog ? 0.55 : 0.4,
          y = ((l + (u & 1 ? 0.5 : 0)) * i + (d() - 0.5) * i * f) / e,
          b = (u * c + (d() - 0.5) * c * f) / e;
        cn(256, (m, x) => {
          if (t.frog) {
            const k = Q0(d) * 0.2;
            (h("rgb(240,196,182)", () =>
              n.ellipse(y + m, b + x, 11 / e, 7.4 / e, k, 0, 7),
            ),
              h("rgb(128,88,160)", () =>
                n.ellipse(
                  y + m,
                  b + x,
                  Math.max(0.6, 3.4 / e),
                  Math.max(0.5, 2.4 / e),
                  k,
                  0,
                  7,
                ),
              ));
          } else
            (h("rgb(234,160,160)", () => n.arc(y + m, b + x, 3.75 / e, 0, 7)),
              h("rgb(246,212,210)", () => n.arc(y + m, b + x, 1.35 / e, 0, 7)));
        });
      }
    for (let u = 0; u < (a * r) / t.pltRatio; u++) {
      const l = d() * 256,
        f = d() * 256;
      h("rgb(165,120,185)", () => n.arc(l, f, Math.max(0.5, 1.1 / e), 0, 7));
    }
  });
}
function ac(t) {
  return [
    [0.92, 0.62, 0.63],
    [0.93, 0.64, 0.61],
    [0.91, 0.6, 0.62],
    [0.94, 0.66, 0.64],
  ][t];
}
function uh(t, e, o) {
  const n = At(),
    s = Math.max(6 * t.upp, 12),
    a = t.upp > 6 ? 8 : t.upp > 3 ? 4 : t.upp > 1.5 ? 2 : 1,
    r = dh(o, a),
    i = Math.floor(e.x0 / s) * s,
    c = Math.floor(e.y0 / s) * s;
  for (let d = c; d < e.y1; d += s)
    for (let h = i; h < e.x1; h += s) {
      const u = z0(Xe(h + s / 2, d + s / 2, o.seed).rho / 2.8, 36) * 2.8;
      if (u < 0.02) continue;
      n.path(u, (f) => {
        (t.layer(1),
          t.abs(f, G([1, 1, 1], [0.95, 0.9, 0.93], Math.min(1, u / 2))),
          t.pattern(f, r, a, Math.min(1, u)),
          u > 1 && (t.layer(2), t.pattern(f, r, a, Math.min(1, u - 1), 37, 53)),
          u > 2 &&
            (t.layer(0), t.pattern(f, r, a, Math.min(1, u - 2), 71, 19)));
      }).rect(h, d, s + 0.01, s + 0.01);
    }
  n.flush();
}
function ph(t, e, o, n, s, a) {
  const { P: r, Q: i } = o,
    c = 30,
    d = new Map(),
    h = (b, m) => (b + 1e3) * 2048 + m + 1e3;
  for (const b of n) {
    const m = h(Math.floor(b.x / c), Math.floor(b.y / c));
    (d.get(m) || d.set(m, []).get(m)).push(b);
  }
  const u = (b, m) => {
      if (!d.size) return !1;
      const x = Math.floor(b / c),
        k = Math.floor(m / c);
      for (let M = -1; M <= 1; M++)
        for (let g = -1; g <= 1; g++) {
          const w = d.get(h(x + M, k + g));
          if (w) {
            for (const $ of w)
              if (Math.hypot(b - $.x, m - $.y) < $.R * 0.85 + 1) return !0;
          }
        }
      return !1;
    },
    l = o.frog ? 14 : 30;
  let f = 0;
  for (let b = 0; b <= 4; b++)
    for (let m = 0; m <= 4; m++)
      f = Math.max(
        f,
        Xe(
          e.x0 + ((e.x1 - e.x0) * b) / 4,
          e.y0 + ((e.y1 - e.y0) * m) / 4,
          o.seed,
        ).rho,
      );
  const y = f > 1.95 ? 3 : f > 1 ? 2 : 1;
  for (let b = 0; b < y; b++) {
    const m = Math.floor((e.y0 - l) / i) - 1,
      x = Math.ceil((e.y1 + l) / i) + 1,
      k = Math.floor((e.x0 - l) / r) - 1,
      M = Math.ceil((e.x1 + l) / r) + 1;
    for (let g = m; g <= x; g++)
      for (let w = k; w <= M; w++) {
        const $ = ec(o, w, g, b);
        if (
          !$ ||
          !et(e, $.x, $.y, o.frog ? 12 : 4.5 + ($.rouleau ? 25 : 0)) ||
          (b === 0 && u($.x, $.y))
        )
          continue;
        const L = b === 0 ? 1 : b === 1 ? 2 : 0;
        o.frog
          ? Mh(t, s, $, L, a)
          : $.rouleau
            ? mh(t, s, $, L, a)
            : bh(t, s, $, L, a);
      }
  }
}
function yh(t) {
  const e = tt(t.seed),
    o = 12 + Math.floor(e() * 6),
    n = [],
    s = Math.cos(t.rot),
    a = Math.sin(t.rot);
  for (let r = 0; r < o * 2; r++) {
    const i = (r / (o * 2)) * Math.PI * 2,
      c = r & 1 ? 0.84 : 1.04 + e() * 0.05,
      d = Math.cos(i) * t.rx * c,
      h = Math.sin(i) * t.ry * c;
    n.push([t.x + d * s - h * a, t.y + d * a + h * s]);
  }
  return n;
}
const Cr = Math.PI * 2;
function B0(t, e, o, n, s, a, r = !1) {
  if (a) {
    const i = new Path2D();
    (i.ellipse(e, o, n, s, a, 0, Cr, r), t.addPath(i));
  } else (t.moveTo(e + n, o), t.ellipse(e, o, n, s, 0, 0, Cr, r));
}
function bh(t, e, o, n, s) {
  const a = ac(o.v),
    r = G([1, 1, 1], a, 0.42),
    i = e.path(`rb${n}${o.v}`, (y) => {
      (t.layer(n), t.abs(y, r), t.phase(y, 0.45));
    });
  let c = null;
  o.echino ? yt((c = yh(o)), i) : B0(i, o.x, o.y, o.rx, o.ry, o.rot);
  const d = o.echino ? 0.15 : o.pallor,
    h = [a[0] / r[0], a[1] / r[1], a[2] / r[2]],
    u = e.path(`rr${n}${o.v}`, (y) => {
      (t.layer(n), t.abs(y, h), t.phase(y, 0.3));
    }),
    l = o.rx * d * 1.25 + 0.05,
    f = o.ry * d * 1.25 + 0.05;
  if (
    (B0(u, o.x, o.y, o.rx * 0.97, o.ry * 0.97, o.rot),
    B0(u, o.x, o.y, l, f, o.rot, !0),
    s)
  ) {
    const y = e.path(`rm${n}`, (m) => {
      (t.layer(n), t.abs(m, [0.985, 0.92, 0.92]), t.phase(m, 0.2));
    });
    (B0(y, o.x, o.y, l, f, o.rot),
      B0(y, o.x, o.y, o.rx * d * 0.85, o.ry * d * 0.85, o.rot, !0));
    const b = e.path(`ro${n}`, (m) => {
      (t.layer(n), t.strokeAbs(m, 0.3, [0.85, 0.6, 0.62], 0.7));
    });
    c ? yt(c, b) : B0(b, o.x, o.y, o.rx, o.ry, o.rot);
  }
}
function mh(t, e, o, n, s) {
  const a = tt(o.seed + 5),
    r = a() * Math.PI,
    i = Math.cos(r),
    c = Math.sin(r);
  let d = o.x,
    h = o.y;
  const u = ac(o.v);
  for (let l = 0; l < o.rouleau; l++) {
    const f = v(a, 2.2, 2.9),
      y = v(a, 3.6, 4),
      b = G([1, 1, 1], u, 0.55);
    (B0(
      e.path(`ql${n}${l % 3}`, (x) => {
        (t.layer(n), t.abs(x, b), t.phase(x, 0.4));
      }),
      d,
      h,
      f,
      y,
      r,
    ),
      s &&
        B0(
          e.path(`qe${n}`, (x) => {
            (t.layer(n), t.strokeAbs(x, 0.35, [0.82, 0.5, 0.52], 0.8));
          }),
          d,
          h,
          f,
          y,
          r,
        ));
    const m = v(a, 1.8, 2.8);
    ((d += i * m + v(a, -0.3, 0.3)), (h += c * m + v(a, -0.3, 0.3)));
  }
}
function Mh(t, e, o, n, s) {
  const a = [
      [0.95, 0.78, 0.72],
      [0.94, 0.76, 0.72],
      [0.96, 0.8, 0.73],
      [0.94, 0.77, 0.7],
    ][o.v],
    r = e.path(`fb${n}${o.v}`, (f) => {
      (t.layer(n), t.abs(f, a), t.phase(f, 0.55));
    }),
    i = e.path(`fe${n}`, (f) => {
      (t.layer(n),
        t.strokeAbs(f, s ? 0.9 : 1.2, [0.95, 0.85, 0.83], 0.9),
        s && t.strokeAbs(f, 0.3, [0.85, 0.66, 0.62], 0.8));
    });
  if (o.crumple) {
    const f = Mt(o.x, o.y, o.rx, {
      n: 18,
      amp: 0.12,
      seed: o.seed % 9973,
      sx: 1,
      sy: o.ry / o.rx,
      rot: o.rot,
      freq: 3,
    });
    (yt(f, r), yt(f, i));
  } else
    (B0(r, o.x, o.y, o.rx, o.ry, o.rot), B0(i, o.x, o.y, o.rx, o.ry, o.rot));
  const c = Math.cos(o.rot),
    d = Math.sin(o.rot),
    h = o.x + o.nx * c - o.ny * d,
    u = o.y + o.nx * d + o.ny * c,
    l = e.path(`fn${n}`, (f) => {
      (t.layer(n),
        t.abs(f, [0.5, 0.33, 0.62]),
        t.phase(f, 0.5),
        s &&
          t.pattern(
            f,
            wt(57, {
              n: 1300,
              dark: 0.55,
              r0: 0.8,
              r1: 2.6,
            }),
            0.09,
            0.85,
          ));
    });
  B0(l, h, u, 3.5 * o.nr, 2.45 * o.nr, o.rot + (o.nx - o.ny) * 0.3);
}
function xh(t, e, o, n, s) {
  const a = oc(o, n),
    r = o.type,
    i = yt(a.body);
  if (r === "mono" && a.vac.length)
    for (const [h, u, l] of a.vac) i.arc(h, u, l, 0, Math.PI * 2, !0);
  if (
    (e.add(
      `wc${r}`,
      (h) => {
        (t.layer(1),
          t.abs(h, sc[r]),
          t.phase(h, 0.6),
          s &&
            (r === "neut" &&
              t.pattern(
                h,
                wt(63, {
                  n: 2600,
                  dark: 0.22,
                  r0: 0.5,
                  r1: 1.2,
                }),
                0.08,
                0.9,
              ),
            r === "mono" &&
              t.pattern(
                h,
                wt(64, {
                  n: 1500,
                  dark: 0.12,
                  r0: 0.6,
                  r1: 1.6,
                }),
                0.1,
                0.9,
              ),
            r === "lymph" && t.strokeAbs(h, 0.25, [0.6, 0.72, 0.9], 0.6)));
      },
      i,
    ),
    r === "mono" && s)
  )
    for (const [h, u, l] of a.vac)
      e.add(
        "wv",
        (f) => {
          (t.layer(1), t.strokeAbs(f, 0.18, [0.75, 0.75, 0.84], 0.7));
        },
        U(h, u, l, l),
      );
  const c = new Path2D();
  for (const h of a.nuc) yt(h, c);
  const d = n && r === "lymph" ? [0.34, 0.2, 0.5] : nc[r];
  e.add(
    `wn${r}`,
    (h) => {
      (t.layer(1),
        t.abs(h, d),
        t.phase(h, 0.5),
        s &&
          (r === "lymph"
            ? t.pattern(
                h,
                wt(71, {
                  n: 700,
                  dark: 0.55,
                  r0: 1.5,
                  r1: 4,
                }),
                0.1,
                0.9,
              )
            : r === "mono"
              ? t.pattern(
                  h,
                  wt(72, {
                    n: 1400,
                    dark: 0.45,
                    r0: 0.8,
                    r1: 2.2,
                  }),
                  0.1,
                  0.9,
                )
              : t.pattern(
                  h,
                  wt(73, {
                    n: 900,
                    dark: 0.5,
                    r0: 1,
                    r1: 3,
                  }),
                  0.1,
                  0.8,
                ),
          t.strokeAbs(
            h,
            0.3,
            d.map((u) => u * 0.85),
            0.6,
          )));
    },
    c,
  );
  for (const h of a.strands)
    e.add(
      `ws${r}`,
      (u) => {
        (t.layer(1), t.strokeAbs(u, r === "eos" ? 0.9 : 0.5, d));
      },
      F0(h),
    );
  for (const h of a.folds)
    e.add(
      "wf",
      (u) => {
        (t.layer(1), t.strokeAbs(u, 0.45, [0.72, 0.6, 0.8], 0.8));
      },
      F0(h),
    );
  if (a.gran.length && s)
    for (const [h, u, l] of a.gran)
      e.add(
        `wg${r}`,
        (f) => {
          (t.layer(1), t.abs(f, Ar[r]), t.phase(f, 0.35));
        },
        U(h, u, l, l),
      );
  else
    a.gran.length &&
      e.add(
        `wG${r}`,
        (h) => {
          (t.layer(1), t.abs(h, G([1, 1, 1], Ar[r], 0.55)));
        },
        U(o.x, o.y, o.R * 0.9, o.R * 0.9),
      );
}
function gh(t, e, o, n, s) {
  if (n) {
    const r = Math.cos(o.rot),
      i = Math.sin(o.rot),
      c = [];
    for (let d = 0; d < 16; d++) {
      const h = (d / 16) * Math.PI * 2,
        u = Math.cos(h) * 4.4 * o.s,
        l = Math.sin(h) * 2 * o.s * Math.pow(Math.abs(Math.sin(h)), 0.3);
      c.push([o.x + u * r - l * i, o.y + u * i + l * r]);
    }
    (e.add(
      "tb",
      (d) => {
        (t.layer(1), t.abs(d, [0.95, 0.92, 0.97]), t.phase(d, 0.4));
      },
      yt(c),
    ),
      e.add(
        "tn",
        (d) => {
          (t.layer(1),
            t.abs(d, [0.42, 0.26, 0.55]),
            t.phase(d, 0.4),
            s &&
              t.pattern(
                d,
                wt(57, {
                  n: 1300,
                  dark: 0.55,
                  r0: 0.8,
                  r1: 2.6,
                }),
                0.09,
                0.8,
              ));
        },
        U(o.x, o.y, 2.7 * o.s, 1.35 * o.s, o.rot),
      ));
    return;
  }
  const a = yt(
    Mt(o.x, o.y, o.s, {
      n: 9,
      amp: 0.3,
      seed: o.seed,
    }),
  );
  if (
    (e.add(
      "pb",
      (r) => {
        (t.layer(1), t.abs(r, [0.82, 0.72, 0.88]), t.phase(r, 0.3));
      },
      a,
    ),
    s)
  ) {
    const r = tt(o.seed);
    for (let i = 0; i < 4 + Math.floor(r() * 5); i++)
      e.add(
        "pg",
        (c) => {
          (t.layer(1), t.abs(c, [0.48, 0.3, 0.6]));
        },
        U(
          o.x + v(r, -0.5, 0.5) * o.s,
          o.y + v(r, -0.5, 0.5) * o.s,
          v(r, 0.15, 0.3),
          v(r, 0.15, 0.3),
        ),
      );
  } else
    e.add(
      "pc",
      (r) => {
        (t.layer(1), t.abs(r, [0.6, 0.45, 0.7]));
      },
      U(o.x, o.y, o.s * 0.5, o.s * 0.5),
    );
}
function wh(t, e, o) {
  const n = At();
  (Rt(e, 300, 10, o.seed + 13, (s, a, r) => {
    const i = Math.floor(r() * 3.2);
    for (let c = 0; c < i; c++) {
      const d = s + r() * 300,
        h = a + r() * 300,
        u = r() < 0.2 ? 6 + Math.floor(r() * 14) : 1;
      for (let l = 0; l < u; l++) {
        const f = d + (l ? v(r, -4, 4) : 0),
          y = h + (l ? v(r, -4, 4) : 0),
          b = v(r, 0.25, 0.9);
        et(e, f, y, 2) &&
          n.add(
            "st",
            (m) => {
              (t.layer(2), t.both(m, [0.32, 0.2, 0.45], 0.4));
            },
            yt(
              Mt(f, y, b, {
                n: 7,
                amp: 0.4,
                seed: (c * 31 + l) | 0,
              }),
            ),
          );
      }
    }
  }),
    n.flush());
}
function rc(t, { name: e, label: o, start: n }) {
  return {
    id: t.id,
    name: e,
    slideLabel: o,
    latin: t.frog ? "Rana" : "Homo sapiens",
    layers: [0, 1.5, 3],
    dynZ: 1.5,
    extent: 7e3,
    start: n,
    thumb(s, a) {
      const r = a / 22e3;
      (s.save(), s.translate(a / 2, a / 2), s.scale(r, r));
      const i = [];
      for (let d = -6800; d <= 6800; d += 200)
        i.push([
          5200 - 2600 * (d / 6600) ** 2 + 260 * kt(d / 1100, 7.7, t.seed + 1),
          d,
        ]);
      const c = s.createLinearGradient(-11e3, 0, 5200, 0);
      (c.addColorStop(0, "rgba(150,40,60,.85)"),
        c.addColorStop(0.45, "rgba(185,75,95,.6)"),
        c.addColorStop(0.8, "rgba(215,130,150,.35)"),
        c.addColorStop(1, "rgba(225,160,175,.12)"),
        (s.fillStyle = c),
        s.beginPath(),
        s.moveTo(-11e3, -6800));
      for (const [d, h] of i) s.lineTo(d, h);
      (s.lineTo(-11e3, 6800), s.closePath(), s.fill(), s.restore());
    },
    render(s, a) {
      const r = s.upp >= 1.2,
        i = s.upp < 0.5,
        c = Ts(t, a),
        d = At();
      if (r) {
        uh(s, a, t);
        for (const h of c) {
          const u = h.type;
          (d.add(
            `lc${u}`,
            (l) => {
              (s.layer(1), s.abs(l, sc[u]));
            },
            U(h.x, h.y, h.R, h.R),
          ),
            d.add(
              `ln${u}`,
              (l) => {
                (s.layer(1),
                  s.abs(
                    l,
                    u === "eos"
                      ? [0.8, 0.45, 0.42]
                      : u === "baso"
                        ? [0.3, 0.2, 0.48]
                        : nc[u],
                  ));
              },
              U(h.x, h.y, h.R * 0.68, h.R * 0.68),
            ));
        }
        d.flush();
      } else {
        const h = new Path2D();
        h.rect(a.x0, a.y0, a.x1 - a.x0, a.y1 - a.y0);
        const u = Xe((a.x0 + a.x1) / 2, (a.y0 + a.y1) / 2, t.seed).rho;
        (u > 0.05 &&
          (s.layer(0),
          s.abs(h, G([1, 1, 1], [0.97, 0.95, 0.96], Math.min(1, u)))),
          ph(s, a, t, c, d, i),
          d.flush());
        const l = At();
        (Rt(a, C0, 8, 0, (y, b, m, x, k) => {
          for (const M of Er(t, x, k))
            et(a, M.x, M.y, 5) && gh(s, l, M, t.frog, i);
        }),
          l.flush());
        const f = At();
        for (const y of c) xh(s, f, y, t.frog, i);
        f.flush();
      }
      wh(s, a, t);
    },
    wbcIn(s) {
      return Ts(t, s, 0).map((a) => ({
        id: a.id,
        type: a.type,
        name: Rr[a.type](),
        x: a.x,
        y: a.y,
        R: a.R,
      }));
    },
    pick(s, a) {
      const r = Xe(s, a, t.seed);
      for (const b of Ts(
        t,
        {
          x0: s,
          y0: a,
          x1: s,
          y1: a,
        },
        2,
      )) {
        if (Math.hypot(s - b.x, a - b.y) > b.R) continue;
        const m = oc(b, t.frog);
        if (!Lt(s, a, m.body)) continue;
        const x = Rr[b.type]();
        return m.nuc.some((k) => Lt(s, a, k))
          ? `${x} · ${translate("细胞核")}`
          : m.gran.some(([k, M, g]) => Math.hypot(s - k, a - M) < g + 0.2)
            ? `${x} · ${b.type === "eos" ? translate("嗜酸性颗粒") : translate("嗜碱性颗粒")}`
            : `${x} · ${translate("细胞质")}`;
      }
      const i = Math.floor(s / C0),
        c = Math.floor(a / C0);
      for (let b = -1; b <= 1; b++)
        for (let m = -1; m <= 1; m++)
          for (const x of Er(t, i + b, c + m))
            if (Math.hypot(s - x.x, a - x.y) < (t.frog ? 4 * x.s : x.s * 1.1))
              return t.frog
                ? translate("凝血细胞（相当于血小板）")
                : translate("血小板");
      const { P: d, Q: h } = t,
        u = Math.floor(a / h) - 4,
        l = Math.floor(a / h) + 4,
        f = Math.floor(s / d) - 4,
        y = Math.floor(s / d) + 4;
      for (const b of [1, 0, 2])
        for (let m = u; m <= l; m++)
          for (let x = f; x <= y; x++) {
            const k = ec(t, x, m, b);
            if (!k) continue;
            if (!t.frog && k.rouleau) {
              if (Math.hypot(s - k.x, a - k.y) < 4 + k.rouleau * 2.3)
                return translate("缗钱状排列的红细胞");
              continue;
            }
            const M = Math.cos(-k.rot),
              g = Math.sin(-k.rot),
              w = (s - k.x) * M - (a - k.y) * g,
              $ = (s - k.x) * g + (a - k.y) * M;
            if (!((w / k.rx) ** 2 + ($ / k.ry) ** 2 > 1))
              return t.frog
                ? Math.hypot(
                    (w - k.nx) / (3.5 * k.nr),
                    ($ - k.ny) / (2.45 * k.nr),
                  ) < 1.1
                  ? translate("红细胞的细胞核")
                  : translate("红细胞（蛙，有细胞核）")
                : k.echino
                  ? translate("皱缩的红细胞")
                  : (w / k.rx) ** 2 + ($ / k.ry) ** 2 <
                      k.pallor * k.pallor * 1.5
                    ? translate("红细胞 · 中央淡染区")
                    : translate("红细胞");
          }
      return r.rho > 0.02
        ? r.rho > 1.3
          ? translate("涂片厚区（细胞重叠）")
          : translate("血浆（细胞间隙）")
        : null;
    },
    info: () =>
      `<b>${translate("涂片分区")}</b> ${translate("推片留下的血膜呈舌形：起始端厚，红细胞重叠、成缗钱状；中段细胞单层分布、刚好相接，是观察和计数的理想区域；末端呈羽毛状，细胞稀少、常变形。")}${t.frog ? translate("蛙的红细胞呈椭圆形、有细胞核，比人的红细胞大得多。") : translate("先在低倍镜下找到单层区，再换高倍镜和油镜。")}`,
  };
}
const vh = rc(ch, {
    name: translate("人血涂片"),
    label: [translate("人血涂片"), translate("瑞氏染色")],
    start: [2400, 0],
  }),
  kh = rc(lh, {
    name: translate("蛙血涂片"),
    label: [translate("蛙血涂片"), translate("瑞氏染色")],
    start: [2400, 0],
  }),
  oo = 10,
  Is = 100,
  X0 = -1e3 / 2,
  E0 = 30,
  Dr = (t) => (t % 10 === 0 ? 60 : t % 5 === 0 ? 45 : 30),
  zo = 1.8,
  Wo = 900,
  Fo = [0.07, 0.07, 0.08],
  Br = E0 - 60 - 18,
  Or = E0 + 130;
function Ls(t, e, o, n, s) {
  const a = t.upp * 0.9;
  o >= a ? t.strokeBoth(e, o, n, s) : t.strokeBoth(e, a, n, s, o / a);
}
const Ph = {
    id: "micrometer",
    name: translate("台微尺"),
    slideLabel: [translate("台微尺"), "1 mm / 100"],
    layers: [0, 0.3, 0.6],
    dynZ: 0.3,
    extent: 1200,
    start: [0, 0],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.strokeStyle = "rgba(40,40,45,.8)"),
        (t.lineWidth = 120),
        t.beginPath(),
        t.arc(0, 0, Wo, 0, 7),
        t.stroke(),
        (t.fillStyle = "rgba(30,30,35,.85)"),
        t.fillRect(X0, -40, Is * oo, 110),
        t.restore());
    },
    render(t, e) {
      if ((t.layer(1), et(e, 0, 0, Wo + 50))) {
        const s = {
          60: new Path2D(),
          45: new Path2D(),
          30: new Path2D(),
        };
        for (let i = 0; i <= Is; i++) {
          const c = X0 + i * oo,
            d = Dr(i);
          c < e.x0 - 5 ||
            c > e.x1 + 5 ||
            (s[d].moveTo(c, E0 + zo / 2), s[d].lineTo(c, E0 - d));
        }
        for (const i of Object.values(s)) Ls(t, i, zo, Fo, 0.5);
        const a = new Path2D();
        (a.moveTo(X0 - zo / 2, E0),
          a.lineTo(-X0 + zo / 2, E0),
          Ls(t, a, zo, Fo, 0.5));
        for (let i = 0; i <= Is; i += 10)
          t.text(String(i / 10), X0 + i * oo, Br, 20, Fo, {
            ph: 0.4,
          });
        t.text("1 mm / 100 DIV = 0.01 mm", 0, Or, 34, Fo, {
          ph: 0.4,
        });
        const r = new Path2D();
        (r.arc(0, 0, Wo, 0, Math.PI * 2), Ls(t, r, 6, Fo, 0.5));
      }
      Rt(e, 500, 20, 77, (s, a, r) => {
        const i = r() < 0.5 ? 1 : 0;
        for (let c = 0; c < i; c++) {
          const d = s + r() * 500,
            h = a + r() * 500,
            u = 0.8 + r() * r() * 5,
            l = r() < 0.5 ? 0 : 2;
          et(e, d, h, u * 2) &&
            (t.layer(l),
            t.both(
              yt(
                Mt(d, h, u, {
                  n: 8,
                  amp: 0.4,
                  seed: Math.floor(r() * 1e6),
                }),
              ),
              [0.55, 0.53, 0.5],
              0.6,
              0.7,
            ));
        }
      });
      const n = jt(3, 4, 5);
      for (let s = 0; s < 4; s++) {
        const a = (n() - 0.5) * 5e3,
          r = (n() - 0.5) * 5e3,
          i = 6 + n() * 20;
        if (!et(e, a, r, i) || Math.hypot(a, r) < Wo + 80) continue;
        t.layer(2);
        const c = new Path2D();
        (c.arc(a, r, i, 0, Math.PI * 2),
          t.strokeBoth(c, i * 0.3, [0.35, 0.36, 0.38], 1.2),
          t.phase(c, 0.8));
      }
    },
    pick(t, e) {
      if (Math.abs(Math.hypot(t, e) - Wo) < 6) return translate("定位圆圈");
      if (t >= X0 - 3 && t <= -X0 + 3) {
        if (Math.abs(e - E0) < 2) return translate("基线");
        const o = Math.round((t - X0) / oo);
        if (Math.abs(t - (X0 + o * oo)) < 2 && e <= E0 + 1 && e >= E0 - Dr(o))
          return translate("刻线（每格 10 µm）");
        if (
          Math.abs(e - Br) < 10 &&
          o % 10 === 0 &&
          Math.abs(t - (X0 + o * oo)) < 8
        )
          return translate("刻度数字（单位 0.1 mm）");
        if (e < E0 && e > E0 - 60) return translate("刻度格（10 µm）");
        if (Math.abs(e - Or) < 20)
          return translate("刻度说明：1 mm 分为 100 格");
      }
      return null;
    },
    info: () =>
      translate(
        "台微尺全长 1 mm，分为 100 格，每格 10 µm。把目镜测微尺与台微尺的 0 刻度对齐，找出两尺刻线再次重合的位置，即可算出目镜测微尺每格代表的长度。",
      ),
  },
  La = (48e7 * 100) / 1e12,
  I0 = 50,
  $h = 9137,
  s0 = 4200,
  S0 = 1200,
  le = 4400,
  ic = (t, e) => Math.abs(t) < s0 && (e < le || e > le + S0),
  qo = (t, e, o) => ({
    name: o,
    i: t,
    j: e,
    x0: -500 + 200 * t,
    y0: -500 + 200 * e,
    size: 200,
  }),
  Nr = [
    qo(4, 4, translate("左上")),
    qo(0, 4, translate("右上")),
    qo(4, 0, translate("左下")),
    qo(0, 0, translate("右下")),
    qo(2, 2, translate("中央")),
  ];
function Th(t, e) {
  if (e > 40) return Math.max(0, Math.round(e + Math.sqrt(e) * Q0(t)));
  const o = Math.exp(-e);
  let n = 0,
    s = t();
  for (; s > o;) (n++, (s *= t()));
  return n;
}
const En = new Map();
function Ih(t, e, o) {
  const n = `${o},${t},${e}`;
  let s = En.get(n);
  if (s) return s;
  (En.size > 4e4 && En.clear(), (s = []), En.set(n, s));
  const a = t * I0,
    r = e * I0;
  if (!ic(a + I0 / 2, r + I0 / 2)) return s;
  const i = jt(t, e, $h + o * 7),
    c = Th(i, ((La / o) * I0 * I0) / 1.12),
    d = (h, u, l, f) => {
      const y = v(i, 2, 3.1),
        b = y * v(i, 0.74, 0.94),
        m = i() * Math.PI,
        x = {
          id: `${o}:${t}:${e}:${s.length}`,
          x: h,
          y: u,
          rx: y,
          ry: b,
          rot: m,
          r: (y + b) / 2,
          L: l,
          bud: null,
          vac: null,
          gran: [],
        };
      if (i() < f) {
        const k = v(i, 0.3, 0.75),
          M = i() < 0.5 ? 1 : -1,
          g = m + (M > 0 ? 0 : Math.PI) + v(i, -0.5, 0.5),
          w = y * k;
        x.bud = {
          x: h + Math.cos(g) * (y * 0.92 + w * 0.85),
          y: u + Math.sin(g) * (y * 0.92 + w * 0.85),
          rx: w,
          ry: w * 0.88,
          rot: g,
        };
      }
      i() < 0.55 &&
        (x.vac = {
          dx: v(i, -0.3, 0.3) * y,
          dy: v(i, -0.25, 0.25) * b,
          s: v(i, 0.3, 0.5),
        });
      for (let k = Math.floor(i() * 4); k > 0; k--)
        x.gran.push([v(i, -0.6, 0.6) * y, v(i, -0.5, 0.5) * b]);
      return (s.push(x), x);
    };
  for (let h = 0; h < c; h++) {
    const u = a + i() * I0,
      l = r + i() * I0,
      f = i() < 0.08 ? 2 : 1,
      y = i();
    if (y < 0.93) d(u, l, f, y < 0.13 ? 1 : 0.02);
    else {
      let b = u,
        m = l;
      const x = 2 + Math.floor(i() * 3);
      for (let k = 0; k < x; k++) {
        const M = d(b, m, f, 0.15),
          g = i() * Math.PI * 2,
          w = M.rx + 2.1;
        ((b += Math.cos(g) * w), (m += Math.sin(g) * w));
      }
    }
  }
  return s;
}
function _n(t, e, o, n) {
  const s = Math.floor((t.x0 - e) / I0),
    a = Math.floor((t.x1 + e) / I0),
    r = Math.floor((t.y0 - e) / I0),
    i = Math.floor((t.y1 + e) / I0);
  for (let c = r; c <= i; c++)
    for (let d = s; d <= a; d++) for (const h of Ih(d, c, o)) n(h);
}
const Cn = (t, e, o, n = 1) => {
  const s = Math.cos(-o.rot),
    a = Math.sin(-o.rot),
    r = (t - o.x) * s - (e - o.y) * a,
    i = (t - o.x) * a + (e - o.y) * s;
  return (r / (o.rx * n)) ** 2 + (i / (o.ry * n)) ** 2 <= 1;
};
function zr(t, e, o, n, s) {
  const a = t.upp * 0.9;
  o >= a ? t.strokeBoth(e, o, n, s) : t.strokeBoth(e, a, n, s, o / a);
}
const De = (t, e, o, n, s) => {
  (t.moveTo(e, o), t.lineTo(n, s));
};
let Ss = null;
function Lh() {
  if (Ss) return Ss;
  const t = new Path2D(),
    e = new Path2D(),
    o = (n, s, a, r, i) => {
      for (const c of [-2.6, 0, 2.6])
        De(
          e,
          n + (i ? c : 0),
          s + (i ? 0 : c),
          a + (i ? c : 0),
          r + (i ? 0 : c),
        );
    };
  for (let n = 0; n <= 20; n++) {
    const s = -500 + 50 * n;
    if (n % 4 === 0) {
      if (n === 0 || n === 20) continue;
      (o(s, -500, s, 500, !0), o(-500, s, 500, s, !1));
    } else (De(t, s, -500, s, 500), De(t, -500, s, 500, s));
  }
  for (const n of [-1250, -750, 750, 1250])
    (De(t, n, -1500, n, 1500), De(t, -1500, n, 1500, n));
  for (const n of [-250, 0, 250])
    for (const [s, a] of [
      [-1500, -500],
      [500, 1500],
    ])
      (De(t, n, s, n, a), De(t, s, n, a, n));
  for (const n of [-1500, -500, 500, 1500])
    (o(n, -1500, n, 1500, !0), o(-1500, n, 1500, n, !1));
  return (Ss = {
    single: t,
    triple: e,
  });
}
function Sh(t, e) {
  const n = (s) => (a) => {
    ((a.fillStyle = s ? "#000" : "#fff"), a.fillRect(0, 0, 512, 512));
    const r = tt(77 + t),
      i = Math.round((La / t) * (512 * e) ** 2);
    a.fillStyle = s ? "#fff" : "rgb(178,174,152)";
    for (let c = 0; c < i; c++) {
      const d = r() * 512,
        h = r() * 512,
        u = v(r, 2, 3.1) / e,
        l = u * v(r, 0.74, 0.94),
        f = r() * 3.2;
      cn(512, (y, b) => {
        (a.beginPath(),
          a.ellipse(d + y, h + b, Math.max(0.4, u), Math.max(0.4, l), f, 0, 7),
          a.fill());
      });
    }
  };
  return {
    abs: pe(`yeastA${t}-${e}`, 512, n(!1)),
    ph: pe(`yeastP${t}-${e}`, 512, n(!0)),
  };
}
function jh(t, e, o) {
  const n = Math.max(0, Math.min(e.x1, s0) - Math.max(e.x0, -s0)),
    s = Math.max(0, e.y1 - e.y0),
    a = n * s * (La / o);
  if (a > 7e4) {
    const c = t.upp > 3 ? 4 : t.upp > 1.5 ? 2 : 1,
      d = Sh(o, c),
      h = new Path2D();
    (h.rect(Math.max(e.x0, -s0), e.y0, n, Math.min(e.y1, le) - e.y0),
      e.y1 > le + S0 && h.rect(Math.max(e.x0, -s0), le + S0, n, e.y1 - le - S0),
      t.layer(1),
      t.pattern(h, d.abs, c, 1),
      t.phasePattern(h, d.ph, c, 0.6),
      t.layer(2),
      t.pattern(h, d.abs, c, 0.12, 173, 291));
    return;
  }
  const r = At(),
    i = t.upp > 1 || a > 12e3;
  (_n(e, 12, o, (c) => {
    if (!et(e, c.x, c.y, 10)) return;
    const d = c.L,
      h = c.bud ? [c, c.bud] : [c];
    if (i) {
      for (const f of h)
        r.add(
          `s${d}`,
          (y) => {
            (t.layer(d), t.both(y, [0.74, 0.73, 0.65], 1.4));
          },
          U(f.x, f.y, f.rx, f.ry, f.rot),
        );
      return;
    }
    for (const f of h) {
      const y = U(f.x, f.y, f.rx, f.ry, f.rot);
      (r.add(
        `b${d}`,
        (m) => {
          (t.layer(d), t.abs(m, [0.93, 0.92, 0.85]), t.phase(m, 1.1));
        },
        y,
      ),
        r.add(
          `r${d}`,
          (m) => {
            (t.layer(d), t.strokeAbs(m, 0.4, [0.42, 0.42, 0.38], 0.8));
          },
          y,
        ));
      const b = U(f.x, f.y, f.rx * 0.72, f.ry * 0.7, f.rot);
      if (f === c && c.vac) {
        const m = Math.cos(c.rot),
          x = Math.sin(c.rot),
          k = c.x + c.vac.dx * m - c.vac.dy * x,
          M = c.y + c.vac.dx * x + c.vac.dy * m;
        (b.ellipse(
          k,
          M,
          c.rx * c.vac.s,
          c.ry * c.vac.s * 0.95,
          c.rot,
          0,
          Math.PI * 2,
          !0,
        ),
          r.add(
            `v${d}`,
            (g) => {
              (t.layer(d), t.strokeAbs(g, 0.18, [0.7, 0.7, 0.66], 0.5));
            },
            U(k, M, c.rx * c.vac.s, c.ry * c.vac.s * 0.95, c.rot),
          ));
      }
      r.add(
        `i${d}`,
        (m) => {
          (t.layer(d), t.phase(m, 0.9));
        },
        b,
      );
    }
    const u = Math.cos(c.rot),
      l = Math.sin(c.rot);
    for (const [f, y] of c.gran)
      r.add(
        `g${d}`,
        (b) => {
          (t.layer(d), t.both(b, [0.78, 0.77, 0.7], 0.3));
        },
        U(c.x + f * u - y * l, c.y + f * l + y * u, 0.28, 0.28),
      );
  }),
    r.flush());
}
function Rh(t, e) {
  const o = [
    [-s0 - S0, -9e3, S0, 18e3],
    [s0, -9e3, S0, 18e3],
    [-s0, le, 2 * s0, S0],
  ];
  for (const [n, s, a, r] of o) {
    if (n > e.x1 || n + a < e.x0 || s > e.y1 || s + r < e.y0) continue;
    const i = new Path2D();
    (i.rect(n, s, a, r),
      t.layer(2),
      t.both(i, [0.8, 0.8, 0.82], 0.5),
      t.layer(0),
      t.strokeBoth(i, 40, [0.42, 0.43, 0.46], 2),
      t.strokeAbs(i, 8, [0.15, 0.15, 0.17], 1));
  }
}
const Ah = {
    id: "hemocytometer",
    name: translate("血球计数板（酵母菌培养液）"),
    slideLabel: [translate("血球计数板"), "25 × 16"],
    latin: "Saccharomyces cerevisiae",
    layers: [0, 2, 40],
    dynZ: 2,
    extent: 4e3,
    start: [-400, -400],
    squares: Nr,
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(230,222,180,.35)"),
        t.fillRect(-s0, -10500, 2 * s0, 10500 + le),
        (t.fillStyle = "rgba(60,70,80,.45)"),
        t.fillRect(-s0 - S0, -11e3, S0, 22e3),
        t.fillRect(s0, -11e3, S0, 22e3),
        t.fillRect(-s0, le, 2 * s0, S0),
        (t.strokeStyle = "rgba(40,40,45,.7)"),
        (t.lineWidth = 60),
        t.strokeRect(-1500, -1500, 3e3, 3e3),
        (t.lineWidth = 30));
      for (const n of [-500, 500])
        (t.beginPath(),
          t.moveTo(n, -1500),
          t.lineTo(n, 1500),
          t.moveTo(-1500, n),
          t.lineTo(1500, n),
          t.stroke());
      t.restore();
    },
    render(t, e, o) {
      const n = o.dilution || 1;
      if ((Rh(t, e), et(e, 0, 0, 1510))) {
        const { single: s, triple: a } = Lh();
        (t.layer(0),
          zr(t, s, 1.3, [0.62, 0.62, 0.64], 0.9),
          zr(t, a, 1.1, [0.6, 0.6, 0.62], 0.9));
      }
      (Wt(t, e, {
        seed: 61,
        density: 0.25,
        size: 2.5,
        color: [0.6, 0.58, 0.5],
        z: [1, 1, 2],
      }),
        jh(t, e, n));
    },
    yeastAt(t, e, o) {
      const n = o?.dilution || 1;
      let s = null,
        a = 1 / 0;
      return (
        _n(
          {
            x0: t,
            y0: e,
            x1: t,
            y1: e,
          },
          12,
          n,
          (r) => {
            if (!(Cn(t, e, r, 1.25) || (r.bud && Cn(t, e, r.bud, 1.2)))) return;
            const c = Math.hypot(t - r.x, e - r.y);
            c < a && ((a = c), (s = r));
          },
        ),
        s && {
          id: s.id,
          x: s.x,
          y: s.y,
          r: s.r,
        }
      );
    },
    yeastIn(t, e) {
      const o = e?.dilution || 1,
        n = [];
      return (
        _n(t, 12, o, (s) => {
          s.x >= t.x0 &&
            s.x <= t.x1 &&
            s.y >= t.y0 &&
            s.y <= t.y1 &&
            n.push({
              id: s.id,
              x: s.x,
              y: s.y,
              r: s.r,
            });
        }),
        n
      );
    },
    pick(t, e, o) {
      const n = o?.dilution || 1;
      let s = null;
      if (
        (_n(
          {
            x0: t,
            y0: e,
            x1: t,
            y1: e,
          },
          12,
          n,
          (d) => {
            (Cn(t, e, d, 1.1) || (d.bud && Cn(t, e, d.bud, 1.1))) && (s = d);
          },
        ),
        s)
      )
        return s.bud
          ? translate("出芽的酵母菌")
          : s.L === 2
            ? translate("酵母菌（悬浮，未沉到底）")
            : translate("酵母菌");
      if (!ic(t, e)) return Math.abs(t) < 11e3 ? translate("凹槽") : null;
      if (Math.abs(t) > 1503 || Math.abs(e) > 1503)
        return translate("计数台（无刻线区）");
      const a = (d, h) => Math.abs(d - Math.round(d / h) * h),
        r = Math.abs(t) < 500 && Math.abs(e) < 500;
      if (
        (r
          ? Math.min(a(t + 500, 50), a(e + 500, 50))
          : Math.min(a(t + 1500, 250), a(e + 1500, 250))) <
        (r && Math.min(a(t + 500, 200), a(e + 500, 200)) < 4 ? 4 : 1.5)
      )
        return translate("计数室方格线");
      if (!r) return translate("大方格（1 mm × 1 mm）");
      const c = Nr.find(
        (d) => t >= d.x0 && t < d.x0 + d.size && e >= d.y0 && e < d.y0 + d.size,
      );
      return c
        ? `${translate("小方格")} · ${translate("计数中方格")} · ${c.name}`
        : translate("小方格");
    },
    info: () =>
      `<b>${translate("25 × 16 型")}</b> ${translate("中央 1 mm × 1 mm 的大方格分为 25 个中方格（三线分隔），每个中方格又分为 16 个小方格。计数室深 0.1 mm，所以一个小方格上方的体积是 2.5 × 10⁻⁷ mL。")}<br>${translate("数四角和中央共 5 个中方格（80 个小方格），压线的细胞计上不计下、计左不计右；出芽的酵母菌按一个计。")}`,
  },
  O0 = 220,
  ia = 5200,
  Wr = [
    [1900, -1300, 210],
    [-2700, 1500, 120],
    [500, 2900, 70],
    [-800, -2300, 300],
  ];
function Fr(t, e) {
  const o = jt(t, e, 401),
    n = t * O0,
    s = e * O0,
    a = Math.hypot(n + O0 / 2, (s + O0 / 2) * 1.2) / ia;
  if (a > 1.05) return [];
  const r = Math.max(0, 1.1 + 0.9 * ue(n / 1400, s / 1400, 8) - a),
    i = Math.floor(r * 15 + o()),
    c = [];
  for (let d = 0; d < i; d++) {
    const u = o() < 0.18 ? v(o, 22, 46) : v(o, 3, 16),
      l = {
        x: n + o() * O0,
        y: s + o() * O0,
        a: u,
        b: u * v(o, 0.62, 0.9),
        rot: o() * Math.PI,
        ecc: v(o, 0.45, 0.75),
        seed: Math.floor(o() * 1e9),
        layer: o() < 0.6 ? 1 : o() < 0.5 ? 0 : 2,
        compound: u > 8 && u < 18 && o() < 0.12,
      };
    c.push(l);
  }
  return c;
}
function Eh(t, e = 1) {
  const o = [],
    n = Math.cos(t.rot),
    s = Math.sin(t.rot),
    a = tt(t.seed + 3),
    r = [a(), a(), a()];
  for (let i = 0; i < 36; i++) {
    const c = (i / 36) * Math.PI * 2,
      d = 1 - 0.16 * Math.max(0, Math.cos(c));
    let h = Math.cos(c) * t.a * e,
      u = Math.sin(c) * t.b * e * d;
    const l =
      1 +
      0.035 * Math.sin(3 * c + r[0] * 6) +
      0.025 * Math.sin(5 * c + r[1] * 6);
    ((h *= l), (u *= l), o.push([t.x + h * n - u * s, t.y + h * s + u * n]));
  }
  return o;
}
function qr(t, e) {
  const o = Math.cos(t.rot),
    n = Math.sin(t.rot),
    s = t.a * t.ecc,
    a = [];
  for (let r = 0; r < 28; r++) {
    const i = (r / 28) * Math.PI * 2,
      c = 1 - 0.16 * Math.max(0, Math.cos(i)),
      d = Math.cos(i) * t.a,
      h = Math.sin(i) * t.b * c,
      u = s + (d - s) * e,
      l = h * e;
    a.push([t.x + u * o - l * n, t.y + u * n + l * o]);
  }
  return a;
}
const Ur = (t) => [
    t.x + Math.cos(t.rot) * t.a * t.ecc,
    t.y + Math.sin(t.rot) * t.a * t.ecc,
  ],
  Ch = (() => {
    const t = tt(77);
    return Array.from(
      {
        length: 9,
      },
      () => {
        const e = v(t, -3800, 3800),
          o = v(t, -3e3, 3e3);
        return {
          x: e,
          y: o,
          poly: Mt(e, o, v(t, 90, 160), {
            n: 7,
            amp: 0.3,
            seed: Math.floor(t() * 1e6),
          }),
          rot: t() * 3,
        };
      },
    );
  })(),
  Dh = {
    id: "starch",
    name: translate("马铃薯淀粉粒"),
    slideLabel: [translate("马铃薯"), translate("淀粉粒")],
    latin: "Solanum tuberosum",
    layers: [0, 14, 28],
    dynZ: 14,
    extent: 5e3,
    start: [-300, 250],
    thumbView: [-300, 250, 520],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o * 1.2, o));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, ia);
      (n.addColorStop(0, "rgba(240,240,232,.6)"),
        n.addColorStop(1, "rgba(240,240,232,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, ia, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e, o) {
      const n = At(),
        s = t.upp > 4 ? 0 : t.upp > 1.2 ? 1 : 2;
      (Rt(e, O0, 50, 0, (a, r, i, c, d) => {
        for (const h of Fr(c, d)) {
          if (!et(e, h.x, h.y, h.a * 1.1) || (s === 0 && h.a < 5)) continue;
          const u = z0(o.reagent("iodine", h.x, h.y), 6),
            l = G([0.955, 0.955, 0.945], [0.3, 0.24, 0.55], u),
            f = h.layer,
            y = yt(Eh(h));
          if (
            (n.add(
              `g${f}${u}`,
              (g) => {
                (t.layer(f), t.both(g, l, 1.6));
              },
              y,
            ),
            n.add(
              `e${f}${u}`,
              (g) => {
                (t.layer(f),
                  t.strokeBoth(
                    g,
                    s === 0 ? 2.4 : 1.3,
                    G([0.5, 0.5, 0.48], [0.14, 0.1, 0.3], u),
                    1.2,
                  ));
              },
              y,
            ),
            s === 0)
          )
            continue;
          const b = Math.max(2, Math.floor(h.a / (s === 2 ? 2.6 : 5))),
            m = new Path2D();
          for (let g = 1; g <= b; g++)
            m.addPath(yt(qr(h, Math.pow(g / (b + 0.6), 0.85))));
          n.add(
            `r${f}${u}${s}`,
            (g) => {
              (t.layer(f),
                t.strokeBoth(
                  g,
                  s === 2 ? 0.5 : 0.8,
                  G([0.8, 0.8, 0.78], [0.2, 0.14, 0.4], u),
                  0.6,
                ));
            },
            m,
          );
          const [x, k] = Ur(h),
            M = U(
              x,
              k,
              Math.max(0.6, h.b * 0.06),
              Math.max(0.5, h.b * 0.05),
              h.rot,
            );
          if (
            (n.add(
              `h${f}${u}`,
              (g) => {
                (t.layer(f),
                  t.both(g, G([0.86, 0.86, 0.84], [0.14, 0.1, 0.3], u), 0.6));
              },
              M,
            ),
            h.compound)
          ) {
            const g = {
                ...h,
                rot: h.rot + Math.PI,
                ecc: h.ecc * 0.9,
              },
              w = new Path2D();
            for (let j = 1; j <= 3; j++) w.addPath(yt(qr(g, j / 5)));
            const $ = Math.cos(h.rot + Math.PI / 2),
              L = Math.sin(h.rot + Math.PI / 2);
            (w.moveTo(h.x - $ * h.b * 0.8, h.y - L * h.b * 0.8),
              w.lineTo(h.x + $ * h.b * 0.8, h.y + L * h.b * 0.8),
              n.add(
                `c${f}${u}`,
                (j) => {
                  (t.layer(f),
                    t.strokeBoth(
                      j,
                      0.7,
                      G([0.8, 0.8, 0.78], [0.2, 0.15, 0.4], u),
                      0.6,
                    ));
                },
                w,
              ));
          }
        }
      }),
        n.flush());
      for (const a of Ch)
        et(e, a.x, a.y, 200) &&
          (t.layer(2), t.strokeBoth(it(a.poly), 2.2, [0.82, 0.82, 0.78], 0.8));
      Wt(t, e, {
        seed: 21,
        density: 0.6,
        size: 3,
        color: [0.7, 0.62, 0.5],
      });
      for (const [a, r, i] of Wr) et(e, a, r, i) && Ht(t, a, r, i);
    },
    pick(t, e) {
      for (const [r, i, c] of Wr)
        if (Math.hypot(t - r, e - i) < c) return translate("气泡");
      const o = Math.floor((t - 50) / O0),
        n = Math.floor((t + 50) / O0),
        s = Math.floor((e - 50) / O0),
        a = Math.floor((e + 50) / O0);
      for (let r = o; r <= n; r++)
        for (let i = s; i <= a; i++)
          for (const c of Fr(r, i)) {
            const d = Math.cos(-c.rot),
              h = Math.sin(-c.rot),
              u = (t - c.x) * d - (e - c.y) * h,
              l = (t - c.x) * h + (e - c.y) * d;
            if ((u / c.a) ** 2 + (l / c.b) ** 2 > 1) continue;
            const [f, y] = Ur(c);
            return Math.hypot(t - f, e - y) < Math.max(1.2, c.b * 0.12)
              ? translate("脐点")
              : c.compound
                ? translate("复粒淀粉粒")
                : translate("淀粉粒（层纹）");
          }
      return null;
    },
  },
  Yr = {
    sx: 62,
    sy: 58,
    angle: 0.3,
    jitter: 0.8,
    seed: 515,
  },
  Uo = Mt(200, -100, 3300, {
    n: 40,
    amp: 0.12,
    seed: 63,
    sx: 1.35,
    sy: 0.8,
    rot: -0.2,
    freq: 2.2,
  }),
  _r = [
    [3500, 1800, 260],
    [-3900, -1500, 150],
    [900, 2900, 90],
  ],
  js = [0.98, 0.56, 0.26];
function Bh(t) {
  const e = tt(t.seed),
    o = Ie(t.poly),
    n =
      0.55 +
      0.45 *
        Math.max(0, 1 - Math.hypot((o[0] - 200) / 4400, (o[1] + 100) / 2600));
  return {
    r: e,
    c: o,
    th: n,
    broken: e() < 0.03,
  };
}
const Oh = {
    id: "peanut",
    name: translate("花生子叶切片（苏丹Ⅲ染色）"),
    slideLabel: [translate("花生子叶"), translate("苏丹Ⅲ染色")],
    latin: "Arachis hypogaea",
    layers: [0, 10, 20],
    dynZ: 10,
    extent: 4200,
    start: [300, 100],
    thumbView: [300, 100, 380],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(236,150,70,.75)"),
        t.beginPath(),
        Uo.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      const o = At(),
        n = t.upp > 4 ? 0 : t.upp > 1.1 ? 1 : 2;
      for (const s of p0(e, Yr)) {
        const [a, r] = s.c;
        if (!Lt(a, r, Uo)) continue;
        const i = Bh(s),
          { r: c } = i,
          d = it(s.poly);
        if (
          (o.add(
            "w",
            (y) => {
              for (let b = 0; b < 3; b++)
                (t.layer(b), t.strokeBoth(y, 2.4, [0.86, 0.82, 0.74], 0.7));
            },
            d,
          ),
          i.broken)
        )
          continue;
        const h = _t(s.poly, 2.5),
          u = Math.round(i.th * 6) / 6;
        if (
          (o.add(
            `c${u}`,
            (y) => {
              (t.layer(1), t.both(y, $e([0.99, 0.88, 0.76], u), 0.25));
            },
            it(h),
          ),
          n === 0)
        )
          continue;
        const l = Math.floor((n === 2 ? 70 : 30) * i.th),
          f = i.c;
        for (let y = 0; y < l; y++) {
          const b = f[0] + v(c, -28, 28),
            m = f[1] + v(c, -28, 28);
          if (!Lt(b, m, h)) continue;
          const x = n === 2 ? 0.6 + c() * c() * 3.6 : 1.4 + c() * 2.4,
            k = Math.floor(c() * 3),
            M = `f${k}${x > 2.4 ? 1 : 0}`;
          o.add(
            M,
            (g) => {
              (t.layer(k),
                t.both(g, M.endsWith("1") ? js : G(js, [1, 1, 1], 0.35), 0.9));
            },
            U(b, m, x, x),
          );
        }
        if (n === 2)
          for (let y = 0; y < 4; y++) {
            const b = f[0] + v(c, -20, 20),
              m = f[1] + v(c, -20, 20);
            Lt(b, m, h) &&
              o.add(
                "al",
                (x) => {
                  (t.layer(1), t.both(x, [0.95, 0.94, 0.9], 0.7));
                },
                U(b, m, v(c, 3, 5.5), v(c, 3, 5)),
              );
          }
        if (n === 2 && c() < 0.7) {
          const y = U(
            f[0] + v(c, -12, 12),
            f[1] + v(c, -12, 12),
            5.5,
            4.5,
            c() * 3,
          );
          o.add(
            "n",
            (b) => {
              (t.layer(1), t.abs(b, [0.93, 0.86, 0.8]), t.phase(b, 0.4));
            },
            y,
          );
        }
      }
      (t.upp < 4 &&
        Rt(e, 200, 10, 919, (s, a, r) => {
          const i = Math.floor(r() * 18);
          for (let c = 0; c < i; c++) {
            const d = s + r() * 200,
              h = a + r() * 200,
              u = 1 + r() * r() * 9,
              l = Ua(d, h, Uo, 260);
            l <= 0 ||
              l >= 1 ||
              o.add(
                "free",
                (f) => {
                  (t.layer(2),
                    t.both(f, js, 1.1),
                    t.strokeAbs(f, 0.6, [0.7, 0.32, 0.12], 0.7));
                },
                U(d, h, u, u),
              );
          }
        }),
        o.flush(),
        t.layer(1),
        t.strokeBoth(yt(Uo), 6, [0.78, 0.66, 0.5], 0.8));
      for (const [s, a, r] of _r) et(e, s, a, r) && Ht(t, s, a, r);
    },
    pick(t, e) {
      for (const [a, r, i] of _r)
        if (Math.hypot(t - a, e - r) < i) return translate("气泡");
      const o = Ua(t, e, Uo, 260);
      if (o <= 0) return null;
      if (o < 1) return translate("细胞外的脂肪滴（切破的细胞放出）");
      const n = ts(t, e, Yr);
      return n
        ? Math.min(
            ...n.poly.map((a, r) => {
              const i = n.poly[(r + 1) % n.poly.length],
                c = i[0] - a[0],
                d = i[1] - a[1],
                h = Math.max(
                  0,
                  Math.min(
                    1,
                    ((t - a[0]) * c + (e - a[1]) * d) / (c * c + d * d),
                  ),
                );
              return Math.hypot(t - a[0] - c * h, e - a[1] - d * h);
            }),
          ) < 2.2
          ? translate("细胞壁")
          : translate("脂肪滴（被苏丹Ⅲ染成橘黄色）")
        : null;
    },
    info: () =>
      translate(
        "<b>检测脂肪</b>：苏丹Ⅲ染液把脂肪染成<b>橘黄色</b>（苏丹Ⅳ染成红色）。染色后用 50% 酒精洗去浮色，先在低倍镜下找到最薄的部位，再换高倍镜观察细胞中的脂肪颗粒。",
      ),
  },
  We = -5200,
  po = 5200,
  Hn = -3e3,
  ca = 3e3,
  Rs = 2.5,
  Nh = [0.92, 0.6, 0.72],
  Hr = [0.42, 0.3, 0.62],
  Gr = [
    [3600, -2200, 170],
    [-4100, 2300, 110],
  ],
  Xr = (() => {
    const t = tt(2024),
      e = [];
    let o = Hn,
      n = 0,
      s = 7;
    for (; o < ca;) {
      const a = v(t, 42, 78);
      (e.push({
        y0: o,
        w: a,
        seed: Math.floor(t() * 1e9),
        j: e.length,
        shade: v(t, 0.8, 1.15),
      }),
        (o += a + v(t, 1.5, 4)),
        ++n >= s &&
          ((e[e.length - 1].peri = v(t, 25, 70)),
          (o += e[e.length - 1].peri),
          (n = 0),
          (s = 6 + Math.floor(t() * 5))));
    }
    return e;
  })(),
  go = (t, e, o) =>
    (o ? t.y0 : t.y0 + t.w) +
    6 * kt(e / 700, t.j * 0.37 + (o ? 0 : 0.18), 11) +
    3 * kt(e / 160, t.j, 12),
  zh = (t, e) =>
    t > We + 300 * kt(e / 900, 1, 5) && t < po + 300 * kt(e / 900, 2, 5);
function Wh(t, e, o) {
  const n = new Path2D(),
    s = 24,
    a = Math.max(e, We - 300),
    r = Math.min(o, po + 300);
  if (r <= a) return null;
  for (let i = a; i <= r + s; i += s) {
    const c = Math.min(i, r);
    i === a ? n.moveTo(c, go(t, c, !0)) : n.lineTo(c, go(t, c, !0));
  }
  for (let i = r; i >= a - s; i -= s) {
    const c = Math.max(i, a);
    n.lineTo(c, go(t, c, !1));
  }
  return (n.closePath(), n);
}
function Fh() {
  return pe("sarcomere", 64, (t, e) => {
    const o = (n) => `rgb(${n},${n},${n})`;
    ((t.fillStyle = o(255)),
      t.fillRect(0, 0, e, e),
      (t.fillStyle = o(178)),
      t.fillRect(e * 0.2, 0, e * 0.6, e),
      (t.fillStyle = o(205)),
      t.fillRect(e * 0.45, 0, e * 0.1, e),
      (t.fillStyle = o(150)),
      t.fillRect(e * 0.985, 0, e * 0.03, e),
      t.fillRect(0, 0, e * 0.015, e));
  });
}
const qh = {
    id: "muscle",
    name: translate("骨骼肌纵切"),
    slideLabel: [translate("骨骼肌"), translate("纵切 HE")],
    latin: "Musculus skeletalis",
    layers: [0, 4, 8],
    dynZ: 4,
    extent: 4800,
    start: [-200, 0],
    thumbView: [-200, 0, 420],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(214,110,150,.8)"),
        t.fillRect(We, Hn, po - We, ca - Hn),
        t.restore());
    },
    render(t, e) {
      const o = At(),
        n = t.upp > 3 ? 0 : t.upp > 0.7 ? 1 : 2,
        s = Fh(),
        a = wt(31, {
          n: 500,
          dark: 0.3,
          r1: 1.6,
        });
      for (const r of Xr) {
        if (r.y0 > e.y1 + 20 || r.y0 + r.w < e.y0 - 20) continue;
        const i = Wh(r, e.x0 - 30, e.x1 + 30);
        if (!i) continue;
        const c = Math.round(r.shade * 8) / 8;
        (o.add(
          `f${c}`,
          (l) => {
            (t.layer(1),
              t.both(l, G([1, 1, 1], Nh, c), 0.5),
              n >= 1 && t.pattern(l, a, 0.3, 0.4),
              n === 2
                ? (t.pattern(l, s, Rs / 64, 0.9),
                  t.phasePattern(l, s, Rs / 64, 0.25))
                : n === 1 && t.upp < 1.6 && t.pattern(l, s, Rs / 64, 0.25));
          },
          i,
        ),
          o.add(
            "m",
            (l) => {
              (t.layer(1), t.strokeBoth(l, 0.9, [0.78, 0.5, 0.62], 0.5));
            },
            i,
          ));
        const d = 34,
          h = Math.floor((Math.max(e.x0, We) - 20) / d),
          u = Math.ceil((Math.min(e.x1, po) + 20) / d);
        for (let l = h; l <= u; l++) {
          const f = tt(r.seed ^ (l * 2654435761));
          if (f() < 0.45) continue;
          const y = l * d + v(f, -12, 12),
            b = f() < 0.5,
            m = go(r, y, b) + (b ? 1 : -1) * v(f, 2.5, 5),
            x = Math.floor(f() * 3),
            k = U(
              y,
              m,
              n === 0 ? 5 : v(f, 5, 7.5),
              n === 0 ? 1.8 : v(f, 1.3, 2),
              v(f, -0.08, 0.08),
            );
          o.add(
            `n${x}`,
            (M) => {
              (t.layer(x),
                t.abs(M, Hr),
                t.phase(M, 0.5),
                n === 2 && t.pattern(M, a, 0.12, 0.6));
            },
            k,
          );
        }
        if (r.peri) {
          const l = r.y0 + r.w + 4;
          if (l + r.peri < e.y0 || l > e.y1) continue;
          tt(r.seed + 9);
          const y = new Path2D();
          for (let b = 0; b < 6; b++) {
            const m = l + ((b + 0.5) / 6) * r.peri;
            let x = !0;
            for (
              let k = Math.max(e.x0, We) - 40;
              k <= Math.min(e.x1, po) + 40;
              k += 40
            ) {
              const M = m + 6 * kt(k / 120, b + r.j, 21);
              (x ? y.moveTo(k, M) : y.lineTo(k, M), (x = !1));
            }
          }
          o.add(
            "peri",
            (b) => {
              (t.layer(1), t.strokeBoth(b, 1.6, [0.96, 0.82, 0.86], 0.4));
            },
            y,
          );
          for (
            let b = Math.floor(Math.max(e.x0, We) / 90) * 90;
            b < Math.min(e.x1, po);
            b += 90
          ) {
            const m = tt(r.seed ^ Math.floor(b));
            if (
              !(m() < 0.55) &&
              (o.add(
                "fn",
                (x) => {
                  (t.layer(1), t.abs(x, G(Hr, [1, 1, 1], 0.15)));
                },
                U(
                  b + v(m, 0, 80),
                  l + v(m, 0.2, 0.8) * r.peri,
                  v(m, 4, 6),
                  v(m, 1, 1.6),
                  v(m, -0.3, 0.3),
                ),
              ),
              m() < 0.25 && r.peri > 35)
            ) {
              const x = b + v(m, 0, 80),
                k = l + r.peri / 2;
              o.add(
                "vw",
                (M) => {
                  (t.layer(1), t.strokeBoth(M, 1.5, [0.85, 0.6, 0.7], 0.4));
                },
                U(x, k, 14, 9),
              );
              for (let M = 0; M < 4; M++)
                o.add(
                  "rbc",
                  (g) => {
                    (t.layer(1), t.both(g, [0.95, 0.42, 0.42], 0.6));
                  },
                  U(x + v(m, -7, 7), k + v(m, -4, 4), 3.6, 3.3),
                );
            }
          }
        }
      }
      (o.flush(),
        Wt(t, e, {
          seed: 66,
          density: 0.3,
          size: 3,
          color: [0.6, 0.45, 0.5],
        }));
      for (const [r, i, c] of Gr) et(e, r, i, c) && Ht(t, r, i, c);
    },
    pick(t, e) {
      for (const [o, n, s] of Gr)
        if (Math.hypot(t - o, e - n) < s) return translate("气泡");
      if (!zh(t, e) || e < Hn - 20 || e > ca + 20) return null;
      for (const o of Xr) {
        const n = go(o, t, !0),
          s = go(o, t, !1);
        if (e >= n && e <= s)
          return e - n < 7 || s - e < 7
            ? translate("细胞核（位于肌纤维周边）")
            : translate("肌纤维（横纹：暗带、明带）");
        if (o.peri && e > s && e < s + 4 + o.peri)
          return translate("结缔组织（肌束膜）");
      }
      return null;
    },
    info: () =>
      translate(
        "<b>骨骼肌</b>：肌纤维呈长圆柱形，有许多细胞核，位于细胞周边；有明显的<b>横纹</b>。换 40× 物镜并缩小光圈，横纹开始显现；用油镜可以看清暗带（A 带）、明带（I 带）和 Z 线。",
      ),
  },
  Oe = 4600,
  ie = 700,
  cc = [0.42, 0.42, 0.78],
  Vr = [
    [2400, 1900, 190],
    [-3e3, -1600, 120],
  ];
function la(t, e) {
  const o = jt(t, e, 311),
    n = t * ie + ie / 2,
    s = e * ie + ie / 2;
  if (Math.hypot(n, s * 1.2) > Oe * 0.92 || o() < 0.3) return null;
  const a = n + v(o, -200, 200),
    r = s + v(o, -200, 200),
    i = v(o, 24, 38),
    c = 3 + Math.floor(o() * 4),
    d = o() * Math.PI * 2,
    h = [];
  for (let l = 0; l < c; l++) {
    const f = d + (l / c) * Math.PI * 2 + v(o, -0.3, 0.3);
    h.push({
      a: f,
      len: v(o, 180, 420),
      w: v(o, 8, 13),
      seed: Math.floor(o() * 1e9),
      axon: l === 0,
    });
  }
  const u = Mt(a, r, i, {
    n: 18,
    amp: 0.12,
    seed: Math.floor(o() * 1e6),
    sx: v(o, 0.9, 1.15),
  });
  for (const l of h)
    for (let f = 0; f < u.length; f++) {
      const [y, b] = u[f],
        m = Math.atan2(b - r, y - a);
      let x = Math.abs(m - l.a) % (Math.PI * 2);
      x > Math.PI && (x = Math.PI * 2 - x);
      const k = Math.max(0, 1 - x / 0.45) * 0.35;
      u[f] = [a + (y - a) * (1 + k), r + (b - r) * (1 + k)];
    }
  return {
    x: a,
    y: r,
    R: i,
    body: u,
    procs: h,
    seed: Math.floor(o() * 1e9),
    nuc: {
      x: a + v(o, -4, 4),
      y: r + v(o, -4, 4),
      r: v(o, 7.5, 10),
    },
    layer: 1,
  };
}
const As = (() => {
  for (const [t, e] of [
    [0, 0],
    [-1, 0],
    [0, -1],
    [-1, -1],
    [1, 0],
    [0, 1],
    [1, 1],
    [-1, 1],
    [1, -1],
  ]) {
    const o = la(t, e);
    if (o) return [Math.round(o.x + 40), Math.round(o.y)];
  }
  return [0, 0];
})();
function Uh(t, e, o, n, s) {
  const a = tt(n.seed),
    r = [
      {
        x: o.x + Math.cos(n.a) * o.R,
        y: o.y + Math.sin(n.a) * o.R,
        a: n.a,
        len: n.len,
        w: n.axon ? 3.2 : n.w,
        depth: 0,
      },
    ];
  for (; r.length;) {
    const i = r.pop(),
      c = Math.max(4, Math.floor(i.len / 18));
    let { x: d, y: h, a: u, w: l } = i;
    const f = n.axon ? 0.995 : Math.pow(1.4 / Math.max(1.4, l), 1 / c),
      y = [[d, h, l, u]];
    for (let k = 0; k < c; k++)
      ((u += v(a, -0.28, 0.28)),
        s === 2 &&
          !n.axon &&
          k < 3 &&
          t.add(
            "nisslp",
            (M) => {
              (e.layer(1), e.abs(M, [0.3, 0.28, 0.64], 0.8));
            },
            U(
              d + v(a, -1.5, 1.5),
              h + v(a, -1.5, 1.5),
              Math.max(0.8, l * 0.22),
              Math.max(0.5, l * 0.13),
              u,
            ),
          ),
        (d += Math.cos(u) * 18),
        (h += Math.sin(u) * 18),
        (l = Math.max(1.2, l * f)),
        y.push([d, h, l, u]),
        !n.axon &&
          i.depth < 2 &&
          l > 1.6 &&
          a() < 0.09 &&
          (r.push({
            x: d,
            y: h,
            a: u + (a() < 0.5 ? -1 : 1) * v(a, 0.4, 0.9),
            len: i.len * (1 - k / c) * 0.8,
            w: l * 0.75,
            depth: i.depth + 1,
          }),
          (l *= 0.82)));
    const b = [],
      m = [];
    for (let k = 0; k < y.length; k++) {
      const [M, g, w] = y[k],
        $ = y[Math.min(y.length - 1, k + 1)],
        L = y[Math.max(0, k - 1)],
        j = Math.atan2($[1] - L[1], $[0] - L[0]) + Math.PI / 2;
      (b.push([M + (Math.cos(j) * w) / 2, g + (Math.sin(j) * w) / 2]),
        m.push([M - (Math.cos(j) * w) / 2, g - (Math.sin(j) * w) / 2]));
    }
    const x = G([1, 1, 1], cc, n.axon ? 0.6 : 0.95);
    t.add(
      n.axon ? "axon" : "dend",
      (k) => {
        (e.layer(1), e.both(k, x, 0.8));
      },
      it([...b, ...m.reverse()]),
    );
  }
}
const Yh = {
    id: "neuron",
    name: translate("脊髓涂片（运动神经元）"),
    slideLabel: [translate("脊髓涂片"), translate("运动神经元")],
    latin: "Medulla spinalis",
    layers: [0, 6, 12],
    dynZ: 6,
    extent: 4400,
    start: As,
    thumbView: [As[0], As[1], 420],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o * 1.2, o));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, Oe);
      (n.addColorStop(0, "rgba(110,110,200,.55)"),
        n.addColorStop(1, "rgba(110,110,200,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, Oe, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      const o = t.upp > 3 ? 0 : t.upp > 0.9 ? 1 : 2,
        n = At(),
        s = new Path2D();
      (s.ellipse(0, 0, Oe, Oe / 1.2, 0, 0, Math.PI * 2),
        t.layer(1),
        t.abs(s, [0.9, 0.9, 0.97], 0.8),
        o >= 1 &&
          (t.pattern(
            s,
            Vs(5, {
              n: 160,
              w0: 1.5,
              w1: 3.5,
              dark: 0.16,
            }),
            0.18,
            0.7,
          ),
          t.phasePattern(
            s,
            Vs(5, {
              n: 160,
              w0: 1.5,
              w1: 3.5,
              dark: 0.16,
            }),
            0.18,
            0.2,
          )),
        Rt(e, 160, 8, 77, (a, r, i) => {
          if (Math.hypot(a, r * 1.2) / Oe > 1) return;
          const d = 0.8 + 0.6 * ue(a / 900, r / 900, 4),
            h = Math.floor(d * (o === 0 ? 6 : 12));
          for (let u = 0; u < h; u++) {
            const l = a + i() * 160,
              f = r + i() * 160,
              y = v(i, 2.5, 4.2),
              b = Math.floor(i() * 3);
            n.add(
              `g${b}`,
              (m) => {
                (t.layer(b),
                  t.both(m, [0.32, 0.3, 0.66], 0.6),
                  o === 2 &&
                    t.pattern(
                      m,
                      wt(41, {
                        n: 600,
                        dark: 0.5,
                        r1: 1.4,
                      }),
                      0.1,
                      0.6,
                    ));
              },
              U(l, f, y, y * v(i, 0.75, 1), i() * 3),
            );
          }
        }),
        Rt(e, ie, 450, 0, (a, r, i, c, d) => {
          const h = la(c, d);
          if (!h || !et(e, h.x, h.y, 420)) return;
          for (const f of h.procs) Uh(n, t, h, f, o);
          const u = yt(h.body);
          if (
            (n.add(
              "soma",
              (f) => {
                (t.layer(1), t.both(f, G([1, 1, 1], cc, 0.85), 0.8));
              },
              u,
            ),
            n.add(
              "somaE",
              (f) => {
                (t.layer(1), t.strokeAbs(f, 1.2, [0.38, 0.38, 0.72], 0.7));
              },
              u,
            ),
            o >= 1)
          ) {
            const f = tt(h.seed),
              y = new Path2D(),
              b = o === 2 ? 160 : 50;
            for (let m = 0; m < b; m++) {
              const x = f() * Math.PI * 2,
                k = Math.sqrt(f()) * h.R * 1.05,
                M = h.x + Math.cos(x) * k,
                g = h.y + Math.sin(x) * k;
              Math.hypot(M - h.nuc.x, g - h.nuc.y) < h.nuc.r + 2 ||
                U(M, g, v(f, 1, 2.4), v(f, 0.7, 1.5), f() * 3, y);
            }
            n.add(
              "nissl",
              (m) => {
                (t.layer(1),
                  t.abs(m, [0.28, 0.24, 0.6], 0.85),
                  t.phase(m, 0.3));
              },
              y,
            );
          }
          const l = U(h.nuc.x, h.nuc.y, h.nuc.r, h.nuc.r * 0.94);
          (n.add(
            "nuc",
            (f) => {
              (t.layer(1),
                t.abs(f, [0.86, 0.86, 0.95]),
                t.strokeBoth(f, 0.9, [0.4, 0.4, 0.74], 0.5));
            },
            l,
          ),
            n.add(
              "nucleolus",
              (f) => {
                (t.layer(1), t.both(f, [0.22, 0.18, 0.5], 0.8));
              },
              U(h.nuc.x + 1.5, h.nuc.y - 1, 2.1, 2),
            ));
        }),
        n.flush(),
        Wt(t, e, {
          seed: 90,
          density: 0.4,
          size: 3,
          color: [0.5, 0.5, 0.7],
        }));
      for (const [a, r, i] of Vr) et(e, a, r, i) && Ht(t, a, r, i);
    },
    pick(t, e) {
      for (const [r, i, c] of Vr)
        if (Math.hypot(t - r, e - i) < c) return translate("气泡");
      if (Math.hypot(t, e * 1.2) > Oe) return null;
      const o = Math.floor((t - 450) / ie),
        n = Math.floor((t + 450) / ie),
        s = Math.floor((e - 450) / ie),
        a = Math.floor((e + 450) / ie);
      for (let r = o; r <= n; r++)
        for (let i = s; i <= a; i++) {
          const c = la(r, i);
          if (!c) continue;
          const d = Math.hypot(t - c.x, e - c.y);
          if (Math.hypot(t - c.nuc.x - 1.5, e - c.nuc.y + 1) < 2.4)
            return translate("核仁");
          if (Math.hypot(t - c.nuc.x, e - c.nuc.y) < c.nuc.r)
            return translate("细胞核");
          if (d < c.R * 1.1) return translate("细胞体（含尼氏体）");
          if (d < c.R * 1.1 + 300) {
            const h = Math.atan2(e - c.y, t - c.x);
            for (const u of c.procs) {
              let l = Math.abs(h - u.a) % (Math.PI * 2);
              if ((l > Math.PI && (l = Math.PI * 2 - l), l < 0.12))
                return u.axon ? translate("轴突") : translate("树突");
            }
          }
        }
      return translate("神经纤维网与神经胶质细胞");
    },
    info: () =>
      translate(
        "<b>神经元</b>由细胞体和突起组成。突起分为<b>树突</b>（多而短、反复分支）和<b>轴突</b>（一条，细而长，粗细均匀）。细胞体中被碱性染料染成蓝紫色的颗粒叫尼氏体。",
      ),
  },
  ha = 6e3,
  ce = 40,
  Dn = [0.42, 0.22, 0.6],
  Yo = [0.9, 0.38, 0.52];
function lc(t, e) {
  const o = Math.atan2(e, t) + 0.6 * kt(t / 1800, e / 1800, 3),
    n = [
      0.15 + Math.max(0, Math.cos(o)),
      0.15 + Math.max(0, Math.cos(o - 2.1)),
      0.1 + Math.max(0, Math.cos(o + 2.1)),
    ],
    s = n[0] + n[1] + n[2];
  return n.map((a) => a / s);
}
const fa = (t, e) =>
  Math.max(
    0,
    0.75 + 0.8 * ue(t / 900, e / 900, 12) - Math.hypot(t, e * 1.25) / ha,
  );
function Kr(t, e) {
  const o = t * ce,
    n = e * ce,
    s = fa(o, n);
  if (s <= 0) return [];
  const a = jt(t, e, 808),
    r = lc(o, n),
    i = Math.floor(s * 5 + a()),
    c = [];
  for (let d = 0; d < i; d++) {
    const h = o + a() * ce,
      u = n + a() * ce,
      l = a(),
      f = l < r[0] ? "coccus" : l < r[0] + r[1] ? "rod" : "spiral";
    if (f === "coccus") {
      const y = a(),
        b =
          y < 0.6
            ? 4 + Math.floor(a() * 14)
            : y < 0.85
              ? 4 + Math.floor(a() * 8)
              : 2;
      let m = h,
        x = u,
        k = a() * Math.PI * 2;
      for (let M = 0; M < b; M++)
        if (
          (c.push({
            type: f,
            x: m,
            y: x,
            rad: v(a, 0.42, 0.52),
            L: Math.floor(a() * 3),
          }),
          y < 0.6)
        ) {
          const g = a() * Math.PI * 2;
          ((m = h + Math.cos(g) * Math.sqrt(M + 1) * 0.75),
            (x = u + Math.sin(g) * Math.sqrt(M + 1) * 0.75));
        } else
          ((k += v(a, -0.35, 0.35)),
            (m += Math.cos(k) * 0.98),
            (x += Math.sin(k) * 0.98));
    } else if (f === "rod") {
      const y = a() * Math.PI;
      (c.push({
        type: f,
        x: h,
        y: u,
        len: v(a, 1.8, 3),
        w: v(a, 0.55, 0.7),
        a: y,
        L: Math.floor(a() * 3),
      }),
        a() < 0.2 &&
          c.push({
            type: f,
            x: h + Math.cos(y) * 2.8,
            y: u + Math.sin(y) * 2.8,
            len: v(a, 1.8, 2.6),
            w: 0.6,
            a: y + v(a, -0.2, 0.2),
            L: 1,
          }));
    } else
      c.push({
        type: f,
        x: h,
        y: u,
        len: v(a, 7, 15),
        turns: v(a, 2.5, 5),
        amp: v(a, 0.7, 1.1),
        a: a() * Math.PI,
        L: Math.floor(a() * 3),
      });
  }
  return c;
}
function _h(t) {
  const e = [],
    o = Math.cos(t.a),
    n = Math.sin(t.a),
    s = 40;
  for (let a = 0; a <= s; a++) {
    const r = a / s,
      i = (r - 0.5) * t.len,
      c = Math.sin(r * t.turns * Math.PI * 2) * t.amp;
    e.push([t.x + i * o - c * n, t.y + i * n + c * o]);
  }
  return F0(e);
}
const Hh = {
    id: "bacteria",
    name: translate("细菌三型涂片（革兰染色）"),
    slideLabel: [translate("细菌三型"), translate("革兰染色")],
    latin: "Coccus · Bacillus · Spirillum",
    layers: [0, 0.8, 1.6],
    dynZ: 0.8,
    extent: 5600,
    start: [900, 300],
    thumbView: [900, 300, 60],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o * 1.25, o));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, ha);
      (n.addColorStop(0, "rgba(190,110,160,.45)"),
        n.addColorStop(1, "rgba(190,110,160,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, ha, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      const o = t.upp > 2.5 ? 0 : t.upp > 0.6 ? 1 : 2,
        n = e.x1 - e.x0,
        s = Math.max(20, n / 48);
      t.layer(1);
      for (let r = Math.floor(e.y0 / s) * s; r < e.y1; r += s)
        for (let i = Math.floor(e.x0 / s) * s; i < e.x1; i += s) {
          const c = fa(i + s / 2, r + s / 2);
          if (c <= 0.02) continue;
          const d = lc(i, r),
            h = [
              d[0] * Dn[0] + (1 - d[0]) * Yo[0],
              d[0] * Dn[1] + (1 - d[0]) * Yo[1],
              d[0] * Dn[2] + (1 - d[0]) * Yo[2],
            ],
            u = Math.min(1, c) * (o === 0 ? 0.22 : o === 1 ? 0.06 : 0.02),
            l = new Path2D();
          (l.rect(i, r, s + 0.5, s + 0.5),
            t.abs(l, [
              1 - (1 - h[0]) * u,
              1 - (1 - h[1]) * u,
              1 - (1 - h[2]) * u,
            ]));
        }
      if (o === 0) {
        Wt(t, e, {
          seed: 5,
          density: 0.5,
          size: 4,
          color: [0.6, 0.45, 0.55],
        });
        return;
      }
      const a = At();
      (Rt(e, ce, 8, 0, (r, i, c, d, h) => {
        for (const u of Kr(d, h))
          if (et(e, u.x, u.y, 8))
            if (u.type === "coccus")
              a.add(
                `c${u.L}`,
                (l) => {
                  (t.layer(u.L), t.both(l, Dn, 0.7));
                },
                U(u.x, u.y, u.rad, u.rad),
              );
            else if (u.type === "rod") {
              const l = new Path2D(),
                f = Math.cos(u.a),
                y = Math.sin(u.a),
                b = (u.len - u.w) / 2;
              (l.moveTo(u.x - f * b, u.y - y * b),
                l.lineTo(u.x + f * b, u.y + y * b),
                a.add(
                  `r${u.L}`,
                  (m) => {
                    (t.layer(u.L),
                      (t.ctxAbs.lineCap = t.ctxPh.lineCap = "round"),
                      t.strokeBoth(m, u.w, Yo, 0.6));
                  },
                  l,
                ));
            } else
              a.add(
                `s${u.L}`,
                (l) => {
                  (t.layer(u.L),
                    (t.ctxAbs.lineCap = t.ctxPh.lineCap = "round"),
                    t.strokeBoth(l, 0.5, Yo, 0.55));
                },
                _h(u),
              );
      }),
        a.flush());
      for (let r = 0; r < 3; r++) t.layer(r).ctxAbs.lineCap = "butt";
      ((t.ctxPh.lineCap = "butt"),
        Wt(t, e, {
          seed: 5,
          density: 0.5,
          size: 4,
          color: [0.6, 0.45, 0.55],
        }));
    },
    pick(t, e) {
      const o = Math.floor((t - 8) / ce),
        n = Math.floor((t + 8) / ce),
        s = Math.floor((e - 8) / ce),
        a = Math.floor((e + 8) / ce);
      let r = null,
        i = 1.2;
      for (let c = o; c <= n; c++)
        for (let d = s; d <= a; d++)
          for (const h of Kr(c, d)) {
            let u;
            if (h.type === "coccus") u = Math.hypot(t - h.x, e - h.y) - h.rad;
            else if (h.type === "rod") {
              const l = Math.cos(h.a),
                f = Math.sin(h.a),
                y = (t - h.x) * l + (e - h.y) * f,
                b = -(t - h.x) * f + (e - h.y) * l;
              u = Math.hypot(Math.max(0, Math.abs(y) - h.len / 2), b) - h.w / 2;
            } else {
              const l = Math.cos(h.a),
                f = Math.sin(h.a),
                y = (t - h.x) * l + (e - h.y) * f,
                b = -(t - h.x) * f + (e - h.y) * l;
              u =
                Math.abs(y) > h.len / 2
                  ? 9
                  : Math.abs(
                      b -
                        Math.sin((y / h.len + 0.5) * h.turns * Math.PI * 2) *
                          h.amp,
                    ) - 0.4;
            }
            u < i && ((i = u), (r = h.type));
          }
      return r === "coccus"
        ? translate("球菌（革兰阳性，紫色）")
        : r === "rod"
          ? translate("杆菌（革兰阴性，红色）")
          : r === "spiral"
            ? translate("螺旋菌（革兰阴性，红色）")
            : fa(t, e) > 0
              ? translate("涂膜")
              : null;
    },
    info: () =>
      translate(
        "<b>细菌</b>很小，要用<b>油镜</b>（100×）观察：先在低倍镜下找到涂膜较薄、颜色较淡的地方，滴加香柏油后换油镜。革兰染色后，<b>革兰阳性菌</b>呈紫色，<b>革兰阴性菌</b>呈红色。",
      ),
  },
  da = 5200,
  N0 = 320,
  Es = [0.62, 0.72, 0.95],
  Zr = [0.5, 0.62, 0.9],
  Qr = [
    [-2200, 1700, 230],
    [2700, -800, 140],
    [400, -3100, 80],
  ],
  hc = (t, e) =>
    Math.max(
      0,
      0.9 + 0.9 * ue(t / 1500, e / 1500, 61) - Math.hypot(t, e * 1.15) / da,
    );
function ua(t, e) {
  const o = t * N0,
    n = e * N0,
    s = hc(o + N0 / 2, n + N0 / 2);
  if (s <= 0) return null;
  const a = jt(t, e, 4242),
    r = [],
    i = Math.floor(s * 3 + a());
  for (let h = 0; h < i; h++) {
    let u = o + a() * N0,
      l = n + a() * N0,
      f = a() * Math.PI * 2;
    const y = [[u, l]],
      b = 8 + Math.floor(a() * 16);
    for (let m = 0; m < b; m++)
      ((f += v(a, -0.3, 0.3)),
        (u += Math.cos(f) * 26),
        (l += Math.sin(f) * 26),
        y.push([u, l]));
    r.push({
      pts: y,
      w: v(a, 2.4, 3.6),
      L: Math.floor(a() * 3),
    });
  }
  const c = [],
    d = Math.floor(s * 2.2 + a() * 0.8);
  for (let h = 0; h < d && r.length; h++) {
    const u = r[Math.floor(a() * r.length)],
      [l, f] = u.pts[Math.floor(a() * u.pts.length)],
      y = a() * Math.PI * 2,
      b = v(a, 90, 220);
    c.push({
      bx: l,
      by: f,
      a: y,
      len: b,
      tx: l + Math.cos(y) * b,
      ty: f + Math.sin(y) * b,
      seed: Math.floor(a() * 1e9),
      L: 1,
    });
  }
  return {
    hyphae: r,
    heads: c,
  };
}
const Cs = (() => {
  let t = null,
    e = 1 / 0;
  for (let o = -2; o <= 1; o++)
    for (let n = -2; n <= 1; n++)
      for (const s of ua(o, n)?.heads || []) {
        const a = Math.hypot(s.tx, s.ty);
        a < e &&
          ((e = a),
          (t = [
            Math.round(s.tx + Math.cos(s.a) * 20),
            Math.round(s.ty + Math.sin(s.a) * 20),
          ]));
      }
  return t || [0, 0];
})();
function Jr(t, e, o) {
  const n = tt(t.seed),
    s = 2 + Math.floor(n() * 3);
  for (let a = 0; a < s; a++) {
    const r = t.a + (a - (s - 1) / 2) * 0.32 + v(n, -0.08, 0.08),
      i = v(n, 10, 15),
      c = t.tx + Math.cos(r) * i,
      d = t.ty + Math.sin(r) * i;
    o.metula.push([
      [t.tx, t.ty],
      [c, d],
    ]);
    const h = 3 + Math.floor(n() * 3);
    for (let u = 0; u < h; u++) {
      const l = r + (u - (h - 1) / 2) * 0.16,
        f = v(n, 8, 10),
        y = c + Math.cos(l) * f,
        b = d + Math.sin(l) * f;
      if ((o.phialide.push([c, d, y, b, l]), e < 1)) continue;
      const m = 4 + Math.floor(n() * 12);
      let x = y,
        k = b,
        M = l;
      for (let g = 0; g < m; g++)
        ((M += v(n, -0.12, 0.12)),
          (x += Math.cos(M) * 2.9),
          (k += Math.sin(M) * 2.9),
          o.conidia.push([x, k, v(n, 1.25, 1.5)]));
    }
  }
}
const Gh = {
    id: "penicillium",
    name: translate("青霉（棉蓝染色）"),
    slideLabel: [translate("青霉"), translate("乳酸酚棉蓝")],
    latin: "Penicillium sp.",
    layers: [0, 8, 16],
    dynZ: 8,
    extent: 5e3,
    start: Cs,
    thumbView: [Cs[0], Cs[1], 260],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(), t.translate(e / 2, e / 2), t.scale(o, o / 1.15));
      const n = t.createRadialGradient(0, 0, 0, 0, 0, da);
      (n.addColorStop(0, "rgba(90,130,210,.6)"),
        n.addColorStop(1, "rgba(90,130,210,0)"),
        (t.fillStyle = n),
        t.beginPath(),
        t.arc(0, 0, da, 0, 7),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      const o = t.upp > 3 ? 0 : t.upp > 1 ? 1 : 2,
        n = At();
      (Rt(e, N0, 600, 0, (s, a, r, i, c) => {
        const d = ua(i, c);
        if (d) {
          for (const h of d.hyphae) {
            const u = F0(h.pts),
              l = Math.round(h.w * 2) / 2;
            if (
              (n.add(
                `h${h.L}${l}`,
                (f) => {
                  (t.layer(h.L), t.strokeBoth(f, l, Es, 0.7));
                },
                u,
              ),
              o === 2)
            ) {
              const f = new Path2D();
              for (let y = 1; y < h.pts.length - 1; y += 1) {
                const [b, m] = h.pts[y - 1],
                  [x, k] = h.pts[y],
                  M = Math.atan2(k - m, x - b) + Math.PI / 2;
                (f.moveTo(
                  x - Math.cos(M) * h.w * 0.5,
                  k - Math.sin(M) * h.w * 0.5,
                ),
                  f.lineTo(
                    x + Math.cos(M) * h.w * 0.5,
                    k + Math.sin(M) * h.w * 0.5,
                  ));
              }
              n.add(
                `sep${h.L}`,
                (y) => {
                  (t.layer(h.L), t.strokeAbs(y, 0.6, [0.4, 0.5, 0.82], 0.9));
                },
                f,
              );
            }
          }
          for (const h of d.heads) {
            if (!et(e, h.tx, h.ty, 80) && !et(e, h.bx, h.by, 10)) continue;
            n.add(
              "stipe",
              (y) => {
                (t.layer(1), t.strokeBoth(y, 3, Es, 0.8));
              },
              F0([
                [h.bx, h.by],
                [h.tx, h.ty],
              ]),
            );
            const u = {
              metula: [],
              phialide: [],
              conidia: [],
            };
            Jr(h, o, u);
            const l = new Path2D();
            for (const [[y, b], [m, x]] of u.metula)
              (l.moveTo(y, b), l.lineTo(m, x));
            n.add(
              "metula",
              (y) => {
                (t.layer(1), t.strokeBoth(y, 2.6, Es, 0.8));
              },
              l,
            );
            const f = new Path2D();
            for (const [, , y, b, m] of u.phialide)
              U(y - Math.cos(m) * 4, b - Math.sin(m) * 4, 4.4, 1.2, m, f);
            if (
              (n.add(
                "phialide",
                (y) => {
                  (t.layer(1), t.both(y, [0.55, 0.65, 0.92], 0.8));
                },
                f,
              ),
              o >= 1)
            ) {
              const y = new Path2D();
              for (const [b, m, x] of u.conidia) U(b, m, x, x, 0, y);
              n.add(
                "conidia",
                (b) => {
                  (t.layer(1), t.both(b, Zr, 0.9));
                },
                y,
              );
            } else
              n.add(
                "headLow",
                (y) => {
                  (t.layer(1), t.abs(y, [0.6, 0.7, 0.95]));
                },
                U(
                  h.tx + Math.cos(h.a) * 30,
                  h.ty + Math.sin(h.a) * 30,
                  30,
                  18,
                  h.a,
                ),
              );
          }
        }
      }),
        o >= 1 &&
          Rt(e, 60, 3, 515, (s, a, r) => {
            const i = Math.floor(hc(s, a) * 14 * r());
            for (let c = 0; c < i; c++) {
              const d = Math.floor(r() * 3);
              n.add(
                `fc${d}`,
                (h) => {
                  (t.layer(d), t.both(h, Zr, 0.85));
                },
                U(s + r() * 60, a + r() * 60, 1.4, 1.35),
              );
            }
          }),
        n.flush(),
        Wt(t, e, {
          seed: 72,
          density: 0.4,
          size: 4,
          color: [0.45, 0.5, 0.7],
        }));
      for (const [s, a, r] of Qr) et(e, s, a, r) && Ht(t, s, a, r);
    },
    pick(t, e) {
      for (const [r, i, c] of Qr)
        if (Math.hypot(t - r, e - i) < c) return translate("气泡");
      const o = Math.floor((t - 600) / N0),
        n = Math.floor((t + 600) / N0),
        s = Math.floor((e - 600) / N0),
        a = Math.floor((e + 600) / N0);
      for (let r = o; r <= n; r++)
        for (let i = s; i <= a; i++) {
          const c = ua(r, i);
          if (c) {
            for (const d of c.heads) {
              const h = {
                metula: [],
                phialide: [],
                conidia: [],
              };
              if (!(Math.hypot(t - d.tx, e - d.ty) > 90)) {
                Jr(d, 2, h);
                for (const [u, l, f] of h.conidia)
                  if (Math.hypot(t - u, e - l) < f + 0.6)
                    return translate("分生孢子");
                for (const [, , u, l, f] of h.phialide)
                  if (
                    Math.hypot(
                      t - u + Math.cos(f) * 4,
                      e - l + Math.sin(f) * 4,
                    ) < 4.5
                  )
                    return translate("小梗");
                if (Math.hypot(t - d.tx, e - d.ty) < 16)
                  return translate("梗基（帚状枝）");
              }
            }
            for (const d of c.heads) {
              const h = d.tx - d.bx,
                u = d.ty - d.by,
                l = Math.max(
                  0,
                  Math.min(
                    1,
                    ((t - d.bx) * h + (e - d.by) * u) / (h * h + u * u),
                  ),
                );
              if (Math.hypot(t - d.bx - h * l, e - d.by - u * l) < 3)
                return translate("分生孢子梗");
            }
            for (const d of c.hyphae)
              for (let h = 1; h < d.pts.length; h++) {
                const [u, l] = d.pts[h - 1],
                  [f, y] = d.pts[h],
                  b = f - u,
                  m = y - l,
                  x = Math.max(
                    0,
                    Math.min(1, ((t - u) * b + (e - l) * m) / (b * b + m * m)),
                  );
                if (Math.hypot(t - u - b * x, e - l - m * x) < d.w)
                  return translate("菌丝（有横隔）");
              }
          }
        }
      return null;
    },
    info: () =>
      translate(
        "<b>青霉</b>是多细胞真菌，菌丝有横隔。直立菌丝（分生孢子梗）顶端分枝成<b>扫帚状</b>，生出成串的<b>分生孢子</b>，孢子落到适宜的环境中就会萌发成新个体。曲霉的孢子梗顶端则膨大成球状。",
      ),
  },
  r0 = 2400,
  P0 = 1420,
  rn = 1690,
  Xh = 1725,
  pa = 1810,
  _e = 1900,
  Jn = 2365,
  ti = 17,
  Ds = [0.86, 0.3, 0.38],
  no = [0.58, 0.8, 0.56],
  ei = [
    [3e3, 2200, 200],
    [-3300, -2e3, 130],
  ],
  ge = (() => {
    const t = tt(1717);
    return Array.from(
      {
        length: ti,
      },
      (e, o) => ({
        a: (o / ti) * Math.PI * 2 + v(t, -0.08, 0.08),
        w: v(t, 120, 200),
        big: t() < 0.6,
        seed: Math.floor(t() * 1e9),
      }),
    );
  })(),
  Vh = (t, e) => {
    let o = (t - e) % (Math.PI * 2);
    return (
      o > Math.PI && (o -= Math.PI * 2),
      o < -Math.PI && (o += Math.PI * 2),
      o
    );
  };
function fc(t, e) {
  const o = Math.hypot(t, e);
  if (o < P0 - 40 || o > _e) return null;
  const n = Math.atan2(e, t);
  for (const s of ge) {
    const a =
        s.w *
        (s.big ? 1 : 0.7) *
        (0.45 + 0.55 * Math.min(1, (o - P0 + 60) / (_e - P0))),
      r = Vh(n, s.a) * o;
    if (Math.abs(r) < a)
      return {
        b: s,
        rr: o,
        d: r,
        hw: a,
      };
  }
  return null;
}
function so(t, e) {
  const o = Math.hypot(t, e);
  return o > r0
    ? null
    : o > Jn
      ? "epi"
      : fc(t, e)
        ? o < rn
          ? "xylem"
          : o < Xh
            ? "cambium"
            : o < pa
              ? "phloem"
              : "cap"
        : o < P0
          ? "pith"
          : o < _e
            ? "ray"
            : o > Jn - 140
              ? "collenchyma"
              : "cortex";
}
function Bs(t, e, o) {
  const n = [],
    s = (a) =>
      t.w *
      (t.big ? 1 : 0.7) *
      (0.45 + 0.55 * Math.min(1, (a - P0 + 60) / (_e - P0)));
  for (let a = 0; a <= 6; a++) {
    const r = e + ((o - e) * a) / 6,
      i = -s(r) / r;
    n.push([Math.cos(t.a + i) * r, Math.sin(t.a + i) * r]);
  }
  for (let a = 6; a >= 0; a--) {
    const r = e + ((o - e) * a) / 6,
      i = s(r) / r;
    n.push([Math.cos(t.a + i) * r, Math.sin(t.a + i) * r]);
  }
  return n;
}
function oi(t) {
  const e = tt(t.seed),
    o = [],
    n = t.big ? 3 + Math.floor(e() * 2) : 2;
  for (let s = 0; s < n; s++) {
    const a = (s - (n - 1) / 2) * (t.big ? 46 : 40);
    let r = P0 + 30 + e() * 20;
    for (; r < rn - 20;) {
      const i = 6 + ((r - P0) / (rn - P0)) * v(e, 10, 20);
      r += i;
      const c = t.a + (a + v(e, -6, 6)) / r;
      (o.push([Math.cos(c) * r, Math.sin(c) * r, i]), (r += i + v(e, 6, 22)));
    }
  }
  return o;
}
function Os(t, e, o, n, s, a, r) {
  Rt(t, 500, 0, 0, (i, c) => {
    const d = Math.hypot(
      Math.max(i, Math.min(0, i + 500)),
      Math.max(c, Math.min(0, c + 500)),
    );
    if (
      Math.hypot(
        Math.max(Math.abs(i), Math.abs(i + 500)),
        Math.max(Math.abs(c), Math.abs(c + 500)),
      ) < n ||
      d > s
    )
      return;
    const u = {
      x0: Math.max(i, t.x0 - 100),
      y0: Math.max(c, t.y0 - 100),
      x1: Math.min(i + 500, t.x1 + 100),
      y1: Math.min(c + 500, t.y1 + 100),
    };
    if (!(u.x1 <= u.x0 || u.y1 <= u.y0))
      for (const l of p0(u, e)) {
        const [f, y] = l.c;
        f < i || f >= i + 500 || y < c || y >= c + 500 || (o(f, y) && r(a, l));
      }
  });
}
const Kh = {
    id: "stem",
    name: translate("向日葵茎横切"),
    slideLabel: [translate("向日葵幼茎"), translate("横切 番红固绿")],
    latin: "Helianthus annuus",
    layers: [0, 10, 20],
    dynZ: 10,
    extent: r0,
    start: [Math.cos(ge[2].a) * 1720, Math.sin(ge[2].a) * 1720],
    thumbView: [Math.cos(ge[2].a) * 1800, Math.sin(ge[2].a) * 1800, 900],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(150,200,150,.7)"),
        t.beginPath(),
        t.arc(0, 0, r0, 0, 7),
        t.fill(),
        (t.fillStyle = "rgba(200,60,80,.85)"));
      for (const n of ge)
        (t.beginPath(),
          t.arc(Math.cos(n.a) * 1650, Math.sin(n.a) * 1650, 160, 0, 7),
          t.fill());
      t.restore();
    },
    render(t, e) {
      const o = t.upp > 10 ? 0 : t.upp > 1.6 ? 1 : 2,
        n = At(),
        s = wt(71, {
          n: 400,
          dark: 0.25,
          r1: 1.6,
        }),
        a = new Path2D();
      (a.arc(0, 0, r0, 0, Math.PI * 2),
        t.layer(1),
        t.both(a, [0.95, 0.98, 0.94], 0.3));
      const r = new Path2D();
      (r.arc(0, 0, Jn, 0, Math.PI * 2),
        r.arc(0, 0, _e, 0, Math.PI * 2, !0),
        t.abs(r, [0.9, 0.96, 0.88]));
      for (const c of ge)
        et(e, Math.cos(c.a) * 1660, Math.sin(c.a) * 1660, 320) &&
          (t.abs(
            it(Bs(c, P0 - 30, rn)),
            o === 0 ? [0.9, 0.6, 0.64] : [0.97, 0.88, 0.88],
          ),
          t.abs(it(Bs(c, rn, pa)), [0.8, 0.92, 0.78]),
          t.both(
            it(Bs(c, pa, _e)),
            o === 0 ? [0.86, 0.45, 0.52] : [0.96, 0.84, 0.86],
            0.5,
          ));
      const i = new Path2D();
      if (
        (i.arc(0, 0, r0 - 4, 0, Math.PI * 2),
        t.strokeBoth(i, 8, [0.86, 0.9, 0.7], 0.8),
        o === 0)
      )
        t.strokeBoth(a, 3, [0.7, 0.8, 0.6], 0.6);
      else {
        const c = Math.floor((Math.PI * 2 * r0) / 22),
          d = new Path2D();
        for (let u = 0; u < c; u++) {
          const l = (u / c) * Math.PI * 2,
            f = Math.cos(l),
            y = Math.sin(l);
          et(e, f * r0, y * r0, 30) &&
            (d.moveTo(f * (r0 - 32), y * (r0 - 32)),
            d.lineTo(f * (r0 - 4), y * (r0 - 4)));
        }
        (d.moveTo(r0 - 32, 0),
          d.arc(0, 0, r0 - 32, 0, Math.PI * 2),
          n.add(
            "epi",
            (u) => {
              (t.layer(1), t.strokeBoth(u, 2, no, 0.6));
            },
            d,
          ));
        const h =
          (u, l, f, y = 0.6) =>
          (b, m) =>
            b.add(
              u,
              (x) => {
                for (let k = 0; k < 3; k++)
                  (t.layer(k), t.strokeBoth(x, l, f, y));
              },
              it(m.poly),
            );
        (Os(
          e,
          {
            sx: 78,
            sy: 78,
            jitter: 0.8,
            seed: 31,
          },
          (u, l) => so(u, l) === "pith",
          0,
          P0,
          n,
          h("pith", 2.2, no),
        ),
          Os(
            e,
            {
              sx: 36,
              sy: 36,
              jitter: 0.75,
              seed: 32,
            },
            (u, l) => {
              const f = so(u, l);
              return f === "cortex" || f === "ray" || f === "collenchyma";
            },
            P0,
            Jn,
            n,
            (u, l) => {
              const f = so(l.c[0], l.c[1]);
              (h(
                f === "collenchyma" ? "col" : "cor",
                f === "collenchyma" ? 4.2 : 1.8,
                f === "collenchyma" ? G(no, [0.9, 0.95, 0.88], 0.1) : no,
              )(u, l),
                o === 2 &&
                  f !== "ray" &&
                  u.add(
                    "chl",
                    (y) => {
                      (t.layer(1),
                        t.abs(y, [0.86, 0.94, 0.84]),
                        t.pattern(y, s, 0.2, 0.4));
                    },
                    it(_t(l.poly, 4)),
                  ));
            },
          ),
          o === 2 &&
            Os(
              e,
              {
                sx: 13,
                sy: 13,
                jitter: 0.6,
                seed: 33,
              },
              (u, l) => {
                const f = so(u, l);
                return (
                  f === "phloem" ||
                  f === "cambium" ||
                  f === "cap" ||
                  f === "xylem"
                );
              },
              P0 - 40,
              _e,
              n,
              (u, l) => {
                const f = so(l.c[0], l.c[1]);
                f === "cap"
                  ? h("cap", 3.4, Ds, 0.9)(u, l)
                  : f === "xylem"
                    ? h("xp", 1.6, G(Ds, [1, 1, 1], 0.35), 0.6)(u, l)
                    : h(
                        f,
                        1.1,
                        f === "cambium" ? G(no, [0.5, 0.65, 0.5], 0.4) : no,
                        0.5,
                      )(u, l);
              },
            ));
        for (const u of ge)
          if (et(e, Math.cos(u.a) * 1560, Math.sin(u.a) * 1560, 260))
            for (const [l, f, y] of oi(u)) {
              const b = U(l, f, y, y * 0.92, Math.atan2(f, l));
              (n.add(
                "vesF",
                (m) => {
                  (t.layer(1), t.abs(m, [1, 1, 1]));
                },
                b,
              ),
                n.add(
                  "vesW",
                  (m) => {
                    for (let x = 0; x < 3; x++)
                      (t.layer(x),
                        t.strokeBoth(m, Math.max(2.2, y * 0.18), Ds, 0.9));
                  },
                  b,
                ));
            }
      }
      n.flush();
      for (const [c, d, h] of ei) et(e, c, d, h) && Ht(t, c, d, h);
    },
    pick(t, e) {
      for (const [n, s, a] of ei)
        if (Math.hypot(t - n, e - s) < a) return translate("气泡");
      const o = so(t, e);
      if (o === "xylem") {
        const n = fc(t, e);
        for (const [s, a, r] of oi(n.b))
          if (Math.hypot(t - s, e - a) < r + 2)
            return translate("导管（木质部）");
      }
      return (
        {
          epi: translate("表皮"),
          collenchyma: translate("厚角组织（皮层）"),
          cortex: translate("皮层薄壁细胞"),
          ray: translate("髓射线"),
          pith: translate("髓"),
          xylem: translate("木质部"),
          cambium: translate("形成层"),
          phloem: translate("韧皮部"),
          cap: translate("韧皮纤维（纤维帽）"),
        }[o] || null
      );
    },
    info: () =>
      translate(
        "<b>双子叶植物茎</b>的维管束排成一圈，束中有<b>形成层</b>，能使茎逐年加粗。番红把木质化的细胞壁（导管、纤维）染成红色，固绿把纤维素细胞壁染成绿色。先用 4× 物镜看清整体结构，再换高倍镜观察一个维管束。",
      ),
  },
  hn = 6e3,
  Sa = Mt(0, 0, hn, {
    n: 48,
    amp: 0.06,
    seed: 71,
    freq: 2.2,
  }),
  Le = (t, e, o = 0) => Math.hypot(t, e) < hn * 0.94 - o,
  Et = Math.PI * 2,
  ja = [0.48, 0.74, 0.36];
function Zh(t, e, o) {
  const n = jt(t, e, o);
  if (n() > 0.35) return [];
  const s = t * 600 + n() * 600,
    a = e * 600 + n() * 600;
  return Le(s, a, 100)
    ? [
        {
          x: s,
          y: a,
          rad: v(n, 25, 90),
          poly: Mt(s, a, v(n, 25, 90), {
            n: 14,
            amp: 0.45,
            seed: Math.floor(n() * 1e6),
          }),
          L: n() < 0.6 ? 0 : 1,
        },
      ]
    : [];
}
function Qh(t, e, o) {
  const n = jt(t, e, o),
    s = [],
    a = Math.floor((0.6 + 0.8 * ue(t / 4, e / 4, 3)) * 3 * n());
  for (let r = 0; r < a; r++) {
    const i = t * 250 + n() * 250,
      c = e * 250 + n() * 250;
    Le(i, c) &&
      s.push({
        x: i,
        y: c,
        rad: v(n, 2, 4),
        L: Math.floor(n() * 3),
      });
  }
  return s;
}
function Jh(t, e, o) {
  const n = jt(t, e, o);
  if (n() > 0.25) return [];
  let s = t * 900 + n() * 900,
    a = e * 900 + n() * 900,
    r = n() * Et;
  if (!Le(s, a, 300)) return [];
  const i = [[s, a]];
  for (let c = 0; c < 10; c++)
    ((r += v(n, -0.2, 0.2)),
      (s += Math.cos(r) * 30),
      (a += Math.sin(r) * 30),
      i.push([s, a]));
  return [
    {
      pts: i,
      w: v(n, 5, 7),
      L: Math.floor(n() * 3),
    },
  ];
}
function dc(t, e, o) {
  const n = t.upp,
    s = At(),
    a = wt(63, {
      n: 1500,
      dark: 0.6,
      r0: 0.6,
      r1: 2.6,
    });
  (Rt(e, 600, 120, o, (r, i, c, d, h) => {
    for (const u of Zh(d, h, o))
      et(e, u.x, u.y, u.rad * 1.5) &&
        s.add(
          `f${u.L}`,
          (l) => {
            (t.layer(u.L),
              t.both(l, [0.86, 0.8, 0.68], 0.45),
              n < 4 && t.pattern(l, a, 0.45, 0.85));
          },
          yt(u.poly),
        );
  }),
    n < 8 &&
      Rt(e, 250, 6, o + 1, (r, i, c, d, h) => {
        for (const u of Qh(d, h, o))
          et(e, u.x, u.y, u.rad + 1) &&
            s.add(
              `a${u.L}`,
              (l) => {
                (t.layer(u.L), t.both(l, ja, 0.45));
              },
              U(u.x, u.y, u.rad, u.rad * 0.95),
            );
      }),
    Rt(e, 900, 320, o + 2, (r, i, c, d, h) => {
      for (const u of Jh(d, h, o)) {
        const l = F0(u.pts);
        if (
          (s.add(
            `fl${u.L}`,
            (f) => {
              (t.layer(u.L), t.strokeBoth(f, u.w, [0.55, 0.72, 0.6], 0.6));
            },
            l,
          ),
          n < 1.5)
        ) {
          const f = new Path2D();
          for (let y = 0; y < u.pts.length - 1; y++) {
            const [b, m] = u.pts[y],
              [x, k] = u.pts[y + 1],
              M = Math.atan2(k - m, x - b) + Math.PI / 2;
            for (let g = 0; g < 1; g += 0.125) {
              const w = b + (x - b) * g,
                $ = m + (k - m) * g;
              (f.moveTo(
                w - (Math.cos(M) * u.w) / 2,
                $ - (Math.sin(M) * u.w) / 2,
              ),
                f.lineTo(
                  w + (Math.cos(M) * u.w) / 2,
                  $ + (Math.sin(M) * u.w) / 2,
                ));
            }
          }
          s.add(
            `fs${u.L}`,
            (y) => {
              (t.layer(u.L), t.strokeAbs(y, 0.5, [0.45, 0.6, 0.5], 0.7));
            },
            f,
          );
        }
      }
    }),
    s.flush(),
    Wt(t, e, {
      seed: o + 9,
      density: 0.6,
      size: 3.5,
      color: [0.6, 0.52, 0.4],
    }));
}
function uc(t, e, o) {
  t.layer(1);
  for (const [n, s, a] of o) et(e, n, s, a) && Ht(t, n, s, a);
  if (typeof Path2D < "u") {
    const n = yt(Sa);
    (t.strokeBoth(n, 80, [0.62, 0.63, 0.64], 2, 0.9),
      t.strokeAbs(n, 18, [0.22, 0.22, 0.24], 0.95));
  }
}
function Ra(t, e, o, n, s = 1.2) {
  t.dir += (o() - 0.5) * s * Math.sqrt(e) * 2;
  let a = t.x + Math.cos(t.dir) * t.v * e,
    r = t.y + Math.sin(t.dir) * t.v * e,
    i = !Le(a, r, 30);
  for (const [c, d, h] of n) Math.hypot(a - c, r - d) < h + 15 && (i = !0);
  if (i) {
    t.dir += Math.PI * v(o, 0.6, 1.4);
    return;
  }
  ((t.x = a), (t.y = r));
}
function tf(t, e, o) {
  return {
    kind: "euglena",
    x: e,
    y: o,
    dir: t() * Et,
    v: 0,
    v0: v(t, 60, 110),
    L: v(t, 50, 64),
    W: v(t, 9, 12),
    spin: t() * Et,
    mode: "swim",
    tm: v(t, 4, 14),
    m: 0,
    mph: 0,
    seed: Math.floor(t() * 1e9),
  };
}
function ef(t, e, o, n) {
  ((t.tm -= e),
    t.tm < 0 &&
      ((t.mode = t.mode === "swim" && o() < 0.45 ? "meta" : "swim"),
      (t.tm = t.mode === "meta" ? v(o, 4, 9) : v(o, 5, 15))));
  const s = t.mode === "swim" ? t.v0 : 0;
  ((t.v += (s - t.v) * Math.min(1, e * 2)),
    (t.spin += e * Et * 1.2),
    (t.m += ((t.mode === "meta" ? 1 : 0) - t.m) * Math.min(1, e * 1.5)),
    (t.mph += e * 1.6),
    Ra(t, e, o, n, 0.6));
}
function pc(t) {
  const e = t.m,
    o = t.L * (1 - 0.32 * e),
    n = t.W * (1 + 0.7 * e) * (0.82 + 0.18 * Math.abs(Math.cos(t.spin))),
    s = 1 - ((t.mph * 0.5) % 1) * 2,
    a = (l) =>
      (n / 2) *
      Math.pow(Math.max(0, 1 - l * l), l < 0 ? 0.85 : 0.42) *
      (1 + 0.9 * e * Math.exp(-((l - s) ** 2) / 0.08)),
    r = Math.cos(t.dir),
    i = Math.sin(t.dir),
    c = o / 2,
    d = (l, f) => [t.x + l * c * r - f * i, t.y + l * c * i + f * r],
    h = [],
    u = [];
  for (let l = 0; l <= 24; l++) {
    const f = 1 - (2 * l) / 24;
    (h.push(d(f, a(f))), u.push(d(f, -a(f))));
  }
  return {
    poly: [...h, ...u.reverse()],
    P: d,
    hw: a,
    hl: c,
  };
}
function of(t, e, o, n, s) {
  const a = pc(e),
    r = yt(a.poly);
  if (
    (s.add(
      "eu",
      (M) => {
        (t.both(M, [0.86, 0.94, 0.8], 0.75),
          t.strokeAbs(M, 0.6, [0.6, 0.72, 0.55], 0.7));
      },
      r,
    ),
    o === 0)
  )
    return;
  const i = tt(e.seed),
    c = new Path2D();
  for (let M = 0; M < 14; M++) {
    const g = v(i, -0.7, 0.75),
      w = v(i, -0.75, 0.75),
      [$, L] = a.P(g, w * a.hw(g));
    U($, L, 2.4, 1.6, e.dir + i(), c);
  }
  s.add("euc", (M) => t.both(M, [0.42, 0.68, 0.32], 0.4), c);
  const [d, h] = a.P(-0.08, 0);
  s.add(
    "eun",
    (M) => {
      (t.abs(M, [0.9, 0.93, 0.86]), t.phase(M, 0.5));
    },
    U(d, h, 5, 4, e.dir),
  );
  const [u, l] = a.P(0.72, a.hw(0.72) * 0.35);
  s.add(
    "eue",
    (M) => t.both(M, [0.92, 0.34, 0.22], 0.4),
    U(u, l, 1.8, 1.3, e.dir),
  );
  const [f, y] = a.P(1, 0),
    b = Math.cos(e.dir),
    m = Math.sin(e.dir),
    x = [],
    k = e.L * 1.05;
  for (let M = 0; M <= 18; M++) {
    const g = M / 18,
      w = g * k,
      $ = Math.sin(w / 9 - n * 22) * 4 * g;
    x.push([f + w * b - $ * m, y + w * m + $ * b]);
  }
  s.add("euf", (M) => t.strokeBoth(M, 0.55, [0.7, 0.76, 0.68], 0.7), F0(x));
}
function yc(t, e, o) {
  return {
    kind: "chlamy",
    x: e,
    y: o,
    dir: t() * Et,
    v: v(t, 80, 150),
    v0: v(t, 80, 150),
    rx: v(t, 5, 6.5),
    ry: v(t, 4, 5),
    ph: t() * Et,
    seed: Math.floor(t() * 1e9),
    pause: 0,
  };
}
function nf(t, e, o, n) {
  ((t.ph += e * Et * 3),
    (t.pause -= e),
    t.pause < 0 && o() < e * 0.3 && (t.pause = v(o, 0.5, 2)),
    (t.v += ((t.pause > 0 ? 0 : t.v0) - t.v) * Math.min(1, e * 4)),
    Ra(t, e, o, n, 3));
}
function sf(t, e, o, n) {
  const s = U(e.x, e.y, e.rx, e.ry, e.dir);
  n.add(
    "cb",
    (u) => {
      (t.both(u, [0.8, 0.9, 0.72], 0.6),
        t.strokeAbs(u, 0.4, [0.55, 0.7, 0.5], 0.7));
    },
    s,
  );
  const a = Math.cos(e.dir),
    r = Math.sin(e.dir);
  if (
    (n.add(
      "cc",
      (u) => t.both(u, ja, 0.3),
      U(
        e.x - a * e.rx * 0.18,
        e.y - r * e.rx * 0.18,
        e.rx * 0.78,
        e.ry * 0.85,
        e.dir,
      ),
    ),
    o === 0)
  )
    return;
  n.add(
    "ce",
    (u) => t.abs(u, [0.92, 0.36, 0.24]),
    U(
      e.x + a * e.rx * 0.35 - r * e.ry * 0.6,
      e.y + r * e.rx * 0.35 + a * e.ry * 0.6,
      0.9,
      0.6,
      e.dir,
    ),
  );
  const i = e.x + a * e.rx,
    c = e.y + r * e.rx,
    d = Math.sin(e.ph) * 0.9,
    h = new Path2D();
  for (const u of [-1, 1]) {
    const l = e.dir + u * (0.5 + d),
      f = [[i, c]];
    for (let y = 1; y <= 6; y++) {
      const b = y / 6,
        m = l + u * b * 0.9 * Math.cos(e.ph);
      f.push([i + Math.cos(m) * 12 * b, c + Math.sin(m) * 12 * b]);
    }
    F0(f, h);
  }
  n.add("cf", (u) => t.strokeBoth(u, 0.4, [0.72, 0.78, 0.7], 0.6), h);
}
const ni = (() => {
  const e = [];
  for (let o = 0; o < 420; o++) {
    const n = 1 - (2 * (o + 0.5)) / 420,
      s = Math.sqrt(1 - n * n),
      a = o * 2.39996;
    e.push([Math.cos(a) * s, Math.sin(a) * s, n]);
  }
  return e;
})();
function af(t, e, o) {
  const n = v(t, 140, 230);
  return {
    kind: "volvox",
    x: e,
    y: o,
    dir: t() * Et,
    v: v(t, 25, 45),
    v0: 0,
    R: n,
    rot: t() * Et,
    rotRate: v(t, 0.25, 0.5),
    tilt: v(t, 0.3, 1.1),
    seed: Math.floor(t() * 1e9),
    kids: Array.from(
      {
        length: 3 + Math.floor(t() * 5),
      },
      () => {
        const s = v(t, -0.6, 0.6),
          a = t() * Et,
          r = v(t, 0.25, 0.55);
        return [Math.cos(a) * r, Math.sin(a) * r, s * r, n * v(t, 0.13, 0.22)];
      },
    ),
  };
}
function rf(t, e, o, n) {
  ((t.rot += e * t.rotRate), Ra(t, e, o, n, 0.25));
}
function cf(t, e, o, n) {
  const s = U(e.x, e.y, e.R, e.R);
  n.add(
    "ve",
    (y) => {
      (t.both(y, [0.95, 0.98, 0.93], 0.35),
        t.strokeBoth(y, 1.6, [0.78, 0.86, 0.74], 0.9));
    },
    s,
  );
  const a = Math.cos(e.rot),
    r = Math.sin(e.rot),
    i = Math.cos(e.tilt),
    c = Math.sin(e.tilt),
    d = ([y, b, m]) => {
      const x = y * a - b * r,
        k = y * r + b * a;
      return [x, k * i - m * c, k * c + m * i];
    };
  for (const y of e.kids) {
    const [b, m, x] = d(y),
      k = U(e.x + b * e.R, e.y + m * e.R, y[3], y[3]);
    n.add(
      `vk${x > 0 ? 1 : 0}`,
      (M) => t.both(M, x > 0 ? [0.42, 0.66, 0.32] : [0.56, 0.75, 0.46], 0.6),
      k,
    );
  }
  if (o === 0) return;
  const h = o === 1 ? 3 : 1,
    u = new Path2D(),
    l = new Path2D(),
    f = Math.max(1.6, e.R * 0.016);
  for (let y = 0; y < ni.length; y += h) {
    const [b, m, x] = d(ni[y]);
    U(e.x + b * e.R * 0.97, e.y + m * e.R * 0.97, f, f, 0, x > 0 ? u : l);
  }
  (n.add("vb", (y) => t.abs(y, [0.76, 0.86, 0.7]), l),
    n.add("vf", (y) => t.both(y, [0.4, 0.66, 0.3], 0.4), u));
}
function lf(t, e, o) {
  return {
    kind: "rotifer",
    x: e,
    y: o,
    base: t() * Et,
    sway: 0,
    swayPh: t() * Et,
    L: v(t, 260, 330),
    W: v(t, 70, 90),
    wheel: 0,
    open: 1,
    tm: v(t, 6, 14),
    seed: Math.floor(t() * 1e9),
  };
}
function hf(t, e, o) {
  ((t.swayPh += e * 0.5),
    (t.sway = Math.sin(t.swayPh) * 0.35),
    (t.tm -= e),
    t.tm < 0 &&
      ((t.closing = !t.closing),
      (t.tm = t.closing ? v(o, 1.5, 3) : v(o, 6, 14))),
    (t.open += ((t.closing ? 0 : 1) - t.open) * Math.min(1, e * 3)),
    (t.wheel += e * Et * 1.5 * t.open));
}
function bc(t) {
  const e = t.base + t.sway,
    o = Math.cos(e),
    n = Math.sin(e),
    s = t.L * (0.82 + 0.18 * t.open),
    a = s / 2;
  return {
    P: (c, d) => [t.x + (c + 1) * a * o - d * n, t.y + (c + 1) * a * n + d * o],
    hw: (c) =>
      (t.W / 2) *
      (0.18 + 0.82 * Math.pow(Math.sin((Math.PI * (c + 1)) / 2.25), 1.2)) *
      (c > 0.75 ? 0.85 : 1),
    c: o,
    s: n,
    dir: e,
    hl: a,
  };
}
function ff(t, e, o, n, s) {
  const a = bc(e),
    r = [],
    i = [];
  for (let x = 0; x <= 30; x++) {
    const k = -1 + (2 * x) / 30;
    (r.push(a.P(k, a.hw(k))), i.push(a.P(k, -a.hw(k))));
  }
  const c = yt([...r, ...i.reverse()]);
  if (
    (s.add(
      "rb",
      (x) => {
        (t.both(x, [0.93, 0.92, 0.86], 0.9),
          t.strokeAbs(x, 1, [0.66, 0.64, 0.56], 0.8));
      },
      c,
    ),
    o === 0)
  )
    return;
  const d = new Path2D();
  for (let x = 1; x < 6; x++) {
    const k = -1 + x * 0.12,
      M = a.hw(k),
      [g, w] = a.P(k, -M),
      [$, L] = a.P(k, M);
    (d.moveTo(g, w), d.lineTo($, L));
  }
  const [h, u] = a.P(-1.04, 0);
  (U(h, u, 6, 3, a.dir + Math.PI / 2, d),
    s.add("rr", (x) => t.strokeAbs(x, 0.8, [0.68, 0.66, 0.6], 0.7), d));
  const [l, f] = a.P(0.15, 0);
  s.add(
    "rg",
    (x) => {
      (t.abs(x, [0.8, 0.84, 0.66]), t.phase(x, 0.4));
    },
    U(l, f, e.L * 0.17, e.W * 0.22, a.dir),
  );
  const [y, b] = a.P(0.62, 0),
    m = 1 + 0.18 * Math.sin(n * 9);
  if (
    (s.add(
      "rm",
      (x) => t.both(x, [0.74, 0.72, 0.62], 0.8),
      U(y, b, 11 * m, 8, a.dir),
    ),
    e.open > 0.3)
  ) {
    const x = e.open,
      k = new Path2D();
    for (const M of [-1, 1]) {
      const [g, w] = a.P(1, M * e.W * 0.24 * x),
        $ = e.W * 0.26 * x;
      (k.moveTo(g + $, w), k.arc(g, w, $, 0, Et));
      for (let L = 0; L < 26; L++) {
        const j = (L / 26) * Et + M * e.wheel,
          T = 0.5 * Math.sin(L * 1.7 + e.wheel * 3),
          S = g + Math.cos(j) * $,
          R = w + Math.sin(j) * $;
        (k.moveTo(S, R),
          k.lineTo(
            g + Math.cos(j + T) * ($ + 9),
            w + Math.sin(j + T) * ($ + 9),
          ));
      }
    }
    s.add("rc", (M) => t.strokeBoth(M, 0.8, [0.7, 0.7, 0.66], 0.7), k);
  }
}
function si(t, e, o) {
  return {
    kind: "amoeba",
    x: e,
    y: o,
    R: v(t, 110, 150),
    seed: Math.floor(t() * 1e9),
    t: 0,
    cvT: t() * 20,
    cvP: v(t, 18, 26),
    heading: t() * Et,
    pods: Array.from(
      {
        length: 4,
      },
      () => ({
        a: t() * Et,
        len: v(t, 0.1, 0.8),
        target: v(t, 0.4, 1.3),
        w: v(t, 0.3, 0.55),
        rate: v(t, 0.03, 0.07),
      }),
    ),
    food: Array.from(
      {
        length: 3 + Math.floor(t() * 3),
      },
      () => [t() * Et, v(t, 0.2, 0.6), v(t, 7, 13)],
    ),
  };
}
function ro(t, e) {
  let o = 0.72;
  for (const n of t.pods) {
    let s = Math.abs(e - n.a) % Et;
    (s > Math.PI && (s = Et - s), (o += n.len * Math.exp(-((s / n.w) ** 2))));
  }
  return (
    t.R *
    (o + 0.05 * Math.sin(e * 5 + t.seed) + 0.03 * Math.sin(e * 9 + t.t * 0.3))
  );
}
function df(t, e, o, n) {
  ((t.t += e), (t.cvT += e), t.cvT > t.cvP && (t.cvT = 0));
  let s = 0,
    a = 0;
  for (const i of t.pods) {
    const c = i.target - i.len;
    ((i.len += Math.sign(c) * Math.min(Math.abs(c), e * i.rate * 1.6)),
      Math.abs(c) < 0.02 &&
        (i.target > 0.2
          ? (i.target = 0)
          : ((i.a = t.heading + v(o, -1.4, 1.4)),
            (i.target = v(o, 0.5, 1.4)),
            (i.w = v(o, 0.28, 0.55)),
            (i.rate = v(o, 0.03, 0.07)))),
      c > 0 && ((s += Math.cos(i.a) * i.len), (a += Math.sin(i.a) * i.len)));
  }
  t.heading += (o() - 0.5) * e * 0.2;
  const r = Math.hypot(s, a);
  if (r > 0.01) {
    const i = t.x + (s / r) * 8 * e * Math.min(1, r),
      c = t.y + (a / r) * 8 * e * Math.min(1, r);
    let d = !Le(i, c, t.R * 2);
    for (const [h, u, l] of n)
      Math.hypot(i - h, c - u) < l + t.R * 1.5 && (d = !0);
    d ? (t.heading += Math.PI * 0.7) : ((t.x = i), (t.y = c));
  }
}
function uf(t, e, o, n) {
  const s = [];
  for (let f = 0; f < 90; f++) {
    const y = (f / 90) * Et,
      b = ro(e, y);
    s.push([e.x + Math.cos(y) * b, e.y + Math.sin(y) * b]);
  }
  const a = yt(s);
  n.add(
    "ab",
    (f) => {
      (t.both(f, [0.95, 0.95, 0.92], 0.55),
        t.strokeBoth(f, 1.2, [0.74, 0.74, 0.7], 0.8));
    },
    a,
  );
  const r = [];
  for (let f = 0; f < 90; f++) {
    const y = (f / 90) * Et,
      b = Math.max(e.R * 0.3, ro(e, y) - 9);
    r.push([e.x + Math.cos(y) * b, e.y + Math.sin(y) * b]);
  }
  const i = yt(r);
  if (
    (n.add(
      "ae",
      (f) => {
        (t.both(f, [0.9, 0.9, 0.85], 0.35),
          o > 0 &&
            t.pattern(
              f,
              wt(77, {
                n: 1600,
                dark: 0.55,
                r0: 0.6,
                r1: 2,
              }),
              0.3,
              0.7,
              e.t * 3,
              e.t * 2,
            ));
      },
      i,
    ),
    o === 0)
  )
    return;
  const c = tt(e.seed),
    d = new Path2D();
  for (let f = 0; f < 120; f++) {
    const y = c() * Et,
      m = (c() + e.t * 0.04) % 1,
      x = (ro(e, y) - 10) * Math.sqrt(m);
    U(
      e.x + Math.cos(y) * x,
      e.y + Math.sin(y) * x,
      v(c, 0.7, 1.6),
      v(c, 0.6, 1.2),
      y,
      d,
    );
  }
  n.add("ag", (f) => t.both(f, [0.72, 0.72, 0.66], 0.5), d);
  const [h, u] = [
    e.x + Math.cos(e.seed) * e.R * 0.2,
    e.y + Math.sin(e.seed) * e.R * 0.2,
  ];
  n.add(
    "an",
    (f) => {
      (t.abs(f, [0.86, 0.86, 0.8]),
        t.phase(f, 0.8),
        t.pattern(
          f,
          wt(78, {
            n: 900,
            dark: 0.4,
            r0: 0.5,
            r1: 1.2,
          }),
          0.2,
          0.6,
        ));
    },
    U(h, u, 22, 16, e.seed),
  );
  for (const [f, y, b] of e.food) {
    const m = ro(e, f) * y,
      x = e.x + Math.cos(f + e.t * 0.01) * m,
      k = e.y + Math.sin(f + e.t * 0.01) * m;
    (n.add(
      "af",
      (M) => {
        (t.abs(M, [0.97, 0.97, 0.95]),
          t.strokeBoth(M, 0.8, [0.7, 0.7, 0.66], 0.6));
      },
      U(x, k, b, b * 0.9),
    ),
      n.add("afc", (M) => t.both(M, ja, 0.4), U(x, k, b * 0.45, b * 0.4)));
  }
  const l = 22 * Math.pow(e.cvT / e.cvP, 0.6);
  if (l > 2) {
    const f = e.heading + Math.PI,
      y = ro(e, f) * 0.6;
    n.add(
      "acv",
      (b) => {
        (t.abs(b, [1, 1, 1]), t.strokeBoth(b, 0.9, [0.78, 0.78, 0.74], 0.9));
      },
      U(e.x + Math.cos(f) * y, e.y + Math.sin(f) * y, l, l),
    );
  }
}
const pf = {
  euglena: ef,
  chlamy: nf,
  volvox: rf,
  rotifer: hf,
  amoeba: df,
};
function yo(t, e, o, n, s, a) {
  for (let r = 0; r < e; r++) {
    let i, c;
    do {
      const d = t() * Et,
        h = Math.sqrt(t()) * (r < e * 0.5 ? n : hn * 0.85);
      ((i = o[0] + Math.cos(d) * h), (c = o[1] + Math.sin(d) * h));
    } while (!Le(i, c, 300));
    a.push(s(t, i, c));
  }
}
function mc(t, e, o) {
  let n = null;
  return {
    init(a) {
      const r = tt(a * 104729 + 7),
        i = [];
      return (
        t(r, i),
        (n = {
          orgs: i,
          t: 0,
          r,
          view: null,
        }),
        n
      );
    },
    step(a, r) {
      const i = Math.max(0, Math.min(r || 0, 0.25)),
        c = Math.max(1, Math.ceil(i / 0.05));
      for (let d = 0; d < c; d++)
        for (const h of a.orgs) pf[h.kind](h, i / c, a.r, e);
      ((a.t += i), (n = a));
    },
    render(a, r, i) {
      ((n = i),
        (i.view = {
          cx: (r.x0 + r.x1) / 2,
          cy: (r.y0 + r.y1) / 2,
          r: (r.x1 - r.x0) / 2.1,
        }));
      const c = a.upp > 3 ? 0 : a.upp > 0.9 ? 1 : 2,
        d = At();
      for (const h of i.orgs) {
        const u =
          h.kind === "volvox"
            ? h.R
            : h.kind === "rotifer"
              ? h.L * 1.1
              : h.kind === "amoeba"
                ? h.R * 2.6
                : 60;
        et(r, h.x, h.y, u) &&
          (h.kind === "volvox"
            ? cf(a, h, c, d)
            : h.kind === "rotifer"
              ? ff(a, h, c, i.t, d)
              : h.kind === "amoeba" && uf(a, h, c, d));
      }
      d.flush();
      for (const h of i.orgs)
        et(r, h.x, h.y, 80) &&
          (h.kind === "euglena"
            ? of(a, h, c, i.t, d)
            : h.kind === "chlamy" && sf(a, h, c, d));
      d.flush();
    },
    info(a) {
      const r = a.view;
      if (!r) return [];
      const i = {};
      for (const c of a.orgs)
        Math.hypot(c.x - r.cx, c.y - r.cy) < r.r &&
          (i[c.kind] = (i[c.kind] || 0) + 1);
      return Object.entries(o())
        .filter(([c]) => i[c])
        .map(([c, d]) => [d, `${i[c]}`]);
    },
    get last() {
      return n;
    },
  };
}
const Mc = () => ({
  euglena: translate("眼虫"),
  chlamy: translate("衣藻"),
  volvox: translate("团藻"),
  rotifer: translate("轮虫"),
  amoeba: translate("变形虫"),
});
function xc(t, e, o) {
  const n = t.last;
  if (!n) return null;
  for (const s of n.orgs) {
    const a = Math.hypot(e - s.x, o - s.y);
    if (s.kind === "euglena" && a < s.L * 0.75) {
      const r = pc(s),
        i = Math.cos(s.dir),
        c = Math.sin(s.dir),
        d = ((e - s.x) * i + (o - s.y) * c) / r.hl,
        h = -(e - s.x) * c + (o - s.y) * i;
      if (d > 1 && Math.abs(h) < 6) return translate("鞭毛");
      if (Math.abs(d) > 1 || Math.abs(h) > r.hw(d) + 0.5) continue;
      return d > 0.6 && h > 0
        ? translate("眼点")
        : Math.abs(d + 0.08) < 0.18 && Math.abs(h) < 4
          ? translate("细胞核")
          : translate("眼虫（含叶绿体）");
    }
    if (s.kind === "chlamy" && a < s.rx + 10)
      return a < s.rx ? translate("衣藻（杯状叶绿体）") : translate("鞭毛");
    if (s.kind === "volvox" && a < s.R) {
      for (const r of s.kids)
        if (Math.hypot(e - s.x - r[0] * s.R, o - s.y - r[1] * s.R) < r[3])
          return translate("团藻的子群体");
      return translate("团藻（群体）");
    }
    if (s.kind === "rotifer" && a < s.L * 1.2) {
      const r = bc(s),
        i = ((e - s.x) * r.c + (o - s.y) * r.s) / r.hl - 1,
        c = -(e - s.x) * r.s + (o - s.y) * r.c;
      if (i > 0.85 && i < 1.25 && Math.abs(c) < s.W * 0.6)
        return translate("轮虫的纤毛冠");
      if (i >= -1 && i <= 1 && Math.abs(c) < r.hw(i))
        return i < -0.4 ? translate("轮虫的足") : translate("轮虫");
    }
    if (s.kind === "amoeba" && a < s.R * 2.6) {
      const r = ro(s, Math.atan2(o - s.y, e - s.x));
      if (a < r) return a > r - 9 ? translate("外质") : translate("内质");
      if (a < r + 20) return translate("伪足");
    }
  }
  return null;
}
const he = [380, -260],
  ya = [
    [he[0] - 900, he[1] + 650, 120],
    [2400, 2100, 260],
    [-3200, -2200, 180],
    [1600, -3600, 90],
  ],
  ai = mc(
    (t, e) => {
      (yo(t, 40, he, 700, tf, e),
        yo(t, 140, he, 900, yc, e),
        yo(t, 9, he, 1200, af, e),
        yo(t, 6, he, 600, lf, e));
    },
    ya,
    Mc,
  ),
  yf = {
    id: "pond",
    name: translate("池塘水滴（活体）"),
    slideLabel: [translate("池塘水滴"), translate("活体观察")],
    latin: "Euglena · Volvox · Rotifera",
    layers: [5, 25, 45],
    dynZ: 25,
    extent: hn,
    start: he,
    thumbView: [he[0], he[1], 700],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(190,215,180,.5)"),
        t.beginPath(),
        Sa.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      (dc(t, e, 301), uc(t, e, ya));
    },
    pick(t, e) {
      const o = xc(ai, t, e);
      if (o) return o;
      for (const [n, s, a] of ya)
        if (Math.hypot(t - n, e - s) < a) return translate("气泡");
      return Le(t, e, -40) ? translate("池塘水") : null;
    },
    info: () =>
      translate(
        "<p>池塘水里有许多单细胞和多细胞的小生物：<b>眼虫</b>有叶绿体能进行光合作用，又能靠鞭毛运动，前端红色的<b>眼点</b>能感光；<b>衣藻</b>用两根鞭毛游动；<b>团藻</b>是成百上千个细胞组成的球形群体，里面的绿球是子群体；<b>轮虫</b>是多细胞动物，头部纤毛摆动像车轮在转，把食物扫进口中。</p><p>它们游得快，低倍镜下更容易跟上；想看清结构时，可以缩小光圈，或切换到相差照明。</p>",
      ),
    dynamic: ai,
  },
  fe = [-200, 150],
  ba = [
    [fe[0] + 1300, fe[1] - 700, 160],
    [-2600, 2300, 220],
    [3100, 1800, 110],
  ],
  ri = mc(
    (t, e) => {
      (e.push(si(t, fe[0], fe[1])),
        yo(t, 5, fe, 1500, si, e),
        yo(t, 50, fe, 900, yc, e));
    },
    ba,
    Mc,
  ),
  bf = {
    id: "amoeba",
    name: translate("大变形虫（活体）"),
    slideLabel: [translate("大变形虫"), translate("活体观察")],
    latin: "Amoeba proteus",
    layers: [5, 25, 45],
    dynZ: 25,
    extent: hn,
    start: fe,
    thumbView: [fe[0], fe[1], 520],
    thumb(t, e) {
      const o = e / 22e3;
      (t.save(),
        t.translate(e / 2, e / 2),
        t.scale(o, o),
        (t.fillStyle = "rgba(215,215,200,.45)"),
        t.beginPath(),
        Sa.forEach(([n, s], a) => (a ? t.lineTo(n, s) : t.moveTo(n, s))),
        t.fill(),
        t.restore());
    },
    render(t, e) {
      (dc(t, e, 517), uc(t, e, ba));
    },
    pick(t, e) {
      const o = xc(ri, t, e);
      if (o) return o;
      for (const [n, s, a] of ba)
        if (Math.hypot(t - n, e - s) < a) return translate("气泡");
      return Le(t, e, -40) ? translate("培养液") : null;
    },
    info: () =>
      translate(
        "<p><b>变形虫</b>没有固定的形状：细胞质向某个方向流动，那里的细胞膜就向外突出成<b>伪足</b>，整个身体随之缓慢移动。伪足也能包围食物，形成<b>食物泡</b>。</p><p>注意观察：外层透明的<b>外质</b>、内部流动的颗粒状<b>内质</b>、扁圆的细胞核，以及周期性胀大又突然消失的<b>伸缩泡</b>。变形虫爬得很慢，要耐心看一会儿。</p>",
      ),
    dynamic: ri,
  },
  io = [
    Al,
    El,
    Dl,
    Bl,
    Ol,
    Dh,
    Oh,
    Ql,
    yf,
    bf,
    d1,
    x1,
    j1,
    Kh,
    a1,
    H1,
    vh,
    kh,
    qh,
    Yh,
    Hh,
    Gh,
    rh,
    J1,
    Ph,
    Ah,
  ],
  xe = (t) => io.find((e) => e.id === t) || null,
  ma = 80;
function Ne(t) {
  return typeof OffscreenCanvas < "u"
    ? new OffscreenCanvas(t, t)
    : Object.assign(document.createElement("canvas"), {
        width: t,
        height: t,
      });
}
const Ns = (t) => Math.max(0, Math.min(255, Math.round(t * 255))),
  _o = (t) => `rgb(${Ns(t[0])},${Ns(t[1])},${Ns(t[2])})`,
  ii = new WeakMap();
function mf(t, e) {
  let o = ii.get(t);
  if ((o || ii.set(t, (o = [])), !o[e])) {
    const n = Ne(t.width);
    n.height = t.height;
    const s = n.getContext("2d");
    (s.drawImage(t, 0, 0),
      (s.globalCompositeOperation = "multiply"),
      (s.fillStyle = ["#ff0000", "#00ff00", "#0000ff"][e]),
      s.fillRect(0, 0, n.width, n.height),
      (o[e] = n));
  }
  return o[e];
}
function ci(t, e, o, n = !1) {
  let s = 0;
  const a = (h) => {
      const u = Math.max(0, Math.min(255, h * ma));
      return n
        ? `rgb(${u},0,0)`
        : s === 0
          ? `rgb(${u},0,0)`
          : s === 1
            ? `rgb(0,${u},0)`
            : `rgb(0,0,${u})`;
    },
    r = () => (n ? t[0] : t[s]);
  function i(h, u) {
    const l = r();
    ((l.globalAlpha = h), u(l), (l.globalAlpha = 1));
  }
  function c(h) {
    h(e);
  }
  const d = {
    upp: o.upp,
    rect: o.rect,
    time: o.time || 0,
    px: (h) => h / o.upp,
    layer(h) {
      return ((s = Math.max(0, Math.min(2, h))), d);
    },
    get layerIndex() {
      return s;
    },
    abs(h, u, l = 1) {
      i(l, (f) => {
        ((f.fillStyle = _o(u)), f.fill(h));
      });
    },
    phase(h, u) {
      u <= 0 ||
        c((l) => {
          ((l.fillStyle = a(u)), l.fill(h));
        });
    },
    both(h, u, l, f = 1) {
      (d.abs(h, u, f), d.phase(h, l * f));
    },
    strokeAbs(h, u, l, f = 1) {
      i(f, (y) => {
        ((y.lineWidth = u), (y.strokeStyle = _o(l)), y.stroke(h));
      });
    },
    strokePhase(h, u, l) {
      l <= 0 ||
        c((f) => {
          ((f.lineWidth = u), (f.strokeStyle = a(l)), f.stroke(h));
        });
    },
    strokeBoth(h, u, l, f, y = 1) {
      (d.strokeAbs(h, u, l, y), d.strokePhase(h, u, f * y));
    },
    radial(h, u, l, f, y = 1) {
      i(y, (b) => {
        const m = b.createRadialGradient(h, u, 0, h, u, l);
        for (const [x, k] of f) m.addColorStop(x, _o(k));
        ((b.fillStyle = m),
          b.beginPath(),
          b.arc(h, u, l, 0, Math.PI * 2),
          b.fill());
      });
    },
    phaseRadial(h, u, l, f) {
      c((y) => {
        const b = y.createRadialGradient(h, u, 0, h, u, l);
        for (const [m, x] of f) b.addColorStop(m, a(x));
        ((y.fillStyle = b),
          y.beginPath(),
          y.arc(h, u, l, 0, Math.PI * 2),
          y.fill());
      });
    },
    dome(h, u, l, f) {
      for (let y = 0; y < l; y++) {
        const b = f(h, y / l);
        b && d.phase(b, u / l);
      }
    },
    soft(h, u) {
      const l = h / o.upp;
      if (l < 0.6) return u();
      const f = n ? [t[0], e] : [...t, e];
      for (const y of f) y.filter = `blur(${l.toFixed(2)}px)`;
      u();
      for (const y of f) y.filter = "none";
    },
    text(
      h,
      u,
      l,
      f,
      y,
      {
        font: b = "700",
        family: m = "'Times New Roman', 'Songti SC', serif",
        align: x = "center",
        ph: k = 0.6,
        rot: M = 0,
      } = {},
    ) {
      const g = (w, $) => {
        (w.save(),
          w.translate(u, l),
          w.rotate(M),
          (w.font = `${b} ${f}px ${m}`),
          (w.textAlign = x),
          (w.textBaseline = "middle"),
          (w.fillStyle = $),
          w.fillText(h, 0, 0),
          w.restore());
      };
      (g(r(), _o(y)), k > 0 && g(e, a(k)));
    },
    pattern(h, u, l, f = 1, y = 0, b = 0) {
      i(f, (m) => {
        const x = m.createPattern(u, "repeat");
        (x.setTransform(new DOMMatrix([l, 0, 0, l, y, b])),
          (m.fillStyle = x),
          m.fill(h));
      });
    },
    phasePattern(h, u, l, f, y = 0, b = 0) {
      if (f <= 0) return;
      const x = mf(u, n ? 0 : s);
      c((k) => {
        const M = k.createPattern(x, "repeat");
        (M.setTransform(new DOMMatrix([l, 0, 0, l, y, b])),
          (k.globalAlpha = Math.min(1, (f * ma) / 255)),
          (k.fillStyle = M),
          k.fill(h),
          (k.globalAlpha = 1));
      });
    },
    get ctxAbs() {
      return r();
    },
    get ctxPh() {
      return e;
    },
    absStyle: _o,
    phStyle: (h) => a(h),
  };
  return d;
}
function Mf(t, e, o) {
  let n = o;
  const s = () => (n = (n * 1664525 + 1013904223) >>> 0) / 4294967296;
  t.layer(2);
  for (let r = 0; r < 9; r++) {
    let i = (r / 9) * Math.PI * 2 + s() * 0.5,
      c = e[0],
      d = e[1];
    const h = new Path2D();
    h.moveTo(c, d);
    const u = 600 + s() * 2600;
    for (let l = 0; l < u; l += 60)
      ((i += (s() - 0.5) * 0.35),
        (c += Math.cos(i) * 60),
        (d += Math.sin(i) * 60),
        h.lineTo(c, d));
    (t.strokeBoth(h, 2.4, [0.25, 0.26, 0.28], 2.5),
      t.strokeAbs(h, 7, [0.85, 0.86, 0.88], 0.8));
  }
  const a = new Path2D();
  (a.arc(e[0], e[1], 120, 0, Math.PI * 2),
    t.strokeBoth(a, 3, [0.3, 0.3, 0.32], 2));
}
function gc(t = 1280) {
  const e = t,
    o = [Ne(e), Ne(e), Ne(e)],
    n = Ne(e),
    s = o.map((m) =>
      m.getContext("2d", {
        willReadFrequently: !1,
      }),
    ),
    a = n.getContext("2d"),
    r = Math.min(1024, e),
    i = Ne(r),
    c = Ne(r),
    d = i.getContext("2d"),
    h = c.getContext("2d");
  let u = null,
    l = 0;
  function f(m, x, k) {
    for (const M of m)
      (M.setTransform(1, 0, 0, 1, 0, 0),
        (M.globalCompositeOperation = "source-over"),
        (M.fillStyle = "#fff"),
        M.fillRect(0, 0, k, k),
        (M.globalCompositeOperation = "multiply"));
    (x.setTransform(1, 0, 0, 1, 0, 0),
      (x.globalCompositeOperation = "source-over"),
      (x.fillStyle = "#000"),
      x.fillRect(0, 0, k, k),
      (x.globalCompositeOperation = "lighter"));
  }
  function y(m, x, k, M) {
    const g = Math.max(x.upp, (x.r * 2 * 1.25) / e),
      w = e * g,
      $ = w / 2 - x.r * 1.05;
    if (!(
      !u ||
      u.key !== M ||
      Math.abs(u.upp / g - 1) > 0.01 ||
      Math.abs(x.cx - u.cx) > $ ||
      Math.abs(x.cy - u.cy) > $
    ))
      return u;
    const j = x.cx,
      T = x.cy,
      S = j - w / 2,
      R = T - w / 2;
    f(s, a, e);
    const C = 1 / g;
    for (const D of [...s, a]) D.setTransform(C, 0, 0, C, -S * C, -R * C);
    const A = {
      x0: S,
      y0: R,
      x1: S + w,
      y1: R + w,
    };
    if (m) {
      const D = ci(s, a, {
        upp: g,
        rect: A,
        time: k.time,
      });
      (m.render(D, A, k), Rl(D, A), k.cracked && Mf(D, k.cracked, 7));
    }
    return (
      (u = {
        key: M,
        cx: j,
        cy: T,
        x0: S,
        y0: R,
        upp: g,
        span: w,
        version: ++l,
      }),
      u
    );
  }
  function b(m, x, k, M) {
    const g = x.r * 2.1,
      w = g / r,
      $ = x.cx - g / 2,
      L = x.cy - g / 2;
    f([d], h, r);
    const j = 1 / w;
    for (const R of [d, h]) R.setTransform(j, 0, 0, j, -$ * j, -L * j);
    const T = {
        x0: $,
        y0: L,
        x1: $ + g,
        y1: L + g,
      },
      S = ci(
        [d],
        h,
        {
          upp: w,
          rect: T,
          time: M.time,
        },
        !0,
      );
    return (
      m.dynamic.render(S, T, k, M),
      {
        x0: $,
        y0: L,
        upp: w,
        span: g,
      }
    );
  }
  return {
    abs: o,
    ph: n,
    dA: i,
    dP: c,
    size: e,
    dynSize: r,
    ensure: y,
    dynamic: b,
    invalidate: () => (u = null),
    get current() {
      return u;
    },
  };
}
const xf = `
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,
  gf = `
precision highp float;
uniform sampler2D tA0, tA1, tA2, tP, tDA, tDP, tDust;
uniform vec2 res;          // 画布像素
uniform float radius;      // 视场光阑半径（像素）
uniform vec2 center;       // 光轴对准的玻片坐标 µm
uniform float upp;         // 屏幕每像素 µm
uniform vec2 cO; uniform float cSpan, cUpp;   // 合成纹理：原点、边长（µm）、每像素 µm
uniform vec2 dO; uniform float dSpan, dUpp, hasDyn, zDyn;
uniform vec3 zL;           // 三层的高度 µm
uniform float zF;          // 焦平面高度 µm
uniform float tanT;        // 物方孔径角正切
uniform float resUm;       // 分辨率 µm
uniform float dof;         // 景深 µm
uniform float coh;         // 相干度：1 − NA聚/NA物
uniform float light;       // 视野亮度
uniform vec3 tint;         // 光源颜色
uniform int mode;          // 0 明场 1 暗场 2 相差 3 无样本（对光）
uniform float aberr;       // 油镜未加油的球差
uniform float swing;       // 转换器转动中 0~1
uniform float time;
uniform float eyeRot;      // 目镜转角
uniform vec2 pupil;        // 眼睛偏离出瞳（-1~1）
uniform float dustEye, dustObj;
uniform float curvature;   // 场曲：视野边缘的离焦 µm
uniform float slideOn;
varying vec2 vUv;

const float GA = 2.39996323;
const int TAPS = 12;

float hash12(vec2 p) { vec3 p3 = fract(vec3(p.xyx) * .1031); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y) * p3.z); }

vec2 toUv(vec2 s) { return vec2((s.x - cO.x) / cSpan, 1.0 - (s.y - cO.y) / cSpan); }
vec2 toDUv(vec2 s) { return vec2((s.x - dO.x) / dSpan, 1.0 - (s.y - dO.y) / dSpan); }

// 离焦 + 衍射极限的模糊半径（µm）
float blurUm(float dz) {
  float geo = abs(dz) * tanT;
  float a = aberr * (2.5 + abs(dz) * 0.4);
  return sqrt(geo * geo + resUm * resUm * 0.36 + a * a);
}

// 圆盘采样（Vogel 螺旋），返回平均值；rPx 为纹理像素半径
vec4 disk(sampler2D t, vec2 uv, float rPx, float span, float rot) {
  float lod = max(0.0, log2(max(rPx * 0.62, 1.0)));
  if (rPx < 0.75) return textureLod(t, uv, lod);
  vec4 acc = vec4(0.0);
  float px = 1.0 / span;
  for (int k = 0; k < TAPS; k++) {
    float fk = float(k);
    float r = sqrt((fk + 0.5) / float(TAPS)) * rPx;
    float a = fk * GA + rot;
    acc += textureLod(t, uv + vec2(cos(a), sin(a)) * r * px, lod);
  }
  return acc / float(TAPS);
}

// 环形采样：半径 R 像素的一圈 6 个点的平均（比直接取高层 mipmap 平滑，没有方块）
vec4 ring(sampler2D t, vec2 uv, float R, float span, float rot) {
  float lod = max(0.0, log2(max(R * 0.55, 1.0)));
  vec4 acc = textureLod(t, uv, lod) * 0.5;
  for (int k = 0; k < 6; k++) {
    float a = float(k) * 1.0472 + rot;
    acc += textureLod(t, uv + vec2(cos(a), sin(a)) * R / span, lod);
  }
  return acc / 6.5;
}

// 离焦对相位物体的增强（光强传输方程）：随 Δz 先增大，模糊过大后衰减
float tie(float dz) {
  float D = max(dof, 0.4);
  return dz / (abs(dz) + D) * exp(-abs(dz) / (14.0 * D));
}

float chan(vec4 v, int ch) { return ch == 0 ? v.r : (ch == 1 ? v.g : v.b); }

// 一层样本：按离焦量模糊后累加透射率（相乘）与相位（相加）
void addLayer(sampler2D tA, float z, int ch, vec2 uv, float rot, float fc, inout vec3 T, inout float phi, inout float phiL, inout float lapS, inout float lapA, inout vec3 edgeA) {
  float dz = z - zF + fc;
  float rPx = blurUm(dz) / cUpp;
  float span = cSpan / cUpp;
  vec3 a = disk(tA, uv, rPx, span, rot).rgb;
  float ph = chan(disk(tP, uv, rPx, span, rot + 1.3), ch);
  // 周围环带的平均：小环用于边缘 / 拉普拉斯，大环用于相差的晕
  float rS = max(rPx, max(resUm / cUpp, 1.0)) * 1.9 + 1.0;
  float phl = chan(ring(tP, uv, rS, span, rot), ch);
  float phL = chan(ring(tP, uv, rS * 5.0 + 6.0, span, rot + 0.5), ch);
  vec3 al = ring(tA, uv, rS, span, rot + 0.9).rgb;
  T *= a;
  phi += ph;
  phiL += phL;
  float dog = ph - phl;
  lapS += tie(dz) * dog;
  lapA += abs(dog) * exp(-abs(dz) / (6.0 * max(dof, 0.4)));
  edgeA += abs(a - al);
}

void main() {
  vec2 p = gl_FragCoord.xy - res * 0.5;
  float rr = length(p) / radius;
  if (rr > 1.04) { gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); return; }
  // 倒像：屏幕右 = 玻片 −x，屏幕上 = 玻片 +y（俯视时朝向观察者）
  vec2 s = center + vec2(-p.x, p.y) * upp;
  vec2 uv = toUv(s);
  float rot = hash12(gl_FragCoord.xy) * 6.2831;
  float fc = curvature * rr * rr;

  vec3 T = vec3(1.0), edgeA = vec3(0.0);
  float phi = 0.0, lapS = 0.0, lapA = 0.0, phiL = 0.0;
  addLayer(tA0, zL.x, 0, uv, rot, fc, T, phi, phiL, lapS, lapA, edgeA);
  addLayer(tA1, zL.y, 1, uv, rot, fc, T, phi, phiL, lapS, lapA, edgeA);
  addLayer(tA2, zL.z, 2, uv, rot, fc, T, phi, phiL, lapS, lapA, edgeA);
  if (hasDyn > 0.5) {
    vec2 du = toDUv(s);
    if (du.x > 0.0 && du.x < 1.0 && du.y > 0.0 && du.y < 1.0) {
      float dz = zDyn - zF + fc;
      float rPx = blurUm(dz) / dUpp;
      vec3 a = disk(tDA, du, rPx, dSpan / dUpp, rot).rgb;
      float ph = disk(tDP, du, rPx, dSpan / dUpp, rot + 1.3).r;
      float span = dSpan / dUpp;
      float rS = max(rPx, max(resUm / dUpp, 1.0)) * 1.9 + 1.0;
      float phl = ring(tDP, du, rS, span, rot).r;
      float phL = ring(tDP, du, rS * 5.0 + 6.0, span, rot + 0.5).r;
      T *= a;
      phi += ph;
      phiL += phL;
      lapS += tie(dz) * (ph - phl);
      lapA += abs(ph - phl) * exp(-abs(dz) / (6.0 * max(dof, 0.4)));
      edgeA += abs(a - ring(tDA, du, rS, span, rot + 0.9).rgb);
    }
  }
  // 纹理是显示空间的透射率；相位通道 1.0 ≈ 3.2 rad
  vec3 Tl = pow(T, vec3(2.2));
  float phS = phi * 3.2, lapSS = lapS * 3.2, lapAA = lapA * 3.2;

  vec3 I;
  if (mode == 1) {
    // 暗场：只有被样本散射进物镜的光
    float sc = lapAA * 1.6 + length(edgeA) * 2.2 + (1.0 - dot(Tl, vec3(0.333))) * 0.25;
    I = (vec3(sc) * mix(vec3(1.0), (1.2 - Tl) * 1.1, 0.35)) * 2.4 + 0.004;
  } else if (mode == 2) {
    // 正相差：光程差转为明暗，物体偏暗、边缘有亮晕
    // 相位环吸收约 75% 的直射光，背景偏灰；物体比周围暗，周围一圈亮晕
    float d = phS - phiL * 3.2 * 0.92;
    I = Tl * clamp(1.0 - 1.7 * d, 0.03, 2.6) * 0.72;
  } else {
    // 明场：吸收 + 离焦相位对比 + 折射造成的暗边；光圈越小（越相干）边缘越明显
    float k = 0.55 + 1.3 * coh;
    float edge = lapAA * (0.18 + 0.9 * coh * coh);
    I = Tl * clamp(1.0 + k * lapSS - edge, 0.0, 2.5);
  }
  if (mode == 3) I = vec3(1.0);

  // 球差：对比度下降、整体发灰
  I = mix(I, vec3(dot(I, vec3(0.333))) * 0.85 + 0.12, aberr * 0.45);

  // 污点：目镜上的随目镜转动，物镜上的非常模糊
  vec2 q = p / radius;
  float cr = cos(eyeRot), sr = sin(eyeRot);
  vec2 qe = vec2(cr * q.x - sr * q.y, sr * q.x + cr * q.y);
  float de = textureLod(tDust, qe * 0.5 + 0.5, 1.0).r;
  float dob = textureLod(tDust, q.yx * 0.5 + 0.5, 4.5).g;
  I *= 1.0 - dustEye * de * 0.75 - dustObj * dob * 0.5;

  // 照明、色温、转换器转动时视野变暗
  vec3 c = I * tint * light * (1.0 - swing);
  // 暗角、场边亮度下降
  c *= 1.0 - 0.22 * rr * rr * rr;
  // 眼睛偏离出瞳：月牙形暗影
  float pd = length(pupil);
  if (pd > 0.02) c *= 1.0 - smoothstep(0.2, 1.4, dot(q, -pupil / pd) * pd * 1.6 + pd * 0.4) * 0.92;
  // 人眼适应：近似对数响应
  c = 1.0 - exp(-c * 1.55);
  // 视场光阑边缘：色差色边
  float edgeK = smoothstep(1.0, 0.975, rr);
  vec3 fringe = vec3(1.0 + 0.25 * smoothstep(0.975, 1.0, rr), 1.0, 1.0 - 0.3 * smoothstep(0.96, 0.995, rr));
  c *= fringe * edgeK;
  c += (hash12(gl_FragCoord.xy) - 0.5) * 0.01 * edgeK;
  gl_FragColor = vec4(pow(max(c, 0.0), vec3(1.0 / 2.2)), 1.0);
}
`;
function wf() {
  const e = document.createElement("canvas");
  e.width = e.height = 512;
  const o = e.getContext("2d");
  ((o.fillStyle = "#000"),
    o.fillRect(0, 0, 512, 512),
    (o.globalCompositeOperation = "lighter"));
  const n = (a, r, i, c) => {
    const d = o.createRadialGradient(a, r, 0, a, r, i);
    (d.addColorStop(0, c),
      d.addColorStop(0.7, c),
      d.addColorStop(1, "rgba(0,0,0,0)"),
      (o.fillStyle = d),
      o.beginPath(),
      o.arc(a, r, i, 0, 7),
      o.fill());
  };
  (n(512 * 0.66, 512 * 0.36, 14, "rgba(255,0,0,.9)"),
    n(512 * 0.7, 512 * 0.39, 6, "rgba(255,0,0,.8)"),
    n(512 * 0.31, 512 * 0.64, 9, "rgba(255,0,0,.75)"),
    (o.strokeStyle = "rgba(255,0,0,.7)"),
    (o.lineWidth = 3),
    o.beginPath(),
    o.moveTo(512 * 0.38, 512 * 0.28),
    o.bezierCurveTo(
      512 * 0.42,
      512 * 0.24,
      512 * 0.45,
      512 * 0.3,
      512 * 0.5,
      512 * 0.26,
    ),
    o.stroke(),
    n(512 * 0.42, 512 * 0.58, 46, "rgba(0,255,0,.9)"),
    n(512 * 0.62, 512 * 0.7, 30, "rgba(0,200,0,.7)"));
  const s = new A0(e);
  return ((s.generateMipmaps = !0), (s.minFilter = gi), s);
}
function vf(t, e) {
  const o = new zc({
    canvas: t,
    antialias: !1,
    alpha: !1,
    powerPreference: "high-performance",
  });
  (o.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)),
    (o.outputColorSpace = Wc));
  const n = ($) => {
      const L = new A0($);
      return (
        (L.generateMipmaps = !0),
        (L.minFilter = gi),
        (L.magFilter = Yc),
        (L.wrapS = L.wrapT = _c),
        (L.anisotropy = 1),
        L
      );
    },
    s = e.abs.map(n),
    a = n(e.ph),
    r = n(e.dA),
    i = n(e.dP),
    c = {
      tA0: {
        value: s[0],
      },
      tA1: {
        value: s[1],
      },
      tA2: {
        value: s[2],
      },
      tP: {
        value: a,
      },
      tDA: {
        value: r,
      },
      tDP: {
        value: i,
      },
      tDust: {
        value: wf(),
      },
      res: {
        value: new Z0(1, 1),
      },
      radius: {
        value: 100,
      },
      center: {
        value: new Z0(),
      },
      upp: {
        value: 1,
      },
      cO: {
        value: new Z0(),
      },
      cSpan: {
        value: 1,
      },
      cUpp: {
        value: 1,
      },
      dO: {
        value: new Z0(),
      },
      dSpan: {
        value: 1,
      },
      dUpp: {
        value: 1,
      },
      hasDyn: {
        value: 0,
      },
      zDyn: {
        value: 0,
      },
      zL: {
        value: new ht(),
      },
      zF: {
        value: 0,
      },
      tanT: {
        value: 0.1,
      },
      resUm: {
        value: 1,
      },
      dof: {
        value: 10,
      },
      coh: {
        value: 0.5,
      },
      light: {
        value: 1,
      },
      tint: {
        value: new ht(1, 1, 1),
      },
      mode: {
        value: 0,
      },
      aberr: {
        value: 0,
      },
      swing: {
        value: 0,
      },
      time: {
        value: 0,
      },
      eyeRot: {
        value: 0,
      },
      pupil: {
        value: new Z0(),
      },
      dustEye: {
        value: 0,
      },
      dustObj: {
        value: 0,
      },
      curvature: {
        value: 0,
      },
      slideOn: {
        value: 0,
      },
    },
    d = new Fc({
      vertexShader: xf,
      fragmentShader: gf,
      uniforms: c,
      depthTest: !1,
      depthWrite: !1,
    }),
    h = new qc(),
    u = new _(new Te(2, 2), d);
  ((u.frustumCulled = !1), h.add(u));
  const l = new Uc(-1, 1, 1, -1, 0, 1);
  let f = 1,
    y = 1,
    b = -1;
  function m() {
    const $ = t.getBoundingClientRect();
    ((f = Math.max(1, $.width)),
      (y = Math.max(1, $.height)),
      o.setSize(f, y, !1));
    const L = o.getPixelRatio();
    c.res.value.set(f * L, y * L);
  }
  (new ResizeObserver(m).observe(t), m());
  const x = () => Math.min(f, y) * 0.47;
  let k = "";
  function M($) {
    const L = $.dyn
      ? ""
      : [
          f,
          y,
          $.cx,
          $.cy,
          $.fov,
          $.comp?.version,
          $.zDyn,
          ...$.zL,
          $.zF,
          $.na,
          $.n,
          $.naC,
          $.res,
          $.dof,
          $.light,
          ...$.tint,
          $.mode,
          $.aberr,
          $.swing,
          $.eyeRot,
          ...$.pupil,
          $.dustEye,
          $.dustObj,
          $.curvature,
        ].join("|");
    if (L && L === k) return;
    k = L;
    const j = o.getPixelRatio(),
      T = c,
      S = x() * j;
    ((T.radius.value = S),
      T.center.value.set($.cx, $.cy),
      (T.upp.value = $.fov / 2 / S));
    const R = $.comp;
    if (
      R &&
      (T.cO.value.set(R.x0, R.y0),
      (T.cSpan.value = R.span),
      (T.cUpp.value = R.upp),
      R.version !== b)
    ) {
      b = R.version;
      for (const C of [...s, a]) C.needsUpdate = !0;
    }
    ($.dyn
      ? (T.dO.value.set($.dyn.x0, $.dyn.y0),
        (T.dSpan.value = $.dyn.span),
        (T.dUpp.value = $.dyn.upp),
        (T.hasDyn.value = 1),
        (T.zDyn.value = $.zDyn),
        (r.needsUpdate = i.needsUpdate = !0))
      : (T.hasDyn.value = 0),
      T.zL.value.set(...$.zL),
      (T.zF.value = $.zF),
      (T.tanT.value = Math.tan(Math.asin(Math.min(0.99, $.na / $.n)))),
      (T.resUm.value = $.res),
      (T.dof.value = $.dof),
      (T.coh.value = Math.max(0, Math.min(1, 1 - $.naC / $.na))),
      (T.light.value = $.light),
      T.tint.value.set(...$.tint),
      (T.mode.value =
        {
          bf: 0,
          df: 1,
          ph: 2,
          empty: 3,
        }[$.mode] ?? 0),
      (T.aberr.value = $.aberr),
      (T.swing.value = $.swing),
      (T.time.value = $.time % 100),
      (T.eyeRot.value = $.eyeRot),
      T.pupil.value.set(...$.pupil),
      (T.dustEye.value = $.dustEye),
      (T.dustObj.value = $.dustObj),
      (T.curvature.value = $.curvature),
      o.render(h, l));
  }
  function g($, L, j) {
    const T = x(),
      S = j.fov / 2 / T,
      R = $ - f / 2,
      C = -(L - y / 2);
    return [j.cx - R * S, j.cy + C * S];
  }
  function w($, L, j) {
    const T = x(),
      S = j.fov / 2 / T;
    return [f / 2 - ($ - j.cx) / S, y / 2 - (L - j.cy) / S];
  }
  return {
    render: M,
    resize: m,
    toSlide: g,
    toScreen: w,
    fieldRadius: x,
    size: () => [f, y],
    renderer: o,
  };
}
let li = 0,
  Bn = null,
  zs = null;
function kf({ og: t, overlay: e }, { ctx: o, S: n, img: s, eye: a, v: r }) {
  const [i, c] = a.size(),
    d = Math.min(window.devicePixelRatio, 2);
  ((e.width !== Math.round(i * d) || e.height !== Math.round(c * d)) &&
    ((e.width = Math.round(i * d)), (e.height = Math.round(c * d))),
    t.setTransform(d, 0, 0, d, 0, 0),
    t.clearRect(0, 0, i, c));
  const h = a.fieldRadius(),
    u = i / 2,
    l = c / 2,
    f = s.fov / 2 / h;
  (t.save(), t.beginPath(), t.arc(u, l, h, 0, Math.PI * 2), t.clip());
  const y = (m, x) => [u - (m - r.cx) / f, l - (x - r.cy) / f];
  ((y.scale = 1 / f), n.placed && n.feature?.overlay?.(t, y));
  const b = n.s.eyeRot;
  if (
    (t.save(),
    t.translate(u, l),
    t.rotate(-b),
    (t.fillStyle = "rgba(8,8,9,.88)"),
    t.beginPath(),
    t.moveTo(-h - 2, -2.2),
    t.lineTo(-h * 0.08, -0.4),
    t.lineTo(-h * 0.08, 0.4),
    t.lineTo(-h - 2, 2.2),
    t.closePath(),
    t.fill(),
    n.reticle)
  ) {
    const x = (10 / He[n.s.eye].fn) * 2 * h,
      k = x / 100;
    ((t.strokeStyle = "rgba(10,10,12,.9)"),
      (t.fillStyle = "rgba(10,10,12,.9)"),
      (t.lineWidth = 1),
      (t.font = "600 10px 'JetBrains Mono', monospace"),
      (t.textAlign = "center"),
      t.beginPath(),
      t.moveTo(-x / 2, 0),
      t.lineTo(x / 2, 0));
    for (let M = 0; M <= 100; M++) {
      const g = -x / 2 + M * k,
        w = M % 10 === 0 ? 14 : M % 5 === 0 ? 10 : 6;
      (t.moveTo(g, 0), t.lineTo(g, -w));
    }
    t.stroke();
    for (let M = 0; M <= 100; M += 10)
      t.fillText(String(M / 10), -x / 2 + M * k, -18);
  }
  if ((t.restore(), n.labels && n.mouseEye && n.spec && n.placed)) {
    const m = performance.now(),
      [x, k] = n.mouseEye;
    if (m - li > 90) {
      li = m;
      const [M, g] = a.toSlide(x, k, r);
      ((Bn = n.spec.pick?.(M, g, o.opts()) || null), (zs = [x, k]));
    }
    if (Bn && zs) {
      const [M, g] = zs;
      t.font = "600 12.5px 'PingFang SC', 'Noto Sans SC', sans-serif";
      const w = t.measureText(Bn).width + 16,
        $ = Math.min(M + 14, u + h - w - 4),
        L = g - 30;
      ((t.fillStyle = "rgba(10,11,13,.82)"),
        t.beginPath(),
        t.roundRect($, L, w, 22, 5),
        t.fill(),
        (t.fillStyle = "#e8f6f1"),
        t.fillText(Bn, $ + 8, L + 15),
        (t.strokeStyle = "rgba(232,246,241,.7)"),
        (t.lineWidth = 1),
        t.beginPath(),
        t.moveTo(M, g),
        t.lineTo($ + 4, L + 22),
        t.stroke(),
        t.beginPath(),
        t.arc(M, g, 2.5, 0, 7),
        t.stroke());
    }
  }
  t.restore();
}
const Qo = {
  pitch: 0.38,
  yaw: -0.55,
};
function hi(t = "student") {
  return {
    kind: t,
    b: Yt + 14,
    coarseA: 0,
    fineA: 0,
    obj: 0,
    nose: 0,
    eye: 1,
    eyeRot: 0,
    aperture: 1,
    iris: 0.7,
    cond: "bf",
    lamp: 0.55,
    mirror: {
      pitch: 0.05,
      yaw: 0.4,
      concave: !1,
    },
    room: 1,
    slide: null,
    dust: null,
  };
}
const wc = (t) => d0[t.obj],
  Pf = (t) => He[t.eye];
function vc(t, e, o) {
  const n = t.b;
  e === "coarse" ? (t.coarseA += o) : (t.fineA += o);
  const s = e === "coarse" ? rl(o) : il(o);
  return ((t.b = Math.max(Qc, Math.min(Jc, t.b + s))), kc(t, n));
}
function kc(t, e) {
  const o = wc(t);
  if (!t.slide || $i(t.b, o) >= 0) return null;
  t.b = Math.max(t.b, Yt - o.wd);
  const n = t.slide.cracked;
  return ((t.slide.cracked = !0), e > t.b + 1e-9 || !n ? "crash" : null);
}
function $f(t, e) {
  return ((t.obj = Math.max(0, Math.min(d0.length - 1, e))), kc(t, t.b + 1));
}
function Tf(t) {
  const e = t.pitch - Qo.pitch,
    o = (t.yaw - Qo.yaw) * Math.cos(Qo.pitch);
  return Math.hypot(e, o);
}
function V0(t) {
  const e = wc(t),
    o = Pf(t),
    n = !!t.slide?.oiled,
    s = Pi(e, n),
    a = ol(e, n);
  let r, i, c, d, h;
  t.kind === "student"
    ? ((r = cl(t.aperture, s)),
      (d = ll(t.aperture)),
      (c = hl(Tf(t.mirror), t.mirror.concave)),
      (i = 1.15 * t.room),
      (h = [0.93, 0.97, 1.04]))
    : ((r = Math.max(0.03, 0.9 * t.iris)),
      (d = 0.25 + 0.75 * t.iris),
      (c = 1),
      (i = 0.08 + 2.6 * t.lamp * t.lamp),
      (h = [1, 0.985, 0.95]));
  const u = t.kind === "student" ? 0.2 : Math.max(r, 0.1),
    l = fl({
      obj: e,
      eye: o,
      source: i,
      align: c,
      aperture: d,
      concave: t.mirror.concave && t.kind === "student",
      oiled: n,
      naIll: u,
    }),
    f = tl(e, o);
  return {
    obj: e,
    eye: o,
    mag: f,
    na: s,
    n: a,
    naC: r,
    oiled: n,
    fov: el(e, o),
    res: nl(s, r),
    dof: sl(s, f, a),
    bright: l,
    align: c,
    tint: h,
    zf: al(t.b),
    gap: $i(t.b, e),
    mode: t.kind === "research" ? t.cond : "bf",
    aberration: e.oil && !n ? 1 : 0,
  };
}
const If = Yt + 4,
  Lf = Yt - 1.5,
  Pc = (t) =>
    t.map(([e, o, n]) => ({
      id: e,
      label: o,
      done: n,
    }));
function Sf(t) {
  return Pc([
    [
      "place",
      t("取镜和安放：右手握镜臂、左手托镜座，放在略偏左的位置"),
      (e, o) => o.placed,
    ],
    [
      "low",
      t("转动转换器，使低倍物镜对准通光孔"),
      (e) => e.obj === 0 && Math.abs(e.nose) < 0.02,
    ],
    [
      "aperture",
      t("转动遮光器，把较大的光圈对准通光孔"),
      (e) => e.aperture >= 3,
    ],
    [
      "mirror",
      t("左眼注视目镜，转动反光镜，直到看到明亮的圆形视野"),
      (e, o) => o.img.align > 0.6,
    ],
    [
      "slide",
      t("把玻片放在载物台上，标本正对通光孔，用压片夹压住"),
      (e, o) => !!e.slide?.clipped && o.centered,
    ],
    [
      "lower",
      t("眼睛从侧面注视物镜，转动粗准焦螺旋使镜筒缓缓下降，直到物镜接近玻片"),
      (e, o) => o.lowered,
    ],
    [
      "raise",
      t("左眼注视目镜，反向转动粗准焦螺旋使镜筒缓缓上升，直到看清物像"),
      (e, o) => Math.abs(o.dz) < 4 * o.img.dof + 30,
    ],
    [
      "fine",
      t("略微转动细准焦螺旋，使物像更加清晰"),
      (e, o) => o.usedFine && Math.abs(o.dz) < o.img.dof * 0.6,
    ],
  ]);
}
function jf(t) {
  return Pc([
    [
      "focus",
      t("在低倍镜下找到物像并调清晰"),
      (e, o) => e.obj <= 1 && Math.abs(o.dz) < o.img.dof,
    ],
    ["center", t("移动玻片，把要观察的物像移到视野中央"), (e, o) => o.centered],
    [
      "switch",
      t("转动转换器，换成高倍物镜"),
      (e) => e.obj === 2 && Math.abs(e.nose - 2) < 0.02,
    ],
    [
      "light",
      t("视野变暗：换大光圈或凹面镜，把视野调亮"),
      (e, o) => e.obj === 2 && o.img.bright > 0.35,
    ],
    [
      "fine",
      t("只转动细准焦螺旋，使物像清晰"),
      (e, o) => e.obj === 2 && o.usedFine && Math.abs(o.dz) < o.img.dof * 0.7,
    ],
  ]);
}
function $c(t) {
  return {
    steps: t,
    done: 0,
    violations: [],
  };
}
function Rf(t, e, o) {
  let n = !1;
  for (; t.done < t.steps.length && t.steps[t.done].done(e, o);)
    (t.done++, (n = !0));
  return n;
}
function Ws(t, e, o, n = null) {
  if (o.type === "crash") return "crash";
  if (o.type === "coarse" && t.slide) {
    if (t.obj >= 2) return "coarse-high";
    if (o.dA < 0 && t.b < If && !e.sideView) return "lower-blind";
  }
  if (o.type === "slide" && n && n.steps.some((s) => s.id === "mirror")) {
    const s = n.steps.findIndex((a) => a.id === "mirror");
    if (n.done <= s) return "slide-before-light";
  }
  return o.type === "objective" && t.obj >= 2 && e.dzLow != null && !e.centered
    ? "high-not-centered"
    : null;
}
function Af(t, e) {
  return {
    crash: e("物镜压到了玻片，盖玻片碎裂！下降镜筒时要从侧面注视物镜"),
    "coarse-high": e("高倍镜下不能转动粗准焦螺旋，只能用细准焦螺旋"),
    "lower-blind": e("镜筒下降时，眼睛应从侧面注视物镜，以免压坏玻片"),
    "slide-before-light": e("应该先对光，看到明亮的视野后再放玻片"),
    "high-not-centered": e("换高倍镜前，应先把物像移到视野中央"),
  }[t];
}
const ns = 11e3,
  fi = 2600,
  Ef = 160,
  Cf = 1100,
  Tc = {
    sucrose: 14,
    water: 20,
  },
  di = ["iodine", "methylene", "stainR"],
  Df = ["sucrose", "water"],
  Fs = () => ({
    list: [],
  });
function Bf(t, e, o) {
  t.list.push({
    kind: e,
    t0: o,
    tDraw: null,
  });
}
function Of(t, e) {
  const o = t.list[t.list.length - 1];
  return !o || o.tDraw != null ? !1 : ((o.tDraw = e), !0);
}
function Ma(t, e) {
  if (e <= t.t0) return 0;
  const o = (n) => fi * (1 - Math.exp(-(Ef * (n - t.t0)) / fi));
  return t.tDraw == null || e <= t.tDraw
    ? o(e)
    : o(t.tDraw) + Cf * (e - t.tDraw);
}
const Ic = (t, e) => ns - Ma(t, e);
function Lc(t, e, o = 1e5) {
  const n = ns - e;
  if (n <= 0) return t.t0;
  if (Ma(t, t.t0 + o) < n) return 1 / 0;
  let s = t.t0,
    a = t.t0 + o;
  for (let r = 0; r < 50; r++) {
    const i = (s + a) / 2;
    Ma(t, i) >= n ? (a = i) : (s = i);
  }
  return a;
}
const Nf = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
function zf(t, e, o, n) {
  let s = 0;
  for (const a of t.list) {
    if (a.kind !== e) continue;
    const r = Ic(a, n);
    s = Math.max(s, Nf((o - r) / 500 + 0.5));
  }
  return s;
}
function Wf(t, e, o) {
  const n = t.list
    .filter((r) => Df.includes(r.kind))
    .map((r) => ({
      kind: r.kind,
      ta: Lc(r, e),
    }))
    .filter((r) => r.ta <= o)
    .sort((r, i) => r.ta - i.ta);
  let s = 0,
    a = -1 / 0;
  for (let r = 0; r < n.length; r++) {
    const i = n[r];
    if (r > 0) {
      const c = n[r - 1];
      s = ui(s, c.kind, i.ta - a);
    }
    a = i.ta;
  }
  return (n.length && (s = ui(s, n[n.length - 1].kind, o - a)), s);
}
function ui(t, e, o) {
  const n = e === "sucrose" ? 1 : 0;
  return n + (t - n) * Math.exp(-Math.max(0, o) / Tc[e]);
}
function pi(t, e) {
  for (const o of t.list) {
    const n = Lc(o, -ns);
    if (n === 1 / 0 ? e - o.t0 < 40 : e < n + 6 * (Tc[o.kind] || 0) + 1)
      return !0;
  }
  return !1;
}
const Ff = () => ({
    parts: translate("部件"),
    log: translate("操作记录"),
    optics: translate("成像参数"),
    image: translate("倒像"),
    dust: translate("污点判断"),
    cells: translate("细胞结构"),
    live: translate("活体观察"),
    plas: translate("质壁分离曲线"),
    mitosis: translate("分裂期统计"),
    measure: translate("测微尺"),
    count: translate("计数"),
    slides: translate("玻片"),
  }),
  qf = () => [
    ["interphase", translate("间期"), "#9aa3ad"],
    ["prophase", translate("前期"), "#ffd25a"],
    ["metaphase", translate("中期"), "#ff8a5a"],
    ["anaphase", translate("后期"), "#ff5a8a"],
    ["telophase", translate("末期"), "#7ad0ff"],
  ],
  Uf = (t, e, o, n, s) => {
    (t.save(),
      t.setLineDash([6, 5]),
      (t.strokeStyle = s),
      (t.lineWidth = 1.6),
      t.beginPath(),
      t.arc(e, o, n, 0, Math.PI * 2),
      t.stroke(),
      t.restore());
  };
function Yf(t) {
  const e = document.getElementById("labels"),
    o = new Map();
  return {
    update() {
      const { S: n } = t,
        s = n.rig.anchors,
        a = new Set();
      for (const [r, i] of Object.entries(s)) {
        let c = o.get(r);
        c ||
          ((c = document.createElement("div")),
          (c.className = "ptag"),
          e.appendChild(c),
          o.set(r, c));
        const d = t.partName(r);
        c.textContent !== d && (c.textContent = d);
        const h = t.project(i.getWorldPosition(t.tmpV));
        ((c.style.display = h.behind ? "none" : ""),
          (c.style.transform = `translate(${h.x.toFixed(1)}px, ${h.y.toFixed(1)}px)`),
          c.classList.toggle("hot", n.hoverPart === r),
          a.add(r));
      }
      for (const [r, i] of o) a.has(r) || (i.style.display = "none");
    },
    dispose() {
      for (const n of o.values()) n.remove();
    },
  };
}
function _f(t) {
  return {
    procedure: $c(Sf(translate)),
    actions: () =>
      t.S.placed
        ? []
        : [
            {
              label: translate("取镜安放"),
              run: () => t.placeScope(),
              cls: "go",
            },
          ],
  };
}
function Hf(t) {
  let e = t.center(),
    o = null;
  return {
    onSlideMove() {
      const n = t.center(),
        s = [n[0] - e[0], n[1] - e[1]];
      (Math.hypot(...s) > 1 && (o = s), (e = n));
    },
    dock(n) {
      if (n !== "image") return null;
      const s = t.spec?.id === "letterShang" ? "上" : "e",
        a = (c, d) =>
          !c && !d
            ? "·"
            : `<i class="arr" style="transform:rotate(${((Math.atan2(d, c) * 180) / Math.PI).toFixed(0)}deg)">➜</i>`,
        r = o ? a(-o[0], -o[1]) : "·",
        i = o ? a(o[0], o[1]) : "·";
      return {
        html: `<div class="gview inv"><div class="invc"><span>${translate("玻片上")}</span><b class="glyph">${s}</b></div><div class="invc"><span>${translate("视野中")}</span><b class="glyph rot">${s}</b></div><div class="kv2"><span>${translate("玻片移动方向")}</span><b>${r}</b><span>${translate("物像移动方向")}</span><b class="hi">${i}</b></div><p class="tnote">${translate("显微镜成倒像：像相对于物旋转了 180°。所以物像偏向哪个方向，就把玻片向哪个方向移动，物像才会回到视野中央。")}</p></div>`,
      };
    },
  };
}
function Gf(t) {
  const e = () => t.spec?.start || [0, 0];
  return {
    procedure: $c(jf(translate)),
    centered() {
      const [o, n] = t.center(),
        [s, a] = e();
      return Math.hypot(o - s, n - a) < 60;
    },
    overlay(o, n) {
      const [s, a] = e(),
        [r, i] = n(s, a);
      Uf(o, r, i, Math.max(10, n.scale * 55), "rgba(255,200,87,.9)");
    },
  };
}
function Xf(t) {
  const e = {
      eyepiece: translate("目镜"),
      objective: translate("物镜"),
      slide: translate("玻片"),
    },
    o = {
      obs: {
        eye: null,
        slide: null,
        obj: null,
      },
      score: 0,
      tries: 0,
      answered: !1,
    },
    n = t.s;
  function s() {
    const i = ["eyepiece", "objective", "slide"];
    let c = i[Math.floor(Math.random() * 3)];
    n.dust &&
      c === n.dust.where &&
      Math.random() < 0.7 &&
      (c = i[(i.indexOf(c) + 1) % 3]);
    const d = t.center();
    ((n.dust = {
      where: c,
      obj: n.obj,
      at: [d[0] + 50, d[1] - 40],
    }),
      (o.obs = {
        eye: null,
        slide: null,
        obj: null,
      }),
      (o.answered = !1),
      t.invalidate());
  }
  s();
  let a = t.center();
  const r = (i) => {
    o.tries++;
    const c = i === n.dust.where;
    (c && o.score++,
      (o.answered = !0),
      t.flash(
        c
          ? `✓ ${translate("正确！污点在{0}上", [e[i]])}`
          : `✗ ${translate("再想想：污点其实在{0}上", [e[n.dust.where]])}`,
        c ? "ok" : "bad",
      ),
      t.refreshDock());
  };
  return {
    actions: () => [
      {
        label: translate("转动目镜"),
        run: () => {
          (t.rotateEyepiece(Math.PI / 3),
            (o.obs.eye = n.dust.where === "eyepiece"));
        },
        cls: "ghost wide",
      },
      {
        label: translate("移动玻片"),
        run: () => {
          const [i, c] = t.center();
          (t.moveSlide(i + t.img.fov * 0.18, c + t.img.fov * 0.1),
            (o.obs.slide = n.dust.where === "slide"));
        },
        cls: "ghost wide",
      },
      {
        label: translate("在目镜上"),
        run: () => r("eyepiece"),
        cls: "ghost wide ans",
      },
      {
        label: translate("在物镜上"),
        run: () => r("objective"),
        cls: "ghost wide ans",
      },
      {
        label: translate("在玻片上"),
        run: () => r("slide"),
        cls: "ghost wide ans",
      },
      {
        label: translate("换一个污点"),
        run: s,
        cls: "ghost wide",
      },
    ],
    onEyeRotate() {
      o.obs.eye = n.dust.where === "eyepiece";
    },
    onSlideMove() {
      const i = t.center();
      Math.hypot(i[0] - a[0], i[1] - a[1]) > t.img.fov * 0.05 &&
        (o.obs.slide = n.dust.where === "slide");
    },
    onObjective(i, c) {
      (i !== c && (o.obs.obj = n.dust.where === "objective"), (a = t.center()));
    },
    dock(i) {
      if (i !== "dust") return null;
      const c = (d, h, u) =>
        d == null
          ? `<span class="dim">${translate("未检验")}</span>`
          : d
            ? `<b class="hi">${h}</b>`
            : u;
      return {
        html: `<div class="gview"><table class="tbl"><thead><tr><th>${translate("操作")}</th><th>${translate("污点的表现")}</th></tr></thead><tbody><tr><td>${translate("转动目镜")}</td><td>${c(o.obs.eye, translate("跟着转动"), translate("不动"))}</td></tr><tr><td>${translate("移动玻片")}</td><td>${c(o.obs.slide, translate("跟着移动"), translate("不动"))}</td></tr><tr><td>${translate("换物镜")}</td><td>${c(o.obs.obj, translate("消失"), translate("仍在"))}</td></tr></tbody></table><div class="kv2"><span>${translate("答对")}</span><b class="hi">${o.score} / ${o.tries}</b></div></div>`,
      };
    },
  };
}
function Vf(t) {
  const e = [];
  let o = -1;
  return {
    update() {
      if (t.lesson.id !== "plasmolysis" || !t.spec) return;
      const n = t.S.rt;
      if (n - o < 0.5) return;
      o = n;
      const [s] = t.center(),
        a = t.opts(),
        r = t.img.fov;
      let i = 0;
      for (const c of [-0.3, 0, 0.3]) i += a.plas(s + c * r);
      (e.push([n, 1 - 0.55 * (i / 3)]), e.length > 1200 && e.shift());
    },
    dock(n) {
      if (n === "plas") {
        const s = Math.max(60, e.length ? e[e.length - 1][0] : 60);
        return {
          chart: {
            series: [
              {
                pts: e,
                color: "#c070d0",
                name: translate("原生质体相对面积"),
              },
            ],
            x: [0, s],
            y: [0.4, 1.05],
            xLabel: translate("时间 t / s"),
            yLabel: translate("原生质体面积 / 细胞面积"),
            xName: "t",
          },
          side: `<div class="fitside"><span>${translate("当前")}</span><b class="big">${e.length ? e[e.length - 1][1].toFixed(2) : "1.00"}</b><p>${translate("滴加蔗糖溶液后比值下降（质壁分离），滴加清水后回升（复原）。曲线的斜率反映失水、吸水的速率。")}</p></div>`,
        };
      }
      return n === "cells" ? Sc(t) : null;
    },
    csv: (n) =>
      n === "plas" && e.length
        ? [
            ["t/s", "protoplast/cell"],
            ...e.map(([s, a]) => [s.toFixed(1), a.toFixed(3)]),
          ]
        : null,
  };
}
function Sc(t) {
  const e = t.spec?.id,
    o = [
      [translate("细胞壁"), "✓", "—"],
      [translate("细胞膜"), "✓", "✓"],
      [translate("细胞质"), "✓", "✓"],
      [translate("细胞核"), "✓", "✓"],
      [translate("大液泡"), "✓", "—"],
      [translate("叶绿体"), translate("绿色部分有"), "—"],
      [
        translate("形状"),
        translate("较规则（细胞壁支持）"),
        translate("不规则"),
      ],
    ],
    n = t.spec?.info?.() || "";
  return {
    html: `<div class="gview"><table class="tbl"><thead><tr><th>${translate("结构")}</th><th>${translate("植物细胞")}</th><th>${translate("动物细胞")}</th></tr></thead><tbody>${o.map((s) => `<tr><td>${s[0]}</td><td>${s[1]}</td><td>${s[2]}</td></tr>`).join("")}</tbody></table><div class="tnote wide">${n || (e ? `${translate("当前玻片")}：<b>${t.spec.name}</b>。${translate("打开结构标注，把鼠标移到视野中的结构上可以看到名称。")}` : "")}</div></div>`,
  };
}
function Kf(t) {
  return {
    dock(e) {
      if (e === "cells") return Sc(t);
      if (e !== "live") return null;
      const o = t.spec?.dynamic?.info?.(t.S.dyn) || [];
      return {
        html: `<div class="gview">${o.length ? `<div class="kv2">${o.map(([s, a]) => `<span>${s}</span><b>${a}</b>`).join("")}</div>` : ""}<div class="tnote wide">${t.spec?.info?.() || ""}</div></div>`,
      };
    },
  };
}
function Zf(t) {
  const e = new Map(),
    o = document.getElementById("eyePop");
  let n = null;
  const s = qf(),
    a = (i) => s.find((c) => c[0] === i)?.[1] || i;
  function r(i) {
    if (!n) return;
    const c = i === n.truth;
    (e.set(n.id, {
      ...n,
      guess: i,
    }),
      t.flash(
        c ? `✓ ${a(i)}` : `✗ ${translate("这个细胞处于{0}", [a(n.truth)])}`,
        c ? "ok" : "bad",
      ),
      (n = null),
      (o.hidden = !0),
      t.refreshDock());
  }
  return (
    (o.innerHTML = s
      .map(
        ([i, c, d]) => `<button data-k="${i}" style="--c:${d}">${c}</button>`,
      )
      .join("")),
    o
      .querySelectorAll("button")
      .forEach((i) => i.addEventListener("click", () => r(i.dataset.k))),
    {
      onEyeClick([i, c], [d, h]) {
        const u = t.spec?.classify?.(i, c, t.opts());
        if (!u) {
          ((o.hidden = !0),
            (n = null),
            t.flash(translate("点在一个细胞核上，再判断它所处的时期")));
          return;
        }
        if (t.img.obj.mag < 10) {
          t.flash(translate("倍数太低，换 40× 物镜再判断"));
          return;
        }
        ((n = u),
          (o.hidden = !1),
          (o.style.left = `${d}px`),
          (o.style.top = `${h}px`));
      },
      overlay(i, c) {
        for (const d of e.values()) {
          const [h, u] = c(d.x, d.y),
            l = s.find((f) => f[0] === d.guess)?.[2] || "#fff";
          ((i.strokeStyle = l),
            (i.lineWidth = 2),
            i.beginPath(),
            i.arc(h, u, Math.max(5, c.scale * 9), 0, Math.PI * 2),
            i.stroke(),
            d.guess !== d.truth &&
              ((i.fillStyle = "#ff5b4f"),
              (i.font = "700 12px sans-serif"),
              i.fillText("✗", h + c.scale * 9, u - c.scale * 9)));
        }
      },
      dock(i) {
        if (i !== "mitosis") return null;
        const c = Object.fromEntries(s.map(([l]) => [l, 0]));
        let d = 0;
        for (const l of e.values()) (c[l.guess]++, l.guess === l.truth && d++);
        const h = e.size,
          u = h - c.interphase;
        return {
          html: `<div class="gview"><table class="tbl cases"><thead><tr><th>${translate("时期")}</th><th>${translate("细胞数")}</th><th>${translate("占比")}</th><th>${translate("推算时长（细胞周期 20 h）")}</th></tr></thead><tbody>${s.map(([l, f, y]) => `<tr><td><i class="sw" style="background:${y}"></i>${f}</td><td>${c[l]}</td><td>${h ? ((c[l] / h) * 100).toFixed(1) : "—"}%</td><td>${h ? ((c[l] / h) * 20).toFixed(1) : "—"} h</td></tr>`).join("")}</tbody></table><div class="kv2"><span>${translate("观察细胞总数")}</span><b>${h}</b><span>${translate("分裂指数")}</span><b class="hi">${h ? (pl(u, h) * 100).toFixed(1) + "%" : "—"}</b><span>${translate("判断正确率")}</span><b>${h ? Math.round((d / h) * 100) + "%" : "—"}</b></div></div>`,
        };
      },
      csv: (i) =>
        i === "mitosis" && e.size
          ? [
              ["x/um", "y/um", "guess", "answer"],
              ...[...e.values()].map((c) => [
                c.x.toFixed(1),
                c.y.toFixed(1),
                c.guess,
                c.truth,
              ]),
            ]
          : null,
      dispose() {
        ((o.hidden = !0), (o.innerHTML = ""));
      },
    }
  );
}
function Qf(t) {
  return {
    dock(e) {
      if (e === "cells") {
        const o = t.spec?.info?.() || "";
        return {
          html: `<div class="gview"><table class="tbl"><thead><tr><th>${translate("血细胞")}</th><th>${translate("形态")}</th><th>${translate("每微升数量")}</th></tr></thead><tbody><tr><td>${translate("红细胞")}</td><td>${translate("两面凹圆盘，无核，直径约 7.5 µm")}</td><td>${translate("约 500 万")}</td></tr><tr><td>${translate("白细胞")}</td><td>${translate("有核，比红细胞大")}</td><td>${translate("4000~10000")}</td></tr><tr><td>${translate("血小板")}</td><td>${translate("最小，无核，形状不规则")}</td><td>${translate("10 万~30 万")}</td></tr></tbody></table><div class="tnote wide">${o}</div></div>`,
        };
      }
      return null;
    },
  };
}
function Jf(t) {
  const e = {},
    o = [];
  let n = null;
  const s = (r) => 100 / d0[r].mag,
    a = t.S;
  return (
    (a.tool = "move"),
    {
      actions: () => [
        {
          label:
            a.tool === "measure"
              ? translate("● 测量中：在视野中拖出线段")
              : translate("测量工具"),
          run: () => {
            ((a.tool = a.tool === "measure" ? "move" : "measure"),
              t.renderActs());
          },
          cls: a.tool === "measure" ? "go" : "ghost wide",
        },
        {
          label: translate("清除线段"),
          run: () => (o.length = 0),
          cls: "ghost wide",
        },
      ],
      onEyeDown(r, i) {
        a.tool === "measure" &&
          (n = {
            a: i,
            b: i,
          });
      },
      onEyeDrag(r, i) {
        return n ? ((n.b = i), !0) : !1;
      },
      onEyeUp() {
        if (!n) return;
        const r = Math.hypot(n.b[0] - n.a[0], n.b[1] - n.a[1]);
        (r > 0.3 &&
          o.push({
            ...n,
            obj: t.s.obj,
            len: r,
          }),
          (n = null));
      },
      overlay(r, i) {
        const c = n ? [...o, n] : o;
        r.lineWidth = 2;
        for (const d of c) {
          const [h, u] = i(...d.a),
            [l, f] = i(...d.b);
          ((r.strokeStyle = "#ffd25a"),
            r.beginPath(),
            r.moveTo(h, u),
            r.lineTo(l, f),
            r.stroke());
          for (const [M, g] of [
            [h, u],
            [l, f],
          ])
            (r.beginPath(),
              r.arc(M, g, 3, 0, 7),
              (r.fillStyle = "#ffd25a"),
              r.fill());
          const b = Math.hypot(d.b[0] - d.a[0], d.b[1] - d.a[1]) / s(t.s.obj),
            m = e[t.s.obj],
            x = m
              ? `${(b * m).toFixed(1)} µm`
              : `${b.toFixed(1)} ${translate("格")}`;
          ((r.font = "600 12px 'JetBrains Mono', monospace"),
            (r.fillStyle = "rgba(10,11,13,.8)"));
          const k = r.measureText(x).width + 10;
          (r.fillRect((h + l) / 2 + 6, (u + f) / 2 - 18, k, 18),
            (r.fillStyle = "#ffd25a"),
            r.fillText(x, (h + l) / 2 + 11, (u + f) / 2 - 5));
        }
      },
      dock(r) {
        if (r !== "measure") return null;
        const i = t.s.obj,
          c = o
            .map((d, h) => {
              const u = d.len / s(d.obj),
                l = e[d.obj];
              return `<tr><td>${h + 1}</td><td>${d0[d.obj].mag}×</td><td>${u.toFixed(1)}</td><td>${l ? (u * l).toFixed(1) + " µm" : `<span class="dim">${translate("未标定")}</span>`}</td></tr>`;
            })
            .join("");
        return {
          html: `<div class="gview"><div class="calib"><b>${translate("标定")} ${d0[i].mag}× ${translate("物镜")}</b><label>${translate("台微尺")} <input id="mStage" type="number" min="1" max="100" value="10"> ${translate("格")}</label><label>= ${translate("目镜")} <input id="mOcular" type="number" min="1" max="100" value=""> ${translate("格")}</label><button id="mCal">${translate("标定")}</button><span class="res">${e[i] ? `${translate("目镜每格")} = <b>${e[i].toFixed(2)} µm</b>` : translate("对齐两尺 0 刻度后，读出重合处的格数")}</span></div><table class="tbl"><thead><tr><th>#</th><th>${translate("物镜")}</th><th>${translate("目镜格数")}</th><th>${translate("实际长度")}</th></tr></thead><tbody>${c || `<tr><td></td><td colspan="3" class="dim">${translate("打开测量工具，在视野中拖出线段")}</td></tr>`}</tbody></table></div>`,
          bind(d) {
            d.querySelector("#mCal").addEventListener("click", () => {
              const h = +d.querySelector("#mStage").value,
                u = +d.querySelector("#mOcular").value;
              if (!(h > 0 && u > 0)) {
                t.flash(translate("请填写两个格数"));
                return;
              }
              const l = dl(h, u);
              if (Math.abs(l / s(i) - 1) > 0.06) {
                t.flash(
                  `${translate("读数有误差：再仔细找一找两尺刻度重合的位置")}（${l.toFixed(2)} µm）`,
                  "bad",
                );
                return;
              }
              ((e[i] = l),
                t.flash(
                  `✓ ${translate("目镜每格")} = ${l.toFixed(2)} µm`,
                  "ok",
                ),
                t.refreshDock());
            });
          },
        };
      },
      csv: (r) =>
        r === "measure" && o.length
          ? [
              ["objective", "divisions", "um"],
              ...o.map((i) => {
                const c = i.len / s(i.obj);
                return [
                  d0[i.obj].mag,
                  c.toFixed(2),
                  e[i.obj] ? (c * e[i.obj]).toFixed(2) : "",
                ];
              }),
            ]
          : null,
      dispose() {
        a.tool = "move";
      },
    }
  );
}
function td(t) {
  const e = new Map(),
    o = {
      dilution: 100,
      onParam(n, s) {
        n === "dilution" && ((o.dilution = s), e.clear(), t.invalidate());
      },
      onEyeClick([n, s]) {
        const a = t.spec?.yeastAt?.(n, s, t.opts());
        a && (e.has(a.id) ? e.delete(a.id) : e.set(a.id, a), t.refreshDock());
      },
      overlay(n, s) {
        n.fillStyle = "rgba(63,210,138,.9)";
        for (const a of e.values()) {
          const [r, i] = s(a.x, a.y);
          (n.beginPath(), n.arc(r, i, 3.2, 0, 7), n.fill());
        }
      },
      dock(n) {
        if (n !== "count") return null;
        const s = t.spec?.squares || [],
          a = (u, l) =>
            ul(-u.x, -u.y, u.r, -(l.x0 + l.size), -(l.y0 + l.size), l.size),
          r = (u) =>
            (
              t.spec?.yeastIn?.(
                {
                  x0: u.x0 - 10,
                  y0: u.y0 - 10,
                  x1: u.x0 + u.size + 10,
                  y1: u.y0 + u.size + 10,
                },
                t.opts(),
              ) || []
            ).filter((l) => a(l, u)).length,
          i = (u) => [...e.values()].filter((l) => a(l, u)).length;
        let c = 0,
          d = 0;
        const h = s
          .map((u) => {
            const l = i(u),
              f = r(u);
            return (
              (c += l),
              (d += f),
              `<tr><td>${u.name}</td><td>${l}</td><td class="dim">${f}</td></tr>`
            );
          })
          .join("");
        return {
          html: `<div class="gview"><table class="tbl"><thead><tr><th>${translate("中方格")}</th><th>${translate("你的计数")}</th><th>${translate("参考值")}</th></tr></thead><tbody>${h}</tbody></table><div class="kv2"><span>${translate("5 个中方格合计")}</span><b>${c}</b><span>${translate("稀释倍数")}</span><b>${o.dilution}</b><span>${translate("酵母菌密度")}</span><b class="hi">${c ? Na(c, o.dilution).toExponential(2).replace("e+", " × 10^") : "—"} ${translate("个/mL")}</b><span>${translate("参考值")}</span><b>${d ? Na(d, o.dilution).toExponential(2).replace("e+", " × 10^") : "—"}</b></div><p class="tnote">${translate("压在方格线上的细胞：计上不计下，计左不计右。一个方格内的细胞太多、数不过来时，应加大稀释倍数。")}</p></div>`,
        };
      },
      csv: (n) =>
        n === "count"
          ? [
              ["x/um", "y/um"],
              ...[...e.values()].map((s) => [s.x.toFixed(1), s.y.toFixed(1)]),
            ]
          : null,
    };
  return o;
}
const ed = {
    parts: Yf,
    operate: _f,
    image: Hf,
    highpower: Gf,
    dust: Xf,
    stain: Vf,
    live: Kf,
    mitosis: Zf,
    oil: Qf,
    measure: Jf,
    count: td,
    contrast: () => ({}),
    free: () => ({}),
  },
  qs = 160,
  St = 128;
function yi(t) {
  return Object.assign(document.createElement("canvas"), {
    width: t,
    height: t,
  });
}
let K0 = null;
function od(t) {
  K0 ||= gc(qs);
  const [e, o, n] = t.thumbView || [...(t.start || [0, 0]), 600],
    s = n < 160 ? 100 : n < 700 ? 40 : 10,
    a = {
      reagent: () => 0,
      plas: () => 0,
      time: 0,
      cotton: !0,
      cracked: null,
      dust: null,
      oiled: !0,
      dilution: 1,
      objMag: s,
      zFocus: t.layers?.[1] ?? 0,
    };
  K0.invalidate();
  const r = K0.ensure(
      t,
      {
        cx: e,
        cy: o,
        upp: 1e-6,
        r: n / 2,
      },
      a,
      `thumb-${t.id}`,
    ),
    i = (n / r.span) * qs,
    c = (qs - i) / 2,
    d = yi(St),
    h = d.getContext("2d");
  ((h.fillStyle = "#fff"),
    h.fillRect(0, 0, St, St),
    (h.globalCompositeOperation = "multiply"));
  for (const M of K0.abs) h.drawImage(M, c, c, i, i, 0, 0, St, St);
  const u = yi(St),
    l = u.getContext("2d");
  if (
    ((l.globalCompositeOperation = "lighter"),
    l.drawImage(K0.ph, c, c, i, i, 0, 0, St, St),
    t.dynamic)
  ) {
    const M = t.dynamic.init(7, t);
    for (let L = 0; L < 20; L++) t.dynamic.step(M, 0.05, a);
    const g = K0.dynamic(
        t,
        {
          cx: e,
          cy: o,
          r: n / 2,
        },
        M,
        a,
      ),
      w = (n / g.span) * K0.dynSize,
      $ = (K0.dynSize - w) / 2;
    (h.drawImage(K0.dA, $, $, w, w, 0, 0, St, St),
      l.drawImage(K0.dP, $, $, w, w, 0, 0, St, St));
  }
  h.globalCompositeOperation = "source-over";
  const f = h.getImageData(0, 0, St, St),
    y = l.getImageData(0, 0, St, St).data,
    b = new Float32Array(St * St);
  for (let M = 0; M < b.length; M++)
    b[M] = (y[M * 4] + y[M * 4 + 1] + y[M * 4 + 2]) / ma;
  const m = f.data,
    x = St / 2,
    k = St / 2 - 1;
  for (let M = 0; M < St; M++)
    for (let g = 0; g < St; g++) {
      const w = M * St + g,
        $ = w * 4,
        L = b[w + (g < St - 1 ? 1 : 0)] - b[w - (g > 0 ? 1 : 0)],
        j = b[w + (M < St - 1 ? St : 0)] - b[w - (M > 0 ? St : 0)],
        T = Math.min(0.55, Math.hypot(L, j) * 0.9),
        S = Math.hypot(g + 0.5 - x, M + 0.5 - x) / k,
        R = 1 - 0.25 * S * S;
      ((m[$] = m[$] * (1 - T) * R),
        (m[$ + 1] = m[$ + 1] * (1 - T) * 0.985 * R),
        (m[$ + 2] = m[$ + 2] * (1 - T) * 0.94 * R),
        (m[$ + 3] = S > 1 ? 0 : S > 0.97 ? (255 * (1 - S)) / 0.03 : 255));
    }
  return (h.putImageData(f, 0, 0), d);
}
function nd(t, e) {
  let o = 0;
  const n = () => {
    if (o >= t.length) return;
    const s = t[o++];
    try {
      e(s, od(s));
    } catch (a) {
      console.warn("thumb", s.id, a);
    }
    (window.requestIdleCallback || ((a) => setTimeout(a, 16)))(n, {
      timeout: 200,
    });
  };
  setTimeout(n, 300);
}
const Us = Symbol("cancel"),
  sd = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);
function ad(t) {
  const { S: e, stage: o } = t,
    n = e.s,
    s = document.getElementById("demoBar"),
    a = document.getElementById("demoTag");
  let r = 0,
    i = 0,
    c = null;
  const d = new ht(),
    h = () => [
      translate(
        "研究级显微镜由光源、聚光器、载物台、物镜转换器、目镜和调焦机构组成。下面按规范步骤演示一遍。",
      ),
      translate("打开电源，转动亮度调节旋钮，把光源调到适中的亮度。"),
      translate(
        "转动物镜转换器，使 4× 低倍物镜对准光路，听到“咔”的一声即转到位。",
      ),
      translate("把玻片放到载物台上，盖玻片朝上，用玻片夹夹好。"),
      translate("转动载物台移动旋钮，把标本移到通光孔的正中央。"),
      translate(
        "眼睛从侧面看着物镜，转动粗准焦螺旋，使载物台上升到接近物镜（不要碰到玻片）。",
      ),
      translate(
        "眼睛看着目镜，反向慢慢转动粗准焦螺旋使载物台下降，直到视野中出现物像。",
      ),
      translate("再转动细准焦螺旋，使物像最清晰。"),
      translate(
        "调节聚光器下的孔径光阑：缩小时对比度增强、景深变大，开大时分辨率更高。一般开到物镜孔径的 2/3 左右。",
      ),
      translate(
        "换高倍镜：先把要观察的细胞移到视野中央，再转动转换器换上 40× 物镜。物镜是齐焦的，换镜后物像仍基本清楚。",
      ),
      translate("高倍镜下只能用细准焦螺旋微调；视野变暗了，就把光源调亮一些。"),
      translate("转动聚光器转盘，还可以切换暗场和相差照明，观察透明的结构。"),
      translate("演示结束。显微镜已经调好，现在轮到你亲手操作了！"),
    ],
    u = (T) => {
      if (T !== i) throw Us;
    };
  function l(T, S, R) {
    return new Promise((C, A) => {
      const D = performance.now(),
        W = (O) => {
          if (T !== i) return A(Us);
          const N = Math.min(1, (O - D) / (S * 1e3));
          (R(sd(N), N), N >= 1 ? C() : requestAnimationFrame(W));
        };
      requestAnimationFrame(W);
    });
  }
  const f = (T, S) => l(T, S, () => {});
  function y(T, S, R, C = 1.2) {
    const A = e.rig.anchors[S],
      D = A ? A.getWorldPosition(new ht()) : new ht(0, 0.15, 0);
    return (
      o.fly([D.x + R[0], D.y + R[1], D.z + R[2]], [D.x, D.y, D.z], C),
      f(T, C)
    );
  }
  function b(T, S, R, C) {
    const A = S === "coarse" ? vi : ki,
      D = n.b;
    return l(T, C, (W) => {
      const O = D + (R - D) * W;
      vc(n, S, ((O - n.b) / A) * Math.PI * 2);
    });
  }
  function m(T, S, R, C) {
    const A = n[S];
    return l(T, C, (D) => {
      ((n[S] = A + (R - A) * D), t.sync(S, n[S]));
    });
  }
  const x = () => Yt + (e.spec?.layers[1] ?? 0) / 1e3;
  function k(T, S, R) {
    s.querySelector(".dn").textContent =
      `${String(T + 1).padStart(2, "0")} / ${String(S).padStart(2, "0")}`;
    const C = s.querySelector(".dt");
    ((C.textContent = R),
      C.classList.remove("in"),
      C.offsetWidth,
      C.classList.add("in"),
      (s.querySelector(".dp i").style.width = `${((T + 1) / S) * 100}%`));
  }
  const M = (T) => (c = T);
  function g() {
    if (!i || !c || e.eyeBig || !e.rig.anchors[c]) {
      a.hidden = !0;
      return;
    }
    const T = o.project(e.rig.anchors[c].getWorldPosition(d));
    ((a.hidden = T.behind),
      (a.textContent = t.partName(c)),
      (a.style.transform = `translate(${T.x.toFixed(1)}px, ${T.y.toFixed(1)}px)`));
  }
  async function w(T) {
    const S = h(),
      R = S.length,
      C = (N) => {
        (u(T), k(N, R, S[N]));
      };
    (t.prepare(),
      (n.lamp = 0),
      (n.iris = 0.7),
      (n.cond = "bf"),
      (n.b = Yt + 12),
      t.sync("lamp", 0),
      t.sync("iris", 0.7),
      t.sync("cond", "bf"),
      t.switchObjective(1),
      (n.nose = 1),
      C(0),
      M(null),
      o.fly([0.5, 0.42, 0.72], [-0.02, 0.14, -0.03], 1.4),
      await f(T, 4.5),
      C(1),
      M("brightness"),
      await y(T, "brightness", [0.27, 0.1, 0.33]),
      await m(T, "lamp", 0.55, 2.2),
      await f(T, 1.2),
      C(2),
      M("nosepiece"),
      await y(T, "nosepiece", [0.27, 0.05, 0.34]),
      t.switchObjective(0),
      await f(T, 2.6),
      C(3),
      M("stage"),
      await y(T, "stage", [0.24, 0.2, 0.36]),
      t.loadSlide("purpleOnion", {
        x: 2600,
        y: -1500,
      }),
      await f(T, 2.6),
      C(4),
      M("stageKnob"),
      await y(T, "stageKnob", [0.3, 0.12, 0.3]));
    const A = e.spec,
      D = n.slide.x,
      W = n.slide.y;
    (await l(T, 2.4, (N) =>
      t.moveSlide(D + (A.start[0] - D) * N, W + (A.start[1] - W) * N),
    ),
      await f(T, 0.8),
      C(5),
      M("objective"));
    const O = e.rig.stageY;
    (o.fly([0.02, O + 0.03, 0.26], [0, O + 0.025, 0], 1.2),
      await f(T, 1.3),
      await b(T, "coarse", Yt - 1.5, 3.2),
      await f(T, 0.8),
      C(6),
      t.setBig(!0),
      await f(T, 0.8),
      await b(T, "coarse", x() + 0.06, 3.6),
      await f(T, 0.6),
      C(7),
      await b(T, "fine", x() + 0.02, 1.2),
      await b(T, "fine", x() + 8e-4, 1.6),
      await f(T, 1.4),
      C(8),
      t.setBig(!1),
      M("iris"),
      await y(T, "iris", [0.27, 0.03, 0.32]),
      await m(T, "iris", 0.18, 2),
      await f(T, 1),
      await m(T, "iris", 0.95, 2),
      await f(T, 0.6),
      await m(T, "iris", 0.6, 1.2),
      await f(T, 0.6),
      C(9),
      M("nosepiece"),
      await y(T, "nosepiece", [0.27, 0.05, 0.34]),
      t.switchObjective(1),
      await f(T, 1.6),
      t.switchObjective(2),
      await f(T, 2.2),
      C(10),
      M("fine"),
      t.setBig(!0),
      await f(T, 0.6),
      await b(T, "fine", x() - 0.004, 1.2),
      await b(T, "fine", x() + 3e-4, 1.6),
      await m(T, "lamp", 0.8, 1.6),
      await f(T, 1.2),
      C(11),
      (n.cond = "df"),
      t.sync("cond", "df"),
      await f(T, 2.6),
      (n.cond = "ph"),
      t.sync("cond", "ph"),
      await f(T, 2.6),
      (n.cond = "bf"),
      t.sync("cond", "bf"),
      await f(T, 1),
      C(12),
      M(null),
      t.setBig(!1),
      o.fly([0.5, 0.42, 0.72], [-0.02, 0.14, -0.03], 1.4),
      await f(T, 4));
  }
  async function $() {
    const T = (i = ++r);
    (document.body.classList.add("demo"), (s.hidden = !1));
    try {
      await w(T);
    } catch (S) {
      S !== Us && console.error(S);
    }
    T === i && L();
  }
  function L() {
    ((i = 0),
      (c = null),
      (a.hidden = !0),
      (s.hidden = !0),
      document.body.classList.remove("demo"),
      t.done());
  }
  function j() {
    i && L();
  }
  return (
    s.querySelector(".stop").addEventListener("click", j),
    {
      start: $,
      stop: j,
      update: g,
      get running() {
        return !!i;
      },
    }
  );
}
const Be = (t) =>
    t >= 1e3
      ? `${(t / 1e3).toFixed(t >= 1e4 ? 1 : 2)} mm`
      : t >= 10
        ? `${t.toFixed(0)} µm`
        : `${t.toFixed(t >= 1 ? 1 : 2)} µm`,
  bi = () => ({
    iodine: translate("碘液"),
    methylene: translate("亚甲蓝"),
    sucrose: translate("蔗糖溶液"),
    water: translate("清水"),
    stainR: translate("甲紫溶液"),
  });
function rd() {
  const t = (P) => document.getElementById(P),
    e = Vc(t("c3"), {
      pixelRatio: 1.5,
      maxDegrade: 1,
    }),
    { scene: o, camera: n, controls: s } = e;
  ((n.near = 0.005),
    (n.far = 30),
    (n.fov = 40),
    n.updateProjectionMatrix(),
    (s.minDistance = 0.08),
    (s.maxDistance = 2.4),
    (s.maxPolarAngle = Math.PI * 0.495),
    (e.floor.position.y = -0.76),
    e.key.position.set(-0.9, 1.6, 1),
    e.key.target.position.set(0, 0.1, 0),
    (e.key.intensity = 15),
    (e.key.angle = 0.5),
    (e.key.shadow.camera.near = 0.5),
    (e.key.shadow.camera.far = 4),
    (e.renderer.toneMappingExposure = 1.05),
    (e.bloom.threshold = 1.6),
    (e.bloom.strength = 0.18),
    (o.fog.near = 2.5),
    (o.fog.far = 9));
  const a = new Hc("#dfe9ff", 1.1);
  (a.position.set(-1.2, 0.9, 0.9), o.add(a));
  const r = Sl(o, io),
    i = {
      student: vl(),
      research: Ll(),
    };
  for (const P of Object.values(i)) (o.add(P.root), (P.root.visible = !1));
  const c = gc(1280),
    d = vf(t("eyeC"), c),
    h = t("eyeO"),
    u = h.getContext("2d"),
    l = {
      li: 0,
      lesson: null,
      s: hi(),
      rig: null,
      spec: null,
      slideObj: null,
      R: Fs(),
      rt: 0,
      time: 0,
      timeScale: 1,
      stainVer: 0,
      placed: !0,
      placeAnim: null,
      noseTarget: 0,
      diaA: 1,
      lowered: !1,
      usedFine: !1,
      lastFineAt: -1,
      proc: null,
      log: [],
      labels: !1,
      dragMode: "image",
      explode: 0,
      explodeOn: !1,
      cotton: !0,
      reticle: !1,
      eyeBig: !1,
      tool: "move",
      dyn: null,
      hoverPart: null,
      hoverEye: null,
      pupil: [0, 0],
      pupilT: [0, 0],
      records: {},
      feature: null,
      dirty: !0,
    },
    f = l.s,
    y = {
      S: l,
      get s() {
        return l.s;
      },
      get img() {
        return V0(l.s);
      },
      get spec() {
        return l.spec;
      },
      get lesson() {
        return l.lesson;
      },
      get records() {
        return (l.records[l.lesson.id] ||= []);
      },
      flash: R,
      logEvent: j,
      renderActs: () => Gt(),
      refreshDock: () => Nt(!0),
      loadSlide: (P, I) => m(P, I),
      setObjective: (P) => w(P),
      center: () => [f.slide?.x ?? 0, f.slide?.y ?? 0],
      moveSlide: (P, I) => k(P, I),
      opts: () => b(),
      toScreen: (P, I) => d.toScreen(P, I, A()),
      toSlide: (P, I) => d.toSlide(P, I, A()),
      rotateEyepiece: (P) =>
        (l.eyeRotTarget = (l.eyeRotTarget ?? f.eyeRot) + P),
      applyReagent: (P) => C(P),
      invalidate: () => c.invalidate(),
      partName: (P) => Je[P]?.[0] || P,
      project: (P) => e.project(P),
      tmpV: new ht(),
    };
  function b() {
    const P = l.rt;
    return {
      reagent: (I, E) => (di.includes(I) ? zf(l.R, I, E, P) : 0),
      plas: (I) => Wf(l.R, I, P),
      time: P,
      cotton: l.cotton,
      cracked: f.slide?.cracked ? f.slide.crackAt : null,
      dust: f.dust?.where === "slide" ? f.dust.at : null,
      oiled: !!f.slide?.oiled,
      dilution: l.feature?.dilution ?? 1,
      objMag: d0[f.obj].mag,
      zFocus: (f.b - Yt) * 1e3,
    };
  }
  function m(
    P,
    { x: I = null, y: E = null, clipped: B = !0, animate: q = !0 } = {},
  ) {
    x();
    const nt = xe(P);
    if (!nt) return;
    ((l.spec = nt), (l.R = Fs()), l.stainVer++, (l.rt = 0));
    const It = nt.start || [0, 0];
    f.slide = {
      id: P,
      x: I ?? It[0],
      y: E ?? It[1],
      clipped: B,
      oiled: !1,
      cracked: !1,
      crackAt: null,
    };
    const gt = Ii(nt);
    ((l.slideObj = gt),
      (gt.userData.drag = "slide"),
      (gt.userData.part = "slideBox"),
      gt.traverse(
        (Ee) => Ee.isMesh && ((Ee.castShadow = !0), (Ee.receiveShadow = !0)),
      ));
    const e0 = new _(
      new Te(0.022, 0.022),
      new Jo({
        color: "#8a5a1a",
        transparent: !0,
        opacity: 0,
        depthWrite: !1,
      }),
    );
    ((e0.rotation.x = -Math.PI / 2),
      (e0.position.y = 25e-5),
      gt.add(e0),
      (gt.userData.tint = e0));
    const n0 = new _(
      new en(0.003, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2),
      new Dt({
        color: "#e0a83a",
        roughness: 0.02,
        transmission: 0.6,
        transparent: !0,
        opacity: 0.85,
        thickness: 0.002,
      }),
    );
    ((n0.scale.y = 0.25),
      (n0.visible = !1),
      gt.add(n0),
      (gt.userData.oil = n0));
    const lt = new _(
      new Te(0.022, 0.022),
      new Jo({
        map: M(),
        transparent: !0,
        depthWrite: !1,
      }),
    );
    ((lt.rotation.x = -Math.PI / 2),
      (lt.position.y = 3e-4),
      (lt.visible = !1),
      gt.add(lt),
      (gt.userData.crack = lt),
      l.rig.slideAnchor.add(gt));
    const $0 = r.slides.get(P);
    ($0 && ($0.visible = !1),
      (l.slideAnim = q
        ? {
            k: 0,
            from: $0 ? $0.getWorldPosition(new ht()) : null,
          }
        : null),
      c.invalidate(),
      (l.dyn = nt.dynamic ? nt.dynamic.init(7, nt) : null),
      So(),
      (l.dirty = !0));
  }
  function x() {
    if (
      (l.slideObj &&
        (l.slideObj.parent?.remove(l.slideObj),
        l.slideObj.traverse((P) => P.geometry?.dispose())),
      l.spec)
    ) {
      const P = r.slides.get(l.spec.id);
      P && (P.visible = !0);
    }
    ((l.slideObj = null),
      (l.spec = null),
      (f.slide = null),
      (l.dyn = null),
      c.invalidate());
  }
  function k(P, I) {
    f.slide &&
      ((f.slide.x = Math.max(-3e4, Math.min(3e4, P))),
      (f.slide.y = Math.max(-1e4, Math.min(1e4, I))),
      (l.dirty = !0));
  }
  function M() {
    const P = document.createElement("canvas");
    P.width = P.height = 512;
    const I = P.getContext("2d");
    ((I.strokeStyle = "rgba(255,255,255,.85)"), (I.lineWidth = 1.6));
    let E = 3;
    const B = () => (E = (E * 1664525 + 1013904223) >>> 0) / 4294967296;
    for (let nt = 0; nt < 10; nt++) {
      let It = (nt / 10) * Math.PI * 2,
        gt = 256,
        e0 = 256;
      (I.beginPath(), I.moveTo(gt, e0));
      for (let n0 = 0; n0 < 260; n0 += 12)
        ((It += (B() - 0.5) * 0.5),
          (gt += Math.cos(It) * 12),
          (e0 += Math.sin(It) * 12),
          I.lineTo(gt, e0));
      I.stroke();
    }
    return new A0(P);
  }
  function g(P) {
    if (l.rig?.kind === P) return;
    const I = f.slide?.id,
      E = f.slide?.x,
      B = f.slide?.y,
      q = f.slide?.clipped;
    x();
    for (const nt of Object.values(i)) nt.root.visible = !1;
    ((l.rig = i[P]),
      (l.rig.root.visible = !0),
      (f.kind = P),
      I &&
        m(I, {
          x: E,
          y: B,
          clipped: q,
          animate: !1,
        }),
      So());
  }
  function w(P) {
    if (
      ((P = Math.max(0, Math.min(d0.length - 1, P))),
      P === f.obj && Math.abs(f.nose - P) < 0.01)
    )
      return;
    const I = f.obj,
      E = $f(f, P);
    ((l.noseTarget = P),
      (l.usedFine = !1),
      E === "crash" && $(),
      l.feature?.onObjective?.(I, P));
    const B = Ws(f, D(), {
      type: "objective",
    });
    (B && l.lesson.feature === "highpower" && T(B),
      P === 3 &&
        !f.slide?.oiled &&
        f.slide &&
        R(translate("油镜需要在盖玻片上滴香柏油")),
      J("obj", P),
      c.invalidate(),
      (l.dirty = !0));
  }
  function $() {
    (f.slide && (f.slide.crackAt = [f.slide.x, f.slide.y]),
      T("crash"),
      (l.shake = 0.4));
    const P = t("eye");
    (P.classList.remove("crash"),
      P.offsetWidth,
      P.classList.add("crash"),
      c.invalidate());
  }
  function L(P, I) {
    if (!l.placed) return;
    const E = vc(f, P, I);
    P === "fine" && ((l.usedFine = !0), (l.lastFineAt = l.time));
    const B = Ws(f, D(), {
      type: P,
      dA: I,
    });
    (B &&
      l.lesson.feature !== "parts" &&
      ((B !== "lower-blind" || !l.warnedBlind) && T(B),
      B === "lower-blind" && (l.warnedBlind = !0)),
      E === "crash" && $(),
      f.b <= Lf && (l.lowered = !0),
      (l.dirty = !0));
  }
  function j(P, I = "info") {
    (l.log.push({
      t: l.time,
      text: P,
      kind: I,
    }),
      l.log.length > 200 && l.log.shift(),
      Nt(!0));
  }
  function T(P) {
    const I = Af(P, translate);
    I && (l.proc && l.proc.violations.push(P), j(I, "bad"), R(I, "bad"));
  }
  let S = 0;
  function R(P, I = "", E = 2600) {
    const B = t("toast");
    ((B.textContent = P),
      (B.className = `show ${I}`),
      clearTimeout(S),
      (S = setTimeout(() => (B.className = ""), E)));
  }
  function C(P) {
    if (!f.slide) {
      R(translate("请先在载物台上放好玻片"));
      return;
    }
    if (P === "paper") {
      Of(l.R, l.rt)
        ? j(translate("用吸水纸在盖玻片另一侧吸引"))
        : R(translate("先在盖玻片一侧滴加试剂，再用吸水纸吸引"));
      return;
    }
    if (P === "oil") {
      ((f.slide.oiled = !f.slide.oiled),
        j(
          f.slide.oiled
            ? translate("在盖玻片上滴加香柏油")
            : translate("用擦镜纸擦去香柏油"),
        ),
        (l.dirty = !0));
      return;
    }
    (Bf(l.R, P, l.rt),
      l.stainVer++,
      (l.dropAnim = {
        k: 0,
        kind: P,
      }),
      j(`${translate("在盖玻片一侧滴加")} ${bi()[P] || P}`));
  }
  function A() {
    const P = V0(f);
    return {
      cx: f.slide?.x ?? 0,
      cy: f.slide?.y ?? 0,
      fov: P.fov,
    };
  }
  function D() {
    const P = V0(f),
      I = l.spec ? l.spec.layers[1] : 0;
    return {
      img: P,
      placed: l.placed,
      sideView: O(),
      lowered: l.lowered,
      usedFine: l.usedFine,
      centered: l.feature?.centered
        ? l.feature.centered()
        : f.slide
          ? Math.hypot(
              f.slide.x - (l.spec?.start?.[0] ?? 0),
              f.slide.y - (l.spec?.start?.[1] ?? 0),
            ) <
            (l.spec?.extent ?? 3e3) * 0.7
          : !1,
      dz: P.zf - I,
      dzLow: 0,
    };
  }
  const W = new ht();
  function O() {
    n.getWorldDirection(W);
    const P = n.position.y - l.rig.stageY,
      I = Math.hypot(n.position.x, n.position.z);
    return P > -0.04 && P < 0.1 && I < 0.6 && Math.abs(W.y) < 0.5;
  }
  function N(P) {
    (l.demoPrep || pt?.stop(),
      (P = (P + Me.length) % Me.length),
      l.feature?.dispose?.(),
      (l.li = P));
    const I = (l.lesson = Me[P]),
      E = I.setup;
    if (
      (g(I.scope),
      Object.assign(f, hi(I.scope), {
        kind: I.scope,
      }),
      (f.slide = null),
      (l.R = Fs()),
      (l.log = []),
      (l.lowered = !1),
      (l.usedFine = !1),
      (l.warnedBlind = !1),
      (l.dragMode = I.dragMode || "image"),
      (l.explodeOn = !1),
      (l.timeScale = 1),
      (l.tool = "move"),
      (l.reticle = I.feature === "measure"),
      (l.eyeRotTarget = 0),
      (f.obj = E.obj ?? 0),
      I.feature === "operate" && (f.obj = 2),
      (l.noseTarget = f.nose = f.obj),
      E.ready
        ? ((f.aperture = 3),
          (f.mirror = {
            ...Qo,
            concave: !1,
          }))
        : ((f.aperture = 0),
          (f.mirror = {
            pitch: -0.1,
            yaw: 0.6,
            concave: !1,
          })),
      (l.diaA = f.aperture),
      (l.placed = E.placed !== !1),
      (l.placeAnim = null),
      l.rig.root.position.set(l.placed ? 0 : 0.42, 0, l.placed ? 0 : -0.36),
      (l.rig.root.rotation.y = l.placed ? 0 : 0.9),
      x(),
      I.slide)
    ) {
      const B = xe(I.slide);
      if (B) {
        const q = E.offset || [0, 0];
        m(I.slide, {
          x: B.start[0] + q[0],
          y: B.start[1] + q[1],
          clipped: !!E.clip,
          animate: !1,
        });
      }
    }
    (E.focused && l.spec
      ? (f.b = Yt + l.spec.layers[1] / 1e3 + 8e-4)
      : E.defocus != null && l.spec
        ? (f.b = Yt + l.spec.layers[1] / 1e3 + E.defocus)
        : (f.b = Yt + 14),
      (f.dust = null),
      (l.feature = ed[I.feature]?.(y) || null),
      (l.proc = l.feature?.procedure || null),
      _0(),
      Lo(),
      Gt(),
      e.fly(...I.cam, 1.2));
    try {
      history.replaceState(null, "", `#${I.id}`);
    } catch {}
    (c.invalidate(), Nt(!0), So(), (l.dirty = !0));
  }
  const V = () => ({
      scope: {
        type: "seg",
        label: translate("显微镜"),
        options: [
          ["student", translate("学生显微镜")],
          ["research", translate("研究显微镜")],
        ],
      },
      obj: {
        type: "seg",
        label: translate("物镜"),
        options: d0.map((P, I) => [I, `${P.mag}×`]),
      },
      eye: {
        type: "seg",
        label: translate("目镜"),
        options: He.map((P, I) => [I, `${P.mag}×`]),
      },
      aperture: {
        type: "seg",
        label: translate("遮光器光圈"),
        options: te.map((P, I) => [I, `${P}`]),
      },
      mirrorFace: {
        type: "seg",
        label: translate("反光镜"),
        options: [
          [!1, translate("平面镜")],
          [!0, translate("凹面镜")],
        ],
      },
      mirrorPitch: {
        type: "range",
        label: translate("反光镜俯仰"),
        min: -0.5,
        max: 1.2,
        step: 0.005,
        show: (P) => `${((P * 180) / Math.PI).toFixed(0)}°`,
      },
      mirrorYaw: {
        type: "range",
        label: translate("反光镜方位"),
        min: -1.6,
        max: 1.6,
        step: 0.005,
        show: (P) => `${((P * 180) / Math.PI).toFixed(0)}°`,
      },
      lamp: {
        type: "range",
        label: translate("光源亮度"),
        min: 0,
        max: 1,
        step: 0.01,
        show: (P) => `${Math.round(P * 100)}%`,
      },
      iris: {
        type: "range",
        label: translate("孔径光阑"),
        min: 0.03,
        max: 1,
        step: 0.01,
        show: (P) => `NA ${(0.9 * P).toFixed(2)}`,
      },
      cond: {
        type: "seg",
        label: translate("照明方式"),
        options: [
          ["bf", translate("明场")],
          ["df", translate("暗场")],
          ["ph", translate("相差")],
        ],
      },
      dragMode: {
        type: "seg",
        label: translate("在视野中拖动"),
        options: [
          ["image", translate("拖图像")],
          ["slide", translate("推玻片")],
        ],
      },
      labels: {
        type: "toggle",
        label: translate("结构标注（悬停视野）"),
      },
      explode: {
        type: "toggle",
        label: translate("分解视图"),
      },
      cotton: {
        type: "toggle",
        label: translate("放入棉花纤维"),
      },
      timeScale: {
        type: "seg",
        label: translate("时间"),
        options: [
          [1, "1×"],
          [4, "4×"],
          [10, "10×"],
        ],
      },
      reticle: {
        type: "toggle",
        label: translate("目镜测微尺"),
      },
      dilution: {
        type: "seg",
        label: translate("稀释倍数"),
        options: [
          [1, "1"],
          [10, "10"],
          [100, "100"],
        ],
      },
    }),
    st = ["aperture", "mirrorFace", "mirrorPitch", "mirrorYaw"],
    ft = ["lamp", "iris", "cond"];
  function F() {
    return {
      scope: f.kind,
      obj: f.obj,
      eye: f.eye,
      aperture: f.aperture,
      mirrorFace: f.mirror.concave,
      mirrorPitch: f.mirror.pitch,
      mirrorYaw: f.mirror.yaw,
      lamp: f.lamp,
      iris: f.iris,
      cond: f.cond,
      dragMode: l.dragMode,
      labels: l.labels,
      explode: l.explodeOn,
      cotton: l.cotton,
      timeScale: l.timeScale,
      reticle: l.reticle,
      dilution: l.feature?.dilution ?? 1,
    };
  }
  const H = [
      "scope",
      "obj",
      "eye",
      "aperture",
      "mirrorFace",
      "lamp",
      "iris",
      "cond",
    ],
    K = [],
    J = (P, I) => K.forEach((E) => E(P, I));
  function ot() {
    const P = (B) =>
        !(f.kind === "research" && st.includes(B)) &&
        !(f.kind === "student" && ft.includes(B)),
      I = (
        f.kind === "student"
          ? ["eye", "aperture", "mirrorFace"]
          : ["eye", "cond", "lamp", "iris"]
      ).filter(P),
      E = l.lesson.controls.filter((B) => P(B) && !H.includes(B));
    ((K.length = 0),
      K.push(Oa(t("illum"), I, F(), dt, V())),
      K.push(Oa(t("controls"), E, F(), dt, V())),
      b0());
  }
  function dt(P, I) {
    (P === "scope"
      ? (g(I),
        Object.assign(f, {
          kind: I,
        }),
        ot(),
        Gt())
      : P === "obj"
        ? w(I)
        : P === "eye"
          ? xt(I)
          : P === "aperture"
            ? (f.aperture = I)
            : P === "mirrorFace"
              ? (f.mirror.concave = I)
              : P === "mirrorPitch"
                ? (f.mirror.pitch = I)
                : P === "mirrorYaw"
                  ? (f.mirror.yaw = I)
                  : P === "lamp"
                    ? (f.lamp = I)
                    : P === "iris"
                      ? (f.iris = I)
                      : P === "cond"
                        ? (f.cond = I)
                        : P === "dragMode"
                          ? (l.dragMode = I)
                          : P === "labels"
                            ? (l.labels = I)
                            : P === "explode"
                              ? (l.explodeOn = I)
                              : P === "cotton"
                                ? (l.cotton = I)
                                : P === "timeScale"
                                  ? (l.timeScale = I)
                                  : P === "reticle"
                                    ? (l.reticle = I)
                                    : l.feature?.onParam?.(P, I),
      (l.dirty = !0),
      Nt(!0));
  }
  function xt(P) {
    ((f.eye = P), J("eye", P), (l.dirty = !0));
  }
  const vt = t("objs");
  ((vt.innerHTML = d0
    .map(
      (P, I) =>
        `<button data-i="${I}" title="${P.mag}× / NA ${P.na.toFixed(2)}${P.oil ? ` · ${translate("油镜")}` : ""}"><i style="background:${P.ring}"></i>${P.mag}×<small>${P.na.toFixed(2)}</small></button>`,
    )
    .join("")),
    vt
      .querySelectorAll("button")
      .forEach((P) => P.addEventListener("click", () => w(+P.dataset.i))));
  const ut = [
      [translate("入门"), ["letterE", "letterShang"]],
      [
        translate("植物"),
        [
          "onion",
          "purpleOnion",
          "starch",
          "peanut",
          "elodea",
          "stomata",
          "leafSection",
          "stem",
          "spirogyra",
          "rootTip",
          "pollen",
        ],
      ],
      [
        translate("人体与动物"),
        ["cheek", "blood", "frogBlood", "muscle", "neuron"],
      ],
      [
        translate("活体与微生物"),
        ["paramecium", "pond", "amoeba", "bacteria", "penicillium", "diatoms"],
      ],
      [translate("测量"), ["micrometer", "hemocytometer"]],
    ],
    ct = t("specMenu"),
    bt = t("specBtn"),
    Z = new Set(ut.flatMap(([, P]) => P)),
    rt = [
      ...ut,
      [translate("其他"), io.map((P) => P.id).filter((P) => !Z.has(P))],
    ];
  ((ct.innerHTML =
    `<div class="smh">${translate("玻片标本")}<span>${io.length}</span></div>` +
    rt
      .filter(([, P]) => P.length)
      .map(
        ([P, I]) =>
          `<div class="grp">${P}</div><div class="sgrid">${I.filter((E) =>
            xe(E),
          )
            .map(
              (E) =>
                `<button data-id="${E}"><i class="th"></i><span><b></b><small></small></span></button>`,
            )
            .join("")}</div>`,
      )
      .join("")),
    ct.querySelectorAll("button[data-id]").forEach((P) => {
      const I = xe(P.dataset.id);
      ((P.querySelector("b").textContent = I.name),
        (P.querySelector("small").textContent = I.latin || ""),
        (P.title = I.name),
        P.addEventListener("click", () => {
          (Ot(), oe(I.id));
        }));
    }));
  const $t = new Map(),
    Tt = (P) => ($t.has(P) ? `<img src="${$t.get(P)}" alt="">` : "");
  nd(io, (P, I) => {
    $t.set(P.id, I.toDataURL());
    const E = ct.querySelector(`[data-id="${P.id}"] .th`);
    (E && (E.innerHTML = Tt(P.id)), l.spec?.id === P.id && (U0 = null));
  });
  function Ft() {
    const P = bt.getBoundingClientRect();
    if (((ct.hidden = !1), window.innerWidth > 980)) {
      const B = t("rp").getBoundingClientRect(),
        q = Math.min(600, B.left - 30);
      (Object.assign(ct.style, {
        width: `${q}px`,
        left: `${B.left - q - 12}px`,
        top: `${B.top}px`,
        bottom: "",
        maxHeight: `${B.height}px`,
      }),
        bt.classList.add("open"),
        ct.querySelector("button.on")?.scrollIntoView({
          block: "nearest",
        }));
      return;
    }
    const I = Math.min(560, window.innerWidth - 20);
    ((ct.style.width = `${I}px`),
      (ct.style.left = `${Math.max(10, Math.min(P.right - I, window.innerWidth - I - 10))}px`));
    const E = window.innerHeight - P.bottom - 16;
    (E > 320
      ? ((ct.style.top = `${P.bottom + 6}px`),
        (ct.style.bottom = ""),
        (ct.style.maxHeight = `${E}px`))
      : ((ct.style.top = ""),
        (ct.style.bottom = `${window.innerHeight - P.top + 6}px`),
        (ct.style.maxHeight = `${P.top - 16}px`)),
      bt.classList.add("open"),
      ct.querySelector("button.on")?.scrollIntoView({
        block: "nearest",
      }));
  }
  function Ot() {
    ((ct.hidden = !0), bt.classList.remove("open"));
  }
  (bt.addEventListener("click", (P) => {
    (P.stopPropagation(), ct.hidden ? Ft() : Ot());
  }),
    document.addEventListener("pointerdown", (P) => {
      !ct.hidden && !P.target.closest("#specMenu, #specBtn") && Ot();
    }),
    window.addEventListener("resize", Ot),
    t("rpScroll").addEventListener("scroll", Ot));
  let U0;
  function oe(P) {
    if (!l.placed) {
      R(translate("请先取镜并安放好显微镜"));
      return;
    }
    l.spec?.id !== P &&
      (m(P, {
        clipped: !0,
      }),
      j(`${translate("把玻片放到载物台上")}：${xe(P)?.name}`),
      Gt(),
      (l.dirty = !0),
      Nt(!0));
  }
  function b0() {
    (vt
      .querySelectorAll("button")
      .forEach((E, B) => E.classList.toggle("on", B === f.obj)),
      ct
        .querySelectorAll("button[data-id]")
        .forEach((E) => E.classList.toggle("on", E.dataset.id === l.spec?.id)));
    const P = l.spec?.id ?? "";
    U0 !== P &&
      ((U0 = P),
      (t("specName").textContent = l.spec
        ? l.spec.name
        : translate("载物台上没有玻片")),
      (t("specLatin").textContent = l.spec?.latin || ""),
      (bt.querySelector(".th").innerHTML = l.spec ? Tt(l.spec.id) : ""));
    const I = t("bScope");
    ((I.textContent =
      f.kind === "student"
        ? translate("换研究显微镜")
        : translate("换学生显微镜")),
      (I.disabled = !l.lesson.controls.includes("scope")),
      (I.title = I.disabled ? translate("这个课题使用固定的显微镜") : ""),
      (t("model").textContent =
        f.kind === "student"
          ? translate("XSP-2C · 学生显微镜（反光镜）")
          : translate("CX-26 · 研究级生物显微镜")));
  }
  t("bScope").addEventListener("click", () =>
    dt("scope", f.kind === "student" ? "research" : "student"),
  );
  const be = [
    [0, translate("认识与操作")],
    [5, translate("观察细胞")],
    [12, translate("测量与技术")],
  ];
  function Y0() {
    const P = t("lMenu");
    ((P.innerHTML = ""),
      Me.forEach((I, E) => {
        const B = be.find(([nt]) => nt === E);
        B &&
          P.insertAdjacentHTML("beforeend", `<div class="grp">${B[1]}</div>`);
        const q = document.createElement("button");
        ((q.innerHTML = `<em>${String(E + 1).padStart(2, "0")}</em><b></b><small></small>`),
          (q.querySelector("b").textContent = I.title),
          (q.querySelector("small").textContent = I.sub),
          q.addEventListener("click", () => {
            ((P.hidden = !0), N(E));
          }),
          P.appendChild(q));
      }));
  }
  (t("lPick").addEventListener("click", (P) => {
    P.stopPropagation();
    const I = t("lMenu");
    ((I.hidden = !I.hidden),
      I.hidden ||
        I.querySelector("button.on")?.scrollIntoView({
          block: "nearest",
        }));
  }),
    document.addEventListener("pointerdown", (P) => {
      P.target.closest("#lMenu, #lPick") || (t("lMenu").hidden = !0);
    }),
    t("bFold").addEventListener("click", () =>
      document.body.classList.toggle("lc-min"),
    ));
  function _0() {
    const P = l.lesson;
    ((t("lNum").textContent = String(l.li + 1).padStart(2, "0")),
      (t("lTitle").textContent = P.title),
      (t("lSub").textContent = P.sub),
      t("lMenu")
        .querySelectorAll("button")
        .forEach((E, B) => E.classList.toggle("on", B === l.li)));
    const I = t("lesson");
    ((I.innerHTML = '<div class="body"></div><ol class="steps"></ol>'),
      (I.querySelector(".body").innerHTML = P.body),
      Se(),
      ot());
  }
  function Se() {
    const P = t("lesson").querySelector(".steps");
    (l.proc
      ? (P.classList.add("check"),
        (P.innerHTML = l.proc.steps
          .map(
            (I, E) =>
              `<li class="${E < l.proc.done ? "ok" : E === l.proc.done ? "cur" : ""}">${I.label}</li>`,
          )
          .join("")))
      : (P.classList.remove("check"),
        (P.innerHTML = l.lesson.steps.map((I) => `<li>${I}</li>`).join(""))),
      (P.hidden = !P.childElementCount));
  }
  function Gt() {
    const P = t("acts"),
      I = [...(l.feature?.actions?.() || [])];
    for (const B of l.lesson.slides || []) {
      const q = xe(B);
      q &&
        B !== l.spec?.id &&
        I.push({
          label: `${translate("换")}：${q.name}`,
          run: () => {
            (m(B, {
              clipped: !0,
            }),
              Gt());
          },
        });
    }
    const E = bi();
    for (const B of l.lesson.reagents || [])
      I.push({
        label:
          B === "paper"
            ? translate("吸水纸引流")
            : translate("滴加{0}", [E[B]]),
        run: () => C(B),
      });
    ((l.lesson.feature === "oil" || l.lesson.feature === "free") &&
      I.push({
        label: f.slide?.oiled ? translate("擦去香柏油") : translate("滴香柏油"),
        run: () => {
          (C("oil"), Gt());
        },
      }),
      (P.innerHTML = I.map(
        (B, q) =>
          `<button class="${B.cls === "go" ? "go" : ""}" data-a="${q}">${B.label}</button>`,
      ).join("")),
      (P.hidden = !I.length),
      P.querySelectorAll("[data-a]").forEach((B) =>
        B.addEventListener("click", () => {
          (I[+B.dataset.a].run(), (l.dirty = !0), Nt(!0));
        }),
      ),
      b0());
  }
  function Xt(P) {
    if (P === "side") {
      const I = l.rig.stageY;
      e.fly([0.02, I + 0.03, 0.26], [0, I + 0.025, 0], 0.9);
    } else
      P === "big" &&
        ((l.eyeBig = !l.eyeBig),
        document.body.classList.toggle("eye-big", l.eyeBig),
        t("bEye").classList.toggle("on", l.eyeBig));
  }
  let H0 = 0;
  function Ke(P, I) {
    if (P - H0 < 100) return;
    H0 = P;
    const E = I.zf - (l.spec?.layers[1] ?? 0),
      B = l.spec && Math.abs(E) < I.dof,
      q = Math.min(1, 1 - Math.exp(-I.bright * 1.4)),
      nt = [
        [
          translate("物镜"),
          `${I.obj.mag}× / ${I.na.toFixed(2)}${I.oiled && I.obj.oil ? " oil" : ""}`,
        ],
        [translate("总放大倍数"), `${I.mag}×`],
        [translate("视野直径"), Be(I.fov)],
        [
          translate("物镜与盖玻片间距"),
          `${Math.max(0, I.gap).toFixed(I.gap < 1 ? 2 : 1)} mm`,
        ],
        [translate("分辨率"), Be(I.res)],
        [translate("景深"), Be(I.dof)],
        [
          translate("焦平面偏离"),
          l.spec
            ? `${E >= 0 ? "+" : "−"}${Math.abs(E) > 1e3 ? (Math.abs(E) / 1e3).toFixed(2) + " mm" : Math.abs(E).toFixed(1) + " µm"}`
            : "—",
          B ? "ok" : "",
        ],
        [translate("视野亮度"), null, q],
        ...(l.feature?.readouts?.() || []),
      ],
      It = t("readouts");
    (It.childElementCount !== nt.length &&
      (It.innerHTML = nt
        .map(
          () => '<div><label></label><b></b><i class="bar"><s></s></i></div>',
        )
        .join("")),
      nt.forEach(([n0, lt, $0], Ee) => {
        const rs = It.children[Ee],
          [Aa, dn, Ea] = rs.children;
        (Aa.textContent !== n0 && (Aa.textContent = n0),
          (dn.hidden = lt == null),
          (Ea.hidden = lt != null),
          lt == null
            ? (Ea.firstChild.style.width = `${($0 * 100).toFixed(1)}%`)
            : (dn.textContent !== lt && (dn.textContent = lt),
              (dn.className = typeof $0 == "string" ? $0 : "")));
      }),
      je(t("magBig"), `${I.mag}×`));
    const gt = t("eyeHud"),
      e0 = `<b>${I.mag}×</b><span>${I.obj.mag}× / ${I.na.toFixed(2)} · ${I.eye.mag}×</span><span>${translate("视野")} ${Be(I.fov)}</span>${l.spec ? `<span class="${B ? "ok" : ""}">Δz ${E >= 0 ? "+" : ""}${Math.abs(E) > 1e3 ? (E / 1e3).toFixed(2) + " mm" : E.toFixed(1) + " µm"}</span>` : ""}`;
    (gt.innerHTML !== e0 && (gt.innerHTML = e0),
      je(t("eyeSlide"), l.spec ? l.spec.name : translate("载物台上没有玻片")),
      b0());
  }
  const je = (P, I) => P.textContent !== I && (P.textContent = I);
  let Vt = null,
    Ze = null,
    ne = null,
    Io = 0;
  function Lo() {
    const I = l.lesson.tabs.filter((B) => B !== "slides");
    ((Vt = I[0] || null),
      (document.querySelector("#lcard .data").hidden = !I.length));
    const E = t("tabs");
    ((E.innerHTML = I.map(
      (B) =>
        `<button data-t="${B}" class="${B === Vt ? "on" : ""}">${Ff()[B] || B}</button>`,
    ).join("")),
      E.querySelectorAll("button").forEach((B) =>
        B.addEventListener("click", () => {
          ((Vt = B.dataset.t),
            E.querySelectorAll("button").forEach((q) =>
              q.classList.toggle("on", q === B),
            ),
            (ne = null),
            Nt(!0));
        }),
      ),
      (ne = null));
  }
  function Nt(P) {
    const I = performance.now();
    if (!P && I - Io < 250) return;
    Io = I;
    const E = t("dockBody"),
      B = Re(Vt);
    if (!B) {
      ((E.innerHTML = ""), (E.dataset.html = ""), (ne = null));
      return;
    }
    if (B.chart) {
      if (
        ((ne !== "chart" || !!B.side != !!E.querySelector(".side")) &&
          ((E.innerHTML = `<div class="dv${B.side ? " split" : ""}"><div class="chost"></div>${B.side ? '<div class="side"></div>' : ""}</div>`),
          (Ze = Kc(E.querySelector(".chost"))),
          (ne = "chart"),
          (E.dataset.html = "")),
        Ze.draw(B.chart),
        B.side)
      ) {
        const q = E.querySelector(".side");
        q.innerHTML !== B.side && (q.innerHTML = B.side);
      }
    } else
      ((ne = "html"),
        E.dataset.html !== B.html &&
          ((E.innerHTML = B.html), (E.dataset.html = B.html), B.bind?.(E)));
  }
  function Re(P) {
    const I = l.feature?.dock?.(P);
    if (I) return I;
    if (P === "log") {
      const E = l.log.slice().reverse();
      return {
        html: `<div class="gview"><table class="tbl log"><thead><tr><th>${translate("时间")}</th><th>${translate("操作")}</th></tr></thead><tbody>${E.map((B) => `<tr class="${B.kind}"><td>${B.t.toFixed(1)} s</td><td>${B.text}</td></tr>`).join("") || `<tr><td></td><td class="dim">${translate("还没有操作记录")}</td></tr>`}</tbody></table>${l.proc ? `<div class="kv2"><span>${translate("完成步骤")}</span><b class="hi">${l.proc.done} / ${l.proc.steps.length}</b><span>${translate("违规操作")}</span><b class="${l.proc.violations.length ? "bad" : ""}">${l.proc.violations.length}</b></div>` : ""}</div>`,
      };
    }
    if (P === "optics") {
      const E = V0(f),
        B = d0
          .map((q, nt) => {
            const It = {
                ...f,
                obj: nt,
                slide: f.slide
                  ? {
                      ...f.slide,
                      oiled: !0,
                    }
                  : {
                      oiled: !0,
                    },
              },
              gt = V0(It);
            return `<tr class="${nt === f.obj ? "cur" : ""}"><td><i class="ring" style="background:${q.ring}"></i>${q.mag}× ${q.oil ? translate("油镜") : ""}</td><td>${q.na.toFixed(2)}</td><td>${q.wd} mm</td><td>${gt.mag}×</td><td>${Be(gt.fov)}</td><td>${Be(gt.res)}</td><td>${Be(gt.dof)}</td><td>${Math.round(
              (gt.bright /
                Math.max(
                  1e-6,
                  V0({
                    ...It,
                    obj: 0,
                  }).bright,
                )) *
                100,
            )}%</td></tr>`;
          })
          .join("");
      return {
        html: `<div class="gview"><table class="tbl cases"><thead><tr><th>${translate("物镜")}</th><th>NA</th><th>${translate("工作距离")}</th><th>${translate("总倍数")}</th><th>${translate("视野直径")}</th><th>${translate("分辨率")}</th><th>${translate("景深")}</th><th>${translate("相对亮度")}</th></tr></thead><tbody>${B}</tbody></table><p class="tnote">${translate("目镜")} ${E.eye.mag}×。${translate("倍数越高：视野越小、越暗、景深越浅、工作距离越短，分辨率越高。")}</p></div>`,
      };
    }
    return P === "parts"
      ? {
          html: `<div class="gview"><table class="tbl parts"><tbody>${(f.kind === "student" ? ["eyepiece", "barrel", "nosepiece", "objective", "stage", "hole", "clip", "diaphragm", "mirror", "coarse", "fine", "arm", "pillar", "base", "joint"] : ["eyepiece", "head", "nosepiece", "objective", "stage", "stageKnob", "condenser", "iris", "lamp", "brightness", "coarse", "fine", "arm", "base"]).map((B) => `<tr class="${l.hoverPart === B ? "cur" : ""}"><td>${Je[B][0]}</td><td>${Je[B][1]}</td></tr>`).join("")}</tbody></table></div>`,
        }
      : P === "slides"
        ? {
            html: `<div class="gview slides">${io.map((E) => `<button class="slidebtn${l.spec?.id === E.id ? " on" : ""}" data-id="${E.id}"><b>${E.name}</b>${E.latin ? `<i>${E.latin}</i>` : ""}</button>`).join("")}</div>`,
            bind: (E) =>
              E.querySelectorAll("[data-id]").forEach((B) =>
                B.addEventListener("click", () => {
                  (m(B.dataset.id, {
                    clipped: !0,
                  }),
                    (l.dirty = !0),
                    Nt(!0));
                }),
              ),
          }
        : null;
  }
  function ss() {
    const P =
      l.feature?.csv?.(Vt) ||
      (Vt === "log"
        ? [
            ["t/s", "event"],
            ...l.log.map((B) => [B.t.toFixed(1), `"${B.text}"`]),
          ]
        : null);
    if (!P?.length) {
      R(translate("当前没有可导出的数据"));
      return;
    }
    const I =
        "\uFEFF" +
        P.map((B) => B.join(",")).join(`
`),
      E = document.createElement("a");
    ((E.href = URL.createObjectURL(
      new Blob([I], {
        type: "text/csv",
      }),
    )),
      (E.download = `microlab-${l.lesson.id}.csv`),
      E.click(),
      setTimeout(() => URL.revokeObjectURL(E.href), 1e3));
  }
  const me = t("partTag"),
    as = Zc(e, {
      start(P) {
        ((P.sum = 0),
          P.kind === "slide" && (P.startXY = [f.slide.x, f.slide.y]));
      },
      move(P, I, E, B) {
        const q = P.kind;
        if (q === "coarse" || q === "fine")
          L(q, -E * (q === "coarse" ? 0.012 : 0.03));
        else if (q === "mirror")
          ((f.mirror.yaw += I * 0.006),
            (f.mirror.pitch = Math.max(
              -0.5,
              Math.min(1.2, f.mirror.pitch - E * 0.006),
            )),
            J("mirrorPitch", f.mirror.pitch),
            J("mirrorYaw", f.mirror.yaw));
        else if (q === "nose")
          ((P.sum += I),
            Math.abs(P.sum) > 40 &&
              (w((f.obj + (P.sum > 0 ? 1 : 3)) % 4), (P.sum = 0)));
        else if (q === "diaphragm")
          ((P.sum += I),
            Math.abs(P.sum) > 28 &&
              ((f.aperture = Math.max(
                0,
                Math.min(te.length - 1, f.aperture + (P.sum > 0 ? 1 : -1)),
              )),
              J("aperture", f.aperture),
              (P.sum = 0)));
        else if (q === "slide" && f.slide) {
          const nt = B(l.rig.slideAnchor.getWorldPosition(new ht()).y);
          if (!nt) return;
          (P.q0 || (P.q0 = nt),
            k(
              P.startXY[0] - (nt.x - P.q0.x) * 1e6,
              P.startXY[1] - (nt.z - P.q0.z) * 1e6,
            ));
        } else
          q === "eyepiece"
            ? ((l.eyeRotTarget = (l.eyeRotTarget ?? f.eyeRot) + I * 0.01),
              l.feature?.onEyeRotate?.())
            : q === "lamp"
              ? ((f.lamp = Math.max(0, Math.min(1, f.lamp - E * 0.004))),
                J("lamp", f.lamp))
              : q === "iris"
                ? ((f.iris = Math.max(0.03, Math.min(1, f.iris + I * 0.004))),
                  J("iris", f.iris))
                : (q === "stageX" || q === "stageY") &&
                  (q === "stageX"
                    ? k(f.slide?.x - E * 20, f.slide?.y)
                    : k(f.slide?.x, f.slide?.y - E * 20));
        l.dirty = !0;
      },
      end() {
        Nt(!0);
      },
      click(P) {
        const I = P.kind;
        if (I === "objective") w(P.obj.userData.obj);
        else if (I === "nose") w((f.obj + 1) % 4);
        else if (I === "diaphragm")
          ((f.aperture = (f.aperture + 1) % te.length),
            J("aperture", f.aperture));
        else if (I === "clip")
          f.slide &&
            ((f.slide.clipped = !f.slide.clipped),
            j(
              f.slide.clipped
                ? translate("用压片夹压住玻片")
                : translate("抬起压片夹"),
            ));
        else if (I === "slideBox") {
          const E = P.obj.userData.spec;
          if (!l.placed) {
            R(translate("请先取镜并安放好显微镜"));
            return;
          }
          const B = Ws(
            f,
            D(),
            {
              type: "slide",
            },
            l.proc,
          );
          (B && T(B),
            m(E, {
              clipped: !1,
            }),
            j(`${translate("把玻片放到载物台上")}：${xe(E)?.name}`),
            l.lesson.feature !== "operate" && (f.slide.clipped = !0));
        } else if (I === "slide")
          f.slide &&
            !f.slide.clipped &&
            ((f.slide.clipped = !0), j(translate("用压片夹压住玻片")));
        else if (I === "reagent") {
          const E = P.obj.userData.reagent;
          (C(E), E === "oil" && Gt());
        } else
          I === "eyeBox"
            ? xt(P.obj.userData.eye)
            : I === "eyepiece"
              ? ((l.eyeRotTarget = (l.eyeRotTarget ?? f.eyeRot) + Math.PI / 3),
                l.feature?.onEyeRotate?.())
              : I === "turret"
                ? ((f.cond = {
                    bf: "df",
                    df: "ph",
                    ph: "bf",
                  }[f.cond]),
                  J("cond", f.cond))
                : I === "iris"
                  ? ((f.iris = f.iris > 0.5 ? 0.15 : 0.85), J("iris", f.iris))
                  : I === "lamp" &&
                    ((f.lamp = f.lamp > 0.05 ? 0 : 0.55), J("lamp", f.lamp));
        ((l.dirty = !0), Nt(!0));
      },
      dblclick(P) {
        P.kind === "mirror" &&
          ((f.mirror.concave = !f.mirror.concave),
          J("mirrorFace", f.mirror.concave));
      },
      wheel(P, I) {
        const E = P.kind,
          B = Math.sign(I.deltaY) * Math.min(1, Math.abs(I.deltaY) / 60);
        if (E === "coarse") L("coarse", -B * 0.09);
        else if (E === "fine") L("fine", -B * 0.12);
        else if (E === "mirror")
          f.mirror.pitch = Math.max(
            -0.5,
            Math.min(1.2, f.mirror.pitch - B * 0.02),
          );
        else if (E === "lamp")
          f.lamp = Math.max(0, Math.min(1, f.lamp - B * 0.03));
        else if (E === "iris")
          f.iris = Math.max(0.03, Math.min(1, f.iris - B * 0.03));
        else return !1;
        return ((l.dirty = !0), !0);
      },
      hover(P, I) {
        const E = P?.part || null;
        if (((l.hoverPart = E), !E || !Je[E])) {
          me.hidden = !0;
          return;
        }
        me.hidden = !1;
        let B = Je[E][0];
        (E === "objective" &&
          P.obj.userData.obj != null &&
          (B = `${B} ${d0[P.obj.userData.obj].mag}×`),
          E === "slideBox" &&
            P.obj.userData.spec &&
            (B = xe(P.obj.userData.spec)?.name || B),
          E === "eyepieceBox" &&
            P.obj.userData.eye != null &&
            (B = `${B} ${He[P.obj.userData.eye].mag}×`),
          (me.innerHTML = `<b>${B}</b><span>${Je[E][1]}</span>`));
        const q = t("app").getBoundingClientRect();
        ((me.style.transform = `translate(${(I.clientX - q.left + 14).toFixed(0)}px, ${(I.clientY - q.top + 12).toFixed(0)}px)`),
          l.lesson.feature === "parts" && Nt(!1));
      },
    });
  function So() {
    const P = [];
    for (const I of [l.rig?.root, r.root])
      I?.traverse((E) => {
        (E.userData.part || E.userData.drag) && P.push(E);
      });
    as.setTargets(P);
  }
  t("eye");
  const Y = h;
  let X = null;
  const at = (P) => {
    const I = Y.getBoundingClientRect();
    return [P.clientX - I.left, P.clientY - I.top];
  };
  (Y.addEventListener(
    "wheel",
    (P) => {
      P.preventDefault();
      const I = P.deltaY || P.deltaX,
        E = Math.sign(I) * Math.min(2.5, Math.abs(I) / 50);
      P.shiftKey ? L("coarse", -E * 0.035) : L("fine", -E * 0.035);
    },
    {
      passive: !1,
    },
  ),
    Y.addEventListener("pointerdown", (P) => {
      if (P.button !== 0) return;
      const [I, E] = at(P);
      (Y.setPointerCapture(P.pointerId),
        (X = {
          x0: I,
          y0: E,
          x: I,
          y: E,
          moved: !1,
          startXY: f.slide ? [f.slide.x, f.slide.y] : null,
          tool: l.tool,
        }),
        l.feature?.onEyeDown?.(X, y.toSlide(I, E)));
    }),
    Y.addEventListener("pointermove", (P) => {
      const [I, E] = at(P),
        B = d.fieldRadius(),
        [q, nt] = d.size();
      if (
        ((l.pupilT = l.eyeBig
          ? [((I - q / 2) / B) * 0.35, (-(E - nt / 2) / B) * 0.35]
          : [0, 0]),
        Math.hypot(...l.pupilT) < 0.3 && (l.pupilT = [0, 0]),
        (l.mouseEye = [I, E]),
        !X ||
          ((X.x = I),
          (X.y = E),
          Math.hypot(I - X.x0, E - X.y0) > 3 && (X.moved = !0),
          !X.moved) ||
          (X.tool !== "move" && l.feature?.onEyeDrag?.(X, y.toSlide(I, E))) ||
          !X.startXY)
      )
        return;
      const It = V0(f).fov / 2 / B,
        gt = (I - X.x0) * It,
        e0 = (E - X.y0) * It,
        n0 = l.dragMode === "slide" ? -1 : 1;
      (k(X.startXY[0] + n0 * gt, X.startXY[1] + n0 * e0),
        l.feature?.onSlideMove?.());
    }),
    Y.addEventListener("pointerup", (P) => {
      if (!X) return;
      const I = X;
      X = null;
      const [E, B] = at(P);
      (I.moved
        ? l.feature?.onEyeUp?.(I, y.toSlide(E, B))
        : l.feature?.onEyeClick?.(y.toSlide(E, B), [E, B], P),
        Nt(!0));
    }),
    Y.addEventListener("pointerleave", () => {
      ((l.pupilT = [0, 0]), (l.mouseEye = null));
    }),
    t("bEye").addEventListener("click", () => Xt("big")),
    t("bExit").addEventListener("click", () => l.eyeBig && Xt("big")));
  for (const P of document.querySelectorAll(".fdial")) {
    let I = null;
    (P.addEventListener("pointerdown", (B) => {
      ((I = B.clientY),
        P.setPointerCapture(B.pointerId),
        P.classList.add("on"));
    }),
      P.addEventListener("pointermove", (B) => {
        if (I == null) return;
        const q = B.clientY - I;
        ((I = B.clientY),
          L(P.dataset.k, -q * (P.dataset.k === "coarse" ? 0.012 : 0.03)));
      }));
    const E = () => {
      ((I = null), P.classList.remove("on"));
    };
    (P.addEventListener("pointerup", E),
      P.addEventListener("pointercancel", E),
      P.addEventListener(
        "wheel",
        (B) => {
          B.preventDefault();
          const q =
            Math.sign(B.deltaY) * Math.min(2.5, Math.abs(B.deltaY) / 50);
          L(P.dataset.k, -q * (P.dataset.k === "coarse" ? 0.03 : 0.035));
        },
        {
          passive: !1,
        },
      ));
  }
  (t("bPrev").addEventListener("click", () => N(l.li - 1)),
    t("bNext").addEventListener("click", () => N(l.li + 1)),
    t("bReset").addEventListener("click", () => e.fly(...l.lesson.cam, 0.9)),
    t("bCsv").addEventListener("click", ss));
  const Pt = Me.findIndex((P) => P.id === "free"),
    pt = ad({
      S: l,
      stage: e,
      sync: (P, I) => J(P, I),
      switchObjective: w,
      loadSlide: (P, I) =>
        m(P, {
          ...I,
          clipped: !0,
        }),
      moveSlide: k,
      partName: y.partName,
      setBig: (P) => l.eyeBig !== P && Xt("big"),
      prepare() {
        ((l.demoPrep = !0),
          l.lesson.id !== "free" && N(Pt),
          f.kind !== "research" && dt("scope", "research"),
          (l.demoPrep = !1),
          x(),
          l.eyeBig && Xt("big"));
      },
      done() {
        (Gt(), Nt(!0));
      },
    });
  t("bDemo").addEventListener("click", () =>
    pt.running ? pt.stop() : pt.start(),
  );
  for (const P of [t("c3"), h])
    P.addEventListener("pointerdown", () => pt.stop(), {
      capture: !0,
    });
  (window.addEventListener("keydown", (P) => {
    if (
      (P.key === "Escape" && (pt.stop(), Ot()),
      P.target.closest?.("input, textarea, select"))
    )
      return;
    const E = V0(f).fov * (P.shiftKey ? 0.2 : 0.05);
    if (P.key === "ArrowRight") k(f.slide?.x - E, f.slide?.y);
    else if (P.key === "ArrowLeft") k(f.slide?.x + E, f.slide?.y);
    else if (P.key === "ArrowUp") k(f.slide?.x, f.slide?.y + E);
    else if (P.key === "ArrowDown") k(f.slide?.x, f.slide?.y - E);
    else if (P.key === ".") N(l.li + 1);
    else if (P.key === ",") N(l.li - 1);
    else if (P.key >= "1" && P.key <= "4") w(+P.key - 1);
    else if (P.key === "v" || P.key === "V") Xt("big");
    else if (P.key === "s" || P.key === "S") Xt("side");
    else if (P.key === "r" || P.key === "R") e.fly(...l.lesson.cam, 0.9);
    else if (P.key === "Escape" && l.eyeBig) Xt("big");
    else return;
    (P.key.startsWith("Arrow") &&
      (P.preventDefault(), l.feature?.onSlideMove?.()),
      (l.dirty = !0));
  }),
    window.addEventListener("hashchange", () => {
      const P = Me.findIndex((I) => `#${I.id}` === location.hash);
      P >= 0 && P !== l.li && N(P);
    }),
    new ResizeObserver(() => Ze?.redraw()).observe(t("dockBody")),
    (y.placeScope = () => {
      l.placed ||
        l.placeAnim ||
        ((l.placeAnim = {
          k: 0,
          from: l.rig.root.position.clone(),
          r0: l.rig.root.rotation.y,
        }),
        j(translate("右手握镜臂、左手托镜座，把显微镜放在实验台略偏左的位置")));
    }),
    Y0());
  const zt = Me.findIndex((P) => `#${P.id}` === location.hash);
  (N(zt >= 0 ? zt : Me.findIndex((P) => P.id === "free")),
    l.lesson.id === "free" &&
      setTimeout(
        () =>
          R(
            translate(
              "视野是模糊的：先转粗准焦螺旋（Shift+滚轮）找到物像，再用细准焦螺旋（滚轮）调清晰",
            ),
            "",
            6e3,
          ),
        1200,
      ));
  let se = performance.now();
  const Ae = {
    og: u,
    overlay: h,
  };
  function Kt(P) {
    const I = Math.max(0, Math.min(0.05, (P - se) / 1e3));
    ((se = P), (l.time += I), (l.rt += I * l.timeScale));
    const E = l.noseTarget - f.nose;
    f.nose += Math.sign(E) * Math.min(Math.abs(E), I * 3.2);
    const B = Math.min(1, Math.abs(l.noseTarget - f.nose) * 2.2);
    if (
      (l.eyeRotTarget != null &&
        (f.eyeRot += (l.eyeRotTarget - f.eyeRot) * Math.min(1, I * 8)),
      (l.diaA += (f.aperture - l.diaA) * Math.min(1, I * 10)),
      (f.diaA = l.diaA),
      (f.clipLift = f.slide && !f.slide.clipped ? 1 : 0),
      l.placeAnim)
    ) {
      const lt = l.placeAnim;
      lt.k = Math.min(1, lt.k + I / 1.6);
      const $0 =
        lt.k < 0.5 ? 2 * lt.k * lt.k : 1 - Math.pow(-2 * lt.k + 2, 2) / 2;
      (l.rig.root.position.lerpVectors(lt.from, new ht(0, 0, 0), $0),
        (l.rig.root.position.y = Math.sin(Math.PI * lt.k) * 0.06),
        (l.rig.root.rotation.y = lt.r0 * (1 - $0)),
        lt.k >= 1 && ((l.placeAnim = null), (l.placed = !0), Gt()));
    }
    ((l.explode += ((l.explodeOn ? 1 : 0) - l.explode) * Math.min(1, I * 5)),
      fn());
    for (const lt of [0, 1])
      ((l.pupil[lt] += (l.pupilT[lt] - l.pupil[lt]) * Math.min(1, I * 6)),
        Math.abs(l.pupilT[lt] - l.pupil[lt]) < 0.001 &&
          (l.pupil[lt] = l.pupilT[lt]));
    l.sideNow = O();
    const q = V0(f);
    if ((l.rig.update(f, q), jc(I), l.proc && Rf(l.proc, f, D()))) {
      Se();
      const lt = l.proc.done >= l.proc.steps.length;
      (R(
        lt
          ? translate("全部步骤完成！")
          : `✓ ${l.proc.steps[l.proc.done - 1].label}`,
        lt ? "ok" : "",
      ),
        j(`✓ ${l.proc.steps[l.proc.done - 1].label}`, "ok"));
    }
    l.feature?.update?.(I);
    const nt = A();
    let It = null,
      gt = null;
    const e0 = l.placed;
    if (l.spec && e0) {
      const lt = b(),
        Ee =
          (l.spec.animated && pi(l.R, l.rt)) || pi(l.R, l.rt)
            ? Math.floor(l.rt * (q.obj.mag >= 40 ? 4 : q.obj.mag >= 10 ? 2 : 1))
            : "s",
        rs = `${l.spec.id}|${l.stainVer}|${Ee}|${f.slide.crackAt ? "c" : ""}|${lt.dust ? "d" : ""}|${f.kind}|${lt.dilution}|${l.cotton}|${lt.objMag}|${lt.oiled}`;
      ((It = c.ensure(
        l.spec,
        {
          cx: nt.cx,
          cy: nt.cy,
          upp: q.fov / 2 / (d.fieldRadius() * (q.obj.mag >= 40 ? 1.5 : 1)),
          r: q.fov / 2,
        },
        lt,
        rs,
      )),
        l.spec.dynamic &&
          l.dyn &&
          (l.spec.dynamic.step(l.dyn, I, lt),
          (gt = c.dynamic(
            l.spec,
            {
              cx: nt.cx,
              cy: nt.cy,
              r: q.fov / 2,
            },
            l.dyn,
            lt,
          ))));
    } else
      It ||
        (It = c.ensure(
          null,
          {
            cx: nt.cx,
            cy: nt.cy,
            upp: q.fov / 2 / d.fieldRadius(),
            r: q.fov / 2,
          },
          {},
          "empty",
        ));
    const n0 = l.shake > 0 ? (l.shake -= I) : 0;
    (d.render({
      cx: nt.cx + (n0 > 0 ? (Math.random() - 0.5) * q.fov * 0.02 : 0),
      cy: nt.cy,
      fov: q.fov,
      comp: It,
      dyn: gt,
      zDyn: l.spec?.dynZ ?? 0,
      zL: l.spec?.layers ?? [0, 0, 0],
      zF: q.zf,
      na: q.na,
      n: q.n,
      naC: q.naC,
      res: q.res,
      dof: q.dof,
      light: e0 ? q.bright * 0.95 : 0.002,
      tint: q.tint,
      mode: l.spec ? q.mode : q.mode === "bf" ? "empty" : q.mode,
      aberr: q.aberration,
      swing: B,
      time: l.time,
      eyeRot: f.eyeRot,
      pupil: l.pupil,
      dustEye: f.dust?.where === "eyepiece" ? 1 : 0,
      dustObj: f.dust?.where === "objective" && f.dust.obj === f.obj ? 1 : 0,
      curvature: q.dof * 0.8 + q.fov * 0.004,
    }),
      kf(Ae, {
        ctx: y,
        S: l,
        img: q,
        eye: d,
        v: nt,
      }),
      Ke(P, q),
      Nt(!1),
      G0(),
      l.eyeBig || e.render(I),
      pt.update(),
      requestAnimationFrame(Kt));
  }
  let Qe = "";
  function G0() {
    const [P, I] = e.size(),
      E =
        window.innerWidth > 980
          ? Math.round((t("rp").offsetWidth + 18) / 2)
          : 0,
      B = `${P}|${I}|${E}`;
    B !== Qe &&
      ((Qe = B), E ? n.setViewOffset(P, I, E, 0, P, I) : n.clearViewOffset());
  }
  function fn() {
    const P = l.explode,
      I = l.rig;
    if (I.explode) return I.explode(P);
    I.nose.objs.forEach((E) => (E.children[0].position.y = -P * 0.03));
    for (const E of I.eyes) E.position.y = P * 0.05;
  }
  function jc(P) {
    const I = l.slideObj;
    if (!I || !f.slide) return;
    const E = new ht(-f.slide.x / 1e6, 0, -f.slide.y / 1e6);
    if (l.slideAnim) {
      const nt = l.slideAnim;
      nt.k = Math.min(1, nt.k + P / 0.7);
      const It = 1 - Math.pow(1 - nt.k, 3);
      if (nt.from) {
        const gt = l.rig.slideAnchor.worldToLocal(nt.from.clone());
        (I.position.lerpVectors(gt, E, It),
          (I.position.y += Math.sin(Math.PI * nt.k) * 0.06));
      } else I.position.copy(E);
      nt.k >= 1 && (l.slideAnim = null);
    } else I.position.copy(E);
    const B = I.userData.tint,
      q = l.R.list[l.R.list.length - 1];
    if (q) {
      const nt = Ic(q, l.rt),
        It = Math.max(0, ns - nt) / 1e6;
      ((B.scale.x = Math.max(0.001, It / 0.022)),
        (B.position.x = 0.011 - It / 2),
        B.material.color.set(
          {
            iodine: "#9a5a14",
            methylene: "#2a5ad0",
            stainR: "#7a1a5a",
            sucrose: "#cfe2ea",
            water: "#d8ecf4",
          }[q.kind] || "#ccc",
        ),
        (B.material.opacity = di.includes(q.kind) ? 0.45 : 0.18));
    } else B.material.opacity = 0;
    ((I.userData.oil.visible = !!f.slide.oiled),
      (I.userData.crack.visible = !!f.slide.cracked),
      f.slide.crackAt && I.userData.crack.position.set(0, 3e-4, 0));
  }
  (requestAnimationFrame(Kt), document.body.classList.add("ready"));
  const Rc = (
    P,
    {
      obj: I = 1,
      z: E = null,
      x: B = null,
      y: q = null,
      cond: nt = null,
      big: It = !0,
      oil: gt = I === 3,
    } = {},
  ) => {
    (P &&
      m(P, {
        x: B,
        y: q,
        animate: !1,
      }),
      f.slide && (f.slide.oiled = gt),
      w(I),
      (f.nose = I),
      f.kind === "student"
        ? ((f.mirror = {
            ...Qo,
            concave: I >= 2,
          }),
          (f.aperture = 4))
        : (f.lamp = I >= 2 ? 0.8 : 0.55),
      nt && (f.cond = nt),
      (f.b = Yt + (E ?? l.spec?.layers[1] ?? 0) / 1e3),
      It !== l.eyeBig && Xt("big"),
      c.invalidate());
  };
  window.__micro = {
    S: l,
    goLesson: N,
    stage: e,
    ctx: y,
    comp: c,
    loadSlide: m,
    switchObjective: w,
    knob: L,
    show: Rc,
    imaging: () => V0(f),
  };
}
function microLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("显微镜实验台 · MicroLab")), rd());
    }, []),
    jsxRuntime.jsxs("div", {
      id: "app",
      children: [
        jsxRuntime.jsx("canvas", {
          id: "c3",
        }),
        jsxRuntime.jsx("div", {
          className: "vignette",
        }),
        jsxRuntime.jsx("div", {
          id: "labels",
        }),
        jsxRuntime.jsx("div", {
          id: "partTag",
          hidden: !0,
        }),
        jsxRuntime.jsxs("header", {
          className: "brand rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "toprow",
              children: [
                jsxRuntime.jsx("a", {
                  className: "back",
                  href: localizedUrl("/"),
                  children: "← WEDULAB",
                }),
                jsxRuntime.jsx(Cc, {}),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "logo",
              children: [
                "MICRO",
                jsxRuntime.jsx("i", {
                  children: "LAB",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "model",
              id: "model",
            }),
            jsxRuntime.jsx("div", {
              className: "rule",
            }),
            jsxRuntime.jsx("div", {
              className: "sub",
              children: translate(
                "交互式三维光学模拟 — 亲手转动旋钮，完成对焦",
              ),
            }),
            jsxRuntime.jsxs("button", {
              id: "bDemo",
              className: "demo-btn",
              children: [
                jsxRuntime.jsx("svg", {
                  viewBox: "0 0 16 16",
                  children: jsxRuntime.jsx("path", {
                    d: "M5 3.5v9l7.5-4.5z",
                  }),
                }),
                translate("自动演示研究级显微镜的操作"),
              ],
            }),
          ],
        }),
        jsxRuntime.jsx("div", {
          id: "demoTag",
          className: "ptag hot",
          hidden: !0,
        }),
        jsxRuntime.jsxs("div", {
          id: "demoBar",
          hidden: !0,
          children: [
            jsxRuntime.jsxs("div", {
              className: "dbh",
              children: [
                jsxRuntime.jsx("span", {
                  className: "dk",
                  children: translate("自动演示"),
                }),
                jsxRuntime.jsx("span", {
                  className: "dn",
                }),
                jsxRuntime.jsx("button", {
                  className: "stop",
                  children: translate("停止演示"),
                }),
              ],
            }),
            jsxRuntime.jsx("p", {
              className: "dt",
            }),
            jsxRuntime.jsx("div", {
              className: "dp",
              children: jsxRuntime.jsx("i", {}),
            }),
          ],
        }),
        jsxRuntime.jsx("div", {
          id: "lMenu",
          hidden: !0,
        }),
        jsxRuntime.jsx("div", {
          id: "specMenu",
          hidden: !0,
        }),
        jsxRuntime.jsxs("section", {
          id: "lcard",
          className: "rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "lc-h",
              children: [
                jsxRuntime.jsxs("button", {
                  id: "lPick",
                  className: "lpick",
                  title: translate("选择课题"),
                  children: [
                    jsxRuntime.jsx("em", {
                      id: "lNum",
                    }),
                    jsxRuntime.jsxs("span", {
                      children: [
                        jsxRuntime.jsx("b", {
                          id: "lTitle",
                        }),
                        jsxRuntime.jsx("small", {
                          id: "lSub",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("svg", {
                      viewBox: "0 0 16 16",
                      children: jsxRuntime.jsx("path", {
                        d: "M4 6l4 4 4-4",
                      }),
                    }),
                  ],
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bPrev",
                  title: translate("上一个课题 (,)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M10 3L5 8l5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bNext",
                  title: translate("下一个课题 (.)"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M6 3l5 5-5 5",
                    }),
                  }),
                }),
                jsxRuntime.jsx("button", {
                  className: "ib",
                  id: "bFold",
                  title: translate("收起 / 展开"),
                  children: jsxRuntime.jsx("svg", {
                    viewBox: "0 0 16 16",
                    children: jsxRuntime.jsx("path", {
                      d: "M4 10l4-4 4 4",
                    }),
                  }),
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "lc-b",
              id: "lBody",
              children: [
                jsxRuntime.jsx("div", {
                  id: "lesson",
                }),
                jsxRuntime.jsx("div", {
                  id: "controls",
                }),
                jsxRuntime.jsx("div", {
                  id: "acts",
                }),
                jsxRuntime.jsxs("div", {
                  className: "data",
                  children: [
                    jsxRuntime.jsxs("div", {
                      className: "dh",
                      children: [
                        jsxRuntime.jsx("span", {
                          className: "dl",
                          children: translate("数据坞"),
                        }),
                        jsxRuntime.jsx("div", {
                          className: "tabs",
                          id: "tabs",
                        }),
                        jsxRuntime.jsx("button", {
                          id: "bCsv",
                          className: "mini",
                          title: translate("导出 CSV 数据"),
                          children: "CSV",
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
          ],
        }),
        jsxRuntime.jsxs("aside", {
          id: "rp",
          className: "rise",
          children: [
            jsxRuntime.jsxs("div", {
              className: "sec-h",
              children: [
                jsxRuntime.jsx("span", {
                  children: translate("目镜视野"),
                }),
                jsxRuntime.jsx("b", {
                  id: "magBig",
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              id: "ocSlot",
              children: jsxRuntime.jsxs("div", {
                id: "eye",
                children: [
                  jsxRuntime.jsx("canvas", {
                    id: "eyeC",
                  }),
                  jsxRuntime.jsx("canvas", {
                    id: "eyeO",
                  }),
                  jsxRuntime.jsx("div", {
                    id: "eyeHud",
                  }),
                  jsxRuntime.jsx("div", {
                    id: "eyeSlide",
                  }),
                  jsxRuntime.jsx("div", {
                    id: "eyeHint",
                    children: translate(
                      "滚轮 细准焦 · Shift+滚轮 粗准焦 · 拖动 移动玻片",
                    ),
                  }),
                  jsxRuntime.jsx("button", {
                    id: "bExit",
                    className: "exit",
                    children: translate("ESC 退出目镜"),
                  }),
                  jsxRuntime.jsxs("div", {
                    className: "fdials",
                    children: [
                      jsxRuntime.jsxs("div", {
                        className: "fdial",
                        "data-k": "coarse",
                        title: translate("粗准焦螺旋：上下拖动或滚轮"),
                        children: [
                          jsxRuntime.jsx("i", {}),
                          jsxRuntime.jsx("span", {
                            children: translate("粗"),
                          }),
                        ],
                      }),
                      jsxRuntime.jsxs("div", {
                        className: "fdial fine",
                        "data-k": "fine",
                        title: translate("细准焦螺旋：上下拖动或滚轮"),
                        children: [
                          jsxRuntime.jsx("i", {}),
                          jsxRuntime.jsx("span", {
                            children: translate("细"),
                          }),
                        ],
                      }),
                    ],
                  }),
                  jsxRuntime.jsx("div", {
                    id: "eyePop",
                    hidden: !0,
                  }),
                ],
              }),
            }),
            jsxRuntime.jsx("div", {
              className: "ochint",
              children: translate(
                "拖动视野移动玻片 · 滚轮细调焦 · Shift+滚轮粗调",
              ),
            }),
            jsxRuntime.jsxs("button", {
              id: "specBtn",
              className: "spick",
              title: translate("更换玻片标本"),
              children: [
                jsxRuntime.jsx("i", {
                  className: "th",
                }),
                jsxRuntime.jsxs("span", {
                  children: [
                    jsxRuntime.jsx("em", {
                      children: translate("玻片标本"),
                    }),
                    jsxRuntime.jsx("b", {
                      id: "specName",
                    }),
                    jsxRuntime.jsx("small", {
                      id: "specLatin",
                    }),
                  ],
                }),
                jsxRuntime.jsx("svg", {
                  viewBox: "0 0 16 16",
                  children: jsxRuntime.jsx("path", {
                    d: "M4 6l4 4 4-4",
                  }),
                }),
              ],
            }),
            jsxRuntime.jsxs("div", {
              className: "rp-scroll",
              id: "rpScroll",
              children: [
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("div", {
                      className: "sec-h sm",
                      children: [
                        jsxRuntime.jsx("span", {
                          children: translate("物镜转换"),
                        }),
                        jsxRuntime.jsx("span", {
                          className: "k",
                          children: "1 – 4",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("div", {
                      className: "objs",
                      id: "objs",
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "illum",
                }),
                jsxRuntime.jsxs("div", {
                  className: "actions",
                  children: [
                    jsxRuntime.jsxs("button", {
                      className: "primary",
                      id: "bEye",
                      children: [
                        translate("目镜观察"),
                        jsxRuntime.jsx("kbd", {
                          children: "V",
                        }),
                      ],
                    }),
                    jsxRuntime.jsxs("button", {
                      id: "bReset",
                      children: [
                        translate("复位视角"),
                        jsxRuntime.jsx("kbd", {
                          children: "R",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("button", {
                      id: "bScope",
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  className: "sec-h sm data-h",
                  children: jsxRuntime.jsx("span", {
                    children: translate("成像参数"),
                  }),
                }),
                jsxRuntime.jsx("div", {
                  className: "readouts",
                  id: "readouts",
                }),
              ],
            }),
          ],
        }),
        jsxRuntime.jsx("div", {
          id: "toast",
        }),
      ],
    })
  );
}
export { microLabPage as default };
