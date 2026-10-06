'use client';

import { motion } from 'framer-motion';
import { reasons } from '@/data/site';

/** Heading plus a numbered list of reasons to buy from the yard. */
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
          <p className="eyebrow">A little more personal</p>
          <h2 className="section-title">The right stone, without the guesswork.</h2>
          <p className="section-intro">
            Come by, take a look, and talk through what your project needs.
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
