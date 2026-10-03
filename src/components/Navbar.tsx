import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { company, navLinks } from '../data/site'
import { Button, Logo, ease } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const esc = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? 'border-white/10 bg-black/70 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      >
        <div className="container-x flex h-[68px] items-center justify-between sm:h-[72px]">
          <a href="#home" aria-label="PrimeLine Digital — home" className="flex items-center">
            <Logo className="h-9 min-[380px]:h-11 sm:h-12" />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`group relative py-2 font-display text-[0.78rem] font-medium uppercase tracking-[0.14em] transition-colors ${
                  active === l.href ? 'text-white' : 'text-white/60 hover:text-white'
                }`}
              >
                {l.label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-[2px] bg-brand transition-all duration-300 ${
                    active === l.href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button href="#contact" className="!px-5 !py-3">Let&apos;s Talk</Button>
            </div>
            <button
              className="grid h-12 w-12 place-items-center border border-white/20 text-white lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <motion.div className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-brand" style={{ scaleX: progress }} aria-hidden />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto overscroll-contain bg-black px-6 pb-[max(2rem,env(safe-area-inset-bottom))] pt-24 lg:hidden"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease }}
          >
            <nav aria-label="Mobile" className="flex flex-1 flex-col justify-center">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="display flex items-baseline gap-4 border-b border-white/10 py-2.5 text-[clamp(1.75rem,8vw,3rem)] [@media(max-height:560px)]:py-1.5 [@media(max-height:560px)]:text-2xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.5, ease }}
                >
                  <span className="label !text-[0.65rem]">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-6 space-y-5">
              <Button href="#contact" className="w-full" >Start a Project</Button>
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/60">
                {company.socials.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="tap hover:text-brand">{s.label}</a>
                ))}
              </div>
              <a href={`mailto:${company.email}`} className="tap text-sm text-white/60 hover:text-brand">{company.email}</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
