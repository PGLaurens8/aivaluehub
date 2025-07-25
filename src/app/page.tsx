import { Suspense } from 'react';
import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import ValueMatrix from '@/components/value-matrix';
import LlmExplanation from '@/components/llm-explanation';
import EcosystemExplorer from '@/components/ecosystem-explorer';
import ImpactCharts from '@/components/impact-charts';
import AiNewsFeed from '@/components/ai-news-feed';
import AiNewsFeedLoader from '@/components/ai-news-feed-loader';
import OutlookSection from '@/components/outlook-section';
import Footer from '@/components/footer';
import LlmDetails from '@/components/llm-details';
import EverydayAi from '@/components/everyday-ai';
import InspirationCarousel from '@/components/inspiration-carousel';

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ValueMatrix />
        <ImpactCharts />
        <LlmExplanation />
        <EverydayAi />
        <EcosystemExplorer />
        <OutlookSection />
        <section id="news-updates" className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-bold text-center font-headline text-foreground">AI News & Updates</h2>
            <p className="mt-4 text-lg text-center max-w-3xl mx-auto text-muted-foreground">
              Stay informed with the latest developments and breakthroughs in the world of AI.
            </p>
            <Suspense fallback={<AiNewsFeedLoader />}>
              <AiNewsFeed />
            </Suspense>
          </div>
        </section>
        <LlmDetails />
        <InspirationCarousel />
      </main>
      <Footer />
    </div>
  );
}
