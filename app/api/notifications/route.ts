import { NextRequest, NextResponse } from 'next/server'
import { sendEmail } from '@/lib/email'
import {
  generateMonitorDownEmail,
  generateMonitorUpEmail,
  generateMonitorCreatedEmail,
  generateSSLExpiryEmail,
  type MonitorDownEmailData,
  type MonitorUpEmailData,
  type MonitorCreatedEmailData,
  type SSLExpiryEmailData,
} from '@/lib/email-templates'

// Types for webhook payloads
interface BaseNotification {
  type: 'monitor_down' | 'monitor_up' | 'monitor_created' | 'ssl_expiry'
  email: string | string[]
}

interface MonitorDownNotification extends BaseNotification {
  type: 'monitor_down'
  data: MonitorDownEmailData
}

interface MonitorUpNotification extends BaseNotification {
  type: 'monitor_up'
  data: MonitorUpEmailData
}

interface MonitorCreatedNotification extends BaseNotification {
  type: 'monitor_created'
  data: MonitorCreatedEmailData
}

interface SSLExpiryNotification extends BaseNotification {
  type: 'ssl_expiry'
  data: SSLExpiryEmailData
}

type NotificationPayload =
  | MonitorDownNotification
  | MonitorUpNotification
  | MonitorCreatedNotification
  | SSLExpiryNotification

/**
 * POST /api/notifications
 * Webhook endpoint to receive monitor status updates and send email notifications
 */
export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret for security (optional but recommended)
    const webhookSecret = request.headers.get('x-webhook-secret')
    const expectedSecret = process.env.WEBHOOK_SECRET

    if (expectedSecret && webhookSecret !== expectedSecret) {
      return NextResponse.json(
        { error: 'Unauthorized: Invalid webhook secret' },
        { status: 401 }
      )
    }

    const payload: NotificationPayload = await request.json()

    // Validate required fields
    if (!payload.type || !payload.email || !payload.data) {
      return NextResponse.json(
        { error: 'Missing required fields: type, email, or data' },
        { status: 400 }
      )
    }

    let emailHtml: string
    let emailSubject: string

    // Generate email based on notification type
    switch (payload.type) {
      case 'monitor_down':
        emailHtml = generateMonitorDownEmail(payload.data)
        emailSubject = `🚨 Monitor Down: ${payload.data.monitorName}`
        break

      case 'monitor_up':
        emailHtml = generateMonitorUpEmail(payload.data)
        emailSubject = `✅ Monitor Recovered: ${payload.data.monitorName}`
        break

      case 'monitor_created':
        emailHtml = generateMonitorCreatedEmail(payload.data)
        emailSubject = `🎯 Monitor Created: ${payload.data.monitorName}`
        break

      case 'ssl_expiry':
        emailHtml = generateSSLExpiryEmail(payload.data)
        const urgency = payload.data.daysUntilExpiry <= 7 ? '🚨 URGENT' : '⚠️'
        emailSubject = `${urgency} SSL Certificate Expiring: ${payload.data.monitorName}`
        break

      default:
        return NextResponse.json(
          { error: `Unknown notification type: ${(payload as any).type}` },
          { status: 400 }
        )
    }

    // Send email
    const result = await sendEmail({
      to: payload.email,
      subject: emailSubject,
      html: emailHtml,
    })

    if (!result.success) {
      console.error('Failed to send notification email:', result.error)
      return NextResponse.json(
        { error: 'Failed to send email notification', details: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Notification sent successfully',
      emailId: result.data?.id,
    })
  } catch (error) {
    console.error('Notification webhook error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * GET /api/notifications
 * Health check endpoint
 */
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    message: 'Notification webhook endpoint is active',
    supportedTypes: ['monitor_down', 'monitor_up', 'monitor_created', 'ssl_expiry'],
  })
}
