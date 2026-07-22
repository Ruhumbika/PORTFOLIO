import { ArrowRight, Building2 } from 'lucide-react'
import { experience } from '@/data/experience'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'

export function ExperiencePreview() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Selected Experience"
            title="Public-sector ICT, in the field"
            description="Two separate practical training placements in the same District Council ICT Unit, each strengthening hands-on technical support and public-service delivery skills."
          />
          <Button href="/experience" variant="outline" size="sm" className="shrink-0">
            Full experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-4">
          {experience.map((item) => (
            <Reveal
              key={item.organisation}
              as="article"
              className="rounded-xl border border-border bg-card p-6 lg:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                    <Building2 className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {item.organisation}
                      {item.unit ? (
                        <span className="text-muted-foreground"> · {item.unit}</span>
                      ) : null}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {item.role} · {item.location}
                    </p>
                  </div>
                </div>
                <ul className="flex shrink-0 flex-col gap-1.5">
                  {item.periods.map((p) => (
                    <li
                      key={p}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-center font-mono text-[11px] text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
