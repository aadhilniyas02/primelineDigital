import { company, navLinks } from '../data/site'
import { Logo } from './ui'

const footerServices = ['Web Development', 'SEO', 'Google Ads', 'Social Media', 'Branding', 'AI & Automation']

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black pt-20">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo className="h-16" />
          <p className="mt-6 max-w-sm text-sm text-mute">PrimeLine Digital is a digital marketing, technology and creative agency helping ambitious brands move forward. Digital built to move.</p>
        </div>
        <nav aria-label="Footer" className="md:col-span-2">
          <h3 className="label mb-5">Navigate</h3>
          <ul className="space-y-3 text-sm text-mute-2">
            {navLinks.map((l) => <li key={l.href}><a className="transition-colors hover:text-brand" href={l.href}>{l.label}</a></li>)}
          </ul>
        </nav>
        <div className="md:col-span-2">
          <h3 className="label mb-5">Services</h3>
          <ul className="space-y-3 text-sm text-mute-2">
            {footerServices.map((s) => <li key={s}><a className="transition-colors hover:text-brand" href="#services">{s}</a></li>)}
          </ul>
        </div>
        <div className="md:col-span-3">
          <h3 className="label mb-5">Contact</h3>
          <ul className="space-y-3 text-sm text-mute-2">
            <li><a className="hover:text-brand" href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><a className="hover:text-brand" href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></li>
          </ul>
          <ul className="mt-6 flex flex-wrap gap-2">
            {company.socials.map((s) => (
              <li key={s.label}><a href={s.href} target="_blank" rel="noreferrer" className="border border-white/15 px-3 py-1.5 text-xs text-white/70 transition-colors hover:border-brand hover:text-brand">{s.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x mt-16 flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-xs text-mute sm:flex-row">
        <p>© 2026 PrimeLine Digital. All rights reserved.</p>
        <a href="#home" className="hover:text-brand">Back to top ↑</a>
      </div>
    </footer>
  )
}
