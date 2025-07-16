import { aiData } from "@/lib/data";

export default function LlmDetails() {
    const { details } = aiData.llmExplanation;

    return (
        <section id="llm-details" className="py-20 lg:py-24 bg-card border-b">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="prose-lg max-w-none text-foreground/80">
                    <h3 className="text-2xl font-bold font-headline text-foreground mt-16 mb-4">{details.title}</h3>
                    <p className="mb-4 leading-relaxed">{details.intro}</p>
                    
                    {details.components.map((comp, i) => (
                        <div key={i} className="mt-8">
                            <h4 className="text-xl font-bold font-headline text-foreground mb-2">{comp.title}</h4>
                            <p className="mb-2 leading-relaxed">{comp.content}</p>
                            {comp.example && <p className="italic text-muted-foreground my-2 p-3 bg-muted rounded-md border"><span className="font-semibold font-code">Example:</span> <span className="font-code">{comp.example}</span></p>}
                            {comp.subContent && <p className="mb-2 leading-relaxed">{comp.subContent}</p>}
                            {comp.points && (
                                <>
                                {comp.pointsTitle && <p className="font-semibold mb-2">{comp.pointsTitle}</p>}
                                <ul className="list-disc list-inside space-y-2">
                                    {comp.points.map((p, j) => <li key={j}>{p}</li>)}
                                </ul>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
