'use server';
/**
 * @fileOverview A LLM explanation summarization AI agent.
 *
 * - llmSummaryGenerator - A function that handles the summarization process.
 * - LLMSummaryGeneratorInput - The input type for the llmSummaryGenerator function.
 * - LLMSummaryGeneratorOutput - The return type for the llmSummaryGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LLMSummaryGeneratorInputSchema = z.object({
  llmExplanation: z
    .string()
    .describe(
      'The full text explanation of LLMs to be summarized.'
    ),
});
export type LLMSummaryGeneratorInput = z.infer<typeof LLMSummaryGeneratorInputSchema>;

const LLMSummaryGeneratorOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the LLM explanation.'),
});
export type LLMSummaryGeneratorOutput = z.infer<typeof LLMSummaryGeneratorOutputSchema>;

export async function llmSummaryGenerator(input: LLMSummaryGeneratorInput): Promise<LLMSummaryGeneratorOutput> {
  return llmSummaryGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'llmSummaryGeneratorPrompt',
  input: {schema: LLMSummaryGeneratorInputSchema},
  output: {schema: LLMSummaryGeneratorOutputSchema},
  prompt: `You are an expert AI assistant specializing in summarizing complex technical explanations into concise and easy-to-understand summaries for non-technical audiences.

  Summarize the following LLM explanation in one short paragraph. Focus on the core concepts and avoid technical jargon where possible.

  LLM Explanation: {{{llmExplanation}}}`,
});

const llmSummaryGeneratorFlow = ai.defineFlow(
  {
    name: 'llmSummaryGeneratorFlow',
    inputSchema: LLMSummaryGeneratorInputSchema,
    outputSchema: LLMSummaryGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
