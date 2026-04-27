import {NextResponse} from 'next/server';
import Stripe from 'stripe';
import {calculateOrderTotal, hasStripeConfig, type CheckoutItem} from '@/lib/checkout';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const items = (body?.items || []) as CheckoutItem[];
  const locale = body?.locale || 'ru';

  if (!items.length) {
    return NextResponse.json({error: 'Cart is empty'}, {status: 400});
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

  if (!hasStripeConfig()) {
    return NextResponse.json({
      url: `${appUrl}/${locale}/order/success?session_id=demo_session`,
      mode: 'demo'
    });
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: '2026-04-22.dahlia'
  });

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: 'eur',
        unit_amount: Math.round(item.price * 100),
        product_data: {
          name: `${item.name} · ${item.size}`
        }
      }
    })),
    success_url: `${appUrl}/${locale}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/${locale}/order`,
    metadata: {
      locale,
      total: String(calculateOrderTotal(items))
    }
  });

  return NextResponse.json({url: session.url, mode: 'stripe'});
}
