'use client';

import {useMemo, useState} from 'react';
import {X} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {MenuItem} from '@/data/menu';
import {useCartStore} from '@/lib/cart-store';
import {MediaImage, Pill} from '@/components/shared/ui';

export function MenuCard({item}: {item: MenuItem; locale: string}) {
  const t = useTranslations();
  const addItem = useCartStore((state) => state.addItem);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState<'S' | 'L'>((item.prices.L ? 'S' : 'S') as 'S' | 'L');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const sizes = useMemo(() => (['S', 'L'] as const).filter((key) => item.prices[key]), [item.prices]);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i += 1) {
      addItem({
        id: item.id,
        name: t(item.nameKey),
        price: item.prices[size] || 0,
        size,
        imageUrl: item.imageUrl
      });
    }

    setOpen(false);
    setQuantity(1);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2200);
  };

  return (
    <>
      <div className="flex h-full flex-col rounded-[30px] border border-border bg-surface p-4 shadow-soft">
        <MediaImage src={item.imageUrl} alt={t(item.nameKey)} className="h-56" />
        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-xl font-semibold text-text">{t(item.nameKey)}</h3>
              <p className="mt-2 text-sm leading-6 text-text-muted">{t(item.descKey)}</p>
            </div>
            <div className="text-lg font-semibold text-primary">€{Math.min(...Object.values(item.prices)).toFixed(2)}</div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <Pill>{t(`categories.${item.category}`)}</Pill>
            {item.tags?.map((tag) => <Pill key={tag}>{t(`tags.${tag}`)}</Pill>)}
          </div>
          <button
            type="button"
            onClick={() => {
              setSize(sizes[0] || 'S');
              setOpen(true);
            }}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
          >
            {t('cart.addToCart')}
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-[32px] bg-surface p-6 shadow-2xl">
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-2xl font-semibold text-text">🥞 {t(item.nameKey)}</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-text-muted hover:bg-tag">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-text">{t('menu.size')}</p>
              {sizes.map((option) => (
                <label key={option} className="flex cursor-pointer items-center justify-between rounded-2xl border border-border px-4 py-3 text-sm text-text">
                  <span className="flex items-center gap-3">
                    <input type="radio" name={`size-${item.id}`} checked={size === option} onChange={() => setSize(option)} />
                    {t(`size.${option}`)}
                  </span>
                  <span>€{item.prices[option]?.toFixed(2)}</span>
                </label>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl border border-border px-4 py-3">
              <span className="text-sm font-semibold text-text">{t('menu.quantity')}</span>
              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} className="h-9 w-9 rounded-full bg-tag text-lg text-text">−</button>
                <span className="min-w-6 text-center font-semibold text-text">{quantity}</span>
                <button type="button" onClick={() => setQuantity((value) => value + 1)} className="h-9 w-9 rounded-full bg-tag text-lg text-text">+</button>
              </div>
            </div>

            <button type="button" onClick={handleAdd} className="mt-6 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover">
              {t('cart.addToCart')}
            </button>
          </div>
        </div>
      ) : null}

      {added ? (
        <div className="fixed bottom-4 right-4 z-[80] rounded-full bg-text px-4 py-3 text-sm font-semibold text-white shadow-lg">
          {t('cart.added')}
        </div>
      ) : null}
    </>
  );
}
