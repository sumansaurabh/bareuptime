'use client'

import { ArrowLeft, Clock, BookOpen, TrendingUp, Users, Activity } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function BlogsPage() {
  const blogPosts = [
    {
      id: 'uptime-monitoring-industry-analysis-2025',
      title: 'The State of Uptime Monitoring in 2025: Why Startups Need Better Solutions',
      excerpt: 'A comprehensive analysis of the uptime monitoring industry, competitive landscape, and why traditional solutions fail startups.',
      author: 'BareUptime Team',
      publishDate: 'January 15, 2025',
      readTime: '8 min read',
      category: 'Industry Analysis',
      featured: true,
      tags: ['Industry Analysis', 'Startup Tools', 'Cost Comparison'],
      image: '/placeholder.jpg'
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
      tags: ['Status Pages', 'Product', 'Transparency'],
      image: '/placeholder-status-hero.svg'
    },
    // Additional blog posts can be added here
  ]

  return (
    <div className="min-h-screen bg-black text-white">
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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-indigo-500/10 text-indigo-400 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-indigo-500/20 backdrop-blur-sm shadow-lg">
              <BookOpen className="w-4 h-4" />
              BareUptime Blog
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Industry Insights &
              <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                Technical Analysis
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              Deep dives into uptime monitoring, startup technology choices, and industry trends
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className={`relative bg-black/60 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:translate-y-[-4px] rounded-2xl overflow-hidden group hover:border-indigo-500/30 ${post.featured ? 'lg:col-span-1' : ''}`}>
                <div className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 w-full"></div>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Content */}
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                          {post.category}
                        </Badge>
                        {post.featured && (
                          <Badge className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-yellow-300 border-yellow-500/30">
                            Featured
                          </Badge>
                        )}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-slate-300 text-lg leading-relaxed mb-6">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                        <span>{post.publishDate}</span>
                        <span>By {post.author}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-slate-400 border-slate-600">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <Link href={`/blogs/${post.id}`} className='text-blue-400 hover:text-blue-300 font-medium flex items-center gap-2 transition-colors'>
                        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200">
                          Read Full Article
                        </Button>
                      </Link>
                    </div>
                    
                    {/* Stats Preview */}
                    {/* <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white mb-4">Key Insights</h3>
                      <div className="space-y-4">
                        <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-4 border border-red-500/20">
                          <div className="flex items-center gap-3 mb-2">
                            <TrendingUp className="w-5 h-5 text-red-400" />
                            <span className="text-red-400 font-semibold">Cost Analysis</span>
                          </div>
                          <p className="text-slate-300 text-sm">$14,056 per minute average downtime cost</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span className="text-blue-400 font-semibold">User Impact</span>
                          </div>
                          <p className="text-slate-300 text-sm">79% user abandonment after performance issues</p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl p-4 border border-green-500/20">
                          <div className="flex items-center gap-3 mb-2">
                            <Activity className="w-5 h-5 text-green-400" />
                            <span className="text-green-400 font-semibold">BareUptime Edge</span>
                          </div>
                          <p className="text-slate-300 text-sm">95% cost reduction vs enterprise solutions</p>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Monitoring?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of startups who trust BareUptime for reliable, affordable monitoring
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-4 rounded-lg shadow-lg shadow-blue-500/20 transition-all duration-200 text-lg">
              Get Started Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
