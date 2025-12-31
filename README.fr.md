# 🚀 BareUptime

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![App Launch](https://img.shields.io/badge/App-Launch-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub Stars](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **Surveillance de la disponibilité de niveau entreprise à des prix de startup** - Surveillez vos sites web et API avec une fiabilité de 99,9 % pour seulement 50 $/an au lieu de 360 $+/an chez les concurrents.

## 🤔 Pourquoi BareUptime ?

Les outils traditionnels de surveillance de la disponibilité sont **ridiculement chers**. Tout ce dont nous avons vraiment besoin est un système qui répond à deux questions simples :

1. **Mon site web/API est-il en ligne ?**
2. **Peut-il me notifier immédiatement** — sur mobile, Slack, Discord ou par e-mail ?

C'est tout. Nous n'avons pas besoin de tableaux de bord animés sophistiqués ou d'appels de vente d'entreprise.

### Le problème avec les solutions actuelles

La plupart des outils bloquent des fonctionnalités essentielles derrière des murs de paiement coûteux :
- 📱 **Notifications push mobiles ?** *Premium - 20 $/mois*
- 🔗 **Accès API/Webhooks ?** *Premium - 10 $/mois*
- 🌍 **Surveillance globale ?** *Premium - 15 $/mois*
- 🔒 **Surveillance SSL ?** *Premium - 10 $/mois*

**Total : 360 $+/an** pour des fonctionnalités qui coûtent des centimes à faire fonctionner.

## ✨ Ce qui rend BareUptime différent

### 🏆 Des fonctionnalités qui devraient être gratuites (et le sont !)

| Fonctionnalité | BareUptime | UptimeRobot | Autres |
|-------------------------|------------|-------------|---------|
| **Applications mobiles (iOS/Android)** | ✅ Gratuit | ❌ Premium | ❌ Premium |
| **Surveillance des certificats SSL** | ✅ Gratuit | ❌ Premium | ❌ Premium |
| **Intégrations Webhook** | ✅ Gratuit | ✅ Gratuit | ❌ Premium |
| **Discord/Slack/Teams** | ✅ Gratuit | ✅ Gratuit | ❌ Premium |
| **Surveillance réseau globale** | ✅ Gratuit | ❌ Premium | ❌ Premium |
| **Accès API** | ✅ Gratuit | ❌ Premium | ❌ Premium |
| **Coût annuel** | **50 $** | 360 $+ | 400 $+ |

### 💰 Répartition honnête des prix

Ce n'est pas un bloatware financé par le capital-risque. Voici exactement ce que couvrent vos 50 $/an :

| Composant d'infrastructure | Coût mensuel |
|-------------------------|--------------|
| Pools de travailleurs mondiaux (8 emplacements) | 92,00 $ |
| Serveurs API et bases de données | 24,00 $ |
| Infrastructure d'e-mail/notification | 50,00 $ |
| Frais des boutiques d'applications mobiles | 8,25 $ |
| Traitement des paiements | 22,50 $ |
| **Coût mensuel total** | **196,75 $** |

**Coût par utilisateur (10 000 utilisateurs) : 0,20 $/mois**
**Notre prix : 4,17 $/mois (50 $/an)**
**Moyenne de l'industrie : 30 $+/mois**

## 🚀 Démarrage rapide

### Option 1 : Utiliser notre service hébergé
1. Visitez [app.bareuptime.co](https://app.bareuptime.co)
2. Ajoutez l'URL de votre site web
3. Obtenez une surveillance instantanée + des applications mobiles
4. **Niveau gratuit** : 10 moniteurs, toutes les fonctionnalités incluses

### Option 2 : Auto-hébergement (Bientôt disponible)
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ Pile technologique

- **Frontend** : Next.js 15, TypeScript, Tailwind CSS
- **Composants UI** : Radix UI, shadcn/ui
- **Base de données** : Supabase (PostgreSQL)
- **Surveillance** : Pools de travailleurs mondiaux
- **Notifications** : Push, E-mail, Webhooks, Slack, Discord
- **Applications mobiles** : React Native (iOS et Android)

## 📋 Fonctionnalités

### Surveillance de base
- ✅ **Surveillance de sites web et d'API** (GET, POST, PUT, DELETE)
- ✅ **Suivi de l'expiration des certificats SSL**
- ✅ **En-têtes personnalisés et authentification**
- ✅ **Surveillance globale depuis plus de 8 emplacements**
- ✅ **Intervalles de vérification de 1 minute à 1 heure**

### Alertes intelligentes
- ✅ **Notifications push mobiles** (applications iOS et Android)
- ✅ **Alertes par e-mail** avec chronologie des incidents
- ✅ **Intégration Slack, Discord, Teams**
- ✅ **Notifications Webhook** pour les flux de travail personnalisés
- ✅ **Escalade des alertes** et routage d'astreinte

### Expérience développeur
- ✅ **Pages de statut publiques** pour chaque moniteur
- ✅ **API REST** pour l'automatisation
- ✅ Prise en charge du **MCP (Model Context Protocol)**
- ✅ **Tableau de bord en temps réel**
- ✅ **Chronologie des incidents** et analyse des causes profondes

## 🌍 Infrastructure mondiale

Notre réseau de surveillance s'étend sur :
- 🇺🇸 **États-Unis** (Côte Est et Côte Ouest)
- 🇩🇪 **Allemagne** (Francfort)
- 🇨🇦 **Canada** (Toronto)
- 🇮🇳 **Inde** (Mumbai)
- 🇦🇺 **Australie** (Sydney)
- *Plus d'emplacements ajoutés en fonction de la demande*

## 📱 Applications mobiles

Téléchargez nos applications mobiles natives pour les alertes critiques :

- 📱 [App Store iOS](https://apps.apple.com/app/bareuptime) - *Bientôt disponible*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *Bientôt disponible*

## 🧑‍💻 Contribuer

Nous accueillons les contributions ! Ce projet est construit par des développeurs qui en avaient assez des outils de surveillance trop chers.

### Développement local

1. **Cloner le dépôt**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   pnpm install
   ```

3. **Configuration de l'environnement**
   ```bash
   cp .env.example .env.local
   # Ajoutez vos clés Supabase et autres clés API
   ```

4. **Exécuter le serveur de développement**
   ```bash
   npm run dev
   # ou
   pnpm dev
   ```

5. **Ouvrir le navigateur**
   Naviguez vers [http://localhost:3000](http://localhost:3000)

### Structure du projet
```
bareuptime/
├── app/                 # Routeur d'application Next.js
│   ├── api/            # Routes API
│   ├── components/     # Composants spécifiques à la page
│   └── globals.css     # Styles globaux
├── components/         # Composants UI partagés
│   └── ui/            # Composants shadcn/ui
├── hooks/             # Hooks React personnalisés
├── lib/               # Fonctions utilitaires
└── public/            # Actifs statiques
```

## 🎯 Feuille de route

### ✅ Terminé (v1.0)
- [x] Surveillance de base de la disponibilité
- [x] Tableau de bord web
- [x] Notifications par e-mail
- [x] Intégrations Webhook
- [x] Surveillance SSL
- [x] Réseau de surveillance mondial

### 🚧 En cours (v1.1)
- [ ] Applications mobiles (iOS et Android)
- [ ] Routage d'alertes avancé
- [ ] Documentation API
- [ ] Auto-hébergement Terraform

### 🎯 Futur (v2.0)
- [ ] Surveillance des performances
- [ ] Agrégation de logs
- [ ] Métriques personnalisées
- [ ] Fonctionnalités de collaboration d'équipe

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails。

## 🙋‍♂️ Support

- 📧 **E-mail** : [support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord** : [Rejoignez notre communauté](https://discord.gg/bareuptime)
- 🐛 **Rapports de bugs** : [Problèmes GitHub](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **Documentation** : [docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 À propos

Construit par [Suman Saurabh](https://linkedin.com/in/ssumansaurabh) (Ex-Microsoft, Penify), BareUptime a été créé par frustration face aux outils de surveillance d'entreprise trop chers qui facturent des centaines de dollars pour des fonctionnalités de base.

**Notre mission** : Fournir une infrastructure de surveillance de niveau entreprise à des prix adaptés aux startups.

---

⭐ **Si BareUptime aide votre projet, donnez-nous une étoile !** Cela aide d'autres développeurs à trouver cette solution de surveillance rentable。
