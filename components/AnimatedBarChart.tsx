'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedBarChartProps {
  className?: string
}

export function AnimatedBarChart({ className }: AnimatedBarChartProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0])
  const elementRef = useRef<HTMLDivElement>(null)

  const data = [
    { 
      label: 'Pre-IPO', 
      value: 55,
    },
    { 
      label: 'Secondary', 
      value: 30,
    },
    { 
      label: 'Early Stage', 
      value: 15,
    },
  ]

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            animateBars()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  const animateBars = () => {
    const duration = 2000 // 2 seconds
    const startTime = Date.now()

    const updateBars = () => {
      const currentTime = Date.now()
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      
      const newValues = data.map(item => 
        Math.floor(item.value * easeOutCubic)
      )
      
      setAnimatedValues(newValues)

      if (progress < 1) {
        requestAnimationFrame(updateBars)
      }
    }

    requestAnimationFrame(updateBars)
  }

  return (
    <div ref={elementRef} className={className}>
      <div className="p-4 sm:p-8">
        <div className="mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-accent-600 mb-2">Investment Allocation</h3>
          <p className="text-sm sm:text-base text-neutral-600">Portfolio distribution across investment stages</p>
        </div>
        
        <div className="space-y-4 sm:space-y-6">
          {data.map((item, index) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="text-sm sm:text-base font-medium text-neutral-900">{item.label}</span>
                <span className="text-sm sm:text-base font-semibold text-neutral-900">
                  {animatedValues[index]}%
                </span>
              </div>
              
              <div className="w-full bg-neutral-100 rounded-full h-2 overflow-hidden">
                <div 
                  className="bg-primary-500 h-2 rounded-full transition-all duration-300 ease-out transform origin-left"
                  style={{ 
                    width: `${animatedValues[index]}%`,
                    transform: isVisible ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left center'
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
