import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-gray-300 bg-gray-900">
      {/* Main Footer Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="mb-6 text-xl font-bold text-white tracking-tight">
              Luxury Estate
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Your gateway to premium properties and luxury living. Discover
              exclusive homes designed for the finest lifestyle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#properties"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-secondary transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Email: info@luxuryestate.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>123 Luxury Ave, Premium City, PC 12345</li>
              <li>Mon-Fri 9AM-6PM EST</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-3 rounded-lg bg-gray-800 text-gray-400 hover:bg-secondary hover:text-gray-900 transition-all duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-800" />

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between text-xs sm:text-sm md:flex-row gap-6">
          <p className="text-gray-400">
            &copy; {currentYear} Luxury Estate. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-secondary transition-colors duration-300"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
