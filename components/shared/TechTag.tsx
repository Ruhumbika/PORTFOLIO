import { cn } from '@/lib/utils'

interface TechTagProps {
  children: React.ReactNode
  highlight?: boolean
  className?: string
}

export function TechTag({ children, highlight, className }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2.5 py-1 font-mono text-xs tracking-tight transition-colors',
        highlight
          ? 'border-primary/40 bg-primary/10 text-primary'
          : 'border-border bg-secondary text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}
