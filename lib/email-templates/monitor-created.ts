export interface MonitorCreatedEmailData {
  monitorName: string
  monitorUrl: string
  checkInterval: string
  statusPageUrl?: string
  dashboardUrl?: string
}

export function generateMonitorCreatedEmail(data: MonitorCreatedEmailData): string {
  const {
    monitorName,
    monitorUrl,
    checkInterval,
    statusPageUrl,
    dashboardUrl,
  } = data

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monitor Created Successfully</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Blue Gradient -->
          <tr>
            <td style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                🎯 Monitor Created Successfully
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-weight: 600; font-size: 16px;">
                  ✨ Your monitor is now active and checking your endpoint
                </p>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                Great! We've successfully set up monitoring for your endpoint. BareUptime will now continuously check your service and alert you immediately if any issues are detected.
              </p>

              <h2 style="color: #111827; font-size: 20px; margin: 0 0 20px 0;">Monitor Configuration</h2>
              
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Monitor Name:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #111827;">
                    ${monitorName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Monitored URL:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                    <a href="${monitorUrl}" style="color: #3b82f6; text-decoration: none; word-break: break-all;">${monitorUrl}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb;">
                    <strong style="color: #374151;">Check Interval:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #f9fafb; color: #111827;">
                    ${checkInterval}
                  </td>
                </tr>
              </table>

              <h2 style="color: #111827; font-size: 20px; margin: 24px 0 16px 0;">What Happens Next?</h2>
              
              <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">1️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Continuous Monitoring:</strong> We'll check your endpoint every ${checkInterval}
                  </p>
                </div>
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">2️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Instant Alerts:</strong> Get notified immediately via email, mobile app, or webhook if issues are detected
                  </p>
                </div>
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">3️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Detailed Reports:</strong> Access uptime statistics, response times, and incident history
                  </p>
                </div>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                ${dashboardUrl ? `
                <a href="${dashboardUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; margin-right: 12px;">
                  View Dashboard
                </a>
                ` : ''}
                ${statusPageUrl ? `
                <a href="${statusPageUrl}" style="display: inline-block; background-color: #ffffff; color: #3b82f6; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px; border: 2px solid #3b82f6;">
                  View Status Page
                </a>
                ` : ''}
              </div>

              <div style="background-color: #fef3c7; border-left: 4px solid #f59e0b; padding: 16px; margin-top: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #92400e; font-size: 14px;">
                  💡 <strong>Pro Tip:</strong> Download our mobile apps (iOS & Android) to receive push notifications and manage your monitors on the go!
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; text-align: center;">
                Need help? Contact us at <a href="mailto:support@bareuptime.co" style="color: #3b82f6; text-decoration: none;">support@bareuptime.co</a>
              </p>
              <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
                BareUptime - Enterprise-Grade Uptime Monitoring<br>
                <a href="https://bareuptime.co" style="color: #3b82f6; text-decoration: none;">bareuptime.co</a> | 
                <a href="https://app.bareuptime.co" style="color: #3b82f6; text-decoration: none;">Dashboard</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `
}
