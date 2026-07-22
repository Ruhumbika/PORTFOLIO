# Ruhumbika Mtumba John: Personal Portfolio

A responsive portfolio built with Next.js App Router, TypeScript, Tailwind CSS and Framer Motion. It positions Ruhumbika as a Full-Stack Developer, AI Application Developer and Digital Product Builder, with UI/UX as a supporting advantage.

## Main additions in this version

- Professional profile photograph integrated into the hero and About page.
- Dedicated interview availability page at `/availability`.
- Weekday interview slots with East Africa Time and visitor-local conversion.
- Pre-filled interview requests through WhatsApp and email.
- Tentative `.ics` calendar hold download.
- One-time branded startup preloader and route loading skeleton.
- Dynamic project case-study routes under `/projects/[slug]`.
- Custom 404 page, sitemap, robots metadata and Open Graph image.
- TypeScript build errors are no longer ignored in `next.config.mjs`.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production checks

```bash
npm run check
npm run build
```

## Interview availability configuration

Edit `data/site.ts`:

```ts
schedule: {
  timeZone: 'Africa/Dar_es_Salaam',
  timeZoneLabel: 'East Africa Time (EAT · UTC+3)',
  weekdayLabel: 'Monday–Friday',
  startHour: 9,
  endHour: 17,
  slotMinutes: 60,
  minimumLeadHours: 12,
  bookingWindowDays: 42,
  unavailableDates: [],
  unavailableSlots: [],
}
```

### Block a full date

Use ISO dates:

```ts
unavailableDates: ['2026-07-24', '2026-08-03'],
```

### Block individual interview slots

Use `YYYY-MM-DDTHH:mm` in East Africa Time:

```ts
unavailableSlots: [
  '2026-07-27T10:00',
  '2026-07-28T14:00',
],
```

The current calendar is configuration-based. It does not automatically read private events from Google Calendar. Visitors select an available slot and send a pre-filled WhatsApp or email request. Ruhumbika must confirm the appointment personally.

## Contact destination

WhatsApp and email requests use the values in `data/site.ts`:

```ts
phone: '+255 787 550 399',
email: 'ruhumbikamtumbajohn@gmail.com',
whatsapp: '255787550399',
```

The WhatsApp value must use digits only, including the country code.

## Profile photograph

The optimized portfolio photographs are stored at:

```text
public/profile/ruhumbika-profile.webp
public/profile/ruhumbika-profile-square.webp
```

Replace these files while keeping the same names, or update `profileImage` and `profileImageSquare` in `data/site.ts`.

## CV

Replace the downloadable CV at:

```text
public/cv/ruhumbika-mtumba-john-cv.pdf
```

## Project screenshots

Add screenshots under `public/projects/<project-name>/` and set the `src` field in `data/projects.ts`:

```ts
images: [
  {
    label: 'Administrative dashboard',
    src: '/projects/kdilms/dashboard.webp',
    ratio: 'video',
  },
]
```

When `src` is omitted, the website displays a clean screenshot placeholder.

## Deployment to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Keep the detected framework as Next.js.
4. Run the production build.
5. Update `site.url` in `data/site.ts` to the real deployed domain.
6. Redeploy so canonical URLs, the sitemap and structured metadata use the correct domain.

## Important booking behaviour

- Selecting a date does not reserve it automatically.
- The visitor must send the prepared WhatsApp message or email.
- The downloaded calendar file is marked tentative.
- No visitor details are stored by the portfolio.
- A real-time calendar sync would require a protected backend and Google Calendar or Microsoft Graph integration.
