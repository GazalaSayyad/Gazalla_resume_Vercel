import Image from "next/image"
import Link from "next/link"
import { resumeData } from "@/data/resume-data"

interface Params {
  params: Promise<{ slug: string }>
}

export default async function CompanyPage({ params }: Params) {
  const { slug } = await params
  const job = resumeData.experience.find((e) => e.slug === slug)
  const details = resumeData.companyDetails?.[
    slug as keyof typeof resumeData.companyDetails
  ]

  if (!job) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Company not found</h1>
        <p>The slug "{slug}" does not match any experience entry.</p>
        <p>
          <Link href="/">Back to home</Link>
        </p>
      </div>
    )
  }

  const bulletPoints: string[] = details?.bulletPoints ?? []
  const awards: Array<{ title: string; image?: string; description?: string }> =
    details?.awards ?? []
  const projects: Array<{ title?: string; description: string }> =
    details?.projects ?? []
  const photos: string[] = (details?.photos ?? []).filter(
    (photo): photo is string => Boolean(photo),
  )

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <Link href="/" className="text-primary hover:underline">
        &larr; Back
      </Link>

      <h1 className="mt-4 text-3xl font-bold">
        {job.company} ({job.role})
      </h1>
      <p className="mt-2 text-muted-foreground">{job.period}</p>
      <p className="mt-4">{job.description}</p>

      {details && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          {projects.length ? (
            <ul className="list-disc pl-6 space-y-3">
              {projects.map((p, i) => (
                <li
                  key={p.title ?? i}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {p.title && (
                    <span className="font-semibold text-foreground">
                      {p.title}:{" "}
                    </span>
                  )}
                  {p.description}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No projects listed.</p>
          )}

          {bulletPoints.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Bullet Points</h2>
              <ul className="list-disc pl-6 space-y-2">
                {bulletPoints.map((point, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {photos.length > 0 ? (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Photos</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {photos.map((src, i) => (
                  <div key={i} className="rounded-sm overflow-hidden bg-muted">
                    <Image
                      src={src}
                      alt={`${job.company} photo ${i + 1}`}
                      width={1200}
                      height={800}
                      className="h-auto w-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          {/* awards/certifications/images for this company */}
          {awards.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
              <ul className="mt-4 space-y-4">
                {awards.map((a) => (
                  <li key={a.title} className="flex gap-4">
                    {a.image && (
                      <div className="w-24 h-24 relative flex-shrink-0">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold">{a.title}</h3>
                      {a.description && (
                        <p className="text-sm text-muted-foreground">{a.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </section>
      )}
    </main>
  )
}
