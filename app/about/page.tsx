'use client'

import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'
import { useState } from 'react'

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
    role: 'Chief Operating Officer, Kinetic Asset Management',
    bio: 'Abhimanyu Kashyap serves as the Chief Operating Officer of Kinetic Asset Management, overseeing the firm\'s operational strategy, regulatory frameworks, and custodian partnerships. With a career spanning fintech innovation and asset management, he brings a rare blend of entrepreneurial drive and institutional discipline. Before joining Kinetic, Abhimanyu built and led several pioneering ventures in digital assets, lending technology, and blockchain infrastructure, establishing himself as a key contributor to the evolving financial ecosystem in the region.',
    linkedin: 'https://linkedin.com/in/placeholder',
    image: '/team/abhimanyu-kashyap.webp'
  }
]

export default function AboutPage() {
  const [selectedLeader, setSelectedLeader] = useState<typeof leadership[0] | null>(null)

  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24 pb-12 sm:pb-16 lg:pb-24">
        <div className="mobile-container text-center">
          <Reveal>
            <div className="mb-6 sm:mb-8">
              {/* Mobile: Smaller, readable title */}
              <h1 className="block sm:hidden text-2xl font-bold tracking-tight text-primary-900 mb-4 mobile-text-wrap leading-tight">
                Bridging Capital, Compliance, and Innovation
              </h1>
              
              {/* Desktop: Larger title */}
              <h1 className="hidden sm:block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-primary-900 mb-6 leading-tight">
                Bridging Capital, Compliance, and Innovation
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mb-8 sm:mb-10">
              {/* Mobile: Shorter, clearer text */}
              <p className="block sm:hidden text-sm text-neutral-600 leading-relaxed mobile-text-wrap">
                Alpha aligns institutional mandates, venture discipline, and digital asset assurance for forward-thinking organizations.
              </p>
              
              {/* Desktop: Full description */}
              <p className="hidden sm:block text-base md:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-4xl mx-auto">
                Alpha aligns institutional mandates, venture discipline, and digital asset 
                assurance to bridge capital, compliance, and innovation for forward-thinking organizations.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Vision Section */}
      <Section
        background="muted"
        className="py-12 sm:py-16 lg:py-24"
      >
        <div className="mobile-container">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Reveal>
              <div>
                {/* Mobile: Simple title */}
                <p className="block sm:hidden text-xs uppercase tracking-wider text-accent-600 font-semibold mb-2">Our Vision</p>
                <h2 className="block sm:hidden text-xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  The Future of Institutional Finance
                </h2>
                <p className="block sm:hidden text-sm text-neutral-600 leading-relaxed mobile-text-wrap">
                  We believe the convergence of traditional finance and digital assets requires a new kind of partner.
                </p>
                
                {/* Desktop: Full header */}
                <p className="hidden sm:block text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">Our Vision</p>
                <h2 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  The Future of Institutional Finance
                </h2>
                <p className="hidden sm:block text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  We believe the convergence of traditional finance and digital assets requires a new kind of partner—one that combines institutional rigor with technological innovation.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Content Grid */}
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                {/* Mobile: Compact content */}
                <div className="block lg:hidden">
                  <h3 className="text-lg font-bold text-primary-900 mb-4 mobile-text-wrap">
                    Institutional Excellence Meets Digital Innovation
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4 mobile-text-wrap">
                    Our approach combines decades of institutional finance experience with cutting-edge digital asset expertise.
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mobile-text-wrap">
                    Through our network of partners, we deliver comprehensive solutions that meet institutional governance standards.
                  </p>
                </div>
                
                {/* Desktop: Full content */}
                <div className="hidden lg:block">
                  <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                    Institutional Excellence Meets Digital Innovation
                  </h3>
                  <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                    Our approach combines decades of institutional finance experience with 
                    cutting-edge digital asset expertise. We don't just advise—we partner 
                    with organizations to navigate the complex intersection of traditional 
                    and digital finance.
                  </p>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Through our network of legal, technical, and regulatory partners, we 
                    deliver comprehensive solutions that meet the highest standards of 
                    institutional governance while embracing the transformative potential 
                    of emerging technologies.
                  </p>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="relative">
                {/* Mobile: Smaller image */}
                <div className="block lg:hidden w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-sm text-neutral-400 font-medium">Vision &</div>
                    <div className="text-xs text-neutral-500 mt-1">Innovation</div>
                  </div>
                </div>
                
                {/* Desktop: Full image */}
                <div className="hidden lg:block w-full h-80 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl shadow-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-base text-neutral-400 font-medium">Vision and Innovation</div>
                    <div className="text-sm text-neutral-500 mt-1">illustration</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Leadership Section */}
      <Section className="py-12 sm:py-16 lg:py-24">
        <div className="mobile-container">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Reveal>
              <div>
                {/* Mobile: Simple header */}
                <p className="block sm:hidden text-xs uppercase tracking-wider text-accent-600 font-semibold mb-2">Leadership</p>
                <h2 className="block sm:hidden text-xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  Experienced Partners
                </h2>
                <p className="block sm:hidden text-sm text-neutral-600 leading-relaxed mobile-text-wrap">
                  Our team combines institutional experience with digital asset expertise.
                </p>
                
                {/* Desktop: Full header */}
                <p className="hidden sm:block text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">Leadership</p>
                <h2 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  Experienced Partners
                </h2>
                <p className="hidden sm:block text-base md:text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our team combines deep institutional experience with digital asset expertise and venture investment acumen.
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
                      className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-3 cursor-pointer"
                      onClick={() => setSelectedLeader(leader)}
                    >
                      <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <div className="text-xs text-neutral-500 font-medium">Photo</div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-xs sm:text-sm font-bold text-primary-900 mb-1 leading-tight mobile-text-wrap">
                      <div>
                        <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                        <div>{leader.name.split(' ').slice(-1)[0]}</div>
                      </div>
                    </h3>
                    
                    {/* Position */}
                    <p className="text-xs text-neutral-600 font-medium mobile-text-wrap">
                      {leader.role}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Desktop: Horizontal Scrollable Container */}
            <div className="hidden lg:block">
              <div className="overflow-x-auto scrollbar-hide pb-6">
                <div className="flex gap-12 xl:gap-16 w-max px-4">
                  {leadership.map((leader, index) => (
                    <Reveal key={leader.name} delay={index * 100}>
                      <div className="group text-center flex-shrink-0">
                        {/* Profile Photo - Clickable */}
                        <div 
                          className="relative w-32 h-32 mx-auto mb-4 cursor-pointer"
                          onClick={() => setSelectedLeader(leader)}
                        >
                          <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                            <div className="text-sm text-neutral-500 font-medium">Photo</div>
                          </div>
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-primary-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Name */}
                        <h3 className="text-lg font-bold text-primary-900 mb-2 leading-tight max-w-40 h-12 flex items-center justify-center text-center">
                          <div>
                            <div>{leader.name.split(' ').slice(0, -1).join(' ')}</div>
                            <div>{leader.name.split(' ').slice(-1)[0]}</div>
                          </div>
                        </h3>
                        
                        {/* Position */}
                        <p className="text-sm text-neutral-600 font-medium max-w-40">
                          {leader.role}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="flex items-center gap-2 px-3 py-2 bg-neutral-100 rounded-full">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
                  <div className="w-2 h-2 bg-neutral-300 rounded-full"></div>
                </div>
                <span className="text-xs text-neutral-600 ml-2">
                  <span className="hidden sm:inline">Click photo for bio</span>
                  <span className="sm:hidden">Tap for bio</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ecosystem Overview */}
      <Section
        background="primary"
        className="py-12 sm:py-16 lg:py-24"
      >
        <div className="mobile-container">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <Reveal>
              <div>
                {/* Mobile: Simple header */}
                <p className="block sm:hidden text-xs uppercase tracking-wider text-accent-400 font-semibold mb-2">Our Ecosystem</p>
                <h2 className="block sm:hidden text-xl font-bold text-white mb-4 mobile-text-wrap">
                  Connected Excellence
                </h2>
                <p className="block sm:hidden text-sm text-neutral-200 leading-relaxed mobile-text-wrap">
                  We leverage a curated network of best-in-class partners.
                </p>
                
                {/* Desktop: Full header */}
                <p className="hidden sm:block text-sm uppercase tracking-wider text-accent-400 font-semibold mb-4">Our Ecosystem</p>
                <h2 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                  Connected Excellence
                </h2>
                <p className="hidden sm:block text-base md:text-lg text-neutral-200 leading-relaxed max-w-4xl mx-auto">
                  We leverage a curated network of best-in-class partners to deliver comprehensive solutions across all aspects of modern finance.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Ecosystem Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <Reveal>
              <div className="text-center p-4 sm:p-6">
                {/* Mobile: Smaller icon */}
                <div className="block sm:hidden mx-auto mb-4 flex h-12 w-12 items-center justify-center text-accent-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                
                {/* Desktop: Full size icon */}
                <div className="hidden sm:flex mx-auto mb-6 h-16 w-16 items-center justify-center text-accent-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                  </svg>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-4 mobile-text-wrap">
                  Legal & Regulatory
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-200 leading-relaxed mobile-text-wrap">
                  Top-tier legal partners specializing in financial services, digital assets, and cross-border compliance.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-center p-4 sm:p-6">
                {/* Mobile: Smaller icon */}
                <div className="block sm:hidden mx-auto mb-4 flex h-12 w-12 items-center justify-center text-accent-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                
                {/* Desktop: Full size icon */}
                <div className="hidden sm:flex mx-auto mb-6 h-16 w-16 items-center justify-center text-accent-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-4 mobile-text-wrap">
                  Technology & Security
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-200 leading-relaxed mobile-text-wrap">
                  Leading technology partners for blockchain infrastructure, security audits, and digital asset custody solutions.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
                {/* Mobile: Smaller icon */}
                <div className="block sm:hidden mx-auto mb-4 flex h-12 w-12 items-center justify-center text-accent-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                
                {/* Desktop: Full size icon */}
                <div className="hidden sm:flex mx-auto mb-6 h-16 w-16 items-center justify-center text-accent-400">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-4 mobile-text-wrap">
                  Capital & Markets
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-200 leading-relaxed mobile-text-wrap">
                  Institutional capital partners, market makers, and liquidity providers across traditional and digital asset markets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 sm:py-16 lg:py-24">
        <div className="mobile-container text-center">
          <Reveal>
            <div>
              {/* Mobile: Compact CTA */}
              <div className="block sm:hidden">
                <h2 className="text-xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  Ready to Partner With Alpha?
                </h2>
                <p className="text-sm text-neutral-600 mb-6 mobile-text-wrap">
                  Whether you're seeking institutional advisory or exploring co-investment opportunities, we're here to help.
                </p>
                <div className="space-y-3">
                  <CTAButton href="/contact" variant="outline" className="w-full py-3 text-sm">
                    Start a Conversation
                  </CTAButton>
                  <CTAButton href="/advisory" variant="outline" className="w-full py-3 text-sm">
                    Explore Our Services
                  </CTAButton>
                </div>
              </div>
              
              {/* Desktop: Full CTA */}
              <div className="hidden sm:block">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  Ready to Partner With Alpha?
                </h2>
                <p className="text-base md:text-lg lg:text-xl text-neutral-600 mb-8 lg:mb-10 max-w-3xl mx-auto">
                  Whether you're seeking institutional advisory, exploring co-investment 
                  opportunities, or need digital asset assurance, we're here to help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/contact" variant="outline" size="lg">
                    Start a Conversation
                  </CTAButton>
                  <CTAButton href="/advisory" variant="outline" size="lg">
                    Explore Our Services
                  </CTAButton>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
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
            <div className="relative p-6 sm:p-8 pb-4 sm:pb-6 text-center bg-gradient-to-b from-primary-800 to-primary-900 rounded-t-3xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Large Profile Photo */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4 sm:mb-6">
                <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-300 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-sm sm:text-base text-neutral-500 font-medium">Photo</div>
                </div>
              </div>
              
              {/* Name and Role */}
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 leading-tight mobile-text-wrap">
                {selectedLeader.name}
              </h2>
              
              <div className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-accent-500 text-primary-900 text-xs sm:text-sm font-medium rounded-full mb-4 sm:mb-6">
                {selectedLeader.role}
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 sm:p-8 pt-4 sm:pt-6">
              {/* Full Bio */}
              <div className="mb-6 sm:mb-8">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">About</h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mobile-text-wrap">
                  {selectedLeader.bio}
                </p>
              </div>
              
              {/* LinkedIn Link */}
              <div className="flex justify-center">
                <a
                  href={selectedLeader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-3 bg-[#0077B5] text-white font-medium rounded-xl hover:bg-[#005582] transition-colors duration-200 shadow-lg text-sm sm:text-base"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                  <span className="hidden sm:inline">Connect on LinkedIn</span>
                  <span className="sm:hidden">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
