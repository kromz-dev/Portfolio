"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { TypedText } from "@/components/ui/animated-text";
import { TextScramble } from "@/components/ui/text-scramble";
import { Magnetic } from "@/components/ui/magnetic";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ultra-subtle massive radial glow for depth instead of textures */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div className="h-[800px] w-[800px] rounded-full bg-accent/5 opacity-50 blur-[120px] mix-blend-screen" />
      </div>

      {/* Asymmetric Left-Aligned Layout */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-20">
        <div className="max-w-4xl">
          {/* Subtle Accent Line Instead of a generic badge */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 h-1 bg-accent"
          />

          {/* Brutalist Massive Headline with Text Scramble */}
          <h1 className="text-5xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-7xl md:text-8xl leading-[0.90]">
            <TextScramble text={siteConfig.headline} delay={0.2} />
          </h1>

          {/* Technical Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-lg font-medium text-muted sm:text-xl leading-relaxed"
          >
            <TypedText text={siteConfig.description} delay={1.8} />
          </motion.p>

          {/* Highly tactile Magnetic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
          >
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                className="tactile-push inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
              >
                View my work
              </a>
            </Magnetic>
            
            <Magnetic strength={0.2}>
              <a
                href="#contact"
                className="tactile-push inline-flex items-center justify-center border border-surface-border bg-transparent px-8 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground"
              >
                Get in touch
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator positioned asymmetrically */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 0.6 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-6 text-xs font-mono tracking-widest text-muted uppercase transition-colors hover:text-accent"
        aria-label="Scroll to about section"
      >
        <span className="[writing-mode:vertical-rl]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
}
