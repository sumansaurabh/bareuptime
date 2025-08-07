"use client"

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Globe, Shield, Clock, Activity, Lock, Smartphone, Webhook, MapPin, Search, Server } from 'lucide-react';
import { trackWithSource } from '@/components/google-analytics';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  category: string;
}

const featuresData: FeatureItem[] = [
  {
    title: "Website & Endpoint Monitoring",
    description: "Monitor HTTP/HTTPS endpoints and APIs",
    icon: Globe,
    href: "/features#website-monitoring",
    category: "Uptime monitoring"
  },
  {
    title: "Domain Monitoring", 
    description: "Track domain expiration and DNS",
    icon: Search,
    href: "/features#domain-monitoring",
    category: "Monitoring features"
  },
  {
    title: "SSL Monitoring",
    description: "Certificate expiration and validity checks",
    icon: Lock,
    href: "/features#ssl-monitoring", 
    category: "Monitoring features"
  },
  {
    title: "Response Time Monitoring",
    description: "Track performance and latency",
    icon: Clock,
    href: "/features#response-time-monitoring",
    category: "Monitoring features"
  },
  {
    title: "Multi-location Monitoring",
    description: "Global monitoring network",
    icon: MapPin,
    href: "/features#multi-location-monitoring",
    category: "Monitoring features"
  },
  {
    title: "DNS Monitoring", 
    description: "DNS resolution and record monitoring",
    icon: Search,
    href: "/features#dns-monitoring",
    category: "Monitoring features"
  },
  {
    title: "Keyword Monitoring",
    description: "Content verification and text monitoring",
    icon: Search,
    href: "/features#keyword-monitoring",
    category: "Monitoring features"
  },
  {
    title: "Ping Monitoring",
    description: "ICMP ping and network connectivity",
    icon: Activity,
    href: "/features#ping-monitoring",
    category: "Uptime monitoring"
  },
  {
    title: "Port Monitoring",
    description: "TCP/UDP port availability checks",
    icon: Server,
    href: "/features#port-monitoring", 
    category: "Uptime monitoring"
  },
  {
    title: "Incident Management",
    description: "Comprehensive incident tracking",
    icon: Shield,
    href: "/features#incident-management",
    category: "Incident management"
  },
  {
    title: "Status Pages",
    description: "Beautiful status pages for users",
    icon: Activity,
    href: "/features#status-pages",
    category: "Status pages"
  },
  {
    title: "Integrations",
    description: "Webhooks, Slack, Discord, Teams",
    icon: Webhook,
    href: "/features#integrations",
    category: "Integrations"
  }
];

export default function FeaturesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleFeatureClick = (feature: FeatureItem) => {
    trackWithSource.navigation(`feature_${feature.title.toLowerCase().replace(/\s+/g, '_')}`, 'features_dropdown');
    setIsOpen(false);
  };

  return (
    <div 
      className="relative"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1"
        aria-label="Features menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        Features
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="p-2">
            <div className="grid grid-cols-1 gap-1">
              {featuresData.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Link
                    key={index}
                    href={feature.href}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                    onClick={() => handleFeatureClick(feature)}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <IconComponent className="w-4 h-4 text-blue-400 group-hover:text-blue-300" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white group-hover:text-blue-100">
                        {feature.title}
                      </div>
                      <div className="text-xs text-slate-400 group-hover:text-slate-300 mt-0.5">
                        {feature.description}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            
            <div className="border-t border-white/10 mt-3 pt-3 space-y-1">
              <Link
                href="/features"
                className="flex items-center justify-center gap-2 w-full p-2 text-sm font-medium text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-colors"
                onClick={() => {
                  trackWithSource.navigation('view_all_features', 'features_dropdown');
                  setIsOpen(false);
                }}
              >
                View All Features
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/enterprise"
                className="flex items-center justify-center gap-2 w-full p-2 text-sm font-medium text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 rounded-lg transition-colors"
                onClick={() => {
                  trackWithSource.navigation('enterprise_features', 'features_dropdown');
                  setIsOpen(false);
                }}
              >
                Enterprise Solutions
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
