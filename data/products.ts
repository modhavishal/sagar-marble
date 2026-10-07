import type { Product } from '@/types';

/** યાર્ડમાં વેચાતા પથ્થરો, collection grid માં દર્શાવેલા ક્રમ પ્રમાણે. */

export const products: Product[] = [
  {
    title: 'રાજસ્થાની લાલ પથ્થર',
    description:
      'ફ્લોર, દિવાલો, પગથિયાં અને બહારની જગ્યાઓ માટે લાલ અને ગુલાબી સેન્ડસ્ટોન.',
    image: '/images/rajasthani-sandstone-yard.jpg',
    alt: 'બહારના પથ્થરના યાર્ડમાં ગોઠવેલા રાજસ્થાની લાલ સેન્ડસ્ટોનના સ્લેબ',
  },

  {
    title: 'ગ્રેનાઈટ',
    description:
      'કિચન, ફ્લોર અને પગથિયાં માટે ટકાઉ પોલિશ્ડ અને ટેક્સચરવાળો પથ્થર.',
    image: '/images/black-granite-slabs.jpg',
    alt: 'ઊભા પ્રદર્શિત કરેલા પોલિશ્ડ કાળા ગ્રેનાઈટના સ્લેબ',
  },

  {
    title: 'ટાઇલ્સ',
    description:
      'ફ્લોર અને દિવાલો માટે વ્યવહારુ અને સરળતાથી જાળવી શકાય તેવી ફિનિશ ધરાવતી ટાઇલ્સ.',
    image: '/images/sandstone-tile-sample.jpg',
    alt: 'સેમ્પલ તરીકે ગોઠવેલી કુદરતી સેન્ડસ્ટોનની ફ્લોર ટાઇલ્સ',
  },
];