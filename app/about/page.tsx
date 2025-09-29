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
      {/* Hero Section - Story-driven with Scroll Color Effect */}
      <Section className="pt-24 pb-16 sm:pb-24 lg:pb-32">
        <Container>
          <div className="text-center max-w-5xl mx-auto">
            <Reveal>
              <div className="mb-8 sm:mb-10">
                {/* Mobile: Compelling story title with scroll effect */}
                <h1 className="block sm:hidden text-4xl font-bold tracking-tight mb-6 leading-tight transition-colors duration-700 text-primary-900 hover:text-accent-600">
                  Built for the Future of Finance
                </h1>
                
                {/* Desktop: Larger story title with scroll effect */}
                <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight transition-colors duration-700 text-primary-900 hover:text-accent-600">
                  Built for the Future of Finance
                </h1>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="mb-10 sm:mb-12">
                {/* Mobile: Compelling story - larger text */}
                <p className="block sm:hidden text-lg text-neutral-600 leading-relaxed transition-colors duration-500">
                  We saw a gap in the market. Traditional finance was too slow to embrace digital innovation. Digital-first companies lacked institutional discipline. Alpha Group Investment was founded to bridge this divide.
                </p>
                
                {/* Desktop: Full story - larger text */}
                <p className="hidden sm:block text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto transition-colors duration-500">
                  We saw a gap in the market. Traditional finance was too slow to embrace digital innovation. Digital-first companies lacked institutional discipline. Alpha Group Investment was founded to bridge this divide, combining decades of institutional expertise with cutting-edge digital asset knowledge.
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Our Story Section */}
      <Section background="muted" className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <Reveal>
              <div>
                <p className="text-base uppercase tracking-wider text-accent-600 font-semibold mb-6 transition-colors duration-500">Our Story</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-10 leading-tight transition-colors duration-700 hover:text-accent-600">
                  Where Expertise Meets Opportunity
                </h2>
                
                <div className="space-y-8 text-xl md:text-2xl text-neutral-600 leading-relaxed">
                  <p className="transition-colors duration-500 hover:text-primary-700">
                    <strong className="text-primary-900 transition-colors duration-300">The problem was clear:</strong> Traditional financial institutions couldn't move fast enough to capture digital asset opportunities. Meanwhile, crypto-native companies lacked the institutional discipline needed for serious capital.
                  </p>
                  
                  <p className="transition-colors duration-500 hover:text-primary-700">
                    <strong className="text-primary-900 transition-colors duration-300">We saw the solution:</strong> A new kind of financial partner that could speak both languages fluently. One that understood both the rigor of institutional governance and the transformative potential of blockchain technology.
                  </p>
                  
                  <p className="transition-colors duration-500 hover:text-primary-700">
                    <strong className="text-primary-900 transition-colors duration-300">Today, Alpha Group Investment</strong> stands at this intersection, helping forward-thinking organizations navigate the convergence of traditional and digital finance with confidence and precision.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-105">
                  <Image
                    src="/media/about-vision.webp"
                    alt="Alpha Group Investment story and vision"
                    fill
                    className="object-cover rounded-3xl"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Leadership Section */}
      <Section className="py-16 sm:py-24 lg:py-32">
        <Container>
          {/* Section Header */}
          <div className="text-center mb-16 lg:mb-20">
            <Reveal>
              <div>
                <p className="text-base uppercase tracking-wider text-accent-600 font-semibold mb-6 transition-colors duration-500">Meet the Team</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-10 leading-tight transition-colors duration-700 hover:text-accent-600">
                  The People Behind Alpha
                </h2>
                <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-4xl mx-auto transition-colors duration-500 hover:text-primary-700">
                  Our success comes from our people. Industry veterans, digital asset pioneers, and institutional finance experts who've spent decades building the expertise you need to succeed in tomorrow's financial landscape.
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
                    <h3 className="text-sm sm:text-base font-bold text-primary-900 mb-2 leading-tight mobile-text-wrap transition-colors duration-300 group-hover:text-accent-600">
                      <div>
                        <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                        <div>{leader.name.split(' ').slice(-1)[0]}</div>
                      </div>
                    </h3>
                    
                    {/* Position */}
                    <p className="text-sm text-neutral-600 font-medium mobile-text-wrap transition-colors duration-300 group-hover:text-primary-700">
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
                      <h3 className="text-xl font-bold text-primary-900 mb-3 leading-tight max-w-44 h-14 flex items-center justify-center text-center transition-colors duration-300 group-hover:text-accent-600">
                        <div>
                          <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                          <div>{leader.name.split(' ').slice(-1)[0]}</div>
                        </div>
                      </h3>
                      
                      {/* Position */}
                      <p className="text-base text-neutral-600 font-medium max-w-44 transition-colors duration-300 group-hover:text-primary-700">
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
                <p className="text-base uppercase tracking-wider text-accent-400 font-semibold mb-6 transition-colors duration-500">Why Alpha</p>
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
                    <strong className="text-white transition-colors duration-300">When you work with Alpha,</strong> you're not just hiring advisors or investors. You're gaining partners who have skin in the game and a track record of turning vision into reality.
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
                  The convergence of traditional finance and digital assets is happening now. The question isn't whether to participate, but who to partner with. Let's explore how Alpha can accelerate your success in this new landscape.
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
