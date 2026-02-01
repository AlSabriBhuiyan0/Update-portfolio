import { motion, useReducedMotion } from "framer-motion";

// Skills from LinkedIn profile: linkedin.com/in/alsabribhuiyan
// Plus technical stack from experience (Python, React, etc.)
const skillCategories = [
  {
    title: "Engineering & Tech",
    skills: [
      "Engineering",
      "Software",
      "IoT",
      "Automation",
      "Blockchain",
      "Computer Science",
    ],
  },
  {
    title: "Analytics & Data",
    skills: [
      "Analytics",
      "Data Collection",
      "Calculations",
      "Python",
      "SQL",
      "Excel",
    ],
  },
  {
    title: "Collaboration & Research",
    skills: [
      "Collaboration",
      "Research",
      "Science",
      "Healthcare",
    ],
  },
  {
    title: "Sales & Marketing",
    skills: [
      "Sales",
      "Selling",
      "Digital Marketing",
      "Marketing",
      "Campaigns",
    ],
  },
  {
    title: "Web & Development",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Operations & Tools",
    skills: [
      "Operations",
      "Benefits",
      "Digital",
      "Pressure",
      "GitHub",
    ],
  },
];

/**
 * Skills component - Displays technical and professional skills from LinkedIn profile.
 */
export function Skills() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="skills" className="py-28 border-t border-border section-skills" role="region" aria-labelledby="skills-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
        >
          <h2 id="skills-heading" className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Skills
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A comprehensive toolkit from my <a href="https://www.linkedin.com/in/alsabribhuiyan/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn profile</a> — engineering, analytics, research, sales, and web development.
          </p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
              >
                <motion.h3
                  className="text-base font-semibold text-foreground"
                  initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, delay: index * 0.1 }}
                  whileHover={!prefersReducedMotion ? {
                    scale: 1.05,
                    x: 2,
                    transition: { duration: 0.2, ease: "easeOut" }
                  } : {}}
                >
                  {category.title}
                </motion.h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="text-xs text-muted-foreground font-mono px-2.5 py-1 bg-secondary rounded border border-border hover:border-primary/50 hover:bg-primary/5 hover:text-foreground cursor-default focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors duration-200"
                      tabIndex={0}
                      role="text"
                      aria-label={`Skill: ${skill}`}
                      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.9 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={prefersReducedMotion ? { duration: 0 } : {
                        duration: 0.2,
                        delay: index * 0.1 + skillIndex * 0.03
                      }}
                      whileHover={!prefersReducedMotion ? {
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2, ease: "easeOut" }
                      } : {}}
                      whileFocus={!prefersReducedMotion ? {
                        scale: 1.1,
                        y: -2,
                        transition: { duration: 0.2, ease: "easeOut" }
                      } : {}}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
