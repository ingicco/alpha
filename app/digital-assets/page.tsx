import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Digital Asset Assurance & Compliance',
  description: 'Institutional-grade advisory and assurance for blockchain initiatives—controls, reporting, and oversight aligned with global standards.',
}

const services = [
  {
    title: 'Compliance Frameworks',
    description: 'Comprehensive regulatory compliance frameworks aligned with global standards including DFSA, VARA, and emerging digital asset regulations.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    title: 'Smart Contract Risk Review',
    description: 'Comprehensive smart contract audits and risk assessments through our technical partners, ensuring security and compliance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    title: 'On/Off-Ramp & Custody Evaluation',
    description: 'Institutional-grade evaluation and selection of digital asset custody solutions, exchanges, and liquidity providers.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H6m-3.75 0h16.5m0 0v.375c0 .621-.504 1.125-1.125 1.125H18m3.75 0V6a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 00-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h.375m18.75-2.25h.375a1.125 1.125 0 001.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H21m0 2.25h.375c.621 0 1.125.504 1.125 1.125v.375M21 16.5v1.125c0 .621-.504 1.125-1.125 1.125h-.375M21 16.5h.375c.621 0 1.125-.504 1.125 1.125V18" />
      </svg>
    )
  },
  {
    title: 'Treasury Controls & Board Packs',
    description: 'Digital asset treasury management frameworks, internal controls design, and board-level reporting structures.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    )
  },
]

const regulatoryFrameworks = [
  {
    name: 'DFSA (Dubai)',
    description: 'Dubai Financial Services Authority digital asset regulations and compliance requirements.',
    status: 'Active Framework'
  },
  {
    name: 'VARA (Dubai)',
    description: 'Virtual Assets Regulatory Authority comprehensive digital asset oversight.',
    status: 'Active Framework'
  },
  {
    name: 'MiCA (EU)',
    description: 'Markets in Crypto-Assets regulation for European digital asset operations.',
    status: 'Implementation Ready'
  },
  {
    name: 'SEC (US)',
    description: 'Securities and Exchange Commission digital asset guidance and compliance.',
    status: 'Evolving Framework'
  },
]

export default function DigitalAssetsPage() {
  return (
    <>
      {/* Hero Section with Padded Background Image */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-16 pt-4 pb-4">
        {/* Background Image with Padding */}
        <div className="absolute left-6 right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 top-4 bottom-4">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/media/digital-assets-hero-bg.webp"
              alt="Digital assets and blockchain background"
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
            <div className="mb-6">
              {/* Mobile: Action-focused title */}
              <h1 className="block sm:hidden text-4xl font-bold text-white mb-4 mobile-text-wrap drop-shadow-lg leading-tight">
                Institutional blockchain expertise.
                <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                  Where digital innovation meets institutional compliance and security standards.
                </span>
              </h1>
              
              {/* Desktop: Action-focused title */}
              <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Institutional blockchain expertise.
                <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                  Where digital innovation meets institutional compliance and security standards.
                </span>
              </h1>
            </div>
          </Reveal>
          
        </div>
      </section>

      {/* Introduction */}
      <Section background="muted">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  Institutional Blockchain Governance
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Digital assets require a fundamentally different approach to institutional governance. Legacy compliance frameworks cannot address the unique challenges of blockchain technology, smart contracts, and decentralized protocols.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our methodology combines institutional rigor with deep blockchain expertise, delivering governance frameworks that embrace innovation while maintaining the highest standards of security and compliance.
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/digital-compliance-placeholder.jpg"
                      alt="Professional blockchain compliance consultation"
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

      {/* Services - Clean Grid Layout */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Core Services
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Digital Asset Excellence
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive advisory services that bridge traditional institutional standards with cutting-edge blockchain innovation.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 150}>
                <div className="text-left p-8 lg:p-10">
                  {/* Icon - No Box */}
                  <div className="mb-6">
                    <div className="w-16 h-16 flex items-center justify-center text-accent-600">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-neutral-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Regulatory Landscape - Icons Only */}
      <Section background="primary">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-400 font-semibold mb-4">
                  Regulatory Landscape
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Global Compliance Alignment
                </h2>
                <p className="text-lg text-neutral-200 leading-relaxed max-w-3xl mx-auto">
                  We stay ahead of evolving regulatory frameworks to ensure your digital asset operations remain compliant across all jurisdictions.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
            {regulatoryFrameworks.map((framework, index) => (
              <Reveal key={framework.name} delay={index * 100}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-2xl lg:text-3xl">
                      {framework.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Partnership */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Technical Excellence
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Best-in-Class Technical Partners
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  We leverage partnerships with leading blockchain security and infrastructure providers to deliver comprehensive technical assurance.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/technical-partners-placeholder.jpg"
                      alt="Professional blockchain technical partnership"
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
                <h3 className="text-3xl lg:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                  Technical Security Excellence
                </h3>
                <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                  Our partnership network provides access to world-class blockchain security expertise, comprehensive smart contract auditing, and institutional-grade technical due diligence capabilities.
                </p>
                
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Smart contract security audits and vulnerability assessments
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Blockchain infrastructure security and architecture review
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Continuous monitoring and incident response protocols
                    </span>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-5 h-5 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-neutral-600 font-medium">
                      Compliance-focused technical documentation and reporting
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Use Cases - Clean No-Box Design */}
      <Section background="muted">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Application Areas
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Institutional Applications
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  Comprehensive advisory across all institutional digital asset implementations and strategies.
                </p>
              </div>
            </Reveal>
          </div>
          
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            <Reveal>
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                  Corporate Treasury
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Digital asset treasury strategies, custody solutions, and risk management frameworks for corporate balance sheet allocation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                  DeFi Integration
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Institutional-grade DeFi participation frameworks, protocol evaluation, and risk assessment for yield generation strategies.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="text-center">
                <h3 className="text-xl lg:text-2xl font-bold text-primary-900 mb-4 leading-tight">
                  Tokenization Projects
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  End-to-end tokenization advisory from legal structure to technical implementation and ongoing compliance management.
                </p>
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
              Ready for Institutional Blockchain?
            </h2>
            <p className="text-lg lg:text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our digital asset expertise can help your organization embrace blockchain innovation while maintaining the highest institutional standards.
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
