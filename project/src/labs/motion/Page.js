// Recovered from public deployment: Page-Bjq3k2Gg.js
// Scene mathematics, shaders, timing and event handlers are preserved.
// Original TS/JSX names and comments were unavailable; see recovery-map.json.
import {
  t as translate,
  r as React,
  j as jsxRuntime,
  b as localizedUrl,
} from "../../core/runtime.js";
import { L as Rs } from "../../components/LanguageSwitcher.js";
import {
  G as J,
  v as Ae,
  b as r,
  B as $e,
  l as be,
  M as me,
  _ as St,
  f as le,
  c as ge,
  L as K,
  y as os,
  T as Je,
  V as Is,
  $ as Ps,
  a0 as as,
  K as ht,
  u as ft,
  w as Lt,
  x as Bt,
  m as He,
  X as is,
  N as Qe,
  C as jt,
  P as Gs,
  o as Os,
  I as zs,
  d as qs,
} from "../../vendor/OutputPass-B-cSf-Py.js";
import {
  m as Te,
  s as xe,
  r as ct,
  c as Ds,
  l as At,
  g as _s,
  a as Hs,
} from "../../vendor/theme-aLwyR9RG.js";
import {
  w as Ut,
  r as rs,
  a as Qs,
  p as Se,
  f as Vs,
  t as Ws,
  s as st,
  b as Us,
  c as Js,
  d as Ys,
} from "../../vendor/charts-CzzpgoDB.js";
import { R as Y } from "../../vendor/RoundedBoxGeometry-BuxEdaMS.js";
const _e = [
    {
      id: "tape",
      title: translate("纸带与 v-t 图"),
      sub: "Ticker tape",
      rig: "track",
      params: {
        m: 0.03,
        M: 0.5,
        tape: !0,
        xA: 0.22,
      },
      controls: ["m", "M"],
      tabs: ["tape", "vt", "xt"],
      readouts: ["t", "x", "v", "a"],
      cam: [
        [-0.55, 0.62, 1.5],
        [-0.02, -0.04, 0],
      ],
      body: translate(
        '<p>钩码通过细绳拉动小车，小车拖着纸带穿过<b>打点计时器</b>。计时器每 <b>0.02 s</b> 打一个点，纸带记录下了小车在各个时刻的位置。</p><p>实验结束后在数据坞的<b>纸带</b>页中，每 5 个点取一个<b>计数点</b>（T = 0.1 s），量出相邻计数点的间距 x₁、x₂、x₃……</p><p class="eq">vₙ = (xₙ + xₙ₊₁) / 2T　　a = Δx / T²</p><p>相邻间距之差 Δx 几乎不变，说明小车做<b>匀加速直线运动</b>；用各计数点的速度描出 v-t 图，图线的斜率就是加速度。</p>',
      ),
      steps: [
        translate("按 空格 释放小车"),
        translate("在纸带页查看计数点与间距"),
        translate("切换到 v-t 图，读出斜率"),
        translate("改变钩码质量，再做一次比较"),
      ],
    },
    {
      id: "gates",
      title: translate("光电门测速度"),
      sub: "Photogates",
      rig: "track",
      params: {
        air: !0,
        m: 0.02,
        M: 0.4,
        gates: 2,
        g1: 0.45,
        g2: 0.82,
        d: 0.01,
        xA: 0.22,
      },
      controls: ["g1", "g2", "d", "m"],
      tabs: ["gates", "vt"],
      readouts: ["t", "v", "gate1", "gate2", "aGate"],
      cam: [
        [-0.35, 0.5, 1.15],
        [-0.12, 0.02, 0],
      ],
      body: translate(
        '<p>气垫导轨喷出的气流把滑块托起，摩擦几乎为零。滑块上装有宽度为 <b>d</b> 的挡光片，经过光电门时挡住光束，数字计时器记下挡光时间 Δt。</p><p class="eq">v ≈ d / Δt</p><p>挡光片越窄，Δt 越短，测得的平均速度就越接近滑块经过光电门那一刻的<b>瞬时速度</b>。</p><p>测出两个光电门处的速度 v₁、v₂ 和两门间距 L，就能求出加速度：</p><p class="eq">a = (v₂² − v₁²) / 2L</p><p>可以直接在场景中<b>拖动光电门</b>改变位置。</p>',
      ),
      steps: [
        translate("拖动两个光电门到合适位置"),
        translate("按 空格 释放滑块"),
        translate("读出挡光时间，计算 v₁、v₂ 与 a"),
        translate("换用更宽 / 更窄的挡光片比较"),
      ],
    },
    {
      id: "fall",
      title: translate("自由落体"),
      sub: "Free fall",
      rig: "fall",
      params: {
        object: "steel",
        vacuum: !1,
        h1: 0.3,
        h2: 0.9,
      },
      controls: ["object", "vacuum", "h1", "h2"],
      tabs: ["vt", "xt", "gates"],
      readouts: ["t", "y", "v", "gate1", "gate2", "aGate"],
      cam: [
        [3.3, 0.55, 3.3],
        [1.5, 0.28, 0],
      ],
      body: translate(
        '<p>电磁铁断电，小球由静止释放。频闪光源每隔 0.05 s 闪一次，留下一串<b>残影</b>：越往下间隔越大。</p><p class="eq">h = ½gt²　　v = gt</p><p>利用两个光电门测出 v₁、v₂，可以算出重力加速度 <b>g ≈ 9.8 m/s²</b>。</p><p>换成乒乓球、羽毛再试：空气阻力 F = ½ρC<sub>d</sub>Av² 随速度增大，羽毛很快达到<b>终端速度</b>。把牛顿管<b>抽成真空</b>后，羽毛和钢球下落得一样快。</p>',
      ),
      steps: [
        translate("按 空格 断开电磁铁"),
        translate("观察频闪残影的间距"),
        translate("读出两个光电门的速度，计算 g"),
        translate("换成羽毛，再抽真空比较"),
      ],
    },
    {
      id: "newton",
      title: translate("牛顿第二定律"),
      sub: "a = F / m",
      rig: "track",
      record: "newton",
      params: {
        m: 0.02,
        M: 0.5,
        balance: !0,
        sensor: !1,
        xA: 0.22,
      },
      controls: ["m", "M", "balance", "sensor"],
      tabs: ["fitF", "fitM", "vt", "table"],
      readouts: ["t", "v", "a", "F", "T"],
      cam: [
        [-0.3, 0.7, 1.55],
        [0.05, -0.06, 0],
      ],
      body: translate(
        '<p>探究加速度与力、质量的关系要<b>控制变量</b>：保持小车质量 M 不变改变拉力，或保持拉力不变改变 M。每做完一次就按<b>记录数据</b>。</p><p>① <b>平衡摩擦力</b>：把导轨左端垫高，使小车重力沿斜面的分力抵消摩擦力。</p><p>② 用钩码重力 mg 代替绳的拉力。实际上</p><p class="eq">T = Mmg / (M + m) &lt; mg</p><p>只有 <b>m ≪ M</b> 时才近似相等。钩码加到 100 g 以上，a-F 图线会向下弯曲；打开<b>力传感器</b>直接测拉力，图线又变成直线。</p><p class="eq">a = F / M</p>',
      ),
      steps: [
        translate("保持 M 不变，依次挂 10~60 g 钩码并记录"),
        translate("查看 a-F 图像与拟合直线"),
        translate("保持钩码不变，加配重条改变 M 并记录"),
        translate("挂上 150 g 以上钩码，观察图线弯曲"),
      ],
    },
    {
      id: "friction",
      title: translate("滑动摩擦力"),
      sub: "Sliding friction",
      rig: "track",
      record: "friction",
      params: {
        kind: "block",
        strip: "wood",
        puller: !0,
        u: 0.04,
        n: 0,
        xA: 0.32,
      },
      controls: ["strip", "n", "u"],
      tabs: ["Ft", "fitN", "table"],
      readouts: ["t", "F", "N", "mu"],
      cam: [
        [-0.42, 0.42, 0.95],
        [-0.18, 0.02, 0],
      ],
      body: translate(
        '<p>电机通过弹簧测力计<b>匀速</b>拉动木块。刚开始木块不动，测力计示数逐渐增大，这时是<b>静摩擦力</b>；示数达到最大值的瞬间木块被拉动。</p><p>木块滑动后示数回落并保持稳定，等于<b>滑动摩擦力</b>：</p><p class="eq">f = μN</p><p>在木块上加砝码增大压力 N，或者在导轨上铺毛巾、橡胶垫、毛毡改变接触面，记录稳定后的示数，画出 f-N 图像，斜率就是动摩擦因数 μ。</p><p>改变拉动速度，滑动摩擦力几乎不变。</p>',
      ),
      steps: [
        translate("按 空格 启动电机"),
        translate("在 F-t 图上找到最大静摩擦力"),
        translate("加砝码后重复，按记录数据"),
        translate("更换接触面，比较 μ"),
      ],
    },
    {
      id: "incline",
      title: translate("斜面与力的分解"),
      sub: "Inclined plane",
      rig: "track",
      live: !0,
      params: {
        kind: "block",
        strip: "wood",
        angle: 15,
        n: 0,
        xA: 0.55,
        arrows: !0,
        decomp: !0,
      },
      controls: ["angle", "strip", "n"],
      tabs: ["vt", "at"],
      readouts: ["angle", "Gx", "Gy", "f", "fmax", "a"],
      cam: [
        [-0.2, 0.5, 1.15],
        [-0.3, 0.22, 0],
      ],
      body: translate(
        '<p>把重力 G 沿斜面和垂直斜面分解：</p><p class="eq">G<sub>∥</sub> = G sinθ　　G<sub>⊥</sub> = G cosθ = N</p><p>倾角较小时，静摩擦力与 G<sub>∥</sub> 平衡，木块静止。拖动左端支架的<b>红色旋钮</b>逐渐增大倾角，当</p><p class="eq">G sinθ &gt; μ<sub>s</sub> G cosθ　即　tanθ &gt; μ<sub>s</sub></p><p>木块开始下滑，加速度 a = g(sinθ − μcosθ)。注意临界角与木块质量无关。</p>',
      ),
      steps: [
        translate("拖动红色旋钮改变倾角"),
        translate("观察 G∥ 与静摩擦力的变化"),
        translate("找到木块恰好下滑的临界角"),
        translate("加砝码后再找一次临界角"),
      ],
    },
    {
      id: "elevator",
      title: translate("超重与失重"),
      sub: "Apparent weight",
      rig: "elevator",
      params: {
        profile: "up",
      },
      controls: ["profile"],
      tabs: ["Nt", "at", "vt"],
      readouts: ["t", "a", "v", "N", "scale"],
      cam: [
        [-0.75, 0.9, 1.35],
        [-2.6, -0.15, -1.4],
      ],
      body: translate(
        '<p>电梯里的台秤上放着 5 kg 的砝码。台秤示数等于砝码对秤盘的<b>压力</b>，由牛顿第二定律：</p><p class="eq">N − mg = ma　⇒　N = m(g + a)</p><p>加速度<b>向上</b>（加速上升或减速下降）时 N &gt; mg，叫<b>超重</b>；加速度<b>向下</b>时 N &lt; mg，叫<b>失重</b>；缆绳断开时 a = −g，示数为 0，是<b>完全失重</b>。</p><p>超重、失重时物体的重力 mg 并没有改变，变的只是“视重”。</p>',
      ),
      steps: [
        translate("选择运行方式，按 空格 启动"),
        translate("对照 a-t 图看台秤示数的变化"),
        translate("试试缆绳断开的完全失重"),
      ],
    },
    {
      id: "energy",
      title: translate("机械能守恒"),
      sub: "Energy",
      rig: "track",
      params: {
        angle: 6,
        air: !0,
        M: 0.4,
        xA: 0.25,
        bumperR: "spring",
      },
      controls: ["angle", "air", "M"],
      tabs: ["energy", "vt"],
      readouts: ["t", "v", "Ek", "Ep", "Q", "E"],
      cam: [
        [-0.35, 0.55, 1.45],
        [0, 0.06, 0],
      ],
      body: translate(
        '<p>滑块从倾斜导轨的高处由静止下滑，重力势能转化为动能：</p><p class="eq">mgh = ½mv²</p><p>在气垫导轨上摩擦可以忽略，E<sub>k</sub> + E<sub>p</sub> 保持不变，滑块撞到右端弹簧后几乎能回到原来的高度。</p><p>关闭气泵改用普通导轨，摩擦力做负功，一部分机械能转化为<b>内能 Q</b>：</p><p class="eq">W<sub>G</sub> − fs = ΔE<sub>k</sub></p><p>这就是<b>动能定理</b>。</p>',
      ),
      steps: [
        translate("按 空格 释放滑块"),
        translate("观察能量柱的此消彼长"),
        translate("关闭气泵，比较内能 Q 的增长"),
      ],
    },
    {
      id: "collision",
      title: translate("动量守恒"),
      sub: "Collisions",
      rig: "track",
      flick: !0,
      params: {
        air: !0,
        B: !0,
        M: 0.4,
        MB: 0.4,
        vA: 0.5,
        vB: 0,
        xA: 0.3,
        xB: 0.95,
        collide: "spring",
        gates: 0,
      },
      controls: ["collide", "M", "MB", "vA", "vB"],
      tabs: ["pt", "vt", "collisions"],
      readouts: ["vA", "vB", "p", "Ek"],
      cam: [
        [-0.1, 0.55, 1.3],
        [0, 0.02, 0],
      ],
      body: translate(
        '<p>气垫导轨上两个滑块相碰，外力的合力为零，系统<b>动量守恒</b>：</p><p class="eq">m₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′</p><p>· 装<b>弹簧圈</b>：弹性碰撞，动能也守恒；质量相等时两滑块交换速度。<br>· 装<b>橡胶块</b>：一般碰撞，动能有损失。<br>· 装<b>魔术贴</b>：碰后粘在一起，完全非弹性碰撞，动能损失最大。</p><p>也可以直接<b>拖住滑块甩出去</b>，松手时的速度就是初速度。</p>',
      ),
      steps: [
        translate("选择缓冲器，按 空格 让 A 撞向 B"),
        translate("对比碰前碰后的总动量与总动能"),
        translate("改成质量不等再试"),
        translate("拖住滑块甩出去"),
      ],
    },
    {
      id: "free",
      title: translate("自由实验台"),
      sub: "Sandbox",
      rig: "track",
      flick: !0,
      params: {
        m: 0.03,
        M: 0.5,
        gates: 2,
        g1: 0.5,
        g2: 0.85,
        tape: !0,
        xA: 0.25,
        xB: 1.05,
      },
      controls: [
        "air",
        "angle",
        "m",
        "M",
        "B",
        "MB",
        "collide",
        "tape",
        "gates",
      ],
      tabs: ["vt", "xt", "at", "energy", "gates", "tape"],
      readouts: ["t", "x", "v", "a", "Ek"],
      cam: [
        [-0.05, 0.75, 1.55],
        [0, 0, 0],
      ],
      body: translate(
        "<p>所有元件都开放：切换气垫导轨、调整倾角、挂钩码、加第二辆小车、装光电门和打点计时器，自己设计实验。</p><p>场景中可以直接操作：</p><p>· 拖动<b>小车</b>：设定初位置，甩出去获得初速度<br>· 拖动<b>光电门</b>：改变测量位置<br>· 拖动左端<b>红色旋钮</b>：改变倾角<br>· 点击<b>钩码</b>或桌上的<b>槽码盒</b>：减少 / 增加 10 g</p>",
      ),
      steps: [
        translate("设计一个实验并预测结果"),
        translate("按 空格 运行，查看数据坞"),
        translate("导出 CSV 数据做进一步分析"),
      ],
    },
  ],
  Z = 9.8,
  Ge = 5e-4,
  Ks = 0.02,
  Xs = 0.005,
  Xe = 1e-6,
  Zs = 0.004,
  Tt = {
    wheel: {
      s: 0.03,
      k: 0.02,
    },
    air: {
      s: 0,
      k: 0,
    },
    wood: {
      s: 0.45,
      k: 0.3,
    },
    rubber: {
      s: 0.85,
      k: 0.65,
    },
    towel: {
      s: 0.62,
      k: 0.5,
    },
    felt: {
      s: 0.35,
      k: 0.24,
    },
  },
  ls = 0.1,
  en = 0.04,
  Mt = (n, a) => n.mu.k + (n.mu.s - n.mu.k) * Math.exp(-Math.abs(a) / Zs);
function Jt(n = {}) {
  const a = n.length ?? 1.6,
    i = ((n.angle ?? 0) * Math.PI) / 180,
    l = Math.sin(i),
    g = Math.cos(i),
    d = !!n.air,
    m = n.restitution ?? 0.6,
    L = !!n.stick,
    f = n.endRestitution ?? 0.3,
    b = (n.bodies || []).map((k, F) => ({
      id: k.id ?? String.fromCharCode(65 + F),
      kind: k.kind ?? "cart",
      m: k.mass,
      len: k.len ?? 0.17,
      x: k.x,
      v: k.v ?? 0,
      a: 0,
      f: 0,
      N: 0,
      flag: k.flag ?? 0.01,
      mu: d
        ? Tt.air
        : (k.mu ?? Tt[k.surface ?? (k.kind === "block" ? "wood" : "wheel")]),
      x0: k.x,
    })),
    N = Object.fromEntries(b.map((k) => [k.id, k])),
    x = b.map((k, F) => F),
    B = (k) => (x[k] === k ? k : (x[k] = B(x[k]))),
    u = n.hanger
      ? {
          body: N[n.hanger.body ?? b[0].id],
          m: n.hanger.mass,
          drop: n.hanger.drop ?? 0.7,
          y: 0,
          v: 0,
          taut: !0,
          landed: !1,
          T: 0,
        }
      : null;
  u && (u.anchor = u.body.x);
  const P = n.puller
    ? {
        body: N[n.puller.body ?? b[0].id],
        u: n.puller.speed ?? 0.05,
        k: n.puller.k ?? 60,
        c: n.puller.c ?? 4,
        slack: n.puller.slack ?? 0.01,
        xp: 0,
        F: 0,
        on: n.puller.on ?? !0,
      }
    : null;
  P && (P.xp = P.body.x + P.body.len / 2 - P.slack);
  const T = (n.gates || []).map((k, F) => ({
      id: k.id ?? `g${F + 1}`,
      x: k.x,
      body: null,
      on: null,
    })),
    v = n.tape
      ? {
          body: N[n.tape.body ?? b[0].id],
          dots: [],
        }
      : null,
    w = {
      t: 0,
      steps: 0,
      Q: 0,
      Qc: 0,
      events: [],
      gateLog: [],
      samples: [],
      done: !1,
    },
    A = (k) => en + k.len / 2,
    y = (k) => a - ls - k.len / 2;
  function j() {
    const k = new Map();
    return (
      b.forEach((F, p) => {
        const O = B(p);
        (k.has(O) || k.set(O, []), k.get(O).push(F));
      }),
      [...k.values()]
    );
  }
  const R = (k) => u && u.taut && k.includes(u.body);
  function C(k, F) {
    const p = k[0].v;
    let O = 0,
      W = 0,
      ee = 0,
      S = 0;
    for (const ne of k)
      ((O += ne.m),
        (W += ne.m * Z * l),
        (ne.N = ne.m * Z * g),
        (ee += ne.mu.s * ne.N),
        (S += Mt(ne, p) * ne.N));
    const D = R(k);
    D && ((O += u.m), (W += u.m * Z));
    let H = 0;
    if (P && k.includes(P.body)) {
      const ne = P.body,
        Fe = P.xp - (ne.x + ne.len / 2);
      ((H = Fe > 0 ? P.k * Fe + P.c * ((P.on ? P.u : 0) - p) : 0),
        (H = Math.max(0, H)),
        (P.F = H),
        (W += H));
    }
    let Q, ie;
    Math.abs(p) < Xe
      ? Math.abs(W) <= ee
        ? ((Q = -W), (ie = 0))
        : ((Q = -Math.sign(W) * ee), (ie = (W + Q) / O))
      : ((Q = -Math.sign(p) * S), (ie = (W + Q) / O));
    let ye = p + ie * F;
    Math.abs(p) >= Xe &&
      Math.sign(ye) !== Math.sign(p) &&
      Math.abs(W) <= ee &&
      (ye = 0);
    const ve =
      k.reduce(
        (ne, Fe) => ne + (Math.abs(p) < Xe ? Fe.mu.s : Mt(Fe, p)) * Fe.N,
        0,
      ) || 1;
    for (const ne of k)
      ((ne.f = (Q * ((Math.abs(p) < Xe ? ne.mu.s : Mt(ne, p)) * ne.N)) / ve),
        (ne.a = ie));
    w.Q += Math.abs(Q * (p + ye) * 0.5 * F);
    const ce = (p + ye) * 0.5 * F;
    for (const ne of k) ((ne.v = ye), (ne.x += ce));
    D && ((u.v = ye), (u.y = u.body.x - u.anchor), (u.T = u.m * (Z - ie)));
  }
  function I(k) {
    let F = 1 / 0,
      p = -1 / 0;
    for (const H of k)
      ((F = Math.min(F, H.x - A(H))), (p = Math.max(p, H.x - y(H))));
    const O = k[0].v,
      W = R(k);
    let ee = 0,
      S = null;
    if (
      (F < 0
        ? ((ee = -F), O < 0 && (S = "L"))
        : p > 0 && ((ee = -p), O > 0 && (S = "R")),
      !ee)
    )
      return;
    const D = S ? (W && S === "R" ? 0 : -f * O) : O;
    S &&
      ((w.Qc += 0.5 * k.reduce((H, Q) => H + Q.m, 0) * (O * O - D * D)),
      w.events.push({
        type: "wall",
        side: S,
        t: w.t,
        v: O,
      }));
    for (const H of k) ((H.x += ee), (H.v = Math.abs(D) < 0.01 ? 0 : D));
    W && ((u.v = k[0].v), (u.y = u.body.x - u.anchor));
  }
  const _ = (k) => k.reduce((F, p) => F + p.m, 0) + (R(k) ? u.m : 0);
  function q() {
    const k = b.map((F, p) => p).sort((F, p) => b[F].x - b[p].x);
    for (let F = 0; F < k.length - 1; F++) {
      const p = k[F],
        O = k[F + 1];
      if (B(p) === B(O)) continue;
      const W = b[p],
        ee = b[O],
        S = ee.x - W.x - (W.len + ee.len) / 2;
      if (S > 0) continue;
      const D = j().find((Ne) => Ne.includes(W)),
        H = j().find((Ne) => Ne.includes(ee)),
        Q = _(D),
        ie = _(H),
        ye = -S * (ie / (Q + ie)),
        ve = -S * (Q / (Q + ie));
      (D.forEach((Ne) => (Ne.x -= ye)), H.forEach((Ne) => (Ne.x += ve)));
      const ce = W.v,
        ne = ee.v;
      if (ce - ne <= 0) continue;
      const nt = ((1 + (L ? 0 : m)) * (ce - ne) * Q * ie) / (Q + ie),
        ze = ce - nt / Q,
        qe = ne + nt / ie;
      ((w.Qc +=
        0.5 * Q * ce * ce +
        0.5 * ie * ne * ne -
        0.5 * Q * ze * ze -
        0.5 * ie * qe * qe),
        D.forEach((Ne) => (Ne.v = ze)),
        H.forEach((Ne) => (Ne.v = qe)),
        L && (x[B(p)] = B(O)),
        w.events.push({
          type: "collide",
          t: w.t,
          a: W.id,
          b: ee.id,
          before: [ce, ne],
          after: [ze, qe],
          masses: [Q, ie],
        }));
    }
    u?.taut && ((u.v = u.body.v), (u.y = u.body.x - u.anchor));
  }
  function se(k) {
    if (u) {
      if (u.taut && u.y >= u.drop)
        ((u.taut = !1),
          (u.landed = !0),
          (u.y = u.drop),
          (u.v = 0),
          (u.T = 0),
          w.events.push({
            type: "land",
            t: w.t,
          }));
      else if (!u.taut && u.body.x - u.anchor <= u.y && u.body.v < 0) {
        u.taut = !0;
        const p = j().find((ee) => ee.includes(u.body)),
          O = p.reduce((ee, S) => ee + S.m, 0),
          W = (O * u.body.v) / (O + u.m);
        (p.forEach((ee) => (ee.v = W)), (u.v = W));
      }
    }
  }
  function X(k) {
    for (const F of T)
      for (const p of b) {
        if (!p.flag) continue;
        const O = Math.abs(k.get(p) - F.x) <= p.flag / 2,
          W = Math.abs(p.x - F.x) <= p.flag / 2;
        if (O === W) continue;
        const ee = k.get(p),
          S = p.x,
          H =
            [F.x - p.flag / 2, F.x + p.flag / 2].filter(
              (ye) => (ye - ee) * (ye - S) <= 0 && S !== ee,
            )[0] ?? S,
          Q = S === ee ? 1 : (H - ee) / (S - ee),
          ie = w.t - Ge + Q * Ge;
        if (W) ((F.on = ie), (F.body = p.id));
        else if (F.on != null && F.body === p.id) {
          const ye = ie - F.on,
            ve = {
              gate: F.id,
              body: p.id,
              tOn: F.on,
              tOff: ie,
              dt: ye,
              d: p.flag,
              v: p.flag / ye,
            };
          (w.gateLog.push(ve),
            w.events.push({
              type: "gate",
              ...ve,
            }),
            (F.on = null));
        }
      }
  }
  function t() {
    let k = 0,
      F = 0;
    for (const p of b)
      ((k += 0.5 * p.m * p.v * p.v), (F += -p.m * Z * (p.x - p.x0) * l));
    return (
      u && ((k += 0.5 * u.m * u.v * u.v), (F += -u.m * Z * u.y)),
      {
        Ek: k,
        Ep: F,
        Q: w.Q,
        Qc: w.Qc,
        E: k + F,
      }
    );
  }
  function ue() {
    const k = t();
    w.samples.push({
      t: w.t,
      b: b.map((F) => ({
        x: F.x,
        v: F.v,
        a: F.a,
        f: F.f,
        N: F.N,
      })),
      hy: u ? u.y : 0,
      T: u ? u.T : 0,
      F: P ? P.F : 0,
      xp: P ? P.xp : 0,
      ...k,
    });
  }
  function Me() {
    const k = new Map(b.map((F) => [F, F.x]));
    P?.on && (P.xp += P.u * Ge);
    for (const F of j()) C(F, Ge);
    q();
    for (const F of j()) I(F);
    (se(),
      (w.t += Ge),
      w.steps++,
      X(k),
      v &&
        w.steps % Math.round(Ks / Ge) === 0 &&
        v.dots.push({
          t: w.t,
          x: v.body.x,
        }),
      w.steps % Math.round(Xs / Ge) === 0 && ue());
  }
  return (
    ue(),
    v &&
      v.dots.push({
        t: 0,
        x: v.body.x,
      }),
    {
      state: w,
      bodies: b,
      hanger: u,
      puller: P,
      gates: T,
      tape: v,
      length: a,
      angle: i,
      step(k) {
        const F = w.events.length,
          p = Math.max(0, Math.round((w.t + k) / Ge) - w.steps);
        for (let O = 0; O < p; O++) Me();
        return w.events.slice(F);
      },
      energy: t,
      momentum: () => b.reduce((k, F) => k + F.m * F.v, 0),
      body: (k) => N[k],
      linked: (k, F) => B(b.indexOf(N[k])) === B(b.indexOf(N[F])),
      resting: () => b.every((k) => Math.abs(k.v) < Xe) && (!P || !P.on),
      limits: (k) => [A(k), y(k)],
    }
  );
}
function kt(n, a) {
  if (!n.length) return null;
  if (a <= n[0].t) return n[0];
  if (a >= n[n.length - 1].t) return n[n.length - 1];
  let i = 0,
    l = n.length - 1;
  for (; l - i > 1;) {
    const f = (i + l) >> 1;
    n[f].t <= a ? (i = f) : (l = f);
  }
  const g = n[i],
    d = n[l],
    m = (a - g.t) / (d.t - g.t),
    L = (f, b) => f + (b - f) * m;
  return {
    t: a,
    b: g.b.map((f, b) => ({
      x: L(f.x, d.b[b].x),
      v: L(f.v, d.b[b].v),
      a: d.b[b].a,
      f: d.b[b].f,
      N: d.b[b].N,
    })),
    hy: L(g.hy, d.hy),
    T: d.T,
    F: L(g.F, d.F),
    xp: L(g.xp, d.xp),
    Ek: L(g.Ek, d.Ek),
    Ep: L(g.Ep, d.Ep),
    Q: L(g.Q, d.Q),
    Qc: L(g.Qc, d.Qc),
    E: L(g.E, d.E),
  };
}
const tn = 1.2,
  je = {
    steel: {
      m: 0.0335,
      r: 0.01,
      cd: 0.47,
    },
    pingpong: {
      m: 0.0027,
      r: 0.02,
      cd: 0.47,
    },
    feather: {
      m: 2e-4,
      r: 0.03,
      cd: 1.2,
    },
  },
  Oe = 2e-4;
