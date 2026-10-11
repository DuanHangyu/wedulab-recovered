# 等高线 SOURCE_REPLAY 验证

已保留原始 Three.js 场景、着色器、帧更新、OrbitControls、地图/剖面 Canvas、标签和样式。没有按截图猜测或替换渲染管线。

- 线上 → 原始本地基线：标题、全文一致，0 / 1,440,000 不同像素，初始化异常和资源错误均为空。
- 原始基线 → 可编辑项目：标题、全文一致，0 / 1,440,000 不同像素。
- 条件：Chromium、Metal GPU、1440×1000、DPR 1、同一随机种子、180 个 60Hz RAF 帧；字体等待完成，CSS/SMIL 同步到 3 秒。
- 移动端 390×844 对照也为 0 像素差异。
- 正常时钟验证：键盘切章节、重置视角、拖动地图生成剖面。剖面显示 6.29km、高点1284m、低点173m和通视结果。
- 资源字节校验及模块结构等价另见部署清单和语义报告。

证据：`../baseline-verification/_labs_contour.json`、`../project-verification/_labs_contour.json`、`../project-verification-mobile/_labs_contour.json`、`../interaction-results.json`。

上述零差异限定于记录的视口、初始状态和可控时间序列；交互与正常时间运行另行通过，不将单张截图解释为所有状态的逐像素证明。
