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
    }
  ];

  const pricingComparison = [
    { feature: "Monitors", bareuptime: "Unlimited", uptimerobot: "200" },
    { feature: "Interval", bareuptime: "1 minute", uptimerobot: "30 seconds" },
    { feature: "Team Seats", bareuptime: "20 included", uptimerobot: "5 seats" },
    { feature: "Branding", bareuptime: "White-label", uptimerobot: "Not available" },
    { feature: "Annual Cost", bareuptime: "$480", uptimerobot: "$648" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="w-full py-4 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-[#975E08]" />
            <span className="text-lg font-bold text-[#975E08]">BareUptime</span>
          </Link>
          <div className="flex items-center gap-4">
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
      <section className="relative overflow-hidden pt-16 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="inline-flex items-center gap-2 bg-white/5 text-[#975E08] px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/10 shadow-lg">
            <Building className="w-4 h-4" />
            Enterprise Solutions
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Enterprise-Grade <span className="text-[#975E08]">Monitoring</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Monitor reliably, securely, and cost-effectively with white-label solutions. 
            Get <span className="text-[#975E08] font-semibold">massive cost savings</span> compared to traditional solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="https://app.bareuptime.co" target="_blank">
              <Button size="lg" className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium px-8 py-4 text-lg">
                Start Enterprise Trial
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Built for <span className="text-[#975E08]">Scale</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="bg-black/40 border-white/10 hover:border-[#975E08]/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <IconComponent className="w-6 h-6 text-[#975E08]" />
                      </div>
                      <Badge className="bg-[#975E08]/20 text-[#975E08] border-[#975E08]/30">
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

      {/* Pricing Comparison */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Enterprise Pricing</h2>
          </div>

          <div className="bg-black/40 rounded-2xl border border-white/10 overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/5 text-slate-400">
                  <tr>
                    <th className="py-6 px-6">Feature</th>
                    <th className="py-6 px-6 text-center text-[#975E08]">BareUptime</th>
                    <th className="py-6 px-6 text-center">Competitors</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {pricingComparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="py-4 px-6 font-medium text-white">{row.feature}</td>
                      <td className="py-4 px-6 text-center text-[#975E08] font-bold">{row.bareuptime}</td>
                      <td className="py-4 px-6 text-center text-slate-500">{row.uptimerobot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 border-t border-white/10 bg-black/40 text-center">
        <p className="text-slate-500 text-sm">© 2026 Bareuptime Associates and Co. Built for reliable organizations.</p>
      </footer>
    </div>
  );
}
