# Email Notification System Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    BareUptime Email System                       │
└─────────────────────────────────────────────────────────────────┘

┌──────────────────┐         ┌──────────────────┐         ┌──────────────────┐
│   Monitoring     │         │   BareUptime     │         │     Resend       │
│   Service        │────────▶│   Next.js App    │────────▶│   Email API      │
│ (api.bareuptime) │ Webhook │                  │  HTTPS  │                  │
└──────────────────┘         └──────────────────┘         └──────────────────┘
                                      │                             │
                                      │                             │
                                      ▼                             ▼
                             ┌──────────────────┐         ┌──────────────────┐
                             │  Email Templates │         │   User Inbox     │
                             │  - Monitor Down  │         │  📧 Gmail        │
                             │  - Monitor Up    │         │  📧 Outlook      │
                             │  - SSL Expiry    │         │  📧 Others       │
                             │  - Created       │         │                  │
                             └──────────────────┘         └──────────────────┘
```

## Data Flow

### 1. Monitor Status Change
```
Monitor Check → Status Change Detected → Webhook Triggered
```

### 2. Webhook Processing
```
POST /api/notifications
  ├─ Validate webhook secret
  ├─ Parse notification type
  ├─ Select email template
  └─ Send to Resend API
```

### 3. Email Delivery
```
Resend API
  ├─ Validate sender domain
  ├─ Process HTML template
  ├─ Send via SMTP
  └─ Track delivery status
```

## Component Architecture

### Email Service Layer (`/lib/email.ts`)
```typescript
┌─────────────────────────────────────┐
│         Email Service               │
├─────────────────────────────────────┤
│ • sendEmail(options)                │
│ • sendTestEmail(email)              │
│ • API key validation                │
│ • Error handling                    │
└─────────────────────────────────────┘
```

### Template Layer (`/lib/email-templates/`)
```typescript
┌─────────────────────────────────────┐
│       Email Templates               │
├─────────────────────────────────────┤
│ • monitor-down.ts                   │
│ • monitor-up.ts                     │
│ • monitor-created.ts                │
│ • ssl-expiry.ts                     │
│ • index.ts (exports)                │
└─────────────────────────────────────┘
```

### API Layer (`/app/api/`)
```typescript
┌─────────────────────────────────────┐
│         API Routes                  │
├─────────────────────────────────────┤
│ /api/notifications                  │
│   ├─ POST: Receive webhooks         │
│   └─ GET: Health check              │
│                                     │
│ /api/test-email                     │
│   ├─ POST: Send test email          │
│   └─ GET: Endpoint info             │
└─────────────────────────────────────┘
```

## Notification Flow Diagram

### Monitor Down Alert
```
┌─────────────┐
│  Monitor    │
│  Goes Down  │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Monitoring Service Detects Issue   │
│  • HTTP 500/503/timeout             │
│  • Connection refused               │
│  • DNS failure                      │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Send Webhook to /api/notifications │
│  {                                  │
│    type: "monitor_down",            │
│    email: "user@example.com",       │
│    data: { ... }                    │
│  }                                  │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Validate & Process Request         │
│  • Check webhook secret             │
│  • Validate payload                 │
│  • Select template                  │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Generate HTML Email                │
│  • Red alert styling                │
│  • Error details                    │
│  • Troubleshooting tips             │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Send via Resend API                │
│  • SMTP delivery                    │
│  • Track delivery                   │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  User Receives Email                │
│  🚨 Monitor Down Alert              │
└─────────────────────────────────────┘
```

### Monitor Recovery
```
┌─────────────┐
│  Monitor    │
│  Recovers   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Monitoring Service Detects Recovery│
│  • HTTP 200 OK                      │
│  • Service responding               │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Send Webhook to /api/notifications │
│  {                                  │
│    type: "monitor_up",              │
│    email: "user@example.com",       │
│    data: { downtime: "5 min" }      │
│  }                                  │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Generate Success Email             │
│  • Green success styling            │
│  • Downtime duration                │
│  • Recovery recommendations         │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  User Receives Email                │
│  ✅ Monitor Recovered               │
└─────────────────────────────────────┘
```

## Security Architecture

```
┌─────────────────────────────────────┐
│         Security Layers             │
├─────────────────────────────────────┤
│                                     │
│  1. Webhook Authentication          │
│     └─ x-webhook-secret header      │
│                                     │
│  2. API Key Protection              │
│     └─ Server-side only             │
│     └─ Environment variables        │
│                                     │
│  3. Input Validation                │
│     └─ Email format check           │
│     └─ Payload validation           │
│                                     │
│  4. Error Handling                  │
│     └─ No sensitive data exposure   │
│     └─ Graceful degradation         │
│                                     │
└─────────────────────────────────────┘
```

## Scalability Considerations

### Current Architecture
- **Synchronous**: Email sent immediately on webhook
- **Single instance**: One email per request
- **No queue**: Direct API calls

### Future Enhancements
```
┌─────────────────────────────────────┐
│      Scalability Options            │
├─────────────────────────────────────┤
│                                     │
│  1. Message Queue (Redis/RabbitMQ)  │
│     └─ Async processing             │
│     └─ Retry logic                  │
│                                     │
│  2. Batch Processing                │
│     └─ Group notifications          │
│     └─ Reduce API calls             │
│                                     │
│  3. Rate Limiting                   │
│     └─ Prevent abuse                │
│     └─ Throttle requests            │
│                                     │
│  4. Caching                         │
│     └─ Template caching             │
│     └─ Reduce processing time       │
│                                     │
└─────────────────────────────────────┘
```

## Error Handling Flow

```
┌─────────────────────────────────────┐
│      Request Received               │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Validate Webhook Secret            │
│  ├─ Valid → Continue                │
│  └─ Invalid → 401 Unauthorized      │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Validate Payload                   │
│  ├─ Valid → Continue                │
│  └─ Invalid → 400 Bad Request       │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Check API Key                      │
│  ├─ Configured → Continue           │
│  └─ Missing → 500 + Log Warning     │
└──────┬──────────────────────────────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Send Email                         │
│  ├─ Success → 200 OK                │
│  └─ Failure → 500 + Error Details   │
└─────────────────────────────────────┘
```

## Monitoring & Observability

### Logging Points
```typescript
1. Webhook received
   └─ Log: type, email, timestamp

