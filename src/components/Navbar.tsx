'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useCartStore } from '@/store/cartStore';
import CartBadge from './CartBadge';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/concerts', label: 'Concerts' },
  { href: '/cultural-events', label: 'Cultural Events' },
  { href: '/cafes-restaurants', label: 'Cafes & Restaurants' },
];

export default function Navbar() {
  const pathname = usePathname();
  const cartItemCount = useCartStore((state) => state.getTotalItems());

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-glass-bg-light backdrop-blur-xl border-b-glass-border shadow-[0_8px_32px_rgba(10,25,47,0.3)]' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link 
            href="/" 
            className="birthstone-regular text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-black bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 flex-shrink-0"
          >
            Hiddengo
          </Link>
          <ul className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`relative font-medium text-lg transition-all duration-300 hover:text-accent-gold ${
                    pathname === item.href ? 'text-accent-gold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-gold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <CartBadge />
          </ul>
          <button
            className="md:hidden flex flex-col justify-center items-center space-y-1 p-1 w-8 h-8 rounded-lg hover:bg-white/10 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'}`} />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-[99] bg-glass-bg-light/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 pt-24">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-3xl font-semibold text-white hover:text-accent-gold transition-all duration-300 py-3 px-6 rounded-lg hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button
              className="absolute top-6 right-6 p-3 rounded-xl hover:bg-white/20 transition-all duration-300 text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

