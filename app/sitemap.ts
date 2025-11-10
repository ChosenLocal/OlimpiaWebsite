import { MetadataRoute } from 'next'
import { SERVICES, CITIES, generateServiceCityCombinations } from '@/lib/service-city'

const BASE_URL = 'https://olimpiasbiohazard.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date()

  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/faqs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/safety-compliance`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/service-areas`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Spanish versions of static pages
  const spanishPages = [
    {
      url: `${BASE_URL}/es`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/es/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/es/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/es/faqs`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/es/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Static service pages
  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Dynamic service × city combinations
  const serviceCityPages = generateServiceCityCombinations().map((combo) => ({
    url: `${BASE_URL}/services/${combo.slug}/in/${combo.city}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // City-specific service area pages (if they exist as individual pages)
  const cityPages = CITIES.map((city) => ({
    url: `${BASE_URL}/service-areas/${city.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    ...staticPages,
    ...spanishPages,
    ...servicePages,
    ...serviceCityPages,
    ...cityPages,
  ]
}
