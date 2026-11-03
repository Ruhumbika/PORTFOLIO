import type { Metadata } from "next"
import { site } from "@/data/site"
import { education } from "@/data/education"
import { training } from "@/data/experience"
import { skillGroups } from "@/data/skills"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/shared/Button"
import { SkillsGrid } from "@/components/shared/SkillsGrid"
import { GraduationCap, Award, ArrowRight, Download } from "lucide-react"
import { AboutProfileCard } from "@/components/home/AboutProfileCard"

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ruhumbika Mtumba John, a Business Information Technology graduate and full-stack and AI application developer based in Dar es Salaam, Tanzania.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Intro */}
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">About</p>
        <h1 className="mt-4 max-w-4xl text-balance text-3xl font-semibold leading-[1.13] tracking-tight sm:text-4xl lg:text-[2.75rem]">
          Building intelligent, useful and human-centred digital products.
        </h1>
      </Reveal>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
        <Reveal delay={0.05} className="min-w-0">
          <div className="max-w-[39rem] space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>{site.brandStatement}</p>
            <p>{site.supportingParagraph}</p>
            <p>
              My approach connects software architecture, dependable integrations and thoughtful product design to practical business outcomes.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">
              View Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={site.cv} variant="outline" {...{ download: "", target: "_blank", rel: "noopener noreferrer" }}>
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0">
          <AboutProfileCard />
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeading label="Capabilities" title="Technical skills" />
        <div className="mt-8">
          <SkillsGrid groups={skillGroups} />
        </div>
      </div>

      {/* Academic qualifications */}
      <div className="mt-20">
        <SectionHeading label="Academic credentials" title="Academic qualifications" />
        <div className="mt-8 space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.qualification} delay={i * 0.05}>
              <article className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                      <h3 className="font-medium text-foreground">{e.qualification}</h3>
                      <span className="shrink-0 font-mono text-xs text-muted-foreground">{e.period}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{e.institution}</p>
                    <p className="mt-1 font-mono text-xs text-primary">{e.detail}</p>
                    {e.areas && e.areas.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {e.areas.map((a) => (
                          <span
                            key={a}
                            className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Professional certifications and training */}
      <div className="mt-20">
        <SectionHeading label="Professional credentials" title="Certifications and training" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {training.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.05}>
              <article className="h-full rounded-xl border border-border bg-card p-6">
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <Award className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium leading-snug text-foreground">{t.title}</h3>
                    <span className="mt-1 block font-mono text-xs text-muted-foreground">{t.period}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {t.areas.map((a) => (
                    <span
                      key={a}
                      className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                {t.note && <p className="mt-4 text-sm text-primary">{t.note}</p>}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
