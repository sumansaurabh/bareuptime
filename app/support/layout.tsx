import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support Center - Get Help with BareUptime',
  description: 'Need help with BareUptime? Submit a support ticket or report an error. Our team provides 24-hour response time for all support requests.',
  keywords: [
    'BareUptime support',
    'uptime monitoring help',
    'technical support',
    'customer service',
    'error reporting',
    'bug reports',
    'monitoring support'
  ],
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
