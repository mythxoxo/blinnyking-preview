import {ArrowRight, CheckCircle2, Clock3, MapPin, Phone, ShoppingBag, UtensilsCrossed} from 'lucide-react';
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
      <section className="relative overflow-hidden border-b border-border/60 bg-[#E9D7BF]">
        <div className="absolute inset-0">
          <MediaImage src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1800&q=80" alt="Blinny King hero" className="h-full rounded-none" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(24,13,5,0.78)_0%,rgba(24,13,5,0.60)_38%,rgba(24,13,5,0.22)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,219,169,0.20),transparent_30%)]" />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl text-white">
            <Pill className="bg-white/14 text-white">{t('hero.eyebrow')}</Pill>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">{t('hero.title')}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/88">{t('hero.subtitle')}</p>

            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/88">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <Clock3 className="h-4 w-4" />
                {location.hours.weekdays}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <MapPin className="h-4 w-4" />
                {location.address}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={`/${locale}/order`} className="bg-primary text-white hover:bg-primary-hover">
                {t('cta.orderNow')}
              </ActionLink>
              <ActionLink href={`/${locale}/menu`} className="bg-white text-text hover:bg-[#FFF1DC]">
                {t('hero.cta.menu')}
              </ActionLink>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-white/92">
              <a href={BOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2.5 backdrop-blur-sm transition hover:bg-black/40">
                ⚡ {t('hero.cta.bolt')}
              </a>
              <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0D92D7] px-4 py-2.5 text-white transition hover:bg-[#087fbc]">
                🔵 {t('hero.cta.wolt')}
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[32px] border border-white/15 bg-white/12 p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{t('cta.orderNow')}</p>
              <h2 className="mt-3 text-3xl font-semibold">Bolt · Wolt · Pickup</h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                Fast order flow, clean menu structure and 3 working languages for Estonian, Russian and English visitors.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-sm text-white/85">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><CheckCircle2 className="h-4 w-4" /> ET</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><CheckCircle2 className="h-4 w-4" /> RU</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2"><CheckCircle2 className="h-4 w-4" /> EN</span>
              </div>
              <ActionLink href={`/${locale}/order`} className="mt-6 bg-primary text-white hover:bg-primary-hover">
                {t('cta.orderNow')} <ArrowRight className="ml-2 h-4 w-4" />
              </ActionLink>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-border bg-surface p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{t('home.stats.phone')}</p>
                <p className="mt-3 text-xl font-semibold text-text">{location.phone}</p>
                <a href={`tel:${location.phone.replace(/\s+/g, '')}`} className="mt-3 inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary">
                  <Phone className="h-4 w-4" /> Call now
                </a>
              </div>
              <div className="rounded-[28px] border border-border bg-surface p-5 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{t('home.stats.hours')}</p>
                <p className="mt-3 text-xl font-semibold text-text">{location.hours.weekdays}</p>
                <p className="mt-3 text-sm text-text-muted">{t('footer.hoursSat')} · {t('footer.hoursSun')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {lunchNow ? (
        <Section className="pb-0 pt-8">
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
        <div className="mt-6 flex flex-wrap gap-3">
          <ActionLink href={`/${locale}/menu`} muted>
            {t('home.viewAll')}
          </ActionLink>
          <ActionLink href={`/${locale}/order`}>
            {t('cta.orderNow')}
          </ActionLink>
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
