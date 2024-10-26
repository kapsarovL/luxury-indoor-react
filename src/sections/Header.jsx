

import Navigation from '../components/layouts/Navigation';
import Banner from '../components/layouts/Banner';
const Header = () => {


  return (
    <header
     
      className="absolute z-10 w-full px-4"
      
    >
       <Banner />
       <Navigation />
      
    </header>
  );
};



export default Header;
