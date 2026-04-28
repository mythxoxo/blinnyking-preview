import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {auth} from '@/auth';
import {Footer} from '@/components/layout/footer';
import {Navbar} from '@/components/layout/navbar';
import {Locale, isValidLocale} from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  if (!isValidLocale(params.locale)) notFound();

  const locale = params.locale as Locale;
  setRequestLocale(locale);
  const messages = await getMessages();
  await auth();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Navbar />
      <main>{children}</main>
      <Footer locale={locale} />
    </NextIntlClientProvider>
  );
}
