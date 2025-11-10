import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/ui/Header"
import { Footer } from "@/components/sections/Footer"

export const metadata: Metadata = {
  title: "Service Areas – Portland Metro Biohazard & Restoration",
  description:
    "24/7 biohazard & restoration across Portland-metro: Milwaukie, Beaverton, Hillsboro, Vancouver, and more.",
  alternates: {
    canonical: "/service-areas",
  },
  openGraph: {
    title: "Service Areas – Portland Metro Biohazard & Restoration",
    description:
      "24/7 biohazard & restoration across Portland-metro: Milwaukie, Beaverton, Hillsboro, Vancouver, and more.",
    url: "/service-areas",
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
    title: "Service Areas – Portland Metro Biohazard & Restoration",
    description:
      "24/7 biohazard & restoration across Portland-metro: Milwaukie, Beaverton, Hillsboro, Vancouver, and more.",
    images: ["/logo.png"],
  },
}

const cities = [
  {
    name: "Portland",
    slug: "portland-or",
    description: "Downtown, Pearl District, Alberta Arts, Hawthorne, and all Portland neighborhoods",
  },
  {
    name: "Milwaukie",
    slug: "milwaukie-or",
    description: "Historic downtown, residential areas, and commercial districts",
  },
  { name: "Gresham", slug: "gresham-or", description: "East Portland metro area with quick response times" },
  { name: "Beaverton", slug: "beaverton-or", description: "West side communities and business districts" },
  { name: "Hillsboro", slug: "hillsboro-or", description: "Tech corridor and residential neighborhoods" },
  { name: "Lake Oswego", slug: "lake-oswego-or", description: "Lakefront properties and historic homes" },
  { name: "Oregon City", slug: "oregon-city-or", description: "Clackamas County seat and surrounding areas" },
  { name: "Tigard", slug: "tigard-or", description: "Southwest Portland metro communities" },
  { name: "Tualatin", slug: "tualatin-or", description: "Willamette River area with residential and commercial zones" },
  { name: "Happy Valley", slug: "happy-valley-or", description: "Growing southeast Portland suburb" },
  { name: "Clackamas", slug: "clackamas-or", description: "Commercial and residential areas near I-205" },
  { name: "West Linn", slug: "west-linn-or", description: "Willamette River communities and hillside homes" },
  { name: "Troutdale", slug: "troutdale-or", description: "East metro gateway with easy highway access" },
  { name: "Vancouver, WA", slug: "vancouver-wa", description: "Columbia River communities and downtown Vancouver" },
  { name: "Camas", slug: "camas-wa", description: "Eastern Clark County with residential and industrial areas" },
  { name: "Washougal", slug: "washougal-wa", description: "Columbia River Gorge gateway communities" },
]

const services = [
  { name: "Crime Scene Cleanup", href: "/services/crime-scene-cleanup" },
  { name: "Biohazard Remediation", href: "/services/biohazard-remediation" },
  { name: "Unattended Death Cleanup", href: "/services/unattended-death-cleanup" },
  { name: "Hoarder Cleanup", href: "/services/hoarder-cleanup" },
  { name: "Water Damage Restoration", href: "/services/water-damage-restoration" },
  { name: "Fire Damage Restoration", href: "/services/fire-damage-restoration" },
]

const PHONE = "+19718954262"

