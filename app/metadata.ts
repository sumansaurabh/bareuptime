import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices',
  description: 'Monitor your websites and APIs with enterprise-grade reliability for just $50/year. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations. 95% cheaper than competitors like UptimeRobot.',
  keywords: [
    'uptime monitoring',
    'website monitoring',
    'server monitoring',
    'API monitoring',
    'SSL monitoring',
    'downtime alerts',
    'cheap uptime monitoring',
    'affordable website monitoring',
    'startup monitoring tools',
    'enterprise monitoring',
    'BareUptime',
    'UptimeRobot alternative',
    'Pingdom alternative',
    'StatusCake alternative',
    'real-time alerts',
    'mobile notifications',
    'webhook monitoring',
    'Discord alerts',
    'Slack monitoring',
    'website uptime checker'
  ],
  openGraph: {
    title: 'BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices',
    description: 'Monitor your websites and APIs with enterprise-grade reliability for just $50/year. 95% cheaper than competitors.',
    url: 'https://bareuptime.co',
    siteName: 'BareUptime',
    images: [
      {
        url: 'https://bareuptime.co/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices',
    description: 'Monitor your websites and APIs with enterprise-grade reliability for just $50/year.',
    images: ['https://bareuptime.co/og-image.png'],
  },
  alternates: {
    canonical: 'https://bareuptime.co',
  },
}

export default function Page() {
  return null // This is handled by the main page.tsx
}
