import { resumeData } from "@/data/resume-data"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
        <p className="text-sm text-muted-foreground">
          {"Designed & built by "}
          <span className="font-medium text-foreground">{resumeData.personal.name}</span>
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
