"use client"

import { useEffect } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Set metadata client-side
    document.title = 'BareUptime - Simple Uptime Monitoring';
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Simple, reliable uptime monitoring solution');
    
    // Set generator meta
    let metaGenerator = document.querySelector('meta[name="generator"]');
    if (!metaGenerator) {
      metaGenerator = document.createElement('meta');
      metaGenerator.setAttribute('name', 'generator');
      document.head.appendChild(metaGenerator);
    }
    metaGenerator.setAttribute('content', 'v0.dev');
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId="G-T84N8LHVQB" />
      </body>
    </html>
  )
}
