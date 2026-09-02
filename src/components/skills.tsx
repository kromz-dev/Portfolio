"use client";

import { skillCategories } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 bg-surface/30"
      aria-label="Technical skills"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal className="max-w-2xl mb-24">
          <h2 className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl">
            The Arsenal
          </h2>
        </ScrollReveal>

        {/* Dense Typography Grid instead of generic Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="text-sm font-mono uppercase tracking-widest text-accent mb-6">
                {category.title}
              </h3>
              
              <ul className="space-y-4">
                {category.skills.map((skill) => (
                  <li 
                    key={skill}
                    className="text-lg font-medium text-foreground transition-colors hover:text-accent cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
              
              <p className="mt-8 text-sm text-muted leading-relaxed border-t border-surface-border pt-4">
                {category.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
