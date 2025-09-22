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
      // Sizes
      'px-4 py-2 text-sm rounded-md': size === 'sm',
      'px-6 py-3 text-base rounded-lg': size === 'md',
      'px-8 py-4 text-lg rounded-xl': size === 'lg',
      
      // Variants
      'bg-accent-500 text-white hover:bg-accent-600 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 shadow-sm hover:shadow-md transition-all duration-200': variant === 'primary',
      'bg-transparent text-accent-400 border border-accent-500 hover:bg-accent-500 hover:text-white hover:border-accent-500 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 shadow-sm hover:shadow-md transition-all duration-200': variant === 'secondary',
      'border border-accent-500 text-accent-600 hover:bg-accent-500 hover:text-white focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transition-all duration-200': variant === 'outline',
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
