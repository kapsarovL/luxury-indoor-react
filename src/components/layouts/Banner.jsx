import { XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative isolate flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-x-8 sm:justify-between overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-4 sm:px-8 sm:py-5">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          style={{
            clipPath:
              'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
          }}
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-primary/20 to-secondary/20 opacity-40"
        />
      </div>
      <div className="flex flex-col gap-y-1 sm:gap-y-2 sm:flex-1 min-w-0">
        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-white">
          <strong className="font-bold text-base sm:text-lg">
            Exclusive Offer
          </strong>
        </p>
        <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-200">
          Discover luxury properties with personalized investment consultations
        </p>
      </div>
      <a
        href="#properties"
        className="flex-shrink-0 rounded-lg bg-primary px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 whitespace-nowrap"
      >
        Browse <span className="hidden sm:inline">Properties</span>
        <span aria-hidden="true" className="hidden sm:inline">
          &rarr;
        </span>
      </a>
      <button
        type="button"
        onClick={handleCloseBanner}
        className="flex-shrink-0 p-2 rounded-lg hover:bg-white/10 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white cursor-pointer"
        aria-label="Dismiss banner"
      >
        <span className="sr-only">Dismiss</span>
        <XMarkIcon
          aria-hidden="true"
          className="w-5 h-5 text-gray-300 hover:text-white transition-colors duration-300"
        />
      </button>
    </div>
  );
};

export default Banner;
