import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

const legalLinks = [
  { name: 'Privacy Policy', href: '/legal/privacy' },
  { name: 'Legal Disclaimer', href: '/legal/disclaimer' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="text-white" style={{ backgroundColor: 'rgb(30, 58, 138)' }}>
      {/* Main footer content */}
      <div className="mobile-container py-12 sm:py-16">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Large AGI³ Text */}
          <div className="text-9xl md:text-[10rem] lg:text-[14rem] xl:text-[16rem] font-extralight text-white leading-none tracking-tight">
            AGI³
          </div>
          
          {/* Logo and Description */}
          <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-3xl">
            {/* Logo on left */}
            <div className="flex-shrink-0">
              <Image
                src="/alpha-logo.png"
                alt="AGI³"
                width={80}
                height={40}
                className="h-8 sm:h-12 w-auto"
              />
            </div>
            
            {/* Description Text on right - fixed width to prevent awkward breaks */}
            <div className="text-sm sm:text-base text-neutral-300 leading-relaxed text-left">
              <div className="whitespace-nowrap">Institutional-grade advisory, investments, and digital asset</div>
              <div className="whitespace-nowrap">assurance for forward-thinking organizations.</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with legal and contact links */}
      <div className="border-t border-neutral-700">
        <div className="mobile-container py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {currentYear} AGI³. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              {legalLinks.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              
              
              {/* LinkedIn Icon Only */}
              <a
                href="https://www.linkedin.com/company/alpha-group-investment"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-neutral-300 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}