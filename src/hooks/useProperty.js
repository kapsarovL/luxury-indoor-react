import { useState, useEffect, useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

export const useProperty = (id) => {
  const { properties } = useContext(PropertyContext);
  const [property, setProperty] = useState(null);
  const [similarProperties, setSimilarProperties] = useState([]);

  useEffect(() => {
    const selectedProperty = properties.find((prop) => prop.id === id);
    setProperty(selectedProperty);

    if (selectedProperty) {
      const similar = properties.filter(
        (prop) =>
          prop.type === selectedProperty.type && prop.id !== selectedProperty.id
      );
      setSimilarProperties(similar);
    }
  }, [id, properties]);

  return { property, similarProperties };
};
