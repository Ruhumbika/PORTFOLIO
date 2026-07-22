import { ArrowRight, Award, BookOpenCheck, CheckCircle2 } from 'lucide-react'
import { education } from '@/data/education'
import { training } from '@/data/experience'
import { Button } from '@/components/shared/Button'
import { Reveal } from '@/components/shared/Reveal'
import { SectionHeading } from '@/components/shared/SectionHeading'

export function CertificationsSection() {
  return (
    <section className="border-y border-border bg-secondary/20 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          label="Credentials"
          title="Academic and professional certifications"
          description="Formal academic qualifications and structured professional programmes supporting my work in software engineering, quality assurance, data and digital products."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-7">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <BookOpenCheck className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Academic</p>
                  <h3 className="mt-1 text-lg font-semibold">Qualifications</h3>
                </div>
              </div>

              <div className="mt-2 divide-y divide-border">
                {education.map((item) => (
                  <article key={item.qualification} className="py-5 first:pt-4 last:pb-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                          <h4 className="font-medium leading-snug text-foreground">{item.qualification}</h4>
                          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{item.period}</span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.institution}</p>
                        {item.detail ? <p className="mt-1 font-mono text-[11px] text-primary">{item.detail}</p> : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-card p-5 sm:p-7">
              <div className="flex items-center gap-3 border-b border-border pb-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <Award className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Professional</p>
                  <h3 className="mt-1 text-lg font-semibold">Certifications and training</h3>
                </div>
              </div>

              <div className="mt-2 divide-y divide-border">
                {training.map((item) => (
                  <article key={item.title} className="py-5 first:pt-4 last:pb-1">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                          <h4 className="font-medium leading-snug text-foreground">{item.title}</h4>
                          <span className="shrink-0 font-mono text-[11px] text-muted-foreground">{item.period}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {item.areas.map((area) => (
                            <span key={area} className="rounded-md border border-border bg-secondary px-2 py-1 font-mono text-[10px] text-muted-foreground">
                              {area}
                            </span>
                          ))}
                        </div>
                        {item.note ? <p className="mt-3 text-sm text-primary">{item.note}</p> : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 flex justify-center">
            <Button href="/about" variant="outline">
              View full background
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
