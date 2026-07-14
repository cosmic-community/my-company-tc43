import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-xl text-white mb-4">
              <span className="text-2xl">🏢</span>
              My Company
            </div>
            <p className="text-sm text-gray-400 max-w-xs">
              Professional services delivered with expertise, care, and measurable results.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400">
              Ready to start a project? Reach out to our team and see how we can help.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-500">
          © {year} My Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}