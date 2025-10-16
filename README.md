# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

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

### Option 1: Try the Live Service (Recommended)
1. **Visit** [app.bareuptime.co](https://app.bareuptime.co)
2. **Add your website URL** (takes 10 seconds)
3. **Get instant monitoring** + mobile apps
4. **Free tier includes**: 10 monitors with all features

### Option 2: Local Development
```bash
# Clone and run locally
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

### Option 3: One-Click Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sumansaurabh/bareuptime)

> **💡 Pro tip**: Start with our hosted service to get monitoring running immediately, then self-host later if needed.

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

### Prerequisites

- Node.js 18+ and npm/pnpm
- Git
- Supabase account (for backend services)

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
   # Add your environment variables:
   # - NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   # - NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   # - Other API keys as needed
   ```

4. **Database Setup**
   - Create a new Supabase project
   - Run the SQL migrations (if any)
   - Configure authentication providers

5. **Run development server**
   ```bash
   npm run dev
   # or  
   pnpm dev
   ```

6. **Open browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

### Project Structure
```
bareuptime/
├── app/                    # Next.js app router (pages & API)
│   ├── api/               # API routes
│   ├── blogs/             # Blog pages
│   ├── components/        # Page-specific components
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # Shared UI components
│   ├── ui/               # shadcn/ui components
│   ├── analytics/        # Analytics components
│   └── *.tsx             # Feature components
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
│   └── supabaseClient.ts # Database client
├── public/                # Static assets
│   ├── bareuptime-logo.svg
│   └── ...
├── styles/                # Additional styles
├── package.json           # Dependencies & scripts
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.mjs        # Next.js configuration
```

### Technology Stack Deep Dive

**Frontend Framework**
- **Next.js 15** - React framework with app router
- **React 19** - UI library
- **TypeScript 5.8** - Type safety

**Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable component library
- **Radix UI** - Headless UI primitives
- **Framer Motion** - Animation library

**Backend & Database**
- **Supabase** - PostgreSQL database & auth
- **Next.js API Routes** - Backend endpoints

**Monitoring & Analytics**
- **Vercel Analytics** - Performance monitoring
- **Google Analytics** - User behavior tracking

**Development Tools**
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks (if configured)

### Contributing Guidelines

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style

- Use TypeScript for all new files
- Follow the existing code structure
- Add comments for complex logic
- Write meaningful commit messages
- Test your changes locally before submitting

### Feature Requests & Bug Reports

Please use GitHub Issues to report bugs or request features. When reporting bugs, include:
- Operating system and browser
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## 🎯 Roadmap

### ✅ Completed (v1.0)
- [x] Core uptime monitoring with global network
- [x] Web dashboard with real-time updates
- [x] Email notifications with incident timelines
- [x] Webhook integrations for custom workflows
- [x] SSL certificate expiration monitoring
- [x] Multiple notification channels (Slack, Discord, Teams)
- [x] Public status pages
- [x] REST API for monitor management

### 🚧 In Progress (v1.1)
- [ ] Native mobile apps (iOS & Android)
- [ ] Advanced alert routing and escalation
- [ ] Comprehensive API documentation
- [ ] Terraform modules for self-hosting
- [ ] Performance monitoring metrics
- [ ] Enhanced dashboard analytics

### 🎯 Future (v2.0)
- [ ] Application performance monitoring (APM)
- [ ] Log aggregation and analysis
- [ ] Custom metrics and KPI tracking
- [ ] Team collaboration features
- [ ] Advanced reporting and insights
- [ ] Multi-tenant architecture

## 🚀 Deployment

### Production Deployment

BareUptime is optimized for deployment on Vercel, but can be deployed on any platform that supports Next.js.

#### Deploy on Vercel
1. Fork this repository
2. Connect to Vercel
3. Configure environment variables
4. Deploy automatically

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/sumansaurabh/bareuptime)

#### Deploy on Other Platforms

**Docker Deployment**
```bash
# Build Docker image
docker build -t bareuptime .

# Run container
docker run -p 3000:3000 -e DATABASE_URL=your_db_url bareuptime
```

**Environment Variables Required**
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_auth_secret
NEXTAUTH_URL=your_domain
```

## 🔧 API Reference

BareUptime provides a comprehensive REST API for programmatic access.

### Authentication
```bash
# Get API key from dashboard
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.bareuptime.co/monitors
```

### Core Endpoints

**Create Monitor**
```bash
POST /api/monitors
{
  "name": "My Website",
  "url": "https://example.com",
  "interval": 300,
  "timeout": 30
}
```

**Get Monitor Status**
```bash
GET /api/monitors/{id}/status
```

**List All Monitors**
```bash
GET /api/monitors
```

### MCP (Model Context Protocol) Support

BareUptime supports MCP for AI-assisted monitoring management:

```javascript
// Use with Claude, ChatGPT, or other MCP-compatible tools
const mcp = new MCPClient('bareuptime://your-api-key');
await mcp.createMonitor('https://example.com');
```

For complete API documentation, visit [docs.bareuptime.co/api](https://docs.bareuptime.co/api).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About

Built by [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify), BareUptime was created out of frustration with overpriced enterprise monitoring tools that charge hundreds of dollars for basic functionality.

**Our mission**: Provide enterprise-grade monitoring infrastructure at startup-friendly prices.

### Why We Built This

After launching multiple startups, we repeatedly hit the same wall: monitoring tools that cost more than our servers. The industry standard seemed to be "pay $30+ per month for basic uptime checks" while the actual infrastructure cost is pennies.

We believe:
- ✅ Essential monitoring features shouldn't be premium-only
- ✅ Startups deserve enterprise-grade reliability
- ✅ Transparent pricing should be the norm, not the exception
- ✅ Great tools can be affordable without compromising quality

### Our Numbers

- 🔥 **98% cost reduction** compared to industry leaders
- ⚡ **99.9% uptime** guarantee with global infrastructure  
- 📱 **10 seconds** average setup time
- 🌍 **8+ monitoring locations** worldwide
- 💼 **Trusted by** early-stage startups to enterprise teams

## 🤝 Community & Support

Join our growing community of developers who choose affordable, reliable monitoring:

### Get Help
- 📧 **Email Support**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord Community**: [Join our Discord](https://discord.gg/bareuptime) 
- 📝 **GitHub Discussions**: [Ask questions & share feedback](https://github.com/sumansaurabh/bareuptime/discussions)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)

### Resources
- 📚 **Documentation**: [docs.bareuptime.co](https://docs.bareuptime.co)
- 📊 **Status Page**: [status.bareuptime.co](https://status.bareuptime.co)
- 📰 **Blog & Updates**: [bareuptime.co/blogs](https://bareuptime.co/blogs)
- 🎥 **Video Tutorials**: [Coming Soon]

### Enterprise Support
For enterprise customers requiring SLA guarantees, custom integrations, or dedicated support:
- 📧 **Enterprise Sales**: [enterprise@bareuptime.co](mailto:enterprise@bareuptime.co)
- 📞 **Schedule a Call**: [calendly.com/bareuptime/enterprise](https://calendly.com/bareuptime/enterprise)

---

<div align="center">

### ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sumansaurabh/bareuptime&type=Date)](https://star-history.com/#sumansaurabh/bareuptime&Date)

**If BareUptime helps your project, please give us a star!** ⭐ 

*It helps other developers find this cost-effective monitoring solution.*

</div>
