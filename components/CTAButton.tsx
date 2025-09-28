import Link from 'next/link'
import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  external?: boolean
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className,
  external = false
}: CTAButtonProps) {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-semibold transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Sizes - Clean and minimal
      'px-6 py-3 text-sm rounded-lg': size === 'sm',
      'px-8 py-3 text-base rounded-lg': size === 'md', 
      'px-10 py-4 text-lg rounded-lg': size === 'lg',
      
      // Variants - Minimal designs
      'bg-primary-900 text-white hover:bg-primary-800 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': variant === 'primary',
      'bg-white text-primary-900 border border-primary-200 hover:border-primary-300 hover:bg-neutral-50 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2': variant === 'secondary',
      'border border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white focus:ring-2 focus:ring-accent-500 focus:ring-offset-2': variant === 'outline',
    },
    className
  )

  if (external) {
    return (
      <a
        href={href}
        className={baseClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={baseClasses}>
      {children}
    </Link>
  )
}
