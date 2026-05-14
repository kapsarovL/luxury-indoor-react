import { lazy, Suspense } from 'react';
import Header from '../sections/Header';
import Hero from '../sections/Hero';
import FeaturesSection from '../sections/FeaturesSection';

const PropertiesSection = lazy(() => import('../sections/PropertiesSection'));
const MarketInsights = lazy(() => import('../sections/MarketInsights'));
const WhyChooseUs = lazy(() => import('../sections/WhyChooseUs'));
const TeamSection = lazy(() => import('../sections/TeamSection'));
const InvestmentCalculatorSection = lazy(() => import('../sections/InvestmentCalculatorSection'));
const FAQSection = lazy(() => import('../sections/FAQSection'));
const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'));
const SubscribeSection = lazy(() => import('../sections/SubscribeSection'));
const Contact = lazy(() => import('../sections/Contact'));

const SectionFallback = () => (
  <div className="w-full h-64 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded h-full w-full"></div>
  </div>
);

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <section className="padding">
        <FeaturesSection />
      </section>
      <Suspense fallback={<SectionFallback />}>
        <section className="padding">
          <PropertiesSection />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <MarketInsights />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <WhyChooseUs />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section className="padding">
          <TeamSection />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <InvestmentCalculatorSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section className="padding">
          <TestimonialsSection />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <section className="w-full py-16 padding-x padding-t">
          <SubscribeSection />
        </section>
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </main>
  );
};

export default Home;
