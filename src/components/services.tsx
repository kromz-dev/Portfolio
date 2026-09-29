"use client";

import { motion } from "framer-motion";
import { Globe, Wrench, Server, Bot, type LucideIcon } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import {
  servicePrices,
  showSapTaxCreditNote,
  type ServiceId,
} from "@/lib/data";

const icons: Record<ServiceId, LucideIcon> = {
  web: Globe,
  troubleshooting: Wrench,
  infra: Server,
  ai: Bot,
};

export function Services() {
  const { t, l } = useLanguage();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-surface/30 py-24 sm:py-32"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16 max-w-2xl">
          <h2
            id="services-heading"
            className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
          >
            {t.services.heading}
          </h2>
          <p className="mt-6 text-lg text-muted">{t.services.intro}</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-px border border-surface-border bg-surface-border md:grid-cols-2">
          {t.services.items.map((service, i) => {
            const Icon = icons[service.id];
            const price = servicePrices[service.id];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group flex flex-col bg-background p-6 sm:p-10"
              >
                <div className="flex items-center gap-4">
                  <Icon
                    size={24}
                    className="shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="mt-4 leading-relaxed text-muted">
                  {service.description}
                </p>

                <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
                  {t.services.deliverablesLabel}
                </p>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start text-sm text-foreground/90"
                    >
                      <span
                        className="mr-3 mt-2 h-1 w-4 shrink-0 bg-accent/50 transition-colors group-hover:bg-accent"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="border-t border-surface-border pt-4">
                    {price ? (
                      <p className="font-mono text-sm text-foreground">
                        {l(price)}
                      </p>
                    ) : (
                      <p className="inline-block border border-dashed border-muted/60 px-3 py-1 font-mono text-xs uppercase tracking-widest text-muted">
                        {t.services.pricePending}
                      </p>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* TODO (conditionnel) : activé par `showSapTaxCreditNote` dans
            src/lib/data.ts, uniquement une fois la déclaration SAP faite. */}
        {showSapTaxCreditNote && (
          <p className="mt-8 max-w-3xl border-l-2 border-accent pl-4 text-sm leading-relaxed text-muted">
            {t.services.sapNote}
          </p>
        )}

        <div className="mt-12">
          <a
            href="#contact"
            className="tactile-push inline-flex items-center justify-center bg-foreground px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-accent hover:text-white"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
