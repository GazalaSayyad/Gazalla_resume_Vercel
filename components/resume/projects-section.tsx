import { ExternalLink, Github, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { resumeData } from "@/data/resume-data"
import { AnimatedSection } from "./animated-section"

export function ProjectsSection() {
  const { projects } = resumeData

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 lg:py-28">
      <AnimatedSection>
        <div className="mb-14">
          <p className="mb-2 font-mono text-sm tracking-widest text-primary uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            Recent Projects
          </h2>
        </div>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedSection key={project.title} delay={index * 100}>
            <div className="group relative flex h-full flex-col rounded-xl border border-border bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
              {project.featured && (
                <div className="absolute -top-2.5 left-5">
                  <Badge className="gap-1 bg-primary text-primary-foreground text-xs shadow-md shadow-primary/20">
                    <Star className="h-3 w-3" />
                    Featured
                  </Badge>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6 pt-7">
                {/* Title row */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-md p-2 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/10 px-3 py-1 font-mono text-xs text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* GitHub Link (prominent) */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                    View Source Code
                    <ExternalLink className="ml-auto h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
