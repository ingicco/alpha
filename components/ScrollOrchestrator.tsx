'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

interface ScrollOrchestratorProps {
  children: React.ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'scale' | 'parallax' | 'stagger'
  delay?: number
  duration?: number
  distance?: number
  staggerChildren?: number
  parallaxSpeed?: number
}

export const ScrollOrchestrator: React.FC<ScrollOrchestratorProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
  duration = 0.8,
  distance = 50,
  staggerChildren = 0.1,
  parallaxSpeed = 0.5,
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: false, 
    margin: "-10% 0px -10% 0px",
    amount: 0.3 
  })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const smoothProgress = useSpring(scrollYProgress, springConfig)

  // Parallax transforms
  const y = useTransform(smoothProgress, [0, 1], [distance * parallaxSpeed, -distance * parallaxSpeed])
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95])

  // Animation variants
  const variants = {
    fadeUp: {
      hidden: { 
        opacity: 0, 
        y: distance,
        scale: 0.95,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
          when: "beforeChildren",
          staggerChildren
        }
      }
    },
    fadeDown: {
      hidden: { 
        opacity: 0, 
        y: -distance,
        scale: 0.95,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          when: "beforeChildren",
          staggerChildren
        }
      }
    },
    fadeLeft: {
      hidden: { 
        opacity: 0, 
        x: distance,
        scale: 0.95,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          when: "beforeChildren",
          staggerChildren
        }
      }
    },
    fadeRight: {
      hidden: { 
        opacity: 0, 
        x: -distance,
        scale: 0.95,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          when: "beforeChildren",
          staggerChildren
        }
      }
    },
    scale: {
      hidden: { 
        opacity: 0, 
        scale: 0.8,
        filter: 'blur(10px)'
      },
      visible: { 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94],
          when: "beforeChildren",
          staggerChildren
        }
      }
    },
    parallax: {
      hidden: { opacity: 0.3 },
      visible: { opacity: 1 }
    },
    stagger: {
      hidden: {},
      visible: {
        transition: {
          when: "beforeChildren",
          staggerChildren,
          delayChildren: delay
        }
      }
    }
  }

  const childVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95,
      filter: 'blur(5px)'
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        duration: duration * 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  if (animation === 'parallax') {
    return (
      <motion.div
        ref={ref}
        className={className}
        style={{ y, opacity, scale }}
        variants={variants.parallax}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[animation]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={animation === 'stagger' ? childVariants : undefined}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// Enhanced Counter Animation with scroll-based triggers
export const EnhancedCounterAnimation: React.FC<{
  end: number
  suffix?: string
  className?: string
  duration?: number
  delay?: number
}> = ({ end, suffix = '', className, duration = 2000, delay = 0 }) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, threshold: 0.5 })
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!isInView) return

    const timer = setTimeout(() => {
      const increment = end / (duration / 16) // 60fps
      let current = 0
      
      const counter = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, 16)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isInView, end, duration, delay])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5, filter: 'blur(10px)' }}
      animate={isInView ? { 
        opacity: 1, 
        scale: 1, 
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          delay: delay / 1000,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {}}
    >
      {count}{suffix}
    </motion.span>
  )
}
