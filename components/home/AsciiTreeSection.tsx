'use client'

import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const treeItems = [
  {
    id: 'root',
    branch: 'root',
    depth: 1,
    prefix: '',
    label: 'ruhumbika.dev/',
    title: 'Product engineering root',
    description: 'One connected practice combining software engineering, intelligent applications and human-centred product design.',
    tags: ['Engineering', 'AI', 'Product'],
    proof: 'Five documented digital products',
    outcome: 'A portfolio grounded in deployed systems, academic builds and products serving real organisational needs.',
    href: '/projects',
  },
  {
    id: 'engineering',
    branch: 'engineering',
    depth: 2,
    prefix: '|-- ',
    label: 'engineering/',
    title: 'Full-stack engineering',
    description: 'Reliable web and mobile systems built across interfaces, APIs, permissions, data models and deployment workflows.',
    tags: ['Laravel', 'Node.js', 'Flutter'],
    proof: 'Kilindi Traders Digital License Management System',
    outcome: 'A deployed role-based platform for licensing, renewals, debt tracking, SMS reminders and council reporting.',
    href: '/projects/kdilms',
  },
  {
    id: 'apis',
    branch: 'engineering',
    depth: 3,
    prefix: '|   |-- ',
    label: 'api-architecture.ts',
    title: 'API architecture',
    description: 'Clear service boundaries and REST contracts that connect user interfaces, business logic and external platforms.',
    tags: ['REST', 'FastAPI', 'Express'],
    proof: 'Mobile-First Rental Platform',
    outcome: 'REST API contracts, JWT authentication and service boundaries connecting Flutter, Express.js and PostgreSQL.',
    href: '/projects/rental-platform',
  },
  {
    id: 'data',
    branch: 'engineering',
    depth: 3,
    prefix: '|   `-- ',
    label: 'data-systems.sql',
    title: 'Data systems',
    description: 'Structured relational data, careful validation and accountable administrative workflows.',
    tags: ['MySQL', 'PostgreSQL', 'SQLite'],
    proof: 'KDILMS data and reporting workflows',
    outcome: 'Validated TAUSI imports, structured trader records, audit logs and reporting dashboards for accountable operations.',
    href: '/projects/kdilms',
  },
  {
    id: 'intelligence',
    branch: 'intelligence',
    depth: 2,
    prefix: '|-- ',
    label: 'intelligence/',
    title: 'AI application development',
    description: 'Privacy-conscious AI applications with local inference, retrieval pipelines and focused knowledge bases.',
    tags: ['Ollama', 'RAG', 'Python'],
    proof: 'Student Support LLM Platform',
    outcome: 'A privacy-conscious local AI pipeline connecting Streamlit, FastAPI, retrieval and Ollama inference.',
    href: '/projects/student-support-llm',
  },
  {
    id: 'rag',
    branch: 'intelligence',
    depth: 3,
    prefix: '|   `-- ',
    label: 'grounded-response.py',
    title: 'Grounded responses',
    description: 'Retrieval and prompt workflows that keep model answers relevant to the intended domain.',
    tags: ['FastAPI', 'Knowledge Base', 'Testing'],
    proof: 'Grounded university support responses',
    outcome: 'A custom FAQ knowledge base and retrieval workflow designed to keep answers relevant to the student domain.',
    href: '/projects/student-support-llm',
  },
  {
    id: 'security',
    branch: 'security',
    depth: 2,
    prefix: '|-- ',
    label: 'system-security/',
    title: 'System security and cybersecurity',
    description: 'Security-aware systems shaped through access control, secure API practices, configuration review and risk-conscious delivery.',
    tags: ['RBAC', 'OSINT', 'Security Review'],
    proof: 'KDILMS access control and audit workflows',
    outcome: 'Role-based permissions, audit logging, secure deployment configuration and accountable administrative access patterns.',
    href: '/projects/kdilms',
  },
  {
    id: 'product',
    branch: 'product',
    depth: 2,
    prefix: '`-- ',
    label: 'product-design/',
    title: 'Digital product design',
    description: 'Product flows, interface decisions and testing shaped by real organisational and customer needs.',
    tags: ['Figma', 'UI/UX', 'User Flows'],
    proof: 'RJAY Barbershop Digital Platform',
    outcome: 'Booking journeys, service discovery and availability controls shaped around an operating small business.',
    href: '/projects/rjay-barbershop',
  },
]

export function AsciiTreeSection() {
  const reduce = useReducedMotion()
  const [activeId, setActiveId] = useState('root')
  const treeRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = treeItems.find((item) => item.id === activeId) ?? treeItems[0]
  const activeIndex = treeItems.findIndex((item) => item.id === active.id)

  function handleTreeKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | undefined

    if (event.key === 'ArrowDown') nextIndex = (index + 1) % treeItems.length
    if (event.key === 'ArrowUp') nextIndex = (index - 1 + treeItems.length) % treeItems.length
    if (event.key === 'Home') nextIndex = 0
    if (event.key === 'End') nextIndex = treeItems.length - 1

    if (nextIndex === undefined) return
    event.preventDefault()
    setActiveId(treeItems[nextIndex].id)
    treeRefs.current[nextIndex]?.focus()
  }

  return (
    <section id="living-system" className="scroll-mt-20 border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          label="Interactive Architecture"
          title="Explore my work as a living system"
          description="Hover, tap or use the keyboard to follow each branch of my product engineering practice."
        />

        <div className="ascii-tree-shell relative mt-12 grid overflow-hidden rounded-2xl border border-border lg:grid-cols-[1.08fr_0.92fr]">
          <motion.span
            className="ascii-system-signal absolute inset-x-0 top-0 z-20 h-px origin-left"
            animate={reduce ? undefined : { scaleX: [0, 1, 0], x: ['0%', '0%', '100%'] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <div className="ascii-tree-panel border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                ~/portfolio/tree
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                system online
              </span>
            </div>

            <div className="flex flex-col" role="tree" aria-label="Ruhumbika's capability tree">
              {treeItems.map((item, index) => {
                const selected = item.id === active.id
                const related = item.branch === active.branch || item.id === 'root'
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="treeitem"
                    aria-selected={selected}
                    aria-level={item.depth}
                    tabIndex={selected ? 0 : -1}
                    ref={(node) => { treeRefs.current[index] = node }}
                    onPointerEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
                    onKeyDown={(event) => handleTreeKeyDown(event, index)}
                    className="ascii-tree-line relative flex w-full items-center overflow-hidden rounded-md px-2 py-2 text-left font-mono text-xs sm:text-sm"
                    data-selected={selected}
                    data-related={related}
                  >
                    {selected ? (
                      <motion.span
                        layoutId="ascii-tree-active"
                        className="absolute inset-0 rounded-md bg-primary/10"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <span className="ascii-tree-prefix relative z-10 whitespace-pre" aria-hidden="true">
                      {item.prefix}
                    </span>
                    <span className="relative z-10">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="relative flex min-h-[29rem] items-center p-6 sm:p-10">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={reduce ? undefined : { opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Live node {String(activeIndex + 1).padStart(2, '0')} / {String(treeItems.length).padStart(2, '0')}
                  </p>
                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.12em] text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
                    responding
                  </span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
                  {active.description}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em]">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="ascii-proof-card mt-7 rounded-xl border border-border bg-card/80 p-4 sm:p-5">
                  <p className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    Real project evidence
                  </p>
                  <p className="mt-3 text-sm font-semibold text-foreground">{active.proof}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{active.outcome}</p>
                </div>

                <Link
                  href={active.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  Open supporting case study
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
