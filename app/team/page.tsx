import { getTeamMembers } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import TeamMemberCard from '@/components/TeamMemberCard'

export const metadata = {
  title: 'Team — My Company',
}

export default async function TeamPage() {
  const team = await getTeamMembers()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Who We Are" title="Meet the Team" description="Experienced professionals dedicated to your success." />
        {team.length === 0 ? (
          <p className="text-center text-gray-500">No team members available yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}