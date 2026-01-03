import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:sutharsanmail311@gmail.com",
    icon: Mail,
    value: "sutharsanmail311@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com",
    icon: Github,
    value: "github.com/sutharsan",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    value: "linkedin.com/in/sutharsan",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
        >
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-8">
            Contact
          </h2>
          
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm">{link.value}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
