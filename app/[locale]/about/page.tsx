import {getTranslations} from 'next-intl/server';
import {PlaceholderImage, Section, SectionHeader} from '@/components/shared/ui';

export default async function AboutPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'about'});

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
          <p className="text-base leading-8 text-stone-600">{t('text1')}</p>
          <p className="mt-4 text-base leading-8 text-stone-600">{t('text2')}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <PlaceholderImage label="Kitchen moment" className="min-h-[220px]" />
          <PlaceholderImage label="Finished sweet bliny" className="min-h-[220px]" />
          <PlaceholderImage label="Dining area detail" className="min-h-[220px] sm:col-span-2" />
        </div>
      </div>
    </Section>
  );
}
