import {getRequestConfig} from 'next-intl/server';
import {defaultLocale, isValidLocale} from './routing';

export default getRequestConfig(async ({locale}) => {
  const requestedLocale = locale ?? defaultLocale;
  const activeLocale = isValidLocale(requestedLocale) ? requestedLocale : defaultLocale;

  return {
    locale: activeLocale,
    messages: (await import(`../messages/${activeLocale}.json`)).default
  };
});
