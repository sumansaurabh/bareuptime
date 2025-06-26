# Analytics Implementation - BareUptime

## Overview

This project now uses a **global analytics tracking system** that automatically captures user interactions without requiring manual event tracking on each element. This approach is much cleaner and more maintainable than adding individual tracking calls to every button and link.

## How It Works

### 1. Global Analytics Tracker
The `GlobalAnalyticsTracker` component is automatically loaded in the root layout and provides:

- **Automatic button click tracking** - All buttons and links are tracked automatically
- **Scroll depth tracking** - Tracks when users scroll to 25%, 50%, 75%, 90%, and 100% of the page
- **Section visibility tracking** - Tracks when users view different sections of the page
- **Form submission tracking** - Automatically tracks form submissions
- **Link click tracking** - Tracks both internal and external link clicks

### 2. Google Analytics Setup
- Uses Google Analytics 4 (GA4) with measurement ID: `G-T84N8LHVQB`
- Proper integration with Next.js third-party components
- Includes TypeScript declarations for `gtag` function

### 3. Events Being Tracked

#### Automatic Events:
- `button_click` - All button interactions with button name and location
- `link_click` - All link clicks with URL and external link detection
- `scroll_depth` - Scroll milestones (25%, 50%, 75%, 90%, 100%)
- `section_view` - When users view different page sections
- `form_submission_attempt` - When forms are submitted

#### Custom Events:
- Newsletter subscriptions (success, duplicate, error)
- Page views on route changes
- Feature usage tracking

## Implementation Details

### Files Structure:
```
components/
  google-analytics.tsx          # GA4 component and tracking functions
  analytics/
    GlobalAnalyticsTracker.tsx  # Global event listeners
    AnalyticsTracker.tsx        # Section-specific tracking wrapper

hooks/
  useAnalytics.ts              # Analytics hook with tracking functions
  useCustomTracking.ts         # Utility hook for custom tracking

app/
  layout.tsx                   # Root layout with analytics components
```

### Key Components:

1. **GoogleAnalytics Component**: Loads GA4 and provides tracking functions
2. **GlobalAnalyticsTracker**: Invisible component that adds global event listeners
3. **useAnalytics Hook**: Provides tracking functions and handles page view tracking
4. **useCustomTracking Hook**: Utility for manual tracking when needed

## Usage

### For Automatic Tracking (Recommended)
Most interactions are tracked automatically. For better precision, add data attributes:

```tsx
// Automatic tracking with data attributes for precision
<button data-analytics="hero-cta-signup">Sign Up Now</button>
<a href="/demo" data-analytics="demo-link">View Demo</a>
```

### For Manual Tracking (When Needed)
Use the custom tracking hook for specific events:

```tsx
import { useCustomTracking } from '@/hooks/useCustomTracking';

function MyComponent() {
  const { trackCustomEvent } = useCustomTracking();

  const handleSpecialAction = () => {
    trackCustomEvent('special_feature_used', {
      feature_name: 'advanced_settings',
      user_type: 'premium'
    });
  };

  return <button onClick={handleSpecialAction}>Special Action</button>;
}
```

### For Section Tracking
Wrap sections that need specific tracking:

```tsx
import { AnalyticsTracker } from '@/components/analytics/AnalyticsTracker';

<AnalyticsTracker eventName="pricing_section_viewed" sectionName="pricing">
  <section id="pricing">
    {/* Content */}
  </section>
</AnalyticsTracker>
```

## Benefits of This Approach

1. **Maintainable**: No need to add tracking to each element manually
2. **Consistent**: All interactions are tracked in a uniform way
3. **Performance**: Single event listener per event type
4. **Flexible**: Can still add custom tracking when needed
5. **Clean Code**: No analytics code cluttering your components

## Analytics Data Available

### In Google Analytics, you can track:
- User journey through the site
- Most clicked buttons and links
- Content engagement (scroll depth)
- Form conversion rates
- External link clicks
- Page performance metrics

### Custom Events You Can Query:
- `button_click` with parameters: `button_name`, `location`
- `scroll_depth` with parameter: `scroll_percentage`
- `section_view` with parameter: `section_name`
- `newsletter_subscription_success` with parameter: `email_domain`
- And many more...

## Testing Analytics

1. Open Google Analytics Real-Time reports
2. Navigate your site and interact with buttons/links
3. Check the Events tab in Real-Time to see events firing
4. Use browser console to verify `gtag` function is available

## Best Practices

1. Use descriptive `data-analytics` attributes for important CTAs
2. Test analytics in development using GA4 DebugView
3. Review analytics regularly to ensure all important events are captured
4. Keep custom tracking minimal - let the global tracker handle most cases
