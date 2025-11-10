// /lib/service-city.ts
// Service × City combinations and unique content generation

export interface Service {
  slug: string
  name: string
  nameES: string
}

export interface City {
  slug: string
  name: string
  county?: string
  zipCodes?: string[]
}

// Core services offered
export const SERVICES: Service[] = [
  { slug: 'crime-scene-cleanup', name: 'Crime Scene Cleanup', nameES: 'Limpieza de Escena del Crimen' },
  { slug: 'biohazard-remediation', name: 'Biohazard Remediation', nameES: 'Remediación de Materiales Peligrosos' },
  { slug: 'unattended-death-cleanup', name: 'Unattended Death Cleanup', nameES: 'Limpieza de Muerte sin Atención' },
  { slug: 'water-damage-restoration', name: 'Water Damage Restoration', nameES: 'Restauración de Daños por Agua' },
  { slug: 'fire-damage-restoration', name: 'Fire Damage Restoration', nameES: 'Restauración de Daños por Fuego' },
  { slug: 'hoarding-cleanup', name: 'Hoarding Cleanup', nameES: 'Limpieza de Acumulación' }
]

// Portland Metro cities
export const CITIES: City[] = [
  { slug: 'portland', name: 'Portland', county: 'Multnomah County', zipCodes: ['97201', '97202', '97203', '97204', '97205'] },
  { slug: 'milwaukie', name: 'Milwaukie', county: 'Clackamas County', zipCodes: ['97222', '97267'] },
  { slug: 'gresham', name: 'Gresham', county: 'Multnomah County', zipCodes: ['97030', '97080'] },
  { slug: 'lake-oswego', name: 'Lake Oswego', county: 'Clackamas County', zipCodes: ['97034', '97035'] },
  { slug: 'west-linn', name: 'West Linn', county: 'Clackamas County', zipCodes: ['97068'] },
  { slug: 'oregon-city', name: 'Oregon City', county: 'Clackamas County', zipCodes: ['97045'] },
  { slug: 'beaverton', name: 'Beaverton', county: 'Washington County', zipCodes: ['97005', '97006', '97007', '97008'] },
  { slug: 'tigard', name: 'Tigard', county: 'Washington County', zipCodes: ['97223', '97224'] }
]

export function getService(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}

export function getCity(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug)
}

// Generate all service × city combinations
export function generateServiceCityCombinations(): Array<{ slug: string; city: string }> {
  const combinations: Array<{ slug: string; city: string }> = []

  for (const service of SERVICES) {
    for (const city of CITIES) {
      combinations.push({
        slug: service.slug,
        city: city.slug
      })
    }
  }

  return combinations
}

// Generate unique intro content for each service × city combination
export function generateUniqueIntro(serviceName: string, cityName: string, cityData: City, locale: 'en' | 'es' = 'en'): string {
  if (locale === 'es') {
    return `${serviceName} en ${cityName}, Oregon. Olimpia's Biohazard & Restoration proporciona servicios certificados de limpieza de emergencia en ${cityName} y ${cityData.county}. Respuesta rápida, trabajo discreto y técnicos totalmente certificados disponibles 24/7.`
  }

  return `Professional ${serviceName} services in ${cityName}, Oregon. Olimpia's Biohazard & Restoration provides certified emergency cleanup throughout ${cityName} and ${cityData.county}. Fast response, discreet work, and fully certified technicians available 24/7.`
}

