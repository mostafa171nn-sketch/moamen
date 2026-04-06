'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    gsap.from('h1 span', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      stagger: 0.3,
      ease: 'power3.out'
    });

    gsap.to('.floating-button', {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="relative h-[100vh] md:h-screen flex items-center justify-start overflow-hidden pt-24">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/9.jpg"
            alt="Luxury Egypt background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 lg:px-12 max-w-7xl flex flex-col lg:flex-row items-center lg:items-start lg:gap-24 h-full pl-4 lg:pl-16">
          {/* Left Text */}
          <div className="flex-1 lg:w-1/2 px-4 max-w-2xl lg:max-w-lg mb-8 md:mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl font-serif font-bold tracking-tight leading-[0.85] lg:leading-tight mt-[4rem] md:mt-[5.5rem] drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] [text-shadow:_0_4px_8px_rgba(212,175,55,0.4)] mb-8">
              <span className="block font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text text-transparent">Enjoy</span>
              <span className="font-black bg-gradient-to-r from-accent-gold to-yellow-400 bg-clip-text xl:text-9xl text-transparent block">Hidden</span>
              <span className='sm:text-9xl xl:text-9xl'>Experiences</span>
            </h1>
            <div className="flex justify-center block md:hidden">
              <Link
                href="/concerts"
                className="group relative z-40 w-fit px-6 py-3 text-base bg-white/10 backdrop-blur-xl border border-white/30 rounded-full font-semibold text-white hover:bg-white hover:text-primary hover:shadow-2xl hover:shadow-accent-gold/25 transition-all duration-500 group-hover:scale-105 whitespace-nowrap"
              >
                View Experiences
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold via-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110 animate-pulse" />
              </Link>
            </div>
          </div>

          {/* Right Images Grid */}
          
        </div>

        {/* Bottom CTA - Desktop only */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 text-center px-4 z-40 hidden md:block">
          <div className="flex items-center space-x-6 md:space-x-8 max-w-full">
            <div className="w-20 h-px bg-white/30 hidden md:block" />
            <Link
              href="/concerts"
              className="group relative z-40 w-fit px-12 py-3 md:px-12 md:py-4 lg:px-14 lg:py-4 bg-white/10 backdrop-blur-xl border border-white/30 rounded-full text-lg md:text-xl lg:text-2xl font-semibold text-white hover:bg-white hover:text-primary hover:shadow-2xl hover:shadow-accent-gold/25 transition-all duration-500 group-hover:scale-105 whitespace-nowrap"
            >
              View Experiences
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-gold via-yellow-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110 animate-pulse" />
            </Link>
            <div className="w-20 h-px bg-white/30 hidden md:block" />
          </div>
        </div>
      </section>
    </main>
  );
}
