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
    page_source?: string;
    element_source?: string;
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

export const trackButtonClick = (
  buttonName: string, 
  location?: string, 
  pageSource?: string
) => {
  trackEvent('button_click', {
    event_category: 'engagement',
    event_label: buttonName,
    button_location: location,
    page_source: pageSource,
  });
};

export const trackCTAClick = (
  ctaName: string,
  source: string,
  location?: string
) => {
  trackEvent('cta_click', {
    event_category: 'conversion',
    event_label: ctaName,
    page_source: source,
    element_source: location,
  });
};

export const trackNavigation = (
  targetSection: string,
  source: string
) => {
  trackEvent('navigation_click', {
    event_category: 'navigation',
    event_label: targetSection,
    page_source: source,
  });
};

export const trackSignUp = (method?: string, source?: string) => {
  trackEvent('sign_up', {
    method: method || 'email',
    page_source: source,
  });
};

export const trackLogin = (method?: string) => {
  trackEvent('login', {
    method: method || 'email',
  });
};

export const trackFeatureUse = (featureName: string, source?: string) => {
  trackEvent('feature_use', {
    event_category: 'engagement',
    feature_name: featureName,
    page_source: source,
  });
};

export const trackScrollDepth = (scrollPercentage: number) => {
  trackEvent('scroll', {
    event_category: 'engagement',
    scroll_depth: scrollPercentage,
  });
};

// Utility function to get current page source
export const getCurrentPageSource = (): string => {
  if (typeof window === 'undefined') return 'server';
  
  const pathname = window.location.pathname;
  const search = window.location.search;
  
  // Check for UTM parameters first
  const urlParams = new URLSearchParams(search);
  const utmSource = urlParams.get('utm_source');
  const utmMedium = urlParams.get('utm_medium');
  const utmCampaign = urlParams.get('utm_campaign');
  
  if (utmSource) {
    return `utm_${utmSource}${utmMedium ? `_${utmMedium}` : ''}${utmCampaign ? `_${utmCampaign}` : ''}`;
  }
  
  // Check for referrer
  const referrer = document.referrer;
  if (referrer) {
    try {
      const referrerDomain = new URL(referrer).hostname;
      if (referrerDomain !== window.location.hostname) {
        return `referrer_${referrerDomain}`;
      }
    } catch (e) {
      // Ignore invalid referrer URLs
    }
  }
  
  // Default to page path
  switch (pathname) {
    case '/':
      return 'homepage';
    case '/pricing':
      return 'pricing_page';
    case '/features':
      return 'features_page';
    case '/about':
      return 'about_page';
    default:
      return pathname.replace('/', '').replace(/\//g, '_') || 'unknown_page';
  }
};

// Enhanced tracking functions with automatic source detection
export const trackWithSource = {
  buttonClick: (buttonName: string, location?: string, customSource?: string) => {
    trackButtonClick(buttonName, location, customSource || getCurrentPageSource());
  },
  
  ctaClick: (ctaName: string, location?: string, customSource?: string) => {
    trackCTAClick(ctaName, customSource || getCurrentPageSource(), location);
  },
  
  navigation: (targetSection: string, customSource?: string) => {
    trackNavigation(targetSection, customSource || getCurrentPageSource());
  },
  
  signUp: (method?: string, customSource?: string) => {
    trackSignUp(method, customSource || getCurrentPageSource());
  },
  
  featureUse: (featureName: string, customSource?: string) => {
    trackFeatureUse(featureName, customSource || getCurrentPageSource());
  },
  
  customEvent: (eventName: string, parameters?: any, customSource?: string) => {
    trackEvent(eventName, {
      ...parameters,
      page_source: customSource || getCurrentPageSource(),
    });
  }
};

export function GoogleAnalytics() {
  return <GA gaId="G-T84N8LHVQB" />;
}
