import { handleChatApi } from './src/routes/api/chat.ts';

async function test() {
  const req = new Request('http://localhost/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      messages: [{ role: 'user', content: 'hello' }],
      birthDetails: {}
    })
  });

  try {
    const res = await handleChatApi(req);
    console.log("Status:", res.status);
    
    if (!res.body) {
      console.log("No body returned!");
      return;
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      console.log("CHUNK:", decoder.decode(value));
    }
  } catch (e) {
    console.error("Caught error:", e);
  }
}

test();
