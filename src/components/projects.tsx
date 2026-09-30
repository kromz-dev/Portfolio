"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/github-icon";
import { TechIcon } from "@/components/ui/tech-icon";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { useLanguage } from "@/components/language-provider";
import { extraProjects, homeLabDetails } from "@/lib/data";

function Row({
  index,
  children,
  features,
  githubUrl
}: {
  index: number;
  children: React.ReactNode;
  features?: { fr: string, en: string }[];
  githubUrl?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { l } = useLanguage();

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.32, 0.72, 0, 1] }}
      onClick={() => { if (features) setIsOpen(!isOpen) }}
      className={`group relative rounded-[2rem] p-1.5 glass transition-all duration-700 hover:glass-strong hover:scale-[1.01] my-4 mx-4 sm:mx-6 ${features ? 'cursor-pointer' : ''}`}
    >
      <div className="rounded-[calc(2rem-0.375rem)] bg-[#050505]/80 border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12 relative z-10">
          {children}
          {features && (
            <div className="absolute top-0 right-0 p-2 opacity-50 group-hover:opacity-100 transition-opacity">
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
                <ChevronDown size={24} />
              </motion.div>
            </div>
          )}
        </div>
        
        <AnimatePresence>
          {isOpen && features && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              className="relative z-10 overflow-hidden"
            >
              <div className="pt-8 mt-8 border-t border-white/10 md:pl-[33.33%]">
                <h4 className="font-mono text-sm uppercase tracking-widest text-accent-text mb-6">En détail</h4>
                <ul className="space-y-4 mb-8">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-base">
                      <CheckCircle2 size={18} className="shrink-0 text-accent-text mt-0.5" />
                      <span>{l(feature)}</span>
                    </li>
                  ))}
                </ul>
                {githubUrl && (
                  <a 
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="tactile-push inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium transition-colors hover:bg-accent hover:text-white"
                  >
                    <GithubIcon width={16} height={16} />
                    Voir le code source
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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

        <div className="flex flex-col gap-4">
          {/* Featured: home lab */}
          <Row index={0} features={homeLabDetails.features} githubUrl={homeLabDetails.url}>
            <div className="md:col-span-4">
              <h3 className="text-3xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-text pr-8">
                {w.homeLab.title}
              </h3>
              {homeLabDetails.url && (
                <span className="mt-4 inline-flex text-muted transition-colors group-hover:text-foreground">
                  <GithubIcon width={20} height={20} aria-hidden="true" />
                </span>
              )}
              <span className="mt-4 block font-mono text-xs uppercase tracking-widest text-accent-text">
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
                      {l(value)}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
                {homeLabDetails.tags.map((tag) => (
                  <span key={tag} className="flex items-center">
                    <TechIcon name={tag} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Row>

          {/* Real mission: DNS fix */}
          <Row index={1}>
            <div className="md:col-span-4">
              <span className="mb-2 block font-mono text-sm uppercase tracking-widest text-accent-text">
                {w.dnsMission.period}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-text pr-8">
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
              <p className="mt-4 text-foreground">{w.dnsMission.reference}</p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
                {w.dnsMission.tags.map((tag) => (
                  <span key={tag} className="flex items-center">
                    <TechIcon name={tag} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Row>

          {extraProjects.map((project, i) => (
            <Row key={project.title.fr} index={2 + i} features={project.features} githubUrl={project.url}>
              <>
                  <div className="md:col-span-4">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent-text pr-8">
                      {l(project.title)}
                    </h3>
                    {project.url && (
                      <span className="mt-4 inline-flex text-muted transition-colors group-hover:text-foreground">
                        {project.url.includes("github.com") ? (
                          <GithubIcon width={20} height={20} aria-hidden="true" />
                        ) : (
                          <ExternalLink size={20} aria-hidden="true" />
                        )}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-8">
                    <p className="max-w-2xl text-lg leading-relaxed text-muted">
                      {l(project.description)}
                    </p>
                    <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
                      {project.tags.map((tag) => (
                        <span key={tag} className="flex items-center">
                          <TechIcon name={tag} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
              </>
            </Row>
          ))}
        </div>
      </div>
    </section>
  );
}
