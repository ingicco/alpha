'use client'

import React from 'react'
import { Section } from '@/components/Section'
import { Container } from '@/components/Container'
import { CTAButton } from '@/components/CTAButton'
import { LogoStrip } from '@/components/LogoStrip'
import { Reveal } from '@/components/Reveal'
import { ScrollAnimation } from '@/components/ScrollAnimation'
import { CounterAnimation } from '@/components/CounterAnimation'
import { VerticalLogoScroll } from '@/components/VerticalLogoScroll'
import Link from 'next/link'
import Image from 'next/image'

const partnerLogos = [
  { name: 'Kinetic', src: '/logos/kinetic.svg', width: 120, height: 40 },
  { name: 'OKX', src: '/logos/okx.svg', width: 80, height: 40 },
  { name: 'The Anomaly Network', src: '/logos/anomaly.svg', width: 140, height: 40 },
  { name: 'NeosLegal', src: '/logos/neos.svg', width: 100, height: 40 },
  { name: 'Chainforce.tech', src: '/logos/chainforce.svg', width: 130, height: 40 },
]

const ecosystemPartners = [
  { name: 'BlackRock', category: 'Asset Management' },
  { name: 'Franklin Templeton', category: 'Investment Firm' },
  { name: 'Wellington Management', category: 'Investment Management' },
  { name: 'Fundbridge', category: 'Capital Markets' },
  { name: 'Kinetic', category: 'Technology Partner' },
  { name: 'The Anomaly Network', category: 'Digital Innovation' },
  { name: 'NeosLegal', category: 'Legal Services' },
  { name: 'Chainforce.tech', category: 'Blockchain Technology' },
]

