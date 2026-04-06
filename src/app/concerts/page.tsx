'use client';

import Navbar from '@/components/Navbar';
import EventCard from '@/components/ui/EventCard';
import { concerts } from '@/data/concerts';
import Image from 'next/image';

export default function ConcertsPage() {
  return (
    <div className="min-h-screen pt-4">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">
        <div className="text-center mb-24 lg:mb-32">
          <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-8">
            Exclusive
            <br />
            Concerts
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Experience Egypt's premier musical performances in the world's most elegant venues.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {concerts.map((concert) => (
            <EventCard key={concert.id} event={concert} linkHref={`/concerts/${concert.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

