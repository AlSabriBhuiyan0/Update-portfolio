/**
 * EmailJS integration for contact form submissions.
 * 
 * To enable EmailJS:
 * 1. Sign up at https://www.emailjs.com/
 * 2. Create a service and template
 * 3. Add your public key and service ID to environment variables:
 *    - VITE_EMAILJS_SERVICE_ID
 *    - VITE_EMAILJS_TEMPLATE_ID
 * 4. Get your public key from EmailJS dashboard
 *    - VITE_EMAILJS_PUBLIC_KEY
 * 
 * If EmailJS is not configured, it will fallback to mailto link.
 */

import emailjs from '@emailjs/browser';

// Use environment variables if available, otherwise use production values
// EmailJS public keys are safe to use in frontend code
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wc3c8gl';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_rjxpnvz';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'P_tRk81zvaTHLR7kO';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: ContactFormData): Promise<{ success: boolean; error?: string; fallback?: boolean }> => {
  // Check if EmailJS is configured
  if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
    // Fallback to mailto if EmailJS is not configured
    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:sutharsanmail311@gmail.com?subject=${subject}&body=${body}`;
    return { success: false, fallback: true, error: 'EmailJS not configured. Opening email client instead. Please send the email manually.' };
  }

  try {
    await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'sutharsanmail311@gmail.com',
      },
      EMAILJS_PUBLIC_KEY
    );
    return { success: true };
  } catch (error) {
    console.error('EmailJS error:', error);
    // Fallback to mailto on error
    const subject = encodeURIComponent(`Portfolio Contact: ${data.name}`);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`);
    window.location.href = `mailto:sutharsanmail311@gmail.com?subject=${subject}&body=${body}`;
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email. Opening email client instead.',
    };
  }
};
