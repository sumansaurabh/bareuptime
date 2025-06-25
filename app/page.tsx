"use client"

import type React from "react"
import Script from "next/script"
import dynamic from "next/dynamic"

import { useState, useEffect, useCallback, useMemo, memo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Clock } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'
import { useIntersectionObserver } from '@/hooks/usePerformance'
import AnimateOnScroll from './components/AnimateOnScroll'

// Lazy load heavy components for better performance
const DashboardMockup = dynamic(() => import('./components/DashboardMockup'), {
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

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [repoData, setRepoData] = useState<{ watchers: number, forks: number } | null>(null)
  const [isLoadingRepoData, setIsLoadingRepoData] = useState(true)

  // Optimized script loading with error handling
  useEffect(() => {
    if (typeof window === 'undefined') return

    const loadScript = () => {
      const script = document.createElement("script")
      script.src = "https://embed.tawk.to/685acae35dc248190eead5f8/1iuhah2s1"
      script.async = true
      script.charset = "UTF-8"
      script.setAttribute("crossorigin", "*")
      script.defer = true // Use defer for better performance
      
      // Add error handling
      script.onerror = () => console.warn('Failed to load chat script')
      
      document.body.appendChild(script)
      
      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      }
    }

    // Defer script loading to avoid blocking
    const timeoutId = setTimeout(loadScript, 1000)
    
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

  // Memoized form submission handler
  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    setMessage("")
    
    try {
      const { error } = await supabase
        .from('bareuptime_newsletter')
        .insert([{ email }])

      if (error) throw error

      setIsSubmitted(true)
      setMessage("Thank you for subscribing!")
      setMessageType("success")
      setEmail("")
    } catch (error: any) {
      console.error("Subscription failed:", error)
      if (error.message?.includes("duplicate key value violates unique constraint")) {
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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950 will-change-scroll">
      {/* Launch Banner - Optimized */}
      <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 py-2 px-4 text-center relative overflow-hidden will-change-transform">
        <div className="relative flex items-center justify-center gap-2 text-white font-medium">
          <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
          <span className="text-sm">🎉 BareUptime is now LIVE! Start monitoring your services today.</span>
          <div className="w-2 h-2 bg-white rounded-full opacity-80"></div>
        </div>
      </div>
      
      {/* Enterprise Navigation Bar - Optimized */}
      <header className="w-full py-3 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 shadow-lg will-change-transform">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <ActivityIcon className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
            </div>
            <nav className="hidden md:flex items-center gap-6 ml-8" role="navigation">
              <button 
                onClick={() => smoothScrollTo('features')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                aria-label="Navigate to Features section"
              >
                Features
              </button>
              <button 
                onClick={() => smoothScrollTo('pricing')} 
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                aria-label="Navigate to Pricing section"
              >
                Pricing
              </button>
              <button 
                onClick={() => smoothScrollTo('about')} 
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
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://app.bareuptime.co" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Sign in to BareUptime"
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
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-500/20 shadow-lg shadow-green-500/5">
                <CheckCircle className="w-4 h-4" />
                <span className="font-semibold">Now Live & Monitoring</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Startup-Grade
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mt-1">
                  Uptime Monitoring
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-light">
                Why Uptime Monitors are  <span className="text-red-400 font-bold">ridiculously priced</span> for basic uptime features that should be affordable to everyone?
              </p>
              
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1.5 rounded-md text-sm">
                  <CheckCircle className="w-4 h-4" />
                  <span>Practically free</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1.5 rounded-md text-sm">
                  <Server className="w-4 h-4" />
                  <span>Startup Focussed</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a 
                  href="https://app.bareuptime.co" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-3 px-8 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 text-lg">
                    Start Monitoring Now
                  </Button>
                </a>
                <a 
                  href="https://api.bareuptime.co/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 hover:border-white/30 font-medium py-3 px-8 rounded-lg transition-all duration-200 text-lg">
                    View Demo
                  </Button>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <DashboardMockup />
              
              {/* Background decorations - Optimized */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl will-change-transform"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl will-change-transform"></div>
            </div>
          </div>

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
                    <span className="text-slate-300">Basic uptime monitoring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Mobile notifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-slate-300">Webhook integrations</span>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-3">
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">Android</span>
                    <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">iOS</span>
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Discord</span>
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">Slack</span>
                    <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded text-xs">Telegram</span>
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
                  <span className="text-white font-bold text-xl">$8/year</span>
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
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
                              </div>
                              <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">Our Solution</Badge>
                            </div>
                          </th>
                          <th className="text-center py-6 px-6">
                            <div className="flex flex-col items-center">
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 bg-green-500 rounded-full"></div>
                                <span className="text-xl font-bold text-green-400">UptimeRobot</span>
                              </div>
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs">Popular Choice</Badge>
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
                              <span className="font-bold text-emerald-400 text-lg">50 Monitors</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                              <span className="font-mono text-white">30 monitors</span>
                            </div>
                          </td>
                        </tr>
                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Globe className="w-4 h-4 text-blue-400 mr-3" />
                            Frequency (Free Plan)
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400 text-lg">10min, 20min, 30min, 1hr</span>
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
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex flex-wrap justify-center gap-1">
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs px-2 py-1">Android</Badge>
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs px-2 py-1">iOS</Badge>
                                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs px-2 py-1">Telegram</Badge>
                              </div>
                              <div className="flex flex-wrap justify-center gap-1">
                                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 text-xs px-2 py-1">Slack</Badge>
                                <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 text-xs px-2 py-1">Email</Badge>
                                <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs px-2 py-1">Webhook</Badge>
                              </div>
                              
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex flex-col items-center gap-2">
                              <div className="flex items-center justify-center">
                                <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                                <span className="text-green-400">Live chat & email</span>
                              </div>
                              <span className="text-slate-400 text-sm">Limited channels</span>
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
                              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
                                <span className="text-red-400">Not available</span>
                              
                            </div>
                            <span className="text-slate-400 text-sm">In Free Plan</span>
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
                              <span className="font-bold text-emerald-400">24 x 7*</span>
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
                              <span className="font-bold text-emerald-400">99.8% SLA</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold">99.1% SLA</span>
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
                              <span className="text-3xl font-bold text-emerald-400">$8 / Year</span>
                              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30 mt-2 text-xs">95% Savings</Badge>
                            </div>
                          </td>
                          <td className="py-6 px-6 text-center">
                            <div className="flex flex-col items-center">
                              <span className="text-2xl font-bold text-slate-300">$180+ / Year</span>
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

      {/* Features Section - Optimized */}
      <section id="features" className="py-24 relative bg-gradient-to-b from-black/0 via-blue-950/30 to-black/0 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full opacity-80"></span>
              For the early stage Startups
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Startup <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Solution</span></h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              A hosted monitoring system engineered for early-startup needs at a cheap price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <Card className="bg-black/50 backdrop-blur-sm border-white/10 h-full shadow-xl transition-all duration-200 hover:translate-y-[-2px] rounded-xl overflow-hidden will-change-transform">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xl">Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">{/* ...existing code... */}
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300">Real-time alerts via Slack, Discord, Teams, mobile push, and webhooks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300">Critical alerts through Android and IOs App</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300">Distributed global worker pools for consistent monitoring</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-slate-300">Basic dashboard to manage all endpoints</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-300"></div>
              <Card className="bg-black/50 backdrop-blur-sm border-white/10 h-full shadow-xl transition-all duration-300 group-hover:translate-y-[-5px] rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-yellow-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-amber-500/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-xl">Will not be focussing on</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="text-slate-300">SMS and call notifications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="text-slate-300">Advanced analytics dashboards</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                    </div>
                    <p className="text-slate-300">Interactive visualization with real-time data</p>
                  </div>
                  
                </CardContent>
              </Card>
            </div>

            <div id="pricing" className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl opacity-30 blur group-hover:opacity-40 transition duration-300"></div>
              <Card className="bg-black/50 backdrop-blur-sm border-white/10 h-full shadow-xl transition-all duration-300 group-hover:translate-y-[-5px] rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-green-400 to-emerald-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-green-500/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <span className="text-xl">Startup Pricing Focussed</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative p-6 bg-green-500/10 rounded-xl border border-green-500/20 text-center mb-4">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">Annual Subscription</div>
                    <div className="text-5xl font-bold text-white mb-2 mt-3 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">8</span>
                    </div>
                    <div className="text-xl font-medium text-slate-300 mb-2">per year</div>
                    <div className="text-sm text-slate-400 flex items-center justify-center">
                      <span className="line-through mr-2">$180+/year</span> 
                      <span className="text-green-400 font-semibold">95% Savings</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-white mt-6">
                    <ActivityIcon className="w-5 h-5 text-blue-400" />
                    <span>Enterprise-grade, Peanuts price!</span>
                  </div>
                </CardContent>
              </Card>
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
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              I am the only one working on BareUptime.
            </p>
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
                    <p className="text-blue-400 font-medium mb-5">Senior Software Engineer at Microsoft OpenAI</p>
                    
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
    </div>
    </>
  )
}
