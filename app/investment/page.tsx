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
    description: 'Proven leadership with domain expertise and track record of delivering on ambitious roadmaps.'
  },
  {
    title: 'Milestones & Capital Efficiency',
    description: 'Clear path to value creation with efficient use of capital and measurable progress indicators.'
  },
  {
    title: 'Governance & Reporting Readiness',
    description: 'Institutional-grade governance structures and reporting capabilities that scale with growth.'
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
      {/* Hero Section with Full Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
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

        {/* Hero Content */}
        <div className="relative z-10 mobile-container text-center">
          <Reveal>
            <div className="mb-6">
              {/* Mobile: Proper sized title */}
              <h1 className="block sm:hidden text-3xl font-bold text-white mb-4 mobile-text-wrap drop-shadow-lg">
                Venture & Co-Investment
              </h1>
              
              {/* Desktop: Larger title with styling */}
              <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                Venture & <span className="text-accent-400">Co-Investment</span>
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mb-8">
              {/* Mobile: Shorter, clearer text */}
              <p className="block sm:hidden text-sm text-neutral-200 leading-relaxed mb-4 mobile-text-wrap drop-shadow">
                We co-invest across pre-IPO, secondary markets, and early-stage startups where conviction and ecosystem advantage align.
              </p>
              
              {/* Desktop: Full description */}
              <p className="hidden sm:block text-lg md:text-xl text-neutral-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto drop-shadow">
                We co-invest across pre-IPO, secondary markets, and early-stage startups where conviction and ecosystem advantage align.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div>
              {/* Mobile: Full width stacked buttons */}
              <div className="block sm:hidden space-y-3">
                <CTAButton href="/contact" variant="outline" className="w-full py-3 text-sm backdrop-blur-sm">
                  Co-Invest With Alpha
                </CTAButton>
                <CTAButton href="/advisory" variant="outline" className="w-full py-3 text-sm backdrop-blur-sm">
                  Advisory Services
                </CTAButton>
              </div>
              
              {/* Desktop: Side by side buttons */}
              <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-8 py-4 backdrop-blur-sm">
                  Co-Invest With Alpha
                </CTAButton>
                <CTAButton href="/advisory" variant="outline" size="lg" className="px-8 py-4 backdrop-blur-sm">
                  Advisory Services
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Investment Approach */}
      <Section background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Conviction-Driven Co-Investment
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                We don't just provide capital—we bring institutional-grade advisory, 
                regulatory expertise, and ecosystem connections that accelerate portfolio 
                company success. Our co-investment approach focuses on quality over quantity.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Through our network of legal, technical, and regulatory partners, we help 
                portfolio companies navigate complex challenges while maintaining the 
                highest standards of governance and compliance.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="relative">
              <Image
                src="/media/investment-approach-placeholder.jpg"
                alt="Investment approach illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Investment Thesis - Scroll Reveal */}
      <Section className="py-24 lg:py-32">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Investment Thesis
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Strategic Focus Areas
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Our investment philosophy centers on emerging technologies with clear adoption paths and strong ecosystem advantages.
                </p>
              </div>
            </Reveal>
          </div>

          <ScrollReveal
            leftContent={
              <div>
                <p className="text-3xl lg:text-4xl xl:text-5xl text-primary-900 leading-tight mb-10 font-light">
                  We focus on companies where our ecosystem advantage can accelerate growth and reduce execution risk.
                </p>
                
                <div className="space-y-5">
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Clear adoption pathways
                  </div>
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Network leverage
                  </div>
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Disciplined approach
                  </div>
                </div>
              </div>
            }
            rightItems={investmentThesis}
          />
        </Container>
      </Section>

      {/* Stage Allocation */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Portfolio Allocation
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Strategic Stage Distribution
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

      {/* Selection Criteria */}
      <Section
        background="muted"
        eyebrow="Selection Criteria"
        title="What We Look For"
        description="Our investment decisions are guided by rigorous evaluation across team, execution, and governance dimensions."
      >
        <div className="grid gap-8 md:grid-cols-3">
          {selectionCriteria.map((criteria, index) => (
            <Reveal key={criteria.title} delay={index * 100}>
              <div className="text-center bg-transparent p-8">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-accent-600">
                    {index + 1}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-primary-900 mb-4">
                  {criteria.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {criteria.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Portfolio Support */}
      <Section background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <Image
                src="/media/portfolio-support-placeholder.jpg"
                alt="Portfolio support illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Beyond Capital: Ecosystem Advantage
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Our portfolio companies benefit from our integrated ecosystem of legal, 
                technical, and regulatory partners. This network provides competitive 
                advantages that extend far beyond traditional venture capital.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Regulatory guidance and compliance framework development
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Technical due diligence and security audit coordination
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Institutional customer and partner introductions
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Governance structure optimization and board support
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Ready to Explore Co-Investment Opportunities?
            </h2>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Join our network of institutional co-investors and gain access to 
              high-quality opportunities across all stages of company growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="outline" size="lg">
                Co-Invest With Alpha
              </CTAButton>
              <CTAButton href="/partners" variant="outline" size="lg">
                Meet Our Network
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
