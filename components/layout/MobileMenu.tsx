'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
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
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const dialogRef = useRef<HTMLDivElement | null>(null)

  // Lock scroll while the menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const frame = window.requestAnimationFrame(() => closeRef.current?.focus())

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }

      if (event.key !== 'Tab' || !dialogRef.current) return
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('keydown', onKey)
      triggerRef.current?.focus()
    }
  }, [open])

  return (
    <div className="md:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-site-menu"
        className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Menu className="h-4 w-4" aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={dialogRef}
            id="mobile-site-menu"
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
                Ruhumbika
              </span>
              <button
                ref={closeRef}
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
