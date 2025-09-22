import { ReactNode } from 'react'
import { clsx } from 'clsx'

interface ProseProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'base' | 'lg'
}

export function Prose({ children, className, size = 'base' }: ProseProps) {
  return (
    <div
      className={clsx(
        'prose max-w-none',
        {
          'prose-sm': size === 'sm',
          'prose-base': size === 'base',
          'prose-lg': size === 'lg',
        },
        // Custom prose styles
        'prose-headings:text-primary-900 prose-headings:font-bold',
        'prose-p:text-neutral-700 prose-p:leading-relaxed',
        'prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline',
        'prose-strong:text-primary-900 prose-strong:font-semibold',
        'prose-ul:text-neutral-700 prose-ol:text-neutral-700',
        'prose-li:marker:text-accent-600',
        'prose-blockquote:border-l-accent-600 prose-blockquote:text-neutral-700',
        'prose-code:text-primary-900 prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:before:content-none prose-code:after:content-none',
        className
      )}
    >
      {children}
    </div>
  )
}
