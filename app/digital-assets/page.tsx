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
      {/* Hero Section */}
      <Section className="pt-24">
        <div className="text-center max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-primary-900 sm:text-5xl lg:text-6xl mb-6">
              Digital Asset <span className="text-accent-600">Assurance</span>
            </h1>
          </Reveal>
          
          <Reveal delay={200}>
            <p className="text-xl text-neutral-600 leading-8 mb-10">
              Institutional-grade advisory and assurance for blockchain initiatives—controls, 
              reporting, and oversight aligned with global standards.
            </p>
          </Reveal>
          
          <Reveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="outline" size="lg">
                Explore Digital Asset Advisory
              </CTAButton>
              <CTAButton href="/partners" variant="outline" size="lg">
                Meet Our Technical Partners
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Introduction */}
      <Section background="muted">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-primary-900 mb-6">
                Future-Oriented, Compliance-Led
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                The digital asset landscape demands a new approach to institutional oversight. 
                Traditional compliance frameworks fall short when applied to blockchain technologies, 
                smart contracts, and decentralized systems.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                We bridge this gap by combining deep regulatory expertise with cutting-edge 
                technical knowledge, delivering assurance frameworks that meet institutional 
                standards while embracing digital innovation.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="relative">
              <Image
                src="/media/digital-compliance-placeholder.jpg"
                alt="Digital asset compliance illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Services */}
      <Section background="white">
        <Container>
          <div className="text-center mb-16">
            <Reveal>
              <div>
                <p className="text-sm uppercase tracking-wider text-accent-600 font-semibold mb-4">
                  Core Services
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Comprehensive Digital Asset Advisory
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  End-to-end advisory services covering all aspects of institutional digital asset operations and compliance.
                </p>
              </div>
            </Reveal>
          </div>

          <ScrollReveal
            leftContent={
              <div>
                <h3 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-primary-900 leading-tight mb-10">
                  Institutional-Grade Digital Asset Solutions
                </h3>
                
                <div className="space-y-6">
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Regulatory compliance frameworks
                  </div>
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Technical risk assessment
                  </div>
                  <div className="text-xl lg:text-2xl xl:text-3xl text-neutral-600 font-light">
                    Treasury & custody solutions
                  </div>
                </div>
              </div>
            }
            rightItems={[
              {
                title: "Compliance Frameworks",
                description: "Comprehensive regulatory compliance frameworks aligned with global standards including DFSA, VARA, and emerging digital asset regulations."
              },
              {
                title: "Smart Contract Risk Review",
                description: "Comprehensive smart contract audits and risk assessments through our technical partners, ensuring security and compliance."
              },
              {
                title: "On/Off-Ramp & Custody Evaluation",
                description: "Institutional-grade evaluation and selection of digital asset custody solutions, exchanges, and liquidity providers."
              },
              {
                title: "Treasury Controls & Board Packs",
                description: "Digital asset treasury management frameworks, internal controls design, and board-level reporting structures."
              }
            ]}
          />
        </Container>
      </Section>

      {/* Regulatory Landscape */}
      <Section
        background="primary"
        eyebrow="Regulatory Landscape"
        title="Global Compliance Alignment"
        description="We stay ahead of evolving regulatory frameworks to ensure your digital asset operations remain compliant across all jurisdictions."
      >
        <div className="flex items-center justify-center gap-12 lg:gap-16 flex-wrap">
          {regulatoryFrameworks.map((framework, index) => (
            <Reveal key={framework.name} delay={index * 100}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <span className="text-primary-600 font-bold text-lg">
                      {framework.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <h3 className="text-white font-semibold text-sm">
                  {framework.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-primary-800 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">
              DFSA/VARA Alignment Note
            </h3>
            <p className="text-neutral-200 leading-relaxed">
              Our digital asset advisory services are designed to align with Dubai's 
              comprehensive regulatory framework. Specific DFSA and VARA compliance 
              documentation and alignment notes are provided as part of our advisory mandates.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Partnership */}
      <Section
        eyebrow="Technical Excellence"
        title="Best-in-Class Technical Partners"
        description="We leverage partnerships with leading blockchain security and infrastructure providers to deliver comprehensive technical assurance."
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <Image
                src="/media/technical-partners-placeholder.jpg"
                alt="Technical partnership illustration"
                width={600}
                height={400}
                className="rounded-xl shadow-lg"
              />
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div>
              <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                Chainforce.tech Partnership
              </h3>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                Our strategic partnership with Chainforce.tech provides access to 
                world-class blockchain security expertise, smart contract auditing, 
                and technical due diligence capabilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Smart contract security audits and vulnerability assessments
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Blockchain infrastructure security and architecture review
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Ongoing monitoring and incident response capabilities
                  </span>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="ml-3 text-neutral-600">
                    Compliance-focused technical documentation and reporting
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Use Cases */}
      <Section background="muted">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Digital Asset Use Cases
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              From treasury management to DeFi integration, we provide assurance 
              across all institutional digital asset applications.
            </p>
          </Reveal>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Corporate Treasury
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Digital asset treasury strategies, custody solutions, and risk management 
                frameworks for corporate balance sheet allocation.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                DeFi Integration
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Institutional-grade DeFi participation frameworks, protocol evaluation, 
                and risk assessment for yield generation strategies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Tokenization Projects
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                End-to-end tokenization advisory from legal structure to technical 
                implementation and ongoing compliance management.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Ready to Navigate Digital Asset Compliance?
            </h2>
            <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto">
              Let's discuss how our digital asset assurance framework can help your 
              organization embrace blockchain innovation while maintaining institutional standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/contact" variant="outline" size="lg">
                Explore Digital Asset Advisory
              </CTAButton>
              <CTAButton href="/insights" variant="outline" size="lg">
                Read Our Digital Asset Insights
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
