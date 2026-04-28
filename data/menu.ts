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
    imageUrl: '/images/menu/ham-cheese.jpg',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'salmon-cream',
    category: 'savory',
    nameKey: 'menu.salmonCream.name',
    descKey: 'menu.salmonCream.description',
    prices: {S: 10.9, L: 13.9},
    imageUrl: '/images/menu/salmon-cream.jpg',
    tags: ['popular'],
    available: true
  },
  {
    id: 'chicken-mushroom',
    category: 'savory',
    nameKey: 'menu.chickenMushroom.name',
    descKey: 'menu.chickenMushroom.description',
    prices: {S: 9.8, L: 12.8},
    imageUrl: '/images/menu/chicken-mushroom.jpg',
    available: true
  },
  {
    id: 'spinach-feta',
    category: 'savory',
    nameKey: 'menu.spinachFeta.name',
    descKey: 'menu.spinachFeta.description',
    prices: {S: 9.2, L: 11.9},
    imageUrl: '/images/menu/spinach-feta.jpg',
    available: true
  },
  {
    id: 'nutella-banana',
    category: 'sweet',
    nameKey: 'menu.nutellaBanana.name',
    descKey: 'menu.nutellaBanana.description',
    prices: {S: 7.9, L: 10.4},
    imageUrl: '/images/menu/nutella-banana.jpg',
    tags: ['bestseller'],
    available: true
  },
  {
    id: 'berry-cream',
    category: 'sweet',
    nameKey: 'menu.berryCream.name',
    descKey: 'menu.berryCream.description',
    prices: {S: 8.2, L: 10.8},
    imageUrl: '/images/menu/berry-cream.jpg',
    available: true
  },
  {
    id: 'caramel-apple',
    category: 'sweet',
    nameKey: 'menu.caramelApple.name',
    descKey: 'menu.caramelApple.description',
    prices: {S: 8.1, L: 10.6},
    imageUrl: '/images/menu/berry-cream.jpg',
    available: true
  },
  {
    id: 'curd-berries',
    category: 'sweet',
    nameKey: 'menu.curdBerries.name',
    descKey: 'menu.curdBerries.description',
    prices: {S: 8.4, L: 11.1},
    imageUrl: '/images/menu/berry-cream.jpg',
    available: true
  },
  {
    id: 'lunch-ham-cheese',
    category: 'lunch',
    nameKey: 'menu.lunchHamCheese.name',
    descKey: 'menu.lunchHamCheese.description',
    prices: {S: 7.1, L: 9.2},
    imageUrl: '/images/menu/lunch-ham-cheese.jpg',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'lunch-chicken',
    category: 'lunch',
    nameKey: 'menu.lunchChicken.name',
    descKey: 'menu.lunchChicken.description',
    prices: {S: 7.6, L: 9.8},
    imageUrl: '/images/menu/chicken-mushroom.jpg',
    tags: ['weekday'],
    available: true
  },
  {
    id: 'family-combo',
    category: 'combos',
    nameKey: 'menu.familyCombo.name',
    descKey: 'menu.familyCombo.description',
    prices: {S: 22.9},
    imageUrl: '/images/menu/family-combo.jpg',
    tags: ['value'],
    available: true
  },
  {
    id: 'sweet-combo',
    category: 'combos',
    nameKey: 'menu.sweetCombo.name',
    descKey: 'menu.sweetCombo.description',
    prices: {S: 18.5},
    imageUrl: '/images/menu/sweet-combo.jpg',
    available: true
  },
  {
    id: 'iced-latte',
    category: 'drinks',
    nameKey: 'menu.icedLatte.name',
    descKey: 'menu.icedLatte.description',
    prices: {S: 4.8},
    imageUrl: '/images/menu/iced-latte.jpg',
    available: true
  },
  {
    id: 'berry-mors',
    category: 'drinks',
    nameKey: 'menu.berryMors.name',
    descKey: 'menu.berryMors.description',
    prices: {S: 3.9},
    imageUrl: '/images/menu/berry-mors.jpg',
    available: true
  }
];

export const featuredItems = menuItems.filter((item) => item.tags?.includes('bestseller') || item.tags?.includes('popular')).slice(0, 6);

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.id === slug);
}
