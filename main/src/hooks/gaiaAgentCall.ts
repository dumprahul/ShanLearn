import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://llama70b.gaia.domains/v1',
  apiKey: 'gaia-YTkyZmZiYTctNzc5NC00ODM3LTg2YmYtNDAzODM4YzBlYmUy-RKHzasye4oGv8eq4',
  dangerouslyAllowBrowser: true 
});

export async function callOpenAI(messages: { role: 'system' | 'user' | 'assistant'; content: string }[]): Promise<string> {
  try {
    const response = await client.chat.completions.create({
      model: 'llama70b',
      messages,
      temperature: 0.7,
      max_tokens: 500,
    });
    return response.choices[0].message.content ?? '';
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
