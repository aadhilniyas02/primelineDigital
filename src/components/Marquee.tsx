import { Zap } from 'lucide-react'
import { marqueeItems } from '../data/site'

export default function Marquee() {
  const row = [...marqueeItems, ...marqueeItems]
  return (
    <section aria-label="Capabilities" className="overflow-hidden border-y border-white/10 bg-black py-6 sm:py-8">
      <div className="marquee-track flex items-center">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
            {row.map((item, i) => (
              <li key={i} className="flex items-center">
                <span className={`display px-6 text-3xl sm:px-10 sm:text-5xl ${i % 2 ? 'text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.6)]' : 'text-white'}`}>{item}</span>
                <Zap className="h-5 w-5 shrink-0 text-brand sm:h-7 sm:w-7" aria-hidden />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
