// Optimized smooth scroll function with requestAnimationFrame
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    requestAnimationFrame(() => {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    })
  }
}

// SEO structured data for the homepage
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BareUptime - Enterprise-Grade Uptime Monitoring",
  "description": "Monitor your websites and APIs with enterprise-grade reliability. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations.",
  "url": "https://bareuptime.co",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "BareUptime",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android",
    "description": "Enterprise-grade uptime monitoring solution for websites and APIs.",
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
      "Discord, Slack, Telegram, and Teams notifications",
      "Global monitoring network with 99.9% uptime"
    ],
    "screenshot": "https://bareuptime.co/dashboard-screenshot.png",
    "downloadUrl": "https://app.bareuptime.co",
    "author": {
      "@type": "Person",
      "name": "Suman Saurabh",
      "url": "https://linkedin.com/in/ssumansaurabh"
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

export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
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
    }
  ]
}
