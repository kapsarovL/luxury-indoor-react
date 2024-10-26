const HeroText = () => {
  return (
    <div className="px-4 mx-auto">
      <h2 className="text-3xl font-semibold md:text-4xl md-4">
        Discover Your Dream Home
      </h2>
      <p className="mb-8 text-lg">
        Browse through our exclusive collection of luxury estates.
      </p>
      <button className="px-6 py-3 text-white transition duration-300 ease-in-out transform rounded-md bg-primary hover:bg-primary-dark hover:-translate-y-1">
        Get Started
      </button>
    </div>
  );
};

export default HeroText;
