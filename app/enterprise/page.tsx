"use client"

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Shield, 
  Clock, 
  Activity, 
  Lock, 
  Smartphone, 
  Webhook, 
  MapPin, 
  Search,
  Server,
  AlertTriangle,
  CheckCircle,
  ArrowLeft,
  Users,
  DollarSign,
  Zap,
  Settings,
  BarChart3,
  Bell,
  Code,
  Building,
  Star,
  Quote
} from "lucide-react";

/**
 * Renders the EnterprisePage component showcasing enterprise features, integrations, testimonials, and pricing.
 */
export default function EnterprisePage() {
  const enterpriseFeatures = [
    {
      icon: Clock,
      title: "Fast Monitoring Intervals",
      description: "Check critical endpoints with 1-minute monitoring intervals from 9 global locations to detect issues instantly and maintain peak performance worldwide.",
      highlight: "1-min intervals"
    },
    {
      icon: Lock,
      title: "SSL Verification & Domain Security", 
      description: "Complete SSL certificate verification for your custom status domains like status.yourcompany.com with automated renewal alerts and security compliance.",
      highlight: "Custom SSL domains"
    },
    {
      icon: Users,
      title: "Team Collaboration (20 Seats)",
      description: "Manage up to 20 team members with role-based access control, collaborative incident management, and unified team notifications.",
      highlight: "20 team seats"
    },
    {
      icon: Settings,
      title: "White-Label Status Pages",
      description: "Fully branded status pages with your domain, logo, colors, and custom messaging. Complete white-label solution for enterprise branding.",
      highlight: "status.yourcompany.com"
    },
    {
      icon: BarChart3,
      title: "Raw Data Export & Analytics",
      description: "Export complete monitoring data for the entire year in multiple formats (CSV, JSON, XML) for compliance, reporting, and custom analytics.",
      highlight: "Full year data export"
    },
    {
      icon: Search,
      title: "Advanced Tagging & Organization",
      description: "Enterprise-grade monitor organization with custom tags, bulk operations, advanced filtering, and hierarchical grouping for large-scale monitoring.",
      highlight: "Enterprise tagging"
    },
    {
      icon: Activity,
      title: "Global Response Time Monitoring",
      description: "Monitor response times from 9 strategic global locations with detailed performance analytics, SLA reporting, and geographic performance insights.",
      highlight: "9 global locations"
    },
    {
      icon: MapPin,
      title: "Multi-Location Redundancy", 
      description: "Distributed monitoring from North America, Europe, Asia-Pacific, and other key regions to ensure comprehensive global coverage and reliability.",
      highlight: "Global redundancy"
    },
    {
      icon: Shield,
      title: "Enterprise Incident Management",
      description: "Advanced incident workflows with automated escalation, team collaboration, post-incident analysis, and integration with your existing ITSM tools.",
      highlight: "Advanced workflows"
    },
    {
      icon: Building,
      title: "White-Label API & Integrations",
      description: "Fully branded API endpoints and webhook integrations that maintain your company branding across all monitoring touchpoints and third-party systems.",
      highlight: "Branded APIs"
    },
    {
      icon: Bell,
      title: "Custom Alert Channels",
      description: "Enterprise notification channels including custom webhooks, branded email templates, SMS with your company info, and priority escalation paths.",
      highlight: "Branded notifications"
    },
    {
      icon: Code,
      title: "Enterprise API & Automation",
      description: "Full-featured API for monitoring automation, custom integrations, bulk operations, and seamless integration with your existing infrastructure tools.",
      highlight: "Enterprise API"
    }
  ];

  const integrations = [
    { name: "Slack", icon: "💬", color: "bg-purple-500/20 text-purple-300" },
    { name: "Discord", icon: "🎮", color: "bg-indigo-500/20 text-indigo-300" },
    { name: "Teams", icon: "👥", color: "bg-blue-500/20 text-blue-300" },
    { name: "Telegram", icon: "📱", color: "bg-cyan-500/20 text-cyan-300" },
    { name: "PagerDuty", icon: "🚨", color: "bg-orange-500/20 text-orange-300" },
    { name: "Webhooks", icon: "🔗", color: "bg-green-500/20 text-green-300" },
    { name: "Email", icon: "📧", color: "bg-gray-500/20 text-gray-300" },
    { name: "SMS", icon: "💬", color: "bg-yellow-500/20 text-yellow-300" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechStart",
      company: "TechStart Inc",
      content: "BareUptime gives us enterprise-grade monitoring at a fraction of the cost. The mobile alerts and Slack integration have been game-changers for our team.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "DevOps Engineer",
      company: "CloudScale Solutions", 
      content: "We migrated from UptimeRobot and saved 95% on our monitoring costs while getting better features. The multi-location monitoring is incredibly reliable.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Jennifer Kim",
      role: "Site Reliability Engineer", 
      company: "DataFlow Systems",
      content: "The incident management system helped us reduce our MTTR by 60%. BareUptime's enterprise features rival solutions costing 10x more.",
      rating: 5,
      avatar: "JK"
    }
  ];

  const pricingComparison = [
    {
      feature: "Monitors (Enterprise)",
      bareuptime: "Unlimited",
      uptimerobot: "200",
      pingdom: "100"
    },
    {
      feature: "Monitoring Interval",
      bareuptime: "1 minute", 
      uptimerobot: "30 seconds",
      pingdom: "1 minute"
    },
    {
      feature: "Team Members",
      bareuptime: "20 seats included",
      uptimerobot: "5 seats",
      pingdom: "10 users"
    },
    {
      feature: "Status Pages",
      bareuptime: "White-label + SSL",
      uptimerobot: "Basic included",
      pingdom: "1 page"
    },
    {
      feature: "Global Locations",
      bareuptime: "9 locations",
      uptimerobot: "3 locations",
      pingdom: "5 locations"
    },
    {
      feature: "Raw Data Export",
      bareuptime: "Full year export",
      uptimerobot: "Limited",
      pingdom: "30 days"
    },
    {
      feature: "White-Label Branding",
      bareuptime: "Complete solution",
      uptimerobot: "Not available",
      pingdom: "Limited"
    },
    {
      feature: "SSL Domain Verification",
      bareuptime: "Included",
      uptimerobot: "Basic",
      pingdom: "Extra cost"
    },
    {
      feature: "API Access",
      bareuptime: "Full Enterprise API",
      uptimerobot: "Limited",
      pingdom: "Read-only"
    },
    {
      feature: "Annual Cost",
      bareuptime: "$480",
      uptimerobot: "$648",
      pingdom: "$6,000+"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      {/* Navigation Header */}
      <header className="w-full py-4 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/features">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Features
              </Button>
            </Link>
            <Link href="/">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMDIwMjAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoLTZ2LTZoNnYtNmg2djZoNnY2aC02eiIvPjwvZz48L2c+PC9zdmc+')] bg-[size:60px_60px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-blue-500/20 shadow-lg">
              <Building className="w-4 h-4" />
              Enterprise Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent mt-2">
                Monitoring Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Monitor reliably, securely, and cost-effectively with white-label solutions, custom status pages, and enterprise-grade features. 
              Get <span className="text-blue-400 font-semibold">92% cost savings</span> compared to traditional enterprise monitoring solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="https://app.bareuptime.co" target="_blank">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-4 text-lg">
                  Start Enterprise Trial
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
                Book a Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>99.9% Uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>White-Label Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>9 Global Locations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>24/7 Enterprise Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>SSL Verification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 mb-24">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-green-500/30">
                <DollarSign className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost-Effective</h3>
              <p className="text-slate-300 text-lg">
                Enterprise plan at $480/year vs $6,000+/year from competitors. Save 92% while getting white-label solutions and advanced features.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">White-Label & Branding</h3>
              <p className="text-slate-300 text-lg">
                Complete white-label solutions with custom domains like status.yourcompany.com, SSL verification, and your branding on all status pages.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-purple-500/30">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Distribution</h3>
              <p className="text-slate-300 text-lg">
                Monitor from 9 globally distributed locations with 1-minute intervals, raw data exports, and 20 team member seats included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="py-24 relative bg-gradient-to-b from-black/0 via-blue-950/30 to-black/0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Features
              <span className="block text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                Built for Scale
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Get all the enterprise features you need in one intuitive dashboard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105 group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 group-hover:border-blue-400/50 transition-colors">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        {feature.highlight}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* White-Label Solutions Section */}
      <section className="py-24 relative bg-gradient-to-b from-purple-950/20 via-black/0 to-purple-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                White-Label Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Build trust with your customers using fully branded monitoring and status pages under your domain
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                    <Globe className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Custom Status Domains</h3>
                    <p className="text-purple-300 text-sm">Your brand, your domain</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">status.yourcompany.com with SSL verification</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Automatic SSL certificate management and renewal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Custom favicon, logo, and complete branding</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-slate-300">Branded email notifications and alerts</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
                <div className="flex items-center gap-3 mb-6 p-3 bg-gray-800 rounded-lg">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-sm">status.yourcompany.com</span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Y</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-xl">Your Company Status</h3>
                      <p className="text-gray-400 text-sm">Real-time system status</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-white">Website & API</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Operational</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-white">Database</span>
                      </div>
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Operational</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-white">File Storage</span>
                      </div>
                      <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Maintenance</Badge>
                    </div>
                  </div>
                  
                  <div className="text-center text-gray-400 text-sm pt-4 border-t border-gray-700">
                    Powered by Your Company Monitoring
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Distribution Highlight */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-4">9 Global Monitoring Locations</h3>
              <p className="text-xl text-slate-300">Distributed monitoring infrastructure for maximum reliability and performance insights</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">North America</h4>
                <p className="text-slate-400 text-sm">USA East, USA West, Canada</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                  <MapPin className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Europe</h4>
                <p className="text-slate-400 text-sm">Germany, UK, Netherlands</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                  <MapPin className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Asia-Pacific</h4>
                <p className="text-slate-400 text-sm">Singapore, Australia, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Integrate with Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Favorite Tools
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Connect with 15+ integrations including native support for your existing workflow tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {integrations.map((integration, index) => (
              <div key={index} className={`${integration.color} rounded-xl p-6 text-center border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105`}>
                <div className="text-3xl mb-3">{integration.icon}</div>
                <div className="font-medium">{integration.name}</div>
              </div>
            ))}
          </div>

         
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 relative bg-gradient-to-b from-black/0 via-purple-950/20 to-black/0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Pricing
              <span className="block text-2xl md:text-3xl bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mt-2">
                That Makes Sense
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Compare our enterprise offering with traditional solutions and see the massive savings
            </p>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/10 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10 bg-gradient-to-r from-blue-950/30 to-purple-950/30">
                    <th className="text-left py-6 px-6 text-slate-400 font-medium">Feature</th>
                    <th className="text-center py-6 px-6">
                      <div className="flex flex-col items-center">
                        <Activity className="w-5 h-5 text-blue-400 mb-2" />
                        <span className="text-lg font-bold text-blue-400">BareUptime</span>
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs mt-1">Enterprise</Badge>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6">
                      <div className="flex flex-col items-center">
                        <div className="w-5 h-5 bg-green-500 rounded-full mb-2"></div>
                        <span className="text-lg font-bold text-green-400">UptimeRobot</span>
                        <Badge className="bg-green-500/20 text-green-300 border-green-500/30 text-xs mt-1">Enterprise</Badge>
                      </div>
                    </th>
                    <th className="text-center py-6 px-6">
                      <div className="flex flex-col items-center">
                        <div className="w-5 h-5 bg-orange-500 rounded-full mb-2"></div>
                        <span className="text-lg font-bold text-orange-400">Pingdom</span>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 text-xs mt-1">Enterprise</Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pricingComparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 px-6 text-center">
                        <span className={`font-bold ${row.feature === 'Annual Cost' ? 'text-2xl text-green-400' : 'text-blue-400'}`}>
                          {row.bareuptime}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`font-bold ${row.feature === 'Annual Cost' ? 'text-xl text-slate-300' : 'text-green-400'}`}>
                          {row.uptimerobot}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center">
                        <span className={`font-bold ${row.feature === 'Annual Cost' ? 'text-xl text-red-400' : 'text-orange-400'}`}>
                          {row.pingdom}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Enterprise Plan Card */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-lg"></div>
              <Card className="relative bg-black/60 backdrop-blur-xl border border-blue-500/20 shadow-2xl">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 w-full"></div>
                <CardHeader className="text-center pb-6 pt-8">
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit mx-auto mb-4">
                    Enterprise Plan
                  </Badge>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    For growing businesses
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-white">$40</span>
                    <div className="text-slate-400">
                      <div className="text-lg">/month</div>
                      <div className="text-sm">billed annually ($480/year)</div>
                    </div>
                  </div>
                  <p className="text-slate-300">Everything you need for enterprise monitoring</p>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Unlimited monitors with 1-minute intervals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">20 team member seats included</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">White-label status pages with SSL</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">9 global monitoring locations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Complete raw data export (full year)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">Enterprise API and white-label branding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">24/7 priority support with SLA</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 text-lg">
                    Start Enterprise Trial
                  </Button>
                  
                  <p className="text-center text-slate-400 text-sm mt-4">
                    30-day free trial • No credit card required
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Engineering Teams
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              See what enterprise customers are saying about BareUptime
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.role}</div>
                      <div className="text-xs text-slate-500">{testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="w-6 h-6 text-blue-400 mb-3" />
                  <p className="text-slate-300 italic">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 via-purple-950/80 to-blue-950/80"></div>
        <div className="max-w-5xl mx-auto px-4 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Monitoring Infrastructure?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of engineering teams who've already switched to BareUptime for enterprise-grade monitoring at startup prices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="https://app.bareuptime.co" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-4 text-lg">
                Start 30-Day Free Trial
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg">
              Schedule Enterprise Demo
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Setup in under 60 seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
