export const SITE_NAME = 'સાગર માર્બલ';
export const SITE_TAGLINE = 'તમારી જીવનશૈલી માટેનો પથ્થર.';

/** વેબસાઇટની ડિફૉલ્ટ ભાષા. */
export const SITE_LANGUAGE = 'gu' as const;
export const SITE_LOCALE = 'gu-IN' as const;

/** મુલાકાતીઓને દર્શાવવામાં આવતા મોબાઇલ નંબર. */
export const PHONE_NUMBER = '૯૯૦૪૪૨૨૮૩૫';
export const PHONE_NUMBER2 = '૯૯૨૪૨૭૬૮૪૬';

/** ફોન અને WhatsApp માટેના આંતરિક નંબર. */
const PHONE_NUMBER_RAW = '9904422835';
const PHONE_NUMBER_RAW2 = '9924276846';

export const PHONE_HREF = `tel:+91${PHONE_NUMBER_RAW}`;
export const PHONE_HREF2 = `tel:+91${PHONE_NUMBER_RAW2}`;

export const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER_RAW}`;

const WHATSAPP_MESSAGE_QUERY =
  'નમસ્તે%2C%20મને%20તમારા%20પથ્થરોમાં%20રસ%20છે.';

export const WHATSAPP_CHAT_URL =
  `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE_QUERY}`;

export const ADDRESS = {
  street: 'માધવાપુર રોડ',
  locality: 'પાતા ગામ',
  region: 'ગુજરાત',
  country: 'IN',
  display: 'માધવાપુર રોડ, પાતા ગામ',
  short: 'પાતા ગામ · ગુજરાત',
  footerLabel: 'પાતા, ગુજરાત',
} as const;

export const GEO = {
  latitude: 21.2794246,
  longitude: 69.936171,
} as const;

const COORDINATES = `${GEO.latitude},${GEO.longitude}`;

export const MAPS_URL =
  `https://www.google.com/maps?q=${COORDINATES}`;

export const MAPS_EMBED_URL =
  `https://maps.google.com/maps?q=${COORDINATES}&z=15&output=embed`;

export const THEME_STORAGE_KEY = 'sagar-theme';