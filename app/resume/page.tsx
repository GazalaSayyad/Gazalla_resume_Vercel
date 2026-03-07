import Link from "next/link"
import { Home } from "lucide-react"
import { resumeData } from "@/data/resume-data"
import { PDFViewer } from "@/components/ui/pdf-viewer"

export default function ResumePage() {
  const { personal } = resumeData
  const pdfUrl = personal.resumePdfUrl

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{personal.name}</h1>
          <p className="mt-1 text-muted-foreground">{personal.title}</p>
        </div>
        <Link href="/" className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium hover:bg-card/80">
          <Home className="h-4 w-4" />
          Back Home
        </Link>
      </div>

      {/* Resume Viewer */}
      {pdfUrl && (
        <div className="h-[80vh] overflow-hidden rounded-lg border border-border bg-card">
          <PDFViewer pdfUrl={pdfUrl} />
        </div>
      )}
    </main>
  )
}
