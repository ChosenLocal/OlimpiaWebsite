import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { StructuredData } from "@/components/ui/StructuredData"
import Link from "next/link"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Fire Damage Restoration – Portland, OR | Smoke & Soot Removal",
  description: "Emergency board-up, debris removal, smoke/odor remediation, rebuild coordination.",
  alternates: {
    canonical: "/services/fire-damage-restoration",
  },
}

const PHONE = "+19718954262"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fire Damage Restoration",
  provider: {
    "@type": "LocalBusiness",
    name: "Olimpia's Biohazard & Restoration LLC",
    telephone: "(971) 895-4262",
  },
  areaServed: {
    "@type": "City",
    name: "Portland",
  },
}

const howToSchema = generateHowToSchema({
  name: "Fire Damage Restoration Process",
  description: "Emergency board-up, debris removal, smoke and soot remediation, odor treatment, and rebuild coordination",
  steps: [
    {
      name: "Emergency board-up & security",
      text: "We secure the property immediately to prevent weather damage, theft, or unauthorized entry.",
    },
    {
      name: "Assessment & documentation",
      text: "We inspect all affected areas, photograph damage, and create a detailed scope for your insurance claim.",
    },
    {
      name: "Debris removal",
      text: "We remove charred materials, damaged contents, and hazardous debris following safety protocols.",
    },
    {
      name: "Smoke & soot cleaning",
      text: "We clean walls, ceilings, and surfaces using specialized equipment and techniques for different soot types.",
    },
    {
      name: "Odor remediation",
      text: "We treat smoke odors with ozone treatment, thermal fogging, or sealing depending on severity.",
    },
    {
      name: "Restoration & rebuild",
      text: "We coordinate with contractors for reconstruction or handle the full rebuild ourselves.",
    },
  ],
})

export default function FireDamageRestorationPage() {
  return (
    <>
      <StructuredData data={[serviceSchema, howToSchema]} />
      <Header phone={PHONE} />

      <main className="bg-coal">
        <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Fire Damage Cleanup & Restoration in Portland
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Emergency board-up, debris removal, smoke and soot remediation, odor treatment, and rebuild
                coordination. We secure your property and restore it to pre-loss condition.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Our Process</h2>
                <div className="space-y-6">
                  <ProcessStep
                    number="1"
                    title="Emergency board-up & security"
                    description="We secure the property immediately to prevent weather damage, theft, or unauthorized entry."
                  />
                  <ProcessStep
                    number="2"
                    title="Assessment & documentation"
                    description="We inspect all affected areas, photograph damage, and create a detailed scope for your insurance claim."
                  />
                  <ProcessStep
                    number="3"
                    title="Debris removal"
                    description="We remove charred materials, damaged contents, and hazardous debris following safety protocols."
                  />
                  <ProcessStep
                    number="4"
                    title="Smoke & soot cleaning"
                    description="We clean walls, ceilings, and surfaces using specialized equipment and techniques for different soot types."
                  />
                  <ProcessStep
                    number="5"
                    title="Odor remediation"
                    description="We treat smoke odors with ozone treatment, thermal fogging, or sealing depending on severity."
                  />
                  <ProcessStep
                    number="6"
                    title="Restoration & rebuild"
                    description="We coordinate with contractors for reconstruction or handle the full rebuild ourselves."
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Common fire damage situations</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Kitchen fires from cooking accidents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Electrical fires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Furnace or chimney fires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Smoke damage from nearby fires</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Multi-unit fires affecting adjacent properties</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Hidden smoke damage</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Even small fires create widespread smoke damage. Soot particles travel through HVAC systems and settle
                  in rooms far from the fire. Smoke odors penetrate porous materials like drywall, insulation, and
                  fabrics.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Professional assessment and cleaning prevent long-term odor and corrosion issues that DIY approaches
                  miss.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Insurance & documentation</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Fire damage claims require thorough documentation. We photograph all damage, inventory affected
                  contents, and provide detailed estimates for both emergency services and full restoration.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We work directly with adjusters and can bill your carrier when coverage applies.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Service area</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Portland, Milwaukie, Gresham, Beaverton, Hillsboro, Lake Oswego, Oregon City, Tigard, Tualatin,
                  Vancouver, WA, and nearby communities.
                </p>
                <Link href="/service-areas" className="text-gold hover:text-gold/80 underline">
                  View all service areas
                </Link>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Related services</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ServiceLink
                    href="/services/water-damage-restoration"
                    title="Water Damage Restoration"
                    description="Firefighting often causes water damage"
                  />
                  <ServiceLink
                    href="/services/hoarder-cleanup"
                    title="Hoarder Cleanup"
                    description="Fire risk reduction and cleanup"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-fire/10 to-gold/10 border border-gold/30 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Emergency Fire Damage? Call Now</h2>
                <p className="text-gray-300 mb-6">24/7 emergency response for board-up and fire restoration</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="emergency" size="lg" asChild className="min-w-[200px]">
                    <a href={`tel:${PHONE}`}>Call Now</a>
                  </Button>
                  <Button variant="primary" size="lg" asChild className="min-w-[200px]">
                    <a href="/contact">Request Assessment</a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-10 h-10 bg-gold text-coal rounded-full flex items-center justify-center font-bold">
        {number}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

function ServiceLink({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <Link
      href={href}
      className="block p-4 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors group"
    >
      <h3 className="font-semibold text-white group-hover:text-gold mb-1">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </Link>
  )
}
