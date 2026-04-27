import {MapPin, Percent, Sandwich, Star, Store, Truck} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {featuredItems} from '@/data/menu';
import {locations, reviews} from '@/data/site';
import {ActionLink, Pill, PlaceholderImage, Section, SectionHeader, StatCard} from '@/components/shared/ui';
import {MenuCard} from '@/components/menu/menu-card';
import {Locale} from '@/i18n/routing';

export async function HomeSections({locale}: {locale: Locale}) {
  const t = await getTranslations({locale});
  const home = await getTranslations({locale, namespace: 'home'});
  const dataT = await getTranslations({locale, namespace: 'data'});

  const localizedReviews = reviews.map((review, index) => ({
    ...review,
    text: dataT(`review${index + 1}`)
  }));

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
              <StatCard label={home('stats.prep')} value="15 min" />
              <StatCard label={home('stats.rating')} value="4.9/5" />
              <StatCard label={home('stats.menu')} value="8+" />
            </div>
          </div>
          <div className="space-y-5">
            <PlaceholderImage label="Hero food shot" className="min-h-[420px]" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5">
                <div className="flex items-center gap-3 text-orange-600"><Percent className="h-5 w-5" /> {home('cards.loyaltyTitle')}</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{home('cards.loyaltyText')}</p>
              </div>
              <div className="rounded-[28px] border border-orange-100 bg-[#2b190e] p-5 text-white shadow-sm shadow-orange-950/10">
                <div className="flex items-center gap-3 text-orange-200"><Truck className="h-5 w-5" /> {home('cards.deliveryTitle')}</div>
                <p className="mt-3 text-sm leading-6 text-orange-50/80">{home('cards.deliveryText')}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader
          eyebrow={home('popularEyebrow')}
          title={home('popularTitle')}
          description={home('popularDescription')}
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
            <Pill>{home('lunchEyebrow')}</Pill>
            <h3 className="mt-4 text-3xl font-semibold text-stone-950">{home('lunchTitle')}</h3>
            <p className="mt-4 text-base leading-7 text-stone-600">{home('lunchDescription')}</p>
            <div className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-900">{home('lunchTime')}</div>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {icon: Sandwich, title: home('steps.oneTitle'), text: home('steps.oneText')},
              {icon: Store, title: home('steps.twoTitle'), text: home('steps.twoText')},
              {icon: Star, title: home('steps.threeTitle'), text: home('steps.threeText')}
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
              <Percent className="h-5 w-5" /> {home('cards.loyaltyTitle')}
            </div>
            <h3 className="mt-4 text-3xl font-semibold">{home('loyaltyTitle')}</h3>
            <p className="mt-4 max-w-lg text-sm leading-7 text-orange-50/80">{home('loyaltyText')}</p>
            <ul className="mt-6 space-y-3 text-sm text-orange-50/90">
              <li>• {home('loyaltyPoint1')}</li>
              <li>• {home('loyaltyPoint2')}</li>
              <li>• {home('loyaltyPoint3')}</li>
            </ul>
          </div>
          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-sm shadow-orange-950/5">
            <SectionHeader
              eyebrow={home('findEyebrow')}
              title={locations[0].address}
              description={home('findDescription')}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#fff5ea] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-stone-900"><MapPin className="h-4 w-4 text-orange-600" /> {home('locationLabel')}</div>
                <p className="mt-3 text-sm leading-6 text-stone-600">{locations[0].hours}<br />{locations[0].phone}</p>
              </div>
              <PlaceholderImage label="Storefront / map preview" className="min-h-[180px]" />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={home('reviewsEyebrow')} title={home('reviewsTitle')} description={home('reviewsDescription')} />
        <div className="grid gap-5 md:grid-cols-3">
          {localizedReviews.map((review) => (
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
