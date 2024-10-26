// src/context/PropertyContext.jsx
import { createContext, useState, useEffect } from 'react';
import { properties as propertyData } from '../data/propertyData';
import PropTypes from 'prop-types';
export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(true);

  useEffect(() => {
    setProperties(propertyData);
    setLoadingProperties(false);
  }, []);

  return (
    <PropertyContext.Provider
      value={{
        properties,
        loadingProperties,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};
PropertyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PropertyProvider;
