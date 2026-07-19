import type { Metadata } from 'next'
import { CalendarCheck2, Mail, MessageCircleMore } from 'lucide-react'
import { InterviewScheduler } from '@/components/scheduling/InterviewScheduler'
import { Reveal } from '@/components/shared/Reveal'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Interview Availability',
  description:
    'View Ruhumbika Mtumba John’s weekday interview availability and prepare a pre-filled interview request by WhatsApp or email.',
  alternates: { canonical: '/availability' },
}

export default function AvailabilityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
          Schedule a conversation
        </p>
        <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Choose a weekday interview slot.
        </h1>
        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          Availability is displayed in {site.schedule.timeZoneLabel}. Choose a
          date and time, add your details, then send a pre-filled request through
          WhatsApp or email for confirmation.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {[
            {
              Icon: CalendarCheck2,
              title: 'Weekday slots',
              text: `${site.schedule.weekdayLabel}, during set working hours`,
            },
            {
              Icon: MessageCircleMore,
              title: 'WhatsApp request',
              text: 'Selected date and visitor details are filled automatically',
            },
            {
              Icon: Mail,
              title: 'Email request',
              text: 'A professional interview request opens in your email app',
            },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-border bg-card p-4">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="mt-3 text-sm font-semibold">{title}</h2>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-10">
        <InterviewScheduler />
      </div>
    </div>
  )
}
