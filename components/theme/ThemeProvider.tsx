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

    root.dataset.themeTransition = 'reveal'
    try {
      const transition = document.startViewTransition(() => {
        applyTheme()
      })

      void (async () => {
        try {
          // Both snapshots exist now: the old page stays fully visible while
          // the new-theme snapshot grows from a 0px circle over the button.
          await transition.ready
          const animation = root.animate(
            {
              clipPath: [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
              ],
            },
            {
              duration: 1900,
              easing: 'cubic-bezier(0.45, 0, 0.2, 1)',
              fill: 'forwards',
              pseudoElement: '::view-transition-new(root)',
            },
          )
          await animation.finished
        } catch {
          // A navigation can cancel an in-progress browser view transition.
        } finally {
          await transition.finished.catch(() => undefined)
          delete root.dataset.themeTransition
          transitioning.current = false
        }
      })()
    } catch {
      delete root.dataset.themeTransition
      transitioning.current = false
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
