"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, MessageCircle, Send, CheckCircle, AlertTriangle, Bug, Home, ArrowLeft } from "lucide-react"

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
  const [activeTab, setActiveTab] = useState('support')

  const handleInputChange = (field: keyof SupportForm, value: string) => {
    setForm(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent, isErrorReport = false) => {
    e.preventDefault()
    
    // Basic validation
    if (!form.title.trim() || !form.body.trim()) {
      setResult({
        success: false,
        message: 'Please fill in both title and description fields.'
      })
      return
    }

    setIsSubmitting(true)
    setResult(null)

    // Direct API calls to your backend endpoints
    const endpoint ='https://api.bareuptime.co/support/submit'

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add JWT token when authentication is implemented
          // 'Authorization': `Bearer ${getAuthToken()}`
        },
        body: JSON.stringify({
          title: form.title,
          body: form.body,
          email: form.email || undefined // Only include email if provided
        })
      })

      const data = await response.json()

      if (response.ok) {
        setResult({
          success: true,
          message: data.message || `${isErrorReport ? 'Error report' : 'Support ticket'} created successfully!`,
          ticket_id: data.ticket_id,
          ticket_url: data.ticket_url
        })
        // Reset form on success
        setForm({ title: '', body: '', email: '' })
      } else {
        setResult({
          success: false,
          message: data.message || `Failed to submit ${isErrorReport ? 'error report' : 'support request'}. Please try again.`
        })
      }
    } catch (error) {
      setResult({
        success: false,
        message: 'Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-950 to-blue-950">
      {/* Navigation Header */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          <a 
            href="/" 
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </a>
          
          <div className="flex items-center gap-4">
            <a 
              href="/" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              <Home className="h-4 w-4" />
              Home
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Support Center</h1>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Submit a support ticket or report an error and our team will get back to you asap.
            </p>
          </div>

          {/* Tabs for Support vs Error Report */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            

            <TabsContent value="support">
              <Card className="bg-black/30 border-white/10">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-2">
                    <Mail className="h-5 w-5 text-blue-400" />
                    Submit Support Request
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-6">
                    {/* Title Field */}
                    <div className="space-y-2">
                      <Label htmlFor="title" className="text-white font-medium">
                        Subject/Title <span className="text-red-400">*</span>
                      </Label>
                      <Input
                        id="title"
                        type="text"
                        placeholder="Brief description of your issue"
                        value={form.title}
                        onChange={(e) => handleInputChange('title', e.target.value)}
                        className="bg-black/20 border-white/20 text-white placeholder-slate-400 focus:border-blue-400"
                        required
                      />
                    </div>

                    {/* Body Field */}
                    <div className="space-y-2">
                      <Label htmlFor="body" className="text-white font-medium">
                        Description <span className="text-red-400">*</span>
                      </Label>
                      <Textarea
                        id="body"
                        placeholder="Please provide detailed information about your issue, including steps to reproduce if applicable..."
                        value={form.body}
                        onChange={(e) => handleInputChange('body', e.target.value)}
                        className="bg-black/20 border-white/20 text-white placeholder-slate-400 focus:border-blue-400 min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com (optional if signed in)"
                        value={form.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-black/20 border-white/20 text-white placeholder-slate-400 focus:border-blue-400"
                      />
                      <p className="text-slate-400 text-sm">
                        Optional if you're signed in. We'll use this to contact you about your ticket.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isSubmitting || !form.title.trim() || !form.body.trim()}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Submit Support Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            
          </Tabs>

          {/* Result Alert */}
          {result && (
            <Alert className={`mt-6 ${result.success ? 'border-green-500/50 bg-green-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
              <div className="flex items-center gap-2">
                {result.success ? (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                )}
                <AlertDescription className={result.success ? 'text-green-300' : 'text-red-300'}>
                  {result.message}
                  {result.success && result.ticket_id && (
                    <div className="mt-2 space-y-1">
                      <p className="font-medium">Ticket ID: {result.ticket_id}</p>
                      {result.ticket_url && (
                        <a 
                          href={result.ticket_url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 underline"
                        >
                          View your ticket
                        </a>
                      )}
                    </div>
                  )}
                </AlertDescription>
              </div>
            </Alert>
          )}

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Response Time</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  <strong>Support requests:</strong> We typically respond within 24 hours.<br />
                  <strong>Error reports:</strong> Critical bugs/payments are investigated within 2-4 hours.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 border-white/10">
              <CardHeader>
                <CardTitle className="text-white text-lg">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-slate-300">
                  <strong>Email:</strong> support@bareuptime.co
                </p>
                <p className="text-slate-300">
                  <strong>Website:</strong> https://bareuptime.co
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
