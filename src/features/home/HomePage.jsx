import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Flame, 
  Cpu, 
  Layers, 
  Award, 
  Compass, 
  CheckCircle2, 
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Download,
  Eye,
  FileSpreadsheet,
  Globe2,
  Wrench,
  Factory
} from 'lucide-react';
import Button from '../../common/Button';
import Modal from '../../common/Modal';
import IndustrialCanvas from '../../animations/IndustrialCanvas';
import ScrollReveal from '../../animations/ScrollReveal';
import TiltCard from '../../animations/TiltCard';
import CounterUp from '../../animations/CounterUp';
import { 
  COMPANY_INFO, 
  KEY_STATS, 
  PRODUCTS_DATA, 
  CAPABILITIES_DATA, 
  INDUSTRIES_DATA, 
  QUALITY_STANDARDS,
  FAQS_DATA 
} from '../../data/gsaData';
import './HomePage.css';

export const HomePage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  return (
    <div className="home-page-root">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="hero-section">
        <IndustrialCanvas />
        <div className="hero-gradient-overlay" />

        <div className="container hero-container">
          <div className="hero-content">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="hero-badge-pill">
                <span className="hero-badge-dot" />
                <span className="hero-badge-text">IATF 16949:2016 Certified World-Class Precision</span>
                <span className="hero-badge-flag">🇮🇳 Global Tier-1 OEM Supplier</span>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <h1 className="hero-title">
                High-Precision <span className="text-gradient">Forgings</span> &amp; <br />
                Austenitic <span className="text-gradient-orange">Alfin Rings</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="hero-description">
                GSA Industries India Pvt Ltd delivers sub-micron engineered closed-die forgings, high-nickel Alfin piston insert rings, and CNC-machined components to automotive, commercial, and agricultural leaders across 20+ countries.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="hero-cta-group">
                <Link to="/contact">
                  <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Submit RFQ / Inquiry
                  </Button>
                </Link>
                <Link to="/products">
                  <Button variant="secondary" size="lg" icon={<Layers size={18} />}>
                    Explore Products
                  </Button>
                </Link>
                <Link to="/quality">
                  <Button variant="outline" size="lg" icon={<ShieldCheck size={18} />}>
                    Quality Standards
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Quick Hero Floating Features */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="hero-feature-tags">
                <div className="feature-tag-item">
                  <Flame size={16} className="text-orange" />
                  <span>2,500 MT/Mo Capacity</span>
                </div>
                <div className="feature-tag-item">
                  <Cpu size={16} className="text-cyan" />
                  <span>Sub-Micron CNC Precision</span>
                </div>
                <div className="feature-tag-item">
                  <ShieldCheck size={16} className="text-emerald" />
                  <span>100% Ultrasonic Bonded</span>
                </div>
                <div className="feature-tag-item">
                  <Globe2 size={16} className="text-cyan" />
                  <span>20+ Export Destinations</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Hero Visual Showcase */}
          <div className="hero-visual-card">
            <ScrollReveal animation="scale-up" delay={350}>
              <TiltCard className="hero-image-tilt" maxTilt={8}>
                <div className="hero-image-wrapper glass-card">
                  <img 
                    src="/images/hero_forging_plant_1792597018373.jpg" 
                    alt="GSA Industries High Precision Forging Plant" 
                    className="hero-main-img"
                  />
                  <div className="hero-image-caption">
                    <div className="caption-badge">
                      <span className="live-pulse" /> Heavy Forging Press Line
                    </div>
                    <h4>Computer-Aided Hot Forging</h4>
                    <p>Closed-die forging up to 25 kg single-piece weight</p>
                  </div>

                  {/* Floating Metric Tag */}
                  <div className="hero-floating-badge glass-card">
                    <Award size={22} className="text-orange" />
                    <div>
                      <span className="floating-badge-title">35+ Years</span>
                      <span className="floating-badge-sub">Excellence Since 1988</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY STATS COUNTER STRIP
          ========================================================================= */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid glass-card">
            {KEY_STATS.map((stat, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="stat-card">
                <div className="stat-value-box">
                  <CounterUp 
                    target={stat.value} 
                    suffix={stat.suffix} 
                    className="stat-counter-text text-gradient"
                  />
                </div>
                <div className="stat-label-box">
                  <h4 className="stat-title">{stat.label}</h4>
                  <p className="stat-desc">{stat.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE CAPABILITIES TEASER
          ========================================================================= */}
      <section className="section-spacing capabilities-overview-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Factory size={14} /> Integrated Manufacturing Ecosystem
            </span>
            <h2 className="section-title">
              From Raw Ingot to <span className="text-gradient">Finished Sub-Micron Assembly</span>
            </h2>
            <p className="section-subtitle">
              Unlike ordinary jobbing shops, GSA Industries provides an unbroken vertically integrated manufacturing workflow: in-house die tooling, closed-die forging, SCADA continuous heat treatment, multi-axis CNC machining, and metrology verification.
            </p>
          </div>

          <div className="capabilities-grid">
            {CAPABILITIES_DATA.slice(0, 4).map((cap, idx) => (
              <ScrollReveal key={cap.id} animation="fade-up" delay={idx * 120}>
                <TiltCard className="capability-tilt-item" maxTilt={6}>
                  <div className="capability-card glass-card">
                    <div className="cap-img-box">
                      <img src={cap.image} alt={cap.title} className="cap-img" />
                      <div className="cap-badge-overlay">{cap.capacity}</div>
                    </div>
                    <div className="cap-body">
                      <h3 className="cap-title">{cap.title}</h3>
                      <p className="cap-desc">{cap.description}</p>
                      
                      <ul className="cap-equipment-list">
                        {cap.equipment.slice(0, 3).map((eq, i) => (
                          <li key={i}>
                            <CheckCircle2 size={15} className="text-cyan" />
                            <span>{eq}</span>
                          </li>
                        ))}
                      </ul>

                      <Link to={`/capabilities#${cap.id}`} className="cap-learn-more">
                        <span>Explore Facility Details</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/capabilities">
              <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                View All Manufacturing Capabilities &amp; Machinery Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCTS SHOWCASE
          ========================================================================= */}
      <section className="section-spacing products-showcase-section bg-secondary-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Layers size={14} /> Engineered Product Portfolio
            </span>
            <h2 className="section-title">
              Critical Components Powering <span className="text-gradient-orange">Heavy-Duty Engines</span>
            </h2>
            <p className="section-subtitle">
              Manufactured under strict IATF 16949 protocols to withstand extreme thermal cycles, high mechanical torque, and intense abrasive conditions.
            </p>
          </div>

          <div className="products-grid">
            {PRODUCTS_DATA.map((product, idx) => (
              <ScrollReveal key={product.id} animation="fade-up" delay={idx * 100}>
                <div className="product-card glass-card">
                  <div className="product-card-media">
                    <img src={product.image} alt={product.name} className="product-card-img" />
                    <span className="product-category-chip">{product.category}</span>
                    <span className="product-status-chip">{product.badge}</span>
                  </div>

                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-tagline">{product.tagline}</p>
                    <p className="product-card-desc">{product.description}</p>

                    <div className="product-specs-preview">
                      {Object.entries(product.specs).slice(0, 2).map(([key, val], i) => (
                        <div key={i} className="spec-item">
                          <span className="spec-label">{key}:</span>
                          <span className="spec-val mono-font">{val}</span>
                        </div>
                      ))}
                    </div>

                    <div className="product-card-actions">
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
                Browse Full Catalog with Specification Sheets
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          AGRIZONE SPOTLIGHT (AGRICULTURAL IMPLEMENTS)
          ========================================================================= */}
      <section className="section-spacing agrizone-section">
        <div className="container">
          <div className="agrizone-banner glass-card">
            <div className="agrizone-grid">
              <div className="agrizone-content">
                <span className="agrizone-badge">
                  <Flame size={14} /> Agrizone™ Leading Agricultural Division
                </span>
                <h2>Forged Boron-Steel Rotavator Blades &amp; Farm Equipment</h2>
                <p>
                  GSA's proprietary <strong>Agrizone</strong> brand is recognized globally by farmers and implement manufacturers for unmatched impact toughness and wear life in harsh, rocky soil conditions.
                </p>

                <div className="agrizone-features-list">
                  <div className="agri-feat">
                    <CheckCircle2 size={18} className="text-orange" />
                    <div>
                      <strong>30MnB5 High-Boron Steel</strong>
                      <p>Through-hardened to 48-52 HRC without brittle fracture risk</p>
                    </div>
                  </div>
                  <div className="agri-feat">
                    <CheckCircle2 size={18} className="text-orange" />
                    <div>
                      <strong>3x Wear Longevity</strong>
                      <p>Field-proven across 500+ operational hours in stony and abrasive soils</p>
                    </div>
                  </div>
                  <div className="agri-feat">
                    <CheckCircle2 size={18} className="text-orange" />
                    <div>
                      <strong>Direct OEM Compatibility</strong>
                      <p>Custom geometries for John Deere, Kubota, Mahindra, Shaktiman, Maschio</p>
                    </div>
                  </div>
                </div>

                <div className="agrizone-cta">
                  <Link to="/products?category=agri">
                    <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                      View Agrizone Product Line
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="agrizone-media">
                <img 
                  src="/images/agrizone_machinery_1792597104895.jpg" 
                  alt="Agrizone High-Boron Rotavator Blades and Agricultural Machinery" 
                  className="agrizone-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUALITY & METROLOGY TRUST BARRIER
          ========================================================================= */}
      <section className="section-spacing quality-trust-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <ShieldCheck size={14} /> Zero Defect Commitment
            </span>
            <h2 className="section-title">
              Automotive Precision Backed by <span className="text-gradient">Zeiss 3D Metrology</span>
            </h2>
            <p className="section-subtitle">
              Every part leaving our Punjab manufacturing plant complies with the world's most stringent quality protocols, verified on Carl Zeiss CNC CMMs and Thermo Optical Spectrometers.
            </p>
          </div>

          <div className="quality-standards-grid">
            {QUALITY_STANDARDS.map((std, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="quality-standard-card glass-card">
                  <div className="quality-card-header">
                    <span className="quality-badge">{std.name}</span>
                    <CheckCircle2 size={22} className="text-emerald" />
                  </div>
                  <h3 className="quality-card-title">{std.title}</h3>
                  <p className="quality-card-desc">{std.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Marquee Global Trust */}
          <div className="global-trust-marquee-wrapper mt-5">
            <p className="marquee-title-text">Trusted Across 20+ Global Export Destinations &amp; Tier-1 Supply Chains</p>
            <div className="marquee-wrapper">
              <div className="marquee-content">
                <span className="marquee-item">🇩🇪 Germany Tier-1 OEMs</span>
                <span className="marquee-item">🇺🇸 USA Automotive Powertrain</span>
                <span className="marquee-item">🇮🇳 India Major Auto &amp; Tractor OEMs</span>
                <span className="marquee-item">🇯🇵 Japan Precision Engine Assemblers</span>
                <span className="marquee-item">🇮🇹 Italy Agricultural Machinery</span>
                <span className="marquee-item">🇹🇷 Turkey Commercial Fleet Engines</span>
                <span className="marquee-item">🇬🇧 United Kingdom Heavy Engineering</span>
                <span className="marquee-item">🇧🇷 Brazil Agribusiness Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQS SECTION
          ========================================================================= */}
      <section className="section-spacing faqs-section bg-secondary-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Compass size={14} /> Frequently Asked Questions
            </span>
            <h2 className="section-title">
              Everything You Need to Know About <span className="text-gradient">Partnering with GSA</span>
            </h2>
          </div>

          <div className="faqs-accordion-container">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`faq-item glass-card ${isOpen ? 'active' : ''}`}>
                  <button 
                    className="faq-question-btn" 
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                  >
                    <span className="faq-q-text">{faq.question}</span>
                    <span className="faq-toggle-icon">
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRODUCT TECHNICAL SPECIFICATION MODAL
          ========================================================================= */}
      {selectedProduct && (
        <Modal
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          title={selectedProduct.name}
          subtitle={`${selectedProduct.category} • ${selectedProduct.badge}`}
        >
          <div className="modal-product-content">
            <div className="modal-product-top">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="modal-product-img" 
              />
              <div className="modal-product-summary">
                <p className="modal-desc">{selectedProduct.description}</p>
                <div className="modal-specs-table">
                  <h4 className="specs-table-title">Engineering Parameters &amp; Tolerances</h4>
                  <div className="specs-table-grid">
                    {Object.entries(selectedProduct.specs).map(([k, v], i) => (
                      <div key={i} className="specs-row">
                        <span className="specs-col-key">{k}</span>
                        <span className="specs-col-val mono-font">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="modal-features-section">
              <h4>Key Metallurgical &amp; Design Advantages</h4>
              <ul className="modal-features-list">
                {selectedProduct.features.map((feat, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-materials-section">
              <h4>Available Material Grades &amp; International Standards</h4>
              <div className="material-chips">
                {selectedProduct.materials.map((mat, i) => (
                  <span key={i} className="mat-chip mono-font">{mat}</span>
                ))}
              </div>
            </div>

            <div className="modal-action-bar">
              <Link 
                to={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
              >
                <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                  Request RFQ for this Product
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="md" 
                onClick={() => setSelectedProduct(null)}
              >
                Close Spec Sheet
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
