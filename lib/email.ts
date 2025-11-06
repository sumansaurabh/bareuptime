import { Resend } from 'resend'

// Initialize Resend with API key from environment variables
// Use a placeholder key during build time if not set
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_key_for_build')

export interface EmailOptions {
  to: string | string[]
  subject: string
  html: string
  from?: string
  replyTo?: string
}

/**
 * Send an email using Resend
 * @param options Email options including to, subject, html content
 * @returns Promise with email send result
 */
export async function sendEmail(options: EmailOptions) {
  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 're_placeholder_key_for_build') {
      console.warn('RESEND_API_KEY not configured. Email not sent.')
      return { 
        success: false, 
        error: 'Email service not configured. Please set RESEND_API_KEY environment variable.' 
      }
    }

    const fromEmail = options.from || process.env.EMAIL_FROM || 'notifications@bareuptime.co'
    
    const data = await resend.emails.send({
      from: fromEmail,
      to: Array.isArray(options.to) ? options.to : [options.to],
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    })

    console.log('Email sent successfully:', data)
    return { success: true, data }
  } catch (error) {
    console.error('Failed to send email:', error)
    return { success: false, error }
  }
}

/**
 * Send a test email to verify email service is working
 * @param to Recipient email address
 */
export async function sendTestEmail(to: string) {
  return sendEmail({
    to,
    subject: 'BareUptime - Email Service Test',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #3b82f6;">Email Service Test</h1>
        <p>This is a test email from BareUptime to verify that the email service is configured correctly.</p>
        <p>If you received this email, your email notifications are working properly!</p>
        <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 14px;">
          BareUptime - Enterprise-Grade Uptime Monitoring<br>
          <a href="https://bareuptime.co" style="color: #3b82f6;">bareuptime.co</a>
        </p>
      </div>
    `,
  })
}
