import { ArrowRight } from 'lucide-react'
import { experienceGroups } from '@/data/experience'
import { ExperienceTimeline } from '@/components/shared/ExperienceTimeline'
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
            title="Software development across Abood Group"
            description="ERP development, WhatsApp workflows, attendance integration and advertising operations within one group."
          />
          <Button href="/experience" variant="outline" size="sm" className="shrink-0">
            Full experience
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <Reveal className="mt-10">
          <ExperienceTimeline group={experienceGroups[0]} />
        </Reveal>
      </div>
    </section>
  )
}
