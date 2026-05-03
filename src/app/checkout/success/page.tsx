'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/Navbar';
import { useCartStore } from '@/store/cartStore';
import Link from 'next/link';
import Image from 'next/image';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCartStore();

  useEffect(() => {
    // Clear cart on success
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/95 via-black/50 to-primary">
      <Navbar />
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-2xl mx-auto text-center bg-glass-bg-light backdrop-blur-2xl rounded-3xl border border-glass-border shadow-2xl p-12 lg:p-16">
          <div className="w-32 h-32 bg-gradient-to-r from-accent-gold to-yellow-400 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
            <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-serif font-black text-white mb-6">
            Thank You!
          </h1>
          
          <p className="text-xl text-white/90 mb-4">
            Your payment was successful
          </p>
          
          <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">
            Session ID: <span className="font-mono bg-white/10 px-3 py-1 rounded-xl text-sm">{sessionId || 'N/A'}</span>
          </p>

          <div className="space-y-4 mb-12">
            <Link 
              href="/"
              className="block w-full bg-gradient-to-r from-accent-gold to-yellow-400 text-primary font-bold py-6 px-10 rounded-2xl hover:scale-105 transition-all shadow-xl text-xl uppercase tracking-wide"
            >
              Discover More Experiences
            </Link>
            <Link 
              href="/cart"
              className="block w-full bg-white/20 hover:bg-white/30 text-white font-bold py-6 px-10 rounded-2xl border border-white/30 transition-all text-lg"
            >
              View Cart (Empty)
            </Link>
          </div>

          <div className="text-white/60 text-sm pt-8 border-t border-white/20">
            <p>Your exclusive tickets have been confirmed. Check your email for details.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

