'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

interface StickyScrollSectionProps {
  backgroundImage: string
  leftContent: React.ReactNode
  rightItems: Array<{
    title: string
    description: string
  }>
  showInitialEmpty?: boolean
}

export function StickyScrollSection({ backgroundImage, leftContent, rightItems, showInitialEmpty = false }: StickyScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(showInitialEmpty ? -1 : 0) // Start with -1 for empty state
  const [isSticky, setIsSticky] = useState(false)

  // Ensure initial state is correct
  useEffect(() => {
    if (showInitialEmpty) {
      setActiveIndex(-1)
    }
  }, [showInitialEmpty])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Add buffer zone for smoother transitions
      const stickyThreshold = 80 // Start sticky a bit before reaching top
      
      // Check if section should be sticky
      if (rect.top <= stickyThreshold && rect.bottom > windowHeight + stickyThreshold) {
        setIsSticky(true)
        
        // Calculate progress through the sticky section with smoother transitions
        const scrolled = Math.abs(rect.top - stickyThreshold)
        const totalScrollDistance = rect.height - windowHeight - (stickyThreshold * 2)
        const progress = scrolled / totalScrollDistance
        const clampedProgress = Math.max(0, Math.min(1, progress))
        
        // Smoother item transitions with better thresholds
        if (showInitialEmpty) {
          // Include empty state as first "item" with smoother transitions
          const totalItems = rightItems.length + 1 // +1 for empty state
          const segmentSize = 1 / totalItems
          const currentSegment = clampedProgress / segmentSize
          
          // More gradual transitions
          const itemIndex = Math.floor(currentSegment) - 1 // -1 because we start with empty (-1)
          const finalIndex = Math.max(-1, Math.min(itemIndex, rightItems.length - 1))
          
          setActiveIndex(finalIndex)
        } else {
          const segmentSize = 1 / rightItems.length
          const currentSegment = clampedProgress / segmentSize
          const itemIndex = Math.floor(currentSegment)
          const finalIndex = Math.min(itemIndex, rightItems.length - 1)
          
          setActiveIndex(finalIndex)
        }
      } else {
        setIsSticky(false)
        // Reset to initial state when not sticky
        if (rect.top > stickyThreshold) {
          setActiveIndex(showInitialEmpty ? -1 : 0)
        }
      }
    }

    // Use requestAnimationFrame for smoother scroll handling
    let ticking = false
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', smoothScroll, { passive: true })
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', smoothScroll)
  }, [rightItems.length])

  return (
    <div 
      ref={containerRef}
      className="relative -mt-24 lg:-mt-32" // Huge negative margin to eliminate gap
      style={{ height: `${100 + (rightItems.length * 25)}vh` }} // Even more minimal for smoother exit
    >
      {/* Content - Always visible, no disappearing */}
      <div className={`${isSticky ? 'fixed top-0 left-0 right-0 z-10' : 'relative'} w-full h-screen`}>
        {/* Background Image with Padding - More space from top */}
        <div className="absolute inset-0 px-6 md:px-12 lg:px-16 pt-32 pb-16"> {/* Much more top padding */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={backgroundImage}
              alt="Background"
              fill
              className="object-cover transition-transform duration-500 ease-out"
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-primary-900/70 to-primary-900/80"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex items-center justify-center min-h-[400px]">
              {/* Initial State - Show only intro text centered */}
              {activeIndex === -1 && (
                <div className="text-center max-w-4xl mx-auto transition-all duration-500 ease-in-out opacity-100 transform translate-y-0 scale-100">
                  {leftContent}
                </div>
              )}

              {/* Content States - Show individual points with big numbers */}
              {rightItems.map((item, index) => (
                <div
                  key={index}
                  className={`text-center max-w-5xl mx-auto ${
                    index === activeIndex 
                      ? 'opacity-100 transition-opacity duration-300 ease-in-out' 
                      : 'opacity-0 absolute inset-0 pointer-events-none transition-opacity duration-300 ease-in-out'
                  }`}
                  style={{
                    position: index === activeIndex ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    right: 0
                  }}
                >
                  <div className="flex items-start gap-6 text-left">
                    {/* Clean Number - No box */}
                    <div className="flex-shrink-0">
                      <span className="text-7xl lg:text-8xl xl:text-9xl font-bold text-accent-500 drop-shadow-lg leading-none">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-3">
                      <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
                        {item.title}
                      </h3>
                      <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed text-neutral-200 drop-shadow">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Progress indicator - only show when content is visible */}
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
