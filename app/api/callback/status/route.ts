// /app/api/callback/status/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7phj7yjk',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false
})

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const callSid = formData.get('CallSid') as string
    const callStatus = formData.get('CallStatus') as string
    const callDuration = formData.get('CallDuration') as string

    // Find the lead by Twilio call SID and update status
    const leads = await sanityClient.fetch(
      `*[_type == "lead" && twilioCallSid == $callSid][0]`,
      { callSid }
    )

    if (leads) {
      await sanityClient
        .patch(leads._id)
        .set({
          twilioCallStatus: callStatus,
          twilioCallDuration: callDuration ? parseInt(callDuration) : undefined,
          lastUpdated: new Date().toISOString()
        })
        .commit()

      // Update lead status based on call status
      if (callStatus === 'completed' && parseInt(callDuration) > 30) {
        // Call lasted more than 30 seconds - likely successful contact
        await sanityClient
          .patch(leads._id)
          .set({ status: 'contacted' })
          .commit()
      } else if (callStatus === 'failed' || callStatus === 'no-answer') {
        // Call failed - keep as new for manual follow-up
        await sanityClient
          .patch(leads._id)
          .set({
            status: 'new',
            notes: [{
              _type: 'block',
              children: [{
                _type: 'span',
                text: `Automated callback ${callStatus}. Manual follow-up required.`
              }]
            }]
          })
          .commit()
      }
    }

    console.log('Call status update:', { callSid, callStatus, callDuration })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating call status:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to update status' },
      { status: 500 }
    )
  }
}
