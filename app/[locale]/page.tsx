import {HomeSections} from '@/components/sections/home-sections';
import {Locale} from '@/i18n/routing';

export default function HomePage({params}: {params: {locale: Locale}}) {
  return <HomeSections locale={params.locale} />;
}
