import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
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

  const locale = params.locale as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();
  const session = await auth();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SiteShell locale={locale} session={session}>{children}</SiteShell>
    </NextIntlClientProvider>
  );
}
