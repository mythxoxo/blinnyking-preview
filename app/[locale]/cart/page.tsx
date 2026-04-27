import {redirect} from 'next/navigation';

export default function CartPage({params}: {params: {locale: string}}) {
  redirect(`/${params.locale}/order`);
}
