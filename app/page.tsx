"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Shield, Clock } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'

export default function HomePage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")
  const [repoData, setRepoData] = useState<{ watchers: number, forks: number } | null>(null)
  const [isLoadingRepoData, setIsLoadingRepoData] = useState(true)

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
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      {/* Enterprise Navigation Bar */}
      <header className="w-full py-3 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
            </div>
            <div className="hidden md:flex items-center gap-6 ml-8">
              <a onClick={() => document.getElementById('features')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">Features</a>
              <a onClick={() => document.getElementById('pricing')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">Pricing</a>
              <a onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})} className="text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {!isLoadingRepoData && repoData && (
              <div className="hidden md:flex items-center gap-4 mr-2">
                <div className="flex items-center gap-1 text-xs text-slate-400 bg-white/5 py-1 px-2 rounded-full">
                  <Code className="w-3 h-3" />
                  <span>{repoData.forks} fork{repoData.forks !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 bg-white/5 py-1 px-2 rounded-full">
                  <Shield className="w-3 h-3" />
                  <span>{repoData.watchers} watcher{repoData.watchers !== 1 ? 's' : ''}</span>
                </div>
              </div>
            )}
            <a 
              href="https://github.com/sumansaurabh/bareuptime" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-1 py-1.5 px-3 bg-white/10 hover:bg-white/15 rounded-lg text-sm font-medium text-white transition-all"
            >
              <Globe className="w-4 h-4 text-blue-400" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:60px_60px] opacity-20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
            <div className="md:w-1/2 text-left">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/20 shadow-lg shadow-red-500/5">
                <AlertTriangle className="w-4 h-4" />
                <span className="font-semibold">Startup Problem Alert</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Startup-Grade
                <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mt-1">
                  Uptime Monitoring
                </span>
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed font-light">
                Why Uptime Monitors are ridiculously priced <span className="text-red-400 font-bold">$120+/year</span> for basic uptime features that should be affordable to everyone?
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
            </div>
            
            <div className="md:w-1/2 relative">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-2xl p-1">
                <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-400">Dashboard Preview</div>
                  </div>
                  <div className="space-y-4">
                    <div className="h-2.5 w-full bg-white/5 rounded-full"></div>
                    <div className="h-2.5 w-11/12 bg-white/5 rounded-full"></div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex-shrink-0"></div>
                      <div className="h-2.5 w-3/4 bg-white/5 rounded-full"></div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full bg-red-500/20 flex-shrink-0"></div>
                      <div className="h-2.5 w-1/2 bg-white/5 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-30 blur-sm group-hover:opacity-100 transition duration-500"></div>
              <Card className="bg-white/5 backdrop-blur-sm border border-white/10 relative shadow-xl group-hover:shadow-blue-500/10 transition duration-500 h-full rounded-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/20 flex items-center justify-center">
                      <Code className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-xl">What You Actually Need</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-6 text-slate-300">
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-lg mt-0.5">
                        1
                      </span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Status Monitoring</h3>
                        <p className="text-slate-300">Simple confirmation that your website or service is operational</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-lg mt-0.5">
                        2
                      </span>
                      <div>
                        <h3 className="font-semibold text-white mb-1">Instant Notifications</h3>
                        <p className="text-slate-300">Immediate alerts via <span className="text-emerald-400 font-medium">Android, iOS, Discord, Slack, or Email and Webhook</span> when issues arise</p>
                      </div>
                    </li>
                  </ol>
                  <div className="mt-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20 text-center">
                    <p className="text-lg font-semibold text-white">That's all you need.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl opacity-20 blur-sm group-hover:opacity-30 transition duration-500"></div>
              <Card className="bg-black/40 backdrop-blur-sm border border-red-500/20 relative shadow-xl group-hover:shadow-red-500/10 transition duration-500 h-full rounded-xl">
                <CardHeader className="pb-4">
                  <CardTitle className="text-white flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-red-400" />
                    </div>
                    <span className="text-xl">What The Industry Delivers</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-5 text-slate-300">
                    <p className="text-lg">Most tools gate essential features behind expensive paywalls:</p>
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg">
                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                        <span>Critical push notifications? <span className="text-white font-semibold">$10/mo</span> <span className="text-red-400 font-medium">Premium tier</span></span>
                      </li>
                      <li className="flex items-center gap-3 p-3 bg-red-500/10 rounded-lg">
                        <span className="w-3 h-3 bg-red-400 rounded-full"></span>
                        <span>API & webhook integration? <span className="text-white font-semibold">$20/mo</span> <span className="text-red-400 font-medium">Business tier</span></span>
                      </li>
                    </ul>
                    <div className="p-4 border border-red-500/20 rounded-lg mt-4 bg-white/5">
                      <p className="text-center">For features that costs pennies to operate, the industry markup is <span className="text-red-400 font-semibold">absurd</span>.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative bg-gradient-to-b from-black/0 via-blue-950/30 to-black/0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:40px_40px] opacity-10 backdrop-blur-sm" />
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
                    <Shield className="w-4 h-4 text-green-400" />
                    <span>Enterprise-grade, Peanuts price!</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section id="pricing" className="py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-indigo-950/20 to-blue-950/20"></div>
        <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="mb-20 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-500/20 shadow-lg">
              <DollarSign className="w-4 h-4" />
              Transparency
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"> <span className="bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent">Infrastructure</span> Breakdown</h2>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed">
              Let's see what it takes to run BareUptime at an enterprise level, serving 1K+ users with a focus on cost efficiency and reliability.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl opacity-20 blur-lg"></div>
            <Card className="bg-black/70 backdrop-blur-sm border border-white/10 shadow-2xl max-w-5xl mx-auto rounded-xl overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-300 w-full"></div>
              <CardContent className="p-0">
                <div className="p-8 border-b border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Infrastructure Cost Analysis</h3>
                    <p className="text-slate-300">System serving 10,000+ users</p>
                  </div>
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1.5 text-sm">Production Ready</Badge>
                </div>
                <div className="overflow-x-auto p-6">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-4 px-4 text-blue-400 font-semibold"> Component</th>
                        <th className="text-left py-4 px-4 text-blue-400 font-semibold">Specifications</th>
                        <th className="text-right py-4 px-4 text-blue-400 font-semibold">Monthly Investment</th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium">API + Configuration Database</td>
                        <td className="py-4 px-4 flex items-center">
                          <Server className="w-4 h-4 text-blue-400 mr-2" />
                          <span>2 vCPU, 4 GB RAM (Hetzner Cloud)</span>
                        </td>
                        <td className="py-4 px-4 text-right font-mono text-white">$5.00</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium">Redis + Message Queue</td>
                        <td className="py-4 px-4 flex items-center">
                          <Server className="w-4 h-4 text-blue-400 mr-2" />
                          <span>2 vCPU, 4 GB RAM (Hetzner Cloud)</span>
                        </td>
                        <td className="py-4 px-4 text-right font-mono text-white">$5.00</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors bg-indigo-500/5">
                        <td className="py-4 px-4 font-medium">Global Worker Distribution</td>
                        <td className="py-4 px-4 flex items-center">
                          <Globe className="w-4 h-4 text-indigo-400 mr-2" />
                          <span>8x 4 vCPU, 8 GB RAM (Global Regions)</span>
                        </td>
                        <td className="py-4 px-4 text-right font-mono text-white">$92.00</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium">Notification Infrastructure</td>
                        <td className="py-4 px-4">SendGrid Enterprise + Mobile Push Services</td>
                        <td className="py-4 px-4 text-right font-mono text-white">$5.00</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium">Backup Solution</td>
                        <td className="py-4 px-4">Backblaze B2 Storage</td>
                        <td className="py-4 px-4 text-right font-mono text-white">$2.00</td>
                      </tr>
                      <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4 font-medium">Operational Overhead</td>
                        <td className="py-4 px-4">Tax Requirements (18%) and Miscellaneous</td>
                        <td className="py-4 px-4 text-right font-mono text-white">$19.62</td>
                      </tr>
                      <tr className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-md">
                        <td className="py-5 px-4 font-bold text-white">Total Infrastructure Cost</td>
                        <td className="py-5 px-4 text-white">Enterprise-grade, supporting 10,000+ users</td>
                        <td className="py-5 px-4 text-right font-bold text-emerald-400 font-mono text-xl">$133.62</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-8 bg-gradient-to-br from-blue-950/30 to-indigo-950/30 border-t border-white/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 bg-black/40 p-6 rounded-xl border border-emerald-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-emerald-500/20">
                          <DollarSign className="w-5 h-5 text-emerald-400" />
                        </div>
                        <h4 className="font-bold text-white text-lg">Cost Efficiency</h4>
                      </div>
                      <p className="text-slate-300 mb-4">
                        Infrastructure costs distributed across users for maximum affordability:
                      </p>
                      <div className="p-4 bg-emerald-500/10 rounded-lg border border-emerald-500/20 text-center mb-2">
                        <p className="text-white font-mono">
                          <span className="text-emerald-400 font-semibold">$133.62</span> ÷ <span className="text-emerald-400 font-semibold">1000</span> users = <span className="text-emerald-400 font-bold">$0.1337</span>/user/month
                        </p>
                      </div>
                      <p className="text-center text-slate-300">
                        Only <span className="text-emerald-400 font-semibold">$6/year</span> with buffer for maintenance and unexpected costs
                      </p>
                    </div>
                    
                    <div className="flex-1 bg-black/40 p-6 rounded-xl border border-yellow-500/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-yellow-500/20">
                          <AlertTriangle className="w-5 h-5 text-yellow-400" />
                        </div>
                        <h4 className="font-bold text-white text-lg">Economy of Scale</h4>
                      </div>
                      <p className="text-slate-300 mb-4">
                        Our pricing model relies on reaching critical mass for maximum cost efficiency:
                      </p>
                      <div className="flex items-center">
                        <div className="w-full bg-black/30 rounded-full h-2.5 mr-2">
                          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-2.5 rounded-full w-[65%]"></div>
                        </div>
                        <span className="text-amber-400 font-semibold">65%</span>
                      </div>
                      <p className="text-center text-yellow-200 text-sm mt-4 flex items-center justify-center">
                        <AlertTriangle className="w-4 h-4 mr-2" />
                        The more users join, the more we all benefit from shared infrastructure!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-indigo-950/80 to-blue-950/80 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:30px_30px] opacity-10"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/20 rounded-full blur-xl"></div>
        
        <div className="max-w-5xl mx-auto px-4 relative">
          <div className="bg-gradient-to-r from-blue-500/5 to-indigo-500/5 border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
              <div className="md:w-3/5">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-blue-500/20">
                  <Shield className="w-4 h-4" />
                  Join the waitlist
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Kill the</span> <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Downtime</span> without burning pockets!
                </h2>
                <p className="text-xl text-slate-300 mb-6 leading-relaxed">
                  Join an access list for a notification when Bareuptime is live.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Only First 100 Signups are Free</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    <span>Keep your Business Alive</span>
                  </div>
                </div>
              </div>

              <div className="md:w-2/5">
                {isSubmitted ? (
                  <Card className="bg-black/50 border-green-500/30 shadow-xl shadow-green-500/5 overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-green-400 to-emerald-500"></div>
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-green-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">Thanks for Joining!</h3>
                      <p className="text-slate-300 mb-6">You can track the <a href="https://github.com/sumansaurabh/bareuptime/issues" target="_blank">status update here</a>.</p>
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/20 text-sm text-green-300">
                        We'll contact you directly when our product is live.
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <Card className="bg-black/50 border-blue-500/20 shadow-xl overflow-hidden">
                    <div className="h-1 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold text-white mb-4">Reserve Your Access</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1.5">
                              Business Email
                            </label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="name@company.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                              required
                            />
                          </div>
                          
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center justify-center gap-2">
                                <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></span>
                                Processing...
                              </span>
                            ) : (
                              "Join the Waitlist"
                            )}
                          </Button>
                          
                          {messageType && (
                            <div className={`text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
                              {message}
                            </div>
                          )}
                        </div>
                        
                        <p className="text-xs text-slate-400 mt-4 flex items-center gap-1">
                          <Shield className="w-3 h-3" />
                          <span>No marketing emails. I hate it.</span>
                        </p>
                      </form>
                    </CardContent>
                  </Card>
                )}
              </div>
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
              <Shield className="w-4 h-4" />
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
              {/* <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/20">
                    <Server className="w-5 h-5 text-blue-400" />
                  </div>
                  Enterprise Engineering Background
                </h3>
                <p className="text-slate-300 mb-4">
                  With over a decade building distributed systems, real-time backends, and scalable infrastructure for major enterprise deployments, our leadership understands mission-critical monitoring requirements.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-400">
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Distributed Systems</Badge>
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Real-time Backends</Badge>
                  <Badge className="bg-blue-500/10 text-blue-400 border-blue-500/20">Microsoft OpenAI</Badge>
                </div>
              </div> */}
              
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
              
              {/* <div className="flex gap-4">
                <Button className="flex-1 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 border border-blue-500/30">
                  <Globe className="w-4 h-4 mr-2" />
                  View Architecture
                </Button>
                <Button className="flex-1 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 border border-purple-500/30">
                  <Code className="w-4 h-4 mr-2" />
                  Technical Documentation
                </Button>
              </div> */}
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
                <Shield className="w-6 h-6 text-blue-400 mr-2" />
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
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Privacy Policy[I will add]</a></li>
                  <li><a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">Terms of Service[I will add]</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-500 mb-4 md:mb-0">
              &copy; 2025 BareUptime. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Built by enterprise engineers, for organizations tired of overpriced monitoring.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
