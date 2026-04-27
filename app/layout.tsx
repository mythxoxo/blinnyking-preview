import type {Metadata} from 'next';
import {Inter, Manrope} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin', 'cyrillic'], variable: '--font-inter'});
const manrope = Manrope({subsets: ['latin', 'cyrillic'], variable: '--font-heading'});

export const metadata: Metadata = {
  title: 'Pannkoogid Jüris – Blinny King',
  description: 'Blinny King pannkoogirestoran Jüris.'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="et" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
