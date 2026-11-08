<p align="center"><img src="assets/readme/cover.svg" alt="Software Engineering Portfolio" width="100%"></p>

<p align="center"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-142632?style=flat-square&amp;labelColor=142632&amp;color=53debd"> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-142632?style=flat-square&amp;labelColor=142632&amp;color=53debd"> <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-142632?style=flat-square&amp;labelColor=142632&amp;color=53debd"></p>

[**Live portfolio**](https://johnportifolio.rjaybarber.shop) · [Experience](https://johnportifolio.rjaybarber.shop/experience) · [Case studies](https://johnportifolio.rjaybarber.shop/projects)

I built this portfolio to present my work across enterprise systems, transport, media and digital services through concise case studies and a grouped experience timeline.

### My contribution

| Contribution | Scope |
| :--- | :--- |
| **Project case studies** | Business needs, contributions, stack and screenshots. |
| **Experience timeline** | Organisation groups, role progression and dates. |
| **Web application** | Responsive layouts, typed content and metadata. |

<details>
<summary><strong>Developer setup & technical reference</strong></summary>

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

</details>

---

Built by [Ruhumbika Mtumba John](https://github.com/Ruhumbika) · [Engineering portfolio](https://johnportifolio.rjaybarber.shop)
