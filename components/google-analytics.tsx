"use client";

import { GoogleAnalytics as GA } from "@next/third-parties/google";

// Declare gtag for TypeScript
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: any
    ) => void;
  }
}

// Google Analytics event tracking functions
export const trackEvent = (
  eventName: string,
  parameters?: {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: any;
  }
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Common event tracking functions
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-T84N8LHVQB', {
      page_path: url,
    });
  }
};

export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
  });
};

export const trackSignUp = (method?: string) => {
  trackEvent('sign_up', {
    method: method || 'email',
  });
};

export const trackLogin = (method?: string) => {
  trackEvent('login', {
    method: method || 'email',
  });
};

export const trackFeatureUse = (featureName: string) => {
  trackEvent('feature_use', {
    event_category: 'engagement',
    feature_name: featureName,
  });
};

export const trackScrollDepth = (scrollPercentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    scroll_depth: scrollPercentage,
  });
};

export function GoogleAnalytics() {
  return <GA gaId="G-T84N8LHVQB" />;
}
