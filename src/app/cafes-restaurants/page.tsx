'use client';

import Navbar from '@/components/Navbar';
import EventCard from '@/components/ui/EventCard';
import { cafesRestaurants } from '@/data/cafesRestaurants';

export default function CafesRestaurantsPage() {
  return (
    <div className="min-h-screen pt-4">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">
        <div className="text-center mb-24 lg:mb-32">
          <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent mb-8">
            Elite Dining
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Egypt's most refined culinary destinations for the discerning palate.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {cafesRestaurants.map((venue) => (
            <EventCard key={venue.id} event={venue} linkHref={`/cafes-restaurants/${venue.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

