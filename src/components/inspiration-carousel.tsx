import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { aiData } from "@/lib/data";
import { Lightbulb } from "lucide-react";

export default function InspirationCarousel() {
  return (
    <section className="py-20 lg:py-24 bg-card border-y">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {aiData.quotes.map((quote, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                    <div className="p-6 bg-background rounded-lg h-full flex flex-col items-center text-center">
                        <Lightbulb className="h-8 w-8 text-primary mb-4" />
                        <blockquote className="text-base text-muted-foreground italic flex-grow">
                            "{quote.text}"
                        </blockquote>
                        <footer className="mt-4 text-sm text-foreground/80 not-italic font-semibold">- {quote.author}</footer>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
