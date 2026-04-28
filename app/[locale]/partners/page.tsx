import Image from 'next/image';

export default function PartnersPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-2xl bg-surface p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Partnerid</p>
          <h1 className="mt-4 text-4xl font-semibold text-text">Koostööpartnerid</h1>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="relative h-28 rounded-2xl bg-white p-4">
              <Image src="https://static.tildacdn.com/tild3030-3064-4239-b236-623133383632/partner.png" alt="Sintai" fill className="object-contain p-4" sizes="200px" unoptimized />
            </div>
            <div className="relative h-28 rounded-2xl bg-white p-4">
              <Image src="https://static.tildacdn.com/tild3239-3831-4161-a536-383631366465/cardom.png" alt="CARDOM" fill className="object-contain p-4" sizes="200px" unoptimized />
            </div>
          </div>
        </div>
        <form action="mailto:info@blinnyking.ee" className="rounded-2xl bg-surface p-8">
          <h2 className="text-3xl font-semibold text-text">Uus partnerlus</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input placeholder="Nimi" className="h-12 rounded-2xl border border-border bg-white px-4" />
            <input placeholder="Email" className="h-12 rounded-2xl border border-border bg-white px-4" />
            <input placeholder="Telefon" className="h-12 rounded-2xl border border-border bg-white px-4 sm:col-span-2" />
            <textarea placeholder="Kommentaar" className="min-h-[140px] rounded-2xl border border-border bg-white px-4 py-3 sm:col-span-2" />
          </div>
          <button className="mt-6 rounded-full bg-primary px-7 py-[14px] text-sm font-semibold text-white">Saada</button>
        </form>
      </div>
    </div>
  );
}
