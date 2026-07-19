import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Layers3,
  UsersRound,
} from 'lucide-react'
import { Github } from '@/components/shared/BrandIcons'
import { Button } from '@/components/shared/Button'
import { PlaceholderImage } from '@/components/shared/PlaceholderImage'
import { Reveal } from '@/components/shared/Reveal'
import { TechTag } from '@/components/shared/TechTag'
import { getAllProjectSlugs, getProjectBySlug } from '@/data/projects'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project not found' }
  }

  return {
    title: project.shortTitle ?? project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Ruhumbika Mtumba John`,
      description: project.summary,
      type: 'article',
      url: `/projects/${project.slug}`,
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) notFound()

  return (
    <article>
      <header className="hero-wash border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:py-20">
          <Reveal>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All projects
            </Link>

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
              <div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
                  <span className="text-primary">{project.category}</span>
                  <span className="text-muted-foreground">{project.status}</span>
                  <span className="text-muted-foreground">{project.period}</span>
                </div>
                <h1 className="mt-5 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {project.liveUrl ? (
                    <Button href={project.liveUrl}>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      View live system
                    </Button>
                  ) : null}
                  {project.githubUrl ? (
                    <Button href={project.githubUrl} variant="outline">
                      <Github className="h-4 w-4" aria-hidden="true" />
                      View code
                    </Button>
                  ) : null}
                  <Button href="/availability" variant="outline">
                    Discuss this project
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>

              <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                {[
                  ['Role', project.role],
                  ['Organisation', project.organisation ?? 'Independent / academic'],
                  ['Status', project.status],
                  ['Period', project.period],
                ].map(([label, value]) => (
                  <div key={label} className="bg-card p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-foreground">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <Reveal>
          <PlaceholderImage image={project.images[0]} priority className="w-full" />
        </Reveal>

        <section className="mt-16 grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-24">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Case study
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Problem, solution and contribution
              </h2>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.technologies.map((technology) => (
                  <TechTag key={technology}>{technology}</TechTag>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="space-y-6">
            <Reveal>
              <CaseBlock title="The problem" text={project.problem} />
            </Reveal>
            <Reveal delay={0.04}>
              <CaseBlock title="The solution" text={project.solution} />
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <Layers3 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <h3 className="text-xl font-semibold">My contribution</h3>
                </div>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {project.contribution.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mt-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <UsersRound className="h-5 w-5 text-primary" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Intended users
                </p>
                <p className="mt-1 max-w-3xl text-pretty leading-relaxed text-foreground">
                  {project.users ?? 'Users of the digital product and its administrative workflows.'}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <Reveal key={feature} delay={Math.min(index * 0.025, 0.18)}>
                <div className="h-full rounded-xl border border-border bg-card p-5">
                  <span className="font-mono text-[10px] text-primary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-3 text-sm leading-relaxed text-foreground">{feature}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {project.caseStudySections.length > 0 ? (
          <section className="mt-20 space-y-5">
            {project.caseStudySections.map((section, index) => (
              <Reveal key={section.title} delay={Math.min(index * 0.05, 0.2)}>
                <div className="grid gap-4 rounded-xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[0.42fr_1fr]">
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                  <div>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {section.body}
                    </p>
                    {section.bullets ? (
                      <ul className="mt-5 space-y-2">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            ))}
          </section>
        ) : null}

        {project.images.length > 1 ? (
          <section className="mt-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Product gallery
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                Screens and supporting visuals
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {project.images.slice(1).map((image, index) => (
                <Reveal key={`${image.label}-${index}`} delay={Math.min(index * 0.04, 0.18)}>
                  <PlaceholderImage image={image} />
                </Reveal>
              ))}
            </div>
          </section>
        ) : null}

        {project.outcome ? (
          <Reveal>
            <section className="hero-wash mt-20 rounded-2xl border border-primary/30 bg-card p-7 sm:p-10">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">
                Outcome
              </p>
              <p className="mt-4 max-w-4xl text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
                {project.outcome}
              </p>
            </section>
          </Reveal>
        ) : null}
      </div>
    </article>
  )
}

function CaseBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 sm:p-8">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{text}</p>
    </div>
  )
}
