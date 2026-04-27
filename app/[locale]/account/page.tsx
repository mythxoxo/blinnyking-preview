import {getTranslations} from 'next-intl/server';
import {auth} from '@/auth';
import {DemoAccount} from '@/components/account/demo-account';
import {Section} from '@/components/shared/ui';
import {orderHistory} from '@/data/site';
import {Locale} from '@/i18n/routing';

export default async function AccountPage({
  params,
  searchParams
}: {
  params: {locale: Locale};
  searchParams?: {tab?: string};
}) {
  const t = await getTranslations({locale: params.locale, namespace: 'account'});
  const session = await auth();
  const tab = searchParams?.tab;
  const initialTab = tab === 'register' || tab === 'guest' ? tab : 'login';

  const localizedOrders = orderHistory.map((order) => ({
    ...order,
    status: order.status === 'Delivered' ? t('statusDelivered') : t('statusPickup')
  }));

  return (
    <Section>
      <DemoAccount
        locale={params.locale}
        initialTab={initialTab}
        user={session?.user ?? null}
        copy={{
          eyebrow: t('eyebrow'),
          title: t('title'),
          description: t('description'),
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
          emptyHistory: t('emptyHistory'),
          tabLogin: t('tabLogin'),
          tabRegister: t('tabRegister'),
          tabGuest: t('tabGuest'),
          forgot: t('forgot'),
          repeatPassword: t('repeatPassword'),
          createAccount: t('createAccount'),
          terms: t('terms'),
          guestName: t('guestName'),
          guestPhone: t('guestPhone'),
          guestEmailOptional: t('guestEmailOptional'),
          guestContinue: t('guestContinue')
        }}
        orders={localizedOrders}
      />
    </Section>
  );
}
