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
    <footer className="bg-primary-900 text-white">
      {/* Main footer content */}
      <div className="mobile-container py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div>
                <Image
                  src="/alpha-logo.png"
                  alt="Alpha Group Investment"
                  width={200}
                  height={65}
                  className="h-16 w-auto"
                />
              </div>
              <div className="text-base text-neutral-300 leading-relaxed">
                <p>Institutional-grade advisory, investments, and digital asset</p>
                <p>assurance for forward-thinking organizations.</p>
              </div>
            </div>
          </div>
          
          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
              Connect
            </h3>
            <div className="space-y-3">
              <div>
                <a
                  href="https://www.linkedin.com/company/alpha-group-investment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
              
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 text-neutral-300 hover:text-white transition-colors group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar with legal links */}
      <div className="border-t border-neutral-700">
        <div className="mobile-container py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-neutral-400">
              © {currentYear} Alpha Group Investment. All rights reserved.
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}