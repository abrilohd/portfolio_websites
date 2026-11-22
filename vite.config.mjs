import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

function resendDevPlugin(apiKey) {
  return {
    name: 'resend-dev-middleware',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

        if (req.method === 'OPTIONS') {
          res.statusCode = 200
          res.end()
          return
        }

        if (req.method !== 'POST') {
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ success: false, error: 'Method not allowed' }))
          return
        }

        let bodyStr = ''
        req.on('data', (chunk) => {
          bodyStr += chunk
        })

        req.on('end', async () => {
          res.setHeader('Content-Type', 'application/json')
          try {
            const body = JSON.parse(bodyStr || '{}')
            const { name, email, message } = body

            if (!name || !email || !message) {
              res.statusCode = 400
              res.end(JSON.stringify({ success: false, error: 'Name, email, and message are required.' }))
              return
            }

            const currentKey = apiKey || process.env.RESEND_API_KEY
            if (!currentKey) {
              res.statusCode = 500
              res.end(JSON.stringify({ success: false, error: 'RESEND_API_KEY is not configured in .env' }))
              return
            }

            const resendResponse = await fetch('https://api.resend.com/emails', {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${currentKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                from: 'Portfolio Contact <onboarding@resend.dev>',
                to: ['abrsh067@gmail.com'],
                reply_to: email.trim(),
                subject: `New Portfolio Message from ${name.trim()}`,
                html: `
                  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
                    <div style="border-bottom: 2px solid #0D3164; padding-bottom: 14px; margin-bottom: 20px;">
                      <h2 style="color: #0D3164; margin: 0; font-size: 20px;">New Message from Portfolio</h2>
                    </div>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b; width: 80px;"><strong>From:</strong></td>
                        <td style="padding: 6px 0; font-size: 14px; color: #1e293b; font-weight: 600;">${name.trim()}</td>
                      </tr>
                      <tr>
                        <td style="padding: 6px 0; font-size: 14px; color: #64748b;"><strong>Email:</strong></td>
                        <td style="padding: 6px 0; font-size: 14px; color: #1e293b;">
                          <a href="mailto:${email.trim()}" style="color: #1967B2; text-decoration: none;">${email.trim()}</a>
                        </td>
                      </tr>
                    </table>
                    <div style="margin: 20px 0; padding: 16px; background-color: #f8fafc; border-left: 4px solid #F5C518; border-radius: 6px;">
                      <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">${message.trim()}</p>
                    </div>
                    <p style="margin-top: 24px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
                      Sent via Abrham Gebremedhin Portfolio website, Reply directly to this email to respond to ${name.trim()}.
                    </p>
                  </div>
                `,
                text: `New Portfolio Message\n\nName: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`,
              }),
            })

            const data = await resendResponse.json()
            if (!resendResponse.ok) {
              res.statusCode = resendResponse.status
              res.end(JSON.stringify({ success: false, error: data.message || 'Failed to send email via Resend' }))
              return
            }

            res.statusCode = 200
            res.end(JSON.stringify({ success: true, id: data.id, message: 'Message sent successfully!' }))
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ success: false, error: err.message || 'Internal server error' }))
          }
        })
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react(), resendDevPlugin(env.RESEND_API_KEY)],
    define: {
      'process.env.REACT_APP_EMAILJS_SERVICE_ID': JSON.stringify(env.REACT_APP_EMAILJS_SERVICE_ID || ''),
      'process.env.REACT_APP_EMAILJS_TEMPLATE_ID': JSON.stringify(env.REACT_APP_EMAILJS_TEMPLATE_ID || ''),
      'process.env.REACT_APP_EMAILJS_PUBLIC_KEY': JSON.stringify(env.REACT_APP_EMAILJS_PUBLIC_KEY || ''),
      'process.env.REACT_APP_ANTHROPIC_API_KEY': JSON.stringify(env.REACT_APP_ANTHROPIC_API_KEY || ''),
      'process.env': {},
    },
    build: {
      outDir: 'build',
    },
    server: {
      port: 3000,
      open: true,
    },
  }
})
