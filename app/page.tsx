"use client"

import type React from "react"
import Script from "next/script"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Clock } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'

// Custom Activity Icon to replace Shield
const ActivityIcon = ({ className }: { className?: string }) => (
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
)

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [repoData, setRepoData] = useState<{ watchers: number, forks: number } | null>(null)
  const [isLoadingRepoData, setIsLoadingRepoData] = useState(true)

  useEffect(() => {
  if (typeof window === 'undefined') return;

  const script = document.createElement("script");
  script.src = "https://embed.tawk.to/685acae35dc248190eead5f8/1iuhah2s1";
  script.async = true;
  script.charset = "UTF-8";
  script.setAttribute("crossorigin", "*");

  document.body.appendChild(script);
}, []);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/sumansaurabh/bareuptime');
        if (response.ok) {
          const data = await response.json();
          setRepoData({
            watchers: data.subscribers_count || data.watchers_count,
            forks: data.forks_count
          });
        }
      } catch (error) {
        console.error("Failed to fetch repository data:", error);
      } finally {
        setIsLoadingRepoData(false);
      }
    };
    
    fetchRepoData();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    setMessage("")
    
    try {
      const { error } = await supabase
        .from('bareuptime_newsletter')  // Update the table name to match your Supabase table
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
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      {/* Launch Banner */}
      <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 py-2 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzIiBjeT0iMyIgcj0iMyIvPjxjaXJjbGUgY3g9IjEzIiBjeT0iMTMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==')] bg-[size:20px_20px] opacity-20"></div>
        <div className="relative flex items-center justify-center gap-2 text-white font-medium">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-sm">🎉 BareUptime is now LIVE! Start monitoring your services today.</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      
      {/* Enterprise Navigation Bar */}
      <header className="w-full py-3 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <ActivityIcon className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
            </div>
            <div className="hidden md:flex items-center gap-6 ml-8">
              <a onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">Features</a>
              <a onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">Pricing</a>
              <a onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/sumansaurabh/bareuptime" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 py-1.5 px-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium text-white transition-all"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://app.bareuptime.co" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-6 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200">
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
              </div>
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl p-1">
                <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-white/10 shadow-2xl overflow-hidden">
                  {/* Browser-style header */}
                  <div className="flex items-center justify-between p-4 bg-black/30 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400 bg-white/5 px-2 py-1 rounded">Dashboard Preview</div>
                  </div>

                  {/* Dashboard Header */}
                  <div className="p-4 bg-gradient-to-r from-blue-950/50 to-indigo-950/50 border-b border-white/5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                          <ActivityIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">BareUptime</div>
                          <div className="text-xs text-slate-400">Monitoring Dashboard</div>
                        </div>
                      </div>
                      
                    </div>
                  </div>

                  {/* Stats Overview */}
                  <div className="p-4 border-b border-white/5">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-green-400">12</div>
                        <div className="text-xs text-green-300/80">Online</div>
                      </div>
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-red-400">1</div>
                        <div className="text-xs text-red-300/80">Down</div>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-2 text-center">
                        <div className="text-lg font-bold text-blue-400">99.2%</div>
                        <div className="text-xs text-blue-300/80">Uptime</div>
                      </div>
                    </div>
                  </div>

                  {/* Service List */}
                  <div className="p-4 space-y-2">
                    <div className="text-xs font-medium text-slate-400 mb-3">Your Services</div>
                    
                    {/* Service Item 1 */}
                    <div className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-300 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">api.example.com</div>
                          <div className="text-xs text-slate-400">Last checked 30s ago</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-green-400 font-medium">200ms</div>
                        <div className="text-xs text-green-400 font-bold">99.9%</div>
                      </div>
                    </div>

                    {/* Service Item 2 */}
                    <div className="flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-green-500"></div>
                          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-green-300 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">app.example.com</div>
                          <div className="text-xs text-slate-400">Last checked 45s ago</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-green-400 font-medium">150ms</div>
                        <div className="text-xs text-green-400 font-bold">100%</div>
                      </div>
                    </div>

                    {/* Service Item 3 - Error State */}
                    <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse"></div>
                          <div className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-300 rounded-full"></div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">db.example.com</div>
                          <div className="text-xs text-red-400">Down for 2m 15s</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xs text-red-400 font-medium">Timeout</div>
                        <div className="text-xs text-red-400 font-bold">98.1%</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="p-4 bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <div className="text-xs text-green-400 font-semibold">50 Monitors are Free</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-1 h-2 bg-blue-400/60 rounded-full"></div>
                        <div className="w-1 h-4 bg-blue-400 rounded-full"></div>
                        <div className="w-1 h-2 bg-blue-400/60 rounded-full"></div>
                        <div className="w-1 h-3 bg-blue-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorations */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
              
              
            </div>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600 rounded-xl opacity-20 blur-sm group-hover:opacity-40 transition duration-500"></div>
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 relative shadow-2xl group-hover:shadow-emerald-500/20 transition-all duration-500 h-full rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-500 to-indigo-600"></div>
                
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-white flex items-center gap-4 mb-2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl blur opacity-75"></div>
                      <div className="relative p-3 rounded-xl bg-gradient-to-br from-emerald-500/30 to-blue-500/30 flex items-center justify-center border border-white/20">
                        <CheckCircle className="w-6 h-6 text-emerald-300" />
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">What You Actually Need</span>
                      <p className="text-sm text-slate-400 font-normal mt-1">The essentials for uptime monitoring</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="space-y-6">
                    <div className="relative group/item">
                      <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition duration-300"></div>
                      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/30 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
                            <span className="text-white font-bold text-lg">1</span>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg">Status Monitoring</h3>
                          <p className="text-slate-300 leading-relaxed">Simple confirmation that your website or service is operational</p>

                        </div>
                      </div>
                    </div>

                    <div className="relative group/item">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition duration-300"></div>
                      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/30 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                            <span className="text-white font-bold text-lg">2</span>
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg">Instant Notifications</h3>
                          <p className="text-slate-300 leading-relaxed mb-3">Immediate alerts when issues arise through </p>
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">Android</span>
                            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">iOS</span>
                            <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30">Discord</span>
                            <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-xs font-medium border border-indigo-500/30">Slack</span>
                            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30">Email</span>
                            <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-medium border border-orange-500/30">Webhook</span>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition duration-500"></div>
              <Card className="bg-black/40 backdrop-blur-sm border border-red-500/20 relative shadow-xl group-hover:shadow-red-500/10 transition duration-500 h-full rounded-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 to-orange-500"></div>
                
                <CardHeader className="pb-6 pt-8">
                  <CardTitle className="text-white flex items-center gap-4 mb-2">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl blur opacity-75"></div>
                      <div className="relative p-3 rounded-xl bg-gradient-to-br from-red-500/30 to-orange-500/30 flex items-center justify-center border border-white/20">
                        <AlertTriangle className="w-6 h-6 text-red-300" />
                      </div>
                    </div>
                    <div>
                      <span className="text-2xl font-bold bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">What The Industry Delivers</span>
                      <p className="text-sm text-slate-400 font-normal mt-1">The painful reality of uptime monitoring tools</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="space-y-6">
                    <div className="relative group/item">
                      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition duration-300"></div>
                      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-red-400/30 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/25">
                            <DollarSign className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg">Essential Features Paywalled</h3>
                          <p className="text-slate-300 leading-relaxed mb-3">Basic monitoring features locked behind expensive subscription</p>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-slate-300">API & webhooks</span>
                              <span className="text-red-400 font-bold">$10/mo</span>
                            </div>
                            <div className="flex items-center justify-between p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                              <span className="text-slate-300">Android/iOS notifications</span>
                              <span className="text-red-400 font-bold">$20/mo</span>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative group/item">
                      <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition duration-300"></div>
                      <div className="relative flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-400/30 transition-all duration-300">
                        <div className="relative flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                            <AlertTriangle className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-white mb-2 text-lg">Absurd Markup</h3>
                          <p className="text-slate-300 leading-relaxed mb-3">Features costing pennies to operate marked up by thousands</p>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-blue-500/5">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <CheckCircle className="w-4 h-4 text-emerald-400 mr-3" />
                            Mobile Apps (iOS/Android)
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

                        <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="py-5 px-6 font-medium flex items-center">
                            <Code className="w-4 h-4 text-blue-400 mr-3" />
                            Setup Complexity
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">30 seconds</span>
                            </div>
                          </td>
                          <td className="py-5 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <CheckCircle className="w-5 h-5 text-emerald-400 mr-2" />
                              <span className="font-bold text-emerald-400">30 seconds</span>
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
                              <span className="text-2xl font-bold text-slate-300">$120+ / Year</span>
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

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-gradient-to-b from-black/0 via-blue-950/30 to-black/0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:40px_40px] opacity-10 backdrop-blur-sm" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              For the early stage Startups
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">The Startup <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Solution</span></h2>
            <p className="text-xl text-slate-300 leading-relaxed">
              A hosted monitoring system engineered for early-startup needs at a cheap price.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-300"></div>
              <Card className="bg-black/50 backdrop-blur-sm border-white/10 h-full shadow-xl transition-all duration-300 group-hover:translate-y-[-5px] rounded-xl overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-500 to-green-500 w-full"></div>
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-xl">Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-5">
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

            <div className="group relative">
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
                      <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">6</span>
                    </div>
                    <div className="text-xl font-medium text-slate-300 mb-2">per year</div>
                    <div className="text-sm text-slate-400 flex items-center justify-center">
                      <span className="line-through mr-2">$120+/year</span> 
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
                    <form>
                      <div className="space-y-4">
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
                <ActivityIcon className="w-5 h-5 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
              </div>
              <p className="text-slate-400 max-w-md text-center md:text-left">
                Enterprise-grade monitoring infrastructure at peanut price.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}
