## DIY Uptime Monitoring System

Why are synthetic monitoring tools so ridiculously priced?

All we really need is a system that does two things:

1. Is my website up?  
2. Can it notify me immediately — on Android, iOS, Discord, Slack, or email?

That’s it.

We don’t need fancy dashboards. We don’t need animated graphs.  
We just want to know when things break — immediately.

Most tools out there gate even this behind $10+/month paywalls:

- Critical push notifications? *Premium.*  
- Webhooks? *Premium.*

Half the features you'd expect as basic are locked unless you pay up.  
For something that costs less than cents to run, it's absurd.

---

### 1. **Overview**

- **Purpose**: Replace overpriced uptime tools with a self-hosted, scalable system.
- **Goal**: Send real-time alerts via Slack, Discord, Teams, mobile push, and webhook.

---

### 2. **Results**

- No support for SMS and Call Notifications — yet.
- No dashboards. Just a UI to update your profile and add health check endpoints.
- Expected Pricing: **$8 per year** instead of $10 per month. Why? Check below.

---

### 3. **Why it's priced at $8/year**

This isn’t VC-backed bloatware. It's a minimal service with just enough reliability and scale to serve 10,000+ users without wasting infrastructure.

Every part of this system is self-hosted to stay cost-efficient, scalable, and under control. No managed services, no vendor lock-in. Just bare compute, memory, and clean code.

| Component                   | Quantity       | Specs                      | Provider                          | Monthly Cost |
|-----------------------------|----------------|-----------------------------|-----------------------------------|--------------|
| API + Config DB             | 1              | 4 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| Redis + Internal Queue      | 1              | 4 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| Worker Pools (Global)       | 8              | 4 vCPU, 8 GB RAM            | Hetzner VPS (globally distributed)| $92.00       |
| Monitoring & Logs (Optional)| 1              | 24 vCPU, 8 GB RAM            | Hetzner VPS                       | $12.00        |
| DNS + SSL                   | 1 domain       | Certbot + Namecheap         | Self-managed                      | $1.00        |
| Backups (DB, Queue, Logs)   | ~50–100 GB     | B2 or Bunny CDN             | Cloud Storage                     | $2.00        |
| Email Alerts (SMTP Infra)   | transactional  | ~5K–10K emails/month        | SendGrid / Postmark               | $15.00        |
| **Subtotal: Infra + Ops**   |                |                             |                                   | **$146.00**  |

| Component                   | Quantity       | Specs                      | Provider                          | Monthly Cost |
|-----------------------------|----------------|-----------------------------|-----------------------------------|--------------|
| Apple Developer Program     | 1              | $99/year                    | Apple                             | $8.25        |
| Google Play Dev Account     | one-time       | $25 (absorbed)              | Google                            | $0.00        |
| Payment Gateway Fees        | -              | ~2.9% + $0.30 per txn       | Stripe / PayPal                   | ~$25.00      |
| Estimated Taxes             | ~15% of gross  | Infra + income + processing | Govt. + SaaS locality             | $17.50       |
| **Subtotal: Overhead**      |                |                             |                                   | **$50.75**   |

| **Total Monthly Cost**      |                |                             |                                   | **$196.75**  |

Serving 10,00 users at this cost means **~$0.1965 per user/month**.  
Rounding to **$8/year** includes buffer for unexpected load, failed payments, refunds, and my own maintenance time — while staying radically cheaper than the industry average of $10/month per user.

---

### 4. **Closing Thoughts**

- Ridiculously cheap pricing only to accommodate server cost and my maintenance effort.  
- My cost will only come down if there are a huge number of signups.  
- With a weekend of code, I will complete this.  
- To start this, I will use Upstash + Supabase to keep the price minimum. Only after 500 signups, I will move to managed DB instances.
