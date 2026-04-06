'use client';

import { useState } from 'react';

interface FilterProps {
  categories: string[];
  onFilter: (category: string) => void;
  activeFilter: string;
}

export default function Filter({ categories, onFilter, activeFilter }: FilterProps) {
  return (
    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-16 lg:mb-24">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilter(category)}
          className={`px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 ${
            activeFilter === category
              ? 'bg-accent-gold text-primary shadow-2xl shadow-accent-gold/25 scale-105'
              : 'bg-white/10 border border-white/30 text-white/90 hover:bg-white/20 hover:border-white/50 hover:scale-105'
          } backdrop-blur-xl hover:shadow-lg`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

