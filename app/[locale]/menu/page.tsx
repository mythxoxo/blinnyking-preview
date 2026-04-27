import {getTranslations} from 'next-intl/server';
import {menuItems} from '@/data/menu';
import {MenuCard} from '@/components/menu/menu-card';
import {Section, SectionHeader} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

const categoryOrder = ['savory', 'sweet', 'lunch', 'combos', 'drinks'] as const;

export default async function MenuPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'menuPage'});

  return (
    <div>
      <Section className="pb-4">
        <SectionHeader
          eyebrow={t('eyebrow')}
          title={t('title')}
          description={t('description')}
        />
      </Section>

      {categoryOrder.map((category) => {
        const items = menuItems.filter((item) => item.category === category);
        if (!items.length) return null;

        const titleKey =
          category === 'savory' ? 'sectionSavory' :
          category === 'sweet' ? 'sectionSweet' :
          category === 'lunch' ? 'sectionLunch' :
          category === 'combos' ? 'sectionCombos' : 'sectionDrinks';

        return (
          <Section key={category} id={category === 'lunch' ? 'pakkumised' : undefined} className="pt-2">
            <div className="mb-6 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold text-[#fff4d1]">{t(titleKey)}</h2>
              {category === 'lunch' ? <p className="text-sm text-[#d7c190]">{t('sectionLunchNote')}</p> : null}
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {items.map((item) => (
                <MenuCard key={item.slug} item={item} locale={params.locale} />
              ))}
            </div>
          </Section>
        );
      })}
    </div>
  );
}
