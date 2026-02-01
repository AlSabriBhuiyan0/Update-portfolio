import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

// Update these URLs with your actual Fiverr and Upwork profile links
const HIRE_LINKS = {
  portfolio: "https://alsabribhuiyan.xyz",
  fiverr: "https://www.fiverr.com/alsabribhuiyan",
  upwork: "https://www.upwork.com/freelancers/~01abc",
};

const hirePlatforms = [
  {
    title: "Portfolio",
    description: "View my full portfolio, projects, and experience.",
    href: HIRE_LINKS.portfolio,
    icon: Globe,
    label: "alsabribhuiyan.xyz",
  },
  {
    title: "Fiverr",
    description: "Hire me on Fiverr for gigs — data analysis, web development, and more.",
    href: HIRE_LINKS.fiverr,
    icon: ExternalLink,
    label: "Fiverr Profile & Gigs",
  },
  {
    title: "Upwork",
    description: "Hire me on Upwork for remote projects — data science, full-stack, and consulting.",
    href: HIRE_LINKS.upwork,
    icon: ExternalLink,
    label: "Upwork Profile & Gigs",
  },
];

function GlowingCard({ children }: { children: React.ReactNode }) {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
  }, []);

  return (
    <div className="relative rounded-[1.25rem] md:rounded-[1.5rem] border-[0.75px] border-border p-2 md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={isTouchDevice}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative rounded-xl border-[0.75px] border-border/50">
        {children}
      </div>
    </div>
  );
}

/**
 * HiredRemotely component - Section for portfolio, Fiverr, and Upwork hire links.
 */
export function HiredRemotely() {
  return (
    <section
      id="hire"
      className="py-28 border-t border-border section-hire"
      role="region"
      aria-labelledby="hire-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
        >
          <h2
            id="hire-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            Hire Me Remotely
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Available for remote work. View my portfolio, Fiverr gigs, and Upwork profile to hire me for data analysis, web development, and consulting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hirePlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <motion.div
                  key={platform.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <GlowingCard>
                    <a
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                      aria-label={`${platform.title}: ${platform.label}`}
                    >
                      <Card className="h-full border-0 bg-background shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] flex flex-col transition-colors hover:bg-primary/5">
                        <CardHeader className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <CardTitle className="text-lg leading-tight min-h-[2.5rem]">
                            {platform.title}
                          </CardTitle>
                          <CardDescription className="text-sm">
                            {platform.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow flex items-end">
                          <span className="text-sm font-medium text-primary inline-flex items-center gap-1.5">
                            {platform.label}
                            <ExternalLink className="w-3.5 h-3.5" />
                          </span>
                        </CardContent>
                      </Card>
                    </a>
                  </GlowingCard>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
