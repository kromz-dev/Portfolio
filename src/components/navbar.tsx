"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";

export function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldExpand = isHovered || !isScrolled;

  return (
    <motion.div
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.nav
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        layout
        className="glass-strong flex cursor-default items-center overflow-hidden rounded-full p-1.5 transition-colors"
      >
        <div className="flex items-center px-4 py-2">
          <a
            href="#"
            className="font-display text-lg font-bold tracking-tighter text-foreground hover:text-accent transition-colors"
          >
            {siteConfig.name}.
          </a>
        </div>

        <AnimatePresence initial={false}>
          {shouldExpand && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center overflow-hidden whitespace-nowrap"
            >
              <ul className="flex items-center gap-6 px-4">
                {navLinks.map((link) => (
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
              <div className="pl-2 pr-1">
                <a
                  href="#contact"
                  className="inline-flex h-8 items-center rounded-full bg-foreground px-4 text-xs font-medium text-background transition-colors hover:bg-accent hover:text-white"
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.div>
  );
}
