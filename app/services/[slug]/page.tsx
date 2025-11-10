import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { FAQ } from '@/components/sections/FAQ'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { StructuredData } from '@/components/ui/StructuredData'
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '@/lib/schema'
import { getService, getServices } from '@/lib/sanity'

const PHONE = '+15035551234'

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  // Generate paths for all services
  const services = await getServices('en')
  return services.map((service: any) => ({
    slug: service.slug.current,
  }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = await getService(params.slug, 'en')

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.title} Portland | Olimpia's`,
    description: service.summary,
    alternates: {
      canonical: `/services/${params.slug}`,
      languages: {
        'en': `/services/${params.slug}`,
        'es': `/es/services/${params.slug}`,
      },
    },
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = await getService(params.slug, 'en')

  if (!service) {
    notFound()
  }

  const faqs = service.faqs || []

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.summary,
    provider: "Olimpia's Biohazard & Restoration",
    areaServed: 'Portland Metro, OR',
    url: `https://www.olimpiasbiohazard.com/services/${params.slug}`,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.olimpiasbiohazard.com' },
    { name: 'Services', url: 'https://www.olimpiasbiohazard.com/services' },
    { name: service.title, url: `https://www.olimpiasbiohazard.com/services/${params.slug}` },
  ])

  const faqSchema = faqs.length > 0 ? generateFAQSchema(faqs) : null

  const schemas = faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema]

  return (
    <>
      <StructuredData data={schemas} />

      <Header phone={PHONE} />

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-6 text-sm">
                <ol className="flex items-center space-x-2 text-gray-400">
                  <li><a href="/" className="hover:text-gold">Home</a></li>
                  <li>/</li>
                  <li><a href="/services" className="hover:text-gold">Services</a></li>
                  <li>/</li>
                  <li className="text-gold">{service.title}</li>
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                {service.title}
              </h1>

              <p className="text-xl text-gray-300 mb-8">
                {service.summary}
              </p>

              <div className="flex gap-4">
                <a href={`tel:${PHONE}`} className="btn-emergency">
                  Call Now: (503) 555-1234
                </a>
                <button className="btn-primary">
                  Request Callback
                </button>
              </div>
            </div>
          </Container>
        </section>

        {/* Service Content */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="prose prose-invert prose-gold max-w-none">
              {service.body && service.body.map((block: any, index: number) => (
                <div key={index} className="mb-6">
                  {block.children?.map((child: any, childIndex: number) => (
                    <p key={childIndex} className="text-gray-300 text-lg leading-relaxed">
                      {child.text}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA Band */}
            <div className="mt-12 p-8 bg-charcoal border border-gold/20 rounded-lg text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                Need {service.title} Services?
              </h2>
              <p className="text-gray-300 mb-6">
                Our certified technicians are available 24/7 for emergency response throughout Portland Metro.
              </p>
              <a href={`tel:${PHONE}`} className="btn-emergency inline-block">
                Call Now: (503) 555-1234
              </a>
            </div>
          </Container>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Our Process
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {[
                { step: 1, title: 'Emergency Call', desc: 'Contact us 24/7 for immediate response' },
                { step: 2, title: 'Assessment', desc: 'Professional evaluation of the affected area' },
                { step: 3, title: 'Containment', desc: 'Secure and isolate contaminated areas' },
                { step: 4, title: 'Remediation', desc: 'Complete cleanup and decontamination' },
                { step: 5, title: 'Verification', desc: 'Final inspection and clearance' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center text-coal font-bold text-2xl">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Insurance Info */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
              <h2 className="text-2xl font-heading font-bold text-gold mb-4">
                Insurance & Billing
              </h2>
              <p className="text-gray-300 mb-4">
                Many insurance policies cover biohazard cleanup and restoration services. We work directly with your insurance company to:
              </p>
              <ul className="space-y-2 text-gray-300 mb-6">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Navigate the claims process</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Provide detailed documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Communicate directly with adjusters</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Ensure maximum coverage</span>
                </li>
              </ul>
              <p className="text-gray-400 text-sm">
                Contact us for a consultation about your specific situation and coverage options.
              </p>
            </div>
          </Container>
        </section>

        {/* FAQs */}
        {faqs.length > 0 && <FAQ items={faqs} locale="en" />}

        {/* Service Area */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">
                Serving Portland Metro Area
              </h2>
              <p className="text-gray-300 mb-8">
                {service.title} services available 24/7 throughout the region
              </p>
              <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
                {['Milwaukie', 'Portland', 'Beaverton', 'Gresham', 'Tigard', 'Lake Oswego', 'Oregon City', 'West Linn'].map((city) => (
                  <span key={city} className="px-4 py-2 bg-coal rounded-lg border border-gold/20 text-gray-300">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone="(503) 555-1234" />
    </>
  )
}
