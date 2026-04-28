'use client';

import {create} from 'zustand';
import {persist} from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  nameKey: string;
  price: number;
  qty: number;
  image: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'qty'>) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === item.id);
          if (existing) {
            return {items: state.items.map((i) => (i.id === item.id ? {...i, qty: i.qty + 1} : i))};
          }
          return {items: [...state.items, {...item, qty: 1}]};
        }),
      removeItem: (id) => set((state) => ({items: state.items.filter((i) => i.id !== id)})),
      updateQty: (id, qty) =>
        set((state) => ({
          items:
            qty <= 0
              ? state.items.filter((i) => i.id !== id)
              : state.items.map((i) => (i.id === id ? {...i, qty} : i))
        })),
      clearCart: () => set({items: []}),
      total: () => get().items.reduce((sum, i) => sum + i.price * i.qty, 0),
      itemCount: () => get().items.reduce((sum, i) => sum + i.qty, 0)
    }),
    {name: 'blinnyking-cart'}
  )
);
