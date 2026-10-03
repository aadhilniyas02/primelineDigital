import { reasons } from '../data/site'
import { LineReveal, Reveal, SectionLabel } from './ui'

export default function WhyPrimeLine() {
  return (
    <section className="section-y relative overflow-hidden bg-ink-1">
      <div className="container-x">
        <SectionLabel index="03">Why PrimeLine</SectionLabel>
        <h2 className="display mt-10 text-[clamp(2.4rem,7vw,6.5rem)]">
          <LineReveal lines={['Why', <span key="p" className="text-brand">Prime Line?</span>]} />
        </h2>

        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 0.08} className="group relative bg-ink-1">
              <div className="relative h-full overflow-hidden p-8 transition-colors duration-500 hover:bg-ink-3 sm:p-10">
                <span className="absolute left-0 top-0 h-px w-0 bg-brand transition-all duration-700 group-hover:w-full" aria-hidden />
                <div className="display text-6xl text-white/10 transition-colors duration-500 group-hover:text-brand sm:text-7xl">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="display mt-10 text-2xl sm:text-3xl">{r.title}</h3>
                <p className="mt-3 text-mute">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
