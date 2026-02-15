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
      description: "Monitor HTTP/HTTPS endpoints, websites, and APIs with comprehensive health checks.",
      category: "Uptime monitoring",
      features: ["HTTP/HTTPS monitoring", "Response time tracking", "Status code validation"]
    },
    {
      icon: Search,
      title: "Keyword Monitoring", 
      description: "Ensure your website content is displaying correctly by monitoring for specific keywords.",
      category: "Monitoring features",
      features: ["Content verification", "Text presence monitoring"]
    },
    {
      icon: Activity,
      title: "Ping Monitoring",
      description: "Monitor server connectivity and network latency with ICMP ping monitoring.",
      category: "Uptime monitoring", 
      features: ["ICMP ping tests", "Latency monitoring"]
    },
    {
      icon: Server,
      title: "Port Monitoring",
      description: "Monitor specific TCP/UDP ports to ensure your services are running.",
      category: "Uptime monitoring",
      features: ["TCP port monitoring", "UDP port monitoring"]
    },
    {
      icon: Lock,
      title: "SSL Monitoring", 
      description: "Monitor SSL certificate expiration and validity to ensure secure connections.",
      category: "Monitoring features",
      features: ["Expiration alerts", "SSL chain validation"]
    },
    {
      icon: Webhook,
      title: "Integrations",
      description: "Connect with your favorite tools through webhooks, Slack, Discord, and more.",
      category: "Integrations", 
      features: ["Slack integration", "Discord alerts", "Webhooks"]
    }
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
            Monitoring <span className="text-[#975E08]">Features</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Everything you need to monitor your websites, APIs, and infrastructure.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="bg-black/40 border-white/10 hover:border-[#975E08]/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-lg bg-white/5">
                      <IconComponent className="w-6 h-6 text-[#975E08]" />
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
                        <CheckCircle className="w-3 h-3 text-[#975E08] flex-shrink-0" />
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
        <div className="bg-white/5 rounded-2xl p-12 text-center border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Monitoring?</h2>
          <Link href="https://app.bareuptime.co" target="_blank">
            <Button size="lg" className="bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium px-8 py-3">
              Start for Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
