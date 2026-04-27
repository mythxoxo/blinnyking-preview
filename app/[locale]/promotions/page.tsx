import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';

export default async function PromotionsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('promotions.eyebrow')} title={t('promotions.title')} description={t('promotions.description')} />
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-text">{t('promotions.lunchTitle')}</h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">{t('promotions.lunchText')}</p>
        </div>
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-text">{t('promotions.loyaltyTitle')}</h2>
          <p className="mt-3 text-sm leading-7 text-text-muted">{t('promotions.loyaltyText')}</p>
        </div>
      </div>
    </Section>
  );
}
