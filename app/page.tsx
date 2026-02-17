"use client"

import type React from "react"
import Script from "next/script"
import dynamic from "next/dynamic"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Clock, Smartphone, MessageSquare, Webhook, Users, BookOpen, TrendingDown, Brain, Cloud, Shield, X, ArrowRight } from "lucide-react"
import { trackWithSource } from '@/components/google-analytics'
import FeaturesDropdown from '@/components/FeaturesDropdown'
import { IBM_Plex_Sans_Condensed, Inter } from 'next/font/google'
import helmetHeroImage from "@/5tGVFWl8O3rH6Ev7L5kvnAdFGSw.png"

const inter = Inter({ subsets: ['latin'] })
const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

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

// Custom Slack Icon
const SlackIcon = memo(({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zm1.271 0a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zm0 1.271a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zm10.122 2.521a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zm-1.268 0a2.528 2.528 0 0 1-2.521 2.521 2.528 2.528 0 0 1-2.522-2.521V2.522A2.528 2.528 0 0 1 15.167 0a2.528 2.528 0 0 1 2.521 2.522v6.312zm-2.521 10.122a2.528 2.528 0 0 1 2.521 2.522A2.528 2.528 0 0 1 15.167 24a2.528 2.528 0 0 1-2.522-2.522v-2.522h2.522zm0-1.268a2.528 2.528 0 0 1-2.521-2.521 2.528 2.528 0 0 1 2.521-2.522h6.313A2.528 2.528 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.521h-6.313z" fill="currentColor"/>
  </svg>
))
SlackIcon.displayName = 'SlackIcon'

// Custom Telegram Icon
const TelegramIcon = memo(({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
))
TelegramIcon.displayName = 'TelegramIcon'

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

const faqStructuredData = {
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
      // Set up TMS Chat configuration
      window.TMSChatConfig = {
        widgetId: 'e338f50a-1304-482d-ad13-80282f45280e',
        domain: 'bareuptime.co'
      };

      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/@taral/web-chat@latest/dist/chat-widget.js"
      script.async = true
      script.defer = true
      
      script.onerror = () => console.warn('Failed to load TMS chat script')
      document.head.appendChild(script)
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
        delete window.TMSChatConfig
      }
    }

    const timeoutId = setTimeout(loadTMSChat, 1000)
    return () => clearTimeout(timeoutId)
  }, [])

  const fetchRepoData = useCallback(async () => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 5000)
      
      const response = await fetch('https://api.github.com/repos/sumansaurabh/bareuptime', {
        signal: controller.signal,
        headers: { 'Accept': 'application/vnd.github.v3+json' }
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
      if (!parsed.protocol.startsWith("http")) throw new Error()
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: monitorUrl.trim() }),
      })
      const data = await response.json().catch(() => ({}))
      if (!response.ok || !data?.success) throw new Error(data?.error || "We could not create that monitor just yet.")
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
  }, [monitorUrl])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return
    setIsSubmitting(true)
    setMessage("")
    try {
      const response = await fetch('https://api.bareuptime.co/subscriber', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.message || `HTTP ${response.status}`)
      }
      const successData = await response.json()
      setIsSubmitted(true)
      setMessage(successData.message)
      setMessageType("success")
      setEmail("")
      trackWithSource.signUp('email', 'newsletter_signup')
    } catch (error: any) {
      console.error("Subscription failed:", error)
      setMessage("Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsSubmitting(false)
    }
  }, [email, isSubmitting])

  return (
    <>
    <main className={`min-h-screen bg-black text-slate-100 will-change-scroll ${inter.className}`} itemScope itemType="https://schema.org/WebPage">
      <header className="w-full py-3 px-4 bg-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <ActivityIcon className="text-[#975E08]" />
              <span className="text-lg font-bold text-[#975E08]">BareUptime</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8">
              <FeaturesDropdown />
              <a href="/enterprise" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Enterprise</a>
              <a href="https://docs.bareuptime.co" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Docs</a>
              <a href="/blogs" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Blogs</a>
              <button onClick={() => smoothScrollTo('about')} className="text-sm font-medium text-slate-300 hover:text-white transition-colors">About</button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sumansaurabh/bareuptime" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 py-1.5 px-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium text-white transition-all">
              <Globe className="w-4 h-4 text-[#975E08]" />
              <span>GitHub</span>
            </a>
            <a href="https://app.bareuptime.co" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium py-2 px-6 rounded-lg shadow-lg">Sign In</Button>
            </a>
          </div>
        </div>
      </header>
      
      {/* Hero */}
      <section className="relative isolate min-h-[calc(100svh-64px)] overflow-hidden bg-black">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={helmetHeroImage}
            alt="Helmeted person facing right"
            priority
            fill
            sizes="100vw"
            className="object-cover object-[36%_48%]"
          />
        </div>

        <div className="absolute inset-y-0 left-0 hidden w-[66%] md:block lg:w-[68%]">
          <Image
            src={helmetHeroImage}
            alt="Helmeted person facing right"
            priority
            fill
            sizes="(max-width: 1024px) 66vw, 68vw"
            className="object-cover object-[56%_48%]"
          />
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-[56%] hidden w-[44%] bg-gradient-to-r from-transparent to-black md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/40 to-black/85 md:from-black/10 md:via-black/15 md:to-black/55" />
        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-black via-black/95 to-transparent" />

        <div className="absolute inset-y-0 right-0 z-10 hidden w-[44%] items-center pr-8 md:flex lg:pr-10">
          <div className="w-full max-w-[560px] overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl backdrop-blur-sm">
            <MonitoringAnimation />
          </div>
        </div>

        <div className="relative z-20 flex min-h-[calc(100svh-64px)] flex-col justify-end px-6 pb-10 pt-20 sm:px-8 md:px-12 md:pb-14 lg:px-16">
          <div className="max-w-2xl space-y-6 md:w-[52%] md:max-w-[44rem]">

            <h1 className={`${ibmPlexSansCondensed.className} text-4xl font-semibold leading-tight tracking-tight text-[#AFAFAF] md:text-5xl lg:text-6xl`}>
              Ship uptime alerts before
              <br className="hidden md:block" /> Investors ask.
            </h1>

            <p className={`${ibmPlexSansCondensed.className} max-w-xl text-base text-[#AFAFAF] md:text-lg`}>
              Point BareUptime at your production URL and we handle the rest.
            </p>

            <form onSubmit={handleMonitorSubmit} className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row">
                <Input type="url" value={monitorUrl} onChange={(e) => setMonitorUrl(e.target.value)} placeholder="https://yourstartup.com" className="h-12 flex-1 border-white/20 bg-white/5 text-base text-white focus-visible:ring-white/70" />
                <Button type="submit" disabled={monitorStatus === "loading"} className="h-12 min-w-[160px] bg-[#AFAFAF] text-base font-semibold text-black hover:bg-[#9f9f9f]">
                  {monitorStatus === "loading" ? "Creating..." : "Start monitoring"}
                </Button>
              </div>
              {monitorMessage && <div className={`text-sm font-medium ${monitorStatus === "success" ? "text-emerald-300" : "text-red-300"}`}>{monitorMessage}</div>}
            </form>

            <div className="flex flex-col gap-3 text-sm text-[#AFAFAF] sm:flex-row sm:items-center sm:gap-5">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#AFAFAF]" /> One-minute global pings</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#AFAFAF]" /> On-call mobile apps included</div>
            </div>
          </div>

          <div className="mt-8 md:hidden">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 shadow-2xl">
              <MonitoringAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The Problem with <span className="text-[#975E08]">Current Solutions</span></h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-[#975E08] mb-4 flex items-center gap-2"><CheckCircle className="w-6 h-6" /> What You Actually Need</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#975E08] rounded-full" /> Uptime monitoring + SSL</li>
                  <li className="flex items-center gap-3"><div className="w-2 h-2 bg-[#975E08] rounded-full" /> Mobile Push Notifications</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {['Android', 'iOS', 'Discord', 'Slack', 'Telegram', 'Webhooks'].map(item => (
                    <div key={item} className="px-3 py-1 bg-white/10 text-slate-300 rounded-lg text-sm border border-white/15">{item}</div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-bold text-slate-400 mb-4 flex items-center gap-2"><AlertTriangle className="w-6 h-6" /> What Industry Delivers</h3>
                <div className="space-y-3">
                  <div className="flex justify-between p-2 bg-white/5 rounded border border-white/10 text-sm"><span>Mobile apps</span><span>$20/mo</span></div>
                  <div className="flex justify-between p-2 bg-white/5 rounded border border-white/10 text-sm"><span>API access</span><span>$10/mo</span></div>
                  <div className="pt-2 border-t border-white/10 flex justify-between font-bold"><span>Total yearly</span><span className="text-white">$360+</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/5 text-slate-300 px-4 py-2 rounded-full text-sm border border-white/10 shadow-lg mb-6">Head-to-Head Comparison</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4"><span className="text-[#975E08]">BareUptime</span> vs <span className="text-slate-500">UptimeRobot</span></h2>
            </div>
            <Card className="bg-black/70 border border-white/10 shadow-2xl rounded-xl overflow-hidden max-w-6xl mx-auto">
              <div className="h-1.5 bg-[#975E08] w-full" />
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/5 text-slate-400">
                    <tr>
                      <th className="py-6 px-6">Feature</th>
                      <th className="py-6 px-6 text-center text-primary">BareUptime (Free)</th>
                      <th className="py-6 px-6 text-center text-primary">BareUptime (Paid)</th>
                      <th className="py-6 px-6 text-center">UptimeRobot</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-5 px-6">Monitors</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">10</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">50</td>
                      <td className="py-5 px-6 text-center">30</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-5 px-6">Frequency</td>
                      <td className="py-5 px-6 text-center text-[#975E08]">10min+</td>
                      <td className="py-5 px-6 text-center text-[#975E08]">1min+</td>
                      <td className="py-5 px-6 text-center">5min+</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="py-5 px-6 font-bold">SSL Monitor</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">Free</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">Free</td>
                      <td className="py-5 px-6 text-center text-slate-500">Paid only</td>
                    </tr>
                    <tr className="border-b border-[#975E08]/30 bg-[#975E08]/10 relative">
                      <td className="py-5 px-6 font-bold">
                        <Link href="/blogs/ai-monitors-guide" className="inline-flex items-center gap-2 text-[#975E08] underline underline-offset-2">
                          AI Monitors
                          <span className="text-xs bg-[#975E08] text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">New</span>
                        </Link>
                      </td>
                      <td className="py-5 px-6 text-center text-slate-500">—</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold text-lg">✓</td>
                      <td className="py-5 px-6 text-center text-red-400 font-bold">✗</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="py-5 px-6 font-bold">Blacklist Monitoring</td>
                      <td className="py-5 px-6 text-center text-slate-500">—</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">✓</td>
                      <td className="py-5 px-6 text-center text-slate-500">✗</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-5 px-6 font-bold">Email Monitoring (SPF, DKIM, DMARC)</td>
                      <td className="py-5 px-6 text-center text-slate-500">—</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">✓</td>
                      <td className="py-5 px-6 text-center text-slate-500">✗</td>
                    </tr>
                    <tr className="border-b border-white/5 bg-white/5">
                      <td className="py-5 px-6 font-bold">Domain Expiry Monitoring</td>
                      <td className="py-5 px-6 text-center text-slate-500">✓</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">✓</td>
                      <td className="py-5 px-6 text-center text-slate-500">Paid only</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-5 px-6 font-bold">REST API (GET, POST, PUT, DELETE)</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">✓</td>
                      <td className="py-5 px-6 text-center text-[#975E08] font-bold">✓</td>
                      <td className="py-5 px-6 text-center text-slate-500">Paid only</td>
                    </tr>
                    <tr className="bg-white/10 font-bold">
                      <td className="py-6 px-6 text-white">Annual Pricing</td>
                      <td className="py-6 px-6 text-center text-[#975E08] text-2xl">$0</td>
                      <td className="py-6 px-6 text-center text-[#975E08] text-2xl">$60</td>
                      <td className="py-6 px-6 text-center">$180+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-white/5 text-slate-300 px-4 py-2 rounded-full text-sm border border-white/10 mb-4">
              <BookOpen className="w-4 h-4 text-[#975E08]" />
              From the Blog
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Pricing That Beats <span className="text-[#975E08]">UptimeRobot</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 border border-[#975E08]/30 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-1.5 bg-[#975E08] w-full" />
              <CardContent className="p-7">
                <Badge className="bg-[#975E08]/20 text-[#975E08] border-[#975E08]/30 mb-4">New Pricing Blog</Badge>
                <h3 className="text-2xl font-bold text-white mb-3">All UptimeRobot Features + AI Monitors</h3>
                <p className="text-slate-300 mb-6">
                  Explore Free, Solo, Team, and Enterprise plans with aggressive pricing designed to beat UptimeRobot on value.
                </p>
                <Link href="/blogs/bareuptime-pricing-vs-uptimerobot-2026">
                  <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white">
                    Read Pricing Breakdown
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-1.5 bg-white/20 w-full" />
              <CardContent className="p-7">
                <Badge className="bg-white/10 text-slate-300 border-white/20 mb-4">Product Guide</Badge>
                <h3 className="text-2xl font-bold text-white mb-3">AI Monitors: Prompt-Driven Checks</h3>
                <p className="text-slate-300 mb-6">
                  See how AI monitors run full browser workflows so you catch user-facing failures before customers report them.
                </p>
                <Link href="/blogs/ai-monitors-guide">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Read AI Monitors Guide
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      {/* <section id="about" className="py-28 relative">
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Meet the <span className="text-[#975E08]">Engineering Team</span></h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-5/12">
              <Card className="bg-black/40 border border-white/10 rounded-xl overflow-hidden shadow-2xl p-8">
                <div className="w-20 h-20 bg-[#975E08] rounded-full mb-6 flex items-center justify-center text-white text-2xl font-bold">SS</div>
                <h3 className="text-2xl font-bold text-white mb-2">Sunil Agrwal</h3>
                <p className="text-[#975E08] font-medium mb-5">Bareuptime, Ex-InMobi</p>
                <div className="grid grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="font-bold text-white">10+</div>
                    <div className="text-[10px] text-slate-400">Years Exp</div>
                  </div>
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="font-bold text-white">1</div>
                    <div className="text-[10px] text-slate-400">Weekend MVP</div>
                  </div>
                  <div className="text-center p-2 bg-white/5 rounded">
                    <div className="font-bold text-white">99.9%</div>
                    <div className="text-[10px] text-slate-400">Uptime</div>
                  </div>
                </div>
              </Card>
            </div>
            <div className="md:w-7/12 bg-black/40 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3"><Code className="text-[#975E08]" /> The Genesis</h3>
              <p className="text-slate-300">After launching Penify, we needed reliable monitoring. The market offered complex enterprise tools or DIY. We built BareUptime to deliver enterprise reliability without the overhead.</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="py-28 relative">
        <div className="max-w-5xl mx-auto px-4 relative bg-white/5 border border-white/10 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter for product updates and monitoring insights.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-4">
            <Input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-white/10 border-white/20 text-white focus:border-[#975E08]" required />
            <Button type="submit" disabled={isSubmitting || !email} className="bg-[#975E08] hover:bg-[#975E08]/90 text-white py-3">
              {isSubmitting ? "Subscribing..." : "Subscribe Now"}
            </Button>
            {message && <div className={`text-sm ${messageType === "success" ? "text-[#975E08]" : "text-red-400"}`}>{message}</div>}
          </form>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10 bg-black/40 text-center">
        <div className="flex items-center justify-center mb-4 gap-2">
          <ActivityIcon className="text-[#975E08]" />
          <span className="text-xl font-bold text-[#975E08]">BareUptime</span>
        </div>
        <p className="text-slate-500 text-sm">© 2026 Bareuptime Associates and Co. Built for reliable organizations.</p>
        <div className="flex justify-center gap-6 mt-6 text-sm text-slate-400">
          <a href="/privacy-policy" className="hover:text-[#975E08]">Privacy</a>
          <a href="/terms-of-service" className="hover:text-[#975E08]">Terms</a>
        </div>
      </footer>
    </main>
    </>
  )
}
