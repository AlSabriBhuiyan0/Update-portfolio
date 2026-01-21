# Analytics Setup Guide

This portfolio includes built-in analytics support for tracking page views, user interactions, and performance metrics.

## Supported Analytics Providers

### 1. Google Analytics 4 (Recommended)
- Free and widely used
- Comprehensive tracking and reporting
- Integration with Google services

### 2. Plausible Analytics (Privacy-friendly)
- Privacy-focused alternative
- GDPR compliant
- Lightweight and fast

You can use one or both providers simultaneously.

## Setup Instructions

### Step 1: Create Environment File

Create a `.env` file in the root directory (copy from `.env.example`):

```bash
cp .env.example .env
```

### Step 2: Configure Google Analytics 4

1. **Get your Measurement ID:**
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a new property or use an existing one
   - Navigate to Admin → Data Streams → Web
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to `.env` file:**
   ```env
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Step 3: Configure Plausible Analytics (Optional)

1. **Sign up at Plausible:**
   - Visit [Plausible.io](https://plausible.io/)
   - Create an account and add your domain

2. **Add to `.env` file:**
   ```env
   VITE_PLAUSIBLE_DOMAIN=sutharsan.is-a.dev
   ```

### Step 4: Enable/Disable Analytics

To disable analytics (useful for development):

```env
VITE_ANALYTICS_ENABLED=false
```

By default, analytics is enabled if a measurement ID or domain is provided.

### Step 5: Restart Development Server

After updating `.env`, restart your development server:

```bash
npm run dev
```

## What Gets Tracked

### Automatic Tracking

- **Page Views**: Automatically tracked on route changes
- **Web Vitals**: Performance metrics (LCP, FID, CLS, etc.) if web-vitals package is installed

### Custom Events

The following user interactions are tracked:

- **Hero Section:**
  - "View Projects" button click
  - "Let's Connect" button click
  - Resume download

- **Contact Form:**
  - Form submission (success/error)
  - Mailto fallback usage

### Manual Event Tracking

You can track custom events from any component:

```typescript
import { trackEvent } from '@/lib/analytics';

// Track a button click
trackEvent('click', 'Button', 'Download Resume');

// Track with value
trackEvent('purchase', 'E-commerce', 'Product Name', 29.99);
```

## Environment Variables Reference

| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `VITE_GA_MEASUREMENT_ID` | Google Analytics Measurement ID | No | `G-XXXXXXXXXX` |
| `VITE_PLAUSIBLE_DOMAIN` | Plausible Analytics domain | No | `sutharsan.is-a.dev` |
| `VITE_ANALYTICS_ENABLED` | Enable/disable analytics | No | `true` or `false` |

## Production Deployment

### Vercel/Netlify

Add environment variables in your deployment platform's settings:

1. Go to your project settings
2. Navigate to Environment Variables
3. Add the variables from your `.env` file
4. Redeploy your application

### GitHub Pages

For GitHub Pages, you'll need to use a different approach since environment variables aren't directly supported. Consider using build-time replacements or a different deployment method.

## Privacy & GDPR Compliance

- **Google Analytics**: Includes IP anonymization by default
- **Plausible**: Privacy-friendly, GDPR compliant by design
- Both respect user privacy preferences

## Troubleshooting

### Analytics not working?

1. **Check environment variables:**
   - Ensure `.env` file exists in the root directory
   - Verify variable names start with `VITE_`
   - Restart the development server after changes

2. **Check browser console:**
   - Look for analytics initialization messages in development mode
   - Check for any error messages

3. **Verify Measurement ID:**
   - Ensure Google Analytics Measurement ID is correct
   - Check that the property is active in Google Analytics

4. **Ad blockers:**
   - Some ad blockers may prevent analytics from loading
   - Test in incognito mode or disable ad blockers

## Testing

In development mode, analytics events are logged to the console. Check your browser's developer console to verify events are being tracked.

## Additional Resources

- [Google Analytics Documentation](https://developers.google.com/analytics)
- [Plausible Analytics Documentation](https://plausible.io/docs)
- [Web Vitals](https://web.dev/vitals/)
