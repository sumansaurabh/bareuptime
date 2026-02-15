"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function CurrencyTestPage() {
  const [currentCurrency, setCurrentCurrency] = useState<string>('USD');

  const testUSCurrency = () => {
    setCurrentCurrency('USD');
    localStorage.setItem('mockCurrency', 'USD');
  };

  const testINRCurrency = () => {
    setCurrentCurrency('INR');
    localStorage.setItem('mockCurrency', 'INR');
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-black/40 border border-white/10 rounded-xl p-8 shadow-2xl">
          <h1 className="text-4xl font-bold text-white mb-8 text-center">Currency Detection Test</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Current Currency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-[#975E08]">{currentCurrency}</p>
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
                <Button onClick={testUSCurrency} className="w-full bg-[#975E08] hover:bg-[#975E08]/90">Test USD</Button>
                <Button onClick={testINRCurrency} className="w-full bg-white/10 hover:bg-white/20 text-white">Test INR</Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Company Info Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-slate-300">
                  <p><strong>Provider:</strong> {currentCurrency === 'INR' ? 'Snorkell Associates' : 'Penify Technologies'}</p>
                  <p><strong>Address:</strong> {currentCurrency === 'INR' ? 'India' : 'United States'}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link href="/terms-of-service" className="block text-[#975E08] underline">Terms of Service</Link>
                <Link href="/" className="block text-[#975E08] underline">Back to Home</Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
