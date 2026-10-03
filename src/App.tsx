import { useLenis } from './hooks/useLenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import WhyPrimeLine from './components/WhyPrimeLine'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Frontline from './components/Frontline'
import Testimonials from './components/Testimonials'
import Insights from './components/Insights'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  useLenis()
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:bg-brand focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyPrimeLine />
        <Process />
        <Portfolio />
        <Frontline />
        <Testimonials />
        <Insights />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
