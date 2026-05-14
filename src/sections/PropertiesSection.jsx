// src/sections/PropertiesSection.jsx
import { useState, useContext, useMemo } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import PropertyCard from '../components/cards/PropertyCard';

const PROPERTIES_PER_PAGE = 6;

const PropertiesSection = () => {
  const [typeFilter, setTypeFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000000 });
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const { properties, loadingProperties } = useContext(PropertyContext);

  const uniqueLocations = useMemo(() => {
    const locations = [...new Set(properties.map((p) => p.location))];
    return locations.sort();
  }, [properties]);

  const parsePrice = (priceString) => {
    return parseInt(priceString.replace(/[$,]/g, ''), 10);
  };

  const filteredProperties = properties.filter((property) => {
    const matchesType = typeFilter === 'all' || property.type === typeFilter;
    const matchesLocation =
      locationFilter === 'all' || property.location === locationFilter;
    const propertyPrice = parsePrice(property.price);
    const matchesPrice =
      propertyPrice >= priceFilter.min && propertyPrice <= priceFilter.max;
    const matchesSearch =
      searchQuery === '' ||
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesLocation && matchesPrice && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProperties.length / PROPERTIES_PER_PAGE);
  const startIndex = (currentPage - 1) * PROPERTIES_PER_PAGE;
  const endIndex = startIndex + PROPERTIES_PER_PAGE;
  const paginatedProperties = filteredProperties.slice(startIndex, endIndex);

  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="animate-pulse">
          <div className="w-full h-64 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded mb-3"></div>
          <div className="h-4 bg-gray-300 rounded mb-3 w-3/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="properties"
      className="py-12 sm:py-16 md:py-20 lg:py-28 bg-white"
    >
      <div className="container px-4 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-28 max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Exclusive High-End Properties
          </h2>
          <div className="h-2"></div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            Our hand-picked selection of premium properties exemplifies luxury
            and elegance. Each home is designed with meticulous attention to
            detail, offering the finest finishes and state-of-the-art amenities.
            Browse our curated collection and find the property that fits your
            unique style and high standards.
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-lg p-8 sm:p-12 md:p-16 mb-20 sm:mb-28 space-y-10">
          {/* Search Bar */}
          <div className="flex justify-center pb-4">
            <label htmlFor="search-properties" className="sr-only">
              Search properties
            </label>
            <input
              id="search-properties"
              name="search"
              type="text"
              placeholder="Search by property name or location..."
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                handleFilterChange();
              }}
              disabled={loadingProperties}
              className="w-full max-w-md px-5 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all text-base"
            />
          </div>

          <div className="border-t border-gray-100 pt-10"></div>

          {/* Type Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'villa', 'apartment'].map((type) => (
              <button
                key={type}
                onClick={() => {
                  setTypeFilter(type);
                  handleFilterChange();
                }}
                disabled={loadingProperties}
                className={`px-7 py-3 rounded-lg font-semibold uppercase tracking-wide text-xs transition-all ${
                  typeFilter === type
                    ? 'bg-secondary text-gray-900 shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 border border-gray-200 hover:border-secondary/30 hover:bg-gray-50'
                } ${loadingProperties ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-10"></div>

          {/* Location and Price Filters */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Location Filter */}
            <div className="flex flex-col">
              <label
                htmlFor="location-filter"
                className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700"
              >
                Location
              </label>
              <select
                id="location-filter"
                value={locationFilter}
                onChange={(e) => {
                  setLocationFilter(e.target.value);
                  handleFilterChange();
                }}
                disabled={loadingProperties}
                className="px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white text-gray-900"
              >
                <option value="all">All Locations</option>
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="flex flex-col">
              <label
                htmlFor="max-price-filter"
                className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-700"
              >
                Max Price
              </label>
              <input
                id="max-price-filter"
                name="maxPrice"
                type="number"
                min="0"
                step="100000"
                autoComplete="off"
                value={priceFilter.max}
                onChange={(e) => {
                  setPriceFilter({
                    ...priceFilter,
                    max: parseInt(e.target.value, 10),
                  });
                  handleFilterChange();
                }}
                disabled={loadingProperties}
                className="px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary disabled:opacity-50 disabled:cursor-not-allowed transition-all bg-white text-gray-900"
              />
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loadingProperties ? (
          <LoadingSkeleton />
        ) : (
          <>
            {/* Properties Grid */}
            <div className="grid grid-cols-1 gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 md:grid-cols-3 mb-20 sm:mb-24">
              {filteredProperties.length > 0 ? (
                paginatedProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))
              ) : (
                <div className="col-span-full text-center py-20 sm:py-28">
                  <p className="text-lg sm:text-xl text-gray-600">
                    No properties found matching your criteria.
                  </p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {filteredProperties.length > 0 && totalPages > 1 && (
              <div className="flex items-center justify-center gap-4 flex-wrap pt-12 border-t border-gray-200">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-3 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-secondary/30 hover:bg-gray-50 transition-colors font-semibold text-sm uppercase tracking-wide"
                  aria-label="Previous page"
                >
                  Previous
                </button>

                <div className="flex gap-2 flex-wrap justify-center">
                  {[...Array(totalPages)].map((_, i) => {
                    const pageNum = i + 1;
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded-lg font-semibold transition-all ${
                          currentPage === pageNum
                            ? 'bg-secondary text-gray-900 shadow-lg'
                            : 'border border-gray-200 hover:border-secondary/30 hover:bg-gray-50'
                        }`}
                        aria-label={`Go to page ${pageNum}`}
                        aria-current={
                          currentPage === pageNum ? 'page' : undefined
                        }
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-3 border border-gray-200 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:border-secondary/30 hover:bg-gray-50 transition-colors font-semibold text-sm uppercase tracking-wide"
                  aria-label="Next page"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PropertiesSection;
