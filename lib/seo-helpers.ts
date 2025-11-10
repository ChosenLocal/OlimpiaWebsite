import { Metadata } from 'next'

const BASE_URL = 'https://olimpiasbiohazard.com'
const BUSINESS_NAME = "Olimpia's Biohazard & Restoration"
const BUSINESS_PHONE = '(971) 895-4262'
const DEFAULT_IMAGE = '/logo.png'

interface PageMetadataOptions {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
  keywords?: string[]
}

/**
 * Generate complete metadata with OG and Twitter cards for a page
 */
export function generatePageMetadata(options: PageMetadataOptions): Metadata {
  const {
    title,
    description,
    path,
    image = DEFAULT_IMAGE,
    noindex = false,
    keywords = [],
  } = options

  const url = `${BASE_URL}${path}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 1200,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : undefined,
  }
}

/**
 * Generate HowTo schema for process-based content
 */
export function generateHowToSchema(options: {
  name: string
  description: string
  steps: Array<{ name: string; text: string; image?: string }>
  totalTime?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: options.name,
    description: options.description,
    totalTime: options.totalTime,
    step: options.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      image: step.image,
    })),
  }
}

/**
 * Generate Person schema (for About page, team members)
 */
export function generatePersonSchema(options: {
  name: string
  jobTitle: string
  description: string
  email?: string
  telephone?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: options.name,
    jobTitle: options.jobTitle,
    description: options.description,
    email: options.email,
    telephone: options.telephone,
    image: options.image,
    worksFor: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
    },
  }
}

/**
 * Generate Organization schema
 */
export function generateOrganizationSchema(options?: {
  founder?: string
  foundingDate?: string
  numberOfEmployees?: number
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_NAME,
    url: BASE_URL,
    logo: `${BASE_URL}${DEFAULT_IMAGE}`,
    telephone: BUSINESS_PHONE,
    email: 'olimpias.biohazard@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '13460 SE Rusk Rd',
      addressLocality: 'Milwaukie',
      addressRegion: 'OR',
      postalCode: '97222',
      addressCountry: 'US',
    },
    founder: options?.founder
      ? {
          '@type': 'Person',
          name: options.founder,
        }
      : undefined,
    foundingDate: options?.foundingDate,
    numberOfEmployees: options?.numberOfEmployees,
  }
}

/**
 * Generate ContactPage schema
 */
export function generateContactPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Us - Olimpia\'s Biohazard & Restoration',
    description: 'Contact Olimpia\'s Biohazard & Restoration for 24/7 emergency cleanup services in Portland Metro. Call, text, or request a callback.',
    url: `${BASE_URL}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
      email: 'olimpias.biohazard@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '13460 SE Rusk Rd',
        addressLocality: 'Milwaukie',
        addressRegion: 'OR',
        postalCode: '97222',
        addressCountry: 'US',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
    },
  }
}

/**
 * Generate Speakable schema for voice assistant optimization
 */
export function generateSpeakableSchema(cssSelectors: string[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: cssSelectors,
    },
  }
}

/**
 * Generate AggregateRating schema (for when reviews are available)
 */
export function generateAggregateRatingSchema(options: {
  ratingValue: number
  reviewCount: number
  bestRating?: number
  worstRating?: number
}) {
  return {
    '@type': 'AggregateRating',
    ratingValue: options.ratingValue,
    reviewCount: options.reviewCount,
    bestRating: options.bestRating || 5,
    worstRating: options.worstRating || 1,
  }
}

/**
 * Generate common keywords for biohazard/restoration services
 */
export function getBiohazardKeywords(): string[] {
  return [
    'biohazard cleanup',
    'crime scene cleanup',
    'trauma scene cleanup',
    'unattended death cleanup',
    'hoarding cleanup',
    'water damage restoration',
    'fire damage restoration',
    'emergency cleanup',
    'Portland biohazard',
    'OSHA compliant cleanup',
    'discrete cleanup services',
    '24/7 emergency response',
  ]
}

/**
 * Get keywords for a specific city
 */
export function getCityKeywords(city: string, service: string): string[] {
  return [
    `${service} ${city}`,
    `${city} ${service}`,
    `${service} near ${city}`,
    `emergency ${service} ${city}`,
    `${city} OR ${service}`,
    `${city} Oregon ${service}`,
  ]
}
