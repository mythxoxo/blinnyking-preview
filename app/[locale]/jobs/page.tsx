import {getTranslations} from 'next-intl/server';

export default async function JobsPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'jobsPage'});

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="rounded-2xl bg-surface p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">{t('eyebrow')}</p>
        <h1 className="mt-4 text-4xl font-semibold text-text">{t('title')}</h1>
        <p className="mt-5 text-base leading-8 text-text-muted">{t('vacancyText')}</p>
        <ul className="mt-6 space-y-3 text-text-muted">
          <li>• 8€/tund</li>
          <li>• Sõidukompensatsioon 50€/kuu</li>
          <li>• Tasuta lõunasöök</li>
          <li>• Paindlik graafik</li>
        </ul>
        <div className="mt-8"><a href="mailto:info@blinnyking.ee" className="inline-flex rounded-full bg-primary px-7 py-[14px] text-sm font-semibold text-white">Saada CV aadressile info@blinnyking.ee</a></div>
      </div>
    </div>
  );
}
