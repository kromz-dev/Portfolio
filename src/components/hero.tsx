"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TextScramble } from "@/components/ui/text-scramble";
import { Magnetic } from "@/components/ui/magnetic";
import { useLanguage } from "@/components/language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Ultra-subtle radial glow for depth */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[min(800px,150vw)] w-[min(800px,150vw)] rounded-full bg-accent/5 opacity-50 blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 h-1 bg-accent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 font-mono text-xs uppercase tracking-widest text-accent-text sm:text-sm"
          >
            {t.hero.eyebrow}
          </motion.p>

          <h1
            id="hero-heading"
            className="text-4xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-foreground [overflow-wrap:anywhere] sm:text-6xl md:text-7xl"
          >
            <TextScramble text={t.hero.headline} delay={0.2} />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg font-medium leading-relaxed text-muted sm:text-xl"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.3}>
              <a
                href="#contact"
                className="tactile-push inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
              >
                {t.cta}
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="#services"
                className="tactile-push inline-flex items-center justify-center border border-surface-border bg-transparent px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                {t.hero.secondaryCta}
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-12 right-12 hidden flex-col items-center gap-6 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent-text md:flex"
      >
        <span className="[writing-mode:vertical-rl]">{t.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
