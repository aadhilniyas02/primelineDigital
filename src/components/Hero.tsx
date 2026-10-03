import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Zap } from 'lucide-react'
import HeroCanvas from './HeroCanvas'
import { Button, LineReveal, Logo, ease } from './ui'

export default function Hero() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 140])
  const bgY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60])
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={ref} className="noise relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-black pb-24 pt-28 sm:pt-32 [@media(max-height:500px)]:pt-24">
      <motion.div className="absolute inset-0 -z-10" style={{ y: bgY }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
        <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]" />
        <HeroCanvas />
        <div className="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[140px]" />
        <motion.div
          className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-brand to-transparent opacity-60"
          animate={reduce ? undefined : { top: ['0%', '100%'] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'linear' }}
        />
      </motion.div>

      <motion.div className="container-x" style={{ y, opacity: fade }}>
        <motion.div
          className="mb-8 flex items-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <Logo className="h-12 sm:h-16" />
        </motion.div>

        <div className="label mb-6 flex items-start gap-2 !tracking-[0.16em] sm:items-center sm:!tracking-[0.22em]">
          <Zap className="h-3.5 w-3.5" aria-hidden /> Digital marketing · Technology · Creative
        </div>

        <h1 className="display text-[clamp(2.1rem,10.5vw,9rem)] sm:text-[clamp(2.6rem,9.2vw,9rem)]">
          <LineReveal inView={false} delay={0.45} lines={['We create', <span key="a">digital <span className="text-brand">experiences</span></span>, 'that move business.']} />
        </h1>

        <motion.p
          className="mt-8 max-w-xl text-base text-mute-2 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease }}
        >
          Strategy, design, technology and digital growth — engineered to help ambitious brands move forward.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.15, ease }}
        >
          <Button href="#contact" className="max-[420px]:w-full">Start a Project</Button>
          <Button href="#work" variant="secondary" arrow="up" className="max-[420px]:w-full">Explore Our Work</Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/50 hover:text-brand sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <span className="label !text-white/50">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-brand"
            animate={reduce ? undefined : { y: [-16, 48] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
