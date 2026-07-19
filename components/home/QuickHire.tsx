'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'framer-motion'
import { ArrowUpRight, CalendarDays, CheckCircle2, Clock, Zap } from 'lucide-react'
import { site } from '@/data/site'
import { getHireLinks } from '@/lib/hire-links'
import { Github, Linkedin, Whatsapp } from '@/components/shared/BrandIcons'
import { Mail } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'
import { Reveal } from '@/components/shared/Reveal'

const links = getHireLinks()

const channels = [
  {
    label: 'Choose an interview time',
    sub: 'Weekday calendar · WhatsApp or email request',
    href: links.schedule,
    Icon: CalendarDays,
    primary: true,
    external: false,
  },
  {
    label: 'Quick DM on WhatsApp',
    sub: 'Pre-filled message · fastest reply',
    href: links.whatsapp,
    Icon: Whatsapp,
    primary: false,
    external: true,
  },
  {
    label: 'Email me the role',
    sub: 'Opens a ready-to-send template',
    href: links.email,
    Icon: Mail,
    primary: false,
    external: true,
  },
  {
    label: 'Connect on LinkedIn',
    sub: 'View profile & message',
    href: links.linkedin,
    Icon: Linkedin,
    primary: false,
    external: true,
  },
]

export function QuickHire() {
  const reduce = useReducedMotion()
  const cardRef = useRef<HTMLDivElement | null>(null)

  // Cursor-tracking sheen (radial gradient) + subtle 3D tilt.
  const glowX = useMotionValue(50)
  const glowY = useMotionValue(50)
  const rotX = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })
  const rotY = useSpring(useMotionValue(0), { stiffness: 150, damping: 18 })

  const sheen = useMotionTemplate`radial-gradient(340px circle at ${glowX}% ${glowY}%, color-mix(in oklab, var(--primary) 22%, transparent), transparent 60%)`

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    glowX.set(px * 100)
    glowY.set(py * 100)
    rotY.set((px - 0.5) * 10)
    rotX.set((0.5 - py) * 10)
  }

  function handleLeave() {
    rotX.set(0)
    rotY.set(0)
    glowX.set(50)
    glowY.set(50)
  }

  return (
    <section id="hire" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          label="Available for hire"
          title="Let’s fast-track a conversation"
          description="Skip the long forms. Reach me on the channel you prefer with a message already written for you — I read every one."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* Holographic status card */}
          <Reveal>
            <motion.div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              style={reduce ? undefined : { rotateX: rotX, rotateY: rotY, transformPerspective: 900 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-10"
            >
              {/* cursor sheen */}
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: sheen }}
                  aria-hidden="true"
                />
              )}
              <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />

              <div className="relative flex flex-col gap-6">
                {/* Live availability badge */}
                <div
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
                  {site.isAvailable
                    ? 'Available for hire & contracts'
                    : 'Currently booked'}
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {site.availabilityZone}
                  </span>
                </div>

                <p className="max-w-md text-pretty text-lg leading-relaxed text-foreground/90">
                  {site.shortStatement}
                </p>

                <ul className="flex flex-col gap-3">
                  {site.hire.reasons.map((reason) => (
                    <li key={reason} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span className="text-pretty">{reason}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
                    {site.responseTime}
                  </span>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                    See the code
                  </a>
                </div>
              </div>
            </motion.div>
          </Reveal>

          {/* Pre-filled outreach channels */}
          <Reveal delay={0.08}>
            <div className="flex h-full flex-col gap-3">
              <div className="mb-1 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-primary">
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                One-tap outreach
              </div>
              {channels.map(({ label, sub, href, Icon, primary, external }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  whileHover={reduce ? undefined : { y: -3 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className={`group flex items-center gap-4 rounded-xl border p-5 transition-colors ${
                    primary
                      ? 'border-primary/40 bg-primary/10 hover:border-primary'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${
                      primary
                        ? 'bg-primary text-primary-foreground'
                        : 'border border-border bg-secondary text-foreground'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-medium text-foreground">{label}</span>
                    <span className="text-sm text-muted-foreground">{sub}</span>
                  </span>
                  <ArrowUpRight
                    className="ml-auto h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </motion.a>
              ))}
              <p className="mt-auto pt-3 text-xs leading-relaxed text-muted-foreground">
                Each channel opens with a high-intent message pre-written for
                you — just add your details and send.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
