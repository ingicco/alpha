import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { HorizontalScrollReveal } from '@/components/HorizontalScrollReveal'
import { HorizontalCarousel } from '@/components/HorizontalCarousel'
import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Institutional Advisory Services',
  description: 'Institutional advisory redefined. We operate mandates across compliance, governance, treasury, risk, and digital asset strategy with trusted partners.',
}

const focusAreas = [
  {
    title: 'Regulatory Readiness',
    description: 'Comprehensive compliance frameworks aligned with global regulatory standards and emerging digital asset regulations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: 'Token Economics & Governance',
    description: 'Strategic design and implementation of token economic models, governance structures, and stakeholder alignment mechanisms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Risk, Controls & Reporting',
    description: 'Enterprise-grade risk management frameworks, internal controls design, and board-level reporting structures.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
  {
    title: 'Vendor Selection & Technical DD',
    description: 'Comprehensive vendor evaluation, technical due diligence, and partner selection across the digital asset ecosystem.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.611L5 14.5" />
      </svg>
    )
  },
  {
    title: 'Treasury Operations & Custody',
    description: 'Digital asset treasury management, custody solution evaluation, and operational framework implementation.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H6m-3.75 0h16.5m0 0v.375c0 .621-.504 1.125-1.125 1.125H18m3.75 0V6a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h.375m18.75-2.25h.375a1.125 1.125 0 001.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H21m0 2.25h.375c.621 0 1.125.504 1.125 1.125v.375M21 16.5v1.125c0 .621-.504 1.125-1.125 1.125h-.375M21 16.5h.375c.621 0 1.125-.504 1.125 1.125V18" />
      </svg>
    )
  },
]

const outcomes = [
  'Clear deliverables with defined success metrics',
  'Accountable timelines with milestone-based progress tracking',
  'Ongoing oversight and continuous improvement processes',
  'Board-ready documentation and reporting frameworks',
  'Regulatory compliance validation and audit preparation',
  'Stakeholder alignment and change management support'
]

