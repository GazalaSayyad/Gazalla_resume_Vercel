import Image from "next/image"
import Link from "next/link"
import { resumeData } from "@/data/resume-data"

interface Params {
  params: { slug: string }
}

export default async function CompanyPage({ params }: Params) {
  // params comes in as a Promise in the app router; await before use
  const { slug } = await params
  const job = resumeData.experience.find((e) => e.slug === slug)
  const details = resumeData.companyDetails?.[slug]

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

      {/* bullet points of work if provided */}
      {details?.bulletPoints && details.bulletPoints.length > 0 && (
        <ul className="mt-6 list-disc pl-6 space-y-2">
          {details.bulletPoints.map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* awards/certifications/images for this company */}
      {details?.awards && details.awards.length > 0 && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold">Awards & Recognition</h2>
          <ul className="mt-4 space-y-4">
            {details.awards.map((a) => (
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

      {details && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          {details.projects.length ? (
            <div className="space-y-4">
              {details.projects.map((p, i) => (
                <div key={p.title ?? i} className="border-l-2 border-primary pl-4 py-2">
                  {p.title && <h3 className="font-semibold text-foreground mb-1">{p.title}</h3>}
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">No projects listed.</p>
          )}

          {details.photos.length ? (
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Photos</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {details.photos.map((src, i) => (
                  <div key={i} className="rounded-sm overflow-hidden bg-muted">
                    <img
                      src={src}
                      alt={`photo-${i}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </section>
      )}
    </main>
  )
}
