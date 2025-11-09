// /app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@sanity/client'

// Validation schema
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^\+?1?\d{10,14}$/, 'Invalid phone number'),
  email: z.string().email('Invalid email address'),
  zip: z.string().regex(/^\d{5}$/, 'ZIP code must be 5 digits'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  locale: z.enum(['en', 'es']).default('en'),
  consent: z.boolean().refine((val) => val === true, {
    message: 'You must consent to contact'
  })
})

// Sanity client for storing leads
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7phj7yjk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validatedData = leadSchema.parse(body)

    // Store lead in Sanity
    const lead = await sanityClient.create({
      _type: 'lead',
      ...validatedData,
      source: 'website_contact_form',
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      createdAt: new Date().toISOString(),
      status: 'new'
    })

    // TODO: Send notification email/SMS to on-call team
    // TODO: Add to CRM (if applicable)

    return NextResponse.json(
      {
        success: true,
        message: validatedData.locale === 'es'
          ? 'Gracias por su mensaje. Nos pondremos en contacto pronto.'
          : 'Thank you for your message. We will contact you shortly.',
        leadId: lead._id
      },
      { status: 201 }
    )

  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    // Server error
    console.error('Lead submission error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again or call us directly.'
      },
      { status: 500 }
    )
  }
}

// Rate limiting helper (simple in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string, maxRequests = 5, windowMs = 60000): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + windowMs })
    return true
  }

  if (record.count >= maxRequests) {
    return false
  }

  record.count++
  return true
}
