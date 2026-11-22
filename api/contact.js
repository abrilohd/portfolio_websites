export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    let body = req.body
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body)
      } catch (e) {
        // fallback to body as is
      }
    }

    const { name, email, message } = body || {}

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, and message are all required.',
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Please provide a valid email address.',
      })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error('RESEND_API_KEY is missing from environment variables.')
      return res.status(500).json({
        success: false,
        error: 'Email service configuration error.',
      })
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: ['abrsh067@gmail.com'],
        reply_to: email.trim(),
        subject: `New Portfolio Message from ${name.trim()}`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #0D3164; padding-bottom: 14px; margin-bottom: 20px;">
              <h2 style="color: #0D3164; margin: 0; font-size: 20px; font-weight: 700;">New Portfolio Message</h2>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 80px;"><strong>From:</strong></td>
                <td style="padding: 6px 0; font-size: 14px; color: #1e293b; font-weight: 600;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Email:</strong></td>
                <td style="padding: 6px 0; font-size: 14px; color: #1e293b;">
                  <a href="mailto:${email.trim()}" style="color: #1967B2; text-decoration: none; font-weight: 500;">
                    ${email.trim()}
                  </a>
                </td>
              </tr>
            </table>

            <div style="margin: 20px 0; padding: 16px; background-color: #f8fafc; border-left: 4px solid #F5C518; border-radius: 6px;">
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message.trim()}</p>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
              Submitted from Abrham Gebremedhin's Portfolio website, Reply directly to this email to respond to ${name.trim()}.
            </p>
          </div>
        `,
        text: `New Portfolio Message\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}\n\nReply directly to this email to respond.`,
      }),
    })

    const data = await resendResponse.json()

    if (!resendResponse.ok) {
      console.error('Resend API returned error:', data)
      return res.status(resendResponse.status).json({
        success: false,
        error: data.message || 'Failed to deliver message via Resend.',
      })
    }

    return res.status(200).json({
      success: true,
      id: data.id,
      message: 'Message sent successfully!',
    })
  } catch (error) {
    console.error('Error handling contact form request:', error)
    return res.status(500).json({
      success: false,
      error: 'An internal error occurred while processing your request.',
    })
  }
}
