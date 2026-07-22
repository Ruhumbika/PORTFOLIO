'use client'

import Image from 'next/image'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { ArrowRight, CalendarDays, Download, MapPin } from 'lucide-react'
import { site } from '@/data/site'
import { Button } from '@/components/shared/Button'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { TechTag } from '@/components/shared/TechTag'
import { TechLogoFlow } from '@/components/home/TechLogoFlow'

const heroTech = ['Laravel', 'FastAPI', 'Flutter', 'Node.js', 'Ollama', 'PostgreSQL']
const workflowNodes = Array.from({ length: 20 }, (_, index) => index)

export function Hero() {
  const reduce = useReducedMotion()
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
            <div className="absolute -left-3 top-6 hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground lg:block">
              <span className="[writing-mode:vertical-rl]">product · engineer</span>
            </div>

            <div className="hero-profile-surface group rounded-2xl border border-border bg-card p-3 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  ~/ruhumbika
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  online
                </span>
              </div>

              <div className="relative mt-3 aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-background/40">
                <Image
                  src={site.profileImage}
                  alt="Ruhumbika Mtumba John wearing a professional black suit"
                  fill
                  priority
                  sizes="(min-width: 1024px) 384px, 90vw"
                  className="object-cover object-[50%_38%] transition-transform duration-700 group-hover:scale-[1.015]"
                />
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

      <TechLogoFlow />
    </section>
  )
}
