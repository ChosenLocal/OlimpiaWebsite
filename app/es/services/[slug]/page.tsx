import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardContent, CardTitle } from '@/components/ui/Card'
import { FAQ } from '@/components/sections/FAQ'
import { StructuredData } from '@/components/ui/StructuredData'
import { getService, getServices } from '@/lib/sanity'
import { generateServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from '@/lib/schema'

const PHONE = '+15035551234'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const services = await getServices('es')
  return services.map((service: any) => ({
    slug: service.slug.current
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params.slug, 'es')

  if (!service) {
    return {
      title: 'Servicio no encontrado'
    }
  }

  return {
    title: `${service.title} — Área Metropolitana de Portland | Olimpia&apos;s Biohazard`,
    description: service.summary,
    alternates: {
      canonical: `/es/services/${params.slug}`,
      languages: {
        'en': `/services/${params.slug}`,
        'es': `/es/services/${params.slug}`
      }
    },
    openGraph: {
      title: service.title,
      description: service.summary,
      type: 'website',
      locale: 'es_US'
    }
  }
}

export default async function ServicePageES({ params }: ServicePageProps) {
  const service = await getService(params.slug, 'es')

  if (!service) {
    notFound()
  }

  // Generate structured data
  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.summary,
    provider: "Olimpia's Biohazard & Restoration",
    areaServed: 'Área Metropolitana de Portland, OR',
    url: `https://www.olimpiasbiohazard.com/es/services/${params.slug}`
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Inicio', url: 'https://www.olimpiasbiohazard.com/es' },
    { name: 'Servicios', url: 'https://www.olimpiasbiohazard.com/es/services' },
    { name: service.title, url: `https://www.olimpiasbiohazard.com/es/services/${params.slug}` }
  ])

  const faqs = service.faqs || []
  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  return (
    <>
      <StructuredData data={faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema]} />

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
                <li><a href="/es/services" className="hover:text-gold transition-colors">Servicios</a></li>
                <li>/</li>
                <li className="text-white">{service.title}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                {service.summary}
              </p>
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

        {/* Service Content */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="prose prose-invert prose-lg max-w-none">
              {service.body && service.body.map((block: any, index: number) => {
                if (block._type === 'block' && block.children) {
                  return (
                    <p key={index} className="text-gray-300 mb-6 leading-relaxed">
                      {block.children.map((child: any) => child.text).join('')}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Nuestro Proceso
              </h2>
              <p className="text-xl text-gray-300">
                Un enfoque sistemático para restaurar su propiedad de manera segura
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: '1',
                  title: 'Contacto Inicial',
                  description: 'Respuesta 24/7 para su emergencia'
                },
                {
                  step: '2',
                  title: 'Evaluación',
                  description: 'Inspección del sitio y planificación'
                },
                {
                  step: '3',
                  title: 'Contención',
                  description: 'Asegurar el área afectada'
                },
                {
                  step: '4',
                  title: 'Remediación',
                  description: 'Limpieza y descontaminación completa'
                },
                {
                  step: '5',
                  title: 'Verificación',
                  description: 'Inspección final y documentación'
                }
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

        {/* Why Choose Us */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white text-center mb-12">
              Por Qué Elegirnos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardTitle>Certificado OSHA</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Todos los técnicos están certificados en manejo de materiales peligrosos y siguen estrictos protocolos de seguridad.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Disponibilidad 24/7</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Respuesta de emergencia las 24 horas. Llegamos cuando nos necesita, día o noche.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Discreción Total</CardTitle>
                <CardContent>
                  <p className="text-gray-300">
                    Vehículos sin marcar y servicio discreto para proteger su privacidad durante situaciones sensibles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Insurance Information */}
        <section className="py-20 bg-charcoal">
          <Container size="md">
            <Card>
              <CardTitle>Seguro y Facturación</CardTitle>
              <CardContent>
                <p className="text-gray-300 mb-6">
                  Trabajamos con todas las principales compañías de seguros y podemos ayudarle con:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Navegar el proceso de reclamaciones
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Proporcionar documentación detallada
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Facturación directa al seguro (cuando sea aplicable)
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-2">✓</span>
                    Estimaciones gratuitas y consultas
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-coal rounded-lg">
                  <p className="text-sm text-gray-400">
                    <strong className="text-white">Nota:</strong> Muchos servicios de limpieza de materiales peligrosos están cubiertos por el seguro de propietarios. Llámenos para una consulta gratuita.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Container>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl font-heading font-bold text-white text-center mb-8">
              Área de Servicio
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-2xl mx-auto">
              Con sede en Milwaukie, Oregon, servimos a toda el Área Metropolitana de Portland y comunidades circundantes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Portland', 'Milwaukie', 'Gresham', 'Lake Oswego', 'West Linn', 'Oregon City', 'Beaverton', 'Tigard'].map(city => (
                <div key={city} className="text-center p-4 bg-charcoal rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                  <span className="text-white">{city}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        {faqs.length > 0 && (
          <FAQ items={faqs} locale="es" />
        )}

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-charcoal to-coal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                ¿Necesita Ayuda Inmediata?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nuestro equipo está disponible 24/7 para responder a su emergencia
              </p>
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center px-12 py-5 bg-fire text-white text-xl font-heading font-bold rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Llamar Ahora: (503) 555-1234
              </a>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="es" position="fixed" />

      <Footer locale="es" phone="(503) 555-1234" />
    </>
  )
}
