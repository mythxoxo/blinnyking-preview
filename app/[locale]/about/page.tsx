import {getTranslations} from 'next-intl/server';
import {MediaImage, Section, SectionHeader} from '@/components/shared/ui';

export default async function AboutPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'about'});

  return (
    <Section>
      <SectionHeader eyebrow={t('eyebrow')} title={t('title')} description={t('description')} />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <p className="text-base leading-8 text-text-muted">{t('text1')}</p>
          <p className="mt-4 text-base leading-8 text-text-muted">{t('text2')}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <MediaImage src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80" alt="Team" className="h-[220px]" />
          <MediaImage src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80" alt="Food" className="h-[220px]" />
          <MediaImage src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" alt="Restaurant" className="h-[220px] sm:col-span-2" />
        </div>
      </div>
    </Section>
  );
}
