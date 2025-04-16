import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import Header from './ui/components/Header';
import Footer from './ui/components/Footer';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'AlphaView App',
  description:
    'A simple Next.js app to display financial data from Alpha Vantage.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-50">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased text-gray-900 min-h-screen`}
      >
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
