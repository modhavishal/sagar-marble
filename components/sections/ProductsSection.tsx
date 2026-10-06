'use client';

import { motion } from 'framer-motion';
import { products } from '@/data/products';

/** Collection grid of the three stone types sold at the yard. */
export function ProductsSection() {
  return (
    <motion.section
      className="section products-section"
      id="products"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 0.68, 0, 1] }}
    >
      <div className="wrap">
        <div className="section-heading">
          <p className="eyebrow">Our collection</p>
          <h2 className="section-title">Good stone starts here.</h2>
          <p className="section-intro">Materials for the spaces you make your own.</p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              key={product.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              <div className={`product-image ${product.style ?? ''}`}>
                <img src={product.image} alt={product.alt} loading="lazy" />
                <span className="product-number">0{index + 1}</span>
              </div>
              <div className="product-copy">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
