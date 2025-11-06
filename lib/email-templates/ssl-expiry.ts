export interface SSLExpiryEmailData {
  monitorName: string
  monitorUrl: string
  daysUntilExpiry: number
  expiryDate: string
  certificateIssuer?: string
}

export function generateSSLExpiryEmail(data: SSLExpiryEmailData): string {
  const {
    monitorName,
    monitorUrl,
    daysUntilExpiry,
    expiryDate,
    certificateIssuer,
  } = data

  const urgencyLevel = daysUntilExpiry <= 7 ? 'critical' : daysUntilExpiry <= 14 ? 'warning' : 'info'
  const urgencyColor = urgencyLevel === 'critical' ? '#dc2626' : urgencyLevel === 'warning' ? '#f59e0b' : '#3b82f6'
  const urgencyBg = urgencyLevel === 'critical' ? '#fef2f2' : urgencyLevel === 'warning' ? '#fef3c7' : '#eff6ff'
  const urgencyText = urgencyLevel === 'critical' ? '#991b1b' : urgencyLevel === 'warning' ? '#92400e' : '#1e40af'

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SSL Certificate Expiry Warning</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f3f4f6;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, ${urgencyColor} 0%, ${urgencyColor}dd 100%); padding: 30px; text-align: center;">
              <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                🔒 SSL Certificate Expiry Warning
              </h1>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 30px;">
              <div style="background-color: ${urgencyBg}; border-left: 4px solid ${urgencyColor}; padding: 16px; margin-bottom: 24px; border-radius: 4px;">
                <p style="margin: 0; color: ${urgencyText}; font-weight: 600; font-size: 16px;">
                  ${urgencyLevel === 'critical' ? '🚨 URGENT:' : urgencyLevel === 'warning' ? '⚠️ WARNING:' : 'ℹ️ NOTICE:'} 
                  Your SSL certificate will expire in ${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''}
                </p>
              </div>

              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin: 0 0 24px 0;">
                ${urgencyLevel === 'critical' 
                  ? 'Your SSL certificate is about to expire very soon! This will cause security warnings and prevent users from accessing your site securely.' 
                  : urgencyLevel === 'warning'
                  ? 'Your SSL certificate is expiring soon. Please renew it as soon as possible to avoid any service interruptions.'
                  : 'This is a friendly reminder that your SSL certificate will expire soon. Plan to renew it before the expiry date.'}
              </p>

              <h2 style="color: #111827; font-size: 20px; margin: 0 0 20px 0;">Certificate Details</h2>
              
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
                    <strong style="color: #374151;">Domain:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                    <a href="${monitorUrl}" style="color: #3b82f6; text-decoration: none; word-break: break-all;">${monitorUrl}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Days Until Expiry:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #f9fafb; border-bottom: 1px solid #e5e7eb; color: ${urgencyColor}; font-weight: 600; font-size: 18px;">
                    ${daysUntilExpiry} day${daysUntilExpiry !== 1 ? 's' : ''}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
                    <strong style="color: #374151;">Expiry Date:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #ffffff; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">
                    ${expiryDate}
                  </td>
                </tr>
                ${certificateIssuer ? `
                <tr>
                  <td style="padding: 12px; background-color: #f9fafb;">
                    <strong style="color: #374151;">Certificate Issuer:</strong>
                  </td>
                  <td style="padding: 12px; background-color: #f9fafb; color: #111827;">
                    ${certificateIssuer}
                  </td>
                </tr>
                ` : ''}
              </table>

              <h2 style="color: #111827; font-size: 20px; margin: 24px 0 16px 0;">What You Need to Do</h2>
              
              <div style="margin-bottom: 16px;">
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">1️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Renew Your Certificate:</strong> Contact your SSL provider or use Let's Encrypt for free certificates
                  </p>
                </div>
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">2️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Install the New Certificate:</strong> Update your server configuration with the renewed certificate
                  </p>
                </div>
                <div style="display: flex; align-items: start; margin-bottom: 12px;">
                  <span style="color: #3b82f6; font-size: 20px; margin-right: 12px;">3️⃣</span>
                  <p style="margin: 0; color: #374151; font-size: 15px;">
                    <strong>Verify Installation:</strong> Test your SSL certificate to ensure it's properly installed and valid
                  </p>
                </div>
              </div>

              <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 16px; margin-top: 24px; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  💡 <strong>Pro Tip:</strong> Consider setting up automatic SSL renewal with Let's Encrypt or your hosting provider to avoid future expiry issues. Most modern hosting platforms offer this feature for free!
                </p>
              </div>

              <div style="text-align: center; margin: 30px 0;">
                <a href="https://letsencrypt.org/" style="display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 6px; font-weight: 600; font-size: 16px;">
                  Get Free SSL Certificate
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 24px 30px; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0 0 12px 0; color: #6b7280; font-size: 14px; text-align: center;">
                This is an automated SSL monitoring alert from BareUptime
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
