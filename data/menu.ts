export type Category = 'savory' | 'sweet' | 'lunch' | 'drinks' | 'combos';

export type MenuItem = {
  slug: string;
  key: string;
  category: Category;
  price: number;
  sizes: string[];
  image: string;
  badge?: string;
  extras: {key: string; price: number}[];
};

export const categories: Category[] = ['savory', 'sweet', 'lunch', 'drinks', 'combos'];

export const menuItems: MenuItem[] = [
  {
    slug: 'ham-cheese-classic',
    key: 'hamCheeseClassic',
    category: 'savory',
    price: 8.9,
    sizes: ['Ø30', 'Ø40'],
    image: 'Savory signature',
    badge: 'bestSeller',
    extras: [{key: 'extraCheese', price: 1.2}, {key: 'garlicSauce', price: 0.9}]
  },
  {
    slug: 'salmon-dill-cream',
    key: 'salmonDillCream',
    category: 'savory',
    price: 11.5,
    sizes: ['Ø30', 'Ø40'],
    image: 'Nordic salmon',
    extras: [{key: 'capers', price: 0.8}, {key: 'lemonAioli', price: 0.9}]
  },
  {
    slug: 'nutella-banana',
    key: 'nutellaBananaDream',
    category: 'sweet',
    price: 7.8,
    sizes: ['Ø30', 'Ø40'],
    image: 'Sweet classic',
    extras: [{key: 'vanillaIceCream', price: 1.5}, {key: 'strawberries', price: 1.8}]
  },
  {
    slug: 'berries-cream',
    key: 'berriesCream',
    category: 'sweet',
    price: 8.4,
    sizes: ['Ø30', 'Ø40'],
    image: 'Berry dessert',
    extras: [{key: 'extraBerrySauce', price: 1.1}, {key: 'mascarpone', price: 1.6}]
  },
  {
    slug: 'lunch-soup-combo',
    key: 'lunchSoupCombo',
    category: 'lunch',
    price: 9.9,
    sizes: ['set'],
    image: 'Lunch set',
    badge: 'weekday',
    extras: [{key: 'kefirDrink', price: 1.9}, {key: 'dessertBliny', price: 3.4}]
  },
  {
    slug: 'iced-latte',
    key: 'icedLatte',
    category: 'drinks',
    price: 4.8,
    sizes: ['350ml'],
    image: 'Coffee',
    extras: [{key: 'oatMilk', price: 0.6}, {key: 'vanillaSyrup', price: 0.4}]
  },
  {
    slug: 'family-combo',
    key: 'familyComboFor2',
    category: 'combos',
    price: 22.9,
    sizes: ['combo'],
    image: 'Combo tray',
    badge: 'goodValue',
    extras: [{key: 'extraSavoryPancake', price: 5.5}, {key: 'freshJuice', price: 2.2}]
  },
  {
    slug: 'chicken-mushroom-melt',
    key: 'chickenMushroomMelt',
    category: 'savory',
    price: 10.7,
    sizes: ['Ø30', 'Ø40'],
    image: 'Hearty lunch',
    extras: [{key: 'baconCrumble', price: 1.4}, {key: 'houseSalad', price: 2.9}]
  }
];

export const featuredItems = menuItems.slice(0, 4);

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.slug === slug);
}
