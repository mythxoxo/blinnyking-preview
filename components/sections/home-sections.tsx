import {Clock3, MapPin, ShoppingBag, UtensilsCrossed} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {featuredItems} from '@/data/menu';
import {BOLT_URL, WOLT_URL, locations} from '@/data/locations';
import {ActionLink, MediaImage, Pill, Section, SectionHeader, StatCard} from '@/components/shared/ui';
import {MenuCard} from '@/components/menu/menu-card';
import {Locale} from '@/i18n/routing';

function isLunchTime() {
  const now = new Date(new Date().toLocaleString('en-US', {timeZone: 'Europe/Tallinn'}));
  const day = now.getDay();
  const hour = now.getHours();
  return day >= 1 && day <= 5 && hour >= 11 && hour < 15;
}

export async function HomeSections({locale}: {locale: Locale}) {
  const t = await getTranslations({locale});
  const lunchNow = isLunchTime();
  const location = locations[0];

  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <MediaImage src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1600&q=80" alt="Blinny King hero" className="h-full rounded-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-transparent" />
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-4 pb-16 pt-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-white">
            <Pill className="bg-white/15 text-white">Blinny King · Jüri</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">{t('hero.title')}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">{t('hero.subtitle')} · {location.hours.weekdays}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={`/${locale}/menu`} className="bg-primary text-white hover:bg-primary-hover">{t('hero.cta.menu')}</ActionLink>
              <a href={BOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-5 py-3 text-sm font-semibold text-white">{t('hero.cta.bolt')}</a>
              <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-full bg-[#009DE0] px-5 py-3 text-sm font-semibold text-white">{t('hero.cta.wolt')}</a>
            </div>
          </div>
        </div>
      </section>

      {lunchNow ? (
        <Section className="pt-8 pb-0">
          <div className="rounded-[32px] border border-border bg-primary px-6 py-5 text-white shadow-soft">
            <p className="text-lg font-semibold">{t('home.lunchBanner')}</p>
          </div>
        </Section>
      ) : null}

      <Section>
        <SectionHeader eyebrow={t('home.hitsEyebrow')} title={t('home.hitsTitle')} description={t('home.hitsDescription')} />
        <div className="flex gap-5 overflow-x-auto pb-2">
          {featuredItems.map((item) => (
            <div key={item.id} className="min-w-[300px] flex-1">
              <MenuCard item={item} locale={locale} />
            </div>
          ))}
        </div>
        <div className="mt-6">
          <ActionLink href={`/${locale}/menu`} muted>{t('home.viewAll')}</ActionLink>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow={t('home.howEyebrow')} title={t('home.howTitle')} description={t('home.howDescription')} />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            {icon: UtensilsCrossed, title: t('home.steps.choose.title'), text: t('home.steps.choose.text')},
            {icon: ShoppingBag, title: t('home.steps.order.title'), text: t('home.steps.order.text')},
            {icon: Clock3, title: t('home.steps.pickup.title'), text: t('home.steps.pickup.text')}
          ].map((step, index) => (
            <div key={step.title} className="rounded-[28px] border border-border bg-surface p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <step.icon className="h-6 w-6 text-primary" />
                <span className="text-sm font-semibold text-text-muted">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-text">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-text-muted">{step.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 sm:grid-cols-3">
          <StatCard label={t('home.stats.address')} value={location.address} />
          <StatCard label={t('home.stats.phone')} value={location.phone} />
          <StatCard label={t('home.stats.hours')} value={location.hours.weekdays} />
        </div>
        <div className="mt-8 flex items-center gap-3 text-text-muted">
          <MapPin className="h-5 w-5 text-primary" />
          <span>{location.address}</span>
        </div>
      </Section>
    </>
  );
}
