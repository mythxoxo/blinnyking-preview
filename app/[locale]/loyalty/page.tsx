import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';

export default async function LoyaltyPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('loyaltyPage.eyebrow')} title={t('loyaltyPage.title')} description={t('loyaltyPage.description')} />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <ul className="space-y-3 text-sm leading-7 text-text-muted">
            <li>• {t('loyaltyPage.point1')}</li>
            <li>• {t('loyaltyPage.point2')}</li>
            <li>• {t('loyaltyPage.point3')}</li>
          </ul>
        </div>
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <p className="text-sm font-semibold text-text">QR / Form</p>
          <a href="https://forms.gle/example" target="_blank" rel="noopener" className="mt-4 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">
            {t('loyaltyPage.openForm')}
          </a>
        </div>
      </div>
    </Section>
  );
}