export default function ServiceAreasPage() {
  return (
    <>
      <Header phone={PHONE} />

      <main className="min-h-screen bg-coal">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-charcoal to-coal py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Where We Work (Portland-Metro)
              </h1>
              <p className="text-xl text-neutral-300 mb-8">
                24/7 emergency biohazard and restoration services across the greater Portland metropolitan area,
                including Vancouver, WA
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* 24/7 Emergency Response */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <Image
                    src="/stat-emergency.jpg"
                    alt="24/7 Emergency Response"
                    fill
                    className="object-cover opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-transparent" />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-2xl font-bold text-gold mb-2">24/7</div>
                    <div className="text-sm text-white">Emergency Response</div>
                  </div>
                </div>

                {/* Cities Served */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <Image
                    src="/stat-cities.jpg"
                    alt="16+ Cities Served"
                    fill
                    className="object-cover opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-transparent" />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-2xl font-bold text-gold mb-2">16+</div>
                    <div className="text-sm text-white">Cities Served</div>
                  </div>
                </div>

                {/* Discreet Service */}
                <div className="relative overflow-hidden rounded-lg h-48">
                  <Image
                    src="/stat-discreet.jpg"
                    alt="Discreet Unmarked Vehicles"
                    fill
                    className="object-cover opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-transparent" />
                  <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
                    <div className="text-2xl font-bold text-gold mb-2">Discreet</div>
                    <div className="text-sm text-white">Unmarked Vehicles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-charcoal/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Interactive Service Area Map
              </h2>
              <p className="text-center text-neutral-300 mb-12 max-w-2xl mx-auto">
                Click on any city to learn more about our services in that area. Our headquarters in Milwaukie provides
                quick access to all Portland metro locations.
              </p>

              {/* Interactive Map */}
              <div className="bg-coal/50 rounded-lg border border-gold/20 p-8">
                <div className="relative aspect-[4/3] max-w-4xl mx-auto">
                  {/* SVG Map Container */}
                  <svg viewBox="0 0 800 600" className="w-full h-full">
                    {/* Background */}
                    <rect width="800" height="600" fill="#1a1a1a" />

                    {/* Columbia River */}
                    <path
                      d="M 0 150 Q 200 140 400 145 T 800 150 L 800 180 Q 400 175 200 170 T 0 180 Z"
                      fill="#2563eb"
                      opacity="0.3"
                    />

                    {/* Willamette River */}
                    <path
                      d="M 350 600 Q 345 450 340 300 T 330 0"
                      stroke="#2563eb"
                      strokeWidth="8"
                      fill="none"
                      opacity="0.3"
                    />

                    {/* City Markers */}
                    {/* Vancouver, WA - North */}
                    <Link href="/service-areas/vancouver-wa">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="300" cy="100" r="30" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="300" cy="100" r="8" fill="#d4af37" />
                        <text x="300" y="140" textAnchor="middle" fill="#d4af37" fontSize="14" fontWeight="bold">
                          Vancouver
                        </text>
                      </g>
                    </Link>

                    {/* Portland - Center */}
                    <Link href="/service-areas/portland-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="350" cy="220" r="40" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="350" cy="220" r="10" fill="#d4af37" />
                        <text x="350" y="265" textAnchor="middle" fill="#d4af37" fontSize="16" fontWeight="bold">
                          Portland
                        </text>
                      </g>
                    </Link>

                    {/* Milwaukie - Southeast of Portland (HQ) */}
                    <Link href="/service-areas/milwaukie-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="380" cy="280" r="35" fill="#ef4444" opacity="0.3" className="hover:opacity-50" />
                        <circle cx="380" cy="280" r="12" fill="#ef4444" />
                        <text x="380" y="325" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="bold">
                          Milwaukie (HQ)
                        </text>
                      </g>
                    </Link>

                    {/* Gresham - East */}
                    <Link href="/service-areas/gresham-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="500" cy="240" r="30" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="500" cy="240" r="8" fill="#d4af37" />
                        <text x="500" y="280" textAnchor="middle" fill="#d4af37" fontSize="14" fontWeight="bold">
                          Gresham
                        </text>
                      </g>
                    </Link>

                    {/* Beaverton - West */}
                    <Link href="/service-areas/beaverton-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="220" cy="240" r="30" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="220" cy="240" r="8" fill="#d4af37" />
                        <text x="220" y="280" textAnchor="middle" fill="#d4af37" fontSize="14" fontWeight="bold">
                          Beaverton
                        </text>
                      </g>
                    </Link>

                    {/* Hillsboro - Northwest */}
                    <Link href="/service-areas/hillsboro-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="140" cy="200" r="28" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="140" cy="200" r="8" fill="#d4af37" />
                        <text x="140" y="240" textAnchor="middle" fill="#d4af37" fontSize="14" fontWeight="bold">
                          Hillsboro
                        </text>
                      </g>
                    </Link>

                    {/* Lake Oswego - South of Portland */}
                    <Link href="/service-areas/lake-oswego-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="310" cy="320" r="28" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="310" cy="320" r="8" fill="#d4af37" />
                        <text x="310" y="360" textAnchor="middle" fill="#d4af37" fontSize="13" fontWeight="bold">
                          Lake Oswego
                        </text>
                      </g>
                    </Link>

                    {/* Oregon City - South */}
                    <Link href="/service-areas/oregon-city-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="360" cy="380" r="28" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="360" cy="380" r="8" fill="#d4af37" />
                        <text x="360" y="420" textAnchor="middle" fill="#d4af37" fontSize="13" fontWeight="bold">
                          Oregon City
                        </text>
                      </g>
                    </Link>

                    {/* Tigard - Southwest */}
                    <Link href="/service-areas/tigard-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="260" cy="300" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="260" cy="300" r="7" fill="#d4af37" />
                        <text x="260" y="335" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Tigard
                        </text>
                      </g>
                    </Link>

                    {/* Tualatin - South */}
                    <Link href="/service-areas/tualatin-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="280" cy="360" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="280" cy="360" r="7" fill="#d4af37" />
                        <text x="280" y="395" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Tualatin
                        </text>
                      </g>
                    </Link>

                    {/* Happy Valley - Southeast */}
                    <Link href="/service-areas/happy-valley-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="450" cy="320" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="450" cy="320" r="7" fill="#d4af37" />
                        <text x="450" y="355" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Happy Valley
                        </text>
                      </g>
                    </Link>

                    {/* Clackamas - Southeast */}
                    <Link href="/service-areas/clackamas-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="420" cy="270" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="420" cy="270" r="7" fill="#d4af37" />
                        <text x="420" y="305" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Clackamas
                        </text>
                      </g>
                    </Link>

                    {/* West Linn - South */}
                    <Link href="/service-areas/west-linn-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="330" cy="350" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="330" cy="350" r="7" fill="#d4af37" />
                        <text x="330" y="385" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          West Linn
                        </text>
                      </g>
                    </Link>

                    {/* Troutdale - East */}
                    <Link href="/service-areas/troutdale-or">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="550" cy="200" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="550" cy="200" r="7" fill="#d4af37" />
                        <text x="550" y="235" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Troutdale
                        </text>
                      </g>
                    </Link>

                    {/* Camas - Northeast */}
                    <Link href="/service-areas/camas-wa">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="600" cy="140" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="600" cy="140" r="7" fill="#d4af37" />
                        <text x="600" y="175" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Camas
                        </text>
                      </g>
                    </Link>

                    {/* Washougal - East */}
                    <Link href="/service-areas/washougal-wa">
                      <g className="cursor-pointer transition-all hover:scale-110">
                        <circle cx="660" cy="150" r="26" fill="#d4af37" opacity="0.2" className="hover:opacity-40" />
                        <circle cx="660" cy="150" r="7" fill="#d4af37" />
                        <text x="660" y="185" textAnchor="middle" fill="#d4af37" fontSize="12" fontWeight="bold">
                          Washougal
                        </text>
                      </g>
                    </Link>

                    {/* Legend */}
                    <g transform="translate(20, 500)">
                      <text x="0" y="0" fill="#d4af37" fontSize="14" fontWeight="bold">
                        Legend:
                      </text>
                      <circle cx="10" cy="20" r="6" fill="#ef4444" />
                      <text x="25" y="25" fill="#d1d5db" fontSize="12">
                        Headquarters
                      </text>
                      <circle cx="10" cy="45" r="6" fill="#d4af37" />
                      <text x="25" y="50" fill="#d1d5db" fontSize="12">
                        Service Area
                      </text>
                    </g>
                  </svg>
                </div>

                <p className="text-center text-neutral-400 text-sm mt-6">
                  Click any city marker to view detailed service information for that location
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Cities We Serve</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {cities.map((city, index) => {
                  // Assign unique images to each city
                  const cityImages = [
                    "/city-portland.jpg",
                    "/city-milwaukie.jpg",
                    "/city-gresham.jpg",
                    "/city-beaverton.jpg",
                    "/city-hillsboro.jpg",
                    "/city-lake-oswego.jpg",
                    "/city-oregon-city.jpg",
                    "/city-tigard.jpg",
                    "/city-tualatin.jpg",
                    "/city-happy-valley.jpg",
                    "/city-clackamas.jpg",
                    "/city-west-linn.jpg",
                    "/city-troutdale.jpg",
                    "/city-vancouver.jpg",
                    "/city-camas.jpg",
                    "/city-washougal.jpg",
                  ]

                  return (
                    <Link
                      key={city.slug}
                      href={`/service-areas/${city.slug}`}
                      className="group relative overflow-hidden rounded-lg h-64 block"
                    >
                      {/* Background Image with fade */}
                      <Image
                        src={cityImages[index] || "/placeholder.svg"}
                        alt={city.name}
                        fill
                        className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-300"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/80 to-transparent" />

                      {/* Content */}
                      <div className="relative h-full flex flex-col justify-end p-6">
                        <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors mb-2">
                          {city.name}
                        </h3>
                        <p className="text-sm text-neutral-200 leading-relaxed">{city.description}</p>
                      </div>
                    </Link>
                  )
                })}
              </div>

              {/* Services Available */}
              <div className="bg-charcoal/30 p-8 rounded-lg border border-gold/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Services Available in All Areas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="text-water hover:text-gold transition-colors text-center py-2"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Details */}
        <section className="py-16 bg-charcoal/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Fast Response Across the Metro Area</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-neutral-300 text-lg mb-6">
                  We provide immediate emergency response and scheduled services throughout the Portland metropolitan
                  area, including Multnomah, Clackamas, Washington, and Clark counties. Our central location in
                  Milwaukie allows us to reach most metro locations within 30-60 minutes.
                </p>

                <div className="relative overflow-hidden rounded-lg border border-gold/20 my-8">
                  <Image
                    src="/coverage-local.jpg"
                    alt="Local Coverage Benefits"
                    fill
                    className="object-cover opacity-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-coal via-coal/90 to-coal/80" />

                  <div className="relative p-6">
                    <h3 className="text-xl font-bold text-gold mb-4">Why Choose Local Coverage</h3>
                    <ul className="space-y-2 text-neutral-300">
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>Familiar with local regulations and permit requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>Established relationships with local authorities and inspectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>Quick response times from our Milwaukie headquarters</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>Knowledge of local property types and construction methods</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Service in Your Area?</h2>
              <p className="text-xl text-neutral-300 mb-8">
                We respond 24/7 across the Portland metro area. Call now for immediate assistance or to schedule an
                assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9718954262"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-coal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gold/90 transition-colors"
                  style={{ color: "#0d0d0d" }}
                >
                  <span className="text-xl">📞</span>
                  Call (971) 895-4262
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer locale="en" phone="(971) 895-4262" />
    </>
  )
}
