'use client';

import Image from 'next/image';
import Link from 'next/link';
import {Menu, ShoppingBag, X} from 'lucide-react';
import {useLocale, useTranslations} from 'next-intl';
import {useEffect, useMemo, useState} from 'react';
import {locales} from '@/i18n/routing';
import {useCartStore} from '@/lib/cart-store';
import {BOLT_URL, WOLT_URL} from '@/data/locations';
import {cn} from '@/lib/utils';

const logoUrl = 'https://thb.tildacdn.net/tild3939-3438-4333-b530-623131363863/-/empty/log.png';

const navMap = {
  menu: '/menu',
  promotions: '/promotions',
  about: '/about',
  contacts: '/contacts'
} as const;

function DeliveryButtons({compact = false}: {compact?: boolean}) {
  return (
    <div className="flex items-center gap-2">
      <a href={BOLT_URL} target="_blank" rel="noopener" className={cn('inline-flex items-center rounded-full px-4 py-2 text-sm font-medium text-white', compact ? 'bg-[#1C1C1C]' : 'bg-[#1C1C1C]')}>
        <span className="mr-2">⚡</span>
        {!compact ? 'Bolt' : 'Bolt'}
      </a>
      <a href={WOLT_URL} target="_blank" rel="noopener" className="inline-flex items-center rounded-full bg-[#009DE0] px-4 py-2 text-sm font-medium text-white">
        <span className="mr-2">🔵</span>
        {!compact ? 'Wolt' : 'Wolt'}
      </a>
    </div>
  );
}

export function SiteShell({
  children
}: {
  locale: string;
  children: React.ReactNode;
  session: unknown;
}) {
  const t = useTranslations();
  const locale = useLocale();
  const count = useCartStore((state) => state.count());
  const items = useCartStore((state) => state.items);
  const total = useCartStore((state) => state.total());
  const removeItem = useCartStore((state) => state.removeItem);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = useMemo(
    () => Object.entries(navMap).map(([key, href]) => ({key, href: `/${locale}${href}`})),
    [locale]
  );

  return (
    <div className="min-h-screen bg-background text-text">
      <header className={cn('sticky top-0 z-50 transition-all', scrolled ? 'bg-white/90 shadow-sm backdrop-blur' : 'bg-transparent')}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="relative h-14 w-[170px] shrink-0">
            <Image src={logoUrl} alt="Blinny King" fill className="object-contain object-left" sizes="170px" unoptimized />
          </Link>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} className="text-sm font-medium text-text transition hover:text-primary">
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:gap-3 md:flex">
            <DeliveryButtons compact />
            <button type="button" onClick={() => setCartOpen(true)} className="relative rounded-full border border-border bg-surface p-3 text-text">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 ? <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">{count}</span> : null}
            </button>
            <Link href={`/${locale}/account`} className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white transition hover:bg-primary-hover">
              {t('nav.login')}
            </Link>
            <div className="flex rounded-full border border-border bg-surface p-1">
              {locales.map((code) => (
                <Link key={code} href={`/${code}`} className={cn('rounded-full px-2.5 py-2 text-[11px] font-semibold uppercase lg:px-3 lg:text-xs', code === locale ? 'bg-primary text-white' : 'text-text-muted')}>
                  {code}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button type="button" onClick={() => setCartOpen(true)} className="relative rounded-full border border-border bg-surface p-3 text-text">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 ? <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary px-1 text-[11px] font-bold text-white">{count}</span> : null}
            </button>
            <button type="button" onClick={() => setMobileOpen(true)} className="rounded-full border border-border bg-surface p-3 text-text">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[60] bg-black/40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="ml-auto h-full w-[82%] max-w-sm bg-background p-6" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-lg font-semibold text-text">Blinny King</p>
              <button type="button" onClick={() => setMobileOpen(false)} className="rounded-full p-2 hover:bg-tag"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4">
              {navItems.map((item) => (
                <Link key={item.key} href={item.href} className="block text-base font-medium text-text" onClick={() => setMobileOpen(false)}>
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <DeliveryButtons />
              <Link href={`/${locale}/account`} className="rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-white">
                {t('nav.login')}
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      {cartOpen ? (
        <div className="fixed inset-0 z-[70] bg-black/40" onClick={() => setCartOpen(false)}>
          <div className="ml-auto flex h-full w-full max-w-md flex-col bg-surface p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-text">{t('nav.cart')}</h3>
              <button type="button" onClick={() => setCartOpen(false)} className="rounded-full p-2 hover:bg-tag"><X className="h-5 w-5" /></button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto">
              {items.length === 0 ? (
                <p className="text-sm text-text-muted">{t('cart.empty')}</p>
              ) : (
                items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="rounded-2xl border border-border p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-text">{item.name}</p>
                        <p className="mt-1 text-sm text-text-muted">{t(`size.${item.size}`)} · {item.quantity} × €{item.price.toFixed(2)}</p>
                      </div>
                      <button type="button" onClick={() => removeItem(item.id, item.size)} className="text-sm font-medium text-primary">×</button>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="mt-6 border-t border-border pt-4">
              <div className="mb-4 flex items-center justify-between text-base font-semibold text-text">
                <span>{t('order.total')}</span>
                <span>€{total.toFixed(2)}</span>
              </div>
              <Link href={`/${locale}/order`} onClick={() => setCartOpen(false)} className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-primary-hover">
                {t('cart.checkout')}
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <main>{children}</main>

      <footer className="border-t border-border bg-surface/80">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold text-text">{t('footer.title')}</h3>
              <p className="mt-3 text-sm text-text-muted">{t('footer.address')}</p>
              <p className="mt-1 text-sm text-text-muted">{t('footer.phone')}</p>
              <p className="mt-1 text-sm text-text-muted">{t('footer.email')}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-text">{t('footer.hoursTitle')}</p>
              <div className="mt-3 space-y-1 text-sm text-text-muted">
                <p>{t('footer.hoursWeek')}</p>
                <p>{t('footer.hoursSat')}</p>
                <p>{t('footer.hoursSun')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <DeliveryButtons />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
