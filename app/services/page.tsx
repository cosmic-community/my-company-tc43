import { getServices } from '@/lib/cosmic'
import SectionHeading from '@/components/SectionHeading'
import ServiceCard from '@/components/ServiceCard'

export const metadata = {
  title: 'Services — My Company',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What We Do" title="Our Services" description="Comprehensive solutions tailored to your business needs." />
        {services.length === 0 ? (
          <p className="text-center text-gray-500">No services available yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}