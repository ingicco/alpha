import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { ScrollReveal } from '@/components/ScrollReveal'
import { HorizontalScrollReveal } from '@/components/HorizontalScrollReveal'
import { CTAButton } from '@/components/CTAButton'
import OndoStyleCards from '@/components/OndoStyleCards'
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
      {/* Hero Section with Padded Background Image */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-16 pt-4 pb-4">
        {/* Background Image with Padding */}
        <div className="absolute left-6 right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 top-4 bottom-4">
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/media/advisory-hero-bg.webp"
              alt="Advisory services background"
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
              {/* Mobile: Proper sized title */}
              <h1 className="block sm:hidden text-3xl font-bold text-white mb-4 mobile-text-wrap drop-shadow-lg">
                Advisory Mandates, Redefined
              </h1>
              
              {/* Desktop: Larger title with styling */}
              <h1 className="hidden sm:block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg">
                Advisory Mandates, <span className="text-accent-400">Redefined</span>
              </h1>
            </div>
          </Reveal>
          
          <Reveal delay={200}>
            <div className="mb-8">
              {/* Mobile: Shorter, clearer text */}
              <p className="block sm:hidden text-sm text-neutral-200 leading-relaxed mb-4 mobile-text-wrap drop-shadow">
                We operate institutional mandates across compliance, governance, treasury, risk, and digital asset strategy.
              </p>
              
              {/* Desktop: Full description */}
              <p className="hidden sm:block text-lg md:text-xl text-neutral-200 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto drop-shadow">
                We operate institutional mandates across compliance, governance, treasury, risk, and digital asset strategy with our trusted network of legal and technical partners.
              </p>
            </div>
          </Reveal>
          
          <Reveal delay={400}>
            <div>
              {/* Mobile: Single centered button */}
              <div className="block sm:hidden">
                <CTAButton href="/contact" variant="outline" className="w-full py-3 text-sm backdrop-blur-sm">
                  Request a Mandate
                </CTAButton>
              </div>
              
              {/* Desktop: Single centered button */}
              <div className="hidden sm:flex justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-8 py-4 backdrop-blur-sm">
                  Request a Mandate
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Beyond Traditional Consulting - Ondo Style Layout */}
      <Section background="muted">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Content */}
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6 leading-tight">
                  Beyond Traditional Consulting
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional advisory falls short in the digital asset era. Organizations need partners who understand both institutional rigor and blockchain innovation.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our approach combines deep institutional experience with cutting-edge digital asset expertise, supported by a curated network of best-in-class partners.
                </p>
              </div>
            </Reveal>

            {/* Right Side - Portrait Image */}
            <Reveal delay={200}>
              <div>
                <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/media/advisory-consulting.webp"
                      alt="Professional advisory consultation"
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

      {/* Specialized Advisory Services - True Ondo Style */}
      <section className="relative py-16 px-6 md:px-12 lg:px-16">
        {/* Large Rounded Background Image with Padding */}
        <div className="relative w-full h-[85vh] rounded-3xl overflow-hidden">
          <Image
            src="/media/advisory-services-bg.webp"
            alt="Advisory services background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/70 to-primary-900/80"></div>
          
          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Header at Top */}
            <div className="text-center pt-16 pb-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
                Specialized Advisory Services
              </h2>
              <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
                Comprehensive expertise across tokenization, stablecoins, and digital corporate finance
              </p>
            </div>

            {/* Cards Positioned at Bottom */}
            <div className="flex-1 relative">
              <OndoStyleCards />
            </div>
          </div>
        </div>
      </section>

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
              <div className="flex justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-6 py-3 text-base font-medium">
                  Request a Mandate
                </CTAButton>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}

