import { site } from '@/data/site'

/**
 * Builds pre-filled outreach links for inbound hiring conversations.
 * WhatsApp and email open the visitor's native apps with a ready-to-send
 * message, while schedule points to the portfolio's interview availability.
 */
export function getHireLinks() {
  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    site.hire.whatsappTemplate,
  )}`

  const email = `mailto:${site.email}?subject=${encodeURIComponent(
    site.hire.emailSubject,
  )}&body=${encodeURIComponent(site.hire.emailBody)}`

  return {
    whatsapp,
    email,
    linkedin: site.linkedin,
    schedule: '/availability',
  }
}
