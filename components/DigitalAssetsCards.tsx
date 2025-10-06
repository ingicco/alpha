'use client'

import { useState, useEffect } from 'react'

const digitalAssetsFocus = [
  {
    id: 'issuance',
    title: 'Issuance Design',
    description: 'Strategic design of digital asset issuance structures and frameworks.',
    points: [
      'Token Economics Design',
      'Regulatory Compliance',
      'Distribution Strategy'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    )
  },
  {
    id: 'reserve',
    title: 'Reserve Transparency and Verification',
    description: 'Comprehensive reserve management and transparency frameworks.',
    points: [
      'Reserve Auditing',
      'Transparency Reporting',
      'Risk Management'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    id: 'governance',
    title: 'Governance and Risk Frameworks',
    description: 'Enterprise-grade governance structures and risk management systems.',
    points: [
      'Governance Design',
      'Risk Assessment',
      'Compliance Monitoring'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    id: 'reporting',
    title: 'Institutional Reporting',
    description: 'Board-ready documentation and institutional-grade reporting frameworks.',
    points: [
      'Board Reporting',
      'Regulatory Filings',
      'Stakeholder Communications'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  }
]

export default function DigitalAssetsCards() {
  const [activeCard, setActiveCard] = useState<string>('issuance')
  const [autoPlayIndex, setAutoPlayIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  // Auto-play with progress bar
  useEffect(() => {
    if (!isAutoPlaying) return

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          // Move to next card
          const nextIndex = (autoPlayIndex + 1) % digitalAssetsFocus.length
          setAutoPlayIndex(nextIndex)
          setActiveCard(digitalAssetsFocus[nextIndex].id)
          return 0
        }
        return prev + (100 / 40) // 4 seconds total (100 / 40 = 2.5 per 100ms)
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [isAutoPlaying, autoPlayIndex])

  const handleCardClick = (serviceId: string, index: number) => {
    setIsAutoPlaying(false)
    setActiveCard(serviceId)
    setAutoPlayIndex(index)
    setProgress(0)
  }

  const activeService = digitalAssetsFocus.find(s => s.id === activeCard)

  return (
    <div className="absolute bottom-0 left-0 right-0 px-8 pb-8">
      {/* Header Section - Fixed Position */}
      <div className="text-center mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">Our Focus</h3>
        <p className="text-accent-400 text-base font-semibold italic leading-relaxed max-w-xl mx-auto">
          Assurance isn't an afterthought; it's the foundation of adoption.
        </p>
      </div>

      {/* Single Row of Cards at Bottom - Centered */}
      <div className="flex gap-6 items-end justify-center mb-8 max-w-6xl mx-auto">
        {digitalAssetsFocus.map((service, index) => {
          const isActive = activeCard === service.id
          
          return (
            <div
              key={service.id}
              className={`cursor-pointer transition-all duration-500 ease-out ${
                isActive 
                  ? 'flex-1 max-w-lg' 
                  : 'w-52 flex-shrink-0'
              }`}
              onClick={() => handleCardClick(service.id, index)}
            >
              <div
                className={`relative overflow-hidden transition-all duration-500 ease-out ${
                  isActive 
                    ? 'bg-white rounded-3xl shadow-2xl h-72 p-6' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl h-20 p-4 hover:bg-white/20'
                }`}
              >
                {!isActive ? (
                  // Small Card State
                  <div className="flex items-center justify-center h-full">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <h3 className="text-sm font-medium text-white">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                ) : (
                  // Expanded Card State - Better Layout
                  <div className="h-full flex flex-col">
                    {/* Header - Icon and Title Aligned */}
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-primary-900 leading-tight flex-1">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description - More Space */}
                    <div className="mb-4">
                      <p className="text-neutral-700 text-xs leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Bullet Points - Better Spacing from Bottom */}
                    <div className="space-y-2 pt-3 border-t border-neutral-100 mt-auto">
                      {service.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-2">
                          <div className="w-1 h-1 rounded-full bg-primary-400 flex-shrink-0 mt-1.5"></div>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Progress Bar - Centered */}
      <div className="flex items-center justify-center space-x-4 max-w-md mx-auto mt-4">
        <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex space-x-2">
          {digitalAssetsFocus.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === autoPlayIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => handleCardClick(digitalAssetsFocus[index].id, index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
