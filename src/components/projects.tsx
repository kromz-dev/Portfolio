"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Placeholder } from "@/components/ui/placeholder";
import { useLanguage } from "@/components/language-provider";
import { extraProjects, homeLabDetails } from "@/lib/data";

function Row({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="group relative border-t border-surface-border py-12 transition-colors hover:bg-surface/30"
    >
      <div className="grid grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-12 md:gap-12">
        {children}
      </div>
    </motion.article>
  );
}

export function Projects() {
  const { t, l } = useLanguage();
  const w = t.work;

  return (
    <section
      id="work"
      className="relative scroll-mt-24 py-24 sm:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal className="mb-16 max-w-2xl px-4 sm:px-6">
          <h2
            id="work-heading"
            className="text-4xl font-display font-bold uppercase tracking-tighter text-foreground sm:text-6xl"
          >
            {w.heading}
          </h2>
          <p className="mt-6 text-lg text-muted">{w.intro}</p>
        </ScrollReveal>

        <div className="border-b border-surface-border">
          {/* Featured: home lab */}
          <Row index={0}>
            <div className="md:col-span-4">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {w.homeLab.title}
              </h3>
              <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-accent">
                {w.featured}
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                {w.homeLab.description}
              </p>
              <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {(
                  [
                    [w.homeLab.hardwareLabel, homeLabDetails.hardware],
                    [w.homeLab.servicesLabel, homeLabDetails.services],
                  ] as const
                ).map(([label, value]) => (
                  <div key={label}>
                    <dt className="mb-2 font-mono text-xs uppercase tracking-widest text-muted">
                      {label}
                    </dt>
                    <dd className="text-foreground">
                      {value ? l(value) : <Placeholder inline />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Row>

          {/* Real mission: DNS fix */}
          <Row index={1}>
            <div className="md:col-span-4">
              <span className="mb-2 block font-mono text-sm uppercase tracking-widest text-accent">
                {w.dnsMission.period}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                {w.dnsMission.title}
              </h3>
              <span className="mt-4 inline-block font-mono text-xs uppercase tracking-widest text-muted">
                {w.mission}
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="max-w-2xl text-lg leading-relaxed text-muted">
                {w.dnsMission.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted/70">
                {w.dnsMission.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </Row>

          {/* Extra projects — TODO entries in data.ts */}
          {extraProjects.map((project, i) => (
            <Row key={project ? project.title.fr : `todo-${i}`} index={2 + i}>
              {project ? (
                <>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                      {l(project.title)}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex text-muted transition-colors hover:text-foreground"
                        aria-label={l(project.title)}
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-lg leading-relaxed text-muted">
                      {l(project.description)}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted/70">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="md:col-span-12">
                  <Placeholder>
                    <span className="font-semibold text-foreground">
                      {w.placeholderTitle}
                    </span>{" "}
                    — {w.placeholderBody}
                  </Placeholder>
                </div>
              )}
            </Row>
          ))}
        </div>
      </div>
    </section>
  );
}
