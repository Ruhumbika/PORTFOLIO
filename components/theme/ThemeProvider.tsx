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
      root.classList.remove('light', 'dark')
      root.classList.add(next)
      setTheme(next)
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Storage may be unavailable in private browsing.
      }
    }

    // Keep the switch usable in browsers without View Transitions and for
    // users who prefer reduced motion.
    if (
      !origin ||
      !('startViewTransition' in document) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme()
      return
    }

    transitioning.current = true
    const x = Math.min(Math.max(origin.x, 0), window.innerWidth)
    const y = Math.min(Math.max(origin.y, 0), window.innerHeight)
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    )

    root.dataset.themeTransition = 'reveal'
    try {
      const transition = document.startViewTransition(() => {
        applyTheme()
      })

      void (async () => {
        try {
          await transition.ready
          await root.animate(
            {
              clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
            },
            {
              duration: 950,
              easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
              pseudoElement: '::view-transition-new(root)',
            },
          ).finished
        } catch {
          // View transitions may be interrupted by a navigation or another update.
        } finally {
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
