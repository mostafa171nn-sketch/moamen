import type { CafeRestaurant } from '@/types';

export const cafesRestaurants: CafeRestaurant[] = [
  {
    id: '1',
    title: 'Pier 88',
    description: 'Nile-side fine dining with panoramic views and Michelin-inspired cuisine.',
    image: '/pier88.jpeg',
    location: 'Zamalek, Cairo',
    date: 'Available Daily',
    price: '$250+',
    rating: 4.9,
    priceRange: '$$$$',
    reviews: '127 reviews'
  },
  {
    id: '2',
    title: "Al Azhar's Hidden Gem",
    description: 'Authentic Egyptian cuisine in a historic setting near the mosque.',
    image: '/Al-Azhar-Park-Egypt-Tours-Portal.jpg',
    location: 'Historic Cairo',
    date: 'Available Daily',
    price: '$80+',
    rating: 4.7,
    priceRange: '$$',
    reviews: '89 reviews'
  },
  {
    id: '3',
    title: 'Nobu Nile',
    description: 'Japanese-Peruvian fusion overlooking the pyramids at night.',
    image: '/noba.jpeg',
    location: 'Giza Pyramids Area',
    date: 'Available Daily',
    price: '$300+',
    rating: 4.8,
    priceRange: '$$$$',
    reviews: '204 reviews'
  },
  {
    id: '4',
    title: 'The Diplomat Lounge',
    description: 'Private members club with rare whiskies and cigar lounge.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop',
    location: 'Maadi, Cairo',
    date: 'Available Daily',
    price: '$150+',
    rating: 4.9,
    priceRange: '$$$',
    reviews: '156 reviews'
  },
  
  {
    id: '6',
    title: 'Ramses Rooftop',
    description: '360° views of ancient temples from Cairo Tower.',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&auto=format&fit=crop',
    location: 'Downtown Cairo',
    date: 'Available Daily',
    price: '$90+',
    rating: 4.8,
    priceRange: '$$',
    reviews: '167 reviews'
  }
];
