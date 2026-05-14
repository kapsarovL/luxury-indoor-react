import Stats from '../components/ui/Stats';
import { FaKey, FaBuilding, FaShieldAlt, FaSmileBeam } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: (
      <FaKey className="mb-4 text-5xl text-secondary transition-colors duration-300" />
    ),
    title: 'Exclusive Listings',
    description:
      'Access to a curated selection of the most exclusive luxury properties in prime locations.',
  },
  {
    id: 2,
    icon: (
      <FaBuilding className="mb-4 text-5xl text-secondary transition-colors duration-300" />
    ),
    title: 'Architectural Masterpieces',
    description:
      'Featuring properties designed by renowned architects with unparalleled craftsmanship.',
  },
  {
    id: 3,
    icon: (
      <FaShieldAlt className="mb-4 text-5xl text-secondary transition-colors duration-300" />
    ),
    title: 'Secure Transactions',
    description:
      'Ensuring safe and secure transactions with professional guidance at every step.',
  },
  {
    id: 4,
    icon: (
      <FaSmileBeam className="mb-4 text-5xl text-secondary transition-colors duration-300" />
    ),
    title: 'Personalized Service',
    description:
      'Dedicated agents providing personalized service to meet your unique real estate needs.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative bg-white">
      <div className="container px-4 mx-auto py-16 sm:py-24 md:py-32 lg:py-40">
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center p-8 sm:p-10 lg:p-12 text-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group h-full"
            >
              <div className="mb-8 p-6 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="mb-5 text-lg md:text-xl font-bold text-gray-900 tracking-tight leading-snug">
                {feature.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Divider with breathing space */}
        <div className="border-t border-gray-200 pt-16 sm:pt-20 md:pt-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                Tailored Solutions for Buying, Selling, and Investing
              </h2>
              <div className="space-y-7">
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                  We offer a range of bespoke services designed to meet the
                  unique needs of luxury property buyers, sellers, and
                  investors. From global market insights to discreet, off-market
                  listings, our team provides exceptional service at every
                  stage.
                </p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  Our in-depth knowledge of the world&apos;s most exclusive
                  properties ensures that your next investment is handled with
                  expertise and care.
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