const footprintStats = [
  {
    value: 100,
    suffix: '+',
    label: 'Ventures Reviewed',
    description: 'Annually across all verticals'
  },
  {
    value: 10,
    suffix: '+',
    label: 'Global Partners',
    description: 'Ecosystem collaborators'
  },
  {
    value: 30,
    suffix: '+',
    label: 'Years Experience',
    description: 'Combined in emerging tech'
  },
  {
    value: 2.3,
    suffix: 'T',
    label: 'Digital Asset Market',
    description: 'Total market capitalization'
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Clean & Minimal */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/media/hero-poster.jpg"
            onError={(e) => {
              console.log('Video failed to load, using fallback');
              // Fallback to poster image if video fails to load
              const video = e.target as HTMLVideoElement;
              video.style.display = 'none';
              const fallbackDiv = video.nextElementSibling as HTMLDivElement;
              if (fallbackDiv) {
                fallbackDiv.style.backgroundImage = 'url(/media/hero-poster.jpg)';
                fallbackDiv.style.backgroundSize = 'cover';
                fallbackDiv.style.backgroundPosition = 'center';
              }
            }}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
          {/* Fallback background and dark overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <Container>
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <Reveal>
              <div className="mb-12">
                {/* Clean, large title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-white mb-8 leading-[0.9]">
                  Strategic Capital
                  <br />
                  <span className="text-5xl md:text-7xl lg:text-8xl font-light text-white">Digital Innovation</span>
                </h1>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="mb-16">
                {/* Single prominent CTA button */}
                <div className="flex justify-center">
                  <Link href="/investment" className="group bg-white text-gray-900 px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500 flex items-center gap-3">
                    {/* Text stays dark */}
                    <span className="font-medium">Our solutions</span>
                    
                    {/* Dark circle with white arrow */}
                    <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>

        {/* Scrolling Logos - Full Width at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 w-full z-50 bg-black/30 py-4">
          <LogoStrip logos={partnerLogos} className="opacity-100" />
        </div>
      </section>

      {/* Investment Philosophy - Clean Modern Design */}
      <Section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-primary-900 mb-8 leading-tight">
                Our capital is private, patient, and precise.
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-3xl mx-auto font-normal">
                We deploy strategic capital with institutional precision, focusing on transformative opportunities in digital assets and emerging technologies.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Excellence Redefined - Side by Side Layout */}
      <div className="relative bg-white">
        <div className="lg:grid lg:grid-cols-2 lg:min-h-screen">
          {/* Left side - Sticky title */}
          <div className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:items-center lg:justify-center bg-white">
            <Container>
              <div className="text-center px-8 py-16 lg:py-0">
                <Reveal>
                  <h2 className="text-6xl md:text-7xl lg:text-9xl font-extralight text-black leading-tight mb-6">
                    Excellence
                    <br />
                    Redefined
                  </h2>
                </Reveal>
                <Reveal delay={200}>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md mx-auto font-light">
                    Where institutional precision meets digital innovation
                  </p>
                </Reveal>
              </div>
            </Container>
          </div>

          {/* Right side - Scrolling content */}
          <div className="">
            {/* Section 1 - Tokenization */}
            <div className="min-h-screen bg-black flex items-center py-20">
              <Container>
                <div className="max-w-2xl mx-auto text-center lg:text-left">
                  <ScrollAnimation animation="slideUp" delay={0}>
                    <div className="mb-8">
                      <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/media/tokenization-leadership.webp"
                          alt="Tokenization Leadership"
                          width={800}
                          height={384}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
                          Tokenization Leadership
                        </h3>
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Bridging traditional assets with digital infrastructure for institutional capital deployment.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </Container>
            </div>

            {/* Section 2 - Digital Infrastructure */}
            <div className="min-h-screen bg-black flex items-center py-20">
              <Container>
                <div className="max-w-2xl mx-auto text-center lg:text-left">
                  <ScrollAnimation animation="slideUp" delay={200}>
                    <div className="mb-8">
                      <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/media/digital-infrastructure.webp"
                          alt="Digital Infrastructure Excellence"
                          width={800}
                          height={384}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
                          Digital Infrastructure Excellence
                        </h3>
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Institutional-grade digital asset infrastructure meeting the highest standards of security and compliance.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </Container>
            </div>

            {/* Section 3 - Strategic Capital */}
            <div className="min-h-screen bg-black flex items-center py-20">
              <Container>
                <div className="max-w-2xl mx-auto text-center lg:text-left">
                  <ScrollAnimation animation="slideUp" delay={400}>
                    <div className="mb-8">
                      <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/media/strategic-capital.webp"
                          alt="Strategic Capital Deployment"
                          width={800}
                          height={384}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
                          Strategic Capital Deployment
                        </h3>
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Patient, precise capital strategically deployed for maximum long-term value creation.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </Container>
            </div>

            {/* Section 4 - Global Network */}
            <div className="min-h-screen bg-black flex items-center py-20">
              <Container>
                <div className="max-w-2xl mx-auto text-center lg:text-left">
                  <ScrollAnimation animation="slideUp" delay={600}>
                    <div className="mb-8">
                      <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                          src="/media/global-network.webp"
                          alt="Global Network Access"
                          width={800}
                          height={384}
                          className="w-full h-96 object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 lg:mb-6">
                          Global Network Access
                        </h3>
                        <p className="text-base sm:text-lg text-white leading-relaxed">
                          Extensive network of institutional partners and technology leaders accelerating growth globally.
                        </p>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </Container>
            </div>
          </div>
        </div>
      </div>

      {/* Core Focus - Scrolling Text */}
      <div className="py-12 sm:py-20 lg:py-24 w-screen relative left-1/2 right-1/2 -mx-[50vw]">
        {/* First line - faster */}
        <div className="overflow-hidden whitespace-nowrap mb-4">
          <div className="inline-flex animate-scroll">
            <div className="flex items-center space-x-16 text-6xl md:text-8xl lg:text-9xl font-light text-black">
              <span>Investments</span>
              <span className="text-black">—</span>
              <span>Research</span>
              <span className="text-black">—</span>
              <span>Advisory</span>
              <span className="text-black">—</span>
              <span>Investments</span>
              <span className="text-black">—</span>
              <span>Research</span>
              <span className="text-black">—</span>
              <span>Advisory</span>
              <span className="text-black">—</span>
              <span>Investments</span>
              <span className="text-black">—</span>
              <span>Research</span>
              <span className="text-black">—</span>
              <span>Advisory</span>
              <span className="text-black">—</span>
            </div>
          </div>
        </div>
        
        {/* Second line - slower */}
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-scroll-slow">
            <div className="flex items-center space-x-16 text-6xl md:text-8xl lg:text-9xl font-light text-black">
              <span>Strategic</span>
              <span className="text-black">—</span>
              <span>Capital</span>
              <span className="text-black">—</span>
              <span>Solutions</span>
              <span className="text-black">—</span>
              <span>Strategic</span>
              <span className="text-black">—</span>
              <span>Capital</span>
              <span className="text-black">—</span>
              <span>Solutions</span>
              <span className="text-black">—</span>
              <span>Strategic</span>
              <span className="text-black">—</span>
              <span>Capital</span>
              <span className="text-black">—</span>
              <span>Solutions</span>
              <span className="text-black">—</span>
            </div>
          </div>
        </div>
      </div>

      {/* AGI³ Impact - Stats Section */}
      <Section className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Image Overlay - Ready for your image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent z-0"></div>
        
        <Container className="relative z-10">
          {/* Mobile: Stacked Layout */}
          <div className="block lg:hidden">
            <div className="text-center mb-12">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-6">
                  AGI³ is building the foundation for the future of finance.
                </h2>
              </Reveal>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              {footprintStats.map((stat, index) => (
                <ScrollAnimation key={stat.label} animation="slideUp" delay={index * 100}>
                  <div className="text-center">
                    <CounterAnimation
                      end={stat.value}
                      suffix={stat.suffix}
                      className="text-5xl md:text-6xl font-light text-primary-900 mb-3 block"
                      duration={2000 + (index * 200)}
                    />
                    <div className="text-primary-700 font-medium text-base mb-2">
                      {stat.label}
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>

          {/* Desktop: Ondo Style Layout */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-12 gap-16 items-center">
              {/* Left Side - Title */}
              <div className="col-span-5">
                <Reveal>
                  <h2 className="text-4xl xl:text-5xl font-light text-primary-900 leading-tight">
                    AGI³ is building the foundation for the future of finance.
                  </h2>
                </Reveal>
              </div>
              
              {/* Right Side - Stats Grid */}
              <div className="col-span-7">
                <div className="grid grid-cols-2 gap-12">
                  {footprintStats.map((stat, index) => (
                    <ScrollAnimation key={stat.label} animation="slideUp" delay={index * 100}>
                      <div>
                        <CounterAnimation
                          end={stat.value}
                          suffix={stat.suffix}
                          className="text-7xl xl:text-8xl font-light text-primary-900 mb-4 block leading-none"
                          duration={2000 + (index * 200)}
                        />
                        <div className="text-primary-700 font-medium text-lg xl:text-xl mb-2">
                          {stat.label}
                        </div>
                        <p className="text-neutral-600 text-base leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Network, Your Success */}
      <Section className="py-16 sm:py-24 lg:py-32">
        <Container>
          <div className="block lg:hidden text-center mb-12">
            <Reveal>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-primary-900 mb-6 leading-tight">
                Our Network, Your Success
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                Our network enables institutional clients to access premium opportunities and technical expertise across global markets.
              </p>
            </Reveal>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
            {/* Left Side - Text Content (Desktop) */}
            <div className="hidden lg:block lg:col-span-5">
              <Reveal>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-900 leading-tight mb-8">
                  Our Network, Your Success
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed">
                  Our network enables institutional clients to access premium opportunities and technical expertise across global markets.
                </p>
              </Reveal>
            </div>

            {/* Right Side - Vertical Logo Scroll */}
            <div className="lg:col-span-7">
              <ScrollAnimation animation="slideUp" delay={300}>
                <VerticalLogoScroll logos={ecosystemPartners} />
              </ScrollAnimation>
            </div>
          </div>
        </Container>
      </Section>

      {/* Advisory Mandates Teaser */}
      <Section className="py-12 sm:py-24">
        <div className="mobile-container">
          {/* Mobile: Single column layout */}
          <div className="block lg:hidden space-y-6">
            {/* Mobile Image */}
            <ScrollAnimation animation="slideUp" delay={0}>
              <div className="relative mb-6">
                <Image
                  src="/media/advisory-consulting.webp"
                  alt="Advisory Mandates"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </ScrollAnimation>
            
            {/* Mobile Text Content */}
            <ScrollAnimation animation="slideUp" delay={200}>
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-900 mb-4 mobile-text-wrap leading-tight">
                  Institutional Advisory Excellence
                </h2>
                <p className="text-base text-neutral-600 leading-relaxed mb-8 mobile-text-wrap">
                  Comprehensive advisory services across compliance, governance, treasury management, and digital asset strategy—delivered through our trusted network of institutional partners.
                </p>
                <Link href="/advisory" className="group inline-flex items-center gap-3 bg-primary-900 text-white px-6 py-3 text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                  <span className="font-medium">Explore Advisory Services</span>
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                    <svg className="w-3 h-3 text-primary-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </Link>
              </div>
            </ScrollAnimation>
          </div>

          {/* Desktop: Two column layout with image on left, text on right */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Image on left */}
            <div className="lg:order-1">
              <ScrollAnimation animation="slideRight" delay={0}>
                <div className="relative">
                  <Image
                    src="/media/advisory-consulting.webp"
                    alt="Advisory Mandates"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </ScrollAnimation>
            </div>

            {/* Text on right */}
            <div className="lg:order-2">
              <ScrollAnimation animation="slideLeft" delay={200}>
                <div>
                  <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-primary-900 mb-8 leading-tight">
                    Institutional Advisory Excellence
                  </h2>
                  <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8 font-light">
                    Comprehensive advisory services across compliance, governance, treasury management, and digital asset strategy—delivered through our trusted network of institutional partners.
                  </p>
                  <Link href="/advisory" className="group inline-flex items-center gap-3 bg-primary-900 text-white px-6 py-3 text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                    <span className="font-medium">Explore Advisory Services</span>
                    <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
                      <svg className="w-3 h-3 text-primary-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Banner */}
      <Section className="py-16 sm:py-24 bg-primary-50">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-900 mb-8 leading-tight">
                Ready to transform your digital asset strategy?
              </h2>
            </Reveal>
            
            <Reveal delay={200}>
              <p className="text-xl text-neutral-600 mb-12 leading-relaxed">
                Join institutional leaders who trust AGI³ for strategic guidance in the evolving digital economy.
              </p>
            </Reveal>
            
            <Reveal delay={400}>
              <Link href="/contact" className="group inline-flex items-center gap-3 bg-primary-900 text-white px-8 py-4 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-500">
                <span className="font-medium">Let's Talk</span>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center transition-transform duration-500 group-hover:translate-x-2">
                  <svg className="w-4 h-4 text-primary-900" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  )
}
