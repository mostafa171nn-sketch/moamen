'use client';

import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import QuantitySelectorClient from './QuantitySelectorClient';
import { concerts } from '@/data/concerts';
import { culturalEvents } from '@/data/culturalEvents';
import { cafesRestaurants } from '@/data/cafesRestaurants';

export default function CheckoutPage() {
  const { tickets, getGrandTotal, clearCart, removeTicket, updateQuantity } = useCartStore();
  
  if (tickets.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary flex items-center justify-center">
        <div className="text-center text-white space-y-4">
          <h2 className="text-3xl font-serif font-black">Your Cart is Empty</h2>
          <Link href="/" className="inline-block bg-accent-gold text-primary px-8 py-4 rounded-2xl font-bold hover:scale-105 transition-all">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-12 lg:p-16 mb-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-serif font-black text-white mb-4">
                Your Selection
              </h1>
              <p className="text-xl text-white/80">
                Review your exclusive tickets and complete booking
              </p>
            </div>

            <div className="space-y-6 mb-12">
              {tickets.map((ticket) => (
                <div key={ticket.eventId} className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
                  <Image 
                    src={ticket.event.image} 
                    alt={ticket.event.title}
                    width={100}
                    height={60}
                    className="rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xl font-semibold text-white truncate">{ticket.event.title}</h4>
                    <p className="text-white/70 text-sm">{ticket.event.location} • {ticket.event.date}</p>
                    {'performers' in ticket.event && ticket.event.performers && ticket.event.performers.length > 0 && (
                      <p className="text-accent-gold text-sm mt-1">Stars: {ticket.event.performers.join(', ')}</p>
                    )}
                  </div>
                    <div className="text-right lg:text-left space-y-2">
                    <div className="text-lg font-bold text-accent-gold">${ticket.pricePerTicket.toLocaleString()} × {ticket.quantity}</div>
                    <QuantitySelectorClient 
                      initialQuantity={ticket.quantity}
                      maxTickets={ticket.event.maxTickets || 10}
                      onQuantityChange={(q) => updateQuantity(ticket.eventId, q)}
                    />
                    <div className="text-xl font-black text-white">${ticket.lineTotal.toLocaleString()}</div>
                    <button
                      onClick={() => removeTicket(ticket.eventId)}
                      className="text-red-400 hover:text-red-300 text-sm font-medium underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-accent-gold/20 to-yellow-400/20 backdrop-blur-xl rounded-2xl p-8 border border-accent-gold/30">
              <div className="flex justify-between items-center text-2xl lg:text-3xl">
                <span className="font-serif font-black text-white">Grand Total</span>
                <span className="text-3xl lg:text-4xl font-black text-accent-gold">${getGrandTotal().toLocaleString()}</span>
              </div>
            </div>
          </div>

          <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-12 lg:p-16">
            <h3 className="text-3xl font-semibold text-white mb-8 text-center">Booking Information</h3>
            <form className="space-y-6 max-w-2xl mx-auto">
              <div>
                <label className="block text-white/90 font-medium mb-3">Full Name</label>
                <input
                  type="text"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-3">Email</label>
                <input
                  type="email"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white/90 font-medium mb-3">Phone</label>
                <input
                  type="tel"
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="+20 123 456 7890"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={clearCart}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-2xl border border-white/20 transition-all duration-300"
                >
                  Clear Cart
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold text-xl py-5 px-8 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-500 uppercase tracking-wide shadow-lg"
                >
                  Confirm & Pay Securely
                </button>
              </div>
            </form>

            <div className="text-center pt-8 border-t border-white/20 mt-8">
              <p className="text-white/70 text-sm">
                Secure payment powered by world-class encryption. Your privacy guaranteed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

