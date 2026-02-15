"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Mail, MessageCircle, Send, CheckCircle, AlertTriangle, ArrowLeft } from "lucide-react"
import Link from 'next/link'

interface SupportForm {
  title: string
  body: string
  email: string
}

interface SubmissionResult {
  success: boolean
  message: string
  ticket_id?: string
  ticket_url?: string
}

export default function SupportPage() {
  const [form, setForm] = useState<SupportForm>({
    title: '',
    body: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<SubmissionResult | null>(null)

  const handleInputChange = (field: keyof SupportForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.title.trim() || !form.body.trim()) {
      setResult({ success: false, message: 'Please fill in both title and description fields.' })
      return
    }
    setIsSubmitting(true)
    setResult(null)
    try {
      const response = await fetch('https://api.bareuptime.co/support/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      if (response.ok) {
        setResult({ success: true, message: data.message || 'Support ticket created successfully!', ticket_id: data.ticket_id })
        setForm({ title: '', body: '', email: '' })
      } else {
        setResult({ success: false, message: data.message || 'Failed to submit support request.' })
      }
    } catch (error) {
      setResult({ success: false, message: 'Network error. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-[#975E08] hover:text-[#975E08]/80 transition-colors group">
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-black/40 border border-white/10 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-[#975E08]" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
            <p className="text-slate-300 text-lg">Submit a ticket and our team will get back to you asap.</p>
          </div>

          <Card className="bg-black/30 border-white/10">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#975E08]" />
                Submit Support Request
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white font-medium">Subject <span className="text-red-400">*</span></Label>
                  <Input id="title" value={form.title} onChange={(e) => handleInputChange('title', e.target.value)} className="bg-black/20 border-white/20 text-white focus:border-[#975E08]" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="body" className="text-white font-medium">Description <span className="text-red-400">*</span></Label>
                  <Textarea id="body" value={form.body} onChange={(e) => handleInputChange('body', e.target.value)} className="bg-black/20 border-white/20 text-white focus:border-[#975E08] min-h-[120px]" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">Email Address</Label>
                  <Input id="email" type="email" value={form.email} onChange={(e) => handleInputChange('email', e.target.value)} className="bg-black/20 border-white/20 text-white focus:border-[#975E08]" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-[#975E08] hover:bg-[#975E08]/90 text-white font-medium py-3">
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {result && (
            <Alert className={`mt-6 ${result.success ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
              <div className="flex items-center gap-2">
                {result.success ? <CheckCircle className="h-4 w-4 text-green-400" /> : <AlertTriangle className="h-4 w-4 text-red-400" />}
                <AlertDescription className={result.success ? 'text-green-300' : 'text-red-300'}>{result.message}</AlertDescription>
              </div>
            </Alert>
          )}
        </div>
      </div>
    </div>
  )
}
