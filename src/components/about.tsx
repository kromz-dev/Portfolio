"use client";

import { siteConfig, stats } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="relative py-32" aria-label="About me">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
          
          {/* Left Column: Heading (5 cols) */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <h2 className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl">
                Engineering <br className="hidden md:block" />
                with intent.
              </h2>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio & Raw Stats (7 cols) */}
          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="space-y-8 text-lg leading-relaxed text-muted max-w-2xl">
                <p>
                  I&apos;m a software engineer with {siteConfig.location}-based roots and a
                  global perspective. Over the past five years, I&apos;ve built products
                  that serve hundreds of thousands of users—from real-time
                  collaboration platforms to AI-powered analytics dashboards.
                </p>
                <p>
                  I care deeply about craft. Whether it&apos;s architecting a resilient
                  backend, designing an intuitive interface, or optimizing a
                  critical rendering path, I approach every problem with the same
                  rigor. I believe the best software is built at the intersection
                  of engineering excellence and thoughtful design.
                </p>
              </div>
            </ScrollReveal>

            {/* Anti-Card Stats: Just raw typography and spacing */}
            <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                  className="flex flex-col border-l-2 border-accent pl-6"
                >
                  <span className="font-display text-5xl sm:text-6xl font-bold tracking-tighter text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm font-mono uppercase tracking-widest text-muted">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
