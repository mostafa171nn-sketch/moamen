import type { CulturalEvent } from '@/types';

export const culturalEvents: CulturalEvent[] = [
  {
    id: '1',
    title: 'Om Kalthoum Legacy Exhibition',
    description: 'Rare artifacts and immersive experience celebrating the queen of Arabic song.',
    image: '/om kalsom.jpeg',
    location: 'Egyptian Museum, Tahrir',
    date: 'Ongoing',
    price: '$50',
    type: 'exhibition'
  },
  // Add 14 more...
  {
    id: '2',
    title: 'October Victory Immersive Experience',
description: "Multi-sensory exhibit commemorating Egypt's historic victory.",
    image: '/octoper.jpg',
    location: 'October War Panorama',
    date: 'Ongoing',
    price: 'Free',
    type: 'exhibition'
  },
  // Truncating for brevity, will fill full 15 in full build
  // ... 13 more luxury cultural events
];

