"use client"

import { useEffect } from 'react'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { GoogleTagManager } from "@next/third-parties/google";
import Script from 'next/script';
import Head from 'next/head';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    // Set metadata client-side
    document.title = 'BareUptime - Simple Uptime Monitoring';
    
    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Simple, reliable uptime monitoring solution');
    
    // Set generator meta
    let metaGenerator = document.querySelector('meta[name="generator"]');
    if (!metaGenerator) {
      metaGenerator = document.createElement('meta');
      metaGenerator.setAttribute('name', 'generator');
      document.head.appendChild(metaGenerator);
    }
    metaGenerator.setAttribute('content', 'v0.dev');
  }, []);

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
        <Script
          id="tawk-to-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/68593f5b08902e190c936783/1iue9uvq0';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `
          }}
        />
        
        {/* Script to remove Tawk.to branding */}
        <Script
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
        />
      </body>
    </html>
  )
}
