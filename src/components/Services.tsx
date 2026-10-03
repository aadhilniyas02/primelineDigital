import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../data/site'
import { LineReveal, Reveal, SectionLabel, ease } from './ui'

export default function Services() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id="services" className="section-y bg-black">
      <div className="container-x">
        <SectionLabel index="02">Services</SectionLabel>
        <div className="mt-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <h2 className="display text-[clamp(2.4rem,7vw,6.5rem)]">
            <LineReveal lines={['What', <span key="w" className="text-brand">we do</span>]} />
          </h2>
          <Reveal className="max-w-md">
            <p className="text-mute-2">Eight disciplines, one accountable team. Pick a single service or plug in the full growth engine.</p>
          </Reveal>
        </div>

        <ul className="mt-16 border-t border-white/10">
          {services.map((s, i) => {
            const open = active === i
            return (
              <li key={s.title} className="border-b border-white/10" onMouseEnter={() => window.matchMedia('(hover: hover)').matches && setActive(i)}>
                <motion.div className="relative overflow-hidden" initial={false}>
                  <motion.span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-full origin-left bg-gradient-to-r from-brand/15 via-brand/5 to-transparent"
                    animate={{ scaleX: open ? 1 : 0 }}
                    transition={{ duration: 0.6, ease }}
                  />
                  <button
                    className="relative flex w-full items-center gap-4 py-6 text-left sm:gap-8 sm:py-8"
                    aria-expanded={open}
                    onClick={() => setActive(open ? null : i)}
                    onFocus={() => setActive(i)}
                  >
                    <span className={`display w-12 shrink-0 text-2xl transition-colors duration-300 sm:w-24 sm:text-5xl ${open ? 'text-brand' : 'text-white/25'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`display flex-1 text-xl transition-transform duration-500 sm:text-4xl lg:text-5xl ${open ? 'translate-x-1 sm:translate-x-3' : ''}`}>
                      {s.title}
                    </span>
                    <ArrowUpRight
                      className={`h-6 w-6 shrink-0 transition-all duration-500 sm:h-9 sm:w-9 ${open ? 'rotate-45 text-brand' : 'text-white/40'}`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease }}
                        className="relative overflow-hidden"
                      >
                        <div className="grid gap-6 pb-8 pl-16 sm:pl-32 md:grid-cols-2">
                          <p className="max-w-md text-mute-2">{s.desc}</p>
                          <ul className="flex flex-wrap content-start gap-2">
                            {s.tags.map((t) => (
                              <li key={t} className="border border-brand/50 px-3 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.16em] text-brand">{t}</li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
