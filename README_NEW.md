# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

> **Enterprise-grade uptime monitoring at startup prices** - Monitor your websites and APIs with 99.9% reliability for just $50/year instead of $360+/year from competitors.

## 🤔 Why BareUptime?

Traditional uptime monitoring tools are **ridiculously overpriced**. We built BareUptime to answer two simple questions:

1. **Is my website/API up?** 
2. **Can it notify me immediately** — on mobile, Slack, Discord, or email?

That's it. We don't need fancy animated dashboards or enterprise sales calls.

### 💰 The Problem with Current Solutions

Most tools gate essential features behind expensive paywalls:
- 📱 **Mobile push notifications?** *Premium - $20/month*
- 🔗 **API access/Webhooks?** *Premium - $10/month* 
- 🌍 **Global monitoring?** *Premium - $15/month*
- 🔒 **SSL monitoring?** *Premium - $10/month*

**Total: $360+/year** for features that cost pennies to run.

## ✨ What Makes BareUptime Different

### 🏆 Feature Comparison

| Feature | BareUptime | UptimeRobot | Others |
|---------|------------|-------------|---------|
| **Mobile Apps (iOS/Android)** | ✅ Free | ❌ Premium | ❌ Premium |
| **SSL Certificate Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **Webhook Integrations** | ✅ Free | ✅ Free | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Free | ✅ Free | ❌ Premium |
| **Global Network Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **API Access** | ✅ Free | ❌ Premium | ❌ Premium |
| **Annual Cost** | **$50** | $360+ | $400+ |

### 💡 Honest Pricing

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

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) 5.8+
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.4+
- **UI Components**: 
  - [Radix UI](https://www.radix-ui.com/) primitives
  - [shadcn/ui](https://ui.shadcn.com/) component library
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **Deployment**: [Vercel](https://vercel.com/)
- **Monitoring**: Global worker pools across 8+ locations
- **Notifications**: 
  - Email, Push notifications
  - Webhooks, Slack, Discord, Telegram
- **Mobile Apps**: React Native (iOS & Android) - Coming Soon
- **Analytics**: Vercel Analytics & Speed Insights

## 🚀 Quick Start

### Option 1: Use Our Hosted Service ⚡
1. Visit [app.bareuptime.co](https://app.bareuptime.co)
2. Add your website URL
3. Get instant monitoring + mobile apps
4. **Free tier**: 10 monitors, all features included

### Option 2: Local Development 🧑‍💻

#### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm
- Git

#### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your environment variables:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # Optional: Analytics
   NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

#### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run export   # Export static site
```

## 📂 Project Structure

```
bareuptime/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── blogs/             # Blog pages
│   ├── components/        # Page-specific components
│   ├── enterprise/        # Enterprise page
│   ├── features/          # Features page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles
├── components/            # Shared UI components
│   ├── ui/               # shadcn/ui components
│   ├── analytics/        # Analytics components
│   └── theme-provider.tsx
├── hooks/                 # Custom React hooks
├── lib/                  # Utility functions
│   └── supabaseClient.ts
├── public/               # Static assets
├── styles/              # Additional CSS
├── package.json         # Dependencies & scripts
├── next.config.mjs      # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment config
```

## 📋 Features

### 🔄 Core Monitoring
- ✅ **Website & API monitoring** (HEAD, GET, POST, PUT, DELETE)
- ✅ **SSL certificate expiration tracking**
- ✅ **Custom headers & authentication**
- ✅ **Global monitoring from 8+ locations**
- ✅ **Configurable check intervals** (1-minute to 1-hour)

### 🚨 Smart Alerting
- ✅ **Mobile push notifications** (iOS & Android apps)
- ✅ **Email alerts** with incident timeline
- ✅ **Slack, Discord, Teams integration**
- ✅ **Webhook notifications** for custom workflows
- ✅ **Alert escalation** and on-call routing

### 👨‍💻 Developer Experience
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

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   npm run lint
   npm run build  # Verify build works
   ```
5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
6. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Contribution Guidelines

- Follow existing code style and conventions
- Add TypeScript types for all new code
- Update documentation for new features
- Test your changes locally before submitting
- Write clear commit messages following conventional commits

### Areas Where We Need Help

- [ ] Mobile app development (React Native)
- [ ] Documentation improvements
- [ ] Performance optimizations
- [ ] Additional integrations (PagerDuty, OpsGenie, etc.)
- [ ] Testing coverage improvements
- [ ] Accessibility improvements

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
- [ ] Self-hosting documentation

### 🎯 Future (v2.0)
- [ ] Performance monitoring
- [ ] Log aggregation
- [ ] Custom metrics
- [ ] Team collaboration features

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- ComponentName.test.tsx
```

## 📦 Deployment

### Deploy to Vercel (Recommended)

1. Fork the repository
2. Connect to [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy!

### Deploy to Other Platforms

The app is a standard Next.js application and can be deployed to any platform supporting Node.js:

- **Netlify**: `npm run build && npm run export`
- **AWS Amplify**: Standard Next.js deployment
- **Docker**: Create Dockerfile for containerized deployment
- **Self-hosted**: Use `npm run build && npm run start`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙋‍♂️ Support & Community

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [Join our community](https://discord.gg/bareuptime) 
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentation**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 About

Built by [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify), BareUptime was created out of frustration with overpriced enterprise monitoring tools that charge hundreds of dollars for basic functionality.

**Our mission**: Provide enterprise-grade monitoring infrastructure at startup-friendly prices.

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sumansaurabh/bareuptime&type=Date)](https://star-history.com/#sumansaurabh/bareuptime&Date)

---

⭐ **If BareUptime helps your project, please give us a star!** It helps other developers find this cost-effective monitoring solution.

[![Made with ❤️ by Suman Saurabh](https://img.shields.io/badge/Made%20with%20%E2%9D%A4%EF%B8%8F%20by-Suman%20Saurabh-red?style=for-the-badge)](https://linkedin.com/in/ssumansaurabh)
