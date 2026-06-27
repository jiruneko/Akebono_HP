import './globals.css';

import type { Metadata } from 'next';
import Header from './_components/Header';
import Footer from './_components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://akebono.tech'),
  title: {
    template: '%s | Akebono',
    default: 'Akebono | AIの力で士業の世界を変える',
  },
  description:
    'Akebonoは、AIの力で士業を支援するモダンテックカンパニーです。',
  openGraph: {
    title: 'Akebono | AIの力で士業の世界を変える',
    description:
      'Akebonoは、AIの力で士業を支援するモダンテックカンパニーです。',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://akebono.tech',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}