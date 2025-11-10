import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { Container } from "@/components/ui/Container"
import { StructuredData } from "@/components/ui/StructuredData"
import { BUSINESS_EMAIL, BUSINESS_PHONE } from "@/constants"
import { generatePersonSchema, generateOrganizationSchema } from "@/lib/seo-helpers"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Olimpia's Biohazard & Restoration | Portland-Metro Biohazard & Crime Scene Cleanup",
  description:
    "Learn about founder Olimpia Ursu and our compassionate, discreet biohazard, crime scene, unattended death, hoarder, water, and fire cleanup across Portland-metro & Vancouver, WA.",
  alternates: {
    canonical: "/about",
    languages: {
      en: "/about",
      es: "/es/about",
    },
  },
  openGraph: {
    title: "About Olimpia's Biohazard & Restoration",
    description: "Learn about founder Olimpia Ursu and our compassionate, discreet biohazard and restoration services across Portland-metro.",
    url: "/about",
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
    title: "About Olimpia's Biohazard & Restoration",
    description: "Learn about founder Olimpia Ursu and our compassionate, discreet biohazard and restoration services across Portland-metro.",
    images: ["/logo.png"],
  },
}

const personSchema = generatePersonSchema({
  name: "Olimpia Ursu",
  jobTitle: "Founder & Owner",
  description: "Olimpia Ursu founded Olimpia's Biohazard & Restoration with a mission to restore safety with dignity. With over six years of experience, she leads a team providing compassionate cleanup services across Portland-metro.",
  email: "olimpias.biohazard@gmail.com",
  telephone: "(971) 895-4262",
})

const organizationSchema = generateOrganizationSchema({
  founder: "Olimpia Ursu",
  foundingDate: "2019",
})

