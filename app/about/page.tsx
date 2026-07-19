import Image from "next/image"
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

export const metadata: Metadata = {
  title: "About",
  description:
    "About Ruhumbika Mtumba John — a final-year Business Information Technology student and full-stack and AI application developer based in Dar es Salaam, Tanzania.",
  alternates: { canonical: "/about" },
}

const focusAreas = [
  "Full-stack web and mobile systems",
  "Locally hosted, privacy-conscious AI applications",
  "User-centred digital product design",
  "Public-sector and small-business software",
]

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Intro */}
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">About</p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Building intelligent, useful and human-centred digital products.
        </h1>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05}>
          <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
            <p>{site.brandStatement}</p>
            <p>{site.supportingParagraph}</p>
            <p>
              My work sits at the intersection of engineering, artificial intelligence and design. I care about products
              that solve real problems for real people — from local government offices to schools, housing programmes
              and small businesses in Tanzania.
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

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="relative aspect-[5/4] overflow-hidden border-b border-border">
              <Image
                src={site.profileImageSquare}
                alt="Professional portrait of Ruhumbika Mtumba John"
                fill
                sizes="(min-width: 1024px) 360px, 100vw"
                className="object-cover object-[50%_35%]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/85 to-transparent p-5 pt-16">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  Engineering · AI · Product thinking
                </p>
              </div>
            </div>
            <div className="p-6">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Current focus</h2>
              <ul className="mt-4 space-y-3">
                {focusAreas.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
              <dl className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="text-right text-foreground">{site.location}</dd>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <dt className="text-muted-foreground">Availability</dt>
                  <dd className="text-right text-foreground">Open to opportunities</dd>
                </div>
              </dl>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Skills */}
      <div className="mt-20">
        <SectionHeading label="Capabilities" title="Technical skills" />
        <div className="mt-8">
          <SkillsGrid groups={skillGroups} />
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <SectionHeading label="Education" title="Academic background" />
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

      {/* Training */}
      <div className="mt-20">
        <SectionHeading label="Development" title="Training and programmes" />
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
