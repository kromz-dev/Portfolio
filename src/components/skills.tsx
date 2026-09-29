"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { skillCategories } from "@/lib/data";

export function Skills() {
  const { t, l } = useLanguage();

  return (
    <section
      id="skills"
      className="relative scroll-mt-24 bg-surface/30 py-24 sm:py-32"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16 max-w-2xl">
          <h2
            id="skills-heading"
            className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
          >
            {t.skills.heading}
          </h2>
          <p className="mt-6 text-lg text-muted">{t.skills.intro}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title.fr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <h3 className="mb-6 font-mono text-sm uppercase tracking-widest text-accent-text">
                {l(category.title)}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill) => {
                  const label = l(skill);
                  return (
                    <li
                      key={label}
                      className="text-lg font-medium text-foreground"
                    >
                      {label}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
