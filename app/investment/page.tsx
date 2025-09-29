import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { ScrollRevealChart } from '@/components/ScrollRevealChart'
import { CTAButton } from '@/components/CTAButton'
import { BarChart } from '@/components/BarChart'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Strategic Infrastructure Investments',
  description: 'Research-driven infrastructure investments across transformative technology sectors where extensive analysis meets strategic opportunity.',
}

const investmentThesis = [
  {
    title: 'Deep Infrastructure Analysis',
    description: 'We conduct extensive research and analysis on critical infrastructure across AI, quantum computing, biotechnology, and sustainable energy sectors.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    title: 'Research-Driven Investment Decisions',
    description: 'Our investment decisions are backed by comprehensive research thesis and strategic analysis of transformative technology infrastructure.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
      </svg>
    )
  },
  {
    title: 'Strategic Infrastructure Focus',
    description: 'We target critical infrastructure investments that enable the next generation of technological advancement and institutional adoption.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    )
  },
]

const selectionCriteria = [
  {
    title: 'Infrastructure Criticality',
    description: 'We evaluate how essential the infrastructure is to enabling next-generation technological advancement and institutional adoption.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313L16.5 7.5m0 2.25l2.25 1.313L21 9.75m-2.25 4.5L16.5 12.75l-2.25 1.313M12 15.75l-2.25-1.313L7.5 15.75m2.25-4.5L7.5 12.75l2.25-1.313M21 7.5V18a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18V7.5m18 0V3.75A2.25 2.25 0 0018.75 1.5H5.25A2.25 2.25 0 003 3.75V7.5m0 0l2.25 1.313L7.5 7.5l2.25 1.313L12 7.5l2.25 1.313L16.5 7.5l2.25-1.313L21 7.5" />
      </svg>
    )
  },
  {
    title: 'Technology Maturity & Scalability',
    description: 'Assessment of technical readiness, scalability potential, and ability to support widespread institutional deployment.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
  {
    title: 'Market Positioning & Competitive Moats',
    description: 'Analysis of competitive landscape, defensibility, and long-term strategic positioning within the infrastructure ecosystem.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
]

const infrastructureCategories = [
  {
    name: 'AI Infrastructure',
    description: 'Computing infrastructure, data processing systems, and machine learning platforms enabling artificial intelligence advancement.',
    allocation: '40%',
    ticketSize: '$5M - $50M',
    focus: 'Foundational AI compute and data infrastructure'
  },
  {
    name: 'Quantum Computing',
    description: 'Quantum hardware, software, and supporting infrastructure for next-generation computational capabilities.',
    allocation: '25%',
    ticketSize: '$10M - $100M',
    focus: 'Quantum systems and enabling technologies'
  },
  {
    name: 'Biotechnology Infrastructure',
    description: 'Laboratory automation, bioprocessing equipment, and computational biology platforms driving biotech innovation.',
    allocation: '20%',
    ticketSize: '$5M - $75M',
    focus: 'Biotech research and production infrastructure'
  },
  {
    name: 'Sustainable Energy Systems',
    description: 'Clean energy generation, storage systems, and grid infrastructure supporting the energy transition.',
    allocation: '15%',
    ticketSize: '$10M - $200M',
    focus: 'Next-generation energy infrastructure'
  },
]

export default function InvestmentPage() {
  return (
    <>
      {/* Hero Section with Padded Background Image */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-16 pt-4 pb-4">
        {/* Background Image with Padding */}
        <div className="absolute left-6 right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 top-4 bottom-4">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/media/investment-hero-bg.webp"
              alt="Investment opportunities background"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-primary-900/60"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mobile-container text-center">
          <Reveal>
            <div className="mb-8">
              {/* Mobile: Action-focused title */}
              <h1 className="block sm:hidden text-4xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-lg">
                Infrastructure-driven investments.
                <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                  Where deep research meets strategic infrastructure opportunities across transformative technology sectors.
                </span>
              </h1>
              
              {/* Desktop: Action-focused title */}
              <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                Infrastructure-driven investments.
                <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                  Where deep research meets strategic infrastructure opportunities across transformative technology sectors.
                </span>
              </h1>
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* Investment Approach */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  Research-Driven Infrastructure Investing
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Our investment approach combines deep technical analysis with comprehensive market research to identify critical infrastructure opportunities across transformative technology sectors.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Through extensive due diligence and strategic analysis, we target infrastructure investments that enable the next generation of technological advancement and institutional adoption.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/investment-approach.webp"
                      alt="Professional investment consultation"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Investment Focus Areas - Horizontal Layout */}
      <Section className="py-24 lg:py-32" background="muted">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                Investment Focus
              </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Our Infrastructure Investment Approach
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  We deploy capital in critical infrastructure where extensive research reveals strategic opportunities and transformative potential.
                </p>
            </div>
          </Reveal>

          {/* Horizontal Timeline Layout */}
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-accent-200 transform -translate-y-1/2"></div>
            
            <div className="grid gap-8 lg:gap-0 lg:grid-cols-3">
              {investmentThesis.map((thesis, index) => (
                <Reveal key={thesis.title} delay={index * 200}>
                  <div className="relative lg:px-8">
                    {/* Icon Circle */}
                    <div className="relative z-10 w-20 h-20 bg-white border-4 border-accent-500 rounded-full flex items-center justify-center mx-auto mb-6 text-accent-600">
                      {thesis.icon}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                        {thesis.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed text-sm lg:text-base">
                        {thesis.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Stage Allocation */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Infrastructure Focus
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Strategic Infrastructure Allocation
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our research-driven allocation strategy targets critical infrastructure across transformative technology sectors.
                </p>
              </div>
            </Reveal>
          </div>

          <ScrollRevealChart
            leftContent={null}
            rightContent={
              <BarChart className="max-w-lg mx-auto" />
            }
            leftItems={infrastructureCategories.map(category => ({
              title: category.name,
              description: category.description,
              ticketSize: category.ticketSize,
              focus: category.focus
            }))}
          />
        </Container>
      </Section>

      {/* Selection Criteria - No Boxes */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Selection Criteria
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Infrastructure Evaluation Framework
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our infrastructure investment decisions are guided by rigorous analysis across criticality, technology maturity, and market positioning.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            {selectionCriteria.map((criteria, index) => (
              <Reveal key={criteria.title} delay={index * 150}>
                <div className="text-center">
                  {/* Icon - Centered above title */}
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 lg:w-24 lg:h-24 text-accent-600 flex items-center justify-center">
                      {criteria.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                    {criteria.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {criteria.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Portfolio Support */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/portfolio-support.webp"
                      alt="Professional portfolio support consultation"
                      fill
                      className="object-cover rounded-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  The Alpha Advantage
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Portfolio companies gain access to our institutional network of specialized partners across legal, technical, and regulatory domains. This ecosystem delivers competitive advantages that traditional capital providers cannot match.
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Regulatory strategy and compliance architecture
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Technical due diligence and security validation
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Institutional customer and strategic partner access
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Governance optimization and board-level advisory
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              Partner with Alpha Group
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our institutional network and access research-driven infrastructure investment opportunities across transformative technology sectors.
            </p>
            <div className="flex justify-center">
              <CTAButton href="/contact" variant="outline" size="lg" className="px-8 py-4">
                Start a Conversation
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
