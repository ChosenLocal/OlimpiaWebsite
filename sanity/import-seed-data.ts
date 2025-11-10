/**
 * Import seed data into Sanity
 * Run with: npx tsx sanity/import-seed-data.ts
 *
 * Make sure to have SANITY_API_TOKEN in your .env.local file
 */

import { createClient } from '@sanity/client'
import { services, cities, faqs, testimonials, settings } from './seed-data'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || '7phj7yjk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
})

async function importData() {
  console.log('🚀 Starting Sanity CMS data import...\n')

  try {
    // Import English Services
    console.log('📦 Importing English services...')
    for (const service of services.en) {
      const result = await client.create(service)
      console.log(`✅ Created: ${result.title}`)
    }

    // Import Spanish Services
    console.log('\n📦 Importing Spanish services...')
    for (const service of services.es) {
      const result = await client.create(service)
      console.log(`✅ Created: ${result.title}`)
    }

    // Import Cities
    console.log('\n🏙️  Importing cities...')
    for (const city of cities) {
      const result = await client.create(city)
      console.log(`✅ Created: ${result.name}, ${result.state}`)
    }

    // Import English FAQs
    console.log('\n❓ Importing English FAQs...')
    for (const faq of faqs.en) {
      const result = await client.create(faq)
      console.log(`✅ Created FAQ: ${result.question.substring(0, 50)}...`)
    }

    // Import Spanish FAQs
    console.log('\n❓ Importing Spanish FAQs...')
    for (const faq of faqs.es) {
      const result = await client.create(faq)
      console.log(`✅ Created FAQ: ${result.question.substring(0, 50)}...`)
    }

    // Import Testimonials
    console.log('\n⭐ Importing testimonials...')
    for (const testimonial of testimonials) {
      const result = await client.create(testimonial)
      console.log(`✅ Created testimonial from: ${result.name}`)
    }

    // Import Settings
    console.log('\n⚙️  Importing site settings...')
    const settingsResult = await client.createOrReplace(settings)
    console.log(`✅ Created/Updated settings`)

    console.log('\n✨ Import complete! Your Sanity CMS is now populated with seed data.')
    console.log('\n📊 Summary:')
    console.log(`   - ${services.en.length} English services`)
    console.log(`   - ${services.es.length} Spanish services`)
    console.log(`   - ${cities.length} cities`)
    console.log(`   - ${faqs.en.length} English FAQs`)
    console.log(`   - ${faqs.es.length} Spanish FAQs`)
    console.log(`   - ${testimonials.length} testimonials`)
    console.log(`   - 1 site settings`)
    console.log('\n🎉 You can now access Sanity Studio at http://localhost:3000/studio')
  } catch (error) {
    console.error('\n❌ Error importing data:', error)
    console.error('\nMake sure:')
    console.error('1. Your SANITY_API_TOKEN is set in .env.local')
    console.error('2. The token has write permissions')
    console.error('3. The project ID is correct (7phj7yjk)')
    process.exit(1)
  }
}

// Run the import
importData()
