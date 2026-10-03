import { useRef } from 'react'
import { stats } from '../data/site'
import { useCounter } from '../hooks/useCounter'
import { LineReveal, Reveal, SectionLabel } from './ui'

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const n = useCounter(ref, value)
  return (
    <div ref={ref} className="border-t border-white/10 pt-5">
      <div className="display text-5xl text-white sm:text-6xl">
        {n}
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-mute">{label}</div>
    </div>
  )
}

export default function About() {
  return (
    <section id="about" className="section-y bg-ink-1">
      <div className="container-x">
        <SectionLabel index="01">About</SectionLabel>
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <h2 className="display text-[clamp(2.2rem,6vw,5.5rem)] lg:col-span-7">
            <LineReveal lines={["We don't just build digital.", <span key="m" className="text-brand">We build momentum.</span>]} />
          </h2>
          <div className="space-y-6 text-mute-2 lg:col-span-5 lg:pt-4">
            <Reveal>
              <p className="text-lg text-white">
                PrimeLine Digital is a digital growth partner for ambitious brands. We fuse strategy, creativity and technology into one team accountable for one thing: performance.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                From the first positioning workshop to the thousandth lead, we design, build and optimise the digital experiences that move your business forward — and we stay for the long run.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="flex flex-wrap gap-2 pt-2">
                {['Strategy', 'Creativity', 'Technology', 'Performance', 'Long-term growth'].map((t) => (
                  <li key={t} className="border border-white/15 px-3 py-1.5 font-display text-[0.7rem] uppercase tracking-[0.16em] text-white/80">{t}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </div>
    </section>
  )
}
