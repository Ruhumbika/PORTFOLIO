'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site } from '@/data/site'

const STORAGE_KEY = 'rmj-portfolio-loader-seen'

export function SitePreloader() {
  const reduce = useReducedMotion()
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let alreadySeen = false
    try {
      alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) === 'true'
    } catch {
      alreadySeen = false
    }

    if (alreadySeen) {
      setVisible(false)
      return
    }

    const minimumDelay = reduce ? 80 : 520
    const timeout = window.setTimeout(() => {
      setVisible(false)
      try {
        window.sessionStorage.setItem(STORAGE_KEY, 'true')
      } catch {
        // The loader still works when storage is unavailable.
      }
    }, minimumDelay)

    return () => window.clearTimeout(timeout)
  }, [reduce])

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="site-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.05 : 0.3 }}
          className="site-preloader fixed inset-0 z-[200] flex items-center justify-center bg-background"
          role="status"
          aria-live="polite"
          aria-label="Loading Ruhumbika Mtumba John’s portfolio"
        >
          <div className="flex flex-col items-center gap-5">
            <motion.div
              initial={reduce ? undefined : { scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.35 }}
              className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/40 bg-primary/10 font-mono text-lg font-semibold text-primary"
            >
              <span>{site.initials}</span>
              {!reduce ? (
                <motion.span
                  className="absolute inset-[-5px] rounded-[20px] border border-primary/50"
                  animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.96, 1.05, 0.96] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                  aria-hidden="true"
                />
              ) : null}
            </motion.div>
            <div className="text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                Loading portfolio
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Full-stack · AI applications · digital products
              </p>
            </div>
            <div className="h-1 w-40 overflow-hidden rounded-full bg-secondary">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: '12%' }}
                animate={{ width: '100%' }}
                transition={{ duration: reduce ? 0.05 : 0.52, ease: 'easeOut' }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
