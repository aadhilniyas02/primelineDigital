import { useEffect, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'framer-motion'
import type { RefObject } from 'react'

export function useCounter(ref: RefObject<Element | null>, target: number) {
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduce = useReducedMotion()
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setN(target)
      return
    }
    const c = animate(0, target, { duration: 1.8, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setN(Math.round(v)) })
    return () => c.stop()
  }, [inView, target, reduce])
  return n
}
