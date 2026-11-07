export interface SkillGroup {
  category: string
  emphasis?: boolean
  items: string[]
}

// Core skills confirmed by the portfolio owner.
export const coreLanguages = ['PHP', 'JavaScript', 'Python', 'Dart', 'HTML', 'CSS']
export const coreStack = ['PHP', 'JavaScript', 'Vue.js', 'Python', 'Dart', 'MySQL', 'HTML', 'CSS']

export const skillGroups: SkillGroup[] = [
  { category: 'Programming languages', emphasis: true, items: coreLanguages },
  { category: 'Web interfaces', items: ['Vue.js', 'Responsive web design', 'HTML', 'CSS'] },
  { category: 'APIs and integration', emphasis: true, items: ['REST APIs', 'Webhooks', 'ERP integration', 'WhatsApp Cloud API', 'Background processing'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'SQLite'] },
  { category: 'Server management', emphasis: true, items: ['Contabo VPS', 'cPanel', 'Linux', 'Nginx', 'Docker', 'Application deployment'] },
  { category: 'Development and delivery', items: ['Git', 'GitHub', 'Postman', 'API testing', 'Troubleshooting', 'Technical documentation'] },
]

export interface Pillar {
  index: string
  title: string
  description: string
  technologies: string[]
  emphasis: boolean
}

export const pillars: Pillar[] = [
  {
    index: '01',
    title: 'Web and mobile applications',
    description: 'Building business applications with clear interfaces, backend logic and structured data.',
    technologies: ['PHP', 'JavaScript', 'Vue.js', 'Dart', 'MySQL'],
    emphasis: true,
  },
  {
    index: '02',
    title: 'Enterprise integration and automation',
    description: 'Connecting ERP workflows, WhatsApp approval decisions and biometric attendance through APIs and background processing.',
    technologies: ['Python', 'REST APIs', 'Webhooks', 'WhatsApp Cloud API'],
    emphasis: true,
  },
  {
    index: '03',
    title: 'Deployment and server management',
    description: 'Deploying and maintaining applications on VPS infrastructure and cPanel hosting.',
    technologies: ['Contabo VPS', 'cPanel', 'Linux', 'Nginx', 'Docker'],
    emphasis: false,
  },
]

// Product-building process steps.
export const processSteps = [
  { step: '01', title: 'Understand the problem' },
  { step: '02', title: 'Design the right workflow' },
  { step: '03', title: 'Build the system' },
  { step: '04', title: 'Test with real users' },
  { step: '05', title: 'Improve through feedback' },
] as const