function sn(n = {}) {
  const a = je[n.object ?? "steel"],
    l = 0.5 * (n.vacuum ? 0 : (n.rho ?? tn)) * a.cd * Math.PI * a.r * a.r,
    g = n.height ?? 1.2,
    d = (n.gates || []).map((N, x) => ({
      id: `g${x + 1}`,
      y: N,
      on: null,
    })),
    m = {
      t: 0,
      y: 0,
      v: 0,
      a: Z,
      steps: 0,
      done: !1,
      gateLog: [],
      samples: [],
    },
    L = n.strobe ?? 0.05,
    f = [
      {
        t: 0,
        y: 0,
      },
    ];
  m.samples.push({
    t: 0,
    y: 0,
    v: 0,
    a: Z,
  });
  function b() {
    const N = m.y,
      x = Z - (l * m.v * Math.abs(m.v)) / a.m,
      B = m.v + x * Oe;
    ((m.y += (m.v + B) * 0.5 * Oe),
      (m.v = B),
      (m.a = x),
      (m.t += Oe),
      m.steps++,
      m.y >= g && ((m.y = g), (m.done = !0)));
    for (const u of d) {
      const P = Math.abs(N - u.y) <= a.r,
        T = Math.abs(m.y - u.y) <= a.r;
      if (P === T) continue;
      const v = T ? u.y - a.r : u.y + a.r,
        w = m.t - Oe + ((v - N) / (m.y - N || 1)) * Oe;
      T
        ? (u.on = w)
        : u.on != null &&
          (m.gateLog.push({
            gate: u.id,
            tOn: u.on,
            tOff: w,
            dt: w - u.on,
            d: 2 * a.r,
            v: (2 * a.r) / (w - u.on),
          }),
          (u.on = null));
    }
    (m.steps % Math.round(0.005 / Oe) === 0 &&
      m.samples.push({
        t: m.t,
        y: m.y,
        v: m.v,
        a: m.a,
      }),
      m.steps % Math.round(L / Oe) === 0 &&
        f.push({
          t: m.t,
          y: m.y,
        }));
  }
  return {
    state: m,
    object: a,
    flashes: f,
    gates: d,
    height: g,
    terminal: l > 0 ? Math.sqrt((a.m * Z) / l) : 1 / 0,
    step(N) {
      const x = Math.max(0, Math.round((m.t + N) / Oe) - m.steps);
      for (let B = 0; B < x && !m.done; B++) b();
    },
  };
}
const cs = {
  up: [
    [1, 0],
    [1.6, 1.5],
    [2.4, 0],
    [1.6, -1.5],
    [1.2, 0],
  ],
  down: [
    [1, 0],
    [1.6, -1.5],
    [2.4, 0],
    [1.6, 1.5],
    [1.2, 0],
  ],
  cut: [
    [1, 0],
    [1.6, 1.5],
    [1.2, 0],
    [1, -Z],
    [(Z * 1 - 1.6 * 1.5) / (2 * Z), 2 * Z],
    [1.5, 0],
  ],
};
function nn(n = {}) {
  const a = cs[n.profile ?? "up"],
    i = n.mass ?? 5,
    l = a.reduce((m, [L]) => m + L, 0),
    g = {
      t: 0,
      y: n.y0 ?? 0,
      v: 0,
      a: 0,
      N: i * Z,
      done: !1,
      samples: [],
    };
  function d(m) {
    let L = n.y0 ?? 0,
      f = 0,
      b = 0,
      N = 0;
    for (const [x, B] of a) {
      const u = Math.min(x, Math.max(0, m - N));
      if (
        ((b = B), (L += f * u + 0.5 * B * u * u), (f += B * u), (N += x), m < N)
      )
        break;
    }
    return (
      m >= l && (b = 0),
      Math.abs(f) < 1e-9 && (f = 0),
      {
        t: m,
        y: L,
        v: f,
        a: b,
        N: Math.max(0, i * (Z + b)),
      }
    );
  }
  return (
    g.samples.push(d(0)),
    {
      state: g,
      total: l,
      mass: i,
      at: d,
      step(m) {
        const L = Math.min(l, g.t + m);
        (Object.assign(g, d(L)), (g.t = L), L >= l && (g.done = !0));
        const f = g.samples[g.samples.length - 1];
        (L - f.t >= 0.02 || g.done) && g.samples.push(d(L));
      },
    }
  );
}
const Et = 0.74,
  ot = 0.03,
  Yt = 0.04,
  Ue = 0.052,
  et = 0.024,
  at = 0.072 - et,
  pe = {
    x0: -1.2,
    x1: 0.8,
    z0: -0.5,
    z1: 0.42,
    top: 0,
    thick: 0.045,
    floor: -0.78,
  },
  $t = {
    wood: 0.008,
    towel: 0.004,
    rubber: 0.003,
    felt: 0.003,
  };
function on() {
  const n = [
      [-0.055, 0],
      [0.055, 0],
      [0.055, 0.008],
      [0.046, 0.008],
      [0.046, 0.032],
      [0.055, 0.032],
      [0.055, 0.04],
      [0.041, 0.04],
      [0.041, 0.036],
      [0.029, 0.036],
      [0.029, 0.04],
      [-0.029, 0.04],
      [-0.029, 0.036],
      [-0.041, 0.036],
      [-0.041, 0.04],
      [-0.055, 0.04],
      [-0.055, 0.032],
      [-0.046, 0.032],
      [-0.046, 0.008],
      [-0.055, 0.008],
    ],
    a = new St();
  return (n.forEach(([i, l], g) => (g ? a.lineTo(i, l) : a.moveTo(i, l))), a);
}
function Kt(n, a, i = 6e-4) {
  const l = new as(n, {
    depth: a,
    bevelEnabled: !0,
    bevelThickness: i,
    bevelSize: i,
    bevelSegments: 2,
    steps: 1,
  });
  return (l.rotateY(Math.PI / 2), l.translate(-a, 0, 0), l);
}
function an(n, a = 1.6) {
  const i = Te(),
    l = new J();
  n.add(l);
  const g = Ut(),
    d = new Ae({
      map: g.map,
      roughnessMap: g.rough,
      roughness: 0.8,
      clearcoat: 0.3,
      clearcoatRoughness: 0.35,
      envMapIntensity: 0.45,
      color: "#b9a593",
    }),
    m = pe.x1 - pe.x0,
    L = pe.z1 - pe.z0,
    f = new r(new Y(m, pe.thick, L, 3, 0.008), d);
  (f.position.set((pe.x0 + pe.x1) / 2, -0.045 / 2, (pe.z0 + pe.z1) / 2),
    l.add(f));
  const b = i.darkSteel,
    N = pe.top - pe.thick - pe.floor;
  for (const S of [pe.x0 + 0.08, pe.x1 - 0.08])
    for (const D of [pe.z0 + 0.08, pe.z1 - 0.08]) {
      const H = new r(new Y(0.05, N, 0.05, 2, 0.006), b);
      (H.position.set(S, pe.floor + N / 2, D), l.add(H));
    }
  const x = new r(new $e(m - 0.16, 0.08, 0.03), b);
  (x.position.set((pe.x0 + pe.x1) / 2, -0.045 - 0.04, pe.z1 - 0.08), l.add(x));
  const B = x.clone();
  ((B.position.z = pe.z0 + 0.08), l.add(B));
  const u = new r(new $e(m - 0.2, 0.015, L - 0.2), b);
  (u.position.set((pe.x0 + pe.x1) / 2, pe.floor + 0.18, (pe.z0 + pe.z1) / 2),
    l.add(u),
    xe(l));
  const P = new J();
  (P.position.set(Et, ot, 0), l.add(P));
  const T = new r(Kt(on(), a), i.alu),
    v = new r(
      new be(a - 0.02, 0.022),
      new me({
        map: rs(a - 0.02),
        roughness: 0.5,
        metalness: 0.3,
      }),
    );
  v.position.set(-a / 2, 0.02, 0.0478);
  const w = new J();
  w.add(T, v);
  for (const S of [-a - 6e-4, 6e-4]) {
    const D = new r(new Y(0.006, 0.042, 0.112, 2, 0.002), i.plastic);
    (D.position.set(S + (S < 0 ? -0.003 : 0.003), 0.021, 0), w.add(D));
  }
  P.add(w);
  const A = new J();
  {
    const S = new St();
    [
      [-0.045, 0],
      [0.045, 0],
      [0.045, 0.014],
      [0.003, Ue],
      [-0.003, Ue],
      [-0.045, 0.014],
    ].forEach(([ve, ce], ne) => (ne ? S.lineTo(ve, ce) : S.moveTo(ve, ce)));
    const D = new r(
      Kt(S, a),
      new me({
        color: "#7d838c",
        metalness: 0.85,
        roughness: 0.55,
        roughnessMap: i.alu.roughnessMap,
        envMapIntensity: 0.7,
      }),
    );
    A.add(D);
    const H = Qs();
    H.repeat.set(10, 1);
    const Q = Math.hypot(0.042, Ue - 0.014);
    for (const ve of [-1, 1]) {
      const ce = new r(
        new be(a - 0.04, Q * 0.9),
        new me({
          map: H,
          color: "#7d838c",
          metalness: 0.8,
          roughness: 0.55,
          envMapIntensity: 0.7,
          polygonOffset: !0,
          polygonOffsetFactor: -1,
          polygonOffsetUnits: -1,
        }),
      );
      (ce.position.set(-a / 2, (0.014 + Ue) / 2 + 4e-4, ve * 0.0235),
        ce.quaternion.setFromUnitVectors(
          new le(0, 0, 1),
          new le(0, 0.042, ve * (Ue - 0.014)).normalize(),
        ),
        A.add(ce));
    }
    const ie = v.clone();
    (ie.position.set(-a / 2, 0.0072, 0.0468), (ie.scale.y = 0.55), A.add(ie));
    for (const ve of [-a - 0.006, 0.006]) {
      const ce = new r(new Y(0.012, 0.07, 0.1, 2, 0.003), i.plastic);
      (ce.position.set(ve, 0.035, 0), A.add(ce));
    }
    const ye = new r(
      new be(0.06, 0.018),
      new ge({
        map: Se(["AIR TRACK", "1.6 m"]),
        toneMapped: !1,
      }),
    );
    (ye.position.set(-a + 0.06, 0.007, 0.0469), A.add(ye));
  }
  ((A.visible = !1), P.add(A), xe(P));
  const y = new J();
  {
    const S = new r(
      new Y(0.22, 0.14, 0.16, 3, 0.012),
      new Ae({
        color: "#2f5d8a",
        metalness: 0.2,
        roughness: 0.45,
        clearcoat: 0.5,
      }),
    );
    S.position.set(Et - a - 0.08, 0.07, -0.3);
    const D = new r(new K(0.045, 0.045, 0.004, 32), i.darkSteel);
    ((D.rotation.x = Math.PI / 2), D.position.set(S.position.x, 0.075, -0.219));
    const H = new r(new K(0.012, 0.012, 0.012, 24), i.chrome);
    ((H.rotation.x = Math.PI / 2),
      H.position.set(S.position.x + 0.07, 0.1, -0.218));
    const Q = new r(
      new be(0.1, 0.025),
      new ge({
        map: Se(["BLOWER", "220V  80W"], {
          bg: "#e9e6df",
          fg: "#1b1d21",
          accent: "#2f5d8a",
        }),
        toneMapped: !1,
      }),
    );
    (Q.position.set(S.position.x - 0.02, 0.12, -0.2195),
      y.add(S, D, H, Q),
      (y.hose = new r(
        new os(),
        new me({
          color: "#d9dcd6",
          roughness: 0.35,
          transparent: !0,
          opacity: 0.85,
        }),
      )),
      y.add(y.hose));
  }
  ((y.visible = !1), l.add(xe(y)));
  const j = new r(new Y(0.06, ot, 0.13, 2, 0.004), i.plastic);
  (j.position.set(Et - 0.06, ot / 2, 0), l.add(xe(j)));
  const R = 0.08,
    C = new J();
  {
    const S = new r(new Y(0.08, 0.012, 0.15, 2, 0.003), i.plastic);
    ((S.position.y = 0.006),
      C.add(S),
      (C.posts = [-0.045, 0.045].map((H) => {
        const Q = new r(new K(0.004, 0.004, 1, 12), i.chrome);
        return ((Q.position.z = H), C.add(Q), Q);
      })),
      (C.screw = new r(new K(0.006, 0.006, 1, 12), i.steel)),
      C.add(C.screw),
      (C.saddle = new r(new Y(0.05, 0.008, 0.13, 2, 0.002), i.aluDark)),
      C.add(C.saddle),
      (C.knob = new r(new K(0.012, 0.012, 0.01, 28), i.red)),
      (C.knob.userData.drag = "jack"),
      C.add(C.knob));
    const D = new r(new Je(0.012, 0.002, 8, 28), i.rubber);
    ((D.rotation.x = Math.PI / 2), C.knob.add(D));
  }
  l.add(xe(C));
  const I = new J();
  {
    const S = new r(new Y(0.03, 0.035, 0.08, 2, 0.003), i.plastic);
    S.position.set(0.015, 0.0175, 0);
    const D = new r(new Y(0.008, 0.026, 0.05, 2, 0.003), i.rubber);
    (D.position.set(0.034, 0.018, 0), I.add(S, D));
  }
  P.add(xe(I));
  const _ = I.clone();
  ((_.rotation.y = Math.PI), (_.position.x = -0.062), P.add(_));
  const q = new J();
  q.position.set(0.044, at, 0);
  {
    const S = [],
      D = et;
    [
      [0.004, -0.007],
      [D, -0.007],
      [D, -0.005],
      [D - 0.004, -0.0015],
      [D - 0.004, 0.0015],
      [D, 0.005],
      [D, 0.007],
      [0.004, 0.007],
    ].forEach(([ce, ne]) => S.push(new Is(ce, ne)));
    const H = new r(
      new Ps(S, 48),
      new Ae({
        color: "#d9d4c8",
        roughness: 0.35,
        clearcoat: 0.6,
        clearcoatRoughness: 0.3,
      }),
    );
    H.rotation.x = Math.PI / 2;
    const Q = new J();
    Q.add(H);
    for (let ce = 0; ce < 5; ce++) {
      const ne = new r(new $e(0.003, D - 0.006, 0.004), i.plasticWhite);
      ne.position.y = (D - 0.006) / 2 + 0.003;
      const Fe = new J();
      ((Fe.rotation.z = (ce / 5) * Math.PI * 2), Fe.add(ne), Q.add(Fe));
    }
    const ie = new r(new K(0.006, 0.006, 0.02, 20), i.chrome);
    ((ie.rotation.x = Math.PI / 2), q.add(Q, ie), (q.spin = Q));
    const ye = new r(new Y(0.06, 0.006, 0.006, 1, 0.002), i.aluDark);
    for (const ce of [-0.012, 0.012]) {
      const ne = ye.clone();
      (ne.position.set(-0.024, -0.012, ce), (ne.rotation.z = 0.5), q.add(ne));
    }
    const ve = new r(new Y(0.02, 0.05, 0.12, 2, 0.003), i.aluDark);
    (ve.position.set(-0.04, -at + 0.025, 0), q.add(ve));
  }
  P.add(xe(q));
  const se = {};
  for (const S of Object.keys($t)) {
    const D = $t[S],
      H = S === "wood" ? Ut().map.clone() : Vs(S);
    S === "wood" ? H.repeat.set(1, 0.25) : H.repeat.set(10, 0.5);
    const Q = new r(
      new Y(
        a - 0.18,
        D,
        S === "wood" ? 0.11 : 0.1,
        2,
        Math.min(0.0015, D / 2.2),
      ),
      new me({
        map: H,
        roughness: S === "rubber" ? 0.8 : 0.9,
        color: S === "wood" ? "#e6c79c" : "#ffffff",
      }),
    );
    (Q.position.set(-a + 0.04 + (a - 0.18) / 2, Yt + D / 2, 0),
      (Q.visible = !1),
      (Q.receiveShadow = !0),
      P.add(Q),
      (se[S] = Q));
  }
  let X = 0,
    t = !1,
    ue = null;
  const Me = new le();
  function k(S, D, H = 0, Q = new le()) {
    return (
      Q.set(S - a, D, H),
      P.updateMatrixWorld(),
      Q.applyMatrix4(P.matrixWorld)
    );
  }
  function F() {
    const S = k(R, 0, 0, Me),
      D = S.y;
    (C.position.set(S.x, 0, 0),
      C.posts.forEach((H) => {
        ((H.scale.y = D - 0.012), (H.position.y = 0.012 + (D - 0.012) / 2));
      }),
      (C.screw.scale.y = D - 0.012),
      (C.screw.position.y = 0.012 + (D - 0.012) / 2),
      (C.saddle.position.y = D - 0.004),
      (C.saddle.rotation.z = -X),
      C.knob.position.set(0, Math.max(0.025, D * 0.55), 0.08),
      (C.knob.rotation.x = Math.PI / 2));
  }
  function p() {
    const S = y.children[0].position.clone().add(new le(0.08, 0, 0.08)),
      D = k(-0.012, 0.035, 0),
      H = new ht([
        S,
        S.clone().add(new le(0.08, -0.05, 0.12)),
        new le(D.x - 0.1, 0.02, 0.1),
        new le(D.x - 0.06, D.y, 0.02),
        D,
      ]);
    (y.hose.geometry.dispose(), (y.hose.geometry = new ft(H, 48, 0.011, 10)));
  }
  function O(S) {
    ((X = (S * Math.PI) / 180),
      (P.rotation.z = -X),
      P.updateMatrixWorld(!0),
      F(),
      t && p());
  }
  function W(S) {
    ((t = S),
      (w.visible = !S),
      (A.visible = S),
      (y.visible = S),
      (I.visible = _.visible = !S),
      S && p());
  }
  function ee(S) {
    ue = S;
    for (const D in se) se[D].visible = D === S;
  }
  return (
    O(0),
    {
      root: l,
      rail: P,
      pulley: q,
      jack: C,
      L: a,
      toWorld: k,
      setAngle: O,
      setAir: W,
      setStrip: ee,
      surface: () => (t ? Ue : Yt + (ue ? $t[ue] : 0)),
      get angle() {
        return X;
      },
      get air() {
        return t;
      },
      jackS: R,
      angleFromHeight: (S) =>
        (Math.asin(Math.max(0, Math.min(0.6, (S - ot) / (a - R)))) * 180) /
        Math.PI,
      pulleyTop: (S = new le()) => k(a + 0.044, at + et, 0, S),
      pulleySide: (S = new le()) => (k(a + 0.044, at, 0, S), (S.x += et), S),
      rod: ct,
    }
  );
}
const dt = 0.17,
  Ve = 0.032,
  rn = 0.1,
  ln = 0.01;
