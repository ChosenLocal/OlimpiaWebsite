import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { StructuredData } from "@/components/ui/StructuredData"
import Link from "next/link"

export const metadata: Metadata = {
  title: "FAQs – Biohazard & Crime Scene Cleanup Portland | Olimpia's",
  description:
    "Common questions about biohazard cleanup, insurance coverage, response times, and safety protocols in Portland.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "FAQs – Biohazard & Crime Scene Cleanup Portland | Olimpia's",
    description: "Common questions about biohazard cleanup, insurance coverage, response times, and safety protocols in Portland.",
    url: "/faqs",
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
    title: "FAQs – Biohazard & Crime Scene Cleanup Portland | Olimpia's",
    description: "Common questions about biohazard cleanup, insurance coverage, response times, and safety protocols in Portland.",
    images: ["/logo.png"],
  },
}

const PHONE = "+19718954262"

const faqs = [
  // Emergency & Logistics
  {
    question: "Do you provide 24/7 emergency cleanup in Portland?",
    answer: "Yes. We dispatch crews around the clock across the Portland‑metro area.",
    category: "Emergency & Logistics",
  },
  {
    question: "How fast can you arrive?",
    answer: "Typical emergency response is within hours; call for the current ETA to your address.",
    category: "Emergency & Logistics",
  },
  {
    question: "What should I do before you arrive?",
    answer: "Keep people and pets out of the affected area and avoid cleaning anything yourself.",
    category: "Emergency & Logistics",
  },
  {
    question: "Do you use unmarked vehicles for privacy?",
    answer: "Yes—request unmarked vehicles and discreet arrival instructions when you call.",
    category: "Emergency & Logistics",
  },
  {
    question: "Can I text you instead of calling?",
    answer: "Yes. We can start intake and send updates by text if you prefer.",
    category: "Emergency & Logistics",
  },
  {
    question: "Do you work nights, weekends, and holidays?",
    answer: "Yes. Cleanup is available 24/7, including holidays.",
    category: "Emergency & Logistics",
  },
  {
    question: "Will you coordinate access with building management or an HOA?",
    answer: "Yes. With your permission, we'll work with managers, HOAs, or security.",
    category: "Emergency & Logistics",
  },
  {
    question: "Do you operate in apartments and high‑rises?",
    answer: "Yes. We follow building rules for access, elevators, parking, and waste routes.",
    category: "Emergency & Logistics",
  },
  {
    question: "Can I upload photos for a faster estimate?",
    answer: "Yes. Secure photo upload helps us scope materials, PPE, and disposal needs.",
    category: "Emergency & Logistics",
  },
  {
    question: "How long does a typical cleanup take?",
    answer: "Most jobs complete same day; larger or multi‑room projects can take 1–3 days.",
    category: "Emergency & Logistics",
  },

  // Crime Scene & Trauma
  {
    question: "What is crime scene cleanup?",
    answer: "It's the removal of blood and other biohazards, followed by disinfection and safe disposal.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Do you wait until police release the scene?",
    answer: "Yes. We begin only after law enforcement releases the property.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Do you handle suicide or unattended death cleanup?",
    answer: "Yes. We remediate affected areas discreetly and with compassion.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Is crime scene cleanup different from regular cleaning?",
    answer: "Yes. It requires specialized PPE, protocols, chemicals, and disposal.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Do you remove carpets, drywall, or flooring if contaminated?",
    answer: "When needed, we safely remove and dispose of affected materials.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Can you provide a certificate of remediation?",
    answer: "Yes. We can issue documentation describing the work performed.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Do you test for pathogens?",
    answer:
      "We're a remediation company; we don't diagnose medical conditions. Clearance testing can be arranged when appropriate.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Do you clean vehicles after a biohazard incident?",
    answer: "When safety and scope allow, yes—ask about vehicle remediation availability.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Will there be odors after cleanup?",
    answer: "Any remaining odors are treated; persistent odors usually mean more material must be removed.",
    category: "Crime Scene & Trauma",
  },
  {
    question: "Can you help with personal belongings?",
    answer:
      "We separate salvageable items, clean what's safe to retain, and discard contaminated items with your approval.",
    category: "Crime Scene & Trauma",
  },

  // Unattended Death
  {
    question: "What happens during unattended death cleanup?",
    answer: "We remove affected materials, control odors, disinfect, and restore the area to a safe condition.",
    category: "Unattended Death",
  },
  {
    question: "How do you handle sensitive items and documents?",
    answer: "We inventory, photograph, and return safe items per your instructions.",
    category: "Unattended Death",
  },
  {
    question: "Is it safe to stay in the home during cleanup?",
    answer: "Usually not; we'll advise after assessment and containment.",
    category: "Unattended Death",
  },
  {
    question: "Will you work directly with a property manager or estate representative?",
    answer: "Yes. We can coordinate with family, attorneys, or property managers.",
    category: "Unattended Death",
  },
  {
    question: "Can you assist with grief and victim support resources?",
    answer: "Yes. We can share local resource contacts on request.",
    category: "Unattended Death",
  },

  // Biohazard Remediation
  {
    question: "What counts as a biohazard?",
    answer:
      "Blood, bodily fluids, and other potentially infectious materials requiring controlled cleanup and disposal.",
    category: "Biohazard",
  },
  {
    question: "How do you dispose of biohazardous waste?",
    answer: "We package, label, and transfer waste for compliant treatment and disposal via approved partners.",
    category: "Biohazard",
  },
  {
    question: "Do you handle needlestick or sharps cleanup?",
    answer: "Yes. We secure and containerize sharps as part of biohazard remediation.",
    category: "Biohazard",
  },
  {
    question: "Do you clean commercial sites and workplaces?",
    answer: "Yes. We service offices, retail, warehouses, and industrial settings.",
    category: "Biohazard",
  },
  {
    question: "Can you coordinate with our EHS or safety officer?",
    answer: "Yes. We align our plan with your internal safety requirements.",
    category: "Biohazard",
  },

  // Hoarder Cleanup
  {
    question: "What is included in hoarder cleanup?",
    answer: "Sorting, disposal, donation coordination, deep cleaning, and disinfection where needed.",
    category: "Hoarder Cleanup",
  },
  {
    question: "Will you keep the hoarder cleanup process discreet?",
    answer: "Yes. We schedule discreetly and use unmarked vehicles on request.",
    category: "Hoarder Cleanup",
  },
  {
    question: "Do I need to be present during hoarder cleanup?",
    answer: "Not required. We can follow written preferences and share photo updates.",
    category: "Hoarder Cleanup",
  },
  {
    question: "What happens to items I want to keep?",
    answer: "We set aside and clean salvageable items as feasible, then store or return them per your plan.",
    category: "Hoarder Cleanup",
  },
  {
    question: "Can you handle pest or odor issues during hoarder cleanup?",
    answer: "Yes. We address odors and coordinate with pest services when necessary.",
    category: "Hoarder Cleanup",
  },

  // Water Damage
  {
    question: "Do you offer emergency water extraction in Portland?",
    answer: "Yes. We extract water, set drying equipment, and monitor moisture.",
    category: "Water Damage",
  },
  {
    question: "How soon can mold start after water damage?",
    answer: "Mold can begin quickly; we dry structures and remove wet materials to reduce risk.",
    category: "Water Damage",
  },
  {
    question: "Will you help with insurance documentation for water losses?",
    answer: "Yes. We photograph, scope, and submit documentation to your carrier.",
    category: "Water Damage",
  },
  {
    question: "Do you handle sewage backups?",
    answer: "Yes. Category‑3 water requires biohazard‑level safety and disposal.",
    category: "Water Damage",
  },
  {
    question: "How long does structural drying take?",
    answer: "Typically 2–5 days, depending on materials and humidity.",
    category: "Water Damage",
  },

  // Fire & Smoke
  {
    question: "What does fire damage cleanup include?",
    answer: "Board‑up, debris removal, soot and smoke cleaning, deodorization, and contents handling.",
    category: "Fire & Smoke",
  },
  {
    question: "Can you remove persistent smoke odor?",
    answer: "Yes. We combine source removal, cleaning, and odor treatments.",
    category: "Fire & Smoke",
  },
  {
    question: "Do you clean HVAC after a fire?",
    answer: "We can coordinate duct inspection and cleaning when needed.",
    category: "Fire & Smoke",
  },
  {
    question: "Will you inventory affected contents?",
    answer: "Yes. We inventory, clean salvageable items, and document non‑restorable items.",
    category: "Fire & Smoke",
  },
  {
    question: "Do you coordinate with rebuild contractors?",
    answer: "Yes. We can hand off documentation and work alongside your contractor.",
    category: "Fire & Smoke",
  },

  // Insurance & Payment
  {
    question: "Is crime scene or biohazard cleanup covered by insurance?",
    answer: "Often, yes—coverage depends on your policy. We'll help you check and document.",
    category: "Insurance & Payment",
  },
  {
    question: "Do you bill insurance directly?",
    answer: "Yes. When coverage applies, we can bill your carrier directly.",
    category: "Insurance & Payment",
  },
  {
    question: "How do you price cleanup work?",
    answer: "By scope: affected area, materials removed, PPE, disposal, equipment, and labor hours.",
    category: "Insurance & Payment",
  },
  {
    question: "Can you provide a written estimate before work begins?",
    answer:
      "Yes. We provide a scope and estimated cost; emergencies may start with a time‑and‑materials authorization.",
    category: "Insurance & Payment",
  },
  {
    question: "What payment methods do you accept?",
    answer: "Major cards and bank payments; ask about other options during intake.",
    category: "Insurance & Payment",
  },

  // Safety & Compliance
  {
    question: "What safety standards do you follow?",
    answer: "We follow documented bloodborne‑pathogen precautions, PPE requirements, and industry best practices.",
    category: "Safety & Compliance",
  },
  {
    question: "Are your technicians trained and background‑checked?",
    answer: "Yes. Field staff are trained, background‑checked, and supervised.",
    category: "Safety & Compliance",
  },
  {
    question: "What disinfectants do you use?",
    answer: "EPA‑registered products appropriate to the surface and contamination level.",
    category: "Safety & Compliance",
  },
  {
    question: "Do you provide post‑cleanup documentation?",
    answer: "Yes. You'll receive photos, notes, and a job summary for your records.",
    category: "Safety & Compliance",
  },
  {
    question: "Do you handle regulated waste manifests?",
    answer: "Yes. We maintain disposal records via approved transport/treatment partners.",
    category: "Safety & Compliance",
  },

  // Privacy
  {
    question: "How do you protect our privacy?",
    answer:
      "We limit on‑site personnel, use unmarked vehicles on request, and do not share details without your permission.",
    category: "Privacy",
  },
  {
    question: "Can you schedule to avoid attention from neighbors?",
    answer: "Yes. We can schedule off‑hours and stage discreetly.",
    category: "Privacy",
  },
  {
    question: "Will photos of my home be shared publicly?",
    answer: "No. Photos are captured only for documentation and insurance unless you authorize otherwise.",
    category: "Privacy",
  },
  {
    question: "Can you work with a family representative or attorney instead of me?",
    answer: "Yes. We'll take direction from your designated representative.",
    category: "Privacy",
  },
  {
    question: "Do you offer Spanish or other language support?",
    answer: "Tell us your preferred language; we'll accommodate where possible.",
    category: "Privacy",
  },

  // Service Area
  {
    question: "Do you serve all of Portland?",
    answer: "Yes. We cover neighborhoods across North, Northeast, Southeast, Southwest, and East Portland.",
    category: "Service Area",
  },
  {
    question: "Do you work in Milwaukie, Gresham, and Beaverton?",
    answer: "Yes. We routinely dispatch to Milwaukie, Gresham, Beaverton, and nearby communities.",
    category: "Service Area",
  },
  {
    question: "Do you serve Vancouver, WA?",
    answer: "Yes. We cross the river to support Vancouver and nearby cities.",
    category: "Service Area",
  },
  {
    question: "How far outside Portland will you travel?",
    answer: "Call with your address; we'll confirm coverage and ETA based on distance and crew availability.",
    category: "Service Area",
  },
  {
    question: "What are typical arrival times in the core metro?",
    answer: "Core‑metro arrivals are typically same‑day; we'll confirm the current window when you contact us.",
    category: "Service Area",
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

export default function FAQsPage() {
  return (
    <>
      <StructuredData data={[faqSchema]} />
      <Header phone={PHONE} />

      <main>
        <section className="relative py-20 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Common questions about our biohazard cleanup, crime scene cleanup, and restoration services in Portland
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-gold/20 pb-8">
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-gold uppercase tracking-wide">{faq.category}</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-white mb-4">{faq.question}</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="bg-charcoal border border-gold/20 rounded-lg p-8">
                <h2 className="text-2xl font-heading font-bold text-white mb-4">Local Resources</h2>
                <p className="text-gray-300 mb-4">
                  If you need additional support or have questions about reporting requirements:
                </p>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <strong className="text-white">Portland Non-Emergency:</strong> 503-823-3333
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <strong className="text-white">Multnomah County 24/7 Crisis Line:</strong> 503-988-4888
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-gold flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <strong className="text-white">Oregon DEQ Waste Information:</strong> For questions about proper
                      disposal requirements
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                We're here to help 24/7. Call us for immediate assistance or request a same-day assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-fire hover:bg-fire/90 rounded-lg transition-colors"
                >
                  Call (971) 895-4262
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-coal bg-gold hover:bg-gold/90 rounded-lg transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 bg-coal">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-white mb-6 text-center">Learn More</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link
                  href="/services/crime-scene-cleanup"
                  className="p-6 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Crime Scene Cleanup</h3>
                  <p className="text-gray-400 text-sm">Learn about our process →</p>
                </Link>
                <Link
                  href="/safety-compliance"
                  className="p-6 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Safety & Compliance</h3>
                  <p className="text-gray-400 text-sm">Our protocols →</p>
                </Link>
                <Link
                  href="/service-areas"
                  className="p-6 bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg transition-colors text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">Service Areas</h3>
                  <p className="text-gray-400 text-sm">Where we work →</p>
                </Link>
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
