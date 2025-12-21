# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BareUptime is a DIY uptime monitoring system built as a Next.js 15 application. The project aims to provide enterprise-grade uptime monitoring at startup-friendly prices. It's a marketing/landing page with plans to integrate with Supabase for backend services.

## Tech Stack

- **Framework**: Next.js 15 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Library**: Radix UI components via shadcn/ui
- **Database**: Supabase (configured but not yet heavily integrated)
- **Analytics**: Vercel Analytics, Speed Insights, Google Analytics
- **Theme**: next-themes for dark/light mode
- **Animation**: Framer Motion, react-spring, tsparticles
- **Forms**: react-hook-form with Zod validation

## Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Export static build
npm run export
```

## Project Structure

```
app/                    # Next.js App Router pages
├── blogs/             # Blog posts as pages
├── components/        # App-specific components
├── enterprise/        # Enterprise landing page
├── features/          # Features page
├── globals.css        # Global styles and Tailwind
├── layout.tsx         # Root layout with SEO, analytics
└── page.tsx           # Main landing page (very large ~26k tokens)

components/            # Reusable UI components
├── ui/               # shadcn/ui components
└── theme-provider.tsx # Theme context provider

lib/
├── supabaseClient.ts  # Supabase client configuration
└── utils.ts           # Utility functions (likely shadcn utils)

hooks/                 # Custom React hooks
├── usePerformance.ts  # Performance optimization hooks
├── useAnalytics.ts    # Analytics tracking hooks
└── use-*.ts          # Various UI hooks

public/               # Static assets
styles/              # Additional CSS files
```

## Key Architecture Patterns

### Component Architecture
- Uses shadcn/ui design system extensively
- Heavy use of Radix UI primitives for accessibility
- Components are organized with clear separation between UI components and app-specific components
- Lazy loading implemented for heavy components (DashboardMockup, MonitoringAnimation)
- Memoization used for performance optimization (ActivityIcon, AndroidIcon)

### Performance Optimizations
- Dynamic imports for code splitting
- Image optimization disabled (`unoptimized: true`)
- Custom webpack configuration for CSS extraction
- Intersection Observer hooks for performance tracking
- Preloading of critical resources in layout
- DNS prefetching for external resources

### SEO & Meta Configuration
- Comprehensive metadata configuration in layout.tsx
- Structured data (JSON-LD) for better search visibility
- Open Graph and Twitter Card metadata
- Robots.txt and sitemap generation
- Security headers configured in next.config.mjs

### State Management
- React hooks for local state management
- Supabase client for potential backend integration
- Theme state managed via next-themes
- No global state management library (Redux, Zustand) currently used

## Important Files

- `app/page.tsx` - Main landing page (extremely large file ~26k tokens)
- `app/layout.tsx` - Root layout with comprehensive SEO and analytics setup
- `next.config.mjs` - Next.js configuration with security headers and webpack customization
- `lib/supabaseClient.ts` - Database client configuration
- `components.json` - shadcn/ui configuration

## Configuration Notes

- TypeScript paths configured with `@/*` mapping to project root
- Build errors and ESLint errors are ignored in production builds
- Images are unoptimized (likely for static deployment)
- Supabase credentials are exposed in client-side code (public keys only)
- Tailwind configured with custom colors and animations

## Development Guidelines

- Follow shadcn/ui component patterns when adding new UI elements
- Use TypeScript strictly (strict: true in tsconfig)
- Implement performance optimizations (lazy loading, memoization) for new heavy components
- Maintain SEO best practices when adding new pages
- Use the established hook patterns for analytics tracking and performance monitoring

## Deployment

The project appears configured for Vercel deployment (vercel.json present, Vercel analytics integrated). Static export capability suggests it can also be deployed as static site.