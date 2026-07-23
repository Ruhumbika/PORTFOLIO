'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import {
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Download,
  MapPin,
  PenTool,
  Rocket,
  RotateCcw,
} from 'lucide-react'
import { site } from '@/data/site'
import { Button } from '@/components/shared/Button'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { TechTag } from '@/components/shared/TechTag'

const heroTech = ['Laravel', 'FastAPI', 'Flutter', 'Node.js', 'Ollama', 'PostgreSQL']
const workflowNodes = Array.from({ length: 20 }, (_, index) => index)
const orbitCards = [
  {
    label: 'Build',
    Icon: Code2,
    x: [0, 170, 0, -170, 0],
    y: [-210, 0, 210, 0, -210],
  },
  {
    label: 'AI',
    Icon: BrainCircuit,
    x: [170, 0, -170, 0, 170],
    y: [0, 210, 0, -210, 0],
  },
  {
    label: 'Design',
    Icon: PenTool,
    x: [0, -170, 0, 170, 0],
    y: [210, 0, -210, 0, 210],
  },
  {
    label: 'Ship',
    Icon: Rocket,
    x: [-170, 0, 170, 0, -170],
    y: [0, -210, 0, 210, 0],
  },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [profileFlipped, setProfileFlipped] = useState(false)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), {
    stiffness: 180,
    damping: 22,
  })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-6, 6]), {
    stiffness: 180,
    damping: 22,
  })
  const nodeX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-12, 12]))
  const nodeY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-10, 10]))
  const imageX = useSpring(useTransform(pointerX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 22,
  })
  const imageY = useSpring(useTransform(pointerY, [-0.5, 0.5], [-7, 7]), {
    stiffness: 150,
    damping: 22,
  })

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setProfileFlipped(true), 30_000)
    const resetTimer = window.setTimeout(() => setProfileFlipped(false), 90_000)

    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(resetTimer)
    }
  }, [])

  function toggleProfileCard() {
    setProfileFlipped((current) => !current)
  }

  function handleVisualPointer(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce) return
    const bounds = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - bounds.left) / bounds.width - 0.5)
    pointerY.set((event.clientY - bounds.top) / bounds.height - 0.5)
  }

  function resetVisualPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }
  const item: Variants = reduce
    ? {
        hidden: { opacity: 1, y: 0 },
        visible: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
      }

  return (
    <section className="hero-wash relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-[0.35]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:pb-24 lg:pt-24">
        {/* Left column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col justify-center"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs uppercase tracking-[0.22em] text-primary"
          >
            Hello, I&apos;m Ruhumbika.
          </motion.p>
          <motion.p
            variants={item}
            className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            Full-Stack · AI Applications · Digital Products
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ruhumbika
            <br />
            Mtumba John
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 text-lg font-medium text-foreground/90"
          >
            Full-Stack Developer{' '}
            <span className="text-muted-foreground">|</span> AI Application
            Developer <span className="text-muted-foreground">|</span> UI/UX
            Designer
          </motion.p>

          <motion.p
            variants={item}
            className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground"
          >
            {site.brandStatement}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground"
          >
            {site.supportingParagraph}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="/projects">
              Explore Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href={site.cv}
              variant="outline"
              {...{ target: '_blank', rel: 'noopener noreferrer' }}
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download CV
            </Button>
            <Button href="/availability" variant="ghost">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              Book Interview
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <SocialLinks />
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              {site.location}
            </span>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-6 inline-flex items-center gap-2.5 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 text-sm text-foreground"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {site.availability}
          </motion.div>
        </motion.div>

        {/* Right column with profile and technical detail */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex min-h-[31rem] items-center justify-center"
          onPointerMove={handleVisualPointer}
          onPointerLeave={resetVisualPointer}
        >
          {/* Subtle abstract teal shape behind image */}
          <div
            className="absolute -right-6 -top-6 h-40 w-40 rounded-2xl bg-primary/15 blur-2xl"
            aria-hidden="true"
          />
          <motion.div
            className="workflow-field"
            style={reduce ? undefined : { x: nodeX, y: nodeY }}
            aria-hidden="true"
          >
            {workflowNodes.map((node) => (
              <span
                key={node}
                className={`workflow-node ${node === 6 || node === 14 ? 'is-active' : ''}`}
                style={{ '--node-index': node } as React.CSSProperties}
              />
            ))}
          </motion.div>

          <motion.div
            className="relative w-full max-w-sm"
            style={reduce ? undefined : { rotateX, rotateY, perspective: 1100 }}
          >
            <AnimatePresence>
              {profileFlipped ? (
                <motion.div
                  initial={reduce ? false : { opacity: 0, x: '-50%', y: 10, scale: 0.92 }}
                  animate={{ opacity: 1, x: '-50%', y: 0, scale: 1 }}
                  exit={reduce ? undefined : { opacity: 0, x: '-50%', y: 8, scale: 0.94 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  className="profile-opportunity-popup"
                  role="status"
                  aria-live="polite"
                >
                  <span className="relative flex h-2 w-2">
                    {!reduce ? (
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-55" />
                    ) : null}
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Currently seeking a role
                </motion.div>
              ) : null}
            </AnimatePresence>

            <div className="profile-orbit-ring" aria-hidden="true" />
            {orbitCards.map(({ label, Icon, x, y }) => (
              <motion.div
                key={label}
                className="profile-orbit-card"
                initial={reduce ? { x: x[0], y: y[0] } : { opacity: 0, scale: 0.7 }}
                animate={
                  reduce
                    ? { opacity: 1, scale: 1, x: x[0], y: y[0] }
                    : { opacity: 1, scale: 1, x, y }
                }
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        opacity: { duration: 0.45, delay: 0.7 },
                        scale: { duration: 0.45, delay: 0.7 },
                        x: { duration: 18, repeat: Infinity, ease: 'linear' },
                        y: { duration: 18, repeat: Infinity, ease: 'linear' },
                      }
                }
                aria-hidden="true"
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </motion.div>
            ))}

            <div className="absolute -left-3 top-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:block">
              <span className="[writing-mode:vertical-rl]">product · engineer</span>
            </div>

            <motion.div
              className="profile-flip-card relative"
              animate={{ rotateY: profileFlipped ? 180 : 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
              }
              data-flipped={profileFlipped}
            >
              <div
                className="hero-profile-surface profile-flip-face profile-flip-front group rounded-2xl border border-border bg-card p-3 backdrop-blur-sm"
                aria-hidden={profileFlipped}
                inert={profileFlipped ? true : undefined}
              >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  ~/ruhumbika
                </span>
                <button
                  type="button"
                  onClick={toggleProfileCard}
                  className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-primary transition-colors hover:bg-primary/10"
                  aria-label="Show current job opportunity message"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  opportunity
                </button>
              </div>

              <div className="relative mt-3 aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-background/40">
                <motion.div
                  className="absolute -inset-2"
                  style={reduce ? undefined : { x: imageX, y: imageY }}
                >
                  <Image
                    src={site.profileImage}
                    alt="Ruhumbika Mtumba John wearing a professional black suit"
                    fill
                    priority
                    sizes="(min-width: 1024px) 384px, 90vw"
                    className="object-cover object-[50%_38%] transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                </motion.div>
                <motion.span
                  className="profile-scanline"
                  animate={reduce ? undefined : { top: ['-8%', '108%'] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'linear', repeatDelay: 1.4 }}
                  aria-hidden="true"
                />
                <span className="profile-corner profile-corner-tl" aria-hidden="true" />
                <span className="profile-corner profile-corner-tr" aria-hidden="true" />
                <span className="profile-corner profile-corner-bl" aria-hidden="true" />
                <span className="profile-corner profile-corner-br" aria-hidden="true" />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md border border-white/10 bg-black/45 px-3 py-2 backdrop-blur-md">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/80">
                    Product engineer · Dar es Salaam
                  </span>
                  <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {heroTech.map((t, i) => (
                  <TechTag key={t} highlight={i < 2}>
                    {t}
                  </TechTag>
                ))}
              </div>
              </div>
              <div
                className="hero-profile-surface profile-flip-face profile-flip-back absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 backdrop-blur-xl sm:p-7"
                aria-hidden={!profileFlipped}
                inert={!profileFlipped ? true : undefined}
              >
                <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
                <div className="opportunity-glow pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />

                <div className="relative flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Opportunity signal
                  </span>
                  <button
                    type="button"
                    onClick={toggleProfileCard}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-secondary text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    aria-label="Show profile photo"
                  >
                    <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>

                <div className="relative flex flex-1 flex-col justify-center py-6">
                  <motion.span
                    animate={reduce ? undefined : { y: [0, -6, 0], rotate: [0, -3, 0] }}
                    transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
                    className="opportunity-icon flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary"
                  >
                    <BriefcaseBusiness className="h-7 w-7" aria-hidden="true" />
                  </motion.span>

                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Available now
                  </p>
                  <h3 className="mt-3 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                    Open to the right opportunity.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    I&apos;m currently seeking graduate, internship and junior opportunities in software engineering, quality assurance, full-stack systems, AI applications and data-driven products.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {['Software engineering', 'Quality assurance', 'Data & AI'].map((item) => (
                      <span key={item} className="rounded-full border border-border bg-secondary px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative grid gap-2 border-t border-border pt-4 sm:grid-cols-2">
                  <Button href="/availability" size="sm">
                    Let&apos;s talk
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Button>
                  <Button href="/contact" variant="outline" size="sm">
                    Contact me
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Truthful summary indicators */}
      <div className="relative border-y border-border">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border px-4 sm:px-6 lg:grid-cols-4">
          {site.indicators.map((ind) => (
            <div key={ind.label} className="flex flex-col gap-1 px-2 py-6 first:pl-0">
              <dt className="order-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {ind.label}
              </dt>
              <dd className="order-1 text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                {ind.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

    </section>
  )
}
