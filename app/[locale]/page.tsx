import type {Metadata} from 'next';
import {HomeSections} from '@/components/sections/home-sections';
import {Locale} from '@/i18n/routing';

export async function generateMetadata({params}: {params: {locale: Locale}}): Promise<Metadata> {
  const meta = {
    et: {
      title: 'Blinny King — Pannkoogikohvik Jüris | Suured pannkoogid',
      description: 'Hubane pannkoogikohvik Jüris. Soolased ja magusad pannkoogid Ø30–40cm, lõunapakkumised, Bolt ja Wolt kohaletoimetamine.',
      locale: 'et_EE'
    },
    ru: {
      title: 'Blinny King — Блинная в Юри | Большие блины',
      description: 'Уютная блинная в Юри. Большие сладкие и сытные блины, ланчи, доставка Bolt и Wolt.',
      locale: 'ru_RU'
    },
    en: {
      title: 'Blinny King — Pancake Café in Jüri, Estonia',
      description: 'Warm pancake café in Jüri, Estonia with savory and sweet pancakes, lunch offers and Bolt/Wolt delivery.',
      locale: 'en_US'
    }
  }[params.locale];

  return {
    title: meta.title,
    description: meta.description,
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: 'https://blinnyking.ee',
      siteName: 'Blinny King',
      images: [{url: '/og-image.jpg', width: 1200, height: 630}],
      locale: meta.locale
    }
  };
}

export default function HomePage({params}: {params: {locale: Locale}}) {
  return <HomeSections locale={params.locale} />;
}
