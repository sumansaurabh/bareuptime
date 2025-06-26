"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CurrencyTestPage() {
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD');

  const testUSCurrency = () => {
    setCurrentCurrency('USD');
    // Mock localStorage for testing
    localStorage.setItem('mockCurrency', 'USD');
  };

  const testINRCurrency = () => {
    setCurrentCurrency('INR');
    // Mock localStorage for testing
    localStorage.setItem('mockCurrency', 'INR');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Currency Detection Test</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Current Currency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-blue-400">{currentCurrency}</p>
                <p className="text-slate-300 mt-2">
                  {currentCurrency === 'INR' ? 'Indian terms will be shown' : 'US terms will be shown'}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Test Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  onClick={testUSCurrency}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Test US Currency (USD)
                </Button>
                <Button 
                  onClick={testINRCurrency}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Test Indian Currency (INR)
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Company Information Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Service Provider:</strong> {currentCurrency === 'INR' ? 'Snorkell Associates and Co' : 'Penify Technologies LLC'}</p>
                  <p><strong>Address:</strong> {currentCurrency === 'INR' ? 'Rajasthan, India' : 'Sheridan, WY, United States'}</p>
                  <p><strong>Governing Law:</strong> {currentCurrency === 'INR' ? 'Laws of Rajasthan, India' : 'Laws of Wyoming, United States'}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a href="/terms-of-service" className="block text-blue-400 hover:text-blue-300 underline">
                  View Terms of Service
                </a>
                <a href="/privacy-policy" className="block text-blue-400 hover:text-blue-300 underline">
                  View Privacy Policy
                </a>
                <a href="/" className="block text-blue-400 hover:text-blue-300 underline">
                  Back to Home
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <h3 className="text-yellow-400 font-semibold mb-2">How it works:</h3>
            <ul className="text-slate-300 space-y-1 text-sm">
              <li>• The system detects user's currency from API call to localhost:8080/ip/currency</li>
              <li>• If currency is INR, Indian terms and conditions are shown</li>
              <li>• If currency is USD (or any other), US terms and conditions are shown</li>
              <li>• Company information, addresses, and governing law change accordingly</li>
              <li>• Use the test buttons above to simulate different currencies</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
