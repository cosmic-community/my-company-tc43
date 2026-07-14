import { Testimonial } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const quote = getMetafieldValue(testimonial.metadata?.quote)
  const client = getMetafieldValue(testimonial.metadata?.client_name)
  const company = getMetafieldValue(testimonial.metadata?.company)
  const role = getMetafieldValue(testimonial.metadata?.role)
  const rating = testimonial.metadata?.rating
  const photo = testimonial.metadata?.photo

  const ratingNum = typeof rating === 'number' ? rating : Number(rating) || 0

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col h-full shadow-sm">
      {ratingNum > 0 && (
        <div className="flex text-yellow-400 mb-4">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${i < ratingNum ? 'text-yellow-400' : 'text-gray-200'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.951a1 1 0 00.95.69h4.151c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.95c.3.922-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.175 0l-3.36 2.44c-.784.57-1.838-.196-1.539-1.118l1.286-3.95a1 1 0 00-.363-1.118L2.98 9.377c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.951-.69l1.286-3.951z" />
            </svg>
          ))}
        </div>
      )}

      {quote && <blockquote className="text-gray-700 italic flex-grow">&ldquo;{quote}&rdquo;</blockquote>}

      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
            alt={client}
            width={50}
            height={50}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-lg text-gray-400">👤</div>
        )}
        <div>
          {client && <p className="font-semibold text-gray-900 text-sm">{client}</p>}
          {(role || company) && (
            <p className="text-xs text-gray-500">
              {role}{role && company ? ', ' : ''}{company}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}