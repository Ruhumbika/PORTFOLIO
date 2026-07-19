'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CalendarDays, X } from 'lucide-react'
import { site } from '@/data/site'

/**
 * Persistent interview launcher. It appears after the visitor scrolls past the
 * hero and opens the weekday availability calendar. The launcher is dismissible
 * and does not claim that an interview is confirmed.
 */
export function FloatingHire() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!site.isAvailable) return null

  return (
    <AnimatePresence>
      {visible && !dismissed ? (
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24, scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 380, damping: 26 }}
          className="fixed bottom-5 right-5 z-50 flex items-center"
        >
          <motion.div
            whileHover={reduce ? undefined : { y: -3 }}
            whileTap={reduce ? undefined : { scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <Link
              href="/availability"
              className="group flex items-center gap-2.5 rounded-full border border-primary/40 bg-primary py-3 pl-3.5 pr-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20"
              aria-label="View Ruhumbika's interview availability"
            >
              <span className="relative flex h-6 w-6 items-center justify-center">
                {!reduce ? (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-foreground/35" />
                ) : null}
                <CalendarDays className="relative h-5 w-5" aria-hidden="true" />
              </span>
              Book interview
            </Link>
          </motion.div>
          <button
            type="button"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss interview booking button"
            className="ml-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
