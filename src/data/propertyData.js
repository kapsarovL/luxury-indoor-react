const gym = '/src/assets/images/gym.webp';
const swimmingPool = '/src/assets/images/swimmingPool.webp';
const garden = '/src/assets/images/garden.webp';
const homeTheater = '/src/assets/images/homeTheater.webp';
const villa1 = '/src/assets/images/villa1.webp';
const villa2 = '/src/assets/images/villa2.webp';
const villa3 = '/src/assets/images/villa3.webp';
const villa4 = '/src/assets/images/villa4.webp';
const villa5 = '/src/assets/images/villa5.webp';
const villa6 = '/src/assets/images/villa6.webp';
const apartment1 = '/src/assets/images/apartment1.webp';
const apartment2 = '/src/assets/images/apartment2.webp';
const apartment3 = '/src/assets/images/apartment3.webp';
const apartment4 = '/src/assets/images/apartment4.webp';
const apartment5 = '/src/assets/images/apartment5.webp';
const apartment6 = '/src/assets/images/apartment6.webp';

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
