import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import type { ProjectImage } from '@/types/project'
import { cn } from '@/lib/utils'

const ratioClass: Record<NonNullable<ProjectImage['ratio']>, string> = {
  video: 'aspect-video',
  square: 'aspect-square',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/7]',
  screen: 'aspect-[2/1]',
}

interface PlaceholderImageProps {
  image: ProjectImage
  className?: string
  priority?: boolean
}

/**
 * Renders a real screenshot with next/image when `src` is provided,
 * otherwise a clean, clearly labelled empty-state placeholder that is
 * easy to replace later. No random stock imagery is used.
 */
export function PlaceholderImage({
  image,
  className,
  priority,
}: PlaceholderImageProps) {
  const ratio = ratioClass[image.ratio ?? 'video']

  if (image.src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-lg border border-border bg-card',
          ratio,
          className,
        )}
      >
        <Image
          src={image.src || '/placeholder.svg'}
          alt={image.label}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          priority={priority}
        />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={`${image.label} (placeholder)`}
      className={cn(
        'bg-grid relative flex items-center justify-center overflow-hidden rounded-lg border border-dashed border-border bg-card',
        ratio,
        className,
      )}
    >
      <div className="flex flex-col items-center gap-2 px-4 text-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-secondary text-muted-foreground">
          <ImageIcon className="h-4 w-4" aria-hidden="true" />
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {image.label}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
          Screenshot placeholder
        </span>
      </div>
    </div>
  )
}
