import {locations} from '@/data/site';
import {PlaceholderImage, Section, SectionHeader} from '@/components/shared/ui';

export default function LocationsPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Locations"
        title="Built around Jüri, ready for the next spot"
        description="The first location is real in structure, the second is a clean expansion placeholder."
      />
      <div className="grid gap-5 lg:grid-cols-2">
        {locations.map((location) => (
          <div key={location.title} className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
            <h2 className="text-2xl font-semibold text-stone-950">{location.title}</h2>
            <p className="mt-4 text-sm leading-7 text-stone-600">{location.address}<br />{location.hours}<br />{location.phone}</p>
            <p className="mt-4 text-sm leading-7 text-stone-500">{location.note}</p>
            <PlaceholderImage label={`${location.title} photo`} className="mt-6 min-h-[220px]" />
          </div>
        ))}
      </div>
    </Section>
  );
}
