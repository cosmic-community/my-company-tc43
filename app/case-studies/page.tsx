import { getCaseStudies } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata = {
  title: 'Case Studies — My Company',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Our Work" title="Case Studies" description="See how we've helped clients achieve their goals." />
        {caseStudies.length === 0 ? (
          <p className="text-center text-gray-500">No case studies available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <CaseStudyCard key={cs.id} caseStudy={cs} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}