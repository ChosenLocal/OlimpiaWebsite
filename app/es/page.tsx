import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Hero } from '@/components/sections/Hero'
import { ServiceGrid } from '@/components/sections/ServiceGrid'
import { FAQ } from '@/components/sections/FAQ'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/Card'
import { StructuredData } from '@/components/ui/StructuredData'
import { generateLocalBusinessSchema, generateFAQSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: "Limpieza Escenas del Crimen Portland | Olimpia's",
  description: 'Limpieza de emergencia 24/7 de materiales peligrosos y escenas del crimen en Portland Metro. Servicio discreto y profesional. Certificado por OSHA.',
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
      'es': '/es',
    },
  },
}

const PHONE = '+15035551234'

const services = [
  {
    title: 'Limpieza de Escenas del Crimen',
    description: 'Limpieza profesional de escenas del crimen y eliminación de materiales peligrosos. Técnicos certificados y discretos disponibles 24/7.',
    href: '/es/services/limpieza-de-escenas-del-crimen',
    icon: '🔍',
  },
  {
    title: 'Remediación de Materiales Peligrosos',
    description: 'Servicios completos de limpieza y descontaminación de materiales peligrosos. Técnicos certificados por OSHA.',
    href: '/es/services/remediacion-de-materiales-peligrosos',
    icon: '⚠️',
  },
  {
    title: 'Limpieza de Muerte Sin Atención',
    description: 'Limpieza compasiva y discreta después de muerte sin atención. Descontaminación completa y eliminación de olores.',
    href: '/es/services/limpieza-de-muerte-sin-atencion',
    icon: '🕊️',
  },
  {
    title: 'Restauración de Daños por Agua',
    description: 'Extracción de agua de emergencia, secado y restauración. Trabajamos directamente con el seguro.',
    href: '/es/services/restauracion-de-danos-por-agua',
    icon: '💧',
  },
  {
    title: 'Restauración de Daños por Incendio',
    description: 'Limpieza de daños por incendio y humo. Eliminación de hollín, eliminación de olores, restauración estructural.',
    href: '/es/services/restauracion-de-danos-por-incendio',
    icon: '🔥',
  },
  {
    title: 'Limpieza de Acumulación',
    description: 'Limpieza compasiva de acumulación y desorden. Servicio respetuoso y sin prejuicios.',
    href: '/es/services/limpieza-de-acumulacion',
    icon: '🏠',
  },
]

const faqs = [
  {
    question: '¿Qué tan rápido pueden responder a una emergencia?',
    answer: 'Generalmente llegamos dentro de 1-2 horas de su llamada en cualquier lugar del área metropolitana de Portland. Nuestros equipos están disponibles 24/7, incluidos fines de semana y días festivos.',
  },
  {
    question: '¿El seguro cubre la limpieza de materiales peligrosos?',
    answer: 'Muchas pólizas de seguro de propietarios y comerciales cubren servicios de limpieza de materiales peligrosos. Trabajamos directamente con compañías de seguros y podemos ayudarlo a navegar el proceso de reclamos.',
  },
  {
    question: '¿Sus técnicos están certificados?',
    answer: 'Sí, todos nuestros técnicos están certificados por OSHA en el manejo de patógenos transmitidos por sangre y remediación de materiales peligrosos. Mantenemos todas las licencias requeridas y seguimos protocolos de seguridad estrictos.',
  },
  {
    question: '¿Proporcionan servicio discreto?',
    answer: 'Absolutamente. Entendemos la naturaleza sensible de nuestro trabajo. Nuestros vehículos no están marcados y nuestros técnicos usan uniformes simples. Respetamos su privacidad y trabajamos con total discreción.',
  },
]

const localBusinessSchema = generateLocalBusinessSchema({
  name: "Olimpia's Biohazard & Restoration",
  description: 'Servicios profesionales de limpieza de materiales peligrosos y restauración en Portland Metro. Respuesta de emergencia 24/7.',
  phone: PHONE,
  email: 'info@olimpiasbiohazard.com',
  address: {
    street: '',
    city: 'Milwaukie',
    state: 'OR',
    zip: '97222',
  },
  url: 'https://www.olimpiasbiohazard.com/es',
})

const faqSchema = generateFAQSchema(faqs)

export default function HomePageES() {
  return (
    <>
      <StructuredData data={[localBusinessSchema, faqSchema]} />

      <Header phone={PHONE} />

      <main>
        <Hero
          title="Limpieza de Materiales Peligrosos y Escenas del Crimen"
          subtitle="Portland Metro — Respuesta de Emergencia 24/7 — Técnicos certificados y discretos"
          phone={PHONE}
          locale="es"
        />

        <ServiceGrid services={services} locale="es" />

        {/* Por Qué Elegirnos */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Por Qué Elegir Olimpia&apos;s Biohazard
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Servicio profesional y compasivo cuando más lo necesita
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">✓</div>
                  <CardTitle>Certificado por OSHA</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Todos los técnicos están certificados en el manejo de patógenos transmitidos por sangre y remediación de materiales peligrosos.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">⚡</div>
                  <CardTitle>Respuesta Rápida</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Disponible 24/7 con llegada típica dentro de 1-2 horas en cualquier lugar del área de Portland. Equipos de emergencia siempre disponibles.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="text-4xl mb-3">🤝</div>
                  <CardTitle>Discreción Completa</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Vehículos sin marcar y uniformes simples. Entendemos la naturaleza sensible de nuestro trabajo y respetamos su privacidad.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </Container>
        </section>

        {/* Qué Hacer Ahora */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="bg-gradient-to-br from-charcoal to-coal border-2 border-gold rounded-lg p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-gold mb-6">
                ¿Qué Debo Hacer Ahora?
              </h2>

              <div className="space-y-6 text-gray-300">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Garantice la Seguridad Primero</h3>
                    <p>Si hay peligro inmediato, llame al 911. No ingrese al área afectada hasta que las autoridades la despejen.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">No Intente Limpiar</h3>
                    <p>Los materiales peligrosos requieren manejo especializado. Intentar limpiar por su cuenta puede propagar la contaminación y presentar riesgos graves para la salud.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Llámenos Inmediatamente</h3>
                    <p>Contacte nuestra línea de emergencia 24/7. Llegaremos dentro de 1-2 horas para evaluar y comenzar la remediación profesional.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gold/20 text-center">
                <a href={`tel:${PHONE}`} className="btn-emergency inline-block">
                  Llamar Ahora: (503) 555-1234
                </a>
              </div>
            </div>
          </Container>
        </section>

        <FAQ items={faqs} locale="es" />

        {/* Área de Servicio */}
        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Sirviendo el Área Metropolitana de Portland
              </h2>
              <p className="text-lg text-gray-300">
                Respuesta de emergencia 24/7 en toda la región
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {['Milwaukie', 'Portland', 'Beaverton', 'Gresham', 'Tigard', 'Lake Oswego', 'Oregon City', 'West Linn'].map((city) => (
                <div key={city} className="text-center py-4 px-6 bg-coal rounded-lg border border-gold/20 hover:border-gold/40 transition-colors">
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/es/service-area" className="text-water hover:text-gold transition-colors">
                Ver todas las áreas de servicio →
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
