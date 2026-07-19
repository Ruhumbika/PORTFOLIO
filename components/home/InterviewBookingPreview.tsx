import { ArrowRight, CalendarDays, Clock3, Mail, MessageCircleMore } from 'lucide-react'
import { site } from '@/data/site'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'

export function InterviewBookingPreview() {
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <Reveal>
          <div className="hero-wash relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-9 lg:p-12">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  Interview calendar
                </p>
                <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
                  Pick an available time and send a ready-made request.
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                  Recruiters and collaborators can view my weekday availability,
                  choose a suitable interview slot and contact me through a
                  pre-filled WhatsApp message or email.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="/availability">
                    View availability
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button href="/contact" variant="outline">
                    Other contact options
                  </Button>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <CalendarDays className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium">{site.schedule.weekdayLabel}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Weekday interview availability</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <Clock3 className="h-5 w-5 text-primary" aria-hidden="true" />
                  <p className="mt-3 text-sm font-medium">09:00–17:00 EAT</p>
                  <p className="mt-1 text-xs text-muted-foreground">Times convert to the visitor’s local zone</p>
                </div>
                <div className="rounded-xl border border-border bg-background/40 p-4">
                  <div className="flex items-center gap-2 text-primary">
                    <MessageCircleMore className="h-5 w-5" aria-hidden="true" />
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm font-medium">WhatsApp or Email</p>
                  <p className="mt-1 text-xs text-muted-foreground">No account or login required</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
