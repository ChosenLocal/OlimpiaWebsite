import type { Metadata } from "next"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { EmergencyCTA } from "@/components/ui/EmergencyCTA"
import { Container } from "@/components/ui/Container"
import { ContactForm } from "@/components/forms/ContactForm"
import { StructuredData } from "@/components/ui/StructuredData"
import { generateContactPageSchema } from "@/lib/seo-helpers"

export const metadata: Metadata = {
  title: "Contact Us — 24/7 Emergency Response | Olimpia's Biohazard",
  description:
    "Contact Olimpia's Biohazard for emergency cleanup services. Available 24/7 throughout Portland Metro. Call (971) 895-4262.",
  alternates: {
    canonical: "/contact",
    languages: {
      en: "/contact",
      es: "/es/contact",
    },
  },
  openGraph: {
    title: "Contact Us — 24/7 Emergency Response | Olimpia's Biohazard",
    description: "Contact Olimpia's Biohazard for emergency cleanup services. Available 24/7 throughout Portland Metro.",
    url: "/contact",
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
    title: "Contact Us — 24/7 Emergency Response | Olimpia's Biohazard",
    description: "Contact Olimpia's Biohazard for emergency cleanup services. Available 24/7 throughout Portland Metro.",
    images: ["/logo.png"],
  },
}

const PHONE = "+19718954262"
const contactPageSchema = generateContactPageSchema()

export default function ContactPage() {
  return (
    <>
      <StructuredData data={contactPageSchema} />
      <Header phone={PHONE} />

      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Contact Us</h1>
              <p className="text-xl text-gray-300 mb-8">
                24/7 emergency response for biohazard cleanup and restoration services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${PHONE}`} className="btn-emergency">
                  Call Now: (971) 895-4262
                </a>
                <a href={`mailto:info@olimpiasbiohazard.com`} className="btn-secondary">
                  Email Us
                </a>
              </div>
            </div>
          </Container>
        </section>

        <div className="py-20 bg-coal">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <ContactForm locale="en" />

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-heading font-bold text-white mb-6">Get In Touch</h2>

                <div className="space-y-8">
                  {/* Emergency Contact */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">24/7 Emergency Line</h3>
                    <p className="text-gray-300 mb-4">For immediate emergency response, call our 24/7 hotline:</p>
                    <a
                      href={`tel:${PHONE}`}
                      className="text-3xl font-bold text-white hover:text-gold transition-colors"
                    >
                      (971) 895-4262
                    </a>
                    <p className="text-sm text-gray-400 mt-4">
                      Available 24 hours a day, 7 days a week, including holidays
                    </p>
                  </div>

                  {/* Email */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">Email</h3>
                    <a
                      href="mailto:info@olimpiasbiohazard.com"
                      className="text-water hover:text-gold transition-colors"
                    >
                      info@olimpiasbiohazard.com
                    </a>
                    <p className="text-sm text-gray-400 mt-2">We respond to emails within 2 business hours</p>
                  </div>

                  {/* Address */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">Our Location</h3>
                    <p className="text-gray-300 mb-2 font-semibold">13460 SE Rusk Rd</p>
                    <p className="text-gray-300 mb-4">Milwaukie, OR 97222</p>
                    <p className="text-sm text-gray-400">Serving all of Portland Metro Area</p>
                  </div>

                  {/* Hours */}
                  <div className="bg-charcoal border border-gold/20 rounded-lg p-6">
                    <h3 className="text-xl font-heading font-semibold text-gold mb-4">Hours</h3>
                    <p className="text-gray-300 text-lg font-semibold">24/7 Emergency Response</p>
                    <p className="text-sm text-gray-400 mt-2">Office hours: Monday-Friday, 8AM-5PM</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* FAQ Link */}
        <section className="py-20 bg-charcoal">
          <Container size="md">
            <div className="text-center">
              <h2 className="text-2xl font-heading font-bold text-white mb-4">Have Questions?</h2>
              <p className="text-gray-300 mb-6">Check out our frequently asked questions for quick answers</p>
              <a href="/#faq" className="text-water hover:text-gold transition-colors">
                View FAQ →
              </a>
            </div>
          </Container>
        </section>
      </main>

      <EmergencyCTA phone={PHONE} locale="en" position="fixed" />

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}
