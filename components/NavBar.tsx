'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Container } from './Container'
import { clsx } from 'clsx'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Advisory', href: '/advisory' },
  { name: 'Investment', href: '/investment' },
  { name: 'Digital Assets', href: '/digital-assets' },
  { name: 'Partners', href: '/partners' },
  { name: 'Insights', href: '/insights' },
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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/50 shadow-sm">
        <Container>
          <nav className="flex items-center justify-between py-6" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5 group">
                <span className="sr-only">Alpha Group Investment</span>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-700 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary-700 to-primary-600 bg-clip-text text-transparent group-hover:from-primary-800 group-hover:to-primary-700 transition-all">
                    Alpha
                  </span>
                </div>
              </Link>
            </div>
            
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-neutral-700 hover:bg-neutral-100 hover:text-primary-700 transition-colors border border-transparent hover:border-neutral-200"
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
                      ? 'text-primary-700'
                      : 'text-neutral-700 hover:text-primary-700'
                  )}
                >
                  {item.name}
                  <span className={clsx(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-700 to-primary-600 transform transition-transform duration-200',
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
          'fixed inset-y-0 right-0 z-[70] w-3/4 max-w-sm overflow-y-auto bg-white shadow-2xl border-l border-neutral-100',
          'transform transition-all duration-300 ease-in-out',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}>
          {/* Clean header */}
          <div className="px-6 py-8 border-b border-neutral-100">
            <div className="flex justify-end">
              <button
                type="button"
                className="p-2 rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all duration-200"
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
                    'block py-4 px-0 text-lg font-medium border-b border-neutral-100/50 transition-all duration-200',
                    'hover:text-primary-600',
                    pathname === item.href
                      ? 'text-primary-700 font-semibold'
                      : 'text-neutral-900'
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
