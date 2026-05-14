import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Button from '../components/common/Button';
import { useToast } from '../hooks/useToast';
import heroBg from '../assets/images/hero-bg.webp';

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { success } = useToast();

  const handleExploreClick = () => {
    success('Scrolling to properties...');
    const propertiesSection = document.getElementById('properties');
    if (propertiesSection) {
      propertiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url('${heroBg}')` }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 py-12">
        <div className="text-center space-y-3 sm:space-y-4 lg:space-y-6 max-w-4xl">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] fade-in letter-spacing-wide">
            Premium Luxury Real Estate
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-center text-white leading-tight fade-in">
            Welcome to{' '}
            <span className="text-secondary">Luxury Indoor Estate</span>
          </h1>
          <div className="h-2"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 fade-in tracking-wide">
            <span className="text-secondary">Discover Your</span> Dream Home
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 fade-in leading-relaxed">
            Browse through our exclusive collection of luxury estates with
            personalized investment consultations and premium property services.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <Button
            variant="primary"
            showArrow
            onClick={handleExploreClick}
            style={{
              transform: isInView ? 'translateY(0)' : 'translateY(200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Explore Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
