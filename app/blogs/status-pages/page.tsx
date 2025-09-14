'use client'

import { ArrowLeft, Clock, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function StatusPagesBlog() {
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
            <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 mb-6">Product Update</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Status Pages: Make Reliability Visible
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Public, shareable status pages that give your customers a single source of truth during incidents.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                3 min read
              </div>
              <span>September 14, 2025</span>
              <span>By BareUptime Team</span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <div className="mb-12">
          <Card className="bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl">
            <CardContent className="p-6">
              <img src="/placeholder-status-hero.svg" alt="Status page hero mockup" className="w-full rounded-2xl" />
            </CardContent>
          </Card>
        </div>

        {/* Content */}
        <section className="mb-16">
          <div className="prose prose-invert max-w-none">
            <h2>Why a public status page matters</h2>
            <p>
              When things go wrong, people want clear answers — fast. A public status page gives customers and stakeholders a single place to check service health. It reduces support noise, improves transparency, and builds trust.
            </p>
            <h3>Clear, scannable information</h3>
            <p>
              Status pages show the essentials: a prominent overall status, quick stats (online/offline counts, uptime percentage), and a compact timeline for recent days.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">What visitors see</h4>
                <ul className="text-slate-300 space-y-2 pl-5" style={{ listStyleType: 'disc', listStylePosition: 'outside' }}>
                  <li>Service name and short description</li>
                  <li>Big status indicator with last-updated timestamp</li>
                  <li>Per-monitor cards with status badges and small history bars</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Who benefits</h4>
                <p className="text-slate-300">Support teams, engineering, and customers - everyone gets the same reliable information during incidents.</p>
              </div>
            </div>

            <div className="mt-8">
              <img src="/placeholder-timeline.svg" alt="Compact daily uptime bars" className="w-full rounded-lg border border-white/10" />
            </div>
          </div>

          <div className="text-center py-12 border-t border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">Experience the BareUptime Difference</h3>
            <p className="text-slate-300 mb-6">Join thousands of startups who trust BareUptime for reliable, affordable monitoring</p>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 text-lg">Start Monitoring for Free</Button>
            </Link>
          </div>
        </section>

        <footer className="text-sm text-slate-400 text-center">Last updated September 14, 2025 • BareUptime</footer>
      </article>
    </div>
  )
}
