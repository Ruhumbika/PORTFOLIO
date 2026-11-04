export const site = {
  name: 'Ruhumbika Mtumba John',
  initials: 'R',
  title: 'Software engineer specialising in AI automation, full stack development and enterprise integration',
  roles: [
    'Full Stack Developer',
    'AI Automation Engineer',
    'Enterprise Systems Integration Developer',
    'Digital Product Builder',
  ],
  supportingRole: 'UI/UX Designer',
  brandStatement:
    'I help businesses build reliable web and mobile applications, automate workflows with AI, and connect enterprise systems through secure, maintainable APIs.',
  shortStatement:
    'Full stack software, AI automation and ERP integrations that solve real business problems.',
  supportingParagraph:
    'Software engineer and Business Information Technology graduate with hands on experience in enterprise ERP integration, AI powered applications, workflow automation, cloud deployments and security conscious web and mobile development.',
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
    'Building enterprise software · Open to strategic partnerships',
  isAvailable: true,
  availabilityZone: 'EAT · UTC+3',
  responseTime: 'Usually replies within a few hours',
  whatsapp: '255787550399',
  hire: {
    whatsappTemplate:
      "Hello Ruhumbika, I explored your engineering portfolio and would like to discuss a potential technology partnership or project.",
    emailSubject:
      'Strategic technology partnership inquiry',
    emailBody:
      "Hi Ruhumbika,\n\nI explored your engineering portfolio and would like to discuss a potential collaboration, enterprise integration or digital product initiative.\n\nA few details:\nCompany/Team:\nPartnership or project:\nTimeline:\n\nWhen are you available for a short call?\n\nThanks,",
    reasons: [
      'Builds full stack software and AI automation solutions',
      'Completed two ICT field placements in a public sector environment',
      'Works across Laravel, FastAPI, Flutter and Node.js',
      'Open to strategic partnerships, enterprise projects and technical collaborations',
    ],
  },
  schedule: {
    timeZone: 'Africa/Dar_es_Salaam',
    timeZoneLabel: 'East Africa Time (EAT · UTC+3)',
    weekdayLabel: 'Monday to Friday',
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
    { value: 'Full Stack + AI', label: 'Core Focus' },
    { value: 'Dar es Salaam', label: 'Based in Tanzania' },
  ],
  url: 'https://johnportifolio.rjaybarber.shop',
} as const

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Experience', href: '/experience' },
  { label: 'Availability', href: '/availability' },
  { label: 'Contact', href: '/contact' },
] as const
