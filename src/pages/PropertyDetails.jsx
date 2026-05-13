// src/pages/PropertyDetails.jsx
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProperty } from '../hooks/useProperty';
import PropertyCard from '../components/cards/PropertyCard';
import ContactForm from '../components/forms/ContactForm';
import { FaBed, FaBath, FaRulerCombined, FaLink } from 'react-icons/fa';

const PropertyDetails = () => {
  const { id } = useParams();
  const { property, similarProperties } = useProperty(id);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareProperty = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const LoadingSkeleton = () => (
    <div className="container px-4 py-8 mx-auto animate-pulse">
      <div className="h-8 bg-gray-300 rounded mb-6 w-1/3"></div>
      <div className="h-6 bg-gray-300 rounded mb-4 w-1/2"></div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mb-6">
        <div className="h-96 bg-gray-300 rounded-lg"></div>
        <div className="h-96 bg-gray-300 rounded-lg"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded mb-3 w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );

  if (property === undefined) {
    return <LoadingSkeleton />;
  }

  if (!property) {
    return (
      <div className="container px-4 py-8 mx-auto">
        <div className="mb-6">
          <Link to="/" className="text-primary hover:underline">
            ← Back to properties
          </Link>
        </div>
        <p className="text-lg text-gray-600">Property not found</p>
      </div>
    );
  }

  return (
    <section className="flex flex-col items-center justify-center max-w-full py-20 bg-gray-100">
      <div className="container h-full px-4 py-8 mx-auto">
        {/* Breadcrumbs */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/" className="hover:text-primary">
            Properties
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{property.title}</span>
        </nav>

        <h1 className="mb-4 text-4xl font-bold">{property.title}</h1>
        <p className="mb-6 text-lg text-gray-600">{property.location}</p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-5 mx-auto mb-6 md:grid-cols-2 max-w-fit">
          {property.images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-gray-100">
              <img
                src={image}
                alt={`${property.title} - ${index + 1} of ${property.images.length}`}
                className="object-cover w-full h-96 transition-transform duration-300 hover:scale-105"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col mb-6 md:flex-row md:space-x-8">
          {/* Left Column */}
          <div className="md:w-2/3">
            <h2 className="mb-4 text-2xl font-semibold">Description</h2>
            <p className="mb-6 text-gray-700">{property.description}</p>

            {/* Amenities */}
            <h2 className="mb-4 text-2xl font-semibold">Amenities</h2>
            <ul className="mb-6 text-gray-700 list-disc list-inside">
              {property.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="md:w-1/3">
            <div className="p-6 bg-gray-100 rounded-lg">
              <p className="mb-4 text-3xl font-semibold text-primary">
                {property.price}
              </p>
              <div className="flex items-center mb-2 text-gray-700">
                <FaBed className="mr-2" /> {property.bedrooms} Bedrooms
              </div>
              <div className="flex items-center mb-2 text-gray-700">
                <FaBath className="mr-2" /> {property.bathrooms} Bathrooms
              </div>
              <div className="flex items-center mb-2 text-gray-700">
                <FaRulerCombined className="mr-2" /> {property.area} sq ft
              </div>

              {/* Contact Agent Button */}
              <button
                aria-label="Contact Agent"
                onClick={() => setIsContactFormOpen(true)}
                className="w-full px-4 py-2 mt-6 text-white transition duration-300 rounded-md bg-primary hover:bg-primary-dark"
              >
                Contact Agent
              </button>

              {/* Share Button */}
              <button
                onClick={shareProperty}
                className="w-full px-4 py-2 mt-3 border border-primary text-primary transition duration-300 rounded-md hover:bg-primary hover:text-white flex items-center justify-center gap-2"
              >
                <FaLink className="text-sm" />
                {copied ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        {similarProperties.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 text-2xl font-semibold">Similar Properties</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {similarProperties.map((similarProperty) => (
                <PropertyCard
                  key={similarProperty.id}
                  property={similarProperty}
                />
              ))}
            </div>
          </div>
        )}

        {/* Contact Form Modal */}
        {isContactFormOpen && (
          <ContactForm
            propertyTitle={property.title}
            onClose={() => setIsContactFormOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default PropertyDetails;
