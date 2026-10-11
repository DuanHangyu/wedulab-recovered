# WeduLab 网站恢复工程

从 [WeduLab 线上网站](https://wedulab.com/?lang=zh-CN) 的公开生产部署恢复的可运行项目。因原电脑硬盘损坏、源码丢失，本仓库保存恢复代码、原部署文件、模块分析与浏览器验证资料，方便继续维护和备份。

包含首页、22 个交互实验、六种语言，以及原有三维场景、着色器、动画、公式、字体和地理数据。反馈与管理统计前端保留，服务端依据前端接口重新实现。

## 快速启动

需要 **Node.js 24 或更新版本**。前端运行库和字体已随项目保存，无需安装 React、Three.js 或接入字体 CDN。

```sh
git clone https://github.com/DuanHangyu/wedulab-recovered.git
cd wedulab-recovered/project
npm run dev
```

打开 **http://127.0.0.1:4174/?lang=zh-CN**。

修改 `project/src/` 或 `project/public/assets/` 后刷新浏览器即可查看结果。

```sh
# 在 project/ 目录执行
npm test
npm run build
npm start
```

`npm start` 提供构建后的前端和兼容后端。默认只监听本机；可通过 `HOST`、`PORT` 设置监听地址，`DATA_DIR` 设置数据库目录。

## 仓库内容

| 目录 / 文件 | 用途 |
|---|---|
| [`project/`](project/) | 可编辑、可运行、可构建的恢复工程 |
| [`project/src/labs/`](project/src/labs/) | 22 个实验的页面、模型、场景和交互 |
| [`project/src/home/`](project/src/home/) | 首页与实验目录 |
| [`project/src/i18n/`](project/src/i18n/) | 翻译词典与语言处理 |
| [`project/public/`](project/public/) | 样式、字体、纹理、地图和多语言 HTML 模板 |
| [`project/server/`](project/server/) | 重建的 Node.js / SQLite 后端 |
| [`recovered-production/`](recovered-production/) | 原部署 JS、CSS、HTML、图片和数据备份，以及补存字体 |
| [`analysis/`](analysis/) | 分析文档、资源清单、截图、对照和交互结果 |
| [`analysis/modules/`](analysis/modules/) | 每个实验的恢复与验证记录 |
| [`delivery-checksums.json`](delivery-checksums.json) | 下载压缩包的大小和 SHA256 校验值 |

代码与原部署备份的压缩包在 [Releases](https://github.com/DuanHangyu/wedulab-recovered/releases) 下载。

## 实验范围

- **物理**：电学、运动与力、光学、振动与波、电场与磁场。
- **地理**：等高线、大气环流、地球运动、海陆变迁、水循环。
- **生物**：细胞三维结构、显微镜实验台。
- **化学**：反应机理、VSEPR 分子构型、原子轨道、化学反应微观模拟。
- **数学**：立体几何、圆锥曲线、函数、尺规作图、勾股定理、数学奇境。

语言：简体中文、繁体中文、英语、日语、韩语、土耳其语。

## 反馈与管理统计

在 `project/` 中复制 `.env.example` 为 `.env`，设置自己的 `ADMIN_PASSWORD`，再重启服务。

管理入口：`/admin/analytics`。用户反馈和访问事件存入本地 SQLite；管理接口提供登录、退出、访问趋势、PV/UV、来源、设备与语言分布、IP 列表和反馈分页。

没有配置管理密码时登录接口拒绝登录。测试数据库、实际 `.env` 文件和密码均未上传。

## 恢复和验证结果

| 项目 | 结果 |
|---|---|
| 生产资源备份 | 138 个资源，SHA256 校验通过 |
| 模块结构检查 | 40 个模块 AST 等价 |
| 翻译完整性 | 五个翻译词典各 4997 条，与原部署一致；简体中文使用原文 |
| 路由与语言 HTML | 24 个入口 × 六种语言，144 份模板 |
| 线上站点 → 本地原部署基线 | 23 个公开入口，记录的初始状态对照均为零像素差异 |
| 本地基线 → 可编辑项目 | 23 个公开入口，记录的初始状态对照均为零像素差异 |
| 移动端 | 六类代表页面，390×844 视口对照均为零像素差异 |
| 正常时间交互 | 22 个实验的章节切换或主要操作通过 |
| 后端与管理 | 接口、统计测试和管理页流程通过 |
| 压缩包独立检查 | 解压后测试、构建、生产服务启动和资源读取通过 |

截图结果限定于记录的视口、状态和可控时间序列，未逐一覆盖全部参数组合。原场景与算法保留，没有为匹配截图调整视觉参数。详细方法和限制见：

- [恢复交付报告](analysis/05-recovery-report.md)
- [验证结果摘要](analysis/verification-summary.json)
- [最终图像审查](analysis/final-image-audit.json)
- [后端重建边界](analysis/03-backend-boundary.md)
- [可运行项目说明](project/README.md)

## 恢复边界

公开部署没有源码映射，无法精确找回原始 TS/JSX、类型、变量名、注释、Git 历史和原构建配置。本仓库以实际生产 JavaScript 为依据，格式化、拆分词典并按模块组织代码，不是原始源码逐字备份。

原服务端代码、账号密码、历史反馈和访问数据库、IP 地理定位服务不在公开部署中。`project/server/` 是接口兼容重建，没有伪造原站历史数据。原部署已打包的第三方库随代码保留；`npm audit` 的结果只覆盖项目清单依赖。

本仓库用于保存和继续维护恢复工程；未额外授予原项目或第三方资源新的开源许可。第三方库、字体与数据的原有许可仍适用。
