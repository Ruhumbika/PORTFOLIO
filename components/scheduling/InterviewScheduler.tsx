'use client'

import { useMemo, useState, type ChangeEvent } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  CalendarDays,
  Check,
  Clock3,
  Download,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
} from 'lucide-react'
import { Whatsapp } from '@/components/shared/BrandIcons'
import { site } from '@/data/site'
import {
  buildInterviewRequestLinks,
  createCalendarFile,
  formatDateLong,
  formatISODate,
  formatTimeLabel,
  formatVisitorLocalTime,
  getAvailableDates,
  getSlotsForDate,
  type InterviewRequestDetails,
} from '@/lib/scheduling'
import { cn } from '@/lib/utils'

interface FormFields {
  name: string
  email: string
  company: string
  role: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormFields, string>>

const initialFields: FormFields = {
  name: '',
  email: '',
  company: '',
  role: '',
  message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function dateKey(date: Date) {
  return formatISODate(date)
}

export function InterviewScheduler() {
  const reduce = useReducedMotion()
  const availableDates = useMemo(() => getAvailableDates(), [])
  const [selectedDate, setSelectedDate] = useState(
    availableDates[0] ? dateKey(availableDates[0]) : '',
  )
  const [selectedTime, setSelectedTime] = useState('')
  const [fields, setFields] = useState<FormFields>(initialFields)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [notice, setNotice] = useState('')

  const visibleDates = availableDates.slice(0, 30)
  const slots = useMemo(
    () => (selectedDate ? getSlotsForDate(selectedDate) : []),
    [selectedDate],
  )

  const requestDetails: InterviewRequestDetails | null =
    selectedDate && selectedTime
      ? { date: selectedDate, time: selectedTime, ...fields }
      : null

  function updateField(key: keyof FormFields, value: string) {
    setFields((current) => ({ ...current, [key]: value }))
    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }))
    }
  }

  function validate(): boolean {
    const next: FieldErrors = {}
    if (!fields.name.trim()) next.name = 'Add your name.'
    if (!fields.email.trim()) next.email = 'Add your email.'
    else if (!EMAIL_RE.test(fields.email.trim())) {
      next.email = 'Enter a valid email address.'
    }
    if (!selectedDate || !selectedTime) {
      setNotice('Select an available date and time before sending the request.')
    } else {
      setNotice('')
    }
    setErrors(next)
    return Object.keys(next).length === 0 && Boolean(selectedDate && selectedTime)
  }

  function openRequest(channel: 'whatsapp' | 'email') {
    if (!validate() || !requestDetails) return
    const links = buildInterviewRequestLinks(requestDetails)
    window.open(links[channel], '_blank', 'noopener,noreferrer')
    setNotice(
      `Your ${channel === 'whatsapp' ? 'WhatsApp' : 'email'} request is pre-filled. Send it to complete the interview request.`,
    )
  }

  async function copyRequest() {
    if (!validate() || !requestDetails) return
    const { body } = buildInterviewRequestLinks(requestDetails)

    try {
      await navigator.clipboard.writeText(body)
      setNotice('Interview request copied to your clipboard.')
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = body
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      textArea.remove()
      setNotice('Interview request copied to your clipboard.')
    }
  }

  function downloadHold() {
    if (!validate() || !requestDetails) return
    const blob = createCalendarFile(requestDetails)
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = `tentative-interview-${requestDetails.date}-${requestDetails.time.replace(':', '')}.ics`
    document.body.appendChild(link)
    link.click()
    link.remove()
    URL.revokeObjectURL(url)
    setNotice('Tentative calendar hold downloaded. The slot still needs confirmation.')
  }

  return (
    <section className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="grid lg:grid-cols-[0.88fr_1.12fr]">
        <div className="border-b border-border p-5 sm:p-7 lg:border-b-0 lg:border-r">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                Interview availability
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                Pick a suitable weekday
              </h2>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-xl border border-border bg-background/30 p-4">
              <span className="flex items-center gap-2 text-sm font-medium">
                <Clock3 className="h-4 w-4 text-primary" aria-hidden="true" />
                {site.schedule.weekdayLabel}
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                {formatTimeLabel(`${String(site.schedule.startHour).padStart(2, '0')}:00`)}–
                {formatTimeLabel(`${String(site.schedule.endHour).padStart(2, '0')}:00`)}
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background/30 p-4">
              <span className="flex items-center gap-2 text-sm font-medium">
                <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                Time zone
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                {site.schedule.timeZoneLabel}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                Available dates
              </h3>
              <span className="text-xs text-muted-foreground">Next 6 weeks</span>
            </div>
            <div className="grid grid-cols-5 gap-2 sm:grid-cols-7 lg:grid-cols-5 xl:grid-cols-7">
              {visibleDates.map((date) => {
                const iso = dateKey(date)
                const active = iso === selectedDate
                const weekday = new Intl.DateTimeFormat('en-GB', {
                  weekday: 'short',
                }).format(date)
                return (
                  <motion.button
                    key={iso}
                    type="button"
                    onClick={() => {
                      setSelectedDate(iso)
                      setSelectedTime('')
                      setNotice('')
                    }}
                    whileHover={reduce ? undefined : { y: -2 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    aria-pressed={active}
                    aria-label={`Select ${formatDateLong(iso)}`}
                    className={cn(
                      'flex min-h-16 flex-col items-center justify-center rounded-lg border px-1 py-2 text-center transition-colors',
                      active
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background/30 hover:border-primary/60',
                    )}
                  >
                    <span
                      className={cn(
                        'font-mono text-[9px] uppercase tracking-[0.08em]',
                        active ? 'text-primary-foreground/75' : 'text-muted-foreground',
                      )}
                    >
                      {weekday}
                    </span>
                    <span className="mt-0.5 text-base font-semibold">{date.getDate()}</span>
                    <span
                      className={cn(
                        'text-[10px]',
                        active ? 'text-primary-foreground/75' : 'text-muted-foreground',
                      )}
                    >
                      {new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(date)}
                    </span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              Available times
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              {slots.length > 0 ? (
                slots.map((time) => {
                  const active = selectedTime === time
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => {
                        setSelectedTime(time)
                        setNotice('')
                      }}
                      aria-pressed={active}
                      className={cn(
                        'rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors',
                        active
                          ? 'border-primary bg-primary/15 text-primary'
                          : 'border-border bg-background/30 text-foreground hover:border-primary/60',
                      )}
                    >
                      {formatTimeLabel(time)}
                    </button>
                  )
                })
              ) : (
                <p className="col-span-full rounded-lg border border-dashed border-border p-4 text-sm text-muted-foreground">
                  No remaining slots on this date. Choose another weekday.
                </p>
              )}
            </div>
          </div>

          {selectedDate && selectedTime ? (
            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="flex items-start gap-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {formatDateLong(selectedDate)} at {formatTimeLabel(selectedTime)} EAT
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    In your device time zone: {formatVisitorLocalTime(selectedDate, selectedTime)}
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        <div className="p-5 sm:p-7">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
            Request the interview
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Tell me who I’ll be meeting
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Your selected slot will be inserted into a ready-to-send WhatsApp message or email. No booking is confirmed until I reply.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field
              id="interview-name"
              label="Name"
              value={fields.name}
              error={errors.name}
              required
              placeholder="Your full name"
              onChange={(value) => updateField('name', value)}
            />
            <Field
              id="interview-email"
              label="Email"
              value={fields.email}
              error={errors.email}
              required
              type="email"
              placeholder="you@company.com"
              onChange={(value) => updateField('email', value)}
            />
            <Field
              id="interview-company"
              label="Company / organisation"
              value={fields.company}
              placeholder="Optional"
              onChange={(value) => updateField('company', value)}
            />
            <Field
              id="interview-role"
              label="Role / opportunity"
              value={fields.role}
              placeholder="Graduate role, internship, project…"
              onChange={(value) => updateField('role', value)}
            />
          </div>

          <label className="mt-4 flex flex-col gap-2" htmlFor="interview-message">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Additional note
            </span>
            <textarea
              id="interview-message"
              rows={4}
              value={fields.message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => updateField('message', event.target.value)}
              placeholder="Share any interview agenda, meeting link preference or context."
              className="resize-y rounded-lg border border-border bg-background/30 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </label>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => openRequest('whatsapp')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
            >
              <Whatsapp className="h-4 w-4" aria-hidden="true" />
              Request via WhatsApp
            </button>
            <button
              type="button"
              onClick={() => openRequest('email')}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-5 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Request via Email
            </button>
          </div>

          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={copyRequest}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <UserRound className="h-4 w-4" aria-hidden="true" />
              Copy request details
            </button>
            <button
              type="button"
              onClick={downloadHold}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-4 text-sm text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download tentative hold
            </button>
          </div>

          {notice ? (
            <p
              role="status"
              className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm leading-relaxed text-foreground"
            >
              {notice}
            </p>
          ) : null}

          <div className="mt-6 flex items-start gap-3 border-t border-border pt-5 text-xs leading-relaxed text-muted-foreground">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p>
              The portfolio does not store visitor details or create a confirmed calendar event. It only prepares a request for you to send directly by WhatsApp or email.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

interface FieldProps {
  id: string
  label: string
  value: string
  placeholder: string
  onChange: (value: string) => void
  error?: string
  required?: boolean
  type?: 'text' | 'email'
}

function Field({
  id,
  label,
  value,
  placeholder,
  onChange,
  error,
  required,
  type = 'text',
}: FieldProps) {
  return (
    <label className="flex flex-col gap-2" htmlFor={id}>
      <span className="flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
        <span>
          {label}
          {required ? <span className="ml-1 text-primary">*</span> : null}
        </span>
        {error ? <span className="normal-case tracking-normal text-primary">{error}</span> : null}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={cn(
          'h-11 rounded-lg border bg-background/30 px-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary',
          error ? 'border-primary' : 'border-border',
        )}
      />
    </label>
  )
}
