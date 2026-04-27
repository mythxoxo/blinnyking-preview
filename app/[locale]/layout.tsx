import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {auth} from '@/auth';
import {SiteShell} from '@/components/layout/site-shell';
import {Locale, isValidLocale} from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const messages = await getMessages();
  const locale = params.locale as Locale;
  const session = await auth();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteShell locale={locale} session={session}>{children}</SiteShell>
    </NextIntlClientProvider>
  );
}
