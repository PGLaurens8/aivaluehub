import { generateAiNews } from '@/ai/flows/ai-news-feed';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export default async function AiNewsFeed() {
    const { newsItems } = await generateAiNews();

    return (
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {newsItems.length > 0 ? newsItems.map((item, index) => (
                <Card key={index} className="border-primary/20 shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{item.snippet}</p>
                    </CardContent>
                </Card>
            )) : (
                <div className="col-span-full text-center text-muted-foreground py-12">
                    <p>Could not fetch AI news at this moment. Please check back later.</p>
                </div>
            )}
        </div>
    );
}
