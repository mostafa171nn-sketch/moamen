export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  price: string;
  category?: string;
}

export interface Concert extends Event {
  performers: string[];
}

export interface CulturalEvent extends Event {
  type: 'workshop' | 'exhibition' | 'art';
}

export interface CafeRestaurant extends Event {
  rating: number;
  priceRange: string;
  reviews: string;
}

export interface Ticket {
  eventId: string;
  quantity: number;
  totalPrice: number;
}
