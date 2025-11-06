# Quick Start: Email Notifications

Get email notifications working in 5 minutes!

## Step 1: Get Resend API Key (2 minutes)

1. Go to [resend.com](https://resend.com) and sign up (free)
2. Click "API Keys" in the sidebar
3. Click "Create API Key"
4. Copy the key (starts with `re_`)

## Step 2: Configure Environment (1 minute)

Create `.env.local` in your project root:

```bash
# Required
RESEND_API_KEY=re_your_actual_key_here

# Optional (defaults shown)
EMAIL_FROM=onboarding@resend.dev
WEBHOOK_SECRET=your_random_secret
```

**For development**, you can use Resend's test domain: `onboarding@resend.dev`

**For production**, verify your domain in Resend first.

## Step 3: Test It! (2 minutes)

### Start the dev server:
```bash
npm run dev
```

### Send a test email:
```bash
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"email": "your@email.com"}'
```

### Or use the test script:
```bash
export TEST_EMAIL=your@email.com
./scripts/test-email-notifications.sh
```

## Step 4: Integrate with Your Monitoring

Send a webhook to trigger notifications:

```bash
curl -X POST http://localhost:3000/api/notifications \
  -H "Content-Type: application/json" \
  -d '{
    "type": "monitor_down",
    "email": "your@email.com",
    "data": {
      "monitorName": "My API",
      "monitorUrl": "https://api.example.com",
      "statusCode": 500,
      "errorMessage": "Internal Server Error",
      "timestamp": "2024-01-15 10:30:00 UTC"
    }
  }'
```

## Available Notification Types

### 1. Monitor Down (🚨 Critical)
```json
{
  "type": "monitor_down",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production API",
    "monitorUrl": "https://api.example.com",
    "statusCode": 500,
    "errorMessage": "Internal Server Error",
    "timestamp": "2024-01-15 10:30:00 UTC"
  }
}
```

### 2. Monitor Recovered (✅ Success)
```json
{
  "type": "monitor_up",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production API",
    "monitorUrl": "https://api.example.com",
    "downtime": "5 minutes",
    "timestamp": "2024-01-15 10:35:00 UTC"
  }
}
```

### 3. Monitor Created (🎯 Info)
```json
{
  "type": "monitor_created",
  "email": "user@example.com",
  "data": {
    "monitorName": "New Monitor",
    "monitorUrl": "https://example.com",
    "checkInterval": "5 minutes"
  }
}
```

### 4. SSL Expiry Warning (🔒 Warning)
```json
{
  "type": "ssl_expiry",
  "email": "user@example.com",
  "data": {
    "monitorName": "Production Site",
    "monitorUrl": "https://example.com",
    "daysUntilExpiry": 7,
    "expiryDate": "2024-01-22"
  }
}
```

## Troubleshooting

### Emails not sending?

1. **Check API key**: Make sure `RESEND_API_KEY` is set
   ```bash
   echo $RESEND_API_KEY
   ```

2. **Check logs**: Look for errors in terminal
   ```bash
   npm run dev
   # Watch for email-related errors
   ```

3. **Verify sender**: For production, verify your domain in Resend

4. **Check spam**: Test emails might go to spam folder

### Getting 401 Unauthorized?

Add webhook secret to your request:
```bash
curl -X POST http://localhost:3000/api/notifications \
  -H "x-webhook-secret: your_webhook_secret" \
  ...
```

## Next Steps

- 📖 Read the full [EMAIL_NOTIFICATIONS.md](EMAIL_NOTIFICATIONS.md) guide
- 🎨 Customize email templates in `/lib/email-templates/`
- 🔐 Set up webhook security with `WEBHOOK_SECRET`
- 🌐 Verify your domain for production use
- 📊 Monitor email delivery in [Resend Dashboard](https://resend.com/emails)

## Production Checklist

Before going live:

- [ ] Verify your domain in Resend
- [ ] Set production `EMAIL_FROM` address
- [ ] Configure `WEBHOOK_SECRET` for security
- [ ] Test all notification types
- [ ] Set up DNS records (SPF, DKIM, DMARC)
- [ ] Monitor email delivery rates

## Need Help?

- 📧 Email: support@bareuptime.co
- 📚 Docs: [resend.com/docs](https://resend.com/docs)
- 🐛 Issues: [GitHub Issues](https://github.com/sumansaurabh/bareuptime/issues)

---

**That's it!** You now have enterprise-grade email notifications running. 🎉
