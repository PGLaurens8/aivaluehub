'use server';

/**
 * @fileOverview AI news feed flow that generates up-to-date AI news snippets.
 *
 * - generateAiNews - A function that generates AI news snippets.
 * - AiNewsOutput - The return type for the generateAiNews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiNewsOutputSchema = z.object({
  newsItems: z.array(
    z.object({
      title: z.string().describe('The title of the news item.'),
      snippet: z.string().describe('A short summary of the news item.'),
    })
  ).describe('An array of AI news items.'),
});

export type AiNewsOutput = z.infer<typeof AiNewsOutputSchema>;

export async function generateAiNews(): Promise<AiNewsOutput> {
  return aiNewsFlow();
}

const prompt = ai.definePrompt({
  name: 'aiNewsPrompt',
  output: {schema: AiNewsOutputSchema},
  prompt: `You are an AI news aggregator. Generate a list of recent AI news items, with a title and a short summary for each.

      Format the output as a JSON object with a "newsItems" array. Each object in the array should have a "title" and a "snippet" field.

      Do not include any introductory or concluding remarks.
      `,
});

const aiNewsFlow = ai.defineFlow({
  name: 'aiNewsFlow',
  outputSchema: AiNewsOutputSchema,
}, async () => {
  const {output} = await prompt({});
  return output!;
});
