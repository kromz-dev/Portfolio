"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Placeholder } from "@/components/ui/placeholder";
import { useLanguage } from "@/components/language-provider";
import { btsCielPeriod, extraParcours } from "@/lib/data";

function Item({
  index,
  period,
  title,
  description,
}: {
  index: number;
  period: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="grid grid-cols-1 gap-4 border-t border-surface-border py-12 transition-colors hover:bg-surface/20 md:grid-cols-12 md:gap-12"
    >
      <div className="font-mono text-sm uppercase tracking-widest text-accent md:col-span-4">
        {period}
      </div>
      <div className="md:col-span-8">
        <h3 className="text-2xl font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-4 max-w-2xl leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </motion.li>
  );
}

/** "Parcours" / Background section (replaces the old Experience list). */
export function Parcours() {
  const { t, l } = useLanguage();
  const p = t.parcours;

  return (
    <section
      id="parcours"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="parcours-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <ScrollReveal className="mb-16">
          <h2
            id="parcours-heading"
            className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
          >
            {p.heading}
          </h2>
        </ScrollReveal>

        <ol className="flex flex-col border-b border-surface-border">
          <Item
            index={0}
            period={p.freelance.period}
            title={p.freelance.title}
            description={p.freelance.description}
          />
          <Item
            index={1}
            period={
              btsCielPeriod ?? (
                <Placeholder inline>{p.bts.periodPending}</Placeholder>
              )
            }
            title={p.bts.title}
            description={p.bts.description}
          />
          {extraParcours.map((item, i) =>
            item ? (
              <Item
                key={item.title.fr}
                index={2 + i}
                period={item.period}
                title={l(item.title)}
                description={l(item.description)}
              />
            ) : (
              <li
                key={`todo-${i}`}
                className="border-t border-surface-border py-12"
              >
                <Placeholder>{p.placeholderBody}</Placeholder>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
}
