'use client'

import { useEffect, useRef, useState } from 'react'

interface CarouselSection {
  id: string
  content: React.ReactNode
}

interface HorizontalCarouselProps {
  sections: CarouselSection[]
  className?: string
}

export function HorizontalCarousel({ sections, className = '' }: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Check if container is in viewport and should be sticky
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Calculate scroll progress through the carousel (0 to 1)
        const containerHeight = container.offsetHeight
        const scrollableDistance = containerHeight - windowHeight
        const scrolled = Math.abs(rect.top)
        const rawProgress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1)
        
        // Create scroll thresholds for each section
        // Each section needs significant scroll before transitioning
        const thresholds = []
        for (let i = 0; i < sections.length; i++) {
          // Each section gets 1/3 of the scroll space, with buffer zones
          const sectionStart = i / sections.length
          const sectionEnd = (i + 1) / sections.length
          const threshold = sectionStart + (sectionEnd - sectionStart) * 0.7 // 70% through section
          thresholds.push(threshold)
        }
        
        // Determine which section should be active based on thresholds
        let currentSectionIndex = 0
        for (let i = 0; i < thresholds.length - 1; i++) {
          if (rawProgress >= thresholds[i]) {
            currentSectionIndex = i + 1
          }
        }
        
        // Convert section index back to progress for smooth animation
        const snappedProgress = currentSectionIndex / (sections.length - 1)
        setScrollProgress(snappedProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sections.length])

  // Calculate the height needed for smooth scrolling through all sections
  const totalHeight = `${sections.length * 150}vh` // Much more space for each section

  // Calculate transform for snapped sections
  const getTransform = () => {
    const sectionProgress = scrollProgress * (sections.length - 1)
    const translateX = -(sectionProgress * (100 / sections.length))
    return `translateX(${translateX}%)`
  }

  // Calculate opacity and scale for each section with snapping
  const getSectionStyle = (index: number) => {
    const currentSectionIndex = Math.round(scrollProgress * (sections.length - 1))
    
    // Current section gets full opacity and scale
    if (index === currentSectionIndex) {
      return {
        opacity: 1,
        transform: 'scale(1)',
        filter: 'blur(0px)'
      }
    }
    
    // Non-current sections are hidden
    return {
      opacity: 0,
      transform: 'scale(0.95)',
      filter: 'blur(2px)'
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: totalHeight }}
    >
      {/* Sticky container that holds the visible content */}
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100">
        {/* Horizontal sliding container */}
        <div
          className="flex h-full w-full"
          style={{
            width: `${sections.length * 100}%`,
            transform: getTransform(),
            transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="flex-shrink-0 h-full relative"
              style={{ 
                width: `${100 / sections.length}%`,
                ...getSectionStyle(index),
                transition: 'opacity 0.3s ease-out, transform 0.3s ease-out, filter 0.3s ease-out'
              }}
            >
              <div className="w-full h-full">
                {section.content}
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {sections.map((_, index) => {
            const currentSectionIndex = Math.round(scrollProgress * (sections.length - 1))
            const isActive = index === currentSectionIndex
            return (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  isActive 
                    ? 'bg-accent-500 w-8' 
                    : 'bg-neutral-300'
                }`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
