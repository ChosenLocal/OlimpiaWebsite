// app/api/twiml/bridge/route.ts
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  // Dial the on-call tech; if no answer, dial fallback
  const tech = process.env.ON_CALL_NUMBER_PRIMARY!
  const fallback = process.env.ON_CALL_NUMBER_FALLBACK!

  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say>Connecting you now.</Say>
  <Dial timeout="20">
    <Number>${tech}</Number>
  </Dial>
  <Dial timeout="20">
    <Number>${fallback}</Number>
  </Dial>
</Response>`

  return new Response(twiml, { headers: { 'Content-Type': 'text/xml' } })
}
