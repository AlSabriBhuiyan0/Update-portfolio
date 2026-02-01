import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Naureen Food and Beverage Limited",
    summary: "A website for Naureen Food & Beverage Limited. Built using HTML, CSS and JavaScript.",
    details: [
      "Corporate website for Naureen Food & Beverage Limited",
      "Clean, responsive layout with HTML5, CSS, and vanilla JavaScript",
      "User-friendly navigation and contact information",
    ],
    constraints: [],
    stack: ["HTML5", "CSS", "JavaScript"],
    outcome: "Live website for the company.",
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
  },
  {
    title: "LaTeX-Based CV Builder",
    summary: "A web-based resume builder that allows users to create and customize resumes using LaTeX templates. Features live preview and PDF generation, built with React, TypeScript, and styled-components. Integrated Axios for API communication.",
    details: [
      "Live preview and PDF generation from LaTeX templates",
      "React, TypeScript, and styled-components for UI",
      "Axios for API communication and backend integration",
    ],
    constraints: [],
    stack: ["React", "TypeScript", "styled-components", "Axios", "API"],
    outcome: "Functional resume builder with professional LaTeX output.",
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
  },
  {
    title: "Portfolio",
    summary: "A personal portfolio website showcasing skills, projects, and experiences as a Web Developer and Data Scientist. The site features a clean and modern design, making it easy for visitors to navigate and view my work.",
    details: [
      "Clean, modern design with responsive layout",
      "Sections for About, Projects, Skills, and Contact",
      "Built with React and Tailwind CSS for performance and maintainability",
    ],
    constraints: [],
    stack: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    outcome: "Personal portfolio site for showcasing work and skills.",
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
  },
  {
    title: "Weather App",
    summary: "WeatherAppbyAlsunny is a responsive web application built with React that allows users to view the weather forecast for a specific location. The app fetches weather data from WeatherAPI.com and presents it in a user-friendly interface. Styled using Bootstrap and custom CSS.",
    details: [
      "Fetches weather data from WeatherAPI.com",
      "Responsive design with Bootstrap and custom CSS",
      "User-friendly interface for location-based weather forecast",
    ],
    constraints: [],
    stack: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Weather API"],
    outcome: "Functional weather app with live API integration.",
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
  },
];

/**
 * Projects component - Displays featured projects in an accordion layout.
 */
export function Projects() {
  return (
    <section id="projects" className="py-28 border-t border-border section-projects" role="region" aria-labelledby="projects-heading">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
        >
          <h2 id="projects-heading" className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Projects
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            A selection of web development and data science projects — from corporate sites and resume builders to weather apps and portfolios.
          </p>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
          <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
            {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.4 }}
                >
              <ProjectCard
                project={project}
                value={`project-${index}`}
                featured={true}
              />
                </motion.div>
            ))}
          </Accordion>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
