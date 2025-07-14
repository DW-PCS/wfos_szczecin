import ConditionalTextToSpeech from '@/components/features/conditional-text-to-speech';
import SkipLinks from '@/components/features/skip-links';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WFOŚiGW w Szczecinie',
  description: 'Wojewódzki Fundusz Ochrony Środowiska i Gospodarki Wodnej w Szczecinie',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.className} antialiased`}>
        <SkipLinks />
        <Navbar />
        {children}
        <ConditionalTextToSpeech />
        <Footer />
      </body>
    </html>
  );
}
