'use client'

import { ArrowLeft, Clock, Brain, Zap, CheckCircle, ArrowRight, Eye, MousePointerClick, LogIn, ShoppingCart, Navigation, FormInput, Play, Terminal, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function AIMonitorsGuideBlog() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <header className="mb-16">
          <div className="text-center mb-12">
            <Badge className="bg-[#975E08]/20 text-[#975E08] border-[#975E08]/30 mb-6">Product Guide</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              AI Monitors: Prompt-Driven Browser Monitoring with <span className="text-[#975E08]">BareUptime</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Write a prompt. BareUptime opens a real browser, performs the actions you described, and tells you if something broke. Like having a QA tester checking your site every minute.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                7 min read
              </div>
              <span>February 15, 2026</span>
              <span>By BareUptime Team</span>
            </div>
          </div>

          {/* Hero — Prompt → Browser → Result flow */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#975E08]/10 via-black to-purple-900/10 p-8">
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#975E08]/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-[#975E08]/30">
                  <MessageSquare className="w-8 h-8 text-[#975E08]" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">You Write a Prompt</div>
                <div className="text-xs text-slate-500">"Click login, enter creds, verify dashboard loads"</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-purple-500/30">
                  <Eye className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">AI Opens a Real Browser</div>
                <div className="text-xs text-slate-500">Navigates, clicks, types, scrolls — like a real user</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-emerald-500/30">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <div className="text-sm font-semibold text-white mb-1">You Get the Result</div>
                <div className="text-xs text-slate-500">Pass/fail with screenshots and action logs</div>
              </div>
            </div>
          </div>
        </header>

        {/* What Are AI Monitors */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What Are AI Monitors?</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              Traditional uptime monitors ping your URL and check if they get a <code className="bg-slate-800 px-2 py-1 rounded text-[#975E08]">200 OK</code> response. That's it. They have no idea if your login page actually works, if buttons are clickable, or if a form submission goes through.
            </p>
            <p className="text-slate-300 leading-relaxed">
              BareUptime's AI monitors are fundamentally different. You give them a <strong className="text-white">URL</strong> and a <strong className="text-white">prompt</strong> — a plain-English instruction describing what to do on the page. The AI spins up a real headless browser, navigates to your URL, and <strong className="text-white">executes the actions</strong> you described: clicking buttons, filling forms, navigating between pages, verifying that elements exist. Then it reports back whether everything worked or something failed.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Think of it like having a QA engineer run a manual test on your site every few minutes — except it's automated, never sleeps, and costs a fraction of what manual testing would.
            </p>
          </div>
        </section>

        {/* How It Works — The Prompt */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 bg-[#975E08]/10 text-[#975E08] px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-[#975E08]/20 backdrop-blur-sm shadow-lg">
              <Terminal className="w-4 h-4" />
              How It Works
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">You Write the Prompt. AI Does the Rest.</h2>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
              The prompt is a natural language instruction that tells the AI what to do on your page. No code, no scripts, no selectors — just describe what a real user would do.
            </p>
          </div>

          {/* Prompt Examples */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Example Prompts</h3>

            <div className="bg-gradient-to-r from-[#975E08]/10 to-amber-900/10 rounded-xl border border-[#975E08]/20 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-[#975E08]/10 border-b border-[#975E08]/20">
                <LogIn className="w-4 h-4 text-[#975E08]" />
                <span className="text-sm font-semibold text-[#975E08]">Login Flow Monitoring</span>
              </div>
              <div className="p-5">
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4 border border-white/5">
                  <span className="text-slate-500">Prompt:</span> "Go to the login page. Enter 'test@company.com' as email and 'testpass123' as password. Click the 'Sign In' button. Verify that the dashboard page loads and shows a welcome message."
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">AI will navigate, fill credentials, click sign in, and verify the dashboard renders correctly.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl border border-blue-500/20 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-blue-500/10 border-b border-blue-500/20">
                <MousePointerClick className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">Button & Link Verification</span>
              </div>
              <div className="p-5">
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4 border border-white/5">
                  <span className="text-slate-500">Prompt:</span> "Check that all navigation links in the header are clickable and don't lead to 404 pages. Also verify the 'Get Started' CTA button is visible and clickable."
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">AI will click each nav link, check for 404s, and verify the CTA button works.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-xl border border-emerald-500/20 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-emerald-500/10 border-b border-emerald-500/20">
                <ShoppingCart className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">Checkout Flow Monitoring</span>
              </div>
              <div className="p-5">
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4 border border-white/5">
                  <span className="text-slate-500">Prompt:</span> "Add the first product to cart. Go to the cart page. Click 'Proceed to Checkout'. Verify the checkout form loads with payment fields visible."
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">AI will simulate the full shopping journey and confirm checkout is reachable.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-purple-500/10 border-b border-purple-500/20">
                <FormInput className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">Form Submission Testing</span>
              </div>
              <div className="p-5">
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4 border border-white/5">
                  <span className="text-slate-500">Prompt:</span> "Fill the contact form with name 'Test User', email 'test@test.com', and message 'Automated test'. Click Submit. Verify a success confirmation appears."
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">AI will fill the form, submit it, and verify the success response.</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3 bg-orange-500/10 border-b border-orange-500/20">
                <Navigation className="w-4 h-4 text-orange-400" />
                <span className="text-sm font-semibold text-orange-400">Multi-Page Navigation</span>
              </div>
              <div className="p-5">
                <div className="bg-black/60 rounded-lg p-4 font-mono text-sm text-slate-300 mb-4 border border-white/5">
                  <span className="text-slate-500">Prompt:</span> "Navigate to the pricing page. Verify all three plan cards are visible. Click the 'Enterprise' plan's 'Contact Sales' button. Verify the contact form loads."
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-400">AI will navigate through pages and verify each element along the way.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What You Get Back */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">What You Get Back</h2>
          <p className="text-lg text-slate-300 leading-relaxed mb-8">
            After each run, the AI monitor returns a detailed report of everything it did and whether it succeeded.
          </p>

          {/* Result Preview Placeholder */}
          <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800">
            <div className="w-full px-6 py-4">
              {/* Browser chrome */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="flex-1 bg-slate-700 rounded h-5 text-xs text-slate-400 flex items-center px-3">app.bareuptime.com/monitors/ai-12345/results</div>
              </div>

              {/* Result summary */}
              <div className="flex items-center gap-3 mb-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">All actions completed successfully</span>
                <span className="text-xs text-slate-500 ml-auto">2.4s total</span>
              </div>

              {/* Action log */}
              <div className="space-y-2 mb-4">
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-2">Action Log</div>
                <div className="flex items-center gap-3 p-2 bg-black/40 rounded border border-white/5 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-500 font-mono w-12">0.3s</span>
                  <span className="text-slate-300">Navigated to <span className="text-[#975E08]">https://app.example.com/login</span></span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-black/40 rounded border border-white/5 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-500 font-mono w-12">0.5s</span>
                  <span className="text-slate-300">Entered email into login form</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-black/40 rounded border border-white/5 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-500 font-mono w-12">0.7s</span>
                  <span className="text-slate-300">Entered password into login form</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-black/40 rounded border border-white/5 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-500 font-mono w-12">0.9s</span>
                  <span className="text-slate-300">Clicked <span className="text-white font-semibold">"Sign In"</span> button</span>
                </div>
                <div className="flex items-center gap-3 p-2 bg-black/40 rounded border border-white/5 text-xs">
                  <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-500 font-mono w-12">2.4s</span>
                  <span className="text-slate-300">Verified dashboard loaded — welcome message found</span>
                </div>
              </div>

              {/* Screenshot placeholder */}
              <div className="flex gap-3">
                <div className="flex-1 h-20 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-600">Screenshot: Login Page</p>
                  </div>
                </div>
                <div className="flex-1 h-20 bg-slate-800/50 rounded-lg border border-white/5 flex items-center justify-center">
                  <div className="text-center">
                    <Eye className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                    <p className="text-[10px] text-slate-600">Screenshot: Dashboard</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-black/40 rounded-xl p-5 border border-white/10">
              <Play className="w-5 h-5 text-[#975E08] mb-3" />
              <h4 className="text-sm font-semibold text-white mb-1">Step-by-Step Action Log</h4>
              <p className="text-xs text-slate-400">Every action the AI performed, with timestamps and pass/fail status for each step.</p>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-white/10">
              <Eye className="w-5 h-5 text-[#975E08] mb-3" />
              <h4 className="text-sm font-semibold text-white mb-1">Screenshots at Each Step</h4>
              <p className="text-xs text-slate-400">Visual proof of what the browser saw at key points — so you can see exactly what went wrong.</p>
            </div>
            <div className="bg-black/40 rounded-xl p-5 border border-white/10">
              <Zap className="w-5 h-5 text-[#975E08] mb-3" />
              <h4 className="text-sm font-semibold text-white mb-1">Instant Alerts on Failure</h4>
              <p className="text-xs text-slate-400">If any action fails, you get alerted via email, Slack, or SMS with the full failure context.</p>
            </div>
          </div>
        </section>

        {/* Step-by-Step Setup Guide */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">How to Create an AI Monitor</h2>
          <p className="text-lg text-slate-300 mb-10">Set up your first prompt-driven AI monitor in under 2 minutes.</p>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#975E08] rounded-full flex items-center justify-center text-black font-bold text-lg">1</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Create a New Monitor</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Log in to your BareUptime dashboard and click <strong className="text-white">+ New Monitor</strong>. Select <strong className="text-white">AI Monitor</strong> from the monitor type dropdown.
                </p>
                {/* Screenshot Placeholder */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <div className="w-full max-w-md mx-auto px-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="flex-1 bg-slate-700 rounded h-5 text-xs text-slate-400 flex items-center px-3">app.bareuptime.com/monitors/new</div>
                    </div>
                    <div className="bg-slate-800/50 rounded-lg p-3 border border-white/5">
                      <div className="text-sm text-slate-400 mb-3">Select Monitor Type</div>
                      <div className="space-y-2">
                        <div className="h-8 bg-slate-700/50 rounded w-full flex items-center px-3 text-xs text-slate-500">HTTP Monitor</div>
                        <div className="h-8 bg-slate-700/50 rounded w-full flex items-center px-3 text-xs text-slate-500">Keyword Monitor</div>
                        <div className="h-8 bg-[#975E08]/20 border border-[#975E08]/40 rounded w-full flex items-center px-3 text-xs text-[#975E08] font-semibold gap-2">
                          <Brain className="w-3 h-3" /> AI Monitor
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#975E08] rounded-full flex items-center justify-center text-black font-bold text-lg">2</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Enter Your URL</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Enter the URL where the AI browser should start. This is the page the AI will navigate to before executing your prompt.
                </p>
                {/* Screenshot Placeholder */}
                <div className="relative w-full h-32 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                  <div className="w-full max-w-md mx-auto px-6">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-slate-500 mb-2">Monitor URL</div>
                      <div className="h-9 bg-black/40 rounded border border-white/10 flex items-center px-3 text-sm text-slate-300 font-mono">https://app.yoursite.com/login</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#975E08] rounded-full flex items-center justify-center text-black font-bold text-lg">3</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Write Your Prompt</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  This is where the magic happens. Write a plain-English instruction describing what the AI should do on the page. Be specific about actions (click, type, scroll) and what to verify.
                </p>
                {/* Screenshot Placeholder */}
                <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-6">
                  <div className="w-full max-w-md mx-auto">
                    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
                      <div className="text-xs text-slate-500 mb-2">AI Prompt</div>
                      <div className="bg-black/40 rounded border border-[#975E08]/30 p-3 text-sm text-slate-300 min-h-[80px] font-mono leading-relaxed">
                        Click the "Sign In" button. Enter "test@company.com" as email and "testpass123" as password. Click "Login". Verify the dashboard shows "Welcome back" text.
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xs text-slate-600">Plain English — no code needed</span>
                        <span className="text-xs text-[#975E08]">AI will interpret this automatically</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#975E08] rounded-full flex items-center justify-center text-black font-bold text-lg">4</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Set Check Interval & Alerts</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Choose how often the AI should run your prompt and where to send alerts if something fails.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-[#975E08] font-semibold">Check Interval</code>
                    <p className="text-slate-300 text-sm mt-1">How often the AI runs your prompt</p>
                    <p className="text-slate-500 text-xs mt-2">5min, 10min, 30min, 1hr</p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-white/10">
                    <code className="text-[#975E08] font-semibold">Alert Channels</code>
                    <p className="text-slate-300 text-sm mt-1">Where to send failure notifications</p>
                    <p className="text-slate-500 text-xs mt-2">Email, Slack, SMS, Webhook</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6">
              <div className="shrink-0">
                <div className="w-12 h-12 bg-[#975E08] rounded-full flex items-center justify-center text-black font-bold text-lg">5</div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">Save & Watch It Run</h3>
                <p className="text-slate-300 leading-relaxed mb-4">
                  Hit save. The AI monitor will immediately execute its first run. You can watch the action log in real-time and see screenshots of what the browser saw at each step.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional vs AI comparison */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Traditional Monitors vs AI Monitors</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-slate-400 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Traditional Monitors
              </h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Only checks if URL returns 200 OK</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Can't click buttons or interact with the page</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Can't test login flows or form submissions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>No way to verify page content or UI elements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">&#10005;</span>
                  <span>Misses broken JavaScript, failed renders</span>
                </li>
              </ul>
            </div>
            <div className="bg-[#975E08]/10 rounded-2xl p-6 border border-[#975E08]/30">
              <h3 className="text-lg font-semibold text-[#975E08] mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5" />
                BareUptime AI Monitors
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#975E08] mt-1 shrink-0" />
                  <span>Opens a real browser, sees what users see</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#975E08] mt-1 shrink-0" />
                  <span>Clicks buttons, fills forms, navigates pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#975E08] mt-1 shrink-0" />
                  <span>Tests complete user flows end-to-end</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#975E08] mt-1 shrink-0" />
                  <span>Verifies specific elements and text exist</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-[#975E08] mt-1 shrink-0" />
                  <span>Returns screenshots and detailed action logs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Why UptimeRobot Can't Do This */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Why UptimeRobot Can't Do This</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              UptimeRobot sends HTTP requests and checks status codes. It never opens a browser. It can't click a button, fill a form, or verify that your checkout flow actually works. If your site returns <code className="bg-slate-800 px-2 py-1 rounded text-slate-400">200 OK</code> but the login is broken, the checkout button is missing, or the page renders an error — UptimeRobot will tell you everything is fine.
            </p>
            <p className="text-slate-300 leading-relaxed">
              BareUptime's AI monitors use a real headless browser powered by AI that understands your natural language prompts and executes them as actions. This is a fundamentally different approach — one that catches the issues that actually affect your users.
            </p>
          </div>

          <div className="mt-8 bg-gradient-to-br from-slate-900/50 to-slate-800/30 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="text-slate-400 border-b border-white/10">
                  <tr>
                    <th className="py-3 px-4">Capability</th>
                    <th className="py-3 px-4 text-center text-[#975E08]">BareUptime AI</th>
                    <th className="py-3 px-4 text-center">UptimeRobot</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Real browser execution</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Natural language prompts</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Click, type, navigate actions</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Login / checkout flow testing</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 px-4">Screenshots of each step</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">UI element verification</td>
                    <td className="py-3 px-4 text-center text-[#975E08] font-bold">&#10003;</td>
                    <td className="py-3 px-4 text-center text-red-400">&#10005;</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Getting Started */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Getting Started</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              AI monitors are included in BareUptime's paid plan — you get 2 AI monitors alongside your standard uptime monitors. Each AI monitor can target any URL and run any prompt you write.
            </p>
            <p className="text-slate-300 leading-relaxed">
              No scripting knowledge required. No CSS selectors. No Playwright or Puppeteer setup. Just write what you want to test in plain English and the AI handles the rest.
            </p>
          </div>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-[#975E08] mb-2">2</div>
              <div className="text-slate-400 text-sm">AI monitors included in paid plan</div>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-[#975E08] mb-2">0</div>
              <div className="text-slate-400 text-sm">Lines of code needed</div>
            </div>
            <div className="bg-black/40 rounded-xl p-6 border border-white/10 text-center">
              <div className="text-3xl font-bold text-[#975E08] mb-2">&lt;2min</div>
              <div className="text-slate-400 text-sm">To set up your first AI monitor</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12 border-t border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stop Guessing If Your Site Works. Know It Does.
          </h2>
          <p className="text-slate-300 mb-8">
            Start with free uptime monitoring, then upgrade for AI-powered browser monitoring that tests what your users actually experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-[#975E08]/20 transition-all duration-200 text-lg inline-flex items-center gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/blogs">
              <Button variant="outline" className="border-white/20 text-slate-300 hover:bg-white/5 font-medium px-8 py-4 rounded-lg text-lg">
                Read More Articles
              </Button>
            </Link>
          </div>
        </section>
      </article>
    </div>
  )
}
