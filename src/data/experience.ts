import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer',
    company: 'Gherkin Media',
    companyUrl: 'https://gherkinmedia.co.nz',
    period: 'Jun 2024 – Present',
    current: true,
    emoji: '🥒',
    highlights: [
      'Maintained websites for 600+ clients.',
      'Delivered REST APIs, WordPress customisations, and SQL/NoSQL integrations.',
      'Built the in-house AI brain, which keeps each customer’s context on hand and automates repetitive day-to-day tasks.',
      'Saved the company tens of thousands of dollars through website migrations and performance optimisation.',
      'Mentored and managed interns through code reviews, pair programming and structured feedback.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Oct 2023 – May 2024',
    highlights: [
      'Built e-commerce and full stack web applications with React and Next.js.',
      'Delivered stores that generated $5k+ in online sales.',
      'Raised user engagement by up to 40% with UX and performance work.',
    ],
  },
  {
    role: 'Plant and Equipment / Mechanical Engineer',
    company: 'Ghella Abergelide JV',
    period: 'Apr 2021 – Mar 2023',
    highlights: [
      "Worked on Auckland's Central Interceptor infrastructure project.",
      'Implemented a site-wide pre-start check app that improved efficiency by 60%.',
    ],
  },
]
