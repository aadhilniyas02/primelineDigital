import { ArrowUpRight } from 'lucide-react'
import { insights } from '../data/site'
import { LineReveal, Reveal, SectionLabel } from './ui'

export default function Insights() {
  return (
    <section id="insights" className="section-y bg-black">
      <div className="container-x">
        <SectionLabel index="07">Insights</SectionLabel>
        <h2 className="display mt-10 text-[clamp(2.4rem,7vw,6.5rem)]">
          <LineReveal lines={['Field', <span key="n" className="text-brand">notes</span>]} />
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <a href="#contact" className="group flex h-full flex-col justify-between border border-white/10 p-7 transition-colors duration-500 hover:border-brand hover:bg-ink-3 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="label">{a.tag}</span>
                  <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-brand" aria-hidden />
                </div>
                <h3 className="display mt-16 text-2xl leading-tight sm:text-3xl">{a.title}</h3>
                <div className="mt-6 text-xs text-mute">{a.read} · Coming soon</div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
