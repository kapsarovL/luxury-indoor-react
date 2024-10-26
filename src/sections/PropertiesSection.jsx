// src/sections/PropertiesSection.jsx
import { useState, useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import PropertyCard from '../components/cards/PropertyCard';

const PropertiesSection = () => {
  const [filter, setFilter] = useState('all');
  const { properties } = useContext(PropertyContext);

  const filteredProperties = properties.filter(
    (property) => filter === 'all' || property.type === filter
  );

  return (
    <section id="properties" className="py-20 bg-gray-100">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center w-full mb-10 leading-relaxed text-center">
          {/* Section Title */}
          <h3 className="mb-5 text-4xl font-bold text-center sm:text-5xl">
            Exclusive High-End Properties
          </h3>
          <p className="w-3/4 gap-5 mb-5 text-xl leading-relaxed text-center info-text">
            Our hand-picked selection of premium properties exemplifies luxury
            and elegance. Each home is designed with meticulous attention to
            detail, offering the finest finishes and state-of-the-art amenities.
            Browse our curated collection and find the property that fits your
            unique style and high standards.
          </p>
        </div>
        {/* Filter Buttons */}
        <div className="flex justify-center mb-8">
          {['all', 'villa', 'apartment'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`mx-2 px-4 py-2 rounded ${
                filter === type ? 'bg-primary text-white' : 'bg-white'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
