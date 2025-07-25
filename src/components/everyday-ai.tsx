import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { aiData } from "@/lib/data";
import { BotMessageSquare } from "lucide-react";

export default function EverydayAi() {
    return (
        <section id="everyday-ai" className="py-16 lg:py-20 bg-card">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">
                    Everyday AI: Nifty Uses for GenAI
                </h2>
                <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
                    Generative AI isn't just for complex problems. Here are some practical ways anyone can use these tools to be more creative and productive.
                </p>

                <div className="mt-12">
                    <Accordion type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {aiData.everydayAi.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg bg-background shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 border-primary/20">
                                <AccordionTrigger className="p-6 text-left hover:no-underline">
                                    <span className="flex items-center gap-4">
                                        <BotMessageSquare className="h-6 w-6 text-primary shrink-0"/>
                                        <span className="font-headline text-lg">{item.title}</span>
                                    </span>
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-6">
                                    <p className="text-muted-foreground">{item.content}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
