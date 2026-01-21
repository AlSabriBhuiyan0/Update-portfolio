/**
 * Analytics setup file
 * Supports Google Analytics 4 and Plausible Analytics
 * Google Analytics Measurement ID is hardcoded below
 * You can also override via environment variable VITE_GA_MEASUREMENT_ID
 */

// TypeScript declarations for gtag
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

// Analytics configuration
// Hardcoded Google Analytics Measurement ID
// Update this value if you need to change your Measurement ID
const GA_MEASUREMENT_ID = 'G-7V59M719C1' || import.meta.env.VITE_GA_MEASUREMENT_ID;
const PLAUSIBLE_DOMAIN = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const ANALYTICS_ENABLED = import.meta.env.VITE_ANALYTICS_ENABLED !== 'false';

/**
 * Initialize Google Analytics 4
 * @param measurementId - Google Analytics Measurement ID (e.g., G-XXXXXXXXXX)
 */
export const initGA = (measurementId: string) => {
  if (typeof window === 'undefined' || !measurementId) return;

  // Prevent duplicate initialization
  if (window.gtag) {
    console.warn('Google Analytics already initialized');
    return;
  }

  try {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer!.push(args);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
      send_page_view: true,
    });

    if (import.meta.env.DEV) {
      console.log('Google Analytics initialized:', measurementId);
    }
  } catch (error) {
    console.error('Failed to initialize Google Analytics:', error);
  }
};

/**
 * Initialize Plausible Analytics (Privacy-friendly alternative)
 * @param domain - Your domain name (e.g., sutharsan.is-a.dev)
 */
export const initPlausible = (domain: string) => {
  if (typeof window === 'undefined' || !domain) return;

  // Prevent duplicate initialization
  if (window.plausible) {
    console.warn('Plausible Analytics already initialized');
    return;
  }

  try {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);

    if (import.meta.env.DEV) {
      console.log('Plausible Analytics initialized:', domain);
    }
  } catch (error) {
    console.error('Failed to initialize Plausible Analytics:', error);
  }
};

/**
 * Track a custom event
 * @param action - Event action name
 * @param category - Event category
 * @param label - Optional event label
 * @param value - Optional numeric value
 */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window === 'undefined' || !ANALYTICS_ENABLED) return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }

  // Plausible Analytics
  if (window.plausible) {
    window.plausible(action, {
      props: {
        category,
        label,
        value,
      },
    });
  }

  if (import.meta.env.DEV) {
    console.log('Event tracked:', { action, category, label, value });
  }
};

/**
 * Track page view
 * @param path - Page path (e.g., /about, /projects)
 */
export const trackPageView = (path: string) => {
  if (typeof window === 'undefined' || !ANALYTICS_ENABLED) return;

  // Google Analytics
  if (window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path,
      page_title: document.title,
    });
  }

  // Plausible Analytics automatically tracks page views
  // But we can manually trigger if needed
  if (window.plausible) {
    window.plausible('pageview', {
      props: {
        path,
      },
    });
  }

  if (import.meta.env.DEV) {
    console.log('Page view tracked:', path);
  }
};

/**
 * Initialize analytics based on environment variables
 * Call this once in App.tsx or main.tsx
 */
export const initAnalytics = () => {
  if (typeof window === 'undefined' || !ANALYTICS_ENABLED) {
    if (import.meta.env.DEV) {
      console.log('Analytics disabled or not in browser environment');
    }
    return;
  }

  // Initialize Google Analytics if measurement ID is provided
  if (GA_MEASUREMENT_ID) {
    initGA(GA_MEASUREMENT_ID);
  }

  // Initialize Plausible Analytics if domain is provided
  if (PLAUSIBLE_DOMAIN) {
    initPlausible(PLAUSIBLE_DOMAIN);
  }

  // Track initial page view
  trackPageView(window.location.pathname);
};
