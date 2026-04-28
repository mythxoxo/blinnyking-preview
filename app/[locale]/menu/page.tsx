import {getTranslations} from 'next-intl/server';
import {MenuCard} from '@/components/menu/menu-card';
import {menuItems} from '@/data/menu';
import {Locale} from '@/i18n/routing';

const categoryOrder = ['savory', 'sweet', 'lunch', 'combos', 'drinks'] as const;

export default async function MenuPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <div>
      <section className="bg-[var(--color-dark)] px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent)]">{t('menu.eyebrow')}</p>
          <h1 className="mt-4 text-4xl font-semibold">{t('menu.title')}</h1>
          <p className="mt-4 max-w-2xl text-white/80">{t('menu.description')}</p>
        </div>
      </section>

      <section className="sticky top-[73px] z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 sm:px-6 lg:px-8">
          {[t('menu.fullMenu'), t('categories.savory'), t('categories.sweet'), t('categories.lunch'), t('categories.combos'), t('categories.drinks')].map((label, index) => {
            const ids = ['all', 'savory', 'sweet', 'lunch', 'combos', 'drinks'];
            return <a key={label} href={`#${ids[index]}`} className="rounded-full bg-surface px-4 py-2 text-sm font-medium text-text hover:bg-primary hover:text-white">{label}</a>;
          })}
        </div>
      </section>

      <section id="all" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {categoryOrder.map((category, idx) => {
          const items = menuItems.filter((item) => item.category === category);
          return (
            <div key={category} id={category} className="py-8">
              <h2 className="text-3xl font-semibold text-text">{t(`categories.${category}`)}</h2>
              {category === 'lunch' ? <div className="mt-4 rounded-2xl bg-[var(--color-accent)] px-5 py-4 text-sm font-medium text-[var(--color-dark)]">{t('menu.lunchNote')}</div> : null}
              <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => <MenuCard key={item.id} item={item} locale={params.locale} />)}
              </div>
              {idx < categoryOrder.length - 1 ? <div className="mt-10 h-px bg-border" /> : null}
            </div>
          );
        })}
      </section>
    </div>
  );
}
