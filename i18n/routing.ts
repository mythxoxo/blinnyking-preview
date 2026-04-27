export const locales = ["et", "ru", "en"] as const;
export const defaultLocale = "et";

export type Locale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
