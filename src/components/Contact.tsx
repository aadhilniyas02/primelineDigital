import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { budgets, company, serviceOptions } from '../data/site'
import { Button, LineReveal, SectionLabel, ease } from './ui'

type Values = Record<'name' | 'company' | 'email' | 'phone' | 'service' | 'budget' | 'message', string>
const empty: Values = { name: '', company: '', email: '', phone: '', service: '', budget: '', message: '' }

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = 'Enter a valid email address.'
  if (v.phone && !/^[+\d][\d\s().-]{6,}$/.test(v.phone)) e.phone = 'Enter a valid phone number.'
  if (!v.service) e.service = 'Choose a service.'
  if (v.message.trim().length < 10) e.message = 'Tell us a little more (10+ characters).'
  return e
}

const fieldCls = (err?: string) =>
  `w-full border-b bg-transparent py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-brand ${err ? 'border-red-500' : 'border-white/20'}`

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="label !text-white/60">{label}</label>
      {children}
      {error && <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-red-400">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [v, setV] = useState<Values>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({})
  const [sent, setSent] = useState(false)
  const [busy, setBusy] = useState(false)

  const set = (k: keyof Values) => (e: { target: { value: string } }) => {
    setV((p) => ({ ...p, [k]: e.target.value }))
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }))
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(v)
    setErrors(errs)
    if (Object.keys(errs).length) {
      const first = Object.keys(errs)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }
    // No backend is connected yet: wire this up to your API / form service.
    setBusy(true)
    setTimeout(() => {
      setBusy(false)
      setSent(true)
    }, 900)
  }

  const aria = (k: keyof Values) => ({ 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `f-${k}-err` : undefined })

  return (
    <section id="contact" className="section-y bg-ink-1">
      <div className="container-x grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionLabel index="08">Contact</SectionLabel>
          <h2 className="display mt-10 text-[clamp(2.4rem,6vw,5.5rem)]">
            <LineReveal lines={["Let's build", <span key="s" className="text-brand">something great.</span>]} />
          </h2>
          <ul className="mt-12 space-y-5 text-mute-2">
            <li><a className="flex items-center gap-4 hover:text-brand" href={`mailto:${company.email}`}><Mail className="h-5 w-5 text-brand" aria-hidden />{company.email}</a></li>
            <li><a className="flex items-center gap-4 hover:text-brand" href={`tel:${company.phone.replace(/\s/g, '')}`}><Phone className="h-5 w-5 text-brand" aria-hidden />{company.phone}</a></li>
            <li className="flex items-center gap-4"><MapPin className="h-5 w-5 text-brand" aria-hidden />{company.location}</li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3">
            {company.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="border border-white/20 px-4 py-2 font-display text-[0.7rem] uppercase tracking-[0.16em] transition-colors hover:border-brand hover:text-brand">{s.label}</a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="ok"
                role="status"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="flex h-full min-h-[420px] flex-col items-start justify-center border border-brand/50 bg-black p-10"
              >
                <CheckCircle2 className="h-12 w-12 text-brand" aria-hidden />
                <h3 className="display mt-6 text-4xl">Request received.</h3>
                <p className="mt-4 max-w-md text-mute-2">Thanks, {v.name.split(' ')[0]}. Your project details are ready. We&apos;ll review them and get back to you at {v.email}.</p>
                <p className="mt-4 text-xs text-white/40">Demo mode: no server is connected yet, so nothing has actually been transmitted.</p>
                <button className="mt-8 font-display text-xs uppercase tracking-[0.16em] text-brand underline-offset-4 hover:underline" onClick={() => { setSent(false); setV(empty) }}>Send another request</button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} noValidate className="grid gap-8 sm:grid-cols-2" exit={{ opacity: 0 }}>
                <Field id="f-name" label="Name *" error={errors.name}>
                  <input id="f-name" autoComplete="name" className={fieldCls(errors.name)} value={v.name} onChange={set('name')} placeholder="Your name" {...aria('name')} />
                </Field>
                <Field id="f-company" label="Company">
                  <input id="f-company" autoComplete="organization" className={fieldCls()} value={v.company} onChange={set('company')} placeholder="Company name" />
                </Field>
                <Field id="f-email" label="Email *" error={errors.email}>
                  <input id="f-email" type="email" autoComplete="email" className={fieldCls(errors.email)} value={v.email} onChange={set('email')} placeholder="you@company.com" {...aria('email')} />
                </Field>
                <Field id="f-phone" label="Phone" error={errors.phone}>
                  <input id="f-phone" type="tel" autoComplete="tel" className={fieldCls(errors.phone)} value={v.phone} onChange={set('phone')} placeholder="+1 000 000 0000" {...aria('phone')} />
                </Field>
                <Field id="f-service" label="Service *" error={errors.service}>
                  <select id="f-service" className={`${fieldCls(errors.service)} [&>option]:bg-black`} value={v.service} onChange={set('service')} {...aria('service')}>
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
                <Field id="f-budget" label="Budget">
                  <select id="f-budget" className={`${fieldCls()} [&>option]:bg-black`} value={v.budget} onChange={set('budget')}>
                    <option value="">Select a range</option>
                    {budgets.map((b) => <option key={b}>{b}</option>)}
                  </select>
                </Field>
                <div className="sm:col-span-2">
                  <Field id="f-message" label="Message *" error={errors.message}>
                    <textarea id="f-message" rows={4} className={`${fieldCls(errors.message)} resize-none`} value={v.message} onChange={set('message')} placeholder="Tell us about your project and goals" {...aria('message')} />
                  </Field>
                </div>
                <div className="sm:col-span-2">
                  <Button type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send project request'}</Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
