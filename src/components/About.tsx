import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.15 }}
          className="max-w-2xl"
        >
          <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-wider mb-4">
            About
          </h2>
          
          <p className="text-lg text-foreground leading-relaxed mb-6">
            I develop perception, mapping, and navigation systems for real robots using ROS and ROS2. 
            At Spotless AI, I build pipelines that process LiDAR, depth cameras, and point clouds into 
            actionable costmaps and semantic grids.
          </p>
          
          <p className="text-muted-foreground leading-relaxed">
            My work involves debugging sensor noise, transformation mismatches, and planner failures 
            on deployed hardware. I write modular code that interacts cleanly with ROS topics, services, 
            TFs, and custom messages—systems that need to work reliably, not just in simulation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
