'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import { navItems, site } from '@/data/site'
import { cn } from '@/lib/utils'
import { Button } from '@/components/shared/Button'
import { Github, Linkedin } from '@/components/shared/BrandIcons'
import { ThemeToggle } from '@/components/theme/ThemeToggle'
import { MobileMenu } from './MobileMenu'

export function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-colors duration-300',
        scrolled
          ? 'border-border bg-background/80 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
          aria-label={`${site.name}, home`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
            {site.initials}
          </span>
          <span className="hidden font-mono text-sm tracking-tight text-foreground sm:inline">
            Ruhumbika
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'link-underline rounded-md px-3 py-2 text-sm transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                  data-active={active}
                >
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <ThemeToggle />
          <Button
            href={site.cv}
            size="sm"
            className="hidden lg:inline-flex"
            {...{ download: '', target: '_blank', rel: 'noopener noreferrer' }}
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download CV
          </Button>
          <MobileMenu isActive={isActive} />
        </div>
      </nav>
    </header>
  )
}
