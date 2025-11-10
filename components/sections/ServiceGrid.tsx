import Link from "next/link"
import { Container } from "@/components/ui/Container"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/Card"
import { cn } from "@/lib/utils"
import { R2_IMAGES } from "@/lib/r2-images"

export interface Service {
  title: string
  description: string
  href: string
  icon?: string
}

export interface ServiceGridProps {
  services: Service[]
  locale?: "en" | "es"
  className?: string
}

export function ServiceGrid({ services, locale = "en", className }: ServiceGridProps) {
  const heading = locale === "en" ? "Our Services" : "Nuestros Servicios"
  const subheading =
    locale === "en"
      ? "Professional biohazard and restoration services available 24/7"
      : "Servicios profesionales de materiales peligrosos y restauración disponibles 24/7"

  const serviceImages: Record<string, string> = {
    "Crime Scene Cleanup": R2_IMAGES.services.crimeScene,
    "Biohazard Remediation": R2_IMAGES.services.biohazard,
    "Unattended Death Cleanup": R2_IMAGES.services.unattendedDeath,
    "Water Damage Restoration": R2_IMAGES.services.waterDamage,
    "Fire Damage Restoration": R2_IMAGES.services.fireDamage,
    "Hoarding Cleanup": R2_IMAGES.services.hoarding,
  }

  return (
    <section className={cn("py-20 bg-coal", className)}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">{heading}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">{subheading}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link key={service.href} href={service.href}>
              <Card className="h-full cursor-pointer bg-charcoal border-gold/20 hover:border-gold/40 transition-all group overflow-hidden">
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={
                      serviceImages[service.title] ||
                      "/placeholder.svg?height=300&width=400&query=biohazard cleanup service"
                    }
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                  {service.icon && (
                    <div className="absolute top-4 left-4 w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {service.icon}
                    </div>
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-white group-hover:text-gold transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <div className="text-water group-hover:text-gold transition-colors inline-flex items-center font-medium">
                    {locale === "en" ? "Learn more" : "Saber más"}
                    <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
