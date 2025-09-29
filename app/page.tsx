import { VideoHero } from '@/components/VideoHero'
import { PingPongVideo } from '@/components/PingPongVideo'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { CTAButton } from '@/components/CTAButton'
import { LogoStrip } from '@/components/LogoStrip'
import { StatList } from '@/components/StatList'
import { BarChart } from '@/components/BarChart'
import { AnimatedBarChart } from '@/components/AnimatedBarChart'
import { CountUp } from '@/components/CountUp'
import { Reveal } from '@/components/Reveal'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { ScrollReveal } from '@/components/ScrollReveal'
import { SimpleScrollSection } from '@/components/SimpleScrollSection'
import Link from 'next/link'
import Image from 'next/image'

const partnerLogos = [
  { name: 'Kinetic', src: '/logos/kinetic.svg', width: 120, height: 40 },
  { name: 'OKX', src: '/logos/okx.svg', width: 80, height: 40 },
  { name: 'The Anomaly Network', src: '/logos/anomaly.svg', width: 140, height: 40 },
  { name: 'NeosLegal', src: '/logos/neos.svg', width: 100, height: 40 },
  { name: 'Chainforce.tech', src: '/logos/chainforce.svg', width: 130, height: 40 },
]

const footprintStats = [
  {
    value: '100+',
    label: 'Ventures Reviewed',
    description: 'Annually across all verticals'
  },
  {
    value: '10+',
    label: 'Global Partners',
    description: 'Ecosystem collaborators'
  },
  {
    value: '30+',
    label: 'Years Experience',
    description: 'Combined in emerging tech'
  },
  {
    value: '3',
    label: 'Core Pillars',
    description: 'Advisory, Investments, Digital Assets'
  },
]

