'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'
import { flushSync } from 'react-dom'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: (origin?: { x: number; y: number }) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'ruhumbika-theme'

/**
 * Inline script that applies the stored / system theme before hydration
 * to avoid a flash of the wrong theme. Dark is the default.
 */
export const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('${STORAGE_KEY}');
    var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    var theme = stored || systemTheme;
    var root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')
  const transitioning = useRef(false)

  // Sync state with whatever the init script already applied.
  useEffect(() => {
    const current = document.documentElement.classList.contains('light')
      ? 'light'
      : 'dark'
    setTheme(current)
  }, [])

  const toggleTheme = useCallback((origin?: { x: number; y: number }) => {
    if (transitioning.current) return

    const root = document.documentElement
    const next: Theme = root.classList.contains('dark') ? 'light' : 'dark'
    const applyTheme = () => {
      root.classList.toggle('dark', next === 'dark')
      root.classList.toggle('light', next === 'light')
      // Commit the entire theme-rendered React tree in the same View Transition frame.
      flushSync(() => setTheme(next))
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // The UI must work even when storage is unavailable.
      }
    }

    if (
      !origin ||
      typeof document.startViewTransition !== 'function' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme()
      return
    }

    transitioning.current = true

    // The button centre is in viewport coordinates. The circle must reach the
    // furthest corner, not simply use the viewport diagonal or button radius.
    const x = Math.min(Math.max(origin.x, 0), window.innerWidth)
    const y = Math.min(Math.max(origin.y, 0), window.innerHeight)
    const endRadius = Math.max(
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y),
    )

    // Set the initial clipping before the browser creates its new snapshot.
    // Otherwise the fresh theme can flash over the whole page for one frame.
    root.style.setProperty('--theme-reveal-x', `${x}px`)
    root.style.setProperty('--theme-reveal-y', `${y}px`)
    root.style.setProperty('--sunrise-softness', `${Math.min(240, Math.max(90, window.innerWidth * 0.16))}px`)
    root.dataset.themeTransition = 'sunrise'
    const cleanup = () => {
      delete root.dataset.themeTransition
      root.style.removeProperty('--theme-reveal-x')
      root.style.removeProperty('--theme-reveal-y')
      root.style.removeProperty('--sunrise-softness')
      transitioning.current = false
    }
    try {
      const transition = document.startViewTransition(() => {
        applyTheme()
      })

      void (async () => {
        try {
          // The old-theme snapshot remains visible. The incoming snapshot
          // gets a soft radial mask, expanding as sunrise light spreads.
          await transition.ready
          const softness = Math.min(240, Math.max(90, window.innerWidth * 0.16))
          const animation = root.animate(
            [
              { '--sunrise-radius': '0px', offset: 0 },
              { '--sunrise-radius': '16px', offset: 0.12 },
              { '--sunrise-radius': '56px', offset: 0.24 },
              { '--sunrise-radius': `${Math.round(endRadius * 0.25)}px`, offset: 0.48 },
              { '--sunrise-radius': `${Math.round(endRadius * 0.58)}px`, offset: 0.73 },
              { '--sunrise-radius': `${Math.round(endRadius + softness)}px`, offset: 1 },
            ],
            {
              duration: 3200,
              easing: 'cubic-bezier(0.35, 0, 0.2, 1)',
              fill: 'forwards',
              pseudoElement: '::view-transition-new(root)',
            },
          )
          await animation.finished
        } catch {
          // A navigation can cancel an in-progress browser view transition.
        } finally {
          await transition.finished.catch(() => undefined)
          cleanup()
        }
      })()
    } catch {
      cleanup()
      applyTheme()
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
