import Link from 'next/link'
import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md'

const base =
  'madde-button inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 will-change-transform active:translate-y-px'

const variants: Record<Variant, string> = {
  primary:
    'bg-primary text-primary-foreground hover:brightness-110 hover:-translate-y-0.5',
  outline:
    'border border-border bg-transparent text-foreground hover:border-primary hover:text-primary hover:-translate-y-0.5',
  ghost: 'bg-transparent text-muted-foreground hover:text-foreground',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-sm',
}

interface CommonProps {
  variant?: Variant
  size?: Size
  className?: string
  children: ReactNode
}

type ButtonAsButton = CommonProps &
  Omit<ComponentProps<'button'>, keyof CommonProps> & { href?: undefined }

type ButtonAsLink = CommonProps &
  Omit<ComponentProps<typeof Link>, keyof CommonProps> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...rest
  } = props
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('href' in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink
    const external = href.startsWith('http')
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...linkRest}
      >
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  )
}
