import gym from '../assets/images/gym.webp';
import swimmingPool from '../assets/images/swimmingPool.webp';
import garden from '../assets/images/garden.webp';
import homeTheater from '../assets/images/homeTheater.webp';
import villa1 from '../assets/images/villa1.webp';
import villa2 from '../assets/images/villa2.webp';
import villa3 from '../assets/images/villa3.webp';
import villa4 from '../assets/images/villa4.webp';
import villa5 from '../assets/images/villa5.webp';
import villa6 from '../assets/images/villa6.webp';
import apartment1 from '../assets/images/apartment1.webp';
import apartment2 from '../assets/images/apartment2.webp';
import apartment3 from '../assets/images/apartment3.webp';
import apartment4 from '../assets/images/apartment4.webp';
import apartment5 from '../assets/images/apartment5.webp';
import apartment6 from '../assets/images/apartment6.webp';

export const properties = [
  // Villas
  {
    id: '1',
    imgURL: villa1,
    title: 'Modern Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },
  {
    id: '2',
    imgURL: villa2,
    title: 'Family Mountain Villa',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, homeTheater, garden],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },
  {
    id: '3',
    imgURL: villa3,
    title: 'Modern Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, gym, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },
  {
    id: '4',
    imgURL: villa4,
    title: 'Family Villa',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, garden, homeTheater],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },

  {
    id: '5',
    imgURL: villa5,
    title: 'Modern Glass Villa',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'villa',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, gym, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },

  {
    id: '6',
    imgURL: villa6,
    title: 'Family Villa',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'villa',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, garden, homeTheater],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },
  {
    id: '7',
    imgURL: apartment1,
    title: 'Modern Center City Apartment',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'apartment',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, gym, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },
  {
    id: '8',
    imgURL: apartment2,
    title: 'Modern Apartment',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'apartment',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, garden, homeTheater],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },
  {
    id: '9',
    imgURL: apartment3,
    title: 'Modern Glass Apartment',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'apartment',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, gym, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },
  {
    id: '10',
    imgURL: apartment4,
    title: 'Family Apartment',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'apartment',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, garden, homeTheater],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },
  {
    id: '11',
    imgURL: apartment5,
    title: 'Modern Glass Apartment',
    location: 'Beverly Hills, CA',
    price: '$4,500,000',
    type: 'apartment',
    bedrooms: 5,
    bathrooms: 4,
    area: '6,000 sqft',
    description: 'An exquisite modern villa with stunning glass architecture.',
    images: [swimmingPool, homeTheater, gym, garden],
    amenities: ['Swimming Pool', 'Home Theater', 'Gym', 'Garden'],
  },
  {
    id: '12',
    imgURL: apartment6,
    title: 'Family Glass Apartment',
    location: 'Miami, FL',
    price: '$3,000,000',
    type: 'apartment',
    bedrooms: 4,
    bathrooms: 3,
    area: '3,500 sqft',
    description:
      'A beautiful family house with a spacious garden for the kids.',
    images: [swimmingPool, garden, homeTheater],
    amenities: ['Swimming Pool', 'Garden', 'Home Theater'],
  },
];
