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
  theme?: 'light' | 'dark'
}

export function ScrollReveal({ leftContent, rightItems, className = '', theme = 'light' }: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect()
      const containerTop = containerRect.top
      const containerHeight = containerRect.height
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress through the container
      const scrolled = Math.max(0, Math.min(1, -containerTop / (containerHeight - windowHeight)))
      setScrollProgress(scrolled)
      
      // Calculate which item should be active based on scroll position
      const totalItems = rightItems.length
      const progressPerItem = 1 / totalItems
      const currentIndex = Math.floor(scrolled / progressPerItem)
      const clampedIndex = Math.max(0, Math.min(totalItems - 1, currentIndex))
      
      setActiveIndex(clampedIndex)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener('scroll', handleScroll)
  }, [rightItems.length])

  return (
    <div ref={containerRef} className={`${className}`}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="relative flex min-h-screen">
          {/* Left Content - Sticky Position */}
          <div className="w-2/5 pr-12">
            <div className="sticky top-32 z-10 py-20">
              <div 
                className="transition-all duration-500 ease-out"
                style={{ 
                  opacity: scrollProgress < 0.85 ? 1 - (scrollProgress * 0.2) : Math.max(0.4, 1 - ((scrollProgress - 0.85) / 0.15)),
                  transform: `translateY(${scrollProgress * 10}px)`
                }}
              >
                {leftContent}
              </div>
            </div>
          </div>

          {/* Right Content - Scrollable Items */}
          <div className="w-3/5 pl-12">
            {rightItems.map((item, index) => {
              const isActive = activeIndex === index
              const isPassed = activeIndex > index
              
              return (
                <div
                  key={index}
                  className="flex items-center py-20"
                  style={{ 
                    minHeight: '60vh',
                    opacity: isActive ? 1 : 0.3,
                    transform: `translateY(${isPassed ? -10 : 0}px)`,
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="w-full">
                    <div className="border-l-4 border-accent-500 pl-8">
                      <h3 className={`text-3xl lg:text-4xl font-bold mb-6 leading-tight transition-all duration-500 ${
                        theme === 'dark' 
                          ? (isActive ? 'text-white' : 'text-neutral-300')
                          : (isActive ? 'text-primary-900' : 'text-neutral-500')
                      }`}>
                        {item.title}
                      </h3>
                      
                      <p className={`text-xl lg:text-2xl leading-relaxed transition-all duration-500 ${
                        theme === 'dark'
                          ? (isActive ? 'text-neutral-200' : 'text-neutral-400')
                          : (isActive ? 'text-neutral-700' : 'text-neutral-400')
                      }`}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple List */}
      <div className="block lg:hidden">
        <div className="space-y-12">
          <div className="px-4">
            {leftContent}
          </div>
          
          <div className="space-y-8 px-4">
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
