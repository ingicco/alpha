'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'blur'
  delay?: number
  threshold?: number
  once?: boolean
}

export function ScrollAnimation({ 
  children, 
  className = '', 
  animation = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  once = false
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
              if (once) setHasAnimated(true)
            }, delay)
          } else if (!once || !hasAnimated) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay, threshold, once, hasAnimated])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeIn':
          return `${baseClasses} opacity-0`
        case 'slideUp':
          return `${baseClasses} opacity-0 translate-y-8`
        case 'slideLeft':
          return `${baseClasses} opacity-0 translate-x-8`
        case 'slideRight':
          return `${baseClasses} opacity-0 -translate-x-8`
        case 'scale':
          return `${baseClasses} opacity-0 scale-95`
        case 'blur':
          return `${baseClasses} opacity-0 blur-sm`
        default:
          return `${baseClasses} opacity-0`
      }
    }

    switch (animation) {
      case 'fadeIn':
        return `${baseClasses} opacity-100`
      case 'slideUp':
        return `${baseClasses} opacity-100 translate-y-0`
      case 'slideLeft':
        return `${baseClasses} opacity-100 translate-x-0`
      case 'slideRight':
        return `${baseClasses} opacity-100 translate-x-0`
      case 'scale':
        return `${baseClasses} opacity-100 scale-100`
      case 'blur':
        return `${baseClasses} opacity-100 blur-none`
      default:
        return `${baseClasses} opacity-100`
    }
  }

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}
