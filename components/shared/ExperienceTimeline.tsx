import Image from 'next/image'
import { ArrowUpRight, Building2, MapPin } from 'lucide-react'
import type { ExperienceGroup } from '@/types/experience'

export function ExperienceTimeline({ group }: { group: ExperienceGroup }) {
  return (
    <article aria-labelledby={`${group.id}-heading`} className="rounded-xl border border-border bg-card p-5 sm:p-8">
      <header className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-border bg-secondary text-primary">
          {group.logo ? (
            <Image src={group.logo} alt="" width={48} height={48} className="h-full w-full object-contain" />
          ) : (
            <Building2 className="h-6 w-6" aria-hidden="true" />
          )}
        </span>
        <div className="min-w-0">
          <h2 id={`${group.id}-heading`} className="text-xl font-semibold tracking-tight sm:text-2xl">
            {group.website ? (
              <a
                href={group.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm underline decoration-primary/40 underline-offset-4 transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
              >
                {group.organisation}
                <ArrowUpRight className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : group.organisation}
          </h2>
          <p className="mt-1 text-sm text-primary">{group.period}</p>
          <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {group.location}
          </p>
        </div>
      </header>
      <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted-foreground">{group.summary}</p>
      <ol aria-label={`${group.organisation} roles and assignments`} className="mt-7 list-none">
        {group.roles.map((role, index) => (
          <li key={role.id} className="relative pb-8 pl-8 last:pb-0 sm:pl-10">
            {index < group.roles.length - 1 ? <span aria-hidden="true" className="absolute bottom-0 left-[7px] top-4 w-px bg-border" /> : null}
            <span aria-hidden="true" className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${role.current ? 'border-primary bg-primary ring-4 ring-primary/15' : 'border-border bg-background'}`} />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <h3 className="text-base font-semibold leading-snug sm:text-lg">{role.title}</h3>
              {role.current ? (
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">Current</span>
              ) : null}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">{role.period}</p>
            <p className="mt-3 max-w-3xl text-pretty text-sm leading-relaxed text-muted-foreground">{role.summary}</p>
          </li>
        ))}
      </ol>
    </article>
  )
}
