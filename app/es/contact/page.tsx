import type { Metadata } from 'next'
import { Header } from '@/components/ui/Header'
import { Footer } from '@/components/sections/Footer'
import { EmergencyCTA } from '@/components/ui/EmergencyCTA'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contáctenos — Respuesta de Emergencia 24/7 | Olimpia&apos;s Biohazard',
  description: 'Contacte a Olimpia&apos;s Biohazard para servicios de limpieza de emergencia. Disponible 24/7 en todo el Área Metropolitana de Portland. Llame al (503) 555-1234.',
  alternates: {
    canonical: '/es/contact',
    languages: {
      'en': '/contact',
      'es': '/es/contact',
    },
  },
}

const PHONE = '+15035551234'

export default function ContactPageES() {
  return (
    <>
      <Header phone={PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Contáctenos
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Respuesta de emergencia 24/7 para servicios de limpieza de materiales peligrosos y restauración
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${PHONE}`} className="inline-flex items-center justify-center px-8 py-4 bg-fire text-white font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Llamar Ahora: (503) 555-1234
                </a>
                <a href={`mailto:info@olimpiasbiohazard.com`} className="inline-flex items-center justify-center px-8 py-4 bg-gold text-coal font-heading font-semibold rounded-lg hover:bg-opacity-90 transition-colors">
                  Envíenos un Correo
                </a>
              </div>
            </div>
          </Container>
        </section>

        <div className="py-20 bg-coal">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm locale="es" />

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">
                  Póngase en Contacto
                </h2>

                <div className="space-y-8">
                  {/* Emergency Contact */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Línea de Emergencia 24/7
                    </h3>
                    <p className="text-gray-300 mb-4">
                      Para respuesta de emergencia inmediata, llame a nuestra línea directa 24/7:
                    </p>
                    <a href={`tel:${PHONE}`} className="text-3xl font-bold text-white hover:text-gold transition-colors">
                      (503) 555-1234
                    </a>
                    <p className="text-sm text-gray-400 mt-4">
                      Disponible 24 horas al día, 7 días a la semana, incluidos los días festivos
                    </p>
                  </div>

                  {/* Email */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Correo Electrónico
                    </h3>
                    <a href="mailto:info@olimpiasbiohazard.com" className="text-water hover:text-gold transition-colors">
                      info@olimpiasbiohazard.com
                    </a>
                    <p className="text-sm text-gray-400 mt-2">
                      Respondemos correos electrónicos dentro de 2 horas hábiles
                    </p>
                  </div>

                  {/* Address */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Área de Servicio
                    </h3>
                    <p className="text-gray-300 mb-2">
                      Con sede en Milwaukie, Oregon
                    </p>
                    <p className="text-gray-300">
                      Sirviendo toda el Área Metropolitana de Portland
                    </p>
                  </div>

                  {/* Hours */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">
                      Horario
                    </h3>
                    <p className="text-gray-300 text-lg font-semibold">
                      Respuesta de Emergencia 24/7
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      Horario de oficina: Lunes a Viernes, 8 AM - 5 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Link */}
        <section className="py-20 bg-charcoal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">
                ¿Tiene Preguntas?
              </h2>
              <p className="text-gray-300 mb-6">
                Consulte nuestras preguntas frecuentes para respuestas rápidas
              </p>
              <a href="/es#faq" className="text-water hover:text-gold transition-colors">
                Ver Preguntas Frecuentes →
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
