"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";

export function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16">
          <h2
            id="process-heading"
            className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
          >
            {t.process.heading}
          </h2>
        </ScrollReveal>

        <ol className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {t.process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col border-l-2 border-accent pl-6"
            >
              <span
                className="font-display text-5xl font-bold tracking-tighter text-foreground"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-24">
          <ScrollReveal>
            <h3 className="mb-10 font-mono text-sm uppercase tracking-widest text-accent-text">
              {t.trust.heading}
            </h3>
          </ScrollReveal>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {t.trust.points.map((point) => (
              <li key={point.title} className="flex flex-col">
                <div className="flex items-center gap-2">
                  <Check
                    size={16}
                    className="shrink-0 text-accent-text"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-foreground">
                    {point.title}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
