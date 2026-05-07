import type { ExperienceEntry } from '../types'

export const experience: ExperienceEntry[] = [
  {
    role: 'Full Stack Developer',
    company: 'Gherkin Media',
    companyUrl: 'https://gherkinmedia.co.nz',
    period: 'Jun 2024 - Present',
    current: true,
    emoji: '🥒',
    highlights: [
      'Built and maintained web applications for 100+ clients.',
      'Delivered REST APIs, WordPress customizations, and SQL/NoSQL integrations.',
      'Improved production performance and reliability across client systems.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: 'Oct 2023 - May 2024',
    highlights: [
      'Built e-commerce and full stack web applications with React and Next.js.',
      'Delivered stores that generated $5k+ in online sales.',
      'Improved user engagement by up to 40% through UX and performance improvements.',
    ],
  },
  {
    role: 'Plant and Equipment / Mechanical Engineer',
    company: 'Ghella Abergelide JV',
    period: 'Apr 2021 - Mar 2023',
    highlights: [
      "Worked on Auckland's Central Interceptor infrastructure project.",
      'Implemented a site-wide pre-start check app that improved efficiency by 60%.',
      'Supported operations in a complex, high-stakes delivery environment.',
    ],
  },
]
