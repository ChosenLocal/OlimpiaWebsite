import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Biohazard & Crime Scene Cleanup — Portland Metro — 24/7',
  description: '24/7 emergency biohazard and crime scene cleanup in Portland Metro. Discreet, professional service. OSHA certified. Call now for immediate response.',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es': '/es',
    },
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20">
        <h1 className="text-center mb-8">
          Biohazard & Crime Scene Cleanup
        </h1>
        <p className="text-center text-xl text-gray-300 mb-8">
          Portland Metro — 24/7 Emergency Response
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+15035551234" className="btn-emergency">
            Call Now: (503) 555-1234
          </a>
          <button className="btn-primary">
            Call Me Now
          </button>
        </div>

        <div className="mt-20 text-center">
          <a href="/es" className="text-water hover:text-gold">
            Ver en Español →
          </a>
        </div>

        <div className="mt-20">
          <p className="text-center text-gray-400">
            🚧 Website under construction - Full implementation coming soon
          </p>
          <p className="text-center text-gray-500 text-sm mt-4">
            Phase 1: Foundation Complete ✅
          </p>
        </div>
      </section>
    </main>
  )
}
