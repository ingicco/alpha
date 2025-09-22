import { ReactNode } from 'react'
import { Reveal } from './Reveal'
import { clsx } from 'clsx'

interface Stat {
  label: string
  value: string
  description?: string
  icon?: ReactNode
}

interface StatListProps {
  stats: Stat[]
  className?: string
  columns?: 2 | 3 | 4
}

export function StatList({ stats, className, columns = 4 }: StatListProps) {
  return (
    <div className={clsx('grid gap-6 lg:gap-8', {
      'grid-cols-1 sm:grid-cols-2': columns === 2,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4': columns === 4,
    }, className)}>
      {stats.map((stat, index) => (
        <Reveal key={stat.label} delay={index * 100}>
          <div className="text-center">
            {stat.icon && (
              <div className="mx-auto mb-4 text-primary-700">
                {stat.icon}
              </div>
            )}
            <div className="text-3xl font-bold text-neutral-900 mb-2">
              {stat.value}
            </div>
            <div className="text-sm font-semibold text-neutral-700 mb-1">
              {stat.label}
            </div>
            {stat.description && (
              <div className="text-xs text-neutral-500">
                {stat.description}
              </div>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  )
}
