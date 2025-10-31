# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **स्टार्टअप मूल्य पर एंटरप्राइज़-ग्रेड अपटाइम मॉनिटरिंग** - प्रतिस्पर्धियों से प्रति वर्ष $360+ के बजाय केवल $50/वर्ष में 99.9% विश्वसनीयता के साथ अपनी वेबसाइटों और APIs की निगरानी करें।

## 🤔 BareUptime क्यों?

पारंपरिक अपटाइम मॉनिटरिंग टूल्स **बेतुकी तरह से अधिक कीमत वाले** हैं। हमें वास्तव में केवल एक ऐसी प्रणाली की आवश्यकता है जो दो सरल प्रश्नों का उत्तर दे:

1. **क्या मेरी वेबसाइट/API चालू है?**
2. **क्या यह मुझे तुरंत सूचित कर सकती है** — मोबाइल, Slack, Discord, या email पर?

बस इतना ही। हमें फैंसी एनिमेटेड डैशबोर्ड या एंटरप्राइज़ सेल्स कॉल की आवश्यकता नहीं है।

### वर्तमान समाधानों के साथ समस्या

अधिकांश टूल्स महंगे paywall के पीछे आवश्यक सुविधाओं को रोक देते हैं:
- 📱 **Mobile push notifications?** *Premium - $20/माह*
- 🔗 **API access/Webhooks?** *Premium - $10/माह*
- 🌍 **Global monitoring?** *Premium - $15/माह*
- 🔒 **SSL monitoring?** *Premium - $10/माह*

**कुल: $360+/वर्ष** उन सुविधाओं के लिए जिन्हें चलाने में पैसे खर्च होते हैं।

## ✨ BareUptime को अलग क्या बनाता है

### 🏆 सुविधाएं जो मुफ्त होनी चाहिए (और हैं!)

| सुविधा | BareUptime | UptimeRobot | Others |
|---------|------------|-------------|---------|
| **Mobile Apps (iOS/Android)** | ✅ Free | ❌ Premium | ❌ Premium |
| **SSL Certificate Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **Webhook Integrations** | ✅ Free | ✅ Free | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Free | ✅ Free | ❌ Premium |
| **Global Network Monitoring** | ✅ Free | ❌ Premium | ❌ Premium |
| **API Access** | ✅ Free | ❌ Premium | ❌ Premium |
| **वार्षिक लागत** | **$50** | $360+ | $400+ |

### 💰 ईमानदार मूल्य निर्धारण विवरण

यह VC-backed bloatware नहीं है। यहां बताया गया है कि आपके $50/वर्ष में क्या शामिल है:

| Infrastructure Component | मासिक लागत |
|-------------------------|--------------|
| Global worker pools (8 locations) | $92.00 |
| API servers & databases | $24.00 |
| Email/notification infrastructure | $50.00 |
| Mobile app store fees | $8.25 |
| Payment processing | $22.50 |
| **कुल मासिक लागत** | **$196.75** |

**प्रति उपयोगकर्ता लागत (10K users): $0.20/माह**
**हमारा मूल्य: $4.17/माह ($50/वर्ष)**
**उद्योग औसत: $30+/माह**

## 🚀 त्वरित शुरुआत

### विकल्प 1: हमारी होस्टेड सेवा का उपयोग करें
1. [app.bareuptime.co](https://app.bareuptime.co) पर जाएं
2. अपना वेबसाइट URL जोड़ें
3. तुरंत मॉनिटरिंग + mobile apps प्राप्त करें
4. **Free tier**: 10 monitors, सभी सुविधाएं शामिल

### विकल्प 2: Self-Hosting (जल्द आ रहा है)
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

## 📋 सुविधाएं

### मुख्य मॉनिटरिंग
- ✅ **Website & API monitoring** (GET, POST, PUT, DELETE)
- ✅ **SSL certificate समाप्ति ट्रैकिंग**
- ✅ **Custom headers & authentication**
- ✅ **8+ स्थानों से Global monitoring**
- ✅ **1-मिनट से 1-घंटे तक के check intervals**

### स्मार्ट अलर्टिंग
- ✅ **Mobile push notifications** (iOS & Android apps)
- ✅ **Email alerts** incident timeline के साथ
- ✅ **Slack, Discord, Teams integration**
- ✅ **Webhook notifications** custom workflows के लिए
- ✅ **Alert escalation** और on-call routing

### Developer Experience
- ✅ **Public status pages** प्रत्येक monitor के लिए
- ✅ **REST API** automation के लिए
- ✅ **MCP (Model Context Protocol)** support
- ✅ **Real-time dashboard**
- ✅ **Incident timeline** और root cause analysis

## 🌍 Global Infrastructure

हमारा मॉनिटरिंग नेटवर्क फैला हुआ है:
- 🇺🇸 **United States** (East & West Coast)
- 🇩🇪 **Germany** (Frankfurt)
- 🇨🇦 **Canada** (Toronto)
- 🇮🇳 **India** (Mumbai)
- 🇦🇺 **Australia** (Sydney)
- *मांग के आधार पर अधिक स्थान जोड़े जा रहे हैं*

## 📱 Mobile Apps

महत्वपूर्ण अलर्ट के लिए हमारे native mobile apps डाउनलोड करें:

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *जल्द आ रहा है*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *जल्द आ रहा है*

## 🧑‍💻 योगदान

हम योगदान का स्वागत करते हैं! यह प्रोजेक्ट उन डेवलपर्स द्वारा बनाया गया है जो अधिक कीमत वाले मॉनिटरिंग टूल्स से थक गए थे।

### स्थानीय विकास

1. **Repository को clone करें**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Dependencies इंस्टॉल करें**
   ```bash
   npm install
   # या
   pnpm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # अपनी Supabase और अन्य API keys जोड़ें
   ```

4. **Development server चलाएं**
   ```bash
   npm run dev
   # या
   pnpm dev
   ```

5. **Browser खोलें**
   [http://localhost:3000](http://localhost:3000) पर navigate करें

### प्रोजेक्ट संरचना
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

### ✅ पूर्ण (v1.0)
- [x] Core uptime monitoring
- [x] Web dashboard
- [x] Email notifications
- [x] Webhook integrations
- [x] SSL monitoring
- [x] Global monitoring network

### 🚧 प्रगति में (v1.1)
- [ ] Mobile apps (iOS & Android)
- [ ] Advanced alert routing
- [ ] API documentation
- [ ] Terraform self-hosting

### 🎯 भविष्य (v2.0)
- [ ] Performance monitoring
- [ ] Log aggregation
- [ ] Custom metrics
- [ ] Team collaboration features

## 📄 License

यह प्रोजेक्ट MIT License के तहत लाइसेंस प्राप्त है - विवरण के लिए [LICENSE](LICENSE) फ़ाइल देखें।

## 🙋‍♂️ सहायता

- 📧 **Email**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [हमारे समुदाय में शामिल हों](https://discord.gg/bareuptime)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentation**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 परिचय

[Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify) द्वारा निर्मित, BareUptime को अधिक कीमत वाले enterprise monitoring tools से निराशा के कारण बनाया गया था जो बुनियादी कार्यक्षमता के लिए सैकड़ों डॉलर चार्ज करते हैं।

**हमारा मिशन**: स्टार्टअप-अनुकूल मूल्यों पर enterprise-grade monitoring infrastructure प्रदान करना।

---

⭐ **यदि BareUptime आपके प्रोजेक्ट की मदद करता है, तो कृपया हमें एक star दें!** यह अन्य डेवलपर्स को इस लागत-प्रभावी मॉनिटरिंग समाधान को खोजने में मदद करता है।
