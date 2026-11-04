'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface MobileVideoPreviewProps {
  src: string
  poster?: string
  label: string
  className?: string
}

/** A complete phone recording, with silent playback while visible or hovered. */
export function MobileVideoPreview({ src, poster, label, className }: MobileVideoPreviewProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const visibleRef = useRef(false)
  const hoveredRef = useRef(false)
  const reducedMotionRef = useRef(false)

  function syncPlayback() {
    const video = videoRef.current
    if (!video) return
    const shouldPlay = !document.hidden && (
      hoveredRef.current || (visibleRef.current && !reducedMotionRef.current)
    )
    if (shouldPlay) {
      // Browsers can reject autoplay; native controls remain available.
      void video.play().catch(() => {})
    } else {
      video.pause()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    reducedMotionRef.current = motion.matches
    const onMotionChange = () => {
      reducedMotionRef.current = motion.matches
      syncPlayback()
    }
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.4
      syncPlayback()
    }, { threshold: [0, 0.4] })
    observer.observe(video)
    document.addEventListener('visibilitychange', syncPlayback)
    motion.addEventListener('change', onMotionChange)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', syncPlayback)
      motion.removeEventListener('change', onMotionChange)
      video.pause()
    }
  }, [])

  return (
    <div className={cn('mx-auto flex max-w-full justify-center', className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        width={718}
        height={1464}
        muted
        loop
        playsInline
        controls
        preload="metadata"
        aria-label={label}
        className="block h-auto max-h-[70svh] w-auto max-w-full rounded-2xl border border-border object-contain"
        onPointerEnter={() => { hoveredRef.current = true; syncPlayback() }}
        onPointerLeave={() => { hoveredRef.current = false; syncPlayback() }}
        onFocus={() => { hoveredRef.current = true; syncPlayback() }}
        onBlur={() => { hoveredRef.current = false; syncPlayback() }}
      >
        Your browser does not support this video. <a href={src}>Open the recording</a>.
      </video>
    </div>
  )
}
