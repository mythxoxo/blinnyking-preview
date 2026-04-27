export const locales = ["en", "ru", "et"] as const;
export const defaultLocale = "en";

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
