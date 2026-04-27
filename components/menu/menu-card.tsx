import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {MenuItem} from '@/data/menu';
import {ActionLink, Pill, PlaceholderImage} from '@/components/shared/ui';

export async function MenuCard({item, locale}: {item: MenuItem; locale: string}) {
  const t = await getTranslations({locale, namespace: 'menuPage'});

  return (
    <div className="flex h-full flex-col rounded-[30px] border border-orange-100 bg-white p-4 shadow-sm shadow-orange-950/5">
      <PlaceholderImage label={item.image} className="min-h-[220px]" />
      <div className="mt-5 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold text-stone-950">{item.name}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
          </div>
          <div className="text-lg font-semibold text-stone-950">€{item.price.toFixed(2)}</div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{item.category}</Pill>
          {item.badge ? <Pill>{item.badge}</Pill> : null}
          {item.sizes.map((size) => (
            <span key={size} className="rounded-full border border-stone-200 px-3 py-1 text-xs font-medium text-stone-600">
              {size}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ActionLink href={`/${locale}/menu/${item.slug}`}>{t('viewDetails')}</ActionLink>
          <Link href={`/${locale}/cart`} className="text-sm font-semibold text-orange-700 transition hover:text-orange-800">
            {t('addToCartLink')}
          </Link>
        </div>
      </div>
    </div>
  );
}
