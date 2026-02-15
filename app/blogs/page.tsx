'use client'

import { ArrowLeft, Clock, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

/**
 * Renders the BlogsPage component displaying a list of blog posts.
 */
export default function BlogsPage() {
  const blogPosts = [
    {
      id: 'ai-monitors-guide',
      title: 'AI Monitors: Prompt-Driven Browser Monitoring with BareUptime',
      excerpt: 'Write a prompt, BareUptime opens a real browser and performs the actions you described — clicking buttons, filling forms, testing login flows. Like having a QA tester checking your site on autopilot.',
      author: 'BareUptime Team',
      publishDate: 'February 15, 2026',
      readTime: '7 min read',
      category: 'Product Guide',
      featured: true,
      tags: ['AI Monitoring', 'Product Guide', 'Getting Started'],
    },
    {
      id: 'uptime-monitoring-industry-analysis-2025',
      title: 'The State of Uptime Monitoring in 2025: Why Startups Need Better Solutions',
      excerpt: 'A comprehensive analysis of the uptime monitoring industry, competitive landscape, and why traditional solutions fail startups.',
      author: 'BareUptime Team',
      publishDate: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Industry Analysis',
      featured: false,
      tags: ['Industry Analysis', 'Startup Tools', 'Cost Comparison'],
    },
    {
      id: 'mcp-tools-create-and-publish-monitor',
      title: 'MCP Tools: Streamlining Monitor Creation with create_and_publish_monitor',
      excerpt: 'Explore how BareUptime\'s Model Context Protocol (MCP) integration simplifies monitor creation and status page publishing.',
      author: 'BareUptime Team',
      publishDate: 'September 23, 2025',
      readTime: '6 min read',
      category: 'Technical Deep Dive',
      featured: false,
      tags: ['MCP', 'Automation', 'AI Integration'],
    },
    {
      id: 'status-pages',
      title: 'Status Pages: Make Reliability Visible',
      excerpt: 'Public, shareable status pages that give your customers a single source of truth during incidents.',
      author: 'BareUptime Team',
      publishDate: 'September 14, 2025',
      readTime: '3 min read',
      category: 'Product Update',
      featured: false,
      tags: ['Status Pages', 'Product'],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 relative text-center">
          <div className="inline-flex items-center gap-3 bg-white/5 text-[#975E08] px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-white/10 backdrop-blur-sm shadow-lg">
            <BookOpen className="w-4 h-4" />
            BareUptime Blog
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Industry <span className="text-[#975E08]">Insights</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            Deep dives into uptime monitoring, startup technology choices, and industry trends.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="relative bg-black/60 border border-white/10 shadow-2xl hover:border-[#975E08]/50 transition-all duration-300 rounded-2xl overflow-hidden group">
                <div className="h-1 bg-[#975E08] w-full"></div>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <Badge className="bg-[#975E08]/20 text-[#975E08] border-[#975E08]/30">
                        {post.category}
                      </Badge>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#975E08] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-slate-300 text-lg leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                      <span>{post.publishDate}</span>
                    </div>
                    
                    <Link href={`/blogs/${post.id}`}>
                      <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium px-8 py-3 rounded-lg mt-4">
                        Read Full Article
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Monitoring?
          </h2>
          <Link href="/">
            <Button className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium px-8 py-4 rounded-lg shadow-lg text-lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
