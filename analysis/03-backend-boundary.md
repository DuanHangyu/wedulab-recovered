# 后端重建边界

SOURCE：前端请求路径、方法、请求字段、消费的响应字段。
REBUILT：Node SQLite 表结构、统计聚合、验证规则、会话及限流实现。原服务器实现没有公开，不能声称逐字恢复。

| 接口 | 方法 | 已恢复行为 |
|---|---|---|
| `/api/v1/analytics/events` | POST | UUID 事件去重，保存匿名访客、路径、来源、设备、浏览器/界面语言和时间 |
| `/api/v1/feedback` | POST | 校验描述与联系方式、保存反馈、返回整数 ID、限流 |
| `/api/v1/analytics/session` | GET/POST/DELETE | 配置密码登录、HttpOnly SameSite 会话、退出 |
| `/api/v1/analytics/summary` | GET | 上海时区、日期范围、PV/UV、前期、日/小时/星期、来源与设备/语言等分组 |
| `/api/v1/analytics/ips` | GET | 分页、搜索、PV/UV/最后访问排序；内网识别 |
| `/api/v1/analytics/feedback` | GET | 登录后反馈分页 |

原站数据、密码、IP 地理归属与定位服务没有恢复。外网 IP 标记为待定位，不填造归属数据。

已通过本地接口集成测试，覆盖未登录拒绝、错误密码、正确登录、去重事件、统计、输入校验、反馈读取、跨站拒绝、反馈限流、私有文件拒绝、退出与数据库持久化。另有上海跨日与上一周期统计测试。
