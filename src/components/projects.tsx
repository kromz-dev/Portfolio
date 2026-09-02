"use client";

import { motion } from "framer-motion";
import { GithubIcon } from "@/components/ui/icons";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

function ProjectListItem({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-surface-border py-12 transition-colors hover:bg-surface/30"
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 px-6">
        {/* Left Column: Title & Links (4 cols) */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
              {project.title}
            </h3>
            {project.featured && (
              <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                Featured Project
              </span>
            )}
          </div>
          
          <div className="mt-8 flex gap-4 md:mt-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
                aria-label="GitHub Repository"
              >
                <GithubIcon size={20} />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
                aria-label="Live Demo"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>

        {/* Right Column: Description & Tech (8 cols) */}
        <div className="md:col-span-8 flex flex-col justify-between">
          <p className="text-lg leading-relaxed text-muted max-w-2xl">
            {project.longDescription}
          </p>
          
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted/70">
            {project.techStack.map((tech) => (
              <span key={tech} className="transition-colors group-hover:text-foreground">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Floating Arrow interaction on hover (Desktop only) */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 hidden lg:block">
           <ArrowUpRight size={32} className="text-accent" />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32"
      aria-label="Projects"
    >
      <div className="mx-auto max-w-7xl">
        {/* Asymmetric Header */}
        <ScrollReveal className="px-6 mb-20 max-w-2xl">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl">
            Selected Work
          </h2>
          <p className="mt-6 text-lg text-muted">
            A showcase of complex problems solved through elegant engineering. No generic templates, just purpose-built software.
          </p>
        </ScrollReveal>

        {/* Anti-Card Layout: Clean List */}
        <div className="border-b border-surface-border">
          {projects.map((project, index) => (
            <ProjectListItem key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
