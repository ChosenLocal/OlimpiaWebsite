import { Container } from "@/components/ui/Container"
import { R2_IMAGES } from "@/lib/r2-images"

export interface LocalProofProps {
  locale?: "en" | "es"
  averageResponseTime?: number
}

export function LocalProof({ locale = "en", averageResponseTime = 54 }: LocalProofProps) {
  const serviceCities = [
    "Portland",
    "Milwaukie",
    "Gresham",
    "Beaverton",
    "Tigard",
    "Lake Oswego",
    "Oregon City",
    "West Linn",
    "Clackamas",
    "Happy Valley",
    "Tualatin",
    "Vancouver WA",
  ]

  return (
    <section className="py-16 bg-coal relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={R2_IMAGES.hero.emergency || "/placeholder.svg"}
          alt="Emergency response vehicle"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-coal/90 via-coal/95 to-coal" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            {locale === "en" ? "We're Truly Local" : "Somos Verdaderamente Locales"}
          </h2>
          <p className="text-gray-400 mb-6">
            {locale === "en"
              ? "Based in Milwaukie, serving all of Portland Metro with fast, reliable emergency response"
              : "Con sede en Milwaukie, sirviendo todo el área metropolitana de Portland"}
          </p>

          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-lg px-6 py-3 mb-8">
            <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-white font-semibold">
              {locale === "en" ? "Average arrival time last 90 days:" : "Tiempo promedio de llegada (últimos 90 días):"}
            </span>
            <span className="text-gold font-bold text-xl">{averageResponseTime} min</span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          {serviceCities.map((city) => (
            <div
              key={city}
              className="text-center py-3 px-4 bg-charcoal rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <span className="text-gray-300 text-sm font-medium">{city}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="/service-area"
            className="text-water hover:text-gold transition-colors font-medium inline-flex items-center gap-2"
          >
            {locale === "en" ? "See all service areas" : "Ver todas las áreas de servicio"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}
