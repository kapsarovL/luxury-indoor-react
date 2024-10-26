import Header from '../sections/Header';
import Hero from '../sections/Hero';
import FeaturesSection from '../sections/FeaturesSection';
import PropertiesSection from '../sections/PropertiesSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import SubscribeSection from '../sections/SubscribeSection';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <main className="relative">
      <section className="wide:padding-r padding-b"> 
      <Header />
      </section>
      <Hero />
      <section className="padding"> 
      <FeaturesSection />
      </section>
      <section className="padding">
      <PropertiesSection />
      </section>
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
