import { Briefcase } from 'lucide-react'
import { entrepreneurship } from '@/data/experience'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'
import { TechTag } from '@/components/shared/TechTag'

export function EntrepreneurshipSection() {
  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          label="Beyond the Code"
          title="Building and operating real businesses"
          description="Running these ventures sharpens the product thinking, operations and customer understanding I bring back to engineering."
        />

        <Reveal className="mt-12 rounded-xl border border-border bg-card p-6 lg:p-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
                <Briefcase className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {entrepreneurship.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {entrepreneurship.organisation}
                </p>
              </div>
            </div>
            <span className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
              {entrepreneurship.period}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
            {entrepreneurship.intro}
          </p>

          <ul className="mt-6 flex flex-wrap gap-1.5">
            {entrepreneurship.areas.map((area) => (
              <li key={area}>
                <TechTag>{area}</TechTag>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
