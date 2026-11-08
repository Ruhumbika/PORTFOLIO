# Ruhumbika Mtumba John | Software Engineering Portfolio

I built this portfolio to present my software engineering work across enterprise systems, transport, media and digital services. Each case study connects the business need with my contribution, implementation and delivery stage.

**[Visit the portfolio](https://johnportifolio.rjaybarber.shop)** · **[Experience](https://johnportifolio.rjaybarber.shop/experience)** · **[Project case studies](https://johnportifolio.rjaybarber.shop/projects)**

## What to explore

- **Abood Group:** ERP development, WhatsApp ticketing support, approval workflows, biometric attendance integration and advertising/broadcast operations.
- **RJAY Digital Hub:** business ownership and development of a barbershop booking platform.
- **Kilindi District Council:** trader licensing software and two separate ICT field placements.
- **Selected projects:** implementation context, contribution, technologies, screenshots and delivery stage.

## Implementation

| Area | Implementation |
| --- | --- |
| Application structure | Next.js App Router, typed data modules and reusable React components |
| Experience presentation | Organisation groups, role timelines, separate placement dates and current-role indicators |
| Project storytelling | Dynamic case-study routes with technical and business context |
| User experience | Responsive layouts, theme support and reduced-motion-aware animation |
| Discovery | Metadata, canonical URLs, sitemap, robots and Open Graph assets |
| Contact workflow | Configurable availability and prepared meeting requests |

## Stack

Next.js, React, TypeScript, Tailwind CSS and Framer Motion. The production application runs on a VPS; the GitHub integration also provides Vercel previews for review.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Validate and build

```bash
npm run check
npm run build
```

```bash
npm run start
```

## Content and configuration

| Path | Purpose |
| --- | --- |
| [`data/experience.ts`](data/experience.ts) | Organisation groups, roles, dates and summaries |
| [`components/shared/ExperienceTimeline.tsx`](components/shared/ExperienceTimeline.tsx) | Shared role timeline |
| [`data/projects.ts`](data/projects.ts) | Project case studies |
| [`data/engineering-projects.ts`](data/engineering-projects.ts) | Additional integration case studies |
| [`data/site.ts`](data/site.ts) | Profile, site URL, contact destinations and availability |
| [`public/projects/`](public/projects/) | Project screenshots and media |
| [`public/cv/`](public/cv/) | Downloadable CV |

Availability is configuration-based. Selecting a slot prepares a meeting request; it does not create a confirmed booking or read a private calendar. See the availability page for the visitor-facing flow.

## Release workflow

Create a feature branch, open a pull request, review the preview, then merge approved changes. Update the VPS checkout, build and restart `john-portfolio.service` after review. Repository changes and production deployment are separate steps.
