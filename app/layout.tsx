import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'BareUptime - Simple Uptime Monitoring',
  description: 'Simple, reliable uptime monitoring solution',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleTagManager gtmId="G-T84N8LHVQB" />
        {/* Tawk.to Live Chat */}
        
        {/* Script to remove Tawk.to branding */}
        {/* <Script
          id="remove-tawk-branding"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              setTimeout(function() {
                function removeTawkBranding() {
                  try {
                    // Find all iframes and check their content for "Powered by tawk.to"
                    const allIframes = document.querySelectorAll('iframe');
                    
                    allIframes.forEach(function(iframe) {
                      try {
                        // Try to access iframe content
                        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
                        
                        if (iframeDoc) {
                          // Check if this iframe contains "Powered by tawk.to" text
                          const bodyText = iframeDoc.body ? iframeDoc.body.textContent || iframeDoc.body.innerText : '';
                          
                          if (bodyText.toLowerCase().includes('powered by tawk.to')) {
                            // Remove the entire iframe
                            iframe.remove();
                            console.log('Removed iframe containing Tawk.to branding');
                          }
                        }
                      } catch (e) {
                        // If we can't access iframe content due to cross-origin, 
                        // check if it's a tawk.to iframe by URL and has small dimensions (likely branding)
                        if (iframe.src && iframe.src.includes('tawk.to')) {
                          const rect = iframe.getBoundingClientRect();
                          // If it's a small iframe (likely branding), remove it
                          if (rect.height < 100 && rect.width < 300) {
                            iframe.remove();
                            console.log('Removed small tawk.to iframe (likely branding)');
                          }
                        }
                      }
                    });
                    
                  } catch (error) {
                    console.log('Error removing Tawk branding iframe:', error);
                  }
                }
                
                // Run the function after 10 seconds
                removeTawkBranding();
                
                // Also run it periodically in case new iframes are created
                setInterval(removeTawkBranding, 5000);
                
              }, 1500);
            `
          }}
        /> */}
      </body>
    </html>
  )
}
