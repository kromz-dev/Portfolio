"use client";

import { siteConfig } from "@/lib/data";
import { socials } from "@/lib/socials";
import { useLanguage } from "@/components/language-provider";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-surface-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-lg font-bold text-foreground">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </span>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
            </p>
          </div>

          <nav aria-label={t.footer.footerNav}>
            <ul className="flex flex-wrap justify-center gap-6">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full p-2 text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
