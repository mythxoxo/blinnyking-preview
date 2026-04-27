import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';

export default async function ContactsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('contactsPage.eyebrow')} title={t('contactsPage.title')} description={t('contactsPage.description')} />
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[32px] border border-border bg-surface shadow-soft">
          <iframe
            title="Blinny King map"
            src="https://www.google.com/maps?q=59.3567,24.8908&z=15&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft">
          <h2 className="text-2xl font-semibold text-text">Blinny King Pannkoogirestoran Jüri</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-text-muted">
            <p>
              <a href="https://maps.app.goo.gl/zEtqPRYX41wadDNaA" target="_blank" rel="noreferrer" className="hover:text-primary">
                Veetorni 9, Jüri
              </a>
            </p>
            <p><a href="tel:+37256859075" className="hover:text-primary">+372 568 59075</a></p>
            <p><a href="mailto:info@blinnyking.ee" className="hover:text-primary">info@blinnyking.ee</a></p>
            <p>Facebook</p>
            <p>{t('footer.hoursWeek')} · {t('footer.hoursSat')} · {t('footer.hoursSun')}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
