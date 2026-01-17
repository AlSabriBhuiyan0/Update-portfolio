import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ScrollProgress component - Visual progress indicator at the top of the page.
 * Shows how far the user has scrolled through the page with an animated progress bar.
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = (scrollTop / scrollableHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none">
      <motion.div
        className="h-full"
        style={{ 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, hsl(217, 91%, 50%) 0%, hsl(217, 91%, 60%) 50%, hsl(217, 91%, 70%) 100%)'
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}
