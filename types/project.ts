export type ProjectStatus =
  | 'Live'
  | 'Final-Year Project'
  | 'Academic Project'
  | 'MVP'
  | 'Prototype'
  | 'Business Product'

export interface ProjectImage {
  /** Descriptive label shown on the placeholder and used as alt text. */
  label: string
  /** Optional real screenshot path, e.g. /projects/kdilms/dashboard.webp */
  src?: string
  /** Suggested aspect ratio for the placeholder frame. */
  ratio?: 'video' | 'square' | 'portrait' | 'wide'
}

export interface CaseStudySection {
  title: string
  body: string
  bullets?: string[]
}

export interface Project {
  slug: string
  title: string
  shortTitle?: string
  category: string
  status: ProjectStatus
  period: string
  role: string
  organisation?: string
  summary: string
  description: string
  problem: string
  solution: string
  contribution: string[]
  features: string[]
  technologies: string[]
  users?: string
  images: ProjectImage[]
  liveUrl?: string
  githubUrl?: string
  caseStudySections: CaseStudySection[]
  outcome?: string
  featured: boolean
}