export default function AboutPage() {
  return (
    <>
      <StructuredData data={[personSchema, organizationSchema]} />
      <Header phone={BUSINESS_PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                About Olimpia&apos;s Biohazard & Restoration
              </h1>
              <p className="text-xl text-gray-300">
                Compassionate, discreet cleanup for Portland-metro families and businesses—24/7
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                For more than six years, Olimpia Ursu has led Olimpia&apos;s Biohazard & Restoration with one simple
                promise: restore safety with dignity. We serve people at some of the hardest moments of their lives, and
                we do it quietly, professionally, and with care that goes beyond a checklist.
              </p>
              <blockquote className="border-l-4 border-gold pl-6 py-4 italic text-xl text-gray-300 max-w-3xl mx-auto">
                "Every scene is someone's story. Our job is to make it safe again—and to treat people with the respect
                they deserve."
                <footer className="text-gold font-semibold mt-4 not-italic">— Olimpia Ursu, Founder</footer>
              </blockquote>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-charcoal">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">Our Story</h2>
            <div className="prose prose-invert prose-lg max-w-3xl mx-auto">
              <p className="text-gray-300 leading-relaxed mb-6">
                Olimpia founded this company after seeing how overwhelming biohazard and disaster events can be for
                families, property managers, and small businesses. A naturally calm presence under pressure, she built a
                team that pairs technical expertise with human-first service.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Her faith as a devout Christian informs how we show up: we keep confidences, we move with compassion,
                and we work as if a loved one lived there.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">What We Do</h2>
            <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
              We remediate hazards and restore normalcy across the Portland-Vancouver area
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-crime-scene.jpg"
                  alt="Crime Scene Cleanup"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Crime & Trauma Scene Cleanup</h3>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-biohazard.jpg"
                  alt="Biohazard Remediation"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Biohazard Remediation</h3>
                  <p className="text-gray-200 text-sm">Blood, bodily fluids, sharps</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-unattended-death.jpg"
                  alt="Unattended Death Cleanup"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Unattended Death Cleanup</h3>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-hoarding.jpg"
                  alt="Hoarder Cleanup"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Hoarder Cleanup</h3>
                  <p className="text-gray-200 text-sm">Sorting, haul-away, disinfection</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-water-damage.jpg"
                  alt="Water Damage Restoration"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Water Damage Restoration</h3>
                  <p className="text-gray-200 text-sm">Extraction, structural drying</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/service-fire-damage.jpg"
                  alt="Fire Damage Restoration"
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/90 via-coal/50 to-transparent" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Fire Damage Restoration</h3>
                  <p className="text-gray-200 text-sm">Board-up, soot/smoke odor removal</p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-300 mt-8 italic">
              Every job is handled discreetly, with unmarked vehicles available on request.
            </p>
          </Container>
        </section>

        <section className="py-20 bg-charcoal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">How We Work</h2>
            <p className="text-center text-gray-300 mb-12">Simple 3-Step Process</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-coal font-bold text-2xl mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Secure & Assess</h3>
                <p className="text-gray-300">We isolate the area, explain the plan, and answer your questions.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-coal font-bold text-2xl mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Remediate & Disinfect</h3>
                <p className="text-gray-300">
                  We remove affected materials and clean using OSHA-aligned protocols and EPA-registered products.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-coal font-bold text-2xl mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-heading font-semibold text-gold mb-3">Restore & Verify</h3>
                <p className="text-gray-300">
                  We address odors, verify results, and provide insurer-ready documentation.
                </p>
              </div>
            </div>

            <p className="text-center text-gray-300 mt-8">
              You'll always know what's happening, what it costs, and what comes next.
            </p>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 text-center">
              Why Families & Property Managers Choose Us
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/icon-local.jpg"
                  alt="Local & Responsive"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/70 to-coal/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">Local & Responsive</h3>
                  <p className="text-gray-200 text-sm">
                    Based in the Portland-metro, serving Milwaukie, Gresham, Beaverton, Hillsboro, Lake Oswego, Oregon
                    City, West Linn, Clackamas, and Vancouver, WA.
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/icon-calm.jpg"
                  alt="Calm Under Pressure"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/70 to-coal/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">Calm Under Pressure</h3>
                  <p className="text-gray-200 text-sm">
                    Sensitive scenes require a steady hand; Olimpia's team brings exactly that.
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/icon-insurance.jpg"
                  alt="Insurance-Ready"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/70 to-coal/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">Insurance-Ready</h3>
                  <p className="text-gray-200 text-sm">
                    Photos, notes, and scope delivered in a format carriers expect.
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/icon-endtoend.jpg"
                  alt="End-to-End Help"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/70 to-coal/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">End-to-End Help</h3>
                  <p className="text-gray-200 text-sm">
                    From emergency stabilization to odor removal and final wipe-downs.
                  </p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src="/icon-humancentered.jpg"
                  alt="Human-Centered"
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coal/95 via-coal/70 to-coal/50" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-heading font-bold text-white mb-3">Human-Centered</h3>
                  <p className="text-gray-200 text-sm">We're here for the people as much as the property.</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20 bg-charcoal">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 text-center">
              A Note From Olimpia
            </h2>
            <blockquote className="border-l-4 border-gold pl-6 py-4 text-lg text-gray-300 max-w-3xl mx-auto">
              "I started this company to be present for people when it matters. I love this community and I believe in
              treating every home and business like it's our own. Whether it's a difficult loss, a water emergency, or
              fire damage, you'll never be just a job ticket to us."
            </blockquote>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Service Area</h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                We dispatch across Portland, OR and surrounding communities—Milwaukie, Gresham, Beaverton, Hillsboro,
                Lake Oswego, Oregon City, West Linn, Clackamas—and into Southwest Washington including Vancouver, Camas,
                and Washougal. If you're nearby and unsure, call; we'll confirm coverage and ETA.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Portland",
                "Milwaukie",
                "Gresham",
                "Beaverton",
                "Hillsboro",
                "Lake Oswego",
                "Oregon City",
                "West Linn",
                "Clackamas",
                "Vancouver, WA",
                "Camas, WA",
                "Washougal, WA",
              ].map((city) => (
                <div key={city} className="text-center py-4 px-6 bg-coal rounded-lg border border-gold/20">
                  <span className="text-gray-300">{city}</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">
              Privacy & Discretion
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              We take privacy seriously. We limit on-site personnel, use unmarked vehicles on request, capture only
              necessary photos, and share details strictly on a need-to-know basis (you, your designated representative,
              and your insurer if authorized).
            </p>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container size="md">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-center">
              Safety & Compliance
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Our work practices align with OSHA bloodborne-pathogen standards and applicable Oregon/Washington rules
              for packaging, transport, and disposal of regulated waste. We use EPA-registered disinfectants and
              maintain chain-of-custody records for waste handled by approved partners.
            </p>
          </Container>
        </section>

        <section className="py-20 bg-coal">
          <Container size="md">
            <div className="bg-gradient-to-br from-charcoal to-coal border-2 border-gold rounded-lg p-8 md:p-12 text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-4">When You&apos;re Ready</h2>
              <p className="text-lg text-gray-300 mb-8">
                If you're facing a difficult situation, you don't have to handle it alone. We'll answer your call 24/7,
                explain your options, and move at your pace—with compassion and professionalism.
              </p>
              <div className="mb-6">
                <p className="text-gray-300 mb-2">Call now for urgent help:</p>
                <a
                  href={`tel:${BUSINESS_PHONE}`}
                  className="btn-emergency inline-block text-coal mb-4"
                  style={{ color: "#0d0d0d" }}
                >
                  Call Now: {BUSINESS_PHONE}
                </a>
                <p className="text-gray-300 mb-2">Or request a same-day assessment:</p>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="text-gold hover:text-gold/80 underline text-lg"
                  style={{ color: "#d4af37" }}
                >
                  {BUSINESS_EMAIL}
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={BUSINESS_PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone={BUSINESS_PHONE} />
    </>
  )
}
