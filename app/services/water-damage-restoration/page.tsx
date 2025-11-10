import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { StructuredData } from "@/components/ui/StructuredData"
import Link from "next/link"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Water Damage Restoration – Portland, OR | Fast Dry-Out",
  description: "Emergency water extraction, structural drying, and mold prevention. Insurance-ready documentation.",
  alternates: {
    canonical: "/services/water-damage-restoration",
  },
}

const PHONE = "+19718954262"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Water Damage Restoration",
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
  name: "Water Damage Restoration Process",
  description: "Fast emergency response for water extraction, structural drying, and mold prevention with insurance documentation",
  steps: [
    {
      name: "Assessment & containment",
      text: "We identify the water source, stop the flow if possible, and assess the extent of damage to floors, walls, and contents.",
    },
    {
      name: "Water extraction",
      text: "We remove standing water using professional pumps and extractors, then begin the drying process immediately.",
    },
    {
      name: "Structural drying & dehumidification",
      text: "We place industrial fans and dehumidifiers to dry affected materials and prevent secondary damage.",
    },
    {
      name: "Monitoring & verification",
      text: "We track moisture levels daily until all materials reach acceptable dryness, then verify completion.",
    },
    {
      name: "Documentation & coordination",
      text: "We provide photos, notes, and moisture readings for your insurance carrier and can bill them directly when applicable.",
    },
  ],
})

export default function WaterDamageRestorationPage() {
  return (
    <>
      <StructuredData data={[serviceSchema, howToSchema]} />
      <Header phone={PHONE} />

      <main className="bg-coal">
        <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Water Damage Restoration in Portland, OR
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Fast emergency response for water extraction, structural drying, and mold prevention. We document
                everything for your insurance claim and coordinate with your carrier.
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
                    title="Assessment & containment"
                    description="We identify the water source, stop the flow if possible, and assess the extent of damage to floors, walls, and contents."
                  />
                  <ProcessStep
                    number="2"
                    title="Water extraction"
                    description="We remove standing water using professional pumps and extractors, then begin the drying process immediately."
                  />
                  <ProcessStep
                    number="3"
                    title="Structural drying & dehumidification"
                    description="We place industrial fans and dehumidifiers to dry affected materials and prevent secondary damage."
                  />
                  <ProcessStep
                    number="4"
                    title="Monitoring & verification"
                    description="We track moisture levels daily until all materials reach acceptable dryness, then verify completion."
                  />
                  <ProcessStep
                    number="5"
                    title="Documentation & coordination"
                    description="We provide photos, notes, and moisture readings for your insurance carrier and can bill them directly when applicable."
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Common water damage situations</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Burst pipes and plumbing failures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Storm and flood damage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Appliance leaks (water heater, dishwasher, washing machine)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Roof leaks and gutter overflow</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Sewage backups requiring sanitization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Time is critical</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Water damage worsens by the hour. Within 24-48 hours, mold can begin growing, and structural materials
                  can warp or deteriorate. Fast response reduces repair costs and protects your property value.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We&apos;re available 24/7 across Portland-metro with rapid dispatch and all equipment on our trucks.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Insurance & documentation</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Most water damage is covered under homeowner&apos;s or commercial property policies. We create
                  insurance-ready documentation with photos, moisture readings, and detailed scope of work.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  We can coordinate directly with your carrier and, when applicable, bill them directly to minimize your
                  out-of-pocket costs.
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
                    href="/services/fire-damage-restoration"
                    title="Fire Damage Restoration"
                    description="Often involves water damage from firefighting"
                  />
                  <ServiceLink
                    href="/services/biohazard-remediation"
                    title="Biohazard Remediation"
                    description="For sewage backup situations"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-fire/10 to-gold/10 border border-gold/30 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Emergency Water Damage? Call Now</h2>
                <p className="text-gray-300 mb-6">24/7 emergency response across Portland-metro</p>
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
