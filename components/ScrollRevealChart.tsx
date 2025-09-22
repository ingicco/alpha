'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollRevealChartProps {
  leftContent: React.ReactNode
  rightContent: React.ReactNode // This will be the chart
  leftItems: Array<{
    title: string
    description: string
    ticketSize?: string
    focus?: string
  }>
  className?: string
}

export function ScrollRevealChart({ leftContent, rightContent, leftItems, className = '' }: ScrollRevealChartProps) {
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
      const leftElements = container.querySelectorAll('[data-index]')
      leftElements.forEach((el) => observer.observe(el))
    }, 100)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`${className}`}>
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid lg:grid-cols-5 lg:gap-12">
          {/* Left Content - Scrollable Items */}
          <div className="lg:col-span-3 space-y-24">
            {/* Fixed intro content */}
            {leftContent && (
              <div className="py-12">
                {leftContent}
              </div>
            )}
            
            {/* Scrollable stage items */}
            {leftItems.map((item, index) => (
              <div
                key={index}
                data-index={index}
                className={`transition-all duration-500 ease-out transform ${
                  activeIndex >= index
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-30 translate-y-4 scale-98'
                }`}
                style={{ minHeight: '350px' }}
              >
                <div className={`bg-white rounded-2xl p-8 lg:p-10 shadow-sm transition-all duration-500 ${
                  activeIndex >= index 
                    ? 'shadow-xl border-2 border-accent-500' 
                    : 'shadow-sm border-2 border-transparent'
                }`}>
                  {/* Stage title */}
                  <div className="mb-6">
                    <h3 className={`text-2xl lg:text-3xl font-bold transition-all duration-500 ${
                      activeIndex >= index 
                        ? 'text-primary-900' 
                        : 'text-neutral-400'
                    }`}>
                      {item.title}
                    </h3>
                  </div>
                  
                  <p className={`text-lg leading-relaxed mb-8 transition-all duration-500 ${
                    activeIndex >= index 
                      ? 'text-neutral-700' 
                      : 'text-neutral-400'
                  }`}>
                    {item.description}
                  </p>

                  {item.ticketSize && item.focus && (
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 rounded-xl transition-all duration-500 ${
                      activeIndex >= index 
                        ? 'bg-neutral-50 border border-neutral-200' 
                        : 'bg-neutral-100 border border-neutral-300'
                    }`}>
                      <div>
                        <div className={`text-sm font-medium mb-2 transition-all duration-500 ${
                          activeIndex >= index ? 'text-neutral-600' : 'text-neutral-400'
                        }`}>Ticket Size</div>
                        <div className={`text-xl font-bold transition-all duration-500 ${
                          activeIndex >= index ? 'text-accent-600' : 'text-neutral-400'
                        }`}>{item.ticketSize}</div>
                      </div>
                      <div>
                        <div className={`text-sm font-medium mb-2 transition-all duration-500 ${
                          activeIndex >= index ? 'text-neutral-600' : 'text-neutral-400'
                        }`}>Focus</div>
                        <div className={`text-lg font-semibold leading-tight transition-all duration-500 ${
                          activeIndex >= index ? 'text-primary-900' : 'text-neutral-400'
                        }`}>{item.focus}</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Fixed Chart */}
          <div className="lg:col-span-2">
            <div className="sticky top-20 z-10 h-screen flex items-start pt-4">
              <div className="w-full">
                <div className="w-full scale-125">
                  {rightContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Simple List */}
      <div className="block lg:hidden">
        <div className="space-y-12">
          <div>{leftContent}</div>
          
          <div className="mb-12">
            {rightContent}
          </div>
          
          <div className="space-y-8">
            {leftItems.map((item, index) => (
              <div key={index} className="border-l-4 border-accent-500 pl-6 py-4">
                <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-base text-neutral-600 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.ticketSize && item.focus && (
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Ticket Size:</span>
                      <span className="text-primary-900 font-semibold">{item.ticketSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-500">Focus:</span>
                      <span className="text-primary-900 font-semibold text-right max-w-[60%]">{item.focus}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
