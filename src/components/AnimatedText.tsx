import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

const NBSP = ' '

function AnimatedChar({
  char,
  progress,
  index,
  total,
}: {
  char: string
  progress: import('framer-motion').MotionValue<number>
  index: number
  total: number
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  const isSpace = char === ' '
  const glyph = isSpace ? NBSP : char

  return (
    <span className="relative inline-block">
      <span className="invisible" aria-hidden>
        {glyph}
      </span>
      <motion.span
        aria-hidden
        className="absolute left-0 top-0 whitespace-pre"
        style={{ opacity }}
      >
        {glyph}
      </motion.span>
    </span>
  )
}

/**
 * Character-by-character scroll-reveal paragraph.
 * Each character fades from opacity 0.2 to 1 as the paragraph scrolls
 * through the viewport (offset ['start 0.8', 'end 0.2']).
 * Words are kept intact via inline-block wrapping so they don't break mid-word.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  const totalChars = text.length
  const words = text.split(' ')
  let globalIndex = 0

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('')
        const wordEl = (
          <span key={`w-${wi}`} className="inline-block whitespace-nowrap">
            {chars.map((ch) => {
              const i = globalIndex
              globalIndex += 1
              return (
                <AnimatedChar
                  key={`c-${i}`}
                  char={ch}
                  progress={scrollYProgress}
                  index={i}
                  total={totalChars}
                />
              )
            })}
          </span>
        )
        const isLast = wi === words.length - 1
        return (
          <span key={`wrap-${wi}`} className="inline-block">
            {wordEl}
            {!isLast && (
              <AnimatedChar
                char=" "
                progress={scrollYProgress}
                index={globalIndex}
                total={totalChars}
              />
            )}
            {!isLast && (globalIndex += 1)}
          </span>
        )
      })}
    </p>
  )
}
