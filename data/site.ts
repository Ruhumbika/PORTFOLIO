export const site = {
  name: 'Ruhumbika Mtumba John',
  initials: 'R',
  title: 'Software Engineer | AI Automation | Full-Stack Development | Enterprise Integration',
  roles: [
    'Full-Stack Developer',
    'AI Automation Engineer',
    'Enterprise Systems Integration Developer',
    'Digital Product Builder',
  ],
  supportingRole: 'UI/UX Designer',
  brandStatement:
    'I engineer secure, intelligent digital products through full-stack software development, AI automation and enterprise systems integration.',
  shortStatement:
    'Engineering intelligent, secure and scalable digital solutions.',
  supportingParagraph:
    'Software engineer and Business Information Technology graduate with hands-on experience in enterprise ERP integration, AI-powered applications, workflow automation, cloud deployments and security-conscious web and mobile development.',
  location: 'Dar es Salaam, Tanzania',
  phone: '+255 787 550 399',
  email: 'ruhumbikamtumbajohn@gmail.com',
  linkedin:
    'https://linkedin.com/in/ruhumbika-mtumba-john-750b502a2',
  github: 'https://github.com/Ruhumbika',
  cv: '/cv/Ruhumbika_Mtumba_John_Curriculum_Vitae.pdf',
  profileImage: '/profile/ruhumbika-profile.webp',
  profileImageSquare: '/profile/ruhumbika-profile-square.webp',
  availability:
    'Currently employed · Open to more advantageous full-stack opportunities',
  isAvailable: true,
  availabilityZone: 'EAT · UTC+3',
  responseTime: 'Usually replies within a few hours',
  whatsapp: '255787550399',
  hire: {
    whatsappTemplate:
      "Hi Ruhumbika, I reviewed your product portfolio and I'm impressed. I'd like to fast-track a conversation about a role or contract. When are you free to talk?",
    emailSubject:
      'Opportunity for Ruhumbika: let’s fast-track a conversation',
    emailBody:
      "Hi Ruhumbika,\n\nI reviewed your portfolio and would like to discuss a role or project that fits your full-stack and AI focus.\n\nA few details:\n- Company/Team:\n- Role or project:\n- Timeline:\n\nWhen are you available for a short call?\n\nThanks,",
    reasons: [
      'Builds full-stack and AI products end to end',
      'Completed two ICT field placements in a public-sector environment',
      'Works across Laravel, FastAPI, Flutter and Node.js',
      'Currently employed and open to more advantageous roles, contracts and collaborations',
    ],
  },
  schedule: {
    timeZone: 'Africa/Dar_es_Salaam',
    timeZoneLabel: 'East Africa Time (EAT · UTC+3)',
    weekdayLabel: 'Monday–Friday',
    startHour: 9,
    endHour: 17,
    slotMinutes: 60,
    minimumLeadHours: 12,
    bookingWindowDays: 42,
    unavailableDates: [] as string[],
    unavailableSlots: [] as string[],
  },
  indicators: [
    { value: 'ERP + AI', label: 'Engineering Focus' },
    { value: '2', label: 'ICT Field Placements' },
    { value: 'Full-Stack + AI', label: 'Core Focus' },
    { value: 'Dar es Salaam', label: 'Based in Tanzania' },
  ],
  url: 'https://johnportifolio.rjaybarber.shop',
} as const

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Availability', href: '/availability' },
  { label: 'Contact', href: '/contact' },
] as const
