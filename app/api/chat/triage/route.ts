// /app/api/chat/triage/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import Anthropic from '@anthropic-ai/sdk'

// Validation schema
const chatSchema = z.object({
  message: z.string().min(1, 'Message cannot be empty').max(500, 'Message too long'),
  locale: z.enum(['en', 'es']).default('en'),
  conversationId: z.string().optional()
})

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
})

// System prompt for triage
const SYSTEM_PROMPT_EN = `You are a compassionate, professional triage assistant for Olimpia's Biohazard & Restoration, a biohazard cleanup and emergency restoration company in Portland Metro, Oregon.

YOUR ROLE:
- Help users understand what services they need
- Provide immediate guidance for emergency situations
- Route to appropriate services
- Be empathetic - users are often in distress

SERVICES OFFERED:
1. Crime Scene Cleanup - blood, bodily fluids, forensic cleaning
2. Biohazard Remediation - biological hazards, contamination
3. Unattended Death Cleanup - respectful, thorough decontamination
4. Water Damage Restoration - flooding, leaks, sewage
5. Fire Damage Restoration - smoke, soot, structural damage
6. Hoarding Cleanup - compassionate decluttering and sanitization

EMERGENCY GUIDANCE:
- If immediate danger (ongoing hazard): Direct to call 911 first, then our 24/7 line
- If biohazard present: Do not touch, keep others away, ventilate if safe
- If insurance question: We work with all major insurers, provide documentation

IMPORTANT RULES:
- Never give medical advice
- Never make light of traumatic situations
- If unsure, recommend calling our 24/7 line: (503) 555-1234
- Keep responses under 150 words
- Be direct and actionable
- Never discuss pricing (say "call for free estimate")

If user needs immediate help, end with: "For 24/7 emergency service, call (503) 555-1234 or click 'Call Now' above."`

const SYSTEM_PROMPT_ES = `Eres un asistente de triaje compasivo y profesional para Olimpia's Biohazard & Restoration, una empresa de limpieza de materiales peligrosos y restauración de emergencias en el área metropolitana de Portland, Oregon.

TU FUNCIÓN:
- Ayudar a los usuarios a entender qué servicios necesitan
- Proporcionar orientación inmediata para situaciones de emergencia
- Dirigir a los servicios apropiados
- Ser empático: los usuarios a menudo están angustiados

SERVICIOS OFRECIDOS:
1. Limpieza de Escena del Crimen - sangre, fluidos corporales, limpieza forense
2. Remediación de Materiales Peligrosos - peligros biológicos, contaminación
3. Limpieza de Muerte sin Atención - descontaminación respetuosa y completa
4. Restauración de Daños por Agua - inundaciones, fugas, aguas residuales
5. Restauración de Daños por Fuego - humo, hollín, daños estructurales
6. Limpieza de Acumulación - desorden compasivo y saneamiento

ORIENTACIÓN DE EMERGENCIA:
- Si hay peligro inmediato (peligro continuo): Dirigir a llamar al 911 primero, luego a nuestra línea 24/7
- Si hay material peligroso presente: No tocar, mantener a otros alejados, ventilar si es seguro
- Si pregunta de seguro: Trabajamos con todos los aseguradores principales, proporcionamos documentación

REGLAS IMPORTANTES:
- Nunca dar consejos médicos
- Nunca hacer luz de situaciones traumáticas
- Si no estás seguro, recomienda llamar a nuestra línea 24/7: (503) 555-1234
- Mantén las respuestas bajo 150 palabras
- Sé directo y práctico
- Nunca discutas precios (di "llame para una estimación gratuita")

Si el usuario necesita ayuda inmediata, termina con: "Para servicio de emergencia 24/7, llame al (503) 555-1234 o haga clic en 'Llamar Ahora' arriba."`

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate input
    const validatedData = chatSchema.parse(body)

    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    if (!checkRateLimit(ip, 10, 60000)) { // 10 requests per minute
      return NextResponse.json(
        {
          success: false,
          message: validatedData.locale === 'es'
            ? 'Demasiadas solicitudes. Por favor intente nuevamente en un momento.'
            : 'Too many requests. Please try again in a moment.'
        },
        { status: 429 }
      )
    }

    // Check for blocked content (spam, abuse)
    if (containsBlockedContent(validatedData.message)) {
      return NextResponse.json(
        {
          success: false,
          message: validatedData.locale === 'es'
            ? 'Lo siento, no puedo ayudar con ese tipo de solicitud.'
            : 'I\'m sorry, I can\'t help with that type of request.'
        },
        { status: 400 }
      )
    }

    // Call Anthropic API for triage
    if (!process.env.ANTHROPIC_API_KEY) {
      // Fallback response if API key not configured
      return NextResponse.json({
        success: true,
        response: validatedData.locale === 'es'
          ? 'Gracias por contactarnos. Para asistencia inmediata, por favor llame a nuestra línea 24/7 al (503) 555-1234.'
          : 'Thank you for contacting us. For immediate assistance, please call our 24/7 line at (503) 555-1234.',
        conversationId: validatedData.conversationId || generateConversationId()
      })
    }

    const message = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 300,
      system: validatedData.locale === 'es' ? SYSTEM_PROMPT_ES : SYSTEM_PROMPT_EN,
      messages: [
        {
          role: 'user',
          content: validatedData.message
        }
      ]
    })

    const responseText = message.content[0].type === 'text' ? message.content[0].text : ''

    return NextResponse.json({
      success: true,
      response: responseText,
      conversationId: validatedData.conversationId || generateConversationId()
    })

  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Invalid request',
          errors: error.errors
        },
        { status: 400 }
      )
    }

    // Anthropic API error
    if (error instanceof Anthropic.APIError) {
      console.error('Anthropic API error:', error)
      return NextResponse.json(
        {
          success: false,
          message: 'Service temporarily unavailable. Please call (503) 555-1234 for immediate assistance.'
        },
        { status: 503 }
      )
    }

    // Server error
    console.error('Chat triage error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'An error occurred. Please call (503) 555-1234 for immediate assistance.'
      },
      { status: 500 }
    )
  }
}

// Helper functions
function generateConversationId(): string {
  return `conv_${Date.now()}_${Math.random().toString(36).substring(7)}`
}

function containsBlockedContent(message: string): boolean {
  const blockedPatterns = [
    /\b(spam|viagra|cialis|casino|lottery|winner)\b/i,
    /\b(http|https|www\.)/i, // URLs
    /(.)\1{10,}/ // Repeated characters
  ]

  return blockedPatterns.some(pattern => pattern.test(message))
}

// Rate limiting (in-memory implementation)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function checkRateLimit(ip: string, maxRequests = 10, windowMs = 60000): boolean {
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
