// src/components/Footer.jsx

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-gray-800">
      <div className="container px-4 mx-auto text-center">
        <div className="flex justify-center mb-4 space-x-6">
          <a href="#" className="hover:text-secondary">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-secondary">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-secondary">
            <FaInstagram />
          </a>
        </div>
        <p>
          &copy; {new Date().getFullYear()} Luxury Indoor Estate. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
