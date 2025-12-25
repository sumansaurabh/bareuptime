# 🚀 BareUptime

[![ライブデモ](https://img.shields.io/badge/ライブ-デモ-blue?style=for-the-badge&logo=vercel)](https://bareuptime.co)
[![アプリ起動](https://img.shields.io/badge/アプリ-起動-green?style=for-the-badge&logo=rocket)](https://app.bareuptime.co)
[![GitHub スター](https://img.shields.io/github/stars/sumansaurabh/bareuptime?style=for-the-badge)](https://github.com/sumansaurabh/bareuptime)

> **スタートアップ価格でエンタープライズグレードの稼働監視** - 競合他社の年間360ドル以上ではなく、わずか年間50ドルで99.9%の信頼性でウェブサイトとAPIを監視します。

## 🤔 なぜBareUptimeなのか？

従来の稼働監視ツールは**法外に高価**です。私たちが本当に必要としているのは、2つのシンプルな質問に答えるシステムだけです：

1. **私のウェブサイト/APIは稼働していますか？** 
2. **すぐに通知できますか** — モバイル、Slack、Discord、またはメールで？

それだけです。派手なアニメーションダッシュボードやエンタープライズセールスコールは必要ありません。

### 現在のソリューションの問題点

ほとんどのツールは、高額なペイウォールの背後に必須機能を隠しています：
- 📱 **モバイルプッシュ通知？** *プレミアム - 月額20ドル*
- 🔗 **APIアクセス/Webhook？** *プレミアム - 月額10ドル* 
- 🌍 **グローバル監視？** *プレミアム - 月額15ドル*
- 🔒 **SSL監視？** *プレミアム - 月額10ドル*

**合計：年間360ドル以上** 実行コストがわずか数セントの機能のために。

## ✨ BareUptimeの違い

### 🏆 無料であるべき機能（そして実際に無料です！）

| 機能 | BareUptime | UptimeRobot | その他 |
|---------|------------|-------------|---------|
| **モバイルアプリ（iOS/Android）** | ✅ 無料 | ❌ プレミアム | ❌ プレミアム |
| **SSL証明書監視** | ✅ 無料 | ❌ プレミアム | ❌ プレミアム |
| **Webhook統合** | ✅ 無料 | ✅ 無料 | ❌ プレミアム |
| **Discord/Slack/Teams** | ✅ 無料 | ✅ 無料 | ❌ プレミアム |
| **グローバルネットワーク監視** | ✅ 無料 | ❌ プレミアム | ❌ プレミアム |
| **APIアクセス** | ✅ 無料 | ❌ プレミアム | ❌ プレミアム |
| **年間コスト** | **50ドル** | 360ドル以上 | 400ドル以上 |

### 💰 正直な価格内訳

これはVCが支援する肥大化したソフトウェアではありません。年間50ドルで正確にカバーされる内容は次のとおりです：

| インフラストラクチャコンポーネント | 月額コスト |
|-------------------------|--------------|
| グローバルワーカープール（8拠点） | 92.00ドル |
| APIサーバーとデータベース | 24.00ドル |
| メール/通知インフラストラクチャ | 50.00ドル |
| モバイルアプリストア手数料 | 8.25ドル |
| 決済処理 | 22.50ドル |
| **月額総コスト** | **196.75ドル** |

**ユーザーあたりのコスト（10Kユーザー）：月額0.20ドル**
**当社の価格：月額4.17ドル（年間50ドル）**
**業界平均：月額30ドル以上**

## 🚀 クイックスタート

### オプション1：ホスティングサービスを使用
1. [app.bareuptime.co](https://app.bareuptime.co)にアクセス
2. ウェブサイトのURLを追加
3. 即座に監視 + モバイルアプリを取得
4. **無料プラン**：10モニター、すべての機能が含まれます

### オプション2：セルフホスティング（近日公開）
```bash
git clone https://github.com/sumansaurabh/bareuptime.git
cd bareuptime
npm install
npm run dev
```

## 🛠️ 技術スタック

- **フロントエンド**：Next.js 15、TypeScript、Tailwind CSS
- **UIコンポーネント**：Radix UI、shadcn/ui  
- **データベース**：Supabase（PostgreSQL）
- **監視**：グローバルワーカープール
- **通知**：プッシュ、メール、Webhook、Slack、Discord
- **モバイルアプリ**：React Native（iOSおよびAndroid）

## 📋 機能

### コア監視
- ✅ **ウェブサイトとAPI監視**（GET、POST、PUT、DELETE）
- ✅ **SSL証明書の有効期限追跡**
- ✅ **カスタムヘッダーと認証**
- ✅ **8拠点以上からのグローバル監視**
- ✅ **1分から1時間のチェック間隔**

### スマートアラート
- ✅ **モバイルプッシュ通知**（iOSおよびAndroidアプリ）
- ✅ **メールアラート**（インシデントタイムライン付き）
- ✅ **Slack、Discord、Teams統合**
- ✅ **Webhook通知**（カスタムワークフロー用）
- ✅ **アラートエスカレーション**とオンコールルーティング

### 開発者エクスペリエンス
- ✅ **パブリックステータスページ**（各モニター用）
- ✅ **REST API**（自動化用）
- ✅ **MCP（Model Context Protocol）**サポート
- ✅ **リアルタイムダッシュボード** 
- ✅ **インシデントタイムライン**と根本原因分析

## 🌍 グローバルインフラストラクチャ

当社の監視ネットワークは以下をカバーしています：
- 🇺🇸 **アメリカ合衆国**（東海岸と西海岸）
- 🇩🇪 **ドイツ**（フランクフルト） 
- 🇨🇦 **カナダ**（トロント）
- 🇮🇳 **インド**（ムンバイ）
- 🇦🇺 **オーストラリア**（シドニー）
- *需要に応じてさらに拠点を追加*

## 📱 モバイルアプリ

重要なアラートのためにネイティブモバイルアプリをダウンロード：

- 📱 [iOS App Store](https://apps.apple.com/app/bareuptime) - *近日公開*
- 🤖 [Google Play Store](https://play.google.com/store/apps/details?id=co.bareuptime.app) - *近日公開*

## 🧑‍💻 貢献

貢献を歓迎します！このプロジェクトは、高価な監視ツールにうんざりした開発者によって構築されました。

### ローカル開発

1. **リポジトリをクローン**
   ```bash
   git clone https://github.com/sumansaurabh/bareuptime.git
   cd bareuptime
   ```

2. **依存関係をインストール**
   ```bash
   npm install
   # または
   pnpm install
   ```

3. **環境設定**
   ```bash
   cp .env.example .env.local
   # Supabaseおよびその他のAPIキーを追加
   ```

4. **開発サーバーを実行**
   ```bash
   npm run dev
   # または  
   pnpm dev
   ```

5. **ブラウザを開く**
   [http://localhost:3000](http://localhost:3000)に移動

### プロジェクト構造
```
bareuptime/
├── app/                 # Next.jsアプリルーター
│   ├── api/            # APIルート
│   ├── components/     # ページ固有のコンポーネント
│   └── globals.css     # グローバルスタイル
├── components/         # 共有UIコンポーネント
│   └── ui/            # shadcn/uiコンポーネント
├── hooks/             # カスタムReactフック
├── lib/               # ユーティリティ関数
└── public/            # 静的アセット
```

## 🎯 ロードマップ

### ✅ 完了（v1.0）
- [x] コア稼働監視
- [x] Webダッシュボード  
- [x] メール通知
- [x] Webhook統合
- [x] SSL監視
- [x] グローバル監視ネットワーク

### 🚧 進行中（v1.1）
- [ ] モバイルアプリ（iOSおよびAndroid）
- [ ] 高度なアラートルーティング
- [ ] APIドキュメント
- [ ] Terraformセルフホスティング

### 🎯 将来（v2.0）
- [ ] パフォーマンス監視
- [ ] ログ集約
- [ ] カスタムメトリクス
- [ ] チームコラボレーション機能

## 📄 ライセンス

このプロジェクトはMITライセンスの下でライセンスされています - 詳細については[LICENSE](LICENSE)ファイルを参照してください。

## 🙋‍♂️ サポート

- 📧 **メール**：[support@bareuptime.co](mailto:support@bareuptime.co)
- 💬 **Discord**：[コミュニティに参加](https://discord.gg/bareuptime) 
- 🐛 **バグレポート**：[GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)
- 📚 **ドキュメント**：[docs.bareuptime.co](https://docs.bareuptime.co)

## 🏢 について

[Suman Saurabh](https://linkedin.com/in/ssumansaurabh)（元Microsoft、Penify）によって構築されたBareUptimeは、基本機能に数百ドルを請求する高価なエンタープライズ監視ツールへの不満から生まれました。

**私たちの使命**：スタートアップに優しい価格でエンタープライズグレードの監視インフラストラクチャを提供すること。

---

⭐ **BareUptimeがあなたのプロジェクトに役立つ場合は、スターをください！** 他の開発者がこのコスト効率の高い監視ソリューションを見つけるのに役立ちます。
