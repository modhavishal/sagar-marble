'use client';

import { motion } from 'framer-motion';
import {
  ADDRESS,
  MAPS_EMBED_URL,
  MAPS_URL,
  PHONE_HREF,
  WHATSAPP_CHAT_URL,
} from '@/lib/constants';
import { contacts } from '@/data/site';

/** સરનામું, ફોન નંબર, WhatsApp અને embedded map. */
export function ContactSection() {
  return (
    <motion.section
      className="section contact-section"
      id="contact"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7 }}
    >
      <div className="wrap contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">મળવા જરૂર આવો</p>

          <h2 className="section-title">
            તમારો પથ્થર પસંદ કરીએ.
          </h2>

          <p className="section-intro">
            {ADDRESS.street}, {ADDRESS.locality}, {ADDRESS.region} ખાતે અમારી મુલાકાત લો.
          </p>

          <div className="contact-people">
            {contacts.map((contact) => (
              <div className="contact-person" key={contact.name}>
                <h3>{contact.name}</h3>
                <a href={`tel:+91${contact.phone}`}>{contact.phone}</a>
              </div>
            ))}
          </div>

          <div className="contact-actions">
            <a className="button button-primary" href={PHONE_HREF}>
              અમને કૉલ કરો
            </a>

            <a
              className="button button-outline"
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <a
            className="directions-link"
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            રસ્તો જુઓ <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="map-frame">
          <iframe
            title="પાટા ગામ, ગુજરાતમાં સાગર માર્બલનું સ્થાન દર્શાવતો નકશો"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={MAPS_EMBED_URL}
          />

          <p>
            {ADDRESS.street}, {ADDRESS.locality}
          </p>
        </div>
      </div>
    </motion.section>
  );
}