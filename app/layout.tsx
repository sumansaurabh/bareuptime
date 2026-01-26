import type { Metadata } from 'next'
import './globals.css'
import '../styles/performance.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@/components/google-analytics';
import { GlobalAnalyticsTracker } from '@/components/analytics/GlobalAnalyticsTracker';
import Script from 'next/script';

export const metadata: Metadata = {
  metadataBase: new URL('https://bareuptime.co'),
  title: {
    default: 'BareUptime - Enterprise-Grade Uptime Monitoring',
    template: '%s | BareUptime'
  },
  description: 'Monitor your websites and APIs with enterprise-grade reliability. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations.',
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
  authors: [{ name: 'Sunil Agrwal', url: 'https://www.linkedin.com/in/sunilagwl5/' }],
  creator: 'Sunil Agrwal',
  publisher: 'Penify Technologies LLC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bareuptime.co',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://bareuptime.co',
    siteName: 'BareUptime',
    title: 'BareUptime - Enterprise-Grade Uptime Monitoring',
    description: 'Monitor your websites and APIs with enterprise-grade reliability. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations.',
        images: [
      {
        url: '/bareuptime-logo.svg',
        width: 1200,
        height: 630,
        alt: 'BareUptime - Enterprise-Grade Uptime Monitoring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BareUptime - Enterprise-Grade Uptime Monitoring',
    description: 'Monitor your websites and APIs with enterprise-grade reliability. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations.',
    images: ['/og-image.png'],
    creator: '@sumansaurabh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your actual verification code
  },
  category: 'technology',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://bareuptime.co/#website",
                  "url": "https://bareuptime.co",
                  "name": "BareUptime",
                  "description": "Enterprise-Grade Uptime Monitoring at Startup Prices",
                  "potentialAction": [
                    {
                      "@type": "SearchAction",
                      "target": {
                        "@type": "EntryPoint",
                        "urlTemplate": "https://bareuptime.co/?s={search_term_string}"
                      },
                      "query-input": "required name=search_term_string"
                    }
                  ],
                  "inLanguage": "en-US"
                },
                {
                  "@type": "Organization",
                  "@id": "https://bareuptime.co/#organization",
                  "name": "BareUptime",
                  "url": "https://bareuptime.co",
                  "logo": {
                    "@type": "ImageObject",
                    "inLanguage": "en-US",
                    "@id": "https://bareuptime.co/#/schema/logo/image/",
                    "url": "https://bareuptime.co/bareuptime-logo.svg",
                    "contentUrl": "https://bareuptime.co/bareuptime-logo.svg",
                    "width": 512,
                    "height": 512,
                    "caption": "BareUptime"
                  },
                  "image": {
                    "@id": "https://bareuptime.co/#/schema/logo/image/"
                  },
                  "sameAs": [
                    "https://github.com/sumansaurabh/bareuptime",
                    "https://www.linkedin.com/in/sunilagwl5/"
                  ],
                  "founder": {
                    "@type": "Person",
                    "name": "Sunil Agrwal",
                    "url": "https://www.linkedin.com/in/sunilagwl5/"
                  }
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "BareUptime",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web, iOS, Android",
                  "description": "Enterprise-grade uptime monitoring solution for websites and APIs at startup-friendly prices.",
                  "offers": {
                    "@type": "Offer",
                    "price": "8",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock",
                    "validFrom": "2025-01-01"
                  },
                  "featureList": [
                    "Real-time uptime monitoring",
                    "Mobile push notifications",
                    "SSL certificate monitoring",
                    "Webhook integrations",
                    "Discord and Slack alerts",
                    "Global monitoring network"
                  ],
                  "screenshot": "https://bareuptime.co/bareuptime-logo.svg"
                }
              ]
            })
          }}
        />
        
  {/* Preload critical resources */}
  <link rel="preload" href="/bareuptime-logo.svg" as="image" />
        <link rel="preload" href="/api/health" as="fetch" crossOrigin="anonymous" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//app.bareuptime.co" />
        <link rel="dns-prefetch" href="//api.bareuptime.co" />
        <link rel="dns-prefetch" href="//github.com" />
        
        {/* Favicon and app icons */}
  <link rel="icon" href="/bareuptime-logo.svg" type="image/svg+xml" />
  <link rel="apple-touch-icon" href="/bareuptime-logo.svg" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalAnalyticsTracker />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
