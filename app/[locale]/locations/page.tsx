import {getTranslations} from 'next-intl/server';
import {MediaImage, Section, SectionHeader} from '@/components/shared/ui';
import {locations} from '@/data/locations';

export default async function LocationsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('locationsPage.eyebrow')} title={t('locationsPage.title')} description={t('locationsPage.description')} />
      <div className="grid gap-5 lg:grid-cols-1">
        {locations.map((location) => (
          <div key={location.id} className="grid gap-6 rounded-[32px] border border-border bg-surface p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-text">{t(location.nameKey)}</h2>
              <p className="mt-4 text-sm leading-7 text-text-muted">
                {location.address}<br />
                {t('footer.hoursWeek')}: {location.hours.weekdays}<br />
                {t('footer.hoursSat')}: {location.hours.sat}<br />
                {t('footer.hoursSun')}: {location.hours.sun}<br />
                {location.phone}
              </p>
            </div>
            <MediaImage src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80" alt={t(location.nameKey)} className="h-[280px]" />
          </div>
        ))}
      </div>
    </Section>
  );
}
