# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **स्टार्टअप की कीमतों पर एंटरप्राइज़-ग्रेड अपटाइम मॉनिटरिंग** - प्रतिस्पर्धियों के $360+/वर्ष के बजाय सिर्फ $50/वर्ष में 99.9% विश्वसनीयता के साथ अपनी वेबसाइटों और APIs की निगरानी करें।

## 🤔 BareUptime क्यों चुनें?

पारंपरिक अपटाइम मॉनिटरिंग टूल्स **अनावश्यक रूप से महंगे** हैं। हमें वास्तव में केवल एक ऐसी सिस्टम की जरूरत है जो दो सरल प्रश्नों का उत्तर दे सके:

1. **क्या मेरी वेबसाइट/API चालू है?** 
2. **क्या यह तुरंत मुझे सूचित कर सकती है** — मोबाइल, Slack, Discord, या ईमेल पर?

बस इतना ही। हमें फैंसी एनिमेटेड डैशबोर्ड या एंटरप्राइज़ सेल्स कॉल की जरूरत नहीं है।

### मौजूदा समाधानों की समस्या

अधिकांश टूल्स महंगे paywall के पीछे आवश्यक सुविधाओं को छुपाते हैं:
- 📱 **मोबाइल push notifications?** *प्रीमियम - $20/माह*
- 🔗 **API access/Webhooks?** *प्रीमियम - $10/माह* 
- 🌍 **ग्लोबल मॉनिटरिंग?** *प्रीमियम - $15/माह*
- 🔒 **SSL मॉनिटरिंग?** *प्रीमियम - $10/माह*

**कुल: $360+/वर्ष** उन सुविधाओं के लिए जिन्हें चलाने में पैसे खर्च होते हैं।

## ✨ BareUptime को क्या अलग बनाता है

### 🏆 सुविधाएं जो मुफ्त होनी चाहिए (और हैं!)

| सुविधा | BareUptime | UptimeRobot | अन्य |
|---------|------------|-------------|---------|
| **मोबाइल Apps (iOS/Android)** | ✅ मुफ्त | ❌ प्रीमियम | ❌ प्रीमियम |
| **SSL Certificate मॉनिटरिंग** | ✅ मुफ्त | ❌ प्रीमियम | ❌ प्रीमियम |
| **Webhook इंटीग्रेशन** | ✅ मुफ्त | ✅ मुफ्त | ❌ प्रीमियम |
| **Discord/Slack/Teams** | ✅ मुफ्त | ✅ मुफ्त | ❌ प्रीमियम |
| **ग्लोबल नेटवर्क मॉनिटरिंग** | ✅ मुफ्त | ❌ प्रीमियम | ❌ प्रीमियम |
| **API Access** | ✅ मुफ्त | ❌ प्रीमियम | ❌ प्रीमियम |
| **वार्षिक लागत** | **$50** | $360+ | $400+ |

### 💰 ईमानदार मूल्य निर्धारण विवरण

यह VC-backed bloatware नहीं है। यहाँ बताया गया है कि आपका $50/वर्ष वास्तव में क्या कवर करता है:

| Infrastructure Component | मासिक लागत |
|-------------------------|--------------|
| ग्लोबल worker pools (8 स्थान) | $92.00 |
| API servers & databases | $24.00 |
| ईमेल/notification infrastructure | $50.00 |
| मोबाइल app store फीस | $8.25 |
| Payment processing | $22.50 |
| **कुल मासिक लागत** | **$196.75** |

**प्रति उपयोगकर्ता लागत (10K users): $0.20/माह**
**हमारी कीमत: $4.17/माह ($50/वर्ष)**
**इंडस्ट्री औसत: $30+/माह**

## 🚀 Quick Start

