import {
  persona1,
  persona2,
  persona3,
  persona4,
  star,
} from '/src/assets/images/index';

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#properties", label: "Properties" },
  { href: "#contact-us", label: "Contact Us" },
];

export const testimonials = [
  {
    id: 1,
    image: persona1,
    feedback:
      'I was impressed by their professionalism and dedication. They made buying a home a breeze.',
    name: 'David Wilson',
    rating: 4.5,
    svg: star,
  },
  {
    id: 2,
    image: persona2,
    feedback: 'They helped me find my dream home. Highly recommended!',
    name: 'Jane Smith',
    rating: 5,
  },
  {
    id: 3,
    image: persona3,
    feedback:
      'An exceptional experience from start to finish. The agents were knowledgeable and extremely helpful.',
    name: 'Sophia Martinez',
    rating: 5.5,
  },
  {
    id: 4,
    image: persona4,
    feedback:
      'Outstanding service! The team was incredibly attentive and responsive throughout the entire process.',
    name: 'Michael & Emily Brown',
    rating: 5.5,
  },
];
