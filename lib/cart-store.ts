'use client';

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size: 'S' | 'L';
  quantity: number;
  imageUrl?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string, size: 'S' | 'L') => void;
  updateQuantity: (id: string, size: 'S' | 'L', quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((entry) => entry.id === item.id && entry.size === item.size);
          if (existing) {
            return {
              items: state.items.map((entry) =>
                entry.id === item.id && entry.size === item.size
                  ? {...entry, quantity: entry.quantity + 1}
                  : entry
              )
            };
          }

          return {
            items: [...state.items, {...item, quantity: 1}]
          };
        }),
      removeItem: (id, size) =>
        set((state) => ({
          items: state.items.filter((item) => !(item.id === id && item.size === size))
        })),
      updateQuantity: (id, size, quantity) =>
        set((state) => ({
          items:
            quantity <= 0
              ? state.items.filter((item) => !(item.id === id && item.size === size))
              : state.items.map((item) =>
                  item.id === id && item.size === size ? {...item, quantity} : item
                )
        })),
      clearCart: () => set({items: []}),
      total: () => get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
      count: () => get().items.reduce((sum, item) => sum + item.quantity, 0)
    }),
    {
      name: 'blinny-king-cart'
    }
  )
);
