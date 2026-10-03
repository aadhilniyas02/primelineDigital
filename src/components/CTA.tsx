import { motion, useReducedMotion } from 'framer-motion'
import { Button, LineReveal } from './ui'

export default function CTA() {
  const reduce = useReducedMotion()
  return (
    <section className="noise relative isolate overflow-hidden bg-black py-28 sm:py-44">
      <motion.div
        aria-hidden
        className="absolute left-1/2 top-1/2 -z-10 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/40"
        animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div aria-hidden className="absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />

      <div className="container-x text-center">
        <h2 className="display text-[clamp(2.6rem,9vw,8.5rem)]">
          <LineReveal lines={['Ready to move', <span key="y" className="text-brand">your business</span>, 'forward?']} />
        </h2>
        <p className="mx-auto mt-8 max-w-md text-lg text-mute-2">Let&apos;s build something that makes an impact.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="#contact">Start a Project</Button>
          <Button href="#contact" variant="secondary">Talk to us</Button>
        </div>
      </div>
    </section>
  )
}
