'use client'

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { SectionHeading } from '@/components/shared/SectionHeading'

const treeItems = [
  {
    id: 'root',
    branch: 'root',
    prefix: '',
    label: 'ruhumbika.dev/',
    title: 'Product engineering root',
    description: 'One connected practice combining software engineering, intelligent applications and human-centred product design.',
    tags: ['Engineering', 'AI', 'Product'],
  },
  {
    id: 'engineering',
    branch: 'engineering',
    prefix: '|-- ',
    label: 'engineering/',
    title: 'Full-stack engineering',
    description: 'Reliable web and mobile systems built across interfaces, APIs, permissions, data models and deployment workflows.',
    tags: ['Laravel', 'Node.js', 'Flutter'],
  },
  {
    id: 'apis',
    branch: 'engineering',
    prefix: '|   |-- ',
    label: 'api-architecture.ts',
    title: 'API architecture',
    description: 'Clear service boundaries and REST contracts that connect user interfaces, business logic and external platforms.',
    tags: ['REST', 'FastAPI', 'Express'],
  },
  {
    id: 'data',
    branch: 'engineering',
    prefix: '|   `-- ',
    label: 'data-systems.sql',
    title: 'Data systems',
    description: 'Structured relational data, careful validation and accountable administrative workflows.',
    tags: ['MySQL', 'PostgreSQL', 'SQLite'],
  },
  {
    id: 'intelligence',
    branch: 'intelligence',
    prefix: '|-- ',
    label: 'intelligence/',
    title: 'AI application development',
    description: 'Privacy-conscious AI applications with local inference, retrieval pipelines and focused knowledge bases.',
    tags: ['Ollama', 'RAG', 'Python'],
  },
  {
    id: 'rag',
    branch: 'intelligence',
    prefix: '|   `-- ',
    label: 'grounded-response.py',
    title: 'Grounded responses',
    description: 'Retrieval and prompt workflows that keep model answers relevant to the intended domain.',
    tags: ['FastAPI', 'Knowledge Base', 'Testing'],
  },
  {
    id: 'product',
    branch: 'product',
    prefix: '`-- ',
    label: 'product-design/',
    title: 'Digital product design',
    description: 'Product flows, interface decisions and testing shaped by real organisational and customer needs.',
    tags: ['Figma', 'UI/UX', 'User Flows'],
  },
]

export function AsciiTreeSection() {
  const reduce = useReducedMotion()
  const [activeId, setActiveId] = useState('root')
  const active = treeItems.find((item) => item.id === activeId) ?? treeItems[0]

  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <SectionHeading
          label="Interactive Architecture"
          title="Explore my work as a living system"
          description="Hover, tap or use the keyboard to follow each branch of my product engineering practice."
        />

        <div className="ascii-tree-shell mt-12 grid overflow-hidden rounded-2xl border border-border lg:grid-cols-[1.08fr_0.92fr]">
          <div className="ascii-tree-panel border-b border-border p-5 sm:p-8 lg:border-b-0 lg:border-r">
            <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                ~/portfolio/tree
              </span>
              <span className="flex items-center gap-2 font-mono text-[10px] text-primary">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                interactive
              </span>
            </div>

            <div className="flex flex-col" role="tree" aria-label="Ruhumbika's capability tree">
              {treeItems.map((item) => {
                const selected = item.id === active.id
                const related = item.branch === active.branch || item.id === 'root'
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="treeitem"
                    aria-selected={selected}
                    onPointerEnter={() => setActiveId(item.id)}
                    onFocus={() => setActiveId(item.id)}
                    onClick={() => setActiveId(item.id)}
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

          <div className="relative flex min-h-80 items-center p-6 sm:p-10">
            <div className="bg-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={reduce ? false : { opacity: 0, y: 12, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={reduce ? undefined : { opacity: 0, y: -8, filter: 'blur(4px)' }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                  Selected branch
                </p>
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
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
