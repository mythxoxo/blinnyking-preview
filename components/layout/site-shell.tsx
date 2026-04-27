import Link from 'next/link';
import {ShoppingBag} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import {Locale, locales} from '@/i18n/routing';
import {cn} from '@/lib/utils';

const navItems = [
  {key: 'home', href: ''},
  {key: 'menu', href: '/menu'},
  {key: 'locations', href: '/locations'},
  {key: 'about', href: '/about'},
  {key: 'partners', href: '/partners'},
  {key: 'jobs', href: '/jobs'},
  {key: 'contacts', href: '/contacts'}
] as const;

export async function SiteShell({
  locale,
  children
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = await getTranslations({locale});

  return (
    <div className="min-h-screen bg-[#fffaf4] text-stone-900">
      <header className="sticky top-0 z-40 border-b border-orange-100/80 bg-[#fffaf4]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-950 text-sm font-bold text-white">BK</div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">BlinnyKing</div>
              <div className="text-xs text-stone-500">Warm food brand preview</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link key={item.key} href={`/${locale}${item.href}`} className="text-sm font-medium text-stone-700 transition hover:text-stone-950">
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex rounded-full border border-stone-200 bg-white p-1 shadow-sm">
              {locales.map((code) => (
                <Link
                  key={code}
                  href={`/${code}`}
                  className={cn(
                    'rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition',
                    code === locale ? 'bg-stone-950 text-white' : 'text-stone-500 hover:text-stone-900'
                  )}
                >
                  {code}
                </Link>
              ))}
            </div>
            <Link
              href={`/${locale}/account`}
              className="hidden rounded-full border border-stone-200 bg-white px-4 py-2 text-sm font-semibold text-stone-700 transition hover:border-stone-300 hover:text-stone-950 sm:inline-flex"
            >
              {t('nav.account')}
            </Link>
            <Link
              href={`/${locale}/cart`}
              className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              <ShoppingBag className="h-4 w-4" />
              {t('nav.cart')}
            </Link>
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-orange-100 bg-[#fff5ea]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">BlinnyKing</div>
            <p className="mt-3 max-w-md text-sm leading-7 text-stone-600">{t('footer.tagline')}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-900">Menu</h3>
            <div className="mt-4 space-y-2 text-sm text-stone-600">
              <p>Savory Pancakes</p>
              <p>Sweet Pancakes</p>
              <p>Lunch Sets</p>
              <p>Combos & Drinks</p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-900">Jüri</h3>
            <div className="mt-4 space-y-2 text-sm text-stone-600">
              <p>Veetorni 9, Jüri</p>
              <p>{t('footer.hours')}</p>
              <p>hello@blinnyking.ee</p>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-100 px-4 py-4 text-center text-xs text-stone-500 sm:px-6 lg:px-8">
          © 2026 BlinnyKing · {t('footer.rights')}
        </div>
      </footer>
    </div>
  );
}
