"use client";

import { experiences } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32"
      aria-label="Work experience"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="mb-20">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl">
            Experience
          </h2>
        </ScrollReveal>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 py-12 border-t border-surface-border transition-colors hover:bg-surface/20"
            >
              {/* Left Column: Period & Company */}
              <div className="md:col-span-4 flex flex-col md:pr-8">
                <span className="font-mono text-sm uppercase tracking-widest text-accent mb-2">
                  {exp.period}
                </span>
                <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                  {exp.company}
                </h3>
              </div>

              {/* Right Column: Role & Details */}
              <div className="md:col-span-8">
                <h4 className="text-xl font-medium text-foreground mb-4">
                  {exp.role}
                </h4>
                <p className="text-muted leading-relaxed mb-6 max-w-2xl">
                  {exp.description}
                </p>
                <ul className="space-y-3">
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start text-sm text-muted/90"
                    >
                      <span className="mr-3 mt-1.5 h-1 w-4 flex-shrink-0 bg-accent/50 group-hover:bg-accent transition-colors" />
                      <span className="leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
