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

  title: 'સાગર માર્બલ | રાજસ્થાની લાલ પથ્થર, ગ્રેનાઈટ અને ટાઇલ્સ | પાતા, ગુજરાત',

  description:
    'સાગર માર્બલ, માધવાપુર રોડ, પાતા વિલેજ, ગુજરાત ખાતે રાજસ્થાની રેડ સેન્ડસ્ટોન, ગ્રેનાઈટ અને ટાઇલ્સ ઉપલબ્ધ છે. સ્ટોન અને કસ્ટમ કટિંગ માટે 9904422835 પર સંપર્ક કરો.',

  applicationName: 'સાગર માર્બલ',

  icons: {
    icon: '/images/favicon.png',
    shortcut: '/images/favicon.png',
    apple: '/images/favicon.png',
  },

  category: 'બાંધકામ સામગ્રી',

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
    'પાટામાં રાજસ્થાની રેડ સેન્ડસ્ટોન',
    'ગુજરાતમાં સેન્ડસ્ટોન સપ્લાયર',
    'પાટામાં ગ્રેનાઈટ અને ટાઇલ્સ',
    'પાતા વિલેજમાં સ્ટોન કટિંગ',
    'માધવાપુર રોડ સાગર માર્બલ',
    'સાગર માર્બલ પાતા',
  ],

  openGraph: {
    title: 'સાગર માર્બલ | સેન્ડસ્ટોન, ગ્રેનાઈટ અને ટાઇલ્સ | પાતા',

    description:
      'માધવાપુર રોડ, પાતા વિલેજ ખાતે સાગર માર્બલની મુલાકાત લો. રાજસ્થાની લાલ પથ્થર, ગ્રેનાઈટ, ટાઇલ્સ અને કસ્ટમ સ્ટોન કટિંગ ઉપલબ્ધ છે.',

    type: 'website',

    locale: 'gu_IN',

    url: '/',

    siteName: 'સાગર માર્બલ',

    images: [
      {
        url: '/images/rajasthani-sandstone-yard.jpg',
        alt: 'સાગર માર્બલ ખાતે રાજસ્થાની રેડ સેન્ડસ્ટોનના સ્લેબ',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'સાગર માર્બલ | પાતા, ગુજરાત',

    description:
      'માધવાપુર રોડ, પાતા ખાતે રાજસ્થાની લાલ પથ્થર, ગ્રેનાઈટ, ટાઇલ્સ અને કસ્ટમ સ્ટોન કટિંગ.',

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
    <html lang="gu" suppressHydrationWarning>
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