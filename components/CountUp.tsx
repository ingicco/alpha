'use client'

import { useEffect, useRef, useState } from 'react'

interface CountUpProps {
  end: number
  duration?: number
  startOnView?: boolean
  className?: string
  suffix?: string
  prefix?: string
}

export function CountUp({ 
  end, 
  duration = 2000, 
  startOnView = true, 
  className = '',
  suffix = '',
  prefix = ''
}: CountUpProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLSpanElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!startOnView) {
      startCounting()
      return
    }

    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setIsVisible(true)
            startCounting()
            setHasStarted(true)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [startOnView, hasStarted])

  const startCounting = () => {
    const startTime = Date.now()
    const startValue = 0

    const updateCount = () => {
      const currentTime = Date.now()
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startValue + (end - startValue) * easeOutQuart)
      
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }

  // Format number with commas for large numbers
  const formatNumber = (num: number) => {
    return num.toLocaleString()
  }

  return (
    <span ref={elementRef} className={className}>
      {prefix}{formatNumber(count)}{suffix}
    </span>
  )
}
