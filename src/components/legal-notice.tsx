"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LangToggle } from "@/components/navbar";
import { siteConfig } from "@/lib/data";

export function LegalNotice() {
  const { t } = useLanguage();
  const legal = t.legal;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-20">
      <div className="mb-12 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          {legal.back}
        </Link>
        <LangToggle />
      </div>

      <h1 className="font-display text-4xl font-bold uppercase tracking-tighter text-foreground sm:text-5xl">
        {legal.title}
      </h1>

      {legal.sections.map((section) => (
        <section key={section.heading} className="mt-12">
          <h2 className="font-mono text-sm uppercase tracking-widest text-accent-text">
            {section.heading}
          </h2>
          <div className="mt-4 space-y-2 leading-relaxed text-foreground/90">
            {section.body.map((line) => (
              <p key={line}>{line.replace("__ADDRESS__", siteConfig.address)}</p>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
