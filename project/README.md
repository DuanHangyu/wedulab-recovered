# WeduLab 恢复工程

本项目由 https://wedulab.com/ 的公开生产部署恢复，包含首页、22 个交互实验、六种语言、原始三维场景/着色器/数据、反馈界面和管理统计界面。

## 启动

需要 Node.js 24 或更高版本。前端运行库已随部署完整保留，不需要下载 React/Three.js 或接入 CDN。

```sh
npm run dev
```

打开 http://127.0.0.1:4174/?lang=zh-CN 。修改 `src/` 或 `public/assets/` 后刷新浏览器即可查看结果。

```sh
npm run build
npm start
npm test
```

`dist/` 是可独立部署的静态前端；`npm start` 同时提供兼容后端。如使用静态托管，须将 `/labs/*`、`/admin/analytics` 和旧 `.html` 路由回退到 `index.html`，并将 `/api/*` 转给服务端。按语言返回课程 HTML 的行为由本项目 Node 服务实现；普通静态回退只提供通用 HTML，课程交互仍由浏览器路由加载。Node 服务默认只监听本机；部署时可通过 `HOST`、`PORT` 指定监听地址。`DATA_DIR` 指向持久化磁盘。

## 验证记录

全部公开入口、代表性移动页面和 22 个实验的实际操作均已进行浏览器验证。交付时的结果摘要保存在 `recovery/verification-summary.json`；完整模块分析、截图和原部署哈希清单在相邻 `../analysis/`。

## 可编辑文件

- `src/main.js`：路由、加载状态、错误页面与应用挂载。
- `src/home/`：首页和 22 个实验目录数据。
- `src/labs/<实验名>/Page.js`：每个实验的页面、数学模型、绘制过程、章节与交互。
- `src/components/LanguageSwitcher.js`：语言切换。
- `src/i18n/messages/*.js`：各语言词典。配套 JSON 是恢复记录；修改运行词典应编辑 `.js`。
- `src/core/runtime.js`：恢复的共享运行库、语言处理、反馈组件与访问事件。React 19.3.0 原部署实现已保留。
- `src/vendor/`：原部署 Three.js、OrbitControls、后期处理、图表与数学工具。
- `public/assets/*.css`：已格式化的原样式；对应原文件名见 `recovery-map.json` 和相邻分析目录。
- `public/fonts/`、`public/assets/`：本地字体、地球纹理、地理数据、二维码和公式字体。
- `public/pages/<语言>/`：24 个入口 × 六种语言的原页面 HTML，保留每页标题、描述、结构化数据和关闭 JavaScript 时的课程内容。Node 服务按路由和语言返回对应模板。
- `server/`：依据前端接口重建的 SQLite 服务。

## 反馈与统计

复制 `.env.example` 为 `.env`，设置自己的 `ADMIN_PASSWORD`，然后重启服务。没有配置密码时管理接口拒绝登录。用户反馈保存于 `data/wedulab.sqlite`，只有登录后的管理页可读取。管理页地址是 `/admin/analytics`。

恢复后端支持访问事件去重、日期范围/前后周期统计、PV/UV、访问来源、设备和语言分布、IP 列表、反馈分页、管理登录/退出。IP 地理定位服务没有恢复，归属地分布留空，外网 IP 标为等待定位。没有伪造原站统计或历史反馈。

## 恢复边界

这是可以修改、运行、构建的 **生产客户端代码恢复工程**。公开部署未提供源码映射，原始 TS/JSX 文件、类型定义、变量名、注释、Git 历史和原构建配置无法由现有资源精确还原。保留了生产 JavaScript 的实际逻辑，格式化后按实验重新组织，并给可确认的导入与页面组件重新命名。不是原始工程逐字备份。

原站服务端代码、账号密码、历史数据库不在公开部署中；`server/` 是接口兼容重建。独立原部署基线保存在相邻 `../recovered-production/`，验证记录与截图在 `../analysis/`。

`npm audit` 只能检查项目清单依赖，无法扫描部署中已经打包的第三方库。原部署库保留是为保证还原精度，未来升级应另做回归。
