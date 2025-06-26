"use client"

import React, { useState, useEffect } from 'react';
import IndianTermsContent from '@/components/IndianTermsContent';

export default function TermsOfService() {
  const [currency, setCurrency] = useState<string>('USD');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCurrency = async () => {
      try {
        // // Check for mock currency first (for testing)
        // const mockCurrency = localStorage.getItem('mockCurrency');
        // if (mockCurrency) {
        //   setCurrency(mockCurrency);
        //   setLoading(false);
        //   return;
        // }

        const response = await fetch('https://api.bareuptime.co/ip/currency');
        const data = await response.json();
        setCurrency(data.currency || 'USD');
      } catch (error) {
        console.error('Error fetching currency:', error);
        setCurrency('USD'); // Default to USD on error
      } finally {
        setLoading(false);
      }
    };

    fetchCurrency();
  }, []);

  const isIndianUser = currency === 'INR';
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Terms of Service</h1>
          
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent"></div>
              <span className="ml-2 text-white">Loading terms...</span>
            </div>
          ) : isIndianUser ? (
            <IndianTermsContent />
          ) : (
          
          <div className="prose prose-invert max-w-none text-slate-300">
            <p className="text-center text-slate-400 mb-8">
              <strong>Effective Date:</strong> June 24, 2025<br />
              <strong>Last Updated:</strong> June 24, 2025
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using BareUptime ("Service"), you agree to be bound by these Terms of Service ("Terms"). 
              If you disagree with any part of these terms, you may not access the Service.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Company Information</h2>
            <p>
              <strong>Service Provider:</strong> {isIndianUser ? 'Snorkell Associates and Co' : 'Penify Technologies LLC'}<br />
              <strong>Registered Address:</strong> {isIndianUser ? 'Rajasthan, India' : '30 N Gould St Ste N, Sheridan, WY 82801'}<br />
              <strong>Email:</strong> support@bareuptime.co<br />
              <strong>Website:</strong> https://bareuptime.co
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Description of Service</h2>
            <p>BareUptime is a website monitoring service that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitors website availability and performance</li>
              <li>Sends alerts when websites go down or experience issues</li>
              <li>Provides uptime statistics and reporting</li>
              <li>Offers SSL certificate monitoring</li>
              <li>Delivers notifications through various channels (email, mobile apps, webhooks, etc.)</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Account Registration</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.1 Account Creation</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to use the Service</li>
              <li>One account per person or organization</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">4.2 Account Security</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are responsible for all activities that occur under your account</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>We reserve the right to suspend accounts that appear to be compromised</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Acceptable Use Policy</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.1 Permitted Uses</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitor websites that you own or have permission to monitor</li>
              <li>Use the Service for legitimate business purposes</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">5.2 Prohibited Uses</h3>
            <p>You may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Monitor websites without proper authorization</li>
              <li>Use the Service to harass, abuse, or harm others</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Violate any laws or regulations</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Use the Service for illegal activities or to monitor illegal content</li>
              <li>Resell or redistribute the Service without permission</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Create multiple accounts to circumvent service limits</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Subscription Plans and Pricing</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.1 Service Plans</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Free Plan:</strong> Up to 50 monitors with basic features</li>
              <li><strong>Paid Plans:</strong> Starting at $8/year with additional features and monitors</li>
              <li>Plan details and current pricing available at https://bareuptime.co</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">6.2 Payment Terms</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Annual subscriptions are billed in advance</li>
              <li>All fees are non-refundable except as required by law</li>
              <li>Prices may change with 30 days' notice to existing subscribers</li>
              <li>Failed payments may result in service suspension</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Service Availability and Performance</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.1 Service Level</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>We strive to provide reliable monitoring with high uptime</li>
              <li>Service availability is not guaranteed and may be affected by maintenance, outages, or technical issues</li>
              <li>We do not guarantee 100% accuracy of monitoring results</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">7.2 Monitoring Frequency</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Free plans: Monitoring every 5 minutes</li>
              <li>Paid plans: Monitoring every 1-3 minutes (depending on plan)</li>
              <li>We reserve the right to adjust monitoring frequency based on service load</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.1 Service Disclaimers</h3>
            <p className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm">
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, 
              INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">8.2 Limitation of Liability</h3>
            <p className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-sm">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, {isIndianUser ? 'SNORKELL ASSOCIATES AND CO' : 'PENIFY TECHNOLOGIES LLC'} SHALL NOT BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
              DATA, OR BUSINESS INTERRUPTION.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Termination</h2>
            
            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.1 Termination by You</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>You may terminate your account at any time through your account settings</li>
              <li>Termination does not relieve you of payment obligations for services already provided</li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-3">9.2 Termination by Us</h3>
            <p>We may terminate or suspend your account immediately if you:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Violate these Terms</li>
              <li>Engage in fraudulent activity</li>
              <li>Fail to pay required fees</li>
              <li>Use the Service in a way that could harm us or other users</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Governing Law and Disputes</h2>
            <p>
              These Terms are governed by the laws of {isIndianUser ? 'Rajasthan, India' : 'the State of Wyoming, United States'}, without regard to conflict of law principles.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Any disputes will be resolved through binding arbitration in {isIndianUser ? 'Rajasthan, India' : 'Wyoming'}</li>
              <li>You waive the right to participate in class action lawsuits</li>
              <li>{isIndianUser ? 'Rajasthan' : 'Wyoming'} state courts have exclusive jurisdiction for any matters not subject to arbitration</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Contact Information</h2>
            <p>For questions about these Terms of Service, contact us:</p>
            <p>
              <strong>Email:</strong> legal@bareuptime.co<br />
              <strong>Support:</strong> support@bareuptime.co<br />
              <strong>Address:</strong> {isIndianUser ? 'Snorkell Associates and Co, Rajasthan, India' : 'Penify Technologies LLC, 30 N Gould St Ste N, Sheridan, WY 82801'}
            </p>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-slate-400 text-center">
                By using BareUptime, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
