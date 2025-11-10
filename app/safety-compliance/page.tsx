import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { Container } from "@/components/ui/Container"

export const metadata: Metadata = {
  title: "Safety & Compliance | Olimpia's Biohazard & Restoration",
  description: "Learn about our OSHA compliance and Oregon infectious-waste handling standards for biohazard cleanup.",
  alternates: {
    canonical: "/safety-compliance",
  },
  openGraph: {
    title: "Safety & Compliance | Olimpia's Biohazard & Restoration",
    description: "Learn about our OSHA compliance and Oregon infectious-waste handling standards for biohazard cleanup.",
    url: "/safety-compliance",
    siteName: "Olimpia's Biohazard & Restoration",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Olimpia's Biohazard & Restoration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety & Compliance | Olimpia's Biohazard & Restoration",
    description: "Learn about our OSHA compliance and Oregon infectious-waste handling standards for biohazard cleanup.",
    images: ["/logo.png"],
  },
}

const PHONE = "+19718954262"

export default function SafetyCompliancePage() {
  return (
    <>
      <Header phone={PHONE} />

      <main>
        <section className="py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Safety & Compliance</h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-12">
                Our teams operate under OSHA's Bloodborne Pathogens Standard (29 CFR 1910.1030) with documented
                exposure-control plans, universal precautions, and PPE. Infectious waste is handled and disposed of per
                Oregon DEQ/OHA rules covering pathological, biological, cultures/stocks, and sharps. We work with
                approved transport and treatment partners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                  <h2 className="text-2xl font-heading font-bold text-gold mb-4">OSHA Compliance</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Bloodborne Pathogens Standard (29 CFR 1910.1030)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Documented exposure-control plans</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Universal precautions protocols</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Personal protective equipment (PPE)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                  <h2 className="text-2xl font-heading font-bold text-gold mb-4">Oregon Standards</h2>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Oregon DEQ/OHA infectious-waste rules</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Pathological and biological waste handling</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Cultures/stocks and sharps disposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Approved transport and treatment partners</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Our Commitment</h2>
                <p className="text-gray-300 leading-relaxed">
                  Every member of our team receives ongoing training in safety protocols, infectious disease prevention,
                  and proper handling of biohazardous materials. We maintain comprehensive documentation of all cleanup
                  procedures and work closely with regulatory agencies to ensure full compliance with local, state, and
                  federal regulations.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}
