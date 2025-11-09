import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Limpieza de Materiales Peligrosos y Escenas del Crimen — Portland Metro — 24/7',
  description: 'Limpieza de emergencia 24/7 de materiales peligrosos y escenas del crimen en Portland Metro. Servicio discreto y profesional. Certificado por OSHA.',
  alternates: {
    canonical: '/es',
    languages: {
      'en': '/',
      'es': '/es',
    },
  },
}

export default function HomePageES() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-center mb-8">
          Limpieza de Materiales Peligrosos y Escenas del Crimen
        </h1>
        <p className="text-center text-xl text-gray-300 mb-8">
          Portland Metro — Respuesta de Emergencia 24/7
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+15035551234" className="btn-emergency">
            Llamar Ahora: (503) 555-1234
          </a>
          <button className="btn-primary">
            Llámame Ahora
          </button>
        </div>

        <div className="mt-20 text-center">
          <a href="/" className="text-water hover:text-gold">
            View in English →
          </a>
        </div>

        <div className="mt-20">
          <p className="text-center text-gray-400">
            🚧 Sitio web en construcción - Implementación completa próximamente
          </p>
          <p className="text-center text-gray-500 text-sm mt-4">
            Fase 1: Fundación Completa ✅
          </p>
        </div>
      </section>
    </main>
  )
}
