import { FaLinkedinIn, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import VictoriaImg from '../assets/images/personas/Victoria.png';
import AlexanderImg from '../assets/images/personas/Alexander.png';
import SophiaImg from '../assets/images/personas/Sophia.png';
import MarcusImg from '../assets/images/personas/Marcus.png';

const TeamSection = () => {
  const agents = [
    {
      id: 1,
      name: 'Victoria',
      role: 'Client Relations Director',
      specialty: 'Client Service Excellence',
      bio: 'Dedicated to understanding client needs and delivering exceptional service throughout their journey.',
      image: VictoriaImg,
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
      image: AlexanderImg,
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
      image: SophiaImg,
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
      image: MarcusImg,
      contact: { email: 'marcus@luxuryestate.com', phone: '+1 (555) 123-4004' },
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ];

  return (
    <section id="team" className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-3xl mx-auto">
          <p className="text-secondary text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-4">
            Meet the Professionals
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
            Our Expert Team
          </h2>
          <div className="h-2"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Dedicated professionals committed to delivering exceptional service
            and achieving the best outcomes for every client in the luxury real
            estate market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full"
            >
              {/* Agent Image */}
              <div className="relative overflow-hidden h-72 bg-gradient-to-br from-gray-200 to-gray-300">
                <img
                  src={agent.image}
                  alt={agent.name}
                  className="w-full h-full object-cover transition-transform
                    duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Agent Info */}
              <div className="p-7 space-y-5 flex flex-col flex-grow">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 tracking-tight mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-secondary">
                    {agent.role}
                  </p>
                </div>

                <p className="text-xs text-gray-600 italic font-medium">
                  {agent.specialty}
                </p>

                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {agent.bio}
                </p>

                {/* Contact Links */}
                <div className="space-y-3 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-secondary w-4 h-4 flex-shrink-0" />
                    <a
                      href={`mailto:${agent.contact.email}`}
                      className="text-xs text-gray-600 hover:text-secondary transition-colors break-all"
                    >
                      {agent.contact.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-secondary w-4 h-4 flex-shrink-0" />
                    <a
                      href={`tel:${agent.contact.phone}`}
                      className="text-xs text-gray-600 hover:text-secondary transition-colors"
                    >
                      {agent.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-6">
                  <a
                    href={agent.social.linkedin}
                    aria-label="LinkedIn"
                    className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
                  >
                    <FaLinkedinIn className="w-4 h-4" />
                  </a>
                  <a
                    href={agent.social.twitter}
                    aria-label="Twitter"
                    className="p-3 rounded-lg bg-gray-100 text-gray-600 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
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
