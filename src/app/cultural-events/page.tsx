'use client';

import Navbar from '@/components/Navbar';
import EventCard from '@/components/ui/EventCard';
import { culturalEvents } from '@/data/culturalEvents';

export default function CulturalEventsPage() {
  return (
    <div className="min-h-screen pt-4">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32 max-w-7xl">
        <div className="text-center mb-24 lg:mb-32">
          <h1 className="text-5xl lg:text-7xl font-serif font-black bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mb-8">
            Cultural
            <br />
            Excellence
          </h1>
          <p className="text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Immerse in Egypt's richest heritage and contemporary art scenes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {culturalEvents.map((event) => (
            <EventCard key={event.id} event={event} linkHref={`/cultural-events/${event.id}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

