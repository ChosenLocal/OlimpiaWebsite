import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Biohazard & Crime Scene Cleanup in Portland, OR (24/7)",
  description:
    "24/7 biohazard, crime scene, and restoration services throughout Portland. Serving Pearl District, Alberta Arts, Sellwood, and all Portland neighborhoods.",
  alternates: {
    canonical: "/service-areas/portland-or",
  },
}

const PHONE = "+19718954262"

const services = [
  { title: "Crime Scene Cleanup", href: "/services/crime-scene-cleanup" },
  { title: "Biohazard Remediation", href: "/services/biohazard-remediation" },
  { title: "Unattended Death Cleanup", href: "/services/unattended-death-cleanup" },
  { title: "Hoarder Cleanup", href: "/services/hoarder-cleanup" },
  { title: "Water Damage Restoration", href: "/services/water-damage-restoration" },
  { title: "Fire Damage Restoration", href: "/services/fire-damage-restoration" },
]

export default function PortlandServiceAreaPage() {
  return (
    <>
      <Header phone={PHONE} />

      <main className="bg-coal">
        <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Biohazard & Crime Scene Cleanup in Portland, OR (24/7)
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Professional biohazard, trauma, and restoration services throughout Portland—from Pearl District condos
                to historic Sellwood homes, Alberta Arts District businesses to Eastside neighborhoods. We respond 24/7
                across the entire city.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto space-y-12">
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Services in Portland</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block p-4 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors group"
                    >
                      <h3 className="font-semibold text-white group-hover:text-gold">{service.title}</h3>
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Recent work in Portland</h2>
                <div className="space-y-4 text-gray-300">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gold">Pearl District condo:</span> Unattended death cleanup in a
                    high-rise unit, coordinating with building management for discreet entry and elevator access.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gold">SE Portland residence:</span> Crime scene remediation
                    following an assault, working with Portland Police and victim services.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-gold">Eastside multi-family:</span> Water damage restoration
                    after pipe burst affected three units, coordinating with property management and individual tenants.
                  </p>
                </div>
              </div>

              <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Local coordination</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We're familiar with Portland's building codes, disposal requirements, and permit processes. When
                  needed, we coordinate with Portland Police non-emergency (503-823-3333) for incident documentation and
                  with Multnomah County crisis services (503-988-4888) for family support resources.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  For infectious waste disposal, we work with Oregon-approved transport and treatment partners following
                  DEQ/OHA regulations.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Portland neighborhoods we serve</h2>
                <div className="grid md:grid-cols-3 gap-3 text-gray-300 text-sm">
                  <ul className="space-y-2">
                    <li>Pearl District</li>
                    <li>Alberta Arts District</li>
                    <li>Sellwood-Moreland</li>
                    <li>Hawthorne</li>
                    <li>Division/Clinton</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>Mississippi</li>
                    <li>St. Johns</li>
                    <li>Buckman</li>
                    <li>Richmond</li>
                    <li>Montavilla</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>Mt. Tabor</li>
                    <li>Laurelhurst</li>
                    <li>Irvington</li>
                    <li>Eastmoreland</li>
                    <li>All Portland areas</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-fire/10 to-gold/10 border border-gold/30 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Need Service in Portland? Call 24/7</h2>
                <p className="text-gray-300 mb-6">Fast response across all Portland neighborhoods</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="emergency" size="lg" asChild className="min-w-[200px]">
                    <a href={`tel:${PHONE}`}>Call Now</a>
                  </Button>
                  <Button variant="primary" size="lg" asChild className="min-w-[200px]">
                    <a href="/contact">Request Assessment</a>
                  </Button>
                </div>
              </div>

              <div className="text-center">
                <Link href="/service-areas" className="text-gold hover:text-gold/80 underline">
                  ← Back to all service areas
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}
