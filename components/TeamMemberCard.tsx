import Link from 'next/link'
import { TeamMember } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const photo = member.metadata?.photo

  return (
    <Link
      href={`/team/${member.slug}`}
      className="group block bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 text-center"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        {photo ? (
          <img
            src={`${photo.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl text-gray-300">👤</div>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-brand-600 transition-colors">{name}</h3>
        {jobTitle && <p className="mt-1 text-sm text-brand-600 font-medium">{jobTitle}</p>}
      </div>
    </Link>
  )
}