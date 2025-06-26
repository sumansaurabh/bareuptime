"use client";

import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackSignUp,
  trackLogin,
  trackFeatureUse,
  trackScrollDepth,
} from '@/components/google-analytics';

export function useAnalytics() {
  const pathname = usePathname();

  // Track page views on route changes (App Router)
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  // Track scroll depth
  useEffect(() => {
    let ticking = false;
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set();

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const scrollPercent = Math.floor((scrollTop / docHeight) * 100);

          if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            milestones.forEach(milestone => {
              if (scrollPercent >= milestone && !trackedMilestones.has(milestone)) {
                trackedMilestones.add(milestone);
                trackScrollDepth(milestone);
              }
            });
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const analytics = {
    trackEvent: useCallback(trackEvent, []),
    trackButtonClick: useCallback(trackButtonClick, []),
    trackSignUp: useCallback(trackSignUp, []),
    trackLogin: useCallback(trackLogin, []),
    trackFeatureUse: useCallback(trackFeatureUse, []),
    trackCustomEvent: useCallback((eventName: string, parameters?: any) => {
      trackEvent(eventName, parameters);
    }, []),
  };

  return analytics;
}