// Generate service-specific city insights
export function generateCityInsights(serviceSlug: string, cityName: string, locale: 'en' | 'es' = 'en'): string[] {
  const insights: Record<string, string[]> = {
    'crime-scene-cleanup': [
      locale === 'es'
        ? `Trabajamos en estrecha colaboración con el Departamento de Policía de ${cityName} y agencias locales de aplicación de la ley`
        : `We work closely with ${cityName} Police Department and local law enforcement agencies`,
      locale === 'es'
        ? 'Disponible para escenas residenciales, comerciales y vehículos'
        : 'Available for residential, commercial, and vehicle scenes',
      locale === 'es'
        ? 'Cumple con todos los estándares estatales y federales de Oregon'
        : 'Complies with all Oregon state and federal standards'
    ],
    'biohazard-remediation': [
      locale === 'es'
        ? `Servimos comunidades residenciales y comerciales en ${cityName}`
        : `Serving residential and commercial communities across ${cityName}`,
      locale === 'es'
        ? 'Eliminación certificada de materiales peligrosos y certificación final'
        : 'Certified biohazard disposal and final clearance certification',
      locale === 'es'
        ? 'Experiencia con propiedades unifamiliares y multifamiliares'
        : 'Experience with single-family and multi-family properties'
    ],
    'unattended-death-cleanup': [
      locale === 'es'
        ? 'Servicio compasivo y discreto para familias y administradores de propiedades'
        : 'Compassionate, discreet service for families and property managers',
      locale === 'es'
        ? `Respuesta rápida en vecindarios de ${cityName}`
        : `Rapid response throughout ${cityName} neighborhoods`,
      locale === 'es'
        ? 'Descontaminación completa y control de olores'
        : 'Complete decontamination and odor control'
    ],
    'water-damage-restoration': [
      locale === 'es'
        ? `Conocimiento local de problemas comunes de agua en ${cityName}`
        : `Local knowledge of common water issues in ${cityName}`,
      locale === 'es'
        ? 'Extracción de emergencia y servicios de secado'
        : 'Emergency extraction and drying services',
      locale === 'es'
        ? 'Trabajamos con compañías de seguros locales'
        : 'Work with local insurance companies'
    ],
    'fire-damage-restoration': [
      locale === 'es'
        ? `Servicio disponible después de que el Departamento de Bomberos de ${cityName} autoriza la entrada`
        : `Service available after ${cityName} Fire Department clears entry`,
      locale === 'es'
        ? 'Remoción de hollín, humo y daños estructurales'
        : 'Soot, smoke, and structural damage removal',
      locale === 'es'
        ? 'Asegurar y estabilizar estructuras dañadas'
        : 'Secure and stabilize damaged structures'
    ],
    'hoarding-cleanup': [
      locale === 'es'
        ? 'Enfoque compasivo y sin juicio'
        : 'Compassionate, judgment-free approach',
      locale === 'es'
        ? `Conectamos clientes en ${cityName} con recursos de apoyo locales`
        : `Connect ${cityName} clients with local support resources`,
      locale === 'es'
        ? 'Clasificación, desinfección y restauración'
        : 'Sorting, sanitization, and restoration'
    ]
  }

  return insights[serviceSlug] || [
    locale === 'es'
      ? `Servicio profesional en ${cityName}, Oregon`
      : `Professional service in ${cityName}, Oregon`,
    locale === 'es'
      ? 'Disponible 24/7 para emergencias'
      : 'Available 24/7 for emergencies',
    locale === 'es'
      ? 'Técnicos certificados y asegurados'
      : 'Certified and insured technicians'
  ]
}

// Generate response time information based on city
export function getResponseTime(citySlug: string, locale: 'en' | 'es' = 'en'): string {
  // Milwaukie is HQ, so faster response
  if (citySlug === 'milwaukie') {
    return locale === 'es'
      ? 'Típicamente en el sitio dentro de 60-90 minutos'
      : 'Typically on-site within 60-90 minutes'
  }

  // Portland metro cities
  const metroCities = ['portland', 'gresham', 'lake-oswego', 'west-linn', 'oregon-city', 'beaverton', 'tigard']
  if (metroCities.includes(citySlug)) {
    return locale === 'es'
      ? 'Típicamente en el sitio dentro de 90-120 minutos'
      : 'Typically on-site within 90-120 minutes'
  }

  return locale === 'es'
    ? 'Respuesta rápida - llamar para tiempo estimado'
    : 'Rapid response - call for estimated time'
}
