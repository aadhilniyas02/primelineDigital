import { useRef } from 'react'
import type { ReactNode, MouseEvent } from 'react'
import { motion, useInView, useReducedMotion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'

export const ease = [0.16, 1, 0.3, 1] as const

export function Logo({ className = 'h-10' }: { className?: string }) {
  // Logo asset has a black background; "screen" blend makes it sit cleanly on any dark surface.
  return (
    <img
      src={logo}
      alt="PrimeLine Digital"
      width={1240}
      height={350}
      className={`${className} w-auto select-none`}
      style={{ mixBlendMode: 'screen' }}
      draggable={false}
    />
  )
}

export function Reveal({ children, delay = 0, className = '', y = 32 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduce ? 0.2 : 0.8, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  )
}

/** Line-by-line masked headline reveal. */
function Line({ children, className, delay, inView }: { children: ReactNode; className: string; delay: number; inView: boolean }) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  // Observe the (unclipped) mask wrapper, not the translated child, so the reveal fires reliably.
  const seen = useInView(ref, { once: true, margin: '-60px' })
  const go = inView ? seen : true
  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: reduce ? 0 : '110%', opacity: reduce ? 0 : 1 }}
        animate={go ? { y: 0, opacity: 1 } : undefined}
        transition={{ duration: reduce ? 0.3 : 0.9, delay: reduce ? 0 : delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export function LineReveal({ lines, className = '', delay = 0, inView = true }: { lines: ReactNode[]; className?: string; delay?: number; inView?: boolean }) {
  return (
    <>
      {lines.map((line, i) => (
        <Line key={i} className={className} delay={delay + i * 0.1} inView={inView}>
          {line}
        </Line>
      ))}
    </>
  )
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="label flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-brand" />
      <span>{index}</span>
      <span className="text-white/50">/</span>
      <span className="text-white/70">{children}</span>
    </div>
  )
}

type BtnProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit'
  disabled?: boolean
  arrow?: 'right' | 'up'
  className?: string
}

/** Magnetic button with arrow micro-interaction. */
export function Button({ children, href, onClick, variant = 'primary', type = 'button', disabled, arrow = 'right', className = '' }: BtnProps) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement | null>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18 })
  const sy = useSpring(y, { stiffness: 220, damping: 18 })

  const move = (e: MouseEvent) => {
    if (reduce || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * 0.25)
    y.set((e.clientY - (r.top + r.height / 2)) * 0.25)
  }
  const leave = () => {
    x.set(0)
    y.set(0)
  }

  const base =
    'group relative inline-flex items-center justify-center gap-3 px-7 py-4 font-display text-[0.8rem] font-bold uppercase tracking-[0.14em] transition-colors duration-300 border disabled:opacity-50 disabled:pointer-events-none'
  const styles =
    variant === 'primary'
      ? 'bg-brand text-black border-brand hover:bg-black hover:text-brand'
      : 'bg-transparent text-white border-white/40 hover:border-brand hover:text-brand'
  const Arrow = arrow === 'up' ? ArrowUpRight : ArrowRight
  const inner = (
    <>
      <span>{children}</span>
      <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5 group-hover:-translate-y-0 group-hover:rotate-0" aria-hidden />
    </>
  )

  const common = {
    className: `${base} ${styles} ${className}`,
    onMouseMove: move,
    onMouseLeave: leave,
    style: { x: sx, y: sy },
  }

  if (href) {
    return (
      <motion.a ref={ref as React.Ref<HTMLAnchorElement>} href={href} {...common}>
        {inner}
      </motion.a>
    )
  }
  return (
    <motion.button ref={ref as React.Ref<HTMLButtonElement>} type={type} onClick={onClick} disabled={disabled} {...common}>
      {inner}
    </motion.button>
  )
}
