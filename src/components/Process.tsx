import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent } from 'framer-motion'
import { useState } from 'react'
import { process } from '../data/site'
import { LineReveal, SectionLabel } from './ui'

export default function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })
  const [step, setStep] = useState(0)
  useMotionValueEvent(smooth, 'change', (v) => setStep(Math.min(process.length - 1, Math.max(0, Math.round(v * (process.length - 1) + 0.15)))))
  const h = useTransform(smooth, [0, 1], ['0%', '100%'])

  return (
    <section id="process" className="section-y bg-black">
      <div className="container-x">
        <SectionLabel index="04">Process</SectionLabel>
        <h2 className="display mt-10 text-[clamp(2.4rem,7vw,6.5rem)]">
          <LineReveal lines={['How', <span key="w" className="text-brand">we work</span>]} />
        </h2>

        <div ref={ref} className="relative mt-20">
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 sm:left-[27px]" aria-hidden>
            <motion.div className="w-full bg-brand shadow-[0_0_14px_rgba(255,90,0,0.8)]" style={{ height: h }} />
          </div>
          <ol className="space-y-14 sm:space-y-20">
            {process.map((p, i) => {
              const on = i <= step
              return (
                <li key={p.title} className="relative flex gap-6 sm:gap-12">
                  <span
                    className={`relative z-10 grid h-10 w-10 shrink-0 place-items-center border font-display text-sm font-bold transition-all duration-500 sm:h-14 sm:w-14 sm:text-base ${
                      on ? 'border-brand bg-brand text-black' : 'border-white/20 bg-black text-white/40'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={`transition-all duration-500 ${on ? 'opacity-100' : 'opacity-30'}`}>
                    <h3 className={`display text-4xl sm:text-6xl lg:text-7xl ${on && i === step ? 'text-brand' : ''}`}>{p.title}</h3>
                    <p className="mt-3 max-w-md text-mute-2">{p.desc}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
