import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Hero } from "@/components/sections/Hero"
import { FAQ } from "@/components/sections/FAQ"
import { Footer } from "@/components/sections/Footer"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { Container } from "@/components/ui/Container"
import { StructuredData } from "@/components/ui/StructuredData"
import { ProcessSnapshot } from "@/components/sections/ProcessSnapshot"
import { LocalProof } from "@/components/sections/LocalProof"
import { ServiceCard } from "@/components/ui/ServiceCard"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { R2_IMAGES } from "@/lib/r2-images"

export const metadata: Metadata = {
  title: "Crime Scene Cleanup Portland 24/7 | Olimpia's",
  description:
    "24/7 biohazard, crime scene, water & fire restoration across Portland-metro. Discreet, insured, OSHA-compliant cleanup. Call now.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crime Scene Cleanup Portland 24/7 | Olimpia's",
    description: "24/7 biohazard, crime scene, water & fire restoration across Portland-metro. Discreet, insured, OSHA-compliant cleanup.",
    url: "/",
    siteName: "Olimpia's Biohazard & Restoration",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Olimpia's Biohazard & Restoration - Professional Emergency Cleanup Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crime Scene Cleanup Portland 24/7 | Olimpia's",
    description: "24/7 biohazard, crime scene, water & fire restoration across Portland-metro. Discreet, insured, OSHA-compliant cleanup.",
    images: ["/logo.png"],
  },
}

const PHONE = "+19718954262"

const services = [
  {
    title: "Crime & Trauma Scene Cleanup",
    description: "Discreet remediation of blood and bodily fluids with professional decontamination.",
    href: "/services/crime-scene-cleanup",
    icon: "🔍",
    category: "trauma",
    image: R2_IMAGES.services.crimeScene,
  },
  {
    title: "Biohazard Remediation",
    description: "Cleanup of potentially infectious materials in homes and workplaces.",
    href: "/services/biohazard-remediation",
    icon: "⚠️",
    category: "trauma",
    image: R2_IMAGES.services.biohazard,
  },
  {
    title: "Unattended Death Cleanup",
    description: "Compassionate, complete remediation and odor control.",
    href: "/services/unattended-death-cleanup",
    icon: "🕊️",
    category: "trauma",
    image: R2_IMAGES.services.unattendedDeath,
  },
  {
    title: "Hoarder Cleanup",
    description: "Organized sorting, disposal, and sanitization with privacy.",
    href: "/services/hoarder-cleanup",
    icon: "🏠",
    category: "trauma",
    image: R2_IMAGES.services.hoarding,
  },
  {
    title: "Water Damage Restoration",
    description: "Emergency extraction, structural dry-out, and mold prevention.",
    href: "/services/water-damage-restoration",
    icon: "💧",
    category: "restoration",
    image: R2_IMAGES.services.waterDamage,
  },
  {
    title: "Fire Damage Restoration",
    description: "Board-up, soot/smoke removal, deodorization, and rebuild coordination.",
    href: "/services/fire-damage-restoration",
    icon: "🔥",
    category: "restoration",
    image: R2_IMAGES.services.fireDamage,
  },
]

