import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import Link from "next/link"
import { StructuredData } from "@/components/ui/StructuredData"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Biohazard Remediation – Portland, OR | Certified Technicians",
  description:
    "Blood, bodily fluids, and infectious waste remediation. Discreet, compliant cleanup for homes & businesses.",
  alternates: {
    canonical: "/services/biohazard-remediation",
  },
}

const PHONE = "+19718954262"

const howToSchema = generateHowToSchema({
  name: "Biohazard Remediation Process",
  description: "Professional biohazard remediation following OSHA 1910.1030 universal precautions",
  steps: [
    {
      name: "Assess & Contain",
      text: "We identify all affected areas, establish containment zones, and deploy proper PPE and engineering controls following OSHA 1910.1030 universal precautions.",
    },
    {
      name: "Remove & Disinfect",
      text: "All contaminated materials are safely removed and disposed of per Oregon infectious waste regulations. Surfaces are thoroughly cleaned and disinfected using EPA-registered antimicrobials.",
    },
    {
      name: "Verify & Restore",
      text: "We conduct thorough verification testing, address any odor issues, and coordinate restoration to return the space to safe use.",
    },
  ],
})

export default function BiohazardRemediationPage() {
  return (
    <>
      <StructuredData data={[howToSchema]} />
      <Header phone={PHONE} />

      <main>
        <section className="relative py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 text-balance">
                Professional Biohazard Remediation in Portland
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Complete remediation of blood, bodily fluids, and potentially infectious materials in residential and
                commercial settings. Our certified technicians follow strict OSHA protocols to ensure safe, thorough
                decontamination.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="emergency" size="lg" asChild>
                  <a href={`tel:${PHONE}`}>Call 24/7</a>
                </Button>
                <Button variant="primary" size="lg" asChild>
                  <a href="/contact">Request Same-Day Assessment</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">When You Need Biohazard Remediation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Blood and bodily fluid spills",
                  "Medical waste incidents",
                  "Laboratory contamination",
                  "Industrial biohazard events",
                  "Infectious disease exposure",
                  "Sewage backups with contamination",
                ].map((situation) => (
                  <div key={situation} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{situation}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Our Process</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Assess & Contain</h3>
                    <p className="text-gray-400">
                      We identify all affected areas, establish containment zones, and deploy proper PPE and engineering
                      controls following OSHA 1910.1030 universal precautions.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Remove & Disinfect</h3>
                    <p className="text-gray-400">
                      All contaminated materials are safely removed and disposed of per Oregon infectious waste
                      regulations. Surfaces are thoroughly cleaned and disinfected using EPA-registered antimicrobials.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Verify & Restore</h3>
                    <p className="text-gray-400">
                      We conduct thorough verification testing, address any odor issues, and coordinate restoration to
                      return the space to safe use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-charcoal border border-gold/20 rounded-lg p-6">
                <p className="text-gray-300">
                  <strong className="text-white">OSHA Compliance:</strong> Our teams operate under documented
                  exposure-control plans aligned with OSHA&apos;s Bloodborne Pathogens Standard.{" "}
                  <Link href="/safety-compliance" className="text-gold hover:text-gold/80 underline">
                    Learn more about our safety protocols
                  </Link>
                  .
                </p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Insurance & Privacy</h2>
              <p className="text-lg text-gray-300 mb-4">
                We provide detailed documentation for insurance claims and maintain strict confidentiality. Unmarked
                vehicles available upon request.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Related Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/services/crime-scene-cleanup"
                  className="p-6 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Crime Scene Cleanup</h3>
                  <p className="text-gray-400 text-sm">Professional trauma scene decontamination</p>
                </Link>
                <Link
                  href="/services/unattended-death-cleanup"
                  className="p-6 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Unattended Death Cleanup</h3>
                  <p className="text-gray-400 text-sm">Compassionate remediation and odor control</p>
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-gradient-to-b from-charcoal to-coal border-t border-gold/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Get Expert Help Now</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency" size="lg" asChild>
                  <a href={`tel:${PHONE}`}>Call 24/7</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/contact">Request Assessment</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />
      <Footer locale="en" phone={PHONE.replace("+1", "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")} />
    </>
  )
}
