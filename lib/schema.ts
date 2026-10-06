import { siteUrl } from '@/lib/site-url';
import { ADDRESS, GEO, MAPS_URL, PHONE_NUMBER, SITE_NAME } from '@/lib/constants';

/**
 * schema.org structured data describing the yard, injected into the document
 * head so search engines can read the address, phone number and opening
 * location.
 */
export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  '@id': `${siteUrl.origin}/#business`,
  name: SITE_NAME,
  url: siteUrl.origin,
  description:
    'Rajasthani red sandstone, granite, tiles and custom stone cutting at Madhavapur Road, Pata Village, Gujarat.',
  telephone: `+91${PHONE_NUMBER}`,
  image: `${siteUrl.origin}/images/rajasthani-sandstone-yard.jpg`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.locality,
    addressRegion: ADDRESS.region,
    addressCountry: ADDRESS.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  hasMap: MAPS_URL,
  areaServed: {
    '@type': 'Place',
    name: `${ADDRESS.locality}, ${ADDRESS.region}`,
  },
  knowsAbout: [
    'Rajasthani red sandstone',
    'Granite',
    'Floor and wall tiles',
    'Custom stone cutting',
  ],
} as const;
