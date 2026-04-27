import {getTranslations} from 'next-intl/server';
import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default async function PartnersPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'partnersPage'});

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[32px] bg-stone-950 p-8 text-white">
          <h2 className="text-3xl font-semibold">{t('leadTitle')}</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-orange-50/85">
            <li>• {t('lead1')}</li>
            <li>• {t('lead2')}</li>
            <li>• {t('lead3')}</li>
          </ul>
        </div>
        <form className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder={t('company')} />
            <Input placeholder={t('contact')} />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Input placeholder={t('email')} />
            <Input placeholder={t('phone')} />
          </div>
          <div className="mt-4">
            <Textarea placeholder={t('idea')} />
          </div>
          <button className="mt-5 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">{t('send')}</button>
        </form>
      </div>
    </Section>
  );
}
