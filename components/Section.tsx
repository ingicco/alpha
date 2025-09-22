import { ReactNode } from 'react'
import { Container } from './Container'
import { clsx } from 'clsx'

interface SectionProps {
  children: ReactNode
  eyebrow?: string
  title?: string
  description?: string
  className?: string
  containerSize?: 'sm' | 'md' | 'lg' | 'xl'
  background?: 'white' | 'muted' | 'primary'
}

export function Section({
  children,
  eyebrow,
  title,
  description,
  className,
  containerSize = 'lg',
  background = 'white'
}: SectionProps) {
  return (
    <section
      className={clsx(
        'py-16 lg:py-24',
        {
          'bg-white': background === 'white',
          'bg-neutral-50': background === 'muted',
          'bg-primary-900 text-white': background === 'primary',
        },
        className
      )}
    >
      <Container size={containerSize}>
        {(eyebrow || title || description) && (
          <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-16">
            <div className="px-6 sm:px-8">
              {eyebrow && (
                <p className={clsx(
                  'text-sm font-medium uppercase tracking-wide mb-4',
                  background === 'primary' ? 'text-accent-400' : 'text-accent-600'
                )}>
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2 className={clsx(
                  'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6',
                  background === 'primary' ? 'text-white' : 'text-primary-800'
                )}>
                  {title}
                </h2>
              )}
              {description && (
                <p className={clsx(
                  'text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto',
                  background === 'primary' ? 'text-neutral-200' : 'text-neutral-600'
                )}>
                  {description}
                </p>
              )}
            </div>
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}
