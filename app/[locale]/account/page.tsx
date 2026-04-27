import {getTranslations} from 'next-intl/server';
import {DemoAccount} from '@/components/account/demo-account';
import {Section} from '@/components/shared/ui';
import {orderHistory} from '@/data/site';
import {Locale} from '@/i18n/routing';

export default async function AccountPage({params}: {params: {locale: Locale}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'account'});

  const localizedOrders = orderHistory.map((order) => ({
    ...order,
    status: order.status === 'Delivered' ? t('statusDelivered') : t('statusPickup')
  }));

  return (
    <Section>
      <DemoAccount
        copy={{
          eyebrow: t('eyebrow'),
          title: t('title'),
          description: t('description'),
          loginTitle: t('loginTitle'),
          email: t('email'),
          password: t('password'),
          name: t('name'),
          continue: t('continue'),
          logout: t('logout'),
          loggedInAs: t('loggedInAs'),
          profileTitle: t('profileTitle'),
          profileMode: t('profileMode'),
          profileFavorite: t('profileFavorite'),
          pickup: t('pickup'),
          historyTitle: t('historyTitle'),
          guestHint: t('guestHint'),
          emptyHistory: t('emptyHistory')
        }}
        orders={localizedOrders}
      />
    </Section>
  );
}
