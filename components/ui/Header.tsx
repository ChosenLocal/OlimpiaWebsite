"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Container } from "./Container"
import { Button } from "./Button"
import { LanguageToggle } from "./LanguageToggle"
import { IntakeFormModal } from "@/components/forms/IntakeFormModal"
import { getLocaleFromPathname } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export interface HeaderProps {
  phone?: string
}

export function Header({ phone = "+19718954262" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [intakeModalOpen, setIntakeModalOpen] = useState(false)
  const pathname = usePathname()
  const locale = getLocaleFromPathname(pathname)

  const navigation = [
    { name: locale === "en" ? "Services" : "Servicios", href: locale === "en" ? "/services" : "/es/services" },
    {
      name: locale === "en" ? "Service Areas" : "Área de Servicio",
      href: locale === "en" ? "/service-areas" : "/es/service-areas",
    },
    { name: locale === "en" ? "FAQs" : "Preguntas", href: locale === "en" ? "/faqs" : "/es/faqs" },
    { name: locale === "en" ? "About" : "Acerca", href: locale === "en" ? "/about" : "/es/about" },
    { name: locale === "en" ? "Contact" : "Contacto", href: locale === "en" ? "/contact" : "/es/contact" },
  ]

  const formattedPhone = phone.replace("+1", "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")

  return (
    <header className="sticky top-0 z-50 bg-coal/95 backdrop-blur-sm border-b border-gold/20">
      <div className="bg-fire text-white">
        <Container>
          <div className="py-2.5 flex flex-wrap items-center justify-between gap-2 text-sm">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-bold whitespace-nowrap">24/7 Emergency</span>
              <span className="hidden sm:inline text-white/90">•</span>
              <a href={`tel:${phone}`} className="hover:text-gold transition-colors font-bold text-base">
                {formattedPhone}
              </a>
              <span className="hidden md:inline text-white/90">•</span>
              <span className="hidden md:inline text-white/90">Response in ~60 min</span>
              <span className="hidden lg:inline text-white/90">•</span>
              <span className="hidden lg:inline text-white/90">Unmarked vehicles available</span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/40 text-xs font-semibold"
                asChild
              >
                <a href={`tel:${phone}`}>Call Now</a>
              </Button>
              <Button
                size="sm"
                className="bg-white/20 hover:bg-white/30 text-white border-white/40 text-xs font-semibold"
                asChild
              >
                <a href={`sms:${phone}`}>Text Discreetly</a>
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <nav className="flex items-center justify-between py-4">
          <Link href={locale === "en" ? "/" : "/es"} className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Olimpia's Biohazard Logo" width={50} height={50} className="h-12 w-auto" />
            <div className="flex flex-col">
              <span className="text-xl font-heading font-bold text-white leading-tight">Olimpia&apos;s</span>
              <span className="text-xs text-white/80 font-medium">Biohazard & Restoration</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors",
                  pathname === item.href ? "text-gold" : "text-white hover:text-gold",
                )}
                style={{ color: pathname === item.href ? "#d4af37" : "#ffffff" }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <LanguageToggle />
            <Button
              variant="primary"
              size="md"
              className="bg-gold text-coal hover:bg-gold/90 font-bold shadow-lg"
              style={{ color: "#0d0d0d" }}
              onClick={() => setIntakeModalOpen(true)}
            >
              {locale === "en" ? "Get Same-Day Assessment" : "Evaluación Mismo Día"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 text-white hover:text-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12M6 12h12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gold/20">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block py-2 text-base font-medium transition-colors",
                  pathname === item.href ? "text-gold" : "text-white hover:text-gold",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gold/20 space-y-3">
              <LanguageToggle className="block" />
              <Button
                variant="primary"
                size="md"
                className="w-full bg-gold text-coal hover:bg-gold/90 font-bold"
                style={{ color: "#0d0d0d" }}
                onClick={() => {
                  setIntakeModalOpen(true)
                  setMobileMenuOpen(false)
                }}
              >
                {locale === "en" ? "Get Same-Day Assessment" : "Evaluación Mismo Día"}
              </Button>
            </div>
          </div>
        )}
      </Container>

      <IntakeFormModal isOpen={intakeModalOpen} onClose={() => setIntakeModalOpen(false)} />
    </header>
  )
}

export default Header
