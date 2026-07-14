import Link from 'next/link'
import { Service } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function ServiceCard({ service }: { service: Service }) {
  const name = getMetafieldValue(service.metadata?.service_name) || service.title
  const description = getMetafieldValue(service.metadata?.short_description)
  const icon = getMetafieldValue(service.metadata?.icon)
  const image = service.metadata?.featured_image

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
    >
      {image && (
        <div className="h-44 overflow-hidden">
          <img
            src={`${image.imgix_url}?w=800&h=440&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={220}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        {icon && <div className="text-3xl mb-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">
          {name}
        </h3>
        {description && <p className="mt-2 text-sm text-gray-600 line-clamp-3">{description}</p>}
        <span className="mt-4 inline-flex items-center text-sm font-medium text-brand-600">
          Learn more
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  )
}