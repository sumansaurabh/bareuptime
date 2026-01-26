# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **Enterprise-grade uptime monitoring at startup prices** - Monitor your websites and APIs with 99.9% reliability for just $50/year instead of $360+/year from competitors.

## 🤔 Why BareUptime?

Traditional uptime monitoring tools are **ridiculously overpriced**. All we really need is a system that answers two simple questions:

1. **Is my website/API up?** 
2. **Can it notify me immediately** — on mobile, Slack, Discord, or email?

That's it. We don't need fancy animated dashboards or enterprise sales calls.

### The Problem with Current Solutions

Most tools gate essential features behind expensive paywalls:
- 📱 **Mobile push notifications?** *Premium - $20/month*
- 🔗 **API access/Webhooks?** *Premium - $10/month* 
- 🌍 **Global monitoring?** *Premium - $15/month*
- 🔒 **SSL monitoring?** *Premium - $10/month*

**Total: $360+/year** for features that cost pennies to run.

## ✨ What Makes BareUptime Different

### 🏆 Features That Should Be Free (And Are!)

| Feature | BareUptime | UptimeRobot | Others |
|---------|------------|-------------|---------|
| **Mobile Apps (iOS/Android)** | ✅ Free | ❌ Premium | ❌ Premium |
| **SSL Certificate Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **Webhook Integrations** | ✅ Free | ✅ Free | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Free | ✅ Free | ❌ Premium |
| **Global Network Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **API Access** | ✅ Free | ❌ Premium | ❌ Premium |
| **Annual Cost** | **$50** | $360+ | $400+ |

### 💰 Honest Pricing Breakdown

This isn't VC-backed bloatware. Here's exactly what your $50/year covers:

| Infrastructure Component | Monthly Cost |
|-------------------------|--------------|
| Global worker pools (8 locations) | $92.00 |
| API servers & databases | $24.00 |
| Email/notification infrastructure | $50.00 |
| Mobile app store fees | $8.25 |
| Payment processing | $22.50 |
| **Total monthly cost** | **$196.75** |

**Cost per user (10K users): $0.20/month**
**Our price: $4.17/month ($50/year)**
**Industry average: $30+/month**

## 🚀 Quick Start

### Option 1: Use Our Hosted Service
1. Visit [app.bareuptime.co](https://app.bareuptime.co)
2. Add your website URL
3. Get instant monitoring + mobile apps
4. **Free tier**: 10 monitors, all features included

### Option 2: Self-Hosting (Coming Soon)
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui  
- **Database**: Supabase (PostgreSQL)
- **Monitoring**: Global worker pools
- **Notifications**: Push, Email, Webhooks, Slack, Discord
- **Mobile Apps**: React Native (iOS & Android)

## 📋 Features

### Core Monitoring
- ✅ **Website & API monitoring** (GET, POST, PUT, DELETE)
- ✅ **SSL certificate expiration tracking**
- ✅ **Custom headers & authentication**
- ✅ **Global monitoring from 8+ locations**
- ✅ **1-minute to 1-hour check intervals**

### Smart Alerting
- ✅ **Mobile push notifications** (iOS & Android apps)
- ✅ **Email alerts** with incident timeline
- ✅ **Slack, Discord, Teams integration**
- ✅ **Webhook notifications** for custom workflows
- ✅ **Alert escalation** and on-call routing

### Developer Experience
- ✅ **Public status pages** for each monitor
- ✅ **REST API** for automation
- ✅ **MCP (Model Context Protocol)** support
- ✅ **Real-time dashboard** 
- ✅ **Incident timeline** and root cause analysis

## 🌍 Global Infrastructure

Our monitoring network spans:
- 🇺🇸 **United States** (East & West Coast)
- 🇩🇪 **Germany** (Frankfurt) 
- 🇨🇦 **Canada** (Toronto)
- 🇮🇳 **India** (Mumbai)
- 🇦🇺 **Australia** (Sydney)
- *More locations added based on demand*

## 📱 Mobile Apps

Download our native mobile apps for critical alerts:

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *Coming Soon*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *Coming Soon*

## 🧑‍💻 Contributing

We welcome contributions! This project is built by developers who were tired of overpriced monitoring tools.

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Add your Supabase and other API keys
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or  
   pnpm dev
   ```

5. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Project Structure
```
bareuptime/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   ├── components/     # Page-specific components
│   └── globals.css     # Global styles
├── components/         # Shared UI components
│   └── ui/            # shadcn/ui components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
└── public/            # Static assets
```

## 🎯 Roadmap

### ✅ Completed (v1.0)
- [x] Core uptime monitoring
- [x] Web dashboard  
- [x] Email notifications
- [x] Webhook integrations
- [x] SSL monitoring
- [x] Global monitoring network

### 🚧 In Progress (v1.1)
- [ ] Mobile apps (iOS & Android)
- [ ] Advanced alert routing
- [ ] API documentation
- [ ] Terraform self-hosting

### 🎯 Future (v2.0)
- [ ] Performance monitoring
- [ ] Log aggregation
- [ ] Custom metrics
- [ ] Team collaboration features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [Join our community](https://discord.gg/bareuptime) 
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentation**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 About

Built by [Sunil Agrwal](https://www.linkedin.com/in/sunilagwl5/) (Ex-Microsoft, Penify), BareUptime was created out of frustration with overpriced enterprise monitoring tools that charge hundreds of dollars for basic functionality.

**Our mission**: Provide enterprise-grade monitoring infrastructure at startup-friendly prices.

---

⭐ **If BareUptime helps your project, please give us a star!** It helps other developers find this cost-effective monitoring solution.
