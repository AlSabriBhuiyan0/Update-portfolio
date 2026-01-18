import { useEffect } from 'react';

interface KeyboardShortcut {
  key: string;
  action: () => void;
  description: string;
}

/**
 * Custom hook for keyboard shortcuts navigation
 * Provides keyboard shortcuts for quick navigation throughout the portfolio
 */
export function useKeyboardShortcuts() {
  useEffect(() => {
    const shortcuts: KeyboardShortcut[] = [
      {
        key: 'h',
        action: () => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        description: 'Navigate to Home',
      },
      {
        key: 'a',
        action: () => {
          const element = document.getElementById('about');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        description: 'Navigate to About',
      },
      {
        key: 'e',
        action: () => {
          const element = document.getElementById('experience');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        description: 'Navigate to Experience',
      },
      {
        key: 's',
        action: () => {
          const element = document.getElementById('skills');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        description: 'Navigate to Skills',
      },
      {
        key: 'p',
        action: () => {
          const element = document.getElementById('projects');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        description: 'Navigate to Projects',
      },
      {
        key: 'c',
        action: () => {
          const element = document.getElementById('contact');
          element?.scrollIntoView({ behavior: 'smooth' });
        },
        description: 'Navigate to Contact',
      },
    ];

    const handleKeyDown = (event: KeyboardEvent) => {
      // Don't trigger shortcuts when user is typing in input/textarea
      const target = event.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return;
      }

      // Check for Escape key to close modals/menus
      if (event.key === 'Escape') {
        // Close any open modals or menus
        const modals = document.querySelectorAll('[role="dialog"]');
        modals.forEach((modal) => {
          const closeButton = modal.querySelector('[aria-label*="Close"], [aria-label*="close"]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        });

        // Close mobile menu if open
        const mobileMenu = document.querySelector('[data-state="open"]');
        if (mobileMenu) {
          const closeButton = mobileMenu.querySelector('button[aria-label*="Close"], button[aria-label*="close"]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        }
        return;
      }

      // Handle navigation shortcuts (only when not holding modifier keys)
      if (!event.ctrlKey && !event.metaKey && !event.altKey && !event.shiftKey) {
        const shortcut = shortcuts.find((s) => s.key.toLowerCase() === event.key.toLowerCase());
        if (shortcut) {
          event.preventDefault();
          shortcut.action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}
