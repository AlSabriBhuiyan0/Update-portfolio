// Analytics setup file
// To enable analytics, uncomment and configure one of the following:

// Google Analytics 4
/*
export const initGA = (measurementId: string) => {
  if (typeof window !== 'undefined' && !window.gtag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId);
  }
};

export const trackEvent = (action: string, category: string, label?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    });
  }
};
*/

// Plausible Analytics (Privacy-friendly alternative)
/*
export const initPlausible = () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.domain = 'your-domain.com';
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
  }
};
*/

// Usage:
// 1. Uncomment the analytics provider you want to use
// 2. Add your measurement ID or domain
// 3. Import and call init function in App.tsx
// 4. Use trackEvent for custom events

export const trackPageView = (path: string) => {
  // Placeholder for page view tracking
  if (typeof window !== 'undefined') {
    console.log('Page view:', path);
  }
};
