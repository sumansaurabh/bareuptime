'use client'

import Link from 'next/link'
import { ArrowLeft, Clock, CheckCircle2, XCircle, Sparkles, BadgeDollarSign, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/ month',
    description: 'Perfect for hobby projects and early products.',
    monitors: '10 monitors',
    interval: '5 min interval',
    cta: 'Start Free',
    featured: false,
    features: [
      { label: 'HTTP, port, ping monitor', included: true },
      { label: 'Keyword monitor', included: true },
      { label: 'SSL & domain expiry monitor', included: true },
      { label: 'Basic status pages', included: true },
      { label: 'Core integrations (Slack, Discord, Telegram, Webhooks)', included: true },
      { label: 'AI monitors', included: false },
      { label: 'Team seats', included: false },
    ],
  },
  {
    name: '1 month',
    price: '$10',
    period: '/ month',
    description: 'Monthly plan for individuals and small projects.',
    monitors: '25 monitors',
    interval: '60 sec interval',
    cta: 'Choose 1 month',
    featured: false,
    features: [
      { label: 'Everything in Free', included: true },
      { label: 'Location-specific monitoring', included: true },
      { label: 'Slow response alerts', included: true },
      { label: 'DNS monitoring', included: true },
      { label: 'REST API access', included: true },
      { label: '2 AI monitors included', included: true },
      { label: 'Email monitoring (SPF, DKIM, DMARC)', included: true },
      { label: '1 notify seat', included: true },
    ],
  },
  {
    name: '6 month',
    price: '$8',
    period: '/ month',
    description: '6‑month plan - discounted monthly rate.',
    monitors: '25 monitors',
    interval: '60 sec interval',
    cta: 'Choose 6 month',
    featured: true,
    features: [
        { label: 'Everything in Free', included: true },
      { label: 'Location-specific monitoring', included: true },
      { label: 'Slow response alerts', included: true },
      { label: 'DNS monitoring', included: true },
      { label: 'REST API access', included: true },
      { label: '2 AI monitors included', included: true },
      { label: 'Email monitoring (SPF, DKIM, DMARC)', included: true },
      { label: '1 notify seat', included: true },    
    ],
  },
  {
    name: '12 month',
    price: '$5',
    period: '/ month',
    description: 'Best value - billed annually.',
    monitors: '25 monitors',
    interval: '60 sec interval',
    cta: 'Choose 12 month',
    featured: false,
    features: [
        { label: 'Everything in Free', included: true },
      { label: 'Location-specific monitoring', included: true },
      { label: 'Slow response alerts', included: true },
      { label: 'DNS monitoring', included: true },
      { label: 'REST API access', included: true },
      { label: '2 AI monitors included', included: true },
      { label: 'Email monitoring (SPF, DKIM, DMARC)', included: true },
      { label: '1 notify seat', included: true },
    ],
  },
  {
    name: 'Enterprise',
    price: '',
    period: '',
    description: 'For orgs that want scale, speed, and control — contact us.',
    monitors: 'Custom limits',
    interval: '30 sec interval',
    cta: 'Talk to Us',
    featured: false,
    features: [
      { label: 'Everything in 6 month', included: true },
      { label: 'Priority support', included: true },
      { label: 'Custom onboarding', included: true },
      { label: 'Custom alert routing', included: true },
      { label: '30 AI monitors included', included: true },
      { label: '5 notify seats', included: true },
      { label: '5 login seats', included: true },
    ],
  },
]

const comparisonRows = [
  { feature: 'HTTP, Port, Ping monitoring', bareUptime: 'Included', uptimeRobot: 'Included' },
  { feature: 'Keyword monitoring', bareUptime: 'Included', uptimeRobot: 'Included' },
  { feature: 'Location-specific monitoring', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'Slow response alerts', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'DNS monitoring', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'SSL monitoring', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'Domain expiry monitoring', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'Mobile apps + push notifications', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'REST API access', bareUptime: 'Included', uptimeRobot: 'Paid tiers' },
  { feature: 'AI monitors', bareUptime: 'Included on all paid plans', uptimeRobot: 'Not available' },
]

const yearlyRows = [
  { plan: '1 month', bareUptime: '$120 / year', uptimeRobot: '$180 / year', savings: 'UptimeRobot priced 50%' },
  { plan: '6 month', bareUptime: '$96 / year', uptimeRobot: '$180 / year', savings: 'UptimeRobot priced 96%' },
  { plan: '12 month', bareUptime: '$60 / year', uptimeRobot: '$180 / year', savings: 'UptimeRobot priced 200%' },
]

