import { useEffect } from 'react'
import Lenis from 'lenis'

export function useLenis() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const lenis = reduce ? null : new Lenis({ duration: 1.1, smoothWheel: true })
    let raf = 0
    if (lenis) {
      const loop = (t: number) => {
        lenis.raf(t)
        raf = requestAnimationFrame(loop)
      }
      raf = requestAnimationFrame(loop)
    }

    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!a) return
      const id = a.getAttribute('href')!
      if (id.length < 2) return
      const el = document.querySelector(id) as HTMLElement | null
      if (!el) return
      e.preventDefault()
      if (lenis) lenis.scrollTo(el, { offset: -70 })
      else el.scrollIntoView()
    }
    document.addEventListener('click', onClick)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener('click', onClick)
      lenis?.destroy()
    }
  }, [])
}
