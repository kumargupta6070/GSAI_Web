import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Eye, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import Modal from '../../../../common/Modal/Modal';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { PRODUCTS_DATA } from '../../../../data/gsaData';
import './ProductsShowcase.css';

const CATEGORIES = [
  { id: 'all', label: 'All Divisions' },
  { id: 'alfin', label: 'Alfin Rings' },
  { id: 'forged', label: 'Forgings' },
  { id: 'cnc', label: 'CNC Machined' },
  { id: 'auto', label: 'Automotive' },
  { id: 'agri', label: 'Agrizone' }
];

export const ProductsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter(p => p.categorySlug === activeCategory);

  return (
    <section className="section-spacing home-prod-showcase-section bg-secondary-tint">
      <div className="container">
        <ScrollReveal animation="fade-down">
          <SectionTitle
            tag="Engineered Products"
            icon={<Layers size={14} />}
            title="Critical Powertrain &amp;"
            gradientWord="Structural Components"
            gradientType="orange"
            subtitle="Explore our flagship high-nickel Alfin rings, hot forged blanks, and CNC-machined parts manufactured to IATF 16949 standards."
          />
        </ScrollReveal>

        {/* Dynamic Interactive Filter Tabs */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="home-prod-filter-tabs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`filter-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                {activeCategory === cat.id && <span className="active-glow-dot" />}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="home-prod-grid">
          {filteredProducts.map((product, idx) => (
            <ScrollReveal key={product.id} animation="fade-up" delay={idx * 80}>
              <TiltCard maxTilt={5}>
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
                          Request RFQ
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal animation="fade-up" delay={300}>
          <div className="text-center mt-5">
            <Link to="/products">
              <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Explore Full Product Catalogue &amp; Tolerances
              </Button>
            </Link>
          </div>
        </ScrollReveal>

        {/* Technical Specs Modal */}
        {selectedProduct && (
          <Modal
            isOpen={Boolean(selectedProduct)}
            onClose={() => setSelectedProduct(null)}
            title={selectedProduct.name}
            size="lg"
          >
            <div className="prod-modal-content">
              <div className="prod-modal-grid">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name} 
                  className="prod-modal-img" 
                />
                <div>
                  <span className="modal-cat-tag">{selectedProduct.category}</span>
                  <p className="prod-modal-tagline">{selectedProduct.tagline}</p>
                  <p className="prod-modal-desc">{selectedProduct.description}</p>
                </div>
              </div>

              <div className="modal-section-block">
                <h4>Technical Specifications</h4>
                <div className="modal-specs-table">
                  {Object.entries(selectedProduct.specs).map(([k, v], idx) => (
                    <div key={idx} className="modal-specs-row">
                      <strong>{k}</strong>
                      <span className="mono-font">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4>Engineered Key Advantages</h4>
                <ul className="modal-features-list">
                  {selectedProduct.features.map((feat, i) => (
                    <li key={i}>
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-actions-bar">
                <Link to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`} onClick={() => setSelectedProduct(null)}>
                  <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    Inquire For This Component
                  </Button>
                </Link>
                <Button variant="secondary" size="md" onClick={() => setSelectedProduct(null)}>
                  Close Dossier
                </Button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default ProductsShowcase;
