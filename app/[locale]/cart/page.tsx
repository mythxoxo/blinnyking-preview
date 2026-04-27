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
            <div key={item.name} className="rounded-[28px] border border-[#6d4b13] bg-[#24140b] p-5 shadow-sm shadow-black/30">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-[#fff4d1]">{item.name}</h3>
                  <p className="mt-1 text-sm text-[#b89d69]">{item.size} · {t('qty')} {item.qty}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.extras.map((extra) => (
                      <Pill key={extra}>{extra}</Pill>
                    ))}
                  </div>
                </div>
                <div className="text-lg font-semibold text-[#ffd25b]">€{(item.price * item.qty).toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
          <h2 className="text-2xl font-semibold text-[#fff4d1]">{t('summary')}</h2>
          <div className="mt-6 grid gap-3 text-sm text-[#d7c190]">
            <div className="flex items-center justify-between"><span>{t('subtotal')}</span><span>€{cartSummary.subtotal.toFixed(2)}</span></div>
            <div className="flex items-center justify-between"><span>{t('delivery')}</span><span>€{cartSummary.delivery.toFixed(2)}</span></div>
            <div className="flex items-center justify-between border-t border-[#6d4b13] pt-3 text-base font-semibold text-[#fff4d1]"><span>{t('total')}</span><span>€{cartSummary.total.toFixed(2)}</span></div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button className="rounded-full bg-[#ffd25b] px-4 py-3 text-sm font-semibold text-[#170c06]">{t('pickup')}</button>
            <button className="rounded-full border border-[#6d4b13] bg-[#170c06] px-4 py-3 text-sm font-semibold text-[#f7e5b4]">{t('deliveryMode')}</button>
          </div>

          <div className="mt-6 space-y-4">
            <Input placeholder={t('location')} />
            <Input placeholder={t('phone')} />
            <div className="rounded-[28px] border border-dashed border-[#6d4b13] bg-[#170c06] p-5">
              <p className="text-sm font-semibold text-[#fff4d1]">{t('stripeTitle')}</p>
              <p className="mt-2 text-sm leading-6 text-[#b89d69]">{t('stripeText')}</p>
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
