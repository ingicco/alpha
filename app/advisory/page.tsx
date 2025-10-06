import { Metadata } from 'next'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { Reveal } from '@/components/Reveal'
import { CTAButton } from '@/components/CTAButton'
import { ScrollReveal } from '@/components/ScrollReveal'
import DigitalAssetsCards from '@/components/DigitalAssetsCards'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Advisory Services - AGI³',
  description: 'Our selective advisory model: We advise only those we invest in — to help them grow with institutional precision. Our advisory begins where capital meets credibility.',
}

const mandateSpectrum = [
  {
    title: 'Tokenization Advisory',
    description: 'From funds and securities to commodities and real estate — We structure tokenization frameworks that meet global regulatory and distribution standards.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    )
  },
  {
    title: 'Stablecoin & Yield Strategy Advisory',
    description: 'We guide stablecoin and yield projects through institutional adoption — Covering issuance, governance, reserve design, and risk frameworks.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: 'Digital Corporate Finance (M&A, Reverse Mergers, PIPEs)',
    description: 'We structure and execute Reverse Mergers, Reverse Swaps, and PIPE deals for digital asset treasuries seeking entry into regulated markets like NASDAQ and NYSE.',
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    )
  },
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
            <div className="mb-8">
              {/* Mobile: Action-focused title */}
              <h1 className="block sm:hidden text-4xl font-bold tracking-tight text-white mb-4 leading-tight drop-shadow-lg">
                Our Selective Advisory Model
                <span className="block text-lg text-neutral-300 font-light mt-3 leading-relaxed">
                  We don't run an advisory business. We advise only those we invest in — to help them grow with institutional precision.
                </span>
              </h1>
              
              {/* Desktop: Action-focused title */}
              <h1 className="hidden sm:block text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-lg">
                Our Selective Advisory Model
                <span className="block text-xl md:text-2xl lg:text-3xl text-neutral-300 font-light mt-6 leading-relaxed max-w-4xl mx-auto">
                  We don't run an advisory business. We advise only those we invest in — to help them grow with institutional precision.
                </span>
              </h1>
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
                  Our Selective Advisory Model
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  We don't run an advisory business. We advise only those we invest in — to help them grow with institutional precision.
                </p>
                <p className="text-xl text-primary-900 font-semibold italic leading-relaxed">
                  Our advisory begins where capital meets credibility.
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
                  Mandate Spectrum
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
                  Our Advisory Services
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl mx-auto">
                  We provide specialized advisory services across tokenization, stablecoins, and digital corporate finance for our portfolio companies.
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
                title: "Tokenization Advisory",
                description: "From funds and securities to commodities and real estate — We structure tokenization frameworks that meet global regulatory and distribution standards.",
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                )
              },
              {
                title: "Stablecoin & Yield Strategy Advisory",
                description: "We guide stablecoin and yield projects through institutional adoption — Covering issuance, governance, reserve design, and risk frameworks.",
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              {
                title: "Digital Corporate Finance (M&A, Reverse Mergers, PIPEs)",
                description: "We structure and execute Reverse Mergers, Reverse Swaps, and PIPE deals for digital asset treasuries seeking entry into regulated markets like NASDAQ and NYSE.",
                icon: (
                  <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                  </svg>
                )
              }
            ]}
          />
        </Container>
      </Section>


      {/* Digital Assets & Assurance - True Ondo Style */}
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
                Digital Assets & Assurance
              </h2>
              <p className="text-xl text-neutral-200 max-w-4xl mx-auto leading-relaxed">
                Institutional Confidence in Digital Evolution
              </p>
              <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed mt-4">
                AGI³ helps institutional investors, issuers, and platforms build trust frameworks — Through assurance, governance, and compliance.
              </p>
            </div>

            {/* Cards Positioned at Bottom */}
            <div className="flex-1 relative">
              <DigitalAssetsCards />
            </div>
          </div>
        </div>
      </section>


      {/* Partners & Ecosystem */}
      <Section
        eyebrow="Partners & Ecosystem"
        title="Built in Partnership"
        description="AGI³ collaborates with an ecosystem of specialists — Combining regulatory, legal, and technical excellence. Because the future is built in partnership."
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
              <h4 className="font-semibold text-primary-900 mb-2">Kinetic Asset Management</h4>
              <p className="text-sm text-neutral-600">Asset Management Excellence</p>
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
                Partner with AGI³
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-neutral-600 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
                Our advisory begins where capital meets credibility. Join our selective advisory model and grow with institutional precision.
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

