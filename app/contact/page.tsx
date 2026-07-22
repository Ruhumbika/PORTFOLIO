import type { Metadata } from 'next'
import { CalendarDays, Mail, MapPin, Phone, Clock, ArrowUpRight, Download } from 'lucide-react'
import { site } from '@/data/site'
import { getHireLinks } from '@/lib/hire-links'
import { Reveal } from '@/components/shared/Reveal'
import { Button } from '@/components/shared/Button'
import { ContactForm } from '@/components/contact/ContactForm'
import { Github, Linkedin, Whatsapp } from '@/components/shared/BrandIcons'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Ruhumbika Mtumba John, a full-stack and AI application developer based in Dar es Salaam, Tanzania. Available for graduate roles, internships, contracts and collaborations.',
  alternates: { canonical: '/contact' },
}

const links = getHireLinks()

const channels = [
  {
    label: 'Book an interview',
    sub: 'View weekday availability',
    href: links.schedule,
    Icon: CalendarDays,
    primary: true,
    external: false,
  },
  {
    label: 'WhatsApp',
    sub: 'Pre-filled message · fastest reply',
    href: links.whatsapp,
    Icon: Whatsapp,
    primary: false,
    external: true,
  },
  {
    label: 'Email',
    sub: 'Opens a ready-to-send template',
    href: links.email,
    Icon: Mail,
    primary: false,
    external: true,
  },
  {
    label: 'LinkedIn',
    sub: 'View profile & connect',
    href: links.linkedin,
    Icon: Linkedin,
    primary: false,
    external: true,
  },
  {
    label: 'GitHub',
    sub: 'Browse the code',
    href: site.github,
    Icon: Github,
    primary: false,
    external: true,
  },
]

const details = [
  { label: 'Email', value: site.email, Icon: Mail, href: `mailto:${site.email}` },
  { label: 'Phone', value: site.phone, Icon: Phone, href: `tel:${site.phone.replace(/\s/g, '')}` },
  { label: 'Location', value: site.location, Icon: MapPin, href: undefined },
  { label: 'Response time', value: site.responseTime, Icon: Clock, href: undefined },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      {/* Header + live availability */}
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">Contact</p>
        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="max-w-2xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Let&apos;s fast-track a conversation.
          </h1>
          <span
            className={`inline-flex w-fit items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-sm font-medium ${
              site.isAvailable
                ? 'border-primary/40 bg-primary/10 text-foreground'
                : 'border-border bg-secondary text-muted-foreground'
            }`}
          >
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              {site.isAvailable && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-70" />
              )}
              <span
                className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                  site.isAvailable ? 'bg-primary' : 'bg-muted-foreground'
                }`}
              />
            </span>
            {site.isAvailable ? 'Available for hire & contracts' : 'Currently booked'}
          </span>
        </div>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Whether it&apos;s a graduate role, an internship, a contract or a
          product idea, reach me on your preferred channel with a message
          already written, or send the form and I&apos;ll reply personally.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
        {/* Left: quick channels + details */}
        <div className="flex flex-col gap-8">
          <Reveal>
            <div className="flex flex-col gap-3">
              <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                One-tap outreach
              </h2>
              {channels.map(({ label, sub, href, Icon, primary, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className={`group flex items-center gap-4 rounded-xl border p-4 transition-all duration-200 hover:-translate-y-0.5 ${
                    primary
                      ? 'border-primary/40 bg-primary/10 hover:border-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                      primary
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border bg-secondary text-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{label}</span>
                    <span className="text-xs text-muted-foreground">{sub}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <dl className="grid gap-px overflow-hidden rounded-xl border border-border bg-border">
              {details.map(({ label, value, Icon, href }) => (
                <div key={label} className="flex items-center gap-4 bg-card p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="truncate text-sm text-foreground">
                      {href ? (
                        <a href={href} className="transition-colors hover:text-primary">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <Button
              href={site.cv}
              variant="outline"
              className="w-full"
              {...{ download: '', target: '_blank', rel: 'noopener noreferrer' }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
          </Reveal>
        </div>

        {/* Right: animated form */}
        <Reveal delay={0.05}>
          <div className="rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-foreground">Send a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Fill this in and your email app opens with everything ready to send.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
