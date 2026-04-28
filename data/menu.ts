export type Category = 'savory' | 'sweet' | 'lunch' | 'combos' | 'drinks';
export type ItemSize = 'S' | 'L';

export type MenuItem = {
  id: string;
  category: Category;
  nameKey: string;
  descKey: string;
  prices: Partial<Record<ItemSize, number>>;
  imageUrl: string;
  tags?: string[];
  available: boolean;
};

export const categories: Category[] = ['savory', 'sweet', 'lunch', 'combos', 'drinks'];

export const menuItems: MenuItem[] = [
  {
    id: 'ham-cheese',
    category: 'savory',
    nameKey: 'menu.hamCheese.name',
    descKey: 'menu.hamCheese.description',
    prices: {S: 8.9, L: 11.5},
    imageUrl: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&q=75',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'salmon-cream',
    category: 'savory',
    nameKey: 'menu.salmonCream.name',
    descKey: 'menu.salmonCream.description',
    prices: {S: 10.9, L: 13.9},
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=400&q=75',
    tags: ['popular'],
    available: true
  },
  {
    id: 'chicken-mushroom',
    category: 'savory',
    nameKey: 'menu.chickenMushroom.name',
    descKey: 'menu.chickenMushroom.description',
    prices: {S: 9.8, L: 12.8},
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=75',
    available: true
  },
  {
    id: 'spinach-feta',
    category: 'savory',
    nameKey: 'menu.spinachFeta.name',
    descKey: 'menu.spinachFeta.description',
    prices: {S: 9.2, L: 11.9},
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=75',
    available: true
  },
  {
    id: 'nutella-banana',
    category: 'sweet',
    nameKey: 'menu.nutellaBanana.name',
    descKey: 'menu.nutellaBanana.description',
    prices: {S: 7.9, L: 10.4},
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=75',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'berry-cream',
    category: 'sweet',
    nameKey: 'menu.berryCream.name',
    descKey: 'menu.berryCream.description',
    prices: {S: 8.2, L: 10.8},
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75',
    available: true
  },
  {
    id: 'caramel-apple',
    category: 'sweet',
    nameKey: 'menu.caramelApple.name',
    descKey: 'menu.caramelApple.description',
    prices: {S: 8.1, L: 10.6},
    imageUrl: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&q=75',
    available: true
  },
  {
    id: 'curd-berries',
    category: 'sweet',
    nameKey: 'menu.curdBerries.name',
    descKey: 'menu.curdBerries.description',
    prices: {S: 8.4, L: 11.1},
    imageUrl: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=400&q=75',
    available: true
  },
  {
    id: 'lunch-ham-cheese',
    category: 'lunch',
    nameKey: 'menu.lunchHamCheese.name',
    descKey: 'menu.lunchHamCheese.description',
    prices: {S: 7.1, L: 9.2},
    imageUrl: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=400&q=75',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'lunch-chicken',
    category: 'lunch',
    nameKey: 'menu.lunchChicken.name',
    descKey: 'menu.lunchChicken.description',
    prices: {S: 7.6, L: 9.8},
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=75',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'family-combo',
    category: 'combos',
    nameKey: 'menu.familyCombo.name',
    descKey: 'menu.familyCombo.description',
    prices: {S: 22.9},
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=75',
    tags: ['value'],
    available: true
  },
  {
    id: 'sweet-combo',
    category: 'combos',
    nameKey: 'menu.sweetCombo.name',
    descKey: 'menu.sweetCombo.description',
    prices: {S: 18.5},
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=75',
    available: true
  },
  {
    id: 'iced-latte',
    category: 'drinks',
    nameKey: 'menu.icedLatte.name',
    descKey: 'menu.icedLatte.description',
    prices: {S: 4.8},
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=75',
    available: true
  },
  {
    id: 'berry-mors',
    category: 'drinks',
    nameKey: 'menu.berryMors.name',
    descKey: 'menu.berryMors.description',
    prices: {S: 3.9},
    imageUrl: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=75',
    available: true
  }
];

export const featuredItems = menuItems.filter((item) => ['ham-cheese', 'salmon-cream', 'nutella-banana'].includes(item.id));

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.id === slug);
}
