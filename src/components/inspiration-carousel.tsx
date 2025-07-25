import { aiData } from "@/lib/data";
import { Bot } from "lucide-react";

export default function InspirationCarousel() {
  const repeatedQuotes = [...aiData.quotes, ...aiData.quotes];

  return (
    <section className="py-20 lg:py-24 bg-card border-y overflow-hidden">
      <div className="relative">
        <div className="flex scrolling-quotes">
          {repeatedQuotes.map((quote, index) => (
            <div key={index} className="flex-shrink-0 w-max mx-8 flex items-center gap-4">
              <Bot className="h-8 w-8 text-primary" />
              <blockquote className="text-lg text-muted-foreground italic">
                "{quote.text}"
                <footer className="mt-2 text-sm text-foreground/80 not-italic">- {quote.author}</footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
