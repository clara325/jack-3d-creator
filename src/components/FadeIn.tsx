import { motion } from 'framer-motion'
import type { CSSProperties, ElementType, ReactNode } from 'react'

interface FadeInProps {
  children?: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: ElementType
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

/**
 * Scroll-triggered fade/slide-in wrapper.
 * Resolves a motion component for either a string tag (e.g. 'div', 'h1')
 * or a React component via motion.create().
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  ...rest
}: FadeInProps) {
  const MotionComponent =
    typeof as === 'string' ? (motion as Record<string, unknown>)[as] : motion.create(as)

  return (
    <MotionComponent
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
      {...rest}
    >
      {children}
    </MotionComponent>
  )
}
