import Link from 'next/link';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {getItemBySlug} from '@/data/menu';
import {MediaImage, Pill, Section} from '@/components/shared/ui';
import {Locale} from '@/i18n/routing';

export default async function ProductPage({params}: {params: {locale: Locale; slug: string}}) {
  const item = getItemBySlug(params.slug);
  const t = await getTranslations({locale: params.locale});

  if (!item) {
    notFound();
  }

  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <MediaImage src={item.imageUrl} alt={t(item.nameKey)} className="h-[520px]" />
        <div className="rounded-[32px] border border-border bg-surface p-6 shadow-soft sm:p-8">
          <div className="flex flex-wrap gap-2">
            <Pill>{t(`categories.${item.category}`)}</Pill>
            {item.tags?.map((tag) => <Pill key={tag}>{t(`tags.${tag}`)}</Pill>)}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-text">{t(item.nameKey)}</h1>
          <p className="mt-4 text-base leading-7 text-text-muted">{t(item.descKey)}</p>
          <div className="mt-6 text-3xl font-semibold text-primary">€{Math.min(...Object.values(item.prices)).toFixed(2)}</div>
          <Link href={`/${params.locale}/menu`} className="mt-6 inline-flex text-sm font-semibold text-primary hover:text-primary-hover">
            ← {t('nav.menu')}
          </Link>
        </div>
      </div>
    </Section>
  );
}
