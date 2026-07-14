// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getTeamMember } from '@/lib/cosmic'
import { getMetafieldValue } from '@/lib/cosmic'

export default async function TeamMemberPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getTeamMember(slug)

  if (!member) {
    notFound()
  }

  const name = getMetafieldValue(member.metadata?.full_name) || member.title
  const jobTitle = getMetafieldValue(member.metadata?.job_title)
  const bio = getMetafieldValue(member.metadata?.bio)
  const email = getMetafieldValue(member.metadata?.email)
  const photo = member.metadata?.photo

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href="/team" className="text-sm text-brand-600 font-medium hover:underline">← Back to Team</Link>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
            {photo ? (
              <img
                src={`${photo.imgix_url}?w=800&h=800&fit=crop&auto=format,compress`}
                alt={name}
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl text-gray-300">👤</div>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{name}</h1>
          {jobTitle && <p className="mt-2 text-lg text-brand-600 font-medium">{jobTitle}</p>}
          {bio && (
            <div className="prose prose-lg max-w-none mt-6" dangerouslySetInnerHTML={{ __html: bio }} />
          )}
          {email && (
            <a href={`mailto:${email}`} className="mt-6 inline-flex items-center gap-2 text-brand-600 font-medium hover:underline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {email}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}