import { streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

const nvidia = createOpenAI({
  baseURL: 'https://integrate.api.nvidia.com/v1',
  apiKey: process.env.NVIDIA_API_KEY,
})

async function test() {
  try {
    console.log("Calling streamText...");
    const result = await streamText({
      model: nvidia('nvidia/nemotron-3-ultra-550b-a55b'),
      messages: [
        { role: 'user', content: 'hello' }
      ],
      maxTokens: 10,
    });
    
    console.log("Reading stream...");
    for await (const chunk of result.textStream) {
      process.stdout.write(chunk);
    }
    console.log("\nDone!");
  } catch (e) {
    console.error("Stream Error:", e);
  }
}

test();