const pillars = [
  {
    title: 'Advisory',
    description: 'Institutional mandates with trusted legal & tech partners.',
    image: '/media/advisory-pillar.webp',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h4.125m0-15.75h8.25" />
      </svg>
    )
  },
  {
    title: 'Investments',
    description: 'Pre-IPO, secondary, and early-stage co-investments.',
    image: '/media/investments-pillar.webp',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
  {
    title: 'Digital Assets',
    description: 'Compliance & assurance frameworks for blockchain.',
    image: '/media/digital-assets-pillar.webp',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
]

export default function HomePage() {

  return (
    <>
      {/* Hero Section - Premium Institutional */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/media/hero-poster.jpg"
          >
            <source src="/media/hero.webm" type="video/webm" />
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-primary-950/50"></div>
        </div>
        
        <div className="relative z-10 mobile-container">
          <div className="text-center py-8 sm:py-12">
            <Reveal>
              <div className="mb-8">
                {/* Mobile: Action-focused title */}
                <h1 className="block sm:hidden text-4xl font-bold tracking-tight text-white mb-4 leading-tight">
                  Transforming digital finance.
                  <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                    Where expert advisory meets dynamic institutional investment—discover your edge in digital assets.
                  </span>
                </h1>
                
                {/* Desktop: Action-focused title */}
                <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Transforming digital finance.
                  <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                    Where expert advisory meets dynamic institutional investment—discover your edge in digital assets.
                  </span>
                </h1>
              </div>
            </Reveal>
            
            
            <Reveal delay={400}>
              <div className="mb-8 sm:mb-12 md:mb-16">
                {/* Mobile: Side by side full width buttons */}
                <div className="block sm:hidden flex gap-3">
                  <CTAButton href="/advisory" variant="outline" className="flex-1 py-3 text-sm">
                    Get Started
                  </CTAButton>
                  <CTAButton href="/about" variant="outline" className="flex-1 py-3 text-sm">
                    See Our Work
                  </CTAButton>
                </div>
                
                {/* Desktop: Side by side buttons */}
                <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center">
                  <CTAButton href="/advisory" variant="outline" size="lg" className="px-8 py-4">
                    Get Started
                  </CTAButton>
                  <CTAButton href="/about" variant="outline" size="lg" className="px-8 py-4">
                    See Our Work
                  </CTAButton>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={600}>
              <div className="border-t border-white/10 pt-6 sm:pt-12">
                <LogoStrip logos={partnerLogos} className="opacity-60" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Institutional Excellence - Split Layout */}
      <Section className="py-12 sm:py-24 lg:py-32">
        <Container>
          {/* Mobile: Stacked Layout */}
          <div className="block lg:hidden">
            <Reveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary-900 mb-4">
                  Trusted by Global Leaders
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  Our institutional-grade approach delivers measurable outcomes across advisory mandates, strategic investments, and digital asset assurance.
                </p>
              </div>
            </Reveal>
            
            <div className="grid grid-cols-2 gap-6">
              {footprintStats.map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="scale" delay={index * 150}>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary-900 mb-3">
                      <CountUp 
                        end={parseInt(stat.value.replace(/[^0-9]/g, ''))} 
                        suffix={stat.value.replace(/[0-9]/g, '')}
                        duration={2500}
                      />
                    </div>
                    <div className="text-accent-600 font-semibold text-sm mb-2">
                      {stat.label}
                    </div>
                    <p className="text-neutral-600 text-xs leading-tight">
                      {stat.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Desktop: Side by Side Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Side - Text Content */}
            <Reveal>
              <div>
                <h2 className="text-3xl xl:text-4xl font-bold text-primary-900 mb-6 leading-tight">
                  Trusted by Global Leaders
                </h2>
                <p className="text-lg xl:text-xl text-neutral-600 leading-relaxed">
                  Our institutional-grade approach delivers measurable outcomes across advisory mandates, strategic investments, and digital asset assurance.
                </p>
              </div>
            </Reveal>

            {/* Right Side - 2x2 Stats Grid */}
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-8">
                {footprintStats.map((stat, index) => (
                  <ScrollAnimation key={stat.label} animation="scale" delay={300 + (index * 150)}>
                    <div className="text-center">
                      <div className="text-6xl xl:text-7xl font-bold text-primary-900 mb-4">
                        <CountUp 
                          end={parseInt(stat.value.replace(/[^0-9]/g, ''))} 
                          suffix={stat.value.replace(/[0-9]/g, '')}
                          duration={2500}
                        />
                      </div>
                      <div className="text-accent-600 font-semibold text-base xl:text-lg mb-3">
                        {stat.label}
                      </div>
                      <p className="text-neutral-600 text-sm xl:text-base leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Specialized Expertise - 4 Across with Icons */}
      <Section background="muted" className="py-16 sm:py-20 lg:py-24">
        <Container>
          <ScrollAnimation animation="slideUp" delay={0}>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-16 lg:mb-20">
                Specialized Expertise
              </h2>
              
              {/* 4 Items Side by Side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                {/* Tokenization */}
                <ScrollAnimation animation="slideUp" delay={200}>
                  <div className="group text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center text-primary-600 group-hover:text-accent-600 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.467-.22-2.121-.659-1.172-.879-1.172-2.303 0-3.182C10.536 7.78 11.268 7.56 12 7.56c.732 0 1.464.22 2.121.659l.879-.659M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-primary-900 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                      Tokenization of Real World Assets
                    </h3>
                  </div>
                </ScrollAnimation>
                
                {/* Stablecoin */}
                <ScrollAnimation animation="slideUp" delay={300}>
                  <div className="group text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center text-primary-600 group-hover:text-accent-600 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-primary-900 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                      Stablecoin Growth & Institutional Adoption
                    </h3>
                  </div>
                </ScrollAnimation>
                
                {/* M&A */}
                <ScrollAnimation animation="slideUp" delay={400}>
                  <div className="group text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center text-primary-600 group-hover:text-accent-600 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-primary-900 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                      M&A, Reverse Mergers & PIPE Transactions
                    </h3>
                  </div>
                </ScrollAnimation>
                
                {/* Capital Solutions */}
                <ScrollAnimation animation="slideUp" delay={500}>
                  <div className="group text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 flex items-center justify-center text-primary-600 group-hover:text-accent-600 transition-all duration-500 transform group-hover:scale-110">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-lg lg:text-xl font-bold text-primary-900 leading-tight group-hover:text-accent-600 transition-colors duration-300">
                      Institutional Structuring & Capital Solutions
                    </h3>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </ScrollAnimation>
        </Container>
      </Section>


      {/* Advisory Mandates Teaser */}
      <Section className="py-12 sm:py-24">
        <div className="mobile-container">
          {/* Mobile: Single column layout */}
          <div className="block lg:hidden space-y-6">
            <ScrollAnimation animation="slideUp" delay={0}>
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  Advisory Mandates, Redefined
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 mobile-text-wrap">
                  We operate institutional mandates across compliance, governance, treasury, risk, and digital asset strategy with our trusted network of legal and technical partners.
                </p>
                <CTAButton href="/advisory" variant="outline" className="w-full py-3 text-sm">
                  Explore Advisory Services
                </CTAButton>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="scale" delay={200}>
              <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-neutral-400 font-medium">Advisory services</div>
                  <div className="text-xs text-neutral-500 mt-1">illustration</div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <ScrollAnimation animation="slideLeft" delay={0}>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  Advisory Mandates, Redefined
                </h2>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                  We operate institutional mandates across compliance, governance, 
                  treasury, risk, and digital asset strategy with our trusted network 
                  of legal and technical partners. Clear deliverables, accountable 
                  timelines, ongoing oversight.
                </p>
                <CTAButton href="/advisory" variant="outline" size="lg" className="px-6 py-3">
                  Explore Advisory Services
                </CTAButton>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="slideRight" delay={300}>
              <div className="relative">
                <Image
                  src="/media/advisory-approach-placeholder.webp"
                  alt="Advisory services illustration"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </Section>

      {/* Investment Focus */}
      <Section
        background="muted"
        title="Strategic Allocation"
        description="Our conviction across Pre-IPO, Secondary, and Startups."
      >
        <ScrollAnimation animation="scale" className="mb-8">
          <AnimatedBarChart />
        </ScrollAnimation>
        <ScrollAnimation animation="fadeIn" delay={300}>
          <div className="text-center">
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
              We deploy capital where conviction meets opportunity, leveraging our 
              ecosystem advantage across all stages of company growth.
            </p>
          </div>
        </ScrollAnimation>
      </Section>

      {/* Digital Assets Teaser */}
      <Section className="py-12 sm:py-24">
        <div className="mobile-container">
          {/* Mobile: Single column layout */}
          <div className="block lg:hidden space-y-6">
            <Reveal>
              <div className="w-full h-48 bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-sm text-neutral-500 font-medium">Digital assets</div>
                  <div className="text-xs text-neutral-400 mt-1">illustration</div>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div>
                <h2 className="text-3xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                  Digital Asset Assurance
                </h2>
                <p className="text-sm text-neutral-600 leading-relaxed mb-6 mobile-text-wrap">
                  Institutional-grade advisory and assurance for blockchain initiatives—controls, reporting, and oversight aligned with global standards.
                </p>
                <CTAButton href="/digital-assets" variant="outline" className="w-full py-3 text-sm">
                  Explore Digital Assets
                </CTAButton>
              </div>
            </Reveal>
          </div>

          {/* Desktop: Two column layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div className="relative lg:order-2">
                <Image
                  src="/media/digital-assets-placeholder.webp"
                  alt="Digital assets and blockchain illustration"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg"
                />
              </div>
            </Reveal>
            
            <Reveal delay={200}>
              <div className="lg:order-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                  Digital Asset Assurance
                </h2>
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed mb-8">
                  Institutional-grade advisory and assurance for blockchain initiatives—controls, 
                  reporting, and oversight aligned with global standards. Future-oriented, 
                  compliance-led approach to digital transformation.
                </p>
                <CTAButton href="/digital-assets" variant="outline" size="lg" className="px-6 py-3">
                  Explore Digital Assets
                </CTAButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>


      {/* CTA Banner */}
      <Section className="py-12 sm:py-24">
        <div className="mobile-container text-center">
          <ScrollAnimation animation="slideUp" delay={0}>
            {/* Mobile: Smaller text */}
            <div className="block sm:hidden">
              <h2 className="text-3xl font-bold text-primary-900 mb-4 mobile-text-wrap">
                Ready to collaborate on mandates or co-investments?
              </h2>
              <p className="text-sm text-neutral-600 mb-6 mobile-text-wrap">
                Join our ecosystem of institutional partners and portfolio companies driving the future of finance and technology.
              </p>
              <div>
                <CTAButton href="/contact" variant="outline" className="w-full py-3 text-sm">
                  Start a Conversation
                </CTAButton>
              </div>
            </div>

            {/* Desktop: Larger text */}
            <div className="hidden sm:block">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-900 mb-6">
                Ready to collaborate on mandates or co-investments?
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-neutral-600 mb-8 lg:mb-10 max-w-3xl mx-auto">
                Join our ecosystem of institutional partners and portfolio companies 
                driving the future of finance and technology.
              </p>
              <div className="flex justify-center">
                <CTAButton href="/contact" variant="outline" size="lg" className="px-6 py-3">
                  Start a Conversation
                </CTAButton>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </Section>
    </>
  )
}

