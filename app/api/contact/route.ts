import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, organization, interest, message, honeypot } = body

    // Check honeypot field for spam protection
    if (honeypot) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }

    // Validate required fields
    if (!name || !email || !interest || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Check for environment variables for email service
    const formspreeId = process.env.FORMSPREE_ID
    const resendApiKey = process.env.RESEND_API_KEY

    if (formspreeId) {
      // Use Formspree
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          organization,
          interest,
          message,
        }),
      })

      if (response.ok) {
        return NextResponse.json({ success: true })
      } else {
        throw new Error('Formspree submission failed')
      }
    } else if (resendApiKey) {
      // Use Resend - this will be configured in production
      // For now, return error to trigger mailto fallback
      return NextResponse.json({ error: 'Resend not configured in development' }, { status: 500 })
    } else {
      // No email service configured, return error to trigger mailto fallback
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
