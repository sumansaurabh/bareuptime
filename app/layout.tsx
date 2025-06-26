"use client"

import { useEffect } from 'react'
import './globals.css'
import '../styles/performance.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleAnalytics } from '@/components/google-analytics';
import { GlobalAnalyticsTracker } from '@/components/analytics/GlobalAnalyticsTracker';
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Set metadata client-side for performance
    document.title = 'BareUptime - Simple Uptime Monitoring';
    
    // Performance optimizations
    const performanceOptimizations = [
      { name: 'description', content: 'Simple, reliable uptime monitoring solution' },
      { name: 'generator', content: 'v0.dev' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { name: 'theme-color', content: '#1e40af' },
      { name: 'color-scheme', content: 'dark light' }
    ];

    performanceOptimizations.forEach(({ name, content }) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Add preload hints for critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/placeholder-logo.svg';
    preloadLink.as = 'image';
    document.head.appendChild(preloadLink);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="dark light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
