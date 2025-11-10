// /app/api/callback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@sanity/client'
import twilio from 'twilio'

// Validation schema
const callbackSchema = z.object({
  phone: z.string().regex(/^\+?1?\d{10,14}$/, 'Invalid phone number'),
  locale: z.enum(['en', 'es']).default('en')
})

// Sanity client for storing callback requests
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || '7phj7yjk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

// Twilio client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
)

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validatedData = callbackSchema.parse(body)

    // Rate limiting check
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip, 3, 300000)) { // 3 requests per 5 minutes
      return NextResponse.json(
        {
          success: false,
          message: validatedData.locale === 'es'
            ? 'Ha alcanzado el límite de solicitudes. Por favor intente nuevamente en unos minutos.'
            : 'Rate limit exceeded. Please try again in a few minutes.'
        },
        { status: 429 }
      )
    }

    // Store callback request in Sanity
    const callbackRequest = await sanityClient.create({
      _type: 'lead',
      phone: validatedData.phone,
      locale: validatedData.locale,
      source: 'callback_button',
      userAgent: request.headers.get('user-agent') || 'unknown',
      ip,
      createdAt: new Date().toISOString(),
      status: 'new',
      // Minimal data for callback - just phone and locale
      name: 'Callback Request',
      email: 'callback@olimpiasbiohazard.com',
      zip: '00000',
      service: 'emergency-callback',
      message: 'User requested immediate callback'
    })

    // Initiate Twilio call bridging
    // This will call the on-call team member and then connect them to the customer
    if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
      try {
        const onCallNumber = process.env.ON_CALL_PHONE || process.env.BUSINESS_PHONE

        if (!onCallNumber) {
          throw new Error('No on-call phone number configured')
        }

        // Create a TwiML URL that will bridge the call
        const twimlUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.olimpiasbiohazard.com'}/api/callback/bridge?customer=${encodeURIComponent(validatedData.phone)}&locale=${validatedData.locale}`

        // Call the on-call team member
        const call = await twilioClient.calls.create({
          to: onCallNumber,
          from: process.env.TWILIO_PHONE_NUMBER!,
          url: twimlUrl,
          statusCallback: `${process.env.NEXT_PUBLIC_BASE_URL}/api/callback/status`,
          statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed']
        })

        // Update the lead with the Twilio call SID
        await sanityClient
          .patch(callbackRequest._id)
          .set({ twilioCallSid: call.sid })
          .commit()

        return NextResponse.json(
          {
            success: true,
            message: validatedData.locale === 'es'
              ? 'Solicitud recibida. Le llamaremos en breve.'
              : 'Request received. We will call you shortly.',
            callbackId: callbackRequest._id
          },
          { status: 201 }
        )

      } catch (twilioError) {
        console.error('Twilio call error:', twilioError)
        // Still return success to user, but log the error
        // The lead was created, so team can follow up manually
        return NextResponse.json(
          {
            success: true,
            message: validatedData.locale === 'es'
              ? 'Solicitud recibida. Le llamaremos en breve.'
              : 'Request received. We will call you shortly.',
            callbackId: callbackRequest._id,
            warning: 'Automated callback failed, manual follow-up will be initiated'
          },
          { status: 201 }
        )
      }
    } else {
      // Twilio not configured - just store the lead
      return NextResponse.json(
        {
          success: true,
          message: validatedData.locale === 'es'
            ? 'Solicitud recibida. Le llamaremos en breve.'
            : 'Request received. We will call you shortly.',
          callbackId: callbackRequest._id
        },
        { status: 201 }
      )
    }

  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid phone number',
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        },
        { status: 400 }
      )
    }

    // Server error
    console.error('Callback request error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please try again or call us directly.'
      },
      { status: 500 }
    )
  }
}

// Rate limiting helper (in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string, maxRequests = 3, windowMs = 300000): boolean {
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
