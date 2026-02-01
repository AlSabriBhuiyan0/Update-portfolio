import { motion } from "framer-motion";
import { Accordion } from "@/components/ui/accordion";
import { ProjectCard } from "./ProjectCard";

// Personal & client projects (AlSabriBhuiyan0)
const personalProjects = [
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
    summary: "A web-based resume builder that allows users to create and customize resumes using LaTeX templates. Features live preview and PDF generation.",
    details: [
      "Live preview and PDF generation from LaTeX templates",
      "React, TypeScript, and styled-components for UI",
      "Axios for API communication and backend integration",
    ],
    constraints: [],
    stack: ["React", "TypeScript", "styled-components", "Axios", "API"],
    outcome: "Functional resume builder with professional LaTeX output.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/AlSabriBhuiyan0/Letex-Cv-Builder",
  },
  {
    title: "Al Sunny Portfolio",
    summary: "Personal portfolio website built with Next.js and Tailwind CSS, showcasing skills, projects, and experiences as a Web Developer and Data Scientist.",
    details: [
      "Clean, modern design with responsive layout",
      "Sections for About, Projects, Skills, and Contact",
      "Next.js and Tailwind CSS for performance and maintainability",
    ],
    constraints: [],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    outcome: "Personal portfolio site for showcasing work and skills.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/AlSabriBhuiyan0/Al-Sunny-Portfolio",
  },
  {
    title: "Weather App by Alsunny",
    summary: "Responsive web application built with React that allows users to view the weather forecast for a specific location. Fetches data from WeatherAPI.com.",
    details: [
      "Fetches weather data from WeatherAPI.com",
      "Responsive design with Bootstrap and custom CSS",
      "User-friendly interface for location-based weather forecast",
    ],
    constraints: [],
    stack: ["React", "JavaScript", "Bootstrap", "Weather API"],
    outcome: "Functional weather app with live API integration.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/AlSabriBhuiyan0/WeatherAppbyAlsunny",
  },
  {
    title: "Carbon Credit, Stock & Crypto Tracker",
    summary: "AI-powered insights for sustainable investing. Web app using real data and AI to help investors make informed decisions.",
    details: [
      "AI-powered insights for sustainable investing",
      "Real data and AI for investment decisions",
      "Tracks carbon credit, stock, and crypto markets",
    ],
    constraints: [],
    stack: ["JavaScript", "React", "AI/ML", "Data APIs"],
    outcome: "Investment tracking and insights platform.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/AlSabriBhuiyan0/Carbon-credit-stock-crypto-tracker",
  },
  {
    title: "BrickToken (Local Version)",
    summary: "Project currently in development. TypeScript-based application.",
    details: [
      "Local version with updated features",
      "Built with TypeScript for type safety and maintainability",
    ],
    constraints: [],
    stack: ["TypeScript", "JavaScript"],
    outcome: "In progress.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/AlSabriBhuiyan0/BrickToken-Local-version-updated",
  },
];

// 8no.ai organization projects
const orgProjects = [
  {
    title: "8no.ai Next.js",
    summary: "Next.js application and starter for 8no.ai. Modern full-stack setup with TypeScript.",
    details: [
      "Next.js project structure and tooling",
      "TypeScript for type-safe development",
    ],
    constraints: [],
    stack: ["Next.js", "TypeScript"],
    outcome: "Organization Next.js template and app.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/8no-ai/8no.ai-nextjs",
  },
  {
    title: "Vite + shadcn Starter",
    summary: "Starter template combining Vite with shadcn/ui for fast, accessible React apps.",
    details: [
      "Vite for fast builds and HMR",
      "shadcn/ui components and theming",
      "TypeScript setup",
    ],
    constraints: [],
    stack: ["Vite", "React", "TypeScript", "shadcn/ui"],
    outcome: "Reusable starter for React + shadcn projects.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/8no-ai/vite-shadcn",
  },
  {
    title: "Vite React TypeScript Starter",
    summary: "Minimal Vite + React + TypeScript starter for quick project setup.",
    details: [
      "Vite build tooling",
      "React 18 with TypeScript",
      "Clean starter structure",
    ],
    constraints: [],
    stack: ["Vite", "React", "TypeScript"],
    outcome: "Lightweight React + TS starter.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/8no-ai/vite-react-ts-starter",
  },
  {
    title: "Expo Starter",
    summary: "Expo starter template for React Native cross-platform mobile development.",
    details: [
      "Expo SDK and tooling",
      "TypeScript configuration",
      "Ready for iOS and Android",
    ],
    constraints: [],
    stack: ["Expo", "React Native", "TypeScript"],
    outcome: "Mobile app starter template.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/8no-ai/expo-starter",
  },
  {
    title: "8no.ai Astro",
    summary: "Astro-based project for content and marketing sites with fast static output.",
    details: [
      "Astro static site generator",
      "TypeScript support",
    ],
    constraints: [],
    stack: ["Astro", "TypeScript"],
    outcome: "Static site and content template.",
    imageUrl: "/placeholder.svg",
    githubUrl: "https://github.com/8no-ai/astro",
  },
];

const projects = [...personalProjects, ...orgProjects];

/**
 * Projects component - Displays featured projects (personal + 8no.ai) in an accordion layout.
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
            Personal and client work from my <a href="https://github.com/AlSabriBhuiyan0" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">GitHub</a>, plus projects from the <a href="https://github.com/8no-ai" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">8no.ai</a> organization.
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
                  key={`${project.title}-${index}`}
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
