import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { CTAButton } from '@/components/CTAButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Investment Thesis',
  description: 'Our clear investment thesis: regulation, tokenization, and liquidity are shaping the new world of finance. We invest early in the ideas and ecosystems that make this shift possible.',
}

const thesisCore = [
  {
    title: 'Regulation',
    description: 'Clear regulatory frameworks are emerging globally, creating institutional confidence and enabling widespread adoption of digital assets and tokenized infrastructure.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    title: 'Tokenization',
    description: 'Real-world assets are being tokenized at scale, creating new liquidity pools and investment opportunities across traditional and digital markets.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
  {
    title: 'Liquidity',
    description: 'New liquidity mechanisms and institutional infrastructure are enabling 24/7 global markets with unprecedented efficiency and accessibility.',
    icon: (
      <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  }
]

const investmentAreas = [
  {
    title: 'Digital Asset Infrastructure',
    description: 'Custody solutions, trading platforms, and institutional-grade security systems that enable institutional participation in digital markets.',
    percentage: '35%'
  },
  {
    title: 'Tokenization Platforms',
    description: 'Technologies and platforms that enable the tokenization of real-world assets, from real estate to commodities and intellectual property.',
    percentage: '30%'
  },
  {
    title: 'Regulatory Technology',
    description: 'Compliance tools, reporting systems, and regulatory infrastructure that bridge traditional finance with digital assets.',
    percentage: '20%'
  },
  {
    title: 'Liquidity Solutions',
    description: 'Market makers, DEX protocols, and cross-chain infrastructure that enhance liquidity and market efficiency.',
    percentage: '15%'
  }
]

export default function ThesisPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-6 md:inset-12 lg:inset-16 top-4 bottom-4">
            <Image
              src="/media/thesis-hero.webp"
              alt="Investment Thesis"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
          <div className="absolute left-6 right-6 md:left-12 md:right-12 lg:left-16 lg:right-16 top-4 bottom-4 bg-primary-950/60 rounded-2xl"></div>
        </div>
        
        <div className="relative z-10 mobile-container">
          <div className="text-center py-8 sm:py-12">
            <Reveal>
              <div className="mb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
                  Our Investment Thesis
                  <span className="block text-xl md:text-2xl lg:text-3xl text-white font-medium mt-6 leading-relaxed max-w-4xl mx-auto">
                    The convergence of regulation, tokenization, and liquidity is creating unprecedented opportunities in the new world of finance.
                  </span>
                </h1>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Thesis */}
      <Section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Three Pillars of Transformation
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                We believe three fundamental forces are reshaping global finance. Our investments target the infrastructure and ecosystems that enable this transformation.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {thesisCore.map((pillar, index) => (
              <ScrollAnimation key={pillar.title} animation="slideUp" delay={index * 200}>
                <div className="text-center group">
                  <div className="flex justify-center mb-8">
                    <div className="text-primary-600 group-hover:text-accent-600 transition-colors duration-300">
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-6 group-hover:text-primary-700 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </Section>

      {/* Investment Philosophy */}
      <Section className="py-12 sm:py-20 lg:py-24 bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Our Investment Philosophy
                </h2>
                <div className="space-y-6 text-lg text-neutral-700 leading-relaxed">
                  <p>
                    <strong className="text-primary-800">Private, Patient, Precise.</strong> We deploy our own capital with a long-term perspective, allowing us to support transformative ideas through their entire development cycle.
                  </p>
                  <p>
                    <strong className="text-primary-800">Science and Art.</strong> Data informs our decisions, but vision drives our conviction. We combine rigorous analysis with intuitive understanding of technological and market trends.
                  </p>
                  <p>
                    <strong className="text-primary-800">Early and Ecosystem-Focused.</strong> We invest early in the ideas and ecosystems that make the financial transformation possible, not just the end products.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="relative">
                <Image
                  src="/media/investment-philosophy.webp"
                  alt="Investment Philosophy"
                  width={600}
                  height={750}
                  className="rounded-2xl shadow-2xl aspect-[4/5] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Investment Focus Areas */}
      <Section className="py-12 sm:py-20 lg:py-24">
        <Container>
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                Where We Invest
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                Our capital flows into four key areas that form the backbone of the new financial infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {investmentAreas.map((area, index) => (
              <ScrollAnimation key={area.title} animation="slideUp" delay={index * 150}>
                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="text-6xl font-bold text-accent-600 mr-6 group-hover:text-accent-500 transition-colors duration-300">
                      {area.percentage}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 group-hover:text-primary-700 transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed text-lg pl-20">
                    {area.description}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </Container>
      </Section>

      {/* Market Opportunity */}
      <Section className="py-12 sm:py-20 lg:py-24 bg-white">
        <Container>
          <div className="text-center">
            <Reveal>
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-primary-900">
                  The Opportunity Ahead
                </h2>
                <p className="text-xl text-primary-900 max-w-4xl mx-auto leading-relaxed font-medium">
                  We are at the beginning of the largest transformation in financial infrastructure since the creation of modern banking. The convergence of technology, regulation, and institutional adoption creates a once-in-a-generation investment opportunity.
                </p>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">$2.3T</div>
                  <div className="text-primary-900 font-medium">Digital Asset Market Cap</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">$867B</div>
                  <div className="text-primary-900 font-medium">Tokenizable Assets</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent-600 mb-2">156</div>
                  <div className="text-primary-900 font-medium">Countries with Crypto Regulation</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <CTAButton href="/advisory" variant="outline" size="lg" className="px-8 py-4">
                Partner With Us
              </CTAButton>
            </Reveal>
          </div>
        </Container>
      </Section>
    </main>
  )
}
