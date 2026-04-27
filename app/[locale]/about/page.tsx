import {PlaceholderImage, Section, SectionHeader} from '@/components/shared/ui';

export default function AboutPage() {
  return (
    <Section>
      <SectionHeader
        eyebrow="About"
        title="A warm modern brand, not fake nostalgia"
        description="The preview leans into comfort food, clean surfaces and enough soul to feel intentional."
      />
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
          <p className="text-base leading-8 text-stone-600">BlinnyKing is imagined as a modern neighborhood pancake house: fast enough for weekday lunch, warm enough for a family stop, and visually clean enough to avoid the cheap delivery-app look. The brand story centers on generous fillings, soft hospitality and a menu built around repeat cravings instead of novelty gimmicks.</p>
          <p className="mt-4 text-base leading-8 text-stone-600">This preview uses editorial spacing, earthy colors and food-led blocks so the identity feels premium but still approachable.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <PlaceholderImage label="Kitchen moment" className="min-h-[220px]" />
          <PlaceholderImage label="Finished sweet bliny" className="min-h-[220px]" />
          <PlaceholderImage label="Dining area detail" className="min-h-[220px] sm:col-span-2" />
        </div>
      </div>
    </Section>
  );
}
