import {getTranslations} from 'next-intl/server';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default async function JobsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('jobsPage.eyebrow')} title={t('jobsPage.title')} description={t('jobsPage.description')} />
      <div className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-text">{t('jobsPage.vacancyTitle')}</h2>
          <p className="mt-4 text-sm leading-7 text-text-muted">{t('jobsPage.vacancyText')}</p>
        </div>
        <form className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-text">{t('jobsPage.apply')}</h2>
          <div className="mt-5 space-y-4">
            <Input placeholder={t('jobsPage.fullName')} />
            <Input placeholder={t('jobsPage.phone')} />
            <Input placeholder={t('jobsPage.email')} />
            <Textarea placeholder={t('jobsPage.experience')} />
          </div>
          <button className="mt-5 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white">{t('jobsPage.submit')}</button>
        </form>
      </div>
    </Section>
  );
}
