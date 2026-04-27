import {getTranslations} from 'next-intl/server';
import {ActionLink, Section, SectionHeader} from '@/components/shared/ui';

export default async function OrderPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'nav'});

  return (
    <Section>
      <SectionHeader
        eyebrow={t('order')}
        title={params.locale === 'et' ? 'Telli oma pannkoogid kiiresti' : params.locale === 'ru' ? 'Закажи блины быстро и удобно' : 'Order your pancakes quickly and easily'}
        description={params.locale === 'et' ? 'Vali menüüst sobivad pannkoogid ja jätka tellimusega.' : params.locale === 'ru' ? 'Выбери подходящие позиции из меню и продолжи оформление заказа.' : 'Choose your pancakes from the menu and continue to checkout.'}
      />
      <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-8 text-[#d7c190] shadow-sm shadow-black/30">
        <p>{params.locale === 'et' ? 'Tellimise jaoks ava menüü ja lisa soovitud pannkoogid ostukorvi.' : params.locale === 'ru' ? 'Для заказа открой меню и добавь нужные блины в корзину.' : 'Open the menu and add your preferred pancakes to the cart to start ordering.'}</p>
        <div className="mt-6">
          <ActionLink href={`/${params.locale}/menu`}>{params.locale === 'et' ? 'Vaata menüüd' : params.locale === 'ru' ? 'Смотреть меню' : 'View menu'}</ActionLink>
        </div>
      </div>
    </Section>
  );
}
