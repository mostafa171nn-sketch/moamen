'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';

export default function CartBadge() {
  const count = useCartStore((state) => state.getTotalItems());

  return (
    <li className="relative">
      <Link href="/cart" className="relative font-medium text-lg transition-all duration-300 hover:text-accent-gold flex items-center">
        <span>Cart</span>
        {count > 0 && (
          <span className="ml-2 w-6 h-6 bg-accent-gold text-primary text-xs font-bold rounded-full flex items-center justify-center animate-pulse">
            {count}
          </span>
        )}
      </Link>
    </li>
  );
}

