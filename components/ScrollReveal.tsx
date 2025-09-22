'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  leftContent: React.ReactNode
  rightItems: Array<{
    title: string
    description: string
    icon?: React.ReactNode
  }>
  className?: string
}

export function ScrollReveal({ leftContent, rightItems, className = '' }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        let highestIndex = -1
        
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            if (index > highestIndex) {
              highestIndex = index
            }
          }
        })
        
        if (highestIndex >= 0) {
          setActiveIndex(highestIndex)
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.3,
      }
    )

    // Wait for DOM to be ready, then observe
    setTimeout(() => {
      const rightElements = container.querySelectorAll('[data-index]')
      console.log('Found elements to observe:', rightElements.length)
      rightElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`${className}`}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-5 lg:gap-12">
          {/* Left Content - Fixed Position */}
          <div className="lg:col-span-2">
            <div className="sticky top-32 z-10 h-screen flex items-start pt-24">
              <div className="w-full">
                {leftContent}
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable Items */}
          <div className="lg:col-span-3 space-y-32">
            {rightItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-700 ease-out transform ${
                  activeIndex >= index
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-20 translate-y-8 scale-95'
                }`}
                style={{ minHeight: '400px' }}
              >
                <div className={`border-l-4 pl-8 py-12 transition-all duration-700 ${
                  activeIndex >= index 
                    ? 'border-accent-500' 
                    : 'border-neutral-200'
                }`}>
                  <h3 className={`text-3xl lg:text-4xl font-bold mb-8 leading-tight transition-all duration-700 ${
                    activeIndex >= index 
                      ? 'text-primary-900' 
                      : 'text-neutral-300'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-xl leading-relaxed transition-all duration-700 ${
                    activeIndex >= index 
                      ? 'text-neutral-700' 
                      : 'text-neutral-300'
                  }`}>
                    {item.description}
                  </p>
                  
                  {/* Active indicator */}
                  <div className={`mt-8 h-1 transition-all duration-700 ${
                    activeIndex >= index 
                      ? 'w-24 bg-accent-500' 
                      : 'w-8 bg-neutral-200'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple List */}
      <div className="block lg:hidden">
        <div className="space-y-12">
          <div>{leftContent}</div>
          
          <div className="space-y-8">
            {rightItems.map((item, index) => (
              <div key={index} className="border-l-4 border-accent-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-base text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
