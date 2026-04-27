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
        <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-8 text-[#fff4d1] shadow-sm shadow-black/30">
          <h2 className="text-3xl font-semibold">{t('leadTitle')}</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[#d7c190]">
            <li>• {t('lead1')}</li>
            <li>• {t('lead2')}</li>
            <li>• {t('lead3')}</li>
          </ul>
        </div>
        <form className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
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
          <button className="mt-5 rounded-full bg-[#ffd25b] px-5 py-3 text-sm font-semibold text-[#170c06]">{t('send')}</button>
        </form>
      </div>
    </Section>
  );
}
