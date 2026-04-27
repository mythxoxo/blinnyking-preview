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
    imageUrl: 'https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1200&q=80',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'salmon-cream',
    category: 'savory',
    nameKey: 'menu.salmonCream.name',
    descKey: 'menu.salmonCream.description',
    prices: {S: 10.9, L: 13.9},
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
    tags: ['popular'],
    available: true
  },
  {
    id: 'chicken-mushroom',
    category: 'savory',
    nameKey: 'menu.chickenMushroom.name',
    descKey: 'menu.chickenMushroom.description',
    prices: {S: 9.8, L: 12.8},
    imageUrl: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'spinach-feta',
    category: 'savory',
    nameKey: 'menu.spinachFeta.name',
    descKey: 'menu.spinachFeta.description',
    prices: {S: 9.2, L: 11.9},
    imageUrl: 'https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'nutella-banana',
    category: 'sweet',
    nameKey: 'menu.nutellaBanana.name',
    descKey: 'menu.nutellaBanana.description',
    prices: {S: 7.9, L: 10.4},
    imageUrl: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=1200&q=80',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'berry-cream',
    category: 'sweet',
    nameKey: 'menu.berryCream.name',
    descKey: 'menu.berryCream.description',
    prices: {S: 8.2, L: 10.8},
    imageUrl: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'caramel-apple',
    category: 'sweet',
    nameKey: 'menu.caramelApple.name',
    descKey: 'menu.caramelApple.description',
    prices: {S: 8.1, L: 10.6},
    imageUrl: 'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'curd-berries',
    category: 'sweet',
    nameKey: 'menu.curdBerries.name',
    descKey: 'menu.curdBerries.description',
    prices: {S: 8.4, L: 11.1},
    imageUrl: 'https://images.unsplash.com/photo-1515467837915-15c4777ba46a?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'lunch-ham-cheese',
    category: 'lunch',
    nameKey: 'menu.lunchHamCheese.name',
    descKey: 'menu.lunchHamCheese.description',
    prices: {S: 7.1, L: 9.2},
    imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'lunch-chicken',
    category: 'lunch',
    nameKey: 'menu.lunchChicken.name',
    descKey: 'menu.lunchChicken.description',
    prices: {S: 7.6, L: 9.8},
    imageUrl: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1200&q=80',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'family-combo',
    category: 'combos',
    nameKey: 'menu.familyCombo.name',
    descKey: 'menu.familyCombo.description',
    prices: {S: 22.9},
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    tags: ['value'],
    available: true
  },
  {
    id: 'sweet-combo',
    category: 'combos',
    nameKey: 'menu.sweetCombo.name',
    descKey: 'menu.sweetCombo.description',
    prices: {S: 18.5},
    imageUrl: 'https://images.unsplash.com/photo-1464306076886-debede6a4c33?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'iced-latte',
    category: 'drinks',
    nameKey: 'menu.icedLatte.name',
    descKey: 'menu.icedLatte.description',
    prices: {S: 4.8},
    imageUrl: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1200&q=80',
    available: true
  },
  {
    id: 'berry-mors',
    category: 'drinks',
    nameKey: 'menu.berryMors.name',
    descKey: 'menu.berryMors.description',
    prices: {S: 3.9},
    imageUrl: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=1200&q=80',
    available: true
  }
];

export const featuredItems = menuItems.filter((item) => item.tags?.includes('bestseller') || item.tags?.includes('popular')).slice(0, 6);

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.id === slug);
}
