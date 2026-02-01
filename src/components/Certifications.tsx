import { motion, useReducedMotion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

// Certifications from LinkedIn: https://www.linkedin.com/in/alsabribhuiyan/
const certifications = [
  {
    name: "Data Literacy",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: null,
    url: "https://datacamp.com/skill-verification/DL0038784809696",
  },
  {
    name: "AWS Certified AI Practitioner (AIF - C01)",
    issuer: "Amazon Web Services (AWS)",
    issued: "Nov 2024",
    expiry: null,
    url: "https://explore.skillbuilder.aws/learn/course/19554",
  },
  {
    name: "GitHub Foundations",
    issuer: "Microsoft",
    issued: "Oct 2024",
    expiry: null,
    url: "https://learn.microsoft.com/en-us/users/albhuiyan-6089/achievements/9xxmr77u",
  },
  {
    name: "AI Fundamentals",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    url: "https://datacamp.com/skill-verification/AIF0023330690596",
  },
  {
    name: "Data Analyst",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    url: "https://datacamp.com/certificate/DA0025288477492",
  },
  {
    name: "Data Scientist",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    url: "https://datacamp.com/certificate/DS0029019117096",
  },
  {
    name: "Python Data Associate",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    url: "https://datacamp.com/certificate/PDA0014663873189",
  },
  {
    name: "SQL Associate",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Nov 2026",
    url: "https://datacamp.com/certificate/SQA0014330682111",
  },
  {
    name: "Data Engineer",
    issuer: "DataCamp",
    issued: "Nov 2024",
    expiry: "Expired Nov 2024",
    url: "https://datacamp.com/certificate/DE0011082245241",
  },
  {
    name: "Moi",
    issuer: "North South University",
    issued: "Dec 2019",
    expiry: null,
    url: null,
  },
];

/**
 * Certifications component - Licenses & certifications from LinkedIn profile.
 */
export function Certifications() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="py-28 border-t border-border section-certifications"
      role="region"
      aria-labelledby="certifications-heading"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="max-w-3xl"
        >
          <h2
            id="certifications-heading"
            className="text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            Licenses & Certifications
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            Certifications from my <a href="https://www.linkedin.com/in/alsabribhuiyan/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LinkedIn profile</a> — DataCamp, AWS, Microsoft, and North South University.
          </p>

          <motion.ul
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.06 },
              },
            }}
          >
            {certifications.map((cert, index) => (
              <motion.li
                key={`${cert.name}-${cert.issuer}-${index}`}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0 },
                }}
                transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
                className="relative pl-10 border-l-2 border-border rounded-r-lg py-3 -ml-px hover:bg-primary/5 transition-colors"
              >
                <span
                  className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-primary border-2 border-background z-10"
                  aria-hidden
                />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Issued {cert.issued}
                      {cert.expiry && (
                        <span> · {cert.expiry}</span>
                      )}
                    </p>
                  </div>
                  {cert.url && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline shrink-0"
                      aria-label={`View ${cert.name} certificate`}
                    >
                      View
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
