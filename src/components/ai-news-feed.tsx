import { generateAiNews } from '@/ai/flows/ai-news-feed';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import type { AiNewsOutput } from '@/ai/flows/ai-news-feed';

export default async function AiNewsFeed() {
    let newsItems: AiNewsOutput['newsItems'] = [];
    try {
        const result = await generateAiNews();
        newsItems = result.newsItems;
    } catch (error) {
        console.error("Failed to generate AI news:", error);
        // newsItems will remain an empty array, and the fallback UI will be shown.
    }

    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.length > 0 ? (
                newsItems.map((item, index) => (
                    <Card key={index} className="border-primary/20 shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-shadow duration-300">
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{item.snippet}</p>
                        </CardContent>
                    </Card>
                ))
            ) : (
                <div className="col-span-full text-center text-muted-foreground py-12">
                    <p>Could not fetch AI news at this moment. Please check back later.</p>
                </div>
            )}
        </div>
    );
}
