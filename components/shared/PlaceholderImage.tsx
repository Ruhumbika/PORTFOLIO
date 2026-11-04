import Image from 'next/image'
import { MobileVideoPreview } from './MobileVideoPreview'
import { FolderCode, FileImage, Film } from 'lucide-react'
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

  if (image.videoSrc && image.mobileVideo) {
    return <MobileVideoPreview src={image.videoSrc} poster={image.src} label={image.label} className={className} />
  }

  if (image.videoSrc) {
    return (
      <div className={cn('relative overflow-hidden rounded-lg border border-[#F8A706]/30 bg-[#0b1118]', ratio, className)}>
        <video controls playsInline preload="metadata" poster={image.src} aria-label={image.label} className="h-full w-full object-contain" controlsList="nodownload">
          <source src={image.videoSrc} type="video/webm" />
          Your browser does not support WebM video playback.
        </video>
      </div>
    )
  }

  if (image.src) {
    if (image.uncropped) {
      return (
        <div className={cn('rounded-lg border border-border bg-card p-4 sm:p-6', className)}>
          <Image
            src={image.src}
            alt={image.label}
            width={image.uncropped.width}
            height={image.uncropped.height}
            sizes="(min-width: 640px) 360px, 90vw"
            className="mx-auto h-auto w-full max-w-[360px] rounded-xl object-contain"
            priority={priority}
          />
        </div>
      )
    }
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
      aria-label={`${image.label} (media not yet provided)`}
      className={cn(
        'bg-grid relative flex items-center justify-center overflow-hidden rounded-lg border border-[#F8A706]/25 bg-[#101820]',
        ratio,
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F8A706]/10 via-transparent to-primary/10" aria-hidden="true" />
      <div className="relative flex max-w-xs flex-col items-center gap-3 px-5 text-center">
        <div className="flex items-center gap-2 text-[#F8A706]" aria-hidden="true">
          <FileImage className="h-5 w-5 opacity-60" />
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F8A706]/45 bg-[#F8A706]/10"><FolderCode className="h-7 w-7" /></span>
          <Film className="h-5 w-5 opacity-60" />
        </div>
        <span className="text-sm font-semibold text-foreground">Project media in preparation</span>
        <span className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">{image.label}</span>
        <span className="rounded-full border border-[#F8A706]/25 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#F8A706]">Read case study</span>
      </div>
    </div>
  )
}
