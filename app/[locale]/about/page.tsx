import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@/components/ui/button';

export default function AboutPage({params}: {params: {locale: string}}) {
  return (
    <div>
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Meist</p>
            <h1 className="mt-4 text-5xl font-semibold text-text">Blinny King on peresõbralik pannkoogikohvik Jüris</h1>
            <p className="mt-6 text-base leading-8 text-text-muted">Pakume suuri soolaseid ja magusaid pannkooke, hubast atmosfääri ning kiiret teenindust. Meie eesmärk on teha iga külastus lihtsaks, maitsvaks ja soojaks.</p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
            <Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200&q=80" alt="Interior" fill className="object-cover" sizes="50vw" unoptimized />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:px-6 md:grid-cols-3 lg:px-8">
        <div className="rounded-2xl bg-surface p-6"><div className="text-4xl font-semibold text-primary">Ø30 / Ø40</div><p className="mt-3 text-text-muted">cm pannkoogid</p></div>
        <div className="rounded-2xl bg-surface p-6"><div className="text-4xl font-semibold text-primary">Iga päev</div><p className="mt-3 text-text-muted">värskelt valmistatud</p></div>
        <div className="rounded-2xl bg-surface p-6"><div className="text-4xl font-semibold text-primary">Alates 2020</div><p className="mt-3 text-text-muted">teenindame Jüri kogukonda</p></div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">Tööpakkumised</h2>
          <p className="mt-4 text-text-muted">Otsime rõõmsaid ja töökaid inimesi kööki ja teenindusse.</p>
          <div className="mt-6"><Link href={`/${params.locale}/jobs`}><Button>Vaata vakantsse</Button></Link></div>
        </div>
      </section>
    </div>
  );
}
