"use client";

import { useCallback, useEffect, useMemo } from 'react';
import { usePathname } from 'next/navigation';
import {
  trackEvent,
  trackPageView,
  trackButtonClick,
  trackSignUp,
  trackLogin,
  trackFeatureUse,
} from '@/components/google-analytics';

export function useAnalytics() {
  const pathname = usePathname();

  // Track page views on route changes (App Router)
  useEffect(() => {
    if (pathname) {
      trackPageView(pathname);
    }
  }, [pathname]);

  // Memoize analytics object to prevent unnecessary re-renders
  const analytics = useMemo(() => ({
    trackEvent: trackEvent,
    trackButtonClick: trackButtonClick,
    trackSignUp: trackSignUp,
    trackLogin: trackLogin,
    trackFeatureUse: trackFeatureUse,
    trackCustomEvent: (eventName: string, parameters?: any) => {
      trackEvent(eventName, parameters);
    },
  }), []);

  return analytics;
}
