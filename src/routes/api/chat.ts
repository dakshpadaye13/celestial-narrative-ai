
import { streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

const ollama = createOpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: 'ollama', // Ollama doesn't require an API key
})

export async function handleChatApi(request: Request) {
  try {
    const { messages, birthDetails } = await request.json()

    const systemPrompt = `You are a mystical, wise, and highly knowledgeable Vedic Astrologer for AstroVeda. 
Your purpose is to interpret birth charts and guide the user.
The user's birth details:
- Name: ${birthDetails?.name || 'Unknown'}
- Date of Birth: ${birthDetails?.dob || 'Unknown'}
- Time of Birth: ${birthDetails?.tob || 'Unknown'}
- Place of Birth: ${birthDetails?.pob || 'Unknown'}

Respond in a premium, elegant, and cosmic tone. Do not use generic AI speak. Respect the tradition of astrology. Keep your answers concise, deep, and insightful.`;

    const result = await streamText({
      model: ollama('llama3.1'),
      system: systemPrompt,
      messages: messages,
      maxTokens: 1000,
    })

    return result.toTextStreamResponse()
  } catch (e: any) {
    console.error(e);
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } })
  }
}
