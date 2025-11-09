import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { Card, CardTitle, CardDescription } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Acerca de Nosotros — Olimpia&apos;s Biohazard & Restoration',
  description: 'Conozca a Olimpia&apos;s Biohazard & Restoration. Técnicos certificados proporcionando servicios de limpieza de emergencia compasivos y discretos en el Área Metropolitana de Portland.',
  alternates: {
    canonical: '/es/about',
    languages: {
      'en': '/about',
      'es': '/es/about',
    },
  },
}

const PHONE = '+15035551234'

export default function AboutPageES() {
  return (
    <>
      <Header phone={PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
                Acerca de Olimpia&apos;s Biohazard & Restoration
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Restaurando propiedades y proporcionando tranquilidad en los momentos más difíciles
              </p>
            </div>
          </Container>
        </section>

        {/* Mission */}
        <section className="py-20 bg-coal">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
              Nuestra Misión
            </h2>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Proporcionamos servicios profesionales de limpieza de materiales peligrosos y restauración de emergencias con compasión, discreción y excelencia técnica. Entendemos que nuestros servicios a menudo se necesitan durante los momentos más desafiantes de la vida, y estamos aquí para ayudar.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Nuestro equipo de técnicos certificados está disponible 24/7 para responder a emergencias en todo el Área Metropolitana de Portland. Ya sea limpieza de escena del crimen, remediación de materiales peligrosos, daños por agua o fuego, o servicios de limpieza de acumulación, nos acercamos a cada trabajo con profesionalismo, respeto y una comprensión profunda de la sensibilidad requerida.
              </p>
            </div>
          </Container>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Certificaciones y Cumplimiento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="text-center">
                <div className="text-5xl mb-4">🛡️</div>
                <CardTitle>Certificado OSHA</CardTitle>
                <CardDescription>
                  Todos los técnicos están certificados en procedimientos de manejo de materiales peligrosos de OSHA y cumplen con todas las regulaciones federales de seguridad.
                </CardDescription>
              </Card>

              <Card className="text-center">
                <div className="text-5xl mb-4">🌿</div>
                <CardTitle>Cumplimiento EPA</CardTitle>
                <CardDescription>
                  Seguimos las pautas de la Agencia de Protección Ambiental para la eliminación de materiales peligrosos y protección ambiental.
                </CardDescription>
              </Card>

              <Card className="text-center">
                <div className="text-5xl mb-4">📋</div>
                <CardTitle>Con Licencia y Asegurado</CardTitle>
                <CardDescription>
                  Completamente con licencia, vinculado y asegurado para proteger su propiedad y proporcionar tranquilidad.
                </CardDescription>
              </Card>
            </div>
          </Container>
        </section>

        {/* Values */}
        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Nuestros Valores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  Compasión
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Entendemos que nuestros servicios a menudo se necesitan durante eventos traumáticos. Nos acercamos a cada situación con empatía, respeto y una comprensión profunda del impacto emocional en las personas afectadas.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  Discreción
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Su privacidad es nuestra prioridad. Utilizamos vehículos sin marcar, mantenemos estricta confidencialidad y trabajamos de manera eficiente para minimizar la atención en su propiedad.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  Profesionalismo
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nuestros técnicos certificados siguen protocolos estrictos, utilizan equipo de grado industrial y se adhieren a todos los estándares de seguridad y regulaciones. Cada trabajo se completa completamente y se documenta adecuadamente.
                </p>
              </div>

              <div className="border-l-4 border-gold pl-6">
                <h3 className="text-2xl font-heading font-semibold text-white mb-4">
                  Disponibilidad
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Las emergencias no esperan. Estamos disponibles 24/7/365 para responder a su llamada, llegar rápidamente y comenzar el proceso de remediación de inmediato.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Service Area */}
        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
              Sirviendo el Área Metropolitana de Portland
            </h2>
            <p className="text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Con sede en Milwaukie, Oregon, proporcionamos servicios de emergencia a comunidades en toda la región de Portland Metro.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                'Portland',
                'Milwaukie',
                'Gresham',
                'Lake Oswego',
                'West Linn',
                'Oregon City',
                'Beaverton',
                'Tigard',
                'Hillsboro',
                'Tualatin',
                'Clackamas',
                'Happy Valley'
              ].map(city => (
                <div
                  key={city}
                  className="text-center p-4 bg-coal rounded-lg border border-gold/20 hover:border-gold/40 transition-colors"
                >
                  <span className="text-white">{city}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                ¿Necesita Servicios de Emergencia?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Nuestro equipo está listo para ayudar 24/7
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center px-12 py-5 bg-fire text-white text-xl font-heading font-bold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Llamar Ahora: (503) 555-1234
                </a>
                <a
                  href="/es/contact"
                  className="inline-flex items-center justify-center px-12 py-5 bg-gold text-coal text-xl font-heading font-bold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                  Contáctenos
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="es" position="fixed" />

      <Footer locale="es" phone="(503) 555-1234" />
    </>
  )
}
