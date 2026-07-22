import { ArrowRight } from 'lucide-react'
import { getFeaturedProjects } from '@/data/projects'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { ProjectCard } from '@/components/projects/ProjectCard'
import { Button } from '@/components/shared/Button'

export function FeaturedProjects() {
  const featured = getFeaturedProjects()

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            label="Selected Work"
            title="Product case studies"
            description="Real systems built for local government, education, housing and small-business environments, presented as case studies rather than thumbnails."
          />
          <Button href="/projects" variant="outline" size="sm" className="shrink-0">
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-12 flex flex-col gap-6">
          {featured.map((project, i) => (
            <ProjectCard
              key={project.slug}
              project={project}
              reversed={i % 2 === 1}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