function cn(n, a, i, l, g) {
  const d = [],
    m = i * 24;
  for (let f = 0; f <= m; f++) {
    const b = (f / 24) * Math.PI * 2;
    d.push(new le((f / m) * a, Math.sin(b) * n, Math.cos(b) * n));
  }
  const L = new r(new ft(new ht(d), m * 2, l, 6), g);
  return ((L.userData.len = a), L);
}
function pt(n) {
  const a = new J(),
    i = new r(new Je(0.0055, 0.0013, 8, 20, Math.PI * 1.5), n);
  ((i.rotation.y = Math.PI / 2), (i.position.x = 0.007));
  const l = new r(new K(0.0013, 0.0013, 0.008, 8), n);
  return ((l.rotation.z = Math.PI / 2), (l.position.x = 0.002), a.add(i, l), a);
}
function ds(n, a) {
  const i = Te(),
    l = {};
  for (const g of [-1, 1]) {
    const d = new J();
    d.position.set((g * n) / 2, a, 0);
    const m = new J(),
      L = cn(0.009, 0.026, 5, 9e-4, i.chrome);
    m.add(L);
    const f = new r(new K(0.009, 0.009, 0.002, 20), i.plastic);
    ((f.rotation.z = Math.PI / 2),
      (f.position.x = 0.026),
      m.add(f),
      (m.coil = L),
      (m.cap = f),
      g < 0 && (m.rotation.y = Math.PI));
    const b = new r(
      new Y(0.006, 0.026, 0.05, 2, 0.002),
      new me({
        color: "#3a3d42",
        roughness: 1,
      }),
    );
    b.position.x = g * 0.003;
    const N = new r(new Y(0.008, 0.02, 0.04, 2, 0.003), i.rubber);
    ((N.position.x = g * 0.004),
      d.add(m, b, N),
      (l[g] = {
        group: d,
        spring: m,
        velcro: b,
        rubber: N,
      }));
  }
  return l;
}
const ut = {
  A: "#e8a33d",
  B: "#3fb6b0",
  C: "#d65a4a",
};
function Xt(n = "A") {
  const a = Te(),
    i = new J();
  ((i.userData.drag = "body"), (i.userData.id = n));
  const l = dt,
    g = ut[n] || ut.A,
    d = new J(),
    m = [];
  for (const A of [-0.055, 0.055])
    for (const y of [-0.035, 0.035]) {
      const j = new J();
      j.position.set(A, 0.008, y);
      const R = new r(new K(0.012, 0.012, 0.008, 28), a.rubber);
      R.rotation.x = Math.PI / 2;
      const C = new r(new K(0.007, 0.007, 0.0085, 6), a.chrome);
      ((C.rotation.x = Math.PI / 2), j.add(R, C), d.add(j), m.push(j));
    }
  const L = new r(new K(0.0025, 0.0025, 0.07, 10), a.steel);
  for (const A of [-0.055, 0.055]) {
    const y = L.clone();
    ((y.rotation.x = Math.PI / 2), y.position.set(A, 0.008, 0), d.add(y));
  }
  const f = new r(new Y(l, 0.018, 0.088, 3, 0.004), a.aluDark);
  f.position.y = 0.021;
  const b = new r(new Y(l - 0.01, 0.014, 0.084, 3, 0.005), a.anodize(g));
  b.position.y = 0.036;
  const N = new r(new Y(0.13, 0.003, 0.06, 2, 0.0012), a.plastic);
  N.position.y = 0.0432;
  const x = new r(
    new be(0.05, 0.011),
    new ge({
      map: Se([`CART ${n}`], {
        w: 256,
        h: 56,
        accent: g,
      }),
      toneMapped: !1,
    }),
  );
  (x.position.set(-0.035, 0.021, 0.0446), i.add(d, f, b, N, x));
  const B = new J(),
    u = new r(new Y(0.024, 0.008, 0.012, 1, 0.002), a.plastic);
  u.position.y = 0.047;
  const P = new r(new $e(0.01, 0.04, 0.0012), a.plastic);
  ((P.position.y = 0.068), B.add(u, P), i.add(B));
  for (const A of [-1, 1]) {
    const y = pt(a.steel);
    (y.position.set((A * l) / 2, Ve, 0),
      A < 0 && (y.rotation.y = Math.PI),
      i.add(y));
  }
  const T = ds(l, 0.024);
  i.add(T[-1].group, T[1].group);
  const v = new J();
  (i.add(v), xe(i));
  const w = {
    group: i,
    id: n,
    len: l,
    kind: "cart",
    flag: B,
    setBars(A) {
      for (; v.children.length > A;)
        v.remove(v.children[v.children.length - 1]);
      for (; v.children.length < A;) {
        const y = v.children.length,
          j = new r(new Y(0.11, 0.0055, 0.052, 2, 0.0012), a.steel);
        (j.position.set(0, 0.0465 + y * 0.0058, 0),
          (j.castShadow = j.receiveShadow = !0),
          v.add(j));
      }
      B.position.y = A * 0.0058;
    },
    setBumper(A) {
      for (const y of [-1, 1])
        ((T[y].spring.visible = A === "spring"),
          (T[y].velcro.visible = A === "velcro"),
          (T[y].rubber.visible = A === "none" || !A));
    },
    squash(A, y) {
      const j = T[A].spring;
      ((j.coil.scale.x = 1 - 0.7 * y),
        (j.cap.position.x = 0.026 * (1 - 0.7 * y)));
    },
    spinWheels(A) {
      for (const y of m) y.rotation.z -= A / 0.012;
    },
    setFlag(A) {
      B.visible = A;
    },
  };
  return (w.setBumper("none"), w);
}
function Zt(n = "A") {
  const a = Te(),
    i = new J();
  ((i.userData.drag = "body"), (i.userData.id = n));
  const l = dt,
    g = ut[n] || ut.A,
    d = new St();
  [
    [-0.05, -0.04],
    [-0.044, -0.042],
    [0, 5e-4],
    [0.044, -0.042],
    [0.05, -0.04],
    [0.006, 0.008],
    [-0.006, 0.008],
  ].forEach(([v, w], A) => (A ? d.lineTo(v, w) : d.moveTo(v, w)));
  const m = new as(d, {
    depth: l,
    bevelEnabled: !0,
    bevelSize: 8e-4,
    bevelThickness: 8e-4,
    bevelSegments: 2,
  });
  (m.rotateY(Math.PI / 2), m.translate(-l / 2, 0, 0));
  const L = new r(
      m,
      new me({
        color: "#7f868f",
        metalness: 0.9,
        roughness: 0.5,
        roughnessMap: a.alu.roughnessMap,
        envMapIntensity: 0.75,
      }),
    ),
    f = new r(new Y(l, 0.012, 0.05, 3, 0.004), a.anodize(g));
  f.position.y = 0.012;
  const b = new r(new Y(0.12, 0.003, 0.04, 2, 0.0012), a.plastic);
  b.position.y = 0.019;
  const N = new r(
    new be(0.05, 0.011),
    new ge({
      map: Se([`GLIDER ${n}`], {
        w: 256,
        h: 56,
        accent: g,
      }),
      toneMapped: !1,
    }),
  );
  (N.position.set(-0.03, 0.012, 0.0256), i.add(L, f, b, N));
  const x = new J(),
    B = new r(new $e(0.01, 0.04, 0.0012), a.plastic);
  B.position.y = 0.04;
  const u = new r(new Y(0.024, 0.008, 0.012, 1, 0.002), a.plastic);
  ((u.position.y = 0.022), x.add(B, u), i.add(x));
  for (const v of [-1, 1]) {
    const w = pt(a.steel);
    (w.position.set((v * l) / 2, Ve - 0.012, 0),
      v < 0 && (w.rotation.y = Math.PI),
      i.add(w));
  }
  const P = ds(l, 0.004);
  i.add(P[-1].group, P[1].group);
  const T = new J();
  return (
    i.add(T),
    xe(i),
    {
      group: i,
      id: n,
      len: l,
      kind: "glider",
      flag: x,
      setBars(v) {
        for (; T.children.length > v;)
          T.remove(T.children[T.children.length - 1]);
        for (; T.children.length < v;) {
          const w = T.children.length,
            A = new r(new Y(0.1, 0.0055, 0.038, 2, 0.0012), a.steel);
          (A.position.set(0, 0.0235 + w * 0.0058, 0),
            (A.castShadow = !0),
            T.add(A));
        }
        x.position.y = v * 0.0058;
      },
      setBumper(v) {
        for (const w of [-1, 1])
          ((P[w].spring.visible = v === "spring"),
            (P[w].velcro.visible = v === "velcro"),
            (P[w].rubber.visible = v === "none" || !v));
      },
      squash(v, w) {
        const A = P[v].spring;
        ((A.coil.scale.x = 1 - 0.7 * w),
          (A.cap.position.x = 0.026 * (1 - 0.7 * w)));
      },
      spinWheels() {},
      setFlag(v) {
        x.visible = v;
      },
    }
  );
}
function dn() {
  const n = Te(),
    a = new J();
  ((a.userData.drag = "body"), (a.userData.id = "A"));
  const i = 0.12,
    l = document.createElement("canvas");
  ((l.width = 256), (l.height = 128));
  const g = l.getContext("2d");
  ((g.fillStyle = "#c79a64"), g.fillRect(0, 0, 256, 128));
  for (let N = 0; N < 40; N++) {
    ((g.strokeStyle = `rgba(110,70,35,${0.08 + Math.random() * 0.14})`),
      (g.lineWidth = 1 + Math.random() * 2.5),
      g.beginPath());
    const x = Math.random() * 128;
    (g.moveTo(0, x),
      g.bezierCurveTo(
        80,
        x + (Math.random() - 0.5) * 20,
        170,
        x + (Math.random() - 0.5) * 20,
        256,
        x + (Math.random() - 0.5) * 10,
      ),
      g.stroke());
  }
  const d = new Lt(l);
  d.colorSpace = Bt;
  const m = new r(
    new Y(i, 0.05, 0.075, 3, 0.004),
    new Ae({
      map: d,
      roughness: 0.6,
      clearcoat: 0.25,
      clearcoatRoughness: 0.5,
    }),
  );
  ((m.position.y = 0.025), a.add(m));
  const L = pt(n.steel);
  (L.position.set(i / 2, Ve, 0), a.add(L));
  const f = pt(n.steel);
  (f.position.set(-i / 2, Ve, 0), (f.rotation.y = Math.PI), a.add(f));
  const b = new J();
  return (
    a.add(b),
    xe(a),
    {
      group: a,
      id: "A",
      len: i,
      kind: "block",
      flag: null,
      setBars(N) {
        for (; b.children.length > N;)
          b.remove(b.children[b.children.length - 1]);
        for (; b.children.length < N;) {
          const x = b.children.length,
            B = new J(),
            u = new r(new K(0.0125, 0.0125, 0.026, 32), n.brass);
          u.position.y = 0.013;
          const P = new r(new K(0.005, 0.005, 0.005, 16), n.brass);
          P.position.y = 0.0285;
          const T = new r(new He(0.0075, 20, 12), n.brass);
          ((T.position.y = 0.0345), B.add(u, P, T));
          const v = x % 3,
            w = Math.floor(x / 3);
          (B.position.set(
            -0.03 + v * 0.03,
            0.05 + w * 0.04,
            w % 2 ? 0.012 : -0.012,
          ),
            xe(B),
            b.add(B));
        }
      },
      setBumper() {},
      squash() {},
      spinWheels() {},
      setFlag() {},
    }
  );
}
function pn() {
  const n = Te(),
    a = new J();
  a.userData.drag = "hanger";
  const i = new r(new Je(0.006, 0.0014, 8, 20, Math.PI * 1.6), n.steel);
  ((i.position.y = -0.006), (i.rotation.z = Math.PI * 0.7));
  const l = new r(new K(0.0022, 0.0022, 0.1, 10), n.steel);
  l.position.y = -0.06;
  const g = new r(new K(0.019, 0.019, 0.004, 32), n.darkSteel);
  ((g.position.y = -0.11), a.add(i, l, g));
  const d = new J();
  a.add(d);
  const m = new K(0.018, 0.018, 0.0034, 40, 1, !1, 0.25, Math.PI * 2 - 0.5);
  return (
    xe(a),
    {
      group: a,
      setMass(L) {
        const f = Math.max(0, Math.round(L / ln) - 1);
        for (; d.children.length > f;)
          d.remove(d.children[d.children.length - 1]);
        for (; d.children.length < f;) {
          const N = d.children.length,
            x = new r(m, N % 5 === 4 ? n.chrome : n.brass);
          ((x.position.y = -0.1062 + N * 0.0036),
            (x.rotation.y = (N % 2) * 0.5),
            (x.castShadow = !0),
            d.add(x));
        }
        const b = Math.max(0.1, f * 0.0036 + 0.03);
        return (
          (l.scale.y = b / 0.1),
          (l.position.y = -0.01 - b / 2),
          (g.position.y = -0.01 - b),
          (d.position.y = -(b - 0.1)),
          b + 0.012
        );
      },
    }
  );
}
const Ft = -0.045,
  it = 1.6;
