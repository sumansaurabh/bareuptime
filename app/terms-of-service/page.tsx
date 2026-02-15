"use client"

import React, { useState, useEffect } from 'react';
import IndianTermsContent from '@/components/IndianTermsContent';

export default function TermsOfService() {
  const [currency, setCurrency] = useState<string>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        const response = await fetch('https://api.bareuptime.co/ip/currency');
        const data = await response.json();
        setCurrency(data.currency || 'USD');
      } catch (error) {
        setCurrency('USD');
      } finally {
        setLoading(false);
      }
    };
    fetchCurrency();
  }, []);

  const isIndianUser = currency === 'INR';
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-black/40 border border-white/10 rounded-xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
          
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#975E08] border-t-transparent"></div>
            </div>
          ) : isIndianUser ? (
            <IndianTermsContent />
          ) : (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p>By using BareUptime, you agree to these Terms. If you disagree, you may not use the Service.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Description of Service</h2>
            <p>BareUptime is a website monitoring service that provides uptime stats, alerts, and SSL monitoring.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Acceptable Use</h2>
            <p>You agree to use the service for legitimate purposes and only for websites you have permission to monitor.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Limitation of Liability</h2>
            <p>The Service is provided "AS IS". We are not liable for any indirect or consequential damages.</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
