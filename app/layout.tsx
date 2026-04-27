import type {Metadata} from 'next';
import {Inter, Manrope} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin', 'cyrillic'], variable: '--font-inter'});
const manrope = Manrope({subsets: ['latin', 'cyrillic'], variable: '--font-heading'});

export const metadata: Metadata = {
  title: 'BlinnyKing Preview',
  description: 'Warm food brand preview built with Next.js 14, Tailwind and shadcn/ui patterns.'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
