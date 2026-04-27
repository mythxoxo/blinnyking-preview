import Link from 'next/link';
import {InputHTMLAttributes, ReactNode, TextareaHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';

export function Section({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={cn('mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16', className)}>{children}</section>;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left'
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('mb-8 max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-orange-600">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-stone-600">{description}</p> : null}
    </div>
  );
}

export function StatCard({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-3xl border border-orange-100 bg-white/90 p-5 shadow-sm shadow-orange-950/5">
      <div className="text-2xl font-semibold text-stone-950">{value}</div>
      <div className="mt-1 text-sm text-stone-600">{label}</div>
    </div>
  );
}

export function PlaceholderImage({label, className}: {label: string; className?: string}) {
  return (
    <div
      className={cn(
        'flex min-h-[220px] items-end rounded-[28px] border border-orange-200 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.38),_rgba(255,247,237,0.94)_45%,_rgba(120,53,15,0.15)_100%)] p-5 text-sm font-medium text-stone-700',
        className
      )}
    >
      <span className="rounded-full bg-white/80 px-3 py-1 backdrop-blur">Photo placeholder · {label}</span>
    </div>
  );
}

export function Pill({children}: {children: ReactNode}) {
  return <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{children}</span>;
}

export function ActionLink({href, children, muted = false}: {href: string; children: ReactNode; muted?: boolean}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition',
        muted ? 'bg-white text-stone-900 ring-1 ring-stone-200 hover:bg-stone-50' : 'bg-stone-950 text-white hover:bg-stone-800'
      )}
    >
      {children}
    </Link>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('h-11 w-full rounded-2xl border border-stone-200 bg-white px-4 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-200', props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn('min-h-[120px] w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-orange-300 focus:ring-2 focus:ring-orange-200', props.className)} />;
}
