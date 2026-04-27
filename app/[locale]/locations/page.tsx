import {getTranslations} from 'next-intl/server';
import {locations} from '@/data/site';
import {PlaceholderImage, Section, SectionHeader} from '@/components/shared/ui';

export default async function LocationsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'locationsPage'});
  const dataT = await getTranslations({locale: params.locale, namespace: 'data'});

  const localizedLocations = [
    {
      ...locations[0],
      title: dataT('location1Title'),
      hours: dataT('location1Hours'),
      note: dataT('location1Note')
    },
    {
      ...locations[1],
      title: dataT('location2Title'),
      address: dataT('location2Address'),
      hours: dataT('location2Hours'),
      phone: dataT('location2Phone'),
      note: dataT('location2Note')
    }
  ];

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {localizedLocations.map((location) => (
          <div key={location.title} className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
            <h2 className="text-2xl font-semibold text-[#fff4d1]">{location.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[#d7c190]">{location.address}<br />{location.hours}<br />{location.phone}</p>
            <p className="mt-4 text-sm leading-7 text-[#b89d69]">{location.note}</p>
            <PlaceholderImage label={`${location.title} photo`} className="mt-6 min-h-[220px]" />
          </div>
        ))}
      </div>
    </Section>
  );
}
