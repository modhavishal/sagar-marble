'use client';

import { motion } from 'framer-motion';
import { PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';
import { machineryBenefits } from '@/data/site';

/** Split panel: the cutting line photo beside its benefits and a call button. */
export function MachinerySection() {
  return (
    <motion.section
      className="section machinery-section"
      id="machinery"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7 }}
    >
      <div className="wrap machinery-layout">
        <motion.div
          className="machinery-image"
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="/images/stone-cutting-workshop.jpg"
            alt="Water-cooled stone cutting machine at Sagar Marble"
            loading="lazy"
          />
          <span className="machinery-image-caption">Precision cutting at our yard</span>
        </motion.div>

        <motion.div
          className="machinery-copy"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="eyebrow">Made to measure</p>
          <h2 className="section-title">Machine cut, 100% perfect finish</h2>
          <p className="section-intro">
            Water-cooled cutting for a clean, accurate finish on every stone.
          </p>
          <ul className="machinery-benefits">
            {machineryBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <a className="button button-primary" href={PHONE_HREF}>
            Call {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
