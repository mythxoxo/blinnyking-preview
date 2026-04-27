export type Category = 'Savory Pancakes' | 'Sweet Pancakes' | 'Lunch' | 'Drinks' | 'Combos';

export type MenuItem = {
  slug: string;
  name: string;
  category: Category;
  description: string;
  price: number;
  sizes: string[];
  image: string;
  badge?: string;
  extras: {name: string; price: number}[];
};

export const categories: Category[] = [
  'Savory Pancakes',
  'Sweet Pancakes',
  'Lunch',
  'Drinks',
  'Combos'
];

export const menuItems: MenuItem[] = [
  {
    slug: 'ham-cheese-classic',
    name: 'Ham & Cheese Classic',
    category: 'Savory Pancakes',
    description: 'Golden crepe with smoked ham, gooey cheese and herb butter.',
    price: 8.9,
    sizes: ['Ø30', 'Ø40'],
    image: 'Savory signature',
    badge: 'Best seller',
    extras: [{name: 'Extra cheese', price: 1.2}, {name: 'Garlic sauce', price: 0.9}]
  },
  {
    slug: 'salmon-dill-cream',
    name: 'Salmon Dill Cream',
    category: 'Savory Pancakes',
    description: 'Lightly salted salmon, dill cream and pickled onion.',
    price: 11.5,
    sizes: ['Ø30', 'Ø40'],
    image: 'Nordic salmon',
    extras: [{name: 'Capers', price: 0.8}, {name: 'Lemon aioli', price: 0.9}]
  },
  {
    slug: 'nutella-banana',
    name: 'Nutella Banana Dream',
    category: 'Sweet Pancakes',
    description: 'Warm Nutella, sliced banana and roasted hazelnut crunch.',
    price: 7.8,
    sizes: ['Ø30', 'Ø40'],
    image: 'Sweet classic',
    extras: [{name: 'Vanilla ice cream', price: 1.5}, {name: 'Strawberries', price: 1.8}]
  },
  {
    slug: 'berries-cream',
    name: 'Forest Berries & Cream',
    category: 'Sweet Pancakes',
    description: 'Seasonal berry compote, whipped cream and powdered sugar.',
    price: 8.4,
    sizes: ['Ø30', 'Ø40'],
    image: 'Berry dessert',
    extras: [{name: 'Extra berry sauce', price: 1.1}, {name: 'Mascarpone', price: 1.6}]
  },
  {
    slug: 'lunch-soup-combo',
    name: 'Lunch Soup Combo',
    category: 'Lunch',
    description: 'Soup of the day with mini savory pancake and salad.',
    price: 9.9,
    sizes: ['Set'],
    image: 'Lunch set',
    badge: 'Weekday 11–15',
    extras: [{name: 'Kefir drink', price: 1.9}, {name: 'Dessert bliny', price: 3.4}]
  },
  {
    slug: 'iced-latte',
    name: 'Iced Latte',
    category: 'Drinks',
    description: 'Double espresso, cold milk and caramelized syrup.',
    price: 4.8,
    sizes: ['350ml'],
    image: 'Coffee',
    extras: [{name: 'Oat milk', price: 0.6}, {name: 'Vanilla syrup', price: 0.4}]
  },
  {
    slug: 'family-combo',
    name: 'Family Combo for 2',
    category: 'Combos',
    description: 'Two pancakes, two drinks and one shared dessert.',
    price: 22.9,
    sizes: ['Combo'],
    image: 'Combo tray',
    badge: 'Good value',
    extras: [{name: 'Extra savory pancake', price: 5.5}, {name: 'Fresh juice', price: 2.2}]
  },
  {
    slug: 'chicken-mushroom-melt',
    name: 'Chicken Mushroom Melt',
    category: 'Savory Pancakes',
    description: 'Creamy chicken, roasted mushrooms and melted mozzarella.',
    price: 10.7,
    sizes: ['Ø30', 'Ø40'],
    image: 'Hearty lunch',
    extras: [{name: 'Bacon crumble', price: 1.4}, {name: 'House salad', price: 2.9}]
  }
];

export const featuredItems = menuItems.slice(0, 4);

export function getItemBySlug(slug: string) {
  return menuItems.find((item) => item.slug === slug);
}
