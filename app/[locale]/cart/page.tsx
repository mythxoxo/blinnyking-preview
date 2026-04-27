import {getTranslations} from 'next-intl/server';
import {cartItems, cartSummary} from '@/data/cart';
import {ActionLink, Input, Pill, Section, SectionHeader} from '@/components/shared/ui';

export default async function CartPage({params}: {params: {locale: string}}) {
  const t = await getTranslations({locale: params.locale, namespace: 'cart'});

  return (
    <Section>
      <SectionHeader
        eyebrow={t('eyebrow')}
        title={t('title')}
        description={t('description')}
      />
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div key={item.name} className="rounded-[28px] border border-orange-100 bg-white p-5 shadow-sm shadow-orange-950/5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-stone-950">{item.name}</h3>
                  <p className="mt-1 text-sm text-stone-500">{item.size} · {t('qty')} {item.qty}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.extras.map((extra) => (
                      <Pill key={extra}>{extra}</Pill>
                    ))}
                  </div>
                </div>
                <div className="text-lg font-semibold text-stone-950">€{(item.price * item.qty).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[32px] border border-orange-100 bg-[#fff5ea] p-6 shadow-sm shadow-orange-950/5">
          <h2 className="text-2xl font-semibold text-stone-950">{t('summary')}</h2>
          <div className="mt-6 grid gap-3 text-sm text-stone-600">
            <div className="flex items-center justify-between"><span>{t('subtotal')}</span><span>€{cartSummary.subtotal.toFixed(2)}</span></div>
            <div className="flex items-center justify-between"><span>{t('delivery')}</span><span>€{cartSummary.delivery.toFixed(2)}</span></div>
            <div className="flex items-center justify-between border-t border-orange-200 pt-3 text-base font-semibold text-stone-950"><span>{t('total')}</span><span>€{cartSummary.total.toFixed(2)}</span></div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button className="rounded-full bg-stone-950 px-4 py-3 text-sm font-semibold text-white">{t('pickup')}</button>
            <button className="rounded-full border border-stone-200 bg-white px-4 py-3 text-sm font-semibold text-stone-700">{t('deliveryMode')}</button>
          </div>

          <div className="mt-6 space-y-4">
            <Input placeholder={t('location')} />
            <Input placeholder={t('phone')} />
            <div className="rounded-[28px] border border-dashed border-stone-300 bg-white p-5">
              <p className="text-sm font-semibold text-stone-900">{t('stripeTitle')}</p>
              <p className="mt-2 text-sm leading-6 text-stone-500">{t('stripeText')}</p>
            </div>
          </div>

          <div className="mt-6">
            <ActionLink href={`/${params.locale}/account`}>{t('proceed')}</ActionLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
