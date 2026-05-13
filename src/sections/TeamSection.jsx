import { FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

const TeamSection = () => {
  const agents = [
    {
      id: 1,
      name: 'Victoria',
      role: 'Client Relations Director',
      specialty: 'Client Service Excellence',
      bio: 'Dedicated to understanding client needs and delivering exceptional service throughout their journey.',
      image: new URL('../assets/images/personas/Victoria.png', import.meta.url)
        .href,
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
      name: 'Alexander',
      role: 'Lead Architect',
      specialty: 'Luxury Design',
      bio: 'Renowned luxury property designer with 15+ years of experience crafting sophisticated living spaces.',
      image: new URL('../assets/images/personas/Alexander.png', import.meta.url)
        .href,
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
      name: 'Sophia',
      role: 'Design Consultant',
      specialty: 'Sustainable Luxury',
      bio: 'Passionate about sustainable luxury living and personalized interior solutions for discerning clients.',
      image: new URL('../assets/images/personas/Sophia.png', import.meta.url)
        .href,
      contact: { email: 'sophia@luxuryestate.com', phone: '+1 (555) 123-4003' },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      id: 4,
      name: 'Marcus',
      role: 'Interior Specialist',
      specialty: 'Contemporary Design',
      bio: 'Expert in contemporary design trends and timeless elegance, transforming visions into reality.',
      image: new URL('../assets/images/personas/Marcus.png', import.meta.url)
        .href,
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
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform
                    duration-300 group-hover:scale-105"
                  loading="lazy"
                />
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
