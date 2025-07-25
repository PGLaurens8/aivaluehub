import { aiData } from "@/lib/data";
import LlmSummary from "./llm-summary";

export default function LlmExplanation() {
    const { analogy } = aiData.llmExplanation;

    return (
        <section id="understanding-llms" className="py-16 lg:py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">
                    Understanding Large Language Models
                </h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    Demystify the technology behind intelligent AI with a simple analogy.
                </p>

                <div className="mt-12 prose-lg max-w-none text-foreground/80">
                    <h3 className="text-2xl font-bold font-headline text-foreground mb-4">{analogy.title}</h3>
                    {analogy.paragraphs.map((p, i) => <p key={i} className="mb-4 leading-relaxed">{p}</p>)}
                    <ul className="list-disc list-inside space-y-2 mb-4">
                        {analogy.points.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                    
                    <LlmSummary />
                </div>
            </div>
        </section>
    );
}
