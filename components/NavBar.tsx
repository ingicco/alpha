'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { clsx } from 'clsx'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Advisory', href: '/advisory' },
  { name: 'Investment', href: '/investment' },
  { name: 'Thesis', href: '/thesis' },
  // { name: 'Partners', href: '/partners' }, // Hidden temporarily
  // { name: 'Insights', href: '/insights' }, // Hidden temporarily
  { name: 'Contact', href: '/contact' },
]

// Navigation icons for bottom nav - minimal and clean
const navigationIcons = {
  'About': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  'Advisory': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  'Investment': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  'Thesis': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  'Contact': (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

export function NavBar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    // Set initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Header */}
      <header 
        className="hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(30, 58, 138, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
          <nav className={clsx(
            "flex items-center justify-center relative transition-all duration-300 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl",
            isScrolled ? "py-4" : "py-8"
          )} aria-label="Global">
            {/* Logo - Absolute positioned to left */}
            <div className="absolute left-0">
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
            
            {/* Centered Navigation */}
            <div className="flex gap-x-12">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group py-2 px-1"
                >
                  {/* Simple text with clean hover */}
              <span className={clsx(
                'text-base font-medium transition-colors duration-300',
                pathname === item.href
                  ? 'text-white'
                  : (isScrolled 
                      ? 'text-white/80 hover:text-white' 
                      : 'text-white/80 hover:text-white')
              )}>
                    {item.name}
                  </span>
                  
                  {/* Underline */}
                  <span className={clsx(
                    'absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-all duration-300 origin-left',
                    pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )} />
                </Link>
              ))}
            </div>
          </nav>
      </header>

      {/* Mobile Header - Just Logo */}
      <header 
        className="lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: isScrolled ? 'rgba(30, 58, 138, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
        <nav className={clsx(
          "flex items-center justify-center transition-all duration-300 mx-auto px-4 sm:px-6 max-w-6xl",
          isScrolled ? "py-3" : "py-6"
        )} aria-label="Global">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <span className="sr-only">Alpha Group Investment</span>
            <Image
              src="/alpha-logo.png"
              alt="Alpha Group Investment"
              width={120}
              height={40}
              className="h-8 w-auto transition-opacity group-hover:opacity-80"
              priority
            />
          </Link>
        </nav>
      </header>

      {/* Mobile Bottom Navigation */}
      <nav 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-primary-800/20 shadow-lg"
        style={{ backgroundColor: 'rgb(30, 58, 138)' }}
      >
        <div className="flex justify-around items-center py-3 px-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                'flex flex-col items-center justify-center py-1 px-2 rounded-lg transition-all duration-200 min-w-0 flex-1',
                pathname === item.href
                  ? 'text-white bg-white/10'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              )}
            >
              <div className={clsx(
                'mb-1 transition-colors duration-200',
                pathname === item.href ? 'text-white' : 'text-white/70'
              )}>
                {navigationIcons[item.name as keyof typeof navigationIcons]}
              </div>
              <span className={clsx(
                'text-xs font-light leading-none truncate',
                pathname === item.href ? 'text-white' : 'text-white/70'
              )}>
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}
