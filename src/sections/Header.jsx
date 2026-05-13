import Navigation from '../components/layouts/Navigation';
import Banner from '../components/layouts/Banner';

const Header = () => {
  return (
    <header className="absolute z-50 w-full">
      <Banner />
      <div className="border-b border-white/5">
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
