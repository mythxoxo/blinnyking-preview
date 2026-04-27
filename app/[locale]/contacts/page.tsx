import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';

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
        <div className="overflow-hidden rounded-[32px] border border-[#6d4b13] bg-[#170c06] shadow-sm shadow-black/30">
          <iframe
            title="Blinny King map"
            src="https://www.google.com/maps?q=59.3567,24.8908&z=15&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
          <h2 className="text-2xl font-semibold text-[#fff4d1]">Blinny King Pannkoogirestoran Jüri</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-[#d7c190]">
            <p>
              <a href="https://maps.app.goo.gl/zEtqPRYX41wadDNaA" target="_blank" rel="noreferrer" className="hover:text-[#ffd25b]">
                Veetorni 9, Jüri
              </a>
            </p>
            <p><a href="tel:+37256859075" className="hover:text-[#ffd25b]">+372 568 59075</a></p>
            <p><a href="mailto:info@blinnyking.ee" className="hover:text-[#ffd25b]">info@blinnyking.ee</a></p>
            <p>{t('socials')}</p>
            <p>E-R 10:00–20:00 · L 11:00–20:00 · P 11:00–19:00</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
