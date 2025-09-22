import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import { LogoStrip } from '@/components/LogoStrip'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Strategic Partners & Ecosystem',
  description: 'Our ecosystem multiplies outcomes across legal, technical, venture, and compliance leaders including Kinetic, OKX, The Anomaly Network, NeosLegal, and Chainforce.tech.',
}

const partners = [
  {
    name: 'Kinetic',
    category: 'Infrastructure & Operations',
    description: 'Leading digital asset infrastructure provider specializing in institutional-grade custody, trading, and operational solutions.',
    logo: '/logos/kinetic.svg',
    website: 'https://kinetic.com',
    capabilities: [
      'Digital asset custody and security',
      'Institutional trading infrastructure',
      'Operational risk management',
      'Regulatory compliance systems'
    ]
  },
  {
    name: 'OKX',
    category: 'Exchange & Liquidity',
    description: 'Global digital asset exchange providing institutional liquidity, custody services, and advanced trading solutions.',
    logo: '/logos/okx.svg',
    website: 'https://okx.com',
    capabilities: [
      'Institutional trading and liquidity',
      'Prime brokerage services',
      'Custody and asset management',
      'Market making and derivatives'
    ]
  },
  {
    name: 'The Anomaly Network',
    category: 'Strategic Intelligence',
    description: 'Strategic intelligence and market research firm specializing in emerging technology trends and investment opportunities.',
    logo: '/logos/anomaly.svg',
    website: 'https://anomaly.network',
    capabilities: [
      'Market intelligence and research',
      'Trend analysis and forecasting',
      'Strategic advisory services',
      'Investment opportunity identification'
    ]
  },
  {
    name: 'NeosLegal',
    category: 'Legal & Regulatory',
    description: 'Specialized legal firm focused on digital assets, financial services regulation, and cross-border compliance frameworks.',
    logo: '/logos/neos.svg',
    website: 'https://neoslegal.com',
    capabilities: [
      'Digital asset regulatory compliance',
      'Financial services law',
      'Cross-border legal structures',
      'Regulatory strategy and advocacy'
    ]
  },
  {
    name: 'Chainforce.tech',
    category: 'Technical Security',
    description: 'Blockchain security and technical due diligence firm providing smart contract audits and infrastructure assessments.',
    logo: '/logos/chainforce.svg',
    website: 'https://chainforce.tech',
    capabilities: [
      'Smart contract security audits',
      'Blockchain infrastructure assessment',
      'Technical due diligence',
      'Security monitoring and response'
    ]
  },
]

const partnerLogos = partners.map(partner => ({
  name: partner.name,
  src: partner.logo,
  width: 120,
  height: 40
}))

const ecosystemBenefits = [
  {
    title: 'Integrated Solutions',
    description: 'Seamless coordination across legal, technical, and operational partners for comprehensive service delivery.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
      </svg>
    )
  },
  {
    title: 'Accelerated Outcomes',
    description: 'Faster project delivery through established relationships and proven collaboration frameworks.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    title: 'Risk Mitigation',
    description: 'Reduced execution risk through vetted partners with proven track records in institutional environments.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
]

export default function PartnersPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl mb-6">
              Strategic <span className="text-accent-600">Ecosystem</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-neutral-600 leading-8 mb-10">
              Our ecosystem multiplies outcomes across legal, technical, venture, 
              and compliance leaders—delivering integrated excellence.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="outline" size="lg">
                Join Our Ecosystem
              </CTAButton>
              <CTAButton href="/advisory" variant="outline" size="lg">
                Explore Our Services
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Partner Logos */}
      <Section background="muted">
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-neutral-700">
            Trusted by industry leaders
          </p>
        </div>
        <LogoStrip logos={partnerLogos} />
      </Section>

      {/* Ecosystem Benefits */}
      <Section
        eyebrow="Ecosystem Advantage"
        title="Multiplied Outcomes"
        description="Our integrated partner network delivers advantages that extend far beyond traditional service provider relationships."
      >
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {ecosystemBenefits.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 100}>
              <div className="text-center bg-white rounded-xl shadow-sm border border-neutral-200 p-8 hover:shadow-lg transition-shadow">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-primary-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partner Profiles */}
      <Section
        background="muted"
        eyebrow="Partner Profiles"
        title="Best-in-Class Capabilities"
        description="Each partner brings specialized expertise and proven track records in their respective domains."
      >
        <div className="space-y-12">
          {partners.map((partner, index) => (
            <Reveal key={partner.name} delay={index * 100}>
              <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 p-8">
                  <div className="lg:col-span-1">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center mr-4">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          width={48}
                          height={24}
                          className="max-w-full max-h-full"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900">
                          {partner.name}
                        </h3>
                        <p className="text-accent-600 font-medium">
                          {partner.category}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-primary-900 mb-4">
                      Core Capabilities
                    </h4>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {partner.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start">
                          <div className="flex-shrink-0 mt-1">
                            <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="ml-3 text-neutral-600">
                            {capability}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partnership Model */}
      <Section
        eyebrow="Partnership Model"
        title="Collaborative Excellence"
        description="Our partnership approach ensures seamless integration and optimal outcomes for every client engagement."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                Integrated Service Delivery
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Rather than working with multiple disconnected service providers, 
                our clients benefit from a coordinated ecosystem where each partner 
                understands their role in delivering comprehensive solutions.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-400 text-primary-900 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">
                      Unified Project Management
                    </h4>
                    <p className="text-neutral-600">
                      Single point of accountability with coordinated delivery across all partners.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-400 text-primary-900 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">
                      Seamless Communication
                    </h4>
                    <p className="text-neutral-600">
                      Established protocols ensure efficient information flow and decision-making.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-accent-400 text-primary-900 rounded-full flex items-center justify-center text-sm font-semibold mr-4">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-2">
                      Quality Assurance
                    </h4>
                    <p className="text-neutral-600">
                      Consistent standards and methodologies across all partner deliverables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="relative">
              <Image
                src="/media/partnership-model-placeholder.jpg"
                alt="Partnership model illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Join Ecosystem */}
      <Section background="primary">
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-white mb-6">
              Become Part of Our Ecosystem
            </h2>
            <p className="text-xl text-neutral-200 mb-10 max-w-3xl mx-auto">
              We're always looking for exceptional partners who share our commitment 
              to institutional excellence and innovative solutions.
            </p>
            
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Legal & Regulatory
                </h3>
                <p className="text-neutral-200 text-sm">
                  Specialized expertise in digital assets and financial services regulation
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Technical & Security
                </h3>
                <p className="text-neutral-200 text-sm">
                  Blockchain infrastructure, security audits, and technical due diligence
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Capital & Markets
                </h3>
                <p className="text-neutral-200 text-sm">
                  Institutional capital, market making, and liquidity provision
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="outline" size="lg">
                Join Our Ecosystem
              </CTAButton>
              <CTAButton href="/about" variant="outline" size="lg">
                Learn About Alpha
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
