import { motion, useReducedMotion } from "framer-motion";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const experiences = [
  {
    title: "Data Scientist & Full-stack Developer",
    company: "Freelance / Projects",
    period: "3+ years of experience",
    bullets: [
      "Turning complex data into actionable insights using **Python, TensorFlow, PyTorch, scikit-learn, and Keras**",
      "Building user-friendly web applications with **React, Next.js, Node.js** and modern front-end technologies",
      "Developing **real-time collaborative tools** and **resume builders** with live preview and PDF generation",
      "Data analysis and visualization with **Power BI, Tableau, Excel, and Deepnote**",
      "Working with **MongoDB, MariaDB** and REST APIs for full-stack projects",
      "Automation and testing with **Selenium** and continuous learning in **Machine Learning** and **Deep Learning**",
    ],
  },
];

/**
 * Experience component displays work experience in an animated timeline format.
 */
export function Experience() {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section id="experience" className="py-28 border-t border-border section-experience" role="region" aria-labelledby="experience-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="max-w-3xl"
        >
          <h2 id="experience-heading" className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
            Work Experience
          </h2>
          
          <motion.div 
            className="space-y-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                viewport={{ once: true }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
                className="relative pl-8 border-l-2 border-border rounded-lg p-4 -ml-4 hover:bg-primary/5 transition-colors duration-200"
                whileHover={!prefersReducedMotion ? {
                  x: 4,
                  transition: { duration: 0.3, ease: "easeOut" }
                } : {}}
              >
                <motion.div
                  initial={prefersReducedMotion ? {} : { scale: 0 }}
                  whileInView={prefersReducedMotion ? {} : { scale: 1 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.1 + 0.1 }}
                  className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-primary border-2 border-background z-10 shadow-lg shadow-primary/20"
                  whileHover={!prefersReducedMotion ? {
                    scale: 1.4,
                    boxShadow: "0 0 20px rgba(var(--primary), 0.4)",
                    transition: { type: "spring", stiffness: 400, damping: 10 }
                  } : {}}
                />
                <motion.div 
                  className="space-y-3"
                  initial={prefersReducedMotion ? {} : { opacity: 0 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.1 }}
                >
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      {exp.period}
                    </p>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <motion.li
                        key={bulletIndex}
                        initial={prefersReducedMotion ? {} : { opacity: 0, x: -10 }}
                        whileInView={prefersReducedMotion ? {} : { opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.2, delay: index * 0.1 + bulletIndex * 0.05 }}
                        className="text-foreground leading-relaxed text-sm"
                        whileHover={!prefersReducedMotion ? {
                          x: 4,
                          transition: { duration: 0.2 }
                        } : {}}
                      >
                        <span className="text-muted-foreground">• </span>
                        <span dangerouslySetInnerHTML={{ __html: bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
