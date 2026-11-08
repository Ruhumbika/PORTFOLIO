export interface ExperienceRole {
  id: string
  title: string
  period: string
  summary: string
  current?: boolean
}

export interface ExperienceGroup {
  id: string
  organisation: string
  location: string
  period: string
  summary: string
  logo?: string
  roles: ExperienceRole[]
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
