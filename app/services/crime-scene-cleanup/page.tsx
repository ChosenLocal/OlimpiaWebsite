import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { Container } from "@/components/ui/Container"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { StructuredData } from "@/components/ui/StructuredData"
import { generateHowToSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Crime Scene Cleanup Portland | Olimpia's",
  description:
    "Discreet, OSHA-compliant crime & trauma cleanup in Portland. We coordinate with insurance and arrive fast.",
  alternates: {
    canonical: "/services/crime-scene-cleanup",
  },
}

const PHONE = "+19718954262"

const faqs = [
  {
    question: "What is crime scene cleanup?",
    answer: "It's the removal of blood and other biohazards, followed by disinfection and safe disposal.",
  },
  {
    question: "Do you wait until police release the scene?",
    answer: "Yes. We begin only after law enforcement releases the property.",
  },
  {
    question: "Do you handle suicide or unattended death cleanup?",
    answer: "Yes. We remediate affected areas discreetly and with compassion.",
  },
  {
    question: "Is crime scene cleanup different from regular cleaning?",
    answer: "Yes. It requires specialized PPE, protocols, chemicals, and disposal.",
  },
  {
    question: "Do you remove carpets, drywall, or flooring if contaminated?",
    answer: "When needed, we safely remove and dispose of affected materials.",
  },
  {
    question: "Can you provide a certificate of remediation?",
    answer: "Yes. We can issue documentation describing the work performed.",
  },
  {
    question: "Do you clean vehicles after a biohazard incident?",
    answer: "When safety and scope allow, yes—ask about vehicle remediation availability.",
  },
  {
    question: "Will there be odors after cleanup?",
    answer: "Any remaining odors are treated; persistent odors usually mean more material must be removed.",
  },
  {
    question: "Can you help with personal belongings?",
    answer:
      "We separate salvageable items, clean what's safe to retain, and discard contaminated items with your approval.",
  },
  {
    question: "How fast can you arrive?",
    answer: "Typical emergency response is within hours; call for the current ETA to your address.",
  },
  {
    question: "Do you use unmarked vehicles for privacy?",
    answer: "Yes—request unmarked vehicles and discreet arrival instructions when you call.",
  },
  {
    question: "Is crime scene cleanup covered by insurance?",
    answer: "Often, yes—coverage depends on your policy. We'll help you check and document.",
  },
  {
    question: "Do you bill insurance directly?",
    answer: "Yes. When coverage applies, we can bill your carrier directly.",
  },
  {
    question: "What safety standards do you follow?",
    answer: "We follow documented bloodborne‑pathogen precautions, PPE requirements, and industry best practices.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

const howToSchema = generateHowToSchema({
  name: "Crime Scene Cleanup Process",
  description: "Professional crime and trauma scene cleanup following OSHA universal precautions",
  steps: [
    {
      name: "Assessment & containment",
      text: "We secure the scene, establish zones, and set up PPE and engineering controls.",
    },
    {
      name: "Removal & disinfection",
      text: "We remove affected materials, clean and disinfect surfaces, and address hidden contamination.",
    },
    {
      name: "Odor & verification",
      text: "We treat odor sources, then verify cleanliness before restoring the space.",
    },
    {
      name: "Documentation & insurance",
      text: "Photos, notes, and scope delivered for carriers; we can bill them directly when applicable.",
    },
  ],
})

export default function CrimeSceneCleanupPage() {
  return (
    <>
      <StructuredData data={[faqSchema, howToSchema]} />
      <Header phone={PHONE} />

      <main>
        <section className="py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Crime & Trauma Scene Cleanup in Portland, OR
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                When an incident leaves blood or other potentially infectious materials behind, the priority is a safe,
                thorough cleanup—handled with privacy and respect. Our certified team follows a documented
                exposure-control process and OSHA universal precautions to protect everyone on site.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button variant="emergency" size="lg" asChild>
                  <a href={`tel:${PHONE}`}>Call 24/7</a>
                </Button>
                <Button variant="primary" size="lg" asChild className="bg-gold text-coal hover:bg-gold/90">
                  <a href="/contact">Request Same-Day Assessment</a>
                </Button>
              </div>

              <div className="prose prose-invert prose-lg max-w-none">
                <h2 className="text-2xl font-heading font-bold text-gold mb-4">Our Process</h2>

                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Assessment & containment</h3>
                      <p className="text-gray-300">
                        We secure the scene, establish zones, and set up PPE and engineering controls.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Removal & disinfection</h3>
                      <p className="text-gray-300">
                        We remove affected materials, clean and disinfect surfaces, and address hidden contamination.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Odor & verification</h3>
                      <p className="text-gray-300">
                        We treat odor sources, then verify cleanliness before restoring the space.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full flex items-center justify-center text-coal font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Documentation & insurance</h3>
                      <p className="text-gray-300">
                        Photos, notes, and scope delivered for carriers; we can bill them directly when applicable.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-heading font-bold text-gold mb-4">Common situations we handle</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-12">
                  <li>Crime and assault scenes</li>
                  <li>Blood spills</li>
                  <li>Vehicle incidents</li>
                  <li>Business workspace incidents</li>
                  <li>Multi-unit common areas</li>
                </ul>

                <h2 className="text-2xl font-heading font-bold text-gold mb-4">Insurance & privacy</h2>
                <p className="text-gray-300 mb-12">
                  We coordinate with your carrier when coverage applies and keep details confidential. Our crews can
                  arrive in unmarked vehicles by request.
                </p>

                <h2 className="text-2xl font-heading font-bold text-gold mb-4">Service area</h2>
                <p className="text-gray-300 mb-4">
                  Portland, Milwaukie, Gresham, Beaverton, Hillsboro, Lake Oswego, Oregon City, Tigard, Tualatin,
                  Vancouver, WA, and nearby communities.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                  <Link href="/service-areas/portland-or" className="text-water hover:text-gold">
                    Portland
                  </Link>
                  <Link href="/service-areas/milwaukie-or" className="text-water hover:text-gold">
                    Milwaukie
                  </Link>
                  <Link href="/service-areas/gresham-or" className="text-water hover:text-gold">
                    Gresham
                  </Link>
                  <Link href="/service-areas/beaverton-or" className="text-water hover:text-gold">
                    Beaverton
                  </Link>
                </div>

                <div className="bg-charcoal border border-gold/20 rounded-lg p-6 mb-12">
                  <h3 className="text-xl font-semibold text-gold mb-3">Safety note on infectious waste</h3>
                  <p className="text-gray-300">
                    We manage and dispose of infectious waste in accordance with Oregon rules (pathological, biological,
                    cultures/stocks, sharps), working with approved transport/treatment partners.
                  </p>
                </div>

                <h2 className="text-2xl font-heading font-bold text-gold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6 mb-12">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-700 pb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-400">{faq.answer}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-2xl font-heading font-bold text-gold mb-4">Related Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Link
                    href="/services/biohazard-remediation"
                    className="block p-4 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors"
                  >
                    <h3 className="font-semibold text-white mb-2">Biohazard Remediation</h3>
                    <p className="text-sm text-gray-400">Infectious material cleanup</p>
                  </Link>
                  <Link
                    href="/services/unattended-death-cleanup"
                    className="block p-4 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors"
                  >
                    <h3 className="font-semibold text-white mb-2">Unattended Death</h3>
                    <p className="text-sm text-gray-400">Compassionate remediation</p>
                  </Link>
                  <Link
                    href="/services/hoarder-cleanup"
                    className="block p-4 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors"
                  >
                    <h3 className="font-semibold text-white mb-2">Hoarder Cleanup</h3>
                    <p className="text-sm text-gray-400">Discreet organization</p>
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-6">Ready for Help?</h2>
              <p className="text-gray-300 mb-8">Call 24/7 or request a discreet same-day assessment</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="emergency" size="lg" asChild>
                  <a href={`tel:${PHONE}`}>Call Now</a>
                </Button>
                <Button variant="primary" size="lg" asChild className="bg-gold text-coal hover:bg-gold/90">
                  <a href="/contact">Request Assessment</a>
                </Button>
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
