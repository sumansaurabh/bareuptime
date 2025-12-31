# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **企业级正常运行时间监控，创业公司价格** - 每年只需50美元，即可99.9%可靠地监控您的网站和API，而不是竞争对手的360美元/年以上。

## 🤔 为什么选择 BareUptime？

传统的正常运行时间监控工具**价格高得离谱**。我们真正需要的只是一个能回答两个简单问题的系统：

1. **我的网站/API是否正常运行？**
2. **它能立即通知我吗** — 通过手机、Slack、Discord 或电子邮件？

就是这样。我们不需要花哨的动画仪表板或企业销售电话。

### 当前解决方案存在的问题

大多数工具将基本功能隐藏在昂贵的付费墙后面：
- 📱 **移动推送通知？** *高级功能 - $20/月*
- 🔗 **API 访问/Webhook？** *高级功能 - $10/月*
- 🌍 **全球监控？** *高级功能 - $15/月*
- 🔒 **SSL 监控？** *高级功能 - $10/月*

**总计：每年360美元以上**，而这些功能的运行成本仅为几美分。

## ✨ BareUptime 的独特之处

### 🏆 应该免费的功能（而且确实免费！）

| 功能 | BareUptime | UptimeRobot | 其他 |
|---|---|---|---|
| **移动应用程序 (iOS/Android)** | ✅ 免费 | ❌ 高级 | ❌ 高级 |
| **SSL 证书监控** | ✅ 免费 | ❌ 高级 | ❌ 高级 |
| **Webhook 集成** | ✅ 免费 | ✅ 免费 | ❌ 高级 |
| **Discord/Slack/Teams** | ✅ 免费 | ✅ 免费 | ❌ 高级 |
| **全球网络监控** | ✅ 免费 | ❌ 高级 | ❌ 高级 |
| **API 访问** | ✅ 免费 | ❌ 高级 | ❌ 高级 |
| **年费** | **$50** | $360+ | $400+ |

### 💰 公开透明的定价细分

这不是VC支持的臃肿软件。以下是您每年50美元的具体用途：

| 基础设施组件 | 每月成本 |
|---|---|
| 全球工作池（8个地点） | $92.00 |
| API 服务器和数据库 | $24.00 |
| 电子邮件/通知基础设施 | $50.00 |
| 移动应用商店费用 | $8.25 |
| 支付处理 | $22.50 |
| **每月总成本** | **$196.75** |

**每用户成本（1万用户）：$0.20/月**
**我们的价格：$4.17/月（$50/年）**
**行业平均水平：$30+/月**

## 🚀 快速开始

### 选项 1：使用我们的托管服务
1. 访问 [app.bareuptime.co](https://app.bareuptime.co)
2. 添加您的网站 URL
3. 获得即时监控 + 移动应用程序
4. **免费套餐**：10个监控器，包含所有功能

### 选项 2：自托管 (即将推出)
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ 技术栈

- **前端**: Next.js 15, TypeScript, Tailwind CSS
- **UI 组件**: Radix UI, shadcn/ui
- **数据库**: Supabase (PostgreSQL)
- **监控**: 全球工作池
- **通知**: 推送、电子邮件、Webhooks、Slack、Discord
- **移动应用程序**: React Native (iOS & Android)

## 📋 功能

### 核心监控
- ✅ **网站和 API 监控** (GET, POST, PUT, DELETE)
- ✅ **SSL 证书过期跟踪**
- ✅ **自定义请求头和身份验证**
- ✅ **来自8个以上地点的全球监控**
- ✅ **1分钟到1小时的检查间隔**

### 智能警报
- ✅ **移动推送通知** (iOS 和 Android 应用程序)
- ✅ **包含事件时间轴的电子邮件警报**
- ✅ **Slack, Discord, Teams 集成**
- ✅ **用于自定义工作流的 Webhook 通知**
- ✅ **警报升级** 和 值班路由

### 开发者体验
- ✅ **每个监控器的公共状态页面**
- ✅ **用于自动化的 REST API**
- ✅ **MCP (模型上下文协议) 支持**
- ✅ **实时仪表板**
- ✅ **事件时间轴** 和 根本原因分析

## 🌍 全球基础设施

我们的监控网络遍布：
- 🇺🇸 **美国** (东海岸和西海岸)
- 🇩🇪 **德国** (法兰克福)
- 🇨🇦 **加拿大** (多伦多)
- 🇮🇳 **印度** (孟买)
- 🇦🇺 **澳大利亚** (悉尼)
- *根据需求增加更多地点*

## 📱 移动应用程序

下载我们的原生移动应用程序以获取关键警报：

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *即将推出*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *即将推出*

## 🧑‍💻 贡献

我们欢迎贡献！这个项目是由厌倦了高价监控工具的开发者构建的。

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **安装依赖**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **环境设置**
   ```bash
   cp .env.example .env.local
   # 添加您的 Supabase 和其他 API 密钥
   ```

4. **运行开发服务器**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

5. **打开浏览器**
   导航到 [http://localhost:3000](http://localhost:3000)

### 项目结构
```
bareuptime/
├── app/                 # Next.js 应用路由
│   ├── api/            # API 路由
│   ├── components/     # 页面特定组件
│   └── globals.css     # 全局样式
├── components/         # 共享 UI 组件
│   └── ui/            # shadcn/ui 组件
├── hooks/             # 自定义 React 钩子
├── lib/               # 工具函数
└── public/            # 静态资源
```

## 🎯 路线图

### ✅ 已完成 (v1.0)
- [x] 核心正常运行时间监控
- [x] Web 仪表板
- [x] 电子邮件通知
- [x] Webhook 集成
- [x] SSL 监控
- [x] 全球监控网络

### 🚧 进行中 (v1.1)
- [ ] 移动应用程序 (iOS 和 Android)
- [ ] 高级警报路由
- [ ] API 文档
- [ ] Terraform 自托管

### 🎯 未来 (v2.0)
- [ ] 性能监控
- [ ] 日志聚合
- [ ] 自定义指标
- [ ] 团队协作功能

## 📄 许可证

本项目采用 MIT 许可证 - 详情请参阅 [LICENSE](LICENSE) 文件。

## 🙋‍♂️ 支持

- 📧 **电子邮件**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [加入我们的社区](https://discord.gg/bareuptime)
- 🐛 **Bug 报告**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **文档**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 关于

BareUptime 由 [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (前微软，Penify) 创建，源于对高价企业监控工具的不满，这些工具对基本功能收取数百美元。

**我们的使命**：以创业公司友好的价格提供企业级监控基础设施。

---

⭐ **如果 BareUptime 对您的项目有帮助，请给我们一个星标！** 这有助于其他开发者找到这个经济高效的监控解决方案。
