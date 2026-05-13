import Header from '../sections/Header';
import Hero from '../sections/Hero';
import FeaturesSection from '../sections/FeaturesSection';
import PropertiesSection from '../sections/PropertiesSection';
import MarketInsights from '../sections/MarketInsights';
import WhyChooseUs from '../sections/WhyChooseUs';
import TeamSection from '../sections/TeamSection';
import InvestmentCalculatorSection from '../sections/InvestmentCalculatorSection';
import FAQSection from '../sections/FAQSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import SubscribeSection from '../sections/SubscribeSection';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <section className="padding">
        <FeaturesSection />
      </section>
      <section className="padding">
        <PropertiesSection />
      </section>
      <MarketInsights />
      <WhyChooseUs />
      <section className="padding">
        <TeamSection />
      </section>
      <InvestmentCalculatorSection />
      <FAQSection />
      <section className="padding">
        <TestimonialsSection />
      </section>
      <section className="w-full py-16 padding-x padding-t">
        <SubscribeSection />
      </section>
      <Contact />
    </main>
  );
};

export default Home;
