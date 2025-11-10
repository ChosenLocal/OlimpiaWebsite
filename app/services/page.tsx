import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"

export const metadata: Metadata = {
  title: "Biohazard & Restoration Services | Olimpia's | Portland, OR",
  description:
    "Comprehensive biohazard cleanup, crime scene cleaning, water damage restoration, and fire damage services in Portland. 24/7 emergency response, OSHA compliant, discreet service.",
  openGraph: {
    title: "Professional Biohazard & Restoration Services in Portland",
    description: "24/7 emergency biohazard cleanup and restoration services. Licensed, certified, and compassionate.",
  },
}

const services = [
  {
    title: "Crime Scene Cleanup",
    slug: "crime-scene-cleanup",
    description:
      "Professional crime scene cleaning with complete biohazard removal, decontamination, and restoration. We handle homicides, suicides, and violent incidents with discretion and care.",
    icon: "🛡️",
    urgent: true,
    image: "/service-crime-scene.jpg",
  },
  {
    title: "Biohazard Remediation",
    slug: "biohazard-remediation",
    description:
      "Safe removal and disposal of blood, bodily fluids, infectious materials, and hazardous waste. Full decontamination following OSHA standards.",
    icon: "⚠️",
    urgent: true,
    image: "/service-biohazard.jpg",
  },
  {
    title: "Unattended Death Cleanup",
    slug: "unattended-death-cleanup",
    description:
      "Compassionate cleanup after unattended deaths with complete odor removal, sanitization, and biohazard disposal. We work directly with families and property owners.",
    icon: "💀",
    urgent: true,
    image: "/service-unattended-death.jpg",
  },
  {
    title: "Hoarding Cleanup",
    slug: "hoarder-cleanup",
    description:
      "Sensitive hoarding remediation with sorting, cleaning, sanitization, and restoration. We work with families to restore safe living conditions.",
    icon: "🏠",
    urgent: false,
    image: "/service-hoarding.jpg",
  },
  {
    title: "Water Damage Restoration",
    slug: "water-damage-restoration",
    description:
      "Emergency water extraction, structural drying, mold prevention, and complete restoration. We handle floods, sewage backups, and burst pipes.",
    icon: "💧",
    urgent: true,
    image: "/service-water-damage.jpg",
  },
  {
    title: "Fire Damage Restoration",
    slug: "fire-damage-restoration",
    description:
      "Complete fire and smoke damage restoration including debris removal, structural cleaning, odor elimination, and reconstruction.",
    icon: "🔥",
    urgent: true,
    image: "/service-fire-damage.jpg",
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header phone="+19718954262" />

      <main className="bg-coal">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-coal via-charcoal to-coal py-24 md:py-32 border-b border-gold/20 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/service-biohazard.jpg"
              alt="Professional biohazard cleanup services"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-coal via-coal/90 to-charcoal/90" />
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Available 24/7 for Emergencies
              </div>

              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 text-balance">
                Professional Biohazard & Restoration Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-10 text-pretty leading-relaxed max-w-3xl mx-auto">
                Serving Portland and surrounding areas with licensed, certified, and fully insured emergency response.
                Discretion and compassion guaranteed in every situation.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-fire hover:bg-fire/90 text-white font-bold" asChild>
                  <a href="tel:+19718954262" style={{ color: "#ffffff" }}>
                    Call Now: (971) 895-4262
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold/10 bg-transparent"
                  asChild
                >
                  <Link href="/contact" style={{ color: "#c5a572" }}>
                    Get Free Assessment
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-gold/20">
                <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <span className="text-gold">🛡️</span>
                    <span>Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">✓</span>
                    <span>OSHA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">🕐</span>
                    <span>~60 Min Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold">🔒</span>
                    <span>100% Confidential</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <Container>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service) => {
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group relative bg-charcoal rounded-lg overflow-hidden border border-gold/20 hover:border-gold/40 transition-all hover:shadow-xl hover:shadow-gold/10"
                  >
                    {/* Service Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/60 to-transparent" />
                      {service.urgent && (
                        <div className="absolute top-4 right-4 bg-fire text-white px-3 py-1 rounded-full text-xs font-bold">
                          24/7 Emergency
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-gold text-coal p-3 rounded-lg text-2xl">{service.icon}</div>
                      </div>
                    </div>

                    {/* Service Content */}
                    <div className="p-6">
                      <h2 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed mb-4 text-pretty">{service.description}</p>
                      <div className="flex items-center text-gold font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <svg
                          className="h-5 w-5 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-charcoal/50 border-y border-gold/20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-12">Why Choose Olimpia's</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">~60 min</div>
                  <div className="text-gray-300">Average Response Time</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">24/7</div>
                  <div className="text-gray-300">Emergency Availability</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-gold mb-2">100%</div>
                  <div className="text-gray-300">Discreet & Confidential</div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <Container>
            <div className="bg-gradient-to-br from-fire to-fire/80 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Need Immediate Help?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Our team is standing by 24/7 to provide emergency biohazard cleanup and restoration services.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="bg-white text-fire hover:bg-gray-100 font-bold" asChild>
                  <a href="tel:+19718954262">Call (971) 895-4262</a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                  asChild
                >
                  <a href="sms:+19718954262">Text Discreetly</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}
