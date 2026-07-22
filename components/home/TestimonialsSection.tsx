'use client'

import { ArrowUpRight, MessageSquareQuote } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import { SectionHeading } from '@/components/shared/SectionHeading'

const collaborationNotes = [
  {
    index: '01',
    title: 'Clear communication',
    text: 'I turn requirements into a plain-language plan, explain tradeoffs early and keep progress visible from the first decision to delivery.',
    detail: 'Alignment before implementation',
  },
  {
    index: '02',
    title: 'Practical ownership',
    text: 'I work across product thinking, interface design, engineering and deployment so important details do not disappear between disciplines.',
    detail: 'End-to-end product responsibility',
  },
  {
    index: '03',
    title: 'User-centred delivery',
    text: 'I stay close to the people using the product and measure success by whether the final workflow is useful, understandable and dependable.',
    detail: 'Real problems, usable outcomes',
  },
]

function CollaborationCard({ note }: { note: (typeof collaborationNotes)[number] }) {
  const reduce = useReducedMotion()
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [4, -4]), {
    stiffness: 220,
    damping: 24,
  })
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 220,
    damping: 24,
  })

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (reduce) return
    const bounds = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - bounds.left) / bounds.width
    const y = (event.clientY - bounds.top) / bounds.height
    pointerX.set(x - 0.5)
    pointerY.set(y - 0.5)
    event.currentTarget.style.setProperty('--spot-x', `${x * 100}%`)
    event.currentTarget.style.setProperty('--spot-y', `${y * 100}%`)
  }

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
  }

  return (
    <motion.article
      tabIndex={0}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
      style={reduce ? undefined : { rotateX, rotateY, perspective: 1000 }}
      whileHover={reduce ? undefined : { y: -8, scale: 1.012 }}
      transition={{ type: 'spring', stiffness: 240, damping: 22 }}
      className="testimonial-card group relative flex min-h-72 flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 outline-none sm:p-7"
    >
      <div className="relative z-10 flex items-start justify-between">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <MessageSquareQuote className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
          {note.index}
        </span>
      </div>

      <div className="relative z-10 mt-8 flex flex-1 flex-col">
        <h3 className="text-xl font-semibold tracking-tight">{note.title}</h3>
        <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{note.text}</p>
        <div className="mt-7 flex items-center justify-between border-t border-border pt-4">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {note.detail}
          </span>
          <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
        </div>
      </div>
    </motion.article>
  )
}

export function TestimonialsSection() {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          label="Collaboration"
          title="A working style people can rely on"
          description="These are the principles I bring to every collaboration. Move across each card to explore the responsive interaction."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {collaborationNotes.map((note) => (
            <CollaborationCard key={note.index} note={note} />
          ))}
        </div>
      </div>
    </section>
  )
}
