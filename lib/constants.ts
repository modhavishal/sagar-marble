/**
 * Single source of truth for the details that appear in more than one place:
 * contact numbers, links and the yard address.
 */

export const SITE_NAME = 'Sagar Marble';
export const SITE_TAGLINE = 'Stone for the way you live.';

/** Mobile number as it is shown to visitors. */
export const PHONE_NUMBER = '9904422835';

/** Click-to-call target, including the country code. */
export const PHONE_HREF = `tel:+91${PHONE_NUMBER}`;

/** Opens a WhatsApp chat with the yard. */
export const WHATSAPP_URL = `https://wa.me/91${PHONE_NUMBER}`;

/** Pre-encoded "Hello, I'm interested in your stone." */
const WHATSAPP_MESSAGE_QUERY = 'Hello%2C%20I%27m%20interested%20in%20your%20stone.';

/** Opens a WhatsApp chat with that message already typed out. */
export const WHATSAPP_CHAT_URL = `${WHATSAPP_URL}?text=${WHATSAPP_MESSAGE_QUERY}`;

export const ADDRESS = {
  /** Street line shown under the map and in structured data. */
  street: 'Madhavapur Road',
  locality: 'Pata Village',
  region: 'Gujarat',
  country: 'IN',
  /** Street plus village, as shown to visitors. */
  display: 'Madhavapur Road, Pata Village',
  /** Village plus state, used in short captions. */
  short: 'Pata Village · Gujarat',
  /** Compact place label for the footer. */
  footerLabel: 'Pata, Gujarat',
} as const;

export const GEO = {
  latitude: 21.2794246,
  longitude: 69.936171,
} as const;

const COORDINATES = `${GEO.latitude},${GEO.longitude}`;

/** Opens driving directions in Google Maps. */
export const MAPS_URL = `https://www.google.com/maps?q=${COORDINATES}`;

/** Embedded Google Map shown next to the contact details. */
export const MAPS_EMBED_URL = `https://maps.google.com/maps?q=${COORDINATES}&z=15&output=embed`;

/** Colour-scheme preference is remembered under this key. */
export const THEME_STORAGE_KEY = 'sagar-theme';
