import type {Metadata} from 'next';
import {DM_Sans, Playfair_Display} from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({subsets: ['latin', 'cyrillic'], variable: '--font-display'});
const dmSans = DM_Sans({subsets: ['latin', 'latin-ext'], variable: '--font-body'});

export const metadata: Metadata = {
  title: 'Blinny King',
  description: 'Blinny King pancake restaurant in Jüri.'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html suppressHydrationWarning lang="et" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
