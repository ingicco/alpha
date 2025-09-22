'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

interface SectionVideoProps {
  posterSrc: string
  webmSrc: string
  mp4Src: string
  alt: string
  className?: string
}

export function SectionVideo({
  posterSrc,
  webmSrc,
  mp4Src,
  alt,
  className
}: SectionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.3,
      }
    )

    const currentContainer = containerRef.current
    if (currentContainer) {
      observer.observe(currentContainer)
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer)
      }
    }
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!videoRef.current || prefersReducedMotion) return

    const video = videoRef.current

    if (isVisible) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play failed, video will show poster
        })
      }
    } else {
      video.pause()
    }
  }, [isVisible, prefersReducedMotion])

  if (prefersReducedMotion) {
    return (
      <div ref={containerRef} className={clsx('relative', className)}>
        <Image
          src={posterSrc}
          alt={alt}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg"
        />
      </div>
    )
  }

  return (
    <div ref={containerRef} className={clsx('relative', className)}>
      <video
        ref={videoRef}
        className="w-full h-auto rounded-lg"
        muted
        loop
        playsInline
        preload="none"
        poster={posterSrc}
      >
        <source src={webmSrc} type="video/webm" />
        <source src={mp4Src} type="video/mp4" />
        <Image
          src={posterSrc}
          alt={alt}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg"
        />
      </video>
    </div>
  )
}
