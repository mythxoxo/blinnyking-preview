export type CheckoutItem = {
  id: string;
  name: string;
  price: number;
  size: 'S' | 'L';
  quantity: number;
  imageUrl?: string;
};

export function calculateOrderTotal(items: CheckoutItem[]) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function hasStripeConfig() {
  return Boolean(process.env.STRIPE_SECRET_KEY && process.env.NEXT_PUBLIC_APP_URL);
}
