'use client'

import { useEffect, useRef } from 'react'

interface PingPongVideoProps {
  src: string
  webmSrc?: string
  poster?: string
  className?: string
}

export function PingPongVideo({ src, webmSrc, poster, className }: PingPongVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let isReverse = false

    const handleTimeUpdate = () => {
      const currentTime = video.currentTime
      const duration = video.duration

      if (!isReverse && currentTime >= duration - 0.1) {
        // Switch to reverse when near end
        isReverse = true
        video.playbackRate = -1
      } else if (isReverse && currentTime <= 0.1) {
        // Switch to forward when near beginning
        isReverse = false
        video.playbackRate = 1
      }
    }

    const handleCanPlay = () => {
      // Start playing when video can play
      video.playbackRate = 1
      video.play().catch(console.error)
    }

    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('canplay', handleCanPlay)

    // Try to start playing immediately if already loaded
    if (video.readyState >= 3) {
      handleCanPlay()
    }

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('canplay', handleCanPlay)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      playsInline
      className={className}
      poster={poster}
      preload="auto"
    >
      {webmSrc && <source src={webmSrc} type="video/webm" />}
      <source src={src} type="video/mp4" />
    </video>
  )
}
