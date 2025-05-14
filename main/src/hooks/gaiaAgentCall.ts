import OpenAI from 'openai';

const client = new OpenAI({
  baseURL: 'https://llama70b.gaia.domains/v1',
  apiKey: 'gaia-YTkyZmZiYTctNzc5NC00ODM3LTg2YmYtNDAzODM4YzBlYmUy-RKHzasye4oGv8eq4',
});

export async function callOpenAI(): Promise<void> {
  try {
    const response = await client.chat.completions.create({
      model: 'llama70b',
      messages: [
        { role: 'system', content: 'You are a strategic reasoner.' },
        { role: 'user', content: 'What is the purpose of life?' },
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    console.log(response.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}
