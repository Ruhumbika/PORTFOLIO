import type { Metadata } from "next"
import { experience, entrepreneurship } from "@/data/experience"
import { Reveal } from "@/components/shared/Reveal"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { Button } from "@/components/shared/Button"
import { Building2, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Ruhumbika Mtumba John, including ICT field placements at Kilindi District Council and founding RJAY Digital Hub and RJAY Barbershop.",
  alternates: { canonical: "/experience" },
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Experience</p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Practical experience across public-sector ICT and building real businesses.
        </h1>
      </Reveal>

      {/* Professional / field training */}
      <div className="mt-16">
        <SectionHeading label="Field training" title="ICT field placements" />
        <div className="mt-8 space-y-6">
          {experience.map((exp, i) => (
            <Reveal key={exp.organisation} delay={i * 0.05}>
              <article className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <Building2 className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-semibold text-foreground">{exp.organisation}</h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.unit} · {exp.location}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.14em] text-primary">{exp.role}</p>

                    {/* Two distinct placements shown separately, never merged */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.periods.map((p, idx) => (
                        <span
                          key={p}
                          className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs text-foreground"
                        >
                          <span className="text-primary">Placement {idx + 1}</span>
                          <span className="text-muted-foreground">{p}</span>
                        </span>
                      ))}
                    </div>

                    <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{exp.summary}</p>

                    <h4 className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      Responsibilities
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Entrepreneurship */}
      <div className="mt-20">
        <SectionHeading label="Entrepreneurship" title="Founder and operator" />
        <Reveal delay={0.05}>
          <article className="mt-8 rounded-xl border border-border bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{entrepreneurship.organisation}</h3>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-primary">{entrepreneurship.title}</p>
                </div>
              </div>
              <span className="shrink-0 font-mono text-xs text-muted-foreground sm:pt-1">{entrepreneurship.period}</span>
            </div>
            <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{entrepreneurship.intro}</p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {entrepreneurship.areas.map((a) => (
                <span
                  key={a}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {a}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-16 flex flex-wrap items-center gap-3 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="flex-1 text-pretty text-muted-foreground">
            Want the full academic background and training history?
          </p>
          <Button href="/about" variant="outline">
            View About
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
