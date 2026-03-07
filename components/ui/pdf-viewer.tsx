'use client'

import { useState, Suspense } from 'react'
import { Download, FileText } from 'lucide-react'

export function PDFViewer({ pdfUrl }: { pdfUrl: string }) {
  const [isLoading, setIsLoading] = useState(true)

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = pdfUrl.split('/').pop() || 'resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border/50 bg-card/50 px-6 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold text-foreground">Resume</h2>
        </div>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20"
          aria-label="Download resume"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>
      </div>

      {/* PDF Container */}
      <div className="relative flex-1 overflow-hidden bg-muted/20">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="text-center">
              <div className="mb-4 inline-block">
                <div className="h-8 w-8 animate-spin rounded-full border-4 border-border border-t-primary" />
              </div>
              <p className="text-sm text-muted-foreground">Loading PDF...</p>
            </div>
          </div>
        )}
        <iframe
          src={`${pdfUrl}#toolbar=1&navpanes=0`}
          className="h-full w-full border-0"
          onLoad={() => setIsLoading(false)}
          title="Resume PDF Viewer"
        />
      </div>
    </div>
  )
}
