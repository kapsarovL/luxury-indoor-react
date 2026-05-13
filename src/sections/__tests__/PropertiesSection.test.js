import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertiesSection from '../PropertiesSection';
import { PropertyContext } from '../../context/PropertyContext';

const mockProperties = [
  {
    id: '1',
    title: 'Modern Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'A modern villa',
    images: [],
    amenities: [],
  },
  {
    id: '2',
    title: 'Luxury Apartment',
    location: 'Miami, FL',
    price: '$2,000,000',
    type: 'apartment',
    bedrooms: 3,
    bathrooms: 2,
    area: '2,500 sqft',
    description: 'A luxury apartment',
    images: [],
    amenities: [],
  },
];

const renderWithContext = (component, value) => {
  return render(
    <BrowserRouter>
      <PropertyContext.Provider value={value}>
        {component}
      </PropertyContext.Provider>
    </BrowserRouter>
  );
};

describe('PropertiesSection', () => {
  it('should display all properties when filter is "all"', () => {
    renderWithContext(<PropertiesSection />, {
      properties: mockProperties,
      loadingProperties: false,
    });

    expect(screen.getByText('Modern Glass Villa')).toBeInTheDocument();
    expect(screen.getByText('Luxury Apartment')).toBeInTheDocument();
  });

  it('should filter properties by villa type', () => {
    renderWithContext(<PropertiesSection />, {
      properties: mockProperties,
      loadingProperties: false,
    });

    const villaButton = screen.getByText('Villa');
    fireEvent.click(villaButton);

    expect(screen.getByText('Modern Glass Villa')).toBeInTheDocument();
    expect(screen.queryByText('Luxury Apartment')).not.toBeInTheDocument();
  });

  it('should filter properties by apartment type', () => {
    renderWithContext(<PropertiesSection />, {
      properties: mockProperties,
      loadingProperties: false,
    });

    const apartmentButton = screen.getByText('Apartment');
    fireEvent.click(apartmentButton);

    expect(screen.queryByText('Modern Glass Villa')).not.toBeInTheDocument();
    expect(screen.getByText('Luxury Apartment')).toBeInTheDocument();
  });

  it('should filter by location', () => {
    renderWithContext(<PropertiesSection />, {
      properties: mockProperties,
      loadingProperties: false,
    });

    const locationSelect = screen.getByDisplayValue('All Locations');
    fireEvent.change(locationSelect, { target: { value: 'Beverly Hills, CA' } });

    expect(screen.getByText('Modern Glass Villa')).toBeInTheDocument();
    expect(screen.queryByText('Luxury Apartment')).not.toBeInTheDocument();
  });

  it('should show "No properties found" message when no matches', () => {
    renderWithContext(<PropertiesSection />, {
      properties: mockProperties,
      loadingProperties: false,
    });

    const villaButton = screen.getByText('Villa');
    fireEvent.click(villaButton);

    const locationSelect = screen.getByDisplayValue('All Locations');
    fireEvent.change(locationSelect, { target: { value: 'Miami, FL' } });

    expect(
      screen.getByText('No properties found matching your criteria.')
    ).toBeInTheDocument();
  });

  it('should show loading skeleton when loading', () => {
    renderWithContext(<PropertiesSection />, {
      properties: [],
      loadingProperties: true,
    });

    const skeletons = screen.getAllByText('', { selector: '.animate-pulse' });
    expect(skeletons.length).toBeGreaterThan(0);
  });
});
