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

// Work experience from LinkedIn: https://www.linkedin.com/in/alsabribhuiyan/
const experiences = [
  {
    title: "Sales Associate",
    company: "Ryo Gas",
    period: "Dec 2025 – Present · Dhaka, Bangladesh",
    bullets: [
      "Engaged in selling **IoT and software solutions** for managing gas stations, focusing on LPG, gas, and oil calculations.",
      "Conducted **digital marketing campaigns** to generate leads and promote Ryo Gas's innovative software.",
      "Collaborated with potential customers to understand their needs and demonstrate the benefits of **automation for gas pump operations**.",
    ],
  },
  {
    title: "AI Software Developer",
    company: "Remote Work & Working at Home Jobs",
    period: "Jun 2025 – Present · 5 months",
    bullets: [
      "Developing AI and software solutions in a remote, technology-focused environment.",
    ],
  },
  {
    title: "Blockchain Developer",
    company: "Bricktoken",
    period: "Jun 2025 – Dec 2025 · 6 months",
    bullets: [
      "Contributed to blockchain and technical development at Bricktoken.",
    ],
  },
  {
    title: "Contract Web Developer",
    company: "Enact Business Solutions",
    period: "Nov 2024 – Dec 2025 · 1 year 1 month · Dhaka, Bangladesh",
    bullets: [
      "Delivered web solutions aligned with client goals; contributed to data engineering and analytics for business consulting.",
    ],
  },
  {
    title: "Data Collection and Preprocessing",
    company: "Bangabandhu Sheikh Mujib Medical University (BSMMU)",
    period: "Oct 2024 – Nov 2024 · 1 month · Dhaka, Bangladesh",
    bullets: [
      "Collected and preprocessed data for **diabetes research** (Dr. Shahjada Selim), as vendor for Incepta Company Ltd.",
      "Collected visitor data: name, age, phone, gender, height, weight, BMI, waist, hip, pressure, and blood samples.",
      "Preprocessed data in **Excel** with blood sample results and formatted into three groups: Non-obese, Non-Diabetes, Diabetes.",
      "Contributed to published research: <a href=\"https://www.nature.com/articles/s41598-024-67036-3\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-primary hover:underline\">Nature Scientific Reports – diabetes study</a>.",
    ],
  },
  {
    title: "Data Analyst",
    company: "Parlance Consulting Services Ltd.",
    period: "Sep 2024 – Nov 2024 · 2 months · Dhaka, Bangladesh",
    bullets: [
      "Worked on a freelance project for **human sentiment analysis**; delivered completed project.",
    ],
  },
  {
    title: "IT Helper",
    company: "Ranamotors",
    period: "Feb 2023 – Jul 2024 · 1 year 5 months",
    bullets: [
      "Provided IT support and technical assistance in an engineering environment.",
    ],
  },
  {
    title: "IT Helper",
    company: "North South University",
    period: "Feb 2023 – Jul 2024 · 1 year 5 months · Dhaka, Bangladesh",
    bullets: [
      "Supported IT and technical operations in a higher education setting.",
    ],
  },
  {
    title: "Officer (Supporting) of Remittance",
    company: "Thai Airways International",
    period: "Dec 2018 – Dec 2020 · 2 years · Dhaka, Bangladesh",
    bullets: [
      "Worked as **data entry clerk** for yearly expenses and remittance-related tasks.",
    ],
  },
  {
    title: "Data Scraper",
    company: "Fiverr",
    period: "Oct 2018 – Mar 2020 · 1 year 5 months · Bangladesh",
    bullets: [
      "Delivered **web scraping** solutions using **Python**, **Beautiful Soup**, and scripts for various client projects.",
    ],
  },
];

/**
 * Experience component displays work experience in an animated timeline format.
 * Data sourced from LinkedIn profile: linkedin.com/in/alsabribhuiyan
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
                key={`${exp.company}-${exp.period}-${index}`}
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
