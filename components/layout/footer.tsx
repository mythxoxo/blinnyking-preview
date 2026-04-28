import Image from 'next/image';
import Link from 'next/link';
import {Facebook} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

const logoUrl = 'https://thb.tildacdn.net/tild3939-3438-4333-b530-623131363863/-/empty/log.png';

export async function Footer({locale}: {locale: string}) {
  const t = await getTranslations({locale});

  return (
    <footer className="border-t border-border bg-surface/80">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="relative h-10 w-[150px]">
            <Image src={logoUrl} alt="Blinny King" fill className="object-contain object-left" sizes="150px" unoptimized />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-text-muted">{t('about.description')}</p>
          <a href="https://www.facebook.com/people/Blinny-King-Pannkoogirestoran-J%C3%BCri/100070004895711/" target="_blank" rel="noopener" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary">
            <Facebook className="h-4 w-4" /> {t('common.facebook')}
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text">{t('site.footerNav')}</h3>
          <div className="mt-4 grid gap-1.5 text-sm text-text-muted">
            <Link href={`/${locale}/menu`}>{t('nav.menu')}</Link>
            <Link href={`/${locale}/promotions`}>{t('nav.promotions')}</Link>
            <Link href={`/${locale}/about`}>{t('nav.about')}</Link>
            <Link href={`/${locale}/locations`}>{t('nav.locations')}</Link>
            <Link href={`/${locale}/partners`}>{t('nav.partners')}</Link>
            <Link href={`/${locale}/jobs`}>{t('nav.jobs')}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text">{t('nav.contacts')}</h3>
          <div className="mt-4 space-y-2 text-sm text-text-muted">
            <p>Veetorni tn 9, Jüri</p>
            <p>+372 5685 9075</p>
            <p>info@blinnyking.ee</p>
            <p>{t('footer.hoursWeek')}</p>
            <p>{t('footer.hoursSat')}</p>
            <p>{t('footer.hoursSun')}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-sm text-text-muted">© 2025 Avgusta OÜ — Registrikood: 12476156</div>
    </footer>
  );
}
