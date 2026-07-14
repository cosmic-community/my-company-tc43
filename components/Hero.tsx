import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 text-white">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Professional services that drive real results
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-100 max-w-2xl">
            We partner with ambitious companies to deliver expert solutions, backed by a talented team and a proven track record of success.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-brand-700 font-semibold hover:bg-brand-50 transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-white/40 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}