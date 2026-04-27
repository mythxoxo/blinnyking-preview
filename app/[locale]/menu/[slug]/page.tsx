import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {getItemBySlug} from '@/data/menu';
import {ActionLink, Pill, PlaceholderImage, Section} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

export default async function ProductPage({params}: {params: {locale: Locale; slug: string}}) {
  const item = getItemBySlug(params.slug);
  const t = await getTranslations({locale: params.locale, namespace: 'menuPage'});
  const cta = await getTranslations({locale: params.locale, namespace: 'cta'});

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <PlaceholderImage label={item.image} className="min-h-[520px]" />
        <div className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <Pill>{t(`categories.${item.category}`)}</Pill>
            {item.badge ? <Pill>{t(`badges.${item.badge}`)}</Pill> : null}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-stone-950">{t(`items.${item.key}.name`)}</h1>
          <p className="mt-4 text-base leading-7 text-stone-600">{t(`items.${item.key}.description`)}</p>
          <div className="mt-6 text-3xl font-semibold text-stone-950">€{item.price.toFixed(2)}</div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">{t('chooseSize')}</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {item.sizes.map((size, index) => (
                <button
                  key={size}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${index === 0 ? 'bg-stone-950 text-white' : 'border border-stone-200 bg-white text-stone-700'}`}
                >
                  {size === 'set' || size === 'combo' ? t(`sizes.${size}`) : size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">{t('extras')}</h2>
            <div className="mt-4 space-y-3">
              {item.extras.map((extra) => (
                <label key={extra.key} className="flex items-center justify-between rounded-2xl border border-stone-200 px-4 py-3 text-sm text-stone-700">
                  <span>{t(`extrasList.${extra.key}`)}</span>
                  <span>+€{extra.price.toFixed(2)}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="inline-flex items-center rounded-full border border-stone-200 bg-white px-3 py-2 text-sm font-semibold text-stone-900">
              − <span className="px-4">1</span> +
            </div>
            <ActionLink href={`/${params.locale}/cart`}>{cta('addToCart')}</ActionLink>
          </div>

          <Link href={`/${params.locale}/menu`} className="mt-6 inline-flex text-sm font-semibold text-orange-700 hover:text-orange-800">
            {t('back')}
          </Link>
        </div>
      </div>
    </Section>
  );
}
