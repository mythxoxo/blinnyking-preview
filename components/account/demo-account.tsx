'use client';

import {useMemo, useState} from 'react';

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
  email: string;
  password: string;
  name: string;
  logout: string;
  loggedInAs: string;
  profileTitle: string;
  profileMode: string;
  profileFavorite: string;
  pickup: string;
  historyTitle: string;
  emptyHistory: string;
  tabLogin: string;
  tabRegister: string;
  tabGuest: string;
  continue: string;
  forgot: string;
  repeatPassword: string;
  createAccount: string;
  terms: string;
  guestName: string;
  guestPhone: string;
  guestEmailOptional: string;
  guestContinue: string;
};

type SessionUser = {
  name?: string | null;
  email?: string | null;
};

type Tab = 'login' | 'register' | 'guest';
const storageKey = 'blinnyking-demo-user';

export function DemoAccount({
  copy,
  orders,
  user,
  locale,
  initialTab
}: {
  copy: Copy;
  orders: Order[];
  user: SessionUser | null;
  locale: string;
  initialTab: Tab;
}) {
  const [tab, setTab] = useState<Tab>(initialTab);
  const [loginEmail, setLoginEmail] = useState(user?.email || '');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [guestEmail, setGuestEmail] = useState('');

  const profileName = useMemo(() => user?.name || 'Külaline', [user]);

  function storeUser(name: string, email: string) {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, JSON.stringify({name, email}));
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffd25b]">{copy.eyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold text-[#fff4d1]">{copy.title}</h1>
        <p className="mt-3 text-sm leading-7 text-[#d7c190]">{copy.description}</p>

        {user ? (
          <div className="mt-6 rounded-[24px] bg-[#170c06] p-5 text-sm text-[#e7d1a2]">
            <p className="font-semibold text-[#fff4d1]">{copy.loggedInAs}</p>
            <p className="mt-2">{user.name}</p>
            <p>{user.email}</p>
            <form action="/api/auth/signout" method="post">
              <input type="hidden" name="callbackUrl" value={`/${locale}/account`} />
              <button
                onClick={() => typeof window !== 'undefined' && window.localStorage.removeItem(storageKey)}
                className="mt-5 rounded-full bg-[#ffd25b] px-4 py-2 text-sm font-semibold text-[#170c06]"
              >
                {copy.logout}
              </button>
            </form>
          </div>
        ) : (
          <div className="mt-6">
            <div className="flex flex-wrap gap-2">
              {(['login', 'register', 'guest'] as Tab[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${tab === key ? 'bg-[#ffd25b] text-[#170c06]' : 'border border-[#6d4b13] bg-[#170c06] text-[#f7e5b4]'}`}
                >
                  {key === 'login' ? copy.tabLogin : key === 'register' ? copy.tabRegister : copy.tabGuest}
                </button>
              ))}
            </div>

            {tab === 'login' ? (
              <form className="mt-5 space-y-4" action="/api/auth/callback/credentials" method="post" onSubmit={() => storeUser('Külaline', loginEmail)}>
                <input type="hidden" name="callbackUrl" value={`/${locale}/account`} />
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.email}</label>
                  <input name="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} placeholder={copy.email} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.password}</label>
                  <input name="password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} placeholder={copy.password} type="password" className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <button className="w-full rounded-full bg-[#ffd25b] px-4 py-3 text-sm font-semibold text-[#170c06]">{copy.tabLogin}</button>
                <button type="button" className="text-sm text-[#d7c190] underline">{copy.forgot}</button>
              </form>
            ) : null}

            {tab === 'register' ? (
              <form className="mt-5 space-y-4" action="/api/auth/callback/credentials" method="post" onSubmit={() => storeUser(registerName || 'Külaline', registerEmail)}>
                <input type="hidden" name="callbackUrl" value={`/${locale}/account`} />
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.name}</label>
                  <input name="name" value={registerName} onChange={(e) => setRegisterName(e.target.value)} placeholder={copy.name} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.email}</label>
                  <input name="email" value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} placeholder={copy.email} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.password}</label>
                  <input name="password" value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} placeholder={copy.password} type="password" className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.repeatPassword}</label>
                  <input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} placeholder={copy.repeatPassword} type="password" className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <label className="flex items-center gap-2 text-sm text-[#d7c190]">
                  <input type="checkbox" required /> {copy.terms}
                </label>
                <button className="w-full rounded-full bg-[#ffd25b] px-4 py-3 text-sm font-semibold text-[#170c06]">{copy.createAccount}</button>
              </form>
            ) : null}

            {tab === 'guest' ? (
              <form className="mt-5 space-y-4" action={`/${locale}/menu`} method="get">
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.guestName}</label>
                  <input value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder={copy.guestName} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.guestPhone}</label>
                  <input value={guestPhone} onChange={(e) => setGuestPhone(e.target.value)} placeholder={copy.guestPhone} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#f7e5b4]">{copy.guestEmailOptional}</label>
                  <input value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} placeholder={copy.guestEmailOptional} className="h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none" />
                </div>
                <button className="w-full rounded-full bg-[#ffd25b] px-4 py-3 text-sm font-semibold text-[#170c06]">{copy.guestContinue}</button>
              </form>
            ) : null}
          </div>
        )}

        <div className="mt-8 rounded-[24px] bg-[#170c06] p-5 text-sm text-[#d7c190]">
          <p className="font-semibold text-[#fff4d1]">{copy.profileTitle}</p>
          <p className="mt-2">Name: {profileName}</p>
          <p>{copy.profileMode}: {copy.pickup}</p>
          <p>{copy.profileFavorite}: Sink ja juust klassika</p>
        </div>
      </div>

      <div className="rounded-[32px] border border-[#6d4b13] bg-[#24140b] p-6 shadow-sm shadow-black/30">
        <h2 className="text-2xl font-semibold text-[#fff4d1]">{copy.historyTitle}</h2>
        <div className="mt-5 space-y-4">
          {orders.length ? (
            orders.map((order) => (
              <div key={order.id} className="rounded-[24px] bg-[#170c06] p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#ffd25b]">{order.id}</p>
                    <p className="mt-2 text-sm text-[#b89d69]">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-[#fff4d1]">{order.total}</p>
                    <p className="mt-2 text-sm text-[#b89d69]">{order.status}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[24px] bg-[#170c06] p-5 text-sm text-[#b89d69]">{copy.emptyHistory}</div>
          )}
        </div>
      </div>
    </div>
  );
}