### विकल्प 1: हमारी Hosted Service का उपयोग करें
1. [app.bareuptime.co](https://app.bareuptime.co) पर जाएं
2. अपनी वेबसाइट का URL जोड़ें
3. तुरंत मॉनिटरिंग + मोबाइल apps प्राप्त करें
4. **मुफ्त tier**: 10 monitors, सभी सुविधाएं शामिल

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
- **Monitoring**: ग्लोबल worker pools
- **Notifications**: Push, Email, Webhooks, Slack, Discord
- **Mobile Apps**: React Native (iOS & Android)

## 📋 सुविधाएं

### मुख्य मॉनिटरिंग
- ✅ **वेबसाइट और API मॉनिटरिंग** (GET, POST, PUT, DELETE)
- ✅ **SSL certificate expiration ट्रैकिंग**
- ✅ **Custom headers और authentication**
- ✅ **8+ स्थानों से ग्लोबल मॉनिटरिंग**
- ✅ **1-मिनट से 1-घंटे तक check intervals**

### स्मार्ट अलर्टिंग
- ✅ **मोबाइल push notifications** (iOS और Android apps)
- ✅ **ईमेल अलर्ट** incident timeline के साथ
- ✅ **Slack, Discord, Teams इंटीग्रेशन**
- ✅ **Webhook notifications** custom workflows के लिए
- ✅ **Alert escalation** और on-call routing

### Developer Experience
- ✅ **Public status pages** हर monitor के लिए
- ✅ **REST API** automation के लिए
- ✅ **MCP (Model Context Protocol)** support
- ✅ **Real-time dashboard** 
- ✅ **Incident timeline** और root cause analysis

## 🌍 ग्लोबल Infrastructure

हमारा मॉनिटरिंग नेटवर्क फैला है:
- 🇺🇸 **संयुक्त राज्य अमेरिका** (East & West Coast)
- 🇩🇪 **जर्मनी** (Frankfurt) 
- 🇨🇦 **कनाडा** (Toronto)
- 🇮🇳 **भारत** (Mumbai)
- 🇦🇺 **ऑस्ट्रेलिया** (Sydney)
- *मांग के आधार पर और स्थान जोड़े गए*

## 📱 मोबाइल Apps

महत्वपूर्ण अलर्ट के लिए हमारे native mobile apps डाउनलोड करें:

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *जल्द आ रहा है*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *जल्द आ रहा है*

## 🧑‍💻 योगदान

हम योगदान का स्वागत करते हैं! यह प्रोजेक्ट उन developers द्वारा बनाया गया है जो महंगे मॉनिटरिंग टूल्स से परेशान थे।

### स्थानीय विकास (Local Development)

1. **Repository को clone करें**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Dependencies install करें**
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
   [http://localhost:3000](http://localhost:3000) पर जाएं

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

### ✅ पूर्ण (v1.0)
- [x] Core uptime monitoring
- [x] Web dashboard  
- [x] ईमेल notifications
- [x] Webhook integrations
- [x] SSL monitoring
- [x] ग्लोबल monitoring network

### 🚧 प्रगति में (v1.1)
- [ ] मोबाइल apps (iOS & Android)
- [ ] Advanced alert routing
- [ ] API documentation
- [ ] Terraform self-hosting

### 🎯 भविष्य (v2.0)
- [ ] Performance monitoring
- [ ] Log aggregation
- [ ] Custom metrics
- [ ] Team collaboration features

## 📄 लाइसेंस

यह प्रोजेक्ट MIT License के तहत लाइसेंस प्राप्त है - विवरण के लिए [LICENSE](LICENSE) फाइल देखें।

## 🙋‍♂️ सहायता

- 📧 **ईमेल**: [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**: [हमारे community में शामिल हों](https://discord.gg/bareuptime) 
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentation**: [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 के बारे में

[Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify) द्वारा निर्मित, BareUptime महंगे enterprise monitoring tools से निराशा के कारण बनाया गया था जो बुनियादी कार्यक्षमता के लिए सैकड़ों डॉलर चार्ज करते हैं।

**हमारा मिशन**: स्टार्टअप-friendly कीमतों पर enterprise-grade monitoring infrastructure प्रदान करना।

---

⭐ **यदि BareUptime आपके प्रोजेक्ट में मदद करता है, कृपया हमें एक star दें!** यह अन्य developers को इस cost-effective monitoring solution को खोजने में मदद करता है।
