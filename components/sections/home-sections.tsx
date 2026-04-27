import {MapPin, Percent, Sandwich, Star, Store, Truck} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {featuredItems} from '@/data/menu';
import {locations, reviews} from '@/data/site';
import {ActionLink, Pill, PlaceholderImage, Section, SectionHeader, StatCard} from '@/components/shared/ui';
import {MenuCard} from '@/components/menu/menu-card';
import {Locale} from '@/i18n/routing';

export async function HomeSections({locale}: {locale: Locale}) {
  const t = await getTranslations({locale});

  return (
    <>
      <Section className="pt-8 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Pill>{t('hero.eyebrow')}</Pill>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-600">{t('hero.subtitle')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={`/${locale}/menu`}>{t('cta.orderNow')}</ActionLink>
              <ActionLink href={`/${locale}/menu`} muted>
                {t('cta.viewMenu')}
              </ActionLink>
              <ActionLink href={`/${locale}/locations`} muted>
                {t('cta.visitUs')}
              </ActionLink>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard label="Average prep time" value="15 min" />
              <StatCard label="Pickup rating" value="4.9/5" />
              <StatCard label="Fresh menu items" value="8+" />
            </div>
          </div>
          <div className="space-y-5">
            <PlaceholderImage label="Hero food shot" className="min-h-[420px]" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5">
                <div className="flex items-center gap-3 text-orange-600"><Percent className="h-5 w-5" /> Loyalty bites</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">Collect stamps on every order and unlock a free sweet bliny after 6 visits.</p>
              </div>
              <div className="rounded-[28px] border border-orange-100 bg-[#2b190e] p-5 text-white shadow-sm shadow-orange-950/10">
                <div className="flex items-center gap-3 text-orange-200"><Truck className="h-5 w-5" /> Delivery ready</div>
                <p className="mt-3 text-sm leading-6 text-orange-50/80">Built for takeaway, pickup and quick lunch delivery around Jüri.</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow="Top picks"
          title="Popular dishes people actually come back for"
          description="Four hero products to anchor the preview and show the tone of the menu."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredItems.map((item) => (
            <MenuCard key={item.slug} item={item} locale={locale} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] border border-orange-100 bg-[#fff5ea] p-8">
            <Pill>Lunch offer</Pill>
            <h3 className="mt-4 text-3xl font-semibold text-stone-950">Weekday lunch from €9.90</h3>
            <p className="mt-4 text-base leading-7 text-stone-600">Soup, mini savory pancake and side salad. Made for nearby workers who need something fast but still warm and proper.</p>
            <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900">Mon–Fri · 11:00–15:00</div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {icon: Sandwich, title: 'Choose your bliny', text: 'Pick savory, sweet or lunch sets with clear portions and sizes.'},
              {icon: Store, title: 'Select pickup or delivery', text: 'Preview flow supports both modes with location and checkout steps.'},
              {icon: Star, title: 'Enjoy the reward loop', text: 'Discounts, stamps and repeat-order UX encourage regular lunch traffic.'}
            ].map((step, index) => (
              <div key={step.title} className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
                <div className="flex items-center justify-between">
                  <step.icon className="h-6 w-6 text-orange-600" />
                  <span className="text-sm font-semibold text-stone-400">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-stone-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[32px] bg-stone-950 p-8 text-white">
            <div className="flex items-center gap-3 text-orange-200">
              <Percent className="h-5 w-5" /> Loyalty & discount
            </div>
            <h3 className="mt-4 text-3xl font-semibold">Built-in repeat reason</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-orange-50/80">Preview includes a simple hook: lunch club, returning customer perks and discount placement that feels premium instead of spammy.</p>
            <ul className="mt-6 space-y-3 text-sm text-orange-50/90">
              <li>• 10% off first app order</li>
              <li>• Free sweet bliny after 6 stamps</li>
              <li>• Combo upsell during checkout</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-sm shadow-orange-950/5">
            <SectionHeader
              eyebrow="Find us"
              title={locations[0].address}
              description="Designed around one real location now, with room to scale into more later."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#fff5ea] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900"><MapPin className="h-4 w-4 text-orange-600" /> Jüri location</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{locations[0].hours}<br />{locations[0].phone}</p>
              </div>
              <PlaceholderImage label="Storefront / map preview" className="min-h-[180px]" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Reviews" title="Mock social proof that feels plausible" description="Enough for a convincing preview without faking a production feed." />
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-[28px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
              <div className="flex gap-1 text-orange-500">{'★'.repeat(review.rating)}</div>
              <p className="mt-4 text-sm leading-7 text-stone-600">“{review.text}”</p>
              <p className="mt-5 text-sm font-semibold text-stone-950">{review.name}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
