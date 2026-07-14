// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getCaseStudy } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const title = getMetafieldValue(caseStudy.metadata?.title) || caseStudy.title
  const client = getMetafieldValue(caseStudy.metadata?.client_name)
  const summary = getMetafieldValue(caseStudy.metadata?.summary)
  const content = getMetafieldValue(caseStudy.metadata?.content)
  const results = getMetafieldValue(caseStudy.metadata?.results)
  const image = caseStudy.metadata?.featured_image
  const gallery = caseStudy.metadata?.gallery
  const relatedService = caseStudy.metadata?.related_service

  return (
    <article>
      {image && (
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={title}
            width={1600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/case-studies" className="text-sm text-brand-600 font-medium hover:underline">← Back to Case Studies</Link>

        {client && (
          <span className="mt-6 inline-block text-sm font-semibold uppercase tracking-wide text-brand-600">{client}</span>
        )}
        <h1 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h1>
        {summary && <p className="mt-4 text-lg text-gray-600">{summary}</p>}

        {content && (
          <div className="prose prose-lg max-w-none mt-8" dangerouslySetInnerHTML={{ __html: content }} />
        )}

        {results && (
          <div className="mt-10 p-6 bg-brand-50 rounded-2xl border border-brand-100">
            <h2 className="text-lg font-semibold text-brand-800 mb-2">Results</h2>
            <div className="prose max-w-none text-gray-700" dangerouslySetInnerHTML={{ __html: results }} />
          </div>
        )}

        {relatedService && (
          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-3">Related Service</h3>
            <Link
              href={`/services/${relatedService.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition-colors"
            >
              {getMetafieldValue(relatedService.metadata?.service_name) || relatedService.title}
            </Link>
          </div>
        )}
      </div>

      {gallery && gallery.length > 0 && (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, i) => (
              <div key={i} className="rounded-xl overflow-hidden">
                <img
                  src={`${img.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                  alt={`${title} gallery image ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  )
}