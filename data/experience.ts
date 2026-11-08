import type { ExperienceGroup, TrainingItem } from '@/types/experience'

export const experienceGroups: ExperienceGroup[] = [
  {
    id: 'abood-group',
    organisation: 'Abood Group',
    location: 'Morogoro, Tanzania',
    period: 'August 2026 to Present',
    summary: 'Full stack development, systems integration and application reliability across group companies.',
    roles: [
      {
        id: 'abood-media',
        title: 'Full Stack Developer | Abood Media',
        period: 'October 2026 to Present',
        current: true,
        summary: 'Developing an advertising sales, scheduling and broadcast tracking system that connects sold advertising with aired placements and proof of play.',
      },
      {
        id: 'attendance',
        title: 'Systems Integration Developer | Attendance',
        period: 'October 2026 to November 2026',
        summary: 'Developed attendance synchronization between ZKTeco, EasyTimePro and GHRM using API integration, transaction filtering, queues and batch processing.',
      },
      {
        id: 'whatsapp-approvals',
        title: 'Systems Integration Developer | WhatsApp Approvals',
        period: 'October 2026 to November 2026',
        summary: 'Developed a WhatsApp gateway for ERP approvals with verified approvers, interactive decisions, callbacks and traceable audit records.',
      },
      {
        id: 'abood-bus',
        title: 'Application Support | Abood Bus',
        period: 'August 2026 to November 2026',
        summary: 'Diagnosed and resolved faults in the WhatsApp ticketing bot and maintained dependable daily booking operations.',
      },
      {
        id: 'peta-holdings',
        title: 'Full Stack Developer | PETA Holdings',
        period: 'August 2026 to November 2026',
        summary: 'Developed ERP functionality for property management, leasing and revenue operations, including reusable interfaces and API integration.',
      },
    ],
  },
  {
    id: 'rjay-digital-hub',
    organisation: 'RJAY Digital Hub',
    location: 'Dar es Salaam, Tanzania',
    period: 'November 2024 to Present',
    logo: '/brand/rj-logo.png',
    summary: 'Software development, business operations and digital customer services.',
    roles: [
      {
        id: 'founder',
        title: 'Founder',
        period: 'November 2024 to Present',
        current: true,
        summary: 'Founded and operate RJAY Digital Hub and RJAY Barbershop, overseeing business operations, branding and digital services.',
      },
      {
        id: 'barbershop-platform',
        title: 'Full Stack Developer',
        period: 'November 2025 to November 2026',
        summary: 'Built and deployed the barbershop booking platform for service selection, appointments, scheduling and customer records. Managed frontend and backend development, production hosting and product improvements.',
      },
    ],
  },
  {
    id: 'kilindi-district-council',
    organisation: 'Kilindi District Council',
    location: 'Kilindi, Tanzania',
    period: '2024 to 2026',
    summary: 'Licensing software development and two separate ICT field placements.',
    roles: [
      {
        id: 'kdilms',
        title: 'Full Stack Developer | KDILMS',
        period: 'November 2025 to November 2026',
        summary: 'Developed and deployed KDILMS for trader registration, licensing, renewals, debt tracking, SMS reminders and reporting. Implemented access controls, audit trails and data validation, and managed production deployment.',
      },
      {
        id: 'ict-intern-2025',
        title: 'ICT Intern',
        period: 'July 2025 to November 2025',
        summary: 'Delivered technical support for council operations, resolving workstation, printer and network issues. Configured software and biometric devices, and maintained ICT asset and digital records.',
      },
      {
        id: 'ict-intern-2024',
        title: 'ICT Intern',
        period: 'July 2024 to November 2024',
        summary: 'Provided user support, software installation, computer and printer configuration, network troubleshooting and biometric device assistance.',
      },
    ],
  },
]

export const entrepreneurship = {
  title: 'Founder',
  organisation: 'RJAY Digital Hub and RJAY Barbershop',
  period: 'November 2024 to Present',
  intro: 'Founded and operate digital and service businesses, combining software development with customer experience, branding and daily operations.',
  areas: ['Software development', 'Business operations', 'Customer experience', 'Branding', 'Digital marketing'],
}

export const training: TrainingItem[] = [
  {
    title: 'NMB Nuru Yangu Scholarship Mentorship Programme',
    period: '2026',
    areas: [
      'Leadership',
      'Confidence',
      'Self awareness',
      'Career planning',
      'Professional development',
    ],
  },
  {
    title: 'National Service Training (JKT), 822 KJ',
    period: 'June 2023 to September 2023',
    areas: [
      'Discipline',
      'Teamwork',
      'Basic security',
      'Productive work training',
    ],
    note: 'Awarded Grade A for work competence and conduct.',
  },
]
