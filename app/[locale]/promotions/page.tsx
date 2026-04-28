import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function PromotionsPage({params}: {params: {locale: string}}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <div className="rounded-2xl bg-[var(--color-accent)] p-8 text-[var(--color-dark)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em]">Lõunapakkumine</p>
          <div className="mt-3 text-5xl font-semibold">−20%</div>
          <p className="mt-3 text-base">E-R 11:00–15:00 · valitud lõunatooted igal tööpäeval.</p>
        </div>
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">Püsikliendi programm 👑</h2>
          <p className="mt-4 text-text-muted">−5% igal külastusel + −15% sünnipäeval.</p>
          <div className="mt-6"><a href="mailto:info@blinnyking.ee"><Button>Registreeru</Button></a></div>
        </div>
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">Kombopakkumised</h2>
          <p className="mt-4 text-text-muted">Perekombo, magus kombo ja lõunapakkumised on saadaval menüüs.</p>
          <div className="mt-6"><Link href={`/${params.locale}/menu`}><Button variant="outline">Vaata menüüd</Button></Link></div>
        </div>
      </div>
    </div>
  );
}
