// app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const Schema = z.object({
  name: z.string().min(1),
  phone: z.string().min(7).optional(),
  email: z.string().email().optional(),
  zip: z.string().optional(),
  service: z.string().optional(),
  message: z.string().optional()
})

export async function POST(req: NextRequest) {
  const data = Schema.parse(await req.json())
  // TODO: store securely, send email/Slack, push to CRM
  return NextResponse.json({ ok: true })
}
