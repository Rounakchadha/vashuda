import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import './globals.css';
import '../../styles/prose.css';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BUSINESS_INFO } from '@/lib/constants';
import { jsonLd } from '@/lib/seo';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS_INFO.name} - Global Metal Scrap Trading`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: 'Leading importers, exporters, and traders of ferrous and non-ferrous metal scrap across the globe.',
  // More metadata in seo.ts
};

export default function RootLayout({
  children,
}: { 
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        {/* JSON-LD scripts are moved to the body to prevent hydration errors */}
      </head>
      <body className="font-body">
        <div dangerouslySetInnerHTML={{ __html: jsonLd.website }} />
        <div dangerouslySetInnerHTML={{ __html: jsonLd.organization }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
