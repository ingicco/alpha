'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface SimpleScrollSectionProps {
  backgroundImage: string
  leftContent: React.ReactNode
  rightItems: Array<{
    title: string
    description: string
  }>
}

export function SimpleScrollSection({ backgroundImage, leftContent, rightItems }: SimpleScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(-1) // Start with intro text

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate progress through the section
      const sectionTop = rect.top
      const sectionHeight = rect.height
      
      if (sectionTop <= windowHeight * 0.5 && sectionTop >= -sectionHeight + windowHeight * 0.5) {
        // We're in the section
        const progress = Math.max(0, Math.min(1, (windowHeight * 0.5 - sectionTop) / (sectionHeight - windowHeight * 0.5)))
        
        // Determine which content to show
        const totalSteps = rightItems.length + 1 // +1 for intro
        const currentStep = Math.floor(progress * totalSteps)
        const finalIndex = Math.min(currentStep - 1, rightItems.length - 1)
        
        setActiveIndex(finalIndex)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [rightItems.length])

  return (
    <div 
      ref={containerRef}
      className="relative -mt-24 lg:-mt-32"
      style={{ height: `${200 + (rightItems.length * 100)}vh` }}
    >
      {/* Fixed Background Section */}
      <div className="sticky top-0 w-full h-screen">
        {/* Background Image */}
        <div className="absolute inset-0 px-6 md:px-12 lg:px-16 pt-32 pb-16">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-900/70 to-primary-900/80"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex items-center justify-center min-h-[400px]">
              {/* Initial State - Show intro text */}
              {activeIndex === -1 && (
                <div className="text-center max-w-2xl mx-auto opacity-100 transition-opacity duration-500">
                  <p className="text-4xl lg:text-5xl xl:text-6xl text-white leading-tight font-light">
                    Alpha Group Investment<br />
                    focuses on four critical areas<br />
                    of institutional finance and<br />
                    digital asset innovation.
                  </p>
                </div>
              )}

              {/* Content States - Show individual points */}
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  className={`text-center max-w-3xl mx-auto transition-all duration-500 ease-out ${
                    index === activeIndex 
                      ? 'opacity-100 transform translate-y-0' 
                      : 'opacity-0 transform translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="text-center">
                    {/* Clean Number - Centered */}
                    <div className="mb-8">
                      <span className="text-7xl lg:text-8xl xl:text-9xl font-bold text-accent-500 drop-shadow-lg leading-none">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Content - Centered and Compact */}
                    <div>
                      <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-xl lg:text-2xl xl:text-3xl leading-relaxed text-neutral-200 drop-shadow max-w-3xl mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Progress indicator */}
              {activeIndex >= 0 && (
                <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {rightItems.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        index === activeIndex ? 'bg-accent-500 w-8' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
