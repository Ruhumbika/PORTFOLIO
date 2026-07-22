import type { ExperienceItem, TrainingItem } from '@/types/experience'

export const experience: ExperienceItem[] = [
  {
    organisation: 'Kilindi District Council',
    unit: 'ICT Unit',
    location: 'Tanzania',
    role: 'Field Practical Training',
    // Two distinct placements in the same unit, never one continuous span.
    periods: ['July 2024 – November 2024', 'July 2025 – November 2025'],
    summary:
      'Completed two separate practical training placements in the same ICT Unit. The second placement built directly on the experience gained during the first, deepening both technical support skills and understanding of public-sector service delivery.',
    responsibilities: [
      'End-user ICT support',
      'Desktop and laptop software installation',
      'Computer configuration',
      'Biometric device support',
      'Printer and office-equipment troubleshooting',
      'Asset identification and labelling',
      'Data handling and digital records support',
      'Routine network and device support',
      'Staff technical assistance',
      'Public-sector ICT support',
    ],
  },
]

export const entrepreneurship = {
  title: 'Founder & Operator',
  organisation: 'RJAY Digital Hub & RJAY Barbershop',
  period: '2024 – Present',
  intro:
    'Operating these businesses has built practical, hands-on experience across the full lifecycle of running real digital and service products.',
  areas: [
    'Customer service',
    'Staff coordination',
    'Budgeting',
    'Branding',
    'Digital marketing',
    'Service operations',
    'Technology adoption',
    'Problem solving',
    'Business process improvement',
    'Decision-making',
    'Product thinking',
  ],
}

export const training: TrainingItem[] = [
  {
    title: 'NMB Nuru Yangu Scholarship Mentorship Programme',
    period: '2026',
    areas: [
      'Leadership',
      'Confidence',
      'Self-awareness',
      'Career planning',
      'Professional development',
    ],
  },
  {
    title: 'National Service Training (JKT), 822 KJ',
    period: 'June 2023 – September 2023',
    areas: [
      'Discipline',
      'Teamwork',
      'Basic security',
      'Productive-work training',
    ],
    note: 'Awarded Grade A for work competence and conduct.',
  },
]
