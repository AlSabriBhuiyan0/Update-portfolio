import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { GradientButton } from "@/components/ui/gradient-button";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/spline";
import { trackEvent } from "@/lib/analytics";

const capabilities = [
  "Data Science",
  "Machine Learning",
  "Full-stack",
  "React",
  "Python",
  "Web Apps",
];

const rotatingTitles = [
  "Full-stack Developer",
  "Data Scientist",
  "Web Developer",
  "ML Engineer",
];

/**
 * Hero component - The main landing section with 3D robot model, rotating titles, and call-to-action buttons.
 * Features a Spline 3D scene, animated text, and smooth scroll navigation.
 */
export function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  const animationConfig = prefersReducedMotion 
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 20 };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToProjects = () => {
    trackEvent('click', 'Navigation', 'View Projects Button');
    scrollToSection("projects");
  };

  const scrollToContact = () => {
    trackEvent('click', 'Navigation', 'Lets Connect Button');
    scrollToSection("contact");
  };

  const downloadResume = () => {
    trackEvent('download', 'Resume', 'Download Resume Button');
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Alsabribhuiyan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={heroRef} className="h-screen w-full flex flex-col justify-center" role="banner" aria-label="Hero section">
      <div className="w-full h-full">
        <div className="w-full h-full bg-black relative overflow-hidden">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            aria-hidden={true}
          />
          
          <div className="flex h-full">
            {/* Left content */}
            <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-3">
                  Al Sabri Bhuiyan (Sunny)
                </h1>
                <div className="h-12 md:h-14 lg:h-16 mb-6 flex items-center">
                  <AnimatePresence mode="wait">
                    <motion.h2
                      key={currentTitleIndex}
                      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? {} : { opacity: 0, y: -20 }}
                      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
                      className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-300"
                    >
                      {rotatingTitles[currentTitleIndex]}
                    </motion.h2>
                  </AnimatePresence>
                </div>
                
                <p className="mt-4 text-lg md:text-xl text-neutral-300 max-w-2xl mb-8">
                  Data Scientist & Full-stack Developer — turning complex data into actionable insights and building user-friendly web applications with <strong>React, Next.js, Node.js</strong> and ML tools.
                </p>

                <div className="flex flex-wrap gap-2 mb-12">
                  {capabilities.map((cap, index) => (
                    <motion.span
                      key={cap}
                      className="font-mono text-sm text-neutral-400 px-3 py-1.5 bg-neutral-900/50 rounded border border-neutral-800 cursor-default transition-colors duration-200"
                      initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                      animate={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
                      transition={prefersReducedMotion ? { duration: 0 } : {
                        duration: 0.3,
                        delay: index * 0.1
                      }}
                      whileHover={!prefersReducedMotion ? {
                        scale: 1.08,
                        y: -2,
                        borderColor: "rgba(255, 255, 255, 0.3)",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        color: "rgba(255, 255, 255, 0.9)",
                        transition: { duration: 0.2, ease: "easeOut" }
                      } : {}}
                    >
                      {cap}
                    </motion.span>
                  ))}
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <GradientButton 
                    onClick={scrollToProjects}
                    aria-label="Scroll to projects section"
                    className="w-full md:w-auto"
                  >
                    View Projects
                  </GradientButton>
                  <GradientButton 
                    variant="variant" 
                    onClick={scrollToContact}
                    aria-label="Scroll to contact section"
                    className="w-full md:w-auto"
                  >
                    Let's Connect
                  </GradientButton>
                  <GradientButton 
                    variant="resume" 
                    onClick={downloadResume}
                    aria-label="Download resume"
                    className="w-full md:w-auto"
                  >
                    Download Resume
                  </GradientButton>
                </div>
              </motion.div>
            </div>

            {/* Right content - 3D Robot */}
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                y: y,
                opacity: opacity,
              }}
            >
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
