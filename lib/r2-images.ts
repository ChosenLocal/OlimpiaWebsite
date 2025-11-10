// Cloudflare R2 Image Configuration
// Base URL for R2 bucket - using public access URL
const R2_BASE_URL = "https://pub-c0ae873bc7e14bd0a5059f36c4875766.r2.dev"

const USE_LOCAL_FALLBACK = true

// Image paths in R2 bucket
export const R2_IMAGES = {
  // Hero Images
  hero: {
    main: USE_LOCAL_FALLBACK ? "/biohazard-cleanup.jpg" : `${R2_BASE_URL}/hero-cleanup-team.jpg`,
    emergency: USE_LOCAL_FALLBACK ? "/biohazard-cleanup.jpg" : `${R2_BASE_URL}/hero-emergency-response.jpg`,
    technician: USE_LOCAL_FALLBACK ? "/biohazard-cleanup-team.jpg" : `${R2_BASE_URL}/hero-technician.jpg`,
  },

  // Service Images - each service gets a unique image
  services: {
    crimeScene: USE_LOCAL_FALLBACK ? "/service-crime-scene.jpg" : `${R2_BASE_URL}/service-crime-scene.jpg`,
    biohazard: USE_LOCAL_FALLBACK ? "/service-biohazard.jpg" : `${R2_BASE_URL}/service-biohazard.jpg`,
    unattendedDeath: USE_LOCAL_FALLBACK
      ? "/service-unattended-death.jpg"
      : `${R2_BASE_URL}/service-unattended-death.jpg`,
    waterDamage: USE_LOCAL_FALLBACK ? "/service-water-damage.jpg" : `${R2_BASE_URL}/service-water-damage.jpg`,
    fireDamage: USE_LOCAL_FALLBACK ? "/service-fire-damage.jpg" : `${R2_BASE_URL}/service-fire-damage.jpg`,
    hoarding: USE_LOCAL_FALLBACK ? "/service-hoarding.jpg" : `${R2_BASE_URL}/service-hoarding.jpg`,
  },

  // Team/About Images
  team: {
    group: `${R2_BASE_URL}/team-group.jpg`,
    technician1: `${R2_BASE_URL}/team-technician-1.jpg`,
    technician2: `${R2_BASE_URL}/team-technician-2.jpg`,
    vehicle: `${R2_BASE_URL}/team-vehicle.jpg`,
  },

  // Process/Equipment Images
  process: {
    assessment: `${R2_BASE_URL}/process-assessment.jpg`,
    cleanup: `${R2_BASE_URL}/process-cleanup.jpg`,
    verification: `${R2_BASE_URL}/process-verification.jpg`,
  },

  // Certifications/Trust Badges
  badges: {
    osha: `${R2_BASE_URL}/badge-osha.png`,
    certified: `${R2_BASE_URL}/badge-certified.png`,
    insured: `${R2_BASE_URL}/badge-insured.png`,
  },
} as const

// Helper function to get image URL with fallback
export function getR2Image(path: string, fallback?: string): string {
  return path || fallback || "/placeholder.svg?height=400&width=600"
}

// Helper to construct custom R2 image URL
export function buildR2Url(filename: string): string {
  return `${R2_BASE_URL}/${filename}`
}
