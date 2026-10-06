'use client';

import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '@/lib/constants';
import { WhatsAppIcon } from '@/components/ui/icons';

/** Floating chat button pinned to the bottom-right of the page. */
export function WhatsAppButton() {
  return (
    <motion.a
      className="whatsapp-float"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sagar Marble on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.35 }}
    >
      <WhatsAppIcon />
      WhatsApp
    </motion.a>
  );
}
