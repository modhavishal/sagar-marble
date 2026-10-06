/** Shared domain types for the Sagar Marble site. */

/** Colour scheme the visitor is currently viewing. */
export type Theme = 'dark' | 'light';

/** A stone product shown in the "Our collection" grid. */
export type Product = {
  /** Product name, e.g. "Rajasthani sandstone". */
  title: string;
  /** One-line description of what the material is used for. */
  description: string;
  /** Path to the product photo inside /public. */
  image: string;
  /** Accessible description of the product photo. */
  alt: string;
  /**
   * Optional modifier class applied to the product image block, letting a
   * product use a CSS-drawn texture instead of a photo.
   */
  style?: string;
};

/** An image in the yard gallery, also used by the lightbox. */
export type GalleryImage = {
  /** Path to the image inside /public. */
  src: string;
  /** Accessible description of the image. */
  alt: string;
  /** Short label shown over the image and in the lightbox caption. */
  caption: string;
};

/** An entry in the main navigation. */
export type NavLink = {
  label: string;
  /** In-page anchor or route, e.g. "#products". */
  href: string;
};

/** A selling point listed in the "Why us" section. */
export type Reason = {
  title: string;
  description: string;
};

/** A person a visitor can phone at the yard. */
export type ContactPerson = {
  name: string;
  /** Local mobile number, without the country code. */
  phone: string;
};
