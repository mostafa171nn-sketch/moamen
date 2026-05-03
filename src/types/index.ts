export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  price: string;
  category?: string;
  maxTickets?: number;
}

export function parsePrice(priceStr: string): number {
  return parseFloat(priceStr.replace(/[^0-9.]/g, ''));
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

export interface CartTicket {
  eventId: string;
  event: Event;
  quantity: number;
  pricePerTicket: number;
  lineTotal: number;
}

export interface Ticket {
  eventId: string;
  quantity: number;
  totalPrice: number;
}
