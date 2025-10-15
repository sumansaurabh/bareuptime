# BareUptime - DIY Uptime Monitoring System

A comprehensive, self-hosted uptime monitoring solution that replaces overpriced enterprise tools with enterprise-grade reliability at startup-friendly pricing.

## 🚀 Why BareUptime?

Why are synthetic monitoring tools so ridiculously priced?

All we really need is a system that does two things:

1. Is my website up?
2. Can it notify me immediately — on Android, iOS, Discord, Slack, or email?

That's it.

We don't need fancy dashboards. We don't need animated graphs.  
We just want to know when things break — immediately.

Most tools out there gate even this behind $10+/month paywalls:

- Critical push notifications? *Premium.*  
- Webhooks? *Premium.*

Half the features you'd expect as basic are locked unless you pay up.  
For something that costs less than cents to run, it's absurd.

---

## 📊 Overview

### Purpose
Replace overpriced uptime tools with a self-hosted, scalable system that delivers enterprise reliability without the enterprise markup.

### Key Goals
- Send real-time alerts via Slack, Discord, Teams, mobile push, and webhooks
- Provide enterprise-grade monitoring infrastructure at startup-friendly pricing
- Maintain 99.9% uptime reliability through distributed global worker pools

### Current Status
- ✅ **No support for SMS and Call Notifications** — yet (keeping costs low)
- ✅ **No dashboards** — Just a UI to update your profile and add health check endpoints
- ✅ **Expected Pricing**: **$50 per year** instead of $10 per month

---

## 🎯 Results & Features

### Core Monitoring Features
- **Real-time Uptime Monitoring**: HTTP/HTTPS endpoint monitoring with global coverage
- **SSL Certificate Monitoring**: Automatic SSL expiration alerts
- **Multi-Protocol Support**: HEAD, GET, POST, PUT, DELETE requests
- **Flexible Monitoring Intervals**: From 1-minute to hourly checks
- **Global Monitoring Network**: Distributed across multiple regions (Germany, USA, Canada, India, Australia)

### Notification Channels
- 📱 **Mobile Apps**: Native iOS and Android applications for critical alerts
- 💬 **Chat Integrations**: Discord, Slack, Telegram, Teams
- 📧 **Email Notifications**: Professional email alerts
- 🔗 **Webhooks**: Custom webhook integrations for advanced workflows
- 📟 **Push Notifications**: Real-time mobile push alerts

### Enterprise Features
- **MCP (Model Context Protocol) Support**: Advanced monitoring protocol integration
- **Free Plan**: 10 monitors with comprehensive features
- **Paid Plan**: 50+ monitors with enterprise-grade SLA
- **24/7 Support**: Round-the-clock technical support (paid plans)
- **99.9% SLA**: Enterprise-grade uptime commitment

---

## 💰 Pricing Breakdown: Why $50/year?

This isn't VC-backed bloatware. It's a minimal service with just enough reliability and scale to serve 10,000+ users without wasting infrastructure.

Every part of this system is self-hosted to stay cost-efficient, scalable, and under control. No managed services, no vendor lock-in. Just bare compute, memory, and clean code.

### Infrastructure Costs

| Component                   | Quantity       | Specs                      | Provider                          | Monthly Cost |
|-----------------------------|----------------|-----------------------------|-----------------------------------|--------------|
| API + Config DB             | 1              | 4 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| Redis + Internal Queue      | 1              | 4 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| Worker Pools (Global)       | 8              | 4 vCPU, 8 GB RAM            | Hetzner VPS (globally distributed)| $92.00       |
| Monitoring & Logs (Optional)| 1              | 24 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| DNS + SSL                   | 1 domain       | Certbot + Namecheap         | Self-managed                      | $1.00        |
| Backups (DB, Queue, Logs)   | ~50–100 GB     | B2 or Bunny CDN             | Cloud Storage                     | $2.00        |
| Email Alerts (SMTP Infra)   | transactional  | ~5K–10K emails/month        | SendGrid / Postmark               | $50.00        |
| **Subtotal: Infra + Ops**   |                |                             |                                   | **$146.00**  |

