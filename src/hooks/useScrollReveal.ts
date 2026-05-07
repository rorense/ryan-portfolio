import { useRef } from 'react'
import { useInView } from 'framer-motion'

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return { ref, isInView }
}
