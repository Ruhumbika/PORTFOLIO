import type { Project } from '@/types/project'

/** Delivery status reflects demonstrated scope, not an unverified production claim. */
export const newEngineeringProjects: Project[] = [
  {
    "slug": "whatsapp-approval-gateway",
    "title": "WhatsApp ERP Approval Gateway",
    "shortTitle": "WhatsApp ERP Approval Gateway",
    "category": "Enterprise Automation",
    "status": "Live",
    "period": "2026",
    "role": "Full Stack Integration Developer",
    "summary": "A live backend gateway connecting ERP approval workflows to WhatsApp, where approvers receive requests and submit decisions.",
    "description": "A live backend gateway connecting ERP approval workflows to WhatsApp, where approvers receive requests and submit decisions.",
    "problem": "Manual approval communication creates delays and fragmented decision records.",
    "solution": "A dedicated approval API and webhook gateway with identity binding, workflow validation, interactive decision handling, workers and ERP callbacks.",
    "contribution": [
      "Implemented the gateway API and webhook integration",
      "Developed approval workflow guards and request tracking",
      "Implemented integration contracts and callback handling"
    ],
    "features": [
      "Interactive approval decisions through WhatsApp",
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
    "users": "ERP approvers and operations teams using WhatsApp",
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
        "title": "Live operation",
        "body": "The gateway runs as a backend service connected to WhatsApp. WhatsApp is the primary interface for approvers, while authenticated APIs, webhooks and background workers connect decisions to ERP workflows."
      }
    ],
    "outcome": "A live WhatsApp connected backend linking approval requests, approver identity and ERP decision records.",
    "featured": true
  },
  {
    "slug": "ghrm-attendance-bridge",
    "title": "Biometric Attendance & GHRM Integration",
    "shortTitle": "Biometric Attendance & GHRM Integration",
    "category": "Enterprise Automation",
    "status": "Live",
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
        "title": "Live integration",
        "body": "The live backend integration connects biometric attendance transactions to GHRM workflows through queued processing. Access to the connected HR platform requires an authorised account."
      }
    ],
    "outcome": "A live integration connecting biometric attendance transactions with GHRM workflows through queued processing.",
    "featured": true
  },
  {
    "slug": "abood-radio-studio-gateway",
    "liveUrl": "https://appdemo.abooderp.com/",
    "title": "ABOOD Media Radio Advertising Integration",
    "shortTitle": "ABOOD Media Radio Advertising Integration",
    "category": "Media Automation",
    "status": "Live",
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
        "label": "ABOOD Media sign in page",
        "src": "/projects/abood-media/login.png",
        "ratio": "screen",
        "fit": "contain"
      }
    ],
    "caseStudySections": [
      {
        "title": "Engineering approach",
        "body": "A Windows studio gateway designed to connect ERP advertising schedules to RadioBOSS, validate audio assets and coordinate scheduled advertisement playback."
      },
      {
        "title": "Live deployment",
        "body": "The ABOOD Media application is deployed. Access to internal advertising and studio workflows requires an authorised account."
      }
    ],
    "outcome": "A deployed media system connecting radio advertising operations with studio integration workflows.",
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
        "label": "Attendance Core overview with personnel details excluded",
        "src": "/projects/attendance-core/overview-public.png",
        "ratio": "screen",
        "fit": "contain"
      }
    ],
    "liveUrl": "http://attendance-core.abooderp.com/",
    "caseStudySections": [
      {
        "title": "System and integration",
        "body": "The dashboard is part of the attendance platform. My engineering work includes deploying supporting services and forwarding attendance transactions to GHRM."
      },
      {
        "title": "Access control",
        "body": "The deployed attendance platform requires authorised access. This portfolio image excludes employee records."
      }
    ],
    "outcome": "An attendance platform with GHRM integration workflows and controlled access to operational records.",
    "featured": true
  },
  {
    "slug": "rjay-wifi-platform",
    "title": "Mwanakitaa Kitonga WiFi",
    "shortTitle": "Mwanakitaa Kitonga WiFi",
    "category": "Digital Products",
    "status": "Live",
    "period": "2026",
    "role": "Software Developer & Operator",
    "summary": "A live WiFi access platform with voucher login, internet packages and self hosted application infrastructure.",
    "description": "A live WiFi access platform with voucher login, internet packages and self hosted application infrastructure.",
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
    "users": "WiFi customers and service operators",
    "images": [
      {
        "label": "Mwanakitaa Kitonga WiFi voucher access and internet packages",
        "src": "/projects/mwanakitaa-kitonga-wifi/portal.png",
        "ratio": "screen",
        "fit": "contain"
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
    "featured": true,
    "liveUrl": "https://wifi.95-111-248-145.sslip.io/"
  }
]