2. Email generation
   └─ Log: template used, recipient

3. Resend API call
   └─ Log: success/failure, email ID

4. Errors
   └─ Log: error type, stack trace
```

### Metrics to Track
- Email delivery rate
- Average processing time
- Error rate by type
- Webhook authentication failures
- API key validation failures

## Integration Points

### External Services
```
┌─────────────────────────────────────┐
│    External Integrations            │
├─────────────────────────────────────┤
│                                     │
│  1. Resend API                      │
│     └─ Email delivery               │
│     └─ Delivery tracking            │
│                                     │
│  2. Monitoring Service              │
│     └─ api.bareuptime.co            │
│     └─ Webhook sender               │
│                                     │
│  3. Dashboard                       │
│     └─ app.bareuptime.co            │
│     └─ Email links target           │
│                                     │
└─────────────────────────────────────┘
```

## Technology Stack

```
┌─────────────────────────────────────┐
│       Technology Stack              │
├─────────────────────────────────────┤
│                                     │
│  Framework: Next.js 15              │
│  Runtime: Node.js 22                │
│  Language: TypeScript               │
│  Email Service: Resend              │
│  Deployment: Vercel                 │
│                                     │
└─────────────────────────────────────┘
```

## Performance Metrics

### Target Performance
- **Email Generation**: < 100ms
- **API Response Time**: < 500ms
- **Email Delivery**: < 5 seconds
- **Webhook Processing**: < 1 second

### Current Limitations
- **Resend Free Tier**: 100 emails/day
- **No Queue**: Synchronous processing
- **No Retry**: Single attempt per request

---

**Last Updated**: November 6, 2024  
**Version**: 1.0.0  
**Status**: Production Ready
