import { siteConfig, navLinks, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-surface-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo & copyright */}
          <div className="flex flex-col items-center gap-1 sm:items-start">
            <span className="text-lg font-bold text-foreground">
              {siteConfig.name}
              <span className="text-accent">.</span>
            </span>
            <p className="text-sm text-muted">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
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

          {/* Social icons */}
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
