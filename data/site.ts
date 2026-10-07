import type { ContactPerson, NavLink, Reason } from '@/types';

import { PHONE_NUMBER, PHONE_NUMBER2 } from '@/lib/constants';

/** મુખ્ય navigation, જે ક્રમમાં links દેખાશે. */

export const navLinks: NavLink[] = [
  { label: 'ઉત્પાદનો', href: '#products' },

  { label: 'મશીનરી', href: '#machinery' },

  { label: 'અમને કેમ પસંદ કરો', href: '#why' },

  { label: 'ગેલેરી', href: '#gallery' },
];

/** અન્ય linksથી અલગ outlined button. */

export const visitLink: NavLink = {
  label: 'મુલાકાત લો',
  href: '#contact',
};

/** યાર્ડમાંથી ખરીદી કરવાના મુખ્ય કારણો. */

export const reasons: Reason[] = [
  {
    title: 'રૂબરૂ પસંદ કરો',
    description: 'ખરીદતા પહેલાં પથ્થરનો રંગ અને ફિનિશ જુઓ.',
  },

  {
    title: 'તમારા માપ પ્રમાણે કટિંગ',
    description: 'તમારા સ્થળ માટે માપ અને ફિનિશ વિશે પૂછો.',
  },

  {
    title: 'સ્પષ્ટ ભાવ',
    description: 'ઓર્ડર કરતા પહેલાં સીધા અને સ્પષ્ટ ભાવ મેળવો.',
  },

  {
    title: 'નજીકમાં ડિલિવરી',
    description: 'પાતા અને નજીકના ગામોમાં ડિલિવરી વિશે પૂછો.',
  },
];

/** વોટર-કૂલ્ડ કટિંગ મશીનરીથી ગ્રાહકને મળતા લાભો. */

export const machineryBenefits = [
  'ચોક્કસ માપ',
  'સપાટ કિનારીઓ',
  'ઓછો બગાડ',
  'કસ્ટમ કટિંગ',
];

/** યાર્ડ પર ફોન કરી શકાય તેવા વ્યક્તિઓ. */

export const contacts: ContactPerson[] = [
  { name: 'દેવા મોઢા', phone: PHONE_NUMBER },
  { name: 'માલદે મોઢા', phone: PHONE_NUMBER2 },
];