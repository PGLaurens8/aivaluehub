"use client";

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { llmSummaryGenerator } from '@/ai/flows/llm-summary-generator';
import { fullLLMExplanationText } from '@/lib/data';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function LlmSummary() {
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleGenerateSummary = async () => {
        setIsLoading(true);
        setSummary('');
        try {
            const result = await llmSummaryGenerator({ llmExplanation: fullLLMExplanationText });
            if (result.summary) {
                setSummary(result.summary);
            } else {
                throw new Error("Failed to generate summary.");
            }
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Could not generate the summary. Please try again.",
                variant: "destructive",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="my-8 bg-primary/5 border-primary/20 shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 font-headline">
                    <Sparkles className="text-primary" />
                    Too Long; Didn't Read?
                </CardTitle>
                <CardDescription>
                    Click the button to get an AI-powered summary of the entire explanation.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleGenerateSummary} disabled={isLoading}>
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Generating...
                        </>
                    ) : (
                        "Generate Summary"
                    )}
                </Button>
                {summary && (
                     <div className="mt-4 p-4 bg-background rounded-md border animate-in fade-in-50">
                        <p className="text-foreground/90">{summary}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
