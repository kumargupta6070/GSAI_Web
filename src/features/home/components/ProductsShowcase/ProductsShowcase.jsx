import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import Modal from '../../../../common/Modal/Modal';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { PRODUCTS_DATA } from '../../../../data/gsaData';
import './ProductsShowcase.css';

export const ProductsShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="section-spacing home-prod-showcase-section bg-secondary-tint">
      <div className="container">
        <SectionTitle
          tag="Engineered Products"
          icon={<Layers size={14} />}
          title="Critical Powertrain &amp;"
          gradientWord="Structural Components"
          gradientType="orange"
          subtitle="Explore our flagship high-nickel Alfin rings, hot forged blanks, and CNC-machined parts manufactured to IATF 16949 standards."
        />

        <div className="home-prod-grid">
          {PRODUCTS_DATA.map((product, idx) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={idx * 90}>
              <div className="home-prod-card glass-card">
                <div className="home-prod-media">
                  <img src={product.image} alt={product.name} className="home-prod-img" />
                  <span className="home-prod-cat-badge">{product.category}</span>
                  <span className="home-prod-feat-badge">{product.badge}</span>
                </div>

                <div className="home-prod-body">
                  <h3 className="home-prod-title">{product.name}</h3>
                  <p className="home-prod-tagline">{product.tagline}</p>
                  <p className="home-prod-desc">{product.description}</p>

                  <div className="home-prod-specs-box">
                    {Object.entries(product.specs).slice(0, 2).map(([k, v], i) => (
                      <div key={i} className="home-spec-row">
                        <span className="home-spec-key">{k}:</span>
                        <span className="home-spec-val mono-font">{v}</span>
                      </div>
                    ))}
                  </div>

                  <div className="home-prod-card-actions">
                    <Button
                      variant="secondary"
                      size="sm"
                      icon={<Eye size={15} />}
                      onClick={() => setSelectedProduct(product)}
                    >
                      Technical Specs
                    </Button>
                    <Link to={`/contact?product=${encodeURIComponent(product.name)}`}>
                      <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/products">
            <Button variant="primary" size="lg" icon={<Layers size={18} />} iconPosition="left">
              Browse Full Product Catalog with Specification Sheets
            </Button>
          </Link>
        </div>

        {/* Modal for specs */}
        {selectedProduct && (
          <Modal
            isOpen={!!selectedProduct}
            onClose={() => setSelectedProduct(null)}
            title={selectedProduct.name}
            subtitle={`${selectedProduct.category} • ${selectedProduct.badge}`}
          >
            <div className="modal-specs-wrapper">
              <div className="modal-top-split">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-top-img" />
                <div className="modal-top-text">
                  <p>{selectedProduct.description}</p>
                  <div className="modal-specs-table">
                    {Object.entries(selectedProduct.specs).map(([k, v], i) => (
                      <div key={i} className="spec-item-row">
                        <span className="spec-k">{k}:</span>
                        <span className="spec-v mono-font">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="modal-features-block">
                <h4>Design &amp; Performance Highlights</h4>
                <ul>
                  {selectedProduct.features.map((f, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-cyan" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer-action">
                <Link to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`} onClick={() => setSelectedProduct(null)}>
                  <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    Request Formal Quotation
                  </Button>
                </Link>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductsShowcase;
