'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Download, Menu, X } from 'lucide-react'
import { navItems, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { SocialLinks } from '@/components/shared/SocialLinks'

interface MobileMenuProps {
  isActive: (href: string) => boolean
}

export function MobileMenu({ isActive }: MobileMenuProps) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  // Lock scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close on Escape.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-background"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
          >
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
              <span className="font-mono text-sm text-foreground">
                {site.initials}
                <span className="text-muted-foreground">.dev</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col px-4 py-6" aria-label="Mobile">
              <ul className="flex flex-col">
                {navItems.map((item, i) => {
                  const active = isActive(item.href)
                  return (
                    <motion.li
                      key={item.href}
                      initial={reduce ? false : { opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 * i }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'flex items-baseline gap-3 border-b border-border py-4 text-2xl font-semibold tracking-tight transition-colors',
                          active
                            ? 'text-primary'
                            : 'text-foreground hover:text-primary',
                        )}
                      >
                        <span className="font-mono text-xs text-muted-foreground">
                          0{i + 1}
                        </span>
                        {item.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>

              <div className="mt-8 flex flex-col gap-6">
                <a
                  href={site.cv}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
                <SocialLinks />
                <p className="font-mono text-xs text-muted-foreground">
                  {site.location}
                </p>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
