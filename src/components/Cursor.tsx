import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/** Desktop-only custom cursor. Expands over interactive elements; shows a label over [data-cursor]. */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const [label, setLabel] = useState('')
  const [hover, setHover] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduce) return
    setEnabled(true)
    document.documentElement.classList.add('has-cursor')

    const move = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      const t = e.target as HTMLElement
      const withLabel = t.closest('[data-cursor]') as HTMLElement | null
      setLabel(withLabel?.dataset.cursor ?? '')
      setHover(!!t.closest('a,button,input,select,textarea,[role="button"],[data-cursor]'))
    }
    window.addEventListener('pointermove', move)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.classList.remove('has-cursor')
    }
  }, [x, y])

  if (!enabled) return null
  const size = label ? 84 : hover ? 44 : 10
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full"
      style={{ x: sx, y: sy, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: size,
        height: size,
        backgroundColor: label ? '#ff5a00' : hover ? 'rgba(255,90,0,0.18)' : '#ffffff',
        borderColor: '#ff5a00',
        borderWidth: hover && !label ? 1 : 0,
      }}
      transition={{ duration: 0.25 }}
    >
      {label && <span className="font-display text-[0.65rem] font-bold uppercase tracking-[0.18em] text-black">{label}</span>}
    </motion.div>
  )
}
