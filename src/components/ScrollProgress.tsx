import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const sections = [
  { id: "hero", color: "hsl(217, 91%, 60%)" },
  { id: "about", color: "hsl(217, 91%, 60%)" },
  { id: "experience", color: "hsl(190, 90%, 50%)" },
  { id: "skills", color: "hsl(180, 90%, 50%)" },
  { id: "projects", color: "hsl(280, 70%, 60%)" },
  { id: "contact", color: "hsl(150, 90%, 50%)" },
];

/**
 * ScrollProgress component - Visual progress indicator at the top of the page.
 * Shows how far the user has scrolled with section-based color transitions.
 */
export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSectionColor, setCurrentSectionColor] = useState(sections[0].color);
  const progress = useMotionValue(0);
  const springProgress = useSpring(progress, { damping: 30, stiffness: 100 });

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      );
      const scrollTop = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      const scrollableHeight = documentHeight - windowHeight;
      
      // Calculate progress percentage
      let calculatedProgress = 0;
      if (scrollableHeight > 0) {
        calculatedProgress = (scrollTop / scrollableHeight) * 100;
      }
      
      // Ensure it reaches 100% when scrolled to bottom
      const clampedProgress = Math.min(100, Math.max(0, calculatedProgress));
      
      // If we're very close to the bottom (within 10px), set to 100%
      const isAtBottom = scrollTop + windowHeight >= documentHeight - 10;
      const finalProgress = isAtBottom ? 100 : clampedProgress;
      
      setScrollProgress(finalProgress);
      progress.set(finalProgress);

      // Determine current section for color based on scroll position
      // Use a simpler approach: find which section is most visible in viewport
      const viewportThreshold = windowHeight * 0.3; // 30% from top
      let foundSection = sections[0]; // Default to hero/about (blue)
      
      // Check sections in order (skip hero, check about, experience, skills, projects, contact)
      for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section.id);
        
        if (element) {
          const rect = element.getBoundingClientRect();
          
          // If section top has passed the viewport threshold, we're in this section
          if (rect.top <= viewportThreshold) {
            foundSection = section;
          } else {
            // If we haven't reached this section yet, stop checking
            break;
          }
        }
      }

      // Update color with smooth transition
      setCurrentSectionColor(foundSection.color);
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, [progress]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-valuemin={0} aria-valuemax={100} aria-label="Page scroll progress">
      <motion.div
        className="h-full transition-colors duration-500 ease-in-out"
        style={{ 
          width: `${scrollProgress}%`,
          backgroundColor: currentSectionColor,
        }}
        initial={{ width: 0 }}
        animate={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1, ease: "easeOut" }}
      />
    </div>
  );
}
