# 地球运动课堂

路由：`/labs/earth`

可编辑模块：`src/labs/earth/Page.js`

## 已验证

- 标题一致：True；正文一致：True。
- 像素差异：0 / 1440000。
- 初始化/资源错误：[]。
- 构建版本正常时钟操作：下一章节，通过=True。章节地址 `/labs/earth?lang=zh-CN#1`。

## 渲染和恢复依据

- `c3`：webgl2
- `无 id 画布`：2d
- `无 id 画布`：2d
- `无 id 画布`：2d
- `无 id 画布`：2d
- `无 id 画布`：2d
- `c2`：2d
- `cardC`：2d
- `tlC`：2d

原场景、数学模型、输入事件和着色器保留。模块 AST 结构等价验证见 `../semantic-equivalence.json`。

完整控件、资源、画布调用栈和图像记录见 `../project-verification/_labs_earth.json`。操作证据见 `../all-lab-interactions.json`。对照只证明已记录状态；未逐一人工覆盖所有参数组合。

线上生产站直接对照：标题和正文一致，不同像素为 0。证据在 `../baseline-verification/`。
