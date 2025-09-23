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
  ArrowLeft
} from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: Globe,
      title: "Website & Endpoint Monitoring",
      description: "Monitor HTTP/HTTPS endpoints, websites, and APIs with comprehensive health checks. Get instant alerts when your services go down.",
      category: "Uptime monitoring",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      features: ["HTTP/HTTPS monitoring", "Response time tracking", "Status code validation", "Custom headers support"]
    },
    {
      icon: Search,
      title: "Keyword Monitoring", 
      description: "Ensure your website content is displaying correctly by monitoring for specific keywords or phrases on your pages.",
      category: "Monitoring features",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      features: ["Content verification", "Text presence monitoring", "Page integrity checks", "Custom keyword alerts"]
    },
    {
      icon: Activity,
      title: "Ping Monitoring",
      description: "Monitor server connectivity and network latency with ICMP ping monitoring to ensure your infrastructure is reachable.",
      category: "Uptime monitoring", 
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      features: ["ICMP ping tests", "Network latency monitoring", "Packet loss detection", "Infrastructure health checks"]
    },
    {
      icon: Server,
      title: "Port Monitoring",
      description: "Monitor specific TCP/UDP ports to ensure your services are running and accessible on the expected ports.",
      category: "Uptime monitoring",
      color: "text-orange-400", 
      bgColor: "bg-orange-500/10",
      features: ["TCP port monitoring", "UDP port monitoring", "Service availability checks", "Custom port configuration"]
    },
    {
      icon: Clock,
      title: "Cron Job Monitoring",
      description: "Monitor scheduled tasks and background jobs to ensure they're running on time and completing successfully.",
      category: "Uptime monitoring",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10", 
      features: ["Scheduled task monitoring", "Job completion tracking", "Missed execution alerts", "Heartbeat monitoring"]
    },
    {
      icon: Globe,
      title: "Domain Monitoring",
      description: "Monitor domain expiration dates and DNS configurations to prevent unexpected domain-related outages.",
      category: "Monitoring features",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      features: ["Domain expiration alerts", "DNS monitoring", "WHOIS tracking", "Registration status checks"]
    },
    {
      icon: Lock,
      title: "SSL Monitoring", 
      description: "Monitor SSL certificate expiration and validity to ensure secure connections and prevent certificate-related issues.",
      category: "Monitoring features",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      features: ["Certificate expiration alerts", "SSL chain validation", "Certificate authority monitoring", "Security compliance checks"]
    },
    {
      icon: Clock,
      title: "Response Time Monitoring",
      description: "Track website and API response times to ensure optimal performance and user experience across all endpoints.",
      category: "Monitoring features", 
      color: "text-pink-400",
      bgColor: "bg-pink-500/10",
      features: ["Response time tracking", "Performance benchmarking", "Latency analysis", "Speed optimization insights"]
    },
    {
      icon: MapPin,
      title: "Multi-location Monitoring",
      description: "Monitor your services from multiple global locations to ensure consistent availability worldwide.",
      category: "Monitoring features",
      color: "text-emerald-400",
      bgColor: "bg-emerald-500/10", 
      features: ["Global monitoring network", "Regional availability checks", "Geographic redundancy", "Location-based alerts"]
    },
    {
      icon: Search,
      title: "DNS Monitoring",
      description: "Monitor DNS resolution and record changes to ensure your domain names resolve correctly from anywhere.",
      category: "Monitoring features",
      color: "text-teal-400", 
      bgColor: "bg-teal-500/10",
      features: ["DNS resolution monitoring", "Record change detection", "Propagation tracking", "DNS performance analysis"]
    },
    {
      icon: Shield,
      title: "Incident Management",
      description: "Comprehensive incident tracking and management system with automated workflows and team collaboration features.",
      category: "Incident management",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      features: ["Incident tracking", "Automated escalation", "Team collaboration", "Post-incident analysis"]
    },
    {
      icon: Activity,
      title: "Status Pages",
      description: "Create beautiful, customizable status pages to keep your users informed about service availability and incidents.", 
      category: "Status pages",
      color: "text-violet-400",
      bgColor: "bg-violet-500/10",
      features: ["Custom status pages", "Real-time updates", "Incident communication", "Subscriber notifications"]
    },
    {
      icon: Webhook,
      title: "Integrations",
      description: "Connect with your favorite tools through webhooks, Slack, Discord, Teams, and other popular integrations.",
      category: "Integrations", 
      color: "text-lime-400",
      bgColor: "bg-lime-500/10",
      features: ["Webhook notifications", "Slack integration", "Discord alerts", "Teams notifications", "Email alerts", "SMS notifications"]
    }
  ];

  const categories = [
    "All Features",
    "Uptime monitoring", 
    "Monitoring features",
    "Incident management",
    "Status pages", 
    "Integrations"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Features");

  const filteredFeatures = selectedCategory === "All Features" 
    ? features 
    : features.filter(feature => feature.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      {/* Navigation Header */}
      <header className="w-full py-4 px-4 bg-white/5 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Activity className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">BareUptime</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent"> Monitoring </span>
            Features
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Everything you need to monitor your websites, APIs, and infrastructure. Enterprise-grade features at startup-friendly prices.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>13 Monitoring Types</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Real-time Alerts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Global Monitoring</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${selectedCategory === category 
                  ? "bg-blue-600 hover:bg-blue-700 text-white" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
                transition-all duration-200
              `}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-black/40 border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-3 rounded-lg ${feature.bgColor}`}>
                      <IconComponent className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <Badge variant="secondary" className="bg-white/10 text-white border-0">
                      {feature.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-white text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl p-8 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Monitoring?</h2>
          <p className="text-xl text-slate-300 mb-6">
            Get all these features for just <span className="text-blue-400 font-bold">$50/year</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.bareuptime.co" target="_blank">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-8 py-3">
                Start Free
              </Button>
            </Link>
            <Link href="/#pricing">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
