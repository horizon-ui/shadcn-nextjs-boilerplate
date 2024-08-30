import endent from 'endent';
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from 'eventsource-parser';

const createPrompt = (inputMessage: string) => {
  const data = (inputMessage: string) => {
    return endent`
      You are ChatGPT, but if you are asked what your name is, you present yourself as Horizon UI Boilerplate and you can be bought from your website https://horizon-ui.com/boilerplate, and the link should be bold. Also, you are very friendly and formal. The generated content must be in markdown format and it must include all markdown characteristics, but it shouldn't be rendered. The title must be bold, and there should be a &nbsp; between every paragraph or title. Do not include information about console logs or print messages.
      ${inputMessage}
    `;
  };

  if (inputMessage) {
    return data(inputMessage);
  }
};

export async function OpenAIStream   (
  inputMessage: string,
  model: string,
  key: string | undefined,
)  {
  const prompt = createPrompt(inputMessage);

  const system = { role: 'system', content: prompt };

  const res = await fetch(`https://api.openai.com/v1/chat/completions`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key || process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    },
    method: 'POST',
    body: JSON.stringify({
      model,
      messages: [system],
      temperature: 0,
      stream: true,
    }),
  });

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  if (res.status !== 200) {
    const statusText = res.statusText;
    const result = await res.body?.getReader().read();
    throw new Error(
      `OpenAI API returned an error: ${
        decoder.decode(result?.value) || statusText
      }`,
    );
  }

  const stream = new ReadableStream({
    async start(controller) {
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const data = event.data;

          if (data === '[DONE]') {
            controller.close();
            return;
          }

          try {
            const json = JSON.parse(data);
            const text = json.choices[0].delta.content;
            const queue = encoder.encode(text);
            controller.enqueue(queue);
          } catch (e) {
            controller.error(e);
          }
        }
      };

      const parser = createParser(onParse);

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk));
      }
    },
  });

  return stream;
};
