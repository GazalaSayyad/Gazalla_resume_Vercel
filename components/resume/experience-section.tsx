"use client"

import { Briefcase, ArrowUpRight } from "lucide-react"
import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function ExperienceSection() {
  const { experience } = resumeData

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <AnimatedSection>
        <div className="mb-14">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Career
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Work Experience
          </h2>
        </div>
      </AnimatedSection>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-[140px] md:block" />

        <div className="flex flex-col gap-2">
          {experience.map((job, index) => (
            <AnimatedSection key={`${job.company}-${job.role}`} delay={index * 100}>
              <div className="group relative grid gap-4 rounded-xl p-5 transition-all hover:bg-card/80 md:grid-cols-[140px_1fr] md:gap-8">
                {/* Timeline dot */}
                <div className="absolute left-[-5px] top-8 hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background transition-colors group-hover:bg-primary md:left-[136px] md:block" />

                {/* Period */}
                <div className="shrink-0">
                  <span className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                    {job.period}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {job.role}
                      <span className="text-muted-foreground">{" at "}</span>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary transition-colors hover:underline"
                      >
                        {job.company}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
