import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import {navLinks } from '../../data/data';
import { Link} from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>

      <nav className="flex items-center justify-between text-center max-container">
       
       
          <Link to="/" className="text-2xl font-bold text-primary"/>Luxury Estate
          <ul className="flex items-center justify-center flex-1 gap-16 py-2.5 text-center max-lg:hidden">
            {navLinks.map((item) => ( 

          
            <li key={item.label}
              to="home"
              smooth={true}
              offset={-70}
              duration={500}
              
            >
            <a href={item.href} className="text-lg font-semibold text-gray-600 cursor-pointer hover:text-primary">
          {item.label}
            </a>
           </li>
          ))}
          
            
          </ul>
          <div className="flex gap-2 text-lg font-medium leading-normal max-lg:hidden wide:mr-24">
          <a href="/">Sign In</a>
          <span></span>
          <a href="/">Explore Now</a>
          </div>
       
        {/** Mobile Menu */}
        {isOpen && (
          <div className="hidden max-lg:block">
           <button aria-label="Open Menu" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XMarkIcon className="h-6 w- 6 text-primary" />
              ) : (
                <Bars3Icon className="w-6 h-6 text-primary" />
              )}
            </button>
           
           
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
