import {categories, menuItems} from '@/data/menu';
import {MenuCard} from '@/components/menu/menu-card';
import {Pill, Section, SectionHeader} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

export default function MenuPage({params}: {params: {locale: Locale}}) {
  return (
    <div>
      <Section className="pb-4">
        <SectionHeader
          eyebrow="Catalog"
          title="Menu built for browsing fast on mobile"
          description="Five categories, clear cards and enough information to support a believable preview ordering flow."
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
