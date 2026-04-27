import Image from 'next/image';
import Link from 'next/link';
import {Facebook} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Locale, locales} from '@/i18n/routing';
import {cn} from '@/lib/utils';

const logoUrl = 'https://thb.tildacdn.net/tild3939-3438-4333-b530-623131363863/-/empty/log.png';

const navByLocale: Record<Locale, {labelKey: string; href: string}[]> = {
  et: [
    {labelKey: 'order', href: '/et/order'},
    {labelKey: 'offers', href: '/et/menu#pakkumised'},
    {labelKey: 'menu', href: '/et/menu'},
    {labelKey: 'gallery', href: '/et/#galerii'},
    {labelKey: 'discount', href: '/et/#klient'},
    {labelKey: 'work', href: '/et/jobs'},
    {labelKey: 'partners', href: '/et/partners'},
    {labelKey: 'contacts', href: '/et/contacts'}
  ],
  en: [
    {labelKey: 'order', href: '/en/order'},
    {labelKey: 'offers', href: '/en/menu#pakkumised'},
    {labelKey: 'menu', href: '/en/menu'},
    {labelKey: 'gallery', href: '/en/#galerii'},
    {labelKey: 'discount', href: '/en/#klient'},
    {labelKey: 'work', href: '/en/jobs'},
    {labelKey: 'partners', href: '/en/partners'},
    {labelKey: 'contacts', href: '/en/contacts'}
  ],
  ru: [
    {labelKey: 'order', href: '/ru/order'},
    {labelKey: 'offers', href: '/ru/menu#pakkumised'},
    {labelKey: 'menu', href: '/ru/menu'},
    {labelKey: 'gallery', href: '/ru/#galerii'},
    {labelKey: 'discount', href: '/ru/#klient'},
    {labelKey: 'work', href: '/ru/jobs'},
    {labelKey: 'partners', href: '/ru/partners'},
    {labelKey: 'contacts', href: '/ru/contacts'}
  ]
};

export async function SiteShell({
  locale,
  children
}: {
  locale: Locale;
  children: React.ReactNode;
  session: unknown;
}) {
  const t = await getTranslations({locale});
  const nav = navByLocale[locale];

  return (
    <div className="min-h-screen bg-[#170c06] text-[#f7e5b4]">
      <header className="sticky top-0 z-40 border-b border-[#6d4b13] bg-[#120904]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <Link href="/et" className="relative h-16 w-[180px] shrink-0">
              <Image src={logoUrl} alt="Blinny King" fill className="object-contain object-left" sizes="180px" unoptimized />
            </Link>

            <nav className="flex flex-wrap items-center gap-4 text-sm font-medium text-[#f7e5b4] lg:justify-center">
              {nav.map((item) => (
                <Link key={item.labelKey} href={item.href} className="transition hover:text-[#ffd25b]">
                  {t(`nav.${item.labelKey}`)}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap items-center gap-2">
              <div className="flex rounded-full border border-[#6d4b13] bg-[#24140b] p-1">
                {locales.map((code) => (
                  <Link
                    key={code}
                    href={`/${code}`}
                    className={cn(
                      'rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition',
                      code === locale ? 'bg-[#ffd25b] text-[#170c06]' : 'text-[#f7e5b4] hover:text-white'
                    )}
                  >
                    {code}
                  </Link>
                ))}
              </div>
              <Link href={`/${locale}/account`} className="rounded-full border border-[#6d4b13] bg-[#24140b] px-4 py-2 text-sm font-semibold text-[#f7e5b4] transition hover:bg-[#3a2416]">
                {t('nav.login')}
              </Link>
              <Link href={`/${locale}/account?tab=register`} className="rounded-full border border-[#6d4b13] bg-[#24140b] px-4 py-2 text-sm font-semibold text-[#f7e5b4] transition hover:bg-[#3a2416]">
                {t('nav.register')}
              </Link>
              <Link href={`/${locale}/account?tab=guest`} className="rounded-full bg-[#ffd25b] px-4 py-2 text-sm font-semibold text-[#170c06] transition hover:bg-[#ffdd7f]">
                {t('nav.guestOrder')}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-[#6d4b13] bg-[#120904]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h3 className="text-xl font-semibold text-[#ffd25b]">{t('footer.title')}</h3>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-[#f7e5b4]">{t('footer.hoursTitle')}</p>
              <div className="mt-3 space-y-1 text-sm text-[#e7d1a2]">
                <p>{t('footer.hoursWeek')}</p>
                <p>{t('footer.hoursSat')}</p>
                <p>{t('footer.hoursSun')}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-[#e7d1a2]">
              <p>{t('footer.address')}</p>
              <p><a href="tel:+37256859075" className="hover:text-[#ffd25b]">{t('footer.phone')}</a></p>
              <p><a href="mailto:info@blinnyking.ee" className="hover:text-[#ffd25b]">{t('footer.email')}</a></p>
            </div>
            <div>
              <a href="https://www.facebook.com/BlinnyKingPannkoogid/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f7e5b4] hover:text-[#ffd25b]">
                <Facebook className="h-4 w-4" /> Facebook
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-[#3a2416] pt-4 text-xs text-[#b89d69]">
            <p>{t('footer.rights')}</p>
            <p className="mt-1">{t('footer.registry')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
