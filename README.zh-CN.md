# 🚀 BareUptime

[![在线演示](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![应用上线](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **企业级在线率监控，以初创价格提供** —— 以 99.9% 的可靠性监控网站与 API，每年仅需 50 美元，而不是竞品的 360+ 美元。

## 🤔 为什么选择 BareUptime？

传统在线率监控工具的价格**高得离谱**。我们真正需要的系统只需回答两个简单问题：

1. **我的网站 / API 正在运行吗？**
2. **它能立即通知我吗** —— 无论是在手机、Slack、Discord 还是邮件上？

就这些。我们不需要花哨的动画仪表盘或冗长的企业销售流程。

### 现有解决方案的问题

多数工具将关键功能锁在昂贵的付费墙后：
- 📱 **移动端推送通知？** *高级版 - 每月 20 美元*
- 🔗 **API 访问 / Webhook？** *高级版 - 每月 10 美元*
- 🌍 **全球监控？** *高级版 - 每月 15 美元*
- 🔒 **SSL 证书监控？** *高级版 - 每月 10 美元*

**总计：每年 360+ 美元**，而这些功能实际上成本极低。

## ✨ BareUptime 的不同之处

### 🏆 应该免费的功能，我们全部免费

| 功能 | BareUptime | UptimeRobot | 其它服务 |
|------|------------|-------------|----------|
| **移动应用（iOS/Android）** | ✅ 免费 | ❌ 高级版 | ❌ 高级版 |
| **SSL 证书监控** | ✅ 免费 | ❌ 高级版 | ❌ 高级版 |
| **Webhook 集成** | ✅ 免费 | ✅ 免费 | ❌ 高级版 |
| **Discord/Slack/Teams** | ✅ 免费 | ✅ 免费 | ❌ 高级版 |
| **全球网络监控** | ✅ 免费 | ❌ 高级版 | ❌ 高级版 |
| **API 访问** | ✅ 免费 | ❌ 高级版 | ❌ 高级版 |
| **年费** | **50 美元** | 360+ 美元 | 400+ 美元 |

### 💰 透明的定价结构

我们不是烧钱的风投项目。以下是你每年 50 美元所涵盖的真实成本：

| 基础设施组成 | 月度成本 |
|--------------|----------|
| 全球工作节点（8 个地区） | 92.00 美元 |
| API 服务器与数据库 | 24.00 美元 |
| 邮件 / 通知基础设施 | 50.00 美元 |
| 移动应用商店费用 | 8.25 美元 |
| 支付处理 | 22.50 美元 |
| **月度总成本** | **196.75 美元** |

**单个用户成本（1 万用户）：每月 0.20 美元**  
**我们的售价：每月 4.17 美元（每年 50 美元）**  
**行业平均价格：每月 30+ 美元**

## 🚀 快速开始

### 选项 1：使用托管服务
1. 访问 [app.bareuptime.co](https://app.bareuptime.co)
2. 添加你的网站 URL
3. 立即获得监控与移动应用
4. **免费套餐**：10 个监控，全部功能可用

### 选项 2：自托管（即将推出）
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
- **监控**：全球工作节点
- **通知**：推送、邮件、Webhook、Slack、Discord
- **移动应用**：React Native（iOS & Android）

## 📋 功能列表

### 核心监控
- ✅ **网站与 API 监控**（GET、POST、PUT、DELETE）
- ✅ **SSL 证书到期跟踪**
- ✅ **自定义请求头与认证**
- ✅ **来自 8+ 地区的全球监控**
- ✅ **1 分钟到 1 小时的检查间隔**

### 智能告警
- ✅ **移动端推送通知**（iOS 与 Android 应用）
- ✅ **带事件时间线的邮件告警**
- ✅ **Slack、Discord、Teams 集成**
- ✅ **支持自定义流程的 Webhook 通知**
- ✅ **告警升级与值班调度**

### 开发者体验
- ✅ **每个监控均可生成公开状态页**
- ✅ **自动化专用 REST API**
- ✅ **MCP（Model Context Protocol）支持**
- ✅ **实时仪表盘**
- ✅ **事件时间线与根因分析**

## 🌍 全球基础设施

我们的监控网络覆盖：
- 🇺🇸 **美国**（东西海岸）
- 🇩🇪 **德国**（法兰克福）
- 🇨🇦 **加拿大**（多伦多）
- 🇮🇳 **印度**（孟买）
- 🇦🇺 **澳大利亚**（悉尼）
- *将根据需求增加更多地区*

## 📱 移动应用

下载原生移动应用，获取关键告警：

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) —— *即将上线*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) —— *即将上线*

## 🧑‍💻 参与贡献

我们欢迎社区贡献！BareUptime 由厌倦高价监控工具的开发者打造。

### 本地开发

1. **克隆仓库**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或者
   pnpm install
   ```

3. **环境配置**
   ```bash
   cp .env.example .env.local
   # 填入你的 Supabase 与其他 API 密钥
   ```

4. **运行开发服务器**
   ```bash
   npm run dev
   # 或者
   pnpm dev
   ```

5. **打开浏览器**
   访问 [http://localhost:3000](http://localhost:3000)

### 项目结构
```
bareuptime/
├── app/                 # Next.js App Router
│   ├── api/            # API 路由
│   ├── components/     # 页面级组件
│   └── globals.css     # 全局样式
├── components/         # 共享 UI 组件
│   └── ui/            # shadcn/ui 组件
├── hooks/             # 自定义 React Hooks
├── lib/               # 工具函数
└── public/            # 静态资源
```

## 🎯 路线图

### ✅ 已完成（v1.0）
- [x] 核心在线率监控
- [x] Web 仪表盘
- [x] 邮件通知
- [x] Webhook 集成
- [x] SSL 监控
- [x] 全球监控网络

### 🚧 进行中（v1.1）
- [ ] 移动应用（iOS 与 Android）
- [ ] 高级告警路由
- [ ] API 文档
- [ ] Terraform 自托管方案

### 🎯 未来规划（v2.0）
- [ ] 性能监控
- [ ] 日志聚合
- [ ] 自定义指标
- [ ] 团队协作功能

## 📄 许可协议

本项目以 MIT 许可证发布 —— 详见 [LICENSE](LICENSE) 文件。

## 🙋‍♂️ 支持渠道

- 📧 **邮件**： [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**： [加入社区](https://discord.gg/bareuptime)
- 🐛 **Bug 反馈**： [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **文档**： [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 关于我们

BareUptime 由 [Suman Saurabh](https://linkedin.com/in/ssumansaurabh)（前微软、Penify）创建，源自对昂贵企业监控工具的厌倦——这些工具为基础功能收取高昂费用。

**我们的使命**：以创业者友好的价格，提供企业级监控基础设施。

---

⭐ **如果 BareUptime 对你的项目有帮助，请给我们一个 Star！** 这有助于更多开发者发现这款高性价比的监控解决方案。

