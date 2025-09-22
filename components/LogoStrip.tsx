import Image from 'next/image'
import { clsx } from 'clsx'

interface Logo {
  name: string
  src: string
  width: number
  height: number
}

interface LogoStripProps {
  logos: Logo[]
  className?: string
}

export function LogoStrip({ logos, className }: LogoStripProps) {
  // Duplicate the logos array to create seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos]

  return (
    <div className={clsx('py-4 sm:py-8 overflow-hidden', className)}>
      <div className="flex animate-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex items-center justify-center mx-4 sm:mx-8 lg:mx-12 flex-shrink-0"
          >
            <Image
              src={logo.src}
              alt={`${logo.name} logo`}
              width={logo.width}
              height={logo.height}
              className="h-4 w-auto sm:h-6 lg:h-8 filter brightness-0 invert opacity-40"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
