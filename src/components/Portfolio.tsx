import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { categories, featured, projects } from '../data/site'
import type { Category } from '../data/site'
import ProjectArt from './ProjectArt'
import { LineReveal, Reveal, SectionLabel, ease } from './ui'

export default function Portfolio() {
  const [filter, setFilter] = useState<'All' | Category>('All')
  const list = projects.filter((p) => filter === 'All' || p.category === filter)

  return (
    <section id="work" className="section-y bg-ink-1">
      <div className="container-x">
        <SectionLabel index="05">Work</SectionLabel>
        <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display text-[clamp(2.4rem,7vw,6.5rem)]">
            <LineReveal lines={['Selected', <span key="w" className="text-brand">work</span>]} />
          </h2>
          <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={`tap border px-4 py-2 font-display text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  filter === c ? 'border-brand bg-brand text-black' : 'border-white/20 text-white/70 hover:border-brand hover:text-brand'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-mute">Demo projects shown for layout. Replace with real client work in <code className="text-white/70">src/data/site.ts</code>.</p>

        <motion.ul layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease }}
                className={i === 0 && list.length % 2 === 1 ? 'md:col-span-2' : ''}
              >
                <article className="group relative block overflow-hidden border border-white/10 bg-black" data-cursor="View">
                  <div className={`overflow-hidden ${i === 0 && list.length % 2 === 1 ? 'aspect-[4/5] sm:aspect-[4/3] md:aspect-[16/8]' : 'aspect-[4/5] sm:aspect-[4/3]'}`}>
                    <div className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-110">
                      <ProjectArt variant={p.variant} />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute left-0 top-0 h-[3px] w-0 bg-brand transition-all duration-700 group-hover:w-full" aria-hidden />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-8">
                    <div className="transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="label">{p.category} · {p.industry}</div>
                      <h3 className="display mt-2 text-2xl sm:text-4xl">{p.client}</h3>
                      <p className="mt-2 max-w-sm text-sm text-mute-2">{p.desc}</p>
                      <div className="mt-3 text-xs text-white/50">{p.services.join(' · ')}</div>
                    </div>
                    <span className="grid h-12 w-12 shrink-0 place-items-center border border-white/30 transition-all duration-500 group-hover:border-brand group-hover:bg-brand group-hover:text-black">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45" aria-hidden />
                    </span>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {/* Featured case study */}
        <Reveal className="mt-24">
          <div className="grid overflow-hidden border border-white/10 bg-black lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[480px]">
              <ProjectArt variant={0} />
              <div className="label absolute left-5 top-5 bg-black/70 px-3 py-1.5 backdrop-blur">Featured · Demo</div>
            </div>
            <div className="flex flex-col justify-between gap-10 p-8 sm:p-12">
              <dl className="space-y-5">
                <div>
                  <dt className="label">Client</dt>
                  <dd className="display mt-1 text-3xl sm:text-4xl">{featured.client}</dd>
                </div>
                <div>
                  <dt className="label">Category</dt>
                  <dd className="mt-1 text-mute-2">{featured.category}</dd>
                </div>
                <div>
                  <dt className="label">Services</dt>
                  <dd className="mt-1 text-mute-2">{featured.services.join(' · ')}</dd>
                </div>
              </dl>
              <div>
                <div className="label mb-4">Results</div>
                <div className="grid grid-cols-3 gap-4">
                  {featured.metrics.map((m) => (
                    <div key={m.label} className="border-t border-brand pt-3">
                      <div className="display text-3xl text-white sm:text-4xl">{m.value}</div>
                      <div className="mt-1 text-xs text-mute">{m.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs text-white/40">{featured.note}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
