import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { StructuredData } from '@/components/ui/StructuredData'
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from '@/lib/schema'
import {
  SERVICES,
  CITIES,
  getService,
  getCity,
  generateServiceCityCombinations,
  generateUniqueIntro,
  generateCityInsights,
  getResponseTime
} from '@/lib/service-city'

const PHONE = '+15035551234'
const BASE_URL = 'https://www.olimpiasbiohazard.com'

interface ServiceCityPageProps {
  params: {
    slug: string
    city: string
  }
}

export async function generateStaticParams() {
  return generateServiceCityCombinations()
}

export async function generateMetadata({ params }: ServiceCityPageProps): Promise<Metadata> {
  const service = getService(params.slug)
  const city = getCity(params.city)

  if (!service || !city) {
    return {
      title: 'Service Not Found'
    }
  }

  const title = `${service.name} in ${city.name}, OR | 24/7 Emergency Response`
  const description = `Professional ${service.name} services in ${city.name}, Oregon. Certified technicians, rapid response, discreet service. Available 24/7. Call (503) 555-1234.`

  return {
    title,
    description,
    alternates: {
      canonical: `/services/${params.slug}/in/${params.city}`,
      languages: {
        'en': `/services/${params.slug}/in/${params.city}`,
        'es': `/es/services/${params.slug}/in/${params.city}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
      url: `${BASE_URL}/services/${params.slug}/in/${params.city}`
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export default function ServiceCityPage({ params }: ServiceCityPageProps) {
  const service = getService(params.slug)
  const city = getCity(params.city)

  if (!service || !city) {
    notFound()
  }

  const uniqueIntro = generateUniqueIntro(service.name, city.name, city, 'en')
  const cityInsights = generateCityInsights(params.slug, city.name, 'en')
  const responseTime = getResponseTime(params.city, 'en')

  // Generate structured data
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `Olimpia's Biohazard & Restoration - ${city.name}`,
    description: `Professional ${service.name} services in ${city.name}, Oregon. 24/7 emergency response, certified technicians.`,
    phone: PHONE,
    email: 'info@olimpiasbiohazard.com',
    address: {
      street: 'Serving ' + city.name,
      city: city.name,
      state: 'OR',
      zip: city.zipCodes?.[0] || '97222'
    },
    url: `${BASE_URL}/services/${params.slug}/in/${params.city}`
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: BASE_URL },
    { name: 'Services', url: `${BASE_URL}/services` },
    { name: service.name, url: `${BASE_URL}/services/${params.slug}` },
    { name: city.name, url: `${BASE_URL}/services/${params.slug}/in/${params.city}` }
  ])

  return (
    <>
      <StructuredData data={[localBusinessSchema, breadcrumbSchema]} />

      <Header phone={PHONE} />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-gray-400">
                <li><a href="/" className="hover:text-gold transition-colors">Home</a></li>
                <li>/</li>
                <li><a href={`/services/${params.slug}`} className="hover:text-gold transition-colors">{service.name}</a></li>
                <li>/</li>
                <li className="text-white">{city.name}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {service.name} in {city.name}, Oregon
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {uniqueIntro}
              </p>

              {/* Response Time Badge */}
              <div className="inline-flex items-center gap-2 bg-hazard/20 border border-hazard rounded-lg px-4 py-2 mb-8">
                <span className="text-hazard font-semibold">⚡ Fast Response:</span>
                <span className="text-white">{responseTime}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-fire text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Call Now: (503) 555-1234
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-coal font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Request Callback
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* City-Specific Insights */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              {service.name} Services in {city.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {cityInsights.map((insight, index) => (
                <Card key={index}>
                  <CardContent>
                    <div className="flex items-start gap-3">
                      <span className="text-gold text-2xl">✓</span>
                      <p className="text-gray-300">{insight}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                When you need {service.name.toLowerCase()} in {city.name}, Olimpia&apos;s Biohazard & Restoration is your trusted local provider. Our certified technicians understand the unique needs of {city.name} residents and property managers in {city.county}.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                We provide comprehensive emergency response services throughout {city.name}, including all {city.zipCodes?.length || 0}+ ZIP codes we serve in the area. Our discreet, professional team arrives quickly with specialized equipment to handle any situation safely and effectively.
              </p>
            </div>
          </Container>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Our Process in {city.name}
              </h2>
              <p className="text-xl text-gray-300">
                A systematic approach to restore your property safely
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Emergency Call', description: `24/7 response for ${city.name}` },
                { step: '2', title: 'Rapid Dispatch', description: responseTime },
                { step: '3', title: 'Assessment', description: 'On-site evaluation and planning' },
                { step: '4', title: 'Remediation', description: 'Professional cleanup and restoration' },
                { step: '5', title: 'Verification', description: 'Final inspection and certification' }
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-3xl font-heading font-bold text-coal mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Coverage Area */}
        <section className="py-20 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">
                Serving All of {city.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardTitle>Service Area</CardTitle>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      We serve all neighborhoods and communities throughout {city.name} and {city.county}.
                    </p>
                    {city.zipCodes && city.zipCodes.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-400 mb-2">ZIP Codes Served:</p>
                        <div className="flex flex-wrap gap-2">
                          {city.zipCodes.map(zip => (
                            <span key={zip} className="inline-block bg-charcoal px-3 py-1 rounded text-gold text-sm">
                              {zip}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardTitle>Nearby Cities We Serve</CardTitle>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {CITIES.filter(c => c.slug !== params.city).slice(0, 6).map(nearbyCity => (
                        <a
                          key={nearbyCity.slug}
                          href={`/services/${params.slug}/in/${nearbyCity.slug}`}
                          className="text-water hover:text-gold transition-colors text-sm"
                        >
                          {nearbyCity.name} →
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
              Why {city.name} Residents Trust Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardTitle>Local Knowledge</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Based in nearby Milwaukie, we understand the specific needs of {city.name} properties and respond quickly to your emergency.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Certified Professionals</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    All technicians are OSHA certified, EPA compliant, and fully trained in biohazard remediation protocols.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Discreet Service</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Unmarked vehicles and complete confidentiality protect your privacy during sensitive situations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Related Services */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-12">
              Other Services in {city.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SERVICES.filter(s => s.slug !== params.slug).slice(0, 3).map(relatedService => (
                <a
                  key={relatedService.slug}
                  href={`/services/${relatedService.slug}/in/${params.city}`}
                  className="block bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg p-6 transition-colors"
                >
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    {relatedService.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Professional service in {city.name}
                  </p>
                  <span className="text-gold">Learn more →</span>
                </a>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-charcoal to-coal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Need {service.name} in {city.name}?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Our team is available 24/7 for emergency response
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center px-12 py-5 bg-fire text-white text-xl font-heading font-bold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Call Now: (503) 555-1234
              </a>
              <p className="text-gray-400 mt-4">
                {responseTime} for {city.name} emergencies
              </p>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone="(503) 555-1234" />
    </>
  )
}
