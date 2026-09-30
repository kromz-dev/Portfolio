"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { useLanguage } from "@/components/language-provider";

const LANG_OPTIONS = [
  { value: "fr", label: "FR", name: "Français" },
  { value: "en", label: "EN", name: "English" },
] as const;

/** Segmented FR / EN switch with a sliding indicator. */
export function LangToggle() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      role="group"
      aria-label={t.nav.langToggleLabel}
      className="relative flex h-8 items-center rounded-full border border-white/10 bg-white/[0.03] p-0.5"
    >
      <motion.div
        className="absolute left-0.5 top-0.5 bottom-0.5 w-9 rounded-full bg-accent"
        animate={{ x: lang === "en" ? 36 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        aria-hidden="true"
      />
      {LANG_OPTIONS.map((opt) => {
        const active = lang === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            lang={opt.value}
            aria-label={opt.name}
            aria-pressed={active}
            onClick={() => setLang(opt.value)}
            className={`relative z-10 inline-flex h-full w-9 items-center justify-center rounded-full font-mono text-[11px] font-semibold transition-colors duration-200 ${
              active ? "text-white" : "text-muted hover:text-foreground"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export function Navbar() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldExpand = isHovered || hasFocus || !isScrolled;

  return (
    <motion.header
      className="fixed left-1/2 top-4 z-50 w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 sm:top-6"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.nav
        aria-label={t.nav.mainNav}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onFocus={() => setHasFocus(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
            setHasFocus(false);
          }
        }}
        className="glass-strong flex cursor-default items-center overflow-hidden rounded-full p-1.5 transition-colors"
      >
        <div className="flex items-center px-3 py-2 sm:px-4">
          <a
            href="#"
            aria-label={t.nav.home}
            className="whitespace-nowrap font-display text-lg font-bold tracking-tighter text-foreground transition-colors hover:text-accent-text"
          >
            {siteConfig.shortName}
            <span className="text-accent-text">.</span>
          </a>
        </div>

        {/* Desktop links: collapse into the pill when scrolled */}
        <AnimatePresence initial={false}>
          {shouldExpand && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="hidden items-center overflow-hidden whitespace-nowrap md:flex"
            >
              <ul className="flex items-center gap-6 px-4">
                {t.nav.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm font-medium text-muted transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-2 pl-1 pr-1">
          <LangToggle />
          <a
            href="#contact"
            className="inline-flex h-8 items-center whitespace-nowrap rounded-full bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-accent hover:text-white"
          >
            {t.nav.cta}
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
}
