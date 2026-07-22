export const site = {
  name: 'Ruhumbika Mtumba John',
  initials: 'R',
  title: 'Full-Stack Developer | AI Application Developer | UI/UX Designer',
  roles: [
    'Full-Stack Developer',
    'AI Application Developer',
    'Digital Product Builder',
  ],
  supportingRole: 'UI/UX Designer',
  brandStatement:
    'I build practical digital products by combining full-stack engineering, artificial intelligence and user-centred design.',
  shortStatement:
    'Building intelligent, useful and human-centred digital products.',
  supportingParagraph:
    'Final-year Business Information Technology student with hands-on experience developing web, mobile and AI-enabled systems for local government, education, housing and small-business environments.',
  location: 'Dar es Salaam, Tanzania',
  phone: '+255 787 550 399',
  email: 'ruhumbikamtumbajohn@gmail.com',
  linkedin:
    'https://linkedin.com/in/ruhumbika-mtumba-john-750b502a2',
  github: 'https://github.com/Ruhumbika',
  cv: '/cv/ruhumbika-mtumba-john-cv.pdf',
  profileImage: '/profile/ruhumbika-profile.webp',
  profileImageSquare: '/profile/ruhumbika-profile-square.webp',
  availability:
    'Available for graduate roles, internships, collaborations and freelance projects',
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
      'Open to graduate roles, internships, contracts and collaborations',
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
    { value: '5', label: 'Featured Digital Products' },
    { value: '2', label: 'ICT Field Placements' },
    { value: 'Full-Stack + AI', label: 'Core Focus' },
    { value: 'Dar es Salaam', label: 'Based in Tanzania' },
  ],
  url: 'https://ruhumbika.vercel.app',
} as const

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Availability', href: '/availability' },
  { label: 'Contact', href: '/contact' },
] as const
