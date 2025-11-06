# Email Notification System

This document explains how to set up and use the email notification system for BareUptime.

## Overview

The email notification system sends automated emails when:
- 🚨 **Monitor goes down** - Immediate alert when a monitored endpoint becomes unreachable
- ✅ **Monitor recovers** - Notification when service is back online
- 🎯 **Monitor is created** - Confirmation email when a new monitor is set up
- 🔒 **SSL certificate expiring** - Warning emails before SSL certificates expire

## Setup Instructions

### 1. Get a Resend API Key

1. Sign up for a free account at [resend.com](https://resend.com)
2. Verify your domain or use their test domain for development
3. Generate an API key from the [API Keys page](https://resend.com/api-keys)
4. Copy the API key (starts with `re_`)

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```bash
# Email Service Configuration
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_FROM=notifications@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Optional: Webhook security
WEBHOOK_SECRET=your_random_secret_here
```

**Important Notes:**
- The `EMAIL_FROM` address must be verified in Resend
- For development, you can use Resend's test domain: `onboarding@resend.dev`
- Generate a webhook secret: `openssl rand -hex 32`

### 3. Verify Domain (Production)

For production use, verify your domain in Resend:

1. Go to [Resend Domains](https://resend.com/domains)
2. Add your domain
3. Add the provided DNS records to your domain
4. Wait for verification (usually takes a few minutes)

## API Endpoints

### 1. Notification Webhook (`POST /api/notifications`)

Receives webhook notifications and sends emails.

**Headers:**
```
Content-Type: application/json
x-webhook-secret: your_webhook_secret (optional)
```

**Request Body Examples:**

#### Monitor Down Alert
```json
{
  "type": "monitor_down",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production API",
    "monitorUrl": "https://api.example.com",
    "statusCode": 500,
    "errorMessage": "Internal Server Error",
    "timestamp": "2024-01-15 10:30:00 UTC",
    "incidentId": "inc_123456",
    "statusPageUrl": "https://status.example.com/inc_123456"
  }
}
```

#### Monitor Recovered
```json
{
  "type": "monitor_up",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production API",
    "monitorUrl": "https://api.example.com",
    "downtime": "15 minutes",
    "timestamp": "2024-01-15 10:45:00 UTC",
    "incidentId": "inc_123456",
    "statusPageUrl": "https://status.example.com/inc_123456"
  }
}
```

#### Monitor Created
```json
{
  "type": "monitor_created",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production API",
    "monitorUrl": "https://api.example.com",
    "checkInterval": "5 minutes",
    "statusPageUrl": "https://status.example.com/monitor_123",
    "dashboardUrl": "https://app.bareuptime.co/monitors/123"
  }
}
```

#### SSL Certificate Expiry
```json
{
  "type": "ssl_expiry",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production Website",
    "monitorUrl": "https://example.com",
    "daysUntilExpiry": 7,
    "expiryDate": "2024-01-22",
    "certificateIssuer": "Let's Encrypt"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Notification sent successfully",
  "emailId": "email_id_from_resend"
}
```

### 2. Test Email (`POST /api/test-email`)

Send a test email to verify configuration.

**Request:**
```json
{
  "email": "your@email.com"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Test email sent successfully to your@email.com",
  "emailId": "email_id_from_resend"
}
```

## Testing

### Test with cURL

#### Send a test email:
```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com"}'
```

#### Test monitor down notification:
```bash
curl -X POST http://localhost:3000/api/notifications \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: your_webhook_secret" \
  -d '{
    "type": "monitor_down",
    "email": "your@email.com",
    "data": {
      "monitorName": "Test Monitor",
      "monitorUrl": "https://example.com",
      "statusCode": 500,
      "errorMessage": "Internal Server Error",
      "timestamp": "2024-01-15 10:30:00 UTC"
    }
  }'
```

#### Test monitor recovered notification:
```bash
curl -X POST http://localhost:3000/api/notifications \
  -H "Content-Type: application/json" \
  -H "x-webhook-secret: your_webhook_secret" \
  -d '{
    "type": "monitor_up",
    "email": "your@email.com",
    "data": {
      "monitorName": "Test Monitor",
      "monitorUrl": "https://example.com",
      "downtime": "5 minutes",
      "timestamp": "2024-01-15 10:35:00 UTC"
    }
  }'
```

## Integration with Monitoring Service

To integrate with your monitoring service (e.g., the external API at `api.bareuptime.co`):

1. Configure the monitoring service to send webhooks to your notification endpoint
2. Set the webhook URL: `https://yourdomain.com/api/notifications`
3. Include the webhook secret in the `x-webhook-secret` header
4. Send notifications in the format described above

## Email Templates

All email templates are located in `/lib/email-templates/`:

- `monitor-down.ts` - Critical alert for service downtime
- `monitor-up.ts` - Recovery notification
- `monitor-created.ts` - Welcome email for new monitors
- `ssl-expiry.ts` - SSL certificate expiration warnings

Templates are fully responsive and work across all major email clients.

## Customization

### Modify Email Templates

Edit the template files in `/lib/email-templates/` to customize:
- Colors and branding
- Content and messaging
- Call-to-action buttons
- Footer information

### Add New Notification Types

1. Create a new template in `/lib/email-templates/`
2. Export it from `/lib/email-templates/index.ts`
3. Add the new type to `/app/api/notifications/route.ts`

## Troubleshooting

### Email not sending

1. **Check API key**: Verify `RESEND_API_KEY` is set correctly
2. **Verify sender**: Ensure `EMAIL_FROM` is verified in Resend
3. **Check logs**: Look for errors in the console/server logs
4. **Test endpoint**: Use the `/api/test-email` endpoint first

### Emails going to spam

1. Verify your domain in Resend
2. Add SPF, DKIM, and DMARC records
3. Use a professional sender address
4. Avoid spam trigger words in subject lines

### Webhook authentication failing

1. Verify `WEBHOOK_SECRET` matches on both ends
2. Check the `x-webhook-secret` header is being sent
3. Ensure the secret doesn't have extra whitespace

## Production Checklist

- [ ] Domain verified in Resend
- [ ] DNS records (SPF, DKIM, DMARC) configured
- [ ] Environment variables set in production
- [ ] Webhook secret configured and secure
- [ ] Test emails sent successfully
- [ ] Monitor all notification types
- [ ] Set up email delivery monitoring in Resend dashboard

## Rate Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month

For higher volumes, upgrade to a paid plan at [resend.com/pricing](https://resend.com/pricing).

## Support

- **Resend Documentation**: [resend.com/docs](https://resend.com/docs)
- **BareUptime Support**: support@bareuptime.co
- **GitHub Issues**: [github.com/sumansaurabh/bareuptime/issues](https://github.com/sumansaurabh/bareuptime/issues)

## Security Best Practices

1. **Never commit API keys** - Use environment variables
2. **Use webhook secrets** - Verify incoming webhook requests
3. **Validate input** - Always validate email addresses and data
4. **Rate limiting** - Implement rate limiting on webhook endpoints
5. **Monitor usage** - Track email sending in Resend dashboard
6. **Rotate secrets** - Periodically rotate webhook secrets

## License

This email notification system is part of BareUptime and follows the same license.
