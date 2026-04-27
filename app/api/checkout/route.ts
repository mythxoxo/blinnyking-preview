import {NextResponse} from 'next/server';

export async function POST() {
  return NextResponse.json({
    url: '/ru/order/success?session_id=demo_session'
  });
}
