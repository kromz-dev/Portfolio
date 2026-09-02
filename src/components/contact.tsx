"use client";

import { Mail } from "lucide-react";
import { siteConfig, socials } from "@/lib/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 bg-surface/30 border-t border-surface-border overflow-hidden"
      aria-label="Contact"
    >
      {/* Massive Background Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full overflow-hidden pointer-events-none opacity-5 select-none">
        <h2 className="text-[15vw] font-display font-bold uppercase tracking-tighter whitespace-nowrap text-center leading-none">
          GET IN TOUCH
        </h2>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Huge CTA */}
        <div>
          <ScrollReveal>
            <h2 className="text-5xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-7xl leading-[0.95] mb-8">
              Let&apos;s build <br />
              <span className="text-muted">the next</span> <br />
              <span className="text-accent">big thing.</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group inline-flex items-center gap-4 bg-foreground text-background px-8 py-5 text-sm font-medium transition-all hover:bg-accent hover:text-white tactile-push"
            >
              <Mail size={18} />
              <span>{siteConfig.email}</span>
            </a>
          </ScrollReveal>
        </div>

        {/* Right: Socials List */}
        <div className="flex flex-col md:items-end justify-center gap-8">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1), duration: 0.5 }}
              className="group flex items-center gap-6 text-2xl font-semibold tracking-tight text-muted transition-colors hover:text-foreground"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {social.label}
                </span>
                <span className="absolute left-0 top-0 inline-block translate-y-full text-accent transition-transform duration-300 group-hover:translate-y-0">
                  {social.label}
                </span>
              </span>
              <social.icon size={28} className="transition-colors group-hover:text-accent" />
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
