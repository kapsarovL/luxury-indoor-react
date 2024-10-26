
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Button from '../components/common/Button';
import PropTypes from 'prop-types';


const Hero = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="home" 
    ref={ref}
    className="relative h-screen py-20 text-center bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/src/assets/images/hero-bg.png')"}}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 ">
        <h1 className="px-4 font-serif text-4xl font-bold text-center text-white md:text-6xl fade-in">
          Welcome to{' '}
          <span className="text-secondary">Luxury Indoor Estate</span>
        </h1>
        <h2 className="text-3xl font-bold md:text-4xl md-4 text-slate-200 fade-in">
          <span className="text-secondary">Discover Your</span> Dream Home
        </h2>
        <p className="mb-8 text-lg text-slate-300 fade-in">
          Browse through our exclusive collection of luxury estates.
        </p>

        <div>
          <button
            style={{
              transform: isInView ? 'none' : 'translateX(-200px)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="py-3 text-white transition duration-300 ease-in-out transform rounded-md px-14 bg-primary hover:bg-primary-dark hover:-translate-y-1"
          >
            {children}
            Get Started
          </button>
          <Button />Learn More
        </div>
      </div>


    
    </section>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Hero;
