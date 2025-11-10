"use client"
import { Button } from "./Button"
import { cn } from "@/lib/utils"
import { formatPhone } from "@/lib/utils"
import { BUSINESS_PHONE } from "@/constants"

export interface EmergencyCTAProps {
  phone?: string
  text?: string
  locale?: "en" | "es"
  className?: string
  position?: "fixed" | "static"
}

const EmergencyCTA = ({
  phone = BUSINESS_PHONE,
  text = "Call Now",
  locale = "en",
  className,
  position = "static",
}: EmergencyCTAProps) => {
  const displayPhone = formatPhone(phone)

  return (
    <div
      className={cn(
        "bg-fire text-white py-3 px-4 flex items-center justify-between gap-4 rounded-lg shadow-lg",
        position === "fixed" && "fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-sm z-40",
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="text-2xl">🚨</div>
        <div>
          <p className="text-sm font-semibold">
            {locale === "en" ? "24/7 Emergency Service" : "Servicio de Emergencia 24/7"}
          </p>
          <p className="text-xs opacity-90">
            {locale === "en"
              ? "Immediate response • Professional team • Discreet service"
              : "Respuesta inmediata • Equipo profesional • Servicio discreto"}
          </p>
        </div>
      </div>
      <Button variant="emergency" size="md" asChild>
        <a href={`tel:${phone}`} className="whitespace-nowrap" style={{ color: "#0d0d0d" }}>
          {text}
        </a>
      </Button>
    </div>
  )
}

export { EmergencyCTA }
export default EmergencyCTA as typeof EmergencyCTA
