import type {Metadata} from 'next';
import {Inter, Playfair_Display} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin', 'cyrillic'], variable: '--font-inter'});
const playfair = Playfair_Display({subsets: ['latin', 'cyrillic'], variable: '--font-heading'});

export const metadata: Metadata = {
  title: 'Blinny King',
  description: 'Blinny King pancake restaurant in Jüri.'
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="et" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
