import type { CSSProperties, ReactNode } from 'react'
import { useRef, useState } from 'react'

interface MagnetProps {
  children: ReactNode
  /** Activation distance (px) outside the element bounds. */
  padding?: number
  /** Divisor for the translate — higher = weaker pull. */
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
}

/**
 * Mouse-following magnetic hover effect.
 * The child is translated toward the cursor while the pointer stays within
 * `padding` px of the element edge, smoothly easing in and out.
 */
export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState<string>('translate3d(0px, 0px, 0px)')
  const [transition, setTransition] = useState<string>(inactiveTransition)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = e.clientX - centerX
    const dy = e.clientY - centerY

    const withinX = Math.abs(dx) <= rect.width / 2 + padding
    const withinY = Math.abs(dy) <= rect.height / 2 + padding

    if (withinX && withinY) {
      setTransition(activeTransition)
      setTransform(`translate3d(${dx / strength}px, ${dy / strength}px, 0px)`)
    } else {
      setTransition(inactiveTransition)
      setTransform('translate3d(0px, 0px, 0px)')
    }
  }

  const handleMouseLeave = () => {
    setTransition(inactiveTransition)
    setTransform('translate3d(0px, 0px, 0px)')
  }

  const wrapperStyle: CSSProperties = {
    transform,
    transition,
    willChange: 'transform',
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={wrapperStyle}
    >
      {children}
    </div>
  )
}
