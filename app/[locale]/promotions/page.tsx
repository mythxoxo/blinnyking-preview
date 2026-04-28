import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {Button} from '@/components/ui/button';

export default async function PromotionsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'promotions'});

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <div className="rounded-2xl bg-[var(--color-accent)] p-8 text-[var(--color-dark)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em]">{t('lunchTitle')}</p>
          <div className="mt-3 text-5xl font-semibold">−20%</div>
          <p className="mt-3 text-base">{t('lunchText')}</p>
        </div>
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">{t('loyaltyTitle')} 👑</h2>
          <p className="mt-4 text-text-muted">{t('loyaltyText')}</p>
          <div className="mt-6"><a href="mailto:info@blinnyking.ee"><Button>{t('site.register')}</Button></a></div>
        </div>
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">{t('comboTitle')}</h2>
          <p className="mt-4 text-text-muted">{t('comboText')}</p>
          <div className="mt-6"><Link href={`/${params.locale}/menu`}><Button variant="outline">{t('viewMenu')}</Button></Link></div>
        </div>
      </div>
    </div>
  );
}
