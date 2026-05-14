import {
  FaTrophy,
  FaUsers,
  FaGlobeAmericas,
  FaShieldAlt,
} from 'react-icons/fa';
import NumberTicker from '../components/ui/NumberTicker';

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Award-Winning Service',
      description:
        'Recognized internationally for excellence in luxury real estate, with multiple industry awards and accolades.',
    },
    {
      id: 2,
      icon: <FaUsers className="w-8 h-8" />,
      title: 'Expert Team',
      description:
        'Highly trained professionals with over 20 years of combined experience in luxury property markets.',
    },
    {
      id: 3,
      icon: <FaGlobeAmericas className="w-8 h-8" />,
      title: 'Global Network',
      description:
        'Access to exclusive properties worldwide with partnerships in over 50 countries and premium locations.',
    },
    {
      id: 4,
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: 'Secure & Confidential',
      description:
        'Your privacy and security are paramount. We maintain the highest standards of discretion and protection.',
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-ghost"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-3xl mx-auto">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4 letter-spacing-wide">
            Why We Stand Out
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-8 leading-tight">
            Why Choose Luxury Indoor Estate?
          </h2>
          <div className="h-2"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            We combine decades of expertise with cutting-edge technology to
            deliver unparalleled service in the luxury real estate market. Our
            commitment to excellence sets us apart from the competition.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-16 sm:mb-20 md:mb-28 lg:mb-32">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col items-center p-8 sm:p-10 lg:p-12 text-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group h-full"
            >
              <div className="mb-8 p-6 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 text-secondary">
                {reason.icon}
              </div>
              <h3 className="mb-5 text-lg font-bold text-gray-900 tracking-tight leading-snug">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-12 sm:p-16 md:p-20 lg:p-24">
          <div className="grid grid-cols-1 gap-16 sm:gap-20 sm:grid-cols-3">
            <div className="text-center flex flex-col items-center">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
                <NumberTicker value="99%" />
              </p>
              <p className="text-gray-600 font-semibold text-base sm:text-lg">
                Client Satisfaction
              </p>
            </div>
            <div className="text-center flex flex-col items-center border-t sm:border-t-0 sm:border-l border-gray-200 pt-16 sm:pt-0 sm:pl-16">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
                <NumberTicker value="500+" />
              </p>
              <p className="text-gray-600 font-semibold text-base sm:text-lg">
                Premium Properties Sold
              </p>
            </div>
            <div className="text-center flex flex-col items-center border-t sm:border-t-0 sm:border-l border-gray-200 pt-16 sm:pt-0 sm:pl-16">
              <p className="text-5xl sm:text-6xl lg:text-7xl font-bold text-secondary mb-6 leading-tight">
                <NumberTicker value="20+" />
              </p>
              <p className="text-gray-600 font-semibold text-base sm:text-lg">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
