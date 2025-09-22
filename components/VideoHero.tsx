'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { clsx } from 'clsx'

interface VideoHeroProps {
  posterSrc: string
  webmSrc: string
  mp4Src: string
  alt: string
  className?: string
  overlay?: boolean
}

export function VideoHero({
  posterSrc,
  webmSrc,
  mp4Src,
  alt,
  className,
  overlay = true
}: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showVideo, setShowVideo] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    // Only show video on larger screens and if motion is allowed
    const shouldShowVideo = window.innerWidth >= 768 && !mediaQuery.matches
    setShowVideo(shouldShowVideo)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    if (showVideo && videoRef.current && !prefersReducedMotion) {
      const video = videoRef.current
      
      // Attempt to play video
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play failed, fallback to poster
          setShowVideo(false)
        })
      }
    }
  }, [showVideo, prefersReducedMotion])

  return (
    <div className={clsx('relative overflow-hidden', className)}>
      {/* Fallback gradient background for missing video */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-primary-600" />
      
      {showVideo && !prefersReducedMotion ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          onError={() => setShowVideo(false)}
        >
          <source src={webmSrc} type="video/webm" />
          <source src={mp4Src} type="video/mp4" />
        </video>
      ) : (
        <div className="absolute inset-0">
          {/* Try to load poster image, fallback to gradient */}
          <Image
            src={posterSrc}
            alt={alt}
            fill
            className="object-cover"
            priority
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
            }}
          />
        </div>
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-black/30" />
      )}
      
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
