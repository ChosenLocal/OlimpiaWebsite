"use client"

import { useState } from "react"
import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { IntakeFormModal } from "@/components/forms/IntakeFormModal"
import { R2_IMAGES } from "@/lib/r2-images"

export interface HeroProps {
  title: string
  subtitle: string
  phone: string
  locale?: "en" | "es"
  className?: string
  showCallback?: boolean
}

export function Hero({ title, subtitle, phone, locale = "en", className, showCallback = true }: HeroProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const formattedPhone = phone.replace("+1", "").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")

  return (
    <>
      <section
        className={cn("relative py-20 md:py-32 bg-gradient-to-b from-coal to-charcoal overflow-hidden", className)}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={R2_IMAGES.hero.main || "/placeholder.svg"}
            alt="Professional biohazard cleanup team"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-coal/80 via-coal/70 to-charcoal/90" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">{subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                variant="emergency"
                size="lg"
                asChild
                className="min-w-[240px] text-lg shadow-xl shadow-fire/30 font-bold"
                style={{ color: "#ffffff" }}
              >
                <a href={`tel:${phone}`} style={{ color: "#0d0d0d" }}>
                  Get Help Now
                </a>
              </Button>
              {showCallback && (
                <Button
                  variant="primary"
                  size="lg"
                  className="min-w-[240px] text-lg bg-gold text-coal hover:bg-gold/90 font-bold shadow-lg"
                  style={{ color: "#0d0d0d" }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Same-Day Assessment
                </Button>
              )}
            </div>

            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-300 mb-8">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">OSHA-compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Background-checked</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-medium">Insurance-ready</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gold/20">
              <p className="text-gray-400 text-sm mb-2">Call 24/7 Emergency Line</p>
              <a
                href={`tel:${phone}`}
                className="inline-block text-3xl md:text-4xl font-bold text-gold hover:text-gold/90 transition-colors"
              >
                {formattedPhone}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <IntakeFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
