"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { Project } from "@/types/project"
import { ProjectCard } from "@/components/projects/ProjectCard"

interface ProjectsExplorerProps {
  projects: Project[]
}

export function ProjectsExplorer({ projects }: ProjectsExplorerProps) {
  const categories = useMemo(() => {
    const set = new Set(projects.map((p) => p.category))
    return ["All", ...Array.from(set)]
  }, [projects])

  const [active, setActive] = useState("All")

  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((p) => p.category === active)),
    [active, projects],
  )

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((cat) => {
          const isActive = cat === active
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={isActive}
              className={`rounded-md border px-3.5 py-1.5 font-mono text-xs uppercase tracking-[0.1em] transition-colors ${
                isActive
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      <div className="mt-10 divide-y divide-border border-y border-border">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">No projects in this category yet.</p>
      )}
    </div>
  )
}
