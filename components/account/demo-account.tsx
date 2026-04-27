'use client';

import {FormEvent, useEffect, useMemo, useState} from 'react';

type Order = {
  id: string;
  date: string;
  status: string;
  total: string;
};

type Copy = {
  eyebrow: string;
  title: string;
  description: string;
  loginTitle: string;
  email: string;
  password: string;
  name: string;
  continue: string;
  logout: string;
  loggedInAs: string;
  profileTitle: string;
  profileMode: string;
  profileFavorite: string;
  pickup: string;
  historyTitle: string;
  guestHint: string;
  emptyHistory: string;
};

type DemoUser = {
  name: string;
  email: string;
};

const STORAGE_KEY = 'blinnyking-demo-user';

export function DemoAccount({copy, orders}: {copy: Copy; orders: Order[]}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState<DemoUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setUser(JSON.parse(raw));
      } catch {}
    }
    setReady(true);
  }, []);

  const profileName = useMemo(() => user?.name || 'Yana Kask', [user]);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const nextUser = {
      name: name.trim() || 'Guest User',
      email: email.trim() || 'guest@blinnyking.ee'
    };
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
    setUser(nextUser);
    setPassword('');
  }

  function onLogout() {
    window.localStorage.removeItem(STORAGE_KEY);
    setUser(null);
    setEmail('');
    setPassword('');
    setName('');
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="rounded-[32px] border border-orange-100 bg-white p-6 shadow-sm shadow-orange-950/5">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">{copy.eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold text-stone-950">{copy.title}</h1>
        <p className="mt-3 text-sm leading-7 text-stone-600">{copy.description}</p>

        {!ready ? null : user ? (
          <div className="mt-6 rounded-[24px] bg-[#fff5ea] p-5 text-sm text-stone-700">
            <p className="font-semibold text-stone-950">{copy.loggedInAs}</p>
            <p className="mt-2">{user.name}</p>
            <p>{user.email}</p>
            <button onClick={onLogout} className="mt-5 rounded-full bg-stone-950 px-4 py-2 text-sm font-semibold text-white">
              {copy.logout}
            </button>
          </div>
        ) : (
          <form className="mt-6 space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">{copy.name}</label>
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder={copy.name} className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">{copy.email}</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={copy.email} className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-200" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">{copy.password}</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder={copy.password} type="password" className="h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-200" />
            </div>
            <button className="w-full rounded-full bg-stone-950 px-4 py-3 text-sm font-semibold text-white">{copy.continue}</button>
            <p className="text-sm leading-6 text-stone-500">{copy.guestHint}</p>
          </form>
        )}

        <div className="mt-8 rounded-[24px] bg-[#fff5ea] p-5 text-sm text-stone-600">
          <p className="font-semibold text-stone-950">{copy.profileTitle}</p>
          <p className="mt-2">Name: {profileName}</p>
          <p>{copy.profileMode}: {copy.pickup}</p>
          <p>{copy.profileFavorite}: Ham & Cheese Classic</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-orange-100 bg-[#fff5ea] p-6 shadow-sm shadow-orange-950/5">
        <h2 className="text-2xl font-semibold text-stone-950">{copy.historyTitle}</h2>
        <div className="mt-5 space-y-4">
          {orders.length ? (
            orders.map((order) => (
              <div key={order.id} className="rounded-[24px] bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">{order.id}</p>
                    <p className="mt-2 text-sm text-stone-500">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-stone-950">{order.total}</p>
                    <p className="mt-2 text-sm text-stone-500">{order.status}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[24px] bg-white p-5 text-sm text-stone-500">{copy.emptyHistory}</div>
          )}
        </div>
      </div>
    </div>
  );
}
