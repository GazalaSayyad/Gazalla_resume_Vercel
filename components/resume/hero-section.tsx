import Image from "next/image"
import { MapPin, Mail, Github, Linkedin, FileText, ArrowDown } from "lucide-react"
import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function HeroSection() {
  const { personal, socials } = resumeData

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] translate-y-1/4 -translate-x-1/4 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-24 lg:pb-28 lg:pt-32">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* Profile Photo */}
          <AnimatedSection delay={0}>
            <div className="group relative shrink-0">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative h-52 w-52 lg:h-64 lg:w-64">
                <Image
                  src={personal.photo}
                  alt={`${personal.name} - ${personal.title}`}
                  width={256}
                  height={256}
                  className="relative rounded-full border-2 border-border object-cover transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-lg group-hover:shadow-primary/10"
                  priority
                />
                {/* Status indicator */}
                <div className="absolute bottom-4 right-4 flex h-5 w-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500">
                  <span className="sr-only">Available for work</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Info */}
          <div className="flex-1 text-center lg:text-left">
            <AnimatedSection delay={100}>
              <p className="mb-3 font-mono text-sm tracking-widest text-primary uppercase">
                {personal.title}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <h1 className="mb-5 text-4xl font-bold tracking-tight text-foreground lg:text-6xl text-balance">
                {personal.name}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
                {personal.summary}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              {/* Contact Pills */}
              <div className="mb-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  {personal.location}
                </span>
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                >
                  <Mail className="h-3.5 w-3.5 text-primary" />
                  {personal.email}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                {socials.github && (
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-4 w-4 text-muted-foreground transition-colors group-hover/btn:text-primary" />
                    GitHub
                  </a>
                )}
                {socials.linkedin && (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-4 w-4 text-muted-foreground transition-colors group-hover/btn:text-primary" />
                    LinkedIn
                  </a>
                )}
                {personal.resumePdfUrl && (
                  <a
                    href={personal.resumePdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
                  >
                    <FileText className="h-4 w-4" />
                    Resume PDF
                  </a>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <AnimatedSection delay={800} className="mt-16 flex justify-center lg:mt-20">
          <a
            href="#experience"
            className="flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
            aria-label="Scroll to experience section"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
