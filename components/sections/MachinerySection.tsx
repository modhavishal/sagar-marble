'use client';

import { motion } from 'framer-motion';
import { PHONE_HREF, PHONE_NUMBER } from '@/lib/constants';
import { machineryBenefits } from '@/data/site';

/** કટિંગ મશીનરીનો ફોટો, તેના ફાયદા અને કૉલ બટન સાથેનું વિભાગ. */
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
            alt="સાગર માર્બલ ખાતે વોટર-કૂલ્ડ પથ્થર કટિંગ મશીન"
            loading="lazy"
          />

          <span className="machinery-image-caption">
            અમારા યાર્ડમાં ચોક્કસ કટિંગ
          </span>
        </motion.div>

        <motion.div
          className="machinery-copy"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12 }}
        >
          <p className="eyebrow">તમારા માપ પ્રમાણે</p>

          <h2 className="section-title">
            મશીન કટિંગ, 100% પરફેક્ટ ફિનિશ
          </h2>

          <p className="section-intro">
            દરેક પથ્થર પર સ્વચ્છ અને ચોક્કસ ફિનિશ માટે વોટર-કૂલ્ડ કટિંગ.
          </p>

          <ul className="machinery-benefits">
            {machineryBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>

          <a className="button button-primary" href={PHONE_HREF}>
            કૉલ કરો {PHONE_NUMBER}
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}