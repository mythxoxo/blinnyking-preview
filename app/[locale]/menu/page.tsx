import {getTranslations} from 'next-intl/server';
import {categories, menuItems} from '@/data/menu';
import {MenuCard} from '@/components/menu/menu-card';
import {Pill, Section, SectionHeader} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

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
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Pill key={category}>{category}</Pill>
          ))}
        </div>
      </Section>

      <Section className="pt-2">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard key={item.slug} item={item} locale={params.locale} />
          ))}
        </div>
      </Section>
    </div>
  );
}
