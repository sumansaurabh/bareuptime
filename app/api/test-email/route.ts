import { NextRequest, NextResponse } from 'next/server'
import { sendTestEmail } from '@/lib/email'

/**
 * POST /api/test-email
 * Send a test email to verify email service configuration
 */
export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    const result = await sendTestEmail(email)

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send test email', details: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json({
      success: true,
      message: `Test email sent successfully to ${email}`,
      emailId: result.data?.id,
    })
  } catch (error) {
    console.error('Test email error:', error)
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
 * GET /api/test-email
 * Information about the test email endpoint
 */
export async function GET() {
  return NextResponse.json({
    message: 'Test email endpoint',
    usage: 'POST with { "email": "your@email.com" } to send a test email',
    note: 'Requires RESEND_API_KEY environment variable to be set',
  })
}
