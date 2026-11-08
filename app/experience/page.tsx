import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { experienceGroups } from '@/data/experience'
import { ExperienceTimeline } from '@/components/shared/ExperienceTimeline'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'

export const metadata: Metadata = {
  title: 'Experience',
  description: 'Software development and systems integration at Abood Group, entrepreneurship at RJAY Digital Hub, and software development and ICT placements at Kilindi District Council.',
  alternates: { canonical: '/experience' },
}

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Experience</p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Building software that connects business operations.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Full stack development, enterprise integration and digital products, with roles and assignments grouped by organisation.
        </p>
      </Reveal>
      <div className="mt-12 space-y-8 sm:mt-16">
        {experienceGroups.map((group) => (
          <Reveal key={group.id}>
            <ExperienceTimeline group={group} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card p-6 sm:p-8">
          <p className="flex-1 text-muted-foreground">Explore the systems and products behind this work.</p>
          <Button href="/projects" variant="outline">
            View projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Reveal>
    </div>
  )
}
