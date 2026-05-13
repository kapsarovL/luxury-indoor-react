import { useState, useEffect, useRef } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { navLinks } from '../../data/data';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-16 max-w-full bg-black/30 backdrop-blur-md">
      <Link
        to="/"
        className="text-xl sm:text-2xl font-bold tracking-wider text-secondary hover:text-yellow-300 transition-colors duration-300 whitespace-nowrap flex-shrink-0"
      >
        Luxury Estate
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden items-center justify-center gap-16 lg:flex flex-1 pl-12">
        {navLinks.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className="text-xs font-semibold uppercase tracking-widest text-white cursor-pointer hover:text-secondary transition-colors duration-300 relative group py-3 block [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Auth Links */}
      <div className="hidden gap-8 items-center lg:flex flex-shrink-0">
        <Link
          to="/login"
          className="text-xs font-semibold uppercase tracking-widest text-white hover:text-secondary transition-colors duration-300 py-3 [text-shadow:_0_2px_4px_rgba(0,0,0,0.8)]"
        >
          Sign In
        </Link>
        <div className="h-6 w-px bg-white/20" />
        <Link
          to="/"
          className="px-8 py-3 bg-secondary text-gray-900 font-semibold uppercase tracking-wider rounded-lg hover:bg-yellow-300 transition-all duration-300 text-xs whitespace-nowrap"
        >
          Explore Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
        className="lg:hidden p-3 hover:bg-secondary/20 rounded-lg transition-colors duration-300 flex-shrink-0"
      >
        {isOpen ? (
          <XMarkIcon className="w-6 h-6 text-secondary" />
        ) : (
          <Bars3Icon className="w-6 h-6 text-secondary" />
        )}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute left-0 right-0 top-full z-40 bg-black/50 backdrop-blur-md shadow-2xl lg:hidden border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
        >
          <ul className="flex flex-col divide-y divide-white/10 py-2">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white cursor-pointer hover:text-secondary hover:bg-white/10 block py-3 px-4 sm:py-4 sm:px-6 transition-all duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-2">
              <Link
                to="/login"
                onClick={closeMenu}
                className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-white cursor-pointer hover:text-secondary hover:bg-white/10 block py-3 px-4 sm:py-4 sm:px-6 transition-all duration-300"
              >
                Sign In
              </Link>
            </li>
            <li className="px-4 sm:px-6 py-2 sm:py-3">
              <Link
                to="/"
                onClick={closeMenu}
                className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-gray-900 bg-secondary hover:bg-yellow-300 cursor-pointer block py-3 px-4 rounded-lg transition-all duration-300 text-center"
              >
                Explore Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
