'use client'

import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

const leadership = [
  {
    name: 'Sheikh Salim Taman Al Maashani',
    role: 'Chairman of the Board',
    bio: 'Sheikh Salim has a long-tenured career of corporate governance across several industries. He spent over 15 years on the board of Bank Muscat and has served on the boards of prominent companies including Oman Air, Commercial Bank of Oman and Oman International Bank.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/sheikh-salim-taman-al-maashani.webp'
  },
  {
    name: 'Tim Underdown',
    role: 'Portfolio Advisor',
    bio: 'Tim has over 25 years of experience in energy, power and commodities. After practicing as an energy lawyer for 13 years he led the management buy-out of Enron UK to establish Px Group, becoming its Chairman and CEO. He established Px International and Forthside Group in the UAE where he is currently CEO and Chairman.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/tim-underdown.webp'
  },
  {
    name: 'Pradeep Baddam',
    role: 'Investment Director',
    bio: 'Pradeep has a decade of expertise in banking and investment management with a track record in evaluating private and public businesses globally. He worked with Hyundai Motors and ICICI Bank, holding senior posts including Investment Director at several funds. He holds an Masters in Finance from London Business School, MBA from Indian Institute of Foreign Trade, and is a CFA and FRM charterholder.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/pradeep-baddam.webp'
  },
  {
    name: 'Abdul Rafey',
    role: 'Operations Director',
    bio: 'Abdul has over 15 years in Banking and Finance, focusing on Corporate Banking for 12 years in Dubai, UAE. He demonstrates proficiency in Operations Management and investment strategies with outstanding leadership qualities and profound understanding of financial markets, regulations, and compliance standards. He holds an MBA in Marketing & Finance.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/abdul-rafey.webp'
  },
  {
    name: 'Karthik Subramanian',
    role: 'Investment Manager',
    bio: 'Karthik is a seasoned finance professional with over a decade of experience in global investment management and banking. He has worked with prominent organizations, driving strategic growth initiatives and overseeing investment strategies. He holds an MS in Finance from NYU Stern School of Business and is a CFA charterholder.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/karthik-subramanian.webp'
  },
  {
    name: 'Ghassan Mahmoud',
    role: 'Private Equity Manager',
    bio: 'Ghassan is a seasoned finance professional with expertise in private equity management. He possesses strong qualifications and a proven track record of driving growth and strategic investments. With extensive experience in navigating complex financial markets, he excels in identifying opportunities and optimizing portfolio performance.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/ghassan-mahmoud.webp'
  },
  {
    name: 'Nadia Alamilla',
    role: 'Client Relations Director',
    bio: 'Nadia is a seasoned customer service and relationship expert with extensive experience in international private banking. She excels in delivering personalized service, building strong relationships, and meeting the unique needs of high-net-worth clients with a deep understanding of global banking solutions.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/nadia-alamilla.webp'
  },
  {
    name: 'Abhimanyu Kashyap',
    role: 'Chief Operating Officer',
    bio: 'Abhimanyu Kashyap serves as the Chief Operating Officer of Kinetic Asset Management, overseeing the firm\'s operational strategy, regulatory frameworks, and custodian partnerships. With a career spanning fintech innovation and asset management, he brings a rare blend of entrepreneurial drive and institutional discipline. Before joining Kinetic, Abhimanyu built and led several pioneering ventures in digital assets, lending technology, and blockchain infrastructure, establishing himself as a key contributor to the evolving financial ecosystem in the region.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/abhimanyu-kashyap.webp'
  }
]

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    setIsHovered(false)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Multiply by 2 for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || isHovered || isDragging) return

    const scrollContainer = scrollRef.current
    let animationId: number

    const autoScroll = () => {
      if (scrollContainer && !isHovered && !isDragging) {
        scrollContainer.scrollLeft += 1
        
        // Reset to beginning when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0
        }
      }
      animationId = requestAnimationFrame(autoScroll)
    }

    animationId = requestAnimationFrame(autoScroll)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [isHovered, isDragging])

  return (
    <>
      {/* Hero Section - Full Screen */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/media/about-vision.webp"
            alt="About AGI³"
            fill
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <Container>
          <div className="relative z-10 text-center">
            <Reveal>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-[0.9]">
                Building the Future
                <br />
                <span className="text-accent-400">of Finance</span>
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto font-light">
                Discover the story behind AGI³ and our mission to invest in the technologies that will define tomorrow
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Who We Are - Excellence Style */}
      <div className="relative bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Left side - Sticky title */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:justify-center bg-white">
            <Container>
              <div className="text-center px-8 py-16 lg:py-0">
                <Reveal>
                  <h2 className="text-6xl md:text-7xl lg:text-9xl font-extralight text-black leading-tight mb-6">
                    Who
                    <br />
                    We Are
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md mx-auto font-light">
                    Principal investors building conviction through capital
                  </p>
                </Reveal>
              </div>
            </Container>
          </div>

          {/* Right side - Content */}
          <div className="">
            <div className="min-h-screen bg-black flex items-center py-20">
              <Container>
                <div className="max-w-2xl">
                  <ScrollAnimation animation="slideUp" delay={0}>
                    <div className="mb-8">
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-6">
                        Builders of Conviction
                      </h3>
                      <p className="text-lg text-white leading-relaxed mb-8">
                        Alpha Group Investments (AGI³) is a principal investment group dedicated to the technologies of tomorrow.
                      </p>
                      <p className="text-lg text-white leading-relaxed mb-8">
                        We invest our own capital, not as fund managers, but as builders of conviction. Every investment we make is a statement of belief:
                      </p>
                      <div className="border-l-4 border-accent-400 pl-6 py-4 bg-gray-900 rounded-r-2xl">
                        <p className="text-xl font-light text-white italic">
                          That the future belongs to those who design it.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>

      {/* Our Philosophy Section */}
      <Section className="py-16 sm:py-24 lg:py-32 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                    Our Philosophy
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Investing is a <strong className="text-neutral-900">science</strong> — measured, analytical, and data-driven.
                  </p>
                  
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    It is also an <strong className="text-neutral-900">art</strong> — intuitive, human, and imaginative.
                  </p>
                  
                  <div className="bg-neutral-50 rounded-xl p-6 mt-8">
                    <p className="text-xl font-semibold text-neutral-900 mb-3">
                      At AGI³, we merge both worlds.
                    </p>
                    <p className="text-lg text-neutral-600">
                      We look beyond valuation to see institutional potential, regulatory alignment, and scalable liquidity.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                <div className="rounded-xl shadow-lg aspect-[3/4] bg-neutral-200 w-full max-w-md mx-auto flex items-center justify-center">
                  <div className="text-center text-neutral-500">
                    <div className="text-4xl mb-2">🎯</div>
                    <p className="text-sm font-medium">Our Philosophy</p>
                    <p className="text-xs">400x500px</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our Structure Section */}
      <Section className="py-16 sm:py-24 lg:py-32 bg-neutral-50">
        <Container>
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8 leading-tight">
                  Our Structure
                </h2>
                
                <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl mx-auto">
                  We operate through three connected pillars that form the foundation of our investment philosophy:
                </p>
              </div>
            </Reveal>

            {/* Hierarchy Diagram */}
            <div className="relative">
              {/* Top Level - AGI³ */}
              <Reveal delay={200}>
                <div className="text-center mb-16">
                  <div className="inline-block bg-primary-900 text-white rounded-2xl px-8 py-6 shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">AGI³</h3>
                    <p className="text-primary-100 text-sm">Alpha Group Investments</p>
                  </div>
                </div>
              </Reveal>

              {/* Connection Lines */}
              <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-px h-16 bg-primary-300"></div>
              <div className="absolute top-40 left-1/4 right-1/4 h-px bg-primary-300"></div>
              <div className="absolute top-40 left-1/4 w-px h-8 bg-primary-300"></div>
              <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-px h-8 bg-primary-300"></div>
              <div className="absolute top-40 right-1/4 w-px h-8 bg-primary-300"></div>

              {/* Three Pillars */}
              <div className="grid md:grid-cols-3 gap-8 lg:gap-12 pt-12">
                {/* Pillar 1 - Investment Arm */}
                <Reveal delay={400}>
                  <div className="text-center h-full">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 hover:border-accent-400 transition-colors duration-300 h-full flex flex-col">
                      <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">01</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-3">
                        Investment Arm
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm flex-grow">
                        Deploying proprietary capital into emerging technologies — digital assets, AI, tokenization, and financial infrastructure.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Pillar 2 - Research & Advisory */}
                <Reveal delay={500}>
                  <div className="text-center h-full">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 hover:border-accent-400 transition-colors duration-300 h-full flex flex-col">
                      <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">02</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-3">
                        Research & Advisory Engine
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm flex-grow">
                        Our internal think-tank drives insights across market structure, regulation, and technology. It fuels our thesis and identifies institutional pathways for growth.
                      </p>
                    </div>
                  </div>
                </Reveal>

                {/* Pillar 3 - Institutional Ecosystem */}
                <Reveal delay={600}>
                  <div className="text-center h-full">
                    <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-200 hover:border-accent-400 transition-colors duration-300 h-full flex flex-col">
                      <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                        <div className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">03</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-primary-900 mb-3">
                        Institutional Ecosystem Advisory
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm flex-grow">
                        Because we are deeply invested, we selectively advise companies we believe in, supporting their growth through tokenization, compliance, and structured capital solutions.
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Bottom Connection */}
              <Reveal delay={700}>
                <div className="text-center mt-12 pt-8 border-t border-primary-200">
                  <p className="text-primary-700 font-medium">
                    Integrated & Synergistic Approach
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Vision with AGI³ Section */}
      <Section className="py-16 sm:py-24 lg:py-32 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-8 leading-tight">
                  Our Vision with AGI³
                </h2>
                
                <p className="text-xl text-neutral-600 leading-relaxed">
                  The AGI³ symbolizes our evolution and commitment to the future of finance.
                </p>
              </div>
            </Reveal>

            {/* Large AGI³ Display */}
            <Reveal delay={200}>
              <div className="mb-16">
                <div className="text-8xl md:text-9xl font-bold text-primary-900 mb-8 tracking-tight">
                  <span id="agi-text" className="transition-all duration-500 ease-out">AGI</span><span id="cubed-text" className="transition-all duration-500 ease-out">³</span>
                </div>
              </div>
            </Reveal>

            {/* Explanation Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <Reveal delay={400}>
                <div 
                  className="text-left cursor-pointer group"
                  onMouseEnter={() => {
                    const agiText = document.getElementById('agi-text');
                    if (agiText) {
                      agiText.style.textShadow = '0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1)';
                      agiText.style.color = '#f59e0b';
                    }
                  }}
                  onMouseLeave={() => {
                    const agiText = document.getElementById('agi-text');
                    if (agiText) {
                      agiText.style.textShadow = 'none';
                      agiText.style.color = '#1e3a8a';
                    }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary-900 text-white rounded-lg flex items-center justify-center font-bold text-xs mr-4 group-hover:bg-accent-600 transition-colors duration-300">
                      AGI
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors duration-300">Alpha Group Investments</h3>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                    Intelligence, foresight, and conviction. Our foundation built on decades of investment expertise and strategic thinking.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={600}>
                <div 
                  className="text-left cursor-pointer group"
                  onMouseEnter={() => {
                    const cubedText = document.getElementById('cubed-text');
                    if (cubedText) {
                      cubedText.style.textShadow = '0 0 20px rgba(245, 158, 11, 0.3), 0 0 40px rgba(245, 158, 11, 0.1)';
                      cubedText.style.color = '#f59e0b';
                    }
                  }}
                  onMouseLeave={() => {
                    const cubedText = document.getElementById('cubed-text');
                    if (cubedText) {
                      cubedText.style.textShadow = 'none';
                      cubedText.style.color = '#1e3a8a';
                    }
                  }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-primary-900 text-white rounded-lg flex items-center justify-center font-bold text-sm mr-4 group-hover:bg-accent-600 transition-colors duration-300">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors duration-300">The Power of Three</h3>
                  </div>
                  <p className="text-lg text-neutral-600 leading-relaxed group-hover:text-primary-700 transition-colors duration-300">
                    Web3, tokenization, and exponential growth. The three forces reshaping the future of finance and technology.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Vision Statement */}
            <Reveal delay={800}>
              <div className="bg-neutral-50 rounded-2xl p-8 md:p-12">
                <p className="text-2xl md:text-3xl font-semibold text-neutral-900 italic leading-relaxed">
                  "We invest today in what will be mainstream tomorrow."
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section className="py-24 lg:py-32 bg-black">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-24">
            <Reveal>
              <div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                  The People Behind AGI³
                </h2>
                <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-4xl mx-auto font-light">
                  Industry veterans, digital asset pioneers, and institutional finance experts building tomorrow's financial landscape
                </p>
              </div>
            </Reveal>
          </div>

          {/* Team Grid */}
          <div className="relative">
            {/* Mobile: 2-column grid */}
            <div className="block lg:hidden grid grid-cols-2 gap-4 sm:gap-6 mb-8">
              {leadership.map((leader, index) => (
                <Reveal key={leader.name} delay={index * 100}>
                  <div className="group text-center">
                    {/* Profile Photo - Clickable */}
                    <div 
                      className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 cursor-pointer"
                      onClick={() => setSelectedLeader(leader)}
                    >
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={112}
                        height={112}
                        className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-105"
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary-900/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-sm sm:text-base font-light text-white mb-2 leading-tight mobile-text-wrap transition-colors duration-300 group-hover:text-accent-400">
                      <div>
                        <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                        <div>{leader.name.split(' ').slice(-1)[0]}</div>
                      </div>
                    </h3>
                    
                    {/* Position */}
                    <p className="text-sm text-white/70 font-light mobile-text-wrap transition-colors duration-300 group-hover:text-white">
                      {leader.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Desktop: Interactive Scrolling Container */}
            <div className="hidden lg:block">
              <div 
                ref={scrollRef}
                className={`overflow-x-auto scrollbar-hide pb-6 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                style={{ 
                  cursor: isDragging ? 'grabbing' : isHovered ? 'grab' : 'default',
                  userSelect: isDragging ? 'none' : 'auto'
                }}
              >
                <div className="flex gap-12 xl:gap-16 w-max px-4">
                  {leadership.map((leader, index) => (
                    <div key={leader.name} className="group text-center flex-shrink-0">
                      {/* Profile Photo - Clickable */}
                      <div 
                        className="relative w-36 h-36 mx-auto mb-6 cursor-pointer"
                        onClick={() => setSelectedLeader(leader)}
                      >
                        <Image
                          src={leader.image}
                          alt={leader.name}
                          width={144}
                          height={144}
                          className="w-full h-full object-cover rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary-900/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Name */}
                      <h3 className="text-xl font-light text-white mb-3 leading-tight max-w-44 h-14 flex items-center justify-center text-center transition-colors duration-300 group-hover:text-accent-400">
                        <div>
                          <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                          <div>{leader.name.split(' ').slice(-1)[0]}</div>
                        </div>
                      </h3>
                      
                      {/* Position */}
                      <p className="text-base text-white/70 font-light max-w-44 transition-colors duration-300 group-hover:text-white">
                        {leader.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Why Alpha Section */}
      <Section background="primary" className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <Reveal>
              <div>
                <p className="text-base uppercase tracking-wider text-accent-400 font-semibold mb-6 transition-colors duration-500">Why AGI³</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-tight transition-colors duration-700 hover:text-accent-400">
                  Your Success Is Our Mission
                </h2>
                <div className="space-y-10 text-xl md:text-2xl text-neutral-200 leading-relaxed">
                  <p className="transition-colors duration-500 hover:text-white">
                    <strong className="text-white transition-colors duration-300">We don't just provide capital or advice.</strong> We become your strategic partner, aligning our success with yours through every phase of growth and transformation.
                  </p>
                  
                  <p className="transition-colors duration-500 hover:text-white">
                    <strong className="text-white transition-colors duration-300">Our network becomes your network.</strong> Decades of relationships across legal, technical, and regulatory domains, all focused on accelerating your success while maintaining the highest standards of institutional governance.
                  </p>
                  
                  <p className="transition-colors duration-500 hover:text-white">
                    <strong className="text-white transition-colors duration-300">When you work with AGI³,</strong> you're not just hiring advisors or investors. You're gaining partners who have skin in the game and a track record of turning vision into reality.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <Reveal>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-10 leading-tight transition-colors duration-700 hover:text-accent-600">
                  Ready to Build the Future Together?
                </h2>
                <p className="text-xl md:text-2xl text-neutral-600 mb-12 leading-relaxed transition-colors duration-500 hover:text-primary-700">
                  The convergence of traditional finance and digital assets is happening now. The question isn't whether to participate, but who to partner with. Let's explore how AGI³ can accelerate your success in this new landscape.
                </p>
                <div className="flex justify-center">
                  <CTAButton href="/contact" variant="outline" size="lg" className="px-10 py-5 text-lg transition-all duration-300 hover:scale-105">
                    Start a Conversation
                  </CTAButton>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Team Member Modal */}
      {selectedLeader && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedLeader(null)}
        >
          <div 
            className="bg-primary-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative p-6 sm:p-8 text-center bg-gradient-to-b from-primary-800 to-primary-900 rounded-t-3xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Larger Profile Photo */}
              <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 sm:mb-7">
                <Image
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  width={176}
                  height={176}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
              
              {/* Name and Role */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight mobile-text-wrap">
                {selectedLeader.name}
              </h2>
              
              <p className="text-base sm:text-lg font-medium text-accent-400">
                {selectedLeader.role}
              </p>
            </div>
            
            {/* Modal Content */}
            <div className="px-6 sm:px-8 pb-6 sm:pb-8">
              {/* Full Bio */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 sm:mb-5">About</h3>
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mobile-text-wrap">
                  {selectedLeader.bio}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
