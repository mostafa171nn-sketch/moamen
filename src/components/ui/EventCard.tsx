'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import QuantitySelectorClient from './QuantitySelectorClient';
import { useCartStore } from '@/store/cartStore';
import { parsePrice } from '@/types';
import type { Event } from '@/types';

interface EventCardProps {
  event: Event;
  linkHref?: string;
}

export default function EventCard({ event, linkHref = '#' }: EventCardProps) {

  const [localQuantity, setLocalQuantity] = useState(1);
  const addOrUpdateTicket = useCartStore((state) => state.addOrUpdateTicket);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const pricePer = parsePrice(event.price);
    addOrUpdateTicket({
      eventId: event.id,
      event,
      quantity: localQuantity,
      pricePerTicket: pricePer,
    });
  };

  const handleQuantityChange = (q: number) => {
    setLocalQuantity(q);
  };

  return (
    <div className="group relative block overflow-hidden rounded-3xl shadow-luxury hover:shadow-2xl hover:-translate-y-4 transition-all duration-700 bg-glass-bg-light backdrop-blur-xl hover:backdrop-blur-2xl border border-glass-border hover:border-white/50">
      <Link href={linkHref} className="block">
        <div className="relative h-46 lg:h-64 w-full">
          <Image
            src={event.image}
            alt={event.title}
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover group-hover:scale-100 transition-transform duration-1000"
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
      <div className="p-6 pt-0 space-y-3">
        <QuantitySelectorClient 
          maxTickets={event.maxTickets || 10}
          onQuantityChange={handleQuantityChange}
          initialQuantity={localQuantity}
        />
        <button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold py-3 px-6 rounded-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 uppercase tracking-wide shadow-lg"
        >
          Add {localQuantity} to Cart
        </button>
      </div>
    </div>
  );
}

