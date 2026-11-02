import Link from 'next/link'
import { ExternalLink, FileImage, Film, FolderOpen, PanelsTopLeft } from 'lucide-react'
import type { Project } from '@/types/project'

/** Lightweight file-manager-inspired presentation; no external Vue runtime required. */
export function ProjectAssets({ project }: { project: Project }) {
  const imageCount = project.images.filter((image) => image.src).length
  const videoCount = project.images.filter((image) => image.videoSrc).length
  return (
    <section aria-labelledby="project-media-heading" className="mt-14 rounded-xl border border-[#F8A706]/25 bg-card p-5 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#F8A706]">Project resources</p>
          <h2 id="project-media-heading" className="mt-2 text-xl font-semibold">Media & development assets</h2>
          <p className="mt-2 text-sm text-muted-foreground">Available screenshots and recordings for this case study.</p>
        </div>
        <FolderOpen className="h-6 w-6 text-[#F8A706]" aria-hidden="true" />
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-border bg-background/40 p-4"><FileImage className="h-5 w-5 text-[#F8A706]" aria-hidden="true"/><p className="mt-3 font-medium">Screenshots</p><p className="text-xs text-muted-foreground">{imageCount} provided</p></div>
        <div className="rounded-lg border border-border bg-background/40 p-4"><Film className="h-5 w-5 text-[#F8A706]" aria-hidden="true"/><p className="mt-3 font-medium">Video demos</p><p className="text-xs text-muted-foreground">{videoCount} provided</p></div>
        <div className="rounded-lg border border-border bg-background/40 p-4"><PanelsTopLeft className="h-5 w-5 text-[#F8A706]" aria-hidden="true"/><p className="mt-3 font-medium">Live website</p>{project.liveUrl ? <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="mt-1 inline-flex items-center gap-1 text-xs text-[#F8A706]">Open system <ExternalLink className="h-3 w-3"/></a> : <p className="text-xs text-muted-foreground">Not publicly available</p>}</div>
      </div>
      <Link href="/projects" className="mt-5 inline-flex text-sm text-muted-foreground hover:text-[#F8A706]">Browse all case studies</Link>
    </section>
  )
}
