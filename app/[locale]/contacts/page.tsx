import {getTranslations} from 'next-intl/server';
import {PlaceholderImage, Section, SectionHeader} from '@/components/shared/ui';

export default async function ContactsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'contactsPage'});

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <PlaceholderImage label={t('map')} className="min-h-[420px]" />
        <div className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-semibold text-stone-950">BlinnyKing Jüri</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-stone-600">
            <p>Veetorni 9, Jüri</p>
            <p>+372 5555 0101</p>
            <p>hello@blinnyking.ee</p>
            <p>{t('socials')}</p>
            <p>Mon–Sun · 10:00–21:00</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
