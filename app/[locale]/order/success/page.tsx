import {getTranslations} from 'next-intl/server';
import {Section, SectionHeader} from '@/components/shared/ui';

export default async function OrderSuccessPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale});

  return (
    <Section>
      <div className="rounded-[32px] border border-border bg-surface p-10 text-center shadow-soft">
        <SectionHeader title={t('order.successTitle')} description={t('order.successDescription')} align="center" />
      </div>
    </Section>
  );
}
