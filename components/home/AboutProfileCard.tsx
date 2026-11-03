'use client'

import Image from 'next/image'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { site } from '@/data/site'

const focus = ['Enterprise software', 'AI & workflow automation', 'ERP and API integrations', 'Web & mobile platforms']

export function AboutProfileCard() {
  const reduce = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 160, damping: 22 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 160, damping: 22 })

  function onMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduce || event.pointerType === 'touch') return
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left) / rect.width - 0.5)
    y.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function onLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformPerspective: 1100 }}
      className="group relative mx-auto w-full max-w-[430px] min-w-0 lg:ml-auto"
    >
      <div className="pointer-events-none absolute -inset-3 rounded-3xl bg-primary/[0.07] blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[0_18px_50px_rgba(0,0,0,0.15)] transition-colors duration-300 group-hover:border-primary/50">
        <div className="relative aspect-[5/4] overflow-hidden border-b border-border">
          <motion.div className="absolute inset-0" whileHover={reduce ? undefined : { scale: 1.045 }} transition={{ duration: 0.7 }}>
            <Image src={site.profileImageSquare} alt="Professional portrait of Ruhumbika Mtumba John" fill sizes="(min-width: 1024px) 430px, 100vw" className="object-cover object-[50%_35%]" priority />
          </motion.div>
          {!reduce && <motion.div aria-hidden="true" className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" initial={{ top: '-10%' }} animate={{ top: ['-10%', '110%'] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 2, ease: 'linear' }} />}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent px-5 pb-5 pt-16">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[#f8bd4e]"><Sparkles className="h-3.5 w-3.5"/> Engineering · AI · Product thinking</span>
          </div>
        </div>
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Core engineering focus</h2>
            <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true"/>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {focus.map((area, i) => (
              <motion.span key={area} initial={reduce ? false : { opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.12 + i * 0.07 }} className="rounded-lg border border-primary/20 bg-primary/[0.05] px-3 py-2 text-xs font-medium text-foreground">
                {area}
              </motion.span>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary"/>{site.location}</span>
            <Link href="/solutions" className="inline-flex items-center gap-1 text-xs font-semibold text-primary transition-colors hover:text-foreground">Explore solutions <ArrowUpRight className="h-3.5 w-3.5"/></Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
