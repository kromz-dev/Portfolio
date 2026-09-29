"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { isEmailPlaceholder, siteConfig } from "@/lib/data";
import { socials } from "@/lib/socials";

type CopyState = "idle" | "copied" | "failed";

export function Contact() {
  const { t } = useLanguage();
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopyState("idle"), 2500);
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden border-t border-surface-border bg-surface/30 py-24 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-1/2 w-full -translate-y-1/2 select-none overflow-hidden opacity-5"
        aria-hidden="true"
      >
        <p className="whitespace-nowrap text-center font-display text-[15vw] font-bold uppercase leading-none tracking-tighter">
          CONTACT
        </p>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 md:grid-cols-2">
        <div className="min-w-0">
          <ScrollReveal>
            <h2
              id="contact-heading"
              className="mb-8 text-4xl font-display font-bold uppercase leading-[0.95] tracking-tighter text-foreground sm:text-6xl"
            >
              {t.contact.heading} <br />
              <span className="text-accent-text">{t.contact.headingAccent}</span>
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              {t.contact.body}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="mt-10">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest text-muted">
                {t.contact.emailLabel}
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
                <span className="flex min-w-0 items-center gap-3 border border-surface-border bg-background px-5 py-4 font-mono text-base text-foreground select-all break-all">
                  <Mail size={18} className="shrink-0 text-accent-text" aria-hidden="true" />
                  {siteConfig.email}
                </span>
                <button
                  type="button"
                  onClick={copy}
                  className="tactile-push inline-flex shrink-0 items-center justify-center gap-2 border border-surface-border px-5 py-4 text-sm font-medium text-foreground transition-colors hover:border-foreground"
                >
                  {copyState === "copied" ? (
                    <Check size={16} aria-hidden="true" />
                  ) : (
                    <Copy size={16} aria-hidden="true" />
                  )}
                  {t.contact.copy}
                </button>
              </div>
              <p className="mt-2 min-h-5 text-sm text-accent-text" role="status" aria-live="polite">
                {copyState === "copied"
                  ? t.contact.copied
                  : copyState === "failed"
                    ? t.contact.copyFailed
                    : ""}
              </p>
              {/* TODO: disparaît dès que siteConfig.email (data.ts) est renseigné. */}
              {isEmailPlaceholder && (
                <p className="mt-2 inline-block border border-dashed border-muted/60 px-2 py-0.5 font-mono text-xs uppercase tracking-widest text-muted">
                  {t.contact.emailPending}
                </p>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="tactile-push mt-8 inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
            >
              {t.cta}
            </a>
          </ScrollReveal>
        </div>

        <div className="flex flex-col justify-center gap-8 md:items-end">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">
            {t.contact.elsewhere}
          </p>
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="group flex items-center gap-6 text-2xl font-semibold tracking-tight text-muted transition-colors hover:text-foreground"
            >
              <span className="relative overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {social.label}
                </span>
                <span
                  className="absolute left-0 top-0 inline-block translate-y-full text-accent-text transition-transform duration-300 group-hover:translate-y-0"
                  aria-hidden="true"
                >
                  {social.label}
                </span>
              </span>
              <social.icon
                size={28}
                className="transition-colors group-hover:text-accent-text"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
