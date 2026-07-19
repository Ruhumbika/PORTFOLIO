export interface SkillGroup {
  category: string
  /** Higher emphasis groups are visually dominant per the brief. */
  emphasis?: boolean
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    emphasis: true,
    items: [
      'Laravel',
      'Node.js',
      'Express.js',
      'FastAPI',
      'REST API Development',
      'API Integration',
    ],
  },
  {
    category: 'AI Application Development',
    emphasis: true,
    items: [
      'Ollama',
      'Local LLM Deployment',
      'Retrieval-Augmented Generation',
      'Knowledge-Base Integration',
      'Prompt Engineering',
      'AI Application Architecture',
    ],
  },
  {
    category: 'Programming',
    items: ['PHP', 'JavaScript', 'Dart', 'SQL', 'HTML', 'CSS', 'Basic Python'],
  },
  {
    category: 'Frontend & Mobile',
    items: [
      'Flutter',
      'Responsive Web Design',
      'Tailwind CSS',
      'Bootstrap',
      'Streamlit',
    ],
  },
  {
    category: 'Databases',
    items: [
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Microsoft SQL Server',
      'Database Design',
      'Data Import & Validation',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: [
      'Git',
      'GitHub',
      'Linux',
      'Ubuntu',
      'Postman',
      'XAMPP',
      'VS Code',
      'Android Studio',
      'MonkeysCloud',
    ],
  },
  {
    category: 'Product & Delivery',
    items: [
      'Agile',
      'Scrum',
      'Sprint Planning',
      'User Stories',
      'UAT',
      'SRS Documentation',
      'System Testing',
      'Troubleshooting',
      'Technical Documentation',
      'Systems Analysis & Design',
    ],
  },
  {
    category: 'Design Support',
    items: [
      'Figma',
      'UI/UX Thinking',
      'Responsive Interface Design',
      'Product Flows',
      'Digital Branding',
    ],
  },
]

// The three professional pillars for the "What I Build" section.
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
    title: 'Full-Stack Systems',
    description:
      'Designing and developing reliable web and mobile systems with secure backend logic, structured databases, APIs and user-friendly interfaces.',
    technologies: [
      'Laravel',
      'PHP',
      'Node.js',
      'Express.js',
      'Flutter',
      'JavaScript',
      'REST APIs',
    ],
    emphasis: true,
  },
  {
    index: '02',
    title: 'AI Applications',
    description:
      'Building locally hosted and privacy-conscious AI applications using language models, Retrieval-Augmented Generation and structured knowledge bases.',
    technologies: [
      'Python',
      'FastAPI',
      'Streamlit',
      'Ollama',
      'Local LLMs',
      'RAG',
    ],
    emphasis: true,
  },
  {
    index: '03',
    title: 'Digital Product Design',
    description:
      'Turning real user and business challenges into usable digital products through systems analysis, product thinking and user-centred interface design.',
    technologies: [
      'Figma',
      'Responsive Design',
      'User Flows',
      'Product Planning',
      'Testing & Documentation',
    ],
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
