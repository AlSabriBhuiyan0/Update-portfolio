import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">
            Education
          </h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-foreground">
              Data Science & Web Development
            </h3>
            <p className="text-muted-foreground">
              Self-taught and continuous learning
            </p>
            <p className="text-sm text-muted-foreground">
              Focus on Python, React, ML, and full-stack technologies
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
