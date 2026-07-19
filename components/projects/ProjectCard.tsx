import Link from 'next/link'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { Github } from '@/components/shared/BrandIcons'
import type { Project } from '@/types/project'
import { cn } from '@/lib/utils'
import { TechTag } from '@/components/shared/TechTag'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { Reveal } from '@/components/shared/Reveal'

interface ProjectCardProps {
  project: Project
  /** Reverse the column order for an alternating editorial rhythm. */
  reversed?: boolean
  index?: number
}

export function ProjectCard({ project, reversed, index }: ProjectCardProps) {
  return (
    <Reveal
      as="article"
      className="group grid items-center gap-6 rounded-xl border border-border bg-card p-5 transition-colors duration-300 hover:border-primary/40 lg:grid-cols-2 lg:gap-10 lg:p-8"
    >
      {/* Media */}
      <div className={cn('relative', reversed && 'lg:order-2')}>
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`View ${project.shortTitle ?? project.title} case study`}
          className="block overflow-hidden rounded-lg"
        >
          <div className="transition-transform duration-500 group-hover:scale-[1.02]">
            <PlaceholderImage image={project.images[0]} />
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className={cn('flex flex-col', reversed && 'lg:order-1')}>
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-primary">
            {project.category}
          </span>
          <span
            className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
            aria-hidden="true"
          >
            ·
          </span>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="transition-colors hover:text-primary"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
          {project.summary}
        </p>

        <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-2 font-mono text-xs">
          <div>
            <dt className="text-muted-foreground/70">Role</dt>
            <dd className="mt-0.5 text-foreground">{project.role}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground/70">Period</dt>
            <dd className="mt-0.5 text-foreground">{project.period}</dd>
          </div>
        </dl>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 6).map((t) => (
            <TechTag key={t}>{t}</TechTag>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            View case study
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              Live system
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              Code
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}

export function StatusBadge({ status }: { status: Project['status'] }) {
  const live = status === 'Live' || status === 'Business Product'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.1em]',
        live
          ? 'border-primary/40 bg-primary/10 text-primary'
          : 'border-border bg-secondary text-muted-foreground',
      )}
    >
      {live ? (
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
      ) : null}
      {status}
    </span>
  )
}