function un(n) {
  const a = Te(),
    i = n.L,
    l = new J();
  l.position.set(Ft - i, 0, 0);
  const g = new r(
    new Y(0.12, 0.006, 0.075, 2, 0.002),
    new Ae({
      color: "#2e4a63",
      metalness: 0.3,
      roughness: 0.4,
      clearcoat: 0.6,
    }),
  );
  g.position.set(-0.01, 0.034, 0);
  const d = new r(new Y(0.06, 0.004, 0.05, 1, 0.0015), a.aluDark);
  d.position.set(0.035, 0.03, 0);
  const m = new r(
    new K(0.014, 0.014, 0.04, 28),
    new me({
      color: "#b5562b",
      metalness: 0.6,
      roughness: 0.35,
    }),
  );
  ((m.rotation.z = Math.PI / 2), m.position.set(-0.035, 0.055, -0.016));
  const L = new r(new Y(0.05, 0.02, 0.012, 2, 0.002), a.darkSteel);
  L.position.set(-0.035, 0.05, 0.02);
  const f = new J();
  f.position.set(-0.06, 0.06, 0);
  const b = new r(new $e(0.06, 0.0012, 0.006), a.steel);
  b.position.x = 0.03;
  const N = new r(new is(0.0016, 0.018, 8), a.chrome);
  ((N.rotation.z = Math.PI), N.position.set(0.06, -0.01, 0), f.add(b, N));
  const x = new r(
    new K(0.011, 0.011, 0.0015, 32),
    new me({
      color: "#0c0c0e",
      roughness: 0.7,
    }),
  );
  x.position.set(0, 0.0395, 0);
  const B = new r(new K(0.0015, 0.0015, 0.008, 8), a.steel);
  B.position.set(0, 0.042, 0);
  const u = new r(new Y(0.008, 0.008, 0.032, 1, 0.002), a.aluDark);
  u.position.set(-0.05, 0.04, 0);
  const P = [-0.02, 0].map((j, R) => {
      const C = new r(new K(0.004, 0.004, 0.012, 16), R ? a.red : a.plastic);
      return (C.position.set(0.035, 0.043, j - 0.025), C);
    }),
    T = new r(
      new be(0.07, 0.012),
      new ge({
        map: Se([translate("电磁打点计时器"), "50 Hz"], {
          w: 512,
          h: 88,
        }),
        toneMapped: !1,
      }),
    );
  ((T.rotation.x = -Math.PI / 2),
    T.position.set(0.012, 0.0372, 0.028),
    l.add(g, d, m, L, f, x, B, u, ...P, T),
    xe(l),
    n.rail.add(l));
  const v = Ws(it),
    w = new me({
      map: v.texture,
      color: "#bdb6a4",
      roughness: 0.95,
      side: Qe,
      polygonOffset: !0,
      polygonOffsetFactor: -2,
      polygonOffsetUnits: -2,
    }),
    A = new r(new be(1, 0.02), w);
  ((A.rotation.x = -Math.PI / 2), n.rail.add(A));
  let y = 0;
  return {
    group: l,
    tape: A,
    clear: v.clear,
    dot: v.dot,
    update(j, R, C, I) {
      const _ = Ft - 0.06,
        q = Math.max(0.001, Math.min(it, j - _));
      ((A.scale.x = q),
        A.position.set(j - q / 2 - i, R, 0),
        (v.texture.repeat.x = q / it),
        (v.texture.offset.x = 1 - q / it),
        (y += I * 50 * Math.PI * 2),
        (f.rotation.z = C ? Math.sin(y) * 0.03 : 0),
        (x.rotation.y += C ? I * 2 : 0));
    },
    setVisible(j) {
      ((l.visible = j), (A.visible = j));
    },
  };
}
function es(n, a) {
  const i = Te(),
    l = new J();
  ((l.userData.drag = "gate"), (l.userData.id = a));
  const g = new J();
  l.add(g);
  const d = i.plastic,
    m = new r(new Y(0.026, 0.03, 0.012, 2, 0.003), i.aluDark);
  m.position.set(0, 0.02, -0.062);
  const L = new r(new K(0.007, 0.007, 0.01, 20), i.red);
  ((L.rotation.x = Math.PI / 2), L.position.set(0, 0.02, -0.072));
  const f = new r(new K(0.004, 0.004, 1, 12), i.chrome),
    b = new r(new Y(0.022, 0.016, 0.115, 2, 0.004), d),
    N = [-0.024, 0.024].map((v) => {
      const w = new r(new Y(0.02, 0.04, 0.01, 2, 0.003), d);
      return ((w.position.z = v), w);
    }),
    x = new r(
      new K(8e-4, 8e-4, 0.038, 6),
      new ge({
        color: new jt("#ff2a1a").multiplyScalar(3),
        transparent: !0,
        opacity: 0.85,
        toneMapped: !1,
      }),
    );
  x.rotation.x = Math.PI / 2;
  const B = new r(
      new He(0.0028, 12, 8),
      new ge({
        color: "#3cff8a",
        toneMapped: !1,
      }),
    ),
    u = new r(
      new be(0.06, 0.012),
      new ge({
        map: Se([translate("光电门") + " " + a.replace("g", "")], {
          w: 320,
          h: 64,
        }),
        toneMapped: !1,
      }),
    );
  (g.add(m, L, f, b, ...N, x, B, u), xe(g), (x.castShadow = !1), n.rail.add(l));
  let P = !1;
  const T = {
    group: l,
    id: a,
    s: 0,
    place(v, w) {
      ((T.s = v), l.position.set(v - n.L, 0, 0));
      const A = w + 0.03;
      ((f.scale.y = A - 0.02),
        f.position.set(0, 0.02 + (A - 0.02) / 2, -0.062),
        b.position.set(0, A, -0.0055),
        N.forEach((y) => y.position.set(0, A - 0.022, y.position.z)),
        x.position.set(0, w, 0),
        B.position.set(0.012, A + 0.006, -0.05),
        u.position.set(0.0112, A, -0.03),
        (u.rotation.y = Math.PI / 2));
    },
    setBlocked(v) {
      v !== P &&
        ((P = v),
        (x.material.opacity = v ? 0.08 : 0.85),
        B.material.color.set(v ? "#ff3b2f" : "#3cff8a"));
    },
    setVisible(v) {
      l.visible = v;
    },
    knob: L,
  };
  return T;
}
function hn(n, a = [-0.25, 0, 0.27]) {
  const i = Te(),
    l = new J();
  (l.position.set(...a), (l.rotation.y = 0.08));
  const g = new r(
    new Y(0.26, 0.085, 0.13, 3, 0.01),
    new Ae({
      color: "#e4e1da",
      roughness: 0.4,
      clearcoat: 0.5,
    }),
  );
  g.position.y = 0.0425;
  const d = new r(new Y(0.24, 0.07, 0.004, 2, 0.002), i.plastic);
  d.position.set(0, 0.045, 0.064);
  const m = [st(5), st(5)],
    L = m.map((x, B) => {
      const u = new r(
        new be(0.085, 0.027),
        new ge({
          map: x.texture,
          toneMapped: !1,
        }),
      );
      return (u.position.set(-0.05 + B * 0.1, 0.05, 0.0665), u);
    }),
    f = (x, B) => {
      const u = new r(
        new be(0.085, 0.012),
        new ge({
          map: Se([x], {
            w: 340,
            h: 48,
            bg: "#1b1d21",
          }),
          toneMapped: !1,
        }),
      );
      return (u.position.set(B, 0.023, 0.0665), u);
    },
    b = new r(
      new be(0.12, 0.02),
      new ge({
        map: Se([translate("数字计时器"), "ms"], {
          w: 512,
          h: 84,
          bg: "#e4e1da",
          fg: "#1b1d21",
        }),
        toneMapped: !1,
      }),
    );
  ((b.rotation.x = -Math.PI / 2), b.position.set(-0.05, 0.0855, 0.02));
  const N = [0.04, 0.07, 0.1].map((x, B) => {
    const u = new r(
      new K(0.008, 0.008, 0.006, 20),
      B === 2 ? i.red : i.plastic,
    );
    return (u.position.set(x - 0.02, 0.087, 0.02), u);
  });
  return (
    l.add(g, d, ...L, f("GATE 1", -0.05), f("GATE 2", 0.05), b, ...N),
    n.add(xe(l)),
    {
      group: l,
      show(x, B) {
        m[x].draw(B);
      },
      setVisible(x) {
        l.visible = x;
      },
      jack: () => l.localToWorld(new le(0, 0.04, -0.066)),
    }
  );
}
function fn(n = "#16171a") {
  const a = new me({
      color: n,
      roughness: 0.5,
    }),
    i = new r(new os(), a);
  i.castShadow = !0;
  let l = "";
  return (
    (i.update = (g, d, m = 0.08, L = 0.004) => {
      const f = `${g.x.toFixed(3)},${g.y.toFixed(3)},${g.z.toFixed(3)},${d.x.toFixed(3)},${d.y.toFixed(3)},${d.z.toFixed(3)}`;
      if (f === l) return;
      l = f;
      const b = [];
      for (let N = 0; N <= 16; N++) {
        const x = N / 16,
          B = new le().lerpVectors(g, d, x);
        ((B.y = Math.max(L, B.y - Math.sin(Math.PI * x) * m)), b.push(B));
      }
      (i.geometry.dispose(), (i.geometry = new ft(new ht(b), 40, 0.0022, 6)));
    }),
    i
  );
}
const tt = 60;
function mn(n) {
  const a = Te(),
    i = n.L,
    l = new J(),
    g = 0.17,
    d = 0.013,
    m = new J(),
    L = new r(
      new K(d, d, g, 32, 1, !0),
      new Ae({
        color: "#dfe9f5",
        roughness: 0.08,
        metalness: 0,
        clearcoat: 1,
        transparent: !0,
        opacity: 0.22,
        depthWrite: !1,
        side: Qe,
      }),
    );
  ((L.rotation.z = Math.PI / 2), (L.position.x = g / 2));
  const f = new r(new K(d + 0.001, d + 0.001, 0.01, 32), a.chrome);
  ((f.rotation.z = Math.PI / 2), (f.position.x = 0.005));
  const b = f.clone();
  b.position.x = g - 0.005;
  const N = document.createElement("canvas");
  ((N.width = 1024), (N.height = 96));
  const x = N.getContext("2d");
  ((x.fillStyle = "#f6f2e6"), x.fillRect(0, 0, 1024, 96));
  const B = 0.02 + 5 / tt,
    u = B - 5 / tt,
    P = (p) => (p / g) * 1024;
  ((x.fillStyle = "#1b1d21"),
    (x.font = "600 30px 'JetBrains Mono', monospace"),
    (x.textAlign = "center"));
  for (let p = 0; p <= 50; p++) {
    const O = P(B - p / 10 / tt);
    (x.fillRect(
      O - 1,
      0,
      p % 5 ? 2 : 3,
      p % 10 === 0 ? 46 : p % 5 === 0 ? 34 : 22,
    ),
      p % 10 === 0 && x.fillText(String(p / 10), O, 82));
  }
  ((x.textAlign = "left"),
    (x.fillStyle = "#c0392b"),
    x.fillText("N", P(u) - 40, 82));
  const T = new Lt(N);
  ((T.colorSpace = Bt), (T.anisotropy = 8));
  const v = new r(
    new be(g, 0.016),
    new me({
      map: T,
      roughness: 0.6,
    }),
  );
  v.position.set(g / 2, 0, 0.004);
  const w = new r(new Je(0.006, 0.0014, 8, 20), a.steel);
  ((w.position.x = g + 0.007),
    (w.rotation.y = Math.PI / 2),
    m.add(L, f, b, v, w));
  const A = new r(new $e(0.003, 0.02, 0.003), a.red);
  A.position.z = 0.007;
  const y = new r(new K(0.0016, 0.0016, 1, 8), a.steel);
  y.rotation.z = Math.PI / 2;
  const j = new J();
  {
    const p = [];
    for (let W = 0; W <= 432; W++) {
      const ee = (W / 24) * Math.PI * 2;
      p.push(new le(W / 432, Math.sin(ee) * 0.008, Math.cos(ee) * 0.008));
    }
    j.add(new r(new ft(new ht(p), 432, 7e-4, 5), a.chrome));
  }
  (l.add(m, A, y, j), xe(l), n.rail.add(l));
  const R = new J(),
    C = new r(
      new Y(0.06, 0.05, 0.08, 3, 0.006),
      new Ae({
        color: "#2f5d8a",
        metalness: 0.3,
        roughness: 0.4,
        clearcoat: 0.6,
      }),
    );
  C.position.set(0.02, 0.025, -0.02);
  const I = new J();
  I.position.set(-0.012, 0.032, 0);
  const _ = new r(new K(0.008, 0.008, 0.03, 24), a.string),
    q = new r(new K(0.016, 0.016, 0.002, 28), a.chrome),
    se = q.clone();
  ((q.position.y = 0.015), (se.position.y = -0.015), I.add(_, q, se));
  const X = new r(
    new be(0.05, 0.012),
    new ge({
      map: Se([translate("匀速电机")], {
        w: 320,
        h: 72,
        bg: "#e9e6df",
        fg: "#1b1d21",
        accent: "#2f5d8a",
      }),
      toneMapped: !1,
    }),
  );
  X.position.set(0.02, 0.03, 0.0205);
  const t = new r(
    new He(0.003, 12, 8),
    new ge({
      color: "#3cff8a",
      toneMapped: !1,
    }),
  );
  (t.position.set(0.04, 0.051, 0), R.add(C, I, X, t), xe(R), n.rail.add(R));
  const ue = ct(7e-4, a.string, 5);
  n.root.add(ue);
  const Me = i - 0.05,
    k = new le(),
    F = new le();
  return {
    group: l,
    motor: R,
    update(p, O, W, ee, S, D) {
      const H = Math.max(0, O),
        Q = p + 0.02 + H;
      (l.position.set(Q - i, W, 0), (m.position.x = 0));
      const ie = B - H;
      ((y.scale.y = 0.02 + B),
        (y.position.x = (ie - (0.02 + H)) / 2),
        (A.position.x = ie),
        (j.position.x = ie),
        (j.scale.x = g - 0.012 - ie),
        R.position.set(Me - i, ee, 0),
        (I.rotation.y += D ? S * 6 : 0),
        n.toWorld(Q + g + 0.013, W, 0, k),
        n.toWorld(Me - 0.012, ee + 0.032, 0.008, F),
        ue.update(k, F),
        t.material.color.set(D ? "#3cff8a" : "#3a3d42"));
    },
    setVisible(p) {
      ((l.visible = p), (R.visible = p), (ue.visible = p));
    },
  };
}
function gn() {
  const n = Te(),
    a = new J(),
    i = new r(
      new Y(0.036, 0.024, 0.03, 2, 0.004),
      new Ae({
        color: "#2f5d8a",
        roughness: 0.4,
        clearcoat: 0.6,
      }),
    ),
    l = st(4, {
      w: 256,
      h: 96,
      color: "#5dff9b",
    }),
    g = new r(
      new be(0.026, 0.01),
      new ge({
        map: l.texture,
        toneMapped: !1,
      }),
    );
  g.position.set(0, 0.0045, 0.0152);
  const d = new r(new Je(0.004, 0.001, 6, 14), n.steel);
  return (
    (d.position.x = 0.021),
    (d.rotation.y = Math.PI / 2),
    a.add(i, g, d),
    xe(a),
    {
      group: a,
      show: (m) => l.draw(m),
    }
  );
}
const Ze = new le(1.55, 0, 0.05),
  bn = 1.32,
  Le = -0.11;
function wn() {
  const n = document.createElement("canvas");
  ((n.width = 128), (n.height = 256));
  const a = n.getContext("2d");
  (a.clearRect(0, 0, 128, 256), (a.strokeStyle = "rgba(250,248,240,1)"));
  for (let d = 0; d < 90; d++) {
    const m = 20 + d * 2.4,
      L = Math.sin((d / 90) * Math.PI) * 54 + 6;
    ((a.globalAlpha = 0.5 + Math.random() * 0.4),
      (a.lineWidth = 1.2),
      a.beginPath(),
      a.moveTo(64, m),
      a.quadraticCurveTo(64 - L * 0.6, m - 6, 64 - L, m - 16),
      a.moveTo(64, m),
      a.quadraticCurveTo(64 + L * 0.6, m - 6, 64 + L, m - 16),
      a.stroke());
  }
  ((a.globalAlpha = 1),
    (a.strokeStyle = "#d8d0bf"),
    (a.lineWidth = 3),
    a.beginPath(),
    a.moveTo(64, 8),
    a.lineTo(64, 250),
    a.stroke());
  const i = new Lt(n);
  i.colorSpace = Bt;
  const l = new be(0.035, 0.07, 1, 8),
    g = l.attributes.position;
  for (let d = 0; d < g.count; d++)
    g.setZ(d, Math.pow(g.getY(d) / 0.035, 2) * 0.008);
  return (
    l.computeVertexNormals(),
    new r(
      l,
      new me({
        map: i,
        transparent: !0,
        alphaTest: 0.05,
        side: Qe,
        roughness: 0.9,
      }),
    )
  );
}
function vn(n) {
  const a = Te(),
    i = new J();
  (i.position.copy(Ze), n.add(i));
  const l = pe.floor,
    g = bn,
    d = new r(
      new Y(0.36, 0.04, 0.3, 3, 0.01),
      new me({
        color: "#232529",
        metalness: 0.6,
        roughness: 0.55,
      }),
    );
  d.position.set(0, l + 0.02, Le + 0.03);
  const m = [-0.15, 0.15].map((I) => {
      const _ = new r(new K(0.018, 0.022, 0.012, 20), a.rubber);
      return (_.position.set(I, l + 0.006, Le + 0.03), _);
    }),
    L = g + 0.18 - l,
    f = new r(new Y(0.04, L, 0.04, 2, 0.004), a.alu);
  f.position.set(0, l + L / 2, Le);
  const b = new r(
    new be(2, 0.028),
    new me({
      map: rs(2, {
        dark: !1,
      }),
      roughness: 0.5,
    }),
  );
  ((b.rotation.z = -Math.PI / 2), b.position.set(0, g - 1, Le + 0.0205));
  const N = new r(new Y(0.03, 0.03, 0.15, 2, 0.004), a.aluDark);
  N.position.set(0, g + 0.06, Le + 0.065);
  const x = new J(),
    B = new r(
      new K(0.022, 0.022, 0.04, 32),
      new me({
        color: "#b5562b",
        metalness: 0.65,
        roughness: 0.35,
      }),
    ),
    u = new r(new K(0.008, 0.008, 0.008, 20), a.steel);
  u.position.y = -0.024;
  const P = new r(new K(0.025, 0.025, 0.006, 32), a.plastic);
  ((P.position.y = 0.023),
    x.add(B, u, P),
    x.position.set(0, g + 0.035, 0),
    (x.lamp = new r(
      new He(0.004, 12, 8),
      new ge({
        color: "#ff9a2a",
        toneMapped: !1,
      }),
    )),
    x.lamp.position.set(0.02, g + 0.075, Le + 0.065));
  const T = new r(
    new K(0.07, 0.06, 0.06, 40, 1, !0),
    new me({
      color: "#2a2c30",
      roughness: 0.6,
      side: Qe,
    }),
  );
  T.position.set(0, l + 0.07, 0);
  const v = new r(
    new K(0.068, 0.068, 0.02, 40),
    new me({
      color: "#5a6d8c",
      roughness: 1,
    }),
  );
  v.position.set(0, l + 0.05, 0);
  const w = new r(
    new be(0.16, 0.03),
    new ge({
      map: Se([translate("自由落体实验仪"), "g = 9.8 m/s²"], {
        w: 512,
        h: 96,
      }),
      toneMapped: !1,
    }),
  );
  (w.position.set(0, l + 0.25, Le + 0.0205),
    i.add(d, ...m, f, b, N, x, x.lamp, T, v, w));
  const A = [0, 1].map((I) => {
      const _ = new J();
      ((_.userData.drag = "fgate"), (_.userData.id = `g${I + 1}`));
      const q = new r(new Y(0.06, 0.035, 0.06, 2, 0.004), a.aluDark);
      q.position.z = Le;
      const se = new r(new K(0.008, 0.008, 0.012, 20), a.red);
      ((se.rotation.z = Math.PI / 2), se.position.set(0.036, 0, Le));
      const X = new J(),
        t = new r(new Y(0.11, 0.02, 0.02, 2, 0.004), a.plastic);
      ((t.position.z = Le + 0.04), X.add(t));
      for (const k of [-0.045, 0.045]) {
        const F = new r(new Y(0.018, 0.02, 0.12, 2, 0.004), a.plastic);
        (F.position.set(k, 0, Le + 0.1), X.add(F));
      }
      const ue = new r(
        new K(8e-4, 8e-4, 0.072, 6),
        new ge({
          color: new jt("#ff2a1a").multiplyScalar(3),
          transparent: !0,
          opacity: 0.85,
          toneMapped: !1,
        }),
      );
      ue.rotation.z = Math.PI / 2;
      const Me = new r(
        new be(0.05, 0.012),
        new ge({
          map: Se([translate("光电门") + " " + (I + 1)], {
            w: 320,
            h: 64,
          }),
          toneMapped: !1,
        }),
      );
      return (
        Me.position.set(0, 0.0105, Le + 0.04),
        (Me.rotation.x = -Math.PI / 2),
        _.add(q, se, X, ue, Me),
        xe(_),
        (ue.castShadow = !1),
        i.add(_),
        {
          group: _,
          beam: ue,
          y: 0,
          place(k) {
            ((this.y = k), (_.position.y = g - k));
          },
          setBlocked(k) {
            ue.material.opacity = k ? 0.08 : 0.85;
          },
        }
      );
    }),
    y = new J();
  {
    const I = g - l - 0.1,
      _ = new r(
        new K(0.045, 0.045, I, 48, 1, !0),
        new Ae({
          color: "#eef6ff",
          roughness: 0.03,
          transmission: 0.96,
          thickness: 0.003,
          transparent: !0,
          side: Qe,
          envMapIntensity: 1.6,
        }),
      );
    _.position.y = l + 0.1 + I / 2;
    const q = new r(new K(0.052, 0.052, 0.03, 40), a.chrome);
    q.position.y = l + 0.1;
    const se = q.clone();
    se.position.y = l + 0.1 + I;
    const X = new r(new K(0.008, 0.008, 0.05, 16), a.brass);
    ((X.rotation.x = Math.PI / 2),
      X.position.set(0, l + 0.12, 0.07),
      y.add(_, q, se, X));
  }
  ((y.visible = !1), i.add(y), xe(i));
  const j = {
    steel: new r(new He(je.steel.r, 40, 24), a.chrome),
    pingpong: new r(
      new He(je.pingpong.r, 40, 24),
      new Ae({
        color: "#fbf8f0",
        roughness: 0.5,
        clearcoat: 0.2,
      }),
    ),
    feather: wn(),
  };
  for (const I of Object.values(j))
    ((I.castShadow = !0), (I.visible = !1), i.add(I));
  const R = new J();
  i.add(R);
  let C = "steel";
  return {
    root: i,
    gates: A,
    top: g,
    setObject(I) {
      C = I;
      for (const [_, q] of Object.entries(j)) q.visible = _ === I;
    },
    setVacuum(I) {
      y.visible = I;
    },
    place(I, _, q) {
      const se = j[C],
        X = je[C].r;
      (se.position.set(0, g - I - (C === "feather" ? 0 : X), 0),
        C === "feather" &&
          (se.rotation.set(
            Math.sin(_ * 5) * 0.6 * q,
            _ * 2 * q,
            Math.cos(_ * 3.3) * 0.5 * q + 0.3,
          ),
          (se.position.x = Math.sin(_ * 2.6) * 0.012 * q)));
    },
    setMagnet(I) {
      x.lamp.material.color.set(I ? "#ff9a2a" : "#3a3d42");
    },
    ghosts(I) {
      for (
        R.userData.kind !== C && (R.clear(), (R.userData.kind = C));
        R.children.length > I.length;
      )
        R.remove(R.children[R.children.length - 1]);
      const _ = j[C];
      I.forEach((q, se) => {
        let X = R.children[se];
        (X ||
          ((X = new r(
            _.geometry,
            new ge({
              color: "#ffd9a0",
              transparent: !0,
              opacity: 0.35,
              depthWrite: !1,
              side: Qe,
            }),
          )),
          C === "feather" && (X.rotation.z = 0.3),
          R.add(X)),
          X.position.set(0, g - q - (C === "feather" ? 0 : je[C].r), 0),
          (X.material.opacity = 0.18 + 0.25 * (se / Math.max(1, I.length))));
      });
    },
    setVisible(I) {
      i.visible = I;
    },
  };
}
const Re = new le(-2.6, pe.floor, -1.4),
  rt = 3.2,
  ts = 6,
  Nt = 0.12,
  Ee = {
    w: 1.1,
    h: 1.3,
    d: 1,
  };
