import Link from 'next/link'
import { getServices, getTeamMembers, getCaseStudies, getTestimonials } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'
import TeamMemberCard from '@/components/TeamMemberCard'
import CaseStudyCard from '@/components/CaseStudyCard'
import TestimonialCard from '@/components/TestimonialCard'

export default async function HomePage() {
  const [services, team, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getTestimonials(),
  ])

  return (
    <>
      <Hero />

      {services.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="What We Do" title="Our Services" description="Comprehensive solutions tailored to your business needs." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.slice(0, 6).map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>
      )}

      {caseStudies.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Our Work" title="Featured Case Studies" description="See how we've helped clients achieve their goals." />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.slice(0, 4).map((cs) => (
                <CaseStudyCard key={cs.id} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {team.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Who We Are" title="Meet the Team" description="Experienced professionals dedicated to your success." />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
              {team.slice(0, 4).map((member) => (
                <TeamMemberCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Client Feedback" title="What Our Clients Say" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-brand-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to work together?</h2>
          <p className="mt-4 text-brand-100 text-lg">Explore our services and discover how we can help your business grow.</p>
          <Link href="/services" className="mt-8 inline-flex items-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors">
            Get Started
          </Link>
        </div>
      </section>
    </>
  )
}