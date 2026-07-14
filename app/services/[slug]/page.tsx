// app/services/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getService } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const shortDescription = getMetafieldValue(service.metadata?.short_description)
  const details = getMetafieldValue(service.metadata?.details)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image

  return (
    <article>
      {image && (
        <div className="h-72 md:h-96 w-full overflow-hidden">
          <img
            src={`${image.imgix_url}?w=1600&h=800&fit=crop&auto=format,compress`}
            alt={name}
            width={1600}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/services" className="text-sm text-brand-600 font-medium hover:underline">← Back to Services</Link>
        <div className="flex items-center gap-3 mt-6">
          {icon && <span className="text-4xl">{icon}</span>}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{name}</h1>
        </div>
        {shortDescription && <p className="mt-4 text-lg text-gray-600">{shortDescription}</p>}
        {details && (
          <div className="prose prose-lg max-w-none mt-8" dangerouslySetInnerHTML={{ __html: details }} />
        )}
      </div>
    </article>
  )
}