import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { culturalEvents } from '@/data/culturalEvents';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { CulturalEvent } from '@/types';

export async function generateStaticParams() {
  return culturalEvents.map((event) => ({
    id: event.id
  }));
}

interface Params {
  params: Promise<{ id: string }>;
}

export default async function CulturalEventDetails({ params }: Params) {
  const { id } = await params;
  const event = culturalEvents.find((c) => c.id === id);

  if (!event) notFound();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative h-96 lg:h-[500px] mb-16 lg:mb-24">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90" />
      </section>
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl pb-24 lg:pb-32">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-6xl font-serif font-black text-white leading-tight">
              {event.title}
            </h1>
            <div className="flex items-center space-x-6 text-xl">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent-gold rounded-full animate-pulse" />
                <span>{event.location}</span>
              </div>
              <span className="text-accent-gold font-bold text-2xl">{event.date}</span>
            </div>
            <p className="text-xl text-white/90 leading-relaxed">
              {event.description}
            </p>
          </div>
          <div className="bg-glass-bg-light backdrop-blur-xl rounded-3xl p-10 lg:p-12 border border-glass-border shadow-2xl">
            <div className="text-center lg:text-left space-y-6">
              <div className="text-6xl lg:text-7xl font-black text-accent-gold">
                {event.price}
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold text-xl py-6 px-8 rounded-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300 uppercase tracking-wide"
              >
                Get Tickets
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