function xn(n) {
  const a = Te(),
    i = new J();
  (i.position.copy(Re), n.add(i));
  const l = rt * ts + 1,
    g = new me({
      color: "#3b4048",
      metalness: 0.8,
      roughness: 0.45,
    });
  for (const p of [-0.75, 0.75])
    for (const O of [-0.7, 0.7]) {
      const W = new r(new $e(0.08, l, 0.08), g);
      (W.position.set(p, l / 2, O), i.add(W));
    }
  for (let p = 0; p <= ts; p++) {
    const O = p * rt,
      W = new r(
        new $e(3.2, 0.18, 2.4),
        new me({
          color: "#56595e",
          roughness: 0.9,
        }),
      );
    (W.position.set(-2.4, O - 0.09, 0), p > 0 && i.add(W));
    for (const D of [-0.7, 0.7]) {
      const H = new r(new $e(1.5, 0.06, 0.06), g);
      (H.position.set(0, O, D), i.add(H));
    }
    for (const D of [-0.75, 0.75]) {
      const H = new r(new $e(0.056, 0.056, 1.4), g);
      (H.position.set(D, O, 0), i.add(H));
    }
    const ee = new r(
      new be(0.34, 0.2),
      new ge({
        map: Se([`${p + 1}F`], {
          w: 256,
          h: 150,
          bg: "#1b1d21",
          fg: "#f0a531",
        }),
        toneMapped: !1,
      }),
    );
    (ee.position.set(-0.85, O + 1.9, 0.72), i.add(ee));
    const S = new r(
      new be(0.8, 0.06),
      new ge({
        color: new jt("#fff1d6").multiplyScalar(1.6),
        toneMapped: !1,
      }),
    );
    (S.position.set(-1.6, O + 2.6, -0.9), i.add(S));
  }
  for (const p of [-0.62, 0.62]) {
    const O = new r(new $e(0.03, l, 0.05), a.steel);
    (O.position.set(p, l / 2, 0), i.add(O));
  }
  const d = new J(),
    m = new r(new K(0.28, 0.28, 0.12, 48), a.darkSteel);
  m.rotation.x = Math.PI / 2;
  const L = new r(
    new Y(0.5, 0.4, 0.4, 3, 0.03),
    new me({
      color: "#2f5d8a",
      metalness: 0.4,
      roughness: 0.5,
    }),
  );
  (L.position.set(0.5, 0, 0),
    d.add(m, L),
    d.position.set(0.1, l + 0.2, 0),
    i.add(d));
  const f = new J(),
    b = new me({
      color: "#c9ccd1",
      metalness: 1,
      roughness: 0.25,
    }),
    N = new r(
      new Y(Ee.w, 0.08, Ee.d, 2, 0.01),
      new me({
        color: "#2b2d31",
        roughness: 0.7,
        metalness: 0.4,
      }),
    );
  N.position.y = -0.04;
  const x = N.clone();
  ((x.position.y = Ee.h + 0.04), f.add(N, x));
  for (const p of [-1.1 / 2, Ee.w / 2])
    for (const O of [-1 / 2, Ee.d / 2]) {
      const W = new r(new $e(0.04, Ee.h, 0.04), b);
      (W.position.set(p, Ee.h / 2, O), f.add(W));
    }
  const B = new Ae({
    color: "#dfefff",
    roughness: 0.05,
    transmission: 0.9,
    thickness: 0.01,
    transparent: !0,
    opacity: 0.6,
    side: Qe,
  });
  for (const [p, O, W, ee] of [
    [Ee.d, -1.1 / 2, 0, Math.PI / 2],
    [Ee.w, 0, -1 / 2, 0],
    [Ee.d, Ee.w / 2, 0, Math.PI / 2],
  ]) {
    const S = new r(new be(p, Ee.h), B);
    (S.position.set(O, Ee.h / 2, W), (S.rotation.y = ee), f.add(S));
  }
  const u = new r(new K(0.012, 0.012, Ee.w - 0.1, 16), a.chrome);
  ((u.rotation.z = Math.PI / 2),
    u.position.set(0, 0.9, -1 / 2 + 0.06),
    f.add(u));
  const P = new r(
    new Y(0.34, 0.05, 0.3, 3, 0.015),
    new Ae({
      color: "#eceae4",
      roughness: 0.35,
      clearcoat: 0.6,
    }),
  );
  P.position.set(0, 0.025, 0.05);
  const T = new r(new Y(0.3, 0.008, 0.26, 2, 0.004), a.steel);
  T.position.set(0, 0.054, 0.05);
  const v = st(5, {
      w: 384,
      h: 128,
      color: "#5dff9b",
    }),
    w = new r(
      new be(0.11, 0.036),
      new ge({
        map: v.texture,
        toneMapped: !1,
      }),
    );
  w.position.set(0, 0.026, 0.2005);
  const A = new J(),
    y = new r(new K(0.075, 0.075, 0.14, 48), a.brass);
  y.position.y = 0.07;
  const j = new r(new K(0.03, 0.03, 0.03, 32), a.brass);
  j.position.y = 0.155;
  const R = new r(new Je(0.03, 0.008, 12, 32), a.brass);
  R.position.y = 0.19;
  const C = new r(
    new be(0.08, 0.04),
    new ge({
      map: Se(["5 kg"], {
        w: 200,
        h: 100,
        bg: "#3a2a10",
        fg: "#f6d48a",
      }),
      toneMapped: !1,
    }),
  );
  (C.position.set(0, 0.07, 0.0755),
    A.add(y, j, R, C),
    A.position.set(0, 0.058, 0.05),
    f.add(P, T, w, A));
  const I = st(6, {
      w: 512,
      h: 150,
      color: "#ff8a2a",
    }),
    _ = new r(
      new be(0.36, 0.1),
      new ge({
        map: I.texture,
        toneMapped: !1,
      }),
    );
  (_.position.set(0, 1.12, -1 / 2 + 0.01), f.add(_));
  const q = new r(
    new He(0.03, 16, 12),
    new ge({
      color: "#ff2a1a",
      toneMapped: !1,
    }),
  );
  (q.position.set(0.4, Ee.h - 0.02, -1 / 2 + 0.05), (q.visible = !1), f.add(q));
  const se = new Gs("#ffe7c7", 3, 3, 1.5);
  (se.position.set(0, Ee.h - 0.1, 0), f.add(se));
  const X = [-0.62, 0.62].map((p) => {
    const O = new r(
      new Y(0.08, 0.12, 0.1, 2, 0.01),
      new me({
        color: "#3a3d42",
        metalness: 0.7,
        roughness: 0.4,
        emissive: "#ff5a1a",
        emissiveIntensity: 0,
      }),
    );
    return (O.position.set(p, 0.02, 0), f.add(O), O);
  });
  i.add(f);
  const t = new me({
      color: "#9aa0a8",
      metalness: 0.8,
      roughness: 0.4,
    }),
    ue = [-0.06, 0, 0.06].map((p) => {
      const O = new r(new K(0.006, 0.006, 1, 8), t);
      return ((O.position.z = p), i.add(O), O);
    }),
    Me = new r(
      new Y(0.3, 0.9, 0.16, 2, 0.02),
      new me({
        color: "#5c6067",
        metalness: 0.6,
        roughness: 0.6,
      }),
    );
  ((Me.position.x = 0.38), i.add(Me));
  const k = new r(new K(0.006, 0.006, 1, 8), t);
  ((k.position.x = 0.38), i.add(k), xe(i), (se.castShadow = !1));
  let F = !1;
  return {
    root: i,
    cabin: f,
    height: l,
    place(p, O, W, ee) {
      f.position.y = p + Nt;
      const S = l + 0.2 - 0.28;
      ue.forEach((H) => {
        const Q = p + Nt + Ee.h + 0.08,
          ie = F ? 0.3 : S - Q;
        ((H.scale.y = Math.max(0.01, ie)),
          (H.position.y = Q + Math.max(0.01, ie) / 2),
          (H.position.x = 0));
      });
      const D = Math.max(0.5, l - 1.5 - p * 0.9);
      ((Me.position.y = D),
        (k.scale.y = S - D - 0.45),
        (k.position.y = D + 0.45 + (S - D - 0.45) / 2),
        (m.rotation.y = -p * 3.6),
        v.draw((O / 9.8).toFixed(2)),
        I.draw(
          `${Math.max(1, Math.round(p / rt) + 1)}F ${W >= 0 ? " " : "-"}${Math.abs(W).toFixed(1)}`,
        ),
        (q.visible = F && Math.floor(ee * 6) % 2 === 0));
    },
    setCut(p) {
      F = p;
    },
    setBrake(p) {
      X.forEach((O) => (O.material.emissiveIntensity = p));
    },
    setVisible(p) {
      i.visible = p;
    },
    FLOOR_H: rt,
  };
}
const yn = {
  G: "#4d9bff",
  N: "#3fd28a",
  f: "#ff7a45",
  T: "#f2c94c",
  F: "#e86ad6",
  a: "#ffffff",
  Gx: "#8fbfff",
  Gy: "#8fbfff",
};
function Mn(n, { radius: a = 0.0035, dashed: i = !1 } = {}) {
  const l = new J(),
    g = new me({
      color: n,
      emissive: n,
      emissiveIntensity: 0.55,
      roughness: 0.4,
      metalness: 0.1,
      transparent: i,
      opacity: i ? 0.65 : 1,
      depthTest: !0,
    }),
    d = new K(a, a, 1, 12);
  d.translate(0, 0.5, 0);
  const m = new r(d, g),
    L = new is(a * 2.8, 1, 16);
  L.translate(0, -0.5, 0);
  const f = new r(L, g);
  (l.add(m, f), (l.visible = !1));
  const b = new le(0, 1, 0),
    N = new le();
  return {
    group: l,
    tip: N,
    set(x, B, u) {
      if (!(u > 0.002)) {
        l.visible = !1;
        return;
      }
      ((l.visible = !0),
        l.position.copy(x),
        l.quaternion.setFromUnitVectors(b, B));
      const P = Math.min(0.022, u * 0.4);
      ((m.scale.y = u - P),
        f.scale.set(1, P, 1),
        (f.position.y = u),
        N.copy(B).multiplyScalar(u).add(x));
    },
    hide() {
      l.visible = !1;
    },
  };
}
const kn = {
    m: {
      type: "range",
      label: translate("钩码质量 m"),
      min: 0.01,
      max: 0.25,
      step: 0.01,
      show: (n) => `${Math.round(n * 1e3)} g`,
    },
    M: {
      type: "range",
      label: translate("小车质量 M"),
      min: 0.2,
      max: 1.2,
      step: 0.1,
      show: (n) => `${n.toFixed(1)} kg`,
    },
    MB: {
      type: "range",
      label: translate("小车 B 质量"),
      min: 0.2,
      max: 1.2,
      step: 0.1,
      show: (n) => `${n.toFixed(1)} kg`,
    },
    angle: {
      type: "range",
      label: translate("倾角 θ"),
      min: 0,
      max: 40,
      step: 0.5,
      show: (n) => `${n.toFixed(1)}°`,
    },
    air: {
      type: "toggle",
      label: translate("气垫导轨（无摩擦）"),
    },
    balance: {
      type: "toggle",
      label: translate("平衡摩擦力"),
    },
    sensor: {
      type: "toggle",
      label: translate("力传感器测拉力"),
    },
    B: {
      type: "toggle",
      label: translate("第二辆小车 B"),
    },
    tape: {
      type: "toggle",
      label: translate("打点计时器"),
    },
    vacuum: {
      type: "toggle",
      label: translate("牛顿管抽真空"),
    },
    g1: {
      type: "range",
      label: translate("光电门 1 位置"),
      min: 0.25,
      max: 1.4,
      step: 0.01,
      show: (n) => `${(n * 100).toFixed(0)} cm`,
    },
    g2: {
      type: "range",
      label: translate("光电门 2 位置"),
      min: 0.25,
      max: 1.4,
      step: 0.01,
      show: (n) => `${(n * 100).toFixed(0)} cm`,
    },
    h1: {
      type: "range",
      label: translate("光电门 1 下落高度"),
      min: 0.1,
      max: 1.9,
      step: 0.01,
      show: (n) => `${(n * 100).toFixed(0)} cm`,
    },
    h2: {
      type: "range",
      label: translate("光电门 2 下落高度"),
      min: 0.1,
      max: 1.9,
      step: 0.01,
      show: (n) => `${(n * 100).toFixed(0)} cm`,
    },
    d: {
      type: "seg",
      label: translate("挡光片宽度 d"),
      options: [
        [0.005, "0.5 cm"],
        [0.01, "1 cm"],
        [0.02, "2 cm"],
        [0.04, "4 cm"],
      ],
    },
    strip: {
      type: "seg",
      label: translate("接触面"),
      options: [
        ["wood", translate("木板")],
        ["towel", translate("毛巾")],
        ["rubber", translate("橡胶")],
        ["felt", translate("毛毡")],
      ],
    },
    n: {
      type: "range",
      label: translate("木块上的砝码"),
      min: 0,
      max: 5,
      step: 1,
      show: (n) => translate("{0} 个 × 100 g", [n]),
    },
    u: {
      type: "range",
      label: translate("电机拉动速度"),
      min: 0.01,
      max: 0.1,
      step: 0.01,
      show: (n) => `${(n * 100).toFixed(0)} cm/s`,
    },
    object: {
      type: "seg",
      label: translate("下落物体"),
      options: [
        ["steel", translate("钢球")],
        ["pingpong", translate("乒乓球")],
        ["feather", translate("羽毛")],
      ],
    },
    profile: {
      type: "seg",
      label: translate("电梯运行"),
      options: [
        ["up", translate("上行")],
        ["down", translate("下行")],
        ["cut", translate("缆绳断开")],
      ],
    },
    collide: {
      type: "seg",
      label: translate("缓冲器"),
      options: [
        ["spring", translate("弹簧圈")],
        ["none", translate("橡胶块")],
        ["velcro", translate("魔术贴")],
      ],
    },
    vA: {
      type: "range",
      label: translate("A 的初速度"),
      min: -1,
      max: 1,
      step: 0.05,
      show: (n) => `${n.toFixed(2)} m/s`,
    },
    vB: {
      type: "range",
      label: translate("B 的初速度"),
      min: -1,
      max: 1,
      step: 0.05,
      show: (n) => `${n.toFixed(2)} m/s`,
    },
    gates: {
      type: "seg",
      label: translate("光电门"),
      options: [
        [0, translate("无")],
        [1, "1"],
        [2, "2"],
      ],
    },
  },
  En = (n, a, i, l) => Us(n, a, i, l, kn),
  fe = {
    A: "#f0a531",
    B: "#3fc4bd",
    F: "#e86ad6",
    N: "#3fd28a",
    Ek: "#ff8a3d",
    Ep: "#4d9bff",
    Q: "#d2574a",
    E: "#e8e6e0",
    p: "#e8e6e0",
    ghost: "#8b93a1",
  },
  $n = {
    xt: "x-t",
    vt: "v-t",
    at: "a-t",
    Ft: "F-t",
    Nt: "N-t",
    pt: "p-t",
    energy: translate("能量"),
    tape: translate("纸带"),
    gates: translate("光电门"),
    collisions: translate("碰撞前后"),
    fitF: "a-F",
    fitM: "a-1/M",
    fitN: "f-N",
    table: translate("数据表"),
  },
  ss = {
    xt: {
      y: translate("位移 x / m"),
      lines: [
        ["x", "A", fe.A],
        ["xB", "B", fe.B],
      ],
    },
    vt: {
      y: translate("速度 v / (m·s⁻¹)"),
      lines: [
        ["v", "A", fe.A],
        ["vB", "B", fe.B],
      ],
    },
    at: {
      y: translate("加速度 a / (m·s⁻²)"),
      lines: [
        ["a", "A", fe.A],
        ["aB", "B", fe.B],
      ],
    },
    Ft: {
      y: translate("拉力 F / N"),
      lines: [["F", translate("测力计示数"), fe.F]],
    },
    Nt: {
      y: translate("台秤示数 N / N"),
      lines: [["N", translate("压力 N"), fe.N]],
      ref: ["mg", "mg"],
    },
    pt: {
      y: translate("动量 p / (kg·m·s⁻¹)"),
      lines: [
        ["pA", "p_A", fe.A],
        ["pB", "p_B", fe.B],
        ["p", translate("总动量"), fe.p],
      ],
    },
  },
  he = (n, a = 3) =>
    n == null || !isFinite(n)
      ? "—"
      : (Math.abs(n) < 0.5 * 10 ** -a ? 0 : n).toFixed(a);
function An(n) {
  let a = null,
    i = null,
    l = null,
    g = null;
  function d(T, v = !1) {
    if (!a || l !== "chart" || !!g !== v) {
      n.replaceChildren();
      const w = document.createElement("div");
      ((w.className = v ? "dv split" : "dv"),
        (i = document.createElement("div")),
        (i.className = "chost"),
        w.appendChild(i),
        (g = null),
        v &&
          ((g = document.createElement("div")),
          (g.className = "side"),
          w.appendChild(g)),
        n.appendChild(w),
        (a = Js(i, {
          onScrub: (A) => T.scrub(A),
        })),
        (l = "chart"));
    }
    return a;
  }
  function m(T) {
    ((l = "html"), (a = null), (n.innerHTML = T));
  }
  function L(T, v) {
    const w = ss[T],
      A = d(v),
      y = [];
    (v.prev || []).forEach((j, R) => {
      const C = j(w.lines[0][0]);
      C.length &&
        y.push({
          pts: C,
          color: fe.ghost,
          opacity: 0.28 + R * 0.12,
          width: 1.5,
          dashed: !0,
          noHover: !0,
          name: R === v.prev.length - 1 ? translate("上一次") : "",
        });
    });
    for (const [j, R, C] of w.lines) {
      const I = v.series(j);
      I.length &&
        I.some((_) => _[1] != null) &&
        y.push({
          pts: I,
          name: R,
          color: C,
        });
    }
    if (w.ref) {
      const j = v.series(w.ref[0]);
      j.length &&
        y.push({
          pts: j,
          name: w.ref[1],
          color: fe.ghost,
          dashed: !0,
          width: 1.2,
        });
    }
    A.draw({
      series: y,
      xLabel: "t / s",
      yLabel: w.y,
      xName: "t",
      cursor: v.cursor,
      x: [0, Math.max(1, v.duration || 0)],
    });
  }
  function f(T) {
    const v = d(T, !0),
      A = [
        ["Ek", "E_k", fe.Ek],
        ["Ep", "E_p", fe.Ep],
        ["Q", translate("内能 Q"), fe.Q],
        ["E", translate("机械能"), fe.E],
      ].map(([I, _, q]) => ({
        pts: T.series(I),
        name: _,
        color: q,
        width: I === "E" ? 2.4 : 2,
      }));
    v.draw({
      series: A,
      xLabel: "t / s",
      yLabel: translate("能量 / J"),
      cursor: T.cursor,
      x: [0, Math.max(1, T.duration || 0)],
    });
    const y = T.now || {},
      j = [
        ["Ek", y.Ek, fe.Ek, "E<sub>k</sub>"],
        ["Ep", y.Ep - (T.EpMin || 0), fe.Ep, "E<sub>p</sub>"],
        ["Q", (y.Q || 0) + (y.Qc || 0), fe.Q, "Q"],
      ],
      R = j.reduce((I, _) => I + Math.max(0, _[1] || 0), 0) || 1,
      C = Math.max(R, T.Emax || 0, 1e-6);
    g.innerHTML = `<div class="ebars">${j.map(([, I, _, q]) => `<div class="eb"><div class="bar"><i style="height:${(Math.max(0, I || 0) / C) * 100}%;background:${_}"></i></div><b>${he(I, 3)}</b><span>${q}</span></div>`).join("")}<div class="eb tot"><div class="bar">${j.map(([, I, _]) => `<i style="height:${(Math.max(0, I || 0) / C) * 100}%;background:${_}"></i>`).join("")}</div><b>${he(R, 3)}</b><span>${translate("总和")}</span></div></div><p class="enote">${translate("以最低点为势能零点，单位 J")}</p>`;
  }
  function b(T) {
    const v = T.run?.dots || [],
      w = (T.run?.events || []).find(
        (F) => F.type === "land" || F.type === "wall",
      ),
      A = w ? v.filter((F) => F.t <= w.t) : v;
    let y = 0;
    for (; y < A.length - 1 && A[y + 1].x - A[y].x < 0.001;) y++;
    const j = A.slice(y);
    if (j.length < 11) {
      m(
        `<div class="empty">${translate("释放小车后，纸带会出现在这里。")}</div>`,
      );
      return;
    }
    const R = Ds(j, 5),
      C = v[0].x,
      I = v[v.length - 1].x - C,
      _ = Math.max(900, Math.min(3200, I * 2600)),
      q = I * _ + 80;
    let se = `<svg class="tape" width="${q}" height="128" viewBox="0 0 ${q} 128">`;
    se += `<rect x="0" y="34" width="${q}" height="40" rx="2" class="paper"/>`;
    const X = (F) => 40 + (F - C) * _;
    (v.forEach(
      (F) =>
        (se += `<circle cx="${X(F.x).toFixed(1)}" cy="54" r="2.6" class="dot${F.t > j[j.length - 1].t ? " late" : ""}"/>`),
    ),
      R.pts.forEach((F, p) => {
        const O = X(F.x);
        if (
          ((se += `<line x1="${O}" x2="${O}" y1="28" y2="80" class="cp"/><text x="${O}" y="22" class="cpn">${p}</text>`),
          p)
        ) {
          const W = X(R.pts[p - 1].x);
          ((se += `<path d="M${W + 2},92 L${W + 2},98 L${O - 2},98 L${O - 2},92" class="br"/>`),
            O - W > 64
              ? (se += `<text x="${(W + O) / 2}" y="116" class="gap">x${N(p)} = ${(R.gaps[p - 1] * 100).toFixed(2)} cm</text>`)
              : O - W > 26 &&
                (se += `<text x="${(W + O) / 2}" y="116" class="gap">${(R.gaps[p - 1] * 100).toFixed(2)}</text>`));
        }
      }),
      (se += "</svg>"));
    const t = R.gaps.slice(1).map((F, p) => F - R.gaps[p]),
      ue = t.length ? t.reduce((F, p) => F + p, 0) / t.length : null,
      Me =
        R.vel.length >= 2
          ? At(
              R.vel.map((F) => F.t),
              R.vel.map((F) => F.v),
            )
          : null,
      k = R.vel
        .map(
          (F, p) =>
            `<tr><td>${p + 1}</td><td>${he(F.t, 2)}</td><td>${he(F.v, 3)}</td></tr>`,
        )
        .join("");
    m(`<div class="tapeview"><div class="tapescroll">${se}</div><div class="tapeinfo">
      <table class="tbl"><thead><tr><th>${translate("计数点")}</th><th>t / s</th><th>v / (m·s⁻¹)</th></tr></thead><tbody>${k}</tbody></table>
      <div class="kv2">
        <span>T</span><b>0.10 s</b>
        <span>Δx ${translate("平均")}</span><b>${ue == null ? "—" : (ue * 100).toFixed(2) + " cm"}</b>
        <span>a ${translate("（逐差法）")}</span><b>${R.a == null ? "—" : he(R.a, 3) + " m/s²"}</b>
        <span>a ${translate("（v-t 斜率）")}</span><b>${Me ? he(Me.k, 3) + " m/s²" : "—"}</b>
        ${T.trueA != null ? `<span>${translate("理论值")}</span><b>${he(T.trueA, 3)} m/s²</b>` : ""}
      </div><p class="tnote">${translate("计数点从点迹清晰处开始选取；钩码落地后小车减速，灰色的点不参与计算。")}</p></div></div>`);
  }
  const N = (T) => String(T).replace(/\d/g, (v) => "₀₁₂₃₄₅₆₇₈₉"[v]);
  function x(T) {
    const v = T.run?.gateLog || [];
    if (!v.length) {
      m(
        `<div class="empty">${translate("物体经过光电门后，挡光时间会记录在这里。")}</div>`,
      );
      return;
    }
    const w = v
        .map(
          (R, C) =>
            `<tr><td>${C + 1}</td><td>${R.gate.replace("g", "")}</td><td>${R.body || "—"}</td><td>${he(R.tOn, 4)}</td><td>${he(R.dt * 1e3, 2)}</td><td>${he(R.d * 100, 1)}</td><td><b>${he(R.v, 3)}</b></td></tr>`,
        )
        .join(""),
      A = v.find((R) => R.gate === "g1"),
      y = v.find((R) => R.gate === "g2");
    let j = "";
    if (A && y && T.gateDistance) {
      const R = _s(A.v, y.v, T.gateDistance),
        C = y.tOn - A.tOn;
      j = `<div class="kv2"><span>L</span><b>${he(T.gateDistance * 100, 1)} cm</b><span>v₁</span><b>${he(A.v, 3)} m/s</b><span>v₂</span><b>${he(y.v, 3)} m/s</b><span>a = (v₂² − v₁²)/2L</span><b class="hi">${he(R, 3)} m/s²</b><span>a = (v₂ − v₁)/t₁₂</span><b>${he((y.v - A.v) / C, 3)} m/s²</b>${T.trueA != null ? `<span>${translate("理论值")}</span><b>${he(T.trueA, 3)} m/s²</b>` : ""}</div>`;
    }
    m(
      `<div class="gview"><table class="tbl"><thead><tr><th>#</th><th>${translate("光电门")}</th><th>${translate("物体")}</th><th>${translate("挡光时刻")} / s</th><th>Δt / ms</th><th>d / cm</th><th>v = d/Δt</th></tr></thead><tbody>${w}</tbody></table>${j}</div>`,
    );
  }
  function B(T) {
    const v = (T.run?.events || []).filter((X) => X.type === "collide");
    if (!v.length) {
      m(
        `<div class="empty">${translate("两车相碰后，碰撞前后的动量与动能会显示在这里。")}</div>`,
      );
      return;
    }
    const w = v[0],
      [A, y] = w.masses,
      j = A * w.before[0] + y * w.before[1],
      R = A * w.after[0] + y * w.after[1],
      C = 0.5 * A * w.before[0] ** 2 + 0.5 * y * w.before[1] ** 2,
      I = 0.5 * A * w.after[0] ** 2 + 0.5 * y * w.after[1] ** 2,
      _ = (X, t, ue) =>
        `<i style="width:${(Math.abs(X) / t) * 100}%;background:${ue}"></i>`,
      q = Math.max(Math.abs(j), Math.abs(R), 1e-6),
      se = Math.max(C, I, 1e-6);
    m(`<div class="cview">
      <table class="tbl"><thead><tr><th></th><th>v_A / (m·s⁻¹)</th><th>v_B / (m·s⁻¹)</th><th>p / (kg·m·s⁻¹)</th><th>E<sub>k</sub> / J</th></tr></thead><tbody>
      <tr><td>${translate("碰前")}</td><td>${he(w.before[0])}</td><td>${he(w.before[1])}</td><td>${he(j, 4)}</td><td>${he(C, 4)}</td></tr>
      <tr><td>${translate("碰后")}</td><td>${he(w.after[0])}</td><td>${he(w.after[1])}</td><td>${he(R, 4)}</td><td>${he(I, 4)}</td></tr></tbody></table>
      <div class="cmp"><div><span>${translate("总动量")}</span><div class="hb">${_(j, q, fe.A)}</div><div class="hb">${_(R, q, fe.B)}</div><b>${j ? he((R / j) * 100, 1) + "%" : "—"}</b></div>
      <div><span>${translate("总动能")}</span><div class="hb">${_(C, se, fe.A)}</div><div class="hb">${_(I, se, fe.B)}</div><b>${C ? he((I / C) * 100, 1) + "%" : "—"}</b></div>
      <p class="enote"><i style="background:${fe.A}"></i>${translate("碰前")}　<i style="background:${fe.B}"></i>${translate("碰后")}　${translate("损失的动能")} ${he(C - I, 4)} J</p></div></div>`);
  }
  function u(T, v) {
    const w = v.records || [],
      A = d(v, !0);
    let y = [],
      j = "",
      R = "",
      C = fe.A,
      I = "";
    T === "fitF"
      ? ((y = w.map((t) => [t.F, t.a])),
        (j = v.sensor
          ? translate("拉力 F（传感器）/ N")
          : translate("拉力 F ≈ mg / N")),
        (R = "a / (m·s⁻²)"))
      : T === "fitM"
        ? ((y = w.map((t) => [1 / t.M, t.a])),
          (j = "1/M / kg⁻¹"),
          (R = "a / (m·s⁻²)"))
        : ((y = w.map((t) => [t.N, t.f])),
          (j = translate("压力 N / N")),
          (R = translate("滑动摩擦力 f / N")));
    const _ =
        y.length >= 2
          ? At(
              y.map((t) => t[0]),
              y.map((t) => t[1]),
            )
          : null,
      q = Math.max(0.1, ...y.map((t) => t[0])) * 1.1;
    let se = "";
    (_ &&
      ((se = `k = ${_.k.toFixed(3)}   R² = ${_.r2.toFixed(4)}`),
      T === "fitN" && (I = `μ ≈ ${_.k.toFixed(3)}`),
      T === "fitF" && (I = `1/k ≈ ${(1 / _.k).toFixed(3)} kg`),
      T === "fitM" && (I = `k ≈ F = ${_.k.toFixed(3)} N`)),
      A.draw({
        series: [
          {
            pts: y,
            color: C,
            kind: "scatter",
            name: translate("实验数据"),
          },
        ],
        x: [0, q],
        y: [0, null],
        fit: _
          ? {
              ..._,
              color: "#e8e6e0",
              label: se,
            }
          : null,
        fitRange: [0, q],
        xLabel: j,
        yLabel: R,
        xName: T === "fitN" ? "N" : "F",
      }));
    const X = {
      fitF: translate(
        "保持 M 不变，改变钩码质量，每次实验后按“记录数据”。钩码较重时，数据点会落在直线下方。",
      ),
      fitM: translate(
        "保持钩码不变，改变小车质量 M，每次实验后按“记录数据”。a 与 1/M 成正比。",
      ),
      fitN: translate(
        "改变木块上的砝码，记录稳定后的测力计示数。不同接触面的直线斜率不同。",
      ),
    }[T];
    g.innerHTML = `<div class="fitside"><b class="big">${y.length}</b><span>${translate("组数据")}</span>${I ? `<div class="res">${I}</div>` : ""}<p>${X}</p></div>`;
  }
  function P(T) {
    const v = T.records || [];
    if (!v.length) {
      m(
        `<div class="empty">${translate("每次实验结束后按“记录数据”，数据会出现在这里。")}</div>`,
      );
      return;
    }
    const w = T.recordCols;
    (m(
      `<div class="gview"><table class="tbl"><thead><tr><th>#</th>${w.map((A) => `<th>${A[1]}</th>`).join("")}<th></th></tr></thead><tbody>${v.map((A, y) => `<tr><td>${y + 1}</td>${w.map((j) => `<td>${typeof A[j[0]] == "number" ? he(A[j[0]], j[2] ?? 3) : A[j[0]]}</td>`).join("")}<td><button class="del" data-i="${y}" title="${translate("删除")}">×</button></td></tr>`).join("")}</tbody></table></div>`,
    ),
      n
        .querySelectorAll(".del")
        .forEach((A) =>
          A.addEventListener("click", () => T.deleteRecord(+A.dataset.i)),
        ));
  }
  return {
    render(T, v) {
      ss[T]
        ? L(T, v)
        : T === "energy"
          ? f(v)
          : T === "tape"
            ? b(v)
            : T === "gates"
              ? x(v)
              : T === "collisions"
                ? B(v)
                : T === "fitF" || T === "fitM" || T === "fitN"
                  ? u(T, v)
                  : T === "table" && P(v);
    },
    reset() {
      ((a = null), (l = null), n.replaceChildren());
    },
    resize() {
      a?.redraw();
    },
  };
}
function Tn() {
  let n = null,
    a = null,
    i = !1;
  const l = {};
  function g() {
    if (n) return n;
    const f = window.AudioContext || window.webkitAudioContext;
    return f
      ? ((n = new f()),
        (a = n.createGain()),
        (a.gain.value = 0.5),
        a.connect(n.destination),
        n)
      : null;
  }
  function d(f, b, N, x, B) {
    const u = n.createGain();
    return (
      u.gain.setValueAtTime(0, b),
      u.gain.linearRampToValueAtTime(B, b + N),
      u.gain.exponentialRampToValueAtTime(1e-4, b + N + x),
      f.connect(u),
      u.connect(a),
      u
    );
  }
  function m(f) {
    const b = n.createBuffer(1, Math.ceil(n.sampleRate * f), n.sampleRate),
      N = b.getChannelData(0);
    for (let B = 0; B < N.length; B++) N[B] = Math.random() * 2 - 1;
    const x = n.createBufferSource();
    return ((x.buffer = b), x);
  }
  const L = {
    unlock() {
      (g(), n?.state === "suspended" && n.resume());
    },
    get muted() {
      return i;
    },
    setMuted(f) {
      ((i = f), a && (a.gain.value = f ? 0 : 0.5));
    },
    beep(f = 2400) {
      if (!g() || i) return;
      const b = n.createOscillator();
      ((b.type = "sine"),
        (b.frequency.value = f),
        d(b, n.currentTime, 0.004, 0.07, 0.12),
        b.start(),
        b.stop(n.currentTime + 0.1));
    },
    clack(f = 1) {
      if (!g() || i) return;
      const b = m(0.08),
        N = n.createBiquadFilter();
      ((N.type = "bandpass"),
        (N.frequency.value = 2200),
        (N.Q.value = 3),
        b.connect(N),
        d(N, n.currentTime, 0.002, 0.06, 0.5 * Math.min(1, f)),
        b.start());
      const x = n.createOscillator();
      ((x.frequency.value = 820),
        d(x, n.currentTime, 0.002, 0.05, 0.12 * Math.min(1, f)),
        x.start(),
        x.stop(n.currentTime + 0.08));
    },
    thud() {
      if (!g() || i) return;
      const f = n.createOscillator();
      (f.frequency.setValueAtTime(140, n.currentTime),
        f.frequency.exponentialRampToValueAtTime(50, n.currentTime + 0.15),
        d(f, n.currentTime, 0.004, 0.18, 0.5),
        f.start(),
        f.stop(n.currentTime + 0.25));
    },
    loop(f, b) {
      if (!(b && (!g() || i)) && n) {
        if (b && !l[f]) {
          const N = n.createGain();
          ((N.gain.value = 0),
            N.gain.linearRampToValueAtTime(
              {
                ticker: 0.05,
                motor: 0.04,
                air: 0.05,
              }[f] ?? 0.04,
              n.currentTime + 0.08,
            ),
            N.connect(a));
          let x;
          if (f === "air") {
            ((x = m(2)), (x.loop = !0));
            const B = n.createBiquadFilter();
            ((B.type = "highpass"),
              (B.frequency.value = 1800),
              x.connect(B),
              B.connect(N));
          } else {
            ((x = n.createOscillator()),
              (x.type = f === "ticker" ? "square" : "sawtooth"),
              (x.frequency.value = f === "ticker" ? 100 : 180));
            const B = n.createBiquadFilter();
            ((B.type = "lowpass"),
              (B.frequency.value = f === "ticker" ? 900 : 600),
              x.connect(B),
              B.connect(N));
          }
          (x.start(),
            (l[f] = {
              src: x,
              g: N,
            }));
        } else if (!b && l[f]) {
          const { src: N, g: x } = l[f];
          (x.gain.linearRampToValueAtTime(0, n.currentTime + 0.08),
            N.stop(n.currentTime + 0.1),
            delete l[f]);
        }
      }
    },
    stopAll() {
      for (const f of Object.keys(l)) L.loop(f, !1);
    },
  };
  return L;
}
const Fn = 0.2,
  Nn = 0.2,
  ns = 0.1,
  lt = [1, 0.25, 0.1],
  Sn = {
    air: !1,
    angle: 0,
    kind: "cart",
    M: 0.5,
    m: 0,
    strip: null,
    tape: !1,
    gates: 0,
    g1: 0.55,
    g2: 1.15,
    d: 0.01,
    puller: !1,
    u: 0.04,
    n: 0,
    sensor: !1,
    balance: !1,
    B: !1,
    MB: 0.4,
    vA: 0,
    vB: 0,
    xA: 0.25,
    xB: 1,
    collide: "none",
    arrows: !1,
    decomp: !1,
    bumperR: null,
  },
  Ln = {
    object: "steel",
    vacuum: !1,
    h1: 0.3,
    h2: 0.9,
    arrows: !1,
  },
  Bn = {
    profile: "up",
    arrows: !0,
  },
  oe = (n, a = 3) =>
    n == null || !isFinite(n)
      ? "—"
      : (Math.abs(n) < 0.5 * 10 ** -a ? 0 : n).toFixed(a);
