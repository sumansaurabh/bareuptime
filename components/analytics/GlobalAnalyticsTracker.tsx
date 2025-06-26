"use client";

import { useEffect } from 'react';
import { useAnalytics } from '@/hooks/useAnalytics';

export function GlobalAnalyticsTracker() {
  const analytics = useAnalytics();

  useEffect(() => {
    // Track all button clicks globally
    const handleButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const button = target.closest('button, a[role="button"], .btn, a[data-analytics]');
      
      if (button) {
        const buttonText = button.textContent?.trim() || 'Unknown Button';
        const analyticsId = button.getAttribute('data-analytics');
        
        // Determine button location based on parent elements
        const section = button.closest('section, header, footer, nav, main');
        const sectionId = section?.id || section?.className.includes('header') ? 'header' :
                         section?.className.includes('footer') ? 'footer' :
                         section?.className.includes('hero') ? 'hero' : 'unknown';
        
        // Extract meaningful button name and location
        let buttonName = buttonText;
        let location = sectionId;
        
        // Use data-analytics attribute if available for more precise tracking
        if (analyticsId) {
          buttonName = analyticsId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        } else {
          // Fallback to text-based detection
          if (buttonText.includes('Start Monitoring')) {
            buttonName = 'Start Monitoring';
            location = sectionId === 'unknown' ? 'hero' : sectionId;
          } else if (buttonText.includes('Sign In')) {
            buttonName = 'Sign In';
          } else if (buttonText.includes('GitHub')) {
            buttonName = 'GitHub Link';
          } else if (buttonText.includes('Demo')) {
            buttonName = 'View Demo';
          } else if (buttonText.includes('Subscribe')) {
            buttonName = 'Newsletter Subscribe';
          }
        }
        
        analytics.trackButtonClick(buttonName, location);
      }
    };

    // Track all link clicks globally
    const handleLinkClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && !link.closest('button')) { // Avoid double tracking button links
        const linkText = link.textContent?.trim() || 'Unknown Link';
        const href = link.href;
        const isExternal = href && !href.startsWith(window.location.origin);
        
        analytics.trackEvent('link_click', {
          event_category: 'navigation',
          link_text: linkText,
          link_url: href,
          is_external: isExternal
        });
      }
    };

    // Track form submissions globally
    const handleFormSubmit = (event: SubmitEvent) => {
      const form = event.target as HTMLFormElement;
      const formInputs = form.querySelectorAll('input[type="email"], input[name*="email"]');
      
      if (formInputs.length > 0) {
        // This is likely an email form
        analytics.trackEvent('form_submission_attempt', {
          event_category: 'engagement',
          form_type: 'email_subscription'
        });
      } else {
        analytics.trackEvent('form_submission_attempt', {
          event_category: 'engagement',
          form_type: 'generic'
        });
      }
    };

    // Track scroll milestones
    let ticking = false;
    let maxScroll = 0;
    const scrollMilestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set();

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            scrollMilestones.forEach(milestone => {
              if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                analytics.trackEvent('scroll_depth', {
                  event_category: 'engagement',
                  scroll_percentage: milestone
                });
              }
            });
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Track section visibility with Intersection Observer
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id || 'unnamed-section';
          analytics.trackEvent('section_view', {
            event_category: 'engagement',
            section_name: sectionId
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all sections
    const sections = document.querySelectorAll('section[id], header, footer');
    sections.forEach(section => observer.observe(section));

    // Add event listeners
    document.addEventListener('click', handleButtonClick, true);
    document.addEventListener('click', handleLinkClick, true);
    document.addEventListener('submit', handleFormSubmit, true);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('click', handleButtonClick, true);
      document.removeEventListener('click', handleLinkClick, true);
      document.removeEventListener('submit', handleFormSubmit, true);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [analytics]);

  return null; // This component doesn't render anything
}
