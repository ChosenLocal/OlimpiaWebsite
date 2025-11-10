import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { StructuredData } from "@/components/ui/StructuredData"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Unattended Death Cleanup – Portland, OR | Discreet & Compassionate",
  description: "Safe remediation, odor removal, and restoration after unattended death. 24/7 response.",
  alternates: {
    canonical: "/services/unattended-death-cleanup",
  },
}

const PHONE = "+19718954262"

const howToSchema = generateHowToSchema({
  name: "Unattended Death Cleanup Process",
  description: "Compassionate, professional remediation after an unattended death with complete decontamination and odor removal",
  steps: [
    {
      name: "Initial Assessment",
      text: "We arrive discreetly, assess the full scope of contamination, and create a comprehensive remediation plan.",
    },
    {
      name: "Safe Removal & Disposal",
      text: "All biohazardous materials are carefully removed and disposed of in compliance with Oregon infectious waste regulations.",
    },
    {
      name: "Deep Cleaning & Decontamination",
      text: "Professional-grade disinfection of all affected surfaces, including hidden areas where fluids may have penetrated.",
    },
    {
      name: "Odor Elimination",
      text: "Advanced odor removal techniques that eliminate—not mask—decomposition odors at the molecular level.",
    },
    {
      name: "Final Verification",
      text: "Thorough inspection and verification that the space is safe, clean, and ready for use.",
    },
  ],
})

export default function UnattendedDeathCleanupPage() {
  return (
    <>
      <StructuredData data={[howToSchema]} />
      <Header phone={PHONE} />

      <main>
        <section className="relative py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6 text-balance">
                Unattended Death Cleanup in Portland, OR
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Compassionate, professional remediation after an unattended death. Our certified team handles every
                aspect of cleanup, decontamination, and odor removal with dignity and discretion.
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
              <h2 className="text-3xl font-heading font-bold text-white mb-6">What We Handle</h2>
              <p className="text-lg text-gray-300 mb-6">
                Unattended deaths require specialized cleanup that goes beyond standard cleaning. Decomposition creates
                biohazardous materials and pervasive odors that demand professional remediation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Complete biohazard removal",
                  "Deep decontamination and disinfection",
                  "Odor elimination (not masking)",
                  "Flooring and subfloor remediation",
                  "HVAC system decontamination",
                  "Personal belongings handling",
                ].map((service) => (
                  <div key={service} className="flex items-start gap-3 text-gray-300">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Our Compassionate Process</h2>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Initial Assessment</h3>
                    <p className="text-gray-400">
                      We arrive discreetly, assess the full scope of contamination, and create a comprehensive
                      remediation plan.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Safe Removal & Disposal</h3>
                    <p className="text-gray-400">
                      All biohazardous materials are carefully removed and disposed of in compliance with Oregon
                      infectious waste regulations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Deep Cleaning & Decontamination</h3>
                    <p className="text-gray-400">
                      Professional-grade disinfection of all affected surfaces, including hidden areas where fluids may
                      have penetrated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Odor Elimination</h3>
                    <p className="text-gray-400">
                      Advanced odor removal techniques that eliminate—not mask—decomposition odors at the molecular
                      level.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-gold">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Final Verification</h3>
                    <p className="text-gray-400">
                      Thorough inspection and verification that the space is safe, clean, and ready for use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Privacy & Discretion</h2>
              <p className="text-lg text-gray-300 mb-4">
                We understand the sensitive nature of these situations. Our team arrives in unmarked vehicles, works
                discreetly, and maintains complete confidentiality. We coordinate with law enforcement, property
                managers, and family members with respect and professionalism.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Insurance Coordination</h2>
              <p className="text-lg text-gray-300 mb-4">
                Many homeowner and property insurance policies cover unattended death cleanup. We provide detailed
                documentation and can bill your insurance directly when coverage applies.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-coal border border-gold/20 rounded-lg p-8">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">Local Crisis Resources</h3>
                <p className="text-gray-300 mb-4">
                  If you or someone you know is experiencing a crisis, help is available:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>
                    <strong className="text-white">Multnomah County 24/7 Crisis Line:</strong> 503-988-4888
                  </li>
                  <li>
                    <strong className="text-white">Portland Non-Emergency:</strong> 503-823-3333
                  </li>
                  <li>
                    <strong className="text-white">National Crisis Hotline:</strong> 988
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-gradient-to-b from-coal to-charcoal border-t border-gold/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">We&apos;re Here to Help 24/7</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency" size="lg" asChild>
                  <a href={`tel:${PHONE}`}>Call Now</a>
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
