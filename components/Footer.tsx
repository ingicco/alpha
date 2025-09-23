import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'

const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Advisory', href: '/advisory' },
    { name: 'Investment', href: '/investment' },
    { name: 'Digital Assets', href: '/digital-assets' },
    { name: 'Partners', href: '/partners' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Legal Disclaimer', href: '/legal/disclaimer' },
    { name: 'Privacy Policy', href: '/legal/privacy' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      <div className="mobile-container py-8 sm:py-12 lg:py-16">
        {/* Mobile: Single column layout */}
        <div className="block lg:hidden space-y-6">
          <div>
            <div className="mb-3">
              <Image
                src="/alpha-logo.png"
                alt="Alpha Group Investment"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-neutral-300 mobile-text-wrap">
              Institutional-grade advisory, investments, and digital asset assurance for forward-thinking organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-3">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs text-neutral-300 hover:text-white transition-colors mobile-text-wrap"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-accent-400 mb-3">
                Legal
              </h3>
              <ul className="space-y-2">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-xs text-neutral-300 hover:text-white transition-colors mobile-text-wrap"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-neutral-700 pt-4">
            <p className="text-xs text-neutral-400 text-center mobile-text-wrap">
              © {currentYear} Alpha Group Investment. All rights reserved.
            </p>
          </div>
        </div>

        {/* Desktop: Multi-column layout */}
        <div className="hidden lg:block">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
              <div>
                <Image
                  src="/alpha-logo.png"
                  alt="Alpha Group Investment"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-base text-neutral-300 max-w-md">
                Institutional-grade advisory, investments, and digital asset assurance 
                for forward-thinking organizations.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                  Navigation
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.main.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-base text-neutral-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-400">
                  Legal
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link 
                        href={item.href} 
                        className="text-base text-neutral-300 hover:text-white transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12 border-t border-neutral-700 pt-8">
            <p className="text-base text-neutral-400 text-center">
              © {currentYear} Alpha Group Investment. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
