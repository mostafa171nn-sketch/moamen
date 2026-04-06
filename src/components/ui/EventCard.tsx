import Link from 'next/link';
import Image from 'next/image';
import { Event } from '@/types';

interface EventCardProps {
  event: Event;
  linkHref?: string;
}

export default function EventCard({ event, linkHref = '#' }: EventCardProps) {
  return (
    <Link href={linkHref} className="group relative block overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 bg-glass-bg-light backdrop-blur-xl hover:backdrop-blur-2xl border border-glass-border hover:border-white/50">
      <div className="relative h-72 lg:h-80 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover group-hover:scale-110 transition-transform duration-1000"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>
      <div className="p-8 lg:p-10">
        <h3 className="text-2xl lg:text-3xl font-serif font-bold text-white mb-3 group-hover:text-accent-gold transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-white/80 text-lg leading-relaxed mb-4 max-h-16 overflow-hidden">
          {event.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-accent-gold">{event.price}</span>
          <span className="text-white/70 font-medium text-sm uppercase tracking-wider">
            {event.location.split(',')[0]}
          </span>
        </div>
      </div>
    </Link>
  );
}

