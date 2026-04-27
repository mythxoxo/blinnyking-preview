import Link from 'next/link';
import {InputHTMLAttributes, ReactNode, TextareaHTMLAttributes} from 'react';
import {cn} from '@/lib/utils';

export function Section({
  children,
  className,
  id
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return <section id={id} className={cn('mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16', className)}>{children}</section>;
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
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#ffd25b]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[#fff4d1] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-[#d7c190]">{description}</p> : null}
    </div>
  );
}

export function StatCard({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-3xl border border-[#6d4b13] bg-[#24140b] p-5 shadow-sm shadow-black/30">
      <div className="text-2xl font-semibold text-[#fff4d1]">{value}</div>
      <div className="mt-1 text-sm text-[#d7c190]">{label}</div>
    </div>
  );
}

export function PlaceholderImage({label, className}: {label: string; className?: string}) {
  return (
    <div
      className={cn(
        'flex min-h-[220px] items-end rounded-[28px] border border-[#6d4b13] bg-[radial-gradient(circle_at_top_left,_rgba(255,210,91,0.34),_rgba(48,25,10,0.92)_45%,_rgba(10,4,2,0.98)_100%)] p-5 text-sm font-medium text-[#fff4d1]',
        className
      )}
    >
      <span className="rounded-full bg-[#170c06]/80 px-3 py-1 backdrop-blur">Photo placeholder · {label}</span>
    </div>
  );
}

export function Pill({children}: {children: ReactNode}) {
  return <span className="inline-flex rounded-full bg-[#ffd25b] px-3 py-1 text-xs font-semibold text-[#170c06]">{children}</span>;
}

export function ActionLink({href, children, muted = false}: {href: string; children: ReactNode; muted?: boolean}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition',
        muted ? 'bg-[#24140b] text-[#f7e5b4] ring-1 ring-[#6d4b13] hover:bg-[#3a2416]' : 'bg-[#ffd25b] text-[#170c06] hover:bg-[#ffdd7f]'
      )}
    >
      {children}
    </Link>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('h-11 w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 text-sm text-[#fff4d1] outline-none transition placeholder:text-[#b89d69] focus:border-[#ffd25b] focus:ring-2 focus:ring-[#6d4b13]', props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn('min-h-[120px] w-full rounded-2xl border border-[#6d4b13] bg-[#170c06] px-4 py-3 text-sm text-[#fff4d1] outline-none transition placeholder:text-[#b89d69] focus:border-[#ffd25b] focus:ring-2 focus:ring-[#6d4b13]', props.className)} />;
}
