'use client'

import { useState, useEffect } from 'react'

const services = [
  {
    id: 'tokenization',
    title: 'Tokenization Advisory',
    description: 'End-to-end tokenization of real-world assets — from funds and securities to compliant issuance frameworks.',
    points: [
      'Funds & Capital Markets',
      'Commodity & Real Estate', 
      'Lifecycle Structuring'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h4.125m0-15.75h8.25" />
      </svg>
    )
  },
  {
    id: 'stablecoin', 
    title: 'Stablecoin & Yield Strategy',
    description: 'Institutional readiness for stablecoin and yield projects — advising across issuance, risk management, and scaling.',
    points: [
      'Institutional Onboarding',
      'Treasury Yield Solutions',
      'Regulatory Assurance'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    id: 'corporate',
    title: 'Digital Corporate Finance', 
    description: 'Cross-border corporate finance transactions — including Reverse Mergers, Reverse Swaps, and PIPE deals.',
    points: [
      'Deal Structuring and Execution',
      'Distribution and Syndication', 
      'Strategic Alignment with Public Markets'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    id: 'compliance',
    title: 'Compliance & Risk',
    description: 'Compliance frameworks and risk management solutions aligned with global regulatory standards.',
    points: [
      'Regulatory Compliance',
      'Risk Assessment & Management',
      'Audit & Reporting'
    ],
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
      </svg>
    )
  }
]

export default function OndoStyleCards() {
  const [activeCard, setActiveCard] = useState<string>('tokenization')
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
          const nextIndex = (autoPlayIndex + 1) % services.length
          setAutoPlayIndex(nextIndex)
          setActiveCard(services[nextIndex].id)
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

  const activeService = services.find(s => s.id === activeCard)

  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-8">
      {/* Single Row of Cards at Bottom - Centered */}
      <div className="flex gap-4 items-end justify-center mb-6">
        {services.map((service, index) => {
          const isActive = activeCard === service.id
          
          return (
            <div
              key={service.id}
              className={`cursor-pointer transition-all duration-500 ease-out ${
                isActive 
                  ? 'flex-1 max-w-md' 
                  : 'w-48 flex-shrink-0'
              }`}
              onClick={() => handleCardClick(service.id, index)}
            >
              <div
                className={`relative overflow-hidden transition-all duration-500 ease-out ${
                  isActive 
                    ? 'bg-white rounded-3xl shadow-2xl h-72 p-6' 
                    : 'bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl h-16 p-4 hover:bg-white/20'
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
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 flex-shrink-0">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-primary-900 leading-tight flex-1">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Description - More Space */}
                    <div className="mb-6">
                      <p className="text-neutral-700 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Bullet Points - Better Spacing from Bottom */}
                    <div className="space-y-3 pt-4 border-t border-neutral-100 mt-auto">
                      {service.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-400 flex-shrink-0 mt-2"></div>
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
      <div className="flex items-center justify-center space-x-4 max-w-md mx-auto">
        <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white transition-all duration-100 ease-linear rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === autoPlayIndex ? 'bg-white' : 'bg-white/30'
              }`}
              onClick={() => handleCardClick(services[index].id, index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
