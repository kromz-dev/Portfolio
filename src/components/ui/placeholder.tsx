"use client";

import { useLanguage } from "@/components/language-provider";

/**
 * Visible marker for content that is still missing.
 * Driven by `null` / TODO values in src/lib/data.ts.
 */
export function Placeholder({
  children,
  className = "",
  inline = false,
}: {
  children?: React.ReactNode;
  className?: string;
  inline?: boolean;
}) {
  const { t } = useLanguage();
  if (inline) {
    return (
      <span
        className={`inline-block border border-dashed border-muted/60 px-2 py-0.5 font-mono text-xs uppercase tracking-widest text-muted ${className}`}
      >
        {children ?? t.placeholder}
      </span>
    );
  }
  return (
    <div
      className={`border-2 border-dashed border-muted/40 p-6 text-muted ${className}`}
    >
      <p className="font-mono text-xs uppercase tracking-widest text-accent-text">
        À compléter / To be completed
      </p>
      {children && <div className="mt-3 text-sm leading-relaxed">{children}</div>}
    </div>
  );
}
