"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";

export function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-24">
          <div className="md:col-span-5">
            <ScrollReveal>
              <h2
                id="about-heading"
                className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
              >
                {t.about.heading}
              </h2>
            </ScrollReveal>
          </div>

          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="max-w-2xl space-y-8 text-lg leading-relaxed text-muted">
                {t.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
