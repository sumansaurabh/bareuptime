"use client"

import React, { useState, useEffect } from 'react';
import IndianPrivacyContent from '@/components/IndianPrivacyContent';

export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Privacy Policy</h1>
          
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-[#975E08] border-t-transparent"></div>
            </div>
          ) : isIndianUser ? (
            <IndianPrivacyContent />
          ) : (
          <div className="prose prose-invert max-w-none text-slate-300">
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
            <p>Penify Technologies LLC ("we," "our," or "us") operates BareUptime. This Privacy Policy explains how we collect and use your information.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Information We Collect</h2>
            <p>We collect account information, technical data, and communication records to provide our monitoring services.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Data Security</h2>
            <p>We implement technical measures to protect your data, though no method is 100% secure.</p>
            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Contact Us</h2>
            <p>Email: privacy@bareuptime.co</p>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
