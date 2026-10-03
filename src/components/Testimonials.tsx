import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react'
import { testimonials } from '../data/site'
import { LineReveal, Reveal, SectionLabel, ease } from './ui'

export default function Testimonials() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = testimonials.length
  const t = testimonials[i]

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setI((v) => (v + 1) % n), 6500)
    return () => clearInterval(id)
  }, [paused, n])

  return (
    <section className="section-y bg-ink-1" aria-roledescription="carousel" aria-label="Client testimonials">
      <div className="container-x">
        <SectionLabel index="06">Testimonials</SectionLabel>
        <h2 className="display mt-10 text-[clamp(2.4rem,7vw,6.5rem)]">
          <LineReveal lines={['What our', <span key="c" className="text-brand">clients say</span>]} />
        </h2>

        <div className="mt-16 grid gap-10 lg:grid-cols-12" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="relative min-h-[300px] border border-white/10 bg-black p-6 sm:p-14 lg:col-span-9">
            <Quote className="h-10 w-10 text-brand" aria-hidden />
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease }}
                aria-live="polite"
              >
                <blockquote className="mt-6 font-display text-lg leading-snug min-[400px]:text-xl sm:text-3xl">{t.quote}</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <span className="grid h-12 w-12 place-items-center bg-brand font-display font-bold text-black">{t.name[0]}</span>
                  <span>
                    <span className="block font-semibold">{t.name}</span>
                    <span className="text-sm text-mute">{t.role}, {t.company}</span>
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          <div className="flex items-end justify-between gap-6 lg:col-span-3 lg:flex-col lg:items-start lg:justify-end">
            <div className="display text-6xl">
              {String(i + 1).padStart(2, '0')}
              <span className="text-white/25"> / {String(n).padStart(2, '0')}</span>
            </div>
            <div className="flex gap-3">
              <button aria-label="Previous testimonial" onClick={() => setI((v) => (v - 1 + n) % n)} className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-brand hover:bg-brand hover:text-black">
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button aria-label="Next testimonial" onClick={() => setI((v) => (v + 1) % n)} className="grid h-12 w-12 place-items-center border border-white/25 transition-colors hover:border-brand hover:bg-brand hover:text-black">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/40">Placeholder testimonials — replace with real client feedback.</p>

        <Reveal className="mt-24">
          <div className="label text-center !text-white/50">Trusted by ambitious businesses</div>
          <ul className="mt-8 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }).map((_, k) => (
              <li key={k} className="grid h-24 place-items-center bg-ink-1 font-display text-xs uppercase tracking-[0.2em] text-white/25">
                Your logo
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
