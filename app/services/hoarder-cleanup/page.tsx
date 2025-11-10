import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { StructuredData } from "@/components/ui/StructuredData"
import Link from "next/link"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Hoarder Cleanup – Portland, OR | Discreet & Organized",
  description:
    "Full-service hoarding cleanup: sorting, disposal, sanitization, and restoration with compassion and privacy.",
  alternates: {
    canonical: "/services/hoarder-cleanup",
  },
}

const PHONE = "+19718954262"

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Hoarder Cleanup",
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
  name: "Hoarding Cleanup Process",
  description: "Organized, respectful cleanup with sorting, disposal, sanitization, and restoration handled with compassion and complete privacy",
  steps: [
    {
      name: "Assessment & planning",
      text: "We meet on-site, review the scope, and create a structured plan that respects belongings and priorities.",
    },
    {
      name: "Sorting & organizing",
      text: "We categorize items into keep, donate, recycle, and dispose—working with you or designated family members.",
    },
    {
      name: "Removal & disposal",
      text: "We handle debris, hazards, and unwanted items with proper disposal methods and documentation.",
    },
    {
      name: "Deep cleaning & sanitization",
      text: "We disinfect surfaces, treat odors, and restore the space to a safe, livable condition.",
    },
  ],
})

export default function HoarderCleanupPage() {
  return (
    <>
      <StructuredData data={[serviceSchema, howToSchema]} />
      <Header phone={PHONE} />

      <main className="bg-coal">
        <section className="py-20 md:py-32 bg-gradient-to-b from-charcoal to-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Hoarder Cleanup & Disinfection in Portland
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                When clutter becomes overwhelming, we provide organized, respectful cleanup with sorting, disposal,
                sanitization, and restoration—handled with compassion and complete privacy.
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
                    title="Assessment & planning"
                    description="We meet on-site, review the scope, and create a structured plan that respects belongings and priorities."
                  />
                  <ProcessStep
                    number="2"
                    title="Sorting & organizing"
                    description="We categorize items into keep, donate, recycle, and dispose—working with you or designated family members."
                  />
                  <ProcessStep
                    number="3"
                    title="Removal & disposal"
                    description="We handle debris, hazards, and unwanted items with proper disposal methods and documentation."
                  />
                  <ProcessStep
                    number="4"
                    title="Deep cleaning & sanitization"
                    description="We disinfect surfaces, treat odors, and restore the space to a safe, livable condition."
                  />
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Common situations we handle</h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Residential hoarding cleanup for homes and apartments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Estate cleanup after a loved one passes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Property management cleanouts for tenant turnover</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Animal hoarding situations requiring biohazard cleanup</span>
                  </li>
                </ul>
              </div>

              <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Privacy & compassion</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We understand hoarding is a sensitive matter. Our teams work discreetly with unmarked vehicles and
                  maintain strict confidentiality. We treat every situation with respect and work at a pace that honors
                  the individual&apos;s needs.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When family members or social services are involved, we coordinate transparently and provide
                  documentation as needed.
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
                    href="/services/biohazard-remediation"
                    title="Biohazard Remediation"
                    description="For animal waste or infectious materials"
                  />
                  <ServiceLink
                    href="/services/unattended-death-cleanup"
                    title="Unattended Death Cleanup"
                    description="Often needed alongside hoarding cleanup"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-fire/10 to-gold/10 border border-gold/30 rounded-lg p-8 text-center">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Get Help Now (24/7)</h2>
                <p className="text-gray-300 mb-6">
                  Request a compassionate, same-day assessment or call for immediate consultation
                </p>
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
