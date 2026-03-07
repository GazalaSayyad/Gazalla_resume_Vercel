import { Navigation } from "@/components/resume/navigation"
import { HeroSection } from "@/components/resume/hero-section"
import { ExperienceSection } from "@/components/resume/experience-section"
import { ProjectsSection } from "@/components/resume/projects-section"
import { EducationSection } from "@/components/resume/education-section"
import { TechStackSection } from "@/components/resume/tech-stack-section"
import { ContactSection } from "@/components/resume/contact-section"
import { Footer } from "@/components/resume/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <TechStackSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
