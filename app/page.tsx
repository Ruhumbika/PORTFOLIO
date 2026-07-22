import { Hero } from "@/components/home/Hero"
import { AboutPreview } from "@/components/home/AboutPreview"
import { ExpertiseSection } from "@/components/home/ExpertiseSection"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"
import { TechnicalCapabilities } from "@/components/home/TechnicalCapabilities"
import { ExperiencePreview } from "@/components/home/ExperiencePreview"
import { ProcessSection } from "@/components/home/ProcessSection"
import { EntrepreneurshipSection } from "@/components/home/EntrepreneurshipSection"
import { InterviewBookingPreview } from "@/components/home/InterviewBookingPreview"
import { QuickHire } from "@/components/home/QuickHire"
import { ContactCTA } from "@/components/home/ContactCTA"
import { TestimonialsSection } from "@/components/home/TestimonialsSection"
import { AsciiTreeSection } from "@/components/home/AsciiTreeSection"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <AsciiTreeSection />
      <ExpertiseSection />
      <FeaturedProjects />
      <TechnicalCapabilities />
      <ExperiencePreview />
      <TestimonialsSection />
      <ProcessSection />
      <EntrepreneurshipSection />
      <InterviewBookingPreview />
      <QuickHire />
      <ContactCTA />
    </>
  )
}
