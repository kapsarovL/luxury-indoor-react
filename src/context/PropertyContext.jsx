// src/context/PropertyContext.jsx
import { createContext, useState, useEffect } from 'react';
import { getProperties } from '../db/database';
import PropTypes from 'prop-types';

// eslint-disable-next-line react-refresh/only-export-components
export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [loadingProperties, setLoadingProperties] = useState(true);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await getProperties();
        console.info('Properties loaded:', data?.length || 0, 'properties');
        setProperties(data || []);
      } catch (error) {
        console.error('Failed to load properties:', error);
        setProperties([]);
      } finally {
        setLoadingProperties(false);
      }
    };

    setLoadingProperties(true);
    loadProperties();
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
