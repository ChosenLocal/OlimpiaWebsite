"use client"

import Link from "next/link"
import Image from "next/image"

interface ServiceCardProps {
  service: {
    title: string
    description: string
    href: string
    icon: string
    category: string
    image?: string
  }
  locale: string
}

export function ServiceCard({ service, locale }: ServiceCardProps) {
  return (
    <Link href={service.href}>
      <div className="h-full cursor-pointer bg-charcoal border border-gold/20 hover:border-gold/40 rounded-lg overflow-hidden transition-all group">
        <div className="relative h-48 overflow-hidden bg-coal/50">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-transparent" />
          <div className="absolute top-4 left-4 w-12 h-12 bg-gold/90 rounded-full flex items-center justify-center text-2xl shadow-lg">
            {service.icon}
          </div>
        </div>        <div className="p-6">
          <h4 className="text-lg font-semibold text-white group-hover:text-gold transition-colors mb-2">
            {service.title}
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">{service.description}</p>
          <div className="inline-flex items-center text-water group-hover:text-gold transition-colors text-sm font-medium">
            {locale === "en" ? "Learn more" : "Más información"}
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}
