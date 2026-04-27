import Image from 'next/image';
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
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description ? <p className="mt-3 text-base leading-7 text-text-muted">{description}</p> : null}
    </div>
  );
}

export function StatCard({label, value}: {label: string; value: string}) {
  return (
    <div className="rounded-3xl border border-border bg-surface p-5 shadow-soft">
      <div className="text-2xl font-semibold text-text">{value}</div>
      <div className="mt-1 text-sm text-text-muted">{label}</div>
    </div>
  );
}

export function MediaImage({src, alt, className}: {src: string; alt: string; className?: string}) {
  return (
    <div className={cn('relative overflow-hidden rounded-[28px] bg-tag', className)}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" unoptimized />
    </div>
  );
}

export function PlaceholderImage({label, className}: {label: string; className?: string}) {
  return <div className={cn('flex min-h-[220px] items-end rounded-[28px] border border-border bg-tag p-5 text-sm font-medium text-text-muted', className)}><span>{label}</span></div>;
}

export function Pill({children, className}: {children: ReactNode; className?: string}) {
  return <span className={cn('inline-flex rounded-full bg-tag px-3 py-1 text-xs font-semibold text-primary', className)}>{children}</span>;
}

export function ActionLink({href, children, muted = false, className}: {href: string; children: ReactNode; muted?: boolean; className?: string}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition',
        muted ? 'bg-surface text-text ring-1 ring-border hover:bg-tag' : 'bg-primary text-white hover:bg-primary-hover',
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn('h-11 w-full rounded-2xl border border-border bg-surface px-4 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20', props.className)} />;
}

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn('min-h-[120px] w-full rounded-2xl border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/20', props.className)} />;
}
