import { generateObject } from 'ai'
import { z } from 'zod'
import { google } from '@ai-sdk/google';




export const sentimentSchema = z.object({
    sentiment: z.enum(['positive', 'negative', 'neutral']),
    confidence: z.number().min(0).max(1),
    explanation: z.string(),
    keyPhrases: z.array(z.string()),
    metadata: z.object({
        modelUsed: z.string(),
        language: z.string(),
    }).optional(),
})

// Request schema for the API endpoint
const requestSchema = z.object({
    text: z.string().min(1),
    maxKeyPhrases: z.number().optional().default(5),
    language: z.enum(['en', 'fa']).default('en'),
})

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const { text, maxKeyPhrases, language } = requestSchema.parse(body)

        const { object } = await generateObject({
            model: google('gemini-2.0-flash'),
            schema: sentimentSchema,
            system: `Your task is to analyze the sentiment of the provided text and provide a detailed analysis. You must:
1. Determine the overall sentiment (positive, negative, or neutral)
2. Assign a confidence score between 0-1 for your assessment
3. Write a brief explanation justifying your sentiment analysis
4. Extract up to ${maxKeyPhrases} key phrases that were most influential in your analysis
for persian text always return your explanation in persian
Language: ${language}`,
            prompt: text,
            temperature: 0.7,
            maxTokens: 1000,
        })

        // Add metadata
        object.metadata = {
            modelUsed: 'gemini-2.0-flash',
            language: language,
        }

        return Response.json(object)
    } catch (error) {
        console.error('Sentiment analysis error:', error)
        return new Response(
            JSON.stringify({
                error: 'Failed to analyze sentiment',
                details: error instanceof Error ? error.message : 'Unknown error'
            }),
            {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            }
        )
    }
}