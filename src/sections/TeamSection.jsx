import { FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const TeamSection = () => {
  const agents = [
    {
      id: 1,
      name: 'Victoria Sterling',
      role: 'Senior Luxury Consultant',
      specialty: 'High-End Properties',
      bio: 'Specializes in ultra-luxury estates with 15+ years of experience in premium market segments.',
      image: '/src/assets/images/team/agent-1.jpg',
      contact: {
        email: 'victoria@luxuryestate.com',
        phone: '+1 (555) 123-4001',
      },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 2,
      name: 'Alexander Knight',
      role: 'Investment Specialist',
      specialty: 'Portfolio Management',
      bio: 'Expert in luxury real estate investments with a proven track record of exceptional returns.',
      image: '/src/assets/images/team/agent-2.jpg',
      contact: {
        email: 'alexander@luxuryestate.com',
        phone: '+1 (555) 123-4002',
      },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 3,
      name: 'Sophia Laurent',
      role: 'Property Manager',
      specialty: 'Residential & Commercial',
      bio: 'Comprehensive property management expertise ensuring maximum value and client satisfaction.',
      image: '/src/assets/images/team/agent-3.jpg',
      contact: { email: 'sophia@luxuryestate.com', phone: '+1 (555) 123-4003' },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 4,
      name: 'Marcus Windsor',
      role: 'Market Analyst',
      specialty: 'Market Intelligence',
      bio: 'Data-driven insights into luxury real estate trends and investment opportunities worldwide.',
      image: '/src/assets/images/team/agent-4.jpg',
      contact: { email: 'marcus@luxuryestate.com', phone: '+1 (555) 123-4004' },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Meet the Professionals
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Our Expert Team
          </h2>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-600 leading-relaxed">
            Dedicated professionals committed to delivering exceptional service
            and achieving the best outcomes for every client in the luxury real
            estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Agent Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-200 to-gray-300">
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-6xl font-semibold">
                  {agent.name.charAt(0)}
                </div>
              </div>

              {/* Agent Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                    {agent.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                    {agent.role}
                  </p>
                </div>

                <p className="text-xs text-gray-600 italic">
                  {agent.specialty}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed">
                  {agent.bio}
                </p>

                {/* Contact Links */}
                <div className="space-y-2 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2">
                    <FaEnvelope className="text-secondary w-4 h-4" />
                    <a
                      href={`mailto:${agent.contact.email}`}
                      className="text-xs text-gray-600 hover:text-secondary transition-colors"
                    >
                      {agent.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhone className="text-secondary w-4 h-4" />
                    <a
                      href={`tel:${agent.contact.phone}`}
                      className="text-xs text-gray-600 hover:text-secondary transition-colors"
                    >
                      {agent.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={agent.social.linkedin}
                    aria-label="LinkedIn"
                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href={agent.social.twitter}
                    aria-label="Twitter"
                    className="p-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
                  >
                    <FaTwitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
