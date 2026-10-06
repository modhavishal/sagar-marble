import type { ContactPerson, NavLink, Reason } from '@/types';
import { PHONE_NUMBER } from '@/lib/constants';

/** Main navigation, in the order the links appear. */
export const navLinks: NavLink[] = [
  { label: 'Products', href: '#products' },
  { label: 'Machinery', href: '#machinery' },
  { label: 'Why us', href: '#why' },
  { label: 'Gallery', href: '#gallery' },
];

/** Stands apart from the other links with an outlined button style. */
export const visitLink: NavLink = { label: 'Visit us', href: '#contact' };

/** Reasons to buy from the yard, shown in the "Why us" section. */
export const reasons: Reason[] = [
  {
    title: 'Choose in person',
    description: 'See the colour and finish before you buy.',
  },
  {
    title: 'Cut to your size',
    description: 'Ask us about sizes and finishes for your site.',
  },
  {
    title: 'Clear pricing',
    description: 'Get straightforward rates before you order.',
  },
  {
    title: 'Nearby delivery',
    description: 'Ask about delivery to Pata and nearby villages.',
  },
];

/** What the water-cooled cutting line gives a customer. */
export const machineryBenefits = [
  'Exact size',
  'Smooth edges',
  'Less wastage',
  'Custom cutting',
];

/** People a visitor can phone at the yard. */
export const contacts: ContactPerson[] = [
  { name: 'Deva Modha', phone: PHONE_NUMBER },
  { name: 'Malde Modha', phone: PHONE_NUMBER },
];
