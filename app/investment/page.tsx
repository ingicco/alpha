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
  title: 'Investment Strategy - AGI³',
  description: 'We back technologies that define the next decade — not as financiers, but as founders of future markets. Investing where the world is heading, not where it stands.',
}

const transformativeLayers = [
  {
    title: 'Financial Infrastructure',
    description: 'The foundational systems that enable next-generation financial services and institutional adoption.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    title: 'Tokenized Assets & Liquidity Rails',
    description: 'Infrastructure enabling the tokenization of real-world assets and programmable liquidity systems.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
  {
    title: 'Artificial Intelligence & Data Networks',
    description: 'AI infrastructure and data systems that power intelligent financial services and decision-making.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-16.5 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: 'RegTech & Institutional On-Ramps',
    description: 'Regulatory technology and compliance infrastructure that enables institutional participation.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0z" />
      </svg>
    )
  },
]

const focusAreas = [
  {
    title: 'Regulation as Value',
    description: 'We believe compliant ecosystems win.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: 'Tokenization as Access',
    description: 'The world\'s assets will be represented on-chain.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
  {
    title: 'Liquidity as Power',
    description: 'Transparent, programmable capital will fuel scale.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
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
                Investment Strategy
                <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                  We back technologies that define the next decade — not as financiers, but as founders of future markets.
                </span>
              </h1>
              
              {/* Desktop: Action-focused title */}
              <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                Investment Strategy
                <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                  We back technologies that define the next decade — not as financiers, but as founders of future markets.
                </span>
              </h1>
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* Our Approach */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  Our Approach
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  We back technologies that define the next decade — not as financiers, but as founders of future markets.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  AGI³ invests across key transformative layers that are reshaping the future of finance and technology.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">🎯</div>
                        <p className="text-primary-900 font-semibold">Our Approach</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Transformative Layers */}
      <Section className="py-24 lg:py-32" background="white">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                Investment Layers
              </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Key Transformative Layers
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  AGI³ invests across key transformative layers that are reshaping the future of finance and technology.
                </p>
            </div>
          </Reveal>

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
            {transformativeLayers.map((layer, index) => (
              <Reveal key={layer.title} delay={index * 150}>
                <div className="text-center group">
                  {/* Icon - Clean, no background */}
                  <div className="flex justify-center mb-8">
                    <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">
                      {layer.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-primary-900 mb-4 leading-tight">
                    {layer.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {layer.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Focus Areas */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Focus Areas
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Our Investment Philosophy
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Three core beliefs that guide our investment decisions and shape our approach to the future of finance.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Clean Philosophy Layout */}
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-16 lg:gap-20">
              {focusAreas.map((area, index) => (
                <Reveal key={area.title} delay={index * 150}>
                  <div className="text-center">
                    {/* Large Number Badge */}
                    <div className="flex justify-center mb-8">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg">
                        <span className="text-2xl font-bold text-white">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                      {area.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-xl text-neutral-600 leading-relaxed font-medium max-w-2xl mx-auto">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Special Situations & Co-Investments */}
      <Section background="white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  Special Situations & Co-Investments
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  We co-invest in ventures that align with our thesis — from tokenization startups to public-market entry plays and digital corporate finance opportunities.
                </p>
                <p className="text-xl text-primary-900 font-semibold italic leading-relaxed">
                  We invest where the world is heading, not where it stands.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-accent-100 to-primary-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="text-6xl mb-4">🚀</div>
                        <p className="text-primary-900 font-semibold">Special Situations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
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
                  The AGI³ Advantage
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
              Partner with AGI³
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our institutional network and access investment opportunities in the technologies that will define tomorrow.
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
