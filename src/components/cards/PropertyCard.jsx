// src/components/PropertyCard.jsx
import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorited(favorites.includes(property.id));
  }, [property.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updated = isFavorited
      ? favorites.filter((id) => id !== property.id)
      : [...favorites, property.id];
    localStorage.setItem('favorites', JSON.stringify(updated));
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 group">
      {/* Favorite Button */}
      <button
        aria-label={isFavorited ? 'Remove from favorites' : 'Add to favorites'}
        onClick={toggleFavorite}
        className="absolute text-2xl top-4 right-4 z-10 focus:outline-none p-2 rounded-lg bg-white/90 hover:bg-secondary hover:text-gray-900 text-red-500 transition-all duration-300"
      >
        {isFavorited ? <FaHeart /> : <FaRegHeart />}
      </button>

      {/* Property Image */}
      <div
        key={properties}
        className="max-container overflow-hidden bg-gray-100"
      >
        <img
          src={
            property.imgURL ||
            (Array.isArray(property.images) && property.images[0]) ||
            'https://via.placeholder.com/400x300?text=No+Image'
          }
          alt={property.title}
          className="object-cover w-full h-56 group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Property Details */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="mb-2 text-lg font-bold text-gray-900 tracking-tight line-clamp-2">
            {property.title}
          </h3>
          <p className="text-sm text-gray-600">{property.location}</p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <p className="text-xl font-bold text-secondary-dark">{property.price}</p>
        </div>

        {/* Property Features */}
        <div className="grid grid-cols-3 gap-3 text-xs">
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <FaBed className="mb-1 text-secondary" />
            <span className="font-semibold text-gray-900">
              {property.bedrooms}
            </span>
            <span className="text-gray-600">Beds</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <FaBath className="mb-1 text-secondary" />
            <span className="font-semibold text-gray-900">
              {property.bathrooms}
            </span>
            <span className="text-gray-600">Baths</span>
          </div>
          <div className="flex flex-col items-center p-3 bg-gray-50 rounded-lg">
            <FaRulerCombined className="mb-1 text-secondary" />
            <span className="font-semibold text-gray-900 line-clamp-1">
              {property.area}
            </span>
            <span className="text-gray-600">Sqft</span>
          </div>
        </div>

        {/* View Details Link */}
        <Link
          to={`/property/${property.id}`}
          className="inline-block w-full text-center mt-2 py-3 bg-secondary text-gray-900 font-bold uppercase tracking-wider rounded-lg hover:bg-yellow-300 transition-all duration-300 text-xs"
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
    imgURL: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    area: PropTypes.string.isRequired,
  }).isRequired,
};

export default PropertyCard;
