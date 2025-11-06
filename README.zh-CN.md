# 🚀 BareUptime

[![实时演示](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![应用访问](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **企业级可用性监控，只需初创价格。** 只用每年 50 美元，即可实现 99.9% 可靠性的站点与 API 监控，而非竞争对手每年 360 美元以上的高昂费用。

## 🤔 为什么选择 BareUptime？

传统的可用性监控工具通常 **价格离谱**。我们真正需要的系统其实只需回答两个问题：

1. **我的网站/API 是否在线？**
2. **一旦宕机能否第一时间通知我？** —— 无论是手机推送、Slack、Discord 还是邮件。

我们不需要华而不实的 3D 仪表盘，也不想被销售电话骚扰。

### 现有方案的问题

多数工具把核心功能锁在昂贵的订阅后面：
- 📱 **手机推送通知？** *高级版 - 20 美元/月*
- 🔗 **API 访问/网络钩子？** *高级版 - 10 美元/月*
- 🌍 **全球监测？** *高级版 - 15 美元/月*
- 🔒 **SSL 证书监控？** *高级版 - 10 美元/月*

**合计：每年 360 美元以上**，而这些功能的成本其实并不高。

## ✨ BareUptime 的不同之处

### 🏆 应该免费的功能（我们真的免费）

| 功能 | BareUptime | UptimeRobot | 其他平台 |
|------|------------|-------------|----------|
| **手机应用（iOS/Android）** | ✅ 免费 | ❌ 收费 | ❌ 收费 |
| **SSL 证书监控** | ✅ 免费 | ❌ 收费 | ❌ 收费 |
| **Webhook 集成** | ✅ 免费 | ✅ 免费 | ❌ 收费 |
| **Discord/Slack/Teams** | ✅ 免费 | ✅ 免费 | ❌ 收费 |
| **全球网络监测** | ✅ 免费 | ❌ 收费 | ❌ 收费 |
| **API 访问** | ✅ 免费 | ❌ 收费 | ❌ 收费 |
| **年费** | **50 美元** | 360 美元+ | 400 美元+ |

### 💰 透明的价格结构

我们不是烧钱的 VC 项目。你的 50 美元/年究竟用在哪：

| 基础设施组件 | 月度成本 |
|--------------|----------|
| 全球任务节点（8 个地区） | 92.00 美元 |
| API 服务器与数据库 | 24.00 美元 |
| 邮件/通知基础设施 | 50.00 美元 |
| 移动应用商店费用 | 8.25 美元 |
| 支付处理 | 22.50 美元 |
| **月度总成本** | **196.75 美元** |

**10K 用户的单位成本：0.20 美元/月**
**我们的定价：4.17 美元/月（50 美元/年）**
**行业平均：30 美元/月以上**

## 🚀 快速开始

### 方案一：使用托管服务
1. 打开 [app.bareuptime.co](https://app.bareuptime.co)
2. 添加你要监控的网站或 API
3. 获取即时监控 + 手机应用通知
4. **免费额度**：10 个监控项，全部功能开放

### 方案二：自托管（即将上线）
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ 技术栈

- **前端**：Next.js 15、TypeScript、Tailwind CSS
- **UI 组件**：Radix UI、shadcn/ui
- **数据库**：Supabase（PostgreSQL）
- **监控**：全球任务节点
- **通知**：推送、邮件、Webhook、Slack、Discord
- **移动应用**：React Native（iOS & Android）

## 📋 功能概览

### 核心监控
- ✅ **网站 & API 监控**（支持 GET、POST、PUT、DELETE）
- ✅ **SSL 证书到期提醒**
- ✅ **自定义请求头与认证**
- ✅ **8+ 地区的全球监测节点**
- ✅ **1 分钟 - 1 小时的检查间隔**

### 智能告警
- ✅ **手机推送通知**（原生 iOS/Android 应用）
- ✅ **邮件告警**附带事件时间线
- ✅ **Slack、Discord、Teams 集成**
- ✅ **Webhook 通知**便于自定义流程
- ✅ **告警升级与排班**

### 开发者体验
- ✅ **公共状态页**
- ✅ **REST API** 自动化支持
- ✅ **MCP（Model Context Protocol）** 集成
- ✅ **实时仪表盘**
- ✅ **事件时间线与根因分析**

## 🌍 全球基础设施

当前监测节点覆盖：
- 🇺🇸 **美国**（东西海岸）
- 🇩🇪 **德国**（法兰克福）
- 🇨🇦 **加拿大**（多伦多）
- 🇮🇳 **印度**（孟买）
- 🇦🇺 **澳大利亚**（悉尼）
- *根据需求持续扩容新地区*

## 📱 移动应用

下载原生移动应用，确保关键告警不错过：

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) —— *即将上线*
- 🤖 [Google Play 商店](https://play.google.com/store/apps/details?id=co.bareuptime.app) —— *即将上线*

## 🧑‍💻 参与贡献

我们欢迎所有贡献者！这个项目由一群受够了昂贵监控工具的开发者构建。

### 本地开发流程

1. **克隆仓库**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   pnpm install
   ```

3. **环境变量配置**
   ```bash
   cp .env.example .env.local
   # 填入 Supabase 等密钥
   ```

4. **运行开发服务器**
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

5. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

### 项目结构
```
bareuptime/
├── app/                 # Next.js App Router
│   ├── api/             # API 路由
│   ├── components/      # 页面级组件
│   └── globals.css      # 全局样式
├── components/          # 共享 UI 组件
│   └── ui/              # shadcn/ui 组件
├── hooks/               # 自定义 React hooks
├── lib/                 # 工具函数
└── public/              # 静态资源
```

## 🎯 路线图

### ✅ 已完成（v1.0）
- [x] 核心可用性监控
- [x] Web 控制台
- [x] 邮件通知
- [x] Webhook 集成
- [x] SSL 监控
- [x] 全球监测网络

### 🚧 进行中（v1.1）
- [ ] 移动应用（iOS & Android）
- [ ] 高级告警路由
- [ ] API 文档
- [ ] Terraform 自托管方案

### 🎯 未来计划（v2.0）
- [ ] 性能监控
- [ ] 日志聚合
- [ ] 自定义指标
- [ ] 团队协作功能

## 📄 许可证

本项目按照 MIT 许可证开源，详见 [LICENSE](LICENSE)。

## 🙋‍♂️ 支持

- 📧 **邮箱**： [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**： [加入社区](https://discord.gg/bareuptime)
- 🐛 **问题反馈**： [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **文档**： [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 关于我们

BareUptime 由 [Suman Saurabh](https://linkedin.com/in/ssumansaurabh)（前微软、Penify）创建，源于对昂贵企业监控工具的不满。那些工具为最基础的功能收取高昂费用，而我们希望以合理价格提供同样甚至更好的可靠性。

**我们的使命**：让企业级监控基础设施，以初创公司负担得起的价格触手可及。

---

⭐ **如果 BareUptime 对你有帮助，欢迎为我们点亮一颗星！** 你的支持能帮助更多开发者发现这款高性价比的监控工具。
