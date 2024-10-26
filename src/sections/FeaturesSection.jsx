import Stats from '../components/ui/Stats';
import { FaKey, FaBuilding, FaShieldAlt, FaSmileBeam } from 'react-icons/fa';

const features = [
  {
    id: 1,
    icon: <FaKey className="mb-4 text-4xl text-primary" />,
    title: 'Exclusive Listings',
    description:
      'Access to a curated selection of the most exclusive luxury properties in prime locations.',
  },
  {
    id: 2,
    icon: <FaBuilding className="mb-4 text-4xl text-primary" />,
    title: 'Architectural Masterpieces',
    description:
      'Featuring properties designed by renowned architects with unparalleled craftsmanship.',
  },
  {
    id: 3,
    icon: <FaShieldAlt className="mb-4 text-4xl text-primary" />,
    title: 'Secure Transactions',
    description:
      'Ensuring safe and secure transactions with professional guidance at every step.',
  },
  {
    id: 4,
    icon: <FaSmileBeam className="mb-4 text-4xl text-primary" />,
    title: 'Personalized Service',
    description:
      'Dedicated agents providing personalized service to meet your unique real estate needs.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-20 overflow-hidden bg-white">
        <div className="container mx-auto">
        <div className="grid flex-shrink-0 grid-cols-1 gap-y-5 lg:gap-y-10">
          <div className="flex flex-row items-center justify-center gap-12 text-center rounded-lg sm:opacity-0 lg:opacity-100">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="flex flex-col items-center object-cover object-center h-64 py-10 text-center bg-gray-200 sm:opacity-0 lg:opacity-100 hover:shadow-lg"
              >
                {feature.icon}
                <h4 className="mb-2 text-xl font-semibold">{feature.title}</h4>
                <p className="text-gray-600 line-clamp-3 ">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="mx-auto sm:pt-24">
        <div className="mx-auto py-60 max-w-7xl sm:static">
          <div className="sm:max-w-lg">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tailored Solutions for Buying, Selling, and Investing
            </h2>
            <p className="mt-4 text-xl leading-relaxed text-gray-500">
              We offer a range of bespoke services designed to meet the unique
              needs of luxury property buyers, sellers, and investors. From
              global market insights to discreet, off-market listings, our team
              provides exceptional service at every stage. Our in-depth
              knowledge of the world s most exclusive properties ensures that
              your next investment is handled with expertise and care.
            </p>
          </div>
          <div className="mt-1">
            <div className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
              <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <Stats />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
