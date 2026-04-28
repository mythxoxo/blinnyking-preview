import Image from 'next/image';
import {getTranslations} from 'next-intl/server';
import {Button} from '@/components/ui/button';
import {MenuCard} from '@/components/menu/menu-card';
import {featuredItems} from '@/data/menu';
import {BOLT_URL, WOLT_URL, locations} from '@/data/locations';
import {Locale} from '@/i18n/routing';

const galleryImages = [
  'https://images.unsplash.com/photo-1565299543923-37dd37887442?w=600&q=80',
  'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=600&q=80',
  'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80',
  'https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&q=80',
  'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=600&q=80'
];

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
    <div>
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&w=1800&q=80" alt="Pancakes" fill className="object-cover" sizes="100vw" unoptimized />
          <div className="absolute inset-0 bg-[rgba(26,18,8,0.45)]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center text-white sm:px-6 lg:px-8">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">{t('site.tagline')}</div>
          <h1 className="mt-6 text-[42px] font-semibold leading-tight md:text-[72px]">{t('hero.title')}</h1>
          <p className="mt-5 text-base text-white/90 md:text-lg">{location.address}, {location.city} · {location.hours.weekdays}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`/${locale}/order`}><Button size="lg">{t('cta.orderNow')}</Button></a>
            <a href={`/${locale}/menu`}><Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-text">{t('cta.viewMenu')}</Button></a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm">
            <a href={BOLT_URL} target="_blank" rel="noopener" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">⚡ {t('hero.cta.bolt')}</a>
            <a href={WOLT_URL} target="_blank" rel="noopener" className="rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">🔵 {t('hero.cta.wolt')}</a>
          </div>
        </div>
      </section>

      {lunchNow ? (
        <section className="bg-[var(--color-accent)] px-4 py-3 text-center text-sm font-medium text-[var(--color-dark)]">
          🕐 Lõunapakkumine täna 11:00–15:00 · −20% kõigile roogadele
        </section>
      ) : null}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-text">{t('site.featuredTitle')}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              translatedName={t(item.nameKey)}
              translatedDescription={t(item.descKey)}
              translatedTag={item.tags?.[0] ? t(`tags.${item.tags[0]}`) : undefined}
            />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`/${locale}/order`}><Button>{t('cta.orderNow')}</Button></a>
          <a href={`/${locale}/menu`}><Button variant="outline">{t('site.fullMenuCta')}</Button></a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ['01', t('site.step1Title'), t('site.step1Text')],
            ['02', t('site.step2Title'), t('site.step2Text')],
            ['03', t('site.step3Title'), t('site.step3Text')]
          ].map(([num, title, text]) => (
            <div key={num} className="rounded-2xl border border-border bg-surface p-6">
              <div className="text-4xl font-semibold text-[var(--color-accent)]">{num}</div>
              <h3 className="mt-4 text-2xl font-semibold text-text">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-muted">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-text">{t('site.galleryTitle')}</h2>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((src) => (
            <div key={src} className="group relative aspect-square min-h-[140px] overflow-hidden rounded-2xl">
              <Image src={src} alt="Blinny King gallery" fill className="object-cover transition duration-300 group-hover:scale-105" sizes="(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw" unoptimized />
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">{t('site.loyaltyTitle')}</h2>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-text-muted">
            <li>✔ {t('site.loyaltyPoint1')}</li>
            <li>🎂 {t('site.loyaltyPoint2')}</li>
          </ul>
        </div>
        <div className="flex items-center justify-start rounded-2xl bg-surface p-8 lg:justify-center">
          <a href={`/${locale}/promotions`}><Button size="lg">{t('site.register')}</Button></a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl bg-surface p-6"><h3 className="text-xl font-semibold">{t('site.address')}</h3><p className="mt-3 text-text-muted">{location.address}, {location.city}</p></div>
          <div className="rounded-2xl bg-surface p-6"><h3 className="text-xl font-semibold">{t('site.phone')}</h3><p className="mt-3 text-text-muted">{location.phone}</p></div>
          <div className="rounded-2xl bg-surface p-6"><h3 className="text-xl font-semibold">{t('site.hours')}</h3><p className="mt-3 text-text-muted">{location.hours.weekdays}<br />{location.hours.saturday}<br />{location.hours.sunday}</p></div>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface">
          <iframe src={location.mapEmbedUrl} className="h-[220px] w-full border-0 md:h-[300px]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </section>
    </div>
  );
}
