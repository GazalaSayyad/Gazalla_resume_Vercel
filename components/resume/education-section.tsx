import { GraduationCap, Award, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function EducationSection() {
  const { education, certifications } = resumeData

  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <AnimatedSection>
        <div className="mb-14">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Background
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Education & Certifications
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid gap-12 lg:grid-cols-5">
        {/* Education */}
        <div className="lg:col-span-3">
          <AnimatedSection>
            <div className="mb-8 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <GraduationCap className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-5">
            {education.map((item, index) => (
              <AnimatedSection key={item.degree} delay={index * 100}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                    <span className="font-mono text-xs tracking-wider text-primary">
                      {item.period}
                    </span>
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs"
                    >
                      GPA: {item.gpa}
                    </Badge>
                  </div>
                  <h4 className="mb-1 text-base font-semibold text-foreground">
                    {item.degree}
                  </h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {item.school}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-2">
          <AnimatedSection>
            <div className="mb-8 flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <Award className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                Certifications
              </h3>
            </div>
          </AnimatedSection>

          <div className="flex flex-col gap-3">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 80}>
                <div className="group flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-foreground leading-snug">
                      {cert.name}
                    </h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {cert.issuer}
                    </p>
                    <p className="mt-1 font-mono text-xs text-primary">
                      {cert.date}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
