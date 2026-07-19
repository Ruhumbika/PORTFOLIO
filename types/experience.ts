export interface ExperienceItem {
  organisation: string
  unit?: string
  location: string
  role: string
  /** Kept as an array so distinct placements are never merged into one span. */
  periods: string[]
  summary: string
  responsibilities: string[]
}

export interface EducationItem {
  qualification: string
  institution: string
  detail?: string
  period: string
  areas?: string[]
}

export interface TrainingItem {
  title: string
  period: string
  areas: string[]
  note?: string
}
