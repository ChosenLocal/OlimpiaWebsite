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
      title: 'Servicio no encontrado'
    }
  }

  const title = `${service.nameES} ${city.name} | Olimpia's 24/7`
  const description = `Servicios profesionales de ${service.nameES} en ${city.name}, Oregon. Técnicos certificados, respuesta rápida, servicio discreto. Disponible 24/7. Llame al (503) 555-1234.`

  return {
    title,
    description,
    alternates: {
      canonical: `/es/services/${params.slug}/in/${params.city}`,
      languages: {
        'en': `/services/${params.slug}/in/${params.city}`,
        'es': `/es/services/${params.slug}/in/${params.city}`
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'es_US',
      url: `${BASE_URL}/es/services/${params.slug}/in/${params.city}`
    }
  }
}

export default function ServiceCityPageES({ params }: ServiceCityPageProps) {
  const service = getService(params.slug)
  const city = getCity(params.city)

  if (!service || !city) {
    notFound()
  }

  const uniqueIntro = generateUniqueIntro(service.nameES, city.name, city, 'es')
  const cityInsights = generateCityInsights(params.slug, city.name, 'es')
  const responseTime = getResponseTime(params.city, 'es')

  // Generate structured data
  const localBusinessSchema = generateLocalBusinessSchema({
    name: `Olimpia's Biohazard & Restoration - ${city.name}`,
    description: `Servicios profesionales de ${service.nameES} en ${city.name}, Oregon. Respuesta de emergencia 24/7, técnicos certificados.`,
    phone: PHONE,
    email: 'info@olimpiasbiohazard.com',
    address: {
      street: 'Sirviendo ' + city.name,
      city: city.name,
      state: 'OR',
      zip: city.zipCodes?.[0] || '97222'
    },
    url: `${BASE_URL}/es/services/${params.slug}/in/${params.city}`
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: `${BASE_URL}/es` },
    { name: 'Servicios', url: `${BASE_URL}/es/services` },
    { name: service.nameES, url: `${BASE_URL}/es/services/${params.slug}` },
    { name: city.name, url: `${BASE_URL}/es/services/${params.slug}/in/${params.city}` }
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
                <li><a href="/es" className="hover:text-gold transition-colors">Inicio</a></li>
                <li>/</li>
                <li><a href={`/es/services/${params.slug}`} className="hover:text-gold transition-colors">{service.nameES}</a></li>
                <li>/</li>
                <li className="text-white">{city.name}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {service.nameES} en {city.name}, Oregon
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {uniqueIntro}
              </p>

              {/* Response Time Badge */}
              <div className="inline-flex items-center gap-2 bg-hazard/20 border border-hazard rounded-lg px-4 py-2 mb-8">
                <span className="text-hazard font-semibold">⚡ Respuesta Rápida:</span>
                <span className="text-white">{responseTime}</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-fire text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Llamar Ahora: (503) 555-1234
                </a>
                <a
                  href="/es/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-coal font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Solicitar Llamada
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* City-Specific Insights */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8">
              Servicios de {service.nameES} en {city.name}
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
                Cuando necesite {service.nameES.toLowerCase()} en {city.name}, Olimpia&apos;s Biohazard & Restoration es su proveedor local de confianza. Nuestros técnicos certificados entienden las necesidades únicas de los residentes y administradores de propiedades de {city.name} en {city.county}.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Proporcionamos servicios integrales de respuesta de emergencia en todo {city.name}, incluyendo todos los {city.zipCodes?.length || 0}+ códigos postales que servimos en el área. Nuestro equipo discreto y profesional llega rápidamente con equipo especializado para manejar cualquier situación de manera segura y efectiva.
              </p>
            </div>
          </Container>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Nuestro Proceso en {city.name}
              </h2>
              <p className="text-xl text-gray-300">
                Un enfoque sistemático para restaurar su propiedad de manera segura
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: '1', title: 'Llamada de Emergencia', description: `Respuesta 24/7 para ${city.name}` },
                { step: '2', title: 'Despacho Rápido', description: responseTime },
                { step: '3', title: 'Evaluación', description: 'Evaluación en sitio y planificación' },
                { step: '4', title: 'Remediación', description: 'Limpieza y restauración profesional' },
                { step: '5', title: 'Verificación', description: 'Inspección final y certificación' }
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
                Sirviendo Todo {city.name}
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardTitle>Área de Servicio</CardTitle>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Servimos todos los vecindarios y comunidades en todo {city.name} y {city.county}.
                    </p>
                    {city.zipCodes && city.zipCodes.length > 0 && (
                      <div>
                        <p className="text-sm text-gray-400 mb-2">Códigos Postales Servidos:</p>
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
                  <CardTitle>Ciudades Cercanas que Servimos</CardTitle>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                      {CITIES.filter(c => c.slug !== params.city).slice(0, 6).map(nearbyCity => (
                        <a
                          key={nearbyCity.slug}
                          href={`/es/services/${params.slug}/in/${nearbyCity.slug}`}
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
              Por Qué los Residentes de {city.name} Confían en Nosotros
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardTitle>Conocimiento Local</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Con sede en la cercana Milwaukie, entendemos las necesidades específicas de las propiedades de {city.name} y respondemos rápidamente a su emergencia.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Profesionales Certificados</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Todos los técnicos están certificados por OSHA, cumplen con la EPA y están completamente capacitados en protocolos de remediación de materiales peligrosos.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Servicio Discreto</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Vehículos sin marcar y confidencialidad completa protegen su privacidad durante situaciones sensibles.
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
              Otros Servicios en {city.name}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {SERVICES.filter(s => s.slug !== params.slug).slice(0, 3).map(relatedService => (
                <a
                  key={relatedService.slug}
                  href={`/es/services/${relatedService.slug}/in/${params.city}`}
                  className="block bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg p-6 transition-colors"
                >
                  <h3 className="text-xl font-heading font-semibold text-white mb-2">
                    {relatedService.nameES}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Servicio profesional en {city.name}
                  </p>
                  <span className="text-gold">Aprende más →</span>
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
                ¿Necesita {service.nameES} en {city.name}?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nuestro equipo está disponible 24/7 para respuesta de emergencia
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center px-12 py-5 bg-fire text-white text-xl font-heading font-bold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Llamar Ahora: (503) 555-1234
              </a>
              <p className="text-gray-400 mt-4">
                {responseTime} para emergencias en {city.name}
              </p>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="es" position="fixed" />

      <Footer locale="es" phone="(503) 555-1234" />
    </>
  )
}
