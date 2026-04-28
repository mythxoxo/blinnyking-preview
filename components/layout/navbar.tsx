'use client';

import Image from 'next/image';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Globe, Menu, ShoppingCart, X} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';
import {useMemo, useState} from 'react';
import {Button} from '@/components/ui/button';
import {BOLT_URL, WOLT_URL} from '@/data/locations';
import {locales} from '@/i18n/routing';
import {useCart} from '@/lib/store/cartStore';
import {cn} from '@/lib/utils';

const logoUrl = 'https://thb.tildacdn.net/tild3939-3438-4333-b530-623131363863/-/empty/log.png';
const navKeys = ['menu', 'promotions', 'about', 'locations', 'contacts'] as const;

function buildLocaleHref(pathname: string | null, currentLocale: string, nextLocale: string) {
  if (!pathname || pathname === '/') return `/${nextLocale}`;
  const segments = pathname.split('/').filter(Boolean);
  if (segments[0] === currentLocale) {
    segments[0] = nextLocale;
    return `/${segments.join('/')}`;
  }
  return `/${nextLocale}/${segments.join('/')}`;
}

export function Navbar() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const itemCount = useCart((state) => state.itemCount());
  const [open, setOpen] = useState(false);

  const localeLinks = useMemo(() => locales.map((code) => ({code, href: buildLocaleHref(pathname, locale, code)})), [locale, pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="relative h-9 w-[150px] shrink-0">
          <Image src={logoUrl} alt="Blinny King" fill className="object-contain object-left" sizes="150px" unoptimized />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navKeys.map((key) => (
            <Link key={key} href={`/${locale}/${key === 'menu' ? 'menu' : key}`} className="text-sm font-medium text-text transition hover:text-primary">
              {t(`nav.${key}`)}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={BOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-[#F2994A] px-3 py-2 text-xs font-semibold text-white">⚡ Bolt</a>
          <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-[#009DE0] px-3 py-2 text-xs font-semibold text-white">🔵 Wolt</a>
          <Link href={`/${locale}/order`} className="relative inline-flex items-center rounded-full border border-border bg-surface px-3 py-2 text-sm font-semibold text-text">
            <ShoppingCart className="mr-2 h-4 w-4" />
            {t('nav.cart')}
            {itemCount > 0 ? <span className="ml-2 inline-flex min-w-5 items-center justify-center rounded-full bg-primary px-1.5 py-0.5 text-[11px] font-bold text-white">{itemCount}</span> : null}
          </Link>
          <Link href={`/${locale}/account`}><Button size="sm">{t('nav.login')}</Button></Link>
          <div className="flex items-center gap-1 rounded-full border border-border bg-surface p-1">
            <Globe className="ml-2 h-4 w-4 text-text-muted" />
            {localeLinks.map(({code, href}) => (
              <Link key={code} href={href} className={cn('rounded-full px-2.5 py-1.5 text-xs font-semibold uppercase', code === locale ? 'bg-primary text-white' : 'text-text-muted hover:bg-tag')}>
                {code}
              </Link>
            ))}
          </div>
        </div>

        <button type="button" onClick={() => setOpen(true)} className="rounded-full border border-border bg-surface p-3 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 z-[70] bg-black/40 lg:hidden" onClick={() => setOpen(false)}>
          <div className="absolute bottom-0 left-0 right-0 rounded-t-[28px] bg-background p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-lg font-semibold text-text">Blinny King</p>
              <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 hover:bg-tag"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              {navKeys.map((key) => (
                <Link key={key} href={`/${locale}/${key === 'menu' ? 'menu' : key}`} onClick={() => setOpen(false)} className="block text-base font-medium text-text">
                  {t(`nav.${key}`)}
                </Link>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <a href={BOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-[#F2994A] px-3 py-2 text-xs font-semibold text-white">⚡ Bolt</a>
              <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-[#009DE0] px-3 py-2 text-xs font-semibold text-white">🔵 Wolt</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 rounded-3xl border border-border bg-surface p-2">
              {localeLinks.map(({code, href}) => (
                <Link key={code} href={href} onClick={() => setOpen(false)} className={cn('rounded-full px-3 py-2 text-xs font-semibold uppercase', code === locale ? 'bg-primary text-white' : 'text-text-muted')}>
                  {code}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
