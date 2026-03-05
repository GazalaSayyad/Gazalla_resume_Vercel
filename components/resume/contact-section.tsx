import { Mail, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react"
import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function ContactSection() {
  const { personal, socials } = resumeData

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <AnimatedSection>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-14">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
              <Send className="h-6 w-6 text-primary" />
            </div>
            <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
              Get in Touch
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground lg:text-4xl text-balance">
              {"Let's Work Together"}
            </h2>
            <p className="mb-10 text-muted-foreground leading-relaxed">
              {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!"}
            </p>

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary px-6 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
              >
                <Mail className="h-4 w-4 text-primary" />
                {personal.email}
              </a>
              <span className="flex items-center gap-2.5 rounded-xl border border-border bg-secondary px-6 py-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                {personal.location}
              </span>
            </div>

            <div className="flex items-center justify-center gap-3">
              {socials.github && (
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary hover:shadow-md hover:shadow-primary/10"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </AnimatedSection>
    </section>
  )
}