const faqs = [
  {
    question: "How fast can you arrive?",
    answer:
      "We dispatch 24/7 across Portland-metro. Call to confirm current ETA based on your location and scene needs.",
  },
  {
    question: "Will insurance cover this?",
    answer:
      "Many biohazard, water, and fire losses are covered under property policies. We help document and coordinate with your carrier.",
  },
  {
    question: "Do you use unmarked vehicles?",
    answer: "Yes—available on request to protect privacy.",
  },
  {
    question: "What standards do you follow?",
    answer:
      "We align to OSHA's Bloodborne Pathogens Standard (29 CFR 1910.1030) and Oregon infectious-waste requirements.",
  },
  {
    question: "Is it safe to stay in the home during cleanup?",
    answer:
      "We'll advise after assessment. For many biohazard and smoke events, we recommend temporary relocation during remediation.",
  },
]

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Olimpia's Biohazard & Restoration LLC",
  image: "https://olimpiasbiohazard.com/logo.png",
  url: "https://olimpiasbiohazard.com/",
  telephone: "(971) 895-4262",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13460 SE Rusk Rd",
    addressLocality: "Milwaukie",
    addressRegion: "OR",
    postalCode: "97222",
    addressCountry: "US",
  },
  areaServed: [
    { "@type": "City", name: "Portland" },
    { "@type": "City", name: "Milwaukie" },
    { "@type": "City", name: "Gresham" },
    { "@type": "City", name: "Beaverton" },
    { "@type": "City", name: "Hillsboro" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "City", name: "Lake Oswego" },
    { "@type": "City", name: "Oregon City" },
    { "@type": "City", name: "Tigard" },
    { "@type": "City", name: "Tualatin" },
    { "@type": "City", name: "Happy Valley" },
    { "@type": "City", name: "Clackamas" },
    { "@type": "City", name: "West Linn" },
    { "@type": "City", name: "Troutdale" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  knowsAbout: [
    "Crime Scene Cleanup",
    "Biohazard Remediation",
    "Unattended Death Cleanup",
    "Hoarder Cleanup",
    "Water Damage Restoration",
    "Fire Damage Restoration",
  ],
}

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

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olimpia's Biohazard & Restoration",
  url: "https://www.olimpiabiohazard.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.olimpiabiohazard.com/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

export default function HomePage() {
  return (
    <>
      <StructuredData data={[localBusinessSchema, faqSchema, webSiteSchema]} />

      <Header phone={PHONE} />

      <main>
        <Hero
          title="Biohazard & Crime Scene Cleanup in Portland, OR (24/7)"
          subtitle="Certified, discreet, and on-site fast. We remediate hazards, restore safety, and coordinate with your insurer."
          phone={PHONE}
          locale="en"
        />

        <ProcessSnapshot locale="en" />

        <section className="py-20 bg-coal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Services</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Professional biohazard and restoration services available 24/7 across Portland-metro
              </p>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-heading font-bold text-gold mb-6 text-center">Trauma & Biohazard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services
                  .filter((s) => s.category === "trauma")
                  .map((service) => (
                    <ServiceCard key={service.href} service={service} locale="en" />
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-heading font-bold text-gold mb-6 text-center">Restoration</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {services
                  .filter((s) => s.category === "restoration")
                  .map((service) => (
                    <ServiceCard key={service.href} service={service} locale="en" />
                  ))}
              </div>
            </div>
          </Container>
        </section>

        <LocalProof locale="en" averageResponseTime={54} />

        <section className="py-20 bg-charcoal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Why families and property managers choose us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">24/7 Response</h3>
                <p className="text-sm text-gray-400">Across Portland-metro</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Insurance-Ready</h3>
                <p className="text-sm text-gray-400">Documentation and direct coordination</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Discreet Service</h3>
                <p className="text-sm text-gray-400">Unmarked vehicles</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="font-semibold text-white mb-2">Safety & Compliance</h3>
                <p className="text-sm text-gray-400">OSHA and Oregon standards</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-gray-400">
                Safety & compliance aligned to OSHA&apos;s Bloodborne Pathogens Standard and Oregon infectious-waste rules.{" "}
                <Link href="/safety-compliance" className="text-gold hover:text-gold/80 underline">
                  Review our OSHA compliance and safety standards
                </Link>
                .
              </p>
            </div>
          </Container>
        </section>

        <FAQ items={faqs} locale="en" />

        <section className="py-20 bg-gradient-to-b from-coal to-charcoal border-t border-gold/20">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">Get Help Now (24/7)</h2>
              <p className="text-xl text-gray-300 mb-10">
                Request a same-day assessment or call for immediate emergency response
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button
                  variant="emergency"
                  size="lg"
                  asChild
                  className="min-w-[240px] text-lg shadow-xl"
                  style={{ color: "#0d0d0d" }}
                >
                  <a href={`tel:${PHONE}`} style={{ color: "#0d0d0d" }}>
                    Call Now
                  </a>
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[240px] text-lg bg-gold text-coal hover:bg-gold/90 font-bold"
                  style={{ color: "#0d0d0d" }}
                  asChild
                >
                  <a href="/contact">Request Same-Day Assessment</a>
                </Button>
              </div>

              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Respectful, unmarked vehicles
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Photos and notes handled securely
                </p>
                <p className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  We never share details
                </p>
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
