'use client'

import { useEffect, useRef, useState } from 'react'

interface HorizontalScrollRevealProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
  className?: string
}

export function HorizontalScrollReveal({ 
  children, 
  direction = 'left',
  className = '' 
}: HorizontalScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '-10% 0px -10% 0px'
      }
    )

    observer.observe(element)

    const handleScroll = () => {
      if (!element || !isVisible) return

      const rect = element.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress based on element position in viewport
      const elementTop = rect.top
      const elementHeight = rect.height
      
      // Progress from 0 to 1 as element moves through viewport
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - elementTop) / (windowHeight + elementHeight)
      ))
      
      setScrollProgress(progress)
    }

    if (isVisible) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      handleScroll() // Initial calculation
    }

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isVisible])

  // Calculate transform based on direction and scroll progress
  const getTransform = () => {
    if (!isVisible) {
      // Start position when not visible
      return direction === 'left' 
        ? 'translateX(-100px)' 
        : 'translateX(100px)'
    }
    
    // Animate from start position to final position based on scroll progress
    const startOffset = direction === 'left' ? -100 : 100
    const currentOffset = startOffset * (1 - scrollProgress)
    
    return `translateX(${currentOffset}px)`
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? Math.max(0.3, scrollProgress) : 0
      }}
    >
      {children}
    </div>
  )
}
