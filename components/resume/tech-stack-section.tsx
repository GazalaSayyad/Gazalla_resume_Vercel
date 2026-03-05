import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function TechStackSection() {
  const { techStack } = resumeData

  return (
    <section id="tech" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <AnimatedSection>
        <div className="mb-14">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Expertise
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Technology Stack
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((category, catIndex) => (
          <AnimatedSection key={category.name} delay={catIndex * 100}>
            <div className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-foreground">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-all hover:border-primary/40 hover:text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