export default function BareUptimePricingVsUptimeRobot2026() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </header>

      <article className="max-w-7xl mx-auto px-4 py-16">
        <header className="text-center mb-14">
          <Badge className="bg-[#975E08]/20 text-[#975E08] border-[#975E08]/30 mb-6">Pricing Update</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
            BareUptime Pricing in 2026: Every Core UptimeRobot Feature + <span className="text-[#975E08]">AI Monitors</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            You should not pay enterprise prices for baseline monitoring. BareUptime now includes everything most teams use from UptimeRobot, plus AI monitors, at aggressively startup-friendly pricing.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              6 min read
            </div>
            <span>February 17, 2026</span>
            <span>By BareUptime Team</span>
          </div>
        </header>

        <section className="mb-16">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              Designed to beat UptimeRobot on value
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl border shadow-2xl ${
                  plan.featured
                    ? 'bg-[#0d1117] border-emerald-500/50 ring-1 ring-emerald-500/40'
                    : 'bg-white/5 border-white/10'
                }`}
              >
                {plan.featured && (
                  <div className="absolute top-0 left-0 right-0 bg-emerald-500 text-black text-center text-sm font-bold py-1.5">
                    Most popular
                  </div>
                )}

                <CardContent className={plan.featured ? 'pt-12 p-6' : 'p-6'}>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {plan.name}
                      <span className="text-[#975E08]">.</span>
                    </h2>
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 text-sm pb-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </div>

                  <a href="https://app.bareuptime.co" target="_blank" rel="noopener noreferrer">
                    <Button className={`w-full rounded-xl font-semibold mb-6 ${
                      plan.featured
                        ? 'bg-emerald-500 hover:bg-emerald-500/90 text-black'
                        : 'bg-[#975E08] hover:bg-[#975E08]/90 text-white'
                    }`}>
                      {plan.cta}
                    </Button>
                  </a>

                  <div className="mb-5">
                    <div className="text-3xl font-bold text-white">{plan.monitors}</div>
                    <div className="text-slate-300 mt-1">{plan.interval}</div>
                  </div>

                  <ul className="space-y-3 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-2.5">
                        {feature.included ? (
                          <CheckCircle2 className="w-4 h-4 mt-0.5 text-emerald-400 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-4 h-4 mt-0.5 text-red-400 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-slate-200' : 'text-slate-500'}>
                          {feature.label}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <Card className="bg-black/50 border border-white/10 rounded-2xl overflow-hidden">
            <div className="h-1.5 w-full bg-[#975E08]" />
            <CardContent className="p-0">
              <div className="p-8 pb-4">
                <h2 className="text-3xl font-bold text-white mb-2">Feature Coverage: BareUptime vs UptimeRobot</h2>
                <p className="text-slate-300">
                  If it is a core uptime feature, we include it. Then we add AI monitors on top.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5">
                    <tr className="text-slate-300">
                      <th className="px-8 py-4">Capability</th>
                      <th className="px-8 py-4 text-center text-[#975E08]">BareUptime</th>
                      <th className="px-8 py-4 text-center">UptimeRobot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row, index) => (
                      <tr key={row.feature} className={index % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent'}>
                        <td className="px-8 py-4 text-slate-200 border-t border-white/5">{row.feature}</td>
                        <td className="px-8 py-4 text-center text-emerald-300 border-t border-white/5">{row.bareUptime}</td>
                        <td className="px-8 py-4 text-center text-slate-400 border-t border-white/5">{row.uptimeRobot}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#975E08]/15 to-black border border-[#975E08]/20 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <BadgeDollarSign className="w-6 h-6 text-[#975E08]" />
                  <h2 className="text-2xl font-bold text-white">Annual Savings</h2>
                </div>
                <div className="space-y-4">
                  {yearlyRows.map((row) => (
                    <div key={row.plan} className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-white font-semibold">{row.plan}</span>
                        <span className="text-emerald-300 font-semibold">{row.savings}</span>
                      </div>
                      <div className="text-sm text-slate-300 flex items-center justify-between">
                        <span>BareUptime: {row.bareUptime}</span>
                        <span>UptimeRobot: {row.uptimeRobot}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border border-white/10 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-6 h-6 text-[#975E08]" />
                  <h2 className="text-2xl font-bold text-white">Why Teams Switch</h2>
                </div>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" />
                    Core monitoring stack is complete, no feature tax.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" />
                    Better monitor-per-dollar ratio on every paid tier.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" />
                    AI monitors catch workflow failures that ping checks miss.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-1 text-emerald-400 flex-shrink-0" />
                    Mobile apps and push alerts stay available where teams need them.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ship Reliable Products Without Paying Monitoring Tax</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-8">
            Start free, upgrade only when you need more capacity, and keep AI monitors ready as your stack grows.
          </p>
          <a href="https://app.bareuptime.co" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-semibold px-10 py-6 text-lg rounded-xl">
              Start Monitoring Today
            </Button>
          </a>
        </section>
      </article>
    </div>
  )
}
