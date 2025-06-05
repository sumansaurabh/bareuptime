"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertTriangle, DollarSign, Server, Code, Globe, Shield, Clock } from "lucide-react"
import { supabase } from '@/lib/supabaseClient'

/**
 * The main component for rendering the landing page of the uptime monitoring service.
 *
 * This component includes sections such as a header, hero banner, about section,
 * and footer. It also handles user input for joining the waitlist through a form.
 *
 * @component
 */
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* GitHub Repository Banner - Thin Strip */}
      <div className="w-full py-2 px-4 bg-white/5 border-b border-white/10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-center md:justify-between">
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-blue-400" />
            <a 
              href="https://github.com/sumansaurabh/bareuptime" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-white hover:text-blue-400 transition-colors"
            >
              Open source on GitHub: sumansaurabh/bareuptime
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {!isLoadingRepoData && repoData && (
              <>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Code className="w-3 h-3" />
                  <span>{repoData.forks} fork{repoData.forks !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400">
                  <Shield className="w-3 h-3" />
                  <span>{repoData.watchers} watcher{repoData.watchers !== 1 ? 's' : ''}</span>
                </div>
              </>
            )}
            <a
              href="https://github.com/sumansaurabh/bareuptime/subscription"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-xs text-slate-300 hover:text-blue-400"
            >
              <Shield className="w-3 h-3" />
              <span>Watch</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          

          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-red-500/20">
              <AlertTriangle className="w-4 h-4" />
              Startup Problem Alert
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Uptime
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Monitoring
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Why  Uptime Monitors are ridiculously priced <span className="text-red-400 font-bold">$120+/year</span> for basic uptime features?
            </p>


          </div>

          {/* Problem Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Code className="w-5 h-5 text-blue-400" />
                  What We Actually Need
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-slate-300">
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    Is my website up?
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    Notify <span className="text-green-400">immediately</span> on <span className="text-green-400">Android, iOS, Discord, Slack, or email</span>
                  </li>
                </ol>
                <p className="text-lg font-semibold text-white mt-6">That's it.</p>
              </CardContent>
            </Card>

            <Card className="bg-red-500/10 backdrop-blur-sm border-red-500/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  What We Get Instead
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-slate-300">
                  <p>Most tools gate basic features behind $10+/month paywalls:</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Critical push notifications? <em className="text-red-400">Premium.</em>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                      Webhooks? <em className="text-red-400">Premium.</em>
                    </li>
                  </ul>
                  <p className="text-sm">For something that costs cents to run, it's absurd.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Solution</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              A minimal, self-hosted monitoring system that does exactly what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  What You Get
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300">
                <p>• Real-time alerts via Slack, Discord, Teams, mobile push, and webhooks</p>
                <p>• Self-hosted, scalable system</p>
                <p>• Global worker pools for accurate monitoring</p>
                <p>• Simple UI to manage endpoints</p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-yellow-400" />
                  What You Don't Get (Yet)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300">
                <p>• SMS and call notifications</p>
                <p>• Fancy dashboards</p>
                <p>• Animated graphs</p>
                <p>• Enterprise bloat</p>
              </CardContent>
            </Card>

            <Card className="bg-green-500/10 backdrop-blur-sm border-green-500/20 hover:bg-green-500/20 transition-colors">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-400" />
                  Pricing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">$6</div>
                  <div className="text-slate-300 mb-4">per year</div>
                  <div className="text-sm text-slate-400">vs $120+/year elsewhere</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing Breakdown</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              No VC-backed bloatware. Just efficient infrastructure and honest pricing.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 max-w-5xl mx-auto">
            <CardContent className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-4 text-white font-semibold">Component</th>
                      <th className="text-left py-4 text-white font-semibold">Specs</th>
                      <th className="text-right py-4 text-white font-semibold">Monthly Cost</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/10">
                      <td className="py-3">API + Config DB</td>
                      <td className="py-3">2 vCPU, 4 GB RAM (Hetzner)</td>
                      <td className="py-3 text-right font-mono">$5.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Redis + Queue</td>
                      <td className="py-3">2 vCPU, 4 GB RAM (Hetzner)</td>
                      <td className="py-3 text-right font-mono">$5.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Global Worker Pools</td>
                      <td className="py-3">8x 4 vCPU, 8 GB RAM (Global)</td>
                      <td className="py-3 text-right font-mono">$92.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Email + Notifications</td>
                      <td className="py-3">SendGrid + Mobile push</td>
                      <td className="py-3 text-right font-mono">$5.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Backups + Storage</td>
                      <td className="py-3">Backblaze B2</td>
                      <td className="py-3 text-right font-mono">$2.00</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="py-3">Overhead</td>
                      <td className="py-3">Taxes(18%) and Others</td>
                      <td className="py-3 text-right font-mono">$19.62</td>
                    </tr>
                    {/* <tr className="border-b border-white/10">
                      <td className="py-3">Overhead (Apple Dev, Stripe, Taxes)</td>
                      <td className="py-3">Platform fees + processing</td>
                      <td className="py-3 text-right font-mono">$56.75</td>
                    </tr> */}
                    <tr className="border-t-2 border-green-400/50 bg-green-500/10">
                      <td className="py-4 font-bold text-white">Total Monthly Cost</td>
                      <td className="py-4 text-slate-300">For 10,000+ users</td>
                      <td className="py-4 text-right font-bold text-green-400 font-mono text-lg">$133.62</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 p-6 bg-green-500/10 rounded-lg border border-green-500/20">
                <p className="text-slate-300 text-center">
                  <strong className="text-green-400">$133.62 ÷ 10,000 users = $0.013362/user/month</strong>
                  <br />
                  Rounded to <strong className="text-green-400">$6/year</strong> with buffer for maintenance and
                  unexpected costs. 
                </p>
                <div className="mt-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <p className="text-yellow-200 text-center text-sm flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    This price is only possible if we reach enough users. The more users join, the lower the cost will be!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ditch Overpriced Monitoring?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join the waitlist. No spam, just updates on development progress.
          </p>

          {isSubmitted ? (
            <Card className="bg-green-500/10 border-green-500/20 max-w-md mx-auto">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">You're on the list!</h3>
                <p className="text-slate-300">We'll notify you when it's ready.</p>
              </CardContent>
            </Card>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </div>
              {messageType && (
                <div className={`mt-3 text-sm ${messageType === "success" ? "text-green-400" : "text-red-400"}`}>
                  {message}
                </div>
              )}
              <p className="text-xs text-slate-400 mt-3">No spam, ever. Unsubscribe anytime.</p>
            </form>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Who's Building This?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-300">
              <p>
                I'm <a href="https://www.linkedin.com/in/ssumansaurabh/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Suman Saurabh</a>, Senior Software Engineer at Microsoft OpenAI with 10+ years building distributed systems,
                real-time backends, and scalable infrastructure.
              </p>
              <p>
                Recently launched my own startup and hit the same frustrating wall: no reliable, affordable uptime
                monitoring. I didn't want to pay $10/month just to know if my service was up.
              </p>
              <p>
                So I'm building it. And sharing everything - design, costs, deployment - for anyone else frustrated by
                overpriced monitoring tools.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-green-400">1</div>
                  <div className="text-sm">Weekend to Build</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">95%</div>
                  <div className="text-sm">Cost Savings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-400">
            Built by a developer, for developers who are tired of overpriced monitoring tools.
          </p>
        </div>
      </footer>
    </div>
  )
}