function jn() {
  const n = (e) => document.getElementById(e);
  n("stage");
  const a = Ys(n("c3")),
    { scene: i, camera: l, controls: g } = a,
    d = an(i),
    m = d.L,
    L = Tn(),
    f = Te(),
    b = {
      cartA: Xt("A"),
      cartB: Xt("B"),
      gliderA: Zt("A"),
      gliderB: Zt("B"),
      block: dn(),
    };
  for (const e of Object.values(b))
    ((e.group.visible = !1), d.rail.add(e.group));
  const N = pn();
  d.root.add(N.group);
  const x = [ct(6e-4, f.string, 5), ct(6e-4, f.string, 5)];
  x.forEach((e) => d.root.add(e));
  const B = un(d),
    u = [es(d, "g1"), es(d, "g2")],
    P = hn(i),
    T = u.map(() => fn());
  T.forEach((e) => i.add(e));
  const v = mn(d),
    w = gn();
  d.rail.add(w.group);
  const A = Ls();
  i.add(A);
  let y = null,
    j = null;
  const R = new ge({
      color: "#ffcf7a",
      transparent: !0,
      opacity: 0.5,
      depthWrite: !1,
      blending: Os,
      toneMapped: !1,
    }),
    C = new zs(new $e(0.004, 0.05, 0.09), R, 120);
  ((C.count = 0), (C.frustumCulled = !1), d.rail.add(C));
  const I = ["G", "N", "f", "T", "F", "Gx", "Gy", "Gh", "Th"],
    _ = (e) =>
      yn[
        {
          Gh: "G",
          Th: "T",
        }[e] || e
      ] || "#fff",
    q = Object.fromEntries(
      I.map((e) => [
        e,
        Mn(_(e), {
          dashed: e === "Gx" || e === "Gy",
        }),
      ]),
    );
  Object.values(q).forEach((e) => i.add(e.group));
  const se = n("labels"),
    X = Object.fromEntries(
      I.map((e) => {
        const o = document.createElement("div");
        return (
          (o.className = "flab"),
          o.style.setProperty("--c", _(e)),
          se.appendChild(o),
          [e, o]
        );
      }),
    ),
    t = {
      li: 0,
      lesson: null,
      params: {},
      phase: "idle",
      speed: 0,
      engine: null,
      run: null,
      prev: [],
      records: {},
      replay: null,
      showArrows: !1,
      strobe: !1,
      drawn: 0,
      lastX: [0, 0],
      camFollowY: null,
      hint: "",
    },
    ue = An(n("dockBody")),
    Me = n("bSound"),
    k = () => t.lesson.rig === "track",
    F = (e) => (e.kind === "block" ? "block" : e.air ? "glider" : "cart"),
    p = (e) => {
      const o = t.params;
      return e === 0
        ? o.kind === "block"
          ? b.block
          : o.air
            ? b.gliderA
            : b.cartA
        : o.air
          ? b.gliderB
          : b.cartB;
    },
    O = (e, o) => (o === "block" ? 0.12 : e.collide === "spring" ? 0.2 : 0.182),
    W = (e) => (e.balance ? (Math.atan(Tt.wheel.k) * 180) / Math.PI : e.angle),
    ee = (e) => (e.kind === "block" ? Nn + e.n * 0.1 : e.M),
    S = (e) => Math.max(0, Math.round((e - Fn) / rn));
  function D(e) {
    const o = F(e),
      M = [
        {
          id: "A",
          kind: o === "block" ? "block" : "cart",
          mass: ee(e),
          len: O(e, o),
          x: e.xA,
          v: e.vA,
          flag: o === "block" ? 0 : e.d,
          surface: o === "block" ? e.strip || "wood" : "wheel",
        },
      ];
    e.B &&
      o !== "block" &&
      M.push({
        id: "B",
        kind: "cart",
        mass: e.MB,
        len: O(e, o),
        x: e.xB,
        v: e.vB,
        flag: e.d,
        surface: "wheel",
      });
    let h = null;
    if (e.m > 0 && o !== "block") {
      const c = N.setMass(e.m);
      d.setAngle(W(e));
      const $ = d.pulleySide().y - ns - c - pe.floor - 0.004;
      h = {
        body: "A",
        mass: e.m,
        drop: $,
      };
    }
    return {
      length: m,
      angle: W(e),
      air: e.air,
      bodies: M,
      hanger: h,
      puller: e.puller
        ? {
            body: "A",
            speed: e.u,
            k: tt,
          }
        : null,
      gates: e.gates
        ? [
            {
              x: e.g1,
            },
            {
              x: e.g2,
            },
          ].slice(0, e.gates)
        : [],
      tape: e.tape
        ? {
            body: "A",
          }
        : null,
      restitution: e.collide === "spring" ? 1 : 0.6,
      stick: e.collide === "velcro",
      endRestitution:
        e.bumperR === "spring"
          ? e.air
            ? 0.95
            : 0.9
          : o === "block"
            ? 0.05
            : 0.3,
    };
  }
  function H() {
    const e = t.lesson.rig,
      o = t.engine,
      M = {};
    let h;
    if (e === "track") {
      const $ = o.state.samples,
        U = o.bodies.map((G) => G.x0),
        V = o.bodies.map((G) => G.m),
        te = {
          x: (G) => G.b[0].x - U[0],
          v: (G) => G.b[0].v,
          a: (G) => G.b[0].a,
          xB: (G) => (G.b[1] ? G.b[1].x - U[0] : null),
          vB: (G) => G.b[1]?.v ?? null,
          aB: (G) => G.b[1]?.a ?? null,
          F: (G) => G.F,
          T: (G) => G.T,
          Ek: (G) => G.Ek,
          Ep: (G) => G.Ep - t.EpMin,
          Q: (G) => G.Q + G.Qc,
          E: (G) => G.Ek + G.Ep - t.EpMin,
          pA: (G) => V[0] * G.b[0].v,
          pB: (G) => (G.b[1] ? V[1] * G.b[1].v : null),
          p: (G) => G.b.reduce((ae, re, de) => ae + V[de] * re.v, 0),
        };
      return (
        (h = (G) => {
          const ae = te[G];
          if (!ae) return [];
          const re = M[G];
          if (re && re.n === $.length) return re.pts;
          const de = [];
          for (const we of $) {
            const ke = ae(we);
            ke != null && de.push([we.t, ke]);
          }
          return (
            (M[G] = {
              n: $.length,
              pts: de,
            }),
            de
          );
        }),
        {
          rig: e,
          samples: $,
          series: h,
          dots: o.tape?.dots,
          gateLog: o.state.gateLog,
          events: o.state.events,
        }
      );
    }
    if (e === "fall") {
      const $ = o.state.samples,
        U = o.object.m,
        V = {
          x: (te) => te.y,
          v: (te) => te.v,
          a: (te) => te.a,
          F: (te) => U * (Z - te.a),
        };
      return (
        (h = (te) => {
          const G = V[te];
          if (!G) return [];
          if (M[te]?.n === $.length) return M[te].pts;
          const ae = $.map((re) => [re.t, G(re)]);
          return (
            (M[te] = {
              n: $.length,
              pts: ae,
            }),
            ae
          );
        }),
        {
          rig: e,
          samples: $,
          series: h,
          gateLog: o.state.gateLog,
          events: [],
        }
      );
    }
    const c = o.state.samples,
      E = {
        x: ($) => $.y,
        v: ($) => $.v,
        a: ($) => $.a,
        N: ($) => $.N,
        mg: () => o.mass * Z,
      };
    return (
      (h = ($) => {
        const U = E[$];
        if (!U) return [];
        if (M[$]?.n === c.length) return M[$].pts;
        const V = c.map((te) => [te.t, U(te)]);
        return (
          (M[$] = {
            n: c.length,
            pts: V,
          }),
          V
        );
      }),
      {
        rig: e,
        samples: c,
        series: h,
        gateLog: [],
        events: [],
      }
    );
  }
  function Q() {
    const e = t.params;
    if (
      ((t.replay = null),
      (t.phase = "idle"),
      L.stopAll(),
      t.lesson.rig === "track")
    ) {
      (d.setAir(!!e.air),
        d.setStrip(e.kind === "block" ? e.strip || "wood" : null),
        d.setAngle(W(e)),
        (t.engine = Jt(D(e))));
      const o = t.engine,
        M = Math.sin(o.angle);
      t.EpMin =
        o.bodies.reduce(
          (c, E) =>
            c -
            E.m *
              Z *
              (M > 0 ? o.limits(E)[1] - E.x0 : o.limits(E)[0] - E.x0) *
              M,
          0,
        ) - (o.hanger ? o.hanger.m * Z * o.hanger.drop : 0);
      for (const c of Object.values(b)) c.group.visible = !1;
      const h = p(0);
      if (
        ((h.group.visible = !0),
        h.setBars(e.kind === "block" ? e.n : S(e.M)),
        h.setBumper(
          e.collide === "spring" || e.bumperR === "spring"
            ? "spring"
            : e.collide,
        ),
        h.setFlag(e.gates > 0),
        e.B && e.kind !== "block")
      ) {
        const c = p(1);
        ((c.group.visible = !0),
          c.setBars(S(e.MB)),
          c.setBumper(e.collide),
          c.setFlag(e.gates > 0));
      }
      ((N.group.visible = !!o.hanger),
        x.forEach((c) => (c.visible = !!o.hanger)),
        o.hanger && N.setMass(e.m),
        (d.pulley.visible = !e.puller),
        B.setVisible(!!e.tape),
        B.clear(),
        (t.drawn = 0),
        u.forEach((c, E) => c.setVisible(E < e.gates)),
        T.forEach((c, E) => (c.visible = E < e.gates)),
        P.setVisible(e.gates > 0),
        P.show(0, e.gates > 0 ? "0.00" : ""),
        P.show(1, e.gates > 1 ? "0.00" : ""),
        v.setVisible(!!e.puller),
        (w.group.visible = !!e.sensor && !!o.hanger),
        (A.visible = !!o.hanger),
        (C.count = 0),
        (t.lastX = o.bodies.map((c) => c.x)));
    } else if (t.lesson.rig === "fall")
      ((t.engine = sn({
        object: e.object,
        vacuum: e.vacuum,
        height: ie(e.object),
        gates: [e.h1, e.h2],
      })),
        y.setObject(e.object),
        y.setVacuum(e.vacuum),
        y.setMagnet(!0),
        y.gates[0].place(e.h1 + je[e.object].r),
        y.gates[1].place(e.h2 + je[e.object].r),
        y.ghosts([]));
    else {
      const o = e.profile === "down" ? 9.6 : 0;
      ((t.engine = nn({
        profile: e.profile,
        mass: 5,
        y0: o,
      })),
        j.setCut(!1),
        j.setBrake(0));
    }
    ((t.run = H()),
      (t.Emax =
        t.lesson.rig === "track"
          ? Math.max(1e-6, t.engine.energy().E - t.EpMin)
          : 0),
      Ct(0),
      t.lesson.live && (t.phase = "running"),
      vt(!0),
      De(!0),
      yt());
  }
  const ie = (e) =>
    y.top - (pe.floor + 0.06) - je[e].r * (e === "feather" ? 0 : 2);
  function ye(e) {
    const o = t.engine;
    return o.limits(o.bodies[e]);
  }
  function ve() {
    (L.unlock(),
      t.replay && (t.replay = null),
      t.phase === "done" && Q(),
      t.phase === "running"
        ? (t.phase = "paused")
        : ((t.phase = "running"),
          t.lesson.rig === "fall" && (y.setMagnet(!1), L.beep(900))),
      vt(),
      yt());
  }
  function ce() {
    ((t.phase = "done"),
      L.stopAll(),
      t.prev.push(t.run.series),
      t.prev.length > 3 && t.prev.shift(),
      (t.prevKey = t.lesson.id),
      vt(),
      De(!0),
      yt());
  }
  function ne() {
    Q();
  }
  function Fe() {
    return t.lesson.id === "energy"
      ? 14
      : t.lesson.id === "friction"
        ? 10
        : t.lesson.live
          ? 600
          : 8;
  }
  function nt(e) {
    const o = t.engine;
    if (t.lesson.rig === "track") {
      const M = o.step(e);
      for (const $ of M)
        if ($.type === "collide")
          L.clack(Math.abs($.before[0] - $.before[1]) * 1.5);
        else if ($.type === "wall") L.clack(Math.abs($.v) * 1.2);
        else if ($.type === "gate") {
          L.beep();
          const U = $.gate === "g1" ? 0 : 1;
          P.show(U, ($.dt * 1e3).toFixed(2));
        } else $.type === "land" && L.thud();
      (t.params.tape && L.loop("ticker", !0),
        t.params.puller && L.loop("motor", !0),
        t.params.air && L.loop("air", !0));
      const h = o.state.t,
        c = o.puller && o.puller.xp < m - 0.25;
      o.puller && !c && (o.puller.on = !1);
      const E = o.bodies.every(($) => $.v === 0) && (!o.puller || !o.puller.on);
      ((h > Fe() || (E && h > 0.3 && !t.lesson.live)) && ce(),
        t.lesson.live &&
          E &&
          h > 0.3 &&
          o.bodies[0].x >= o.limits(o.bodies[0])[1] - 1e-6 &&
          ce());
    } else if (t.lesson.rig === "fall") {
      o.step(e);
      const M = o.state.gateLog.length;
      (M > (t.gateSeen || 0) && (L.beep(), (t.gateSeen = M)),
        o.state.done && (t.landed || L.thud(), (t.landed = !0), ce()));
    } else (o.step(e), o.state.done && ce());
  }
  const ze = new le(),
    qe = new le(),
    Ne = new le();
  function ps() {
    const e = t.engine;
    return {
      t: e.state.t,
      b: e.bodies.map((o) => ({
        x: o.x,
        v: o.v,
        a: o.a,
        f: o.f,
        N: o.N,
      })),
      hy: e.hanger ? e.hanger.y : 0,
      T: e.hanger ? e.hanger.T : 0,
      F: e.puller ? e.puller.F : 0,
      taut: e.hanger ? e.hanger.taut : !1,
    };
  }
  function us(e, o) {
    const M = t.params,
      h = t.engine,
      c = d.surface(),
      E = t.phase === "running" && !t.replay;
    if (
      (e.b.forEach((G, ae) => {
        const re = p(ae);
        (re.group.position.set(G.x - m, c, 0),
          re.spinWheels(G.x - t.lastX[ae]),
          (t.lastX[ae] = G.x));
      }),
      e.b.length > 1)
    ) {
      const G = p(0),
        ae = p(1),
        re = e.b[1].x - e.b[0].x - dt,
        de = Math.max(0, 0.052 - re) / 2;
      (G.squash(1, Math.min(1, de / 0.026)),
        ae.squash(-1, Math.min(1, de / 0.026)));
    }
    if (M.bumperR === "spring") {
      const G = p(0),
        ae = m - ls,
        re = Math.max(0, e.b[0].x + dt / 2 + 0.026 - ae);
      G.squash(1, Math.min(1, re / 0.026));
    }
    const $ = e.b[0],
      U = p(0),
      V = U.len;
    if (h.hanger) {
      const G = d.pulleySide(ze),
        ae = G.y - ns - e.hy;
      N.group.position.set(G.x, ae, 0);
      const re = $.x + V / 2 + 0.012,
        de = c + (U.kind === "glider" ? Ve - 0.012 : Ve);
      let we;
      M.sensor
        ? (w.group.position.set(re + 0.018 - m, de, 0),
          w.show(oe(e.T, 2)),
          (we = d.toWorld(re + 0.042, de, 0, qe)))
        : (we = d.toWorld(re, de, 0, qe));
      const ke = d.pulleyTop(Ne);
      (x[0].update(we, ke),
        x[1].update(G, new le(G.x, ae - 0.006, 0)),
        (d.pulley.spin.rotation.z = -e.hy / et));
    }
    if (M.tape && h.tape) {
      const G = h.tape.dots;
      for (; t.drawn < G.length;) {
        const ae = G[t.drawn++];
        B.dot(ae.x - V / 2 - Ft);
      }
      B.update($.x - V / 2, c + 0.0012, E, o);
    }
    const te =
      (U.kind === "glider" ? 0.04 : 0.068) +
      S(Math.max(M.M, M.B ? M.MB : 0)) * 0.0058;
    if (
      (u.forEach((G, ae) => {
        if (ae >= M.gates) return;
        const re = ae ? M.g2 : M.g1;
        G.place(re, c + te);
        const de = e.b.some((we) => Math.abs(we.x - re) <= M.d / 2);
        (G.setBlocked(de),
          T[ae].update(d.toWorld(re, 0.02, -0.07, ze), P.jack(), 0.06, 0.004));
      }),
      M.puller &&
        v.update(
          $.x + V / 2 + 0.009,
          e.F / tt,
          c + Ve,
          c,
          o,
          E && h.puller?.on,
        ),
      t.strobe && t.lesson.id !== "friction")
    ) {
      const G = t.engine.state.samples,
        ae = e.t;
      let re = 0;
      const de = new qs();
      for (let we = 1; re < 120; we++) {
        const ke = we * 0.2;
        if (ke > ae - 0.05) break;
        kt(G, ke).b.forEach((Ce) => {
          re >= 120 ||
            (de.makeTranslation(Ce.x - m, c + 0.03, 0),
            C.setMatrixAt(re++, de));
        });
      }
      ((C.count = re), (C.instanceMatrix.needsUpdate = !0));
    } else C.count = 0;
    t.showArrows ? fs(e, c, U) : mt();
  }
  function hs(e) {
    return Math.min(0.05, 0.17 / Math.max(0.5, e));
  }
  function fs(e, o, M) {
    const h = t.engine,
      c = t.params,
      E = e.b[0],
      $ = h.angle,
      U = new le(Math.cos($), -Math.sin($), 0),
      V = new le(Math.sin($), Math.cos($), 0),
      te = new le(0, -1, 0),
      ae = h.bodies[0].m * Z,
      re = hs(Math.max(ae, h.hanger ? h.hanger.m * Z : 0)),
      de = M.kind === "block" ? 0.025 : M.kind === "glider" ? 0.01 : 0.025,
      we = d.toWorld(E.x, o + de, 0);
    we.z = 0.06;
    const ke = {};
    if (
      ((ke.G = [we, te, ae, "G"]),
      (ke.N = [we, V, E.N, "N"]),
      Math.abs(E.f) > 1e-4 &&
        (ke.f = [
          we,
          U.clone().multiplyScalar(Math.sign(E.f)),
          Math.abs(E.f),
          "f",
        ]),
      h.hanger && e.taut && (ke.T = [we, U, e.T, "T"]),
      c.puller && e.F > 1e-4 && (ke.F = [we, U, e.F, "F"]),
      c.decomp &&
        ((ke.Gx = [we, U, ae * Math.sin($), "G∥"]),
        (ke.Gy = [we, V.clone().negate(), ae * Math.cos($), "G⊥"])),
      h.hanger && N.group.visible)
    ) {
      const Be = N.group.position.clone().add(new le(0.03, -0.07, 0.02));
      ((ke.Gh = [Be, te, h.hanger.m * Z, "G'"]),
        e.taut && (ke.Th = [Be, new le(0, 1, 0), e.T, "T"]));
    }
    for (const Be of I) {
      const Ce = ke[Be];
      if (!Ce) {
        (q[Be].hide(), (X[Be].style.display = "none"));
        continue;
      }
      q[Be].set(Ce[0], Ce[1], Ce[2] * re);
      const Bs = c.decomp
        ? {
            G: 1,
            Gy: -1,
          }[Be]
        : 0;
      Ye(Be, q[Be].tip, `${Ce[3]} = ${Ce[2].toFixed(2)} N`, Ce[0], Bs);
    }
  }
  function Ye(e, o, M, h, c = 0) {
    const E = X[e],
      $ = a.project(o);
    if ($.behind) {
      E.style.display = "none";
      return;
    }
    ((E.style.display = ""), E.textContent !== M && (E.textContent = M));
    let U = 0,
      V = -1;
    if (h) {
      const de = a.project(h),
        we = Math.hypot($.x - de.x, $.y - de.y);
      we > 1 && ((U = ($.x - de.x) / we), (V = ($.y - de.y) / we));
    }
    c && ((U = c), (V = 0));
    const te = E.offsetWidth || 80,
      G = E.offsetHeight || 20,
      ae = $.x + U * 10 + (U < -0.3 ? -te : U > 0.3 ? 0 : -te / 2),
      re = $.y + V * 10 + (V < -0.3 ? -G : V > 0.3 ? 0 : -G / 2);
    E.style.transform = `translate(${ae.toFixed(1)}px, ${re.toFixed(1)}px)`;
  }
  function mt() {
    for (const e of I) (q[e].hide(), (X[e].style.display = "none"));
  }
  function ms(e) {
    const o = t.engine,
      M = t.params.object === "feather" && !t.params.vacuum ? 1 : 0;
    y.place(e.y, e.t, M);
    const h = je[t.params.object].r;
    if (
      (y.gates.forEach((c) => c.setBlocked(Math.abs(e.y + h - c.y) <= h)),
      t.strobe
        ? y.ghosts(
            o.flashes.filter((c) => c.t <= e.t && c.t > 0).map((c) => c.y),
          )
        : y.ghosts([]),
      t.showArrows)
    ) {
      const c = je[t.params.object],
        E = new le(Ze.x, y.top - e.y - c.r, Ze.z + 0.03),
        $ = 0.25 / (c.m * Z);
      (q.G.set(E, new le(0, -1, 0), c.m * Z * $),
        Ye(
          "G",
          q.G.tip,
          `G = ${(c.m * Z * 1e3).toFixed(1)} mN`,
          q.G.group.position,
        ));
      const U = c.m * (Z - e.a);
      U > 1e-6
        ? (q.f.set(E, new le(0, 1, 0), U * $),
          Ye(
            "f",
            q.f.tip,
            `f = ${(U * 1e3).toFixed(1)} mN`,
            q.f.group.position,
          ))
        : (q.f.hide(), (X.f.style.display = "none"));
      for (const V of I)
        V !== "G" && V !== "f" && (q[V].hide(), (X[V].style.display = "none"));
    } else mt();
  }
  function gs(e) {
    const o = t.params,
      M = cs[o.profile];
    let h = 0;
    const c = M.map(([$]) => (h += $));
    (j.setCut(o.profile === "cut" && e.t >= c[2]),
      j.setBrake(o.profile === "cut" && e.t >= c[3] && e.t < c[4] ? 2.5 : 0),
      j.place(e.y, e.N, e.v, e.t));
    const E = Re.y + e.y;
    if (t.camFollowY != null) {
      const $ = E - t.camFollowY;
      ((l.position.y += $), (g.target.y += $));
    }
    if (((t.camFollowY = E), t.showArrows)) {
      const $ = new le(Re.x + 0.14, Re.y + Nt + e.y + 0.16, Re.z + 0.05),
        U = 0.5 / (5 * Z);
      (q.G.set($, new le(0, -1, 0), 5 * Z * U),
        Ye("G", q.G.tip, `mg = ${(5 * Z).toFixed(1)} N`, q.G.group.position),
        q.N.set($.clone().add(new le(0.04, 0, 0)), new le(0, 1, 0), e.N * U),
        e.N > 0.01
          ? Ye("N", q.N.tip, `N = ${e.N.toFixed(1)} N`, q.N.group.position)
          : (X.N.style.display = "none"));
      for (const V of I)
        V !== "G" && V !== "N" && (q[V].hide(), (X[V].style.display = "none"));
    } else mt();
  }
  function bs() {
    const e = t.engine,
      o = t.lesson.rig,
      M = t.replay ? t.replay.t : null;
    if (o === "track") {
      if (M == null) return ps();
      const h = kt(e.state.samples, M);
      return {
        t: M,
        b: h.b,
        hy: h.hy,
        T: h.T,
        F: h.F,
        taut: e.hanger ? h.hy < e.hanger.drop - 1e-6 : !1,
      };
    }
    if (o === "fall") {
      if (M == null)
        return {
          t: e.state.t,
          y: e.state.y,
          v: e.state.v,
          a: e.state.a,
        };
      const h = e.state.samples,
        c = ws(h, M);
      return {
        t: M,
        y: c.y,
        v: c.v,
        a: c.a,
      };
    }
    return M == null
      ? {
          ...e.state,
        }
      : e.at(M);
  }
  function ws(e, o) {
    let M = 0,
      h = e.length - 1;
    for (; h - M > 1;) {
      const U = (M + h) >> 1;
      e[U].t <= o ? (M = U) : (h = U);
    }
    const c = e[M],
      E = e[h];
    if (!E || E.t === c.t) return c;
    const $ = Math.max(0, Math.min(1, (o - c.t) / (E.t - c.t)));
    return {
      t: o,
      y: c.y + (E.y - c.y) * $,
      v: c.v + (E.v - c.v) * $,
      a: E.a,
    };
  }
  function Ct(e) {
    const o = bs();
    ((t.state = o),
      t.lesson.rig === "track"
        ? us(o, e)
        : t.lesson.rig === "fall"
          ? ms(o)
          : gs(o));
  }
  const vs = {
      t: () => [translate("时间 t"), `${oe(t.state.t, 2)} s`],
      x: () => [
        translate("位移 x"),
        `${oe(t.state.b[0].x - t.engine.bodies[0].x0, 3)} m`,
      ],
      y: () => [translate("下落高度 h"), `${oe(t.state.y, 3)} m`],
      v: () => [
        translate("速度 v"),
        `${oe(t.lesson.rig === "track" ? t.state.b[0].v : t.state.v, 3)} m/s`,
      ],
      a: () => [
        translate("加速度 a"),
        `${oe(t.lesson.rig === "track" ? t.state.b[0].a : t.state.a, 3)} m/s²`,
      ],
      F: () =>
        t.lesson.id === "friction"
          ? [translate("测力计示数 F"), `${oe(t.state.F, 2)} N`]
          : [translate("钩码重力 mg"), `${oe(t.params.m * Z, 3)} N`],
      T: () => [translate("绳的拉力 T"), `${oe(t.state.T, 3)} N`],
      N: () =>
        t.lesson.rig === "elevator"
          ? [translate("台秤压力 N"), `${oe(t.state.N, 1)} N`]
          : [translate("压力 N"), `${oe(t.state.b[0].N, 2)} N`],
      mu: () => {
        const e = t.run;
        if (t.phase !== "done") return [translate("μ = F / N"), "—"];
        const o = Gt(e);
        return [translate("μ = f / N"), o ? oe(o.mu, 3) : "—"];
      },
      angle: () => [translate("倾角 θ"), `${oe(W(t.params), 1)}°`],
      Gx: () => [
        translate("G∥ = G sinθ"),
        `${oe(t.engine.bodies[0].m * Z * Math.sin(t.engine.angle), 3)} N`,
      ],
      Gy: () => [
        translate("G⊥ = G cosθ"),
        `${oe(t.engine.bodies[0].m * Z * Math.cos(t.engine.angle), 3)} N`,
      ],
      f: () => [translate("摩擦力 f"), `${oe(Math.abs(t.state.b[0].f), 3)} N`],
      fmax: () => [
        translate("最大静摩擦 μₛN"),
        `${oe(t.engine.bodies[0].mu.s * t.engine.bodies[0].m * Z * Math.cos(t.engine.angle), 3)} N`,
      ],
      gate1: () => It("g1", translate("光电门 1")),
      gate2: () => It("g2", translate("光电门 2")),
      aGate: () => {
        const e = t.run.gateLog,
          o = e.find((c) => c.gate === "g1"),
          M = e.find((c) => c.gate === "g2"),
          h = Pt();
        return [
          translate("a = (v₂² − v₁²)/2L"),
          o && M ? `${oe((M.v ** 2 - o.v ** 2) / (2 * h), 3)} m/s²` : "—",
        ];
      },
      Ek: () => [
        translate("动能 Eₖ"),
        `${oe(t.lesson.rig === "track" ? gt() : 0, 4)} J`,
      ],
      Ep: () => [translate("势能 Eₚ"), `${oe(bt(), 4)} J`],
      Q: () => [translate("内能 Q"), `${oe(Rt(), 4)} J`],
      E: () => [translate("机械能 E"), `${oe(gt() + bt(), 4)} J`],
      vA: () => [translate("v_A"), `${oe(t.state.b[0].v, 3)} m/s`],
      vB: () => [translate("v_B"), `${oe(t.state.b[1]?.v, 3)} m/s`],
      p: () => [
        translate("总动量 p"),
        `${oe(
          t.state.b.reduce((e, o, M) => e + t.engine.bodies[M].m * o.v, 0),
          4,
        )} kg·m/s`,
      ],
      scale: () => [translate("台秤示数"), `${oe(t.state.N / Z, 2)} kg`],
    },
    gt = () =>
      t.state.b.reduce(
        (e, o, M) => e + 0.5 * t.engine.bodies[M].m * o.v * o.v,
        0,
      ) +
      (t.engine.hanger
        ? 0.5 * t.engine.hanger.m * t.state.b[0].v ** 2 * (t.state.taut ? 1 : 0)
        : 0),
    bt = () => {
      const e = t.engine,
        o = Math.sin(e.angle);
      return (
        e.bodies.reduce(
          (M, h, c) => M - h.m * Z * (t.state.b[c].x - h.x0) * o,
          0,
        ) -
        (e.hanger ? e.hanger.m * Z * t.state.hy : 0) -
        t.EpMin
      );
    },
    Rt = () => {
      const e = t.replay ? kt(t.engine.state.samples, t.replay.t) : null;
      return e ? e.Q + e.Qc : t.engine.state.Q + t.engine.state.Qc;
    };
  function It(e, o) {
    const M = [...t.run.gateLog]
      .reverse()
      .find((h) => h.gate === e && (!t.replay || h.tOff <= t.replay.t));
    return [o, M ? `${oe(M.dt * 1e3, 2)} ms · ${oe(M.v, 3)} m/s` : "—"];
  }
  const Pt = () =>
    t.lesson.rig === "fall"
      ? Math.abs(t.params.h2 - t.params.h1)
      : Math.abs(t.params.g2 - t.params.g1);
  function xs(e) {
    const o = t.engine,
      M = e.events.find((V) => V.type === "land"),
      h =
        Math.min(
          M ? M.t : 1 / 0,
          ...e.events.filter((V) => V.type === "wall").map((V) => V.t),
          o.state.t,
        ) - 0.02,
      c = e.samples.filter((V) => V.t > 0.05 && V.t < h);
    if (c.length < 5) return null;
    const E = At(
        c.map((V) => V.t),
        c.map((V) => V.b[0].v),
      ),
      $ = c.reduce((V, te) => V + te.T, 0) / c.length,
      U = t.params;
    return {
      m: U.m,
      M: o.bodies[0].m,
      mg: U.m * Z,
      T: $,
      F: U.sensor ? $ : U.m * Z,
      a: E.k,
    };
  }
  function Gt(e) {
    const o = e.samples;
    if (o.length < 20) return null;
    let M = 0,
      h = 0;
    for (const V of o) V.F > M && ((M = V.F), (h = V.t));
    const c = o.filter((V) => V.t > h + 0.8 && V.b[0].v > 0);
    if (c.length < 10) return null;
    const E = c.reduce((V, te) => V + te.F, 0) / c.length,
      $ = t.engine.bodies[0].m * Z,
      U = t.params.strip;
    return {
      surf: {
        wood: translate("木板"),
        towel: translate("毛巾"),
        rubber: translate("橡胶"),
        felt: translate("毛毡"),
      }[U],
      N: $,
      f: E,
      peak: M,
      mu: E / $,
    };
  }
  function ys() {
    if (t.phase !== "done") return;
    const o = t.lesson.record === "newton" ? xs(t.run) : Gt(t.run);
    if (!o) {
      Ke(translate("这次实验的数据不足，请再做一次。"));
      return;
    }
    ((t.records[t.lesson.id] ||= []).push(o),
      Ke(translate("已记录第 {0} 组数据", [t.records[t.lesson.id].length])),
      De(!0));
  }
  const Ot = {
    newton: [
      ["m", "m / kg", 3],
      ["M", "M / kg", 2],
      ["mg", "mg / N", 3],
      ["T", translate("拉力 T / N"), 3],
      ["a", "a / (m·s⁻²)", 3],
    ],
    friction: [
      ["surf", translate("接触面")],
      ["N", "N / N", 2],
      ["peak", translate("最大静摩擦 / N"), 2],
      ["f", "f / N", 3],
      ["mu", "μ", 3],
    ],
  };
  let Ie = () => {};
  function Ms() {
    const e = n("nav");
    ((e.innerHTML = `<div class="navh">${translate("实验课题")}</div>`),
      _e.forEach((h, c) => {
        const E = document.createElement("button");
        ((E.className = "ni"),
          (E.innerHTML = `<em>${String(c + 1).padStart(2, "0")}</em><b></b><small></small>`),
          (E.querySelector("b").textContent = h.title),
          (E.querySelector("small").textContent = h.sub),
          E.addEventListener("click", () => Pe(c)),
          e.appendChild(E));
      }));
    const o = document.createElement("div");
    ((o.className = "navf"),
      (o.innerHTML = `<kbd>${translate("空格")}</kbd> ${translate("开始 / 暂停")}<br><kbd>⌫</kbd> ${translate("复位实验")}<br><kbd>S</kbd> ${translate("慢动作")}　<kbd>A</kbd> ${translate("受力")}<br><kbd>←</kbd><kbd>→</kbd> ${translate("切换课题")}`),
      e.appendChild(o));
    const M = n("prog");
    M.innerHTML = _e.map(() => "<i></i>").join("");
  }
  function ks() {
    const e = t.lesson;
    (document.querySelectorAll("#nav .ni").forEach((E, $) => {
      (E.classList.toggle("on", $ === t.li),
        $ === t.li && E.classList.add("seen"));
    }),
      document.querySelectorAll("#prog i").forEach((E, $) => {
        (E.classList.toggle("cur", $ === t.li),
          E.classList.toggle("on", $ < t.li));
      }));
    const o = n("chapter");
    (o.classList.remove("in"),
      o.offsetWidth,
      o.classList.add("in"),
      (o.querySelector(".n").textContent =
        `LESSON ${String(t.li + 1).padStart(2, "0")}`),
      (o.querySelector("h1").textContent = e.title),
      (o.querySelector("p").textContent = e.sub),
      (n("lesson").innerHTML =
        `<div class="lh"><em>${String(t.li + 1).padStart(2, "0")}</em><div><h2></h2><small></small></div></div><div class="body"></div><ol class="steps"></ol>`),
      (n("lesson").querySelector("h2").textContent = e.title),
      (n("lesson").querySelector("small").textContent = e.sub),
      (n("lesson").querySelector(".body").innerHTML = e.body),
      (n("lesson").querySelector(".steps").innerHTML = e.steps
        .map((E) => `<li>${E}</li>`)
        .join("")),
      (Ie = En(n("controls"), e.controls, t.params, Es)));
    const M = n("acts");
    ((M.innerHTML = `<button class="go" id="aGo"></button><button class="ghost" id="aReset" title="${translate("复位实验")} (⌫)"><svg viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 1 0 1.8-4.1"/><path d="M2.5 2.5v3h3"/></svg></button>${e.record ? `<button class="rec" id="aRec">● ${translate("记录数据")}</button>` : ""}`),
      n("aGo").addEventListener("click", ve),
      n("aReset").addEventListener("click", ne),
      n("aRec")?.addEventListener("click", ys));
    const h = n("tgs"),
      c = [
        ["arrows", translate("受力分析"), "A"],
        ["strobe", translate("频闪残影"), ""],
      ];
    ((h.innerHTML =
      c
        .map(
          ([E, $]) => `<button class="tg" data-k="${E}"><i></i>${$}</button>`,
        )
        .join("") +
      `<div class="speed" id="speed">${lt.map((E, $) => `<button data-i="${$}">${E === 1 ? "1×" : E === 0.25 ? "¼×" : "⅒×"}</button>`).join("")}</div>`),
      h
        .querySelectorAll(".tg")
        .forEach((E) => E.addEventListener("click", () => zt(E.dataset.k))),
      h
        .querySelectorAll("#speed button")
        .forEach((E) => E.addEventListener("click", () => qt(+E.dataset.i))),
      wt());
  }
  function wt() {
    (document
      .querySelectorAll("#tgs .tg")
      .forEach((e) =>
        e.classList.toggle(
          "on",
          e.dataset.k === "arrows" ? t.showArrows : t.strobe,
        ),
      ),
      document
        .querySelectorAll("#speed button")
        .forEach((e) => e.classList.toggle("on", +e.dataset.i === t.speed)));
  }
  function zt(e) {
    (e === "arrows" ? (t.showArrows = !t.showArrows) : (t.strobe = !t.strobe),
      wt());
  }
  function qt(e) {
    ((t.speed = e),
      wt(),
      (n("slow").hidden = e === 0),
      (n("slow").textContent =
        e === 1 ? translate("慢动作 ¼×") : translate("慢动作 ⅒×")));
  }
  function Es(e, o) {
    const M = t.params;
    ((M[e] = o),
      e === "balance" && o && (M.angle = W(M)),
      (e === "g1" || e === "g2") &&
        (M[e] = Math.max(0.25, Math.min(m - 0.2, o))),
      Q());
  }
  function vt(e) {
    const o = n("aGo");
    if (o) {
      const h =
          t.phase === "running"
            ? translate("暂停")
            : t.phase === "paused"
              ? translate("继续")
              : t.phase === "done"
                ? translate("再做一次")
                : translate("开始实验"),
        c =
          t.phase === "running"
            ? '<svg viewBox="0 0 16 16"><path d="M5 3v10M11 3v10"/></svg>'
            : '<svg viewBox="0 0 16 16"><path d="M4.5 2.8l8.5 5.2-8.5 5.2z" fill="currentColor"/></svg>';
      ((o.innerHTML = `${c}<span>${h}</span><kbd>Space</kbd>`),
        o.classList.toggle("running", t.phase === "running"));
    }
    const M = n("aRec");
    (M && (M.disabled = t.phase !== "done"), e && (xt = 0));
  }
  let xt = 0;
  function $s(e) {
    if (e - xt < 66) return;
    xt = e;
    const o = n("readouts"),
      M = t.lesson.readouts.map((te) => vs[te]?.()).filter(Boolean);
    (o.childElementCount !== M.length * 2 &&
      (o.innerHTML = M.map(() => "<span></span><b></b>").join("")),
      M.forEach(([te, G], ae) => {
        const re = o.children[ae * 2],
          de = o.children[ae * 2 + 1];
        (re.textContent !== te && (re.textContent = te),
          de.textContent !== G && (de.textContent = G));
      }));
    const h = n("hud"),
      c =
        t.lesson.rig === "elevator"
          ? [
              ["t", oe(t.state.t, 2), "s"],
              ["a", oe(t.state.a, 2), "m/s²"],
              [translate("示数"), oe(t.state.N / Z, 2), "kg"],
            ]
          : t.lesson.rig === "fall"
            ? [
                ["t", oe(t.state.t, 3), "s"],
                ["h", oe(t.state.y, 3), "m"],
                ["v", oe(t.state.v, 3), "m/s"],
              ]
            : t.lesson.id === "friction"
              ? [
                  ["t", oe(t.state.t, 2), "s"],
                  ["F", oe(t.state.F, 2), "N"],
                  ["v", oe(t.state.b[0].v * 100, 1), "cm/s"],
                ]
              : t.lesson.id === "collision"
                ? [
                    ["v_A", oe(t.state.b[0].v, 3), "m/s"],
                    ["v_B", oe(t.state.b[1]?.v, 3), "m/s"],
                    [
                      "p",
                      oe(
                        t.state.b.reduce(
                          (te, G, ae) => te + t.engine.bodies[ae].m * G.v,
                          0,
                        ),
                        3,
                      ),
                      "kg·m/s",
                    ],
                  ]
                : [
                    ["t", oe(t.state.t, 2), "s"],
                    ["v", oe(t.state.b[0].v, 3), "m/s"],
                    ["a", oe(t.state.b[0].a, 2), "m/s²"],
                  ];
    h.childElementCount !== c.length &&
      (h.innerHTML = c
        .map(() => '<div class="g"><span></span><b></b><small></small></div>')
        .join(""));
    const E = (te, G) => {
      te.textContent !== G && (te.textContent = G);
    };
    c.forEach(([te, G, ae], re) => {
      const de = h.children[re];
      (E(de.children[0], te), E(de.children[1], G), E(de.children[2], ae));
    });
    const $ = n("phase"),
      U = t.replay ? "replay" : t.phase;
    $.className !== `phase ${U}` && ($.className = `phase ${U}`);
    const V = {
      idle: translate("就绪"),
      running: translate("运行中"),
      paused: translate("已暂停"),
      done: translate("实验结束"),
      replay: translate("回放"),
    }[U];
    E($, V);
  }
  let We = null,
    Dt = 0;
  function As() {
    const e = t.lesson;
    e.tabs.includes(We) || (We = e.tabs[0]);
    const o = n("tabs");
    ((o.innerHTML = e.tabs
      .map(
        (M) =>
          `<button data-t="${M}" class="${M === We ? "on" : ""}">${$n[M]}</button>`,
      )
      .join("")),
      o.querySelectorAll("button").forEach((M) =>
        M.addEventListener("click", () => {
          ((We = M.dataset.t),
            o
              .querySelectorAll("button")
              .forEach((h) => h.classList.toggle("on", h === M)),
            ue.reset(),
            De(!0));
        }),
      ));
  }
  function Ts() {
    const e = t.engine,
      o = t.params;
    let M = null;
    if (t.lesson.rig === "track" && e.hanger) {
      const h = e.bodies[0];
      M =
        (e.hanger.m * Z +
          h.m * Z * Math.sin(e.angle) -
          h.mu.k * h.m * Z * Math.cos(e.angle)) /
        (h.m + e.hanger.m);
    } else t.lesson.rig === "fall" && o.vacuum && (M = Z);
    return {
      run: t.run,
      series: t.run.series,
      prev:
        t.prevKey === t.lesson.id
          ? t.prev.slice(0, t.phase === "done" ? -1 : void 0)
          : [],
      duration:
        t.lesson.rig === "elevator"
          ? e.total
          : Math.max(t.lesson.rig === "fall" ? 1 : 2, e.state.t),
      cursor: t.replay ? t.replay.t : null,
      scrub: (h) => {
        t.phase !== "running" &&
          ((t.replay = {
            t: Math.max(0, Math.min(e.state.t, h)),
            playing: !1,
          }),
          De(!0));
      },
      records: t.records[t.lesson.id] || [],
      recordCols: Ot[t.lesson.record] || [],
      deleteRecord: (h) => {
        (t.records[t.lesson.id].splice(h, 1), De(!0));
      },
      sensor: o.sensor,
      gateDistance: Pt(),
      trueA: M,
      now:
        t.lesson.rig === "track"
          ? {
              Ek: gt(),
              Ep: bt() + t.EpMin,
              Q: Rt(),
              Qc: 0,
            }
          : {},
      EpMin: t.EpMin,
      Emax: t.Emax,
    };
  }
  function De(e) {
    const o = performance.now();
    (!e && o - Dt < 100) || ((Dt = o), ue.render(We, Ts()));
  }
  function Fs() {
    const e = t.records[t.lesson.id];
    let o;
    if (We === "table" && e?.length) {
      const c = Ot[t.lesson.record];
      o = [c.map((E) => E[1]), ...e.map((E) => c.map(($) => E[$[0]]))];
    } else if (t.lesson.rig === "track") {
      const c = t.engine.bodies.length > 1;
      o = [
        [
          "t/s",
          "x_A/m",
          "v_A/(m/s)",
          "a_A/(m/s2)",
          ...(c ? ["x_B/m", "v_B/(m/s)"] : []),
          "T/N",
          "F/N",
          "Ek/J",
          "Ep/J",
          "Q/J",
        ],
      ];
      for (const E of t.run.samples)
        o.push(
          [
            E.t,
            E.b[0].x,
            E.b[0].v,
            E.b[0].a,
            ...(c ? [E.b[1].x, E.b[1].v] : []),
            E.T,
            E.F,
            E.Ek,
            E.Ep - t.EpMin,
            E.Q + E.Qc,
          ].map(($) => +(+$).toFixed(5)),
        );
    } else
      t.lesson.rig === "fall"
        ? (o = [
            ["t/s", "h/m", "v/(m/s)", "a/(m/s2)"],
            ...t.run.samples.map((c) =>
              [c.t, c.y, c.v, c.a].map((E) => +E.toFixed(5)),
            ),
          ])
        : (o = [
            ["t/s", "y/m", "v/(m/s)", "a/(m/s2)", "N/N"],
            ...t.run.samples.map((c) =>
              [c.t, c.y, c.v, c.a, c.N].map((E) => +E.toFixed(5)),
            ),
          ]);
    const M =
        "\uFEFF" +
        o.map((c) => c.join(",")).join(`
`),
      h = document.createElement("a");
    ((h.href = URL.createObjectURL(
      new Blob([M], {
        type: "text/csv",
      }),
    )),
      (h.download = `motionlab-${t.lesson.id}.csv`),
      h.click(),
      setTimeout(() => URL.revokeObjectURL(h.href), 1e3));
  }
  function yt() {
    const e = t.lesson;
    let o = "";
    (t.phase === "idle"
      ? e.flick
        ? (o = translate("按 空格 开始，或拖住小车甩出去"))
        : e.id === "incline"
          ? (o = translate("拖动左端红色旋钮改变倾角，按 空格 开始"))
          : e.id === "gates"
            ? (o = translate("可拖动光电门改变位置，按 空格 释放滑块"))
            : (o = translate("按 空格 开始实验"))
      : t.phase === "done" &&
        (o = e.record
          ? translate("按“记录数据”保存本次结果，或拖动图表回放")
          : translate("拖动图表可回放，按 空格 再做一次")),
      (n("hint").textContent = o),
      n("hint").classList.toggle("show", !!o));
  }
  let _t = 0;
  function Ke(e) {
    const o = n("toast");
    ((o.textContent = e),
      o.classList.add("show"),
      clearTimeout(_t),
      (_t = setTimeout(() => o.classList.remove("show"), 1800)));
  }
  function Pe(e) {
    ((e = (e + _e.length) % _e.length), (t.li = e), (t.lesson = _e[e]));
    const o = t.lesson.rig,
      M = o === "track" ? Sn : o === "fall" ? Ln : Bn;
    ((t.params = {
      ...M,
      ...t.lesson.params,
    }),
      (t.showArrows = !!t.params.arrows),
      (t.strobe = o === "fall"),
      o === "fall" && !y && (y = vn(i)),
      o === "elevator" && !j && (j = xn(i)),
      (d.root.visible = o !== "elevator"),
      (P.group.visible = o === "track"),
      (A.visible = !1),
      y && y.setVisible(o === "fall"),
      T.forEach((E) => (E.visible = !1)),
      Ss(),
      j && j.setVisible(o === "elevator"),
      a.key.position.set(
        ...(o === "elevator"
          ? [Re.x + 2, 6, Re.z + 4]
          : o === "fall"
            ? [Ze.x - 1.2, 3.4, 2]
            : [-1.6, 3.4, 2.2]),
      ),
      a.key.target.position.set(
        ...(o === "elevator"
          ? [Re.x, 0, Re.z]
          : o === "fall"
            ? [Ze.x, 0, 0]
            : [0, 0, 0]),
      ),
      (a.scene.fog.far = o === "elevator" ? 40 : 16),
      (t.prev = []),
      (t.camFollowY = null),
      (t.gateSeen = 0),
      (t.landed = !1),
      ks(),
      As(),
      ue.reset());
    const [h, c] = t.lesson.cam;
    a.fly(h, c, 1.2);
    try {
      history.replaceState(null, "", `#${t.lesson.id}`);
    } catch {}
    Q();
  }
  function Ht(e) {
    return d.rail.worldToLocal(e.clone()).x + m;
  }
  const Ns = Hs(a, {
    unlock: () => L.unlock(),
    canDrag(e) {
      if (t.phase === "running" && !t.lesson.live) return !1;
      const o = e.kind;
      return o === "jack"
        ? t.lesson.controls.includes("angle")
        : o === "gate"
          ? t.lesson.controls.includes("g1") || t.lesson.id === "free"
          : o === "fgate"
            ? !0
            : o === "body"
              ? k() &&
                t.phase !== "paused" &&
                (t.params.kind !== "block" || t.lesson.id === "incline")
              : !0;
    },
    start(e) {
      (t.phase === "done" && Q(), (e.hist = []));
    },
    move(e, o, M) {
      if (e.kind === "body") {
        const h = e.id === "B" ? 1 : 0,
          [c, E] = ye(h);
        let $ = Math.max(c, Math.min(E, Ht(o)));
        const U = t.engine;
        if (U.bodies.length > 1) {
          const V = U.bodies[1 - h],
            te = (V.len + U.bodies[h].len) / 2 + 0.002;
          h === 0 ? ($ = Math.min($, V.x - te)) : ($ = Math.max($, V.x + te));
        }
        ((U.bodies[h].x = $),
          (U.bodies[h].x0 = $),
          U.hanger && h === 0 && (U.hanger.anchor = $),
          (t.params[h ? "xB" : "xA"] = $),
          e.hist.push([M, $]),
          e.hist.length > 8 && e.hist.shift());
      } else if (e.kind === "gate") {
        const h = e.id === "g1" ? "g1" : "g2",
          c = Math.max(0.25, Math.min(m - 0.2, Ht(o)));
        ((t.params[h] = Math.round(c * 100) / 100), Ie(h, t.params[h]));
      } else if (e.kind === "jack") {
        const h = Math.max(0, Math.min(40, d.angleFromHeight(o.y)));
        ((t.params.angle = Math.round(h * 2) / 2),
          (t.params.balance = !1),
          Ie("angle", t.params.angle),
          Ie("balance", !1),
          d.setAngle(t.params.angle),
          (t.engine = Jt(D(t.params))),
          (t.run = H()),
          (t.lastX = t.engine.bodies.map((c) => c.x)),
          t.lesson.live && (t.phase = "running"));
      } else if (e.kind === "fgate") {
        const h = e.id === "g1" ? 0 : 1,
          c = je[t.params.object].r,
          E = Math.max(0.1, Math.min(1.9, y.top - o.y - c)),
          $ = h ? "h2" : "h1";
        ((t.params[$] = Math.round(E * 100) / 100),
          y.gates[h].place(t.params[$] + c),
          Ie($, t.params[$]));
      }
    },
    end(e, o) {
      if (e.kind === "body") {
        const M = e.id === "B" ? 1 : 0,
          h = e.hist.filter((E) => o - E[0] < 120);
        let c = 0;
        if (
          (h.length >= 2 &&
            (c =
              (h[h.length - 1][1] - h[0][1]) /
              ((h[h.length - 1][0] - h[0][0]) / 1e3 || 1)),
          o - (e.hist[e.hist.length - 1]?.[0] ?? 0) > 80 && (c = 0),
          (c = Math.max(-1.5, Math.min(1.5, c))),
          t.lesson.flick && Math.abs(c) > 0.05)
        ) {
          ((t.params[M ? "vB" : "vA"] = Math.round(c * 100) / 100),
            Ie(M ? "vB" : "vA", t.params[M ? "vB" : "vA"]),
            Q(),
            ve(),
            Ke(translate("初速度 {0} m/s", [c.toFixed(2)])));
          return;
        }
        Q();
      } else
        (e.kind === "gate" || e.kind === "fgate" || e.kind === "jack") && Q();
    },
    click(e) {
      e.kind === "tray" && k()
        ? ((t.params.m = Math.min(
            0.25,
            Math.round((t.params.m + 0.01) * 100) / 100,
          )),
          Ie("m", t.params.m),
          Q(),
          Ke(translate("钩码 {0} g", [Math.round(t.params.m * 1e3)])))
        : e.kind === "hanger" && k()
          ? ((t.params.m = Math.max(
              0.01,
              Math.round((t.params.m - 0.01) * 100) / 100,
            )),
            Ie("m", t.params.m),
            Q(),
            Ke(translate("钩码 {0} g", [Math.round(t.params.m * 1e3)])))
          : e.kind === "body" && t.phase !== "running" && ve();
    },
  });
  function Ss() {
    const e = [
      d.jack,
      ...u.map((o) => o.group),
      A,
      N.group,
      ...Object.values(b).map((o) => o.group),
    ];
    (y && e.push(...y.gates.map((o) => o.group)), Ns.setTargets(e));
  }
  function Ls() {
    const e = new J();
    e.userData.drag = "tray";
    const o = new r(
      new $e(0.16, 0.02, 0.09),
      new Ae({
        color: "#6b4a2b",
        roughness: 0.55,
        clearcoat: 0.4,
      }),
    );
    ((o.position.y = 0.01), e.add(o));
    const M = new K(0.018, 0.018, 0.0034, 40, 1, !1, 0.25, Math.PI * 2 - 0.5);
    for (let h = 0; h < 8; h++) {
      const c = new r(M, f.brass);
      (c.position.set(
        -0.05 + (h % 4) * 0.033,
        0.024 + Math.floor(h / 4) * 0.0036,
        -0.012 + Math.floor(h / 4) * 0.024,
      ),
        (c.rotation.y = h * 0.7),
        e.add(c));
    }
    return (e.position.set(0.52, 0, 0.27), (e.rotation.y = -0.2), xe(e));
  }
  (n("bPrev").addEventListener("click", () => Pe(t.li - 1)),
    n("bNext").addEventListener("click", () => Pe(t.li + 1)),
    n("bReset").addEventListener("click", () => a.fly(...t.lesson.cam, 0.9)),
    n("bFull").addEventListener("click", () =>
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen?.(),
    ),
    Me.addEventListener("click", () => {
      (L.unlock(), L.setMuted(!L.muted), Me.classList.toggle("off", L.muted));
    }),
    n("bCsv").addEventListener("click", Fs),
    n("bReplay").addEventListener("click", () => {
      t.phase === "running" ||
        !t.engine.state.t ||
        (t.replay = {
          t: 0,
          playing: !0,
        });
    }),
    n("bDock").addEventListener("click", () => {
      (document.body.classList.toggle("dock-min"),
        setTimeout(() => ue.resize(), 320));
    }),
    window.addEventListener("keydown", (e) => {
      e.target.closest?.("input, textarea") ||
        (e.code === "Space"
          ? (e.preventDefault(), ve())
          : e.key === "Backspace" || e.key === "Delete"
            ? (e.preventDefault(), ne())
            : e.key === "ArrowRight"
              ? Pe(t.li + 1)
              : e.key === "ArrowLeft"
                ? Pe(t.li - 1)
                : e.key === "s" || e.key === "S"
                  ? qt((t.speed + 1) % lt.length)
                  : e.key === "a" || e.key === "A"
                    ? zt("arrows")
                    : e.key === "r" || e.key === "R"
                      ? a.fly(...t.lesson.cam, 0.9)
                      : (e.key === "f" || e.key === "F") && n("bFull").click());
    }),
    new ResizeObserver(() => ue.resize()).observe(n("dockBody")),
    window.addEventListener("hashchange", () => {
      const e = _e.findIndex((o) => `#${o.id}` === location.hash);
      e >= 0 && e !== t.li && Pe(e);
    }),
    Ms());
  const Qt = _e.findIndex((e) => `#${e.id}` === location.hash);
  Pe(Qt >= 0 ? Qt : 0);
  let Vt = performance.now();
  function Wt(e) {
    const o = Math.min(0.05, (e - Vt) / 1e3);
    ((Vt = e),
      t.phase === "running" && !t.replay && nt(o * lt[t.speed]),
      t.replay?.playing &&
        ((t.replay.t += o * lt[t.speed]),
        t.replay.t >= t.engine.state.t && (t.replay = null)),
      Ct(o),
      $s(e),
      (t.phase === "running" || t.replay) && De(!1),
      a.render(o),
      requestAnimationFrame(Wt));
  }
  (requestAnimationFrame(Wt),
    document.body.classList.add("ready"),
    (window.__motion = {
      S: t,
      goLesson: Pe,
      start: ve,
      stage: a,
      build: Q,
    }));
}
function motionLabPage() {
  return (
    React.useLayoutEffect(() => {
      ((document.title = translate("运动与力 · MotionLab")), jn());
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
                      d: "M3 24h26",
                      stroke: "currentColor",
                      strokeWidth: "1.4",
                      strokeLinecap: "round",
                    }),
                    jsxRuntime.jsx("rect", {
                      x: "8",
                      y: "15",
                      width: "11",
                      height: "6",
                      rx: "1.6",
                      stroke: "#f0a531",
                      strokeWidth: "1.4",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "11",
                      cy: "22.4",
                      r: "1.6",
                      fill: "currentColor",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "16",
                      cy: "22.4",
                      r: "1.6",
                      fill: "currentColor",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M19 17.5h7.5",
                      stroke: "currentColor",
                      strokeWidth: "1.1",
                    }),
                    jsxRuntime.jsx("circle", {
                      cx: "27",
                      cy: "18.5",
                      r: "2.2",
                      stroke: "currentColor",
                      strokeWidth: "1.2",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M29.2 18.5v6",
                      stroke: "currentColor",
                      strokeWidth: "1.1",
                    }),
                    jsxRuntime.jsx("path", {
                      d: "M3 13h4M3 10h7M3 7h5",
                      stroke: "#f0a531",
                      strokeWidth: "1.3",
                      strokeLinecap: "round",
                      opacity: ".7",
                    }),
                  ],
                }),
                jsxRuntime.jsxs("div", {
                  children: [
                    jsxRuntime.jsxs("b", {
                      children: [
                        "MOTION",
                        jsxRuntime.jsx("i", {
                          children: "LAB",
                        }),
                      ],
                    }),
                    jsxRuntime.jsx("span", {
                      children: translate("运动与力实验台"),
                    }),
                  ],
                }),
              ],
            }),
            jsxRuntime.jsx("div", {
              className: "prog",
              id: "prog",
            }),
            jsxRuntime.jsx(Rs, {}),
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
                jsxRuntime.jsx("button", {
                  className: "tb",
                  id: "bSound",
                  title: translate("音效"),
                  children: jsxRuntime.jsxs("svg", {
                    viewBox: "0 0 16 16",
                    children: [
                      jsxRuntime.jsx("path", {
                        d: "M2.5 6h2.5l3.5-3v10L5 10H2.5z",
                      }),
                      jsxRuntime.jsx("path", {
                        className: "w",
                        d: "M11 5.5a3.5 3.5 0 0 1 0 5M12.8 3.6a6 6 0 0 1 0 8.8",
                      }),
                      jsxRuntime.jsx("path", {
                        className: "x",
                        d: "M11 6l4 4M15 6l-4 4",
                      }),
                    ],
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
                jsxRuntime.jsxs("div", {
                  id: "hudWrap",
                  children: [
                    jsxRuntime.jsx("div", {
                      id: "phase",
                      className: "phase",
                    }),
                    jsxRuntime.jsx("div", {
                      id: "hud",
                    }),
                    jsxRuntime.jsx("div", {
                      id: "slow",
                      className: "slow",
                      hidden: !0,
                    }),
                  ],
                }),
                jsxRuntime.jsx("div", {
                  id: "hint",
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
                          id: "bReplay",
                          title: translate("回放本次实验"),
                          children: [
                            jsxRuntime.jsx("svg", {
                              viewBox: "0 0 16 16",
                              children: jsxRuntime.jsx("path", {
                                d: "M4.5 2.8l8.5 5.2-8.5 5.2z",
                              }),
                            }),
                            translate("回放"),
                          ],
                        }),
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
export { motionLabPage as default };
