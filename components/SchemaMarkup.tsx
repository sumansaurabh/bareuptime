import Script from 'next/script'

export function SchemaMarkup() {
  const mainSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices",
    "description": "Monitor your websites and APIs with enterprise-grade reliability for just $180/year. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations. 95% cheaper than competitors like UptimeRobot.",
    "url": "https://bareuptime.co",
    "mainEntity": {
      "@type": "SoftwareApplication",
      "name": "BareUptime",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web, iOS, Android",
      "description": "Enterprise-grade uptime monitoring solution for websites and APIs at startup-friendly prices of just $180/year.",
      "offers": {
        "@type": "Offer",
        "price": "15.00",
        "priceCurrency": "USD",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-01-01",
        "description": "Annual subscription for unlimited uptime monitoring"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "47",
        "bestRating": "5"
      },
      "featureList": [
        "Real-time uptime monitoring for websites and APIs",
        "Mobile push notifications for iOS and Android", 
        "SSL certificate monitoring and expiration alerts",
        "Webhook integrations for custom workflows",
        "Discord, Slack, and Teams notifications",
        "Global monitoring network with 99.9% uptime",
        "Affordable pricing at $180/year vs $360+/year competitors"
      ],
      "screenshot": "https://bareuptime.co/dashboard-screenshot.png",
      "downloadUrl": "https://app.bareuptime.co",
      "author": {
        "@type": "Person",
        "name": "Sunil Agrwal", 
        "url": "https://www.linkedin.com/in/sunilagwl5/"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://bareuptime.co"
        }
      ]
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much does BareUptime cost compared to competitors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BareUptime costs only $180/year while competitors like UptimeRobot charge $360+/year for similar features, providing significant cost savings."
        }
      },
      {
        "@type": "Question",
        "name": "What monitoring features are included?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BareUptime includes real-time uptime monitoring, mobile notifications, SSL monitoring, webhook integrations, Discord/Slack alerts, and global monitoring network coverage."
        }
      },
      {
        "@type": "Question",
        "name": "How reliable is BareUptime's monitoring infrastructure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BareUptime provides enterprise-grade monitoring with 99.9% uptime reliability using distributed global worker pools for consistent monitoring coverage."
        }
      },
      {
        "@type": "Question",
        "name": "What platforms does BareUptime support?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "BareUptime supports web dashboards, iOS and Android mobile apps, and integrates with Discord, Slack, Teams, and custom webhooks."
        }
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "BareUptime", 
    "url": "https://bareuptime.co",
    "logo": {
      "@type": "ImageObject",
      "url": "https://bareuptime.co/bareuptime-logo.svg",
      "width": 512,
      "height": 512
    },
    "sameAs": [
      "https://github.com/sumansaurabh/bareuptime",
      "https://www.linkedin.com/in/sunilagwl5/"
    ],
    "founder": {
      "@type": "Person",
      "name": "Sunil Agrwal",
      "url": "https://www.linkedin.com/in/sunilagwl5/"
    },
    "description": "Enterprise-grade uptime monitoring at startup prices"
  }

  return (
    <>
      <Script
        id="main-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mainSchema)
        }}
      />
      <Script
        id="faq-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  )
}
