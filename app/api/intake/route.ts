import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Construct email content
    const emailContent = `
New Same-Day Assessment Request

Contact Information:
- Name: ${data.firstName} ${data.lastName}
- Phone: ${data.phone}
- Email: ${data.email}

Service Details:
- Property Address: ${data.address}
- Service Type: ${data.serviceType}
- Urgency Level: ${data.urgency}
- Insurance Claim: ${data.insuranceClaim}
- Preferred Contact: ${data.preferredContact}

Description:
${data.description}

---
Submitted at: ${new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })}
    `.trim()

    // Use your email sending service here
    // For now, I'll use a basic example with fetch to a mail service
    // You'll need to configure this with your actual email service (SendGrid, Resend, etc.)

    const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL || "info@olimpiarestoration.com"

    // Example using Resend (you'll need to add RESEND_API_KEY to your env vars)
    if (process.env.RESEND_API_KEY) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "Olimpia Website <noreply@olimpiarestoration.com>",
          to: [NOTIFICATION_EMAIL],
          subject: `🚨 New ${data.urgency} Assessment Request - ${data.firstName} ${data.lastName}`,
          text: emailContent,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to send email")
      }
    } else {
      // Log to console if no email service configured
      console.log("[v0] Intake form submission:", emailContent)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[v0] Error processing intake form:", error)
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 })
  }
}
