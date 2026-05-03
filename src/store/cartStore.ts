import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { parsePrice } from '@/types';
import type { Event } from '@/types';

export interface CartTicket {
  eventId: string;
  event: Event; // Store full event data
  quantity: number;
  pricePerTicket: number;
  lineTotal: number;
}

interface CartState {
  tickets: CartTicket[];
  addOrUpdateTicket: (ticket: Omit<CartTicket, 'lineTotal'>) => void;
  updateQuantity: (eventId: string, quantity: number) => void;
  removeTicket: (eventId: string) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getGrandTotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      tickets: [],
      addOrUpdateTicket: (newTicket) => {
        const lineTotal = newTicket.pricePerTicket * newTicket.quantity;
        set(({ tickets }) => {
          const existingIndex = tickets.findIndex((t) => t.eventId === newTicket.eventId);
          if (existingIndex >= 0) {
            const updated = [...tickets];
            updated[existingIndex] = { ...newTicket, lineTotal };
            return { tickets: updated };
          }
          return { tickets: [...tickets, { ...newTicket, lineTotal }] };
        });
      },
      updateQuantity: (eventId, quantity) => {
        set(({ tickets }) => {
          const existingIndex = tickets.findIndex((t) => t.eventId === eventId);
          if (existingIndex >= 0 && quantity > 0) {
            const updated = [...tickets];
            const pricePer = updated[existingIndex].pricePerTicket;
            updated[existingIndex] = { ...updated[existingIndex], quantity, lineTotal: pricePer * quantity };
            return { tickets: updated };
          } else if (existingIndex >= 0 && quantity === 0) {
            const filtered = tickets.filter((t) => t.eventId !== eventId);
            return { tickets: filtered };
          }
          return { tickets };
        });
      },
      removeTicket: (eventId) => set(({ tickets }) => ({ tickets: tickets.filter((t) => t.eventId !== eventId) })),
      clearCart: () => set({ tickets: [] }),
      getTotalItems: () => get().tickets.reduce((sum, t) => sum + t.quantity, 0),
      getGrandTotal: () => get().tickets.reduce((sum, t) => sum + t.lineTotal, 0),
    }),
    {
      name: 'hiddengo-cart',
    }
  )
);

