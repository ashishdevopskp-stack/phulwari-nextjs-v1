import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Navbar from '@/app/Navbar';
import Footer from '@/app/footer/page';
import './globals.css';

/* --------------------------------------------------------------------- */
/*  Update these once — they're reused across all the metadata below     */
/* --------------------------------------------------------------------- */
const SITE_URL = 'https://www.phulwari.co.in';
const SITE_NAME = 'Phulwari Mother & Child Activity Centre';
const SITE_DESCRIPTION =
  "Patna's unique mother & child activity centre where children learn, play, grow and explore while mothers stay active, healthy and engaged. Music, dance, gymnastics, MMA, roller skating, art & craft, yoga, cricket and more — plus fitness programs for mothers, summer & winter camps, and birthday party celebrations.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  keywords: [
    'mother and child activity centre Patna',
    'kids activity centre Patna',
    'children activities Patna',
    'mother fitness program Patna',
    'mother and toddler program Patna',
    'summer camp Patna',
    'winter camp Patna',
    'birthday party venue Patna',
    'kids dance and music classes Patna',
    'kids gymnastics MMA Patna',
    'roller skating classes Patna',
    'kids yoga cricket Patna',
    'Phulwari Patna',
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-image.jpg', // Place a 1200×630 image at /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ['/og-image.jpg'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  // TODO: add your Google Search Console verification code once you have it
  // verification: {
  //   google: 'your-google-site-verification-code',
  // },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF4D8D',
};

/* --------------------------------------------------------------------- */
/*  LocalBusiness structured data — helps Google show map-pack / local   */
/*  search results with your address, phone, and hours.                  */
/* --------------------------------------------------------------------- */
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: SITE_NAME,
  image: `${SITE_URL}/phulwari_logo.png`,
  url: SITE_URL,
  telephone: '+916207368839',
  email: 'info@phulwari.co.in',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'M/32, Road No. 25, Sri Krishna Nagar, Kidwaipuri Main Road',
    addressLocality: 'Patna',
    addressRegion: 'Bihar',
    postalCode: '800001',
    addressCountry: 'IN',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:30',
      closes: '11:30',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '18:30',
      closes: '21:00',
    },
  ],
  priceRange: '₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}