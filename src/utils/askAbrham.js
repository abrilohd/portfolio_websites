import { aiContext } from '../data/identity'

export const SUGGESTED_QUESTIONS = [
  "What makes Abrham different from other engineers?",
  "What AI systems has he built?",
  "Is he available for remote work?",
  "What is his strongest technical skill?",
  "What is he currently learning?",
  "What kind of roles is he targeting?",
]

export async function askAbrham(question, onChunk, onDone, onError) {
  const apiKey = process.env.REACT_APP_ANTHROPIC_API_KEY

  if (!apiKey || apiKey === 'your_api_key_here') {
    onError('API key not configured. Please add REACT_APP_ANTHROPIC_API_KEY to your .env file.')
    return
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4',
        max_tokens: 400,
        system: aiContext,
        messages: [
          {
            role: 'user',
            content: question,
          },
        ],
        stream: true,
      }),
    })

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`)
    }

    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6)
          if (data === '[DONE]') continue

          try {
            const parsed = JSON.parse(data)
            if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
              onChunk(parsed.delta.text)
            }
          } catch (e) {
            // Skip invalid JSON
          }
        }
      }
    }

    onDone()
  } catch (err) {
    console.error('Ask Abrham error:', err)
    onError(
      err?.message?.includes('API key') || err?.message?.includes('401')
        ? 'API key not configured or invalid. Please check your .env file.'
        : 'Something went wrong. Please try again or contact Abrham directly.'
    )
  }
}
