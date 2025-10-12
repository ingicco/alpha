'use client'

import { useEffect, useState } from 'react'

interface Logo {
  name: string
  category: string
}

interface VerticalLogoScrollProps {
  logos: Logo[]
  className?: string
}

export function VerticalLogoScroll({ logos, className = '' }: VerticalLogoScrollProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % logos.length)
    }, 2000) // Change every 2 seconds

    return () => clearInterval(interval)
  }, [logos.length])

  const getVisibleLogos = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % logos.length
      visible.push(logos[index])
    }
    return visible
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="space-y-8">
        {getVisibleLogos().map((logo, index) => (
          <div
            key={`${logo.name}-${currentIndex}-${index}`}
            className={`
              transition-all duration-1000 ease-in-out transform
              ${index === 0 ? 'opacity-40 scale-90' : ''}
              ${index === 1 ? 'opacity-100 scale-100' : ''}
              ${index === 2 ? 'opacity-40 scale-90' : ''}
            `}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-neutral-100 h-32 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-neutral-800 mb-2">
                  {logo.name}
                </div>
                <div className="text-sm text-neutral-500 uppercase tracking-wide">
                  {logo.category}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
