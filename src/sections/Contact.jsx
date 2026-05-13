import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = () => {
  const contactInfo = [
    {
      icon: (
        <FaPhone className="text-secondary text-3xl transition-colors duration-300" />
      ),
      label: 'Phone',
      value: '+1 (555) 123-4567',
    },
    {
      icon: (
        <FaEnvelope className="text-secondary text-3xl transition-colors duration-300" />
      ),
      label: 'Email',
      value: 'info@luxuryestate.com',
    },
    {
      icon: (
        <FaMapMarkerAlt className="text-secondary text-3xl transition-colors duration-300" />
      ),
      label: 'Address',
      value: '123 Luxury Ave, Premium City, PC 12345',
    },
    {
      icon: (
        <FaClock className="text-secondary text-3xl transition-colors duration-300" />
      ),
      label: 'Business Hours',
      value: 'Mon-Fri 9AM-6PM EST',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Have questions about luxury properties? Our expert team is ready to
            assist you. Contact us today to explore exclusive listings and
            investment opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="mb-6 p-4 rounded-xl bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 tracking-tight">
                {info.label}
              </h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {info.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
