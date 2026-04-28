'use client';

import Link from 'next/link';
import {useMemo, useState} from 'react';
import {useLocale, useTranslations} from 'next-intl';
import {BOLT_URL, WOLT_URL} from '@/data/locations';
import {useCartStore} from '@/lib/cart-store';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default function OrderPage() {
  const t = useTranslations();
  const locale = useLocale();
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const [phone, setPhone] = useState('+372');
  const [loading, setLoading] = useState(false);

  const isPhoneValid = useMemo(() => /^\+372\d{7,8}$/.test(phone.replace(/\s+/g, '')), [phone]);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({items, locale})
      });
      const data = await response.json();
      if (data?.url) {
        window.location.href = data.url;
        return;
      }
    } catch {}
    setLoading(false);
  };

  return (
    <Section>
      <SectionHeader eyebrow={t('nav.order')} title={t('order.title')} description={t('order.description')} />

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-text">{t('nav.cart')}</h3>
            {items.length === 0 ? (
              <div className="mt-4 space-y-4">
                <p className="text-text-muted">{t('cart.empty')}</p>
                <Link href={`/${locale}/menu`} className="inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">
                  {t('cart.goToMenu')}
                </Link>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border p-4">
                    <div>
                      <p className="font-semibold text-text">{item.name}</p>
                      <p className="mt-1 text-sm text-text-muted">{t(`size.${item.size}`)} · €{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <button type="button" onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="h-9 w-9 rounded-full bg-tag text-text">−</button>
                      <span className="min-w-5 text-center font-semibold text-text">{item.quantity}</span>
                      <button type="button" onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="h-9 w-9 rounded-full bg-tag text-text">+</button>
                      <button type="button" onClick={() => removeItem(item.id, item.size)} className="text-sm font-medium text-primary">{t('common.remove')}</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
            <h3 className="text-xl font-semibold text-text">{t('order.formTitle')}</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <Input placeholder={t('order.name')} required />
              </div>
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('order.phone')} required />
              <Input type="email" placeholder={t('order.email')} required />
              <div className="md:col-span-2">
                <Input value={t('order.pickupOnly')} readOnly />
              </div>
              <div className="md:col-span-2">
                <Textarea placeholder={t('order.comment')} />
              </div>
              <label className="md:col-span-2 flex items-center gap-3 text-sm text-text">
                <input type="checkbox" />
                {t('order.saveData')}
              </label>
              {!isPhoneValid ? <p className="md:col-span-2 text-sm text-red-600">{t('order.phoneHint')}</p> : null}
            </div>
          </div>

          <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
            <p className="text-sm font-semibold text-text">{t('order.deliveryVia')}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={BOLT_URL} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#1C1C1C] px-5 py-3 text-sm font-semibold text-white">{t('order.deliveryBolt')}</a>
              <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#009DE0] px-5 py-3 text-sm font-semibold text-white">{t('order.deliveryWolt')}</a>
            </div>
          </div>
        </div>

        <aside className="rounded-[32px] border border-border bg-surface p-6 shadow-soft h-fit">
          <h3 className="text-xl font-semibold text-text">{t('order.summaryTitle')}</h3>
          <div className="mt-5 space-y-3 text-sm text-text-muted">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex justify-between gap-3">
                <span>{item.name} × {item.quantity}</span>
                <span>€{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2 border-t border-border pt-4 text-sm text-text-muted">
            <div className="flex justify-between"><span>{t('order.subtotal')}</span><span>€{total.toFixed(2)}</span></div>
            <div className="flex justify-between"><span>{t('loyalty.discount')}</span><span>−€0.00</span></div>
            <div className="flex justify-between text-base font-semibold text-text"><span>{t('order.total')}</span><span>€{total.toFixed(2)}</span></div>
          </div>
          <button type="button" disabled={!items.length || !isPhoneValid || loading} onClick={handleCheckout} className="mt-6 w-full rounded-full bg-primary px-5 py-4 text-sm font-semibold text-white transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? '...' : t('order.pay')}
          </button>
        </aside>
      </div>
    </Section>
  );
}