### Operational Overhead

| Component                   | Quantity       | Specs                      | Provider                          | Monthly Cost |
|-----------------------------|----------------|-----------------------------|-----------------------------------|--------------|
| Apple Developer Program     | 1              | $99/year                    | Apple                             | $8.25        |
| Google Play Dev Account     | one-time       | $50(absorbed)              | Google                            | $0.00        |
| Payment Gateway Fees        | -              | ~2.9% + $0.30 per txn       | Stripe / PayPal                   | ~$50.00      |
| Estimated Taxes             | ~15% of gross  | Infra + income + processing | Govt. + SaaS locality             | $17.50       |
| **Subtotal: Overhead**      |                |                             |                                   | **$50.75**   |

| **Total Monthly Cost**      |                |                             |                                   | **$196.75**  |

Serving 10,000 users at this cost means **~$0.1965 per user/month**.  
Rounding to **$50/year** includes buffer for unexpected load, failed payments, refunds, and maintenance time — while staying radically cheaper than the industry average of $10/month per user.

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 15.3.3**: React-based full-stack framework
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Accessible component library
- **Framer Motion**: Animation library for smooth interactions

### Backend & Infrastructure
- **Node.js**: Server-side JavaScript runtime
- **Supabase**: Database and authentication (initial deployment)
- **Upstash**: Redis-compatible serverless database
- **Hetzner Cloud**: Cost-effective VPS hosting
- **Vercel**: Frontend deployment and CDN

### Mobile Applications
- **React Native**: Cross-platform mobile development
- **Expo**: Mobile development platform
- **Push Notifications**: Native iOS and Android notification support

### Monitoring Infrastructure
- **Global Worker Pools**: Distributed monitoring across 5+ regions
- **Redis Queue**: Reliable job processing and scheduling
- **PostgreSQL**: Primary database for monitoring data
- **Webhook Engine**: Custom webhook delivery system

---

## 🚀 Getting Started

### Quick Setup

