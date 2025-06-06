import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: 'BareUptime - Simple Uptime Monitoring',
  description: 'Simple, reliable uptime monitoring solution',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
