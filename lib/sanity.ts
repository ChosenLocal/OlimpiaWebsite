import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7phj7yjk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Helper function to get services
export async function getServices(locale: 'en' | 'es' = 'en') {
  return client.fetch(
    `*[_type == "service" && locale == $locale] | order(_createdAt desc)`,
    { locale }
  )
}

// Helper function to get a single service by slug
export async function getService(slug: string, locale: 'en' | 'es' = 'en') {
  return client.fetch(
    `*[_type == "service" && slug.current == $slug && locale == $locale][0]{
      ...,
      faqs[]->{question, answer}
    }`,
    { slug, locale }
  )
}

// Helper function to get cities
export async function getCities(locale: 'en' | 'es' = 'en') {
  return client.fetch(
    `*[_type == "city" && locale == $locale] | order(name asc)`,
    { locale }
  )
}

// Helper function to get settings
export async function getSettings() {
  return client.fetch(`*[_type == "settings"][0]`)
}
