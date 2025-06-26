import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/', '/dashboard/', '/*.json'],
    },
    sitemap: 'https://bareuptime.co/sitemap.xml',
  }
}
