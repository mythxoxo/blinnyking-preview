'use client';

import Link from 'next/link';
import {useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {Button} from '@/components/ui/button';
import {BOLT_URL, WOLT_URL} from '@/data/locations';
import {Input, Textarea} from '@/components/shared/ui';
import {useCart} from '@/lib/store/cartStore';

export default function OrderPage() {
  const t = useTranslations();
  const locale = useLocale();
  const items = useCart((state) => state.items);
  const total = useCart((state) => state.total());
  const updateQty = useCart((state) => state.updateQty);
  const removeItem = useCart((state) => state.removeItem);
  const clearCart = useCart((state) => state.clearCart);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+372');
  const [success, setSuccess] = useState(false);

  const isPhoneValid = useMemo(() => /^\+?[0-9\s]{8,16}$/.test(phone.trim()), [phone]);

  const handleSubmit = () => {
    const pendingOrder = {
      name,
      phone,
      items,
      total,
      createdAt: new Date().toISOString()
    };
    window.localStorage.setItem('blinnyking-pending-order', JSON.stringify(pendingOrder));
    setSuccess(true);
    clearCart();
  };

  if (success) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-text">{t('order.successTitle')}</h1>
        <p className="mt-4 text-text-muted">{t('order.successDescription')}</p>
        <div className="mt-8"><Link href={`/${locale}`}><Button>{t('nav.home')}</Button></Link></div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <div className="rounded-2xl bg-surface p-6">
          <h1 className="text-3xl font-semibold text-text">{t('order.title')}</h1>
          <p className="mt-3 text-text-muted">{t('order.description')}</p>

          {items.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-border bg-white p-10 text-center">
              <div className="text-5xl">🛒</div>
              <p className="mt-4 text-lg font-medium text-text">{t('cart.empty')}</p>
              <div className="mt-6"><Link href={`/${locale}/menu`}><Button variant="outline">{t('cart.goToMenu')}</Button></Link></div>
            </div>
          ) : (
            <div className="mt-8 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="rounded-2xl border border-border bg-white p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-text">{item.name}</h3>
                      <p className="mt-1 text-sm text-text-muted">€{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} className="h-9 w-9 rounded-full bg-tag">−</button>
                      <span className="min-w-6 text-center font-semibold">{item.qty}</span>
                      <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} className="h-9 w-9 rounded-full bg-tag">+</button>
                      <button type="button" onClick={() => removeItem(item.id)} className="text-sm font-medium text-primary">{t('common.remove')}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-surface p-6">
            <h2 className="text-2xl font-semibold text-text">{t('order.formTitle')}</h2>
            <div className="mt-5 space-y-4">
              <Input value={name} onChange={(e) => setName(e.target.value)} placeholder={t('order.name')} />
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('order.phone')} />
              <Textarea placeholder={t('order.comment')} />
              {!isPhoneValid ? <p className="text-sm text-red-600">{t('order.phoneHint')}</p> : null}
              <Button className="w-full" disabled={!items.length || !name || !isPhoneValid} onClick={handleSubmit}>{t('cart.checkout')}</Button>
            </div>
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <h2 className="text-2xl font-semibold text-text">{t('order.summaryTitle')}</h2>
            <div className="mt-5 space-y-3 text-sm text-text-muted">
              {items.map((item) => <div key={item.id} className="flex justify-between"><span>{item.name} × {item.qty}</span><span>€{(item.price * item.qty).toFixed(2)}</span></div>)}
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <div className="flex justify-between text-sm text-text-muted"><span>{t('loyalty.discount')}</span><span>−€0.00</span></div>
              <div className="mt-2 flex justify-between text-lg font-semibold text-text"><span>{t('order.total')}</span><span>€{total.toFixed(2)}</span></div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={BOLT_URL} target="_blank" rel="noopener"><Button variant="ghost">⚡ Bolt</Button></a>
              <a href={WOLT_URL} target="_blank" rel="noopener"><Button variant="ghost">🔵 Wolt</Button></a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
