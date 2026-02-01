import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Map, Scan, Settings, Wrench, Target, BookOpen, Heart, Code2 } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "Data Engineering & Analytics",
    description: "Leveraging data engineering and analytics to create web solutions that resonate with client goals and values.",
  },
  {
    icon: Scan,
    title: "Web Development",
    description: "Building user-friendly web applications with React, Next.js, Node.js, and modern front-end and back-end technologies.",
  },
  {
    icon: Settings,
    title: "Data Collection & Preprocessing",
    description: "Honing competencies in data collection and preprocessing for accurate, valuable contributions to healthcare and research studies.",
  },
  {
    icon: Wrench,
    title: "Scientific & Research Collaboration",
    description: "Collaborating with institutions like BSMMU and Incepta on diabetes research; commitment to meaningful scientific inquiry.",
  },
];

// Glowing Card Wrapper Component
function GlowingCard({ children, enable3D = false }: { children: React.ReactNode; enable3D?: boolean }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    setIsTouchDevice(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
  }, []);

  const animationConfig = prefersReducedMotion 
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 20 };

  return (
    <motion.div 
      className="relative rounded-[1.25rem] md:rounded-[1.5rem] border-[0.75px] border-border p-2 md:p-3"
      whileHover={enable3D && !isTouchDevice && !prefersReducedMotion ? {
        rotateY: 2,
        rotateX: -2,
        scale: 1.02,
        transition: animationConfig
      } : {}}
      style={{ perspective: enable3D ? 1000 : undefined }}
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={isTouchDevice}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <motion.div 
        className="relative rounded-xl border-[0.75px] border-border/50"
        whileHover={enable3D && !isTouchDevice && !prefersReducedMotion ? {
          boxShadow: "0px_0px_40px_0px_rgba(45,45,45,0.4)",
          transition: animationConfig
        } : {}}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * About component - Displays information about the developer's expertise and capabilities.
 * Features animated cards with icons showcasing key skills in robotics, perception, and navigation.
 */
export function About() {
  const aboutRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  
  const animationConfig = prefersReducedMotion 
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 300, damping: 20 };

  return (
    <section ref={aboutRef} id="about" className="py-28 border-t border-border section-about relative overflow-hidden" role="region" aria-labelledby="about-heading">
      <motion.div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ y: backgroundY }}
        aria-hidden="true"
      />
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Hello, I'm <strong>Al Sabri Bhuiyan (Sunny)</strong>. At <strong>Enact Business Solutions</strong>, our team leverages <strong>data engineering and analytics</strong> to create web solutions that resonate with our client's goals and values. My educational journey at <strong>North South University</strong>, focusing on <strong>Computer Science</strong>, has been instrumental in developing my technical acumen, particularly in data-driven environments.
              </p>
              
              <div className="flex items-center gap-3 text-muted-foreground my-4" aria-hidden="true">
                <div className="h-px flex-1 bg-border" />
                <Code2 className="w-5 h-5" aria-hidden="true" />
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <p className="text-foreground leading-relaxed">
                My recent collaboration with <strong>Incepta Company Ltd.</strong> and <strong>Bangabandhu Sheikh Mujib Medical University</strong> in facilitating diabetes research underlines my commitment to meaningful scientific inquiry. It's here that I've honed my competencies in <strong>data collection and preprocessing</strong>, ensuring accurate and valuable contributions to healthcare studies. <strong>Total experience: 4 years and 11 months.</strong>
              </p>
              
              <div className="flex items-center gap-3 text-muted-foreground my-4" aria-hidden="true">
                <div className="h-px flex-1 bg-border" />
                <Target className="w-5 h-5" aria-hidden="true" />
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                <p className="text-foreground leading-relaxed italic">
                I'm always looking for new opportunities to grow and collaborate with others in the tech space. Feel free to reach out!
              </p>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground my-4" aria-hidden="true">
                <div className="h-px flex-1 bg-border" />
                <Heart className="w-5 h-5" aria-hidden="true" />
                <div className="h-px flex-1 bg-border" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary" aria-hidden="true" />
                    What I Do
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I combine data engineering, analytics, and full-stack development to deliver end-to-end solutions — from data pipelines and ML models to responsive web apps. I care about clean code, clear communication, and products that users actually enjoy using.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
                    My Approach
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    I believe in iterative development, data-driven decisions, and continuous learning. I document my work, share knowledge, and stay curious about new tools and methods in data science and web development. I'm certified in Data Literacy, AI Fundamentals, Data Analyst, Data Scientist, Python, SQL, and more (DataCamp, AWS, Microsoft).
                  </p>
                </div>
              </div>
            </div>

            {/* Education Card - from LinkedIn */}
            <div>
              <GlowingCard>
                <Card className="h-full border-0 bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] flex flex-col">
                  <CardHeader className="flex-shrink-0">
                    <CardTitle className="text-lg leading-tight min-h-[2.5rem]">Education</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-3">
                    <div>
                      <h3 className="font-medium text-foreground">
                        B.Sc. Computer Science
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        North South University, Dhaka
                      </p>
                      <p className="text-sm text-muted-foreground">
                        2018 – 2024
                      </p>
                    </div>
                    <div className="pt-2 border-t border-border">
                      <h3 className="font-medium text-foreground text-sm">
                        High School Diploma, Science · GPA 4.83
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Dhaka Imperial College · 2014 – 2016
                      </p>
                    </div>
                    <div className="pt-1">
                      <p className="text-xs text-muted-foreground">
                        Middle School, Science · GPA 5 · Motijheel Government Boys' High School · 2003 – 2014
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </GlowingCard>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <GlowingCard key={index} enable3D={true}>
                  <Card className="h-full border-0 bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                        whileHover={!prefersReducedMotion ? {
                          scale: 1.1,
                          rotate: 5,
                          transition: animationConfig
                        } : {}}
                      >
                        <Icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <CardTitle className={`${feature.title.length > 10 ? 'text-base' : 'text-lg'} leading-tight min-h-[2.5rem]`}>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </GlowingCard>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
