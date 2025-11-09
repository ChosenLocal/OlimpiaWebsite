// /app/api/callback/bridge/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const customerPhone = searchParams.get('customer')
  const locale = searchParams.get('locale') || 'en'

  if (!customerPhone) {
    return new NextResponse('Missing customer phone', { status: 400 })
  }

  // Generate TwiML to bridge the call
  const greeting = locale === 'es'
    ? 'Nuevo cliente esperando. Conectando ahora.'
    : 'New customer waiting. Connecting now.'

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="Polly.Joanna" language="${locale === 'es' ? 'es-US' : 'en-US'}">${greeting}</Say>
  <Dial timeout="30" callerId="${process.env.TWILIO_PHONE_NUMBER}">
    <Number>${customerPhone}</Number>
  </Dial>
  <Say voice="Polly.Joanna" language="${locale === 'es' ? 'es-US' : 'en-US'}">
    ${locale === 'es' ? 'El cliente no está disponible.' : 'Customer unavailable.'}
  </Say>
</Response>`

  return new NextResponse(twiml, {
    status: 200,
    headers: {
      'Content-Type': 'text/xml'
    }
  })
}

// Also handle GET for testing
export async function GET(request: NextRequest) {
  return POST(request)
}