export default function AdvisoryPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="mobile-container text-center">
          <Reveal>
            <div className="mb-6">
              {/* Mobile: Proper sized title */}
              <h1 className="block sm:hidden text-xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                Advisory Mandates, Redefined
              </h1>
              
              {/* Desktop: Larger title with styling */}
              <h1 className="hidden sm:block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 mb-4 sm:mb-6">
                Advisory Mandates, <span className="text-accent-600">Redefined</span>
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mb-6">
              {/* Mobile: Shorter, clearer text */}
              <p className="block sm:hidden text-sm text-neutral-600 leading-relaxed mb-4 mobile-text-wrap">
                We operate institutional mandates across compliance, governance, treasury, risk, and digital asset strategy.
              </p>
              
              {/* Desktop: Full description */}
              <p className="hidden sm:block text-base md:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                We operate institutional mandates across compliance, governance, treasury, risk, and digital asset strategy with our trusted network of legal and technical partners.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div>
              {/* Mobile: Full width stacked buttons */}
              <div className="block sm:hidden space-y-3">
                <CTAButton href="/contact" variant="outline" className="w-full py-3 text-sm">
                  Request a Mandate
                </CTAButton>
                <CTAButton href="/partners" variant="outline" className="w-full py-3 text-sm">
                  Meet Our Partners
                </CTAButton>
              </div>
              
              {/* Desktop: Side by side buttons */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-6 py-3">
                  Request a Mandate
                </CTAButton>
                <CTAButton href="/partners" variant="outline" size="lg" className="px-6 py-3">
                  Meet Our Partners
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="muted">
        <div className="mobile-container">
          {/* Mobile: Single column layout */}
          <div className="block lg:hidden space-y-8">
            <Reveal>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  Beyond Traditional Consulting
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4 mobile-text-wrap">
                  Traditional advisory falls short in the digital asset era. Organizations need partners who understand both institutional rigor and blockchain innovation.
                </p>
                <p className="text-sm text-neutral-600 leading-relaxed mobile-text-wrap">
                  Our approach combines deep institutional experience with cutting-edge digital asset expertise.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-neutral-400 font-medium">Advisory services</div>
                  <div className="text-xs text-neutral-500 mt-1">illustration</div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  Beyond Traditional Consulting
                </h2>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional advisory falls short in the digital asset era. Organizations need partners who understand both institutional rigor and blockchain innovation.
                </p>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  Our approach combines deep institutional experience with cutting-edge digital asset expertise, supported by a curated network of best-in-class partners.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="w-full h-80 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-neutral-400 font-medium">Advisory services</div>
                  <div className="text-xs text-neutral-500 mt-1">illustration</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Focus Areas
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Comprehensive Mandate Coverage
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  We operate across all critical areas of modern institutional finance, from traditional governance to digital asset innovation.
                </p>
              </div>
            </Reveal>
          </div>

          <ScrollReveal
            leftContent={
              <p className="text-3xl lg:text-4xl xl:text-5xl text-primary-900 leading-tight font-light">
                We operate across all critical areas of modern institutional finance, from traditional governance to digital asset innovation.
              </p>
            }
            rightItems={[
              {
                title: "Regulatory Readiness",
                description: "Comprehensive compliance frameworks aligned with global regulatory standards and emerging digital asset regulations."
              },
              {
                title: "Token Economics & Governance",
                description: "Strategic design and implementation of token economic models, governance structures, and stakeholder alignment mechanisms."
              },
              {
                title: "Risk, Controls & Reporting",
                description: "Enterprise-grade risk management frameworks, internal controls design, and board-level reporting structures."
              },
              {
                title: "Vendor Selection & Technical DD",
                description: "Comprehensive vendor evaluation, technical due diligence, and partner selection across the digital asset ecosystem."
              },
              {
                title: "Treasury Operations & Custody",
                description: "Digital asset treasury management, custody solution evaluation, and operational framework implementation."
              }
            ]}
          />
        </Container>
      </Section>

      {/* Specialized Advisory Subsections - Horizontal Carousel */}
      <HorizontalCarousel
        sections={[
          {
            id: 'tokenization',
            content: (
              <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 25% 25%, #1a3c5e 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>
                
                <div className="relative z-10 mobile-container max-w-6xl mx-auto px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Image - Left Side */}
                    <div className="order-2 lg:order-1 flex justify-center">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-700 hover:scale-105 relative overflow-hidden">
                        {/* Subtle inner pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
                        </div>
                        <div className="relative text-center">
                          <div className="text-lg text-primary-700 font-bold mb-2">Tokenization</div>
                          <div className="text-sm text-primary-500">Advisory Services</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Right Side */}
                    <div className="order-1 lg:order-2 space-y-5 px-4 lg:px-8">
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-3 leading-tight">
                          Tokenization Advisory
                        </h2>
                        <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                          End-to-end advisory on tokenization of real-world assets — from structuring funds and securities to designing compliant issuance frameworks.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Tokenization of Funds & Capital Markets
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Comprehensive fund structuring and capital market tokenization strategies for institutional asset classes.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Commodity & Real Estate Tokenization
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Specialized frameworks for tokenizing physical assets and real estate portfolios.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Lifecycle Structuring
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Complete lifecycle management from issuance through distribution to custody solutions.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'stablecoin',
            content: (
              <div className="w-full h-full bg-primary-900 flex items-center justify-center relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 75% 75%, #c8b572 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>
                
                <div className="relative z-10 mobile-container max-w-6xl mx-auto px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Content - Left Side */}
                    <div className="order-1 space-y-5 px-4 lg:px-8">
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                          Stablecoin & Yield Strategy
                        </h2>
                        <p className="text-sm lg:text-base text-neutral-200 leading-relaxed">
                          Helping leading stablecoin and yield projects achieve institutional readiness — advising across issuance, risk management, and scaling mandates.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">
                            Institutional Onboarding
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Comprehensive onboarding frameworks for institutional adoption and compliance readiness.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">
                            Treasury Yield Solutions
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Strategic treasury management and yield optimization for stablecoin reserves and operations.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-white mb-1">
                            Regulatory Assurance
                          </h3>
                          <p className="text-xs text-neutral-300 leading-relaxed">
                            Comprehensive regulatory compliance frameworks and ongoing assurance for global markets.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Image - Right Side */}
                    <div className="order-2 flex justify-center">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-500/30 to-primary-700 rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-700 hover:scale-105 relative overflow-hidden border border-white/10">
                        {/* Subtle inner pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-accent-500 to-white"></div>
                        </div>
                        <div className="relative text-center">
                          <div className="text-lg text-accent-300 font-bold mb-2">Stablecoin Strategy</div>
                          <div className="text-sm text-accent-200">Advisory Services</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: 'corporate-finance',
            content: (
              <div className="w-full h-full bg-white flex items-center justify-center relative overflow-hidden">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #1a3c5e 2px, transparent 2px)',
                    backgroundSize: '60px 60px'
                  }}></div>
                </div>
                
                <div className="relative z-10 mobile-container max-w-6xl mx-auto px-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
                    {/* Image - Left Side */}
                    <div className="order-2 lg:order-1 flex justify-center">
                      <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-accent-100 to-primary-100 rounded-3xl shadow-2xl flex items-center justify-center transform transition-all duration-700 hover:scale-105 relative overflow-hidden">
                        {/* Subtle inner pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="w-full h-full bg-gradient-to-br from-accent-500 to-primary-500"></div>
                        </div>
                        <div className="relative text-center">
                          <div className="text-lg text-primary-700 font-bold mb-2">Corporate Finance</div>
                          <div className="text-sm text-primary-500">Advisory Services</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content - Right Side */}
                    <div className="order-1 lg:order-2 space-y-5 px-4 lg:px-8">
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary-900 mb-3 leading-tight">
                          Digital Corporate Finance
                        </h2>
                        <p className="text-sm lg:text-base text-neutral-600 leading-relaxed">
                          Structuring and executing complex cross-border corporate finance transactions — including Reverse Mergers, Reverse Swaps, and PIPE deals.
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Deal Structuring and Execution
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Expert structuring and execution of complex M&A, reverse merger, and PIPE transactions.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Distribution and Syndication Support
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Comprehensive distribution networks and syndication support for successful transaction completion.
                          </p>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold text-primary-900 mb-1">
                            Strategic Alignment with Public Markets
                          </h3>
                          <p className="text-xs text-neutral-600 leading-relaxed">
                            Strategic positioning and alignment for successful public market listings and compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        ]}
      />

      {/* Outcomes Section */}
      <Section
        background="primary"
        eyebrow="Outcomes"
        title="Measurable Results"
        description="Every mandate is designed to deliver tangible outcomes that drive organizational success and regulatory confidence."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                What You Can Expect
              </h3>
              <ul className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-200 leading-relaxed">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="bg-primary-800/50 backdrop-blur-sm rounded-xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-2">12-16</div>
                  <div className="text-white text-sm">Weeks Average</div>
                  <div className="text-neutral-300 text-xs">Implementation</div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent-400 mb-2">100%</div>
                  <div className="text-white text-sm">Compliance</div>
                  <div className="text-neutral-300 text-xs">Validation</div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-neutral-200 text-sm leading-relaxed">
                  Every mandate follows our proven methodology: discovery, framework design, 
                  implementation, and ongoing oversight with continuous improvement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Partner Network */}
      <Section
        eyebrow="Partner Network"
        title="Best-in-Class Ecosystem"
        description="We leverage strategic partnerships with leading legal, technical, and regulatory experts to deliver comprehensive solutions."
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Reveal>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/logos/neos.svg"
                  alt="NeosLegal"
                  width={48}
                  height={24}
                  className="grayscale"
                />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">NeosLegal</h4>
              <p className="text-sm text-neutral-600">Legal & Regulatory Excellence</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/logos/chainforce.svg"
                  alt="Chainforce.tech"
                  width={48}
                  height={24}
                  className="grayscale"
                />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Chainforce.tech</h4>
              <p className="text-sm text-neutral-600">Technical Security & Audits</p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/logos/kinetic.svg"
                  alt="Kinetic"
                  width={48}
                  height={24}
                  className="grayscale"
                />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">Kinetic</h4>
              <p className="text-sm text-neutral-600">Infrastructure & Operations</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center">
                <Image
                  src="/logos/anomaly.svg"
                  alt="The Anomaly Network"
                  width={48}
                  height={24}
                  className="grayscale"
                />
              </div>
              <h4 className="font-semibold text-primary-900 mb-2">The Anomaly Network</h4>
              <p className="text-sm text-neutral-600">Strategic Intelligence</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <div className="px-6 sm:px-8">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-primary-900 mb-4 sm:mb-6">
                Ready to Transform Your Advisory Approach?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how our integrated mandate approach can deliver the outcomes 
                your organization needs in today's complex regulatory environment.
              </p>
              <div className="flex flex-col gap-3 justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-4 py-3 w-full max-w-xs mx-auto text-sm font-medium">
                  Request a Mandate
                </CTAButton>
                <CTAButton href="/insights" variant="outline" size="lg" className="px-4 py-3 w-full max-w-xs mx-auto text-sm font-medium">
                  Read Our Insights
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
