import {getTranslations} from 'next-intl/server';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default async function PartnersPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('partnersPage.eyebrow')} title={t('partnersPage.title')} description={t('partnersPage.description')} />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[32px] border border-border bg-surface p-8 shadow-soft">
          <h2 className="text-3xl font-semibold text-text">{t('partnersPage.leadTitle')}</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-text-muted">
            <li>• {t('partnersPage.lead1')}</li>
            <li>• {t('partnersPage.lead2')}</li>
            <li>• {t('partnersPage.lead3')}</li>
          </ul>
        </div>
        <form className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder={t('partnersPage.company')} />
            <Input placeholder={t('partnersPage.contact')} />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Input placeholder={t('partnersPage.phone')} />
            <Input placeholder={t('partnersPage.email')} />
          </div>
          <div className="mt-4">
            <Textarea placeholder={t('partnersPage.idea')} />
          </div>
          <button className="mt-5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">{t('partnersPage.send')}</button>
        </form>
      </div>
    </Section>
  );
}
