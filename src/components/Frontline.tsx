import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

/** Distinctive visual break: cursor-reactive grid with an energy line and moving type. */
export default function Frontline() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const sx = useSpring(mx, { stiffness: 80, damping: 20 })
  const sy = useSpring(my, { stiffness: 80, damping: 20 })
  const gx = useTransform(sx, [0, 1], ['-20px', '20px'])
  const gy = useTransform(sy, [0, 1], ['-20px', '20px'])
  const glow = useTransform([sx, sy], ([x, y]: number[]) => `radial-gradient(500px circle at ${x * 100}% ${y * 100}%, rgba(255,90,0,0.22), transparent 60%)`)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const tx = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['10%', '-30%'])

  return (
    <section
      ref={ref}
      aria-label="Built for the digital frontline"
      className="noise relative isolate overflow-hidden bg-black py-32 sm:py-44"
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width)
        my.set((e.clientY - r.top) / r.height)
      }}
    >
      <motion.div className="grid-bg absolute -inset-10 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" style={{ x: gx, y: gy }} aria-hidden />
      <motion.div className="absolute inset-0 -z-10" style={{ background: glow }} aria-hidden />

      <svg className="absolute inset-0 -z-10 h-full w-full" preserveAspectRatio="none" viewBox="0 0 1000 400" aria-hidden>
        <motion.path
          d="M0 300 L220 300 L300 180 L420 180 L500 260 L640 260 L720 90 L1000 90"
          fill="none"
          stroke="#ff5a00"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 2.4, ease: 'easeInOut' }}
          style={{ filter: 'drop-shadow(0 0 8px rgba(255,90,0,.8))' }}
        />
      </svg>

      <div className="container-x relative">
        <div className="label">Our edge</div>
        <h2 className="display mt-6 text-[clamp(2.6rem,8.5vw,8rem)]">
          Built for the <span className="text-brand">digital</span> frontline.
        </h2>
        <p className="mt-8 max-w-lg text-mute-2">Speed, precision and relentless iteration. We ship fast, measure honestly and keep pushing until the numbers move.</p>
      </div>

      <motion.div className="display mt-20 whitespace-nowrap text-[clamp(5rem,18vw,16rem)] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.18)]" style={{ x: tx }} aria-hidden>
        Strategy · Creativity · Performance · Strategy · Creativity · Performance
      </motion.div>
    </section>
  )
}
