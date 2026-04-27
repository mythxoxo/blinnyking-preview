import {getTranslations} from 'next-intl/server';
import {menuItems} from '@/data/menu';
import {MenuCard} from '@/components/menu/menu-card';
import {Section, SectionHeader} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

const categoryOrder = ['savory', 'sweet', 'lunch', 'combos', 'drinks'] as const;
const FLIPHTML5_URL = process.env.NEXT_PUBLIC_FLIPHTML5_URL || 'https://online.fliphtml5.com/placeholder/blinny-king-menu';

export default async function MenuPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <div>
      <Section className="pb-4">
        <SectionHeader eyebrow={t('menu.eyebrow')} title={t('menu.title')} description={t('menu.description')} />
      </Section>

      {categoryOrder.map((category) => {
        const items = menuItems.filter((item) => item.category === category);
        if (!items.length) return null;

        return (
          <Section key={category} id={category === 'lunch' ? 'pakkumised' : undefined} className="pt-2">
            <div className="mb-6 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold text-text">{t(`categories.${category}`)}</h2>
              {category === 'lunch' ? <p className="text-sm text-text-muted">{t('menu.lunchNote')}</p> : null}
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <MenuCard key={item.id} item={item} locale={params.locale} />
              ))}
            </div>
          </Section>
        );
      })}

      {process.env.NEXT_PUBLIC_FLIPHTML5_URL ? (
        <Section>
          <SectionHeader title={t('menu.fullMenu')} description={t('menu.fullMenuDescription')} />
          <div className="relative overflow-hidden rounded-[32px] border border-border bg-surface p-2 shadow-soft">
            <iframe
              src={`${FLIPHTML5_URL}?navpane=0&toolbar=0&logo=0`}
              className="h-[600px] w-full rounded-[24px] border-0"
              allowFullScreen
            />
            <div className="absolute bottom-2 right-2 h-12 w-32 bg-background" />
          </div>
        </Section>
      ) : null}
    </div>
  );
}
