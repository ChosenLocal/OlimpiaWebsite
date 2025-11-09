// app/api/callback/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import Twilio from 'twilio'

const Schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(7),
  zip: z.string().optional(),
  service: z.string().optional()
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const data = Schema.parse(body)

  const client = Twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)

  // Call the customer first
  const call = await client.calls.create({
    to: data.phone,
    from: process.env.TWILIO_NUMBER!,
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/twiml/bridge`
  })

  return NextResponse.json({ ok: true, sid: call.sid })
}
