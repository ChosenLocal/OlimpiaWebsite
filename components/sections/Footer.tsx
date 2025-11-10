import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/Container"

export interface FooterProps {
  locale?: "en" | "es"
  phone?: string
  email?: string
}

export function Footer({ locale = "en", phone = "(971) 895-4262", email = "olimpias.biohazard@gmail.com" }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const links = {
    services: locale === "en" ? "Services" : "Servicios",
    serviceArea: locale === "en" ? "Service Area" : "Área de Servicio",
    about: locale === "en" ? "About" : "Acerca",
    contact: locale === "en" ? "Contact" : "Contacto",
    privacy: locale === "en" ? "Privacy Policy" : "Política de Privacidad",
  }

  const text = {
    emergency: locale === "en" ? "24/7 Emergency Response" : "Respuesta de Emergencia 24/7",
    copyright:
      locale === "en"
        ? `© ${currentYear} Olimpia's Biohazard & Restoration. All rights reserved.`
        : `© ${currentYear} Olimpia's Biohazard & Restoration. Todos los derechos reservados.`,
  }

  return (
    <footer className="bg-charcoal border-t border-gold/20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Olimpia's Biohazard Logo" width={40} height={40} />
              <h3 className="text-xl font-heading font-bold text-gold">Olimpia&apos;s Biohazard</h3>
            </div>
            <p className="text-gray-300 text-sm mb-4">{text.emergency}</p>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-gray-300">
                13460 SE Rusk Rd
                <br />
                Milwaukie, OR 97222
              </p>
              <p>
                <a href={`tel:${phone.replace(/\D/g, "")}`} className="hover:text-gold transition-colors">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${email}`} className="hover:text-gold transition-colors">
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              {locale === "en" ? "Quick Links" : "Enlaces Rápidos"}
            </h4>
            <nav className="space-y-2">
              <Link
                href={locale === "en" ? "/services" : "/es/services"}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {links.services}
              </Link>
              <Link
                href={locale === "en" ? "/service-area" : "/es/service-area"}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {links.serviceArea}
              </Link>
              <Link
                href={locale === "en" ? "/about" : "/es/about"}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {links.about}
              </Link>
              <Link
                href={locale === "en" ? "/contact" : "/es/contact"}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {links.contact}
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-white mb-4">
              {locale === "en" ? "Legal" : "Legal"}
            </h4>
            <nav className="space-y-2">
              <Link
                href={locale === "en" ? "/privacy" : "/es/privacy"}
                className="block text-gray-300 hover:text-gold transition-colors text-sm"
              >
                {links.privacy}
              </Link>
            </nav>
          </div>
        </div>

        <div className="py-6 border-t border-gold/20 text-center text-sm text-gray-400">
          <p>{text.copyright}</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
