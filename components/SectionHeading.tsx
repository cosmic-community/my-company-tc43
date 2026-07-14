export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wide text-brand-600">{eyebrow}</span>
      )}
      <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {description && <p className="mt-4 text-gray-600">{description}</p>}
    </div>
  )
}