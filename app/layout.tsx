import './globals.css';
import { Fraunces, Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { siteUrl } from '@/lib/site-url';
import { businessSchema } from '@/lib/schema';
import { THEME_STORAGE_KEY } from '@/lib/constants';

const serif = Fraunces({
  subsets: ['latin'],
  variable: '--serif',
  weight: ['500', '700'],
});

const sans = Manrope({
  subsets: ['latin'],
  variable: '--sans',
});

export const metadata: Metadata = {
  metadataBase: siteUrl,

  title: 'Sagar Marble | Sandstone, Granite & Tiles in Pata, Gujarat',

  description:
    'Buy Rajasthani red sandstone, granite and tiles at Sagar Marble, Madhavapur Road, Pata Village, Gujarat. Call Deva Modha or Malde Modha on 9904422835 for stone and custom cutting.',

  applicationName: 'Sagar Marble',

  // Favicon
  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },

  category: 'Building materials',

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  keywords: [
    'Rajasthani red sandstone in Pata',
    'sandstone supplier in Gujarat',
    'granite and tiles in Pata',
    'stone cutting in Pata Village',
    'Sagar Marble Madhavapur Road',
  ],

  openGraph: {
    title: 'Sagar Marble | Sandstone, Granite & Tiles in Pata',

    description:
      'Visit Sagar Marble on Madhavapur Road, Pata Village for Rajasthani sandstone, granite, tiles and custom stone cutting.',

    type: 'website',

    locale: 'en_IN',

    url: '/',

    siteName: 'Sagar Marble',

    images: [
      {
        url: '/images/rajasthani-sandstone-yard.jpg',
        alt: 'Red Rajasthani sandstone slabs at Sagar Marble',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Sagar Marble | Stone in Pata, Gujarat',

    description:
      'Rajasthani sandstone, granite, tiles and custom stone cutting at Madhavapur Road, Pata.',

    images: ['/images/rajasthani-sandstone-yard.jpg'],
  },
};

const themeScript = `
(function () {
  try {
    const stored = localStorage.getItem('${THEME_STORAGE_KEY}');

    const theme =
      stored === 'dark' || stored === 'light'
        ? stored
        : 'light';

    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: themeScript,
          }}
        />
      </head>

      <body className={`${serif.variable} ${sans.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema).replace(
              /</g,
              '\\u003c'
            ),
          }}
        />

        {children}
      </body>
    </html>
  );
}