1. **Create Account**: Visit [app.bareuptime.co](https://app.bareuptime.co)
2. **Add Monitor**: Enter your website URL or API endpoint
3. **Configure Alerts**: Set up your preferred notification channels
4. **Start Monitoring**: Your site is monitored within 60 seconds

### Free Plan Features
- 10 HTTP/HTTPS monitors
- SSL certificate monitoring
- Email, mobile, and webhook notifications
- 10-minute monitoring intervals
- Discord, Slack, Telegram integrations

### Paid Plan Features ($50/year)
- 50+ monitors
- 1-minute monitoring intervals
- Priority support (24/7)
- Advanced webhook configurations
- Enterprise SLA (99.9% uptime)

---

## 📋 Comparison with Competitors

| Feature | BareUptime Free | BareUptime Paid | UptimeRobot Free | Industry Standard |
|---------|----------------|----------------|------------------|-------------------|
| **Monitors** | 10 | 50+ | 30 | 5-10 |
| **Frequency** | 10min | 1min | 5min | 5min+ |
| **SSL Monitoring** | ✅ Free | ✅ Free | ❌ Premium | 💰 Premium |
| **Mobile Apps** | ✅ Free | ✅ Free | ✅ Free | 💰 $20/mo |
| **Webhooks** | ✅ Free | ✅ Free | ❌ Premium | 💰 Premium |
| **Annual Cost** | **$0** | **$50** | $0-$360+ | $120-$1200+ |
| **Cost Savings** | - | **98%** | - | **95%** |

---

## 🏗️ Architecture Overview

### System Design
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Web Frontend  │    │   Mobile Apps   │    │   Webhook API   │
└─────────┬───────┘    └─────────┬───────┘    └─────────┬───────┘
          │                      │                      │
          └──────────────────────┼──────────────────────┘
                                 │
                    ┌─────────────▼───────────────┐
                    │      API Gateway           │
                    │   (Next.js + Supabase)    │
                    └─────────────┬───────────────┘
                                 │
                    ┌─────────────▼───────────────┐
                    │     Redis Queue           │
                    │   (Job Scheduling)        │
                    └─────────────┬───────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
┌────────▼────────┐    ┌─────────▼────────┐    ┌────────▼────────┐
│  Worker Pool    │    │  Worker Pool     │    │  Worker Pool    │
│   (Germany)     │    │    (USA)         │    │   (Canada)      │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Key Components
1. **Frontend Interface**: User dashboard for monitor management
2. **API Gateway**: Handles authentication, monitor CRUD operations
3. **Job Scheduler**: Redis-based queue for monitoring tasks
4. **Global Workers**: Distributed monitoring across multiple regions
5. **Notification Engine**: Multi-channel alert delivery system

---

## 🔧 Development Setup

### Prerequisites
- Node.js 18+ and npm/pnpm
- Git for version control
- Supabase account (for database)
- Upstash account (for Redis)

### Local Development

```bash
# Clone the repository
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime

# Install dependencies
npm install
# or
pnpm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your API keys

# Start development server
npm run dev
# or
pnpm dev
```

### Environment Variables

```bash
# Database
DATABASE_URL="your-supabase-database-url"
SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_URL="your-supabase-project-url"

# Redis Queue
UPSTASH_REDIS_URL="your-upstash-redis-url"
UPSTASH_REDIS_TOKEN="your-upstash-redis-token"

# Notification Services
SLACK_WEBHOOK_URL="your-slack-webhook-url"
DISCORD_WEBHOOK_URL="your-discord-webhook-url"
SENDGRID_API_KEY="your-sendgrid-api-key"

# Mobile Push Notifications
EXPO_ACCESS_TOKEN="your-expo-access-token"
FCM_SERVER_KEY="your-fcm-server-key"
```

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run export       # Export static site
```

---

## 📱 Mobile Applications

### iOS App
- Native iOS application built with React Native
- Real-time push notifications for critical alerts
- Offline monitoring status viewing
- Quick monitor management interface

### Android App
- Native Android application with Material Design
- Background sync for monitoring status
- Customizable notification settings
- Widget support for home screen monitoring

### Download Links
- **iOS**: Available on the App Store
- **Android**: Available on Google Play Store
- **Web**: [app.bareuptime.co](https://app.bareuptime.co)

---

## 🔗 API Documentation

### Monitor Management

```bash
# Create a monitor
POST /api/monitors
{
  "url": "https://example.com",
  "name": "My Website",
  "interval": 300,
  "type": "http"
}

# Get monitor status
GET /api/monitors/{id}/status

# Update monitor
PUT /api/monitors/{id}
{
  "name": "Updated Name",
  "interval": 60
}

# Delete monitor
DELETE /api/monitors/{id}
```

### Webhook Endpoints

```bash
# Webhook for external integrations
POST /api/webhooks/{monitor_id}
{
  "event": "down",
  "monitor": {
    "id": "uuid",
    "name": "My Website",
    "url": "https://example.com"
  },
  "timestamp": "2024-01-01T12:00:00Z"
}
```

---

## 🔐 Security & Privacy

### Data Protection
- **End-to-end encryption** for sensitive monitoring data
- **GDPR compliant** data handling and storage
- **SOC 2 Type II** security standards adherence
- **Regular security audits** and penetration testing

### Privacy Features
- **No data selling** - Your monitoring data stays private
- **Minimal data collection** - Only essential monitoring metrics
- **Data retention policies** - Automatic cleanup of old data
- **User data export** - Download your monitoring history anytime

### Security Measures
- **2FA Authentication** - Two-factor authentication support
- **API Key Management** - Secure API access with rotating keys
- **Rate Limiting** - Protection against abuse and DDoS
- **Regular Updates** - Continuous security patches and updates

---

## 🌍 Global Infrastructure

### Monitoring Locations
- 🇩🇪 **Germany** (Frankfurt): Primary EU monitoring hub
- 🇺🇸 **USA** (Virginia): North America East Coast
- 🇺🇸 **USA** (California): North America West Coast  
- 🇨🇦 **Canada** (Toronto): North America redundancy
- 🇮🇳 **India** (Mumbai): Asia-Pacific monitoring
- 🇦🇺 **Australia** (Sydney): Oceania coverage

### Performance Metrics
- **99.9% Uptime SLA**: Enterprise-grade reliability commitment
- **< 5 second alert delivery**: Fastest notification times in industry
- **Global redundancy**: Multiple failover systems across regions
- **Sub-minute detection**: Issues detected within 60 seconds

---

## 🤝 Contributing

### Development Contribution
We welcome contributions from the community! Here's how you can help:

1. **Fork the repository** on GitHub
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and add tests
4. **Commit your changes**: `git commit -m 'Add amazing feature'`
5. **Push to the branch**: `git push origin feature/amazing-feature`
6. **Open a Pull Request** with detailed description

### Areas for Contribution
- 🐛 **Bug fixes** and performance improvements
- 🔧 **New integrations** (Slack, Discord, etc.)
- 📱 **Mobile app features** and improvements
- 📚 **Documentation** updates and translations
- 🧪 **Testing** and quality assurance

### Code Style
- Follow TypeScript/ESLint configurations
- Write comprehensive tests for new features
- Update documentation for any API changes
- Follow conventional commit message format

---

## 📞 Support & Community

### Getting Help
- 📧 **Email Support**: support@bareuptime.co
- 💬 **Discord Community**: [Join our Discord](https://discord.gg/bareuptime)
- 📚 **Documentation**: Comprehensive guides and tutorials
- 🐛 **Issue Tracker**: Report bugs on GitHub Issues

### Enterprise Support
- **24/7 Priority Support** for paid plans
- **Dedicated Slack channel** for enterprise customers  
- **Custom integration support** and consultation
- **SLA guarantees** with compensation for downtime

### Community Resources
- **Blog**: Regular updates on monitoring best practices
- **Changelog**: Detailed release notes and feature updates  
- **Status Page**: Real-time service status and incidents
- **Roadmap**: Public roadmap with upcoming features

---

## 📈 Roadmap

### Upcoming Features (Q1 2025)
- **Custom dashboards** with monitoring widgets
- **Advanced alerting rules** with conditions and escalations
- **Team management** with role-based access control
- **API rate limiting** monitoring and alerts

### Future Plans (2025)
- **SMS notifications** (cost-permitting)
- **Voice call alerts** for critical incidents  
- **Advanced analytics** with trend analysis
- **White-label solutions** for enterprise customers

### Long-term Vision
- **Open-source monitoring protocol** standardization
- **Community-driven integrations** marketplace
- **AI-powered incident prediction** and prevention
- **Global monitoring network expansion**

---

## 🎯 Closing Thoughts

- **Ridiculously cheap pricing** only to accommodate server cost and maintenance effort
- **Costs decrease with scale** - More signups = lower per-user costs
- **Weekend MVP to production** - Rapid development and deployment
- **Bootstrap approach**: Upstash + Supabase initially, scaling to managed instances after 500+ signups

### Why Choose BareUptime?

1. **98% Cost Savings**: $50/year vs $360+/year competitors
2. **Enterprise Features**: Without enterprise pricing
3. **Transparent Costs**: Open infrastructure and pricing breakdown
4. **Developer-Friendly**: Built by engineers who understand monitoring needs
5. **No Vendor Lock-in**: Self-hosted infrastructure you can trust

### Ready to Get Started?

Visit [app.bareuptime.co](https://app.bareuptime.co) and start monitoring your services in less than 60 seconds.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ by [Suman Saurabh](https://linkedin.com/in/ssumansaurabh)
- Powered by [Penify](https://www.penify.dev/) - AI-powered development tools
- Special thanks to the open-source community for incredible tools and libraries

---

**⭐ Star this repo** if BareUptime helps you monitor your applications effectively!

[![GitHub stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=social)](https://github.com/sumansaurabh/bareuptime)
[![Twitter Follow](https://img.shields.io/twitter/follow/ssumansaurabh?style=social)](https://twitter.com/ssumansaurabh)
