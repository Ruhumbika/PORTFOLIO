'use client'

import { useRef, useState, type ChangeEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { site } from '@/data/site'

type Fields = {
  name: string
  email: string
  company: string
  message: string
}

type Errors = Partial<Record<keyof Fields, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initial: Fields = { name: '', email: '', company: '', message: '' }

export function ContactForm() {
  const reduce = useReducedMotion()
  const [values, setValues] = useState<Fields>(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [shakeKey, setShakeKey] = useState(0)
  const [sent, setSent] = useState(false)
  const firstErrorRef = useRef<keyof Fields | null>(null)

  function validate(v: Fields): Errors {
    const next: Errors = {}
    if (!v.name.trim()) next.name = 'Please add your name.'
    if (!v.email.trim()) next.email = 'Please add your email.'
    else if (!EMAIL_RE.test(v.email.trim())) next.email = 'That email looks off. Mind checking it?'
    if (!v.message.trim()) next.message = 'Add a short note so I know how to help.'
    return next
  }

  function update(key: keyof Fields, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const next = validate(values)
    firstErrorRef.current = (Object.keys(next)[0] as keyof Fields) ?? null
    setErrors(next)
    if (Object.keys(next).length > 0) {
      setShakeKey((k) => k + 1) // retrigger shake
      window.requestAnimationFrame(() => {
        if (firstErrorRef.current) {
          document.getElementById(firstErrorRef.current)?.focus()
        }
      })
      return
    }

    // Build a ready-to-send email addressed to me, pre-filled with the recruiter's message.
    const subject = `Quick hire enquiry from ${values.name}${
      values.company ? ` · ${values.company}` : ''
    }`
    const body = [
      values.message.trim(),
      '',
      'Contact details',
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.company ? `Company: ${values.company}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailto
    setSent(true)
  }

  const fields: {
    key: keyof Fields
    label: string
    type: string
    placeholder: string
    required: boolean
    autoComplete?: string
    textarea?: boolean
  }[] = [
    { key: 'name', label: 'Your name', type: 'text', placeholder: 'Jane Recruiter', required: true, autoComplete: 'name' },
    { key: 'email', label: 'Email', type: 'email', placeholder: 'jane@company.com', required: true, autoComplete: 'email' },
    { key: 'company', label: 'Company / team', type: 'text', placeholder: 'Acme Inc. (optional)', required: false, autoComplete: 'organization' },
    {
      key: 'message',
      label: 'Message',
      type: 'text',
      placeholder: 'Hi Ruhumbika, we have a role/project that fits your full-stack + AI focus…',
      required: true,
      textarea: true,
    },
  ]

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {fields.map((f) => {
        const hasError = Boolean(errors[f.key])
        return (
          <motion.div
            key={f.key}
            // Shake only the field(s) currently in error, re-triggered per submit attempt.
            animate={
              !reduce && hasError && firstErrorRef.current === f.key
                ? { x: [0, -8, 8, -6, 6, -3, 0] }
                : { x: 0 }
            }
            transition={{ duration: 0.4 }}
            {...({ 'data-shake': shakeKey } as Record<string, number>)}
            className="flex flex-col gap-2"
          >
            <label
              htmlFor={f.key}
              className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
            >
              <span>
                {f.label}
                {f.required && <span className="ml-1 text-primary">*</span>}
              </span>
              {hasError && (
                <span id={`${f.key}-error`} className="inline-flex items-center gap-1 normal-case tracking-normal text-primary">
                  <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {errors[f.key]}
                </span>
              )}
            </label>
            {f.textarea ? (
              <textarea
                id={f.key}
                name={f.key}
                value={values[f.key]}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                rows={5}
                required={f.required}
                maxLength={2000}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${f.key}-error` : undefined}
                className={`resize-y rounded-lg border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary ${
                  hasError ? 'border-primary' : 'border-border'
                }`}
              />
            ) : (
              <input
                id={f.key}
                name={f.key}
                type={f.type}
                value={values[f.key]}
                onChange={(e: ChangeEvent<HTMLInputElement>) => update(f.key, e.target.value)}
                placeholder={f.placeholder}
                required={f.required}
                autoComplete={f.autoComplete}
                maxLength={f.key === 'email' ? 254 : 120}
                aria-invalid={hasError}
                aria-describedby={hasError ? `${f.key}-error` : undefined}
                className={`h-11 rounded-lg border bg-card px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary ${
                  hasError ? 'border-primary' : 'border-border'
                }`}
              />
            )}
          </motion.div>
        )
      })}

      <motion.button
        type="submit"
        whileHover={reduce ? undefined : { y: -2 }}
        whileTap={reduce ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:brightness-110"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        Send message
      </motion.button>

      {sent && (
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-foreground"
          role="status"
        >
          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          Your email app just opened with everything filled in. Hit send and I&apos;ll reply shortly.
        </motion.p>
      )}
    </form>
  )
}
