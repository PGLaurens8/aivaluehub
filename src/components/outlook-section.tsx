import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { aiData } from "@/lib/data";
import { Lightbulb } from "lucide-react";

export default function OutlookSection() {
    return (
        <section id="outlook" className="py-20 lg:py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">
                    Key Insights & Future Outlook
                </h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    The rapid adoption of AI is not just about technology; it's about fundamental shifts in business strategy, workforce dynamics, and creative processes.
                </p>

                <Accordion type="single" collapsible className="w-full mt-12 space-y-4">
                    {aiData.insights.map((insight, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-card shadow-sm">
                            <AccordionTrigger className="p-6 text-left hover:no-underline">
                                <span className="flex items-center gap-4">
                                    <Lightbulb className="h-6 w-6 text-primary shrink-0"/>
                                    <span className="font-headline text-lg">{insight.title}</span>
                                </span>
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                                <p className="text-muted-foreground">{insight.content}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
