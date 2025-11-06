export interface MonitorUpEmailData {
  monitorName: string
  monitorUrl: string
  downtime: string
  timestamp: string
  incidentId?: string
  statusPageUrl?: string
}

export function generateMonitorUpEmail(data: MonitorUpEmailData): string {
  const {
    monitorName,
    monitorUrl,
    downtime,
    timestamp,
    incidentId,
    statusPageUrl,
  } = data

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Monitor Recovered</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Green Success -->
          <tr>
            <td style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                ✅ Monitor Recovered
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #065f46; font-weight: 600; font-size: 16px;">
                  🎉 Great news! Your monitor is back online and responding normally
                </p>
              </div>

              <h2 style="color: #111827; font-size: 20px; margin: 0 0 20px 0;">Recovery Details</h2>
              
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
                    <strong style="color: #374151;">URL:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                    <a href="${monitorUrl}" style="color: #3b82f6; text-decoration: none; word-break: break-all;">${monitorUrl}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Total Downtime:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: #dc2626; font-weight: 600;">
                    ${downtime}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #ffffff;">
                    <strong style="color: #374151;">Recovered At:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #ffffff; color: #111827;">
                    ${timestamp}
                  </td>
                </tr>
              </table>

              ${incidentId ? `
              <p style="color: #6b7280; font-size: 14px; margin: 0 0 16px 0;">
                <strong>Incident ID:</strong> ${incidentId}
              </p>
              ` : ''}

              ${statusPageUrl ? `
              <div style="text-align: center; margin: 30px 0;">
                <a href="${statusPageUrl}" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  View Status Page
                </a>
              </div>
              ` : ''}

              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin-top: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  💡 <strong>Recommended Actions:</strong><br>
                  1. Review incident logs to identify the root cause<br>
                  2. Implement preventive measures if needed<br>
                  3. Update your team on the resolution<br>
                  4. Consider setting up additional monitoring
                </p>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; text-align: center;">
                This is an automated notification from BareUptime
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
