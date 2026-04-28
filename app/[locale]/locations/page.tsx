import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';
import {locations} from '@/data/locations';

export default async function LocationsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <SectionHeader eyebrow={t('locationsPage.eyebrow')} title={t('locationsPage.title')} description={t('locationsPage.description')} />
      <div className="grid gap-6">
        {locations.map((location) => (
          <div key={location.id} className="grid gap-6 rounded-[32px] border border-border bg-surface p-6 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-semibold text-text">{t(location.nameKey)}</h2>
              <p className="mt-4 text-sm leading-7 text-text-muted">
                {location.address}, {location.city}<br />
                {location.phone}<br />
                {location.email}<br />
                {location.hours.weekdays}<br />
                {location.hours.saturday}<br />
                {location.hours.sunday}
              </p>
            </div>
            <div className="overflow-hidden rounded-[24px] border border-border bg-white">
              <iframe src={location.mapEmbedUrl} className="h-[300px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
