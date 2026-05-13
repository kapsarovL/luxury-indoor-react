import {
  FaTrophy,
  FaUsers,
  FaGlobeAmericas,
  FaShieldAlt,
} from 'react-icons/fa';

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
    <section id="why-choose-us" className="py-12 sm:py-16 md:py-20 bg-ghost">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Why We Stand Out
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Why Choose Luxury Indoor Estate?
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            We combine decades of expertise with cutting-edge technology to
            deliver unparalleled service in the luxury real estate market. Our
            commitment to excellence sets us apart from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="flex flex-col items-center p-8 text-center bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 text-secondary">
                {reason.icon}
              </div>
              <h3 className="mb-4 text-lg font-bold text-gray-900 tracking-tight">
                {reason.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                99%
              </p>
              <p className="text-gray-600 font-semibold">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                500+
              </p>
              <p className="text-gray-600 font-semibold">
                Premium Properties Sold
              </p>
            </div>
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-secondary mb-2">
                20+
              </p>
              <p className="text-gray-600 font-semibold">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
