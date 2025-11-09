// app/api/chat/triage/route.ts
import { NextRequest, NextResponse } from 'next/server'

/**
 * Minimal stub for chat triage.
 * Real implementation: call your LLM with a strict system prompt and pattern checks.
 */
export async function POST(req: NextRequest) {
  const { message, sessionId } = await req.json()
  // TODO: classify: emergency?/category?/collect phone?
  return NextResponse.json({
    ok: true,
    intent: "triage",
    asks: ["name","phone","zip","service","permission_to_call_now"]
  })
}
