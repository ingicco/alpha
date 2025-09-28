'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Container } from './Container'
import { clsx } from 'clsx'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Advisory', href: '/advisory' },
  { name: 'Investment', href: '/investment' },
  { name: 'Digital Assets', href: '/digital-assets' },
  // { name: 'Partners', href: '/partners' }, // Hidden temporarily
  // { name: 'Insights', href: '/insights' }, // Hidden temporarily
  { name: 'Contact', href: '/contact' },
]

export function NavBar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Debug state changes
  useEffect(() => {
    console.log('Mobile menu state changed:', mobileMenuOpen)
  }, [mobileMenuOpen])

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.classList.remove('mobile-menu-open')
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open')
    }
  }, [mobileMenuOpen])

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 bg-primary-900/95 backdrop-blur-xl border-b border-primary-800/50 shadow-sm">
        <Container>
          <nav className="flex items-center justify-between py-6" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 group">
                <span className="sr-only">Alpha Group Investment</span>
                <Image
                  src="/alpha-logo.png"
                  alt="Alpha Group Investment"
                  width={120}
                  height={40}
                  className="h-10 w-auto transition-opacity group-hover:opacity-80"
                  priority
                />
              </Link>
            </div>
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-white hover:bg-primary-800 hover:text-accent-400 transition-colors border border-transparent hover:border-primary-700"
                onClick={() => {
                  console.log('Hamburger clicked, current state:', mobileMenuOpen)
                  setMobileMenuOpen(!mobileMenuOpen)
                }}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
            
            <div className="hidden lg:flex lg:gap-x-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'text-sm font-semibold leading-6 transition-all duration-200 relative group py-2',
                    pathname === item.href
                      ? 'text-accent-400'
                      : 'text-white hover:text-accent-400'
                  )}
                >
                  {item.name}
                  <span className={clsx(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent-400 to-accent-500 transform transition-transform duration-200',
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )} />
                </Link>
              ))}
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile menu - Outside of header for full screen overlay */}
      <div className={clsx(
        'lg:hidden fixed inset-0 z-[60]',
        mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
      )}>
        {/* Backdrop */}
        <div 
          className={clsx(
            'fixed inset-0 bg-black/50 transition-opacity duration-300 ease-in-out',
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          )}
          onClick={() => {
            console.log('Backdrop clicked')
            setMobileMenuOpen(false)
          }}
        />
        
        {/* Mobile menu panel */}
        <div className={clsx(
          'fixed inset-y-0 right-0 z-[70] w-3/4 max-w-sm overflow-y-auto bg-primary-900 shadow-2xl border-l border-primary-800',
          'transform transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {/* Clean header */}
          <div className="px-6 py-8 border-b border-primary-800">
            <div className="flex justify-end">
              <button
                type="button"
                className="p-2 rounded-full text-neutral-300 hover:text-white hover:bg-primary-800 transition-all duration-200"
                onClick={() => {
                  console.log('Close button clicked')
                  setMobileMenuOpen(false)
                }}
              >
                <span className="sr-only">Close menu</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Clean navigation */}
          <div className="px-6 py-6">
            <nav className="space-y-0">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'block py-4 px-0 text-lg font-medium border-b border-primary-800/50 transition-all duration-200',
                    'hover:text-accent-400',
                    pathname === item.href
                      ? 'text-accent-400 font-semibold'
                      : 'text-white'
                  )}
                  onClick={() => {
                    console.log('Navigation clicked:', item.name)
                    setMobileMenuOpen(false)
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
