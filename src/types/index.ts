export interface Project {
  title: string
  description: string
  outcome: string
  stack: string[]
  heroImage: string
  liveUrl?: string
  githubUrl?: string
  category: string
  featured?: boolean
}

export interface ExperienceEntry {
  role: string
  company: string
  companyUrl?: string
  period: string
  current?: boolean
  highlights: string[]
  emoji?: string
}

export interface SkillGroup {
  label: string
  skills: string[]
}
