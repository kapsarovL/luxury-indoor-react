// src/components/PropertyCard.jsx
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaHeart,
  FaRegHeart,
} from 'react-icons/fa';
import { properties } from '../../data/propertyData';

const PropertyCard = ({ property }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="relative overflow-hidden transition duration-300 transform bg-white rounded-lg shadow-lg hover:scale-105">
      {/* Favorite Button */}
      <button
        aria-label="Add to favorites"
        onClick={() => setIsFavorited(!isFavorited)}
        className="absolute text-2xl top-2 right-2 text-red focus:outline-none"
      >
        {isFavorited ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Property Image */}
      <div key={properties} className="max-container">
        <img
          src={property.imgURL}
          alt={property.title}
          className="object-cover w-full h-56"
          loading="lazy"
        />
      </div>

      {/* Property Details */}
      <div className="p-6 ">
        <h4 className="mb-2 text-xl font-semibold">{property.title}</h4>
        <p className="text-gray-600">{property.location}</p>
        <p className="mt-4 font-semibold text-primary">{property.price}</p>

        {/* Property Features */}
        <div className="flex items-center mt-4 text-sm text-gray-600">
          <div className="flex items-center mr-4">
            <FaBed className="mr-1" /> {property.bedrooms} Beds
          </div>
          <div className="flex items-center mr-4">
            <FaBath className="mr-1" /> {property.bathrooms} Baths
          </div>
          <div className="flex items-center">
            <FaRulerCombined className="mr-1" /> {property.area}
          </div>
        </div>

        {/* View Details Link */}
        <Link
          to={`/property/${property.id}`}
          className="inline-block mt-4 text-secondary hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
