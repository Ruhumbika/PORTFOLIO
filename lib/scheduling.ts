import { site } from '@/data/site'

export interface InterviewRequestDetails {
  date: string
  time: string
  name: string
  email: string
  company: string
  role: string
  message: string
}

export function pad(value: number): string {
  return String(value).padStart(2, '0')
}

export function formatISODate(date: Date): string {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
}

export function parseISODate(value: string): Date {
  const [year, month, day] = value.split('-').map(Number)
  return new Date(year, month - 1, day, 12, 0, 0, 0)
}

export function isWeekday(date: Date): boolean {
  const day = date.getDay()
  return day >= 1 && day <= 5
}

export function isDateAvailable(date: Date): boolean {
  const iso = formatISODate(date)
  return isWeekday(date) && !site.schedule.unavailableDates.includes(iso)
}

export function getAvailableDates(): Date[] {
  const eatNow = new Date(Date.now() + 3 * 60 * 60 * 1000)
  const today = new Date(
    eatNow.getUTCFullYear(),
    eatNow.getUTCMonth(),
    eatNow.getUTCDate(),
    12,
    0,
    0,
    0,
  )

  const dates: Date[] = []
  for (let offset = 0; offset <= site.schedule.bookingWindowDays; offset += 1) {
    const date = new Date(today)
    date.setDate(today.getDate() + offset)
    const iso = formatISODate(date)
    if (isDateAvailable(date) && getSlotsForDate(iso).length > 0) dates.push(date)
  }
  return dates
}

export function getSlotsForDate(dateISO: string): string[] {
  const slots: string[] = []
  const { startHour, endHour, slotMinutes, unavailableSlots } = site.schedule
  const now = new Date()

  for (let minutes = startHour * 60; minutes < endHour * 60; minutes += slotMinutes) {
    const hour = Math.floor(minutes / 60)
    const minute = minutes % 60
    const time = `${pad(hour)}:${pad(minute)}`
    const key = `${dateISO}T${time}`
    if (unavailableSlots.includes(key)) continue

    const utc = eatDateTimeToUTC(dateISO, time)
    const leadMs = site.schedule.minimumLeadHours * 60 * 60 * 1000
    if (utc.getTime() - now.getTime() < leadMs) continue

    slots.push(time)
  }

  return slots
}

export function eatDateTimeToUTC(dateISO: string, time: string): Date {
  const [year, month, day] = dateISO.split('-').map(Number)
  const [hour, minute] = time.split(':').map(Number)
  // East Africa Time is UTC+3 throughout the year.
  return new Date(Date.UTC(year, month - 1, day, hour - 3, minute, 0, 0))
}

export function formatDateLong(dateISO: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(parseISODate(dateISO))
}

export function formatTimeLabel(time: string): string {
  const [hour, minute] = time.split(':').map(Number)
  const date = new Date(2020, 0, 1, hour, minute)
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date)
}

export function formatVisitorLocalTime(dateISO: string, time: string): string {
  const utc = eatDateTimeToUTC(dateISO, time)
  return new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  }).format(utc)
}

export function buildInterviewRequestLinks(details: InterviewRequestDetails) {
  const dateLabel = formatDateLong(details.date)
  const timeLabel = `${formatTimeLabel(details.time)} EAT`
  const localLabel = formatVisitorLocalTime(details.date, details.time)

  const body = [
    'Hi Ruhumbika,',
    '',
    'I would like to request an interview/conversation using the availability shown on your portfolio.',
    '',
    `Proposed date: ${dateLabel}`,
    `Proposed time: ${timeLabel}`,
    `Visitor local time: ${localLabel}`,
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    details.company ? `Company/Organisation: ${details.company}` : null,
    details.role ? `Role/Opportunity: ${details.role}` : null,
    details.message ? `Additional note: ${details.message}` : null,
    '',
    'Please confirm whether this slot works for you.',
  ]
    .filter(Boolean)
    .join('\n')

  const subject = `Interview request: ${dateLabel}, ${timeLabel}`

  return {
    whatsapp: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(body)}`,
    email: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    body,
    subject,
  }
}

export function createCalendarFile(details: InterviewRequestDetails): Blob {
  const start = eatDateTimeToUTC(details.date, details.time)
  const end = new Date(start.getTime() + site.schedule.slotMinutes * 60 * 1000)
  const stamp = new Date()

  const toICS = (date: Date) =>
    date
      .toISOString()
      .replace(/[-:]/g, '')
      .replace(/\.\d{3}Z$/, 'Z')

  const escapeICS = (value: string) =>
    value
      .replace(/\\/g, '\\\\')
      .replace(/\n/g, '\\n')
      .replace(/,/g, '\\,')
      .replace(/;/g, '\\;')

  const description = [
    'Tentative interview request submitted through Ruhumbika’s portfolio.',
    `Requester: ${details.name}`,
    `Email: ${details.email}`,
    details.company ? `Company: ${details.company}` : '',
    details.role ? `Role/Opportunity: ${details.role}` : '',
    details.message ? `Note: ${details.message}` : '',
    'This slot is tentative until Ruhumbika confirms it.',
  ]
    .filter(Boolean)
    .join('\n')

  const ics = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Ruhumbika Portfolio//Interview Request//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:${Date.now()}-${Math.random().toString(36).slice(2)}@ruhumbika.dev`,
    `DTSTAMP:${toICS(stamp)}`,
    `DTSTART:${toICS(start)}`,
    `DTEND:${toICS(end)}`,
    'STATUS:TENTATIVE',
    `SUMMARY:${escapeICS(`Tentative interview with ${site.name}`)}`,
    `DESCRIPTION:${escapeICS(description)}`,
    'LOCATION:Online / details to be confirmed',
    `ORGANIZER;CN=${escapeICS(site.name)}:MAILTO:${site.email}`,
    `ATTENDEE;CN=${escapeICS(details.name)};RSVP=FALSE:MAILTO:${details.email}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')

  return new Blob([ics], { type: 'text/calendar;charset=utf-8' })
}
