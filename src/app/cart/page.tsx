'use client';

import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import QuantitySelectorClient from '@/components/ui/QuantitySelectorClient';
import { concerts } from '@/data/concerts';
import { culturalEvents } from '@/data/culturalEvents';
import { cafesRestaurants } from '@/data/cafesRestaurants';

type AnyEvent = any;

export default function CartPage() {
  const { tickets, getGrandTotal, clearCart, removeTicket, updateQuantity } = useCartStore();
  
  if (tickets.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <h2 className="text-4xl font-serif font-black">Your Cart is Empty</h2>
          <p className="text-xl text-white/80">Add some exclusive events to get started</p>
          <Link href="/" className="inline-block bg-accent-gold text-primary px-10 py-5 rounded-2xl font-bold hover:scale-105 transition-all text-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-6xl mx-auto">
          <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-8 lg:p-12 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-serif font-black text-white mb-4">
                Shopping Cart
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Review your selected events and manage quantities
              </p>
            </div>

            <div className="space-y-6">
              {tickets.map((ticket) => {
                const eventData = [...concerts, ...culturalEvents, ...cafesRestaurants].find(e => e.id === ticket.eventId) as AnyEvent | undefined;
                
                if (!eventData) return null;

                return (
                  <div key={ticket.eventId} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-white/10 grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-8">
                    <div className="flex items-center space-x-4">
                      <Image 
                        src={eventData.image} 
                        alt={eventData.title}
                        width={80}
                        height={50}
                        className="rounded-xl object-cover w-20 h-12 lg:w-24 lg:h-16 flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <h4 className="text-lg lg:text-xl font-semibold text-white truncate">{eventData.title}</h4>
                        <p className="text-white/80 text-sm">{eventData.location}</p>
                        <p className="text-xs text-white/60">{eventData.date}</p>
                      </div>
                    </div>
                    
                    <div className="text-accent-gold text-lg font-bold text-center lg:text-left">
                      ${ticket.pricePerTicket.toLocaleString()} × {ticket.quantity} =     {ticket.lineTotal.toLocaleString()} <button
                        onClick={() => removeTicket(ticket.eventId)}
                        className=" px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 font-medium rounded-xl transition-all duration-100 border border-red-500/30 text-sm whitespace-nowrap ml-4"
                      >
                        Remove
                      </button>

                    </div>
                    
                    <div className="  sm:flex-row items-center justify-center lg:justify-end space-y-4 sm:space-y-0 sm:space-x-4">
                      <QuantitySelectorClient 
                        initialQuantity={ticket.quantity}
                        maxTickets={eventData.maxTickets || 10}
                        onQuantityChange={(q) => updateQuantity(ticket.eventId, q)}
                      />
                      <div className="text-xl font-black text-accent-gold min-w-[100px] text-center">
                      </div>
                      
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end space-y-4 lg:space-y-0">
                <button
                  onClick={clearCart}
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-all duration-300 text-lg"
                >
                  Clear All ({tickets.length} items)
                </button>
                <div className="text-3xl lg:text-4xl font-black">
                  <span className="text-white mr-4">Total:</span>
                  <span className="text-accent-gold">${getGrandTotal().toLocaleString()}</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/checkout" 
                  className="flex-1 text-center py-6 px-12 bg-gradient-to-r from-accent-gold via-yellow-400 to-orange-400 text-primary font-bold rounded-3xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-500 shadow-2xl text-xl uppercase tracking-wider group"
                >
                 
                  <span className="block text-sm font-normal mt-1 opacity-90">${getGrandTotal().toLocaleString()}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

