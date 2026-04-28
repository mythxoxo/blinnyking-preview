'use client';

import Image from 'next/image';
import {Check, Plus} from 'lucide-react';
import {useState} from 'react';
import {useTranslations} from 'next-intl';
import {MenuItem} from '@/data/menu';
import {useCart} from '@/lib/store/cartStore';
import {cn} from '@/lib/utils';

export function MenuCard({item}: {item: MenuItem; locale: string}) {
  const t = useTranslations();
  const addItem = useCart((state) => state.addItem);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      id: item.id,
      name: t(item.nameKey),
      nameKey: item.nameKey,
      price: Math.min(...Object.values(item.prices)),
      image: item.imageUrl
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition duration-250 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-24px_rgba(80,35,10,0.35)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image src={item.imageUrl} alt={t(item.nameKey)} fill className="object-cover transition duration-300 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" unoptimized />
        {item.tags?.[0] ? (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-white">
            {t(`tags.${item.tags[0]}`)}
          </span>
        ) : null}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-text">{t(item.nameKey)}</h3>
        <p className="mt-2 text-sm leading-6 text-text-muted">{t(item.descKey)}</p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-lg font-semibold text-text">€{Math.min(...Object.values(item.prices)).toFixed(2)}</span>
          <button
            type="button"
            onClick={handleAdd}
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white transition duration-200 hover:scale-110',
              added && 'bg-green-600'
            )}
            aria-label={t('cart.addToCart')}
          >
            {added ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {added ? <div className="px-5 pb-5 text-sm font-medium text-primary">{t('cart.added')} ✓</div> : null}
    </article>
  );
}
