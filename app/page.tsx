"use client"

import type React from "react"
import Script from "next/script"
import dynamic from "next/dynamic"
import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Clock, Smartphone, MessageSquare, Send, Webhook, Users, BookOpen, TrendingDown, Brain, Cloud, Shield, X } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'
import { useIntersectionObserver } from '@/hooks/usePerformance'
import AnimateOnScroll from './components/AnimateOnScroll'
import { trackWithSource } from '@/components/google-analytics'
import FeaturesDropdown from '@/components/FeaturesDropdown'
import { Cancel } from "@radix-ui/react-alert-dialog"
// Lazy load heavy components for better performance
const DashboardMockup = dynamic(() => import('./components/DashboardMockup'), {
  loading: () => <div className="w-full h-96 bg-black/20 rounded-xl animate-pulse" />,
  ssr: false
})

const MonitoringAnimation = dynamic(() => import('@/components/MonitoringAnimation'), {
  loading: () => <div className="w-full h-96 bg-black/20 rounded-xl animate-pulse" />,
  ssr: false
})

// Custom Activity Icon to replace Shield - Memoized for performance
const ActivityIcon = memo(({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/>
  </svg>
))
ActivityIcon.displayName = 'ActivityIcon'

// Custom Android Icon
const AndroidIcon = memo(({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997zm-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4482.9997-.9993.9997zm11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8816 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.61 10.2718.8995 12.8979.8995 15.9101c0 .1873.0715.3568.1458.5226.0143.0286.0286.0572.0429.0858.0715.1144.1144.2431.2145.3575.0286.0429.0858.0715.1144.1001.0572.0572.1001.1144.1716.1573.0429.0286.1001.0572.1573.0715.0715.0286.1144.0572.2002.0715.0429.0143.0858.0286.1287.0286.0858.0143.1573.0286.2431.0286H21.0994c.0858 0 .1573-.0143.2431-.0286.0429-.0143.0858-.0143.1287-.0286.0858-.0143.1287-.0429.2002-.0715.0572-.0143.1144-.0429.1573-.0715.0715-.0429.1144-.1001.1716-.1573.0286-.0286.0858-.0572.1144-.1001.1001-.1144.1429-.2431.2145-.3575.0143-.0286.0286-.0572.0429-.0858.0715-.1658.1458-.3353.1458-.5226 0-3.0122-1.7105-5.6383-5.2195-6.5687z"/>
  </svg>
))
AndroidIcon.displayName = 'AndroidIcon'

// Custom iOS Icon  
const IOSIcon = memo(({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
))
IOSIcon.displayName = 'IOSIcon'

// Optimized smooth scroll function with requestAnimationFrame
const smoothScrollTo = (elementId: string) => {
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
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices",
  "description": "Monitor your websites and APIs with enterprise-grade reliability for just $50/year. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations. 95% cheaper than competitors like UptimeRobot.",
  "url": "https://bareuptime.co",
  "mainEntity": {
    "@type": "SoftwareApplication",
    "name": "BareUptime",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web, iOS, Android", 
    "description": "Enterprise-grade uptime monitoring solution for websites and APIs at startup-friendly prices of just $50/year.",
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
      "Affordable pricing at $50/year vs $180+/year competitors"
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

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does BareUptime cost compared to competitors?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "BareUptime costs only $50/year while competitors like UptimeRobot charge $180+/year for similar features, providing 95% cost savings."
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
    }
  ]
}

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [repoData, setRepoData] = useState<{ watchers: number, forks: number } | null>(null)
  const [isLoadingRepoData, setIsLoadingRepoData] = useState(true)
  const [monitorUrl, setMonitorUrl] = useState("")
  const [monitorStatus, setMonitorStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [monitorMessage, setMonitorMessage] = useState("")

  // TMS Chat Widget with optimized script loading
  useEffect(() => {
    if (typeof window === 'undefined') return

    const loadTMSChat = () => {
      // Set up TMS Chat configurationpp
      window.TMSChatConfig = {
        widgetId: 'e338f50a-1304-482d-ad13-80282f45280e',
        domain: 'bareuptime.co'
      };

      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@taral/web-chat@latest/dist/chat-widget.js"
      script.async = true
      script.defer = true // Use defer for better performance
      
      // Add error handling
      script.onerror = () => console.warn('Failed to load TMS chat script')
      
      document.head.appendChild(script)
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
        // Clean up global config
        delete window.TMSChatConfig
      }
    }

    // Defer script loading to avoid blocking
    const timeoutId = setTimeout(loadTMSChat, 1000)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  // Memoized fetch function to prevent recreation
  const fetchRepoData = useCallback(async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000) // 5s timeout
      
      const response = await fetch('https://api.github.com/repos/sumansaurabh/bareuptime', {
        signal: controller.signal,
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })
      
      clearTimeout(timeoutId)
      
      if (response.ok) {
        const data = await response.json()
        setRepoData({
          watchers: data.subscribers_count || data.watchers_count || 0,
          forks: data.forks_count || 0
        })
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        console.error("Failed to fetch repository data:", error)
      }
    } finally {
      setIsLoadingRepoData(false)
    }
  }, [])

  useEffect(() => {
    // Defer API call to not block initial render
    const timeoutId = setTimeout(fetchRepoData, 500)
    return () => clearTimeout(timeoutId)
  }, [fetchRepoData])

  const handleMonitorSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!monitorUrl.trim()) {
      setMonitorStatus("error")
      setMonitorMessage("Add the site or API you want to monitor.")
      return
    }

    try {
      const parsed = new URL(monitorUrl.trim())
      if (!parsed.protocol.startsWith("http")) {
        throw new Error()
      }
    } catch {
      setMonitorStatus("error")
      setMonitorMessage("Use a full URL including https://")
      return
    }

    setMonitorStatus("loading")
    setMonitorMessage("")

    try {
      const response = await fetch("/api/monitors-public", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: monitorUrl.trim() }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "We could not create that monitor just yet.")
      }

      const monitorPublicUrl = `https://app.bareuptime.co/status/url/${data.id || ''}`
      window.open(monitorPublicUrl, '_blank')
      setMonitorStatus("success")
      setMonitorMessage(`We're on it. BareUptime just started monitoring that endpoint for you. Here is your status page: ${monitorPublicUrl}`)
      setMonitorUrl("")
      trackWithSource.ctaClick('create_monitor', 'hero_monitor_form')
    } catch (error: unknown) {
      console.error("monitor creation failed", error)
      setMonitorStatus("error")
      setMonitorMessage(error instanceof Error ? error.message : "Something went wrong. Try again in a moment.")
    }
  }, [monitorUrl, trackWithSource])

  // Memoized form submission handler
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setMessage("")
    
    try {
      const response = await fetch('https://api.bareuptime.co/subscriber', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`)
      }
      const successData = await response.json()
      console.log("Subscription successful", successData)
      setIsSubmitted(true)
      setMessage(successData.message)
      setMessageType("success")
      setEmail("")
      // Track successful subscription
      trackWithSource.signUp('email', 'newsletter_signup')
    } catch (error: any) {
      console.error("Subscription failed:", error)
      if (error.message?.includes("duplicate") || error.message?.includes("Already registered for updates")) {
        setMessage("You are already subscribed!")
      } else {
        setMessage("Something went wrong. Please try again.")
      }
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }, [email, isSubmitting])

  return (
    <>
    {/* Schema.org structured data for better SEO */}
    <Script
      id="schema-webpage"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "BareUptime - Enterprise-Grade Uptime Monitoring at Startup Prices",
          "description": "Monitor your websites and APIs with enterprise-grade reliability for just $50/year. Real-time alerts, mobile apps, SSL monitoring, and webhook integrations. 95% cheaper than competitors like UptimeRobot.",
          "url": "https://bareuptime.co",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "BareUptime",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "description": "Enterprise-grade uptime monitoring solution for websites and APIs at startup-friendly prices of just $50/year.",
            "offers": {
              "@type": "Offer",
              "price": "15.00",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01"
            },
            "featureList": [
              "Real-time uptime monitoring for websites and APIs",
              "Mobile push notifications for iOS and Android",
              "SSL certificate monitoring and expiration alerts",
              "Webhook integrations for custom workflows",
              "Discord, Slack, and Teams notifications",
              "Global monitoring network with 99.9% uptime"
            ],
            "author": {
              "@type": "Person",
              "name": "Suman Saurabh",
              "url": "https://linkedin.com/in/ssumansaurabh"
            }
          }
        })
      }}
    />

    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950 will-change-scroll" itemScope itemType="https://schema.org/WebPage">
      {/* Launch Banner - Optimized */}
     
      
      {/* Enterprise Navigation Bar - Optimized */}
      <header className="w-full py-3 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 shadow-lg will-change-transform">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <img src="/bareuptime-logo.svg" alt="BareUptime" className="w-6 h-6 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8" role="navigation">
              <FeaturesDropdown />
              <button 
                onClick={() => {
                  smoothScrollTo('pricing');
                  trackWithSource.navigation('pricing', 'header_nav');
                }} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </button>
              <a 
                href="/enterprise"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                onClick={() => trackWithSource.navigation('enterprise', 'header_nav')}
              >
                Enterprise
              </a>
              <a 
                href="/blogs"
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
                onClick={() => trackWithSource.navigation('blogs', 'header_nav')}
              >
                Blogs
              </a>
              <button 
                onClick={() => {
                  smoothScrollTo('about');
                  trackWithSource.navigation('about', 'header_nav');
                }} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                aria-label="Navigate to About section"
              >
                About
              </button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sumansaurabh/bareuptime" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 py-1.5 px-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium text-white transition-all transform hover:scale-105"
              aria-label="View BareUptime on GitHub"
              onClick={() => trackWithSource.buttonClick('github_repo', 'header')}
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://app.bareuptime.co" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Sign in to BareUptime"
              onClick={() => trackWithSource.ctaClick('sign_in', 'header')}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 transform hover:scale-105">
                Sign In
              </Button>
            </a>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:60px_60px] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid items-center gap-12 py-16 md:grid-cols-[1.05fr_minmax(0,1fr)]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-slate-200">
                <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Monitoring teams before demo day
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-semibold text-white leading-tight tracking-tight">
                  FOOBAR
                </h1>
                <p className="mt-4 max-w-xl text-lg text-slate-300">
                  Point BareUptime at your production URL and we handle the rest: global probes, incident timelines, and alerts that wake the right person.
                </p>
              </div>

              <form id="hero-monitor-form" onSubmit={handleMonitorSubmit} className="space-y-3">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Input
                    type="url"
                    value={monitorUrl}
                    onChange={(event) => setMonitorUrl(event.target.value)}
                    placeholder="https://yourstartup.com"
                    className="h-12 flex-1 border-white/20 bg-white/5 text-base text-white placeholder:text-slate-400 focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label="URL to monitor"
                  />
                  <Button
                    type="submit"
                    disabled={monitorStatus === "loading"}
                    className="h-12 min-w-[160px] bg-blue-600 text-base font-semibold transition hover:bg-blue-500 disabled:cursor-wait"
                  >
                    {monitorStatus === "loading" ? "Creating..." : "Start monitoring"}
                  </Button>
                </div>
                <p className="text-sm text-slate-400">
                  Free public monitor. Upgrade later for advanced routing and escalations.
                </p>
                {monitorStatus !== "idle" && monitorMessage && (
                  <div
                    className={`text-sm font-medium ${monitorStatus === "success" ? "text-emerald-300" : "text-red-300"}`}
                    role={monitorStatus === "success" ? "status" : "alert"}
                  >
                    {monitorMessage}
                  </div>
                )}
              </form>

              <div className="flex flex-col gap-4 text-sm text-slate-400 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  One-minute global pings
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  On-call mobile apps included
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-300" />
                  $50/year flat
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-slate-900/0 blur-3xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-2xl">
                <MonitoringAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Problem Statement */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                The Problem with <span className="text-red-400">Current Solutions</span>
              </h2>
              <p className="text-slate-300">Essential features locked behind expensive paywalls</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* What You Need */}
              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <h3 className="text-lg font-bold text-emerald-400">What You Actually Need</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Uptime monitoring + SSL</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Mobile Push Notifications</span>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-emerald-300 text-sm font-medium mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4" />
                      Supported Platforms & Integrations:
                    </p>
                    <div className="flex flex-wrap gap-2 p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                      <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm font-medium border border-emerald-500/30">
                        <AndroidIcon className="w-4 h-4" />
                        <span>Android</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-sm font-medium border border-emerald-500/30">
                        <IOSIcon className="w-4 h-4" />
                        <span>iOS</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30">
                        <MessageSquare className="w-4 h-4" />
                        <span>Discord</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg text-sm font-medium border border-indigo-500/30">
                        <MessageSquare className="w-4 h-4" />
                        <span>Slack</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-sm font-medium border border-cyan-500/30">
                        <Send className="w-4 h-4" />
                        <span>Telegram</span>
                      </div>
                      {/* <div className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-medium border border-purple-500/30">
                        <Users className="w-4 h-4" />
                        <span>Teams</span>
                      </div> */}
                      <div className="flex items-center gap-2 px-3 py-2 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/30">
                        <Webhook className="w-4 h-4" />
                        <span>Webhooks</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Industry Delivers */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400" />
                  <h3 className="text-lg font-bold text-red-400">What Industry Delivers</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-slate-300 text-sm">Mobile apps</span>
                    <span className="text-red-400 font-bold text-sm">$20/mo</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-red-500/10 rounded border border-red-500/20">
                    <span className="text-slate-300 text-sm">API access</span>
                    <span className="text-red-400 font-bold text-sm">$10/mo</span>
                  </div>

                  <div className="pt-2 border-t border-red-500/20">
                    <div className="flex items-center justify-between">
                      <span className="text-red-300 font-medium">Total yearly cost</span>
                      <span className="text-red-400 font-bold text-lg">$360+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Solution highlight */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-lg px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400 font-medium">BareUptime Pricing:</span>
                  <span className="text-white font-bold text-xl">$50/year</span>
                </div>
                <div className="w-px h-6 bg-white/20"></div>
                <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">98% savings</span>
              </div>
            </div>
          </div>

          
          {/* Comparison Chart Section */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-500/20 shadow-lg">
                <Server className="w-4 h-4" />
                Head-to-Head Comparison
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">BareUptime</span> vs{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">UptimeRobot</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                See how we compare to the most popular uptime monitoring service
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-lg"></div>
              <Card className="bg-black/70 backdrop-blur-sm border border-white/10 shadow-2xl rounded-xl overflow-hidden">
                <div className="h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-emerald-500 w-full"></div>
                
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10 bg-gradient-to-r from-blue-950/30 to-purple-950/30">
                          <th className="text-left py-6 px-6 text-slate-400 font-medium text-lg">Feature</th>
                          <th className="text-center py-6 px-6">
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-2 mb-2">
                                <ActivityIcon className="w-5 h-5 text-blue-400" />
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
                              </div>
                              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">Free Plan</Badge>
                            </div>
                          </th>
                          <th className="text-center py-6 px-6">
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-2 mb-2">
                                <ActivityIcon className="w-5 h-5 text-indigo-400" />
                                <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">BareUptime</span>
                              </div>
                              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs">Paid Plan</Badge>
                            </div>
                          </th>
                          <th className="text-center py-6 px-6">
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                <span className="text-lg font-bold text-green-400">UptimeRobot</span>
                              </div>
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">Free Plan</Badge>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-slate-300">
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Globe className="w-4 h-4 text-blue-400 mr-3" />
                            Free Plan Monitors
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400 text-lg">10</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400 text-lg">50 </span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                              <span className="font-mono text-white">30 </span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Globe className="w-4 h-4 text-blue-400 mr-3" />
                            Request Type
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-4 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400 text-lg">HEAD, GET, PING</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-4 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400 text-lg">POST, PUT, DELETE</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                              <span className="font-mono text-yellow-400">Head</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Globe className="w-4 h-4 text-blue-400 mr-3" />
                            Frequency 
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400 text-lg">10min, 30min, 1hr</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400 text-lg">1min, 5min</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                              <span className="font-mono text-white">5min, 10min, 15min</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-blue-500/5">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                            SSL Monitor
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">Free</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">Free</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                                <span className="text-red-400">Not available(Free)</span>
                            </div>
                          </td>
                        </tr>

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-blue-500/5">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                            Global Monitoring Network (Free)
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">Germany, USA</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">Canada, India</span>
                            </div>
                            <div className="flex items-center justify-center">
                              {/* <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" /> */}
                              <span className="font-bold text-indigo-400">Australia</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                              <span className="font-bold text-yellow-400">USA</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-blue-500/5">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                            OnCall Alerts (iOS/Android)
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">Free</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">Free</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">Free</span>
                            </div>
                          </td>
                        </tr>

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Server className="w-4 h-4 text-blue-400 mr-3" />
                            Free Notification Channels
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex flex-col items-center gap-3">
                              <div className="flex flex-wrap justify-center gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs font-medium border border-emerald-500/30">
                                  <AndroidIcon className="w-3.5 h-3.5" />
                                  <span>Android</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg text-xs font-medium border border-emerald-500/30">
                                  <IOSIcon className="w-3.5 h-3.5" />
                                  <span>iOS</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-500/20 text-slate-300 rounded-lg text-xs font-medium border border-slate-500/30">
                                  <Globe className="w-3.5 h-3.5" />
                                  <span>Email</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap justify-center gap-2">
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-indigo-500/20 text-indigo-300 rounded-lg text-xs font-medium border border-indigo-500/30">
                                  <MessageSquare className="w-3.5 h-3.5" />
                                  <span>Slack</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-cyan-500/20 text-cyan-300 rounded-lg text-xs font-medium border border-cyan-500/30">
                                  <Send className="w-3.5 h-3.5" />
                                  <span>Telegram</span>
                                </div>
                                <div className="flex items-center gap-1.5 px-3 py-2 bg-orange-500/20 text-orange-300 rounded-lg text-xs font-medium border border-orange-500/30">
                                  <Webhook className="w-3.5 h-3.5" />
                                  <span>Webhook</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">Same as Free</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                                <span className="text-yellow-400">Email and Phone</span>
                              </div>
                            </div>
                          </td>
                        </tr>

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Code className="w-4 h-4 text-blue-400 mr-3" />
                            MCP Support
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">Yes</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">Yes</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <X className="w-5 h-5 text-red-400 mr-2" />
                              <span className="font-bold text-red-400">No</span>
                            </div>
                          </td>
                        </tr>

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Code className="w-4 h-4 text-blue-400 mr-3" />
                            Setup Complexity
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">10 seconds</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">10 seconds</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold ">30 seconds</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Code className="w-4 h-4 text-blue-400 mr-3" />
                            Support
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">6 x 7*</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">24 x 7*</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold">Basic Support</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Code className="w-4 h-4 text-blue-400 mr-3" />
                            Maintenance Downtime
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">99.9% SLA</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-indigo-400 mr-2" />
                              <span className="font-bold text-indigo-400">99.9% SLA</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-yellow-400 mr-2" />
                              <span className="font-bold text-yellow-400">99.6% SLA</span>
                            </div>
                          </td>
                        </tr>

                       
                       
                        <tr className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                          <td className="py-6 px-6 font-bold text-white text-lg flex items-center">
                            <DollarSign className="w-5 h-5 text-emerald-400 mr-3" />
                            Annual Pricing
                          </td>
                          <td className="py-6 px-6 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold text-emerald-400">$0 / Year</span>
                              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mt-2 text-xs">98% Savings</Badge>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-3xl font-bold text-indigo-400">$50 / Year</span>
                              <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mt-2 text-xs">Enterprise Features</Badge>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-2xl font-bold text-slate-300">$360+ / Year</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>


                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enterprise Grade */}
      <section id="features" className="py-32 relative bg-gradient-to-b from-black/0 via-blue-950/30 to-black/0 will-change-transform">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          {/* Header Section */}
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-blue-500/20 backdrop-blur-sm shadow-lg">
              <span className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></span>
              Enterprise Solutions for Early-Stage Startups
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              The Complete 
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mt-2">
                Monitoring Solution
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Enterprise-grade monitoring infrastructure engineered for startups who demand reliability without enterprise pricing
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Features Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-emerald-500/10 rounded-2xl overflow-hidden group-hover:border-emerald-500/30">
                <div className="h-1 bg-gradient-to-r from-emerald-500 to-green-500 w-full"></div>
                
                <CardHeader className="pb-6 pt-8 px-8">
                  <CardTitle className="text-white flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-500/20 border border-emerald-500/30 shadow-lg">
                      <CheckCircle className="w-7 h-7 text-emerald-400" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold">Core Features</span>
                      <p className="text-sm text-slate-400 font-normal mt-1">Production-ready monitoring</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-emerald-500/25 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium leading-relaxed">Real-time alerts via Slack, Discord, Teams, mobile push, and webhooks</p>
                      <p className="text-slate-500 text-sm mt-1">Instant notifications when it matters</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-emerald-500/25 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium leading-relaxed">Critical alerts through Android and iOS mobile apps</p>
                      <p className="text-slate-500 text-sm mt-1">Never miss a critical incident</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-emerald-500/25 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium leading-relaxed">Distributed global worker pools for consistent monitoring</p>
                      <p className="text-slate-500 text-sm mt-1">99.9% uptime monitoring reliability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-emerald-500/25 transition-colors">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-slate-200 font-medium leading-relaxed">Intuitive dashboard to manage all endpoints</p>
                      <p className="text-slate-500 text-sm mt-1">Centralized monitoring control</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Future Focus Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-15 blur-lg group-hover:opacity-25 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-white/10 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-amber-500/10 rounded-2xl overflow-hidden group-hover:border-amber-500/30">
                <div className="h-1 bg-gradient-to-r from-amber-400 to-yellow-500 w-full"></div>
                
                <CardHeader className="pb-6 pt-8 px-8">
                  <CardTitle className="text-white flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/20 border border-amber-500/30 shadow-lg">
                      <Clock className="w-7 h-7 text-amber-400" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold">Future Roadmap</span>
                      <p className="text-sm text-slate-400 font-normal mt-1">Not our current focus</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8 space-y-6">
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-amber-500/25 transition-colors">
                      <Clock className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium leading-relaxed">SMS and voice call notifications</p>
                      <p className="text-slate-500 text-sm mt-1">Expensive legacy channels</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-amber-500/25 transition-colors">
                      <Clock className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium leading-relaxed">Advanced analytics dashboards</p>
                      <p className="text-slate-500 text-sm mt-1">Complex visualizations</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group/item">
                    <div className="w-8 h-8 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center mt-1 flex-shrink-0 group-hover:item:bg-amber-500/25 transition-colors">
                      <Clock className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium leading-relaxed">Interactive Visualizations</p>
                      <p className="text-slate-500 text-sm mt-1">Resource-intensive features</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-amber-500/20">
                    <div className="flex items-center gap-3 text-amber-400">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm font-medium">Keeping costs low by focusing on essentials</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Card */}
            <div id="pricing" className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-25 blur-lg group-hover:opacity-40 transition-all duration-500"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-green-500/20 h-full shadow-2xl transition-all duration-500 hover:translate-y-[-8px] hover:shadow-green-500/20 rounded-2xl overflow-hidden group-hover:border-green-500/40">
                <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-500 w-full"></div>
                
                <CardHeader className="pb-6 pt-8 px-8">
                  <CardTitle className="text-white flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 shadow-lg">
                      <DollarSign className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                      <span className="text-2xl font-bold">Enterprise Pricing</span>
                      <p className="text-sm text-slate-400 font-normal mt-1">Startup-friendly costs</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="relative p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/30 text-center mb-8 backdrop-blur-sm">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Annual Subscription
                    </div>
                    
                    <div className="mt-4 mb-6">
                      <div className="flex items-center justify-center mb-3">
                        <DollarSign className="w-8 h-8 text-green-400 mr-1" />
                        <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">50</span>
                      </div>
                      <div className="text-2xl font-semibold text-slate-200 mb-3">per year</div>
                      <div className="flex items-center justify-center gap-3 text-sm">
                        <span className="line-through text-slate-500 text-lg">$360+/year</span> 
                        <div className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full font-bold border border-green-500/30">
                          98% Savings
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 text-white p-4 bg-blue-500/10 rounded-xl border border-blue-500/20">
                      <ActivityIcon className="w-6 h-6 text-blue-400" />
                      <span className="font-semibold">Enterprise-grade, Startup price!</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">No hidden fees</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-green-500/5 rounded-lg border border-green-500/20">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-slate-300">Cancel anytime</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/30 rounded-2xl px-8 py-6 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <ActivityIcon className="w-6 h-6 text-blue-400" />
                <span className="text-white font-semibold text-lg">Ready to get started?</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <a 
                href="https://app.bareuptime.co" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                Launch monitoring in 10 seconds →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/20 to-black/0"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
        
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/20 shadow-lg">
              <ActivityIcon className="w-4 h-4" />
              Teams
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Meet the <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Engineering Team</span></h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-5/12">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg rounded-2xl"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
                  <div className="p-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">SS</div>
                    <h3 className="text-2xl font-bold text-white mb-2">Suman Saurabh</h3>
                    <p className="text-blue-400 font-medium mb-5">Penify, Ex-Microsoft OpenAI</p>
                    
                    <div className="flex items-center gap-2 mb-6">
                      <a 
                        href="https://www.linkedin.com/in/ssumansaurabh/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                        </svg>
                      </a>
                      <a 
                        href="https://github.com/sumansaurabh" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                        aria-label="GitHub Profile"
                      >
                        <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 mt-8 mb-2">
                      <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                        <div className="text-2xl font-bold text-white">10+</div>
                        <div className="text-sm text-slate-400">Years Enterprise Experience</div>
                      </div>
                      <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                        <div className="text-2xl font-bold text-white">1</div>
                        <div className="text-sm text-slate-400">Weekend MVP Development</div>
                      </div>
                      <div className="text-center p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                        <div className="text-2xl font-bold text-white">95%</div>
                        <div className="text-sm text-slate-400">Industry Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-7/12 space-y-8">
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/20">
                    <Code className="w-5 h-5 text-purple-400" />
                  </div>
                  The Genesis of BareUptime
                </h3>
                <p className="text-slate-300">
                  After launching <a href="https://www.penify.dev/" target="_blank">Penify</a>, we encountered the same costly barrier to reliable monitoring that many organizations face. The market offered two choices: overpay for basic functionality or build a custom solution.
                </p>
                <p className="text-slate-300 mt-4">
                  So we engineered BareUptime — a robust, efficient monitoring system that delivers enterprise reliability without the enterprise markup. We're opening our architecture, costs, and deployment strategy to demonstrate how organizational monitoring should be priced.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-blue-950/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:30px_30px] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="md:w-3/5">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                  <ActivityIcon className="w-5 h-5 text-blue-400" />
                  Stay Updated
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Start</span> <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Monitoring</span> Today!
                </h2>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  BareUptime is live! Subscribe to our newsletter for product updates, monitoring tips, and exclusive insights.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>No Spam, Just Updates</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Monitoring Tips & Insights</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5">
                <Card className="bg-black/50 border-blue-500/20 shadow-xl overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Subscribe to Newsletter</h3>
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 transition-colors"
                          required
                        />
                        <Button
                          type="submit"
                          disabled={isSubmitting || !email}
                          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                        </Button>
                        {message && (
                          <div className={`text-center text-sm ${
                            messageType === "success" ? "text-green-400" : "text-red-400"
                          }`}>
                            {message}
                          </div>
                        )}
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <ActivityIcon className="w-6 h-6 text-blue-400 mr-2" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
              </div>
              <p className="text-slate-400 max-w-md text-center md:text-left">
                Enterprise-grade monitoring infrastructure at peanut price.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-white font-medium mb-3">Resources</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#features" className="text-slate-400 hover:text-blue-400 transition-colors">Features</a></li>
                  <li><a href="#pricing" className="text-slate-400 hover:text-blue-400 transition-colors">Pricing</a></li>
                  <li><a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors">About</a></li>
                  <li><a href="/support" className="text-slate-400 hover:text-blue-400 transition-colors">Support</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-medium mb-3">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a 
                      href="https://github.com/sumansaurabh/bareuptime" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.linkedin.com/in/ssumansaurabh/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z" />
                      </svg>
                      LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h4 className="text-white font-medium mb-3">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/privacy-policy" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy</a></li>
                  <li><a href="/terms-of-service" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 md:mb-0">
              &copy; Penify Technologies LLC. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built by enterprise engineers, for organizations tired of overpriced monitoring.
            </p>
          </div>
        </div>
      </footer>
    </main>
    
    {/* Structured Data for SEO */}
    <Script
      id="main-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
    
    <Script
      id="faq-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqStructuredData)
      }}
    />
    </>
  )
}
