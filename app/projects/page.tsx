import type { Metadata } from "next"
import { projects } from "@/data/projects"
import { Reveal } from "@/components/shared/Reveal"
import { ProjectsExplorer } from "@/components/projects/ProjectsExplorer"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects by Ruhumbika Mtumba John, including full-stack web systems, AI applications and digital products built for local government, education, housing and small business.",
  alternates: { canonical: "/projects" },
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Work</p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Projects and case studies.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          A selection of systems and products I have designed and built, spanning full-stack web applications, AI-enabled
          tools and customer-facing digital products. Each entry links to a detailed case study.
        </p>
      </Reveal>

      <div className="mt-12">
        <ProjectsExplorer projects={projects} />
      </div>
    </div>
  )
}
