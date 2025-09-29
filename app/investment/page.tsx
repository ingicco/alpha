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
  title: 'Venture & Co-Investment Opportunities',
  description: 'We co-invest across pre-IPO, secondary markets, and early-stage startups where conviction and ecosystem advantage align.',
}

const investmentThesis = [
  {
    title: 'Emerging Tech with Adoption Paths',
    description: 'We focus on technologies with clear paths to institutional and consumer adoption, particularly in fintech, digital assets, and enterprise infrastructure.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: 'Operator Support + Network Leverage',
    description: 'Our ecosystem provides portfolio companies with legal, technical, and regulatory support that accelerates growth and reduces execution risk.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    title: 'Disciplined Entry, Risk & Liquidity Views',
    description: 'We maintain strict discipline around valuation, risk assessment, and liquidity planning, ensuring sustainable returns across market cycles.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
]

const selectionCriteria = [
  {
    title: 'Team Execution',
    description: 'Proven leadership with domain expertise and track record of delivering on ambitious roadmaps.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.228a25.50 25.50 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
      </svg>
    )
  },
  {
    title: 'Milestones & Capital Efficiency',
    description: 'Clear path to value creation with efficient use of capital and measurable progress indicators.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.311-.06m0 0a5.96 5.96 0 001.5.058c.055-.172.099-.348.138-.427a12.443 12.443 0 01-.1.05c-.017-.099-.027-.2-.038-.306m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    )
  },
  {
    title: 'Governance & Reporting Readiness',
    description: 'Institutional-grade governance structures and reporting capabilities that scale with growth.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    )
  },
]

const stages = [
  {
    name: 'Pre-IPO',
    description: 'Late-stage companies preparing for public markets with proven business models and strong governance.',
    allocation: '40%',
    ticketSize: '$5M - $25M',
    focus: 'Market leaders with IPO readiness'
  },
  {
    name: 'Secondary',
    description: 'Liquidity opportunities in high-quality private companies through secondary market transactions.',
    allocation: '35%',
    ticketSize: '$2M - $15M',
    focus: 'Quality assets with liquidity events'
  },
  {
    name: 'Startups',
    description: 'Early-stage companies with breakthrough technology and exceptional founding teams.',
    allocation: '25%',
    ticketSize: '$500K - $5M',
    focus: 'Disruptive innovation with network fit'
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
                Deploying conviction capital.
                <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                  Where ecosystem advantage meets institutional discipline, backing tomorrow's market leaders today.
                </span>
              </h1>
              
              {/* Desktop: Action-focused title */}
              <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                Deploying conviction capital.
                <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                  Where ecosystem advantage meets institutional discipline, backing tomorrow's market leaders today.
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
                  Beyond Capital Deployment
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  We bring more than capital. Our institutional-grade advisory, regulatory expertise, and ecosystem connections accelerate portfolio company success across all stages of growth.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Through our curated network of legal, technical, and regulatory partners, we help portfolio companies navigate complex challenges while maintaining the highest standards of governance and compliance.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/investment-approach-placeholder.jpg"
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
                Where We Deploy Capital
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                We focus on companies where our ecosystem advantage can accelerate growth and reduce execution risk.
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
                  Investment Stages
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Portfolio Allocation
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our allocation strategy balances risk and return across different investment stages and market opportunities.
                </p>
              </div>
            </Reveal>
          </div>

          <ScrollRevealChart
            leftContent={null}
            rightContent={
              <BarChart className="max-w-lg mx-auto" />
            }
            leftItems={[
              {
                title: "Pre-IPO",
                description: "Late-stage companies preparing for public markets with proven business models and strong governance.",
                ticketSize: "$5M - $25M",
                focus: "Market leaders with IPO readiness"
              },
              {
                title: "Secondary", 
                description: "Liquidity opportunities in high-quality private companies through secondary market transactions.",
                ticketSize: "$2M - $15M",
                focus: "Quality assets with liquidity events"
              },
              {
                title: "Early Stage",
                description: "Early-stage companies with breakthrough technology and exceptional founding teams.",
                ticketSize: "$500K - $5M",
                focus: "Disruptive innovation with network fit"
              }
            ]}
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
                  What We Look For
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our investment decisions are guided by rigorous evaluation across team, execution, and governance dimensions.
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
                      src="/media/portfolio-support-placeholder.jpg"
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
              Ready to Co-Invest?
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join our institutional network and access high-conviction opportunities where our ecosystem advantage creates exceptional value.
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
