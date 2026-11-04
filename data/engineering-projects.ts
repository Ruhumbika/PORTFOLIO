import type { Project } from '@/types/project'

/** Delivery status reflects demonstrated scope, not an unverified production claim. */
export const newEngineeringProjects: Project[] = [
  {
    "slug": "whatsapp-approval-gateway",
    "title": "WhatsApp ERP Approval Gateway",
    "shortTitle": "WhatsApp ERP Approval Gateway",
    "category": "Enterprise Automation",
    "status": "Prototype",
    "period": "2026",
    "role": "Full Stack Integration Developer",
    "summary": "An ERP approval solution connecting WhatsApp interactive decisions with authenticated workflows, callback delivery and audit records.",
    "description": "An ERP approval solution connecting WhatsApp interactive decisions with authenticated workflows, callback delivery and audit records.",
    "problem": "Manual approval communication creates delays and fragmented decision records.",
    "solution": "A dedicated approval API and webhook gateway with identity binding, workflow validation, interactive decision handling, workers and ERP callbacks.",
    "contribution": [
      "Implemented the gateway API and webhook integration",
      "Developed approval workflow guards and request tracking",
      "Implemented integration contracts and callback handling"
    ],
    "features": [
      "Interactive WhatsApp decision design",
      "API key authentication",
      "Workflow and approver validation",
      "ERP callback orchestration",
      "Audit event tracking",
      "Retry and delivery worker"
    ],
    "technologies": [
      "Python",
      "REST APIs",
      "WhatsApp Cloud API",
      "Webhooks",
      "SQLite",
      "Background Workers",
      "ERP Integration"
    ],
    "users": "Operations and technology teams",
    "images": [
      {
        "label": "WhatsApp ERP Approval Gateway architecture and workflow overview",
        "ratio": "video"
      }
    ],
    "caseStudySections": [
      {
        "title": "Engineering approach",
        "body": "A dedicated approval API and webhook gateway with identity binding, workflow validation, interactive decision handling, workers and ERP callbacks."
      },
      {
        "title": "Delivery status",
        "body": "A central approval gateway connecting request creation, approver identity and ERP decision records."
      }
    ],
    "outcome": "A central approval gateway connecting request creation, approver identity and ERP decision records.",
    "featured": true
  },
  {
    "slug": "ghrm-attendance-bridge",
    "title": "Biometric Attendance & GHRM Integration",
    "shortTitle": "Biometric Attendance & GHRM Integration",
    "category": "Enterprise Automation",
    "status": "Prototype",
    "period": "2026",
    "role": "Integration Developer",
    "summary": "An attendance integration solution connecting EasyTimePro and ZKTeco records to GHRM through filtering, batch delivery and background processing.",
    "description": "An attendance integration solution connecting EasyTimePro and ZKTeco records to GHRM through filtering, batch delivery and background processing.",
    "problem": "Attendance transactions from biometric and mobile devices needed dependable synchronization with a central HR management system.",
    "solution": "A bridge that reads attendance transactions, maps required punch fields and queues delivery to the GHRM attendance endpoint.",
    "contribution": [
      "Developed attendance forwarding integration",
      "Validated transaction field mapping against GHRM contracts",
      "Implemented background processing and event queues"
    ],
    "features": [
      "Attendance transaction ingestion",
      "Device serial and employee ID handling",
      "Queued event forwarding",
      "Batch processing",
      "Date based filtering",
      "Integration monitoring"
    ],
    "technologies": [
      "Python",
      "Docker",
      "PostgreSQL",
      "REST APIs",
      "ZKTeco",
      "EasyTimePro",
      "GHRM"
    ],
    "users": "Operations and technology teams",
    "images": [
      {
        "label": "Biometric Attendance & GHRM Integration architecture and workflow overview",
        "ratio": "video"
      }
    ],
    "caseStudySections": [
      {
        "title": "Engineering approach",
        "body": "A bridge that reads attendance transactions, maps required punch fields and queues delivery to the GHRM attendance endpoint."
      },
      {
        "title": "Delivery status",
        "body": "A direct integration pipeline connecting attendance transactions with HRM workflows through queued processing."
      }
    ],
    "outcome": "A direct integration pipeline connecting attendance transactions with HRM workflows through queued processing.",
    "featured": true
  },
  {
    "slug": "abood-radio-studio-gateway",
    "title": "ABOOD Media Radio Advertising Integration",
    "shortTitle": "ABOOD Media Radio Advertising Integration",
    "category": "Media Automation",
    "status": "Prototype",
    "period": "2026",
    "role": "Software Integration Developer",
    "summary": "A studio integration for the ABOOD Media system, whose primary goal is tracking radio advertising sales, connecting ERP schedules to RadioBOSS playback and advertisement insertion.",
    "description": "A studio integration for the ABOOD Media system, whose primary goal is tracking radio advertising sales, connecting ERP schedules to RadioBOSS playback and advertisement insertion.",
    "problem": "Radio advertising operations need a connection between commercial advertising records, ERP schedules and studio playback.",
    "solution": "A Windows studio gateway designed to connect ERP advertising schedules to RadioBOSS, validate audio assets and coordinate scheduled advertisement playback.",
    "contribution": [
      "Developed the Windows studio integration environment",
      "Integrated RadioBOSS playback and advertisement insertion commands",
      "Implemented scheduling and audio integrity safeguards"
    ],
    "features": [
      "RadioBOSS API playback control",
      "Advertisement track insertion",
      "Audio asset integrity checking",
      "Schedule gateway integration",
      "Studio worker coordination"
    ],
    "technologies": [
      "Python",
      "RadioBOSS API",
      "Windows",
      "HTTP APIs",
      "KVM",
      "Ubuntu"
    ],
    "users": "Operations and technology teams",
    "images": [
      {
        "label": "ABOOD Media Radio Advertising Integration architecture and workflow overview",
        "ratio": "video"
      }
    ],
    "caseStudySections": [
      {
        "title": "Engineering approach",
        "body": "A Windows studio gateway designed to connect ERP advertising schedules to RadioBOSS, validate audio assets and coordinate scheduled advertisement playback."
      },
      {
        "title": "Delivery status",
        "body": "Connects the studio playback layer with the wider ABOOD Media advertising workflow. ERP schedule integration is in development."
      }
    ],
    "outcome": "Connects the studio playback layer with the wider ABOOD Media advertising workflow. ERP schedule integration is in development.",
    "featured": true
  },
{
  "slug": "attendance-core-dashboard",
  "title": "Attendance Core, Biometric Attendance Platform",
  "shortTitle": "Attendance Core",
  "category": "Enterprise Automation",
  "status": "Live",
  "period": "2026",
  "role": "Integration Developer",
  "summary": "Enterprise attendance platform combining staff records, biometric devices and operational dashboards, with GHRM integration work.",
  "description": "Attendance Core provides personnel and device monitoring, attendance reports and operational dashboards. My contribution focuses on integration and event forwarding.",
  "problem": "Attendance from distributed devices requires central visibility and integration with HR systems.",
  "solution": "A deployed attendance platform paired with an integration bridge for GHRM attendance ingestion.",
  "contribution": [
    "Configured EasyTimePro infrastructure and mobile punch tests",
    "Developed the GHRM event forwarding bridge",
    "Validated employee and device transaction fields"
  ],
  "features": [
    "Employee and device overview",
    "Attendance monitoring",
    "Biometric device status",
    "GHRM integration bridge"
  ],
  "technologies": [
    "EasyTimePro",
    "ZKTeco",
    "PostgreSQL",
    "Docker",
    "Python",
    "REST APIs"
  ],
  "users": "HR, attendance administrators and technical operations teams",
  "images": [
    {
      "label": "Attendance Core dashboard, company personnel, device and attendance overview",
      "src": "/projects/attendance-core/dashboard.png",
      "ratio": "screen"
    }
  ],
  "liveUrl": "https://attendance-core.abooderp.com/",
  "caseStudySections": [
    {
      "title": "System and integration",
      "body": "The dashboard is part of the attendance platform. My engineering work includes deploying supporting services and forwarding attendance transactions to GHRM."
    },
    {
      "title": "Privacy",
      "body": "Production dashboards require authorized access; the portfolio shows a provided screenshot rather than embedding restricted company data."
    }
  ],
  "outcome": "An attendance platform with GHRM integration workflows and controlled access to operational records.",
  "featured": true
},
  {
    "slug": "rjay-wifi-platform",
    "title": "RJAY WiFi Digital Platform",
    "shortTitle": "RJAY WiFi Digital Platform",
    "category": "Digital Products",
    "status": "Live",
    "period": "2026",
    "role": "Software Developer & Operator",
    "summary": "Maintained a self hosted WiFi application and production infrastructure with Nginx virtual hosting on a personal VPS.",
    "description": "Maintained a self hosted WiFi application and production infrastructure with Nginx virtual hosting on a personal VPS.",
    "problem": "A WiFi service requires reliable web access and independently managed infrastructure.",
    "solution": "A VPS hosted platform with dedicated web routing and operations workflows.",
    "contribution": [
      "Configured and maintained application hosting",
      "Managed VPS deployment alongside other isolated services"
    ],
    "features": [
      "Dedicated Nginx virtual hosting",
      "Self hosted deployment",
      "Application operations",
      "Infrastructure configuration"
    ],
    "technologies": [
      "Ubuntu",
      "Nginx",
      "VPS",
      "Git",
      "Web Applications"
    ],
    "users": "Operations and technology teams",
    "images": [
      {
        "label": "RJAY WiFi Digital Platform architecture and workflow overview",
        "ratio": "video"
      }
    ],
    "caseStudySections": [
      {
        "title": "Engineering approach",
        "body": "A VPS hosted platform with dedicated web routing and operations workflows."
      },
      {
        "title": "Delivery status",
        "body": "Operational self hosted web platform on the personal VPS."
      }
    ],
    "outcome": "Operational self hosted web platform on the personal VPS.",
    "featured": true
  }
]
