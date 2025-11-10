import Image from "next/image"
import { Container } from "@/components/ui/Container"
import { R2_IMAGES } from "@/lib/r2-images"

export interface ProcessSnapshotProps {
  locale?: "en" | "es"
}

export function ProcessSnapshot({ locale = "en" }: ProcessSnapshotProps) {
  const steps = [
    {
      number: 1,
      icon: "🛡️",
      title: locale === "en" ? "We secure the scene" : "Aseguramos el lugar",
      description:
        locale === "en"
          ? "Contain affected areas and prevent cross-contamination"
          : "Contenemos las áreas afectadas y prevenimos contaminación",
    },
    {
      number: 2,
      icon: "🧹",
      title: locale === "en" ? "Remediate hazards" : "Remediamos peligros",
      description:
        locale === "en"
          ? "Remove biohazards and decontaminate using OSHA protocols"
          : "Eliminamos peligros biológicos y descontaminamos usando protocolos OSHA",
    },
    {
      number: 3,
      icon: "✓",
      title: locale === "en" ? "Restore & clear with your insurer" : "Restauramos y procesamos con su aseguradora",
      description:
        locale === "en"
          ? "Complete restoration and handle insurance documentation"
          : "Restauración completa y manejamos documentación de seguro",
    },
  ]

  return (
    <section className="py-16 bg-charcoal border-y border-gold/20 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={R2_IMAGES.hero.technician || "/placeholder.svg"}
          alt="Professional cleanup technician"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/90 via-charcoal/95 to-charcoal" />
      </div>

      <Container className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-3">
            {locale === "en" ? "How We Help You" : "Cómo Le Ayudamos"}
          </h2>
          <p className="text-gray-400">
            {locale === "en" ? "Simple, professional process from start to finish" : "Proceso simple y profesional"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center text-3xl">
                  {step.icon}
                </div>
              </div>
              <div className="mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gold text-coal font-bold text-sm">
                  {step.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/about"
            className="text-water hover:text-gold transition-colors font-medium inline-flex items-center gap-2"
          >
            {locale === "en" ? "See the full process" : "Ver el proceso completo"}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </Container>
    </section>
  )
}
