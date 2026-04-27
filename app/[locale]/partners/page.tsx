import {Input, Section, SectionHeader, Textarea} from '@/components/shared/ui';

export default function PartnersPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Partners"
        title="B2B inquiry page for offices, events and wholesale"
        description="Structured for catering leads, office lunch agreements or co-branded popups."
      />
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-[32px] bg-stone-950 p-8 text-white">
          <h2 className="text-3xl font-semibold">Let’s feed your team properly</h2>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-orange-50/85">
            <li>• Office lunch deals</li>
            <li>• Event trays and dessert platters</li>
            <li>• Local cross-promotions and wholesale supply</li>
          </ul>
        </div>
        <form className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
          <div className="grid gap-4 sm:grid-cols-2">
            <Input placeholder="Company" />
            <Input placeholder="Contact person" />
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Input placeholder="Email" />
            <Input placeholder="Phone" />
          </div>
          <div className="mt-4">
            <Textarea placeholder="Tell us about your volume, event or partnership idea" />
          </div>
          <button className="mt-5 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white">Send inquiry</button>
        </form>
      </div>
    </Section>
  );
}
