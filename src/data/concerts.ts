import type { Concert } from '@/types';

export const concerts: Concert[] = [
  {
    id: '1',
    title: 'Amr Diab Exclusive Night',
description: "Experience an intimate evening with Egypt's music legend at the prestigious Cairo Opera House.",
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
    location: 'Cairo Opera House, Zamalek',
    date: '2024-10-15',
    price: '$250',
    performers: ['Amr Diab']
  },
  {
    id: '2',
    title: 'Tamer Hosny Live Experience',
    description: 'A night of unforgettable melodies in the heart of New Cairo.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800',
    location: 'Cairo Festival City Hall',
    date: '2024-10-20',
    price: '$180',
    performers: ['Tamer Hosny']
  },
  {
    id: '3',
    title: 'Cairo Opera Royal Evening',
    description: 'Classical symphony orchestra performance under crystal chandeliers.',
    image: 'https://images.unsplash.com/photo-1571896349840-0d6f5615059c?w=800',
    location: 'Cairo Opera House',
    date: '2024-10-25',
    price: '$300',
    performers: ['Cairo Symphony Orchestra']
  },
  // Add 7 more similar luxury concerts...
  {
    id: '4',
    title: 'Alexandria Symphony Night',
    description: 'Seaside symphony under the stars at Bibliotheca Alexandrina.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587208?w=800',
    location: 'Bibliotheca Alexandrina',
    date: '2024-11-01',
    price: '$220',
    performers: ['Alexandria Orchestra']
  },
  {
    id: '5',
    title: 'Mohamed Mounir Unplugged',
    description: 'Acoustic set by the king of Egyptian rock in an exclusive venue.',
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800',
    location: 'El Sawy Culturewheel',
    date: '2024-11-05',
    price: '$200',
    performers: ['Mohamed Mounir']
  },
  {
    id: '6',
    title: 'Nancy Ajram VIP Concert',
    description: 'Lebanese superstar live at North Coast elite resort.',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    location: 'Hacienda White, North Coast',
    date: '2024-11-10',
    price: '$350',
    performers: ['Nancy Ajram']
  },
  {
    id: '7',
    title: 'Sherine Abdel Wahab Gala',
    description: 'Emotional performance at a 5-star hotel ballroom.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    location: 'Four Seasons Nile Plaza',
    date: '2024-11-15',
    price: '$280',
    performers: ['Sherine Abdel Wahab']
  },
  {
    id: '8',
    title: 'Cairo Jazz Festival Exclusive',
    description: 'International jazz masters in intimate setting.',
    image: 'https://images.unsplash.com/photo-1576638144200-f18a4f8b5211?w=800',
    location: 'Cairo Jazz Club 25',
    date: '2024-11-20',
    price: '$190',
    performers: ['Jazz Masters']
  },
  {
    id: '9',
    title: 'North Coast Music Nights',
    description: 'Beachfront concert series with top artists.',
    image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800',
    location: 'Marrasi Marina, North Coast',
    date: '2024-11-25',
    price: '$260',
    performers: ['Various Artists']
  },
  {
    id: '10',
    title: 'Luxury Opera Premiere',
    description: 'World-class opera at historic venue.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800',
    location: 'Alexandria Opera House',
    date: '2024-12-01',
    price: '$400',
    performers: ['Egyptian Opera Company']
  }
];

