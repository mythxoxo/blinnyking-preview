import {NextResponse} from 'next/server';
import Stripe from 'stripe';

export async function POST(request: Request) {
  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');

  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET || !signature) {
    return NextResponse.json({received: true, mode: 'stub'});
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2026-04-22.dahlia'
  });

  try {
    const event = stripe.webhooks.constructEvent(payload, signature, process.env.STRIPE_WEBHOOK_SECRET);

    if (event.type === 'checkout.session.completed') {
      return NextResponse.json({received: true, event: event.type, status: 'paid'});
    }

    return NextResponse.json({received: true, event: event.type});
  } catch {
    return NextResponse.json({error: 'Invalid webhook signature'}, {status: 400});
  }
}
