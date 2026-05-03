'use client';

import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import QuantitySelectorClient from './QuantitySelectorClient';
import { concerts } from '@/data/concerts';
import { culturalEvents } from '@/data/culturalEvents';
import { cafesRestaurants } from '@/data/cafesRestaurants';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { tickets, getGrandTotal, clearCart, removeTicket, updateQuantity } = useCartStore();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    governorate: '',
    city: '',
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tickets,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Failed to create payment session');
      }
    } catch (err) {
      setError('Payment initialization failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-24 lg:py-32">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Order Summary Sidebar */}
          <div className="lg:order-2">
            <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-8 lg:p-12 sticky top-24">
              <h2 className="text-3xl lg:text-4xl font-serif font-black text-white mb-8 text-center">
                Order Summary
              </h2>
              <div className="space-y-4 mb-8">
                {tickets.map((ticket) => (
                  <div key={ticket.eventId} className="flex items-center space-x-4 p-4 bg-white/5 rounded-xl">
                    <Image 
                      src={ticket.event.image} 
                      alt={ticket.event.title}
                      width={60}
                      height={40}
                      className="rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-semibold text-sm truncate">{ticket.event.title}</p>
                      <p className="text-white/70 text-xs">{ticket.event.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-accent-gold text-sm">${ticket.lineTotal.toLocaleString()}</p>
                      <p className="text-white/60 text-xs">x{ticket.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-accent-gold/30 to-yellow-400/30 backdrop-blur-xl rounded-2xl p-6 border border-accent-gold/50">
                <div className="flex justify-between text-xl font-black">
                  <span>Total</span>
                  <span className="text-accent-gold">${getGrandTotal().toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-12 lg:p-16 lg:order-1">
            <h3 className="text-3xl font-serif font-black text-white mb-12 text-center">Checkout</h3>
            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-300 p-6 rounded-2xl backdrop-blur-xl mb-8 animate-pulse">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white/90 font-medium mb-3">Full Name *</label>
                <input
                  required
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-white/90 font-medium mb-3">Email *</label>
                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white/90 font-medium mb-3">Phone *</label>
                <input
                  required
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="+20 123 456 7890"
                />
              </div>
              
              <div>
                <label className="block text-white/90 font-medium mb-3">Governorate</label>
                <select
                  name="governorate"
                  value={formData.governorate}
                  onChange={handleChange}
                  className="w-full p-5 lg:p-6 rounded-2xl bg border border-white/20 text-white focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                >
                  <option value="">Select Governorate</option>
                  <option value="Cairo">Cairo</option>
                  <option value="Giza">Giza</option>
                  <option value="Alexandria">Alexandria</option>
                  <option value="Aswan">Aswan</option>
                  <option value="Luxor">Luxor</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white/90 font-medium mb-3">City</label>
                <input
                  name="city"
                  type="text"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full p-5 lg:p-6 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:border-accent-gold focus:outline-none focus:ring-4 focus:ring-accent-gold/20 transition-all duration-300 text-lg backdrop-blur-xl"
                  placeholder="City"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  type="button"
                  onClick={clearCart}
                  disabled={loading}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-5 px-8 rounded-2xl border border-white/20 transition-all duration-300 disabled:opacity-50"
                >
                  Clear Cart
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold text-xl py-5 px-8 rounded-2xl hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/50 transition-all duration-500 uppercase tracking-wide shadow-lg disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
                >
                  {loading ? 'Processing...' : `Pay Securely $${getGrandTotal().toLocaleString()}`}
                </button>
              </div>
            </form>

            <div className="text-center pt-12 border-t border-white/20">
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

