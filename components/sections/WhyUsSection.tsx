'use client';

import { motion } from 'framer-motion';
import { reasons } from '@/data/site';

/** યાર્ડમાંથી પથ્થર ખરીદવાના કારણોનું heading અને numbered list. */
export function WhyUsSection() {
  return (
    <motion.section
      className="section why-section"
      id="why"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="wrap why-layout">
        <div className="why-heading">
          <p className="eyebrow">થોડું વધુ વ્યક્તિગત</p>

          <h2 className="section-title">
            યોગ્ય પથ્થર, કોઈ મૂંઝવણ વગર.
          </h2>

          <p className="section-intro">
            મુલાકાત લો, પથ્થર જુઓ અને તમારા કામ માટે શું જોઈએ છે તેની ચર્ચા કરો.
          </p>
        </div>

        <div className="reason-list">
          {reasons.map((reason, index) => (
            <motion.article
              className="reason"
              key={reason.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <span className="reason-number">0{index + 1}</span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}