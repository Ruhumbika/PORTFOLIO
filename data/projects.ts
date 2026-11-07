import type { Project } from '@/types/project'
import { newEngineeringProjects } from './engineering-projects'

export const projects: Project[] = [
  ...newEngineeringProjects,
  {
      "slug": "eagersky",
      "title": "Eagersky Real Estate Platform",
      "shortTitle": "Eagersky",
      "category": "Freelance Real Estate Project",
      "status": "Live",
      "period": "Current",
      "role": "Freelance Software Developer",
      "summary": "A real estate and accommodation platform connecting property seekers with listings and booking requests.",
      "description": "Eagersky provides property and accommodation discovery across locations, including rooms, hostels and apartments.",
      "problem": "Property seekers need a clear way to compare accommodation and contact property providers.",
      "solution": "A web platform combining property listings, location and budget filters, accommodation categories and booking requests.",
      "contribution": [
          "Property discovery and listing workflows",
          "Booking request user journeys",
          "Responsive web interfaces"
      ],
      "features": [
          "Property listings",
          "Location and budget filters",
          "Accommodation categories",
          "Booking requests"
      ],
      "technologies": [],
      "users": "Property seekers, tenants and property providers.",
      "images": [
          {
              "label": "Eagersky property discovery and booking platform",
              "ratio": "video"
          }
      ],
      "liveUrl": "https://eagersky.com/",
      "caseStudySections": [
          {
              "title": "Property discovery",
              "body": "Visitors can browse accommodation by location, category and budget, then view property details and submit booking requests."
          }
      ],
      "outcome": "A central place to discover accommodation and connect property seekers with providers.",
      "featured": true
  },
  {
    slug: 'peta-holdings-erp',
    title: 'PETA Holdings ERP Dashboard',
    shortTitle: 'PETA ERP',
    category: 'Enterprise Resource Planning System',
    status: 'Live',
    period: '2026 to Present',
    role: 'Full Stack Developer',
    organisation: 'Ma Cargo Transporters and Forwarders (ABOOD Group of Companies)',
    summary:
      'An enterprise dashboard for PETA Holdings that brings property, lease, revenue, unit status and operational monitoring into one workspace.',
    description:
      'A live ERP dashboard for PETA Holdings (T) Limited, providing a central workspace for property portfolio monitoring, leases, collections and operational performance.',
    problem:
      'Property and operational data needs a clear, centralised view so teams can monitor occupancy, leases, revenue and overdue invoices efficiently.',
    solution:
      'A role based ERP dashboard that surfaces portfolio metrics, unit status, lease activity, revenue, expenses and business alerts in one interface.',
    contribution: [
      'Full stack feature development',
      'ERP dashboard implementation',
      'Business data visualisation',
      'Lease and property workflow support',
      'Production troubleshooting and improvements',
    ],
    features: [
      'Property portfolio overview',
      'Lease monitoring',
      'Occupancy and unit status tracking',
      'Revenue and expense performance',
      'Overdue invoice alerts',
      'Business monitoring dashboard',
    ],
    technologies: ['Full Stack Web Development', 'ERP Systems', 'Dashboards', 'Data Visualisation'],
    users: 'Property, finance and operations teams managing PETA Holdings assets and leases.',
    images: [
      {
        label: 'ABOOD Group of Companies ERP sign-in screen',
        src: '/projects/peta-holdings-erp/dashboard.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings ERP dashboard overview',
        src: '/projects/peta-holdings-erp/petadashboard.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings attendance management',
        src: '/projects/peta-holdings-erp/attendence.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings billing and expenses',
        src: '/projects/peta-holdings-erp/billingexpenses.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings billing schedule detail',
        src: '/projects/peta-holdings-erp/billingscheduledetail.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings bills and invoices',
        src: '/projects/peta-holdings-erp/billsandinvoice.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings contract details',
        src: '/projects/peta-holdings-erp/contractdetail.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings contracts page',
        src: '/projects/peta-holdings-erp/contractpage.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings journal voucher creation',
        src: '/projects/peta-holdings-erp/journalvouchercreate.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings requisitions',
        src: '/projects/peta-holdings-erp/requisition.png',
        ratio: 'screen',
      },
      {
        label: 'PETA Holdings requisition details',
        src: '/projects/peta-holdings-erp/requisitiondetail.png',
        ratio: 'screen',
      },
    ],
    liveUrl: 'https://app.abooderp.com/#/peta/home',
    githubUrl: undefined,
    caseStudySections: [
      {
        title: 'Business context',
        body: 'The ERP workspace supports PETA Holdings teams with a consolidated view of property operations, active leases, collections and unit status.',
      },
      {
        title: 'Developer role',
        body: 'As a Full Stack Developer at Ma Cargo Transporters and Forwarders, I contribute to the development and ongoing improvement of this live enterprise system.',
      },
    ],
    outcome:
      'A live operational dashboard that helps teams understand portfolio performance and act on lease, revenue and invoice information.',
    featured: true,
  },
  {
    slug: 'student-support-llm',
    title: 'Student Support LLM Platform',
    shortTitle: 'Student Support LLM',
    category: 'AI Application',
    status: 'Academic Project',
    period: '2026',
    role: 'Full Stack Developer & AI Integration Developer',
    summary:
      'A locally hosted, privacy conscious AI assistant that answers student academic questions using a lightweight Llama model, a FastAPI backend and Retrieval Augmented Generation over a custom FAQ knowledge base.',
    description:
      'A locally hosted AI powered student support assistant developed to provide conversational academic guidance while demonstrating the complete deployment pipeline of an LLM based application.',
    problem:
      'Students need a convenient way to access common academic guidance, while the academic assignment required an understanding of how a local language model, backend and frontend communicate.',
    solution:
      'A local AI application in which a Streamlit interface sends requests to a FastAPI backend, which communicates with an Ollama hosted language model and a custom knowledge base.',
    contribution: [
      'Designed the frontend to model request pipeline',
      'Implemented the FastAPI backend and API contracts',
      'Built the custom FAQ knowledge base',
      'Integrated the Retrieval Augmented Generation pipeline',
      'Added logging and testing',
      'Documented production readiness improvements',
    ],
    features: [
      'Chat style user interface',
      'Local model inference',
      'Custom university FAQ knowledge base',
      'Retrieval Augmented Generation',
      'API based frontend and backend communication',
      'Logging and testing',
      'Privacy conscious local deployment',
      'Documented production readiness improvements',
    ],
    technologies: [
      'Python',
      'FastAPI',
      'Uvicorn',
      'Streamlit',
      'Ollama',
      'Lightweight Llama model',
      'Retrieval Augmented Generation',
      'Custom FAQ knowledge base',
    ],
    users:
      'Students seeking quick, reliable answers to common academic questions.',
    images: [
      {
        label: 'Student Support LLM welcome and chat interface',
        src: '/projects/student-support-llm/chat-welcome.webp',
        ratio: 'screen',
      },
      {
        label: 'Grounded student support response from the local LLM',
        src: '/projects/student-support-llm/grounded-response.webp',
        ratio: 'screen',
      },
      {
        label: 'Student question and follow up response workflow',
        src: '/projects/student-support-llm/chat-follow-up.webp',
        ratio: 'screen',
      },
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    caseStudySections: [
      {
        title: 'Architecture',
        body: 'The application demonstrates a full local LLM pipeline where each layer communicates over clear API boundaries. No external paid AI API is used. Inference runs locally through Ollama.',
        bullets: [
          'User → Streamlit frontend',
          'Streamlit → FastAPI backend',
          'FastAPI → RAG retrieval',
          'RAG → Ollama local model',
          'Model → generated response',
          'Response → frontend display',
        ],
      },
      {
        title: 'Retrieval Augmented Generation',
        body: 'A custom university FAQ knowledge base is retrieved and injected into prompts so answers stay relevant and grounded, while keeping all data on local infrastructure.',
      },
      {
        title: 'Production readiness',
        body: 'The assistant was built as a learning focused deployment, with logging, testing and a documented list of improvements needed to move it toward production.',
      },
    ],
    outcome:
      'Demonstrated an end to end, privacy conscious local LLM deployment with grounded, knowledge base driven responses.',
    featured: true,
  },
  {
    slug: 'rental-platform',
    title: 'Mobile First Rental Platform',
    shortTitle: 'Rental Platform',
    category: 'Mobile Application / Marketplace MVP',
    status: 'MVP',
    period: '2025 to 2026',
    role: 'Product Developer',
    summary:
      'A mobile first rental marketplace MVP designed to improve trust, transparency and accessibility between tenants, landlords and administrators, with several trust and safety features prepared as concepts.',
    description:
      'A mobile first rental marketplace designed to improve trust, transparency and accessibility between tenants, landlords and platform administrators.',
    problem:
      'Rental seekers may experience fraudulent listings, unclear property information, limited transparency and weak communication with landlords.',
    solution:
      'A role based marketplace containing property listings, search, filters, map discovery, digital contract workflows and administrative oversight.',
    contribution: [
      'Product architecture and data modelling',
      'Role based marketplace design',
      'Authentication with JWT',
      'REST API design',
      'Trust and safety design for listings',
    ],
    features: [
      'Tenant, landlord and administrator roles',
      'Property listings',
      'Search and filters',
      'Map discovery',
      'Authentication',
      'Digital contracts',
      'Notifications',
      'Listing availability',
      'Trust and safety workflows (concept)',
      'Escrow payment concepts (planned)',
      'Dispute handling concepts (planned)',
    ],
    technologies: [
      'Flutter',
      'Node.js',
      'Express.js',
      'PostgreSQL',
      'REST APIs',
      'JWT Authentication',
      'Git & GitHub',
    ],
    users:
      'Tenants searching for trustworthy housing, landlords listing properties and administrators overseeing the marketplace.',
    images: [
      { label: 'Vyumba Ubungo mobile rental discovery screen', src: '/projects/rental-platform/vyumba-mobile.png', ratio: 'portrait', uncropped: { width: 576, height: 1280 } },
      { label: 'Property details', ratio: 'portrait' },
      { label: 'Map screen', ratio: 'portrait' },
      { label: 'Landlord dashboard', ratio: 'video' },
      { label: 'System architecture', ratio: 'wide' },
      { label: 'User journey', ratio: 'wide' },
    ],
    liveUrl: undefined,
    githubUrl: undefined,
    caseStudySections: [
      {
        title: 'Product thinking',
        body: 'The platform was scoped as an MVP and startup concept focused on trustworthy housing access. Core discovery and listing flows were designed first, with escrow, dispute handling and full trust and safety systems treated as planned improvements rather than shipped features.',
      },
      {
        title: 'Technical foundation',
        body: 'The architecture is built around JWT authentication, REST APIs and PostgreSQL data models, providing a scalable base for an East African rental marketplace.',
      },
    ],
    outcome:
      'Produced a working MVP direction and a clear, scalable architecture for a trust focused rental marketplace.',
    featured: true,
  },
  {
    slug: 'rjay-barbershop',
    title: 'RJAY Barbershop Digital Booking & Brand Platform',
    shortTitle: 'RJAY Barbershop',
    category: 'Business Digital Product',
    status: 'Business Product',
    period: '2025 to 2026',
    role: 'Product Designer, Business Owner & Operator',
    summary:
      'A customer facing booking and brand platform for a real barbershop business, connecting software, design and entrepreneurship into one operating product.',
    description:
      'A customer facing digital booking and brand platform created for a real barbershop business.',
    problem:
      'A growing barbershop needed an organised way for customers to view services, browse styles and book appointments while strengthening its brand online.',
    solution:
      'A responsive booking platform with a Python powered backend, service and haircut style catalogue, appointment scheduling, admin availability controls and consistent digital branding.',
    contribution: [
      'Python backend development and booking system logic',
      'Product and booking journey design',
      'Service and haircut style catalogue structure',
      'Admin availability and scheduling controls',
      'Responsive website and digital branding',
      'Social media content planning and business operations',
    ],
    features: [
      'Service catalogue',
      'Haircut style catalogue',
      'Appointment booking',
      'Scheduling',
      'Admin availability controls',
      'Responsive website',
      'Digital branding',
      'Social media marketing',
    ],
    technologies: [
      'Python 52.2%',
      'JavaScript 43.8%',
      'HTML 3.2%',
      'Other 0.8%',
    ],
    users: 'Barbershop customers booking appointments and browsing styles and services.',
    images: [
      {
        label: 'RJAY Barbershop haircut gallery and booking interface',
        src: '/projects/rjay-barbershop/mobile-video-poster.jpg',
        videoSrc: '/projects/rjay-barbershop/mobile-demo.webm',
        ratio: 'screen',
      },
      {
        label: 'Haircut style details and booking call to action',
        src: '/projects/rjay-barbershop/haircut-details.webp',
        ratio: 'screen',
      },
      {
        label: 'Barber profile, services and customer reviews',
        src: '/projects/rjay-barbershop/barber-profile.webp',
        ratio: 'screen',
      },
      {
        label: 'Haircut styles and service catalogue',
        src: '/projects/rjay-barbershop/styles-catalogue.webp',
        ratio: 'screen',
      },
      {
        label: 'Customer booking dashboard',
        src: '/projects/rjay-barbershop/booking-dashboard.webp',
        ratio: 'screen',
      },
      {
        label: 'Barbershop content management dashboard',
        src: '/projects/rjay-barbershop/content-management.webp',
        ratio: 'screen',
      },
      {
        label: 'Appointment availability management',
        src: '/projects/rjay-barbershop/availability-management.webp',
        ratio: 'screen',
      },
      {
        label: 'Twist Out haircut style preview',
        src: '/projects/rjay-barbershop/style-preview.webp',
        ratio: 'screen',
      },
      {
        label: 'Appointment date and time scheduling',
        src: '/projects/rjay-barbershop/appointment-scheduling.webp',
        ratio: 'screen',
      },
    ],
    liveUrl: 'https://rjaybarber.shop',
    githubUrl: undefined,
    caseStudySections: [
      {
        title: 'Where the disciplines meet',
        body: 'This project connects my software, design and entrepreneurship experience: I built and designed the platform while operating the underlying business, which shaped every product decision around real customer behaviour.',
      },
      {
        title: 'Brand & operations',
        body: 'Beyond booking, the platform supports digital branding and social media marketing that strengthen online visibility and encourage repeat business.',
      },
    ],
    outcome:
      'Delivered a live, customer facing product that combines booking, branding and day to day business operations.',
    featured: true,
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug)
}
